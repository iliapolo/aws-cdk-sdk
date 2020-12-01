/**
 * @schema AddFlowOutputsRequest
 */
export interface AddFlowOutputsRequest {
  /**
   * @schema AddFlowOutputsRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema AddFlowOutputsRequest#Outputs
   */
  readonly outputs: AddOutputRequest[];

}

/**
 * @schema AddFlowOutputsResponse
 */
export interface AddFlowOutputsResponse {
  /**
   * @schema AddFlowOutputsResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AddFlowOutputsResponse#Outputs
   */
  readonly outputs?: Output[];

}

/**
 * @schema AddFlowSourcesRequest
 */
export interface AddFlowSourcesRequest {
  /**
   * @schema AddFlowSourcesRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema AddFlowSourcesRequest#Sources
   */
  readonly sources: SetSourceRequest[];

}

/**
 * @schema AddFlowSourcesResponse
 */
export interface AddFlowSourcesResponse {
  /**
   * @schema AddFlowSourcesResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AddFlowSourcesResponse#Sources
   */
  readonly sources?: Source[];

}

/**
 * @schema AddFlowVpcInterfacesRequest
 */
export interface AddFlowVpcInterfacesRequest {
  /**
   * @schema AddFlowVpcInterfacesRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema AddFlowVpcInterfacesRequest#VpcInterfaces
   */
  readonly vpcInterfaces: VpcInterfaceRequest[];

}

/**
 * @schema AddFlowVpcInterfacesResponse
 */
export interface AddFlowVpcInterfacesResponse {
  /**
   * @schema AddFlowVpcInterfacesResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AddFlowVpcInterfacesResponse#VpcInterfaces
   */
  readonly vpcInterfaces?: VpcInterface[];

}

/**
 * @schema CreateFlowRequest
 */
export interface CreateFlowRequest {
  /**
   * @schema CreateFlowRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateFlowRequest#Entitlements
   */
  readonly entitlements?: GrantEntitlementRequest[];

  /**
   * @schema CreateFlowRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateFlowRequest#Outputs
   */
  readonly outputs?: AddOutputRequest[];

  /**
   * @schema CreateFlowRequest#Source
   */
  readonly source?: SetSourceRequest;

  /**
   * @schema CreateFlowRequest#SourceFailoverConfig
   */
  readonly sourceFailoverConfig?: FailoverConfig;

  /**
   * @schema CreateFlowRequest#Sources
   */
  readonly sources?: SetSourceRequest[];

  /**
   * @schema CreateFlowRequest#VpcInterfaces
   */
  readonly vpcInterfaces?: VpcInterfaceRequest[];

}

/**
 * @schema CreateFlowResponse
 */
export interface CreateFlowResponse {
  /**
   * @schema CreateFlowResponse#Flow
   */
  readonly flow?: Flow;

}

/**
 * @schema DeleteFlowRequest
 */
export interface DeleteFlowRequest {
  /**
   * @schema DeleteFlowRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema DeleteFlowResponse
 */
export interface DeleteFlowResponse {
  /**
   * @schema DeleteFlowResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema DeleteFlowResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema DescribeFlowRequest
 */
export interface DescribeFlowRequest {
  /**
   * @schema DescribeFlowRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema DescribeFlowResponse
 */
export interface DescribeFlowResponse {
  /**
   * @schema DescribeFlowResponse#Flow
   */
  readonly flow?: Flow;

  /**
   * @schema DescribeFlowResponse#Messages
   */
  readonly messages?: Messages;

}

/**
 * @schema DescribeOfferingRequest
 */
export interface DescribeOfferingRequest {
  /**
   * @schema DescribeOfferingRequest#OfferingArn
   */
  readonly offeringArn: string;

}

/**
 * @schema DescribeOfferingResponse
 */
export interface DescribeOfferingResponse {
  /**
   * @schema DescribeOfferingResponse#Offering
   */
  readonly offering?: Offering;

}

/**
 * @schema DescribeReservationRequest
 */
export interface DescribeReservationRequest {
  /**
   * @schema DescribeReservationRequest#ReservationArn
   */
  readonly reservationArn: string;

}

/**
 * @schema DescribeReservationResponse
 */
export interface DescribeReservationResponse {
  /**
   * @schema DescribeReservationResponse#Reservation
   */
  readonly reservation?: Reservation;

}

/**
 * @schema GrantFlowEntitlementsRequest
 */
export interface GrantFlowEntitlementsRequest {
  /**
   * @schema GrantFlowEntitlementsRequest#Entitlements
   */
  readonly entitlements: GrantEntitlementRequest[];

