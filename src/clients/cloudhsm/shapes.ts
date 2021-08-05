/**
 * @schema CloudHsmAddTagsToResourceRequest
 */
export interface CloudHsmAddTagsToResourceRequest {
  /**
   * @schema CloudHsmAddTagsToResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CloudHsmAddTagsToResourceRequest#TagList
   */
  readonly tagList: CloudHsmTag[];

}

/**
 * @schema CloudHsmAddTagsToResourceResponse
 */
export interface CloudHsmAddTagsToResourceResponse {
  /**
   * @schema CloudHsmAddTagsToResourceResponse#Status
   */
  readonly status: string;

}

/**
 * @schema CloudHsmCreateHapgRequest
 */
export interface CloudHsmCreateHapgRequest {
  /**
   * @schema CloudHsmCreateHapgRequest#Label
   */
  readonly label: string;

}

/**
 * @schema CloudHsmCreateHapgResponse
 */
export interface CloudHsmCreateHapgResponse {
  /**
   * @schema CloudHsmCreateHapgResponse#HapgArn
   */
  readonly hapgArn?: string;

}

/**
 * @schema CloudHsmCreateHsmRequest
 */
export interface CloudHsmCreateHsmRequest {
  /**
   * @schema CloudHsmCreateHsmRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema CloudHsmCreateHsmRequest#SshKey
   */
  readonly sshKey: string;

  /**
   * @schema CloudHsmCreateHsmRequest#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema CloudHsmCreateHsmRequest#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema CloudHsmCreateHsmRequest#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema CloudHsmCreateHsmRequest#SubscriptionType
   */
  readonly subscriptionType: string;

  /**
   * @schema CloudHsmCreateHsmRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CloudHsmCreateHsmRequest#SyslogIp
   */
  readonly syslogIp?: string;

}

/**
 * @schema CloudHsmCreateHsmResponse
 */
export interface CloudHsmCreateHsmResponse {
  /**
   * @schema CloudHsmCreateHsmResponse#HsmArn
   */
  readonly hsmArn?: string;

}

/**
 * @schema CloudHsmCreateLunaClientRequest
 */
export interface CloudHsmCreateLunaClientRequest {
  /**
   * @schema CloudHsmCreateLunaClientRequest#Label
   */
  readonly label?: string;

  /**
   * @schema CloudHsmCreateLunaClientRequest#Certificate
   */
  readonly certificate: string;

}

/**
 * @schema CloudHsmCreateLunaClientResponse
 */
export interface CloudHsmCreateLunaClientResponse {
  /**
   * @schema CloudHsmCreateLunaClientResponse#ClientArn
   */
  readonly clientArn?: string;

}

/**
 * @schema CloudHsmDeleteHapgRequest
 */
export interface CloudHsmDeleteHapgRequest {
  /**
   * @schema CloudHsmDeleteHapgRequest#HapgArn
   */
  readonly hapgArn: string;

}

/**
 * @schema CloudHsmDeleteHapgResponse
 */
export interface CloudHsmDeleteHapgResponse {
  /**
   * @schema CloudHsmDeleteHapgResponse#Status
   */
  readonly status: string;

}

/**
 * @schema CloudHsmDeleteHsmRequest
 */
export interface CloudHsmDeleteHsmRequest {
  /**
   * @schema CloudHsmDeleteHsmRequest#HsmArn
   */
  readonly hsmArn: string;

}

/**
 * @schema CloudHsmDeleteHsmResponse
 */
export interface CloudHsmDeleteHsmResponse {
  /**
   * @schema CloudHsmDeleteHsmResponse#Status
   */
  readonly status: string;

}

/**
 * @schema CloudHsmDeleteLunaClientRequest
 */
export interface CloudHsmDeleteLunaClientRequest {
  /**
   * @schema CloudHsmDeleteLunaClientRequest#ClientArn
   */
  readonly clientArn: string;

}

/**
 * @schema CloudHsmDeleteLunaClientResponse
 */
export interface CloudHsmDeleteLunaClientResponse {
  /**
   * @schema CloudHsmDeleteLunaClientResponse#Status
   */
  readonly status: string;

}

/**
 * @schema CloudHsmDescribeHapgRequest
 */
export interface CloudHsmDescribeHapgRequest {
  /**
   * @schema CloudHsmDescribeHapgRequest#HapgArn
   */
  readonly hapgArn: string;

}

/**
 * @schema CloudHsmDescribeHapgResponse
 */
export interface CloudHsmDescribeHapgResponse {
  /**
   * @schema CloudHsmDescribeHapgResponse#HapgArn
   */
  readonly hapgArn?: string;

