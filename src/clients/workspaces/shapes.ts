/**
 * @schema WorkSpacesAssociateConnectionAliasRequest
 */
export interface WorkSpacesAssociateConnectionAliasRequest {
  /**
   * @schema WorkSpacesAssociateConnectionAliasRequest#AliasId
   */
  readonly aliasId: string;

  /**
   * @schema WorkSpacesAssociateConnectionAliasRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema WorkSpacesAssociateConnectionAliasResult
 */
export interface WorkSpacesAssociateConnectionAliasResult {
  /**
   * @schema WorkSpacesAssociateConnectionAliasResult#ConnectionIdentifier
   */
  readonly connectionIdentifier?: string;

}

/**
 * @schema WorkSpacesAssociateIpGroupsRequest
 */
export interface WorkSpacesAssociateIpGroupsRequest {
  /**
   * @schema WorkSpacesAssociateIpGroupsRequest#DirectoryId
   */
  readonly directoryId: string;

  /**
   * @schema WorkSpacesAssociateIpGroupsRequest#GroupIds
   */
  readonly groupIds: string[];

}

/**
 * @schema WorkSpacesAssociateIpGroupsResult
 */
export interface WorkSpacesAssociateIpGroupsResult {
}

/**
 * @schema WorkSpacesAuthorizeIpRulesRequest
 */
export interface WorkSpacesAuthorizeIpRulesRequest {
  /**
   * @schema WorkSpacesAuthorizeIpRulesRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema WorkSpacesAuthorizeIpRulesRequest#UserRules
   */
  readonly userRules: WorkSpacesIpRuleItem[];

}

/**
 * @schema WorkSpacesAuthorizeIpRulesResult
 */
export interface WorkSpacesAuthorizeIpRulesResult {
}

/**
 * @schema WorkSpacesCopyWorkspaceImageRequest
 */
export interface WorkSpacesCopyWorkspaceImageRequest {
  /**
   * @schema WorkSpacesCopyWorkspaceImageRequest#Name
   */
  readonly name: string;

  /**
   * @schema WorkSpacesCopyWorkspaceImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema WorkSpacesCopyWorkspaceImageRequest#SourceImageId
   */
  readonly sourceImageId: string;

  /**
   * @schema WorkSpacesCopyWorkspaceImageRequest#SourceRegion
   */
  readonly sourceRegion: string;

  /**
   * @schema WorkSpacesCopyWorkspaceImageRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * @schema WorkSpacesCopyWorkspaceImageResult
 */
export interface WorkSpacesCopyWorkspaceImageResult {
  /**
   * @schema WorkSpacesCopyWorkspaceImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema WorkSpacesCreateConnectionAliasRequest
 */
export interface WorkSpacesCreateConnectionAliasRequest {
  /**
   * @schema WorkSpacesCreateConnectionAliasRequest#ConnectionString
   */
  readonly connectionString: string;

  /**
   * @schema WorkSpacesCreateConnectionAliasRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * @schema WorkSpacesCreateConnectionAliasResult
 */
export interface WorkSpacesCreateConnectionAliasResult {
  /**
   * @schema WorkSpacesCreateConnectionAliasResult#AliasId
   */
  readonly aliasId?: string;

}

/**
 * @schema WorkSpacesCreateIpGroupRequest
 */
export interface WorkSpacesCreateIpGroupRequest {
  /**
   * @schema WorkSpacesCreateIpGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema WorkSpacesCreateIpGroupRequest#GroupDesc
   */
  readonly groupDesc?: string;

  /**
   * @schema WorkSpacesCreateIpGroupRequest#UserRules
   */
  readonly userRules?: WorkSpacesIpRuleItem[];

  /**
   * @schema WorkSpacesCreateIpGroupRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * @schema WorkSpacesCreateIpGroupResult
 */
export interface WorkSpacesCreateIpGroupResult {
  /**
   * @schema WorkSpacesCreateIpGroupResult#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema WorkSpacesCreateTagsRequest
 */
export interface WorkSpacesCreateTagsRequest {
  /**
   * @schema WorkSpacesCreateTagsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkSpacesCreateTagsRequest#Tags
   */
  readonly tags: WorkSpacesTag[];

}

/**
 * @schema WorkSpacesCreateTagsResult
 */
export interface WorkSpacesCreateTagsResult {
}

/**
 * @schema WorkSpacesCreateWorkspacesRequest
 */
export interface WorkSpacesCreateWorkspacesRequest {
  /**
   * @schema WorkSpacesCreateWorkspacesRequest#Workspaces
   */
  readonly workspaces: WorkSpacesWorkspaceRequest[];

}

/**
 * @schema WorkSpacesCreateWorkspacesResult
 */
export interface WorkSpacesCreateWorkspacesResult {
  /**
   * @schema WorkSpacesCreateWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedCreateWorkspaceRequest[];

  /**
   * @schema WorkSpacesCreateWorkspacesResult#PendingRequests
   */
  readonly pendingRequests?: WorkSpacesWorkspace[];

}

/**
 * @schema WorkSpacesDeleteConnectionAliasRequest
 */
export interface WorkSpacesDeleteConnectionAliasRequest {
  /**
   * @schema WorkSpacesDeleteConnectionAliasRequest#AliasId
   */
  readonly aliasId: string;

}

/**
 * @schema WorkSpacesDeleteConnectionAliasResult
 */
export interface WorkSpacesDeleteConnectionAliasResult {
}

/**
 * @schema WorkSpacesDeleteIpGroupRequest
 */
export interface WorkSpacesDeleteIpGroupRequest {
  /**
   * @schema WorkSpacesDeleteIpGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema WorkSpacesDeleteIpGroupResult
 */
export interface WorkSpacesDeleteIpGroupResult {
}

/**
 * @schema WorkSpacesDeleteTagsRequest
 */
export interface WorkSpacesDeleteTagsRequest {
  /**
   * @schema WorkSpacesDeleteTagsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkSpacesDeleteTagsRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema WorkSpacesDeleteTagsResult
 */
export interface WorkSpacesDeleteTagsResult {
}

/**
 * @schema WorkSpacesDeleteWorkspaceImageRequest
 */
export interface WorkSpacesDeleteWorkspaceImageRequest {
  /**
   * @schema WorkSpacesDeleteWorkspaceImageRequest#ImageId
   */
  readonly imageId: string;

}

/**
 * @schema WorkSpacesDeleteWorkspaceImageResult
 */
export interface WorkSpacesDeleteWorkspaceImageResult {
}

/**
 * @schema WorkSpacesDeregisterWorkspaceDirectoryRequest
 */
export interface WorkSpacesDeregisterWorkspaceDirectoryRequest {
  /**
   * @schema WorkSpacesDeregisterWorkspaceDirectoryRequest#DirectoryId
   */
  readonly directoryId: string;

}

/**
 * @schema WorkSpacesDeregisterWorkspaceDirectoryResult
 */
export interface WorkSpacesDeregisterWorkspaceDirectoryResult {
}

/**
 * @schema WorkSpacesDescribeAccountRequest
 */
export interface WorkSpacesDescribeAccountRequest {
}

/**
 * @schema WorkSpacesDescribeAccountResult
 */
export interface WorkSpacesDescribeAccountResult {
  /**
   * @schema WorkSpacesDescribeAccountResult#DedicatedTenancySupport
   */
  readonly dedicatedTenancySupport?: string;

