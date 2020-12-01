/**
 * @schema AssociateConnectionAliasRequest
 */
export interface AssociateConnectionAliasRequest {
  /**
   * @schema AssociateConnectionAliasRequest#AliasId
   */
  readonly aliasId: string;

  /**
   * @schema AssociateConnectionAliasRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema AssociateConnectionAliasResult
 */
export interface AssociateConnectionAliasResult {
  /**
   * @schema AssociateConnectionAliasResult#ConnectionIdentifier
   */
  readonly connectionIdentifier?: string;

}

/**
 * @schema AssociateIpGroupsRequest
 */
export interface AssociateIpGroupsRequest {
  /**
   * @schema AssociateIpGroupsRequest#DirectoryId
   */
  readonly directoryId: string;

  /**
   * @schema AssociateIpGroupsRequest#GroupIds
   */
  readonly groupIds: string[];

}

/**
 * @schema AssociateIpGroupsResult
 */
export interface AssociateIpGroupsResult {
}

/**
 * @schema AuthorizeIpRulesRequest
 */
export interface AuthorizeIpRulesRequest {
  /**
   * @schema AuthorizeIpRulesRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema AuthorizeIpRulesRequest#UserRules
   */
  readonly userRules: IpRuleItem[];

}

/**
 * @schema AuthorizeIpRulesResult
 */
export interface AuthorizeIpRulesResult {
}

/**
 * @schema CopyWorkspaceImageRequest
 */
export interface CopyWorkspaceImageRequest {
  /**
   * @schema CopyWorkspaceImageRequest#Name
   */
  readonly name: string;

  /**
   * @schema CopyWorkspaceImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CopyWorkspaceImageRequest#SourceImageId
   */
  readonly sourceImageId: string;

  /**
   * @schema CopyWorkspaceImageRequest#SourceRegion
   */
  readonly sourceRegion: string;

  /**
   * @schema CopyWorkspaceImageRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CopyWorkspaceImageResult
 */
export interface CopyWorkspaceImageResult {
  /**
   * @schema CopyWorkspaceImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema CreateConnectionAliasRequest
 */
export interface CreateConnectionAliasRequest {
  /**
   * @schema CreateConnectionAliasRequest#ConnectionString
   */
  readonly connectionString: string;

  /**
   * @schema CreateConnectionAliasRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateConnectionAliasResult
 */
export interface CreateConnectionAliasResult {
  /**
   * @schema CreateConnectionAliasResult#AliasId
   */
  readonly aliasId?: string;

}

/**
 * @schema CreateIpGroupRequest
 */
export interface CreateIpGroupRequest {
  /**
   * @schema CreateIpGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema CreateIpGroupRequest#GroupDesc
   */
  readonly groupDesc?: string;

  /**
   * @schema CreateIpGroupRequest#UserRules
   */
  readonly userRules?: IpRuleItem[];

  /**
   * @schema CreateIpGroupRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateIpGroupResult
 */
export interface CreateIpGroupResult {
  /**
   * @schema CreateIpGroupResult#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema CreateTagsRequest
 */
export interface CreateTagsRequest {
  /**
   * @schema CreateTagsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema CreateTagsRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema CreateTagsResult
 */
export interface CreateTagsResult {
}

/**
 * @schema CreateWorkspacesRequest
 */
export interface CreateWorkspacesRequest {
  /**
   * @schema CreateWorkspacesRequest#Workspaces
   */
  readonly workspaces: WorkspaceRequest[];

}

/**
 * @schema CreateWorkspacesResult
 */
export interface CreateWorkspacesResult {
  /**
   * @schema CreateWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: FailedCreateWorkspaceRequest[];

  /**
   * @schema CreateWorkspacesResult#PendingRequests
   */
  readonly pendingRequests?: Workspace[];

}

/**
 * @schema DeleteConnectionAliasRequest
 */
export interface DeleteConnectionAliasRequest {
  /**
   * @schema DeleteConnectionAliasRequest#AliasId
   */
  readonly aliasId: string;

}

/**
 * @schema DeleteConnectionAliasResult
 */
export interface DeleteConnectionAliasResult {
}

/**
 * @schema DeleteIpGroupRequest
 */
export interface DeleteIpGroupRequest {
  /**
   * @schema DeleteIpGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema DeleteIpGroupResult
 */
export interface DeleteIpGroupResult {
}

/**
 * @schema DeleteTagsRequest
 */
export interface DeleteTagsRequest {
  /**
   * @schema DeleteTagsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeleteTagsRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DeleteTagsResult
 */
export interface DeleteTagsResult {
}

/**
 * @schema DeleteWorkspaceImageRequest
 */
export interface DeleteWorkspaceImageRequest {
  /**
   * @schema DeleteWorkspaceImageRequest#ImageId
   */
  readonly imageId: string;

}

/**
 * @schema DeleteWorkspaceImageResult
 */
export interface DeleteWorkspaceImageResult {
}

/**
 * @schema DeregisterWorkspaceDirectoryRequest
 */
export interface DeregisterWorkspaceDirectoryRequest {
  /**
   * @schema DeregisterWorkspaceDirectoryRequest#DirectoryId
   */
  readonly directoryId: string;

}

/**
 * @schema DeregisterWorkspaceDirectoryResult
 */
export interface DeregisterWorkspaceDirectoryResult {
}

/**
 * @schema DescribeAccountRequest
 */
export interface DescribeAccountRequest {
}

/**
 * @schema DescribeAccountResult
 */
export interface DescribeAccountResult {
  /**
   * @schema DescribeAccountResult#DedicatedTenancySupport
   */
  readonly dedicatedTenancySupport?: string;

