/**
 * @schema AssociateFirewallPolicyRequest
 */
export interface AssociateFirewallPolicyRequest {
  /**
   * @schema AssociateFirewallPolicyRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema AssociateFirewallPolicyRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema AssociateFirewallPolicyRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema AssociateFirewallPolicyRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn: string;

}

/**
 * @schema AssociateFirewallPolicyResponse
 */
export interface AssociateFirewallPolicyResponse {
  /**
   * @schema AssociateFirewallPolicyResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema AssociateFirewallPolicyResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema AssociateFirewallPolicyResponse#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

  /**
   * @schema AssociateFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * @schema AssociateSubnetsRequest
 */
export interface AssociateSubnetsRequest {
  /**
   * @schema AssociateSubnetsRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema AssociateSubnetsRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema AssociateSubnetsRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema AssociateSubnetsRequest#SubnetMappings
   */
  readonly subnetMappings: SubnetMapping[];

}

/**
 * @schema AssociateSubnetsResponse
 */
export interface AssociateSubnetsResponse {
  /**
   * @schema AssociateSubnetsResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema AssociateSubnetsResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema AssociateSubnetsResponse#SubnetMappings
   */
  readonly subnetMappings?: SubnetMapping[];

  /**
   * @schema AssociateSubnetsResponse#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * @schema CreateFirewallRequest
 */
export interface CreateFirewallRequest {
  /**
   * @schema CreateFirewallRequest#FirewallName
   */
  readonly firewallName: string;

  /**
   * @schema CreateFirewallRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn: string;

  /**
   * @schema CreateFirewallRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CreateFirewallRequest#SubnetMappings
   */
  readonly subnetMappings: SubnetMapping[];

  /**
   * @schema CreateFirewallRequest#DeleteProtection
   */
  readonly deleteProtection?: boolean;

  /**
   * @schema CreateFirewallRequest#SubnetChangeProtection
   */
  readonly subnetChangeProtection?: boolean;

  /**
   * @schema CreateFirewallRequest#FirewallPolicyChangeProtection
   */
  readonly firewallPolicyChangeProtection?: boolean;

  /**
   * @schema CreateFirewallRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateFirewallRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateFirewallResponse
 */
export interface CreateFirewallResponse {
  /**
   * @schema CreateFirewallResponse#Firewall
   */
  readonly firewall?: Firewall;

  /**
   * @schema CreateFirewallResponse#FirewallStatus
   */
  readonly firewallStatus?: FirewallStatus;

}

/**
 * @schema CreateFirewallPolicyRequest
 */
export interface CreateFirewallPolicyRequest {
  /**
   * @schema CreateFirewallPolicyRequest#FirewallPolicyName
   */
  readonly firewallPolicyName: string;

  /**
   * @schema CreateFirewallPolicyRequest#FirewallPolicy
   */
  readonly firewallPolicy: FirewallPolicy;

  /**
   * @schema CreateFirewallPolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateFirewallPolicyRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateFirewallPolicyRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateFirewallPolicyResponse
 */
export interface CreateFirewallPolicyResponse {
  /**
   * @schema CreateFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema CreateFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse: FirewallPolicyResponse;

}

/**
 * @schema CreateRuleGroupRequest
 */
export interface CreateRuleGroupRequest {
  /**
   * @schema CreateRuleGroupRequest#RuleGroupName
   */
  readonly ruleGroupName: string;

  /**
   * @schema CreateRuleGroupRequest#RuleGroup
   */
  readonly ruleGroup?: RuleGroup;

  /**
   * @schema CreateRuleGroupRequest#Rules
   */
  readonly rules?: string;

  /**
   * @schema CreateRuleGroupRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateRuleGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRuleGroupRequest#Capacity
   */
  readonly capacity: number;

  /**
   * @schema CreateRuleGroupRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateRuleGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateRuleGroupResponse
 */
export interface CreateRuleGroupResponse {
  /**
   * @schema CreateRuleGroupResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema CreateRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse: RuleGroupResponse;

}

/**
 * @schema DeleteFirewallRequest
 */
export interface DeleteFirewallRequest {
  /**
   * @schema DeleteFirewallRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema DeleteFirewallRequest#FirewallArn
   */
  readonly firewallArn?: string;

}

/**
 * @schema DeleteFirewallResponse
 */
export interface DeleteFirewallResponse {
  /**
   * @schema DeleteFirewallResponse#Firewall
   */
  readonly firewall?: Firewall;

