/**
 * @schema Route53ResolverAssociateResolverEndpointIpAddressRequest
 */
export interface Route53ResolverAssociateResolverEndpointIpAddressRequest {
  /**
   * @schema Route53ResolverAssociateResolverEndpointIpAddressRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

  /**
   * @schema Route53ResolverAssociateResolverEndpointIpAddressRequest#IpAddress
   */
  readonly ipAddress: Route53ResolverIpAddressUpdate;

}

/**
 * @schema Route53ResolverAssociateResolverEndpointIpAddressResponse
 */
export interface Route53ResolverAssociateResolverEndpointIpAddressResponse {
  /**
   * @schema Route53ResolverAssociateResolverEndpointIpAddressResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * @schema Route53ResolverAssociateResolverQueryLogConfigRequest
 */
export interface Route53ResolverAssociateResolverQueryLogConfigRequest {
  /**
   * @schema Route53ResolverAssociateResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId: string;

  /**
   * @schema Route53ResolverAssociateResolverQueryLogConfigRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema Route53ResolverAssociateResolverQueryLogConfigResponse
 */
export interface Route53ResolverAssociateResolverQueryLogConfigResponse {
  /**
   * @schema Route53ResolverAssociateResolverQueryLogConfigResponse#ResolverQueryLogConfigAssociation
   */
  readonly resolverQueryLogConfigAssociation?: Route53ResolverResolverQueryLogConfigAssociation;

}

/**
 * @schema Route53ResolverAssociateResolverRuleRequest
 */
export interface Route53ResolverAssociateResolverRuleRequest {
  /**
   * @schema Route53ResolverAssociateResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId: string;

  /**
   * @schema Route53ResolverAssociateResolverRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverAssociateResolverRuleRequest#VPCId
   */
  readonly vpcId: string;

}

/**
 * @schema Route53ResolverAssociateResolverRuleResponse
 */
export interface Route53ResolverAssociateResolverRuleResponse {
  /**
   * @schema Route53ResolverAssociateResolverRuleResponse#ResolverRuleAssociation
   */
  readonly resolverRuleAssociation?: Route53ResolverResolverRuleAssociation;

}

/**
 * @schema Route53ResolverCreateResolverEndpointRequest
 */
export interface Route53ResolverCreateResolverEndpointRequest {
  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#CreatorRequestId
   */
  readonly creatorRequestId: string;

  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#Direction
   */
  readonly direction: string;

  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#IpAddresses
   */
  readonly ipAddresses: Route53ResolverIpAddressRequest[];

  /**
   * @schema Route53ResolverCreateResolverEndpointRequest#Tags
   */
  readonly tags?: Route53ResolverTag[];

}

/**
 * @schema Route53ResolverCreateResolverEndpointResponse
 */
export interface Route53ResolverCreateResolverEndpointResponse {
  /**
   * @schema Route53ResolverCreateResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * @schema Route53ResolverCreateResolverQueryLogConfigRequest
 */
export interface Route53ResolverCreateResolverQueryLogConfigRequest {
  /**
   * @schema Route53ResolverCreateResolverQueryLogConfigRequest#Name
   */
  readonly name: string;

  /**
   * @schema Route53ResolverCreateResolverQueryLogConfigRequest#DestinationArn
   */
  readonly destinationArn: string;

  /**
   * @schema Route53ResolverCreateResolverQueryLogConfigRequest#CreatorRequestId
   */
  readonly creatorRequestId: string;

  /**
   * @schema Route53ResolverCreateResolverQueryLogConfigRequest#Tags
   */
  readonly tags?: Route53ResolverTag[];

}

/**
 * @schema Route53ResolverCreateResolverQueryLogConfigResponse
 */
export interface Route53ResolverCreateResolverQueryLogConfigResponse {
  /**
   * @schema Route53ResolverCreateResolverQueryLogConfigResponse#ResolverQueryLogConfig
   */
  readonly resolverQueryLogConfig?: Route53ResolverResolverQueryLogConfig;

}

/**
 * @schema Route53ResolverCreateResolverRuleRequest
 */
export interface Route53ResolverCreateResolverRuleRequest {
  /**
   * @schema Route53ResolverCreateResolverRuleRequest#CreatorRequestId
   */
  readonly creatorRequestId: string;

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#RuleType
   */
  readonly ruleType: string;

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#TargetIps
   */
  readonly targetIps?: Route53ResolverTargetAddress[];

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

