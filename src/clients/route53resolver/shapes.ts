/**
 * @schema AssociateResolverEndpointIpAddressRequest
 */
export interface AssociateResolverEndpointIpAddressRequest {
  /**
   * @schema AssociateResolverEndpointIpAddressRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

  /**
   * @schema AssociateResolverEndpointIpAddressRequest#IpAddress
   */
  readonly ipAddress: IpAddressUpdate;

}

/**
 * @schema AssociateResolverEndpointIpAddressResponse
 */
export interface AssociateResolverEndpointIpAddressResponse {
  /**
   * @schema AssociateResolverEndpointIpAddressResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: ResolverEndpoint;

}

/**
 * @schema AssociateResolverQueryLogConfigRequest
 */
export interface AssociateResolverQueryLogConfigRequest {
  /**
   * @schema AssociateResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId: string;

  /**
   * @schema AssociateResolverQueryLogConfigRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema AssociateResolverQueryLogConfigResponse
 */
export interface AssociateResolverQueryLogConfigResponse {
  /**
   * @schema AssociateResolverQueryLogConfigResponse#ResolverQueryLogConfigAssociation
   */
  readonly resolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;

}

/**
 * @schema AssociateResolverRuleRequest
 */
export interface AssociateResolverRuleRequest {
  /**
   * @schema AssociateResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId: string;

  /**
   * @schema AssociateResolverRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AssociateResolverRuleRequest#VPCId
   */
  readonly vpcId: string;

}

/**
 * @schema AssociateResolverRuleResponse
 */
export interface AssociateResolverRuleResponse {
  /**
   * @schema AssociateResolverRuleResponse#ResolverRuleAssociation
   */
  readonly resolverRuleAssociation?: ResolverRuleAssociation;

}

/**
 * @schema CreateResolverEndpointRequest
 */
export interface CreateResolverEndpointRequest {
  /**
   * @schema CreateResolverEndpointRequest#CreatorRequestId
   */
  readonly creatorRequestId: string;

  /**
   * @schema CreateResolverEndpointRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateResolverEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema CreateResolverEndpointRequest#Direction
   */
  readonly direction: string;

  /**
   * @schema CreateResolverEndpointRequest#IpAddresses
   */
  readonly ipAddresses: IpAddressRequest[];

  /**
   * @schema CreateResolverEndpointRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateResolverEndpointResponse
 */
export interface CreateResolverEndpointResponse {
  /**
   * @schema CreateResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: ResolverEndpoint;

}

/**
 * @schema CreateResolverQueryLogConfigRequest
 */
export interface CreateResolverQueryLogConfigRequest {
  /**
   * @schema CreateResolverQueryLogConfigRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateResolverQueryLogConfigRequest#DestinationArn
   */
  readonly destinationArn: string;

  /**
   * @schema CreateResolverQueryLogConfigRequest#CreatorRequestId
   */
  readonly creatorRequestId: string;

  /**
   * @schema CreateResolverQueryLogConfigRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateResolverQueryLogConfigResponse
 */
export interface CreateResolverQueryLogConfigResponse {
  /**
   * @schema CreateResolverQueryLogConfigResponse#ResolverQueryLogConfig
   */
  readonly resolverQueryLogConfig?: ResolverQueryLogConfig;

}

/**
 * @schema CreateResolverRuleRequest
 */
export interface CreateResolverRuleRequest {
  /**
   * @schema CreateResolverRuleRequest#CreatorRequestId
   */
  readonly creatorRequestId: string;

  /**
   * @schema CreateResolverRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateResolverRuleRequest#RuleType
   */
  readonly ruleType: string;

  /**
   * @schema CreateResolverRuleRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CreateResolverRuleRequest#TargetIps
   */
  readonly targetIps?: TargetAddress[];

