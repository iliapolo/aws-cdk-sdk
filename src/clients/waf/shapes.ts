/**
 * @schema WafCreateByteMatchSetRequest
 */
export interface WafCreateByteMatchSetRequest {
  /**
   * @schema WafCreateByteMatchSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateByteMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateByteMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateByteMatchSetRequest(obj: WafCreateByteMatchSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafCreateByteMatchSetResponse
 */
export interface WafCreateByteMatchSetResponse {
  /**
   * @schema WafCreateByteMatchSetResponse#ByteMatchSet
   */
  readonly byteMatchSet?: WafByteMatchSet;

  /**
   * @schema WafCreateByteMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateByteMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateByteMatchSetResponse(obj: WafCreateByteMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSet': toJson_WafByteMatchSet(obj.byteMatchSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateGeoMatchSetRequest
 */
export interface WafCreateGeoMatchSetRequest {
  /**
   * @schema WafCreateGeoMatchSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateGeoMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateGeoMatchSetRequest(obj: WafCreateGeoMatchSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafCreateGeoMatchSetResponse
 */
export interface WafCreateGeoMatchSetResponse {
  /**
   * @schema WafCreateGeoMatchSetResponse#GeoMatchSet
   */
  readonly geoMatchSet?: WafGeoMatchSet;

  /**
   * @schema WafCreateGeoMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateGeoMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateGeoMatchSetResponse(obj: WafCreateGeoMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSet': toJson_WafGeoMatchSet(obj.geoMatchSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateIpSetRequest
 */
export interface WafCreateIpSetRequest {
  /**
   * @schema WafCreateIpSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateIpSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateIpSetRequest(obj: WafCreateIpSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafCreateIpSetResponse
 */
export interface WafCreateIpSetResponse {
  /**
   * @schema WafCreateIpSetResponse#IPSet
   */
  readonly ipSet?: WafipSet;

  /**
   * @schema WafCreateIpSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateIpSetResponse(obj: WafCreateIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSet': toJson_WafipSet(obj.ipSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateRateBasedRuleRequest
 */
export interface WafCreateRateBasedRuleRequest {
  /**
   * @schema WafCreateRateBasedRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateRateBasedRuleRequest#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafCreateRateBasedRuleRequest#RateKey
   */
  readonly rateKey?: string;

  /**
   * @schema WafCreateRateBasedRuleRequest#RateLimit
   */
  readonly rateLimit?: number;

  /**
   * @schema WafCreateRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafCreateRateBasedRuleRequest#Tags
   */
  readonly tags?: WafTag[];

}

/**
 * Converts an object of type 'WafCreateRateBasedRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateRateBasedRuleRequest(obj: WafCreateRateBasedRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MetricName': obj.metricName,
    'RateKey': obj.rateKey,
    'RateLimit': obj.rateLimit,
    'ChangeToken': obj.changeToken,
    'Tags': obj.tags?.map(y => toJson_WafTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateRateBasedRuleResponse
 */
export interface WafCreateRateBasedRuleResponse {
  /**
   * @schema WafCreateRateBasedRuleResponse#Rule
   */
  readonly rule?: WafRateBasedRule;

  /**
   * @schema WafCreateRateBasedRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateRateBasedRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateRateBasedRuleResponse(obj: WafCreateRateBasedRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': toJson_WafRateBasedRule(obj.rule),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateRegexMatchSetRequest
 */
export interface WafCreateRegexMatchSetRequest {
  /**
   * @schema WafCreateRegexMatchSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateRegexMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateRegexMatchSetRequest(obj: WafCreateRegexMatchSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafCreateRegexMatchSetResponse
 */
export interface WafCreateRegexMatchSetResponse {
  /**
   * @schema WafCreateRegexMatchSetResponse#RegexMatchSet
   */
  readonly regexMatchSet?: WafRegexMatchSet;

  /**
   * @schema WafCreateRegexMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateRegexMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateRegexMatchSetResponse(obj: WafCreateRegexMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSet': toJson_WafRegexMatchSet(obj.regexMatchSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateRegexPatternSetRequest
 */
export interface WafCreateRegexPatternSetRequest {
  /**
   * @schema WafCreateRegexPatternSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateRegexPatternSetRequest(obj: WafCreateRegexPatternSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafCreateRegexPatternSetResponse
 */
export interface WafCreateRegexPatternSetResponse {
  /**
   * @schema WafCreateRegexPatternSetResponse#RegexPatternSet
   */
  readonly regexPatternSet?: WafRegexPatternSet;

  /**
   * @schema WafCreateRegexPatternSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateRegexPatternSetResponse(obj: WafCreateRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSet': toJson_WafRegexPatternSet(obj.regexPatternSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateRuleRequest
 */
export interface WafCreateRuleRequest {
  /**
   * @schema WafCreateRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateRuleRequest#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafCreateRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafCreateRuleRequest#Tags
   */
  readonly tags?: WafTag[];

}

/**
 * Converts an object of type 'WafCreateRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateRuleRequest(obj: WafCreateRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MetricName': obj.metricName,
    'ChangeToken': obj.changeToken,
    'Tags': obj.tags?.map(y => toJson_WafTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateRuleResponse
 */
export interface WafCreateRuleResponse {
  /**
   * @schema WafCreateRuleResponse#Rule
   */
  readonly rule?: WafRule;

  /**
   * @schema WafCreateRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateRuleResponse(obj: WafCreateRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': toJson_WafRule(obj.rule),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateRuleGroupRequest
 */
export interface WafCreateRuleGroupRequest {
  /**
   * @schema WafCreateRuleGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateRuleGroupRequest#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafCreateRuleGroupRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafCreateRuleGroupRequest#Tags
   */
  readonly tags?: WafTag[];

}

/**
 * Converts an object of type 'WafCreateRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateRuleGroupRequest(obj: WafCreateRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MetricName': obj.metricName,
    'ChangeToken': obj.changeToken,
    'Tags': obj.tags?.map(y => toJson_WafTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateRuleGroupResponse
 */
export interface WafCreateRuleGroupResponse {
  /**
   * @schema WafCreateRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: WafRuleGroup;

  /**
   * @schema WafCreateRuleGroupResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateRuleGroupResponse(obj: WafCreateRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroup': toJson_WafRuleGroup(obj.ruleGroup),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateSizeConstraintSetRequest
 */
export interface WafCreateSizeConstraintSetRequest {
  /**
   * @schema WafCreateSizeConstraintSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateSizeConstraintSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateSizeConstraintSetRequest(obj: WafCreateSizeConstraintSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafCreateSizeConstraintSetResponse
 */
export interface WafCreateSizeConstraintSetResponse {
  /**
   * @schema WafCreateSizeConstraintSetResponse#SizeConstraintSet
   */
  readonly sizeConstraintSet?: WafSizeConstraintSet;

  /**
   * @schema WafCreateSizeConstraintSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateSizeConstraintSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateSizeConstraintSetResponse(obj: WafCreateSizeConstraintSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSet': toJson_WafSizeConstraintSet(obj.sizeConstraintSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateSqlInjectionMatchSetRequest
 */
export interface WafCreateSqlInjectionMatchSetRequest {
  /**
   * @schema WafCreateSqlInjectionMatchSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateSqlInjectionMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateSqlInjectionMatchSetRequest(obj: WafCreateSqlInjectionMatchSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafCreateSqlInjectionMatchSetResponse
 */
export interface WafCreateSqlInjectionMatchSetResponse {
  /**
   * @schema WafCreateSqlInjectionMatchSetResponse#SqlInjectionMatchSet
   */
  readonly sqlInjectionMatchSet?: WafSqlInjectionMatchSet;

  /**
   * @schema WafCreateSqlInjectionMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateSqlInjectionMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateSqlInjectionMatchSetResponse(obj: WafCreateSqlInjectionMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSet': toJson_WafSqlInjectionMatchSet(obj.sqlInjectionMatchSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateWebAclRequest
 */
export interface WafCreateWebAclRequest {
  /**
   * @schema WafCreateWebAclRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateWebAclRequest#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafCreateWebAclRequest#DefaultAction
   */
  readonly defaultAction?: WafWafAction;

  /**
   * @schema WafCreateWebAclRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafCreateWebAclRequest#Tags
   */
  readonly tags?: WafTag[];

}

/**
 * Converts an object of type 'WafCreateWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateWebAclRequest(obj: WafCreateWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MetricName': obj.metricName,
    'DefaultAction': toJson_WafWafAction(obj.defaultAction),
    'ChangeToken': obj.changeToken,
    'Tags': obj.tags?.map(y => toJson_WafTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateWebAclResponse
 */
export interface WafCreateWebAclResponse {
  /**
   * @schema WafCreateWebAclResponse#WebACL
   */
  readonly webAcl?: WafWebAcl;

  /**
   * @schema WafCreateWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateWebAclResponse(obj: WafCreateWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACL': toJson_WafWebAcl(obj.webAcl),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateWebAclMigrationStackRequest
 */
export interface WafCreateWebAclMigrationStackRequest {
  /**
   * @schema WafCreateWebAclMigrationStackRequest#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafCreateWebAclMigrationStackRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema WafCreateWebAclMigrationStackRequest#IgnoreUnsupportedType
   */
  readonly ignoreUnsupportedType?: boolean;

}

/**
 * Converts an object of type 'WafCreateWebAclMigrationStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateWebAclMigrationStackRequest(obj: WafCreateWebAclMigrationStackRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafCreateWebAclMigrationStackResponse
 */
export interface WafCreateWebAclMigrationStackResponse {
  /**
   * @schema WafCreateWebAclMigrationStackResponse#S3ObjectUrl
   */
  readonly s3ObjectUrl?: string;

}

/**
 * Converts an object of type 'WafCreateWebAclMigrationStackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateWebAclMigrationStackResponse(obj: WafCreateWebAclMigrationStackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3ObjectUrl': obj.s3ObjectUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafCreateXssMatchSetRequest
 */
export interface WafCreateXssMatchSetRequest {
  /**
   * @schema WafCreateXssMatchSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WafCreateXssMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateXssMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateXssMatchSetRequest(obj: WafCreateXssMatchSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafCreateXssMatchSetResponse
 */
export interface WafCreateXssMatchSetResponse {
  /**
   * @schema WafCreateXssMatchSetResponse#XssMatchSet
   */
  readonly xssMatchSet?: WafXssMatchSet;

