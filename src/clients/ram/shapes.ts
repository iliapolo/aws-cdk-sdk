/**
 * @schema RamAcceptResourceShareInvitationRequest
 */
export interface RamAcceptResourceShareInvitationRequest {
  /**
   * @schema RamAcceptResourceShareInvitationRequest#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn: string;

  /**
   * @schema RamAcceptResourceShareInvitationRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamAcceptResourceShareInvitationResponse
 */
export interface RamAcceptResourceShareInvitationResponse {
  /**
   * @schema RamAcceptResourceShareInvitationResponse#resourceShareInvitation
   */
  readonly resourceShareInvitation?: RamResourceShareInvitation;

  /**
   * @schema RamAcceptResourceShareInvitationResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamAssociateResourceShareRequest
 */
export interface RamAssociateResourceShareRequest {
  /**
   * @schema RamAssociateResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamAssociateResourceShareRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema RamAssociateResourceShareRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema RamAssociateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamAssociateResourceShareResponse
 */
export interface RamAssociateResourceShareResponse {
  /**
   * @schema RamAssociateResourceShareResponse#resourceShareAssociations
   */
  readonly resourceShareAssociations?: RamResourceShareAssociation[];

  /**
   * @schema RamAssociateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamAssociateResourceSharePermissionRequest
 */
export interface RamAssociateResourceSharePermissionRequest {
  /**
   * @schema RamAssociateResourceSharePermissionRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamAssociateResourceSharePermissionRequest#permissionArn
   */
  readonly permissionArn: string;

  /**
   * @schema RamAssociateResourceSharePermissionRequest#replace
   */
  readonly replace?: boolean;

  /**
   * @schema RamAssociateResourceSharePermissionRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamAssociateResourceSharePermissionResponse
 */
export interface RamAssociateResourceSharePermissionResponse {
  /**
   * @schema RamAssociateResourceSharePermissionResponse#returnValue
   */
  readonly returnValue?: boolean;

  /**
   * @schema RamAssociateResourceSharePermissionResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamCreateResourceShareRequest
 */
export interface RamCreateResourceShareRequest {
  /**
   * @schema RamCreateResourceShareRequest#name
   */
  readonly name: string;

  /**
   * @schema RamCreateResourceShareRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema RamCreateResourceShareRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema RamCreateResourceShareRequest#tags
   */
  readonly tags?: RamTag[];

  /**
   * @schema RamCreateResourceShareRequest#allowExternalPrincipals
   */
  readonly allowExternalPrincipals?: boolean;

  /**
   * @schema RamCreateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema RamCreateResourceShareRequest#permissionArns
   */
  readonly permissionArns?: string[];

}

/**
 * @schema RamCreateResourceShareResponse
 */
export interface RamCreateResourceShareResponse {
  /**
   * @schema RamCreateResourceShareResponse#resourceShare
   */
  readonly resourceShare?: RamResourceShare;

  /**
   * @schema RamCreateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamDeleteResourceShareRequest
 */
export interface RamDeleteResourceShareRequest {
  /**
   * @schema RamDeleteResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamDeleteResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamDeleteResourceShareResponse
 */
export interface RamDeleteResourceShareResponse {
  /**
   * @schema RamDeleteResourceShareResponse#returnValue
   */
  readonly returnValue?: boolean;

  /**
   * @schema RamDeleteResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamDisassociateResourceShareRequest
 */
export interface RamDisassociateResourceShareRequest {
  /**
   * @schema RamDisassociateResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamDisassociateResourceShareRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema RamDisassociateResourceShareRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema RamDisassociateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamDisassociateResourceShareResponse
 */
export interface RamDisassociateResourceShareResponse {
  /**
   * @schema RamDisassociateResourceShareResponse#resourceShareAssociations
   */
  readonly resourceShareAssociations?: RamResourceShareAssociation[];

  /**
   * @schema RamDisassociateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamDisassociateResourceSharePermissionRequest
 */
export interface RamDisassociateResourceSharePermissionRequest {
  /**
   * @schema RamDisassociateResourceSharePermissionRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamDisassociateResourceSharePermissionRequest#permissionArn
   */
  readonly permissionArn: string;

  /**
   * @schema RamDisassociateResourceSharePermissionRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamDisassociateResourceSharePermissionResponse
 */
export interface RamDisassociateResourceSharePermissionResponse {
  /**
   * @schema RamDisassociateResourceSharePermissionResponse#returnValue
   */
  readonly returnValue?: boolean;

