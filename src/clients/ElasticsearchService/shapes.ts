/**
 * @schema AcceptInboundCrossClusterSearchConnectionRequest
 */
export interface AcceptInboundCrossClusterSearchConnectionRequest {
  /**
   * @schema AcceptInboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId: string;

}

/**
 * @schema AcceptInboundCrossClusterSearchConnectionResponse
 */
export interface AcceptInboundCrossClusterSearchConnectionResponse {
  /**
   * @schema AcceptInboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: InboundCrossClusterSearchConnection;

}

/**
 * @schema AddTagsRequest
 */
export interface AddTagsRequest {
  /**
   * @schema AddTagsRequest#ARN
   */
  readonly arn: string;

  /**
   * @schema AddTagsRequest#TagList
   */
  readonly tagList: Tag[];

}

/**
 * @schema AssociatePackageRequest
 */
export interface AssociatePackageRequest {
  /**
   * @schema AssociatePackageRequest#PackageID
   */
  readonly packageId: string;

  /**
   * @schema AssociatePackageRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema AssociatePackageResponse
 */
export interface AssociatePackageResponse {
  /**
   * @schema AssociatePackageResponse#DomainPackageDetails
   */
  readonly domainPackageDetails?: DomainPackageDetails;

}

/**
 * @schema CancelElasticsearchServiceSoftwareUpdateRequest
 */
export interface CancelElasticsearchServiceSoftwareUpdateRequest {
  /**
   * @schema CancelElasticsearchServiceSoftwareUpdateRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema CancelElasticsearchServiceSoftwareUpdateResponse
 */
export interface CancelElasticsearchServiceSoftwareUpdateResponse {
  /**
   * @schema CancelElasticsearchServiceSoftwareUpdateResponse#ServiceSoftwareOptions
   */
  readonly serviceSoftwareOptions?: ServiceSoftwareOptions;

}

/**
 * @schema CreateElasticsearchDomainRequest
 */
export interface CreateElasticsearchDomainRequest {
  /**
   * @schema CreateElasticsearchDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CreateElasticsearchDomainRequest#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

  /**
   * @schema CreateElasticsearchDomainRequest#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: ElasticsearchClusterConfig;

  /**
   * @schema CreateElasticsearchDomainRequest#EBSOptions
   */
  readonly ebsOptions?: EbsOptions;

  /**
   * @schema CreateElasticsearchDomainRequest#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema CreateElasticsearchDomainRequest#SnapshotOptions
   */
  readonly snapshotOptions?: SnapshotOptions;

  /**
   * @schema CreateElasticsearchDomainRequest#VPCOptions
   */
  readonly vpcOptions?: VpcOptions;

  /**
   * @schema CreateElasticsearchDomainRequest#CognitoOptions
   */
  readonly cognitoOptions?: CognitoOptions;

  /**
   * @schema CreateElasticsearchDomainRequest#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * @schema CreateElasticsearchDomainRequest#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * @schema CreateElasticsearchDomainRequest#AdvancedOptions
   */
  readonly advancedOptions?: { [key: string]: string };

  /**
   * @schema CreateElasticsearchDomainRequest#LogPublishingOptions
   */
  readonly logPublishingOptions?: { [key: string]: LogPublishingOption };

  /**
   * @schema CreateElasticsearchDomainRequest#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: DomainEndpointOptions;

  /**
   * @schema CreateElasticsearchDomainRequest#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptionsInput;

}

/**
 * @schema CreateElasticsearchDomainResponse
 */
export interface CreateElasticsearchDomainResponse {
  /**
   * @schema CreateElasticsearchDomainResponse#DomainStatus
   */
  readonly domainStatus?: ElasticsearchDomainStatus;

}

/**
 * @schema CreateOutboundCrossClusterSearchConnectionRequest
 */
export interface CreateOutboundCrossClusterSearchConnectionRequest {
  /**
   * @schema CreateOutboundCrossClusterSearchConnectionRequest#SourceDomainInfo
   */
  readonly sourceDomainInfo: DomainInformation;

  /**
   * @schema CreateOutboundCrossClusterSearchConnectionRequest#DestinationDomainInfo
   */
  readonly destinationDomainInfo: DomainInformation;

  /**
   * @schema CreateOutboundCrossClusterSearchConnectionRequest#ConnectionAlias
   */
  readonly connectionAlias: string;

}

/**
 * @schema CreateOutboundCrossClusterSearchConnectionResponse
 */
export interface CreateOutboundCrossClusterSearchConnectionResponse {
  /**
   * @schema CreateOutboundCrossClusterSearchConnectionResponse#SourceDomainInfo
   */
  readonly sourceDomainInfo?: DomainInformation;

  /**
   * @schema CreateOutboundCrossClusterSearchConnectionResponse#DestinationDomainInfo
   */
  readonly destinationDomainInfo?: DomainInformation;

  /**
   * @schema CreateOutboundCrossClusterSearchConnectionResponse#ConnectionAlias
   */
  readonly connectionAlias?: string;

  /**
   * @schema CreateOutboundCrossClusterSearchConnectionResponse#ConnectionStatus
   */
  readonly connectionStatus?: OutboundCrossClusterSearchConnectionStatus;

  /**
   * @schema CreateOutboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

}

/**
 * @schema CreatePackageRequest
 */
export interface CreatePackageRequest {
  /**
   * @schema CreatePackageRequest#PackageName
   */
  readonly packageName: string;

  /**
   * @schema CreatePackageRequest#PackageType
   */
  readonly packageType: string;

  /**
   * @schema CreatePackageRequest#PackageDescription
   */
  readonly packageDescription?: string;

