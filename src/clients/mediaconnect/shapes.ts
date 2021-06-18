/**
 * @schema MediaConnectAddFlowOutputsRequest
 */
export interface MediaConnectAddFlowOutputsRequest {
  /**
   * @schema MediaConnectAddFlowOutputsRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectAddFlowOutputsRequest#Outputs
   */
  readonly outputs: MediaConnectAddOutputRequest[];

}

/**
 * @schema MediaConnectAddFlowOutputsResponse
 */
export interface MediaConnectAddFlowOutputsResponse {
  /**
   * @schema MediaConnectAddFlowOutputsResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowOutputsResponse#Outputs
   */
  readonly outputs?: MediaConnectOutput[];

}

/**
 * @schema MediaConnectAddFlowSourcesRequest
 */
export interface MediaConnectAddFlowSourcesRequest {
  /**
   * @schema MediaConnectAddFlowSourcesRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectAddFlowSourcesRequest#Sources
   */
  readonly sources: MediaConnectSetSourceRequest[];

}

/**
 * @schema MediaConnectAddFlowSourcesResponse
 */
export interface MediaConnectAddFlowSourcesResponse {
  /**
   * @schema MediaConnectAddFlowSourcesResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowSourcesResponse#Sources
   */
  readonly sources?: MediaConnectSource[];

}

/**
 * @schema MediaConnectAddFlowVpcInterfacesRequest
 */
export interface MediaConnectAddFlowVpcInterfacesRequest {
  /**
   * @schema MediaConnectAddFlowVpcInterfacesRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectAddFlowVpcInterfacesRequest#VpcInterfaces
   */
  readonly vpcInterfaces: MediaConnectVpcInterfaceRequest[];

}

/**
 * @schema MediaConnectAddFlowVpcInterfacesResponse
 */
export interface MediaConnectAddFlowVpcInterfacesResponse {
  /**
   * @schema MediaConnectAddFlowVpcInterfacesResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowVpcInterfacesResponse#VpcInterfaces
   */
  readonly vpcInterfaces?: MediaConnectVpcInterface[];

}

/**
 * @schema MediaConnectCreateFlowRequest
 */
export interface MediaConnectCreateFlowRequest {
  /**
   * @schema MediaConnectCreateFlowRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema MediaConnectCreateFlowRequest#Entitlements
   */
  readonly entitlements?: MediaConnectGrantEntitlementRequest[];

  /**
   * @schema MediaConnectCreateFlowRequest#Name
   */
  readonly name: string;

  /**
   * @schema MediaConnectCreateFlowRequest#Outputs
   */
  readonly outputs?: MediaConnectAddOutputRequest[];

  /**
   * @schema MediaConnectCreateFlowRequest#Source
   */
  readonly source?: MediaConnectSetSourceRequest;

  /**
   * @schema MediaConnectCreateFlowRequest#SourceFailoverConfig
   */
  readonly sourceFailoverConfig?: MediaConnectFailoverConfig;

  /**
   * @schema MediaConnectCreateFlowRequest#Sources
   */
  readonly sources?: MediaConnectSetSourceRequest[];

  /**
   * @schema MediaConnectCreateFlowRequest#VpcInterfaces
   */
  readonly vpcInterfaces?: MediaConnectVpcInterfaceRequest[];

}

/**
 * @schema MediaConnectCreateFlowResponse
 */
export interface MediaConnectCreateFlowResponse {
  /**
   * @schema MediaConnectCreateFlowResponse#Flow
   */
  readonly flow?: MediaConnectFlow;

}

/**
 * @schema MediaConnectDeleteFlowRequest
 */
export interface MediaConnectDeleteFlowRequest {
  /**
   * @schema MediaConnectDeleteFlowRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema MediaConnectDeleteFlowResponse
 */
export interface MediaConnectDeleteFlowResponse {
  /**
   * @schema MediaConnectDeleteFlowResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectDeleteFlowResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema MediaConnectDescribeFlowRequest
 */
export interface MediaConnectDescribeFlowRequest {
  /**
   * @schema MediaConnectDescribeFlowRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema MediaConnectDescribeFlowResponse
 */
export interface MediaConnectDescribeFlowResponse {
  /**
   * @schema MediaConnectDescribeFlowResponse#Flow
   */
  readonly flow?: MediaConnectFlow;

