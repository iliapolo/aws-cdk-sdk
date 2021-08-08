/**
 * @schema RdsAddRoleToDbClusterMessage
 */
export interface RdsAddRoleToDbClusterMessage {
  /**
   * @schema RdsAddRoleToDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsAddRoleToDbClusterMessage#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsAddRoleToDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * Converts an object of type 'RdsAddRoleToDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAddRoleToDbClusterMessage(obj: RdsAddRoleToDbClusterMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsAddRoleToDbInstanceMessage
 */
export interface RdsAddRoleToDbInstanceMessage {
  /**
   * @schema RdsAddRoleToDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsAddRoleToDbInstanceMessage#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsAddRoleToDbInstanceMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * Converts an object of type 'RdsAddRoleToDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAddRoleToDbInstanceMessage(obj: RdsAddRoleToDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'RoleArn': obj.roleArn,
    'FeatureName': obj.featureName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsAddSourceIdentifierToSubscriptionMessage
 */
export interface RdsAddSourceIdentifierToSubscriptionMessage {
  /**
   * @schema RdsAddSourceIdentifierToSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema RdsAddSourceIdentifierToSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

}

/**
 * Converts an object of type 'RdsAddSourceIdentifierToSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAddSourceIdentifierToSubscriptionMessage(obj: RdsAddSourceIdentifierToSubscriptionMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsAddSourceIdentifierToSubscriptionResult
 */
export interface RdsAddSourceIdentifierToSubscriptionResult {
  /**
   * @schema RdsAddSourceIdentifierToSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RdsEventSubscription;

}

/**
 * Converts an object of type 'RdsAddSourceIdentifierToSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAddSourceIdentifierToSubscriptionResult(obj: RdsAddSourceIdentifierToSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_RdsEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsAddTagsToResourceMessage
 */
export interface RdsAddTagsToResourceMessage {
  /**
   * @schema RdsAddTagsToResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema RdsAddTagsToResourceMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsAddTagsToResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAddTagsToResourceMessage(obj: RdsAddTagsToResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsApplyPendingMaintenanceActionMessage
 */
export interface RdsApplyPendingMaintenanceActionMessage {
  /**
   * @schema RdsApplyPendingMaintenanceActionMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema RdsApplyPendingMaintenanceActionMessage#ApplyAction
   */
  readonly applyAction?: string;

  /**
   * @schema RdsApplyPendingMaintenanceActionMessage#OptInType
   */
  readonly optInType?: string;

}

/**
 * Converts an object of type 'RdsApplyPendingMaintenanceActionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsApplyPendingMaintenanceActionMessage(obj: RdsApplyPendingMaintenanceActionMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsApplyPendingMaintenanceActionResult
 */
export interface RdsApplyPendingMaintenanceActionResult {
  /**
   * @schema RdsApplyPendingMaintenanceActionResult#ResourcePendingMaintenanceActions
   */
  readonly resourcePendingMaintenanceActions?: RdsResourcePendingMaintenanceActions;

}

/**
 * Converts an object of type 'RdsApplyPendingMaintenanceActionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsApplyPendingMaintenanceActionResult(obj: RdsApplyPendingMaintenanceActionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourcePendingMaintenanceActions': toJson_RdsResourcePendingMaintenanceActions(obj.resourcePendingMaintenanceActions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsAuthorizeDbSecurityGroupIngressMessage
 */
export interface RdsAuthorizeDbSecurityGroupIngressMessage {
  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressMessage#EC2SecurityGroupId
   */
  readonly ec2SecurityGroupId?: string;

  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * Converts an object of type 'RdsAuthorizeDbSecurityGroupIngressMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAuthorizeDbSecurityGroupIngressMessage(obj: RdsAuthorizeDbSecurityGroupIngressMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSecurityGroupName': obj.dbSecurityGroupName,
    'CIDRIP': obj.cidrip,
    'EC2SecurityGroupName': obj.ec2SecurityGroupName,
    'EC2SecurityGroupId': obj.ec2SecurityGroupId,
    'EC2SecurityGroupOwnerId': obj.ec2SecurityGroupOwnerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsAuthorizeDbSecurityGroupIngressResult
 */
export interface RdsAuthorizeDbSecurityGroupIngressResult {
  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressResult#DBSecurityGroup
   */
  readonly dbSecurityGroup?: RdsdbSecurityGroup;

}

/**
 * Converts an object of type 'RdsAuthorizeDbSecurityGroupIngressResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAuthorizeDbSecurityGroupIngressResult(obj: RdsAuthorizeDbSecurityGroupIngressResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSecurityGroup': toJson_RdsdbSecurityGroup(obj.dbSecurityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsBacktrackDbClusterMessage
 */
export interface RdsBacktrackDbClusterMessage {
  /**
   * @schema RdsBacktrackDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsBacktrackDbClusterMessage#BacktrackTo
   */
  readonly backtrackTo?: string;

  /**
   * @schema RdsBacktrackDbClusterMessage#Force
   */
  readonly force?: boolean;

  /**
   * @schema RdsBacktrackDbClusterMessage#UseEarliestTimeOnPointInTimeUnavailable
   */
  readonly useEarliestTimeOnPointInTimeUnavailable?: boolean;

}

/**
 * Converts an object of type 'RdsBacktrackDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsBacktrackDbClusterMessage(obj: RdsBacktrackDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'BacktrackTo': obj.backtrackTo,
    'Force': obj.force,
    'UseEarliestTimeOnPointInTimeUnavailable': obj.useEarliestTimeOnPointInTimeUnavailable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterBacktrack
 */
export interface RdsdbClusterBacktrack {
  /**
   * @schema RdsdbClusterBacktrack#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbClusterBacktrack#BacktrackIdentifier
   */
  readonly backtrackIdentifier?: string;

  /**
   * @schema RdsdbClusterBacktrack#BacktrackTo
   */
  readonly backtrackTo?: string;

  /**
   * @schema RdsdbClusterBacktrack#BacktrackedFrom
   */
  readonly backtrackedFrom?: string;

  /**
   * @schema RdsdbClusterBacktrack#BacktrackRequestCreationTime
   */
  readonly backtrackRequestCreationTime?: string;

  /**
   * @schema RdsdbClusterBacktrack#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RdsdbClusterBacktrack' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterBacktrack(obj: RdsdbClusterBacktrack | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'BacktrackIdentifier': obj.backtrackIdentifier,
    'BacktrackTo': obj.backtrackTo,
    'BacktrackedFrom': obj.backtrackedFrom,
    'BacktrackRequestCreationTime': obj.backtrackRequestCreationTime,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCancelExportTaskMessage
 */
export interface RdsCancelExportTaskMessage {
  /**
   * @schema RdsCancelExportTaskMessage#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier?: string;

}

/**
 * Converts an object of type 'RdsCancelExportTaskMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCancelExportTaskMessage(obj: RdsCancelExportTaskMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportTaskIdentifier': obj.exportTaskIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsExportTask
 */
export interface RdsExportTask {
  /**
   * @schema RdsExportTask#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier?: string;

  /**
   * @schema RdsExportTask#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema RdsExportTask#ExportOnly
   */
  readonly exportOnly?: string[];

  /**
   * @schema RdsExportTask#SnapshotTime
   */
  readonly snapshotTime?: string;

  /**
   * @schema RdsExportTask#TaskStartTime
   */
  readonly taskStartTime?: string;

  /**
   * @schema RdsExportTask#TaskEndTime
   */
  readonly taskEndTime?: string;

  /**
   * @schema RdsExportTask#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema RdsExportTask#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema RdsExportTask#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema RdsExportTask#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsExportTask#Status
   */
  readonly status?: string;

  /**
   * @schema RdsExportTask#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema RdsExportTask#TotalExtractedDataInGB
   */
  readonly totalExtractedDataInGb?: number;

  /**
   * @schema RdsExportTask#FailureCause
   */
  readonly failureCause?: string;

  /**
   * @schema RdsExportTask#WarningMessage
   */
  readonly warningMessage?: string;

}

/**
 * Converts an object of type 'RdsExportTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsExportTask(obj: RdsExportTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportTaskIdentifier': obj.exportTaskIdentifier,
    'SourceArn': obj.sourceArn,
    'ExportOnly': obj.exportOnly?.map(y => y),
    'SnapshotTime': obj.snapshotTime,
    'TaskStartTime': obj.taskStartTime,
    'TaskEndTime': obj.taskEndTime,
    'S3Bucket': obj.s3Bucket,
    'S3Prefix': obj.s3Prefix,
    'IamRoleArn': obj.iamRoleArn,
    'KmsKeyId': obj.kmsKeyId,
    'Status': obj.status,
    'PercentProgress': obj.percentProgress,
    'TotalExtractedDataInGB': obj.totalExtractedDataInGb,
    'FailureCause': obj.failureCause,
    'WarningMessage': obj.warningMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCopyDbClusterParameterGroupMessage
 */
export interface RdsCopyDbClusterParameterGroupMessage {
  /**
   * @schema RdsCopyDbClusterParameterGroupMessage#SourceDBClusterParameterGroupIdentifier
   */
  readonly sourceDbClusterParameterGroupIdentifier?: string;

  /**
   * @schema RdsCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupIdentifier
   */
  readonly targetDbClusterParameterGroupIdentifier?: string;

  /**
   * @schema RdsCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupDescription
   */
  readonly targetDbClusterParameterGroupDescription?: string;

  /**
   * @schema RdsCopyDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCopyDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCopyDbClusterParameterGroupMessage(obj: RdsCopyDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBClusterParameterGroupIdentifier': obj.sourceDbClusterParameterGroupIdentifier,
    'TargetDBClusterParameterGroupIdentifier': obj.targetDbClusterParameterGroupIdentifier,
    'TargetDBClusterParameterGroupDescription': obj.targetDbClusterParameterGroupDescription,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCopyDbClusterParameterGroupResult
 */
export interface RdsCopyDbClusterParameterGroupResult {
  /**
   * @schema RdsCopyDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: RdsdbClusterParameterGroup;

}

/**
 * Converts an object of type 'RdsCopyDbClusterParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCopyDbClusterParameterGroupResult(obj: RdsCopyDbClusterParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroup': toJson_RdsdbClusterParameterGroup(obj.dbClusterParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCopyDbClusterSnapshotMessage
 */
export interface RdsCopyDbClusterSnapshotMessage {
  /**
   * @schema RdsCopyDbClusterSnapshotMessage#SourceDBClusterSnapshotIdentifier
   */
  readonly sourceDbClusterSnapshotIdentifier?: string;

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#TargetDBClusterSnapshotIdentifier
   */
  readonly targetDbClusterSnapshotIdentifier?: string;

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * Converts an object of type 'RdsCopyDbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCopyDbClusterSnapshotMessage(obj: RdsCopyDbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBClusterSnapshotIdentifier': obj.sourceDbClusterSnapshotIdentifier,
    'TargetDBClusterSnapshotIdentifier': obj.targetDbClusterSnapshotIdentifier,
    'KmsKeyId': obj.kmsKeyId,
    'PreSignedUrl': obj.preSignedUrl,
    'CopyTags': obj.copyTags,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
    'SourceRegion': obj.sourceRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCopyDbClusterSnapshotResult
 */
export interface RdsCopyDbClusterSnapshotResult {
  /**
   * @schema RdsCopyDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: RdsdbClusterSnapshot;

}

/**
 * Converts an object of type 'RdsCopyDbClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCopyDbClusterSnapshotResult(obj: RdsCopyDbClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshot': toJson_RdsdbClusterSnapshot(obj.dbClusterSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCopyDbParameterGroupMessage
 */
export interface RdsCopyDbParameterGroupMessage {
  /**
   * @schema RdsCopyDbParameterGroupMessage#SourceDBParameterGroupIdentifier
   */
  readonly sourceDbParameterGroupIdentifier?: string;

  /**
   * @schema RdsCopyDbParameterGroupMessage#TargetDBParameterGroupIdentifier
   */
  readonly targetDbParameterGroupIdentifier?: string;

  /**
   * @schema RdsCopyDbParameterGroupMessage#TargetDBParameterGroupDescription
   */
  readonly targetDbParameterGroupDescription?: string;

  /**
   * @schema RdsCopyDbParameterGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCopyDbParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCopyDbParameterGroupMessage(obj: RdsCopyDbParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBParameterGroupIdentifier': obj.sourceDbParameterGroupIdentifier,
    'TargetDBParameterGroupIdentifier': obj.targetDbParameterGroupIdentifier,
    'TargetDBParameterGroupDescription': obj.targetDbParameterGroupDescription,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCopyDbParameterGroupResult
 */
export interface RdsCopyDbParameterGroupResult {
  /**
   * @schema RdsCopyDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: RdsdbParameterGroup;

}

/**
 * Converts an object of type 'RdsCopyDbParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCopyDbParameterGroupResult(obj: RdsCopyDbParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroup': toJson_RdsdbParameterGroup(obj.dbParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCopyDbSnapshotMessage
 */
export interface RdsCopyDbSnapshotMessage {
  /**
   * @schema RdsCopyDbSnapshotMessage#SourceDBSnapshotIdentifier
   */
  readonly sourceDbSnapshotIdentifier?: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#TargetDBSnapshotIdentifier
   */
  readonly targetDbSnapshotIdentifier?: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsCopyDbSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema RdsCopyDbSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#TargetCustomAvailabilityZone
   */
  readonly targetCustomAvailabilityZone?: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * Converts an object of type 'RdsCopyDbSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCopyDbSnapshotMessage(obj: RdsCopyDbSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBSnapshotIdentifier': obj.sourceDbSnapshotIdentifier,
    'TargetDBSnapshotIdentifier': obj.targetDbSnapshotIdentifier,
    'KmsKeyId': obj.kmsKeyId,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
    'CopyTags': obj.copyTags,
    'PreSignedUrl': obj.preSignedUrl,
    'OptionGroupName': obj.optionGroupName,
    'TargetCustomAvailabilityZone': obj.targetCustomAvailabilityZone,
    'SourceRegion': obj.sourceRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCopyDbSnapshotResult
 */
export interface RdsCopyDbSnapshotResult {
  /**
   * @schema RdsCopyDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: RdsdbSnapshot;

}

/**
 * Converts an object of type 'RdsCopyDbSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCopyDbSnapshotResult(obj: RdsCopyDbSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshot': toJson_RdsdbSnapshot(obj.dbSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCopyOptionGroupMessage
 */
export interface RdsCopyOptionGroupMessage {
  /**
   * @schema RdsCopyOptionGroupMessage#SourceOptionGroupIdentifier
   */
  readonly sourceOptionGroupIdentifier?: string;

  /**
   * @schema RdsCopyOptionGroupMessage#TargetOptionGroupIdentifier
   */
  readonly targetOptionGroupIdentifier?: string;

  /**
   * @schema RdsCopyOptionGroupMessage#TargetOptionGroupDescription
   */
  readonly targetOptionGroupDescription?: string;

  /**
   * @schema RdsCopyOptionGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCopyOptionGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCopyOptionGroupMessage(obj: RdsCopyOptionGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceOptionGroupIdentifier': obj.sourceOptionGroupIdentifier,
    'TargetOptionGroupIdentifier': obj.targetOptionGroupIdentifier,
    'TargetOptionGroupDescription': obj.targetOptionGroupDescription,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCopyOptionGroupResult
 */
export interface RdsCopyOptionGroupResult {
  /**
   * @schema RdsCopyOptionGroupResult#OptionGroup
   */
  readonly optionGroup?: RdsOptionGroup;

}

/**
 * Converts an object of type 'RdsCopyOptionGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCopyOptionGroupResult(obj: RdsCopyOptionGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroup': toJson_RdsOptionGroup(obj.optionGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateCustomAvailabilityZoneMessage
 */
export interface RdsCreateCustomAvailabilityZoneMessage {
  /**
   * @schema RdsCreateCustomAvailabilityZoneMessage#CustomAvailabilityZoneName
   */
  readonly customAvailabilityZoneName?: string;

  /**
   * @schema RdsCreateCustomAvailabilityZoneMessage#ExistingVpnId
   */
  readonly existingVpnId?: string;

  /**
   * @schema RdsCreateCustomAvailabilityZoneMessage#NewVpnTunnelName
   */
  readonly newVpnTunnelName?: string;

  /**
   * @schema RdsCreateCustomAvailabilityZoneMessage#VpnTunnelOriginatorIP
   */
  readonly vpnTunnelOriginatorIp?: string;

}

/**
 * Converts an object of type 'RdsCreateCustomAvailabilityZoneMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateCustomAvailabilityZoneMessage(obj: RdsCreateCustomAvailabilityZoneMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomAvailabilityZoneName': obj.customAvailabilityZoneName,
    'ExistingVpnId': obj.existingVpnId,
    'NewVpnTunnelName': obj.newVpnTunnelName,
    'VpnTunnelOriginatorIP': obj.vpnTunnelOriginatorIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateCustomAvailabilityZoneResult
 */
export interface RdsCreateCustomAvailabilityZoneResult {
  /**
   * @schema RdsCreateCustomAvailabilityZoneResult#CustomAvailabilityZone
   */
  readonly customAvailabilityZone?: RdsCustomAvailabilityZone;

}

/**
 * Converts an object of type 'RdsCreateCustomAvailabilityZoneResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateCustomAvailabilityZoneResult(obj: RdsCreateCustomAvailabilityZoneResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomAvailabilityZone': toJson_RdsCustomAvailabilityZone(obj.customAvailabilityZone),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbClusterMessage
 */
export interface RdsCreateDbClusterMessage {
  /**
   * @schema RdsCreateDbClusterMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RdsCreateDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsCreateDbClusterMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsCreateDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsCreateDbClusterMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsCreateDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsCreateDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsCreateDbClusterMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsCreateDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsCreateDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsCreateDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsCreateDbClusterMessage#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema RdsCreateDbClusterMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsCreateDbClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsCreateDbClusterMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema RdsCreateDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsCreateDbClusterMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsCreateDbClusterMessage#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema RdsCreateDbClusterMessage#ScalingConfiguration
   */
  readonly scalingConfiguration?: RdsScalingConfiguration;

  /**
   * @schema RdsCreateDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsCreateDbClusterMessage#EnableHttpEndpoint
   */
  readonly enableHttpEndpoint?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsCreateDbClusterMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#EnableGlobalWriteForwarding
   */
  readonly enableGlobalWriteForwarding?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * Converts an object of type 'RdsCreateDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbClusterMessage(obj: RdsCreateDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'CharacterSetName': obj.characterSetName,
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
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'PreSignedUrl': obj.preSignedUrl,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'BacktrackWindow': obj.backtrackWindow,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'EngineMode': obj.engineMode,
    'ScalingConfiguration': toJson_RdsScalingConfiguration(obj.scalingConfiguration),
    'DeletionProtection': obj.deletionProtection,
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
    'EnableHttpEndpoint': obj.enableHttpEndpoint,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'Domain': obj.domain,
    'DomainIAMRoleName': obj.domainIamRoleName,
    'EnableGlobalWriteForwarding': obj.enableGlobalWriteForwarding,
    'SourceRegion': obj.sourceRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbClusterResult
 */
export interface RdsCreateDbClusterResult {
  /**
   * @schema RdsCreateDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * Converts an object of type 'RdsCreateDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbClusterResult(obj: RdsCreateDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_RdsdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbClusterEndpointMessage
 */
export interface RdsCreateDbClusterEndpointMessage {
  /**
   * @schema RdsCreateDbClusterEndpointMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsCreateDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema RdsCreateDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema RdsCreateDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema RdsCreateDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema RdsCreateDbClusterEndpointMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateDbClusterEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbClusterEndpointMessage(obj: RdsCreateDbClusterEndpointMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
    'EndpointType': obj.endpointType,
    'StaticMembers': obj.staticMembers?.map(y => y),
    'ExcludedMembers': obj.excludedMembers?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterEndpoint
 */
export interface RdsdbClusterEndpoint {
  /**
   * @schema RdsdbClusterEndpoint#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema RdsdbClusterEndpoint#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbClusterEndpoint#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema RdsdbClusterEndpoint#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsdbClusterEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbClusterEndpoint#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema RdsdbClusterEndpoint#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema RdsdbClusterEndpoint#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema RdsdbClusterEndpoint#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema RdsdbClusterEndpoint#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * Converts an object of type 'RdsdbClusterEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterEndpoint(obj: RdsdbClusterEndpoint | undefined): Record<string, any> | undefined {
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
 * @schema RdsCreateDbClusterParameterGroupMessage
 */
export interface RdsCreateDbClusterParameterGroupMessage {
  /**
   * @schema RdsCreateDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsCreateDbClusterParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsCreateDbClusterParameterGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema RdsCreateDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbClusterParameterGroupMessage(obj: RdsCreateDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbClusterParameterGroupResult
 */
export interface RdsCreateDbClusterParameterGroupResult {
  /**
   * @schema RdsCreateDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: RdsdbClusterParameterGroup;

}

/**
 * Converts an object of type 'RdsCreateDbClusterParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbClusterParameterGroupResult(obj: RdsCreateDbClusterParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroup': toJson_RdsdbClusterParameterGroup(obj.dbClusterParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbClusterSnapshotMessage
 */
export interface RdsCreateDbClusterSnapshotMessage {
  /**
   * @schema RdsCreateDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema RdsCreateDbClusterSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsCreateDbClusterSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateDbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbClusterSnapshotMessage(obj: RdsCreateDbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbClusterSnapshotResult
 */
export interface RdsCreateDbClusterSnapshotResult {
  /**
   * @schema RdsCreateDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: RdsdbClusterSnapshot;

}

/**
 * Converts an object of type 'RdsCreateDbClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbClusterSnapshotResult(obj: RdsCreateDbClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshot': toJson_RdsdbClusterSnapshot(obj.dbClusterSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbInstanceMessage
 */
export interface RdsCreateDbInstanceMessage {
  /**
   * @schema RdsCreateDbInstanceMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema RdsCreateDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsCreateDbInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#NcharCharacterSetName
   */
  readonly ncharCharacterSetName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsCreateDbInstanceMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsCreateDbInstanceMessage#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsCreateDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#EnableCustomerOwnedIp
   */
  readonly enableCustomerOwnedIp?: boolean;

}

/**
 * Converts an object of type 'RdsCreateDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbInstanceMessage(obj: RdsCreateDbInstanceMessage | undefined): Record<string, any> | undefined {
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
    'NcharCharacterSetName': obj.ncharCharacterSetName,
    'PubliclyAccessible': obj.publiclyAccessible,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
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
    'PerformanceInsightsRetentionPeriod': obj.performanceInsightsRetentionPeriod,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_RdsProcessorFeature(y)),
    'DeletionProtection': obj.deletionProtection,
    'MaxAllocatedStorage': obj.maxAllocatedStorage,
    'EnableCustomerOwnedIp': obj.enableCustomerOwnedIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbInstanceResult
 */
export interface RdsCreateDbInstanceResult {
  /**
   * @schema RdsCreateDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsCreateDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbInstanceResult(obj: RdsCreateDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbInstanceReadReplicaMessage
 */
export interface RdsCreateDbInstanceReadReplicaMessage {
  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#SourceDBInstanceIdentifier
   */
  readonly sourceDbInstanceIdentifier?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#ReplicaMode
   */
  readonly replicaMode?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * Converts an object of type 'RdsCreateDbInstanceReadReplicaMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbInstanceReadReplicaMessage(obj: RdsCreateDbInstanceReadReplicaMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'SourceDBInstanceIdentifier': obj.sourceDbInstanceIdentifier,
    'DBInstanceClass': obj.dbInstanceClass,
    'AvailabilityZone': obj.availabilityZone,
    'Port': obj.port,
    'MultiAZ': obj.multiAz,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'Iops': obj.iops,
    'OptionGroupName': obj.optionGroupName,
    'DBParameterGroupName': obj.dbParameterGroupName,
    'PubliclyAccessible': obj.publiclyAccessible,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'StorageType': obj.storageType,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'MonitoringInterval': obj.monitoringInterval,
    'MonitoringRoleArn': obj.monitoringRoleArn,
    'KmsKeyId': obj.kmsKeyId,
    'PreSignedUrl': obj.preSignedUrl,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'EnablePerformanceInsights': obj.enablePerformanceInsights,
    'PerformanceInsightsKMSKeyId': obj.performanceInsightsKmsKeyId,
    'PerformanceInsightsRetentionPeriod': obj.performanceInsightsRetentionPeriod,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_RdsProcessorFeature(y)),
    'UseDefaultProcessorFeatures': obj.useDefaultProcessorFeatures,
    'DeletionProtection': obj.deletionProtection,
    'Domain': obj.domain,
    'DomainIAMRoleName': obj.domainIamRoleName,
    'ReplicaMode': obj.replicaMode,
    'MaxAllocatedStorage': obj.maxAllocatedStorage,
    'SourceRegion': obj.sourceRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbInstanceReadReplicaResult
 */
export interface RdsCreateDbInstanceReadReplicaResult {
  /**
   * @schema RdsCreateDbInstanceReadReplicaResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsCreateDbInstanceReadReplicaResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbInstanceReadReplicaResult(obj: RdsCreateDbInstanceReadReplicaResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbParameterGroupMessage
 */
export interface RdsCreateDbParameterGroupMessage {
  /**
   * @schema RdsCreateDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsCreateDbParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsCreateDbParameterGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema RdsCreateDbParameterGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateDbParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbParameterGroupMessage(obj: RdsCreateDbParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbParameterGroupResult
 */
export interface RdsCreateDbParameterGroupResult {
  /**
   * @schema RdsCreateDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: RdsdbParameterGroup;

}

/**
 * Converts an object of type 'RdsCreateDbParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbParameterGroupResult(obj: RdsCreateDbParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroup': toJson_RdsdbParameterGroup(obj.dbParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbProxyRequest
 */
export interface RdsCreateDbProxyRequest {
  /**
   * @schema RdsCreateDbProxyRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsCreateDbProxyRequest#EngineFamily
   */
  readonly engineFamily?: string;

  /**
   * @schema RdsCreateDbProxyRequest#Auth
   */
  readonly auth?: RdsUserAuthConfig[];

  /**
   * @schema RdsCreateDbProxyRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsCreateDbProxyRequest#VpcSubnetIds
   */
  readonly vpcSubnetIds?: string[];

  /**
   * @schema RdsCreateDbProxyRequest#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsCreateDbProxyRequest#RequireTLS
   */
  readonly requireTls?: boolean;

  /**
   * @schema RdsCreateDbProxyRequest#IdleClientTimeout
   */
  readonly idleClientTimeout?: number;

  /**
   * @schema RdsCreateDbProxyRequest#DebugLogging
   */
  readonly debugLogging?: boolean;

  /**
   * @schema RdsCreateDbProxyRequest#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateDbProxyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbProxyRequest(obj: RdsCreateDbProxyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'EngineFamily': obj.engineFamily,
    'Auth': obj.auth?.map(y => toJson_RdsUserAuthConfig(y)),
    'RoleArn': obj.roleArn,
    'VpcSubnetIds': obj.vpcSubnetIds?.map(y => y),
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'RequireTLS': obj.requireTls,
    'IdleClientTimeout': obj.idleClientTimeout,
    'DebugLogging': obj.debugLogging,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbProxyResponse
 */
export interface RdsCreateDbProxyResponse {
  /**
   * @schema RdsCreateDbProxyResponse#DBProxy
   */
  readonly dbProxy?: RdsdbProxy;

}

/**
 * Converts an object of type 'RdsCreateDbProxyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbProxyResponse(obj: RdsCreateDbProxyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxy': toJson_RdsdbProxy(obj.dbProxy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbProxyEndpointRequest
 */
export interface RdsCreateDbProxyEndpointRequest {
  /**
   * @schema RdsCreateDbProxyEndpointRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsCreateDbProxyEndpointRequest#DBProxyEndpointName
   */
  readonly dbProxyEndpointName?: string;

  /**
   * @schema RdsCreateDbProxyEndpointRequest#VpcSubnetIds
   */
  readonly vpcSubnetIds?: string[];

