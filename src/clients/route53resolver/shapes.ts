/**
 * @schema Route53ResolverAssociateFirewallRuleGroupRequest
 */
export interface Route53ResolverAssociateFirewallRuleGroupRequest {
  /**
   * @schema Route53ResolverAssociateFirewallRuleGroupRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverAssociateFirewallRuleGroupRequest#FirewallRuleGroupId
   */
  readonly firewallRuleGroupId?: string;

  /**
   * @schema Route53ResolverAssociateFirewallRuleGroupRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Route53ResolverAssociateFirewallRuleGroupRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema Route53ResolverAssociateFirewallRuleGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverAssociateFirewallRuleGroupRequest#MutationProtection
   */
  readonly mutationProtection?: string;

  /**
   * @schema Route53ResolverAssociateFirewallRuleGroupRequest#Tags
   */
  readonly tags?: Route53ResolverTag[];

}

/**
 * Converts an object of type 'Route53ResolverAssociateFirewallRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverAssociateFirewallRuleGroupRequest(obj: Route53ResolverAssociateFirewallRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatorRequestId': obj.creatorRequestId,
    'FirewallRuleGroupId': obj.firewallRuleGroupId,
    'VpcId': obj.vpcId,
    'Priority': obj.priority,
    'Name': obj.name,
    'MutationProtection': obj.mutationProtection,
    'Tags': obj.tags?.map(y => toJson_Route53ResolverTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverAssociateFirewallRuleGroupResponse
 */
export interface Route53ResolverAssociateFirewallRuleGroupResponse {
  /**
   * @schema Route53ResolverAssociateFirewallRuleGroupResponse#FirewallRuleGroupAssociation
   */
  readonly firewallRuleGroupAssociation?: Route53ResolverFirewallRuleGroupAssociation;

}

/**
 * Converts an object of type 'Route53ResolverAssociateFirewallRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverAssociateFirewallRuleGroupResponse(obj: Route53ResolverAssociateFirewallRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupAssociation': toJson_Route53ResolverFirewallRuleGroupAssociation(obj.firewallRuleGroupAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverAssociateResolverEndpointIpAddressRequest
 */
export interface Route53ResolverAssociateResolverEndpointIpAddressRequest {
  /**
   * @schema Route53ResolverAssociateResolverEndpointIpAddressRequest#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

  /**
   * @schema Route53ResolverAssociateResolverEndpointIpAddressRequest#IpAddress
   */
  readonly ipAddress?: Route53ResolverIpAddressUpdate;

}

/**
 * Converts an object of type 'Route53ResolverAssociateResolverEndpointIpAddressRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverAssociateResolverEndpointIpAddressRequest(obj: Route53ResolverAssociateResolverEndpointIpAddressRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpointId': obj.resolverEndpointId,
    'IpAddress': toJson_Route53ResolverIpAddressUpdate(obj.ipAddress),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverAssociateResolverEndpointIpAddressResponse
 */
export interface Route53ResolverAssociateResolverEndpointIpAddressResponse {
  /**
   * @schema Route53ResolverAssociateResolverEndpointIpAddressResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * Converts an object of type 'Route53ResolverAssociateResolverEndpointIpAddressResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverAssociateResolverEndpointIpAddressResponse(obj: Route53ResolverAssociateResolverEndpointIpAddressResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpoint': toJson_Route53ResolverResolverEndpoint(obj.resolverEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverAssociateResolverQueryLogConfigRequest
 */
export interface Route53ResolverAssociateResolverQueryLogConfigRequest {
  /**
   * @schema Route53ResolverAssociateResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId?: string;

  /**
   * @schema Route53ResolverAssociateResolverQueryLogConfigRequest#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'Route53ResolverAssociateResolverQueryLogConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverAssociateResolverQueryLogConfigRequest(obj: Route53ResolverAssociateResolverQueryLogConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfigId': obj.resolverQueryLogConfigId,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverAssociateResolverQueryLogConfigResponse
 */
export interface Route53ResolverAssociateResolverQueryLogConfigResponse {
  /**
   * @schema Route53ResolverAssociateResolverQueryLogConfigResponse#ResolverQueryLogConfigAssociation
   */
  readonly resolverQueryLogConfigAssociation?: Route53ResolverResolverQueryLogConfigAssociation;

}

/**
 * Converts an object of type 'Route53ResolverAssociateResolverQueryLogConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverAssociateResolverQueryLogConfigResponse(obj: Route53ResolverAssociateResolverQueryLogConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfigAssociation': toJson_Route53ResolverResolverQueryLogConfigAssociation(obj.resolverQueryLogConfigAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverAssociateResolverRuleRequest
 */
export interface Route53ResolverAssociateResolverRuleRequest {
  /**
   * @schema Route53ResolverAssociateResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId?: string;

  /**
   * @schema Route53ResolverAssociateResolverRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverAssociateResolverRuleRequest#VPCId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'Route53ResolverAssociateResolverRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverAssociateResolverRuleRequest(obj: Route53ResolverAssociateResolverRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRuleId': obj.resolverRuleId,
    'Name': obj.name,
    'VPCId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverAssociateResolverRuleResponse
 */
export interface Route53ResolverAssociateResolverRuleResponse {
  /**
   * @schema Route53ResolverAssociateResolverRuleResponse#ResolverRuleAssociation
   */
  readonly resolverRuleAssociation?: Route53ResolverResolverRuleAssociation;

}

/**
 * Converts an object of type 'Route53ResolverAssociateResolverRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverAssociateResolverRuleResponse(obj: Route53ResolverAssociateResolverRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRuleAssociation': toJson_Route53ResolverResolverRuleAssociation(obj.resolverRuleAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateFirewallDomainListRequest
 */
export interface Route53ResolverCreateFirewallDomainListRequest {
  /**
   * @schema Route53ResolverCreateFirewallDomainListRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverCreateFirewallDomainListRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverCreateFirewallDomainListRequest#Tags
   */
  readonly tags?: Route53ResolverTag[];

}

/**
 * Converts an object of type 'Route53ResolverCreateFirewallDomainListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateFirewallDomainListRequest(obj: Route53ResolverCreateFirewallDomainListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatorRequestId': obj.creatorRequestId,
    'Name': obj.name,
    'Tags': obj.tags?.map(y => toJson_Route53ResolverTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateFirewallDomainListResponse
 */
export interface Route53ResolverCreateFirewallDomainListResponse {
  /**
   * @schema Route53ResolverCreateFirewallDomainListResponse#FirewallDomainList
   */
  readonly firewallDomainList?: Route53ResolverFirewallDomainList;

}

/**
 * Converts an object of type 'Route53ResolverCreateFirewallDomainListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateFirewallDomainListResponse(obj: Route53ResolverCreateFirewallDomainListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallDomainList': toJson_Route53ResolverFirewallDomainList(obj.firewallDomainList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateFirewallRuleRequest
 */
export interface Route53ResolverCreateFirewallRuleRequest {
  /**
   * @schema Route53ResolverCreateFirewallRuleRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverCreateFirewallRuleRequest#FirewallRuleGroupId
   */
  readonly firewallRuleGroupId?: string;

  /**
   * @schema Route53ResolverCreateFirewallRuleRequest#FirewallDomainListId
   */
  readonly firewallDomainListId?: string;

  /**
   * @schema Route53ResolverCreateFirewallRuleRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema Route53ResolverCreateFirewallRuleRequest#Action
   */
  readonly action?: string;

  /**
   * @schema Route53ResolverCreateFirewallRuleRequest#BlockResponse
   */
  readonly blockResponse?: string;

  /**
   * @schema Route53ResolverCreateFirewallRuleRequest#BlockOverrideDomain
   */
  readonly blockOverrideDomain?: string;

  /**
   * @schema Route53ResolverCreateFirewallRuleRequest#BlockOverrideDnsType
   */
  readonly blockOverrideDnsType?: string;

  /**
   * @schema Route53ResolverCreateFirewallRuleRequest#BlockOverrideTtl
   */
  readonly blockOverrideTtl?: number;

