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
 * Converts an object of type 'DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest(obj: DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayId': obj.directConnectGatewayId,
    'proposalId': obj.proposalId,
    'associatedGatewayOwnerAccount': obj.associatedGatewayOwnerAccount,
    'overrideAllowedPrefixesToDirectConnectGateway': obj.overrideAllowedPrefixesToDirectConnectGateway?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectAcceptDirectConnectGatewayAssociationProposalResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAcceptDirectConnectGatewayAssociationProposalResult(obj: DirectConnectAcceptDirectConnectGatewayAssociationProposalResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayAssociation': toJson_DirectConnectDirectConnectGatewayAssociation(obj.directConnectGatewayAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectAllocateConnectionOnInterconnectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAllocateConnectionOnInterconnectRequest(obj: DirectConnectAllocateConnectionOnInterconnectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bandwidth': obj.bandwidth,
    'connectionName': obj.connectionName,
    'ownerAccount': obj.ownerAccount,
    'interconnectId': obj.interconnectId,
    'vlan': obj.vlan,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema DirectConnectConnection#awsLogicalDeviceId
   */
  readonly awsLogicalDeviceId?: string;

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

  /**
   * @schema DirectConnectConnection#macSecCapable
   */
  readonly macSecCapable?: boolean;

  /**
   * @schema DirectConnectConnection#portEncryptionStatus
   */
  readonly portEncryptionStatus?: string;

  /**
   * @schema DirectConnectConnection#encryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DirectConnectConnection#macSecKeys
   */
  readonly macSecKeys?: DirectConnectMacSecKey[];

}

/**
 * Converts an object of type 'DirectConnectConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectConnection(obj: DirectConnectConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ownerAccount': obj.ownerAccount,
    'connectionId': obj.connectionId,
    'connectionName': obj.connectionName,
    'connectionState': obj.connectionState,
    'region': obj.region,
    'location': obj.location,
    'bandwidth': obj.bandwidth,
    'vlan': obj.vlan,
    'partnerName': obj.partnerName,
    'loaIssueTime': obj.loaIssueTime,
    'lagId': obj.lagId,
    'awsDevice': obj.awsDevice,
    'jumboFrameCapable': obj.jumboFrameCapable,
    'awsDeviceV2': obj.awsDeviceV2,
    'awsLogicalDeviceId': obj.awsLogicalDeviceId,
    'hasLogicalRedundancy': obj.hasLogicalRedundancy,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
    'providerName': obj.providerName,
    'macSecCapable': obj.macSecCapable,
    'portEncryptionStatus': obj.portEncryptionStatus,
    'encryptionMode': obj.encryptionMode,
    'macSecKeys': obj.macSecKeys?.map(y => toJson_DirectConnectMacSecKey(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectAllocateHostedConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAllocateHostedConnectionRequest(obj: DirectConnectAllocateHostedConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'ownerAccount': obj.ownerAccount,
    'bandwidth': obj.bandwidth,
    'connectionName': obj.connectionName,
    'vlan': obj.vlan,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectAllocatePrivateVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAllocatePrivateVirtualInterfaceRequest(obj: DirectConnectAllocatePrivateVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'ownerAccount': obj.ownerAccount,
    'newPrivateVirtualInterfaceAllocation': toJson_DirectConnectNewPrivateVirtualInterfaceAllocation(obj.newPrivateVirtualInterfaceAllocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema DirectConnectVirtualInterface#awsLogicalDeviceId
   */
  readonly awsLogicalDeviceId?: string;

  /**
   * @schema DirectConnectVirtualInterface#tags
   */
  readonly tags?: DirectConnectTag[];

}