  /**
   * @schema WafCreateXssMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafCreateXssMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafCreateXssMatchSetResponse(obj: WafCreateXssMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSet': toJson_WafXssMatchSet(obj.xssMatchSet),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteByteMatchSetRequest
 */
export interface WafDeleteByteMatchSetRequest {
  /**
   * @schema WafDeleteByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId?: string;

  /**
   * @schema WafDeleteByteMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteByteMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteByteMatchSetRequest(obj: WafDeleteByteMatchSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteByteMatchSetResponse
 */
export interface WafDeleteByteMatchSetResponse {
  /**
   * @schema WafDeleteByteMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteByteMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteByteMatchSetResponse(obj: WafDeleteByteMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteGeoMatchSetRequest
 */
export interface WafDeleteGeoMatchSetRequest {
  /**
   * @schema WafDeleteGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId?: string;

  /**
   * @schema WafDeleteGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteGeoMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteGeoMatchSetRequest(obj: WafDeleteGeoMatchSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteGeoMatchSetResponse
 */
export interface WafDeleteGeoMatchSetResponse {
  /**
   * @schema WafDeleteGeoMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteGeoMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteGeoMatchSetResponse(obj: WafDeleteGeoMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteIpSetRequest
 */
export interface WafDeleteIpSetRequest {
  /**
   * @schema WafDeleteIpSetRequest#IPSetId
   */
  readonly ipSetId?: string;

  /**
   * @schema WafDeleteIpSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteIpSetRequest(obj: WafDeleteIpSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteIpSetResponse
 */
export interface WafDeleteIpSetResponse {
  /**
   * @schema WafDeleteIpSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteIpSetResponse(obj: WafDeleteIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteLoggingConfigurationRequest
 */
export interface WafDeleteLoggingConfigurationRequest {
  /**
   * @schema WafDeleteLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafDeleteLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteLoggingConfigurationRequest(obj: WafDeleteLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteLoggingConfigurationResponse
 */
export interface WafDeleteLoggingConfigurationResponse {
}

/**
 * Converts an object of type 'WafDeleteLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteLoggingConfigurationResponse(obj: WafDeleteLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeletePermissionPolicyRequest
 */
export interface WafDeletePermissionPolicyRequest {
  /**
   * @schema WafDeletePermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafDeletePermissionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeletePermissionPolicyRequest(obj: WafDeletePermissionPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeletePermissionPolicyResponse
 */
export interface WafDeletePermissionPolicyResponse {
}

/**
 * Converts an object of type 'WafDeletePermissionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeletePermissionPolicyResponse(obj: WafDeletePermissionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteRateBasedRuleRequest
 */
export interface WafDeleteRateBasedRuleRequest {
  /**
   * @schema WafDeleteRateBasedRuleRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafDeleteRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteRateBasedRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteRateBasedRuleRequest(obj: WafDeleteRateBasedRuleRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteRateBasedRuleResponse
 */
export interface WafDeleteRateBasedRuleResponse {
  /**
   * @schema WafDeleteRateBasedRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteRateBasedRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteRateBasedRuleResponse(obj: WafDeleteRateBasedRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteRegexMatchSetRequest
 */
export interface WafDeleteRegexMatchSetRequest {
  /**
   * @schema WafDeleteRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

  /**
   * @schema WafDeleteRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteRegexMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteRegexMatchSetRequest(obj: WafDeleteRegexMatchSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteRegexMatchSetResponse
 */
export interface WafDeleteRegexMatchSetResponse {
  /**
   * @schema WafDeleteRegexMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteRegexMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteRegexMatchSetResponse(obj: WafDeleteRegexMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteRegexPatternSetRequest
 */
export interface WafDeleteRegexPatternSetRequest {
  /**
   * @schema WafDeleteRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

  /**
   * @schema WafDeleteRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteRegexPatternSetRequest(obj: WafDeleteRegexPatternSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteRegexPatternSetResponse
 */
export interface WafDeleteRegexPatternSetResponse {
  /**
   * @schema WafDeleteRegexPatternSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteRegexPatternSetResponse(obj: WafDeleteRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteRuleRequest
 */
export interface WafDeleteRuleRequest {
  /**
   * @schema WafDeleteRuleRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafDeleteRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteRuleRequest(obj: WafDeleteRuleRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteRuleResponse
 */
export interface WafDeleteRuleResponse {
  /**
   * @schema WafDeleteRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteRuleResponse(obj: WafDeleteRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteRuleGroupRequest
 */
export interface WafDeleteRuleGroupRequest {
  /**
   * @schema WafDeleteRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafDeleteRuleGroupRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteRuleGroupRequest(obj: WafDeleteRuleGroupRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteRuleGroupResponse
 */
export interface WafDeleteRuleGroupResponse {
  /**
   * @schema WafDeleteRuleGroupResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteRuleGroupResponse(obj: WafDeleteRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteSizeConstraintSetRequest
 */
export interface WafDeleteSizeConstraintSetRequest {
  /**
   * @schema WafDeleteSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId?: string;

  /**
   * @schema WafDeleteSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteSizeConstraintSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteSizeConstraintSetRequest(obj: WafDeleteSizeConstraintSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteSizeConstraintSetResponse
 */
export interface WafDeleteSizeConstraintSetResponse {
  /**
   * @schema WafDeleteSizeConstraintSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteSizeConstraintSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteSizeConstraintSetResponse(obj: WafDeleteSizeConstraintSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteSqlInjectionMatchSetRequest
 */
export interface WafDeleteSqlInjectionMatchSetRequest {
  /**
   * @schema WafDeleteSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId?: string;

  /**
   * @schema WafDeleteSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteSqlInjectionMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteSqlInjectionMatchSetRequest(obj: WafDeleteSqlInjectionMatchSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteSqlInjectionMatchSetResponse
 */
export interface WafDeleteSqlInjectionMatchSetResponse {
  /**
   * @schema WafDeleteSqlInjectionMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteSqlInjectionMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteSqlInjectionMatchSetResponse(obj: WafDeleteSqlInjectionMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteWebAclRequest
 */
export interface WafDeleteWebAclRequest {
  /**
   * @schema WafDeleteWebAclRequest#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafDeleteWebAclRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteWebAclRequest(obj: WafDeleteWebAclRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteWebAclResponse
 */
export interface WafDeleteWebAclResponse {
  /**
   * @schema WafDeleteWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteWebAclResponse(obj: WafDeleteWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafDeleteXssMatchSetRequest
 */
export interface WafDeleteXssMatchSetRequest {
  /**
   * @schema WafDeleteXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId?: string;

  /**
   * @schema WafDeleteXssMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteXssMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteXssMatchSetRequest(obj: WafDeleteXssMatchSetRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafDeleteXssMatchSetResponse
 */
export interface WafDeleteXssMatchSetResponse {
  /**
   * @schema WafDeleteXssMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafDeleteXssMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafDeleteXssMatchSetResponse(obj: WafDeleteXssMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetByteMatchSetRequest
 */
export interface WafGetByteMatchSetRequest {
  /**
   * @schema WafGetByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId?: string;

}

/**
 * Converts an object of type 'WafGetByteMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetByteMatchSetRequest(obj: WafGetByteMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSetId': obj.byteMatchSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetByteMatchSetResponse
 */
export interface WafGetByteMatchSetResponse {
  /**
   * @schema WafGetByteMatchSetResponse#ByteMatchSet
   */
  readonly byteMatchSet?: WafByteMatchSet;

}

/**
 * Converts an object of type 'WafGetByteMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetByteMatchSetResponse(obj: WafGetByteMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSet': toJson_WafByteMatchSet(obj.byteMatchSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetChangeTokenRequest
 */
export interface WafGetChangeTokenRequest {
}

/**
 * Converts an object of type 'WafGetChangeTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetChangeTokenRequest(obj: WafGetChangeTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetChangeTokenResponse
 */
export interface WafGetChangeTokenResponse {
  /**
   * @schema WafGetChangeTokenResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafGetChangeTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetChangeTokenResponse(obj: WafGetChangeTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetChangeTokenStatusRequest
 */
export interface WafGetChangeTokenStatusRequest {
  /**
   * @schema WafGetChangeTokenStatusRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafGetChangeTokenStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetChangeTokenStatusRequest(obj: WafGetChangeTokenStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetChangeTokenStatusResponse
 */
export interface WafGetChangeTokenStatusResponse {
  /**
   * @schema WafGetChangeTokenStatusResponse#ChangeTokenStatus
   */
  readonly changeTokenStatus?: string;

}

/**
 * Converts an object of type 'WafGetChangeTokenStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetChangeTokenStatusResponse(obj: WafGetChangeTokenStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeTokenStatus': obj.changeTokenStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetGeoMatchSetRequest
 */
export interface WafGetGeoMatchSetRequest {
  /**
   * @schema WafGetGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId?: string;

}

/**
 * Converts an object of type 'WafGetGeoMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetGeoMatchSetRequest(obj: WafGetGeoMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSetId': obj.geoMatchSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetGeoMatchSetResponse
 */
export interface WafGetGeoMatchSetResponse {
  /**
   * @schema WafGetGeoMatchSetResponse#GeoMatchSet
   */
  readonly geoMatchSet?: WafGeoMatchSet;

}

/**
 * Converts an object of type 'WafGetGeoMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetGeoMatchSetResponse(obj: WafGetGeoMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSet': toJson_WafGeoMatchSet(obj.geoMatchSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetIpSetRequest
 */
export interface WafGetIpSetRequest {
  /**
   * @schema WafGetIpSetRequest#IPSetId
   */
  readonly ipSetId?: string;

}

/**
 * Converts an object of type 'WafGetIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetIpSetRequest(obj: WafGetIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSetId': obj.ipSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetIpSetResponse
 */
export interface WafGetIpSetResponse {
  /**
   * @schema WafGetIpSetResponse#IPSet
   */
  readonly ipSet?: WafipSet;

}

/**
 * Converts an object of type 'WafGetIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetIpSetResponse(obj: WafGetIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSet': toJson_WafipSet(obj.ipSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetLoggingConfigurationRequest
 */
export interface WafGetLoggingConfigurationRequest {
  /**
   * @schema WafGetLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafGetLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetLoggingConfigurationRequest(obj: WafGetLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetLoggingConfigurationResponse
 */
export interface WafGetLoggingConfigurationResponse {
  /**
   * @schema WafGetLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: WafLoggingConfiguration;

}

/**
 * Converts an object of type 'WafGetLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetLoggingConfigurationResponse(obj: WafGetLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_WafLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetPermissionPolicyRequest
 */
export interface WafGetPermissionPolicyRequest {
  /**
   * @schema WafGetPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafGetPermissionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetPermissionPolicyRequest(obj: WafGetPermissionPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetPermissionPolicyResponse
 */
export interface WafGetPermissionPolicyResponse {
  /**
   * @schema WafGetPermissionPolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'WafGetPermissionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetPermissionPolicyResponse(obj: WafGetPermissionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetRateBasedRuleRequest
 */
export interface WafGetRateBasedRuleRequest {
  /**
   * @schema WafGetRateBasedRuleRequest#RuleId
   */
  readonly ruleId?: string;

}

/**
 * Converts an object of type 'WafGetRateBasedRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRateBasedRuleRequest(obj: WafGetRateBasedRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetRateBasedRuleResponse
 */
export interface WafGetRateBasedRuleResponse {
  /**
   * @schema WafGetRateBasedRuleResponse#Rule
   */
  readonly rule?: WafRateBasedRule;

}

/**
 * Converts an object of type 'WafGetRateBasedRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRateBasedRuleResponse(obj: WafGetRateBasedRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': toJson_WafRateBasedRule(obj.rule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetRateBasedRuleManagedKeysRequest
 */
export interface WafGetRateBasedRuleManagedKeysRequest {
  /**
   * @schema WafGetRateBasedRuleManagedKeysRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafGetRateBasedRuleManagedKeysRequest#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * Converts an object of type 'WafGetRateBasedRuleManagedKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRateBasedRuleManagedKeysRequest(obj: WafGetRateBasedRuleManagedKeysRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafGetRateBasedRuleManagedKeysResponse
 */
export interface WafGetRateBasedRuleManagedKeysResponse {
  /**
   * @schema WafGetRateBasedRuleManagedKeysResponse#ManagedKeys
   */
  readonly managedKeys?: string[];

