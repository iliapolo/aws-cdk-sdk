/**
 * @schema WafCreateByteMatchSetRequest
 */
export interface WafCreateByteMatchSetRequest {
  /**
   * @schema WafCreateByteMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateByteMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafCreateGeoMatchSetRequest
 */
export interface WafCreateGeoMatchSetRequest {
  /**
   * @schema WafCreateGeoMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafCreateIpSetRequest
 */
export interface WafCreateIpSetRequest {
  /**
   * @schema WafCreateIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateIpSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafCreateRateBasedRuleRequest
 */
export interface WafCreateRateBasedRuleRequest {
  /**
   * @schema WafCreateRateBasedRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateRateBasedRuleRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema WafCreateRateBasedRuleRequest#RateKey
   */
  readonly rateKey: string;

  /**
   * @schema WafCreateRateBasedRuleRequest#RateLimit
   */
  readonly rateLimit: number;

  /**
   * @schema WafCreateRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafCreateRateBasedRuleRequest#Tags
   */
  readonly tags?: WafTag[];

}

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
 * @schema WafCreateRegexMatchSetRequest
 */
export interface WafCreateRegexMatchSetRequest {
  /**
   * @schema WafCreateRegexMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafCreateRegexPatternSetRequest
 */
export interface WafCreateRegexPatternSetRequest {
  /**
   * @schema WafCreateRegexPatternSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafCreateRuleRequest
 */
export interface WafCreateRuleRequest {
  /**
   * @schema WafCreateRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateRuleRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema WafCreateRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafCreateRuleRequest#Tags
   */
  readonly tags?: WafTag[];

}

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
 * @schema WafCreateRuleGroupRequest
 */
export interface WafCreateRuleGroupRequest {
  /**
   * @schema WafCreateRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateRuleGroupRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema WafCreateRuleGroupRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafCreateRuleGroupRequest#Tags
   */
  readonly tags?: WafTag[];

}

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
 * @schema WafCreateSizeConstraintSetRequest
 */
export interface WafCreateSizeConstraintSetRequest {
  /**
   * @schema WafCreateSizeConstraintSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafCreateSqlInjectionMatchSetRequest
 */
export interface WafCreateSqlInjectionMatchSetRequest {
  /**
   * @schema WafCreateSqlInjectionMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafCreateWebAclRequest
 */
export interface WafCreateWebAclRequest {
  /**
   * @schema WafCreateWebAclRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateWebAclRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema WafCreateWebAclRequest#DefaultAction
   */
  readonly defaultAction: WafWafAction;

