/**
 * @schema AssociateDelegateToResourceRequest
 */
export interface AssociateDelegateToResourceRequest {
  /**
   * @schema AssociateDelegateToResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema AssociateDelegateToResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema AssociateDelegateToResourceRequest#EntityId
   */
  readonly entityId: string;

}

/**
 * @schema AssociateDelegateToResourceResponse
 */
export interface AssociateDelegateToResourceResponse {
}

/**
 * @schema AssociateMemberToGroupRequest
 */
export interface AssociateMemberToGroupRequest {
  /**
   * @schema AssociateMemberToGroupRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema AssociateMemberToGroupRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema AssociateMemberToGroupRequest#MemberId
   */
  readonly memberId: string;

}

/**
 * @schema AssociateMemberToGroupResponse
 */
export interface AssociateMemberToGroupResponse {
}

/**
 * @schema CancelMailboxExportJobRequest
 */
export interface CancelMailboxExportJobRequest {
  /**
   * @schema CancelMailboxExportJobRequest#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema CancelMailboxExportJobRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema CancelMailboxExportJobRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema CancelMailboxExportJobResponse
 */
export interface CancelMailboxExportJobResponse {
}

/**
 * @schema CreateAliasRequest
 */
export interface CreateAliasRequest {
  /**
   * @schema CreateAliasRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema CreateAliasRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema CreateAliasRequest#Alias
   */
  readonly alias: string;

}

/**
 * @schema CreateAliasResponse
 */
export interface CreateAliasResponse {
}

/**
 * @schema CreateGroupRequest
 */
export interface CreateGroupRequest {
  /**
   * @schema CreateGroupRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema CreateGroupRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CreateGroupResponse
 */
export interface CreateGroupResponse {
  /**
   * @schema CreateGroupResponse#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema CreateOrganizationRequest
 */
export interface CreateOrganizationRequest {
  /**
   * @schema CreateOrganizationRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema CreateOrganizationRequest#Alias
   */
  readonly alias: string;

  /**
   * @schema CreateOrganizationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateOrganizationRequest#Domains
   */
  readonly domains?: Domain[];

  /**
   * @schema CreateOrganizationRequest#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema CreateOrganizationRequest#EnableInteroperability
   */
  readonly enableInteroperability?: boolean;

}

/**
 * @schema CreateOrganizationResponse
 */
export interface CreateOrganizationResponse {
  /**
   * @schema CreateOrganizationResponse#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * @schema CreateResourceRequest
 */
export interface CreateResourceRequest {
  /**
   * @schema CreateResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema CreateResourceRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateResourceRequest#Type
   */
  readonly type: string;

}

/**
 * @schema CreateResourceResponse
 */
export interface CreateResourceResponse {
  /**
   * @schema CreateResourceResponse#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * @schema CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * @schema CreateUserRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema CreateUserRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateUserRequest#DisplayName
   */
  readonly displayName: string;

