/**
 * @schema WorkMailAssociateDelegateToResourceRequest
 */
export interface WorkMailAssociateDelegateToResourceRequest {
  /**
   * @schema WorkMailAssociateDelegateToResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailAssociateDelegateToResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkMailAssociateDelegateToResourceRequest#EntityId
   */
  readonly entityId: string;

}

/**
 * @schema WorkMailAssociateDelegateToResourceResponse
 */
export interface WorkMailAssociateDelegateToResourceResponse {
}

/**
 * @schema WorkMailAssociateMemberToGroupRequest
 */
export interface WorkMailAssociateMemberToGroupRequest {
  /**
   * @schema WorkMailAssociateMemberToGroupRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailAssociateMemberToGroupRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema WorkMailAssociateMemberToGroupRequest#MemberId
   */
  readonly memberId: string;

}

/**
 * @schema WorkMailAssociateMemberToGroupResponse
 */
export interface WorkMailAssociateMemberToGroupResponse {
}

/**
 * @schema WorkMailCancelMailboxExportJobRequest
 */
export interface WorkMailCancelMailboxExportJobRequest {
  /**
   * @schema WorkMailCancelMailboxExportJobRequest#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema WorkMailCancelMailboxExportJobRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema WorkMailCancelMailboxExportJobRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema WorkMailCancelMailboxExportJobResponse
 */
export interface WorkMailCancelMailboxExportJobResponse {
}

/**
 * @schema WorkMailCreateAliasRequest
 */
export interface WorkMailCreateAliasRequest {
  /**
   * @schema WorkMailCreateAliasRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailCreateAliasRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema WorkMailCreateAliasRequest#Alias
   */
  readonly alias: string;

}

/**
 * @schema WorkMailCreateAliasResponse
 */
export interface WorkMailCreateAliasResponse {
}

/**
 * @schema WorkMailCreateGroupRequest
 */
export interface WorkMailCreateGroupRequest {
  /**
   * @schema WorkMailCreateGroupRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailCreateGroupRequest#Name
   */
  readonly name: string;

}

/**
 * @schema WorkMailCreateGroupResponse
 */
export interface WorkMailCreateGroupResponse {
  /**
   * @schema WorkMailCreateGroupResponse#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema WorkMailCreateOrganizationRequest
 */
export interface WorkMailCreateOrganizationRequest {
  /**
   * @schema WorkMailCreateOrganizationRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkMailCreateOrganizationRequest#Alias
   */
  readonly alias: string;

  /**
   * @schema WorkMailCreateOrganizationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema WorkMailCreateOrganizationRequest#Domains
   */
  readonly domains?: WorkMailDomain[];

  /**
   * @schema WorkMailCreateOrganizationRequest#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema WorkMailCreateOrganizationRequest#EnableInteroperability
   */
  readonly enableInteroperability?: boolean;

}

/**
 * @schema WorkMailCreateOrganizationResponse
 */
export interface WorkMailCreateOrganizationResponse {
  /**
   * @schema WorkMailCreateOrganizationResponse#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * @schema WorkMailCreateResourceRequest
 */
export interface WorkMailCreateResourceRequest {
  /**
   * @schema WorkMailCreateResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailCreateResourceRequest#Name
   */
  readonly name: string;

  /**
   * @schema WorkMailCreateResourceRequest#Type
   */
  readonly type: string;

}

/**
 * @schema WorkMailCreateResourceResponse
 */
export interface WorkMailCreateResourceResponse {
  /**
   * @schema WorkMailCreateResourceResponse#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * @schema WorkMailCreateUserRequest
 */
export interface WorkMailCreateUserRequest {
  /**
   * @schema WorkMailCreateUserRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailCreateUserRequest#Name
   */
  readonly name: string;

  /**
   * @schema WorkMailCreateUserRequest#DisplayName
   */
  readonly displayName: string;

