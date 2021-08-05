/**
 * @schema ServiceCatalogAppRegistryAssociateAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryAssociateAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryAssociateAttributeGroupRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryAssociateAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * @schema ServiceCatalogAppRegistryAssociateAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryAssociateAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryAssociateAttributeGroupResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ServiceCatalogAppRegistryAssociateAttributeGroupResponse#attributeGroupArn
   */
  readonly attributeGroupArn?: string;

}

/**
 * @schema ServiceCatalogAppRegistryAssociateResourceRequest
 */
export interface ServiceCatalogAppRegistryAssociateResourceRequest {
  /**
   * @schema ServiceCatalogAppRegistryAssociateResourceRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryAssociateResourceRequest#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema ServiceCatalogAppRegistryAssociateResourceRequest#resource
   */
  readonly resource: string;

}

/**
 * @schema ServiceCatalogAppRegistryAssociateResourceResponse
 */
export interface ServiceCatalogAppRegistryAssociateResourceResponse {
  /**
   * @schema ServiceCatalogAppRegistryAssociateResourceResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ServiceCatalogAppRegistryAssociateResourceResponse#resourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema ServiceCatalogAppRegistryCreateApplicationRequest
 */
export interface ServiceCatalogAppRegistryCreateApplicationRequest {
  /**
   * @schema ServiceCatalogAppRegistryCreateApplicationRequest#name
   */
  readonly name: string;

  /**
   * @schema ServiceCatalogAppRegistryCreateApplicationRequest#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryCreateApplicationRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ServiceCatalogAppRegistryCreateApplicationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema ServiceCatalogAppRegistryCreateApplicationResponse
 */
export interface ServiceCatalogAppRegistryCreateApplicationResponse {
  /**
   * @schema ServiceCatalogAppRegistryCreateApplicationResponse#application
   */
  readonly application?: ServiceCatalogAppRegistryApplication;

}

/**
 * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryCreateAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest#name
   */
  readonly name: string;

  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest#attributes
   */
  readonly attributes: string;

  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema ServiceCatalogAppRegistryCreateAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryCreateAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupResponse#attributeGroup
   */
  readonly attributeGroup?: ServiceCatalogAppRegistryAttributeGroup;

}

/**
 * @schema ServiceCatalogAppRegistryDeleteApplicationRequest
 */
export interface ServiceCatalogAppRegistryDeleteApplicationRequest {
  /**
   * @schema ServiceCatalogAppRegistryDeleteApplicationRequest#application
   */
  readonly application: string;

}

/**
 * @schema ServiceCatalogAppRegistryDeleteApplicationResponse
 */
export interface ServiceCatalogAppRegistryDeleteApplicationResponse {
  /**
   * @schema ServiceCatalogAppRegistryDeleteApplicationResponse#application
   */
  readonly application?: ServiceCatalogAppRegistryApplicationSummary;

}

/**
 * @schema ServiceCatalogAppRegistryDeleteAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryDeleteAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryDeleteAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * @schema ServiceCatalogAppRegistryDeleteAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryDeleteAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryDeleteAttributeGroupResponse#attributeGroup
   */
  readonly attributeGroup?: ServiceCatalogAppRegistryAttributeGroupSummary;

}

/**
 * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryDisassociateAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryDisassociateAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupResponse#attributeGroupArn
   */
  readonly attributeGroupArn?: string;

}

/**
 * @schema ServiceCatalogAppRegistryDisassociateResourceRequest
 */
export interface ServiceCatalogAppRegistryDisassociateResourceRequest {
  /**
   * @schema ServiceCatalogAppRegistryDisassociateResourceRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryDisassociateResourceRequest#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema ServiceCatalogAppRegistryDisassociateResourceRequest#resource
   */
  readonly resource: string;

}

/**
 * @schema ServiceCatalogAppRegistryDisassociateResourceResponse
 */
