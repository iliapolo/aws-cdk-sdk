/**
 * @schema AssociateWebAclRequest
 */
export interface AssociateWebAclRequest {
  /**
   * @schema AssociateWebAclRequest#WebACLArn
   */
  readonly webAclArn: string;

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
 * @schema CheckCapacityRequest
 */
export interface CheckCapacityRequest {
  /**
   * @schema CheckCapacityRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema CheckCapacityRequest#Rules
   */
  readonly rules: Rule[];

}

/**
 * @schema CheckCapacityResponse
 */
export interface CheckCapacityResponse {
  /**
   * @schema CheckCapacityResponse#Capacity
   */
  readonly capacity?: number;

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
   * @schema CreateIpSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema CreateIpSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateIpSetRequest#IPAddressVersion
   */
  readonly ipAddressVersion: string;

  /**
   * @schema CreateIpSetRequest#Addresses
   */
  readonly addresses: string[];

  /**
   * @schema CreateIpSetRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateIpSetResponse
 */
export interface CreateIpSetResponse {
  /**
   * @schema CreateIpSetResponse#Summary
   */
  readonly summary?: IpSetSummary;

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
   * @schema CreateRegexPatternSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema CreateRegexPatternSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRegexPatternSetRequest#RegularExpressionList
   */
  readonly regularExpressionList: Regex[];

  /**
   * @schema CreateRegexPatternSetRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRegexPatternSetResponse
 */
export interface CreateRegexPatternSetResponse {
  /**
   * @schema CreateRegexPatternSetResponse#Summary
   */
  readonly summary?: RegexPatternSetSummary;

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
   * @schema CreateRuleGroupRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema CreateRuleGroupRequest#Capacity
   */
  readonly capacity: number;

  /**
   * @schema CreateRuleGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRuleGroupRequest#Rules
   */
  readonly rules?: Rule[];

  /**
   * @schema CreateRuleGroupRequest#VisibilityConfig
   */
  readonly visibilityConfig: VisibilityConfig;

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
   * @schema CreateRuleGroupResponse#Summary
   */
  readonly summary?: RuleGroupSummary;

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
   * @schema CreateWebAclRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema CreateWebAclRequest#DefaultAction
   */
  readonly defaultAction: DefaultAction;

  /**
   * @schema CreateWebAclRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateWebAclRequest#Rules
   */
  readonly rules?: Rule[];

  /**
   * @schema CreateWebAclRequest#VisibilityConfig
   */
  readonly visibilityConfig: VisibilityConfig;

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
   * @schema CreateWebAclResponse#Summary
   */
  readonly summary?: WebAclSummary;

}

/**
 * @schema DeleteFirewallManagerRuleGroupsRequest
 */
export interface DeleteFirewallManagerRuleGroupsRequest {
  /**
   * @schema DeleteFirewallManagerRuleGroupsRequest#WebACLArn
   */
  readonly webAclArn: string;

  /**
   * @schema DeleteFirewallManagerRuleGroupsRequest#WebACLLockToken
   */
  readonly webAclLockToken: string;

}

/**
 * @schema DeleteFirewallManagerRuleGroupsResponse
 */
export interface DeleteFirewallManagerRuleGroupsResponse {
  /**
   * @schema DeleteFirewallManagerRuleGroupsResponse#NextWebACLLockToken
   */
  readonly nextWebAclLockToken?: string;

}

/**
 * @schema DeleteIpSetRequest
 */
export interface DeleteIpSetRequest {
  /**
   * @schema DeleteIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema DeleteIpSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema DeleteIpSetRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteIpSetRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema DeleteIpSetResponse
 */
export interface DeleteIpSetResponse {
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
 * @schema DeleteRegexPatternSetRequest
 */
export interface DeleteRegexPatternSetRequest {
  /**
   * @schema DeleteRegexPatternSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema DeleteRegexPatternSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema DeleteRegexPatternSetRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteRegexPatternSetRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema DeleteRegexPatternSetResponse
 */
export interface DeleteRegexPatternSetResponse {
}

/**
 * @schema DeleteRuleGroupRequest
 */
export interface DeleteRuleGroupRequest {
  /**
   * @schema DeleteRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema DeleteRuleGroupRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema DeleteRuleGroupRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteRuleGroupRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema DeleteRuleGroupResponse
 */
export interface DeleteRuleGroupResponse {
}

/**
 * @schema DeleteWebAclRequest
 */
export interface DeleteWebAclRequest {
  /**
   * @schema DeleteWebAclRequest#Name
   */
  readonly name: string;