  /**
   * @schema GrantFlowEntitlementsRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema GrantFlowEntitlementsResponse
 */
export interface GrantFlowEntitlementsResponse {
  /**
   * @schema GrantFlowEntitlementsResponse#Entitlements
   */
  readonly entitlements?: Entitlement[];

  /**
   * @schema GrantFlowEntitlementsResponse#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * @schema ListEntitlementsRequest
 */
export interface ListEntitlementsRequest {
  /**
   * @schema ListEntitlementsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListEntitlementsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEntitlementsResponse
 */
export interface ListEntitlementsResponse {
  /**
   * @schema ListEntitlementsResponse#Entitlements
   */
  readonly entitlements?: ListedEntitlement[];

  /**
   * @schema ListEntitlementsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFlowsRequest
 */
export interface ListFlowsRequest {
  /**
   * @schema ListFlowsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFlowsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFlowsResponse
 */
export interface ListFlowsResponse {
  /**
   * @schema ListFlowsResponse#Flows
   */
  readonly flows?: ListedFlow[];

  /**
   * @schema ListFlowsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOfferingsRequest
 */
export interface ListOfferingsRequest {
  /**
   * @schema ListOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOfferingsResponse
 */
export interface ListOfferingsResponse {
  /**
   * @schema ListOfferingsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListOfferingsResponse#Offerings
   */
  readonly offerings?: Offering[];

}

/**
 * @schema ListReservationsRequest
 */
export interface ListReservationsRequest {
  /**
   * @schema ListReservationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListReservationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListReservationsResponse
 */
export interface ListReservationsResponse {
  /**
   * @schema ListReservationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListReservationsResponse#Reservations
   */
  readonly reservations?: Reservation[];

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
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PurchaseOfferingRequest
 */
export interface PurchaseOfferingRequest {
  /**
   * @schema PurchaseOfferingRequest#OfferingArn
   */
  readonly offeringArn: string;

  /**
   * @schema PurchaseOfferingRequest#ReservationName
   */
  readonly reservationName: string;

  /**
   * @schema PurchaseOfferingRequest#Start
   */
  readonly start: string;

}

/**
 * @schema PurchaseOfferingResponse
 */
export interface PurchaseOfferingResponse {
  /**
   * @schema PurchaseOfferingResponse#Reservation
   */
  readonly reservation?: Reservation;

}

/**
 * @schema RemoveFlowOutputRequest
 */
export interface RemoveFlowOutputRequest {
  /**
   * @schema RemoveFlowOutputRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema RemoveFlowOutputRequest#OutputArn
   */
  readonly outputArn: string;

}

/**
 * @schema RemoveFlowOutputResponse
 */
export interface RemoveFlowOutputResponse {
  /**
   * @schema RemoveFlowOutputResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema RemoveFlowOutputResponse#OutputArn
   */
  readonly outputArn?: string;

}

/**
 * @schema RemoveFlowSourceRequest
 */
export interface RemoveFlowSourceRequest {
  /**
   * @schema RemoveFlowSourceRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema RemoveFlowSourceRequest#SourceArn
   */
  readonly sourceArn: string;

}

/**
 * @schema RemoveFlowSourceResponse
 */
export interface RemoveFlowSourceResponse {
  /**
   * @schema RemoveFlowSourceResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema RemoveFlowSourceResponse#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * @schema RemoveFlowVpcInterfaceRequest
 */
export interface RemoveFlowVpcInterfaceRequest {
  /**
   * @schema RemoveFlowVpcInterfaceRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema RemoveFlowVpcInterfaceRequest#VpcInterfaceName
   */
  readonly vpcInterfaceName: string;

}

/**
 * @schema RemoveFlowVpcInterfaceResponse
 */
export interface RemoveFlowVpcInterfaceResponse {
  /**
   * @schema RemoveFlowVpcInterfaceResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema RemoveFlowVpcInterfaceResponse#NonDeletedNetworkInterfaceIds
   */
  readonly nonDeletedNetworkInterfaceIds?: string[];

