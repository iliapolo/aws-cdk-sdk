/**
 * @schema Wafv2AssociateWebAclRequest
 */
export interface Wafv2AssociateWebAclRequest {
  /**
   * @schema Wafv2AssociateWebAclRequest#WebACLArn
   */
  readonly webAclArn?: string;

  /**
   * @schema Wafv2AssociateWebAclRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Wafv2AssociateWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2AssociateWebAclRequest(obj: Wafv2AssociateWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLArn': obj.webAclArn,
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2AssociateWebAclResponse
 */
export interface Wafv2AssociateWebAclResponse {
}

/**
 * Converts an object of type 'Wafv2AssociateWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2AssociateWebAclResponse(obj: Wafv2AssociateWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CheckCapacityRequest
 */
export interface Wafv2CheckCapacityRequest {
  /**
   * @schema Wafv2CheckCapacityRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2CheckCapacityRequest#Rules
   */
  readonly rules?: Wafv2Rule[];

}

/**
 * Converts an object of type 'Wafv2CheckCapacityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CheckCapacityRequest(obj: Wafv2CheckCapacityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'Rules': obj.rules?.map(y => toJson_Wafv2Rule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CheckCapacityResponse
 */
export interface Wafv2CheckCapacityResponse {
  /**
   * @schema Wafv2CheckCapacityResponse#Capacity
   */
  readonly capacity?: number;

}

/**
 * Converts an object of type 'Wafv2CheckCapacityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CheckCapacityResponse(obj: Wafv2CheckCapacityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Capacity': obj.capacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CreateIpSetRequest
 */
export interface Wafv2CreateIpSetRequest {
  /**
   * @schema Wafv2CreateIpSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2CreateIpSetRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2CreateIpSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2CreateIpSetRequest#IPAddressVersion
   */
  readonly ipAddressVersion?: string;

  /**
   * @schema Wafv2CreateIpSetRequest#Addresses
   */
  readonly addresses?: string[];

  /**
   * @schema Wafv2CreateIpSetRequest#Tags
   */
  readonly tags?: Wafv2Tag[];

}

/**
 * Converts an object of type 'Wafv2CreateIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CreateIpSetRequest(obj: Wafv2CreateIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Description': obj.description,
    'IPAddressVersion': obj.ipAddressVersion,
    'Addresses': obj.addresses?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_Wafv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CreateIpSetResponse
 */
export interface Wafv2CreateIpSetResponse {
  /**
   * @schema Wafv2CreateIpSetResponse#Summary
   */
  readonly summary?: Wafv2IpSetSummary;

}

/**
 * Converts an object of type 'Wafv2CreateIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CreateIpSetResponse(obj: Wafv2CreateIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Summary': toJson_Wafv2IpSetSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CreateRegexPatternSetRequest
 */
export interface Wafv2CreateRegexPatternSetRequest {
  /**
   * @schema Wafv2CreateRegexPatternSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2CreateRegexPatternSetRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2CreateRegexPatternSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2CreateRegexPatternSetRequest#RegularExpressionList
   */
  readonly regularExpressionList?: Wafv2Regex[];

  /**
   * @schema Wafv2CreateRegexPatternSetRequest#Tags
   */
  readonly tags?: Wafv2Tag[];

}

/**
 * Converts an object of type 'Wafv2CreateRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CreateRegexPatternSetRequest(obj: Wafv2CreateRegexPatternSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Description': obj.description,
    'RegularExpressionList': obj.regularExpressionList?.map(y => toJson_Wafv2Regex(y)),
    'Tags': obj.tags?.map(y => toJson_Wafv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CreateRegexPatternSetResponse
 */
export interface Wafv2CreateRegexPatternSetResponse {
  /**
   * @schema Wafv2CreateRegexPatternSetResponse#Summary
   */
  readonly summary?: Wafv2RegexPatternSetSummary;

}

/**
 * Converts an object of type 'Wafv2CreateRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CreateRegexPatternSetResponse(obj: Wafv2CreateRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Summary': toJson_Wafv2RegexPatternSetSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CreateRuleGroupRequest
 */
export interface Wafv2CreateRuleGroupRequest {
  /**
   * @schema Wafv2CreateRuleGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2CreateRuleGroupRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2CreateRuleGroupRequest#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema Wafv2CreateRuleGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2CreateRuleGroupRequest#Rules
   */
  readonly rules?: Wafv2Rule[];

  /**
   * @schema Wafv2CreateRuleGroupRequest#VisibilityConfig
   */
  readonly visibilityConfig?: Wafv2VisibilityConfig;

  /**
   * @schema Wafv2CreateRuleGroupRequest#Tags
   */
  readonly tags?: Wafv2Tag[];

  /**
   * @schema Wafv2CreateRuleGroupRequest#CustomResponseBodies
   */
  readonly customResponseBodies?: { [key: string]: Wafv2CustomResponseBody };

}

/**
 * Converts an object of type 'Wafv2CreateRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CreateRuleGroupRequest(obj: Wafv2CreateRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Capacity': obj.capacity,
    'Description': obj.description,
    'Rules': obj.rules?.map(y => toJson_Wafv2Rule(y)),
    'VisibilityConfig': toJson_Wafv2VisibilityConfig(obj.visibilityConfig),
    'Tags': obj.tags?.map(y => toJson_Wafv2Tag(y)),
    'CustomResponseBodies': ((obj.customResponseBodies) === undefined) ? undefined : (Object.entries(obj.customResponseBodies).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_Wafv2CustomResponseBody(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CreateRuleGroupResponse
 */
export interface Wafv2CreateRuleGroupResponse {
  /**
   * @schema Wafv2CreateRuleGroupResponse#Summary
   */
  readonly summary?: Wafv2RuleGroupSummary;

}

/**
 * Converts an object of type 'Wafv2CreateRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CreateRuleGroupResponse(obj: Wafv2CreateRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Summary': toJson_Wafv2RuleGroupSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CreateWebAclRequest
 */
export interface Wafv2CreateWebAclRequest {
  /**
   * @schema Wafv2CreateWebAclRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2CreateWebAclRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2CreateWebAclRequest#DefaultAction
   */
  readonly defaultAction?: Wafv2DefaultAction;

  /**
   * @schema Wafv2CreateWebAclRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2CreateWebAclRequest#Rules
   */
  readonly rules?: Wafv2Rule[];

  /**
   * @schema Wafv2CreateWebAclRequest#VisibilityConfig
   */
  readonly visibilityConfig?: Wafv2VisibilityConfig;

  /**
   * @schema Wafv2CreateWebAclRequest#Tags
   */
  readonly tags?: Wafv2Tag[];

  /**
   * @schema Wafv2CreateWebAclRequest#CustomResponseBodies
   */
  readonly customResponseBodies?: { [key: string]: Wafv2CustomResponseBody };

}

/**
 * Converts an object of type 'Wafv2CreateWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CreateWebAclRequest(obj: Wafv2CreateWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'DefaultAction': toJson_Wafv2DefaultAction(obj.defaultAction),
    'Description': obj.description,
    'Rules': obj.rules?.map(y => toJson_Wafv2Rule(y)),
    'VisibilityConfig': toJson_Wafv2VisibilityConfig(obj.visibilityConfig),
    'Tags': obj.tags?.map(y => toJson_Wafv2Tag(y)),
    'CustomResponseBodies': ((obj.customResponseBodies) === undefined) ? undefined : (Object.entries(obj.customResponseBodies).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_Wafv2CustomResponseBody(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CreateWebAclResponse
 */
export interface Wafv2CreateWebAclResponse {
  /**
   * @schema Wafv2CreateWebAclResponse#Summary
   */
  readonly summary?: Wafv2WebAclSummary;

}

/**
 * Converts an object of type 'Wafv2CreateWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CreateWebAclResponse(obj: Wafv2CreateWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Summary': toJson_Wafv2WebAclSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteFirewallManagerRuleGroupsRequest
 */
export interface Wafv2DeleteFirewallManagerRuleGroupsRequest {
  /**
   * @schema Wafv2DeleteFirewallManagerRuleGroupsRequest#WebACLArn
   */
  readonly webAclArn?: string;

  /**
   * @schema Wafv2DeleteFirewallManagerRuleGroupsRequest#WebACLLockToken
   */
  readonly webAclLockToken?: string;

}

/**
 * Converts an object of type 'Wafv2DeleteFirewallManagerRuleGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteFirewallManagerRuleGroupsRequest(obj: Wafv2DeleteFirewallManagerRuleGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLArn': obj.webAclArn,
    'WebACLLockToken': obj.webAclLockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteFirewallManagerRuleGroupsResponse
 */
export interface Wafv2DeleteFirewallManagerRuleGroupsResponse {
  /**
   * @schema Wafv2DeleteFirewallManagerRuleGroupsResponse#NextWebACLLockToken
   */
  readonly nextWebAclLockToken?: string;

}

/**
 * Converts an object of type 'Wafv2DeleteFirewallManagerRuleGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteFirewallManagerRuleGroupsResponse(obj: Wafv2DeleteFirewallManagerRuleGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextWebACLLockToken': obj.nextWebAclLockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteIpSetRequest
 */
export interface Wafv2DeleteIpSetRequest {
  /**
   * @schema Wafv2DeleteIpSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2DeleteIpSetRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2DeleteIpSetRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2DeleteIpSetRequest#LockToken
   */
  readonly lockToken?: string;

}

/**
 * Converts an object of type 'Wafv2DeleteIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteIpSetRequest(obj: Wafv2DeleteIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
    'LockToken': obj.lockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteIpSetResponse
 */
export interface Wafv2DeleteIpSetResponse {
}

/**
 * Converts an object of type 'Wafv2DeleteIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteIpSetResponse(obj: Wafv2DeleteIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteLoggingConfigurationRequest
 */
export interface Wafv2DeleteLoggingConfigurationRequest {
  /**
   * @schema Wafv2DeleteLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Wafv2DeleteLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteLoggingConfigurationRequest(obj: Wafv2DeleteLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteLoggingConfigurationResponse
 */
export interface Wafv2DeleteLoggingConfigurationResponse {
}

/**
 * Converts an object of type 'Wafv2DeleteLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteLoggingConfigurationResponse(obj: Wafv2DeleteLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeletePermissionPolicyRequest
 */
export interface Wafv2DeletePermissionPolicyRequest {
  /**
   * @schema Wafv2DeletePermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Wafv2DeletePermissionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeletePermissionPolicyRequest(obj: Wafv2DeletePermissionPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeletePermissionPolicyResponse
 */
export interface Wafv2DeletePermissionPolicyResponse {
}

/**
 * Converts an object of type 'Wafv2DeletePermissionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeletePermissionPolicyResponse(obj: Wafv2DeletePermissionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteRegexPatternSetRequest
 */
export interface Wafv2DeleteRegexPatternSetRequest {
  /**
   * @schema Wafv2DeleteRegexPatternSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2DeleteRegexPatternSetRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2DeleteRegexPatternSetRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2DeleteRegexPatternSetRequest#LockToken
   */
  readonly lockToken?: string;

}

/**
 * Converts an object of type 'Wafv2DeleteRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteRegexPatternSetRequest(obj: Wafv2DeleteRegexPatternSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
    'LockToken': obj.lockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteRegexPatternSetResponse
 */
export interface Wafv2DeleteRegexPatternSetResponse {
}

/**
 * Converts an object of type 'Wafv2DeleteRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteRegexPatternSetResponse(obj: Wafv2DeleteRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteRuleGroupRequest
 */
export interface Wafv2DeleteRuleGroupRequest {
  /**
   * @schema Wafv2DeleteRuleGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2DeleteRuleGroupRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2DeleteRuleGroupRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2DeleteRuleGroupRequest#LockToken
   */
  readonly lockToken?: string;

}

/**
 * Converts an object of type 'Wafv2DeleteRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteRuleGroupRequest(obj: Wafv2DeleteRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
    'LockToken': obj.lockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteRuleGroupResponse
 */
export interface Wafv2DeleteRuleGroupResponse {
}

/**
 * Converts an object of type 'Wafv2DeleteRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteRuleGroupResponse(obj: Wafv2DeleteRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteWebAclRequest
 */
export interface Wafv2DeleteWebAclRequest {
  /**
   * @schema Wafv2DeleteWebAclRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2DeleteWebAclRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2DeleteWebAclRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2DeleteWebAclRequest#LockToken
   */
  readonly lockToken?: string;

}

/**
 * Converts an object of type 'Wafv2DeleteWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteWebAclRequest(obj: Wafv2DeleteWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
    'LockToken': obj.lockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DeleteWebAclResponse
 */
export interface Wafv2DeleteWebAclResponse {
}

/**
 * Converts an object of type 'Wafv2DeleteWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DeleteWebAclResponse(obj: Wafv2DeleteWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DescribeManagedRuleGroupRequest
 */
export interface Wafv2DescribeManagedRuleGroupRequest {
  /**
   * @schema Wafv2DescribeManagedRuleGroupRequest#VendorName
   */
  readonly vendorName?: string;

