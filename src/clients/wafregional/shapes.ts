/**
 * @schema AssociateWebAclRequest
 */
export interface AssociateWebAclRequest {
  /**
   * @schema AssociateWebAclRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema AssociateWebAclRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema AssociateWebAclResponse
 */
export interface AssociateWebAclResponse {
}

/**
 * @schema CreateByteMatchSetRequest
 */
export interface CreateByteMatchSetRequest {
  /**
   * @schema CreateByteMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateByteMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema CreateByteMatchSetResponse
 */
export interface CreateByteMatchSetResponse {
  /**
   * @schema CreateByteMatchSetResponse#ByteMatchSet
   */
  readonly byteMatchSet?: ByteMatchSet;

  /**
   * @schema CreateByteMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateGeoMatchSetRequest
 */
export interface CreateGeoMatchSetRequest {
  /**
   * @schema CreateGeoMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema CreateGeoMatchSetResponse
 */
export interface CreateGeoMatchSetResponse {
  /**
   * @schema CreateGeoMatchSetResponse#GeoMatchSet
   */
  readonly geoMatchSet?: GeoMatchSet;

  /**
   * @schema CreateGeoMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateIpSetRequest
 */
export interface CreateIpSetRequest {
  /**
   * @schema CreateIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateIpSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema CreateIpSetResponse
 */
export interface CreateIpSetResponse {
  /**
   * @schema CreateIpSetResponse#IPSet
   */
  readonly ipSet?: IpSet;

  /**
   * @schema CreateIpSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateRateBasedRuleRequest
 */
export interface CreateRateBasedRuleRequest {
  /**
   * @schema CreateRateBasedRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateRateBasedRuleRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema CreateRateBasedRuleRequest#RateKey
   */
  readonly rateKey: string;

  /**
   * @schema CreateRateBasedRuleRequest#RateLimit
   */
  readonly rateLimit: number;

  /**
   * @schema CreateRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema CreateRateBasedRuleRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRateBasedRuleResponse
 */
export interface CreateRateBasedRuleResponse {
  /**
   * @schema CreateRateBasedRuleResponse#Rule
   */
  readonly rule?: RateBasedRule;

  /**
   * @schema CreateRateBasedRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateRegexMatchSetRequest
 */
export interface CreateRegexMatchSetRequest {
  /**
   * @schema CreateRegexMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema CreateRegexMatchSetResponse
 */
export interface CreateRegexMatchSetResponse {
  /**
   * @schema CreateRegexMatchSetResponse#RegexMatchSet
   */
  readonly regexMatchSet?: RegexMatchSet;

  /**
   * @schema CreateRegexMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateRegexPatternSetRequest
 */
export interface CreateRegexPatternSetRequest {
  /**
   * @schema CreateRegexPatternSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema CreateRegexPatternSetResponse
 */
export interface CreateRegexPatternSetResponse {
  /**
   * @schema CreateRegexPatternSetResponse#RegexPatternSet
   */
  readonly regexPatternSet?: RegexPatternSet;

  /**
   * @schema CreateRegexPatternSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateRuleRequest
 */
export interface CreateRuleRequest {
  /**
   * @schema CreateRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateRuleRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema CreateRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema CreateRuleRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRuleResponse
 */
export interface CreateRuleResponse {
  /**
   * @schema CreateRuleResponse#Rule
   */
  readonly rule?: Rule;

  /**
   * @schema CreateRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateRuleGroupRequest
 */
export interface CreateRuleGroupRequest {
  /**
   * @schema CreateRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateRuleGroupRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema CreateRuleGroupRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema CreateRuleGroupRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRuleGroupResponse
 */
export interface CreateRuleGroupResponse {
  /**
   * @schema CreateRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: RuleGroup;

  /**
   * @schema CreateRuleGroupResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateSizeConstraintSetRequest
 */
export interface CreateSizeConstraintSetRequest {
  /**
   * @schema CreateSizeConstraintSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema CreateSizeConstraintSetResponse
 */
export interface CreateSizeConstraintSetResponse {
  /**
   * @schema CreateSizeConstraintSetResponse#SizeConstraintSet
   */
  readonly sizeConstraintSet?: SizeConstraintSet;

  /**
   * @schema CreateSizeConstraintSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateSqlInjectionMatchSetRequest
 */
export interface CreateSqlInjectionMatchSetRequest {
  /**
   * @schema CreateSqlInjectionMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema CreateSqlInjectionMatchSetResponse
 */
export interface CreateSqlInjectionMatchSetResponse {
  /**
   * @schema CreateSqlInjectionMatchSetResponse#SqlInjectionMatchSet
   */
  readonly sqlInjectionMatchSet?: SqlInjectionMatchSet;

  /**
   * @schema CreateSqlInjectionMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateWebAclRequest
 */
export interface CreateWebAclRequest {
  /**
   * @schema CreateWebAclRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateWebAclRequest#MetricName
   */
  readonly metricName: string;

  /**
   * @schema CreateWebAclRequest#DefaultAction
   */
  readonly defaultAction: WafAction;

  /**
   * @schema CreateWebAclRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema CreateWebAclRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateWebAclResponse
 */
export interface CreateWebAclResponse {
  /**
   * @schema CreateWebAclResponse#WebACL
   */
  readonly webAcl?: WebAcl;

  /**
   * @schema CreateWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema CreateWebAclMigrationStackRequest
 */
export interface CreateWebAclMigrationStackRequest {
  /**
   * @schema CreateWebAclMigrationStackRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema CreateWebAclMigrationStackRequest#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema CreateWebAclMigrationStackRequest#IgnoreUnsupportedType
   */
  readonly ignoreUnsupportedType: boolean;

}

/**
 * @schema CreateWebAclMigrationStackResponse
 */
export interface CreateWebAclMigrationStackResponse {
  /**
   * @schema CreateWebAclMigrationStackResponse#S3ObjectUrl
   */
  readonly s3ObjectUrl: string;

}

/**
 * @schema CreateXssMatchSetRequest
 */
export interface CreateXssMatchSetRequest {
  /**
   * @schema CreateXssMatchSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateXssMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema CreateXssMatchSetResponse
 */
export interface CreateXssMatchSetResponse {
  /**
   * @schema CreateXssMatchSetResponse#XssMatchSet
   */
  readonly xssMatchSet?: XssMatchSet;