  /**
   * @schema Route53ResolverCreateFirewallRuleRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Route53ResolverCreateFirewallRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateFirewallRuleRequest(obj: Route53ResolverCreateFirewallRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatorRequestId': obj.creatorRequestId,
    'FirewallRuleGroupId': obj.firewallRuleGroupId,
    'FirewallDomainListId': obj.firewallDomainListId,
    'Priority': obj.priority,
    'Action': obj.action,
    'BlockResponse': obj.blockResponse,
    'BlockOverrideDomain': obj.blockOverrideDomain,
    'BlockOverrideDnsType': obj.blockOverrideDnsType,
    'BlockOverrideTtl': obj.blockOverrideTtl,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateFirewallRuleResponse
 */
export interface Route53ResolverCreateFirewallRuleResponse {
  /**
   * @schema Route53ResolverCreateFirewallRuleResponse#FirewallRule
   */
  readonly firewallRule?: Route53ResolverFirewallRule;

}

/**
 * Converts an object of type 'Route53ResolverCreateFirewallRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateFirewallRuleResponse(obj: Route53ResolverCreateFirewallRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRule': toJson_Route53ResolverFirewallRule(obj.firewallRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateFirewallRuleGroupRequest
 */
export interface Route53ResolverCreateFirewallRuleGroupRequest {
  /**
   * @schema Route53ResolverCreateFirewallRuleGroupRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverCreateFirewallRuleGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverCreateFirewallRuleGroupRequest#Tags
   */
  readonly tags?: Route53ResolverTag[];

}

/**
 * Converts an object of type 'Route53ResolverCreateFirewallRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateFirewallRuleGroupRequest(obj: Route53ResolverCreateFirewallRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatorRequestId': obj.creatorRequestId,
    'Name': obj.name,
    'Tags': obj.tags?.map(y => toJson_Route53ResolverTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateFirewallRuleGroupResponse
 */
export interface Route53ResolverCreateFirewallRuleGroupResponse {
  /**
   * @schema Route53ResolverCreateFirewallRuleGroupResponse#FirewallRuleGroup
   */
  readonly firewallRuleGroup?: Route53ResolverFirewallRuleGroup;

}

/**
 * Converts an object of type 'Route53ResolverCreateFirewallRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateFirewallRuleGroupResponse(obj: Route53ResolverCreateFirewallRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroup': toJson_Route53ResolverFirewallRuleGroup(obj.firewallRuleGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateResolverEndpointRequest
 */
export interface Route53ResolverCreateResolverEndpointRequest {
  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#Direction
   */
  readonly direction?: string;

  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#IpAddresses
   */
  readonly ipAddresses?: Route53ResolverIpAddressRequest[];

  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#Tags
   */
  readonly tags?: Route53ResolverTag[];

}

/**
 * Converts an object of type 'Route53ResolverCreateResolverEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateResolverEndpointRequest(obj: Route53ResolverCreateResolverEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatorRequestId': obj.creatorRequestId,
    'Name': obj.name,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'Direction': obj.direction,
    'IpAddresses': obj.ipAddresses?.map(y => toJson_Route53ResolverIpAddressRequest(y)),
    'Tags': obj.tags?.map(y => toJson_Route53ResolverTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateResolverEndpointResponse
 */
export interface Route53ResolverCreateResolverEndpointResponse {
  /**
   * @schema Route53ResolverCreateResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * Converts an object of type 'Route53ResolverCreateResolverEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateResolverEndpointResponse(obj: Route53ResolverCreateResolverEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpoint': toJson_Route53ResolverResolverEndpoint(obj.resolverEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateResolverQueryLogConfigRequest
 */
export interface Route53ResolverCreateResolverQueryLogConfigRequest {
  /**
   * @schema Route53ResolverCreateResolverQueryLogConfigRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverCreateResolverQueryLogConfigRequest#DestinationArn
   */
  readonly destinationArn?: string;

  /**
   * @schema Route53ResolverCreateResolverQueryLogConfigRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverCreateResolverQueryLogConfigRequest#Tags
   */
  readonly tags?: Route53ResolverTag[];

}

/**
 * Converts an object of type 'Route53ResolverCreateResolverQueryLogConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateResolverQueryLogConfigRequest(obj: Route53ResolverCreateResolverQueryLogConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DestinationArn': obj.destinationArn,
    'CreatorRequestId': obj.creatorRequestId,
    'Tags': obj.tags?.map(y => toJson_Route53ResolverTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateResolverQueryLogConfigResponse
 */
export interface Route53ResolverCreateResolverQueryLogConfigResponse {
  /**
   * @schema Route53ResolverCreateResolverQueryLogConfigResponse#ResolverQueryLogConfig
   */
  readonly resolverQueryLogConfig?: Route53ResolverResolverQueryLogConfig;

}

/**
 * Converts an object of type 'Route53ResolverCreateResolverQueryLogConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateResolverQueryLogConfigResponse(obj: Route53ResolverCreateResolverQueryLogConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfig': toJson_Route53ResolverResolverQueryLogConfig(obj.resolverQueryLogConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateResolverRuleRequest
 */
export interface Route53ResolverCreateResolverRuleRequest {
  /**
   * @schema Route53ResolverCreateResolverRuleRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#RuleType
   */
  readonly ruleType?: string;

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#TargetIps
   */
  readonly targetIps?: Route53ResolverTargetAddress[];

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#Tags
   */
  readonly tags?: Route53ResolverTag[];

}

/**
 * Converts an object of type 'Route53ResolverCreateResolverRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateResolverRuleRequest(obj: Route53ResolverCreateResolverRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatorRequestId': obj.creatorRequestId,
    'Name': obj.name,
    'RuleType': obj.ruleType,
    'DomainName': obj.domainName,
    'TargetIps': obj.targetIps?.map(y => toJson_Route53ResolverTargetAddress(y)),
    'ResolverEndpointId': obj.resolverEndpointId,
    'Tags': obj.tags?.map(y => toJson_Route53ResolverTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverCreateResolverRuleResponse
 */
export interface Route53ResolverCreateResolverRuleResponse {
  /**
   * @schema Route53ResolverCreateResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: Route53ResolverResolverRule;

}

/**
 * Converts an object of type 'Route53ResolverCreateResolverRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverCreateResolverRuleResponse(obj: Route53ResolverCreateResolverRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRule': toJson_Route53ResolverResolverRule(obj.resolverRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteFirewallDomainListRequest
 */
export interface Route53ResolverDeleteFirewallDomainListRequest {
  /**
   * @schema Route53ResolverDeleteFirewallDomainListRequest#FirewallDomainListId
   */
  readonly firewallDomainListId?: string;

}

/**
 * Converts an object of type 'Route53ResolverDeleteFirewallDomainListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteFirewallDomainListRequest(obj: Route53ResolverDeleteFirewallDomainListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallDomainListId': obj.firewallDomainListId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteFirewallDomainListResponse
 */
export interface Route53ResolverDeleteFirewallDomainListResponse {
  /**
   * @schema Route53ResolverDeleteFirewallDomainListResponse#FirewallDomainList
   */
  readonly firewallDomainList?: Route53ResolverFirewallDomainList;

}

/**
 * Converts an object of type 'Route53ResolverDeleteFirewallDomainListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteFirewallDomainListResponse(obj: Route53ResolverDeleteFirewallDomainListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallDomainList': toJson_Route53ResolverFirewallDomainList(obj.firewallDomainList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteFirewallRuleRequest
 */
export interface Route53ResolverDeleteFirewallRuleRequest {
  /**
   * @schema Route53ResolverDeleteFirewallRuleRequest#FirewallRuleGroupId
   */
  readonly firewallRuleGroupId?: string;