  /**
   * @schema DeleteWebAclRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema DeleteWebAclRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteWebAclRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema DeleteWebAclResponse
 */
export interface DeleteWebAclResponse {
}

/**
 * @schema DescribeManagedRuleGroupRequest
 */
export interface DescribeManagedRuleGroupRequest {
  /**
   * @schema DescribeManagedRuleGroupRequest#VendorName
   */
  readonly vendorName: string;

  /**
   * @schema DescribeManagedRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema DescribeManagedRuleGroupRequest#Scope
   */
  readonly scope: string;

}

/**
 * @schema DescribeManagedRuleGroupResponse
 */
export interface DescribeManagedRuleGroupResponse {
  /**
   * @schema DescribeManagedRuleGroupResponse#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema DescribeManagedRuleGroupResponse#Rules
   */
  readonly rules?: RuleSummary[];

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
 * @schema GetIpSetRequest
 */
export interface GetIpSetRequest {
  /**
   * @schema GetIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetIpSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema GetIpSetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetIpSetResponse
 */
export interface GetIpSetResponse {
  /**
   * @schema GetIpSetResponse#IPSet
   */
  readonly ipSet?: IpSet;

  /**
   * @schema GetIpSetResponse#LockToken
   */
  readonly lockToken?: string;

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
 * @schema GetRateBasedStatementManagedKeysRequest
 */
export interface GetRateBasedStatementManagedKeysRequest {
  /**
   * @schema GetRateBasedStatementManagedKeysRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema GetRateBasedStatementManagedKeysRequest#WebACLName
   */
  readonly webAclName: string;

  /**
   * @schema GetRateBasedStatementManagedKeysRequest#WebACLId
   */
  readonly webAclId: string;

  /**
   * @schema GetRateBasedStatementManagedKeysRequest#RuleName
   */
  readonly ruleName: string;

}

/**
 * @schema GetRateBasedStatementManagedKeysResponse
 */
export interface GetRateBasedStatementManagedKeysResponse {
  /**
   * @schema GetRateBasedStatementManagedKeysResponse#ManagedKeysIPV4
   */
  readonly managedKeysIpv4?: RateBasedStatementManagedKeysIpSet;

  /**
   * @schema GetRateBasedStatementManagedKeysResponse#ManagedKeysIPV6
   */
  readonly managedKeysIpv6?: RateBasedStatementManagedKeysIpSet;

}

/**
 * @schema GetRegexPatternSetRequest
 */
export interface GetRegexPatternSetRequest {
  /**
   * @schema GetRegexPatternSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetRegexPatternSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema GetRegexPatternSetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetRegexPatternSetResponse
 */
export interface GetRegexPatternSetResponse {
  /**
   * @schema GetRegexPatternSetResponse#RegexPatternSet
   */
  readonly regexPatternSet?: RegexPatternSet;

  /**
   * @schema GetRegexPatternSetResponse#LockToken
   */
  readonly lockToken?: string;

}

/**
 * @schema GetRuleGroupRequest
 */
export interface GetRuleGroupRequest {
  /**
   * @schema GetRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetRuleGroupRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema GetRuleGroupRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetRuleGroupResponse
 */
export interface GetRuleGroupResponse {
  /**
   * @schema GetRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: RuleGroup;

  /**
   * @schema GetRuleGroupResponse#LockToken
   */
  readonly lockToken?: string;

}

/**
 * @schema GetSampledRequestsRequest
 */
export interface GetSampledRequestsRequest {
  /**
   * @schema GetSampledRequestsRequest#WebAclArn
   */
  readonly webAclArn: string;

