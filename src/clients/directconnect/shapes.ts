/**
 * @schema AcceptDirectConnectGatewayAssociationProposalRequest
 */
export interface AcceptDirectConnectGatewayAssociationProposalRequest {
  /**
   * @schema AcceptDirectConnectGatewayAssociationProposalRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId: string;

  /**
   * @schema AcceptDirectConnectGatewayAssociationProposalRequest#proposalId
   */
  readonly proposalId: string;

  /**
   * @schema AcceptDirectConnectGatewayAssociationProposalRequest#associatedGatewayOwnerAccount
   */
  readonly associatedGatewayOwnerAccount: string;

  /**
   * @schema AcceptDirectConnectGatewayAssociationProposalRequest#overrideAllowedPrefixesToDirectConnectGateway
   */
  readonly overrideAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

}

/**
 * @schema AcceptDirectConnectGatewayAssociationProposalResult
 */
export interface AcceptDirectConnectGatewayAssociationProposalResult {
  /**
   * @schema AcceptDirectConnectGatewayAssociationProposalResult#directConnectGatewayAssociation
   */
  readonly directConnectGatewayAssociation?: DirectConnectGatewayAssociation;

}

/**
 * @schema AllocateConnectionOnInterconnectRequest
 */
export interface AllocateConnectionOnInterconnectRequest {
  /**
   * @schema AllocateConnectionOnInterconnectRequest#bandwidth
   */
  readonly bandwidth: string;

  /**
   * @schema AllocateConnectionOnInterconnectRequest#connectionName
   */
  readonly connectionName: string;

  /**
   * @schema AllocateConnectionOnInterconnectRequest#ownerAccount
   */
  readonly ownerAccount: string;

  /**
   * @schema AllocateConnectionOnInterconnectRequest#interconnectId
   */
  readonly interconnectId: string;

  /**
   * @schema AllocateConnectionOnInterconnectRequest#vlan
   */
  readonly vlan: number;

}

/**
 * @schema Connection
 */
export interface Connection {
  /**
   * @schema Connection#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema Connection#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema Connection#connectionName
   */
  readonly connectionName?: string;

  /**
   * @schema Connection#connectionState
   */
  readonly connectionState?: string;

  /**
   * @schema Connection#region
   */
  readonly region?: string;

  /**
   * @schema Connection#location
   */
  readonly location?: string;

  /**
   * @schema Connection#bandwidth
   */
  readonly bandwidth?: string;

  /**
   * @schema Connection#vlan
   */
  readonly vlan?: number;

  /**
   * @schema Connection#partnerName
   */
  readonly partnerName?: string;

  /**
   * @schema Connection#loaIssueTime
   */
  readonly loaIssueTime?: string;

  /**
   * @schema Connection#lagId
   */
  readonly lagId?: string;

  /**
   * @schema Connection#awsDevice
   */
  readonly awsDevice?: string;

  /**
   * @schema Connection#jumboFrameCapable
   */
  readonly jumboFrameCapable?: boolean;

  /**
   * @schema Connection#awsDeviceV2
   */
  readonly awsDeviceV2?: string;

  /**
   * @schema Connection#hasLogicalRedundancy
   */
  readonly hasLogicalRedundancy?: string;

  /**
   * @schema Connection#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Connection#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema AllocateHostedConnectionRequest
 */
export interface AllocateHostedConnectionRequest {
  /**
   * @schema AllocateHostedConnectionRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema AllocateHostedConnectionRequest#ownerAccount
   */
  readonly ownerAccount: string;

  /**
   * @schema AllocateHostedConnectionRequest#bandwidth
   */
  readonly bandwidth: string;

  /**
   * @schema AllocateHostedConnectionRequest#connectionName
   */
  readonly connectionName: string;

  /**
   * @schema AllocateHostedConnectionRequest#vlan
   */
  readonly vlan: number;

  /**
   * @schema AllocateHostedConnectionRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema AllocatePrivateVirtualInterfaceRequest
 */
export interface AllocatePrivateVirtualInterfaceRequest {
  /**
   * @schema AllocatePrivateVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema AllocatePrivateVirtualInterfaceRequest#ownerAccount
   */
  readonly ownerAccount: string;

  /**
   * @schema AllocatePrivateVirtualInterfaceRequest#newPrivateVirtualInterfaceAllocation
   */
  readonly newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;

}

/**
 * @schema VirtualInterface
 */
export interface VirtualInterface {
  /**
   * @schema VirtualInterface#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema VirtualInterface#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema VirtualInterface#location
   */
  readonly location?: string;

  /**
   * @schema VirtualInterface#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema VirtualInterface#virtualInterfaceType
   */
  readonly virtualInterfaceType?: string;

  /**
   * @schema VirtualInterface#virtualInterfaceName
   */
  readonly virtualInterfaceName?: string;

  /**
   * @schema VirtualInterface#vlan
   */
  readonly vlan?: number;

  /**
   * @schema VirtualInterface#asn
   */
  readonly asn?: number;

  /**
   * @schema VirtualInterface#amazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema VirtualInterface#authKey
   */
  readonly authKey?: string;

  /**
   * @schema VirtualInterface#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema VirtualInterface#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema VirtualInterface#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema VirtualInterface#virtualInterfaceState
   */
  readonly virtualInterfaceState?: string;

  /**
   * @schema VirtualInterface#customerRouterConfig
   */
  readonly customerRouterConfig?: string;

  /**
   * @schema VirtualInterface#mtu
   */
  readonly mtu?: number;

  /**
   * @schema VirtualInterface#jumboFrameCapable
   */
  readonly jumboFrameCapable?: boolean;

  /**
   * @schema VirtualInterface#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

  /**
   * @schema VirtualInterface#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema VirtualInterface#routeFilterPrefixes
   */
  readonly routeFilterPrefixes?: RouteFilterPrefix[];

  /**
   * @schema VirtualInterface#bgpPeers
   */
  readonly bgpPeers?: BgpPeer[];

  /**
   * @schema VirtualInterface#region
   */
  readonly region?: string;

