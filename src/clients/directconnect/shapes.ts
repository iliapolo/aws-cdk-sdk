/**
 * @schema DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest
 */
export interface DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest {
  /**
   * @schema DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId: string;

  /**
   * @schema DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest#proposalId
   */
  readonly proposalId: string;

  /**
   * @schema DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest#associatedGatewayOwnerAccount
   */
  readonly associatedGatewayOwnerAccount: string;

  /**
   * @schema DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest#overrideAllowedPrefixesToDirectConnectGateway
   */
  readonly overrideAllowedPrefixesToDirectConnectGateway?: DirectConnectRouteFilterPrefix[];

}

/**
 * @schema DirectConnectAcceptDirectConnectGatewayAssociationProposalResult
 */
export interface DirectConnectAcceptDirectConnectGatewayAssociationProposalResult {
  /**
   * @schema DirectConnectAcceptDirectConnectGatewayAssociationProposalResult#directConnectGatewayAssociation
   */
  readonly directConnectGatewayAssociation?: DirectConnectDirectConnectGatewayAssociation;

}

/**
 * @schema DirectConnectAllocateConnectionOnInterconnectRequest
 */
export interface DirectConnectAllocateConnectionOnInterconnectRequest {
  /**
   * @schema DirectConnectAllocateConnectionOnInterconnectRequest#bandwidth
   */
  readonly bandwidth: string;

  /**
   * @schema DirectConnectAllocateConnectionOnInterconnectRequest#connectionName
   */
  readonly connectionName: string;

  /**
   * @schema DirectConnectAllocateConnectionOnInterconnectRequest#ownerAccount
   */
  readonly ownerAccount: string;

  /**
   * @schema DirectConnectAllocateConnectionOnInterconnectRequest#interconnectId
   */
  readonly interconnectId: string;

  /**
   * @schema DirectConnectAllocateConnectionOnInterconnectRequest#vlan
   */
  readonly vlan: number;

}

/**
 * @schema DirectConnectConnection
 */
export interface DirectConnectConnection {
  /**
   * @schema DirectConnectConnection#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema DirectConnectConnection#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema DirectConnectConnection#connectionName
   */
  readonly connectionName?: string;

  /**
   * @schema DirectConnectConnection#connectionState
   */
  readonly connectionState?: string;

  /**
   * @schema DirectConnectConnection#region
   */
  readonly region?: string;

  /**
   * @schema DirectConnectConnection#location
   */
  readonly location?: string;

  /**
   * @schema DirectConnectConnection#bandwidth
   */
  readonly bandwidth?: string;

  /**
   * @schema DirectConnectConnection#vlan
   */
  readonly vlan?: number;

  /**
   * @schema DirectConnectConnection#partnerName
   */
  readonly partnerName?: string;

  /**
   * @schema DirectConnectConnection#loaIssueTime
   */
  readonly loaIssueTime?: string;

  /**
   * @schema DirectConnectConnection#lagId
   */
  readonly lagId?: string;

  /**
   * @schema DirectConnectConnection#awsDevice
   */
  readonly awsDevice?: string;

  /**
   * @schema DirectConnectConnection#jumboFrameCapable
   */
  readonly jumboFrameCapable?: boolean;

  /**
   * @schema DirectConnectConnection#awsDeviceV2
   */
  readonly awsDeviceV2?: string;

  /**
   * @schema DirectConnectConnection#hasLogicalRedundancy
   */
  readonly hasLogicalRedundancy?: string;

  /**
   * @schema DirectConnectConnection#tags
   */
  readonly tags?: DirectConnectTag[];

  /**
   * @schema DirectConnectConnection#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema DirectConnectAllocateHostedConnectionRequest
 */
export interface DirectConnectAllocateHostedConnectionRequest {
  /**
   * @schema DirectConnectAllocateHostedConnectionRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectAllocateHostedConnectionRequest#ownerAccount
   */
  readonly ownerAccount: string;

  /**
   * @schema DirectConnectAllocateHostedConnectionRequest#bandwidth
   */
  readonly bandwidth: string;

  /**
   * @schema DirectConnectAllocateHostedConnectionRequest#connectionName
   */
  readonly connectionName: string;

  /**
   * @schema DirectConnectAllocateHostedConnectionRequest#vlan
   */
  readonly vlan: number;

  /**
   * @schema DirectConnectAllocateHostedConnectionRequest#tags
   */
  readonly tags?: DirectConnectTag[];

}

/**
 * @schema DirectConnectAllocatePrivateVirtualInterfaceRequest
 */
export interface DirectConnectAllocatePrivateVirtualInterfaceRequest {
  /**
   * @schema DirectConnectAllocatePrivateVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectAllocatePrivateVirtualInterfaceRequest#ownerAccount
   */
  readonly ownerAccount: string;

  /**
   * @schema DirectConnectAllocatePrivateVirtualInterfaceRequest#newPrivateVirtualInterfaceAllocation
   */
  readonly newPrivateVirtualInterfaceAllocation: DirectConnectNewPrivateVirtualInterfaceAllocation;

}

/**
 * @schema DirectConnectVirtualInterface
 */
export interface DirectConnectVirtualInterface {
  /**
   * @schema DirectConnectVirtualInterface#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema DirectConnectVirtualInterface#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema DirectConnectVirtualInterface#location
   */
  readonly location?: string;

  /**
   * @schema DirectConnectVirtualInterface#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema DirectConnectVirtualInterface#virtualInterfaceType
   */
  readonly virtualInterfaceType?: string;

  /**
   * @schema DirectConnectVirtualInterface#virtualInterfaceName
   */
  readonly virtualInterfaceName?: string;

  /**
   * @schema DirectConnectVirtualInterface#vlan
   */
  readonly vlan?: number;

  /**
   * @schema DirectConnectVirtualInterface#asn
   */
  readonly asn?: number;

  /**
   * @schema DirectConnectVirtualInterface#amazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema DirectConnectVirtualInterface#authKey
   */
  readonly authKey?: string;

  /**
   * @schema DirectConnectVirtualInterface#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema DirectConnectVirtualInterface#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema DirectConnectVirtualInterface#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema DirectConnectVirtualInterface#virtualInterfaceState
   */
  readonly virtualInterfaceState?: string;

  /**
   * @schema DirectConnectVirtualInterface#customerRouterConfig
   */
  readonly customerRouterConfig?: string;

  /**
   * @schema DirectConnectVirtualInterface#mtu
   */
  readonly mtu?: number;

  /**
   * @schema DirectConnectVirtualInterface#jumboFrameCapable
   */
  readonly jumboFrameCapable?: boolean;

  /**
   * @schema DirectConnectVirtualInterface#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

  /**
   * @schema DirectConnectVirtualInterface#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectVirtualInterface#routeFilterPrefixes
   */
  readonly routeFilterPrefixes?: DirectConnectRouteFilterPrefix[];

