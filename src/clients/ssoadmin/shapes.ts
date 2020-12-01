/**
 * @schema AttachManagedPolicyToPermissionSetRequest
 */
export interface AttachManagedPolicyToPermissionSetRequest {
  /**
   * @schema AttachManagedPolicyToPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema AttachManagedPolicyToPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema AttachManagedPolicyToPermissionSetRequest#ManagedPolicyArn
   */
  readonly managedPolicyArn: string;

}

/**
 * @schema AttachManagedPolicyToPermissionSetResponse
 */
export interface AttachManagedPolicyToPermissionSetResponse {
}

/**
 * @schema CreateAccountAssignmentRequest
 */
export interface CreateAccountAssignmentRequest {
  /**
   * @schema CreateAccountAssignmentRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema CreateAccountAssignmentRequest#TargetId
   */
  readonly targetId: string;

  /**
   * @schema CreateAccountAssignmentRequest#TargetType
   */
  readonly targetType: string;

  /**
   * @schema CreateAccountAssignmentRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema CreateAccountAssignmentRequest#PrincipalType
   */
  readonly principalType: string;

  /**
   * @schema CreateAccountAssignmentRequest#PrincipalId
   */
  readonly principalId: string;

}

/**
 * @schema CreateAccountAssignmentResponse
 */
export interface CreateAccountAssignmentResponse {
  /**
   * @schema CreateAccountAssignmentResponse#AccountAssignmentCreationStatus
   */
  readonly accountAssignmentCreationStatus?: AccountAssignmentOperationStatus;

}

/**
 * @schema CreateInstanceAccessControlAttributeConfigurationRequest
 */
export interface CreateInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema CreateInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema CreateInstanceAccessControlAttributeConfigurationRequest#InstanceAccessControlAttributeConfiguration
   */
  readonly instanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;

}

/**
 * @schema CreateInstanceAccessControlAttributeConfigurationResponse
 */
export interface CreateInstanceAccessControlAttributeConfigurationResponse {
}

/**
 * @schema CreatePermissionSetRequest
 */
export interface CreatePermissionSetRequest {
  /**
   * @schema CreatePermissionSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreatePermissionSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreatePermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema CreatePermissionSetRequest#SessionDuration
   */
  readonly sessionDuration?: string;

  /**
   * @schema CreatePermissionSetRequest#RelayState
   */
  readonly relayState?: string;

  /**
   * @schema CreatePermissionSetRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePermissionSetResponse
 */
export interface CreatePermissionSetResponse {
  /**
   * @schema CreatePermissionSetResponse#PermissionSet
   */
  readonly permissionSet?: PermissionSet;

}

/**
 * @schema DeleteAccountAssignmentRequest
 */
export interface DeleteAccountAssignmentRequest {
  /**
   * @schema DeleteAccountAssignmentRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema DeleteAccountAssignmentRequest#TargetId
   */
  readonly targetId: string;

  /**
   * @schema DeleteAccountAssignmentRequest#TargetType
   */
  readonly targetType: string;

  /**
   * @schema DeleteAccountAssignmentRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema DeleteAccountAssignmentRequest#PrincipalType
   */
  readonly principalType: string;

