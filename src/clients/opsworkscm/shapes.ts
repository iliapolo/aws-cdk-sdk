/**
 * @schema AssociateNodeRequest
 */
export interface AssociateNodeRequest {
  /**
   * @schema AssociateNodeRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema AssociateNodeRequest#NodeName
   */
  readonly nodeName: string;

  /**
   * @schema AssociateNodeRequest#EngineAttributes
   */
  readonly engineAttributes: EngineAttribute[];

}

/**
 * @schema AssociateNodeResponse
 */
export interface AssociateNodeResponse {
  /**
   * @schema AssociateNodeResponse#NodeAssociationStatusToken
   */
  readonly nodeAssociationStatusToken?: string;

}

/**
 * @schema CreateBackupRequest
 */
export interface CreateBackupRequest {
  /**
   * @schema CreateBackupRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema CreateBackupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateBackupRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateBackupResponse
 */
export interface CreateBackupResponse {
  /**
   * @schema CreateBackupResponse#Backup
   */
  readonly backup?: Backup;

}

/**
 * @schema CreateServerRequest
 */
export interface CreateServerRequest {
  /**
   * @schema CreateServerRequest#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema CreateServerRequest#CustomDomain
   */
  readonly customDomain?: string;

  /**
   * @schema CreateServerRequest#CustomCertificate
   */
  readonly customCertificate?: string;

  /**
   * @schema CreateServerRequest#CustomPrivateKey
   */
  readonly customPrivateKey?: string;

  /**
   * @schema CreateServerRequest#DisableAutomatedBackup
   */
  readonly disableAutomatedBackup?: boolean;

  /**
   * @schema CreateServerRequest#Engine
   */
  readonly engine: string;

  /**
   * @schema CreateServerRequest#EngineModel
   */
  readonly engineModel?: string;

  /**
   * @schema CreateServerRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateServerRequest#EngineAttributes
   */
  readonly engineAttributes?: EngineAttribute[];

  /**
   * @schema CreateServerRequest#BackupRetentionCount
   */
  readonly backupRetentionCount?: number;

  /**
   * @schema CreateServerRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema CreateServerRequest#InstanceProfileArn
   */
  readonly instanceProfileArn: string;

  /**
   * @schema CreateServerRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema CreateServerRequest#KeyPair
   */
  readonly keyPair?: string;

  /**
   * @schema CreateServerRequest#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateServerRequest#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema CreateServerRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateServerRequest#ServiceRoleArn
   */
  readonly serviceRoleArn: string;

  /**
   * @schema CreateServerRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema CreateServerRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateServerRequest#BackupId
   */
  readonly backupId?: string;

}

/**
 * @schema CreateServerResponse
 */
export interface CreateServerResponse {
  /**
   * @schema CreateServerResponse#Server
   */
  readonly server?: Server;

}

/**
 * @schema DeleteBackupRequest
 */
export interface DeleteBackupRequest {
  /**
   * @schema DeleteBackupRequest#BackupId
   */
  readonly backupId: string;

}

/**
 * @schema DeleteBackupResponse
 */
export interface DeleteBackupResponse {
}

/**
 * @schema DeleteServerRequest
 */
export interface DeleteServerRequest {
  /**
   * @schema DeleteServerRequest#ServerName
   */
  readonly serverName: string;

}

/**
 * @schema DeleteServerResponse
 */
export interface DeleteServerResponse {
}

/**
 * @schema DescribeAccountAttributesRequest
 */
export interface DescribeAccountAttributesRequest {
}

/**
 * @schema DescribeAccountAttributesResponse
 */
export interface DescribeAccountAttributesResponse {
  /**
   * @schema DescribeAccountAttributesResponse#Attributes
   */
  readonly attributes?: AccountAttribute[];

}

/**
 * @schema DescribeBackupsRequest
 */
export interface DescribeBackupsRequest {
  /**
   * @schema DescribeBackupsRequest#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema DescribeBackupsRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DescribeBackupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeBackupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeBackupsResponse
 */
export interface DescribeBackupsResponse {
  /**
   * @schema DescribeBackupsResponse#Backups
   */
  readonly backups?: Backup[];