  /**
   * @schema DescribeAccountResult#DedicatedTenancyManagementCidrRange
   */
  readonly dedicatedTenancyManagementCidrRange?: string;

}

/**
 * @schema DescribeAccountModificationsRequest
 */
export interface DescribeAccountModificationsRequest {
  /**
   * @schema DescribeAccountModificationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAccountModificationsResult
 */
export interface DescribeAccountModificationsResult {
  /**
   * @schema DescribeAccountModificationsResult#AccountModifications
   */
  readonly accountModifications?: AccountModification[];

  /**
   * @schema DescribeAccountModificationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClientPropertiesRequest
 */
export interface DescribeClientPropertiesRequest {
  /**
   * @schema DescribeClientPropertiesRequest#ResourceIds
   */
  readonly resourceIds: string[];

}

/**
 * @schema DescribeClientPropertiesResult
 */
export interface DescribeClientPropertiesResult {
  /**
   * @schema DescribeClientPropertiesResult#ClientPropertiesList
   */
  readonly clientPropertiesList?: ClientPropertiesResult[];

}

/**
 * @schema DescribeConnectionAliasPermissionsRequest
 */
export interface DescribeConnectionAliasPermissionsRequest {
  /**
   * @schema DescribeConnectionAliasPermissionsRequest#AliasId
   */
  readonly aliasId: string;

  /**
   * @schema DescribeConnectionAliasPermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeConnectionAliasPermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeConnectionAliasPermissionsResult
 */
export interface DescribeConnectionAliasPermissionsResult {
  /**
   * @schema DescribeConnectionAliasPermissionsResult#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema DescribeConnectionAliasPermissionsResult#ConnectionAliasPermissions
   */
  readonly connectionAliasPermissions?: ConnectionAliasPermission[];

  /**
   * @schema DescribeConnectionAliasPermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeConnectionAliasesRequest
 */
export interface DescribeConnectionAliasesRequest {
  /**
   * @schema DescribeConnectionAliasesRequest#AliasIds
   */
  readonly aliasIds?: string[];

  /**
   * @schema DescribeConnectionAliasesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DescribeConnectionAliasesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeConnectionAliasesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeConnectionAliasesResult
 */
export interface DescribeConnectionAliasesResult {
  /**
   * @schema DescribeConnectionAliasesResult#ConnectionAliases
   */
  readonly connectionAliases?: ConnectionAlias[];

  /**
   * @schema DescribeConnectionAliasesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeIpGroupsRequest
 */
export interface DescribeIpGroupsRequest {
  /**
   * @schema DescribeIpGroupsRequest#GroupIds
   */
  readonly groupIds?: string[];

  /**
   * @schema DescribeIpGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeIpGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeIpGroupsResult
 */
export interface DescribeIpGroupsResult {
  /**
   * @schema DescribeIpGroupsResult#Result
   */
  readonly result?: WorkspacesIpGroup[];

  /**
   * @schema DescribeIpGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTagsRequest
 */
export interface DescribeTagsRequest {
  /**
   * @schema DescribeTagsRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema DescribeTagsResult
 */
export interface DescribeTagsResult {
  /**
   * @schema DescribeTagsResult#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema DescribeWorkspaceBundlesRequest
 */
export interface DescribeWorkspaceBundlesRequest {
  /**
   * @schema DescribeWorkspaceBundlesRequest#BundleIds
   */
  readonly bundleIds?: string[];

  /**
   * @schema DescribeWorkspaceBundlesRequest#Owner
   */
  readonly owner?: string;

  /**
   * @schema DescribeWorkspaceBundlesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeWorkspaceBundlesResult
 */
export interface DescribeWorkspaceBundlesResult {
  /**
   * @schema DescribeWorkspaceBundlesResult#Bundles
   */
  readonly bundles?: WorkspaceBundle[];

  /**
   * @schema DescribeWorkspaceBundlesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeWorkspaceDirectoriesRequest
 */
export interface DescribeWorkspaceDirectoriesRequest {
  /**
   * @schema DescribeWorkspaceDirectoriesRequest#DirectoryIds
   */
  readonly directoryIds?: string[];

  /**
   * @schema DescribeWorkspaceDirectoriesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeWorkspaceDirectoriesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeWorkspaceDirectoriesResult
 */
export interface DescribeWorkspaceDirectoriesResult {
  /**
   * @schema DescribeWorkspaceDirectoriesResult#Directories
   */
  readonly directories?: WorkspaceDirectory[];