  /**
   * @schema GetSampledRequestsRequest#RuleMetricName
   */
  readonly ruleMetricName: string;

  /**
   * @schema GetSampledRequestsRequest#Scope
   */
  readonly scope: string;

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
 * @schema GetWebAclRequest
 */
export interface GetWebAclRequest {
  /**
   * @schema GetWebAclRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetWebAclRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema GetWebAclRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetWebAclResponse
 */
export interface GetWebAclResponse {
  /**
   * @schema GetWebAclResponse#WebACL
   */
  readonly webAcl?: WebAcl;

  /**
   * @schema GetWebAclResponse#LockToken
   */
  readonly lockToken?: string;

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
   * @schema GetWebAclForResourceResponse#WebACL
   */
  readonly webAcl?: WebAcl;

}

/**
 * @schema ListAvailableManagedRuleGroupsRequest
 */
export interface ListAvailableManagedRuleGroupsRequest {
  /**
   * @schema ListAvailableManagedRuleGroupsRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema ListAvailableManagedRuleGroupsRequest#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListAvailableManagedRuleGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListAvailableManagedRuleGroupsResponse
 */
export interface ListAvailableManagedRuleGroupsResponse {
  /**
   * @schema ListAvailableManagedRuleGroupsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListAvailableManagedRuleGroupsResponse#ManagedRuleGroups
   */
  readonly managedRuleGroups?: ManagedRuleGroupSummary[];

}

/**
 * @schema ListIpSetsRequest
 */
export interface ListIpSetsRequest {
  /**
   * @schema ListIpSetsRequest#Scope
   */
  readonly scope: string;

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
   * @schema ListLoggingConfigurationsRequest#Scope
   */
  readonly scope?: string;

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
 * @schema ListRegexPatternSetsRequest
 */
export interface ListRegexPatternSetsRequest {
  /**
   * @schema ListRegexPatternSetsRequest#Scope
   */
  readonly scope: string;

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
   * @schema ListResourcesForWebAclRequest#WebACLArn
   */
  readonly webAclArn: string;

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
   * @schema ListRuleGroupsRequest#Scope
   */
  readonly scope: string;

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
   * @schema ListWebAcLsRequest#Scope
   */
  readonly scope: string;

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
 * @schema UpdateIpSetRequest
 */
export interface UpdateIpSetRequest {
  /**
   * @schema UpdateIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateIpSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema UpdateIpSetRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateIpSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateIpSetRequest#Addresses
   */
  readonly addresses: string[];

  /**
   * @schema UpdateIpSetRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema UpdateIpSetResponse
 */
export interface UpdateIpSetResponse {
  /**
   * @schema UpdateIpSetResponse#NextLockToken
   */
  readonly nextLockToken?: string;

}

/**
 * @schema UpdateRegexPatternSetRequest
 */
export interface UpdateRegexPatternSetRequest {
  /**
   * @schema UpdateRegexPatternSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateRegexPatternSetRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema UpdateRegexPatternSetRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateRegexPatternSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateRegexPatternSetRequest#RegularExpressionList
   */
  readonly regularExpressionList: Regex[];

  /**
   * @schema UpdateRegexPatternSetRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema UpdateRegexPatternSetResponse
 */
export interface UpdateRegexPatternSetResponse {
  /**
   * @schema UpdateRegexPatternSetResponse#NextLockToken
   */
  readonly nextLockToken?: string;

}

/**
 * @schema UpdateRuleGroupRequest
 */
export interface UpdateRuleGroupRequest {
  /**
   * @schema UpdateRuleGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateRuleGroupRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema UpdateRuleGroupRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateRuleGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateRuleGroupRequest#Rules
   */
  readonly rules?: Rule[];

  /**
   * @schema UpdateRuleGroupRequest#VisibilityConfig
   */
  readonly visibilityConfig: VisibilityConfig;