  /**
   * @schema Route53ResolverDeleteFirewallRuleRequest#FirewallDomainListId
   */
  readonly firewallDomainListId?: string;

}

/**
 * Converts an object of type 'Route53ResolverDeleteFirewallRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteFirewallRuleRequest(obj: Route53ResolverDeleteFirewallRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupId': obj.firewallRuleGroupId,
    'FirewallDomainListId': obj.firewallDomainListId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteFirewallRuleResponse
 */
export interface Route53ResolverDeleteFirewallRuleResponse {
  /**
   * @schema Route53ResolverDeleteFirewallRuleResponse#FirewallRule
   */
  readonly firewallRule?: Route53ResolverFirewallRule;

}

/**
 * Converts an object of type 'Route53ResolverDeleteFirewallRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteFirewallRuleResponse(obj: Route53ResolverDeleteFirewallRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRule': toJson_Route53ResolverFirewallRule(obj.firewallRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteFirewallRuleGroupRequest
 */
export interface Route53ResolverDeleteFirewallRuleGroupRequest {
  /**
   * @schema Route53ResolverDeleteFirewallRuleGroupRequest#FirewallRuleGroupId
   */
  readonly firewallRuleGroupId?: string;

}

/**
 * Converts an object of type 'Route53ResolverDeleteFirewallRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteFirewallRuleGroupRequest(obj: Route53ResolverDeleteFirewallRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupId': obj.firewallRuleGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteFirewallRuleGroupResponse
 */
export interface Route53ResolverDeleteFirewallRuleGroupResponse {
  /**
   * @schema Route53ResolverDeleteFirewallRuleGroupResponse#FirewallRuleGroup
   */
  readonly firewallRuleGroup?: Route53ResolverFirewallRuleGroup;

}

/**
 * Converts an object of type 'Route53ResolverDeleteFirewallRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteFirewallRuleGroupResponse(obj: Route53ResolverDeleteFirewallRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroup': toJson_Route53ResolverFirewallRuleGroup(obj.firewallRuleGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteResolverEndpointRequest
 */
export interface Route53ResolverDeleteResolverEndpointRequest {
  /**
   * @schema Route53ResolverDeleteResolverEndpointRequest#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

}

/**
 * Converts an object of type 'Route53ResolverDeleteResolverEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteResolverEndpointRequest(obj: Route53ResolverDeleteResolverEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpointId': obj.resolverEndpointId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteResolverEndpointResponse
 */
export interface Route53ResolverDeleteResolverEndpointResponse {
  /**
   * @schema Route53ResolverDeleteResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * Converts an object of type 'Route53ResolverDeleteResolverEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteResolverEndpointResponse(obj: Route53ResolverDeleteResolverEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpoint': toJson_Route53ResolverResolverEndpoint(obj.resolverEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteResolverQueryLogConfigRequest
 */
export interface Route53ResolverDeleteResolverQueryLogConfigRequest {
  /**
   * @schema Route53ResolverDeleteResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId?: string;

}

/**
 * Converts an object of type 'Route53ResolverDeleteResolverQueryLogConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteResolverQueryLogConfigRequest(obj: Route53ResolverDeleteResolverQueryLogConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfigId': obj.resolverQueryLogConfigId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteResolverQueryLogConfigResponse
 */
export interface Route53ResolverDeleteResolverQueryLogConfigResponse {
  /**
   * @schema Route53ResolverDeleteResolverQueryLogConfigResponse#ResolverQueryLogConfig
   */
  readonly resolverQueryLogConfig?: Route53ResolverResolverQueryLogConfig;

}

/**
 * Converts an object of type 'Route53ResolverDeleteResolverQueryLogConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteResolverQueryLogConfigResponse(obj: Route53ResolverDeleteResolverQueryLogConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfig': toJson_Route53ResolverResolverQueryLogConfig(obj.resolverQueryLogConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteResolverRuleRequest
 */
export interface Route53ResolverDeleteResolverRuleRequest {
  /**
   * @schema Route53ResolverDeleteResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId?: string;

}

/**
 * Converts an object of type 'Route53ResolverDeleteResolverRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteResolverRuleRequest(obj: Route53ResolverDeleteResolverRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRuleId': obj.resolverRuleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDeleteResolverRuleResponse
 */
export interface Route53ResolverDeleteResolverRuleResponse {
  /**
   * @schema Route53ResolverDeleteResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: Route53ResolverResolverRule;

}

/**
 * Converts an object of type 'Route53ResolverDeleteResolverRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDeleteResolverRuleResponse(obj: Route53ResolverDeleteResolverRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRule': toJson_Route53ResolverResolverRule(obj.resolverRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDisassociateFirewallRuleGroupRequest
 */
export interface Route53ResolverDisassociateFirewallRuleGroupRequest {
  /**
   * @schema Route53ResolverDisassociateFirewallRuleGroupRequest#FirewallRuleGroupAssociationId
   */
  readonly firewallRuleGroupAssociationId?: string;

}

/**
 * Converts an object of type 'Route53ResolverDisassociateFirewallRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDisassociateFirewallRuleGroupRequest(obj: Route53ResolverDisassociateFirewallRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupAssociationId': obj.firewallRuleGroupAssociationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDisassociateFirewallRuleGroupResponse
 */
export interface Route53ResolverDisassociateFirewallRuleGroupResponse {
  /**
   * @schema Route53ResolverDisassociateFirewallRuleGroupResponse#FirewallRuleGroupAssociation
   */
  readonly firewallRuleGroupAssociation?: Route53ResolverFirewallRuleGroupAssociation;

}

/**
 * Converts an object of type 'Route53ResolverDisassociateFirewallRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDisassociateFirewallRuleGroupResponse(obj: Route53ResolverDisassociateFirewallRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupAssociation': toJson_Route53ResolverFirewallRuleGroupAssociation(obj.firewallRuleGroupAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDisassociateResolverEndpointIpAddressRequest
 */
export interface Route53ResolverDisassociateResolverEndpointIpAddressRequest {
  /**
   * @schema Route53ResolverDisassociateResolverEndpointIpAddressRequest#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

  /**
   * @schema Route53ResolverDisassociateResolverEndpointIpAddressRequest#IpAddress
   */
  readonly ipAddress?: Route53ResolverIpAddressUpdate;

}

/**
 * Converts an object of type 'Route53ResolverDisassociateResolverEndpointIpAddressRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDisassociateResolverEndpointIpAddressRequest(obj: Route53ResolverDisassociateResolverEndpointIpAddressRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpointId': obj.resolverEndpointId,
    'IpAddress': toJson_Route53ResolverIpAddressUpdate(obj.ipAddress),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDisassociateResolverEndpointIpAddressResponse
 */
export interface Route53ResolverDisassociateResolverEndpointIpAddressResponse {
  /**
   * @schema Route53ResolverDisassociateResolverEndpointIpAddressResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * Converts an object of type 'Route53ResolverDisassociateResolverEndpointIpAddressResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDisassociateResolverEndpointIpAddressResponse(obj: Route53ResolverDisassociateResolverEndpointIpAddressResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpoint': toJson_Route53ResolverResolverEndpoint(obj.resolverEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDisassociateResolverQueryLogConfigRequest
 */
export interface Route53ResolverDisassociateResolverQueryLogConfigRequest {
  /**
   * @schema Route53ResolverDisassociateResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId?: string;

  /**
   * @schema Route53ResolverDisassociateResolverQueryLogConfigRequest#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'Route53ResolverDisassociateResolverQueryLogConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDisassociateResolverQueryLogConfigRequest(obj: Route53ResolverDisassociateResolverQueryLogConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfigId': obj.resolverQueryLogConfigId,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDisassociateResolverQueryLogConfigResponse
 */
export interface Route53ResolverDisassociateResolverQueryLogConfigResponse {
  /**
   * @schema Route53ResolverDisassociateResolverQueryLogConfigResponse#ResolverQueryLogConfigAssociation
   */
  readonly resolverQueryLogConfigAssociation?: Route53ResolverResolverQueryLogConfigAssociation;

}

/**
 * Converts an object of type 'Route53ResolverDisassociateResolverQueryLogConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDisassociateResolverQueryLogConfigResponse(obj: Route53ResolverDisassociateResolverQueryLogConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfigAssociation': toJson_Route53ResolverResolverQueryLogConfigAssociation(obj.resolverQueryLogConfigAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDisassociateResolverRuleRequest
 */
export interface Route53ResolverDisassociateResolverRuleRequest {
  /**
   * @schema Route53ResolverDisassociateResolverRuleRequest#VPCId
   */
  readonly vpcId?: string;