  /**
   * @schema RemoveFlowVpcInterfaceResponse#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

}

/**
 * @schema RevokeFlowEntitlementRequest
 */
export interface RevokeFlowEntitlementRequest {
  /**
   * @schema RevokeFlowEntitlementRequest#EntitlementArn
   */
  readonly entitlementArn: string;

  /**
   * @schema RevokeFlowEntitlementRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema RevokeFlowEntitlementResponse
 */
export interface RevokeFlowEntitlementResponse {
  /**
   * @schema RevokeFlowEntitlementResponse#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema RevokeFlowEntitlementResponse#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * @schema StartFlowRequest
 */
export interface StartFlowRequest {
  /**
   * @schema StartFlowRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema StartFlowResponse
 */
export interface StartFlowResponse {
  /**
   * @schema StartFlowResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema StartFlowResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema StopFlowRequest
 */
export interface StopFlowRequest {
  /**
   * @schema StopFlowRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema StopFlowResponse
 */
export interface StopFlowResponse {
  /**
   * @schema StopFlowResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema StopFlowResponse#Status
   */
  readonly status?: string;

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
  readonly tags: { [key: string]: string };

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
 * @schema UpdateFlowRequest
 */
export interface UpdateFlowRequest {
  /**
   * @schema UpdateFlowRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema UpdateFlowRequest#SourceFailoverConfig
   */
  readonly sourceFailoverConfig?: UpdateFailoverConfig;

}

/**
 * @schema UpdateFlowResponse
 */
export interface UpdateFlowResponse {
  /**
   * @schema UpdateFlowResponse#Flow
   */
  readonly flow?: Flow;

}

/**
 * @schema UpdateFlowEntitlementRequest
 */
export interface UpdateFlowEntitlementRequest {
  /**
   * @schema UpdateFlowEntitlementRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateFlowEntitlementRequest#Encryption
   */
  readonly encryption?: UpdateEncryption;

  /**
   * @schema UpdateFlowEntitlementRequest#EntitlementArn
   */
  readonly entitlementArn: string;

  /**
   * @schema UpdateFlowEntitlementRequest#EntitlementStatus
   */
  readonly entitlementStatus?: string;

  /**
   * @schema UpdateFlowEntitlementRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema UpdateFlowEntitlementRequest#Subscribers
   */
  readonly subscribers?: string[];

}

/**
 * @schema UpdateFlowEntitlementResponse
 */
export interface UpdateFlowEntitlementResponse {
  /**
   * @schema UpdateFlowEntitlementResponse#Entitlement
   */
  readonly entitlement?: Entitlement;

  /**
   * @schema UpdateFlowEntitlementResponse#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * @schema UpdateFlowOutputRequest
 */
export interface UpdateFlowOutputRequest {
  /**
   * @schema UpdateFlowOutputRequest#CidrAllowList
   */
  readonly cidrAllowList?: string[];

  /**
   * @schema UpdateFlowOutputRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateFlowOutputRequest#Destination
   */
  readonly destination?: string;

  /**
   * @schema UpdateFlowOutputRequest#Encryption
   */
  readonly encryption?: UpdateEncryption;

  /**
   * @schema UpdateFlowOutputRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema UpdateFlowOutputRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema UpdateFlowOutputRequest#OutputArn
   */
  readonly outputArn: string;

  /**
   * @schema UpdateFlowOutputRequest#Port
   */
  readonly port?: number;

  /**
   * @schema UpdateFlowOutputRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema UpdateFlowOutputRequest#RemoteId
   */
  readonly remoteId?: string;

  /**
   * @schema UpdateFlowOutputRequest#SmoothingLatency
   */
  readonly smoothingLatency?: number;

  /**
   * @schema UpdateFlowOutputRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema UpdateFlowOutputRequest#VpcInterfaceAttachment
   */
  readonly vpcInterfaceAttachment?: VpcInterfaceAttachment;

}

/**
 * @schema UpdateFlowOutputResponse
 */
export interface UpdateFlowOutputResponse {
  /**
   * @schema UpdateFlowOutputResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema UpdateFlowOutputResponse#Output
   */
  readonly output?: Output;

}

/**
 * @schema UpdateFlowSourceRequest
 */
export interface UpdateFlowSourceRequest {
  /**
   * @schema UpdateFlowSourceRequest#Decryption
   */
  readonly decryption?: UpdateEncryption;

