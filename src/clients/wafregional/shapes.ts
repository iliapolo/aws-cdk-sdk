/**
 * @schema WafRegionalAssociateWebAclRequest
 */
export interface WafRegionalAssociateWebAclRequest {
  /**
   * @schema WafRegionalAssociateWebAclRequest#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafRegionalAssociateWebAclRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafRegionalAssociateWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalAssociateWebAclRequest(obj: WafRegionalAssociateWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalAssociateWebAclResponse
 */
export interface WafRegionalAssociateWebAclResponse {
}

/**
 * Converts an object of type 'WafRegionalAssociateWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalAssociateWebAclResponse(obj: WafRegionalAssociateWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateByteMatchSetRequest
 */
export interface WafRegionalCreateByteMatchSetRequest {
  /**
   * @schema WafRegionalCreateByteMatchSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateByteMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateByteMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateByteMatchSetRequest(obj: WafRegionalCreateByteMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateByteMatchSetResponse
 */
export interface WafRegionalCreateByteMatchSetResponse {
  /**
   * @schema WafRegionalCreateByteMatchSetResponse#ByteMatchSet
   */
  readonly byteMatchSet?: WafRegionalByteMatchSet;

  /**
   * @schema WafRegionalCreateByteMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateByteMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateByteMatchSetResponse(obj: WafRegionalCreateByteMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSet': toJson_WafRegionalByteMatchSet(obj.byteMatchSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateGeoMatchSetRequest
 */
export interface WafRegionalCreateGeoMatchSetRequest {
  /**
   * @schema WafRegionalCreateGeoMatchSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateGeoMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateGeoMatchSetRequest(obj: WafRegionalCreateGeoMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateGeoMatchSetResponse
 */
export interface WafRegionalCreateGeoMatchSetResponse {
  /**
   * @schema WafRegionalCreateGeoMatchSetResponse#GeoMatchSet
   */
  readonly geoMatchSet?: WafRegionalGeoMatchSet;

  /**
   * @schema WafRegionalCreateGeoMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateGeoMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateGeoMatchSetResponse(obj: WafRegionalCreateGeoMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSet': toJson_WafRegionalGeoMatchSet(obj.geoMatchSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateIpSetRequest
 */
export interface WafRegionalCreateIpSetRequest {
  /**
   * @schema WafRegionalCreateIpSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateIpSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateIpSetRequest(obj: WafRegionalCreateIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateIpSetResponse
 */
export interface WafRegionalCreateIpSetResponse {
  /**
   * @schema WafRegionalCreateIpSetResponse#IPSet
   */
  readonly ipSet?: WafRegionalIpSet;

  /**
   * @schema WafRegionalCreateIpSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateIpSetResponse(obj: WafRegionalCreateIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSet': toJson_WafRegionalIpSet(obj.ipSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateRateBasedRuleRequest
 */
export interface WafRegionalCreateRateBasedRuleRequest {
  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#RateKey
   */
  readonly rateKey?: string;

  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#RateLimit
   */
  readonly rateLimit?: number;

  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#Tags
   */
  readonly tags?: WafRegionalTag[];

}

/**
 * Converts an object of type 'WafRegionalCreateRateBasedRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateRateBasedRuleRequest(obj: WafRegionalCreateRateBasedRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MetricName': obj.metricName,
    'RateKey': obj.rateKey,
    'RateLimit': obj.rateLimit,
    'ChangeToken': obj.changeToken,
    'Tags': obj.tags?.map(y => toJson_WafRegionalTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateRateBasedRuleResponse
 */
export interface WafRegionalCreateRateBasedRuleResponse {
  /**
   * @schema WafRegionalCreateRateBasedRuleResponse#Rule
   */
  readonly rule?: WafRegionalRateBasedRule;

  /**
   * @schema WafRegionalCreateRateBasedRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateRateBasedRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateRateBasedRuleResponse(obj: WafRegionalCreateRateBasedRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': toJson_WafRegionalRateBasedRule(obj.rule),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateRegexMatchSetRequest
 */
export interface WafRegionalCreateRegexMatchSetRequest {
  /**
   * @schema WafRegionalCreateRegexMatchSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateRegexMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateRegexMatchSetRequest(obj: WafRegionalCreateRegexMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateRegexMatchSetResponse
 */
export interface WafRegionalCreateRegexMatchSetResponse {
  /**
   * @schema WafRegionalCreateRegexMatchSetResponse#RegexMatchSet
   */
  readonly regexMatchSet?: WafRegionalRegexMatchSet;

  /**
   * @schema WafRegionalCreateRegexMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateRegexMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateRegexMatchSetResponse(obj: WafRegionalCreateRegexMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSet': toJson_WafRegionalRegexMatchSet(obj.regexMatchSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateRegexPatternSetRequest
 */
export interface WafRegionalCreateRegexPatternSetRequest {
  /**
   * @schema WafRegionalCreateRegexPatternSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateRegexPatternSetRequest(obj: WafRegionalCreateRegexPatternSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateRegexPatternSetResponse
 */
export interface WafRegionalCreateRegexPatternSetResponse {
  /**
   * @schema WafRegionalCreateRegexPatternSetResponse#RegexPatternSet
   */
  readonly regexPatternSet?: WafRegionalRegexPatternSet;

  /**
   * @schema WafRegionalCreateRegexPatternSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateRegexPatternSetResponse(obj: WafRegionalCreateRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSet': toJson_WafRegionalRegexPatternSet(obj.regexPatternSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateRuleRequest
 */
export interface WafRegionalCreateRuleRequest {
  /**
   * @schema WafRegionalCreateRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateRuleRequest#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafRegionalCreateRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalCreateRuleRequest#Tags
   */
  readonly tags?: WafRegionalTag[];

}

/**
 * Converts an object of type 'WafRegionalCreateRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateRuleRequest(obj: WafRegionalCreateRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MetricName': obj.metricName,
    'ChangeToken': obj.changeToken,
    'Tags': obj.tags?.map(y => toJson_WafRegionalTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateRuleResponse
 */
export interface WafRegionalCreateRuleResponse {
  /**
   * @schema WafRegionalCreateRuleResponse#Rule
   */
  readonly rule?: WafRegionalRule;

  /**
   * @schema WafRegionalCreateRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateRuleResponse(obj: WafRegionalCreateRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': toJson_WafRegionalRule(obj.rule),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateRuleGroupRequest
 */
export interface WafRegionalCreateRuleGroupRequest {
  /**
   * @schema WafRegionalCreateRuleGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateRuleGroupRequest#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafRegionalCreateRuleGroupRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalCreateRuleGroupRequest#Tags
   */
  readonly tags?: WafRegionalTag[];

}

/**
 * Converts an object of type 'WafRegionalCreateRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateRuleGroupRequest(obj: WafRegionalCreateRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MetricName': obj.metricName,
    'ChangeToken': obj.changeToken,
    'Tags': obj.tags?.map(y => toJson_WafRegionalTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateRuleGroupResponse
 */
export interface WafRegionalCreateRuleGroupResponse {
  /**
   * @schema WafRegionalCreateRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: WafRegionalRuleGroup;

  /**
   * @schema WafRegionalCreateRuleGroupResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateRuleGroupResponse(obj: WafRegionalCreateRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroup': toJson_WafRegionalRuleGroup(obj.ruleGroup),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateSizeConstraintSetRequest
 */
export interface WafRegionalCreateSizeConstraintSetRequest {
  /**
   * @schema WafRegionalCreateSizeConstraintSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateSizeConstraintSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateSizeConstraintSetRequest(obj: WafRegionalCreateSizeConstraintSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateSizeConstraintSetResponse
 */
export interface WafRegionalCreateSizeConstraintSetResponse {
  /**
   * @schema WafRegionalCreateSizeConstraintSetResponse#SizeConstraintSet
   */
  readonly sizeConstraintSet?: WafRegionalSizeConstraintSet;

  /**
   * @schema WafRegionalCreateSizeConstraintSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateSizeConstraintSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateSizeConstraintSetResponse(obj: WafRegionalCreateSizeConstraintSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSet': toJson_WafRegionalSizeConstraintSet(obj.sizeConstraintSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateSqlInjectionMatchSetRequest
 */
export interface WafRegionalCreateSqlInjectionMatchSetRequest {
  /**
   * @schema WafRegionalCreateSqlInjectionMatchSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateSqlInjectionMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateSqlInjectionMatchSetRequest(obj: WafRegionalCreateSqlInjectionMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateSqlInjectionMatchSetResponse
 */
export interface WafRegionalCreateSqlInjectionMatchSetResponse {
  /**
   * @schema WafRegionalCreateSqlInjectionMatchSetResponse#SqlInjectionMatchSet
   */
  readonly sqlInjectionMatchSet?: WafRegionalSqlInjectionMatchSet;

  /**
   * @schema WafRegionalCreateSqlInjectionMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateSqlInjectionMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateSqlInjectionMatchSetResponse(obj: WafRegionalCreateSqlInjectionMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSet': toJson_WafRegionalSqlInjectionMatchSet(obj.sqlInjectionMatchSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateWebAclRequest
 */
export interface WafRegionalCreateWebAclRequest {
  /**
   * @schema WafRegionalCreateWebAclRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateWebAclRequest#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafRegionalCreateWebAclRequest#DefaultAction
   */
  readonly defaultAction?: WafRegionalWafAction;

  /**
   * @schema WafRegionalCreateWebAclRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalCreateWebAclRequest#Tags
   */
  readonly tags?: WafRegionalTag[];

}

/**
 * Converts an object of type 'WafRegionalCreateWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateWebAclRequest(obj: WafRegionalCreateWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MetricName': obj.metricName,
    'DefaultAction': toJson_WafRegionalWafAction(obj.defaultAction),
    'ChangeToken': obj.changeToken,
    'Tags': obj.tags?.map(y => toJson_WafRegionalTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateWebAclResponse
 */
export interface WafRegionalCreateWebAclResponse {
  /**
   * @schema WafRegionalCreateWebAclResponse#WebACL
   */
  readonly webAcl?: WafRegionalWebAcl;

