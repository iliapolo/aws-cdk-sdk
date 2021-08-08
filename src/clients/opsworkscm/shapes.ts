/**
 * @schema OpsWorksCmAssociateNodeRequest
 */
export interface OpsWorksCmAssociateNodeRequest {
  /**
   * @schema OpsWorksCmAssociateNodeRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmAssociateNodeRequest#NodeName
   */
  readonly nodeName?: string;

  /**
   * @schema OpsWorksCmAssociateNodeRequest#EngineAttributes
   */
  readonly engineAttributes?: OpsWorksCmEngineAttribute[];

}

/**
 * Converts an object of type 'OpsWorksCmAssociateNodeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmAssociateNodeRequest(obj: OpsWorksCmAssociateNodeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerName': obj.serverName,
    'NodeName': obj.nodeName,
    'EngineAttributes': obj.engineAttributes?.map(y => toJson_OpsWorksCmEngineAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmAssociateNodeResponse
 */
export interface OpsWorksCmAssociateNodeResponse {
  /**
   * @schema OpsWorksCmAssociateNodeResponse#NodeAssociationStatusToken
   */
  readonly nodeAssociationStatusToken?: string;

}

/**
 * Converts an object of type 'OpsWorksCmAssociateNodeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmAssociateNodeResponse(obj: OpsWorksCmAssociateNodeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeAssociationStatusToken': obj.nodeAssociationStatusToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmCreateBackupRequest
 */
export interface OpsWorksCmCreateBackupRequest {
  /**
   * @schema OpsWorksCmCreateBackupRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmCreateBackupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema OpsWorksCmCreateBackupRequest#Tags
   */
  readonly tags?: OpsWorksCmTag[];

}

/**
 * Converts an object of type 'OpsWorksCmCreateBackupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmCreateBackupRequest(obj: OpsWorksCmCreateBackupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerName': obj.serverName,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_OpsWorksCmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmCreateBackupResponse
 */
export interface OpsWorksCmCreateBackupResponse {
  /**
   * @schema OpsWorksCmCreateBackupResponse#Backup
   */
  readonly backup?: OpsWorksCmBackup;

}

/**
 * Converts an object of type 'OpsWorksCmCreateBackupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmCreateBackupResponse(obj: OpsWorksCmCreateBackupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backup': toJson_OpsWorksCmBackup(obj.backup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmCreateServerRequest
 */
export interface OpsWorksCmCreateServerRequest {
  /**
   * @schema OpsWorksCmCreateServerRequest#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema OpsWorksCmCreateServerRequest#CustomDomain
   */
  readonly customDomain?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#CustomCertificate
   */
  readonly customCertificate?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#CustomPrivateKey
   */
  readonly customPrivateKey?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#DisableAutomatedBackup
   */
  readonly disableAutomatedBackup?: boolean;

  /**
   * @schema OpsWorksCmCreateServerRequest#Engine
   */
  readonly engine?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#EngineModel
   */
  readonly engineModel?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#EngineAttributes
   */
  readonly engineAttributes?: OpsWorksCmEngineAttribute[];

  /**
   * @schema OpsWorksCmCreateServerRequest#BackupRetentionCount
   */
  readonly backupRetentionCount?: number;

  /**
   * @schema OpsWorksCmCreateServerRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#InstanceProfileArn
   */
  readonly instanceProfileArn?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#KeyPair
   */
  readonly keyPair?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema OpsWorksCmCreateServerRequest#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema OpsWorksCmCreateServerRequest#Tags
   */
  readonly tags?: OpsWorksCmTag[];

  /**
   * @schema OpsWorksCmCreateServerRequest#BackupId
   */
  readonly backupId?: string;

}