  /**
   * @schema WafGetRateBasedRuleManagedKeysResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * Converts an object of type 'WafGetRateBasedRuleManagedKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRateBasedRuleManagedKeysResponse(obj: WafGetRateBasedRuleManagedKeysResponse | undefined): Record<string, any> | undefined {
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
 * @schema WafGetRegexMatchSetRequest
 */
export interface WafGetRegexMatchSetRequest {
  /**
   * @schema WafGetRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

}

/**
 * Converts an object of type 'WafGetRegexMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRegexMatchSetRequest(obj: WafGetRegexMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSetId': obj.regexMatchSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetRegexMatchSetResponse
 */
export interface WafGetRegexMatchSetResponse {
  /**
   * @schema WafGetRegexMatchSetResponse#RegexMatchSet
   */
  readonly regexMatchSet?: WafRegexMatchSet;

}

/**
 * Converts an object of type 'WafGetRegexMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRegexMatchSetResponse(obj: WafGetRegexMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSet': toJson_WafRegexMatchSet(obj.regexMatchSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetRegexPatternSetRequest
 */
export interface WafGetRegexPatternSetRequest {
  /**
   * @schema WafGetRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

}

/**
 * Converts an object of type 'WafGetRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRegexPatternSetRequest(obj: WafGetRegexPatternSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSetId': obj.regexPatternSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetRegexPatternSetResponse
 */
export interface WafGetRegexPatternSetResponse {
  /**
   * @schema WafGetRegexPatternSetResponse#RegexPatternSet
   */
  readonly regexPatternSet?: WafRegexPatternSet;

}

/**
 * Converts an object of type 'WafGetRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRegexPatternSetResponse(obj: WafGetRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSet': toJson_WafRegexPatternSet(obj.regexPatternSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetRuleRequest
 */
export interface WafGetRuleRequest {
  /**
   * @schema WafGetRuleRequest#RuleId
   */
  readonly ruleId?: string;

}

/**
 * Converts an object of type 'WafGetRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRuleRequest(obj: WafGetRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetRuleResponse
 */
export interface WafGetRuleResponse {
  /**
   * @schema WafGetRuleResponse#Rule
   */
  readonly rule?: WafRule;

}

/**
 * Converts an object of type 'WafGetRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRuleResponse(obj: WafGetRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rule': toJson_WafRule(obj.rule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetRuleGroupRequest
 */
export interface WafGetRuleGroupRequest {
  /**
   * @schema WafGetRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId?: string;

}

/**
 * Converts an object of type 'WafGetRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRuleGroupRequest(obj: WafGetRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupId': obj.ruleGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetRuleGroupResponse
 */
export interface WafGetRuleGroupResponse {
  /**
   * @schema WafGetRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: WafRuleGroup;

}

/**
 * Converts an object of type 'WafGetRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetRuleGroupResponse(obj: WafGetRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroup': toJson_WafRuleGroup(obj.ruleGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetSampledRequestsRequest
 */
export interface WafGetSampledRequestsRequest {
  /**
   * @schema WafGetSampledRequestsRequest#WebAclId
   */
  readonly webAclId?: string;

  /**
   * @schema WafGetSampledRequestsRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafGetSampledRequestsRequest#TimeWindow
   */
  readonly timeWindow?: WafTimeWindow;

  /**
   * @schema WafGetSampledRequestsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'WafGetSampledRequestsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetSampledRequestsRequest(obj: WafGetSampledRequestsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebAclId': obj.webAclId,
    'RuleId': obj.ruleId,
    'TimeWindow': toJson_WafTimeWindow(obj.timeWindow),
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetSampledRequestsResponse
 */
export interface WafGetSampledRequestsResponse {
  /**
   * @schema WafGetSampledRequestsResponse#SampledRequests
   */
  readonly sampledRequests?: WafSampledHttpRequest[];

  /**
   * @schema WafGetSampledRequestsResponse#PopulationSize
   */
  readonly populationSize?: number;