  /**
   * @schema CreateXssMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteByteMatchSetRequest
 */
export interface DeleteByteMatchSetRequest {
  /**
   * @schema DeleteByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema DeleteByteMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteByteMatchSetResponse
 */
export interface DeleteByteMatchSetResponse {
  /**
   * @schema DeleteByteMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteGeoMatchSetRequest
 */
export interface DeleteGeoMatchSetRequest {
  /**
   * @schema DeleteGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema DeleteGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteGeoMatchSetResponse
 */
export interface DeleteGeoMatchSetResponse {
  /**
   * @schema DeleteGeoMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteIpSetRequest
 */
export interface DeleteIpSetRequest {
  /**
   * @schema DeleteIpSetRequest#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema DeleteIpSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteIpSetResponse
 */
export interface DeleteIpSetResponse {
  /**
   * @schema DeleteIpSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteLoggingConfigurationRequest
 */
export interface DeleteLoggingConfigurationRequest {
  /**
   * @schema DeleteLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DeleteLoggingConfigurationResponse
 */
export interface DeleteLoggingConfigurationResponse {
}

/**
 * @schema DeletePermissionPolicyRequest
 */
export interface DeletePermissionPolicyRequest {
  /**
   * @schema DeletePermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DeletePermissionPolicyResponse
 */
export interface DeletePermissionPolicyResponse {
}

/**
 * @schema DeleteRateBasedRuleRequest
 */
export interface DeleteRateBasedRuleRequest {
  /**
   * @schema DeleteRateBasedRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema DeleteRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteRateBasedRuleResponse
 */
export interface DeleteRateBasedRuleResponse {
  /**
   * @schema DeleteRateBasedRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteRegexMatchSetRequest
 */
export interface DeleteRegexMatchSetRequest {
  /**
   * @schema DeleteRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

  /**
   * @schema DeleteRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteRegexMatchSetResponse
 */
export interface DeleteRegexMatchSetResponse {
  /**
   * @schema DeleteRegexMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteRegexPatternSetRequest
 */
export interface DeleteRegexPatternSetRequest {
  /**
   * @schema DeleteRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema DeleteRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteRegexPatternSetResponse
 */
export interface DeleteRegexPatternSetResponse {
  /**
   * @schema DeleteRegexPatternSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteRuleRequest
 */
export interface DeleteRuleRequest {
  /**
   * @schema DeleteRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema DeleteRuleRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteRuleResponse
 */
export interface DeleteRuleResponse {
  /**
   * @schema DeleteRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteRuleGroupRequest
 */
export interface DeleteRuleGroupRequest {
  /**
   * @schema DeleteRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema DeleteRuleGroupRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteRuleGroupResponse
 */
export interface DeleteRuleGroupResponse {
  /**
   * @schema DeleteRuleGroupResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteSizeConstraintSetRequest
 */
export interface DeleteSizeConstraintSetRequest {
  /**
   * @schema DeleteSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema DeleteSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteSizeConstraintSetResponse
 */
export interface DeleteSizeConstraintSetResponse {
  /**
   * @schema DeleteSizeConstraintSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteSqlInjectionMatchSetRequest
 */
export interface DeleteSqlInjectionMatchSetRequest {
  /**
   * @schema DeleteSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema DeleteSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteSqlInjectionMatchSetResponse
 */
export interface DeleteSqlInjectionMatchSetResponse {
  /**
   * @schema DeleteSqlInjectionMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteWebAclRequest
 */
export interface DeleteWebAclRequest {
  /**
   * @schema DeleteWebAclRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema DeleteWebAclRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteWebAclResponse
 */
export interface DeleteWebAclResponse {
  /**
   * @schema DeleteWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DeleteXssMatchSetRequest
 */
export interface DeleteXssMatchSetRequest {
  /**
   * @schema DeleteXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema DeleteXssMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema DeleteXssMatchSetResponse
 */
export interface DeleteXssMatchSetResponse {
  /**
   * @schema DeleteXssMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema DisassociateWebAclRequest
 */
export interface DisassociateWebAclRequest {
  /**
   * @schema DisassociateWebAclRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DisassociateWebAclResponse
 */
export interface DisassociateWebAclResponse {
}

/**
 * @schema GetByteMatchSetRequest
 */
export interface GetByteMatchSetRequest {
  /**
   * @schema GetByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

}

/**
 * @schema GetByteMatchSetResponse
 */
export interface GetByteMatchSetResponse {
  /**
   * @schema GetByteMatchSetResponse#ByteMatchSet
   */
  readonly byteMatchSet?: ByteMatchSet;

}

/**
 * @schema GetChangeTokenRequest
 */
export interface GetChangeTokenRequest {
}

/**
 * @schema GetChangeTokenResponse
 */
export interface GetChangeTokenResponse {
  /**
   * @schema GetChangeTokenResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema GetChangeTokenStatusRequest
 */
export interface GetChangeTokenStatusRequest {
  /**
   * @schema GetChangeTokenStatusRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema GetChangeTokenStatusResponse
 */
export interface GetChangeTokenStatusResponse {
  /**
   * @schema GetChangeTokenStatusResponse#ChangeTokenStatus
   */
  readonly changeTokenStatus?: string;

}

/**
 * @schema GetGeoMatchSetRequest
 */
export interface GetGeoMatchSetRequest {
  /**
   * @schema GetGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

}

/**
 * @schema GetGeoMatchSetResponse
 */
export interface GetGeoMatchSetResponse {
  /**
   * @schema GetGeoMatchSetResponse#GeoMatchSet
   */
  readonly geoMatchSet?: GeoMatchSet;

}

/**
 * @schema GetIpSetRequest
 */
export interface GetIpSetRequest {
  /**
   * @schema GetIpSetRequest#IPSetId
   */
  readonly ipSetId: string;

}

/**
 * @schema GetIpSetResponse
 */
export interface GetIpSetResponse {
  /**
   * @schema GetIpSetResponse#IPSet
   */
  readonly ipSet?: IpSet;

}

/**
 * @schema GetLoggingConfigurationRequest
 */
export interface GetLoggingConfigurationRequest {
  /**
   * @schema GetLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GetLoggingConfigurationResponse
 */
export interface GetLoggingConfigurationResponse {
  /**
   * @schema GetLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: LoggingConfiguration;

}

/**
 * @schema GetPermissionPolicyRequest
 */
export interface GetPermissionPolicyRequest {
  /**
   * @schema GetPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GetPermissionPolicyResponse
 */
export interface GetPermissionPolicyResponse {
  /**
   * @schema GetPermissionPolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * @schema GetRateBasedRuleRequest
 */
export interface GetRateBasedRuleRequest {
  /**
   * @schema GetRateBasedRuleRequest#RuleId
   */
  readonly ruleId: string;

}

/**
 * @schema GetRateBasedRuleResponse
 */
export interface GetRateBasedRuleResponse {
  /**
   * @schema GetRateBasedRuleResponse#Rule
   */
  readonly rule?: RateBasedRule;

}

/**
 * @schema GetRateBasedRuleManagedKeysRequest
 */
export interface GetRateBasedRuleManagedKeysRequest {
  /**
   * @schema GetRateBasedRuleManagedKeysRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema GetRateBasedRuleManagedKeysRequest#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema GetRateBasedRuleManagedKeysResponse
 */
export interface GetRateBasedRuleManagedKeysResponse {
  /**
   * @schema GetRateBasedRuleManagedKeysResponse#ManagedKeys
   */
  readonly managedKeys?: string[];