  /**
   * @schema Wafv2DescribeManagedRuleGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2DescribeManagedRuleGroupRequest#Scope
   */
  readonly scope?: string;

}

/**
 * Converts an object of type 'Wafv2DescribeManagedRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DescribeManagedRuleGroupRequest(obj: Wafv2DescribeManagedRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VendorName': obj.vendorName,
    'Name': obj.name,
    'Scope': obj.scope,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DescribeManagedRuleGroupResponse
 */
export interface Wafv2DescribeManagedRuleGroupResponse {
  /**
   * @schema Wafv2DescribeManagedRuleGroupResponse#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema Wafv2DescribeManagedRuleGroupResponse#Rules
   */
  readonly rules?: Wafv2RuleSummary[];

  /**
   * @schema Wafv2DescribeManagedRuleGroupResponse#LabelNamespace
   */
  readonly labelNamespace?: string;

  /**
   * @schema Wafv2DescribeManagedRuleGroupResponse#AvailableLabels
   */
  readonly availableLabels?: Wafv2LabelSummary[];

  /**
   * @schema Wafv2DescribeManagedRuleGroupResponse#ConsumedLabels
   */
  readonly consumedLabels?: Wafv2LabelSummary[];

}

/**
 * Converts an object of type 'Wafv2DescribeManagedRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DescribeManagedRuleGroupResponse(obj: Wafv2DescribeManagedRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Capacity': obj.capacity,
    'Rules': obj.rules?.map(y => toJson_Wafv2RuleSummary(y)),
    'LabelNamespace': obj.labelNamespace,
    'AvailableLabels': obj.availableLabels?.map(y => toJson_Wafv2LabelSummary(y)),
    'ConsumedLabels': obj.consumedLabels?.map(y => toJson_Wafv2LabelSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DisassociateWebAclRequest
 */
export interface Wafv2DisassociateWebAclRequest {
  /**
   * @schema Wafv2DisassociateWebAclRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Wafv2DisassociateWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DisassociateWebAclRequest(obj: Wafv2DisassociateWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DisassociateWebAclResponse
 */
export interface Wafv2DisassociateWebAclResponse {
}

/**
 * Converts an object of type 'Wafv2DisassociateWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DisassociateWebAclResponse(obj: Wafv2DisassociateWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetIpSetRequest
 */
export interface Wafv2GetIpSetRequest {
  /**
   * @schema Wafv2GetIpSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2GetIpSetRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2GetIpSetRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Wafv2GetIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetIpSetRequest(obj: Wafv2GetIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetIpSetResponse
 */
export interface Wafv2GetIpSetResponse {
  /**
   * @schema Wafv2GetIpSetResponse#IPSet
   */
  readonly ipSet?: Wafv2IpSet;

  /**
   * @schema Wafv2GetIpSetResponse#LockToken
   */
  readonly lockToken?: string;

}

/**
 * Converts an object of type 'Wafv2GetIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetIpSetResponse(obj: Wafv2GetIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSet': toJson_Wafv2IpSet(obj.ipSet),
    'LockToken': obj.lockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetLoggingConfigurationRequest
 */
export interface Wafv2GetLoggingConfigurationRequest {
  /**
   * @schema Wafv2GetLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Wafv2GetLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetLoggingConfigurationRequest(obj: Wafv2GetLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetLoggingConfigurationResponse
 */
export interface Wafv2GetLoggingConfigurationResponse {
  /**
   * @schema Wafv2GetLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: Wafv2LoggingConfiguration;

}

/**
 * Converts an object of type 'Wafv2GetLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetLoggingConfigurationResponse(obj: Wafv2GetLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_Wafv2LoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetPermissionPolicyRequest
 */
export interface Wafv2GetPermissionPolicyRequest {
  /**
   * @schema Wafv2GetPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Wafv2GetPermissionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetPermissionPolicyRequest(obj: Wafv2GetPermissionPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetPermissionPolicyResponse
 */
export interface Wafv2GetPermissionPolicyResponse {
  /**
   * @schema Wafv2GetPermissionPolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'Wafv2GetPermissionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetPermissionPolicyResponse(obj: Wafv2GetPermissionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetRateBasedStatementManagedKeysRequest
 */
export interface Wafv2GetRateBasedStatementManagedKeysRequest {
  /**
   * @schema Wafv2GetRateBasedStatementManagedKeysRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2GetRateBasedStatementManagedKeysRequest#WebACLName
   */
  readonly webAclName?: string;

  /**
   * @schema Wafv2GetRateBasedStatementManagedKeysRequest#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema Wafv2GetRateBasedStatementManagedKeysRequest#RuleName
   */
  readonly ruleName?: string;

}

/**
 * Converts an object of type 'Wafv2GetRateBasedStatementManagedKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetRateBasedStatementManagedKeysRequest(obj: Wafv2GetRateBasedStatementManagedKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'WebACLName': obj.webAclName,
    'WebACLId': obj.webAclId,
    'RuleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetRateBasedStatementManagedKeysResponse
 */
export interface Wafv2GetRateBasedStatementManagedKeysResponse {
  /**
   * @schema Wafv2GetRateBasedStatementManagedKeysResponse#ManagedKeysIPV4
   */
  readonly managedKeysIpv4?: Wafv2RateBasedStatementManagedKeysIpSet;

  /**
   * @schema Wafv2GetRateBasedStatementManagedKeysResponse#ManagedKeysIPV6
   */
  readonly managedKeysIpv6?: Wafv2RateBasedStatementManagedKeysIpSet;

}

/**
 * Converts an object of type 'Wafv2GetRateBasedStatementManagedKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetRateBasedStatementManagedKeysResponse(obj: Wafv2GetRateBasedStatementManagedKeysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManagedKeysIPV4': toJson_Wafv2RateBasedStatementManagedKeysIpSet(obj.managedKeysIpv4),
    'ManagedKeysIPV6': toJson_Wafv2RateBasedStatementManagedKeysIpSet(obj.managedKeysIpv6),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetRegexPatternSetRequest
 */
export interface Wafv2GetRegexPatternSetRequest {
  /**
   * @schema Wafv2GetRegexPatternSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2GetRegexPatternSetRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2GetRegexPatternSetRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Wafv2GetRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetRegexPatternSetRequest(obj: Wafv2GetRegexPatternSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetRegexPatternSetResponse
 */
export interface Wafv2GetRegexPatternSetResponse {
  /**
   * @schema Wafv2GetRegexPatternSetResponse#RegexPatternSet
   */
  readonly regexPatternSet?: Wafv2RegexPatternSet;

  /**
   * @schema Wafv2GetRegexPatternSetResponse#LockToken
   */
  readonly lockToken?: string;

}

/**
 * Converts an object of type 'Wafv2GetRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetRegexPatternSetResponse(obj: Wafv2GetRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSet': toJson_Wafv2RegexPatternSet(obj.regexPatternSet),
    'LockToken': obj.lockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetRuleGroupRequest
 */
export interface Wafv2GetRuleGroupRequest {
  /**
   * @schema Wafv2GetRuleGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2GetRuleGroupRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2GetRuleGroupRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2GetRuleGroupRequest#ARN
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'Wafv2GetRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetRuleGroupRequest(obj: Wafv2GetRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetRuleGroupResponse
 */
export interface Wafv2GetRuleGroupResponse {
  /**
   * @schema Wafv2GetRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: Wafv2RuleGroup;

  /**
   * @schema Wafv2GetRuleGroupResponse#LockToken
   */
  readonly lockToken?: string;

}

/**
 * Converts an object of type 'Wafv2GetRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetRuleGroupResponse(obj: Wafv2GetRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroup': toJson_Wafv2RuleGroup(obj.ruleGroup),
    'LockToken': obj.lockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetSampledRequestsRequest
 */
export interface Wafv2GetSampledRequestsRequest {
  /**
   * @schema Wafv2GetSampledRequestsRequest#WebAclArn
   */
  readonly webAclArn?: string;

  /**
   * @schema Wafv2GetSampledRequestsRequest#RuleMetricName
   */
  readonly ruleMetricName?: string;

  /**
   * @schema Wafv2GetSampledRequestsRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2GetSampledRequestsRequest#TimeWindow
   */
  readonly timeWindow?: Wafv2TimeWindow;

  /**
   * @schema Wafv2GetSampledRequestsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'Wafv2GetSampledRequestsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetSampledRequestsRequest(obj: Wafv2GetSampledRequestsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebAclArn': obj.webAclArn,
    'RuleMetricName': obj.ruleMetricName,
    'Scope': obj.scope,
    'TimeWindow': toJson_Wafv2TimeWindow(obj.timeWindow),
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetSampledRequestsResponse
 */
export interface Wafv2GetSampledRequestsResponse {
  /**
   * @schema Wafv2GetSampledRequestsResponse#SampledRequests
   */
  readonly sampledRequests?: Wafv2SampledHttpRequest[];