  /**
   * @schema DeleteAccountAssignmentRequest#PrincipalId
   */
  readonly principalId: string;

}

/**
 * @schema DeleteAccountAssignmentResponse
 */
export interface DeleteAccountAssignmentResponse {
  /**
   * @schema DeleteAccountAssignmentResponse#AccountAssignmentDeletionStatus
   */
  readonly accountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;

}

/**
 * @schema DeleteInlinePolicyFromPermissionSetRequest
 */
export interface DeleteInlinePolicyFromPermissionSetRequest {
  /**
   * @schema DeleteInlinePolicyFromPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema DeleteInlinePolicyFromPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

}

/**
 * @schema DeleteInlinePolicyFromPermissionSetResponse
 */
export interface DeleteInlinePolicyFromPermissionSetResponse {
}

/**
 * @schema DeleteInstanceAccessControlAttributeConfigurationRequest
 */
export interface DeleteInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema DeleteInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn: string;

}

/**
 * @schema DeleteInstanceAccessControlAttributeConfigurationResponse
 */
export interface DeleteInstanceAccessControlAttributeConfigurationResponse {
}

/**
 * @schema DeletePermissionSetRequest
 */
export interface DeletePermissionSetRequest {
  /**
   * @schema DeletePermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema DeletePermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

}

/**
 * @schema DeletePermissionSetResponse
 */
export interface DeletePermissionSetResponse {
}

/**
 * @schema DescribeAccountAssignmentCreationStatusRequest
 */
export interface DescribeAccountAssignmentCreationStatusRequest {
  /**
   * @schema DescribeAccountAssignmentCreationStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema DescribeAccountAssignmentCreationStatusRequest#AccountAssignmentCreationRequestId
   */
  readonly accountAssignmentCreationRequestId: string;

}

/**
 * @schema DescribeAccountAssignmentCreationStatusResponse
 */
export interface DescribeAccountAssignmentCreationStatusResponse {
  /**
   * @schema DescribeAccountAssignmentCreationStatusResponse#AccountAssignmentCreationStatus
   */
  readonly accountAssignmentCreationStatus?: AccountAssignmentOperationStatus;

}

/**
 * @schema DescribeAccountAssignmentDeletionStatusRequest
 */
export interface DescribeAccountAssignmentDeletionStatusRequest {
  /**
   * @schema DescribeAccountAssignmentDeletionStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema DescribeAccountAssignmentDeletionStatusRequest#AccountAssignmentDeletionRequestId
   */
  readonly accountAssignmentDeletionRequestId: string;

}

/**
 * @schema DescribeAccountAssignmentDeletionStatusResponse
 */
export interface DescribeAccountAssignmentDeletionStatusResponse {
  /**
   * @schema DescribeAccountAssignmentDeletionStatusResponse#AccountAssignmentDeletionStatus
   */
  readonly accountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;

}

/**
 * @schema DescribeInstanceAccessControlAttributeConfigurationRequest
 */
export interface DescribeInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema DescribeInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn: string;

}

/**
 * @schema DescribeInstanceAccessControlAttributeConfigurationResponse
 */
export interface DescribeInstanceAccessControlAttributeConfigurationResponse {
  /**
   * @schema DescribeInstanceAccessControlAttributeConfigurationResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeInstanceAccessControlAttributeConfigurationResponse#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema DescribeInstanceAccessControlAttributeConfigurationResponse#InstanceAccessControlAttributeConfiguration
   */
  readonly instanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration;

}

/**
 * @schema DescribePermissionSetRequest
 */
export interface DescribePermissionSetRequest {
  /**
   * @schema DescribePermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema DescribePermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

}

/**
 * @schema DescribePermissionSetResponse
 */
export interface DescribePermissionSetResponse {
  /**
   * @schema DescribePermissionSetResponse#PermissionSet
   */
  readonly permissionSet?: PermissionSet;

}

/**
 * @schema DescribePermissionSetProvisioningStatusRequest
 */
export interface DescribePermissionSetProvisioningStatusRequest {
  /**
   * @schema DescribePermissionSetProvisioningStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema DescribePermissionSetProvisioningStatusRequest#ProvisionPermissionSetRequestId
   */
  readonly provisionPermissionSetRequestId: string;

}

/**
 * @schema DescribePermissionSetProvisioningStatusResponse
 */
export interface DescribePermissionSetProvisioningStatusResponse {
  /**
   * @schema DescribePermissionSetProvisioningStatusResponse#PermissionSetProvisioningStatus
   */
  readonly permissionSetProvisioningStatus?: PermissionSetProvisioningStatus;

}

/**
 * @schema DetachManagedPolicyFromPermissionSetRequest
 */
export interface DetachManagedPolicyFromPermissionSetRequest {
  /**
   * @schema DetachManagedPolicyFromPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema DetachManagedPolicyFromPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema DetachManagedPolicyFromPermissionSetRequest#ManagedPolicyArn
   */
  readonly managedPolicyArn: string;

}

/**
 * @schema DetachManagedPolicyFromPermissionSetResponse
 */
export interface DetachManagedPolicyFromPermissionSetResponse {
}

/**
 * @schema GetInlinePolicyForPermissionSetRequest
 */
export interface GetInlinePolicyForPermissionSetRequest {
  /**
   * @schema GetInlinePolicyForPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema GetInlinePolicyForPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

}

/**
 * @schema GetInlinePolicyForPermissionSetResponse
 */
export interface GetInlinePolicyForPermissionSetResponse {
  /**
   * @schema GetInlinePolicyForPermissionSetResponse#InlinePolicy
   */
  readonly inlinePolicy?: string;

}

/**
 * @schema ListAccountAssignmentCreationStatusRequest
 */
export interface ListAccountAssignmentCreationStatusRequest {
  /**
   * @schema ListAccountAssignmentCreationStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ListAccountAssignmentCreationStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAccountAssignmentCreationStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccountAssignmentCreationStatusRequest#Filter
   */
  readonly filter?: OperationStatusFilter;

}

/**
 * @schema ListAccountAssignmentCreationStatusResponse
 */
export interface ListAccountAssignmentCreationStatusResponse {
  /**
   * @schema ListAccountAssignmentCreationStatusResponse#AccountAssignmentsCreationStatus
   */
  readonly accountAssignmentsCreationStatus?: AccountAssignmentOperationStatusMetadata[];

