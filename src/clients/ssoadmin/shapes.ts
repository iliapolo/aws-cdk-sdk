/**
 * @schema SsoAdminAttachManagedPolicyToPermissionSetRequest
 */
export interface SsoAdminAttachManagedPolicyToPermissionSetRequest {
  /**
   * @schema SsoAdminAttachManagedPolicyToPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminAttachManagedPolicyToPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema SsoAdminAttachManagedPolicyToPermissionSetRequest#ManagedPolicyArn
   */
  readonly managedPolicyArn: string;

}

/**
 * @schema SsoAdminAttachManagedPolicyToPermissionSetResponse
 */
export interface SsoAdminAttachManagedPolicyToPermissionSetResponse {
}

/**
 * @schema SsoAdminCreateAccountAssignmentRequest
 */
export interface SsoAdminCreateAccountAssignmentRequest {
  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#TargetId
   */
  readonly targetId: string;

  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#TargetType
   */
  readonly targetType: string;

  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#PrincipalType
   */
  readonly principalType: string;

  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#PrincipalId
   */
  readonly principalId: string;

}

/**
 * @schema SsoAdminCreateAccountAssignmentResponse
 */
export interface SsoAdminCreateAccountAssignmentResponse {
  /**
   * @schema SsoAdminCreateAccountAssignmentResponse#AccountAssignmentCreationStatus
   */
  readonly accountAssignmentCreationStatus?: SsoAdminAccountAssignmentOperationStatus;

}

/**
 * @schema SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest
 */
export interface SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest#InstanceAccessControlAttributeConfiguration
   */
  readonly instanceAccessControlAttributeConfiguration: SsoAdminInstanceAccessControlAttributeConfiguration;

}

/**
 * @schema SsoAdminCreateInstanceAccessControlAttributeConfigurationResponse
 */
export interface SsoAdminCreateInstanceAccessControlAttributeConfigurationResponse {
}

/**
 * @schema SsoAdminCreatePermissionSetRequest
 */
export interface SsoAdminCreatePermissionSetRequest {
  /**
   * @schema SsoAdminCreatePermissionSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema SsoAdminCreatePermissionSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsoAdminCreatePermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminCreatePermissionSetRequest#SessionDuration
   */
  readonly sessionDuration?: string;

  /**
   * @schema SsoAdminCreatePermissionSetRequest#RelayState
   */
  readonly relayState?: string;

  /**
   * @schema SsoAdminCreatePermissionSetRequest#Tags
   */
  readonly tags?: SsoAdminTag[];

}

/**
 * @schema SsoAdminCreatePermissionSetResponse
 */
export interface SsoAdminCreatePermissionSetResponse {
  /**
   * @schema SsoAdminCreatePermissionSetResponse#PermissionSet
   */
  readonly permissionSet?: SsoAdminPermissionSet;

}

/**
 * @schema SsoAdminDeleteAccountAssignmentRequest
 */
export interface SsoAdminDeleteAccountAssignmentRequest {
  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#TargetId
   */
  readonly targetId: string;

  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#TargetType
   */
  readonly targetType: string;

  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#PrincipalType
   */
  readonly principalType: string;

  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#PrincipalId
   */
  readonly principalId: string;

}

/**
 * @schema SsoAdminDeleteAccountAssignmentResponse
 */
export interface SsoAdminDeleteAccountAssignmentResponse {
  /**
   * @schema SsoAdminDeleteAccountAssignmentResponse#AccountAssignmentDeletionStatus
   */
  readonly accountAssignmentDeletionStatus?: SsoAdminAccountAssignmentOperationStatus;

}

/**
 * @schema SsoAdminDeleteInlinePolicyFromPermissionSetRequest
 */
export interface SsoAdminDeleteInlinePolicyFromPermissionSetRequest {
  /**
   * @schema SsoAdminDeleteInlinePolicyFromPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminDeleteInlinePolicyFromPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

}

/**
 * @schema SsoAdminDeleteInlinePolicyFromPermissionSetResponse
 */
export interface SsoAdminDeleteInlinePolicyFromPermissionSetResponse {
}

/**
 * @schema SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest
 */
export interface SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn: string;

}

/**
 * @schema SsoAdminDeleteInstanceAccessControlAttributeConfigurationResponse
 */