  /**
   * @schema Wafv2GetSampledRequestsResponse#PopulationSize
   */
  readonly populationSize?: number;

  /**
   * @schema Wafv2GetSampledRequestsResponse#TimeWindow
   */
  readonly timeWindow?: Wafv2TimeWindow;

}

/**
 * Converts an object of type 'Wafv2GetSampledRequestsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetSampledRequestsResponse(obj: Wafv2GetSampledRequestsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SampledRequests': obj.sampledRequests?.map(y => toJson_Wafv2SampledHttpRequest(y)),
    'PopulationSize': obj.populationSize,
    'TimeWindow': toJson_Wafv2TimeWindow(obj.timeWindow),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetWebAclRequest
 */
export interface Wafv2GetWebAclRequest {
  /**
   * @schema Wafv2GetWebAclRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2GetWebAclRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2GetWebAclRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Wafv2GetWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetWebAclRequest(obj: Wafv2GetWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetWebAclResponse
 */
export interface Wafv2GetWebAclResponse {
  /**
   * @schema Wafv2GetWebAclResponse#WebACL
   */
  readonly webAcl?: Wafv2WebAcl;

  /**
   * @schema Wafv2GetWebAclResponse#LockToken
   */
  readonly lockToken?: string;

}

/**
 * Converts an object of type 'Wafv2GetWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetWebAclResponse(obj: Wafv2GetWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACL': toJson_Wafv2WebAcl(obj.webAcl),
    'LockToken': obj.lockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetWebAclForResourceRequest
 */
export interface Wafv2GetWebAclForResourceRequest {
  /**
   * @schema Wafv2GetWebAclForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Wafv2GetWebAclForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetWebAclForResourceRequest(obj: Wafv2GetWebAclForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GetWebAclForResourceResponse
 */
export interface Wafv2GetWebAclForResourceResponse {
  /**
   * @schema Wafv2GetWebAclForResourceResponse#WebACL
   */
  readonly webAcl?: Wafv2WebAcl;

}

/**
 * Converts an object of type 'Wafv2GetWebAclForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GetWebAclForResourceResponse(obj: Wafv2GetWebAclForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACL': toJson_Wafv2WebAcl(obj.webAcl),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListAvailableManagedRuleGroupsRequest
 */
export interface Wafv2ListAvailableManagedRuleGroupsRequest {
  /**
   * @schema Wafv2ListAvailableManagedRuleGroupsRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2ListAvailableManagedRuleGroupsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListAvailableManagedRuleGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'Wafv2ListAvailableManagedRuleGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListAvailableManagedRuleGroupsRequest(obj: Wafv2ListAvailableManagedRuleGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListAvailableManagedRuleGroupsResponse
 */
export interface Wafv2ListAvailableManagedRuleGroupsResponse {
  /**
   * @schema Wafv2ListAvailableManagedRuleGroupsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListAvailableManagedRuleGroupsResponse#ManagedRuleGroups
   */
  readonly managedRuleGroups?: Wafv2ManagedRuleGroupSummary[];

}

/**
 * Converts an object of type 'Wafv2ListAvailableManagedRuleGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListAvailableManagedRuleGroupsResponse(obj: Wafv2ListAvailableManagedRuleGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'ManagedRuleGroups': obj.managedRuleGroups?.map(y => toJson_Wafv2ManagedRuleGroupSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListIpSetsRequest
 */
export interface Wafv2ListIpSetsRequest {
  /**
   * @schema Wafv2ListIpSetsRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2ListIpSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListIpSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'Wafv2ListIpSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListIpSetsRequest(obj: Wafv2ListIpSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListIpSetsResponse
 */
export interface Wafv2ListIpSetsResponse {
  /**
   * @schema Wafv2ListIpSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListIpSetsResponse#IPSets
   */
  readonly ipSets?: Wafv2IpSetSummary[];

}

/**
 * Converts an object of type 'Wafv2ListIpSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListIpSetsResponse(obj: Wafv2ListIpSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'IPSets': obj.ipSets?.map(y => toJson_Wafv2IpSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListLoggingConfigurationsRequest
 */
export interface Wafv2ListLoggingConfigurationsRequest {
  /**
   * @schema Wafv2ListLoggingConfigurationsRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2ListLoggingConfigurationsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListLoggingConfigurationsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'Wafv2ListLoggingConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListLoggingConfigurationsRequest(obj: Wafv2ListLoggingConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListLoggingConfigurationsResponse
 */
export interface Wafv2ListLoggingConfigurationsResponse {
  /**
   * @schema Wafv2ListLoggingConfigurationsResponse#LoggingConfigurations
   */
  readonly loggingConfigurations?: Wafv2LoggingConfiguration[];

  /**
   * @schema Wafv2ListLoggingConfigurationsResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * Converts an object of type 'Wafv2ListLoggingConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListLoggingConfigurationsResponse(obj: Wafv2ListLoggingConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfigurations': obj.loggingConfigurations?.map(y => toJson_Wafv2LoggingConfiguration(y)),
    'NextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListRegexPatternSetsRequest
 */
export interface Wafv2ListRegexPatternSetsRequest {
  /**
   * @schema Wafv2ListRegexPatternSetsRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2ListRegexPatternSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListRegexPatternSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'Wafv2ListRegexPatternSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListRegexPatternSetsRequest(obj: Wafv2ListRegexPatternSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListRegexPatternSetsResponse
 */
export interface Wafv2ListRegexPatternSetsResponse {
  /**
   * @schema Wafv2ListRegexPatternSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListRegexPatternSetsResponse#RegexPatternSets
   */
  readonly regexPatternSets?: Wafv2RegexPatternSetSummary[];

}

/**
 * Converts an object of type 'Wafv2ListRegexPatternSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListRegexPatternSetsResponse(obj: Wafv2ListRegexPatternSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'RegexPatternSets': obj.regexPatternSets?.map(y => toJson_Wafv2RegexPatternSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListResourcesForWebAclRequest
 */
export interface Wafv2ListResourcesForWebAclRequest {
  /**
   * @schema Wafv2ListResourcesForWebAclRequest#WebACLArn
   */
  readonly webAclArn?: string;

  /**
   * @schema Wafv2ListResourcesForWebAclRequest#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'Wafv2ListResourcesForWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListResourcesForWebAclRequest(obj: Wafv2ListResourcesForWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLArn': obj.webAclArn,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListResourcesForWebAclResponse
 */
export interface Wafv2ListResourcesForWebAclResponse {
  /**
   * @schema Wafv2ListResourcesForWebAclResponse#ResourceArns
   */
  readonly resourceArns?: string[];

}

/**
 * Converts an object of type 'Wafv2ListResourcesForWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListResourcesForWebAclResponse(obj: Wafv2ListResourcesForWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArns': obj.resourceArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListRuleGroupsRequest
 */
export interface Wafv2ListRuleGroupsRequest {
  /**
   * @schema Wafv2ListRuleGroupsRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2ListRuleGroupsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListRuleGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'Wafv2ListRuleGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListRuleGroupsRequest(obj: Wafv2ListRuleGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListRuleGroupsResponse
 */
export interface Wafv2ListRuleGroupsResponse {
  /**
   * @schema Wafv2ListRuleGroupsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListRuleGroupsResponse#RuleGroups
   */
  readonly ruleGroups?: Wafv2RuleGroupSummary[];

}

/**
 * Converts an object of type 'Wafv2ListRuleGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListRuleGroupsResponse(obj: Wafv2ListRuleGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'RuleGroups': obj.ruleGroups?.map(y => toJson_Wafv2RuleGroupSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListTagsForResourceRequest
 */
export interface Wafv2ListTagsForResourceRequest {
  /**
   * @schema Wafv2ListTagsForResourceRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListTagsForResourceRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema Wafv2ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Wafv2ListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListTagsForResourceRequest(obj: Wafv2ListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListTagsForResourceResponse
 */
export interface Wafv2ListTagsForResourceResponse {
  /**
   * @schema Wafv2ListTagsForResourceResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListTagsForResourceResponse#TagInfoForResource
   */
  readonly tagInfoForResource?: Wafv2TagInfoForResource;

}

/**
 * Converts an object of type 'Wafv2ListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListTagsForResourceResponse(obj: Wafv2ListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'TagInfoForResource': toJson_Wafv2TagInfoForResource(obj.tagInfoForResource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListWebAcLsRequest
 */
export interface Wafv2ListWebAcLsRequest {
  /**
   * @schema Wafv2ListWebAcLsRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2ListWebAcLsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListWebAcLsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'Wafv2ListWebAcLsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListWebAcLsRequest(obj: Wafv2ListWebAcLsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ListWebAcLsResponse
 */
export interface Wafv2ListWebAcLsResponse {
  /**
   * @schema Wafv2ListWebAcLsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Wafv2ListWebAcLsResponse#WebACLs
   */
  readonly webAcLs?: Wafv2WebAclSummary[];

}

/**
 * Converts an object of type 'Wafv2ListWebAcLsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ListWebAcLsResponse(obj: Wafv2ListWebAcLsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'WebACLs': obj.webAcLs?.map(y => toJson_Wafv2WebAclSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2PutLoggingConfigurationRequest
 */
export interface Wafv2PutLoggingConfigurationRequest {
  /**
   * @schema Wafv2PutLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration?: Wafv2LoggingConfiguration;

}

/**
 * Converts an object of type 'Wafv2PutLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2PutLoggingConfigurationRequest(obj: Wafv2PutLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_Wafv2LoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2PutLoggingConfigurationResponse
 */
export interface Wafv2PutLoggingConfigurationResponse {
  /**
   * @schema Wafv2PutLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: Wafv2LoggingConfiguration;

}

/**
 * Converts an object of type 'Wafv2PutLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2PutLoggingConfigurationResponse(obj: Wafv2PutLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_Wafv2LoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2PutPermissionPolicyRequest
 */
export interface Wafv2PutPermissionPolicyRequest {
  /**
   * @schema Wafv2PutPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Wafv2PutPermissionPolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'Wafv2PutPermissionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2PutPermissionPolicyRequest(obj: Wafv2PutPermissionPolicyRequest | undefined): Record<string, any> | undefined {
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
 * @schema Wafv2PutPermissionPolicyResponse
 */
export interface Wafv2PutPermissionPolicyResponse {
}

/**
 * Converts an object of type 'Wafv2PutPermissionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2PutPermissionPolicyResponse(obj: Wafv2PutPermissionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2TagResourceRequest
 */
export interface Wafv2TagResourceRequest {
  /**
   * @schema Wafv2TagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema Wafv2TagResourceRequest#Tags
   */
  readonly tags?: Wafv2Tag[];

}

/**
 * Converts an object of type 'Wafv2TagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2TagResourceRequest(obj: Wafv2TagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_Wafv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2TagResourceResponse
 */
export interface Wafv2TagResourceResponse {
}

/**
 * Converts an object of type 'Wafv2TagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2TagResourceResponse(obj: Wafv2TagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UntagResourceRequest
 */
export interface Wafv2UntagResourceRequest {
  /**
   * @schema Wafv2UntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema Wafv2UntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'Wafv2UntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UntagResourceRequest(obj: Wafv2UntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UntagResourceResponse
 */
export interface Wafv2UntagResourceResponse {
}

/**
 * Converts an object of type 'Wafv2UntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UntagResourceResponse(obj: Wafv2UntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UpdateIpSetRequest
 */
export interface Wafv2UpdateIpSetRequest {
  /**
   * @schema Wafv2UpdateIpSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2UpdateIpSetRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2UpdateIpSetRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2UpdateIpSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2UpdateIpSetRequest#Addresses
   */
  readonly addresses?: string[];