  /**
   * @schema DirectConnectVirtualInterface#bgpPeers
   */
  readonly bgpPeers?: DirectConnectBgpPeer[];

  /**
   * @schema DirectConnectVirtualInterface#region
   */
  readonly region?: string;

  /**
   * @schema DirectConnectVirtualInterface#awsDeviceV2
   */
  readonly awsDeviceV2?: string;

  /**
   * @schema DirectConnectVirtualInterface#tags
   */
  readonly tags?: DirectConnectTag[];

}

/**
 * @schema DirectConnectAllocatePublicVirtualInterfaceRequest
 */
export interface DirectConnectAllocatePublicVirtualInterfaceRequest {
  /**
   * @schema DirectConnectAllocatePublicVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectAllocatePublicVirtualInterfaceRequest#ownerAccount
   */
  readonly ownerAccount: string;

  /**
   * @schema DirectConnectAllocatePublicVirtualInterfaceRequest#newPublicVirtualInterfaceAllocation
   */
  readonly newPublicVirtualInterfaceAllocation: DirectConnectNewPublicVirtualInterfaceAllocation;

}

/**
 * @schema DirectConnectAllocateTransitVirtualInterfaceRequest
 */
export interface DirectConnectAllocateTransitVirtualInterfaceRequest {
  /**
   * @schema DirectConnectAllocateTransitVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectAllocateTransitVirtualInterfaceRequest#ownerAccount
   */
  readonly ownerAccount: string;

  /**
   * @schema DirectConnectAllocateTransitVirtualInterfaceRequest#newTransitVirtualInterfaceAllocation
   */
  readonly newTransitVirtualInterfaceAllocation: DirectConnectNewTransitVirtualInterfaceAllocation;

}

/**
 * @schema DirectConnectAllocateTransitVirtualInterfaceResult
 */
export interface DirectConnectAllocateTransitVirtualInterfaceResult {
  /**
   * @schema DirectConnectAllocateTransitVirtualInterfaceResult#virtualInterface
   */
  readonly virtualInterface?: DirectConnectVirtualInterface;

}

/**
 * @schema DirectConnectAssociateConnectionWithLagRequest
 */
export interface DirectConnectAssociateConnectionWithLagRequest {
  /**
   * @schema DirectConnectAssociateConnectionWithLagRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectAssociateConnectionWithLagRequest#lagId
   */
  readonly lagId: string;

}

/**
 * @schema DirectConnectAssociateHostedConnectionRequest
 */
export interface DirectConnectAssociateHostedConnectionRequest {
  /**
   * @schema DirectConnectAssociateHostedConnectionRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectAssociateHostedConnectionRequest#parentConnectionId
   */
  readonly parentConnectionId: string;

}

/**
 * @schema DirectConnectAssociateVirtualInterfaceRequest
 */
export interface DirectConnectAssociateVirtualInterfaceRequest {
  /**
   * @schema DirectConnectAssociateVirtualInterfaceRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

  /**
   * @schema DirectConnectAssociateVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

}

/**
 * @schema DirectConnectConfirmConnectionRequest
 */
export interface DirectConnectConfirmConnectionRequest {
  /**
   * @schema DirectConnectConfirmConnectionRequest#connectionId
   */
  readonly connectionId: string;

}

/**
 * @schema DirectConnectConfirmConnectionResponse
 */
export interface DirectConnectConfirmConnectionResponse {
  /**
   * @schema DirectConnectConfirmConnectionResponse#connectionState
   */
  readonly connectionState?: string;

}

/**
 * @schema DirectConnectConfirmPrivateVirtualInterfaceRequest
 */
export interface DirectConnectConfirmPrivateVirtualInterfaceRequest {
  /**
   * @schema DirectConnectConfirmPrivateVirtualInterfaceRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

  /**
   * @schema DirectConnectConfirmPrivateVirtualInterfaceRequest#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

  /**
   * @schema DirectConnectConfirmPrivateVirtualInterfaceRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

}

/**
 * @schema DirectConnectConfirmPrivateVirtualInterfaceResponse
 */
export interface DirectConnectConfirmPrivateVirtualInterfaceResponse {
  /**
   * @schema DirectConnectConfirmPrivateVirtualInterfaceResponse#virtualInterfaceState
   */
  readonly virtualInterfaceState?: string;

}

/**
 * @schema DirectConnectConfirmPublicVirtualInterfaceRequest
 */
export interface DirectConnectConfirmPublicVirtualInterfaceRequest {
  /**
   * @schema DirectConnectConfirmPublicVirtualInterfaceRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

}

/**
 * @schema DirectConnectConfirmPublicVirtualInterfaceResponse
 */
export interface DirectConnectConfirmPublicVirtualInterfaceResponse {
  /**
   * @schema DirectConnectConfirmPublicVirtualInterfaceResponse#virtualInterfaceState
   */
  readonly virtualInterfaceState?: string;

}

/**
 * @schema DirectConnectConfirmTransitVirtualInterfaceRequest
 */
export interface DirectConnectConfirmTransitVirtualInterfaceRequest {
  /**
   * @schema DirectConnectConfirmTransitVirtualInterfaceRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

  /**
   * @schema DirectConnectConfirmTransitVirtualInterfaceRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId: string;

}

/**
 * @schema DirectConnectConfirmTransitVirtualInterfaceResponse
 */
export interface DirectConnectConfirmTransitVirtualInterfaceResponse {
  /**
   * @schema DirectConnectConfirmTransitVirtualInterfaceResponse#virtualInterfaceState
   */
  readonly virtualInterfaceState?: string;

}

/**
 * @schema DirectConnectCreateBgpPeerRequest
 */
export interface DirectConnectCreateBgpPeerRequest {
  /**
   * @schema DirectConnectCreateBgpPeerRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema DirectConnectCreateBgpPeerRequest#newBGPPeer
   */
  readonly newBGPPeer?: DirectConnectNewBgpPeer;

}

/**
 * @schema DirectConnectCreateBgpPeerResponse
 */
export interface DirectConnectCreateBgpPeerResponse {
  /**
   * @schema DirectConnectCreateBgpPeerResponse#virtualInterface
   */
  readonly virtualInterface?: DirectConnectVirtualInterface;

}

/**
 * @schema DirectConnectCreateConnectionRequest
 */
export interface DirectConnectCreateConnectionRequest {
  /**
   * @schema DirectConnectCreateConnectionRequest#location
   */
  readonly location: string;

  /**
   * @schema DirectConnectCreateConnectionRequest#bandwidth
   */
  readonly bandwidth: string;

  /**
   * @schema DirectConnectCreateConnectionRequest#connectionName
   */
  readonly connectionName: string;

  /**
   * @schema DirectConnectCreateConnectionRequest#lagId
   */
  readonly lagId?: string;

  /**
   * @schema DirectConnectCreateConnectionRequest#tags
   */
  readonly tags?: DirectConnectTag[];

