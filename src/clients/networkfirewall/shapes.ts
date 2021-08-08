/**
 * @schema NetworkFirewallAssociateFirewallPolicyRequest
 */
export interface NetworkFirewallAssociateFirewallPolicyRequest {
  /**
   * @schema NetworkFirewallAssociateFirewallPolicyRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallAssociateFirewallPolicyRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallAssociateFirewallPolicyRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallAssociateFirewallPolicyRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallAssociateFirewallPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallAssociateFirewallPolicyRequest(obj: NetworkFirewallAssociateFirewallPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'FirewallPolicyArn': obj.firewallPolicyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallAssociateFirewallPolicyResponse
 */
export interface NetworkFirewallAssociateFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallAssociateFirewallPolicyResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallAssociateFirewallPolicyResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallAssociateFirewallPolicyResponse#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

  /**
   * @schema NetworkFirewallAssociateFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * Converts an object of type 'NetworkFirewallAssociateFirewallPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallAssociateFirewallPolicyResponse(obj: NetworkFirewallAssociateFirewallPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'FirewallPolicyArn': obj.firewallPolicyArn,
    'UpdateToken': obj.updateToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallAssociateSubnetsRequest
 */
export interface NetworkFirewallAssociateSubnetsRequest {
  /**
   * @schema NetworkFirewallAssociateSubnetsRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallAssociateSubnetsRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallAssociateSubnetsRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallAssociateSubnetsRequest#SubnetMappings
   */
  readonly subnetMappings?: NetworkFirewallSubnetMapping[];

}

/**
 * Converts an object of type 'NetworkFirewallAssociateSubnetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallAssociateSubnetsRequest(obj: NetworkFirewallAssociateSubnetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'SubnetMappings': obj.subnetMappings?.map(y => toJson_NetworkFirewallSubnetMapping(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallAssociateSubnetsResponse
 */
export interface NetworkFirewallAssociateSubnetsResponse {
  /**
   * @schema NetworkFirewallAssociateSubnetsResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallAssociateSubnetsResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallAssociateSubnetsResponse#SubnetMappings
   */
  readonly subnetMappings?: NetworkFirewallSubnetMapping[];

  /**
   * @schema NetworkFirewallAssociateSubnetsResponse#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * Converts an object of type 'NetworkFirewallAssociateSubnetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallAssociateSubnetsResponse(obj: NetworkFirewallAssociateSubnetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'SubnetMappings': obj.subnetMappings?.map(y => toJson_NetworkFirewallSubnetMapping(y)),
    'UpdateToken': obj.updateToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallCreateFirewallRequest
 */
export interface NetworkFirewallCreateFirewallRequest {
  /**
   * @schema NetworkFirewallCreateFirewallRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallCreateFirewallRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

  /**
   * @schema NetworkFirewallCreateFirewallRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema NetworkFirewallCreateFirewallRequest#SubnetMappings
   */
  readonly subnetMappings?: NetworkFirewallSubnetMapping[];

  /**
   * @schema NetworkFirewallCreateFirewallRequest#DeleteProtection
   */
  readonly deleteProtection?: boolean;

  /**
   * @schema NetworkFirewallCreateFirewallRequest#SubnetChangeProtection
   */
  readonly subnetChangeProtection?: boolean;

  /**
   * @schema NetworkFirewallCreateFirewallRequest#FirewallPolicyChangeProtection
   */
  readonly firewallPolicyChangeProtection?: boolean;

  /**
   * @schema NetworkFirewallCreateFirewallRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkFirewallCreateFirewallRequest#Tags
   */
  readonly tags?: NetworkFirewallTag[];

}

/**
 * Converts an object of type 'NetworkFirewallCreateFirewallRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallCreateFirewallRequest(obj: NetworkFirewallCreateFirewallRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallName': obj.firewallName,
    'FirewallPolicyArn': obj.firewallPolicyArn,
    'VpcId': obj.vpcId,
    'SubnetMappings': obj.subnetMappings?.map(y => toJson_NetworkFirewallSubnetMapping(y)),
    'DeleteProtection': obj.deleteProtection,
    'SubnetChangeProtection': obj.subnetChangeProtection,
    'FirewallPolicyChangeProtection': obj.firewallPolicyChangeProtection,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_NetworkFirewallTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallCreateFirewallResponse
 */
export interface NetworkFirewallCreateFirewallResponse {
  /**
   * @schema NetworkFirewallCreateFirewallResponse#Firewall
   */
  readonly firewall?: NetworkFirewallFirewall;

  /**
   * @schema NetworkFirewallCreateFirewallResponse#FirewallStatus
   */
  readonly firewallStatus?: NetworkFirewallFirewallStatus;

}

/**
 * Converts an object of type 'NetworkFirewallCreateFirewallResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallCreateFirewallResponse(obj: NetworkFirewallCreateFirewallResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Firewall': toJson_NetworkFirewallFirewall(obj.firewall),
    'FirewallStatus': toJson_NetworkFirewallFirewallStatus(obj.firewallStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallCreateFirewallPolicyRequest
 */
export interface NetworkFirewallCreateFirewallPolicyRequest {
  /**
   * @schema NetworkFirewallCreateFirewallPolicyRequest#FirewallPolicyName
   */
  readonly firewallPolicyName?: string;

  /**
   * @schema NetworkFirewallCreateFirewallPolicyRequest#FirewallPolicy
   */
  readonly firewallPolicy?: NetworkFirewallFirewallPolicy;

  /**
   * @schema NetworkFirewallCreateFirewallPolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkFirewallCreateFirewallPolicyRequest#Tags
   */
  readonly tags?: NetworkFirewallTag[];