  /**
   * @schema MediaConnectDescribeFlowResponse#Messages
   */
  readonly messages?: MediaConnectMessages;

}

/**
 * @schema MediaConnectDescribeOfferingRequest
 */
export interface MediaConnectDescribeOfferingRequest {
  /**
   * @schema MediaConnectDescribeOfferingRequest#OfferingArn
   */
  readonly offeringArn: string;

}

/**
 * @schema MediaConnectDescribeOfferingResponse
 */
export interface MediaConnectDescribeOfferingResponse {
  /**
   * @schema MediaConnectDescribeOfferingResponse#Offering
   */
  readonly offering?: MediaConnectOffering;

}

/**
 * @schema MediaConnectDescribeReservationRequest
 */
export interface MediaConnectDescribeReservationRequest {
  /**
   * @schema MediaConnectDescribeReservationRequest#ReservationArn
   */
  readonly reservationArn: string;

}

/**
 * @schema MediaConnectDescribeReservationResponse
 */
export interface MediaConnectDescribeReservationResponse {
  /**
   * @schema MediaConnectDescribeReservationResponse#Reservation
   */
  readonly reservation?: MediaConnectReservation;

}

/**
 * @schema MediaConnectGrantFlowEntitlementsRequest
 */
export interface MediaConnectGrantFlowEntitlementsRequest {
  /**
   * @schema MediaConnectGrantFlowEntitlementsRequest#Entitlements
   */
  readonly entitlements: MediaConnectGrantEntitlementRequest[];

  /**
   * @schema MediaConnectGrantFlowEntitlementsRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema MediaConnectGrantFlowEntitlementsResponse
 */
export interface MediaConnectGrantFlowEntitlementsResponse {
  /**
   * @schema MediaConnectGrantFlowEntitlementsResponse#Entitlements
   */
  readonly entitlements?: MediaConnectEntitlement[];

  /**
   * @schema MediaConnectGrantFlowEntitlementsResponse#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * @schema MediaConnectListEntitlementsRequest
 */
export interface MediaConnectListEntitlementsRequest {
  /**
   * @schema MediaConnectListEntitlementsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConnectListEntitlementsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaConnectListEntitlementsResponse
 */
export interface MediaConnectListEntitlementsResponse {
  /**
   * @schema MediaConnectListEntitlementsResponse#Entitlements
   */
  readonly entitlements?: MediaConnectListedEntitlement[];

  /**
   * @schema MediaConnectListEntitlementsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaConnectListFlowsRequest
 */
export interface MediaConnectListFlowsRequest {
  /**
   * @schema MediaConnectListFlowsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConnectListFlowsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaConnectListFlowsResponse
 */
export interface MediaConnectListFlowsResponse {
  /**
   * @schema MediaConnectListFlowsResponse#Flows
   */
  readonly flows?: MediaConnectListedFlow[];

  /**
   * @schema MediaConnectListFlowsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaConnectListOfferingsRequest
 */
export interface MediaConnectListOfferingsRequest {
  /**
   * @schema MediaConnectListOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConnectListOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaConnectListOfferingsResponse
 */
export interface MediaConnectListOfferingsResponse {
  /**
   * @schema MediaConnectListOfferingsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConnectListOfferingsResponse#Offerings
   */
  readonly offerings?: MediaConnectOffering[];

}

/**
 * @schema MediaConnectListReservationsRequest
 */
export interface MediaConnectListReservationsRequest {
  /**
   * @schema MediaConnectListReservationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConnectListReservationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaConnectListReservationsResponse
 */
export interface MediaConnectListReservationsResponse {
  /**
   * @schema MediaConnectListReservationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConnectListReservationsResponse#Reservations
   */
  readonly reservations?: MediaConnectReservation[];

}

/**
 * @schema MediaConnectListTagsForResourceRequest
 */
export interface MediaConnectListTagsForResourceRequest {
  /**
   * @schema MediaConnectListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema MediaConnectListTagsForResourceResponse
 */
export interface MediaConnectListTagsForResourceResponse {
  /**
   * @schema MediaConnectListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MediaConnectPurchaseOfferingRequest
 */
export interface MediaConnectPurchaseOfferingRequest {
  /**
   * @schema MediaConnectPurchaseOfferingRequest#OfferingArn
   */
  readonly offeringArn: string;