  /**
   * @schema DirectConnectCreateConnectionRequest#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema DirectConnectCreateDirectConnectGatewayRequest
 */
export interface DirectConnectCreateDirectConnectGatewayRequest {
  /**
   * @schema DirectConnectCreateDirectConnectGatewayRequest#directConnectGatewayName
   */
  readonly directConnectGatewayName: string;

  /**
   * @schema DirectConnectCreateDirectConnectGatewayRequest#amazonSideAsn
   */
  readonly amazonSideAsn?: number;

}

/**
 * @schema DirectConnectCreateDirectConnectGatewayResult
 */
export interface DirectConnectCreateDirectConnectGatewayResult {
  /**
   * @schema DirectConnectCreateDirectConnectGatewayResult#directConnectGateway
   */
  readonly directConnectGateway?: DirectConnectDirectConnectGateway;

}

/**
 * @schema DirectConnectCreateDirectConnectGatewayAssociationRequest
 */
export interface DirectConnectCreateDirectConnectGatewayAssociationRequest {
  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId: string;

  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationRequest#gatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationRequest#addAllowedPrefixesToDirectConnectGateway
   */
  readonly addAllowedPrefixesToDirectConnectGateway?: DirectConnectRouteFilterPrefix[];

  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationRequest#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

}

/**
 * @schema DirectConnectCreateDirectConnectGatewayAssociationResult
 */
export interface DirectConnectCreateDirectConnectGatewayAssociationResult {
  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationResult#directConnectGatewayAssociation
   */
  readonly directConnectGatewayAssociation?: DirectConnectDirectConnectGatewayAssociation;

}

/**
 * @schema DirectConnectCreateDirectConnectGatewayAssociationProposalRequest
 */
export interface DirectConnectCreateDirectConnectGatewayAssociationProposalRequest {
  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationProposalRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId: string;

  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationProposalRequest#directConnectGatewayOwnerAccount
   */
  readonly directConnectGatewayOwnerAccount: string;

  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationProposalRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationProposalRequest#addAllowedPrefixesToDirectConnectGateway
   */
  readonly addAllowedPrefixesToDirectConnectGateway?: DirectConnectRouteFilterPrefix[];

  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationProposalRequest#removeAllowedPrefixesToDirectConnectGateway
   */
  readonly removeAllowedPrefixesToDirectConnectGateway?: DirectConnectRouteFilterPrefix[];

}

/**
 * @schema DirectConnectCreateDirectConnectGatewayAssociationProposalResult
 */
export interface DirectConnectCreateDirectConnectGatewayAssociationProposalResult {
  /**
   * @schema DirectConnectCreateDirectConnectGatewayAssociationProposalResult#directConnectGatewayAssociationProposal
   */
  readonly directConnectGatewayAssociationProposal?: DirectConnectDirectConnectGatewayAssociationProposal;

}

/**
 * @schema DirectConnectCreateInterconnectRequest
 */
export interface DirectConnectCreateInterconnectRequest {
  /**
   * @schema DirectConnectCreateInterconnectRequest#interconnectName
   */
  readonly interconnectName: string;

  /**
   * @schema DirectConnectCreateInterconnectRequest#bandwidth
   */
  readonly bandwidth: string;

  /**
   * @schema DirectConnectCreateInterconnectRequest#location
   */
  readonly location: string;

  /**
   * @schema DirectConnectCreateInterconnectRequest#lagId
   */
  readonly lagId?: string;

  /**
   * @schema DirectConnectCreateInterconnectRequest#tags
   */
  readonly tags?: DirectConnectTag[];

  /**
   * @schema DirectConnectCreateInterconnectRequest#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema DirectConnectInterconnect
 */
export interface DirectConnectInterconnect {
  /**
   * @schema DirectConnectInterconnect#interconnectId
   */
  readonly interconnectId?: string;

  /**
   * @schema DirectConnectInterconnect#interconnectName
   */
  readonly interconnectName?: string;

  /**
   * @schema DirectConnectInterconnect#interconnectState
   */
  readonly interconnectState?: string;

  /**
   * @schema DirectConnectInterconnect#region
   */
  readonly region?: string;

  /**
   * @schema DirectConnectInterconnect#location
   */
  readonly location?: string;

  /**
   * @schema DirectConnectInterconnect#bandwidth
   */
  readonly bandwidth?: string;

  /**
   * @schema DirectConnectInterconnect#loaIssueTime
   */
  readonly loaIssueTime?: string;

  /**
   * @schema DirectConnectInterconnect#lagId
   */
  readonly lagId?: string;

  /**
   * @schema DirectConnectInterconnect#awsDevice
   */
  readonly awsDevice?: string;

  /**
   * @schema DirectConnectInterconnect#jumboFrameCapable
   */
  readonly jumboFrameCapable?: boolean;

  /**
   * @schema DirectConnectInterconnect#awsDeviceV2
   */
  readonly awsDeviceV2?: string;

  /**
   * @schema DirectConnectInterconnect#hasLogicalRedundancy
   */
  readonly hasLogicalRedundancy?: string;

  /**
   * @schema DirectConnectInterconnect#tags
   */
  readonly tags?: DirectConnectTag[];

  /**
   * @schema DirectConnectInterconnect#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema DirectConnectCreateLagRequest
 */
export interface DirectConnectCreateLagRequest {
  /**
   * @schema DirectConnectCreateLagRequest#numberOfConnections
   */
  readonly numberOfConnections: number;

  /**
   * @schema DirectConnectCreateLagRequest#location
   */
  readonly location: string;

  /**
   * @schema DirectConnectCreateLagRequest#connectionsBandwidth
   */
  readonly connectionsBandwidth: string;

  /**
   * @schema DirectConnectCreateLagRequest#lagName
   */
  readonly lagName: string;

  /**
   * @schema DirectConnectCreateLagRequest#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema DirectConnectCreateLagRequest#tags
   */
  readonly tags?: DirectConnectTag[];

  /**
   * @schema DirectConnectCreateLagRequest#childConnectionTags
   */
  readonly childConnectionTags?: DirectConnectTag[];

  /**
   * @schema DirectConnectCreateLagRequest#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema DirectConnectLag
 */
export interface DirectConnectLag {
  /**
   * @schema DirectConnectLag#connectionsBandwidth
   */
  readonly connectionsBandwidth?: string;

  /**
   * @schema DirectConnectLag#numberOfConnections
   */
  readonly numberOfConnections?: number;

  /**
   * @schema DirectConnectLag#lagId
   */
  readonly lagId?: string;

  /**
   * @schema DirectConnectLag#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema DirectConnectLag#lagName
   */
  readonly lagName?: string;

  /**
   * @schema DirectConnectLag#lagState
   */
  readonly lagState?: string;

  /**
   * @schema DirectConnectLag#location
   */
  readonly location?: string;

  /**
   * @schema DirectConnectLag#region
   */
  readonly region?: string;

  /**
   * @schema DirectConnectLag#minimumLinks
   */
  readonly minimumLinks?: number;

  /**
   * @schema DirectConnectLag#awsDevice
   */
  readonly awsDevice?: string;