  /**
   * @schema WafCreateWebAclRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafCreateWebAclRequest#Tags
   */
  readonly tags?: WafTag[];

}

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
 * @schema WafCreateWebAclMigrationStackRequest
 */
export interface WafCreateWebAclMigrationStackRequest {
  /**
   * @schema WafCreateWebAclMigrationStackRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WafCreateWebAclMigrationStackRequest#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema WafCreateWebAclMigrationStackRequest#IgnoreUnsupportedType
   */
  readonly ignoreUnsupportedType: boolean;

}

/**
 * @schema WafCreateWebAclMigrationStackResponse
 */
export interface WafCreateWebAclMigrationStackResponse {
  /**
   * @schema WafCreateWebAclMigrationStackResponse#S3ObjectUrl
   */
  readonly s3ObjectUrl: string;

}

/**
 * @schema WafCreateXssMatchSetRequest
 */
export interface WafCreateXssMatchSetRequest {
  /**
   * @schema WafCreateXssMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafCreateXssMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteByteMatchSetRequest
 */
export interface WafDeleteByteMatchSetRequest {
  /**
   * @schema WafDeleteByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema WafDeleteByteMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteGeoMatchSetRequest
 */
export interface WafDeleteGeoMatchSetRequest {
  /**
   * @schema WafDeleteGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema WafDeleteGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteIpSetRequest
 */
export interface WafDeleteIpSetRequest {
  /**
   * @schema WafDeleteIpSetRequest#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema WafDeleteIpSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteLoggingConfigurationRequest
 */
export interface WafDeleteLoggingConfigurationRequest {
  /**
   * @schema WafDeleteLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema WafDeleteLoggingConfigurationResponse
 */
export interface WafDeleteLoggingConfigurationResponse {
}

/**
 * @schema WafDeletePermissionPolicyRequest
 */
export interface WafDeletePermissionPolicyRequest {
  /**
   * @schema WafDeletePermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema WafDeletePermissionPolicyResponse
 */
export interface WafDeletePermissionPolicyResponse {
}

/**
 * @schema WafDeleteRateBasedRuleRequest
 */
export interface WafDeleteRateBasedRuleRequest {
  /**
   * @schema WafDeleteRateBasedRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafDeleteRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteRegexMatchSetRequest
 */
export interface WafDeleteRegexMatchSetRequest {
  /**
   * @schema WafDeleteRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

  /**
   * @schema WafDeleteRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteRegexPatternSetRequest
 */
export interface WafDeleteRegexPatternSetRequest {
  /**
   * @schema WafDeleteRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema WafDeleteRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteRuleRequest
 */
export interface WafDeleteRuleRequest {
  /**
   * @schema WafDeleteRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafDeleteRuleRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteRuleGroupRequest
 */
export interface WafDeleteRuleGroupRequest {
  /**
   * @schema WafDeleteRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema WafDeleteRuleGroupRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteSizeConstraintSetRequest
 */
export interface WafDeleteSizeConstraintSetRequest {
  /**
   * @schema WafDeleteSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema WafDeleteSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteSqlInjectionMatchSetRequest
 */
export interface WafDeleteSqlInjectionMatchSetRequest {
  /**
   * @schema WafDeleteSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema WafDeleteSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteWebAclRequest
 */
export interface WafDeleteWebAclRequest {
  /**
   * @schema WafDeleteWebAclRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WafDeleteWebAclRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafDeleteXssMatchSetRequest
 */
export interface WafDeleteXssMatchSetRequest {
  /**
   * @schema WafDeleteXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema WafDeleteXssMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafGetByteMatchSetRequest
 */
export interface WafGetByteMatchSetRequest {
  /**
   * @schema WafGetByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

}

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
 * @schema WafGetChangeTokenRequest
 */
export interface WafGetChangeTokenRequest {
}

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
 * @schema WafGetChangeTokenStatusRequest
 */
export interface WafGetChangeTokenStatusRequest {
  /**
   * @schema WafGetChangeTokenStatusRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafGetGeoMatchSetRequest
 */
export interface WafGetGeoMatchSetRequest {
  /**
   * @schema WafGetGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

}

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
 * @schema WafGetIpSetRequest
 */
export interface WafGetIpSetRequest {
  /**
   * @schema WafGetIpSetRequest#IPSetId
   */
  readonly ipSetId: string;

}

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
 * @schema WafGetLoggingConfigurationRequest
 */
export interface WafGetLoggingConfigurationRequest {
  /**
   * @schema WafGetLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema WafGetPermissionPolicyRequest
 */
export interface WafGetPermissionPolicyRequest {
  /**
   * @schema WafGetPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema WafGetRateBasedRuleRequest
 */
export interface WafGetRateBasedRuleRequest {
  /**
   * @schema WafGetRateBasedRuleRequest#RuleId
   */
  readonly ruleId: string;

}

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
 * @schema WafGetRateBasedRuleManagedKeysRequest
 */
export interface WafGetRateBasedRuleManagedKeysRequest {
  /**
   * @schema WafGetRateBasedRuleManagedKeysRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafGetRateBasedRuleManagedKeysRequest#NextMarker
   */
  readonly nextMarker?: string;

}

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
 * @schema WafGetRegexMatchSetRequest
 */
export interface WafGetRegexMatchSetRequest {
  /**
   * @schema WafGetRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

}

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
 * @schema WafGetRegexPatternSetRequest
 */
export interface WafGetRegexPatternSetRequest {
  /**
   * @schema WafGetRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

}

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
 * @schema WafGetRuleRequest
 */
export interface WafGetRuleRequest {
  /**
   * @schema WafGetRuleRequest#RuleId
   */
  readonly ruleId: string;

}

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
 * @schema WafGetRuleGroupRequest
 */
export interface WafGetRuleGroupRequest {
  /**
   * @schema WafGetRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId: string;

}

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
 * @schema WafGetSampledRequestsRequest
 */
export interface WafGetSampledRequestsRequest {
  /**
   * @schema WafGetSampledRequestsRequest#WebAclId
   */
  readonly webAclId: string;