  /**
   * @schema RamDisassociateResourceSharePermissionResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamEnableSharingWithAwsOrganizationRequest
 */
export interface RamEnableSharingWithAwsOrganizationRequest {
}

/**
 * @schema RamEnableSharingWithAwsOrganizationResponse
 */
export interface RamEnableSharingWithAwsOrganizationResponse {
  /**
   * @schema RamEnableSharingWithAwsOrganizationResponse#returnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema RamGetPermissionRequest
 */
export interface RamGetPermissionRequest {
  /**
   * @schema RamGetPermissionRequest#permissionArn
   */
  readonly permissionArn: string;

  /**
   * @schema RamGetPermissionRequest#permissionVersion
   */
  readonly permissionVersion?: number;

}

/**
 * @schema RamGetPermissionResponse
 */
export interface RamGetPermissionResponse {
  /**
   * @schema RamGetPermissionResponse#permission
   */
  readonly permission?: RamResourceSharePermissionDetail;

}

/**
 * @schema RamGetResourcePoliciesRequest
 */
export interface RamGetResourcePoliciesRequest {
  /**
   * @schema RamGetResourcePoliciesRequest#resourceArns
   */
  readonly resourceArns: string[];

  /**
   * @schema RamGetResourcePoliciesRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema RamGetResourcePoliciesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamGetResourcePoliciesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RamGetResourcePoliciesResponse
 */
export interface RamGetResourcePoliciesResponse {
  /**
   * @schema RamGetResourcePoliciesResponse#policies
   */
  readonly policies?: string[];

  /**
   * @schema RamGetResourcePoliciesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RamGetResourceShareAssociationsRequest
 */
export interface RamGetResourceShareAssociationsRequest {
  /**
   * @schema RamGetResourceShareAssociationsRequest#associationType
   */
  readonly associationType: string;

  /**
   * @schema RamGetResourceShareAssociationsRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema RamGetResourceShareAssociationsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema RamGetResourceShareAssociationsRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema RamGetResourceShareAssociationsRequest#associationStatus
   */
  readonly associationStatus?: string;

  /**
   * @schema RamGetResourceShareAssociationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamGetResourceShareAssociationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RamGetResourceShareAssociationsResponse
 */
export interface RamGetResourceShareAssociationsResponse {
  /**
   * @schema RamGetResourceShareAssociationsResponse#resourceShareAssociations
   */
  readonly resourceShareAssociations?: RamResourceShareAssociation[];

  /**
   * @schema RamGetResourceShareAssociationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RamGetResourceShareInvitationsRequest
 */
export interface RamGetResourceShareInvitationsRequest {
  /**
   * @schema RamGetResourceShareInvitationsRequest#resourceShareInvitationArns
   */
  readonly resourceShareInvitationArns?: string[];

  /**
   * @schema RamGetResourceShareInvitationsRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema RamGetResourceShareInvitationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamGetResourceShareInvitationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RamGetResourceShareInvitationsResponse
 */
export interface RamGetResourceShareInvitationsResponse {
  /**
   * @schema RamGetResourceShareInvitationsResponse#resourceShareInvitations
   */
  readonly resourceShareInvitations?: RamResourceShareInvitation[];

  /**
   * @schema RamGetResourceShareInvitationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RamGetResourceSharesRequest
 */
export interface RamGetResourceSharesRequest {
  /**
   * @schema RamGetResourceSharesRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema RamGetResourceSharesRequest#resourceShareStatus
   */
  readonly resourceShareStatus?: string;

  /**
   * @schema RamGetResourceSharesRequest#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema RamGetResourceSharesRequest#name
   */
  readonly name?: string;

  /**
   * @schema RamGetResourceSharesRequest#tagFilters
   */
  readonly tagFilters?: RamTagFilter[];

  /**
   * @schema RamGetResourceSharesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamGetResourceSharesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RamGetResourceSharesResponse
 */
export interface RamGetResourceSharesResponse {
  /**
   * @schema RamGetResourceSharesResponse#resourceShares
   */
  readonly resourceShares?: RamResourceShare[];

  /**
   * @schema RamGetResourceSharesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RamListPendingInvitationResourcesRequest
 */
export interface RamListPendingInvitationResourcesRequest {
  /**
   * @schema RamListPendingInvitationResourcesRequest#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn: string;

  /**
   * @schema RamListPendingInvitationResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListPendingInvitationResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RamListPendingInvitationResourcesResponse
 */
export interface RamListPendingInvitationResourcesResponse {
  /**
   * @schema RamListPendingInvitationResourcesResponse#resources
   */
  readonly resources?: RamResource[];

  /**
   * @schema RamListPendingInvitationResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RamListPermissionsRequest
 */
export interface RamListPermissionsRequest {
  /**
   * @schema RamListPermissionsRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamListPermissionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListPermissionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RamListPermissionsResponse
 */
export interface RamListPermissionsResponse {
  /**
   * @schema RamListPermissionsResponse#permissions
   */
  readonly permissions?: RamResourceSharePermissionSummary[];

