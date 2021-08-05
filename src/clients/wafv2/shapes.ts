/**
 * @schema Wafv2AssociateWebAclRequest
 */
export interface Wafv2AssociateWebAclRequest {
  /**
   * @schema Wafv2AssociateWebAclRequest#WebACLArn
   */
  readonly webAclArn: string;

  /**
   * @schema Wafv2AssociateWebAclRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema Wafv2AssociateWebAclResponse
 */
export interface Wafv2AssociateWebAclResponse {
}

/**
 * @schema Wafv2CheckCapacityRequest
 */
export interface Wafv2CheckCapacityRequest {
  /**
   * @schema Wafv2CheckCapacityRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2CheckCapacityRequest#Rules
   */
  readonly rules: Wafv2Rule[];

}

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
 * @schema Wafv2CreateIpSetRequest
 */
export interface Wafv2CreateIpSetRequest {
  /**
   * @schema Wafv2CreateIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2CreateIpSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2CreateIpSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2CreateIpSetRequest#IPAddressVersion
   */
  readonly ipAddressVersion: string;

  /**
   * @schema Wafv2CreateIpSetRequest#Addresses
   */
  readonly addresses: string[];

  /**
   * @schema Wafv2CreateIpSetRequest#Tags
   */
  readonly tags?: Wafv2Tag[];

}

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
 * @schema Wafv2CreateRegexPatternSetRequest
 */
export interface Wafv2CreateRegexPatternSetRequest {
  /**
   * @schema Wafv2CreateRegexPatternSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2CreateRegexPatternSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2CreateRegexPatternSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2CreateRegexPatternSetRequest#RegularExpressionList
   */
  readonly regularExpressionList: Wafv2Regex[];

  /**
   * @schema Wafv2CreateRegexPatternSetRequest#Tags
   */
  readonly tags?: Wafv2Tag[];

}

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
 * @schema Wafv2CreateRuleGroupRequest
 */
export interface Wafv2CreateRuleGroupRequest {
  /**
   * @schema Wafv2CreateRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2CreateRuleGroupRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2CreateRuleGroupRequest#Capacity
   */
  readonly capacity: number;

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
  readonly visibilityConfig: Wafv2VisibilityConfig;

  /**
   * @schema Wafv2CreateRuleGroupRequest#Tags
   */
  readonly tags?: Wafv2Tag[];

}

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
 * @schema Wafv2CreateWebAclRequest
 */
export interface Wafv2CreateWebAclRequest {
  /**
   * @schema Wafv2CreateWebAclRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2CreateWebAclRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2CreateWebAclRequest#DefaultAction
   */
  readonly defaultAction: Wafv2DefaultAction;

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
  readonly visibilityConfig: Wafv2VisibilityConfig;

  /**
   * @schema Wafv2CreateWebAclRequest#Tags
   */
  readonly tags?: Wafv2Tag[];

}

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
 * @schema Wafv2DeleteFirewallManagerRuleGroupsRequest
 */
export interface Wafv2DeleteFirewallManagerRuleGroupsRequest {
  /**
   * @schema Wafv2DeleteFirewallManagerRuleGroupsRequest#WebACLArn
   */
  readonly webAclArn: string;

  /**
   * @schema Wafv2DeleteFirewallManagerRuleGroupsRequest#WebACLLockToken
   */
  readonly webAclLockToken: string;

}

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
 * @schema Wafv2DeleteIpSetRequest
 */
export interface Wafv2DeleteIpSetRequest {
  /**
   * @schema Wafv2DeleteIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2DeleteIpSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2DeleteIpSetRequest#Id
   */
  readonly id: string;

