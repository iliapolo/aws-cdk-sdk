/**
 * @schema EsAcceptInboundCrossClusterSearchConnectionRequest
 */
export interface EsAcceptInboundCrossClusterSearchConnectionRequest {
  /**
   * @schema EsAcceptInboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId: string;

}

/**
 * @schema EsAcceptInboundCrossClusterSearchConnectionResponse
 */
export interface EsAcceptInboundCrossClusterSearchConnectionResponse {
  /**
   * @schema EsAcceptInboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: EsInboundCrossClusterSearchConnection;

}

/**
 * @schema EsAddTagsRequest
 */
export interface EsAddTagsRequest {
  /**
   * @schema EsAddTagsRequest#ARN
   */
  readonly arn: string;

  /**
   * @schema EsAddTagsRequest#TagList
   */
  readonly tagList: EsTag[];

}

/**
 * @schema EsAssociatePackageRequest
 */
export interface EsAssociatePackageRequest {
  /**
   * @schema EsAssociatePackageRequest#PackageID
   */
  readonly packageId: string;

  /**
   * @schema EsAssociatePackageRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema EsAssociatePackageResponse
 */
export interface EsAssociatePackageResponse {
  /**
   * @schema EsAssociatePackageResponse#DomainPackageDetails
   */
  readonly domainPackageDetails?: EsDomainPackageDetails;

}

/**
 * @schema EsCancelElasticsearchServiceSoftwareUpdateRequest
 */
export interface EsCancelElasticsearchServiceSoftwareUpdateRequest {
  /**
   * @schema EsCancelElasticsearchServiceSoftwareUpdateRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema EsCancelElasticsearchServiceSoftwareUpdateResponse
 */
export interface EsCancelElasticsearchServiceSoftwareUpdateResponse {
  /**
   * @schema EsCancelElasticsearchServiceSoftwareUpdateResponse#ServiceSoftwareOptions
   */
  readonly serviceSoftwareOptions?: EsServiceSoftwareOptions;

}

/**
 * @schema EsCreateElasticsearchDomainRequest
 */
export interface EsCreateElasticsearchDomainRequest {
  /**
   * @schema EsCreateElasticsearchDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema EsCreateElasticsearchDomainRequest#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

  /**
   * @schema EsCreateElasticsearchDomainRequest#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: EsElasticsearchClusterConfig;

  /**
   * @schema EsCreateElasticsearchDomainRequest#EBSOptions
   */
  readonly ebsOptions?: EsebsOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema EsCreateElasticsearchDomainRequest#SnapshotOptions
   */
  readonly snapshotOptions?: EsSnapshotOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#VPCOptions
   */
  readonly vpcOptions?: EsvpcOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#CognitoOptions
   */
  readonly cognitoOptions?: EsCognitoOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: EsEncryptionAtRestOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: EsNodeToNodeEncryptionOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#AdvancedOptions
   */
  readonly advancedOptions?: { [key: string]: string };

  /**
   * @schema EsCreateElasticsearchDomainRequest#LogPublishingOptions
   */
  readonly logPublishingOptions?: { [key: string]: EsLogPublishingOption };

  /**
   * @schema EsCreateElasticsearchDomainRequest#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: EsDomainEndpointOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: EsAdvancedSecurityOptionsInput;

}

/**
 * @schema EsCreateElasticsearchDomainResponse
 */
export interface EsCreateElasticsearchDomainResponse {
  /**
   * @schema EsCreateElasticsearchDomainResponse#DomainStatus
   */
  readonly domainStatus?: EsElasticsearchDomainStatus;

}

/**
 * @schema EsCreateOutboundCrossClusterSearchConnectionRequest
 */
export interface EsCreateOutboundCrossClusterSearchConnectionRequest {
  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionRequest#SourceDomainInfo
   */
  readonly sourceDomainInfo: EsDomainInformation;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionRequest#DestinationDomainInfo
   */
  readonly destinationDomainInfo: EsDomainInformation;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionRequest#ConnectionAlias
   */
  readonly connectionAlias: string;

}

/**
 * @schema EsCreateOutboundCrossClusterSearchConnectionResponse
 */
export interface EsCreateOutboundCrossClusterSearchConnectionResponse {
  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionResponse#SourceDomainInfo
   */
  readonly sourceDomainInfo?: EsDomainInformation;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionResponse#DestinationDomainInfo
   */
  readonly destinationDomainInfo?: EsDomainInformation;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionResponse#ConnectionAlias
   */
  readonly connectionAlias?: string;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionResponse#ConnectionStatus
   */
  readonly connectionStatus?: EsOutboundCrossClusterSearchConnectionStatus;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

}

/**
 * @schema EsCreatePackageRequest
 */
export interface EsCreatePackageRequest {
  /**
   * @schema EsCreatePackageRequest#PackageName
   */
  readonly packageName: string;

  /**
   * @schema EsCreatePackageRequest#PackageType
   */
  readonly packageType: string;

  /**
   * @schema EsCreatePackageRequest#PackageDescription
   */
  readonly packageDescription?: string;

