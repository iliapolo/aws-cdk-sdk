/**
 * @schema AssociateCustomerGatewayRequest
 */
export interface AssociateCustomerGatewayRequest {
  /**
   * @schema AssociateCustomerGatewayRequest#CustomerGatewayArn
   */
  readonly customerGatewayArn: string;

  /**
   * @schema AssociateCustomerGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema AssociateCustomerGatewayRequest#DeviceId
   */
  readonly deviceId: string;

  /**
   * @schema AssociateCustomerGatewayRequest#LinkId
   */
  readonly linkId?: string;

}

/**
 * @schema AssociateCustomerGatewayResponse
 */
export interface AssociateCustomerGatewayResponse {
  /**
   * @schema AssociateCustomerGatewayResponse#CustomerGatewayAssociation
   */
  readonly customerGatewayAssociation?: CustomerGatewayAssociation;

}

/**
 * @schema AssociateLinkRequest
 */
export interface AssociateLinkRequest {
  /**
   * @schema AssociateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema AssociateLinkRequest#DeviceId
   */
  readonly deviceId: string;

  /**
   * @schema AssociateLinkRequest#LinkId
   */
  readonly linkId: string;

}

/**
 * @schema AssociateLinkResponse
 */
export interface AssociateLinkResponse {
  /**
   * @schema AssociateLinkResponse#LinkAssociation
   */
  readonly linkAssociation?: LinkAssociation;

}

/**
 * @schema CreateDeviceRequest
 */
export interface CreateDeviceRequest {
  /**
   * @schema CreateDeviceRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema CreateDeviceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateDeviceRequest#Type
   */
  readonly type?: string;

  /**
   * @schema CreateDeviceRequest#Vendor
   */
  readonly vendor?: string;

  /**
   * @schema CreateDeviceRequest#Model
   */
  readonly model?: string;

  /**
   * @schema CreateDeviceRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema CreateDeviceRequest#Location
   */
  readonly location?: Location;

  /**
   * @schema CreateDeviceRequest#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema CreateDeviceRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDeviceResponse
 */
export interface CreateDeviceResponse {
  /**
   * @schema CreateDeviceResponse#Device
   */
  readonly device?: Device;

}

/**
 * @schema CreateGlobalNetworkRequest
 */
export interface CreateGlobalNetworkRequest {
  /**
   * @schema CreateGlobalNetworkRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateGlobalNetworkRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateGlobalNetworkResponse
 */
export interface CreateGlobalNetworkResponse {
  /**
   * @schema CreateGlobalNetworkResponse#GlobalNetwork
   */
  readonly globalNetwork?: GlobalNetwork;

}

/**
 * @schema CreateLinkRequest
 */
export interface CreateLinkRequest {
  /**
   * @schema CreateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema CreateLinkRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateLinkRequest#Type
   */
  readonly type?: string;

  /**
   * @schema CreateLinkRequest#Bandwidth
   */
  readonly bandwidth: Bandwidth;

  /**
   * @schema CreateLinkRequest#Provider
   */
  readonly provider?: string;

  /**
   * @schema CreateLinkRequest#SiteId
   */
  readonly siteId: string;

  /**
   * @schema CreateLinkRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateLinkResponse
 */
export interface CreateLinkResponse {
  /**
   * @schema CreateLinkResponse#Link
   */
  readonly link?: Link;

}

/**
 * @schema CreateSiteRequest
 */
export interface CreateSiteRequest {
  /**
   * @schema CreateSiteRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema CreateSiteRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateSiteRequest#Location
   */
  readonly location?: Location;

