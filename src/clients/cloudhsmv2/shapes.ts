/**
 * @schema CopyBackupToRegionRequest
 */
export interface CopyBackupToRegionRequest {
  /**
   * @schema CopyBackupToRegionRequest#DestinationRegion
   */
  readonly destinationRegion: string;

  /**
   * @schema CopyBackupToRegionRequest#BackupId
   */
  readonly backupId: string;

  /**
   * @schema CopyBackupToRegionRequest#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema CopyBackupToRegionResponse
 */
export interface CopyBackupToRegionResponse {
  /**
   * @schema CopyBackupToRegionResponse#DestinationBackup
   */
  readonly destinationBackup?: DestinationBackup;

}

/**
 * @schema CreateClusterRequest
 */
export interface CreateClusterRequest {
  /**
   * @schema CreateClusterRequest#BackupRetentionPolicy
   */
  readonly backupRetentionPolicy?: BackupRetentionPolicy;

  /**
   * @schema CreateClusterRequest#HsmType
   */
  readonly hsmType: string;

  /**
   * @schema CreateClusterRequest#SourceBackupId
   */
  readonly sourceBackupId?: string;

  /**
   * @schema CreateClusterRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CreateClusterRequest#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema CreateClusterResponse
 */
export interface CreateClusterResponse {
  /**
   * @schema CreateClusterResponse#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema CreateHsmRequest
 */
export interface CreateHsmRequest {
  /**
   * @schema CreateHsmRequest#ClusterId
   */
  readonly clusterId: string;

  /**
   * @schema CreateHsmRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema CreateHsmRequest#IpAddress
   */
  readonly ipAddress?: string;

}

/**
 * @schema CreateHsmResponse
 */
export interface CreateHsmResponse {
  /**
   * @schema CreateHsmResponse#Hsm
   */
  readonly hsm?: Hsm;

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
  /**
   * @schema DeleteBackupResponse#Backup
   */
  readonly backup?: Backup;

}

/**
 * @schema DeleteClusterRequest
 */
export interface DeleteClusterRequest {
  /**
   * @schema DeleteClusterRequest#ClusterId
   */
  readonly clusterId: string;

}

/**
 * @schema DeleteClusterResponse
 */
export interface DeleteClusterResponse {
  /**
   * @schema DeleteClusterResponse#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema DeleteHsmRequest
 */
export interface DeleteHsmRequest {
  /**
   * @schema DeleteHsmRequest#ClusterId
   */
  readonly clusterId: string;

  /**
   * @schema DeleteHsmRequest#HsmId
   */
  readonly hsmId?: string;

  /**
   * @schema DeleteHsmRequest#EniId
   */
  readonly eniId?: string;

  /**
   * @schema DeleteHsmRequest#EniIp
   */
  readonly eniIp?: string;

}

/**
 * @schema DeleteHsmResponse
 */
export interface DeleteHsmResponse {
  /**
   * @schema DeleteHsmResponse#HsmId
   */
  readonly hsmId?: string;

}

/**
 * @schema DescribeBackupsRequest
 */
export interface DescribeBackupsRequest {
  /**
   * @schema DescribeBackupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeBackupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBackupsRequest#Filters
   */
  readonly filters?: { [key: string]: string[] };

  /**
   * @schema DescribeBackupsRequest#SortAscending
   */
  readonly sortAscending?: boolean;

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
 * @schema DescribeClustersRequest
 */
export interface DescribeClustersRequest {
  /**
   * @schema DescribeClustersRequest#Filters
   */
  readonly filters?: { [key: string]: string[] };

  /**
   * @schema DescribeClustersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeClustersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeClustersResponse
 */
export interface DescribeClustersResponse {
  /**
   * @schema DescribeClustersResponse#Clusters
   */
  readonly clusters?: Cluster[];

  /**
   * @schema DescribeClustersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InitializeClusterRequest
 */
export interface InitializeClusterRequest {
  /**
   * @schema InitializeClusterRequest#ClusterId
   */
  readonly clusterId: string;

  /**
   * @schema InitializeClusterRequest#SignedCert
   */
  readonly signedCert: string;

  /**
   * @schema InitializeClusterRequest#TrustAnchor
   */
  readonly trustAnchor: string;

}

/**
 * @schema InitializeClusterResponse
 */
export interface InitializeClusterResponse {
  /**
   * @schema InitializeClusterResponse#State
   */
  readonly state?: string;

  /**
   * @schema InitializeClusterResponse#StateMessage
   */
  readonly stateMessage?: string;

}

/**
 * @schema ListTagsRequest
 */
export interface ListTagsRequest {
  /**
   * @schema ListTagsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ListTagsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsResponse
 */
export interface ListTagsResponse {
  /**
   * @schema ListTagsResponse#TagList
   */
  readonly tagList: Tag[];

  /**
   * @schema ListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ModifyBackupAttributesRequest
 */
export interface ModifyBackupAttributesRequest {
  /**
   * @schema ModifyBackupAttributesRequest#BackupId
   */
  readonly backupId: string;