  /**
   * @schema EsCreatePackageRequest#PackageSource
   */
  readonly packageSource: EsPackageSource;

}

/**
 * @schema EsCreatePackageResponse
 */
export interface EsCreatePackageResponse {
  /**
   * @schema EsCreatePackageResponse#PackageDetails
   */
  readonly packageDetails?: EsPackageDetails;

}

/**
 * @schema EsDeleteElasticsearchDomainRequest
 */
export interface EsDeleteElasticsearchDomainRequest {
  /**
   * @schema EsDeleteElasticsearchDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema EsDeleteElasticsearchDomainResponse
 */
export interface EsDeleteElasticsearchDomainResponse {
  /**
   * @schema EsDeleteElasticsearchDomainResponse#DomainStatus
   */
  readonly domainStatus?: EsElasticsearchDomainStatus;

}

/**
 * @schema EsDeleteInboundCrossClusterSearchConnectionRequest
 */
export interface EsDeleteInboundCrossClusterSearchConnectionRequest {
  /**
   * @schema EsDeleteInboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId: string;

}

/**
 * @schema EsDeleteInboundCrossClusterSearchConnectionResponse
 */
export interface EsDeleteInboundCrossClusterSearchConnectionResponse {
  /**
   * @schema EsDeleteInboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: EsInboundCrossClusterSearchConnection;

}

/**
 * @schema EsDeleteOutboundCrossClusterSearchConnectionRequest
 */
export interface EsDeleteOutboundCrossClusterSearchConnectionRequest {
  /**
   * @schema EsDeleteOutboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId: string;

}

/**
 * @schema EsDeleteOutboundCrossClusterSearchConnectionResponse
 */
export interface EsDeleteOutboundCrossClusterSearchConnectionResponse {
  /**
   * @schema EsDeleteOutboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: EsOutboundCrossClusterSearchConnection;

}

/**
 * @schema EsDeletePackageRequest
 */
export interface EsDeletePackageRequest {
  /**
   * @schema EsDeletePackageRequest#PackageID
   */
  readonly packageId: string;

}

/**
 * @schema EsDeletePackageResponse
 */
export interface EsDeletePackageResponse {
  /**
   * @schema EsDeletePackageResponse#PackageDetails
   */
  readonly packageDetails?: EsPackageDetails;

}

/**
 * @schema EsDescribeElasticsearchDomainRequest
 */
export interface EsDescribeElasticsearchDomainRequest {
  /**
   * @schema EsDescribeElasticsearchDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema EsDescribeElasticsearchDomainResponse
 */
export interface EsDescribeElasticsearchDomainResponse {
  /**
   * @schema EsDescribeElasticsearchDomainResponse#DomainStatus
   */
  readonly domainStatus: EsElasticsearchDomainStatus;

}

/**
 * @schema EsDescribeElasticsearchDomainConfigRequest
 */
export interface EsDescribeElasticsearchDomainConfigRequest {
  /**
   * @schema EsDescribeElasticsearchDomainConfigRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema EsDescribeElasticsearchDomainConfigResponse
 */
export interface EsDescribeElasticsearchDomainConfigResponse {
  /**
   * @schema EsDescribeElasticsearchDomainConfigResponse#DomainConfig
   */
  readonly domainConfig: EsElasticsearchDomainConfig;

}

/**
 * @schema EsDescribeElasticsearchDomainsRequest
 */
export interface EsDescribeElasticsearchDomainsRequest {
  /**
   * @schema EsDescribeElasticsearchDomainsRequest#DomainNames
   */
  readonly domainNames: string[];

}

/**
 * @schema EsDescribeElasticsearchDomainsResponse
 */
export interface EsDescribeElasticsearchDomainsResponse {
  /**
   * @schema EsDescribeElasticsearchDomainsResponse#DomainStatusList
   */
  readonly domainStatusList: EsElasticsearchDomainStatus[];

}

/**
 * @schema EsDescribeElasticsearchInstanceTypeLimitsRequest
 */
export interface EsDescribeElasticsearchInstanceTypeLimitsRequest {
  /**
   * @schema EsDescribeElasticsearchInstanceTypeLimitsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsDescribeElasticsearchInstanceTypeLimitsRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema EsDescribeElasticsearchInstanceTypeLimitsRequest#ElasticsearchVersion
   */
  readonly elasticsearchVersion: string;

}

/**
 * @schema EsDescribeElasticsearchInstanceTypeLimitsResponse
 */
export interface EsDescribeElasticsearchInstanceTypeLimitsResponse {
  /**
   * @schema EsDescribeElasticsearchInstanceTypeLimitsResponse#LimitsByRole
   */
  readonly limitsByRole?: { [key: string]: EsLimits };

}

/**
 * @schema EsDescribeInboundCrossClusterSearchConnectionsRequest
 */
export interface EsDescribeInboundCrossClusterSearchConnectionsRequest {
  /**
   * @schema EsDescribeInboundCrossClusterSearchConnectionsRequest#Filters
   */
  readonly filters?: EsFilter[];

  /**
   * @schema EsDescribeInboundCrossClusterSearchConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribeInboundCrossClusterSearchConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsDescribeInboundCrossClusterSearchConnectionsResponse
 */
export interface EsDescribeInboundCrossClusterSearchConnectionsResponse {
  /**
   * @schema EsDescribeInboundCrossClusterSearchConnectionsResponse#CrossClusterSearchConnections
   */
  readonly crossClusterSearchConnections?: EsInboundCrossClusterSearchConnection[];

  /**
   * @schema EsDescribeInboundCrossClusterSearchConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsDescribeOutboundCrossClusterSearchConnectionsRequest
 */
export interface EsDescribeOutboundCrossClusterSearchConnectionsRequest {
  /**
   * @schema EsDescribeOutboundCrossClusterSearchConnectionsRequest#Filters
   */
  readonly filters?: EsFilter[];

  /**
   * @schema EsDescribeOutboundCrossClusterSearchConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribeOutboundCrossClusterSearchConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsDescribeOutboundCrossClusterSearchConnectionsResponse
 */
export interface EsDescribeOutboundCrossClusterSearchConnectionsResponse {
  /**
   * @schema EsDescribeOutboundCrossClusterSearchConnectionsResponse#CrossClusterSearchConnections
   */
  readonly crossClusterSearchConnections?: EsOutboundCrossClusterSearchConnection[];

  /**
   * @schema EsDescribeOutboundCrossClusterSearchConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsDescribePackagesRequest
 */
export interface EsDescribePackagesRequest {
  /**
   * @schema EsDescribePackagesRequest#Filters
   */
  readonly filters?: EsDescribePackagesFilter[];

  /**
   * @schema EsDescribePackagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribePackagesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsDescribePackagesResponse
 */
export interface EsDescribePackagesResponse {
  /**
   * @schema EsDescribePackagesResponse#PackageDetailsList
   */
  readonly packageDetailsList?: EsPackageDetails[];

  /**
   * @schema EsDescribePackagesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsDescribeReservedElasticsearchInstanceOfferingsRequest
 */
export interface EsDescribeReservedElasticsearchInstanceOfferingsRequest {
  /**
   * @schema EsDescribeReservedElasticsearchInstanceOfferingsRequest#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId?: string;

  /**
   * @schema EsDescribeReservedElasticsearchInstanceOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribeReservedElasticsearchInstanceOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsDescribeReservedElasticsearchInstanceOfferingsResponse
 */
export interface EsDescribeReservedElasticsearchInstanceOfferingsResponse {
  /**
   * @schema EsDescribeReservedElasticsearchInstanceOfferingsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EsDescribeReservedElasticsearchInstanceOfferingsResponse#ReservedElasticsearchInstanceOfferings
   */
  readonly reservedElasticsearchInstanceOfferings?: EsReservedElasticsearchInstanceOffering[];

}

/**
 * @schema EsDescribeReservedElasticsearchInstancesRequest
 */
export interface EsDescribeReservedElasticsearchInstancesRequest {
  /**
   * @schema EsDescribeReservedElasticsearchInstancesRequest#ReservedElasticsearchInstanceId
   */
  readonly reservedElasticsearchInstanceId?: string;