/**
 * Converts an object of type 'OpsWorksCmCreateServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmCreateServerRequest(obj: OpsWorksCmCreateServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociatePublicIpAddress': obj.associatePublicIpAddress,
    'CustomDomain': obj.customDomain,
    'CustomCertificate': obj.customCertificate,
    'CustomPrivateKey': obj.customPrivateKey,
    'DisableAutomatedBackup': obj.disableAutomatedBackup,
    'Engine': obj.engine,
    'EngineModel': obj.engineModel,
    'EngineVersion': obj.engineVersion,
    'EngineAttributes': obj.engineAttributes?.map(y => toJson_OpsWorksCmEngineAttribute(y)),
    'BackupRetentionCount': obj.backupRetentionCount,
    'ServerName': obj.serverName,
    'InstanceProfileArn': obj.instanceProfileArn,
    'InstanceType': obj.instanceType,
    'KeyPair': obj.keyPair,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'ServiceRoleArn': obj.serviceRoleArn,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_OpsWorksCmTag(y)),
    'BackupId': obj.backupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmCreateServerResponse
 */
export interface OpsWorksCmCreateServerResponse {
  /**
   * @schema OpsWorksCmCreateServerResponse#Server
   */
  readonly server?: OpsWorksCmServer;

}

/**
 * Converts an object of type 'OpsWorksCmCreateServerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmCreateServerResponse(obj: OpsWorksCmCreateServerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Server': toJson_OpsWorksCmServer(obj.server),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDeleteBackupRequest
 */
export interface OpsWorksCmDeleteBackupRequest {
  /**
   * @schema OpsWorksCmDeleteBackupRequest#BackupId
   */
  readonly backupId?: string;

}

/**
 * Converts an object of type 'OpsWorksCmDeleteBackupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDeleteBackupRequest(obj: OpsWorksCmDeleteBackupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDeleteBackupResponse
 */
export interface OpsWorksCmDeleteBackupResponse {
}

/**
 * Converts an object of type 'OpsWorksCmDeleteBackupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDeleteBackupResponse(obj: OpsWorksCmDeleteBackupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDeleteServerRequest
 */
export interface OpsWorksCmDeleteServerRequest {
  /**
   * @schema OpsWorksCmDeleteServerRequest#ServerName
   */
  readonly serverName?: string;

}

/**
 * Converts an object of type 'OpsWorksCmDeleteServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDeleteServerRequest(obj: OpsWorksCmDeleteServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerName': obj.serverName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDeleteServerResponse
 */
export interface OpsWorksCmDeleteServerResponse {
}

/**
 * Converts an object of type 'OpsWorksCmDeleteServerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDeleteServerResponse(obj: OpsWorksCmDeleteServerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDescribeAccountAttributesRequest
 */
export interface OpsWorksCmDescribeAccountAttributesRequest {
}

/**
 * Converts an object of type 'OpsWorksCmDescribeAccountAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDescribeAccountAttributesRequest(obj: OpsWorksCmDescribeAccountAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDescribeAccountAttributesResponse
 */
export interface OpsWorksCmDescribeAccountAttributesResponse {
  /**
   * @schema OpsWorksCmDescribeAccountAttributesResponse#Attributes
   */
  readonly attributes?: OpsWorksCmAccountAttribute[];

}

/**
 * Converts an object of type 'OpsWorksCmDescribeAccountAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDescribeAccountAttributesResponse(obj: OpsWorksCmDescribeAccountAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': obj.attributes?.map(y => toJson_OpsWorksCmAccountAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDescribeBackupsRequest
 */
export interface OpsWorksCmDescribeBackupsRequest {
  /**
   * @schema OpsWorksCmDescribeBackupsRequest#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema OpsWorksCmDescribeBackupsRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmDescribeBackupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OpsWorksCmDescribeBackupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OpsWorksCmDescribeBackupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDescribeBackupsRequest(obj: OpsWorksCmDescribeBackupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
    'ServerName': obj.serverName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDescribeBackupsResponse
 */
export interface OpsWorksCmDescribeBackupsResponse {
  /**
   * @schema OpsWorksCmDescribeBackupsResponse#Backups
   */
  readonly backups?: OpsWorksCmBackup[];