  /**
   * @schema ListAccountAssignmentCreationStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAccountAssignmentDeletionStatusRequest
 */
export interface ListAccountAssignmentDeletionStatusRequest {
  /**
   * @schema ListAccountAssignmentDeletionStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ListAccountAssignmentDeletionStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAccountAssignmentDeletionStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccountAssignmentDeletionStatusRequest#Filter
   */
  readonly filter?: OperationStatusFilter;

}

/**
 * @schema ListAccountAssignmentDeletionStatusResponse
 */
export interface ListAccountAssignmentDeletionStatusResponse {
  /**
   * @schema ListAccountAssignmentDeletionStatusResponse#AccountAssignmentsDeletionStatus
   */
  readonly accountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusMetadata[];

  /**
   * @schema ListAccountAssignmentDeletionStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAccountAssignmentsRequest
 */
export interface ListAccountAssignmentsRequest {
  /**
   * @schema ListAccountAssignmentsRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ListAccountAssignmentsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListAccountAssignmentsRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema ListAccountAssignmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAccountAssignmentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAccountAssignmentsResponse
 */
export interface ListAccountAssignmentsResponse {
  /**
   * @schema ListAccountAssignmentsResponse#AccountAssignments
   */
  readonly accountAssignments?: AccountAssignment[];

  /**
   * @schema ListAccountAssignmentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAccountsForProvisionedPermissionSetRequest
 */
export interface ListAccountsForProvisionedPermissionSetRequest {
  /**
   * @schema ListAccountsForProvisionedPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ListAccountsForProvisionedPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema ListAccountsForProvisionedPermissionSetRequest#ProvisioningStatus
   */
  readonly provisioningStatus?: string;

  /**
   * @schema ListAccountsForProvisionedPermissionSetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAccountsForProvisionedPermissionSetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAccountsForProvisionedPermissionSetResponse
 */
export interface ListAccountsForProvisionedPermissionSetResponse {
  /**
   * @schema ListAccountsForProvisionedPermissionSetResponse#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ListAccountsForProvisionedPermissionSetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInstancesRequest
 */
export interface ListInstancesRequest {
  /**
   * @schema ListInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInstancesResponse
 */
export interface ListInstancesResponse {
  /**
   * @schema ListInstancesResponse#Instances
   */
  readonly instances?: InstanceMetadata[];