  /**
   * @schema WorkMailCreateUserRequest#Password
   */
  readonly password: string;

}

/**
 * @schema WorkMailCreateUserResponse
 */
export interface WorkMailCreateUserResponse {
  /**
   * @schema WorkMailCreateUserResponse#UserId
   */
  readonly userId?: string;

}

/**
 * @schema WorkMailDeleteAccessControlRuleRequest
 */
export interface WorkMailDeleteAccessControlRuleRequest {
  /**
   * @schema WorkMailDeleteAccessControlRuleRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDeleteAccessControlRuleRequest#Name
   */
  readonly name: string;

}

/**
 * @schema WorkMailDeleteAccessControlRuleResponse
 */
export interface WorkMailDeleteAccessControlRuleResponse {
}

/**
 * @schema WorkMailDeleteAliasRequest
 */
export interface WorkMailDeleteAliasRequest {
  /**
   * @schema WorkMailDeleteAliasRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDeleteAliasRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema WorkMailDeleteAliasRequest#Alias
   */
  readonly alias: string;

}

/**
 * @schema WorkMailDeleteAliasResponse
 */
export interface WorkMailDeleteAliasResponse {
}

/**
 * @schema WorkMailDeleteGroupRequest
 */
export interface WorkMailDeleteGroupRequest {
  /**
   * @schema WorkMailDeleteGroupRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDeleteGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema WorkMailDeleteGroupResponse
 */
export interface WorkMailDeleteGroupResponse {
}

/**
 * @schema WorkMailDeleteMailboxPermissionsRequest
 */
export interface WorkMailDeleteMailboxPermissionsRequest {
  /**
   * @schema WorkMailDeleteMailboxPermissionsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDeleteMailboxPermissionsRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema WorkMailDeleteMailboxPermissionsRequest#GranteeId
   */
  readonly granteeId: string;

}

/**
 * @schema WorkMailDeleteMailboxPermissionsResponse
 */
export interface WorkMailDeleteMailboxPermissionsResponse {
}

/**
 * @schema WorkMailDeleteOrganizationRequest
 */
export interface WorkMailDeleteOrganizationRequest {
  /**
   * @schema WorkMailDeleteOrganizationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema WorkMailDeleteOrganizationRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDeleteOrganizationRequest#DeleteDirectory
   */
  readonly deleteDirectory: boolean;

}

/**
 * @schema WorkMailDeleteOrganizationResponse
 */
export interface WorkMailDeleteOrganizationResponse {
  /**
   * @schema WorkMailDeleteOrganizationResponse#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteOrganizationResponse#State
   */
  readonly state?: string;

}

/**
 * @schema WorkMailDeleteResourceRequest
 */
export interface WorkMailDeleteResourceRequest {
  /**
   * @schema WorkMailDeleteResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDeleteResourceRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema WorkMailDeleteResourceResponse
 */
export interface WorkMailDeleteResourceResponse {
}

/**
 * @schema WorkMailDeleteRetentionPolicyRequest
 */
export interface WorkMailDeleteRetentionPolicyRequest {
  /**
   * @schema WorkMailDeleteRetentionPolicyRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDeleteRetentionPolicyRequest#Id
   */
  readonly id: string;

}

/**
 * @schema WorkMailDeleteRetentionPolicyResponse
 */
export interface WorkMailDeleteRetentionPolicyResponse {
}

/**
 * @schema WorkMailDeleteUserRequest
 */
export interface WorkMailDeleteUserRequest {
  /**
   * @schema WorkMailDeleteUserRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDeleteUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema WorkMailDeleteUserResponse
 */
export interface WorkMailDeleteUserResponse {
}

/**
 * @schema WorkMailDeregisterFromWorkMailRequest
 */
export interface WorkMailDeregisterFromWorkMailRequest {
  /**
   * @schema WorkMailDeregisterFromWorkMailRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDeregisterFromWorkMailRequest#EntityId
   */
  readonly entityId: string;

}

/**
 * @schema WorkMailDeregisterFromWorkMailResponse
 */
export interface WorkMailDeregisterFromWorkMailResponse {
}

/**
 * @schema WorkMailDescribeGroupRequest
 */
export interface WorkMailDescribeGroupRequest {
  /**
   * @schema WorkMailDescribeGroupRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDescribeGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema WorkMailDescribeGroupResponse
 */
export interface WorkMailDescribeGroupResponse {
  /**
   * @schema WorkMailDescribeGroupResponse#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkMailDescribeGroupResponse#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailDescribeGroupResponse#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailDescribeGroupResponse#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailDescribeGroupResponse#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailDescribeGroupResponse#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema WorkMailDescribeMailboxExportJobRequest
 */
export interface WorkMailDescribeMailboxExportJobRequest {
  /**
   * @schema WorkMailDescribeMailboxExportJobRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema WorkMailDescribeMailboxExportJobResponse
 */
export interface WorkMailDescribeMailboxExportJobResponse {
  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#S3Path
   */
  readonly s3Path?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#EstimatedProgress
   */
  readonly estimatedProgress?: number;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#ErrorInfo
   */
  readonly errorInfo?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema WorkMailDescribeOrganizationRequest
 */
export interface WorkMailDescribeOrganizationRequest {
  /**
   * @schema WorkMailDescribeOrganizationRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema WorkMailDescribeOrganizationResponse
 */
export interface WorkMailDescribeOrganizationResponse {
  /**
   * @schema WorkMailDescribeOrganizationResponse#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#Alias
   */
  readonly alias?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#DirectoryType
   */
  readonly directoryType?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#DefaultMailDomain
   */
  readonly defaultMailDomain?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#CompletedDate
   */
  readonly completedDate?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#ARN
   */
  readonly arn?: string;

}

/**
 * @schema WorkMailDescribeResourceRequest
 */
export interface WorkMailDescribeResourceRequest {
  /**
   * @schema WorkMailDescribeResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDescribeResourceRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema WorkMailDescribeResourceResponse
 */
export interface WorkMailDescribeResourceResponse {
  /**
   * @schema WorkMailDescribeResourceResponse#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#Type
   */
  readonly type?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#BookingOptions
   */
  readonly bookingOptions?: WorkMailBookingOptions;

