/**
 * @schema NetworkManagerAssociateCustomerGatewayRequest
 */
export interface NetworkManagerAssociateCustomerGatewayRequest {
  /**
   * @schema NetworkManagerAssociateCustomerGatewayRequest#CustomerGatewayArn
   */
  readonly customerGatewayArn: string;

  /**
   * @schema NetworkManagerAssociateCustomerGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerAssociateCustomerGatewayRequest#DeviceId
   */
  readonly deviceId: string;

  /**
   * @schema NetworkManagerAssociateCustomerGatewayRequest#LinkId
   */
  readonly linkId?: string;

}

/**
 * @schema NetworkManagerAssociateCustomerGatewayResponse
 */
export interface NetworkManagerAssociateCustomerGatewayResponse {
  /**
   * @schema NetworkManagerAssociateCustomerGatewayResponse#CustomerGatewayAssociation
   */
  readonly customerGatewayAssociation?: NetworkManagerCustomerGatewayAssociation;

}

/**
 * @schema NetworkManagerAssociateLinkRequest
 */
export interface NetworkManagerAssociateLinkRequest {
  /**
   * @schema NetworkManagerAssociateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerAssociateLinkRequest#DeviceId
   */
  readonly deviceId: string;

  /**
   * @schema NetworkManagerAssociateLinkRequest#LinkId
   */
  readonly linkId: string;

}

/**
 * @schema NetworkManagerAssociateLinkResponse
 */
export interface NetworkManagerAssociateLinkResponse {
  /**
   * @schema NetworkManagerAssociateLinkResponse#LinkAssociation
   */
  readonly linkAssociation?: NetworkManagerLinkAssociation;

}

/**
 * @schema NetworkManagerCreateDeviceRequest
 */
export interface NetworkManagerCreateDeviceRequest {
  /**
   * @schema NetworkManagerCreateDeviceRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerCreateDeviceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerCreateDeviceRequest#Type
   */
  readonly type?: string;

  /**
   * @schema NetworkManagerCreateDeviceRequest#Vendor
   */
  readonly vendor?: string;

  /**
   * @schema NetworkManagerCreateDeviceRequest#Model
   */
  readonly model?: string;

  /**
   * @schema NetworkManagerCreateDeviceRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema NetworkManagerCreateDeviceRequest#Location
   */
  readonly location?: NetworkManagerLocation;

  /**
   * @schema NetworkManagerCreateDeviceRequest#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema NetworkManagerCreateDeviceRequest#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * @schema NetworkManagerCreateDeviceResponse
 */
export interface NetworkManagerCreateDeviceResponse {
  /**
   * @schema NetworkManagerCreateDeviceResponse#Device
   */
  readonly device?: NetworkManagerDevice;

}

/**
 * @schema NetworkManagerCreateGlobalNetworkRequest
 */
export interface NetworkManagerCreateGlobalNetworkRequest {
  /**
   * @schema NetworkManagerCreateGlobalNetworkRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerCreateGlobalNetworkRequest#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * @schema NetworkManagerCreateGlobalNetworkResponse
 */
export interface NetworkManagerCreateGlobalNetworkResponse {
  /**
   * @schema NetworkManagerCreateGlobalNetworkResponse#GlobalNetwork
   */
  readonly globalNetwork?: NetworkManagerGlobalNetwork;

}

/**
 * @schema NetworkManagerCreateLinkRequest
 */
export interface NetworkManagerCreateLinkRequest {
  /**
   * @schema NetworkManagerCreateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerCreateLinkRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerCreateLinkRequest#Type
   */
  readonly type?: string;

  /**
   * @schema NetworkManagerCreateLinkRequest#Bandwidth
   */
  readonly bandwidth: NetworkManagerBandwidth;

  /**
   * @schema NetworkManagerCreateLinkRequest#Provider
   */
  readonly provider?: string;

  /**
   * @schema NetworkManagerCreateLinkRequest#SiteId
   */
  readonly siteId: string;

