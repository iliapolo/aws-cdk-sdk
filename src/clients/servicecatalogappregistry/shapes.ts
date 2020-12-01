/**
 * @schema AssociateAttributeGroupRequest
 */
export interface AssociateAttributeGroupRequest {
  /**
   * @schema AssociateAttributeGroupRequest#application
   */
  readonly application: string;

  /**
   * @schema AssociateAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * @schema AssociateAttributeGroupResponse
 */
export interface AssociateAttributeGroupResponse {
  /**
   * @schema AssociateAttributeGroupResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema AssociateAttributeGroupResponse#attributeGroupArn
   */
  readonly attributeGroupArn?: string;

}

/**
 * @schema AssociateResourceRequest
 */
export interface AssociateResourceRequest {
  /**
   * @schema AssociateResourceRequest#application
   */
  readonly application: string;

  /**
   * @schema AssociateResourceRequest#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema AssociateResourceRequest#resource
   */
  readonly resource: string;

}

/**
 * @schema AssociateResourceResponse
 */
export interface AssociateResourceResponse {
  /**
   * @schema AssociateResourceResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema AssociateResourceResponse#resourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema CreateApplicationRequest
 */
export interface CreateApplicationRequest {
  /**
   * @schema CreateApplicationRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateApplicationRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateApplicationRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateApplicationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CreateApplicationResponse
 */
export interface CreateApplicationResponse {
  /**
   * @schema CreateApplicationResponse#application
   */
  readonly application?: Application;

}

/**
 * @schema CreateAttributeGroupRequest
 */
export interface CreateAttributeGroupRequest {
  /**
   * @schema CreateAttributeGroupRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateAttributeGroupRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateAttributeGroupRequest#attributes
   */
  readonly attributes: string;

  /**
   * @schema CreateAttributeGroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateAttributeGroupRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CreateAttributeGroupResponse
 */
export interface CreateAttributeGroupResponse {
  /**
   * @schema CreateAttributeGroupResponse#attributeGroup
   */
  readonly attributeGroup?: AttributeGroup;

}

/**
 * @schema DeleteApplicationRequest
 */
export interface DeleteApplicationRequest {
  /**
   * @schema DeleteApplicationRequest#application
   */
  readonly application: string;

}

/**
 * @schema DeleteApplicationResponse
 */
export interface DeleteApplicationResponse {
  /**
   * @schema DeleteApplicationResponse#application
   */
  readonly application?: ApplicationSummary;

}

/**
 * @schema DeleteAttributeGroupRequest
 */
export interface DeleteAttributeGroupRequest {
  /**
   * @schema DeleteAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * @schema DeleteAttributeGroupResponse
 */
export interface DeleteAttributeGroupResponse {
  /**
   * @schema DeleteAttributeGroupResponse#attributeGroup
   */
  readonly attributeGroup?: AttributeGroupSummary;

}

/**
 * @schema DisassociateAttributeGroupRequest
 */
export interface DisassociateAttributeGroupRequest {
  /**
   * @schema DisassociateAttributeGroupRequest#application
   */
  readonly application: string;

  /**
   * @schema DisassociateAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * @schema DisassociateAttributeGroupResponse
 */
export interface DisassociateAttributeGroupResponse {
  /**
   * @schema DisassociateAttributeGroupResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema DisassociateAttributeGroupResponse#attributeGroupArn
   */
  readonly attributeGroupArn?: string;

}

/**
 * @schema DisassociateResourceRequest
 */
export interface DisassociateResourceRequest {
  /**
   * @schema DisassociateResourceRequest#application
   */
  readonly application: string;

  /**
   * @schema DisassociateResourceRequest#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema DisassociateResourceRequest#resource
   */
  readonly resource: string;

}

/**
 * @schema DisassociateResourceResponse
 */
export interface DisassociateResourceResponse {
  /**
   * @schema DisassociateResourceResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema DisassociateResourceResponse#resourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema GetApplicationRequest
 */
export interface GetApplicationRequest {
  /**
   * @schema GetApplicationRequest#application
   */
  readonly application: string;

}

/**
 * @schema GetApplicationResponse
 */
export interface GetApplicationResponse {
  /**
   * @schema GetApplicationResponse#id
   */
  readonly id?: string;

  /**
   * @schema GetApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema GetApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema GetApplicationResponse#description
   */
  readonly description?: string;

  /**
   * @schema GetApplicationResponse#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GetApplicationResponse#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema GetApplicationResponse#associatedResourceCount
   */
  readonly associatedResourceCount?: number;

  /**
   * @schema GetApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetAttributeGroupRequest
 */
export interface GetAttributeGroupRequest {
  /**
   * @schema GetAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * @schema GetAttributeGroupResponse
 */
export interface GetAttributeGroupResponse {
  /**
   * @schema GetAttributeGroupResponse#id
   */
  readonly id?: string;

  /**
   * @schema GetAttributeGroupResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema GetAttributeGroupResponse#name
   */
  readonly name?: string;

