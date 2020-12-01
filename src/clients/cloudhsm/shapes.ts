/**
 * @schema AddTagsToResourceRequest
 */
export interface AddTagsToResourceRequest {
  /**
   * @schema AddTagsToResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AddTagsToResourceRequest#TagList
   */
  readonly tagList: Tag[];

}

/**
 * @schema AddTagsToResourceResponse
 */
export interface AddTagsToResourceResponse {
  /**
   * @schema AddTagsToResourceResponse#Status
   */
  readonly status: string;

}

/**
 * @schema CreateHapgRequest
 */
export interface CreateHapgRequest {
  /**
   * @schema CreateHapgRequest#Label
   */
  readonly label: string;

}

/**
 * @schema CreateHapgResponse
 */
export interface CreateHapgResponse {
  /**
   * @schema CreateHapgResponse#HapgArn
   */
  readonly hapgArn?: string;

}

/**
 * @schema CreateHsmRequest
 */
export interface CreateHsmRequest {
  /**
   * @schema CreateHsmRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema CreateHsmRequest#SshKey
   */
  readonly sshKey: string;

  /**
   * @schema CreateHsmRequest#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema CreateHsmRequest#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema CreateHsmRequest#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema CreateHsmRequest#SubscriptionType
   */
  readonly subscriptionType: string;

  /**
   * @schema CreateHsmRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateHsmRequest#SyslogIp
   */
  readonly syslogIp?: string;

}

/**
 * @schema CreateHsmResponse
 */
export interface CreateHsmResponse {
  /**
   * @schema CreateHsmResponse#HsmArn
   */
  readonly hsmArn?: string;

}

/**
 * @schema CreateLunaClientRequest
 */
export interface CreateLunaClientRequest {
  /**
   * @schema CreateLunaClientRequest#Label
   */
  readonly label?: string;

  /**
   * @schema CreateLunaClientRequest#Certificate
   */
  readonly certificate: string;

}

/**
 * @schema CreateLunaClientResponse
 */
export interface CreateLunaClientResponse {
  /**
   * @schema CreateLunaClientResponse#ClientArn
   */
  readonly clientArn?: string;

}

/**
 * @schema DeleteHapgRequest
 */
export interface DeleteHapgRequest {
  /**
   * @schema DeleteHapgRequest#HapgArn
   */
  readonly hapgArn: string;

}

/**
 * @schema DeleteHapgResponse
 */
export interface DeleteHapgResponse {
  /**
   * @schema DeleteHapgResponse#Status
   */
  readonly status: string;

}

/**
 * @schema DeleteHsmRequest
 */
export interface DeleteHsmRequest {
  /**
   * @schema DeleteHsmRequest#HsmArn
   */
  readonly hsmArn: string;

}

/**
 * @schema DeleteHsmResponse
 */
export interface DeleteHsmResponse {
  /**
   * @schema DeleteHsmResponse#Status
   */
  readonly status: string;

}

/**
 * @schema DeleteLunaClientRequest
 */
export interface DeleteLunaClientRequest {
  /**
   * @schema DeleteLunaClientRequest#ClientArn
   */
  readonly clientArn: string;

}

/**
 * @schema DeleteLunaClientResponse
 */
export interface DeleteLunaClientResponse {
  /**
   * @schema DeleteLunaClientResponse#Status
   */
  readonly status: string;

}

/**
 * @schema DescribeHapgRequest
 */
export interface DescribeHapgRequest {
  /**
   * @schema DescribeHapgRequest#HapgArn
   */
  readonly hapgArn: string;

}

/**
 * @schema DescribeHapgResponse
 */
export interface DescribeHapgResponse {
  /**
   * @schema DescribeHapgResponse#HapgArn
   */
  readonly hapgArn?: string;

  /**
   * @schema DescribeHapgResponse#HapgSerial
   */
  readonly hapgSerial?: string;

  /**
   * @schema DescribeHapgResponse#HsmsLastActionFailed
   */
  readonly hsmsLastActionFailed?: string[];