  /**
   * @schema Wafv2UpdateIpSetRequest#LockToken
   */
  readonly lockToken?: string;

}

/**
 * Converts an object of type 'Wafv2UpdateIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UpdateIpSetRequest(obj: Wafv2UpdateIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
    'Description': obj.description,
    'Addresses': obj.addresses?.map(y => y),
    'LockToken': obj.lockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UpdateIpSetResponse
 */
export interface Wafv2UpdateIpSetResponse {
  /**
   * @schema Wafv2UpdateIpSetResponse#NextLockToken
   */
  readonly nextLockToken?: string;

}

/**
 * Converts an object of type 'Wafv2UpdateIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UpdateIpSetResponse(obj: Wafv2UpdateIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextLockToken': obj.nextLockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UpdateRegexPatternSetRequest
 */
export interface Wafv2UpdateRegexPatternSetRequest {
  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#RegularExpressionList
   */
  readonly regularExpressionList?: Wafv2Regex[];

  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#LockToken
   */
  readonly lockToken?: string;

}

/**
 * Converts an object of type 'Wafv2UpdateRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UpdateRegexPatternSetRequest(obj: Wafv2UpdateRegexPatternSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
    'Description': obj.description,
    'RegularExpressionList': obj.regularExpressionList?.map(y => toJson_Wafv2Regex(y)),
    'LockToken': obj.lockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UpdateRegexPatternSetResponse
 */
export interface Wafv2UpdateRegexPatternSetResponse {
  /**
   * @schema Wafv2UpdateRegexPatternSetResponse#NextLockToken
   */
  readonly nextLockToken?: string;

}

/**
 * Converts an object of type 'Wafv2UpdateRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UpdateRegexPatternSetResponse(obj: Wafv2UpdateRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextLockToken': obj.nextLockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UpdateRuleGroupRequest
 */
export interface Wafv2UpdateRuleGroupRequest {
  /**
   * @schema Wafv2UpdateRuleGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2UpdateRuleGroupRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2UpdateRuleGroupRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2UpdateRuleGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2UpdateRuleGroupRequest#Rules
   */
  readonly rules?: Wafv2Rule[];

  /**
   * @schema Wafv2UpdateRuleGroupRequest#VisibilityConfig
   */
  readonly visibilityConfig?: Wafv2VisibilityConfig;

  /**
   * @schema Wafv2UpdateRuleGroupRequest#LockToken
   */
  readonly lockToken?: string;

  /**
   * @schema Wafv2UpdateRuleGroupRequest#CustomResponseBodies
   */
  readonly customResponseBodies?: { [key: string]: Wafv2CustomResponseBody };

}

/**
 * Converts an object of type 'Wafv2UpdateRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UpdateRuleGroupRequest(obj: Wafv2UpdateRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
    'Description': obj.description,
    'Rules': obj.rules?.map(y => toJson_Wafv2Rule(y)),
    'VisibilityConfig': toJson_Wafv2VisibilityConfig(obj.visibilityConfig),
    'LockToken': obj.lockToken,
    'CustomResponseBodies': ((obj.customResponseBodies) === undefined) ? undefined : (Object.entries(obj.customResponseBodies).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_Wafv2CustomResponseBody(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UpdateRuleGroupResponse
 */
export interface Wafv2UpdateRuleGroupResponse {
  /**
   * @schema Wafv2UpdateRuleGroupResponse#NextLockToken
   */
  readonly nextLockToken?: string;

}

/**
 * Converts an object of type 'Wafv2UpdateRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UpdateRuleGroupResponse(obj: Wafv2UpdateRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextLockToken': obj.nextLockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UpdateWebAclRequest
 */
export interface Wafv2UpdateWebAclRequest {
  /**
   * @schema Wafv2UpdateWebAclRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2UpdateWebAclRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2UpdateWebAclRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2UpdateWebAclRequest#DefaultAction
   */
  readonly defaultAction?: Wafv2DefaultAction;

  /**
   * @schema Wafv2UpdateWebAclRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2UpdateWebAclRequest#Rules
   */
  readonly rules?: Wafv2Rule[];

  /**
   * @schema Wafv2UpdateWebAclRequest#VisibilityConfig
   */
  readonly visibilityConfig?: Wafv2VisibilityConfig;

  /**
   * @schema Wafv2UpdateWebAclRequest#LockToken
   */
  readonly lockToken?: string;

  /**
   * @schema Wafv2UpdateWebAclRequest#CustomResponseBodies
   */
  readonly customResponseBodies?: { [key: string]: Wafv2CustomResponseBody };

}

/**
 * Converts an object of type 'Wafv2UpdateWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UpdateWebAclRequest(obj: Wafv2UpdateWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Scope': obj.scope,
    'Id': obj.id,
    'DefaultAction': toJson_Wafv2DefaultAction(obj.defaultAction),
    'Description': obj.description,
    'Rules': obj.rules?.map(y => toJson_Wafv2Rule(y)),
    'VisibilityConfig': toJson_Wafv2VisibilityConfig(obj.visibilityConfig),
    'LockToken': obj.lockToken,
    'CustomResponseBodies': ((obj.customResponseBodies) === undefined) ? undefined : (Object.entries(obj.customResponseBodies).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_Wafv2CustomResponseBody(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UpdateWebAclResponse
 */
export interface Wafv2UpdateWebAclResponse {
  /**
   * @schema Wafv2UpdateWebAclResponse#NextLockToken
   */
  readonly nextLockToken?: string;

}

/**
 * Converts an object of type 'Wafv2UpdateWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UpdateWebAclResponse(obj: Wafv2UpdateWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextLockToken': obj.nextLockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2Rule
 */
export interface Wafv2Rule {
  /**
   * @schema Wafv2Rule#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2Rule#Priority
   */
  readonly priority?: number;

  /**
   * @schema Wafv2Rule#Statement
   */
  readonly statement?: Wafv2Statement;

  /**
   * @schema Wafv2Rule#Action
   */
  readonly action?: Wafv2RuleAction;

  /**
   * @schema Wafv2Rule#OverrideAction
   */
  readonly overrideAction?: Wafv2OverrideAction;

  /**
   * @schema Wafv2Rule#RuleLabels
   */
  readonly ruleLabels?: Wafv2Label[];

  /**
   * @schema Wafv2Rule#VisibilityConfig
   */
  readonly visibilityConfig?: Wafv2VisibilityConfig;

}

/**
 * Converts an object of type 'Wafv2Rule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2Rule(obj: Wafv2Rule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Priority': obj.priority,
    'Statement': toJson_Wafv2Statement(obj.statement),
    'Action': toJson_Wafv2RuleAction(obj.action),
    'OverrideAction': toJson_Wafv2OverrideAction(obj.overrideAction),
    'RuleLabels': obj.ruleLabels?.map(y => toJson_Wafv2Label(y)),
    'VisibilityConfig': toJson_Wafv2VisibilityConfig(obj.visibilityConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2Tag
 */
export interface Wafv2Tag {
  /**
   * @schema Wafv2Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Wafv2Tag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Wafv2Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2Tag(obj: Wafv2Tag | undefined): Record<string, any> | undefined {
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
 * @schema Wafv2IpSetSummary
 */
export interface Wafv2IpSetSummary {
  /**
   * @schema Wafv2IpSetSummary#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2IpSetSummary#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2IpSetSummary#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2IpSetSummary#LockToken
   */
  readonly lockToken?: string;

  /**
   * @schema Wafv2IpSetSummary#ARN
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'Wafv2IpSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2IpSetSummary(obj: Wafv2IpSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Id': obj.id,
    'Description': obj.description,
    'LockToken': obj.lockToken,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2Regex
 */
export interface Wafv2Regex {
  /**
   * @schema Wafv2Regex#RegexString
   */
  readonly regexString?: string;

}

/**
 * Converts an object of type 'Wafv2Regex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2Regex(obj: Wafv2Regex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexString': obj.regexString,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2RegexPatternSetSummary
 */
export interface Wafv2RegexPatternSetSummary {
  /**
   * @schema Wafv2RegexPatternSetSummary#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2RegexPatternSetSummary#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2RegexPatternSetSummary#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2RegexPatternSetSummary#LockToken
   */
  readonly lockToken?: string;

  /**
   * @schema Wafv2RegexPatternSetSummary#ARN
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'Wafv2RegexPatternSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2RegexPatternSetSummary(obj: Wafv2RegexPatternSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Id': obj.id,
    'Description': obj.description,
    'LockToken': obj.lockToken,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2VisibilityConfig
 */
export interface Wafv2VisibilityConfig {
  /**
   * @schema Wafv2VisibilityConfig#SampledRequestsEnabled
   */
  readonly sampledRequestsEnabled?: boolean;

  /**
   * @schema Wafv2VisibilityConfig#CloudWatchMetricsEnabled
   */
  readonly cloudWatchMetricsEnabled?: boolean;

  /**
   * @schema Wafv2VisibilityConfig#MetricName
   */
  readonly metricName?: string;

}

/**
 * Converts an object of type 'Wafv2VisibilityConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2VisibilityConfig(obj: Wafv2VisibilityConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SampledRequestsEnabled': obj.sampledRequestsEnabled,
    'CloudWatchMetricsEnabled': obj.cloudWatchMetricsEnabled,
    'MetricName': obj.metricName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CustomResponseBody
 */
export interface Wafv2CustomResponseBody {
  /**
   * @schema Wafv2CustomResponseBody#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema Wafv2CustomResponseBody#Content
   */
  readonly content?: string;

}

/**
 * Converts an object of type 'Wafv2CustomResponseBody' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CustomResponseBody(obj: Wafv2CustomResponseBody | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2RuleGroupSummary
 */
export interface Wafv2RuleGroupSummary {
  /**
   * @schema Wafv2RuleGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2RuleGroupSummary#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2RuleGroupSummary#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2RuleGroupSummary#LockToken
   */
  readonly lockToken?: string;

