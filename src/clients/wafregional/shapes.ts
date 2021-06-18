/**
 * @schema WafRegionalAssociateWebAclRequest
 */
export interface WafRegionalAssociateWebAclRequest {
  /**
   * @schema WafRegionalAssociateWebAclRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WafRegionalAssociateWebAclRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema WafRegionalAssociateWebAclResponse
 */
export interface WafRegionalAssociateWebAclResponse {
}

/**
 * @schema WafRegionalCreateByteMatchSetRequest
 */
export interface WafRegionalCreateByteMatchSetRequest {
  /**
   * @schema WafRegionalCreateByteMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateByteMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalCreateGeoMatchSetRequest
 */
export interface WafRegionalCreateGeoMatchSetRequest {
  /**
   * @schema WafRegionalCreateGeoMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalCreateIpSetRequest
 */
export interface WafRegionalCreateIpSetRequest {
  /**
   * @schema WafRegionalCreateIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateIpSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalCreateRateBasedRuleRequest
 */
export interface WafRegionalCreateRateBasedRuleRequest {
  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#RateKey
   */
  readonly rateKey: string;

  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#RateLimit
   */
  readonly rateLimit: number;

  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalCreateRateBasedRuleRequest#Tags
   */
  readonly tags?: WafRegionalTag[];

}

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
 * @schema WafRegionalCreateRegexMatchSetRequest
 */
export interface WafRegionalCreateRegexMatchSetRequest {
  /**
   * @schema WafRegionalCreateRegexMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalCreateRegexPatternSetRequest
 */
export interface WafRegionalCreateRegexPatternSetRequest {
  /**
   * @schema WafRegionalCreateRegexPatternSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalCreateRuleRequest
 */
export interface WafRegionalCreateRuleRequest {
  /**
   * @schema WafRegionalCreateRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateRuleRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema WafRegionalCreateRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalCreateRuleRequest#Tags
   */
  readonly tags?: WafRegionalTag[];

}

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
 * @schema WafRegionalCreateRuleGroupRequest
 */
export interface WafRegionalCreateRuleGroupRequest {
  /**
   * @schema WafRegionalCreateRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateRuleGroupRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema WafRegionalCreateRuleGroupRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalCreateRuleGroupRequest#Tags
   */
  readonly tags?: WafRegionalTag[];

}

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
 * @schema WafRegionalCreateSizeConstraintSetRequest
 */
export interface WafRegionalCreateSizeConstraintSetRequest {
  /**
   * @schema WafRegionalCreateSizeConstraintSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalCreateSqlInjectionMatchSetRequest
 */
export interface WafRegionalCreateSqlInjectionMatchSetRequest {
  /**
   * @schema WafRegionalCreateSqlInjectionMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalCreateWebAclRequest
 */
export interface WafRegionalCreateWebAclRequest {
  /**
   * @schema WafRegionalCreateWebAclRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateWebAclRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema WafRegionalCreateWebAclRequest#DefaultAction
   */
  readonly defaultAction: WafRegionalWafAction;