  /**
   * @schema EsDescribeReservedElasticsearchInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribeReservedElasticsearchInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsDescribeReservedElasticsearchInstancesResponse
 */
export interface EsDescribeReservedElasticsearchInstancesResponse {
  /**
   * @schema EsDescribeReservedElasticsearchInstancesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EsDescribeReservedElasticsearchInstancesResponse#ReservedElasticsearchInstances
   */
  readonly reservedElasticsearchInstances?: EsReservedElasticsearchInstance[];

}

/**
 * @schema EsDissociatePackageRequest
 */
export interface EsDissociatePackageRequest {
  /**
   * @schema EsDissociatePackageRequest#PackageID
   */
  readonly packageId: string;

  /**
   * @schema EsDissociatePackageRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema EsDissociatePackageResponse
 */
export interface EsDissociatePackageResponse {
  /**
   * @schema EsDissociatePackageResponse#DomainPackageDetails
   */
  readonly domainPackageDetails?: EsDomainPackageDetails;

}

/**
 * @schema EsGetCompatibleElasticsearchVersionsRequest
 */
export interface EsGetCompatibleElasticsearchVersionsRequest {
  /**
   * @schema EsGetCompatibleElasticsearchVersionsRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * @schema EsGetCompatibleElasticsearchVersionsResponse
 */
export interface EsGetCompatibleElasticsearchVersionsResponse {
  /**
   * @schema EsGetCompatibleElasticsearchVersionsResponse#CompatibleElasticsearchVersions
   */
  readonly compatibleElasticsearchVersions?: EsCompatibleVersionsMap[];

}

/**
 * @schema EsGetPackageVersionHistoryRequest
 */
export interface EsGetPackageVersionHistoryRequest {
  /**
   * @schema EsGetPackageVersionHistoryRequest#PackageID
   */
  readonly packageId: string;

  /**
   * @schema EsGetPackageVersionHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsGetPackageVersionHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsGetPackageVersionHistoryResponse
 */
export interface EsGetPackageVersionHistoryResponse {
  /**
   * @schema EsGetPackageVersionHistoryResponse#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsGetPackageVersionHistoryResponse#PackageVersionHistoryList
   */
  readonly packageVersionHistoryList?: EsPackageVersionHistory[];

  /**
   * @schema EsGetPackageVersionHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsGetUpgradeHistoryRequest
 */
export interface EsGetUpgradeHistoryRequest {
  /**
   * @schema EsGetUpgradeHistoryRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema EsGetUpgradeHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsGetUpgradeHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsGetUpgradeHistoryResponse
 */
export interface EsGetUpgradeHistoryResponse {
  /**
   * @schema EsGetUpgradeHistoryResponse#UpgradeHistories
   */
  readonly upgradeHistories?: EsUpgradeHistory[];

  /**
   * @schema EsGetUpgradeHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsGetUpgradeStatusRequest
 */
export interface EsGetUpgradeStatusRequest {
  /**
   * @schema EsGetUpgradeStatusRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema EsGetUpgradeStatusResponse
 */
export interface EsGetUpgradeStatusResponse {
  /**
   * @schema EsGetUpgradeStatusResponse#UpgradeStep
   */
  readonly upgradeStep?: string;

  /**
   * @schema EsGetUpgradeStatusResponse#StepStatus
   */
  readonly stepStatus?: string;

  /**
   * @schema EsGetUpgradeStatusResponse#UpgradeName
   */
  readonly upgradeName?: string;

}

/**
 * @schema EsListDomainNamesResponse
 */
export interface EsListDomainNamesResponse {
  /**
   * @schema EsListDomainNamesResponse#DomainNames
   */
  readonly domainNames?: EsDomainInfo[];

}

/**
 * @schema EsListDomainsForPackageRequest
 */
export interface EsListDomainsForPackageRequest {
  /**
   * @schema EsListDomainsForPackageRequest#PackageID
   */
  readonly packageId: string;

  /**
   * @schema EsListDomainsForPackageRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsListDomainsForPackageRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsListDomainsForPackageResponse
 */
export interface EsListDomainsForPackageResponse {
  /**
   * @schema EsListDomainsForPackageResponse#DomainPackageDetailsList
   */
  readonly domainPackageDetailsList?: EsDomainPackageDetails[];

  /**
   * @schema EsListDomainsForPackageResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsListElasticsearchInstanceTypesRequest
 */
export interface EsListElasticsearchInstanceTypesRequest {
  /**
   * @schema EsListElasticsearchInstanceTypesRequest#ElasticsearchVersion
   */
  readonly elasticsearchVersion: string;

  /**
   * @schema EsListElasticsearchInstanceTypesRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsListElasticsearchInstanceTypesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsListElasticsearchInstanceTypesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsListElasticsearchInstanceTypesResponse
 */
export interface EsListElasticsearchInstanceTypesResponse {
  /**
   * @schema EsListElasticsearchInstanceTypesResponse#ElasticsearchInstanceTypes
   */
  readonly elasticsearchInstanceTypes?: string[];

  /**
   * @schema EsListElasticsearchInstanceTypesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsListElasticsearchVersionsRequest
 */
export interface EsListElasticsearchVersionsRequest {
  /**
   * @schema EsListElasticsearchVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsListElasticsearchVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsListElasticsearchVersionsResponse
 */
export interface EsListElasticsearchVersionsResponse {
  /**
   * @schema EsListElasticsearchVersionsResponse#ElasticsearchVersions
   */
  readonly elasticsearchVersions?: string[];

  /**
   * @schema EsListElasticsearchVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsListPackagesForDomainRequest
 */
export interface EsListPackagesForDomainRequest {
  /**
   * @schema EsListPackagesForDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema EsListPackagesForDomainRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsListPackagesForDomainRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsListPackagesForDomainResponse
 */
export interface EsListPackagesForDomainResponse {
  /**
   * @schema EsListPackagesForDomainResponse#DomainPackageDetailsList
   */
  readonly domainPackageDetailsList?: EsDomainPackageDetails[];

  /**
   * @schema EsListPackagesForDomainResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EsListTagsRequest
 */
export interface EsListTagsRequest {
  /**
   * @schema EsListTagsRequest#ARN
   */
  readonly arn: string;

}

/**
 * @schema EsListTagsResponse
 */
export interface EsListTagsResponse {
  /**
   * @schema EsListTagsResponse#TagList
   */
  readonly tagList?: EsTag[];

}

/**
 * @schema EsPurchaseReservedElasticsearchInstanceOfferingRequest
 */
export interface EsPurchaseReservedElasticsearchInstanceOfferingRequest {
  /**
   * @schema EsPurchaseReservedElasticsearchInstanceOfferingRequest#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId: string;

  /**
   * @schema EsPurchaseReservedElasticsearchInstanceOfferingRequest#ReservationName
   */
  readonly reservationName: string;

