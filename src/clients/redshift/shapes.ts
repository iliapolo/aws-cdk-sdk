/**
 * @schema RedshiftAcceptReservedNodeExchangeInputMessage
 */
export interface RedshiftAcceptReservedNodeExchangeInputMessage {
  /**
   * @schema RedshiftAcceptReservedNodeExchangeInputMessage#ReservedNodeId
   */
  readonly reservedNodeId?: string;

  /**
   * @schema RedshiftAcceptReservedNodeExchangeInputMessage#TargetReservedNodeOfferingId
   */
  readonly targetReservedNodeOfferingId?: string;

}

/**
 * Converts an object of type 'RedshiftAcceptReservedNodeExchangeInputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAcceptReservedNodeExchangeInputMessage(obj: RedshiftAcceptReservedNodeExchangeInputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedNodeId': obj.reservedNodeId,
    'TargetReservedNodeOfferingId': obj.targetReservedNodeOfferingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAcceptReservedNodeExchangeOutputMessage
 */
export interface RedshiftAcceptReservedNodeExchangeOutputMessage {
  /**
   * @schema RedshiftAcceptReservedNodeExchangeOutputMessage#ExchangedReservedNode
   */
  readonly exchangedReservedNode?: RedshiftReservedNode;

}

/**
 * Converts an object of type 'RedshiftAcceptReservedNodeExchangeOutputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAcceptReservedNodeExchangeOutputMessage(obj: RedshiftAcceptReservedNodeExchangeOutputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExchangedReservedNode': toJson_RedshiftReservedNode(obj.exchangedReservedNode),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftPartnerIntegrationInputMessage
 */
export interface RedshiftPartnerIntegrationInputMessage {
  /**
   * @schema RedshiftPartnerIntegrationInputMessage#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema RedshiftPartnerIntegrationInputMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftPartnerIntegrationInputMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RedshiftPartnerIntegrationInputMessage#PartnerName
   */
  readonly partnerName?: string;

}

/**
 * Converts an object of type 'RedshiftPartnerIntegrationInputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftPartnerIntegrationInputMessage(obj: RedshiftPartnerIntegrationInputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'ClusterIdentifier': obj.clusterIdentifier,
    'DatabaseName': obj.databaseName,
    'PartnerName': obj.partnerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftPartnerIntegrationOutputMessage
 */
export interface RedshiftPartnerIntegrationOutputMessage {
  /**
   * @schema RedshiftPartnerIntegrationOutputMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RedshiftPartnerIntegrationOutputMessage#PartnerName
   */
  readonly partnerName?: string;

}

/**
 * Converts an object of type 'RedshiftPartnerIntegrationOutputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftPartnerIntegrationOutputMessage(obj: RedshiftPartnerIntegrationOutputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'PartnerName': obj.partnerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAssociateDataShareConsumerMessage
 */
export interface RedshiftAssociateDataShareConsumerMessage {
  /**
   * @schema RedshiftAssociateDataShareConsumerMessage#DataShareArn
   */
  readonly dataShareArn?: string;

  /**
   * @schema RedshiftAssociateDataShareConsumerMessage#AssociateEntireAccount
   */
  readonly associateEntireAccount?: boolean;

  /**
   * @schema RedshiftAssociateDataShareConsumerMessage#ConsumerArn
   */
  readonly consumerArn?: string;

}

/**
 * Converts an object of type 'RedshiftAssociateDataShareConsumerMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAssociateDataShareConsumerMessage(obj: RedshiftAssociateDataShareConsumerMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataShareArn': obj.dataShareArn,
    'AssociateEntireAccount': obj.associateEntireAccount,
    'ConsumerArn': obj.consumerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataShare
 */
export interface RedshiftDataShare {
  /**
   * @schema RedshiftDataShare#DataShareArn
   */
  readonly dataShareArn?: string;

  /**
   * @schema RedshiftDataShare#ProducerArn
   */
  readonly producerArn?: string;

  /**
   * @schema RedshiftDataShare#AllowPubliclyAccessibleConsumers
   */
  readonly allowPubliclyAccessibleConsumers?: boolean;

  /**
   * @schema RedshiftDataShare#DataShareAssociations
   */
  readonly dataShareAssociations?: RedshiftDataShareAssociation[];

}

/**
 * Converts an object of type 'RedshiftDataShare' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataShare(obj: RedshiftDataShare | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataShareArn': obj.dataShareArn,
    'ProducerArn': obj.producerArn,
    'AllowPubliclyAccessibleConsumers': obj.allowPubliclyAccessibleConsumers,
    'DataShareAssociations': obj.dataShareAssociations?.map(y => toJson_RedshiftDataShareAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAuthorizeClusterSecurityGroupIngressMessage
 */
export interface RedshiftAuthorizeClusterSecurityGroupIngressMessage {
  /**
   * @schema RedshiftAuthorizeClusterSecurityGroupIngressMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema RedshiftAuthorizeClusterSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RedshiftAuthorizeClusterSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RedshiftAuthorizeClusterSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * Converts an object of type 'RedshiftAuthorizeClusterSecurityGroupIngressMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAuthorizeClusterSecurityGroupIngressMessage(obj: RedshiftAuthorizeClusterSecurityGroupIngressMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroupName': obj.clusterSecurityGroupName,
    'CIDRIP': obj.cidrip,
    'EC2SecurityGroupName': obj.ec2SecurityGroupName,
    'EC2SecurityGroupOwnerId': obj.ec2SecurityGroupOwnerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAuthorizeClusterSecurityGroupIngressResult
 */
export interface RedshiftAuthorizeClusterSecurityGroupIngressResult {
  /**
   * @schema RedshiftAuthorizeClusterSecurityGroupIngressResult#ClusterSecurityGroup
   */
  readonly clusterSecurityGroup?: RedshiftClusterSecurityGroup;

}

/**
 * Converts an object of type 'RedshiftAuthorizeClusterSecurityGroupIngressResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAuthorizeClusterSecurityGroupIngressResult(obj: RedshiftAuthorizeClusterSecurityGroupIngressResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroup': toJson_RedshiftClusterSecurityGroup(obj.clusterSecurityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAuthorizeDataShareMessage
 */
export interface RedshiftAuthorizeDataShareMessage {
  /**
   * @schema RedshiftAuthorizeDataShareMessage#DataShareArn
   */
  readonly dataShareArn?: string;