  /**
   * @schema WafGetSampledRequestsRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafGetSampledRequestsRequest#TimeWindow
   */
  readonly timeWindow: WafTimeWindow;

  /**
   * @schema WafGetSampledRequestsRequest#MaxItems
   */
  readonly maxItems: number;

}

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
 * @schema WafGetSizeConstraintSetRequest
 */
export interface WafGetSizeConstraintSetRequest {
  /**
   * @schema WafGetSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

}

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
 * @schema WafGetSqlInjectionMatchSetRequest
 */
export interface WafGetSqlInjectionMatchSetRequest {
  /**
   * @schema WafGetSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

}

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
 * @schema WafGetWebAclRequest
 */
export interface WafGetWebAclRequest {
  /**
   * @schema WafGetWebAclRequest#WebACLId
   */
  readonly webAclId: string;

}

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
 * @schema WafGetXssMatchSetRequest
 */
export interface WafGetXssMatchSetRequest {
  /**
   * @schema WafGetXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId: string;

}

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
  readonly resourceArn: string;

}

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
 * @schema WafPutLoggingConfigurationRequest
 */
export interface WafPutLoggingConfigurationRequest {
  /**
   * @schema WafPutLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration: WafLoggingConfiguration;

}

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
 * @schema WafPutPermissionPolicyRequest
 */
export interface WafPutPermissionPolicyRequest {
  /**
   * @schema WafPutPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema WafPutPermissionPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema WafPutPermissionPolicyResponse
 */
export interface WafPutPermissionPolicyResponse {
}

/**
 * @schema WafTagResourceRequest
 */
export interface WafTagResourceRequest {
  /**
   * @schema WafTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema WafTagResourceRequest#Tags
   */
  readonly tags: WafTag[];

}

/**
 * @schema WafTagResourceResponse
 */
export interface WafTagResourceResponse {
}

/**
 * @schema WafUntagResourceRequest
 */
export interface WafUntagResourceRequest {
  /**
   * @schema WafUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema WafUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema WafUntagResourceResponse
 */
export interface WafUntagResourceResponse {
}

/**
 * @schema WafUpdateByteMatchSetRequest
 */
export interface WafUpdateByteMatchSetRequest {
  /**
   * @schema WafUpdateByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema WafUpdateByteMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafUpdateByteMatchSetRequest#Updates
   */
  readonly updates: WafByteMatchSetUpdate[];

}

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
 * @schema WafUpdateGeoMatchSetRequest
 */
export interface WafUpdateGeoMatchSetRequest {
  /**
   * @schema WafUpdateGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema WafUpdateGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafUpdateGeoMatchSetRequest#Updates
   */
  readonly updates: WafGeoMatchSetUpdate[];

}

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
 * @schema WafUpdateIpSetRequest
 */
export interface WafUpdateIpSetRequest {
  /**
   * @schema WafUpdateIpSetRequest#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema WafUpdateIpSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafUpdateIpSetRequest#Updates
   */
  readonly updates: WafipSetUpdate[];

}

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
 * @schema WafUpdateRateBasedRuleRequest
 */
export interface WafUpdateRateBasedRuleRequest {
  /**
   * @schema WafUpdateRateBasedRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafUpdateRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafUpdateRateBasedRuleRequest#Updates
   */
  readonly updates: WafRuleUpdate[];