  /**
   * @schema GetRateBasedRuleManagedKeysResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema GetRegexMatchSetRequest
 */
export interface GetRegexMatchSetRequest {
  /**
   * @schema GetRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

}

/**
 * @schema GetRegexMatchSetResponse
 */
export interface GetRegexMatchSetResponse {
  /**
   * @schema GetRegexMatchSetResponse#RegexMatchSet
   */
  readonly regexMatchSet?: RegexMatchSet;

}

/**
 * @schema GetRegexPatternSetRequest
 */
export interface GetRegexPatternSetRequest {
  /**
   * @schema GetRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

}

/**
 * @schema GetRegexPatternSetResponse
 */
export interface GetRegexPatternSetResponse {
  /**
   * @schema GetRegexPatternSetResponse#RegexPatternSet
   */
  readonly regexPatternSet?: RegexPatternSet;

}

/**
 * @schema GetRuleRequest
 */
export interface GetRuleRequest {
  /**
   * @schema GetRuleRequest#RuleId
   */
  readonly ruleId: string;

}

/**
 * @schema GetRuleResponse
 */
export interface GetRuleResponse {
  /**
   * @schema GetRuleResponse#Rule
   */
  readonly rule?: Rule;

}

/**
 * @schema GetRuleGroupRequest
 */
export interface GetRuleGroupRequest {
  /**
   * @schema GetRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId: string;

}

/**
 * @schema GetRuleGroupResponse
 */
export interface GetRuleGroupResponse {
  /**
   * @schema GetRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: RuleGroup;

}

/**
 * @schema GetSampledRequestsRequest
 */
export interface GetSampledRequestsRequest {
  /**
   * @schema GetSampledRequestsRequest#WebAclId
   */
  readonly webAclId: string;

  /**
   * @schema GetSampledRequestsRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema GetSampledRequestsRequest#TimeWindow
   */
  readonly timeWindow: TimeWindow;

  /**
   * @schema GetSampledRequestsRequest#MaxItems
   */
  readonly maxItems: number;

}

/**
 * @schema GetSampledRequestsResponse
 */
export interface GetSampledRequestsResponse {
  /**
   * @schema GetSampledRequestsResponse#SampledRequests
   */
  readonly sampledRequests?: SampledHttpRequest[];

  /**
   * @schema GetSampledRequestsResponse#PopulationSize
   */
  readonly populationSize?: number;