  /**
   * @schema CreatePackageRequest#PackageSource
   */
  readonly packageSource: PackageSource;

}

/**
 * @schema CreatePackageResponse
 */
export interface CreatePackageResponse {
  /**
   * @schema CreatePackageResponse#PackageDetails
   */
  readonly packageDetails?: PackageDetails;

}

/**
 * @schema DeleteElasticsearchDomainRequest
 */
export interface DeleteElasticsearchDomainRequest {
  /**
   * @schema DeleteElasticsearchDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DeleteElasticsearchDomainResponse
 */
export interface DeleteElasticsearchDomainResponse {
  /**
   * @schema DeleteElasticsearchDomainResponse#DomainStatus
   */
  readonly domainStatus?: ElasticsearchDomainStatus;

}

/**
 * @schema DeleteInboundCrossClusterSearchConnectionRequest
 */
export interface DeleteInboundCrossClusterSearchConnectionRequest {
  /**
   * @schema DeleteInboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId: string;

}

/**
 * @schema DeleteInboundCrossClusterSearchConnectionResponse
 */
export interface DeleteInboundCrossClusterSearchConnectionResponse {
  /**
   * @schema DeleteInboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: InboundCrossClusterSearchConnection;

}

/**
 * @schema DeleteOutboundCrossClusterSearchConnectionRequest
 */
export interface DeleteOutboundCrossClusterSearchConnectionRequest {
  /**
   * @schema DeleteOutboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId: string;

}

/**
 * @schema DeleteOutboundCrossClusterSearchConnectionResponse
 */
export interface DeleteOutboundCrossClusterSearchConnectionResponse {
  /**
   * @schema DeleteOutboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: OutboundCrossClusterSearchConnection;

}

/**
 * @schema DeletePackageRequest
 */
export interface DeletePackageRequest {
  /**
   * @schema DeletePackageRequest#PackageID
   */
  readonly packageId: string;

}

/**
 * @schema DeletePackageResponse
 */
export interface DeletePackageResponse {
  /**
   * @schema DeletePackageResponse#PackageDetails
   */
  readonly packageDetails?: PackageDetails;

}

/**
 * @schema DescribeElasticsearchDomainRequest
 */
export interface DescribeElasticsearchDomainRequest {
  /**
   * @schema DescribeElasticsearchDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DescribeElasticsearchDomainResponse
 */
export interface DescribeElasticsearchDomainResponse {
  /**
   * @schema DescribeElasticsearchDomainResponse#DomainStatus
   */
  readonly domainStatus: ElasticsearchDomainStatus;

}

/**
 * @schema DescribeElasticsearchDomainConfigRequest
 */
export interface DescribeElasticsearchDomainConfigRequest {
  /**
   * @schema DescribeElasticsearchDomainConfigRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DescribeElasticsearchDomainConfigResponse
 */
export interface DescribeElasticsearchDomainConfigResponse {
  /**
   * @schema DescribeElasticsearchDomainConfigResponse#DomainConfig
   */
  readonly domainConfig: ElasticsearchDomainConfig;

}

/**
 * @schema DescribeElasticsearchDomainsRequest
 */
export interface DescribeElasticsearchDomainsRequest {
  /**
   * @schema DescribeElasticsearchDomainsRequest#DomainNames
   */
  readonly domainNames: string[];

}

/**
 * @schema DescribeElasticsearchDomainsResponse
 */
export interface DescribeElasticsearchDomainsResponse {
  /**
   * @schema DescribeElasticsearchDomainsResponse#DomainStatusList
   */
  readonly domainStatusList: ElasticsearchDomainStatus[];

}

/**
 * @schema DescribeElasticsearchInstanceTypeLimitsRequest
 */
export interface DescribeElasticsearchInstanceTypeLimitsRequest {
  /**
   * @schema DescribeElasticsearchInstanceTypeLimitsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema DescribeElasticsearchInstanceTypeLimitsRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema DescribeElasticsearchInstanceTypeLimitsRequest#ElasticsearchVersion
   */
  readonly elasticsearchVersion: string;

}

/**
 * @schema DescribeElasticsearchInstanceTypeLimitsResponse
 */
export interface DescribeElasticsearchInstanceTypeLimitsResponse {
  /**
   * @schema DescribeElasticsearchInstanceTypeLimitsResponse#LimitsByRole
   */
  readonly limitsByRole?: { [key: string]: Limits };

}

/**
 * @schema DescribeInboundCrossClusterSearchConnectionsRequest
 */
export interface DescribeInboundCrossClusterSearchConnectionsRequest {
  /**
   * @schema DescribeInboundCrossClusterSearchConnectionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeInboundCrossClusterSearchConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeInboundCrossClusterSearchConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInboundCrossClusterSearchConnectionsResponse
 */
export interface DescribeInboundCrossClusterSearchConnectionsResponse {
  /**
   * @schema DescribeInboundCrossClusterSearchConnectionsResponse#CrossClusterSearchConnections
   */
  readonly crossClusterSearchConnections?: InboundCrossClusterSearchConnection[];

  /**
   * @schema DescribeInboundCrossClusterSearchConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeOutboundCrossClusterSearchConnectionsRequest
 */
export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
  /**
   * @schema DescribeOutboundCrossClusterSearchConnectionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeOutboundCrossClusterSearchConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeOutboundCrossClusterSearchConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeOutboundCrossClusterSearchConnectionsResponse
 */
export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
  /**
   * @schema DescribeOutboundCrossClusterSearchConnectionsResponse#CrossClusterSearchConnections
   */
  readonly crossClusterSearchConnections?: OutboundCrossClusterSearchConnection[];

  /**
   * @schema DescribeOutboundCrossClusterSearchConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePackagesRequest
 */
export interface DescribePackagesRequest {
  /**
   * @schema DescribePackagesRequest#Filters
   */
  readonly filters?: DescribePackagesFilter[];

  /**
   * @schema DescribePackagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribePackagesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePackagesResponse
 */
export interface DescribePackagesResponse {
  /**
   * @schema DescribePackagesResponse#PackageDetailsList
   */
  readonly packageDetailsList?: PackageDetails[];

  /**
   * @schema DescribePackagesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeReservedElasticsearchInstanceOfferingsRequest
 */
export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
  /**
   * @schema DescribeReservedElasticsearchInstanceOfferingsRequest#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId?: string;

  /**
   * @schema DescribeReservedElasticsearchInstanceOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeReservedElasticsearchInstanceOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeReservedElasticsearchInstanceOfferingsResponse
 */
export interface DescribeReservedElasticsearchInstanceOfferingsResponse {
  /**
   * @schema DescribeReservedElasticsearchInstanceOfferingsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeReservedElasticsearchInstanceOfferingsResponse#ReservedElasticsearchInstanceOfferings
   */
  readonly reservedElasticsearchInstanceOfferings?: ReservedElasticsearchInstanceOffering[];

}

/**
 * @schema DescribeReservedElasticsearchInstancesRequest
 */
export interface DescribeReservedElasticsearchInstancesRequest {
  /**
   * @schema DescribeReservedElasticsearchInstancesRequest#ReservedElasticsearchInstanceId
   */
  readonly reservedElasticsearchInstanceId?: string;