  /**
   * @schema RedshiftAuthorizeDataShareMessage#ConsumerIdentifier
   */
  readonly consumerIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftAuthorizeDataShareMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAuthorizeDataShareMessage(obj: RedshiftAuthorizeDataShareMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataShareArn': obj.dataShareArn,
    'ConsumerIdentifier': obj.consumerIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAuthorizeEndpointAccessMessage
 */
export interface RedshiftAuthorizeEndpointAccessMessage {
  /**
   * @schema RedshiftAuthorizeEndpointAccessMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftAuthorizeEndpointAccessMessage#Account
   */
  readonly account?: string;

  /**
   * @schema RedshiftAuthorizeEndpointAccessMessage#VpcIds
   */
  readonly vpcIds?: string[];

}

/**
 * Converts an object of type 'RedshiftAuthorizeEndpointAccessMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAuthorizeEndpointAccessMessage(obj: RedshiftAuthorizeEndpointAccessMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'Account': obj.account,
    'VpcIds': obj.vpcIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEndpointAuthorization
 */
export interface RedshiftEndpointAuthorization {
  /**
   * @schema RedshiftEndpointAuthorization#Grantor
   */
  readonly grantor?: string;

  /**
   * @schema RedshiftEndpointAuthorization#Grantee
   */
  readonly grantee?: string;

  /**
   * @schema RedshiftEndpointAuthorization#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftEndpointAuthorization#AuthorizeTime
   */
  readonly authorizeTime?: string;

  /**
   * @schema RedshiftEndpointAuthorization#ClusterStatus
   */
  readonly clusterStatus?: string;

  /**
   * @schema RedshiftEndpointAuthorization#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftEndpointAuthorization#AllowedAllVPCs
   */
  readonly allowedAllVpCs?: boolean;

  /**
   * @schema RedshiftEndpointAuthorization#AllowedVPCs
   */
  readonly allowedVpCs?: string[];

  /**
   * @schema RedshiftEndpointAuthorization#EndpointCount
   */
  readonly endpointCount?: number;

}

/**
 * Converts an object of type 'RedshiftEndpointAuthorization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEndpointAuthorization(obj: RedshiftEndpointAuthorization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Grantor': obj.grantor,
    'Grantee': obj.grantee,
    'ClusterIdentifier': obj.clusterIdentifier,
    'AuthorizeTime': obj.authorizeTime,
    'ClusterStatus': obj.clusterStatus,
    'Status': obj.status,
    'AllowedAllVPCs': obj.allowedAllVpCs,
    'AllowedVPCs': obj.allowedVpCs?.map(y => y),
    'EndpointCount': obj.endpointCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAuthorizeSnapshotAccessMessage
 */
export interface RedshiftAuthorizeSnapshotAccessMessage {
  /**
   * @schema RedshiftAuthorizeSnapshotAccessMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftAuthorizeSnapshotAccessMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema RedshiftAuthorizeSnapshotAccessMessage#AccountWithRestoreAccess
   */
  readonly accountWithRestoreAccess?: string;

}

/**
 * Converts an object of type 'RedshiftAuthorizeSnapshotAccessMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAuthorizeSnapshotAccessMessage(obj: RedshiftAuthorizeSnapshotAccessMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'SnapshotClusterIdentifier': obj.snapshotClusterIdentifier,
    'AccountWithRestoreAccess': obj.accountWithRestoreAccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAuthorizeSnapshotAccessResult
 */
export interface RedshiftAuthorizeSnapshotAccessResult {
  /**
   * @schema RedshiftAuthorizeSnapshotAccessResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * Converts an object of type 'RedshiftAuthorizeSnapshotAccessResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAuthorizeSnapshotAccessResult(obj: RedshiftAuthorizeSnapshotAccessResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Snapshot': toJson_RedshiftSnapshot(obj.snapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftBatchDeleteClusterSnapshotsRequest
 */
export interface RedshiftBatchDeleteClusterSnapshotsRequest {
  /**
   * @schema RedshiftBatchDeleteClusterSnapshotsRequest#Identifiers
   */
  readonly identifiers?: RedshiftDeleteClusterSnapshotMessage[];

}

/**
 * Converts an object of type 'RedshiftBatchDeleteClusterSnapshotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftBatchDeleteClusterSnapshotsRequest(obj: RedshiftBatchDeleteClusterSnapshotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Identifiers': obj.identifiers?.map(y => toJson_RedshiftDeleteClusterSnapshotMessage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftBatchDeleteClusterSnapshotsResult
 */
export interface RedshiftBatchDeleteClusterSnapshotsResult {
  /**
   * @schema RedshiftBatchDeleteClusterSnapshotsResult#Resources
   */
  readonly resources?: string[];

  /**
   * @schema RedshiftBatchDeleteClusterSnapshotsResult#Errors
   */
  readonly errors?: RedshiftSnapshotErrorMessage[];

}

/**
 * Converts an object of type 'RedshiftBatchDeleteClusterSnapshotsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftBatchDeleteClusterSnapshotsResult(obj: RedshiftBatchDeleteClusterSnapshotsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resources': obj.resources?.map(y => y),
    'Errors': obj.errors?.map(y => toJson_RedshiftSnapshotErrorMessage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftBatchModifyClusterSnapshotsMessage
 */
export interface RedshiftBatchModifyClusterSnapshotsMessage {
  /**
   * @schema RedshiftBatchModifyClusterSnapshotsMessage#SnapshotIdentifierList
   */
  readonly snapshotIdentifierList?: string[];

  /**
   * @schema RedshiftBatchModifyClusterSnapshotsMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftBatchModifyClusterSnapshotsMessage#Force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'RedshiftBatchModifyClusterSnapshotsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftBatchModifyClusterSnapshotsMessage(obj: RedshiftBatchModifyClusterSnapshotsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotIdentifierList': obj.snapshotIdentifierList?.map(y => y),
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'Force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftBatchModifyClusterSnapshotsOutputMessage
 */
export interface RedshiftBatchModifyClusterSnapshotsOutputMessage {
  /**
   * @schema RedshiftBatchModifyClusterSnapshotsOutputMessage#Resources
   */
  readonly resources?: string[];

  /**
   * @schema RedshiftBatchModifyClusterSnapshotsOutputMessage#Errors
   */
  readonly errors?: RedshiftSnapshotErrorMessage[];

}

/**
 * Converts an object of type 'RedshiftBatchModifyClusterSnapshotsOutputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftBatchModifyClusterSnapshotsOutputMessage(obj: RedshiftBatchModifyClusterSnapshotsOutputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resources': obj.resources?.map(y => y),
    'Errors': obj.errors?.map(y => toJson_RedshiftSnapshotErrorMessage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCancelResizeMessage
 */
export interface RedshiftCancelResizeMessage {
  /**
   * @schema RedshiftCancelResizeMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftCancelResizeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCancelResizeMessage(obj: RedshiftCancelResizeMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftResizeProgressMessage
 */
export interface RedshiftResizeProgressMessage {
  /**
   * @schema RedshiftResizeProgressMessage#TargetNodeType
   */
  readonly targetNodeType?: string;

  /**
   * @schema RedshiftResizeProgressMessage#TargetNumberOfNodes
   */
  readonly targetNumberOfNodes?: number;

  /**
   * @schema RedshiftResizeProgressMessage#TargetClusterType
   */
  readonly targetClusterType?: string;

  /**
   * @schema RedshiftResizeProgressMessage#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftResizeProgressMessage#ImportTablesCompleted
   */
  readonly importTablesCompleted?: string[];

  /**
   * @schema RedshiftResizeProgressMessage#ImportTablesInProgress
   */
  readonly importTablesInProgress?: string[];

  /**
   * @schema RedshiftResizeProgressMessage#ImportTablesNotStarted
   */
  readonly importTablesNotStarted?: string[];

  /**
   * @schema RedshiftResizeProgressMessage#AvgResizeRateInMegaBytesPerSecond
   */
  readonly avgResizeRateInMegaBytesPerSecond?: number;

  /**
   * @schema RedshiftResizeProgressMessage#TotalResizeDataInMegaBytes
   */
  readonly totalResizeDataInMegaBytes?: number;

  /**
   * @schema RedshiftResizeProgressMessage#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema RedshiftResizeProgressMessage#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema RedshiftResizeProgressMessage#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

  /**
   * @schema RedshiftResizeProgressMessage#ResizeType
   */
  readonly resizeType?: string;

  /**
   * @schema RedshiftResizeProgressMessage#Message
   */
  readonly message?: string;

  /**
   * @schema RedshiftResizeProgressMessage#TargetEncryptionType
   */
  readonly targetEncryptionType?: string;

  /**
   * @schema RedshiftResizeProgressMessage#DataTransferProgressPercent
   */
  readonly dataTransferProgressPercent?: number;

}

/**
 * Converts an object of type 'RedshiftResizeProgressMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftResizeProgressMessage(obj: RedshiftResizeProgressMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetNodeType': obj.targetNodeType,
    'TargetNumberOfNodes': obj.targetNumberOfNodes,
    'TargetClusterType': obj.targetClusterType,
    'Status': obj.status,
    'ImportTablesCompleted': obj.importTablesCompleted?.map(y => y),
    'ImportTablesInProgress': obj.importTablesInProgress?.map(y => y),
    'ImportTablesNotStarted': obj.importTablesNotStarted?.map(y => y),
    'AvgResizeRateInMegaBytesPerSecond': obj.avgResizeRateInMegaBytesPerSecond,
    'TotalResizeDataInMegaBytes': obj.totalResizeDataInMegaBytes,
    'ProgressInMegaBytes': obj.progressInMegaBytes,
    'ElapsedTimeInSeconds': obj.elapsedTimeInSeconds,
    'EstimatedTimeToCompletionInSeconds': obj.estimatedTimeToCompletionInSeconds,
    'ResizeType': obj.resizeType,
    'Message': obj.message,
    'TargetEncryptionType': obj.targetEncryptionType,
    'DataTransferProgressPercent': obj.dataTransferProgressPercent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCopyClusterSnapshotMessage
 */
export interface RedshiftCopyClusterSnapshotMessage {
  /**
   * @schema RedshiftCopyClusterSnapshotMessage#SourceSnapshotIdentifier
   */
  readonly sourceSnapshotIdentifier?: string;

  /**
   * @schema RedshiftCopyClusterSnapshotMessage#SourceSnapshotClusterIdentifier
   */
  readonly sourceSnapshotClusterIdentifier?: string;

  /**
   * @schema RedshiftCopyClusterSnapshotMessage#TargetSnapshotIdentifier
   */
  readonly targetSnapshotIdentifier?: string;

  /**
   * @schema RedshiftCopyClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

}

/**
 * Converts an object of type 'RedshiftCopyClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCopyClusterSnapshotMessage(obj: RedshiftCopyClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceSnapshotIdentifier': obj.sourceSnapshotIdentifier,
    'SourceSnapshotClusterIdentifier': obj.sourceSnapshotClusterIdentifier,
    'TargetSnapshotIdentifier': obj.targetSnapshotIdentifier,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCopyClusterSnapshotResult
 */
export interface RedshiftCopyClusterSnapshotResult {
  /**
   * @schema RedshiftCopyClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * Converts an object of type 'RedshiftCopyClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCopyClusterSnapshotResult(obj: RedshiftCopyClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Snapshot': toJson_RedshiftSnapshot(obj.snapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateAuthenticationProfileMessage
 */
export interface RedshiftCreateAuthenticationProfileMessage {
  /**
   * @schema RedshiftCreateAuthenticationProfileMessage#AuthenticationProfileName
   */
  readonly authenticationProfileName?: string;

  /**
   * @schema RedshiftCreateAuthenticationProfileMessage#AuthenticationProfileContent
   */
  readonly authenticationProfileContent?: string;

}

/**
 * Converts an object of type 'RedshiftCreateAuthenticationProfileMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateAuthenticationProfileMessage(obj: RedshiftCreateAuthenticationProfileMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationProfileName': obj.authenticationProfileName,
    'AuthenticationProfileContent': obj.authenticationProfileContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateAuthenticationProfileResult
 */
export interface RedshiftCreateAuthenticationProfileResult {
  /**
   * @schema RedshiftCreateAuthenticationProfileResult#AuthenticationProfileName
   */
  readonly authenticationProfileName?: string;

  /**
   * @schema RedshiftCreateAuthenticationProfileResult#AuthenticationProfileContent
   */
  readonly authenticationProfileContent?: string;

}

/**
 * Converts an object of type 'RedshiftCreateAuthenticationProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateAuthenticationProfileResult(obj: RedshiftCreateAuthenticationProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationProfileName': obj.authenticationProfileName,
    'AuthenticationProfileContent': obj.authenticationProfileContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateClusterMessage
 */
export interface RedshiftCreateClusterMessage {
  /**
   * @schema RedshiftCreateClusterMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RedshiftCreateClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftCreateClusterMessage#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema RedshiftCreateClusterMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftCreateClusterMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RedshiftCreateClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RedshiftCreateClusterMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: string[];

  /**
   * @schema RedshiftCreateClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RedshiftCreateClusterMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftCreateClusterMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RedshiftCreateClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RedshiftCreateClusterMessage#ClusterParameterGroupName
   */
  readonly clusterParameterGroupName?: string;

  /**
   * @schema RedshiftCreateClusterMessage#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftCreateClusterMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftCreateClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RedshiftCreateClusterMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftCreateClusterMessage#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema RedshiftCreateClusterMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftCreateClusterMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RedshiftCreateClusterMessage#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RedshiftCreateClusterMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftCreateClusterMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftCreateClusterMessage#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema RedshiftCreateClusterMessage#Tags
   */
  readonly tags?: RedshiftTag[];

  /**
   * @schema RedshiftCreateClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftCreateClusterMessage#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftCreateClusterMessage#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema RedshiftCreateClusterMessage#IamRoles
   */
  readonly iamRoles?: string[];

  /**
   * @schema RedshiftCreateClusterMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftCreateClusterMessage#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

  /**
   * @schema RedshiftCreateClusterMessage#AvailabilityZoneRelocation
   */
  readonly availabilityZoneRelocation?: boolean;

  /**
   * @schema RedshiftCreateClusterMessage#AquaConfigurationStatus
   */
  readonly aquaConfigurationStatus?: string;

}

/**
 * Converts an object of type 'RedshiftCreateClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateClusterMessage(obj: RedshiftCreateClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBName': obj.dbName,
    'ClusterIdentifier': obj.clusterIdentifier,
    'ClusterType': obj.clusterType,
    'NodeType': obj.nodeType,
    'MasterUsername': obj.masterUsername,
    'MasterUserPassword': obj.masterUserPassword,
    'ClusterSecurityGroups': obj.clusterSecurityGroups?.map(y => y),
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'ClusterSubnetGroupName': obj.clusterSubnetGroupName,
    'AvailabilityZone': obj.availabilityZone,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'ClusterParameterGroupName': obj.clusterParameterGroupName,
    'AutomatedSnapshotRetentionPeriod': obj.automatedSnapshotRetentionPeriod,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'Port': obj.port,
    'ClusterVersion': obj.clusterVersion,
    'AllowVersionUpgrade': obj.allowVersionUpgrade,
    'NumberOfNodes': obj.numberOfNodes,
    'PubliclyAccessible': obj.publiclyAccessible,
    'Encrypted': obj.encrypted,
    'HsmClientCertificateIdentifier': obj.hsmClientCertificateIdentifier,
    'HsmConfigurationIdentifier': obj.hsmConfigurationIdentifier,
    'ElasticIp': obj.elasticIp,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
    'KmsKeyId': obj.kmsKeyId,
    'EnhancedVpcRouting': obj.enhancedVpcRouting,
    'AdditionalInfo': obj.additionalInfo,
    'IamRoles': obj.iamRoles?.map(y => y),
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'SnapshotScheduleIdentifier': obj.snapshotScheduleIdentifier,
    'AvailabilityZoneRelocation': obj.availabilityZoneRelocation,
    'AquaConfigurationStatus': obj.aquaConfigurationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateClusterResult
 */
export interface RedshiftCreateClusterResult {
  /**
   * @schema RedshiftCreateClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftCreateClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateClusterResult(obj: RedshiftCreateClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateClusterParameterGroupMessage
 */
export interface RedshiftCreateClusterParameterGroupMessage {
  /**
   * @schema RedshiftCreateClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftCreateClusterParameterGroupMessage#ParameterGroupFamily
   */
  readonly parameterGroupFamily?: string;

  /**
   * @schema RedshiftCreateClusterParameterGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftCreateClusterParameterGroupMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftCreateClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateClusterParameterGroupMessage(obj: RedshiftCreateClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'ParameterGroupFamily': obj.parameterGroupFamily,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateClusterParameterGroupResult
 */
export interface RedshiftCreateClusterParameterGroupResult {
  /**
   * @schema RedshiftCreateClusterParameterGroupResult#ClusterParameterGroup
   */
  readonly clusterParameterGroup?: RedshiftClusterParameterGroup;

}

/**
 * Converts an object of type 'RedshiftCreateClusterParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateClusterParameterGroupResult(obj: RedshiftCreateClusterParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterParameterGroup': toJson_RedshiftClusterParameterGroup(obj.clusterParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateClusterSecurityGroupMessage
 */
export interface RedshiftCreateClusterSecurityGroupMessage {
  /**
   * @schema RedshiftCreateClusterSecurityGroupMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema RedshiftCreateClusterSecurityGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftCreateClusterSecurityGroupMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftCreateClusterSecurityGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateClusterSecurityGroupMessage(obj: RedshiftCreateClusterSecurityGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroupName': obj.clusterSecurityGroupName,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateClusterSecurityGroupResult
 */
export interface RedshiftCreateClusterSecurityGroupResult {
  /**
   * @schema RedshiftCreateClusterSecurityGroupResult#ClusterSecurityGroup
   */
  readonly clusterSecurityGroup?: RedshiftClusterSecurityGroup;

}

/**
 * Converts an object of type 'RedshiftCreateClusterSecurityGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateClusterSecurityGroupResult(obj: RedshiftCreateClusterSecurityGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroup': toJson_RedshiftClusterSecurityGroup(obj.clusterSecurityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateClusterSnapshotMessage
 */
export interface RedshiftCreateClusterSnapshotMessage {
  /**
   * @schema RedshiftCreateClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftCreateClusterSnapshotMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftCreateClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftCreateClusterSnapshotMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftCreateClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateClusterSnapshotMessage(obj: RedshiftCreateClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'ClusterIdentifier': obj.clusterIdentifier,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateClusterSnapshotResult
 */
export interface RedshiftCreateClusterSnapshotResult {
  /**
   * @schema RedshiftCreateClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * Converts an object of type 'RedshiftCreateClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateClusterSnapshotResult(obj: RedshiftCreateClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Snapshot': toJson_RedshiftSnapshot(obj.snapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateClusterSubnetGroupMessage
 */
export interface RedshiftCreateClusterSubnetGroupMessage {
  /**
   * @schema RedshiftCreateClusterSubnetGroupMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftCreateClusterSubnetGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftCreateClusterSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema RedshiftCreateClusterSubnetGroupMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftCreateClusterSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateClusterSubnetGroupMessage(obj: RedshiftCreateClusterSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSubnetGroupName': obj.clusterSubnetGroupName,
    'Description': obj.description,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateClusterSubnetGroupResult
 */
export interface RedshiftCreateClusterSubnetGroupResult {
  /**
   * @schema RedshiftCreateClusterSubnetGroupResult#ClusterSubnetGroup
   */
  readonly clusterSubnetGroup?: RedshiftClusterSubnetGroup;

}

/**
 * Converts an object of type 'RedshiftCreateClusterSubnetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateClusterSubnetGroupResult(obj: RedshiftCreateClusterSubnetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSubnetGroup': toJson_RedshiftClusterSubnetGroup(obj.clusterSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateEndpointAccessMessage
 */
export interface RedshiftCreateEndpointAccessMessage {
  /**
   * @schema RedshiftCreateEndpointAccessMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftCreateEndpointAccessMessage#ResourceOwner
   */
  readonly resourceOwner?: string;

  /**
   * @schema RedshiftCreateEndpointAccessMessage#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema RedshiftCreateEndpointAccessMessage#SubnetGroupName
   */
  readonly subnetGroupName?: string;

  /**
   * @schema RedshiftCreateEndpointAccessMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

}

/**
 * Converts an object of type 'RedshiftCreateEndpointAccessMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateEndpointAccessMessage(obj: RedshiftCreateEndpointAccessMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ResourceOwner': obj.resourceOwner,
    'EndpointName': obj.endpointName,
    'SubnetGroupName': obj.subnetGroupName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEndpointAccess
 */
export interface RedshiftEndpointAccess {
  /**
   * @schema RedshiftEndpointAccess#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftEndpointAccess#ResourceOwner
   */
  readonly resourceOwner?: string;

  /**
   * @schema RedshiftEndpointAccess#SubnetGroupName
   */
  readonly subnetGroupName?: string;

  /**
   * @schema RedshiftEndpointAccess#EndpointStatus
   */
  readonly endpointStatus?: string;

  /**
   * @schema RedshiftEndpointAccess#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema RedshiftEndpointAccess#EndpointCreateTime
   */
  readonly endpointCreateTime?: string;

  /**
   * @schema RedshiftEndpointAccess#Port
   */
  readonly port?: number;

  /**
   * @schema RedshiftEndpointAccess#Address
   */
  readonly address?: string;

  /**
   * @schema RedshiftEndpointAccess#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: RedshiftVpcSecurityGroupMembership[];

  /**
   * @schema RedshiftEndpointAccess#VpcEndpoint
   */
  readonly vpcEndpoint?: RedshiftVpcEndpoint;

}

/**
 * Converts an object of type 'RedshiftEndpointAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEndpointAccess(obj: RedshiftEndpointAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ResourceOwner': obj.resourceOwner,
    'SubnetGroupName': obj.subnetGroupName,
    'EndpointStatus': obj.endpointStatus,
    'EndpointName': obj.endpointName,
    'EndpointCreateTime': obj.endpointCreateTime,
    'Port': obj.port,
    'Address': obj.address,
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_RedshiftVpcSecurityGroupMembership(y)),
    'VpcEndpoint': toJson_RedshiftVpcEndpoint(obj.vpcEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateEventSubscriptionMessage
 */
export interface RedshiftCreateEventSubscriptionMessage {
  /**
   * @schema RedshiftCreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#Severity
   */
  readonly severity?: string;

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftCreateEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateEventSubscriptionMessage(obj: RedshiftCreateEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'SnsTopicArn': obj.snsTopicArn,
    'SourceType': obj.sourceType,
    'SourceIds': obj.sourceIds?.map(y => y),
    'EventCategories': obj.eventCategories?.map(y => y),
    'Severity': obj.severity,
    'Enabled': obj.enabled,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateEventSubscriptionResult
 */
export interface RedshiftCreateEventSubscriptionResult {
  /**
   * @schema RedshiftCreateEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RedshiftEventSubscription;

}

/**
 * Converts an object of type 'RedshiftCreateEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateEventSubscriptionResult(obj: RedshiftCreateEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_RedshiftEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateHsmClientCertificateMessage
 */
export interface RedshiftCreateHsmClientCertificateMessage {
  /**
   * @schema RedshiftCreateHsmClientCertificateMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftCreateHsmClientCertificateMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftCreateHsmClientCertificateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateHsmClientCertificateMessage(obj: RedshiftCreateHsmClientCertificateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmClientCertificateIdentifier': obj.hsmClientCertificateIdentifier,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateHsmClientCertificateResult
 */
export interface RedshiftCreateHsmClientCertificateResult {
  /**
   * @schema RedshiftCreateHsmClientCertificateResult#HsmClientCertificate
   */
  readonly hsmClientCertificate?: RedshiftHsmClientCertificate;

}

/**
 * Converts an object of type 'RedshiftCreateHsmClientCertificateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateHsmClientCertificateResult(obj: RedshiftCreateHsmClientCertificateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmClientCertificate': toJson_RedshiftHsmClientCertificate(obj.hsmClientCertificate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateHsmConfigurationMessage
 */
export interface RedshiftCreateHsmConfigurationMessage {
  /**
   * @schema RedshiftCreateHsmConfigurationMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#HsmIpAddress
   */
  readonly hsmIpAddress?: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#HsmPartitionName
   */
  readonly hsmPartitionName?: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#HsmPartitionPassword
   */
  readonly hsmPartitionPassword?: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#HsmServerPublicCertificate
   */
  readonly hsmServerPublicCertificate?: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftCreateHsmConfigurationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateHsmConfigurationMessage(obj: RedshiftCreateHsmConfigurationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmConfigurationIdentifier': obj.hsmConfigurationIdentifier,
    'Description': obj.description,
    'HsmIpAddress': obj.hsmIpAddress,
    'HsmPartitionName': obj.hsmPartitionName,
    'HsmPartitionPassword': obj.hsmPartitionPassword,
    'HsmServerPublicCertificate': obj.hsmServerPublicCertificate,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateHsmConfigurationResult
 */
export interface RedshiftCreateHsmConfigurationResult {
  /**
   * @schema RedshiftCreateHsmConfigurationResult#HsmConfiguration
   */
  readonly hsmConfiguration?: RedshiftHsmConfiguration;

}

/**
 * Converts an object of type 'RedshiftCreateHsmConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateHsmConfigurationResult(obj: RedshiftCreateHsmConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmConfiguration': toJson_RedshiftHsmConfiguration(obj.hsmConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateScheduledActionMessage
 */
export interface RedshiftCreateScheduledActionMessage {
  /**
   * @schema RedshiftCreateScheduledActionMessage#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#TargetAction
   */
  readonly targetAction?: RedshiftScheduledActionType;

  /**
   * @schema RedshiftCreateScheduledActionMessage#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#ScheduledActionDescription
   */
  readonly scheduledActionDescription?: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#Enable
   */
  readonly enable?: boolean;

}

/**
 * Converts an object of type 'RedshiftCreateScheduledActionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateScheduledActionMessage(obj: RedshiftCreateScheduledActionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledActionName': obj.scheduledActionName,
    'TargetAction': toJson_RedshiftScheduledActionType(obj.targetAction),
    'Schedule': obj.schedule,
    'IamRole': obj.iamRole,
    'ScheduledActionDescription': obj.scheduledActionDescription,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Enable': obj.enable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftScheduledAction
 */
export interface RedshiftScheduledAction {
  /**
   * @schema RedshiftScheduledAction#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema RedshiftScheduledAction#TargetAction
   */
  readonly targetAction?: RedshiftScheduledActionType;

  /**
   * @schema RedshiftScheduledAction#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema RedshiftScheduledAction#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RedshiftScheduledAction#ScheduledActionDescription
   */
  readonly scheduledActionDescription?: string;

  /**
   * @schema RedshiftScheduledAction#State
   */
  readonly state?: string;

  /**
   * @schema RedshiftScheduledAction#NextInvocations
   */
  readonly nextInvocations?: string[];

  /**
   * @schema RedshiftScheduledAction#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftScheduledAction#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'RedshiftScheduledAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftScheduledAction(obj: RedshiftScheduledAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledActionName': obj.scheduledActionName,
    'TargetAction': toJson_RedshiftScheduledActionType(obj.targetAction),
    'Schedule': obj.schedule,
    'IamRole': obj.iamRole,
    'ScheduledActionDescription': obj.scheduledActionDescription,
    'State': obj.state,
    'NextInvocations': obj.nextInvocations?.map(y => y),
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateSnapshotCopyGrantMessage
 */
export interface RedshiftCreateSnapshotCopyGrantMessage {
  /**
   * @schema RedshiftCreateSnapshotCopyGrantMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

  /**
   * @schema RedshiftCreateSnapshotCopyGrantMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftCreateSnapshotCopyGrantMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftCreateSnapshotCopyGrantMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateSnapshotCopyGrantMessage(obj: RedshiftCreateSnapshotCopyGrantMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotCopyGrantName': obj.snapshotCopyGrantName,
    'KmsKeyId': obj.kmsKeyId,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateSnapshotCopyGrantResult
 */
export interface RedshiftCreateSnapshotCopyGrantResult {
  /**
   * @schema RedshiftCreateSnapshotCopyGrantResult#SnapshotCopyGrant
   */
  readonly snapshotCopyGrant?: RedshiftSnapshotCopyGrant;

}

/**
 * Converts an object of type 'RedshiftCreateSnapshotCopyGrantResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateSnapshotCopyGrantResult(obj: RedshiftCreateSnapshotCopyGrantResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotCopyGrant': toJson_RedshiftSnapshotCopyGrant(obj.snapshotCopyGrant),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateSnapshotScheduleMessage
 */
export interface RedshiftCreateSnapshotScheduleMessage {
  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#ScheduleDefinitions
   */
  readonly scheduleDefinitions?: string[];

  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#ScheduleDescription
   */
  readonly scheduleDescription?: string;

  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#Tags
   */
  readonly tags?: RedshiftTag[];

  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#NextInvocations
   */
  readonly nextInvocations?: number;

}

/**
 * Converts an object of type 'RedshiftCreateSnapshotScheduleMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateSnapshotScheduleMessage(obj: RedshiftCreateSnapshotScheduleMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleDefinitions': obj.scheduleDefinitions?.map(y => y),
    'ScheduleIdentifier': obj.scheduleIdentifier,
    'ScheduleDescription': obj.scheduleDescription,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
    'DryRun': obj.dryRun,
    'NextInvocations': obj.nextInvocations,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftSnapshotSchedule
 */
export interface RedshiftSnapshotSchedule {
  /**
   * @schema RedshiftSnapshotSchedule#ScheduleDefinitions
   */
  readonly scheduleDefinitions?: string[];

  /**
   * @schema RedshiftSnapshotSchedule#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema RedshiftSnapshotSchedule#ScheduleDescription
   */
  readonly scheduleDescription?: string;

  /**
   * @schema RedshiftSnapshotSchedule#Tags
   */
  readonly tags?: RedshiftTag[];

  /**
   * @schema RedshiftSnapshotSchedule#NextInvocations
   */
  readonly nextInvocations?: string[];

  /**
   * @schema RedshiftSnapshotSchedule#AssociatedClusterCount
   */
  readonly associatedClusterCount?: number;

  /**
   * @schema RedshiftSnapshotSchedule#AssociatedClusters
   */
  readonly associatedClusters?: RedshiftClusterAssociatedToSchedule[];

}

/**
 * Converts an object of type 'RedshiftSnapshotSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftSnapshotSchedule(obj: RedshiftSnapshotSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleDefinitions': obj.scheduleDefinitions?.map(y => y),
    'ScheduleIdentifier': obj.scheduleIdentifier,
    'ScheduleDescription': obj.scheduleDescription,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
    'NextInvocations': obj.nextInvocations?.map(y => y),
    'AssociatedClusterCount': obj.associatedClusterCount,
    'AssociatedClusters': obj.associatedClusters?.map(y => toJson_RedshiftClusterAssociatedToSchedule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateTagsMessage
 */
export interface RedshiftCreateTagsMessage {
  /**
   * @schema RedshiftCreateTagsMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema RedshiftCreateTagsMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftCreateTagsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateTagsMessage(obj: RedshiftCreateTagsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCreateUsageLimitMessage
 */
export interface RedshiftCreateUsageLimitMessage {
  /**
   * @schema RedshiftCreateUsageLimitMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftCreateUsageLimitMessage#FeatureType
   */
  readonly featureType?: string;

  /**
   * @schema RedshiftCreateUsageLimitMessage#LimitType
   */
  readonly limitType?: string;

  /**
   * @schema RedshiftCreateUsageLimitMessage#Amount
   */
  readonly amount?: number;

  /**
   * @schema RedshiftCreateUsageLimitMessage#Period
   */
  readonly period?: string;

  /**
   * @schema RedshiftCreateUsageLimitMessage#BreachAction
   */
  readonly breachAction?: string;

  /**
   * @schema RedshiftCreateUsageLimitMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftCreateUsageLimitMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCreateUsageLimitMessage(obj: RedshiftCreateUsageLimitMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'FeatureType': obj.featureType,
    'LimitType': obj.limitType,
    'Amount': obj.amount,
    'Period': obj.period,
    'BreachAction': obj.breachAction,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftUsageLimit
 */
export interface RedshiftUsageLimit {
  /**
   * @schema RedshiftUsageLimit#UsageLimitId
   */
  readonly usageLimitId?: string;

  /**
   * @schema RedshiftUsageLimit#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftUsageLimit#FeatureType
   */
  readonly featureType?: string;

  /**
   * @schema RedshiftUsageLimit#LimitType
   */
  readonly limitType?: string;

  /**
   * @schema RedshiftUsageLimit#Amount
   */
  readonly amount?: number;

  /**
   * @schema RedshiftUsageLimit#Period
   */
  readonly period?: string;

  /**
   * @schema RedshiftUsageLimit#BreachAction
   */
  readonly breachAction?: string;

  /**
   * @schema RedshiftUsageLimit#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftUsageLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftUsageLimit(obj: RedshiftUsageLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UsageLimitId': obj.usageLimitId,
    'ClusterIdentifier': obj.clusterIdentifier,
    'FeatureType': obj.featureType,
    'LimitType': obj.limitType,
    'Amount': obj.amount,
    'Period': obj.period,
    'BreachAction': obj.breachAction,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeauthorizeDataShareMessage
 */
export interface RedshiftDeauthorizeDataShareMessage {
  /**
   * @schema RedshiftDeauthorizeDataShareMessage#DataShareArn
   */
  readonly dataShareArn?: string;

  /**
   * @schema RedshiftDeauthorizeDataShareMessage#ConsumerIdentifier
   */
  readonly consumerIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftDeauthorizeDataShareMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeauthorizeDataShareMessage(obj: RedshiftDeauthorizeDataShareMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataShareArn': obj.dataShareArn,
    'ConsumerIdentifier': obj.consumerIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteAuthenticationProfileMessage
 */
export interface RedshiftDeleteAuthenticationProfileMessage {
  /**
   * @schema RedshiftDeleteAuthenticationProfileMessage#AuthenticationProfileName
   */
  readonly authenticationProfileName?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteAuthenticationProfileMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteAuthenticationProfileMessage(obj: RedshiftDeleteAuthenticationProfileMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationProfileName': obj.authenticationProfileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteAuthenticationProfileResult
 */
export interface RedshiftDeleteAuthenticationProfileResult {
  /**
   * @schema RedshiftDeleteAuthenticationProfileResult#AuthenticationProfileName
   */
  readonly authenticationProfileName?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteAuthenticationProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteAuthenticationProfileResult(obj: RedshiftDeleteAuthenticationProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationProfileName': obj.authenticationProfileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteClusterMessage
 */
export interface RedshiftDeleteClusterMessage {
  /**
   * @schema RedshiftDeleteClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDeleteClusterMessage#SkipFinalClusterSnapshot
   */
  readonly skipFinalClusterSnapshot?: boolean;

  /**
   * @schema RedshiftDeleteClusterMessage#FinalClusterSnapshotIdentifier
   */
  readonly finalClusterSnapshotIdentifier?: string;

  /**
   * @schema RedshiftDeleteClusterMessage#FinalClusterSnapshotRetentionPeriod
   */
  readonly finalClusterSnapshotRetentionPeriod?: number;

}

/**
 * Converts an object of type 'RedshiftDeleteClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteClusterMessage(obj: RedshiftDeleteClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'SkipFinalClusterSnapshot': obj.skipFinalClusterSnapshot,
    'FinalClusterSnapshotIdentifier': obj.finalClusterSnapshotIdentifier,
    'FinalClusterSnapshotRetentionPeriod': obj.finalClusterSnapshotRetentionPeriod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteClusterResult
 */
export interface RedshiftDeleteClusterResult {
  /**
   * @schema RedshiftDeleteClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftDeleteClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteClusterResult(obj: RedshiftDeleteClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteClusterParameterGroupMessage
 */
export interface RedshiftDeleteClusterParameterGroupMessage {
  /**
   * @schema RedshiftDeleteClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteClusterParameterGroupMessage(obj: RedshiftDeleteClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteClusterSecurityGroupMessage
 */
export interface RedshiftDeleteClusterSecurityGroupMessage {
  /**
   * @schema RedshiftDeleteClusterSecurityGroupMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteClusterSecurityGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteClusterSecurityGroupMessage(obj: RedshiftDeleteClusterSecurityGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroupName': obj.clusterSecurityGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteClusterSnapshotMessage
 */
export interface RedshiftDeleteClusterSnapshotMessage {
  /**
   * @schema RedshiftDeleteClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftDeleteClusterSnapshotMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteClusterSnapshotMessage(obj: RedshiftDeleteClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'SnapshotClusterIdentifier': obj.snapshotClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteClusterSnapshotResult
 */
export interface RedshiftDeleteClusterSnapshotResult {
  /**
   * @schema RedshiftDeleteClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * Converts an object of type 'RedshiftDeleteClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteClusterSnapshotResult(obj: RedshiftDeleteClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Snapshot': toJson_RedshiftSnapshot(obj.snapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteClusterSubnetGroupMessage
 */
export interface RedshiftDeleteClusterSubnetGroupMessage {
  /**
   * @schema RedshiftDeleteClusterSubnetGroupMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteClusterSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteClusterSubnetGroupMessage(obj: RedshiftDeleteClusterSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSubnetGroupName': obj.clusterSubnetGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteEndpointAccessMessage
 */
export interface RedshiftDeleteEndpointAccessMessage {
  /**
   * @schema RedshiftDeleteEndpointAccessMessage#EndpointName
   */
  readonly endpointName?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteEndpointAccessMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteEndpointAccessMessage(obj: RedshiftDeleteEndpointAccessMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointName': obj.endpointName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteEventSubscriptionMessage
 */
export interface RedshiftDeleteEventSubscriptionMessage {
  /**
   * @schema RedshiftDeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteEventSubscriptionMessage(obj: RedshiftDeleteEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteHsmClientCertificateMessage
 */
export interface RedshiftDeleteHsmClientCertificateMessage {
  /**
   * @schema RedshiftDeleteHsmClientCertificateMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteHsmClientCertificateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteHsmClientCertificateMessage(obj: RedshiftDeleteHsmClientCertificateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmClientCertificateIdentifier': obj.hsmClientCertificateIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteHsmConfigurationMessage
 */
export interface RedshiftDeleteHsmConfigurationMessage {
  /**
   * @schema RedshiftDeleteHsmConfigurationMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteHsmConfigurationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteHsmConfigurationMessage(obj: RedshiftDeleteHsmConfigurationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmConfigurationIdentifier': obj.hsmConfigurationIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteScheduledActionMessage
 */
export interface RedshiftDeleteScheduledActionMessage {
  /**
   * @schema RedshiftDeleteScheduledActionMessage#ScheduledActionName
   */
  readonly scheduledActionName?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteScheduledActionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteScheduledActionMessage(obj: RedshiftDeleteScheduledActionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledActionName': obj.scheduledActionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteSnapshotCopyGrantMessage
 */
export interface RedshiftDeleteSnapshotCopyGrantMessage {
  /**
   * @schema RedshiftDeleteSnapshotCopyGrantMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteSnapshotCopyGrantMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteSnapshotCopyGrantMessage(obj: RedshiftDeleteSnapshotCopyGrantMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotCopyGrantName': obj.snapshotCopyGrantName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteSnapshotScheduleMessage
 */
export interface RedshiftDeleteSnapshotScheduleMessage {
  /**
   * @schema RedshiftDeleteSnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteSnapshotScheduleMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteSnapshotScheduleMessage(obj: RedshiftDeleteSnapshotScheduleMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleIdentifier': obj.scheduleIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeleteTagsMessage
 */
export interface RedshiftDeleteTagsMessage {
  /**
   * @schema RedshiftDeleteTagsMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema RedshiftDeleteTagsMessage#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'RedshiftDeleteTagsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteTagsMessage(obj: RedshiftDeleteTagsMessage | undefined): Record<string, any> | undefined {
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
 * @schema RedshiftDeleteUsageLimitMessage
 */
export interface RedshiftDeleteUsageLimitMessage {
  /**
   * @schema RedshiftDeleteUsageLimitMessage#UsageLimitId
   */
  readonly usageLimitId?: string;

}

/**
 * Converts an object of type 'RedshiftDeleteUsageLimitMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeleteUsageLimitMessage(obj: RedshiftDeleteUsageLimitMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UsageLimitId': obj.usageLimitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeAccountAttributesMessage
 */
export interface RedshiftDescribeAccountAttributesMessage {
  /**
   * @schema RedshiftDescribeAccountAttributesMessage#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeAccountAttributesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeAccountAttributesMessage(obj: RedshiftDescribeAccountAttributesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeNames': obj.attributeNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAccountAttributeList
 */
export interface RedshiftAccountAttributeList {
  /**
   * @schema RedshiftAccountAttributeList#AccountAttributes
   */
  readonly accountAttributes?: RedshiftAccountAttribute[];

}

/**
 * Converts an object of type 'RedshiftAccountAttributeList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAccountAttributeList(obj: RedshiftAccountAttributeList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAttributes': obj.accountAttributes?.map(y => toJson_RedshiftAccountAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeAuthenticationProfilesMessage
 */
export interface RedshiftDescribeAuthenticationProfilesMessage {
  /**
   * @schema RedshiftDescribeAuthenticationProfilesMessage#AuthenticationProfileName
   */
  readonly authenticationProfileName?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeAuthenticationProfilesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeAuthenticationProfilesMessage(obj: RedshiftDescribeAuthenticationProfilesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationProfileName': obj.authenticationProfileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeAuthenticationProfilesResult
 */
export interface RedshiftDescribeAuthenticationProfilesResult {
  /**
   * @schema RedshiftDescribeAuthenticationProfilesResult#AuthenticationProfiles
   */
  readonly authenticationProfiles?: RedshiftAuthenticationProfile[];

}

/**
 * Converts an object of type 'RedshiftDescribeAuthenticationProfilesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeAuthenticationProfilesResult(obj: RedshiftDescribeAuthenticationProfilesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationProfiles': obj.authenticationProfiles?.map(y => toJson_RedshiftAuthenticationProfile(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeClusterDbRevisionsMessage
 */
export interface RedshiftDescribeClusterDbRevisionsMessage {
  /**
   * @schema RedshiftDescribeClusterDbRevisionsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeClusterDbRevisionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterDbRevisionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeClusterDbRevisionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeClusterDbRevisionsMessage(obj: RedshiftDescribeClusterDbRevisionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterDbRevisionsMessage
 */
export interface RedshiftClusterDbRevisionsMessage {
  /**
   * @schema RedshiftClusterDbRevisionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClusterDbRevisionsMessage#ClusterDbRevisions
   */
  readonly clusterDbRevisions?: RedshiftClusterDbRevision[];

}

/**
 * Converts an object of type 'RedshiftClusterDbRevisionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterDbRevisionsMessage(obj: RedshiftClusterDbRevisionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ClusterDbRevisions': obj.clusterDbRevisions?.map(y => toJson_RedshiftClusterDbRevision(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeClusterParameterGroupsMessage
 */
export interface RedshiftDescribeClusterParameterGroupsMessage {
  /**
   * @schema RedshiftDescribeClusterParameterGroupsMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftDescribeClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeClusterParameterGroupsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeClusterParameterGroupsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeClusterParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeClusterParameterGroupsMessage(obj: RedshiftDescribeClusterParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterParameterGroupsMessage
 */
export interface RedshiftClusterParameterGroupsMessage {
  /**
   * @schema RedshiftClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClusterParameterGroupsMessage#ParameterGroups
   */
  readonly parameterGroups?: RedshiftClusterParameterGroup[];

}

/**
 * Converts an object of type 'RedshiftClusterParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterParameterGroupsMessage(obj: RedshiftClusterParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ParameterGroups': obj.parameterGroups?.map(y => toJson_RedshiftClusterParameterGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeClusterParametersMessage
 */
export interface RedshiftDescribeClusterParametersMessage {
  /**
   * @schema RedshiftDescribeClusterParametersMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftDescribeClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema RedshiftDescribeClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeClusterParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeClusterParametersMessage(obj: RedshiftDescribeClusterParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'Source': obj.source,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterParameterGroupDetails
 */
export interface RedshiftClusterParameterGroupDetails {
  /**
   * @schema RedshiftClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: RedshiftParameter[];

  /**
   * @schema RedshiftClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftClusterParameterGroupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterParameterGroupDetails(obj: RedshiftClusterParameterGroupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_RedshiftParameter(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeClusterSecurityGroupsMessage
 */
export interface RedshiftDescribeClusterSecurityGroupsMessage {
  /**
   * @schema RedshiftDescribeClusterSecurityGroupsMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema RedshiftDescribeClusterSecurityGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterSecurityGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeClusterSecurityGroupsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeClusterSecurityGroupsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeClusterSecurityGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeClusterSecurityGroupsMessage(obj: RedshiftDescribeClusterSecurityGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroupName': obj.clusterSecurityGroupName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterSecurityGroupMessage
 */
export interface RedshiftClusterSecurityGroupMessage {
  /**
   * @schema RedshiftClusterSecurityGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClusterSecurityGroupMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: RedshiftClusterSecurityGroup[];

}

/**
 * Converts an object of type 'RedshiftClusterSecurityGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterSecurityGroupMessage(obj: RedshiftClusterSecurityGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ClusterSecurityGroups': obj.clusterSecurityGroups?.map(y => toJson_RedshiftClusterSecurityGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeClusterSnapshotsMessage
 */
export interface RedshiftDescribeClusterSnapshotsMessage {
  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#TagValues
   */
  readonly tagValues?: string[];

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#ClusterExists
   */
  readonly clusterExists?: boolean;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#SortingEntities
   */
  readonly sortingEntities?: RedshiftSnapshotSortingEntity[];

}

/**
 * Converts an object of type 'RedshiftDescribeClusterSnapshotsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeClusterSnapshotsMessage(obj: RedshiftDescribeClusterSnapshotsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'SnapshotType': obj.snapshotType,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'OwnerAccount': obj.ownerAccount,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
    'ClusterExists': obj.clusterExists,
    'SortingEntities': obj.sortingEntities?.map(y => toJson_RedshiftSnapshotSortingEntity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftSnapshotMessage
 */
export interface RedshiftSnapshotMessage {
  /**
   * @schema RedshiftSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftSnapshotMessage#Snapshots
   */
  readonly snapshots?: RedshiftSnapshot[];

}

/**
 * Converts an object of type 'RedshiftSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftSnapshotMessage(obj: RedshiftSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Snapshots': obj.snapshots?.map(y => toJson_RedshiftSnapshot(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeClusterSubnetGroupsMessage
 */
export interface RedshiftDescribeClusterSubnetGroupsMessage {
  /**
   * @schema RedshiftDescribeClusterSubnetGroupsMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftDescribeClusterSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeClusterSubnetGroupsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeClusterSubnetGroupsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeClusterSubnetGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeClusterSubnetGroupsMessage(obj: RedshiftDescribeClusterSubnetGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSubnetGroupName': obj.clusterSubnetGroupName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterSubnetGroupMessage
 */
export interface RedshiftClusterSubnetGroupMessage {
  /**
   * @schema RedshiftClusterSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClusterSubnetGroupMessage#ClusterSubnetGroups
   */
  readonly clusterSubnetGroups?: RedshiftClusterSubnetGroup[];

}

/**
 * Converts an object of type 'RedshiftClusterSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterSubnetGroupMessage(obj: RedshiftClusterSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ClusterSubnetGroups': obj.clusterSubnetGroups?.map(y => toJson_RedshiftClusterSubnetGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeClusterTracksMessage
 */
export interface RedshiftDescribeClusterTracksMessage {
  /**
   * @schema RedshiftDescribeClusterTracksMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftDescribeClusterTracksMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterTracksMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeClusterTracksMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeClusterTracksMessage(obj: RedshiftDescribeClusterTracksMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftTrackListMessage
 */
export interface RedshiftTrackListMessage {
  /**
   * @schema RedshiftTrackListMessage#MaintenanceTracks
   */
  readonly maintenanceTracks?: RedshiftMaintenanceTrack[];

  /**
   * @schema RedshiftTrackListMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftTrackListMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftTrackListMessage(obj: RedshiftTrackListMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaintenanceTracks': obj.maintenanceTracks?.map(y => toJson_RedshiftMaintenanceTrack(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeClusterVersionsMessage
 */
export interface RedshiftDescribeClusterVersionsMessage {
  /**
   * @schema RedshiftDescribeClusterVersionsMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftDescribeClusterVersionsMessage#ClusterParameterGroupFamily
   */
  readonly clusterParameterGroupFamily?: string;

  /**
   * @schema RedshiftDescribeClusterVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterVersionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeClusterVersionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeClusterVersionsMessage(obj: RedshiftDescribeClusterVersionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterVersion': obj.clusterVersion,
    'ClusterParameterGroupFamily': obj.clusterParameterGroupFamily,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterVersionsMessage
 */
export interface RedshiftClusterVersionsMessage {
  /**
   * @schema RedshiftClusterVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClusterVersionsMessage#ClusterVersions
   */
  readonly clusterVersions?: RedshiftClusterVersion[];

}

/**
 * Converts an object of type 'RedshiftClusterVersionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterVersionsMessage(obj: RedshiftClusterVersionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ClusterVersions': obj.clusterVersions?.map(y => toJson_RedshiftClusterVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeClustersMessage
 */
export interface RedshiftDescribeClustersMessage {
  /**
   * @schema RedshiftDescribeClustersMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeClustersMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeClustersMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeClustersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeClustersMessage(obj: RedshiftDescribeClustersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClustersMessage
 */
export interface RedshiftClustersMessage {
  /**
   * @schema RedshiftClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClustersMessage#Clusters
   */
  readonly clusters?: RedshiftCluster[];

}

/**
 * Converts an object of type 'RedshiftClustersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClustersMessage(obj: RedshiftClustersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Clusters': obj.clusters?.map(y => toJson_RedshiftCluster(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeDataSharesMessage
 */
export interface RedshiftDescribeDataSharesMessage {
  /**
   * @schema RedshiftDescribeDataSharesMessage#DataShareArn
   */
  readonly dataShareArn?: string;

  /**
   * @schema RedshiftDescribeDataSharesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeDataSharesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeDataSharesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeDataSharesMessage(obj: RedshiftDescribeDataSharesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataShareArn': obj.dataShareArn,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeDataSharesResult
 */
export interface RedshiftDescribeDataSharesResult {
  /**
   * @schema RedshiftDescribeDataSharesResult#DataShares
   */
  readonly dataShares?: RedshiftDataShare[];

  /**
   * @schema RedshiftDescribeDataSharesResult#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeDataSharesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeDataSharesResult(obj: RedshiftDescribeDataSharesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataShares': obj.dataShares?.map(y => toJson_RedshiftDataShare(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeDataSharesForConsumerMessage
 */
export interface RedshiftDescribeDataSharesForConsumerMessage {
  /**
   * @schema RedshiftDescribeDataSharesForConsumerMessage#ConsumerArn
   */
  readonly consumerArn?: string;

  /**
   * @schema RedshiftDescribeDataSharesForConsumerMessage#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftDescribeDataSharesForConsumerMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeDataSharesForConsumerMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeDataSharesForConsumerMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeDataSharesForConsumerMessage(obj: RedshiftDescribeDataSharesForConsumerMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsumerArn': obj.consumerArn,
    'Status': obj.status,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeDataSharesForConsumerResult
 */
export interface RedshiftDescribeDataSharesForConsumerResult {
  /**
   * @schema RedshiftDescribeDataSharesForConsumerResult#DataShares
   */
  readonly dataShares?: RedshiftDataShare[];

  /**
   * @schema RedshiftDescribeDataSharesForConsumerResult#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeDataSharesForConsumerResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeDataSharesForConsumerResult(obj: RedshiftDescribeDataSharesForConsumerResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataShares': obj.dataShares?.map(y => toJson_RedshiftDataShare(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeDataSharesForProducerMessage
 */
export interface RedshiftDescribeDataSharesForProducerMessage {
  /**
   * @schema RedshiftDescribeDataSharesForProducerMessage#ProducerArn
   */
  readonly producerArn?: string;

  /**
   * @schema RedshiftDescribeDataSharesForProducerMessage#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftDescribeDataSharesForProducerMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeDataSharesForProducerMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeDataSharesForProducerMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeDataSharesForProducerMessage(obj: RedshiftDescribeDataSharesForProducerMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProducerArn': obj.producerArn,
    'Status': obj.status,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeDataSharesForProducerResult
 */
export interface RedshiftDescribeDataSharesForProducerResult {
  /**
   * @schema RedshiftDescribeDataSharesForProducerResult#DataShares
   */
  readonly dataShares?: RedshiftDataShare[];

  /**
   * @schema RedshiftDescribeDataSharesForProducerResult#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeDataSharesForProducerResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeDataSharesForProducerResult(obj: RedshiftDescribeDataSharesForProducerResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataShares': obj.dataShares?.map(y => toJson_RedshiftDataShare(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeDefaultClusterParametersMessage
 */
export interface RedshiftDescribeDefaultClusterParametersMessage {
  /**
   * @schema RedshiftDescribeDefaultClusterParametersMessage#ParameterGroupFamily
   */
  readonly parameterGroupFamily?: string;

  /**
   * @schema RedshiftDescribeDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeDefaultClusterParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeDefaultClusterParametersMessage(obj: RedshiftDescribeDefaultClusterParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupFamily': obj.parameterGroupFamily,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeDefaultClusterParametersResult
 */
export interface RedshiftDescribeDefaultClusterParametersResult {
  /**
   * @schema RedshiftDescribeDefaultClusterParametersResult#DefaultClusterParameters
   */
  readonly defaultClusterParameters?: RedshiftDefaultClusterParameters;

}

/**
 * Converts an object of type 'RedshiftDescribeDefaultClusterParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeDefaultClusterParametersResult(obj: RedshiftDescribeDefaultClusterParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultClusterParameters': toJson_RedshiftDefaultClusterParameters(obj.defaultClusterParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeEndpointAccessMessage
 */
export interface RedshiftDescribeEndpointAccessMessage {
  /**
   * @schema RedshiftDescribeEndpointAccessMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeEndpointAccessMessage#ResourceOwner
   */
  readonly resourceOwner?: string;

  /**
   * @schema RedshiftDescribeEndpointAccessMessage#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema RedshiftDescribeEndpointAccessMessage#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RedshiftDescribeEndpointAccessMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeEndpointAccessMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeEndpointAccessMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeEndpointAccessMessage(obj: RedshiftDescribeEndpointAccessMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ResourceOwner': obj.resourceOwner,
    'EndpointName': obj.endpointName,
    'VpcId': obj.vpcId,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEndpointAccessList
 */
export interface RedshiftEndpointAccessList {
  /**
   * @schema RedshiftEndpointAccessList#EndpointAccessList
   */
  readonly endpointAccessList?: RedshiftEndpointAccess[];

  /**
   * @schema RedshiftEndpointAccessList#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftEndpointAccessList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEndpointAccessList(obj: RedshiftEndpointAccessList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointAccessList': obj.endpointAccessList?.map(y => toJson_RedshiftEndpointAccess(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeEndpointAuthorizationMessage
 */
export interface RedshiftDescribeEndpointAuthorizationMessage {
  /**
   * @schema RedshiftDescribeEndpointAuthorizationMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeEndpointAuthorizationMessage#Account
   */
  readonly account?: string;

  /**
   * @schema RedshiftDescribeEndpointAuthorizationMessage#Grantee
   */
  readonly grantee?: boolean;

  /**
   * @schema RedshiftDescribeEndpointAuthorizationMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeEndpointAuthorizationMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeEndpointAuthorizationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeEndpointAuthorizationMessage(obj: RedshiftDescribeEndpointAuthorizationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'Account': obj.account,
    'Grantee': obj.grantee,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEndpointAuthorizationList
 */
export interface RedshiftEndpointAuthorizationList {
  /**
   * @schema RedshiftEndpointAuthorizationList#EndpointAuthorizationList
   */
  readonly endpointAuthorizationList?: RedshiftEndpointAuthorization[];

  /**
   * @schema RedshiftEndpointAuthorizationList#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftEndpointAuthorizationList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEndpointAuthorizationList(obj: RedshiftEndpointAuthorizationList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointAuthorizationList': obj.endpointAuthorizationList?.map(y => toJson_RedshiftEndpointAuthorization(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeEventCategoriesMessage
 */
export interface RedshiftDescribeEventCategoriesMessage {
  /**
   * @schema RedshiftDescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeEventCategoriesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeEventCategoriesMessage(obj: RedshiftDescribeEventCategoriesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEventCategoriesMessage
 */
export interface RedshiftEventCategoriesMessage {
  /**
   * @schema RedshiftEventCategoriesMessage#EventCategoriesMapList
   */
  readonly eventCategoriesMapList?: RedshiftEventCategoriesMap[];

}

/**
 * Converts an object of type 'RedshiftEventCategoriesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEventCategoriesMessage(obj: RedshiftEventCategoriesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventCategoriesMapList': obj.eventCategoriesMapList?.map(y => toJson_RedshiftEventCategoriesMap(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeEventSubscriptionsMessage
 */
export interface RedshiftDescribeEventSubscriptionsMessage {
  /**
   * @schema RedshiftDescribeEventSubscriptionsMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema RedshiftDescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeEventSubscriptionsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeEventSubscriptionsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeEventSubscriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeEventSubscriptionsMessage(obj: RedshiftDescribeEventSubscriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEventSubscriptionsMessage
 */
export interface RedshiftEventSubscriptionsMessage {
  /**
   * @schema RedshiftEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftEventSubscriptionsMessage#EventSubscriptionsList
   */
  readonly eventSubscriptionsList?: RedshiftEventSubscription[];

}

/**
 * Converts an object of type 'RedshiftEventSubscriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEventSubscriptionsMessage(obj: RedshiftEventSubscriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'EventSubscriptionsList': obj.eventSubscriptionsList?.map(y => toJson_RedshiftEventSubscription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeEventsMessage
 */
export interface RedshiftDescribeEventsMessage {
  /**
   * @schema RedshiftDescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema RedshiftDescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RedshiftDescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema RedshiftDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeEventsMessage(obj: RedshiftDescribeEventsMessage | undefined): Record<string, any> | undefined {
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
 * @schema RedshiftEventsMessage
 */
export interface RedshiftEventsMessage {
  /**
   * @schema RedshiftEventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftEventsMessage#Events
   */
  readonly events?: RedshiftEvent[];

}

/**
 * Converts an object of type 'RedshiftEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEventsMessage(obj: RedshiftEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Events': obj.events?.map(y => toJson_RedshiftEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeHsmClientCertificatesMessage
 */
export interface RedshiftDescribeHsmClientCertificatesMessage {
  /**
   * @schema RedshiftDescribeHsmClientCertificatesMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftDescribeHsmClientCertificatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeHsmClientCertificatesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeHsmClientCertificatesMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeHsmClientCertificatesMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeHsmClientCertificatesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeHsmClientCertificatesMessage(obj: RedshiftDescribeHsmClientCertificatesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmClientCertificateIdentifier': obj.hsmClientCertificateIdentifier,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftHsmClientCertificateMessage
 */
export interface RedshiftHsmClientCertificateMessage {
  /**
   * @schema RedshiftHsmClientCertificateMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftHsmClientCertificateMessage#HsmClientCertificates
   */
  readonly hsmClientCertificates?: RedshiftHsmClientCertificate[];

}

/**
 * Converts an object of type 'RedshiftHsmClientCertificateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftHsmClientCertificateMessage(obj: RedshiftHsmClientCertificateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'HsmClientCertificates': obj.hsmClientCertificates?.map(y => toJson_RedshiftHsmClientCertificate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeHsmConfigurationsMessage
 */
export interface RedshiftDescribeHsmConfigurationsMessage {
  /**
   * @schema RedshiftDescribeHsmConfigurationsMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftDescribeHsmConfigurationsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeHsmConfigurationsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeHsmConfigurationsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeHsmConfigurationsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeHsmConfigurationsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeHsmConfigurationsMessage(obj: RedshiftDescribeHsmConfigurationsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmConfigurationIdentifier': obj.hsmConfigurationIdentifier,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftHsmConfigurationMessage
 */
export interface RedshiftHsmConfigurationMessage {
  /**
   * @schema RedshiftHsmConfigurationMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftHsmConfigurationMessage#HsmConfigurations
   */
  readonly hsmConfigurations?: RedshiftHsmConfiguration[];

}

/**
 * Converts an object of type 'RedshiftHsmConfigurationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftHsmConfigurationMessage(obj: RedshiftHsmConfigurationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'HsmConfigurations': obj.hsmConfigurations?.map(y => toJson_RedshiftHsmConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeLoggingStatusMessage
 */
export interface RedshiftDescribeLoggingStatusMessage {
  /**
   * @schema RedshiftDescribeLoggingStatusMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeLoggingStatusMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeLoggingStatusMessage(obj: RedshiftDescribeLoggingStatusMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftLoggingStatus
 */
export interface RedshiftLoggingStatus {
  /**
   * @schema RedshiftLoggingStatus#LoggingEnabled
   */
  readonly loggingEnabled?: boolean;

  /**
   * @schema RedshiftLoggingStatus#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema RedshiftLoggingStatus#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema RedshiftLoggingStatus#LastSuccessfulDeliveryTime
   */
  readonly lastSuccessfulDeliveryTime?: string;

  /**
   * @schema RedshiftLoggingStatus#LastFailureTime
   */
  readonly lastFailureTime?: string;

  /**
   * @schema RedshiftLoggingStatus#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

}

/**
 * Converts an object of type 'RedshiftLoggingStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftLoggingStatus(obj: RedshiftLoggingStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingEnabled': obj.loggingEnabled,
    'BucketName': obj.bucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'LastSuccessfulDeliveryTime': obj.lastSuccessfulDeliveryTime,
    'LastFailureTime': obj.lastFailureTime,
    'LastFailureMessage': obj.lastFailureMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeNodeConfigurationOptionsMessage
 */
export interface RedshiftDescribeNodeConfigurationOptionsMessage {
  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#Filters
   */
  readonly filters?: RedshiftNodeConfigurationOptionsFilter[];

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'RedshiftDescribeNodeConfigurationOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeNodeConfigurationOptionsMessage(obj: RedshiftDescribeNodeConfigurationOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionType': obj.actionType,
    'ClusterIdentifier': obj.clusterIdentifier,
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'OwnerAccount': obj.ownerAccount,
    'Filters': obj.filters?.map(y => toJson_RedshiftNodeConfigurationOptionsFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftNodeConfigurationOptionsMessage
 */
export interface RedshiftNodeConfigurationOptionsMessage {
  /**
   * @schema RedshiftNodeConfigurationOptionsMessage#NodeConfigurationOptionList
   */
  readonly nodeConfigurationOptionList?: RedshiftNodeConfigurationOption[];

  /**
   * @schema RedshiftNodeConfigurationOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftNodeConfigurationOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftNodeConfigurationOptionsMessage(obj: RedshiftNodeConfigurationOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeConfigurationOptionList': obj.nodeConfigurationOptionList?.map(y => toJson_RedshiftNodeConfigurationOption(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeOrderableClusterOptionsMessage
 */
export interface RedshiftDescribeOrderableClusterOptionsMessage {
  /**
   * @schema RedshiftDescribeOrderableClusterOptionsMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftDescribeOrderableClusterOptionsMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftDescribeOrderableClusterOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeOrderableClusterOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeOrderableClusterOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeOrderableClusterOptionsMessage(obj: RedshiftDescribeOrderableClusterOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterVersion': obj.clusterVersion,
    'NodeType': obj.nodeType,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftOrderableClusterOptionsMessage
 */
export interface RedshiftOrderableClusterOptionsMessage {
  /**
   * @schema RedshiftOrderableClusterOptionsMessage#OrderableClusterOptions
   */
  readonly orderableClusterOptions?: RedshiftOrderableClusterOption[];

  /**
   * @schema RedshiftOrderableClusterOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftOrderableClusterOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftOrderableClusterOptionsMessage(obj: RedshiftOrderableClusterOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrderableClusterOptions': obj.orderableClusterOptions?.map(y => toJson_RedshiftOrderableClusterOption(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribePartnersInputMessage
 */
export interface RedshiftDescribePartnersInputMessage {
  /**
   * @schema RedshiftDescribePartnersInputMessage#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema RedshiftDescribePartnersInputMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribePartnersInputMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RedshiftDescribePartnersInputMessage#PartnerName
   */
  readonly partnerName?: string;

}

/**
 * Converts an object of type 'RedshiftDescribePartnersInputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribePartnersInputMessage(obj: RedshiftDescribePartnersInputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'ClusterIdentifier': obj.clusterIdentifier,
    'DatabaseName': obj.databaseName,
    'PartnerName': obj.partnerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribePartnersOutputMessage
 */
export interface RedshiftDescribePartnersOutputMessage {
  /**
   * @schema RedshiftDescribePartnersOutputMessage#PartnerIntegrationInfoList
   */
  readonly partnerIntegrationInfoList?: RedshiftPartnerIntegrationInfo[];

}

/**
 * Converts an object of type 'RedshiftDescribePartnersOutputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribePartnersOutputMessage(obj: RedshiftDescribePartnersOutputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartnerIntegrationInfoList': obj.partnerIntegrationInfoList?.map(y => toJson_RedshiftPartnerIntegrationInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeReservedNodeOfferingsMessage
 */
export interface RedshiftDescribeReservedNodeOfferingsMessage {
  /**
   * @schema RedshiftDescribeReservedNodeOfferingsMessage#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId?: string;

  /**
   * @schema RedshiftDescribeReservedNodeOfferingsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeReservedNodeOfferingsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeReservedNodeOfferingsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeReservedNodeOfferingsMessage(obj: RedshiftDescribeReservedNodeOfferingsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedNodeOfferingId': obj.reservedNodeOfferingId,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftReservedNodeOfferingsMessage
 */
export interface RedshiftReservedNodeOfferingsMessage {
  /**
   * @schema RedshiftReservedNodeOfferingsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftReservedNodeOfferingsMessage#ReservedNodeOfferings
   */
  readonly reservedNodeOfferings?: RedshiftReservedNodeOffering[];

}

/**
 * Converts an object of type 'RedshiftReservedNodeOfferingsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftReservedNodeOfferingsMessage(obj: RedshiftReservedNodeOfferingsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReservedNodeOfferings': obj.reservedNodeOfferings?.map(y => toJson_RedshiftReservedNodeOffering(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeReservedNodesMessage
 */
export interface RedshiftDescribeReservedNodesMessage {
  /**
   * @schema RedshiftDescribeReservedNodesMessage#ReservedNodeId
   */
  readonly reservedNodeId?: string;

  /**
   * @schema RedshiftDescribeReservedNodesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeReservedNodesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeReservedNodesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeReservedNodesMessage(obj: RedshiftDescribeReservedNodesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedNodeId': obj.reservedNodeId,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftReservedNodesMessage
 */
export interface RedshiftReservedNodesMessage {
  /**
   * @schema RedshiftReservedNodesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftReservedNodesMessage#ReservedNodes
   */
  readonly reservedNodes?: RedshiftReservedNode[];

}

/**
 * Converts an object of type 'RedshiftReservedNodesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftReservedNodesMessage(obj: RedshiftReservedNodesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReservedNodes': obj.reservedNodes?.map(y => toJson_RedshiftReservedNode(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeResizeMessage
 */
export interface RedshiftDescribeResizeMessage {
  /**
   * @schema RedshiftDescribeResizeMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeResizeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeResizeMessage(obj: RedshiftDescribeResizeMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeScheduledActionsMessage
 */
export interface RedshiftDescribeScheduledActionsMessage {
  /**
   * @schema RedshiftDescribeScheduledActionsMessage#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#TargetActionType
   */
  readonly targetActionType?: string;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#Active
   */
  readonly active?: boolean;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#Filters
   */
  readonly filters?: RedshiftScheduledActionFilter[];

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'RedshiftDescribeScheduledActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeScheduledActionsMessage(obj: RedshiftDescribeScheduledActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledActionName': obj.scheduledActionName,
    'TargetActionType': obj.targetActionType,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Active': obj.active,
    'Filters': obj.filters?.map(y => toJson_RedshiftScheduledActionFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftScheduledActionsMessage
 */
export interface RedshiftScheduledActionsMessage {
  /**
   * @schema RedshiftScheduledActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftScheduledActionsMessage#ScheduledActions
   */
  readonly scheduledActions?: RedshiftScheduledAction[];

}

/**
 * Converts an object of type 'RedshiftScheduledActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftScheduledActionsMessage(obj: RedshiftScheduledActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ScheduledActions': obj.scheduledActions?.map(y => toJson_RedshiftScheduledAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeSnapshotCopyGrantsMessage
 */
export interface RedshiftDescribeSnapshotCopyGrantsMessage {
  /**
   * @schema RedshiftDescribeSnapshotCopyGrantsMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

  /**
   * @schema RedshiftDescribeSnapshotCopyGrantsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeSnapshotCopyGrantsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeSnapshotCopyGrantsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeSnapshotCopyGrantsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeSnapshotCopyGrantsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeSnapshotCopyGrantsMessage(obj: RedshiftDescribeSnapshotCopyGrantsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotCopyGrantName': obj.snapshotCopyGrantName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftSnapshotCopyGrantMessage
 */
export interface RedshiftSnapshotCopyGrantMessage {
  /**
   * @schema RedshiftSnapshotCopyGrantMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftSnapshotCopyGrantMessage#SnapshotCopyGrants
   */
  readonly snapshotCopyGrants?: RedshiftSnapshotCopyGrant[];

}

/**
 * Converts an object of type 'RedshiftSnapshotCopyGrantMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftSnapshotCopyGrantMessage(obj: RedshiftSnapshotCopyGrantMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'SnapshotCopyGrants': obj.snapshotCopyGrants?.map(y => toJson_RedshiftSnapshotCopyGrant(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeSnapshotSchedulesMessage
 */
export interface RedshiftDescribeSnapshotSchedulesMessage {
  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#TagValues
   */
  readonly tagValues?: string[];

  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'RedshiftDescribeSnapshotSchedulesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeSnapshotSchedulesMessage(obj: RedshiftDescribeSnapshotSchedulesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ScheduleIdentifier': obj.scheduleIdentifier,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeSnapshotSchedulesOutputMessage
 */
export interface RedshiftDescribeSnapshotSchedulesOutputMessage {
  /**
   * @schema RedshiftDescribeSnapshotSchedulesOutputMessage#SnapshotSchedules
   */
  readonly snapshotSchedules?: RedshiftSnapshotSchedule[];

  /**
   * @schema RedshiftDescribeSnapshotSchedulesOutputMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeSnapshotSchedulesOutputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeSnapshotSchedulesOutputMessage(obj: RedshiftDescribeSnapshotSchedulesOutputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotSchedules': obj.snapshotSchedules?.map(y => toJson_RedshiftSnapshotSchedule(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftCustomerStorageMessage
 */
export interface RedshiftCustomerStorageMessage {
  /**
   * @schema RedshiftCustomerStorageMessage#TotalBackupSizeInMegaBytes
   */
  readonly totalBackupSizeInMegaBytes?: number;

  /**
   * @schema RedshiftCustomerStorageMessage#TotalProvisionedStorageInMegaBytes
   */
  readonly totalProvisionedStorageInMegaBytes?: number;

}

/**
 * Converts an object of type 'RedshiftCustomerStorageMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCustomerStorageMessage(obj: RedshiftCustomerStorageMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TotalBackupSizeInMegaBytes': obj.totalBackupSizeInMegaBytes,
    'TotalProvisionedStorageInMegaBytes': obj.totalProvisionedStorageInMegaBytes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeTableRestoreStatusMessage
 */
export interface RedshiftDescribeTableRestoreStatusMessage {
  /**
   * @schema RedshiftDescribeTableRestoreStatusMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeTableRestoreStatusMessage#TableRestoreRequestId
   */
  readonly tableRestoreRequestId?: string;

  /**
   * @schema RedshiftDescribeTableRestoreStatusMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeTableRestoreStatusMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftDescribeTableRestoreStatusMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeTableRestoreStatusMessage(obj: RedshiftDescribeTableRestoreStatusMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'TableRestoreRequestId': obj.tableRestoreRequestId,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftTableRestoreStatusMessage
 */
export interface RedshiftTableRestoreStatusMessage {
  /**
   * @schema RedshiftTableRestoreStatusMessage#TableRestoreStatusDetails
   */
  readonly tableRestoreStatusDetails?: RedshiftTableRestoreStatus[];

  /**
   * @schema RedshiftTableRestoreStatusMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftTableRestoreStatusMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftTableRestoreStatusMessage(obj: RedshiftTableRestoreStatusMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableRestoreStatusDetails': obj.tableRestoreStatusDetails?.map(y => toJson_RedshiftTableRestoreStatus(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeTagsMessage
 */
export interface RedshiftDescribeTagsMessage {
  /**
   * @schema RedshiftDescribeTagsMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema RedshiftDescribeTagsMessage#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RedshiftDescribeTagsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeTagsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeTagsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeTagsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeTagsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeTagsMessage(obj: RedshiftDescribeTagsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'ResourceType': obj.resourceType,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftTaggedResourceListMessage
 */
export interface RedshiftTaggedResourceListMessage {
  /**
   * @schema RedshiftTaggedResourceListMessage#TaggedResources
   */
  readonly taggedResources?: RedshiftTaggedResource[];

  /**
   * @schema RedshiftTaggedResourceListMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftTaggedResourceListMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftTaggedResourceListMessage(obj: RedshiftTaggedResourceListMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaggedResources': obj.taggedResources?.map(y => toJson_RedshiftTaggedResource(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDescribeUsageLimitsMessage
 */
export interface RedshiftDescribeUsageLimitsMessage {
  /**
   * @schema RedshiftDescribeUsageLimitsMessage#UsageLimitId
   */
  readonly usageLimitId?: string;

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#FeatureType
   */
  readonly featureType?: string;

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RedshiftDescribeUsageLimitsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDescribeUsageLimitsMessage(obj: RedshiftDescribeUsageLimitsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UsageLimitId': obj.usageLimitId,
    'ClusterIdentifier': obj.clusterIdentifier,
    'FeatureType': obj.featureType,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'TagKeys': obj.tagKeys?.map(y => y),
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftUsageLimitList
 */
export interface RedshiftUsageLimitList {
  /**
   * @schema RedshiftUsageLimitList#UsageLimits
   */
  readonly usageLimits?: RedshiftUsageLimit[];

  /**
   * @schema RedshiftUsageLimitList#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftUsageLimitList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftUsageLimitList(obj: RedshiftUsageLimitList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UsageLimits': obj.usageLimits?.map(y => toJson_RedshiftUsageLimit(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDisableLoggingMessage
 */
export interface RedshiftDisableLoggingMessage {
  /**
   * @schema RedshiftDisableLoggingMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftDisableLoggingMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDisableLoggingMessage(obj: RedshiftDisableLoggingMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDisableSnapshotCopyMessage
 */
export interface RedshiftDisableSnapshotCopyMessage {
  /**
   * @schema RedshiftDisableSnapshotCopyMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftDisableSnapshotCopyMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDisableSnapshotCopyMessage(obj: RedshiftDisableSnapshotCopyMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDisableSnapshotCopyResult
 */
export interface RedshiftDisableSnapshotCopyResult {
  /**
   * @schema RedshiftDisableSnapshotCopyResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftDisableSnapshotCopyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDisableSnapshotCopyResult(obj: RedshiftDisableSnapshotCopyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDisassociateDataShareConsumerMessage
 */
export interface RedshiftDisassociateDataShareConsumerMessage {
  /**
   * @schema RedshiftDisassociateDataShareConsumerMessage#DataShareArn
   */
  readonly dataShareArn?: string;

  /**
   * @schema RedshiftDisassociateDataShareConsumerMessage#DisassociateEntireAccount
   */
  readonly disassociateEntireAccount?: boolean;

  /**
   * @schema RedshiftDisassociateDataShareConsumerMessage#ConsumerArn
   */
  readonly consumerArn?: string;

}

/**
 * Converts an object of type 'RedshiftDisassociateDataShareConsumerMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDisassociateDataShareConsumerMessage(obj: RedshiftDisassociateDataShareConsumerMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataShareArn': obj.dataShareArn,
    'DisassociateEntireAccount': obj.disassociateEntireAccount,
    'ConsumerArn': obj.consumerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEnableLoggingMessage
 */
export interface RedshiftEnableLoggingMessage {
  /**
   * @schema RedshiftEnableLoggingMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftEnableLoggingMessage#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema RedshiftEnableLoggingMessage#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

}

/**
 * Converts an object of type 'RedshiftEnableLoggingMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEnableLoggingMessage(obj: RedshiftEnableLoggingMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'BucketName': obj.bucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEnableSnapshotCopyMessage
 */
export interface RedshiftEnableSnapshotCopyMessage {
  /**
   * @schema RedshiftEnableSnapshotCopyMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftEnableSnapshotCopyMessage#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema RedshiftEnableSnapshotCopyMessage#RetentionPeriod
   */
  readonly retentionPeriod?: number;

  /**
   * @schema RedshiftEnableSnapshotCopyMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

  /**
   * @schema RedshiftEnableSnapshotCopyMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

}

/**
 * Converts an object of type 'RedshiftEnableSnapshotCopyMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEnableSnapshotCopyMessage(obj: RedshiftEnableSnapshotCopyMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'DestinationRegion': obj.destinationRegion,
    'RetentionPeriod': obj.retentionPeriod,
    'SnapshotCopyGrantName': obj.snapshotCopyGrantName,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEnableSnapshotCopyResult
 */
export interface RedshiftEnableSnapshotCopyResult {
  /**
   * @schema RedshiftEnableSnapshotCopyResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftEnableSnapshotCopyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEnableSnapshotCopyResult(obj: RedshiftEnableSnapshotCopyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftGetClusterCredentialsMessage
 */
export interface RedshiftGetClusterCredentialsMessage {
  /**
   * @schema RedshiftGetClusterCredentialsMessage#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftGetClusterCredentialsMessage#DbName
   */
  readonly dbName?: string;

  /**
   * @schema RedshiftGetClusterCredentialsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftGetClusterCredentialsMessage#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema RedshiftGetClusterCredentialsMessage#AutoCreate
   */
  readonly autoCreate?: boolean;

  /**
   * @schema RedshiftGetClusterCredentialsMessage#DbGroups
   */
  readonly dbGroups?: string[];

}

/**
 * Converts an object of type 'RedshiftGetClusterCredentialsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftGetClusterCredentialsMessage(obj: RedshiftGetClusterCredentialsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DbUser': obj.dbUser,
    'DbName': obj.dbName,
    'ClusterIdentifier': obj.clusterIdentifier,
    'DurationSeconds': obj.durationSeconds,
    'AutoCreate': obj.autoCreate,
    'DbGroups': obj.dbGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterCredentials
 */
export interface RedshiftClusterCredentials {
  /**
   * @schema RedshiftClusterCredentials#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftClusterCredentials#DbPassword
   */
  readonly dbPassword?: string;

  /**
   * @schema RedshiftClusterCredentials#Expiration
   */
  readonly expiration?: string;

}

/**
 * Converts an object of type 'RedshiftClusterCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterCredentials(obj: RedshiftClusterCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DbUser': obj.dbUser,
    'DbPassword': obj.dbPassword,
    'Expiration': obj.expiration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftGetReservedNodeExchangeOfferingsInputMessage
 */
export interface RedshiftGetReservedNodeExchangeOfferingsInputMessage {
  /**
   * @schema RedshiftGetReservedNodeExchangeOfferingsInputMessage#ReservedNodeId
   */
  readonly reservedNodeId?: string;

  /**
   * @schema RedshiftGetReservedNodeExchangeOfferingsInputMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftGetReservedNodeExchangeOfferingsInputMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'RedshiftGetReservedNodeExchangeOfferingsInputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftGetReservedNodeExchangeOfferingsInputMessage(obj: RedshiftGetReservedNodeExchangeOfferingsInputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedNodeId': obj.reservedNodeId,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftGetReservedNodeExchangeOfferingsOutputMessage
 */
export interface RedshiftGetReservedNodeExchangeOfferingsOutputMessage {
  /**
   * @schema RedshiftGetReservedNodeExchangeOfferingsOutputMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftGetReservedNodeExchangeOfferingsOutputMessage#ReservedNodeOfferings
   */
  readonly reservedNodeOfferings?: RedshiftReservedNodeOffering[];

}

/**
 * Converts an object of type 'RedshiftGetReservedNodeExchangeOfferingsOutputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftGetReservedNodeExchangeOfferingsOutputMessage(obj: RedshiftGetReservedNodeExchangeOfferingsOutputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReservedNodeOfferings': obj.reservedNodeOfferings?.map(y => toJson_RedshiftReservedNodeOffering(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyAquaInputMessage
 */
export interface RedshiftModifyAquaInputMessage {
  /**
   * @schema RedshiftModifyAquaInputMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftModifyAquaInputMessage#AquaConfigurationStatus
   */
  readonly aquaConfigurationStatus?: string;

}

/**
 * Converts an object of type 'RedshiftModifyAquaInputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyAquaInputMessage(obj: RedshiftModifyAquaInputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'AquaConfigurationStatus': obj.aquaConfigurationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyAquaOutputMessage
 */
export interface RedshiftModifyAquaOutputMessage {
  /**
   * @schema RedshiftModifyAquaOutputMessage#AquaConfiguration
   */
  readonly aquaConfiguration?: RedshiftAquaConfiguration;

}

/**
 * Converts an object of type 'RedshiftModifyAquaOutputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyAquaOutputMessage(obj: RedshiftModifyAquaOutputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AquaConfiguration': toJson_RedshiftAquaConfiguration(obj.aquaConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyAuthenticationProfileMessage
 */
export interface RedshiftModifyAuthenticationProfileMessage {
  /**
   * @schema RedshiftModifyAuthenticationProfileMessage#AuthenticationProfileName
   */
  readonly authenticationProfileName?: string;

  /**
   * @schema RedshiftModifyAuthenticationProfileMessage#AuthenticationProfileContent
   */
  readonly authenticationProfileContent?: string;

}

/**
 * Converts an object of type 'RedshiftModifyAuthenticationProfileMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyAuthenticationProfileMessage(obj: RedshiftModifyAuthenticationProfileMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationProfileName': obj.authenticationProfileName,
    'AuthenticationProfileContent': obj.authenticationProfileContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyAuthenticationProfileResult
 */
export interface RedshiftModifyAuthenticationProfileResult {
  /**
   * @schema RedshiftModifyAuthenticationProfileResult#AuthenticationProfileName
   */
  readonly authenticationProfileName?: string;

  /**
   * @schema RedshiftModifyAuthenticationProfileResult#AuthenticationProfileContent
   */
  readonly authenticationProfileContent?: string;

}

/**
 * Converts an object of type 'RedshiftModifyAuthenticationProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyAuthenticationProfileResult(obj: RedshiftModifyAuthenticationProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationProfileName': obj.authenticationProfileName,
    'AuthenticationProfileContent': obj.authenticationProfileContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterMessage
 */
export interface RedshiftModifyClusterMessage {
  /**
   * @schema RedshiftModifyClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterMessage#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema RedshiftModifyClusterMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftModifyClusterMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftModifyClusterMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: string[];

  /**
   * @schema RedshiftModifyClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RedshiftModifyClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RedshiftModifyClusterMessage#ClusterParameterGroupName
   */
  readonly clusterParameterGroupName?: string;

  /**
   * @schema RedshiftModifyClusterMessage#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftModifyClusterMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftModifyClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RedshiftModifyClusterMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftModifyClusterMessage#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema RedshiftModifyClusterMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterMessage#NewClusterIdentifier
   */
  readonly newClusterIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RedshiftModifyClusterMessage#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema RedshiftModifyClusterMessage#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftModifyClusterMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftModifyClusterMessage#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RedshiftModifyClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftModifyClusterMessage#AvailabilityZoneRelocation
   */
  readonly availabilityZoneRelocation?: boolean;

  /**
   * @schema RedshiftModifyClusterMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RedshiftModifyClusterMessage#Port
   */
  readonly port?: number;

}

/**
 * Converts an object of type 'RedshiftModifyClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterMessage(obj: RedshiftModifyClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ClusterType': obj.clusterType,
    'NodeType': obj.nodeType,
    'NumberOfNodes': obj.numberOfNodes,
    'ClusterSecurityGroups': obj.clusterSecurityGroups?.map(y => y),
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'MasterUserPassword': obj.masterUserPassword,
    'ClusterParameterGroupName': obj.clusterParameterGroupName,
    'AutomatedSnapshotRetentionPeriod': obj.automatedSnapshotRetentionPeriod,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'ClusterVersion': obj.clusterVersion,
    'AllowVersionUpgrade': obj.allowVersionUpgrade,
    'HsmClientCertificateIdentifier': obj.hsmClientCertificateIdentifier,
    'HsmConfigurationIdentifier': obj.hsmConfigurationIdentifier,
    'NewClusterIdentifier': obj.newClusterIdentifier,
    'PubliclyAccessible': obj.publiclyAccessible,
    'ElasticIp': obj.elasticIp,
    'EnhancedVpcRouting': obj.enhancedVpcRouting,
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'Encrypted': obj.encrypted,
    'KmsKeyId': obj.kmsKeyId,
    'AvailabilityZoneRelocation': obj.availabilityZoneRelocation,
    'AvailabilityZone': obj.availabilityZone,
    'Port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterResult
 */
export interface RedshiftModifyClusterResult {
  /**
   * @schema RedshiftModifyClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftModifyClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterResult(obj: RedshiftModifyClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterDbRevisionMessage
 */
export interface RedshiftModifyClusterDbRevisionMessage {
  /**
   * @schema RedshiftModifyClusterDbRevisionMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterDbRevisionMessage#RevisionTarget
   */
  readonly revisionTarget?: string;

}

/**
 * Converts an object of type 'RedshiftModifyClusterDbRevisionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterDbRevisionMessage(obj: RedshiftModifyClusterDbRevisionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'RevisionTarget': obj.revisionTarget,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterDbRevisionResult
 */
export interface RedshiftModifyClusterDbRevisionResult {
  /**
   * @schema RedshiftModifyClusterDbRevisionResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftModifyClusterDbRevisionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterDbRevisionResult(obj: RedshiftModifyClusterDbRevisionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterIamRolesMessage
 */
export interface RedshiftModifyClusterIamRolesMessage {
  /**
   * @schema RedshiftModifyClusterIamRolesMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterIamRolesMessage#AddIamRoles
   */
  readonly addIamRoles?: string[];

  /**
   * @schema RedshiftModifyClusterIamRolesMessage#RemoveIamRoles
   */
  readonly removeIamRoles?: string[];

}

/**
 * Converts an object of type 'RedshiftModifyClusterIamRolesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterIamRolesMessage(obj: RedshiftModifyClusterIamRolesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'AddIamRoles': obj.addIamRoles?.map(y => y),
    'RemoveIamRoles': obj.removeIamRoles?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterIamRolesResult
 */
export interface RedshiftModifyClusterIamRolesResult {
  /**
   * @schema RedshiftModifyClusterIamRolesResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftModifyClusterIamRolesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterIamRolesResult(obj: RedshiftModifyClusterIamRolesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterMaintenanceMessage
 */
export interface RedshiftModifyClusterMaintenanceMessage {
  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#DeferMaintenance
   */
  readonly deferMaintenance?: boolean;

  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#DeferMaintenanceIdentifier
   */
  readonly deferMaintenanceIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#DeferMaintenanceStartTime
   */
  readonly deferMaintenanceStartTime?: string;

  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#DeferMaintenanceEndTime
   */
  readonly deferMaintenanceEndTime?: string;

  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#DeferMaintenanceDuration
   */
  readonly deferMaintenanceDuration?: number;

}

/**
 * Converts an object of type 'RedshiftModifyClusterMaintenanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterMaintenanceMessage(obj: RedshiftModifyClusterMaintenanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'DeferMaintenance': obj.deferMaintenance,
    'DeferMaintenanceIdentifier': obj.deferMaintenanceIdentifier,
    'DeferMaintenanceStartTime': obj.deferMaintenanceStartTime,
    'DeferMaintenanceEndTime': obj.deferMaintenanceEndTime,
    'DeferMaintenanceDuration': obj.deferMaintenanceDuration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterMaintenanceResult
 */
export interface RedshiftModifyClusterMaintenanceResult {
  /**
   * @schema RedshiftModifyClusterMaintenanceResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftModifyClusterMaintenanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterMaintenanceResult(obj: RedshiftModifyClusterMaintenanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterParameterGroupMessage
 */
export interface RedshiftModifyClusterParameterGroupMessage {
  /**
   * @schema RedshiftModifyClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftModifyClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: RedshiftParameter[];

}

/**
 * Converts an object of type 'RedshiftModifyClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterParameterGroupMessage(obj: RedshiftModifyClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'Parameters': obj.parameters?.map(y => toJson_RedshiftParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterParameterGroupNameMessage
 */
export interface RedshiftClusterParameterGroupNameMessage {
  /**
   * @schema RedshiftClusterParameterGroupNameMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftClusterParameterGroupNameMessage#ParameterGroupStatus
   */
  readonly parameterGroupStatus?: string;

}

/**
 * Converts an object of type 'RedshiftClusterParameterGroupNameMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterParameterGroupNameMessage(obj: RedshiftClusterParameterGroupNameMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'ParameterGroupStatus': obj.parameterGroupStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterSnapshotMessage
 */
export interface RedshiftModifyClusterSnapshotMessage {
  /**
   * @schema RedshiftModifyClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftModifyClusterSnapshotMessage#Force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'RedshiftModifyClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterSnapshotMessage(obj: RedshiftModifyClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'Force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterSnapshotResult
 */
export interface RedshiftModifyClusterSnapshotResult {
  /**
   * @schema RedshiftModifyClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * Converts an object of type 'RedshiftModifyClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterSnapshotResult(obj: RedshiftModifyClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Snapshot': toJson_RedshiftSnapshot(obj.snapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterSnapshotScheduleMessage
 */
export interface RedshiftModifyClusterSnapshotScheduleMessage {
  /**
   * @schema RedshiftModifyClusterSnapshotScheduleMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterSnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterSnapshotScheduleMessage#DisassociateSchedule
   */
  readonly disassociateSchedule?: boolean;

}

/**
 * Converts an object of type 'RedshiftModifyClusterSnapshotScheduleMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterSnapshotScheduleMessage(obj: RedshiftModifyClusterSnapshotScheduleMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ScheduleIdentifier': obj.scheduleIdentifier,
    'DisassociateSchedule': obj.disassociateSchedule,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterSubnetGroupMessage
 */
export interface RedshiftModifyClusterSubnetGroupMessage {
  /**
   * @schema RedshiftModifyClusterSubnetGroupMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftModifyClusterSubnetGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftModifyClusterSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'RedshiftModifyClusterSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterSubnetGroupMessage(obj: RedshiftModifyClusterSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSubnetGroupName': obj.clusterSubnetGroupName,
    'Description': obj.description,
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyClusterSubnetGroupResult
 */
export interface RedshiftModifyClusterSubnetGroupResult {
  /**
   * @schema RedshiftModifyClusterSubnetGroupResult#ClusterSubnetGroup
   */
  readonly clusterSubnetGroup?: RedshiftClusterSubnetGroup;

}

/**
 * Converts an object of type 'RedshiftModifyClusterSubnetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyClusterSubnetGroupResult(obj: RedshiftModifyClusterSubnetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSubnetGroup': toJson_RedshiftClusterSubnetGroup(obj.clusterSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyEndpointAccessMessage
 */
export interface RedshiftModifyEndpointAccessMessage {
  /**
   * @schema RedshiftModifyEndpointAccessMessage#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema RedshiftModifyEndpointAccessMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

}

/**
 * Converts an object of type 'RedshiftModifyEndpointAccessMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyEndpointAccessMessage(obj: RedshiftModifyEndpointAccessMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointName': obj.endpointName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyEventSubscriptionMessage
 */
export interface RedshiftModifyEventSubscriptionMessage {
  /**
   * @schema RedshiftModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#Severity
   */
  readonly severity?: string;

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'RedshiftModifyEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyEventSubscriptionMessage(obj: RedshiftModifyEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'SnsTopicArn': obj.snsTopicArn,
    'SourceType': obj.sourceType,
    'SourceIds': obj.sourceIds?.map(y => y),
    'EventCategories': obj.eventCategories?.map(y => y),
    'Severity': obj.severity,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyEventSubscriptionResult
 */
export interface RedshiftModifyEventSubscriptionResult {
  /**
   * @schema RedshiftModifyEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RedshiftEventSubscription;

}

/**
 * Converts an object of type 'RedshiftModifyEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyEventSubscriptionResult(obj: RedshiftModifyEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_RedshiftEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyScheduledActionMessage
 */
export interface RedshiftModifyScheduledActionMessage {
  /**
   * @schema RedshiftModifyScheduledActionMessage#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#TargetAction
   */
  readonly targetAction?: RedshiftScheduledActionType;

  /**
   * @schema RedshiftModifyScheduledActionMessage#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#ScheduledActionDescription
   */
  readonly scheduledActionDescription?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#Enable
   */
  readonly enable?: boolean;

}

/**
 * Converts an object of type 'RedshiftModifyScheduledActionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyScheduledActionMessage(obj: RedshiftModifyScheduledActionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledActionName': obj.scheduledActionName,
    'TargetAction': toJson_RedshiftScheduledActionType(obj.targetAction),
    'Schedule': obj.schedule,
    'IamRole': obj.iamRole,
    'ScheduledActionDescription': obj.scheduledActionDescription,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Enable': obj.enable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifySnapshotCopyRetentionPeriodMessage
 */
export interface RedshiftModifySnapshotCopyRetentionPeriodMessage {
  /**
   * @schema RedshiftModifySnapshotCopyRetentionPeriodMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftModifySnapshotCopyRetentionPeriodMessage#RetentionPeriod
   */
  readonly retentionPeriod?: number;

  /**
   * @schema RedshiftModifySnapshotCopyRetentionPeriodMessage#Manual
   */
  readonly manual?: boolean;

}

/**
 * Converts an object of type 'RedshiftModifySnapshotCopyRetentionPeriodMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifySnapshotCopyRetentionPeriodMessage(obj: RedshiftModifySnapshotCopyRetentionPeriodMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'RetentionPeriod': obj.retentionPeriod,
    'Manual': obj.manual,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifySnapshotCopyRetentionPeriodResult
 */
export interface RedshiftModifySnapshotCopyRetentionPeriodResult {
  /**
   * @schema RedshiftModifySnapshotCopyRetentionPeriodResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftModifySnapshotCopyRetentionPeriodResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifySnapshotCopyRetentionPeriodResult(obj: RedshiftModifySnapshotCopyRetentionPeriodResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifySnapshotScheduleMessage
 */
export interface RedshiftModifySnapshotScheduleMessage {
  /**
   * @schema RedshiftModifySnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema RedshiftModifySnapshotScheduleMessage#ScheduleDefinitions
   */
  readonly scheduleDefinitions?: string[];

}

/**
 * Converts an object of type 'RedshiftModifySnapshotScheduleMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifySnapshotScheduleMessage(obj: RedshiftModifySnapshotScheduleMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleIdentifier': obj.scheduleIdentifier,
    'ScheduleDefinitions': obj.scheduleDefinitions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftModifyUsageLimitMessage
 */
export interface RedshiftModifyUsageLimitMessage {
  /**
   * @schema RedshiftModifyUsageLimitMessage#UsageLimitId
   */
  readonly usageLimitId?: string;

  /**
   * @schema RedshiftModifyUsageLimitMessage#Amount
   */
  readonly amount?: number;

  /**
   * @schema RedshiftModifyUsageLimitMessage#BreachAction
   */
  readonly breachAction?: string;

}

/**
 * Converts an object of type 'RedshiftModifyUsageLimitMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftModifyUsageLimitMessage(obj: RedshiftModifyUsageLimitMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UsageLimitId': obj.usageLimitId,
    'Amount': obj.amount,
    'BreachAction': obj.breachAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftPauseClusterMessage
 */
export interface RedshiftPauseClusterMessage {
  /**
   * @schema RedshiftPauseClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftPauseClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftPauseClusterMessage(obj: RedshiftPauseClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftPauseClusterResult
 */
export interface RedshiftPauseClusterResult {
  /**
   * @schema RedshiftPauseClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftPauseClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftPauseClusterResult(obj: RedshiftPauseClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftPurchaseReservedNodeOfferingMessage
 */
export interface RedshiftPurchaseReservedNodeOfferingMessage {
  /**
   * @schema RedshiftPurchaseReservedNodeOfferingMessage#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId?: string;

  /**
   * @schema RedshiftPurchaseReservedNodeOfferingMessage#NodeCount
   */
  readonly nodeCount?: number;

}

/**
 * Converts an object of type 'RedshiftPurchaseReservedNodeOfferingMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftPurchaseReservedNodeOfferingMessage(obj: RedshiftPurchaseReservedNodeOfferingMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedNodeOfferingId': obj.reservedNodeOfferingId,
    'NodeCount': obj.nodeCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftPurchaseReservedNodeOfferingResult
 */
export interface RedshiftPurchaseReservedNodeOfferingResult {
  /**
   * @schema RedshiftPurchaseReservedNodeOfferingResult#ReservedNode
   */
  readonly reservedNode?: RedshiftReservedNode;

}

/**
 * Converts an object of type 'RedshiftPurchaseReservedNodeOfferingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftPurchaseReservedNodeOfferingResult(obj: RedshiftPurchaseReservedNodeOfferingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedNode': toJson_RedshiftReservedNode(obj.reservedNode),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRebootClusterMessage
 */
export interface RedshiftRebootClusterMessage {
  /**
   * @schema RedshiftRebootClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftRebootClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRebootClusterMessage(obj: RedshiftRebootClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRebootClusterResult
 */
export interface RedshiftRebootClusterResult {
  /**
   * @schema RedshiftRebootClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftRebootClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRebootClusterResult(obj: RedshiftRebootClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRejectDataShareMessage
 */
export interface RedshiftRejectDataShareMessage {
  /**
   * @schema RedshiftRejectDataShareMessage#DataShareArn
   */
  readonly dataShareArn?: string;

}

/**
 * Converts an object of type 'RedshiftRejectDataShareMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRejectDataShareMessage(obj: RedshiftRejectDataShareMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataShareArn': obj.dataShareArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftResetClusterParameterGroupMessage
 */
export interface RedshiftResetClusterParameterGroupMessage {
  /**
   * @schema RedshiftResetClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftResetClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema RedshiftResetClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: RedshiftParameter[];

}

/**
 * Converts an object of type 'RedshiftResetClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftResetClusterParameterGroupMessage(obj: RedshiftResetClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'ResetAllParameters': obj.resetAllParameters,
    'Parameters': obj.parameters?.map(y => toJson_RedshiftParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftResizeClusterMessage
 */
export interface RedshiftResizeClusterMessage {
  /**
   * @schema RedshiftResizeClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftResizeClusterMessage#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema RedshiftResizeClusterMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftResizeClusterMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftResizeClusterMessage#Classic
   */
  readonly classic?: boolean;

}

/**
 * Converts an object of type 'RedshiftResizeClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftResizeClusterMessage(obj: RedshiftResizeClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ClusterType': obj.clusterType,
    'NodeType': obj.nodeType,
    'NumberOfNodes': obj.numberOfNodes,
    'Classic': obj.classic,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftResizeClusterResult
 */
export interface RedshiftResizeClusterResult {
  /**
   * @schema RedshiftResizeClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftResizeClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftResizeClusterResult(obj: RedshiftResizeClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRestoreFromClusterSnapshotMessage
 */
export interface RedshiftRestoreFromClusterSnapshotMessage {
  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ClusterParameterGroupName
   */
  readonly clusterParameterGroupName?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: string[];

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#IamRoles
   */
  readonly iamRoles?: string[];

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#AvailabilityZoneRelocation
   */
  readonly availabilityZoneRelocation?: boolean;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#AquaConfigurationStatus
   */
  readonly aquaConfigurationStatus?: string;

}

/**
 * Converts an object of type 'RedshiftRestoreFromClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRestoreFromClusterSnapshotMessage(obj: RedshiftRestoreFromClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'SnapshotClusterIdentifier': obj.snapshotClusterIdentifier,
    'Port': obj.port,
    'AvailabilityZone': obj.availabilityZone,
    'AllowVersionUpgrade': obj.allowVersionUpgrade,
    'ClusterSubnetGroupName': obj.clusterSubnetGroupName,
    'PubliclyAccessible': obj.publiclyAccessible,
    'OwnerAccount': obj.ownerAccount,
    'HsmClientCertificateIdentifier': obj.hsmClientCertificateIdentifier,
    'HsmConfigurationIdentifier': obj.hsmConfigurationIdentifier,
    'ElasticIp': obj.elasticIp,
    'ClusterParameterGroupName': obj.clusterParameterGroupName,
    'ClusterSecurityGroups': obj.clusterSecurityGroups?.map(y => y),
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'AutomatedSnapshotRetentionPeriod': obj.automatedSnapshotRetentionPeriod,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'KmsKeyId': obj.kmsKeyId,
    'NodeType': obj.nodeType,
    'EnhancedVpcRouting': obj.enhancedVpcRouting,
    'AdditionalInfo': obj.additionalInfo,
    'IamRoles': obj.iamRoles?.map(y => y),
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'SnapshotScheduleIdentifier': obj.snapshotScheduleIdentifier,
    'NumberOfNodes': obj.numberOfNodes,
    'AvailabilityZoneRelocation': obj.availabilityZoneRelocation,
    'AquaConfigurationStatus': obj.aquaConfigurationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRestoreFromClusterSnapshotResult
 */
export interface RedshiftRestoreFromClusterSnapshotResult {
  /**
   * @schema RedshiftRestoreFromClusterSnapshotResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftRestoreFromClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRestoreFromClusterSnapshotResult(obj: RedshiftRestoreFromClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRestoreTableFromClusterSnapshotMessage
 */
export interface RedshiftRestoreTableFromClusterSnapshotMessage {
  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#SourceDatabaseName
   */
  readonly sourceDatabaseName?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#SourceSchemaName
   */
  readonly sourceSchemaName?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#SourceTableName
   */
  readonly sourceTableName?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#TargetDatabaseName
   */
  readonly targetDatabaseName?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#TargetSchemaName
   */
  readonly targetSchemaName?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#NewTableName
   */
  readonly newTableName?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#EnableCaseSensitiveIdentifier
   */
  readonly enableCaseSensitiveIdentifier?: boolean;

}

/**
 * Converts an object of type 'RedshiftRestoreTableFromClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRestoreTableFromClusterSnapshotMessage(obj: RedshiftRestoreTableFromClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'SourceDatabaseName': obj.sourceDatabaseName,
    'SourceSchemaName': obj.sourceSchemaName,
    'SourceTableName': obj.sourceTableName,
    'TargetDatabaseName': obj.targetDatabaseName,
    'TargetSchemaName': obj.targetSchemaName,
    'NewTableName': obj.newTableName,
    'EnableCaseSensitiveIdentifier': obj.enableCaseSensitiveIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRestoreTableFromClusterSnapshotResult
 */
export interface RedshiftRestoreTableFromClusterSnapshotResult {
  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotResult#TableRestoreStatus
   */
  readonly tableRestoreStatus?: RedshiftTableRestoreStatus;

}

/**
 * Converts an object of type 'RedshiftRestoreTableFromClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRestoreTableFromClusterSnapshotResult(obj: RedshiftRestoreTableFromClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableRestoreStatus': toJson_RedshiftTableRestoreStatus(obj.tableRestoreStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftResumeClusterMessage
 */
export interface RedshiftResumeClusterMessage {
  /**
   * @schema RedshiftResumeClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftResumeClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftResumeClusterMessage(obj: RedshiftResumeClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftResumeClusterResult
 */
export interface RedshiftResumeClusterResult {
  /**
   * @schema RedshiftResumeClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftResumeClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftResumeClusterResult(obj: RedshiftResumeClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRevokeClusterSecurityGroupIngressMessage
 */
export interface RedshiftRevokeClusterSecurityGroupIngressMessage {
  /**
   * @schema RedshiftRevokeClusterSecurityGroupIngressMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema RedshiftRevokeClusterSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RedshiftRevokeClusterSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RedshiftRevokeClusterSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * Converts an object of type 'RedshiftRevokeClusterSecurityGroupIngressMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRevokeClusterSecurityGroupIngressMessage(obj: RedshiftRevokeClusterSecurityGroupIngressMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroupName': obj.clusterSecurityGroupName,
    'CIDRIP': obj.cidrip,
    'EC2SecurityGroupName': obj.ec2SecurityGroupName,
    'EC2SecurityGroupOwnerId': obj.ec2SecurityGroupOwnerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRevokeClusterSecurityGroupIngressResult
 */
export interface RedshiftRevokeClusterSecurityGroupIngressResult {
  /**
   * @schema RedshiftRevokeClusterSecurityGroupIngressResult#ClusterSecurityGroup
   */
  readonly clusterSecurityGroup?: RedshiftClusterSecurityGroup;

}

/**
 * Converts an object of type 'RedshiftRevokeClusterSecurityGroupIngressResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRevokeClusterSecurityGroupIngressResult(obj: RedshiftRevokeClusterSecurityGroupIngressResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroup': toJson_RedshiftClusterSecurityGroup(obj.clusterSecurityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRevokeEndpointAccessMessage
 */
export interface RedshiftRevokeEndpointAccessMessage {
  /**
   * @schema RedshiftRevokeEndpointAccessMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftRevokeEndpointAccessMessage#Account
   */
  readonly account?: string;

  /**
   * @schema RedshiftRevokeEndpointAccessMessage#VpcIds
   */
  readonly vpcIds?: string[];

  /**
   * @schema RedshiftRevokeEndpointAccessMessage#Force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'RedshiftRevokeEndpointAccessMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRevokeEndpointAccessMessage(obj: RedshiftRevokeEndpointAccessMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'Account': obj.account,
    'VpcIds': obj.vpcIds?.map(y => y),
    'Force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRevokeSnapshotAccessMessage
 */
export interface RedshiftRevokeSnapshotAccessMessage {
  /**
   * @schema RedshiftRevokeSnapshotAccessMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftRevokeSnapshotAccessMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema RedshiftRevokeSnapshotAccessMessage#AccountWithRestoreAccess
   */
  readonly accountWithRestoreAccess?: string;

}

/**
 * Converts an object of type 'RedshiftRevokeSnapshotAccessMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRevokeSnapshotAccessMessage(obj: RedshiftRevokeSnapshotAccessMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'SnapshotClusterIdentifier': obj.snapshotClusterIdentifier,
    'AccountWithRestoreAccess': obj.accountWithRestoreAccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRevokeSnapshotAccessResult
 */
export interface RedshiftRevokeSnapshotAccessResult {
  /**
   * @schema RedshiftRevokeSnapshotAccessResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * Converts an object of type 'RedshiftRevokeSnapshotAccessResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRevokeSnapshotAccessResult(obj: RedshiftRevokeSnapshotAccessResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Snapshot': toJson_RedshiftSnapshot(obj.snapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRotateEncryptionKeyMessage
 */
export interface RedshiftRotateEncryptionKeyMessage {
  /**
   * @schema RedshiftRotateEncryptionKeyMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

}

/**
 * Converts an object of type 'RedshiftRotateEncryptionKeyMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRotateEncryptionKeyMessage(obj: RedshiftRotateEncryptionKeyMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRotateEncryptionKeyResult
 */
export interface RedshiftRotateEncryptionKeyResult {
  /**
   * @schema RedshiftRotateEncryptionKeyResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * Converts an object of type 'RedshiftRotateEncryptionKeyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRotateEncryptionKeyResult(obj: RedshiftRotateEncryptionKeyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_RedshiftCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftUpdatePartnerStatusInputMessage
 */
export interface RedshiftUpdatePartnerStatusInputMessage {
  /**
   * @schema RedshiftUpdatePartnerStatusInputMessage#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema RedshiftUpdatePartnerStatusInputMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftUpdatePartnerStatusInputMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RedshiftUpdatePartnerStatusInputMessage#PartnerName
   */
  readonly partnerName?: string;

  /**
   * @schema RedshiftUpdatePartnerStatusInputMessage#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftUpdatePartnerStatusInputMessage#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * Converts an object of type 'RedshiftUpdatePartnerStatusInputMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftUpdatePartnerStatusInputMessage(obj: RedshiftUpdatePartnerStatusInputMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'ClusterIdentifier': obj.clusterIdentifier,
    'DatabaseName': obj.databaseName,
    'PartnerName': obj.partnerName,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftReservedNode
 */
export interface RedshiftReservedNode {
  /**
   * @schema RedshiftReservedNode#ReservedNodeId
   */
  readonly reservedNodeId?: string;

  /**
   * @schema RedshiftReservedNode#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId?: string;

  /**
   * @schema RedshiftReservedNode#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftReservedNode#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftReservedNode#Duration
   */
  readonly duration?: number;

  /**
   * @schema RedshiftReservedNode#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema RedshiftReservedNode#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema RedshiftReservedNode#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema RedshiftReservedNode#NodeCount
   */
  readonly nodeCount?: number;

  /**
   * @schema RedshiftReservedNode#State
   */
  readonly state?: string;

  /**
   * @schema RedshiftReservedNode#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RedshiftReservedNode#RecurringCharges
   */
  readonly recurringCharges?: RedshiftRecurringCharge[];

  /**
   * @schema RedshiftReservedNode#ReservedNodeOfferingType
   */
  readonly reservedNodeOfferingType?: string;

}

/**
 * Converts an object of type 'RedshiftReservedNode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftReservedNode(obj: RedshiftReservedNode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedNodeId': obj.reservedNodeId,
    'ReservedNodeOfferingId': obj.reservedNodeOfferingId,
    'NodeType': obj.nodeType,
    'StartTime': obj.startTime,
    'Duration': obj.duration,
    'FixedPrice': obj.fixedPrice,
    'UsagePrice': obj.usagePrice,
    'CurrencyCode': obj.currencyCode,
    'NodeCount': obj.nodeCount,
    'State': obj.state,
    'OfferingType': obj.offeringType,
    'RecurringCharges': obj.recurringCharges?.map(y => toJson_RedshiftRecurringCharge(y)),
    'ReservedNodeOfferingType': obj.reservedNodeOfferingType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataShareAssociation
 */
export interface RedshiftDataShareAssociation {
  /**
   * @schema RedshiftDataShareAssociation#ConsumerIdentifier
   */
  readonly consumerIdentifier?: string;

  /**
   * @schema RedshiftDataShareAssociation#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftDataShareAssociation#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema RedshiftDataShareAssociation#StatusChangeDate
   */
  readonly statusChangeDate?: string;

}

/**
 * Converts an object of type 'RedshiftDataShareAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataShareAssociation(obj: RedshiftDataShareAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsumerIdentifier': obj.consumerIdentifier,
    'Status': obj.status,
    'CreatedDate': obj.createdDate,
    'StatusChangeDate': obj.statusChangeDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterSecurityGroup
 */
export interface RedshiftClusterSecurityGroup {
  /**
   * @schema RedshiftClusterSecurityGroup#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema RedshiftClusterSecurityGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftClusterSecurityGroup#EC2SecurityGroups
   */
  readonly ec2SecurityGroups?: RedshiftEc2SecurityGroup[];

  /**
   * @schema RedshiftClusterSecurityGroup#IPRanges
   */
  readonly ipRanges?: RedshiftIpRange[];

  /**
   * @schema RedshiftClusterSecurityGroup#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftClusterSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterSecurityGroup(obj: RedshiftClusterSecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroupName': obj.clusterSecurityGroupName,
    'Description': obj.description,
    'EC2SecurityGroups': obj.ec2SecurityGroups?.map(y => toJson_RedshiftEc2SecurityGroup(y)),
    'IPRanges': obj.ipRanges?.map(y => toJson_RedshiftIpRange(y)),
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftSnapshot
 */
export interface RedshiftSnapshot {
  /**
   * @schema RedshiftSnapshot#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftSnapshot#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema RedshiftSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema RedshiftSnapshot#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RedshiftSnapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema RedshiftSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RedshiftSnapshot#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftSnapshot#EngineFullVersion
   */
  readonly engineFullVersion?: string;

  /**
   * @schema RedshiftSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RedshiftSnapshot#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftSnapshot#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftSnapshot#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RedshiftSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RedshiftSnapshot#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RedshiftSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftSnapshot#EncryptedWithHSM
   */
  readonly encryptedWithHsm?: boolean;

  /**
   * @schema RedshiftSnapshot#AccountsWithRestoreAccess
   */
  readonly accountsWithRestoreAccess?: RedshiftAccountWithRestoreAccess[];

  /**
   * @schema RedshiftSnapshot#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema RedshiftSnapshot#TotalBackupSizeInMegaBytes
   */
  readonly totalBackupSizeInMegaBytes?: number;

  /**
   * @schema RedshiftSnapshot#ActualIncrementalBackupSizeInMegaBytes
   */
  readonly actualIncrementalBackupSizeInMegaBytes?: number;

  /**
   * @schema RedshiftSnapshot#BackupProgressInMegaBytes
   */
  readonly backupProgressInMegaBytes?: number;

  /**
   * @schema RedshiftSnapshot#CurrentBackupRateInMegaBytesPerSecond
   */
  readonly currentBackupRateInMegaBytesPerSecond?: number;

  /**
   * @schema RedshiftSnapshot#EstimatedSecondsToCompletion
   */
  readonly estimatedSecondsToCompletion?: number;

  /**
   * @schema RedshiftSnapshot#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema RedshiftSnapshot#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema RedshiftSnapshot#Tags
   */
  readonly tags?: RedshiftTag[];

  /**
   * @schema RedshiftSnapshot#RestorableNodeTypes
   */
  readonly restorableNodeTypes?: string[];

  /**
   * @schema RedshiftSnapshot#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftSnapshot#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftSnapshot#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftSnapshot#ManualSnapshotRemainingDays
   */
  readonly manualSnapshotRemainingDays?: number;

  /**
   * @schema RedshiftSnapshot#SnapshotRetentionStartTime
   */
  readonly snapshotRetentionStartTime?: string;

}

/**
 * Converts an object of type 'RedshiftSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftSnapshot(obj: RedshiftSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'ClusterIdentifier': obj.clusterIdentifier,
    'SnapshotCreateTime': obj.snapshotCreateTime,
    'Status': obj.status,
    'Port': obj.port,
    'AvailabilityZone': obj.availabilityZone,
    'ClusterCreateTime': obj.clusterCreateTime,
    'MasterUsername': obj.masterUsername,
    'ClusterVersion': obj.clusterVersion,
    'EngineFullVersion': obj.engineFullVersion,
    'SnapshotType': obj.snapshotType,
    'NodeType': obj.nodeType,
    'NumberOfNodes': obj.numberOfNodes,
    'DBName': obj.dbName,
    'VpcId': obj.vpcId,
    'Encrypted': obj.encrypted,
    'KmsKeyId': obj.kmsKeyId,
    'EncryptedWithHSM': obj.encryptedWithHsm,
    'AccountsWithRestoreAccess': obj.accountsWithRestoreAccess?.map(y => toJson_RedshiftAccountWithRestoreAccess(y)),
    'OwnerAccount': obj.ownerAccount,
    'TotalBackupSizeInMegaBytes': obj.totalBackupSizeInMegaBytes,
    'ActualIncrementalBackupSizeInMegaBytes': obj.actualIncrementalBackupSizeInMegaBytes,
    'BackupProgressInMegaBytes': obj.backupProgressInMegaBytes,
    'CurrentBackupRateInMegaBytesPerSecond': obj.currentBackupRateInMegaBytesPerSecond,
    'EstimatedSecondsToCompletion': obj.estimatedSecondsToCompletion,
    'ElapsedTimeInSeconds': obj.elapsedTimeInSeconds,
    'SourceRegion': obj.sourceRegion,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
    'RestorableNodeTypes': obj.restorableNodeTypes?.map(y => y),
    'EnhancedVpcRouting': obj.enhancedVpcRouting,
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'ManualSnapshotRemainingDays': obj.manualSnapshotRemainingDays,
    'SnapshotRetentionStartTime': obj.snapshotRetentionStartTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftSnapshotErrorMessage
 */
export interface RedshiftSnapshotErrorMessage {
  /**
   * @schema RedshiftSnapshotErrorMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftSnapshotErrorMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema RedshiftSnapshotErrorMessage#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RedshiftSnapshotErrorMessage#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'RedshiftSnapshotErrorMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftSnapshotErrorMessage(obj: RedshiftSnapshotErrorMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'SnapshotClusterIdentifier': obj.snapshotClusterIdentifier,
    'FailureCode': obj.failureCode,
    'FailureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftTag
 */
export interface RedshiftTag {
  /**
   * @schema RedshiftTag#Key
   */
  readonly key?: string;

  /**
   * @schema RedshiftTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'RedshiftTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftTag(obj: RedshiftTag | undefined): Record<string, any> | undefined {
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
 * @schema RedshiftCluster
 */
export interface RedshiftCluster {
  /**
   * @schema RedshiftCluster#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftCluster#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftCluster#ClusterStatus
   */
  readonly clusterStatus?: string;

  /**
   * @schema RedshiftCluster#ClusterAvailabilityStatus
   */
  readonly clusterAvailabilityStatus?: string;

  /**
   * @schema RedshiftCluster#ModifyStatus
   */
  readonly modifyStatus?: string;

  /**
   * @schema RedshiftCluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RedshiftCluster#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RedshiftCluster#Endpoint
   */
  readonly endpoint?: RedshiftEndpoint;

  /**
   * @schema RedshiftCluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema RedshiftCluster#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftCluster#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftCluster#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: RedshiftClusterSecurityGroupMembership[];

  /**
   * @schema RedshiftCluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: RedshiftVpcSecurityGroupMembership[];

  /**
   * @schema RedshiftCluster#ClusterParameterGroups
   */
  readonly clusterParameterGroups?: RedshiftClusterParameterGroupStatus[];

  /**
   * @schema RedshiftCluster#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftCluster#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RedshiftCluster#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RedshiftCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RedshiftCluster#PendingModifiedValues
   */
  readonly pendingModifiedValues?: RedshiftPendingModifiedValues;

  /**
   * @schema RedshiftCluster#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftCluster#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema RedshiftCluster#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftCluster#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RedshiftCluster#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RedshiftCluster#RestoreStatus
   */
  readonly restoreStatus?: RedshiftRestoreStatus;

  /**
   * @schema RedshiftCluster#DataTransferProgress
   */
  readonly dataTransferProgress?: RedshiftDataTransferProgress;

  /**
   * @schema RedshiftCluster#HsmStatus
   */
  readonly hsmStatus?: RedshiftHsmStatus;

  /**
   * @schema RedshiftCluster#ClusterSnapshotCopyStatus
   */
  readonly clusterSnapshotCopyStatus?: RedshiftClusterSnapshotCopyStatus;

  /**
   * @schema RedshiftCluster#ClusterPublicKey
   */
  readonly clusterPublicKey?: string;

  /**
   * @schema RedshiftCluster#ClusterNodes
   */
  readonly clusterNodes?: RedshiftClusterNode[];

  /**
   * @schema RedshiftCluster#ElasticIpStatus
   */
  readonly elasticIpStatus?: RedshiftElasticIpStatus;

  /**
   * @schema RedshiftCluster#ClusterRevisionNumber
   */
  readonly clusterRevisionNumber?: string;

  /**
   * @schema RedshiftCluster#Tags
   */
  readonly tags?: RedshiftTag[];

  /**
   * @schema RedshiftCluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftCluster#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftCluster#IamRoles
   */
  readonly iamRoles?: RedshiftClusterIamRole[];

  /**
   * @schema RedshiftCluster#PendingActions
   */
  readonly pendingActions?: string[];

  /**
   * @schema RedshiftCluster#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftCluster#ElasticResizeNumberOfNodeOptions
   */
  readonly elasticResizeNumberOfNodeOptions?: string;

  /**
   * @schema RedshiftCluster#DeferredMaintenanceWindows
   */
  readonly deferredMaintenanceWindows?: RedshiftDeferredMaintenanceWindow[];

  /**
   * @schema RedshiftCluster#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

  /**
   * @schema RedshiftCluster#SnapshotScheduleState
   */
  readonly snapshotScheduleState?: string;

  /**
   * @schema RedshiftCluster#ExpectedNextSnapshotScheduleTime
   */
  readonly expectedNextSnapshotScheduleTime?: string;

  /**
   * @schema RedshiftCluster#ExpectedNextSnapshotScheduleTimeStatus
   */
  readonly expectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * @schema RedshiftCluster#NextMaintenanceWindowStartTime
   */
  readonly nextMaintenanceWindowStartTime?: string;

  /**
   * @schema RedshiftCluster#ResizeInfo
   */
  readonly resizeInfo?: RedshiftResizeInfo;

  /**
   * @schema RedshiftCluster#AvailabilityZoneRelocationStatus
   */
  readonly availabilityZoneRelocationStatus?: string;

  /**
   * @schema RedshiftCluster#ClusterNamespaceArn
   */
  readonly clusterNamespaceArn?: string;

  /**
   * @schema RedshiftCluster#TotalStorageCapacityInMegaBytes
   */
  readonly totalStorageCapacityInMegaBytes?: number;

  /**
   * @schema RedshiftCluster#AquaConfiguration
   */
  readonly aquaConfiguration?: RedshiftAquaConfiguration;

}

/**
 * Converts an object of type 'RedshiftCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftCluster(obj: RedshiftCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'NodeType': obj.nodeType,
    'ClusterStatus': obj.clusterStatus,
    'ClusterAvailabilityStatus': obj.clusterAvailabilityStatus,
    'ModifyStatus': obj.modifyStatus,
    'MasterUsername': obj.masterUsername,
    'DBName': obj.dbName,
    'Endpoint': toJson_RedshiftEndpoint(obj.endpoint),
    'ClusterCreateTime': obj.clusterCreateTime,
    'AutomatedSnapshotRetentionPeriod': obj.automatedSnapshotRetentionPeriod,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'ClusterSecurityGroups': obj.clusterSecurityGroups?.map(y => toJson_RedshiftClusterSecurityGroupMembership(y)),
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_RedshiftVpcSecurityGroupMembership(y)),
    'ClusterParameterGroups': obj.clusterParameterGroups?.map(y => toJson_RedshiftClusterParameterGroupStatus(y)),
    'ClusterSubnetGroupName': obj.clusterSubnetGroupName,
    'VpcId': obj.vpcId,
    'AvailabilityZone': obj.availabilityZone,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PendingModifiedValues': toJson_RedshiftPendingModifiedValues(obj.pendingModifiedValues),
    'ClusterVersion': obj.clusterVersion,
    'AllowVersionUpgrade': obj.allowVersionUpgrade,
    'NumberOfNodes': obj.numberOfNodes,
    'PubliclyAccessible': obj.publiclyAccessible,
    'Encrypted': obj.encrypted,
    'RestoreStatus': toJson_RedshiftRestoreStatus(obj.restoreStatus),
    'DataTransferProgress': toJson_RedshiftDataTransferProgress(obj.dataTransferProgress),
    'HsmStatus': toJson_RedshiftHsmStatus(obj.hsmStatus),
    'ClusterSnapshotCopyStatus': toJson_RedshiftClusterSnapshotCopyStatus(obj.clusterSnapshotCopyStatus),
    'ClusterPublicKey': obj.clusterPublicKey,
    'ClusterNodes': obj.clusterNodes?.map(y => toJson_RedshiftClusterNode(y)),
    'ElasticIpStatus': toJson_RedshiftElasticIpStatus(obj.elasticIpStatus),
    'ClusterRevisionNumber': obj.clusterRevisionNumber,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
    'KmsKeyId': obj.kmsKeyId,
    'EnhancedVpcRouting': obj.enhancedVpcRouting,
    'IamRoles': obj.iamRoles?.map(y => toJson_RedshiftClusterIamRole(y)),
    'PendingActions': obj.pendingActions?.map(y => y),
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'ElasticResizeNumberOfNodeOptions': obj.elasticResizeNumberOfNodeOptions,
    'DeferredMaintenanceWindows': obj.deferredMaintenanceWindows?.map(y => toJson_RedshiftDeferredMaintenanceWindow(y)),
    'SnapshotScheduleIdentifier': obj.snapshotScheduleIdentifier,
    'SnapshotScheduleState': obj.snapshotScheduleState,
    'ExpectedNextSnapshotScheduleTime': obj.expectedNextSnapshotScheduleTime,
    'ExpectedNextSnapshotScheduleTimeStatus': obj.expectedNextSnapshotScheduleTimeStatus,
    'NextMaintenanceWindowStartTime': obj.nextMaintenanceWindowStartTime,
    'ResizeInfo': toJson_RedshiftResizeInfo(obj.resizeInfo),
    'AvailabilityZoneRelocationStatus': obj.availabilityZoneRelocationStatus,
    'ClusterNamespaceArn': obj.clusterNamespaceArn,
    'TotalStorageCapacityInMegaBytes': obj.totalStorageCapacityInMegaBytes,
    'AquaConfiguration': toJson_RedshiftAquaConfiguration(obj.aquaConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterParameterGroup
 */
export interface RedshiftClusterParameterGroup {
  /**
   * @schema RedshiftClusterParameterGroup#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftClusterParameterGroup#ParameterGroupFamily
   */
  readonly parameterGroupFamily?: string;

  /**
   * @schema RedshiftClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftClusterParameterGroup#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftClusterParameterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterParameterGroup(obj: RedshiftClusterParameterGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'ParameterGroupFamily': obj.parameterGroupFamily,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterSubnetGroup
 */
export interface RedshiftClusterSubnetGroup {
  /**
   * @schema RedshiftClusterSubnetGroup#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftClusterSubnetGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftClusterSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RedshiftClusterSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema RedshiftClusterSubnetGroup#Subnets
   */
  readonly subnets?: RedshiftSubnet[];

  /**
   * @schema RedshiftClusterSubnetGroup#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftClusterSubnetGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterSubnetGroup(obj: RedshiftClusterSubnetGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSubnetGroupName': obj.clusterSubnetGroupName,
    'Description': obj.description,
    'VpcId': obj.vpcId,
    'SubnetGroupStatus': obj.subnetGroupStatus,
    'Subnets': obj.subnets?.map(y => toJson_RedshiftSubnet(y)),
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftVpcSecurityGroupMembership
 */
export interface RedshiftVpcSecurityGroupMembership {
  /**
   * @schema RedshiftVpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema RedshiftVpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RedshiftVpcSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftVpcSecurityGroupMembership(obj: RedshiftVpcSecurityGroupMembership | undefined): Record<string, any> | undefined {
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
 * @schema RedshiftVpcEndpoint
 */
export interface RedshiftVpcEndpoint {
  /**
   * @schema RedshiftVpcEndpoint#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema RedshiftVpcEndpoint#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RedshiftVpcEndpoint#NetworkInterfaces
   */
  readonly networkInterfaces?: RedshiftNetworkInterface[];

}

/**
 * Converts an object of type 'RedshiftVpcEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftVpcEndpoint(obj: RedshiftVpcEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcEndpointId': obj.vpcEndpointId,
    'VpcId': obj.vpcId,
    'NetworkInterfaces': obj.networkInterfaces?.map(y => toJson_RedshiftNetworkInterface(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEventSubscription
 */
export interface RedshiftEventSubscription {
  /**
   * @schema RedshiftEventSubscription#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema RedshiftEventSubscription#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema RedshiftEventSubscription#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RedshiftEventSubscription#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftEventSubscription#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

  /**
   * @schema RedshiftEventSubscription#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftEventSubscription#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema RedshiftEventSubscription#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema RedshiftEventSubscription#Severity
   */
  readonly severity?: string;

  /**
   * @schema RedshiftEventSubscription#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RedshiftEventSubscription#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftEventSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEventSubscription(obj: RedshiftEventSubscription | undefined): Record<string, any> | undefined {
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
    'Severity': obj.severity,
    'Enabled': obj.enabled,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftHsmClientCertificate
 */
export interface RedshiftHsmClientCertificate {
  /**
   * @schema RedshiftHsmClientCertificate#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftHsmClientCertificate#HsmClientCertificatePublicKey
   */
  readonly hsmClientCertificatePublicKey?: string;

  /**
   * @schema RedshiftHsmClientCertificate#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftHsmClientCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftHsmClientCertificate(obj: RedshiftHsmClientCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmClientCertificateIdentifier': obj.hsmClientCertificateIdentifier,
    'HsmClientCertificatePublicKey': obj.hsmClientCertificatePublicKey,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftHsmConfiguration
 */
export interface RedshiftHsmConfiguration {
  /**
   * @schema RedshiftHsmConfiguration#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftHsmConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftHsmConfiguration#HsmIpAddress
   */
  readonly hsmIpAddress?: string;

  /**
   * @schema RedshiftHsmConfiguration#HsmPartitionName
   */
  readonly hsmPartitionName?: string;

  /**
   * @schema RedshiftHsmConfiguration#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftHsmConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftHsmConfiguration(obj: RedshiftHsmConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmConfigurationIdentifier': obj.hsmConfigurationIdentifier,
    'Description': obj.description,
    'HsmIpAddress': obj.hsmIpAddress,
    'HsmPartitionName': obj.hsmPartitionName,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftScheduledActionType
 */
export interface RedshiftScheduledActionType {
  /**
   * @schema RedshiftScheduledActionType#ResizeCluster
   */
  readonly resizeCluster?: RedshiftResizeClusterMessage;

  /**
   * @schema RedshiftScheduledActionType#PauseCluster
   */
  readonly pauseCluster?: RedshiftPauseClusterMessage;

  /**
   * @schema RedshiftScheduledActionType#ResumeCluster
   */
  readonly resumeCluster?: RedshiftResumeClusterMessage;

}

/**
 * Converts an object of type 'RedshiftScheduledActionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftScheduledActionType(obj: RedshiftScheduledActionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResizeCluster': toJson_RedshiftResizeClusterMessage(obj.resizeCluster),
    'PauseCluster': toJson_RedshiftPauseClusterMessage(obj.pauseCluster),
    'ResumeCluster': toJson_RedshiftResumeClusterMessage(obj.resumeCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftSnapshotCopyGrant
 */
export interface RedshiftSnapshotCopyGrant {
  /**
   * @schema RedshiftSnapshotCopyGrant#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

  /**
   * @schema RedshiftSnapshotCopyGrant#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftSnapshotCopyGrant#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftSnapshotCopyGrant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftSnapshotCopyGrant(obj: RedshiftSnapshotCopyGrant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotCopyGrantName': obj.snapshotCopyGrantName,
    'KmsKeyId': obj.kmsKeyId,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterAssociatedToSchedule
 */
export interface RedshiftClusterAssociatedToSchedule {
  /**
   * @schema RedshiftClusterAssociatedToSchedule#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftClusterAssociatedToSchedule#ScheduleAssociationState
   */
  readonly scheduleAssociationState?: string;

}

/**
 * Converts an object of type 'RedshiftClusterAssociatedToSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterAssociatedToSchedule(obj: RedshiftClusterAssociatedToSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'ScheduleAssociationState': obj.scheduleAssociationState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAccountAttribute
 */
export interface RedshiftAccountAttribute {
  /**
   * @schema RedshiftAccountAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema RedshiftAccountAttribute#AttributeValues
   */
  readonly attributeValues?: RedshiftAttributeValueTarget[];

}

/**
 * Converts an object of type 'RedshiftAccountAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAccountAttribute(obj: RedshiftAccountAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'AttributeValues': obj.attributeValues?.map(y => toJson_RedshiftAttributeValueTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAuthenticationProfile
 */
export interface RedshiftAuthenticationProfile {
  /**
   * @schema RedshiftAuthenticationProfile#AuthenticationProfileName
   */
  readonly authenticationProfileName?: string;

  /**
   * @schema RedshiftAuthenticationProfile#AuthenticationProfileContent
   */
  readonly authenticationProfileContent?: string;

}

/**
 * Converts an object of type 'RedshiftAuthenticationProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAuthenticationProfile(obj: RedshiftAuthenticationProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationProfileName': obj.authenticationProfileName,
    'AuthenticationProfileContent': obj.authenticationProfileContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterDbRevision
 */
export interface RedshiftClusterDbRevision {
  /**
   * @schema RedshiftClusterDbRevision#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftClusterDbRevision#CurrentDatabaseRevision
   */
  readonly currentDatabaseRevision?: string;

  /**
   * @schema RedshiftClusterDbRevision#DatabaseRevisionReleaseDate
   */
  readonly databaseRevisionReleaseDate?: string;

  /**
   * @schema RedshiftClusterDbRevision#RevisionTargets
   */
  readonly revisionTargets?: RedshiftRevisionTarget[];

}

/**
 * Converts an object of type 'RedshiftClusterDbRevision' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterDbRevision(obj: RedshiftClusterDbRevision | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterIdentifier': obj.clusterIdentifier,
    'CurrentDatabaseRevision': obj.currentDatabaseRevision,
    'DatabaseRevisionReleaseDate': obj.databaseRevisionReleaseDate,
    'RevisionTargets': obj.revisionTargets?.map(y => toJson_RedshiftRevisionTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftParameter
 */
export interface RedshiftParameter {
  /**
   * @schema RedshiftParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema RedshiftParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema RedshiftParameter#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftParameter#Source
   */
  readonly source?: string;

  /**
   * @schema RedshiftParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema RedshiftParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema RedshiftParameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema RedshiftParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema RedshiftParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

}

/**
 * Converts an object of type 'RedshiftParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftParameter(obj: RedshiftParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterName': obj.parameterName,
    'ParameterValue': obj.parameterValue,
    'Description': obj.description,
    'Source': obj.source,
    'DataType': obj.dataType,
    'AllowedValues': obj.allowedValues,
    'ApplyType': obj.applyType,
    'IsModifiable': obj.isModifiable,
    'MinimumEngineVersion': obj.minimumEngineVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftSnapshotSortingEntity
 */
export interface RedshiftSnapshotSortingEntity {
  /**
   * @schema RedshiftSnapshotSortingEntity#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema RedshiftSnapshotSortingEntity#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * Converts an object of type 'RedshiftSnapshotSortingEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftSnapshotSortingEntity(obj: RedshiftSnapshotSortingEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attribute': obj.attribute,
    'SortOrder': obj.sortOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftMaintenanceTrack
 */
export interface RedshiftMaintenanceTrack {
  /**
   * @schema RedshiftMaintenanceTrack#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftMaintenanceTrack#DatabaseVersion
   */
  readonly databaseVersion?: string;

  /**
   * @schema RedshiftMaintenanceTrack#UpdateTargets
   */
  readonly updateTargets?: RedshiftUpdateTarget[];

}

/**
 * Converts an object of type 'RedshiftMaintenanceTrack' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftMaintenanceTrack(obj: RedshiftMaintenanceTrack | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'DatabaseVersion': obj.databaseVersion,
    'UpdateTargets': obj.updateTargets?.map(y => toJson_RedshiftUpdateTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterVersion
 */
export interface RedshiftClusterVersion {
  /**
   * @schema RedshiftClusterVersion#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftClusterVersion#ClusterParameterGroupFamily
   */
  readonly clusterParameterGroupFamily?: string;

  /**
   * @schema RedshiftClusterVersion#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'RedshiftClusterVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterVersion(obj: RedshiftClusterVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterVersion': obj.clusterVersion,
    'ClusterParameterGroupFamily': obj.clusterParameterGroupFamily,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDefaultClusterParameters
 */
export interface RedshiftDefaultClusterParameters {
  /**
   * @schema RedshiftDefaultClusterParameters#ParameterGroupFamily
   */
  readonly parameterGroupFamily?: string;

  /**
   * @schema RedshiftDefaultClusterParameters#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDefaultClusterParameters#Parameters
   */
  readonly parameters?: RedshiftParameter[];

}

/**
 * Converts an object of type 'RedshiftDefaultClusterParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDefaultClusterParameters(obj: RedshiftDefaultClusterParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupFamily': obj.parameterGroupFamily,
    'Marker': obj.marker,
    'Parameters': obj.parameters?.map(y => toJson_RedshiftParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEventCategoriesMap
 */
export interface RedshiftEventCategoriesMap {
  /**
   * @schema RedshiftEventCategoriesMap#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftEventCategoriesMap#Events
   */
  readonly events?: RedshiftEventInfoMap[];

}

/**
 * Converts an object of type 'RedshiftEventCategoriesMap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEventCategoriesMap(obj: RedshiftEventCategoriesMap | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'Events': obj.events?.map(y => toJson_RedshiftEventInfoMap(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEvent
 */
export interface RedshiftEvent {
  /**
   * @schema RedshiftEvent#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema RedshiftEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftEvent#Message
   */
  readonly message?: string;

  /**
   * @schema RedshiftEvent#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RedshiftEvent#Severity
   */
  readonly severity?: string;

  /**
   * @schema RedshiftEvent#Date
   */
  readonly date?: string;

  /**
   * @schema RedshiftEvent#EventId
   */
  readonly eventId?: string;

}

/**
 * Converts an object of type 'RedshiftEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEvent(obj: RedshiftEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIdentifier': obj.sourceIdentifier,
    'SourceType': obj.sourceType,
    'Message': obj.message,
    'EventCategories': obj.eventCategories?.map(y => y),
    'Severity': obj.severity,
    'Date': obj.date,
    'EventId': obj.eventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftNodeConfigurationOptionsFilter
 */
export interface RedshiftNodeConfigurationOptionsFilter {
  /**
   * @schema RedshiftNodeConfigurationOptionsFilter#Name
   */
  readonly name?: string;

  /**
   * @schema RedshiftNodeConfigurationOptionsFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema RedshiftNodeConfigurationOptionsFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'RedshiftNodeConfigurationOptionsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftNodeConfigurationOptionsFilter(obj: RedshiftNodeConfigurationOptionsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Operator': obj.operator,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftNodeConfigurationOption
 */
export interface RedshiftNodeConfigurationOption {
  /**
   * @schema RedshiftNodeConfigurationOption#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftNodeConfigurationOption#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftNodeConfigurationOption#EstimatedDiskUtilizationPercent
   */
  readonly estimatedDiskUtilizationPercent?: number;

  /**
   * @schema RedshiftNodeConfigurationOption#Mode
   */
  readonly mode?: string;

}

/**
 * Converts an object of type 'RedshiftNodeConfigurationOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftNodeConfigurationOption(obj: RedshiftNodeConfigurationOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeType': obj.nodeType,
    'NumberOfNodes': obj.numberOfNodes,
    'EstimatedDiskUtilizationPercent': obj.estimatedDiskUtilizationPercent,
    'Mode': obj.mode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftOrderableClusterOption
 */
export interface RedshiftOrderableClusterOption {
  /**
   * @schema RedshiftOrderableClusterOption#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftOrderableClusterOption#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema RedshiftOrderableClusterOption#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftOrderableClusterOption#AvailabilityZones
   */
  readonly availabilityZones?: RedshiftAvailabilityZone[];

}

/**
 * Converts an object of type 'RedshiftOrderableClusterOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftOrderableClusterOption(obj: RedshiftOrderableClusterOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterVersion': obj.clusterVersion,
    'ClusterType': obj.clusterType,
    'NodeType': obj.nodeType,
    'AvailabilityZones': obj.availabilityZones?.map(y => toJson_RedshiftAvailabilityZone(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftPartnerIntegrationInfo
 */
export interface RedshiftPartnerIntegrationInfo {
  /**
   * @schema RedshiftPartnerIntegrationInfo#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RedshiftPartnerIntegrationInfo#PartnerName
   */
  readonly partnerName?: string;

  /**
   * @schema RedshiftPartnerIntegrationInfo#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftPartnerIntegrationInfo#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RedshiftPartnerIntegrationInfo#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema RedshiftPartnerIntegrationInfo#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'RedshiftPartnerIntegrationInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftPartnerIntegrationInfo(obj: RedshiftPartnerIntegrationInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'PartnerName': obj.partnerName,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'CreatedAt': obj.createdAt,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftReservedNodeOffering
 */
export interface RedshiftReservedNodeOffering {
  /**
   * @schema RedshiftReservedNodeOffering#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId?: string;

  /**
   * @schema RedshiftReservedNodeOffering#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftReservedNodeOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema RedshiftReservedNodeOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema RedshiftReservedNodeOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema RedshiftReservedNodeOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema RedshiftReservedNodeOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RedshiftReservedNodeOffering#RecurringCharges
   */
  readonly recurringCharges?: RedshiftRecurringCharge[];

  /**
   * @schema RedshiftReservedNodeOffering#ReservedNodeOfferingType
   */
  readonly reservedNodeOfferingType?: string;

}

/**
 * Converts an object of type 'RedshiftReservedNodeOffering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftReservedNodeOffering(obj: RedshiftReservedNodeOffering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedNodeOfferingId': obj.reservedNodeOfferingId,
    'NodeType': obj.nodeType,
    'Duration': obj.duration,
    'FixedPrice': obj.fixedPrice,
    'UsagePrice': obj.usagePrice,
    'CurrencyCode': obj.currencyCode,
    'OfferingType': obj.offeringType,
    'RecurringCharges': obj.recurringCharges?.map(y => toJson_RedshiftRecurringCharge(y)),
    'ReservedNodeOfferingType': obj.reservedNodeOfferingType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftScheduledActionFilter
 */
export interface RedshiftScheduledActionFilter {
  /**
   * @schema RedshiftScheduledActionFilter#Name
   */
  readonly name?: string;

  /**
   * @schema RedshiftScheduledActionFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'RedshiftScheduledActionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftScheduledActionFilter(obj: RedshiftScheduledActionFilter | undefined): Record<string, any> | undefined {
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
 * @schema RedshiftTableRestoreStatus
 */
export interface RedshiftTableRestoreStatus {
  /**
   * @schema RedshiftTableRestoreStatus#TableRestoreRequestId
   */
  readonly tableRestoreRequestId?: string;

  /**
   * @schema RedshiftTableRestoreStatus#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftTableRestoreStatus#Message
   */
  readonly message?: string;

  /**
   * @schema RedshiftTableRestoreStatus#RequestTime
   */
  readonly requestTime?: string;

  /**
   * @schema RedshiftTableRestoreStatus#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema RedshiftTableRestoreStatus#TotalDataInMegaBytes
   */
  readonly totalDataInMegaBytes?: number;

  /**
   * @schema RedshiftTableRestoreStatus#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftTableRestoreStatus#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftTableRestoreStatus#SourceDatabaseName
   */
  readonly sourceDatabaseName?: string;

  /**
   * @schema RedshiftTableRestoreStatus#SourceSchemaName
   */
  readonly sourceSchemaName?: string;

  /**
   * @schema RedshiftTableRestoreStatus#SourceTableName
   */
  readonly sourceTableName?: string;

  /**
   * @schema RedshiftTableRestoreStatus#TargetDatabaseName
   */
  readonly targetDatabaseName?: string;

  /**
   * @schema RedshiftTableRestoreStatus#TargetSchemaName
   */
  readonly targetSchemaName?: string;

  /**
   * @schema RedshiftTableRestoreStatus#NewTableName
   */
  readonly newTableName?: string;

}

/**
 * Converts an object of type 'RedshiftTableRestoreStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftTableRestoreStatus(obj: RedshiftTableRestoreStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableRestoreRequestId': obj.tableRestoreRequestId,
    'Status': obj.status,
    'Message': obj.message,
    'RequestTime': obj.requestTime,
    'ProgressInMegaBytes': obj.progressInMegaBytes,
    'TotalDataInMegaBytes': obj.totalDataInMegaBytes,
    'ClusterIdentifier': obj.clusterIdentifier,
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'SourceDatabaseName': obj.sourceDatabaseName,
    'SourceSchemaName': obj.sourceSchemaName,
    'SourceTableName': obj.sourceTableName,
    'TargetDatabaseName': obj.targetDatabaseName,
    'TargetSchemaName': obj.targetSchemaName,
    'NewTableName': obj.newTableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftTaggedResource
 */
export interface RedshiftTaggedResource {
  /**
   * @schema RedshiftTaggedResource#Tag
   */
  readonly tag?: RedshiftTag;

  /**
   * @schema RedshiftTaggedResource#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema RedshiftTaggedResource#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'RedshiftTaggedResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftTaggedResource(obj: RedshiftTaggedResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tag': toJson_RedshiftTag(obj.tag),
    'ResourceName': obj.resourceName,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAquaConfiguration
 */
export interface RedshiftAquaConfiguration {
  /**
   * @schema RedshiftAquaConfiguration#AquaStatus
   */
  readonly aquaStatus?: string;

  /**
   * @schema RedshiftAquaConfiguration#AquaConfigurationStatus
   */
  readonly aquaConfigurationStatus?: string;

}

/**
 * Converts an object of type 'RedshiftAquaConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAquaConfiguration(obj: RedshiftAquaConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AquaStatus': obj.aquaStatus,
    'AquaConfigurationStatus': obj.aquaConfigurationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRecurringCharge
 */
export interface RedshiftRecurringCharge {
  /**
   * @schema RedshiftRecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema RedshiftRecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * Converts an object of type 'RedshiftRecurringCharge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRecurringCharge(obj: RedshiftRecurringCharge | undefined): Record<string, any> | undefined {
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
 * @schema RedshiftEc2SecurityGroup
 */
export interface RedshiftEc2SecurityGroup {
  /**
   * @schema RedshiftEc2SecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftEc2SecurityGroup#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RedshiftEc2SecurityGroup#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

  /**
   * @schema RedshiftEc2SecurityGroup#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftEc2SecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEc2SecurityGroup(obj: RedshiftEc2SecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'EC2SecurityGroupName': obj.ec2SecurityGroupName,
    'EC2SecurityGroupOwnerId': obj.ec2SecurityGroupOwnerId,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftIpRange
 */
export interface RedshiftIpRange {
  /**
   * @schema RedshiftIpRange#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftIpRange#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RedshiftIpRange#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * Converts an object of type 'RedshiftIpRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftIpRange(obj: RedshiftIpRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'CIDRIP': obj.cidrip,
    'Tags': obj.tags?.map(y => toJson_RedshiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAccountWithRestoreAccess
 */
export interface RedshiftAccountWithRestoreAccess {
  /**
   * @schema RedshiftAccountWithRestoreAccess#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema RedshiftAccountWithRestoreAccess#AccountAlias
   */
  readonly accountAlias?: string;

}

/**
 * Converts an object of type 'RedshiftAccountWithRestoreAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAccountWithRestoreAccess(obj: RedshiftAccountWithRestoreAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'AccountAlias': obj.accountAlias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEndpoint
 */
export interface RedshiftEndpoint {
  /**
   * @schema RedshiftEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema RedshiftEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema RedshiftEndpoint#VpcEndpoints
   */
  readonly vpcEndpoints?: RedshiftVpcEndpoint[];

}

/**
 * Converts an object of type 'RedshiftEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEndpoint(obj: RedshiftEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'Port': obj.port,
    'VpcEndpoints': obj.vpcEndpoints?.map(y => toJson_RedshiftVpcEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterSecurityGroupMembership
 */
export interface RedshiftClusterSecurityGroupMembership {
  /**
   * @schema RedshiftClusterSecurityGroupMembership#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema RedshiftClusterSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RedshiftClusterSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterSecurityGroupMembership(obj: RedshiftClusterSecurityGroupMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterSecurityGroupName': obj.clusterSecurityGroupName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterParameterGroupStatus
 */
export interface RedshiftClusterParameterGroupStatus {
  /**
   * @schema RedshiftClusterParameterGroupStatus#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftClusterParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema RedshiftClusterParameterGroupStatus#ClusterParameterStatusList
   */
  readonly clusterParameterStatusList?: RedshiftClusterParameterStatus[];

}

/**
 * Converts an object of type 'RedshiftClusterParameterGroupStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterParameterGroupStatus(obj: RedshiftClusterParameterGroupStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'ParameterApplyStatus': obj.parameterApplyStatus,
    'ClusterParameterStatusList': obj.clusterParameterStatusList?.map(y => toJson_RedshiftClusterParameterStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftPendingModifiedValues
 */
export interface RedshiftPendingModifiedValues {
  /**
   * @schema RedshiftPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RedshiftPendingModifiedValues#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftPendingModifiedValues#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftPendingModifiedValues#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema RedshiftPendingModifiedValues#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftPendingModifiedValues#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftPendingModifiedValues#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftPendingModifiedValues#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RedshiftPendingModifiedValues#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftPendingModifiedValues#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftPendingModifiedValues#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * Converts an object of type 'RedshiftPendingModifiedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftPendingModifiedValues(obj: RedshiftPendingModifiedValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MasterUserPassword': obj.masterUserPassword,
    'NodeType': obj.nodeType,
    'NumberOfNodes': obj.numberOfNodes,
    'ClusterType': obj.clusterType,
    'ClusterVersion': obj.clusterVersion,
    'AutomatedSnapshotRetentionPeriod': obj.automatedSnapshotRetentionPeriod,
    'ClusterIdentifier': obj.clusterIdentifier,
    'PubliclyAccessible': obj.publiclyAccessible,
    'EnhancedVpcRouting': obj.enhancedVpcRouting,
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'EncryptionType': obj.encryptionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRestoreStatus
 */
export interface RedshiftRestoreStatus {
  /**
   * @schema RedshiftRestoreStatus#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftRestoreStatus#CurrentRestoreRateInMegaBytesPerSecond
   */
  readonly currentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * @schema RedshiftRestoreStatus#SnapshotSizeInMegaBytes
   */
  readonly snapshotSizeInMegaBytes?: number;

  /**
   * @schema RedshiftRestoreStatus#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema RedshiftRestoreStatus#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema RedshiftRestoreStatus#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

}

/**
 * Converts an object of type 'RedshiftRestoreStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRestoreStatus(obj: RedshiftRestoreStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'CurrentRestoreRateInMegaBytesPerSecond': obj.currentRestoreRateInMegaBytesPerSecond,
    'SnapshotSizeInMegaBytes': obj.snapshotSizeInMegaBytes,
    'ProgressInMegaBytes': obj.progressInMegaBytes,
    'ElapsedTimeInSeconds': obj.elapsedTimeInSeconds,
    'EstimatedTimeToCompletionInSeconds': obj.estimatedTimeToCompletionInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDataTransferProgress
 */
export interface RedshiftDataTransferProgress {
  /**
   * @schema RedshiftDataTransferProgress#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftDataTransferProgress#CurrentRateInMegaBytesPerSecond
   */
  readonly currentRateInMegaBytesPerSecond?: number;

  /**
   * @schema RedshiftDataTransferProgress#TotalDataInMegaBytes
   */
  readonly totalDataInMegaBytes?: number;

  /**
   * @schema RedshiftDataTransferProgress#DataTransferredInMegaBytes
   */
  readonly dataTransferredInMegaBytes?: number;

  /**
   * @schema RedshiftDataTransferProgress#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

  /**
   * @schema RedshiftDataTransferProgress#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

}

/**
 * Converts an object of type 'RedshiftDataTransferProgress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDataTransferProgress(obj: RedshiftDataTransferProgress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'CurrentRateInMegaBytesPerSecond': obj.currentRateInMegaBytesPerSecond,
    'TotalDataInMegaBytes': obj.totalDataInMegaBytes,
    'DataTransferredInMegaBytes': obj.dataTransferredInMegaBytes,
    'EstimatedTimeToCompletionInSeconds': obj.estimatedTimeToCompletionInSeconds,
    'ElapsedTimeInSeconds': obj.elapsedTimeInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftHsmStatus
 */
export interface RedshiftHsmStatus {
  /**
   * @schema RedshiftHsmStatus#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftHsmStatus#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftHsmStatus#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RedshiftHsmStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftHsmStatus(obj: RedshiftHsmStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmClientCertificateIdentifier': obj.hsmClientCertificateIdentifier,
    'HsmConfigurationIdentifier': obj.hsmConfigurationIdentifier,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterSnapshotCopyStatus
 */
export interface RedshiftClusterSnapshotCopyStatus {
  /**
   * @schema RedshiftClusterSnapshotCopyStatus#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema RedshiftClusterSnapshotCopyStatus#RetentionPeriod
   */
  readonly retentionPeriod?: number;

  /**
   * @schema RedshiftClusterSnapshotCopyStatus#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftClusterSnapshotCopyStatus#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

}

/**
 * Converts an object of type 'RedshiftClusterSnapshotCopyStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterSnapshotCopyStatus(obj: RedshiftClusterSnapshotCopyStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationRegion': obj.destinationRegion,
    'RetentionPeriod': obj.retentionPeriod,
    'ManualSnapshotRetentionPeriod': obj.manualSnapshotRetentionPeriod,
    'SnapshotCopyGrantName': obj.snapshotCopyGrantName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterNode
 */
export interface RedshiftClusterNode {
  /**
   * @schema RedshiftClusterNode#NodeRole
   */
  readonly nodeRole?: string;

  /**
   * @schema RedshiftClusterNode#PrivateIPAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema RedshiftClusterNode#PublicIPAddress
   */
  readonly publicIpAddress?: string;

}

/**
 * Converts an object of type 'RedshiftClusterNode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterNode(obj: RedshiftClusterNode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeRole': obj.nodeRole,
    'PrivateIPAddress': obj.privateIpAddress,
    'PublicIPAddress': obj.publicIpAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftElasticIpStatus
 */
export interface RedshiftElasticIpStatus {
  /**
   * @schema RedshiftElasticIpStatus#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema RedshiftElasticIpStatus#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RedshiftElasticIpStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftElasticIpStatus(obj: RedshiftElasticIpStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticIp': obj.elasticIp,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterIamRole
 */
export interface RedshiftClusterIamRole {
  /**
   * @schema RedshiftClusterIamRole#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema RedshiftClusterIamRole#ApplyStatus
   */
  readonly applyStatus?: string;

}

/**
 * Converts an object of type 'RedshiftClusterIamRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterIamRole(obj: RedshiftClusterIamRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamRoleArn': obj.iamRoleArn,
    'ApplyStatus': obj.applyStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftDeferredMaintenanceWindow
 */
export interface RedshiftDeferredMaintenanceWindow {
  /**
   * @schema RedshiftDeferredMaintenanceWindow#DeferMaintenanceIdentifier
   */
  readonly deferMaintenanceIdentifier?: string;

  /**
   * @schema RedshiftDeferredMaintenanceWindow#DeferMaintenanceStartTime
   */
  readonly deferMaintenanceStartTime?: string;

  /**
   * @schema RedshiftDeferredMaintenanceWindow#DeferMaintenanceEndTime
   */
  readonly deferMaintenanceEndTime?: string;

}

/**
 * Converts an object of type 'RedshiftDeferredMaintenanceWindow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftDeferredMaintenanceWindow(obj: RedshiftDeferredMaintenanceWindow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeferMaintenanceIdentifier': obj.deferMaintenanceIdentifier,
    'DeferMaintenanceStartTime': obj.deferMaintenanceStartTime,
    'DeferMaintenanceEndTime': obj.deferMaintenanceEndTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftResizeInfo
 */
export interface RedshiftResizeInfo {
  /**
   * @schema RedshiftResizeInfo#ResizeType
   */
  readonly resizeType?: string;

  /**
   * @schema RedshiftResizeInfo#AllowCancelResize
   */
  readonly allowCancelResize?: boolean;

}

/**
 * Converts an object of type 'RedshiftResizeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftResizeInfo(obj: RedshiftResizeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResizeType': obj.resizeType,
    'AllowCancelResize': obj.allowCancelResize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftSubnet
 */
export interface RedshiftSubnet {
  /**
   * @schema RedshiftSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema RedshiftSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: RedshiftAvailabilityZone;

  /**
   * @schema RedshiftSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * Converts an object of type 'RedshiftSubnet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftSubnet(obj: RedshiftSubnet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIdentifier': obj.subnetIdentifier,
    'SubnetAvailabilityZone': toJson_RedshiftAvailabilityZone(obj.subnetAvailabilityZone),
    'SubnetStatus': obj.subnetStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftNetworkInterface
 */
export interface RedshiftNetworkInterface {
  /**
   * @schema RedshiftNetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema RedshiftNetworkInterface#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema RedshiftNetworkInterface#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema RedshiftNetworkInterface#AvailabilityZone
   */
  readonly availabilityZone?: string;

}

/**
 * Converts an object of type 'RedshiftNetworkInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftNetworkInterface(obj: RedshiftNetworkInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkInterfaceId': obj.networkInterfaceId,
    'SubnetId': obj.subnetId,
    'PrivateIpAddress': obj.privateIpAddress,
    'AvailabilityZone': obj.availabilityZone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAttributeValueTarget
 */
export interface RedshiftAttributeValueTarget {
  /**
   * @schema RedshiftAttributeValueTarget#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * Converts an object of type 'RedshiftAttributeValueTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAttributeValueTarget(obj: RedshiftAttributeValueTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeValue': obj.attributeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftRevisionTarget
 */
export interface RedshiftRevisionTarget {
  /**
   * @schema RedshiftRevisionTarget#DatabaseRevision
   */
  readonly databaseRevision?: string;

  /**
   * @schema RedshiftRevisionTarget#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftRevisionTarget#DatabaseRevisionReleaseDate
   */
  readonly databaseRevisionReleaseDate?: string;

}

/**
 * Converts an object of type 'RedshiftRevisionTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftRevisionTarget(obj: RedshiftRevisionTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseRevision': obj.databaseRevision,
    'Description': obj.description,
    'DatabaseRevisionReleaseDate': obj.databaseRevisionReleaseDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftUpdateTarget
 */
export interface RedshiftUpdateTarget {
  /**
   * @schema RedshiftUpdateTarget#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftUpdateTarget#DatabaseVersion
   */
  readonly databaseVersion?: string;

  /**
   * @schema RedshiftUpdateTarget#SupportedOperations
   */
  readonly supportedOperations?: RedshiftSupportedOperation[];

}

/**
 * Converts an object of type 'RedshiftUpdateTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftUpdateTarget(obj: RedshiftUpdateTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaintenanceTrackName': obj.maintenanceTrackName,
    'DatabaseVersion': obj.databaseVersion,
    'SupportedOperations': obj.supportedOperations?.map(y => toJson_RedshiftSupportedOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftEventInfoMap
 */
export interface RedshiftEventInfoMap {
  /**
   * @schema RedshiftEventInfoMap#EventId
   */
  readonly eventId?: string;

  /**
   * @schema RedshiftEventInfoMap#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RedshiftEventInfoMap#EventDescription
   */
  readonly eventDescription?: string;

  /**
   * @schema RedshiftEventInfoMap#Severity
   */
  readonly severity?: string;

}

/**
 * Converts an object of type 'RedshiftEventInfoMap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftEventInfoMap(obj: RedshiftEventInfoMap | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventId': obj.eventId,
    'EventCategories': obj.eventCategories?.map(y => y),
    'EventDescription': obj.eventDescription,
    'Severity': obj.severity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftAvailabilityZone
 */
export interface RedshiftAvailabilityZone {
  /**
   * @schema RedshiftAvailabilityZone#Name
   */
  readonly name?: string;

  /**
   * @schema RedshiftAvailabilityZone#SupportedPlatforms
   */
  readonly supportedPlatforms?: RedshiftSupportedPlatform[];

}

/**
 * Converts an object of type 'RedshiftAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftAvailabilityZone(obj: RedshiftAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SupportedPlatforms': obj.supportedPlatforms?.map(y => toJson_RedshiftSupportedPlatform(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftClusterParameterStatus
 */
export interface RedshiftClusterParameterStatus {
  /**
   * @schema RedshiftClusterParameterStatus#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema RedshiftClusterParameterStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema RedshiftClusterParameterStatus#ParameterApplyErrorDescription
   */
  readonly parameterApplyErrorDescription?: string;

}

/**
 * Converts an object of type 'RedshiftClusterParameterStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftClusterParameterStatus(obj: RedshiftClusterParameterStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterName': obj.parameterName,
    'ParameterApplyStatus': obj.parameterApplyStatus,
    'ParameterApplyErrorDescription': obj.parameterApplyErrorDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftSupportedOperation
 */
export interface RedshiftSupportedOperation {
  /**
   * @schema RedshiftSupportedOperation#OperationName
   */
  readonly operationName?: string;

}

/**
 * Converts an object of type 'RedshiftSupportedOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftSupportedOperation(obj: RedshiftSupportedOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationName': obj.operationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RedshiftSupportedPlatform
 */
export interface RedshiftSupportedPlatform {
  /**
   * @schema RedshiftSupportedPlatform#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'RedshiftSupportedPlatform' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RedshiftSupportedPlatform(obj: RedshiftSupportedPlatform | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