  /**
   * @schema WafGetSampledRequestsResponse#TimeWindow
   */
  readonly timeWindow?: WafTimeWindow;

}

/**
 * Converts an object of type 'WafGetSampledRequestsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetSampledRequestsResponse(obj: WafGetSampledRequestsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SampledRequests': obj.sampledRequests?.map(y => toJson_WafSampledHttpRequest(y)),
    'PopulationSize': obj.populationSize,
    'TimeWindow': toJson_WafTimeWindow(obj.timeWindow),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetSizeConstraintSetRequest
 */
export interface WafGetSizeConstraintSetRequest {
  /**
   * @schema WafGetSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId?: string;

}

/**
 * Converts an object of type 'WafGetSizeConstraintSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetSizeConstraintSetRequest(obj: WafGetSizeConstraintSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSetId': obj.sizeConstraintSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetSizeConstraintSetResponse
 */
export interface WafGetSizeConstraintSetResponse {
  /**
   * @schema WafGetSizeConstraintSetResponse#SizeConstraintSet
   */
  readonly sizeConstraintSet?: WafSizeConstraintSet;

}

/**
 * Converts an object of type 'WafGetSizeConstraintSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetSizeConstraintSetResponse(obj: WafGetSizeConstraintSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSet': toJson_WafSizeConstraintSet(obj.sizeConstraintSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetSqlInjectionMatchSetRequest
 */
export interface WafGetSqlInjectionMatchSetRequest {
  /**
   * @schema WafGetSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId?: string;

}

/**
 * Converts an object of type 'WafGetSqlInjectionMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetSqlInjectionMatchSetRequest(obj: WafGetSqlInjectionMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSetId': obj.sqlInjectionMatchSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetSqlInjectionMatchSetResponse
 */
export interface WafGetSqlInjectionMatchSetResponse {
  /**
   * @schema WafGetSqlInjectionMatchSetResponse#SqlInjectionMatchSet
   */
  readonly sqlInjectionMatchSet?: WafSqlInjectionMatchSet;

}

/**
 * Converts an object of type 'WafGetSqlInjectionMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetSqlInjectionMatchSetResponse(obj: WafGetSqlInjectionMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSet': toJson_WafSqlInjectionMatchSet(obj.sqlInjectionMatchSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetWebAclRequest
 */
export interface WafGetWebAclRequest {
  /**
   * @schema WafGetWebAclRequest#WebACLId
   */
  readonly webAclId?: string;

}

/**
 * Converts an object of type 'WafGetWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetWebAclRequest(obj: WafGetWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetWebAclResponse
 */
export interface WafGetWebAclResponse {
  /**
   * @schema WafGetWebAclResponse#WebACL
   */
  readonly webAcl?: WafWebAcl;

}

/**
 * Converts an object of type 'WafGetWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetWebAclResponse(obj: WafGetWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACL': toJson_WafWebAcl(obj.webAcl),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetXssMatchSetRequest
 */
export interface WafGetXssMatchSetRequest {
  /**
   * @schema WafGetXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId?: string;

}

/**
 * Converts an object of type 'WafGetXssMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetXssMatchSetRequest(obj: WafGetXssMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSetId': obj.xssMatchSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGetXssMatchSetResponse
 */
export interface WafGetXssMatchSetResponse {
  /**
   * @schema WafGetXssMatchSetResponse#XssMatchSet
   */
  readonly xssMatchSet?: WafXssMatchSet;

}

/**
 * Converts an object of type 'WafGetXssMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGetXssMatchSetResponse(obj: WafGetXssMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSet': toJson_WafXssMatchSet(obj.xssMatchSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListActivatedRulesInRuleGroupRequest
 */
export interface WafListActivatedRulesInRuleGroupRequest {
  /**
   * @schema WafListActivatedRulesInRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafListActivatedRulesInRuleGroupRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListActivatedRulesInRuleGroupRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListActivatedRulesInRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListActivatedRulesInRuleGroupRequest(obj: WafListActivatedRulesInRuleGroupRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListActivatedRulesInRuleGroupResponse
 */
export interface WafListActivatedRulesInRuleGroupResponse {
  /**
   * @schema WafListActivatedRulesInRuleGroupResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListActivatedRulesInRuleGroupResponse#ActivatedRules
   */
  readonly activatedRules?: WafActivatedRule[];

}

/**
 * Converts an object of type 'WafListActivatedRulesInRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListActivatedRulesInRuleGroupResponse(obj: WafListActivatedRulesInRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'ActivatedRules': obj.activatedRules?.map(y => toJson_WafActivatedRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListByteMatchSetsRequest
 */
export interface WafListByteMatchSetsRequest {
  /**
   * @schema WafListByteMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListByteMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListByteMatchSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListByteMatchSetsRequest(obj: WafListByteMatchSetsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListByteMatchSetsResponse
 */
export interface WafListByteMatchSetsResponse {
  /**
   * @schema WafListByteMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListByteMatchSetsResponse#ByteMatchSets
   */
  readonly byteMatchSets?: WafByteMatchSetSummary[];

}

/**
 * Converts an object of type 'WafListByteMatchSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListByteMatchSetsResponse(obj: WafListByteMatchSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'ByteMatchSets': obj.byteMatchSets?.map(y => toJson_WafByteMatchSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListGeoMatchSetsRequest
 */
export interface WafListGeoMatchSetsRequest {
  /**
   * @schema WafListGeoMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListGeoMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListGeoMatchSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListGeoMatchSetsRequest(obj: WafListGeoMatchSetsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListGeoMatchSetsResponse
 */
export interface WafListGeoMatchSetsResponse {
  /**
   * @schema WafListGeoMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListGeoMatchSetsResponse#GeoMatchSets
   */
  readonly geoMatchSets?: WafGeoMatchSetSummary[];

}

/**
 * Converts an object of type 'WafListGeoMatchSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListGeoMatchSetsResponse(obj: WafListGeoMatchSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'GeoMatchSets': obj.geoMatchSets?.map(y => toJson_WafGeoMatchSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListIpSetsRequest
 */
export interface WafListIpSetsRequest {
  /**
   * @schema WafListIpSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListIpSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListIpSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListIpSetsRequest(obj: WafListIpSetsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListIpSetsResponse
 */
export interface WafListIpSetsResponse {
  /**
   * @schema WafListIpSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListIpSetsResponse#IPSets
   */
  readonly ipSets?: WafipSetSummary[];

}

/**
 * Converts an object of type 'WafListIpSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListIpSetsResponse(obj: WafListIpSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'IPSets': obj.ipSets?.map(y => toJson_WafipSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListLoggingConfigurationsRequest
 */
export interface WafListLoggingConfigurationsRequest {
  /**
   * @schema WafListLoggingConfigurationsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListLoggingConfigurationsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListLoggingConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListLoggingConfigurationsRequest(obj: WafListLoggingConfigurationsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListLoggingConfigurationsResponse
 */
export interface WafListLoggingConfigurationsResponse {
  /**
   * @schema WafListLoggingConfigurationsResponse#LoggingConfigurations
   */
  readonly loggingConfigurations?: WafLoggingConfiguration[];

  /**
   * @schema WafListLoggingConfigurationsResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * Converts an object of type 'WafListLoggingConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListLoggingConfigurationsResponse(obj: WafListLoggingConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfigurations': obj.loggingConfigurations?.map(y => toJson_WafLoggingConfiguration(y)),
    'NextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListRateBasedRulesRequest
 */
export interface WafListRateBasedRulesRequest {
  /**
   * @schema WafListRateBasedRulesRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListRateBasedRulesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListRateBasedRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListRateBasedRulesRequest(obj: WafListRateBasedRulesRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListRateBasedRulesResponse
 */
export interface WafListRateBasedRulesResponse {
  /**
   * @schema WafListRateBasedRulesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListRateBasedRulesResponse#Rules
   */
  readonly rules?: WafRuleSummary[];

}

/**
 * Converts an object of type 'WafListRateBasedRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListRateBasedRulesResponse(obj: WafListRateBasedRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Rules': obj.rules?.map(y => toJson_WafRuleSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListRegexMatchSetsRequest
 */
export interface WafListRegexMatchSetsRequest {
  /**
   * @schema WafListRegexMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListRegexMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListRegexMatchSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListRegexMatchSetsRequest(obj: WafListRegexMatchSetsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListRegexMatchSetsResponse
 */
export interface WafListRegexMatchSetsResponse {
  /**
   * @schema WafListRegexMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListRegexMatchSetsResponse#RegexMatchSets
   */
  readonly regexMatchSets?: WafRegexMatchSetSummary[];

}

/**
 * Converts an object of type 'WafListRegexMatchSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListRegexMatchSetsResponse(obj: WafListRegexMatchSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'RegexMatchSets': obj.regexMatchSets?.map(y => toJson_WafRegexMatchSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListRegexPatternSetsRequest
 */
export interface WafListRegexPatternSetsRequest {
  /**
   * @schema WafListRegexPatternSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListRegexPatternSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListRegexPatternSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListRegexPatternSetsRequest(obj: WafListRegexPatternSetsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListRegexPatternSetsResponse
 */
export interface WafListRegexPatternSetsResponse {
  /**
   * @schema WafListRegexPatternSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListRegexPatternSetsResponse#RegexPatternSets
   */
  readonly regexPatternSets?: WafRegexPatternSetSummary[];

}

/**
 * Converts an object of type 'WafListRegexPatternSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListRegexPatternSetsResponse(obj: WafListRegexPatternSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'RegexPatternSets': obj.regexPatternSets?.map(y => toJson_WafRegexPatternSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListRuleGroupsRequest
 */
export interface WafListRuleGroupsRequest {
  /**
   * @schema WafListRuleGroupsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListRuleGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListRuleGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListRuleGroupsRequest(obj: WafListRuleGroupsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListRuleGroupsResponse
 */
export interface WafListRuleGroupsResponse {
  /**
   * @schema WafListRuleGroupsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListRuleGroupsResponse#RuleGroups
   */
  readonly ruleGroups?: WafRuleGroupSummary[];

}

/**
 * Converts an object of type 'WafListRuleGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListRuleGroupsResponse(obj: WafListRuleGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'RuleGroups': obj.ruleGroups?.map(y => toJson_WafRuleGroupSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListRulesRequest
 */
export interface WafListRulesRequest {
  /**
   * @schema WafListRulesRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListRulesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListRulesRequest(obj: WafListRulesRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListRulesResponse
 */
export interface WafListRulesResponse {
  /**
   * @schema WafListRulesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListRulesResponse#Rules
   */
  readonly rules?: WafRuleSummary[];

}

/**
 * Converts an object of type 'WafListRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListRulesResponse(obj: WafListRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Rules': obj.rules?.map(y => toJson_WafRuleSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListSizeConstraintSetsRequest
 */
export interface WafListSizeConstraintSetsRequest {
  /**
   * @schema WafListSizeConstraintSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListSizeConstraintSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListSizeConstraintSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListSizeConstraintSetsRequest(obj: WafListSizeConstraintSetsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListSizeConstraintSetsResponse
 */
export interface WafListSizeConstraintSetsResponse {
  /**
   * @schema WafListSizeConstraintSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListSizeConstraintSetsResponse#SizeConstraintSets
   */
  readonly sizeConstraintSets?: WafSizeConstraintSetSummary[];

}

/**
 * Converts an object of type 'WafListSizeConstraintSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListSizeConstraintSetsResponse(obj: WafListSizeConstraintSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'SizeConstraintSets': obj.sizeConstraintSets?.map(y => toJson_WafSizeConstraintSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListSqlInjectionMatchSetsRequest
 */
export interface WafListSqlInjectionMatchSetsRequest {
  /**
   * @schema WafListSqlInjectionMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListSqlInjectionMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListSqlInjectionMatchSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListSqlInjectionMatchSetsRequest(obj: WafListSqlInjectionMatchSetsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListSqlInjectionMatchSetsResponse
 */
export interface WafListSqlInjectionMatchSetsResponse {
  /**
   * @schema WafListSqlInjectionMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListSqlInjectionMatchSetsResponse#SqlInjectionMatchSets
   */
  readonly sqlInjectionMatchSets?: WafSqlInjectionMatchSetSummary[];

}

/**
 * Converts an object of type 'WafListSqlInjectionMatchSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListSqlInjectionMatchSetsResponse(obj: WafListSqlInjectionMatchSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'SqlInjectionMatchSets': obj.sqlInjectionMatchSets?.map(y => toJson_WafSqlInjectionMatchSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListSubscribedRuleGroupsRequest
 */
export interface WafListSubscribedRuleGroupsRequest {
  /**
   * @schema WafListSubscribedRuleGroupsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListSubscribedRuleGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListSubscribedRuleGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListSubscribedRuleGroupsRequest(obj: WafListSubscribedRuleGroupsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListSubscribedRuleGroupsResponse
 */
export interface WafListSubscribedRuleGroupsResponse {
  /**
   * @schema WafListSubscribedRuleGroupsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListSubscribedRuleGroupsResponse#RuleGroups
   */
  readonly ruleGroups?: WafSubscribedRuleGroupSummary[];

}

/**
 * Converts an object of type 'WafListSubscribedRuleGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListSubscribedRuleGroupsResponse(obj: WafListSubscribedRuleGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'RuleGroups': obj.ruleGroups?.map(y => toJson_WafSubscribedRuleGroupSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListTagsForResourceRequest
 */
export interface WafListTagsForResourceRequest {
  /**
   * @schema WafListTagsForResourceRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListTagsForResourceRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WafListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WafListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListTagsForResourceRequest(obj: WafListTagsForResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListTagsForResourceResponse
 */
export interface WafListTagsForResourceResponse {
  /**
   * @schema WafListTagsForResourceResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListTagsForResourceResponse#TagInfoForResource
   */
  readonly tagInfoForResource?: WafTagInfoForResource;

}

/**
 * Converts an object of type 'WafListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListTagsForResourceResponse(obj: WafListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'TagInfoForResource': toJson_WafTagInfoForResource(obj.tagInfoForResource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListWebAcLsRequest
 */
export interface WafListWebAcLsRequest {
  /**
   * @schema WafListWebAcLsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListWebAcLsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListWebAcLsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListWebAcLsRequest(obj: WafListWebAcLsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListWebAcLsResponse
 */
export interface WafListWebAcLsResponse {
  /**
   * @schema WafListWebAcLsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListWebAcLsResponse#WebACLs
   */
  readonly webAcLs?: WafWebAclSummary[];

}

/**
 * Converts an object of type 'WafListWebAcLsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListWebAcLsResponse(obj: WafListWebAcLsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'WebACLs': obj.webAcLs?.map(y => toJson_WafWebAclSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafListXssMatchSetsRequest
 */
export interface WafListXssMatchSetsRequest {
  /**
   * @schema WafListXssMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListXssMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'WafListXssMatchSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListXssMatchSetsRequest(obj: WafListXssMatchSetsRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafListXssMatchSetsResponse
 */
export interface WafListXssMatchSetsResponse {
  /**
   * @schema WafListXssMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema WafListXssMatchSetsResponse#XssMatchSets
   */
  readonly xssMatchSets?: WafXssMatchSetSummary[];

}

/**
 * Converts an object of type 'WafListXssMatchSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafListXssMatchSetsResponse(obj: WafListXssMatchSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'XssMatchSets': obj.xssMatchSets?.map(y => toJson_WafXssMatchSetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafPutLoggingConfigurationRequest
 */
export interface WafPutLoggingConfigurationRequest {
  /**
   * @schema WafPutLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration?: WafLoggingConfiguration;

}

/**
 * Converts an object of type 'WafPutLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafPutLoggingConfigurationRequest(obj: WafPutLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_WafLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafPutLoggingConfigurationResponse
 */
export interface WafPutLoggingConfigurationResponse {
  /**
   * @schema WafPutLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: WafLoggingConfiguration;

}

/**
 * Converts an object of type 'WafPutLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafPutLoggingConfigurationResponse(obj: WafPutLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_WafLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafPutPermissionPolicyRequest
 */
export interface WafPutPermissionPolicyRequest {
  /**
   * @schema WafPutPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema WafPutPermissionPolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'WafPutPermissionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafPutPermissionPolicyRequest(obj: WafPutPermissionPolicyRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafPutPermissionPolicyResponse
 */
export interface WafPutPermissionPolicyResponse {
}

/**
 * Converts an object of type 'WafPutPermissionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafPutPermissionPolicyResponse(obj: WafPutPermissionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafTagResourceRequest
 */
export interface WafTagResourceRequest {
  /**
   * @schema WafTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema WafTagResourceRequest#Tags
   */
  readonly tags?: WafTag[];

}

/**
 * Converts an object of type 'WafTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafTagResourceRequest(obj: WafTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_WafTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafTagResourceResponse
 */
export interface WafTagResourceResponse {
}

/**
 * Converts an object of type 'WafTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafTagResourceResponse(obj: WafTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUntagResourceRequest
 */
export interface WafUntagResourceRequest {
  /**
   * @schema WafUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema WafUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'WafUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUntagResourceRequest(obj: WafUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema WafUntagResourceResponse
 */
export interface WafUntagResourceResponse {
}

/**
 * Converts an object of type 'WafUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUntagResourceResponse(obj: WafUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateByteMatchSetRequest
 */
export interface WafUpdateByteMatchSetRequest {
  /**
   * @schema WafUpdateByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId?: string;

  /**
   * @schema WafUpdateByteMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafUpdateByteMatchSetRequest#Updates
   */
  readonly updates?: WafByteMatchSetUpdate[];

}

/**
 * Converts an object of type 'WafUpdateByteMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateByteMatchSetRequest(obj: WafUpdateByteMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSetId': obj.byteMatchSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafByteMatchSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateByteMatchSetResponse
 */
export interface WafUpdateByteMatchSetResponse {
  /**
   * @schema WafUpdateByteMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateByteMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateByteMatchSetResponse(obj: WafUpdateByteMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateGeoMatchSetRequest
 */
export interface WafUpdateGeoMatchSetRequest {
  /**
   * @schema WafUpdateGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId?: string;

  /**
   * @schema WafUpdateGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafUpdateGeoMatchSetRequest#Updates
   */
  readonly updates?: WafGeoMatchSetUpdate[];

}

/**
 * Converts an object of type 'WafUpdateGeoMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateGeoMatchSetRequest(obj: WafUpdateGeoMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSetId': obj.geoMatchSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafGeoMatchSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateGeoMatchSetResponse
 */
export interface WafUpdateGeoMatchSetResponse {
  /**
   * @schema WafUpdateGeoMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateGeoMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateGeoMatchSetResponse(obj: WafUpdateGeoMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateIpSetRequest
 */
export interface WafUpdateIpSetRequest {
  /**
   * @schema WafUpdateIpSetRequest#IPSetId
   */
  readonly ipSetId?: string;