  /**
   * @schema WorkMailDescribeResourceResponse#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema WorkMailDescribeUserRequest
 */
export interface WorkMailDescribeUserRequest {
  /**
   * @schema WorkMailDescribeUserRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDescribeUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema WorkMailDescribeUserResponse
 */
export interface WorkMailDescribeUserResponse {
  /**
   * @schema WorkMailDescribeUserResponse#UserId
   */
  readonly userId?: string;

  /**
   * @schema WorkMailDescribeUserResponse#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailDescribeUserResponse#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailDescribeUserResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkMailDescribeUserResponse#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailDescribeUserResponse#UserRole
   */
  readonly userRole?: string;

  /**
   * @schema WorkMailDescribeUserResponse#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailDescribeUserResponse#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema WorkMailDisassociateDelegateFromResourceRequest
 */
export interface WorkMailDisassociateDelegateFromResourceRequest {
  /**
   * @schema WorkMailDisassociateDelegateFromResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDisassociateDelegateFromResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkMailDisassociateDelegateFromResourceRequest#EntityId
   */
  readonly entityId: string;

}

/**
 * @schema WorkMailDisassociateDelegateFromResourceResponse
 */
export interface WorkMailDisassociateDelegateFromResourceResponse {
}

/**
 * @schema WorkMailDisassociateMemberFromGroupRequest
 */
export interface WorkMailDisassociateMemberFromGroupRequest {
  /**
   * @schema WorkMailDisassociateMemberFromGroupRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailDisassociateMemberFromGroupRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema WorkMailDisassociateMemberFromGroupRequest#MemberId
   */
  readonly memberId: string;

}

/**
 * @schema WorkMailDisassociateMemberFromGroupResponse
 */
export interface WorkMailDisassociateMemberFromGroupResponse {
}

/**
 * @schema WorkMailGetAccessControlEffectRequest
 */
export interface WorkMailGetAccessControlEffectRequest {
  /**
   * @schema WorkMailGetAccessControlEffectRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailGetAccessControlEffectRequest#IpAddress
   */
  readonly ipAddress: string;

  /**
   * @schema WorkMailGetAccessControlEffectRequest#Action
   */
  readonly action: string;

  /**
   * @schema WorkMailGetAccessControlEffectRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema WorkMailGetAccessControlEffectResponse
 */
export interface WorkMailGetAccessControlEffectResponse {
  /**
   * @schema WorkMailGetAccessControlEffectResponse#Effect
   */
  readonly effect?: string;