/**
 * Converts an object of type 'DirectConnectVirtualInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectVirtualInterface(obj: DirectConnectVirtualInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ownerAccount': obj.ownerAccount,
    'virtualInterfaceId': obj.virtualInterfaceId,
    'location': obj.location,
    'connectionId': obj.connectionId,
    'virtualInterfaceType': obj.virtualInterfaceType,
    'virtualInterfaceName': obj.virtualInterfaceName,
    'vlan': obj.vlan,
    'asn': obj.asn,
    'amazonSideAsn': obj.amazonSideAsn,
    'authKey': obj.authKey,
    'amazonAddress': obj.amazonAddress,
    'customerAddress': obj.customerAddress,
    'addressFamily': obj.addressFamily,
    'virtualInterfaceState': obj.virtualInterfaceState,
    'customerRouterConfig': obj.customerRouterConfig,
    'mtu': obj.mtu,
    'jumboFrameCapable': obj.jumboFrameCapable,
    'virtualGatewayId': obj.virtualGatewayId,
    'directConnectGatewayId': obj.directConnectGatewayId,
    'routeFilterPrefixes': obj.routeFilterPrefixes?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
    'bgpPeers': obj.bgpPeers?.map(y => toJson_DirectConnectBgpPeer(y)),
    'region': obj.region,
    'awsDeviceV2': obj.awsDeviceV2,
    'awsLogicalDeviceId': obj.awsLogicalDeviceId,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectAllocatePublicVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAllocatePublicVirtualInterfaceRequest(obj: DirectConnectAllocatePublicVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'ownerAccount': obj.ownerAccount,
    'newPublicVirtualInterfaceAllocation': toJson_DirectConnectNewPublicVirtualInterfaceAllocation(obj.newPublicVirtualInterfaceAllocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectAllocateTransitVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAllocateTransitVirtualInterfaceRequest(obj: DirectConnectAllocateTransitVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'ownerAccount': obj.ownerAccount,
    'newTransitVirtualInterfaceAllocation': toJson_DirectConnectNewTransitVirtualInterfaceAllocation(obj.newTransitVirtualInterfaceAllocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectAllocateTransitVirtualInterfaceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAllocateTransitVirtualInterfaceResult(obj: DirectConnectAllocateTransitVirtualInterfaceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterface': toJson_DirectConnectVirtualInterface(obj.virtualInterface),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectAssociateConnectionWithLagRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAssociateConnectionWithLagRequest(obj: DirectConnectAssociateConnectionWithLagRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'lagId': obj.lagId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectAssociateHostedConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAssociateHostedConnectionRequest(obj: DirectConnectAssociateHostedConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'parentConnectionId': obj.parentConnectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DirectConnectAssociateMacSecKeyRequest
 */
export interface DirectConnectAssociateMacSecKeyRequest {
  /**
   * @schema DirectConnectAssociateMacSecKeyRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectAssociateMacSecKeyRequest#secretARN
   */
  readonly secretArn?: string;

  /**
   * @schema DirectConnectAssociateMacSecKeyRequest#ckn
   */
  readonly ckn?: string;

  /**
   * @schema DirectConnectAssociateMacSecKeyRequest#cak
   */
  readonly cak?: string;

}

/**
 * Converts an object of type 'DirectConnectAssociateMacSecKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAssociateMacSecKeyRequest(obj: DirectConnectAssociateMacSecKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'secretARN': obj.secretArn,
    'ckn': obj.ckn,
    'cak': obj.cak,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DirectConnectAssociateMacSecKeyResponse
 */
export interface DirectConnectAssociateMacSecKeyResponse {
  /**
   * @schema DirectConnectAssociateMacSecKeyResponse#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema DirectConnectAssociateMacSecKeyResponse#macSecKeys
   */
  readonly macSecKeys?: DirectConnectMacSecKey[];

}

/**
 * Converts an object of type 'DirectConnectAssociateMacSecKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAssociateMacSecKeyResponse(obj: DirectConnectAssociateMacSecKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'macSecKeys': obj.macSecKeys?.map(y => toJson_DirectConnectMacSecKey(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectAssociateVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAssociateVirtualInterfaceRequest(obj: DirectConnectAssociateVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceId': obj.virtualInterfaceId,
    'connectionId': obj.connectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectConfirmConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectConfirmConnectionRequest(obj: DirectConnectConfirmConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectConfirmConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectConfirmConnectionResponse(obj: DirectConnectConfirmConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionState': obj.connectionState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectConfirmPrivateVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectConfirmPrivateVirtualInterfaceRequest(obj: DirectConnectConfirmPrivateVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceId': obj.virtualInterfaceId,
    'virtualGatewayId': obj.virtualGatewayId,
    'directConnectGatewayId': obj.directConnectGatewayId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectConfirmPrivateVirtualInterfaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectConfirmPrivateVirtualInterfaceResponse(obj: DirectConnectConfirmPrivateVirtualInterfaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceState': obj.virtualInterfaceState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectConfirmPublicVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectConfirmPublicVirtualInterfaceRequest(obj: DirectConnectConfirmPublicVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceId': obj.virtualInterfaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectConfirmPublicVirtualInterfaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectConfirmPublicVirtualInterfaceResponse(obj: DirectConnectConfirmPublicVirtualInterfaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceState': obj.virtualInterfaceState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectConfirmTransitVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectConfirmTransitVirtualInterfaceRequest(obj: DirectConnectConfirmTransitVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceId': obj.virtualInterfaceId,
    'directConnectGatewayId': obj.directConnectGatewayId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectConfirmTransitVirtualInterfaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectConfirmTransitVirtualInterfaceResponse(obj: DirectConnectConfirmTransitVirtualInterfaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceState': obj.virtualInterfaceState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly newBgpPeer?: DirectConnectNewBgpPeer;

}

/**
 * Converts an object of type 'DirectConnectCreateBgpPeerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateBgpPeerRequest(obj: DirectConnectCreateBgpPeerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceId': obj.virtualInterfaceId,
    'newBGPPeer': toJson_DirectConnectNewBgpPeer(obj.newBgpPeer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreateBgpPeerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateBgpPeerResponse(obj: DirectConnectCreateBgpPeerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterface': toJson_DirectConnectVirtualInterface(obj.virtualInterface),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DirectConnectCreateConnectionRequest#requestMACSec
   */
  readonly requestMacSec?: boolean;

}