  /**
   * @schema UpdateRuleGroupRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema UpdateRuleGroupResponse
 */
export interface UpdateRuleGroupResponse {
  /**
   * @schema UpdateRuleGroupResponse#NextLockToken
   */
  readonly nextLockToken?: string;

}

/**
 * @schema UpdateWebAclRequest
 */
export interface UpdateWebAclRequest {
  /**
   * @schema UpdateWebAclRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateWebAclRequest#Scope
   */
  readonly scope: string;

  /**
   * @schema UpdateWebAclRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateWebAclRequest#DefaultAction
   */
  readonly defaultAction: DefaultAction;

  /**
   * @schema UpdateWebAclRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateWebAclRequest#Rules
   */
  readonly rules?: Rule[];

  /**
   * @schema UpdateWebAclRequest#VisibilityConfig
   */
  readonly visibilityConfig: VisibilityConfig;

  /**
   * @schema UpdateWebAclRequest#LockToken
   */
  readonly lockToken: string;

}

/**
 * @schema UpdateWebAclResponse
 */
export interface UpdateWebAclResponse {
  /**
   * @schema UpdateWebAclResponse#NextLockToken
   */
  readonly nextLockToken?: string;

}

/**
 * @schema Rule
 */
export interface Rule {
  /**
   * @schema Rule#Name
   */
  readonly name: string;

  /**
   * @schema Rule#Priority
   */
  readonly priority: number;

  /**
   * @schema Rule#Statement
   */
  readonly statement: Statement;

  /**
   * @schema Rule#Action
   */
  readonly action?: RuleAction;

  /**
   * @schema Rule#OverrideAction
   */
  readonly overrideAction?: OverrideAction;

  /**
   * @schema Rule#VisibilityConfig
   */
  readonly visibilityConfig: VisibilityConfig;

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
 * @schema IpSetSummary
 */
export interface IpSetSummary {
  /**
   * @schema IpSetSummary#Name
   */
  readonly name?: string;

  /**
   * @schema IpSetSummary#Id
   */
  readonly id?: string;

  /**
   * @schema IpSetSummary#Description
   */
  readonly description?: string;

  /**
   * @schema IpSetSummary#LockToken
   */
  readonly lockToken?: string;

  /**
   * @schema IpSetSummary#ARN
   */
  readonly arn?: string;

}

/**
 * @schema Regex
 */
export interface Regex {
  /**
   * @schema Regex#RegexString
   */
  readonly regexString?: string;

}

/**
 * @schema RegexPatternSetSummary
 */
export interface RegexPatternSetSummary {
  /**
   * @schema RegexPatternSetSummary#Name
   */
  readonly name?: string;

  /**
   * @schema RegexPatternSetSummary#Id
   */
  readonly id?: string;

  /**
   * @schema RegexPatternSetSummary#Description
   */
  readonly description?: string;

  /**
   * @schema RegexPatternSetSummary#LockToken
   */
  readonly lockToken?: string;

  /**
   * @schema RegexPatternSetSummary#ARN
   */
  readonly arn?: string;

}

/**
 * @schema VisibilityConfig
 */
export interface VisibilityConfig {
  /**
   * @schema VisibilityConfig#SampledRequestsEnabled
   */
  readonly sampledRequestsEnabled: boolean;

  /**
   * @schema VisibilityConfig#CloudWatchMetricsEnabled
   */
  readonly cloudWatchMetricsEnabled: boolean;

  /**
   * @schema VisibilityConfig#MetricName
   */
  readonly metricName: string;

}

/**
 * @schema RuleGroupSummary
 */
export interface RuleGroupSummary {
  /**
   * @schema RuleGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema RuleGroupSummary#Id
   */
  readonly id?: string;

  /**
   * @schema RuleGroupSummary#Description
   */
  readonly description?: string;

  /**
   * @schema RuleGroupSummary#LockToken
   */
  readonly lockToken?: string;

  /**
   * @schema RuleGroupSummary#ARN
   */
  readonly arn?: string;

}

/**
 * @schema DefaultAction
 */
export interface DefaultAction {
  /**
   * @schema DefaultAction#Block
   */
  readonly block?: BlockAction;