  /**
   * @schema MediaConnectPurchaseOfferingRequest#ReservationName
   */
  readonly reservationName: string;

  /**
   * @schema MediaConnectPurchaseOfferingRequest#Start
   */
  readonly start: string;

}

/**
 * @schema MediaConnectPurchaseOfferingResponse
 */
export interface MediaConnectPurchaseOfferingResponse {
  /**
   * @schema MediaConnectPurchaseOfferingResponse#Reservation
   */
  readonly reservation?: MediaConnectReservation;

}

/**
 * @schema MediaConnectRemoveFlowOutputRequest
 */
export interface MediaConnectRemoveFlowOutputRequest {
  /**
   * @schema MediaConnectRemoveFlowOutputRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectRemoveFlowOutputRequest#OutputArn
   */
  readonly outputArn: string;

}

/**
 * @schema MediaConnectRemoveFlowOutputResponse
 */
export interface MediaConnectRemoveFlowOutputResponse {
  /**
   * @schema MediaConnectRemoveFlowOutputResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowOutputResponse#OutputArn
   */
  readonly outputArn?: string;

}

/**
 * @schema MediaConnectRemoveFlowSourceRequest
 */
export interface MediaConnectRemoveFlowSourceRequest {
  /**
   * @schema MediaConnectRemoveFlowSourceRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectRemoveFlowSourceRequest#SourceArn
   */
  readonly sourceArn: string;

}

/**
 * @schema MediaConnectRemoveFlowSourceResponse
 */
export interface MediaConnectRemoveFlowSourceResponse {
  /**
   * @schema MediaConnectRemoveFlowSourceResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowSourceResponse#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * @schema MediaConnectRemoveFlowVpcInterfaceRequest
 */
export interface MediaConnectRemoveFlowVpcInterfaceRequest {
  /**
   * @schema MediaConnectRemoveFlowVpcInterfaceRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectRemoveFlowVpcInterfaceRequest#VpcInterfaceName
   */
  readonly vpcInterfaceName: string;

}

/**
 * @schema MediaConnectRemoveFlowVpcInterfaceResponse
 */
export interface MediaConnectRemoveFlowVpcInterfaceResponse {
  /**
   * @schema MediaConnectRemoveFlowVpcInterfaceResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowVpcInterfaceResponse#NonDeletedNetworkInterfaceIds
   */
  readonly nonDeletedNetworkInterfaceIds?: string[];

  /**
   * @schema MediaConnectRemoveFlowVpcInterfaceResponse#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

}

/**
 * @schema MediaConnectRevokeFlowEntitlementRequest
 */
export interface MediaConnectRevokeFlowEntitlementRequest {
  /**
   * @schema MediaConnectRevokeFlowEntitlementRequest#EntitlementArn
   */
  readonly entitlementArn: string;