  /**
   * @schema Wafv2DeleteIpSetRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema Wafv2DeleteIpSetResponse
 */
export interface Wafv2DeleteIpSetResponse {
}

/**
 * @schema Wafv2DeleteLoggingConfigurationRequest
 */
export interface Wafv2DeleteLoggingConfigurationRequest {
  /**
   * @schema Wafv2DeleteLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema Wafv2DeleteLoggingConfigurationResponse
 */
export interface Wafv2DeleteLoggingConfigurationResponse {
}

/**
 * @schema Wafv2DeletePermissionPolicyRequest
 */
export interface Wafv2DeletePermissionPolicyRequest {
  /**
   * @schema Wafv2DeletePermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema Wafv2DeletePermissionPolicyResponse
 */
export interface Wafv2DeletePermissionPolicyResponse {
}

/**
 * @schema Wafv2DeleteRegexPatternSetRequest
 */
export interface Wafv2DeleteRegexPatternSetRequest {
  /**
   * @schema Wafv2DeleteRegexPatternSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2DeleteRegexPatternSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2DeleteRegexPatternSetRequest#Id
   */
  readonly id: string;

  /**
   * @schema Wafv2DeleteRegexPatternSetRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema Wafv2DeleteRegexPatternSetResponse
 */
export interface Wafv2DeleteRegexPatternSetResponse {
}

/**
 * @schema Wafv2DeleteRuleGroupRequest
 */
export interface Wafv2DeleteRuleGroupRequest {
  /**
   * @schema Wafv2DeleteRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2DeleteRuleGroupRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2DeleteRuleGroupRequest#Id
   */
  readonly id: string;

  /**
   * @schema Wafv2DeleteRuleGroupRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema Wafv2DeleteRuleGroupResponse
 */
export interface Wafv2DeleteRuleGroupResponse {
}

/**
 * @schema Wafv2DeleteWebAclRequest
 */
export interface Wafv2DeleteWebAclRequest {
  /**
   * @schema Wafv2DeleteWebAclRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2DeleteWebAclRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2DeleteWebAclRequest#Id
   */
  readonly id: string;

  /**
   * @schema Wafv2DeleteWebAclRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema Wafv2DeleteWebAclResponse
 */
export interface Wafv2DeleteWebAclResponse {
}

/**
 * @schema Wafv2DescribeManagedRuleGroupRequest
 */
export interface Wafv2DescribeManagedRuleGroupRequest {
  /**
   * @schema Wafv2DescribeManagedRuleGroupRequest#VendorName
   */
  readonly vendorName: string;

  /**
   * @schema Wafv2DescribeManagedRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2DescribeManagedRuleGroupRequest#Scope
   */
  readonly scope: string;

}

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

}

/**
 * @schema Wafv2DisassociateWebAclRequest
 */
export interface Wafv2DisassociateWebAclRequest {
  /**
   * @schema Wafv2DisassociateWebAclRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema Wafv2DisassociateWebAclResponse
 */
export interface Wafv2DisassociateWebAclResponse {
}

/**
 * @schema Wafv2GetIpSetRequest
 */
export interface Wafv2GetIpSetRequest {
  /**
   * @schema Wafv2GetIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2GetIpSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2GetIpSetRequest#Id
   */
  readonly id: string;

}

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
 * @schema Wafv2GetLoggingConfigurationRequest
 */
export interface Wafv2GetLoggingConfigurationRequest {
  /**
   * @schema Wafv2GetLoggingConfigurationRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema Wafv2GetPermissionPolicyRequest
 */
export interface Wafv2GetPermissionPolicyRequest {
  /**
   * @schema Wafv2GetPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema Wafv2GetRateBasedStatementManagedKeysRequest
 */
export interface Wafv2GetRateBasedStatementManagedKeysRequest {
  /**
   * @schema Wafv2GetRateBasedStatementManagedKeysRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2GetRateBasedStatementManagedKeysRequest#WebACLName
   */
  readonly webAclName: string;