/**
 * Converts an object of type 'DirectConnectCreateConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateConnectionRequest(obj: DirectConnectCreateConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'location': obj.location,
    'bandwidth': obj.bandwidth,
    'connectionName': obj.connectionName,
    'lagId': obj.lagId,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
    'providerName': obj.providerName,
    'requestMACSec': obj.requestMacSec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreateDirectConnectGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateDirectConnectGatewayRequest(obj: DirectConnectCreateDirectConnectGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayName': obj.directConnectGatewayName,
    'amazonSideAsn': obj.amazonSideAsn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreateDirectConnectGatewayResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateDirectConnectGatewayResult(obj: DirectConnectCreateDirectConnectGatewayResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGateway': toJson_DirectConnectDirectConnectGateway(obj.directConnectGateway),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreateDirectConnectGatewayAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateDirectConnectGatewayAssociationRequest(obj: DirectConnectCreateDirectConnectGatewayAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayId': obj.directConnectGatewayId,
    'gatewayId': obj.gatewayId,
    'addAllowedPrefixesToDirectConnectGateway': obj.addAllowedPrefixesToDirectConnectGateway?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
    'virtualGatewayId': obj.virtualGatewayId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreateDirectConnectGatewayAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateDirectConnectGatewayAssociationResult(obj: DirectConnectCreateDirectConnectGatewayAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayAssociation': toJson_DirectConnectDirectConnectGatewayAssociation(obj.directConnectGatewayAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreateDirectConnectGatewayAssociationProposalRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateDirectConnectGatewayAssociationProposalRequest(obj: DirectConnectCreateDirectConnectGatewayAssociationProposalRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayId': obj.directConnectGatewayId,
    'directConnectGatewayOwnerAccount': obj.directConnectGatewayOwnerAccount,
    'gatewayId': obj.gatewayId,
    'addAllowedPrefixesToDirectConnectGateway': obj.addAllowedPrefixesToDirectConnectGateway?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
    'removeAllowedPrefixesToDirectConnectGateway': obj.removeAllowedPrefixesToDirectConnectGateway?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreateDirectConnectGatewayAssociationProposalResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateDirectConnectGatewayAssociationProposalResult(obj: DirectConnectCreateDirectConnectGatewayAssociationProposalResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayAssociationProposal': toJson_DirectConnectDirectConnectGatewayAssociationProposal(obj.directConnectGatewayAssociationProposal),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreateInterconnectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateInterconnectRequest(obj: DirectConnectCreateInterconnectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interconnectName': obj.interconnectName,
    'bandwidth': obj.bandwidth,
    'location': obj.location,
    'lagId': obj.lagId,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
    'providerName': obj.providerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema DirectConnectInterconnect#awsLogicalDeviceId
   */
  readonly awsLogicalDeviceId?: string;

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
 * Converts an object of type 'DirectConnectInterconnect' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectInterconnect(obj: DirectConnectInterconnect | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interconnectId': obj.interconnectId,
    'interconnectName': obj.interconnectName,
    'interconnectState': obj.interconnectState,
    'region': obj.region,
    'location': obj.location,
    'bandwidth': obj.bandwidth,
    'loaIssueTime': obj.loaIssueTime,
    'lagId': obj.lagId,
    'awsDevice': obj.awsDevice,
    'jumboFrameCapable': obj.jumboFrameCapable,
    'awsDeviceV2': obj.awsDeviceV2,
    'awsLogicalDeviceId': obj.awsLogicalDeviceId,
    'hasLogicalRedundancy': obj.hasLogicalRedundancy,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
    'providerName': obj.providerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DirectConnectCreateLagRequest#requestMACSec
   */
  readonly requestMacSec?: boolean;

}

/**
 * Converts an object of type 'DirectConnectCreateLagRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateLagRequest(obj: DirectConnectCreateLagRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'numberOfConnections': obj.numberOfConnections,
    'location': obj.location,
    'connectionsBandwidth': obj.connectionsBandwidth,
    'lagName': obj.lagName,
    'connectionId': obj.connectionId,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
    'childConnectionTags': obj.childConnectionTags?.map(y => toJson_DirectConnectTag(y)),
    'providerName': obj.providerName,
    'requestMACSec': obj.requestMacSec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema DirectConnectLag#awsLogicalDeviceId
   */
  readonly awsLogicalDeviceId?: string;

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

  /**
   * @schema DirectConnectLag#macSecCapable
   */
  readonly macSecCapable?: boolean;

  /**
   * @schema DirectConnectLag#encryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DirectConnectLag#macSecKeys
   */
  readonly macSecKeys?: DirectConnectMacSecKey[];

}

