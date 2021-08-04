/**
 * @schema CloudHsmv2CopyBackupToRegionRequest
 */
export interface CloudHsmv2CopyBackupToRegionRequest {
  /**
   * @schema CloudHsmv2CopyBackupToRegionRequest#DestinationRegion
   */
  readonly destinationRegion: string;

  /**
   * @schema CloudHsmv2CopyBackupToRegionRequest#BackupId
   */
  readonly backupId: string;

  /**
   * @schema CloudHsmv2CopyBackupToRegionRequest#TagList
   */
  readonly tagList?: CloudHsmv2Tag[];

}

/**
 * @schema CloudHsmv2CopyBackupToRegionResponse
 */
export interface CloudHsmv2CopyBackupToRegionResponse {
  /**
   * @schema CloudHsmv2CopyBackupToRegionResponse#DestinationBackup
   */
  readonly destinationBackup?: CloudHsmv2DestinationBackup;

}

/**
 * @schema CloudHsmv2CreateClusterRequest
 */
export interface CloudHsmv2CreateClusterRequest {
  /**
   * @schema CloudHsmv2CreateClusterRequest#BackupRetentionPolicy
   */
  readonly backupRetentionPolicy?: CloudHsmv2BackupRetentionPolicy;

  /**
   * @schema CloudHsmv2CreateClusterRequest#HsmType
   */
  readonly hsmType: string;

  /**
   * @schema CloudHsmv2CreateClusterRequest#SourceBackupId
   */
  readonly sourceBackupId?: string;

  /**
   * @schema CloudHsmv2CreateClusterRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CloudHsmv2CreateClusterRequest#TagList
   */
  readonly tagList?: CloudHsmv2Tag[];

}

/**
 * @schema CloudHsmv2CreateClusterResponse
 */
export interface CloudHsmv2CreateClusterResponse {
  /**
   * @schema CloudHsmv2CreateClusterResponse#Cluster
   */
  readonly cluster?: CloudHsmv2Cluster;

}

/**
 * @schema CloudHsmv2CreateHsmRequest
 */
export interface CloudHsmv2CreateHsmRequest {
  /**
   * @schema CloudHsmv2CreateHsmRequest#ClusterId
   */
  readonly clusterId: string;

  /**
   * @schema CloudHsmv2CreateHsmRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema CloudHsmv2CreateHsmRequest#IpAddress
   */
  readonly ipAddress?: string;

}

/**
 * @schema CloudHsmv2CreateHsmResponse
 */
export interface CloudHsmv2CreateHsmResponse {
  /**
   * @schema CloudHsmv2CreateHsmResponse#Hsm
   */
  readonly hsm?: CloudHsmv2Hsm;

}

/**
 * @schema CloudHsmv2DeleteBackupRequest
 */
export interface CloudHsmv2DeleteBackupRequest {
  /**
   * @schema CloudHsmv2DeleteBackupRequest#BackupId
   */
  readonly backupId: string;

}

/**
 * @schema CloudHsmv2DeleteBackupResponse
 */
export interface CloudHsmv2DeleteBackupResponse {
  /**
   * @schema CloudHsmv2DeleteBackupResponse#Backup
   */
  readonly backup?: CloudHsmv2Backup;

}

/**
 * @schema CloudHsmv2DeleteClusterRequest
 */
export interface CloudHsmv2DeleteClusterRequest {
  /**
   * @schema CloudHsmv2DeleteClusterRequest#ClusterId
   */
  readonly clusterId: string;

}

/**
 * @schema CloudHsmv2DeleteClusterResponse
 */
export interface CloudHsmv2DeleteClusterResponse {
  /**
   * @schema CloudHsmv2DeleteClusterResponse#Cluster
   */
  readonly cluster?: CloudHsmv2Cluster;

}

/**
 * @schema CloudHsmv2DeleteHsmRequest
 */
export interface CloudHsmv2DeleteHsmRequest {
  /**
   * @schema CloudHsmv2DeleteHsmRequest#ClusterId
   */
  readonly clusterId: string;