  /**
   * @schema CreateSiteRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSiteResponse
 */
export interface CreateSiteResponse {
  /**
   * @schema CreateSiteResponse#Site
   */
  readonly site?: Site;

}

/**
 * @schema DeleteDeviceRequest
 */
export interface DeleteDeviceRequest {
  /**
   * @schema DeleteDeviceRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema DeleteDeviceRequest#DeviceId
   */
  readonly deviceId: string;

}

/**
 * @schema DeleteDeviceResponse
 */
export interface DeleteDeviceResponse {
  /**
   * @schema DeleteDeviceResponse#Device
   */
  readonly device?: Device;

}

/**
 * @schema DeleteGlobalNetworkRequest
 */
export interface DeleteGlobalNetworkRequest {
  /**
   * @schema DeleteGlobalNetworkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

}

/**
 * @schema DeleteGlobalNetworkResponse
 */
export interface DeleteGlobalNetworkResponse {
  /**
   * @schema DeleteGlobalNetworkResponse#GlobalNetwork
   */
  readonly globalNetwork?: GlobalNetwork;

}

/**
 * @schema DeleteLinkRequest
 */
export interface DeleteLinkRequest {
  /**
   * @schema DeleteLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema DeleteLinkRequest#LinkId
   */
  readonly linkId: string;

}

/**
 * @schema DeleteLinkResponse
 */
export interface DeleteLinkResponse {
  /**
   * @schema DeleteLinkResponse#Link
   */
  readonly link?: Link;

}

/**
 * @schema DeleteSiteRequest
 */
export interface DeleteSiteRequest {
  /**
   * @schema DeleteSiteRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema DeleteSiteRequest#SiteId
   */
  readonly siteId: string;

}

/**
 * @schema DeleteSiteResponse
 */
export interface DeleteSiteResponse {
  /**
   * @schema DeleteSiteResponse#Site
   */
  readonly site?: Site;

}

/**
 * @schema DeregisterTransitGatewayRequest
 */
export interface DeregisterTransitGatewayRequest {
  /**
   * @schema DeregisterTransitGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema DeregisterTransitGatewayRequest#TransitGatewayArn
   */
  readonly transitGatewayArn: string;

}

/**
 * @schema DeregisterTransitGatewayResponse
 */
export interface DeregisterTransitGatewayResponse {
  /**
   * @schema DeregisterTransitGatewayResponse#TransitGatewayRegistration
   */
  readonly transitGatewayRegistration?: TransitGatewayRegistration;

}

/**
 * @schema DescribeGlobalNetworksRequest
 */
export interface DescribeGlobalNetworksRequest {
  /**
   * @schema DescribeGlobalNetworksRequest#GlobalNetworkIds
   */
  readonly globalNetworkIds?: string[];

  /**
   * @schema DescribeGlobalNetworksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeGlobalNetworksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeGlobalNetworksResponse
 */
export interface DescribeGlobalNetworksResponse {
  /**
   * @schema DescribeGlobalNetworksResponse#GlobalNetworks
   */
  readonly globalNetworks?: GlobalNetwork[];

  /**
   * @schema DescribeGlobalNetworksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DisassociateCustomerGatewayRequest
 */
export interface DisassociateCustomerGatewayRequest {
  /**
   * @schema DisassociateCustomerGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema DisassociateCustomerGatewayRequest#CustomerGatewayArn
   */
  readonly customerGatewayArn: string;

}

/**
 * @schema DisassociateCustomerGatewayResponse
 */
export interface DisassociateCustomerGatewayResponse {
  /**
   * @schema DisassociateCustomerGatewayResponse#CustomerGatewayAssociation
   */
  readonly customerGatewayAssociation?: CustomerGatewayAssociation;

}

/**
 * @schema DisassociateLinkRequest
 */
export interface DisassociateLinkRequest {
  /**
   * @schema DisassociateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema DisassociateLinkRequest#DeviceId
   */
  readonly deviceId: string;

  /**
   * @schema DisassociateLinkRequest#LinkId
   */
  readonly linkId: string;

}

/**
 * @schema DisassociateLinkResponse
 */
export interface DisassociateLinkResponse {
  /**
   * @schema DisassociateLinkResponse#LinkAssociation
   */
  readonly linkAssociation?: LinkAssociation;

}

/**
 * @schema GetCustomerGatewayAssociationsRequest
 */
export interface GetCustomerGatewayAssociationsRequest {
  /**
   * @schema GetCustomerGatewayAssociationsRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema GetCustomerGatewayAssociationsRequest#CustomerGatewayArns
   */
  readonly customerGatewayArns?: string[];

  /**
   * @schema GetCustomerGatewayAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetCustomerGatewayAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetCustomerGatewayAssociationsResponse
 */
export interface GetCustomerGatewayAssociationsResponse {
  /**
   * @schema GetCustomerGatewayAssociationsResponse#CustomerGatewayAssociations
   */
  readonly customerGatewayAssociations?: CustomerGatewayAssociation[];

  /**
   * @schema GetCustomerGatewayAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDevicesRequest
 */
export interface GetDevicesRequest {
  /**
   * @schema GetDevicesRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema GetDevicesRequest#DeviceIds
   */
  readonly deviceIds?: string[];

  /**
   * @schema GetDevicesRequest#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema GetDevicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetDevicesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDevicesResponse
 */
export interface GetDevicesResponse {
  /**
   * @schema GetDevicesResponse#Devices
   */
  readonly devices?: Device[];

  /**
   * @schema GetDevicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetLinkAssociationsRequest
 */
export interface GetLinkAssociationsRequest {
  /**
   * @schema GetLinkAssociationsRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema GetLinkAssociationsRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema GetLinkAssociationsRequest#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema GetLinkAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetLinkAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetLinkAssociationsResponse
 */
export interface GetLinkAssociationsResponse {
  /**
   * @schema GetLinkAssociationsResponse#LinkAssociations
   */
  readonly linkAssociations?: LinkAssociation[];