  /**
   * @schema DefaultAction#Allow
   */
  readonly allow?: AllowAction;

}

/**
 * @schema WebAclSummary
 */
export interface WebAclSummary {
  /**
   * @schema WebAclSummary#Name
   */
  readonly name?: string;

  /**
   * @schema WebAclSummary#Id
   */
  readonly id?: string;

  /**
   * @schema WebAclSummary#Description
   */
  readonly description?: string;

  /**
   * @schema WebAclSummary#LockToken
   */
  readonly lockToken?: string;

  /**
   * @schema WebAclSummary#ARN
   */
  readonly arn?: string;

}

/**
 * @schema RuleSummary
 */
export interface RuleSummary {
  /**
   * @schema RuleSummary#Name
   */
  readonly name?: string;

  /**
   * @schema RuleSummary#Action
   */
  readonly action?: RuleAction;

}

/**
 * @schema IpSet
 */
export interface IpSet {
  /**
   * @schema IpSet#Name
   */
  readonly name: string;

  /**
   * @schema IpSet#Id
   */
  readonly id: string;

  /**
   * @schema IpSet#ARN
   */
  readonly arn: string;

  /**
   * @schema IpSet#Description
   */
  readonly description?: string;

  /**
   * @schema IpSet#IPAddressVersion
   */
  readonly ipAddressVersion: string;

  /**
   * @schema IpSet#Addresses
   */
  readonly addresses: string[];

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

  /**
   * @schema LoggingConfiguration#ManagedByFirewallManager
   */
  readonly managedByFirewallManager?: boolean;

}

/**
 * @schema RateBasedStatementManagedKeysIpSet
 */
export interface RateBasedStatementManagedKeysIpSet {
  /**
   * @schema RateBasedStatementManagedKeysIpSet#IPAddressVersion
   */
  readonly ipAddressVersion?: string;

  /**
   * @schema RateBasedStatementManagedKeysIpSet#Addresses
   */
  readonly addresses?: string[];

}

/**
 * @schema RegexPatternSet
 */
export interface RegexPatternSet {
  /**
   * @schema RegexPatternSet#Name
   */
  readonly name?: string;

  /**
   * @schema RegexPatternSet#Id
   */
  readonly id?: string;

  /**
   * @schema RegexPatternSet#ARN
   */
  readonly arn?: string;

  /**
   * @schema RegexPatternSet#Description
   */
  readonly description?: string;

  /**
   * @schema RegexPatternSet#RegularExpressionList
   */
  readonly regularExpressionList?: Regex[];

}

/**
 * @schema RuleGroup
 */
export interface RuleGroup {
  /**
   * @schema RuleGroup#Name
   */
  readonly name: string;

  /**
   * @schema RuleGroup#Id
   */
  readonly id: string;

  /**
   * @schema RuleGroup#Capacity
   */
  readonly capacity: number;

  /**
   * @schema RuleGroup#ARN
   */
  readonly arn: string;

  /**
   * @schema RuleGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RuleGroup#Rules
   */
  readonly rules?: Rule[];

  /**
   * @schema RuleGroup#VisibilityConfig
   */
  readonly visibilityConfig: VisibilityConfig;

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
   * @schema SampledHttpRequest#RuleNameWithinRuleGroup
   */
  readonly ruleNameWithinRuleGroup?: string;

}

/**
 * @schema WebAcl
 */
export interface WebAcl {
  /**
   * @schema WebAcl#Name
   */
  readonly name: string;

  /**
   * @schema WebAcl#Id
   */
  readonly id: string;

  /**
   * @schema WebAcl#ARN
   */
  readonly arn: string;

  /**
   * @schema WebAcl#DefaultAction
   */
  readonly defaultAction: DefaultAction;

  /**
   * @schema WebAcl#Description
   */
  readonly description?: string;

  /**
   * @schema WebAcl#Rules
   */
  readonly rules?: Rule[];