  /**
   * @schema MediaConnectRevokeFlowEntitlementRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema MediaConnectRevokeFlowEntitlementResponse
 */
export interface MediaConnectRevokeFlowEntitlementResponse {
  /**
   * @schema MediaConnectRevokeFlowEntitlementResponse#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectRevokeFlowEntitlementResponse#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * @schema MediaConnectStartFlowRequest
 */
export interface MediaConnectStartFlowRequest {
  /**
   * @schema MediaConnectStartFlowRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema MediaConnectStartFlowResponse
 */
export interface MediaConnectStartFlowResponse {
  /**
   * @schema MediaConnectStartFlowResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectStartFlowResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema MediaConnectStopFlowRequest
 */
export interface MediaConnectStopFlowRequest {
  /**
   * @schema MediaConnectStopFlowRequest#FlowArn
   */
  readonly flowArn: string;

}

/**
 * @schema MediaConnectStopFlowResponse
 */
export interface MediaConnectStopFlowResponse {
  /**
   * @schema MediaConnectStopFlowResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectStopFlowResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema MediaConnectTagResourceRequest
 */
export interface MediaConnectTagResourceRequest {
  /**
   * @schema MediaConnectTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MediaConnectTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema MediaConnectUntagResourceRequest
 */
export interface MediaConnectUntagResourceRequest {
  /**
   * @schema MediaConnectUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MediaConnectUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema MediaConnectUpdateFlowRequest
 */
export interface MediaConnectUpdateFlowRequest {
  /**
   * @schema MediaConnectUpdateFlowRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectUpdateFlowRequest#SourceFailoverConfig
   */
  readonly sourceFailoverConfig?: MediaConnectUpdateFailoverConfig;

}

/**
 * @schema MediaConnectUpdateFlowResponse
 */
export interface MediaConnectUpdateFlowResponse {
  /**
   * @schema MediaConnectUpdateFlowResponse#Flow
   */
  readonly flow?: MediaConnectFlow;

}

/**
 * @schema MediaConnectUpdateFlowEntitlementRequest
 */
export interface MediaConnectUpdateFlowEntitlementRequest {
  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#Encryption
   */
  readonly encryption?: MediaConnectUpdateEncryption;

  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#EntitlementArn
   */
  readonly entitlementArn: string;

  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#EntitlementStatus
   */
  readonly entitlementStatus?: string;

  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#Subscribers
   */
  readonly subscribers?: string[];

}

/**
 * @schema MediaConnectUpdateFlowEntitlementResponse
 */
export interface MediaConnectUpdateFlowEntitlementResponse {
  /**
   * @schema MediaConnectUpdateFlowEntitlementResponse#Entitlement
   */
  readonly entitlement?: MediaConnectEntitlement;

  /**
   * @schema MediaConnectUpdateFlowEntitlementResponse#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * @schema MediaConnectUpdateFlowOutputRequest
 */
export interface MediaConnectUpdateFlowOutputRequest {
  /**
   * @schema MediaConnectUpdateFlowOutputRequest#CidrAllowList
   */
  readonly cidrAllowList?: string[];

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#Encryption
   */
  readonly encryption?: MediaConnectUpdateEncryption;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#OutputArn
   */
  readonly outputArn: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#Port
   */
  readonly port?: number;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#RemoteId
   */
  readonly remoteId?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#SmoothingLatency
   */
  readonly smoothingLatency?: number;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#VpcInterfaceAttachment
   */
  readonly vpcInterfaceAttachment?: MediaConnectVpcInterfaceAttachment;

}

/**
 * @schema MediaConnectUpdateFlowOutputResponse
 */
export interface MediaConnectUpdateFlowOutputResponse {
  /**
   * @schema MediaConnectUpdateFlowOutputResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputResponse#Output
   */
  readonly output?: MediaConnectOutput;

}

/**
 * @schema MediaConnectUpdateFlowSourceRequest
 */
export interface MediaConnectUpdateFlowSourceRequest {
  /**
   * @schema MediaConnectUpdateFlowSourceRequest#Decryption
   */
  readonly decryption?: MediaConnectUpdateEncryption;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#IngestPort
   */
  readonly ingestPort?: number;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#WhitelistCidr
   */
  readonly whitelistCidr?: string;

}

/**
 * @schema MediaConnectUpdateFlowSourceResponse
 */
export interface MediaConnectUpdateFlowSourceResponse {
  /**
   * @schema MediaConnectUpdateFlowSourceResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceResponse#Source
   */
  readonly source?: MediaConnectSource;

}

/**
 * @schema MediaConnectAddOutputRequest
 */
export interface MediaConnectAddOutputRequest {
  /**
   * @schema MediaConnectAddOutputRequest#CidrAllowList
   */
  readonly cidrAllowList?: string[];

  /**
   * @schema MediaConnectAddOutputRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectAddOutputRequest#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConnectAddOutputRequest#Encryption
   */
  readonly encryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectAddOutputRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema MediaConnectAddOutputRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectAddOutputRequest#Port
   */
  readonly port?: number;

  /**
   * @schema MediaConnectAddOutputRequest#Protocol
   */
  readonly protocol: string;

  /**
   * @schema MediaConnectAddOutputRequest#RemoteId
   */
  readonly remoteId?: string;

  /**
   * @schema MediaConnectAddOutputRequest#SmoothingLatency
   */
  readonly smoothingLatency?: number;