  /**
   * @schema CloudHsmv2DeleteHsmRequest#HsmId
   */
  readonly hsmId?: string;

  /**
   * @schema CloudHsmv2DeleteHsmRequest#EniId
   */
  readonly eniId?: string;

  /**
   * @schema CloudHsmv2DeleteHsmRequest#EniIp
   */
  readonly eniIp?: string;

}

/**
 * @schema CloudHsmv2DeleteHsmResponse
 */
export interface CloudHsmv2DeleteHsmResponse {
  /**
   * @schema CloudHsmv2DeleteHsmResponse#HsmId
   */
  readonly hsmId?: string;

}

/**
 * @schema CloudHsmv2DescribeBackupsRequest
 */
export interface CloudHsmv2DescribeBackupsRequest {
  /**
   * @schema CloudHsmv2DescribeBackupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudHsmv2DescribeBackupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudHsmv2DescribeBackupsRequest#Filters
   */
  readonly filters?: { [key: string]: string[] };

  /**
   * @schema CloudHsmv2DescribeBackupsRequest#SortAscending
   */
  readonly sortAscending?: boolean;

}

/**
 * @schema CloudHsmv2DescribeBackupsResponse
 */
export interface CloudHsmv2DescribeBackupsResponse {
  /**
   * @schema CloudHsmv2DescribeBackupsResponse#Backups
   */
  readonly backups?: CloudHsmv2Backup[];

  /**
   * @schema CloudHsmv2DescribeBackupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudHsmv2DescribeClustersRequest
 */
export interface CloudHsmv2DescribeClustersRequest {
  /**
   * @schema CloudHsmv2DescribeClustersRequest#Filters
   */
  readonly filters?: { [key: string]: string[] };

  /**
   * @schema CloudHsmv2DescribeClustersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudHsmv2DescribeClustersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudHsmv2DescribeClustersResponse
 */
export interface CloudHsmv2DescribeClustersResponse {
  /**
   * @schema CloudHsmv2DescribeClustersResponse#Clusters
   */
  readonly clusters?: CloudHsmv2Cluster[];

  /**
   * @schema CloudHsmv2DescribeClustersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudHsmv2InitializeClusterRequest
 */
export interface CloudHsmv2InitializeClusterRequest {
  /**
   * @schema CloudHsmv2InitializeClusterRequest#ClusterId
   */
  readonly clusterId: string;

  /**
   * @schema CloudHsmv2InitializeClusterRequest#SignedCert
   */
  readonly signedCert: string;

  /**
   * @schema CloudHsmv2InitializeClusterRequest#TrustAnchor
   */
  readonly trustAnchor: string;

}

/**
 * @schema CloudHsmv2InitializeClusterResponse
 */
export interface CloudHsmv2InitializeClusterResponse {
  /**
   * @schema CloudHsmv2InitializeClusterResponse#State
   */
  readonly state?: string;

  /**
   * @schema CloudHsmv2InitializeClusterResponse#StateMessage
   */
  readonly stateMessage?: string;

}

/**
 * @schema CloudHsmv2ListTagsRequest
 */
export interface CloudHsmv2ListTagsRequest {
  /**
   * @schema CloudHsmv2ListTagsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema CloudHsmv2ListTagsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudHsmv2ListTagsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudHsmv2ListTagsResponse
 */
export interface CloudHsmv2ListTagsResponse {
  /**
   * @schema CloudHsmv2ListTagsResponse#TagList
   */
  readonly tagList: CloudHsmv2Tag[];

  /**
   * @schema CloudHsmv2ListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudHsmv2ModifyBackupAttributesRequest
 */
export interface CloudHsmv2ModifyBackupAttributesRequest {
  /**
   * @schema CloudHsmv2ModifyBackupAttributesRequest#BackupId
   */
  readonly backupId: string;