export interface ServiceCatalogAppRegistryDisassociateResourceResponse {
  /**
   * @schema ServiceCatalogAppRegistryDisassociateResourceResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ServiceCatalogAppRegistryDisassociateResourceResponse#resourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema ServiceCatalogAppRegistryGetApplicationRequest
 */
export interface ServiceCatalogAppRegistryGetApplicationRequest {
  /**
   * @schema ServiceCatalogAppRegistryGetApplicationRequest#application
   */
  readonly application: string;

}

/**
 * @schema ServiceCatalogAppRegistryGetApplicationResponse
 */
export interface ServiceCatalogAppRegistryGetApplicationResponse {
  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#associatedResourceCount
   */
  readonly associatedResourceCount?: number;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ServiceCatalogAppRegistryGetAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryGetAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryGetAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#attributes
   */
  readonly attributes?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ServiceCatalogAppRegistryListApplicationsRequest
 */
export interface ServiceCatalogAppRegistryListApplicationsRequest {
  /**
   * @schema ServiceCatalogAppRegistryListApplicationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceCatalogAppRegistryListApplicationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ServiceCatalogAppRegistryListApplicationsResponse
 */
export interface ServiceCatalogAppRegistryListApplicationsResponse {
  /**
   * @schema ServiceCatalogAppRegistryListApplicationsResponse#applications
   */
  readonly applications?: ServiceCatalogAppRegistryApplicationSummary[];

  /**
   * @schema ServiceCatalogAppRegistryListApplicationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest
 */
export interface ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest {
  /**
   * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse
 */
export interface ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse {
  /**
   * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse#attributeGroups
   */
  readonly attributeGroups?: string[];

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ServiceCatalogAppRegistryListAssociatedResourcesRequest
 */
export interface ServiceCatalogAppRegistryListAssociatedResourcesRequest {
  /**
   * @schema ServiceCatalogAppRegistryListAssociatedResourcesRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ServiceCatalogAppRegistryListAssociatedResourcesResponse
 */
export interface ServiceCatalogAppRegistryListAssociatedResourcesResponse {
  /**
   * @schema ServiceCatalogAppRegistryListAssociatedResourcesResponse#resources
   */
  readonly resources?: ServiceCatalogAppRegistryResourceInfo[];

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ServiceCatalogAppRegistryListAttributeGroupsRequest
 */
export interface ServiceCatalogAppRegistryListAttributeGroupsRequest {
  /**
   * @schema ServiceCatalogAppRegistryListAttributeGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceCatalogAppRegistryListAttributeGroupsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ServiceCatalogAppRegistryListAttributeGroupsResponse
 */
export interface ServiceCatalogAppRegistryListAttributeGroupsResponse {
  /**
   * @schema ServiceCatalogAppRegistryListAttributeGroupsResponse#attributeGroups
   */
  readonly attributeGroups?: ServiceCatalogAppRegistryAttributeGroupSummary[];

  /**
   * @schema ServiceCatalogAppRegistryListAttributeGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ServiceCatalogAppRegistryUpdateApplicationRequest
 */
export interface ServiceCatalogAppRegistryUpdateApplicationRequest {
  /**
   * @schema ServiceCatalogAppRegistryUpdateApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryUpdateApplicationRequest#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryUpdateApplicationRequest#description
   */
  readonly description?: string;

}

/**
 * @schema ServiceCatalogAppRegistryUpdateApplicationResponse
 */
export interface ServiceCatalogAppRegistryUpdateApplicationResponse {
  /**
   * @schema ServiceCatalogAppRegistryUpdateApplicationResponse#application
   */
  readonly application?: ServiceCatalogAppRegistryApplication;

}

/**
 * @schema ServiceCatalogAppRegistryUpdateAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryUpdateAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryUpdateAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

  /**
   * @schema ServiceCatalogAppRegistryUpdateAttributeGroupRequest#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryUpdateAttributeGroupRequest#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryUpdateAttributeGroupRequest#attributes
   */
  readonly attributes?: string;

}

/**
 * @schema ServiceCatalogAppRegistryUpdateAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryUpdateAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryUpdateAttributeGroupResponse#attributeGroup
   */
  readonly attributeGroup?: ServiceCatalogAppRegistryAttributeGroup;

}

/**
 * @schema ServiceCatalogAppRegistryApplication
 */
export interface ServiceCatalogAppRegistryApplication {
  /**
   * @schema ServiceCatalogAppRegistryApplication#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ServiceCatalogAppRegistryAttributeGroup
 */
export interface ServiceCatalogAppRegistryAttributeGroup {
  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ServiceCatalogAppRegistryApplicationSummary
 */
export interface ServiceCatalogAppRegistryApplicationSummary {
  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema ServiceCatalogAppRegistryAttributeGroupSummary
 */
export interface ServiceCatalogAppRegistryAttributeGroupSummary {
  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema ServiceCatalogAppRegistryResourceInfo
 */
export interface ServiceCatalogAppRegistryResourceInfo {
  /**
   * @schema ServiceCatalogAppRegistryResourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryResourceInfo#arn
   */
  readonly arn?: string;

}