  /**
   * @schema WorkSpacesDescribeAccountResult#DedicatedTenancyManagementCidrRange
   */
  readonly dedicatedTenancyManagementCidrRange?: string;

}

/**
 * @schema WorkSpacesDescribeAccountModificationsRequest
 */
export interface WorkSpacesDescribeAccountModificationsRequest {
  /**
   * @schema WorkSpacesDescribeAccountModificationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeAccountModificationsResult
 */
export interface WorkSpacesDescribeAccountModificationsResult {
  /**
   * @schema WorkSpacesDescribeAccountModificationsResult#AccountModifications
   */
  readonly accountModifications?: WorkSpacesAccountModification[];

  /**
   * @schema WorkSpacesDescribeAccountModificationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeClientPropertiesRequest
 */
export interface WorkSpacesDescribeClientPropertiesRequest {
  /**
   * @schema WorkSpacesDescribeClientPropertiesRequest#ResourceIds
   */
  readonly resourceIds: string[];

}

/**
 * @schema WorkSpacesDescribeClientPropertiesResult
 */
export interface WorkSpacesDescribeClientPropertiesResult {
  /**
   * @schema WorkSpacesDescribeClientPropertiesResult#ClientPropertiesList
   */
  readonly clientPropertiesList?: WorkSpacesClientPropertiesResult[];

}

/**
 * @schema WorkSpacesDescribeConnectionAliasPermissionsRequest
 */
export interface WorkSpacesDescribeConnectionAliasPermissionsRequest {
  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsRequest#AliasId
   */
  readonly aliasId: string;

  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkSpacesDescribeConnectionAliasPermissionsResult
 */
export interface WorkSpacesDescribeConnectionAliasPermissionsResult {
  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsResult#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsResult#ConnectionAliasPermissions
   */
  readonly connectionAliasPermissions?: WorkSpacesConnectionAliasPermission[];

  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeConnectionAliasesRequest
 */
export interface WorkSpacesDescribeConnectionAliasesRequest {
  /**
   * @schema WorkSpacesDescribeConnectionAliasesRequest#AliasIds
   */
  readonly aliasIds?: string[];

  /**
   * @schema WorkSpacesDescribeConnectionAliasesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesDescribeConnectionAliasesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkSpacesDescribeConnectionAliasesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeConnectionAliasesResult
 */
export interface WorkSpacesDescribeConnectionAliasesResult {
  /**
   * @schema WorkSpacesDescribeConnectionAliasesResult#ConnectionAliases
   */
  readonly connectionAliases?: WorkSpacesConnectionAlias[];

  /**
   * @schema WorkSpacesDescribeConnectionAliasesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeIpGroupsRequest
 */
export interface WorkSpacesDescribeIpGroupsRequest {
  /**
   * @schema WorkSpacesDescribeIpGroupsRequest#GroupIds
   */
  readonly groupIds?: string[];

  /**
   * @schema WorkSpacesDescribeIpGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkSpacesDescribeIpGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkSpacesDescribeIpGroupsResult
 */
export interface WorkSpacesDescribeIpGroupsResult {
  /**
   * @schema WorkSpacesDescribeIpGroupsResult#Result
   */
  readonly result?: WorkSpacesWorkspacesIpGroup[];

  /**
   * @schema WorkSpacesDescribeIpGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeTagsRequest
 */
export interface WorkSpacesDescribeTagsRequest {
  /**
   * @schema WorkSpacesDescribeTagsRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema WorkSpacesDescribeTagsResult
 */
export interface WorkSpacesDescribeTagsResult {
  /**
   * @schema WorkSpacesDescribeTagsResult#TagList
   */
  readonly tagList?: WorkSpacesTag[];

}

/**
 * @schema WorkSpacesDescribeWorkspaceBundlesRequest
 */
export interface WorkSpacesDescribeWorkspaceBundlesRequest {
  /**
   * @schema WorkSpacesDescribeWorkspaceBundlesRequest#BundleIds
   */
  readonly bundleIds?: string[];

  /**
   * @schema WorkSpacesDescribeWorkspaceBundlesRequest#Owner
   */
  readonly owner?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceBundlesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeWorkspaceBundlesResult
 */
export interface WorkSpacesDescribeWorkspaceBundlesResult {
  /**
   * @schema WorkSpacesDescribeWorkspaceBundlesResult#Bundles
   */
  readonly bundles?: WorkSpacesWorkspaceBundle[];