  /**
   * @schema EsPurchaseReservedElasticsearchInstanceOfferingRequest#InstanceCount
   */
  readonly instanceCount?: number;

}

/**
 * @schema EsPurchaseReservedElasticsearchInstanceOfferingResponse
 */
export interface EsPurchaseReservedElasticsearchInstanceOfferingResponse {
  /**
   * @schema EsPurchaseReservedElasticsearchInstanceOfferingResponse#ReservedElasticsearchInstanceId
   */
  readonly reservedElasticsearchInstanceId?: string;

  /**
   * @schema EsPurchaseReservedElasticsearchInstanceOfferingResponse#ReservationName
   */
  readonly reservationName?: string;

}

/**
 * @schema EsRejectInboundCrossClusterSearchConnectionRequest
 */
export interface EsRejectInboundCrossClusterSearchConnectionRequest {
  /**
   * @schema EsRejectInboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId: string;

}

/**
 * @schema EsRejectInboundCrossClusterSearchConnectionResponse
 */
export interface EsRejectInboundCrossClusterSearchConnectionResponse {
  /**
   * @schema EsRejectInboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: EsInboundCrossClusterSearchConnection;

}

/**
 * @schema EsRemoveTagsRequest
 */
export interface EsRemoveTagsRequest {
  /**
   * @schema EsRemoveTagsRequest#ARN
   */
  readonly arn: string;

  /**
   * @schema EsRemoveTagsRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema EsStartElasticsearchServiceSoftwareUpdateRequest
 */
export interface EsStartElasticsearchServiceSoftwareUpdateRequest {
  /**
   * @schema EsStartElasticsearchServiceSoftwareUpdateRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema EsStartElasticsearchServiceSoftwareUpdateResponse
 */
export interface EsStartElasticsearchServiceSoftwareUpdateResponse {
  /**
   * @schema EsStartElasticsearchServiceSoftwareUpdateResponse#ServiceSoftwareOptions
   */
  readonly serviceSoftwareOptions?: EsServiceSoftwareOptions;

}

/**
 * @schema EsUpdateElasticsearchDomainConfigRequest
 */
export interface EsUpdateElasticsearchDomainConfigRequest {
  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: EsElasticsearchClusterConfig;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#EBSOptions
   */
  readonly ebsOptions?: EsebsOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#SnapshotOptions
   */
  readonly snapshotOptions?: EsSnapshotOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#VPCOptions
   */
  readonly vpcOptions?: EsvpcOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#CognitoOptions
   */
  readonly cognitoOptions?: EsCognitoOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#AdvancedOptions
   */
  readonly advancedOptions?: { [key: string]: string };

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#LogPublishingOptions
   */
  readonly logPublishingOptions?: { [key: string]: EsLogPublishingOption };

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: EsDomainEndpointOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: EsAdvancedSecurityOptionsInput;

}

/**
 * @schema EsUpdateElasticsearchDomainConfigResponse
 */
export interface EsUpdateElasticsearchDomainConfigResponse {
  /**
   * @schema EsUpdateElasticsearchDomainConfigResponse#DomainConfig
   */
  readonly domainConfig: EsElasticsearchDomainConfig;

}

/**
 * @schema EsUpdatePackageRequest
 */
export interface EsUpdatePackageRequest {
  /**
   * @schema EsUpdatePackageRequest#PackageID
   */
  readonly packageId: string;

  /**
   * @schema EsUpdatePackageRequest#PackageSource
   */
  readonly packageSource: EsPackageSource;

  /**
   * @schema EsUpdatePackageRequest#PackageDescription
   */
  readonly packageDescription?: string;

  /**
   * @schema EsUpdatePackageRequest#CommitMessage
   */
  readonly commitMessage?: string;

}

/**
 * @schema EsUpdatePackageResponse
 */
export interface EsUpdatePackageResponse {
  /**
   * @schema EsUpdatePackageResponse#PackageDetails
   */
  readonly packageDetails?: EsPackageDetails;

}

/**
 * @schema EsUpgradeElasticsearchDomainRequest
 */
export interface EsUpgradeElasticsearchDomainRequest {
  /**
   * @schema EsUpgradeElasticsearchDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema EsUpgradeElasticsearchDomainRequest#TargetVersion
   */
  readonly targetVersion: string;

  /**
   * @schema EsUpgradeElasticsearchDomainRequest#PerformCheckOnly
   */
  readonly performCheckOnly?: boolean;

}

/**
 * @schema EsUpgradeElasticsearchDomainResponse
 */
export interface EsUpgradeElasticsearchDomainResponse {
  /**
   * @schema EsUpgradeElasticsearchDomainResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsUpgradeElasticsearchDomainResponse#TargetVersion
   */
  readonly targetVersion?: string;

  /**
   * @schema EsUpgradeElasticsearchDomainResponse#PerformCheckOnly
   */
  readonly performCheckOnly?: boolean;

}

/**
 * @schema EsInboundCrossClusterSearchConnection
 */
export interface EsInboundCrossClusterSearchConnection {
  /**
   * @schema EsInboundCrossClusterSearchConnection#SourceDomainInfo
   */
  readonly sourceDomainInfo?: EsDomainInformation;

  /**
   * @schema EsInboundCrossClusterSearchConnection#DestinationDomainInfo
   */
  readonly destinationDomainInfo?: EsDomainInformation;

  /**
   * @schema EsInboundCrossClusterSearchConnection#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

  /**
   * @schema EsInboundCrossClusterSearchConnection#ConnectionStatus
   */
  readonly connectionStatus?: EsInboundCrossClusterSearchConnectionStatus;

}

/**
 * @schema EsTag
 */
export interface EsTag {
  /**
   * @schema EsTag#Key
   */
  readonly key: string;

  /**
   * @schema EsTag#Value
   */
  readonly value: string;

}

/**
 * @schema EsDomainPackageDetails
 */
export interface EsDomainPackageDetails {
  /**
   * @schema EsDomainPackageDetails#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsDomainPackageDetails#PackageName
   */
  readonly packageName?: string;

  /**
   * @schema EsDomainPackageDetails#PackageType
   */
  readonly packageType?: string;

  /**
   * @schema EsDomainPackageDetails#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema EsDomainPackageDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsDomainPackageDetails#DomainPackageStatus
   */
  readonly domainPackageStatus?: string;