  /**
   * @schema Wafv2GetRateBasedStatementManagedKeysRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema Wafv2GetRateBasedStatementManagedKeysRequest#RuleName
   */
  readonly ruleName: string;

}

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
 * @schema Wafv2GetRegexPatternSetRequest
 */
export interface Wafv2GetRegexPatternSetRequest {
  /**
   * @schema Wafv2GetRegexPatternSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2GetRegexPatternSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2GetRegexPatternSetRequest#Id
   */
  readonly id: string;

}

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
 * @schema Wafv2GetRuleGroupRequest
 */
export interface Wafv2GetRuleGroupRequest {
  /**
   * @schema Wafv2GetRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2GetRuleGroupRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2GetRuleGroupRequest#Id
   */
  readonly id: string;

}

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
 * @schema Wafv2GetSampledRequestsRequest
 */
export interface Wafv2GetSampledRequestsRequest {
  /**
   * @schema Wafv2GetSampledRequestsRequest#WebAclArn
   */
  readonly webAclArn: string;

  /**
   * @schema Wafv2GetSampledRequestsRequest#RuleMetricName
   */
  readonly ruleMetricName: string;

  /**
   * @schema Wafv2GetSampledRequestsRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2GetSampledRequestsRequest#TimeWindow
   */
  readonly timeWindow: Wafv2TimeWindow;

  /**
   * @schema Wafv2GetSampledRequestsRequest#MaxItems
   */
  readonly maxItems: number;

}

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
 * @schema Wafv2GetWebAclRequest
 */
export interface Wafv2GetWebAclRequest {
  /**
   * @schema Wafv2GetWebAclRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2GetWebAclRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2GetWebAclRequest#Id
   */
  readonly id: string;

}

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
 * @schema Wafv2GetWebAclForResourceRequest
 */
export interface Wafv2GetWebAclForResourceRequest {
  /**
   * @schema Wafv2GetWebAclForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema Wafv2ListAvailableManagedRuleGroupsRequest
 */
export interface Wafv2ListAvailableManagedRuleGroupsRequest {
  /**
   * @schema Wafv2ListAvailableManagedRuleGroupsRequest#Scope
   */
  readonly scope: string;

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
 * @schema Wafv2ListIpSetsRequest
 */
export interface Wafv2ListIpSetsRequest {
  /**
   * @schema Wafv2ListIpSetsRequest#Scope
   */
  readonly scope: string;

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
 * @schema Wafv2ListRegexPatternSetsRequest
 */
export interface Wafv2ListRegexPatternSetsRequest {
  /**
   * @schema Wafv2ListRegexPatternSetsRequest#Scope
   */
  readonly scope: string;

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
 * @schema Wafv2ListResourcesForWebAclRequest
 */
export interface Wafv2ListResourcesForWebAclRequest {
  /**
   * @schema Wafv2ListResourcesForWebAclRequest#WebACLArn
   */
  readonly webAclArn: string;

  /**
   * @schema Wafv2ListResourcesForWebAclRequest#ResourceType
   */
  readonly resourceType?: string;

}

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
 * @schema Wafv2ListRuleGroupsRequest
 */
export interface Wafv2ListRuleGroupsRequest {
  /**
   * @schema Wafv2ListRuleGroupsRequest#Scope
   */
  readonly scope: string;

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
  readonly resourceArn: string;

}

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
 * @schema Wafv2ListWebAcLsRequest
 */
export interface Wafv2ListWebAcLsRequest {
  /**
   * @schema Wafv2ListWebAcLsRequest#Scope
   */
  readonly scope: string;

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
 * @schema Wafv2PutLoggingConfigurationRequest
 */
export interface Wafv2PutLoggingConfigurationRequest {
  /**
   * @schema Wafv2PutLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration: Wafv2LoggingConfiguration;

}

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
 * @schema Wafv2PutPermissionPolicyRequest
 */
export interface Wafv2PutPermissionPolicyRequest {
  /**
   * @schema Wafv2PutPermissionPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Wafv2PutPermissionPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema Wafv2PutPermissionPolicyResponse
 */
export interface Wafv2PutPermissionPolicyResponse {
}

/**
 * @schema Wafv2TagResourceRequest
 */
export interface Wafv2TagResourceRequest {
  /**
   * @schema Wafv2TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema Wafv2TagResourceRequest#Tags
   */
  readonly tags: Wafv2Tag[];

}

/**
 * @schema Wafv2TagResourceResponse
 */
export interface Wafv2TagResourceResponse {
}

/**
 * @schema Wafv2UntagResourceRequest
 */
export interface Wafv2UntagResourceRequest {
  /**
   * @schema Wafv2UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema Wafv2UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema Wafv2UntagResourceResponse
 */
export interface Wafv2UntagResourceResponse {
}

/**
 * @schema Wafv2UpdateIpSetRequest
 */
export interface Wafv2UpdateIpSetRequest {
  /**
   * @schema Wafv2UpdateIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2UpdateIpSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2UpdateIpSetRequest#Id
   */
  readonly id: string;