  /**
   * @schema UpdateFlowSourceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateFlowSourceRequest#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema UpdateFlowSourceRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema UpdateFlowSourceRequest#IngestPort
   */
  readonly ingestPort?: number;

  /**
   * @schema UpdateFlowSourceRequest#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema UpdateFlowSourceRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema UpdateFlowSourceRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema UpdateFlowSourceRequest#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema UpdateFlowSourceRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema UpdateFlowSourceRequest#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

  /**
   * @schema UpdateFlowSourceRequest#WhitelistCidr
   */
  readonly whitelistCidr?: string;

}

/**
 * @schema UpdateFlowSourceResponse
 */
export interface UpdateFlowSourceResponse {
  /**
   * @schema UpdateFlowSourceResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema UpdateFlowSourceResponse#Source
   */
  readonly source?: Source;

}

/**
 * @schema AddOutputRequest
 */
export interface AddOutputRequest {
  /**
   * @schema AddOutputRequest#CidrAllowList
   */
  readonly cidrAllowList?: string[];

  /**
   * @schema AddOutputRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AddOutputRequest#Destination
   */
  readonly destination?: string;

  /**
   * @schema AddOutputRequest#Encryption
   */
  readonly encryption?: Encryption;

  /**
   * @schema AddOutputRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema AddOutputRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AddOutputRequest#Port
   */
  readonly port?: number;

  /**
   * @schema AddOutputRequest#Protocol
   */
  readonly protocol: string;

  /**
   * @schema AddOutputRequest#RemoteId
   */
  readonly remoteId?: string;

  /**
   * @schema AddOutputRequest#SmoothingLatency
   */
  readonly smoothingLatency?: number;

  /**
   * @schema AddOutputRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema AddOutputRequest#VpcInterfaceAttachment
   */
  readonly vpcInterfaceAttachment?: VpcInterfaceAttachment;

}

/**
 * @schema Output
 */
export interface Output {
  /**
   * @schema Output#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema Output#Description
   */
  readonly description?: string;

  /**
   * @schema Output#Destination
   */
  readonly destination?: string;

  /**
   * @schema Output#Encryption
   */
  readonly encryption?: Encryption;

  /**
   * @schema Output#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema Output#MediaLiveInputArn
   */
  readonly mediaLiveInputArn?: string;

  /**
   * @schema Output#Name
   */
  readonly name: string;

  /**
   * @schema Output#OutputArn
   */
  readonly outputArn: string;

  /**
   * @schema Output#Port
   */
  readonly port?: number;

  /**
   * @schema Output#Transport
   */
  readonly transport?: Transport;

  /**
   * @schema Output#VpcInterfaceAttachment
   */
  readonly vpcInterfaceAttachment?: VpcInterfaceAttachment;

}

/**
 * @schema SetSourceRequest
 */
export interface SetSourceRequest {
  /**
   * @schema SetSourceRequest#Decryption
   */
  readonly decryption?: Encryption;

  /**
   * @schema SetSourceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SetSourceRequest#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema SetSourceRequest#IngestPort
   */
  readonly ingestPort?: number;

  /**
   * @schema SetSourceRequest#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema SetSourceRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema SetSourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SetSourceRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SetSourceRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema SetSourceRequest#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

  /**
   * @schema SetSourceRequest#WhitelistCidr
   */
  readonly whitelistCidr?: string;

}

/**
 * @schema Source
 */
export interface Source {
  /**
   * @schema Source#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema Source#Decryption
   */
  readonly decryption?: Encryption;

  /**
   * @schema Source#Description
   */
  readonly description?: string;

  /**
   * @schema Source#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema Source#IngestIp
   */
  readonly ingestIp?: string;

  /**
   * @schema Source#IngestPort
   */
  readonly ingestPort?: number;

  /**
   * @schema Source#Name
   */
  readonly name: string;

  /**
   * @schema Source#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema Source#Transport
   */
  readonly transport?: Transport;

