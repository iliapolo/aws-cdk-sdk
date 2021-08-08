/**
 * @schema NetworkManagerAssociateCustomerGatewayRequest
 */
export interface NetworkManagerAssociateCustomerGatewayRequest {
  /**
   * @schema NetworkManagerAssociateCustomerGatewayRequest#CustomerGatewayArn
   */
  readonly customerGatewayArn?: string;

  /**
   * @schema NetworkManagerAssociateCustomerGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerAssociateCustomerGatewayRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerAssociateCustomerGatewayRequest#LinkId
   */
  readonly linkId?: string;

}

/**
 * Converts an object of type 'NetworkManagerAssociateCustomerGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerAssociateCustomerGatewayRequest(obj: NetworkManagerAssociateCustomerGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomerGatewayArn': obj.customerGatewayArn,
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
    'LinkId': obj.linkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerAssociateCustomerGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerAssociateCustomerGatewayResponse(obj: NetworkManagerAssociateCustomerGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomerGatewayAssociation': toJson_NetworkManagerCustomerGatewayAssociation(obj.customerGatewayAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerAssociateLinkRequest
 */
export interface NetworkManagerAssociateLinkRequest {
  /**
   * @schema NetworkManagerAssociateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerAssociateLinkRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerAssociateLinkRequest#LinkId
   */
  readonly linkId?: string;

}

/**
 * Converts an object of type 'NetworkManagerAssociateLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerAssociateLinkRequest(obj: NetworkManagerAssociateLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
    'LinkId': obj.linkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerAssociateLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerAssociateLinkResponse(obj: NetworkManagerAssociateLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LinkAssociation': toJson_NetworkManagerLinkAssociation(obj.linkAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerAssociateTransitGatewayConnectPeerRequest
 */
export interface NetworkManagerAssociateTransitGatewayConnectPeerRequest {
  /**
   * @schema NetworkManagerAssociateTransitGatewayConnectPeerRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerAssociateTransitGatewayConnectPeerRequest#TransitGatewayConnectPeerArn
   */
  readonly transitGatewayConnectPeerArn?: string;

  /**
   * @schema NetworkManagerAssociateTransitGatewayConnectPeerRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerAssociateTransitGatewayConnectPeerRequest#LinkId
   */
  readonly linkId?: string;

}

/**
 * Converts an object of type 'NetworkManagerAssociateTransitGatewayConnectPeerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerAssociateTransitGatewayConnectPeerRequest(obj: NetworkManagerAssociateTransitGatewayConnectPeerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'TransitGatewayConnectPeerArn': obj.transitGatewayConnectPeerArn,
    'DeviceId': obj.deviceId,
    'LinkId': obj.linkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerAssociateTransitGatewayConnectPeerResponse
 */
export interface NetworkManagerAssociateTransitGatewayConnectPeerResponse {
  /**
   * @schema NetworkManagerAssociateTransitGatewayConnectPeerResponse#TransitGatewayConnectPeerAssociation
   */
  readonly transitGatewayConnectPeerAssociation?: NetworkManagerTransitGatewayConnectPeerAssociation;

}

/**
 * Converts an object of type 'NetworkManagerAssociateTransitGatewayConnectPeerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerAssociateTransitGatewayConnectPeerResponse(obj: NetworkManagerAssociateTransitGatewayConnectPeerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransitGatewayConnectPeerAssociation': toJson_NetworkManagerTransitGatewayConnectPeerAssociation(obj.transitGatewayConnectPeerAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerCreateConnectionRequest
 */
export interface NetworkManagerCreateConnectionRequest {
  /**
   * @schema NetworkManagerCreateConnectionRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerCreateConnectionRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerCreateConnectionRequest#ConnectedDeviceId
   */
  readonly connectedDeviceId?: string;

  /**
   * @schema NetworkManagerCreateConnectionRequest#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema NetworkManagerCreateConnectionRequest#ConnectedLinkId
   */
  readonly connectedLinkId?: string;