  /**
   * @schema Wafv2RuleGroupSummary#ARN
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'Wafv2RuleGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2RuleGroupSummary(obj: Wafv2RuleGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Id': obj.id,
    'Description': obj.description,
    'LockToken': obj.lockToken,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2DefaultAction
 */
export interface Wafv2DefaultAction {
  /**
   * @schema Wafv2DefaultAction#Block
   */
  readonly block?: Wafv2BlockAction;

  /**
   * @schema Wafv2DefaultAction#Allow
   */
  readonly allow?: Wafv2AllowAction;

}

/**
 * Converts an object of type 'Wafv2DefaultAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2DefaultAction(obj: Wafv2DefaultAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Block': toJson_Wafv2BlockAction(obj.block),
    'Allow': toJson_Wafv2AllowAction(obj.allow),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2WebAclSummary
 */
export interface Wafv2WebAclSummary {
  /**
   * @schema Wafv2WebAclSummary#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2WebAclSummary#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2WebAclSummary#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2WebAclSummary#LockToken
   */
  readonly lockToken?: string;

  /**
   * @schema Wafv2WebAclSummary#ARN
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'Wafv2WebAclSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2WebAclSummary(obj: Wafv2WebAclSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Id': obj.id,
    'Description': obj.description,
    'LockToken': obj.lockToken,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2RuleSummary
 */
export interface Wafv2RuleSummary {
  /**
   * @schema Wafv2RuleSummary#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2RuleSummary#Action
   */
  readonly action?: Wafv2RuleAction;

}

/**
 * Converts an object of type 'Wafv2RuleSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2RuleSummary(obj: Wafv2RuleSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Action': toJson_Wafv2RuleAction(obj.action),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2LabelSummary
 */
export interface Wafv2LabelSummary {
  /**
   * @schema Wafv2LabelSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Wafv2LabelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2LabelSummary(obj: Wafv2LabelSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2IpSet
 */
export interface Wafv2IpSet {
  /**
   * @schema Wafv2IpSet#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2IpSet#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2IpSet#ARN
   */
  readonly arn?: string;

  /**
   * @schema Wafv2IpSet#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2IpSet#IPAddressVersion
   */
  readonly ipAddressVersion?: string;

  /**
   * @schema Wafv2IpSet#Addresses
   */
  readonly addresses?: string[];

}

/**
 * Converts an object of type 'Wafv2IpSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2IpSet(obj: Wafv2IpSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Id': obj.id,
    'ARN': obj.arn,
    'Description': obj.description,
    'IPAddressVersion': obj.ipAddressVersion,
    'Addresses': obj.addresses?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2LoggingConfiguration
 */
export interface Wafv2LoggingConfiguration {
  /**
   * @schema Wafv2LoggingConfiguration#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Wafv2LoggingConfiguration#LogDestinationConfigs
   */
  readonly logDestinationConfigs?: string[];

  /**
   * @schema Wafv2LoggingConfiguration#RedactedFields
   */
  readonly redactedFields?: Wafv2FieldToMatch[];

  /**
   * @schema Wafv2LoggingConfiguration#ManagedByFirewallManager
   */
  readonly managedByFirewallManager?: boolean;

  /**
   * @schema Wafv2LoggingConfiguration#LoggingFilter
   */
  readonly loggingFilter?: Wafv2LoggingFilter;

}

/**
 * Converts an object of type 'Wafv2LoggingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2LoggingConfiguration(obj: Wafv2LoggingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'LogDestinationConfigs': obj.logDestinationConfigs?.map(y => y),
    'RedactedFields': obj.redactedFields?.map(y => toJson_Wafv2FieldToMatch(y)),
    'ManagedByFirewallManager': obj.managedByFirewallManager,
    'LoggingFilter': toJson_Wafv2LoggingFilter(obj.loggingFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2RateBasedStatementManagedKeysIpSet
 */
export interface Wafv2RateBasedStatementManagedKeysIpSet {
  /**
   * @schema Wafv2RateBasedStatementManagedKeysIpSet#IPAddressVersion
   */
  readonly ipAddressVersion?: string;

  /**
   * @schema Wafv2RateBasedStatementManagedKeysIpSet#Addresses
   */
  readonly addresses?: string[];

}

/**
 * Converts an object of type 'Wafv2RateBasedStatementManagedKeysIpSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2RateBasedStatementManagedKeysIpSet(obj: Wafv2RateBasedStatementManagedKeysIpSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPAddressVersion': obj.ipAddressVersion,
    'Addresses': obj.addresses?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2RegexPatternSet
 */
export interface Wafv2RegexPatternSet {
  /**
   * @schema Wafv2RegexPatternSet#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2RegexPatternSet#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2RegexPatternSet#ARN
   */
  readonly arn?: string;

  /**
   * @schema Wafv2RegexPatternSet#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2RegexPatternSet#RegularExpressionList
   */
  readonly regularExpressionList?: Wafv2Regex[];

}

/**
 * Converts an object of type 'Wafv2RegexPatternSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2RegexPatternSet(obj: Wafv2RegexPatternSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Id': obj.id,
    'ARN': obj.arn,
    'Description': obj.description,
    'RegularExpressionList': obj.regularExpressionList?.map(y => toJson_Wafv2Regex(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2RuleGroup
 */
export interface Wafv2RuleGroup {
  /**
   * @schema Wafv2RuleGroup#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2RuleGroup#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2RuleGroup#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema Wafv2RuleGroup#ARN
   */
  readonly arn?: string;

  /**
   * @schema Wafv2RuleGroup#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2RuleGroup#Rules
   */
  readonly rules?: Wafv2Rule[];

  /**
   * @schema Wafv2RuleGroup#VisibilityConfig
   */
  readonly visibilityConfig?: Wafv2VisibilityConfig;

  /**
   * @schema Wafv2RuleGroup#LabelNamespace
   */
  readonly labelNamespace?: string;

  /**
   * @schema Wafv2RuleGroup#CustomResponseBodies
   */
  readonly customResponseBodies?: { [key: string]: Wafv2CustomResponseBody };

  /**
   * @schema Wafv2RuleGroup#AvailableLabels
   */
  readonly availableLabels?: Wafv2LabelSummary[];

  /**
   * @schema Wafv2RuleGroup#ConsumedLabels
   */
  readonly consumedLabels?: Wafv2LabelSummary[];

}

/**
 * Converts an object of type 'Wafv2RuleGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2RuleGroup(obj: Wafv2RuleGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Id': obj.id,
    'Capacity': obj.capacity,
    'ARN': obj.arn,
    'Description': obj.description,
    'Rules': obj.rules?.map(y => toJson_Wafv2Rule(y)),
    'VisibilityConfig': toJson_Wafv2VisibilityConfig(obj.visibilityConfig),
    'LabelNamespace': obj.labelNamespace,
    'CustomResponseBodies': ((obj.customResponseBodies) === undefined) ? undefined : (Object.entries(obj.customResponseBodies).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_Wafv2CustomResponseBody(i[1]) }), {})),
    'AvailableLabels': obj.availableLabels?.map(y => toJson_Wafv2LabelSummary(y)),
    'ConsumedLabels': obj.consumedLabels?.map(y => toJson_Wafv2LabelSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2TimeWindow
 */
export interface Wafv2TimeWindow {
  /**
   * @schema Wafv2TimeWindow#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Wafv2TimeWindow#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'Wafv2TimeWindow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2TimeWindow(obj: Wafv2TimeWindow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2SampledHttpRequest
 */
export interface Wafv2SampledHttpRequest {
  /**
   * @schema Wafv2SampledHttpRequest#Request
   */
  readonly request?: Wafv2HttpRequest;

  /**
   * @schema Wafv2SampledHttpRequest#Weight
   */
  readonly weight?: number;

  /**
   * @schema Wafv2SampledHttpRequest#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema Wafv2SampledHttpRequest#Action
   */
  readonly action?: string;

  /**
   * @schema Wafv2SampledHttpRequest#RuleNameWithinRuleGroup
   */
  readonly ruleNameWithinRuleGroup?: string;

  /**
   * @schema Wafv2SampledHttpRequest#RequestHeadersInserted
   */
  readonly requestHeadersInserted?: Wafv2HttpHeader[];

  /**
   * @schema Wafv2SampledHttpRequest#ResponseCodeSent
   */
  readonly responseCodeSent?: number;

  /**
   * @schema Wafv2SampledHttpRequest#Labels
   */
  readonly labels?: Wafv2Label[];

}

/**
 * Converts an object of type 'Wafv2SampledHttpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2SampledHttpRequest(obj: Wafv2SampledHttpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Request': toJson_Wafv2HttpRequest(obj.request),
    'Weight': obj.weight,
    'Timestamp': obj.timestamp,
    'Action': obj.action,
    'RuleNameWithinRuleGroup': obj.ruleNameWithinRuleGroup,
    'RequestHeadersInserted': obj.requestHeadersInserted?.map(y => toJson_Wafv2HttpHeader(y)),
    'ResponseCodeSent': obj.responseCodeSent,
    'Labels': obj.labels?.map(y => toJson_Wafv2Label(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2WebAcl
 */
export interface Wafv2WebAcl {
  /**
   * @schema Wafv2WebAcl#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2WebAcl#Id
   */
  readonly id?: string;

  /**
   * @schema Wafv2WebAcl#ARN
   */
  readonly arn?: string;

  /**
   * @schema Wafv2WebAcl#DefaultAction
   */
  readonly defaultAction?: Wafv2DefaultAction;

  /**
   * @schema Wafv2WebAcl#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2WebAcl#Rules
   */
  readonly rules?: Wafv2Rule[];

  /**
   * @schema Wafv2WebAcl#VisibilityConfig
   */
  readonly visibilityConfig?: Wafv2VisibilityConfig;

  /**
   * @schema Wafv2WebAcl#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema Wafv2WebAcl#PreProcessFirewallManagerRuleGroups
   */
  readonly preProcessFirewallManagerRuleGroups?: Wafv2FirewallManagerRuleGroup[];

  /**
   * @schema Wafv2WebAcl#PostProcessFirewallManagerRuleGroups
   */
  readonly postProcessFirewallManagerRuleGroups?: Wafv2FirewallManagerRuleGroup[];

  /**
   * @schema Wafv2WebAcl#ManagedByFirewallManager
   */
  readonly managedByFirewallManager?: boolean;

  /**
   * @schema Wafv2WebAcl#LabelNamespace
   */
  readonly labelNamespace?: string;

