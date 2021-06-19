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
  readonly firewallPolicyArn: string;

}

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
  readonly subnetMappings: NetworkFirewallSubnetMapping[];

}

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
 * @schema NetworkFirewallCreateFirewallRequest
 */
export interface NetworkFirewallCreateFirewallRequest {
  /**
   * @schema NetworkFirewallCreateFirewallRequest#FirewallName
   */
  readonly firewallName: string;

  /**
   * @schema NetworkFirewallCreateFirewallRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn: string;

  /**
   * @schema NetworkFirewallCreateFirewallRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema NetworkFirewallCreateFirewallRequest#SubnetMappings
   */
  readonly subnetMappings: NetworkFirewallSubnetMapping[];

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
 * @schema NetworkFirewallCreateFirewallPolicyRequest
 */
export interface NetworkFirewallCreateFirewallPolicyRequest {
  /**
   * @schema NetworkFirewallCreateFirewallPolicyRequest#FirewallPolicyName
   */
  readonly firewallPolicyName: string;

  /**
   * @schema NetworkFirewallCreateFirewallPolicyRequest#FirewallPolicy
   */
  readonly firewallPolicy: NetworkFirewallFirewallPolicy;

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
 * @schema NetworkFirewallCreateFirewallPolicyResponse
 */
export interface NetworkFirewallCreateFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallCreateFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema NetworkFirewallCreateFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse: NetworkFirewallFirewallPolicyResponse;

}

/**
 * @schema NetworkFirewallCreateRuleGroupRequest
 */
export interface NetworkFirewallCreateRuleGroupRequest {
  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#RuleGroupName
   */
  readonly ruleGroupName: string;

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
  readonly type: string;

  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkFirewallCreateRuleGroupRequest#Capacity
   */
  readonly capacity: number;

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
 * @schema NetworkFirewallCreateRuleGroupResponse
 */
export interface NetworkFirewallCreateRuleGroupResponse {
  /**
   * @schema NetworkFirewallCreateRuleGroupResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema NetworkFirewallCreateRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse: NetworkFirewallRuleGroupResponse;

}

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
 * @schema NetworkFirewallDeleteFirewallPolicyResponse
 */
export interface NetworkFirewallDeleteFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallDeleteFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse: NetworkFirewallFirewallPolicyResponse;

}

/**
 * @schema NetworkFirewallDeleteResourcePolicyRequest
 */
export interface NetworkFirewallDeleteResourcePolicyRequest {
  /**
   * @schema NetworkFirewallDeleteResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema NetworkFirewallDeleteResourcePolicyResponse
 */
export interface NetworkFirewallDeleteResourcePolicyResponse {
}

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
 * @schema NetworkFirewallDeleteRuleGroupResponse
 */
export interface NetworkFirewallDeleteRuleGroupResponse {
  /**
   * @schema NetworkFirewallDeleteRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse: NetworkFirewallRuleGroupResponse;

}

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
 * @schema NetworkFirewallDescribeFirewallPolicyResponse
 */
export interface NetworkFirewallDescribeFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallDescribeFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema NetworkFirewallDescribeFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse: NetworkFirewallFirewallPolicyResponse;

