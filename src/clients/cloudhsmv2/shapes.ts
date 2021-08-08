/**
 * @schema CloudHsmv2CopyBackupToRegionRequest
 */
export interface CloudHsmv2CopyBackupToRegionRequest {
  /**
   * @schema CloudHsmv2CopyBackupToRegionRequest#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema CloudHsmv2CopyBackupToRegionRequest#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema CloudHsmv2CopyBackupToRegionRequest#TagList
   */
  readonly tagList?: CloudHsmv2Tag[];

}

/**
 * Converts an object of type 'CloudHsmv2CopyBackupToRegionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2CopyBackupToRegionRequest(obj: CloudHsmv2CopyBackupToRegionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationRegion': obj.destinationRegion,
    'BackupId': obj.backupId,
    'TagList': obj.tagList?.map(y => toJson_CloudHsmv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2CopyBackupToRegionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2CopyBackupToRegionResponse(obj: CloudHsmv2CopyBackupToRegionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationBackup': toJson_CloudHsmv2DestinationBackup(obj.destinationBackup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly hsmType?: string;

  /**
   * @schema CloudHsmv2CreateClusterRequest#SourceBackupId
   */
  readonly sourceBackupId?: string;

  /**
   * @schema CloudHsmv2CreateClusterRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema CloudHsmv2CreateClusterRequest#TagList
   */
  readonly tagList?: CloudHsmv2Tag[];

}

/**
 * Converts an object of type 'CloudHsmv2CreateClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2CreateClusterRequest(obj: CloudHsmv2CreateClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupRetentionPolicy': toJson_CloudHsmv2BackupRetentionPolicy(obj.backupRetentionPolicy),
    'HsmType': obj.hsmType,
    'SourceBackupId': obj.sourceBackupId,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'TagList': obj.tagList?.map(y => toJson_CloudHsmv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2CreateClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2CreateClusterResponse(obj: CloudHsmv2CreateClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_CloudHsmv2Cluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2CreateHsmRequest
 */
export interface CloudHsmv2CreateHsmRequest {
  /**
   * @schema CloudHsmv2CreateHsmRequest#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema CloudHsmv2CreateHsmRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CloudHsmv2CreateHsmRequest#IpAddress
   */
  readonly ipAddress?: string;

}

/**
 * Converts an object of type 'CloudHsmv2CreateHsmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2CreateHsmRequest(obj: CloudHsmv2CreateHsmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
    'AvailabilityZone': obj.availabilityZone,
    'IpAddress': obj.ipAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2CreateHsmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2CreateHsmResponse(obj: CloudHsmv2CreateHsmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Hsm': toJson_CloudHsmv2Hsm(obj.hsm),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2DeleteBackupRequest
 */
export interface CloudHsmv2DeleteBackupRequest {
  /**
   * @schema CloudHsmv2DeleteBackupRequest#BackupId
   */
  readonly backupId?: string;

}

/**
 * Converts an object of type 'CloudHsmv2DeleteBackupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DeleteBackupRequest(obj: CloudHsmv2DeleteBackupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2DeleteBackupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DeleteBackupResponse(obj: CloudHsmv2DeleteBackupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backup': toJson_CloudHsmv2Backup(obj.backup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2DeleteClusterRequest
 */
export interface CloudHsmv2DeleteClusterRequest {
  /**
   * @schema CloudHsmv2DeleteClusterRequest#ClusterId
   */
  readonly clusterId?: string;

}

/**
 * Converts an object of type 'CloudHsmv2DeleteClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DeleteClusterRequest(obj: CloudHsmv2DeleteClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2DeleteClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DeleteClusterResponse(obj: CloudHsmv2DeleteClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_CloudHsmv2Cluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2DeleteHsmRequest
 */