  /**
   * @schema DescribeWorkspaceDirectoriesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeWorkspaceImagePermissionsRequest
 */
export interface DescribeWorkspaceImagePermissionsRequest {
  /**
   * @schema DescribeWorkspaceImagePermissionsRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema DescribeWorkspaceImagePermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeWorkspaceImagePermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeWorkspaceImagePermissionsResult
 */
export interface DescribeWorkspaceImagePermissionsResult {
  /**
   * @schema DescribeWorkspaceImagePermissionsResult#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema DescribeWorkspaceImagePermissionsResult#ImagePermissions
   */
  readonly imagePermissions?: ImagePermission[];

  /**
   * @schema DescribeWorkspaceImagePermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeWorkspaceImagesRequest
 */
export interface DescribeWorkspaceImagesRequest {
  /**
   * @schema DescribeWorkspaceImagesRequest#ImageIds
   */
  readonly imageIds?: string[];

  /**
   * @schema DescribeWorkspaceImagesRequest#ImageType
   */
  readonly imageType?: string;

  /**
   * @schema DescribeWorkspaceImagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeWorkspaceImagesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeWorkspaceImagesResult
 */
export interface DescribeWorkspaceImagesResult {
  /**
   * @schema DescribeWorkspaceImagesResult#Images
   */
  readonly images?: WorkspaceImage[];

  /**
   * @schema DescribeWorkspaceImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeWorkspaceSnapshotsRequest
 */
export interface DescribeWorkspaceSnapshotsRequest {
  /**
   * @schema DescribeWorkspaceSnapshotsRequest#WorkspaceId
   */
  readonly workspaceId: string;

}

/**
 * @schema DescribeWorkspaceSnapshotsResult
 */
export interface DescribeWorkspaceSnapshotsResult {
  /**
   * @schema DescribeWorkspaceSnapshotsResult#RebuildSnapshots
   */
  readonly rebuildSnapshots?: Snapshot[];

  /**
   * @schema DescribeWorkspaceSnapshotsResult#RestoreSnapshots
   */
  readonly restoreSnapshots?: Snapshot[];

}

/**
 * @schema DescribeWorkspacesRequest
 */
export interface DescribeWorkspacesRequest {
  /**
   * @schema DescribeWorkspacesRequest#WorkspaceIds
   */
  readonly workspaceIds?: string[];

  /**
   * @schema DescribeWorkspacesRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema DescribeWorkspacesRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema DescribeWorkspacesRequest#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema DescribeWorkspacesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeWorkspacesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeWorkspacesResult
 */
export interface DescribeWorkspacesResult {
  /**
   * @schema DescribeWorkspacesResult#Workspaces
   */
  readonly workspaces?: Workspace[];

  /**
   * @schema DescribeWorkspacesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeWorkspacesConnectionStatusRequest
 */
export interface DescribeWorkspacesConnectionStatusRequest {
  /**
   * @schema DescribeWorkspacesConnectionStatusRequest#WorkspaceIds
   */
  readonly workspaceIds?: string[];

  /**
   * @schema DescribeWorkspacesConnectionStatusRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeWorkspacesConnectionStatusResult
 */
export interface DescribeWorkspacesConnectionStatusResult {
  /**
   * @schema DescribeWorkspacesConnectionStatusResult#WorkspacesConnectionStatus
   */
  readonly workspacesConnectionStatus?: WorkspaceConnectionStatus[];

  /**
   * @schema DescribeWorkspacesConnectionStatusResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DisassociateConnectionAliasRequest
 */
export interface DisassociateConnectionAliasRequest {
  /**
   * @schema DisassociateConnectionAliasRequest#AliasId
   */
  readonly aliasId: string;

}

/**
 * @schema DisassociateConnectionAliasResult
 */
export interface DisassociateConnectionAliasResult {
}

/**
 * @schema DisassociateIpGroupsRequest
 */
export interface DisassociateIpGroupsRequest {
  /**
   * @schema DisassociateIpGroupsRequest#DirectoryId
   */
  readonly directoryId: string;

  /**
   * @schema DisassociateIpGroupsRequest#GroupIds
   */
  readonly groupIds: string[];

}

/**
 * @schema DisassociateIpGroupsResult
 */
export interface DisassociateIpGroupsResult {
}

/**
 * @schema ImportWorkspaceImageRequest
 */
export interface ImportWorkspaceImageRequest {
  /**
   * @schema ImportWorkspaceImageRequest#Ec2ImageId
   */
  readonly ec2ImageId: string;

  /**
   * @schema ImportWorkspaceImageRequest#IngestionProcess
   */
  readonly ingestionProcess: string;

  /**
   * @schema ImportWorkspaceImageRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema ImportWorkspaceImageRequest#ImageDescription
   */
  readonly imageDescription: string;

  /**
   * @schema ImportWorkspaceImageRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ImportWorkspaceImageRequest#Applications
   */
  readonly applications?: string[];

}

/**
 * @schema ImportWorkspaceImageResult
 */
export interface ImportWorkspaceImageResult {
  /**
   * @schema ImportWorkspaceImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema ListAvailableManagementCidrRangesRequest
 */
export interface ListAvailableManagementCidrRangesRequest {
  /**
   * @schema ListAvailableManagementCidrRangesRequest#ManagementCidrRangeConstraint
   */
  readonly managementCidrRangeConstraint: string;