  /**
   * @schema WafRegionalCreateWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateWebAclResponse(obj: WafRegionalCreateWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACL': toJson_WafRegionalWebAcl(obj.webAcl),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateWebAclMigrationStackRequest
 */
export interface WafRegionalCreateWebAclMigrationStackRequest {
  /**
   * @schema WafRegionalCreateWebAclMigrationStackRequest#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafRegionalCreateWebAclMigrationStackRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema WafRegionalCreateWebAclMigrationStackRequest#IgnoreUnsupportedType
   */
  readonly ignoreUnsupportedType?: boolean;

}

/**
 * Converts an object of type 'WafRegionalCreateWebAclMigrationStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateWebAclMigrationStackRequest(obj: WafRegionalCreateWebAclMigrationStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
    'S3BucketName': obj.s3BucketName,
    'IgnoreUnsupportedType': obj.ignoreUnsupportedType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateWebAclMigrationStackResponse
 */
export interface WafRegionalCreateWebAclMigrationStackResponse {
  /**
   * @schema WafRegionalCreateWebAclMigrationStackResponse#S3ObjectUrl
   */
  readonly s3ObjectUrl?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateWebAclMigrationStackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateWebAclMigrationStackResponse(obj: WafRegionalCreateWebAclMigrationStackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3ObjectUrl': obj.s3ObjectUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateXssMatchSetRequest
 */
export interface WafRegionalCreateXssMatchSetRequest {
  /**
   * @schema WafRegionalCreateXssMatchSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalCreateXssMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateXssMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateXssMatchSetRequest(obj: WafRegionalCreateXssMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalCreateXssMatchSetResponse
 */
export interface WafRegionalCreateXssMatchSetResponse {
  /**
   * @schema WafRegionalCreateXssMatchSetResponse#XssMatchSet
   */
  readonly xssMatchSet?: WafRegionalXssMatchSet;

  /**
   * @schema WafRegionalCreateXssMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalCreateXssMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalCreateXssMatchSetResponse(obj: WafRegionalCreateXssMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSet': toJson_WafRegionalXssMatchSet(obj.xssMatchSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteByteMatchSetRequest
 */
export interface WafRegionalDeleteByteMatchSetRequest {
  /**
   * @schema WafRegionalDeleteByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId?: string;

  /**
   * @schema WafRegionalDeleteByteMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteByteMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteByteMatchSetRequest(obj: WafRegionalDeleteByteMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSetId': obj.byteMatchSetId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteByteMatchSetResponse
 */
export interface WafRegionalDeleteByteMatchSetResponse {
  /**
   * @schema WafRegionalDeleteByteMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteByteMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteByteMatchSetResponse(obj: WafRegionalDeleteByteMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteGeoMatchSetRequest
 */
export interface WafRegionalDeleteGeoMatchSetRequest {
  /**
   * @schema WafRegionalDeleteGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId?: string;

  /**
   * @schema WafRegionalDeleteGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteGeoMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteGeoMatchSetRequest(obj: WafRegionalDeleteGeoMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSetId': obj.geoMatchSetId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteGeoMatchSetResponse
 */
export interface WafRegionalDeleteGeoMatchSetResponse {
  /**
   * @schema WafRegionalDeleteGeoMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteGeoMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteGeoMatchSetResponse(obj: WafRegionalDeleteGeoMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteIpSetRequest
 */
export interface WafRegionalDeleteIpSetRequest {
  /**
   * @schema WafRegionalDeleteIpSetRequest#IPSetId
   */
  readonly ipSetId?: string;

  /**
   * @schema WafRegionalDeleteIpSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteIpSetRequest(obj: WafRegionalDeleteIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSetId': obj.ipSetId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteIpSetResponse
 */
export interface WafRegionalDeleteIpSetResponse {
  /**
   * @schema WafRegionalDeleteIpSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteIpSetResponse(obj: WafRegionalDeleteIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteLoggingConfigurationRequest
 */
export interface WafRegionalDeleteLoggingConfigurationRequest {
  /**
   * @schema WafRegionalDeleteLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteLoggingConfigurationRequest(obj: WafRegionalDeleteLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteLoggingConfigurationResponse
 */
export interface WafRegionalDeleteLoggingConfigurationResponse {
}

/**
 * Converts an object of type 'WafRegionalDeleteLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteLoggingConfigurationResponse(obj: WafRegionalDeleteLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeletePermissionPolicyRequest
 */
export interface WafRegionalDeletePermissionPolicyRequest {
  /**
   * @schema WafRegionalDeletePermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafRegionalDeletePermissionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeletePermissionPolicyRequest(obj: WafRegionalDeletePermissionPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeletePermissionPolicyResponse
 */
export interface WafRegionalDeletePermissionPolicyResponse {
}

/**
 * Converts an object of type 'WafRegionalDeletePermissionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeletePermissionPolicyResponse(obj: WafRegionalDeletePermissionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteRateBasedRuleRequest
 */
export interface WafRegionalDeleteRateBasedRuleRequest {
  /**
   * @schema WafRegionalDeleteRateBasedRuleRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRegionalDeleteRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteRateBasedRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteRateBasedRuleRequest(obj: WafRegionalDeleteRateBasedRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteRateBasedRuleResponse
 */
export interface WafRegionalDeleteRateBasedRuleResponse {
  /**
   * @schema WafRegionalDeleteRateBasedRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteRateBasedRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteRateBasedRuleResponse(obj: WafRegionalDeleteRateBasedRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteRegexMatchSetRequest
 */
export interface WafRegionalDeleteRegexMatchSetRequest {
  /**
   * @schema WafRegionalDeleteRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

  /**
   * @schema WafRegionalDeleteRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteRegexMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteRegexMatchSetRequest(obj: WafRegionalDeleteRegexMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSetId': obj.regexMatchSetId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteRegexMatchSetResponse
 */
export interface WafRegionalDeleteRegexMatchSetResponse {
  /**
   * @schema WafRegionalDeleteRegexMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteRegexMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteRegexMatchSetResponse(obj: WafRegionalDeleteRegexMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteRegexPatternSetRequest
 */
export interface WafRegionalDeleteRegexPatternSetRequest {
  /**
   * @schema WafRegionalDeleteRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

  /**
   * @schema WafRegionalDeleteRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteRegexPatternSetRequest(obj: WafRegionalDeleteRegexPatternSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSetId': obj.regexPatternSetId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteRegexPatternSetResponse
 */
export interface WafRegionalDeleteRegexPatternSetResponse {
  /**
   * @schema WafRegionalDeleteRegexPatternSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteRegexPatternSetResponse(obj: WafRegionalDeleteRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteRuleRequest
 */
export interface WafRegionalDeleteRuleRequest {
  /**
   * @schema WafRegionalDeleteRuleRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRegionalDeleteRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteRuleRequest(obj: WafRegionalDeleteRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteRuleResponse
 */
export interface WafRegionalDeleteRuleResponse {
  /**
   * @schema WafRegionalDeleteRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteRuleResponse(obj: WafRegionalDeleteRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteRuleGroupRequest
 */
export interface WafRegionalDeleteRuleGroupRequest {
  /**
   * @schema WafRegionalDeleteRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafRegionalDeleteRuleGroupRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteRuleGroupRequest(obj: WafRegionalDeleteRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupId': obj.ruleGroupId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteRuleGroupResponse
 */
export interface WafRegionalDeleteRuleGroupResponse {
  /**
   * @schema WafRegionalDeleteRuleGroupResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteRuleGroupResponse(obj: WafRegionalDeleteRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteSizeConstraintSetRequest
 */
export interface WafRegionalDeleteSizeConstraintSetRequest {
  /**
   * @schema WafRegionalDeleteSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId?: string;

  /**
   * @schema WafRegionalDeleteSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteSizeConstraintSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteSizeConstraintSetRequest(obj: WafRegionalDeleteSizeConstraintSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSetId': obj.sizeConstraintSetId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteSizeConstraintSetResponse
 */
export interface WafRegionalDeleteSizeConstraintSetResponse {
  /**
   * @schema WafRegionalDeleteSizeConstraintSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteSizeConstraintSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteSizeConstraintSetResponse(obj: WafRegionalDeleteSizeConstraintSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteSqlInjectionMatchSetRequest
 */
export interface WafRegionalDeleteSqlInjectionMatchSetRequest {
  /**
   * @schema WafRegionalDeleteSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId?: string;

  /**
   * @schema WafRegionalDeleteSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteSqlInjectionMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteSqlInjectionMatchSetRequest(obj: WafRegionalDeleteSqlInjectionMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSetId': obj.sqlInjectionMatchSetId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteSqlInjectionMatchSetResponse
 */
export interface WafRegionalDeleteSqlInjectionMatchSetResponse {
  /**
   * @schema WafRegionalDeleteSqlInjectionMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteSqlInjectionMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteSqlInjectionMatchSetResponse(obj: WafRegionalDeleteSqlInjectionMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteWebAclRequest
 */
export interface WafRegionalDeleteWebAclRequest {
  /**
   * @schema WafRegionalDeleteWebAclRequest#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafRegionalDeleteWebAclRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteWebAclRequest(obj: WafRegionalDeleteWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteWebAclResponse
 */
export interface WafRegionalDeleteWebAclResponse {
  /**
   * @schema WafRegionalDeleteWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteWebAclResponse(obj: WafRegionalDeleteWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteXssMatchSetRequest
 */
export interface WafRegionalDeleteXssMatchSetRequest {
  /**
   * @schema WafRegionalDeleteXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId?: string;

  /**
   * @schema WafRegionalDeleteXssMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteXssMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteXssMatchSetRequest(obj: WafRegionalDeleteXssMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSetId': obj.xssMatchSetId,
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDeleteXssMatchSetResponse
 */
export interface WafRegionalDeleteXssMatchSetResponse {
  /**
   * @schema WafRegionalDeleteXssMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalDeleteXssMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDeleteXssMatchSetResponse(obj: WafRegionalDeleteXssMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDisassociateWebAclRequest
 */
export interface WafRegionalDisassociateWebAclRequest {
  /**
   * @schema WafRegionalDisassociateWebAclRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafRegionalDisassociateWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDisassociateWebAclRequest(obj: WafRegionalDisassociateWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalDisassociateWebAclResponse
 */
export interface WafRegionalDisassociateWebAclResponse {
}

/**
 * Converts an object of type 'WafRegionalDisassociateWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalDisassociateWebAclResponse(obj: WafRegionalDisassociateWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetByteMatchSetRequest
 */
export interface WafRegionalGetByteMatchSetRequest {
  /**
   * @schema WafRegionalGetByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetByteMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetByteMatchSetRequest(obj: WafRegionalGetByteMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSetId': obj.byteMatchSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetByteMatchSetResponse
 */
export interface WafRegionalGetByteMatchSetResponse {
  /**
   * @schema WafRegionalGetByteMatchSetResponse#ByteMatchSet
   */
  readonly byteMatchSet?: WafRegionalByteMatchSet;

}

/**
 * Converts an object of type 'WafRegionalGetByteMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetByteMatchSetResponse(obj: WafRegionalGetByteMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSet': toJson_WafRegionalByteMatchSet(obj.byteMatchSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetChangeTokenRequest
 */
export interface WafRegionalGetChangeTokenRequest {
}

/**
 * Converts an object of type 'WafRegionalGetChangeTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetChangeTokenRequest(obj: WafRegionalGetChangeTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetChangeTokenResponse
 */
export interface WafRegionalGetChangeTokenResponse {
  /**
   * @schema WafRegionalGetChangeTokenResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalGetChangeTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetChangeTokenResponse(obj: WafRegionalGetChangeTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetChangeTokenStatusRequest
 */
export interface WafRegionalGetChangeTokenStatusRequest {
  /**
   * @schema WafRegionalGetChangeTokenStatusRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalGetChangeTokenStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetChangeTokenStatusRequest(obj: WafRegionalGetChangeTokenStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetChangeTokenStatusResponse
 */
export interface WafRegionalGetChangeTokenStatusResponse {
  /**
   * @schema WafRegionalGetChangeTokenStatusResponse#ChangeTokenStatus
   */
  readonly changeTokenStatus?: string;

}

/**
 * Converts an object of type 'WafRegionalGetChangeTokenStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetChangeTokenStatusResponse(obj: WafRegionalGetChangeTokenStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeTokenStatus': obj.changeTokenStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetGeoMatchSetRequest
 */
export interface WafRegionalGetGeoMatchSetRequest {
  /**
   * @schema WafRegionalGetGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetGeoMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetGeoMatchSetRequest(obj: WafRegionalGetGeoMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSetId': obj.geoMatchSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetGeoMatchSetResponse
 */
export interface WafRegionalGetGeoMatchSetResponse {
  /**
   * @schema WafRegionalGetGeoMatchSetResponse#GeoMatchSet
   */
  readonly geoMatchSet?: WafRegionalGeoMatchSet;

}

/**
 * Converts an object of type 'WafRegionalGetGeoMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetGeoMatchSetResponse(obj: WafRegionalGetGeoMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSet': toJson_WafRegionalGeoMatchSet(obj.geoMatchSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetIpSetRequest
 */
export interface WafRegionalGetIpSetRequest {
  /**
   * @schema WafRegionalGetIpSetRequest#IPSetId
   */
  readonly ipSetId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetIpSetRequest(obj: WafRegionalGetIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSetId': obj.ipSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetIpSetResponse
 */
export interface WafRegionalGetIpSetResponse {
  /**
   * @schema WafRegionalGetIpSetResponse#IPSet
   */
  readonly ipSet?: WafRegionalIpSet;

}

/**
 * Converts an object of type 'WafRegionalGetIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetIpSetResponse(obj: WafRegionalGetIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSet': toJson_WafRegionalIpSet(obj.ipSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetLoggingConfigurationRequest
 */
export interface WafRegionalGetLoggingConfigurationRequest {
  /**
   * @schema WafRegionalGetLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafRegionalGetLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetLoggingConfigurationRequest(obj: WafRegionalGetLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetLoggingConfigurationResponse
 */
export interface WafRegionalGetLoggingConfigurationResponse {
  /**
   * @schema WafRegionalGetLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: WafRegionalLoggingConfiguration;

}

/**
 * Converts an object of type 'WafRegionalGetLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetLoggingConfigurationResponse(obj: WafRegionalGetLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_WafRegionalLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetPermissionPolicyRequest
 */
export interface WafRegionalGetPermissionPolicyRequest {
  /**
   * @schema WafRegionalGetPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafRegionalGetPermissionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetPermissionPolicyRequest(obj: WafRegionalGetPermissionPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetPermissionPolicyResponse
 */
export interface WafRegionalGetPermissionPolicyResponse {
  /**
   * @schema WafRegionalGetPermissionPolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'WafRegionalGetPermissionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetPermissionPolicyResponse(obj: WafRegionalGetPermissionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRateBasedRuleRequest
 */
export interface WafRegionalGetRateBasedRuleRequest {
  /**
   * @schema WafRegionalGetRateBasedRuleRequest#RuleId
   */
  readonly ruleId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetRateBasedRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRateBasedRuleRequest(obj: WafRegionalGetRateBasedRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRateBasedRuleResponse
 */
export interface WafRegionalGetRateBasedRuleResponse {
  /**
   * @schema WafRegionalGetRateBasedRuleResponse#Rule
   */
  readonly rule?: WafRegionalRateBasedRule;

}

/**
 * Converts an object of type 'WafRegionalGetRateBasedRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRateBasedRuleResponse(obj: WafRegionalGetRateBasedRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': toJson_WafRegionalRateBasedRule(obj.rule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRateBasedRuleManagedKeysRequest
 */
export interface WafRegionalGetRateBasedRuleManagedKeysRequest {
  /**
   * @schema WafRegionalGetRateBasedRuleManagedKeysRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRegionalGetRateBasedRuleManagedKeysRequest#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * Converts an object of type 'WafRegionalGetRateBasedRuleManagedKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRateBasedRuleManagedKeysRequest(obj: WafRegionalGetRateBasedRuleManagedKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'NextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRateBasedRuleManagedKeysResponse
 */
export interface WafRegionalGetRateBasedRuleManagedKeysResponse {
  /**
   * @schema WafRegionalGetRateBasedRuleManagedKeysResponse#ManagedKeys
   */
  readonly managedKeys?: string[];

  /**
   * @schema WafRegionalGetRateBasedRuleManagedKeysResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * Converts an object of type 'WafRegionalGetRateBasedRuleManagedKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRateBasedRuleManagedKeysResponse(obj: WafRegionalGetRateBasedRuleManagedKeysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManagedKeys': obj.managedKeys?.map(y => y),
    'NextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRegexMatchSetRequest
 */
export interface WafRegionalGetRegexMatchSetRequest {
  /**
   * @schema WafRegionalGetRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetRegexMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRegexMatchSetRequest(obj: WafRegionalGetRegexMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSetId': obj.regexMatchSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRegexMatchSetResponse
 */
export interface WafRegionalGetRegexMatchSetResponse {
  /**
   * @schema WafRegionalGetRegexMatchSetResponse#RegexMatchSet
   */
  readonly regexMatchSet?: WafRegionalRegexMatchSet;

}

/**
 * Converts an object of type 'WafRegionalGetRegexMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRegexMatchSetResponse(obj: WafRegionalGetRegexMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSet': toJson_WafRegionalRegexMatchSet(obj.regexMatchSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRegexPatternSetRequest
 */
export interface WafRegionalGetRegexPatternSetRequest {
  /**
   * @schema WafRegionalGetRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRegexPatternSetRequest(obj: WafRegionalGetRegexPatternSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSetId': obj.regexPatternSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRegexPatternSetResponse
 */
export interface WafRegionalGetRegexPatternSetResponse {
  /**
   * @schema WafRegionalGetRegexPatternSetResponse#RegexPatternSet
   */
  readonly regexPatternSet?: WafRegionalRegexPatternSet;

}

/**
 * Converts an object of type 'WafRegionalGetRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRegexPatternSetResponse(obj: WafRegionalGetRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSet': toJson_WafRegionalRegexPatternSet(obj.regexPatternSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRuleRequest
 */
export interface WafRegionalGetRuleRequest {
  /**
   * @schema WafRegionalGetRuleRequest#RuleId
   */
  readonly ruleId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRuleRequest(obj: WafRegionalGetRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRuleResponse
 */
export interface WafRegionalGetRuleResponse {
  /**
   * @schema WafRegionalGetRuleResponse#Rule
   */
  readonly rule?: WafRegionalRule;

}

/**
 * Converts an object of type 'WafRegionalGetRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRuleResponse(obj: WafRegionalGetRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': toJson_WafRegionalRule(obj.rule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRuleGroupRequest
 */
export interface WafRegionalGetRuleGroupRequest {
  /**
   * @schema WafRegionalGetRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRuleGroupRequest(obj: WafRegionalGetRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupId': obj.ruleGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetRuleGroupResponse
 */
export interface WafRegionalGetRuleGroupResponse {
  /**
   * @schema WafRegionalGetRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: WafRegionalRuleGroup;

}

/**
 * Converts an object of type 'WafRegionalGetRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetRuleGroupResponse(obj: WafRegionalGetRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroup': toJson_WafRegionalRuleGroup(obj.ruleGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetSampledRequestsRequest
 */
export interface WafRegionalGetSampledRequestsRequest {
  /**
   * @schema WafRegionalGetSampledRequestsRequest#WebAclId
   */
  readonly webAclId?: string;

  /**
   * @schema WafRegionalGetSampledRequestsRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRegionalGetSampledRequestsRequest#TimeWindow
   */
  readonly timeWindow?: WafRegionalTimeWindow;

  /**
   * @schema WafRegionalGetSampledRequestsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'WafRegionalGetSampledRequestsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetSampledRequestsRequest(obj: WafRegionalGetSampledRequestsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebAclId': obj.webAclId,
    'RuleId': obj.ruleId,
    'TimeWindow': toJson_WafRegionalTimeWindow(obj.timeWindow),
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetSampledRequestsResponse
 */
export interface WafRegionalGetSampledRequestsResponse {
  /**
   * @schema WafRegionalGetSampledRequestsResponse#SampledRequests
   */
  readonly sampledRequests?: WafRegionalSampledHttpRequest[];

  /**
   * @schema WafRegionalGetSampledRequestsResponse#PopulationSize
   */
  readonly populationSize?: number;

  /**
   * @schema WafRegionalGetSampledRequestsResponse#TimeWindow
   */
  readonly timeWindow?: WafRegionalTimeWindow;

}

/**
 * Converts an object of type 'WafRegionalGetSampledRequestsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetSampledRequestsResponse(obj: WafRegionalGetSampledRequestsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SampledRequests': obj.sampledRequests?.map(y => toJson_WafRegionalSampledHttpRequest(y)),
    'PopulationSize': obj.populationSize,
    'TimeWindow': toJson_WafRegionalTimeWindow(obj.timeWindow),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetSizeConstraintSetRequest
 */
export interface WafRegionalGetSizeConstraintSetRequest {
  /**
   * @schema WafRegionalGetSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetSizeConstraintSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetSizeConstraintSetRequest(obj: WafRegionalGetSizeConstraintSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSetId': obj.sizeConstraintSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetSizeConstraintSetResponse
 */
export interface WafRegionalGetSizeConstraintSetResponse {
  /**
   * @schema WafRegionalGetSizeConstraintSetResponse#SizeConstraintSet
   */
  readonly sizeConstraintSet?: WafRegionalSizeConstraintSet;

}

/**
 * Converts an object of type 'WafRegionalGetSizeConstraintSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetSizeConstraintSetResponse(obj: WafRegionalGetSizeConstraintSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSet': toJson_WafRegionalSizeConstraintSet(obj.sizeConstraintSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetSqlInjectionMatchSetRequest
 */
export interface WafRegionalGetSqlInjectionMatchSetRequest {
  /**
   * @schema WafRegionalGetSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetSqlInjectionMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetSqlInjectionMatchSetRequest(obj: WafRegionalGetSqlInjectionMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSetId': obj.sqlInjectionMatchSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetSqlInjectionMatchSetResponse
 */
export interface WafRegionalGetSqlInjectionMatchSetResponse {
  /**
   * @schema WafRegionalGetSqlInjectionMatchSetResponse#SqlInjectionMatchSet
   */
  readonly sqlInjectionMatchSet?: WafRegionalSqlInjectionMatchSet;

}

/**
 * Converts an object of type 'WafRegionalGetSqlInjectionMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetSqlInjectionMatchSetResponse(obj: WafRegionalGetSqlInjectionMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSet': toJson_WafRegionalSqlInjectionMatchSet(obj.sqlInjectionMatchSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetWebAclRequest
 */
export interface WafRegionalGetWebAclRequest {
  /**
   * @schema WafRegionalGetWebAclRequest#WebACLId
   */
  readonly webAclId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetWebAclRequest(obj: WafRegionalGetWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetWebAclResponse
 */
export interface WafRegionalGetWebAclResponse {
  /**
   * @schema WafRegionalGetWebAclResponse#WebACL
   */
  readonly webAcl?: WafRegionalWebAcl;

}

/**
 * Converts an object of type 'WafRegionalGetWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetWebAclResponse(obj: WafRegionalGetWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACL': toJson_WafRegionalWebAcl(obj.webAcl),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetWebAclForResourceRequest
 */
export interface WafRegionalGetWebAclForResourceRequest {
  /**
   * @schema WafRegionalGetWebAclForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafRegionalGetWebAclForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetWebAclForResourceRequest(obj: WafRegionalGetWebAclForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetWebAclForResourceResponse
 */
export interface WafRegionalGetWebAclForResourceResponse {
  /**
   * @schema WafRegionalGetWebAclForResourceResponse#WebACLSummary
   */
  readonly webAclSummary?: WafRegionalWebAclSummary;

}

/**
 * Converts an object of type 'WafRegionalGetWebAclForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetWebAclForResourceResponse(obj: WafRegionalGetWebAclForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLSummary': toJson_WafRegionalWebAclSummary(obj.webAclSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetXssMatchSetRequest
 */
export interface WafRegionalGetXssMatchSetRequest {
  /**
   * @schema WafRegionalGetXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId?: string;

}

/**
 * Converts an object of type 'WafRegionalGetXssMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetXssMatchSetRequest(obj: WafRegionalGetXssMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSetId': obj.xssMatchSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGetXssMatchSetResponse
 */
export interface WafRegionalGetXssMatchSetResponse {
  /**
   * @schema WafRegionalGetXssMatchSetResponse#XssMatchSet
   */
  readonly xssMatchSet?: WafRegionalXssMatchSet;

}

/**
 * Converts an object of type 'WafRegionalGetXssMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGetXssMatchSetResponse(obj: WafRegionalGetXssMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSet': toJson_WafRegionalXssMatchSet(obj.xssMatchSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListActivatedRulesInRuleGroupRequest
 */
export interface WafRegionalListActivatedRulesInRuleGroupRequest {
  /**
   * @schema WafRegionalListActivatedRulesInRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafRegionalListActivatedRulesInRuleGroupRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListActivatedRulesInRuleGroupRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListActivatedRulesInRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListActivatedRulesInRuleGroupRequest(obj: WafRegionalListActivatedRulesInRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupId': obj.ruleGroupId,
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListActivatedRulesInRuleGroupResponse
 */
export interface WafRegionalListActivatedRulesInRuleGroupResponse {
  /**
   * @schema WafRegionalListActivatedRulesInRuleGroupResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListActivatedRulesInRuleGroupResponse#ActivatedRules
   */
  readonly activatedRules?: WafRegionalActivatedRule[];

}

/**
 * Converts an object of type 'WafRegionalListActivatedRulesInRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListActivatedRulesInRuleGroupResponse(obj: WafRegionalListActivatedRulesInRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'ActivatedRules': obj.activatedRules?.map(y => toJson_WafRegionalActivatedRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListByteMatchSetsRequest
 */
export interface WafRegionalListByteMatchSetsRequest {
  /**
   * @schema WafRegionalListByteMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListByteMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListByteMatchSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListByteMatchSetsRequest(obj: WafRegionalListByteMatchSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListByteMatchSetsResponse
 */
export interface WafRegionalListByteMatchSetsResponse {
  /**
   * @schema WafRegionalListByteMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListByteMatchSetsResponse#ByteMatchSets
   */
  readonly byteMatchSets?: WafRegionalByteMatchSetSummary[];

}

/**
 * Converts an object of type 'WafRegionalListByteMatchSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListByteMatchSetsResponse(obj: WafRegionalListByteMatchSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'ByteMatchSets': obj.byteMatchSets?.map(y => toJson_WafRegionalByteMatchSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListGeoMatchSetsRequest
 */
export interface WafRegionalListGeoMatchSetsRequest {
  /**
   * @schema WafRegionalListGeoMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListGeoMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListGeoMatchSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListGeoMatchSetsRequest(obj: WafRegionalListGeoMatchSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListGeoMatchSetsResponse
 */
export interface WafRegionalListGeoMatchSetsResponse {
  /**
   * @schema WafRegionalListGeoMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListGeoMatchSetsResponse#GeoMatchSets
   */
  readonly geoMatchSets?: WafRegionalGeoMatchSetSummary[];

}

/**
 * Converts an object of type 'WafRegionalListGeoMatchSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListGeoMatchSetsResponse(obj: WafRegionalListGeoMatchSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'GeoMatchSets': obj.geoMatchSets?.map(y => toJson_WafRegionalGeoMatchSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListIpSetsRequest
 */
export interface WafRegionalListIpSetsRequest {
  /**
   * @schema WafRegionalListIpSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListIpSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListIpSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListIpSetsRequest(obj: WafRegionalListIpSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListIpSetsResponse
 */
export interface WafRegionalListIpSetsResponse {
  /**
   * @schema WafRegionalListIpSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListIpSetsResponse#IPSets
   */
  readonly ipSets?: WafRegionalIpSetSummary[];

}

/**
 * Converts an object of type 'WafRegionalListIpSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListIpSetsResponse(obj: WafRegionalListIpSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'IPSets': obj.ipSets?.map(y => toJson_WafRegionalIpSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListLoggingConfigurationsRequest
 */
export interface WafRegionalListLoggingConfigurationsRequest {
  /**
   * @schema WafRegionalListLoggingConfigurationsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListLoggingConfigurationsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListLoggingConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListLoggingConfigurationsRequest(obj: WafRegionalListLoggingConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListLoggingConfigurationsResponse
 */
export interface WafRegionalListLoggingConfigurationsResponse {
  /**
   * @schema WafRegionalListLoggingConfigurationsResponse#LoggingConfigurations
   */
  readonly loggingConfigurations?: WafRegionalLoggingConfiguration[];

  /**
   * @schema WafRegionalListLoggingConfigurationsResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * Converts an object of type 'WafRegionalListLoggingConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListLoggingConfigurationsResponse(obj: WafRegionalListLoggingConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfigurations': obj.loggingConfigurations?.map(y => toJson_WafRegionalLoggingConfiguration(y)),
    'NextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListRateBasedRulesRequest
 */
export interface WafRegionalListRateBasedRulesRequest {
  /**
   * @schema WafRegionalListRateBasedRulesRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListRateBasedRulesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListRateBasedRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListRateBasedRulesRequest(obj: WafRegionalListRateBasedRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListRateBasedRulesResponse
 */
export interface WafRegionalListRateBasedRulesResponse {
  /**
   * @schema WafRegionalListRateBasedRulesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListRateBasedRulesResponse#Rules
   */
  readonly rules?: WafRegionalRuleSummary[];

}

/**
 * Converts an object of type 'WafRegionalListRateBasedRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListRateBasedRulesResponse(obj: WafRegionalListRateBasedRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Rules': obj.rules?.map(y => toJson_WafRegionalRuleSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListRegexMatchSetsRequest
 */
export interface WafRegionalListRegexMatchSetsRequest {
  /**
   * @schema WafRegionalListRegexMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListRegexMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListRegexMatchSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListRegexMatchSetsRequest(obj: WafRegionalListRegexMatchSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListRegexMatchSetsResponse
 */
export interface WafRegionalListRegexMatchSetsResponse {
  /**
   * @schema WafRegionalListRegexMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListRegexMatchSetsResponse#RegexMatchSets
   */
  readonly regexMatchSets?: WafRegionalRegexMatchSetSummary[];

}

/**
 * Converts an object of type 'WafRegionalListRegexMatchSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListRegexMatchSetsResponse(obj: WafRegionalListRegexMatchSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'RegexMatchSets': obj.regexMatchSets?.map(y => toJson_WafRegionalRegexMatchSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListRegexPatternSetsRequest
 */
export interface WafRegionalListRegexPatternSetsRequest {
  /**
   * @schema WafRegionalListRegexPatternSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListRegexPatternSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListRegexPatternSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListRegexPatternSetsRequest(obj: WafRegionalListRegexPatternSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListRegexPatternSetsResponse
 */
export interface WafRegionalListRegexPatternSetsResponse {
  /**
   * @schema WafRegionalListRegexPatternSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListRegexPatternSetsResponse#RegexPatternSets
   */
  readonly regexPatternSets?: WafRegionalRegexPatternSetSummary[];

}

/**
 * Converts an object of type 'WafRegionalListRegexPatternSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListRegexPatternSetsResponse(obj: WafRegionalListRegexPatternSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'RegexPatternSets': obj.regexPatternSets?.map(y => toJson_WafRegionalRegexPatternSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListResourcesForWebAclRequest
 */
export interface WafRegionalListResourcesForWebAclRequest {
  /**
   * @schema WafRegionalListResourcesForWebAclRequest#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafRegionalListResourcesForWebAclRequest#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'WafRegionalListResourcesForWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListResourcesForWebAclRequest(obj: WafRegionalListResourcesForWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListResourcesForWebAclResponse
 */
export interface WafRegionalListResourcesForWebAclResponse {
  /**
   * @schema WafRegionalListResourcesForWebAclResponse#ResourceArns
   */
  readonly resourceArns?: string[];

}

/**
 * Converts an object of type 'WafRegionalListResourcesForWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListResourcesForWebAclResponse(obj: WafRegionalListResourcesForWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArns': obj.resourceArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListRuleGroupsRequest
 */
export interface WafRegionalListRuleGroupsRequest {
  /**
   * @schema WafRegionalListRuleGroupsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListRuleGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListRuleGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListRuleGroupsRequest(obj: WafRegionalListRuleGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListRuleGroupsResponse
 */
export interface WafRegionalListRuleGroupsResponse {
  /**
   * @schema WafRegionalListRuleGroupsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListRuleGroupsResponse#RuleGroups
   */
  readonly ruleGroups?: WafRegionalRuleGroupSummary[];

}

/**
 * Converts an object of type 'WafRegionalListRuleGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListRuleGroupsResponse(obj: WafRegionalListRuleGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'RuleGroups': obj.ruleGroups?.map(y => toJson_WafRegionalRuleGroupSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListRulesRequest
 */
export interface WafRegionalListRulesRequest {
  /**
   * @schema WafRegionalListRulesRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListRulesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListRulesRequest(obj: WafRegionalListRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListRulesResponse
 */
export interface WafRegionalListRulesResponse {
  /**
   * @schema WafRegionalListRulesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListRulesResponse#Rules
   */
  readonly rules?: WafRegionalRuleSummary[];

}

/**
 * Converts an object of type 'WafRegionalListRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListRulesResponse(obj: WafRegionalListRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Rules': obj.rules?.map(y => toJson_WafRegionalRuleSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListSizeConstraintSetsRequest
 */
export interface WafRegionalListSizeConstraintSetsRequest {
  /**
   * @schema WafRegionalListSizeConstraintSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListSizeConstraintSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListSizeConstraintSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListSizeConstraintSetsRequest(obj: WafRegionalListSizeConstraintSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListSizeConstraintSetsResponse
 */
export interface WafRegionalListSizeConstraintSetsResponse {
  /**
   * @schema WafRegionalListSizeConstraintSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListSizeConstraintSetsResponse#SizeConstraintSets
   */
  readonly sizeConstraintSets?: WafRegionalSizeConstraintSetSummary[];

}

/**
 * Converts an object of type 'WafRegionalListSizeConstraintSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListSizeConstraintSetsResponse(obj: WafRegionalListSizeConstraintSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'SizeConstraintSets': obj.sizeConstraintSets?.map(y => toJson_WafRegionalSizeConstraintSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListSqlInjectionMatchSetsRequest
 */
export interface WafRegionalListSqlInjectionMatchSetsRequest {
  /**
   * @schema WafRegionalListSqlInjectionMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListSqlInjectionMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListSqlInjectionMatchSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListSqlInjectionMatchSetsRequest(obj: WafRegionalListSqlInjectionMatchSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListSqlInjectionMatchSetsResponse
 */
export interface WafRegionalListSqlInjectionMatchSetsResponse {
  /**
   * @schema WafRegionalListSqlInjectionMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListSqlInjectionMatchSetsResponse#SqlInjectionMatchSets
   */
  readonly sqlInjectionMatchSets?: WafRegionalSqlInjectionMatchSetSummary[];

}

/**
 * Converts an object of type 'WafRegionalListSqlInjectionMatchSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListSqlInjectionMatchSetsResponse(obj: WafRegionalListSqlInjectionMatchSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'SqlInjectionMatchSets': obj.sqlInjectionMatchSets?.map(y => toJson_WafRegionalSqlInjectionMatchSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListSubscribedRuleGroupsRequest
 */
export interface WafRegionalListSubscribedRuleGroupsRequest {
  /**
   * @schema WafRegionalListSubscribedRuleGroupsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListSubscribedRuleGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListSubscribedRuleGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListSubscribedRuleGroupsRequest(obj: WafRegionalListSubscribedRuleGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListSubscribedRuleGroupsResponse
 */
export interface WafRegionalListSubscribedRuleGroupsResponse {
  /**
   * @schema WafRegionalListSubscribedRuleGroupsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListSubscribedRuleGroupsResponse#RuleGroups
   */
  readonly ruleGroups?: WafRegionalSubscribedRuleGroupSummary[];

}

/**
 * Converts an object of type 'WafRegionalListSubscribedRuleGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListSubscribedRuleGroupsResponse(obj: WafRegionalListSubscribedRuleGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'RuleGroups': obj.ruleGroups?.map(y => toJson_WafRegionalSubscribedRuleGroupSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListTagsForResourceRequest
 */
export interface WafRegionalListTagsForResourceRequest {
  /**
   * @schema WafRegionalListTagsForResourceRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListTagsForResourceRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WafRegionalListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafRegionalListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListTagsForResourceRequest(obj: WafRegionalListTagsForResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafRegionalListTagsForResourceResponse
 */
export interface WafRegionalListTagsForResourceResponse {
  /**
   * @schema WafRegionalListTagsForResourceResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListTagsForResourceResponse#TagInfoForResource
   */
  readonly tagInfoForResource?: WafRegionalTagInfoForResource;

}

/**
 * Converts an object of type 'WafRegionalListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListTagsForResourceResponse(obj: WafRegionalListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'TagInfoForResource': toJson_WafRegionalTagInfoForResource(obj.tagInfoForResource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListWebAcLsRequest
 */
export interface WafRegionalListWebAcLsRequest {
  /**
   * @schema WafRegionalListWebAcLsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListWebAcLsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListWebAcLsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListWebAcLsRequest(obj: WafRegionalListWebAcLsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListWebAcLsResponse
 */
export interface WafRegionalListWebAcLsResponse {
  /**
   * @schema WafRegionalListWebAcLsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListWebAcLsResponse#WebACLs
   */
  readonly webAcLs?: WafRegionalWebAclSummary[];

}

/**
 * Converts an object of type 'WafRegionalListWebAcLsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListWebAcLsResponse(obj: WafRegionalListWebAcLsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'WebACLs': obj.webAcLs?.map(y => toJson_WafRegionalWebAclSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListXssMatchSetsRequest
 */
export interface WafRegionalListXssMatchSetsRequest {
  /**
   * @schema WafRegionalListXssMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListXssMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafRegionalListXssMatchSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListXssMatchSetsRequest(obj: WafRegionalListXssMatchSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalListXssMatchSetsResponse
 */
export interface WafRegionalListXssMatchSetsResponse {
  /**
   * @schema WafRegionalListXssMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafRegionalListXssMatchSetsResponse#XssMatchSets
   */
  readonly xssMatchSets?: WafRegionalXssMatchSetSummary[];

}

/**
 * Converts an object of type 'WafRegionalListXssMatchSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalListXssMatchSetsResponse(obj: WafRegionalListXssMatchSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'XssMatchSets': obj.xssMatchSets?.map(y => toJson_WafRegionalXssMatchSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalPutLoggingConfigurationRequest
 */
export interface WafRegionalPutLoggingConfigurationRequest {
  /**
   * @schema WafRegionalPutLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration?: WafRegionalLoggingConfiguration;

}

/**
 * Converts an object of type 'WafRegionalPutLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalPutLoggingConfigurationRequest(obj: WafRegionalPutLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_WafRegionalLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalPutLoggingConfigurationResponse
 */
export interface WafRegionalPutLoggingConfigurationResponse {
  /**
   * @schema WafRegionalPutLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: WafRegionalLoggingConfiguration;

}

/**
 * Converts an object of type 'WafRegionalPutLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalPutLoggingConfigurationResponse(obj: WafRegionalPutLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_WafRegionalLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalPutPermissionPolicyRequest
 */
export interface WafRegionalPutPermissionPolicyRequest {
  /**
   * @schema WafRegionalPutPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema WafRegionalPutPermissionPolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'WafRegionalPutPermissionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalPutPermissionPolicyRequest(obj: WafRegionalPutPermissionPolicyRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafRegionalPutPermissionPolicyResponse
 */
export interface WafRegionalPutPermissionPolicyResponse {
}

/**
 * Converts an object of type 'WafRegionalPutPermissionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalPutPermissionPolicyResponse(obj: WafRegionalPutPermissionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalTagResourceRequest
 */
export interface WafRegionalTagResourceRequest {
  /**
   * @schema WafRegionalTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema WafRegionalTagResourceRequest#Tags
   */
  readonly tags?: WafRegionalTag[];

}

/**
 * Converts an object of type 'WafRegionalTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalTagResourceRequest(obj: WafRegionalTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_WafRegionalTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalTagResourceResponse
 */
export interface WafRegionalTagResourceResponse {
}

/**
 * Converts an object of type 'WafRegionalTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalTagResourceResponse(obj: WafRegionalTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUntagResourceRequest
 */
export interface WafRegionalUntagResourceRequest {
  /**
   * @schema WafRegionalUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema WafRegionalUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'WafRegionalUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUntagResourceRequest(obj: WafRegionalUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafRegionalUntagResourceResponse
 */
export interface WafRegionalUntagResourceResponse {
}

/**
 * Converts an object of type 'WafRegionalUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUntagResourceResponse(obj: WafRegionalUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateByteMatchSetRequest
 */
export interface WafRegionalUpdateByteMatchSetRequest {
  /**
   * @schema WafRegionalUpdateByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId?: string;

  /**
   * @schema WafRegionalUpdateByteMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalUpdateByteMatchSetRequest#Updates
   */
  readonly updates?: WafRegionalByteMatchSetUpdate[];

}

/**
 * Converts an object of type 'WafRegionalUpdateByteMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateByteMatchSetRequest(obj: WafRegionalUpdateByteMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSetId': obj.byteMatchSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRegionalByteMatchSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateByteMatchSetResponse
 */
export interface WafRegionalUpdateByteMatchSetResponse {
  /**
   * @schema WafRegionalUpdateByteMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateByteMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateByteMatchSetResponse(obj: WafRegionalUpdateByteMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateGeoMatchSetRequest
 */
export interface WafRegionalUpdateGeoMatchSetRequest {
  /**
   * @schema WafRegionalUpdateGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId?: string;

  /**
   * @schema WafRegionalUpdateGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalUpdateGeoMatchSetRequest#Updates
   */
  readonly updates?: WafRegionalGeoMatchSetUpdate[];

}

/**
 * Converts an object of type 'WafRegionalUpdateGeoMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateGeoMatchSetRequest(obj: WafRegionalUpdateGeoMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSetId': obj.geoMatchSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRegionalGeoMatchSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateGeoMatchSetResponse
 */
export interface WafRegionalUpdateGeoMatchSetResponse {
  /**
   * @schema WafRegionalUpdateGeoMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateGeoMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateGeoMatchSetResponse(obj: WafRegionalUpdateGeoMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateIpSetRequest
 */
export interface WafRegionalUpdateIpSetRequest {
  /**
   * @schema WafRegionalUpdateIpSetRequest#IPSetId
   */
  readonly ipSetId?: string;

  /**
   * @schema WafRegionalUpdateIpSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalUpdateIpSetRequest#Updates
   */
  readonly updates?: WafRegionalIpSetUpdate[];

}

/**
 * Converts an object of type 'WafRegionalUpdateIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateIpSetRequest(obj: WafRegionalUpdateIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSetId': obj.ipSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRegionalIpSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateIpSetResponse
 */
export interface WafRegionalUpdateIpSetResponse {
  /**
   * @schema WafRegionalUpdateIpSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateIpSetResponse(obj: WafRegionalUpdateIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateRateBasedRuleRequest
 */
export interface WafRegionalUpdateRateBasedRuleRequest {
  /**
   * @schema WafRegionalUpdateRateBasedRuleRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRegionalUpdateRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalUpdateRateBasedRuleRequest#Updates
   */
  readonly updates?: WafRegionalRuleUpdate[];

  /**
   * @schema WafRegionalUpdateRateBasedRuleRequest#RateLimit
   */
  readonly rateLimit?: number;

}

/**
 * Converts an object of type 'WafRegionalUpdateRateBasedRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateRateBasedRuleRequest(obj: WafRegionalUpdateRateBasedRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRegionalRuleUpdate(y)),
    'RateLimit': obj.rateLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateRateBasedRuleResponse
 */
export interface WafRegionalUpdateRateBasedRuleResponse {
  /**
   * @schema WafRegionalUpdateRateBasedRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateRateBasedRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateRateBasedRuleResponse(obj: WafRegionalUpdateRateBasedRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateRegexMatchSetRequest
 */
export interface WafRegionalUpdateRegexMatchSetRequest {
  /**
   * @schema WafRegionalUpdateRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

  /**
   * @schema WafRegionalUpdateRegexMatchSetRequest#Updates
   */
  readonly updates?: WafRegionalRegexMatchSetUpdate[];

  /**
   * @schema WafRegionalUpdateRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateRegexMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateRegexMatchSetRequest(obj: WafRegionalUpdateRegexMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSetId': obj.regexMatchSetId,
    'Updates': obj.updates?.map(y => toJson_WafRegionalRegexMatchSetUpdate(y)),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateRegexMatchSetResponse
 */
export interface WafRegionalUpdateRegexMatchSetResponse {
  /**
   * @schema WafRegionalUpdateRegexMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateRegexMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateRegexMatchSetResponse(obj: WafRegionalUpdateRegexMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateRegexPatternSetRequest
 */
export interface WafRegionalUpdateRegexPatternSetRequest {
  /**
   * @schema WafRegionalUpdateRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

  /**
   * @schema WafRegionalUpdateRegexPatternSetRequest#Updates
   */
  readonly updates?: WafRegionalRegexPatternSetUpdate[];

  /**
   * @schema WafRegionalUpdateRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateRegexPatternSetRequest(obj: WafRegionalUpdateRegexPatternSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSetId': obj.regexPatternSetId,
    'Updates': obj.updates?.map(y => toJson_WafRegionalRegexPatternSetUpdate(y)),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateRegexPatternSetResponse
 */
export interface WafRegionalUpdateRegexPatternSetResponse {
  /**
   * @schema WafRegionalUpdateRegexPatternSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateRegexPatternSetResponse(obj: WafRegionalUpdateRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateRuleRequest
 */
export interface WafRegionalUpdateRuleRequest {
  /**
   * @schema WafRegionalUpdateRuleRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRegionalUpdateRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalUpdateRuleRequest#Updates
   */
  readonly updates?: WafRegionalRuleUpdate[];

}

/**
 * Converts an object of type 'WafRegionalUpdateRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateRuleRequest(obj: WafRegionalUpdateRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRegionalRuleUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateRuleResponse
 */
export interface WafRegionalUpdateRuleResponse {
  /**
   * @schema WafRegionalUpdateRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateRuleResponse(obj: WafRegionalUpdateRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateRuleGroupRequest
 */
export interface WafRegionalUpdateRuleGroupRequest {
  /**
   * @schema WafRegionalUpdateRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafRegionalUpdateRuleGroupRequest#Updates
   */
  readonly updates?: WafRegionalRuleGroupUpdate[];

  /**
   * @schema WafRegionalUpdateRuleGroupRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateRuleGroupRequest(obj: WafRegionalUpdateRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupId': obj.ruleGroupId,
    'Updates': obj.updates?.map(y => toJson_WafRegionalRuleGroupUpdate(y)),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateRuleGroupResponse
 */
export interface WafRegionalUpdateRuleGroupResponse {
  /**
   * @schema WafRegionalUpdateRuleGroupResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateRuleGroupResponse(obj: WafRegionalUpdateRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateSizeConstraintSetRequest
 */
export interface WafRegionalUpdateSizeConstraintSetRequest {
  /**
   * @schema WafRegionalUpdateSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId?: string;

  /**
   * @schema WafRegionalUpdateSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalUpdateSizeConstraintSetRequest#Updates
   */
  readonly updates?: WafRegionalSizeConstraintSetUpdate[];

}

/**
 * Converts an object of type 'WafRegionalUpdateSizeConstraintSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateSizeConstraintSetRequest(obj: WafRegionalUpdateSizeConstraintSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSetId': obj.sizeConstraintSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRegionalSizeConstraintSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateSizeConstraintSetResponse
 */
export interface WafRegionalUpdateSizeConstraintSetResponse {
  /**
   * @schema WafRegionalUpdateSizeConstraintSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateSizeConstraintSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateSizeConstraintSetResponse(obj: WafRegionalUpdateSizeConstraintSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateSqlInjectionMatchSetRequest
 */
export interface WafRegionalUpdateSqlInjectionMatchSetRequest {
  /**
   * @schema WafRegionalUpdateSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId?: string;

  /**
   * @schema WafRegionalUpdateSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalUpdateSqlInjectionMatchSetRequest#Updates
   */
  readonly updates?: WafRegionalSqlInjectionMatchSetUpdate[];

}

/**
 * Converts an object of type 'WafRegionalUpdateSqlInjectionMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateSqlInjectionMatchSetRequest(obj: WafRegionalUpdateSqlInjectionMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSetId': obj.sqlInjectionMatchSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRegionalSqlInjectionMatchSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateSqlInjectionMatchSetResponse
 */
export interface WafRegionalUpdateSqlInjectionMatchSetResponse {
  /**
   * @schema WafRegionalUpdateSqlInjectionMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateSqlInjectionMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateSqlInjectionMatchSetResponse(obj: WafRegionalUpdateSqlInjectionMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateWebAclRequest
 */
export interface WafRegionalUpdateWebAclRequest {
  /**
   * @schema WafRegionalUpdateWebAclRequest#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafRegionalUpdateWebAclRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalUpdateWebAclRequest#Updates
   */
  readonly updates?: WafRegionalWebAclUpdate[];

  /**
   * @schema WafRegionalUpdateWebAclRequest#DefaultAction
   */
  readonly defaultAction?: WafRegionalWafAction;

}

/**
 * Converts an object of type 'WafRegionalUpdateWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateWebAclRequest(obj: WafRegionalUpdateWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRegionalWebAclUpdate(y)),
    'DefaultAction': toJson_WafRegionalWafAction(obj.defaultAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateWebAclResponse
 */
export interface WafRegionalUpdateWebAclResponse {
  /**
   * @schema WafRegionalUpdateWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateWebAclResponse(obj: WafRegionalUpdateWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateXssMatchSetRequest
 */
export interface WafRegionalUpdateXssMatchSetRequest {
  /**
   * @schema WafRegionalUpdateXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId?: string;

  /**
   * @schema WafRegionalUpdateXssMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafRegionalUpdateXssMatchSetRequest#Updates
   */
  readonly updates?: WafRegionalXssMatchSetUpdate[];

}

/**
 * Converts an object of type 'WafRegionalUpdateXssMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateXssMatchSetRequest(obj: WafRegionalUpdateXssMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSetId': obj.xssMatchSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRegionalXssMatchSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalUpdateXssMatchSetResponse
 */
export interface WafRegionalUpdateXssMatchSetResponse {
  /**
   * @schema WafRegionalUpdateXssMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafRegionalUpdateXssMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalUpdateXssMatchSetResponse(obj: WafRegionalUpdateXssMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalByteMatchSet
 */
export interface WafRegionalByteMatchSet {
  /**
   * @schema WafRegionalByteMatchSet#ByteMatchSetId
   */
  readonly byteMatchSetId?: string;

  /**
   * @schema WafRegionalByteMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalByteMatchSet#ByteMatchTuples
   */
  readonly byteMatchTuples?: WafRegionalByteMatchTuple[];

}

/**
 * Converts an object of type 'WafRegionalByteMatchSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalByteMatchSet(obj: WafRegionalByteMatchSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSetId': obj.byteMatchSetId,
    'Name': obj.name,
    'ByteMatchTuples': obj.byteMatchTuples?.map(y => toJson_WafRegionalByteMatchTuple(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGeoMatchSet
 */
export interface WafRegionalGeoMatchSet {
  /**
   * @schema WafRegionalGeoMatchSet#GeoMatchSetId
   */
  readonly geoMatchSetId?: string;

  /**
   * @schema WafRegionalGeoMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalGeoMatchSet#GeoMatchConstraints
   */
  readonly geoMatchConstraints?: WafRegionalGeoMatchConstraint[];

}

/**
 * Converts an object of type 'WafRegionalGeoMatchSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGeoMatchSet(obj: WafRegionalGeoMatchSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSetId': obj.geoMatchSetId,
    'Name': obj.name,
    'GeoMatchConstraints': obj.geoMatchConstraints?.map(y => toJson_WafRegionalGeoMatchConstraint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalIpSet
 */
export interface WafRegionalIpSet {
  /**
   * @schema WafRegionalIpSet#IPSetId
   */
  readonly ipSetId?: string;

  /**
   * @schema WafRegionalIpSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalIpSet#IPSetDescriptors
   */
  readonly ipSetDescriptors?: WafRegionalIpSetDescriptor[];

}

/**
 * Converts an object of type 'WafRegionalIpSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalIpSet(obj: WafRegionalIpSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSetId': obj.ipSetId,
    'Name': obj.name,
    'IPSetDescriptors': obj.ipSetDescriptors?.map(y => toJson_WafRegionalIpSetDescriptor(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalTag
 */
export interface WafRegionalTag {
  /**
   * @schema WafRegionalTag#Key
   */
  readonly key?: string;

  /**
   * @schema WafRegionalTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'WafRegionalTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalTag(obj: WafRegionalTag | undefined): Record<string, any> | undefined {
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
 * @schema WafRegionalRateBasedRule
 */
export interface WafRegionalRateBasedRule {
  /**
   * @schema WafRegionalRateBasedRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRegionalRateBasedRule#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalRateBasedRule#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafRegionalRateBasedRule#MatchPredicates
   */
  readonly matchPredicates?: WafRegionalPredicate[];

  /**
   * @schema WafRegionalRateBasedRule#RateKey
   */
  readonly rateKey?: string;

  /**
   * @schema WafRegionalRateBasedRule#RateLimit
   */
  readonly rateLimit?: number;

}

/**
 * Converts an object of type 'WafRegionalRateBasedRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRateBasedRule(obj: WafRegionalRateBasedRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'Name': obj.name,
    'MetricName': obj.metricName,
    'MatchPredicates': obj.matchPredicates?.map(y => toJson_WafRegionalPredicate(y)),
    'RateKey': obj.rateKey,
    'RateLimit': obj.rateLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRegexMatchSet
 */
export interface WafRegionalRegexMatchSet {
  /**
   * @schema WafRegionalRegexMatchSet#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

  /**
   * @schema WafRegionalRegexMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalRegexMatchSet#RegexMatchTuples
   */
  readonly regexMatchTuples?: WafRegionalRegexMatchTuple[];

}

/**
 * Converts an object of type 'WafRegionalRegexMatchSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRegexMatchSet(obj: WafRegionalRegexMatchSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSetId': obj.regexMatchSetId,
    'Name': obj.name,
    'RegexMatchTuples': obj.regexMatchTuples?.map(y => toJson_WafRegionalRegexMatchTuple(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRegexPatternSet
 */
export interface WafRegionalRegexPatternSet {
  /**
   * @schema WafRegionalRegexPatternSet#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

  /**
   * @schema WafRegionalRegexPatternSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalRegexPatternSet#RegexPatternStrings
   */
  readonly regexPatternStrings?: string[];

}

/**
 * Converts an object of type 'WafRegionalRegexPatternSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRegexPatternSet(obj: WafRegionalRegexPatternSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSetId': obj.regexPatternSetId,
    'Name': obj.name,
    'RegexPatternStrings': obj.regexPatternStrings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRule
 */
export interface WafRegionalRule {
  /**
   * @schema WafRegionalRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRegionalRule#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalRule#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafRegionalRule#Predicates
   */
  readonly predicates?: WafRegionalPredicate[];

}

/**
 * Converts an object of type 'WafRegionalRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRule(obj: WafRegionalRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'Name': obj.name,
    'MetricName': obj.metricName,
    'Predicates': obj.predicates?.map(y => toJson_WafRegionalPredicate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRuleGroup
 */
export interface WafRegionalRuleGroup {
  /**
   * @schema WafRegionalRuleGroup#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafRegionalRuleGroup#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalRuleGroup#MetricName
   */
  readonly metricName?: string;

}

/**
 * Converts an object of type 'WafRegionalRuleGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRuleGroup(obj: WafRegionalRuleGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupId': obj.ruleGroupId,
    'Name': obj.name,
    'MetricName': obj.metricName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalSizeConstraintSet
 */
export interface WafRegionalSizeConstraintSet {
  /**
   * @schema WafRegionalSizeConstraintSet#SizeConstraintSetId
   */
  readonly sizeConstraintSetId?: string;

  /**
   * @schema WafRegionalSizeConstraintSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalSizeConstraintSet#SizeConstraints
   */
  readonly sizeConstraints?: WafRegionalSizeConstraint[];

}

/**
 * Converts an object of type 'WafRegionalSizeConstraintSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalSizeConstraintSet(obj: WafRegionalSizeConstraintSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSetId': obj.sizeConstraintSetId,
    'Name': obj.name,
    'SizeConstraints': obj.sizeConstraints?.map(y => toJson_WafRegionalSizeConstraint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalSqlInjectionMatchSet
 */
export interface WafRegionalSqlInjectionMatchSet {
  /**
   * @schema WafRegionalSqlInjectionMatchSet#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId?: string;

  /**
   * @schema WafRegionalSqlInjectionMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalSqlInjectionMatchSet#SqlInjectionMatchTuples
   */
  readonly sqlInjectionMatchTuples?: WafRegionalSqlInjectionMatchTuple[];

}

/**
 * Converts an object of type 'WafRegionalSqlInjectionMatchSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalSqlInjectionMatchSet(obj: WafRegionalSqlInjectionMatchSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSetId': obj.sqlInjectionMatchSetId,
    'Name': obj.name,
    'SqlInjectionMatchTuples': obj.sqlInjectionMatchTuples?.map(y => toJson_WafRegionalSqlInjectionMatchTuple(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalWafAction
 */
export interface WafRegionalWafAction {
  /**
   * @schema WafRegionalWafAction#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'WafRegionalWafAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalWafAction(obj: WafRegionalWafAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalWebAcl
 */
export interface WafRegionalWebAcl {
  /**
   * @schema WafRegionalWebAcl#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafRegionalWebAcl#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalWebAcl#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafRegionalWebAcl#DefaultAction
   */
  readonly defaultAction?: WafRegionalWafAction;

  /**
   * @schema WafRegionalWebAcl#Rules
   */
  readonly rules?: WafRegionalActivatedRule[];

  /**
   * @schema WafRegionalWebAcl#WebACLArn
   */
  readonly webAclArn?: string;

}

/**
 * Converts an object of type 'WafRegionalWebAcl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalWebAcl(obj: WafRegionalWebAcl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
    'Name': obj.name,
    'MetricName': obj.metricName,
    'DefaultAction': toJson_WafRegionalWafAction(obj.defaultAction),
    'Rules': obj.rules?.map(y => toJson_WafRegionalActivatedRule(y)),
    'WebACLArn': obj.webAclArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalXssMatchSet
 */
export interface WafRegionalXssMatchSet {
  /**
   * @schema WafRegionalXssMatchSet#XssMatchSetId
   */
  readonly xssMatchSetId?: string;

  /**
   * @schema WafRegionalXssMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalXssMatchSet#XssMatchTuples
   */
  readonly xssMatchTuples?: WafRegionalXssMatchTuple[];

}

/**
 * Converts an object of type 'WafRegionalXssMatchSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalXssMatchSet(obj: WafRegionalXssMatchSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSetId': obj.xssMatchSetId,
    'Name': obj.name,
    'XssMatchTuples': obj.xssMatchTuples?.map(y => toJson_WafRegionalXssMatchTuple(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalLoggingConfiguration
 */
export interface WafRegionalLoggingConfiguration {
  /**
   * @schema WafRegionalLoggingConfiguration#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema WafRegionalLoggingConfiguration#LogDestinationConfigs
   */
  readonly logDestinationConfigs?: string[];

  /**
   * @schema WafRegionalLoggingConfiguration#RedactedFields
   */
  readonly redactedFields?: WafRegionalFieldToMatch[];

}

/**
 * Converts an object of type 'WafRegionalLoggingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalLoggingConfiguration(obj: WafRegionalLoggingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'LogDestinationConfigs': obj.logDestinationConfigs?.map(y => y),
    'RedactedFields': obj.redactedFields?.map(y => toJson_WafRegionalFieldToMatch(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalTimeWindow
 */
export interface WafRegionalTimeWindow {
  /**
   * @schema WafRegionalTimeWindow#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema WafRegionalTimeWindow#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'WafRegionalTimeWindow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalTimeWindow(obj: WafRegionalTimeWindow | undefined): Record<string, any> | undefined {
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
 * @schema WafRegionalSampledHttpRequest
 */
export interface WafRegionalSampledHttpRequest {
  /**
   * @schema WafRegionalSampledHttpRequest#Request
   */
  readonly request?: WafRegionalHttpRequest;

  /**
   * @schema WafRegionalSampledHttpRequest#Weight
   */
  readonly weight?: number;

  /**
   * @schema WafRegionalSampledHttpRequest#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema WafRegionalSampledHttpRequest#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalSampledHttpRequest#RuleWithinRuleGroup
   */
  readonly ruleWithinRuleGroup?: string;

}

/**
 * Converts an object of type 'WafRegionalSampledHttpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalSampledHttpRequest(obj: WafRegionalSampledHttpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Request': toJson_WafRegionalHttpRequest(obj.request),
    'Weight': obj.weight,
    'Timestamp': obj.timestamp,
    'Action': obj.action,
    'RuleWithinRuleGroup': obj.ruleWithinRuleGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalWebAclSummary
 */
export interface WafRegionalWebAclSummary {
  /**
   * @schema WafRegionalWebAclSummary#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafRegionalWebAclSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalWebAclSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalWebAclSummary(obj: WafRegionalWebAclSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalActivatedRule
 */
export interface WafRegionalActivatedRule {
  /**
   * @schema WafRegionalActivatedRule#Priority
   */
  readonly priority?: number;

  /**
   * @schema WafRegionalActivatedRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRegionalActivatedRule#Action
   */
  readonly action?: WafRegionalWafAction;

  /**
   * @schema WafRegionalActivatedRule#OverrideAction
   */
  readonly overrideAction?: WafRegionalWafOverrideAction;

  /**
   * @schema WafRegionalActivatedRule#Type
   */
  readonly type?: string;

  /**
   * @schema WafRegionalActivatedRule#ExcludedRules
   */
  readonly excludedRules?: WafRegionalExcludedRule[];

}

/**
 * Converts an object of type 'WafRegionalActivatedRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalActivatedRule(obj: WafRegionalActivatedRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Priority': obj.priority,
    'RuleId': obj.ruleId,
    'Action': toJson_WafRegionalWafAction(obj.action),
    'OverrideAction': toJson_WafRegionalWafOverrideAction(obj.overrideAction),
    'Type': obj.type,
    'ExcludedRules': obj.excludedRules?.map(y => toJson_WafRegionalExcludedRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalByteMatchSetSummary
 */
export interface WafRegionalByteMatchSetSummary {
  /**
   * @schema WafRegionalByteMatchSetSummary#ByteMatchSetId
   */
  readonly byteMatchSetId?: string;

  /**
   * @schema WafRegionalByteMatchSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalByteMatchSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalByteMatchSetSummary(obj: WafRegionalByteMatchSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSetId': obj.byteMatchSetId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGeoMatchSetSummary
 */
export interface WafRegionalGeoMatchSetSummary {
  /**
   * @schema WafRegionalGeoMatchSetSummary#GeoMatchSetId
   */
  readonly geoMatchSetId?: string;

  /**
   * @schema WafRegionalGeoMatchSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalGeoMatchSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGeoMatchSetSummary(obj: WafRegionalGeoMatchSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSetId': obj.geoMatchSetId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalIpSetSummary
 */
export interface WafRegionalIpSetSummary {
  /**
   * @schema WafRegionalIpSetSummary#IPSetId
   */
  readonly ipSetId?: string;

  /**
   * @schema WafRegionalIpSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalIpSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalIpSetSummary(obj: WafRegionalIpSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSetId': obj.ipSetId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRuleSummary
 */
export interface WafRegionalRuleSummary {
  /**
   * @schema WafRegionalRuleSummary#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRegionalRuleSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalRuleSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRuleSummary(obj: WafRegionalRuleSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRegexMatchSetSummary
 */
export interface WafRegionalRegexMatchSetSummary {
  /**
   * @schema WafRegionalRegexMatchSetSummary#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

  /**
   * @schema WafRegionalRegexMatchSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalRegexMatchSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRegexMatchSetSummary(obj: WafRegionalRegexMatchSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSetId': obj.regexMatchSetId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRegexPatternSetSummary
 */
export interface WafRegionalRegexPatternSetSummary {
  /**
   * @schema WafRegionalRegexPatternSetSummary#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

  /**
   * @schema WafRegionalRegexPatternSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalRegexPatternSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRegexPatternSetSummary(obj: WafRegionalRegexPatternSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSetId': obj.regexPatternSetId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRuleGroupSummary
 */
export interface WafRegionalRuleGroupSummary {
  /**
   * @schema WafRegionalRuleGroupSummary#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafRegionalRuleGroupSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalRuleGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRuleGroupSummary(obj: WafRegionalRuleGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupId': obj.ruleGroupId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalSizeConstraintSetSummary
 */
export interface WafRegionalSizeConstraintSetSummary {
  /**
   * @schema WafRegionalSizeConstraintSetSummary#SizeConstraintSetId
   */
  readonly sizeConstraintSetId?: string;

  /**
   * @schema WafRegionalSizeConstraintSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalSizeConstraintSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalSizeConstraintSetSummary(obj: WafRegionalSizeConstraintSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSetId': obj.sizeConstraintSetId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalSqlInjectionMatchSetSummary
 */
export interface WafRegionalSqlInjectionMatchSetSummary {
  /**
   * @schema WafRegionalSqlInjectionMatchSetSummary#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId?: string;

  /**
   * @schema WafRegionalSqlInjectionMatchSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalSqlInjectionMatchSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalSqlInjectionMatchSetSummary(obj: WafRegionalSqlInjectionMatchSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSetId': obj.sqlInjectionMatchSetId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalSubscribedRuleGroupSummary
 */
export interface WafRegionalSubscribedRuleGroupSummary {
  /**
   * @schema WafRegionalSubscribedRuleGroupSummary#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafRegionalSubscribedRuleGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalSubscribedRuleGroupSummary#MetricName
   */
  readonly metricName?: string;

}

/**
 * Converts an object of type 'WafRegionalSubscribedRuleGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalSubscribedRuleGroupSummary(obj: WafRegionalSubscribedRuleGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupId': obj.ruleGroupId,
    'Name': obj.name,
    'MetricName': obj.metricName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalTagInfoForResource
 */
export interface WafRegionalTagInfoForResource {
  /**
   * @schema WafRegionalTagInfoForResource#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema WafRegionalTagInfoForResource#TagList
   */
  readonly tagList?: WafRegionalTag[];

}

/**
 * Converts an object of type 'WafRegionalTagInfoForResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalTagInfoForResource(obj: WafRegionalTagInfoForResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagList': obj.tagList?.map(y => toJson_WafRegionalTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalXssMatchSetSummary
 */
export interface WafRegionalXssMatchSetSummary {
  /**
   * @schema WafRegionalXssMatchSetSummary#XssMatchSetId
   */
  readonly xssMatchSetId?: string;

  /**
   * @schema WafRegionalXssMatchSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegionalXssMatchSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalXssMatchSetSummary(obj: WafRegionalXssMatchSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSetId': obj.xssMatchSetId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalByteMatchSetUpdate
 */
export interface WafRegionalByteMatchSetUpdate {
  /**
   * @schema WafRegionalByteMatchSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalByteMatchSetUpdate#ByteMatchTuple
   */
  readonly byteMatchTuple?: WafRegionalByteMatchTuple;

}

/**
 * Converts an object of type 'WafRegionalByteMatchSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalByteMatchSetUpdate(obj: WafRegionalByteMatchSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'ByteMatchTuple': toJson_WafRegionalByteMatchTuple(obj.byteMatchTuple),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGeoMatchSetUpdate
 */
export interface WafRegionalGeoMatchSetUpdate {
  /**
   * @schema WafRegionalGeoMatchSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalGeoMatchSetUpdate#GeoMatchConstraint
   */
  readonly geoMatchConstraint?: WafRegionalGeoMatchConstraint;

}

/**
 * Converts an object of type 'WafRegionalGeoMatchSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGeoMatchSetUpdate(obj: WafRegionalGeoMatchSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'GeoMatchConstraint': toJson_WafRegionalGeoMatchConstraint(obj.geoMatchConstraint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalIpSetUpdate
 */
export interface WafRegionalIpSetUpdate {
  /**
   * @schema WafRegionalIpSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalIpSetUpdate#IPSetDescriptor
   */
  readonly ipSetDescriptor?: WafRegionalIpSetDescriptor;

}

/**
 * Converts an object of type 'WafRegionalIpSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalIpSetUpdate(obj: WafRegionalIpSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'IPSetDescriptor': toJson_WafRegionalIpSetDescriptor(obj.ipSetDescriptor),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRuleUpdate
 */
export interface WafRegionalRuleUpdate {
  /**
   * @schema WafRegionalRuleUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalRuleUpdate#Predicate
   */
  readonly predicate?: WafRegionalPredicate;

}

/**
 * Converts an object of type 'WafRegionalRuleUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRuleUpdate(obj: WafRegionalRuleUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'Predicate': toJson_WafRegionalPredicate(obj.predicate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRegexMatchSetUpdate
 */
export interface WafRegionalRegexMatchSetUpdate {
  /**
   * @schema WafRegionalRegexMatchSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalRegexMatchSetUpdate#RegexMatchTuple
   */
  readonly regexMatchTuple?: WafRegionalRegexMatchTuple;

}

/**
 * Converts an object of type 'WafRegionalRegexMatchSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRegexMatchSetUpdate(obj: WafRegionalRegexMatchSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'RegexMatchTuple': toJson_WafRegionalRegexMatchTuple(obj.regexMatchTuple),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRegexPatternSetUpdate
 */
export interface WafRegionalRegexPatternSetUpdate {
  /**
   * @schema WafRegionalRegexPatternSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalRegexPatternSetUpdate#RegexPatternString
   */
  readonly regexPatternString?: string;

}

/**
 * Converts an object of type 'WafRegionalRegexPatternSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRegexPatternSetUpdate(obj: WafRegionalRegexPatternSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'RegexPatternString': obj.regexPatternString,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRuleGroupUpdate
 */
export interface WafRegionalRuleGroupUpdate {
  /**
   * @schema WafRegionalRuleGroupUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalRuleGroupUpdate#ActivatedRule
   */
  readonly activatedRule?: WafRegionalActivatedRule;

}

/**
 * Converts an object of type 'WafRegionalRuleGroupUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRuleGroupUpdate(obj: WafRegionalRuleGroupUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'ActivatedRule': toJson_WafRegionalActivatedRule(obj.activatedRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalSizeConstraintSetUpdate
 */
export interface WafRegionalSizeConstraintSetUpdate {
  /**
   * @schema WafRegionalSizeConstraintSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalSizeConstraintSetUpdate#SizeConstraint
   */
  readonly sizeConstraint?: WafRegionalSizeConstraint;

}

/**
 * Converts an object of type 'WafRegionalSizeConstraintSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalSizeConstraintSetUpdate(obj: WafRegionalSizeConstraintSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'SizeConstraint': toJson_WafRegionalSizeConstraint(obj.sizeConstraint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalSqlInjectionMatchSetUpdate
 */
export interface WafRegionalSqlInjectionMatchSetUpdate {
  /**
   * @schema WafRegionalSqlInjectionMatchSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalSqlInjectionMatchSetUpdate#SqlInjectionMatchTuple
   */
  readonly sqlInjectionMatchTuple?: WafRegionalSqlInjectionMatchTuple;

}

/**
 * Converts an object of type 'WafRegionalSqlInjectionMatchSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalSqlInjectionMatchSetUpdate(obj: WafRegionalSqlInjectionMatchSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'SqlInjectionMatchTuple': toJson_WafRegionalSqlInjectionMatchTuple(obj.sqlInjectionMatchTuple),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalWebAclUpdate
 */
export interface WafRegionalWebAclUpdate {
  /**
   * @schema WafRegionalWebAclUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalWebAclUpdate#ActivatedRule
   */
  readonly activatedRule?: WafRegionalActivatedRule;

}

/**
 * Converts an object of type 'WafRegionalWebAclUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalWebAclUpdate(obj: WafRegionalWebAclUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'ActivatedRule': toJson_WafRegionalActivatedRule(obj.activatedRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalXssMatchSetUpdate
 */
export interface WafRegionalXssMatchSetUpdate {
  /**
   * @schema WafRegionalXssMatchSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegionalXssMatchSetUpdate#XssMatchTuple
   */
  readonly xssMatchTuple?: WafRegionalXssMatchTuple;

}

/**
 * Converts an object of type 'WafRegionalXssMatchSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalXssMatchSetUpdate(obj: WafRegionalXssMatchSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'XssMatchTuple': toJson_WafRegionalXssMatchTuple(obj.xssMatchTuple),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalByteMatchTuple
 */
export interface WafRegionalByteMatchTuple {
  /**
   * @schema WafRegionalByteMatchTuple#FieldToMatch
   */
  readonly fieldToMatch?: WafRegionalFieldToMatch;

  /**
   * @schema WafRegionalByteMatchTuple#TargetString
   */
  readonly targetString?: any;

  /**
   * @schema WafRegionalByteMatchTuple#TextTransformation
   */
  readonly textTransformation?: string;

  /**
   * @schema WafRegionalByteMatchTuple#PositionalConstraint
   */
  readonly positionalConstraint?: string;

}

/**
 * Converts an object of type 'WafRegionalByteMatchTuple' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalByteMatchTuple(obj: WafRegionalByteMatchTuple | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_WafRegionalFieldToMatch(obj.fieldToMatch),
    'TargetString': obj.targetString,
    'TextTransformation': obj.textTransformation,
    'PositionalConstraint': obj.positionalConstraint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalGeoMatchConstraint
 */
export interface WafRegionalGeoMatchConstraint {
  /**
   * @schema WafRegionalGeoMatchConstraint#Type
   */
  readonly type?: string;

  /**
   * @schema WafRegionalGeoMatchConstraint#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'WafRegionalGeoMatchConstraint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalGeoMatchConstraint(obj: WafRegionalGeoMatchConstraint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalIpSetDescriptor
 */
export interface WafRegionalIpSetDescriptor {
  /**
   * @schema WafRegionalIpSetDescriptor#Type
   */
  readonly type?: string;

  /**
   * @schema WafRegionalIpSetDescriptor#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'WafRegionalIpSetDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalIpSetDescriptor(obj: WafRegionalIpSetDescriptor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalPredicate
 */
export interface WafRegionalPredicate {
  /**
   * @schema WafRegionalPredicate#Negated
   */
  readonly negated?: boolean;

  /**
   * @schema WafRegionalPredicate#Type
   */
  readonly type?: string;

  /**
   * @schema WafRegionalPredicate#DataId
   */
  readonly dataId?: string;

}

/**
 * Converts an object of type 'WafRegionalPredicate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalPredicate(obj: WafRegionalPredicate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Negated': obj.negated,
    'Type': obj.type,
    'DataId': obj.dataId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalRegexMatchTuple
 */
export interface WafRegionalRegexMatchTuple {
  /**
   * @schema WafRegionalRegexMatchTuple#FieldToMatch
   */
  readonly fieldToMatch?: WafRegionalFieldToMatch;

  /**
   * @schema WafRegionalRegexMatchTuple#TextTransformation
   */
  readonly textTransformation?: string;

  /**
   * @schema WafRegionalRegexMatchTuple#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

}

/**
 * Converts an object of type 'WafRegionalRegexMatchTuple' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalRegexMatchTuple(obj: WafRegionalRegexMatchTuple | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_WafRegionalFieldToMatch(obj.fieldToMatch),
    'TextTransformation': obj.textTransformation,
    'RegexPatternSetId': obj.regexPatternSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalSizeConstraint
 */
export interface WafRegionalSizeConstraint {
  /**
   * @schema WafRegionalSizeConstraint#FieldToMatch
   */
  readonly fieldToMatch?: WafRegionalFieldToMatch;

  /**
   * @schema WafRegionalSizeConstraint#TextTransformation
   */
  readonly textTransformation?: string;

  /**
   * @schema WafRegionalSizeConstraint#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema WafRegionalSizeConstraint#Size
   */
  readonly size?: number;

}

/**
 * Converts an object of type 'WafRegionalSizeConstraint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalSizeConstraint(obj: WafRegionalSizeConstraint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_WafRegionalFieldToMatch(obj.fieldToMatch),
    'TextTransformation': obj.textTransformation,
    'ComparisonOperator': obj.comparisonOperator,
    'Size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalSqlInjectionMatchTuple
 */
export interface WafRegionalSqlInjectionMatchTuple {
  /**
   * @schema WafRegionalSqlInjectionMatchTuple#FieldToMatch
   */
  readonly fieldToMatch?: WafRegionalFieldToMatch;

  /**
   * @schema WafRegionalSqlInjectionMatchTuple#TextTransformation
   */
  readonly textTransformation?: string;

}

/**
 * Converts an object of type 'WafRegionalSqlInjectionMatchTuple' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalSqlInjectionMatchTuple(obj: WafRegionalSqlInjectionMatchTuple | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_WafRegionalFieldToMatch(obj.fieldToMatch),
    'TextTransformation': obj.textTransformation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalXssMatchTuple
 */
export interface WafRegionalXssMatchTuple {
  /**
   * @schema WafRegionalXssMatchTuple#FieldToMatch
   */
  readonly fieldToMatch?: WafRegionalFieldToMatch;

  /**
   * @schema WafRegionalXssMatchTuple#TextTransformation
   */
  readonly textTransformation?: string;

}

/**
 * Converts an object of type 'WafRegionalXssMatchTuple' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalXssMatchTuple(obj: WafRegionalXssMatchTuple | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_WafRegionalFieldToMatch(obj.fieldToMatch),
    'TextTransformation': obj.textTransformation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalFieldToMatch
 */
export interface WafRegionalFieldToMatch {
  /**
   * @schema WafRegionalFieldToMatch#Type
   */
  readonly type?: string;

  /**
   * @schema WafRegionalFieldToMatch#Data
   */
  readonly data?: string;

}

/**
 * Converts an object of type 'WafRegionalFieldToMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalFieldToMatch(obj: WafRegionalFieldToMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Data': obj.data,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalHttpRequest
 */
export interface WafRegionalHttpRequest {
  /**
   * @schema WafRegionalHttpRequest#ClientIP
   */
  readonly clientIp?: string;

  /**
   * @schema WafRegionalHttpRequest#Country
   */
  readonly country?: string;

  /**
   * @schema WafRegionalHttpRequest#URI
   */
  readonly uri?: string;

  /**
   * @schema WafRegionalHttpRequest#Method
   */
  readonly method?: string;

  /**
   * @schema WafRegionalHttpRequest#HTTPVersion
   */
  readonly httpVersion?: string;

  /**
   * @schema WafRegionalHttpRequest#Headers
   */
  readonly headers?: WafRegionalHttpHeader[];

}

/**
 * Converts an object of type 'WafRegionalHttpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalHttpRequest(obj: WafRegionalHttpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientIP': obj.clientIp,
    'Country': obj.country,
    'URI': obj.uri,
    'Method': obj.method,
    'HTTPVersion': obj.httpVersion,
    'Headers': obj.headers?.map(y => toJson_WafRegionalHttpHeader(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalWafOverrideAction
 */
export interface WafRegionalWafOverrideAction {
  /**
   * @schema WafRegionalWafOverrideAction#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'WafRegionalWafOverrideAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalWafOverrideAction(obj: WafRegionalWafOverrideAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalExcludedRule
 */
export interface WafRegionalExcludedRule {
  /**
   * @schema WafRegionalExcludedRule#RuleId
   */
  readonly ruleId?: string;

}

/**
 * Converts an object of type 'WafRegionalExcludedRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalExcludedRule(obj: WafRegionalExcludedRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegionalHttpHeader
 */
export interface WafRegionalHttpHeader {
  /**
   * @schema WafRegionalHttpHeader#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalHttpHeader#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'WafRegionalHttpHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegionalHttpHeader(obj: WafRegionalHttpHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