  /**
   * @schema WebAcl#VisibilityConfig
   */
  readonly visibilityConfig: VisibilityConfig;

  /**
   * @schema WebAcl#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema WebAcl#PreProcessFirewallManagerRuleGroups
   */
  readonly preProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[];

  /**
   * @schema WebAcl#PostProcessFirewallManagerRuleGroups
   */
  readonly postProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[];

  /**
   * @schema WebAcl#ManagedByFirewallManager
   */
  readonly managedByFirewallManager?: boolean;

}

/**
 * @schema ManagedRuleGroupSummary
 */
export interface ManagedRuleGroupSummary {
  /**
   * @schema ManagedRuleGroupSummary#VendorName
   */
  readonly vendorName?: string;

  /**
   * @schema ManagedRuleGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ManagedRuleGroupSummary#Description
   */
  readonly description?: string;

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
 * @schema Statement
 */
export interface Statement {
  /**
   * @schema Statement#ByteMatchStatement
   */
  readonly byteMatchStatement?: ByteMatchStatement;

  /**
   * @schema Statement#SqliMatchStatement
   */
  readonly sqliMatchStatement?: SqliMatchStatement;

  /**
   * @schema Statement#XssMatchStatement
   */
  readonly xssMatchStatement?: XssMatchStatement;

  /**
   * @schema Statement#SizeConstraintStatement
   */
  readonly sizeConstraintStatement?: SizeConstraintStatement;

  /**
   * @schema Statement#GeoMatchStatement
   */
  readonly geoMatchStatement?: GeoMatchStatement;

  /**
   * @schema Statement#RuleGroupReferenceStatement
   */
  readonly ruleGroupReferenceStatement?: RuleGroupReferenceStatement;

  /**
   * @schema Statement#IPSetReferenceStatement
   */
  readonly ipSetReferenceStatement?: IpSetReferenceStatement;

  /**
   * @schema Statement#RegexPatternSetReferenceStatement
   */
  readonly regexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;

  /**
   * @schema Statement#RateBasedStatement
   */
  readonly rateBasedStatement?: RateBasedStatement;

  /**
   * @schema Statement#AndStatement
   */
  readonly andStatement?: AndStatement;

  /**
   * @schema Statement#OrStatement
   */
  readonly orStatement?: OrStatement;

  /**
   * @schema Statement#NotStatement
   */
  readonly notStatement?: NotStatement;

  /**
   * @schema Statement#ManagedRuleGroupStatement
   */
  readonly managedRuleGroupStatement?: ManagedRuleGroupStatement;

}

/**
 * @schema RuleAction
 */
export interface RuleAction {
  /**
   * @schema RuleAction#Block
   */
  readonly block?: BlockAction;

  /**
   * @schema RuleAction#Allow
   */
  readonly allow?: AllowAction;

  /**
   * @schema RuleAction#Count
   */
  readonly count?: CountAction;

}

/**
 * @schema OverrideAction
 */
export interface OverrideAction {
  /**
   * @schema OverrideAction#Count
   */
  readonly count?: CountAction;

  /**
   * @schema OverrideAction#None
   */
  readonly none?: NoneAction;

}

/**
 * @schema BlockAction
 */
export interface BlockAction {
}

/**
 * @schema AllowAction
 */
export interface AllowAction {
}

/**
 * @schema FieldToMatch
 */
export interface FieldToMatch {
  /**
   * @schema FieldToMatch#SingleHeader
   */
  readonly singleHeader?: SingleHeader;

  /**
   * @schema FieldToMatch#SingleQueryArgument
   */
  readonly singleQueryArgument?: SingleQueryArgument;

  /**
   * @schema FieldToMatch#AllQueryArguments
   */
  readonly allQueryArguments?: AllQueryArguments;

  /**
   * @schema FieldToMatch#UriPath
   */
  readonly uriPath?: UriPath;

  /**
   * @schema FieldToMatch#QueryString
   */
  readonly queryString?: QueryString;

  /**
   * @schema FieldToMatch#Body
   */
  readonly body?: Body;