  /**
   * @schema Wafv2WebAcl#CustomResponseBodies
   */
  readonly customResponseBodies?: { [key: string]: Wafv2CustomResponseBody };

}

/**
 * Converts an object of type 'Wafv2WebAcl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2WebAcl(obj: Wafv2WebAcl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Id': obj.id,
    'ARN': obj.arn,
    'DefaultAction': toJson_Wafv2DefaultAction(obj.defaultAction),
    'Description': obj.description,
    'Rules': obj.rules?.map(y => toJson_Wafv2Rule(y)),
    'VisibilityConfig': toJson_Wafv2VisibilityConfig(obj.visibilityConfig),
    'Capacity': obj.capacity,
    'PreProcessFirewallManagerRuleGroups': obj.preProcessFirewallManagerRuleGroups?.map(y => toJson_Wafv2FirewallManagerRuleGroup(y)),
    'PostProcessFirewallManagerRuleGroups': obj.postProcessFirewallManagerRuleGroups?.map(y => toJson_Wafv2FirewallManagerRuleGroup(y)),
    'ManagedByFirewallManager': obj.managedByFirewallManager,
    'LabelNamespace': obj.labelNamespace,
    'CustomResponseBodies': ((obj.customResponseBodies) === undefined) ? undefined : (Object.entries(obj.customResponseBodies).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_Wafv2CustomResponseBody(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ManagedRuleGroupSummary
 */
export interface Wafv2ManagedRuleGroupSummary {
  /**
   * @schema Wafv2ManagedRuleGroupSummary#VendorName
   */
  readonly vendorName?: string;

  /**
   * @schema Wafv2ManagedRuleGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2ManagedRuleGroupSummary#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'Wafv2ManagedRuleGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ManagedRuleGroupSummary(obj: Wafv2ManagedRuleGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VendorName': obj.vendorName,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2TagInfoForResource
 */
export interface Wafv2TagInfoForResource {
  /**
   * @schema Wafv2TagInfoForResource#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema Wafv2TagInfoForResource#TagList
   */
  readonly tagList?: Wafv2Tag[];

}

/**
 * Converts an object of type 'Wafv2TagInfoForResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2TagInfoForResource(obj: Wafv2TagInfoForResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagList': obj.tagList?.map(y => toJson_Wafv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2Statement
 */
export interface Wafv2Statement {
  /**
   * @schema Wafv2Statement#ByteMatchStatement
   */
  readonly byteMatchStatement?: Wafv2ByteMatchStatement;

  /**
   * @schema Wafv2Statement#SqliMatchStatement
   */
  readonly sqliMatchStatement?: Wafv2SqliMatchStatement;

  /**
   * @schema Wafv2Statement#XssMatchStatement
   */
  readonly xssMatchStatement?: Wafv2XssMatchStatement;

  /**
   * @schema Wafv2Statement#SizeConstraintStatement
   */
  readonly sizeConstraintStatement?: Wafv2SizeConstraintStatement;

  /**
   * @schema Wafv2Statement#GeoMatchStatement
   */
  readonly geoMatchStatement?: Wafv2GeoMatchStatement;

  /**
   * @schema Wafv2Statement#RuleGroupReferenceStatement
   */
  readonly ruleGroupReferenceStatement?: Wafv2RuleGroupReferenceStatement;

  /**
   * @schema Wafv2Statement#IPSetReferenceStatement
   */
  readonly ipSetReferenceStatement?: Wafv2IpSetReferenceStatement;

  /**
   * @schema Wafv2Statement#RegexPatternSetReferenceStatement
   */
  readonly regexPatternSetReferenceStatement?: Wafv2RegexPatternSetReferenceStatement;

  /**
   * @schema Wafv2Statement#RateBasedStatement
   */
  readonly rateBasedStatement?: Wafv2RateBasedStatement;

  /**
   * @schema Wafv2Statement#AndStatement
   */
  readonly andStatement?: Wafv2AndStatement;

  /**
   * @schema Wafv2Statement#OrStatement
   */
  readonly orStatement?: Wafv2OrStatement;

  /**
   * @schema Wafv2Statement#NotStatement
   */
  readonly notStatement?: Wafv2NotStatement;

  /**
   * @schema Wafv2Statement#ManagedRuleGroupStatement
   */
  readonly managedRuleGroupStatement?: Wafv2ManagedRuleGroupStatement;

  /**
   * @schema Wafv2Statement#LabelMatchStatement
   */
  readonly labelMatchStatement?: Wafv2LabelMatchStatement;

}

/**
 * Converts an object of type 'Wafv2Statement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2Statement(obj: Wafv2Statement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchStatement': toJson_Wafv2ByteMatchStatement(obj.byteMatchStatement),
    'SqliMatchStatement': toJson_Wafv2SqliMatchStatement(obj.sqliMatchStatement),
    'XssMatchStatement': toJson_Wafv2XssMatchStatement(obj.xssMatchStatement),
    'SizeConstraintStatement': toJson_Wafv2SizeConstraintStatement(obj.sizeConstraintStatement),
    'GeoMatchStatement': toJson_Wafv2GeoMatchStatement(obj.geoMatchStatement),
    'RuleGroupReferenceStatement': toJson_Wafv2RuleGroupReferenceStatement(obj.ruleGroupReferenceStatement),
    'IPSetReferenceStatement': toJson_Wafv2IpSetReferenceStatement(obj.ipSetReferenceStatement),
    'RegexPatternSetReferenceStatement': toJson_Wafv2RegexPatternSetReferenceStatement(obj.regexPatternSetReferenceStatement),
    'RateBasedStatement': toJson_Wafv2RateBasedStatement(obj.rateBasedStatement),
    'AndStatement': toJson_Wafv2AndStatement(obj.andStatement),
    'OrStatement': toJson_Wafv2OrStatement(obj.orStatement),
    'NotStatement': toJson_Wafv2NotStatement(obj.notStatement),
    'ManagedRuleGroupStatement': toJson_Wafv2ManagedRuleGroupStatement(obj.managedRuleGroupStatement),
    'LabelMatchStatement': toJson_Wafv2LabelMatchStatement(obj.labelMatchStatement),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2RuleAction
 */
export interface Wafv2RuleAction {
  /**
   * @schema Wafv2RuleAction#Block
   */
  readonly block?: Wafv2BlockAction;

  /**
   * @schema Wafv2RuleAction#Allow
   */
  readonly allow?: Wafv2AllowAction;

  /**
   * @schema Wafv2RuleAction#Count
   */
  readonly count?: Wafv2CountAction;

}

/**
 * Converts an object of type 'Wafv2RuleAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2RuleAction(obj: Wafv2RuleAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Block': toJson_Wafv2BlockAction(obj.block),
    'Allow': toJson_Wafv2AllowAction(obj.allow),
    'Count': toJson_Wafv2CountAction(obj.count),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2OverrideAction
 */
export interface Wafv2OverrideAction {
  /**
   * @schema Wafv2OverrideAction#Count
   */
  readonly count?: Wafv2CountAction;

  /**
   * @schema Wafv2OverrideAction#None
   */
  readonly none?: Wafv2NoneAction;

}

/**
 * Converts an object of type 'Wafv2OverrideAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2OverrideAction(obj: Wafv2OverrideAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Count': toJson_Wafv2CountAction(obj.count),
    'None': toJson_Wafv2NoneAction(obj.none),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2Label
 */
export interface Wafv2Label {
  /**
   * @schema Wafv2Label#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Wafv2Label' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2Label(obj: Wafv2Label | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2BlockAction
 */
export interface Wafv2BlockAction {
  /**
   * @schema Wafv2BlockAction#CustomResponse
   */
  readonly customResponse?: Wafv2CustomResponse;

}

/**
 * Converts an object of type 'Wafv2BlockAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2BlockAction(obj: Wafv2BlockAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomResponse': toJson_Wafv2CustomResponse(obj.customResponse),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2AllowAction
 */
export interface Wafv2AllowAction {
  /**
   * @schema Wafv2AllowAction#CustomRequestHandling
   */
  readonly customRequestHandling?: Wafv2CustomRequestHandling;

}

/**
 * Converts an object of type 'Wafv2AllowAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2AllowAction(obj: Wafv2AllowAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomRequestHandling': toJson_Wafv2CustomRequestHandling(obj.customRequestHandling),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2FieldToMatch
 */
export interface Wafv2FieldToMatch {
  /**
   * @schema Wafv2FieldToMatch#SingleHeader
   */
  readonly singleHeader?: Wafv2SingleHeader;

  /**
   * @schema Wafv2FieldToMatch#SingleQueryArgument
   */
  readonly singleQueryArgument?: Wafv2SingleQueryArgument;

  /**
   * @schema Wafv2FieldToMatch#AllQueryArguments
   */
  readonly allQueryArguments?: Wafv2AllQueryArguments;

  /**
   * @schema Wafv2FieldToMatch#UriPath
   */
  readonly uriPath?: Wafv2UriPath;

  /**
   * @schema Wafv2FieldToMatch#QueryString
   */
  readonly queryString?: Wafv2QueryString;

  /**
   * @schema Wafv2FieldToMatch#Body
   */
  readonly body?: Wafv2Body;

  /**
   * @schema Wafv2FieldToMatch#Method
   */
  readonly method?: Wafv2Method;

  /**
   * @schema Wafv2FieldToMatch#JsonBody
   */
  readonly jsonBody?: Wafv2JsonBody;

}

/**
 * Converts an object of type 'Wafv2FieldToMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2FieldToMatch(obj: Wafv2FieldToMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SingleHeader': toJson_Wafv2SingleHeader(obj.singleHeader),
    'SingleQueryArgument': toJson_Wafv2SingleQueryArgument(obj.singleQueryArgument),
    'AllQueryArguments': toJson_Wafv2AllQueryArguments(obj.allQueryArguments),
    'UriPath': toJson_Wafv2UriPath(obj.uriPath),
    'QueryString': toJson_Wafv2QueryString(obj.queryString),
    'Body': toJson_Wafv2Body(obj.body),
    'Method': toJson_Wafv2Method(obj.method),
    'JsonBody': toJson_Wafv2JsonBody(obj.jsonBody),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2LoggingFilter
 */
export interface Wafv2LoggingFilter {
  /**
   * @schema Wafv2LoggingFilter#Filters
   */
  readonly filters?: Wafv2Filter[];

  /**
   * @schema Wafv2LoggingFilter#DefaultBehavior
   */
  readonly defaultBehavior?: string;

}

/**
 * Converts an object of type 'Wafv2LoggingFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2LoggingFilter(obj: Wafv2LoggingFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_Wafv2Filter(y)),
    'DefaultBehavior': obj.defaultBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2HttpRequest
 */
export interface Wafv2HttpRequest {
  /**
   * @schema Wafv2HttpRequest#ClientIP
   */
  readonly clientIp?: string;

  /**
   * @schema Wafv2HttpRequest#Country
   */
  readonly country?: string;