  /**
   * @schema RamListPermissionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RamListPrincipalsRequest
 */
export interface RamListPrincipalsRequest {
  /**
   * @schema RamListPrincipalsRequest#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema RamListPrincipalsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema RamListPrincipalsRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema RamListPrincipalsRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamListPrincipalsRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema RamListPrincipalsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListPrincipalsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RamListPrincipalsResponse
 */
export interface RamListPrincipalsResponse {
  /**
   * @schema RamListPrincipalsResponse#principals
   */
  readonly principals?: RamPrincipal[];

  /**
   * @schema RamListPrincipalsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RamListResourceSharePermissionsRequest
 */
export interface RamListResourceSharePermissionsRequest {
  /**
   * @schema RamListResourceSharePermissionsRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamListResourceSharePermissionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListResourceSharePermissionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RamListResourceSharePermissionsResponse
 */
export interface RamListResourceSharePermissionsResponse {
  /**
   * @schema RamListResourceSharePermissionsResponse#permissions
   */
  readonly permissions?: RamResourceSharePermissionSummary[];

  /**
   * @schema RamListResourceSharePermissionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RamListResourceTypesRequest
 */
export interface RamListResourceTypesRequest {
  /**
   * @schema RamListResourceTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListResourceTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RamListResourceTypesResponse
 */
export interface RamListResourceTypesResponse {
  /**
   * @schema RamListResourceTypesResponse#resourceTypes
   */
  readonly resourceTypes?: RamServiceNameAndResourceType[];

  /**
   * @schema RamListResourceTypesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RamListResourcesRequest
 */
export interface RamListResourcesRequest {
  /**
   * @schema RamListResourcesRequest#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema RamListResourcesRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema RamListResourcesRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamListResourcesRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema RamListResourcesRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema RamListResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RamListResourcesResponse
 */
export interface RamListResourcesResponse {
  /**
   * @schema RamListResourcesResponse#resources
   */
  readonly resources?: RamResource[];

  /**
   * @schema RamListResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RamPromoteResourceShareCreatedFromPolicyRequest
 */
export interface RamPromoteResourceShareCreatedFromPolicyRequest {
  /**
   * @schema RamPromoteResourceShareCreatedFromPolicyRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

}

/**
 * @schema RamPromoteResourceShareCreatedFromPolicyResponse
 */
export interface RamPromoteResourceShareCreatedFromPolicyResponse {
  /**
   * @schema RamPromoteResourceShareCreatedFromPolicyResponse#returnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema RamRejectResourceShareInvitationRequest
 */
export interface RamRejectResourceShareInvitationRequest {
  /**
   * @schema RamRejectResourceShareInvitationRequest#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn: string;

  /**
   * @schema RamRejectResourceShareInvitationRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamRejectResourceShareInvitationResponse
 */
export interface RamRejectResourceShareInvitationResponse {
  /**
   * @schema RamRejectResourceShareInvitationResponse#resourceShareInvitation
   */
  readonly resourceShareInvitation?: RamResourceShareInvitation;

  /**
   * @schema RamRejectResourceShareInvitationResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamTagResourceRequest
 */
export interface RamTagResourceRequest {
  /**
   * @schema RamTagResourceRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamTagResourceRequest#tags
   */
  readonly tags: RamTag[];

}

/**
 * @schema RamTagResourceResponse
 */
export interface RamTagResourceResponse {
}

/**
 * @schema RamUntagResourceRequest
 */
export interface RamUntagResourceRequest {
  /**
   * @schema RamUntagResourceRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema RamUntagResourceResponse
 */
export interface RamUntagResourceResponse {
}

/**
 * @schema RamUpdateResourceShareRequest
 */
export interface RamUpdateResourceShareRequest {
  /**
   * @schema RamUpdateResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamUpdateResourceShareRequest#name
   */
  readonly name?: string;

  /**
   * @schema RamUpdateResourceShareRequest#allowExternalPrincipals
   */
  readonly allowExternalPrincipals?: boolean;

  /**
   * @schema RamUpdateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamUpdateResourceShareResponse
 */
export interface RamUpdateResourceShareResponse {
  /**
   * @schema RamUpdateResourceShareResponse#resourceShare
   */
  readonly resourceShare?: RamResourceShare;

  /**
   * @schema RamUpdateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RamResourceShareInvitation
 */
export interface RamResourceShareInvitation {
  /**
   * @schema RamResourceShareInvitation#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn?: string;

  /**
   * @schema RamResourceShareInvitation#resourceShareName
   */
  readonly resourceShareName?: string;

  /**
   * @schema RamResourceShareInvitation#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema RamResourceShareInvitation#senderAccountId
   */
  readonly senderAccountId?: string;

  /**
   * @schema RamResourceShareInvitation#receiverAccountId
   */
  readonly receiverAccountId?: string;