  /**
   * @schema GetSampledRequestsResponse#TimeWindow
   */
  readonly timeWindow?: TimeWindow;

}

/**
 * @schema GetSizeConstraintSetRequest
 */
export interface GetSizeConstraintSetRequest {
  /**
   * @schema GetSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

}

/**
 * @schema GetSizeConstraintSetResponse
 */
export interface GetSizeConstraintSetResponse {
  /**
   * @schema GetSizeConstraintSetResponse#SizeConstraintSet
   */
  readonly sizeConstraintSet?: SizeConstraintSet;

}

/**
 * @schema GetSqlInjectionMatchSetRequest
 */
export interface GetSqlInjectionMatchSetRequest {
  /**
   * @schema GetSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

}

/**
 * @schema GetSqlInjectionMatchSetResponse
 */
export interface GetSqlInjectionMatchSetResponse {
  /**
   * @schema GetSqlInjectionMatchSetResponse#SqlInjectionMatchSet
   */
  readonly sqlInjectionMatchSet?: SqlInjectionMatchSet;

}

/**
 * @schema GetWebAclRequest
 */
export interface GetWebAclRequest {
  /**
   * @schema GetWebAclRequest#WebACLId
   */
  readonly webAclId: string;

}

/**
 * @schema GetWebAclResponse
 */
export interface GetWebAclResponse {
  /**
   * @schema GetWebAclResponse#WebACL
   */
  readonly webAcl?: WebAcl;

}

/**
 * @schema GetWebAclForResourceRequest
 */
export interface GetWebAclForResourceRequest {
  /**
   * @schema GetWebAclForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GetWebAclForResourceResponse
 */
export interface GetWebAclForResourceResponse {
  /**
   * @schema GetWebAclForResourceResponse#WebACLSummary
   */
  readonly webAclSummary?: WebAclSummary;

}

/**
 * @schema GetXssMatchSetRequest
 */
export interface GetXssMatchSetRequest {
  /**
   * @schema GetXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId: string;

}

/**
 * @schema GetXssMatchSetResponse
 */
export interface GetXssMatchSetResponse {
  /**
   * @schema GetXssMatchSetResponse#XssMatchSet
   */
  readonly xssMatchSet?: XssMatchSet;

}

/**
 * @schema ListActivatedRulesInRuleGroupRequest
 */
export interface ListActivatedRulesInRuleGroupRequest {
  /**
   * @schema ListActivatedRulesInRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId?: string;

  /**
   * @schema ListActivatedRulesInRuleGroupRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListActivatedRulesInRuleGroupRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListActivatedRulesInRuleGroupResponse
 */
export interface ListActivatedRulesInRuleGroupResponse {
  /**
   * @schema ListActivatedRulesInRuleGroupResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListActivatedRulesInRuleGroupResponse#ActivatedRules
   */
  readonly activatedRules?: ActivatedRule[];

}

/**
 * @schema ListByteMatchSetsRequest
 */
export interface ListByteMatchSetsRequest {
  /**
   * @schema ListByteMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListByteMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListByteMatchSetsResponse
 */
export interface ListByteMatchSetsResponse {
  /**
   * @schema ListByteMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListByteMatchSetsResponse#ByteMatchSets
   */
  readonly byteMatchSets?: ByteMatchSetSummary[];

}

/**
 * @schema ListGeoMatchSetsRequest
 */
export interface ListGeoMatchSetsRequest {
  /**
   * @schema ListGeoMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListGeoMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListGeoMatchSetsResponse
 */
export interface ListGeoMatchSetsResponse {
  /**
   * @schema ListGeoMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListGeoMatchSetsResponse#GeoMatchSets
   */
  readonly geoMatchSets?: GeoMatchSetSummary[];

}

/**
 * @schema ListIpSetsRequest
 */
export interface ListIpSetsRequest {
  /**
   * @schema ListIpSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListIpSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListIpSetsResponse
 */
export interface ListIpSetsResponse {
  /**
   * @schema ListIpSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListIpSetsResponse#IPSets
   */
  readonly ipSets?: IpSetSummary[];

}

/**
 * @schema ListLoggingConfigurationsRequest
 */
export interface ListLoggingConfigurationsRequest {
  /**
   * @schema ListLoggingConfigurationsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListLoggingConfigurationsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListLoggingConfigurationsResponse
 */
export interface ListLoggingConfigurationsResponse {
  /**
   * @schema ListLoggingConfigurationsResponse#LoggingConfigurations
   */
  readonly loggingConfigurations?: LoggingConfiguration[];