  /**
   * @schema ListInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListManagedPoliciesInPermissionSetRequest
 */
export interface ListManagedPoliciesInPermissionSetRequest {
  /**
   * @schema ListManagedPoliciesInPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ListManagedPoliciesInPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema ListManagedPoliciesInPermissionSetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListManagedPoliciesInPermissionSetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListManagedPoliciesInPermissionSetResponse
 */
export interface ListManagedPoliciesInPermissionSetResponse {
  /**
   * @schema ListManagedPoliciesInPermissionSetResponse#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: AttachedManagedPolicy[];

  /**
   * @schema ListManagedPoliciesInPermissionSetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPermissionSetProvisioningStatusRequest
 */
export interface ListPermissionSetProvisioningStatusRequest {
  /**
   * @schema ListPermissionSetProvisioningStatusRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ListPermissionSetProvisioningStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPermissionSetProvisioningStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPermissionSetProvisioningStatusRequest#Filter
   */
  readonly filter?: OperationStatusFilter;

}

/**
 * @schema ListPermissionSetProvisioningStatusResponse
 */
export interface ListPermissionSetProvisioningStatusResponse {
  /**
   * @schema ListPermissionSetProvisioningStatusResponse#PermissionSetsProvisioningStatus
   */
  readonly permissionSetsProvisioningStatus?: PermissionSetProvisioningStatusMetadata[];

  /**
   * @schema ListPermissionSetProvisioningStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPermissionSetsRequest
 */
export interface ListPermissionSetsRequest {
  /**
   * @schema ListPermissionSetsRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ListPermissionSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPermissionSetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPermissionSetsResponse
 */
export interface ListPermissionSetsResponse {
  /**
   * @schema ListPermissionSetsResponse#PermissionSets
   */
  readonly permissionSets?: string[];

  /**
   * @schema ListPermissionSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPermissionSetsProvisionedToAccountRequest
 */
export interface ListPermissionSetsProvisionedToAccountRequest {
  /**
   * @schema ListPermissionSetsProvisionedToAccountRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ListPermissionSetsProvisionedToAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListPermissionSetsProvisionedToAccountRequest#ProvisioningStatus
   */
  readonly provisioningStatus?: string;

  /**
   * @schema ListPermissionSetsProvisionedToAccountRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPermissionSetsProvisionedToAccountRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPermissionSetsProvisionedToAccountResponse
 */
export interface ListPermissionSetsProvisionedToAccountResponse {
  /**
   * @schema ListPermissionSetsProvisionedToAccountResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPermissionSetsProvisionedToAccountResponse#PermissionSets
   */
  readonly permissionSets?: string[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

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
 * @schema ProvisionPermissionSetRequest
 */
export interface ProvisionPermissionSetRequest {
  /**
   * @schema ProvisionPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ProvisionPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema ProvisionPermissionSetRequest#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema ProvisionPermissionSetRequest#TargetType
   */
  readonly targetType: string;

}

/**
 * @schema ProvisionPermissionSetResponse
 */
export interface ProvisionPermissionSetResponse {
  /**
   * @schema ProvisionPermissionSetResponse#PermissionSetProvisioningStatus
   */
  readonly permissionSetProvisioningStatus?: PermissionSetProvisioningStatus;

}

/**
 * @schema PutInlinePolicyToPermissionSetRequest
 */
export interface PutInlinePolicyToPermissionSetRequest {
  /**
   * @schema PutInlinePolicyToPermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema PutInlinePolicyToPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema PutInlinePolicyToPermissionSetRequest#InlinePolicy
   */
  readonly inlinePolicy: string;

}

/**
 * @schema PutInlinePolicyToPermissionSetResponse
 */
export interface PutInlinePolicyToPermissionSetResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#InstanceArn
   */
  readonly instanceArn: string;

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
   * @schema UntagResourceRequest#InstanceArn
   */
  readonly instanceArn: string;

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
 * @schema UpdateInstanceAccessControlAttributeConfigurationRequest
 */
export interface UpdateInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema UpdateInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema UpdateInstanceAccessControlAttributeConfigurationRequest#InstanceAccessControlAttributeConfiguration
   */
  readonly instanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;

}

/**
 * @schema UpdateInstanceAccessControlAttributeConfigurationResponse
 */
export interface UpdateInstanceAccessControlAttributeConfigurationResponse {
}

/**
 * @schema UpdatePermissionSetRequest
 */
export interface UpdatePermissionSetRequest {
  /**
   * @schema UpdatePermissionSetRequest#InstanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema UpdatePermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn: string;

  /**
   * @schema UpdatePermissionSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdatePermissionSetRequest#SessionDuration
   */
  readonly sessionDuration?: string;