  /**
   * @schema WafUpdateRateBasedRuleRequest#RateLimit
   */
  readonly rateLimit: number;

}

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
 * @schema WafUpdateRegexMatchSetRequest
 */
export interface WafUpdateRegexMatchSetRequest {
  /**
   * @schema WafUpdateRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

  /**
   * @schema WafUpdateRegexMatchSetRequest#Updates
   */
  readonly updates: WafRegexMatchSetUpdate[];

  /**
   * @schema WafUpdateRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafUpdateRegexPatternSetRequest
 */
export interface WafUpdateRegexPatternSetRequest {
  /**
   * @schema WafUpdateRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema WafUpdateRegexPatternSetRequest#Updates
   */
  readonly updates: WafRegexPatternSetUpdate[];

  /**
   * @schema WafUpdateRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafUpdateRuleRequest
 */
export interface WafUpdateRuleRequest {
  /**
   * @schema WafUpdateRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafUpdateRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafUpdateRuleRequest#Updates
   */
  readonly updates: WafRuleUpdate[];

}

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
 * @schema WafUpdateRuleGroupRequest
 */
export interface WafUpdateRuleGroupRequest {
  /**
   * @schema WafUpdateRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema WafUpdateRuleGroupRequest#Updates
   */
  readonly updates: WafRuleGroupUpdate[];

  /**
   * @schema WafUpdateRuleGroupRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafUpdateSizeConstraintSetRequest
 */
export interface WafUpdateSizeConstraintSetRequest {
  /**
   * @schema WafUpdateSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema WafUpdateSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafUpdateSizeConstraintSetRequest#Updates
   */
  readonly updates: WafSizeConstraintSetUpdate[];

}

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
 * @schema WafUpdateSqlInjectionMatchSetRequest
 */
export interface WafUpdateSqlInjectionMatchSetRequest {
  /**
   * @schema WafUpdateSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema WafUpdateSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafUpdateSqlInjectionMatchSetRequest#Updates
   */
  readonly updates: WafSqlInjectionMatchSetUpdate[];

}

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
 * @schema WafUpdateWebAclRequest
 */
export interface WafUpdateWebAclRequest {
  /**
   * @schema WafUpdateWebAclRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WafUpdateWebAclRequest#ChangeToken
   */
  readonly changeToken: string;

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
 * @schema WafUpdateWebAclResponse
 */
export interface WafUpdateWebAclResponse {
  /**
   * @schema WafUpdateWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema WafUpdateXssMatchSetRequest
 */
export interface WafUpdateXssMatchSetRequest {
  /**
   * @schema WafUpdateXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema WafUpdateXssMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafUpdateXssMatchSetRequest#Updates
   */
  readonly updates: WafXssMatchSetUpdate[];

}

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
 * @schema WafByteMatchSet
 */
export interface WafByteMatchSet {
  /**
   * @schema WafByteMatchSet#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema WafByteMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafByteMatchSet#ByteMatchTuples
   */
  readonly byteMatchTuples: WafByteMatchTuple[];

}

/**
 * @schema WafGeoMatchSet
 */
export interface WafGeoMatchSet {
  /**
   * @schema WafGeoMatchSet#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema WafGeoMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafGeoMatchSet#GeoMatchConstraints
   */
  readonly geoMatchConstraints: WafGeoMatchConstraint[];

}

/**
 * @schema WafipSet
 */
export interface WafipSet {
  /**
   * @schema WafipSet#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema WafipSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafipSet#IPSetDescriptors
   */
  readonly ipSetDescriptors: WafipSetDescriptor[];

}

/**
 * @schema WafTag
 */
export interface WafTag {
  /**
   * @schema WafTag#Key
   */
  readonly key: string;

  /**
   * @schema WafTag#Value
   */
  readonly value: string;

}

/**
 * @schema WafRateBasedRule
 */
export interface WafRateBasedRule {
  /**
   * @schema WafRateBasedRule#RuleId
   */
  readonly ruleId: string;

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
  readonly matchPredicates: WafPredicate[];