  /**
   * @schema EsDomainPackageDetails#PackageVersion
   */
  readonly packageVersion?: string;

  /**
   * @schema EsDomainPackageDetails#ReferencePath
   */
  readonly referencePath?: string;

  /**
   * @schema EsDomainPackageDetails#ErrorDetails
   */
  readonly errorDetails?: EsErrorDetails;

}

/**
 * @schema EsServiceSoftwareOptions
 */
export interface EsServiceSoftwareOptions {
  /**
   * @schema EsServiceSoftwareOptions#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema EsServiceSoftwareOptions#NewVersion
   */
  readonly newVersion?: string;

  /**
   * @schema EsServiceSoftwareOptions#UpdateAvailable
   */
  readonly updateAvailable?: boolean;

  /**
   * @schema EsServiceSoftwareOptions#Cancellable
   */
  readonly cancellable?: boolean;

  /**
   * @schema EsServiceSoftwareOptions#UpdateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema EsServiceSoftwareOptions#Description
   */
  readonly description?: string;

  /**
   * @schema EsServiceSoftwareOptions#AutomatedUpdateDate
   */
  readonly automatedUpdateDate?: string;

  /**
   * @schema EsServiceSoftwareOptions#OptionalDeployment
   */
  readonly optionalDeployment?: boolean;

}

/**
 * @schema EsElasticsearchClusterConfig
 */
export interface EsElasticsearchClusterConfig {
  /**
   * @schema EsElasticsearchClusterConfig#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema EsElasticsearchClusterConfig#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema EsElasticsearchClusterConfig#DedicatedMasterEnabled
   */
  readonly dedicatedMasterEnabled?: boolean;

  /**
   * @schema EsElasticsearchClusterConfig#ZoneAwarenessEnabled
   */
  readonly zoneAwarenessEnabled?: boolean;

  /**
   * @schema EsElasticsearchClusterConfig#ZoneAwarenessConfig
   */
  readonly zoneAwarenessConfig?: EsZoneAwarenessConfig;

  /**
   * @schema EsElasticsearchClusterConfig#DedicatedMasterType
   */
  readonly dedicatedMasterType?: string;

  /**
   * @schema EsElasticsearchClusterConfig#DedicatedMasterCount
   */
  readonly dedicatedMasterCount?: number;

  /**
   * @schema EsElasticsearchClusterConfig#WarmEnabled
   */
  readonly warmEnabled?: boolean;

  /**
   * @schema EsElasticsearchClusterConfig#WarmType
   */
  readonly warmType?: string;

  /**
   * @schema EsElasticsearchClusterConfig#WarmCount
   */
  readonly warmCount?: number;

}

/**
 * @schema EsebsOptions
 */
export interface EsebsOptions {
  /**
   * @schema EsebsOptions#EBSEnabled
   */
  readonly ebsEnabled?: boolean;

  /**
   * @schema EsebsOptions#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema EsebsOptions#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema EsebsOptions#Iops
   */
  readonly iops?: number;

}

/**
 * @schema EsSnapshotOptions
 */
export interface EsSnapshotOptions {
  /**
   * @schema EsSnapshotOptions#AutomatedSnapshotStartHour
   */
  readonly automatedSnapshotStartHour?: number;

}

/**
 * @schema EsvpcOptions
 */
export interface EsvpcOptions {
  /**
   * @schema EsvpcOptions#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema EsvpcOptions#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema EsCognitoOptions
 */
export interface EsCognitoOptions {
  /**
   * @schema EsCognitoOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EsCognitoOptions#UserPoolId
   */
  readonly userPoolId?: string;

  /**
   * @schema EsCognitoOptions#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema EsCognitoOptions#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema EsEncryptionAtRestOptions
 */
export interface EsEncryptionAtRestOptions {
  /**
   * @schema EsEncryptionAtRestOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EsEncryptionAtRestOptions#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema EsNodeToNodeEncryptionOptions
 */
export interface EsNodeToNodeEncryptionOptions {
  /**
   * @schema EsNodeToNodeEncryptionOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema EsLogPublishingOption
 */
export interface EsLogPublishingOption {
  /**
   * @schema EsLogPublishingOption#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema EsLogPublishingOption#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema EsDomainEndpointOptions
 */
export interface EsDomainEndpointOptions {
  /**
   * @schema EsDomainEndpointOptions#EnforceHTTPS
   */
  readonly enforceHttps?: boolean;

  /**
   * @schema EsDomainEndpointOptions#TLSSecurityPolicy
   */
  readonly tlsSecurityPolicy?: string;

  /**
   * @schema EsDomainEndpointOptions#CustomEndpointEnabled
   */
  readonly customEndpointEnabled?: boolean;

  /**
   * @schema EsDomainEndpointOptions#CustomEndpoint
   */
  readonly customEndpoint?: string;

  /**
   * @schema EsDomainEndpointOptions#CustomEndpointCertificateArn
   */
  readonly customEndpointCertificateArn?: string;

}

/**
 * @schema EsAdvancedSecurityOptionsInput
 */
export interface EsAdvancedSecurityOptionsInput {
  /**
   * @schema EsAdvancedSecurityOptionsInput#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EsAdvancedSecurityOptionsInput#InternalUserDatabaseEnabled
   */
  readonly internalUserDatabaseEnabled?: boolean;

  /**
   * @schema EsAdvancedSecurityOptionsInput#MasterUserOptions
   */
  readonly masterUserOptions?: EsMasterUserOptions;

  /**
   * @schema EsAdvancedSecurityOptionsInput#SAMLOptions
   */
  readonly samlOptions?: EssamlOptionsInput;

}

/**
 * @schema EsElasticsearchDomainStatus
 */
export interface EsElasticsearchDomainStatus {
  /**
   * @schema EsElasticsearchDomainStatus#DomainId
   */
  readonly domainId: string;

  /**
   * @schema EsElasticsearchDomainStatus#DomainName
   */
  readonly domainName: string;

  /**
   * @schema EsElasticsearchDomainStatus#ARN
   */
  readonly arn: string;

  /**
   * @schema EsElasticsearchDomainStatus#Created
   */
  readonly created?: boolean;

  /**
   * @schema EsElasticsearchDomainStatus#Deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema EsElasticsearchDomainStatus#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema EsElasticsearchDomainStatus#Endpoints
   */
  readonly endpoints?: { [key: string]: string };

  /**
   * @schema EsElasticsearchDomainStatus#Processing
   */
  readonly processing?: boolean;

  /**
   * @schema EsElasticsearchDomainStatus#UpgradeProcessing
   */
  readonly upgradeProcessing?: boolean;