  /**
   * @schema DescribeReservedElasticsearchInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeReservedElasticsearchInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeReservedElasticsearchInstancesResponse
 */
export interface DescribeReservedElasticsearchInstancesResponse {
  /**
   * @schema DescribeReservedElasticsearchInstancesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeReservedElasticsearchInstancesResponse#ReservedElasticsearchInstances
   */
  readonly reservedElasticsearchInstances?: ReservedElasticsearchInstance[];

}

/**
 * @schema DissociatePackageRequest
 */
export interface DissociatePackageRequest {
  /**
   * @schema DissociatePackageRequest#PackageID
   */
  readonly packageId: string;

  /**
   * @schema DissociatePackageRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DissociatePackageResponse
 */
export interface DissociatePackageResponse {
  /**
   * @schema DissociatePackageResponse#DomainPackageDetails
   */
  readonly domainPackageDetails?: DomainPackageDetails;

}

/**
 * @schema GetCompatibleElasticsearchVersionsRequest
 */
export interface GetCompatibleElasticsearchVersionsRequest {
  /**
   * @schema GetCompatibleElasticsearchVersionsRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * @schema GetCompatibleElasticsearchVersionsResponse
 */
export interface GetCompatibleElasticsearchVersionsResponse {
  /**
   * @schema GetCompatibleElasticsearchVersionsResponse#CompatibleElasticsearchVersions
   */
  readonly compatibleElasticsearchVersions?: CompatibleVersionsMap[];

}

/**
 * @schema GetPackageVersionHistoryRequest
 */
export interface GetPackageVersionHistoryRequest {
  /**
   * @schema GetPackageVersionHistoryRequest#PackageID
   */
  readonly packageId: string;

  /**
   * @schema GetPackageVersionHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetPackageVersionHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetPackageVersionHistoryResponse
 */
export interface GetPackageVersionHistoryResponse {
  /**
   * @schema GetPackageVersionHistoryResponse#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema GetPackageVersionHistoryResponse#PackageVersionHistoryList
   */
  readonly packageVersionHistoryList?: PackageVersionHistory[];

  /**
   * @schema GetPackageVersionHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetUpgradeHistoryRequest
 */
export interface GetUpgradeHistoryRequest {
  /**
   * @schema GetUpgradeHistoryRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema GetUpgradeHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetUpgradeHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetUpgradeHistoryResponse
 */
export interface GetUpgradeHistoryResponse {
  /**
   * @schema GetUpgradeHistoryResponse#UpgradeHistories
   */
  readonly upgradeHistories?: UpgradeHistory[];

  /**
   * @schema GetUpgradeHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetUpgradeStatusRequest
 */
export interface GetUpgradeStatusRequest {
  /**
   * @schema GetUpgradeStatusRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema GetUpgradeStatusResponse
 */
export interface GetUpgradeStatusResponse {
  /**
   * @schema GetUpgradeStatusResponse#UpgradeStep
   */
  readonly upgradeStep?: string;

  /**
   * @schema GetUpgradeStatusResponse#StepStatus
   */
  readonly stepStatus?: string;

  /**
   * @schema GetUpgradeStatusResponse#UpgradeName
   */
  readonly upgradeName?: string;

}

/**
 * @schema ListDomainNamesResponse
 */
export interface ListDomainNamesResponse {
  /**
   * @schema ListDomainNamesResponse#DomainNames
   */
  readonly domainNames?: DomainInfo[];

}

/**
 * @schema ListDomainsForPackageRequest
 */
export interface ListDomainsForPackageRequest {
  /**
   * @schema ListDomainsForPackageRequest#PackageID
   */
  readonly packageId: string;

  /**
   * @schema ListDomainsForPackageRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDomainsForPackageRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDomainsForPackageResponse
 */
export interface ListDomainsForPackageResponse {
  /**
   * @schema ListDomainsForPackageResponse#DomainPackageDetailsList
   */
  readonly domainPackageDetailsList?: DomainPackageDetails[];

  /**
   * @schema ListDomainsForPackageResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListElasticsearchInstanceTypesRequest
 */
export interface ListElasticsearchInstanceTypesRequest {
  /**
   * @schema ListElasticsearchInstanceTypesRequest#ElasticsearchVersion
   */
  readonly elasticsearchVersion: string;

  /**
   * @schema ListElasticsearchInstanceTypesRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ListElasticsearchInstanceTypesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListElasticsearchInstanceTypesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListElasticsearchInstanceTypesResponse
 */
export interface ListElasticsearchInstanceTypesResponse {
  /**
   * @schema ListElasticsearchInstanceTypesResponse#ElasticsearchInstanceTypes
   */
  readonly elasticsearchInstanceTypes?: string[];

  /**
   * @schema ListElasticsearchInstanceTypesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListElasticsearchVersionsRequest
 */
export interface ListElasticsearchVersionsRequest {
  /**
   * @schema ListElasticsearchVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListElasticsearchVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListElasticsearchVersionsResponse
 */
export interface ListElasticsearchVersionsResponse {
  /**
   * @schema ListElasticsearchVersionsResponse#ElasticsearchVersions
   */
  readonly elasticsearchVersions?: string[];

  /**
   * @schema ListElasticsearchVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPackagesForDomainRequest
 */
export interface ListPackagesForDomainRequest {
  /**
   * @schema ListPackagesForDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema ListPackagesForDomainRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPackagesForDomainRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPackagesForDomainResponse
 */
export interface ListPackagesForDomainResponse {
  /**
   * @schema ListPackagesForDomainResponse#DomainPackageDetailsList
   */
  readonly domainPackageDetailsList?: DomainPackageDetails[];

  /**
   * @schema ListPackagesForDomainResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsRequest
 */
export interface ListTagsRequest {
  /**
   * @schema ListTagsRequest#ARN
   */
  readonly arn: string;

}

/**
 * @schema ListTagsResponse
 */
export interface ListTagsResponse {
  /**
   * @schema ListTagsResponse#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema PurchaseReservedElasticsearchInstanceOfferingRequest
 */
export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
  /**
   * @schema PurchaseReservedElasticsearchInstanceOfferingRequest#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId: string;

  /**
   * @schema PurchaseReservedElasticsearchInstanceOfferingRequest#ReservationName
   */
  readonly reservationName: string;