  /**
   * @schema DirectConnectLag#awsDeviceV2
   */
  readonly awsDeviceV2?: string;

  /**
   * @schema DirectConnectLag#connections
   */
  readonly connections?: DirectConnectConnection[];

  /**
   * @schema DirectConnectLag#allowsHostedConnections
   */
  readonly allowsHostedConnections?: boolean;

  /**
   * @schema DirectConnectLag#jumboFrameCapable
   */
  readonly jumboFrameCapable?: boolean;

  /**
   * @schema DirectConnectLag#hasLogicalRedundancy
   */
  readonly hasLogicalRedundancy?: string;

  /**
   * @schema DirectConnectLag#tags
   */
  readonly tags?: DirectConnectTag[];

  /**
   * @schema DirectConnectLag#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema DirectConnectCreatePrivateVirtualInterfaceRequest
 */
export interface DirectConnectCreatePrivateVirtualInterfaceRequest {
  /**
   * @schema DirectConnectCreatePrivateVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectCreatePrivateVirtualInterfaceRequest#newPrivateVirtualInterface
   */
  readonly newPrivateVirtualInterface: DirectConnectNewPrivateVirtualInterface;

}

/**
 * @schema DirectConnectCreatePublicVirtualInterfaceRequest
 */
export interface DirectConnectCreatePublicVirtualInterfaceRequest {
  /**
   * @schema DirectConnectCreatePublicVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectCreatePublicVirtualInterfaceRequest#newPublicVirtualInterface
   */
  readonly newPublicVirtualInterface: DirectConnectNewPublicVirtualInterface;

}

/**
 * @schema DirectConnectCreateTransitVirtualInterfaceRequest
 */
export interface DirectConnectCreateTransitVirtualInterfaceRequest {
  /**
   * @schema DirectConnectCreateTransitVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectCreateTransitVirtualInterfaceRequest#newTransitVirtualInterface
   */
  readonly newTransitVirtualInterface: DirectConnectNewTransitVirtualInterface;

}

/**
 * @schema DirectConnectCreateTransitVirtualInterfaceResult
 */
export interface DirectConnectCreateTransitVirtualInterfaceResult {
  /**
   * @schema DirectConnectCreateTransitVirtualInterfaceResult#virtualInterface
   */
  readonly virtualInterface?: DirectConnectVirtualInterface;

}

/**
 * @schema DirectConnectDeleteBgpPeerRequest
 */
export interface DirectConnectDeleteBgpPeerRequest {
  /**
   * @schema DirectConnectDeleteBgpPeerRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema DirectConnectDeleteBgpPeerRequest#asn
   */
  readonly asn?: number;

  /**
   * @schema DirectConnectDeleteBgpPeerRequest#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema DirectConnectDeleteBgpPeerRequest#bgpPeerId
   */
  readonly bgpPeerId?: string;

}

/**
 * @schema DirectConnectDeleteBgpPeerResponse
 */
export interface DirectConnectDeleteBgpPeerResponse {
  /**
   * @schema DirectConnectDeleteBgpPeerResponse#virtualInterface
   */
  readonly virtualInterface?: DirectConnectVirtualInterface;

}

/**
 * @schema DirectConnectDeleteConnectionRequest
 */
export interface DirectConnectDeleteConnectionRequest {
  /**
   * @schema DirectConnectDeleteConnectionRequest#connectionId
   */
  readonly connectionId: string;

}

/**
 * @schema DirectConnectDeleteDirectConnectGatewayRequest
 */
export interface DirectConnectDeleteDirectConnectGatewayRequest {
  /**
   * @schema DirectConnectDeleteDirectConnectGatewayRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId: string;

}

/**
 * @schema DirectConnectDeleteDirectConnectGatewayResult
 */
export interface DirectConnectDeleteDirectConnectGatewayResult {
  /**
   * @schema DirectConnectDeleteDirectConnectGatewayResult#directConnectGateway
   */
  readonly directConnectGateway?: DirectConnectDirectConnectGateway;

}

/**
 * @schema DirectConnectDeleteDirectConnectGatewayAssociationRequest
 */
export interface DirectConnectDeleteDirectConnectGatewayAssociationRequest {
  /**
   * @schema DirectConnectDeleteDirectConnectGatewayAssociationRequest#associationId
   */
  readonly associationId?: string;

  /**
   * @schema DirectConnectDeleteDirectConnectGatewayAssociationRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectDeleteDirectConnectGatewayAssociationRequest#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

}

/**
 * @schema DirectConnectDeleteDirectConnectGatewayAssociationResult
 */
export interface DirectConnectDeleteDirectConnectGatewayAssociationResult {
  /**
   * @schema DirectConnectDeleteDirectConnectGatewayAssociationResult#directConnectGatewayAssociation
   */
  readonly directConnectGatewayAssociation?: DirectConnectDirectConnectGatewayAssociation;

}

/**
 * @schema DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest
 */
export interface DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest {
  /**
   * @schema DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest#proposalId
   */
  readonly proposalId: string;

}

/**
 * @schema DirectConnectDeleteDirectConnectGatewayAssociationProposalResult
 */
export interface DirectConnectDeleteDirectConnectGatewayAssociationProposalResult {
  /**
   * @schema DirectConnectDeleteDirectConnectGatewayAssociationProposalResult#directConnectGatewayAssociationProposal
   */
  readonly directConnectGatewayAssociationProposal?: DirectConnectDirectConnectGatewayAssociationProposal;

}

/**
 * @schema DirectConnectDeleteInterconnectRequest
 */
export interface DirectConnectDeleteInterconnectRequest {
  /**
   * @schema DirectConnectDeleteInterconnectRequest#interconnectId
   */
  readonly interconnectId: string;

}

/**
 * @schema DirectConnectDeleteInterconnectResponse
 */
export interface DirectConnectDeleteInterconnectResponse {
  /**
   * @schema DirectConnectDeleteInterconnectResponse#interconnectState
   */
  readonly interconnectState?: string;

}

/**
 * @schema DirectConnectDeleteLagRequest
 */
export interface DirectConnectDeleteLagRequest {
  /**
   * @schema DirectConnectDeleteLagRequest#lagId
   */
  readonly lagId: string;

}

/**
 * @schema DirectConnectDeleteVirtualInterfaceRequest
 */
export interface DirectConnectDeleteVirtualInterfaceRequest {
  /**
   * @schema DirectConnectDeleteVirtualInterfaceRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

}

/**
 * @schema DirectConnectDeleteVirtualInterfaceResponse
 */
export interface DirectConnectDeleteVirtualInterfaceResponse {
  /**
   * @schema DirectConnectDeleteVirtualInterfaceResponse#virtualInterfaceState
   */
  readonly virtualInterfaceState?: string;

}

/**
 * @schema DirectConnectDescribeConnectionLoaRequest
 */
export interface DirectConnectDescribeConnectionLoaRequest {
  /**
   * @schema DirectConnectDescribeConnectionLoaRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectDescribeConnectionLoaRequest#providerName
   */
  readonly providerName?: string;