  /**
   * @schema CreateResolverRuleRequest#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

  /**
   * @schema CreateResolverRuleRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateResolverRuleResponse
 */
export interface CreateResolverRuleResponse {
  /**
   * @schema CreateResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: ResolverRule;

}

/**
 * @schema DeleteResolverEndpointRequest
 */
export interface DeleteResolverEndpointRequest {
  /**
   * @schema DeleteResolverEndpointRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

}

/**
 * @schema DeleteResolverEndpointResponse
 */
export interface DeleteResolverEndpointResponse {
  /**
   * @schema DeleteResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: ResolverEndpoint;

}

/**
 * @schema DeleteResolverQueryLogConfigRequest
 */
export interface DeleteResolverQueryLogConfigRequest {
  /**
   * @schema DeleteResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId: string;

}

/**
 * @schema DeleteResolverQueryLogConfigResponse
 */
export interface DeleteResolverQueryLogConfigResponse {
  /**
   * @schema DeleteResolverQueryLogConfigResponse#ResolverQueryLogConfig
   */
  readonly resolverQueryLogConfig?: ResolverQueryLogConfig;

}

/**
 * @schema DeleteResolverRuleRequest
 */
export interface DeleteResolverRuleRequest {
  /**
   * @schema DeleteResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId: string;

}

/**
 * @schema DeleteResolverRuleResponse
 */
export interface DeleteResolverRuleResponse {
  /**
   * @schema DeleteResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: ResolverRule;

}

/**
 * @schema DisassociateResolverEndpointIpAddressRequest
 */
export interface DisassociateResolverEndpointIpAddressRequest {
  /**
   * @schema DisassociateResolverEndpointIpAddressRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

  /**
   * @schema DisassociateResolverEndpointIpAddressRequest#IpAddress
   */
  readonly ipAddress: IpAddressUpdate;

}

/**
 * @schema DisassociateResolverEndpointIpAddressResponse
 */
export interface DisassociateResolverEndpointIpAddressResponse {
  /**
   * @schema DisassociateResolverEndpointIpAddressResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: ResolverEndpoint;

}

/**
 * @schema DisassociateResolverQueryLogConfigRequest
 */
export interface DisassociateResolverQueryLogConfigRequest {
  /**
   * @schema DisassociateResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId: string;

  /**
   * @schema DisassociateResolverQueryLogConfigRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema DisassociateResolverQueryLogConfigResponse
 */
export interface DisassociateResolverQueryLogConfigResponse {
  /**
   * @schema DisassociateResolverQueryLogConfigResponse#ResolverQueryLogConfigAssociation
   */
  readonly resolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;

}

/**
 * @schema DisassociateResolverRuleRequest
 */
export interface DisassociateResolverRuleRequest {
  /**
   * @schema DisassociateResolverRuleRequest#VPCId
   */
  readonly vpcId: string;

