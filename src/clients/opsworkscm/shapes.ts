/**
 * @schema OpsWorksCmAssociateNodeRequest
 */
export interface OpsWorksCmAssociateNodeRequest {
  /**
   * @schema OpsWorksCmAssociateNodeRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema OpsWorksCmAssociateNodeRequest#NodeName
   */
  readonly nodeName: string;

  /**
   * @schema OpsWorksCmAssociateNodeRequest#EngineAttributes
   */
  readonly engineAttributes: OpsWorksCmEngineAttribute[];

}

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
 * @schema OpsWorksCmCreateBackupRequest
 */
export interface OpsWorksCmCreateBackupRequest {
  /**
   * @schema OpsWorksCmCreateBackupRequest#ServerName
   */
  readonly serverName: string;

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
 * @schema OpsWorksCmCreateBackupResponse
 */
export interface OpsWorksCmCreateBackupResponse {
  /**
   * @schema OpsWorksCmCreateBackupResponse#Backup
   */
  readonly backup?: OpsWorksCmBackup;

}

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
  readonly engine: string;

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
  readonly serverName: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#InstanceProfileArn
   */
  readonly instanceProfileArn: string;

  /**
   * @schema OpsWorksCmCreateServerRequest#InstanceType
   */
  readonly instanceType: string;

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
  readonly serviceRoleArn: string;

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
 * @schema OpsWorksCmCreateServerResponse
 */
export interface OpsWorksCmCreateServerResponse {
  /**
   * @schema OpsWorksCmCreateServerResponse#Server
   */
  readonly server?: OpsWorksCmServer;

}

/**
 * @schema OpsWorksCmDeleteBackupRequest
 */
export interface OpsWorksCmDeleteBackupRequest {
  /**
   * @schema OpsWorksCmDeleteBackupRequest#BackupId
   */
  readonly backupId: string;

}

/**
 * @schema OpsWorksCmDeleteBackupResponse
 */
export interface OpsWorksCmDeleteBackupResponse {
}

/**
 * @schema OpsWorksCmDeleteServerRequest
 */
export interface OpsWorksCmDeleteServerRequest {
  /**
   * @schema OpsWorksCmDeleteServerRequest#ServerName
   */
  readonly serverName: string;

}

/**
 * @schema OpsWorksCmDeleteServerResponse
 */
export interface OpsWorksCmDeleteServerResponse {
}

/**
 * @schema OpsWorksCmDescribeAccountAttributesRequest
 */
export interface OpsWorksCmDescribeAccountAttributesRequest {
}

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
 * @schema OpsWorksCmDescribeEventsRequest
 */
export interface OpsWorksCmDescribeEventsRequest {
  /**
   * @schema OpsWorksCmDescribeEventsRequest#ServerName
   */
  readonly serverName: string;

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
 * @schema OpsWorksCmDescribeNodeAssociationStatusRequest
 */
export interface OpsWorksCmDescribeNodeAssociationStatusRequest {
  /**
   * @schema OpsWorksCmDescribeNodeAssociationStatusRequest#NodeAssociationStatusToken
   */
  readonly nodeAssociationStatusToken: string;

  /**
   * @schema OpsWorksCmDescribeNodeAssociationStatusRequest#ServerName
   */
  readonly serverName: string;

}

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
 * @schema OpsWorksCmDisassociateNodeRequest
 */
export interface OpsWorksCmDisassociateNodeRequest {
  /**
   * @schema OpsWorksCmDisassociateNodeRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema OpsWorksCmDisassociateNodeRequest#NodeName
   */
  readonly nodeName: string;

  /**
   * @schema OpsWorksCmDisassociateNodeRequest#EngineAttributes
   */
  readonly engineAttributes?: OpsWorksCmEngineAttribute[];

}

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
 * @schema OpsWorksCmExportServerEngineAttributeRequest
 */
export interface OpsWorksCmExportServerEngineAttributeRequest {
  /**
   * @schema OpsWorksCmExportServerEngineAttributeRequest#ExportAttributeName
   */
  readonly exportAttributeName: string;

  /**
   * @schema OpsWorksCmExportServerEngineAttributeRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema OpsWorksCmExportServerEngineAttributeRequest#InputAttributes
   */
  readonly inputAttributes?: OpsWorksCmEngineAttribute[];

}

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
 * @schema OpsWorksCmListTagsForResourceRequest
 */
export interface OpsWorksCmListTagsForResourceRequest {
  /**
   * @schema OpsWorksCmListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

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
 * @schema OpsWorksCmRestoreServerRequest
 */
export interface OpsWorksCmRestoreServerRequest {
  /**
   * @schema OpsWorksCmRestoreServerRequest#BackupId
   */
  readonly backupId: string;

  /**
   * @schema OpsWorksCmRestoreServerRequest#ServerName
   */
  readonly serverName: string;

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
 * @schema OpsWorksCmRestoreServerResponse
 */
export interface OpsWorksCmRestoreServerResponse {
}

/**
 * @schema OpsWorksCmStartMaintenanceRequest
 */
export interface OpsWorksCmStartMaintenanceRequest {
  /**
   * @schema OpsWorksCmStartMaintenanceRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema OpsWorksCmStartMaintenanceRequest#EngineAttributes
   */
  readonly engineAttributes?: OpsWorksCmEngineAttribute[];

}

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
 * @schema OpsWorksCmTagResourceRequest
 */
export interface OpsWorksCmTagResourceRequest {
  /**
   * @schema OpsWorksCmTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema OpsWorksCmTagResourceRequest#Tags
   */
  readonly tags: OpsWorksCmTag[];

}

/**
 * @schema OpsWorksCmTagResourceResponse
 */
export interface OpsWorksCmTagResourceResponse {
}

/**
 * @schema OpsWorksCmUntagResourceRequest
 */
export interface OpsWorksCmUntagResourceRequest {
  /**
   * @schema OpsWorksCmUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema OpsWorksCmUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema OpsWorksCmUntagResourceResponse
 */
export interface OpsWorksCmUntagResourceResponse {
}

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
  readonly serverName: string;

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
 * @schema OpsWorksCmUpdateServerResponse
 */
export interface OpsWorksCmUpdateServerResponse {
  /**
   * @schema OpsWorksCmUpdateServerResponse#Server
   */
  readonly server?: OpsWorksCmServer;

}

/**
 * @schema OpsWorksCmUpdateServerEngineAttributesRequest
 */
export interface OpsWorksCmUpdateServerEngineAttributesRequest {
  /**
   * @schema OpsWorksCmUpdateServerEngineAttributesRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema OpsWorksCmUpdateServerEngineAttributesRequest#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema OpsWorksCmUpdateServerEngineAttributesRequest#AttributeValue
   */
  readonly attributeValue?: string;

}

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
 * @schema OpsWorksCmTag
 */
export interface OpsWorksCmTag {
  /**
   * @schema OpsWorksCmTag#Key
   */
  readonly key: string;

  /**
   * @schema OpsWorksCmTag#Value
   */
  readonly value: string;

}

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