  /**
   * @schema NetworkManagerCreateLinkRequest#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * @schema NetworkManagerCreateLinkResponse
 */
export interface NetworkManagerCreateLinkResponse {
  /**
   * @schema NetworkManagerCreateLinkResponse#Link
   */
  readonly link?: NetworkManagerLink;

}

/**
 * @schema NetworkManagerCreateSiteRequest
 */
export interface NetworkManagerCreateSiteRequest {
  /**
   * @schema NetworkManagerCreateSiteRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerCreateSiteRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerCreateSiteRequest#Location
   */
  readonly location?: NetworkManagerLocation;

  /**
   * @schema NetworkManagerCreateSiteRequest#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * @schema NetworkManagerCreateSiteResponse
 */
export interface NetworkManagerCreateSiteResponse {
  /**
   * @schema NetworkManagerCreateSiteResponse#Site
   */
  readonly site?: NetworkManagerSite;

}

/**
 * @schema NetworkManagerDeleteDeviceRequest
 */
export interface NetworkManagerDeleteDeviceRequest {
  /**
   * @schema NetworkManagerDeleteDeviceRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerDeleteDeviceRequest#DeviceId
   */
  readonly deviceId: string;

}

/**
 * @schema NetworkManagerDeleteDeviceResponse
 */
export interface NetworkManagerDeleteDeviceResponse {
  /**
   * @schema NetworkManagerDeleteDeviceResponse#Device
   */
  readonly device?: NetworkManagerDevice;

}

/**
 * @schema NetworkManagerDeleteGlobalNetworkRequest
 */
export interface NetworkManagerDeleteGlobalNetworkRequest {
  /**
   * @schema NetworkManagerDeleteGlobalNetworkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

}

/**
 * @schema NetworkManagerDeleteGlobalNetworkResponse
 */
export interface NetworkManagerDeleteGlobalNetworkResponse {
  /**
   * @schema NetworkManagerDeleteGlobalNetworkResponse#GlobalNetwork
   */
  readonly globalNetwork?: NetworkManagerGlobalNetwork;

}

/**
 * @schema NetworkManagerDeleteLinkRequest
 */
export interface NetworkManagerDeleteLinkRequest {
  /**
   * @schema NetworkManagerDeleteLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerDeleteLinkRequest#LinkId
   */
  readonly linkId: string;

}

/**
 * @schema NetworkManagerDeleteLinkResponse
 */
export interface NetworkManagerDeleteLinkResponse {
  /**
   * @schema NetworkManagerDeleteLinkResponse#Link
   */
  readonly link?: NetworkManagerLink;

}

/**
 * @schema NetworkManagerDeleteSiteRequest
 */
export interface NetworkManagerDeleteSiteRequest {
  /**
   * @schema NetworkManagerDeleteSiteRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerDeleteSiteRequest#SiteId
   */
  readonly siteId: string;

}

/**
 * @schema NetworkManagerDeleteSiteResponse
 */
export interface NetworkManagerDeleteSiteResponse {
  /**
   * @schema NetworkManagerDeleteSiteResponse#Site
   */
  readonly site?: NetworkManagerSite;

}

/**
 * @schema NetworkManagerDeregisterTransitGatewayRequest
 */
export interface NetworkManagerDeregisterTransitGatewayRequest {
  /**
   * @schema NetworkManagerDeregisterTransitGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerDeregisterTransitGatewayRequest#TransitGatewayArn
   */
  readonly transitGatewayArn: string;

}

/**
 * @schema NetworkManagerDeregisterTransitGatewayResponse
 */
export interface NetworkManagerDeregisterTransitGatewayResponse {
  /**
   * @schema NetworkManagerDeregisterTransitGatewayResponse#TransitGatewayRegistration
   */
  readonly transitGatewayRegistration?: NetworkManagerTransitGatewayRegistration;

}

/**
 * @schema NetworkManagerDescribeGlobalNetworksRequest
 */
export interface NetworkManagerDescribeGlobalNetworksRequest {
  /**
   * @schema NetworkManagerDescribeGlobalNetworksRequest#GlobalNetworkIds
   */
  readonly globalNetworkIds?: string[];

  /**
   * @schema NetworkManagerDescribeGlobalNetworksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NetworkManagerDescribeGlobalNetworksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerDescribeGlobalNetworksResponse
 */
export interface NetworkManagerDescribeGlobalNetworksResponse {
  /**
   * @schema NetworkManagerDescribeGlobalNetworksResponse#GlobalNetworks
   */
  readonly globalNetworks?: NetworkManagerGlobalNetwork[];