  /**
   * @schema ListLoggingConfigurationsResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListRateBasedRulesRequest
 */
export interface ListRateBasedRulesRequest {
  /**
   * @schema ListRateBasedRulesRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListRateBasedRulesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListRateBasedRulesResponse
 */
export interface ListRateBasedRulesResponse {
  /**
   * @schema ListRateBasedRulesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListRateBasedRulesResponse#Rules
   */
  readonly rules?: RuleSummary[];

}

/**
 * @schema ListRegexMatchSetsRequest
 */
export interface ListRegexMatchSetsRequest {
  /**
   * @schema ListRegexMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListRegexMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListRegexMatchSetsResponse
 */
export interface ListRegexMatchSetsResponse {
  /**
   * @schema ListRegexMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListRegexMatchSetsResponse#RegexMatchSets
   */
  readonly regexMatchSets?: RegexMatchSetSummary[];

}

/**
 * @schema ListRegexPatternSetsRequest
 */
export interface ListRegexPatternSetsRequest {
  /**
   * @schema ListRegexPatternSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListRegexPatternSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListRegexPatternSetsResponse
 */
export interface ListRegexPatternSetsResponse {
  /**
   * @schema ListRegexPatternSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListRegexPatternSetsResponse#RegexPatternSets
   */
  readonly regexPatternSets?: RegexPatternSetSummary[];

}

/**
 * @schema ListResourcesForWebAclRequest
 */
export interface ListResourcesForWebAclRequest {
  /**
   * @schema ListResourcesForWebAclRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema ListResourcesForWebAclRequest#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema ListResourcesForWebAclResponse
 */
export interface ListResourcesForWebAclResponse {
  /**
   * @schema ListResourcesForWebAclResponse#ResourceArns
   */
  readonly resourceArns?: string[];

}

/**
 * @schema ListRuleGroupsRequest
 */
export interface ListRuleGroupsRequest {
  /**
   * @schema ListRuleGroupsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListRuleGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListRuleGroupsResponse
 */
export interface ListRuleGroupsResponse {
  /**
   * @schema ListRuleGroupsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListRuleGroupsResponse#RuleGroups
   */
  readonly ruleGroups?: RuleGroupSummary[];

}

/**
 * @schema ListRulesRequest
 */
export interface ListRulesRequest {
  /**
   * @schema ListRulesRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListRulesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListRulesResponse
 */
export interface ListRulesResponse {
  /**
   * @schema ListRulesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListRulesResponse#Rules
   */
  readonly rules?: RuleSummary[];

}

/**
 * @schema ListSizeConstraintSetsRequest
 */
export interface ListSizeConstraintSetsRequest {
  /**
   * @schema ListSizeConstraintSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListSizeConstraintSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListSizeConstraintSetsResponse
 */
export interface ListSizeConstraintSetsResponse {
  /**
   * @schema ListSizeConstraintSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListSizeConstraintSetsResponse#SizeConstraintSets
   */
  readonly sizeConstraintSets?: SizeConstraintSetSummary[];

}

/**
 * @schema ListSqlInjectionMatchSetsRequest
 */
export interface ListSqlInjectionMatchSetsRequest {
  /**
   * @schema ListSqlInjectionMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListSqlInjectionMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListSqlInjectionMatchSetsResponse
 */
export interface ListSqlInjectionMatchSetsResponse {
  /**
   * @schema ListSqlInjectionMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListSqlInjectionMatchSetsResponse#SqlInjectionMatchSets
   */
  readonly sqlInjectionMatchSets?: SqlInjectionMatchSetSummary[];

}

/**
 * @schema ListSubscribedRuleGroupsRequest
 */
export interface ListSubscribedRuleGroupsRequest {
  /**
   * @schema ListSubscribedRuleGroupsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListSubscribedRuleGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListSubscribedRuleGroupsResponse
 */
export interface ListSubscribedRuleGroupsResponse {
  /**
   * @schema ListSubscribedRuleGroupsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListSubscribedRuleGroupsResponse#RuleGroups
   */
  readonly ruleGroups?: SubscribedRuleGroupSummary[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListTagsForResourceRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListTagsForResourceResponse#TagInfoForResource
   */
  readonly tagInfoForResource?: TagInfoForResource;

}

/**
 * @schema ListWebAcLsRequest
 */
export interface ListWebAcLsRequest {
  /**
   * @schema ListWebAcLsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListWebAcLsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListWebAcLsResponse
 */
export interface ListWebAcLsResponse {
  /**
   * @schema ListWebAcLsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListWebAcLsResponse#WebACLs
   */
  readonly webAcLs?: WebAclSummary[];

}

/**
 * @schema ListXssMatchSetsRequest
 */
export interface ListXssMatchSetsRequest {
  /**
   * @schema ListXssMatchSetsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListXssMatchSetsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListXssMatchSetsResponse
 */
export interface ListXssMatchSetsResponse {
  /**
   * @schema ListXssMatchSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListXssMatchSetsResponse#XssMatchSets
   */
  readonly xssMatchSets?: XssMatchSetSummary[];

}

/**
 * @schema PutLoggingConfigurationRequest
 */
export interface PutLoggingConfigurationRequest {
  /**
   * @schema PutLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration: LoggingConfiguration;

}

/**
 * @schema PutLoggingConfigurationResponse
 */
export interface PutLoggingConfigurationResponse {
  /**
   * @schema PutLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: LoggingConfiguration;

}

/**
 * @schema PutPermissionPolicyRequest
 */
export interface PutPermissionPolicyRequest {
  /**
   * @schema PutPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema PutPermissionPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema PutPermissionPolicyResponse
 */
export interface PutPermissionPolicyResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateByteMatchSetRequest
 */
export interface UpdateByteMatchSetRequest {
  /**
   * @schema UpdateByteMatchSetRequest#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema UpdateByteMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema UpdateByteMatchSetRequest#Updates
   */
  readonly updates: ByteMatchSetUpdate[];

}

/**
 * @schema UpdateByteMatchSetResponse
 */
export interface UpdateByteMatchSetResponse {
  /**
   * @schema UpdateByteMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateGeoMatchSetRequest
 */
export interface UpdateGeoMatchSetRequest {
  /**
   * @schema UpdateGeoMatchSetRequest#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema UpdateGeoMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema UpdateGeoMatchSetRequest#Updates
   */
  readonly updates: GeoMatchSetUpdate[];

}

/**
 * @schema UpdateGeoMatchSetResponse
 */
export interface UpdateGeoMatchSetResponse {
  /**
   * @schema UpdateGeoMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateIpSetRequest
 */
export interface UpdateIpSetRequest {
  /**
   * @schema UpdateIpSetRequest#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema UpdateIpSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema UpdateIpSetRequest#Updates
   */
  readonly updates: IpSetUpdate[];

}

/**
 * @schema UpdateIpSetResponse
 */
export interface UpdateIpSetResponse {
  /**
   * @schema UpdateIpSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateRateBasedRuleRequest
 */
export interface UpdateRateBasedRuleRequest {
  /**
   * @schema UpdateRateBasedRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema UpdateRateBasedRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema UpdateRateBasedRuleRequest#Updates
   */
  readonly updates: RuleUpdate[];

  /**
   * @schema UpdateRateBasedRuleRequest#RateLimit
   */
  readonly rateLimit: number;

}

/**
 * @schema UpdateRateBasedRuleResponse
 */
export interface UpdateRateBasedRuleResponse {
  /**
   * @schema UpdateRateBasedRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateRegexMatchSetRequest
 */
export interface UpdateRegexMatchSetRequest {
  /**
   * @schema UpdateRegexMatchSetRequest#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

  /**
   * @schema UpdateRegexMatchSetRequest#Updates
   */
  readonly updates: RegexMatchSetUpdate[];

  /**
   * @schema UpdateRegexMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema UpdateRegexMatchSetResponse
 */
export interface UpdateRegexMatchSetResponse {
  /**
   * @schema UpdateRegexMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateRegexPatternSetRequest
 */
export interface UpdateRegexPatternSetRequest {
  /**
   * @schema UpdateRegexPatternSetRequest#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema UpdateRegexPatternSetRequest#Updates
   */
  readonly updates: RegexPatternSetUpdate[];

  /**
   * @schema UpdateRegexPatternSetRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema UpdateRegexPatternSetResponse
 */
export interface UpdateRegexPatternSetResponse {
  /**
   * @schema UpdateRegexPatternSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateRuleRequest
 */
export interface UpdateRuleRequest {
  /**
   * @schema UpdateRuleRequest#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema UpdateRuleRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema UpdateRuleRequest#Updates
   */
  readonly updates: RuleUpdate[];

}

/**
 * @schema UpdateRuleResponse
 */
export interface UpdateRuleResponse {
  /**
   * @schema UpdateRuleResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateRuleGroupRequest
 */
export interface UpdateRuleGroupRequest {
  /**
   * @schema UpdateRuleGroupRequest#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema UpdateRuleGroupRequest#Updates
   */
  readonly updates: RuleGroupUpdate[];