  /**
   * @schema NetworkFirewallDescribeFirewallPolicyResponse#FirewallPolicy
   */
  readonly firewallPolicy?: NetworkFirewallFirewallPolicy;

}

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
 * @schema NetworkFirewallDescribeResourcePolicyRequest
 */
export interface NetworkFirewallDescribeResourcePolicyRequest {
  /**
   * @schema NetworkFirewallDescribeResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema NetworkFirewallDescribeRuleGroupResponse
 */
export interface NetworkFirewallDescribeRuleGroupResponse {
  /**
   * @schema NetworkFirewallDescribeRuleGroupResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema NetworkFirewallDescribeRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: NetworkFirewallRuleGroup;

  /**
   * @schema NetworkFirewallDescribeRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse: NetworkFirewallRuleGroupResponse;

}

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
  readonly subnetIds: string[];

}

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
  readonly resourceArn: string;

}

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
 * @schema NetworkFirewallPutResourcePolicyRequest
 */
export interface NetworkFirewallPutResourcePolicyRequest {
  /**
   * @schema NetworkFirewallPutResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema NetworkFirewallPutResourcePolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema NetworkFirewallPutResourcePolicyResponse
 */
export interface NetworkFirewallPutResourcePolicyResponse {
}

/**
 * @schema NetworkFirewallTagResourceRequest
 */
export interface NetworkFirewallTagResourceRequest {
  /**
   * @schema NetworkFirewallTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema NetworkFirewallTagResourceRequest#Tags
   */
  readonly tags: NetworkFirewallTag[];

}

/**
 * @schema NetworkFirewallTagResourceResponse
 */
export interface NetworkFirewallTagResourceResponse {
}

/**
 * @schema NetworkFirewallUntagResourceRequest
 */
export interface NetworkFirewallUntagResourceRequest {
  /**
   * @schema NetworkFirewallUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema NetworkFirewallUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema NetworkFirewallUntagResourceResponse
 */
export interface NetworkFirewallUntagResourceResponse {
}

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
  readonly deleteProtection: boolean;

}

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
 * @schema NetworkFirewallUpdateFirewallPolicyRequest
 */
export interface NetworkFirewallUpdateFirewallPolicyRequest {
  /**
   * @schema NetworkFirewallUpdateFirewallPolicyRequest#UpdateToken
   */
  readonly updateToken: string;

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
  readonly firewallPolicy: NetworkFirewallFirewallPolicy;

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
 * @schema NetworkFirewallUpdateFirewallPolicyResponse
 */
export interface NetworkFirewallUpdateFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallUpdateFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema NetworkFirewallUpdateFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse: NetworkFirewallFirewallPolicyResponse;

}

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
  readonly firewallPolicyChangeProtection: boolean;

}

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
 * @schema NetworkFirewallUpdateRuleGroupRequest
 */
export interface NetworkFirewallUpdateRuleGroupRequest {
  /**
   * @schema NetworkFirewallUpdateRuleGroupRequest#UpdateToken
   */
  readonly updateToken: string;

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
 * @schema NetworkFirewallUpdateRuleGroupResponse
 */
export interface NetworkFirewallUpdateRuleGroupResponse {
  /**
   * @schema NetworkFirewallUpdateRuleGroupResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema NetworkFirewallUpdateRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse: NetworkFirewallRuleGroupResponse;

}

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
  readonly subnetChangeProtection: boolean;

}

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
 * @schema NetworkFirewallSubnetMapping
 */
export interface NetworkFirewallSubnetMapping {
  /**
   * @schema NetworkFirewallSubnetMapping#SubnetId
   */
  readonly subnetId: string;

}

/**
 * @schema NetworkFirewallTag
 */
export interface NetworkFirewallTag {
  /**
   * @schema NetworkFirewallTag#Key
   */
  readonly key: string;

  /**
   * @schema NetworkFirewallTag#Value
   */
  readonly value: string;

}

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
  readonly firewallPolicyArn: string;

  /**
   * @schema NetworkFirewallFirewall#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema NetworkFirewallFirewall#SubnetMappings
   */
  readonly subnetMappings: NetworkFirewallSubnetMapping[];

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
  readonly firewallId: string;

  /**
   * @schema NetworkFirewallFirewall#Tags
   */
  readonly tags?: NetworkFirewallTag[];

}

/**
 * @schema NetworkFirewallFirewallStatus
 */
export interface NetworkFirewallFirewallStatus {
  /**
   * @schema NetworkFirewallFirewallStatus#Status
   */
  readonly status: string;

  /**
   * @schema NetworkFirewallFirewallStatus#ConfigurationSyncStateSummary
   */
  readonly configurationSyncStateSummary: string;

  /**
   * @schema NetworkFirewallFirewallStatus#SyncStates
   */
  readonly syncStates?: { [key: string]: NetworkFirewallSyncState };

}

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
  readonly statelessDefaultActions: string[];