/**
 * Converts an object of type 'DirectConnectLag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectLag(obj: DirectConnectLag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionsBandwidth': obj.connectionsBandwidth,
    'numberOfConnections': obj.numberOfConnections,
    'lagId': obj.lagId,
    'ownerAccount': obj.ownerAccount,
    'lagName': obj.lagName,
    'lagState': obj.lagState,
    'location': obj.location,
    'region': obj.region,
    'minimumLinks': obj.minimumLinks,
    'awsDevice': obj.awsDevice,
    'awsDeviceV2': obj.awsDeviceV2,
    'awsLogicalDeviceId': obj.awsLogicalDeviceId,
    'connections': obj.connections?.map(y => toJson_DirectConnectConnection(y)),
    'allowsHostedConnections': obj.allowsHostedConnections,
    'jumboFrameCapable': obj.jumboFrameCapable,
    'hasLogicalRedundancy': obj.hasLogicalRedundancy,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
    'providerName': obj.providerName,
    'macSecCapable': obj.macSecCapable,
    'encryptionMode': obj.encryptionMode,
    'macSecKeys': obj.macSecKeys?.map(y => toJson_DirectConnectMacSecKey(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreatePrivateVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreatePrivateVirtualInterfaceRequest(obj: DirectConnectCreatePrivateVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'newPrivateVirtualInterface': toJson_DirectConnectNewPrivateVirtualInterface(obj.newPrivateVirtualInterface),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreatePublicVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreatePublicVirtualInterfaceRequest(obj: DirectConnectCreatePublicVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'newPublicVirtualInterface': toJson_DirectConnectNewPublicVirtualInterface(obj.newPublicVirtualInterface),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreateTransitVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateTransitVirtualInterfaceRequest(obj: DirectConnectCreateTransitVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'newTransitVirtualInterface': toJson_DirectConnectNewTransitVirtualInterface(obj.newTransitVirtualInterface),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectCreateTransitVirtualInterfaceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectCreateTransitVirtualInterfaceResult(obj: DirectConnectCreateTransitVirtualInterfaceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterface': toJson_DirectConnectVirtualInterface(obj.virtualInterface),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteBgpPeerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteBgpPeerRequest(obj: DirectConnectDeleteBgpPeerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceId': obj.virtualInterfaceId,
    'asn': obj.asn,
    'customerAddress': obj.customerAddress,
    'bgpPeerId': obj.bgpPeerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteBgpPeerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteBgpPeerResponse(obj: DirectConnectDeleteBgpPeerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterface': toJson_DirectConnectVirtualInterface(obj.virtualInterface),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteConnectionRequest(obj: DirectConnectDeleteConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteDirectConnectGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteDirectConnectGatewayRequest(obj: DirectConnectDeleteDirectConnectGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayId': obj.directConnectGatewayId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteDirectConnectGatewayResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteDirectConnectGatewayResult(obj: DirectConnectDeleteDirectConnectGatewayResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGateway': toJson_DirectConnectDirectConnectGateway(obj.directConnectGateway),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteDirectConnectGatewayAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteDirectConnectGatewayAssociationRequest(obj: DirectConnectDeleteDirectConnectGatewayAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'associationId': obj.associationId,
    'directConnectGatewayId': obj.directConnectGatewayId,
    'virtualGatewayId': obj.virtualGatewayId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteDirectConnectGatewayAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteDirectConnectGatewayAssociationResult(obj: DirectConnectDeleteDirectConnectGatewayAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayAssociation': toJson_DirectConnectDirectConnectGatewayAssociation(obj.directConnectGatewayAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest(obj: DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'proposalId': obj.proposalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteDirectConnectGatewayAssociationProposalResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteDirectConnectGatewayAssociationProposalResult(obj: DirectConnectDeleteDirectConnectGatewayAssociationProposalResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayAssociationProposal': toJson_DirectConnectDirectConnectGatewayAssociationProposal(obj.directConnectGatewayAssociationProposal),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteInterconnectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteInterconnectRequest(obj: DirectConnectDeleteInterconnectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interconnectId': obj.interconnectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteInterconnectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteInterconnectResponse(obj: DirectConnectDeleteInterconnectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interconnectState': obj.interconnectState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteLagRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteLagRequest(obj: DirectConnectDeleteLagRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lagId': obj.lagId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteVirtualInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteVirtualInterfaceRequest(obj: DirectConnectDeleteVirtualInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceId': obj.virtualInterfaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDeleteVirtualInterfaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDeleteVirtualInterfaceResponse(obj: DirectConnectDeleteVirtualInterfaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceState': obj.virtualInterfaceState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeConnectionLoaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeConnectionLoaRequest(obj: DirectConnectDescribeConnectionLoaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'providerName': obj.providerName,
    'loaContentType': obj.loaContentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeConnectionLoaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeConnectionLoaResponse(obj: DirectConnectDescribeConnectionLoaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loa': toJson_DirectConnectLoa(obj.loa),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeConnectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeConnectionsRequest(obj: DirectConnectDescribeConnectionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectConnections' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectConnections(obj: DirectConnectConnections | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connections': obj.connections?.map(y => toJson_DirectConnectConnection(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeConnectionsOnInterconnectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeConnectionsOnInterconnectRequest(obj: DirectConnectDescribeConnectionsOnInterconnectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interconnectId': obj.interconnectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest(obj: DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayId': obj.directConnectGatewayId,
    'proposalId': obj.proposalId,
    'associatedGatewayId': obj.associatedGatewayId,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult(obj: DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayAssociationProposals': obj.directConnectGatewayAssociationProposals?.map(y => toJson_DirectConnectDirectConnectGatewayAssociationProposal(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeDirectConnectGatewayAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeDirectConnectGatewayAssociationsRequest(obj: DirectConnectDescribeDirectConnectGatewayAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'associationId': obj.associationId,
    'associatedGatewayId': obj.associatedGatewayId,
    'directConnectGatewayId': obj.directConnectGatewayId,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'virtualGatewayId': obj.virtualGatewayId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeDirectConnectGatewayAssociationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeDirectConnectGatewayAssociationsResult(obj: DirectConnectDescribeDirectConnectGatewayAssociationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayAssociations': obj.directConnectGatewayAssociations?.map(y => toJson_DirectConnectDirectConnectGatewayAssociation(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeDirectConnectGatewayAttachmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeDirectConnectGatewayAttachmentsRequest(obj: DirectConnectDescribeDirectConnectGatewayAttachmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayId': obj.directConnectGatewayId,
    'virtualInterfaceId': obj.virtualInterfaceId,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeDirectConnectGatewayAttachmentsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeDirectConnectGatewayAttachmentsResult(obj: DirectConnectDescribeDirectConnectGatewayAttachmentsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayAttachments': obj.directConnectGatewayAttachments?.map(y => toJson_DirectConnectDirectConnectGatewayAttachment(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeDirectConnectGatewaysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeDirectConnectGatewaysRequest(obj: DirectConnectDescribeDirectConnectGatewaysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayId': obj.directConnectGatewayId,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeDirectConnectGatewaysResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeDirectConnectGatewaysResult(obj: DirectConnectDescribeDirectConnectGatewaysResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGateways': obj.directConnectGateways?.map(y => toJson_DirectConnectDirectConnectGateway(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeHostedConnectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeHostedConnectionsRequest(obj: DirectConnectDescribeHostedConnectionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeInterconnectLoaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeInterconnectLoaRequest(obj: DirectConnectDescribeInterconnectLoaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interconnectId': obj.interconnectId,
    'providerName': obj.providerName,
    'loaContentType': obj.loaContentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeInterconnectLoaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeInterconnectLoaResponse(obj: DirectConnectDescribeInterconnectLoaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loa': toJson_DirectConnectLoa(obj.loa),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeInterconnectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeInterconnectsRequest(obj: DirectConnectDescribeInterconnectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interconnectId': obj.interconnectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectInterconnects' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectInterconnects(obj: DirectConnectInterconnects | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interconnects': obj.interconnects?.map(y => toJson_DirectConnectInterconnect(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeLagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeLagsRequest(obj: DirectConnectDescribeLagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lagId': obj.lagId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectLags' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectLags(obj: DirectConnectLags | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lags': obj.lags?.map(y => toJson_DirectConnectLag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeLoaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeLoaRequest(obj: DirectConnectDescribeLoaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'providerName': obj.providerName,
    'loaContentType': obj.loaContentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectLoa' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectLoa(obj: DirectConnectLoa | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loaContent': obj.loaContent,
    'loaContentType': obj.loaContentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectLocations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectLocations(obj: DirectConnectLocations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'locations': obj.locations?.map(y => toJson_DirectConnectLocation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeTagsRequest(obj: DirectConnectDescribeTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArns': obj.resourceArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeTagsResponse(obj: DirectConnectDescribeTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceTags': obj.resourceTags?.map(y => toJson_DirectConnectResourceTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectVirtualGateways' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectVirtualGateways(obj: DirectConnectVirtualGateways | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualGateways': obj.virtualGateways?.map(y => toJson_DirectConnectVirtualGateway(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDescribeVirtualInterfacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDescribeVirtualInterfacesRequest(obj: DirectConnectDescribeVirtualInterfacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'virtualInterfaceId': obj.virtualInterfaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectVirtualInterfaces' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectVirtualInterfaces(obj: DirectConnectVirtualInterfaces | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaces': obj.virtualInterfaces?.map(y => toJson_DirectConnectVirtualInterface(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDisassociateConnectionFromLagRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDisassociateConnectionFromLagRequest(obj: DirectConnectDisassociateConnectionFromLagRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'lagId': obj.lagId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DirectConnectDisassociateMacSecKeyRequest
 */