  /**
   * @schema Route53ResolverCreateResolverRuleRequest#Tags
   */
  readonly tags?: Route53ResolverTag[];

}

/**
 * @schema Route53ResolverCreateResolverRuleResponse
 */
export interface Route53ResolverCreateResolverRuleResponse {
  /**
   * @schema Route53ResolverCreateResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: Route53ResolverResolverRule;

}

/**
 * @schema Route53ResolverDeleteResolverEndpointRequest
 */
export interface Route53ResolverDeleteResolverEndpointRequest {
  /**
   * @schema Route53ResolverDeleteResolverEndpointRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

}

/**
 * @schema Route53ResolverDeleteResolverEndpointResponse
 */
export interface Route53ResolverDeleteResolverEndpointResponse {
  /**
   * @schema Route53ResolverDeleteResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * @schema Route53ResolverDeleteResolverQueryLogConfigRequest
 */
export interface Route53ResolverDeleteResolverQueryLogConfigRequest {
  /**
   * @schema Route53ResolverDeleteResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId: string;

}

/**
 * @schema Route53ResolverDeleteResolverQueryLogConfigResponse
 */
export interface Route53ResolverDeleteResolverQueryLogConfigResponse {
  /**
   * @schema Route53ResolverDeleteResolverQueryLogConfigResponse#ResolverQueryLogConfig
   */
  readonly resolverQueryLogConfig?: Route53ResolverResolverQueryLogConfig;

}

/**
 * @schema Route53ResolverDeleteResolverRuleRequest
 */
export interface Route53ResolverDeleteResolverRuleRequest {
  /**
   * @schema Route53ResolverDeleteResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId: string;

}

/**
 * @schema Route53ResolverDeleteResolverRuleResponse
 */
export interface Route53ResolverDeleteResolverRuleResponse {
  /**
   * @schema Route53ResolverDeleteResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: Route53ResolverResolverRule;

}

/**
 * @schema Route53ResolverDisassociateResolverEndpointIpAddressRequest
 */
export interface Route53ResolverDisassociateResolverEndpointIpAddressRequest {
  /**
   * @schema Route53ResolverDisassociateResolverEndpointIpAddressRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

  /**
   * @schema Route53ResolverDisassociateResolverEndpointIpAddressRequest#IpAddress
   */
  readonly ipAddress: Route53ResolverIpAddressUpdate;

}

/**
 * @schema Route53ResolverDisassociateResolverEndpointIpAddressResponse
 */
export interface Route53ResolverDisassociateResolverEndpointIpAddressResponse {
  /**
   * @schema Route53ResolverDisassociateResolverEndpointIpAddressResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * @schema Route53ResolverDisassociateResolverQueryLogConfigRequest
 */
export interface Route53ResolverDisassociateResolverQueryLogConfigRequest {
  /**
   * @schema Route53ResolverDisassociateResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId: string;

  /**
   * @schema Route53ResolverDisassociateResolverQueryLogConfigRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema Route53ResolverDisassociateResolverQueryLogConfigResponse
 */
export interface Route53ResolverDisassociateResolverQueryLogConfigResponse {
  /**
   * @schema Route53ResolverDisassociateResolverQueryLogConfigResponse#ResolverQueryLogConfigAssociation
   */
  readonly resolverQueryLogConfigAssociation?: Route53ResolverResolverQueryLogConfigAssociation;

}

/**
 * @schema Route53ResolverDisassociateResolverRuleRequest
 */
export interface Route53ResolverDisassociateResolverRuleRequest {
  /**
   * @schema Route53ResolverDisassociateResolverRuleRequest#VPCId
   */
  readonly vpcId: string;