  /**
   * @schema NetworkManagerDescribeGlobalNetworksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerDisassociateCustomerGatewayRequest
 */
export interface NetworkManagerDisassociateCustomerGatewayRequest {
  /**
   * @schema NetworkManagerDisassociateCustomerGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerDisassociateCustomerGatewayRequest#CustomerGatewayArn
   */
  readonly customerGatewayArn: string;

}

/**
 * @schema NetworkManagerDisassociateCustomerGatewayResponse
 */
export interface NetworkManagerDisassociateCustomerGatewayResponse {
  /**
   * @schema NetworkManagerDisassociateCustomerGatewayResponse#CustomerGatewayAssociation
   */
  readonly customerGatewayAssociation?: NetworkManagerCustomerGatewayAssociation;

}

/**
 * @schema NetworkManagerDisassociateLinkRequest
 */
export interface NetworkManagerDisassociateLinkRequest {
  /**
   * @schema NetworkManagerDisassociateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerDisassociateLinkRequest#DeviceId
   */
  readonly deviceId: string;

  /**
   * @schema NetworkManagerDisassociateLinkRequest#LinkId
   */
  readonly linkId: string;

}

/**
 * @schema NetworkManagerDisassociateLinkResponse
 */
export interface NetworkManagerDisassociateLinkResponse {
  /**
   * @schema NetworkManagerDisassociateLinkResponse#LinkAssociation
   */
  readonly linkAssociation?: NetworkManagerLinkAssociation;

}

/**
 * @schema NetworkManagerGetCustomerGatewayAssociationsRequest
 */
export interface NetworkManagerGetCustomerGatewayAssociationsRequest {
  /**
   * @schema NetworkManagerGetCustomerGatewayAssociationsRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerGetCustomerGatewayAssociationsRequest#CustomerGatewayArns
   */
  readonly customerGatewayArns?: string[];

  /**
   * @schema NetworkManagerGetCustomerGatewayAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NetworkManagerGetCustomerGatewayAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetCustomerGatewayAssociationsResponse
 */
export interface NetworkManagerGetCustomerGatewayAssociationsResponse {
  /**
   * @schema NetworkManagerGetCustomerGatewayAssociationsResponse#CustomerGatewayAssociations
   */
  readonly customerGatewayAssociations?: NetworkManagerCustomerGatewayAssociation[];

  /**
   * @schema NetworkManagerGetCustomerGatewayAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetDevicesRequest
 */
export interface NetworkManagerGetDevicesRequest {
  /**
   * @schema NetworkManagerGetDevicesRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerGetDevicesRequest#DeviceIds
   */
  readonly deviceIds?: string[];

  /**
   * @schema NetworkManagerGetDevicesRequest#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema NetworkManagerGetDevicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NetworkManagerGetDevicesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetDevicesResponse
 */
export interface NetworkManagerGetDevicesResponse {
  /**
   * @schema NetworkManagerGetDevicesResponse#Devices
   */
  readonly devices?: NetworkManagerDevice[];

  /**
   * @schema NetworkManagerGetDevicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetLinkAssociationsRequest
 */
export interface NetworkManagerGetLinkAssociationsRequest {
  /**
   * @schema NetworkManagerGetLinkAssociationsRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerGetLinkAssociationsRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerGetLinkAssociationsRequest#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema NetworkManagerGetLinkAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NetworkManagerGetLinkAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetLinkAssociationsResponse
 */
export interface NetworkManagerGetLinkAssociationsResponse {
  /**
   * @schema NetworkManagerGetLinkAssociationsResponse#LinkAssociations
   */
  readonly linkAssociations?: NetworkManagerLinkAssociation[];

  /**
   * @schema NetworkManagerGetLinkAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetLinksRequest
 */
export interface NetworkManagerGetLinksRequest {
  /**
   * @schema NetworkManagerGetLinksRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerGetLinksRequest#LinkIds
   */
  readonly linkIds?: string[];

  /**
   * @schema NetworkManagerGetLinksRequest#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema NetworkManagerGetLinksRequest#Type
   */
  readonly type?: string;