  /**
   * @schema WorkMailGetAccessControlEffectResponse#MatchedRules
   */
  readonly matchedRules?: string[];

}

/**
 * @schema WorkMailGetDefaultRetentionPolicyRequest
 */
export interface WorkMailGetDefaultRetentionPolicyRequest {
  /**
   * @schema WorkMailGetDefaultRetentionPolicyRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema WorkMailGetDefaultRetentionPolicyResponse
 */
export interface WorkMailGetDefaultRetentionPolicyResponse {
  /**
   * @schema WorkMailGetDefaultRetentionPolicyResponse#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailGetDefaultRetentionPolicyResponse#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailGetDefaultRetentionPolicyResponse#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailGetDefaultRetentionPolicyResponse#FolderConfigurations
   */
  readonly folderConfigurations?: WorkMailFolderConfiguration[];

}

/**
 * @schema WorkMailGetMailboxDetailsRequest
 */
export interface WorkMailGetMailboxDetailsRequest {
  /**
   * @schema WorkMailGetMailboxDetailsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailGetMailboxDetailsRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema WorkMailGetMailboxDetailsResponse
 */
export interface WorkMailGetMailboxDetailsResponse {
  /**
   * @schema WorkMailGetMailboxDetailsResponse#MailboxQuota
   */
  readonly mailboxQuota?: number;

  /**
   * @schema WorkMailGetMailboxDetailsResponse#MailboxSize
   */
  readonly mailboxSize?: number;

}

/**
 * @schema WorkMailListAccessControlRulesRequest
 */
export interface WorkMailListAccessControlRulesRequest {
  /**
   * @schema WorkMailListAccessControlRulesRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema WorkMailListAccessControlRulesResponse
 */
export interface WorkMailListAccessControlRulesResponse {
  /**
   * @schema WorkMailListAccessControlRulesResponse#Rules
   */
  readonly rules?: WorkMailAccessControlRule[];

}

/**
 * @schema WorkMailListAliasesRequest
 */
export interface WorkMailListAliasesRequest {
  /**
   * @schema WorkMailListAliasesRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailListAliasesRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema WorkMailListAliasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListAliasesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkMailListAliasesResponse
 */
export interface WorkMailListAliasesResponse {
  /**
   * @schema WorkMailListAliasesResponse#Aliases
   */
  readonly aliases?: string[];

  /**
   * @schema WorkMailListAliasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkMailListGroupMembersRequest
 */
export interface WorkMailListGroupMembersRequest {
  /**
   * @schema WorkMailListGroupMembersRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailListGroupMembersRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema WorkMailListGroupMembersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListGroupMembersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkMailListGroupMembersResponse
 */
export interface WorkMailListGroupMembersResponse {
  /**
   * @schema WorkMailListGroupMembersResponse#Members
   */
  readonly members?: WorkMailMember[];

  /**
   * @schema WorkMailListGroupMembersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkMailListGroupsRequest
 */
export interface WorkMailListGroupsRequest {
  /**
   * @schema WorkMailListGroupsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailListGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkMailListGroupsResponse
 */
export interface WorkMailListGroupsResponse {
  /**
   * @schema WorkMailListGroupsResponse#Groups
   */
  readonly groups?: WorkMailGroup[];

  /**
   * @schema WorkMailListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkMailListMailboxExportJobsRequest
 */
export interface WorkMailListMailboxExportJobsRequest {
  /**
   * @schema WorkMailListMailboxExportJobsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailListMailboxExportJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListMailboxExportJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkMailListMailboxExportJobsResponse
 */
export interface WorkMailListMailboxExportJobsResponse {
  /**
   * @schema WorkMailListMailboxExportJobsResponse#Jobs
   */
  readonly jobs?: WorkMailMailboxExportJob[];

  /**
   * @schema WorkMailListMailboxExportJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkMailListMailboxPermissionsRequest
 */
export interface WorkMailListMailboxPermissionsRequest {
  /**
   * @schema WorkMailListMailboxPermissionsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailListMailboxPermissionsRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema WorkMailListMailboxPermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListMailboxPermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkMailListMailboxPermissionsResponse
 */
export interface WorkMailListMailboxPermissionsResponse {
  /**
   * @schema WorkMailListMailboxPermissionsResponse#Permissions
   */
  readonly permissions?: WorkMailPermission[];

  /**
   * @schema WorkMailListMailboxPermissionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkMailListOrganizationsRequest
 */
export interface WorkMailListOrganizationsRequest {
  /**
   * @schema WorkMailListOrganizationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListOrganizationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkMailListOrganizationsResponse
 */
export interface WorkMailListOrganizationsResponse {
  /**
   * @schema WorkMailListOrganizationsResponse#OrganizationSummaries
   */
  readonly organizationSummaries?: WorkMailOrganizationSummary[];