  /**
   * @schema CreateUserRequest#Password
   */
  readonly password: string;

}

/**
 * @schema CreateUserResponse
 */
export interface CreateUserResponse {
  /**
   * @schema CreateUserResponse#UserId
   */
  readonly userId?: string;

}

/**
 * @schema DeleteAccessControlRuleRequest
 */
export interface DeleteAccessControlRuleRequest {
  /**
   * @schema DeleteAccessControlRuleRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DeleteAccessControlRuleRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteAccessControlRuleResponse
 */
export interface DeleteAccessControlRuleResponse {
}

/**
 * @schema DeleteAliasRequest
 */
export interface DeleteAliasRequest {
  /**
   * @schema DeleteAliasRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DeleteAliasRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema DeleteAliasRequest#Alias
   */
  readonly alias: string;

}

/**
 * @schema DeleteAliasResponse
 */
export interface DeleteAliasResponse {
}

/**
 * @schema DeleteGroupRequest
 */
export interface DeleteGroupRequest {
  /**
   * @schema DeleteGroupRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DeleteGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema DeleteGroupResponse
 */
export interface DeleteGroupResponse {
}

/**
 * @schema DeleteMailboxPermissionsRequest
 */
export interface DeleteMailboxPermissionsRequest {
  /**
   * @schema DeleteMailboxPermissionsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DeleteMailboxPermissionsRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema DeleteMailboxPermissionsRequest#GranteeId
   */
  readonly granteeId: string;

}

/**
 * @schema DeleteMailboxPermissionsResponse
 */
export interface DeleteMailboxPermissionsResponse {
}

/**
 * @schema DeleteOrganizationRequest
 */
export interface DeleteOrganizationRequest {
  /**
   * @schema DeleteOrganizationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema DeleteOrganizationRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DeleteOrganizationRequest#DeleteDirectory
   */
  readonly deleteDirectory: boolean;

}

/**
 * @schema DeleteOrganizationResponse
 */
export interface DeleteOrganizationResponse {
  /**
   * @schema DeleteOrganizationResponse#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema DeleteOrganizationResponse#State
   */
  readonly state?: string;

}

/**
 * @schema DeleteResourceRequest
 */
export interface DeleteResourceRequest {
  /**
   * @schema DeleteResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DeleteResourceRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema DeleteResourceResponse
 */
export interface DeleteResourceResponse {
}

/**
 * @schema DeleteRetentionPolicyRequest
 */
export interface DeleteRetentionPolicyRequest {
  /**
   * @schema DeleteRetentionPolicyRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DeleteRetentionPolicyRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteRetentionPolicyResponse
 */
export interface DeleteRetentionPolicyResponse {
}

/**
 * @schema DeleteUserRequest
 */
export interface DeleteUserRequest {
  /**
   * @schema DeleteUserRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DeleteUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema DeleteUserResponse
 */
export interface DeleteUserResponse {
}

/**
 * @schema DeregisterFromWorkMailRequest
 */
export interface DeregisterFromWorkMailRequest {
  /**
   * @schema DeregisterFromWorkMailRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DeregisterFromWorkMailRequest#EntityId
   */
  readonly entityId: string;

}

/**
 * @schema DeregisterFromWorkMailResponse
 */
export interface DeregisterFromWorkMailResponse {
}

/**
 * @schema DescribeGroupRequest
 */
export interface DescribeGroupRequest {
  /**
   * @schema DescribeGroupRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DescribeGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema DescribeGroupResponse
 */
export interface DescribeGroupResponse {
  /**
   * @schema DescribeGroupResponse#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema DescribeGroupResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeGroupResponse#Email
   */
  readonly email?: string;

  /**
   * @schema DescribeGroupResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeGroupResponse#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema DescribeGroupResponse#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema DescribeMailboxExportJobRequest
 */
export interface DescribeMailboxExportJobRequest {
  /**
   * @schema DescribeMailboxExportJobRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema DescribeMailboxExportJobRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema DescribeMailboxExportJobResponse
 */
export interface DescribeMailboxExportJobResponse {
  /**
   * @schema DescribeMailboxExportJobResponse#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema DescribeMailboxExportJobResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeMailboxExportJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeMailboxExportJobResponse#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema DescribeMailboxExportJobResponse#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema DescribeMailboxExportJobResponse#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema DescribeMailboxExportJobResponse#S3Path
   */
  readonly s3Path?: string;

  /**
   * @schema DescribeMailboxExportJobResponse#EstimatedProgress
   */
  readonly estimatedProgress?: number;

  /**
   * @schema DescribeMailboxExportJobResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeMailboxExportJobResponse#ErrorInfo
   */
  readonly errorInfo?: string;

  /**
   * @schema DescribeMailboxExportJobResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeMailboxExportJobResponse#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema DescribeOrganizationRequest
 */
export interface DescribeOrganizationRequest {
  /**
   * @schema DescribeOrganizationRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema DescribeOrganizationResponse
 */
export interface DescribeOrganizationResponse {
  /**
   * @schema DescribeOrganizationResponse#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema DescribeOrganizationResponse#Alias
   */
  readonly alias?: string;

  /**
   * @schema DescribeOrganizationResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeOrganizationResponse#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema DescribeOrganizationResponse#DirectoryType
   */
  readonly directoryType?: string;

  /**
   * @schema DescribeOrganizationResponse#DefaultMailDomain
   */
  readonly defaultMailDomain?: string;

  /**
   * @schema DescribeOrganizationResponse#CompletedDate
   */
  readonly completedDate?: string;

  /**
   * @schema DescribeOrganizationResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DescribeOrganizationResponse#ARN
   */
  readonly arn?: string;

}

/**
 * @schema DescribeResourceRequest
 */
export interface DescribeResourceRequest {
  /**
   * @schema DescribeResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DescribeResourceRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema DescribeResourceResponse
 */
export interface DescribeResourceResponse {
  /**
   * @schema DescribeResourceResponse#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DescribeResourceResponse#Email
   */
  readonly email?: string;