  /**
   * @schema PurchaseReservedElasticsearchInstanceOfferingRequest#InstanceCount
   */
  readonly instanceCount?: number;

}

/**
 * @schema PurchaseReservedElasticsearchInstanceOfferingResponse
 */
export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
  /**
   * @schema PurchaseReservedElasticsearchInstanceOfferingResponse#ReservedElasticsearchInstanceId
   */
  readonly reservedElasticsearchInstanceId?: string;

  /**
   * @schema PurchaseReservedElasticsearchInstanceOfferingResponse#ReservationName
   */
  readonly reservationName?: string;

}

/**
 * @schema RejectInboundCrossClusterSearchConnectionRequest
 */
export interface RejectInboundCrossClusterSearchConnectionRequest {
  /**
   * @schema RejectInboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId: string;

}

/**
 * @schema RejectInboundCrossClusterSearchConnectionResponse
 */
export interface RejectInboundCrossClusterSearchConnectionResponse {
  /**
   * @schema RejectInboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: InboundCrossClusterSearchConnection;

}

/**
 * @schema RemoveTagsRequest
 */
export interface RemoveTagsRequest {
  /**
   * @schema RemoveTagsRequest#ARN
   */
  readonly arn: string;

  /**
   * @schema RemoveTagsRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema StartElasticsearchServiceSoftwareUpdateRequest
 */
export interface StartElasticsearchServiceSoftwareUpdateRequest {
  /**
   * @schema StartElasticsearchServiceSoftwareUpdateRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema StartElasticsearchServiceSoftwareUpdateResponse
 */
export interface StartElasticsearchServiceSoftwareUpdateResponse {
  /**
   * @schema StartElasticsearchServiceSoftwareUpdateResponse#ServiceSoftwareOptions
   */
  readonly serviceSoftwareOptions?: ServiceSoftwareOptions;

}

/**
 * @schema UpdateElasticsearchDomainConfigRequest
 */
export interface UpdateElasticsearchDomainConfigRequest {
  /**
   * @schema UpdateElasticsearchDomainConfigRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateElasticsearchDomainConfigRequest#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: ElasticsearchClusterConfig;

  /**
   * @schema UpdateElasticsearchDomainConfigRequest#EBSOptions
   */
  readonly ebsOptions?: EbsOptions;

  /**
   * @schema UpdateElasticsearchDomainConfigRequest#SnapshotOptions
   */
  readonly snapshotOptions?: SnapshotOptions;

  /**
   * @schema UpdateElasticsearchDomainConfigRequest#VPCOptions
   */
  readonly vpcOptions?: VpcOptions;

  /**
   * @schema UpdateElasticsearchDomainConfigRequest#CognitoOptions
   */
  readonly cognitoOptions?: CognitoOptions;

  /**
   * @schema UpdateElasticsearchDomainConfigRequest#AdvancedOptions
   */
  readonly advancedOptions?: { [key: string]: string };

  /**
   * @schema UpdateElasticsearchDomainConfigRequest#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema UpdateElasticsearchDomainConfigRequest#LogPublishingOptions
   */
  readonly logPublishingOptions?: { [key: string]: LogPublishingOption };

  /**
   * @schema UpdateElasticsearchDomainConfigRequest#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: DomainEndpointOptions;

  /**
   * @schema UpdateElasticsearchDomainConfigRequest#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptionsInput;

}

/**
 * @schema UpdateElasticsearchDomainConfigResponse
 */
export interface UpdateElasticsearchDomainConfigResponse {
  /**
   * @schema UpdateElasticsearchDomainConfigResponse#DomainConfig
   */
  readonly domainConfig: ElasticsearchDomainConfig;

}

/**
 * @schema UpdatePackageRequest
 */
export interface UpdatePackageRequest {
  /**
   * @schema UpdatePackageRequest#PackageID
   */
  readonly packageId: string;

  /**
   * @schema UpdatePackageRequest#PackageSource
   */
  readonly packageSource: PackageSource;

  /**
   * @schema UpdatePackageRequest#PackageDescription
   */
  readonly packageDescription?: string;

  /**
   * @schema UpdatePackageRequest#CommitMessage
   */
  readonly commitMessage?: string;

}

/**
 * @schema UpdatePackageResponse
 */
export interface UpdatePackageResponse {
  /**
   * @schema UpdatePackageResponse#PackageDetails
   */
  readonly packageDetails?: PackageDetails;

}

/**
 * @schema UpgradeElasticsearchDomainRequest
 */
export interface UpgradeElasticsearchDomainRequest {
  /**
   * @schema UpgradeElasticsearchDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpgradeElasticsearchDomainRequest#TargetVersion
   */
  readonly targetVersion: string;

  /**
   * @schema UpgradeElasticsearchDomainRequest#PerformCheckOnly
   */
  readonly performCheckOnly?: boolean;

}

/**
 * @schema UpgradeElasticsearchDomainResponse
 */
export interface UpgradeElasticsearchDomainResponse {
  /**
   * @schema UpgradeElasticsearchDomainResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema UpgradeElasticsearchDomainResponse#TargetVersion
   */
  readonly targetVersion?: string;

  /**
   * @schema UpgradeElasticsearchDomainResponse#PerformCheckOnly
   */
  readonly performCheckOnly?: boolean;

}

/**
 * @schema InboundCrossClusterSearchConnection
 */
export interface InboundCrossClusterSearchConnection {
  /**
   * @schema InboundCrossClusterSearchConnection#SourceDomainInfo
   */
  readonly sourceDomainInfo?: DomainInformation;

  /**
   * @schema InboundCrossClusterSearchConnection#DestinationDomainInfo
   */
  readonly destinationDomainInfo?: DomainInformation;

  /**
   * @schema InboundCrossClusterSearchConnection#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

  /**
   * @schema InboundCrossClusterSearchConnection#ConnectionStatus
   */
  readonly connectionStatus?: InboundCrossClusterSearchConnectionStatus;

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
 * @schema DomainPackageDetails
 */
export interface DomainPackageDetails {
  /**
   * @schema DomainPackageDetails#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema DomainPackageDetails#PackageName
   */
  readonly packageName?: string;