  /**
   * @schema NetworkManagerCreateConnectionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerCreateConnectionRequest#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * Converts an object of type 'NetworkManagerCreateConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCreateConnectionRequest(obj: NetworkManagerCreateConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
    'ConnectedDeviceId': obj.connectedDeviceId,
    'LinkId': obj.linkId,
    'ConnectedLinkId': obj.connectedLinkId,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerCreateConnectionResponse
 */
export interface NetworkManagerCreateConnectionResponse {
  /**
   * @schema NetworkManagerCreateConnectionResponse#Connection
   */
  readonly connection?: NetworkManagerConnection;

}

/**
 * Converts an object of type 'NetworkManagerCreateConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCreateConnectionResponse(obj: NetworkManagerCreateConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connection': toJson_NetworkManagerConnection(obj.connection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerCreateDeviceRequest
 */
export interface NetworkManagerCreateDeviceRequest {
  /**
   * @schema NetworkManagerCreateDeviceRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerCreateDeviceRequest#AWSLocation
   */
  readonly awsLocation?: NetworkManagerAwsLocation;

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
 * Converts an object of type 'NetworkManagerCreateDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCreateDeviceRequest(obj: NetworkManagerCreateDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'AWSLocation': toJson_NetworkManagerAwsLocation(obj.awsLocation),
    'Description': obj.description,
    'Type': obj.type,
    'Vendor': obj.vendor,
    'Model': obj.model,
    'SerialNumber': obj.serialNumber,
    'Location': toJson_NetworkManagerLocation(obj.location),
    'SiteId': obj.siteId,
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerCreateDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCreateDeviceResponse(obj: NetworkManagerCreateDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Device': toJson_NetworkManagerDevice(obj.device),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerCreateGlobalNetworkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCreateGlobalNetworkRequest(obj: NetworkManagerCreateGlobalNetworkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerCreateGlobalNetworkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCreateGlobalNetworkResponse(obj: NetworkManagerCreateGlobalNetworkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetwork': toJson_NetworkManagerGlobalNetwork(obj.globalNetwork),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerCreateLinkRequest
 */
export interface NetworkManagerCreateLinkRequest {
  /**
   * @schema NetworkManagerCreateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

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
  readonly bandwidth?: NetworkManagerBandwidth;

  /**
   * @schema NetworkManagerCreateLinkRequest#Provider
   */
  readonly provider?: string;

  /**
   * @schema NetworkManagerCreateLinkRequest#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema NetworkManagerCreateLinkRequest#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * Converts an object of type 'NetworkManagerCreateLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCreateLinkRequest(obj: NetworkManagerCreateLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'Description': obj.description,
    'Type': obj.type,
    'Bandwidth': toJson_NetworkManagerBandwidth(obj.bandwidth),
    'Provider': obj.provider,
    'SiteId': obj.siteId,
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerCreateLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCreateLinkResponse(obj: NetworkManagerCreateLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Link': toJson_NetworkManagerLink(obj.link),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerCreateSiteRequest
 */
export interface NetworkManagerCreateSiteRequest {
  /**
   * @schema NetworkManagerCreateSiteRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

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
 * Converts an object of type 'NetworkManagerCreateSiteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCreateSiteRequest(obj: NetworkManagerCreateSiteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'Description': obj.description,
    'Location': toJson_NetworkManagerLocation(obj.location),
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerCreateSiteResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCreateSiteResponse(obj: NetworkManagerCreateSiteResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Site': toJson_NetworkManagerSite(obj.site),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDeleteConnectionRequest
 */
export interface NetworkManagerDeleteConnectionRequest {
  /**
   * @schema NetworkManagerDeleteConnectionRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerDeleteConnectionRequest#ConnectionId
   */
  readonly connectionId?: string;

}

/**
 * Converts an object of type 'NetworkManagerDeleteConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeleteConnectionRequest(obj: NetworkManagerDeleteConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'ConnectionId': obj.connectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDeleteConnectionResponse
 */
export interface NetworkManagerDeleteConnectionResponse {
  /**
   * @schema NetworkManagerDeleteConnectionResponse#Connection
   */
  readonly connection?: NetworkManagerConnection;

}

/**
 * Converts an object of type 'NetworkManagerDeleteConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeleteConnectionResponse(obj: NetworkManagerDeleteConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connection': toJson_NetworkManagerConnection(obj.connection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDeleteDeviceRequest
 */
export interface NetworkManagerDeleteDeviceRequest {
  /**
   * @schema NetworkManagerDeleteDeviceRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerDeleteDeviceRequest#DeviceId
   */
  readonly deviceId?: string;

}

/**
 * Converts an object of type 'NetworkManagerDeleteDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeleteDeviceRequest(obj: NetworkManagerDeleteDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerDeleteDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeleteDeviceResponse(obj: NetworkManagerDeleteDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Device': toJson_NetworkManagerDevice(obj.device),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDeleteGlobalNetworkRequest
 */
export interface NetworkManagerDeleteGlobalNetworkRequest {
  /**
   * @schema NetworkManagerDeleteGlobalNetworkRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

}

/**
 * Converts an object of type 'NetworkManagerDeleteGlobalNetworkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeleteGlobalNetworkRequest(obj: NetworkManagerDeleteGlobalNetworkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerDeleteGlobalNetworkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeleteGlobalNetworkResponse(obj: NetworkManagerDeleteGlobalNetworkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetwork': toJson_NetworkManagerGlobalNetwork(obj.globalNetwork),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDeleteLinkRequest
 */
export interface NetworkManagerDeleteLinkRequest {
  /**
   * @schema NetworkManagerDeleteLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerDeleteLinkRequest#LinkId
   */
  readonly linkId?: string;

}

/**
 * Converts an object of type 'NetworkManagerDeleteLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeleteLinkRequest(obj: NetworkManagerDeleteLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'LinkId': obj.linkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerDeleteLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeleteLinkResponse(obj: NetworkManagerDeleteLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Link': toJson_NetworkManagerLink(obj.link),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDeleteSiteRequest
 */
export interface NetworkManagerDeleteSiteRequest {
  /**
   * @schema NetworkManagerDeleteSiteRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerDeleteSiteRequest#SiteId
   */
  readonly siteId?: string;

}

/**
 * Converts an object of type 'NetworkManagerDeleteSiteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeleteSiteRequest(obj: NetworkManagerDeleteSiteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'SiteId': obj.siteId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerDeleteSiteResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeleteSiteResponse(obj: NetworkManagerDeleteSiteResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Site': toJson_NetworkManagerSite(obj.site),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDeregisterTransitGatewayRequest
 */
export interface NetworkManagerDeregisterTransitGatewayRequest {
  /**
   * @schema NetworkManagerDeregisterTransitGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerDeregisterTransitGatewayRequest#TransitGatewayArn
   */
  readonly transitGatewayArn?: string;

}

/**
 * Converts an object of type 'NetworkManagerDeregisterTransitGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeregisterTransitGatewayRequest(obj: NetworkManagerDeregisterTransitGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'TransitGatewayArn': obj.transitGatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerDeregisterTransitGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDeregisterTransitGatewayResponse(obj: NetworkManagerDeregisterTransitGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransitGatewayRegistration': toJson_NetworkManagerTransitGatewayRegistration(obj.transitGatewayRegistration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerDescribeGlobalNetworksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDescribeGlobalNetworksRequest(obj: NetworkManagerDescribeGlobalNetworksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkIds': obj.globalNetworkIds?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerDescribeGlobalNetworksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDescribeGlobalNetworksResponse(obj: NetworkManagerDescribeGlobalNetworksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworks': obj.globalNetworks?.map(y => toJson_NetworkManagerGlobalNetwork(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDisassociateCustomerGatewayRequest
 */
export interface NetworkManagerDisassociateCustomerGatewayRequest {
  /**
   * @schema NetworkManagerDisassociateCustomerGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerDisassociateCustomerGatewayRequest#CustomerGatewayArn
   */
  readonly customerGatewayArn?: string;

}

/**
 * Converts an object of type 'NetworkManagerDisassociateCustomerGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDisassociateCustomerGatewayRequest(obj: NetworkManagerDisassociateCustomerGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'CustomerGatewayArn': obj.customerGatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerDisassociateCustomerGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDisassociateCustomerGatewayResponse(obj: NetworkManagerDisassociateCustomerGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomerGatewayAssociation': toJson_NetworkManagerCustomerGatewayAssociation(obj.customerGatewayAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDisassociateLinkRequest
 */
export interface NetworkManagerDisassociateLinkRequest {
  /**
   * @schema NetworkManagerDisassociateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerDisassociateLinkRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerDisassociateLinkRequest#LinkId
   */
  readonly linkId?: string;

}

/**
 * Converts an object of type 'NetworkManagerDisassociateLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDisassociateLinkRequest(obj: NetworkManagerDisassociateLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
    'LinkId': obj.linkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerDisassociateLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDisassociateLinkResponse(obj: NetworkManagerDisassociateLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LinkAssociation': toJson_NetworkManagerLinkAssociation(obj.linkAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDisassociateTransitGatewayConnectPeerRequest
 */
export interface NetworkManagerDisassociateTransitGatewayConnectPeerRequest {
  /**
   * @schema NetworkManagerDisassociateTransitGatewayConnectPeerRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerDisassociateTransitGatewayConnectPeerRequest#TransitGatewayConnectPeerArn
   */
  readonly transitGatewayConnectPeerArn?: string;

}

/**
 * Converts an object of type 'NetworkManagerDisassociateTransitGatewayConnectPeerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDisassociateTransitGatewayConnectPeerRequest(obj: NetworkManagerDisassociateTransitGatewayConnectPeerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'TransitGatewayConnectPeerArn': obj.transitGatewayConnectPeerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerDisassociateTransitGatewayConnectPeerResponse
 */
export interface NetworkManagerDisassociateTransitGatewayConnectPeerResponse {
  /**
   * @schema NetworkManagerDisassociateTransitGatewayConnectPeerResponse#TransitGatewayConnectPeerAssociation
   */
  readonly transitGatewayConnectPeerAssociation?: NetworkManagerTransitGatewayConnectPeerAssociation;

}

/**
 * Converts an object of type 'NetworkManagerDisassociateTransitGatewayConnectPeerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDisassociateTransitGatewayConnectPeerResponse(obj: NetworkManagerDisassociateTransitGatewayConnectPeerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransitGatewayConnectPeerAssociation': toJson_NetworkManagerTransitGatewayConnectPeerAssociation(obj.transitGatewayConnectPeerAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerGetConnectionsRequest
 */
export interface NetworkManagerGetConnectionsRequest {
  /**
   * @schema NetworkManagerGetConnectionsRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerGetConnectionsRequest#ConnectionIds
   */
  readonly connectionIds?: string[];

  /**
   * @schema NetworkManagerGetConnectionsRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerGetConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NetworkManagerGetConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NetworkManagerGetConnectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetConnectionsRequest(obj: NetworkManagerGetConnectionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'ConnectionIds': obj.connectionIds?.map(y => y),
    'DeviceId': obj.deviceId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerGetConnectionsResponse
 */
export interface NetworkManagerGetConnectionsResponse {
  /**
   * @schema NetworkManagerGetConnectionsResponse#Connections
   */
  readonly connections?: NetworkManagerConnection[];

  /**
   * @schema NetworkManagerGetConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NetworkManagerGetConnectionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetConnectionsResponse(obj: NetworkManagerGetConnectionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connections': obj.connections?.map(y => toJson_NetworkManagerConnection(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerGetCustomerGatewayAssociationsRequest
 */
export interface NetworkManagerGetCustomerGatewayAssociationsRequest {
  /**
   * @schema NetworkManagerGetCustomerGatewayAssociationsRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

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
 * Converts an object of type 'NetworkManagerGetCustomerGatewayAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetCustomerGatewayAssociationsRequest(obj: NetworkManagerGetCustomerGatewayAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'CustomerGatewayArns': obj.customerGatewayArns?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerGetCustomerGatewayAssociationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetCustomerGatewayAssociationsResponse(obj: NetworkManagerGetCustomerGatewayAssociationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomerGatewayAssociations': obj.customerGatewayAssociations?.map(y => toJson_NetworkManagerCustomerGatewayAssociation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerGetDevicesRequest
 */
export interface NetworkManagerGetDevicesRequest {
  /**
   * @schema NetworkManagerGetDevicesRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

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
 * Converts an object of type 'NetworkManagerGetDevicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetDevicesRequest(obj: NetworkManagerGetDevicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceIds': obj.deviceIds?.map(y => y),
    'SiteId': obj.siteId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerGetDevicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetDevicesResponse(obj: NetworkManagerGetDevicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Devices': obj.devices?.map(y => toJson_NetworkManagerDevice(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerGetLinkAssociationsRequest
 */
export interface NetworkManagerGetLinkAssociationsRequest {
  /**
   * @schema NetworkManagerGetLinkAssociationsRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

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
 * Converts an object of type 'NetworkManagerGetLinkAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetLinkAssociationsRequest(obj: NetworkManagerGetLinkAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
    'LinkId': obj.linkId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerGetLinkAssociationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetLinkAssociationsResponse(obj: NetworkManagerGetLinkAssociationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LinkAssociations': obj.linkAssociations?.map(y => toJson_NetworkManagerLinkAssociation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerGetLinksRequest
 */
export interface NetworkManagerGetLinksRequest {
  /**
   * @schema NetworkManagerGetLinksRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

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
 * Converts an object of type 'NetworkManagerGetLinksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetLinksRequest(obj: NetworkManagerGetLinksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'LinkIds': obj.linkIds?.map(y => y),
    'SiteId': obj.siteId,
    'Type': obj.type,
    'Provider': obj.provider,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerGetLinksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetLinksResponse(obj: NetworkManagerGetLinksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Links': obj.links?.map(y => toJson_NetworkManagerLink(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerGetSitesRequest
 */
export interface NetworkManagerGetSitesRequest {
  /**
   * @schema NetworkManagerGetSitesRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

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
 * Converts an object of type 'NetworkManagerGetSitesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetSitesRequest(obj: NetworkManagerGetSitesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'SiteIds': obj.siteIds?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerGetSitesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetSitesResponse(obj: NetworkManagerGetSitesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sites': obj.sites?.map(y => toJson_NetworkManagerSite(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerGetTransitGatewayConnectPeerAssociationsRequest
 */
export interface NetworkManagerGetTransitGatewayConnectPeerAssociationsRequest {
  /**
   * @schema NetworkManagerGetTransitGatewayConnectPeerAssociationsRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerGetTransitGatewayConnectPeerAssociationsRequest#TransitGatewayConnectPeerArns
   */
  readonly transitGatewayConnectPeerArns?: string[];

  /**
   * @schema NetworkManagerGetTransitGatewayConnectPeerAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NetworkManagerGetTransitGatewayConnectPeerAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NetworkManagerGetTransitGatewayConnectPeerAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetTransitGatewayConnectPeerAssociationsRequest(obj: NetworkManagerGetTransitGatewayConnectPeerAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'TransitGatewayConnectPeerArns': obj.transitGatewayConnectPeerArns?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerGetTransitGatewayConnectPeerAssociationsResponse
 */
export interface NetworkManagerGetTransitGatewayConnectPeerAssociationsResponse {
  /**
   * @schema NetworkManagerGetTransitGatewayConnectPeerAssociationsResponse#TransitGatewayConnectPeerAssociations
   */
  readonly transitGatewayConnectPeerAssociations?: NetworkManagerTransitGatewayConnectPeerAssociation[];

  /**
   * @schema NetworkManagerGetTransitGatewayConnectPeerAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'NetworkManagerGetTransitGatewayConnectPeerAssociationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetTransitGatewayConnectPeerAssociationsResponse(obj: NetworkManagerGetTransitGatewayConnectPeerAssociationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransitGatewayConnectPeerAssociations': obj.transitGatewayConnectPeerAssociations?.map(y => toJson_NetworkManagerTransitGatewayConnectPeerAssociation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerGetTransitGatewayRegistrationsRequest
 */
export interface NetworkManagerGetTransitGatewayRegistrationsRequest {
  /**
   * @schema NetworkManagerGetTransitGatewayRegistrationsRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

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
 * Converts an object of type 'NetworkManagerGetTransitGatewayRegistrationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetTransitGatewayRegistrationsRequest(obj: NetworkManagerGetTransitGatewayRegistrationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'TransitGatewayArns': obj.transitGatewayArns?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerGetTransitGatewayRegistrationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGetTransitGatewayRegistrationsResponse(obj: NetworkManagerGetTransitGatewayRegistrationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransitGatewayRegistrations': obj.transitGatewayRegistrations?.map(y => toJson_NetworkManagerTransitGatewayRegistration(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerListTagsForResourceRequest
 */
export interface NetworkManagerListTagsForResourceRequest {
  /**
   * @schema NetworkManagerListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'NetworkManagerListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerListTagsForResourceRequest(obj: NetworkManagerListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerListTagsForResourceResponse(obj: NetworkManagerListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerRegisterTransitGatewayRequest
 */
export interface NetworkManagerRegisterTransitGatewayRequest {
  /**
   * @schema NetworkManagerRegisterTransitGatewayRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerRegisterTransitGatewayRequest#TransitGatewayArn
   */
  readonly transitGatewayArn?: string;

}

/**
 * Converts an object of type 'NetworkManagerRegisterTransitGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerRegisterTransitGatewayRequest(obj: NetworkManagerRegisterTransitGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'TransitGatewayArn': obj.transitGatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerRegisterTransitGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerRegisterTransitGatewayResponse(obj: NetworkManagerRegisterTransitGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransitGatewayRegistration': toJson_NetworkManagerTransitGatewayRegistration(obj.transitGatewayRegistration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerTagResourceRequest
 */
export interface NetworkManagerTagResourceRequest {
  /**
   * @schema NetworkManagerTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema NetworkManagerTagResourceRequest#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * Converts an object of type 'NetworkManagerTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerTagResourceRequest(obj: NetworkManagerTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerTagResourceResponse
 */
export interface NetworkManagerTagResourceResponse {
}

/**
 * Converts an object of type 'NetworkManagerTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerTagResourceResponse(obj: NetworkManagerTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerUntagResourceRequest
 */
export interface NetworkManagerUntagResourceRequest {
  /**
   * @schema NetworkManagerUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema NetworkManagerUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'NetworkManagerUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUntagResourceRequest(obj: NetworkManagerUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerUntagResourceResponse
 */
export interface NetworkManagerUntagResourceResponse {
}

/**
 * Converts an object of type 'NetworkManagerUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUntagResourceResponse(obj: NetworkManagerUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerUpdateConnectionRequest
 */
export interface NetworkManagerUpdateConnectionRequest {
  /**
   * @schema NetworkManagerUpdateConnectionRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerUpdateConnectionRequest#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema NetworkManagerUpdateConnectionRequest#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema NetworkManagerUpdateConnectionRequest#ConnectedLinkId
   */
  readonly connectedLinkId?: string;

  /**
   * @schema NetworkManagerUpdateConnectionRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'NetworkManagerUpdateConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUpdateConnectionRequest(obj: NetworkManagerUpdateConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'ConnectionId': obj.connectionId,
    'LinkId': obj.linkId,
    'ConnectedLinkId': obj.connectedLinkId,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerUpdateConnectionResponse
 */
export interface NetworkManagerUpdateConnectionResponse {
  /**
   * @schema NetworkManagerUpdateConnectionResponse#Connection
   */
  readonly connection?: NetworkManagerConnection;

}

/**
 * Converts an object of type 'NetworkManagerUpdateConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUpdateConnectionResponse(obj: NetworkManagerUpdateConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connection': toJson_NetworkManagerConnection(obj.connection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerUpdateDeviceRequest
 */
export interface NetworkManagerUpdateDeviceRequest {
  /**
   * @schema NetworkManagerUpdateDeviceRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerUpdateDeviceRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerUpdateDeviceRequest#AWSLocation
   */
  readonly awsLocation?: NetworkManagerAwsLocation;

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
 * Converts an object of type 'NetworkManagerUpdateDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUpdateDeviceRequest(obj: NetworkManagerUpdateDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
    'AWSLocation': toJson_NetworkManagerAwsLocation(obj.awsLocation),
    'Description': obj.description,
    'Type': obj.type,
    'Vendor': obj.vendor,
    'Model': obj.model,
    'SerialNumber': obj.serialNumber,
    'Location': toJson_NetworkManagerLocation(obj.location),
    'SiteId': obj.siteId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerUpdateDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUpdateDeviceResponse(obj: NetworkManagerUpdateDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Device': toJson_NetworkManagerDevice(obj.device),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerUpdateGlobalNetworkRequest
 */
export interface NetworkManagerUpdateGlobalNetworkRequest {
  /**
   * @schema NetworkManagerUpdateGlobalNetworkRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerUpdateGlobalNetworkRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'NetworkManagerUpdateGlobalNetworkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUpdateGlobalNetworkRequest(obj: NetworkManagerUpdateGlobalNetworkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerUpdateGlobalNetworkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUpdateGlobalNetworkResponse(obj: NetworkManagerUpdateGlobalNetworkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetwork': toJson_NetworkManagerGlobalNetwork(obj.globalNetwork),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerUpdateLinkRequest
 */
export interface NetworkManagerUpdateLinkRequest {
  /**
   * @schema NetworkManagerUpdateLinkRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerUpdateLinkRequest#LinkId
   */
  readonly linkId?: string;

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
 * Converts an object of type 'NetworkManagerUpdateLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUpdateLinkRequest(obj: NetworkManagerUpdateLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'LinkId': obj.linkId,
    'Description': obj.description,
    'Type': obj.type,
    'Bandwidth': toJson_NetworkManagerBandwidth(obj.bandwidth),
    'Provider': obj.provider,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerUpdateLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUpdateLinkResponse(obj: NetworkManagerUpdateLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Link': toJson_NetworkManagerLink(obj.link),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerUpdateSiteRequest
 */
export interface NetworkManagerUpdateSiteRequest {
  /**
   * @schema NetworkManagerUpdateSiteRequest#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerUpdateSiteRequest#SiteId
   */
  readonly siteId?: string;

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
 * Converts an object of type 'NetworkManagerUpdateSiteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUpdateSiteRequest(obj: NetworkManagerUpdateSiteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'SiteId': obj.siteId,
    'Description': obj.description,
    'Location': toJson_NetworkManagerLocation(obj.location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerUpdateSiteResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerUpdateSiteResponse(obj: NetworkManagerUpdateSiteResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Site': toJson_NetworkManagerSite(obj.site),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerCustomerGatewayAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerCustomerGatewayAssociation(obj: NetworkManagerCustomerGatewayAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomerGatewayArn': obj.customerGatewayArn,
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
    'LinkId': obj.linkId,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerLinkAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerLinkAssociation(obj: NetworkManagerLinkAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
    'LinkId': obj.linkId,
    'LinkAssociationState': obj.linkAssociationState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerTransitGatewayConnectPeerAssociation
 */
export interface NetworkManagerTransitGatewayConnectPeerAssociation {
  /**
   * @schema NetworkManagerTransitGatewayConnectPeerAssociation#TransitGatewayConnectPeerArn
   */
  readonly transitGatewayConnectPeerArn?: string;

  /**
   * @schema NetworkManagerTransitGatewayConnectPeerAssociation#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerTransitGatewayConnectPeerAssociation#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerTransitGatewayConnectPeerAssociation#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema NetworkManagerTransitGatewayConnectPeerAssociation#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'NetworkManagerTransitGatewayConnectPeerAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerTransitGatewayConnectPeerAssociation(obj: NetworkManagerTransitGatewayConnectPeerAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransitGatewayConnectPeerArn': obj.transitGatewayConnectPeerArn,
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
    'LinkId': obj.linkId,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerTag(obj: NetworkManagerTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerConnection
 */
export interface NetworkManagerConnection {
  /**
   * @schema NetworkManagerConnection#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema NetworkManagerConnection#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema NetworkManagerConnection#GlobalNetworkId
   */
  readonly globalNetworkId?: string;

  /**
   * @schema NetworkManagerConnection#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema NetworkManagerConnection#ConnectedDeviceId
   */
  readonly connectedDeviceId?: string;

  /**
   * @schema NetworkManagerConnection#LinkId
   */
  readonly linkId?: string;

  /**
   * @schema NetworkManagerConnection#ConnectedLinkId
   */
  readonly connectedLinkId?: string;

  /**
   * @schema NetworkManagerConnection#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkManagerConnection#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema NetworkManagerConnection#State
   */
  readonly state?: string;

  /**
   * @schema NetworkManagerConnection#Tags
   */
  readonly tags?: NetworkManagerTag[];

}

/**
 * Converts an object of type 'NetworkManagerConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerConnection(obj: NetworkManagerConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionId': obj.connectionId,
    'ConnectionArn': obj.connectionArn,
    'GlobalNetworkId': obj.globalNetworkId,
    'DeviceId': obj.deviceId,
    'ConnectedDeviceId': obj.connectedDeviceId,
    'LinkId': obj.linkId,
    'ConnectedLinkId': obj.connectedLinkId,
    'Description': obj.description,
    'CreatedAt': obj.createdAt,
    'State': obj.state,
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkManagerAwsLocation
 */
export interface NetworkManagerAwsLocation {
  /**
   * @schema NetworkManagerAwsLocation#Zone
   */
  readonly zone?: string;

  /**
   * @schema NetworkManagerAwsLocation#SubnetArn
   */
  readonly subnetArn?: string;

}

/**
 * Converts an object of type 'NetworkManagerAwsLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerAwsLocation(obj: NetworkManagerAwsLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Zone': obj.zone,
    'SubnetArn': obj.subnetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerLocation(obj: NetworkManagerLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'Latitude': obj.latitude,
    'Longitude': obj.longitude,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema NetworkManagerDevice#AWSLocation
   */
  readonly awsLocation?: NetworkManagerAwsLocation;

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
 * Converts an object of type 'NetworkManagerDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerDevice(obj: NetworkManagerDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'DeviceArn': obj.deviceArn,
    'GlobalNetworkId': obj.globalNetworkId,
    'AWSLocation': toJson_NetworkManagerAwsLocation(obj.awsLocation),
    'Description': obj.description,
    'Type': obj.type,
    'Vendor': obj.vendor,
    'Model': obj.model,
    'SerialNumber': obj.serialNumber,
    'Location': toJson_NetworkManagerLocation(obj.location),
    'SiteId': obj.siteId,
    'CreatedAt': obj.createdAt,
    'State': obj.state,
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerGlobalNetwork' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerGlobalNetwork(obj: NetworkManagerGlobalNetwork | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'GlobalNetworkArn': obj.globalNetworkArn,
    'Description': obj.description,
    'CreatedAt': obj.createdAt,
    'State': obj.state,
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerBandwidth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerBandwidth(obj: NetworkManagerBandwidth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UploadSpeed': obj.uploadSpeed,
    'DownloadSpeed': obj.downloadSpeed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerLink' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerLink(obj: NetworkManagerLink | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LinkId': obj.linkId,
    'LinkArn': obj.linkArn,
    'GlobalNetworkId': obj.globalNetworkId,
    'SiteId': obj.siteId,
    'Description': obj.description,
    'Type': obj.type,
    'Bandwidth': toJson_NetworkManagerBandwidth(obj.bandwidth),
    'Provider': obj.provider,
    'CreatedAt': obj.createdAt,
    'State': obj.state,
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerSite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerSite(obj: NetworkManagerSite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SiteId': obj.siteId,
    'SiteArn': obj.siteArn,
    'GlobalNetworkId': obj.globalNetworkId,
    'Description': obj.description,
    'Location': toJson_NetworkManagerLocation(obj.location),
    'CreatedAt': obj.createdAt,
    'State': obj.state,
    'Tags': obj.tags?.map(y => toJson_NetworkManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'NetworkManagerTransitGatewayRegistration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerTransitGatewayRegistration(obj: NetworkManagerTransitGatewayRegistration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNetworkId': obj.globalNetworkId,
    'TransitGatewayArn': obj.transitGatewayArn,
    'State': toJson_NetworkManagerTransitGatewayRegistrationStateReason(obj.state),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'NetworkManagerTransitGatewayRegistrationStateReason' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkManagerTransitGatewayRegistrationStateReason(obj: NetworkManagerTransitGatewayRegistrationStateReason | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