  /**
   * @schema DescribeResourceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeResourceResponse#Type
   */
  readonly type?: string;

  /**
   * @schema DescribeResourceResponse#BookingOptions
   */
  readonly bookingOptions?: BookingOptions;

  /**
   * @schema DescribeResourceResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeResourceResponse#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema DescribeResourceResponse#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema DescribeUserRequest
 */
export interface DescribeUserRequest {
  /**
   * @schema DescribeUserRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DescribeUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema DescribeUserResponse
 */
export interface DescribeUserResponse {
  /**
   * @schema DescribeUserResponse#UserId
   */
  readonly userId?: string;

  /**
   * @schema DescribeUserResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeUserResponse#Email
   */
  readonly email?: string;

  /**
   * @schema DescribeUserResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema DescribeUserResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeUserResponse#UserRole
   */
  readonly userRole?: string;

  /**
   * @schema DescribeUserResponse#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema DescribeUserResponse#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema DisassociateDelegateFromResourceRequest
 */
export interface DisassociateDelegateFromResourceRequest {
  /**
   * @schema DisassociateDelegateFromResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DisassociateDelegateFromResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DisassociateDelegateFromResourceRequest#EntityId
   */
  readonly entityId: string;

}

/**
 * @schema DisassociateDelegateFromResourceResponse
 */
export interface DisassociateDelegateFromResourceResponse {
}

/**
 * @schema DisassociateMemberFromGroupRequest
 */
export interface DisassociateMemberFromGroupRequest {
  /**
   * @schema DisassociateMemberFromGroupRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DisassociateMemberFromGroupRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema DisassociateMemberFromGroupRequest#MemberId
   */
  readonly memberId: string;

}

/**
 * @schema DisassociateMemberFromGroupResponse
 */
export interface DisassociateMemberFromGroupResponse {
}

/**
 * @schema GetAccessControlEffectRequest
 */
export interface GetAccessControlEffectRequest {
  /**
   * @schema GetAccessControlEffectRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema GetAccessControlEffectRequest#IpAddress
   */
  readonly ipAddress: string;

  /**
   * @schema GetAccessControlEffectRequest#Action
   */
  readonly action: string;

  /**
   * @schema GetAccessControlEffectRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema GetAccessControlEffectResponse
 */
export interface GetAccessControlEffectResponse {
  /**
   * @schema GetAccessControlEffectResponse#Effect
   */
  readonly effect?: string;

  /**
   * @schema GetAccessControlEffectResponse#MatchedRules
   */
  readonly matchedRules?: string[];

}

/**
 * @schema GetDefaultRetentionPolicyRequest
 */
export interface GetDefaultRetentionPolicyRequest {
  /**
   * @schema GetDefaultRetentionPolicyRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema GetDefaultRetentionPolicyResponse
 */
export interface GetDefaultRetentionPolicyResponse {
  /**
   * @schema GetDefaultRetentionPolicyResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetDefaultRetentionPolicyResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetDefaultRetentionPolicyResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetDefaultRetentionPolicyResponse#FolderConfigurations
   */
  readonly folderConfigurations?: FolderConfiguration[];

}

/**
 * @schema GetMailboxDetailsRequest
 */
export interface GetMailboxDetailsRequest {
  /**
   * @schema GetMailboxDetailsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema GetMailboxDetailsRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema GetMailboxDetailsResponse
 */
export interface GetMailboxDetailsResponse {
  /**
   * @schema GetMailboxDetailsResponse#MailboxQuota
   */
  readonly mailboxQuota?: number;

  /**
   * @schema GetMailboxDetailsResponse#MailboxSize
   */
  readonly mailboxSize?: number;

}

/**
 * @schema ListAccessControlRulesRequest
 */
export interface ListAccessControlRulesRequest {
  /**
   * @schema ListAccessControlRulesRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema ListAccessControlRulesResponse
 */
export interface ListAccessControlRulesResponse {
  /**
   * @schema ListAccessControlRulesResponse#Rules
   */
  readonly rules?: AccessControlRule[];

}

/**
 * @schema ListAliasesRequest
 */
export interface ListAliasesRequest {
  /**
   * @schema ListAliasesRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema ListAliasesRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema ListAliasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAliasesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAliasesResponse
 */
export interface ListAliasesResponse {
  /**
   * @schema ListAliasesResponse#Aliases
   */
  readonly aliases?: string[];