  /**
   * @schema RamResourceShareInvitation#invitationTimestamp
   */
  readonly invitationTimestamp?: string;

  /**
   * @schema RamResourceShareInvitation#status
   */
  readonly status?: string;

  /**
   * @schema RamResourceShareInvitation#resourceShareAssociations
   */
  readonly resourceShareAssociations?: RamResourceShareAssociation[];

}

/**
 * @schema RamResourceShareAssociation
 */
export interface RamResourceShareAssociation {
  /**
   * @schema RamResourceShareAssociation#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema RamResourceShareAssociation#resourceShareName
   */
  readonly resourceShareName?: string;

  /**
   * @schema RamResourceShareAssociation#associatedEntity
   */
  readonly associatedEntity?: string;

  /**
   * @schema RamResourceShareAssociation#associationType
   */
  readonly associationType?: string;

  /**
   * @schema RamResourceShareAssociation#status
   */
  readonly status?: string;

  /**
   * @schema RamResourceShareAssociation#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RamResourceShareAssociation#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamResourceShareAssociation#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema RamResourceShareAssociation#external
   */
  readonly external?: boolean;

}

/**
 * @schema RamTag
 */
export interface RamTag {
  /**
   * @schema RamTag#key
   */
  readonly key?: string;

  /**
   * @schema RamTag#value
   */
  readonly value?: string;

}

/**
 * @schema RamResourceShare
 */
export interface RamResourceShare {
  /**
   * @schema RamResourceShare#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema RamResourceShare#name
   */
  readonly name?: string;

  /**
   * @schema RamResourceShare#owningAccountId
   */
  readonly owningAccountId?: string;

  /**
   * @schema RamResourceShare#allowExternalPrincipals
   */
  readonly allowExternalPrincipals?: boolean;

  /**
   * @schema RamResourceShare#status
   */
  readonly status?: string;

  /**
   * @schema RamResourceShare#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RamResourceShare#tags
   */
  readonly tags?: RamTag[];

  /**
   * @schema RamResourceShare#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamResourceShare#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema RamResourceShare#featureSet
   */
  readonly featureSet?: string;

}

/**
 * @schema RamResourceSharePermissionDetail
 */
export interface RamResourceSharePermissionDetail {
  /**
   * @schema RamResourceSharePermissionDetail#arn
   */
  readonly arn?: string;

  /**
   * @schema RamResourceSharePermissionDetail#version
   */
  readonly version?: string;

  /**
   * @schema RamResourceSharePermissionDetail#defaultVersion
   */
  readonly defaultVersion?: boolean;

  /**
   * @schema RamResourceSharePermissionDetail#name
   */
  readonly name?: string;

  /**
   * @schema RamResourceSharePermissionDetail#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamResourceSharePermissionDetail#permission
   */
  readonly permission?: string;

  /**
   * @schema RamResourceSharePermissionDetail#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamResourceSharePermissionDetail#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema RamTagFilter
 */
export interface RamTagFilter {
  /**
   * @schema RamTagFilter#tagKey
   */
  readonly tagKey?: string;

  /**
   * @schema RamTagFilter#tagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RamResource
 */
export interface RamResource {
  /**
   * @schema RamResource#arn
   */
  readonly arn?: string;

  /**
   * @schema RamResource#type
   */
  readonly type?: string;

  /**
   * @schema RamResource#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema RamResource#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

  /**
   * @schema RamResource#status
   */
  readonly status?: string;

  /**
   * @schema RamResource#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RamResource#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamResource#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema RamResourceSharePermissionSummary
 */
export interface RamResourceSharePermissionSummary {
  /**
   * @schema RamResourceSharePermissionSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RamResourceSharePermissionSummary#version
   */
  readonly version?: string;

  /**
   * @schema RamResourceSharePermissionSummary#defaultVersion
   */
  readonly defaultVersion?: boolean;

  /**
   * @schema RamResourceSharePermissionSummary#name
   */
  readonly name?: string;

  /**
   * @schema RamResourceSharePermissionSummary#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamResourceSharePermissionSummary#status
   */
  readonly status?: string;

  /**
   * @schema RamResourceSharePermissionSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamResourceSharePermissionSummary#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema RamPrincipal
 */
export interface RamPrincipal {
  /**
   * @schema RamPrincipal#id
   */
  readonly id?: string;

  /**
   * @schema RamPrincipal#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema RamPrincipal#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamPrincipal#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema RamPrincipal#external
   */
  readonly external?: boolean;

}

/**
 * @schema RamServiceNameAndResourceType
 */
export interface RamServiceNameAndResourceType {
  /**
   * @schema RamServiceNameAndResourceType#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamServiceNameAndResourceType#serviceName
   */
  readonly serviceName?: string;

}