  /**
   * @schema WafUpdateIpSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafUpdateIpSetRequest#Updates
   */
  readonly updates?: WafipSetUpdate[];

}

/**
 * Converts an object of type 'WafUpdateIpSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateIpSetRequest(obj: WafUpdateIpSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSetId': obj.ipSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafipSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateIpSetResponse
 */
export interface WafUpdateIpSetResponse {
  /**
   * @schema WafUpdateIpSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateIpSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateIpSetResponse(obj: WafUpdateIpSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateRateBasedRuleRequest
 */
export interface WafUpdateRateBasedRuleRequest {
  /**
   * @schema WafUpdateRateBasedRuleRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafUpdateRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafUpdateRateBasedRuleRequest#Updates
   */
  readonly updates?: WafRuleUpdate[];

  /**
   * @schema WafUpdateRateBasedRuleRequest#RateLimit
   */
  readonly rateLimit?: number;

}

/**
 * Converts an object of type 'WafUpdateRateBasedRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateRateBasedRuleRequest(obj: WafUpdateRateBasedRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRuleUpdate(y)),
    'RateLimit': obj.rateLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateRateBasedRuleResponse
 */
export interface WafUpdateRateBasedRuleResponse {
  /**
   * @schema WafUpdateRateBasedRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateRateBasedRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateRateBasedRuleResponse(obj: WafUpdateRateBasedRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateRegexMatchSetRequest
 */
export interface WafUpdateRegexMatchSetRequest {
  /**
   * @schema WafUpdateRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

  /**
   * @schema WafUpdateRegexMatchSetRequest#Updates
   */
  readonly updates?: WafRegexMatchSetUpdate[];

  /**
   * @schema WafUpdateRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateRegexMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateRegexMatchSetRequest(obj: WafUpdateRegexMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSetId': obj.regexMatchSetId,
    'Updates': obj.updates?.map(y => toJson_WafRegexMatchSetUpdate(y)),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateRegexMatchSetResponse
 */
export interface WafUpdateRegexMatchSetResponse {
  /**
   * @schema WafUpdateRegexMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateRegexMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateRegexMatchSetResponse(obj: WafUpdateRegexMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateRegexPatternSetRequest
 */
export interface WafUpdateRegexPatternSetRequest {
  /**
   * @schema WafUpdateRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

  /**
   * @schema WafUpdateRegexPatternSetRequest#Updates
   */
  readonly updates?: WafRegexPatternSetUpdate[];

  /**
   * @schema WafUpdateRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateRegexPatternSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateRegexPatternSetRequest(obj: WafUpdateRegexPatternSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexPatternSetId': obj.regexPatternSetId,
    'Updates': obj.updates?.map(y => toJson_WafRegexPatternSetUpdate(y)),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateRegexPatternSetResponse
 */
export interface WafUpdateRegexPatternSetResponse {
  /**
   * @schema WafUpdateRegexPatternSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateRegexPatternSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateRegexPatternSetResponse(obj: WafUpdateRegexPatternSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateRuleRequest
 */
export interface WafUpdateRuleRequest {
  /**
   * @schema WafUpdateRuleRequest#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafUpdateRuleRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafUpdateRuleRequest#Updates
   */
  readonly updates?: WafRuleUpdate[];

}

/**
 * Converts an object of type 'WafUpdateRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateRuleRequest(obj: WafUpdateRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafRuleUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateRuleResponse
 */
export interface WafUpdateRuleResponse {
  /**
   * @schema WafUpdateRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateRuleResponse(obj: WafUpdateRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateRuleGroupRequest
 */
export interface WafUpdateRuleGroupRequest {
  /**
   * @schema WafUpdateRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafUpdateRuleGroupRequest#Updates
   */
  readonly updates?: WafRuleGroupUpdate[];