  /**
   * @schema VirtualInterface#awsDeviceV2
   */
  readonly awsDeviceV2?: string;

  /**
   * @schema VirtualInterface#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema AllocatePublicVirtualInterfaceRequest
 */
export interface AllocatePublicVirtualInterfaceRequest {
  /**
   * @schema AllocatePublicVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema AllocatePublicVirtualInterfaceRequest#ownerAccount
   */
  readonly ownerAccount: string;

  /**
   * @schema AllocatePublicVirtualInterfaceRequest#newPublicVirtualInterfaceAllocation
   */
  readonly newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;

}

/**
 * @schema AllocateTransitVirtualInterfaceRequest
 */
export interface AllocateTransitVirtualInterfaceRequest {
  /**
   * @schema AllocateTransitVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema AllocateTransitVirtualInterfaceRequest#ownerAccount
   */
  readonly ownerAccount: string;

  /**
   * @schema AllocateTransitVirtualInterfaceRequest#newTransitVirtualInterfaceAllocation
   */
  readonly newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation;

}

/**
 * @schema AllocateTransitVirtualInterfaceResult
 */
export interface AllocateTransitVirtualInterfaceResult {
  /**
   * @schema AllocateTransitVirtualInterfaceResult#virtualInterface
   */
  readonly virtualInterface?: VirtualInterface;

}

/**
 * @schema AssociateConnectionWithLagRequest
 */
export interface AssociateConnectionWithLagRequest {
  /**
   * @schema AssociateConnectionWithLagRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema AssociateConnectionWithLagRequest#lagId
   */
  readonly lagId: string;

}

/**
 * @schema AssociateHostedConnectionRequest
 */
export interface AssociateHostedConnectionRequest {
  /**
   * @schema AssociateHostedConnectionRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema AssociateHostedConnectionRequest#parentConnectionId
   */
  readonly parentConnectionId: string;

}

/**
 * @schema AssociateVirtualInterfaceRequest
 */
export interface AssociateVirtualInterfaceRequest {
  /**
   * @schema AssociateVirtualInterfaceRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

  /**
   * @schema AssociateVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

}

/**
 * @schema ConfirmConnectionRequest
 */
export interface ConfirmConnectionRequest {
  /**
   * @schema ConfirmConnectionRequest#connectionId
   */
  readonly connectionId: string;

}

/**
 * @schema ConfirmConnectionResponse
 */
export interface ConfirmConnectionResponse {
  /**
   * @schema ConfirmConnectionResponse#connectionState
   */
  readonly connectionState?: string;

}

/**
 * @schema ConfirmPrivateVirtualInterfaceRequest
 */
export interface ConfirmPrivateVirtualInterfaceRequest {
  /**
   * @schema ConfirmPrivateVirtualInterfaceRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

  /**
   * @schema ConfirmPrivateVirtualInterfaceRequest#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

  /**
   * @schema ConfirmPrivateVirtualInterfaceRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

}

/**
 * @schema ConfirmPrivateVirtualInterfaceResponse
 */
export interface ConfirmPrivateVirtualInterfaceResponse {
  /**
   * @schema ConfirmPrivateVirtualInterfaceResponse#virtualInterfaceState
   */
  readonly virtualInterfaceState?: string;

}

/**
 * @schema ConfirmPublicVirtualInterfaceRequest
 */
export interface ConfirmPublicVirtualInterfaceRequest {
  /**
   * @schema ConfirmPublicVirtualInterfaceRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

}

/**
 * @schema ConfirmPublicVirtualInterfaceResponse
 */
export interface ConfirmPublicVirtualInterfaceResponse {
  /**
   * @schema ConfirmPublicVirtualInterfaceResponse#virtualInterfaceState
   */
  readonly virtualInterfaceState?: string;

}

/**
 * @schema ConfirmTransitVirtualInterfaceRequest
 */
export interface ConfirmTransitVirtualInterfaceRequest {
  /**
   * @schema ConfirmTransitVirtualInterfaceRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

  /**
   * @schema ConfirmTransitVirtualInterfaceRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId: string;

}

/**
 * @schema ConfirmTransitVirtualInterfaceResponse
 */
export interface ConfirmTransitVirtualInterfaceResponse {
  /**
   * @schema ConfirmTransitVirtualInterfaceResponse#virtualInterfaceState
   */
  readonly virtualInterfaceState?: string;

}

/**
 * @schema CreateBgpPeerRequest
 */
export interface CreateBgpPeerRequest {
  /**
   * @schema CreateBgpPeerRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema CreateBgpPeerRequest#newBGPPeer
   */
  readonly newBGPPeer?: NewBgpPeer;

}

/**
 * @schema CreateBgpPeerResponse
 */
export interface CreateBgpPeerResponse {
  /**
   * @schema CreateBgpPeerResponse#virtualInterface
   */
  readonly virtualInterface?: VirtualInterface;

}

/**
 * @schema CreateConnectionRequest
 */
export interface CreateConnectionRequest {
  /**
   * @schema CreateConnectionRequest#location
   */
  readonly location: string;

  /**
   * @schema CreateConnectionRequest#bandwidth
   */
  readonly bandwidth: string;

  /**
   * @schema CreateConnectionRequest#connectionName
   */
  readonly connectionName: string;

  /**
   * @schema CreateConnectionRequest#lagId
   */
  readonly lagId?: string;

  /**
   * @schema CreateConnectionRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateConnectionRequest#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema CreateDirectConnectGatewayRequest
 */
export interface CreateDirectConnectGatewayRequest {
  /**
   * @schema CreateDirectConnectGatewayRequest#directConnectGatewayName
   */
  readonly directConnectGatewayName: string;