  /**
   * @schema UpdateRuleGroupRequest#ChangeToken
   */
  readonly changeToken: string;

}

/**
 * @schema UpdateRuleGroupResponse
 */
export interface UpdateRuleGroupResponse {
  /**
   * @schema UpdateRuleGroupResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateSizeConstraintSetRequest
 */
export interface UpdateSizeConstraintSetRequest {
  /**
   * @schema UpdateSizeConstraintSetRequest#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema UpdateSizeConstraintSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema UpdateSizeConstraintSetRequest#Updates
   */
  readonly updates: SizeConstraintSetUpdate[];

}

/**
 * @schema UpdateSizeConstraintSetResponse
 */
export interface UpdateSizeConstraintSetResponse {
  /**
   * @schema UpdateSizeConstraintSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateSqlInjectionMatchSetRequest
 */
export interface UpdateSqlInjectionMatchSetRequest {
  /**
   * @schema UpdateSqlInjectionMatchSetRequest#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema UpdateSqlInjectionMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema UpdateSqlInjectionMatchSetRequest#Updates
   */
  readonly updates: SqlInjectionMatchSetUpdate[];

}

/**
 * @schema UpdateSqlInjectionMatchSetResponse
 */
export interface UpdateSqlInjectionMatchSetResponse {
  /**
   * @schema UpdateSqlInjectionMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateWebAclRequest
 */
export interface UpdateWebAclRequest {
  /**
   * @schema UpdateWebAclRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema UpdateWebAclRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema UpdateWebAclRequest#Updates
   */
  readonly updates?: WebAclUpdate[];

  /**
   * @schema UpdateWebAclRequest#DefaultAction
   */
  readonly defaultAction?: WafAction;

}

/**
 * @schema UpdateWebAclResponse
 */
export interface UpdateWebAclResponse {
  /**
   * @schema UpdateWebAclResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema UpdateXssMatchSetRequest
 */
export interface UpdateXssMatchSetRequest {
  /**
   * @schema UpdateXssMatchSetRequest#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema UpdateXssMatchSetRequest#ChangeToken
   */
  readonly changeToken: string;

  /**
   * @schema UpdateXssMatchSetRequest#Updates
   */
  readonly updates: XssMatchSetUpdate[];

}

/**
 * @schema UpdateXssMatchSetResponse
 */
export interface UpdateXssMatchSetResponse {
  /**
   * @schema UpdateXssMatchSetResponse#ChangeToken
   */
  readonly changeToken?: string;

}

/**
 * @schema ByteMatchSet
 */
export interface ByteMatchSet {
  /**
   * @schema ByteMatchSet#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema ByteMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema ByteMatchSet#ByteMatchTuples
   */
  readonly byteMatchTuples: ByteMatchTuple[];

}

/**
 * @schema GeoMatchSet
 */
export interface GeoMatchSet {
  /**
   * @schema GeoMatchSet#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema GeoMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema GeoMatchSet#GeoMatchConstraints
   */
  readonly geoMatchConstraints: GeoMatchConstraint[];

}

/**
 * @schema IpSet
 */
export interface IpSet {
  /**
   * @schema IpSet#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema IpSet#Name
   */
  readonly name?: string;

  /**
   * @schema IpSet#IPSetDescriptors
   */
  readonly ipSetDescriptors: IpSetDescriptor[];

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema RateBasedRule
 */
export interface RateBasedRule {
  /**
   * @schema RateBasedRule#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema RateBasedRule#Name
   */
  readonly name?: string;

  /**
   * @schema RateBasedRule#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema RateBasedRule#MatchPredicates
   */
  readonly matchPredicates: Predicate[];

  /**
   * @schema RateBasedRule#RateKey
   */
  readonly rateKey: string;

  /**
   * @schema RateBasedRule#RateLimit
   */
  readonly rateLimit: number;

}

/**
 * @schema RegexMatchSet
 */
export interface RegexMatchSet {
  /**
   * @schema RegexMatchSet#RegexMatchSetId
   */
  readonly regexMatchSetId?: string;

  /**
   * @schema RegexMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema RegexMatchSet#RegexMatchTuples
   */
  readonly regexMatchTuples?: RegexMatchTuple[];

}

/**
 * @schema RegexPatternSet
 */
export interface RegexPatternSet {
  /**
   * @schema RegexPatternSet#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema RegexPatternSet#Name
   */
  readonly name?: string;

  /**
   * @schema RegexPatternSet#RegexPatternStrings
   */
  readonly regexPatternStrings: string[];

}

/**
 * @schema Rule
 */
export interface Rule {
  /**
   * @schema Rule#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema Rule#Name
   */
  readonly name?: string;

  /**
   * @schema Rule#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema Rule#Predicates
   */
  readonly predicates: Predicate[];

}

/**
 * @schema RuleGroup
 */
export interface RuleGroup {
  /**
   * @schema RuleGroup#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema RuleGroup#Name
   */
  readonly name?: string;

  /**
   * @schema RuleGroup#MetricName
   */
  readonly metricName?: string;

}

/**
 * @schema SizeConstraintSet
 */
export interface SizeConstraintSet {
  /**
   * @schema SizeConstraintSet#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema SizeConstraintSet#Name
   */
  readonly name?: string;

  /**
   * @schema SizeConstraintSet#SizeConstraints
   */
  readonly sizeConstraints: SizeConstraint[];

}

/**
 * @schema SqlInjectionMatchSet
 */
export interface SqlInjectionMatchSet {
  /**
   * @schema SqlInjectionMatchSet#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema SqlInjectionMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema SqlInjectionMatchSet#SqlInjectionMatchTuples
   */
  readonly sqlInjectionMatchTuples: SqlInjectionMatchTuple[];

}

/**
 * @schema WafAction
 */
export interface WafAction {
  /**
   * @schema WafAction#Type
   */
  readonly type: string;

}

/**
 * @schema WebAcl
 */
export interface WebAcl {
  /**
   * @schema WebAcl#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WebAcl#Name
   */
  readonly name?: string;

  /**
   * @schema WebAcl#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema WebAcl#DefaultAction
   */
  readonly defaultAction: WafAction;

  /**
   * @schema WebAcl#Rules
   */
  readonly rules: ActivatedRule[];

  /**
   * @schema WebAcl#WebACLArn
   */
  readonly webAclArn?: string;

}

/**
 * @schema XssMatchSet
 */
export interface XssMatchSet {
  /**
   * @schema XssMatchSet#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema XssMatchSet#Name
   */
  readonly name?: string;