  /**
   * @schema DeleteFirewallResponse#FirewallStatus
   */
  readonly firewallStatus?: FirewallStatus;

}

/**
 * @schema DeleteFirewallPolicyRequest
 */
export interface DeleteFirewallPolicyRequest {
  /**
   * @schema DeleteFirewallPolicyRequest#FirewallPolicyName
   */
  readonly firewallPolicyName?: string;

  /**
   * @schema DeleteFirewallPolicyRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

}

/**
 * @schema DeleteFirewallPolicyResponse
 */
export interface DeleteFirewallPolicyResponse {
  /**
   * @schema DeleteFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse: FirewallPolicyResponse;

}

/**
 * @schema DeleteResourcePolicyRequest
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @schema DeleteResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DeleteResourcePolicyResponse
 */
export interface DeleteResourcePolicyResponse {
}

/**
 * @schema DeleteRuleGroupRequest
 */
export interface DeleteRuleGroupRequest {
  /**
   * @schema DeleteRuleGroupRequest#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema DeleteRuleGroupRequest#RuleGroupArn
   */
  readonly ruleGroupArn?: string;

  /**
   * @schema DeleteRuleGroupRequest#Type
   */
  readonly type?: string;

}

/**
 * @schema DeleteRuleGroupResponse
 */
export interface DeleteRuleGroupResponse {
  /**
   * @schema DeleteRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse: RuleGroupResponse;

}

/**
 * @schema DescribeFirewallRequest
 */
export interface DescribeFirewallRequest {
  /**
   * @schema DescribeFirewallRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema DescribeFirewallRequest#FirewallArn
   */
  readonly firewallArn?: string;

}

/**
 * @schema DescribeFirewallResponse
 */
export interface DescribeFirewallResponse {
  /**
   * @schema DescribeFirewallResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema DescribeFirewallResponse#Firewall
   */
  readonly firewall?: Firewall;

  /**
   * @schema DescribeFirewallResponse#FirewallStatus
   */
  readonly firewallStatus?: FirewallStatus;

}

/**
 * @schema DescribeFirewallPolicyRequest
 */
export interface DescribeFirewallPolicyRequest {
  /**
   * @schema DescribeFirewallPolicyRequest#FirewallPolicyName
   */
  readonly firewallPolicyName?: string;

  /**
   * @schema DescribeFirewallPolicyRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

}

/**
 * @schema DescribeFirewallPolicyResponse
 */
export interface DescribeFirewallPolicyResponse {
  /**
   * @schema DescribeFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema DescribeFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse: FirewallPolicyResponse;

  /**
   * @schema DescribeFirewallPolicyResponse#FirewallPolicy
   */
  readonly firewallPolicy?: FirewallPolicy;

}

/**
 * @schema DescribeLoggingConfigurationRequest
 */
export interface DescribeLoggingConfigurationRequest {
  /**
   * @schema DescribeLoggingConfigurationRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema DescribeLoggingConfigurationRequest#FirewallName
   */
  readonly firewallName?: string;

}

/**
 * @schema DescribeLoggingConfigurationResponse
 */
export interface DescribeLoggingConfigurationResponse {
  /**
   * @schema DescribeLoggingConfigurationResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema DescribeLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: LoggingConfiguration;

}

/**
 * @schema DescribeResourcePolicyRequest
 */
export interface DescribeResourcePolicyRequest {
  /**
   * @schema DescribeResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DescribeResourcePolicyResponse
 */
export interface DescribeResourcePolicyResponse {
  /**
   * @schema DescribeResourcePolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * @schema DescribeRuleGroupRequest
 */
export interface DescribeRuleGroupRequest {
  /**
   * @schema DescribeRuleGroupRequest#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema DescribeRuleGroupRequest#RuleGroupArn
   */
  readonly ruleGroupArn?: string;