  /**
   * @schema Route53ResolverDisassociateResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId: string;

}

/**
 * @schema Route53ResolverDisassociateResolverRuleResponse
 */
export interface Route53ResolverDisassociateResolverRuleResponse {
  /**
   * @schema Route53ResolverDisassociateResolverRuleResponse#ResolverRuleAssociation
   */
  readonly resolverRuleAssociation?: Route53ResolverResolverRuleAssociation;

}

/**
 * @schema Route53ResolverGetResolverEndpointRequest
 */
export interface Route53ResolverGetResolverEndpointRequest {
  /**
   * @schema Route53ResolverGetResolverEndpointRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

}

/**
 * @schema Route53ResolverGetResolverEndpointResponse
 */
export interface Route53ResolverGetResolverEndpointResponse {
  /**
   * @schema Route53ResolverGetResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * @schema Route53ResolverGetResolverQueryLogConfigRequest
 */
export interface Route53ResolverGetResolverQueryLogConfigRequest {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId: string;

}

/**
 * @schema Route53ResolverGetResolverQueryLogConfigResponse
 */
export interface Route53ResolverGetResolverQueryLogConfigResponse {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigResponse#ResolverQueryLogConfig
   */
  readonly resolverQueryLogConfig?: Route53ResolverResolverQueryLogConfig;

}

/**
 * @schema Route53ResolverGetResolverQueryLogConfigAssociationRequest
 */
export interface Route53ResolverGetResolverQueryLogConfigAssociationRequest {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigAssociationRequest#ResolverQueryLogConfigAssociationId
   */
  readonly resolverQueryLogConfigAssociationId: string;

}

/**
 * @schema Route53ResolverGetResolverQueryLogConfigAssociationResponse
 */
export interface Route53ResolverGetResolverQueryLogConfigAssociationResponse {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigAssociationResponse#ResolverQueryLogConfigAssociation
   */
  readonly resolverQueryLogConfigAssociation?: Route53ResolverResolverQueryLogConfigAssociation;

}

/**
 * @schema Route53ResolverGetResolverQueryLogConfigPolicyRequest
 */
export interface Route53ResolverGetResolverQueryLogConfigPolicyRequest {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigPolicyRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema Route53ResolverGetResolverQueryLogConfigPolicyResponse
 */
export interface Route53ResolverGetResolverQueryLogConfigPolicyResponse {
  /**
   * @schema Route53ResolverGetResolverQueryLogConfigPolicyResponse#ResolverQueryLogConfigPolicy
   */
  readonly resolverQueryLogConfigPolicy?: string;

}

/**
 * @schema Route53ResolverGetResolverRuleRequest
 */
export interface Route53ResolverGetResolverRuleRequest {
  /**
   * @schema Route53ResolverGetResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId: string;

}

/**
 * @schema Route53ResolverGetResolverRuleResponse
 */
export interface Route53ResolverGetResolverRuleResponse {
  /**
   * @schema Route53ResolverGetResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: Route53ResolverResolverRule;

}

/**
 * @schema Route53ResolverGetResolverRuleAssociationRequest
 */
export interface Route53ResolverGetResolverRuleAssociationRequest {
  /**
   * @schema Route53ResolverGetResolverRuleAssociationRequest#ResolverRuleAssociationId
   */
  readonly resolverRuleAssociationId: string;

}

/**
 * @schema Route53ResolverGetResolverRuleAssociationResponse
 */
export interface Route53ResolverGetResolverRuleAssociationResponse {
  /**
   * @schema Route53ResolverGetResolverRuleAssociationResponse#ResolverRuleAssociation
   */
  readonly resolverRuleAssociation?: Route53ResolverResolverRuleAssociation;

}

/**
 * @schema Route53ResolverGetResolverRulePolicyRequest
 */
export interface Route53ResolverGetResolverRulePolicyRequest {
  /**
   * @schema Route53ResolverGetResolverRulePolicyRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema Route53ResolverGetResolverRulePolicyResponse
 */
export interface Route53ResolverGetResolverRulePolicyResponse {
  /**
   * @schema Route53ResolverGetResolverRulePolicyResponse#ResolverRulePolicy
   */
  readonly resolverRulePolicy?: string;

}

/**
 * @schema Route53ResolverListResolverEndpointIpAddressesRequest
 */
export interface Route53ResolverListResolverEndpointIpAddressesRequest {
  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Route53ResolverListResolverEndpointIpAddressesResponse
 */
export interface Route53ResolverListResolverEndpointIpAddressesResponse {
  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverEndpointIpAddressesResponse#IpAddresses
   */
  readonly ipAddresses?: Route53ResolverIpAddressResponse[];

}

/**
 * @schema Route53ResolverListResolverEndpointsRequest
 */
export interface Route53ResolverListResolverEndpointsRequest {
  /**
   * @schema Route53ResolverListResolverEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverEndpointsRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

}

/**
 * @schema Route53ResolverListResolverEndpointsResponse
 */
export interface Route53ResolverListResolverEndpointsResponse {
  /**
   * @schema Route53ResolverListResolverEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverEndpointsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverEndpointsResponse#ResolverEndpoints
   */
  readonly resolverEndpoints?: Route53ResolverResolverEndpoint[];

}

/**
 * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest
 */
export interface Route53ResolverListResolverQueryLogConfigAssociationsRequest {
  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema Route53ResolverListResolverQueryLogConfigAssociationsResponse
 */
export interface Route53ResolverListResolverQueryLogConfigAssociationsResponse {
  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsResponse#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsResponse#TotalFilteredCount
   */
  readonly totalFilteredCount?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigAssociationsResponse#ResolverQueryLogConfigAssociations
   */
  readonly resolverQueryLogConfigAssociations?: Route53ResolverResolverQueryLogConfigAssociation[];

}

/**
 * @schema Route53ResolverListResolverQueryLogConfigsRequest
 */
export interface Route53ResolverListResolverQueryLogConfigsRequest {
  /**
   * @schema Route53ResolverListResolverQueryLogConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema Route53ResolverListResolverQueryLogConfigsResponse
 */
export interface Route53ResolverListResolverQueryLogConfigsResponse {
  /**
   * @schema Route53ResolverListResolverQueryLogConfigsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsResponse#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsResponse#TotalFilteredCount
   */
  readonly totalFilteredCount?: number;