  /**
   * @schema DirectConnectDescribeConnectionLoaRequest#loaContentType
   */
  readonly loaContentType?: string;

}

/**
 * @schema DirectConnectDescribeConnectionLoaResponse
 */
export interface DirectConnectDescribeConnectionLoaResponse {
  /**
   * @schema DirectConnectDescribeConnectionLoaResponse#loa
   */
  readonly loa?: DirectConnectLoa;

}

/**
 * @schema DirectConnectDescribeConnectionsRequest
 */
export interface DirectConnectDescribeConnectionsRequest {
  /**
   * @schema DirectConnectDescribeConnectionsRequest#connectionId
   */
  readonly connectionId?: string;

}

/**
 * @schema DirectConnectConnections
 */
export interface DirectConnectConnections {
  /**
   * @schema DirectConnectConnections#connections
   */
  readonly connections?: DirectConnectConnection[];

}

/**
 * @schema DirectConnectDescribeConnectionsOnInterconnectRequest
 */
export interface DirectConnectDescribeConnectionsOnInterconnectRequest {
  /**
   * @schema DirectConnectDescribeConnectionsOnInterconnectRequest#interconnectId
   */
  readonly interconnectId: string;

}

/**
 * @schema DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest
 */
export interface DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest {
  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest#proposalId
   */
  readonly proposalId?: string;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest#associatedGatewayId
   */
  readonly associatedGatewayId?: string;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult
 */
export interface DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult {
  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult#directConnectGatewayAssociationProposals
   */
  readonly directConnectGatewayAssociationProposals?: DirectConnectDirectConnectGatewayAssociationProposal[];

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DirectConnectDescribeDirectConnectGatewayAssociationsRequest
 */
export interface DirectConnectDescribeDirectConnectGatewayAssociationsRequest {
  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationsRequest#associationId
   */
  readonly associationId?: string;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationsRequest#associatedGatewayId
   */
  readonly associatedGatewayId?: string;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationsRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationsRequest#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

}

/**
 * @schema DirectConnectDescribeDirectConnectGatewayAssociationsResult
 */
export interface DirectConnectDescribeDirectConnectGatewayAssociationsResult {
  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationsResult#directConnectGatewayAssociations
   */
  readonly directConnectGatewayAssociations?: DirectConnectDirectConnectGatewayAssociation[];

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAssociationsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DirectConnectDescribeDirectConnectGatewayAttachmentsRequest
 */
export interface DirectConnectDescribeDirectConnectGatewayAttachmentsRequest {
  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAttachmentsRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAttachmentsRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAttachmentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAttachmentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DirectConnectDescribeDirectConnectGatewayAttachmentsResult
 */
export interface DirectConnectDescribeDirectConnectGatewayAttachmentsResult {
  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAttachmentsResult#directConnectGatewayAttachments
   */
  readonly directConnectGatewayAttachments?: DirectConnectDirectConnectGatewayAttachment[];

  /**
   * @schema DirectConnectDescribeDirectConnectGatewayAttachmentsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DirectConnectDescribeDirectConnectGatewaysRequest
 */
export interface DirectConnectDescribeDirectConnectGatewaysRequest {
  /**
   * @schema DirectConnectDescribeDirectConnectGatewaysRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewaysRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DirectConnectDescribeDirectConnectGatewaysRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DirectConnectDescribeDirectConnectGatewaysResult
 */
export interface DirectConnectDescribeDirectConnectGatewaysResult {
  /**
   * @schema DirectConnectDescribeDirectConnectGatewaysResult#directConnectGateways
   */
  readonly directConnectGateways?: DirectConnectDirectConnectGateway[];

  /**
   * @schema DirectConnectDescribeDirectConnectGatewaysResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DirectConnectDescribeHostedConnectionsRequest
 */
export interface DirectConnectDescribeHostedConnectionsRequest {
  /**
   * @schema DirectConnectDescribeHostedConnectionsRequest#connectionId
   */
  readonly connectionId: string;

}

/**
 * @schema DirectConnectDescribeInterconnectLoaRequest
 */
export interface DirectConnectDescribeInterconnectLoaRequest {
  /**
   * @schema DirectConnectDescribeInterconnectLoaRequest#interconnectId
   */
  readonly interconnectId: string;

  /**
   * @schema DirectConnectDescribeInterconnectLoaRequest#providerName
   */
  readonly providerName?: string;

  /**
   * @schema DirectConnectDescribeInterconnectLoaRequest#loaContentType
   */
  readonly loaContentType?: string;

}

/**
 * @schema DirectConnectDescribeInterconnectLoaResponse
 */
export interface DirectConnectDescribeInterconnectLoaResponse {
  /**
   * @schema DirectConnectDescribeInterconnectLoaResponse#loa
   */
  readonly loa?: DirectConnectLoa;

}

/**
 * @schema DirectConnectDescribeInterconnectsRequest
 */
export interface DirectConnectDescribeInterconnectsRequest {
  /**
   * @schema DirectConnectDescribeInterconnectsRequest#interconnectId
   */
  readonly interconnectId?: string;

}

/**
 * @schema DirectConnectInterconnects
 */
export interface DirectConnectInterconnects {
  /**
   * @schema DirectConnectInterconnects#interconnects
   */
  readonly interconnects?: DirectConnectInterconnect[];

}

/**
 * @schema DirectConnectDescribeLagsRequest
 */
export interface DirectConnectDescribeLagsRequest {
  /**
   * @schema DirectConnectDescribeLagsRequest#lagId
   */
  readonly lagId?: string;

}

/**
 * @schema DirectConnectLags
 */
export interface DirectConnectLags {
  /**
   * @schema DirectConnectLags#lags
   */
  readonly lags?: DirectConnectLag[];

}

/**
 * @schema DirectConnectDescribeLoaRequest
 */
export interface DirectConnectDescribeLoaRequest {
  /**
   * @schema DirectConnectDescribeLoaRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectDescribeLoaRequest#providerName
   */
  readonly providerName?: string;

  /**
   * @schema DirectConnectDescribeLoaRequest#loaContentType
   */
  readonly loaContentType?: string;

}

/**
 * @schema DirectConnectLoa
 */
export interface DirectConnectLoa {
  /**
   * @schema DirectConnectLoa#loaContent
   */
  readonly loaContent?: any;