  /**
   * @schema OpsWorksCmDescribeBackupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OpsWorksCmDescribeBackupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDescribeBackupsResponse(obj: OpsWorksCmDescribeBackupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backups': obj.backups?.map(y => toJson_OpsWorksCmBackup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDescribeEventsRequest
 */
export interface OpsWorksCmDescribeEventsRequest {
  /**
   * @schema OpsWorksCmDescribeEventsRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmDescribeEventsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OpsWorksCmDescribeEventsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OpsWorksCmDescribeEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDescribeEventsRequest(obj: OpsWorksCmDescribeEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerName': obj.serverName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDescribeEventsResponse
 */
export interface OpsWorksCmDescribeEventsResponse {
  /**
   * @schema OpsWorksCmDescribeEventsResponse#ServerEvents
   */
  readonly serverEvents?: OpsWorksCmServerEvent[];

  /**
   * @schema OpsWorksCmDescribeEventsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OpsWorksCmDescribeEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDescribeEventsResponse(obj: OpsWorksCmDescribeEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerEvents': obj.serverEvents?.map(y => toJson_OpsWorksCmServerEvent(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDescribeNodeAssociationStatusRequest
 */
export interface OpsWorksCmDescribeNodeAssociationStatusRequest {
  /**
   * @schema OpsWorksCmDescribeNodeAssociationStatusRequest#NodeAssociationStatusToken
   */
  readonly nodeAssociationStatusToken?: string;

  /**
   * @schema OpsWorksCmDescribeNodeAssociationStatusRequest#ServerName
   */
  readonly serverName?: string;

}

/**
 * Converts an object of type 'OpsWorksCmDescribeNodeAssociationStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDescribeNodeAssociationStatusRequest(obj: OpsWorksCmDescribeNodeAssociationStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeAssociationStatusToken': obj.nodeAssociationStatusToken,
    'ServerName': obj.serverName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDescribeNodeAssociationStatusResponse
 */
export interface OpsWorksCmDescribeNodeAssociationStatusResponse {
  /**
   * @schema OpsWorksCmDescribeNodeAssociationStatusResponse#NodeAssociationStatus
   */
  readonly nodeAssociationStatus?: string;

  /**
   * @schema OpsWorksCmDescribeNodeAssociationStatusResponse#EngineAttributes
   */
  readonly engineAttributes?: OpsWorksCmEngineAttribute[];

}

/**
 * Converts an object of type 'OpsWorksCmDescribeNodeAssociationStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDescribeNodeAssociationStatusResponse(obj: OpsWorksCmDescribeNodeAssociationStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeAssociationStatus': obj.nodeAssociationStatus,
    'EngineAttributes': obj.engineAttributes?.map(y => toJson_OpsWorksCmEngineAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDescribeServersRequest
 */
export interface OpsWorksCmDescribeServersRequest {
  /**
   * @schema OpsWorksCmDescribeServersRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmDescribeServersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OpsWorksCmDescribeServersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OpsWorksCmDescribeServersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDescribeServersRequest(obj: OpsWorksCmDescribeServersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerName': obj.serverName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDescribeServersResponse
 */
export interface OpsWorksCmDescribeServersResponse {
  /**
   * @schema OpsWorksCmDescribeServersResponse#Servers
   */
  readonly servers?: OpsWorksCmServer[];

  /**
   * @schema OpsWorksCmDescribeServersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OpsWorksCmDescribeServersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDescribeServersResponse(obj: OpsWorksCmDescribeServersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Servers': obj.servers?.map(y => toJson_OpsWorksCmServer(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDisassociateNodeRequest
 */
export interface OpsWorksCmDisassociateNodeRequest {
  /**
   * @schema OpsWorksCmDisassociateNodeRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmDisassociateNodeRequest#NodeName
   */
  readonly nodeName?: string;