  /**
   * @schema WorkMailListOrganizationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkMailListResourceDelegatesRequest
 */
export interface WorkMailListResourceDelegatesRequest {
  /**
   * @schema WorkMailListResourceDelegatesRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailListResourceDelegatesRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkMailListResourceDelegatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListResourceDelegatesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkMailListResourceDelegatesResponse
 */
export interface WorkMailListResourceDelegatesResponse {
  /**
   * @schema WorkMailListResourceDelegatesResponse#Delegates
   */
  readonly delegates?: WorkMailDelegate[];

  /**
   * @schema WorkMailListResourceDelegatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkMailListResourcesRequest
 */
export interface WorkMailListResourcesRequest {
  /**
   * @schema WorkMailListResourcesRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailListResourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListResourcesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkMailListResourcesResponse
 */
export interface WorkMailListResourcesResponse {
  /**
   * @schema WorkMailListResourcesResponse#Resources
   */
  readonly resources?: WorkMailResource[];

  /**
   * @schema WorkMailListResourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkMailListTagsForResourceRequest
 */
export interface WorkMailListTagsForResourceRequest {
  /**
   * @schema WorkMailListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema WorkMailListTagsForResourceResponse
 */
export interface WorkMailListTagsForResourceResponse {
  /**
   * @schema WorkMailListTagsForResourceResponse#Tags
   */
  readonly tags?: WorkMailTag[];

}

/**
 * @schema WorkMailListUsersRequest
 */
export interface WorkMailListUsersRequest {
  /**
   * @schema WorkMailListUsersRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkMailListUsersResponse
 */
export interface WorkMailListUsersResponse {
  /**
   * @schema WorkMailListUsersResponse#Users
   */
  readonly users?: WorkMailUser[];

  /**
   * @schema WorkMailListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkMailPutAccessControlRuleRequest
 */
export interface WorkMailPutAccessControlRuleRequest {
  /**
   * @schema WorkMailPutAccessControlRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema WorkMailPutAccessControlRuleRequest#Effect
   */
  readonly effect: string;

  /**
   * @schema WorkMailPutAccessControlRuleRequest#Description
   */
  readonly description: string;

  /**
   * @schema WorkMailPutAccessControlRuleRequest#IpRanges
   */
  readonly ipRanges?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#NotIpRanges
   */
  readonly notIpRanges?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#Actions
   */
  readonly actions?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#NotActions
   */
  readonly notActions?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#NotUserIds
   */
  readonly notUserIds?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema WorkMailPutAccessControlRuleResponse
 */
export interface WorkMailPutAccessControlRuleResponse {
}

/**
 * @schema WorkMailPutMailboxPermissionsRequest
 */
export interface WorkMailPutMailboxPermissionsRequest {
  /**
   * @schema WorkMailPutMailboxPermissionsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailPutMailboxPermissionsRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema WorkMailPutMailboxPermissionsRequest#GranteeId
   */
  readonly granteeId: string;

  /**
   * @schema WorkMailPutMailboxPermissionsRequest#PermissionValues
   */
  readonly permissionValues: string[];

}

/**
 * @schema WorkMailPutMailboxPermissionsResponse
 */
export interface WorkMailPutMailboxPermissionsResponse {
}

/**
 * @schema WorkMailPutRetentionPolicyRequest
 */
export interface WorkMailPutRetentionPolicyRequest {
  /**
   * @schema WorkMailPutRetentionPolicyRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailPutRetentionPolicyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailPutRetentionPolicyRequest#Name
   */
  readonly name: string;

