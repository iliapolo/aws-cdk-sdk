/**
 * @schema AcceptResourceShareInvitationRequest
 */
export interface AcceptResourceShareInvitationRequest {
  /**
   * @schema AcceptResourceShareInvitationRequest#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn: string;

  /**
   * @schema AcceptResourceShareInvitationRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema AcceptResourceShareInvitationResponse
 */
export interface AcceptResourceShareInvitationResponse {
  /**
   * @schema AcceptResourceShareInvitationResponse#resourceShareInvitation
   */
  readonly resourceShareInvitation?: ResourceShareInvitation;

  /**
   * @schema AcceptResourceShareInvitationResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema AssociateResourceShareRequest
 */
export interface AssociateResourceShareRequest {
  /**
   * @schema AssociateResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema AssociateResourceShareRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema AssociateResourceShareRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema AssociateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema AssociateResourceShareResponse
 */
export interface AssociateResourceShareResponse {
  /**
   * @schema AssociateResourceShareResponse#resourceShareAssociations
   */
  readonly resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * @schema AssociateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema AssociateResourceSharePermissionRequest
 */
export interface AssociateResourceSharePermissionRequest {
  /**
   * @schema AssociateResourceSharePermissionRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema AssociateResourceSharePermissionRequest#permissionArn
   */
  readonly permissionArn: string;

  /**
   * @schema AssociateResourceSharePermissionRequest#replace
   */
  readonly replace?: boolean;

  /**
   * @schema AssociateResourceSharePermissionRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema AssociateResourceSharePermissionResponse
 */
export interface AssociateResourceSharePermissionResponse {
  /**
   * @schema AssociateResourceSharePermissionResponse#returnValue
   */
  readonly returnValue?: boolean;

  /**
   * @schema AssociateResourceSharePermissionResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateResourceShareRequest
 */
export interface CreateResourceShareRequest {
  /**
   * @schema CreateResourceShareRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateResourceShareRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema CreateResourceShareRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema CreateResourceShareRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateResourceShareRequest#allowExternalPrincipals
   */
  readonly allowExternalPrincipals?: boolean;

  /**
   * @schema CreateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateResourceShareRequest#permissionArns
   */
  readonly permissionArns?: string[];

}

/**
 * @schema CreateResourceShareResponse
 */
export interface CreateResourceShareResponse {
  /**
   * @schema CreateResourceShareResponse#resourceShare
   */
  readonly resourceShare?: ResourceShare;

  /**
   * @schema CreateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DeleteResourceShareRequest
 */
export interface DeleteResourceShareRequest {
  /**
   * @schema DeleteResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema DeleteResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DeleteResourceShareResponse
 */
export interface DeleteResourceShareResponse {
  /**
   * @schema DeleteResourceShareResponse#returnValue
   */
  readonly returnValue?: boolean;

  /**
   * @schema DeleteResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DisassociateResourceShareRequest
 */
export interface DisassociateResourceShareRequest {
  /**
   * @schema DisassociateResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema DisassociateResourceShareRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema DisassociateResourceShareRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema DisassociateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DisassociateResourceShareResponse
 */
export interface DisassociateResourceShareResponse {
  /**
   * @schema DisassociateResourceShareResponse#resourceShareAssociations
   */
  readonly resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * @schema DisassociateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DisassociateResourceSharePermissionRequest
 */
export interface DisassociateResourceSharePermissionRequest {
  /**
   * @schema DisassociateResourceSharePermissionRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema DisassociateResourceSharePermissionRequest#permissionArn
   */
  readonly permissionArn: string;

  /**
   * @schema DisassociateResourceSharePermissionRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DisassociateResourceSharePermissionResponse
 */
export interface DisassociateResourceSharePermissionResponse {
  /**
   * @schema DisassociateResourceSharePermissionResponse#returnValue
   */
  readonly returnValue?: boolean;