  /**
   * @schema WafRegionalCreateWebAclRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalCreateWebAclRequest#Tags
   */
  readonly tags?: WafRegionalTag[];

}

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
 * @schema WafRegionalCreateWebAclMigrationStackRequest
 */
export interface WafRegionalCreateWebAclMigrationStackRequest {
  /**
   * @schema WafRegionalCreateWebAclMigrationStackRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WafRegionalCreateWebAclMigrationStackRequest#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema WafRegionalCreateWebAclMigrationStackRequest#IgnoreUnsupportedType
   */
  readonly ignoreUnsupportedType: boolean;

}

/**
 * @schema WafRegionalCreateWebAclMigrationStackResponse
 */
export interface WafRegionalCreateWebAclMigrationStackResponse {
  /**
   * @schema WafRegionalCreateWebAclMigrationStackResponse#S3ObjectUrl
   */
  readonly s3ObjectUrl: string;

}

/**
 * @schema WafRegionalCreateXssMatchSetRequest
 */
export interface WafRegionalCreateXssMatchSetRequest {
  /**
   * @schema WafRegionalCreateXssMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalCreateXssMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteByteMatchSetRequest
 */
export interface WafRegionalDeleteByteMatchSetRequest {
  /**
   * @schema WafRegionalDeleteByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema WafRegionalDeleteByteMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteGeoMatchSetRequest
 */
export interface WafRegionalDeleteGeoMatchSetRequest {
  /**
   * @schema WafRegionalDeleteGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema WafRegionalDeleteGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteIpSetRequest
 */
export interface WafRegionalDeleteIpSetRequest {
  /**
   * @schema WafRegionalDeleteIpSetRequest#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema WafRegionalDeleteIpSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteLoggingConfigurationRequest
 */
export interface WafRegionalDeleteLoggingConfigurationRequest {
  /**
   * @schema WafRegionalDeleteLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema WafRegionalDeleteLoggingConfigurationResponse
 */
export interface WafRegionalDeleteLoggingConfigurationResponse {
}

/**
 * @schema WafRegionalDeletePermissionPolicyRequest
 */
export interface WafRegionalDeletePermissionPolicyRequest {
  /**
   * @schema WafRegionalDeletePermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema WafRegionalDeletePermissionPolicyResponse
 */
export interface WafRegionalDeletePermissionPolicyResponse {
}

/**
 * @schema WafRegionalDeleteRateBasedRuleRequest
 */
export interface WafRegionalDeleteRateBasedRuleRequest {
  /**
   * @schema WafRegionalDeleteRateBasedRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafRegionalDeleteRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteRegexMatchSetRequest
 */
export interface WafRegionalDeleteRegexMatchSetRequest {
  /**
   * @schema WafRegionalDeleteRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

  /**
   * @schema WafRegionalDeleteRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteRegexPatternSetRequest
 */
export interface WafRegionalDeleteRegexPatternSetRequest {
  /**
   * @schema WafRegionalDeleteRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema WafRegionalDeleteRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteRuleRequest
 */
export interface WafRegionalDeleteRuleRequest {
  /**
   * @schema WafRegionalDeleteRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafRegionalDeleteRuleRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteRuleGroupRequest
 */
export interface WafRegionalDeleteRuleGroupRequest {
  /**
   * @schema WafRegionalDeleteRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema WafRegionalDeleteRuleGroupRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteSizeConstraintSetRequest
 */
export interface WafRegionalDeleteSizeConstraintSetRequest {
  /**
   * @schema WafRegionalDeleteSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema WafRegionalDeleteSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteSqlInjectionMatchSetRequest
 */
export interface WafRegionalDeleteSqlInjectionMatchSetRequest {
  /**
   * @schema WafRegionalDeleteSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema WafRegionalDeleteSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteWebAclRequest
 */
export interface WafRegionalDeleteWebAclRequest {
  /**
   * @schema WafRegionalDeleteWebAclRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WafRegionalDeleteWebAclRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDeleteXssMatchSetRequest
 */
export interface WafRegionalDeleteXssMatchSetRequest {
  /**
   * @schema WafRegionalDeleteXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema WafRegionalDeleteXssMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalDisassociateWebAclRequest
 */
export interface WafRegionalDisassociateWebAclRequest {
  /**
   * @schema WafRegionalDisassociateWebAclRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema WafRegionalDisassociateWebAclResponse
 */
export interface WafRegionalDisassociateWebAclResponse {
}

/**
 * @schema WafRegionalGetByteMatchSetRequest
 */
export interface WafRegionalGetByteMatchSetRequest {
  /**
   * @schema WafRegionalGetByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

}

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
 * @schema WafRegionalGetChangeTokenRequest
 */
export interface WafRegionalGetChangeTokenRequest {
}

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
 * @schema WafRegionalGetChangeTokenStatusRequest
 */
export interface WafRegionalGetChangeTokenStatusRequest {
  /**
   * @schema WafRegionalGetChangeTokenStatusRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalGetGeoMatchSetRequest
 */
export interface WafRegionalGetGeoMatchSetRequest {
  /**
   * @schema WafRegionalGetGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

}

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
 * @schema WafRegionalGetIpSetRequest
 */
export interface WafRegionalGetIpSetRequest {
  /**
   * @schema WafRegionalGetIpSetRequest#IPSetId
   */
  readonly ipSetId: string;

}

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
 * @schema WafRegionalGetLoggingConfigurationRequest
 */
export interface WafRegionalGetLoggingConfigurationRequest {
  /**
   * @schema WafRegionalGetLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema WafRegionalGetPermissionPolicyRequest
 */
export interface WafRegionalGetPermissionPolicyRequest {
  /**
   * @schema WafRegionalGetPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema WafRegionalGetRateBasedRuleRequest
 */
export interface WafRegionalGetRateBasedRuleRequest {
  /**
   * @schema WafRegionalGetRateBasedRuleRequest#RuleId
   */
  readonly ruleId: string;

}

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
 * @schema WafRegionalGetRateBasedRuleManagedKeysRequest
 */
export interface WafRegionalGetRateBasedRuleManagedKeysRequest {
  /**
   * @schema WafRegionalGetRateBasedRuleManagedKeysRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafRegionalGetRateBasedRuleManagedKeysRequest#NextMarker
   */
  readonly nextMarker?: string;

}

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
 * @schema WafRegionalGetRegexMatchSetRequest
 */
export interface WafRegionalGetRegexMatchSetRequest {
  /**
   * @schema WafRegionalGetRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

}

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
 * @schema WafRegionalGetRegexPatternSetRequest
 */
export interface WafRegionalGetRegexPatternSetRequest {
  /**
   * @schema WafRegionalGetRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

}

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
 * @schema WafRegionalGetRuleRequest
 */
export interface WafRegionalGetRuleRequest {
  /**
   * @schema WafRegionalGetRuleRequest#RuleId
   */
  readonly ruleId: string;

}

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
 * @schema WafRegionalGetRuleGroupRequest
 */
export interface WafRegionalGetRuleGroupRequest {
  /**
   * @schema WafRegionalGetRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId: string;

}

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
 * @schema WafRegionalGetSampledRequestsRequest
 */
export interface WafRegionalGetSampledRequestsRequest {
  /**
   * @schema WafRegionalGetSampledRequestsRequest#WebAclId
   */
  readonly webAclId: string;