  /**
   * @schema WorkMailPutRetentionPolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailPutRetentionPolicyRequest#FolderConfigurations
   */
  readonly folderConfigurations: WorkMailFolderConfiguration[];

}

/**
 * @schema WorkMailPutRetentionPolicyResponse
 */
export interface WorkMailPutRetentionPolicyResponse {
}

/**
 * @schema WorkMailRegisterToWorkMailRequest
 */
export interface WorkMailRegisterToWorkMailRequest {
  /**
   * @schema WorkMailRegisterToWorkMailRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailRegisterToWorkMailRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema WorkMailRegisterToWorkMailRequest#Email
   */
  readonly email: string;

}

/**
 * @schema WorkMailRegisterToWorkMailResponse
 */
export interface WorkMailRegisterToWorkMailResponse {
}

/**
 * @schema WorkMailResetPasswordRequest
 */
export interface WorkMailResetPasswordRequest {
  /**
   * @schema WorkMailResetPasswordRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailResetPasswordRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema WorkMailResetPasswordRequest#Password
   */
  readonly password: string;

}

/**
 * @schema WorkMailResetPasswordResponse
 */
export interface WorkMailResetPasswordResponse {
}

/**
 * @schema WorkMailStartMailboxExportJobRequest
 */
export interface WorkMailStartMailboxExportJobRequest {
  /**
   * @schema WorkMailStartMailboxExportJobRequest#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#KmsKeyArn
   */
  readonly kmsKeyArn: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#S3Prefix
   */
  readonly s3Prefix: string;

}

/**
 * @schema WorkMailStartMailboxExportJobResponse
 */
export interface WorkMailStartMailboxExportJobResponse {
  /**
   * @schema WorkMailStartMailboxExportJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema WorkMailTagResourceRequest
 */
export interface WorkMailTagResourceRequest {
  /**
   * @schema WorkMailTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema WorkMailTagResourceRequest#Tags
   */
  readonly tags: WorkMailTag[];

}

/**
 * @schema WorkMailTagResourceResponse
 */
export interface WorkMailTagResourceResponse {
}

/**
 * @schema WorkMailUntagResourceRequest
 */
export interface WorkMailUntagResourceRequest {
  /**
   * @schema WorkMailUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema WorkMailUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema WorkMailUntagResourceResponse
 */
export interface WorkMailUntagResourceResponse {
}

/**
 * @schema WorkMailUpdateMailboxQuotaRequest
 */
export interface WorkMailUpdateMailboxQuotaRequest {
  /**
   * @schema WorkMailUpdateMailboxQuotaRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailUpdateMailboxQuotaRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema WorkMailUpdateMailboxQuotaRequest#MailboxQuota
   */
  readonly mailboxQuota: number;

}

/**
 * @schema WorkMailUpdateMailboxQuotaResponse
 */
export interface WorkMailUpdateMailboxQuotaResponse {
}

/**
 * @schema WorkMailUpdatePrimaryEmailAddressRequest
 */
export interface WorkMailUpdatePrimaryEmailAddressRequest {
  /**
   * @schema WorkMailUpdatePrimaryEmailAddressRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailUpdatePrimaryEmailAddressRequest#EntityId
   */
  readonly entityId: string;

  /**
   * @schema WorkMailUpdatePrimaryEmailAddressRequest#Email
   */
  readonly email: string;

}

/**
 * @schema WorkMailUpdatePrimaryEmailAddressResponse
 */
export interface WorkMailUpdatePrimaryEmailAddressResponse {
}

/**
 * @schema WorkMailUpdateResourceRequest
 */
export interface WorkMailUpdateResourceRequest {
  /**
   * @schema WorkMailUpdateResourceRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkMailUpdateResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkMailUpdateResourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailUpdateResourceRequest#BookingOptions
   */
  readonly bookingOptions?: WorkMailBookingOptions;

}

/**
 * @schema WorkMailUpdateResourceResponse
 */
export interface WorkMailUpdateResourceResponse {
}

/**
 * @schema WorkMailDomain
 */
export interface WorkMailDomain {
  /**
   * @schema WorkMailDomain#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema WorkMailDomain#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema WorkMailBookingOptions
 */
export interface WorkMailBookingOptions {
  /**
   * @schema WorkMailBookingOptions#AutoAcceptRequests
   */
  readonly autoAcceptRequests?: boolean;

  /**
   * @schema WorkMailBookingOptions#AutoDeclineRecurringRequests
   */
  readonly autoDeclineRecurringRequests?: boolean;

  /**
   * @schema WorkMailBookingOptions#AutoDeclineConflictingRequests
   */
  readonly autoDeclineConflictingRequests?: boolean;

}

/**
 * @schema WorkMailFolderConfiguration
 */
export interface WorkMailFolderConfiguration {
  /**
   * @schema WorkMailFolderConfiguration#Name
   */
  readonly name: string;

  /**
   * @schema WorkMailFolderConfiguration#Action
   */
  readonly action: string;