export interface DirectConnectDisassociateMacSecKeyRequest {
  /**
   * @schema DirectConnectDisassociateMacSecKeyRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectDisassociateMacSecKeyRequest#secretARN
   */
  readonly secretArn?: string;

}

/**
 * Converts an object of type 'DirectConnectDisassociateMacSecKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDisassociateMacSecKeyRequest(obj: DirectConnectDisassociateMacSecKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'secretARN': obj.secretArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DirectConnectDisassociateMacSecKeyResponse
 */
export interface DirectConnectDisassociateMacSecKeyResponse {
  /**
   * @schema DirectConnectDisassociateMacSecKeyResponse#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema DirectConnectDisassociateMacSecKeyResponse#macSecKeys
   */
  readonly macSecKeys?: DirectConnectMacSecKey[];

}

/**
 * Converts an object of type 'DirectConnectDisassociateMacSecKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDisassociateMacSecKeyResponse(obj: DirectConnectDisassociateMacSecKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'macSecKeys': obj.macSecKeys?.map(y => toJson_DirectConnectMacSecKey(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectListVirtualInterfaceTestHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectListVirtualInterfaceTestHistoryRequest(obj: DirectConnectListVirtualInterfaceTestHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'testId': obj.testId,
    'virtualInterfaceId': obj.virtualInterfaceId,
    'bgpPeers': obj.bgpPeers?.map(y => y),
    'status': obj.status,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectListVirtualInterfaceTestHistoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectListVirtualInterfaceTestHistoryResponse(obj: DirectConnectListVirtualInterfaceTestHistoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceTestHistory': obj.virtualInterfaceTestHistory?.map(y => toJson_DirectConnectVirtualInterfaceTestHistory(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectStartBgpFailoverTestRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectStartBgpFailoverTestRequest(obj: DirectConnectStartBgpFailoverTestRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceId': obj.virtualInterfaceId,
    'bgpPeers': obj.bgpPeers?.map(y => y),
    'testDurationInMinutes': obj.testDurationInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectStartBgpFailoverTestResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectStartBgpFailoverTestResponse(obj: DirectConnectStartBgpFailoverTestResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceTest': toJson_DirectConnectVirtualInterfaceTestHistory(obj.virtualInterfaceTest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectStopBgpFailoverTestRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectStopBgpFailoverTestRequest(obj: DirectConnectStopBgpFailoverTestRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceId': obj.virtualInterfaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectStopBgpFailoverTestResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectStopBgpFailoverTestResponse(obj: DirectConnectStopBgpFailoverTestResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceTest': toJson_DirectConnectVirtualInterfaceTestHistory(obj.virtualInterfaceTest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectTagResourceRequest(obj: DirectConnectTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DirectConnectTagResourceResponse
 */