  /**
   * @schema ListAliasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGroupMembersRequest
 */
export interface ListGroupMembersRequest {
  /**
   * @schema ListGroupMembersRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema ListGroupMembersRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema ListGroupMembersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGroupMembersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListGroupMembersResponse
 */
export interface ListGroupMembersResponse {
  /**
   * @schema ListGroupMembersResponse#Members
   */
  readonly members?: Member[];

  /**
   * @schema ListGroupMembersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGroupsRequest
 */
export interface ListGroupsRequest {
  /**
   * @schema ListGroupsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema ListGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListGroupsResponse
 */
export interface ListGroupsResponse {
  /**
   * @schema ListGroupsResponse#Groups
   */
  readonly groups?: Group[];

  /**
   * @schema ListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMailboxExportJobsRequest
 */
export interface ListMailboxExportJobsRequest {
  /**
   * @schema ListMailboxExportJobsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema ListMailboxExportJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListMailboxExportJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListMailboxExportJobsResponse
 */
export interface ListMailboxExportJobsResponse {
  /**
   * @schema ListMailboxExportJobsResponse#Jobs
   */
  readonly jobs?: MailboxExportJob[];

  /**
   * @schema ListMailboxExportJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMailboxPermissionsRequest
 */
export interface ListMailboxPermissionsRequest {
  /**
   * @schema ListMailboxPermissionsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema ListMailboxPermissionsRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema ListMailboxPermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListMailboxPermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListMailboxPermissionsResponse
 */
export interface ListMailboxPermissionsResponse {
  /**
   * @schema ListMailboxPermissionsResponse#Permissions
   */
  readonly permissions?: Permission[];

  /**
   * @schema ListMailboxPermissionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOrganizationsRequest
 */
export interface ListOrganizationsRequest {
  /**
   * @schema ListOrganizationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListOrganizationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListOrganizationsResponse
 */
export interface ListOrganizationsResponse {
  /**
   * @schema ListOrganizationsResponse#OrganizationSummaries
   */
  readonly organizationSummaries?: OrganizationSummary[];

  /**
   * @schema ListOrganizationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourceDelegatesRequest
 */
export interface ListResourceDelegatesRequest {
  /**
   * @schema ListResourceDelegatesRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema ListResourceDelegatesRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ListResourceDelegatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourceDelegatesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResourceDelegatesResponse
 */
export interface ListResourceDelegatesResponse {
  /**
   * @schema ListResourceDelegatesResponse#Delegates
   */
  readonly delegates?: Delegate[];

  /**
   * @schema ListResourceDelegatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourcesRequest
 */
export interface ListResourcesRequest {
  /**
   * @schema ListResourcesRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema ListResourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourcesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResourcesResponse
 */
export interface ListResourcesResponse {
  /**
   * @schema ListResourcesResponse#Resources
   */
  readonly resources?: Resource[];

  /**
   * @schema ListResourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ListUsersRequest
 */
export interface ListUsersRequest {
  /**
   * @schema ListUsersRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema ListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListUsersResponse
 */
export interface ListUsersResponse {
  /**
   * @schema ListUsersResponse#Users
   */
  readonly users?: User[];

  /**
   * @schema ListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutAccessControlRuleRequest
 */
export interface PutAccessControlRuleRequest {
  /**
   * @schema PutAccessControlRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema PutAccessControlRuleRequest#Effect
   */
  readonly effect: string;

  /**
   * @schema PutAccessControlRuleRequest#Description
   */
  readonly description: string;

  /**
   * @schema PutAccessControlRuleRequest#IpRanges
   */
  readonly ipRanges?: string[];

  /**
   * @schema PutAccessControlRuleRequest#NotIpRanges
   */
  readonly notIpRanges?: string[];

  /**
   * @schema PutAccessControlRuleRequest#Actions
   */
  readonly actions?: string[];

  /**
   * @schema PutAccessControlRuleRequest#NotActions
   */
  readonly notActions?: string[];

  /**
   * @schema PutAccessControlRuleRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema PutAccessControlRuleRequest#NotUserIds
   */
  readonly notUserIds?: string[];

  /**
   * @schema PutAccessControlRuleRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema PutAccessControlRuleResponse
 */
export interface PutAccessControlRuleResponse {
}

/**
 * @schema PutMailboxPermissionsRequest
 */
export interface PutMailboxPermissionsRequest {
  /**
   * @schema PutMailboxPermissionsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema PutMailboxPermissionsRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema PutMailboxPermissionsRequest#GranteeId
   */
  readonly granteeId: string;