  /**
   * @schema FieldToMatch#Method
   */
  readonly method?: Method;

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
 * @schema FirewallManagerRuleGroup
 */
export interface FirewallManagerRuleGroup {
  /**
   * @schema FirewallManagerRuleGroup#Name
   */
  readonly name: string;

  /**
   * @schema FirewallManagerRuleGroup#Priority
   */
  readonly priority: number;

  /**
   * @schema FirewallManagerRuleGroup#FirewallManagerStatement
   */
  readonly firewallManagerStatement: FirewallManagerStatement;

  /**
   * @schema FirewallManagerRuleGroup#OverrideAction
   */
  readonly overrideAction: OverrideAction;

  /**
   * @schema FirewallManagerRuleGroup#VisibilityConfig
   */
  readonly visibilityConfig: VisibilityConfig;

}

/**
 * @schema ByteMatchStatement
 */
export interface ByteMatchStatement {
  /**
   * @schema ByteMatchStatement#SearchString
   */
  readonly searchString: any;

  /**
   * @schema ByteMatchStatement#FieldToMatch
   */
  readonly fieldToMatch: FieldToMatch;

  /**
   * @schema ByteMatchStatement#TextTransformations
   */
  readonly textTransformations: TextTransformation[];

  /**
   * @schema ByteMatchStatement#PositionalConstraint
   */
  readonly positionalConstraint: string;

}

/**
 * @schema SqliMatchStatement
 */
export interface SqliMatchStatement {
  /**
   * @schema SqliMatchStatement#FieldToMatch
   */
  readonly fieldToMatch: FieldToMatch;

  /**
   * @schema SqliMatchStatement#TextTransformations
   */
  readonly textTransformations: TextTransformation[];

}

/**
 * @schema XssMatchStatement
 */
export interface XssMatchStatement {
  /**
   * @schema XssMatchStatement#FieldToMatch
   */
  readonly fieldToMatch: FieldToMatch;

  /**
   * @schema XssMatchStatement#TextTransformations
   */
  readonly textTransformations: TextTransformation[];

}

/**
 * @schema SizeConstraintStatement
 */
export interface SizeConstraintStatement {
  /**
   * @schema SizeConstraintStatement#FieldToMatch
   */
  readonly fieldToMatch: FieldToMatch;

  /**
   * @schema SizeConstraintStatement#ComparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema SizeConstraintStatement#Size
   */
  readonly size: number;

  /**
   * @schema SizeConstraintStatement#TextTransformations
   */
  readonly textTransformations: TextTransformation[];

}

/**
 * @schema GeoMatchStatement
 */
export interface GeoMatchStatement {
  /**
   * @schema GeoMatchStatement#CountryCodes
   */
  readonly countryCodes?: string[];

  /**
   * @schema GeoMatchStatement#ForwardedIPConfig
   */
  readonly forwardedIpConfig?: ForwardedIpConfig;

}

/**
 * @schema RuleGroupReferenceStatement
 */
export interface RuleGroupReferenceStatement {
  /**
   * @schema RuleGroupReferenceStatement#ARN
   */
  readonly arn: string;

  /**
   * @schema RuleGroupReferenceStatement#ExcludedRules
   */
  readonly excludedRules?: ExcludedRule[];

}

/**
 * @schema IpSetReferenceStatement
 */
export interface IpSetReferenceStatement {
  /**
   * @schema IpSetReferenceStatement#ARN
   */
  readonly arn: string;

  /**
   * @schema IpSetReferenceStatement#IPSetForwardedIPConfig
   */
  readonly ipSetForwardedIpConfig?: IpSetForwardedIpConfig;

}

/**
 * @schema RegexPatternSetReferenceStatement
 */
export interface RegexPatternSetReferenceStatement {
  /**
   * @schema RegexPatternSetReferenceStatement#ARN
   */
  readonly arn: string;

  /**
   * @schema RegexPatternSetReferenceStatement#FieldToMatch
   */
  readonly fieldToMatch: FieldToMatch;