export interface SsoAdminDeleteInstanceAccessControlAttributeConfigurationResponse {
}

/**
 * @schema SsoAdminDeletePermissionSetRequest
 */
export interface SsoAdminDeletePermissionSetRequest {
  /**
   * @schema SsoAdminDeletePermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminDeletePermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

}

/**
 * @schema SsoAdminDeletePermissionSetResponse
 */
export interface SsoAdminDeletePermissionSetResponse {
}

/**
 * @schema SsoAdminDescribeAccountAssignmentCreationStatusRequest
 */
export interface SsoAdminDescribeAccountAssignmentCreationStatusRequest {
  /**
   * @schema SsoAdminDescribeAccountAssignmentCreationStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminDescribeAccountAssignmentCreationStatusRequest#AccountAssignmentCreationRequestId
   */
  readonly accountAssignmentCreationRequestId: string;

}

/**
 * @schema SsoAdminDescribeAccountAssignmentCreationStatusResponse
 */
export interface SsoAdminDescribeAccountAssignmentCreationStatusResponse {
  /**
   * @schema SsoAdminDescribeAccountAssignmentCreationStatusResponse#AccountAssignmentCreationStatus
   */
  readonly accountAssignmentCreationStatus?: SsoAdminAccountAssignmentOperationStatus;

}

/**
 * @schema SsoAdminDescribeAccountAssignmentDeletionStatusRequest
 */
export interface SsoAdminDescribeAccountAssignmentDeletionStatusRequest {
  /**
   * @schema SsoAdminDescribeAccountAssignmentDeletionStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminDescribeAccountAssignmentDeletionStatusRequest#AccountAssignmentDeletionRequestId
   */
  readonly accountAssignmentDeletionRequestId: string;

}

/**
 * @schema SsoAdminDescribeAccountAssignmentDeletionStatusResponse
 */
export interface SsoAdminDescribeAccountAssignmentDeletionStatusResponse {
  /**
   * @schema SsoAdminDescribeAccountAssignmentDeletionStatusResponse#AccountAssignmentDeletionStatus
   */
  readonly accountAssignmentDeletionStatus?: SsoAdminAccountAssignmentOperationStatus;

}

/**
 * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest
 */
export interface SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn: string;

}

/**
 * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse
 */
export interface SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse {
  /**
   * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse#Status
   */
  readonly status?: string;

  /**
   * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse#InstanceAccessControlAttributeConfiguration
   */
  readonly instanceAccessControlAttributeConfiguration?: SsoAdminInstanceAccessControlAttributeConfiguration;

}

/**
 * @schema SsoAdminDescribePermissionSetRequest
 */