  /**
   * @schema XssMatchSet#XssMatchTuples
   */
  readonly xssMatchTuples: XssMatchTuple[];

}

/**
 * @schema LoggingConfiguration
 */
export interface LoggingConfiguration {
  /**
   * @schema LoggingConfiguration#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema LoggingConfiguration#LogDestinationConfigs
   */
  readonly logDestinationConfigs: string[];

  /**
   * @schema LoggingConfiguration#RedactedFields
   */
  readonly redactedFields?: FieldToMatch[];

}

/**
 * @schema TimeWindow
 */
export interface TimeWindow {
  /**
   * @schema TimeWindow#StartTime
   */
  readonly startTime: string;

  /**
   * @schema TimeWindow#EndTime
   */
  readonly endTime: string;

}

/**
 * @schema SampledHttpRequest
 */
export interface SampledHttpRequest {
  /**
   * @schema SampledHttpRequest#Request
   */
  readonly request: HttpRequest;

  /**
   * @schema SampledHttpRequest#Weight
   */
  readonly weight: number;

  /**
   * @schema SampledHttpRequest#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema SampledHttpRequest#Action
   */
  readonly action?: string;

  /**
   * @schema SampledHttpRequest#RuleWithinRuleGroup
   */
  readonly ruleWithinRuleGroup?: string;

}

/**
 * @schema WebAclSummary
 */
export interface WebAclSummary {
  /**
   * @schema WebAclSummary#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema WebAclSummary#Name
   */
  readonly name: string;

}

/**
 * @schema ActivatedRule
 */
export interface ActivatedRule {
  /**
   * @schema ActivatedRule#Priority
   */
  readonly priority: number;

  /**
   * @schema ActivatedRule#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema ActivatedRule#Action
   */
  readonly action?: WafAction;

  /**
   * @schema ActivatedRule#OverrideAction
   */
  readonly overrideAction?: WafOverrideAction;

  /**
   * @schema ActivatedRule#Type
   */
  readonly type?: string;

  /**
   * @schema ActivatedRule#ExcludedRules
   */
  readonly excludedRules?: ExcludedRule[];

}

/**
 * @schema ByteMatchSetSummary
 */
export interface ByteMatchSetSummary {
  /**
   * @schema ByteMatchSetSummary#ByteMatchSetId
   */
  readonly byteMatchSetId: string;

  /**
   * @schema ByteMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema GeoMatchSetSummary
 */
export interface GeoMatchSetSummary {
  /**
   * @schema GeoMatchSetSummary#GeoMatchSetId
   */
  readonly geoMatchSetId: string;

  /**
   * @schema GeoMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema IpSetSummary
 */
export interface IpSetSummary {
  /**
   * @schema IpSetSummary#IPSetId
   */
  readonly ipSetId: string;

  /**
   * @schema IpSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema RuleSummary
 */
export interface RuleSummary {
  /**
   * @schema RuleSummary#RuleId
   */
  readonly ruleId: string;

  /**
   * @schema RuleSummary#Name
   */
  readonly name: string;

}

/**
 * @schema RegexMatchSetSummary
 */
export interface RegexMatchSetSummary {
  /**
   * @schema RegexMatchSetSummary#RegexMatchSetId
   */
  readonly regexMatchSetId: string;

  /**
   * @schema RegexMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema RegexPatternSetSummary
 */
export interface RegexPatternSetSummary {
  /**
   * @schema RegexPatternSetSummary#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

  /**
   * @schema RegexPatternSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema RuleGroupSummary
 */
export interface RuleGroupSummary {
  /**
   * @schema RuleGroupSummary#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema RuleGroupSummary#Name
   */
  readonly name: string;

}

/**
 * @schema SizeConstraintSetSummary
 */
export interface SizeConstraintSetSummary {
  /**
   * @schema SizeConstraintSetSummary#SizeConstraintSetId
   */
  readonly sizeConstraintSetId: string;

  /**
   * @schema SizeConstraintSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema SqlInjectionMatchSetSummary
 */
export interface SqlInjectionMatchSetSummary {
  /**
   * @schema SqlInjectionMatchSetSummary#SqlInjectionMatchSetId
   */
  readonly sqlInjectionMatchSetId: string;

  /**
   * @schema SqlInjectionMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema SubscribedRuleGroupSummary
 */
export interface SubscribedRuleGroupSummary {
  /**
   * @schema SubscribedRuleGroupSummary#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema SubscribedRuleGroupSummary#Name
   */
  readonly name: string;

  /**
   * @schema SubscribedRuleGroupSummary#MetricName
   */
  readonly metricName: string;

}

/**
 * @schema TagInfoForResource
 */
export interface TagInfoForResource {
  /**
   * @schema TagInfoForResource#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema TagInfoForResource#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema XssMatchSetSummary
 */
export interface XssMatchSetSummary {
  /**
   * @schema XssMatchSetSummary#XssMatchSetId
   */
  readonly xssMatchSetId: string;

  /**
   * @schema XssMatchSetSummary#Name
   */
  readonly name: string;

}

/**
 * @schema ByteMatchSetUpdate
 */
export interface ByteMatchSetUpdate {
  /**
   * @schema ByteMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema ByteMatchSetUpdate#ByteMatchTuple
   */
  readonly byteMatchTuple: ByteMatchTuple;

}

/**
 * @schema GeoMatchSetUpdate
 */
export interface GeoMatchSetUpdate {
  /**
   * @schema GeoMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema GeoMatchSetUpdate#GeoMatchConstraint
   */
  readonly geoMatchConstraint: GeoMatchConstraint;

}

/**
 * @schema IpSetUpdate
 */
export interface IpSetUpdate {
  /**
   * @schema IpSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema IpSetUpdate#IPSetDescriptor
   */
  readonly ipSetDescriptor: IpSetDescriptor;

}

/**
 * @schema RuleUpdate
 */
export interface RuleUpdate {
  /**
   * @schema RuleUpdate#Action
   */
  readonly action: string;