  /**
   * @schema DescribeBackupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEventsRequest
 */
export interface DescribeEventsRequest {
  /**
   * @schema DescribeEventsRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema DescribeEventsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeEventsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeEventsResponse
 */
export interface DescribeEventsResponse {
  /**
   * @schema DescribeEventsResponse#ServerEvents
   */
  readonly serverEvents?: ServerEvent[];

  /**
   * @schema DescribeEventsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeNodeAssociationStatusRequest
 */
export interface DescribeNodeAssociationStatusRequest {
  /**
   * @schema DescribeNodeAssociationStatusRequest#NodeAssociationStatusToken
   */
  readonly nodeAssociationStatusToken: string;

  /**
   * @schema DescribeNodeAssociationStatusRequest#ServerName
   */
  readonly serverName: string;

}

/**
 * @schema DescribeNodeAssociationStatusResponse
 */
export interface DescribeNodeAssociationStatusResponse {
  /**
   * @schema DescribeNodeAssociationStatusResponse#NodeAssociationStatus
   */
  readonly nodeAssociationStatus?: string;

  /**
   * @schema DescribeNodeAssociationStatusResponse#EngineAttributes
   */
  readonly engineAttributes?: EngineAttribute[];

}

/**
 * @schema DescribeServersRequest
 */
export interface DescribeServersRequest {
  /**
   * @schema DescribeServersRequest#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DescribeServersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeServersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeServersResponse
 */
export interface DescribeServersResponse {
  /**
   * @schema DescribeServersResponse#Servers
   */
  readonly servers?: Server[];

  /**
   * @schema DescribeServersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DisassociateNodeRequest
 */
export interface DisassociateNodeRequest {
  /**
   * @schema DisassociateNodeRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema DisassociateNodeRequest#NodeName
   */
  readonly nodeName: string;

  /**
   * @schema DisassociateNodeRequest#EngineAttributes
   */
  readonly engineAttributes?: EngineAttribute[];

}

/**
 * @schema DisassociateNodeResponse
 */
export interface DisassociateNodeResponse {
  /**
   * @schema DisassociateNodeResponse#NodeAssociationStatusToken
   */
  readonly nodeAssociationStatusToken?: string;

}

/**
 * @schema ExportServerEngineAttributeRequest
 */
export interface ExportServerEngineAttributeRequest {
  /**
   * @schema ExportServerEngineAttributeRequest#ExportAttributeName
   */
  readonly exportAttributeName: string;

  /**
   * @schema ExportServerEngineAttributeRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema ExportServerEngineAttributeRequest#InputAttributes
   */
  readonly inputAttributes?: EngineAttribute[];

}

/**
 * @schema ExportServerEngineAttributeResponse
 */
export interface ExportServerEngineAttributeResponse {
  /**
   * @schema ExportServerEngineAttributeResponse#EngineAttribute
   */
  readonly engineAttribute?: EngineAttribute;

  /**
   * @schema ExportServerEngineAttributeResponse#ServerName
   */
  readonly serverName?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RestoreServerRequest
 */
export interface RestoreServerRequest {
  /**
   * @schema RestoreServerRequest#BackupId
   */
  readonly backupId: string;

  /**
   * @schema RestoreServerRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema RestoreServerRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema RestoreServerRequest#KeyPair
   */
  readonly keyPair?: string;

}

/**
 * @schema RestoreServerResponse
 */
export interface RestoreServerResponse {
}

/**
 * @schema StartMaintenanceRequest
 */
export interface StartMaintenanceRequest {
  /**
   * @schema StartMaintenanceRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema StartMaintenanceRequest#EngineAttributes
   */
  readonly engineAttributes?: EngineAttribute[];

}

/**
 * @schema StartMaintenanceResponse
 */
export interface StartMaintenanceResponse {
  /**
   * @schema StartMaintenanceResponse#Server
   */
  readonly server?: Server;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateServerRequest
 */
export interface UpdateServerRequest {
  /**
   * @schema UpdateServerRequest#DisableAutomatedBackup
   */
  readonly disableAutomatedBackup?: boolean;

  /**
   * @schema UpdateServerRequest#BackupRetentionCount
   */
  readonly backupRetentionCount?: number;

  /**
   * @schema UpdateServerRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema UpdateServerRequest#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema UpdateServerRequest#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

}

/**
 * @schema UpdateServerResponse
 */
export interface UpdateServerResponse {
  /**
   * @schema UpdateServerResponse#Server
   */
  readonly server?: Server;

}

/**
 * @schema UpdateServerEngineAttributesRequest
 */
export interface UpdateServerEngineAttributesRequest {
  /**
   * @schema UpdateServerEngineAttributesRequest#ServerName
   */
  readonly serverName: string;