export interface SsoAdminDescribePermissionSetRequest {
  /**
   * @schema SsoAdminDescribePermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminDescribePermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

}

/**
 * @schema SsoAdminDescribePermissionSetResponse
 */
export interface SsoAdminDescribePermissionSetResponse {
  /**
   * @schema SsoAdminDescribePermissionSetResponse#PermissionSet
   */
  readonly permissionSet?: SsoAdminPermissionSet;

}

/**
 * @schema SsoAdminDescribePermissionSetProvisioningStatusRequest
 */
export interface SsoAdminDescribePermissionSetProvisioningStatusRequest {
  /**
   * @schema SsoAdminDescribePermissionSetProvisioningStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminDescribePermissionSetProvisioningStatusRequest#ProvisionPermissionSetRequestId
   */
  readonly provisionPermissionSetRequestId: string;

}

/**
 * @schema SsoAdminDescribePermissionSetProvisioningStatusResponse
 */
export interface SsoAdminDescribePermissionSetProvisioningStatusResponse {
  /**
   * @schema SsoAdminDescribePermissionSetProvisioningStatusResponse#PermissionSetProvisioningStatus
   */
  readonly permissionSetProvisioningStatus?: SsoAdminPermissionSetProvisioningStatus;

}

/**
 * @schema SsoAdminDetachManagedPolicyFromPermissionSetRequest
 */
export interface SsoAdminDetachManagedPolicyFromPermissionSetRequest {
  /**
   * @schema SsoAdminDetachManagedPolicyFromPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminDetachManagedPolicyFromPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema SsoAdminDetachManagedPolicyFromPermissionSetRequest#ManagedPolicyArn
   */
  readonly managedPolicyArn: string;

}

/**
 * @schema SsoAdminDetachManagedPolicyFromPermissionSetResponse
 */
export interface SsoAdminDetachManagedPolicyFromPermissionSetResponse {
}

/**
 * @schema SsoAdminGetInlinePolicyForPermissionSetRequest
 */
export interface SsoAdminGetInlinePolicyForPermissionSetRequest {
  /**
   * @schema SsoAdminGetInlinePolicyForPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminGetInlinePolicyForPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

}

/**
 * @schema SsoAdminGetInlinePolicyForPermissionSetResponse
 */
export interface SsoAdminGetInlinePolicyForPermissionSetResponse {
  /**
   * @schema SsoAdminGetInlinePolicyForPermissionSetResponse#InlinePolicy
   */
  readonly inlinePolicy?: string;

}

/**
 * @schema SsoAdminListAccountAssignmentCreationStatusRequest
 */
export interface SsoAdminListAccountAssignmentCreationStatusRequest {
  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusRequest#Filter
   */
  readonly filter?: SsoAdminOperationStatusFilter;

}

/**
 * @schema SsoAdminListAccountAssignmentCreationStatusResponse
 */
export interface SsoAdminListAccountAssignmentCreationStatusResponse {
  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusResponse#AccountAssignmentsCreationStatus
   */
  readonly accountAssignmentsCreationStatus?: SsoAdminAccountAssignmentOperationStatusMetadata[];

  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListAccountAssignmentDeletionStatusRequest
 */
export interface SsoAdminListAccountAssignmentDeletionStatusRequest {
  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusRequest#Filter
   */
  readonly filter?: SsoAdminOperationStatusFilter;

}

/**
 * @schema SsoAdminListAccountAssignmentDeletionStatusResponse
 */
export interface SsoAdminListAccountAssignmentDeletionStatusResponse {
  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusResponse#AccountAssignmentsDeletionStatus
   */
  readonly accountAssignmentsDeletionStatus?: SsoAdminAccountAssignmentOperationStatusMetadata[];

  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListAccountAssignmentsRequest
 */
export interface SsoAdminListAccountAssignmentsRequest {
  /**
   * @schema SsoAdminListAccountAssignmentsRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminListAccountAssignmentsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema SsoAdminListAccountAssignmentsRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema SsoAdminListAccountAssignmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListAccountAssignmentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListAccountAssignmentsResponse
 */
export interface SsoAdminListAccountAssignmentsResponse {
  /**
   * @schema SsoAdminListAccountAssignmentsResponse#AccountAssignments
   */
  readonly accountAssignments?: SsoAdminAccountAssignment[];

  /**
   * @schema SsoAdminListAccountAssignmentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest
 */
export interface SsoAdminListAccountsForProvisionedPermissionSetRequest {
  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest#ProvisioningStatus
   */
  readonly provisioningStatus?: string;

  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListAccountsForProvisionedPermissionSetResponse
 */
export interface SsoAdminListAccountsForProvisionedPermissionSetResponse {
  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetResponse#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListInstancesRequest
 */
export interface SsoAdminListInstancesRequest {
  /**
   * @schema SsoAdminListInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListInstancesResponse
 */
export interface SsoAdminListInstancesResponse {
  /**
   * @schema SsoAdminListInstancesResponse#Instances
   */
  readonly instances?: SsoAdminInstanceMetadata[];

  /**
   * @schema SsoAdminListInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListManagedPoliciesInPermissionSetRequest
 */
export interface SsoAdminListManagedPoliciesInPermissionSetRequest {
  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListManagedPoliciesInPermissionSetResponse
 */
export interface SsoAdminListManagedPoliciesInPermissionSetResponse {
  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetResponse#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: SsoAdminAttachedManagedPolicy[];

  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListPermissionSetProvisioningStatusRequest
 */
export interface SsoAdminListPermissionSetProvisioningStatusRequest {
  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusRequest#Filter
   */
  readonly filter?: SsoAdminOperationStatusFilter;

}

/**
 * @schema SsoAdminListPermissionSetProvisioningStatusResponse
 */
export interface SsoAdminListPermissionSetProvisioningStatusResponse {
  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusResponse#PermissionSetsProvisioningStatus
   */
  readonly permissionSetsProvisioningStatus?: SsoAdminPermissionSetProvisioningStatusMetadata[];

  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListPermissionSetsRequest
 */
export interface SsoAdminListPermissionSetsRequest {
  /**
   * @schema SsoAdminListPermissionSetsRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminListPermissionSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoAdminListPermissionSetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SsoAdminListPermissionSetsResponse
 */
export interface SsoAdminListPermissionSetsResponse {
  /**
   * @schema SsoAdminListPermissionSetsResponse#PermissionSets
   */
  readonly permissionSets?: string[];