  /**
   * @schema ListAvailableManagementCidrRangesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAvailableManagementCidrRangesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAvailableManagementCidrRangesResult
 */
export interface ListAvailableManagementCidrRangesResult {
  /**
   * @schema ListAvailableManagementCidrRangesResult#ManagementCidrRanges
   */
  readonly managementCidrRanges?: string[];

  /**
   * @schema ListAvailableManagementCidrRangesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MigrateWorkspaceRequest
 */
export interface MigrateWorkspaceRequest {
  /**
   * @schema MigrateWorkspaceRequest#SourceWorkspaceId
   */
  readonly sourceWorkspaceId: string;

  /**
   * @schema MigrateWorkspaceRequest#BundleId
   */
  readonly bundleId: string;

}

/**
 * @schema MigrateWorkspaceResult
 */
export interface MigrateWorkspaceResult {
  /**
   * @schema MigrateWorkspaceResult#SourceWorkspaceId
   */
  readonly sourceWorkspaceId?: string;

  /**
   * @schema MigrateWorkspaceResult#TargetWorkspaceId
   */
  readonly targetWorkspaceId?: string;

}

/**
 * @schema ModifyAccountRequest
 */
export interface ModifyAccountRequest {
  /**
   * @schema ModifyAccountRequest#DedicatedTenancySupport
   */
  readonly dedicatedTenancySupport?: string;

  /**
   * @schema ModifyAccountRequest#DedicatedTenancyManagementCidrRange
   */
  readonly dedicatedTenancyManagementCidrRange?: string;

}

/**
 * @schema ModifyAccountResult
 */
export interface ModifyAccountResult {
}

/**
 * @schema ModifyClientPropertiesRequest
 */
export interface ModifyClientPropertiesRequest {
  /**
   * @schema ModifyClientPropertiesRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ModifyClientPropertiesRequest#ClientProperties
   */
  readonly clientProperties: ClientProperties;

}

/**
 * @schema ModifyClientPropertiesResult
 */
export interface ModifyClientPropertiesResult {
}

/**
 * @schema ModifySelfservicePermissionsRequest
 */
export interface ModifySelfservicePermissionsRequest {
  /**
   * @schema ModifySelfservicePermissionsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ModifySelfservicePermissionsRequest#SelfservicePermissions
   */
  readonly selfservicePermissions: SelfservicePermissions;

}

/**
 * @schema ModifySelfservicePermissionsResult
 */
export interface ModifySelfservicePermissionsResult {
}

/**
 * @schema ModifyWorkspaceAccessPropertiesRequest
 */
export interface ModifyWorkspaceAccessPropertiesRequest {
  /**
   * @schema ModifyWorkspaceAccessPropertiesRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ModifyWorkspaceAccessPropertiesRequest#WorkspaceAccessProperties
   */
  readonly workspaceAccessProperties: WorkspaceAccessProperties;

}

/**
 * @schema ModifyWorkspaceAccessPropertiesResult
 */
export interface ModifyWorkspaceAccessPropertiesResult {
}

/**
 * @schema ModifyWorkspaceCreationPropertiesRequest
 */
export interface ModifyWorkspaceCreationPropertiesRequest {
  /**
   * @schema ModifyWorkspaceCreationPropertiesRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ModifyWorkspaceCreationPropertiesRequest#WorkspaceCreationProperties
   */
  readonly workspaceCreationProperties: WorkspaceCreationProperties;

}

/**
 * @schema ModifyWorkspaceCreationPropertiesResult
 */
export interface ModifyWorkspaceCreationPropertiesResult {
}

/**
 * @schema ModifyWorkspacePropertiesRequest
 */
export interface ModifyWorkspacePropertiesRequest {
  /**
   * @schema ModifyWorkspacePropertiesRequest#WorkspaceId
   */
  readonly workspaceId: string;

  /**
   * @schema ModifyWorkspacePropertiesRequest#WorkspaceProperties
   */
  readonly workspaceProperties: WorkspaceProperties;

}

/**
 * @schema ModifyWorkspacePropertiesResult
 */
export interface ModifyWorkspacePropertiesResult {
}

/**
 * @schema ModifyWorkspaceStateRequest
 */
export interface ModifyWorkspaceStateRequest {
  /**
   * @schema ModifyWorkspaceStateRequest#WorkspaceId
   */
  readonly workspaceId: string;

  /**
   * @schema ModifyWorkspaceStateRequest#WorkspaceState
   */
  readonly workspaceState: string;

}

/**
 * @schema ModifyWorkspaceStateResult
 */
export interface ModifyWorkspaceStateResult {
}

/**
 * @schema RebootWorkspacesRequest
 */
export interface RebootWorkspacesRequest {
  /**
   * @schema RebootWorkspacesRequest#RebootWorkspaceRequests
   */
  readonly rebootWorkspaceRequests: RebootRequest[];

}

/**
 * @schema RebootWorkspacesResult
 */
export interface RebootWorkspacesResult {
  /**
   * @schema RebootWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: FailedWorkspaceChangeRequest[];

}

/**
 * @schema RebuildWorkspacesRequest
 */
export interface RebuildWorkspacesRequest {
  /**
   * @schema RebuildWorkspacesRequest#RebuildWorkspaceRequests
   */
  readonly rebuildWorkspaceRequests: RebuildRequest[];

}

/**
 * @schema RebuildWorkspacesResult
 */
export interface RebuildWorkspacesResult {
  /**
   * @schema RebuildWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: FailedWorkspaceChangeRequest[];

}

/**
 * @schema RegisterWorkspaceDirectoryRequest
 */
export interface RegisterWorkspaceDirectoryRequest {
  /**
   * @schema RegisterWorkspaceDirectoryRequest#DirectoryId
   */
  readonly directoryId: string;