  /**
   * @schema DescribeRuleGroupRequest#Type
   */
  readonly type?: string;

}

/**
 * @schema DescribeRuleGroupResponse
 */
export interface DescribeRuleGroupResponse {
  /**
   * @schema DescribeRuleGroupResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema DescribeRuleGroupResponse#RuleGroup
   */
  readonly ruleGroup?: RuleGroup;

  /**
   * @schema DescribeRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse: RuleGroupResponse;

}

/**
 * @schema DisassociateSubnetsRequest
 */
export interface DisassociateSubnetsRequest {
  /**
   * @schema DisassociateSubnetsRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema DisassociateSubnetsRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema DisassociateSubnetsRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema DisassociateSubnetsRequest#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema DisassociateSubnetsResponse
 */
export interface DisassociateSubnetsResponse {
  /**
   * @schema DisassociateSubnetsResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema DisassociateSubnetsResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema DisassociateSubnetsResponse#SubnetMappings
   */
  readonly subnetMappings?: SubnetMapping[];

  /**
   * @schema DisassociateSubnetsResponse#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * @schema ListFirewallPoliciesRequest
 */
export interface ListFirewallPoliciesRequest {
  /**
   * @schema ListFirewallPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFirewallPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFirewallPoliciesResponse
 */
export interface ListFirewallPoliciesResponse {
  /**
   * @schema ListFirewallPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFirewallPoliciesResponse#FirewallPolicies
   */
  readonly firewallPolicies?: FirewallPolicyMetadata[];

}

/**
 * @schema ListFirewallsRequest
 */
export interface ListFirewallsRequest {
  /**
   * @schema ListFirewallsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFirewallsRequest#VpcIds
   */
  readonly vpcIds?: string[];