  /**
   * @schema WafRateBasedRule#RateKey
   */
  readonly rateKey: string;

  /**
   * @schema WafRateBasedRule#RateLimit
   */
  readonly rateLimit: number;

}

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
 * @schema WafRegexPatternSet
 */
export interface WafRegexPatternSet {
  /**
   * @schema WafRegexPatternSet#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema WafRegexPatternSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegexPatternSet#RegexPatternStrings
   */
  readonly regexPatternStrings: string[];

}

/**
 * @schema WafRule
 */
export interface WafRule {
  /**
   * @schema WafRule#RuleId
   */
  readonly ruleId: string;

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
  readonly predicates: WafPredicate[];

}

/**
 * @schema WafRuleGroup
 */
export interface WafRuleGroup {
  /**
   * @schema WafRuleGroup#RuleGroupId
   */
  readonly ruleGroupId: string;

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
 * @schema WafSizeConstraintSet
 */
export interface WafSizeConstraintSet {
  /**
   * @schema WafSizeConstraintSet#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema WafSizeConstraintSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafSizeConstraintSet#SizeConstraints
   */
  readonly sizeConstraints: WafSizeConstraint[];

}

/**
 * @schema WafSqlInjectionMatchSet
 */
export interface WafSqlInjectionMatchSet {
  /**
   * @schema WafSqlInjectionMatchSet#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema WafSqlInjectionMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafSqlInjectionMatchSet#SqlInjectionMatchTuples
   */
  readonly sqlInjectionMatchTuples: WafSqlInjectionMatchTuple[];

}

/**
 * @schema WafWafAction
 */
export interface WafWafAction {
  /**
   * @schema WafWafAction#Type
   */
  readonly type: string;

}

/**
 * @schema WafWebAcl
 */
export interface WafWebAcl {
  /**
   * @schema WafWebAcl#WebACLId
   */
  readonly webAclId: string;

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
  readonly defaultAction: WafWafAction;

  /**
   * @schema WafWebAcl#Rules
   */
  readonly rules: WafActivatedRule[];

  /**
   * @schema WafWebAcl#WebACLArn
   */
  readonly webAclArn?: string;

}

/**
 * @schema WafXssMatchSet
 */
export interface WafXssMatchSet {
  /**
   * @schema WafXssMatchSet#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema WafXssMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafXssMatchSet#XssMatchTuples
   */
  readonly xssMatchTuples: WafXssMatchTuple[];

}

/**
 * @schema WafLoggingConfiguration
 */
export interface WafLoggingConfiguration {
  /**
   * @schema WafLoggingConfiguration#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema WafLoggingConfiguration#LogDestinationConfigs
   */
  readonly logDestinationConfigs: string[];

  /**
   * @schema WafLoggingConfiguration#RedactedFields
   */
  readonly redactedFields?: WafFieldToMatch[];

}

/**
 * @schema WafTimeWindow
 */
export interface WafTimeWindow {
  /**
   * @schema WafTimeWindow#StartTime
   */
  readonly startTime: string;

  /**
   * @schema WafTimeWindow#EndTime
   */
  readonly endTime: string;

}

/**
 * @schema WafSampledHttpRequest
 */
export interface WafSampledHttpRequest {
  /**
   * @schema WafSampledHttpRequest#Request
   */
  readonly request: WafhttpRequest;

  /**
   * @schema WafSampledHttpRequest#Weight
   */
  readonly weight: number;

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
 * @schema WafActivatedRule
 */
export interface WafActivatedRule {
  /**
   * @schema WafActivatedRule#Priority
   */
  readonly priority: number;