  /**
   * @schema DomainPackageDetails#PackageType
   */
  readonly packageType?: string;

  /**
   * @schema DomainPackageDetails#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema DomainPackageDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema DomainPackageDetails#DomainPackageStatus
   */
  readonly domainPackageStatus?: string;

  /**
   * @schema DomainPackageDetails#PackageVersion
   */
  readonly packageVersion?: string;

  /**
   * @schema DomainPackageDetails#ReferencePath
   */
  readonly referencePath?: string;

  /**
   * @schema DomainPackageDetails#ErrorDetails
   */
  readonly errorDetails?: ErrorDetails;

}

/**
 * @schema ServiceSoftwareOptions
 */
export interface ServiceSoftwareOptions {
  /**
   * @schema ServiceSoftwareOptions#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema ServiceSoftwareOptions#NewVersion
   */
  readonly newVersion?: string;

  /**
   * @schema ServiceSoftwareOptions#UpdateAvailable
   */
  readonly updateAvailable?: boolean;

  /**
   * @schema ServiceSoftwareOptions#Cancellable
   */
  readonly cancellable?: boolean;

  /**
   * @schema ServiceSoftwareOptions#UpdateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema ServiceSoftwareOptions#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceSoftwareOptions#AutomatedUpdateDate
   */
  readonly automatedUpdateDate?: string;

  /**
   * @schema ServiceSoftwareOptions#OptionalDeployment
   */
  readonly optionalDeployment?: boolean;

}

/**
 * @schema ElasticsearchClusterConfig
 */
export interface ElasticsearchClusterConfig {
  /**
   * @schema ElasticsearchClusterConfig#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ElasticsearchClusterConfig#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema ElasticsearchClusterConfig#DedicatedMasterEnabled
   */
  readonly dedicatedMasterEnabled?: boolean;

  /**
   * @schema ElasticsearchClusterConfig#ZoneAwarenessEnabled
   */
  readonly zoneAwarenessEnabled?: boolean;

  /**
   * @schema ElasticsearchClusterConfig#ZoneAwarenessConfig
   */
  readonly zoneAwarenessConfig?: ZoneAwarenessConfig;

  /**
   * @schema ElasticsearchClusterConfig#DedicatedMasterType
   */
  readonly dedicatedMasterType?: string;

  /**
   * @schema ElasticsearchClusterConfig#DedicatedMasterCount
   */
  readonly dedicatedMasterCount?: number;

  /**
   * @schema ElasticsearchClusterConfig#WarmEnabled
   */
  readonly warmEnabled?: boolean;

  /**
   * @schema ElasticsearchClusterConfig#WarmType
   */
  readonly warmType?: string;

  /**
   * @schema ElasticsearchClusterConfig#WarmCount
   */
  readonly warmCount?: number;

}

/**
 * @schema EbsOptions
 */
export interface EbsOptions {
  /**
   * @schema EbsOptions#EBSEnabled
   */
  readonly ebsEnabled?: boolean;

  /**
   * @schema EbsOptions#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema EbsOptions#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema EbsOptions#Iops
   */
  readonly iops?: number;

}

/**
 * @schema SnapshotOptions
 */
export interface SnapshotOptions {
  /**
   * @schema SnapshotOptions#AutomatedSnapshotStartHour
   */
  readonly automatedSnapshotStartHour?: number;

}

/**
 * @schema VpcOptions
 */
export interface VpcOptions {
  /**
   * @schema VpcOptions#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema VpcOptions#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema CognitoOptions
 */
export interface CognitoOptions {
  /**
   * @schema CognitoOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CognitoOptions#UserPoolId
   */
  readonly userPoolId?: string;

  /**
   * @schema CognitoOptions#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoOptions#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema EncryptionAtRestOptions
 */
export interface EncryptionAtRestOptions {
  /**
   * @schema EncryptionAtRestOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EncryptionAtRestOptions#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema NodeToNodeEncryptionOptions
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * @schema NodeToNodeEncryptionOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema LogPublishingOption
 */
export interface LogPublishingOption {
  /**
   * @schema LogPublishingOption#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema LogPublishingOption#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema DomainEndpointOptions
 */
export interface DomainEndpointOptions {
  /**
   * @schema DomainEndpointOptions#EnforceHTTPS
   */
  readonly enforceHttps?: boolean;

  /**
   * @schema DomainEndpointOptions#TLSSecurityPolicy
   */
  readonly tlsSecurityPolicy?: string;

  /**
   * @schema DomainEndpointOptions#CustomEndpointEnabled
   */
  readonly customEndpointEnabled?: boolean;

  /**
   * @schema DomainEndpointOptions#CustomEndpoint
   */
  readonly customEndpoint?: string;

  /**
   * @schema DomainEndpointOptions#CustomEndpointCertificateArn
   */
  readonly customEndpointCertificateArn?: string;

}

/**
 * @schema AdvancedSecurityOptionsInput
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * @schema AdvancedSecurityOptionsInput#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AdvancedSecurityOptionsInput#InternalUserDatabaseEnabled
   */
  readonly internalUserDatabaseEnabled?: boolean;

  /**
   * @schema AdvancedSecurityOptionsInput#MasterUserOptions
   */
  readonly masterUserOptions?: MasterUserOptions;

  /**
   * @schema AdvancedSecurityOptionsInput#SAMLOptions
   */
  readonly samlOptions?: SamlOptionsInput;

}

/**
 * @schema ElasticsearchDomainStatus
 */
export interface ElasticsearchDomainStatus {
  /**
   * @schema ElasticsearchDomainStatus#DomainId
   */
  readonly domainId: string;

  /**
   * @schema ElasticsearchDomainStatus#DomainName
   */
  readonly domainName: string;

  /**
   * @schema ElasticsearchDomainStatus#ARN
   */
  readonly arn: string;

  /**
   * @schema ElasticsearchDomainStatus#Created
   */
  readonly created?: boolean;

  /**
   * @schema ElasticsearchDomainStatus#Deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema ElasticsearchDomainStatus#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema ElasticsearchDomainStatus#Endpoints
   */
  readonly endpoints?: { [key: string]: string };

  /**
   * @schema ElasticsearchDomainStatus#Processing
   */
  readonly processing?: boolean;

  /**
   * @schema ElasticsearchDomainStatus#UpgradeProcessing
   */
  readonly upgradeProcessing?: boolean;