  /**
   * @schema DirectConnectLoa#loaContentType
   */
  readonly loaContentType?: string;

}

/**
 * @schema DirectConnectLocations
 */
export interface DirectConnectLocations {
  /**
   * @schema DirectConnectLocations#locations
   */
  readonly locations?: DirectConnectLocation[];

}

/**
 * @schema DirectConnectDescribeTagsRequest
 */
export interface DirectConnectDescribeTagsRequest {
  /**
   * @schema DirectConnectDescribeTagsRequest#resourceArns
   */
  readonly resourceArns: string[];

}

/**
 * @schema DirectConnectDescribeTagsResponse
 */
export interface DirectConnectDescribeTagsResponse {
  /**
   * @schema DirectConnectDescribeTagsResponse#resourceTags
   */
  readonly resourceTags?: DirectConnectResourceTag[];

}

/**
 * @schema DirectConnectVirtualGateways
 */
export interface DirectConnectVirtualGateways {
  /**
   * @schema DirectConnectVirtualGateways#virtualGateways
   */
  readonly virtualGateways?: DirectConnectVirtualGateway[];

}

/**
 * @schema DirectConnectDescribeVirtualInterfacesRequest
 */
export interface DirectConnectDescribeVirtualInterfacesRequest {
  /**
   * @schema DirectConnectDescribeVirtualInterfacesRequest#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema DirectConnectDescribeVirtualInterfacesRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

}

/**
 * @schema DirectConnectVirtualInterfaces
 */
export interface DirectConnectVirtualInterfaces {
  /**
   * @schema DirectConnectVirtualInterfaces#virtualInterfaces
   */
  readonly virtualInterfaces?: DirectConnectVirtualInterface[];

}

/**
 * @schema DirectConnectDisassociateConnectionFromLagRequest
 */
export interface DirectConnectDisassociateConnectionFromLagRequest {
  /**
   * @schema DirectConnectDisassociateConnectionFromLagRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectDisassociateConnectionFromLagRequest#lagId
   */
  readonly lagId: string;

}

/**
 * @schema DirectConnectListVirtualInterfaceTestHistoryRequest
 */
export interface DirectConnectListVirtualInterfaceTestHistoryRequest {
  /**
   * @schema DirectConnectListVirtualInterfaceTestHistoryRequest#testId
   */
  readonly testId?: string;

  /**
   * @schema DirectConnectListVirtualInterfaceTestHistoryRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema DirectConnectListVirtualInterfaceTestHistoryRequest#bgpPeers
   */
  readonly bgpPeers?: string[];

  /**
   * @schema DirectConnectListVirtualInterfaceTestHistoryRequest#status
   */
  readonly status?: string;

  /**
   * @schema DirectConnectListVirtualInterfaceTestHistoryRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DirectConnectListVirtualInterfaceTestHistoryRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DirectConnectListVirtualInterfaceTestHistoryResponse
 */
export interface DirectConnectListVirtualInterfaceTestHistoryResponse {
  /**
   * @schema DirectConnectListVirtualInterfaceTestHistoryResponse#virtualInterfaceTestHistory
   */
  readonly virtualInterfaceTestHistory?: DirectConnectVirtualInterfaceTestHistory[];

  /**
   * @schema DirectConnectListVirtualInterfaceTestHistoryResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DirectConnectStartBgpFailoverTestRequest
 */
export interface DirectConnectStartBgpFailoverTestRequest {
  /**
   * @schema DirectConnectStartBgpFailoverTestRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

  /**
   * @schema DirectConnectStartBgpFailoverTestRequest#bgpPeers
   */
  readonly bgpPeers?: string[];

  /**
   * @schema DirectConnectStartBgpFailoverTestRequest#testDurationInMinutes
   */
  readonly testDurationInMinutes?: number;

}

/**
 * @schema DirectConnectStartBgpFailoverTestResponse
 */
export interface DirectConnectStartBgpFailoverTestResponse {
  /**
   * @schema DirectConnectStartBgpFailoverTestResponse#virtualInterfaceTest
   */
  readonly virtualInterfaceTest?: DirectConnectVirtualInterfaceTestHistory;

}

/**
 * @schema DirectConnectStopBgpFailoverTestRequest
 */
export interface DirectConnectStopBgpFailoverTestRequest {
  /**
   * @schema DirectConnectStopBgpFailoverTestRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

}

/**
 * @schema DirectConnectStopBgpFailoverTestResponse
 */
export interface DirectConnectStopBgpFailoverTestResponse {
  /**
   * @schema DirectConnectStopBgpFailoverTestResponse#virtualInterfaceTest
   */
  readonly virtualInterfaceTest?: DirectConnectVirtualInterfaceTestHistory;

}

/**
 * @schema DirectConnectTagResourceRequest
 */
export interface DirectConnectTagResourceRequest {
  /**
   * @schema DirectConnectTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DirectConnectTagResourceRequest#tags
   */
  readonly tags: DirectConnectTag[];

}

/**
 * @schema DirectConnectTagResourceResponse
 */
export interface DirectConnectTagResourceResponse {
}

/**
 * @schema DirectConnectUntagResourceRequest
 */
export interface DirectConnectUntagResourceRequest {
  /**
   * @schema DirectConnectUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DirectConnectUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DirectConnectUntagResourceResponse
 */
export interface DirectConnectUntagResourceResponse {
}

/**
 * @schema DirectConnectUpdateDirectConnectGatewayAssociationRequest
 */
export interface DirectConnectUpdateDirectConnectGatewayAssociationRequest {
  /**
   * @schema DirectConnectUpdateDirectConnectGatewayAssociationRequest#associationId
   */
  readonly associationId?: string;

  /**
   * @schema DirectConnectUpdateDirectConnectGatewayAssociationRequest#addAllowedPrefixesToDirectConnectGateway
   */
  readonly addAllowedPrefixesToDirectConnectGateway?: DirectConnectRouteFilterPrefix[];

  /**
   * @schema DirectConnectUpdateDirectConnectGatewayAssociationRequest#removeAllowedPrefixesToDirectConnectGateway
   */
  readonly removeAllowedPrefixesToDirectConnectGateway?: DirectConnectRouteFilterPrefix[];

}

/**
 * @schema DirectConnectUpdateDirectConnectGatewayAssociationResult
 */
export interface DirectConnectUpdateDirectConnectGatewayAssociationResult {
  /**
   * @schema DirectConnectUpdateDirectConnectGatewayAssociationResult#directConnectGatewayAssociation
   */
  readonly directConnectGatewayAssociation?: DirectConnectDirectConnectGatewayAssociation;

}

/**
 * @schema DirectConnectUpdateLagRequest
 */
export interface DirectConnectUpdateLagRequest {
  /**
   * @schema DirectConnectUpdateLagRequest#lagId
   */
  readonly lagId: string;

  /**
   * @schema DirectConnectUpdateLagRequest#lagName
   */
  readonly lagName?: string;