  /**
   * @schema WafRegionalGetSampledRequestsRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafRegionalGetSampledRequestsRequest#TimeWindow
   */
  readonly timeWindow: WafRegionalTimeWindow;

  /**
   * @schema WafRegionalGetSampledRequestsRequest#MaxItems
   */
  readonly maxItems: number;

}

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
 * @schema WafRegionalGetSizeConstraintSetRequest
 */
export interface WafRegionalGetSizeConstraintSetRequest {
  /**
   * @schema WafRegionalGetSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

}

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
 * @schema WafRegionalGetSqlInjectionMatchSetRequest
 */
export interface WafRegionalGetSqlInjectionMatchSetRequest {
  /**
   * @schema WafRegionalGetSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

}

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
 * @schema WafRegionalGetWebAclRequest
 */
export interface WafRegionalGetWebAclRequest {
  /**
   * @schema WafRegionalGetWebAclRequest#WebACLId
   */
  readonly webAclId: string;

}

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
 * @schema WafRegionalGetWebAclForResourceRequest
 */
export interface WafRegionalGetWebAclForResourceRequest {
  /**
   * @schema WafRegionalGetWebAclForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema WafRegionalGetXssMatchSetRequest
 */
export interface WafRegionalGetXssMatchSetRequest {
  /**
   * @schema WafRegionalGetXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId: string;

}

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
 * @schema WafRegionalListResourcesForWebAclRequest
 */
export interface WafRegionalListResourcesForWebAclRequest {
  /**
   * @schema WafRegionalListResourcesForWebAclRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WafRegionalListResourcesForWebAclRequest#ResourceType
   */
  readonly resourceType?: string;

}

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
  readonly resourceArn: string;

}

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
 * @schema WafRegionalPutLoggingConfigurationRequest
 */
export interface WafRegionalPutLoggingConfigurationRequest {
  /**
   * @schema WafRegionalPutLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration: WafRegionalLoggingConfiguration;

}

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
 * @schema WafRegionalPutPermissionPolicyRequest
 */
export interface WafRegionalPutPermissionPolicyRequest {
  /**
   * @schema WafRegionalPutPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema WafRegionalPutPermissionPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema WafRegionalPutPermissionPolicyResponse
 */
export interface WafRegionalPutPermissionPolicyResponse {
}

/**
 * @schema WafRegionalTagResourceRequest
 */
export interface WafRegionalTagResourceRequest {
  /**
   * @schema WafRegionalTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema WafRegionalTagResourceRequest#Tags
   */
  readonly tags: WafRegionalTag[];

}

/**
 * @schema WafRegionalTagResourceResponse
 */
export interface WafRegionalTagResourceResponse {
}

/**
 * @schema WafRegionalUntagResourceRequest
 */
export interface WafRegionalUntagResourceRequest {
  /**
   * @schema WafRegionalUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema WafRegionalUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema WafRegionalUntagResourceResponse
 */
export interface WafRegionalUntagResourceResponse {
}

/**
 * @schema WafRegionalUpdateByteMatchSetRequest
 */
export interface WafRegionalUpdateByteMatchSetRequest {
  /**
   * @schema WafRegionalUpdateByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema WafRegionalUpdateByteMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalUpdateByteMatchSetRequest#Updates
   */
  readonly updates: WafRegionalByteMatchSetUpdate[];

}

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
 * @schema WafRegionalUpdateGeoMatchSetRequest
 */
export interface WafRegionalUpdateGeoMatchSetRequest {
  /**
   * @schema WafRegionalUpdateGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema WafRegionalUpdateGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalUpdateGeoMatchSetRequest#Updates
   */
  readonly updates: WafRegionalGeoMatchSetUpdate[];

}

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
 * @schema WafRegionalUpdateIpSetRequest
 */
export interface WafRegionalUpdateIpSetRequest {
  /**
   * @schema WafRegionalUpdateIpSetRequest#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema WafRegionalUpdateIpSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalUpdateIpSetRequest#Updates
   */
  readonly updates: WafRegionalIpSetUpdate[];

}

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
 * @schema WafRegionalUpdateRateBasedRuleRequest
 */
export interface WafRegionalUpdateRateBasedRuleRequest {
  /**
   * @schema WafRegionalUpdateRateBasedRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafRegionalUpdateRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalUpdateRateBasedRuleRequest#Updates
   */
  readonly updates: WafRegionalRuleUpdate[];