  /**
   * @schema NetworkManagerGetLinksRequest#Provider
   */
  readonly provider?: string;

  /**
   * @schema NetworkManagerGetLinksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NetworkManagerGetLinksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetLinksResponse
 */
export interface NetworkManagerGetLinksResponse {
  /**
   * @schema NetworkManagerGetLinksResponse#Links
   */
  readonly links?: NetworkManagerLink[];

  /**
   * @schema NetworkManagerGetLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetSitesRequest
 */
export interface NetworkManagerGetSitesRequest {
  /**
   * @schema NetworkManagerGetSitesRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerGetSitesRequest#SiteIds
   */
  readonly siteIds?: string[];

  /**
   * @schema NetworkManagerGetSitesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NetworkManagerGetSitesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetSitesResponse
 */
export interface NetworkManagerGetSitesResponse {
  /**
   * @schema NetworkManagerGetSitesResponse#Sites
   */
  readonly sites?: NetworkManagerSite[];

  /**
   * @schema NetworkManagerGetSitesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetTransitGatewayRegistrationsRequest
 */
export interface NetworkManagerGetTransitGatewayRegistrationsRequest {
  /**
   * @schema NetworkManagerGetTransitGatewayRegistrationsRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerGetTransitGatewayRegistrationsRequest#TransitGatewayArns
   */
  readonly transitGatewayArns?: string[];

  /**
   * @schema NetworkManagerGetTransitGatewayRegistrationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NetworkManagerGetTransitGatewayRegistrationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerGetTransitGatewayRegistrationsResponse
 */
export interface NetworkManagerGetTransitGatewayRegistrationsResponse {
  /**
   * @schema NetworkManagerGetTransitGatewayRegistrationsResponse#TransitGatewayRegistrations
   */
  readonly transitGatewayRegistrations?: NetworkManagerTransitGatewayRegistration[];

  /**
   * @schema NetworkManagerGetTransitGatewayRegistrationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NetworkManagerListTagsForResourceRequest
 */
export interface NetworkManagerListTagsForResourceRequest {
  /**
   * @schema NetworkManagerListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema NetworkManagerListTagsForResourceResponse
 */
export interface NetworkManagerListTagsForResourceResponse {
  /**
   * @schema NetworkManagerListTagsForResourceResponse#TagList
   */
  readonly tagList?: NetworkManagerTag[];

}

/**
 * @schema NetworkManagerRegisterTransitGatewayRequest
 */
export interface NetworkManagerRegisterTransitGatewayRequest {
  /**
   * @schema NetworkManagerRegisterTransitGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerRegisterTransitGatewayRequest#TransitGatewayArn
   */
  readonly transitGatewayArn: string;

}

/**
 * @schema NetworkManagerRegisterTransitGatewayResponse
 */
export interface NetworkManagerRegisterTransitGatewayResponse {
  /**
   * @schema NetworkManagerRegisterTransitGatewayResponse#TransitGatewayRegistration
   */
  readonly transitGatewayRegistration?: NetworkManagerTransitGatewayRegistration;

}

/**
 * @schema NetworkManagerTagResourceRequest
 */
export interface NetworkManagerTagResourceRequest {
  /**
   * @schema NetworkManagerTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema NetworkManagerTagResourceRequest#Tags
   */
  readonly tags: NetworkManagerTag[];

}

/**
 * @schema NetworkManagerTagResourceResponse
 */
export interface NetworkManagerTagResourceResponse {
}

/**
 * @schema NetworkManagerUntagResourceRequest
 */
export interface NetworkManagerUntagResourceRequest {
  /**
   * @schema NetworkManagerUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema NetworkManagerUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema NetworkManagerUntagResourceResponse
 */
export interface NetworkManagerUntagResourceResponse {
}

/**
 * @schema NetworkManagerUpdateDeviceRequest
 */
export interface NetworkManagerUpdateDeviceRequest {
  /**
   * @schema NetworkManagerUpdateDeviceRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerUpdateDeviceRequest#DeviceId
   */
  readonly deviceId: string;

  /**
   * @schema NetworkManagerUpdateDeviceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerUpdateDeviceRequest#Type
   */
  readonly type?: string;