  /**
   * @schema Route53ResolverListResolverQueryLogConfigsResponse#ResolverQueryLogConfigs
   */
  readonly resolverQueryLogConfigs?: Route53ResolverResolverQueryLogConfig[];

}

/**
 * @schema Route53ResolverListResolverRuleAssociationsRequest
 */
export interface Route53ResolverListResolverRuleAssociationsRequest {
  /**
   * @schema Route53ResolverListResolverRuleAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverRuleAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverRuleAssociationsRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

}

/**
 * @schema Route53ResolverListResolverRuleAssociationsResponse
 */
export interface Route53ResolverListResolverRuleAssociationsResponse {
  /**
   * @schema Route53ResolverListResolverRuleAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverRuleAssociationsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverRuleAssociationsResponse#ResolverRuleAssociations
   */
  readonly resolverRuleAssociations?: Route53ResolverResolverRuleAssociation[];

}

/**
 * @schema Route53ResolverListResolverRulesRequest
 */
export interface Route53ResolverListResolverRulesRequest {
  /**
   * @schema Route53ResolverListResolverRulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverRulesRequest#Filters
   */
  readonly filters?: Route53ResolverFilter[];

}

/**
 * @schema Route53ResolverListResolverRulesResponse
 */
export interface Route53ResolverListResolverRulesResponse {
  /**
   * @schema Route53ResolverListResolverRulesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ResolverListResolverRulesResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListResolverRulesResponse#ResolverRules
   */
  readonly resolverRules?: Route53ResolverResolverRule[];

}

/**
 * @schema Route53ResolverListTagsForResourceRequest
 */
export interface Route53ResolverListTagsForResourceRequest {
  /**
   * @schema Route53ResolverListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Route53ResolverListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53ResolverListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Route53ResolverListTagsForResourceResponse
 */
export interface Route53ResolverListTagsForResourceResponse {
  /**
   * @schema Route53ResolverListTagsForResourceResponse#Tags
   */
  readonly tags?: Route53ResolverTag[];