  /**
   * @schema WorkSpacesDescribeWorkspaceBundlesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeWorkspaceDirectoriesRequest
 */
export interface WorkSpacesDescribeWorkspaceDirectoriesRequest {
  /**
   * @schema WorkSpacesDescribeWorkspaceDirectoriesRequest#DirectoryIds
   */
  readonly directoryIds?: string[];

  /**
   * @schema WorkSpacesDescribeWorkspaceDirectoriesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkSpacesDescribeWorkspaceDirectoriesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeWorkspaceDirectoriesResult
 */
export interface WorkSpacesDescribeWorkspaceDirectoriesResult {
  /**
   * @schema WorkSpacesDescribeWorkspaceDirectoriesResult#Directories
   */
  readonly directories?: WorkSpacesWorkspaceDirectory[];

  /**
   * @schema WorkSpacesDescribeWorkspaceDirectoriesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeWorkspaceImagePermissionsRequest
 */
export interface WorkSpacesDescribeWorkspaceImagePermissionsRequest {
  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkSpacesDescribeWorkspaceImagePermissionsResult
 */
export interface WorkSpacesDescribeWorkspaceImagePermissionsResult {
  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsResult#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsResult#ImagePermissions
   */
  readonly imagePermissions?: WorkSpacesImagePermission[];

  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeWorkspaceImagesRequest
 */
export interface WorkSpacesDescribeWorkspaceImagesRequest {
  /**
   * @schema WorkSpacesDescribeWorkspaceImagesRequest#ImageIds
   */
  readonly imageIds?: string[];

  /**
   * @schema WorkSpacesDescribeWorkspaceImagesRequest#ImageType
   */
  readonly imageType?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceImagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceImagesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkSpacesDescribeWorkspaceImagesResult
 */
export interface WorkSpacesDescribeWorkspaceImagesResult {
  /**
   * @schema WorkSpacesDescribeWorkspaceImagesResult#Images
   */
  readonly images?: WorkSpacesWorkspaceImage[];

  /**
   * @schema WorkSpacesDescribeWorkspaceImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeWorkspaceSnapshotsRequest
 */
export interface WorkSpacesDescribeWorkspaceSnapshotsRequest {
  /**
   * @schema WorkSpacesDescribeWorkspaceSnapshotsRequest#WorkspaceId
   */
  readonly workspaceId: string;

}

/**
 * @schema WorkSpacesDescribeWorkspaceSnapshotsResult
 */
export interface WorkSpacesDescribeWorkspaceSnapshotsResult {
  /**
   * @schema WorkSpacesDescribeWorkspaceSnapshotsResult#RebuildSnapshots
   */
  readonly rebuildSnapshots?: WorkSpacesSnapshot[];

  /**
   * @schema WorkSpacesDescribeWorkspaceSnapshotsResult#RestoreSnapshots
   */
  readonly restoreSnapshots?: WorkSpacesSnapshot[];

}

/**
 * @schema WorkSpacesDescribeWorkspacesRequest
 */
export interface WorkSpacesDescribeWorkspacesRequest {
  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#WorkspaceIds
   */
  readonly workspaceIds?: string[];

  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeWorkspacesResult
 */
export interface WorkSpacesDescribeWorkspacesResult {
  /**
   * @schema WorkSpacesDescribeWorkspacesResult#Workspaces
   */
  readonly workspaces?: WorkSpacesWorkspace[];

  /**
   * @schema WorkSpacesDescribeWorkspacesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeWorkspacesConnectionStatusRequest
 */
export interface WorkSpacesDescribeWorkspacesConnectionStatusRequest {
  /**
   * @schema WorkSpacesDescribeWorkspacesConnectionStatusRequest#WorkspaceIds
   */
  readonly workspaceIds?: string[];

  /**
   * @schema WorkSpacesDescribeWorkspacesConnectionStatusRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDescribeWorkspacesConnectionStatusResult
 */
export interface WorkSpacesDescribeWorkspacesConnectionStatusResult {
  /**
   * @schema WorkSpacesDescribeWorkspacesConnectionStatusResult#WorkspacesConnectionStatus
   */
  readonly workspacesConnectionStatus?: WorkSpacesWorkspaceConnectionStatus[];

  /**
   * @schema WorkSpacesDescribeWorkspacesConnectionStatusResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesDisassociateConnectionAliasRequest
 */
export interface WorkSpacesDisassociateConnectionAliasRequest {
  /**
   * @schema WorkSpacesDisassociateConnectionAliasRequest#AliasId
   */
  readonly aliasId: string;

}

/**
 * @schema WorkSpacesDisassociateConnectionAliasResult
 */
export interface WorkSpacesDisassociateConnectionAliasResult {
}

/**
 * @schema WorkSpacesDisassociateIpGroupsRequest
 */
export interface WorkSpacesDisassociateIpGroupsRequest {
  /**
   * @schema WorkSpacesDisassociateIpGroupsRequest#DirectoryId
   */
  readonly directoryId: string;

  /**
   * @schema WorkSpacesDisassociateIpGroupsRequest#GroupIds
   */
  readonly groupIds: string[];

}

/**
 * @schema WorkSpacesDisassociateIpGroupsResult
 */
export interface WorkSpacesDisassociateIpGroupsResult {
}

/**
 * @schema WorkSpacesImportWorkspaceImageRequest
 */
export interface WorkSpacesImportWorkspaceImageRequest {
  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#Ec2ImageId
   */
  readonly ec2ImageId: string;

  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#IngestionProcess
   */
  readonly ingestionProcess: string;

  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#ImageDescription
   */
  readonly imageDescription: string;

  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#Applications
   */
  readonly applications?: string[];

}

/**
 * @schema WorkSpacesImportWorkspaceImageResult
 */
export interface WorkSpacesImportWorkspaceImageResult {
  /**
   * @schema WorkSpacesImportWorkspaceImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema WorkSpacesListAvailableManagementCidrRangesRequest
 */
export interface WorkSpacesListAvailableManagementCidrRangesRequest {
  /**
   * @schema WorkSpacesListAvailableManagementCidrRangesRequest#ManagementCidrRangeConstraint
   */
  readonly managementCidrRangeConstraint: string;