  /**
   * @schema OpsWorksCmDisassociateNodeRequest#EngineAttributes
   */
  readonly engineAttributes?: OpsWorksCmEngineAttribute[];

}

/**
 * Converts an object of type 'OpsWorksCmDisassociateNodeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDisassociateNodeRequest(obj: OpsWorksCmDisassociateNodeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerName': obj.serverName,
    'NodeName': obj.nodeName,
    'EngineAttributes': obj.engineAttributes?.map(y => toJson_OpsWorksCmEngineAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmDisassociateNodeResponse
 */
export interface OpsWorksCmDisassociateNodeResponse {
  /**
   * @schema OpsWorksCmDisassociateNodeResponse#NodeAssociationStatusToken
   */
  readonly nodeAssociationStatusToken?: string;

}

/**
 * Converts an object of type 'OpsWorksCmDisassociateNodeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmDisassociateNodeResponse(obj: OpsWorksCmDisassociateNodeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeAssociationStatusToken': obj.nodeAssociationStatusToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmExportServerEngineAttributeRequest
 */
export interface OpsWorksCmExportServerEngineAttributeRequest {
  /**
   * @schema OpsWorksCmExportServerEngineAttributeRequest#ExportAttributeName
   */
  readonly exportAttributeName?: string;

  /**
   * @schema OpsWorksCmExportServerEngineAttributeRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmExportServerEngineAttributeRequest#InputAttributes
   */
  readonly inputAttributes?: OpsWorksCmEngineAttribute[];

}

/**
 * Converts an object of type 'OpsWorksCmExportServerEngineAttributeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmExportServerEngineAttributeRequest(obj: OpsWorksCmExportServerEngineAttributeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportAttributeName': obj.exportAttributeName,
    'ServerName': obj.serverName,
    'InputAttributes': obj.inputAttributes?.map(y => toJson_OpsWorksCmEngineAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmExportServerEngineAttributeResponse
 */
export interface OpsWorksCmExportServerEngineAttributeResponse {
  /**
   * @schema OpsWorksCmExportServerEngineAttributeResponse#EngineAttribute
   */
  readonly engineAttribute?: OpsWorksCmEngineAttribute;

  /**
   * @schema OpsWorksCmExportServerEngineAttributeResponse#ServerName
   */
  readonly serverName?: string;

}

/**
 * Converts an object of type 'OpsWorksCmExportServerEngineAttributeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmExportServerEngineAttributeResponse(obj: OpsWorksCmExportServerEngineAttributeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineAttribute': toJson_OpsWorksCmEngineAttribute(obj.engineAttribute),
    'ServerName': obj.serverName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmListTagsForResourceRequest
 */
export interface OpsWorksCmListTagsForResourceRequest {
  /**
   * @schema OpsWorksCmListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema OpsWorksCmListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OpsWorksCmListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OpsWorksCmListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmListTagsForResourceRequest(obj: OpsWorksCmListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmListTagsForResourceResponse
 */
export interface OpsWorksCmListTagsForResourceResponse {
  /**
   * @schema OpsWorksCmListTagsForResourceResponse#Tags
   */
  readonly tags?: OpsWorksCmTag[];