  /**
   * @schema Wafv2HttpRequest#URI
   */
  readonly uri?: string;

  /**
   * @schema Wafv2HttpRequest#Method
   */
  readonly method?: string;

  /**
   * @schema Wafv2HttpRequest#HTTPVersion
   */
  readonly httpVersion?: string;

  /**
   * @schema Wafv2HttpRequest#Headers
   */
  readonly headers?: Wafv2HttpHeader[];

}

/**
 * Converts an object of type 'Wafv2HttpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2HttpRequest(obj: Wafv2HttpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientIP': obj.clientIp,
    'Country': obj.country,
    'URI': obj.uri,
    'Method': obj.method,
    'HTTPVersion': obj.httpVersion,
    'Headers': obj.headers?.map(y => toJson_Wafv2HttpHeader(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2HttpHeader
 */
export interface Wafv2HttpHeader {
  /**
   * @schema Wafv2HttpHeader#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2HttpHeader#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Wafv2HttpHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2HttpHeader(obj: Wafv2HttpHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2FirewallManagerRuleGroup
 */
export interface Wafv2FirewallManagerRuleGroup {
  /**
   * @schema Wafv2FirewallManagerRuleGroup#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2FirewallManagerRuleGroup#Priority
   */
  readonly priority?: number;

  /**
   * @schema Wafv2FirewallManagerRuleGroup#FirewallManagerStatement
   */
  readonly firewallManagerStatement?: Wafv2FirewallManagerStatement;

  /**
   * @schema Wafv2FirewallManagerRuleGroup#OverrideAction
   */
  readonly overrideAction?: Wafv2OverrideAction;

  /**
   * @schema Wafv2FirewallManagerRuleGroup#VisibilityConfig
   */
  readonly visibilityConfig?: Wafv2VisibilityConfig;

}

/**
 * Converts an object of type 'Wafv2FirewallManagerRuleGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2FirewallManagerRuleGroup(obj: Wafv2FirewallManagerRuleGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Priority': obj.priority,
    'FirewallManagerStatement': toJson_Wafv2FirewallManagerStatement(obj.firewallManagerStatement),
    'OverrideAction': toJson_Wafv2OverrideAction(obj.overrideAction),
    'VisibilityConfig': toJson_Wafv2VisibilityConfig(obj.visibilityConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ByteMatchStatement
 */
export interface Wafv2ByteMatchStatement {
  /**
   * @schema Wafv2ByteMatchStatement#SearchString
   */
  readonly searchString?: any;

  /**
   * @schema Wafv2ByteMatchStatement#FieldToMatch
   */
  readonly fieldToMatch?: Wafv2FieldToMatch;

  /**
   * @schema Wafv2ByteMatchStatement#TextTransformations
   */
  readonly textTransformations?: Wafv2TextTransformation[];

  /**
   * @schema Wafv2ByteMatchStatement#PositionalConstraint
   */
  readonly positionalConstraint?: string;

}

/**
 * Converts an object of type 'Wafv2ByteMatchStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ByteMatchStatement(obj: Wafv2ByteMatchStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SearchString': obj.searchString,
    'FieldToMatch': toJson_Wafv2FieldToMatch(obj.fieldToMatch),
    'TextTransformations': obj.textTransformations?.map(y => toJson_Wafv2TextTransformation(y)),
    'PositionalConstraint': obj.positionalConstraint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2SqliMatchStatement
 */
export interface Wafv2SqliMatchStatement {
  /**
   * @schema Wafv2SqliMatchStatement#FieldToMatch
   */
  readonly fieldToMatch?: Wafv2FieldToMatch;

  /**
   * @schema Wafv2SqliMatchStatement#TextTransformations
   */
  readonly textTransformations?: Wafv2TextTransformation[];

}

/**
 * Converts an object of type 'Wafv2SqliMatchStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2SqliMatchStatement(obj: Wafv2SqliMatchStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_Wafv2FieldToMatch(obj.fieldToMatch),
    'TextTransformations': obj.textTransformations?.map(y => toJson_Wafv2TextTransformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2XssMatchStatement
 */
export interface Wafv2XssMatchStatement {
  /**
   * @schema Wafv2XssMatchStatement#FieldToMatch
   */
  readonly fieldToMatch?: Wafv2FieldToMatch;

  /**
   * @schema Wafv2XssMatchStatement#TextTransformations
   */
  readonly textTransformations?: Wafv2TextTransformation[];

}

/**
 * Converts an object of type 'Wafv2XssMatchStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2XssMatchStatement(obj: Wafv2XssMatchStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_Wafv2FieldToMatch(obj.fieldToMatch),
    'TextTransformations': obj.textTransformations?.map(y => toJson_Wafv2TextTransformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2SizeConstraintStatement
 */
export interface Wafv2SizeConstraintStatement {
  /**
   * @schema Wafv2SizeConstraintStatement#FieldToMatch
   */
  readonly fieldToMatch?: Wafv2FieldToMatch;

  /**
   * @schema Wafv2SizeConstraintStatement#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema Wafv2SizeConstraintStatement#Size
   */
  readonly size?: number;

  /**
   * @schema Wafv2SizeConstraintStatement#TextTransformations
   */
  readonly textTransformations?: Wafv2TextTransformation[];

}

/**
 * Converts an object of type 'Wafv2SizeConstraintStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2SizeConstraintStatement(obj: Wafv2SizeConstraintStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_Wafv2FieldToMatch(obj.fieldToMatch),
    'ComparisonOperator': obj.comparisonOperator,
    'Size': obj.size,
    'TextTransformations': obj.textTransformations?.map(y => toJson_Wafv2TextTransformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2GeoMatchStatement
 */
export interface Wafv2GeoMatchStatement {
  /**
   * @schema Wafv2GeoMatchStatement#CountryCodes
   */
  readonly countryCodes?: string[];

  /**
   * @schema Wafv2GeoMatchStatement#ForwardedIPConfig
   */
  readonly forwardedIpConfig?: Wafv2ForwardedIpConfig;

}

/**
 * Converts an object of type 'Wafv2GeoMatchStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2GeoMatchStatement(obj: Wafv2GeoMatchStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CountryCodes': obj.countryCodes?.map(y => y),
    'ForwardedIPConfig': toJson_Wafv2ForwardedIpConfig(obj.forwardedIpConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2RuleGroupReferenceStatement
 */
export interface Wafv2RuleGroupReferenceStatement {
  /**
   * @schema Wafv2RuleGroupReferenceStatement#ARN
   */
  readonly arn?: string;

  /**
   * @schema Wafv2RuleGroupReferenceStatement#ExcludedRules
   */
  readonly excludedRules?: Wafv2ExcludedRule[];

}

/**
 * Converts an object of type 'Wafv2RuleGroupReferenceStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2RuleGroupReferenceStatement(obj: Wafv2RuleGroupReferenceStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'ExcludedRules': obj.excludedRules?.map(y => toJson_Wafv2ExcludedRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2IpSetReferenceStatement
 */
export interface Wafv2IpSetReferenceStatement {
  /**
   * @schema Wafv2IpSetReferenceStatement#ARN
   */
  readonly arn?: string;

  /**
   * @schema Wafv2IpSetReferenceStatement#IPSetForwardedIPConfig
   */
  readonly ipSetForwardedIpConfig?: Wafv2IpSetForwardedIpConfig;

}

/**
 * Converts an object of type 'Wafv2IpSetReferenceStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2IpSetReferenceStatement(obj: Wafv2IpSetReferenceStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'IPSetForwardedIPConfig': toJson_Wafv2IpSetForwardedIpConfig(obj.ipSetForwardedIpConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2RegexPatternSetReferenceStatement
 */
export interface Wafv2RegexPatternSetReferenceStatement {
  /**
   * @schema Wafv2RegexPatternSetReferenceStatement#ARN
   */
  readonly arn?: string;

  /**
   * @schema Wafv2RegexPatternSetReferenceStatement#FieldToMatch
   */
  readonly fieldToMatch?: Wafv2FieldToMatch;

  /**
   * @schema Wafv2RegexPatternSetReferenceStatement#TextTransformations
   */
  readonly textTransformations?: Wafv2TextTransformation[];

}

/**
 * Converts an object of type 'Wafv2RegexPatternSetReferenceStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2RegexPatternSetReferenceStatement(obj: Wafv2RegexPatternSetReferenceStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'FieldToMatch': toJson_Wafv2FieldToMatch(obj.fieldToMatch),
    'TextTransformations': obj.textTransformations?.map(y => toJson_Wafv2TextTransformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2RateBasedStatement
 */
export interface Wafv2RateBasedStatement {
  /**
   * @schema Wafv2RateBasedStatement#Limit
   */
  readonly limit?: number;

  /**
   * @schema Wafv2RateBasedStatement#AggregateKeyType
   */
  readonly aggregateKeyType?: string;

  /**
   * @schema Wafv2RateBasedStatement#ScopeDownStatement
   */
  readonly scopeDownStatement?: Wafv2Statement;

  /**
   * @schema Wafv2RateBasedStatement#ForwardedIPConfig
   */
  readonly forwardedIpConfig?: Wafv2ForwardedIpConfig;

}

/**
 * Converts an object of type 'Wafv2RateBasedStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2RateBasedStatement(obj: Wafv2RateBasedStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'AggregateKeyType': obj.aggregateKeyType,
    'ScopeDownStatement': toJson_Wafv2Statement(obj.scopeDownStatement),
    'ForwardedIPConfig': toJson_Wafv2ForwardedIpConfig(obj.forwardedIpConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2AndStatement
 */
export interface Wafv2AndStatement {
  /**
   * @schema Wafv2AndStatement#Statements
   */
  readonly statements?: Wafv2Statement[];

}

/**
 * Converts an object of type 'Wafv2AndStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2AndStatement(obj: Wafv2AndStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Statements': obj.statements?.map(y => toJson_Wafv2Statement(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2OrStatement
 */
export interface Wafv2OrStatement {
  /**
   * @schema Wafv2OrStatement#Statements
   */
  readonly statements?: Wafv2Statement[];

}

/**
 * Converts an object of type 'Wafv2OrStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2OrStatement(obj: Wafv2OrStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Statements': obj.statements?.map(y => toJson_Wafv2Statement(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2NotStatement
 */
export interface Wafv2NotStatement {
  /**
   * @schema Wafv2NotStatement#Statement
   */
  readonly statement?: Wafv2Statement;

}

/**
 * Converts an object of type 'Wafv2NotStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2NotStatement(obj: Wafv2NotStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Statement': toJson_Wafv2Statement(obj.statement),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ManagedRuleGroupStatement
 */
export interface Wafv2ManagedRuleGroupStatement {
  /**
   * @schema Wafv2ManagedRuleGroupStatement#VendorName
   */
  readonly vendorName?: string;