  /**
   * @schema DisassociateResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId: string;

}

/**
 * @schema DisassociateResolverRuleResponse
 */
export interface DisassociateResolverRuleResponse {
  /**
   * @schema DisassociateResolverRuleResponse#ResolverRuleAssociation
   */
  readonly resolverRuleAssociation?: ResolverRuleAssociation;

}

/**
 * @schema GetResolverEndpointRequest
 */
export interface GetResolverEndpointRequest {
  /**
   * @schema GetResolverEndpointRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

}

/**
 * @schema GetResolverEndpointResponse
 */
export interface GetResolverEndpointResponse {
  /**
   * @schema GetResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: ResolverEndpoint;

}

/**
 * @schema GetResolverQueryLogConfigRequest
 */
export interface GetResolverQueryLogConfigRequest {
  /**
   * @schema GetResolverQueryLogConfigRequest#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId: string;

}

/**
 * @schema GetResolverQueryLogConfigResponse
 */
export interface GetResolverQueryLogConfigResponse {
  /**
   * @schema GetResolverQueryLogConfigResponse#ResolverQueryLogConfig
   */
  readonly resolverQueryLogConfig?: ResolverQueryLogConfig;

}

/**
 * @schema GetResolverQueryLogConfigAssociationRequest
 */
export interface GetResolverQueryLogConfigAssociationRequest {
  /**
   * @schema GetResolverQueryLogConfigAssociationRequest#ResolverQueryLogConfigAssociationId
   */
  readonly resolverQueryLogConfigAssociationId: string;

}

/**
 * @schema GetResolverQueryLogConfigAssociationResponse
 */
export interface GetResolverQueryLogConfigAssociationResponse {
  /**
   * @schema GetResolverQueryLogConfigAssociationResponse#ResolverQueryLogConfigAssociation
   */
  readonly resolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;

}

/**
 * @schema GetResolverQueryLogConfigPolicyRequest
 */
export interface GetResolverQueryLogConfigPolicyRequest {
  /**
   * @schema GetResolverQueryLogConfigPolicyRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema GetResolverQueryLogConfigPolicyResponse
 */
export interface GetResolverQueryLogConfigPolicyResponse {
  /**
   * @schema GetResolverQueryLogConfigPolicyResponse#ResolverQueryLogConfigPolicy
   */
  readonly resolverQueryLogConfigPolicy?: string;

}

/**
 * @schema GetResolverRuleRequest
 */
export interface GetResolverRuleRequest {
  /**
   * @schema GetResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId: string;

}

/**
 * @schema GetResolverRuleResponse
 */
export interface GetResolverRuleResponse {
  /**
   * @schema GetResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: ResolverRule;

}

/**
 * @schema GetResolverRuleAssociationRequest
 */
export interface GetResolverRuleAssociationRequest {
  /**
   * @schema GetResolverRuleAssociationRequest#ResolverRuleAssociationId
   */
  readonly resolverRuleAssociationId: string;

}

/**
 * @schema GetResolverRuleAssociationResponse
 */
export interface GetResolverRuleAssociationResponse {
  /**
   * @schema GetResolverRuleAssociationResponse#ResolverRuleAssociation
   */
  readonly resolverRuleAssociation?: ResolverRuleAssociation;

}

/**
 * @schema GetResolverRulePolicyRequest
 */
export interface GetResolverRulePolicyRequest {
  /**
   * @schema GetResolverRulePolicyRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema GetResolverRulePolicyResponse
 */
export interface GetResolverRulePolicyResponse {
  /**
   * @schema GetResolverRulePolicyResponse#ResolverRulePolicy
   */
  readonly resolverRulePolicy?: string;

}

/**
 * @schema ListResolverEndpointIpAddressesRequest
 */
export interface ListResolverEndpointIpAddressesRequest {
  /**
   * @schema ListResolverEndpointIpAddressesRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

  /**
   * @schema ListResolverEndpointIpAddressesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResolverEndpointIpAddressesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResolverEndpointIpAddressesResponse
 */
export interface ListResolverEndpointIpAddressesResponse {
  /**
   * @schema ListResolverEndpointIpAddressesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverEndpointIpAddressesResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResolverEndpointIpAddressesResponse#IpAddresses
   */
  readonly ipAddresses?: IpAddressResponse[];

}

/**
 * @schema ListResolverEndpointsRequest
 */
export interface ListResolverEndpointsRequest {
  /**
   * @schema ListResolverEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResolverEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverEndpointsRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListResolverEndpointsResponse
 */
export interface ListResolverEndpointsResponse {
  /**
   * @schema ListResolverEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverEndpointsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResolverEndpointsResponse#ResolverEndpoints
   */
  readonly resolverEndpoints?: ResolverEndpoint[];

}

/**
 * @schema ListResolverQueryLogConfigAssociationsRequest
 */
export interface ListResolverQueryLogConfigAssociationsRequest {
  /**
   * @schema ListResolverQueryLogConfigAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResolverQueryLogConfigAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverQueryLogConfigAssociationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListResolverQueryLogConfigAssociationsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListResolverQueryLogConfigAssociationsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListResolverQueryLogConfigAssociationsResponse
 */
export interface ListResolverQueryLogConfigAssociationsResponse {
  /**
   * @schema ListResolverQueryLogConfigAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverQueryLogConfigAssociationsResponse#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema ListResolverQueryLogConfigAssociationsResponse#TotalFilteredCount
   */
  readonly totalFilteredCount?: number;

  /**
   * @schema ListResolverQueryLogConfigAssociationsResponse#ResolverQueryLogConfigAssociations
   */
  readonly resolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociation[];

}

/**
 * @schema ListResolverQueryLogConfigsRequest
 */
export interface ListResolverQueryLogConfigsRequest {
  /**
   * @schema ListResolverQueryLogConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResolverQueryLogConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverQueryLogConfigsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListResolverQueryLogConfigsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListResolverQueryLogConfigsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListResolverQueryLogConfigsResponse
 */
export interface ListResolverQueryLogConfigsResponse {
  /**
   * @schema ListResolverQueryLogConfigsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverQueryLogConfigsResponse#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema ListResolverQueryLogConfigsResponse#TotalFilteredCount
   */
  readonly totalFilteredCount?: number;