  /**
   * @schema ElasticsearchDomainStatus#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

  /**
   * @schema ElasticsearchDomainStatus#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig: ElasticsearchClusterConfig;

  /**
   * @schema ElasticsearchDomainStatus#EBSOptions
   */
  readonly ebsOptions?: EbsOptions;

  /**
   * @schema ElasticsearchDomainStatus#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema ElasticsearchDomainStatus#SnapshotOptions
   */
  readonly snapshotOptions?: SnapshotOptions;

  /**
   * @schema ElasticsearchDomainStatus#VPCOptions
   */
  readonly vpcOptions?: VpcDerivedInfo;

  /**
   * @schema ElasticsearchDomainStatus#CognitoOptions
   */
  readonly cognitoOptions?: CognitoOptions;

  /**
   * @schema ElasticsearchDomainStatus#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * @schema ElasticsearchDomainStatus#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * @schema ElasticsearchDomainStatus#AdvancedOptions
   */
  readonly advancedOptions?: { [key: string]: string };

  /**
   * @schema ElasticsearchDomainStatus#LogPublishingOptions
   */
  readonly logPublishingOptions?: { [key: string]: LogPublishingOption };

  /**
   * @schema ElasticsearchDomainStatus#ServiceSoftwareOptions
   */
  readonly serviceSoftwareOptions?: ServiceSoftwareOptions;

  /**
   * @schema ElasticsearchDomainStatus#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: DomainEndpointOptions;

  /**
   * @schema ElasticsearchDomainStatus#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptions;

}

/**
 * @schema DomainInformation
 */
export interface DomainInformation {
  /**
   * @schema DomainInformation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema DomainInformation#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DomainInformation#Region
   */
  readonly region?: string;

}

/**
 * @schema OutboundCrossClusterSearchConnectionStatus
 */
export interface OutboundCrossClusterSearchConnectionStatus {
  /**
   * @schema OutboundCrossClusterSearchConnectionStatus#StatusCode
   */
  readonly statusCode?: string;

  /**
   * @schema OutboundCrossClusterSearchConnectionStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema PackageSource
 */
export interface PackageSource {
  /**
   * @schema PackageSource#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema PackageSource#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema PackageDetails
 */
export interface PackageDetails {
  /**
   * @schema PackageDetails#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema PackageDetails#PackageName
   */
  readonly packageName?: string;

  /**
   * @schema PackageDetails#PackageType
   */
  readonly packageType?: string;

  /**
   * @schema PackageDetails#PackageDescription
   */
  readonly packageDescription?: string;

  /**
   * @schema PackageDetails#PackageStatus
   */
  readonly packageStatus?: string;

  /**
   * @schema PackageDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema PackageDetails#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema PackageDetails#AvailablePackageVersion
   */
  readonly availablePackageVersion?: string;

  /**
   * @schema PackageDetails#ErrorDetails
   */
  readonly errorDetails?: ErrorDetails;

}

/**
 * @schema OutboundCrossClusterSearchConnection
 */
export interface OutboundCrossClusterSearchConnection {
  /**
   * @schema OutboundCrossClusterSearchConnection#SourceDomainInfo
   */
  readonly sourceDomainInfo?: DomainInformation;

  /**
   * @schema OutboundCrossClusterSearchConnection#DestinationDomainInfo
   */
  readonly destinationDomainInfo?: DomainInformation;

  /**
   * @schema OutboundCrossClusterSearchConnection#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

  /**
   * @schema OutboundCrossClusterSearchConnection#ConnectionAlias
   */
  readonly connectionAlias?: string;

  /**
   * @schema OutboundCrossClusterSearchConnection#ConnectionStatus
   */
  readonly connectionStatus?: OutboundCrossClusterSearchConnectionStatus;

}

/**
 * @schema ElasticsearchDomainConfig
 */
export interface ElasticsearchDomainConfig {
  /**
   * @schema ElasticsearchDomainConfig#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: ElasticsearchVersionStatus;

  /**
   * @schema ElasticsearchDomainConfig#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;

  /**
   * @schema ElasticsearchDomainConfig#EBSOptions
   */
  readonly ebsOptions?: EbsOptionsStatus;

  /**
   * @schema ElasticsearchDomainConfig#AccessPolicies
   */
  readonly accessPolicies?: AccessPoliciesStatus;

  /**
   * @schema ElasticsearchDomainConfig#SnapshotOptions
   */
  readonly snapshotOptions?: SnapshotOptionsStatus;

  /**
   * @schema ElasticsearchDomainConfig#VPCOptions
   */
  readonly vpcOptions?: VpcDerivedInfoStatus;

  /**
   * @schema ElasticsearchDomainConfig#CognitoOptions
   */
  readonly cognitoOptions?: CognitoOptionsStatus;

  /**
   * @schema ElasticsearchDomainConfig#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: EncryptionAtRestOptionsStatus;

  /**
   * @schema ElasticsearchDomainConfig#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;

  /**
   * @schema ElasticsearchDomainConfig#AdvancedOptions
   */
  readonly advancedOptions?: AdvancedOptionsStatus;

  /**
   * @schema ElasticsearchDomainConfig#LogPublishingOptions
   */
  readonly logPublishingOptions?: LogPublishingOptionsStatus;

  /**
   * @schema ElasticsearchDomainConfig#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: DomainEndpointOptionsStatus;

  /**
   * @schema ElasticsearchDomainConfig#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptionsStatus;

}

/**
 * @schema Limits
 */
export interface Limits {
  /**
   * @schema Limits#StorageTypes
   */
  readonly storageTypes?: StorageType[];

  /**
   * @schema Limits#InstanceLimits
   */
  readonly instanceLimits?: InstanceLimits;

  /**
   * @schema Limits#AdditionalLimits
   */
  readonly additionalLimits?: AdditionalLimit[];

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name?: string;

  /**
   * @schema Filter#Values
   */
  readonly values?: string[];

}

/**
 * @schema DescribePackagesFilter
 */
export interface DescribePackagesFilter {
  /**
   * @schema DescribePackagesFilter#Name
   */
  readonly name?: string;