  /**
   * @schema CloudHsmDescribeHapgResponse#HapgSerial
   */
  readonly hapgSerial?: string;

  /**
   * @schema CloudHsmDescribeHapgResponse#HsmsLastActionFailed
   */
  readonly hsmsLastActionFailed?: string[];

  /**
   * @schema CloudHsmDescribeHapgResponse#HsmsPendingDeletion
   */
  readonly hsmsPendingDeletion?: string[];

  /**
   * @schema CloudHsmDescribeHapgResponse#HsmsPendingRegistration
   */
  readonly hsmsPendingRegistration?: string[];

  /**
   * @schema CloudHsmDescribeHapgResponse#Label
   */
  readonly label?: string;

  /**
   * @schema CloudHsmDescribeHapgResponse#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema CloudHsmDescribeHapgResponse#PartitionSerialList
   */
  readonly partitionSerialList?: string[];

  /**
   * @schema CloudHsmDescribeHapgResponse#State
   */
  readonly state?: string;

}

/**
 * @schema CloudHsmDescribeHsmRequest
 */
export interface CloudHsmDescribeHsmRequest {
  /**
   * @schema CloudHsmDescribeHsmRequest#HsmArn
   */
  readonly hsmArn?: string;

  /**
   * @schema CloudHsmDescribeHsmRequest#HsmSerialNumber
   */
  readonly hsmSerialNumber?: string;

}

/**
 * @schema CloudHsmDescribeHsmResponse
 */
export interface CloudHsmDescribeHsmResponse {
  /**
   * @schema CloudHsmDescribeHsmResponse#HsmArn
   */
  readonly hsmArn?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#Status
   */
  readonly status?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#EniId
   */
  readonly eniId?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SubscriptionType
   */
  readonly subscriptionType?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SubscriptionStartDate
   */
  readonly subscriptionStartDate?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SubscriptionEndDate
   */
  readonly subscriptionEndDate?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#VendorName
   */
  readonly vendorName?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#HsmType
   */
  readonly hsmType?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SoftwareVersion
   */
  readonly softwareVersion?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SshKeyLastUpdated
   */
  readonly sshKeyLastUpdated?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#ServerCertUri
   */
  readonly serverCertUri?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#ServerCertLastUpdated
   */
  readonly serverCertLastUpdated?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#Partitions
   */
  readonly partitions?: string[];

}

/**
 * @schema CloudHsmDescribeLunaClientRequest
 */
export interface CloudHsmDescribeLunaClientRequest {
  /**
   * @schema CloudHsmDescribeLunaClientRequest#ClientArn
   */
  readonly clientArn?: string;

  /**
   * @schema CloudHsmDescribeLunaClientRequest#CertificateFingerprint
   */
  readonly certificateFingerprint?: string;

}

/**
 * @schema CloudHsmDescribeLunaClientResponse
 */
export interface CloudHsmDescribeLunaClientResponse {
  /**
   * @schema CloudHsmDescribeLunaClientResponse#ClientArn
   */
  readonly clientArn?: string;

  /**
   * @schema CloudHsmDescribeLunaClientResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema CloudHsmDescribeLunaClientResponse#CertificateFingerprint
   */
  readonly certificateFingerprint?: string;

  /**
   * @schema CloudHsmDescribeLunaClientResponse#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema CloudHsmDescribeLunaClientResponse#Label
   */
  readonly label?: string;

}

/**
 * @schema CloudHsmGetConfigRequest
 */
export interface CloudHsmGetConfigRequest {
  /**
   * @schema CloudHsmGetConfigRequest#ClientArn
   */
  readonly clientArn: string;

  /**
   * @schema CloudHsmGetConfigRequest#ClientVersion
   */
  readonly clientVersion: string;

  /**
   * @schema CloudHsmGetConfigRequest#HapgList
   */
  readonly hapgList: string[];

}

/**
 * @schema CloudHsmGetConfigResponse
 */
export interface CloudHsmGetConfigResponse {
  /**
   * @schema CloudHsmGetConfigResponse#ConfigType
   */
  readonly configType?: string;

  /**
   * @schema CloudHsmGetConfigResponse#ConfigFile
   */
  readonly configFile?: string;

  /**
   * @schema CloudHsmGetConfigResponse#ConfigCred
   */
  readonly configCred?: string;

}

/**
 * @schema CloudHsmListAvailableZonesRequest
 */
export interface CloudHsmListAvailableZonesRequest {
}

/**
 * @schema CloudHsmListAvailableZonesResponse
 */
export interface CloudHsmListAvailableZonesResponse {
  /**
   * @schema CloudHsmListAvailableZonesResponse#AZList
   */
  readonly azList?: string[];

}