  /**
   * @schema OpsWorksCmListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OpsWorksCmListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmListTagsForResourceResponse(obj: OpsWorksCmListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_OpsWorksCmTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmRestoreServerRequest
 */
export interface OpsWorksCmRestoreServerRequest {
  /**
   * @schema OpsWorksCmRestoreServerRequest#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema OpsWorksCmRestoreServerRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmRestoreServerRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema OpsWorksCmRestoreServerRequest#KeyPair
   */
  readonly keyPair?: string;

}

/**
 * Converts an object of type 'OpsWorksCmRestoreServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmRestoreServerRequest(obj: OpsWorksCmRestoreServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
    'ServerName': obj.serverName,
    'InstanceType': obj.instanceType,
    'KeyPair': obj.keyPair,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmRestoreServerResponse
 */
export interface OpsWorksCmRestoreServerResponse {
  /**
   * @schema OpsWorksCmRestoreServerResponse#Server
   */
  readonly server?: OpsWorksCmServer;

}

/**
 * Converts an object of type 'OpsWorksCmRestoreServerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmRestoreServerResponse(obj: OpsWorksCmRestoreServerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Server': toJson_OpsWorksCmServer(obj.server),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmStartMaintenanceRequest
 */
export interface OpsWorksCmStartMaintenanceRequest {
  /**
   * @schema OpsWorksCmStartMaintenanceRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmStartMaintenanceRequest#EngineAttributes
   */
  readonly engineAttributes?: OpsWorksCmEngineAttribute[];

}

/**
 * Converts an object of type 'OpsWorksCmStartMaintenanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmStartMaintenanceRequest(obj: OpsWorksCmStartMaintenanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerName': obj.serverName,
    'EngineAttributes': obj.engineAttributes?.map(y => toJson_OpsWorksCmEngineAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmStartMaintenanceResponse
 */
export interface OpsWorksCmStartMaintenanceResponse {
  /**
   * @schema OpsWorksCmStartMaintenanceResponse#Server
   */
  readonly server?: OpsWorksCmServer;

}

/**
 * Converts an object of type 'OpsWorksCmStartMaintenanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmStartMaintenanceResponse(obj: OpsWorksCmStartMaintenanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Server': toJson_OpsWorksCmServer(obj.server),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmTagResourceRequest
 */
export interface OpsWorksCmTagResourceRequest {
  /**
   * @schema OpsWorksCmTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema OpsWorksCmTagResourceRequest#Tags
   */
  readonly tags?: OpsWorksCmTag[];

}

/**
 * Converts an object of type 'OpsWorksCmTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmTagResourceRequest(obj: OpsWorksCmTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_OpsWorksCmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmTagResourceResponse
 */
export interface OpsWorksCmTagResourceResponse {
}

/**
 * Converts an object of type 'OpsWorksCmTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmTagResourceResponse(obj: OpsWorksCmTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmUntagResourceRequest
 */
export interface OpsWorksCmUntagResourceRequest {
  /**
   * @schema OpsWorksCmUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema OpsWorksCmUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'OpsWorksCmUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmUntagResourceRequest(obj: OpsWorksCmUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmUntagResourceResponse
 */
export interface OpsWorksCmUntagResourceResponse {
}

/**
 * Converts an object of type 'OpsWorksCmUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmUntagResourceResponse(obj: OpsWorksCmUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmUpdateServerRequest
 */
export interface OpsWorksCmUpdateServerRequest {
  /**
   * @schema OpsWorksCmUpdateServerRequest#DisableAutomatedBackup
   */
  readonly disableAutomatedBackup?: boolean;

  /**
   * @schema OpsWorksCmUpdateServerRequest#BackupRetentionCount
   */
  readonly backupRetentionCount?: number;

  /**
   * @schema OpsWorksCmUpdateServerRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmUpdateServerRequest#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema OpsWorksCmUpdateServerRequest#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

}

/**
 * Converts an object of type 'OpsWorksCmUpdateServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmUpdateServerRequest(obj: OpsWorksCmUpdateServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisableAutomatedBackup': obj.disableAutomatedBackup,
    'BackupRetentionCount': obj.backupRetentionCount,
    'ServerName': obj.serverName,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PreferredBackupWindow': obj.preferredBackupWindow,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmUpdateServerResponse
 */
export interface OpsWorksCmUpdateServerResponse {
  /**
   * @schema OpsWorksCmUpdateServerResponse#Server
   */
  readonly server?: OpsWorksCmServer;

}

/**
 * Converts an object of type 'OpsWorksCmUpdateServerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmUpdateServerResponse(obj: OpsWorksCmUpdateServerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Server': toJson_OpsWorksCmServer(obj.server),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmUpdateServerEngineAttributesRequest
 */
export interface OpsWorksCmUpdateServerEngineAttributesRequest {
  /**
   * @schema OpsWorksCmUpdateServerEngineAttributesRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmUpdateServerEngineAttributesRequest#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema OpsWorksCmUpdateServerEngineAttributesRequest#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * Converts an object of type 'OpsWorksCmUpdateServerEngineAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmUpdateServerEngineAttributesRequest(obj: OpsWorksCmUpdateServerEngineAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerName': obj.serverName,
    'AttributeName': obj.attributeName,
    'AttributeValue': obj.attributeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmUpdateServerEngineAttributesResponse
 */
export interface OpsWorksCmUpdateServerEngineAttributesResponse {
  /**
   * @schema OpsWorksCmUpdateServerEngineAttributesResponse#Server
   */
  readonly server?: OpsWorksCmServer;

}

/**
 * Converts an object of type 'OpsWorksCmUpdateServerEngineAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmUpdateServerEngineAttributesResponse(obj: OpsWorksCmUpdateServerEngineAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Server': toJson_OpsWorksCmServer(obj.server),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmEngineAttribute
 */
export interface OpsWorksCmEngineAttribute {
  /**
   * @schema OpsWorksCmEngineAttribute#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksCmEngineAttribute#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'OpsWorksCmEngineAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmEngineAttribute(obj: OpsWorksCmEngineAttribute | undefined): Record<string, any> | undefined {
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
 * @schema OpsWorksCmTag
 */
export interface OpsWorksCmTag {
  /**
   * @schema OpsWorksCmTag#Key
   */
  readonly key?: string;