  /**
   * @schema CreateDirectConnectGatewayRequest#amazonSideAsn
   */
  readonly amazonSideAsn?: number;

}

/**
 * @schema CreateDirectConnectGatewayResult
 */
export interface CreateDirectConnectGatewayResult {
  /**
   * @schema CreateDirectConnectGatewayResult#directConnectGateway
   */
  readonly directConnectGateway?: DirectConnectGateway;

}

/**
 * @schema CreateDirectConnectGatewayAssociationRequest
 */
export interface CreateDirectConnectGatewayAssociationRequest {
  /**
   * @schema CreateDirectConnectGatewayAssociationRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId: string;

  /**
   * @schema CreateDirectConnectGatewayAssociationRequest#gatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema CreateDirectConnectGatewayAssociationRequest#addAllowedPrefixesToDirectConnectGateway
   */
  readonly addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * @schema CreateDirectConnectGatewayAssociationRequest#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

}

/**
 * @schema CreateDirectConnectGatewayAssociationResult
 */
export interface CreateDirectConnectGatewayAssociationResult {
  /**
   * @schema CreateDirectConnectGatewayAssociationResult#directConnectGatewayAssociation
   */
  readonly directConnectGatewayAssociation?: DirectConnectGatewayAssociation;

}

/**
 * @schema CreateDirectConnectGatewayAssociationProposalRequest
 */
export interface CreateDirectConnectGatewayAssociationProposalRequest {
  /**
   * @schema CreateDirectConnectGatewayAssociationProposalRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId: string;

  /**
   * @schema CreateDirectConnectGatewayAssociationProposalRequest#directConnectGatewayOwnerAccount
   */
  readonly directConnectGatewayOwnerAccount: string;

  /**
   * @schema CreateDirectConnectGatewayAssociationProposalRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema CreateDirectConnectGatewayAssociationProposalRequest#addAllowedPrefixesToDirectConnectGateway
   */
  readonly addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * @schema CreateDirectConnectGatewayAssociationProposalRequest#removeAllowedPrefixesToDirectConnectGateway
   */
  readonly removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

}

/**
 * @schema CreateDirectConnectGatewayAssociationProposalResult
 */
export interface CreateDirectConnectGatewayAssociationProposalResult {
  /**
   * @schema CreateDirectConnectGatewayAssociationProposalResult#directConnectGatewayAssociationProposal
   */
  readonly directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;

}

/**
 * @schema CreateInterconnectRequest
 */
export interface CreateInterconnectRequest {
  /**
   * @schema CreateInterconnectRequest#interconnectName
   */
  readonly interconnectName: string;

  /**
   * @schema CreateInterconnectRequest#bandwidth
   */
  readonly bandwidth: string;

  /**
   * @schema CreateInterconnectRequest#location
   */
  readonly location: string;

  /**
   * @schema CreateInterconnectRequest#lagId
   */
  readonly lagId?: string;

  /**
   * @schema CreateInterconnectRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateInterconnectRequest#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema Interconnect
 */
export interface Interconnect {
  /**
   * @schema Interconnect#interconnectId
   */
  readonly interconnectId?: string;

  /**
   * @schema Interconnect#interconnectName
   */
  readonly interconnectName?: string;

  /**
   * @schema Interconnect#interconnectState
   */
  readonly interconnectState?: string;

  /**
   * @schema Interconnect#region
   */
  readonly region?: string;

  /**
   * @schema Interconnect#location
   */
  readonly location?: string;

  /**
   * @schema Interconnect#bandwidth
   */
  readonly bandwidth?: string;

  /**
   * @schema Interconnect#loaIssueTime
   */
  readonly loaIssueTime?: string;

  /**
   * @schema Interconnect#lagId
   */
  readonly lagId?: string;

  /**
   * @schema Interconnect#awsDevice
   */
  readonly awsDevice?: string;

  /**
   * @schema Interconnect#jumboFrameCapable
   */
  readonly jumboFrameCapable?: boolean;

  /**
   * @schema Interconnect#awsDeviceV2
   */
  readonly awsDeviceV2?: string;

  /**
   * @schema Interconnect#hasLogicalRedundancy
   */
  readonly hasLogicalRedundancy?: string;

  /**
   * @schema Interconnect#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Interconnect#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema CreateLagRequest
 */
export interface CreateLagRequest {
  /**
   * @schema CreateLagRequest#numberOfConnections
   */
  readonly numberOfConnections: number;

  /**
   * @schema CreateLagRequest#location
   */
  readonly location: string;

  /**
   * @schema CreateLagRequest#connectionsBandwidth
   */
  readonly connectionsBandwidth: string;

  /**
   * @schema CreateLagRequest#lagName
   */
  readonly lagName: string;

  /**
   * @schema CreateLagRequest#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema CreateLagRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateLagRequest#childConnectionTags
   */
  readonly childConnectionTags?: Tag[];

  /**
   * @schema CreateLagRequest#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema Lag
 */
export interface Lag {
  /**
   * @schema Lag#connectionsBandwidth
   */
  readonly connectionsBandwidth?: string;

  /**
   * @schema Lag#numberOfConnections
   */
  readonly numberOfConnections?: number;

  /**
   * @schema Lag#lagId
   */
  readonly lagId?: string;

  /**
   * @schema Lag#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema Lag#lagName
   */
  readonly lagName?: string;

  /**
   * @schema Lag#lagState
   */
  readonly lagState?: string;

  /**
   * @schema Lag#location
   */
  readonly location?: string;

  /**
   * @schema Lag#region
   */
  readonly region?: string;

  /**
   * @schema Lag#minimumLinks
   */
  readonly minimumLinks?: number;

  /**
   * @schema Lag#awsDevice
   */
  readonly awsDevice?: string;

  /**
   * @schema Lag#awsDeviceV2
   */
  readonly awsDeviceV2?: string;

  /**
   * @schema Lag#connections
   */
  readonly connections?: Connection[];

  /**
   * @schema Lag#allowsHostedConnections
   */
  readonly allowsHostedConnections?: boolean;

  /**
   * @schema Lag#jumboFrameCapable
   */
  readonly jumboFrameCapable?: boolean;

  /**
   * @schema Lag#hasLogicalRedundancy
   */
  readonly hasLogicalRedundancy?: string;