  /**
   * @schema WorkSpacesListAvailableManagementCidrRangesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema WorkSpacesListAvailableManagementCidrRangesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesListAvailableManagementCidrRangesResult
 */
export interface WorkSpacesListAvailableManagementCidrRangesResult {
  /**
   * @schema WorkSpacesListAvailableManagementCidrRangesResult#ManagementCidrRanges
   */
  readonly managementCidrRanges?: string[];

  /**
   * @schema WorkSpacesListAvailableManagementCidrRangesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkSpacesMigrateWorkspaceRequest
 */
export interface WorkSpacesMigrateWorkspaceRequest {
  /**
   * @schema WorkSpacesMigrateWorkspaceRequest#SourceWorkspaceId
   */
  readonly sourceWorkspaceId: string;

  /**
   * @schema WorkSpacesMigrateWorkspaceRequest#BundleId
   */
  readonly bundleId: string;

}

/**
 * @schema WorkSpacesMigrateWorkspaceResult
 */
export interface WorkSpacesMigrateWorkspaceResult {
  /**
   * @schema WorkSpacesMigrateWorkspaceResult#SourceWorkspaceId
   */
  readonly sourceWorkspaceId?: string;

  /**
   * @schema WorkSpacesMigrateWorkspaceResult#TargetWorkspaceId
   */
  readonly targetWorkspaceId?: string;

}

/**
 * @schema WorkSpacesModifyAccountRequest
 */
export interface WorkSpacesModifyAccountRequest {
  /**
   * @schema WorkSpacesModifyAccountRequest#DedicatedTenancySupport
   */
  readonly dedicatedTenancySupport?: string;

  /**
   * @schema WorkSpacesModifyAccountRequest#DedicatedTenancyManagementCidrRange
   */
  readonly dedicatedTenancyManagementCidrRange?: string;

}

/**
 * @schema WorkSpacesModifyAccountResult
 */
export interface WorkSpacesModifyAccountResult {
}

/**
 * @schema WorkSpacesModifyClientPropertiesRequest
 */
export interface WorkSpacesModifyClientPropertiesRequest {
  /**
   * @schema WorkSpacesModifyClientPropertiesRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkSpacesModifyClientPropertiesRequest#ClientProperties
   */
  readonly clientProperties: WorkSpacesClientProperties;

}

/**
 * @schema WorkSpacesModifyClientPropertiesResult
 */
export interface WorkSpacesModifyClientPropertiesResult {
}

/**
 * @schema WorkSpacesModifySelfservicePermissionsRequest
 */
export interface WorkSpacesModifySelfservicePermissionsRequest {
  /**
   * @schema WorkSpacesModifySelfservicePermissionsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkSpacesModifySelfservicePermissionsRequest#SelfservicePermissions
   */
  readonly selfservicePermissions: WorkSpacesSelfservicePermissions;

}

/**
 * @schema WorkSpacesModifySelfservicePermissionsResult
 */
export interface WorkSpacesModifySelfservicePermissionsResult {
}

/**
 * @schema WorkSpacesModifyWorkspaceAccessPropertiesRequest
 */
export interface WorkSpacesModifyWorkspaceAccessPropertiesRequest {
  /**
   * @schema WorkSpacesModifyWorkspaceAccessPropertiesRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkSpacesModifyWorkspaceAccessPropertiesRequest#WorkspaceAccessProperties
   */
  readonly workspaceAccessProperties: WorkSpacesWorkspaceAccessProperties;

}

/**
 * @schema WorkSpacesModifyWorkspaceAccessPropertiesResult
 */
export interface WorkSpacesModifyWorkspaceAccessPropertiesResult {
}

/**
 * @schema WorkSpacesModifyWorkspaceCreationPropertiesRequest
 */
export interface WorkSpacesModifyWorkspaceCreationPropertiesRequest {
  /**
   * @schema WorkSpacesModifyWorkspaceCreationPropertiesRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkSpacesModifyWorkspaceCreationPropertiesRequest#WorkspaceCreationProperties
   */
  readonly workspaceCreationProperties: WorkSpacesWorkspaceCreationProperties;

}

/**
 * @schema WorkSpacesModifyWorkspaceCreationPropertiesResult
 */
export interface WorkSpacesModifyWorkspaceCreationPropertiesResult {
}

/**
 * @schema WorkSpacesModifyWorkspacePropertiesRequest
 */
export interface WorkSpacesModifyWorkspacePropertiesRequest {
  /**
   * @schema WorkSpacesModifyWorkspacePropertiesRequest#WorkspaceId
   */
  readonly workspaceId: string;

  /**
   * @schema WorkSpacesModifyWorkspacePropertiesRequest#WorkspaceProperties
   */
  readonly workspaceProperties: WorkSpacesWorkspaceProperties;

}

/**
 * @schema WorkSpacesModifyWorkspacePropertiesResult
 */
export interface WorkSpacesModifyWorkspacePropertiesResult {
}

/**
 * @schema WorkSpacesModifyWorkspaceStateRequest
 */
export interface WorkSpacesModifyWorkspaceStateRequest {
  /**
   * @schema WorkSpacesModifyWorkspaceStateRequest#WorkspaceId
   */
  readonly workspaceId: string;