  /**
   * @schema Route53ResolverListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Route53ResolverPutResolverQueryLogConfigPolicyRequest
 */
export interface Route53ResolverPutResolverQueryLogConfigPolicyRequest {
  /**
   * @schema Route53ResolverPutResolverQueryLogConfigPolicyRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema Route53ResolverPutResolverQueryLogConfigPolicyRequest#ResolverQueryLogConfigPolicy
   */
  readonly resolverQueryLogConfigPolicy: string;

}

/**
 * @schema Route53ResolverPutResolverQueryLogConfigPolicyResponse
 */
export interface Route53ResolverPutResolverQueryLogConfigPolicyResponse {
  /**
   * @schema Route53ResolverPutResolverQueryLogConfigPolicyResponse#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema Route53ResolverPutResolverRulePolicyRequest
 */
export interface Route53ResolverPutResolverRulePolicyRequest {
  /**
   * @schema Route53ResolverPutResolverRulePolicyRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema Route53ResolverPutResolverRulePolicyRequest#ResolverRulePolicy
   */
  readonly resolverRulePolicy: string;

}

/**
 * @schema Route53ResolverPutResolverRulePolicyResponse
 */
export interface Route53ResolverPutResolverRulePolicyResponse {
  /**
   * @schema Route53ResolverPutResolverRulePolicyResponse#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema Route53ResolverTagResourceRequest
 */
export interface Route53ResolverTagResourceRequest {
  /**
   * @schema Route53ResolverTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Route53ResolverTagResourceRequest#Tags
   */
  readonly tags: Route53ResolverTag[];

}

/**
 * @schema Route53ResolverTagResourceResponse
 */
export interface Route53ResolverTagResourceResponse {
}

/**
 * @schema Route53ResolverUntagResourceRequest
 */
export interface Route53ResolverUntagResourceRequest {
  /**
   * @schema Route53ResolverUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Route53ResolverUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema Route53ResolverUntagResourceResponse
 */
export interface Route53ResolverUntagResourceResponse {
}

/**
 * @schema Route53ResolverUpdateResolverEndpointRequest
 */
export interface Route53ResolverUpdateResolverEndpointRequest {
  /**
   * @schema Route53ResolverUpdateResolverEndpointRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

  /**
   * @schema Route53ResolverUpdateResolverEndpointRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema Route53ResolverUpdateResolverEndpointResponse
 */
export interface Route53ResolverUpdateResolverEndpointResponse {
  /**
   * @schema Route53ResolverUpdateResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: Route53ResolverResolverEndpoint;

}

/**
 * @schema Route53ResolverUpdateResolverRuleRequest
 */
export interface Route53ResolverUpdateResolverRuleRequest {
  /**
   * @schema Route53ResolverUpdateResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId: string;

  /**
   * @schema Route53ResolverUpdateResolverRuleRequest#Config
   */
  readonly config: Route53ResolverResolverRuleConfig;

}

/**
 * @schema Route53ResolverUpdateResolverRuleResponse
 */
export interface Route53ResolverUpdateResolverRuleResponse {
  /**
   * @schema Route53ResolverUpdateResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: Route53ResolverResolverRule;

}

/**
 * @schema Route53ResolverIpAddressUpdate
 */
export interface Route53ResolverIpAddressUpdate {
  /**
   * @schema Route53ResolverIpAddressUpdate#IpId
   */
  readonly ipId?: string;

  /**
   * @schema Route53ResolverIpAddressUpdate#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Route53ResolverIpAddressUpdate#Ip
   */
  readonly ip?: string;

}

/**
 * @schema Route53ResolverResolverEndpoint
 */
export interface Route53ResolverResolverEndpoint {
  /**
   * @schema Route53ResolverResolverEndpoint#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Route53ResolverResolverEndpoint#Direction
   */
  readonly direction?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#IpAddressCount
   */
  readonly ipAddressCount?: number;