  /**
   * @schema WafActivatedRule#RuleId
   */
  readonly ruleId: string;

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
 * @schema WafByteMatchSetSummary
 */
export interface WafByteMatchSetSummary {
  /**
   * @schema WafByteMatchSetSummary#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema WafByteMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafGeoMatchSetSummary
 */
export interface WafGeoMatchSetSummary {
  /**
   * @schema WafGeoMatchSetSummary#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema WafGeoMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafipSetSummary
 */
export interface WafipSetSummary {
  /**
   * @schema WafipSetSummary#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema WafipSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRuleSummary
 */
export interface WafRuleSummary {
  /**
   * @schema WafRuleSummary#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafRuleSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegexMatchSetSummary
 */
export interface WafRegexMatchSetSummary {
  /**
   * @schema WafRegexMatchSetSummary#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

  /**
   * @schema WafRegexMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegexPatternSetSummary
 */
export interface WafRegexPatternSetSummary {
  /**
   * @schema WafRegexPatternSetSummary#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema WafRegexPatternSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRuleGroupSummary
 */
export interface WafRuleGroupSummary {
  /**
   * @schema WafRuleGroupSummary#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema WafRuleGroupSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafSizeConstraintSetSummary
 */
export interface WafSizeConstraintSetSummary {
  /**
   * @schema WafSizeConstraintSetSummary#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema WafSizeConstraintSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafSqlInjectionMatchSetSummary
 */
export interface WafSqlInjectionMatchSetSummary {
  /**
   * @schema WafSqlInjectionMatchSetSummary#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema WafSqlInjectionMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafSubscribedRuleGroupSummary
 */
export interface WafSubscribedRuleGroupSummary {
  /**
   * @schema WafSubscribedRuleGroupSummary#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema WafSubscribedRuleGroupSummary#Name
   */
  readonly name: string;

  /**
   * @schema WafSubscribedRuleGroupSummary#MetricName
   */
  readonly metricName: string;

}

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
 * @schema WafWebAclSummary
 */
export interface WafWebAclSummary {
  /**
   * @schema WafWebAclSummary#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WafWebAclSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafXssMatchSetSummary
 */
export interface WafXssMatchSetSummary {
  /**
   * @schema WafXssMatchSetSummary#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema WafXssMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafByteMatchSetUpdate
 */
export interface WafByteMatchSetUpdate {
  /**
   * @schema WafByteMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafByteMatchSetUpdate#ByteMatchTuple
   */
  readonly byteMatchTuple: WafByteMatchTuple;

}

/**
 * @schema WafGeoMatchSetUpdate
 */
export interface WafGeoMatchSetUpdate {
  /**
   * @schema WafGeoMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafGeoMatchSetUpdate#GeoMatchConstraint
   */
  readonly geoMatchConstraint: WafGeoMatchConstraint;

}

/**
 * @schema WafipSetUpdate
 */
export interface WafipSetUpdate {
  /**
   * @schema WafipSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafipSetUpdate#IPSetDescriptor
   */
  readonly ipSetDescriptor: WafipSetDescriptor;

}

/**
 * @schema WafRuleUpdate
 */
export interface WafRuleUpdate {
  /**
   * @schema WafRuleUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRuleUpdate#Predicate
   */
  readonly predicate: WafPredicate;

}

/**
 * @schema WafRegexMatchSetUpdate
 */
export interface WafRegexMatchSetUpdate {
  /**
   * @schema WafRegexMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegexMatchSetUpdate#RegexMatchTuple
   */
  readonly regexMatchTuple: WafRegexMatchTuple;

}

/**
 * @schema WafRegexPatternSetUpdate
 */
export interface WafRegexPatternSetUpdate {
  /**
   * @schema WafRegexPatternSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegexPatternSetUpdate#RegexPatternString
   */
  readonly regexPatternString: string;

}

/**
 * @schema WafRuleGroupUpdate
 */
export interface WafRuleGroupUpdate {
  /**
   * @schema WafRuleGroupUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRuleGroupUpdate#ActivatedRule
   */
  readonly activatedRule: WafActivatedRule;

}

/**
 * @schema WafSizeConstraintSetUpdate
 */
export interface WafSizeConstraintSetUpdate {
  /**
   * @schema WafSizeConstraintSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafSizeConstraintSetUpdate#SizeConstraint
   */
  readonly sizeConstraint: WafSizeConstraint;

}

/**
 * @schema WafSqlInjectionMatchSetUpdate
 */
export interface WafSqlInjectionMatchSetUpdate {
  /**
   * @schema WafSqlInjectionMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafSqlInjectionMatchSetUpdate#SqlInjectionMatchTuple
   */
  readonly sqlInjectionMatchTuple: WafSqlInjectionMatchTuple;

}

/**
 * @schema WafWebAclUpdate
 */
export interface WafWebAclUpdate {
  /**
   * @schema WafWebAclUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafWebAclUpdate#ActivatedRule
   */
  readonly activatedRule: WafActivatedRule;

}

/**
 * @schema WafXssMatchSetUpdate
 */
export interface WafXssMatchSetUpdate {
  /**
   * @schema WafXssMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafXssMatchSetUpdate#XssMatchTuple
   */
  readonly xssMatchTuple: WafXssMatchTuple;

}

/**
 * @schema WafByteMatchTuple
 */
export interface WafByteMatchTuple {
  /**
   * @schema WafByteMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: WafFieldToMatch;

  /**
   * @schema WafByteMatchTuple#TargetString
   */
  readonly targetString: any;