  /**
   * @schema WorkSpacesModifyWorkspaceStateRequest#WorkspaceState
   */
  readonly workspaceState: string;

}

/**
 * @schema WorkSpacesModifyWorkspaceStateResult
 */
export interface WorkSpacesModifyWorkspaceStateResult {
}

/**
 * @schema WorkSpacesRebootWorkspacesRequest
 */
export interface WorkSpacesRebootWorkspacesRequest {
  /**
   * @schema WorkSpacesRebootWorkspacesRequest#RebootWorkspaceRequests
   */
  readonly rebootWorkspaceRequests: WorkSpacesRebootRequest[];

}

/**
 * @schema WorkSpacesRebootWorkspacesResult
 */
export interface WorkSpacesRebootWorkspacesResult {
  /**
   * @schema WorkSpacesRebootWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedWorkspaceChangeRequest[];

}

/**
 * @schema WorkSpacesRebuildWorkspacesRequest
 */
export interface WorkSpacesRebuildWorkspacesRequest {
  /**
   * @schema WorkSpacesRebuildWorkspacesRequest#RebuildWorkspaceRequests
   */
  readonly rebuildWorkspaceRequests: WorkSpacesRebuildRequest[];

}

/**
 * @schema WorkSpacesRebuildWorkspacesResult
 */
export interface WorkSpacesRebuildWorkspacesResult {
  /**
   * @schema WorkSpacesRebuildWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedWorkspaceChangeRequest[];

}

/**
 * @schema WorkSpacesRegisterWorkspaceDirectoryRequest
 */
export interface WorkSpacesRegisterWorkspaceDirectoryRequest {
  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#DirectoryId
   */
  readonly directoryId: string;

  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#EnableWorkDocs
   */
  readonly enableWorkDocs: boolean;

  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#EnableSelfService
   */
  readonly enableSelfService?: boolean;

  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * @schema WorkSpacesRegisterWorkspaceDirectoryResult
 */
export interface WorkSpacesRegisterWorkspaceDirectoryResult {
}

/**
 * @schema WorkSpacesRestoreWorkspaceRequest
 */
export interface WorkSpacesRestoreWorkspaceRequest {
  /**
   * @schema WorkSpacesRestoreWorkspaceRequest#WorkspaceId
   */
  readonly workspaceId: string;

}

/**
 * @schema WorkSpacesRestoreWorkspaceResult
 */
export interface WorkSpacesRestoreWorkspaceResult {
}

/**
 * @schema WorkSpacesRevokeIpRulesRequest
 */
export interface WorkSpacesRevokeIpRulesRequest {
  /**
   * @schema WorkSpacesRevokeIpRulesRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema WorkSpacesRevokeIpRulesRequest#UserRules
   */
  readonly userRules: string[];

}

/**
 * @schema WorkSpacesRevokeIpRulesResult
 */
export interface WorkSpacesRevokeIpRulesResult {
}

/**
 * @schema WorkSpacesStartWorkspacesRequest
 */
export interface WorkSpacesStartWorkspacesRequest {
  /**
   * @schema WorkSpacesStartWorkspacesRequest#StartWorkspaceRequests
   */
  readonly startWorkspaceRequests: WorkSpacesStartRequest[];

}

/**
 * @schema WorkSpacesStartWorkspacesResult
 */
export interface WorkSpacesStartWorkspacesResult {
  /**
   * @schema WorkSpacesStartWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedWorkspaceChangeRequest[];

}

/**
 * @schema WorkSpacesStopWorkspacesRequest
 */
export interface WorkSpacesStopWorkspacesRequest {
  /**
   * @schema WorkSpacesStopWorkspacesRequest#StopWorkspaceRequests
   */
  readonly stopWorkspaceRequests: WorkSpacesStopRequest[];

}

/**
 * @schema WorkSpacesStopWorkspacesResult
 */
export interface WorkSpacesStopWorkspacesResult {
  /**
   * @schema WorkSpacesStopWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedWorkspaceChangeRequest[];

}

/**
 * @schema WorkSpacesTerminateWorkspacesRequest
 */
export interface WorkSpacesTerminateWorkspacesRequest {
  /**
   * @schema WorkSpacesTerminateWorkspacesRequest#TerminateWorkspaceRequests
   */
  readonly terminateWorkspaceRequests: WorkSpacesTerminateRequest[];

}

/**
 * @schema WorkSpacesTerminateWorkspacesResult
 */
export interface WorkSpacesTerminateWorkspacesResult {
  /**
   * @schema WorkSpacesTerminateWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedWorkspaceChangeRequest[];

}

/**
 * @schema WorkSpacesUpdateConnectionAliasPermissionRequest
 */
export interface WorkSpacesUpdateConnectionAliasPermissionRequest {
  /**
   * @schema WorkSpacesUpdateConnectionAliasPermissionRequest#AliasId
   */
  readonly aliasId: string;

  /**
   * @schema WorkSpacesUpdateConnectionAliasPermissionRequest#ConnectionAliasPermission
   */
  readonly connectionAliasPermission: WorkSpacesConnectionAliasPermission;

}

/**
 * @schema WorkSpacesUpdateConnectionAliasPermissionResult
 */
export interface WorkSpacesUpdateConnectionAliasPermissionResult {
}

/**
 * @schema WorkSpacesUpdateRulesOfIpGroupRequest
 */
export interface WorkSpacesUpdateRulesOfIpGroupRequest {
  /**
   * @schema WorkSpacesUpdateRulesOfIpGroupRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema WorkSpacesUpdateRulesOfIpGroupRequest#UserRules
   */
  readonly userRules: WorkSpacesIpRuleItem[];

}

/**
 * @schema WorkSpacesUpdateRulesOfIpGroupResult
 */
export interface WorkSpacesUpdateRulesOfIpGroupResult {
}

/**
 * @schema WorkSpacesUpdateWorkspaceImagePermissionRequest
 */
export interface WorkSpacesUpdateWorkspaceImagePermissionRequest {
  /**
   * @schema WorkSpacesUpdateWorkspaceImagePermissionRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema WorkSpacesUpdateWorkspaceImagePermissionRequest#AllowCopyImage
   */
  readonly allowCopyImage: boolean;