export interface DirectConnectTagResourceResponse {
}

/**
 * Converts an object of type 'DirectConnectTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectTagResourceResponse(obj: DirectConnectTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectUntagResourceRequest(obj: DirectConnectUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DirectConnectUntagResourceResponse
 */
export interface DirectConnectUntagResourceResponse {
}

/**
 * Converts an object of type 'DirectConnectUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectUntagResourceResponse(obj: DirectConnectUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DirectConnectUpdateConnectionRequest
 */
export interface DirectConnectUpdateConnectionRequest {
  /**
   * @schema DirectConnectUpdateConnectionRequest#connectionId
   */
  readonly connectionId: string;

  /**
   * @schema DirectConnectUpdateConnectionRequest#connectionName
   */
  readonly connectionName?: string;

  /**
   * @schema DirectConnectUpdateConnectionRequest#encryptionMode
   */
  readonly encryptionMode?: string;

}

/**
 * Converts an object of type 'DirectConnectUpdateConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectUpdateConnectionRequest(obj: DirectConnectUpdateConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionId': obj.connectionId,
    'connectionName': obj.connectionName,
    'encryptionMode': obj.encryptionMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectUpdateDirectConnectGatewayAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectUpdateDirectConnectGatewayAssociationRequest(obj: DirectConnectUpdateDirectConnectGatewayAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'associationId': obj.associationId,
    'addAllowedPrefixesToDirectConnectGateway': obj.addAllowedPrefixesToDirectConnectGateway?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
    'removeAllowedPrefixesToDirectConnectGateway': obj.removeAllowedPrefixesToDirectConnectGateway?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectUpdateDirectConnectGatewayAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectUpdateDirectConnectGatewayAssociationResult(obj: DirectConnectUpdateDirectConnectGatewayAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayAssociation': toJson_DirectConnectDirectConnectGatewayAssociation(obj.directConnectGatewayAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DirectConnectUpdateLagRequest#encryptionMode
   */
  readonly encryptionMode?: string;

}