  /**
   * @schema UpdatePermissionSetRequest#RelayState
   */
  readonly relayState?: string;

}

/**
 * @schema UpdatePermissionSetResponse
 */
export interface UpdatePermissionSetResponse {
}

/**
 * @schema AccountAssignmentOperationStatus
 */
export interface AccountAssignmentOperationStatus {
  /**
   * @schema AccountAssignmentOperationStatus#Status
   */
  readonly status?: string;

  /**
   * @schema AccountAssignmentOperationStatus#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema AccountAssignmentOperationStatus#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema AccountAssignmentOperationStatus#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema AccountAssignmentOperationStatus#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema AccountAssignmentOperationStatus#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema AccountAssignmentOperationStatus#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema AccountAssignmentOperationStatus#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema AccountAssignmentOperationStatus#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema InstanceAccessControlAttributeConfiguration
 */
export interface InstanceAccessControlAttributeConfiguration {
  /**
   * @schema InstanceAccessControlAttributeConfiguration#AccessControlAttributes
   */
  readonly accessControlAttributes: AccessControlAttribute[];

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema PermissionSet
 */
export interface PermissionSet {
  /**
   * @schema PermissionSet#Name
   */
  readonly name?: string;

  /**
   * @schema PermissionSet#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema PermissionSet#Description
   */
  readonly description?: string;

  /**
   * @schema PermissionSet#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema PermissionSet#SessionDuration
   */
  readonly sessionDuration?: string;

  /**
   * @schema PermissionSet#RelayState
   */
  readonly relayState?: string;

}

/**
 * @schema PermissionSetProvisioningStatus
 */
export interface PermissionSetProvisioningStatus {
  /**
   * @schema PermissionSetProvisioningStatus#Status
   */
  readonly status?: string;

  /**
   * @schema PermissionSetProvisioningStatus#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema PermissionSetProvisioningStatus#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema PermissionSetProvisioningStatus#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema PermissionSetProvisioningStatus#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PermissionSetProvisioningStatus#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema OperationStatusFilter
 */
export interface OperationStatusFilter {
  /**
   * @schema OperationStatusFilter#Status
   */
  readonly status?: string;

}

/**
 * @schema AccountAssignmentOperationStatusMetadata
 */
export interface AccountAssignmentOperationStatusMetadata {
  /**
   * @schema AccountAssignmentOperationStatusMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema AccountAssignmentOperationStatusMetadata#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema AccountAssignmentOperationStatusMetadata#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema AccountAssignment
 */
export interface AccountAssignment {
  /**
   * @schema AccountAssignment#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema AccountAssignment#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema AccountAssignment#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema AccountAssignment#PrincipalId
   */
  readonly principalId?: string;

}

/**
 * @schema InstanceMetadata
 */
export interface InstanceMetadata {
  /**
   * @schema InstanceMetadata#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema InstanceMetadata#IdentityStoreId
   */
  readonly identityStoreId?: string;

}

/**
 * @schema AttachedManagedPolicy
 */
export interface AttachedManagedPolicy {
  /**
   * @schema AttachedManagedPolicy#Name
   */
  readonly name?: string;

  /**
   * @schema AttachedManagedPolicy#Arn
   */
  readonly arn?: string;

}

/**
 * @schema PermissionSetProvisioningStatusMetadata
 */
export interface PermissionSetProvisioningStatusMetadata {
  /**
   * @schema PermissionSetProvisioningStatusMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema PermissionSetProvisioningStatusMetadata#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema PermissionSetProvisioningStatusMetadata#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema AccessControlAttribute
 */
export interface AccessControlAttribute {
  /**
   * @schema AccessControlAttribute#Key
   */
  readonly key: string;

  /**
   * @schema AccessControlAttribute#Value
   */
  readonly value: AccessControlAttributeValue;

}

/**
 * @schema AccessControlAttributeValue
 */
export interface AccessControlAttributeValue {
  /**
   * @schema AccessControlAttributeValue#Source
   */
  readonly source: string[];

}