  /**
   * @schema WafRegionalUpdateRateBasedRuleRequest#RateLimit
   */
  readonly rateLimit: number;

}

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
 * @schema WafRegionalUpdateRegexMatchSetRequest
 */
export interface WafRegionalUpdateRegexMatchSetRequest {
  /**
   * @schema WafRegionalUpdateRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

  /**
   * @schema WafRegionalUpdateRegexMatchSetRequest#Updates
   */
  readonly updates: WafRegionalRegexMatchSetUpdate[];

  /**
   * @schema WafRegionalUpdateRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalUpdateRegexPatternSetRequest
 */
export interface WafRegionalUpdateRegexPatternSetRequest {
  /**
   * @schema WafRegionalUpdateRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema WafRegionalUpdateRegexPatternSetRequest#Updates
   */
  readonly updates: WafRegionalRegexPatternSetUpdate[];

  /**
   * @schema WafRegionalUpdateRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalUpdateRuleRequest
 */
export interface WafRegionalUpdateRuleRequest {
  /**
   * @schema WafRegionalUpdateRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafRegionalUpdateRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalUpdateRuleRequest#Updates
   */
  readonly updates: WafRegionalRuleUpdate[];

}

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
 * @schema WafRegionalUpdateRuleGroupRequest
 */
export interface WafRegionalUpdateRuleGroupRequest {
  /**
   * @schema WafRegionalUpdateRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema WafRegionalUpdateRuleGroupRequest#Updates
   */
  readonly updates: WafRegionalRuleGroupUpdate[];