  /**
   * @schema EsElasticsearchDomainStatus#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

  /**
   * @schema EsElasticsearchDomainStatus#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig: EsElasticsearchClusterConfig;

  /**
   * @schema EsElasticsearchDomainStatus#EBSOptions
   */
  readonly ebsOptions?: EsebsOptions;

  /**
   * @schema EsElasticsearchDomainStatus#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema EsElasticsearchDomainStatus#SnapshotOptions
   */
  readonly snapshotOptions?: EsSnapshotOptions;

  /**
   * @schema EsElasticsearchDomainStatus#VPCOptions
   */
  readonly vpcOptions?: EsvpcDerivedInfo;

  /**
   * @schema EsElasticsearchDomainStatus#CognitoOptions
   */
  readonly cognitoOptions?: EsCognitoOptions;

  /**
   * @schema EsElasticsearchDomainStatus#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: EsEncryptionAtRestOptions;

  /**
   * @schema EsElasticsearchDomainStatus#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: EsNodeToNodeEncryptionOptions;

  /**
   * @schema EsElasticsearchDomainStatus#AdvancedOptions
   */
  readonly advancedOptions?: { [key: string]: string };

  /**
   * @schema EsElasticsearchDomainStatus#LogPublishingOptions
   */
  readonly logPublishingOptions?: { [key: string]: EsLogPublishingOption };

  /**
   * @schema EsElasticsearchDomainStatus#ServiceSoftwareOptions
   */
  readonly serviceSoftwareOptions?: EsServiceSoftwareOptions;

  /**
   * @schema EsElasticsearchDomainStatus#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: EsDomainEndpointOptions;

  /**
   * @schema EsElasticsearchDomainStatus#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: EsAdvancedSecurityOptions;

}

/**
 * @schema EsDomainInformation
 */
export interface EsDomainInformation {
  /**
   * @schema EsDomainInformation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema EsDomainInformation#DomainName
   */
  readonly domainName: string;

  /**
   * @schema EsDomainInformation#Region
   */
  readonly region?: string;

}

/**
 * @schema EsOutboundCrossClusterSearchConnectionStatus
 */
export interface EsOutboundCrossClusterSearchConnectionStatus {
  /**
   * @schema EsOutboundCrossClusterSearchConnectionStatus#StatusCode
   */
  readonly statusCode?: string;

  /**
   * @schema EsOutboundCrossClusterSearchConnectionStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema EsPackageSource
 */
export interface EsPackageSource {
  /**
   * @schema EsPackageSource#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema EsPackageSource#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema EsPackageDetails
 */
export interface EsPackageDetails {
  /**
   * @schema EsPackageDetails#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsPackageDetails#PackageName
   */
  readonly packageName?: string;

  /**
   * @schema EsPackageDetails#PackageType
   */
  readonly packageType?: string;

  /**
   * @schema EsPackageDetails#PackageDescription
   */
  readonly packageDescription?: string;

  /**
   * @schema EsPackageDetails#PackageStatus
   */
  readonly packageStatus?: string;

  /**
   * @schema EsPackageDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema EsPackageDetails#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema EsPackageDetails#AvailablePackageVersion
   */
  readonly availablePackageVersion?: string;

  /**
   * @schema EsPackageDetails#ErrorDetails
   */
  readonly errorDetails?: EsErrorDetails;

}

/**
 * @schema EsOutboundCrossClusterSearchConnection
 */
export interface EsOutboundCrossClusterSearchConnection {
  /**
   * @schema EsOutboundCrossClusterSearchConnection#SourceDomainInfo
   */
  readonly sourceDomainInfo?: EsDomainInformation;

  /**
   * @schema EsOutboundCrossClusterSearchConnection#DestinationDomainInfo
   */
  readonly destinationDomainInfo?: EsDomainInformation;

  /**
   * @schema EsOutboundCrossClusterSearchConnection#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

  /**
   * @schema EsOutboundCrossClusterSearchConnection#ConnectionAlias
   */
  readonly connectionAlias?: string;

  /**
   * @schema EsOutboundCrossClusterSearchConnection#ConnectionStatus
   */
  readonly connectionStatus?: EsOutboundCrossClusterSearchConnectionStatus;

}

/**
 * @schema EsElasticsearchDomainConfig
 */
export interface EsElasticsearchDomainConfig {
  /**
   * @schema EsElasticsearchDomainConfig#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: EsElasticsearchVersionStatus;

  /**
   * @schema EsElasticsearchDomainConfig#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: EsElasticsearchClusterConfigStatus;

  /**
   * @schema EsElasticsearchDomainConfig#EBSOptions
   */
  readonly ebsOptions?: EsebsOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#AccessPolicies
   */
  readonly accessPolicies?: EsAccessPoliciesStatus;

  /**
   * @schema EsElasticsearchDomainConfig#SnapshotOptions
   */
  readonly snapshotOptions?: EsSnapshotOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#VPCOptions
   */
  readonly vpcOptions?: EsvpcDerivedInfoStatus;

  /**
   * @schema EsElasticsearchDomainConfig#CognitoOptions
   */
  readonly cognitoOptions?: EsCognitoOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: EsEncryptionAtRestOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: EsNodeToNodeEncryptionOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#AdvancedOptions
   */
  readonly advancedOptions?: EsAdvancedOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#LogPublishingOptions
   */
  readonly logPublishingOptions?: EsLogPublishingOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: EsDomainEndpointOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: EsAdvancedSecurityOptionsStatus;

}

/**
 * @schema EsLimits
 */
export interface EsLimits {
  /**
   * @schema EsLimits#StorageTypes
   */
  readonly storageTypes?: EsStorageType[];

  /**
   * @schema EsLimits#InstanceLimits
   */
  readonly instanceLimits?: EsInstanceLimits;

  /**
   * @schema EsLimits#AdditionalLimits
   */
  readonly additionalLimits?: EsAdditionalLimit[];

}

/**
 * @schema EsFilter
 */
export interface EsFilter {
  /**
   * @schema EsFilter#Name
   */
  readonly name?: string;

  /**
   * @schema EsFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema EsDescribePackagesFilter
 */
export interface EsDescribePackagesFilter {
  /**
   * @schema EsDescribePackagesFilter#Name
   */
  readonly name?: string;