  /**
   * @schema Lag#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Lag#providerName
   */
  readonly providerName?: string;

}

/**
 * @schema CreatePrivateVirtualInterfaceRequest
 */
export interface CreatePrivateVirtualInterfaceRequest {
  /**
   * @schema CreatePrivateVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema CreatePrivateVirtualInterfaceRequest#newPrivateVirtualInterface
   */
  readonly newPrivateVirtualInterface: NewPrivateVirtualInterface;

}

/**
 * @schema CreatePublicVirtualInterfaceRequest
 */
export interface CreatePublicVirtualInterfaceRequest {
  /**
   * @schema CreatePublicVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema CreatePublicVirtualInterfaceRequest#newPublicVirtualInterface
   */
  readonly newPublicVirtualInterface: NewPublicVirtualInterface;

}

/**
 * @schema CreateTransitVirtualInterfaceRequest
 */
export interface CreateTransitVirtualInterfaceRequest {
  /**
   * @schema CreateTransitVirtualInterfaceRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema CreateTransitVirtualInterfaceRequest#newTransitVirtualInterface
   */
  readonly newTransitVirtualInterface: NewTransitVirtualInterface;

}

/**
 * @schema CreateTransitVirtualInterfaceResult
 */
export interface CreateTransitVirtualInterfaceResult {
  /**
   * @schema CreateTransitVirtualInterfaceResult#virtualInterface
   */
  readonly virtualInterface?: VirtualInterface;

}

/**
 * @schema DeleteBgpPeerRequest
 */
export interface DeleteBgpPeerRequest {
  /**
   * @schema DeleteBgpPeerRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema DeleteBgpPeerRequest#asn
   */
  readonly asn?: number;

  /**
   * @schema DeleteBgpPeerRequest#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema DeleteBgpPeerRequest#bgpPeerId
   */
  readonly bgpPeerId?: string;

}

/**
 * @schema DeleteBgpPeerResponse
 */
export interface DeleteBgpPeerResponse {
  /**
   * @schema DeleteBgpPeerResponse#virtualInterface
   */
  readonly virtualInterface?: VirtualInterface;

}

/**
 * @schema DeleteConnectionRequest
 */
export interface DeleteConnectionRequest {
  /**
   * @schema DeleteConnectionRequest#connectionId
   */
  readonly connectionId: string;

}

/**
 * @schema DeleteDirectConnectGatewayRequest
 */
export interface DeleteDirectConnectGatewayRequest {
  /**
   * @schema DeleteDirectConnectGatewayRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId: string;

}

/**
 * @schema DeleteDirectConnectGatewayResult
 */
export interface DeleteDirectConnectGatewayResult {
  /**
   * @schema DeleteDirectConnectGatewayResult#directConnectGateway
   */
  readonly directConnectGateway?: DirectConnectGateway;

}

/**
 * @schema DeleteDirectConnectGatewayAssociationRequest
 */
export interface DeleteDirectConnectGatewayAssociationRequest {
  /**
   * @schema DeleteDirectConnectGatewayAssociationRequest#associationId
   */
  readonly associationId?: string;

  /**
   * @schema DeleteDirectConnectGatewayAssociationRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DeleteDirectConnectGatewayAssociationRequest#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

}

/**
 * @schema DeleteDirectConnectGatewayAssociationResult
 */
export interface DeleteDirectConnectGatewayAssociationResult {
  /**
   * @schema DeleteDirectConnectGatewayAssociationResult#directConnectGatewayAssociation
   */
  readonly directConnectGatewayAssociation?: DirectConnectGatewayAssociation;

}

/**
 * @schema DeleteDirectConnectGatewayAssociationProposalRequest
 */
export interface DeleteDirectConnectGatewayAssociationProposalRequest {
  /**
   * @schema DeleteDirectConnectGatewayAssociationProposalRequest#proposalId
   */
  readonly proposalId: string;

}

/**
 * @schema DeleteDirectConnectGatewayAssociationProposalResult
 */
export interface DeleteDirectConnectGatewayAssociationProposalResult {
  /**
   * @schema DeleteDirectConnectGatewayAssociationProposalResult#directConnectGatewayAssociationProposal
   */
  readonly directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;

}

/**
 * @schema DeleteInterconnectRequest
 */
export interface DeleteInterconnectRequest {
  /**
   * @schema DeleteInterconnectRequest#interconnectId
   */
  readonly interconnectId: string;

}

/**
 * @schema DeleteInterconnectResponse
 */
export interface DeleteInterconnectResponse {
  /**
   * @schema DeleteInterconnectResponse#interconnectState
   */
  readonly interconnectState?: string;

}

/**
 * @schema DeleteLagRequest
 */
export interface DeleteLagRequest {
  /**
   * @schema DeleteLagRequest#lagId
   */
  readonly lagId: string;

}

/**
 * @schema DeleteVirtualInterfaceRequest
 */
export interface DeleteVirtualInterfaceRequest {
  /**
   * @schema DeleteVirtualInterfaceRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

}

/**
 * @schema DeleteVirtualInterfaceResponse
 */
export interface DeleteVirtualInterfaceResponse {
  /**
   * @schema DeleteVirtualInterfaceResponse#virtualInterfaceState
   */
  readonly virtualInterfaceState?: string;

}

/**
 * @schema DescribeConnectionLoaRequest
 */
export interface DescribeConnectionLoaRequest {
  /**
   * @schema DescribeConnectionLoaRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DescribeConnectionLoaRequest#providerName
   */
  readonly providerName?: string;

  /**
   * @schema DescribeConnectionLoaRequest#loaContentType
   */
  readonly loaContentType?: string;

}

/**
 * @schema DescribeConnectionLoaResponse
 */
export interface DescribeConnectionLoaResponse {
  /**
   * @schema DescribeConnectionLoaResponse#loa
   */
  readonly loa?: Loa;

}

/**
 * @schema DescribeConnectionsRequest
 */
export interface DescribeConnectionsRequest {
  /**
   * @schema DescribeConnectionsRequest#connectionId
   */
  readonly connectionId?: string;

}

/**
 * @schema Connections
 */
export interface Connections {
  /**
   * @schema Connections#connections
   */
  readonly connections?: Connection[];

}

/**
 * @schema DescribeConnectionsOnInterconnectRequest
 */
export interface DescribeConnectionsOnInterconnectRequest {
  /**
   * @schema DescribeConnectionsOnInterconnectRequest#interconnectId
   */
  readonly interconnectId: string;

}

/**
 * @schema DescribeDirectConnectGatewayAssociationProposalsRequest
 */
export interface DescribeDirectConnectGatewayAssociationProposalsRequest {
  /**
   * @schema DescribeDirectConnectGatewayAssociationProposalsRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DescribeDirectConnectGatewayAssociationProposalsRequest#proposalId
   */
  readonly proposalId?: string;