/**
 * @schema CloudHsmListHapgsRequest
 */
export interface CloudHsmListHapgsRequest {
  /**
   * @schema CloudHsmListHapgsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudHsmListHapgsResponse
 */
export interface CloudHsmListHapgsResponse {
  /**
   * @schema CloudHsmListHapgsResponse#HapgList
   */
  readonly hapgList: string[];

  /**
   * @schema CloudHsmListHapgsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudHsmListHsmsRequest
 */
export interface CloudHsmListHsmsRequest {
  /**
   * @schema CloudHsmListHsmsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudHsmListHsmsResponse
 */
export interface CloudHsmListHsmsResponse {
  /**
   * @schema CloudHsmListHsmsResponse#HsmList
   */
  readonly hsmList?: string[];

  /**
   * @schema CloudHsmListHsmsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudHsmListLunaClientsRequest
 */
export interface CloudHsmListLunaClientsRequest {
  /**
   * @schema CloudHsmListLunaClientsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudHsmListLunaClientsResponse
 */
export interface CloudHsmListLunaClientsResponse {
  /**
   * @schema CloudHsmListLunaClientsResponse#ClientList
   */
  readonly clientList: string[];

  /**
   * @schema CloudHsmListLunaClientsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudHsmListTagsForResourceRequest
 */
export interface CloudHsmListTagsForResourceRequest {
  /**
   * @schema CloudHsmListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema CloudHsmListTagsForResourceResponse
 */
export interface CloudHsmListTagsForResourceResponse {
  /**
   * @schema CloudHsmListTagsForResourceResponse#TagList
   */
  readonly tagList: CloudHsmTag[];

}

/**
 * @schema CloudHsmModifyHapgRequest
 */
export interface CloudHsmModifyHapgRequest {
  /**
   * @schema CloudHsmModifyHapgRequest#HapgArn
   */
  readonly hapgArn: string;

  /**
   * @schema CloudHsmModifyHapgRequest#Label
   */
  readonly label?: string;

  /**
   * @schema CloudHsmModifyHapgRequest#PartitionSerialList
   */
  readonly partitionSerialList?: string[];

}

/**
 * @schema CloudHsmModifyHapgResponse
 */
export interface CloudHsmModifyHapgResponse {
  /**
   * @schema CloudHsmModifyHapgResponse#HapgArn
   */
  readonly hapgArn?: string;

}

/**
 * @schema CloudHsmModifyHsmRequest
 */
export interface CloudHsmModifyHsmRequest {
  /**
   * @schema CloudHsmModifyHsmRequest#HsmArn
   */
  readonly hsmArn: string;

  /**
   * @schema CloudHsmModifyHsmRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CloudHsmModifyHsmRequest#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema CloudHsmModifyHsmRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema CloudHsmModifyHsmRequest#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema CloudHsmModifyHsmRequest#SyslogIp
   */
  readonly syslogIp?: string;

}

/**
 * @schema CloudHsmModifyHsmResponse
 */
export interface CloudHsmModifyHsmResponse {
  /**
   * @schema CloudHsmModifyHsmResponse#HsmArn
   */
  readonly hsmArn?: string;

}

/**
 * @schema CloudHsmModifyLunaClientRequest
 */
export interface CloudHsmModifyLunaClientRequest {
  /**
   * @schema CloudHsmModifyLunaClientRequest#ClientArn
   */
  readonly clientArn: string;

  /**
   * @schema CloudHsmModifyLunaClientRequest#Certificate
   */
  readonly certificate: string;

}

/**
 * @schema CloudHsmModifyLunaClientResponse
 */
export interface CloudHsmModifyLunaClientResponse {
  /**
   * @schema CloudHsmModifyLunaClientResponse#ClientArn
   */
  readonly clientArn?: string;

}

/**
 * @schema CloudHsmRemoveTagsFromResourceRequest
 */
export interface CloudHsmRemoveTagsFromResourceRequest {
  /**
   * @schema CloudHsmRemoveTagsFromResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CloudHsmRemoveTagsFromResourceRequest#TagKeyList
   */
  readonly tagKeyList: string[];

}

/**
 * @schema CloudHsmRemoveTagsFromResourceResponse
 */
export interface CloudHsmRemoveTagsFromResourceResponse {
  /**
   * @schema CloudHsmRemoveTagsFromResourceResponse#Status
   */
  readonly status: string;

}

/**
 * @schema CloudHsmTag
 */
export interface CloudHsmTag {
  /**
   * @schema CloudHsmTag#Key
   */
  readonly key: string;

  /**
   * @schema CloudHsmTag#Value
   */
  readonly value: string;

}