  /**
   * @schema WorkSpacesUpdateWorkspaceImagePermissionRequest#SharedAccountId
   */
  readonly sharedAccountId: string;

}

/**
 * @schema WorkSpacesUpdateWorkspaceImagePermissionResult
 */
export interface WorkSpacesUpdateWorkspaceImagePermissionResult {
}

/**
 * @schema WorkSpacesIpRuleItem
 */
export interface WorkSpacesIpRuleItem {
  /**
   * @schema WorkSpacesIpRuleItem#ipRule
   */
  readonly ipRule?: string;

  /**
   * @schema WorkSpacesIpRuleItem#ruleDesc
   */
  readonly ruleDesc?: string;

}

/**
 * @schema WorkSpacesTag
 */
export interface WorkSpacesTag {
  /**
   * @schema WorkSpacesTag#Key
   */
  readonly key: string;

  /**
   * @schema WorkSpacesTag#Value
   */
  readonly value?: string;

}

/**
 * @schema WorkSpacesWorkspaceRequest
 */
export interface WorkSpacesWorkspaceRequest {
  /**
   * @schema WorkSpacesWorkspaceRequest#DirectoryId
   */
  readonly directoryId: string;

  /**
   * @schema WorkSpacesWorkspaceRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema WorkSpacesWorkspaceRequest#BundleId
   */
  readonly bundleId: string;

  /**
   * @schema WorkSpacesWorkspaceRequest#VolumeEncryptionKey
   */
  readonly volumeEncryptionKey?: string;

  /**
   * @schema WorkSpacesWorkspaceRequest#UserVolumeEncryptionEnabled
   */
  readonly userVolumeEncryptionEnabled?: boolean;

  /**
   * @schema WorkSpacesWorkspaceRequest#RootVolumeEncryptionEnabled
   */
  readonly rootVolumeEncryptionEnabled?: boolean;

  /**
   * @schema WorkSpacesWorkspaceRequest#WorkspaceProperties
   */
  readonly workspaceProperties?: WorkSpacesWorkspaceProperties;

  /**
   * @schema WorkSpacesWorkspaceRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * @schema WorkSpacesFailedCreateWorkspaceRequest
 */
export interface WorkSpacesFailedCreateWorkspaceRequest {
  /**
   * @schema WorkSpacesFailedCreateWorkspaceRequest#WorkspaceRequest
   */
  readonly workspaceRequest?: WorkSpacesWorkspaceRequest;

  /**
   * @schema WorkSpacesFailedCreateWorkspaceRequest#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkSpacesFailedCreateWorkspaceRequest#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema WorkSpacesWorkspace
 */
export interface WorkSpacesWorkspace {
  /**
   * @schema WorkSpacesWorkspace#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema WorkSpacesWorkspace#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkSpacesWorkspace#UserName
   */
  readonly userName?: string;

  /**
   * @schema WorkSpacesWorkspace#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema WorkSpacesWorkspace#State
   */
  readonly state?: string;

  /**
   * @schema WorkSpacesWorkspace#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema WorkSpacesWorkspace#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema WorkSpacesWorkspace#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema WorkSpacesWorkspace#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkSpacesWorkspace#ComputerName
   */
  readonly computerName?: string;

  /**
   * @schema WorkSpacesWorkspace#VolumeEncryptionKey
   */
  readonly volumeEncryptionKey?: string;

  /**
   * @schema WorkSpacesWorkspace#UserVolumeEncryptionEnabled
   */
  readonly userVolumeEncryptionEnabled?: boolean;

  /**
   * @schema WorkSpacesWorkspace#RootVolumeEncryptionEnabled
   */
  readonly rootVolumeEncryptionEnabled?: boolean;

  /**
   * @schema WorkSpacesWorkspace#WorkspaceProperties
   */
  readonly workspaceProperties?: WorkSpacesWorkspaceProperties;

  /**
   * @schema WorkSpacesWorkspace#ModificationStates
   */
  readonly modificationStates?: WorkSpacesModificationState[];

}

/**
 * @schema WorkSpacesAccountModification
 */
export interface WorkSpacesAccountModification {
  /**
   * @schema WorkSpacesAccountModification#ModificationState
   */
  readonly modificationState?: string;

  /**
   * @schema WorkSpacesAccountModification#DedicatedTenancySupport
   */
  readonly dedicatedTenancySupport?: string;

  /**
   * @schema WorkSpacesAccountModification#DedicatedTenancyManagementCidrRange
   */
  readonly dedicatedTenancyManagementCidrRange?: string;

  /**
   * @schema WorkSpacesAccountModification#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema WorkSpacesAccountModification#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkSpacesAccountModification#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema WorkSpacesClientPropertiesResult
 */
export interface WorkSpacesClientPropertiesResult {
  /**
   * @schema WorkSpacesClientPropertiesResult#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesClientPropertiesResult#ClientProperties
   */
  readonly clientProperties?: WorkSpacesClientProperties;

}

/**
 * @schema WorkSpacesConnectionAliasPermission
 */
export interface WorkSpacesConnectionAliasPermission {
  /**
   * @schema WorkSpacesConnectionAliasPermission#SharedAccountId
   */
  readonly sharedAccountId: string;

  /**
   * @schema WorkSpacesConnectionAliasPermission#AllowAssociation
   */
  readonly allowAssociation: boolean;

}

/**
 * @schema WorkSpacesConnectionAlias
 */
export interface WorkSpacesConnectionAlias {
  /**
   * @schema WorkSpacesConnectionAlias#ConnectionString
   */
  readonly connectionString?: string;

  /**
   * @schema WorkSpacesConnectionAlias#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema WorkSpacesConnectionAlias#State
   */
  readonly state?: string;

  /**
   * @schema WorkSpacesConnectionAlias#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema WorkSpacesConnectionAlias#Associations
   */
  readonly associations?: WorkSpacesConnectionAliasAssociation[];

}

/**
 * @schema WorkSpacesWorkspacesIpGroup
 */
export interface WorkSpacesWorkspacesIpGroup {
  /**
   * @schema WorkSpacesWorkspacesIpGroup#groupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkSpacesWorkspacesIpGroup#groupName
   */
  readonly groupName?: string;