  /**
   * @schema WorkMailFolderConfiguration#Period
   */
  readonly period?: number;

}

/**
 * @schema WorkMailAccessControlRule
 */
export interface WorkMailAccessControlRule {
  /**
   * @schema WorkMailAccessControlRule#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailAccessControlRule#Effect
   */
  readonly effect?: string;

  /**
   * @schema WorkMailAccessControlRule#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailAccessControlRule#IpRanges
   */
  readonly ipRanges?: string[];

  /**
   * @schema WorkMailAccessControlRule#NotIpRanges
   */
  readonly notIpRanges?: string[];

  /**
   * @schema WorkMailAccessControlRule#Actions
   */
  readonly actions?: string[];

  /**
   * @schema WorkMailAccessControlRule#NotActions
   */
  readonly notActions?: string[];

  /**
   * @schema WorkMailAccessControlRule#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema WorkMailAccessControlRule#NotUserIds
   */
  readonly notUserIds?: string[];

  /**
   * @schema WorkMailAccessControlRule#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema WorkMailAccessControlRule#DateModified
   */
  readonly dateModified?: string;

}

/**
 * @schema WorkMailMember
 */
export interface WorkMailMember {
  /**
   * @schema WorkMailMember#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailMember#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailMember#Type
   */
  readonly type?: string;

  /**
   * @schema WorkMailMember#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailMember#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailMember#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema WorkMailGroup
 */
export interface WorkMailGroup {
  /**
   * @schema WorkMailGroup#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailGroup#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailGroup#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailGroup#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailGroup#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailGroup#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema WorkMailMailboxExportJob
 */
export interface WorkMailMailboxExportJob {
  /**
   * @schema WorkMailMailboxExportJob#JobId
   */
  readonly jobId?: string;

  /**
   * @schema WorkMailMailboxExportJob#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailMailboxExportJob#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailMailboxExportJob#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema WorkMailMailboxExportJob#S3Path
   */
  readonly s3Path?: string;

  /**
   * @schema WorkMailMailboxExportJob#EstimatedProgress
   */
  readonly estimatedProgress?: number;

  /**
   * @schema WorkMailMailboxExportJob#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailMailboxExportJob#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema WorkMailMailboxExportJob#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema WorkMailPermission
 */
export interface WorkMailPermission {
  /**
   * @schema WorkMailPermission#GranteeId
   */
  readonly granteeId: string;

  /**
   * @schema WorkMailPermission#GranteeType
   */
  readonly granteeType: string;

  /**
   * @schema WorkMailPermission#PermissionValues
   */
  readonly permissionValues: string[];

}

/**
 * @schema WorkMailOrganizationSummary
 */
export interface WorkMailOrganizationSummary {
  /**
   * @schema WorkMailOrganizationSummary#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailOrganizationSummary#Alias
   */
  readonly alias?: string;

  /**
   * @schema WorkMailOrganizationSummary#DefaultMailDomain
   */
  readonly defaultMailDomain?: string;

  /**
   * @schema WorkMailOrganizationSummary#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema WorkMailOrganizationSummary#State
   */
  readonly state?: string;

}

/**
 * @schema WorkMailDelegate
 */
export interface WorkMailDelegate {
  /**
   * @schema WorkMailDelegate#Id
   */
  readonly id: string;

  /**
   * @schema WorkMailDelegate#Type
   */
  readonly type: string;

}

/**
 * @schema WorkMailResource
 */
export interface WorkMailResource {
  /**
   * @schema WorkMailResource#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailResource#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailResource#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailResource#Type
   */
  readonly type?: string;

  /**
   * @schema WorkMailResource#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailResource#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailResource#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * @schema WorkMailTag
 */
export interface WorkMailTag {
  /**
   * @schema WorkMailTag#Key
   */
  readonly key: string;

  /**
   * @schema WorkMailTag#Value
   */
  readonly value: string;

}

/**
 * @schema WorkMailUser
 */
export interface WorkMailUser {
  /**
   * @schema WorkMailUser#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailUser#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailUser#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailUser#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkMailUser#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailUser#UserRole
   */
  readonly userRole?: string;

  /**
   * @schema WorkMailUser#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailUser#DisabledDate
   */
  readonly disabledDate?: string;

}