  /**
   * @schema DescribePackagesFilter#Value
   */
  readonly value?: string[];

}

/**
 * @schema ReservedElasticsearchInstanceOffering
 */
export interface ReservedElasticsearchInstanceOffering {
  /**
   * @schema ReservedElasticsearchInstanceOffering#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId?: string;

  /**
   * @schema ReservedElasticsearchInstanceOffering#ElasticsearchInstanceType
   */
  readonly elasticsearchInstanceType?: string;

  /**
   * @schema ReservedElasticsearchInstanceOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema ReservedElasticsearchInstanceOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ReservedElasticsearchInstanceOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ReservedElasticsearchInstanceOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema ReservedElasticsearchInstanceOffering#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema ReservedElasticsearchInstanceOffering#RecurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

}

/**
 * @schema ReservedElasticsearchInstance
 */
export interface ReservedElasticsearchInstance {
  /**
   * @schema ReservedElasticsearchInstance#ReservationName
   */
  readonly reservationName?: string;

  /**
   * @schema ReservedElasticsearchInstance#ReservedElasticsearchInstanceId
   */
  readonly reservedElasticsearchInstanceId?: string;

  /**
   * @schema ReservedElasticsearchInstance#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId?: string;

  /**
   * @schema ReservedElasticsearchInstance#ElasticsearchInstanceType
   */
  readonly elasticsearchInstanceType?: string;

  /**
   * @schema ReservedElasticsearchInstance#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ReservedElasticsearchInstance#Duration
   */
  readonly duration?: number;

  /**
   * @schema ReservedElasticsearchInstance#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ReservedElasticsearchInstance#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ReservedElasticsearchInstance#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema ReservedElasticsearchInstance#ElasticsearchInstanceCount
   */
  readonly elasticsearchInstanceCount?: number;

  /**
   * @schema ReservedElasticsearchInstance#State
   */
  readonly state?: string;

  /**
   * @schema ReservedElasticsearchInstance#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema ReservedElasticsearchInstance#RecurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

}

/**
 * @schema CompatibleVersionsMap
 */
export interface CompatibleVersionsMap {
  /**
   * @schema CompatibleVersionsMap#SourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CompatibleVersionsMap#TargetVersions
   */
  readonly targetVersions?: string[];

}

/**
 * @schema PackageVersionHistory
 */
export interface PackageVersionHistory {
  /**
   * @schema PackageVersionHistory#PackageVersion
   */
  readonly packageVersion?: string;

  /**
   * @schema PackageVersionHistory#CommitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema PackageVersionHistory#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * @schema UpgradeHistory
 */
export interface UpgradeHistory {
  /**
   * @schema UpgradeHistory#UpgradeName
   */
  readonly upgradeName?: string;

  /**
   * @schema UpgradeHistory#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema UpgradeHistory#UpgradeStatus
   */
  readonly upgradeStatus?: string;

  /**
   * @schema UpgradeHistory#StepsList
   */
  readonly stepsList?: UpgradeStepItem[];

}

/**
 * @schema DomainInfo
 */
export interface DomainInfo {
  /**
   * @schema DomainInfo#DomainName
   */
  readonly domainName?: string;

}

/**
 * @schema InboundCrossClusterSearchConnectionStatus
 */
export interface InboundCrossClusterSearchConnectionStatus {
  /**
   * @schema InboundCrossClusterSearchConnectionStatus#StatusCode
   */
  readonly statusCode?: string;

  /**
   * @schema InboundCrossClusterSearchConnectionStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema ErrorDetails
 */
export interface ErrorDetails {
  /**
   * @schema ErrorDetails#ErrorType
   */
  readonly errorType?: string;

  /**
   * @schema ErrorDetails#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ZoneAwarenessConfig
 */
export interface ZoneAwarenessConfig {
  /**
   * @schema ZoneAwarenessConfig#AvailabilityZoneCount
   */
  readonly availabilityZoneCount?: number;

}

/**
 * @schema MasterUserOptions
 */
export interface MasterUserOptions {
  /**
   * @schema MasterUserOptions#MasterUserARN
   */
  readonly masterUserArn?: string;

  /**
   * @schema MasterUserOptions#MasterUserName
   */
  readonly masterUserName?: string;

  /**
   * @schema MasterUserOptions#MasterUserPassword
   */
  readonly masterUserPassword?: string;

}

/**
 * @schema SamlOptionsInput
 */
export interface SamlOptionsInput {
  /**
   * @schema SamlOptionsInput#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SamlOptionsInput#Idp
   */
  readonly idp?: SamlIdp;

  /**
   * @schema SamlOptionsInput#MasterUserName
   */
  readonly masterUserName?: string;

  /**
   * @schema SamlOptionsInput#MasterBackendRole
   */
  readonly masterBackendRole?: string;

  /**
   * @schema SamlOptionsInput#SubjectKey
   */
  readonly subjectKey?: string;

  /**
   * @schema SamlOptionsInput#RolesKey
   */
  readonly rolesKey?: string;

  /**
   * @schema SamlOptionsInput#SessionTimeoutMinutes
   */
  readonly sessionTimeoutMinutes?: number;

}

/**
 * @schema VpcDerivedInfo
 */
export interface VpcDerivedInfo {
  /**
   * @schema VpcDerivedInfo#VPCId
   */
  readonly vpcId?: string;

  /**
   * @schema VpcDerivedInfo#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema VpcDerivedInfo#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema VpcDerivedInfo#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema AdvancedSecurityOptions
 */
export interface AdvancedSecurityOptions {
  /**
   * @schema AdvancedSecurityOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AdvancedSecurityOptions#InternalUserDatabaseEnabled
   */
  readonly internalUserDatabaseEnabled?: boolean;

  /**
   * @schema AdvancedSecurityOptions#SAMLOptions
   */
  readonly samlOptions?: SamlOptionsOutput;

}

/**
 * @schema ElasticsearchVersionStatus
 */
export interface ElasticsearchVersionStatus {
  /**
   * @schema ElasticsearchVersionStatus#Options
   */
  readonly options: string;

  /**
   * @schema ElasticsearchVersionStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema ElasticsearchClusterConfigStatus
 */
export interface ElasticsearchClusterConfigStatus {
  /**
   * @schema ElasticsearchClusterConfigStatus#Options
   */
  readonly options: ElasticsearchClusterConfig;

  /**
   * @schema ElasticsearchClusterConfigStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema EbsOptionsStatus
 */
export interface EbsOptionsStatus {
  /**
   * @schema EbsOptionsStatus#Options
   */
  readonly options: EbsOptions;