  /**
   * @schema WafUpdateRuleGroupRequest#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateRuleGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateRuleGroupRequest(obj: WafUpdateRuleGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupId': obj.ruleGroupId,
    'Updates': obj.updates?.map(y => toJson_WafRuleGroupUpdate(y)),
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateRuleGroupResponse
 */
export interface WafUpdateRuleGroupResponse {
  /**
   * @schema WafUpdateRuleGroupResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateRuleGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateRuleGroupResponse(obj: WafUpdateRuleGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateSizeConstraintSetRequest
 */
export interface WafUpdateSizeConstraintSetRequest {
  /**
   * @schema WafUpdateSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId?: string;

  /**
   * @schema WafUpdateSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafUpdateSizeConstraintSetRequest#Updates
   */
  readonly updates?: WafSizeConstraintSetUpdate[];

}

/**
 * Converts an object of type 'WafUpdateSizeConstraintSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateSizeConstraintSetRequest(obj: WafUpdateSizeConstraintSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSetId': obj.sizeConstraintSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafSizeConstraintSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateSizeConstraintSetResponse
 */
export interface WafUpdateSizeConstraintSetResponse {
  /**
   * @schema WafUpdateSizeConstraintSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateSizeConstraintSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateSizeConstraintSetResponse(obj: WafUpdateSizeConstraintSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateSqlInjectionMatchSetRequest
 */
export interface WafUpdateSqlInjectionMatchSetRequest {
  /**
   * @schema WafUpdateSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId?: string;

  /**
   * @schema WafUpdateSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafUpdateSqlInjectionMatchSetRequest#Updates
   */
  readonly updates?: WafSqlInjectionMatchSetUpdate[];

}

/**
 * Converts an object of type 'WafUpdateSqlInjectionMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateSqlInjectionMatchSetRequest(obj: WafUpdateSqlInjectionMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSetId': obj.sqlInjectionMatchSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafSqlInjectionMatchSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateSqlInjectionMatchSetResponse
 */
export interface WafUpdateSqlInjectionMatchSetResponse {
  /**
   * @schema WafUpdateSqlInjectionMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateSqlInjectionMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateSqlInjectionMatchSetResponse(obj: WafUpdateSqlInjectionMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateWebAclRequest
 */
export interface WafUpdateWebAclRequest {
  /**
   * @schema WafUpdateWebAclRequest#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafUpdateWebAclRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafUpdateWebAclRequest#Updates
   */
  readonly updates?: WafWebAclUpdate[];

  /**
   * @schema WafUpdateWebAclRequest#DefaultAction
   */
  readonly defaultAction?: WafWafAction;

}

/**
 * Converts an object of type 'WafUpdateWebAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateWebAclRequest(obj: WafUpdateWebAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafWebAclUpdate(y)),
    'DefaultAction': toJson_WafWafAction(obj.defaultAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateWebAclResponse
 */
export interface WafUpdateWebAclResponse {
  /**
   * @schema WafUpdateWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateWebAclResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateWebAclResponse(obj: WafUpdateWebAclResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateXssMatchSetRequest
 */
export interface WafUpdateXssMatchSetRequest {
  /**
   * @schema WafUpdateXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId?: string;

  /**
   * @schema WafUpdateXssMatchSetRequest#ChangeToken
   */
  readonly changeToken?: string;

  /**
   * @schema WafUpdateXssMatchSetRequest#Updates
   */
  readonly updates?: WafXssMatchSetUpdate[];

}

/**
 * Converts an object of type 'WafUpdateXssMatchSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateXssMatchSetRequest(obj: WafUpdateXssMatchSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSetId': obj.xssMatchSetId,
    'ChangeToken': obj.changeToken,
    'Updates': obj.updates?.map(y => toJson_WafXssMatchSetUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafUpdateXssMatchSetResponse
 */
export interface WafUpdateXssMatchSetResponse {
  /**
   * @schema WafUpdateXssMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * Converts an object of type 'WafUpdateXssMatchSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafUpdateXssMatchSetResponse(obj: WafUpdateXssMatchSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeToken': obj.changeToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafByteMatchSet
 */
export interface WafByteMatchSet {
  /**
   * @schema WafByteMatchSet#ByteMatchSetId
   */
  readonly byteMatchSetId?: string;

  /**
   * @schema WafByteMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafByteMatchSet#ByteMatchTuples
   */
  readonly byteMatchTuples?: WafByteMatchTuple[];

}

/**
 * Converts an object of type 'WafByteMatchSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafByteMatchSet(obj: WafByteMatchSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ByteMatchSetId': obj.byteMatchSetId,
    'Name': obj.name,
    'ByteMatchTuples': obj.byteMatchTuples?.map(y => toJson_WafByteMatchTuple(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGeoMatchSet
 */
export interface WafGeoMatchSet {
  /**
   * @schema WafGeoMatchSet#GeoMatchSetId
   */
  readonly geoMatchSetId?: string;

  /**
   * @schema WafGeoMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafGeoMatchSet#GeoMatchConstraints
   */
  readonly geoMatchConstraints?: WafGeoMatchConstraint[];

}

/**
 * Converts an object of type 'WafGeoMatchSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGeoMatchSet(obj: WafGeoMatchSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoMatchSetId': obj.geoMatchSetId,
    'Name': obj.name,
    'GeoMatchConstraints': obj.geoMatchConstraints?.map(y => toJson_WafGeoMatchConstraint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafipSet
 */
export interface WafipSet {
  /**
   * @schema WafipSet#IPSetId
   */
  readonly ipSetId?: string;

  /**
   * @schema WafipSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafipSet#IPSetDescriptors
   */
  readonly ipSetDescriptors?: WafipSetDescriptor[];

}

/**
 * Converts an object of type 'WafipSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafipSet(obj: WafipSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPSetId': obj.ipSetId,
    'Name': obj.name,
    'IPSetDescriptors': obj.ipSetDescriptors?.map(y => toJson_WafipSetDescriptor(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafTag
 */
export interface WafTag {
  /**
   * @schema WafTag#Key
   */
  readonly key?: string;

  /**
   * @schema WafTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'WafTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafTag(obj: WafTag | undefined): Record<string, any> | undefined {
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
 * @schema WafRateBasedRule
 */
export interface WafRateBasedRule {
  /**
   * @schema WafRateBasedRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRateBasedRule#Name
   */
  readonly name?: string;

  /**
   * @schema WafRateBasedRule#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafRateBasedRule#MatchPredicates
   */
  readonly matchPredicates?: WafPredicate[];

  /**
   * @schema WafRateBasedRule#RateKey
   */
  readonly rateKey?: string;

  /**
   * @schema WafRateBasedRule#RateLimit
   */
  readonly rateLimit?: number;

}

/**
 * Converts an object of type 'WafRateBasedRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRateBasedRule(obj: WafRateBasedRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'Name': obj.name,
    'MetricName': obj.metricName,
    'MatchPredicates': obj.matchPredicates?.map(y => toJson_WafPredicate(y)),
    'RateKey': obj.rateKey,
    'RateLimit': obj.rateLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegexMatchSet
 */
export interface WafRegexMatchSet {
  /**
   * @schema WafRegexMatchSet#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

  /**
   * @schema WafRegexMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegexMatchSet#RegexMatchTuples
   */
  readonly regexMatchTuples?: WafRegexMatchTuple[];

}

/**
 * Converts an object of type 'WafRegexMatchSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegexMatchSet(obj: WafRegexMatchSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegexMatchSetId': obj.regexMatchSetId,
    'Name': obj.name,
    'RegexMatchTuples': obj.regexMatchTuples?.map(y => toJson_WafRegexMatchTuple(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegexPatternSet
 */
export interface WafRegexPatternSet {
  /**
   * @schema WafRegexPatternSet#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

  /**
   * @schema WafRegexPatternSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegexPatternSet#RegexPatternStrings
   */
  readonly regexPatternStrings?: string[];

}

/**
 * Converts an object of type 'WafRegexPatternSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegexPatternSet(obj: WafRegexPatternSet | undefined): Record<string, any> | undefined {
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
 * @schema WafRule
 */
export interface WafRule {
  /**
   * @schema WafRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRule#Name
   */
  readonly name?: string;

  /**
   * @schema WafRule#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafRule#Predicates
   */
  readonly predicates?: WafPredicate[];

}

/**
 * Converts an object of type 'WafRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRule(obj: WafRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
    'Name': obj.name,
    'MetricName': obj.metricName,
    'Predicates': obj.predicates?.map(y => toJson_WafPredicate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRuleGroup
 */
export interface WafRuleGroup {
  /**
   * @schema WafRuleGroup#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafRuleGroup#Name
   */
  readonly name?: string;

  /**
   * @schema WafRuleGroup#MetricName
   */
  readonly metricName?: string;

}

/**
 * Converts an object of type 'WafRuleGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRuleGroup(obj: WafRuleGroup | undefined): Record<string, any> | undefined {
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
 * @schema WafSizeConstraintSet
 */
export interface WafSizeConstraintSet {
  /**
   * @schema WafSizeConstraintSet#SizeConstraintSetId
   */
  readonly sizeConstraintSetId?: string;

  /**
   * @schema WafSizeConstraintSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafSizeConstraintSet#SizeConstraints
   */
  readonly sizeConstraints?: WafSizeConstraint[];

}

/**
 * Converts an object of type 'WafSizeConstraintSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafSizeConstraintSet(obj: WafSizeConstraintSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SizeConstraintSetId': obj.sizeConstraintSetId,
    'Name': obj.name,
    'SizeConstraints': obj.sizeConstraints?.map(y => toJson_WafSizeConstraint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafSqlInjectionMatchSet
 */
export interface WafSqlInjectionMatchSet {
  /**
   * @schema WafSqlInjectionMatchSet#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId?: string;

  /**
   * @schema WafSqlInjectionMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafSqlInjectionMatchSet#SqlInjectionMatchTuples
   */
  readonly sqlInjectionMatchTuples?: WafSqlInjectionMatchTuple[];

}

/**
 * Converts an object of type 'WafSqlInjectionMatchSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafSqlInjectionMatchSet(obj: WafSqlInjectionMatchSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlInjectionMatchSetId': obj.sqlInjectionMatchSetId,
    'Name': obj.name,
    'SqlInjectionMatchTuples': obj.sqlInjectionMatchTuples?.map(y => toJson_WafSqlInjectionMatchTuple(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafWafAction
 */
export interface WafWafAction {
  /**
   * @schema WafWafAction#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'WafWafAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafWafAction(obj: WafWafAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafWebAcl
 */
export interface WafWebAcl {
  /**
   * @schema WafWebAcl#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafWebAcl#Name
   */
  readonly name?: string;

  /**
   * @schema WafWebAcl#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WafWebAcl#DefaultAction
   */
  readonly defaultAction?: WafWafAction;