  /**
   * @schema MediaConnectAddOutputRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema MediaConnectAddOutputRequest#VpcInterfaceAttachment
   */
  readonly vpcInterfaceAttachment?: MediaConnectVpcInterfaceAttachment;

}

/**
 * @schema MediaConnectOutput
 */
export interface MediaConnectOutput {
  /**
   * @schema MediaConnectOutput#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema MediaConnectOutput#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectOutput#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConnectOutput#Encryption
   */
  readonly encryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectOutput#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectOutput#MediaLiveInputArn
   */
  readonly mediaLiveInputArn?: string;

  /**
   * @schema MediaConnectOutput#Name
   */
  readonly name: string;

  /**
   * @schema MediaConnectOutput#OutputArn
   */
  readonly outputArn: string;

  /**
   * @schema MediaConnectOutput#Port
   */
  readonly port?: number;

  /**
   * @schema MediaConnectOutput#Transport
   */
  readonly transport?: MediaConnectTransport;

  /**
   * @schema MediaConnectOutput#VpcInterfaceAttachment
   */
  readonly vpcInterfaceAttachment?: MediaConnectVpcInterfaceAttachment;

}

/**
 * @schema MediaConnectSetSourceRequest
 */
export interface MediaConnectSetSourceRequest {
  /**
   * @schema MediaConnectSetSourceRequest#Decryption
   */
  readonly decryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectSetSourceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectSetSourceRequest#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectSetSourceRequest#IngestPort
   */
  readonly ingestPort?: number;

  /**
   * @schema MediaConnectSetSourceRequest#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConnectSetSourceRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema MediaConnectSetSourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectSetSourceRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema MediaConnectSetSourceRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema MediaConnectSetSourceRequest#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

  /**
   * @schema MediaConnectSetSourceRequest#WhitelistCidr
   */
  readonly whitelistCidr?: string;

}

/**
 * @schema MediaConnectSource
 */
export interface MediaConnectSource {
  /**
   * @schema MediaConnectSource#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema MediaConnectSource#Decryption
   */
  readonly decryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectSource#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectSource#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectSource#IngestIp
   */
  readonly ingestIp?: string;

  /**
   * @schema MediaConnectSource#IngestPort
   */
  readonly ingestPort?: number;

  /**
   * @schema MediaConnectSource#Name
   */
  readonly name: string;

  /**
   * @schema MediaConnectSource#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema MediaConnectSource#Transport
   */
  readonly transport?: MediaConnectTransport;

  /**
   * @schema MediaConnectSource#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

  /**
   * @schema MediaConnectSource#WhitelistCidr
   */
  readonly whitelistCidr?: string;

}

/**
 * @schema MediaConnectVpcInterfaceRequest
 */
export interface MediaConnectVpcInterfaceRequest {
  /**
   * @schema MediaConnectVpcInterfaceRequest#Name
   */
  readonly name: string;

  /**
   * @schema MediaConnectVpcInterfaceRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema MediaConnectVpcInterfaceRequest#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema MediaConnectVpcInterfaceRequest#SubnetId
   */
  readonly subnetId: string;

}

/**
 * @schema MediaConnectVpcInterface
 */
export interface MediaConnectVpcInterface {
  /**
   * @schema MediaConnectVpcInterface#Name
   */
  readonly name: string;

  /**
   * @schema MediaConnectVpcInterface#NetworkInterfaceIds
   */
  readonly networkInterfaceIds: string[];

  /**
   * @schema MediaConnectVpcInterface#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema MediaConnectVpcInterface#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema MediaConnectVpcInterface#SubnetId
   */
  readonly subnetId: string;

}

/**
 * @schema MediaConnectGrantEntitlementRequest
 */
export interface MediaConnectGrantEntitlementRequest {
  /**
   * @schema MediaConnectGrantEntitlementRequest#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema MediaConnectGrantEntitlementRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectGrantEntitlementRequest#Encryption
   */
  readonly encryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectGrantEntitlementRequest#EntitlementStatus
   */
  readonly entitlementStatus?: string;

  /**
   * @schema MediaConnectGrantEntitlementRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectGrantEntitlementRequest#Subscribers
   */
  readonly subscribers: string[];

}

/**
 * @schema MediaConnectFailoverConfig
 */
export interface MediaConnectFailoverConfig {
  /**
   * @schema MediaConnectFailoverConfig#RecoveryWindow
   */
  readonly recoveryWindow?: number;