  /**
   * @schema GetLinkAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetLinksRequest
 */
export interface GetLinksRequest {
  /**
   * @schema GetLinksRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema GetLinksRequest#LinkIds
   */
  readonly linkIds?: string[];

  /**
   * @schema GetLinksRequest#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema GetLinksRequest#Type
   */
  readonly type?: string;

  /**
   * @schema GetLinksRequest#Provider
   */
  readonly provider?: string;

  /**
   * @schema GetLinksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetLinksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetLinksResponse
 */
export interface GetLinksResponse {
  /**
   * @schema GetLinksResponse#Links
   */
  readonly links?: Link[];

  /**
   * @schema GetLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetSitesRequest
 */
export interface GetSitesRequest {
  /**
   * @schema GetSitesRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema GetSitesRequest#SiteIds
   */
  readonly siteIds?: string[];

  /**
   * @schema GetSitesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetSitesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetSitesResponse
 */
export interface GetSitesResponse {
  /**
   * @schema GetSitesResponse#Sites
   */
  readonly sites?: Site[];

  /**
   * @schema GetSitesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTransitGatewayRegistrationsRequest
 */
export interface GetTransitGatewayRegistrationsRequest {
  /**
   * @schema GetTransitGatewayRegistrationsRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema GetTransitGatewayRegistrationsRequest#TransitGatewayArns
   */
  readonly transitGatewayArns?: string[];

  /**
   * @schema GetTransitGatewayRegistrationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetTransitGatewayRegistrationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTransitGatewayRegistrationsResponse
 */
export interface GetTransitGatewayRegistrationsResponse {
  /**
   * @schema GetTransitGatewayRegistrationsResponse#TransitGatewayRegistrations
   */
  readonly transitGatewayRegistrations?: TransitGatewayRegistration[];

  /**
   * @schema GetTransitGatewayRegistrationsResponse#NextToken
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
  readonly tagList?: Tag[];

}

/**
 * @schema RegisterTransitGatewayRequest
 */
export interface RegisterTransitGatewayRequest {
  /**
   * @schema RegisterTransitGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema RegisterTransitGatewayRequest#TransitGatewayArn
   */
  readonly transitGatewayArn: string;

}

/**
 * @schema RegisterTransitGatewayResponse
 */
export interface RegisterTransitGatewayResponse {
  /**
   * @schema RegisterTransitGatewayResponse#TransitGatewayRegistration
   */
  readonly transitGatewayRegistration?: TransitGatewayRegistration;

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
 * @schema UpdateDeviceRequest
 */
export interface UpdateDeviceRequest {
  /**
   * @schema UpdateDeviceRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema UpdateDeviceRequest#DeviceId
   */
  readonly deviceId: string;

  /**
   * @schema UpdateDeviceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateDeviceRequest#Type
   */
  readonly type?: string;

  /**
   * @schema UpdateDeviceRequest#Vendor
   */
  readonly vendor?: string;

  /**
   * @schema UpdateDeviceRequest#Model
   */
  readonly model?: string;

  /**
   * @schema UpdateDeviceRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema UpdateDeviceRequest#Location
   */
  readonly location?: Location;

  /**
   * @schema UpdateDeviceRequest#SiteId
   */
  readonly siteId?: string;

}

/**
 * @schema UpdateDeviceResponse
 */
export interface UpdateDeviceResponse {
  /**
   * @schema UpdateDeviceResponse#Device
   */
  readonly device?: Device;

}

/**
 * @schema UpdateGlobalNetworkRequest
 */
export interface UpdateGlobalNetworkRequest {
  /**
   * @schema UpdateGlobalNetworkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema UpdateGlobalNetworkRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateGlobalNetworkResponse
 */
export interface UpdateGlobalNetworkResponse {
  /**
   * @schema UpdateGlobalNetworkResponse#GlobalNetwork
   */
  readonly globalNetwork?: GlobalNetwork;

}

/**
 * @schema UpdateLinkRequest
 */
export interface UpdateLinkRequest {
  /**
   * @schema UpdateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema UpdateLinkRequest#LinkId
   */
  readonly linkId: string;

  /**
   * @schema UpdateLinkRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateLinkRequest#Type
   */
  readonly type?: string;

  /**
   * @schema UpdateLinkRequest#Bandwidth
   */
  readonly bandwidth?: Bandwidth;