export interface CloudHsmv2DeleteHsmRequest {
  /**
   * @schema CloudHsmv2DeleteHsmRequest#ClusterId
   */
  readonly clusterId?: string;

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
 * Converts an object of type 'CloudHsmv2DeleteHsmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DeleteHsmRequest(obj: CloudHsmv2DeleteHsmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
    'HsmId': obj.hsmId,
    'EniId': obj.eniId,
    'EniIp': obj.eniIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2DeleteHsmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DeleteHsmResponse(obj: CloudHsmv2DeleteHsmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmId': obj.hsmId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2DescribeBackupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DescribeBackupsRequest(obj: CloudHsmv2DescribeBackupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': ((obj.filters) === undefined) ? undefined : (Object.entries(obj.filters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'SortAscending': obj.sortAscending,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2DescribeBackupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DescribeBackupsResponse(obj: CloudHsmv2DescribeBackupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backups': obj.backups?.map(y => toJson_CloudHsmv2Backup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2DescribeClustersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DescribeClustersRequest(obj: CloudHsmv2DescribeClustersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': ((obj.filters) === undefined) ? undefined : (Object.entries(obj.filters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2DescribeClustersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DescribeClustersResponse(obj: CloudHsmv2DescribeClustersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Clusters': obj.clusters?.map(y => toJson_CloudHsmv2Cluster(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2InitializeClusterRequest
 */
export interface CloudHsmv2InitializeClusterRequest {
  /**
   * @schema CloudHsmv2InitializeClusterRequest#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema CloudHsmv2InitializeClusterRequest#SignedCert
   */
  readonly signedCert?: string;

  /**
   * @schema CloudHsmv2InitializeClusterRequest#TrustAnchor
   */
  readonly trustAnchor?: string;

}

/**
 * Converts an object of type 'CloudHsmv2InitializeClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2InitializeClusterRequest(obj: CloudHsmv2InitializeClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
    'SignedCert': obj.signedCert,
    'TrustAnchor': obj.trustAnchor,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2InitializeClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2InitializeClusterResponse(obj: CloudHsmv2InitializeClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'StateMessage': obj.stateMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2ListTagsRequest
 */
export interface CloudHsmv2ListTagsRequest {
  /**
   * @schema CloudHsmv2ListTagsRequest#ResourceId
   */
  readonly resourceId?: string;

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
 * Converts an object of type 'CloudHsmv2ListTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2ListTagsRequest(obj: CloudHsmv2ListTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2ListTagsResponse
 */
export interface CloudHsmv2ListTagsResponse {
  /**
   * @schema CloudHsmv2ListTagsResponse#TagList
   */
  readonly tagList?: CloudHsmv2Tag[];

  /**
   * @schema CloudHsmv2ListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudHsmv2ListTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2ListTagsResponse(obj: CloudHsmv2ListTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_CloudHsmv2Tag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2ModifyBackupAttributesRequest
 */
export interface CloudHsmv2ModifyBackupAttributesRequest {
  /**
   * @schema CloudHsmv2ModifyBackupAttributesRequest#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema CloudHsmv2ModifyBackupAttributesRequest#NeverExpires
   */
  readonly neverExpires?: boolean;

}

/**
 * Converts an object of type 'CloudHsmv2ModifyBackupAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2ModifyBackupAttributesRequest(obj: CloudHsmv2ModifyBackupAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
    'NeverExpires': obj.neverExpires,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2ModifyBackupAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2ModifyBackupAttributesResponse(obj: CloudHsmv2ModifyBackupAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backup': toJson_CloudHsmv2Backup(obj.backup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2ModifyClusterRequest
 */
export interface CloudHsmv2ModifyClusterRequest {
  /**
   * @schema CloudHsmv2ModifyClusterRequest#BackupRetentionPolicy
   */
  readonly backupRetentionPolicy?: CloudHsmv2BackupRetentionPolicy;

  /**
   * @schema CloudHsmv2ModifyClusterRequest#ClusterId
   */
  readonly clusterId?: string;

}

/**
 * Converts an object of type 'CloudHsmv2ModifyClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2ModifyClusterRequest(obj: CloudHsmv2ModifyClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupRetentionPolicy': toJson_CloudHsmv2BackupRetentionPolicy(obj.backupRetentionPolicy),
    'ClusterId': obj.clusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2ModifyClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2ModifyClusterResponse(obj: CloudHsmv2ModifyClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_CloudHsmv2Cluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2RestoreBackupRequest
 */
export interface CloudHsmv2RestoreBackupRequest {
  /**
   * @schema CloudHsmv2RestoreBackupRequest#BackupId
   */
  readonly backupId?: string;

}

/**
 * Converts an object of type 'CloudHsmv2RestoreBackupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2RestoreBackupRequest(obj: CloudHsmv2RestoreBackupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2RestoreBackupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2RestoreBackupResponse(obj: CloudHsmv2RestoreBackupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backup': toJson_CloudHsmv2Backup(obj.backup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2TagResourceRequest
 */
export interface CloudHsmv2TagResourceRequest {
  /**
   * @schema CloudHsmv2TagResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema CloudHsmv2TagResourceRequest#TagList
   */
  readonly tagList?: CloudHsmv2Tag[];

}

/**
 * Converts an object of type 'CloudHsmv2TagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2TagResourceRequest(obj: CloudHsmv2TagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'TagList': obj.tagList?.map(y => toJson_CloudHsmv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2TagResourceResponse
 */
export interface CloudHsmv2TagResourceResponse {
}

/**
 * Converts an object of type 'CloudHsmv2TagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2TagResourceResponse(obj: CloudHsmv2TagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2UntagResourceRequest
 */
export interface CloudHsmv2UntagResourceRequest {
  /**
   * @schema CloudHsmv2UntagResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema CloudHsmv2UntagResourceRequest#TagKeyList
   */
  readonly tagKeyList?: string[];

}

/**
 * Converts an object of type 'CloudHsmv2UntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2UntagResourceRequest(obj: CloudHsmv2UntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'TagKeyList': obj.tagKeyList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2UntagResourceResponse
 */
export interface CloudHsmv2UntagResourceResponse {
}

/**
 * Converts an object of type 'CloudHsmv2UntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2UntagResourceResponse(obj: CloudHsmv2UntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2Tag
 */
export interface CloudHsmv2Tag {
  /**
   * @schema CloudHsmv2Tag#Key
   */
  readonly key?: string;

  /**
   * @schema CloudHsmv2Tag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CloudHsmv2Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2Tag(obj: CloudHsmv2Tag | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'CloudHsmv2DestinationBackup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2DestinationBackup(obj: CloudHsmv2DestinationBackup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTimestamp': obj.createTimestamp,
    'SourceRegion': obj.sourceRegion,
    'SourceBackup': obj.sourceBackup,
    'SourceCluster': obj.sourceCluster,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2BackupRetentionPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2BackupRetentionPolicy(obj: CloudHsmv2BackupRetentionPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudHsmv2Cluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2Cluster(obj: CloudHsmv2Cluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPolicy': obj.backupPolicy,
    'BackupRetentionPolicy': toJson_CloudHsmv2BackupRetentionPolicy(obj.backupRetentionPolicy),
    'ClusterId': obj.clusterId,
    'CreateTimestamp': obj.createTimestamp,
    'Hsms': obj.hsms?.map(y => toJson_CloudHsmv2Hsm(y)),
    'HsmType': obj.hsmType,
    'PreCoPassword': obj.preCoPassword,
    'SecurityGroup': obj.securityGroup,
    'SourceBackupId': obj.sourceBackupId,
    'State': obj.state,
    'StateMessage': obj.stateMessage,
    'SubnetMapping': ((obj.subnetMapping) === undefined) ? undefined : (Object.entries(obj.subnetMapping).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VpcId': obj.vpcId,
    'Certificates': toJson_CloudHsmv2Certificates(obj.certificates),
    'TagList': obj.tagList?.map(y => toJson_CloudHsmv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly hsmId?: string;

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
 * Converts an object of type 'CloudHsmv2Hsm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2Hsm(obj: CloudHsmv2Hsm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZone': obj.availabilityZone,
    'ClusterId': obj.clusterId,
    'SubnetId': obj.subnetId,
    'EniId': obj.eniId,
    'EniIp': obj.eniIp,
    'HsmId': obj.hsmId,
    'State': obj.state,
    'StateMessage': obj.stateMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmv2Backup
 */
export interface CloudHsmv2Backup {
  /**
   * @schema CloudHsmv2Backup#BackupId
   */
  readonly backupId?: string;

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
 * Converts an object of type 'CloudHsmv2Backup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2Backup(obj: CloudHsmv2Backup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
    'BackupState': obj.backupState,
    'ClusterId': obj.clusterId,
    'CreateTimestamp': obj.createTimestamp,
    'CopyTimestamp': obj.copyTimestamp,
    'NeverExpires': obj.neverExpires,
    'SourceRegion': obj.sourceRegion,
    'SourceBackup': obj.sourceBackup,
    'SourceCluster': obj.sourceCluster,
    'DeleteTimestamp': obj.deleteTimestamp,
    'TagList': obj.tagList?.map(y => toJson_CloudHsmv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'CloudHsmv2Certificates' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmv2Certificates(obj: CloudHsmv2Certificates | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterCsr': obj.clusterCsr,
    'HsmCertificate': obj.hsmCertificate,
    'AwsHardwareCertificate': obj.awsHardwareCertificate,
    'ManufacturerHardwareCertificate': obj.manufacturerHardwareCertificate,
    'ClusterCertificate': obj.clusterCertificate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