  /**
   * @schema PutMailboxPermissionsRequest#PermissionValues
   */
  readonly permissionValues: string[];

}

/**
 * @schema PutMailboxPermissionsResponse
 */
export interface PutMailboxPermissionsResponse {
}

/**
 * @schema PutRetentionPolicyRequest
 */
export interface PutRetentionPolicyRequest {
  /**
   * @schema PutRetentionPolicyRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema PutRetentionPolicyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema PutRetentionPolicyRequest#Name
   */
  readonly name: string;

  /**
   * @schema PutRetentionPolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema PutRetentionPolicyRequest#FolderConfigurations
   */
  readonly folderConfigurations: FolderConfiguration[];

}

/**
 * @schema PutRetentionPolicyResponse
 */
export interface PutRetentionPolicyResponse {
}

/**
 * @schema RegisterToWorkMailRequest
 */
export interface RegisterToWorkMailRequest {
  /**
   * @schema RegisterToWorkMailRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema RegisterToWorkMailRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema RegisterToWorkMailRequest#Email
   */
  readonly email: string;

}

/**
 * @schema RegisterToWorkMailResponse
 */
export interface RegisterToWorkMailResponse {
}

/**
 * @schema ResetPasswordRequest
 */
export interface ResetPasswordRequest {
  /**
   * @schema ResetPasswordRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema ResetPasswordRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ResetPasswordRequest#Password
   */
  readonly password: string;

}

/**
 * @schema ResetPasswordResponse
 */
export interface ResetPasswordResponse {
}

/**
 * @schema StartMailboxExportJobRequest
 */
export interface StartMailboxExportJobRequest {
  /**
   * @schema StartMailboxExportJobRequest#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema StartMailboxExportJobRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema StartMailboxExportJobRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema StartMailboxExportJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema StartMailboxExportJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema StartMailboxExportJobRequest#KmsKeyArn
   */
  readonly kmsKeyArn: string;

  /**
   * @schema StartMailboxExportJobRequest#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema StartMailboxExportJobRequest#S3Prefix
   */
  readonly s3Prefix: string;

}

/**
 * @schema StartMailboxExportJobResponse
 */
export interface StartMailboxExportJobResponse {
  /**
   * @schema StartMailboxExportJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
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
   * @schema UntagResourceRequest#ResourceARN
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
 * @schema UpdateMailboxQuotaRequest
 */
export interface UpdateMailboxQuotaRequest {
  /**
   * @schema UpdateMailboxQuotaRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema UpdateMailboxQuotaRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema UpdateMailboxQuotaRequest#MailboxQuota
   */
  readonly mailboxQuota: number;

}

/**
 * @schema UpdateMailboxQuotaResponse
 */
export interface UpdateMailboxQuotaResponse {
}

/**
 * @schema UpdatePrimaryEmailAddressRequest
 */
export interface UpdatePrimaryEmailAddressRequest {
  /**
   * @schema UpdatePrimaryEmailAddressRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema UpdatePrimaryEmailAddressRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema UpdatePrimaryEmailAddressRequest#Email
   */
  readonly email: string;

}

/**
 * @schema UpdatePrimaryEmailAddressResponse
 */
export interface UpdatePrimaryEmailAddressResponse {
}

/**
 * @schema UpdateResourceRequest
 */
export interface UpdateResourceRequest {
  /**
   * @schema UpdateResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema UpdateResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema UpdateResourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateResourceRequest#BookingOptions
   */
  readonly bookingOptions?: BookingOptions;

}

/**
 * @schema UpdateResourceResponse
 */
export interface UpdateResourceResponse {
}

/**
 * @schema Domain
 */
export interface Domain {
  /**
   * @schema Domain#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Domain#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema BookingOptions
 */
export interface BookingOptions {
  /**
   * @schema BookingOptions#AutoAcceptRequests
   */
  readonly autoAcceptRequests?: boolean;

  /**
   * @schema BookingOptions#AutoDeclineRecurringRequests
   */
  readonly autoDeclineRecurringRequests?: boolean;

  /**
   * @schema BookingOptions#AutoDeclineConflictingRequests
   */
  readonly autoDeclineConflictingRequests?: boolean;

}

/**
 * @schema FolderConfiguration
 */
export interface FolderConfiguration {
  /**
   * @schema FolderConfiguration#Name
   */
  readonly name: string;