  /**
   * @schema EbsOptionsStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema AccessPoliciesStatus
 */
export interface AccessPoliciesStatus {
  /**
   * @schema AccessPoliciesStatus#Options
   */
  readonly options: string;

  /**
   * @schema AccessPoliciesStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema SnapshotOptionsStatus
 */
export interface SnapshotOptionsStatus {
  /**
   * @schema SnapshotOptionsStatus#Options
   */
  readonly options: SnapshotOptions;

  /**
   * @schema SnapshotOptionsStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema VpcDerivedInfoStatus
 */
export interface VpcDerivedInfoStatus {
  /**
   * @schema VpcDerivedInfoStatus#Options
   */
  readonly options: VpcDerivedInfo;

  /**
   * @schema VpcDerivedInfoStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema CognitoOptionsStatus
 */
export interface CognitoOptionsStatus {
  /**
   * @schema CognitoOptionsStatus#Options
   */
  readonly options: CognitoOptions;

  /**
   * @schema CognitoOptionsStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema EncryptionAtRestOptionsStatus
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * @schema EncryptionAtRestOptionsStatus#Options
   */
  readonly options: EncryptionAtRestOptions;

  /**
   * @schema EncryptionAtRestOptionsStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema NodeToNodeEncryptionOptionsStatus
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * @schema NodeToNodeEncryptionOptionsStatus#Options
   */
  readonly options: NodeToNodeEncryptionOptions;

  /**
   * @schema NodeToNodeEncryptionOptionsStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema AdvancedOptionsStatus
 */
export interface AdvancedOptionsStatus {
  /**
   * @schema AdvancedOptionsStatus#Options
   */
  readonly options: { [key: string]: string };

  /**
   * @schema AdvancedOptionsStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema LogPublishingOptionsStatus
 */
export interface LogPublishingOptionsStatus {
  /**
   * @schema LogPublishingOptionsStatus#Options
   */
  readonly options?: { [key: string]: LogPublishingOption };

  /**
   * @schema LogPublishingOptionsStatus#Status
   */
  readonly status?: OptionStatus;

}

/**
 * @schema DomainEndpointOptionsStatus
 */
export interface DomainEndpointOptionsStatus {
  /**
   * @schema DomainEndpointOptionsStatus#Options
   */
  readonly options: DomainEndpointOptions;

  /**
   * @schema DomainEndpointOptionsStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema AdvancedSecurityOptionsStatus
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * @schema AdvancedSecurityOptionsStatus#Options
   */
  readonly options: AdvancedSecurityOptions;

  /**
   * @schema AdvancedSecurityOptionsStatus#Status
   */
  readonly status: OptionStatus;

}

/**
 * @schema StorageType
 */
export interface StorageType {
  /**
   * @schema StorageType#StorageTypeName
   */
  readonly storageTypeName?: string;

  /**
   * @schema StorageType#StorageSubTypeName
   */
  readonly storageSubTypeName?: string;

  /**
   * @schema StorageType#StorageTypeLimits
   */
  readonly storageTypeLimits?: StorageTypeLimit[];

}

/**
 * @schema InstanceLimits
 */
export interface InstanceLimits {
  /**
   * @schema InstanceLimits#InstanceCountLimits
   */
  readonly instanceCountLimits?: InstanceCountLimits;

}

/**
 * @schema AdditionalLimit
 */
export interface AdditionalLimit {
  /**
   * @schema AdditionalLimit#LimitName
   */
  readonly limitName?: string;

  /**
   * @schema AdditionalLimit#LimitValues
   */
  readonly limitValues?: string[];

}

/**
 * @schema RecurringCharge
 */
export interface RecurringCharge {
  /**
   * @schema RecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema RecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * @schema UpgradeStepItem
 */
export interface UpgradeStepItem {
  /**
   * @schema UpgradeStepItem#UpgradeStep
   */
  readonly upgradeStep?: string;

  /**
   * @schema UpgradeStepItem#UpgradeStepStatus
   */
  readonly upgradeStepStatus?: string;

  /**
   * @schema UpgradeStepItem#Issues
   */
  readonly issues?: string[];

  /**
   * @schema UpgradeStepItem#ProgressPercent
   */
  readonly progressPercent?: number;

}

/**
 * @schema SamlIdp
 */
export interface SamlIdp {
  /**
   * @schema SamlIdp#MetadataContent
   */
  readonly metadataContent: string;

  /**
   * @schema SamlIdp#EntityId
   */
  readonly entityId: string;

}

/**
 * @schema SamlOptionsOutput
 */
export interface SamlOptionsOutput {
  /**
   * @schema SamlOptionsOutput#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SamlOptionsOutput#Idp
   */
  readonly idp?: SamlIdp;

  /**
   * @schema SamlOptionsOutput#SubjectKey
   */
  readonly subjectKey?: string;

  /**
   * @schema SamlOptionsOutput#RolesKey
   */
  readonly rolesKey?: string;

  /**
   * @schema SamlOptionsOutput#SessionTimeoutMinutes
   */
  readonly sessionTimeoutMinutes?: number;

}

/**
 * @schema OptionStatus
 */
export interface OptionStatus {
  /**
   * @schema OptionStatus#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema OptionStatus#UpdateDate
   */
  readonly updateDate: string;

  /**
   * @schema OptionStatus#UpdateVersion
   */
  readonly updateVersion?: number;

  /**
   * @schema OptionStatus#State
   */
  readonly state: string;

  /**
   * @schema OptionStatus#PendingDeletion
   */
  readonly pendingDeletion?: boolean;

}

/**
 * @schema StorageTypeLimit
 */
export interface StorageTypeLimit {
  /**
   * @schema StorageTypeLimit#LimitName
   */
  readonly limitName?: string;

  /**
   * @schema StorageTypeLimit#LimitValues
   */
  readonly limitValues?: string[];

}

/**
 * @schema InstanceCountLimits
 */
export interface InstanceCountLimits {
  /**
   * @schema InstanceCountLimits#MinimumInstanceCount
   */
  readonly minimumInstanceCount?: number;

  /**
   * @schema InstanceCountLimits#MaximumInstanceCount
   */
  readonly maximumInstanceCount?: number;

}