  /**
   * @schema CloudHsmv2ModifyBackupAttributesRequest#NeverExpires
   */
  readonly neverExpires: boolean;

}

/**
 * @schema CloudHsmv2ModifyBackupAttributesResponse
 */
export interface CloudHsmv2ModifyBackupAttributesResponse {
  /**
   * @schema CloudHsmv2ModifyBackupAttributesResponse#Backup
   */
  readonly backup?: CloudHsmv2Backup;

}

/**
 * @schema CloudHsmv2ModifyClusterRequest
 */
export interface CloudHsmv2ModifyClusterRequest {
  /**
   * @schema CloudHsmv2ModifyClusterRequest#BackupRetentionPolicy
   */
  readonly backupRetentionPolicy: CloudHsmv2BackupRetentionPolicy;

  /**
   * @schema CloudHsmv2ModifyClusterRequest#ClusterId
   */
  readonly clusterId: string;

}

/**
 * @schema CloudHsmv2ModifyClusterResponse
 */
export interface CloudHsmv2ModifyClusterResponse {
  /**
   * @schema CloudHsmv2ModifyClusterResponse#Cluster
   */
  readonly cluster?: CloudHsmv2Cluster;

}

/**
 * @schema CloudHsmv2RestoreBackupRequest
 */
export interface CloudHsmv2RestoreBackupRequest {
  /**
   * @schema CloudHsmv2RestoreBackupRequest#BackupId
   */
  readonly backupId: string;

}

/**
 * @schema CloudHsmv2RestoreBackupResponse
 */
export interface CloudHsmv2RestoreBackupResponse {
  /**
   * @schema CloudHsmv2RestoreBackupResponse#Backup
   */
  readonly backup?: CloudHsmv2Backup;

}

/**
 * @schema CloudHsmv2TagResourceRequest
 */
export interface CloudHsmv2TagResourceRequest {
  /**
   * @schema CloudHsmv2TagResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema CloudHsmv2TagResourceRequest#TagList
   */
  readonly tagList: CloudHsmv2Tag[];

}

/**
 * @schema CloudHsmv2TagResourceResponse
 */
export interface CloudHsmv2TagResourceResponse {
}

/**
 * @schema CloudHsmv2UntagResourceRequest
 */
export interface CloudHsmv2UntagResourceRequest {
  /**
   * @schema CloudHsmv2UntagResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema CloudHsmv2UntagResourceRequest#TagKeyList
   */
  readonly tagKeyList: string[];

}

/**
 * @schema CloudHsmv2UntagResourceResponse
 */
export interface CloudHsmv2UntagResourceResponse {
}

/**
 * @schema CloudHsmv2Tag
 */
export interface CloudHsmv2Tag {
  /**
   * @schema CloudHsmv2Tag#Key
   */
  readonly key: string;

  /**
   * @schema CloudHsmv2Tag#Value
   */
  readonly value: string;

}

/**
 * @schema CloudHsmv2DestinationBackup
 */
export interface CloudHsmv2DestinationBackup {
  /**
   * @schema CloudHsmv2DestinationBackup#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema CloudHsmv2DestinationBackup#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema CloudHsmv2DestinationBackup#SourceBackup
   */
  readonly sourceBackup?: string;

  /**
   * @schema CloudHsmv2DestinationBackup#SourceCluster
   */
  readonly sourceCluster?: string;

}

/**
 * @schema CloudHsmv2BackupRetentionPolicy
 */
export interface CloudHsmv2BackupRetentionPolicy {
  /**
   * @schema CloudHsmv2BackupRetentionPolicy#Type
   */
  readonly type?: string;

  /**
   * @schema CloudHsmv2BackupRetentionPolicy#Value
   */
  readonly value?: string;

}

/**
 * @schema CloudHsmv2Cluster
 */
export interface CloudHsmv2Cluster {
  /**
   * @schema CloudHsmv2Cluster#BackupPolicy
   */
  readonly backupPolicy?: string;

  /**
   * @schema CloudHsmv2Cluster#BackupRetentionPolicy
   */
  readonly backupRetentionPolicy?: CloudHsmv2BackupRetentionPolicy;