  /**
   * @schema Wafv2UpdateIpSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2UpdateIpSetRequest#Addresses
   */
  readonly addresses: string[];

  /**
   * @schema Wafv2UpdateIpSetRequest#LockToken
   */
  readonly lockToken: string;

}

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
 * @schema Wafv2UpdateRegexPatternSetRequest
 */
export interface Wafv2UpdateRegexPatternSetRequest {
  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#Id
   */
  readonly id: string;

  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#RegularExpressionList
   */
  readonly regularExpressionList: Wafv2Regex[];

  /**
   * @schema Wafv2UpdateRegexPatternSetRequest#LockToken
   */
  readonly lockToken: string;

}

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
 * @schema Wafv2UpdateRuleGroupRequest
 */
export interface Wafv2UpdateRuleGroupRequest {
  /**
   * @schema Wafv2UpdateRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2UpdateRuleGroupRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2UpdateRuleGroupRequest#Id
   */
  readonly id: string;

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
  readonly visibilityConfig: Wafv2VisibilityConfig;

  /**
   * @schema Wafv2UpdateRuleGroupRequest#LockToken
   */
  readonly lockToken: string;

}

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
 * @schema Wafv2UpdateWebAclRequest
 */
export interface Wafv2UpdateWebAclRequest {
  /**
   * @schema Wafv2UpdateWebAclRequest#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2UpdateWebAclRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema Wafv2UpdateWebAclRequest#Id
   */
  readonly id: string;

  /**
   * @schema Wafv2UpdateWebAclRequest#DefaultAction
   */
  readonly defaultAction: Wafv2DefaultAction;

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
  readonly visibilityConfig: Wafv2VisibilityConfig;

  /**
   * @schema Wafv2UpdateWebAclRequest#LockToken
   */
  readonly lockToken: string;

}

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
 * @schema Wafv2Rule
 */
export interface Wafv2Rule {
  /**
   * @schema Wafv2Rule#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2Rule#Priority
   */
  readonly priority: number;

  /**
   * @schema Wafv2Rule#Statement
   */
  readonly statement: Wafv2Statement;

  /**
   * @schema Wafv2Rule#Action
   */
  readonly action?: Wafv2RuleAction;

  /**
   * @schema Wafv2Rule#OverrideAction
   */
  readonly overrideAction?: Wafv2OverrideAction;

  /**
   * @schema Wafv2Rule#VisibilityConfig
   */
  readonly visibilityConfig: Wafv2VisibilityConfig;

}

/**
 * @schema Wafv2Tag
 */
export interface Wafv2Tag {
  /**
   * @schema Wafv2Tag#Key
   */
  readonly key: string;

  /**
   * @schema Wafv2Tag#Value
   */
  readonly value: string;

}

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
 * @schema Wafv2Regex
 */
export interface Wafv2Regex {
  /**
   * @schema Wafv2Regex#RegexString
   */
  readonly regexString?: string;

}

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
 * @schema Wafv2VisibilityConfig
 */
export interface Wafv2VisibilityConfig {
  /**
   * @schema Wafv2VisibilityConfig#SampledRequestsEnabled
   */
  readonly sampledRequestsEnabled: boolean;