  /**
   * @schema DescribeHapgResponse#HsmsPendingDeletion
   */
  readonly hsmsPendingDeletion?: string[];

  /**
   * @schema DescribeHapgResponse#HsmsPendingRegistration
   */
  readonly hsmsPendingRegistration?: string[];

  /**
   * @schema DescribeHapgResponse#Label
   */
  readonly label?: string;

  /**
   * @schema DescribeHapgResponse#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema DescribeHapgResponse#PartitionSerialList
   */
  readonly partitionSerialList?: string[];

  /**
   * @schema DescribeHapgResponse#State
   */
  readonly state?: string;

}

/**
 * @schema DescribeHsmRequest
 */
export interface DescribeHsmRequest {
  /**
   * @schema DescribeHsmRequest#HsmArn
   */
  readonly hsmArn?: string;

  /**
   * @schema DescribeHsmRequest#HsmSerialNumber
   */
  readonly hsmSerialNumber?: string;

}

/**
 * @schema DescribeHsmResponse
 */
export interface DescribeHsmResponse {
  /**
   * @schema DescribeHsmResponse#HsmArn
   */
  readonly hsmArn?: string;

  /**
   * @schema DescribeHsmResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeHsmResponse#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema DescribeHsmResponse#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DescribeHsmResponse#EniId
   */
  readonly eniId?: string;

  /**
   * @schema DescribeHsmResponse#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema DescribeHsmResponse#SubscriptionType
   */
  readonly subscriptionType?: string;

  /**
   * @schema DescribeHsmResponse#SubscriptionStartDate
   */
  readonly subscriptionStartDate?: string;

  /**
   * @schema DescribeHsmResponse#SubscriptionEndDate
   */
  readonly subscriptionEndDate?: string;

  /**
   * @schema DescribeHsmResponse#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DescribeHsmResponse#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema DescribeHsmResponse#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema DescribeHsmResponse#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema DescribeHsmResponse#VendorName
   */
  readonly vendorName?: string;

  /**
   * @schema DescribeHsmResponse#HsmType
   */
  readonly hsmType?: string;

  /**
   * @schema DescribeHsmResponse#SoftwareVersion
   */
  readonly softwareVersion?: string;

  /**
   * @schema DescribeHsmResponse#SshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema DescribeHsmResponse#SshKeyLastUpdated
   */
  readonly sshKeyLastUpdated?: string;

  /**
   * @schema DescribeHsmResponse#ServerCertUri
   */
  readonly serverCertUri?: string;

  /**
   * @schema DescribeHsmResponse#ServerCertLastUpdated
   */
  readonly serverCertLastUpdated?: string;

  /**
   * @schema DescribeHsmResponse#Partitions
   */
  readonly partitions?: string[];

}

/**
 * @schema DescribeLunaClientRequest
 */
export interface DescribeLunaClientRequest {
  /**
   * @schema DescribeLunaClientRequest#ClientArn
   */
  readonly clientArn?: string;

  /**
   * @schema DescribeLunaClientRequest#CertificateFingerprint
   */
  readonly certificateFingerprint?: string;

}

/**
 * @schema DescribeLunaClientResponse
 */
export interface DescribeLunaClientResponse {
  /**
   * @schema DescribeLunaClientResponse#ClientArn
   */
  readonly clientArn?: string;

  /**
   * @schema DescribeLunaClientResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema DescribeLunaClientResponse#CertificateFingerprint
   */
  readonly certificateFingerprint?: string;

  /**
   * @schema DescribeLunaClientResponse#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema DescribeLunaClientResponse#Label
   */
  readonly label?: string;

}

/**
 * @schema GetConfigRequest
 */
export interface GetConfigRequest {
  /**
   * @schema GetConfigRequest#ClientArn
   */
  readonly clientArn: string;

  /**
   * @schema GetConfigRequest#ClientVersion
   */
  readonly clientVersion: string;

  /**
   * @schema GetConfigRequest#HapgList
   */
  readonly hapgList: string[];

}

/**
 * @schema GetConfigResponse
 */