  /**
   * @schema ListFirewallsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFirewallsResponse
 */
export interface ListFirewallsResponse {
  /**
   * @schema ListFirewallsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFirewallsResponse#Firewalls
   */
  readonly firewalls?: FirewallMetadata[];

}

/**
 * @schema ListRuleGroupsRequest
 */
export interface ListRuleGroupsRequest {
  /**
   * @schema ListRuleGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRuleGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRuleGroupsResponse
 */
export interface ListRuleGroupsResponse {
  /**
   * @schema ListRuleGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRuleGroupsResponse#RuleGroups
   */
  readonly ruleGroups?: RuleGroupMetadata[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutResourcePolicyRequest
 */
export interface PutResourcePolicyRequest {
  /**
   * @schema PutResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema PutResourcePolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema PutResourcePolicyResponse
 */
export interface PutResourcePolicyResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
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
   * @schema UntagResourceRequest#ResourceArn
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
 * @schema UpdateFirewallDeleteProtectionRequest
 */
export interface UpdateFirewallDeleteProtectionRequest {
  /**
   * @schema UpdateFirewallDeleteProtectionRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema UpdateFirewallDeleteProtectionRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema UpdateFirewallDeleteProtectionRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema UpdateFirewallDeleteProtectionRequest#DeleteProtection
   */
  readonly deleteProtection: boolean;

}

/**
 * @schema UpdateFirewallDeleteProtectionResponse
 */
export interface UpdateFirewallDeleteProtectionResponse {
  /**
   * @schema UpdateFirewallDeleteProtectionResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema UpdateFirewallDeleteProtectionResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema UpdateFirewallDeleteProtectionResponse#DeleteProtection
   */
  readonly deleteProtection?: boolean;

  /**
   * @schema UpdateFirewallDeleteProtectionResponse#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * @schema UpdateFirewallDescriptionRequest
 */
export interface UpdateFirewallDescriptionRequest {
  /**
   * @schema UpdateFirewallDescriptionRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema UpdateFirewallDescriptionRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema UpdateFirewallDescriptionRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema UpdateFirewallDescriptionRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateFirewallDescriptionResponse
 */
export interface UpdateFirewallDescriptionResponse {
  /**
   * @schema UpdateFirewallDescriptionResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema UpdateFirewallDescriptionResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema UpdateFirewallDescriptionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateFirewallDescriptionResponse#UpdateToken
   */
  readonly updateToken?: string;

}

/**
 * @schema UpdateFirewallPolicyRequest
 */
export interface UpdateFirewallPolicyRequest {
  /**
   * @schema UpdateFirewallPolicyRequest#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema UpdateFirewallPolicyRequest#FirewallPolicyArn
   */
  readonly firewallPolicyArn?: string;

  /**
   * @schema UpdateFirewallPolicyRequest#FirewallPolicyName
   */
  readonly firewallPolicyName?: string;

  /**
   * @schema UpdateFirewallPolicyRequest#FirewallPolicy
   */
  readonly firewallPolicy: FirewallPolicy;

  /**
   * @schema UpdateFirewallPolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateFirewallPolicyRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema UpdateFirewallPolicyResponse
 */
export interface UpdateFirewallPolicyResponse {
  /**
   * @schema UpdateFirewallPolicyResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema UpdateFirewallPolicyResponse#FirewallPolicyResponse
   */
  readonly firewallPolicyResponse: FirewallPolicyResponse;

}

/**
 * @schema UpdateFirewallPolicyChangeProtectionRequest
 */
export interface UpdateFirewallPolicyChangeProtectionRequest {
  /**
   * @schema UpdateFirewallPolicyChangeProtectionRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema UpdateFirewallPolicyChangeProtectionRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema UpdateFirewallPolicyChangeProtectionRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema UpdateFirewallPolicyChangeProtectionRequest#FirewallPolicyChangeProtection
   */
  readonly firewallPolicyChangeProtection: boolean;

}

/**
 * @schema UpdateFirewallPolicyChangeProtectionResponse
 */
export interface UpdateFirewallPolicyChangeProtectionResponse {
  /**
   * @schema UpdateFirewallPolicyChangeProtectionResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema UpdateFirewallPolicyChangeProtectionResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema UpdateFirewallPolicyChangeProtectionResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema UpdateFirewallPolicyChangeProtectionResponse#FirewallPolicyChangeProtection
   */
  readonly firewallPolicyChangeProtection?: boolean;

}

/**
 * @schema UpdateLoggingConfigurationRequest
 */
export interface UpdateLoggingConfigurationRequest {
  /**
   * @schema UpdateLoggingConfigurationRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema UpdateLoggingConfigurationRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema UpdateLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration?: LoggingConfiguration;

}

/**
 * @schema UpdateLoggingConfigurationResponse
 */
export interface UpdateLoggingConfigurationResponse {
  /**
   * @schema UpdateLoggingConfigurationResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema UpdateLoggingConfigurationResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema UpdateLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: LoggingConfiguration;

}

/**
 * @schema UpdateRuleGroupRequest
 */
export interface UpdateRuleGroupRequest {
  /**
   * @schema UpdateRuleGroupRequest#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema UpdateRuleGroupRequest#RuleGroupArn
   */
  readonly ruleGroupArn?: string;

  /**
   * @schema UpdateRuleGroupRequest#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema UpdateRuleGroupRequest#RuleGroup
   */
  readonly ruleGroup?: RuleGroup;

  /**
   * @schema UpdateRuleGroupRequest#Rules
   */
  readonly rules?: string;

  /**
   * @schema UpdateRuleGroupRequest#Type
   */
  readonly type?: string;

  /**
   * @schema UpdateRuleGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateRuleGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema UpdateRuleGroupResponse
 */
export interface UpdateRuleGroupResponse {
  /**
   * @schema UpdateRuleGroupResponse#UpdateToken
   */
  readonly updateToken: string;

  /**
   * @schema UpdateRuleGroupResponse#RuleGroupResponse
   */
  readonly ruleGroupResponse: RuleGroupResponse;

}

/**
 * @schema UpdateSubnetChangeProtectionRequest
 */
export interface UpdateSubnetChangeProtectionRequest {
  /**
   * @schema UpdateSubnetChangeProtectionRequest#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema UpdateSubnetChangeProtectionRequest#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema UpdateSubnetChangeProtectionRequest#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema UpdateSubnetChangeProtectionRequest#SubnetChangeProtection
   */
  readonly subnetChangeProtection: boolean;

}

/**
 * @schema UpdateSubnetChangeProtectionResponse
 */
export interface UpdateSubnetChangeProtectionResponse {
  /**
   * @schema UpdateSubnetChangeProtectionResponse#UpdateToken
   */
  readonly updateToken?: string;

  /**
   * @schema UpdateSubnetChangeProtectionResponse#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema UpdateSubnetChangeProtectionResponse#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema UpdateSubnetChangeProtectionResponse#SubnetChangeProtection
   */
  readonly subnetChangeProtection?: boolean;

}

/**
 * @schema SubnetMapping
 */
export interface SubnetMapping {
  /**
   * @schema SubnetMapping#SubnetId
   */
  readonly subnetId: string;

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
 * @schema Firewall
 */
export interface Firewall {
  /**
   * @schema Firewall#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema Firewall#FirewallArn
   */
  readonly firewallArn?: string;

  /**
   * @schema Firewall#FirewallPolicyArn
   */
  readonly firewallPolicyArn: string;

  /**
   * @schema Firewall#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Firewall#SubnetMappings
   */
  readonly subnetMappings: SubnetMapping[];

  /**
   * @schema Firewall#DeleteProtection
   */
  readonly deleteProtection?: boolean;

  /**
   * @schema Firewall#SubnetChangeProtection
   */
  readonly subnetChangeProtection?: boolean;

  /**
   * @schema Firewall#FirewallPolicyChangeProtection
   */
  readonly firewallPolicyChangeProtection?: boolean;

  /**
   * @schema Firewall#Description
   */
  readonly description?: string;

  /**
   * @schema Firewall#FirewallId
   */
  readonly firewallId: string;

  /**
   * @schema Firewall#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema FirewallStatus
 */
export interface FirewallStatus {
  /**
   * @schema FirewallStatus#Status
   */
  readonly status: string;

  /**
   * @schema FirewallStatus#ConfigurationSyncStateSummary
   */
  readonly configurationSyncStateSummary: string;

  /**
   * @schema FirewallStatus#SyncStates
   */
  readonly syncStates?: { [key: string]: SyncState };

}

/**
 * @schema FirewallPolicy
 */
export interface FirewallPolicy {
  /**
   * @schema FirewallPolicy#StatelessRuleGroupReferences
   */
  readonly statelessRuleGroupReferences?: StatelessRuleGroupReference[];

  /**
   * @schema FirewallPolicy#StatelessDefaultActions
   */
  readonly statelessDefaultActions: string[];

  /**
   * @schema FirewallPolicy#StatelessFragmentDefaultActions
   */
  readonly statelessFragmentDefaultActions: string[];

  /**
   * @schema FirewallPolicy#StatelessCustomActions
   */
  readonly statelessCustomActions?: CustomAction[];

  /**
   * @schema FirewallPolicy#StatefulRuleGroupReferences
   */
  readonly statefulRuleGroupReferences?: StatefulRuleGroupReference[];

}

/**
 * @schema FirewallPolicyResponse
 */
export interface FirewallPolicyResponse {
  /**
   * @schema FirewallPolicyResponse#FirewallPolicyName
   */
  readonly firewallPolicyName: string;

  /**
   * @schema FirewallPolicyResponse#FirewallPolicyArn
   */
  readonly firewallPolicyArn: string;

  /**
   * @schema FirewallPolicyResponse#FirewallPolicyId
   */
  readonly firewallPolicyId: string;

  /**
   * @schema FirewallPolicyResponse#Description
   */
  readonly description?: string;

  /**
   * @schema FirewallPolicyResponse#FirewallPolicyStatus
   */
  readonly firewallPolicyStatus?: string;

  /**
   * @schema FirewallPolicyResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema RuleGroup
 */
export interface RuleGroup {
  /**
   * @schema RuleGroup#RuleVariables
   */
  readonly ruleVariables?: RuleVariables;

  /**
   * @schema RuleGroup#RulesSource
   */
  readonly rulesSource: RulesSource;

}

/**
 * @schema RuleGroupResponse
 */
export interface RuleGroupResponse {
  /**
   * @schema RuleGroupResponse#RuleGroupArn
   */
  readonly ruleGroupArn: string;

  /**
   * @schema RuleGroupResponse#RuleGroupName
   */
  readonly ruleGroupName: string;

  /**
   * @schema RuleGroupResponse#RuleGroupId
   */
  readonly ruleGroupId: string;

  /**
   * @schema RuleGroupResponse#Description
   */
  readonly description?: string;

  /**
   * @schema RuleGroupResponse#Type
   */
  readonly type?: string;

  /**
   * @schema RuleGroupResponse#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema RuleGroupResponse#RuleGroupStatus
   */
  readonly ruleGroupStatus?: string;

  /**
   * @schema RuleGroupResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema LoggingConfiguration
 */
export interface LoggingConfiguration {
  /**
   * @schema LoggingConfiguration#LogDestinationConfigs
   */
  readonly logDestinationConfigs: LogDestinationConfig[];

}

/**
 * @schema FirewallPolicyMetadata
 */
export interface FirewallPolicyMetadata {
  /**
   * @schema FirewallPolicyMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema FirewallPolicyMetadata#Arn
   */
  readonly arn?: string;

}

/**
 * @schema FirewallMetadata
 */
export interface FirewallMetadata {
  /**
   * @schema FirewallMetadata#FirewallName
   */
  readonly firewallName?: string;

  /**
   * @schema FirewallMetadata#FirewallArn
   */
  readonly firewallArn?: string;

}

/**
 * @schema RuleGroupMetadata
 */
export interface RuleGroupMetadata {
  /**
   * @schema RuleGroupMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema RuleGroupMetadata#Arn
   */
  readonly arn?: string;

}

/**
 * @schema SyncState
 */
export interface SyncState {
  /**
   * @schema SyncState#Attachment
   */
  readonly attachment?: Attachment;

  /**
   * @schema SyncState#Config
   */
  readonly config?: { [key: string]: PerObjectStatus };

}

/**
 * @schema StatelessRuleGroupReference
 */
export interface StatelessRuleGroupReference {
  /**
   * @schema StatelessRuleGroupReference#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema StatelessRuleGroupReference#Priority
   */
  readonly priority: number;

}

/**
 * @schema CustomAction
 */
export interface CustomAction {
  /**
   * @schema CustomAction#ActionName
   */
  readonly actionName: string;

  /**
   * @schema CustomAction#ActionDefinition
   */
  readonly actionDefinition: ActionDefinition;

}

/**
 * @schema StatefulRuleGroupReference
 */
export interface StatefulRuleGroupReference {
  /**
   * @schema StatefulRuleGroupReference#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema RuleVariables
 */
export interface RuleVariables {
  /**
   * @schema RuleVariables#IPSets
   */
  readonly ipSets?: { [key: string]: IpSet };

  /**
   * @schema RuleVariables#PortSets
   */
  readonly portSets?: { [key: string]: PortSet };

}

/**
 * @schema RulesSource
 */
export interface RulesSource {
  /**
   * @schema RulesSource#RulesString
   */
  readonly rulesString?: string;

  /**
   * @schema RulesSource#RulesSourceList
   */
  readonly rulesSourceList?: RulesSourceList;

  /**
   * @schema RulesSource#StatefulRules
   */
  readonly statefulRules?: StatefulRule[];

  /**
   * @schema RulesSource#StatelessRulesAndCustomActions
   */
  readonly statelessRulesAndCustomActions?: StatelessRulesAndCustomActions;

}

/**
 * @schema LogDestinationConfig
 */
export interface LogDestinationConfig {
  /**
   * @schema LogDestinationConfig#LogType
   */
  readonly logType: string;

  /**
   * @schema LogDestinationConfig#LogDestinationType
   */
  readonly logDestinationType: string;

  /**
   * @schema LogDestinationConfig#LogDestination
   */
  readonly logDestination: { [key: string]: string };

}

/**
 * @schema Attachment
 */
export interface Attachment {
  /**
   * @schema Attachment#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Attachment#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema Attachment#Status
   */
  readonly status?: string;

}

/**
 * @schema PerObjectStatus
 */
export interface PerObjectStatus {
  /**
   * @schema PerObjectStatus#SyncStatus
   */
  readonly syncStatus?: string;

}

/**
 * @schema ActionDefinition
 */
export interface ActionDefinition {
  /**
   * @schema ActionDefinition#PublishMetricAction
   */
  readonly publishMetricAction?: PublishMetricAction;

}

/**
 * @schema IpSet
 */
export interface IpSet {
  /**
   * @schema IpSet#Definition
   */
  readonly definition: string[];

}

/**
 * @schema PortSet
 */
export interface PortSet {
  /**
   * @schema PortSet#Definition
   */
  readonly definition?: string[];

}

/**
 * @schema RulesSourceList
 */
export interface RulesSourceList {
  /**
   * @schema RulesSourceList#Targets
   */
  readonly targets: string[];

  /**
   * @schema RulesSourceList#TargetTypes
   */
  readonly targetTypes: string[];

  /**
   * @schema RulesSourceList#GeneratedRulesType
   */
  readonly generatedRulesType: string;

}

/**
 * @schema StatefulRule
 */
export interface StatefulRule {
  /**
   * @schema StatefulRule#Action
   */
  readonly action: string;

  /**
   * @schema StatefulRule#Header
   */
  readonly header: Header;

  /**
   * @schema StatefulRule#RuleOptions
   */
  readonly ruleOptions: RuleOption[];

}

/**
 * @schema StatelessRulesAndCustomActions
 */
export interface StatelessRulesAndCustomActions {
  /**
   * @schema StatelessRulesAndCustomActions#StatelessRules
   */
  readonly statelessRules: StatelessRule[];

  /**
   * @schema StatelessRulesAndCustomActions#CustomActions
   */
  readonly customActions?: CustomAction[];

}

/**
 * @schema PublishMetricAction
 */
export interface PublishMetricAction {
  /**
   * @schema PublishMetricAction#Dimensions
   */
  readonly dimensions: Dimension[];

}

/**
 * @schema Header
 */
export interface Header {
  /**
   * @schema Header#Protocol
   */
  readonly protocol: string;

  /**
   * @schema Header#Source
   */
  readonly source: string;

  /**
   * @schema Header#SourcePort
   */
  readonly sourcePort: string;

  /**
   * @schema Header#Direction
   */
  readonly direction: string;

  /**
   * @schema Header#Destination
   */
  readonly destination: string;

  /**
   * @schema Header#DestinationPort
   */
  readonly destinationPort: string;

}

/**
 * @schema RuleOption
 */
export interface RuleOption {
  /**
   * @schema RuleOption#Keyword
   */
  readonly keyword: string;

  /**
   * @schema RuleOption#Settings
   */
  readonly settings?: string[];

}

/**
 * @schema StatelessRule
 */
export interface StatelessRule {
  /**
   * @schema StatelessRule#RuleDefinition
   */
  readonly ruleDefinition: RuleDefinition;

  /**
   * @schema StatelessRule#Priority
   */
  readonly priority: number;

}

/**
 * @schema Dimension
 */
export interface Dimension {
  /**
   * @schema Dimension#Value
   */
  readonly value: string;

}

/**
 * @schema RuleDefinition
 */
export interface RuleDefinition {
  /**
   * @schema RuleDefinition#MatchAttributes
   */
  readonly matchAttributes: MatchAttributes;

  /**
   * @schema RuleDefinition#Actions
   */
  readonly actions: string[];

}

/**
 * @schema MatchAttributes
 */
export interface MatchAttributes {
  /**
   * @schema MatchAttributes#Sources
   */
  readonly sources?: Address[];

  /**
   * @schema MatchAttributes#Destinations
   */
  readonly destinations?: Address[];

  /**
   * @schema MatchAttributes#SourcePorts
   */
  readonly sourcePorts?: PortRange[];

  /**
   * @schema MatchAttributes#DestinationPorts
   */
  readonly destinationPorts?: PortRange[];

  /**
   * @schema MatchAttributes#Protocols
   */
  readonly protocols?: number[];

  /**
   * @schema MatchAttributes#TCPFlags
   */
  readonly tcpFlags?: TcpFlagField[];

}

/**
 * @schema Address
 */
export interface Address {
  /**
   * @schema Address#AddressDefinition
   */
  readonly addressDefinition: string;

}

/**
 * @schema PortRange
 */
export interface PortRange {
  /**
   * @schema PortRange#FromPort
   */
  readonly fromPort: number;

  /**
   * @schema PortRange#ToPort
   */
  readonly toPort: number;

}

/**
 * @schema TcpFlagField
 */
export interface TcpFlagField {
  /**
   * @schema TcpFlagField#Flags
   */
  readonly flags: string[];

  /**
   * @schema TcpFlagField#Masks
   */
  readonly masks?: string[];

}