  /**
   * @schema RegisterWorkspaceDirectoryRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema RegisterWorkspaceDirectoryRequest#EnableWorkDocs
   */
  readonly enableWorkDocs: boolean;

  /**
   * @schema RegisterWorkspaceDirectoryRequest#EnableSelfService
   */
  readonly enableSelfService?: boolean;

  /**
   * @schema RegisterWorkspaceDirectoryRequest#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema RegisterWorkspaceDirectoryRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema RegisterWorkspaceDirectoryResult
 */
export interface RegisterWorkspaceDirectoryResult {
}

/**
 * @schema RestoreWorkspaceRequest
 */
export interface RestoreWorkspaceRequest {
  /**
   * @schema RestoreWorkspaceRequest#WorkspaceId
   */
  readonly workspaceId: string;

}

/**
 * @schema RestoreWorkspaceResult
 */
export interface RestoreWorkspaceResult {
}

/**
 * @schema RevokeIpRulesRequest
 */
export interface RevokeIpRulesRequest {
  /**
   * @schema RevokeIpRulesRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema RevokeIpRulesRequest#UserRules
   */
  readonly userRules: string[];

}

/**
 * @schema RevokeIpRulesResult
 */
export interface RevokeIpRulesResult {
}

/**
 * @schema StartWorkspacesRequest
 */
export interface StartWorkspacesRequest {
  /**
   * @schema StartWorkspacesRequest#StartWorkspaceRequests
   */
  readonly startWorkspaceRequests: StartRequest[];

}

/**
 * @schema StartWorkspacesResult
 */
export interface StartWorkspacesResult {
  /**
   * @schema StartWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: FailedWorkspaceChangeRequest[];

}

/**
 * @schema StopWorkspacesRequest
 */
export interface StopWorkspacesRequest {
  /**
   * @schema StopWorkspacesRequest#StopWorkspaceRequests
   */
  readonly stopWorkspaceRequests: StopRequest[];

}

/**
 * @schema StopWorkspacesResult
 */
export interface StopWorkspacesResult {
  /**
   * @schema StopWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: FailedWorkspaceChangeRequest[];

}

/**
 * @schema TerminateWorkspacesRequest
 */
export interface TerminateWorkspacesRequest {
  /**
   * @schema TerminateWorkspacesRequest#TerminateWorkspaceRequests
   */
  readonly terminateWorkspaceRequests: TerminateRequest[];

}

/**
 * @schema TerminateWorkspacesResult
 */
export interface TerminateWorkspacesResult {
  /**
   * @schema TerminateWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: FailedWorkspaceChangeRequest[];

}

/**
 * @schema UpdateConnectionAliasPermissionRequest
 */
export interface UpdateConnectionAliasPermissionRequest {
  /**
   * @schema UpdateConnectionAliasPermissionRequest#AliasId
   */
  readonly aliasId: string;

  /**
   * @schema UpdateConnectionAliasPermissionRequest#ConnectionAliasPermission
   */
  readonly connectionAliasPermission: ConnectionAliasPermission;

}

/**
 * @schema UpdateConnectionAliasPermissionResult
 */
export interface UpdateConnectionAliasPermissionResult {
}

/**
 * @schema UpdateRulesOfIpGroupRequest
 */
export interface UpdateRulesOfIpGroupRequest {
  /**
   * @schema UpdateRulesOfIpGroupRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema UpdateRulesOfIpGroupRequest#UserRules
   */
  readonly userRules: IpRuleItem[];

}

/**
 * @schema UpdateRulesOfIpGroupResult
 */
export interface UpdateRulesOfIpGroupResult {
}

/**
 * @schema UpdateWorkspaceImagePermissionRequest
 */
export interface UpdateWorkspaceImagePermissionRequest {
  /**
   * @schema UpdateWorkspaceImagePermissionRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema UpdateWorkspaceImagePermissionRequest#AllowCopyImage
   */
  readonly allowCopyImage: boolean;

  /**
   * @schema UpdateWorkspaceImagePermissionRequest#SharedAccountId
   */
  readonly sharedAccountId: string;

}

/**
 * @schema UpdateWorkspaceImagePermissionResult
 */
export interface UpdateWorkspaceImagePermissionResult {
}

/**
 * @schema IpRuleItem
 */
export interface IpRuleItem {
  /**
   * @schema IpRuleItem#ipRule
   */
  readonly ipRule?: string;

  /**
   * @schema IpRuleItem#ruleDesc
   */
  readonly ruleDesc?: string;

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
  readonly value?: string;

}

/**
 * @schema WorkspaceRequest
 */
export interface WorkspaceRequest {
  /**
   * @schema WorkspaceRequest#DirectoryId
   */
  readonly directoryId: string;