  /**
   * @schema NetworkFirewallCreateFirewallPolicyRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * Converts an object of type 'NetworkFirewallCreateFirewallPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallCreateFirewallPolicyRequest(obj: NetworkFirewallCreateFirewallPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallPolicyName': obj.firewallPolicyName,
    'FirewallPolicy': toJson_NetworkFirewallFirewallPolicy(obj.firewallPolicy),
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_NetworkFirewallTag(y)),
    'DryRun': obj.dryRun,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallCreateFirewallPolicyResponse
 */
export interface NetworkFirewallCreateFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallCreateFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallCreateFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse?: NetworkFirewallFirewallPolicyResponse;

}

/**
 * Converts an object of type 'NetworkFirewallCreateFirewallPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallCreateFirewallPolicyResponse(obj: NetworkFirewallCreateFirewallPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallPolicyResponse': toJson_NetworkFirewallFirewallPolicyResponse(obj.firewallPolicyResponse),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallCreateRuleGroupRequest
 */
export interface NetworkFirewallCreateRuleGroupRequest {
  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#RuleGroup
   */
  readonly ruleGroup?: NetworkFirewallRuleGroup;

  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#Rules
   */
  readonly rules?: string;

  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#Type
   */
  readonly type?: string;

  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#Tags
   */
  readonly tags?: NetworkFirewallTag[];

  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * Converts an object of type 'NetworkFirewallCreateRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallCreateRuleGroupRequest(obj: NetworkFirewallCreateRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupName': obj.ruleGroupName,
    'RuleGroup': toJson_NetworkFirewallRuleGroup(obj.ruleGroup),
    'Rules': obj.rules,
    'Type': obj.type,
    'Description': obj.description,
    'Capacity': obj.capacity,
    'Tags': obj.tags?.map(y => toJson_NetworkFirewallTag(y)),
    'DryRun': obj.dryRun,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallCreateRuleGroupResponse
 */
export interface NetworkFirewallCreateRuleGroupResponse {
  /**
   * @schema NetworkFirewallCreateRuleGroupResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallCreateRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse?: NetworkFirewallRuleGroupResponse;

}

/**
 * Converts an object of type 'NetworkFirewallCreateRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallCreateRuleGroupResponse(obj: NetworkFirewallCreateRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'RuleGroupResponse': toJson_NetworkFirewallRuleGroupResponse(obj.ruleGroupResponse),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDeleteFirewallRequest
 */
export interface NetworkFirewallDeleteFirewallRequest {
  /**
   * @schema NetworkFirewallDeleteFirewallRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallDeleteFirewallRequest#FirewallArn
   */
  readonly firewallArn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDeleteFirewallRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDeleteFirewallRequest(obj: NetworkFirewallDeleteFirewallRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallName': obj.firewallName,
    'FirewallArn': obj.firewallArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDeleteFirewallResponse
 */
export interface NetworkFirewallDeleteFirewallResponse {
  /**
   * @schema NetworkFirewallDeleteFirewallResponse#Firewall
   */
  readonly firewall?: NetworkFirewallFirewall;

  /**
   * @schema NetworkFirewallDeleteFirewallResponse#FirewallStatus
   */
  readonly firewallStatus?: NetworkFirewallFirewallStatus;

}

/**
 * Converts an object of type 'NetworkFirewallDeleteFirewallResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDeleteFirewallResponse(obj: NetworkFirewallDeleteFirewallResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Firewall': toJson_NetworkFirewallFirewall(obj.firewall),
    'FirewallStatus': toJson_NetworkFirewallFirewallStatus(obj.firewallStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDeleteFirewallPolicyRequest
 */
export interface NetworkFirewallDeleteFirewallPolicyRequest {
  /**
   * @schema NetworkFirewallDeleteFirewallPolicyRequest#FirewallPolicyName
   */
  readonly firewallPolicyName?: string;

  /**
   * @schema NetworkFirewallDeleteFirewallPolicyRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDeleteFirewallPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDeleteFirewallPolicyRequest(obj: NetworkFirewallDeleteFirewallPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallPolicyName': obj.firewallPolicyName,
    'FirewallPolicyArn': obj.firewallPolicyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDeleteFirewallPolicyResponse
 */
export interface NetworkFirewallDeleteFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallDeleteFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse?: NetworkFirewallFirewallPolicyResponse;

}

/**
 * Converts an object of type 'NetworkFirewallDeleteFirewallPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDeleteFirewallPolicyResponse(obj: NetworkFirewallDeleteFirewallPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallPolicyResponse': toJson_NetworkFirewallFirewallPolicyResponse(obj.firewallPolicyResponse),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDeleteResourcePolicyRequest
 */
export interface NetworkFirewallDeleteResourcePolicyRequest {
  /**
   * @schema NetworkFirewallDeleteResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDeleteResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDeleteResourcePolicyRequest(obj: NetworkFirewallDeleteResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDeleteResourcePolicyResponse
 */
export interface NetworkFirewallDeleteResourcePolicyResponse {
}

/**
 * Converts an object of type 'NetworkFirewallDeleteResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDeleteResourcePolicyResponse(obj: NetworkFirewallDeleteResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDeleteRuleGroupRequest
 */
export interface NetworkFirewallDeleteRuleGroupRequest {
  /**
   * @schema NetworkFirewallDeleteRuleGroupRequest#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema NetworkFirewallDeleteRuleGroupRequest#RuleGroupArn
   */
  readonly ruleGroupArn?: string;

  /**
   * @schema NetworkFirewallDeleteRuleGroupRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDeleteRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDeleteRuleGroupRequest(obj: NetworkFirewallDeleteRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupName': obj.ruleGroupName,
    'RuleGroupArn': obj.ruleGroupArn,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDeleteRuleGroupResponse
 */
export interface NetworkFirewallDeleteRuleGroupResponse {
  /**
   * @schema NetworkFirewallDeleteRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse?: NetworkFirewallRuleGroupResponse;

}

/**
 * Converts an object of type 'NetworkFirewallDeleteRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDeleteRuleGroupResponse(obj: NetworkFirewallDeleteRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupResponse': toJson_NetworkFirewallRuleGroupResponse(obj.ruleGroupResponse),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDescribeFirewallRequest
 */
export interface NetworkFirewallDescribeFirewallRequest {
  /**
   * @schema NetworkFirewallDescribeFirewallRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallDescribeFirewallRequest#FirewallArn
   */
  readonly firewallArn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDescribeFirewallRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDescribeFirewallRequest(obj: NetworkFirewallDescribeFirewallRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallName': obj.firewallName,
    'FirewallArn': obj.firewallArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDescribeFirewallResponse
 */
export interface NetworkFirewallDescribeFirewallResponse {
  /**
   * @schema NetworkFirewallDescribeFirewallResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallDescribeFirewallResponse#Firewall
   */
  readonly firewall?: NetworkFirewallFirewall;

  /**
   * @schema NetworkFirewallDescribeFirewallResponse#FirewallStatus
   */
  readonly firewallStatus?: NetworkFirewallFirewallStatus;

}

/**
 * Converts an object of type 'NetworkFirewallDescribeFirewallResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDescribeFirewallResponse(obj: NetworkFirewallDescribeFirewallResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'Firewall': toJson_NetworkFirewallFirewall(obj.firewall),
    'FirewallStatus': toJson_NetworkFirewallFirewallStatus(obj.firewallStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDescribeFirewallPolicyRequest
 */
export interface NetworkFirewallDescribeFirewallPolicyRequest {
  /**
   * @schema NetworkFirewallDescribeFirewallPolicyRequest#FirewallPolicyName
   */
  readonly firewallPolicyName?: string;

  /**
   * @schema NetworkFirewallDescribeFirewallPolicyRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDescribeFirewallPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDescribeFirewallPolicyRequest(obj: NetworkFirewallDescribeFirewallPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallPolicyName': obj.firewallPolicyName,
    'FirewallPolicyArn': obj.firewallPolicyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDescribeFirewallPolicyResponse
 */
export interface NetworkFirewallDescribeFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallDescribeFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallDescribeFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse?: NetworkFirewallFirewallPolicyResponse;

  /**
   * @schema NetworkFirewallDescribeFirewallPolicyResponse#FirewallPolicy
   */
  readonly firewallPolicy?: NetworkFirewallFirewallPolicy;

}

/**
 * Converts an object of type 'NetworkFirewallDescribeFirewallPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDescribeFirewallPolicyResponse(obj: NetworkFirewallDescribeFirewallPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallPolicyResponse': toJson_NetworkFirewallFirewallPolicyResponse(obj.firewallPolicyResponse),
    'FirewallPolicy': toJson_NetworkFirewallFirewallPolicy(obj.firewallPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDescribeLoggingConfigurationRequest
 */
export interface NetworkFirewallDescribeLoggingConfigurationRequest {
  /**
   * @schema NetworkFirewallDescribeLoggingConfigurationRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallDescribeLoggingConfigurationRequest#FirewallName
   */
  readonly firewallName?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDescribeLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDescribeLoggingConfigurationRequest(obj: NetworkFirewallDescribeLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDescribeLoggingConfigurationResponse
 */
export interface NetworkFirewallDescribeLoggingConfigurationResponse {
  /**
   * @schema NetworkFirewallDescribeLoggingConfigurationResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallDescribeLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: NetworkFirewallLoggingConfiguration;

}

/**
 * Converts an object of type 'NetworkFirewallDescribeLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDescribeLoggingConfigurationResponse(obj: NetworkFirewallDescribeLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallArn': obj.firewallArn,
    'LoggingConfiguration': toJson_NetworkFirewallLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDescribeResourcePolicyRequest
 */
export interface NetworkFirewallDescribeResourcePolicyRequest {
  /**
   * @schema NetworkFirewallDescribeResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDescribeResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDescribeResourcePolicyRequest(obj: NetworkFirewallDescribeResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDescribeResourcePolicyResponse
 */
export interface NetworkFirewallDescribeResourcePolicyResponse {
  /**
   * @schema NetworkFirewallDescribeResourcePolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDescribeResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDescribeResourcePolicyResponse(obj: NetworkFirewallDescribeResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDescribeRuleGroupRequest
 */
export interface NetworkFirewallDescribeRuleGroupRequest {
  /**
   * @schema NetworkFirewallDescribeRuleGroupRequest#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema NetworkFirewallDescribeRuleGroupRequest#RuleGroupArn
   */
  readonly ruleGroupArn?: string;

  /**
   * @schema NetworkFirewallDescribeRuleGroupRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDescribeRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDescribeRuleGroupRequest(obj: NetworkFirewallDescribeRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupName': obj.ruleGroupName,
    'RuleGroupArn': obj.ruleGroupArn,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDescribeRuleGroupResponse
 */
export interface NetworkFirewallDescribeRuleGroupResponse {
  /**
   * @schema NetworkFirewallDescribeRuleGroupResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallDescribeRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: NetworkFirewallRuleGroup;

  /**
   * @schema NetworkFirewallDescribeRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse?: NetworkFirewallRuleGroupResponse;

}

/**
 * Converts an object of type 'NetworkFirewallDescribeRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDescribeRuleGroupResponse(obj: NetworkFirewallDescribeRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'RuleGroup': toJson_NetworkFirewallRuleGroup(obj.ruleGroup),
    'RuleGroupResponse': toJson_NetworkFirewallRuleGroupResponse(obj.ruleGroupResponse),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDisassociateSubnetsRequest
 */
export interface NetworkFirewallDisassociateSubnetsRequest {
  /**
   * @schema NetworkFirewallDisassociateSubnetsRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallDisassociateSubnetsRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallDisassociateSubnetsRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallDisassociateSubnetsRequest#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'NetworkFirewallDisassociateSubnetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDisassociateSubnetsRequest(obj: NetworkFirewallDisassociateSubnetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDisassociateSubnetsResponse
 */
export interface NetworkFirewallDisassociateSubnetsResponse {
  /**
   * @schema NetworkFirewallDisassociateSubnetsResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallDisassociateSubnetsResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallDisassociateSubnetsResponse#SubnetMappings
   */
  readonly subnetMappings?: NetworkFirewallSubnetMapping[];

  /**
   * @schema NetworkFirewallDisassociateSubnetsResponse#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDisassociateSubnetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDisassociateSubnetsResponse(obj: NetworkFirewallDisassociateSubnetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'SubnetMappings': obj.subnetMappings?.map(y => toJson_NetworkFirewallSubnetMapping(y)),
    'UpdateToken': obj.updateToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallListFirewallPoliciesRequest
 */
export interface NetworkFirewallListFirewallPoliciesRequest {
  /**
   * @schema NetworkFirewallListFirewallPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NetworkFirewallListFirewallPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'NetworkFirewallListFirewallPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallListFirewallPoliciesRequest(obj: NetworkFirewallListFirewallPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallListFirewallPoliciesResponse
 */
export interface NetworkFirewallListFirewallPoliciesResponse {
  /**
   * @schema NetworkFirewallListFirewallPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NetworkFirewallListFirewallPoliciesResponse#FirewallPolicies
   */
  readonly firewallPolicies?: NetworkFirewallFirewallPolicyMetadata[];

}

/**
 * Converts an object of type 'NetworkFirewallListFirewallPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallListFirewallPoliciesResponse(obj: NetworkFirewallListFirewallPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'FirewallPolicies': obj.firewallPolicies?.map(y => toJson_NetworkFirewallFirewallPolicyMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallListFirewallsRequest
 */
export interface NetworkFirewallListFirewallsRequest {
  /**
   * @schema NetworkFirewallListFirewallsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NetworkFirewallListFirewallsRequest#VpcIds
   */
  readonly vpcIds?: string[];

  /**
   * @schema NetworkFirewallListFirewallsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'NetworkFirewallListFirewallsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallListFirewallsRequest(obj: NetworkFirewallListFirewallsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'VpcIds': obj.vpcIds?.map(y => y),
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallListFirewallsResponse
 */
export interface NetworkFirewallListFirewallsResponse {
  /**
   * @schema NetworkFirewallListFirewallsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NetworkFirewallListFirewallsResponse#Firewalls
   */
  readonly firewalls?: NetworkFirewallFirewallMetadata[];

}

/**
 * Converts an object of type 'NetworkFirewallListFirewallsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallListFirewallsResponse(obj: NetworkFirewallListFirewallsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Firewalls': obj.firewalls?.map(y => toJson_NetworkFirewallFirewallMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallListRuleGroupsRequest
 */
export interface NetworkFirewallListRuleGroupsRequest {
  /**
   * @schema NetworkFirewallListRuleGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NetworkFirewallListRuleGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'NetworkFirewallListRuleGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallListRuleGroupsRequest(obj: NetworkFirewallListRuleGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallListRuleGroupsResponse
 */
export interface NetworkFirewallListRuleGroupsResponse {
  /**
   * @schema NetworkFirewallListRuleGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NetworkFirewallListRuleGroupsResponse#RuleGroups
   */
  readonly ruleGroups?: NetworkFirewallRuleGroupMetadata[];

}

/**
 * Converts an object of type 'NetworkFirewallListRuleGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallListRuleGroupsResponse(obj: NetworkFirewallListRuleGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'RuleGroups': obj.ruleGroups?.map(y => toJson_NetworkFirewallRuleGroupMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallListTagsForResourceRequest
 */
export interface NetworkFirewallListTagsForResourceRequest {
  /**
   * @schema NetworkFirewallListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NetworkFirewallListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema NetworkFirewallListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallListTagsForResourceRequest(obj: NetworkFirewallListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallListTagsForResourceResponse
 */
export interface NetworkFirewallListTagsForResourceResponse {
  /**
   * @schema NetworkFirewallListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema NetworkFirewallListTagsForResourceResponse#Tags
   */
  readonly tags?: NetworkFirewallTag[];

}

/**
 * Converts an object of type 'NetworkFirewallListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallListTagsForResourceResponse(obj: NetworkFirewallListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Tags': obj.tags?.map(y => toJson_NetworkFirewallTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallPutResourcePolicyRequest
 */
export interface NetworkFirewallPutResourcePolicyRequest {
  /**
   * @schema NetworkFirewallPutResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema NetworkFirewallPutResourcePolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'NetworkFirewallPutResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallPutResourcePolicyRequest(obj: NetworkFirewallPutResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallPutResourcePolicyResponse
 */
export interface NetworkFirewallPutResourcePolicyResponse {
}

/**
 * Converts an object of type 'NetworkFirewallPutResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallPutResourcePolicyResponse(obj: NetworkFirewallPutResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallTagResourceRequest
 */
export interface NetworkFirewallTagResourceRequest {
  /**
   * @schema NetworkFirewallTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema NetworkFirewallTagResourceRequest#Tags
   */
  readonly tags?: NetworkFirewallTag[];

}

/**
 * Converts an object of type 'NetworkFirewallTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallTagResourceRequest(obj: NetworkFirewallTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_NetworkFirewallTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallTagResourceResponse
 */
export interface NetworkFirewallTagResourceResponse {
}

/**
 * Converts an object of type 'NetworkFirewallTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallTagResourceResponse(obj: NetworkFirewallTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUntagResourceRequest
 */
export interface NetworkFirewallUntagResourceRequest {
  /**
   * @schema NetworkFirewallUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema NetworkFirewallUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'NetworkFirewallUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUntagResourceRequest(obj: NetworkFirewallUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema NetworkFirewallUntagResourceResponse
 */
export interface NetworkFirewallUntagResourceResponse {
}

/**
 * Converts an object of type 'NetworkFirewallUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUntagResourceResponse(obj: NetworkFirewallUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateFirewallDeleteProtectionRequest
 */
export interface NetworkFirewallUpdateFirewallDeleteProtectionRequest {
  /**
   * @schema NetworkFirewallUpdateFirewallDeleteProtectionRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDeleteProtectionRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDeleteProtectionRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDeleteProtectionRequest#DeleteProtection
   */
  readonly deleteProtection?: boolean;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateFirewallDeleteProtectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateFirewallDeleteProtectionRequest(obj: NetworkFirewallUpdateFirewallDeleteProtectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'DeleteProtection': obj.deleteProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateFirewallDeleteProtectionResponse
 */
export interface NetworkFirewallUpdateFirewallDeleteProtectionResponse {
  /**
   * @schema NetworkFirewallUpdateFirewallDeleteProtectionResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDeleteProtectionResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDeleteProtectionResponse#DeleteProtection
   */
  readonly deleteProtection?: boolean;

  /**
   * @schema NetworkFirewallUpdateFirewallDeleteProtectionResponse#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateFirewallDeleteProtectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateFirewallDeleteProtectionResponse(obj: NetworkFirewallUpdateFirewallDeleteProtectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'DeleteProtection': obj.deleteProtection,
    'UpdateToken': obj.updateToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateFirewallDescriptionRequest
 */
export interface NetworkFirewallUpdateFirewallDescriptionRequest {
  /**
   * @schema NetworkFirewallUpdateFirewallDescriptionRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDescriptionRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDescriptionRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDescriptionRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateFirewallDescriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateFirewallDescriptionRequest(obj: NetworkFirewallUpdateFirewallDescriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateFirewallDescriptionResponse
 */
export interface NetworkFirewallUpdateFirewallDescriptionResponse {
  /**
   * @schema NetworkFirewallUpdateFirewallDescriptionResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDescriptionResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDescriptionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallDescriptionResponse#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateFirewallDescriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateFirewallDescriptionResponse(obj: NetworkFirewallUpdateFirewallDescriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'Description': obj.description,
    'UpdateToken': obj.updateToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateFirewallPolicyRequest
 */
export interface NetworkFirewallUpdateFirewallPolicyRequest {
  /**
   * @schema NetworkFirewallUpdateFirewallPolicyRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyRequest#FirewallPolicyName
   */
  readonly firewallPolicyName?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyRequest#FirewallPolicy
   */
  readonly firewallPolicy?: NetworkFirewallFirewallPolicy;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateFirewallPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateFirewallPolicyRequest(obj: NetworkFirewallUpdateFirewallPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallPolicyArn': obj.firewallPolicyArn,
    'FirewallPolicyName': obj.firewallPolicyName,
    'FirewallPolicy': toJson_NetworkFirewallFirewallPolicy(obj.firewallPolicy),
    'Description': obj.description,
    'DryRun': obj.dryRun,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateFirewallPolicyResponse
 */
export interface NetworkFirewallUpdateFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallUpdateFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse?: NetworkFirewallFirewallPolicyResponse;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateFirewallPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateFirewallPolicyResponse(obj: NetworkFirewallUpdateFirewallPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallPolicyResponse': toJson_NetworkFirewallFirewallPolicyResponse(obj.firewallPolicyResponse),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest
 */
export interface NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest {
  /**
   * @schema NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest#FirewallPolicyChangeProtection
   */
  readonly firewallPolicyChangeProtection?: boolean;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest(obj: NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'FirewallPolicyChangeProtection': obj.firewallPolicyChangeProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse
 */
export interface NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse {
  /**
   * @schema NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse#FirewallPolicyChangeProtection
   */
  readonly firewallPolicyChangeProtection?: boolean;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse(obj: NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'FirewallPolicyChangeProtection': obj.firewallPolicyChangeProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateLoggingConfigurationRequest
 */
export interface NetworkFirewallUpdateLoggingConfigurationRequest {
  /**
   * @schema NetworkFirewallUpdateLoggingConfigurationRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallUpdateLoggingConfigurationRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallUpdateLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration?: NetworkFirewallLoggingConfiguration;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateLoggingConfigurationRequest(obj: NetworkFirewallUpdateLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'LoggingConfiguration': toJson_NetworkFirewallLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateLoggingConfigurationResponse
 */
export interface NetworkFirewallUpdateLoggingConfigurationResponse {
  /**
   * @schema NetworkFirewallUpdateLoggingConfigurationResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallUpdateLoggingConfigurationResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallUpdateLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: NetworkFirewallLoggingConfiguration;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateLoggingConfigurationResponse(obj: NetworkFirewallUpdateLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'LoggingConfiguration': toJson_NetworkFirewallLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateRuleGroupRequest
 */
export interface NetworkFirewallUpdateRuleGroupRequest {
  /**
   * @schema NetworkFirewallUpdateRuleGroupRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallUpdateRuleGroupRequest#RuleGroupArn
   */
  readonly ruleGroupArn?: string;

  /**
   * @schema NetworkFirewallUpdateRuleGroupRequest#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema NetworkFirewallUpdateRuleGroupRequest#RuleGroup
   */
  readonly ruleGroup?: NetworkFirewallRuleGroup;

  /**
   * @schema NetworkFirewallUpdateRuleGroupRequest#Rules
   */
  readonly rules?: string;

  /**
   * @schema NetworkFirewallUpdateRuleGroupRequest#Type
   */
  readonly type?: string;

  /**
   * @schema NetworkFirewallUpdateRuleGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkFirewallUpdateRuleGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateRuleGroupRequest(obj: NetworkFirewallUpdateRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'RuleGroupArn': obj.ruleGroupArn,
    'RuleGroupName': obj.ruleGroupName,
    'RuleGroup': toJson_NetworkFirewallRuleGroup(obj.ruleGroup),
    'Rules': obj.rules,
    'Type': obj.type,
    'Description': obj.description,
    'DryRun': obj.dryRun,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateRuleGroupResponse
 */
export interface NetworkFirewallUpdateRuleGroupResponse {
  /**
   * @schema NetworkFirewallUpdateRuleGroupResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallUpdateRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse?: NetworkFirewallRuleGroupResponse;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateRuleGroupResponse(obj: NetworkFirewallUpdateRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'RuleGroupResponse': toJson_NetworkFirewallRuleGroupResponse(obj.ruleGroupResponse),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateSubnetChangeProtectionRequest
 */
export interface NetworkFirewallUpdateSubnetChangeProtectionRequest {
  /**
   * @schema NetworkFirewallUpdateSubnetChangeProtectionRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallUpdateSubnetChangeProtectionRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallUpdateSubnetChangeProtectionRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallUpdateSubnetChangeProtectionRequest#SubnetChangeProtection
   */
  readonly subnetChangeProtection?: boolean;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateSubnetChangeProtectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateSubnetChangeProtectionRequest(obj: NetworkFirewallUpdateSubnetChangeProtectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'SubnetChangeProtection': obj.subnetChangeProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallUpdateSubnetChangeProtectionResponse
 */
export interface NetworkFirewallUpdateSubnetChangeProtectionResponse {
  /**
   * @schema NetworkFirewallUpdateSubnetChangeProtectionResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema NetworkFirewallUpdateSubnetChangeProtectionResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallUpdateSubnetChangeProtectionResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallUpdateSubnetChangeProtectionResponse#SubnetChangeProtection
   */
  readonly subnetChangeProtection?: boolean;

}

/**
 * Converts an object of type 'NetworkFirewallUpdateSubnetChangeProtectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallUpdateSubnetChangeProtectionResponse(obj: NetworkFirewallUpdateSubnetChangeProtectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateToken': obj.updateToken,
    'FirewallArn': obj.firewallArn,
    'FirewallName': obj.firewallName,
    'SubnetChangeProtection': obj.subnetChangeProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallSubnetMapping
 */
export interface NetworkFirewallSubnetMapping {
  /**
   * @schema NetworkFirewallSubnetMapping#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * Converts an object of type 'NetworkFirewallSubnetMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallSubnetMapping(obj: NetworkFirewallSubnetMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetId': obj.subnetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallTag
 */
export interface NetworkFirewallTag {
  /**
   * @schema NetworkFirewallTag#Key
   */
  readonly key?: string;

  /**
   * @schema NetworkFirewallTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'NetworkFirewallTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallTag(obj: NetworkFirewallTag | undefined): Record<string, any> | undefined {
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
 * @schema NetworkFirewallFirewall
 */
export interface NetworkFirewallFirewall {
  /**
   * @schema NetworkFirewallFirewall#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallFirewall#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema NetworkFirewallFirewall#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

  /**
   * @schema NetworkFirewallFirewall#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema NetworkFirewallFirewall#SubnetMappings
   */
  readonly subnetMappings?: NetworkFirewallSubnetMapping[];

  /**
   * @schema NetworkFirewallFirewall#DeleteProtection
   */
  readonly deleteProtection?: boolean;

  /**
   * @schema NetworkFirewallFirewall#SubnetChangeProtection
   */
  readonly subnetChangeProtection?: boolean;

  /**
   * @schema NetworkFirewallFirewall#FirewallPolicyChangeProtection
   */
  readonly firewallPolicyChangeProtection?: boolean;

  /**
   * @schema NetworkFirewallFirewall#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkFirewallFirewall#FirewallId
   */
  readonly firewallId?: string;

  /**
   * @schema NetworkFirewallFirewall#Tags
   */
  readonly tags?: NetworkFirewallTag[];

}

/**
 * Converts an object of type 'NetworkFirewallFirewall' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallFirewall(obj: NetworkFirewallFirewall | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallName': obj.firewallName,
    'FirewallArn': obj.firewallArn,
    'FirewallPolicyArn': obj.firewallPolicyArn,
    'VpcId': obj.vpcId,
    'SubnetMappings': obj.subnetMappings?.map(y => toJson_NetworkFirewallSubnetMapping(y)),
    'DeleteProtection': obj.deleteProtection,
    'SubnetChangeProtection': obj.subnetChangeProtection,
    'FirewallPolicyChangeProtection': obj.firewallPolicyChangeProtection,
    'Description': obj.description,
    'FirewallId': obj.firewallId,
    'Tags': obj.tags?.map(y => toJson_NetworkFirewallTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallFirewallStatus
 */
export interface NetworkFirewallFirewallStatus {
  /**
   * @schema NetworkFirewallFirewallStatus#Status
   */
  readonly status?: string;

  /**
   * @schema NetworkFirewallFirewallStatus#ConfigurationSyncStateSummary
   */
  readonly configurationSyncStateSummary?: string;

  /**
   * @schema NetworkFirewallFirewallStatus#SyncStates
   */
  readonly syncStates?: { [key: string]: NetworkFirewallSyncState };

}

/**
 * Converts an object of type 'NetworkFirewallFirewallStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallFirewallStatus(obj: NetworkFirewallFirewallStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'ConfigurationSyncStateSummary': obj.configurationSyncStateSummary,
    'SyncStates': ((obj.syncStates) === undefined) ? undefined : (Object.entries(obj.syncStates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_NetworkFirewallSyncState(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallFirewallPolicy
 */
export interface NetworkFirewallFirewallPolicy {
  /**
   * @schema NetworkFirewallFirewallPolicy#StatelessRuleGroupReferences
   */
  readonly statelessRuleGroupReferences?: NetworkFirewallStatelessRuleGroupReference[];

  /**
   * @schema NetworkFirewallFirewallPolicy#StatelessDefaultActions
   */
  readonly statelessDefaultActions?: string[];

  /**
   * @schema NetworkFirewallFirewallPolicy#StatelessFragmentDefaultActions
   */
  readonly statelessFragmentDefaultActions?: string[];

  /**
   * @schema NetworkFirewallFirewallPolicy#StatelessCustomActions
   */
  readonly statelessCustomActions?: NetworkFirewallCustomAction[];

  /**
   * @schema NetworkFirewallFirewallPolicy#StatefulRuleGroupReferences
   */
  readonly statefulRuleGroupReferences?: NetworkFirewallStatefulRuleGroupReference[];

}

/**
 * Converts an object of type 'NetworkFirewallFirewallPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallFirewallPolicy(obj: NetworkFirewallFirewallPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatelessRuleGroupReferences': obj.statelessRuleGroupReferences?.map(y => toJson_NetworkFirewallStatelessRuleGroupReference(y)),
    'StatelessDefaultActions': obj.statelessDefaultActions?.map(y => y),
    'StatelessFragmentDefaultActions': obj.statelessFragmentDefaultActions?.map(y => y),
    'StatelessCustomActions': obj.statelessCustomActions?.map(y => toJson_NetworkFirewallCustomAction(y)),
    'StatefulRuleGroupReferences': obj.statefulRuleGroupReferences?.map(y => toJson_NetworkFirewallStatefulRuleGroupReference(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallFirewallPolicyResponse
 */
export interface NetworkFirewallFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallFirewallPolicyResponse#FirewallPolicyName
   */
  readonly firewallPolicyName?: string;

  /**
   * @schema NetworkFirewallFirewallPolicyResponse#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

  /**
   * @schema NetworkFirewallFirewallPolicyResponse#FirewallPolicyId
   */
  readonly firewallPolicyId?: string;

  /**
   * @schema NetworkFirewallFirewallPolicyResponse#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkFirewallFirewallPolicyResponse#FirewallPolicyStatus
   */
  readonly firewallPolicyStatus?: string;

  /**
   * @schema NetworkFirewallFirewallPolicyResponse#Tags
   */
  readonly tags?: NetworkFirewallTag[];

}

/**
 * Converts an object of type 'NetworkFirewallFirewallPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallFirewallPolicyResponse(obj: NetworkFirewallFirewallPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallPolicyName': obj.firewallPolicyName,
    'FirewallPolicyArn': obj.firewallPolicyArn,
    'FirewallPolicyId': obj.firewallPolicyId,
    'Description': obj.description,
    'FirewallPolicyStatus': obj.firewallPolicyStatus,
    'Tags': obj.tags?.map(y => toJson_NetworkFirewallTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallRuleGroup
 */
export interface NetworkFirewallRuleGroup {
  /**
   * @schema NetworkFirewallRuleGroup#RuleVariables
   */
  readonly ruleVariables?: NetworkFirewallRuleVariables;

  /**
   * @schema NetworkFirewallRuleGroup#RulesSource
   */
  readonly rulesSource?: NetworkFirewallRulesSource;

}

/**
 * Converts an object of type 'NetworkFirewallRuleGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallRuleGroup(obj: NetworkFirewallRuleGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleVariables': toJson_NetworkFirewallRuleVariables(obj.ruleVariables),
    'RulesSource': toJson_NetworkFirewallRulesSource(obj.rulesSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallRuleGroupResponse
 */
export interface NetworkFirewallRuleGroupResponse {
  /**
   * @schema NetworkFirewallRuleGroupResponse#RuleGroupArn
   */
  readonly ruleGroupArn?: string;

  /**
   * @schema NetworkFirewallRuleGroupResponse#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema NetworkFirewallRuleGroupResponse#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema NetworkFirewallRuleGroupResponse#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkFirewallRuleGroupResponse#Type
   */
  readonly type?: string;

  /**
   * @schema NetworkFirewallRuleGroupResponse#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema NetworkFirewallRuleGroupResponse#RuleGroupStatus
   */
  readonly ruleGroupStatus?: string;

  /**
   * @schema NetworkFirewallRuleGroupResponse#Tags
   */
  readonly tags?: NetworkFirewallTag[];

}

/**
 * Converts an object of type 'NetworkFirewallRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallRuleGroupResponse(obj: NetworkFirewallRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupArn': obj.ruleGroupArn,
    'RuleGroupName': obj.ruleGroupName,
    'RuleGroupId': obj.ruleGroupId,
    'Description': obj.description,
    'Type': obj.type,
    'Capacity': obj.capacity,
    'RuleGroupStatus': obj.ruleGroupStatus,
    'Tags': obj.tags?.map(y => toJson_NetworkFirewallTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallLoggingConfiguration
 */
export interface NetworkFirewallLoggingConfiguration {
  /**
   * @schema NetworkFirewallLoggingConfiguration#LogDestinationConfigs
   */
  readonly logDestinationConfigs?: NetworkFirewallLogDestinationConfig[];

}

/**
 * Converts an object of type 'NetworkFirewallLoggingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallLoggingConfiguration(obj: NetworkFirewallLoggingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogDestinationConfigs': obj.logDestinationConfigs?.map(y => toJson_NetworkFirewallLogDestinationConfig(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallFirewallPolicyMetadata
 */
export interface NetworkFirewallFirewallPolicyMetadata {
  /**
   * @schema NetworkFirewallFirewallPolicyMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema NetworkFirewallFirewallPolicyMetadata#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallFirewallPolicyMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallFirewallPolicyMetadata(obj: NetworkFirewallFirewallPolicyMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallFirewallMetadata
 */
export interface NetworkFirewallFirewallMetadata {
  /**
   * @schema NetworkFirewallFirewallMetadata#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema NetworkFirewallFirewallMetadata#FirewallArn
   */
  readonly firewallArn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallFirewallMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallFirewallMetadata(obj: NetworkFirewallFirewallMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallName': obj.firewallName,
    'FirewallArn': obj.firewallArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallRuleGroupMetadata
 */
export interface NetworkFirewallRuleGroupMetadata {
  /**
   * @schema NetworkFirewallRuleGroupMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema NetworkFirewallRuleGroupMetadata#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallRuleGroupMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallRuleGroupMetadata(obj: NetworkFirewallRuleGroupMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallSyncState
 */
export interface NetworkFirewallSyncState {
  /**
   * @schema NetworkFirewallSyncState#Attachment
   */
  readonly attachment?: NetworkFirewallAttachment;

  /**
   * @schema NetworkFirewallSyncState#Config
   */
  readonly config?: { [key: string]: NetworkFirewallPerObjectStatus };

}

/**
 * Converts an object of type 'NetworkFirewallSyncState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallSyncState(obj: NetworkFirewallSyncState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attachment': toJson_NetworkFirewallAttachment(obj.attachment),
    'Config': ((obj.config) === undefined) ? undefined : (Object.entries(obj.config).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_NetworkFirewallPerObjectStatus(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallStatelessRuleGroupReference
 */
export interface NetworkFirewallStatelessRuleGroupReference {
  /**
   * @schema NetworkFirewallStatelessRuleGroupReference#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema NetworkFirewallStatelessRuleGroupReference#Priority
   */
  readonly priority?: number;

}

/**
 * Converts an object of type 'NetworkFirewallStatelessRuleGroupReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallStatelessRuleGroupReference(obj: NetworkFirewallStatelessRuleGroupReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Priority': obj.priority,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallCustomAction
 */
export interface NetworkFirewallCustomAction {
  /**
   * @schema NetworkFirewallCustomAction#ActionName
   */
  readonly actionName?: string;

  /**
   * @schema NetworkFirewallCustomAction#ActionDefinition
   */
  readonly actionDefinition?: NetworkFirewallActionDefinition;

}

/**
 * Converts an object of type 'NetworkFirewallCustomAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallCustomAction(obj: NetworkFirewallCustomAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionName': obj.actionName,
    'ActionDefinition': toJson_NetworkFirewallActionDefinition(obj.actionDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallStatefulRuleGroupReference
 */
export interface NetworkFirewallStatefulRuleGroupReference {
  /**
   * @schema NetworkFirewallStatefulRuleGroupReference#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'NetworkFirewallStatefulRuleGroupReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallStatefulRuleGroupReference(obj: NetworkFirewallStatefulRuleGroupReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallRuleVariables
 */
export interface NetworkFirewallRuleVariables {
  /**
   * @schema NetworkFirewallRuleVariables#IPSets
   */
  readonly ipSets?: { [key: string]: NetworkFirewallIpSet };

  /**
   * @schema NetworkFirewallRuleVariables#PortSets
   */
  readonly portSets?: { [key: string]: NetworkFirewallPortSet };

}

/**
 * Converts an object of type 'NetworkFirewallRuleVariables' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallRuleVariables(obj: NetworkFirewallRuleVariables | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSets': ((obj.ipSets) === undefined) ? undefined : (Object.entries(obj.ipSets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_NetworkFirewallIpSet(i[1]) }), {})),
    'PortSets': ((obj.portSets) === undefined) ? undefined : (Object.entries(obj.portSets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_NetworkFirewallPortSet(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallRulesSource
 */
export interface NetworkFirewallRulesSource {
  /**
   * @schema NetworkFirewallRulesSource#RulesString
   */
  readonly rulesString?: string;

  /**
   * @schema NetworkFirewallRulesSource#RulesSourceList
   */
  readonly rulesSourceList?: NetworkFirewallRulesSourceList;

  /**
   * @schema NetworkFirewallRulesSource#StatefulRules
   */
  readonly statefulRules?: NetworkFirewallStatefulRule[];

  /**
   * @schema NetworkFirewallRulesSource#StatelessRulesAndCustomActions
   */
  readonly statelessRulesAndCustomActions?: NetworkFirewallStatelessRulesAndCustomActions;

}

/**
 * Converts an object of type 'NetworkFirewallRulesSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallRulesSource(obj: NetworkFirewallRulesSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RulesString': obj.rulesString,
    'RulesSourceList': toJson_NetworkFirewallRulesSourceList(obj.rulesSourceList),
    'StatefulRules': obj.statefulRules?.map(y => toJson_NetworkFirewallStatefulRule(y)),
    'StatelessRulesAndCustomActions': toJson_NetworkFirewallStatelessRulesAndCustomActions(obj.statelessRulesAndCustomActions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallLogDestinationConfig
 */
export interface NetworkFirewallLogDestinationConfig {
  /**
   * @schema NetworkFirewallLogDestinationConfig#LogType
   */
  readonly logType?: string;

  /**
   * @schema NetworkFirewallLogDestinationConfig#LogDestinationType
   */
  readonly logDestinationType?: string;

  /**
   * @schema NetworkFirewallLogDestinationConfig#LogDestination
   */
  readonly logDestination?: { [key: string]: string };

}

/**
 * Converts an object of type 'NetworkFirewallLogDestinationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallLogDestinationConfig(obj: NetworkFirewallLogDestinationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogType': obj.logType,
    'LogDestinationType': obj.logDestinationType,
    'LogDestination': ((obj.logDestination) === undefined) ? undefined : (Object.entries(obj.logDestination).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallAttachment
 */
export interface NetworkFirewallAttachment {
  /**
   * @schema NetworkFirewallAttachment#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema NetworkFirewallAttachment#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema NetworkFirewallAttachment#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'NetworkFirewallAttachment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallAttachment(obj: NetworkFirewallAttachment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetId': obj.subnetId,
    'EndpointId': obj.endpointId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallPerObjectStatus
 */
export interface NetworkFirewallPerObjectStatus {
  /**
   * @schema NetworkFirewallPerObjectStatus#SyncStatus
   */
  readonly syncStatus?: string;

  /**
   * @schema NetworkFirewallPerObjectStatus#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * Converts an object of type 'NetworkFirewallPerObjectStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallPerObjectStatus(obj: NetworkFirewallPerObjectStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SyncStatus': obj.syncStatus,
    'UpdateToken': obj.updateToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallActionDefinition
 */
export interface NetworkFirewallActionDefinition {
  /**
   * @schema NetworkFirewallActionDefinition#PublishMetricAction
   */
  readonly publishMetricAction?: NetworkFirewallPublishMetricAction;

}

/**
 * Converts an object of type 'NetworkFirewallActionDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallActionDefinition(obj: NetworkFirewallActionDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublishMetricAction': toJson_NetworkFirewallPublishMetricAction(obj.publishMetricAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallIpSet
 */
export interface NetworkFirewallIpSet {
  /**
   * @schema NetworkFirewallIpSet#Definition
   */
  readonly definition?: string[];

}

/**
 * Converts an object of type 'NetworkFirewallIpSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallIpSet(obj: NetworkFirewallIpSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Definition': obj.definition?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallPortSet
 */
export interface NetworkFirewallPortSet {
  /**
   * @schema NetworkFirewallPortSet#Definition
   */
  readonly definition?: string[];

}

/**
 * Converts an object of type 'NetworkFirewallPortSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallPortSet(obj: NetworkFirewallPortSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Definition': obj.definition?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallRulesSourceList
 */
export interface NetworkFirewallRulesSourceList {
  /**
   * @schema NetworkFirewallRulesSourceList#Targets
   */
  readonly targets?: string[];

  /**
   * @schema NetworkFirewallRulesSourceList#TargetTypes
   */
  readonly targetTypes?: string[];

  /**
   * @schema NetworkFirewallRulesSourceList#GeneratedRulesType
   */
  readonly generatedRulesType?: string;

}

/**
 * Converts an object of type 'NetworkFirewallRulesSourceList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallRulesSourceList(obj: NetworkFirewallRulesSourceList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Targets': obj.targets?.map(y => y),
    'TargetTypes': obj.targetTypes?.map(y => y),
    'GeneratedRulesType': obj.generatedRulesType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallStatefulRule
 */
export interface NetworkFirewallStatefulRule {
  /**
   * @schema NetworkFirewallStatefulRule#Action
   */
  readonly action?: string;

  /**
   * @schema NetworkFirewallStatefulRule#Header
   */
  readonly header?: NetworkFirewallHeader;

  /**
   * @schema NetworkFirewallStatefulRule#RuleOptions
   */
  readonly ruleOptions?: NetworkFirewallRuleOption[];

}

/**
 * Converts an object of type 'NetworkFirewallStatefulRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallStatefulRule(obj: NetworkFirewallStatefulRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'Header': toJson_NetworkFirewallHeader(obj.header),
    'RuleOptions': obj.ruleOptions?.map(y => toJson_NetworkFirewallRuleOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallStatelessRulesAndCustomActions
 */
export interface NetworkFirewallStatelessRulesAndCustomActions {
  /**
   * @schema NetworkFirewallStatelessRulesAndCustomActions#StatelessRules
   */
  readonly statelessRules?: NetworkFirewallStatelessRule[];

  /**
   * @schema NetworkFirewallStatelessRulesAndCustomActions#CustomActions
   */
  readonly customActions?: NetworkFirewallCustomAction[];

}

/**
 * Converts an object of type 'NetworkFirewallStatelessRulesAndCustomActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallStatelessRulesAndCustomActions(obj: NetworkFirewallStatelessRulesAndCustomActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatelessRules': obj.statelessRules?.map(y => toJson_NetworkFirewallStatelessRule(y)),
    'CustomActions': obj.customActions?.map(y => toJson_NetworkFirewallCustomAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallPublishMetricAction
 */
export interface NetworkFirewallPublishMetricAction {
  /**
   * @schema NetworkFirewallPublishMetricAction#Dimensions
   */
  readonly dimensions?: NetworkFirewallDimension[];

}

/**
 * Converts an object of type 'NetworkFirewallPublishMetricAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallPublishMetricAction(obj: NetworkFirewallPublishMetricAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dimensions': obj.dimensions?.map(y => toJson_NetworkFirewallDimension(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallHeader
 */
export interface NetworkFirewallHeader {
  /**
   * @schema NetworkFirewallHeader#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema NetworkFirewallHeader#Source
   */
  readonly source?: string;

  /**
   * @schema NetworkFirewallHeader#SourcePort
   */
  readonly sourcePort?: string;

  /**
   * @schema NetworkFirewallHeader#Direction
   */
  readonly direction?: string;

  /**
   * @schema NetworkFirewallHeader#Destination
   */
  readonly destination?: string;

  /**
   * @schema NetworkFirewallHeader#DestinationPort
   */
  readonly destinationPort?: string;

}

/**
 * Converts an object of type 'NetworkFirewallHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallHeader(obj: NetworkFirewallHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Protocol': obj.protocol,
    'Source': obj.source,
    'SourcePort': obj.sourcePort,
    'Direction': obj.direction,
    'Destination': obj.destination,
    'DestinationPort': obj.destinationPort,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallRuleOption
 */
export interface NetworkFirewallRuleOption {
  /**
   * @schema NetworkFirewallRuleOption#Keyword
   */
  readonly keyword?: string;

  /**
   * @schema NetworkFirewallRuleOption#Settings
   */
  readonly settings?: string[];

}

/**
 * Converts an object of type 'NetworkFirewallRuleOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallRuleOption(obj: NetworkFirewallRuleOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Keyword': obj.keyword,
    'Settings': obj.settings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallStatelessRule
 */
export interface NetworkFirewallStatelessRule {
  /**
   * @schema NetworkFirewallStatelessRule#RuleDefinition
   */
  readonly ruleDefinition?: NetworkFirewallRuleDefinition;

  /**
   * @schema NetworkFirewallStatelessRule#Priority
   */
  readonly priority?: number;

}

/**
 * Converts an object of type 'NetworkFirewallStatelessRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallStatelessRule(obj: NetworkFirewallStatelessRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleDefinition': toJson_NetworkFirewallRuleDefinition(obj.ruleDefinition),
    'Priority': obj.priority,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallDimension
 */
export interface NetworkFirewallDimension {
  /**
   * @schema NetworkFirewallDimension#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'NetworkFirewallDimension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallDimension(obj: NetworkFirewallDimension | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallRuleDefinition
 */
export interface NetworkFirewallRuleDefinition {
  /**
   * @schema NetworkFirewallRuleDefinition#MatchAttributes
   */
  readonly matchAttributes?: NetworkFirewallMatchAttributes;

  /**
   * @schema NetworkFirewallRuleDefinition#Actions
   */
  readonly actions?: string[];

}

/**
 * Converts an object of type 'NetworkFirewallRuleDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallRuleDefinition(obj: NetworkFirewallRuleDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MatchAttributes': toJson_NetworkFirewallMatchAttributes(obj.matchAttributes),
    'Actions': obj.actions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallMatchAttributes
 */
export interface NetworkFirewallMatchAttributes {
  /**
   * @schema NetworkFirewallMatchAttributes#Sources
   */
  readonly sources?: NetworkFirewallAddress[];

  /**
   * @schema NetworkFirewallMatchAttributes#Destinations
   */
  readonly destinations?: NetworkFirewallAddress[];

  /**
   * @schema NetworkFirewallMatchAttributes#SourcePorts
   */
  readonly sourcePorts?: NetworkFirewallPortRange[];

  /**
   * @schema NetworkFirewallMatchAttributes#DestinationPorts
   */
  readonly destinationPorts?: NetworkFirewallPortRange[];

  /**
   * @schema NetworkFirewallMatchAttributes#Protocols
   */
  readonly protocols?: number[];

  /**
   * @schema NetworkFirewallMatchAttributes#TCPFlags
   */
  readonly tcpFlags?: NetworkFirewallTcpFlagField[];

}

/**
 * Converts an object of type 'NetworkFirewallMatchAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallMatchAttributes(obj: NetworkFirewallMatchAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sources': obj.sources?.map(y => toJson_NetworkFirewallAddress(y)),
    'Destinations': obj.destinations?.map(y => toJson_NetworkFirewallAddress(y)),
    'SourcePorts': obj.sourcePorts?.map(y => toJson_NetworkFirewallPortRange(y)),
    'DestinationPorts': obj.destinationPorts?.map(y => toJson_NetworkFirewallPortRange(y)),
    'Protocols': obj.protocols?.map(y => y),
    'TCPFlags': obj.tcpFlags?.map(y => toJson_NetworkFirewallTcpFlagField(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallAddress
 */
export interface NetworkFirewallAddress {
  /**
   * @schema NetworkFirewallAddress#AddressDefinition
   */
  readonly addressDefinition?: string;

}

/**
 * Converts an object of type 'NetworkFirewallAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallAddress(obj: NetworkFirewallAddress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressDefinition': obj.addressDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkFirewallPortRange
 */
export interface NetworkFirewallPortRange {
  /**
   * @schema NetworkFirewallPortRange#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema NetworkFirewallPortRange#ToPort
   */
  readonly toPort?: number;

}

/**
 * Converts an object of type 'NetworkFirewallPortRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallPortRange(obj: NetworkFirewallPortRange | undefined): Record<string, any> | undefined {
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
 * @schema NetworkFirewallTcpFlagField
 */
export interface NetworkFirewallTcpFlagField {
  /**
   * @schema NetworkFirewallTcpFlagField#Flags
   */
  readonly flags?: string[];

  /**
   * @schema NetworkFirewallTcpFlagField#Masks
   */
  readonly masks?: string[];

}

/**
 * Converts an object of type 'NetworkFirewallTcpFlagField' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkFirewallTcpFlagField(obj: NetworkFirewallTcpFlagField | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Flags': obj.flags?.map(y => y),
    'Masks': obj.masks?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