  /**
   * @schema Route53ResolverResolverEndpoint#HostVPCId
   */
  readonly hostVpcId?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Route53ResolverResolverEndpoint#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * @schema Route53ResolverResolverQueryLogConfigAssociation
 */
export interface Route53ResolverResolverQueryLogConfigAssociation {
  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#Error
   */
  readonly error?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfigAssociation#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema Route53ResolverResolverRuleAssociation
 */
export interface Route53ResolverResolverRuleAssociation {
  /**
   * @schema Route53ResolverResolverRuleAssociation#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverRuleAssociation#ResolverRuleId
   */
  readonly resolverRuleId?: string;

  /**
   * @schema Route53ResolverResolverRuleAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverResolverRuleAssociation#VPCId
   */
  readonly vpcId?: string;

  /**
   * @schema Route53ResolverResolverRuleAssociation#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverResolverRuleAssociation#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema Route53ResolverIpAddressRequest
 */
export interface Route53ResolverIpAddressRequest {
  /**
   * @schema Route53ResolverIpAddressRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema Route53ResolverIpAddressRequest#Ip
   */
  readonly ip?: string;

}

/**
 * @schema Route53ResolverTag
 */
export interface Route53ResolverTag {
  /**
   * @schema Route53ResolverTag#Key
   */
  readonly key: string;

  /**
   * @schema Route53ResolverTag#Value
   */
  readonly value: string;

}

/**
 * @schema Route53ResolverResolverQueryLogConfig
 */
export interface Route53ResolverResolverQueryLogConfig {
  /**
   * @schema Route53ResolverResolverQueryLogConfig#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#ShareStatus
   */
  readonly shareStatus?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#AssociationCount
   */
  readonly associationCount?: number;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#DestinationArn
   */
  readonly destinationArn?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverResolverQueryLogConfig#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema Route53ResolverTargetAddress
 */
export interface Route53ResolverTargetAddress {
  /**
   * @schema Route53ResolverTargetAddress#Ip
   */
  readonly ip: string;

  /**
   * @schema Route53ResolverTargetAddress#Port
   */
  readonly port?: number;

}

/**
 * @schema Route53ResolverResolverRule
 */
export interface Route53ResolverResolverRule {
  /**
   * @schema Route53ResolverResolverRule#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ResolverResolverRule#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Route53ResolverResolverRule#Arn
   */
  readonly arn?: string;

  /**
   * @schema Route53ResolverResolverRule#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53ResolverResolverRule#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverResolverRule#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Route53ResolverResolverRule#RuleType
   */
  readonly ruleType?: string;

  /**
   * @schema Route53ResolverResolverRule#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverResolverRule#TargetIps
   */
  readonly targetIps?: Route53ResolverTargetAddress[];

  /**
   * @schema Route53ResolverResolverRule#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

  /**
   * @schema Route53ResolverResolverRule#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Route53ResolverResolverRule#ShareStatus
   */
  readonly shareStatus?: string;

  /**
   * @schema Route53ResolverResolverRule#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Route53ResolverResolverRule#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * @schema Route53ResolverIpAddressResponse
 */
export interface Route53ResolverIpAddressResponse {
  /**
   * @schema Route53ResolverIpAddressResponse#IpId
   */
  readonly ipId?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#Ip
   */
  readonly ip?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Route53ResolverIpAddressResponse#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * @schema Route53ResolverFilter
 */
export interface Route53ResolverFilter {
  /**
   * @schema Route53ResolverFilter#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema Route53ResolverResolverRuleConfig
 */
export interface Route53ResolverResolverRuleConfig {
  /**
   * @schema Route53ResolverResolverRuleConfig#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResolverResolverRuleConfig#TargetIps
   */
  readonly targetIps?: Route53ResolverTargetAddress[];

  /**
   * @schema Route53ResolverResolverRuleConfig#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

}