  /**
   * @schema SsoAdminListPermissionSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest
 */
export interface SsoAdminListPermissionSetsProvisionedToAccountRequest {
  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest#ProvisioningStatus
   */
  readonly provisioningStatus?: string;

  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListPermissionSetsProvisionedToAccountResponse
 */
export interface SsoAdminListPermissionSetsProvisionedToAccountResponse {
  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountResponse#PermissionSets
   */
  readonly permissionSets?: string[];

}

/**
 * @schema SsoAdminListTagsForResourceRequest
 */
export interface SsoAdminListTagsForResourceRequest {
  /**
   * @schema SsoAdminListTagsForResourceRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SsoAdminListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminListTagsForResourceResponse
 */
export interface SsoAdminListTagsForResourceResponse {
  /**
   * @schema SsoAdminListTagsForResourceResponse#Tags
   */
  readonly tags?: SsoAdminTag[];

  /**
   * @schema SsoAdminListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SsoAdminProvisionPermissionSetRequest
 */
export interface SsoAdminProvisionPermissionSetRequest {
  /**
   * @schema SsoAdminProvisionPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminProvisionPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema SsoAdminProvisionPermissionSetRequest#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema SsoAdminProvisionPermissionSetRequest#TargetType
   */
  readonly targetType: string;

}

/**
 * @schema SsoAdminProvisionPermissionSetResponse
 */
export interface SsoAdminProvisionPermissionSetResponse {
  /**
   * @schema SsoAdminProvisionPermissionSetResponse#PermissionSetProvisioningStatus
   */
  readonly permissionSetProvisioningStatus?: SsoAdminPermissionSetProvisioningStatus;

}

/**
 * @schema SsoAdminPutInlinePolicyToPermissionSetRequest
 */
export interface SsoAdminPutInlinePolicyToPermissionSetRequest {
  /**
   * @schema SsoAdminPutInlinePolicyToPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminPutInlinePolicyToPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema SsoAdminPutInlinePolicyToPermissionSetRequest#InlinePolicy
   */
  readonly inlinePolicy: string;

}

/**
 * @schema SsoAdminPutInlinePolicyToPermissionSetResponse
 */
export interface SsoAdminPutInlinePolicyToPermissionSetResponse {
}

/**
 * @schema SsoAdminTagResourceRequest
 */
export interface SsoAdminTagResourceRequest {
  /**
   * @schema SsoAdminTagResourceRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SsoAdminTagResourceRequest#Tags
   */
  readonly tags: SsoAdminTag[];

}

/**
 * @schema SsoAdminTagResourceResponse
 */
export interface SsoAdminTagResourceResponse {
}

/**
 * @schema SsoAdminUntagResourceRequest
 */
export interface SsoAdminUntagResourceRequest {
  /**
   * @schema SsoAdminUntagResourceRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SsoAdminUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SsoAdminUntagResourceResponse
 */
export interface SsoAdminUntagResourceResponse {
}

/**
 * @schema SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest
 */
export interface SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest#InstanceAccessControlAttributeConfiguration
   */
  readonly instanceAccessControlAttributeConfiguration: SsoAdminInstanceAccessControlAttributeConfiguration;

}

/**
 * @schema SsoAdminUpdateInstanceAccessControlAttributeConfigurationResponse
 */
export interface SsoAdminUpdateInstanceAccessControlAttributeConfigurationResponse {
}

/**
 * @schema SsoAdminUpdatePermissionSetRequest
 */
export interface SsoAdminUpdatePermissionSetRequest {
  /**
   * @schema SsoAdminUpdatePermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema SsoAdminUpdatePermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema SsoAdminUpdatePermissionSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsoAdminUpdatePermissionSetRequest#SessionDuration
   */
  readonly sessionDuration?: string;