  /**
   * @schema MediaConnectFailoverConfig#State
   */
  readonly state?: string;

}

/**
 * @schema MediaConnectFlow
 */
export interface MediaConnectFlow {
  /**
   * @schema MediaConnectFlow#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema MediaConnectFlow#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectFlow#EgressIp
   */
  readonly egressIp?: string;

  /**
   * @schema MediaConnectFlow#Entitlements
   */
  readonly entitlements: MediaConnectEntitlement[];

  /**
   * @schema MediaConnectFlow#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectFlow#Name
   */
  readonly name: string;

  /**
   * @schema MediaConnectFlow#Outputs
   */
  readonly outputs: MediaConnectOutput[];

  /**
   * @schema MediaConnectFlow#Source
   */
  readonly source: MediaConnectSource;

  /**
   * @schema MediaConnectFlow#SourceFailoverConfig
   */
  readonly sourceFailoverConfig?: MediaConnectFailoverConfig;

  /**
   * @schema MediaConnectFlow#Sources
   */
  readonly sources?: MediaConnectSource[];

  /**
   * @schema MediaConnectFlow#Status
   */
  readonly status: string;

  /**
   * @schema MediaConnectFlow#VpcInterfaces
   */
  readonly vpcInterfaces?: MediaConnectVpcInterface[];

}

/**
 * @schema MediaConnectMessages
 */
export interface MediaConnectMessages {
  /**
   * @schema MediaConnectMessages#Errors
   */
  readonly errors: string[];

}

/**
 * @schema MediaConnectOffering
 */
export interface MediaConnectOffering {
  /**
   * @schema MediaConnectOffering#CurrencyCode
   */
  readonly currencyCode: string;

  /**
   * @schema MediaConnectOffering#Duration
   */
  readonly duration: number;

  /**
   * @schema MediaConnectOffering#DurationUnits
   */
  readonly durationUnits: string;

  /**
   * @schema MediaConnectOffering#OfferingArn
   */
  readonly offeringArn: string;

  /**
   * @schema MediaConnectOffering#OfferingDescription
   */
  readonly offeringDescription: string;

  /**
   * @schema MediaConnectOffering#PricePerUnit
   */
  readonly pricePerUnit: string;

  /**
   * @schema MediaConnectOffering#PriceUnits
   */
  readonly priceUnits: string;

  /**
   * @schema MediaConnectOffering#ResourceSpecification
   */
  readonly resourceSpecification: MediaConnectResourceSpecification;

}

/**
 * @schema MediaConnectReservation
 */
export interface MediaConnectReservation {
  /**
   * @schema MediaConnectReservation#CurrencyCode
   */
  readonly currencyCode: string;

  /**
   * @schema MediaConnectReservation#Duration
   */
  readonly duration: number;

  /**
   * @schema MediaConnectReservation#DurationUnits
   */
  readonly durationUnits: string;

  /**
   * @schema MediaConnectReservation#End
   */
  readonly end: string;

  /**
   * @schema MediaConnectReservation#OfferingArn
   */
  readonly offeringArn: string;

  /**
   * @schema MediaConnectReservation#OfferingDescription
   */
  readonly offeringDescription: string;

  /**
   * @schema MediaConnectReservation#PricePerUnit
   */
  readonly pricePerUnit: string;

  /**
   * @schema MediaConnectReservation#PriceUnits
   */
  readonly priceUnits: string;

  /**
   * @schema MediaConnectReservation#ReservationArn
   */
  readonly reservationArn: string;

  /**
   * @schema MediaConnectReservation#ReservationName
   */
  readonly reservationName: string;

  /**
   * @schema MediaConnectReservation#ReservationState
   */
  readonly reservationState: string;

  /**
   * @schema MediaConnectReservation#ResourceSpecification
   */
  readonly resourceSpecification: MediaConnectResourceSpecification;

  /**
   * @schema MediaConnectReservation#Start
   */
  readonly start: string;

}

/**
 * @schema MediaConnectEntitlement
 */
export interface MediaConnectEntitlement {
  /**
   * @schema MediaConnectEntitlement#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema MediaConnectEntitlement#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectEntitlement#Encryption
   */
  readonly encryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectEntitlement#EntitlementArn
   */
  readonly entitlementArn: string;