  /**
   * @schema Wafv2VisibilityConfig#CloudWatchMetricsEnabled
   */
  readonly cloudWatchMetricsEnabled: boolean;

  /**
   * @schema Wafv2VisibilityConfig#MetricName
   */
  readonly metricName: string;

}

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
 * @schema Wafv2IpSet
 */
export interface Wafv2IpSet {
  /**
   * @schema Wafv2IpSet#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2IpSet#Id
   */
  readonly id: string;

  /**
   * @schema Wafv2IpSet#ARN
   */
  readonly arn: string;

  /**
   * @schema Wafv2IpSet#Description
   */
  readonly description?: string;

  /**
   * @schema Wafv2IpSet#IPAddressVersion
   */
  readonly ipAddressVersion: string;

  /**
   * @schema Wafv2IpSet#Addresses
   */
  readonly addresses: string[];

}

/**
 * @schema Wafv2LoggingConfiguration
 */
export interface Wafv2LoggingConfiguration {
  /**
   * @schema Wafv2LoggingConfiguration#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Wafv2LoggingConfiguration#LogDestinationConfigs
   */
  readonly logDestinationConfigs: string[];

  /**
   * @schema Wafv2LoggingConfiguration#RedactedFields
   */
  readonly redactedFields?: Wafv2FieldToMatch[];

  /**
   * @schema Wafv2LoggingConfiguration#ManagedByFirewallManager
   */
  readonly managedByFirewallManager?: boolean;

}

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
 * @schema Wafv2RuleGroup
 */
export interface Wafv2RuleGroup {
  /**
   * @schema Wafv2RuleGroup#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2RuleGroup#Id
   */
  readonly id: string;

  /**
   * @schema Wafv2RuleGroup#Capacity
   */
  readonly capacity: number;

  /**
   * @schema Wafv2RuleGroup#ARN
   */
  readonly arn: string;

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
  readonly visibilityConfig: Wafv2VisibilityConfig;

}

/**
 * @schema Wafv2TimeWindow
 */
export interface Wafv2TimeWindow {
  /**
   * @schema Wafv2TimeWindow#StartTime
   */
  readonly startTime: string;

  /**
   * @schema Wafv2TimeWindow#EndTime
   */
  readonly endTime: string;

}

/**
 * @schema Wafv2SampledHttpRequest
 */
export interface Wafv2SampledHttpRequest {
  /**
   * @schema Wafv2SampledHttpRequest#Request
   */
  readonly request: Wafv2HttpRequest;

  /**
   * @schema Wafv2SampledHttpRequest#Weight
   */
  readonly weight: number;

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

}

/**
 * @schema Wafv2WebAcl
 */
export interface Wafv2WebAcl {
  /**
   * @schema Wafv2WebAcl#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2WebAcl#Id
   */
  readonly id: string;

  /**
   * @schema Wafv2WebAcl#ARN
   */
  readonly arn: string;

  /**
   * @schema Wafv2WebAcl#DefaultAction
   */
  readonly defaultAction: Wafv2DefaultAction;

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
  readonly visibilityConfig: Wafv2VisibilityConfig;

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

}

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

}

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
 * @schema Wafv2BlockAction
 */
export interface Wafv2BlockAction {
}

/**
 * @schema Wafv2AllowAction
 */
export interface Wafv2AllowAction {
}

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

}

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
 * @schema Wafv2FirewallManagerRuleGroup
 */
export interface Wafv2FirewallManagerRuleGroup {
  /**
   * @schema Wafv2FirewallManagerRuleGroup#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2FirewallManagerRuleGroup#Priority
   */
  readonly priority: number;

  /**
   * @schema Wafv2FirewallManagerRuleGroup#FirewallManagerStatement
   */
  readonly firewallManagerStatement: Wafv2FirewallManagerStatement;