  /**
   * @schema FolderConfiguration#Action
   */
  readonly action: string;

  /**
   * @schema FolderConfiguration#Period
   */
  readonly period?: number;

}

/**
 * @schema AccessControlRule
 */
export interface AccessControlRule {
  /**
   * @schema AccessControlRule#Name
   */
  readonly name?: string;

  /**
   * @schema AccessControlRule#Effect
   */
  readonly effect?: string;

  /**
   * @schema AccessControlRule#Description
   */
  readonly description?: string;

  /**
   * @schema AccessControlRule#IpRanges
   */
  readonly ipRanges?: string[];

  /**
   * @schema AccessControlRule#NotIpRanges
   */
  readonly notIpRanges?: string[];

  /**
   * @schema AccessControlRule#Actions
   */
  readonly actions?: string[];

  /**
   * @schema AccessControlRule#NotActions
   */
  readonly notActions?: string[];

  /**
   * @schema AccessControlRule#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema AccessControlRule#NotUserIds
   */
  readonly notUserIds?: string[];

  /**
   * @schema AccessControlRule#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema AccessControlRule#DateModified
   */
  readonly dateModified?: string;

}

/**
 * @schema Member
 */
export interface Member {
  /**
   * @schema Member#Id
   */
  readonly id?: string;

  /**
   * @schema Member#Name
   */
  readonly name?: string;

  /**
   * @schema Member#Type
   */
  readonly type?: string;

  /**
   * @schema Member#State
   */
  readonly state?: string;

  /**
   * @schema Member#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema Member#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema Group
 */
export interface Group {
  /**
   * @schema Group#Id
   */
  readonly id?: string;

  /**
   * @schema Group#Email
   */
  readonly email?: string;

  /**
   * @schema Group#Name
   */
  readonly name?: string;

  /**
   * @schema Group#State
   */
  readonly state?: string;

  /**
   * @schema Group#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema Group#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema MailboxExportJob
 */
export interface MailboxExportJob {
  /**
   * @schema MailboxExportJob#JobId
   */
  readonly jobId?: string;

  /**
   * @schema MailboxExportJob#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema MailboxExportJob#Description
   */
  readonly description?: string;

  /**
   * @schema MailboxExportJob#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema MailboxExportJob#S3Path
   */
  readonly s3Path?: string;

  /**
   * @schema MailboxExportJob#EstimatedProgress
   */
  readonly estimatedProgress?: number;

  /**
   * @schema MailboxExportJob#State
   */
  readonly state?: string;

  /**
   * @schema MailboxExportJob#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MailboxExportJob#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema Permission
 */
export interface Permission {
  /**
   * @schema Permission#GranteeId
   */
  readonly granteeId: string;

  /**
   * @schema Permission#GranteeType
   */
  readonly granteeType: string;

  /**
   * @schema Permission#PermissionValues
   */
  readonly permissionValues: string[];

}

/**
 * @schema OrganizationSummary
 */
export interface OrganizationSummary {
  /**
   * @schema OrganizationSummary#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema OrganizationSummary#Alias
   */
  readonly alias?: string;

  /**
   * @schema OrganizationSummary#DefaultMailDomain
   */
  readonly defaultMailDomain?: string;

  /**
   * @schema OrganizationSummary#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema OrganizationSummary#State
   */
  readonly state?: string;

}

/**
 * @schema Delegate
 */
export interface Delegate {
  /**
   * @schema Delegate#Id
   */
  readonly id: string;

  /**
   * @schema Delegate#Type
   */
  readonly type: string;

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#Id
   */
  readonly id?: string;

  /**
   * @schema Resource#Email
   */
  readonly email?: string;

  /**
   * @schema Resource#Name
   */
  readonly name?: string;

  /**
   * @schema Resource#Type
   */
  readonly type?: string;

  /**
   * @schema Resource#State
   */
  readonly state?: string;

  /**
   * @schema Resource#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema Resource#DisabledDate
   */
  readonly disabledDate?: string;

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
 * @schema User
 */
export interface User {
  /**
   * @schema User#Id
   */
  readonly id?: string;

  /**
   * @schema User#Email
   */
  readonly email?: string;

  /**
   * @schema User#Name
   */
  readonly name?: string;

  /**
   * @schema User#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema User#State
   */
  readonly state?: string;

  /**
   * @schema User#UserRole
   */
  readonly userRole?: string;

  /**
   * @schema User#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema User#DisabledDate
   */
  readonly disabledDate?: string;

}