  /**
   * @schema SsoAdminUpdatePermissionSetRequest#RelayState
   */
  readonly relayState?: string;

}

/**
 * @schema SsoAdminUpdatePermissionSetResponse
 */
export interface SsoAdminUpdatePermissionSetResponse {
}

/**
 * @schema SsoAdminAccountAssignmentOperationStatus
 */
export interface SsoAdminAccountAssignmentOperationStatus {
  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#Status
   */
  readonly status?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema SsoAdminInstanceAccessControlAttributeConfiguration
 */
export interface SsoAdminInstanceAccessControlAttributeConfiguration {
  /**
   * @schema SsoAdminInstanceAccessControlAttributeConfiguration#AccessControlAttributes
   */
  readonly accessControlAttributes: SsoAdminAccessControlAttribute[];

}

/**
 * @schema SsoAdminTag
 */
export interface SsoAdminTag {
  /**
   * @schema SsoAdminTag#Key
   */
  readonly key?: string;

  /**
   * @schema SsoAdminTag#Value
   */
  readonly value?: string;

}

/**
 * @schema SsoAdminPermissionSet
 */
export interface SsoAdminPermissionSet {
  /**
   * @schema SsoAdminPermissionSet#Name
   */
  readonly name?: string;

  /**
   * @schema SsoAdminPermissionSet#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminPermissionSet#Description
   */
  readonly description?: string;

  /**
   * @schema SsoAdminPermissionSet#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsoAdminPermissionSet#SessionDuration
   */
  readonly sessionDuration?: string;

  /**
   * @schema SsoAdminPermissionSet#RelayState
   */
  readonly relayState?: string;

}

/**
 * @schema SsoAdminPermissionSetProvisioningStatus
 */
export interface SsoAdminPermissionSetProvisioningStatus {
  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#Status
   */
  readonly status?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema SsoAdminOperationStatusFilter
 */
export interface SsoAdminOperationStatusFilter {
  /**
   * @schema SsoAdminOperationStatusFilter#Status
   */
  readonly status?: string;

}

/**
 * @schema SsoAdminAccountAssignmentOperationStatusMetadata
 */
export interface SsoAdminAccountAssignmentOperationStatusMetadata {
  /**
   * @schema SsoAdminAccountAssignmentOperationStatusMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatusMetadata#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatusMetadata#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema SsoAdminAccountAssignment
 */
export interface SsoAdminAccountAssignment {
  /**
   * @schema SsoAdminAccountAssignment#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SsoAdminAccountAssignment#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminAccountAssignment#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema SsoAdminAccountAssignment#PrincipalId
   */
  readonly principalId?: string;

}

/**
 * @schema SsoAdminInstanceMetadata
 */
export interface SsoAdminInstanceMetadata {
  /**
   * @schema SsoAdminInstanceMetadata#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminInstanceMetadata#IdentityStoreId
   */
  readonly identityStoreId?: string;

}

/**
 * @schema SsoAdminAttachedManagedPolicy
 */
export interface SsoAdminAttachedManagedPolicy {
  /**
   * @schema SsoAdminAttachedManagedPolicy#Name
   */
  readonly name?: string;

  /**
   * @schema SsoAdminAttachedManagedPolicy#Arn
   */
  readonly arn?: string;

}

/**
 * @schema SsoAdminPermissionSetProvisioningStatusMetadata
 */
export interface SsoAdminPermissionSetProvisioningStatusMetadata {
  /**
   * @schema SsoAdminPermissionSetProvisioningStatusMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatusMetadata#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatusMetadata#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema SsoAdminAccessControlAttribute
 */
export interface SsoAdminAccessControlAttribute {
  /**
   * @schema SsoAdminAccessControlAttribute#Key
   */
  readonly key: string;

  /**
   * @schema SsoAdminAccessControlAttribute#Value
   */
  readonly value: SsoAdminAccessControlAttributeValue;

}

/**
 * @schema SsoAdminAccessControlAttributeValue
 */
export interface SsoAdminAccessControlAttributeValue {
  /**
   * @schema SsoAdminAccessControlAttributeValue#Source
   */
  readonly source: string[];

}