/**
 * Converts an object of type 'DirectConnectUpdateLagRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectUpdateLagRequest(obj: DirectConnectUpdateLagRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lagId': obj.lagId,
    'lagName': obj.lagName,
    'minimumLinks': obj.minimumLinks,
    'encryptionMode': obj.encryptionMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectUpdateVirtualInterfaceAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectUpdateVirtualInterfaceAttributesRequest(obj: DirectConnectUpdateVirtualInterfaceAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceId': obj.virtualInterfaceId,
    'mtu': obj.mtu,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectRouteFilterPrefix' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectRouteFilterPrefix(obj: DirectConnectRouteFilterPrefix | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cidr': obj.cidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDirectConnectGatewayAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDirectConnectGatewayAssociation(obj: DirectConnectDirectConnectGatewayAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayId': obj.directConnectGatewayId,
    'directConnectGatewayOwnerAccount': obj.directConnectGatewayOwnerAccount,
    'associationState': obj.associationState,
    'stateChangeError': obj.stateChangeError,
    'associatedGateway': toJson_DirectConnectAssociatedGateway(obj.associatedGateway),
    'associationId': obj.associationId,
    'allowedPrefixesToDirectConnectGateway': obj.allowedPrefixesToDirectConnectGateway?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
    'virtualGatewayId': obj.virtualGatewayId,
    'virtualGatewayRegion': obj.virtualGatewayRegion,
    'virtualGatewayOwnerAccount': obj.virtualGatewayOwnerAccount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectTag(obj: DirectConnectTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DirectConnectMacSecKey
 */
export interface DirectConnectMacSecKey {
  /**
   * @schema DirectConnectMacSecKey#secretARN
   */
  readonly secretArn?: string;

  /**
   * @schema DirectConnectMacSecKey#ckn
   */
  readonly ckn?: string;

  /**
   * @schema DirectConnectMacSecKey#state
   */
  readonly state?: string;

  /**
   * @schema DirectConnectMacSecKey#startOn
   */
  readonly startOn?: string;

}

/**
 * Converts an object of type 'DirectConnectMacSecKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectMacSecKey(obj: DirectConnectMacSecKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'secretARN': obj.secretArn,
    'ckn': obj.ckn,
    'state': obj.state,
    'startOn': obj.startOn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectNewPrivateVirtualInterfaceAllocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectNewPrivateVirtualInterfaceAllocation(obj: DirectConnectNewPrivateVirtualInterfaceAllocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceName': obj.virtualInterfaceName,
    'vlan': obj.vlan,
    'asn': obj.asn,
    'mtu': obj.mtu,
    'authKey': obj.authKey,
    'amazonAddress': obj.amazonAddress,
    'addressFamily': obj.addressFamily,
    'customerAddress': obj.customerAddress,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DirectConnectBgpPeer#awsLogicalDeviceId
   */
  readonly awsLogicalDeviceId?: string;

}