  /**
   * @schema UpdateServerEngineAttributesRequest#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema UpdateServerEngineAttributesRequest#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * @schema UpdateServerEngineAttributesResponse
 */
export interface UpdateServerEngineAttributesResponse {
  /**
   * @schema UpdateServerEngineAttributesResponse#Server
   */
  readonly server?: Server;

}

/**
 * @schema EngineAttribute
 */
export interface EngineAttribute {
  /**
   * @schema EngineAttribute#Name
   */
  readonly name?: string;

  /**
   * @schema EngineAttribute#Value
   */
  readonly value?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema Backup
 */
export interface Backup {
  /**
   * @schema Backup#BackupArn
   */
  readonly backupArn?: string;

  /**
   * @schema Backup#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema Backup#BackupType
   */
  readonly backupType?: string;

  /**
   * @schema Backup#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Backup#Description
   */
  readonly description?: string;

  /**
   * @schema Backup#Engine
   */
  readonly engine?: string;

  /**
   * @schema Backup#EngineModel
   */
  readonly engineModel?: string;

  /**
   * @schema Backup#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema Backup#InstanceProfileArn
   */
  readonly instanceProfileArn?: string;

  /**
   * @schema Backup#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Backup#KeyPair
   */
  readonly keyPair?: string;

  /**
   * @schema Backup#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema Backup#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema Backup#S3DataSize
   */
  readonly s3DataSize?: number;

  /**
   * @schema Backup#S3DataUrl
   */
  readonly s3DataUrl?: string;

  /**
   * @schema Backup#S3LogUrl
   */
  readonly s3LogUrl?: string;

  /**
   * @schema Backup#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Backup#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema Backup#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema Backup#Status
   */
  readonly status?: string;

  /**
   * @schema Backup#StatusDescription
   */
  readonly statusDescription?: string;

  /**
   * @schema Backup#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema Backup#ToolsVersion
   */
  readonly toolsVersion?: string;

  /**
   * @schema Backup#UserArn
   */
  readonly userArn?: string;

}

/**
 * @schema Server
 */
export interface Server {
  /**
   * @schema Server#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema Server#BackupRetentionCount
   */
  readonly backupRetentionCount?: number;

  /**
   * @schema Server#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema Server#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Server#CloudFormationStackArn
   */
  readonly cloudFormationStackArn?: string;

  /**
   * @schema Server#CustomDomain
   */
  readonly customDomain?: string;

  /**
   * @schema Server#DisableAutomatedBackup
   */
  readonly disableAutomatedBackup?: boolean;

  /**
   * @schema Server#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema Server#Engine
   */
  readonly engine?: string;

  /**
   * @schema Server#EngineModel
   */
  readonly engineModel?: string;

  /**
   * @schema Server#EngineAttributes
   */
  readonly engineAttributes?: EngineAttribute[];

  /**
   * @schema Server#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema Server#InstanceProfileArn
   */
  readonly instanceProfileArn?: string;

  /**
   * @schema Server#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Server#KeyPair
   */
  readonly keyPair?: string;

  /**
   * @schema Server#MaintenanceStatus
   */
  readonly maintenanceStatus?: string;

  /**
   * @schema Server#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema Server#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema Server#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Server#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema Server#Status
   */
  readonly status?: string;

  /**
   * @schema Server#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema Server#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema Server#ServerArn
   */
  readonly serverArn?: string;

}

/**
 * @schema AccountAttribute
 */
export interface AccountAttribute {
  /**
   * @schema AccountAttribute#Name
   */
  readonly name?: string;

  /**
   * @schema AccountAttribute#Maximum
   */
  readonly maximum?: number;

  /**
   * @schema AccountAttribute#Used
   */
  readonly used?: number;

}

/**
 * @schema ServerEvent
 */
export interface ServerEvent {
  /**
   * @schema ServerEvent#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema ServerEvent#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema ServerEvent#Message
   */
  readonly message?: string;

  /**
   * @schema ServerEvent#LogUrl
   */
  readonly logUrl?: string;

}