  /**
   * @schema WorkSpacesWorkspacesIpGroup#groupDesc
   */
  readonly groupDesc?: string;

  /**
   * @schema WorkSpacesWorkspacesIpGroup#userRules
   */
  readonly userRules?: WorkSpacesIpRuleItem[];

}

/**
 * @schema WorkSpacesWorkspaceBundle
 */
export interface WorkSpacesWorkspaceBundle {
  /**
   * @schema WorkSpacesWorkspaceBundle#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#Name
   */
  readonly name?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#Owner
   */
  readonly owner?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#Description
   */
  readonly description?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#RootStorage
   */
  readonly rootStorage?: WorkSpacesRootStorage;

  /**
   * @schema WorkSpacesWorkspaceBundle#UserStorage
   */
  readonly userStorage?: WorkSpacesUserStorage;

  /**
   * @schema WorkSpacesWorkspaceBundle#ComputeType
   */
  readonly computeType?: WorkSpacesComputeType;

  /**
   * @schema WorkSpacesWorkspaceBundle#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema WorkSpacesWorkspaceDirectory
 */
export interface WorkSpacesWorkspaceDirectory {
  /**
   * @schema WorkSpacesWorkspaceDirectory#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#Alias
   */
  readonly alias?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#DirectoryName
   */
  readonly directoryName?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#RegistrationCode
   */
  readonly registrationCode?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema WorkSpacesWorkspaceDirectory#DnsIpAddresses
   */
  readonly dnsIpAddresses?: string[];

  /**
   * @schema WorkSpacesWorkspaceDirectory#CustomerUserName
   */
  readonly customerUserName?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#IamRoleId
   */
  readonly iamRoleId?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#DirectoryType
   */
  readonly directoryType?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#WorkspaceSecurityGroupId
   */
  readonly workspaceSecurityGroupId?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#State
   */
  readonly state?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#WorkspaceCreationProperties
   */
  readonly workspaceCreationProperties?: WorkSpacesDefaultWorkspaceCreationProperties;

  /**
   * @schema WorkSpacesWorkspaceDirectory#ipGroupIds
   */
  readonly ipGroupIds?: string[];

  /**
   * @schema WorkSpacesWorkspaceDirectory#WorkspaceAccessProperties
   */
  readonly workspaceAccessProperties?: WorkSpacesWorkspaceAccessProperties;

  /**
   * @schema WorkSpacesWorkspaceDirectory#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#SelfservicePermissions
   */
  readonly selfservicePermissions?: WorkSpacesSelfservicePermissions;

}

/**
 * @schema WorkSpacesImagePermission
 */
export interface WorkSpacesImagePermission {
  /**
   * @schema WorkSpacesImagePermission#SharedAccountId
   */
  readonly sharedAccountId?: string;

}

/**
 * @schema WorkSpacesWorkspaceImage
 */
export interface WorkSpacesWorkspaceImage {
  /**
   * @schema WorkSpacesWorkspaceImage#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#Name
   */
  readonly name?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#Description
   */
  readonly description?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#OperatingSystem
   */
  readonly operatingSystem?: WorkSpacesOperatingSystem;

  /**
   * @schema WorkSpacesWorkspaceImage#State
   */
  readonly state?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#RequiredTenancy
   */
  readonly requiredTenancy?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#Created
   */
  readonly created?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#OwnerAccountId
   */
  readonly ownerAccountId?: string;

}

/**
 * @schema WorkSpacesSnapshot
 */
export interface WorkSpacesSnapshot {
  /**
   * @schema WorkSpacesSnapshot#SnapshotTime
   */
  readonly snapshotTime?: string;

}

/**
 * @schema WorkSpacesWorkspaceConnectionStatus
 */
export interface WorkSpacesWorkspaceConnectionStatus {
  /**
   * @schema WorkSpacesWorkspaceConnectionStatus#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema WorkSpacesWorkspaceConnectionStatus#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema WorkSpacesWorkspaceConnectionStatus#ConnectionStateCheckTimestamp
   */
  readonly connectionStateCheckTimestamp?: string;

  /**
   * @schema WorkSpacesWorkspaceConnectionStatus#LastKnownUserConnectionTimestamp
   */
  readonly lastKnownUserConnectionTimestamp?: string;

}

/**
 * @schema WorkSpacesClientProperties
 */
export interface WorkSpacesClientProperties {
  /**
   * @schema WorkSpacesClientProperties#ReconnectEnabled
   */
  readonly reconnectEnabled?: string;

}

/**
 * @schema WorkSpacesSelfservicePermissions
 */
export interface WorkSpacesSelfservicePermissions {
  /**
   * @schema WorkSpacesSelfservicePermissions#RestartWorkspace
   */
  readonly restartWorkspace?: string;

  /**
   * @schema WorkSpacesSelfservicePermissions#IncreaseVolumeSize
   */
  readonly increaseVolumeSize?: string;

  /**
   * @schema WorkSpacesSelfservicePermissions#ChangeComputeType
   */
  readonly changeComputeType?: string;

  /**
   * @schema WorkSpacesSelfservicePermissions#SwitchRunningMode
   */
  readonly switchRunningMode?: string;

  /**
   * @schema WorkSpacesSelfservicePermissions#RebuildWorkspace
   */
  readonly rebuildWorkspace?: string;

}

/**
 * @schema WorkSpacesWorkspaceAccessProperties
 */
export interface WorkSpacesWorkspaceAccessProperties {
  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeWindows
   */
  readonly deviceTypeWindows?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeOsx
   */
  readonly deviceTypeOsx?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeWeb
   */
  readonly deviceTypeWeb?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeIos
   */
  readonly deviceTypeIos?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeAndroid
   */
  readonly deviceTypeAndroid?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeChromeOs
   */
  readonly deviceTypeChromeOs?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeZeroClient
   */
  readonly deviceTypeZeroClient?: string;

}

/**
 * @schema WorkSpacesWorkspaceCreationProperties
 */
export interface WorkSpacesWorkspaceCreationProperties {
  /**
   * @schema WorkSpacesWorkspaceCreationProperties#EnableWorkDocs
   */
  readonly enableWorkDocs?: boolean;