/**
 * Converts an object of type 'DirectConnectBgpPeer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectBgpPeer(obj: DirectConnectBgpPeer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bgpPeerId': obj.bgpPeerId,
    'asn': obj.asn,
    'authKey': obj.authKey,
    'addressFamily': obj.addressFamily,
    'amazonAddress': obj.amazonAddress,
    'customerAddress': obj.customerAddress,
    'bgpPeerState': obj.bgpPeerState,
    'bgpStatus': obj.bgpStatus,
    'awsDeviceV2': obj.awsDeviceV2,
    'awsLogicalDeviceId': obj.awsLogicalDeviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectNewPublicVirtualInterfaceAllocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectNewPublicVirtualInterfaceAllocation(obj: DirectConnectNewPublicVirtualInterfaceAllocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceName': obj.virtualInterfaceName,
    'vlan': obj.vlan,
    'asn': obj.asn,
    'authKey': obj.authKey,
    'amazonAddress': obj.amazonAddress,
    'customerAddress': obj.customerAddress,
    'addressFamily': obj.addressFamily,
    'routeFilterPrefixes': obj.routeFilterPrefixes?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectNewTransitVirtualInterfaceAllocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectNewTransitVirtualInterfaceAllocation(obj: DirectConnectNewTransitVirtualInterfaceAllocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceName': obj.virtualInterfaceName,
    'vlan': obj.vlan,
    'asn': obj.asn,
    'mtu': obj.mtu,
    'authKey': obj.authKey,
    'amazonAddress': obj.amazonAddress,
    'customerAddress': obj.customerAddress,
    'addressFamily': obj.addressFamily,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectNewBgpPeer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectNewBgpPeer(obj: DirectConnectNewBgpPeer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'asn': obj.asn,
    'authKey': obj.authKey,
    'addressFamily': obj.addressFamily,
    'amazonAddress': obj.amazonAddress,
    'customerAddress': obj.customerAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDirectConnectGateway' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDirectConnectGateway(obj: DirectConnectDirectConnectGateway | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayId': obj.directConnectGatewayId,
    'directConnectGatewayName': obj.directConnectGatewayName,
    'amazonSideAsn': obj.amazonSideAsn,
    'ownerAccount': obj.ownerAccount,
    'directConnectGatewayState': obj.directConnectGatewayState,
    'stateChangeError': obj.stateChangeError,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDirectConnectGatewayAssociationProposal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDirectConnectGatewayAssociationProposal(obj: DirectConnectDirectConnectGatewayAssociationProposal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'proposalId': obj.proposalId,
    'directConnectGatewayId': obj.directConnectGatewayId,
    'directConnectGatewayOwnerAccount': obj.directConnectGatewayOwnerAccount,
    'proposalState': obj.proposalState,
    'associatedGateway': toJson_DirectConnectAssociatedGateway(obj.associatedGateway),
    'existingAllowedPrefixesToDirectConnectGateway': obj.existingAllowedPrefixesToDirectConnectGateway?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
    'requestedAllowedPrefixesToDirectConnectGateway': obj.requestedAllowedPrefixesToDirectConnectGateway?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectNewPrivateVirtualInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectNewPrivateVirtualInterface(obj: DirectConnectNewPrivateVirtualInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceName': obj.virtualInterfaceName,
    'vlan': obj.vlan,
    'asn': obj.asn,
    'mtu': obj.mtu,
    'authKey': obj.authKey,
    'amazonAddress': obj.amazonAddress,
    'customerAddress': obj.customerAddress,
    'addressFamily': obj.addressFamily,
    'virtualGatewayId': obj.virtualGatewayId,
    'directConnectGatewayId': obj.directConnectGatewayId,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectNewPublicVirtualInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectNewPublicVirtualInterface(obj: DirectConnectNewPublicVirtualInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceName': obj.virtualInterfaceName,
    'vlan': obj.vlan,
    'asn': obj.asn,
    'authKey': obj.authKey,
    'amazonAddress': obj.amazonAddress,
    'customerAddress': obj.customerAddress,
    'addressFamily': obj.addressFamily,
    'routeFilterPrefixes': obj.routeFilterPrefixes?.map(y => toJson_DirectConnectRouteFilterPrefix(y)),
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectNewTransitVirtualInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectNewTransitVirtualInterface(obj: DirectConnectNewTransitVirtualInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualInterfaceName': obj.virtualInterfaceName,
    'vlan': obj.vlan,
    'asn': obj.asn,
    'mtu': obj.mtu,
    'authKey': obj.authKey,
    'amazonAddress': obj.amazonAddress,
    'customerAddress': obj.customerAddress,
    'addressFamily': obj.addressFamily,
    'directConnectGatewayId': obj.directConnectGatewayId,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectDirectConnectGatewayAttachment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectDirectConnectGatewayAttachment(obj: DirectConnectDirectConnectGatewayAttachment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'directConnectGatewayId': obj.directConnectGatewayId,
    'virtualInterfaceId': obj.virtualInterfaceId,
    'virtualInterfaceRegion': obj.virtualInterfaceRegion,
    'virtualInterfaceOwnerAccount': obj.virtualInterfaceOwnerAccount,
    'attachmentState': obj.attachmentState,
    'attachmentType': obj.attachmentType,
    'stateChangeError': obj.stateChangeError,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DirectConnectLocation#availableMacSecPortSpeeds
   */
  readonly availableMacSecPortSpeeds?: string[];

}

/**
 * Converts an object of type 'DirectConnectLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectLocation(obj: DirectConnectLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'locationCode': obj.locationCode,
    'locationName': obj.locationName,
    'region': obj.region,
    'availablePortSpeeds': obj.availablePortSpeeds?.map(y => y),
    'availableProviders': obj.availableProviders?.map(y => y),
    'availableMacSecPortSpeeds': obj.availableMacSecPortSpeeds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectResourceTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectResourceTag(obj: DirectConnectResourceTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_DirectConnectTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectVirtualGateway' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectVirtualGateway(obj: DirectConnectVirtualGateway | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualGatewayId': obj.virtualGatewayId,
    'virtualGatewayState': obj.virtualGatewayState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DirectConnectVirtualInterfaceTestHistory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectVirtualInterfaceTestHistory(obj: DirectConnectVirtualInterfaceTestHistory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'testId': obj.testId,
    'virtualInterfaceId': obj.virtualInterfaceId,
    'bgpPeers': obj.bgpPeers?.map(y => y),
    'status': obj.status,
    'ownerAccount': obj.ownerAccount,
    'testDurationInMinutes': obj.testDurationInMinutes,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'DirectConnectAssociatedGateway' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DirectConnectAssociatedGateway(obj: DirectConnectAssociatedGateway | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'type': obj.type,
    'ownerAccount': obj.ownerAccount,
    'region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