  /**
   * @schema NetworkManagerUpdateDeviceRequest#Vendor
   */
  readonly vendor?: string;

  /**
   * @schema NetworkManagerUpdateDeviceRequest#Model
   */
  readonly model?: string;

  /**
   * @schema NetworkManagerUpdateDeviceRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema NetworkManagerUpdateDeviceRequest#Location
   */
  readonly location?: NetworkManagerLocation;

  /**
   * @schema NetworkManagerUpdateDeviceRequest#SiteId
   */
  readonly siteId?: string;

}

/**
 * @schema NetworkManagerUpdateDeviceResponse
 */
export interface NetworkManagerUpdateDeviceResponse {
  /**
   * @schema NetworkManagerUpdateDeviceResponse#Device
   */
  readonly device?: NetworkManagerDevice;

}

/**
 * @schema NetworkManagerUpdateGlobalNetworkRequest
 */
export interface NetworkManagerUpdateGlobalNetworkRequest {
  /**
   * @schema NetworkManagerUpdateGlobalNetworkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerUpdateGlobalNetworkRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema NetworkManagerUpdateGlobalNetworkResponse
 */
export interface NetworkManagerUpdateGlobalNetworkResponse {
  /**
   * @schema NetworkManagerUpdateGlobalNetworkResponse#GlobalNetwork
   */
  readonly globalNetwork?: NetworkManagerGlobalNetwork;

}

/**
 * @schema NetworkManagerUpdateLinkRequest
 */
export interface NetworkManagerUpdateLinkRequest {
  /**
   * @schema NetworkManagerUpdateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerUpdateLinkRequest#LinkId
   */
  readonly linkId: string;

  /**
   * @schema NetworkManagerUpdateLinkRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerUpdateLinkRequest#Type
   */
  readonly type?: string;

  /**
   * @schema NetworkManagerUpdateLinkRequest#Bandwidth
   */
  readonly bandwidth?: NetworkManagerBandwidth;

  /**
   * @schema NetworkManagerUpdateLinkRequest#Provider
   */
  readonly provider?: string;

}

/**
 * @schema NetworkManagerUpdateLinkResponse
 */
export interface NetworkManagerUpdateLinkResponse {
  /**
   * @schema NetworkManagerUpdateLinkResponse#Link
   */
  readonly link?: NetworkManagerLink;

}

/**
 * @schema NetworkManagerUpdateSiteRequest
 */
export interface NetworkManagerUpdateSiteRequest {
  /**
   * @schema NetworkManagerUpdateSiteRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema NetworkManagerUpdateSiteRequest#SiteId
   */
  readonly siteId: string;

  /**
   * @schema NetworkManagerUpdateSiteRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerUpdateSiteRequest#Location
   */
  readonly location?: NetworkManagerLocation;

}

/**
 * @schema NetworkManagerUpdateSiteResponse
 */
export interface NetworkManagerUpdateSiteResponse {
  /**
   * @schema NetworkManagerUpdateSiteResponse#Site
   */
  readonly site?: NetworkManagerSite;

}

/**
 * @schema NetworkManagerCustomerGatewayAssociation
 */
export interface NetworkManagerCustomerGatewayAssociation {
  /**
   * @schema NetworkManagerCustomerGatewayAssociation#CustomerGatewayArn
   */
  readonly customerGatewayArn?: string;

  /**
   * @schema NetworkManagerCustomerGatewayAssociation#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerCustomerGatewayAssociation#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerCustomerGatewayAssociation#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema NetworkManagerCustomerGatewayAssociation#State
   */
  readonly state?: string;

}

/**
 * @schema NetworkManagerLinkAssociation
 */
export interface NetworkManagerLinkAssociation {
  /**
   * @schema NetworkManagerLinkAssociation#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerLinkAssociation#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerLinkAssociation#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema NetworkManagerLinkAssociation#LinkAssociationState
   */
  readonly linkAssociationState?: string;

}

/**
 * @schema NetworkManagerLocation
 */
export interface NetworkManagerLocation {
  /**
   * @schema NetworkManagerLocation#Address
   */
  readonly address?: string;

  /**
   * @schema NetworkManagerLocation#Latitude
   */
  readonly latitude?: string;