  /**
   * @schema RdsCreateDbProxyEndpointRequest#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsCreateDbProxyEndpointRequest#TargetRole
   */
  readonly targetRole?: string;

  /**
   * @schema RdsCreateDbProxyEndpointRequest#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateDbProxyEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbProxyEndpointRequest(obj: RdsCreateDbProxyEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'DBProxyEndpointName': obj.dbProxyEndpointName,
    'VpcSubnetIds': obj.vpcSubnetIds?.map(y => y),
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'TargetRole': obj.targetRole,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbProxyEndpointResponse
 */
export interface RdsCreateDbProxyEndpointResponse {
  /**
   * @schema RdsCreateDbProxyEndpointResponse#DBProxyEndpoint
   */
  readonly dbProxyEndpoint?: RdsdbProxyEndpoint;

}

/**
 * Converts an object of type 'RdsCreateDbProxyEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbProxyEndpointResponse(obj: RdsCreateDbProxyEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyEndpoint': toJson_RdsdbProxyEndpoint(obj.dbProxyEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbSecurityGroupMessage
 */
export interface RdsCreateDbSecurityGroupMessage {
  /**
   * @schema RdsCreateDbSecurityGroupMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema RdsCreateDbSecurityGroupMessage#DBSecurityGroupDescription
   */
  readonly dbSecurityGroupDescription?: string;

  /**
   * @schema RdsCreateDbSecurityGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateDbSecurityGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbSecurityGroupMessage(obj: RdsCreateDbSecurityGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSecurityGroupName': obj.dbSecurityGroupName,
    'DBSecurityGroupDescription': obj.dbSecurityGroupDescription,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbSecurityGroupResult
 */
export interface RdsCreateDbSecurityGroupResult {
  /**
   * @schema RdsCreateDbSecurityGroupResult#DBSecurityGroup
   */
  readonly dbSecurityGroup?: RdsdbSecurityGroup;

}

/**
 * Converts an object of type 'RdsCreateDbSecurityGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbSecurityGroupResult(obj: RdsCreateDbSecurityGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSecurityGroup': toJson_RdsdbSecurityGroup(obj.dbSecurityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbSnapshotMessage
 */
export interface RdsCreateDbSnapshotMessage {
  /**
   * @schema RdsCreateDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema RdsCreateDbSnapshotMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsCreateDbSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateDbSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbSnapshotMessage(obj: RdsCreateDbSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshotIdentifier': obj.dbSnapshotIdentifier,
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbSnapshotResult
 */
export interface RdsCreateDbSnapshotResult {
  /**
   * @schema RdsCreateDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: RdsdbSnapshot;

}

/**
 * Converts an object of type 'RdsCreateDbSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbSnapshotResult(obj: RdsCreateDbSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshot': toJson_RdsdbSnapshot(obj.dbSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbSubnetGroupMessage
 */
export interface RdsCreateDbSubnetGroupMessage {
  /**
   * @schema RdsCreateDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsCreateDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema RdsCreateDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema RdsCreateDbSubnetGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateDbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbSubnetGroupMessage(obj: RdsCreateDbSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'DBSubnetGroupDescription': obj.dbSubnetGroupDescription,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateDbSubnetGroupResult
 */
export interface RdsCreateDbSubnetGroupResult {
  /**
   * @schema RdsCreateDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: RdsdbSubnetGroup;

}

/**
 * Converts an object of type 'RdsCreateDbSubnetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateDbSubnetGroupResult(obj: RdsCreateDbSubnetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroup': toJson_RdsdbSubnetGroup(obj.dbSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateEventSubscriptionMessage
 */
export interface RdsCreateEventSubscriptionMessage {
  /**
   * @schema RdsCreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema RdsCreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RdsCreateEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsCreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RdsCreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema RdsCreateEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RdsCreateEventSubscriptionMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateEventSubscriptionMessage(obj: RdsCreateEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'SnsTopicArn': obj.snsTopicArn,
    'SourceType': obj.sourceType,
    'EventCategories': obj.eventCategories?.map(y => y),
    'SourceIds': obj.sourceIds?.map(y => y),
    'Enabled': obj.enabled,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateEventSubscriptionResult
 */
export interface RdsCreateEventSubscriptionResult {
  /**
   * @schema RdsCreateEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RdsEventSubscription;

}

/**
 * Converts an object of type 'RdsCreateEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateEventSubscriptionResult(obj: RdsCreateEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_RdsEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateGlobalClusterMessage
 */
export interface RdsCreateGlobalClusterMessage {
  /**
   * @schema RdsCreateGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsCreateGlobalClusterMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier?: string;

  /**
   * @schema RdsCreateGlobalClusterMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsCreateGlobalClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsCreateGlobalClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsCreateGlobalClusterMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsCreateGlobalClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

}

/**
 * Converts an object of type 'RdsCreateGlobalClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateGlobalClusterMessage(obj: RdsCreateGlobalClusterMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsCreateGlobalClusterResult
 */
export interface RdsCreateGlobalClusterResult {
  /**
   * @schema RdsCreateGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: RdsGlobalCluster;

}

/**
 * Converts an object of type 'RdsCreateGlobalClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateGlobalClusterResult(obj: RdsCreateGlobalClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalCluster': toJson_RdsGlobalCluster(obj.globalCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateOptionGroupMessage
 */
export interface RdsCreateOptionGroupMessage {
  /**
   * @schema RdsCreateOptionGroupMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsCreateOptionGroupMessage#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema RdsCreateOptionGroupMessage#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

  /**
   * @schema RdsCreateOptionGroupMessage#OptionGroupDescription
   */
  readonly optionGroupDescription?: string;