  /**
   * @schema DisassociateResourceSharePermissionResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema EnableSharingWithAwsOrganizationRequest
 */
export interface EnableSharingWithAwsOrganizationRequest {
}

/**
 * @schema EnableSharingWithAwsOrganizationResponse
 */
export interface EnableSharingWithAwsOrganizationResponse {
  /**
   * @schema EnableSharingWithAwsOrganizationResponse#returnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema GetPermissionRequest
 */
export interface GetPermissionRequest {
  /**
   * @schema GetPermissionRequest#permissionArn
   */
  readonly permissionArn: string;

  /**
   * @schema GetPermissionRequest#permissionVersion
   */
  readonly permissionVersion?: number;

}

/**
 * @schema GetPermissionResponse
 */
export interface GetPermissionResponse {
  /**
   * @schema GetPermissionResponse#permission
   */
  readonly permission?: ResourceSharePermissionDetail;

}

/**
 * @schema GetResourcePoliciesRequest
 */
export interface GetResourcePoliciesRequest {
  /**
   * @schema GetResourcePoliciesRequest#resourceArns
   */
  readonly resourceArns: string[];

  /**
   * @schema GetResourcePoliciesRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema GetResourcePoliciesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetResourcePoliciesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetResourcePoliciesResponse
 */
export interface GetResourcePoliciesResponse {
  /**
   * @schema GetResourcePoliciesResponse#policies
   */
  readonly policies?: string[];

  /**
   * @schema GetResourcePoliciesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetResourceShareAssociationsRequest
 */
export interface GetResourceShareAssociationsRequest {
  /**
   * @schema GetResourceShareAssociationsRequest#associationType
   */
  readonly associationType: string;

  /**
   * @schema GetResourceShareAssociationsRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema GetResourceShareAssociationsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GetResourceShareAssociationsRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema GetResourceShareAssociationsRequest#associationStatus
   */
  readonly associationStatus?: string;

  /**
   * @schema GetResourceShareAssociationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetResourceShareAssociationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetResourceShareAssociationsResponse
 */
export interface GetResourceShareAssociationsResponse {
  /**
   * @schema GetResourceShareAssociationsResponse#resourceShareAssociations
   */
  readonly resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * @schema GetResourceShareAssociationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetResourceShareInvitationsRequest
 */
export interface GetResourceShareInvitationsRequest {
  /**
   * @schema GetResourceShareInvitationsRequest#resourceShareInvitationArns
   */
  readonly resourceShareInvitationArns?: string[];

  /**
   * @schema GetResourceShareInvitationsRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema GetResourceShareInvitationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetResourceShareInvitationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetResourceShareInvitationsResponse
 */
export interface GetResourceShareInvitationsResponse {
  /**
   * @schema GetResourceShareInvitationsResponse#resourceShareInvitations
   */
  readonly resourceShareInvitations?: ResourceShareInvitation[];

  /**
   * @schema GetResourceShareInvitationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetResourceSharesRequest
 */
export interface GetResourceSharesRequest {
  /**
   * @schema GetResourceSharesRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema GetResourceSharesRequest#resourceShareStatus
   */
  readonly resourceShareStatus?: string;

  /**
   * @schema GetResourceSharesRequest#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema GetResourceSharesRequest#name
   */
  readonly name?: string;

  /**
   * @schema GetResourceSharesRequest#tagFilters
   */
  readonly tagFilters?: TagFilter[];

  /**
   * @schema GetResourceSharesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetResourceSharesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetResourceSharesResponse
 */
export interface GetResourceSharesResponse {
  /**
   * @schema GetResourceSharesResponse#resourceShares
   */
  readonly resourceShares?: ResourceShare[];

  /**
   * @schema GetResourceSharesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPendingInvitationResourcesRequest
 */
export interface ListPendingInvitationResourcesRequest {
  /**
   * @schema ListPendingInvitationResourcesRequest#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn: string;

  /**
   * @schema ListPendingInvitationResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPendingInvitationResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPendingInvitationResourcesResponse
 */
export interface ListPendingInvitationResourcesResponse {
  /**
   * @schema ListPendingInvitationResourcesResponse#resources
   */
  readonly resources?: Resource[];

  /**
   * @schema ListPendingInvitationResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPermissionsRequest
 */
export interface ListPermissionsRequest {
  /**
   * @schema ListPermissionsRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ListPermissionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPermissionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPermissionsResponse
 */
export interface ListPermissionsResponse {
  /**
   * @schema ListPermissionsResponse#permissions
   */
  readonly permissions?: ResourceSharePermissionSummary[];