  /**
   * @schema DescribeDirectConnectGatewayAssociationProposalsRequest#associatedGatewayId
   */
  readonly associatedGatewayId?: string;

  /**
   * @schema DescribeDirectConnectGatewayAssociationProposalsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeDirectConnectGatewayAssociationProposalsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDirectConnectGatewayAssociationProposalsResult
 */
export interface DescribeDirectConnectGatewayAssociationProposalsResult {
  /**
   * @schema DescribeDirectConnectGatewayAssociationProposalsResult#directConnectGatewayAssociationProposals
   */
  readonly directConnectGatewayAssociationProposals?: DirectConnectGatewayAssociationProposal[];

  /**
   * @schema DescribeDirectConnectGatewayAssociationProposalsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDirectConnectGatewayAssociationsRequest
 */
export interface DescribeDirectConnectGatewayAssociationsRequest {
  /**
   * @schema DescribeDirectConnectGatewayAssociationsRequest#associationId
   */
  readonly associationId?: string;

  /**
   * @schema DescribeDirectConnectGatewayAssociationsRequest#associatedGatewayId
   */
  readonly associatedGatewayId?: string;

  /**
   * @schema DescribeDirectConnectGatewayAssociationsRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DescribeDirectConnectGatewayAssociationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeDirectConnectGatewayAssociationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeDirectConnectGatewayAssociationsRequest#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

}

/**
 * @schema DescribeDirectConnectGatewayAssociationsResult
 */
export interface DescribeDirectConnectGatewayAssociationsResult {
  /**
   * @schema DescribeDirectConnectGatewayAssociationsResult#directConnectGatewayAssociations
   */
  readonly directConnectGatewayAssociations?: DirectConnectGatewayAssociation[];

  /**
   * @schema DescribeDirectConnectGatewayAssociationsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDirectConnectGatewayAttachmentsRequest
 */
export interface DescribeDirectConnectGatewayAttachmentsRequest {
  /**
   * @schema DescribeDirectConnectGatewayAttachmentsRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DescribeDirectConnectGatewayAttachmentsRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema DescribeDirectConnectGatewayAttachmentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeDirectConnectGatewayAttachmentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDirectConnectGatewayAttachmentsResult
 */
export interface DescribeDirectConnectGatewayAttachmentsResult {
  /**
   * @schema DescribeDirectConnectGatewayAttachmentsResult#directConnectGatewayAttachments
   */
  readonly directConnectGatewayAttachments?: DirectConnectGatewayAttachment[];

  /**
   * @schema DescribeDirectConnectGatewayAttachmentsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDirectConnectGatewaysRequest
 */
export interface DescribeDirectConnectGatewaysRequest {
  /**
   * @schema DescribeDirectConnectGatewaysRequest#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DescribeDirectConnectGatewaysRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeDirectConnectGatewaysRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDirectConnectGatewaysResult
 */
export interface DescribeDirectConnectGatewaysResult {
  /**
   * @schema DescribeDirectConnectGatewaysResult#directConnectGateways
   */
  readonly directConnectGateways?: DirectConnectGateway[];

  /**
   * @schema DescribeDirectConnectGatewaysResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeHostedConnectionsRequest
 */
export interface DescribeHostedConnectionsRequest {
  /**
   * @schema DescribeHostedConnectionsRequest#connectionId
   */
  readonly connectionId: string;

}

/**
 * @schema DescribeInterconnectLoaRequest
 */
export interface DescribeInterconnectLoaRequest {
  /**
   * @schema DescribeInterconnectLoaRequest#interconnectId
   */
  readonly interconnectId: string;

  /**
   * @schema DescribeInterconnectLoaRequest#providerName
   */
  readonly providerName?: string;

  /**
   * @schema DescribeInterconnectLoaRequest#loaContentType
   */
  readonly loaContentType?: string;

}

/**
 * @schema DescribeInterconnectLoaResponse
 */
export interface DescribeInterconnectLoaResponse {
  /**
   * @schema DescribeInterconnectLoaResponse#loa
   */
  readonly loa?: Loa;

}

/**
 * @schema DescribeInterconnectsRequest
 */
export interface DescribeInterconnectsRequest {
  /**
   * @schema DescribeInterconnectsRequest#interconnectId
   */
  readonly interconnectId?: string;

}

/**
 * @schema Interconnects
 */
export interface Interconnects {
  /**
   * @schema Interconnects#interconnects
   */
  readonly interconnects?: Interconnect[];

}

/**
 * @schema DescribeLagsRequest
 */
export interface DescribeLagsRequest {
  /**
   * @schema DescribeLagsRequest#lagId
   */
  readonly lagId?: string;

}

/**
 * @schema Lags
 */
export interface Lags {
  /**
   * @schema Lags#lags
   */
  readonly lags?: Lag[];

}

/**
 * @schema DescribeLoaRequest
 */
export interface DescribeLoaRequest {
  /**
   * @schema DescribeLoaRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DescribeLoaRequest#providerName
   */
  readonly providerName?: string;

  /**
   * @schema DescribeLoaRequest#loaContentType
   */
  readonly loaContentType?: string;

}

/**
 * @schema Loa
 */
export interface Loa {
  /**
   * @schema Loa#loaContent
   */
  readonly loaContent?: any;