  /**
   * @schema Source#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

  /**
   * @schema Source#WhitelistCidr
   */
  readonly whitelistCidr?: string;

}

/**
 * @schema VpcInterfaceRequest
 */
export interface VpcInterfaceRequest {
  /**
   * @schema VpcInterfaceRequest#Name
   */
  readonly name: string;

  /**
   * @schema VpcInterfaceRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema VpcInterfaceRequest#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema VpcInterfaceRequest#SubnetId
   */
  readonly subnetId: string;

}

/**
 * @schema VpcInterface
 */
export interface VpcInterface {
  /**
   * @schema VpcInterface#Name
   */
  readonly name: string;

  /**
   * @schema VpcInterface#NetworkInterfaceIds
   */
  readonly networkInterfaceIds: string[];

  /**
   * @schema VpcInterface#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema VpcInterface#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema VpcInterface#SubnetId
   */
  readonly subnetId: string;

}

/**
 * @schema GrantEntitlementRequest
 */
export interface GrantEntitlementRequest {
  /**
   * @schema GrantEntitlementRequest#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema GrantEntitlementRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GrantEntitlementRequest#Encryption
   */
  readonly encryption?: Encryption;

  /**
   * @schema GrantEntitlementRequest#EntitlementStatus
   */
  readonly entitlementStatus?: string;

  /**
   * @schema GrantEntitlementRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GrantEntitlementRequest#Subscribers
   */
  readonly subscribers: string[];

}

/**
 * @schema FailoverConfig
 */
export interface FailoverConfig {
  /**
   * @schema FailoverConfig#RecoveryWindow
   */
  readonly recoveryWindow?: number;

  /**
   * @schema FailoverConfig#State
   */
  readonly state?: string;

}

/**
 * @schema Flow
 */
export interface Flow {
  /**
   * @schema Flow#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema Flow#Description
   */
  readonly description?: string;

  /**
   * @schema Flow#EgressIp
   */
  readonly egressIp?: string;

  /**
   * @schema Flow#Entitlements
   */
  readonly entitlements: Entitlement[];

  /**
   * @schema Flow#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema Flow#Name
   */
  readonly name: string;

  /**
   * @schema Flow#Outputs
   */
  readonly outputs: Output[];

  /**
   * @schema Flow#Source
   */
  readonly source: Source;

  /**
   * @schema Flow#SourceFailoverConfig
   */
  readonly sourceFailoverConfig?: FailoverConfig;

  /**
   * @schema Flow#Sources
   */
  readonly sources?: Source[];

  /**
   * @schema Flow#Status
   */
  readonly status: string;

  /**
   * @schema Flow#VpcInterfaces
   */
  readonly vpcInterfaces?: VpcInterface[];

}

/**
 * @schema Messages
 */
export interface Messages {
  /**
   * @schema Messages#Errors
   */
  readonly errors: string[];

}

/**
 * @schema Offering
 */
export interface Offering {
  /**
   * @schema Offering#CurrencyCode
   */
  readonly currencyCode: string;

  /**
   * @schema Offering#Duration
   */
  readonly duration: number;

  /**
   * @schema Offering#DurationUnits
   */
  readonly durationUnits: string;

  /**
   * @schema Offering#OfferingArn
   */
  readonly offeringArn: string;

  /**
   * @schema Offering#OfferingDescription
   */
  readonly offeringDescription: string;

  /**
   * @schema Offering#PricePerUnit
   */
  readonly pricePerUnit: string;

  /**
   * @schema Offering#PriceUnits
   */
  readonly priceUnits: string;

  /**
   * @schema Offering#ResourceSpecification
   */
  readonly resourceSpecification: ResourceSpecification;

}

/**
 * @schema Reservation
 */
export interface Reservation {
  /**
   * @schema Reservation#CurrencyCode
   */
  readonly currencyCode: string;

  /**
   * @schema Reservation#Duration
   */
  readonly duration: number;

  /**
   * @schema Reservation#DurationUnits
   */
  readonly durationUnits: string;

  /**
   * @schema Reservation#End
   */
  readonly end: string;

  /**
   * @schema Reservation#OfferingArn
   */
  readonly offeringArn: string;

  /**
   * @schema Reservation#OfferingDescription
   */
  readonly offeringDescription: string;

  /**
   * @schema Reservation#PricePerUnit
   */
  readonly pricePerUnit: string;