  /**
   * @schema ListPermissionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPrincipalsRequest
 */
export interface ListPrincipalsRequest {
  /**
   * @schema ListPrincipalsRequest#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema ListPrincipalsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ListPrincipalsRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema ListPrincipalsRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ListPrincipalsRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema ListPrincipalsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPrincipalsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPrincipalsResponse
 */
export interface ListPrincipalsResponse {
  /**
   * @schema ListPrincipalsResponse#principals
   */
  readonly principals?: Principal[];

  /**
   * @schema ListPrincipalsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourceSharePermissionsRequest
 */
export interface ListResourceSharePermissionsRequest {
  /**
   * @schema ListResourceSharePermissionsRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema ListResourceSharePermissionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourceSharePermissionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResourceSharePermissionsResponse
 */
export interface ListResourceSharePermissionsResponse {
  /**
   * @schema ListResourceSharePermissionsResponse#permissions
   */
  readonly permissions?: ResourceSharePermissionSummary[];

  /**
   * @schema ListResourceSharePermissionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourceTypesRequest
 */
export interface ListResourceTypesRequest {
  /**
   * @schema ListResourceTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourceTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResourceTypesResponse
 */
export interface ListResourceTypesResponse {
  /**
   * @schema ListResourceTypesResponse#resourceTypes
   */
  readonly resourceTypes?: ServiceNameAndResourceType[];

  /**
   * @schema ListResourceTypesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourcesRequest
 */
export interface ListResourcesRequest {
  /**
   * @schema ListResourcesRequest#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema ListResourcesRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema ListResourcesRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ListResourcesRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema ListResourcesRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema ListResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResourcesResponse
 */
export interface ListResourcesResponse {
  /**
   * @schema ListResourcesResponse#resources
   */
  readonly resources?: Resource[];

  /**
   * @schema ListResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PromoteResourceShareCreatedFromPolicyRequest
 */
export interface PromoteResourceShareCreatedFromPolicyRequest {
  /**
   * @schema PromoteResourceShareCreatedFromPolicyRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

}

/**
 * @schema PromoteResourceShareCreatedFromPolicyResponse
 */
export interface PromoteResourceShareCreatedFromPolicyResponse {
  /**
   * @schema PromoteResourceShareCreatedFromPolicyResponse#returnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema RejectResourceShareInvitationRequest
 */
export interface RejectResourceShareInvitationRequest {
  /**
   * @schema RejectResourceShareInvitationRequest#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn: string;

  /**
   * @schema RejectResourceShareInvitationRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RejectResourceShareInvitationResponse
 */
export interface RejectResourceShareInvitationResponse {
  /**
   * @schema RejectResourceShareInvitationResponse#resourceShareInvitation
   */
  readonly resourceShareInvitation?: ResourceShareInvitation;

  /**
   * @schema RejectResourceShareInvitationResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema TagResourceRequest#tags
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
   * @schema UntagResourceRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateResourceShareRequest
 */
export interface UpdateResourceShareRequest {
  /**
   * @schema UpdateResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema UpdateResourceShareRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateResourceShareRequest#allowExternalPrincipals
   */
  readonly allowExternalPrincipals?: boolean;

  /**
   * @schema UpdateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema UpdateResourceShareResponse
 */
export interface UpdateResourceShareResponse {
  /**
   * @schema UpdateResourceShareResponse#resourceShare
   */
  readonly resourceShare?: ResourceShare;

  /**
   * @schema UpdateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema ResourceShareInvitation
 */
export interface ResourceShareInvitation {
  /**
   * @schema ResourceShareInvitation#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn?: string;

  /**
   * @schema ResourceShareInvitation#resourceShareName
   */
  readonly resourceShareName?: string;

  /**
   * @schema ResourceShareInvitation#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema ResourceShareInvitation#senderAccountId
   */
  readonly senderAccountId?: string;

  /**
   * @schema ResourceShareInvitation#receiverAccountId
   */
  readonly receiverAccountId?: string;

  /**
   * @schema ResourceShareInvitation#invitationTimestamp
   */
  readonly invitationTimestamp?: string;