  /**
   * @schema WorkspaceRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema WorkspaceRequest#BundleId
   */
  readonly bundleId: string;

  /**
   * @schema WorkspaceRequest#VolumeEncryptionKey
   */
  readonly volumeEncryptionKey?: string;

  /**
   * @schema WorkspaceRequest#UserVolumeEncryptionEnabled
   */
  readonly userVolumeEncryptionEnabled?: boolean;

  /**
   * @schema WorkspaceRequest#RootVolumeEncryptionEnabled
   */
  readonly rootVolumeEncryptionEnabled?: boolean;

  /**
   * @schema WorkspaceRequest#WorkspaceProperties
   */
  readonly workspaceProperties?: WorkspaceProperties;

  /**
   * @schema WorkspaceRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema FailedCreateWorkspaceRequest
 */
export interface FailedCreateWorkspaceRequest {
  /**
   * @schema FailedCreateWorkspaceRequest#WorkspaceRequest
   */
  readonly workspaceRequest?: WorkspaceRequest;

  /**
   * @schema FailedCreateWorkspaceRequest#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema FailedCreateWorkspaceRequest#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Workspace
 */
export interface Workspace {
  /**
   * @schema Workspace#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema Workspace#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema Workspace#UserName
   */
  readonly userName?: string;

  /**
   * @schema Workspace#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema Workspace#State
   */
  readonly state?: string;

  /**
   * @schema Workspace#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema Workspace#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Workspace#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema Workspace#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema Workspace#ComputerName
   */
  readonly computerName?: string;

  /**
   * @schema Workspace#VolumeEncryptionKey
   */
  readonly volumeEncryptionKey?: string;

  /**
   * @schema Workspace#UserVolumeEncryptionEnabled
   */
  readonly userVolumeEncryptionEnabled?: boolean;

  /**
   * @schema Workspace#RootVolumeEncryptionEnabled
   */
  readonly rootVolumeEncryptionEnabled?: boolean;

  /**
   * @schema Workspace#WorkspaceProperties
   */
  readonly workspaceProperties?: WorkspaceProperties;

  /**
   * @schema Workspace#ModificationStates
   */
  readonly modificationStates?: ModificationState[];

}

/**
 * @schema AccountModification
 */
export interface AccountModification {
  /**
   * @schema AccountModification#ModificationState
   */
  readonly modificationState?: string;

  /**
   * @schema AccountModification#DedicatedTenancySupport
   */
  readonly dedicatedTenancySupport?: string;

  /**
   * @schema AccountModification#DedicatedTenancyManagementCidrRange
   */
  readonly dedicatedTenancyManagementCidrRange?: string;

  /**
   * @schema AccountModification#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AccountModification#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AccountModification#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ClientPropertiesResult
 */
export interface ClientPropertiesResult {
  /**
   * @schema ClientPropertiesResult#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ClientPropertiesResult#ClientProperties
   */
  readonly clientProperties?: ClientProperties;

}

/**
 * @schema ConnectionAliasPermission
 */
export interface ConnectionAliasPermission {
  /**
   * @schema ConnectionAliasPermission#SharedAccountId
   */
  readonly sharedAccountId: string;

  /**
   * @schema ConnectionAliasPermission#AllowAssociation
   */
  readonly allowAssociation: boolean;

}

/**
 * @schema ConnectionAlias
 */
export interface ConnectionAlias {
  /**
   * @schema ConnectionAlias#ConnectionString
   */
  readonly connectionString?: string;

  /**
   * @schema ConnectionAlias#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema ConnectionAlias#State
   */
  readonly state?: string;

  /**
   * @schema ConnectionAlias#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema ConnectionAlias#Associations
   */
  readonly associations?: ConnectionAliasAssociation[];

}

/**
 * @schema WorkspacesIpGroup
 */
export interface WorkspacesIpGroup {
  /**
   * @schema WorkspacesIpGroup#groupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkspacesIpGroup#groupName
   */
  readonly groupName?: string;

  /**
   * @schema WorkspacesIpGroup#groupDesc
   */
  readonly groupDesc?: string;

  /**
   * @schema WorkspacesIpGroup#userRules
   */
  readonly userRules?: IpRuleItem[];

}

/**
 * @schema WorkspaceBundle
 */
export interface WorkspaceBundle {
  /**
   * @schema WorkspaceBundle#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema WorkspaceBundle#Name
   */
  readonly name?: string;

  /**
   * @schema WorkspaceBundle#Owner
   */
  readonly owner?: string;

  /**
   * @schema WorkspaceBundle#Description
   */
  readonly description?: string;

  /**
   * @schema WorkspaceBundle#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkspaceBundle#RootStorage
   */
  readonly rootStorage?: RootStorage;

  /**
   * @schema WorkspaceBundle#UserStorage
   */
  readonly userStorage?: UserStorage;

  /**
   * @schema WorkspaceBundle#ComputeType
   */
  readonly computeType?: ComputeType;

  /**
   * @schema WorkspaceBundle#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema WorkspaceDirectory
 */
export interface WorkspaceDirectory {
  /**
   * @schema WorkspaceDirectory#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkspaceDirectory#Alias
   */
  readonly alias?: string;