  /**
   * @schema CloudHsmv2Cluster#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema CloudHsmv2Cluster#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema CloudHsmv2Cluster#Hsms
   */
  readonly hsms?: CloudHsmv2Hsm[];

  /**
   * @schema CloudHsmv2Cluster#HsmType
   */
  readonly hsmType?: string;

  /**
   * @schema CloudHsmv2Cluster#PreCoPassword
   */
  readonly preCoPassword?: string;

  /**
   * @schema CloudHsmv2Cluster#SecurityGroup
   */
  readonly securityGroup?: string;

  /**
   * @schema CloudHsmv2Cluster#SourceBackupId
   */
  readonly sourceBackupId?: string;

  /**
   * @schema CloudHsmv2Cluster#State
   */
  readonly state?: string;

  /**
   * @schema CloudHsmv2Cluster#StateMessage
   */
  readonly stateMessage?: string;

  /**
   * @schema CloudHsmv2Cluster#SubnetMapping
   */
  readonly subnetMapping?: { [key: string]: string };

  /**
   * @schema CloudHsmv2Cluster#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CloudHsmv2Cluster#Certificates
   */
  readonly certificates?: CloudHsmv2Certificates;

  /**
   * @schema CloudHsmv2Cluster#TagList
   */
  readonly tagList?: CloudHsmv2Tag[];

}

/**
 * @schema CloudHsmv2Hsm
 */
export interface CloudHsmv2Hsm {
  /**
   * @schema CloudHsmv2Hsm#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CloudHsmv2Hsm#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema CloudHsmv2Hsm#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CloudHsmv2Hsm#EniId
   */
  readonly eniId?: string;

  /**
   * @schema CloudHsmv2Hsm#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema CloudHsmv2Hsm#HsmId
   */
  readonly hsmId: string;

  /**
   * @schema CloudHsmv2Hsm#State
   */
  readonly state?: string;

  /**
   * @schema CloudHsmv2Hsm#StateMessage
   */
  readonly stateMessage?: string;

}

/**
 * @schema CloudHsmv2Backup
 */
export interface CloudHsmv2Backup {
  /**
   * @schema CloudHsmv2Backup#BackupId
   */
  readonly backupId: string;

  /**
   * @schema CloudHsmv2Backup#BackupState
   */
  readonly backupState?: string;

  /**
   * @schema CloudHsmv2Backup#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema CloudHsmv2Backup#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema CloudHsmv2Backup#CopyTimestamp
   */
  readonly copyTimestamp?: string;

  /**
   * @schema CloudHsmv2Backup#NeverExpires
   */
  readonly neverExpires?: boolean;

  /**
   * @schema CloudHsmv2Backup#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema CloudHsmv2Backup#SourceBackup
   */
  readonly sourceBackup?: string;

  /**
   * @schema CloudHsmv2Backup#SourceCluster
   */
  readonly sourceCluster?: string;

  /**
   * @schema CloudHsmv2Backup#DeleteTimestamp
   */
  readonly deleteTimestamp?: string;

  /**
   * @schema CloudHsmv2Backup#TagList
   */
  readonly tagList?: CloudHsmv2Tag[];

}

/**
 * @schema CloudHsmv2Certificates
 */
export interface CloudHsmv2Certificates {
  /**
   * @schema CloudHsmv2Certificates#ClusterCsr
   */
  readonly clusterCsr?: string;

  /**
   * @schema CloudHsmv2Certificates#HsmCertificate
   */
  readonly hsmCertificate?: string;

  /**
   * @schema CloudHsmv2Certificates#AwsHardwareCertificate
   */
  readonly awsHardwareCertificate?: string;

  /**
   * @schema CloudHsmv2Certificates#ManufacturerHardwareCertificate
   */
  readonly manufacturerHardwareCertificate?: string;

  /**
   * @schema CloudHsmv2Certificates#ClusterCertificate
   */
  readonly clusterCertificate?: string;

}