  /**
   * @schema Wafv2FirewallManagerRuleGroup#OverrideAction
   */
  readonly overrideAction: Wafv2OverrideAction;

  /**
   * @schema Wafv2FirewallManagerRuleGroup#VisibilityConfig
   */
  readonly visibilityConfig: Wafv2VisibilityConfig;

}

/**
 * @schema Wafv2ByteMatchStatement
 */
export interface Wafv2ByteMatchStatement {
  /**
   * @schema Wafv2ByteMatchStatement#SearchString
   */
  readonly searchString: any;

  /**
   * @schema Wafv2ByteMatchStatement#FieldToMatch
   */
  readonly fieldToMatch: Wafv2FieldToMatch;

  /**
   * @schema Wafv2ByteMatchStatement#TextTransformations
   */
  readonly textTransformations: Wafv2TextTransformation[];

  /**
   * @schema Wafv2ByteMatchStatement#PositionalConstraint
   */
  readonly positionalConstraint: string;

}

/**
 * @schema Wafv2SqliMatchStatement
 */
export interface Wafv2SqliMatchStatement {
  /**
   * @schema Wafv2SqliMatchStatement#FieldToMatch
   */
  readonly fieldToMatch: Wafv2FieldToMatch;

  /**
   * @schema Wafv2SqliMatchStatement#TextTransformations
   */
  readonly textTransformations: Wafv2TextTransformation[];

}

/**
 * @schema Wafv2XssMatchStatement
 */
export interface Wafv2XssMatchStatement {
  /**
   * @schema Wafv2XssMatchStatement#FieldToMatch
   */
  readonly fieldToMatch: Wafv2FieldToMatch;

  /**
   * @schema Wafv2XssMatchStatement#TextTransformations
   */
  readonly textTransformations: Wafv2TextTransformation[];

}

/**
 * @schema Wafv2SizeConstraintStatement
 */
export interface Wafv2SizeConstraintStatement {
  /**
   * @schema Wafv2SizeConstraintStatement#FieldToMatch
   */
  readonly fieldToMatch: Wafv2FieldToMatch;

  /**
   * @schema Wafv2SizeConstraintStatement#ComparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema Wafv2SizeConstraintStatement#Size
   */
  readonly size: number;

  /**
   * @schema Wafv2SizeConstraintStatement#TextTransformations
   */
  readonly textTransformations: Wafv2TextTransformation[];

}

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
 * @schema Wafv2RuleGroupReferenceStatement
 */
export interface Wafv2RuleGroupReferenceStatement {
  /**
   * @schema Wafv2RuleGroupReferenceStatement#ARN
   */
  readonly arn: string;

  /**
   * @schema Wafv2RuleGroupReferenceStatement#ExcludedRules
   */
  readonly excludedRules?: Wafv2ExcludedRule[];

}

/**
 * @schema Wafv2IpSetReferenceStatement
 */
export interface Wafv2IpSetReferenceStatement {
  /**
   * @schema Wafv2IpSetReferenceStatement#ARN
   */
  readonly arn: string;

  /**
   * @schema Wafv2IpSetReferenceStatement#IPSetForwardedIPConfig
   */
  readonly ipSetForwardedIpConfig?: Wafv2IpSetForwardedIpConfig;

}

/**
 * @schema Wafv2RegexPatternSetReferenceStatement
 */
export interface Wafv2RegexPatternSetReferenceStatement {
  /**
   * @schema Wafv2RegexPatternSetReferenceStatement#ARN
   */
  readonly arn: string;

  /**
   * @schema Wafv2RegexPatternSetReferenceStatement#FieldToMatch
   */
  readonly fieldToMatch: Wafv2FieldToMatch;