  /**
   * @schema WafWebAcl#Rules
   */
  readonly rules?: WafActivatedRule[];

  /**
   * @schema WafWebAcl#WebACLArn
   */
  readonly webAclArn?: string;

}

/**
 * Converts an object of type 'WafWebAcl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafWebAcl(obj: WafWebAcl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebACLId': obj.webAclId,
    'Name': obj.name,
    'MetricName': obj.metricName,
    'DefaultAction': toJson_WafWafAction(obj.defaultAction),
    'Rules': obj.rules?.map(y => toJson_WafActivatedRule(y)),
    'WebACLArn': obj.webAclArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafXssMatchSet
 */
export interface WafXssMatchSet {
  /**
   * @schema WafXssMatchSet#XssMatchSetId
   */
  readonly xssMatchSetId?: string;

  /**
   * @schema WafXssMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafXssMatchSet#XssMatchTuples
   */
  readonly xssMatchTuples?: WafXssMatchTuple[];

}

/**
 * Converts an object of type 'WafXssMatchSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafXssMatchSet(obj: WafXssMatchSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XssMatchSetId': obj.xssMatchSetId,
    'Name': obj.name,
    'XssMatchTuples': obj.xssMatchTuples?.map(y => toJson_WafXssMatchTuple(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafLoggingConfiguration
 */
export interface WafLoggingConfiguration {
  /**
   * @schema WafLoggingConfiguration#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema WafLoggingConfiguration#LogDestinationConfigs
   */
  readonly logDestinationConfigs?: string[];

  /**
   * @schema WafLoggingConfiguration#RedactedFields
   */
  readonly redactedFields?: WafFieldToMatch[];

}

/**
 * Converts an object of type 'WafLoggingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafLoggingConfiguration(obj: WafLoggingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'LogDestinationConfigs': obj.logDestinationConfigs?.map(y => y),
    'RedactedFields': obj.redactedFields?.map(y => toJson_WafFieldToMatch(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafTimeWindow
 */
export interface WafTimeWindow {
  /**
   * @schema WafTimeWindow#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema WafTimeWindow#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'WafTimeWindow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafTimeWindow(obj: WafTimeWindow | undefined): Record<string, any> | undefined {
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
 * @schema WafSampledHttpRequest
 */
export interface WafSampledHttpRequest {
  /**
   * @schema WafSampledHttpRequest#Request
   */
  readonly request?: WafhttpRequest;

  /**
   * @schema WafSampledHttpRequest#Weight
   */
  readonly weight?: number;

  /**
   * @schema WafSampledHttpRequest#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema WafSampledHttpRequest#Action
   */
  readonly action?: string;

  /**
   * @schema WafSampledHttpRequest#RuleWithinRuleGroup
   */
  readonly ruleWithinRuleGroup?: string;

}

/**
 * Converts an object of type 'WafSampledHttpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafSampledHttpRequest(obj: WafSampledHttpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Request': toJson_WafhttpRequest(obj.request),
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
 * @schema WafActivatedRule
 */
export interface WafActivatedRule {
  /**
   * @schema WafActivatedRule#Priority
   */
  readonly priority?: number;

  /**
   * @schema WafActivatedRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafActivatedRule#Action
   */
  readonly action?: WafWafAction;

  /**
   * @schema WafActivatedRule#OverrideAction
   */
  readonly overrideAction?: WafWafOverrideAction;

  /**
   * @schema WafActivatedRule#Type
   */
  readonly type?: string;

  /**
   * @schema WafActivatedRule#ExcludedRules
   */
  readonly excludedRules?: WafExcludedRule[];

}

/**
 * Converts an object of type 'WafActivatedRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafActivatedRule(obj: WafActivatedRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Priority': obj.priority,
    'RuleId': obj.ruleId,
    'Action': toJson_WafWafAction(obj.action),
    'OverrideAction': toJson_WafWafOverrideAction(obj.overrideAction),
    'Type': obj.type,
    'ExcludedRules': obj.excludedRules?.map(y => toJson_WafExcludedRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafByteMatchSetSummary
 */
export interface WafByteMatchSetSummary {
  /**
   * @schema WafByteMatchSetSummary#ByteMatchSetId
   */
  readonly byteMatchSetId?: string;

  /**
   * @schema WafByteMatchSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafByteMatchSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafByteMatchSetSummary(obj: WafByteMatchSetSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafGeoMatchSetSummary
 */
export interface WafGeoMatchSetSummary {
  /**
   * @schema WafGeoMatchSetSummary#GeoMatchSetId
   */
  readonly geoMatchSetId?: string;

  /**
   * @schema WafGeoMatchSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafGeoMatchSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGeoMatchSetSummary(obj: WafGeoMatchSetSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafipSetSummary
 */
export interface WafipSetSummary {
  /**
   * @schema WafipSetSummary#IPSetId
   */
  readonly ipSetId?: string;

  /**
   * @schema WafipSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafipSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafipSetSummary(obj: WafipSetSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafRuleSummary
 */
export interface WafRuleSummary {
  /**
   * @schema WafRuleSummary#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema WafRuleSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRuleSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRuleSummary(obj: WafRuleSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafRegexMatchSetSummary
 */
export interface WafRegexMatchSetSummary {
  /**
   * @schema WafRegexMatchSetSummary#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

  /**
   * @schema WafRegexMatchSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegexMatchSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegexMatchSetSummary(obj: WafRegexMatchSetSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafRegexPatternSetSummary
 */
export interface WafRegexPatternSetSummary {
  /**
   * @schema WafRegexPatternSetSummary#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

  /**
   * @schema WafRegexPatternSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRegexPatternSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegexPatternSetSummary(obj: WafRegexPatternSetSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafRuleGroupSummary
 */
export interface WafRuleGroupSummary {
  /**
   * @schema WafRuleGroupSummary#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafRuleGroupSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafRuleGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRuleGroupSummary(obj: WafRuleGroupSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafSizeConstraintSetSummary
 */
export interface WafSizeConstraintSetSummary {
  /**
   * @schema WafSizeConstraintSetSummary#SizeConstraintSetId
   */
  readonly sizeConstraintSetId?: string;

  /**
   * @schema WafSizeConstraintSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafSizeConstraintSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafSizeConstraintSetSummary(obj: WafSizeConstraintSetSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafSqlInjectionMatchSetSummary
 */
export interface WafSqlInjectionMatchSetSummary {
  /**
   * @schema WafSqlInjectionMatchSetSummary#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId?: string;

  /**
   * @schema WafSqlInjectionMatchSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafSqlInjectionMatchSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafSqlInjectionMatchSetSummary(obj: WafSqlInjectionMatchSetSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafSubscribedRuleGroupSummary
 */
export interface WafSubscribedRuleGroupSummary {
  /**
   * @schema WafSubscribedRuleGroupSummary#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema WafSubscribedRuleGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema WafSubscribedRuleGroupSummary#MetricName
   */
  readonly metricName?: string;

}

/**
 * Converts an object of type 'WafSubscribedRuleGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafSubscribedRuleGroupSummary(obj: WafSubscribedRuleGroupSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafTagInfoForResource
 */
export interface WafTagInfoForResource {
  /**
   * @schema WafTagInfoForResource#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema WafTagInfoForResource#TagList
   */
  readonly tagList?: WafTag[];

}

/**
 * Converts an object of type 'WafTagInfoForResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafTagInfoForResource(obj: WafTagInfoForResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagList': obj.tagList?.map(y => toJson_WafTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafWebAclSummary
 */
export interface WafWebAclSummary {
  /**
   * @schema WafWebAclSummary#WebACLId
   */
  readonly webAclId?: string;

  /**
   * @schema WafWebAclSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafWebAclSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafWebAclSummary(obj: WafWebAclSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafXssMatchSetSummary
 */
export interface WafXssMatchSetSummary {
  /**
   * @schema WafXssMatchSetSummary#XssMatchSetId
   */
  readonly xssMatchSetId?: string;