  /**
   * @schema NetworkManagerLocation#Longitude
   */
  readonly longitude?: string;

}

/**
 * @schema NetworkManagerTag
 */
export interface NetworkManagerTag {
  /**
   * @schema NetworkManagerTag#Key
   */
  readonly key?: string;

  /**
   * @schema NetworkManagerTag#Value
   */
  readonly value?: string;

}

/**
 * @schema NetworkManagerDevice
 */
export interface NetworkManagerDevice {
  /**
   * @schema NetworkManagerDevice#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerDevice#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema NetworkManagerDevice#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerDevice#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerDevice#Type
   */
  readonly type?: string;

  /**
   * @schema NetworkManagerDevice#Vendor
   */
  readonly vendor?: string;

  /**
   * @schema NetworkManagerDevice#Model
   */
  readonly model?: string;

  /**
   * @schema NetworkManagerDevice#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema NetworkManagerDevice#Location
   */
  readonly location?: NetworkManagerLocation;

  /**
   * @schema NetworkManagerDevice#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema NetworkManagerDevice#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema NetworkManagerDevice#State
   */
  readonly state?: string;

  /**
   * @schema NetworkManagerDevice#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * @schema NetworkManagerGlobalNetwork
 */
export interface NetworkManagerGlobalNetwork {
  /**
   * @schema NetworkManagerGlobalNetwork#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerGlobalNetwork#GlobalNetworkArn
   */
  readonly globalNetworkArn?: string;

  /**
   * @schema NetworkManagerGlobalNetwork#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerGlobalNetwork#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema NetworkManagerGlobalNetwork#State
   */
  readonly state?: string;

  /**
   * @schema NetworkManagerGlobalNetwork#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * @schema NetworkManagerBandwidth
 */
export interface NetworkManagerBandwidth {
  /**
   * @schema NetworkManagerBandwidth#UploadSpeed
   */
  readonly uploadSpeed?: number;

  /**
   * @schema NetworkManagerBandwidth#DownloadSpeed
   */
  readonly downloadSpeed?: number;

}

/**
 * @schema NetworkManagerLink
 */
export interface NetworkManagerLink {
  /**
   * @schema NetworkManagerLink#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema NetworkManagerLink#LinkArn
   */
  readonly linkArn?: string;

  /**
   * @schema NetworkManagerLink#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerLink#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema NetworkManagerLink#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerLink#Type
   */
  readonly type?: string;

  /**
   * @schema NetworkManagerLink#Bandwidth
   */
  readonly bandwidth?: NetworkManagerBandwidth;

  /**
   * @schema NetworkManagerLink#Provider
   */
  readonly provider?: string;

  /**
   * @schema NetworkManagerLink#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema NetworkManagerLink#State
   */
  readonly state?: string;

  /**
   * @schema NetworkManagerLink#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * @schema NetworkManagerSite
 */
export interface NetworkManagerSite {
  /**
   * @schema NetworkManagerSite#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema NetworkManagerSite#SiteArn
   */
  readonly siteArn?: string;

  /**
   * @schema NetworkManagerSite#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerSite#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerSite#Location
   */
  readonly location?: NetworkManagerLocation;

  /**
   * @schema NetworkManagerSite#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema NetworkManagerSite#State
   */
  readonly state?: string;

  /**
   * @schema NetworkManagerSite#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * @schema NetworkManagerTransitGatewayRegistration
 */
export interface NetworkManagerTransitGatewayRegistration {
  /**
   * @schema NetworkManagerTransitGatewayRegistration#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerTransitGatewayRegistration#TransitGatewayArn
   */
  readonly transitGatewayArn?: string;

  /**
   * @schema NetworkManagerTransitGatewayRegistration#State
   */
  readonly state?: NetworkManagerTransitGatewayRegistrationStateReason;

}

/**
 * @schema NetworkManagerTransitGatewayRegistrationStateReason
 */
export interface NetworkManagerTransitGatewayRegistrationStateReason {
  /**
   * @schema NetworkManagerTransitGatewayRegistrationStateReason#Code
   */
  readonly code?: string;

  /**
   * @schema NetworkManagerTransitGatewayRegistrationStateReason#Message
   */
  readonly message?: string;

}