  /**
   * @schema Wafv2RegexPatternSetReferenceStatement#TextTransformations
   */
  readonly textTransformations: Wafv2TextTransformation[];

}

/**
 * @schema Wafv2RateBasedStatement
 */
export interface Wafv2RateBasedStatement {
  /**
   * @schema Wafv2RateBasedStatement#Limit
   */
  readonly limit: number;

  /**
   * @schema Wafv2RateBasedStatement#AggregateKeyType
   */
  readonly aggregateKeyType: string;

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
 * @schema Wafv2AndStatement
 */
export interface Wafv2AndStatement {
  /**
   * @schema Wafv2AndStatement#Statements
   */
  readonly statements: Wafv2Statement[];

}

/**
 * @schema Wafv2OrStatement
 */
export interface Wafv2OrStatement {
  /**
   * @schema Wafv2OrStatement#Statements
   */
  readonly statements: Wafv2Statement[];

}

/**
 * @schema Wafv2NotStatement
 */
export interface Wafv2NotStatement {
  /**
   * @schema Wafv2NotStatement#Statement
   */
  readonly statement: Wafv2Statement;

}

/**
 * @schema Wafv2ManagedRuleGroupStatement
 */
export interface Wafv2ManagedRuleGroupStatement {
  /**
   * @schema Wafv2ManagedRuleGroupStatement#VendorName
   */
  readonly vendorName: string;

  /**
   * @schema Wafv2ManagedRuleGroupStatement#Name
   */
  readonly name: string;

  /**
   * @schema Wafv2ManagedRuleGroupStatement#ExcludedRules
   */
  readonly excludedRules?: Wafv2ExcludedRule[];

}

/**
 * @schema Wafv2CountAction
 */
export interface Wafv2CountAction {
}

/**
 * @schema Wafv2NoneAction
 */
export interface Wafv2NoneAction {
}

/**
 * @schema Wafv2SingleHeader
 */
export interface Wafv2SingleHeader {
  /**
   * @schema Wafv2SingleHeader#Name
   */
  readonly name: string;

}

/**
 * @schema Wafv2SingleQueryArgument
 */
export interface Wafv2SingleQueryArgument {
  /**
   * @schema Wafv2SingleQueryArgument#Name
   */
  readonly name: string;

}

/**
 * @schema Wafv2AllQueryArguments
 */
export interface Wafv2AllQueryArguments {
}

/**
 * @schema Wafv2UriPath
 */
export interface Wafv2UriPath {
}

/**
 * @schema Wafv2QueryString
 */
export interface Wafv2QueryString {
}

/**
 * @schema Wafv2Body
 */
export interface Wafv2Body {
}

/**
 * @schema Wafv2Method
 */
export interface Wafv2Method {
}

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
 * @schema Wafv2TextTransformation
 */
export interface Wafv2TextTransformation {
  /**
   * @schema Wafv2TextTransformation#Priority
   */
  readonly priority: number;

  /**
   * @schema Wafv2TextTransformation#Type
   */
  readonly type: string;

}

/**
 * @schema Wafv2ForwardedIpConfig
 */
export interface Wafv2ForwardedIpConfig {
  /**
   * @schema Wafv2ForwardedIpConfig#HeaderName
   */
  readonly headerName: string;

  /**
   * @schema Wafv2ForwardedIpConfig#FallbackBehavior
   */
  readonly fallbackBehavior: string;

}

/**
 * @schema Wafv2ExcludedRule
 */
export interface Wafv2ExcludedRule {
  /**
   * @schema Wafv2ExcludedRule#Name
   */
  readonly name: string;

}

/**
 * @schema Wafv2IpSetForwardedIpConfig
 */
export interface Wafv2IpSetForwardedIpConfig {
  /**
   * @schema Wafv2IpSetForwardedIpConfig#HeaderName
   */
  readonly headerName: string;

  /**
   * @schema Wafv2IpSetForwardedIpConfig#FallbackBehavior
   */
  readonly fallbackBehavior: string;

  /**
   * @schema Wafv2IpSetForwardedIpConfig#Position
   */
  readonly position: string;

}