  /**
   * @schema GetAttributeGroupResponse#description
   */
  readonly description?: string;

  /**
   * @schema GetAttributeGroupResponse#attributes
   */
  readonly attributes?: string;

  /**
   * @schema GetAttributeGroupResponse#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GetAttributeGroupResponse#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema GetAttributeGroupResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListApplicationsRequest
 */
export interface ListApplicationsRequest {
  /**
   * @schema ListApplicationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListApplicationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListApplicationsResponse
 */
export interface ListApplicationsResponse {
  /**
   * @schema ListApplicationsResponse#applications
   */
  readonly applications?: ApplicationSummary[];

  /**
   * @schema ListApplicationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociatedAttributeGroupsRequest
 */
export interface ListAssociatedAttributeGroupsRequest {
  /**
   * @schema ListAssociatedAttributeGroupsRequest#application
   */
  readonly application: string;

  /**
   * @schema ListAssociatedAttributeGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssociatedAttributeGroupsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAssociatedAttributeGroupsResponse
 */
export interface ListAssociatedAttributeGroupsResponse {
  /**
   * @schema ListAssociatedAttributeGroupsResponse#attributeGroups
   */
  readonly attributeGroups?: string[];

  /**
   * @schema ListAssociatedAttributeGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociatedResourcesRequest
 */
export interface ListAssociatedResourcesRequest {
  /**
   * @schema ListAssociatedResourcesRequest#application
   */
  readonly application: string;

  /**
   * @schema ListAssociatedResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssociatedResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAssociatedResourcesResponse
 */
export interface ListAssociatedResourcesResponse {
  /**
   * @schema ListAssociatedResourcesResponse#resources
   */
  readonly resources?: ResourceInfo[];

  /**
   * @schema ListAssociatedResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAttributeGroupsRequest
 */
export interface ListAttributeGroupsRequest {
  /**
   * @schema ListAttributeGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAttributeGroupsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAttributeGroupsResponse
 */
export interface ListAttributeGroupsResponse {
  /**
   * @schema ListAttributeGroupsResponse#attributeGroups
   */
  readonly attributeGroups?: AttributeGroupSummary[];

  /**
   * @schema ListAttributeGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema UpdateApplicationRequest
 */
export interface UpdateApplicationRequest {
  /**
   * @schema UpdateApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema UpdateApplicationRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateApplicationRequest#description
   */
  readonly description?: string;

}

/**
 * @schema UpdateApplicationResponse
 */
export interface UpdateApplicationResponse {
  /**
   * @schema UpdateApplicationResponse#application
   */
  readonly application?: Application;

}

/**
 * @schema UpdateAttributeGroupRequest
 */
export interface UpdateAttributeGroupRequest {
  /**
   * @schema UpdateAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

  /**
   * @schema UpdateAttributeGroupRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateAttributeGroupRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateAttributeGroupRequest#attributes
   */
  readonly attributes?: string;

}

/**
 * @schema UpdateAttributeGroupResponse
 */
export interface UpdateAttributeGroupResponse {
  /**
   * @schema UpdateAttributeGroupResponse#attributeGroup
   */
  readonly attributeGroup?: AttributeGroup;

}

/**
 * @schema Application
 */
export interface Application {
  /**
   * @schema Application#id
   */
  readonly id?: string;

  /**
   * @schema Application#arn
   */
  readonly arn?: string;

  /**
   * @schema Application#name
   */
  readonly name?: string;

  /**
   * @schema Application#description
   */
  readonly description?: string;

  /**
   * @schema Application#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Application#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema Application#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AttributeGroup
 */
export interface AttributeGroup {
  /**
   * @schema AttributeGroup#id
   */
  readonly id?: string;

  /**
   * @schema AttributeGroup#arn
   */
  readonly arn?: string;

  /**
   * @schema AttributeGroup#name
   */
  readonly name?: string;

  /**
   * @schema AttributeGroup#description
   */
  readonly description?: string;

  /**
   * @schema AttributeGroup#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema AttributeGroup#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema AttributeGroup#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ApplicationSummary
 */
export interface ApplicationSummary {
  /**
   * @schema ApplicationSummary#id
   */
  readonly id?: string;

  /**
   * @schema ApplicationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ApplicationSummary#name
   */
  readonly name?: string;

  /**
   * @schema ApplicationSummary#description
   */
  readonly description?: string;

  /**
   * @schema ApplicationSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ApplicationSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema AttributeGroupSummary
 */
export interface AttributeGroupSummary {
  /**
   * @schema AttributeGroupSummary#id
   */
  readonly id?: string;

  /**
   * @schema AttributeGroupSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema AttributeGroupSummary#name
   */
  readonly name?: string;

  /**
   * @schema AttributeGroupSummary#description
   */
  readonly description?: string;

  /**
   * @schema AttributeGroupSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema AttributeGroupSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema ResourceInfo
 */
export interface ResourceInfo {
  /**
   * @schema ResourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema ResourceInfo#arn
   */
  readonly arn?: string;

}