  /**
   * @schema Wafv2ManagedRuleGroupStatement#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2ManagedRuleGroupStatement#ExcludedRules
   */
  readonly excludedRules?: Wafv2ExcludedRule[];

  /**
   * @schema Wafv2ManagedRuleGroupStatement#ScopeDownStatement
   */
  readonly scopeDownStatement?: Wafv2Statement;

}

/**
 * Converts an object of type 'Wafv2ManagedRuleGroupStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ManagedRuleGroupStatement(obj: Wafv2ManagedRuleGroupStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VendorName': obj.vendorName,
    'Name': obj.name,
    'ExcludedRules': obj.excludedRules?.map(y => toJson_Wafv2ExcludedRule(y)),
    'ScopeDownStatement': toJson_Wafv2Statement(obj.scopeDownStatement),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2LabelMatchStatement
 */
export interface Wafv2LabelMatchStatement {
  /**
   * @schema Wafv2LabelMatchStatement#Scope
   */
  readonly scope?: string;

  /**
   * @schema Wafv2LabelMatchStatement#Key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'Wafv2LabelMatchStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2LabelMatchStatement(obj: Wafv2LabelMatchStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'Key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CountAction
 */
export interface Wafv2CountAction {
  /**
   * @schema Wafv2CountAction#CustomRequestHandling
   */
  readonly customRequestHandling?: Wafv2CustomRequestHandling;

}

/**
 * Converts an object of type 'Wafv2CountAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CountAction(obj: Wafv2CountAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomRequestHandling': toJson_Wafv2CustomRequestHandling(obj.customRequestHandling),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2NoneAction
 */
export interface Wafv2NoneAction {
}

/**
 * Converts an object of type 'Wafv2NoneAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2NoneAction(obj: Wafv2NoneAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CustomResponse
 */
export interface Wafv2CustomResponse {
  /**
   * @schema Wafv2CustomResponse#ResponseCode
   */
  readonly responseCode?: number;

  /**
   * @schema Wafv2CustomResponse#CustomResponseBodyKey
   */
  readonly customResponseBodyKey?: string;

  /**
   * @schema Wafv2CustomResponse#ResponseHeaders
   */
  readonly responseHeaders?: Wafv2CustomHttpHeader[];

}

/**
 * Converts an object of type 'Wafv2CustomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CustomResponse(obj: Wafv2CustomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResponseCode': obj.responseCode,
    'CustomResponseBodyKey': obj.customResponseBodyKey,
    'ResponseHeaders': obj.responseHeaders?.map(y => toJson_Wafv2CustomHttpHeader(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CustomRequestHandling
 */
export interface Wafv2CustomRequestHandling {
  /**
   * @schema Wafv2CustomRequestHandling#InsertHeaders
   */
  readonly insertHeaders?: Wafv2CustomHttpHeader[];

}

/**
 * Converts an object of type 'Wafv2CustomRequestHandling' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CustomRequestHandling(obj: Wafv2CustomRequestHandling | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsertHeaders': obj.insertHeaders?.map(y => toJson_Wafv2CustomHttpHeader(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2SingleHeader
 */
export interface Wafv2SingleHeader {
  /**
   * @schema Wafv2SingleHeader#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Wafv2SingleHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2SingleHeader(obj: Wafv2SingleHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2SingleQueryArgument
 */
export interface Wafv2SingleQueryArgument {
  /**
   * @schema Wafv2SingleQueryArgument#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Wafv2SingleQueryArgument' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2SingleQueryArgument(obj: Wafv2SingleQueryArgument | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2AllQueryArguments
 */
export interface Wafv2AllQueryArguments {
}

/**
 * Converts an object of type 'Wafv2AllQueryArguments' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2AllQueryArguments(obj: Wafv2AllQueryArguments | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2UriPath
 */
export interface Wafv2UriPath {
}

/**
 * Converts an object of type 'Wafv2UriPath' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2UriPath(obj: Wafv2UriPath | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2QueryString
 */
export interface Wafv2QueryString {
}

/**
 * Converts an object of type 'Wafv2QueryString' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2QueryString(obj: Wafv2QueryString | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2Body
 */
export interface Wafv2Body {
}

/**
 * Converts an object of type 'Wafv2Body' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2Body(obj: Wafv2Body | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2Method
 */
export interface Wafv2Method {
}

/**
 * Converts an object of type 'Wafv2Method' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2Method(obj: Wafv2Method | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2JsonBody
 */
export interface Wafv2JsonBody {
  /**
   * @schema Wafv2JsonBody#MatchPattern
   */
  readonly matchPattern?: Wafv2JsonMatchPattern;

  /**
   * @schema Wafv2JsonBody#MatchScope
   */
  readonly matchScope?: string;

  /**
   * @schema Wafv2JsonBody#InvalidFallbackBehavior
   */
  readonly invalidFallbackBehavior?: string;

}

/**
 * Converts an object of type 'Wafv2JsonBody' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2JsonBody(obj: Wafv2JsonBody | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MatchPattern': toJson_Wafv2JsonMatchPattern(obj.matchPattern),
    'MatchScope': obj.matchScope,
    'InvalidFallbackBehavior': obj.invalidFallbackBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2Filter
 */
export interface Wafv2Filter {
  /**
   * @schema Wafv2Filter#Behavior
   */
  readonly behavior?: string;

  /**
   * @schema Wafv2Filter#Requirement
   */
  readonly requirement?: string;

  /**
   * @schema Wafv2Filter#Conditions
   */
  readonly conditions?: Wafv2Condition[];

}

/**
 * Converts an object of type 'Wafv2Filter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2Filter(obj: Wafv2Filter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Behavior': obj.behavior,
    'Requirement': obj.requirement,
    'Conditions': obj.conditions?.map(y => toJson_Wafv2Condition(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2FirewallManagerStatement
 */
export interface Wafv2FirewallManagerStatement {
  /**
   * @schema Wafv2FirewallManagerStatement#ManagedRuleGroupStatement
   */
  readonly managedRuleGroupStatement?: Wafv2ManagedRuleGroupStatement;

  /**
   * @schema Wafv2FirewallManagerStatement#RuleGroupReferenceStatement
   */
  readonly ruleGroupReferenceStatement?: Wafv2RuleGroupReferenceStatement;

}

/**
 * Converts an object of type 'Wafv2FirewallManagerStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2FirewallManagerStatement(obj: Wafv2FirewallManagerStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManagedRuleGroupStatement': toJson_Wafv2ManagedRuleGroupStatement(obj.managedRuleGroupStatement),
    'RuleGroupReferenceStatement': toJson_Wafv2RuleGroupReferenceStatement(obj.ruleGroupReferenceStatement),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2TextTransformation
 */
export interface Wafv2TextTransformation {
  /**
   * @schema Wafv2TextTransformation#Priority
   */
  readonly priority?: number;

  /**
   * @schema Wafv2TextTransformation#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'Wafv2TextTransformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2TextTransformation(obj: Wafv2TextTransformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Priority': obj.priority,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ForwardedIpConfig
 */
export interface Wafv2ForwardedIpConfig {
  /**
   * @schema Wafv2ForwardedIpConfig#HeaderName
   */
  readonly headerName?: string;

  /**
   * @schema Wafv2ForwardedIpConfig#FallbackBehavior
   */
  readonly fallbackBehavior?: string;

}

/**
 * Converts an object of type 'Wafv2ForwardedIpConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ForwardedIpConfig(obj: Wafv2ForwardedIpConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HeaderName': obj.headerName,
    'FallbackBehavior': obj.fallbackBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ExcludedRule
 */
export interface Wafv2ExcludedRule {
  /**
   * @schema Wafv2ExcludedRule#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Wafv2ExcludedRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ExcludedRule(obj: Wafv2ExcludedRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2IpSetForwardedIpConfig
 */
export interface Wafv2IpSetForwardedIpConfig {
  /**
   * @schema Wafv2IpSetForwardedIpConfig#HeaderName
   */
  readonly headerName?: string;

  /**
   * @schema Wafv2IpSetForwardedIpConfig#FallbackBehavior
   */
  readonly fallbackBehavior?: string;

  /**
   * @schema Wafv2IpSetForwardedIpConfig#Position
   */
  readonly position?: string;

}

/**
 * Converts an object of type 'Wafv2IpSetForwardedIpConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2IpSetForwardedIpConfig(obj: Wafv2IpSetForwardedIpConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HeaderName': obj.headerName,
    'FallbackBehavior': obj.fallbackBehavior,
    'Position': obj.position,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2CustomHttpHeader
 */
export interface Wafv2CustomHttpHeader {
  /**
   * @schema Wafv2CustomHttpHeader#Name
   */
  readonly name?: string;

  /**
   * @schema Wafv2CustomHttpHeader#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Wafv2CustomHttpHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2CustomHttpHeader(obj: Wafv2CustomHttpHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2JsonMatchPattern
 */
export interface Wafv2JsonMatchPattern {
  /**
   * @schema Wafv2JsonMatchPattern#All
   */
  readonly all?: Wafv2All;

  /**
   * @schema Wafv2JsonMatchPattern#IncludedPaths
   */
  readonly includedPaths?: string[];

}

/**
 * Converts an object of type 'Wafv2JsonMatchPattern' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2JsonMatchPattern(obj: Wafv2JsonMatchPattern | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'All': toJson_Wafv2All(obj.all),
    'IncludedPaths': obj.includedPaths?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2Condition
 */
export interface Wafv2Condition {
  /**
   * @schema Wafv2Condition#ActionCondition
   */
  readonly actionCondition?: Wafv2ActionCondition;

  /**
   * @schema Wafv2Condition#LabelNameCondition
   */
  readonly labelNameCondition?: Wafv2LabelNameCondition;

}

/**
 * Converts an object of type 'Wafv2Condition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2Condition(obj: Wafv2Condition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionCondition': toJson_Wafv2ActionCondition(obj.actionCondition),
    'LabelNameCondition': toJson_Wafv2LabelNameCondition(obj.labelNameCondition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2All
 */
export interface Wafv2All {
}

/**
 * Converts an object of type 'Wafv2All' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2All(obj: Wafv2All | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2ActionCondition
 */
export interface Wafv2ActionCondition {
  /**
   * @schema Wafv2ActionCondition#Action
   */
  readonly action?: string;

}

/**
 * Converts an object of type 'Wafv2ActionCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2ActionCondition(obj: Wafv2ActionCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Wafv2LabelNameCondition
 */
export interface Wafv2LabelNameCondition {
  /**
   * @schema Wafv2LabelNameCondition#LabelName
   */
  readonly labelName?: string;

}

/**
 * Converts an object of type 'Wafv2LabelNameCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Wafv2LabelNameCondition(obj: Wafv2LabelNameCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LabelName': obj.labelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