  /**
   * @schema WafRegionalUpdateRuleGroupRequest#ChangeToken
   */
  readonly changeToken: string;

}

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
 * @schema WafRegionalUpdateSizeConstraintSetRequest
 */
export interface WafRegionalUpdateSizeConstraintSetRequest {
  /**
   * @schema WafRegionalUpdateSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema WafRegionalUpdateSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalUpdateSizeConstraintSetRequest#Updates
   */
  readonly updates: WafRegionalSizeConstraintSetUpdate[];

}

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
 * @schema WafRegionalUpdateSqlInjectionMatchSetRequest
 */
export interface WafRegionalUpdateSqlInjectionMatchSetRequest {
  /**
   * @schema WafRegionalUpdateSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema WafRegionalUpdateSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalUpdateSqlInjectionMatchSetRequest#Updates
   */
  readonly updates: WafRegionalSqlInjectionMatchSetUpdate[];

}

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
 * @schema WafRegionalUpdateWebAclRequest
 */
export interface WafRegionalUpdateWebAclRequest {
  /**
   * @schema WafRegionalUpdateWebAclRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WafRegionalUpdateWebAclRequest#ChangeToken
   */
  readonly changeToken: string;

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
 * @schema WafRegionalUpdateWebAclResponse
 */
export interface WafRegionalUpdateWebAclResponse {
  /**
   * @schema WafRegionalUpdateWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema WafRegionalUpdateXssMatchSetRequest
 */
export interface WafRegionalUpdateXssMatchSetRequest {
  /**
   * @schema WafRegionalUpdateXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema WafRegionalUpdateXssMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema WafRegionalUpdateXssMatchSetRequest#Updates
   */
  readonly updates: WafRegionalXssMatchSetUpdate[];

}

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
 * @schema WafRegionalByteMatchSet
 */
export interface WafRegionalByteMatchSet {
  /**
   * @schema WafRegionalByteMatchSet#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema WafRegionalByteMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalByteMatchSet#ByteMatchTuples
   */
  readonly byteMatchTuples: WafRegionalByteMatchTuple[];

}

/**
 * @schema WafRegionalGeoMatchSet
 */
export interface WafRegionalGeoMatchSet {
  /**
   * @schema WafRegionalGeoMatchSet#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema WafRegionalGeoMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalGeoMatchSet#GeoMatchConstraints
   */
  readonly geoMatchConstraints: WafRegionalGeoMatchConstraint[];

}

/**
 * @schema WafRegionalIpSet
 */
export interface WafRegionalIpSet {
  /**
   * @schema WafRegionalIpSet#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema WafRegionalIpSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalIpSet#IPSetDescriptors
   */
  readonly ipSetDescriptors: WafRegionalIpSetDescriptor[];

}

/**
 * @schema WafRegionalTag
 */
export interface WafRegionalTag {
  /**
   * @schema WafRegionalTag#Key
   */
  readonly key: string;

  /**
   * @schema WafRegionalTag#Value
   */
  readonly value: string;

}

/**
 * @schema WafRegionalRateBasedRule
 */
export interface WafRegionalRateBasedRule {
  /**
   * @schema WafRegionalRateBasedRule#RuleId
   */
  readonly ruleId: string;

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
  readonly matchPredicates: WafRegionalPredicate[];

  /**
   * @schema WafRegionalRateBasedRule#RateKey
   */
  readonly rateKey: string;

  /**
   * @schema WafRegionalRateBasedRule#RateLimit
   */
  readonly rateLimit: number;

}

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
 * @schema WafRegionalRegexPatternSet
 */
export interface WafRegionalRegexPatternSet {
  /**
   * @schema WafRegionalRegexPatternSet#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema WafRegionalRegexPatternSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalRegexPatternSet#RegexPatternStrings
   */
  readonly regexPatternStrings: string[];

}

/**
 * @schema WafRegionalRule
 */
export interface WafRegionalRule {
  /**
   * @schema WafRegionalRule#RuleId
   */
  readonly ruleId: string;

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
  readonly predicates: WafRegionalPredicate[];

}

/**
 * @schema WafRegionalRuleGroup
 */
export interface WafRegionalRuleGroup {
  /**
   * @schema WafRegionalRuleGroup#RuleGroupId
   */
  readonly ruleGroupId: string;

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
 * @schema WafRegionalSizeConstraintSet
 */
export interface WafRegionalSizeConstraintSet {
  /**
   * @schema WafRegionalSizeConstraintSet#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema WafRegionalSizeConstraintSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalSizeConstraintSet#SizeConstraints
   */
  readonly sizeConstraints: WafRegionalSizeConstraint[];

}

/**
 * @schema WafRegionalSqlInjectionMatchSet
 */
export interface WafRegionalSqlInjectionMatchSet {
  /**
   * @schema WafRegionalSqlInjectionMatchSet#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema WafRegionalSqlInjectionMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalSqlInjectionMatchSet#SqlInjectionMatchTuples
   */
  readonly sqlInjectionMatchTuples: WafRegionalSqlInjectionMatchTuple[];

}

/**
 * @schema WafRegionalWafAction
 */
export interface WafRegionalWafAction {
  /**
   * @schema WafRegionalWafAction#Type
   */
  readonly type: string;

}

/**
 * @schema WafRegionalWebAcl
 */
export interface WafRegionalWebAcl {
  /**
   * @schema WafRegionalWebAcl#WebACLId
   */
  readonly webAclId: string;

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
  readonly defaultAction: WafRegionalWafAction;