  /**
   * @schema RegexPatternSetReferenceStatement#TextTransformations
   */
  readonly textTransformations: TextTransformation[];

}

/**
 * @schema RateBasedStatement
 */
export interface RateBasedStatement {
  /**
   * @schema RateBasedStatement#Limit
   */
  readonly limit: number;

  /**
   * @schema RateBasedStatement#AggregateKeyType
   */
  readonly aggregateKeyType: string;

  /**
   * @schema RateBasedStatement#ScopeDownStatement
   */
  readonly scopeDownStatement?: Statement;

  /**
   * @schema RateBasedStatement#ForwardedIPConfig
   */
  readonly forwardedIpConfig?: ForwardedIpConfig;

}

/**
 * @schema AndStatement
 */
export interface AndStatement {
  /**
   * @schema AndStatement#Statements
   */
  readonly statements: Statement[];

}

/**
 * @schema OrStatement
 */
export interface OrStatement {
  /**
   * @schema OrStatement#Statements
   */
  readonly statements: Statement[];

}

/**
 * @schema NotStatement
 */
export interface NotStatement {
  /**
   * @schema NotStatement#Statement
   */
  readonly statement: Statement;

}

/**
 * @schema ManagedRuleGroupStatement
 */
export interface ManagedRuleGroupStatement {
  /**
   * @schema ManagedRuleGroupStatement#VendorName
   */
  readonly vendorName: string;

  /**
   * @schema ManagedRuleGroupStatement#Name
   */
  readonly name: string;

  /**
   * @schema ManagedRuleGroupStatement#ExcludedRules
   */
  readonly excludedRules?: ExcludedRule[];

}

/**
 * @schema CountAction
 */
export interface CountAction {
}

/**
 * @schema NoneAction
 */
export interface NoneAction {
}

/**
 * @schema SingleHeader
 */
export interface SingleHeader {
  /**
   * @schema SingleHeader#Name
   */
  readonly name: string;

}

/**
 * @schema SingleQueryArgument
 */
export interface SingleQueryArgument {
  /**
   * @schema SingleQueryArgument#Name
   */
  readonly name: string;

}

/**
 * @schema AllQueryArguments
 */
export interface AllQueryArguments {
}

/**
 * @schema UriPath
 */
export interface UriPath {
}

/**
 * @schema QueryString
 */
export interface QueryString {
}

/**
 * @schema Body
 */
export interface Body {
}

/**
 * @schema Method
 */
export interface Method {
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

/**
 * @schema FirewallManagerStatement
 */
export interface FirewallManagerStatement {
  /**
   * @schema FirewallManagerStatement#ManagedRuleGroupStatement
   */
  readonly managedRuleGroupStatement?: ManagedRuleGroupStatement;

  /**
   * @schema FirewallManagerStatement#RuleGroupReferenceStatement
   */
  readonly ruleGroupReferenceStatement?: RuleGroupReferenceStatement;

}

/**
 * @schema TextTransformation
 */
export interface TextTransformation {
  /**
   * @schema TextTransformation#Priority
   */
  readonly priority: number;

  /**
   * @schema TextTransformation#Type
   */
  readonly type: string;

}

/**
 * @schema ForwardedIpConfig
 */
export interface ForwardedIpConfig {
  /**
   * @schema ForwardedIpConfig#HeaderName
   */
  readonly headerName: string;

  /**
   * @schema ForwardedIpConfig#FallbackBehavior
   */
  readonly fallbackBehavior: string;

}

/**
 * @schema ExcludedRule
 */
export interface ExcludedRule {
  /**
   * @schema ExcludedRule#Name
   */
  readonly name: string;

}

/**
 * @schema IpSetForwardedIpConfig
 */
export interface IpSetForwardedIpConfig {
  /**
   * @schema IpSetForwardedIpConfig#HeaderName
   */
  readonly headerName: string;

  /**
   * @schema IpSetForwardedIpConfig#FallbackBehavior
   */
  readonly fallbackBehavior: string;

  /**
   * @schema IpSetForwardedIpConfig#Position
   */
  readonly position: string;

}