  /**
   * @schema WorkspaceDirectory#DirectoryName
   */
  readonly directoryName?: string;

  /**
   * @schema WorkspaceDirectory#RegistrationCode
   */
  readonly registrationCode?: string;

  /**
   * @schema WorkspaceDirectory#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema WorkspaceDirectory#DnsIpAddresses
   */
  readonly dnsIpAddresses?: string[];

  /**
   * @schema WorkspaceDirectory#CustomerUserName
   */
  readonly customerUserName?: string;

  /**
   * @schema WorkspaceDirectory#IamRoleId
   */
  readonly iamRoleId?: string;

  /**
   * @schema WorkspaceDirectory#DirectoryType
   */
  readonly directoryType?: string;

  /**
   * @schema WorkspaceDirectory#WorkspaceSecurityGroupId
   */
  readonly workspaceSecurityGroupId?: string;

  /**
   * @schema WorkspaceDirectory#State
   */
  readonly state?: string;

  /**
   * @schema WorkspaceDirectory#WorkspaceCreationProperties
   */
  readonly workspaceCreationProperties?: DefaultWorkspaceCreationProperties;

  /**
   * @schema WorkspaceDirectory#ipGroupIds
   */
  readonly ipGroupIds?: string[];

  /**
   * @schema WorkspaceDirectory#WorkspaceAccessProperties
   */
  readonly workspaceAccessProperties?: WorkspaceAccessProperties;

  /**
   * @schema WorkspaceDirectory#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema WorkspaceDirectory#SelfservicePermissions
   */
  readonly selfservicePermissions?: SelfservicePermissions;

}

/**
 * @schema ImagePermission
 */
export interface ImagePermission {
  /**
   * @schema ImagePermission#SharedAccountId
   */
  readonly sharedAccountId?: string;

}

/**
 * @schema WorkspaceImage
 */
export interface WorkspaceImage {
  /**
   * @schema WorkspaceImage#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkspaceImage#Name
   */
  readonly name?: string;

  /**
   * @schema WorkspaceImage#Description
   */
  readonly description?: string;

  /**
   * @schema WorkspaceImage#OperatingSystem
   */
  readonly operatingSystem?: OperatingSystem;

  /**
   * @schema WorkspaceImage#State
   */
  readonly state?: string;

  /**
   * @schema WorkspaceImage#RequiredTenancy
   */
  readonly requiredTenancy?: string;

  /**
   * @schema WorkspaceImage#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkspaceImage#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema WorkspaceImage#Created
   */
  readonly created?: string;

  /**
   * @schema WorkspaceImage#OwnerAccountId
   */
  readonly ownerAccountId?: string;

}

/**
 * @schema Snapshot
 */
export interface Snapshot {
  /**
   * @schema Snapshot#SnapshotTime
   */
  readonly snapshotTime?: string;

}

/**
 * @schema WorkspaceConnectionStatus
 */
export interface WorkspaceConnectionStatus {
  /**
   * @schema WorkspaceConnectionStatus#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema WorkspaceConnectionStatus#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema WorkspaceConnectionStatus#ConnectionStateCheckTimestamp
   */
  readonly connectionStateCheckTimestamp?: string;

  /**
   * @schema WorkspaceConnectionStatus#LastKnownUserConnectionTimestamp
   */
  readonly lastKnownUserConnectionTimestamp?: string;

}

/**
 * @schema ClientProperties
 */
export interface ClientProperties {
  /**
   * @schema ClientProperties#ReconnectEnabled
   */
  readonly reconnectEnabled?: string;

}

/**
 * @schema SelfservicePermissions
 */
export interface SelfservicePermissions {
  /**
   * @schema SelfservicePermissions#RestartWorkspace
   */
  readonly restartWorkspace?: string;

  /**
   * @schema SelfservicePermissions#IncreaseVolumeSize
   */
  readonly increaseVolumeSize?: string;

  /**
   * @schema SelfservicePermissions#ChangeComputeType
   */
  readonly changeComputeType?: string;

  /**
   * @schema SelfservicePermissions#SwitchRunningMode
   */
  readonly switchRunningMode?: string;

  /**
   * @schema SelfservicePermissions#RebuildWorkspace
   */
  readonly rebuildWorkspace?: string;

}

/**
 * @schema WorkspaceAccessProperties
 */
export interface WorkspaceAccessProperties {
  /**
   * @schema WorkspaceAccessProperties#DeviceTypeWindows
   */
  readonly deviceTypeWindows?: string;

  /**
   * @schema WorkspaceAccessProperties#DeviceTypeOsx
   */
  readonly deviceTypeOsx?: string;

  /**
   * @schema WorkspaceAccessProperties#DeviceTypeWeb
   */
  readonly deviceTypeWeb?: string;

  /**
   * @schema WorkspaceAccessProperties#DeviceTypeIos
   */
  readonly deviceTypeIos?: string;

  /**
   * @schema WorkspaceAccessProperties#DeviceTypeAndroid
   */
  readonly deviceTypeAndroid?: string;

  /**
   * @schema WorkspaceAccessProperties#DeviceTypeChromeOs
   */
  readonly deviceTypeChromeOs?: string;