  /**
   * @schema WafXssMatchSetSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WafXssMatchSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafXssMatchSetSummary(obj: WafXssMatchSetSummary | undefined): Record<string, any> | undefined {
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
 * @schema WafByteMatchSetUpdate
 */
export interface WafByteMatchSetUpdate {
  /**
   * @schema WafByteMatchSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafByteMatchSetUpdate#ByteMatchTuple
   */
  readonly byteMatchTuple?: WafByteMatchTuple;

}

/**
 * Converts an object of type 'WafByteMatchSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafByteMatchSetUpdate(obj: WafByteMatchSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'ByteMatchTuple': toJson_WafByteMatchTuple(obj.byteMatchTuple),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGeoMatchSetUpdate
 */
export interface WafGeoMatchSetUpdate {
  /**
   * @schema WafGeoMatchSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafGeoMatchSetUpdate#GeoMatchConstraint
   */
  readonly geoMatchConstraint?: WafGeoMatchConstraint;

}

/**
 * Converts an object of type 'WafGeoMatchSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGeoMatchSetUpdate(obj: WafGeoMatchSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'GeoMatchConstraint': toJson_WafGeoMatchConstraint(obj.geoMatchConstraint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafipSetUpdate
 */
export interface WafipSetUpdate {
  /**
   * @schema WafipSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafipSetUpdate#IPSetDescriptor
   */
  readonly ipSetDescriptor?: WafipSetDescriptor;

}

/**
 * Converts an object of type 'WafipSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafipSetUpdate(obj: WafipSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'IPSetDescriptor': toJson_WafipSetDescriptor(obj.ipSetDescriptor),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRuleUpdate
 */
export interface WafRuleUpdate {
  /**
   * @schema WafRuleUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRuleUpdate#Predicate
   */
  readonly predicate?: WafPredicate;

}

/**
 * Converts an object of type 'WafRuleUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRuleUpdate(obj: WafRuleUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'Predicate': toJson_WafPredicate(obj.predicate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegexMatchSetUpdate
 */
export interface WafRegexMatchSetUpdate {
  /**
   * @schema WafRegexMatchSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegexMatchSetUpdate#RegexMatchTuple
   */
  readonly regexMatchTuple?: WafRegexMatchTuple;

}

/**
 * Converts an object of type 'WafRegexMatchSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegexMatchSetUpdate(obj: WafRegexMatchSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'RegexMatchTuple': toJson_WafRegexMatchTuple(obj.regexMatchTuple),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafRegexPatternSetUpdate
 */
export interface WafRegexPatternSetUpdate {
  /**
   * @schema WafRegexPatternSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRegexPatternSetUpdate#RegexPatternString
   */
  readonly regexPatternString?: string;

}

/**
 * Converts an object of type 'WafRegexPatternSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegexPatternSetUpdate(obj: WafRegexPatternSetUpdate | undefined): Record<string, any> | undefined {
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
 * @schema WafRuleGroupUpdate
 */
export interface WafRuleGroupUpdate {
  /**
   * @schema WafRuleGroupUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafRuleGroupUpdate#ActivatedRule
   */
  readonly activatedRule?: WafActivatedRule;

}

/**
 * Converts an object of type 'WafRuleGroupUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRuleGroupUpdate(obj: WafRuleGroupUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'ActivatedRule': toJson_WafActivatedRule(obj.activatedRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafSizeConstraintSetUpdate
 */
export interface WafSizeConstraintSetUpdate {
  /**
   * @schema WafSizeConstraintSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafSizeConstraintSetUpdate#SizeConstraint
   */
  readonly sizeConstraint?: WafSizeConstraint;

}

/**
 * Converts an object of type 'WafSizeConstraintSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafSizeConstraintSetUpdate(obj: WafSizeConstraintSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'SizeConstraint': toJson_WafSizeConstraint(obj.sizeConstraint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafSqlInjectionMatchSetUpdate
 */
export interface WafSqlInjectionMatchSetUpdate {
  /**
   * @schema WafSqlInjectionMatchSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafSqlInjectionMatchSetUpdate#SqlInjectionMatchTuple
   */
  readonly sqlInjectionMatchTuple?: WafSqlInjectionMatchTuple;

}

/**
 * Converts an object of type 'WafSqlInjectionMatchSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafSqlInjectionMatchSetUpdate(obj: WafSqlInjectionMatchSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'SqlInjectionMatchTuple': toJson_WafSqlInjectionMatchTuple(obj.sqlInjectionMatchTuple),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafWebAclUpdate
 */
export interface WafWebAclUpdate {
  /**
   * @schema WafWebAclUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafWebAclUpdate#ActivatedRule
   */
  readonly activatedRule?: WafActivatedRule;

}

/**
 * Converts an object of type 'WafWebAclUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafWebAclUpdate(obj: WafWebAclUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'ActivatedRule': toJson_WafActivatedRule(obj.activatedRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafXssMatchSetUpdate
 */
export interface WafXssMatchSetUpdate {
  /**
   * @schema WafXssMatchSetUpdate#Action
   */
  readonly action?: string;

  /**
   * @schema WafXssMatchSetUpdate#XssMatchTuple
   */
  readonly xssMatchTuple?: WafXssMatchTuple;

}

/**
 * Converts an object of type 'WafXssMatchSetUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafXssMatchSetUpdate(obj: WafXssMatchSetUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'XssMatchTuple': toJson_WafXssMatchTuple(obj.xssMatchTuple),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafByteMatchTuple
 */
export interface WafByteMatchTuple {
  /**
   * @schema WafByteMatchTuple#FieldToMatch
   */
  readonly fieldToMatch?: WafFieldToMatch;

  /**
   * @schema WafByteMatchTuple#TargetString
   */
  readonly targetString?: any;

  /**
   * @schema WafByteMatchTuple#TextTransformation
   */
  readonly textTransformation?: string;

  /**
   * @schema WafByteMatchTuple#PositionalConstraint
   */
  readonly positionalConstraint?: string;

}

/**
 * Converts an object of type 'WafByteMatchTuple' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafByteMatchTuple(obj: WafByteMatchTuple | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_WafFieldToMatch(obj.fieldToMatch),
    'TargetString': obj.targetString,
    'TextTransformation': obj.textTransformation,
    'PositionalConstraint': obj.positionalConstraint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafGeoMatchConstraint
 */
export interface WafGeoMatchConstraint {
  /**
   * @schema WafGeoMatchConstraint#Type
   */
  readonly type?: string;

  /**
   * @schema WafGeoMatchConstraint#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'WafGeoMatchConstraint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafGeoMatchConstraint(obj: WafGeoMatchConstraint | undefined): Record<string, any> | undefined {
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
 * @schema WafipSetDescriptor
 */
export interface WafipSetDescriptor {
  /**
   * @schema WafipSetDescriptor#Type
   */
  readonly type?: string;

  /**
   * @schema WafipSetDescriptor#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'WafipSetDescriptor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafipSetDescriptor(obj: WafipSetDescriptor | undefined): Record<string, any> | undefined {
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
 * @schema WafPredicate
 */
export interface WafPredicate {
  /**
   * @schema WafPredicate#Negated
   */
  readonly negated?: boolean;

  /**
   * @schema WafPredicate#Type
   */
  readonly type?: string;

  /**
   * @schema WafPredicate#DataId
   */
  readonly dataId?: string;

}

/**
 * Converts an object of type 'WafPredicate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafPredicate(obj: WafPredicate | undefined): Record<string, any> | undefined {
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
 * @schema WafRegexMatchTuple
 */
export interface WafRegexMatchTuple {
  /**
   * @schema WafRegexMatchTuple#FieldToMatch
   */
  readonly fieldToMatch?: WafFieldToMatch;

  /**
   * @schema WafRegexMatchTuple#TextTransformation
   */
  readonly textTransformation?: string;

  /**
   * @schema WafRegexMatchTuple#RegexPatternSetId
   */
  readonly regexPatternSetId?: string;

}

/**
 * Converts an object of type 'WafRegexMatchTuple' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafRegexMatchTuple(obj: WafRegexMatchTuple | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_WafFieldToMatch(obj.fieldToMatch),
    'TextTransformation': obj.textTransformation,
    'RegexPatternSetId': obj.regexPatternSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafSizeConstraint
 */
export interface WafSizeConstraint {
  /**
   * @schema WafSizeConstraint#FieldToMatch
   */
  readonly fieldToMatch?: WafFieldToMatch;

  /**
   * @schema WafSizeConstraint#TextTransformation
   */
  readonly textTransformation?: string;

  /**
   * @schema WafSizeConstraint#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema WafSizeConstraint#Size
   */
  readonly size?: number;

}

/**
 * Converts an object of type 'WafSizeConstraint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafSizeConstraint(obj: WafSizeConstraint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_WafFieldToMatch(obj.fieldToMatch),
    'TextTransformation': obj.textTransformation,
    'ComparisonOperator': obj.comparisonOperator,
    'Size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafSqlInjectionMatchTuple
 */
export interface WafSqlInjectionMatchTuple {
  /**
   * @schema WafSqlInjectionMatchTuple#FieldToMatch
   */
  readonly fieldToMatch?: WafFieldToMatch;

  /**
   * @schema WafSqlInjectionMatchTuple#TextTransformation
   */
  readonly textTransformation?: string;

}

/**
 * Converts an object of type 'WafSqlInjectionMatchTuple' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafSqlInjectionMatchTuple(obj: WafSqlInjectionMatchTuple | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_WafFieldToMatch(obj.fieldToMatch),
    'TextTransformation': obj.textTransformation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafXssMatchTuple
 */
export interface WafXssMatchTuple {
  /**
   * @schema WafXssMatchTuple#FieldToMatch
   */
  readonly fieldToMatch?: WafFieldToMatch;

  /**
   * @schema WafXssMatchTuple#TextTransformation
   */
  readonly textTransformation?: string;

}

/**
 * Converts an object of type 'WafXssMatchTuple' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafXssMatchTuple(obj: WafXssMatchTuple | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldToMatch': toJson_WafFieldToMatch(obj.fieldToMatch),
    'TextTransformation': obj.textTransformation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafFieldToMatch
 */
export interface WafFieldToMatch {
  /**
   * @schema WafFieldToMatch#Type
   */
  readonly type?: string;

  /**
   * @schema WafFieldToMatch#Data
   */
  readonly data?: string;

}

/**
 * Converts an object of type 'WafFieldToMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafFieldToMatch(obj: WafFieldToMatch | undefined): Record<string, any> | undefined {
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
 * @schema WafhttpRequest
 */
export interface WafhttpRequest {
  /**
   * @schema WafhttpRequest#ClientIP
   */
  readonly clientIp?: string;

  /**
   * @schema WafhttpRequest#Country
   */
  readonly country?: string;

  /**
   * @schema WafhttpRequest#URI
   */
  readonly uri?: string;

  /**
   * @schema WafhttpRequest#Method
   */
  readonly method?: string;

  /**
   * @schema WafhttpRequest#HTTPVersion
   */
  readonly httpVersion?: string;

  /**
   * @schema WafhttpRequest#Headers
   */
  readonly headers?: WafhttpHeader[];

}

/**
 * Converts an object of type 'WafhttpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafhttpRequest(obj: WafhttpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientIP': obj.clientIp,
    'Country': obj.country,
    'URI': obj.uri,
    'Method': obj.method,
    'HTTPVersion': obj.httpVersion,
    'Headers': obj.headers?.map(y => toJson_WafhttpHeader(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafWafOverrideAction
 */
export interface WafWafOverrideAction {
  /**
   * @schema WafWafOverrideAction#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'WafWafOverrideAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafWafOverrideAction(obj: WafWafOverrideAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafExcludedRule
 */
export interface WafExcludedRule {
  /**
   * @schema WafExcludedRule#RuleId
   */
  readonly ruleId?: string;

}

/**
 * Converts an object of type 'WafExcludedRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafExcludedRule(obj: WafExcludedRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleId': obj.ruleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WafhttpHeader
 */
export interface WafhttpHeader {
  /**
   * @schema WafhttpHeader#Name
   */
  readonly name?: string;

  /**
   * @schema WafhttpHeader#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'WafhttpHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WafhttpHeader(obj: WafhttpHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