  /**
   * @schema RdsCreateOptionGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsCreateOptionGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateOptionGroupMessage(obj: RdsCreateOptionGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroupName': obj.optionGroupName,
    'EngineName': obj.engineName,
    'MajorEngineVersion': obj.majorEngineVersion,
    'OptionGroupDescription': obj.optionGroupDescription,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCreateOptionGroupResult
 */
export interface RdsCreateOptionGroupResult {
  /**
   * @schema RdsCreateOptionGroupResult#OptionGroup
   */
  readonly optionGroup?: RdsOptionGroup;

}

/**
 * Converts an object of type 'RdsCreateOptionGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCreateOptionGroupResult(obj: RdsCreateOptionGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroup': toJson_RdsOptionGroup(obj.optionGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteCustomAvailabilityZoneMessage
 */
export interface RdsDeleteCustomAvailabilityZoneMessage {
  /**
   * @schema RdsDeleteCustomAvailabilityZoneMessage#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

}

/**
 * Converts an object of type 'RdsDeleteCustomAvailabilityZoneMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteCustomAvailabilityZoneMessage(obj: RdsDeleteCustomAvailabilityZoneMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomAvailabilityZoneId': obj.customAvailabilityZoneId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteCustomAvailabilityZoneResult
 */
export interface RdsDeleteCustomAvailabilityZoneResult {
  /**
   * @schema RdsDeleteCustomAvailabilityZoneResult#CustomAvailabilityZone
   */
  readonly customAvailabilityZone?: RdsCustomAvailabilityZone;

}

/**
 * Converts an object of type 'RdsDeleteCustomAvailabilityZoneResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteCustomAvailabilityZoneResult(obj: RdsDeleteCustomAvailabilityZoneResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomAvailabilityZone': toJson_RdsCustomAvailabilityZone(obj.customAvailabilityZone),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbClusterMessage
 */
export interface RdsDeleteDbClusterMessage {
  /**
   * @schema RdsDeleteDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsDeleteDbClusterMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema RdsDeleteDbClusterMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbClusterMessage(obj: RdsDeleteDbClusterMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsDeleteDbClusterResult
 */
export interface RdsDeleteDbClusterResult {
  /**
   * @schema RdsDeleteDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * Converts an object of type 'RdsDeleteDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbClusterResult(obj: RdsDeleteDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_RdsdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbClusterEndpointMessage
 */
export interface RdsDeleteDbClusterEndpointMessage {
  /**
   * @schema RdsDeleteDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbClusterEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbClusterEndpointMessage(obj: RdsDeleteDbClusterEndpointMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbClusterParameterGroupMessage
 */
export interface RdsDeleteDbClusterParameterGroupMessage {
  /**
   * @schema RdsDeleteDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbClusterParameterGroupMessage(obj: RdsDeleteDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbClusterSnapshotMessage
 */
export interface RdsDeleteDbClusterSnapshotMessage {
  /**
   * @schema RdsDeleteDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbClusterSnapshotMessage(obj: RdsDeleteDbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbClusterSnapshotResult
 */
export interface RdsDeleteDbClusterSnapshotResult {
  /**
   * @schema RdsDeleteDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: RdsdbClusterSnapshot;

}

/**
 * Converts an object of type 'RdsDeleteDbClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbClusterSnapshotResult(obj: RdsDeleteDbClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshot': toJson_RdsdbClusterSnapshot(obj.dbClusterSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbInstanceMessage
 */
export interface RdsDeleteDbInstanceMessage {
  /**
   * @schema RdsDeleteDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsDeleteDbInstanceMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema RdsDeleteDbInstanceMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

  /**
   * @schema RdsDeleteDbInstanceMessage#DeleteAutomatedBackups
   */
  readonly deleteAutomatedBackups?: boolean;

}

/**
 * Converts an object of type 'RdsDeleteDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbInstanceMessage(obj: RdsDeleteDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'SkipFinalSnapshot': obj.skipFinalSnapshot,
    'FinalDBSnapshotIdentifier': obj.finalDbSnapshotIdentifier,
    'DeleteAutomatedBackups': obj.deleteAutomatedBackups,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbInstanceResult
 */
export interface RdsDeleteDbInstanceResult {
  /**
   * @schema RdsDeleteDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsDeleteDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbInstanceResult(obj: RdsDeleteDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbInstanceAutomatedBackupMessage
 */
export interface RdsDeleteDbInstanceAutomatedBackupMessage {
  /**
   * @schema RdsDeleteDbInstanceAutomatedBackupMessage#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema RdsDeleteDbInstanceAutomatedBackupMessage#DBInstanceAutomatedBackupsArn
   */
  readonly dbInstanceAutomatedBackupsArn?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbInstanceAutomatedBackupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbInstanceAutomatedBackupMessage(obj: RdsDeleteDbInstanceAutomatedBackupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DbiResourceId': obj.dbiResourceId,
    'DBInstanceAutomatedBackupsArn': obj.dbInstanceAutomatedBackupsArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbInstanceAutomatedBackupResult
 */
export interface RdsDeleteDbInstanceAutomatedBackupResult {
  /**
   * @schema RdsDeleteDbInstanceAutomatedBackupResult#DBInstanceAutomatedBackup
   */
  readonly dbInstanceAutomatedBackup?: RdsdbInstanceAutomatedBackup;

}

/**
 * Converts an object of type 'RdsDeleteDbInstanceAutomatedBackupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbInstanceAutomatedBackupResult(obj: RdsDeleteDbInstanceAutomatedBackupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceAutomatedBackup': toJson_RdsdbInstanceAutomatedBackup(obj.dbInstanceAutomatedBackup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbParameterGroupMessage
 */
export interface RdsDeleteDbParameterGroupMessage {
  /**
   * @schema RdsDeleteDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbParameterGroupMessage(obj: RdsDeleteDbParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbProxyRequest
 */
export interface RdsDeleteDbProxyRequest {
  /**
   * @schema RdsDeleteDbProxyRequest#DBProxyName
   */
  readonly dbProxyName?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbProxyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbProxyRequest(obj: RdsDeleteDbProxyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbProxyResponse
 */
export interface RdsDeleteDbProxyResponse {
  /**
   * @schema RdsDeleteDbProxyResponse#DBProxy
   */
  readonly dbProxy?: RdsdbProxy;

}

/**
 * Converts an object of type 'RdsDeleteDbProxyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbProxyResponse(obj: RdsDeleteDbProxyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxy': toJson_RdsdbProxy(obj.dbProxy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbProxyEndpointRequest
 */
export interface RdsDeleteDbProxyEndpointRequest {
  /**
   * @schema RdsDeleteDbProxyEndpointRequest#DBProxyEndpointName
   */
  readonly dbProxyEndpointName?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbProxyEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbProxyEndpointRequest(obj: RdsDeleteDbProxyEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyEndpointName': obj.dbProxyEndpointName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbProxyEndpointResponse
 */
export interface RdsDeleteDbProxyEndpointResponse {
  /**
   * @schema RdsDeleteDbProxyEndpointResponse#DBProxyEndpoint
   */
  readonly dbProxyEndpoint?: RdsdbProxyEndpoint;

}

/**
 * Converts an object of type 'RdsDeleteDbProxyEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbProxyEndpointResponse(obj: RdsDeleteDbProxyEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyEndpoint': toJson_RdsdbProxyEndpoint(obj.dbProxyEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbSecurityGroupMessage
 */
export interface RdsDeleteDbSecurityGroupMessage {
  /**
   * @schema RdsDeleteDbSecurityGroupMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbSecurityGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbSecurityGroupMessage(obj: RdsDeleteDbSecurityGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSecurityGroupName': obj.dbSecurityGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbSnapshotMessage
 */
export interface RdsDeleteDbSnapshotMessage {
  /**
   * @schema RdsDeleteDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbSnapshotMessage(obj: RdsDeleteDbSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshotIdentifier': obj.dbSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbSnapshotResult
 */
export interface RdsDeleteDbSnapshotResult {
  /**
   * @schema RdsDeleteDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: RdsdbSnapshot;

}

/**
 * Converts an object of type 'RdsDeleteDbSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbSnapshotResult(obj: RdsDeleteDbSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshot': toJson_RdsdbSnapshot(obj.dbSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteDbSubnetGroupMessage
 */
export interface RdsDeleteDbSubnetGroupMessage {
  /**
   * @schema RdsDeleteDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

}

/**
 * Converts an object of type 'RdsDeleteDbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteDbSubnetGroupMessage(obj: RdsDeleteDbSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteEventSubscriptionMessage
 */
export interface RdsDeleteEventSubscriptionMessage {
  /**
   * @schema RdsDeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

}

/**
 * Converts an object of type 'RdsDeleteEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteEventSubscriptionMessage(obj: RdsDeleteEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteEventSubscriptionResult
 */
export interface RdsDeleteEventSubscriptionResult {
  /**
   * @schema RdsDeleteEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RdsEventSubscription;

}

/**
 * Converts an object of type 'RdsDeleteEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteEventSubscriptionResult(obj: RdsDeleteEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_RdsEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteGlobalClusterMessage
 */
export interface RdsDeleteGlobalClusterMessage {
  /**
   * @schema RdsDeleteGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

}

/**
 * Converts an object of type 'RdsDeleteGlobalClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteGlobalClusterMessage(obj: RdsDeleteGlobalClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteGlobalClusterResult
 */
export interface RdsDeleteGlobalClusterResult {
  /**
   * @schema RdsDeleteGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: RdsGlobalCluster;

}

/**
 * Converts an object of type 'RdsDeleteGlobalClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteGlobalClusterResult(obj: RdsDeleteGlobalClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalCluster': toJson_RdsGlobalCluster(obj.globalCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteInstallationMediaMessage
 */
export interface RdsDeleteInstallationMediaMessage {
  /**
   * @schema RdsDeleteInstallationMediaMessage#InstallationMediaId
   */
  readonly installationMediaId?: string;

}

/**
 * Converts an object of type 'RdsDeleteInstallationMediaMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteInstallationMediaMessage(obj: RdsDeleteInstallationMediaMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstallationMediaId': obj.installationMediaId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsInstallationMedia
 */
export interface RdsInstallationMedia {
  /**
   * @schema RdsInstallationMedia#InstallationMediaId
   */
  readonly installationMediaId?: string;

  /**
   * @schema RdsInstallationMedia#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

  /**
   * @schema RdsInstallationMedia#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsInstallationMedia#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsInstallationMedia#EngineInstallationMediaPath
   */
  readonly engineInstallationMediaPath?: string;

  /**
   * @schema RdsInstallationMedia#OSInstallationMediaPath
   */
  readonly osInstallationMediaPath?: string;

  /**
   * @schema RdsInstallationMedia#Status
   */
  readonly status?: string;

  /**
   * @schema RdsInstallationMedia#FailureCause
   */
  readonly failureCause?: RdsInstallationMediaFailureCause;

}

/**
 * Converts an object of type 'RdsInstallationMedia' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsInstallationMedia(obj: RdsInstallationMedia | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstallationMediaId': obj.installationMediaId,
    'CustomAvailabilityZoneId': obj.customAvailabilityZoneId,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'EngineInstallationMediaPath': obj.engineInstallationMediaPath,
    'OSInstallationMediaPath': obj.osInstallationMediaPath,
    'Status': obj.status,
    'FailureCause': toJson_RdsInstallationMediaFailureCause(obj.failureCause),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeleteOptionGroupMessage
 */
export interface RdsDeleteOptionGroupMessage {
  /**
   * @schema RdsDeleteOptionGroupMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

}

/**
 * Converts an object of type 'RdsDeleteOptionGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeleteOptionGroupMessage(obj: RdsDeleteOptionGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroupName': obj.optionGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeregisterDbProxyTargetsRequest
 */
export interface RdsDeregisterDbProxyTargetsRequest {
  /**
   * @schema RdsDeregisterDbProxyTargetsRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsDeregisterDbProxyTargetsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsDeregisterDbProxyTargetsRequest#DBInstanceIdentifiers
   */
  readonly dbInstanceIdentifiers?: string[];

  /**
   * @schema RdsDeregisterDbProxyTargetsRequest#DBClusterIdentifiers
   */
  readonly dbClusterIdentifiers?: string[];

}

/**
 * Converts an object of type 'RdsDeregisterDbProxyTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeregisterDbProxyTargetsRequest(obj: RdsDeregisterDbProxyTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'TargetGroupName': obj.targetGroupName,
    'DBInstanceIdentifiers': obj.dbInstanceIdentifiers?.map(y => y),
    'DBClusterIdentifiers': obj.dbClusterIdentifiers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDeregisterDbProxyTargetsResponse
 */
export interface RdsDeregisterDbProxyTargetsResponse {
}

/**
 * Converts an object of type 'RdsDeregisterDbProxyTargetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDeregisterDbProxyTargetsResponse(obj: RdsDeregisterDbProxyTargetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeAccountAttributesMessage
 */
export interface RdsDescribeAccountAttributesMessage {
}

/**
 * Converts an object of type 'RdsDescribeAccountAttributesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeAccountAttributesMessage(obj: RdsDescribeAccountAttributesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsAccountAttributesMessage
 */
export interface RdsAccountAttributesMessage {
  /**
   * @schema RdsAccountAttributesMessage#AccountQuotas
   */
  readonly accountQuotas?: RdsAccountQuota[];

}

/**
 * Converts an object of type 'RdsAccountAttributesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAccountAttributesMessage(obj: RdsAccountAttributesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountQuotas': obj.accountQuotas?.map(y => toJson_RdsAccountQuota(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeCertificatesMessage
 */
export interface RdsDescribeCertificatesMessage {
  /**
   * @schema RdsDescribeCertificatesMessage#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema RdsDescribeCertificatesMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeCertificatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeCertificatesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeCertificatesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeCertificatesMessage(obj: RdsDescribeCertificatesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateIdentifier': obj.certificateIdentifier,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCertificateMessage
 */
export interface RdsCertificateMessage {
  /**
   * @schema RdsCertificateMessage#Certificates
   */
  readonly certificates?: RdsCertificate[];

  /**
   * @schema RdsCertificateMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsCertificateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCertificateMessage(obj: RdsCertificateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificates': obj.certificates?.map(y => toJson_RdsCertificate(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeCustomAvailabilityZonesMessage
 */
export interface RdsDescribeCustomAvailabilityZonesMessage {
  /**
   * @schema RdsDescribeCustomAvailabilityZonesMessage#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

  /**
   * @schema RdsDescribeCustomAvailabilityZonesMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeCustomAvailabilityZonesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeCustomAvailabilityZonesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeCustomAvailabilityZonesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeCustomAvailabilityZonesMessage(obj: RdsDescribeCustomAvailabilityZonesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomAvailabilityZoneId': obj.customAvailabilityZoneId,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCustomAvailabilityZoneMessage
 */
export interface RdsCustomAvailabilityZoneMessage {
  /**
   * @schema RdsCustomAvailabilityZoneMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsCustomAvailabilityZoneMessage#CustomAvailabilityZones
   */
  readonly customAvailabilityZones?: RdsCustomAvailabilityZone[];

}

/**
 * Converts an object of type 'RdsCustomAvailabilityZoneMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCustomAvailabilityZoneMessage(obj: RdsCustomAvailabilityZoneMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'CustomAvailabilityZones': obj.customAvailabilityZones?.map(y => toJson_RdsCustomAvailabilityZone(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbClusterBacktracksMessage
 */
export interface RdsDescribeDbClusterBacktracksMessage {
  /**
   * @schema RdsDescribeDbClusterBacktracksMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterBacktracksMessage#BacktrackIdentifier
   */
  readonly backtrackIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterBacktracksMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClusterBacktracksMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClusterBacktracksMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbClusterBacktracksMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbClusterBacktracksMessage(obj: RdsDescribeDbClusterBacktracksMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'BacktrackIdentifier': obj.backtrackIdentifier,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterBacktrackMessage
 */
export interface RdsdbClusterBacktrackMessage {
  /**
   * @schema RdsdbClusterBacktrackMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbClusterBacktrackMessage#DBClusterBacktracks
   */
  readonly dbClusterBacktracks?: RdsdbClusterBacktrack[];

}

/**
 * Converts an object of type 'RdsdbClusterBacktrackMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterBacktrackMessage(obj: RdsdbClusterBacktrackMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusterBacktracks': obj.dbClusterBacktracks?.map(y => toJson_RdsdbClusterBacktrack(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbClusterEndpointsMessage
 */
export interface RdsDescribeDbClusterEndpointsMessage {
  /**
   * @schema RdsDescribeDbClusterEndpointsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterEndpointsMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterEndpointsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClusterEndpointsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClusterEndpointsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbClusterEndpointsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbClusterEndpointsMessage(obj: RdsDescribeDbClusterEndpointsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterEndpointMessage
 */
export interface RdsdbClusterEndpointMessage {
  /**
   * @schema RdsdbClusterEndpointMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbClusterEndpointMessage#DBClusterEndpoints
   */
  readonly dbClusterEndpoints?: RdsdbClusterEndpoint[];

}

/**
 * Converts an object of type 'RdsdbClusterEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterEndpointMessage(obj: RdsdbClusterEndpointMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusterEndpoints': obj.dbClusterEndpoints?.map(y => toJson_RdsdbClusterEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbClusterParameterGroupsMessage
 */
export interface RdsDescribeDbClusterParameterGroupsMessage {
  /**
   * @schema RdsDescribeDbClusterParameterGroupsMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsDescribeDbClusterParameterGroupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbClusterParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbClusterParameterGroupsMessage(obj: RdsDescribeDbClusterParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterParameterGroupsMessage
 */
export interface RdsdbClusterParameterGroupsMessage {
  /**
   * @schema RdsdbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbClusterParameterGroupsMessage#DBClusterParameterGroups
   */
  readonly dbClusterParameterGroups?: RdsdbClusterParameterGroup[];

}

/**
 * Converts an object of type 'RdsdbClusterParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterParameterGroupsMessage(obj: RdsdbClusterParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusterParameterGroups': obj.dbClusterParameterGroups?.map(y => toJson_RdsdbClusterParameterGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbClusterParametersMessage
 */
export interface RdsDescribeDbClusterParametersMessage {
  /**
   * @schema RdsDescribeDbClusterParametersMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsDescribeDbClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema RdsDescribeDbClusterParametersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbClusterParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbClusterParametersMessage(obj: RdsDescribeDbClusterParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'Source': obj.source,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterParameterGroupDetails
 */
export interface RdsdbClusterParameterGroupDetails {
  /**
   * @schema RdsdbClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: RdsParameter[];

  /**
   * @schema RdsdbClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsdbClusterParameterGroupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterParameterGroupDetails(obj: RdsdbClusterParameterGroupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_RdsParameter(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbClusterSnapshotAttributesMessage
 */
export interface RdsDescribeDbClusterSnapshotAttributesMessage {
  /**
   * @schema RdsDescribeDbClusterSnapshotAttributesMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbClusterSnapshotAttributesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbClusterSnapshotAttributesMessage(obj: RdsDescribeDbClusterSnapshotAttributesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbClusterSnapshotAttributesResult
 */
export interface RdsDescribeDbClusterSnapshotAttributesResult {
  /**
   * @schema RdsDescribeDbClusterSnapshotAttributesResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: RdsdbClusterSnapshotAttributesResult;

}

/**
 * Converts an object of type 'RdsDescribeDbClusterSnapshotAttributesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbClusterSnapshotAttributesResult(obj: RdsDescribeDbClusterSnapshotAttributesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotAttributesResult': toJson_RdsdbClusterSnapshotAttributesResult(obj.dbClusterSnapshotAttributesResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbClusterSnapshotsMessage
 */
export interface RdsDescribeDbClusterSnapshotsMessage {
  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

}

/**
 * Converts an object of type 'RdsDescribeDbClusterSnapshotsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbClusterSnapshotsMessage(obj: RdsDescribeDbClusterSnapshotsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'SnapshotType': obj.snapshotType,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
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
 * @schema RdsdbClusterSnapshotMessage
 */
export interface RdsdbClusterSnapshotMessage {
  /**
   * @schema RdsdbClusterSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbClusterSnapshotMessage#DBClusterSnapshots
   */
  readonly dbClusterSnapshots?: RdsdbClusterSnapshot[];

}

/**
 * Converts an object of type 'RdsdbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterSnapshotMessage(obj: RdsdbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusterSnapshots': obj.dbClusterSnapshots?.map(y => toJson_RdsdbClusterSnapshot(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbClustersMessage
 */
export interface RdsDescribeDbClustersMessage {
  /**
   * @schema RdsDescribeDbClustersMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsDescribeDbClustersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbClustersMessage#IncludeShared
   */
  readonly includeShared?: boolean;

}

/**
 * Converts an object of type 'RdsDescribeDbClustersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbClustersMessage(obj: RdsDescribeDbClustersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'IncludeShared': obj.includeShared,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterMessage
 */
export interface RdsdbClusterMessage {
  /**
   * @schema RdsdbClusterMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbClusterMessage#DBClusters
   */
  readonly dbClusters?: RdsdbCluster[];

}

/**
 * Converts an object of type 'RdsdbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterMessage(obj: RdsdbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusters': obj.dbClusters?.map(y => toJson_RdsdbCluster(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbEngineVersionsMessage
 */
export interface RdsDescribeDbEngineVersionsMessage {
  /**
   * @schema RdsDescribeDbEngineVersionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#DefaultOnly
   */
  readonly defaultOnly?: boolean;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#ListSupportedCharacterSets
   */
  readonly listSupportedCharacterSets?: boolean;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#ListSupportedTimezones
   */
  readonly listSupportedTimezones?: boolean;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#IncludeAll
   */
  readonly includeAll?: boolean;

}

/**
 * Converts an object of type 'RdsDescribeDbEngineVersionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbEngineVersionsMessage(obj: RdsDescribeDbEngineVersionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'DefaultOnly': obj.defaultOnly,
    'ListSupportedCharacterSets': obj.listSupportedCharacterSets,
    'ListSupportedTimezones': obj.listSupportedTimezones,
    'IncludeAll': obj.includeAll,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbEngineVersionMessage
 */
export interface RdsdbEngineVersionMessage {
  /**
   * @schema RdsdbEngineVersionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbEngineVersionMessage#DBEngineVersions
   */
  readonly dbEngineVersions?: RdsdbEngineVersion[];

}

/**
 * Converts an object of type 'RdsdbEngineVersionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbEngineVersionMessage(obj: RdsdbEngineVersionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBEngineVersions': obj.dbEngineVersions?.map(y => toJson_RdsdbEngineVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbInstanceAutomatedBackupsMessage
 */
export interface RdsDescribeDbInstanceAutomatedBackupsMessage {
  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#DBInstanceAutomatedBackupsArn
   */
  readonly dbInstanceAutomatedBackupsArn?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbInstanceAutomatedBackupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbInstanceAutomatedBackupsMessage(obj: RdsDescribeDbInstanceAutomatedBackupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DbiResourceId': obj.dbiResourceId,
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'DBInstanceAutomatedBackupsArn': obj.dbInstanceAutomatedBackupsArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbInstanceAutomatedBackupMessage
 */
export interface RdsdbInstanceAutomatedBackupMessage {
  /**
   * @schema RdsdbInstanceAutomatedBackupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackupMessage#DBInstanceAutomatedBackups
   */
  readonly dbInstanceAutomatedBackups?: RdsdbInstanceAutomatedBackup[];

}

/**
 * Converts an object of type 'RdsdbInstanceAutomatedBackupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbInstanceAutomatedBackupMessage(obj: RdsdbInstanceAutomatedBackupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBInstanceAutomatedBackups': obj.dbInstanceAutomatedBackups?.map(y => toJson_RdsdbInstanceAutomatedBackup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbInstancesMessage
 */
export interface RdsDescribeDbInstancesMessage {
  /**
   * @schema RdsDescribeDbInstancesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsDescribeDbInstancesMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbInstancesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbInstancesMessage(obj: RdsDescribeDbInstancesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbInstanceMessage
 */
export interface RdsdbInstanceMessage {
  /**
   * @schema RdsdbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbInstanceMessage#DBInstances
   */
  readonly dbInstances?: RdsdbInstance[];

}

/**
 * Converts an object of type 'RdsdbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbInstanceMessage(obj: RdsdbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBInstances': obj.dbInstances?.map(y => toJson_RdsdbInstance(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbLogFilesMessage
 */
export interface RdsDescribeDbLogFilesMessage {
  /**
   * @schema RdsDescribeDbLogFilesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsDescribeDbLogFilesMessage#FilenameContains
   */
  readonly filenameContains?: string;

  /**
   * @schema RdsDescribeDbLogFilesMessage#FileLastWritten
   */
  readonly fileLastWritten?: number;

  /**
   * @schema RdsDescribeDbLogFilesMessage#FileSize
   */
  readonly fileSize?: number;

  /**
   * @schema RdsDescribeDbLogFilesMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbLogFilesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbLogFilesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbLogFilesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbLogFilesMessage(obj: RdsDescribeDbLogFilesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'FilenameContains': obj.filenameContains,
    'FileLastWritten': obj.fileLastWritten,
    'FileSize': obj.fileSize,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbLogFilesResponse
 */
export interface RdsDescribeDbLogFilesResponse {
  /**
   * @schema RdsDescribeDbLogFilesResponse#DescribeDBLogFiles
   */
  readonly describeDbLogFiles?: RdsDescribeDbLogFilesDetails[];

  /**
   * @schema RdsDescribeDbLogFilesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbLogFilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbLogFilesResponse(obj: RdsDescribeDbLogFilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DescribeDBLogFiles': obj.describeDbLogFiles?.map(y => toJson_RdsDescribeDbLogFilesDetails(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbParameterGroupsMessage
 */
export interface RdsDescribeDbParameterGroupsMessage {
  /**
   * @schema RdsDescribeDbParameterGroupsMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsDescribeDbParameterGroupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbParameterGroupsMessage(obj: RdsDescribeDbParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbParameterGroupsMessage
 */
export interface RdsdbParameterGroupsMessage {
  /**
   * @schema RdsdbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbParameterGroupsMessage#DBParameterGroups
   */
  readonly dbParameterGroups?: RdsdbParameterGroup[];

}

/**
 * Converts an object of type 'RdsdbParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbParameterGroupsMessage(obj: RdsdbParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBParameterGroups': obj.dbParameterGroups?.map(y => toJson_RdsdbParameterGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbParametersMessage
 */
export interface RdsDescribeDbParametersMessage {
  /**
   * @schema RdsDescribeDbParametersMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsDescribeDbParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema RdsDescribeDbParametersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbParametersMessage(obj: RdsDescribeDbParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'Source': obj.source,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbParameterGroupDetails
 */
export interface RdsdbParameterGroupDetails {
  /**
   * @schema RdsdbParameterGroupDetails#Parameters
   */
  readonly parameters?: RdsParameter[];

  /**
   * @schema RdsdbParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsdbParameterGroupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbParameterGroupDetails(obj: RdsdbParameterGroupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_RdsParameter(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbProxiesRequest
 */
export interface RdsDescribeDbProxiesRequest {
  /**
   * @schema RdsDescribeDbProxiesRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsDescribeDbProxiesRequest#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbProxiesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbProxiesRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'RdsDescribeDbProxiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbProxiesRequest(obj: RdsDescribeDbProxiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbProxiesResponse
 */
export interface RdsDescribeDbProxiesResponse {
  /**
   * @schema RdsDescribeDbProxiesResponse#DBProxies
   */
  readonly dbProxies?: RdsdbProxy[];

  /**
   * @schema RdsDescribeDbProxiesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbProxiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbProxiesResponse(obj: RdsDescribeDbProxiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxies': obj.dbProxies?.map(y => toJson_RdsdbProxy(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbProxyEndpointsRequest
 */
export interface RdsDescribeDbProxyEndpointsRequest {
  /**
   * @schema RdsDescribeDbProxyEndpointsRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsDescribeDbProxyEndpointsRequest#DBProxyEndpointName
   */
  readonly dbProxyEndpointName?: string;

  /**
   * @schema RdsDescribeDbProxyEndpointsRequest#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbProxyEndpointsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbProxyEndpointsRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'RdsDescribeDbProxyEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbProxyEndpointsRequest(obj: RdsDescribeDbProxyEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'DBProxyEndpointName': obj.dbProxyEndpointName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbProxyEndpointsResponse
 */
export interface RdsDescribeDbProxyEndpointsResponse {
  /**
   * @schema RdsDescribeDbProxyEndpointsResponse#DBProxyEndpoints
   */
  readonly dbProxyEndpoints?: RdsdbProxyEndpoint[];

  /**
   * @schema RdsDescribeDbProxyEndpointsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbProxyEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbProxyEndpointsResponse(obj: RdsDescribeDbProxyEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyEndpoints': obj.dbProxyEndpoints?.map(y => toJson_RdsdbProxyEndpoint(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbProxyTargetGroupsRequest
 */
export interface RdsDescribeDbProxyTargetGroupsRequest {
  /**
   * @schema RdsDescribeDbProxyTargetGroupsRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsDescribeDbProxyTargetGroupsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsDescribeDbProxyTargetGroupsRequest#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbProxyTargetGroupsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbProxyTargetGroupsRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'RdsDescribeDbProxyTargetGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbProxyTargetGroupsRequest(obj: RdsDescribeDbProxyTargetGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'TargetGroupName': obj.targetGroupName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbProxyTargetGroupsResponse
 */
export interface RdsDescribeDbProxyTargetGroupsResponse {
  /**
   * @schema RdsDescribeDbProxyTargetGroupsResponse#TargetGroups
   */
  readonly targetGroups?: RdsdbProxyTargetGroup[];

  /**
   * @schema RdsDescribeDbProxyTargetGroupsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbProxyTargetGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbProxyTargetGroupsResponse(obj: RdsDescribeDbProxyTargetGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetGroups': obj.targetGroups?.map(y => toJson_RdsdbProxyTargetGroup(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbProxyTargetsRequest
 */
export interface RdsDescribeDbProxyTargetsRequest {
  /**
   * @schema RdsDescribeDbProxyTargetsRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsDescribeDbProxyTargetsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsDescribeDbProxyTargetsRequest#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbProxyTargetsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbProxyTargetsRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'RdsDescribeDbProxyTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbProxyTargetsRequest(obj: RdsDescribeDbProxyTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'TargetGroupName': obj.targetGroupName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbProxyTargetsResponse
 */
export interface RdsDescribeDbProxyTargetsResponse {
  /**
   * @schema RdsDescribeDbProxyTargetsResponse#Targets
   */
  readonly targets?: RdsdbProxyTarget[];

  /**
   * @schema RdsDescribeDbProxyTargetsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbProxyTargetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbProxyTargetsResponse(obj: RdsDescribeDbProxyTargetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Targets': obj.targets?.map(y => toJson_RdsdbProxyTarget(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbSecurityGroupsMessage
 */
export interface RdsDescribeDbSecurityGroupsMessage {
  /**
   * @schema RdsDescribeDbSecurityGroupsMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema RdsDescribeDbSecurityGroupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbSecurityGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbSecurityGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbSecurityGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbSecurityGroupsMessage(obj: RdsDescribeDbSecurityGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSecurityGroupName': obj.dbSecurityGroupName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbSecurityGroupMessage
 */
export interface RdsdbSecurityGroupMessage {
  /**
   * @schema RdsdbSecurityGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbSecurityGroupMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: RdsdbSecurityGroup[];

}

/**
 * Converts an object of type 'RdsdbSecurityGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbSecurityGroupMessage(obj: RdsdbSecurityGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBSecurityGroups': obj.dbSecurityGroups?.map(y => toJson_RdsdbSecurityGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbSnapshotAttributesMessage
 */
export interface RdsDescribeDbSnapshotAttributesMessage {
  /**
   * @schema RdsDescribeDbSnapshotAttributesMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbSnapshotAttributesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbSnapshotAttributesMessage(obj: RdsDescribeDbSnapshotAttributesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshotIdentifier': obj.dbSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbSnapshotAttributesResult
 */
export interface RdsDescribeDbSnapshotAttributesResult {
  /**
   * @schema RdsDescribeDbSnapshotAttributesResult#DBSnapshotAttributesResult
   */
  readonly dbSnapshotAttributesResult?: RdsdbSnapshotAttributesResult;

}

/**
 * Converts an object of type 'RdsDescribeDbSnapshotAttributesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbSnapshotAttributesResult(obj: RdsDescribeDbSnapshotAttributesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshotAttributesResult': toJson_RdsdbSnapshotAttributesResult(obj.dbSnapshotAttributesResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbSnapshotsMessage
 */
export interface RdsDescribeDbSnapshotsMessage {
  /**
   * @schema RdsDescribeDbSnapshotsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#DbiResourceId
   */
  readonly dbiResourceId?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbSnapshotsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbSnapshotsMessage(obj: RdsDescribeDbSnapshotsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'DBSnapshotIdentifier': obj.dbSnapshotIdentifier,
    'SnapshotType': obj.snapshotType,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'IncludeShared': obj.includeShared,
    'IncludePublic': obj.includePublic,
    'DbiResourceId': obj.dbiResourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbSnapshotMessage
 */
export interface RdsdbSnapshotMessage {
  /**
   * @schema RdsdbSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbSnapshotMessage#DBSnapshots
   */
  readonly dbSnapshots?: RdsdbSnapshot[];

}

/**
 * Converts an object of type 'RdsdbSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbSnapshotMessage(obj: RdsdbSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBSnapshots': obj.dbSnapshots?.map(y => toJson_RdsdbSnapshot(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbSubnetGroupsMessage
 */
export interface RdsDescribeDbSubnetGroupsMessage {
  /**
   * @schema RdsDescribeDbSubnetGroupsMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsDescribeDbSubnetGroupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeDbSubnetGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbSubnetGroupsMessage(obj: RdsDescribeDbSubnetGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbSubnetGroupMessage
 */
export interface RdsdbSubnetGroupMessage {
  /**
   * @schema RdsdbSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbSubnetGroupMessage#DBSubnetGroups
   */
  readonly dbSubnetGroups?: RdsdbSubnetGroup[];

}

/**
 * Converts an object of type 'RdsdbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbSubnetGroupMessage(obj: RdsdbSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBSubnetGroups': obj.dbSubnetGroups?.map(y => toJson_RdsdbSubnetGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeEngineDefaultClusterParametersMessage
 */
export interface RdsDescribeEngineDefaultClusterParametersMessage {
  /**
   * @schema RdsDescribeEngineDefaultClusterParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsDescribeEngineDefaultClusterParametersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeEngineDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeEngineDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeEngineDefaultClusterParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeEngineDefaultClusterParametersMessage(obj: RdsDescribeEngineDefaultClusterParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeEngineDefaultClusterParametersResult
 */
export interface RdsDescribeEngineDefaultClusterParametersResult {
  /**
   * @schema RdsDescribeEngineDefaultClusterParametersResult#EngineDefaults
   */
  readonly engineDefaults?: RdsEngineDefaults;

}

/**
 * Converts an object of type 'RdsDescribeEngineDefaultClusterParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeEngineDefaultClusterParametersResult(obj: RdsDescribeEngineDefaultClusterParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineDefaults': toJson_RdsEngineDefaults(obj.engineDefaults),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeEngineDefaultParametersMessage
 */
export interface RdsDescribeEngineDefaultParametersMessage {
  /**
   * @schema RdsDescribeEngineDefaultParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsDescribeEngineDefaultParametersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeEngineDefaultParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeEngineDefaultParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeEngineDefaultParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeEngineDefaultParametersMessage(obj: RdsDescribeEngineDefaultParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeEngineDefaultParametersResult
 */
export interface RdsDescribeEngineDefaultParametersResult {
  /**
   * @schema RdsDescribeEngineDefaultParametersResult#EngineDefaults
   */
  readonly engineDefaults?: RdsEngineDefaults;

}

/**
 * Converts an object of type 'RdsDescribeEngineDefaultParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeEngineDefaultParametersResult(obj: RdsDescribeEngineDefaultParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineDefaults': toJson_RdsEngineDefaults(obj.engineDefaults),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeEventCategoriesMessage
 */
export interface RdsDescribeEventCategoriesMessage {
  /**
   * @schema RdsDescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsDescribeEventCategoriesMessage#Filters
   */
  readonly filters?: RdsFilter[];

}

/**
 * Converts an object of type 'RdsDescribeEventCategoriesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeEventCategoriesMessage(obj: RdsDescribeEventCategoriesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsEventCategoriesMessage
 */
export interface RdsEventCategoriesMessage {
  /**
   * @schema RdsEventCategoriesMessage#EventCategoriesMapList
   */
  readonly eventCategoriesMapList?: RdsEventCategoriesMap[];

}

/**
 * Converts an object of type 'RdsEventCategoriesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsEventCategoriesMessage(obj: RdsEventCategoriesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventCategoriesMapList': obj.eventCategoriesMapList?.map(y => toJson_RdsEventCategoriesMap(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeEventSubscriptionsMessage
 */
export interface RdsDescribeEventSubscriptionsMessage {
  /**
   * @schema RdsDescribeEventSubscriptionsMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema RdsDescribeEventSubscriptionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeEventSubscriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeEventSubscriptionsMessage(obj: RdsDescribeEventSubscriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsEventSubscriptionsMessage
 */
export interface RdsEventSubscriptionsMessage {
  /**
   * @schema RdsEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsEventSubscriptionsMessage#EventSubscriptionsList
   */
  readonly eventSubscriptionsList?: RdsEventSubscription[];

}

/**
 * Converts an object of type 'RdsEventSubscriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsEventSubscriptionsMessage(obj: RdsEventSubscriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'EventSubscriptionsList': obj.eventSubscriptionsList?.map(y => toJson_RdsEventSubscription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeEventsMessage
 */
export interface RdsDescribeEventsMessage {
  /**
   * @schema RdsDescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema RdsDescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RdsDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RdsDescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema RdsDescribeEventsMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RdsDescribeEventsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeEventsMessage(obj: RdsDescribeEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIdentifier': obj.sourceIdentifier,
    'SourceType': obj.sourceType,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Duration': obj.duration,
    'EventCategories': obj.eventCategories?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsEventsMessage
 */
export interface RdsEventsMessage {
  /**
   * @schema RdsEventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsEventsMessage#Events
   */
  readonly events?: RdsEvent[];

}

/**
 * Converts an object of type 'RdsEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsEventsMessage(obj: RdsEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Events': obj.events?.map(y => toJson_RdsEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeExportTasksMessage
 */
export interface RdsDescribeExportTasksMessage {
  /**
   * @schema RdsDescribeExportTasksMessage#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier?: string;

  /**
   * @schema RdsDescribeExportTasksMessage#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema RdsDescribeExportTasksMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeExportTasksMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeExportTasksMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'RdsDescribeExportTasksMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeExportTasksMessage(obj: RdsDescribeExportTasksMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportTaskIdentifier': obj.exportTaskIdentifier,
    'SourceArn': obj.sourceArn,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsExportTasksMessage
 */
export interface RdsExportTasksMessage {
  /**
   * @schema RdsExportTasksMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsExportTasksMessage#ExportTasks
   */
  readonly exportTasks?: RdsExportTask[];

}

/**
 * Converts an object of type 'RdsExportTasksMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsExportTasksMessage(obj: RdsExportTasksMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ExportTasks': obj.exportTasks?.map(y => toJson_RdsExportTask(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeGlobalClustersMessage
 */
export interface RdsDescribeGlobalClustersMessage {
  /**
   * @schema RdsDescribeGlobalClustersMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsDescribeGlobalClustersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeGlobalClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeGlobalClustersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeGlobalClustersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeGlobalClustersMessage(obj: RdsDescribeGlobalClustersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsGlobalClustersMessage
 */
export interface RdsGlobalClustersMessage {
  /**
   * @schema RdsGlobalClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsGlobalClustersMessage#GlobalClusters
   */
  readonly globalClusters?: RdsGlobalCluster[];

}

/**
 * Converts an object of type 'RdsGlobalClustersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsGlobalClustersMessage(obj: RdsGlobalClustersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'GlobalClusters': obj.globalClusters?.map(y => toJson_RdsGlobalCluster(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeInstallationMediaMessage
 */
export interface RdsDescribeInstallationMediaMessage {
  /**
   * @schema RdsDescribeInstallationMediaMessage#InstallationMediaId
   */
  readonly installationMediaId?: string;

  /**
   * @schema RdsDescribeInstallationMediaMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeInstallationMediaMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeInstallationMediaMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeInstallationMediaMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeInstallationMediaMessage(obj: RdsDescribeInstallationMediaMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstallationMediaId': obj.installationMediaId,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsInstallationMediaMessage
 */
export interface RdsInstallationMediaMessage {
  /**
   * @schema RdsInstallationMediaMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsInstallationMediaMessage#InstallationMedia
   */
  readonly installationMedia?: RdsInstallationMedia[];

}

/**
 * Converts an object of type 'RdsInstallationMediaMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsInstallationMediaMessage(obj: RdsInstallationMediaMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'InstallationMedia': obj.installationMedia?.map(y => toJson_RdsInstallationMedia(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeOptionGroupOptionsMessage
 */
export interface RdsDescribeOptionGroupOptionsMessage {
  /**
   * @schema RdsDescribeOptionGroupOptionsMessage#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema RdsDescribeOptionGroupOptionsMessage#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

  /**
   * @schema RdsDescribeOptionGroupOptionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeOptionGroupOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeOptionGroupOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeOptionGroupOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeOptionGroupOptionsMessage(obj: RdsDescribeOptionGroupOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineName': obj.engineName,
    'MajorEngineVersion': obj.majorEngineVersion,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsOptionGroupOptionsMessage
 */
export interface RdsOptionGroupOptionsMessage {
  /**
   * @schema RdsOptionGroupOptionsMessage#OptionGroupOptions
   */
  readonly optionGroupOptions?: RdsOptionGroupOption[];

  /**
   * @schema RdsOptionGroupOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsOptionGroupOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOptionGroupOptionsMessage(obj: RdsOptionGroupOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroupOptions': obj.optionGroupOptions?.map(y => toJson_RdsOptionGroupOption(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeOptionGroupsMessage
 */
export interface RdsDescribeOptionGroupsMessage {
  /**
   * @schema RdsDescribeOptionGroupsMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsDescribeOptionGroupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeOptionGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeOptionGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeOptionGroupsMessage#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema RdsDescribeOptionGroupsMessage#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

}

/**
 * Converts an object of type 'RdsDescribeOptionGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeOptionGroupsMessage(obj: RdsDescribeOptionGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroupName': obj.optionGroupName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
    'EngineName': obj.engineName,
    'MajorEngineVersion': obj.majorEngineVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsOptionGroups
 */
export interface RdsOptionGroups {
  /**
   * @schema RdsOptionGroups#OptionGroupsList
   */
  readonly optionGroupsList?: RdsOptionGroup[];

  /**
   * @schema RdsOptionGroups#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsOptionGroups' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOptionGroups(obj: RdsOptionGroups | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroupsList': obj.optionGroupsList?.map(y => toJson_RdsOptionGroup(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeOrderableDbInstanceOptionsMessage
 */
export interface RdsDescribeOrderableDbInstanceOptionsMessage {
  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#AvailabilityZoneGroup
   */
  readonly availabilityZoneGroup?: string;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeOrderableDbInstanceOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeOrderableDbInstanceOptionsMessage(obj: RdsDescribeOrderableDbInstanceOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBInstanceClass': obj.dbInstanceClass,
    'LicenseModel': obj.licenseModel,
    'AvailabilityZoneGroup': obj.availabilityZoneGroup,
    'Vpc': obj.vpc,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsOrderableDbInstanceOptionsMessage
 */
export interface RdsOrderableDbInstanceOptionsMessage {
  /**
   * @schema RdsOrderableDbInstanceOptionsMessage#OrderableDBInstanceOptions
   */
  readonly orderableDbInstanceOptions?: RdsOrderableDbInstanceOption[];

  /**
   * @schema RdsOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsOrderableDbInstanceOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOrderableDbInstanceOptionsMessage(obj: RdsOrderableDbInstanceOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrderableDBInstanceOptions': obj.orderableDbInstanceOptions?.map(y => toJson_RdsOrderableDbInstanceOption(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribePendingMaintenanceActionsMessage
 */
export interface RdsDescribePendingMaintenanceActionsMessage {
  /**
   * @schema RdsDescribePendingMaintenanceActionsMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema RdsDescribePendingMaintenanceActionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribePendingMaintenanceActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'RdsDescribePendingMaintenanceActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribePendingMaintenanceActionsMessage(obj: RdsDescribePendingMaintenanceActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsPendingMaintenanceActionsMessage
 */
export interface RdsPendingMaintenanceActionsMessage {
  /**
   * @schema RdsPendingMaintenanceActionsMessage#PendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: RdsResourcePendingMaintenanceActions[];

  /**
   * @schema RdsPendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsPendingMaintenanceActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsPendingMaintenanceActionsMessage(obj: RdsPendingMaintenanceActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PendingMaintenanceActions': obj.pendingMaintenanceActions?.map(y => toJson_RdsResourcePendingMaintenanceActions(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeReservedDbInstancesMessage
 */
export interface RdsDescribeReservedDbInstancesMessage {
  /**
   * @schema RdsDescribeReservedDbInstancesMessage#ReservedDBInstanceId
   */
  readonly reservedDbInstanceId?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#Duration
   */
  readonly duration?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#LeaseId
   */
  readonly leaseId?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeReservedDbInstancesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeReservedDbInstancesMessage(obj: RdsDescribeReservedDbInstancesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedDBInstanceId': obj.reservedDbInstanceId,
    'ReservedDBInstancesOfferingId': obj.reservedDbInstancesOfferingId,
    'DBInstanceClass': obj.dbInstanceClass,
    'Duration': obj.duration,
    'ProductDescription': obj.productDescription,
    'OfferingType': obj.offeringType,
    'MultiAZ': obj.multiAz,
    'LeaseId': obj.leaseId,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsReservedDbInstanceMessage
 */
export interface RdsReservedDbInstanceMessage {
  /**
   * @schema RdsReservedDbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsReservedDbInstanceMessage#ReservedDBInstances
   */
  readonly reservedDbInstances?: RdsReservedDbInstance[];

}

/**
 * Converts an object of type 'RdsReservedDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsReservedDbInstanceMessage(obj: RdsReservedDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReservedDBInstances': obj.reservedDbInstances?.map(y => toJson_RdsReservedDbInstance(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeReservedDbInstancesOfferingsMessage
 */
export interface RdsDescribeReservedDbInstancesOfferingsMessage {
  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#Duration
   */
  readonly duration?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RdsDescribeReservedDbInstancesOfferingsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeReservedDbInstancesOfferingsMessage(obj: RdsDescribeReservedDbInstancesOfferingsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedDBInstancesOfferingId': obj.reservedDbInstancesOfferingId,
    'DBInstanceClass': obj.dbInstanceClass,
    'Duration': obj.duration,
    'ProductDescription': obj.productDescription,
    'OfferingType': obj.offeringType,
    'MultiAZ': obj.multiAz,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsReservedDbInstancesOfferingMessage
 */
export interface RdsReservedDbInstancesOfferingMessage {
  /**
   * @schema RdsReservedDbInstancesOfferingMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsReservedDbInstancesOfferingMessage#ReservedDBInstancesOfferings
   */
  readonly reservedDbInstancesOfferings?: RdsReservedDbInstancesOffering[];

}

/**
 * Converts an object of type 'RdsReservedDbInstancesOfferingMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsReservedDbInstancesOfferingMessage(obj: RdsReservedDbInstancesOfferingMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReservedDBInstancesOfferings': obj.reservedDbInstancesOfferings?.map(y => toJson_RdsReservedDbInstancesOffering(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeSourceRegionsMessage
 */
export interface RdsDescribeSourceRegionsMessage {
  /**
   * @schema RdsDescribeSourceRegionsMessage#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema RdsDescribeSourceRegionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeSourceRegionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeSourceRegionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

}

/**
 * Converts an object of type 'RdsDescribeSourceRegionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeSourceRegionsMessage(obj: RdsDescribeSourceRegionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsSourceRegionMessage
 */
export interface RdsSourceRegionMessage {
  /**
   * @schema RdsSourceRegionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsSourceRegionMessage#SourceRegions
   */
  readonly sourceRegions?: RdsSourceRegion[];

}

/**
 * Converts an object of type 'RdsSourceRegionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsSourceRegionMessage(obj: RdsSourceRegionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'SourceRegions': obj.sourceRegions?.map(y => toJson_RdsSourceRegion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeValidDbInstanceModificationsMessage
 */
export interface RdsDescribeValidDbInstanceModificationsMessage {
  /**
   * @schema RdsDescribeValidDbInstanceModificationsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

}

/**
 * Converts an object of type 'RdsDescribeValidDbInstanceModificationsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeValidDbInstanceModificationsMessage(obj: RdsDescribeValidDbInstanceModificationsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeValidDbInstanceModificationsResult
 */
export interface RdsDescribeValidDbInstanceModificationsResult {
  /**
   * @schema RdsDescribeValidDbInstanceModificationsResult#ValidDBInstanceModificationsMessage
   */
  readonly validDbInstanceModificationsMessage?: RdsValidDbInstanceModificationsMessage;

}

/**
 * Converts an object of type 'RdsDescribeValidDbInstanceModificationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeValidDbInstanceModificationsResult(obj: RdsDescribeValidDbInstanceModificationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ValidDBInstanceModificationsMessage': toJson_RdsValidDbInstanceModificationsMessage(obj.validDbInstanceModificationsMessage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDownloadDbLogFilePortionMessage
 */
export interface RdsDownloadDbLogFilePortionMessage {
  /**
   * @schema RdsDownloadDbLogFilePortionMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsDownloadDbLogFilePortionMessage#LogFileName
   */
  readonly logFileName?: string;

  /**
   * @schema RdsDownloadDbLogFilePortionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDownloadDbLogFilePortionMessage#NumberOfLines
   */
  readonly numberOfLines?: number;

}

/**
 * Converts an object of type 'RdsDownloadDbLogFilePortionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDownloadDbLogFilePortionMessage(obj: RdsDownloadDbLogFilePortionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'LogFileName': obj.logFileName,
    'Marker': obj.marker,
    'NumberOfLines': obj.numberOfLines,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDownloadDbLogFilePortionDetails
 */
export interface RdsDownloadDbLogFilePortionDetails {
  /**
   * @schema RdsDownloadDbLogFilePortionDetails#LogFileData
   */
  readonly logFileData?: string;

  /**
   * @schema RdsDownloadDbLogFilePortionDetails#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDownloadDbLogFilePortionDetails#AdditionalDataPending
   */
  readonly additionalDataPending?: boolean;

}

/**
 * Converts an object of type 'RdsDownloadDbLogFilePortionDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDownloadDbLogFilePortionDetails(obj: RdsDownloadDbLogFilePortionDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogFileData': obj.logFileData,
    'Marker': obj.marker,
    'AdditionalDataPending': obj.additionalDataPending,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsFailoverDbClusterMessage
 */
export interface RdsFailoverDbClusterMessage {
  /**
   * @schema RdsFailoverDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsFailoverDbClusterMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier?: string;

}

/**
 * Converts an object of type 'RdsFailoverDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsFailoverDbClusterMessage(obj: RdsFailoverDbClusterMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsFailoverDbClusterResult
 */
export interface RdsFailoverDbClusterResult {
  /**
   * @schema RdsFailoverDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * Converts an object of type 'RdsFailoverDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsFailoverDbClusterResult(obj: RdsFailoverDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_RdsdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsFailoverGlobalClusterMessage
 */
export interface RdsFailoverGlobalClusterMessage {
  /**
   * @schema RdsFailoverGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsFailoverGlobalClusterMessage#TargetDbClusterIdentifier
   */
  readonly targetDbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'RdsFailoverGlobalClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsFailoverGlobalClusterMessage(obj: RdsFailoverGlobalClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
    'TargetDbClusterIdentifier': obj.targetDbClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsFailoverGlobalClusterResult
 */
export interface RdsFailoverGlobalClusterResult {
  /**
   * @schema RdsFailoverGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: RdsGlobalCluster;

}

/**
 * Converts an object of type 'RdsFailoverGlobalClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsFailoverGlobalClusterResult(obj: RdsFailoverGlobalClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalCluster': toJson_RdsGlobalCluster(obj.globalCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsImportInstallationMediaMessage
 */
export interface RdsImportInstallationMediaMessage {
  /**
   * @schema RdsImportInstallationMediaMessage#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

  /**
   * @schema RdsImportInstallationMediaMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsImportInstallationMediaMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsImportInstallationMediaMessage#EngineInstallationMediaPath
   */
  readonly engineInstallationMediaPath?: string;

  /**
   * @schema RdsImportInstallationMediaMessage#OSInstallationMediaPath
   */
  readonly osInstallationMediaPath?: string;

}

/**
 * Converts an object of type 'RdsImportInstallationMediaMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsImportInstallationMediaMessage(obj: RdsImportInstallationMediaMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomAvailabilityZoneId': obj.customAvailabilityZoneId,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'EngineInstallationMediaPath': obj.engineInstallationMediaPath,
    'OSInstallationMediaPath': obj.osInstallationMediaPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsListTagsForResourceMessage
 */
export interface RdsListTagsForResourceMessage {
  /**
   * @schema RdsListTagsForResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema RdsListTagsForResourceMessage#Filters
   */
  readonly filters?: RdsFilter[];

}

/**
 * Converts an object of type 'RdsListTagsForResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsListTagsForResourceMessage(obj: RdsListTagsForResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Filters': obj.filters?.map(y => toJson_RdsFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsTagListMessage
 */
export interface RdsTagListMessage {
  /**
   * @schema RdsTagListMessage#TagList
   */
  readonly tagList?: RdsTag[];

}

/**
 * Converts an object of type 'RdsTagListMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsTagListMessage(obj: RdsTagListMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyCertificatesMessage
 */
export interface RdsModifyCertificatesMessage {
  /**
   * @schema RdsModifyCertificatesMessage#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema RdsModifyCertificatesMessage#RemoveCustomerOverride
   */
  readonly removeCustomerOverride?: boolean;

}

/**
 * Converts an object of type 'RdsModifyCertificatesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyCertificatesMessage(obj: RdsModifyCertificatesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateIdentifier': obj.certificateIdentifier,
    'RemoveCustomerOverride': obj.removeCustomerOverride,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyCertificatesResult
 */
export interface RdsModifyCertificatesResult {
  /**
   * @schema RdsModifyCertificatesResult#Certificate
   */
  readonly certificate?: RdsCertificate;

}

/**
 * Converts an object of type 'RdsModifyCertificatesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyCertificatesResult(obj: RdsModifyCertificatesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': toJson_RdsCertificate(obj.certificate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyCurrentDbClusterCapacityMessage
 */
export interface RdsModifyCurrentDbClusterCapacityMessage {
  /**
   * @schema RdsModifyCurrentDbClusterCapacityMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsModifyCurrentDbClusterCapacityMessage#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema RdsModifyCurrentDbClusterCapacityMessage#SecondsBeforeTimeout
   */
  readonly secondsBeforeTimeout?: number;

  /**
   * @schema RdsModifyCurrentDbClusterCapacityMessage#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * Converts an object of type 'RdsModifyCurrentDbClusterCapacityMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyCurrentDbClusterCapacityMessage(obj: RdsModifyCurrentDbClusterCapacityMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'Capacity': obj.capacity,
    'SecondsBeforeTimeout': obj.secondsBeforeTimeout,
    'TimeoutAction': obj.timeoutAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterCapacityInfo
 */
export interface RdsdbClusterCapacityInfo {
  /**
   * @schema RdsdbClusterCapacityInfo#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbClusterCapacityInfo#PendingCapacity
   */
  readonly pendingCapacity?: number;

  /**
   * @schema RdsdbClusterCapacityInfo#CurrentCapacity
   */
  readonly currentCapacity?: number;

  /**
   * @schema RdsdbClusterCapacityInfo#SecondsBeforeTimeout
   */
  readonly secondsBeforeTimeout?: number;

  /**
   * @schema RdsdbClusterCapacityInfo#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * Converts an object of type 'RdsdbClusterCapacityInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterCapacityInfo(obj: RdsdbClusterCapacityInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'PendingCapacity': obj.pendingCapacity,
    'CurrentCapacity': obj.currentCapacity,
    'SecondsBeforeTimeout': obj.secondsBeforeTimeout,
    'TimeoutAction': obj.timeoutAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbClusterMessage
 */
export interface RdsModifyDbClusterMessage {
  /**
   * @schema RdsModifyDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsModifyDbClusterMessage#NewDBClusterIdentifier
   */
  readonly newDbClusterIdentifier?: string;

  /**
   * @schema RdsModifyDbClusterMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsModifyDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsModifyDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsModifyDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsModifyDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsModifyDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsModifyDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsModifyDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsModifyDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsModifyDbClusterMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: RdsCloudwatchLogsExportConfiguration;

  /**
   * @schema RdsModifyDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsModifyDbClusterMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#DBInstanceParameterGroupName
   */
  readonly dbInstanceParameterGroupName?: string;

  /**
   * @schema RdsModifyDbClusterMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsModifyDbClusterMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsModifyDbClusterMessage#ScalingConfiguration
   */
  readonly scalingConfiguration?: RdsScalingConfiguration;

  /**
   * @schema RdsModifyDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#EnableHttpEndpoint
   */
  readonly enableHttpEndpoint?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#EnableGlobalWriteForwarding
   */
  readonly enableGlobalWriteForwarding?: boolean;

}

/**
 * Converts an object of type 'RdsModifyDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbClusterMessage(obj: RdsModifyDbClusterMessage | undefined): Record<string, any> | undefined {
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
    'BacktrackWindow': obj.backtrackWindow,
    'CloudwatchLogsExportConfiguration': toJson_RdsCloudwatchLogsExportConfiguration(obj.cloudwatchLogsExportConfiguration),
    'EngineVersion': obj.engineVersion,
    'AllowMajorVersionUpgrade': obj.allowMajorVersionUpgrade,
    'DBInstanceParameterGroupName': obj.dbInstanceParameterGroupName,
    'Domain': obj.domain,
    'DomainIAMRoleName': obj.domainIamRoleName,
    'ScalingConfiguration': toJson_RdsScalingConfiguration(obj.scalingConfiguration),
    'DeletionProtection': obj.deletionProtection,
    'EnableHttpEndpoint': obj.enableHttpEndpoint,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'EnableGlobalWriteForwarding': obj.enableGlobalWriteForwarding,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbClusterResult
 */
export interface RdsModifyDbClusterResult {
  /**
   * @schema RdsModifyDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * Converts an object of type 'RdsModifyDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbClusterResult(obj: RdsModifyDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_RdsdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbClusterEndpointMessage
 */
export interface RdsModifyDbClusterEndpointMessage {
  /**
   * @schema RdsModifyDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema RdsModifyDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema RdsModifyDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema RdsModifyDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

}

/**
 * Converts an object of type 'RdsModifyDbClusterEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbClusterEndpointMessage(obj: RdsModifyDbClusterEndpointMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsModifyDbClusterParameterGroupMessage
 */
export interface RdsModifyDbClusterParameterGroupMessage {
  /**
   * @schema RdsModifyDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsModifyDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: RdsParameter[];

}

/**
 * Converts an object of type 'RdsModifyDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbClusterParameterGroupMessage(obj: RdsModifyDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'Parameters': obj.parameters?.map(y => toJson_RdsParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterParameterGroupNameMessage
 */
export interface RdsdbClusterParameterGroupNameMessage {
  /**
   * @schema RdsdbClusterParameterGroupNameMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * Converts an object of type 'RdsdbClusterParameterGroupNameMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterParameterGroupNameMessage(obj: RdsdbClusterParameterGroupNameMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbClusterSnapshotAttributeMessage
 */
export interface RdsModifyDbClusterSnapshotAttributeMessage {
  /**
   * @schema RdsModifyDbClusterSnapshotAttributeMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema RdsModifyDbClusterSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema RdsModifyDbClusterSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema RdsModifyDbClusterSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * Converts an object of type 'RdsModifyDbClusterSnapshotAttributeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbClusterSnapshotAttributeMessage(obj: RdsModifyDbClusterSnapshotAttributeMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsModifyDbClusterSnapshotAttributeResult
 */
export interface RdsModifyDbClusterSnapshotAttributeResult {
  /**
   * @schema RdsModifyDbClusterSnapshotAttributeResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: RdsdbClusterSnapshotAttributesResult;

}

/**
 * Converts an object of type 'RdsModifyDbClusterSnapshotAttributeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbClusterSnapshotAttributeResult(obj: RdsModifyDbClusterSnapshotAttributeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotAttributesResult': toJson_RdsdbClusterSnapshotAttributesResult(obj.dbClusterSnapshotAttributesResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbInstanceMessage
 */
export interface RdsModifyDbInstanceMessage {
  /**
   * @schema RdsModifyDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema RdsModifyDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsModifyDbInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#NewDBInstanceIdentifier
   */
  readonly newDbInstanceIdentifier?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#DBPortNumber
   */
  readonly dbPortNumber?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: RdsCloudwatchLogsExportConfiguration;

  /**
   * @schema RdsModifyDbInstanceMessage#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsModifyDbInstanceMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#CertificateRotationRestart
   */
  readonly certificateRotationRestart?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#ReplicaMode
   */
  readonly replicaMode?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#EnableCustomerOwnedIp
   */
  readonly enableCustomerOwnedIp?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#AwsBackupRecoveryPointArn
   */
  readonly awsBackupRecoveryPointArn?: string;

}

/**
 * Converts an object of type 'RdsModifyDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbInstanceMessage(obj: RdsModifyDbInstanceMessage | undefined): Record<string, any> | undefined {
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
    'PerformanceInsightsRetentionPeriod': obj.performanceInsightsRetentionPeriod,
    'CloudwatchLogsExportConfiguration': toJson_RdsCloudwatchLogsExportConfiguration(obj.cloudwatchLogsExportConfiguration),
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_RdsProcessorFeature(y)),
    'UseDefaultProcessorFeatures': obj.useDefaultProcessorFeatures,
    'DeletionProtection': obj.deletionProtection,
    'MaxAllocatedStorage': obj.maxAllocatedStorage,
    'CertificateRotationRestart': obj.certificateRotationRestart,
    'ReplicaMode': obj.replicaMode,
    'EnableCustomerOwnedIp': obj.enableCustomerOwnedIp,
    'AwsBackupRecoveryPointArn': obj.awsBackupRecoveryPointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbInstanceResult
 */
export interface RdsModifyDbInstanceResult {
  /**
   * @schema RdsModifyDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsModifyDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbInstanceResult(obj: RdsModifyDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbParameterGroupMessage
 */
export interface RdsModifyDbParameterGroupMessage {
  /**
   * @schema RdsModifyDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsModifyDbParameterGroupMessage#Parameters
   */
  readonly parameters?: RdsParameter[];

}

/**
 * Converts an object of type 'RdsModifyDbParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbParameterGroupMessage(obj: RdsModifyDbParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'Parameters': obj.parameters?.map(y => toJson_RdsParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbParameterGroupNameMessage
 */
export interface RdsdbParameterGroupNameMessage {
  /**
   * @schema RdsdbParameterGroupNameMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

}

/**
 * Converts an object of type 'RdsdbParameterGroupNameMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbParameterGroupNameMessage(obj: RdsdbParameterGroupNameMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbProxyRequest
 */
export interface RdsModifyDbProxyRequest {
  /**
   * @schema RdsModifyDbProxyRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsModifyDbProxyRequest#NewDBProxyName
   */
  readonly newDbProxyName?: string;

  /**
   * @schema RdsModifyDbProxyRequest#Auth
   */
  readonly auth?: RdsUserAuthConfig[];

  /**
   * @schema RdsModifyDbProxyRequest#RequireTLS
   */
  readonly requireTls?: boolean;

  /**
   * @schema RdsModifyDbProxyRequest#IdleClientTimeout
   */
  readonly idleClientTimeout?: number;

  /**
   * @schema RdsModifyDbProxyRequest#DebugLogging
   */
  readonly debugLogging?: boolean;

  /**
   * @schema RdsModifyDbProxyRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsModifyDbProxyRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * Converts an object of type 'RdsModifyDbProxyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbProxyRequest(obj: RdsModifyDbProxyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'NewDBProxyName': obj.newDbProxyName,
    'Auth': obj.auth?.map(y => toJson_RdsUserAuthConfig(y)),
    'RequireTLS': obj.requireTls,
    'IdleClientTimeout': obj.idleClientTimeout,
    'DebugLogging': obj.debugLogging,
    'RoleArn': obj.roleArn,
    'SecurityGroups': obj.securityGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbProxyResponse
 */
export interface RdsModifyDbProxyResponse {
  /**
   * @schema RdsModifyDbProxyResponse#DBProxy
   */
  readonly dbProxy?: RdsdbProxy;

}

/**
 * Converts an object of type 'RdsModifyDbProxyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbProxyResponse(obj: RdsModifyDbProxyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxy': toJson_RdsdbProxy(obj.dbProxy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbProxyEndpointRequest
 */
export interface RdsModifyDbProxyEndpointRequest {
  /**
   * @schema RdsModifyDbProxyEndpointRequest#DBProxyEndpointName
   */
  readonly dbProxyEndpointName?: string;

  /**
   * @schema RdsModifyDbProxyEndpointRequest#NewDBProxyEndpointName
   */
  readonly newDbProxyEndpointName?: string;

  /**
   * @schema RdsModifyDbProxyEndpointRequest#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

}

/**
 * Converts an object of type 'RdsModifyDbProxyEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbProxyEndpointRequest(obj: RdsModifyDbProxyEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyEndpointName': obj.dbProxyEndpointName,
    'NewDBProxyEndpointName': obj.newDbProxyEndpointName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbProxyEndpointResponse
 */
export interface RdsModifyDbProxyEndpointResponse {
  /**
   * @schema RdsModifyDbProxyEndpointResponse#DBProxyEndpoint
   */
  readonly dbProxyEndpoint?: RdsdbProxyEndpoint;

}

/**
 * Converts an object of type 'RdsModifyDbProxyEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbProxyEndpointResponse(obj: RdsModifyDbProxyEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyEndpoint': toJson_RdsdbProxyEndpoint(obj.dbProxyEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbProxyTargetGroupRequest
 */
export interface RdsModifyDbProxyTargetGroupRequest {
  /**
   * @schema RdsModifyDbProxyTargetGroupRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsModifyDbProxyTargetGroupRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsModifyDbProxyTargetGroupRequest#ConnectionPoolConfig
   */
  readonly connectionPoolConfig?: RdsConnectionPoolConfiguration;

  /**
   * @schema RdsModifyDbProxyTargetGroupRequest#NewName
   */
  readonly newName?: string;

}

/**
 * Converts an object of type 'RdsModifyDbProxyTargetGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbProxyTargetGroupRequest(obj: RdsModifyDbProxyTargetGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetGroupName': obj.targetGroupName,
    'DBProxyName': obj.dbProxyName,
    'ConnectionPoolConfig': toJson_RdsConnectionPoolConfiguration(obj.connectionPoolConfig),
    'NewName': obj.newName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbProxyTargetGroupResponse
 */
export interface RdsModifyDbProxyTargetGroupResponse {
  /**
   * @schema RdsModifyDbProxyTargetGroupResponse#DBProxyTargetGroup
   */
  readonly dbProxyTargetGroup?: RdsdbProxyTargetGroup;

}

/**
 * Converts an object of type 'RdsModifyDbProxyTargetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbProxyTargetGroupResponse(obj: RdsModifyDbProxyTargetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyTargetGroup': toJson_RdsdbProxyTargetGroup(obj.dbProxyTargetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbSnapshotMessage
 */
export interface RdsModifyDbSnapshotMessage {
  /**
   * @schema RdsModifyDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema RdsModifyDbSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsModifyDbSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

}

/**
 * Converts an object of type 'RdsModifyDbSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbSnapshotMessage(obj: RdsModifyDbSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshotIdentifier': obj.dbSnapshotIdentifier,
    'EngineVersion': obj.engineVersion,
    'OptionGroupName': obj.optionGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbSnapshotResult
 */
export interface RdsModifyDbSnapshotResult {
  /**
   * @schema RdsModifyDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: RdsdbSnapshot;

}

/**
 * Converts an object of type 'RdsModifyDbSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbSnapshotResult(obj: RdsModifyDbSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshot': toJson_RdsdbSnapshot(obj.dbSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbSnapshotAttributeMessage
 */
export interface RdsModifyDbSnapshotAttributeMessage {
  /**
   * @schema RdsModifyDbSnapshotAttributeMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema RdsModifyDbSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema RdsModifyDbSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema RdsModifyDbSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * Converts an object of type 'RdsModifyDbSnapshotAttributeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbSnapshotAttributeMessage(obj: RdsModifyDbSnapshotAttributeMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshotIdentifier': obj.dbSnapshotIdentifier,
    'AttributeName': obj.attributeName,
    'ValuesToAdd': obj.valuesToAdd?.map(y => y),
    'ValuesToRemove': obj.valuesToRemove?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbSnapshotAttributeResult
 */
export interface RdsModifyDbSnapshotAttributeResult {
  /**
   * @schema RdsModifyDbSnapshotAttributeResult#DBSnapshotAttributesResult
   */
  readonly dbSnapshotAttributesResult?: RdsdbSnapshotAttributesResult;

}

/**
 * Converts an object of type 'RdsModifyDbSnapshotAttributeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbSnapshotAttributeResult(obj: RdsModifyDbSnapshotAttributeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshotAttributesResult': toJson_RdsdbSnapshotAttributesResult(obj.dbSnapshotAttributesResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyDbSubnetGroupMessage
 */
export interface RdsModifyDbSubnetGroupMessage {
  /**
   * @schema RdsModifyDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsModifyDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema RdsModifyDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'RdsModifyDbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbSubnetGroupMessage(obj: RdsModifyDbSubnetGroupMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsModifyDbSubnetGroupResult
 */
export interface RdsModifyDbSubnetGroupResult {
  /**
   * @schema RdsModifyDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: RdsdbSubnetGroup;

}

/**
 * Converts an object of type 'RdsModifyDbSubnetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyDbSubnetGroupResult(obj: RdsModifyDbSubnetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroup': toJson_RdsdbSubnetGroup(obj.dbSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyEventSubscriptionMessage
 */
export interface RdsModifyEventSubscriptionMessage {
  /**
   * @schema RdsModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema RdsModifyEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RdsModifyEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RdsModifyEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'RdsModifyEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyEventSubscriptionMessage(obj: RdsModifyEventSubscriptionMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsModifyEventSubscriptionResult
 */
export interface RdsModifyEventSubscriptionResult {
  /**
   * @schema RdsModifyEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RdsEventSubscription;

}

/**
 * Converts an object of type 'RdsModifyEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyEventSubscriptionResult(obj: RdsModifyEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_RdsEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyGlobalClusterMessage
 */
export interface RdsModifyGlobalClusterMessage {
  /**
   * @schema RdsModifyGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsModifyGlobalClusterMessage#NewGlobalClusterIdentifier
   */
  readonly newGlobalClusterIdentifier?: string;

  /**
   * @schema RdsModifyGlobalClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsModifyGlobalClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsModifyGlobalClusterMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

}

/**
 * Converts an object of type 'RdsModifyGlobalClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyGlobalClusterMessage(obj: RdsModifyGlobalClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
    'NewGlobalClusterIdentifier': obj.newGlobalClusterIdentifier,
    'DeletionProtection': obj.deletionProtection,
    'EngineVersion': obj.engineVersion,
    'AllowMajorVersionUpgrade': obj.allowMajorVersionUpgrade,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyGlobalClusterResult
 */
export interface RdsModifyGlobalClusterResult {
  /**
   * @schema RdsModifyGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: RdsGlobalCluster;

}

/**
 * Converts an object of type 'RdsModifyGlobalClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyGlobalClusterResult(obj: RdsModifyGlobalClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalCluster': toJson_RdsGlobalCluster(obj.globalCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyOptionGroupMessage
 */
export interface RdsModifyOptionGroupMessage {
  /**
   * @schema RdsModifyOptionGroupMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsModifyOptionGroupMessage#OptionsToInclude
   */
  readonly optionsToInclude?: RdsOptionConfiguration[];

  /**
   * @schema RdsModifyOptionGroupMessage#OptionsToRemove
   */
  readonly optionsToRemove?: string[];

  /**
   * @schema RdsModifyOptionGroupMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * Converts an object of type 'RdsModifyOptionGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyOptionGroupMessage(obj: RdsModifyOptionGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroupName': obj.optionGroupName,
    'OptionsToInclude': obj.optionsToInclude?.map(y => toJson_RdsOptionConfiguration(y)),
    'OptionsToRemove': obj.optionsToRemove?.map(y => y),
    'ApplyImmediately': obj.applyImmediately,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsModifyOptionGroupResult
 */
export interface RdsModifyOptionGroupResult {
  /**
   * @schema RdsModifyOptionGroupResult#OptionGroup
   */
  readonly optionGroup?: RdsOptionGroup;

}

/**
 * Converts an object of type 'RdsModifyOptionGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsModifyOptionGroupResult(obj: RdsModifyOptionGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroup': toJson_RdsOptionGroup(obj.optionGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsPromoteReadReplicaMessage
 */
export interface RdsPromoteReadReplicaMessage {
  /**
   * @schema RdsPromoteReadReplicaMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsPromoteReadReplicaMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsPromoteReadReplicaMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

}

/**
 * Converts an object of type 'RdsPromoteReadReplicaMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsPromoteReadReplicaMessage(obj: RdsPromoteReadReplicaMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'PreferredBackupWindow': obj.preferredBackupWindow,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsPromoteReadReplicaResult
 */
export interface RdsPromoteReadReplicaResult {
  /**
   * @schema RdsPromoteReadReplicaResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsPromoteReadReplicaResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsPromoteReadReplicaResult(obj: RdsPromoteReadReplicaResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsPromoteReadReplicaDbClusterMessage
 */
export interface RdsPromoteReadReplicaDbClusterMessage {
  /**
   * @schema RdsPromoteReadReplicaDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'RdsPromoteReadReplicaDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsPromoteReadReplicaDbClusterMessage(obj: RdsPromoteReadReplicaDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsPromoteReadReplicaDbClusterResult
 */
export interface RdsPromoteReadReplicaDbClusterResult {
  /**
   * @schema RdsPromoteReadReplicaDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * Converts an object of type 'RdsPromoteReadReplicaDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsPromoteReadReplicaDbClusterResult(obj: RdsPromoteReadReplicaDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_RdsdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsPurchaseReservedDbInstancesOfferingMessage
 */
export interface RdsPurchaseReservedDbInstancesOfferingMessage {
  /**
   * @schema RdsPurchaseReservedDbInstancesOfferingMessage#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema RdsPurchaseReservedDbInstancesOfferingMessage#ReservedDBInstanceId
   */
  readonly reservedDbInstanceId?: string;

  /**
   * @schema RdsPurchaseReservedDbInstancesOfferingMessage#DBInstanceCount
   */
  readonly dbInstanceCount?: number;

  /**
   * @schema RdsPurchaseReservedDbInstancesOfferingMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * Converts an object of type 'RdsPurchaseReservedDbInstancesOfferingMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsPurchaseReservedDbInstancesOfferingMessage(obj: RdsPurchaseReservedDbInstancesOfferingMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedDBInstancesOfferingId': obj.reservedDbInstancesOfferingId,
    'ReservedDBInstanceId': obj.reservedDbInstanceId,
    'DBInstanceCount': obj.dbInstanceCount,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsPurchaseReservedDbInstancesOfferingResult
 */
export interface RdsPurchaseReservedDbInstancesOfferingResult {
  /**
   * @schema RdsPurchaseReservedDbInstancesOfferingResult#ReservedDBInstance
   */
  readonly reservedDbInstance?: RdsReservedDbInstance;

}

/**
 * Converts an object of type 'RdsPurchaseReservedDbInstancesOfferingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsPurchaseReservedDbInstancesOfferingResult(obj: RdsPurchaseReservedDbInstancesOfferingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedDBInstance': toJson_RdsReservedDbInstance(obj.reservedDbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRebootDbInstanceMessage
 */
export interface RdsRebootDbInstanceMessage {
  /**
   * @schema RdsRebootDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsRebootDbInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * Converts an object of type 'RdsRebootDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRebootDbInstanceMessage(obj: RdsRebootDbInstanceMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsRebootDbInstanceResult
 */
export interface RdsRebootDbInstanceResult {
  /**
   * @schema RdsRebootDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsRebootDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRebootDbInstanceResult(obj: RdsRebootDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRegisterDbProxyTargetsRequest
 */
export interface RdsRegisterDbProxyTargetsRequest {
  /**
   * @schema RdsRegisterDbProxyTargetsRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsRegisterDbProxyTargetsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsRegisterDbProxyTargetsRequest#DBInstanceIdentifiers
   */
  readonly dbInstanceIdentifiers?: string[];

  /**
   * @schema RdsRegisterDbProxyTargetsRequest#DBClusterIdentifiers
   */
  readonly dbClusterIdentifiers?: string[];

}

/**
 * Converts an object of type 'RdsRegisterDbProxyTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRegisterDbProxyTargetsRequest(obj: RdsRegisterDbProxyTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'TargetGroupName': obj.targetGroupName,
    'DBInstanceIdentifiers': obj.dbInstanceIdentifiers?.map(y => y),
    'DBClusterIdentifiers': obj.dbClusterIdentifiers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRegisterDbProxyTargetsResponse
 */
export interface RdsRegisterDbProxyTargetsResponse {
  /**
   * @schema RdsRegisterDbProxyTargetsResponse#DBProxyTargets
   */
  readonly dbProxyTargets?: RdsdbProxyTarget[];

}

/**
 * Converts an object of type 'RdsRegisterDbProxyTargetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRegisterDbProxyTargetsResponse(obj: RdsRegisterDbProxyTargetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyTargets': obj.dbProxyTargets?.map(y => toJson_RdsdbProxyTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRemoveFromGlobalClusterMessage
 */
export interface RdsRemoveFromGlobalClusterMessage {
  /**
   * @schema RdsRemoveFromGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsRemoveFromGlobalClusterMessage#DbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'RdsRemoveFromGlobalClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRemoveFromGlobalClusterMessage(obj: RdsRemoveFromGlobalClusterMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsRemoveFromGlobalClusterResult
 */
export interface RdsRemoveFromGlobalClusterResult {
  /**
   * @schema RdsRemoveFromGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: RdsGlobalCluster;

}

/**
 * Converts an object of type 'RdsRemoveFromGlobalClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRemoveFromGlobalClusterResult(obj: RdsRemoveFromGlobalClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalCluster': toJson_RdsGlobalCluster(obj.globalCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRemoveRoleFromDbClusterMessage
 */
export interface RdsRemoveRoleFromDbClusterMessage {
  /**
   * @schema RdsRemoveRoleFromDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsRemoveRoleFromDbClusterMessage#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsRemoveRoleFromDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * Converts an object of type 'RdsRemoveRoleFromDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRemoveRoleFromDbClusterMessage(obj: RdsRemoveRoleFromDbClusterMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsRemoveRoleFromDbInstanceMessage
 */
export interface RdsRemoveRoleFromDbInstanceMessage {
  /**
   * @schema RdsRemoveRoleFromDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsRemoveRoleFromDbInstanceMessage#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsRemoveRoleFromDbInstanceMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * Converts an object of type 'RdsRemoveRoleFromDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRemoveRoleFromDbInstanceMessage(obj: RdsRemoveRoleFromDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'RoleArn': obj.roleArn,
    'FeatureName': obj.featureName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRemoveSourceIdentifierFromSubscriptionMessage
 */
export interface RdsRemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @schema RdsRemoveSourceIdentifierFromSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema RdsRemoveSourceIdentifierFromSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

}

/**
 * Converts an object of type 'RdsRemoveSourceIdentifierFromSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRemoveSourceIdentifierFromSubscriptionMessage(obj: RdsRemoveSourceIdentifierFromSubscriptionMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsRemoveSourceIdentifierFromSubscriptionResult
 */
export interface RdsRemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @schema RdsRemoveSourceIdentifierFromSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RdsEventSubscription;

}

/**
 * Converts an object of type 'RdsRemoveSourceIdentifierFromSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRemoveSourceIdentifierFromSubscriptionResult(obj: RdsRemoveSourceIdentifierFromSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_RdsEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRemoveTagsFromResourceMessage
 */
export interface RdsRemoveTagsFromResourceMessage {
  /**
   * @schema RdsRemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema RdsRemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'RdsRemoveTagsFromResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRemoveTagsFromResourceMessage(obj: RdsRemoveTagsFromResourceMessage | undefined): Record<string, any> | undefined {
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
 * @schema RdsResetDbClusterParameterGroupMessage
 */
export interface RdsResetDbClusterParameterGroupMessage {
  /**
   * @schema RdsResetDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsResetDbClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema RdsResetDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: RdsParameter[];

}

/**
 * Converts an object of type 'RdsResetDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsResetDbClusterParameterGroupMessage(obj: RdsResetDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'ResetAllParameters': obj.resetAllParameters,
    'Parameters': obj.parameters?.map(y => toJson_RdsParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsResetDbParameterGroupMessage
 */
export interface RdsResetDbParameterGroupMessage {
  /**
   * @schema RdsResetDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsResetDbParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema RdsResetDbParameterGroupMessage#Parameters
   */
  readonly parameters?: RdsParameter[];

}

/**
 * Converts an object of type 'RdsResetDbParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsResetDbParameterGroupMessage(obj: RdsResetDbParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'ResetAllParameters': obj.resetAllParameters,
    'Parameters': obj.parameters?.map(y => toJson_RdsParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbClusterFromS3Message
 */
export interface RdsRestoreDbClusterFromS3Message {
  /**
   * @schema RdsRestoreDbClusterFromS3Message#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RdsRestoreDbClusterFromS3Message#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbClusterFromS3Message#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#SourceEngine
   */
  readonly sourceEngine?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#SourceEngineVersion
   */
  readonly sourceEngineVersion?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#S3IngestionRoleArn
   */
  readonly s3IngestionRoleArn?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

}

/**
 * Converts an object of type 'RdsRestoreDbClusterFromS3Message' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbClusterFromS3Message(obj: RdsRestoreDbClusterFromS3Message | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'CharacterSetName': obj.characterSetName,
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
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'SourceEngine': obj.sourceEngine,
    'SourceEngineVersion': obj.sourceEngineVersion,
    'S3BucketName': obj.s3BucketName,
    'S3Prefix': obj.s3Prefix,
    'S3IngestionRoleArn': obj.s3IngestionRoleArn,
    'BacktrackWindow': obj.backtrackWindow,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'DeletionProtection': obj.deletionProtection,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'Domain': obj.domain,
    'DomainIAMRoleName': obj.domainIamRoleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbClusterFromS3Result
 */
export interface RdsRestoreDbClusterFromS3Result {
  /**
   * @schema RdsRestoreDbClusterFromS3Result#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * Converts an object of type 'RdsRestoreDbClusterFromS3Result' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbClusterFromS3Result(obj: RdsRestoreDbClusterFromS3Result | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_RdsdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbClusterFromSnapshotMessage
 */
export interface RdsRestoreDbClusterFromSnapshotMessage {
  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#ScalingConfiguration
   */
  readonly scalingConfiguration?: RdsScalingConfiguration;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

}

/**
 * Converts an object of type 'RdsRestoreDbClusterFromSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbClusterFromSnapshotMessage(obj: RdsRestoreDbClusterFromSnapshotMessage | undefined): Record<string, any> | undefined {
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
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
    'KmsKeyId': obj.kmsKeyId,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'BacktrackWindow': obj.backtrackWindow,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'EngineMode': obj.engineMode,
    'ScalingConfiguration': toJson_RdsScalingConfiguration(obj.scalingConfiguration),
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'DeletionProtection': obj.deletionProtection,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'Domain': obj.domain,
    'DomainIAMRoleName': obj.domainIamRoleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbClusterFromSnapshotResult
 */
export interface RdsRestoreDbClusterFromSnapshotResult {
  /**
   * @schema RdsRestoreDbClusterFromSnapshotResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * Converts an object of type 'RdsRestoreDbClusterFromSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbClusterFromSnapshotResult(obj: RdsRestoreDbClusterFromSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_RdsdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbClusterToPointInTimeMessage
 */
export interface RdsRestoreDbClusterToPointInTimeMessage {
  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#RestoreType
   */
  readonly restoreType?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#RestoreToTime
   */
  readonly restoreToTime?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#ScalingConfiguration
   */
  readonly scalingConfiguration?: RdsScalingConfiguration;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#EngineMode
   */
  readonly engineMode?: string;

}

/**
 * Converts an object of type 'RdsRestoreDbClusterToPointInTimeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbClusterToPointInTimeMessage(obj: RdsRestoreDbClusterToPointInTimeMessage | undefined): Record<string, any> | undefined {
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
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
    'KmsKeyId': obj.kmsKeyId,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'BacktrackWindow': obj.backtrackWindow,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'DeletionProtection': obj.deletionProtection,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'Domain': obj.domain,
    'DomainIAMRoleName': obj.domainIamRoleName,
    'ScalingConfiguration': toJson_RdsScalingConfiguration(obj.scalingConfiguration),
    'EngineMode': obj.engineMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbClusterToPointInTimeResult
 */
export interface RdsRestoreDbClusterToPointInTimeResult {
  /**
   * @schema RdsRestoreDbClusterToPointInTimeResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * Converts an object of type 'RdsRestoreDbClusterToPointInTimeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbClusterToPointInTimeResult(obj: RdsRestoreDbClusterToPointInTimeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_RdsdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbInstanceFromDbSnapshotMessage
 */
export interface RdsRestoreDbInstanceFromDbSnapshotMessage {
  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#EnableCustomerOwnedIp
   */
  readonly enableCustomerOwnedIp?: boolean;

}

/**
 * Converts an object of type 'RdsRestoreDbInstanceFromDbSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbInstanceFromDbSnapshotMessage(obj: RdsRestoreDbInstanceFromDbSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'DBSnapshotIdentifier': obj.dbSnapshotIdentifier,
    'DBInstanceClass': obj.dbInstanceClass,
    'Port': obj.port,
    'AvailabilityZone': obj.availabilityZone,
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'MultiAZ': obj.multiAz,
    'PubliclyAccessible': obj.publiclyAccessible,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'LicenseModel': obj.licenseModel,
    'DBName': obj.dbName,
    'Engine': obj.engine,
    'Iops': obj.iops,
    'OptionGroupName': obj.optionGroupName,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
    'StorageType': obj.storageType,
    'TdeCredentialArn': obj.tdeCredentialArn,
    'TdeCredentialPassword': obj.tdeCredentialPassword,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'Domain': obj.domain,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'DomainIAMRoleName': obj.domainIamRoleName,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_RdsProcessorFeature(y)),
    'UseDefaultProcessorFeatures': obj.useDefaultProcessorFeatures,
    'DBParameterGroupName': obj.dbParameterGroupName,
    'DeletionProtection': obj.deletionProtection,
    'EnableCustomerOwnedIp': obj.enableCustomerOwnedIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbInstanceFromDbSnapshotResult
 */
export interface RdsRestoreDbInstanceFromDbSnapshotResult {
  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsRestoreDbInstanceFromDbSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbInstanceFromDbSnapshotResult(obj: RdsRestoreDbInstanceFromDbSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbInstanceFromS3Message
 */
export interface RdsRestoreDbInstanceFromS3Message {
  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#SourceEngine
   */
  readonly sourceEngine?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#SourceEngineVersion
   */
  readonly sourceEngineVersion?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#S3IngestionRoleArn
   */
  readonly s3IngestionRoleArn?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

}

/**
 * Converts an object of type 'RdsRestoreDbInstanceFromS3Message' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbInstanceFromS3Message(obj: RdsRestoreDbInstanceFromS3Message | undefined): Record<string, any> | undefined {
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
    'PubliclyAccessible': obj.publiclyAccessible,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
    'StorageType': obj.storageType,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'MonitoringInterval': obj.monitoringInterval,
    'MonitoringRoleArn': obj.monitoringRoleArn,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'SourceEngine': obj.sourceEngine,
    'SourceEngineVersion': obj.sourceEngineVersion,
    'S3BucketName': obj.s3BucketName,
    'S3Prefix': obj.s3Prefix,
    'S3IngestionRoleArn': obj.s3IngestionRoleArn,
    'EnablePerformanceInsights': obj.enablePerformanceInsights,
    'PerformanceInsightsKMSKeyId': obj.performanceInsightsKmsKeyId,
    'PerformanceInsightsRetentionPeriod': obj.performanceInsightsRetentionPeriod,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_RdsProcessorFeature(y)),
    'UseDefaultProcessorFeatures': obj.useDefaultProcessorFeatures,
    'DeletionProtection': obj.deletionProtection,
    'MaxAllocatedStorage': obj.maxAllocatedStorage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbInstanceFromS3Result
 */
export interface RdsRestoreDbInstanceFromS3Result {
  /**
   * @schema RdsRestoreDbInstanceFromS3Result#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsRestoreDbInstanceFromS3Result' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbInstanceFromS3Result(obj: RdsRestoreDbInstanceFromS3Result | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbInstanceToPointInTimeMessage
 */
export interface RdsRestoreDbInstanceToPointInTimeMessage {
  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#SourceDBInstanceIdentifier
   */
  readonly sourceDbInstanceIdentifier?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#RestoreTime
   */
  readonly restoreTime?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#SourceDbiResourceId
   */
  readonly sourceDbiResourceId?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#SourceDBInstanceAutomatedBackupsArn
   */
  readonly sourceDbInstanceAutomatedBackupsArn?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#EnableCustomerOwnedIp
   */
  readonly enableCustomerOwnedIp?: boolean;

}

/**
 * Converts an object of type 'RdsRestoreDbInstanceToPointInTimeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbInstanceToPointInTimeMessage(obj: RdsRestoreDbInstanceToPointInTimeMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBInstanceIdentifier': obj.sourceDbInstanceIdentifier,
    'TargetDBInstanceIdentifier': obj.targetDbInstanceIdentifier,
    'RestoreTime': obj.restoreTime,
    'UseLatestRestorableTime': obj.useLatestRestorableTime,
    'DBInstanceClass': obj.dbInstanceClass,
    'Port': obj.port,
    'AvailabilityZone': obj.availabilityZone,
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'MultiAZ': obj.multiAz,
    'PubliclyAccessible': obj.publiclyAccessible,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'LicenseModel': obj.licenseModel,
    'DBName': obj.dbName,
    'Engine': obj.engine,
    'Iops': obj.iops,
    'OptionGroupName': obj.optionGroupName,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'Tags': obj.tags?.map(y => toJson_RdsTag(y)),
    'StorageType': obj.storageType,
    'TdeCredentialArn': obj.tdeCredentialArn,
    'TdeCredentialPassword': obj.tdeCredentialPassword,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'Domain': obj.domain,
    'DomainIAMRoleName': obj.domainIamRoleName,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_RdsProcessorFeature(y)),
    'UseDefaultProcessorFeatures': obj.useDefaultProcessorFeatures,
    'DBParameterGroupName': obj.dbParameterGroupName,
    'DeletionProtection': obj.deletionProtection,
    'SourceDbiResourceId': obj.sourceDbiResourceId,
    'MaxAllocatedStorage': obj.maxAllocatedStorage,
    'SourceDBInstanceAutomatedBackupsArn': obj.sourceDbInstanceAutomatedBackupsArn,
    'EnableCustomerOwnedIp': obj.enableCustomerOwnedIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreDbInstanceToPointInTimeResult
 */
export interface RdsRestoreDbInstanceToPointInTimeResult {
  /**
   * @schema RdsRestoreDbInstanceToPointInTimeResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsRestoreDbInstanceToPointInTimeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreDbInstanceToPointInTimeResult(obj: RdsRestoreDbInstanceToPointInTimeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRevokeDbSecurityGroupIngressMessage
 */
export interface RdsRevokeDbSecurityGroupIngressMessage {
  /**
   * @schema RdsRevokeDbSecurityGroupIngressMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema RdsRevokeDbSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RdsRevokeDbSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RdsRevokeDbSecurityGroupIngressMessage#EC2SecurityGroupId
   */
  readonly ec2SecurityGroupId?: string;

  /**
   * @schema RdsRevokeDbSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * Converts an object of type 'RdsRevokeDbSecurityGroupIngressMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRevokeDbSecurityGroupIngressMessage(obj: RdsRevokeDbSecurityGroupIngressMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSecurityGroupName': obj.dbSecurityGroupName,
    'CIDRIP': obj.cidrip,
    'EC2SecurityGroupName': obj.ec2SecurityGroupName,
    'EC2SecurityGroupId': obj.ec2SecurityGroupId,
    'EC2SecurityGroupOwnerId': obj.ec2SecurityGroupOwnerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRevokeDbSecurityGroupIngressResult
 */
export interface RdsRevokeDbSecurityGroupIngressResult {
  /**
   * @schema RdsRevokeDbSecurityGroupIngressResult#DBSecurityGroup
   */
  readonly dbSecurityGroup?: RdsdbSecurityGroup;

}

/**
 * Converts an object of type 'RdsRevokeDbSecurityGroupIngressResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRevokeDbSecurityGroupIngressResult(obj: RdsRevokeDbSecurityGroupIngressResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSecurityGroup': toJson_RdsdbSecurityGroup(obj.dbSecurityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStartActivityStreamRequest
 */
export interface RdsStartActivityStreamRequest {
  /**
   * @schema RdsStartActivityStreamRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema RdsStartActivityStreamRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema RdsStartActivityStreamRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsStartActivityStreamRequest#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema RdsStartActivityStreamRequest#EngineNativeAuditFieldsIncluded
   */
  readonly engineNativeAuditFieldsIncluded?: boolean;

}

/**
 * Converts an object of type 'RdsStartActivityStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStartActivityStreamRequest(obj: RdsStartActivityStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Mode': obj.mode,
    'KmsKeyId': obj.kmsKeyId,
    'ApplyImmediately': obj.applyImmediately,
    'EngineNativeAuditFieldsIncluded': obj.engineNativeAuditFieldsIncluded,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStartActivityStreamResponse
 */
export interface RdsStartActivityStreamResponse {
  /**
   * @schema RdsStartActivityStreamResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsStartActivityStreamResponse#KinesisStreamName
   */
  readonly kinesisStreamName?: string;

  /**
   * @schema RdsStartActivityStreamResponse#Status
   */
  readonly status?: string;

  /**
   * @schema RdsStartActivityStreamResponse#Mode
   */
  readonly mode?: string;

  /**
   * @schema RdsStartActivityStreamResponse#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema RdsStartActivityStreamResponse#EngineNativeAuditFieldsIncluded
   */
  readonly engineNativeAuditFieldsIncluded?: boolean;

}

/**
 * Converts an object of type 'RdsStartActivityStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStartActivityStreamResponse(obj: RdsStartActivityStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KmsKeyId': obj.kmsKeyId,
    'KinesisStreamName': obj.kinesisStreamName,
    'Status': obj.status,
    'Mode': obj.mode,
    'ApplyImmediately': obj.applyImmediately,
    'EngineNativeAuditFieldsIncluded': obj.engineNativeAuditFieldsIncluded,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStartDbClusterMessage
 */
export interface RdsStartDbClusterMessage {
  /**
   * @schema RdsStartDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'RdsStartDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStartDbClusterMessage(obj: RdsStartDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStartDbClusterResult
 */
export interface RdsStartDbClusterResult {
  /**
   * @schema RdsStartDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * Converts an object of type 'RdsStartDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStartDbClusterResult(obj: RdsStartDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_RdsdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStartDbInstanceMessage
 */
export interface RdsStartDbInstanceMessage {
  /**
   * @schema RdsStartDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

}

/**
 * Converts an object of type 'RdsStartDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStartDbInstanceMessage(obj: RdsStartDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStartDbInstanceResult
 */
export interface RdsStartDbInstanceResult {
  /**
   * @schema RdsStartDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsStartDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStartDbInstanceResult(obj: RdsStartDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStartDbInstanceAutomatedBackupsReplicationMessage
 */
export interface RdsStartDbInstanceAutomatedBackupsReplicationMessage {
  /**
   * @schema RdsStartDbInstanceAutomatedBackupsReplicationMessage#SourceDBInstanceArn
   */
  readonly sourceDbInstanceArn?: string;

  /**
   * @schema RdsStartDbInstanceAutomatedBackupsReplicationMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsStartDbInstanceAutomatedBackupsReplicationMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsStartDbInstanceAutomatedBackupsReplicationMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

}

/**
 * Converts an object of type 'RdsStartDbInstanceAutomatedBackupsReplicationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStartDbInstanceAutomatedBackupsReplicationMessage(obj: RdsStartDbInstanceAutomatedBackupsReplicationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBInstanceArn': obj.sourceDbInstanceArn,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'KmsKeyId': obj.kmsKeyId,
    'PreSignedUrl': obj.preSignedUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStartDbInstanceAutomatedBackupsReplicationResult
 */
export interface RdsStartDbInstanceAutomatedBackupsReplicationResult {
  /**
   * @schema RdsStartDbInstanceAutomatedBackupsReplicationResult#DBInstanceAutomatedBackup
   */
  readonly dbInstanceAutomatedBackup?: RdsdbInstanceAutomatedBackup;

}

/**
 * Converts an object of type 'RdsStartDbInstanceAutomatedBackupsReplicationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStartDbInstanceAutomatedBackupsReplicationResult(obj: RdsStartDbInstanceAutomatedBackupsReplicationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceAutomatedBackup': toJson_RdsdbInstanceAutomatedBackup(obj.dbInstanceAutomatedBackup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStartExportTaskMessage
 */
export interface RdsStartExportTaskMessage {
  /**
   * @schema RdsStartExportTaskMessage#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier?: string;

  /**
   * @schema RdsStartExportTaskMessage#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema RdsStartExportTaskMessage#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema RdsStartExportTaskMessage#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema RdsStartExportTaskMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsStartExportTaskMessage#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema RdsStartExportTaskMessage#ExportOnly
   */
  readonly exportOnly?: string[];

}

/**
 * Converts an object of type 'RdsStartExportTaskMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStartExportTaskMessage(obj: RdsStartExportTaskMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportTaskIdentifier': obj.exportTaskIdentifier,
    'SourceArn': obj.sourceArn,
    'S3BucketName': obj.s3BucketName,
    'IamRoleArn': obj.iamRoleArn,
    'KmsKeyId': obj.kmsKeyId,
    'S3Prefix': obj.s3Prefix,
    'ExportOnly': obj.exportOnly?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStopActivityStreamRequest
 */
export interface RdsStopActivityStreamRequest {
  /**
   * @schema RdsStopActivityStreamRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema RdsStopActivityStreamRequest#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * Converts an object of type 'RdsStopActivityStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStopActivityStreamRequest(obj: RdsStopActivityStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'ApplyImmediately': obj.applyImmediately,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStopActivityStreamResponse
 */
export interface RdsStopActivityStreamResponse {
  /**
   * @schema RdsStopActivityStreamResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsStopActivityStreamResponse#KinesisStreamName
   */
  readonly kinesisStreamName?: string;

  /**
   * @schema RdsStopActivityStreamResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RdsStopActivityStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStopActivityStreamResponse(obj: RdsStopActivityStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KmsKeyId': obj.kmsKeyId,
    'KinesisStreamName': obj.kinesisStreamName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStopDbClusterMessage
 */
export interface RdsStopDbClusterMessage {
  /**
   * @schema RdsStopDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'RdsStopDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStopDbClusterMessage(obj: RdsStopDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStopDbClusterResult
 */
export interface RdsStopDbClusterResult {
  /**
   * @schema RdsStopDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * Converts an object of type 'RdsStopDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStopDbClusterResult(obj: RdsStopDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_RdsdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStopDbInstanceMessage
 */
export interface RdsStopDbInstanceMessage {
  /**
   * @schema RdsStopDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsStopDbInstanceMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'RdsStopDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStopDbInstanceMessage(obj: RdsStopDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'DBSnapshotIdentifier': obj.dbSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStopDbInstanceResult
 */
export interface RdsStopDbInstanceResult {
  /**
   * @schema RdsStopDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * Converts an object of type 'RdsStopDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStopDbInstanceResult(obj: RdsStopDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_RdsdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStopDbInstanceAutomatedBackupsReplicationMessage
 */
export interface RdsStopDbInstanceAutomatedBackupsReplicationMessage {
  /**
   * @schema RdsStopDbInstanceAutomatedBackupsReplicationMessage#SourceDBInstanceArn
   */
  readonly sourceDbInstanceArn?: string;

}

/**
 * Converts an object of type 'RdsStopDbInstanceAutomatedBackupsReplicationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStopDbInstanceAutomatedBackupsReplicationMessage(obj: RdsStopDbInstanceAutomatedBackupsReplicationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBInstanceArn': obj.sourceDbInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsStopDbInstanceAutomatedBackupsReplicationResult
 */
export interface RdsStopDbInstanceAutomatedBackupsReplicationResult {
  /**
   * @schema RdsStopDbInstanceAutomatedBackupsReplicationResult#DBInstanceAutomatedBackup
   */
  readonly dbInstanceAutomatedBackup?: RdsdbInstanceAutomatedBackup;

}

/**
 * Converts an object of type 'RdsStopDbInstanceAutomatedBackupsReplicationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsStopDbInstanceAutomatedBackupsReplicationResult(obj: RdsStopDbInstanceAutomatedBackupsReplicationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceAutomatedBackup': toJson_RdsdbInstanceAutomatedBackup(obj.dbInstanceAutomatedBackup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsEventSubscription
 */
export interface RdsEventSubscription {
  /**
   * @schema RdsEventSubscription#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema RdsEventSubscription#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema RdsEventSubscription#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RdsEventSubscription#Status
   */
  readonly status?: string;

  /**
   * @schema RdsEventSubscription#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

  /**
   * @schema RdsEventSubscription#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsEventSubscription#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema RdsEventSubscription#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema RdsEventSubscription#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RdsEventSubscription#EventSubscriptionArn
   */
  readonly eventSubscriptionArn?: string;

}

/**
 * Converts an object of type 'RdsEventSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsEventSubscription(obj: RdsEventSubscription | undefined): Record<string, any> | undefined {
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
 * @schema RdsTag
 */
export interface RdsTag {
  /**
   * @schema RdsTag#Key
   */
  readonly key?: string;

  /**
   * @schema RdsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'RdsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsTag(obj: RdsTag | undefined): Record<string, any> | undefined {
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
 * @schema RdsResourcePendingMaintenanceActions
 */
export interface RdsResourcePendingMaintenanceActions {
  /**
   * @schema RdsResourcePendingMaintenanceActions#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema RdsResourcePendingMaintenanceActions#PendingMaintenanceActionDetails
   */
  readonly pendingMaintenanceActionDetails?: RdsPendingMaintenanceAction[];

}

/**
 * Converts an object of type 'RdsResourcePendingMaintenanceActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsResourcePendingMaintenanceActions(obj: RdsResourcePendingMaintenanceActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'PendingMaintenanceActionDetails': obj.pendingMaintenanceActionDetails?.map(y => toJson_RdsPendingMaintenanceAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbSecurityGroup
 */
export interface RdsdbSecurityGroup {
  /**
   * @schema RdsdbSecurityGroup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema RdsdbSecurityGroup#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema RdsdbSecurityGroup#DBSecurityGroupDescription
   */
  readonly dbSecurityGroupDescription?: string;

  /**
   * @schema RdsdbSecurityGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbSecurityGroup#EC2SecurityGroups
   */
  readonly ec2SecurityGroups?: Rdsec2SecurityGroup[];

  /**
   * @schema RdsdbSecurityGroup#IPRanges
   */
  readonly ipRanges?: RdsipRange[];

  /**
   * @schema RdsdbSecurityGroup#DBSecurityGroupArn
   */
  readonly dbSecurityGroupArn?: string;

}

/**
 * Converts an object of type 'RdsdbSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbSecurityGroup(obj: RdsdbSecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OwnerId': obj.ownerId,
    'DBSecurityGroupName': obj.dbSecurityGroupName,
    'DBSecurityGroupDescription': obj.dbSecurityGroupDescription,
    'VpcId': obj.vpcId,
    'EC2SecurityGroups': obj.ec2SecurityGroups?.map(y => toJson_Rdsec2SecurityGroup(y)),
    'IPRanges': obj.ipRanges?.map(y => toJson_RdsipRange(y)),
    'DBSecurityGroupArn': obj.dbSecurityGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterParameterGroup
 */
export interface RdsdbClusterParameterGroup {
  /**
   * @schema RdsdbClusterParameterGroup#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsdbClusterParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsdbClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RdsdbClusterParameterGroup#DBClusterParameterGroupArn
   */
  readonly dbClusterParameterGroupArn?: string;

}

/**
 * Converts an object of type 'RdsdbClusterParameterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterParameterGroup(obj: RdsdbClusterParameterGroup | undefined): Record<string, any> | undefined {
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
 * @schema RdsdbClusterSnapshot
 */
export interface RdsdbClusterSnapshot {
  /**
   * @schema RdsdbClusterSnapshot#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RdsdbClusterSnapshot#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema RdsdbClusterSnapshot#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbClusterSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema RdsdbClusterSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbClusterSnapshot#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema RdsdbClusterSnapshot#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsdbClusterSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbClusterSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema RdsdbClusterSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbClusterSnapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema RdsdbClusterSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsdbClusterSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbClusterSnapshot#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsdbClusterSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RdsdbClusterSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema RdsdbClusterSnapshot#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsdbClusterSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsdbClusterSnapshot#DBClusterSnapshotArn
   */
  readonly dbClusterSnapshotArn?: string;

  /**
   * @schema RdsdbClusterSnapshot#SourceDBClusterSnapshotArn
   */
  readonly sourceDbClusterSnapshotArn?: string;

  /**
   * @schema RdsdbClusterSnapshot#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema RdsdbClusterSnapshot#TagList
   */
  readonly tagList?: RdsTag[];

}

/**
 * Converts an object of type 'RdsdbClusterSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterSnapshot(obj: RdsdbClusterSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'SnapshotCreateTime': obj.snapshotCreateTime,
    'Engine': obj.engine,
    'EngineMode': obj.engineMode,
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
    'TagList': obj.tagList?.map(y => toJson_RdsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbParameterGroup
 */
export interface RdsdbParameterGroup {
  /**
   * @schema RdsdbParameterGroup#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsdbParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsdbParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RdsdbParameterGroup#DBParameterGroupArn
   */
  readonly dbParameterGroupArn?: string;

}

/**
 * Converts an object of type 'RdsdbParameterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbParameterGroup(obj: RdsdbParameterGroup | undefined): Record<string, any> | undefined {
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
 * @schema RdsdbSnapshot
 */
export interface RdsdbSnapshot {
  /**
   * @schema RdsdbSnapshot#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema RdsdbSnapshot#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsdbSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema RdsdbSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbSnapshot#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsdbSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema RdsdbSnapshot#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsdbSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbSnapshot#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema RdsdbSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsdbSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbSnapshot#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsdbSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RdsdbSnapshot#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsdbSnapshot#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsdbSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema RdsdbSnapshot#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema RdsdbSnapshot#SourceDBSnapshotIdentifier
   */
  readonly sourceDbSnapshotIdentifier?: string;

  /**
   * @schema RdsdbSnapshot#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsdbSnapshot#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsdbSnapshot#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RdsdbSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsdbSnapshot#DBSnapshotArn
   */
  readonly dbSnapshotArn?: string;

  /**
   * @schema RdsdbSnapshot#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema RdsdbSnapshot#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema RdsdbSnapshot#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsdbSnapshot#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema RdsdbSnapshot#TagList
   */
  readonly tagList?: RdsTag[];

  /**
   * @schema RdsdbSnapshot#OriginalSnapshotCreateTime
   */
  readonly originalSnapshotCreateTime?: string;

}

/**
 * Converts an object of type 'RdsdbSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbSnapshot(obj: RdsdbSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshotIdentifier': obj.dbSnapshotIdentifier,
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'SnapshotCreateTime': obj.snapshotCreateTime,
    'Engine': obj.engine,
    'AllocatedStorage': obj.allocatedStorage,
    'Status': obj.status,
    'Port': obj.port,
    'AvailabilityZone': obj.availabilityZone,
    'VpcId': obj.vpcId,
    'InstanceCreateTime': obj.instanceCreateTime,
    'MasterUsername': obj.masterUsername,
    'EngineVersion': obj.engineVersion,
    'LicenseModel': obj.licenseModel,
    'SnapshotType': obj.snapshotType,
    'Iops': obj.iops,
    'OptionGroupName': obj.optionGroupName,
    'PercentProgress': obj.percentProgress,
    'SourceRegion': obj.sourceRegion,
    'SourceDBSnapshotIdentifier': obj.sourceDbSnapshotIdentifier,
    'StorageType': obj.storageType,
    'TdeCredentialArn': obj.tdeCredentialArn,
    'Encrypted': obj.encrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DBSnapshotArn': obj.dbSnapshotArn,
    'Timezone': obj.timezone,
    'IAMDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_RdsProcessorFeature(y)),
    'DbiResourceId': obj.dbiResourceId,
    'TagList': obj.tagList?.map(y => toJson_RdsTag(y)),
    'OriginalSnapshotCreateTime': obj.originalSnapshotCreateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsOptionGroup
 */
export interface RdsOptionGroup {
  /**
   * @schema RdsOptionGroup#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsOptionGroup#OptionGroupDescription
   */
  readonly optionGroupDescription?: string;

  /**
   * @schema RdsOptionGroup#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema RdsOptionGroup#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

  /**
   * @schema RdsOptionGroup#Options
   */
  readonly options?: RdsOption[];

  /**
   * @schema RdsOptionGroup#AllowsVpcAndNonVpcInstanceMemberships
   */
  readonly allowsVpcAndNonVpcInstanceMemberships?: boolean;

  /**
   * @schema RdsOptionGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsOptionGroup#OptionGroupArn
   */
  readonly optionGroupArn?: string;

}

/**
 * Converts an object of type 'RdsOptionGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOptionGroup(obj: RdsOptionGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroupName': obj.optionGroupName,
    'OptionGroupDescription': obj.optionGroupDescription,
    'EngineName': obj.engineName,
    'MajorEngineVersion': obj.majorEngineVersion,
    'Options': obj.options?.map(y => toJson_RdsOption(y)),
    'AllowsVpcAndNonVpcInstanceMemberships': obj.allowsVpcAndNonVpcInstanceMemberships,
    'VpcId': obj.vpcId,
    'OptionGroupArn': obj.optionGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCustomAvailabilityZone
 */
export interface RdsCustomAvailabilityZone {
  /**
   * @schema RdsCustomAvailabilityZone#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

  /**
   * @schema RdsCustomAvailabilityZone#CustomAvailabilityZoneName
   */
  readonly customAvailabilityZoneName?: string;

  /**
   * @schema RdsCustomAvailabilityZone#CustomAvailabilityZoneStatus
   */
  readonly customAvailabilityZoneStatus?: string;

  /**
   * @schema RdsCustomAvailabilityZone#VpnDetails
   */
  readonly vpnDetails?: RdsVpnDetails;

}

/**
 * Converts an object of type 'RdsCustomAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCustomAvailabilityZone(obj: RdsCustomAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomAvailabilityZoneId': obj.customAvailabilityZoneId,
    'CustomAvailabilityZoneName': obj.customAvailabilityZoneName,
    'CustomAvailabilityZoneStatus': obj.customAvailabilityZoneStatus,
    'VpnDetails': toJson_RdsVpnDetails(obj.vpnDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsScalingConfiguration
 */
export interface RdsScalingConfiguration {
  /**
   * @schema RdsScalingConfiguration#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema RdsScalingConfiguration#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema RdsScalingConfiguration#AutoPause
   */
  readonly autoPause?: boolean;

  /**
   * @schema RdsScalingConfiguration#SecondsUntilAutoPause
   */
  readonly secondsUntilAutoPause?: number;

  /**
   * @schema RdsScalingConfiguration#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * Converts an object of type 'RdsScalingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsScalingConfiguration(obj: RdsScalingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinCapacity': obj.minCapacity,
    'MaxCapacity': obj.maxCapacity,
    'AutoPause': obj.autoPause,
    'SecondsUntilAutoPause': obj.secondsUntilAutoPause,
    'TimeoutAction': obj.timeoutAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbCluster
 */
export interface RdsdbCluster {
  /**
   * @schema RdsdbCluster#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsdbCluster#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RdsdbCluster#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsdbCluster#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsdbCluster#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsdbCluster#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbCluster#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema RdsdbCluster#DBSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema RdsdbCluster#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbCluster#AutomaticRestartTime
   */
  readonly automaticRestartTime?: string;

  /**
   * @schema RdsdbCluster#PercentProgress
   */
  readonly percentProgress?: string;

  /**
   * @schema RdsdbCluster#EarliestRestorableTime
   */
  readonly earliestRestorableTime?: string;

  /**
   * @schema RdsdbCluster#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsdbCluster#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema RdsdbCluster#CustomEndpoints
   */
  readonly customEndpoints?: string[];

  /**
   * @schema RdsdbCluster#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsdbCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbCluster#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema RdsdbCluster#Port
   */
  readonly port?: number;

  /**
   * @schema RdsdbCluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsdbCluster#DBClusterOptionGroupMemberships
   */
  readonly dbClusterOptionGroupMemberships?: RdsdbClusterOptionGroupStatus[];

  /**
   * @schema RdsdbCluster#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsdbCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsdbCluster#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema RdsdbCluster#ReadReplicaIdentifiers
   */
  readonly readReplicaIdentifiers?: string[];

  /**
   * @schema RdsdbCluster#DBClusterMembers
   */
  readonly dbClusterMembers?: RdsdbClusterMember[];

  /**
   * @schema RdsdbCluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: RdsVpcSecurityGroupMembership[];

  /**
   * @schema RdsdbCluster#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema RdsdbCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsdbCluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsdbCluster#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema RdsdbCluster#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema RdsdbCluster#AssociatedRoles
   */
  readonly associatedRoles?: RdsdbClusterRole[];

  /**
   * @schema RdsdbCluster#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema RdsdbCluster#CloneGroupId
   */
  readonly cloneGroupId?: string;

  /**
   * @schema RdsdbCluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema RdsdbCluster#EarliestBacktrackTime
   */
  readonly earliestBacktrackTime?: string;

  /**
   * @schema RdsdbCluster#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsdbCluster#BacktrackConsumedChangeRecords
   */
  readonly backtrackConsumedChangeRecords?: number;

  /**
   * @schema RdsdbCluster#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema RdsdbCluster#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema RdsdbCluster#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema RdsdbCluster#ScalingConfigurationInfo
   */
  readonly scalingConfigurationInfo?: RdsScalingConfigurationInfo;

  /**
   * @schema RdsdbCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsdbCluster#HttpEndpointEnabled
   */
  readonly httpEndpointEnabled?: boolean;

  /**
   * @schema RdsdbCluster#ActivityStreamMode
   */
  readonly activityStreamMode?: string;

  /**
   * @schema RdsdbCluster#ActivityStreamStatus
   */
  readonly activityStreamStatus?: string;

  /**
   * @schema RdsdbCluster#ActivityStreamKmsKeyId
   */
  readonly activityStreamKmsKeyId?: string;

  /**
   * @schema RdsdbCluster#ActivityStreamKinesisStreamName
   */
  readonly activityStreamKinesisStreamName?: string;

  /**
   * @schema RdsdbCluster#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsdbCluster#CrossAccountClone
   */
  readonly crossAccountClone?: boolean;

  /**
   * @schema RdsdbCluster#DomainMemberships
   */
  readonly domainMemberships?: RdsDomainMembership[];

  /**
   * @schema RdsdbCluster#TagList
   */
  readonly tagList?: RdsTag[];

  /**
   * @schema RdsdbCluster#GlobalWriteForwardingStatus
   */
  readonly globalWriteForwardingStatus?: string;

  /**
   * @schema RdsdbCluster#GlobalWriteForwardingRequested
   */
  readonly globalWriteForwardingRequested?: boolean;

  /**
   * @schema RdsdbCluster#PendingModifiedValues
   */
  readonly pendingModifiedValues?: RdsClusterPendingModifiedValues;

}

/**
 * Converts an object of type 'RdsdbCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbCluster(obj: RdsdbCluster | undefined): Record<string, any> | undefined {
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
    'AutomaticRestartTime': obj.automaticRestartTime,
    'PercentProgress': obj.percentProgress,
    'EarliestRestorableTime': obj.earliestRestorableTime,
    'Endpoint': obj.endpoint,
    'ReaderEndpoint': obj.readerEndpoint,
    'CustomEndpoints': obj.customEndpoints?.map(y => y),
    'MultiAZ': obj.multiAz,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'LatestRestorableTime': obj.latestRestorableTime,
    'Port': obj.port,
    'MasterUsername': obj.masterUsername,
    'DBClusterOptionGroupMemberships': obj.dbClusterOptionGroupMemberships?.map(y => toJson_RdsdbClusterOptionGroupStatus(y)),
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'ReplicationSourceIdentifier': obj.replicationSourceIdentifier,
    'ReadReplicaIdentifiers': obj.readReplicaIdentifiers?.map(y => y),
    'DBClusterMembers': obj.dbClusterMembers?.map(y => toJson_RdsdbClusterMember(y)),
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_RdsVpcSecurityGroupMembership(y)),
    'HostedZoneId': obj.hostedZoneId,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DbClusterResourceId': obj.dbClusterResourceId,
    'DBClusterArn': obj.dbClusterArn,
    'AssociatedRoles': obj.associatedRoles?.map(y => toJson_RdsdbClusterRole(y)),
    'IAMDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
    'CloneGroupId': obj.cloneGroupId,
    'ClusterCreateTime': obj.clusterCreateTime,
    'EarliestBacktrackTime': obj.earliestBacktrackTime,
    'BacktrackWindow': obj.backtrackWindow,
    'BacktrackConsumedChangeRecords': obj.backtrackConsumedChangeRecords,
    'EnabledCloudwatchLogsExports': obj.enabledCloudwatchLogsExports?.map(y => y),
    'Capacity': obj.capacity,
    'EngineMode': obj.engineMode,
    'ScalingConfigurationInfo': toJson_RdsScalingConfigurationInfo(obj.scalingConfigurationInfo),
    'DeletionProtection': obj.deletionProtection,
    'HttpEndpointEnabled': obj.httpEndpointEnabled,
    'ActivityStreamMode': obj.activityStreamMode,
    'ActivityStreamStatus': obj.activityStreamStatus,
    'ActivityStreamKmsKeyId': obj.activityStreamKmsKeyId,
    'ActivityStreamKinesisStreamName': obj.activityStreamKinesisStreamName,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'CrossAccountClone': obj.crossAccountClone,
    'DomainMemberships': obj.domainMemberships?.map(y => toJson_RdsDomainMembership(y)),
    'TagList': obj.tagList?.map(y => toJson_RdsTag(y)),
    'GlobalWriteForwardingStatus': obj.globalWriteForwardingStatus,
    'GlobalWriteForwardingRequested': obj.globalWriteForwardingRequested,
    'PendingModifiedValues': toJson_RdsClusterPendingModifiedValues(obj.pendingModifiedValues),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsProcessorFeature
 */
export interface RdsProcessorFeature {
  /**
   * @schema RdsProcessorFeature#Name
   */
  readonly name?: string;

  /**
   * @schema RdsProcessorFeature#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'RdsProcessorFeature' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsProcessorFeature(obj: RdsProcessorFeature | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbInstance
 */
export interface RdsdbInstance {
  /**
   * @schema RdsdbInstance#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsdbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsdbInstance#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbInstance#DBInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema RdsdbInstance#AutomaticRestartTime
   */
  readonly automaticRestartTime?: string;

  /**
   * @schema RdsdbInstance#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsdbInstance#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RdsdbInstance#Endpoint
   */
  readonly endpoint?: RdsEndpoint;

  /**
   * @schema RdsdbInstance#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsdbInstance#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema RdsdbInstance#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsdbInstance#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsdbInstance#DBSecurityGroups
   */
  readonly dbSecurityGroups?: RdsdbSecurityGroupMembership[];

  /**
   * @schema RdsdbInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: RdsVpcSecurityGroupMembership[];

  /**
   * @schema RdsdbInstance#DBParameterGroups
   */
  readonly dbParameterGroups?: RdsdbParameterGroupStatus[];

  /**
   * @schema RdsdbInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsdbInstance#DBSubnetGroup
   */
  readonly dbSubnetGroup?: RdsdbSubnetGroup;

  /**
   * @schema RdsdbInstance#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsdbInstance#PendingModifiedValues
   */
  readonly pendingModifiedValues?: RdsPendingModifiedValues;

  /**
   * @schema RdsdbInstance#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema RdsdbInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsdbInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsdbInstance#ReadReplicaSourceDBInstanceIdentifier
   */
  readonly readReplicaSourceDbInstanceIdentifier?: string;

  /**
   * @schema RdsdbInstance#ReadReplicaDBInstanceIdentifiers
   */
  readonly readReplicaDbInstanceIdentifiers?: string[];

  /**
   * @schema RdsdbInstance#ReadReplicaDBClusterIdentifiers
   */
  readonly readReplicaDbClusterIdentifiers?: string[];

  /**
   * @schema RdsdbInstance#ReplicaMode
   */
  readonly replicaMode?: string;

  /**
   * @schema RdsdbInstance#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsdbInstance#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsdbInstance#OptionGroupMemberships
   */
  readonly optionGroupMemberships?: RdsOptionGroupMembership[];

  /**
   * @schema RdsdbInstance#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsdbInstance#NcharCharacterSetName
   */
  readonly ncharCharacterSetName?: string;

  /**
   * @schema RdsdbInstance#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema RdsdbInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsdbInstance#StatusInfos
   */
  readonly statusInfos?: RdsdbInstanceStatusInfo[];

  /**
   * @schema RdsdbInstance#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsdbInstance#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsdbInstance#DbInstancePort
   */
  readonly dbInstancePort?: number;

  /**
   * @schema RdsdbInstance#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbInstance#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsdbInstance#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsdbInstance#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema RdsdbInstance#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema RdsdbInstance#DomainMemberships
   */
  readonly domainMemberships?: RdsDomainMembership[];

  /**
   * @schema RdsdbInstance#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsdbInstance#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RdsdbInstance#EnhancedMonitoringResourceArn
   */
  readonly enhancedMonitoringResourceArn?: string;

  /**
   * @schema RdsdbInstance#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RdsdbInstance#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema RdsdbInstance#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema RdsdbInstance#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema RdsdbInstance#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema RdsdbInstance#PerformanceInsightsEnabled
   */
  readonly performanceInsightsEnabled?: boolean;

  /**
   * @schema RdsdbInstance#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RdsdbInstance#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RdsdbInstance#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema RdsdbInstance#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsdbInstance#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsdbInstance#AssociatedRoles
   */
  readonly associatedRoles?: RdsdbInstanceRole[];

  /**
   * @schema RdsdbInstance#ListenerEndpoint
   */
  readonly listenerEndpoint?: RdsEndpoint;

  /**
   * @schema RdsdbInstance#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema RdsdbInstance#TagList
   */
  readonly tagList?: RdsTag[];

  /**
   * @schema RdsdbInstance#DBInstanceAutomatedBackupsReplications
   */
  readonly dbInstanceAutomatedBackupsReplications?: RdsdbInstanceAutomatedBackupsReplication[];

  /**
   * @schema RdsdbInstance#CustomerOwnedIpEnabled
   */
  readonly customerOwnedIpEnabled?: boolean;

  /**
   * @schema RdsdbInstance#AwsBackupRecoveryPointArn
   */
  readonly awsBackupRecoveryPointArn?: string;

  /**
   * @schema RdsdbInstance#ActivityStreamStatus
   */
  readonly activityStreamStatus?: string;

  /**
   * @schema RdsdbInstance#ActivityStreamKmsKeyId
   */
  readonly activityStreamKmsKeyId?: string;

  /**
   * @schema RdsdbInstance#ActivityStreamKinesisStreamName
   */
  readonly activityStreamKinesisStreamName?: string;

  /**
   * @schema RdsdbInstance#ActivityStreamMode
   */
  readonly activityStreamMode?: string;

  /**
   * @schema RdsdbInstance#ActivityStreamEngineNativeAuditFieldsIncluded
   */
  readonly activityStreamEngineNativeAuditFieldsIncluded?: boolean;

}

/**
 * Converts an object of type 'RdsdbInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbInstance(obj: RdsdbInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'DBInstanceClass': obj.dbInstanceClass,
    'Engine': obj.engine,
    'DBInstanceStatus': obj.dbInstanceStatus,
    'AutomaticRestartTime': obj.automaticRestartTime,
    'MasterUsername': obj.masterUsername,
    'DBName': obj.dbName,
    'Endpoint': toJson_RdsEndpoint(obj.endpoint),
    'AllocatedStorage': obj.allocatedStorage,
    'InstanceCreateTime': obj.instanceCreateTime,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'DBSecurityGroups': obj.dbSecurityGroups?.map(y => toJson_RdsdbSecurityGroupMembership(y)),
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_RdsVpcSecurityGroupMembership(y)),
    'DBParameterGroups': obj.dbParameterGroups?.map(y => toJson_RdsdbParameterGroupStatus(y)),
    'AvailabilityZone': obj.availabilityZone,
    'DBSubnetGroup': toJson_RdsdbSubnetGroup(obj.dbSubnetGroup),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PendingModifiedValues': toJson_RdsPendingModifiedValues(obj.pendingModifiedValues),
    'LatestRestorableTime': obj.latestRestorableTime,
    'MultiAZ': obj.multiAz,
    'EngineVersion': obj.engineVersion,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'ReadReplicaSourceDBInstanceIdentifier': obj.readReplicaSourceDbInstanceIdentifier,
    'ReadReplicaDBInstanceIdentifiers': obj.readReplicaDbInstanceIdentifiers?.map(y => y),
    'ReadReplicaDBClusterIdentifiers': obj.readReplicaDbClusterIdentifiers?.map(y => y),
    'ReplicaMode': obj.replicaMode,
    'LicenseModel': obj.licenseModel,
    'Iops': obj.iops,
    'OptionGroupMemberships': obj.optionGroupMemberships?.map(y => toJson_RdsOptionGroupMembership(y)),
    'CharacterSetName': obj.characterSetName,
    'NcharCharacterSetName': obj.ncharCharacterSetName,
    'SecondaryAvailabilityZone': obj.secondaryAvailabilityZone,
    'PubliclyAccessible': obj.publiclyAccessible,
    'StatusInfos': obj.statusInfos?.map(y => toJson_RdsdbInstanceStatusInfo(y)),
    'StorageType': obj.storageType,
    'TdeCredentialArn': obj.tdeCredentialArn,
    'DbInstancePort': obj.dbInstancePort,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DbiResourceId': obj.dbiResourceId,
    'CACertificateIdentifier': obj.caCertificateIdentifier,
    'DomainMemberships': obj.domainMemberships?.map(y => toJson_RdsDomainMembership(y)),
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
    'PerformanceInsightsRetentionPeriod': obj.performanceInsightsRetentionPeriod,
    'EnabledCloudwatchLogsExports': obj.enabledCloudwatchLogsExports?.map(y => y),
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_RdsProcessorFeature(y)),
    'DeletionProtection': obj.deletionProtection,
    'AssociatedRoles': obj.associatedRoles?.map(y => toJson_RdsdbInstanceRole(y)),
    'ListenerEndpoint': toJson_RdsEndpoint(obj.listenerEndpoint),
    'MaxAllocatedStorage': obj.maxAllocatedStorage,
    'TagList': obj.tagList?.map(y => toJson_RdsTag(y)),
    'DBInstanceAutomatedBackupsReplications': obj.dbInstanceAutomatedBackupsReplications?.map(y => toJson_RdsdbInstanceAutomatedBackupsReplication(y)),
    'CustomerOwnedIpEnabled': obj.customerOwnedIpEnabled,
    'AwsBackupRecoveryPointArn': obj.awsBackupRecoveryPointArn,
    'ActivityStreamStatus': obj.activityStreamStatus,
    'ActivityStreamKmsKeyId': obj.activityStreamKmsKeyId,
    'ActivityStreamKinesisStreamName': obj.activityStreamKinesisStreamName,
    'ActivityStreamMode': obj.activityStreamMode,
    'ActivityStreamEngineNativeAuditFieldsIncluded': obj.activityStreamEngineNativeAuditFieldsIncluded,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsUserAuthConfig
 */
export interface RdsUserAuthConfig {
  /**
   * @schema RdsUserAuthConfig#Description
   */
  readonly description?: string;

  /**
   * @schema RdsUserAuthConfig#UserName
   */
  readonly userName?: string;

  /**
   * @schema RdsUserAuthConfig#AuthScheme
   */
  readonly authScheme?: string;

  /**
   * @schema RdsUserAuthConfig#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RdsUserAuthConfig#IAMAuth
   */
  readonly iamAuth?: string;

}

/**
 * Converts an object of type 'RdsUserAuthConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsUserAuthConfig(obj: RdsUserAuthConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'UserName': obj.userName,
    'AuthScheme': obj.authScheme,
    'SecretArn': obj.secretArn,
    'IAMAuth': obj.iamAuth,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbProxy
 */
export interface RdsdbProxy {
  /**
   * @schema RdsdbProxy#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsdbProxy#DBProxyArn
   */
  readonly dbProxyArn?: string;

  /**
   * @schema RdsdbProxy#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbProxy#EngineFamily
   */
  readonly engineFamily?: string;

  /**
   * @schema RdsdbProxy#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbProxy#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsdbProxy#VpcSubnetIds
   */
  readonly vpcSubnetIds?: string[];

  /**
   * @schema RdsdbProxy#Auth
   */
  readonly auth?: RdsUserAuthConfigInfo[];

  /**
   * @schema RdsdbProxy#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsdbProxy#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsdbProxy#RequireTLS
   */
  readonly requireTls?: boolean;

  /**
   * @schema RdsdbProxy#IdleClientTimeout
   */
  readonly idleClientTimeout?: number;

  /**
   * @schema RdsdbProxy#DebugLogging
   */
  readonly debugLogging?: boolean;

  /**
   * @schema RdsdbProxy#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema RdsdbProxy#UpdatedDate
   */
  readonly updatedDate?: string;

}

/**
 * Converts an object of type 'RdsdbProxy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbProxy(obj: RdsdbProxy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'DBProxyArn': obj.dbProxyArn,
    'Status': obj.status,
    'EngineFamily': obj.engineFamily,
    'VpcId': obj.vpcId,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'VpcSubnetIds': obj.vpcSubnetIds?.map(y => y),
    'Auth': obj.auth?.map(y => toJson_RdsUserAuthConfigInfo(y)),
    'RoleArn': obj.roleArn,
    'Endpoint': obj.endpoint,
    'RequireTLS': obj.requireTls,
    'IdleClientTimeout': obj.idleClientTimeout,
    'DebugLogging': obj.debugLogging,
    'CreatedDate': obj.createdDate,
    'UpdatedDate': obj.updatedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbProxyEndpoint
 */
export interface RdsdbProxyEndpoint {
  /**
   * @schema RdsdbProxyEndpoint#DBProxyEndpointName
   */
  readonly dbProxyEndpointName?: string;

  /**
   * @schema RdsdbProxyEndpoint#DBProxyEndpointArn
   */
  readonly dbProxyEndpointArn?: string;

  /**
   * @schema RdsdbProxyEndpoint#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsdbProxyEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbProxyEndpoint#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbProxyEndpoint#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsdbProxyEndpoint#VpcSubnetIds
   */
  readonly vpcSubnetIds?: string[];

  /**
   * @schema RdsdbProxyEndpoint#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsdbProxyEndpoint#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema RdsdbProxyEndpoint#TargetRole
   */
  readonly targetRole?: string;

  /**
   * @schema RdsdbProxyEndpoint#IsDefault
   */
  readonly isDefault?: boolean;

}

/**
 * Converts an object of type 'RdsdbProxyEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbProxyEndpoint(obj: RdsdbProxyEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyEndpointName': obj.dbProxyEndpointName,
    'DBProxyEndpointArn': obj.dbProxyEndpointArn,
    'DBProxyName': obj.dbProxyName,
    'Status': obj.status,
    'VpcId': obj.vpcId,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'VpcSubnetIds': obj.vpcSubnetIds?.map(y => y),
    'Endpoint': obj.endpoint,
    'CreatedDate': obj.createdDate,
    'TargetRole': obj.targetRole,
    'IsDefault': obj.isDefault,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbSubnetGroup
 */
export interface RdsdbSubnetGroup {
  /**
   * @schema RdsdbSubnetGroup#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsdbSubnetGroup#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema RdsdbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema RdsdbSubnetGroup#Subnets
   */
  readonly subnets?: RdsSubnet[];

  /**
   * @schema RdsdbSubnetGroup#DBSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * Converts an object of type 'RdsdbSubnetGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbSubnetGroup(obj: RdsdbSubnetGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'DBSubnetGroupDescription': obj.dbSubnetGroupDescription,
    'VpcId': obj.vpcId,
    'SubnetGroupStatus': obj.subnetGroupStatus,
    'Subnets': obj.subnets?.map(y => toJson_RdsSubnet(y)),
    'DBSubnetGroupArn': obj.dbSubnetGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsGlobalCluster
 */
export interface RdsGlobalCluster {
  /**
   * @schema RdsGlobalCluster#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsGlobalCluster#GlobalClusterResourceId
   */
  readonly globalClusterResourceId?: string;

  /**
   * @schema RdsGlobalCluster#GlobalClusterArn
   */
  readonly globalClusterArn?: string;

  /**
   * @schema RdsGlobalCluster#Status
   */
  readonly status?: string;

  /**
   * @schema RdsGlobalCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsGlobalCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsGlobalCluster#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsGlobalCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsGlobalCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsGlobalCluster#GlobalClusterMembers
   */
  readonly globalClusterMembers?: RdsGlobalClusterMember[];

  /**
   * @schema RdsGlobalCluster#FailoverState
   */
  readonly failoverState?: RdsFailoverState;

}

/**
 * Converts an object of type 'RdsGlobalCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsGlobalCluster(obj: RdsGlobalCluster | undefined): Record<string, any> | undefined {
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
    'GlobalClusterMembers': obj.globalClusterMembers?.map(y => toJson_RdsGlobalClusterMember(y)),
    'FailoverState': toJson_RdsFailoverState(obj.failoverState),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbInstanceAutomatedBackup
 */
export interface RdsdbInstanceAutomatedBackup {
  /**
   * @schema RdsdbInstanceAutomatedBackup#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Region
   */
  readonly region?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#RestoreWindow
   */
  readonly restoreWindow?: RdsRestoreWindow;

  /**
   * @schema RdsdbInstanceAutomatedBackup#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Port
   */
  readonly port?: number;

  /**
   * @schema RdsdbInstanceAutomatedBackup#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsdbInstanceAutomatedBackup#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RdsdbInstanceAutomatedBackup#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema RdsdbInstanceAutomatedBackup#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsdbInstanceAutomatedBackup#DBInstanceAutomatedBackupsArn
   */
  readonly dbInstanceAutomatedBackupsArn?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#DBInstanceAutomatedBackupsReplications
   */
  readonly dbInstanceAutomatedBackupsReplications?: RdsdbInstanceAutomatedBackupsReplication[];

}

/**
 * Converts an object of type 'RdsdbInstanceAutomatedBackup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbInstanceAutomatedBackup(obj: RdsdbInstanceAutomatedBackup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceArn': obj.dbInstanceArn,
    'DbiResourceId': obj.dbiResourceId,
    'Region': obj.region,
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'RestoreWindow': toJson_RdsRestoreWindow(obj.restoreWindow),
    'AllocatedStorage': obj.allocatedStorage,
    'Status': obj.status,
    'Port': obj.port,
    'AvailabilityZone': obj.availabilityZone,
    'VpcId': obj.vpcId,
    'InstanceCreateTime': obj.instanceCreateTime,
    'MasterUsername': obj.masterUsername,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'LicenseModel': obj.licenseModel,
    'Iops': obj.iops,
    'OptionGroupName': obj.optionGroupName,
    'TdeCredentialArn': obj.tdeCredentialArn,
    'Encrypted': obj.encrypted,
    'StorageType': obj.storageType,
    'KmsKeyId': obj.kmsKeyId,
    'Timezone': obj.timezone,
    'IAMDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'DBInstanceAutomatedBackupsArn': obj.dbInstanceAutomatedBackupsArn,
    'DBInstanceAutomatedBackupsReplications': obj.dbInstanceAutomatedBackupsReplications?.map(y => toJson_RdsdbInstanceAutomatedBackupsReplication(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsInstallationMediaFailureCause
 */
export interface RdsInstallationMediaFailureCause {
  /**
   * @schema RdsInstallationMediaFailureCause#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'RdsInstallationMediaFailureCause' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsInstallationMediaFailureCause(obj: RdsInstallationMediaFailureCause | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsAccountQuota
 */
export interface RdsAccountQuota {
  /**
   * @schema RdsAccountQuota#AccountQuotaName
   */
  readonly accountQuotaName?: string;

  /**
   * @schema RdsAccountQuota#Used
   */
  readonly used?: number;

  /**
   * @schema RdsAccountQuota#Max
   */
  readonly max?: number;

}

/**
 * Converts an object of type 'RdsAccountQuota' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAccountQuota(obj: RdsAccountQuota | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountQuotaName': obj.accountQuotaName,
    'Used': obj.used,
    'Max': obj.max,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsFilter
 */
export interface RdsFilter {
  /**
   * @schema RdsFilter#Name
   */
  readonly name?: string;

  /**
   * @schema RdsFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'RdsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsFilter(obj: RdsFilter | undefined): Record<string, any> | undefined {
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
 * @schema RdsCertificate
 */
export interface RdsCertificate {
  /**
   * @schema RdsCertificate#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema RdsCertificate#CertificateType
   */
  readonly certificateType?: string;

  /**
   * @schema RdsCertificate#Thumbprint
   */
  readonly thumbprint?: string;

  /**
   * @schema RdsCertificate#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema RdsCertificate#ValidTill
   */
  readonly validTill?: string;

  /**
   * @schema RdsCertificate#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema RdsCertificate#CustomerOverride
   */
  readonly customerOverride?: boolean;

  /**
   * @schema RdsCertificate#CustomerOverrideValidTill
   */
  readonly customerOverrideValidTill?: string;

}

/**
 * Converts an object of type 'RdsCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCertificate(obj: RdsCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateIdentifier': obj.certificateIdentifier,
    'CertificateType': obj.certificateType,
    'Thumbprint': obj.thumbprint,
    'ValidFrom': obj.validFrom,
    'ValidTill': obj.validTill,
    'CertificateArn': obj.certificateArn,
    'CustomerOverride': obj.customerOverride,
    'CustomerOverrideValidTill': obj.customerOverrideValidTill,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsParameter
 */
export interface RdsParameter {
  /**
   * @schema RdsParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema RdsParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema RdsParameter#Description
   */
  readonly description?: string;

  /**
   * @schema RdsParameter#Source
   */
  readonly source?: string;

  /**
   * @schema RdsParameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema RdsParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema RdsParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema RdsParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema RdsParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema RdsParameter#ApplyMethod
   */
  readonly applyMethod?: string;

  /**
   * @schema RdsParameter#SupportedEngineModes
   */
  readonly supportedEngineModes?: string[];

}

/**
 * Converts an object of type 'RdsParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsParameter(obj: RdsParameter | undefined): Record<string, any> | undefined {
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
    'SupportedEngineModes': obj.supportedEngineModes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterSnapshotAttributesResult
 */
export interface RdsdbClusterSnapshotAttributesResult {
  /**
   * @schema RdsdbClusterSnapshotAttributesResult#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema RdsdbClusterSnapshotAttributesResult#DBClusterSnapshotAttributes
   */
  readonly dbClusterSnapshotAttributes?: RdsdbClusterSnapshotAttribute[];

}

/**
 * Converts an object of type 'RdsdbClusterSnapshotAttributesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterSnapshotAttributesResult(obj: RdsdbClusterSnapshotAttributesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'DBClusterSnapshotAttributes': obj.dbClusterSnapshotAttributes?.map(y => toJson_RdsdbClusterSnapshotAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbEngineVersion
 */
export interface RdsdbEngineVersion {
  /**
   * @schema RdsdbEngineVersion#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbEngineVersion#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbEngineVersion#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsdbEngineVersion#DBEngineDescription
   */
  readonly dbEngineDescription?: string;

  /**
   * @schema RdsdbEngineVersion#DBEngineVersionDescription
   */
  readonly dbEngineVersionDescription?: string;

  /**
   * @schema RdsdbEngineVersion#DefaultCharacterSet
   */
  readonly defaultCharacterSet?: RdsCharacterSet;

  /**
   * @schema RdsdbEngineVersion#SupportedCharacterSets
   */
  readonly supportedCharacterSets?: RdsCharacterSet[];

  /**
   * @schema RdsdbEngineVersion#SupportedNcharCharacterSets
   */
  readonly supportedNcharCharacterSets?: RdsCharacterSet[];

  /**
   * @schema RdsdbEngineVersion#ValidUpgradeTarget
   */
  readonly validUpgradeTarget?: RdsUpgradeTarget[];

  /**
   * @schema RdsdbEngineVersion#SupportedTimezones
   */
  readonly supportedTimezones?: RdsTimezone[];

  /**
   * @schema RdsdbEngineVersion#ExportableLogTypes
   */
  readonly exportableLogTypes?: string[];

  /**
   * @schema RdsdbEngineVersion#SupportsLogExportsToCloudwatchLogs
   */
  readonly supportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * @schema RdsdbEngineVersion#SupportsReadReplica
   */
  readonly supportsReadReplica?: boolean;

  /**
   * @schema RdsdbEngineVersion#SupportedEngineModes
   */
  readonly supportedEngineModes?: string[];

  /**
   * @schema RdsdbEngineVersion#SupportedFeatureNames
   */
  readonly supportedFeatureNames?: string[];

  /**
   * @schema RdsdbEngineVersion#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbEngineVersion#SupportsParallelQuery
   */
  readonly supportsParallelQuery?: boolean;

  /**
   * @schema RdsdbEngineVersion#SupportsGlobalDatabases
   */
  readonly supportsGlobalDatabases?: boolean;

}

/**
 * Converts an object of type 'RdsdbEngineVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbEngineVersion(obj: RdsdbEngineVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'DBEngineDescription': obj.dbEngineDescription,
    'DBEngineVersionDescription': obj.dbEngineVersionDescription,
    'DefaultCharacterSet': toJson_RdsCharacterSet(obj.defaultCharacterSet),
    'SupportedCharacterSets': obj.supportedCharacterSets?.map(y => toJson_RdsCharacterSet(y)),
    'SupportedNcharCharacterSets': obj.supportedNcharCharacterSets?.map(y => toJson_RdsCharacterSet(y)),
    'ValidUpgradeTarget': obj.validUpgradeTarget?.map(y => toJson_RdsUpgradeTarget(y)),
    'SupportedTimezones': obj.supportedTimezones?.map(y => toJson_RdsTimezone(y)),
    'ExportableLogTypes': obj.exportableLogTypes?.map(y => y),
    'SupportsLogExportsToCloudwatchLogs': obj.supportsLogExportsToCloudwatchLogs,
    'SupportsReadReplica': obj.supportsReadReplica,
    'SupportedEngineModes': obj.supportedEngineModes?.map(y => y),
    'SupportedFeatureNames': obj.supportedFeatureNames?.map(y => y),
    'Status': obj.status,
    'SupportsParallelQuery': obj.supportsParallelQuery,
    'SupportsGlobalDatabases': obj.supportsGlobalDatabases,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDescribeDbLogFilesDetails
 */
export interface RdsDescribeDbLogFilesDetails {
  /**
   * @schema RdsDescribeDbLogFilesDetails#LogFileName
   */
  readonly logFileName?: string;

  /**
   * @schema RdsDescribeDbLogFilesDetails#LastWritten
   */
  readonly lastWritten?: number;

  /**
   * @schema RdsDescribeDbLogFilesDetails#Size
   */
  readonly size?: number;

}

/**
 * Converts an object of type 'RdsDescribeDbLogFilesDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDescribeDbLogFilesDetails(obj: RdsDescribeDbLogFilesDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogFileName': obj.logFileName,
    'LastWritten': obj.lastWritten,
    'Size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbProxyTargetGroup
 */
export interface RdsdbProxyTargetGroup {
  /**
   * @schema RdsdbProxyTargetGroup#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsdbProxyTargetGroup#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsdbProxyTargetGroup#TargetGroupArn
   */
  readonly targetGroupArn?: string;

  /**
   * @schema RdsdbProxyTargetGroup#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema RdsdbProxyTargetGroup#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbProxyTargetGroup#ConnectionPoolConfig
   */
  readonly connectionPoolConfig?: RdsConnectionPoolConfigurationInfo;

  /**
   * @schema RdsdbProxyTargetGroup#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema RdsdbProxyTargetGroup#UpdatedDate
   */
  readonly updatedDate?: string;

}

/**
 * Converts an object of type 'RdsdbProxyTargetGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbProxyTargetGroup(obj: RdsdbProxyTargetGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBProxyName': obj.dbProxyName,
    'TargetGroupName': obj.targetGroupName,
    'TargetGroupArn': obj.targetGroupArn,
    'IsDefault': obj.isDefault,
    'Status': obj.status,
    'ConnectionPoolConfig': toJson_RdsConnectionPoolConfigurationInfo(obj.connectionPoolConfig),
    'CreatedDate': obj.createdDate,
    'UpdatedDate': obj.updatedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbProxyTarget
 */
export interface RdsdbProxyTarget {
  /**
   * @schema RdsdbProxyTarget#TargetArn
   */
  readonly targetArn?: string;

  /**
   * @schema RdsdbProxyTarget#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsdbProxyTarget#TrackedClusterId
   */
  readonly trackedClusterId?: string;

  /**
   * @schema RdsdbProxyTarget#RdsResourceId
   */
  readonly rdsResourceId?: string;

  /**
   * @schema RdsdbProxyTarget#Port
   */
  readonly port?: number;

  /**
   * @schema RdsdbProxyTarget#Type
   */
  readonly type?: string;

  /**
   * @schema RdsdbProxyTarget#Role
   */
  readonly role?: string;

  /**
   * @schema RdsdbProxyTarget#TargetHealth
   */
  readonly targetHealth?: RdsTargetHealth;

}

/**
 * Converts an object of type 'RdsdbProxyTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbProxyTarget(obj: RdsdbProxyTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetArn': obj.targetArn,
    'Endpoint': obj.endpoint,
    'TrackedClusterId': obj.trackedClusterId,
    'RdsResourceId': obj.rdsResourceId,
    'Port': obj.port,
    'Type': obj.type,
    'Role': obj.role,
    'TargetHealth': toJson_RdsTargetHealth(obj.targetHealth),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbSnapshotAttributesResult
 */
export interface RdsdbSnapshotAttributesResult {
  /**
   * @schema RdsdbSnapshotAttributesResult#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema RdsdbSnapshotAttributesResult#DBSnapshotAttributes
   */
  readonly dbSnapshotAttributes?: RdsdbSnapshotAttribute[];

}

/**
 * Converts an object of type 'RdsdbSnapshotAttributesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbSnapshotAttributesResult(obj: RdsdbSnapshotAttributesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSnapshotIdentifier': obj.dbSnapshotIdentifier,
    'DBSnapshotAttributes': obj.dbSnapshotAttributes?.map(y => toJson_RdsdbSnapshotAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsEngineDefaults
 */
export interface RdsEngineDefaults {
  /**
   * @schema RdsEngineDefaults#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsEngineDefaults#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsEngineDefaults#Parameters
   */
  readonly parameters?: RdsParameter[];

}

/**
 * Converts an object of type 'RdsEngineDefaults' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsEngineDefaults(obj: RdsEngineDefaults | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Marker': obj.marker,
    'Parameters': obj.parameters?.map(y => toJson_RdsParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsEventCategoriesMap
 */
export interface RdsEventCategoriesMap {
  /**
   * @schema RdsEventCategoriesMap#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsEventCategoriesMap#EventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * Converts an object of type 'RdsEventCategoriesMap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsEventCategoriesMap(obj: RdsEventCategoriesMap | undefined): Record<string, any> | undefined {
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
 * @schema RdsEvent
 */
export interface RdsEvent {
  /**
   * @schema RdsEvent#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema RdsEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsEvent#Message
   */
  readonly message?: string;

  /**
   * @schema RdsEvent#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RdsEvent#Date
   */
  readonly date?: string;

  /**
   * @schema RdsEvent#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * Converts an object of type 'RdsEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsEvent(obj: RdsEvent | undefined): Record<string, any> | undefined {
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
 * @schema RdsOptionGroupOption
 */
export interface RdsOptionGroupOption {
  /**
   * @schema RdsOptionGroupOption#Name
   */
  readonly name?: string;

  /**
   * @schema RdsOptionGroupOption#Description
   */
  readonly description?: string;

  /**
   * @schema RdsOptionGroupOption#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema RdsOptionGroupOption#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

  /**
   * @schema RdsOptionGroupOption#MinimumRequiredMinorEngineVersion
   */
  readonly minimumRequiredMinorEngineVersion?: string;

  /**
   * @schema RdsOptionGroupOption#PortRequired
   */
  readonly portRequired?: boolean;

  /**
   * @schema RdsOptionGroupOption#DefaultPort
   */
  readonly defaultPort?: number;

  /**
   * @schema RdsOptionGroupOption#OptionsDependedOn
   */
  readonly optionsDependedOn?: string[];

  /**
   * @schema RdsOptionGroupOption#OptionsConflictsWith
   */
  readonly optionsConflictsWith?: string[];

  /**
   * @schema RdsOptionGroupOption#Persistent
   */
  readonly persistent?: boolean;

  /**
   * @schema RdsOptionGroupOption#Permanent
   */
  readonly permanent?: boolean;

  /**
   * @schema RdsOptionGroupOption#RequiresAutoMinorEngineVersionUpgrade
   */
  readonly requiresAutoMinorEngineVersionUpgrade?: boolean;

  /**
   * @schema RdsOptionGroupOption#VpcOnly
   */
  readonly vpcOnly?: boolean;

  /**
   * @schema RdsOptionGroupOption#SupportsOptionVersionDowngrade
   */
  readonly supportsOptionVersionDowngrade?: boolean;

  /**
   * @schema RdsOptionGroupOption#OptionGroupOptionSettings
   */
  readonly optionGroupOptionSettings?: RdsOptionGroupOptionSetting[];

  /**
   * @schema RdsOptionGroupOption#OptionGroupOptionVersions
   */
  readonly optionGroupOptionVersions?: RdsOptionVersion[];

}

/**
 * Converts an object of type 'RdsOptionGroupOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOptionGroupOption(obj: RdsOptionGroupOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'EngineName': obj.engineName,
    'MajorEngineVersion': obj.majorEngineVersion,
    'MinimumRequiredMinorEngineVersion': obj.minimumRequiredMinorEngineVersion,
    'PortRequired': obj.portRequired,
    'DefaultPort': obj.defaultPort,
    'OptionsDependedOn': obj.optionsDependedOn?.map(y => y),
    'OptionsConflictsWith': obj.optionsConflictsWith?.map(y => y),
    'Persistent': obj.persistent,
    'Permanent': obj.permanent,
    'RequiresAutoMinorEngineVersionUpgrade': obj.requiresAutoMinorEngineVersionUpgrade,
    'VpcOnly': obj.vpcOnly,
    'SupportsOptionVersionDowngrade': obj.supportsOptionVersionDowngrade,
    'OptionGroupOptionSettings': obj.optionGroupOptionSettings?.map(y => toJson_RdsOptionGroupOptionSetting(y)),
    'OptionGroupOptionVersions': obj.optionGroupOptionVersions?.map(y => toJson_RdsOptionVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsOrderableDbInstanceOption
 */
export interface RdsOrderableDbInstanceOption {
  /**
   * @schema RdsOrderableDbInstanceOption#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#AvailabilityZoneGroup
   */
  readonly availabilityZoneGroup?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: RdsAvailabilityZone[];

  /**
   * @schema RdsOrderableDbInstanceOption#MultiAZCapable
   */
  readonly multiAzCapable?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#ReadReplicaCapable
   */
  readonly readReplicaCapable?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsStorageEncryption
   */
  readonly supportsStorageEncryption?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsIops
   */
  readonly supportsIops?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsEnhancedMonitoring
   */
  readonly supportsEnhancedMonitoring?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsIAMDatabaseAuthentication
   */
  readonly supportsIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsPerformanceInsights
   */
  readonly supportsPerformanceInsights?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#MinStorageSize
   */
  readonly minStorageSize?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#MaxStorageSize
   */
  readonly maxStorageSize?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#MinIopsPerDbInstance
   */
  readonly minIopsPerDbInstance?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#MaxIopsPerDbInstance
   */
  readonly maxIopsPerDbInstance?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#MinIopsPerGib
   */
  readonly minIopsPerGib?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#MaxIopsPerGib
   */
  readonly maxIopsPerGib?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#AvailableProcessorFeatures
   */
  readonly availableProcessorFeatures?: RdsAvailableProcessorFeature[];

  /**
   * @schema RdsOrderableDbInstanceOption#SupportedEngineModes
   */
  readonly supportedEngineModes?: string[];

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsStorageAutoscaling
   */
  readonly supportsStorageAutoscaling?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsKerberosAuthentication
   */
  readonly supportsKerberosAuthentication?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#OutpostCapable
   */
  readonly outpostCapable?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportedActivityStreamModes
   */
  readonly supportedActivityStreamModes?: string[];

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsGlobalDatabases
   */
  readonly supportsGlobalDatabases?: boolean;

}

/**
 * Converts an object of type 'RdsOrderableDbInstanceOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOrderableDbInstanceOption(obj: RdsOrderableDbInstanceOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBInstanceClass': obj.dbInstanceClass,
    'LicenseModel': obj.licenseModel,
    'AvailabilityZoneGroup': obj.availabilityZoneGroup,
    'AvailabilityZones': obj.availabilityZones?.map(y => toJson_RdsAvailabilityZone(y)),
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
    'AvailableProcessorFeatures': obj.availableProcessorFeatures?.map(y => toJson_RdsAvailableProcessorFeature(y)),
    'SupportedEngineModes': obj.supportedEngineModes?.map(y => y),
    'SupportsStorageAutoscaling': obj.supportsStorageAutoscaling,
    'SupportsKerberosAuthentication': obj.supportsKerberosAuthentication,
    'OutpostCapable': obj.outpostCapable,
    'SupportedActivityStreamModes': obj.supportedActivityStreamModes?.map(y => y),
    'SupportsGlobalDatabases': obj.supportsGlobalDatabases,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsReservedDbInstance
 */
export interface RdsReservedDbInstance {
  /**
   * @schema RdsReservedDbInstance#ReservedDBInstanceId
   */
  readonly reservedDbInstanceId?: string;

  /**
   * @schema RdsReservedDbInstance#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema RdsReservedDbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsReservedDbInstance#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RdsReservedDbInstance#Duration
   */
  readonly duration?: number;

  /**
   * @schema RdsReservedDbInstance#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema RdsReservedDbInstance#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema RdsReservedDbInstance#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema RdsReservedDbInstance#DBInstanceCount
   */
  readonly dbInstanceCount?: number;

  /**
   * @schema RdsReservedDbInstance#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema RdsReservedDbInstance#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RdsReservedDbInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsReservedDbInstance#State
   */
  readonly state?: string;

  /**
   * @schema RdsReservedDbInstance#RecurringCharges
   */
  readonly recurringCharges?: RdsRecurringCharge[];

  /**
   * @schema RdsReservedDbInstance#ReservedDBInstanceArn
   */
  readonly reservedDbInstanceArn?: string;

  /**
   * @schema RdsReservedDbInstance#LeaseId
   */
  readonly leaseId?: string;

}

/**
 * Converts an object of type 'RdsReservedDbInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsReservedDbInstance(obj: RdsReservedDbInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedDBInstanceId': obj.reservedDbInstanceId,
    'ReservedDBInstancesOfferingId': obj.reservedDbInstancesOfferingId,
    'DBInstanceClass': obj.dbInstanceClass,
    'StartTime': obj.startTime,
    'Duration': obj.duration,
    'FixedPrice': obj.fixedPrice,
    'UsagePrice': obj.usagePrice,
    'CurrencyCode': obj.currencyCode,
    'DBInstanceCount': obj.dbInstanceCount,
    'ProductDescription': obj.productDescription,
    'OfferingType': obj.offeringType,
    'MultiAZ': obj.multiAz,
    'State': obj.state,
    'RecurringCharges': obj.recurringCharges?.map(y => toJson_RdsRecurringCharge(y)),
    'ReservedDBInstanceArn': obj.reservedDbInstanceArn,
    'LeaseId': obj.leaseId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsReservedDbInstancesOffering
 */
export interface RdsReservedDbInstancesOffering {
  /**
   * @schema RdsReservedDbInstancesOffering#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema RdsReservedDbInstancesOffering#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsReservedDbInstancesOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema RdsReservedDbInstancesOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema RdsReservedDbInstancesOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema RdsReservedDbInstancesOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema RdsReservedDbInstancesOffering#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema RdsReservedDbInstancesOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RdsReservedDbInstancesOffering#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsReservedDbInstancesOffering#RecurringCharges
   */
  readonly recurringCharges?: RdsRecurringCharge[];

}

/**
 * Converts an object of type 'RdsReservedDbInstancesOffering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsReservedDbInstancesOffering(obj: RdsReservedDbInstancesOffering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedDBInstancesOfferingId': obj.reservedDbInstancesOfferingId,
    'DBInstanceClass': obj.dbInstanceClass,
    'Duration': obj.duration,
    'FixedPrice': obj.fixedPrice,
    'UsagePrice': obj.usagePrice,
    'CurrencyCode': obj.currencyCode,
    'ProductDescription': obj.productDescription,
    'OfferingType': obj.offeringType,
    'MultiAZ': obj.multiAz,
    'RecurringCharges': obj.recurringCharges?.map(y => toJson_RdsRecurringCharge(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsSourceRegion
 */
export interface RdsSourceRegion {
  /**
   * @schema RdsSourceRegion#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema RdsSourceRegion#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsSourceRegion#Status
   */
  readonly status?: string;

  /**
   * @schema RdsSourceRegion#SupportsDBInstanceAutomatedBackupsReplication
   */
  readonly supportsDbInstanceAutomatedBackupsReplication?: boolean;

}

/**
 * Converts an object of type 'RdsSourceRegion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsSourceRegion(obj: RdsSourceRegion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
    'Endpoint': obj.endpoint,
    'Status': obj.status,
    'SupportsDBInstanceAutomatedBackupsReplication': obj.supportsDbInstanceAutomatedBackupsReplication,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsValidDbInstanceModificationsMessage
 */
export interface RdsValidDbInstanceModificationsMessage {
  /**
   * @schema RdsValidDbInstanceModificationsMessage#Storage
   */
  readonly storage?: RdsValidStorageOptions[];

  /**
   * @schema RdsValidDbInstanceModificationsMessage#ValidProcessorFeatures
   */
  readonly validProcessorFeatures?: RdsAvailableProcessorFeature[];

}

/**
 * Converts an object of type 'RdsValidDbInstanceModificationsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsValidDbInstanceModificationsMessage(obj: RdsValidDbInstanceModificationsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Storage': obj.storage?.map(y => toJson_RdsValidStorageOptions(y)),
    'ValidProcessorFeatures': obj.validProcessorFeatures?.map(y => toJson_RdsAvailableProcessorFeature(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsCloudwatchLogsExportConfiguration
 */
export interface RdsCloudwatchLogsExportConfiguration {
  /**
   * @schema RdsCloudwatchLogsExportConfiguration#EnableLogTypes
   */
  readonly enableLogTypes?: string[];

  /**
   * @schema RdsCloudwatchLogsExportConfiguration#DisableLogTypes
   */
  readonly disableLogTypes?: string[];

}

/**
 * Converts an object of type 'RdsCloudwatchLogsExportConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCloudwatchLogsExportConfiguration(obj: RdsCloudwatchLogsExportConfiguration | undefined): Record<string, any> | undefined {
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
 * @schema RdsConnectionPoolConfiguration
 */
export interface RdsConnectionPoolConfiguration {
  /**
   * @schema RdsConnectionPoolConfiguration#MaxConnectionsPercent
   */
  readonly maxConnectionsPercent?: number;

  /**
   * @schema RdsConnectionPoolConfiguration#MaxIdleConnectionsPercent
   */
  readonly maxIdleConnectionsPercent?: number;

  /**
   * @schema RdsConnectionPoolConfiguration#ConnectionBorrowTimeout
   */
  readonly connectionBorrowTimeout?: number;

  /**
   * @schema RdsConnectionPoolConfiguration#SessionPinningFilters
   */
  readonly sessionPinningFilters?: string[];

  /**
   * @schema RdsConnectionPoolConfiguration#InitQuery
   */
  readonly initQuery?: string;

}

/**
 * Converts an object of type 'RdsConnectionPoolConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsConnectionPoolConfiguration(obj: RdsConnectionPoolConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxConnectionsPercent': obj.maxConnectionsPercent,
    'MaxIdleConnectionsPercent': obj.maxIdleConnectionsPercent,
    'ConnectionBorrowTimeout': obj.connectionBorrowTimeout,
    'SessionPinningFilters': obj.sessionPinningFilters?.map(y => y),
    'InitQuery': obj.initQuery,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsOptionConfiguration
 */
export interface RdsOptionConfiguration {
  /**
   * @schema RdsOptionConfiguration#OptionName
   */
  readonly optionName?: string;

  /**
   * @schema RdsOptionConfiguration#Port
   */
  readonly port?: number;

  /**
   * @schema RdsOptionConfiguration#OptionVersion
   */
  readonly optionVersion?: string;

  /**
   * @schema RdsOptionConfiguration#DBSecurityGroupMemberships
   */
  readonly dbSecurityGroupMemberships?: string[];

  /**
   * @schema RdsOptionConfiguration#VpcSecurityGroupMemberships
   */
  readonly vpcSecurityGroupMemberships?: string[];

  /**
   * @schema RdsOptionConfiguration#OptionSettings
   */
  readonly optionSettings?: RdsOptionSetting[];

}

/**
 * Converts an object of type 'RdsOptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOptionConfiguration(obj: RdsOptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionName': obj.optionName,
    'Port': obj.port,
    'OptionVersion': obj.optionVersion,
    'DBSecurityGroupMemberships': obj.dbSecurityGroupMemberships?.map(y => y),
    'VpcSecurityGroupMemberships': obj.vpcSecurityGroupMemberships?.map(y => y),
    'OptionSettings': obj.optionSettings?.map(y => toJson_RdsOptionSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsPendingMaintenanceAction
 */
export interface RdsPendingMaintenanceAction {
  /**
   * @schema RdsPendingMaintenanceAction#Action
   */
  readonly action?: string;

  /**
   * @schema RdsPendingMaintenanceAction#AutoAppliedAfterDate
   */
  readonly autoAppliedAfterDate?: string;

  /**
   * @schema RdsPendingMaintenanceAction#ForcedApplyDate
   */
  readonly forcedApplyDate?: string;

  /**
   * @schema RdsPendingMaintenanceAction#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema RdsPendingMaintenanceAction#CurrentApplyDate
   */
  readonly currentApplyDate?: string;

  /**
   * @schema RdsPendingMaintenanceAction#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'RdsPendingMaintenanceAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsPendingMaintenanceAction(obj: RdsPendingMaintenanceAction | undefined): Record<string, any> | undefined {
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
 * @schema Rdsec2SecurityGroup
 */
export interface Rdsec2SecurityGroup {
  /**
   * @schema Rdsec2SecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema Rdsec2SecurityGroup#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema Rdsec2SecurityGroup#EC2SecurityGroupId
   */
  readonly ec2SecurityGroupId?: string;

  /**
   * @schema Rdsec2SecurityGroup#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * Converts an object of type 'Rdsec2SecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Rdsec2SecurityGroup(obj: Rdsec2SecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'EC2SecurityGroupName': obj.ec2SecurityGroupName,
    'EC2SecurityGroupId': obj.ec2SecurityGroupId,
    'EC2SecurityGroupOwnerId': obj.ec2SecurityGroupOwnerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsipRange
 */
export interface RdsipRange {
  /**
   * @schema RdsipRange#Status
   */
  readonly status?: string;

  /**
   * @schema RdsipRange#CIDRIP
   */
  readonly cidrip?: string;

}

/**
 * Converts an object of type 'RdsipRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsipRange(obj: RdsipRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'CIDRIP': obj.cidrip,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsOption
 */
export interface RdsOption {
  /**
   * @schema RdsOption#OptionName
   */
  readonly optionName?: string;

  /**
   * @schema RdsOption#OptionDescription
   */
  readonly optionDescription?: string;

  /**
   * @schema RdsOption#Persistent
   */
  readonly persistent?: boolean;

  /**
   * @schema RdsOption#Permanent
   */
  readonly permanent?: boolean;

  /**
   * @schema RdsOption#Port
   */
  readonly port?: number;

  /**
   * @schema RdsOption#OptionVersion
   */
  readonly optionVersion?: string;

  /**
   * @schema RdsOption#OptionSettings
   */
  readonly optionSettings?: RdsOptionSetting[];

  /**
   * @schema RdsOption#DBSecurityGroupMemberships
   */
  readonly dbSecurityGroupMemberships?: RdsdbSecurityGroupMembership[];

  /**
   * @schema RdsOption#VpcSecurityGroupMemberships
   */
  readonly vpcSecurityGroupMemberships?: RdsVpcSecurityGroupMembership[];

}

/**
 * Converts an object of type 'RdsOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOption(obj: RdsOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionName': obj.optionName,
    'OptionDescription': obj.optionDescription,
    'Persistent': obj.persistent,
    'Permanent': obj.permanent,
    'Port': obj.port,
    'OptionVersion': obj.optionVersion,
    'OptionSettings': obj.optionSettings?.map(y => toJson_RdsOptionSetting(y)),
    'DBSecurityGroupMemberships': obj.dbSecurityGroupMemberships?.map(y => toJson_RdsdbSecurityGroupMembership(y)),
    'VpcSecurityGroupMemberships': obj.vpcSecurityGroupMemberships?.map(y => toJson_RdsVpcSecurityGroupMembership(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsVpnDetails
 */
export interface RdsVpnDetails {
  /**
   * @schema RdsVpnDetails#VpnId
   */
  readonly vpnId?: string;

  /**
   * @schema RdsVpnDetails#VpnTunnelOriginatorIP
   */
  readonly vpnTunnelOriginatorIp?: string;

  /**
   * @schema RdsVpnDetails#VpnGatewayIp
   */
  readonly vpnGatewayIp?: string;

  /**
   * @schema RdsVpnDetails#VpnPSK
   */
  readonly vpnPsk?: string;

  /**
   * @schema RdsVpnDetails#VpnName
   */
  readonly vpnName?: string;

  /**
   * @schema RdsVpnDetails#VpnState
   */
  readonly vpnState?: string;

}

/**
 * Converts an object of type 'RdsVpnDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsVpnDetails(obj: RdsVpnDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpnId': obj.vpnId,
    'VpnTunnelOriginatorIP': obj.vpnTunnelOriginatorIp,
    'VpnGatewayIp': obj.vpnGatewayIp,
    'VpnPSK': obj.vpnPsk,
    'VpnName': obj.vpnName,
    'VpnState': obj.vpnState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterOptionGroupStatus
 */
export interface RdsdbClusterOptionGroupStatus {
  /**
   * @schema RdsdbClusterOptionGroupStatus#DBClusterOptionGroupName
   */
  readonly dbClusterOptionGroupName?: string;

  /**
   * @schema RdsdbClusterOptionGroupStatus#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RdsdbClusterOptionGroupStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterOptionGroupStatus(obj: RdsdbClusterOptionGroupStatus | undefined): Record<string, any> | undefined {
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
 * @schema RdsdbClusterMember
 */
export interface RdsdbClusterMember {
  /**
   * @schema RdsdbClusterMember#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsdbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema RdsdbClusterMember#DBClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

  /**
   * @schema RdsdbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * Converts an object of type 'RdsdbClusterMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterMember(obj: RdsdbClusterMember | undefined): Record<string, any> | undefined {
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
 * @schema RdsVpcSecurityGroupMembership
 */
export interface RdsVpcSecurityGroupMembership {
  /**
   * @schema RdsVpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema RdsVpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RdsVpcSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsVpcSecurityGroupMembership(obj: RdsVpcSecurityGroupMembership | undefined): Record<string, any> | undefined {
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
 * @schema RdsdbClusterRole
 */
export interface RdsdbClusterRole {
  /**
   * @schema RdsdbClusterRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsdbClusterRole#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbClusterRole#FeatureName
   */
  readonly featureName?: string;

}

/**
 * Converts an object of type 'RdsdbClusterRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterRole(obj: RdsdbClusterRole | undefined): Record<string, any> | undefined {
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
 * @schema RdsScalingConfigurationInfo
 */
export interface RdsScalingConfigurationInfo {
  /**
   * @schema RdsScalingConfigurationInfo#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema RdsScalingConfigurationInfo#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema RdsScalingConfigurationInfo#AutoPause
   */
  readonly autoPause?: boolean;

  /**
   * @schema RdsScalingConfigurationInfo#SecondsUntilAutoPause
   */
  readonly secondsUntilAutoPause?: number;

  /**
   * @schema RdsScalingConfigurationInfo#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * Converts an object of type 'RdsScalingConfigurationInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsScalingConfigurationInfo(obj: RdsScalingConfigurationInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinCapacity': obj.minCapacity,
    'MaxCapacity': obj.maxCapacity,
    'AutoPause': obj.autoPause,
    'SecondsUntilAutoPause': obj.secondsUntilAutoPause,
    'TimeoutAction': obj.timeoutAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsDomainMembership
 */
export interface RdsDomainMembership {
  /**
   * @schema RdsDomainMembership#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsDomainMembership#Status
   */
  readonly status?: string;

  /**
   * @schema RdsDomainMembership#FQDN
   */
  readonly fqdn?: string;

  /**
   * @schema RdsDomainMembership#IAMRoleName
   */
  readonly iamRoleName?: string;

}

/**
 * Converts an object of type 'RdsDomainMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDomainMembership(obj: RdsDomainMembership | undefined): Record<string, any> | undefined {
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
 * @schema RdsClusterPendingModifiedValues
 */
export interface RdsClusterPendingModifiedValues {
  /**
   * @schema RdsClusterPendingModifiedValues#PendingCloudwatchLogsExports
   */
  readonly pendingCloudwatchLogsExports?: RdsPendingCloudwatchLogsExports;

  /**
   * @schema RdsClusterPendingModifiedValues#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsClusterPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsClusterPendingModifiedValues#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema RdsClusterPendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

}

/**
 * Converts an object of type 'RdsClusterPendingModifiedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsClusterPendingModifiedValues(obj: RdsClusterPendingModifiedValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PendingCloudwatchLogsExports': toJson_RdsPendingCloudwatchLogsExports(obj.pendingCloudwatchLogsExports),
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'MasterUserPassword': obj.masterUserPassword,
    'IAMDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
    'EngineVersion': obj.engineVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsEndpoint
 */
export interface RdsEndpoint {
  /**
   * @schema RdsEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema RdsEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema RdsEndpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * Converts an object of type 'RdsEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsEndpoint(obj: RdsEndpoint | undefined): Record<string, any> | undefined {
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
 * @schema RdsdbSecurityGroupMembership
 */
export interface RdsdbSecurityGroupMembership {
  /**
   * @schema RdsdbSecurityGroupMembership#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema RdsdbSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RdsdbSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbSecurityGroupMembership(obj: RdsdbSecurityGroupMembership | undefined): Record<string, any> | undefined {
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
 * @schema RdsdbParameterGroupStatus
 */
export interface RdsdbParameterGroupStatus {
  /**
   * @schema RdsdbParameterGroupStatus#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsdbParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

}

/**
 * Converts an object of type 'RdsdbParameterGroupStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbParameterGroupStatus(obj: RdsdbParameterGroupStatus | undefined): Record<string, any> | undefined {
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
 * @schema RdsPendingModifiedValues
 */
export interface RdsPendingModifiedValues {
  /**
   * @schema RdsPendingModifiedValues#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsPendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsPendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema RdsPendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsPendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsPendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsPendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsPendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsPendingModifiedValues#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsPendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsPendingModifiedValues#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema RdsPendingModifiedValues#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsPendingModifiedValues#PendingCloudwatchLogsExports
   */
  readonly pendingCloudwatchLogsExports?: RdsPendingCloudwatchLogsExports;

  /**
   * @schema RdsPendingModifiedValues#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsPendingModifiedValues#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * Converts an object of type 'RdsPendingModifiedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsPendingModifiedValues(obj: RdsPendingModifiedValues | undefined): Record<string, any> | undefined {
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
    'PendingCloudwatchLogsExports': toJson_RdsPendingCloudwatchLogsExports(obj.pendingCloudwatchLogsExports),
    'ProcessorFeatures': obj.processorFeatures?.map(y => toJson_RdsProcessorFeature(y)),
    'IAMDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsOptionGroupMembership
 */
export interface RdsOptionGroupMembership {
  /**
   * @schema RdsOptionGroupMembership#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsOptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RdsOptionGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOptionGroupMembership(obj: RdsOptionGroupMembership | undefined): Record<string, any> | undefined {
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
 * @schema RdsdbInstanceStatusInfo
 */
export interface RdsdbInstanceStatusInfo {
  /**
   * @schema RdsdbInstanceStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema RdsdbInstanceStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema RdsdbInstanceStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbInstanceStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'RdsdbInstanceStatusInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbInstanceStatusInfo(obj: RdsdbInstanceStatusInfo | undefined): Record<string, any> | undefined {
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
 * @schema RdsdbInstanceRole
 */
export interface RdsdbInstanceRole {
  /**
   * @schema RdsdbInstanceRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsdbInstanceRole#FeatureName
   */
  readonly featureName?: string;

  /**
   * @schema RdsdbInstanceRole#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RdsdbInstanceRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbInstanceRole(obj: RdsdbInstanceRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'FeatureName': obj.featureName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbInstanceAutomatedBackupsReplication
 */
export interface RdsdbInstanceAutomatedBackupsReplication {
  /**
   * @schema RdsdbInstanceAutomatedBackupsReplication#DBInstanceAutomatedBackupsArn
   */
  readonly dbInstanceAutomatedBackupsArn?: string;

}

/**
 * Converts an object of type 'RdsdbInstanceAutomatedBackupsReplication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbInstanceAutomatedBackupsReplication(obj: RdsdbInstanceAutomatedBackupsReplication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceAutomatedBackupsArn': obj.dbInstanceAutomatedBackupsArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsUserAuthConfigInfo
 */
export interface RdsUserAuthConfigInfo {
  /**
   * @schema RdsUserAuthConfigInfo#Description
   */
  readonly description?: string;

  /**
   * @schema RdsUserAuthConfigInfo#UserName
   */
  readonly userName?: string;

  /**
   * @schema RdsUserAuthConfigInfo#AuthScheme
   */
  readonly authScheme?: string;

  /**
   * @schema RdsUserAuthConfigInfo#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RdsUserAuthConfigInfo#IAMAuth
   */
  readonly iamAuth?: string;

}

/**
 * Converts an object of type 'RdsUserAuthConfigInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsUserAuthConfigInfo(obj: RdsUserAuthConfigInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'UserName': obj.userName,
    'AuthScheme': obj.authScheme,
    'SecretArn': obj.secretArn,
    'IAMAuth': obj.iamAuth,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsSubnet
 */
export interface RdsSubnet {
  /**
   * @schema RdsSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema RdsSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: RdsAvailabilityZone;

  /**
   * @schema RdsSubnet#SubnetOutpost
   */
  readonly subnetOutpost?: RdsOutpost;

  /**
   * @schema RdsSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * Converts an object of type 'RdsSubnet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsSubnet(obj: RdsSubnet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIdentifier': obj.subnetIdentifier,
    'SubnetAvailabilityZone': toJson_RdsAvailabilityZone(obj.subnetAvailabilityZone),
    'SubnetOutpost': toJson_RdsOutpost(obj.subnetOutpost),
    'SubnetStatus': obj.subnetStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsGlobalClusterMember
 */
export interface RdsGlobalClusterMember {
  /**
   * @schema RdsGlobalClusterMember#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema RdsGlobalClusterMember#Readers
   */
  readonly readers?: string[];

  /**
   * @schema RdsGlobalClusterMember#IsWriter
   */
  readonly isWriter?: boolean;

  /**
   * @schema RdsGlobalClusterMember#GlobalWriteForwardingStatus
   */
  readonly globalWriteForwardingStatus?: string;

}

/**
 * Converts an object of type 'RdsGlobalClusterMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsGlobalClusterMember(obj: RdsGlobalClusterMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterArn': obj.dbClusterArn,
    'Readers': obj.readers?.map(y => y),
    'IsWriter': obj.isWriter,
    'GlobalWriteForwardingStatus': obj.globalWriteForwardingStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsFailoverState
 */
export interface RdsFailoverState {
  /**
   * @schema RdsFailoverState#Status
   */
  readonly status?: string;

  /**
   * @schema RdsFailoverState#FromDbClusterArn
   */
  readonly fromDbClusterArn?: string;

  /**
   * @schema RdsFailoverState#ToDbClusterArn
   */
  readonly toDbClusterArn?: string;

}

/**
 * Converts an object of type 'RdsFailoverState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsFailoverState(obj: RdsFailoverState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'FromDbClusterArn': obj.fromDbClusterArn,
    'ToDbClusterArn': obj.toDbClusterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRestoreWindow
 */
export interface RdsRestoreWindow {
  /**
   * @schema RdsRestoreWindow#EarliestTime
   */
  readonly earliestTime?: string;

  /**
   * @schema RdsRestoreWindow#LatestTime
   */
  readonly latestTime?: string;

}

/**
 * Converts an object of type 'RdsRestoreWindow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRestoreWindow(obj: RdsRestoreWindow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EarliestTime': obj.earliestTime,
    'LatestTime': obj.latestTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbClusterSnapshotAttribute
 */
export interface RdsdbClusterSnapshotAttribute {
  /**
   * @schema RdsdbClusterSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema RdsdbClusterSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * Converts an object of type 'RdsdbClusterSnapshotAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbClusterSnapshotAttribute(obj: RdsdbClusterSnapshotAttribute | undefined): Record<string, any> | undefined {
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
 * @schema RdsCharacterSet
 */
export interface RdsCharacterSet {
  /**
   * @schema RdsCharacterSet#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsCharacterSet#CharacterSetDescription
   */
  readonly characterSetDescription?: string;

}

/**
 * Converts an object of type 'RdsCharacterSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsCharacterSet(obj: RdsCharacterSet | undefined): Record<string, any> | undefined {
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
 * @schema RdsUpgradeTarget
 */
export interface RdsUpgradeTarget {
  /**
   * @schema RdsUpgradeTarget#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsUpgradeTarget#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsUpgradeTarget#Description
   */
  readonly description?: string;

  /**
   * @schema RdsUpgradeTarget#AutoUpgrade
   */
  readonly autoUpgrade?: boolean;

  /**
   * @schema RdsUpgradeTarget#IsMajorVersionUpgrade
   */
  readonly isMajorVersionUpgrade?: boolean;

  /**
   * @schema RdsUpgradeTarget#SupportedEngineModes
   */
  readonly supportedEngineModes?: string[];

  /**
   * @schema RdsUpgradeTarget#SupportsParallelQuery
   */
  readonly supportsParallelQuery?: boolean;

  /**
   * @schema RdsUpgradeTarget#SupportsGlobalDatabases
   */
  readonly supportsGlobalDatabases?: boolean;

}

/**
 * Converts an object of type 'RdsUpgradeTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsUpgradeTarget(obj: RdsUpgradeTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'Description': obj.description,
    'AutoUpgrade': obj.autoUpgrade,
    'IsMajorVersionUpgrade': obj.isMajorVersionUpgrade,
    'SupportedEngineModes': obj.supportedEngineModes?.map(y => y),
    'SupportsParallelQuery': obj.supportsParallelQuery,
    'SupportsGlobalDatabases': obj.supportsGlobalDatabases,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsTimezone
 */
export interface RdsTimezone {
  /**
   * @schema RdsTimezone#TimezoneName
   */
  readonly timezoneName?: string;

}

/**
 * Converts an object of type 'RdsTimezone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsTimezone(obj: RdsTimezone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimezoneName': obj.timezoneName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsConnectionPoolConfigurationInfo
 */
export interface RdsConnectionPoolConfigurationInfo {
  /**
   * @schema RdsConnectionPoolConfigurationInfo#MaxConnectionsPercent
   */
  readonly maxConnectionsPercent?: number;

  /**
   * @schema RdsConnectionPoolConfigurationInfo#MaxIdleConnectionsPercent
   */
  readonly maxIdleConnectionsPercent?: number;

  /**
   * @schema RdsConnectionPoolConfigurationInfo#ConnectionBorrowTimeout
   */
  readonly connectionBorrowTimeout?: number;

  /**
   * @schema RdsConnectionPoolConfigurationInfo#SessionPinningFilters
   */
  readonly sessionPinningFilters?: string[];

  /**
   * @schema RdsConnectionPoolConfigurationInfo#InitQuery
   */
  readonly initQuery?: string;

}

/**
 * Converts an object of type 'RdsConnectionPoolConfigurationInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsConnectionPoolConfigurationInfo(obj: RdsConnectionPoolConfigurationInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxConnectionsPercent': obj.maxConnectionsPercent,
    'MaxIdleConnectionsPercent': obj.maxIdleConnectionsPercent,
    'ConnectionBorrowTimeout': obj.connectionBorrowTimeout,
    'SessionPinningFilters': obj.sessionPinningFilters?.map(y => y),
    'InitQuery': obj.initQuery,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsTargetHealth
 */
export interface RdsTargetHealth {
  /**
   * @schema RdsTargetHealth#State
   */
  readonly state?: string;

  /**
   * @schema RdsTargetHealth#Reason
   */
  readonly reason?: string;

  /**
   * @schema RdsTargetHealth#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'RdsTargetHealth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsTargetHealth(obj: RdsTargetHealth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'Reason': obj.reason,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsdbSnapshotAttribute
 */
export interface RdsdbSnapshotAttribute {
  /**
   * @schema RdsdbSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema RdsdbSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * Converts an object of type 'RdsdbSnapshotAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsdbSnapshotAttribute(obj: RdsdbSnapshotAttribute | undefined): Record<string, any> | undefined {
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
 * @schema RdsOptionGroupOptionSetting
 */
export interface RdsOptionGroupOptionSetting {
  /**
   * @schema RdsOptionGroupOptionSetting#SettingName
   */
  readonly settingName?: string;

  /**
   * @schema RdsOptionGroupOptionSetting#SettingDescription
   */
  readonly settingDescription?: string;

  /**
   * @schema RdsOptionGroupOptionSetting#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema RdsOptionGroupOptionSetting#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema RdsOptionGroupOptionSetting#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema RdsOptionGroupOptionSetting#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema RdsOptionGroupOptionSetting#IsRequired
   */
  readonly isRequired?: boolean;

  /**
   * @schema RdsOptionGroupOptionSetting#MinimumEngineVersionPerAllowedValue
   */
  readonly minimumEngineVersionPerAllowedValue?: RdsMinimumEngineVersionPerAllowedValue[];

}

/**
 * Converts an object of type 'RdsOptionGroupOptionSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOptionGroupOptionSetting(obj: RdsOptionGroupOptionSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SettingName': obj.settingName,
    'SettingDescription': obj.settingDescription,
    'DefaultValue': obj.defaultValue,
    'ApplyType': obj.applyType,
    'AllowedValues': obj.allowedValues,
    'IsModifiable': obj.isModifiable,
    'IsRequired': obj.isRequired,
    'MinimumEngineVersionPerAllowedValue': obj.minimumEngineVersionPerAllowedValue?.map(y => toJson_RdsMinimumEngineVersionPerAllowedValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsOptionVersion
 */
export interface RdsOptionVersion {
  /**
   * @schema RdsOptionVersion#Version
   */
  readonly version?: string;

  /**
   * @schema RdsOptionVersion#IsDefault
   */
  readonly isDefault?: boolean;

}

/**
 * Converts an object of type 'RdsOptionVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOptionVersion(obj: RdsOptionVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Version': obj.version,
    'IsDefault': obj.isDefault,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsAvailabilityZone
 */
export interface RdsAvailabilityZone {
  /**
   * @schema RdsAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'RdsAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAvailabilityZone(obj: RdsAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsAvailableProcessorFeature
 */
export interface RdsAvailableProcessorFeature {
  /**
   * @schema RdsAvailableProcessorFeature#Name
   */
  readonly name?: string;

  /**
   * @schema RdsAvailableProcessorFeature#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema RdsAvailableProcessorFeature#AllowedValues
   */
  readonly allowedValues?: string;

}

/**
 * Converts an object of type 'RdsAvailableProcessorFeature' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsAvailableProcessorFeature(obj: RdsAvailableProcessorFeature | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DefaultValue': obj.defaultValue,
    'AllowedValues': obj.allowedValues,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRecurringCharge
 */
export interface RdsRecurringCharge {
  /**
   * @schema RdsRecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema RdsRecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * Converts an object of type 'RdsRecurringCharge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRecurringCharge(obj: RdsRecurringCharge | undefined): Record<string, any> | undefined {
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
 * @schema RdsValidStorageOptions
 */
export interface RdsValidStorageOptions {
  /**
   * @schema RdsValidStorageOptions#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsValidStorageOptions#StorageSize
   */
  readonly storageSize?: RdsRange[];

  /**
   * @schema RdsValidStorageOptions#ProvisionedIops
   */
  readonly provisionedIops?: RdsRange[];

  /**
   * @schema RdsValidStorageOptions#IopsToStorageRatio
   */
  readonly iopsToStorageRatio?: RdsDoubleRange[];

  /**
   * @schema RdsValidStorageOptions#SupportsStorageAutoscaling
   */
  readonly supportsStorageAutoscaling?: boolean;

}

/**
 * Converts an object of type 'RdsValidStorageOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsValidStorageOptions(obj: RdsValidStorageOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageType': obj.storageType,
    'StorageSize': obj.storageSize?.map(y => toJson_RdsRange(y)),
    'ProvisionedIops': obj.provisionedIops?.map(y => toJson_RdsRange(y)),
    'IopsToStorageRatio': obj.iopsToStorageRatio?.map(y => toJson_RdsDoubleRange(y)),
    'SupportsStorageAutoscaling': obj.supportsStorageAutoscaling,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsOptionSetting
 */
export interface RdsOptionSetting {
  /**
   * @schema RdsOptionSetting#Name
   */
  readonly name?: string;

  /**
   * @schema RdsOptionSetting#Value
   */
  readonly value?: string;

  /**
   * @schema RdsOptionSetting#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema RdsOptionSetting#Description
   */
  readonly description?: string;

  /**
   * @schema RdsOptionSetting#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema RdsOptionSetting#DataType
   */
  readonly dataType?: string;

  /**
   * @schema RdsOptionSetting#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema RdsOptionSetting#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema RdsOptionSetting#IsCollection
   */
  readonly isCollection?: boolean;

}

/**
 * Converts an object of type 'RdsOptionSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOptionSetting(obj: RdsOptionSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
    'DefaultValue': obj.defaultValue,
    'Description': obj.description,
    'ApplyType': obj.applyType,
    'DataType': obj.dataType,
    'AllowedValues': obj.allowedValues,
    'IsModifiable': obj.isModifiable,
    'IsCollection': obj.isCollection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsPendingCloudwatchLogsExports
 */
export interface RdsPendingCloudwatchLogsExports {
  /**
   * @schema RdsPendingCloudwatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema RdsPendingCloudwatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}

/**
 * Converts an object of type 'RdsPendingCloudwatchLogsExports' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsPendingCloudwatchLogsExports(obj: RdsPendingCloudwatchLogsExports | undefined): Record<string, any> | undefined {
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
 * @schema RdsOutpost
 */
export interface RdsOutpost {
  /**
   * @schema RdsOutpost#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'RdsOutpost' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsOutpost(obj: RdsOutpost | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsMinimumEngineVersionPerAllowedValue
 */
export interface RdsMinimumEngineVersionPerAllowedValue {
  /**
   * @schema RdsMinimumEngineVersionPerAllowedValue#AllowedValue
   */
  readonly allowedValue?: string;

  /**
   * @schema RdsMinimumEngineVersionPerAllowedValue#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

}

/**
 * Converts an object of type 'RdsMinimumEngineVersionPerAllowedValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsMinimumEngineVersionPerAllowedValue(obj: RdsMinimumEngineVersionPerAllowedValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowedValue': obj.allowedValue,
    'MinimumEngineVersion': obj.minimumEngineVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RdsRange
 */
export interface RdsRange {
  /**
   * @schema RdsRange#From
   */
  readonly from?: number;

  /**
   * @schema RdsRange#To
   */
  readonly to?: number;

  /**
   * @schema RdsRange#Step
   */
  readonly step?: number;

}

/**
 * Converts an object of type 'RdsRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsRange(obj: RdsRange | undefined): Record<string, any> | undefined {
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
 * @schema RdsDoubleRange
 */
export interface RdsDoubleRange {
  /**
   * @schema RdsDoubleRange#From
   */
  readonly from?: number;

  /**
   * @schema RdsDoubleRange#To
   */
  readonly to?: number;

}

/**
 * Converts an object of type 'RdsDoubleRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RdsDoubleRange(obj: RdsDoubleRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'From': obj.from,
    'To': obj.to,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