  /**
   * @schema OpsWorksCmTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'OpsWorksCmTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmTag(obj: OpsWorksCmTag | undefined): Record<string, any> | undefined {
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
 * @schema OpsWorksCmBackup
 */
export interface OpsWorksCmBackup {
  /**
   * @schema OpsWorksCmBackup#BackupArn
   */
  readonly backupArn?: string;

  /**
   * @schema OpsWorksCmBackup#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema OpsWorksCmBackup#BackupType
   */
  readonly backupType?: string;

  /**
   * @schema OpsWorksCmBackup#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema OpsWorksCmBackup#Description
   */
  readonly description?: string;

  /**
   * @schema OpsWorksCmBackup#Engine
   */
  readonly engine?: string;

  /**
   * @schema OpsWorksCmBackup#EngineModel
   */
  readonly engineModel?: string;

  /**
   * @schema OpsWorksCmBackup#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema OpsWorksCmBackup#InstanceProfileArn
   */
  readonly instanceProfileArn?: string;

  /**
   * @schema OpsWorksCmBackup#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema OpsWorksCmBackup#KeyPair
   */
  readonly keyPair?: string;

  /**
   * @schema OpsWorksCmBackup#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema OpsWorksCmBackup#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema OpsWorksCmBackup#S3DataSize
   */
  readonly s3DataSize?: number;

  /**
   * @schema OpsWorksCmBackup#S3DataUrl
   */
  readonly s3DataUrl?: string;

  /**
   * @schema OpsWorksCmBackup#S3LogUrl
   */
  readonly s3LogUrl?: string;

  /**
   * @schema OpsWorksCmBackup#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema OpsWorksCmBackup#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmBackup#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema OpsWorksCmBackup#Status
   */
  readonly status?: string;

  /**
   * @schema OpsWorksCmBackup#StatusDescription
   */
  readonly statusDescription?: string;

  /**
   * @schema OpsWorksCmBackup#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema OpsWorksCmBackup#ToolsVersion
   */
  readonly toolsVersion?: string;

  /**
   * @schema OpsWorksCmBackup#UserArn
   */
  readonly userArn?: string;

}

/**
 * Converts an object of type 'OpsWorksCmBackup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmBackup(obj: OpsWorksCmBackup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupArn': obj.backupArn,
    'BackupId': obj.backupId,
    'BackupType': obj.backupType,
    'CreatedAt': obj.createdAt,
    'Description': obj.description,
    'Engine': obj.engine,
    'EngineModel': obj.engineModel,
    'EngineVersion': obj.engineVersion,
    'InstanceProfileArn': obj.instanceProfileArn,
    'InstanceType': obj.instanceType,
    'KeyPair': obj.keyPair,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'S3DataSize': obj.s3DataSize,
    'S3DataUrl': obj.s3DataUrl,
    'S3LogUrl': obj.s3LogUrl,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'ServerName': obj.serverName,
    'ServiceRoleArn': obj.serviceRoleArn,
    'Status': obj.status,
    'StatusDescription': obj.statusDescription,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'ToolsVersion': obj.toolsVersion,
    'UserArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmServer
 */
export interface OpsWorksCmServer {
  /**
   * @schema OpsWorksCmServer#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema OpsWorksCmServer#BackupRetentionCount
   */
  readonly backupRetentionCount?: number;