  /**
   * @schema EsDescribePackagesFilter#Value
   */
  readonly value?: string[];

}

/**
 * @schema EsReservedElasticsearchInstanceOffering
 */
export interface EsReservedElasticsearchInstanceOffering {
  /**
   * @schema EsReservedElasticsearchInstanceOffering#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId?: string;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#ElasticsearchInstanceType
   */
  readonly elasticsearchInstanceType?: string;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#RecurringCharges
   */
  readonly recurringCharges?: EsRecurringCharge[];

}

/**
 * @schema EsReservedElasticsearchInstance
 */
export interface EsReservedElasticsearchInstance {
  /**
   * @schema EsReservedElasticsearchInstance#ReservationName
   */
  readonly reservationName?: string;

  /**
   * @schema EsReservedElasticsearchInstance#ReservedElasticsearchInstanceId
   */
  readonly reservedElasticsearchInstanceId?: string;

  /**
   * @schema EsReservedElasticsearchInstance#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId?: string;

  /**
   * @schema EsReservedElasticsearchInstance#ElasticsearchInstanceType
   */
  readonly elasticsearchInstanceType?: string;

  /**
   * @schema EsReservedElasticsearchInstance#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema EsReservedElasticsearchInstance#Duration
   */
  readonly duration?: number;

  /**
   * @schema EsReservedElasticsearchInstance#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema EsReservedElasticsearchInstance#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema EsReservedElasticsearchInstance#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema EsReservedElasticsearchInstance#ElasticsearchInstanceCount
   */
  readonly elasticsearchInstanceCount?: number;

  /**
   * @schema EsReservedElasticsearchInstance#State
   */
  readonly state?: string;

  /**
   * @schema EsReservedElasticsearchInstance#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema EsReservedElasticsearchInstance#RecurringCharges
   */
  readonly recurringCharges?: EsRecurringCharge[];

}

/**
 * @schema EsCompatibleVersionsMap
 */
export interface EsCompatibleVersionsMap {
  /**
   * @schema EsCompatibleVersionsMap#SourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema EsCompatibleVersionsMap#TargetVersions
   */
  readonly targetVersions?: string[];

}

/**
 * @schema EsPackageVersionHistory
 */
export interface EsPackageVersionHistory {
  /**
   * @schema EsPackageVersionHistory#PackageVersion
   */
  readonly packageVersion?: string;

  /**
   * @schema EsPackageVersionHistory#CommitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema EsPackageVersionHistory#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * @schema EsUpgradeHistory
 */
export interface EsUpgradeHistory {
  /**
   * @schema EsUpgradeHistory#UpgradeName
   */
  readonly upgradeName?: string;

  /**
   * @schema EsUpgradeHistory#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema EsUpgradeHistory#UpgradeStatus
   */
  readonly upgradeStatus?: string;

  /**
   * @schema EsUpgradeHistory#StepsList
   */
  readonly stepsList?: EsUpgradeStepItem[];

}

/**
 * @schema EsDomainInfo
 */
export interface EsDomainInfo {
  /**
   * @schema EsDomainInfo#DomainName
   */
  readonly domainName?: string;

}

/**
 * @schema EsInboundCrossClusterSearchConnectionStatus
 */
export interface EsInboundCrossClusterSearchConnectionStatus {
  /**
   * @schema EsInboundCrossClusterSearchConnectionStatus#StatusCode
   */
  readonly statusCode?: string;

  /**
   * @schema EsInboundCrossClusterSearchConnectionStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema EsErrorDetails
 */
export interface EsErrorDetails {
  /**
   * @schema EsErrorDetails#ErrorType
   */
  readonly errorType?: string;

  /**
   * @schema EsErrorDetails#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema EsZoneAwarenessConfig
 */
export interface EsZoneAwarenessConfig {
  /**
   * @schema EsZoneAwarenessConfig#AvailabilityZoneCount
   */
  readonly availabilityZoneCount?: number;

}

/**
 * @schema EsMasterUserOptions
 */
export interface EsMasterUserOptions {
  /**
   * @schema EsMasterUserOptions#MasterUserARN
   */
  readonly masterUserArn?: string;

  /**
   * @schema EsMasterUserOptions#MasterUserName
   */
  readonly masterUserName?: string;

  /**
   * @schema EsMasterUserOptions#MasterUserPassword
   */
  readonly masterUserPassword?: string;

}

/**
 * @schema EssamlOptionsInput
 */
export interface EssamlOptionsInput {
  /**
   * @schema EssamlOptionsInput#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EssamlOptionsInput#Idp
   */
  readonly idp?: EssamlIdp;

  /**
   * @schema EssamlOptionsInput#MasterUserName
   */
  readonly masterUserName?: string;

  /**
   * @schema EssamlOptionsInput#MasterBackendRole
   */
  readonly masterBackendRole?: string;

  /**
   * @schema EssamlOptionsInput#SubjectKey
   */
  readonly subjectKey?: string;

  /**
   * @schema EssamlOptionsInput#RolesKey
   */
  readonly rolesKey?: string;

  /**
   * @schema EssamlOptionsInput#SessionTimeoutMinutes
   */
  readonly sessionTimeoutMinutes?: number;

}

/**
 * @schema EsvpcDerivedInfo
 */
export interface EsvpcDerivedInfo {
  /**
   * @schema EsvpcDerivedInfo#VPCId
   */
  readonly vpcId?: string;

  /**
   * @schema EsvpcDerivedInfo#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema EsvpcDerivedInfo#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema EsvpcDerivedInfo#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema EsAdvancedSecurityOptions
 */
export interface EsAdvancedSecurityOptions {
  /**
   * @schema EsAdvancedSecurityOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EsAdvancedSecurityOptions#InternalUserDatabaseEnabled
   */
  readonly internalUserDatabaseEnabled?: boolean;

  /**
   * @schema EsAdvancedSecurityOptions#SAMLOptions
   */
  readonly samlOptions?: EssamlOptionsOutput;

}

/**
 * @schema EsElasticsearchVersionStatus
 */
export interface EsElasticsearchVersionStatus {
  /**
   * @schema EsElasticsearchVersionStatus#Options
   */
  readonly options: string;

  /**
   * @schema EsElasticsearchVersionStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsElasticsearchClusterConfigStatus
 */
export interface EsElasticsearchClusterConfigStatus {
  /**
   * @schema EsElasticsearchClusterConfigStatus#Options
   */
  readonly options: EsElasticsearchClusterConfig;

  /**
   * @schema EsElasticsearchClusterConfigStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsebsOptionsStatus
 */
export interface EsebsOptionsStatus {
  /**
   * @schema EsebsOptionsStatus#Options
   */
  readonly options: EsebsOptions;

  /**
   * @schema EsebsOptionsStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsAccessPoliciesStatus
 */
export interface EsAccessPoliciesStatus {
  /**
   * @schema EsAccessPoliciesStatus#Options
   */
  readonly options: string;