  /**
   * @schema WorkSpacesWorkspaceCreationProperties#EnableInternetAccess
   */
  readonly enableInternetAccess?: boolean;

  /**
   * @schema WorkSpacesWorkspaceCreationProperties#DefaultOu
   */
  readonly defaultOu?: string;

  /**
   * @schema WorkSpacesWorkspaceCreationProperties#CustomSecurityGroupId
   */
  readonly customSecurityGroupId?: string;

  /**
   * @schema WorkSpacesWorkspaceCreationProperties#UserEnabledAsLocalAdministrator
   */
  readonly userEnabledAsLocalAdministrator?: boolean;

  /**
   * @schema WorkSpacesWorkspaceCreationProperties#EnableMaintenanceMode
   */
  readonly enableMaintenanceMode?: boolean;

}

/**
 * @schema WorkSpacesWorkspaceProperties
 */
export interface WorkSpacesWorkspaceProperties {
  /**
   * @schema WorkSpacesWorkspaceProperties#RunningMode
   */
  readonly runningMode?: string;

  /**
   * @schema WorkSpacesWorkspaceProperties#RunningModeAutoStopTimeoutInMinutes
   */
  readonly runningModeAutoStopTimeoutInMinutes?: number;

  /**
   * @schema WorkSpacesWorkspaceProperties#RootVolumeSizeGib
   */
  readonly rootVolumeSizeGib?: number;

  /**
   * @schema WorkSpacesWorkspaceProperties#UserVolumeSizeGib
   */
  readonly userVolumeSizeGib?: number;

  /**
   * @schema WorkSpacesWorkspaceProperties#ComputeTypeName
   */
  readonly computeTypeName?: string;

}

/**
 * @schema WorkSpacesRebootRequest
 */
export interface WorkSpacesRebootRequest {
  /**
   * @schema WorkSpacesRebootRequest#WorkspaceId
   */
  readonly workspaceId: string;

}

/**
 * @schema WorkSpacesFailedWorkspaceChangeRequest
 */
export interface WorkSpacesFailedWorkspaceChangeRequest {
  /**
   * @schema WorkSpacesFailedWorkspaceChangeRequest#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema WorkSpacesFailedWorkspaceChangeRequest#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkSpacesFailedWorkspaceChangeRequest#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema WorkSpacesRebuildRequest
 */
export interface WorkSpacesRebuildRequest {
  /**
   * @schema WorkSpacesRebuildRequest#WorkspaceId
   */
  readonly workspaceId: string;

}

/**
 * @schema WorkSpacesStartRequest
 */
export interface WorkSpacesStartRequest {
  /**
   * @schema WorkSpacesStartRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * @schema WorkSpacesStopRequest
 */
export interface WorkSpacesStopRequest {
  /**
   * @schema WorkSpacesStopRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * @schema WorkSpacesTerminateRequest
 */
export interface WorkSpacesTerminateRequest {
  /**
   * @schema WorkSpacesTerminateRequest#WorkspaceId
   */
  readonly workspaceId: string;

}

/**
 * @schema WorkSpacesModificationState
 */
export interface WorkSpacesModificationState {
  /**
   * @schema WorkSpacesModificationState#Resource
   */
  readonly resource?: string;

  /**
   * @schema WorkSpacesModificationState#State
   */
  readonly state?: string;

}

/**
 * @schema WorkSpacesConnectionAliasAssociation
 */
export interface WorkSpacesConnectionAliasAssociation {
  /**
   * @schema WorkSpacesConnectionAliasAssociation#AssociationStatus
   */
  readonly associationStatus?: string;

  /**
   * @schema WorkSpacesConnectionAliasAssociation#AssociatedAccountId
   */
  readonly associatedAccountId?: string;

  /**
   * @schema WorkSpacesConnectionAliasAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesConnectionAliasAssociation#ConnectionIdentifier
   */
  readonly connectionIdentifier?: string;

}

/**
 * @schema WorkSpacesRootStorage
 */
export interface WorkSpacesRootStorage {
  /**
   * @schema WorkSpacesRootStorage#Capacity
   */
  readonly capacity?: string;

}

/**
 * @schema WorkSpacesUserStorage
 */
export interface WorkSpacesUserStorage {
  /**
   * @schema WorkSpacesUserStorage#Capacity
   */
  readonly capacity?: string;

}

/**
 * @schema WorkSpacesComputeType
 */
export interface WorkSpacesComputeType {
  /**
   * @schema WorkSpacesComputeType#Name
   */
  readonly name?: string;

}

/**
 * @schema WorkSpacesDefaultWorkspaceCreationProperties
 */
export interface WorkSpacesDefaultWorkspaceCreationProperties {
  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#EnableWorkDocs
   */
  readonly enableWorkDocs?: boolean;

  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#EnableInternetAccess
   */
  readonly enableInternetAccess?: boolean;

  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#DefaultOu
   */
  readonly defaultOu?: string;

  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#CustomSecurityGroupId
   */
  readonly customSecurityGroupId?: string;

  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#UserEnabledAsLocalAdministrator
   */
  readonly userEnabledAsLocalAdministrator?: boolean;

  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#EnableMaintenanceMode
   */
  readonly enableMaintenanceMode?: boolean;

}

/**
 * @schema WorkSpacesOperatingSystem
 */
export interface WorkSpacesOperatingSystem {
  /**
   * @schema WorkSpacesOperatingSystem#Type
   */
  readonly type?: string;

}