  /**
   * @schema ListResolverQueryLogConfigsResponse#ResolverQueryLogConfigs
   */
  readonly resolverQueryLogConfigs?: ResolverQueryLogConfig[];

}

/**
 * @schema ListResolverRuleAssociationsRequest
 */
export interface ListResolverRuleAssociationsRequest {
  /**
   * @schema ListResolverRuleAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResolverRuleAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverRuleAssociationsRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListResolverRuleAssociationsResponse
 */
export interface ListResolverRuleAssociationsResponse {
  /**
   * @schema ListResolverRuleAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverRuleAssociationsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResolverRuleAssociationsResponse#ResolverRuleAssociations
   */
  readonly resolverRuleAssociations?: ResolverRuleAssociation[];

}

/**
 * @schema ListResolverRulesRequest
 */
export interface ListResolverRulesRequest {
  /**
   * @schema ListResolverRulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResolverRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverRulesRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListResolverRulesResponse
 */
export interface ListResolverRulesResponse {
  /**
   * @schema ListResolverRulesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolverRulesResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResolverRulesResponse#ResolverRules
   */
  readonly resolverRules?: ResolverRule[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutResolverQueryLogConfigPolicyRequest
 */
export interface PutResolverQueryLogConfigPolicyRequest {
  /**
   * @schema PutResolverQueryLogConfigPolicyRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema PutResolverQueryLogConfigPolicyRequest#ResolverQueryLogConfigPolicy
   */
  readonly resolverQueryLogConfigPolicy: string;

}

/**
 * @schema PutResolverQueryLogConfigPolicyResponse
 */
export interface PutResolverQueryLogConfigPolicyResponse {
  /**
   * @schema PutResolverQueryLogConfigPolicyResponse#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema PutResolverRulePolicyRequest
 */
export interface PutResolverRulePolicyRequest {
  /**
   * @schema PutResolverRulePolicyRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema PutResolverRulePolicyRequest#ResolverRulePolicy
   */
  readonly resolverRulePolicy: string;

}

/**
 * @schema PutResolverRulePolicyResponse
 */
export interface PutResolverRulePolicyResponse {
  /**
   * @schema PutResolverRulePolicyResponse#ReturnValue
   */
  readonly returnValue?: boolean;

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
 * @schema UpdateResolverEndpointRequest
 */
export interface UpdateResolverEndpointRequest {
  /**
   * @schema UpdateResolverEndpointRequest#ResolverEndpointId
   */
  readonly resolverEndpointId: string;

  /**
   * @schema UpdateResolverEndpointRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateResolverEndpointResponse
 */
export interface UpdateResolverEndpointResponse {
  /**
   * @schema UpdateResolverEndpointResponse#ResolverEndpoint
   */
  readonly resolverEndpoint?: ResolverEndpoint;

}

/**
 * @schema UpdateResolverRuleRequest
 */
export interface UpdateResolverRuleRequest {
  /**
   * @schema UpdateResolverRuleRequest#ResolverRuleId
   */
  readonly resolverRuleId: string;

  /**
   * @schema UpdateResolverRuleRequest#Config
   */
  readonly config: ResolverRuleConfig;

}

/**
 * @schema UpdateResolverRuleResponse
 */
export interface UpdateResolverRuleResponse {
  /**
   * @schema UpdateResolverRuleResponse#ResolverRule
   */
  readonly resolverRule?: ResolverRule;

}

/**
 * @schema IpAddressUpdate
 */
export interface IpAddressUpdate {
  /**
   * @schema IpAddressUpdate#IpId
   */
  readonly ipId?: string;

  /**
   * @schema IpAddressUpdate#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema IpAddressUpdate#Ip
   */
  readonly ip?: string;

}

/**
 * @schema ResolverEndpoint
 */
export interface ResolverEndpoint {
  /**
   * @schema ResolverEndpoint#Id
   */
  readonly id?: string;

  /**
   * @schema ResolverEndpoint#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema ResolverEndpoint#Arn
   */
  readonly arn?: string;

  /**
   * @schema ResolverEndpoint#Name
   */
  readonly name?: string;

  /**
   * @schema ResolverEndpoint#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ResolverEndpoint#Direction
   */
  readonly direction?: string;

  /**
   * @schema ResolverEndpoint#IpAddressCount
   */
  readonly ipAddressCount?: number;

  /**
   * @schema ResolverEndpoint#HostVPCId
   */
  readonly hostVpcId?: string;

  /**
   * @schema ResolverEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema ResolverEndpoint#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ResolverEndpoint#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ResolverEndpoint#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * @schema ResolverQueryLogConfigAssociation
 */
export interface ResolverQueryLogConfigAssociation {
  /**
   * @schema ResolverQueryLogConfigAssociation#Id
   */
  readonly id?: string;

  /**
   * @schema ResolverQueryLogConfigAssociation#ResolverQueryLogConfigId
   */
  readonly resolverQueryLogConfigId?: string;

  /**
   * @schema ResolverQueryLogConfigAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ResolverQueryLogConfigAssociation#Status
   */
  readonly status?: string;

  /**
   * @schema ResolverQueryLogConfigAssociation#Error
   */
  readonly error?: string;

  /**
   * @schema ResolverQueryLogConfigAssociation#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema ResolverQueryLogConfigAssociation#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema ResolverRuleAssociation
 */
export interface ResolverRuleAssociation {
  /**
   * @schema ResolverRuleAssociation#Id
   */
  readonly id?: string;

  /**
   * @schema ResolverRuleAssociation#ResolverRuleId
   */
  readonly resolverRuleId?: string;

  /**
   * @schema ResolverRuleAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema ResolverRuleAssociation#VPCId
   */
  readonly vpcId?: string;

  /**
   * @schema ResolverRuleAssociation#Status
   */
  readonly status?: string;

  /**
   * @schema ResolverRuleAssociation#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema IpAddressRequest
 */
export interface IpAddressRequest {
  /**
   * @schema IpAddressRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema IpAddressRequest#Ip
   */
  readonly ip?: string;

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
 * @schema ResolverQueryLogConfig
 */
export interface ResolverQueryLogConfig {
  /**
   * @schema ResolverQueryLogConfig#Id
   */
  readonly id?: string;

  /**
   * @schema ResolverQueryLogConfig#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema ResolverQueryLogConfig#Status
   */
  readonly status?: string;

  /**
   * @schema ResolverQueryLogConfig#ShareStatus
   */
  readonly shareStatus?: string;

  /**
   * @schema ResolverQueryLogConfig#AssociationCount
   */
  readonly associationCount?: number;

  /**
   * @schema ResolverQueryLogConfig#Arn
   */
  readonly arn?: string;

  /**
   * @schema ResolverQueryLogConfig#Name
   */
  readonly name?: string;

  /**
   * @schema ResolverQueryLogConfig#DestinationArn
   */
  readonly destinationArn?: string;

  /**
   * @schema ResolverQueryLogConfig#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema ResolverQueryLogConfig#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema TargetAddress
 */
export interface TargetAddress {
  /**
   * @schema TargetAddress#Ip
   */
  readonly ip: string;

  /**
   * @schema TargetAddress#Port
   */
  readonly port?: number;

}

/**
 * @schema ResolverRule
 */
export interface ResolverRule {
  /**
   * @schema ResolverRule#Id
   */
  readonly id?: string;

  /**
   * @schema ResolverRule#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema ResolverRule#Arn
   */
  readonly arn?: string;

  /**
   * @schema ResolverRule#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ResolverRule#Status
   */
  readonly status?: string;

  /**
   * @schema ResolverRule#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ResolverRule#RuleType
   */
  readonly ruleType?: string;

  /**
   * @schema ResolverRule#Name
   */
  readonly name?: string;

  /**
   * @schema ResolverRule#TargetIps
   */
  readonly targetIps?: TargetAddress[];

  /**
   * @schema ResolverRule#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

  /**
   * @schema ResolverRule#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema ResolverRule#ShareStatus
   */
  readonly shareStatus?: string;

  /**
   * @schema ResolverRule#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ResolverRule#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * @schema IpAddressResponse
 */
export interface IpAddressResponse {
  /**
   * @schema IpAddressResponse#IpId
   */
  readonly ipId?: string;

  /**
   * @schema IpAddressResponse#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema IpAddressResponse#Ip
   */
  readonly ip?: string;

  /**
   * @schema IpAddressResponse#Status
   */
  readonly status?: string;

  /**
   * @schema IpAddressResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema IpAddressResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IpAddressResponse#ModificationTime
   */
  readonly modificationTime?: string;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name?: string;

  /**
   * @schema Filter#Values
   */
  readonly values?: string[];

}

/**
 * @schema ResolverRuleConfig
 */
export interface ResolverRuleConfig {
  /**
   * @schema ResolverRuleConfig#Name
   */
  readonly name?: string;

  /**
   * @schema ResolverRuleConfig#TargetIps
   */
  readonly targetIps?: TargetAddress[];

  /**
   * @schema ResolverRuleConfig#ResolverEndpointId
   */
  readonly resolverEndpointId?: string;

}