  /**
   * @schema WafRegionalWebAcl#Rules
   */
  readonly rules: WafRegionalActivatedRule[];

  /**
   * @schema WafRegionalWebAcl#WebACLArn
   */
  readonly webAclArn?: string;

}

/**
 * @schema WafRegionalXssMatchSet
 */
export interface WafRegionalXssMatchSet {
  /**
   * @schema WafRegionalXssMatchSet#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema WafRegionalXssMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema WafRegionalXssMatchSet#XssMatchTuples
   */
  readonly xssMatchTuples: WafRegionalXssMatchTuple[];

}

/**
 * @schema WafRegionalLoggingConfiguration
 */
export interface WafRegionalLoggingConfiguration {
  /**
   * @schema WafRegionalLoggingConfiguration#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema WafRegionalLoggingConfiguration#LogDestinationConfigs
   */
  readonly logDestinationConfigs: string[];

  /**
   * @schema WafRegionalLoggingConfiguration#RedactedFields
   */
  readonly redactedFields?: WafRegionalFieldToMatch[];

}

/**
 * @schema WafRegionalTimeWindow
 */
export interface WafRegionalTimeWindow {
  /**
   * @schema WafRegionalTimeWindow#StartTime
   */
  readonly startTime: string;

  /**
   * @schema WafRegionalTimeWindow#EndTime
   */
  readonly endTime: string;

}

/**
 * @schema WafRegionalSampledHttpRequest
 */
export interface WafRegionalSampledHttpRequest {
  /**
   * @schema WafRegionalSampledHttpRequest#Request
   */
  readonly request: WafRegionalHttpRequest;

  /**
   * @schema WafRegionalSampledHttpRequest#Weight
   */
  readonly weight: number;

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
 * @schema WafRegionalWebAclSummary
 */
export interface WafRegionalWebAclSummary {
  /**
   * @schema WafRegionalWebAclSummary#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WafRegionalWebAclSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalActivatedRule
 */
export interface WafRegionalActivatedRule {
  /**
   * @schema WafRegionalActivatedRule#Priority
   */
  readonly priority: number;

  /**
   * @schema WafRegionalActivatedRule#RuleId
   */
  readonly ruleId: string;

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
 * @schema WafRegionalByteMatchSetSummary
 */
export interface WafRegionalByteMatchSetSummary {
  /**
   * @schema WafRegionalByteMatchSetSummary#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema WafRegionalByteMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalGeoMatchSetSummary
 */
export interface WafRegionalGeoMatchSetSummary {
  /**
   * @schema WafRegionalGeoMatchSetSummary#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema WafRegionalGeoMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalIpSetSummary
 */
export interface WafRegionalIpSetSummary {
  /**
   * @schema WafRegionalIpSetSummary#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema WafRegionalIpSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalRuleSummary
 */
export interface WafRegionalRuleSummary {
  /**
   * @schema WafRegionalRuleSummary#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema WafRegionalRuleSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalRegexMatchSetSummary
 */
export interface WafRegionalRegexMatchSetSummary {
  /**
   * @schema WafRegionalRegexMatchSetSummary#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

  /**
   * @schema WafRegionalRegexMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalRegexPatternSetSummary
 */
export interface WafRegionalRegexPatternSetSummary {
  /**
   * @schema WafRegionalRegexPatternSetSummary#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema WafRegionalRegexPatternSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalRuleGroupSummary
 */
export interface WafRegionalRuleGroupSummary {
  /**
   * @schema WafRegionalRuleGroupSummary#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema WafRegionalRuleGroupSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalSizeConstraintSetSummary
 */
export interface WafRegionalSizeConstraintSetSummary {
  /**
   * @schema WafRegionalSizeConstraintSetSummary#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema WafRegionalSizeConstraintSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalSqlInjectionMatchSetSummary
 */
export interface WafRegionalSqlInjectionMatchSetSummary {
  /**
   * @schema WafRegionalSqlInjectionMatchSetSummary#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema WafRegionalSqlInjectionMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalSubscribedRuleGroupSummary
 */
export interface WafRegionalSubscribedRuleGroupSummary {
  /**
   * @schema WafRegionalSubscribedRuleGroupSummary#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema WafRegionalSubscribedRuleGroupSummary#Name
   */
  readonly name: string;