  /**
   * @schema WafByteMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

  /**
   * @schema WafByteMatchTuple#PositionalConstraint
   */
  readonly positionalConstraint: string;

}

/**
 * @schema WafGeoMatchConstraint
 */
export interface WafGeoMatchConstraint {
  /**
   * @schema WafGeoMatchConstraint#Type
   */
  readonly type: string;

  /**
   * @schema WafGeoMatchConstraint#Value
   */
  readonly value: string;

}

/**
 * @schema WafipSetDescriptor
 */
export interface WafipSetDescriptor {
  /**
   * @schema WafipSetDescriptor#Type
   */
  readonly type: string;

  /**
   * @schema WafipSetDescriptor#Value
   */
  readonly value: string;

}

/**
 * @schema WafPredicate
 */
export interface WafPredicate {
  /**
   * @schema WafPredicate#Negated
   */
  readonly negated: boolean;

  /**
   * @schema WafPredicate#Type
   */
  readonly type: string;

  /**
   * @schema WafPredicate#DataId
   */
  readonly dataId: string;

}

/**
 * @schema WafRegexMatchTuple
 */
export interface WafRegexMatchTuple {
  /**
   * @schema WafRegexMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: WafFieldToMatch;

  /**
   * @schema WafRegexMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

  /**
   * @schema WafRegexMatchTuple#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

}

/**
 * @schema WafSizeConstraint
 */
export interface WafSizeConstraint {
  /**
   * @schema WafSizeConstraint#FieldToMatch
   */
  readonly fieldToMatch: WafFieldToMatch;

  /**
   * @schema WafSizeConstraint#TextTransformation
   */
  readonly textTransformation: string;

  /**
   * @schema WafSizeConstraint#ComparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema WafSizeConstraint#Size
   */
  readonly size: number;

}

/**
 * @schema WafSqlInjectionMatchTuple
 */
export interface WafSqlInjectionMatchTuple {
  /**
   * @schema WafSqlInjectionMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: WafFieldToMatch;

  /**
   * @schema WafSqlInjectionMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

}

/**
 * @schema WafXssMatchTuple
 */
export interface WafXssMatchTuple {
  /**
   * @schema WafXssMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: WafFieldToMatch;

  /**
   * @schema WafXssMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

}

/**
 * @schema WafFieldToMatch
 */
export interface WafFieldToMatch {
  /**
   * @schema WafFieldToMatch#Type
   */
  readonly type: string;

  /**
   * @schema WafFieldToMatch#Data
   */
  readonly data?: string;

}

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
 * @schema WafWafOverrideAction
 */
export interface WafWafOverrideAction {
  /**
   * @schema WafWafOverrideAction#Type
   */
  readonly type: string;

}

/**
 * @schema WafExcludedRule
 */
export interface WafExcludedRule {
  /**
   * @schema WafExcludedRule#RuleId
   */
  readonly ruleId: string;

}

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