  /**
   * @schema Loa#loaContentType
   */
  readonly loaContentType?: string;

}

/**
 * @schema Locations
 */
export interface Locations {
  /**
   * @schema Locations#locations
   */
  readonly locations?: Location[];

}

/**
 * @schema DescribeTagsRequest
 */
export interface DescribeTagsRequest {
  /**
   * @schema DescribeTagsRequest#resourceArns
   */
  readonly resourceArns: string[];

}

/**
 * @schema DescribeTagsResponse
 */
export interface DescribeTagsResponse {
  /**
   * @schema DescribeTagsResponse#resourceTags
   */
  readonly resourceTags?: ResourceTag[];

}

/**
 * @schema VirtualGateways
 */
export interface VirtualGateways {
  /**
   * @schema VirtualGateways#virtualGateways
   */
  readonly virtualGateways?: VirtualGateway[];

}

/**
 * @schema DescribeVirtualInterfacesRequest
 */
export interface DescribeVirtualInterfacesRequest {
  /**
   * @schema DescribeVirtualInterfacesRequest#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema DescribeVirtualInterfacesRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

}

/**
 * @schema VirtualInterfaces
 */
export interface VirtualInterfaces {
  /**
   * @schema VirtualInterfaces#virtualInterfaces
   */
  readonly virtualInterfaces?: VirtualInterface[];

}

/**
 * @schema DisassociateConnectionFromLagRequest
 */
export interface DisassociateConnectionFromLagRequest {
  /**
   * @schema DisassociateConnectionFromLagRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DisassociateConnectionFromLagRequest#lagId
   */
  readonly lagId: string;

}

/**
 * @schema ListVirtualInterfaceTestHistoryRequest
 */
export interface ListVirtualInterfaceTestHistoryRequest {
  /**
   * @schema ListVirtualInterfaceTestHistoryRequest#testId
   */
  readonly testId?: string;

  /**
   * @schema ListVirtualInterfaceTestHistoryRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema ListVirtualInterfaceTestHistoryRequest#bgpPeers
   */
  readonly bgpPeers?: string[];

  /**
   * @schema ListVirtualInterfaceTestHistoryRequest#status
   */
  readonly status?: string;

  /**
   * @schema ListVirtualInterfaceTestHistoryRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListVirtualInterfaceTestHistoryRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListVirtualInterfaceTestHistoryResponse
 */
export interface ListVirtualInterfaceTestHistoryResponse {
  /**
   * @schema ListVirtualInterfaceTestHistoryResponse#virtualInterfaceTestHistory
   */
  readonly virtualInterfaceTestHistory?: VirtualInterfaceTestHistory[];

  /**
   * @schema ListVirtualInterfaceTestHistoryResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartBgpFailoverTestRequest
 */
export interface StartBgpFailoverTestRequest {
  /**
   * @schema StartBgpFailoverTestRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

  /**
   * @schema StartBgpFailoverTestRequest#bgpPeers
   */
  readonly bgpPeers?: string[];

  /**
   * @schema StartBgpFailoverTestRequest#testDurationInMinutes
   */
  readonly testDurationInMinutes?: number;

}

/**
 * @schema StartBgpFailoverTestResponse
 */
export interface StartBgpFailoverTestResponse {
  /**
   * @schema StartBgpFailoverTestResponse#virtualInterfaceTest
   */
  readonly virtualInterfaceTest?: VirtualInterfaceTestHistory;

}

/**
 * @schema StopBgpFailoverTestRequest
 */
export interface StopBgpFailoverTestRequest {
  /**
   * @schema StopBgpFailoverTestRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

}

/**
 * @schema StopBgpFailoverTestResponse
 */
export interface StopBgpFailoverTestResponse {
  /**
   * @schema StopBgpFailoverTestResponse#virtualInterfaceTest
   */
  readonly virtualInterfaceTest?: VirtualInterfaceTestHistory;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
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
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateDirectConnectGatewayAssociationRequest
 */
export interface UpdateDirectConnectGatewayAssociationRequest {
  /**
   * @schema UpdateDirectConnectGatewayAssociationRequest#associationId
   */
  readonly associationId?: string;

  /**
   * @schema UpdateDirectConnectGatewayAssociationRequest#addAllowedPrefixesToDirectConnectGateway
   */
  readonly addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * @schema UpdateDirectConnectGatewayAssociationRequest#removeAllowedPrefixesToDirectConnectGateway
   */
  readonly removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

}

/**
 * @schema UpdateDirectConnectGatewayAssociationResult
 */
export interface UpdateDirectConnectGatewayAssociationResult {
  /**
   * @schema UpdateDirectConnectGatewayAssociationResult#directConnectGatewayAssociation
   */
  readonly directConnectGatewayAssociation?: DirectConnectGatewayAssociation;

}

/**
 * @schema UpdateLagRequest
 */
export interface UpdateLagRequest {
  /**
   * @schema UpdateLagRequest#lagId
   */
  readonly lagId: string;

  /**
   * @schema UpdateLagRequest#lagName
   */
  readonly lagName?: string;

  /**
   * @schema UpdateLagRequest#minimumLinks
   */
  readonly minimumLinks?: number;

}

/**
 * @schema UpdateVirtualInterfaceAttributesRequest
 */
export interface UpdateVirtualInterfaceAttributesRequest {
  /**
   * @schema UpdateVirtualInterfaceAttributesRequest#virtualInterfaceId
   */
  readonly virtualInterfaceId: string;

  /**
   * @schema UpdateVirtualInterfaceAttributesRequest#mtu
   */
  readonly mtu?: number;

}

/**
 * @schema RouteFilterPrefix
 */
export interface RouteFilterPrefix {
  /**
   * @schema RouteFilterPrefix#cidr
   */
  readonly cidr?: string;

}

/**
 * @schema DirectConnectGatewayAssociation
 */
export interface DirectConnectGatewayAssociation {
  /**
   * @schema DirectConnectGatewayAssociation#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectGatewayAssociation#directConnectGatewayOwnerAccount
   */
  readonly directConnectGatewayOwnerAccount?: string;

  /**
   * @schema DirectConnectGatewayAssociation#associationState
   */
  readonly associationState?: string;

  /**
   * @schema DirectConnectGatewayAssociation#stateChangeError
   */
  readonly stateChangeError?: string;

  /**
   * @schema DirectConnectGatewayAssociation#associatedGateway
   */
  readonly associatedGateway?: AssociatedGateway;

  /**
   * @schema DirectConnectGatewayAssociation#associationId
   */
  readonly associationId?: string;