  /**
   * @schema MediaConnectEntitlement#EntitlementStatus
   */
  readonly entitlementStatus?: string;

  /**
   * @schema MediaConnectEntitlement#Name
   */
  readonly name: string;

  /**
   * @schema MediaConnectEntitlement#Subscribers
   */
  readonly subscribers: string[];

}

/**
 * @schema MediaConnectListedEntitlement
 */
export interface MediaConnectListedEntitlement {
  /**
   * @schema MediaConnectListedEntitlement#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema MediaConnectListedEntitlement#EntitlementArn
   */
  readonly entitlementArn: string;

  /**
   * @schema MediaConnectListedEntitlement#EntitlementName
   */
  readonly entitlementName: string;

}

/**
 * @schema MediaConnectListedFlow
 */
export interface MediaConnectListedFlow {
  /**
   * @schema MediaConnectListedFlow#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema MediaConnectListedFlow#Description
   */
  readonly description: string;

  /**
   * @schema MediaConnectListedFlow#FlowArn
   */
  readonly flowArn: string;

  /**
   * @schema MediaConnectListedFlow#Name
   */
  readonly name: string;

  /**
   * @schema MediaConnectListedFlow#SourceType
   */
  readonly sourceType: string;

  /**
   * @schema MediaConnectListedFlow#Status
   */
  readonly status: string;

}

/**
 * @schema MediaConnectUpdateFailoverConfig
 */
export interface MediaConnectUpdateFailoverConfig {
  /**
   * @schema MediaConnectUpdateFailoverConfig#RecoveryWindow
   */
  readonly recoveryWindow?: number;

  /**
   * @schema MediaConnectUpdateFailoverConfig#State
   */
  readonly state?: string;

}

/**
 * @schema MediaConnectUpdateEncryption
 */
export interface MediaConnectUpdateEncryption {
  /**
   * @schema MediaConnectUpdateEncryption#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MediaConnectUpdateEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaConnectUpdateEncryption#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema MediaConnectUpdateEncryption#KeyType
   */
  readonly keyType?: string;

  /**
   * @schema MediaConnectUpdateEncryption#Region
   */
  readonly region?: string;

  /**
   * @schema MediaConnectUpdateEncryption#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaConnectUpdateEncryption#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaConnectUpdateEncryption#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema MediaConnectUpdateEncryption#Url
   */
  readonly url?: string;

}

/**
 * @schema MediaConnectVpcInterfaceAttachment
 */
export interface MediaConnectVpcInterfaceAttachment {
  /**
   * @schema MediaConnectVpcInterfaceAttachment#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

}

/**
 * @schema MediaConnectEncryption
 */
export interface MediaConnectEncryption {
  /**
   * @schema MediaConnectEncryption#Algorithm
   */
  readonly algorithm: string;

  /**
   * @schema MediaConnectEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaConnectEncryption#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema MediaConnectEncryption#KeyType
   */
  readonly keyType?: string;

  /**
   * @schema MediaConnectEncryption#Region
   */
  readonly region?: string;

  /**
   * @schema MediaConnectEncryption#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaConnectEncryption#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema MediaConnectEncryption#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema MediaConnectEncryption#Url
   */
  readonly url?: string;

}

/**
 * @schema MediaConnectTransport
 */
export interface MediaConnectTransport {
  /**
   * @schema MediaConnectTransport#CidrAllowList
   */
  readonly cidrAllowList?: string[];

  /**
   * @schema MediaConnectTransport#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConnectTransport#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema MediaConnectTransport#Protocol
   */
  readonly protocol: string;

  /**
   * @schema MediaConnectTransport#RemoteId
   */
  readonly remoteId?: string;

  /**
   * @schema MediaConnectTransport#SmoothingLatency
   */
  readonly smoothingLatency?: number;

  /**
   * @schema MediaConnectTransport#StreamId
   */
  readonly streamId?: string;

}

/**
 * @schema MediaConnectResourceSpecification
 */
export interface MediaConnectResourceSpecification {
  /**
   * @schema MediaConnectResourceSpecification#ReservedBitrate
   */
  readonly reservedBitrate?: number;

  /**
   * @schema MediaConnectResourceSpecification#ResourceType
   */
  readonly resourceType: string;

}