  /**
   * @schema UpdateLinkRequest#Provider
   */
  readonly provider?: string;

}

/**
 * @schema UpdateLinkResponse
 */
export interface UpdateLinkResponse {
  /**
   * @schema UpdateLinkResponse#Link
   */
  readonly link?: Link;

}

/**
 * @schema UpdateSiteRequest
 */
export interface UpdateSiteRequest {
  /**
   * @schema UpdateSiteRequest#GlobalNetworkId
   */
  readonly globalNetworkId: string;

  /**
   * @schema UpdateSiteRequest#SiteId
   */
  readonly siteId: string;

  /**
   * @schema UpdateSiteRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateSiteRequest#Location
   */
  readonly location?: Location;

}

/**
 * @schema UpdateSiteResponse
 */
export interface UpdateSiteResponse {
  /**
   * @schema UpdateSiteResponse#Site
   */
  readonly site?: Site;

}

/**
 * @schema CustomerGatewayAssociation
 */
export interface CustomerGatewayAssociation {
  /**
   * @schema CustomerGatewayAssociation#CustomerGatewayArn
   */
  readonly customerGatewayArn?: string;

  /**
   * @schema CustomerGatewayAssociation#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema CustomerGatewayAssociation#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema CustomerGatewayAssociation#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema CustomerGatewayAssociation#State
   */
  readonly state?: string;

}

/**
 * @schema LinkAssociation
 */
export interface LinkAssociation {
  /**
   * @schema LinkAssociation#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema LinkAssociation#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LinkAssociation#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema LinkAssociation#LinkAssociationState
   */
  readonly linkAssociationState?: string;

}

/**
 * @schema Location
 */
export interface Location {
  /**
   * @schema Location#Address
   */
  readonly address?: string;

  /**
   * @schema Location#Latitude
   */
  readonly latitude?: string;

  /**
   * @schema Location#Longitude
   */
  readonly longitude?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema Device
 */
export interface Device {
  /**
   * @schema Device#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema Device#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema Device#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema Device#Description
   */
  readonly description?: string;

  /**
   * @schema Device#Type
   */
  readonly type?: string;

  /**
   * @schema Device#Vendor
   */
  readonly vendor?: string;

  /**
   * @schema Device#Model
   */
  readonly model?: string;

  /**
   * @schema Device#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema Device#Location
   */
  readonly location?: Location;

  /**
   * @schema Device#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema Device#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Device#State
   */
  readonly state?: string;

  /**
   * @schema Device#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema GlobalNetwork
 */
export interface GlobalNetwork {
  /**
   * @schema GlobalNetwork#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema GlobalNetwork#GlobalNetworkArn
   */
  readonly globalNetworkArn?: string;

  /**
   * @schema GlobalNetwork#Description
   */
  readonly description?: string;

  /**
   * @schema GlobalNetwork#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GlobalNetwork#State
   */
  readonly state?: string;

  /**
   * @schema GlobalNetwork#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Bandwidth
 */
export interface Bandwidth {
  /**
   * @schema Bandwidth#UploadSpeed
   */
  readonly uploadSpeed?: number;

  /**
   * @schema Bandwidth#DownloadSpeed
   */
  readonly downloadSpeed?: number;

}

/**
 * @schema Link
 */
export interface Link {
  /**
   * @schema Link#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema Link#LinkArn
   */
  readonly linkArn?: string;

  /**
   * @schema Link#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema Link#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema Link#Description
   */
  readonly description?: string;

  /**
   * @schema Link#Type
   */
  readonly type?: string;

  /**
   * @schema Link#Bandwidth
   */
  readonly bandwidth?: Bandwidth;

  /**
   * @schema Link#Provider
   */
  readonly provider?: string;

  /**
   * @schema Link#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Link#State
   */
  readonly state?: string;

  /**
   * @schema Link#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Site
 */
export interface Site {
  /**
   * @schema Site#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema Site#SiteArn
   */
  readonly siteArn?: string;

  /**
   * @schema Site#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema Site#Description
   */
  readonly description?: string;

  /**
   * @schema Site#Location
   */
  readonly location?: Location;

  /**
   * @schema Site#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Site#State
   */
  readonly state?: string;

  /**
   * @schema Site#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TransitGatewayRegistration
 */
export interface TransitGatewayRegistration {
  /**
   * @schema TransitGatewayRegistration#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema TransitGatewayRegistration#TransitGatewayArn
   */
  readonly transitGatewayArn?: string;

  /**
   * @schema TransitGatewayRegistration#State
   */
  readonly state?: TransitGatewayRegistrationStateReason;

}

/**
 * @schema TransitGatewayRegistrationStateReason
 */
export interface TransitGatewayRegistrationStateReason {
  /**
   * @schema TransitGatewayRegistrationStateReason#Code
   */
  readonly code?: string;

  /**
   * @schema TransitGatewayRegistrationStateReason#Message
   */
  readonly message?: string;

}