  /**
   * @schema Route53ResolverDisassociateResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId?: string;

}

/**
 * Converts an object of type 'Route53ResolverDisassociateResolverRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDisassociateResolverRuleRequest(obj: Route53ResolverDisassociateResolverRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VPCId': obj.vpcId,
    'ResolverRuleId': obj.resolverRuleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverDisassociateResolverRuleResponse
 */
export interface Route53ResolverDisassociateResolverRuleResponse {
  /**
   * @schema Route53ResolverDisassociateResolverRuleResponse#ResolverRuleAssociation
   */
  readonly resolverRuleAssociation?: Route53ResolverResolverRuleAssociation;

}

/**
 * Converts an object of type 'Route53ResolverDisassociateResolverRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverDisassociateResolverRuleResponse(obj: Route53ResolverDisassociateResolverRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRuleAssociation': toJson_Route53ResolverResolverRuleAssociation(obj.resolverRuleAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetFirewallConfigRequest
 */
export interface Route53ResolverGetFirewallConfigRequest {
  /**
   * @schema Route53ResolverGetFirewallConfigRequest#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetFirewallConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetFirewallConfigRequest(obj: Route53ResolverGetFirewallConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetFirewallConfigResponse
 */
export interface Route53ResolverGetFirewallConfigResponse {
  /**
   * @schema Route53ResolverGetFirewallConfigResponse#FirewallConfig
   */
  readonly firewallConfig?: Route53ResolverFirewallConfig;

}

/**
 * Converts an object of type 'Route53ResolverGetFirewallConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetFirewallConfigResponse(obj: Route53ResolverGetFirewallConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallConfig': toJson_Route53ResolverFirewallConfig(obj.firewallConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetFirewallDomainListRequest
 */
export interface Route53ResolverGetFirewallDomainListRequest {
  /**
   * @schema Route53ResolverGetFirewallDomainListRequest#FirewallDomainListId
   */
  readonly firewallDomainListId?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetFirewallDomainListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetFirewallDomainListRequest(obj: Route53ResolverGetFirewallDomainListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallDomainListId': obj.firewallDomainListId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetFirewallDomainListResponse
 */
export interface Route53ResolverGetFirewallDomainListResponse {
  /**
   * @schema Route53ResolverGetFirewallDomainListResponse#FirewallDomainList
   */
  readonly firewallDomainList?: Route53ResolverFirewallDomainList;

}

/**
 * Converts an object of type 'Route53ResolverGetFirewallDomainListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetFirewallDomainListResponse(obj: Route53ResolverGetFirewallDomainListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallDomainList': toJson_Route53ResolverFirewallDomainList(obj.firewallDomainList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetFirewallRuleGroupRequest
 */
export interface Route53ResolverGetFirewallRuleGroupRequest {
  /**
   * @schema Route53ResolverGetFirewallRuleGroupRequest#FirewallRuleGroupId
   */
  readonly firewallRuleGroupId?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetFirewallRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetFirewallRuleGroupRequest(obj: Route53ResolverGetFirewallRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupId': obj.firewallRuleGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetFirewallRuleGroupResponse
 */
export interface Route53ResolverGetFirewallRuleGroupResponse {
  /**
   * @schema Route53ResolverGetFirewallRuleGroupResponse#FirewallRuleGroup
   */
  readonly firewallRuleGroup?: Route53ResolverFirewallRuleGroup;

}

/**
 * Converts an object of type 'Route53ResolverGetFirewallRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetFirewallRuleGroupResponse(obj: Route53ResolverGetFirewallRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroup': toJson_Route53ResolverFirewallRuleGroup(obj.firewallRuleGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetFirewallRuleGroupAssociationRequest
 */
export interface Route53ResolverGetFirewallRuleGroupAssociationRequest {
  /**
   * @schema Route53ResolverGetFirewallRuleGroupAssociationRequest#FirewallRuleGroupAssociationId
   */
  readonly firewallRuleGroupAssociationId?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetFirewallRuleGroupAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetFirewallRuleGroupAssociationRequest(obj: Route53ResolverGetFirewallRuleGroupAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupAssociationId': obj.firewallRuleGroupAssociationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetFirewallRuleGroupAssociationResponse
 */
export interface Route53ResolverGetFirewallRuleGroupAssociationResponse {
  /**
   * @schema Route53ResolverGetFirewallRuleGroupAssociationResponse#FirewallRuleGroupAssociation
   */
  readonly firewallRuleGroupAssociation?: Route53ResolverFirewallRuleGroupAssociation;

}

/**
 * Converts an object of type 'Route53ResolverGetFirewallRuleGroupAssociationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetFirewallRuleGroupAssociationResponse(obj: Route53ResolverGetFirewallRuleGroupAssociationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupAssociation': toJson_Route53ResolverFirewallRuleGroupAssociation(obj.firewallRuleGroupAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetFirewallRuleGroupPolicyRequest
 */
export interface Route53ResolverGetFirewallRuleGroupPolicyRequest {
  /**
   * @schema Route53ResolverGetFirewallRuleGroupPolicyRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetFirewallRuleGroupPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetFirewallRuleGroupPolicyRequest(obj: Route53ResolverGetFirewallRuleGroupPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetFirewallRuleGroupPolicyResponse
 */
export interface Route53ResolverGetFirewallRuleGroupPolicyResponse {
  /**
   * @schema Route53ResolverGetFirewallRuleGroupPolicyResponse#FirewallRuleGroupPolicy
   */
  readonly firewallRuleGroupPolicy?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetFirewallRuleGroupPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetFirewallRuleGroupPolicyResponse(obj: Route53ResolverGetFirewallRuleGroupPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupPolicy': obj.firewallRuleGroupPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverDnssecConfigRequest
 */
export interface Route53ResolverGetResolverDnssecConfigRequest {
  /**
   * @schema Route53ResolverGetResolverDnssecConfigRequest#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverDnssecConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverDnssecConfigRequest(obj: Route53ResolverGetResolverDnssecConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverDnssecConfigResponse
 */
export interface Route53ResolverGetResolverDnssecConfigResponse {
  /**
   * @schema Route53ResolverGetResolverDnssecConfigResponse#ResolverDNSSECConfig
   */
  readonly resolverDnssecConfig?: Route53ResolverResolverDnssecConfig;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverDnssecConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverDnssecConfigResponse(obj: Route53ResolverGetResolverDnssecConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverDNSSECConfig': toJson_Route53ResolverResolverDnssecConfig(obj.resolverDnssecConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverEndpointRequest
 */
export interface Route53ResolverGetResolverEndpointRequest {
  /**
   * @schema Route53ResolverGetResolverEndpointRequest#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverEndpointRequest(obj: Route53ResolverGetResolverEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpointId': obj.resolverEndpointId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverEndpointResponse
 */
export interface Route53ResolverGetResolverEndpointResponse {
  /**
   * @schema Route53ResolverGetResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverEndpointResponse(obj: Route53ResolverGetResolverEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpoint': toJson_Route53ResolverResolverEndpoint(obj.resolverEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverQueryLogConfigRequest
 */
export interface Route53ResolverGetResolverQueryLogConfigRequest {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverQueryLogConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverQueryLogConfigRequest(obj: Route53ResolverGetResolverQueryLogConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfigId': obj.resolverQueryLogConfigId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverQueryLogConfigResponse
 */
export interface Route53ResolverGetResolverQueryLogConfigResponse {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigResponse#ResolverQueryLogConfig
   */
  readonly resolverQueryLogConfig?: Route53ResolverResolverQueryLogConfig;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverQueryLogConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverQueryLogConfigResponse(obj: Route53ResolverGetResolverQueryLogConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfig': toJson_Route53ResolverResolverQueryLogConfig(obj.resolverQueryLogConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverQueryLogConfigAssociationRequest
 */
export interface Route53ResolverGetResolverQueryLogConfigAssociationRequest {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigAssociationRequest#ResolverQueryLogConfigAssociationId
   */
  readonly resolverQueryLogConfigAssociationId?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverQueryLogConfigAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverQueryLogConfigAssociationRequest(obj: Route53ResolverGetResolverQueryLogConfigAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfigAssociationId': obj.resolverQueryLogConfigAssociationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverQueryLogConfigAssociationResponse
 */
export interface Route53ResolverGetResolverQueryLogConfigAssociationResponse {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigAssociationResponse#ResolverQueryLogConfigAssociation
   */
  readonly resolverQueryLogConfigAssociation?: Route53ResolverResolverQueryLogConfigAssociation;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverQueryLogConfigAssociationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverQueryLogConfigAssociationResponse(obj: Route53ResolverGetResolverQueryLogConfigAssociationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfigAssociation': toJson_Route53ResolverResolverQueryLogConfigAssociation(obj.resolverQueryLogConfigAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverQueryLogConfigPolicyRequest
 */
export interface Route53ResolverGetResolverQueryLogConfigPolicyRequest {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigPolicyRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverQueryLogConfigPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverQueryLogConfigPolicyRequest(obj: Route53ResolverGetResolverQueryLogConfigPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverQueryLogConfigPolicyResponse
 */
export interface Route53ResolverGetResolverQueryLogConfigPolicyResponse {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigPolicyResponse#ResolverQueryLogConfigPolicy
   */
  readonly resolverQueryLogConfigPolicy?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverQueryLogConfigPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverQueryLogConfigPolicyResponse(obj: Route53ResolverGetResolverQueryLogConfigPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverQueryLogConfigPolicy': obj.resolverQueryLogConfigPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverRuleRequest
 */
export interface Route53ResolverGetResolverRuleRequest {
  /**
   * @schema Route53ResolverGetResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverRuleRequest(obj: Route53ResolverGetResolverRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRuleId': obj.resolverRuleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverRuleResponse
 */
export interface Route53ResolverGetResolverRuleResponse {
  /**
   * @schema Route53ResolverGetResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: Route53ResolverResolverRule;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverRuleResponse(obj: Route53ResolverGetResolverRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRule': toJson_Route53ResolverResolverRule(obj.resolverRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverRuleAssociationRequest
 */
export interface Route53ResolverGetResolverRuleAssociationRequest {
  /**
   * @schema Route53ResolverGetResolverRuleAssociationRequest#ResolverRuleAssociationId
   */
  readonly resolverRuleAssociationId?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverRuleAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverRuleAssociationRequest(obj: Route53ResolverGetResolverRuleAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRuleAssociationId': obj.resolverRuleAssociationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverRuleAssociationResponse
 */
export interface Route53ResolverGetResolverRuleAssociationResponse {
  /**
   * @schema Route53ResolverGetResolverRuleAssociationResponse#ResolverRuleAssociation
   */
  readonly resolverRuleAssociation?: Route53ResolverResolverRuleAssociation;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverRuleAssociationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverRuleAssociationResponse(obj: Route53ResolverGetResolverRuleAssociationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRuleAssociation': toJson_Route53ResolverResolverRuleAssociation(obj.resolverRuleAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverRulePolicyRequest
 */
export interface Route53ResolverGetResolverRulePolicyRequest {
  /**
   * @schema Route53ResolverGetResolverRulePolicyRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverRulePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverRulePolicyRequest(obj: Route53ResolverGetResolverRulePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverGetResolverRulePolicyResponse
 */
export interface Route53ResolverGetResolverRulePolicyResponse {
  /**
   * @schema Route53ResolverGetResolverRulePolicyResponse#ResolverRulePolicy
   */
  readonly resolverRulePolicy?: string;

}

/**
 * Converts an object of type 'Route53ResolverGetResolverRulePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverGetResolverRulePolicyResponse(obj: Route53ResolverGetResolverRulePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRulePolicy': obj.resolverRulePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverImportFirewallDomainsRequest
 */
export interface Route53ResolverImportFirewallDomainsRequest {
  /**
   * @schema Route53ResolverImportFirewallDomainsRequest#FirewallDomainListId
   */
  readonly firewallDomainListId?: string;

  /**
   * @schema Route53ResolverImportFirewallDomainsRequest#Operation
   */
  readonly operation?: string;

  /**
   * @schema Route53ResolverImportFirewallDomainsRequest#DomainFileUrl
   */
  readonly domainFileUrl?: string;

}

/**
 * Converts an object of type 'Route53ResolverImportFirewallDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverImportFirewallDomainsRequest(obj: Route53ResolverImportFirewallDomainsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallDomainListId': obj.firewallDomainListId,
    'Operation': obj.operation,
    'DomainFileUrl': obj.domainFileUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverImportFirewallDomainsResponse
 */
export interface Route53ResolverImportFirewallDomainsResponse {
  /**
   * @schema Route53ResolverImportFirewallDomainsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverImportFirewallDomainsResponse#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverImportFirewallDomainsResponse#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverImportFirewallDomainsResponse#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * Converts an object of type 'Route53ResolverImportFirewallDomainsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverImportFirewallDomainsResponse(obj: Route53ResolverImportFirewallDomainsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListFirewallConfigsRequest
 */
export interface Route53ResolverListFirewallConfigsRequest {
  /**
   * @schema Route53ResolverListFirewallConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListFirewallConfigsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ResolverListFirewallConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallConfigsRequest(obj: Route53ResolverListFirewallConfigsRequest | undefined): Record<string, any> | undefined {
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
 * @schema Route53ResolverListFirewallConfigsResponse
 */
export interface Route53ResolverListFirewallConfigsResponse {
  /**
   * @schema Route53ResolverListFirewallConfigsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListFirewallConfigsResponse#FirewallConfigs
   */
  readonly firewallConfigs?: Route53ResolverFirewallConfig[];

}

/**
 * Converts an object of type 'Route53ResolverListFirewallConfigsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallConfigsResponse(obj: Route53ResolverListFirewallConfigsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'FirewallConfigs': obj.firewallConfigs?.map(y => toJson_Route53ResolverFirewallConfig(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListFirewallDomainListsRequest
 */
export interface Route53ResolverListFirewallDomainListsRequest {
  /**
   * @schema Route53ResolverListFirewallDomainListsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListFirewallDomainListsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ResolverListFirewallDomainListsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallDomainListsRequest(obj: Route53ResolverListFirewallDomainListsRequest | undefined): Record<string, any> | undefined {
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
 * @schema Route53ResolverListFirewallDomainListsResponse
 */
export interface Route53ResolverListFirewallDomainListsResponse {
  /**
   * @schema Route53ResolverListFirewallDomainListsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListFirewallDomainListsResponse#FirewallDomainLists
   */
  readonly firewallDomainLists?: Route53ResolverFirewallDomainListMetadata[];

}

/**
 * Converts an object of type 'Route53ResolverListFirewallDomainListsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallDomainListsResponse(obj: Route53ResolverListFirewallDomainListsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'FirewallDomainLists': obj.firewallDomainLists?.map(y => toJson_Route53ResolverFirewallDomainListMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListFirewallDomainsRequest
 */
export interface Route53ResolverListFirewallDomainsRequest {
  /**
   * @schema Route53ResolverListFirewallDomainsRequest#FirewallDomainListId
   */
  readonly firewallDomainListId?: string;

  /**
   * @schema Route53ResolverListFirewallDomainsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListFirewallDomainsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ResolverListFirewallDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallDomainsRequest(obj: Route53ResolverListFirewallDomainsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallDomainListId': obj.firewallDomainListId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListFirewallDomainsResponse
 */
export interface Route53ResolverListFirewallDomainsResponse {
  /**
   * @schema Route53ResolverListFirewallDomainsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListFirewallDomainsResponse#Domains
   */
  readonly domains?: string[];

}

/**
 * Converts an object of type 'Route53ResolverListFirewallDomainsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallDomainsResponse(obj: Route53ResolverListFirewallDomainsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Domains': obj.domains?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListFirewallRuleGroupAssociationsRequest
 */
export interface Route53ResolverListFirewallRuleGroupAssociationsRequest {
  /**
   * @schema Route53ResolverListFirewallRuleGroupAssociationsRequest#FirewallRuleGroupId
   */
  readonly firewallRuleGroupId?: string;

  /**
   * @schema Route53ResolverListFirewallRuleGroupAssociationsRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Route53ResolverListFirewallRuleGroupAssociationsRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema Route53ResolverListFirewallRuleGroupAssociationsRequest#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverListFirewallRuleGroupAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListFirewallRuleGroupAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ResolverListFirewallRuleGroupAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallRuleGroupAssociationsRequest(obj: Route53ResolverListFirewallRuleGroupAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupId': obj.firewallRuleGroupId,
    'VpcId': obj.vpcId,
    'Priority': obj.priority,
    'Status': obj.status,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListFirewallRuleGroupAssociationsResponse
 */
export interface Route53ResolverListFirewallRuleGroupAssociationsResponse {
  /**
   * @schema Route53ResolverListFirewallRuleGroupAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListFirewallRuleGroupAssociationsResponse#FirewallRuleGroupAssociations
   */
  readonly firewallRuleGroupAssociations?: Route53ResolverFirewallRuleGroupAssociation[];

}

/**
 * Converts an object of type 'Route53ResolverListFirewallRuleGroupAssociationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallRuleGroupAssociationsResponse(obj: Route53ResolverListFirewallRuleGroupAssociationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'FirewallRuleGroupAssociations': obj.firewallRuleGroupAssociations?.map(y => toJson_Route53ResolverFirewallRuleGroupAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListFirewallRuleGroupsRequest
 */
export interface Route53ResolverListFirewallRuleGroupsRequest {
  /**
   * @schema Route53ResolverListFirewallRuleGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListFirewallRuleGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ResolverListFirewallRuleGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallRuleGroupsRequest(obj: Route53ResolverListFirewallRuleGroupsRequest | undefined): Record<string, any> | undefined {
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
 * @schema Route53ResolverListFirewallRuleGroupsResponse
 */
export interface Route53ResolverListFirewallRuleGroupsResponse {
  /**
   * @schema Route53ResolverListFirewallRuleGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListFirewallRuleGroupsResponse#FirewallRuleGroups
   */
  readonly firewallRuleGroups?: Route53ResolverFirewallRuleGroupMetadata[];

}

/**
 * Converts an object of type 'Route53ResolverListFirewallRuleGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallRuleGroupsResponse(obj: Route53ResolverListFirewallRuleGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'FirewallRuleGroups': obj.firewallRuleGroups?.map(y => toJson_Route53ResolverFirewallRuleGroupMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListFirewallRulesRequest
 */
export interface Route53ResolverListFirewallRulesRequest {
  /**
   * @schema Route53ResolverListFirewallRulesRequest#FirewallRuleGroupId
   */
  readonly firewallRuleGroupId?: string;

  /**
   * @schema Route53ResolverListFirewallRulesRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema Route53ResolverListFirewallRulesRequest#Action
   */
  readonly action?: string;

  /**
   * @schema Route53ResolverListFirewallRulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListFirewallRulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ResolverListFirewallRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallRulesRequest(obj: Route53ResolverListFirewallRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupId': obj.firewallRuleGroupId,
    'Priority': obj.priority,
    'Action': obj.action,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListFirewallRulesResponse
 */
export interface Route53ResolverListFirewallRulesResponse {
  /**
   * @schema Route53ResolverListFirewallRulesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListFirewallRulesResponse#FirewallRules
   */
  readonly firewallRules?: Route53ResolverFirewallRule[];

}

/**
 * Converts an object of type 'Route53ResolverListFirewallRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListFirewallRulesResponse(obj: Route53ResolverListFirewallRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'FirewallRules': obj.firewallRules?.map(y => toJson_Route53ResolverFirewallRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverDnssecConfigsRequest
 */
export interface Route53ResolverListResolverDnssecConfigsRequest {
  /**
   * @schema Route53ResolverListResolverDnssecConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverDnssecConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverDnssecConfigsRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverDnssecConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverDnssecConfigsRequest(obj: Route53ResolverListResolverDnssecConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_Route53ResolverFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverDnssecConfigsResponse
 */
export interface Route53ResolverListResolverDnssecConfigsResponse {
  /**
   * @schema Route53ResolverListResolverDnssecConfigsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverDnssecConfigsResponse#ResolverDnssecConfigs
   */
  readonly resolverDnssecConfigs?: Route53ResolverResolverDnssecConfig[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverDnssecConfigsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverDnssecConfigsResponse(obj: Route53ResolverListResolverDnssecConfigsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ResolverDnssecConfigs': obj.resolverDnssecConfigs?.map(y => toJson_Route53ResolverResolverDnssecConfig(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverEndpointIpAddressesRequest
 */
export interface Route53ResolverListResolverEndpointIpAddressesRequest {
  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesRequest#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ResolverListResolverEndpointIpAddressesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverEndpointIpAddressesRequest(obj: Route53ResolverListResolverEndpointIpAddressesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpointId': obj.resolverEndpointId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverEndpointIpAddressesResponse
 */
export interface Route53ResolverListResolverEndpointIpAddressesResponse {
  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesResponse#IpAddresses
   */
  readonly ipAddresses?: Route53ResolverIpAddressResponse[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverEndpointIpAddressesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverEndpointIpAddressesResponse(obj: Route53ResolverListResolverEndpointIpAddressesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'IpAddresses': obj.ipAddresses?.map(y => toJson_Route53ResolverIpAddressResponse(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverEndpointsRequest
 */
export interface Route53ResolverListResolverEndpointsRequest {
  /**
   * @schema Route53ResolverListResolverEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverEndpointsRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverEndpointsRequest(obj: Route53ResolverListResolverEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_Route53ResolverFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverEndpointsResponse
 */
export interface Route53ResolverListResolverEndpointsResponse {
  /**
   * @schema Route53ResolverListResolverEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverEndpointsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverEndpointsResponse#ResolverEndpoints
   */
  readonly resolverEndpoints?: Route53ResolverResolverEndpoint[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverEndpointsResponse(obj: Route53ResolverListResolverEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ResolverEndpoints': obj.resolverEndpoints?.map(y => toJson_Route53ResolverResolverEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest
 */
export interface Route53ResolverListResolverQueryLogConfigAssociationsRequest {
  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * Converts an object of type 'Route53ResolverListResolverQueryLogConfigAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverQueryLogConfigAssociationsRequest(obj: Route53ResolverListResolverQueryLogConfigAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_Route53ResolverFilter(y)),
    'SortBy': obj.sortBy,
    'SortOrder': obj.sortOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverQueryLogConfigAssociationsResponse
 */
export interface Route53ResolverListResolverQueryLogConfigAssociationsResponse {
  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsResponse#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsResponse#TotalFilteredCount
   */
  readonly totalFilteredCount?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsResponse#ResolverQueryLogConfigAssociations
   */
  readonly resolverQueryLogConfigAssociations?: Route53ResolverResolverQueryLogConfigAssociation[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverQueryLogConfigAssociationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverQueryLogConfigAssociationsResponse(obj: Route53ResolverListResolverQueryLogConfigAssociationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'TotalCount': obj.totalCount,
    'TotalFilteredCount': obj.totalFilteredCount,
    'ResolverQueryLogConfigAssociations': obj.resolverQueryLogConfigAssociations?.map(y => toJson_Route53ResolverResolverQueryLogConfigAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverQueryLogConfigsRequest
 */
export interface Route53ResolverListResolverQueryLogConfigsRequest {
  /**
   * @schema Route53ResolverListResolverQueryLogConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * Converts an object of type 'Route53ResolverListResolverQueryLogConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverQueryLogConfigsRequest(obj: Route53ResolverListResolverQueryLogConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_Route53ResolverFilter(y)),
    'SortBy': obj.sortBy,
    'SortOrder': obj.sortOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverQueryLogConfigsResponse
 */
export interface Route53ResolverListResolverQueryLogConfigsResponse {
  /**
   * @schema Route53ResolverListResolverQueryLogConfigsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsResponse#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsResponse#TotalFilteredCount
   */
  readonly totalFilteredCount?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsResponse#ResolverQueryLogConfigs
   */
  readonly resolverQueryLogConfigs?: Route53ResolverResolverQueryLogConfig[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverQueryLogConfigsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverQueryLogConfigsResponse(obj: Route53ResolverListResolverQueryLogConfigsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'TotalCount': obj.totalCount,
    'TotalFilteredCount': obj.totalFilteredCount,
    'ResolverQueryLogConfigs': obj.resolverQueryLogConfigs?.map(y => toJson_Route53ResolverResolverQueryLogConfig(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverRuleAssociationsRequest
 */
export interface Route53ResolverListResolverRuleAssociationsRequest {
  /**
   * @schema Route53ResolverListResolverRuleAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverRuleAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverRuleAssociationsRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverRuleAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverRuleAssociationsRequest(obj: Route53ResolverListResolverRuleAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_Route53ResolverFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverRuleAssociationsResponse
 */
export interface Route53ResolverListResolverRuleAssociationsResponse {
  /**
   * @schema Route53ResolverListResolverRuleAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverRuleAssociationsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverRuleAssociationsResponse#ResolverRuleAssociations
   */
  readonly resolverRuleAssociations?: Route53ResolverResolverRuleAssociation[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverRuleAssociationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverRuleAssociationsResponse(obj: Route53ResolverListResolverRuleAssociationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ResolverRuleAssociations': obj.resolverRuleAssociations?.map(y => toJson_Route53ResolverResolverRuleAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverRulesRequest
 */
export interface Route53ResolverListResolverRulesRequest {
  /**
   * @schema Route53ResolverListResolverRulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverRulesRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverRulesRequest(obj: Route53ResolverListResolverRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_Route53ResolverFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListResolverRulesResponse
 */
export interface Route53ResolverListResolverRulesResponse {
  /**
   * @schema Route53ResolverListResolverRulesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverRulesResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverRulesResponse#ResolverRules
   */
  readonly resolverRules?: Route53ResolverResolverRule[];

}

/**
 * Converts an object of type 'Route53ResolverListResolverRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListResolverRulesResponse(obj: Route53ResolverListResolverRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ResolverRules': obj.resolverRules?.map(y => toJson_Route53ResolverResolverRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListTagsForResourceRequest
 */
export interface Route53ResolverListTagsForResourceRequest {
  /**
   * @schema Route53ResolverListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Route53ResolverListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ResolverListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListTagsForResourceRequest(obj: Route53ResolverListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverListTagsForResourceResponse
 */
export interface Route53ResolverListTagsForResourceResponse {
  /**
   * @schema Route53ResolverListTagsForResourceResponse#Tags
   */
  readonly tags?: Route53ResolverTag[];

  /**
   * @schema Route53ResolverListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ResolverListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverListTagsForResourceResponse(obj: Route53ResolverListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_Route53ResolverTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverPutFirewallRuleGroupPolicyRequest
 */
export interface Route53ResolverPutFirewallRuleGroupPolicyRequest {
  /**
   * @schema Route53ResolverPutFirewallRuleGroupPolicyRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverPutFirewallRuleGroupPolicyRequest#FirewallRuleGroupPolicy
   */
  readonly firewallRuleGroupPolicy?: string;

}

/**
 * Converts an object of type 'Route53ResolverPutFirewallRuleGroupPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverPutFirewallRuleGroupPolicyRequest(obj: Route53ResolverPutFirewallRuleGroupPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'FirewallRuleGroupPolicy': obj.firewallRuleGroupPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverPutFirewallRuleGroupPolicyResponse
 */
export interface Route53ResolverPutFirewallRuleGroupPolicyResponse {
  /**
   * @schema Route53ResolverPutFirewallRuleGroupPolicyResponse#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * Converts an object of type 'Route53ResolverPutFirewallRuleGroupPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverPutFirewallRuleGroupPolicyResponse(obj: Route53ResolverPutFirewallRuleGroupPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReturnValue': obj.returnValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverPutResolverQueryLogConfigPolicyRequest
 */
export interface Route53ResolverPutResolverQueryLogConfigPolicyRequest {
  /**
   * @schema Route53ResolverPutResolverQueryLogConfigPolicyRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverPutResolverQueryLogConfigPolicyRequest#ResolverQueryLogConfigPolicy
   */
  readonly resolverQueryLogConfigPolicy?: string;

}

/**
 * Converts an object of type 'Route53ResolverPutResolverQueryLogConfigPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverPutResolverQueryLogConfigPolicyRequest(obj: Route53ResolverPutResolverQueryLogConfigPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ResolverQueryLogConfigPolicy': obj.resolverQueryLogConfigPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverPutResolverQueryLogConfigPolicyResponse
 */
export interface Route53ResolverPutResolverQueryLogConfigPolicyResponse {
  /**
   * @schema Route53ResolverPutResolverQueryLogConfigPolicyResponse#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * Converts an object of type 'Route53ResolverPutResolverQueryLogConfigPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverPutResolverQueryLogConfigPolicyResponse(obj: Route53ResolverPutResolverQueryLogConfigPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReturnValue': obj.returnValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverPutResolverRulePolicyRequest
 */
export interface Route53ResolverPutResolverRulePolicyRequest {
  /**
   * @schema Route53ResolverPutResolverRulePolicyRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverPutResolverRulePolicyRequest#ResolverRulePolicy
   */
  readonly resolverRulePolicy?: string;

}

/**
 * Converts an object of type 'Route53ResolverPutResolverRulePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverPutResolverRulePolicyRequest(obj: Route53ResolverPutResolverRulePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ResolverRulePolicy': obj.resolverRulePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverPutResolverRulePolicyResponse
 */
export interface Route53ResolverPutResolverRulePolicyResponse {
  /**
   * @schema Route53ResolverPutResolverRulePolicyResponse#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * Converts an object of type 'Route53ResolverPutResolverRulePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverPutResolverRulePolicyResponse(obj: Route53ResolverPutResolverRulePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReturnValue': obj.returnValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverTagResourceRequest
 */
export interface Route53ResolverTagResourceRequest {
  /**
   * @schema Route53ResolverTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Route53ResolverTagResourceRequest#Tags
   */
  readonly tags?: Route53ResolverTag[];

}

/**
 * Converts an object of type 'Route53ResolverTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverTagResourceRequest(obj: Route53ResolverTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_Route53ResolverTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverTagResourceResponse
 */
export interface Route53ResolverTagResourceResponse {
}

/**
 * Converts an object of type 'Route53ResolverTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverTagResourceResponse(obj: Route53ResolverTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUntagResourceRequest
 */
export interface Route53ResolverUntagResourceRequest {
  /**
   * @schema Route53ResolverUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Route53ResolverUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'Route53ResolverUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUntagResourceRequest(obj: Route53ResolverUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema Route53ResolverUntagResourceResponse
 */
export interface Route53ResolverUntagResourceResponse {
}

/**
 * Converts an object of type 'Route53ResolverUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUntagResourceResponse(obj: Route53ResolverUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateFirewallConfigRequest
 */
export interface Route53ResolverUpdateFirewallConfigRequest {
  /**
   * @schema Route53ResolverUpdateFirewallConfigRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Route53ResolverUpdateFirewallConfigRequest#FirewallFailOpen
   */
  readonly firewallFailOpen?: string;

}

/**
 * Converts an object of type 'Route53ResolverUpdateFirewallConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateFirewallConfigRequest(obj: Route53ResolverUpdateFirewallConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'FirewallFailOpen': obj.firewallFailOpen,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateFirewallConfigResponse
 */
export interface Route53ResolverUpdateFirewallConfigResponse {
  /**
   * @schema Route53ResolverUpdateFirewallConfigResponse#FirewallConfig
   */
  readonly firewallConfig?: Route53ResolverFirewallConfig;

}

/**
 * Converts an object of type 'Route53ResolverUpdateFirewallConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateFirewallConfigResponse(obj: Route53ResolverUpdateFirewallConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallConfig': toJson_Route53ResolverFirewallConfig(obj.firewallConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateFirewallDomainsRequest
 */
export interface Route53ResolverUpdateFirewallDomainsRequest {
  /**
   * @schema Route53ResolverUpdateFirewallDomainsRequest#FirewallDomainListId
   */
  readonly firewallDomainListId?: string;

  /**
   * @schema Route53ResolverUpdateFirewallDomainsRequest#Operation
   */
  readonly operation?: string;

  /**
   * @schema Route53ResolverUpdateFirewallDomainsRequest#Domains
   */
  readonly domains?: string[];

}

/**
 * Converts an object of type 'Route53ResolverUpdateFirewallDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateFirewallDomainsRequest(obj: Route53ResolverUpdateFirewallDomainsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallDomainListId': obj.firewallDomainListId,
    'Operation': obj.operation,
    'Domains': obj.domains?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateFirewallDomainsResponse
 */
export interface Route53ResolverUpdateFirewallDomainsResponse {
  /**
   * @schema Route53ResolverUpdateFirewallDomainsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverUpdateFirewallDomainsResponse#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverUpdateFirewallDomainsResponse#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverUpdateFirewallDomainsResponse#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * Converts an object of type 'Route53ResolverUpdateFirewallDomainsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateFirewallDomainsResponse(obj: Route53ResolverUpdateFirewallDomainsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateFirewallRuleRequest
 */
export interface Route53ResolverUpdateFirewallRuleRequest {
  /**
   * @schema Route53ResolverUpdateFirewallRuleRequest#FirewallRuleGroupId
   */
  readonly firewallRuleGroupId?: string;

  /**
   * @schema Route53ResolverUpdateFirewallRuleRequest#FirewallDomainListId
   */
  readonly firewallDomainListId?: string;

  /**
   * @schema Route53ResolverUpdateFirewallRuleRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema Route53ResolverUpdateFirewallRuleRequest#Action
   */
  readonly action?: string;

  /**
   * @schema Route53ResolverUpdateFirewallRuleRequest#BlockResponse
   */
  readonly blockResponse?: string;

  /**
   * @schema Route53ResolverUpdateFirewallRuleRequest#BlockOverrideDomain
   */
  readonly blockOverrideDomain?: string;

  /**
   * @schema Route53ResolverUpdateFirewallRuleRequest#BlockOverrideDnsType
   */
  readonly blockOverrideDnsType?: string;

  /**
   * @schema Route53ResolverUpdateFirewallRuleRequest#BlockOverrideTtl
   */
  readonly blockOverrideTtl?: number;

  /**
   * @schema Route53ResolverUpdateFirewallRuleRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Route53ResolverUpdateFirewallRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateFirewallRuleRequest(obj: Route53ResolverUpdateFirewallRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupId': obj.firewallRuleGroupId,
    'FirewallDomainListId': obj.firewallDomainListId,
    'Priority': obj.priority,
    'Action': obj.action,
    'BlockResponse': obj.blockResponse,
    'BlockOverrideDomain': obj.blockOverrideDomain,
    'BlockOverrideDnsType': obj.blockOverrideDnsType,
    'BlockOverrideTtl': obj.blockOverrideTtl,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateFirewallRuleResponse
 */
export interface Route53ResolverUpdateFirewallRuleResponse {
  /**
   * @schema Route53ResolverUpdateFirewallRuleResponse#FirewallRule
   */
  readonly firewallRule?: Route53ResolverFirewallRule;

}

/**
 * Converts an object of type 'Route53ResolverUpdateFirewallRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateFirewallRuleResponse(obj: Route53ResolverUpdateFirewallRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRule': toJson_Route53ResolverFirewallRule(obj.firewallRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateFirewallRuleGroupAssociationRequest
 */
export interface Route53ResolverUpdateFirewallRuleGroupAssociationRequest {
  /**
   * @schema Route53ResolverUpdateFirewallRuleGroupAssociationRequest#FirewallRuleGroupAssociationId
   */
  readonly firewallRuleGroupAssociationId?: string;

  /**
   * @schema Route53ResolverUpdateFirewallRuleGroupAssociationRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema Route53ResolverUpdateFirewallRuleGroupAssociationRequest#MutationProtection
   */
  readonly mutationProtection?: string;

  /**
   * @schema Route53ResolverUpdateFirewallRuleGroupAssociationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Route53ResolverUpdateFirewallRuleGroupAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateFirewallRuleGroupAssociationRequest(obj: Route53ResolverUpdateFirewallRuleGroupAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupAssociationId': obj.firewallRuleGroupAssociationId,
    'Priority': obj.priority,
    'MutationProtection': obj.mutationProtection,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateFirewallRuleGroupAssociationResponse
 */
export interface Route53ResolverUpdateFirewallRuleGroupAssociationResponse {
  /**
   * @schema Route53ResolverUpdateFirewallRuleGroupAssociationResponse#FirewallRuleGroupAssociation
   */
  readonly firewallRuleGroupAssociation?: Route53ResolverFirewallRuleGroupAssociation;

}

/**
 * Converts an object of type 'Route53ResolverUpdateFirewallRuleGroupAssociationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateFirewallRuleGroupAssociationResponse(obj: Route53ResolverUpdateFirewallRuleGroupAssociationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupAssociation': toJson_Route53ResolverFirewallRuleGroupAssociation(obj.firewallRuleGroupAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateResolverDnssecConfigRequest
 */
export interface Route53ResolverUpdateResolverDnssecConfigRequest {
  /**
   * @schema Route53ResolverUpdateResolverDnssecConfigRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Route53ResolverUpdateResolverDnssecConfigRequest#Validation
   */
  readonly validation?: string;

}

/**
 * Converts an object of type 'Route53ResolverUpdateResolverDnssecConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateResolverDnssecConfigRequest(obj: Route53ResolverUpdateResolverDnssecConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'Validation': obj.validation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateResolverDnssecConfigResponse
 */
export interface Route53ResolverUpdateResolverDnssecConfigResponse {
  /**
   * @schema Route53ResolverUpdateResolverDnssecConfigResponse#ResolverDNSSECConfig
   */
  readonly resolverDnssecConfig?: Route53ResolverResolverDnssecConfig;

}

/**
 * Converts an object of type 'Route53ResolverUpdateResolverDnssecConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateResolverDnssecConfigResponse(obj: Route53ResolverUpdateResolverDnssecConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverDNSSECConfig': toJson_Route53ResolverResolverDnssecConfig(obj.resolverDnssecConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateResolverEndpointRequest
 */
export interface Route53ResolverUpdateResolverEndpointRequest {
  /**
   * @schema Route53ResolverUpdateResolverEndpointRequest#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

  /**
   * @schema Route53ResolverUpdateResolverEndpointRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Route53ResolverUpdateResolverEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateResolverEndpointRequest(obj: Route53ResolverUpdateResolverEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpointId': obj.resolverEndpointId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateResolverEndpointResponse
 */
export interface Route53ResolverUpdateResolverEndpointResponse {
  /**
   * @schema Route53ResolverUpdateResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * Converts an object of type 'Route53ResolverUpdateResolverEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateResolverEndpointResponse(obj: Route53ResolverUpdateResolverEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverEndpoint': toJson_Route53ResolverResolverEndpoint(obj.resolverEndpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateResolverRuleRequest
 */
export interface Route53ResolverUpdateResolverRuleRequest {
  /**
   * @schema Route53ResolverUpdateResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId?: string;

  /**
   * @schema Route53ResolverUpdateResolverRuleRequest#Config
   */
  readonly config?: Route53ResolverResolverRuleConfig;

}

/**
 * Converts an object of type 'Route53ResolverUpdateResolverRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateResolverRuleRequest(obj: Route53ResolverUpdateResolverRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRuleId': obj.resolverRuleId,
    'Config': toJson_Route53ResolverResolverRuleConfig(obj.config),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverUpdateResolverRuleResponse
 */
export interface Route53ResolverUpdateResolverRuleResponse {
  /**
   * @schema Route53ResolverUpdateResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: Route53ResolverResolverRule;

}

/**
 * Converts an object of type 'Route53ResolverUpdateResolverRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverUpdateResolverRuleResponse(obj: Route53ResolverUpdateResolverRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolverRule': toJson_Route53ResolverResolverRule(obj.resolverRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverTag
 */
export interface Route53ResolverTag {
  /**
   * @schema Route53ResolverTag#Key
   */
  readonly key?: string;

  /**
   * @schema Route53ResolverTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Route53ResolverTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverTag(obj: Route53ResolverTag | undefined): Record<string, any> | undefined {
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
 * @schema Route53ResolverFirewallRuleGroupAssociation
 */
export interface Route53ResolverFirewallRuleGroupAssociation {
  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#FirewallRuleGroupId
   */
  readonly firewallRuleGroupId?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#Priority
   */
  readonly priority?: number;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#MutationProtection
   */
  readonly mutationProtection?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#ManagedOwnerName
   */
  readonly managedOwnerName?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupAssociation#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * Converts an object of type 'Route53ResolverFirewallRuleGroupAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverFirewallRuleGroupAssociation(obj: Route53ResolverFirewallRuleGroupAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'FirewallRuleGroupId': obj.firewallRuleGroupId,
    'VpcId': obj.vpcId,
    'Name': obj.name,
    'Priority': obj.priority,
    'MutationProtection': obj.mutationProtection,
    'ManagedOwnerName': obj.managedOwnerName,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'CreatorRequestId': obj.creatorRequestId,
    'CreationTime': obj.creationTime,
    'ModificationTime': obj.modificationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverIpAddressUpdate
 */
export interface Route53ResolverIpAddressUpdate {
  /**
   * @schema Route53ResolverIpAddressUpdate#IpId
   */
  readonly ipId?: string;

  /**
   * @schema Route53ResolverIpAddressUpdate#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Route53ResolverIpAddressUpdate#Ip
   */
  readonly ip?: string;

}

/**
 * Converts an object of type 'Route53ResolverIpAddressUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverIpAddressUpdate(obj: Route53ResolverIpAddressUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpId': obj.ipId,
    'SubnetId': obj.subnetId,
    'Ip': obj.ip,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverResolverEndpoint
 */
export interface Route53ResolverResolverEndpoint {
  /**
   * @schema Route53ResolverResolverEndpoint#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Route53ResolverResolverEndpoint#Direction
   */
  readonly direction?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#IpAddressCount
   */
  readonly ipAddressCount?: number;

  /**
   * @schema Route53ResolverResolverEndpoint#HostVPCId
   */
  readonly hostVpcId?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * Converts an object of type 'Route53ResolverResolverEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverResolverEndpoint(obj: Route53ResolverResolverEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'CreatorRequestId': obj.creatorRequestId,
    'Arn': obj.arn,
    'Name': obj.name,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'Direction': obj.direction,
    'IpAddressCount': obj.ipAddressCount,
    'HostVPCId': obj.hostVpcId,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'CreationTime': obj.creationTime,
    'ModificationTime': obj.modificationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverResolverQueryLogConfigAssociation
 */
export interface Route53ResolverResolverQueryLogConfigAssociation {
  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#Error
   */
  readonly error?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'Route53ResolverResolverQueryLogConfigAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverResolverQueryLogConfigAssociation(obj: Route53ResolverResolverQueryLogConfigAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ResolverQueryLogConfigId': obj.resolverQueryLogConfigId,
    'ResourceId': obj.resourceId,
    'Status': obj.status,
    'Error': obj.error,
    'ErrorMessage': obj.errorMessage,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverResolverRuleAssociation
 */
export interface Route53ResolverResolverRuleAssociation {
  /**
   * @schema Route53ResolverResolverRuleAssociation#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverRuleAssociation#ResolverRuleId
   */
  readonly resolverRuleId?: string;

  /**
   * @schema Route53ResolverResolverRuleAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverResolverRuleAssociation#VPCId
   */
  readonly vpcId?: string;

  /**
   * @schema Route53ResolverResolverRuleAssociation#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverResolverRuleAssociation#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * Converts an object of type 'Route53ResolverResolverRuleAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverResolverRuleAssociation(obj: Route53ResolverResolverRuleAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ResolverRuleId': obj.resolverRuleId,
    'Name': obj.name,
    'VPCId': obj.vpcId,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverFirewallDomainList
 */
export interface Route53ResolverFirewallDomainList {
  /**
   * @schema Route53ResolverFirewallDomainList#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverFirewallDomainList#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverFirewallDomainList#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverFirewallDomainList#DomainCount
   */
  readonly domainCount?: number;

  /**
   * @schema Route53ResolverFirewallDomainList#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverFirewallDomainList#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Route53ResolverFirewallDomainList#ManagedOwnerName
   */
  readonly managedOwnerName?: string;

  /**
   * @schema Route53ResolverFirewallDomainList#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverFirewallDomainList#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Route53ResolverFirewallDomainList#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * Converts an object of type 'Route53ResolverFirewallDomainList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverFirewallDomainList(obj: Route53ResolverFirewallDomainList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'DomainCount': obj.domainCount,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'ManagedOwnerName': obj.managedOwnerName,
    'CreatorRequestId': obj.creatorRequestId,
    'CreationTime': obj.creationTime,
    'ModificationTime': obj.modificationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverFirewallRule
 */
export interface Route53ResolverFirewallRule {
  /**
   * @schema Route53ResolverFirewallRule#FirewallRuleGroupId
   */
  readonly firewallRuleGroupId?: string;

  /**
   * @schema Route53ResolverFirewallRule#FirewallDomainListId
   */
  readonly firewallDomainListId?: string;

  /**
   * @schema Route53ResolverFirewallRule#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverFirewallRule#Priority
   */
  readonly priority?: number;

  /**
   * @schema Route53ResolverFirewallRule#Action
   */
  readonly action?: string;

  /**
   * @schema Route53ResolverFirewallRule#BlockResponse
   */
  readonly blockResponse?: string;

  /**
   * @schema Route53ResolverFirewallRule#BlockOverrideDomain
   */
  readonly blockOverrideDomain?: string;

  /**
   * @schema Route53ResolverFirewallRule#BlockOverrideDnsType
   */
  readonly blockOverrideDnsType?: string;

  /**
   * @schema Route53ResolverFirewallRule#BlockOverrideTtl
   */
  readonly blockOverrideTtl?: number;

  /**
   * @schema Route53ResolverFirewallRule#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverFirewallRule#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Route53ResolverFirewallRule#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * Converts an object of type 'Route53ResolverFirewallRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverFirewallRule(obj: Route53ResolverFirewallRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallRuleGroupId': obj.firewallRuleGroupId,
    'FirewallDomainListId': obj.firewallDomainListId,
    'Name': obj.name,
    'Priority': obj.priority,
    'Action': obj.action,
    'BlockResponse': obj.blockResponse,
    'BlockOverrideDomain': obj.blockOverrideDomain,
    'BlockOverrideDnsType': obj.blockOverrideDnsType,
    'BlockOverrideTtl': obj.blockOverrideTtl,
    'CreatorRequestId': obj.creatorRequestId,
    'CreationTime': obj.creationTime,
    'ModificationTime': obj.modificationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverFirewallRuleGroup
 */
export interface Route53ResolverFirewallRuleGroup {
  /**
   * @schema Route53ResolverFirewallRuleGroup#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroup#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroup#RuleCount
   */
  readonly ruleCount?: number;

  /**
   * @schema Route53ResolverFirewallRuleGroup#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroup#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroup#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroup#ShareStatus
   */
  readonly shareStatus?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroup#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroup#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * Converts an object of type 'Route53ResolverFirewallRuleGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverFirewallRuleGroup(obj: Route53ResolverFirewallRuleGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'RuleCount': obj.ruleCount,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'OwnerId': obj.ownerId,
    'CreatorRequestId': obj.creatorRequestId,
    'ShareStatus': obj.shareStatus,
    'CreationTime': obj.creationTime,
    'ModificationTime': obj.modificationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverIpAddressRequest
 */
export interface Route53ResolverIpAddressRequest {
  /**
   * @schema Route53ResolverIpAddressRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Route53ResolverIpAddressRequest#Ip
   */
  readonly ip?: string;

}

/**
 * Converts an object of type 'Route53ResolverIpAddressRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverIpAddressRequest(obj: Route53ResolverIpAddressRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetId': obj.subnetId,
    'Ip': obj.ip,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverResolverQueryLogConfig
 */
export interface Route53ResolverResolverQueryLogConfig {
  /**
   * @schema Route53ResolverResolverQueryLogConfig#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#ShareStatus
   */
  readonly shareStatus?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#AssociationCount
   */
  readonly associationCount?: number;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#DestinationArn
   */
  readonly destinationArn?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'Route53ResolverResolverQueryLogConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverResolverQueryLogConfig(obj: Route53ResolverResolverQueryLogConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'OwnerId': obj.ownerId,
    'Status': obj.status,
    'ShareStatus': obj.shareStatus,
    'AssociationCount': obj.associationCount,
    'Arn': obj.arn,
    'Name': obj.name,
    'DestinationArn': obj.destinationArn,
    'CreatorRequestId': obj.creatorRequestId,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverTargetAddress
 */
export interface Route53ResolverTargetAddress {
  /**
   * @schema Route53ResolverTargetAddress#Ip
   */
  readonly ip?: string;

  /**
   * @schema Route53ResolverTargetAddress#Port
   */
  readonly port?: number;

}

/**
 * Converts an object of type 'Route53ResolverTargetAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverTargetAddress(obj: Route53ResolverTargetAddress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ip': obj.ip,
    'Port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverResolverRule
 */
export interface Route53ResolverResolverRule {
  /**
   * @schema Route53ResolverResolverRule#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverRule#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverResolverRule#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverResolverRule#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53ResolverResolverRule#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverResolverRule#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Route53ResolverResolverRule#RuleType
   */
  readonly ruleType?: string;

  /**
   * @schema Route53ResolverResolverRule#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverResolverRule#TargetIps
   */
  readonly targetIps?: Route53ResolverTargetAddress[];

  /**
   * @schema Route53ResolverResolverRule#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

  /**
   * @schema Route53ResolverResolverRule#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Route53ResolverResolverRule#ShareStatus
   */
  readonly shareStatus?: string;

  /**
   * @schema Route53ResolverResolverRule#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Route53ResolverResolverRule#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * Converts an object of type 'Route53ResolverResolverRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverResolverRule(obj: Route53ResolverResolverRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'CreatorRequestId': obj.creatorRequestId,
    'Arn': obj.arn,
    'DomainName': obj.domainName,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'RuleType': obj.ruleType,
    'Name': obj.name,
    'TargetIps': obj.targetIps?.map(y => toJson_Route53ResolverTargetAddress(y)),
    'ResolverEndpointId': obj.resolverEndpointId,
    'OwnerId': obj.ownerId,
    'ShareStatus': obj.shareStatus,
    'CreationTime': obj.creationTime,
    'ModificationTime': obj.modificationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverFirewallConfig
 */
export interface Route53ResolverFirewallConfig {
  /**
   * @schema Route53ResolverFirewallConfig#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverFirewallConfig#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Route53ResolverFirewallConfig#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Route53ResolverFirewallConfig#FirewallFailOpen
   */
  readonly firewallFailOpen?: string;

}

/**
 * Converts an object of type 'Route53ResolverFirewallConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverFirewallConfig(obj: Route53ResolverFirewallConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ResourceId': obj.resourceId,
    'OwnerId': obj.ownerId,
    'FirewallFailOpen': obj.firewallFailOpen,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverResolverDnssecConfig
 */
export interface Route53ResolverResolverDnssecConfig {
  /**
   * @schema Route53ResolverResolverDnssecConfig#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverDnssecConfig#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Route53ResolverResolverDnssecConfig#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Route53ResolverResolverDnssecConfig#ValidationStatus
   */
  readonly validationStatus?: string;

}

/**
 * Converts an object of type 'Route53ResolverResolverDnssecConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverResolverDnssecConfig(obj: Route53ResolverResolverDnssecConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'OwnerId': obj.ownerId,
    'ResourceId': obj.resourceId,
    'ValidationStatus': obj.validationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverFirewallDomainListMetadata
 */
export interface Route53ResolverFirewallDomainListMetadata {
  /**
   * @schema Route53ResolverFirewallDomainListMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverFirewallDomainListMetadata#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverFirewallDomainListMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverFirewallDomainListMetadata#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverFirewallDomainListMetadata#ManagedOwnerName
   */
  readonly managedOwnerName?: string;

}

/**
 * Converts an object of type 'Route53ResolverFirewallDomainListMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverFirewallDomainListMetadata(obj: Route53ResolverFirewallDomainListMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'CreatorRequestId': obj.creatorRequestId,
    'ManagedOwnerName': obj.managedOwnerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverFirewallRuleGroupMetadata
 */
export interface Route53ResolverFirewallRuleGroupMetadata {
  /**
   * @schema Route53ResolverFirewallRuleGroupMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupMetadata#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupMetadata#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupMetadata#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverFirewallRuleGroupMetadata#ShareStatus
   */
  readonly shareStatus?: string;

}

/**
 * Converts an object of type 'Route53ResolverFirewallRuleGroupMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverFirewallRuleGroupMetadata(obj: Route53ResolverFirewallRuleGroupMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'OwnerId': obj.ownerId,
    'CreatorRequestId': obj.creatorRequestId,
    'ShareStatus': obj.shareStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverFilter
 */
export interface Route53ResolverFilter {
  /**
   * @schema Route53ResolverFilter#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'Route53ResolverFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverFilter(obj: Route53ResolverFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverIpAddressResponse
 */
export interface Route53ResolverIpAddressResponse {
  /**
   * @schema Route53ResolverIpAddressResponse#IpId
   */
  readonly ipId?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#Ip
   */
  readonly ip?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * Converts an object of type 'Route53ResolverIpAddressResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverIpAddressResponse(obj: Route53ResolverIpAddressResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpId': obj.ipId,
    'SubnetId': obj.subnetId,
    'Ip': obj.ip,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'CreationTime': obj.creationTime,
    'ModificationTime': obj.modificationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResolverResolverRuleConfig
 */
export interface Route53ResolverResolverRuleConfig {
  /**
   * @schema Route53ResolverResolverRuleConfig#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverResolverRuleConfig#TargetIps
   */
  readonly targetIps?: Route53ResolverTargetAddress[];

  /**
   * @schema Route53ResolverResolverRuleConfig#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

}

/**
 * Converts an object of type 'Route53ResolverResolverRuleConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResolverResolverRuleConfig(obj: Route53ResolverResolverRuleConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'TargetIps': obj.targetIps?.map(y => toJson_Route53ResolverTargetAddress(y)),
    'ResolverEndpointId': obj.resolverEndpointId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