export interface GetConfigResponse {
  /**
   * @schema GetConfigResponse#ConfigType
   */
  readonly configType?: string;

  /**
   * @schema GetConfigResponse#ConfigFile
   */
  readonly configFile?: string;

  /**
   * @schema GetConfigResponse#ConfigCred
   */
  readonly configCred?: string;

}

/**
 * @schema ListAvailableZonesRequest
 */
export interface ListAvailableZonesRequest {
}

/**
 * @schema ListAvailableZonesResponse
 */
export interface ListAvailableZonesResponse {
  /**
   * @schema ListAvailableZonesResponse#AZList
   */
  readonly azList?: string[];

}

/**
 * @schema ListHapgsRequest
 */
export interface ListHapgsRequest {
  /**
   * @schema ListHapgsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHapgsResponse
 */
export interface ListHapgsResponse {
  /**
   * @schema ListHapgsResponse#HapgList
   */
  readonly hapgList: string[];

  /**
   * @schema ListHapgsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHsmsRequest
 */
export interface ListHsmsRequest {
  /**
   * @schema ListHsmsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHsmsResponse
 */
export interface ListHsmsResponse {
  /**
   * @schema ListHsmsResponse#HsmList
   */
  readonly hsmList?: string[];

  /**
   * @schema ListHsmsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLunaClientsRequest
 */
export interface ListLunaClientsRequest {
  /**
   * @schema ListLunaClientsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLunaClientsResponse
 */
export interface ListLunaClientsResponse {
  /**
   * @schema ListLunaClientsResponse#ClientList
   */
  readonly clientList: string[];

  /**
   * @schema ListLunaClientsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#TagList
   */
  readonly tagList: Tag[];

}

/**
 * @schema ModifyHapgRequest
 */
export interface ModifyHapgRequest {
  /**
   * @schema ModifyHapgRequest#HapgArn
   */
  readonly hapgArn: string;

  /**
   * @schema ModifyHapgRequest#Label
   */
  readonly label?: string;

  /**
   * @schema ModifyHapgRequest#PartitionSerialList
   */
  readonly partitionSerialList?: string[];

}

/**
 * @schema ModifyHapgResponse
 */
export interface ModifyHapgResponse {
  /**
   * @schema ModifyHapgResponse#HapgArn
   */
  readonly hapgArn?: string;

}

/**
 * @schema ModifyHsmRequest
 */
export interface ModifyHsmRequest {
  /**
   * @schema ModifyHsmRequest#HsmArn
   */
  readonly hsmArn: string;

  /**
   * @schema ModifyHsmRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema ModifyHsmRequest#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema ModifyHsmRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema ModifyHsmRequest#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema ModifyHsmRequest#SyslogIp
   */
  readonly syslogIp?: string;

}

/**
 * @schema ModifyHsmResponse
 */
export interface ModifyHsmResponse {
  /**
   * @schema ModifyHsmResponse#HsmArn
   */
  readonly hsmArn?: string;

}

/**
 * @schema ModifyLunaClientRequest
 */
export interface ModifyLunaClientRequest {
  /**
   * @schema ModifyLunaClientRequest#ClientArn
   */
  readonly clientArn: string;

  /**
   * @schema ModifyLunaClientRequest#Certificate
   */
  readonly certificate: string;

}

/**
 * @schema ModifyLunaClientResponse
 */
export interface ModifyLunaClientResponse {
  /**
   * @schema ModifyLunaClientResponse#ClientArn
   */
  readonly clientArn?: string;

}

/**
 * @schema RemoveTagsFromResourceRequest
 */
export interface RemoveTagsFromResourceRequest {
  /**
   * @schema RemoveTagsFromResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema RemoveTagsFromResourceRequest#TagKeyList
   */
  readonly tagKeyList: string[];

}

/**
 * @schema RemoveTagsFromResourceResponse
 */
export interface RemoveTagsFromResourceResponse {
  /**
   * @schema RemoveTagsFromResourceResponse#Status
   */
  readonly status: string;

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