  /**
   * @schema ResourceShareInvitation#status
   */
  readonly status?: string;

  /**
   * @schema ResourceShareInvitation#resourceShareAssociations
   */
  readonly resourceShareAssociations?: ResourceShareAssociation[];

}

/**
 * @schema ResourceShareAssociation
 */
export interface ResourceShareAssociation {
  /**
   * @schema ResourceShareAssociation#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema ResourceShareAssociation#resourceShareName
   */
  readonly resourceShareName?: string;

  /**
   * @schema ResourceShareAssociation#associatedEntity
   */
  readonly associatedEntity?: string;

  /**
   * @schema ResourceShareAssociation#associationType
   */
  readonly associationType?: string;

  /**
   * @schema ResourceShareAssociation#status
   */
  readonly status?: string;

  /**
   * @schema ResourceShareAssociation#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ResourceShareAssociation#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ResourceShareAssociation#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema ResourceShareAssociation#external
   */
  readonly external?: boolean;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key?: string;

  /**
   * @schema Tag#value
   */
  readonly value?: string;

}

/**
 * @schema ResourceShare
 */
export interface ResourceShare {
  /**
   * @schema ResourceShare#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema ResourceShare#name
   */
  readonly name?: string;

  /**
   * @schema ResourceShare#owningAccountId
   */
  readonly owningAccountId?: string;

  /**
   * @schema ResourceShare#allowExternalPrincipals
   */
  readonly allowExternalPrincipals?: boolean;

  /**
   * @schema ResourceShare#status
   */
  readonly status?: string;

  /**
   * @schema ResourceShare#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ResourceShare#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ResourceShare#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ResourceShare#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema ResourceShare#featureSet
   */
  readonly featureSet?: string;

}

/**
 * @schema ResourceSharePermissionDetail
 */
export interface ResourceSharePermissionDetail {
  /**
   * @schema ResourceSharePermissionDetail#arn
   */
  readonly arn?: string;

  /**
   * @schema ResourceSharePermissionDetail#version
   */
  readonly version?: string;

  /**
   * @schema ResourceSharePermissionDetail#defaultVersion
   */
  readonly defaultVersion?: boolean;

  /**
   * @schema ResourceSharePermissionDetail#name
   */
  readonly name?: string;

  /**
   * @schema ResourceSharePermissionDetail#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ResourceSharePermissionDetail#permission
   */
  readonly permission?: string;

  /**
   * @schema ResourceSharePermissionDetail#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ResourceSharePermissionDetail#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema TagFilter
 */
export interface TagFilter {
  /**
   * @schema TagFilter#tagKey
   */
  readonly tagKey?: string;

  /**
   * @schema TagFilter#tagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#arn
   */
  readonly arn?: string;

  /**
   * @schema Resource#type
   */
  readonly type?: string;

  /**
   * @schema Resource#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema Resource#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

  /**
   * @schema Resource#status
   */
  readonly status?: string;

  /**
   * @schema Resource#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Resource#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Resource#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema ResourceSharePermissionSummary
 */
export interface ResourceSharePermissionSummary {
  /**
   * @schema ResourceSharePermissionSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ResourceSharePermissionSummary#version
   */
  readonly version?: string;

  /**
   * @schema ResourceSharePermissionSummary#defaultVersion
   */
  readonly defaultVersion?: boolean;

  /**
   * @schema ResourceSharePermissionSummary#name
   */
  readonly name?: string;

  /**
   * @schema ResourceSharePermissionSummary#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ResourceSharePermissionSummary#status
   */
  readonly status?: string;

  /**
   * @schema ResourceSharePermissionSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ResourceSharePermissionSummary#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema Principal
 */
export interface Principal {
  /**
   * @schema Principal#id
   */
  readonly id?: string;

  /**
   * @schema Principal#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema Principal#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Principal#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Principal#external
   */
  readonly external?: boolean;

}

/**
 * @schema ServiceNameAndResourceType
 */
export interface ServiceNameAndResourceType {
  /**
   * @schema ServiceNameAndResourceType#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ServiceNameAndResourceType#serviceName
   */
  readonly serviceName?: string;

}