  /**
   * @schema DirectConnectUpdateLagRequest#minimumLinks
   */
  readonly minimumLinks?: number;

}

/**
 * @schema DirectConnectUpdateVirtualInterfaceAttributesRequest
 */
export interface DirectConnectUpdateVirtualInterfaceAttributesRequest {
  /**
   * @schema DirectConnectUpdateVirtualInterfaceAttributesRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

  /**
   * @schema DirectConnectUpdateVirtualInterfaceAttributesRequest#mtu
   */
  readonly mtu?: number;

}

/**
 * @schema DirectConnectRouteFilterPrefix
 */
export interface DirectConnectRouteFilterPrefix {
  /**
   * @schema DirectConnectRouteFilterPrefix#cidr
   */
  readonly cidr?: string;

}

/**
 * @schema DirectConnectDirectConnectGatewayAssociation
 */
export interface DirectConnectDirectConnectGatewayAssociation {
  /**
   * @schema DirectConnectDirectConnectGatewayAssociation#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociation#directConnectGatewayOwnerAccount
   */
  readonly directConnectGatewayOwnerAccount?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociation#associationState
   */
  readonly associationState?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociation#stateChangeError
   */
  readonly stateChangeError?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociation#associatedGateway
   */
  readonly associatedGateway?: DirectConnectAssociatedGateway;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociation#associationId
   */
  readonly associationId?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociation#allowedPrefixesToDirectConnectGateway
   */
  readonly allowedPrefixesToDirectConnectGateway?: DirectConnectRouteFilterPrefix[];

  /**
   * @schema DirectConnectDirectConnectGatewayAssociation#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociation#virtualGatewayRegion
   */
  readonly virtualGatewayRegion?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociation#virtualGatewayOwnerAccount
   */
  readonly virtualGatewayOwnerAccount?: string;

}

/**
 * @schema DirectConnectTag
 */
export interface DirectConnectTag {
  /**
   * @schema DirectConnectTag#key
   */
  readonly key: string;

  /**
   * @schema DirectConnectTag#value
   */
  readonly value?: string;

}

/**
 * @schema DirectConnectNewPrivateVirtualInterfaceAllocation
 */
export interface DirectConnectNewPrivateVirtualInterfaceAllocation {
  /**
   * @schema DirectConnectNewPrivateVirtualInterfaceAllocation#virtualInterfaceName
   */
  readonly virtualInterfaceName: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterfaceAllocation#vlan
   */
  readonly vlan: number;

  /**
   * @schema DirectConnectNewPrivateVirtualInterfaceAllocation#asn
   */
  readonly asn: number;

  /**
   * @schema DirectConnectNewPrivateVirtualInterfaceAllocation#mtu
   */
  readonly mtu?: number;

  /**
   * @schema DirectConnectNewPrivateVirtualInterfaceAllocation#authKey
   */
  readonly authKey?: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterfaceAllocation#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterfaceAllocation#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterfaceAllocation#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterfaceAllocation#tags
   */
  readonly tags?: DirectConnectTag[];

}

/**
 * @schema DirectConnectBgpPeer
 */
export interface DirectConnectBgpPeer {
  /**
   * @schema DirectConnectBgpPeer#bgpPeerId
   */
  readonly bgpPeerId?: string;

  /**
   * @schema DirectConnectBgpPeer#asn
   */
  readonly asn?: number;

  /**
   * @schema DirectConnectBgpPeer#authKey
   */
  readonly authKey?: string;

  /**
   * @schema DirectConnectBgpPeer#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema DirectConnectBgpPeer#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema DirectConnectBgpPeer#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema DirectConnectBgpPeer#bgpPeerState
   */
  readonly bgpPeerState?: string;

  /**
   * @schema DirectConnectBgpPeer#bgpStatus
   */
  readonly bgpStatus?: string;

  /**
   * @schema DirectConnectBgpPeer#awsDeviceV2
   */
  readonly awsDeviceV2?: string;

}

/**
 * @schema DirectConnectNewPublicVirtualInterfaceAllocation
 */
export interface DirectConnectNewPublicVirtualInterfaceAllocation {
  /**
   * @schema DirectConnectNewPublicVirtualInterfaceAllocation#virtualInterfaceName
   */
  readonly virtualInterfaceName: string;

  /**
   * @schema DirectConnectNewPublicVirtualInterfaceAllocation#vlan
   */
  readonly vlan: number;

  /**
   * @schema DirectConnectNewPublicVirtualInterfaceAllocation#asn
   */
  readonly asn: number;

  /**
   * @schema DirectConnectNewPublicVirtualInterfaceAllocation#authKey
   */
  readonly authKey?: string;

  /**
   * @schema DirectConnectNewPublicVirtualInterfaceAllocation#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema DirectConnectNewPublicVirtualInterfaceAllocation#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema DirectConnectNewPublicVirtualInterfaceAllocation#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema DirectConnectNewPublicVirtualInterfaceAllocation#routeFilterPrefixes
   */
  readonly routeFilterPrefixes?: DirectConnectRouteFilterPrefix[];

  /**
   * @schema DirectConnectNewPublicVirtualInterfaceAllocation#tags
   */
  readonly tags?: DirectConnectTag[];

}

/**
 * @schema DirectConnectNewTransitVirtualInterfaceAllocation
 */
export interface DirectConnectNewTransitVirtualInterfaceAllocation {
  /**
   * @schema DirectConnectNewTransitVirtualInterfaceAllocation#virtualInterfaceName
   */
  readonly virtualInterfaceName?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterfaceAllocation#vlan
   */
  readonly vlan?: number;

  /**
   * @schema DirectConnectNewTransitVirtualInterfaceAllocation#asn
   */
  readonly asn?: number;

  /**
   * @schema DirectConnectNewTransitVirtualInterfaceAllocation#mtu
   */
  readonly mtu?: number;

  /**
   * @schema DirectConnectNewTransitVirtualInterfaceAllocation#authKey
   */
  readonly authKey?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterfaceAllocation#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterfaceAllocation#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterfaceAllocation#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterfaceAllocation#tags
   */
  readonly tags?: DirectConnectTag[];

}

/**
 * @schema DirectConnectNewBgpPeer
 */
export interface DirectConnectNewBgpPeer {
  /**
   * @schema DirectConnectNewBgpPeer#asn
   */
  readonly asn?: number;

  /**
   * @schema DirectConnectNewBgpPeer#authKey
   */
  readonly authKey?: string;

  /**
   * @schema DirectConnectNewBgpPeer#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema DirectConnectNewBgpPeer#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema DirectConnectNewBgpPeer#customerAddress
   */
  readonly customerAddress?: string;

}

/**
 * @schema DirectConnectDirectConnectGateway
 */
export interface DirectConnectDirectConnectGateway {
  /**
   * @schema DirectConnectDirectConnectGateway#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectDirectConnectGateway#directConnectGatewayName
   */
  readonly directConnectGatewayName?: string;

  /**
   * @schema DirectConnectDirectConnectGateway#amazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema DirectConnectDirectConnectGateway#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema DirectConnectDirectConnectGateway#directConnectGatewayState
   */
  readonly directConnectGatewayState?: string;