  /**
   * @schema Reservation#PriceUnits
   */
  readonly priceUnits: string;

  /**
   * @schema Reservation#ReservationArn
   */
  readonly reservationArn: string;

  /**
   * @schema Reservation#ReservationName
   */
  readonly reservationName: string;

  /**
   * @schema Reservation#ReservationState
   */
  readonly reservationState: string;

  /**
   * @schema Reservation#ResourceSpecification
   */
  readonly resourceSpecification: ResourceSpecification;

  /**
   * @schema Reservation#Start
   */
  readonly start: string;

}

/**
 * @schema Entitlement
 */
export interface Entitlement {
  /**
   * @schema Entitlement#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema Entitlement#Description
   */
  readonly description?: string;

  /**
   * @schema Entitlement#Encryption
   */
  readonly encryption?: Encryption;

  /**
   * @schema Entitlement#EntitlementArn
   */
  readonly entitlementArn: string;

  /**
   * @schema Entitlement#EntitlementStatus
   */
  readonly entitlementStatus?: string;

  /**
   * @schema Entitlement#Name
   */
  readonly name: string;

  /**
   * @schema Entitlement#Subscribers
   */
  readonly subscribers: string[];

}

/**
 * @schema ListedEntitlement
 */
export interface ListedEntitlement {
  /**
   * @schema ListedEntitlement#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema ListedEntitlement#EntitlementArn
   */
  readonly entitlementArn: string;

  /**
   * @schema ListedEntitlement#EntitlementName
   */
  readonly entitlementName: string;

}

/**
 * @schema ListedFlow
 */
export interface ListedFlow {
  /**
   * @schema ListedFlow#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema ListedFlow#Description
   */
  readonly description: string;

  /**
   * @schema ListedFlow#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema ListedFlow#Name
   */
  readonly name: string;

  /**
   * @schema ListedFlow#SourceType
   */
  readonly sourceType: string;

  /**
   * @schema ListedFlow#Status
   */
  readonly status: string;

}

/**
 * @schema UpdateFailoverConfig
 */
export interface UpdateFailoverConfig {
  /**
   * @schema UpdateFailoverConfig#RecoveryWindow
   */
  readonly recoveryWindow?: number;

  /**
   * @schema UpdateFailoverConfig#State
   */
  readonly state?: string;

}

/**
 * @schema UpdateEncryption
 */
export interface UpdateEncryption {
  /**
   * @schema UpdateEncryption#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema UpdateEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema UpdateEncryption#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema UpdateEncryption#KeyType
   */
  readonly keyType?: string;

  /**
   * @schema UpdateEncryption#Region
   */
  readonly region?: string;

  /**
   * @schema UpdateEncryption#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema UpdateEncryption#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateEncryption#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema UpdateEncryption#Url
   */
  readonly url?: string;

}

/**
 * @schema VpcInterfaceAttachment
 */
export interface VpcInterfaceAttachment {
  /**
   * @schema VpcInterfaceAttachment#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

}

/**
 * @schema Encryption
 */
export interface Encryption {
  /**
   * @schema Encryption#Algorithm
   */
  readonly algorithm: string;

  /**
   * @schema Encryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema Encryption#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema Encryption#KeyType
   */
  readonly keyType?: string;

  /**
   * @schema Encryption#Region
   */
  readonly region?: string;

  /**
   * @schema Encryption#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Encryption#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema Encryption#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema Encryption#Url
   */
  readonly url?: string;

}

/**
 * @schema Transport
 */
export interface Transport {
  /**
   * @schema Transport#CidrAllowList
   */
  readonly cidrAllowList?: string[];

  /**
   * @schema Transport#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema Transport#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema Transport#Protocol
   */
  readonly protocol: string;

  /**
   * @schema Transport#RemoteId
   */
  readonly remoteId?: string;

  /**
   * @schema Transport#SmoothingLatency
   */
  readonly smoothingLatency?: number;

  /**
   * @schema Transport#StreamId
   */
  readonly streamId?: string;

}

/**
 * @schema ResourceSpecification
 */
export interface ResourceSpecification {
  /**
   * @schema ResourceSpecification#ReservedBitrate
   */
  readonly reservedBitrate?: number;

  /**
   * @schema ResourceSpecification#ResourceType
   */
  readonly resourceType: string;

}