  /**
   * @schema WafRegionalSubscribedRuleGroupSummary#MetricName
   */
  readonly metricName: string;

}

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
 * @schema WafRegionalXssMatchSetSummary
 */
export interface WafRegionalXssMatchSetSummary {
  /**
   * @schema WafRegionalXssMatchSetSummary#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema WafRegionalXssMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema WafRegionalByteMatchSetUpdate
 */
export interface WafRegionalByteMatchSetUpdate {
  /**
   * @schema WafRegionalByteMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalByteMatchSetUpdate#ByteMatchTuple
   */
  readonly byteMatchTuple: WafRegionalByteMatchTuple;

}

/**
 * @schema WafRegionalGeoMatchSetUpdate
 */
export interface WafRegionalGeoMatchSetUpdate {
  /**
   * @schema WafRegionalGeoMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalGeoMatchSetUpdate#GeoMatchConstraint
   */
  readonly geoMatchConstraint: WafRegionalGeoMatchConstraint;

}

/**
 * @schema WafRegionalIpSetUpdate
 */
export interface WafRegionalIpSetUpdate {
  /**
   * @schema WafRegionalIpSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalIpSetUpdate#IPSetDescriptor
   */
  readonly ipSetDescriptor: WafRegionalIpSetDescriptor;

}

/**
 * @schema WafRegionalRuleUpdate
 */
export interface WafRegionalRuleUpdate {
  /**
   * @schema WafRegionalRuleUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalRuleUpdate#Predicate
   */
  readonly predicate: WafRegionalPredicate;

}

/**
 * @schema WafRegionalRegexMatchSetUpdate
 */
export interface WafRegionalRegexMatchSetUpdate {
  /**
   * @schema WafRegionalRegexMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalRegexMatchSetUpdate#RegexMatchTuple
   */
  readonly regexMatchTuple: WafRegionalRegexMatchTuple;

}

/**
 * @schema WafRegionalRegexPatternSetUpdate
 */
export interface WafRegionalRegexPatternSetUpdate {
  /**
   * @schema WafRegionalRegexPatternSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalRegexPatternSetUpdate#RegexPatternString
   */
  readonly regexPatternString: string;

}

/**
 * @schema WafRegionalRuleGroupUpdate
 */
export interface WafRegionalRuleGroupUpdate {
  /**
   * @schema WafRegionalRuleGroupUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalRuleGroupUpdate#ActivatedRule
   */
  readonly activatedRule: WafRegionalActivatedRule;

}

/**
 * @schema WafRegionalSizeConstraintSetUpdate
 */
export interface WafRegionalSizeConstraintSetUpdate {
  /**
   * @schema WafRegionalSizeConstraintSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalSizeConstraintSetUpdate#SizeConstraint
   */
  readonly sizeConstraint: WafRegionalSizeConstraint;

}

/**
 * @schema WafRegionalSqlInjectionMatchSetUpdate
 */
export interface WafRegionalSqlInjectionMatchSetUpdate {
  /**
   * @schema WafRegionalSqlInjectionMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalSqlInjectionMatchSetUpdate#SqlInjectionMatchTuple
   */
  readonly sqlInjectionMatchTuple: WafRegionalSqlInjectionMatchTuple;

}

/**
 * @schema WafRegionalWebAclUpdate
 */
export interface WafRegionalWebAclUpdate {
  /**
   * @schema WafRegionalWebAclUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalWebAclUpdate#ActivatedRule
   */
  readonly activatedRule: WafRegionalActivatedRule;

}

/**
 * @schema WafRegionalXssMatchSetUpdate
 */
export interface WafRegionalXssMatchSetUpdate {
  /**
   * @schema WafRegionalXssMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WafRegionalXssMatchSetUpdate#XssMatchTuple
   */
  readonly xssMatchTuple: WafRegionalXssMatchTuple;

}

/**
 * @schema WafRegionalByteMatchTuple
 */
export interface WafRegionalByteMatchTuple {
  /**
   * @schema WafRegionalByteMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: WafRegionalFieldToMatch;

  /**
   * @schema WafRegionalByteMatchTuple#TargetString
   */
  readonly targetString: any;