  /**
   * @schema WorkspaceAccessProperties#DeviceTypeZeroClient
   */
  readonly deviceTypeZeroClient?: string;

}

/**
 * @schema WorkspaceCreationProperties
 */
export interface WorkspaceCreationProperties {
  /**
   * @schema WorkspaceCreationProperties#EnableWorkDocs
   */
  readonly enableWorkDocs?: boolean;

  /**
   * @schema WorkspaceCreationProperties#EnableInternetAccess
   */
  readonly enableInternetAccess?: boolean;

  /**
   * @schema WorkspaceCreationProperties#DefaultOu
   */
  readonly defaultOu?: string;

  /**
   * @schema WorkspaceCreationProperties#CustomSecurityGroupId
   */
  readonly customSecurityGroupId?: string;

  /**
   * @schema WorkspaceCreationProperties#UserEnabledAsLocalAdministrator
   */
  readonly userEnabledAsLocalAdministrator?: boolean;

  /**
   * @schema WorkspaceCreationProperties#EnableMaintenanceMode
   */
  readonly enableMaintenanceMode?: boolean;

}

/**
 * @schema WorkspaceProperties
 */
export interface WorkspaceProperties {
  /**
   * @schema WorkspaceProperties#RunningMode
   */
  readonly runningMode?: string;

  /**
   * @schema WorkspaceProperties#RunningModeAutoStopTimeoutInMinutes
   */
  readonly runningModeAutoStopTimeoutInMinutes?: number;

  /**
   * @schema WorkspaceProperties#RootVolumeSizeGib
   */
  readonly rootVolumeSizeGib?: number;

  /**
   * @schema WorkspaceProperties#UserVolumeSizeGib
   */
  readonly userVolumeSizeGib?: number;

  /**
   * @schema WorkspaceProperties#ComputeTypeName
   */
  readonly computeTypeName?: string;

}

/**
 * @schema RebootRequest
 */
export interface RebootRequest {
  /**
   * @schema RebootRequest#WorkspaceId
   */
  readonly workspaceId: string;

}

/**
 * @schema FailedWorkspaceChangeRequest
 */
export interface FailedWorkspaceChangeRequest {
  /**
   * @schema FailedWorkspaceChangeRequest#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema FailedWorkspaceChangeRequest#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema FailedWorkspaceChangeRequest#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema RebuildRequest
 */
export interface RebuildRequest {
  /**
   * @schema RebuildRequest#WorkspaceId
   */
  readonly workspaceId: string;

}

/**
 * @schema StartRequest
 */
export interface StartRequest {
  /**
   * @schema StartRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * @schema StopRequest
 */
export interface StopRequest {
  /**
   * @schema StopRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * @schema TerminateRequest
 */
export interface TerminateRequest {
  /**
   * @schema TerminateRequest#WorkspaceId
   */
  readonly workspaceId: string;

}

/**
 * @schema ModificationState
 */
export interface ModificationState {
  /**
   * @schema ModificationState#Resource
   */
  readonly resource?: string;

  /**
   * @schema ModificationState#State
   */
  readonly state?: string;

}

/**
 * @schema ConnectionAliasAssociation
 */
export interface ConnectionAliasAssociation {
  /**
   * @schema ConnectionAliasAssociation#AssociationStatus
   */
  readonly associationStatus?: string;

  /**
   * @schema ConnectionAliasAssociation#AssociatedAccountId
   */
  readonly associatedAccountId?: string;

  /**
   * @schema ConnectionAliasAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ConnectionAliasAssociation#ConnectionIdentifier
   */
  readonly connectionIdentifier?: string;

}

/**
 * @schema RootStorage
 */
export interface RootStorage {
  /**
   * @schema RootStorage#Capacity
   */
  readonly capacity?: string;

}

/**
 * @schema UserStorage
 */
export interface UserStorage {
  /**
   * @schema UserStorage#Capacity
   */
  readonly capacity?: string;

}

/**
 * @schema ComputeType
 */
export interface ComputeType {
  /**
   * @schema ComputeType#Name
   */
  readonly name?: string;

}

/**
 * @schema DefaultWorkspaceCreationProperties
 */
export interface DefaultWorkspaceCreationProperties {
  /**
   * @schema DefaultWorkspaceCreationProperties#EnableWorkDocs
   */
  readonly enableWorkDocs?: boolean;

  /**
   * @schema DefaultWorkspaceCreationProperties#EnableInternetAccess
   */
  readonly enableInternetAccess?: boolean;

  /**
   * @schema DefaultWorkspaceCreationProperties#DefaultOu
   */
  readonly defaultOu?: string;

  /**
   * @schema DefaultWorkspaceCreationProperties#CustomSecurityGroupId
   */
  readonly customSecurityGroupId?: string;

  /**
   * @schema DefaultWorkspaceCreationProperties#UserEnabledAsLocalAdministrator
   */
  readonly userEnabledAsLocalAdministrator?: boolean;

  /**
   * @schema DefaultWorkspaceCreationProperties#EnableMaintenanceMode
   */
  readonly enableMaintenanceMode?: boolean;

}

/**
 * @schema OperatingSystem
 */
export interface OperatingSystem {
  /**
   * @schema OperatingSystem#Type
   */
  readonly type?: string;

}