  /**
   * @schema NetworkFirewallFirewallPolicy#StatelessFragmentDefaultActions
   */
  readonly statelessFragmentDefaultActions: string[];

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
 * @schema NetworkFirewallFirewallPolicyResponse
 */
export interface NetworkFirewallFirewallPolicyResponse {
  /**
   * @schema NetworkFirewallFirewallPolicyResponse#FirewallPolicyName
   */
  readonly firewallPolicyName: string;

  /**
   * @schema NetworkFirewallFirewallPolicyResponse#FirewallPolicyArn
   */
  readonly firewallPolicyArn: string;

  /**
   * @schema NetworkFirewallFirewallPolicyResponse#FirewallPolicyId
   */
  readonly firewallPolicyId: string;

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
  readonly rulesSource: NetworkFirewallRulesSource;

}

/**
 * @schema NetworkFirewallRuleGroupResponse
 */
export interface NetworkFirewallRuleGroupResponse {
  /**
   * @schema NetworkFirewallRuleGroupResponse#RuleGroupArn
   */
  readonly ruleGroupArn: string;

  /**
   * @schema NetworkFirewallRuleGroupResponse#RuleGroupName
   */
  readonly ruleGroupName: string;

  /**
   * @schema NetworkFirewallRuleGroupResponse#RuleGroupId
   */
  readonly ruleGroupId: string;

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
 * @schema NetworkFirewallLoggingConfiguration
 */
export interface NetworkFirewallLoggingConfiguration {
  /**
   * @schema NetworkFirewallLoggingConfiguration#LogDestinationConfigs
   */
  readonly logDestinationConfigs: NetworkFirewallLogDestinationConfig[];

}

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
 * @schema NetworkFirewallStatelessRuleGroupReference
 */
export interface NetworkFirewallStatelessRuleGroupReference {
  /**
   * @schema NetworkFirewallStatelessRuleGroupReference#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema NetworkFirewallStatelessRuleGroupReference#Priority
   */
  readonly priority: number;

}

/**
 * @schema NetworkFirewallCustomAction
 */
export interface NetworkFirewallCustomAction {
  /**
   * @schema NetworkFirewallCustomAction#ActionName
   */
  readonly actionName: string;

  /**
   * @schema NetworkFirewallCustomAction#ActionDefinition
   */
  readonly actionDefinition: NetworkFirewallActionDefinition;

}

/**
 * @schema NetworkFirewallStatefulRuleGroupReference
 */
export interface NetworkFirewallStatefulRuleGroupReference {
  /**
   * @schema NetworkFirewallStatefulRuleGroupReference#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema NetworkFirewallLogDestinationConfig
 */
export interface NetworkFirewallLogDestinationConfig {
  /**
   * @schema NetworkFirewallLogDestinationConfig#LogType
   */
  readonly logType: string;

  /**
   * @schema NetworkFirewallLogDestinationConfig#LogDestinationType
   */
  readonly logDestinationType: string;

  /**
   * @schema NetworkFirewallLogDestinationConfig#LogDestination
   */
  readonly logDestination: { [key: string]: string };

}

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
 * @schema NetworkFirewallPerObjectStatus
 */
export interface NetworkFirewallPerObjectStatus {
  /**
   * @schema NetworkFirewallPerObjectStatus#SyncStatus
   */
  readonly syncStatus?: string;

}

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
 * @schema NetworkFirewallIpSet
 */
export interface NetworkFirewallIpSet {
  /**
   * @schema NetworkFirewallIpSet#Definition
   */
  readonly definition: string[];

}

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
 * @schema NetworkFirewallRulesSourceList
 */
export interface NetworkFirewallRulesSourceList {
  /**
   * @schema NetworkFirewallRulesSourceList#Targets
   */
  readonly targets: string[];

  /**
   * @schema NetworkFirewallRulesSourceList#TargetTypes
   */
  readonly targetTypes: string[];

  /**
   * @schema NetworkFirewallRulesSourceList#GeneratedRulesType
   */
  readonly generatedRulesType: string;

}

/**
 * @schema NetworkFirewallStatefulRule
 */
export interface NetworkFirewallStatefulRule {
  /**
   * @schema NetworkFirewallStatefulRule#Action
   */
  readonly action: string;