  /**
   * @schema DirectConnectGatewayAssociation#allowedPrefixesToDirectConnectGateway
   */
  readonly allowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * @schema DirectConnectGatewayAssociation#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

  /**
   * @schema DirectConnectGatewayAssociation#virtualGatewayRegion
   */
  readonly virtualGatewayRegion?: string;

  /**
   * @schema DirectConnectGatewayAssociation#virtualGatewayOwnerAccount
   */
  readonly virtualGatewayOwnerAccount?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key: string;

  /**
   * @schema Tag#value
   */
  readonly value?: string;

}

/**
 * @schema NewPrivateVirtualInterfaceAllocation
 */
export interface NewPrivateVirtualInterfaceAllocation {
  /**
   * @schema NewPrivateVirtualInterfaceAllocation#virtualInterfaceName
   */
  readonly virtualInterfaceName: string;

  /**
   * @schema NewPrivateVirtualInterfaceAllocation#vlan
   */
  readonly vlan: number;

  /**
   * @schema NewPrivateVirtualInterfaceAllocation#asn
   */
  readonly asn: number;

  /**
   * @schema NewPrivateVirtualInterfaceAllocation#mtu
   */
  readonly mtu?: number;

  /**
   * @schema NewPrivateVirtualInterfaceAllocation#authKey
   */
  readonly authKey?: string;

  /**
   * @schema NewPrivateVirtualInterfaceAllocation#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema NewPrivateVirtualInterfaceAllocation#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema NewPrivateVirtualInterfaceAllocation#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema NewPrivateVirtualInterfaceAllocation#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema BgpPeer
 */
export interface BgpPeer {
  /**
   * @schema BgpPeer#bgpPeerId
   */
  readonly bgpPeerId?: string;

  /**
   * @schema BgpPeer#asn
   */
  readonly asn?: number;

  /**
   * @schema BgpPeer#authKey
   */
  readonly authKey?: string;

  /**
   * @schema BgpPeer#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema BgpPeer#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema BgpPeer#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema BgpPeer#bgpPeerState
   */
  readonly bgpPeerState?: string;

  /**
   * @schema BgpPeer#bgpStatus
   */
  readonly bgpStatus?: string;

  /**
   * @schema BgpPeer#awsDeviceV2
   */
  readonly awsDeviceV2?: string;

}

/**
 * @schema NewPublicVirtualInterfaceAllocation
 */
export interface NewPublicVirtualInterfaceAllocation {
  /**
   * @schema NewPublicVirtualInterfaceAllocation#virtualInterfaceName
   */
  readonly virtualInterfaceName: string;

  /**
   * @schema NewPublicVirtualInterfaceAllocation#vlan
   */
  readonly vlan: number;

  /**
   * @schema NewPublicVirtualInterfaceAllocation#asn
   */
  readonly asn: number;

  /**
   * @schema NewPublicVirtualInterfaceAllocation#authKey
   */
  readonly authKey?: string;

  /**
   * @schema NewPublicVirtualInterfaceAllocation#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema NewPublicVirtualInterfaceAllocation#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema NewPublicVirtualInterfaceAllocation#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema NewPublicVirtualInterfaceAllocation#routeFilterPrefixes
   */
  readonly routeFilterPrefixes?: RouteFilterPrefix[];

  /**
   * @schema NewPublicVirtualInterfaceAllocation#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema NewTransitVirtualInterfaceAllocation
 */
export interface NewTransitVirtualInterfaceAllocation {
  /**
   * @schema NewTransitVirtualInterfaceAllocation#virtualInterfaceName
   */
  readonly virtualInterfaceName?: string;

  /**
   * @schema NewTransitVirtualInterfaceAllocation#vlan
   */
  readonly vlan?: number;

  /**
   * @schema NewTransitVirtualInterfaceAllocation#asn
   */
  readonly asn?: number;

  /**
   * @schema NewTransitVirtualInterfaceAllocation#mtu
   */
  readonly mtu?: number;

  /**
   * @schema NewTransitVirtualInterfaceAllocation#authKey
   */
  readonly authKey?: string;

  /**
   * @schema NewTransitVirtualInterfaceAllocation#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema NewTransitVirtualInterfaceAllocation#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema NewTransitVirtualInterfaceAllocation#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema NewTransitVirtualInterfaceAllocation#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema NewBgpPeer
 */
export interface NewBgpPeer {
  /**
   * @schema NewBgpPeer#asn
   */
  readonly asn?: number;

  /**
   * @schema NewBgpPeer#authKey
   */
  readonly authKey?: string;

  /**
   * @schema NewBgpPeer#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema NewBgpPeer#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema NewBgpPeer#customerAddress
   */
  readonly customerAddress?: string;

}

/**
 * @schema DirectConnectGateway
 */
export interface DirectConnectGateway {
  /**
   * @schema DirectConnectGateway#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectGateway#directConnectGatewayName
   */
  readonly directConnectGatewayName?: string;

  /**
   * @schema DirectConnectGateway#amazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema DirectConnectGateway#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema DirectConnectGateway#directConnectGatewayState
   */
  readonly directConnectGatewayState?: string;

  /**
   * @schema DirectConnectGateway#stateChangeError
   */
  readonly stateChangeError?: string;

}

/**
 * @schema DirectConnectGatewayAssociationProposal
 */
export interface DirectConnectGatewayAssociationProposal {
  /**
   * @schema DirectConnectGatewayAssociationProposal#proposalId
   */
  readonly proposalId?: string;

  /**
   * @schema DirectConnectGatewayAssociationProposal#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectGatewayAssociationProposal#directConnectGatewayOwnerAccount
   */
  readonly directConnectGatewayOwnerAccount?: string;

  /**
   * @schema DirectConnectGatewayAssociationProposal#proposalState
   */
  readonly proposalState?: string;

  /**
   * @schema DirectConnectGatewayAssociationProposal#associatedGateway
   */
  readonly associatedGateway?: AssociatedGateway;

