/**
 * @schema GlobalAcceleratorAddCustomRoutingEndpointsRequest
 */
export interface GlobalAcceleratorAddCustomRoutingEndpointsRequest {
  /**
   * @schema GlobalAcceleratorAddCustomRoutingEndpointsRequest#EndpointConfigurations
   */
  readonly endpointConfigurations?: GlobalAcceleratorCustomRoutingEndpointConfiguration[];

  /**
   * @schema GlobalAcceleratorAddCustomRoutingEndpointsRequest#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorAddCustomRoutingEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorAddCustomRoutingEndpointsRequest(obj: GlobalAcceleratorAddCustomRoutingEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointConfigurations': obj.endpointConfigurations?.map(y => toJson_GlobalAcceleratorCustomRoutingEndpointConfiguration(y)),
    'EndpointGroupArn': obj.endpointGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorAddCustomRoutingEndpointsResponse
 */
export interface GlobalAcceleratorAddCustomRoutingEndpointsResponse {
  /**
   * @schema GlobalAcceleratorAddCustomRoutingEndpointsResponse#EndpointDescriptions
   */
  readonly endpointDescriptions?: GlobalAcceleratorCustomRoutingEndpointDescription[];

  /**
   * @schema GlobalAcceleratorAddCustomRoutingEndpointsResponse#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorAddCustomRoutingEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorAddCustomRoutingEndpointsResponse(obj: GlobalAcceleratorAddCustomRoutingEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointDescriptions': obj.endpointDescriptions?.map(y => toJson_GlobalAcceleratorCustomRoutingEndpointDescription(y)),
    'EndpointGroupArn': obj.endpointGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorAdvertiseByoipCidrRequest
 */
export interface GlobalAcceleratorAdvertiseByoipCidrRequest {
  /**
   * @schema GlobalAcceleratorAdvertiseByoipCidrRequest#Cidr
   */
  readonly cidr?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorAdvertiseByoipCidrRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorAdvertiseByoipCidrRequest(obj: GlobalAcceleratorAdvertiseByoipCidrRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cidr': obj.cidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorAdvertiseByoipCidrResponse
 */
export interface GlobalAcceleratorAdvertiseByoipCidrResponse {
  /**
   * @schema GlobalAcceleratorAdvertiseByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: GlobalAcceleratorByoipCidr;

}

/**
 * Converts an object of type 'GlobalAcceleratorAdvertiseByoipCidrResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorAdvertiseByoipCidrResponse(obj: GlobalAcceleratorAdvertiseByoipCidrResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByoipCidr': toJson_GlobalAcceleratorByoipCidr(obj.byoipCidr),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorAllowCustomRoutingTrafficRequest
 */
export interface GlobalAcceleratorAllowCustomRoutingTrafficRequest {
  /**
   * @schema GlobalAcceleratorAllowCustomRoutingTrafficRequest#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

  /**
   * @schema GlobalAcceleratorAllowCustomRoutingTrafficRequest#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema GlobalAcceleratorAllowCustomRoutingTrafficRequest#DestinationAddresses
   */
  readonly destinationAddresses?: string[];

  /**
   * @schema GlobalAcceleratorAllowCustomRoutingTrafficRequest#DestinationPorts
   */
  readonly destinationPorts?: number[];

  /**
   * @schema GlobalAcceleratorAllowCustomRoutingTrafficRequest#AllowAllTrafficToEndpoint
   */
  readonly allowAllTrafficToEndpoint?: boolean;

}

/**
 * Converts an object of type 'GlobalAcceleratorAllowCustomRoutingTrafficRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorAllowCustomRoutingTrafficRequest(obj: GlobalAcceleratorAllowCustomRoutingTrafficRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroupArn': obj.endpointGroupArn,
    'EndpointId': obj.endpointId,
    'DestinationAddresses': obj.destinationAddresses?.map(y => y),
    'DestinationPorts': obj.destinationPorts?.map(y => y),
    'AllowAllTrafficToEndpoint': obj.allowAllTrafficToEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateAcceleratorRequest
 */
export interface GlobalAcceleratorCreateAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#IpAddresses
   */
  readonly ipAddresses?: string[];

  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#Tags
   */
  readonly tags?: GlobalAcceleratorTag[];

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateAcceleratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateAcceleratorRequest(obj: GlobalAcceleratorCreateAcceleratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'IpAddressType': obj.ipAddressType,
    'IpAddresses': obj.ipAddresses?.map(y => y),
    'Enabled': obj.enabled,
    'IdempotencyToken': obj.idempotencyToken,
    'Tags': obj.tags?.map(y => toJson_GlobalAcceleratorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateAcceleratorResponse
 */
export interface GlobalAcceleratorCreateAcceleratorResponse {
  /**
   * @schema GlobalAcceleratorCreateAcceleratorResponse#Accelerator
   */
  readonly accelerator?: GlobalAcceleratorAccelerator;

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateAcceleratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateAcceleratorResponse(obj: GlobalAcceleratorCreateAcceleratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accelerator': toJson_GlobalAcceleratorAccelerator(obj.accelerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateCustomRoutingAcceleratorRequest
 */
export interface GlobalAcceleratorCreateCustomRoutingAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorCreateCustomRoutingAcceleratorRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlobalAcceleratorCreateCustomRoutingAcceleratorRequest#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema GlobalAcceleratorCreateCustomRoutingAcceleratorRequest#IpAddresses
   */
  readonly ipAddresses?: string[];

  /**
   * @schema GlobalAcceleratorCreateCustomRoutingAcceleratorRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema GlobalAcceleratorCreateCustomRoutingAcceleratorRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema GlobalAcceleratorCreateCustomRoutingAcceleratorRequest#Tags
   */
  readonly tags?: GlobalAcceleratorTag[];

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateCustomRoutingAcceleratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateCustomRoutingAcceleratorRequest(obj: GlobalAcceleratorCreateCustomRoutingAcceleratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'IpAddressType': obj.ipAddressType,
    'IpAddresses': obj.ipAddresses?.map(y => y),
    'Enabled': obj.enabled,
    'IdempotencyToken': obj.idempotencyToken,
    'Tags': obj.tags?.map(y => toJson_GlobalAcceleratorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateCustomRoutingAcceleratorResponse
 */
export interface GlobalAcceleratorCreateCustomRoutingAcceleratorResponse {
  /**
   * @schema GlobalAcceleratorCreateCustomRoutingAcceleratorResponse#Accelerator
   */
  readonly accelerator?: GlobalAcceleratorCustomRoutingAccelerator;

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateCustomRoutingAcceleratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateCustomRoutingAcceleratorResponse(obj: GlobalAcceleratorCreateCustomRoutingAcceleratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accelerator': toJson_GlobalAcceleratorCustomRoutingAccelerator(obj.accelerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateCustomRoutingEndpointGroupRequest
 */
export interface GlobalAcceleratorCreateCustomRoutingEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorCreateCustomRoutingEndpointGroupRequest#ListenerArn
   */
  readonly listenerArn?: string;

  /**
   * @schema GlobalAcceleratorCreateCustomRoutingEndpointGroupRequest#EndpointGroupRegion
   */
  readonly endpointGroupRegion?: string;

  /**
   * @schema GlobalAcceleratorCreateCustomRoutingEndpointGroupRequest#DestinationConfigurations
   */
  readonly destinationConfigurations?: GlobalAcceleratorCustomRoutingDestinationConfiguration[];

  /**
   * @schema GlobalAcceleratorCreateCustomRoutingEndpointGroupRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateCustomRoutingEndpointGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateCustomRoutingEndpointGroupRequest(obj: GlobalAcceleratorCreateCustomRoutingEndpointGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
    'EndpointGroupRegion': obj.endpointGroupRegion,
    'DestinationConfigurations': obj.destinationConfigurations?.map(y => toJson_GlobalAcceleratorCustomRoutingDestinationConfiguration(y)),
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateCustomRoutingEndpointGroupResponse
 */
export interface GlobalAcceleratorCreateCustomRoutingEndpointGroupResponse {
  /**
   * @schema GlobalAcceleratorCreateCustomRoutingEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: GlobalAcceleratorCustomRoutingEndpointGroup;

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateCustomRoutingEndpointGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateCustomRoutingEndpointGroupResponse(obj: GlobalAcceleratorCreateCustomRoutingEndpointGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroup': toJson_GlobalAcceleratorCustomRoutingEndpointGroup(obj.endpointGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateCustomRoutingListenerRequest
 */
export interface GlobalAcceleratorCreateCustomRoutingListenerRequest {
  /**
   * @schema GlobalAcceleratorCreateCustomRoutingListenerRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorCreateCustomRoutingListenerRequest#PortRanges
   */
  readonly portRanges?: GlobalAcceleratorPortRange[];

  /**
   * @schema GlobalAcceleratorCreateCustomRoutingListenerRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateCustomRoutingListenerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateCustomRoutingListenerRequest(obj: GlobalAcceleratorCreateCustomRoutingListenerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'PortRanges': obj.portRanges?.map(y => toJson_GlobalAcceleratorPortRange(y)),
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateCustomRoutingListenerResponse
 */
export interface GlobalAcceleratorCreateCustomRoutingListenerResponse {
  /**
   * @schema GlobalAcceleratorCreateCustomRoutingListenerResponse#Listener
   */
  readonly listener?: GlobalAcceleratorCustomRoutingListener;

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateCustomRoutingListenerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateCustomRoutingListenerResponse(obj: GlobalAcceleratorCreateCustomRoutingListenerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Listener': toJson_GlobalAcceleratorCustomRoutingListener(obj.listener),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateEndpointGroupRequest
 */
export interface GlobalAcceleratorCreateEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#ListenerArn
   */
  readonly listenerArn?: string;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#EndpointGroupRegion
   */
  readonly endpointGroupRegion?: string;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#EndpointConfigurations
   */
  readonly endpointConfigurations?: GlobalAcceleratorEndpointConfiguration[];

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#TrafficDialPercentage
   */
  readonly trafficDialPercentage?: number;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#HealthCheckPort
   */
  readonly healthCheckPort?: number;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#HealthCheckProtocol
   */
  readonly healthCheckProtocol?: string;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#HealthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#HealthCheckIntervalSeconds
   */
  readonly healthCheckIntervalSeconds?: number;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#ThresholdCount
   */
  readonly thresholdCount?: number;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#PortOverrides
   */
  readonly portOverrides?: GlobalAcceleratorPortOverride[];

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateEndpointGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateEndpointGroupRequest(obj: GlobalAcceleratorCreateEndpointGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
    'EndpointGroupRegion': obj.endpointGroupRegion,
    'EndpointConfigurations': obj.endpointConfigurations?.map(y => toJson_GlobalAcceleratorEndpointConfiguration(y)),
    'TrafficDialPercentage': obj.trafficDialPercentage,
    'HealthCheckPort': obj.healthCheckPort,
    'HealthCheckProtocol': obj.healthCheckProtocol,
    'HealthCheckPath': obj.healthCheckPath,
    'HealthCheckIntervalSeconds': obj.healthCheckIntervalSeconds,
    'ThresholdCount': obj.thresholdCount,
    'IdempotencyToken': obj.idempotencyToken,
    'PortOverrides': obj.portOverrides?.map(y => toJson_GlobalAcceleratorPortOverride(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateEndpointGroupResponse
 */
export interface GlobalAcceleratorCreateEndpointGroupResponse {
  /**
   * @schema GlobalAcceleratorCreateEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: GlobalAcceleratorEndpointGroup;

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateEndpointGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateEndpointGroupResponse(obj: GlobalAcceleratorCreateEndpointGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroup': toJson_GlobalAcceleratorEndpointGroup(obj.endpointGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateListenerRequest
 */
export interface GlobalAcceleratorCreateListenerRequest {
  /**
   * @schema GlobalAcceleratorCreateListenerRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorCreateListenerRequest#PortRanges
   */
  readonly portRanges?: GlobalAcceleratorPortRange[];

  /**
   * @schema GlobalAcceleratorCreateListenerRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema GlobalAcceleratorCreateListenerRequest#ClientAffinity
   */
  readonly clientAffinity?: string;

  /**
   * @schema GlobalAcceleratorCreateListenerRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateListenerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateListenerRequest(obj: GlobalAcceleratorCreateListenerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'PortRanges': obj.portRanges?.map(y => toJson_GlobalAcceleratorPortRange(y)),
    'Protocol': obj.protocol,
    'ClientAffinity': obj.clientAffinity,
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCreateListenerResponse
 */
export interface GlobalAcceleratorCreateListenerResponse {
  /**
   * @schema GlobalAcceleratorCreateListenerResponse#Listener
   */
  readonly listener?: GlobalAcceleratorListener;

}

/**
 * Converts an object of type 'GlobalAcceleratorCreateListenerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCreateListenerResponse(obj: GlobalAcceleratorCreateListenerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Listener': toJson_GlobalAcceleratorListener(obj.listener),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDeleteAcceleratorRequest
 */
export interface GlobalAcceleratorDeleteAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorDeleteAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDeleteAcceleratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDeleteAcceleratorRequest(obj: GlobalAcceleratorDeleteAcceleratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDeleteCustomRoutingAcceleratorRequest
 */
export interface GlobalAcceleratorDeleteCustomRoutingAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorDeleteCustomRoutingAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDeleteCustomRoutingAcceleratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDeleteCustomRoutingAcceleratorRequest(obj: GlobalAcceleratorDeleteCustomRoutingAcceleratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDeleteCustomRoutingEndpointGroupRequest
 */
export interface GlobalAcceleratorDeleteCustomRoutingEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorDeleteCustomRoutingEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDeleteCustomRoutingEndpointGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDeleteCustomRoutingEndpointGroupRequest(obj: GlobalAcceleratorDeleteCustomRoutingEndpointGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroupArn': obj.endpointGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDeleteCustomRoutingListenerRequest
 */
export interface GlobalAcceleratorDeleteCustomRoutingListenerRequest {
  /**
   * @schema GlobalAcceleratorDeleteCustomRoutingListenerRequest#ListenerArn
   */
  readonly listenerArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDeleteCustomRoutingListenerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDeleteCustomRoutingListenerRequest(obj: GlobalAcceleratorDeleteCustomRoutingListenerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDeleteEndpointGroupRequest
 */
export interface GlobalAcceleratorDeleteEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorDeleteEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDeleteEndpointGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDeleteEndpointGroupRequest(obj: GlobalAcceleratorDeleteEndpointGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroupArn': obj.endpointGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDeleteListenerRequest
 */
export interface GlobalAcceleratorDeleteListenerRequest {
  /**
   * @schema GlobalAcceleratorDeleteListenerRequest#ListenerArn
   */
  readonly listenerArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDeleteListenerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDeleteListenerRequest(obj: GlobalAcceleratorDeleteListenerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDenyCustomRoutingTrafficRequest
 */
export interface GlobalAcceleratorDenyCustomRoutingTrafficRequest {
  /**
   * @schema GlobalAcceleratorDenyCustomRoutingTrafficRequest#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

  /**
   * @schema GlobalAcceleratorDenyCustomRoutingTrafficRequest#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema GlobalAcceleratorDenyCustomRoutingTrafficRequest#DestinationAddresses
   */
  readonly destinationAddresses?: string[];

  /**
   * @schema GlobalAcceleratorDenyCustomRoutingTrafficRequest#DestinationPorts
   */
  readonly destinationPorts?: number[];

  /**
   * @schema GlobalAcceleratorDenyCustomRoutingTrafficRequest#DenyAllTrafficToEndpoint
   */
  readonly denyAllTrafficToEndpoint?: boolean;

}

/**
 * Converts an object of type 'GlobalAcceleratorDenyCustomRoutingTrafficRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDenyCustomRoutingTrafficRequest(obj: GlobalAcceleratorDenyCustomRoutingTrafficRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroupArn': obj.endpointGroupArn,
    'EndpointId': obj.endpointId,
    'DestinationAddresses': obj.destinationAddresses?.map(y => y),
    'DestinationPorts': obj.destinationPorts?.map(y => y),
    'DenyAllTrafficToEndpoint': obj.denyAllTrafficToEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDeprovisionByoipCidrRequest
 */
export interface GlobalAcceleratorDeprovisionByoipCidrRequest {
  /**
   * @schema GlobalAcceleratorDeprovisionByoipCidrRequest#Cidr
   */
  readonly cidr?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDeprovisionByoipCidrRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDeprovisionByoipCidrRequest(obj: GlobalAcceleratorDeprovisionByoipCidrRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cidr': obj.cidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDeprovisionByoipCidrResponse
 */
export interface GlobalAcceleratorDeprovisionByoipCidrResponse {
  /**
   * @schema GlobalAcceleratorDeprovisionByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: GlobalAcceleratorByoipCidr;

}

/**
 * Converts an object of type 'GlobalAcceleratorDeprovisionByoipCidrResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDeprovisionByoipCidrResponse(obj: GlobalAcceleratorDeprovisionByoipCidrResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByoipCidr': toJson_GlobalAcceleratorByoipCidr(obj.byoipCidr),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeAcceleratorRequest
 */
export interface GlobalAcceleratorDescribeAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorDescribeAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeAcceleratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeAcceleratorRequest(obj: GlobalAcceleratorDescribeAcceleratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeAcceleratorResponse
 */
export interface GlobalAcceleratorDescribeAcceleratorResponse {
  /**
   * @schema GlobalAcceleratorDescribeAcceleratorResponse#Accelerator
   */
  readonly accelerator?: GlobalAcceleratorAccelerator;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeAcceleratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeAcceleratorResponse(obj: GlobalAcceleratorDescribeAcceleratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accelerator': toJson_GlobalAcceleratorAccelerator(obj.accelerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeAcceleratorAttributesRequest
 */
export interface GlobalAcceleratorDescribeAcceleratorAttributesRequest {
  /**
   * @schema GlobalAcceleratorDescribeAcceleratorAttributesRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeAcceleratorAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeAcceleratorAttributesRequest(obj: GlobalAcceleratorDescribeAcceleratorAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeAcceleratorAttributesResponse
 */
export interface GlobalAcceleratorDescribeAcceleratorAttributesResponse {
  /**
   * @schema GlobalAcceleratorDescribeAcceleratorAttributesResponse#AcceleratorAttributes
   */
  readonly acceleratorAttributes?: GlobalAcceleratorAcceleratorAttributes;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeAcceleratorAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeAcceleratorAttributesResponse(obj: GlobalAcceleratorDescribeAcceleratorAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorAttributes': toJson_GlobalAcceleratorAcceleratorAttributes(obj.acceleratorAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeCustomRoutingAcceleratorRequest
 */
export interface GlobalAcceleratorDescribeCustomRoutingAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorDescribeCustomRoutingAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeCustomRoutingAcceleratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeCustomRoutingAcceleratorRequest(obj: GlobalAcceleratorDescribeCustomRoutingAcceleratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeCustomRoutingAcceleratorResponse
 */
export interface GlobalAcceleratorDescribeCustomRoutingAcceleratorResponse {
  /**
   * @schema GlobalAcceleratorDescribeCustomRoutingAcceleratorResponse#Accelerator
   */
  readonly accelerator?: GlobalAcceleratorCustomRoutingAccelerator;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeCustomRoutingAcceleratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeCustomRoutingAcceleratorResponse(obj: GlobalAcceleratorDescribeCustomRoutingAcceleratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accelerator': toJson_GlobalAcceleratorCustomRoutingAccelerator(obj.accelerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesRequest
 */
export interface GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesRequest {
  /**
   * @schema GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesRequest(obj: GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesResponse
 */
export interface GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesResponse {
  /**
   * @schema GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesResponse#AcceleratorAttributes
   */
  readonly acceleratorAttributes?: GlobalAcceleratorCustomRoutingAcceleratorAttributes;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesResponse(obj: GlobalAcceleratorDescribeCustomRoutingAcceleratorAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorAttributes': toJson_GlobalAcceleratorCustomRoutingAcceleratorAttributes(obj.acceleratorAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeCustomRoutingEndpointGroupRequest
 */
export interface GlobalAcceleratorDescribeCustomRoutingEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorDescribeCustomRoutingEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeCustomRoutingEndpointGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeCustomRoutingEndpointGroupRequest(obj: GlobalAcceleratorDescribeCustomRoutingEndpointGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroupArn': obj.endpointGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeCustomRoutingEndpointGroupResponse
 */
export interface GlobalAcceleratorDescribeCustomRoutingEndpointGroupResponse {
  /**
   * @schema GlobalAcceleratorDescribeCustomRoutingEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: GlobalAcceleratorCustomRoutingEndpointGroup;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeCustomRoutingEndpointGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeCustomRoutingEndpointGroupResponse(obj: GlobalAcceleratorDescribeCustomRoutingEndpointGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroup': toJson_GlobalAcceleratorCustomRoutingEndpointGroup(obj.endpointGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeCustomRoutingListenerRequest
 */
export interface GlobalAcceleratorDescribeCustomRoutingListenerRequest {
  /**
   * @schema GlobalAcceleratorDescribeCustomRoutingListenerRequest#ListenerArn
   */
  readonly listenerArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeCustomRoutingListenerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeCustomRoutingListenerRequest(obj: GlobalAcceleratorDescribeCustomRoutingListenerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeCustomRoutingListenerResponse
 */
export interface GlobalAcceleratorDescribeCustomRoutingListenerResponse {
  /**
   * @schema GlobalAcceleratorDescribeCustomRoutingListenerResponse#Listener
   */
  readonly listener?: GlobalAcceleratorCustomRoutingListener;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeCustomRoutingListenerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeCustomRoutingListenerResponse(obj: GlobalAcceleratorDescribeCustomRoutingListenerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Listener': toJson_GlobalAcceleratorCustomRoutingListener(obj.listener),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeEndpointGroupRequest
 */
export interface GlobalAcceleratorDescribeEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorDescribeEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeEndpointGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeEndpointGroupRequest(obj: GlobalAcceleratorDescribeEndpointGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroupArn': obj.endpointGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeEndpointGroupResponse
 */
export interface GlobalAcceleratorDescribeEndpointGroupResponse {
  /**
   * @schema GlobalAcceleratorDescribeEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: GlobalAcceleratorEndpointGroup;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeEndpointGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeEndpointGroupResponse(obj: GlobalAcceleratorDescribeEndpointGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroup': toJson_GlobalAcceleratorEndpointGroup(obj.endpointGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeListenerRequest
 */
export interface GlobalAcceleratorDescribeListenerRequest {
  /**
   * @schema GlobalAcceleratorDescribeListenerRequest#ListenerArn
   */
  readonly listenerArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeListenerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeListenerRequest(obj: GlobalAcceleratorDescribeListenerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDescribeListenerResponse
 */
export interface GlobalAcceleratorDescribeListenerResponse {
  /**
   * @schema GlobalAcceleratorDescribeListenerResponse#Listener
   */
  readonly listener?: GlobalAcceleratorListener;

}

/**
 * Converts an object of type 'GlobalAcceleratorDescribeListenerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDescribeListenerResponse(obj: GlobalAcceleratorDescribeListenerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Listener': toJson_GlobalAcceleratorListener(obj.listener),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListAcceleratorsRequest
 */
export interface GlobalAcceleratorListAcceleratorsRequest {
  /**
   * @schema GlobalAcceleratorListAcceleratorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListAcceleratorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListAcceleratorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListAcceleratorsRequest(obj: GlobalAcceleratorListAcceleratorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListAcceleratorsResponse
 */
export interface GlobalAcceleratorListAcceleratorsResponse {
  /**
   * @schema GlobalAcceleratorListAcceleratorsResponse#Accelerators
   */
  readonly accelerators?: GlobalAcceleratorAccelerator[];

  /**
   * @schema GlobalAcceleratorListAcceleratorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListAcceleratorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListAcceleratorsResponse(obj: GlobalAcceleratorListAcceleratorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accelerators': obj.accelerators?.map(y => toJson_GlobalAcceleratorAccelerator(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListByoipCidrsRequest
 */
export interface GlobalAcceleratorListByoipCidrsRequest {
  /**
   * @schema GlobalAcceleratorListByoipCidrsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListByoipCidrsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListByoipCidrsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListByoipCidrsRequest(obj: GlobalAcceleratorListByoipCidrsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListByoipCidrsResponse
 */
export interface GlobalAcceleratorListByoipCidrsResponse {
  /**
   * @schema GlobalAcceleratorListByoipCidrsResponse#ByoipCidrs
   */
  readonly byoipCidrs?: GlobalAcceleratorByoipCidr[];

  /**
   * @schema GlobalAcceleratorListByoipCidrsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListByoipCidrsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListByoipCidrsResponse(obj: GlobalAcceleratorListByoipCidrsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByoipCidrs': obj.byoipCidrs?.map(y => toJson_GlobalAcceleratorByoipCidr(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListCustomRoutingAcceleratorsRequest
 */
export interface GlobalAcceleratorListCustomRoutingAcceleratorsRequest {
  /**
   * @schema GlobalAcceleratorListCustomRoutingAcceleratorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListCustomRoutingAcceleratorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListCustomRoutingAcceleratorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListCustomRoutingAcceleratorsRequest(obj: GlobalAcceleratorListCustomRoutingAcceleratorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListCustomRoutingAcceleratorsResponse
 */
export interface GlobalAcceleratorListCustomRoutingAcceleratorsResponse {
  /**
   * @schema GlobalAcceleratorListCustomRoutingAcceleratorsResponse#Accelerators
   */
  readonly accelerators?: GlobalAcceleratorCustomRoutingAccelerator[];

  /**
   * @schema GlobalAcceleratorListCustomRoutingAcceleratorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListCustomRoutingAcceleratorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListCustomRoutingAcceleratorsResponse(obj: GlobalAcceleratorListCustomRoutingAcceleratorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accelerators': obj.accelerators?.map(y => toJson_GlobalAcceleratorCustomRoutingAccelerator(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListCustomRoutingEndpointGroupsRequest
 */
export interface GlobalAcceleratorListCustomRoutingEndpointGroupsRequest {
  /**
   * @schema GlobalAcceleratorListCustomRoutingEndpointGroupsRequest#ListenerArn
   */
  readonly listenerArn?: string;

  /**
   * @schema GlobalAcceleratorListCustomRoutingEndpointGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListCustomRoutingEndpointGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListCustomRoutingEndpointGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListCustomRoutingEndpointGroupsRequest(obj: GlobalAcceleratorListCustomRoutingEndpointGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListCustomRoutingEndpointGroupsResponse
 */
export interface GlobalAcceleratorListCustomRoutingEndpointGroupsResponse {
  /**
   * @schema GlobalAcceleratorListCustomRoutingEndpointGroupsResponse#EndpointGroups
   */
  readonly endpointGroups?: GlobalAcceleratorCustomRoutingEndpointGroup[];

  /**
   * @schema GlobalAcceleratorListCustomRoutingEndpointGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListCustomRoutingEndpointGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListCustomRoutingEndpointGroupsResponse(obj: GlobalAcceleratorListCustomRoutingEndpointGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroups': obj.endpointGroups?.map(y => toJson_GlobalAcceleratorCustomRoutingEndpointGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListCustomRoutingListenersRequest
 */
export interface GlobalAcceleratorListCustomRoutingListenersRequest {
  /**
   * @schema GlobalAcceleratorListCustomRoutingListenersRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorListCustomRoutingListenersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListCustomRoutingListenersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListCustomRoutingListenersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListCustomRoutingListenersRequest(obj: GlobalAcceleratorListCustomRoutingListenersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListCustomRoutingListenersResponse
 */
export interface GlobalAcceleratorListCustomRoutingListenersResponse {
  /**
   * @schema GlobalAcceleratorListCustomRoutingListenersResponse#Listeners
   */
  readonly listeners?: GlobalAcceleratorCustomRoutingListener[];

  /**
   * @schema GlobalAcceleratorListCustomRoutingListenersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListCustomRoutingListenersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListCustomRoutingListenersResponse(obj: GlobalAcceleratorListCustomRoutingListenersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Listeners': obj.listeners?.map(y => toJson_GlobalAcceleratorCustomRoutingListener(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListCustomRoutingPortMappingsRequest
 */
export interface GlobalAcceleratorListCustomRoutingPortMappingsRequest {
  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsRequest#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListCustomRoutingPortMappingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListCustomRoutingPortMappingsRequest(obj: GlobalAcceleratorListCustomRoutingPortMappingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'EndpointGroupArn': obj.endpointGroupArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListCustomRoutingPortMappingsResponse
 */
export interface GlobalAcceleratorListCustomRoutingPortMappingsResponse {
  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsResponse#PortMappings
   */
  readonly portMappings?: GlobalAcceleratorPortMapping[];

  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListCustomRoutingPortMappingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListCustomRoutingPortMappingsResponse(obj: GlobalAcceleratorListCustomRoutingPortMappingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortMappings': obj.portMappings?.map(y => toJson_GlobalAcceleratorPortMapping(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListCustomRoutingPortMappingsByDestinationRequest
 */
export interface GlobalAcceleratorListCustomRoutingPortMappingsByDestinationRequest {
  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsByDestinationRequest#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsByDestinationRequest#DestinationAddress
   */
  readonly destinationAddress?: string;

  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsByDestinationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsByDestinationRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListCustomRoutingPortMappingsByDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListCustomRoutingPortMappingsByDestinationRequest(obj: GlobalAcceleratorListCustomRoutingPortMappingsByDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointId': obj.endpointId,
    'DestinationAddress': obj.destinationAddress,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListCustomRoutingPortMappingsByDestinationResponse
 */
export interface GlobalAcceleratorListCustomRoutingPortMappingsByDestinationResponse {
  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsByDestinationResponse#DestinationPortMappings
   */
  readonly destinationPortMappings?: GlobalAcceleratorDestinationPortMapping[];

  /**
   * @schema GlobalAcceleratorListCustomRoutingPortMappingsByDestinationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListCustomRoutingPortMappingsByDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListCustomRoutingPortMappingsByDestinationResponse(obj: GlobalAcceleratorListCustomRoutingPortMappingsByDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationPortMappings': obj.destinationPortMappings?.map(y => toJson_GlobalAcceleratorDestinationPortMapping(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListEndpointGroupsRequest
 */
export interface GlobalAcceleratorListEndpointGroupsRequest {
  /**
   * @schema GlobalAcceleratorListEndpointGroupsRequest#ListenerArn
   */
  readonly listenerArn?: string;

  /**
   * @schema GlobalAcceleratorListEndpointGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListEndpointGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListEndpointGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListEndpointGroupsRequest(obj: GlobalAcceleratorListEndpointGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListEndpointGroupsResponse
 */
export interface GlobalAcceleratorListEndpointGroupsResponse {
  /**
   * @schema GlobalAcceleratorListEndpointGroupsResponse#EndpointGroups
   */
  readonly endpointGroups?: GlobalAcceleratorEndpointGroup[];

  /**
   * @schema GlobalAcceleratorListEndpointGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListEndpointGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListEndpointGroupsResponse(obj: GlobalAcceleratorListEndpointGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroups': obj.endpointGroups?.map(y => toJson_GlobalAcceleratorEndpointGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListListenersRequest
 */
export interface GlobalAcceleratorListListenersRequest {
  /**
   * @schema GlobalAcceleratorListListenersRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorListListenersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListListenersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListListenersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListListenersRequest(obj: GlobalAcceleratorListListenersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListListenersResponse
 */
export interface GlobalAcceleratorListListenersResponse {
  /**
   * @schema GlobalAcceleratorListListenersResponse#Listeners
   */
  readonly listeners?: GlobalAcceleratorListener[];

  /**
   * @schema GlobalAcceleratorListListenersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListListenersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListListenersResponse(obj: GlobalAcceleratorListListenersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Listeners': obj.listeners?.map(y => toJson_GlobalAcceleratorListener(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListTagsForResourceRequest
 */
export interface GlobalAcceleratorListTagsForResourceRequest {
  /**
   * @schema GlobalAcceleratorListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListTagsForResourceRequest(obj: GlobalAcceleratorListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListTagsForResourceResponse
 */
export interface GlobalAcceleratorListTagsForResourceResponse {
  /**
   * @schema GlobalAcceleratorListTagsForResourceResponse#Tags
   */
  readonly tags?: GlobalAcceleratorTag[];

}

/**
 * Converts an object of type 'GlobalAcceleratorListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListTagsForResourceResponse(obj: GlobalAcceleratorListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_GlobalAcceleratorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorProvisionByoipCidrRequest
 */
export interface GlobalAcceleratorProvisionByoipCidrRequest {
  /**
   * @schema GlobalAcceleratorProvisionByoipCidrRequest#Cidr
   */
  readonly cidr?: string;

  /**
   * @schema GlobalAcceleratorProvisionByoipCidrRequest#CidrAuthorizationContext
   */
  readonly cidrAuthorizationContext?: GlobalAcceleratorCidrAuthorizationContext;

}

/**
 * Converts an object of type 'GlobalAcceleratorProvisionByoipCidrRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorProvisionByoipCidrRequest(obj: GlobalAcceleratorProvisionByoipCidrRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cidr': obj.cidr,
    'CidrAuthorizationContext': toJson_GlobalAcceleratorCidrAuthorizationContext(obj.cidrAuthorizationContext),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorProvisionByoipCidrResponse
 */
export interface GlobalAcceleratorProvisionByoipCidrResponse {
  /**
   * @schema GlobalAcceleratorProvisionByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: GlobalAcceleratorByoipCidr;

}

/**
 * Converts an object of type 'GlobalAcceleratorProvisionByoipCidrResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorProvisionByoipCidrResponse(obj: GlobalAcceleratorProvisionByoipCidrResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByoipCidr': toJson_GlobalAcceleratorByoipCidr(obj.byoipCidr),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorRemoveCustomRoutingEndpointsRequest
 */
export interface GlobalAcceleratorRemoveCustomRoutingEndpointsRequest {
  /**
   * @schema GlobalAcceleratorRemoveCustomRoutingEndpointsRequest#EndpointIds
   */
  readonly endpointIds?: string[];

  /**
   * @schema GlobalAcceleratorRemoveCustomRoutingEndpointsRequest#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorRemoveCustomRoutingEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorRemoveCustomRoutingEndpointsRequest(obj: GlobalAcceleratorRemoveCustomRoutingEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointIds': obj.endpointIds?.map(y => y),
    'EndpointGroupArn': obj.endpointGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorTagResourceRequest
 */
export interface GlobalAcceleratorTagResourceRequest {
  /**
   * @schema GlobalAcceleratorTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GlobalAcceleratorTagResourceRequest#Tags
   */
  readonly tags?: GlobalAcceleratorTag[];

}

/**
 * Converts an object of type 'GlobalAcceleratorTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorTagResourceRequest(obj: GlobalAcceleratorTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_GlobalAcceleratorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorTagResourceResponse
 */
export interface GlobalAcceleratorTagResourceResponse {
}

/**
 * Converts an object of type 'GlobalAcceleratorTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorTagResourceResponse(obj: GlobalAcceleratorTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUntagResourceRequest
 */
export interface GlobalAcceleratorUntagResourceRequest {
  /**
   * @schema GlobalAcceleratorUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GlobalAcceleratorUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'GlobalAcceleratorUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUntagResourceRequest(obj: GlobalAcceleratorUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema GlobalAcceleratorUntagResourceResponse
 */
export interface GlobalAcceleratorUntagResourceResponse {
}

/**
 * Converts an object of type 'GlobalAcceleratorUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUntagResourceResponse(obj: GlobalAcceleratorUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateAcceleratorRequest
 */
export interface GlobalAcceleratorUpdateAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorUpdateAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorRequest#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateAcceleratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateAcceleratorRequest(obj: GlobalAcceleratorUpdateAcceleratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'Name': obj.name,
    'IpAddressType': obj.ipAddressType,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateAcceleratorResponse
 */
export interface GlobalAcceleratorUpdateAcceleratorResponse {
  /**
   * @schema GlobalAcceleratorUpdateAcceleratorResponse#Accelerator
   */
  readonly accelerator?: GlobalAcceleratorAccelerator;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateAcceleratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateAcceleratorResponse(obj: GlobalAcceleratorUpdateAcceleratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accelerator': toJson_GlobalAcceleratorAccelerator(obj.accelerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateAcceleratorAttributesRequest
 */
export interface GlobalAcceleratorUpdateAcceleratorAttributesRequest {
  /**
   * @schema GlobalAcceleratorUpdateAcceleratorAttributesRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorAttributesRequest#FlowLogsEnabled
   */
  readonly flowLogsEnabled?: boolean;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorAttributesRequest#FlowLogsS3Bucket
   */
  readonly flowLogsS3Bucket?: string;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorAttributesRequest#FlowLogsS3Prefix
   */
  readonly flowLogsS3Prefix?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateAcceleratorAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateAcceleratorAttributesRequest(obj: GlobalAcceleratorUpdateAcceleratorAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'FlowLogsEnabled': obj.flowLogsEnabled,
    'FlowLogsS3Bucket': obj.flowLogsS3Bucket,
    'FlowLogsS3Prefix': obj.flowLogsS3Prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateAcceleratorAttributesResponse
 */
export interface GlobalAcceleratorUpdateAcceleratorAttributesResponse {
  /**
   * @schema GlobalAcceleratorUpdateAcceleratorAttributesResponse#AcceleratorAttributes
   */
  readonly acceleratorAttributes?: GlobalAcceleratorAcceleratorAttributes;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateAcceleratorAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateAcceleratorAttributesResponse(obj: GlobalAcceleratorUpdateAcceleratorAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorAttributes': toJson_GlobalAcceleratorAcceleratorAttributes(obj.acceleratorAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorRequest
 */
export interface GlobalAcceleratorUpdateCustomRoutingAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorRequest#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateCustomRoutingAcceleratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateCustomRoutingAcceleratorRequest(obj: GlobalAcceleratorUpdateCustomRoutingAcceleratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'Name': obj.name,
    'IpAddressType': obj.ipAddressType,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorResponse
 */
export interface GlobalAcceleratorUpdateCustomRoutingAcceleratorResponse {
  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorResponse#Accelerator
   */
  readonly accelerator?: GlobalAcceleratorCustomRoutingAccelerator;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateCustomRoutingAcceleratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateCustomRoutingAcceleratorResponse(obj: GlobalAcceleratorUpdateCustomRoutingAcceleratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accelerator': toJson_GlobalAcceleratorCustomRoutingAccelerator(obj.accelerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesRequest
 */
export interface GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesRequest {
  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesRequest#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesRequest#FlowLogsEnabled
   */
  readonly flowLogsEnabled?: boolean;

  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesRequest#FlowLogsS3Bucket
   */
  readonly flowLogsS3Bucket?: string;

  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesRequest#FlowLogsS3Prefix
   */
  readonly flowLogsS3Prefix?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesRequest(obj: GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'FlowLogsEnabled': obj.flowLogsEnabled,
    'FlowLogsS3Bucket': obj.flowLogsS3Bucket,
    'FlowLogsS3Prefix': obj.flowLogsS3Prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesResponse
 */
export interface GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesResponse {
  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesResponse#AcceleratorAttributes
   */
  readonly acceleratorAttributes?: GlobalAcceleratorCustomRoutingAcceleratorAttributes;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesResponse(obj: GlobalAcceleratorUpdateCustomRoutingAcceleratorAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorAttributes': toJson_GlobalAcceleratorCustomRoutingAcceleratorAttributes(obj.acceleratorAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateCustomRoutingListenerRequest
 */
export interface GlobalAcceleratorUpdateCustomRoutingListenerRequest {
  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingListenerRequest#ListenerArn
   */
  readonly listenerArn?: string;

  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingListenerRequest#PortRanges
   */
  readonly portRanges?: GlobalAcceleratorPortRange[];

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateCustomRoutingListenerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateCustomRoutingListenerRequest(obj: GlobalAcceleratorUpdateCustomRoutingListenerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
    'PortRanges': obj.portRanges?.map(y => toJson_GlobalAcceleratorPortRange(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateCustomRoutingListenerResponse
 */
export interface GlobalAcceleratorUpdateCustomRoutingListenerResponse {
  /**
   * @schema GlobalAcceleratorUpdateCustomRoutingListenerResponse#Listener
   */
  readonly listener?: GlobalAcceleratorCustomRoutingListener;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateCustomRoutingListenerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateCustomRoutingListenerResponse(obj: GlobalAcceleratorUpdateCustomRoutingListenerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Listener': toJson_GlobalAcceleratorCustomRoutingListener(obj.listener),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateEndpointGroupRequest
 */
export interface GlobalAcceleratorUpdateEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#EndpointConfigurations
   */
  readonly endpointConfigurations?: GlobalAcceleratorEndpointConfiguration[];

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#TrafficDialPercentage
   */
  readonly trafficDialPercentage?: number;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#HealthCheckPort
   */
  readonly healthCheckPort?: number;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#HealthCheckProtocol
   */
  readonly healthCheckProtocol?: string;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#HealthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#HealthCheckIntervalSeconds
   */
  readonly healthCheckIntervalSeconds?: number;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#ThresholdCount
   */
  readonly thresholdCount?: number;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#PortOverrides
   */
  readonly portOverrides?: GlobalAcceleratorPortOverride[];

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateEndpointGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateEndpointGroupRequest(obj: GlobalAcceleratorUpdateEndpointGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroupArn': obj.endpointGroupArn,
    'EndpointConfigurations': obj.endpointConfigurations?.map(y => toJson_GlobalAcceleratorEndpointConfiguration(y)),
    'TrafficDialPercentage': obj.trafficDialPercentage,
    'HealthCheckPort': obj.healthCheckPort,
    'HealthCheckProtocol': obj.healthCheckProtocol,
    'HealthCheckPath': obj.healthCheckPath,
    'HealthCheckIntervalSeconds': obj.healthCheckIntervalSeconds,
    'ThresholdCount': obj.thresholdCount,
    'PortOverrides': obj.portOverrides?.map(y => toJson_GlobalAcceleratorPortOverride(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateEndpointGroupResponse
 */
export interface GlobalAcceleratorUpdateEndpointGroupResponse {
  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: GlobalAcceleratorEndpointGroup;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateEndpointGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateEndpointGroupResponse(obj: GlobalAcceleratorUpdateEndpointGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroup': toJson_GlobalAcceleratorEndpointGroup(obj.endpointGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateListenerRequest
 */
export interface GlobalAcceleratorUpdateListenerRequest {
  /**
   * @schema GlobalAcceleratorUpdateListenerRequest#ListenerArn
   */
  readonly listenerArn?: string;

  /**
   * @schema GlobalAcceleratorUpdateListenerRequest#PortRanges
   */
  readonly portRanges?: GlobalAcceleratorPortRange[];

  /**
   * @schema GlobalAcceleratorUpdateListenerRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema GlobalAcceleratorUpdateListenerRequest#ClientAffinity
   */
  readonly clientAffinity?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateListenerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateListenerRequest(obj: GlobalAcceleratorUpdateListenerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
    'PortRanges': obj.portRanges?.map(y => toJson_GlobalAcceleratorPortRange(y)),
    'Protocol': obj.protocol,
    'ClientAffinity': obj.clientAffinity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorUpdateListenerResponse
 */
export interface GlobalAcceleratorUpdateListenerResponse {
  /**
   * @schema GlobalAcceleratorUpdateListenerResponse#Listener
   */
  readonly listener?: GlobalAcceleratorListener;

}

/**
 * Converts an object of type 'GlobalAcceleratorUpdateListenerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorUpdateListenerResponse(obj: GlobalAcceleratorUpdateListenerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Listener': toJson_GlobalAcceleratorListener(obj.listener),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorWithdrawByoipCidrRequest
 */
export interface GlobalAcceleratorWithdrawByoipCidrRequest {
  /**
   * @schema GlobalAcceleratorWithdrawByoipCidrRequest#Cidr
   */
  readonly cidr?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorWithdrawByoipCidrRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorWithdrawByoipCidrRequest(obj: GlobalAcceleratorWithdrawByoipCidrRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cidr': obj.cidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorWithdrawByoipCidrResponse
 */
export interface GlobalAcceleratorWithdrawByoipCidrResponse {
  /**
   * @schema GlobalAcceleratorWithdrawByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: GlobalAcceleratorByoipCidr;

}

/**
 * Converts an object of type 'GlobalAcceleratorWithdrawByoipCidrResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorWithdrawByoipCidrResponse(obj: GlobalAcceleratorWithdrawByoipCidrResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByoipCidr': toJson_GlobalAcceleratorByoipCidr(obj.byoipCidr),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCustomRoutingEndpointConfiguration
 */
export interface GlobalAcceleratorCustomRoutingEndpointConfiguration {
  /**
   * @schema GlobalAcceleratorCustomRoutingEndpointConfiguration#EndpointId
   */
  readonly endpointId?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorCustomRoutingEndpointConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCustomRoutingEndpointConfiguration(obj: GlobalAcceleratorCustomRoutingEndpointConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointId': obj.endpointId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCustomRoutingEndpointDescription
 */
export interface GlobalAcceleratorCustomRoutingEndpointDescription {
  /**
   * @schema GlobalAcceleratorCustomRoutingEndpointDescription#EndpointId
   */
  readonly endpointId?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorCustomRoutingEndpointDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCustomRoutingEndpointDescription(obj: GlobalAcceleratorCustomRoutingEndpointDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointId': obj.endpointId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorByoipCidr
 */
export interface GlobalAcceleratorByoipCidr {
  /**
   * @schema GlobalAcceleratorByoipCidr#Cidr
   */
  readonly cidr?: string;

  /**
   * @schema GlobalAcceleratorByoipCidr#State
   */
  readonly state?: string;

  /**
   * @schema GlobalAcceleratorByoipCidr#Events
   */
  readonly events?: GlobalAcceleratorByoipCidrEvent[];

}

/**
 * Converts an object of type 'GlobalAcceleratorByoipCidr' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorByoipCidr(obj: GlobalAcceleratorByoipCidr | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cidr': obj.cidr,
    'State': obj.state,
    'Events': obj.events?.map(y => toJson_GlobalAcceleratorByoipCidrEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorTag
 */
export interface GlobalAcceleratorTag {
  /**
   * @schema GlobalAcceleratorTag#Key
   */
  readonly key?: string;

  /**
   * @schema GlobalAcceleratorTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorTag(obj: GlobalAcceleratorTag | undefined): Record<string, any> | undefined {
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
 * @schema GlobalAcceleratorAccelerator
 */
export interface GlobalAcceleratorAccelerator {
  /**
   * @schema GlobalAcceleratorAccelerator#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#Name
   */
  readonly name?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema GlobalAcceleratorAccelerator#IpSets
   */
  readonly ipSets?: GlobalAcceleratorIpSet[];

  /**
   * @schema GlobalAcceleratorAccelerator#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#Status
   */
  readonly status?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorAccelerator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorAccelerator(obj: GlobalAcceleratorAccelerator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'Name': obj.name,
    'IpAddressType': obj.ipAddressType,
    'Enabled': obj.enabled,
    'IpSets': obj.ipSets?.map(y => toJson_GlobalAcceleratorIpSet(y)),
    'DnsName': obj.dnsName,
    'Status': obj.status,
    'CreatedTime': obj.createdTime,
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCustomRoutingAccelerator
 */
export interface GlobalAcceleratorCustomRoutingAccelerator {
  /**
   * @schema GlobalAcceleratorCustomRoutingAccelerator#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorCustomRoutingAccelerator#Name
   */
  readonly name?: string;

  /**
   * @schema GlobalAcceleratorCustomRoutingAccelerator#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema GlobalAcceleratorCustomRoutingAccelerator#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema GlobalAcceleratorCustomRoutingAccelerator#IpSets
   */
  readonly ipSets?: GlobalAcceleratorIpSet[];

  /**
   * @schema GlobalAcceleratorCustomRoutingAccelerator#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GlobalAcceleratorCustomRoutingAccelerator#Status
   */
  readonly status?: string;

  /**
   * @schema GlobalAcceleratorCustomRoutingAccelerator#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlobalAcceleratorCustomRoutingAccelerator#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorCustomRoutingAccelerator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCustomRoutingAccelerator(obj: GlobalAcceleratorCustomRoutingAccelerator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'Name': obj.name,
    'IpAddressType': obj.ipAddressType,
    'Enabled': obj.enabled,
    'IpSets': obj.ipSets?.map(y => toJson_GlobalAcceleratorIpSet(y)),
    'DnsName': obj.dnsName,
    'Status': obj.status,
    'CreatedTime': obj.createdTime,
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCustomRoutingDestinationConfiguration
 */
export interface GlobalAcceleratorCustomRoutingDestinationConfiguration {
  /**
   * @schema GlobalAcceleratorCustomRoutingDestinationConfiguration#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema GlobalAcceleratorCustomRoutingDestinationConfiguration#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema GlobalAcceleratorCustomRoutingDestinationConfiguration#Protocols
   */
  readonly protocols?: string[];

}

/**
 * Converts an object of type 'GlobalAcceleratorCustomRoutingDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCustomRoutingDestinationConfiguration(obj: GlobalAcceleratorCustomRoutingDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromPort': obj.fromPort,
    'ToPort': obj.toPort,
    'Protocols': obj.protocols?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCustomRoutingEndpointGroup
 */
export interface GlobalAcceleratorCustomRoutingEndpointGroup {
  /**
   * @schema GlobalAcceleratorCustomRoutingEndpointGroup#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

  /**
   * @schema GlobalAcceleratorCustomRoutingEndpointGroup#EndpointGroupRegion
   */
  readonly endpointGroupRegion?: string;

  /**
   * @schema GlobalAcceleratorCustomRoutingEndpointGroup#DestinationDescriptions
   */
  readonly destinationDescriptions?: GlobalAcceleratorCustomRoutingDestinationDescription[];

  /**
   * @schema GlobalAcceleratorCustomRoutingEndpointGroup#EndpointDescriptions
   */
  readonly endpointDescriptions?: GlobalAcceleratorCustomRoutingEndpointDescription[];

}

/**
 * Converts an object of type 'GlobalAcceleratorCustomRoutingEndpointGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCustomRoutingEndpointGroup(obj: GlobalAcceleratorCustomRoutingEndpointGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroupArn': obj.endpointGroupArn,
    'EndpointGroupRegion': obj.endpointGroupRegion,
    'DestinationDescriptions': obj.destinationDescriptions?.map(y => toJson_GlobalAcceleratorCustomRoutingDestinationDescription(y)),
    'EndpointDescriptions': obj.endpointDescriptions?.map(y => toJson_GlobalAcceleratorCustomRoutingEndpointDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorPortRange
 */
export interface GlobalAcceleratorPortRange {
  /**
   * @schema GlobalAcceleratorPortRange#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema GlobalAcceleratorPortRange#ToPort
   */
  readonly toPort?: number;

}

/**
 * Converts an object of type 'GlobalAcceleratorPortRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorPortRange(obj: GlobalAcceleratorPortRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromPort': obj.fromPort,
    'ToPort': obj.toPort,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCustomRoutingListener
 */
export interface GlobalAcceleratorCustomRoutingListener {
  /**
   * @schema GlobalAcceleratorCustomRoutingListener#ListenerArn
   */
  readonly listenerArn?: string;

  /**
   * @schema GlobalAcceleratorCustomRoutingListener#PortRanges
   */
  readonly portRanges?: GlobalAcceleratorPortRange[];

}

/**
 * Converts an object of type 'GlobalAcceleratorCustomRoutingListener' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCustomRoutingListener(obj: GlobalAcceleratorCustomRoutingListener | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
    'PortRanges': obj.portRanges?.map(y => toJson_GlobalAcceleratorPortRange(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorEndpointConfiguration
 */
export interface GlobalAcceleratorEndpointConfiguration {
  /**
   * @schema GlobalAcceleratorEndpointConfiguration#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema GlobalAcceleratorEndpointConfiguration#Weight
   */
  readonly weight?: number;

  /**
   * @schema GlobalAcceleratorEndpointConfiguration#ClientIPPreservationEnabled
   */
  readonly clientIpPreservationEnabled?: boolean;

}

/**
 * Converts an object of type 'GlobalAcceleratorEndpointConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorEndpointConfiguration(obj: GlobalAcceleratorEndpointConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointId': obj.endpointId,
    'Weight': obj.weight,
    'ClientIPPreservationEnabled': obj.clientIpPreservationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorPortOverride
 */
export interface GlobalAcceleratorPortOverride {
  /**
   * @schema GlobalAcceleratorPortOverride#ListenerPort
   */
  readonly listenerPort?: number;

  /**
   * @schema GlobalAcceleratorPortOverride#EndpointPort
   */
  readonly endpointPort?: number;

}

/**
 * Converts an object of type 'GlobalAcceleratorPortOverride' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorPortOverride(obj: GlobalAcceleratorPortOverride | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerPort': obj.listenerPort,
    'EndpointPort': obj.endpointPort,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorEndpointGroup
 */
export interface GlobalAcceleratorEndpointGroup {
  /**
   * @schema GlobalAcceleratorEndpointGroup#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

  /**
   * @schema GlobalAcceleratorEndpointGroup#EndpointGroupRegion
   */
  readonly endpointGroupRegion?: string;

  /**
   * @schema GlobalAcceleratorEndpointGroup#EndpointDescriptions
   */
  readonly endpointDescriptions?: GlobalAcceleratorEndpointDescription[];

  /**
   * @schema GlobalAcceleratorEndpointGroup#TrafficDialPercentage
   */
  readonly trafficDialPercentage?: number;

  /**
   * @schema GlobalAcceleratorEndpointGroup#HealthCheckPort
   */
  readonly healthCheckPort?: number;

  /**
   * @schema GlobalAcceleratorEndpointGroup#HealthCheckProtocol
   */
  readonly healthCheckProtocol?: string;

  /**
   * @schema GlobalAcceleratorEndpointGroup#HealthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema GlobalAcceleratorEndpointGroup#HealthCheckIntervalSeconds
   */
  readonly healthCheckIntervalSeconds?: number;

  /**
   * @schema GlobalAcceleratorEndpointGroup#ThresholdCount
   */
  readonly thresholdCount?: number;

  /**
   * @schema GlobalAcceleratorEndpointGroup#PortOverrides
   */
  readonly portOverrides?: GlobalAcceleratorPortOverride[];

}

/**
 * Converts an object of type 'GlobalAcceleratorEndpointGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorEndpointGroup(obj: GlobalAcceleratorEndpointGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointGroupArn': obj.endpointGroupArn,
    'EndpointGroupRegion': obj.endpointGroupRegion,
    'EndpointDescriptions': obj.endpointDescriptions?.map(y => toJson_GlobalAcceleratorEndpointDescription(y)),
    'TrafficDialPercentage': obj.trafficDialPercentage,
    'HealthCheckPort': obj.healthCheckPort,
    'HealthCheckProtocol': obj.healthCheckProtocol,
    'HealthCheckPath': obj.healthCheckPath,
    'HealthCheckIntervalSeconds': obj.healthCheckIntervalSeconds,
    'ThresholdCount': obj.thresholdCount,
    'PortOverrides': obj.portOverrides?.map(y => toJson_GlobalAcceleratorPortOverride(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorListener
 */
export interface GlobalAcceleratorListener {
  /**
   * @schema GlobalAcceleratorListener#ListenerArn
   */
  readonly listenerArn?: string;

  /**
   * @schema GlobalAcceleratorListener#PortRanges
   */
  readonly portRanges?: GlobalAcceleratorPortRange[];

  /**
   * @schema GlobalAcceleratorListener#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema GlobalAcceleratorListener#ClientAffinity
   */
  readonly clientAffinity?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorListener' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorListener(obj: GlobalAcceleratorListener | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListenerArn': obj.listenerArn,
    'PortRanges': obj.portRanges?.map(y => toJson_GlobalAcceleratorPortRange(y)),
    'Protocol': obj.protocol,
    'ClientAffinity': obj.clientAffinity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorAcceleratorAttributes
 */
export interface GlobalAcceleratorAcceleratorAttributes {
  /**
   * @schema GlobalAcceleratorAcceleratorAttributes#FlowLogsEnabled
   */
  readonly flowLogsEnabled?: boolean;

  /**
   * @schema GlobalAcceleratorAcceleratorAttributes#FlowLogsS3Bucket
   */
  readonly flowLogsS3Bucket?: string;

  /**
   * @schema GlobalAcceleratorAcceleratorAttributes#FlowLogsS3Prefix
   */
  readonly flowLogsS3Prefix?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorAcceleratorAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorAcceleratorAttributes(obj: GlobalAcceleratorAcceleratorAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowLogsEnabled': obj.flowLogsEnabled,
    'FlowLogsS3Bucket': obj.flowLogsS3Bucket,
    'FlowLogsS3Prefix': obj.flowLogsS3Prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCustomRoutingAcceleratorAttributes
 */
export interface GlobalAcceleratorCustomRoutingAcceleratorAttributes {
  /**
   * @schema GlobalAcceleratorCustomRoutingAcceleratorAttributes#FlowLogsEnabled
   */
  readonly flowLogsEnabled?: boolean;

  /**
   * @schema GlobalAcceleratorCustomRoutingAcceleratorAttributes#FlowLogsS3Bucket
   */
  readonly flowLogsS3Bucket?: string;

  /**
   * @schema GlobalAcceleratorCustomRoutingAcceleratorAttributes#FlowLogsS3Prefix
   */
  readonly flowLogsS3Prefix?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorCustomRoutingAcceleratorAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCustomRoutingAcceleratorAttributes(obj: GlobalAcceleratorCustomRoutingAcceleratorAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowLogsEnabled': obj.flowLogsEnabled,
    'FlowLogsS3Bucket': obj.flowLogsS3Bucket,
    'FlowLogsS3Prefix': obj.flowLogsS3Prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorPortMapping
 */
export interface GlobalAcceleratorPortMapping {
  /**
   * @schema GlobalAcceleratorPortMapping#AcceleratorPort
   */
  readonly acceleratorPort?: number;

  /**
   * @schema GlobalAcceleratorPortMapping#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

  /**
   * @schema GlobalAcceleratorPortMapping#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema GlobalAcceleratorPortMapping#DestinationSocketAddress
   */
  readonly destinationSocketAddress?: GlobalAcceleratorSocketAddress;

  /**
   * @schema GlobalAcceleratorPortMapping#Protocols
   */
  readonly protocols?: string[];

  /**
   * @schema GlobalAcceleratorPortMapping#DestinationTrafficState
   */
  readonly destinationTrafficState?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorPortMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorPortMapping(obj: GlobalAcceleratorPortMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorPort': obj.acceleratorPort,
    'EndpointGroupArn': obj.endpointGroupArn,
    'EndpointId': obj.endpointId,
    'DestinationSocketAddress': toJson_GlobalAcceleratorSocketAddress(obj.destinationSocketAddress),
    'Protocols': obj.protocols?.map(y => y),
    'DestinationTrafficState': obj.destinationTrafficState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorDestinationPortMapping
 */
export interface GlobalAcceleratorDestinationPortMapping {
  /**
   * @schema GlobalAcceleratorDestinationPortMapping#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorDestinationPortMapping#AcceleratorSocketAddresses
   */
  readonly acceleratorSocketAddresses?: GlobalAcceleratorSocketAddress[];

  /**
   * @schema GlobalAcceleratorDestinationPortMapping#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

  /**
   * @schema GlobalAcceleratorDestinationPortMapping#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema GlobalAcceleratorDestinationPortMapping#EndpointGroupRegion
   */
  readonly endpointGroupRegion?: string;

  /**
   * @schema GlobalAcceleratorDestinationPortMapping#DestinationSocketAddress
   */
  readonly destinationSocketAddress?: GlobalAcceleratorSocketAddress;

  /**
   * @schema GlobalAcceleratorDestinationPortMapping#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema GlobalAcceleratorDestinationPortMapping#DestinationTrafficState
   */
  readonly destinationTrafficState?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorDestinationPortMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorDestinationPortMapping(obj: GlobalAcceleratorDestinationPortMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceleratorArn': obj.acceleratorArn,
    'AcceleratorSocketAddresses': obj.acceleratorSocketAddresses?.map(y => toJson_GlobalAcceleratorSocketAddress(y)),
    'EndpointGroupArn': obj.endpointGroupArn,
    'EndpointId': obj.endpointId,
    'EndpointGroupRegion': obj.endpointGroupRegion,
    'DestinationSocketAddress': toJson_GlobalAcceleratorSocketAddress(obj.destinationSocketAddress),
    'IpAddressType': obj.ipAddressType,
    'DestinationTrafficState': obj.destinationTrafficState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCidrAuthorizationContext
 */
export interface GlobalAcceleratorCidrAuthorizationContext {
  /**
   * @schema GlobalAcceleratorCidrAuthorizationContext#Message
   */
  readonly message?: string;

  /**
   * @schema GlobalAcceleratorCidrAuthorizationContext#Signature
   */
  readonly signature?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorCidrAuthorizationContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCidrAuthorizationContext(obj: GlobalAcceleratorCidrAuthorizationContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
    'Signature': obj.signature,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorByoipCidrEvent
 */
export interface GlobalAcceleratorByoipCidrEvent {
  /**
   * @schema GlobalAcceleratorByoipCidrEvent#Message
   */
  readonly message?: string;

  /**
   * @schema GlobalAcceleratorByoipCidrEvent#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * Converts an object of type 'GlobalAcceleratorByoipCidrEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorByoipCidrEvent(obj: GlobalAcceleratorByoipCidrEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
    'Timestamp': obj.timestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorIpSet
 */
export interface GlobalAcceleratorIpSet {
  /**
   * @schema GlobalAcceleratorIpSet#IpFamily
   */
  readonly ipFamily?: string;

  /**
   * @schema GlobalAcceleratorIpSet#IpAddresses
   */
  readonly ipAddresses?: string[];

}

/**
 * Converts an object of type 'GlobalAcceleratorIpSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorIpSet(obj: GlobalAcceleratorIpSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpFamily': obj.ipFamily,
    'IpAddresses': obj.ipAddresses?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorCustomRoutingDestinationDescription
 */
export interface GlobalAcceleratorCustomRoutingDestinationDescription {
  /**
   * @schema GlobalAcceleratorCustomRoutingDestinationDescription#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema GlobalAcceleratorCustomRoutingDestinationDescription#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema GlobalAcceleratorCustomRoutingDestinationDescription#Protocols
   */
  readonly protocols?: string[];

}

/**
 * Converts an object of type 'GlobalAcceleratorCustomRoutingDestinationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorCustomRoutingDestinationDescription(obj: GlobalAcceleratorCustomRoutingDestinationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromPort': obj.fromPort,
    'ToPort': obj.toPort,
    'Protocols': obj.protocols?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorEndpointDescription
 */
export interface GlobalAcceleratorEndpointDescription {
  /**
   * @schema GlobalAcceleratorEndpointDescription#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema GlobalAcceleratorEndpointDescription#Weight
   */
  readonly weight?: number;

  /**
   * @schema GlobalAcceleratorEndpointDescription#HealthState
   */
  readonly healthState?: string;

  /**
   * @schema GlobalAcceleratorEndpointDescription#HealthReason
   */
  readonly healthReason?: string;

  /**
   * @schema GlobalAcceleratorEndpointDescription#ClientIPPreservationEnabled
   */
  readonly clientIpPreservationEnabled?: boolean;

}

/**
 * Converts an object of type 'GlobalAcceleratorEndpointDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorEndpointDescription(obj: GlobalAcceleratorEndpointDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointId': obj.endpointId,
    'Weight': obj.weight,
    'HealthState': obj.healthState,
    'HealthReason': obj.healthReason,
    'ClientIPPreservationEnabled': obj.clientIpPreservationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlobalAcceleratorSocketAddress
 */
export interface GlobalAcceleratorSocketAddress {
  /**
   * @schema GlobalAcceleratorSocketAddress#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema GlobalAcceleratorSocketAddress#Port
   */
  readonly port?: number;

}

/**
 * Converts an object of type 'GlobalAcceleratorSocketAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalAcceleratorSocketAddress(obj: GlobalAcceleratorSocketAddress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpAddress': obj.ipAddress,
    'Port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