  /**
   * @schema RuleUpdate#Predicate
   */
  readonly predicate: Predicate;

}

/**
 * @schema RegexMatchSetUpdate
 */
export interface RegexMatchSetUpdate {
  /**
   * @schema RegexMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema RegexMatchSetUpdate#RegexMatchTuple
   */
  readonly regexMatchTuple: RegexMatchTuple;

}

/**
 * @schema RegexPatternSetUpdate
 */
export interface RegexPatternSetUpdate {
  /**
   * @schema RegexPatternSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema RegexPatternSetUpdate#RegexPatternString
   */
  readonly regexPatternString: string;

}

/**
 * @schema RuleGroupUpdate
 */
export interface RuleGroupUpdate {
  /**
   * @schema RuleGroupUpdate#Action
   */
  readonly action: string;

  /**
   * @schema RuleGroupUpdate#ActivatedRule
   */
  readonly activatedRule: ActivatedRule;

}

/**
 * @schema SizeConstraintSetUpdate
 */
export interface SizeConstraintSetUpdate {
  /**
   * @schema SizeConstraintSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema SizeConstraintSetUpdate#SizeConstraint
   */
  readonly sizeConstraint: SizeConstraint;

}

/**
 * @schema SqlInjectionMatchSetUpdate
 */
export interface SqlInjectionMatchSetUpdate {
  /**
   * @schema SqlInjectionMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema SqlInjectionMatchSetUpdate#SqlInjectionMatchTuple
   */
  readonly sqlInjectionMatchTuple: SqlInjectionMatchTuple;

}

/**
 * @schema WebAclUpdate
 */
export interface WebAclUpdate {
  /**
   * @schema WebAclUpdate#Action
   */
  readonly action: string;

  /**
   * @schema WebAclUpdate#ActivatedRule
   */
  readonly activatedRule: ActivatedRule;

}

/**
 * @schema XssMatchSetUpdate
 */
export interface XssMatchSetUpdate {
  /**
   * @schema XssMatchSetUpdate#Action
   */
  readonly action: string;

  /**
   * @schema XssMatchSetUpdate#XssMatchTuple
   */
  readonly xssMatchTuple: XssMatchTuple;

}

/**
 * @schema ByteMatchTuple
 */
export interface ByteMatchTuple {
  /**
   * @schema ByteMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: FieldToMatch;

  /**
   * @schema ByteMatchTuple#TargetString
   */
  readonly targetString: any;

  /**
   * @schema ByteMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

  /**
   * @schema ByteMatchTuple#PositionalConstraint
   */
  readonly positionalConstraint: string;

}

/**
 * @schema GeoMatchConstraint
 */
export interface GeoMatchConstraint {
  /**
   * @schema GeoMatchConstraint#Type
   */
  readonly type: string;

  /**
   * @schema GeoMatchConstraint#Value
   */
  readonly value: string;

}

/**
 * @schema IpSetDescriptor
 */
export interface IpSetDescriptor {
  /**
   * @schema IpSetDescriptor#Type
   */
  readonly type: string;

  /**
   * @schema IpSetDescriptor#Value
   */
  readonly value: string;

}

/**
 * @schema Predicate
 */
export interface Predicate {
  /**
   * @schema Predicate#Negated
   */
  readonly negated: boolean;

  /**
   * @schema Predicate#Type
   */
  readonly type: string;

  /**
   * @schema Predicate#DataId
   */
  readonly dataId: string;

}

/**
 * @schema RegexMatchTuple
 */
export interface RegexMatchTuple {
  /**
   * @schema RegexMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: FieldToMatch;

  /**
   * @schema RegexMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

  /**
   * @schema RegexMatchTuple#RegexPatternSetId
   */
  readonly regexPatternSetId: string;

}

/**
 * @schema SizeConstraint
 */
export interface SizeConstraint {
  /**
   * @schema SizeConstraint#FieldToMatch
   */
  readonly fieldToMatch: FieldToMatch;

  /**
   * @schema SizeConstraint#TextTransformation
   */
  readonly textTransformation: string;

  /**
   * @schema SizeConstraint#ComparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema SizeConstraint#Size
   */
  readonly size: number;

}

/**
 * @schema SqlInjectionMatchTuple
 */
export interface SqlInjectionMatchTuple {
  /**
   * @schema SqlInjectionMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: FieldToMatch;

  /**
   * @schema SqlInjectionMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

}

/**
 * @schema XssMatchTuple
 */
export interface XssMatchTuple {
  /**
   * @schema XssMatchTuple#FieldToMatch
   */
  readonly fieldToMatch: FieldToMatch;

  /**
   * @schema XssMatchTuple#TextTransformation
   */
  readonly textTransformation: string;

}

/**
 * @schema FieldToMatch
 */
export interface FieldToMatch {
  /**
   * @schema FieldToMatch#Type
   */
  readonly type: string;

  /**
   * @schema FieldToMatch#Data
   */
  readonly data?: string;

}

/**
 * @schema HttpRequest
 */
export interface HttpRequest {
  /**
   * @schema HttpRequest#ClientIP
   */
  readonly clientIp?: string;

  /**
   * @schema HttpRequest#Country
   */
  readonly country?: string;

  /**
   * @schema HttpRequest#URI
   */
  readonly uri?: string;

  /**
   * @schema HttpRequest#Method
   */
  readonly method?: string;

  /**
   * @schema HttpRequest#HTTPVersion
   */
  readonly httpVersion?: string;

  /**
   * @schema HttpRequest#Headers
   */
  readonly headers?: HttpHeader[];

}

/**
 * @schema WafOverrideAction
 */
export interface WafOverrideAction {
  /**
   * @schema WafOverrideAction#Type
   */
  readonly type: string;

}

/**
 * @schema ExcludedRule
 */
export interface ExcludedRule {
  /**
   * @schema ExcludedRule#RuleId
   */
  readonly ruleId: string;

}

/**
 * @schema HttpHeader
 */
export interface HttpHeader {
  /**
   * @schema HttpHeader#Name
   */
  readonly name?: string;

  /**
   * @schema HttpHeader#Value
   */
  readonly value?: string;

}