  /**
   * @schema OpsWorksCmServer#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmServer#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema OpsWorksCmServer#CloudFormationStackArn
   */
  readonly cloudFormationStackArn?: string;

  /**
   * @schema OpsWorksCmServer#CustomDomain
   */
  readonly customDomain?: string;

  /**
   * @schema OpsWorksCmServer#DisableAutomatedBackup
   */
  readonly disableAutomatedBackup?: boolean;

  /**
   * @schema OpsWorksCmServer#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema OpsWorksCmServer#Engine
   */
  readonly engine?: string;

  /**
   * @schema OpsWorksCmServer#EngineModel
   */
  readonly engineModel?: string;

  /**
   * @schema OpsWorksCmServer#EngineAttributes
   */
  readonly engineAttributes?: OpsWorksCmEngineAttribute[];

  /**
   * @schema OpsWorksCmServer#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema OpsWorksCmServer#InstanceProfileArn
   */
  readonly instanceProfileArn?: string;

  /**
   * @schema OpsWorksCmServer#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema OpsWorksCmServer#KeyPair
   */
  readonly keyPair?: string;

  /**
   * @schema OpsWorksCmServer#MaintenanceStatus
   */
  readonly maintenanceStatus?: string;

  /**
   * @schema OpsWorksCmServer#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema OpsWorksCmServer#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema OpsWorksCmServer#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema OpsWorksCmServer#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema OpsWorksCmServer#Status
   */
  readonly status?: string;

  /**
   * @schema OpsWorksCmServer#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema OpsWorksCmServer#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema OpsWorksCmServer#ServerArn
   */
  readonly serverArn?: string;

}

/**
 * Converts an object of type 'OpsWorksCmServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmServer(obj: OpsWorksCmServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociatePublicIpAddress': obj.associatePublicIpAddress,
    'BackupRetentionCount': obj.backupRetentionCount,
    'ServerName': obj.serverName,
    'CreatedAt': obj.createdAt,
    'CloudFormationStackArn': obj.cloudFormationStackArn,
    'CustomDomain': obj.customDomain,
    'DisableAutomatedBackup': obj.disableAutomatedBackup,
    'Endpoint': obj.endpoint,
    'Engine': obj.engine,
    'EngineModel': obj.engineModel,
    'EngineAttributes': obj.engineAttributes?.map(y => toJson_OpsWorksCmEngineAttribute(y)),
    'EngineVersion': obj.engineVersion,
    'InstanceProfileArn': obj.instanceProfileArn,
    'InstanceType': obj.instanceType,
    'KeyPair': obj.keyPair,
    'MaintenanceStatus': obj.maintenanceStatus,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'ServiceRoleArn': obj.serviceRoleArn,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'ServerArn': obj.serverArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmAccountAttribute
 */
export interface OpsWorksCmAccountAttribute {
  /**
   * @schema OpsWorksCmAccountAttribute#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksCmAccountAttribute#Maximum
   */
  readonly maximum?: number;

  /**
   * @schema OpsWorksCmAccountAttribute#Used
   */
  readonly used?: number;

}

/**
 * Converts an object of type 'OpsWorksCmAccountAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmAccountAttribute(obj: OpsWorksCmAccountAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Maximum': obj.maximum,
    'Used': obj.used,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCmServerEvent
 */
export interface OpsWorksCmServerEvent {
  /**
   * @schema OpsWorksCmServerEvent#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema OpsWorksCmServerEvent#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OpsWorksCmServerEvent#Message
   */
  readonly message?: string;

  /**
   * @schema OpsWorksCmServerEvent#LogUrl
   */
  readonly logUrl?: string;

}

/**
 * Converts an object of type 'OpsWorksCmServerEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCmServerEvent(obj: OpsWorksCmServerEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedAt': obj.createdAt,
    'ServerName': obj.serverName,
    'Message': obj.message,
    'LogUrl': obj.logUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