  /**
   * @schema DirectConnectGatewayAssociationProposal#existingAllowedPrefixesToDirectConnectGateway
   */
  readonly existingAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * @schema DirectConnectGatewayAssociationProposal#requestedAllowedPrefixesToDirectConnectGateway
   */
  readonly requestedAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

}

/**
 * @schema NewPrivateVirtualInterface
 */
export interface NewPrivateVirtualInterface {
  /**
   * @schema NewPrivateVirtualInterface#virtualInterfaceName
   */
  readonly virtualInterfaceName: string;

  /**
   * @schema NewPrivateVirtualInterface#vlan
   */
  readonly vlan: number;

  /**
   * @schema NewPrivateVirtualInterface#asn
   */
  readonly asn: number;

  /**
   * @schema NewPrivateVirtualInterface#mtu
   */
  readonly mtu?: number;

  /**
   * @schema NewPrivateVirtualInterface#authKey
   */
  readonly authKey?: string;

  /**
   * @schema NewPrivateVirtualInterface#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema NewPrivateVirtualInterface#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema NewPrivateVirtualInterface#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema NewPrivateVirtualInterface#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

  /**
   * @schema NewPrivateVirtualInterface#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema NewPrivateVirtualInterface#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema NewPublicVirtualInterface
 */
export interface NewPublicVirtualInterface {
  /**
   * @schema NewPublicVirtualInterface#virtualInterfaceName
   */
  readonly virtualInterfaceName: string;

  /**
   * @schema NewPublicVirtualInterface#vlan
   */
  readonly vlan: number;

  /**
   * @schema NewPublicVirtualInterface#asn
   */
  readonly asn: number;

  /**
   * @schema NewPublicVirtualInterface#authKey
   */
  readonly authKey?: string;

  /**
   * @schema NewPublicVirtualInterface#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema NewPublicVirtualInterface#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema NewPublicVirtualInterface#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema NewPublicVirtualInterface#routeFilterPrefixes
   */
  readonly routeFilterPrefixes?: RouteFilterPrefix[];

  /**
   * @schema NewPublicVirtualInterface#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema NewTransitVirtualInterface
 */
export interface NewTransitVirtualInterface {
  /**
   * @schema NewTransitVirtualInterface#virtualInterfaceName
   */
  readonly virtualInterfaceName?: string;

  /**
   * @schema NewTransitVirtualInterface#vlan
   */
  readonly vlan?: number;

  /**
   * @schema NewTransitVirtualInterface#asn
   */
  readonly asn?: number;

  /**
   * @schema NewTransitVirtualInterface#mtu
   */
  readonly mtu?: number;

  /**
   * @schema NewTransitVirtualInterface#authKey
   */
  readonly authKey?: string;

  /**
   * @schema NewTransitVirtualInterface#amazonAddress
   */
  readonly amazonAddress?: string;

  /**
   * @schema NewTransitVirtualInterface#customerAddress
   */
  readonly customerAddress?: string;

  /**
   * @schema NewTransitVirtualInterface#addressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema NewTransitVirtualInterface#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema NewTransitVirtualInterface#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DirectConnectGatewayAttachment
 */
export interface DirectConnectGatewayAttachment {
  /**
   * @schema DirectConnectGatewayAttachment#directConnectGatewayId
   */
  readonly directConnectGatewayId?: string;

  /**
   * @schema DirectConnectGatewayAttachment#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema DirectConnectGatewayAttachment#virtualInterfaceRegion
   */
  readonly virtualInterfaceRegion?: string;

  /**
   * @schema DirectConnectGatewayAttachment#virtualInterfaceOwnerAccount
   */
  readonly virtualInterfaceOwnerAccount?: string;

  /**
   * @schema DirectConnectGatewayAttachment#attachmentState
   */
  readonly attachmentState?: string;

  /**
   * @schema DirectConnectGatewayAttachment#attachmentType
   */
  readonly attachmentType?: string;

  /**
   * @schema DirectConnectGatewayAttachment#stateChangeError
   */
  readonly stateChangeError?: string;

}

/**
 * @schema Location
 */
export interface Location {
  /**
   * @schema Location#locationCode
   */
  readonly locationCode?: string;

  /**
   * @schema Location#locationName
   */
  readonly locationName?: string;

  /**
   * @schema Location#region
   */
  readonly region?: string;

  /**
   * @schema Location#availablePortSpeeds
   */
  readonly availablePortSpeeds?: string[];

  /**
   * @schema Location#availableProviders
   */
  readonly availableProviders?: string[];

}

/**
 * @schema ResourceTag
 */
export interface ResourceTag {
  /**
   * @schema ResourceTag#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ResourceTag#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema VirtualGateway
 */
export interface VirtualGateway {
  /**
   * @schema VirtualGateway#virtualGatewayId
   */
  readonly virtualGatewayId?: string;

  /**
   * @schema VirtualGateway#virtualGatewayState
   */
  readonly virtualGatewayState?: string;

}

/**
 * @schema VirtualInterfaceTestHistory
 */
export interface VirtualInterfaceTestHistory {
  /**
   * @schema VirtualInterfaceTestHistory#testId
   */
  readonly testId?: string;

  /**
   * @schema VirtualInterfaceTestHistory#virtualInterfaceId
   */
  readonly virtualInterfaceId?: string;

  /**
   * @schema VirtualInterfaceTestHistory#bgpPeers
   */
  readonly bgpPeers?: string[];

  /**
   * @schema VirtualInterfaceTestHistory#status
   */
  readonly status?: string;

  /**
   * @schema VirtualInterfaceTestHistory#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema VirtualInterfaceTestHistory#testDurationInMinutes
   */
  readonly testDurationInMinutes?: number;

  /**
   * @schema VirtualInterfaceTestHistory#startTime
   */
  readonly startTime?: string;

  /**
   * @schema VirtualInterfaceTestHistory#endTime
   */
  readonly endTime?: string;

}

/**
 * @schema AssociatedGateway
 */
export interface AssociatedGateway {
  /**
   * @schema AssociatedGateway#id
   */
  readonly id?: string;

  /**
   * @schema AssociatedGateway#type
   */
  readonly type?: string;

  /**
   * @schema AssociatedGateway#ownerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema AssociatedGateway#region
   */
  readonly region?: string;

}