  /**
   * @schema WafRegionalByteMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

  /**
   * @schema WafRegionalByteMatchTuple#PositionalConstraint
   */
  readonly positionalConstraint: string;

}

/**
 * @schema WafRegionalGeoMatchConstraint
 */
export interface WafRegionalGeoMatchConstraint {
  /**
   * @schema WafRegionalGeoMatchConstraint#Type
   */
  readonly type: string;

  /**
   * @schema WafRegionalGeoMatchConstraint#Value
   */
  readonly value: string;

}

/**
 * @schema WafRegionalIpSetDescriptor
 */
export interface WafRegionalIpSetDescriptor {
  /**
   * @schema WafRegionalIpSetDescriptor#Type
   */
  readonly type: string;

  /**
   * @schema WafRegionalIpSetDescriptor#Value
   */
  readonly value: string;

}

/**
 * @schema WafRegionalPredicate
 */
export interface WafRegionalPredicate {
  /**
   * @schema WafRegionalPredicate#Negated
   */
  readonly negated: boolean;

  /**
   * @schema WafRegionalPredicate#Type
   */
  readonly type: string;

  /**
   * @schema WafRegionalPredicate#DataId
   */
  readonly dataId: string;

}

/**
 * @schema WafRegionalRegexMatchTuple
 */
export interface WafRegionalRegexMatchTuple {
  /**
   * @schema WafRegionalRegexMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: WafRegionalFieldToMatch;

  /**
   * @schema WafRegionalRegexMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

  /**
   * @schema WafRegionalRegexMatchTuple#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

}

/**
 * @schema WafRegionalSizeConstraint
 */
export interface WafRegionalSizeConstraint {
  /**
   * @schema WafRegionalSizeConstraint#FieldToMatch
   */
  readonly fieldToMatch: WafRegionalFieldToMatch;

  /**
   * @schema WafRegionalSizeConstraint#TextTransformation
   */
  readonly textTransformation: string;

  /**
   * @schema WafRegionalSizeConstraint#ComparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema WafRegionalSizeConstraint#Size
   */
  readonly size: number;

}

/**
 * @schema WafRegionalSqlInjectionMatchTuple
 */
export interface WafRegionalSqlInjectionMatchTuple {
  /**
   * @schema WafRegionalSqlInjectionMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: WafRegionalFieldToMatch;

  /**
   * @schema WafRegionalSqlInjectionMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

}

/**
 * @schema WafRegionalXssMatchTuple
 */
export interface WafRegionalXssMatchTuple {
  /**
   * @schema WafRegionalXssMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: WafRegionalFieldToMatch;

  /**
   * @schema WafRegionalXssMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

}

/**
 * @schema WafRegionalFieldToMatch
 */
export interface WafRegionalFieldToMatch {
  /**
   * @schema WafRegionalFieldToMatch#Type
   */
  readonly type: string;

  /**
   * @schema WafRegionalFieldToMatch#Data
   */
  readonly data?: string;

}

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
 * @schema WafRegionalWafOverrideAction
 */
export interface WafRegionalWafOverrideAction {
  /**
   * @schema WafRegionalWafOverrideAction#Type
   */
  readonly type: string;

}

/**
 * @schema WafRegionalExcludedRule
 */
export interface WafRegionalExcludedRule {
  /**
   * @schema WafRegionalExcludedRule#RuleId
   */
  readonly ruleId: string;

}

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