  /**
   * @schema DirectConnectDirectConnectGateway#stateChangeError
   */
  readonly stateChangeError?: string;

}

/**
 * @schema DirectConnectDirectConnectGatewayAssociationProposal
 */
export interface DirectConnectDirectConnectGatewayAssociationProposal {
  /**
   * @schema DirectConnectDirectConnectGatewayAssociationProposal#proposalId
   */
  readonly proposalId?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociationProposal#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociationProposal#directConnectGatewayOwnerAccount
   */
  readonly directConnectGatewayOwnerAccount?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociationProposal#proposalState
   */
  readonly proposalState?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociationProposal#associatedGateway
   */
  readonly associatedGateway?: DirectConnectAssociatedGateway;

  /**
   * @schema DirectConnectDirectConnectGatewayAssociationProposal#existingAllowedPrefixesToDirectConnectGateway
   */
  readonly existingAllowedPrefixesToDirectConnectGateway?: DirectConnectRouteFilterPrefix[];

  /**
   * @schema DirectConnectDirectConnectGatewayAssociationProposal#requestedAllowedPrefixesToDirectConnectGateway
   */
  readonly requestedAllowedPrefixesToDirectConnectGateway?: DirectConnectRouteFilterPrefix[];

}

/**
 * @schema DirectConnectNewPrivateVirtualInterface
 */
export interface DirectConnectNewPrivateVirtualInterface {
  /**
   * @schema DirectConnectNewPrivateVirtualInterface#virtualInterfaceName
   */
  readonly virtualInterfaceName: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterface#vlan
   */
  readonly vlan: number;

  /**
   * @schema DirectConnectNewPrivateVirtualInterface#asn
   */
  readonly asn: number;

  /**
   * @schema DirectConnectNewPrivateVirtualInterface#mtu
   */
  readonly mtu?: number;

  /**
   * @schema DirectConnectNewPrivateVirtualInterface#authKey
   */
  readonly authKey?: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterface#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterface#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterface#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterface#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterface#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectNewPrivateVirtualInterface#tags
   */
  readonly tags?: DirectConnectTag[];

}

/**
 * @schema DirectConnectNewPublicVirtualInterface
 */
export interface DirectConnectNewPublicVirtualInterface {
  /**
   * @schema DirectConnectNewPublicVirtualInterface#virtualInterfaceName
   */
  readonly virtualInterfaceName: string;

  /**
   * @schema DirectConnectNewPublicVirtualInterface#vlan
   */
  readonly vlan: number;

  /**
   * @schema DirectConnectNewPublicVirtualInterface#asn
   */
  readonly asn: number;

  /**
   * @schema DirectConnectNewPublicVirtualInterface#authKey
   */
  readonly authKey?: string;

  /**
   * @schema DirectConnectNewPublicVirtualInterface#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema DirectConnectNewPublicVirtualInterface#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema DirectConnectNewPublicVirtualInterface#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema DirectConnectNewPublicVirtualInterface#routeFilterPrefixes
   */
  readonly routeFilterPrefixes?: DirectConnectRouteFilterPrefix[];

  /**
   * @schema DirectConnectNewPublicVirtualInterface#tags
   */
  readonly tags?: DirectConnectTag[];

}

/**
 * @schema DirectConnectNewTransitVirtualInterface
 */
export interface DirectConnectNewTransitVirtualInterface {
  /**
   * @schema DirectConnectNewTransitVirtualInterface#virtualInterfaceName
   */
  readonly virtualInterfaceName?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterface#vlan
   */
  readonly vlan?: number;

  /**
   * @schema DirectConnectNewTransitVirtualInterface#asn
   */
  readonly asn?: number;

  /**
   * @schema DirectConnectNewTransitVirtualInterface#mtu
   */
  readonly mtu?: number;

  /**
   * @schema DirectConnectNewTransitVirtualInterface#authKey
   */
  readonly authKey?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterface#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterface#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterface#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterface#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectNewTransitVirtualInterface#tags
   */
  readonly tags?: DirectConnectTag[];

}

/**
 * @schema DirectConnectDirectConnectGatewayAttachment
 */
export interface DirectConnectDirectConnectGatewayAttachment {
  /**
   * @schema DirectConnectDirectConnectGatewayAttachment#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAttachment#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAttachment#virtualInterfaceRegion
   */
  readonly virtualInterfaceRegion?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAttachment#virtualInterfaceOwnerAccount
   */
  readonly virtualInterfaceOwnerAccount?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAttachment#attachmentState
   */
  readonly attachmentState?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAttachment#attachmentType
   */
  readonly attachmentType?: string;

  /**
   * @schema DirectConnectDirectConnectGatewayAttachment#stateChangeError
   */
  readonly stateChangeError?: string;

}

/**
 * @schema DirectConnectLocation
 */
export interface DirectConnectLocation {
  /**
   * @schema DirectConnectLocation#locationCode
   */
  readonly locationCode?: string;

  /**
   * @schema DirectConnectLocation#locationName
   */
  readonly locationName?: string;

  /**
   * @schema DirectConnectLocation#region
   */
  readonly region?: string;

  /**
   * @schema DirectConnectLocation#availablePortSpeeds
   */
  readonly availablePortSpeeds?: string[];

  /**
   * @schema DirectConnectLocation#availableProviders
   */
  readonly availableProviders?: string[];

}

/**
 * @schema DirectConnectResourceTag
 */
export interface DirectConnectResourceTag {
  /**
   * @schema DirectConnectResourceTag#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DirectConnectResourceTag#tags
   */
  readonly tags?: DirectConnectTag[];

}

/**
 * @schema DirectConnectVirtualGateway
 */
export interface DirectConnectVirtualGateway {
  /**
   * @schema DirectConnectVirtualGateway#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

  /**
   * @schema DirectConnectVirtualGateway#virtualGatewayState
   */
  readonly virtualGatewayState?: string;

}

/**
 * @schema DirectConnectVirtualInterfaceTestHistory
 */
export interface DirectConnectVirtualInterfaceTestHistory {
  /**
   * @schema DirectConnectVirtualInterfaceTestHistory#testId
   */
  readonly testId?: string;

  /**
   * @schema DirectConnectVirtualInterfaceTestHistory#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema DirectConnectVirtualInterfaceTestHistory#bgpPeers
   */
  readonly bgpPeers?: string[];

  /**
   * @schema DirectConnectVirtualInterfaceTestHistory#status
   */
  readonly status?: string;

  /**
   * @schema DirectConnectVirtualInterfaceTestHistory#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema DirectConnectVirtualInterfaceTestHistory#testDurationInMinutes
   */
  readonly testDurationInMinutes?: number;

  /**
   * @schema DirectConnectVirtualInterfaceTestHistory#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DirectConnectVirtualInterfaceTestHistory#endTime
   */
  readonly endTime?: string;

}

/**
 * @schema DirectConnectAssociatedGateway
 */
export interface DirectConnectAssociatedGateway {
  /**
   * @schema DirectConnectAssociatedGateway#id
   */
  readonly id?: string;

  /**
   * @schema DirectConnectAssociatedGateway#type
   */
  readonly type?: string;

  /**
   * @schema DirectConnectAssociatedGateway#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema DirectConnectAssociatedGateway#region
   */
  readonly region?: string;

}