  /**
   * @schema NetworkFirewallStatefulRule#Header
   */
  readonly header: NetworkFirewallHeader;

  /**
   * @schema NetworkFirewallStatefulRule#RuleOptions
   */
  readonly ruleOptions: NetworkFirewallRuleOption[];

}

/**
 * @schema NetworkFirewallStatelessRulesAndCustomActions
 */
export interface NetworkFirewallStatelessRulesAndCustomActions {
  /**
   * @schema NetworkFirewallStatelessRulesAndCustomActions#StatelessRules
   */
  readonly statelessRules: NetworkFirewallStatelessRule[];

  /**
   * @schema NetworkFirewallStatelessRulesAndCustomActions#CustomActions
   */
  readonly customActions?: NetworkFirewallCustomAction[];

}

/**
 * @schema NetworkFirewallPublishMetricAction
 */
export interface NetworkFirewallPublishMetricAction {
  /**
   * @schema NetworkFirewallPublishMetricAction#Dimensions
   */
  readonly dimensions: NetworkFirewallDimension[];

}

/**
 * @schema NetworkFirewallHeader
 */
export interface NetworkFirewallHeader {
  /**
   * @schema NetworkFirewallHeader#Protocol
   */
  readonly protocol: string;

  /**
   * @schema NetworkFirewallHeader#Source
   */
  readonly source: string;

  /**
   * @schema NetworkFirewallHeader#SourcePort
   */
  readonly sourcePort: string;

  /**
   * @schema NetworkFirewallHeader#Direction
   */
  readonly direction: string;

  /**
   * @schema NetworkFirewallHeader#Destination
   */
  readonly destination: string;

  /**
   * @schema NetworkFirewallHeader#DestinationPort
   */
  readonly destinationPort: string;

}

/**
 * @schema NetworkFirewallRuleOption
 */
export interface NetworkFirewallRuleOption {
  /**
   * @schema NetworkFirewallRuleOption#Keyword
   */
  readonly keyword: string;

  /**
   * @schema NetworkFirewallRuleOption#Settings
   */
  readonly settings?: string[];

}

/**
 * @schema NetworkFirewallStatelessRule
 */
export interface NetworkFirewallStatelessRule {
  /**
   * @schema NetworkFirewallStatelessRule#RuleDefinition
   */
  readonly ruleDefinition: NetworkFirewallRuleDefinition;

  /**
   * @schema NetworkFirewallStatelessRule#Priority
   */
  readonly priority: number;

}

/**
 * @schema NetworkFirewallDimension
 */
export interface NetworkFirewallDimension {
  /**
   * @schema NetworkFirewallDimension#Value
   */
  readonly value: string;

}

/**
 * @schema NetworkFirewallRuleDefinition
 */
export interface NetworkFirewallRuleDefinition {
  /**
   * @schema NetworkFirewallRuleDefinition#MatchAttributes
   */
  readonly matchAttributes: NetworkFirewallMatchAttributes;

  /**
   * @schema NetworkFirewallRuleDefinition#Actions
   */
  readonly actions: string[];

}

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
 * @schema NetworkFirewallAddress
 */
export interface NetworkFirewallAddress {
  /**
   * @schema NetworkFirewallAddress#AddressDefinition
   */
  readonly addressDefinition: string;

}

/**
 * @schema NetworkFirewallPortRange
 */
export interface NetworkFirewallPortRange {
  /**
   * @schema NetworkFirewallPortRange#FromPort
   */
  readonly fromPort: number;

  /**
   * @schema NetworkFirewallPortRange#ToPort
   */
  readonly toPort: number;

}

/**
 * @schema NetworkFirewallTcpFlagField
 */
export interface NetworkFirewallTcpFlagField {
  /**
   * @schema NetworkFirewallTcpFlagField#Flags
   */
  readonly flags: string[];

  /**
   * @schema NetworkFirewallTcpFlagField#Masks
   */
  readonly masks?: string[];

}