  /**
   * @schema EsAccessPoliciesStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsSnapshotOptionsStatus
 */
export interface EsSnapshotOptionsStatus {
  /**
   * @schema EsSnapshotOptionsStatus#Options
   */
  readonly options: EsSnapshotOptions;

  /**
   * @schema EsSnapshotOptionsStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsvpcDerivedInfoStatus
 */
export interface EsvpcDerivedInfoStatus {
  /**
   * @schema EsvpcDerivedInfoStatus#Options
   */
  readonly options: EsvpcDerivedInfo;

  /**
   * @schema EsvpcDerivedInfoStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsCognitoOptionsStatus
 */
export interface EsCognitoOptionsStatus {
  /**
   * @schema EsCognitoOptionsStatus#Options
   */
  readonly options: EsCognitoOptions;

  /**
   * @schema EsCognitoOptionsStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsEncryptionAtRestOptionsStatus
 */
export interface EsEncryptionAtRestOptionsStatus {
  /**
   * @schema EsEncryptionAtRestOptionsStatus#Options
   */
  readonly options: EsEncryptionAtRestOptions;

  /**
   * @schema EsEncryptionAtRestOptionsStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsNodeToNodeEncryptionOptionsStatus
 */
export interface EsNodeToNodeEncryptionOptionsStatus {
  /**
   * @schema EsNodeToNodeEncryptionOptionsStatus#Options
   */
  readonly options: EsNodeToNodeEncryptionOptions;

  /**
   * @schema EsNodeToNodeEncryptionOptionsStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsAdvancedOptionsStatus
 */
export interface EsAdvancedOptionsStatus {
  /**
   * @schema EsAdvancedOptionsStatus#Options
   */
  readonly options: { [key: string]: string };

  /**
   * @schema EsAdvancedOptionsStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsLogPublishingOptionsStatus
 */
export interface EsLogPublishingOptionsStatus {
  /**
   * @schema EsLogPublishingOptionsStatus#Options
   */
  readonly options?: { [key: string]: EsLogPublishingOption };

  /**
   * @schema EsLogPublishingOptionsStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * @schema EsDomainEndpointOptionsStatus
 */
export interface EsDomainEndpointOptionsStatus {
  /**
   * @schema EsDomainEndpointOptionsStatus#Options
   */
  readonly options: EsDomainEndpointOptions;

  /**
   * @schema EsDomainEndpointOptionsStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsAdvancedSecurityOptionsStatus
 */
export interface EsAdvancedSecurityOptionsStatus {
  /**
   * @schema EsAdvancedSecurityOptionsStatus#Options
   */
  readonly options: EsAdvancedSecurityOptions;

  /**
   * @schema EsAdvancedSecurityOptionsStatus#Status
   */
  readonly status: EsOptionStatus;

}

/**
 * @schema EsStorageType
 */
export interface EsStorageType {
  /**
   * @schema EsStorageType#StorageTypeName
   */
  readonly storageTypeName?: string;

  /**
   * @schema EsStorageType#StorageSubTypeName
   */
  readonly storageSubTypeName?: string;

  /**
   * @schema EsStorageType#StorageTypeLimits
   */
  readonly storageTypeLimits?: EsStorageTypeLimit[];

}

/**
 * @schema EsInstanceLimits
 */
export interface EsInstanceLimits {
  /**
   * @schema EsInstanceLimits#InstanceCountLimits
   */
  readonly instanceCountLimits?: EsInstanceCountLimits;

}

/**
 * @schema EsAdditionalLimit
 */
export interface EsAdditionalLimit {
  /**
   * @schema EsAdditionalLimit#LimitName
   */
  readonly limitName?: string;

  /**
   * @schema EsAdditionalLimit#LimitValues
   */
  readonly limitValues?: string[];

}

/**
 * @schema EsRecurringCharge
 */
export interface EsRecurringCharge {
  /**
   * @schema EsRecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema EsRecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * @schema EsUpgradeStepItem
 */
export interface EsUpgradeStepItem {
  /**
   * @schema EsUpgradeStepItem#UpgradeStep
   */
  readonly upgradeStep?: string;

  /**
   * @schema EsUpgradeStepItem#UpgradeStepStatus
   */
  readonly upgradeStepStatus?: string;

  /**
   * @schema EsUpgradeStepItem#Issues
   */
  readonly issues?: string[];

  /**
   * @schema EsUpgradeStepItem#ProgressPercent
   */
  readonly progressPercent?: number;

}

/**
 * @schema EssamlIdp
 */
export interface EssamlIdp {
  /**
   * @schema EssamlIdp#MetadataContent
   */
  readonly metadataContent: string;

  /**
   * @schema EssamlIdp#EntityId
   */
  readonly entityId: string;

}

/**
 * @schema EssamlOptionsOutput
 */
export interface EssamlOptionsOutput {
  /**
   * @schema EssamlOptionsOutput#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EssamlOptionsOutput#Idp
   */
  readonly idp?: EssamlIdp;

  /**
   * @schema EssamlOptionsOutput#SubjectKey
   */
  readonly subjectKey?: string;

  /**
   * @schema EssamlOptionsOutput#RolesKey
   */
  readonly rolesKey?: string;

  /**
   * @schema EssamlOptionsOutput#SessionTimeoutMinutes
   */
  readonly sessionTimeoutMinutes?: number;

}

/**
 * @schema EsOptionStatus
 */
export interface EsOptionStatus {
  /**
   * @schema EsOptionStatus#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema EsOptionStatus#UpdateDate
   */
  readonly updateDate: string;

  /**
   * @schema EsOptionStatus#UpdateVersion
   */
  readonly updateVersion?: number;

  /**
   * @schema EsOptionStatus#State
   */
  readonly state: string;

  /**
   * @schema EsOptionStatus#PendingDeletion
   */
  readonly pendingDeletion?: boolean;

}

/**
 * @schema EsStorageTypeLimit
 */
export interface EsStorageTypeLimit {
  /**
   * @schema EsStorageTypeLimit#LimitName
   */
  readonly limitName?: string;

  /**
   * @schema EsStorageTypeLimit#LimitValues
   */
  readonly limitValues?: string[];

}

/**
 * @schema EsInstanceCountLimits
 */
export interface EsInstanceCountLimits {
  /**
   * @schema EsInstanceCountLimits#MinimumInstanceCount
   */
  readonly minimumInstanceCount?: number;

  /**
   * @schema EsInstanceCountLimits#MaximumInstanceCount
   */
  readonly maximumInstanceCount?: number;

}