  /**
   * @schema ModifyBackupAttributesRequest#NeverExpires
   */
  readonly neverExpires: boolean;

}

/**
 * @schema ModifyBackupAttributesResponse
 */
export interface ModifyBackupAttributesResponse {
  /**
   * @schema ModifyBackupAttributesResponse#Backup
   */
  readonly backup?: Backup;

}

/**
 * @schema ModifyClusterRequest
 */
export interface ModifyClusterRequest {
  /**
   * @schema ModifyClusterRequest#BackupRetentionPolicy
   */
  readonly backupRetentionPolicy: BackupRetentionPolicy;

  /**
   * @schema ModifyClusterRequest#ClusterId
   */
  readonly clusterId: string;

}

/**
 * @schema ModifyClusterResponse
 */
export interface ModifyClusterResponse {
  /**
   * @schema ModifyClusterResponse#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema RestoreBackupRequest
 */
export interface RestoreBackupRequest {
  /**
   * @schema RestoreBackupRequest#BackupId
   */
  readonly backupId: string;

}

/**
 * @schema RestoreBackupResponse
 */
export interface RestoreBackupResponse {
  /**
   * @schema RestoreBackupResponse#Backup
   */
  readonly backup?: Backup;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema TagResourceRequest#TagList
   */
  readonly tagList: Tag[];

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
   * @schema UntagResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema UntagResourceRequest#TagKeyList
   */
  readonly tagKeyList: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
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
 * @schema DestinationBackup
 */
export interface DestinationBackup {
  /**
   * @schema DestinationBackup#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema DestinationBackup#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema DestinationBackup#SourceBackup
   */
  readonly sourceBackup?: string;

  /**
   * @schema DestinationBackup#SourceCluster
   */
  readonly sourceCluster?: string;

}

/**
 * @schema BackupRetentionPolicy
 */
export interface BackupRetentionPolicy {
  /**
   * @schema BackupRetentionPolicy#Type
   */
  readonly type?: string;

  /**
   * @schema BackupRetentionPolicy#Value
   */
  readonly value?: string;

}

/**
 * @schema Cluster
 */
export interface Cluster {
  /**
   * @schema Cluster#BackupPolicy
   */
  readonly backupPolicy?: string;

  /**
   * @schema Cluster#BackupRetentionPolicy
   */
  readonly backupRetentionPolicy?: BackupRetentionPolicy;

  /**
   * @schema Cluster#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema Cluster#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema Cluster#Hsms
   */
  readonly hsms?: Hsm[];

  /**
   * @schema Cluster#HsmType
   */
  readonly hsmType?: string;

  /**
   * @schema Cluster#PreCoPassword
   */
  readonly preCoPassword?: string;

  /**
   * @schema Cluster#SecurityGroup
   */
  readonly securityGroup?: string;

  /**
   * @schema Cluster#SourceBackupId
   */
  readonly sourceBackupId?: string;

  /**
   * @schema Cluster#State
   */
  readonly state?: string;

  /**
   * @schema Cluster#StateMessage
   */
  readonly stateMessage?: string;

  /**
   * @schema Cluster#SubnetMapping
   */
  readonly subnetMapping?: { [key: string]: string };

  /**
   * @schema Cluster#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Cluster#Certificates
   */
  readonly certificates?: Certificates;

  /**
   * @schema Cluster#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema Hsm
 */
export interface Hsm {
  /**
   * @schema Hsm#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Hsm#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema Hsm#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Hsm#EniId
   */
  readonly eniId?: string;

  /**
   * @schema Hsm#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema Hsm#HsmId
   */
  readonly hsmId: string;

  /**
   * @schema Hsm#State
   */
  readonly state?: string;

  /**
   * @schema Hsm#StateMessage
   */
  readonly stateMessage?: string;

}

/**
 * @schema Backup
 */
export interface Backup {
  /**
   * @schema Backup#BackupId
   */
  readonly backupId: string;

  /**
   * @schema Backup#BackupState
   */
  readonly backupState?: string;

  /**
   * @schema Backup#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema Backup#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema Backup#CopyTimestamp
   */
  readonly copyTimestamp?: string;

  /**
   * @schema Backup#NeverExpires
   */
  readonly neverExpires?: boolean;

  /**
   * @schema Backup#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema Backup#SourceBackup
   */
  readonly sourceBackup?: string;

  /**
   * @schema Backup#SourceCluster
   */
  readonly sourceCluster?: string;

  /**
   * @schema Backup#DeleteTimestamp
   */
  readonly deleteTimestamp?: string;

  /**
   * @schema Backup#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema Certificates
 */
export interface Certificates {
  /**
   * @schema Certificates#ClusterCsr
   */
  readonly clusterCsr?: string;

  /**
   * @schema Certificates#HsmCertificate
   */
  readonly hsmCertificate?: string;

  /**
   * @schema Certificates#AwsHardwareCertificate
   */
  readonly awsHardwareCertificate?: string;

  /**
   * @schema Certificates#ManufacturerHardwareCertificate
   */
  readonly manufacturerHardwareCertificate?: string;

  /**
   * @schema Certificates#ClusterCertificate
   */
  readonly clusterCertificate?: string;

}
