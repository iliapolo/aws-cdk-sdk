/**
 * @schema AbortDocumentVersionUploadRequest
 */
export interface AbortDocumentVersionUploadRequest {
  /**
   * @schema AbortDocumentVersionUploadRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema AbortDocumentVersionUploadRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema AbortDocumentVersionUploadRequest#VersionId
   */
  readonly versionId: string;

}

/**
 * @schema ActivateUserRequest
 */
export interface ActivateUserRequest {
  /**
   * @schema ActivateUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ActivateUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * @schema ActivateUserResponse
 */
export interface ActivateUserResponse {
  /**
   * @schema ActivateUserResponse#User
   */
  readonly user?: User;

}

/**
 * @schema AddResourcePermissionsRequest
 */
export interface AddResourcePermissionsRequest {
  /**
   * @schema AddResourcePermissionsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema AddResourcePermissionsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema AddResourcePermissionsRequest#Principals
   */
  readonly principals: SharePrincipal[];

  /**
   * @schema AddResourcePermissionsRequest#NotificationOptions
   */
  readonly notificationOptions?: NotificationOptions;

}

/**
 * @schema AddResourcePermissionsResponse
 */
export interface AddResourcePermissionsResponse {
  /**
   * @schema AddResourcePermissionsResponse#ShareResults
   */
  readonly shareResults?: ShareResult[];

}

/**
 * @schema CreateCommentRequest
 */
export interface CreateCommentRequest {
  /**
   * @schema CreateCommentRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema CreateCommentRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema CreateCommentRequest#VersionId
   */
  readonly versionId: string;

  /**
   * @schema CreateCommentRequest#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema CreateCommentRequest#ThreadId
   */
  readonly threadId?: string;

  /**
   * @schema CreateCommentRequest#Text
   */
  readonly text: string;

  /**
   * @schema CreateCommentRequest#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema CreateCommentRequest#NotifyCollaborators
   */
  readonly notifyCollaborators?: boolean;

}

/**
 * @schema CreateCommentResponse
 */
export interface CreateCommentResponse {
  /**
   * @schema CreateCommentResponse#Comment
   */
  readonly comment?: Comment;

}

/**
 * @schema CreateCustomMetadataRequest
 */
export interface CreateCustomMetadataRequest {
  /**
   * @schema CreateCustomMetadataRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema CreateCustomMetadataRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema CreateCustomMetadataRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema CreateCustomMetadataRequest#CustomMetadata
   */
  readonly customMetadata: { [key: string]: string };

}

/**
 * @schema CreateCustomMetadataResponse
 */
export interface CreateCustomMetadataResponse {
}

/**
 * @schema CreateFolderRequest
 */
export interface CreateFolderRequest {
  /**
   * @schema CreateFolderRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema CreateFolderRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateFolderRequest#ParentFolderId
   */
  readonly parentFolderId: string;

}

/**
 * @schema CreateFolderResponse
 */
export interface CreateFolderResponse {
  /**
   * @schema CreateFolderResponse#Metadata
   */
  readonly metadata?: FolderMetadata;

}

/**
 * @schema CreateLabelsRequest
 */
export interface CreateLabelsRequest {
  /**
   * @schema CreateLabelsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema CreateLabelsRequest#Labels
   */
  readonly labels: string[];

  /**
   * @schema CreateLabelsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * @schema CreateLabelsResponse
 */
export interface CreateLabelsResponse {
}

/**
 * @schema CreateNotificationSubscriptionRequest
 */
export interface CreateNotificationSubscriptionRequest {
  /**
   * @schema CreateNotificationSubscriptionRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema CreateNotificationSubscriptionRequest#Endpoint
   */
  readonly endpoint: string;

  /**
   * @schema CreateNotificationSubscriptionRequest#Protocol
   */
  readonly protocol: string;

  /**
   * @schema CreateNotificationSubscriptionRequest#SubscriptionType
   */
  readonly subscriptionType: string;

}

/**
 * @schema CreateNotificationSubscriptionResponse
 */
export interface CreateNotificationSubscriptionResponse {
  /**
   * @schema CreateNotificationSubscriptionResponse#Subscription
   */
  readonly subscription?: Subscription;

}

/**
 * @schema CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * @schema CreateUserRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema CreateUserRequest#Username
   */
  readonly username: string;

  /**
   * @schema CreateUserRequest#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CreateUserRequest#GivenName
   */
  readonly givenName: string;

  /**
   * @schema CreateUserRequest#Surname
   */
  readonly surname: string;

  /**
   * @schema CreateUserRequest#Password
   */
  readonly password: string;

  /**
   * @schema CreateUserRequest#TimeZoneId
   */
  readonly timeZoneId?: string;

  /**
   * @schema CreateUserRequest#StorageRule
   */
  readonly storageRule?: StorageRuleType;

  /**
   * @schema CreateUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * @schema CreateUserResponse
 */
export interface CreateUserResponse {
  /**
   * @schema CreateUserResponse#User
   */
  readonly user?: User;

}

/**
 * @schema DeactivateUserRequest
 */
export interface DeactivateUserRequest {
  /**
   * @schema DeactivateUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema DeactivateUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * @schema DeleteCommentRequest
 */
export interface DeleteCommentRequest {
  /**
   * @schema DeleteCommentRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DeleteCommentRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema DeleteCommentRequest#VersionId
   */
  readonly versionId: string;

  /**
   * @schema DeleteCommentRequest#CommentId
   */
  readonly commentId: string;

}

/**
 * @schema DeleteCustomMetadataRequest
 */
export interface DeleteCustomMetadataRequest {
  /**
   * @schema DeleteCustomMetadataRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DeleteCustomMetadataRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeleteCustomMetadataRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema DeleteCustomMetadataRequest#Keys
   */
  readonly keys?: string[];

  /**
   * @schema DeleteCustomMetadataRequest#DeleteAll
   */
  readonly deleteAll?: boolean;

}

/**
 * @schema DeleteCustomMetadataResponse
 */
export interface DeleteCustomMetadataResponse {
}

/**
 * @schema DeleteDocumentRequest
 */
export interface DeleteDocumentRequest {
  /**
   * @schema DeleteDocumentRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DeleteDocumentRequest#DocumentId
   */
  readonly documentId: string;

}

/**
 * @schema DeleteFolderRequest
 */
export interface DeleteFolderRequest {
  /**
   * @schema DeleteFolderRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DeleteFolderRequest#FolderId
   */
  readonly folderId: string;

}

/**
 * @schema DeleteFolderContentsRequest
 */
export interface DeleteFolderContentsRequest {
  /**
   * @schema DeleteFolderContentsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DeleteFolderContentsRequest#FolderId
   */
  readonly folderId: string;

}

/**
 * @schema DeleteLabelsRequest
 */
export interface DeleteLabelsRequest {
  /**
   * @schema DeleteLabelsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeleteLabelsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DeleteLabelsRequest#Labels
   */
  readonly labels?: string[];

  /**
   * @schema DeleteLabelsRequest#DeleteAll
   */
  readonly deleteAll?: boolean;

}

/**
 * @schema DeleteLabelsResponse
 */
export interface DeleteLabelsResponse {
}

/**
 * @schema DeleteNotificationSubscriptionRequest
 */
export interface DeleteNotificationSubscriptionRequest {
  /**
   * @schema DeleteNotificationSubscriptionRequest#SubscriptionId
   */
  readonly subscriptionId: string;

  /**
   * @schema DeleteNotificationSubscriptionRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema DeleteUserRequest
 */
export interface DeleteUserRequest {
  /**
   * @schema DeleteUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DeleteUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema DescribeActivitiesRequest
 */
export interface DescribeActivitiesRequest {
  /**
   * @schema DescribeActivitiesRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DescribeActivitiesRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeActivitiesRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeActivitiesRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema DescribeActivitiesRequest#ActivityTypes
   */
  readonly activityTypes?: string;

  /**
   * @schema DescribeActivitiesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DescribeActivitiesRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema DescribeActivitiesRequest#IncludeIndirectActivities
   */
  readonly includeIndirectActivities?: boolean;

  /**
   * @schema DescribeActivitiesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeActivitiesRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeActivitiesResponse
 */
export interface DescribeActivitiesResponse {
  /**
   * @schema DescribeActivitiesResponse#UserActivities
   */
  readonly userActivities?: Activity[];

  /**
   * @schema DescribeActivitiesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeCommentsRequest
 */
export interface DescribeCommentsRequest {
  /**
   * @schema DescribeCommentsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DescribeCommentsRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema DescribeCommentsRequest#VersionId
   */
  readonly versionId: string;

  /**
   * @schema DescribeCommentsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeCommentsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeCommentsResponse
 */
export interface DescribeCommentsResponse {
  /**
   * @schema DescribeCommentsResponse#Comments
   */
  readonly comments?: Comment[];

  /**
   * @schema DescribeCommentsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDocumentVersionsRequest
 */
export interface DescribeDocumentVersionsRequest {
  /**
   * @schema DescribeDocumentVersionsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DescribeDocumentVersionsRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema DescribeDocumentVersionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeDocumentVersionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeDocumentVersionsRequest#Include
   */
  readonly include?: string;

  /**
   * @schema DescribeDocumentVersionsRequest#Fields
   */
  readonly fields?: string;

}

/**
 * @schema DescribeDocumentVersionsResponse
 */
export interface DescribeDocumentVersionsResponse {
  /**
   * @schema DescribeDocumentVersionsResponse#DocumentVersions
   */
  readonly documentVersions?: DocumentVersionMetadata[];

  /**
   * @schema DescribeDocumentVersionsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeFolderContentsRequest
 */
export interface DescribeFolderContentsRequest {
  /**
   * @schema DescribeFolderContentsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DescribeFolderContentsRequest#FolderId
   */
  readonly folderId: string;

  /**
   * @schema DescribeFolderContentsRequest#Sort
   */
  readonly sort?: string;

  /**
   * @schema DescribeFolderContentsRequest#Order
   */
  readonly order?: string;

  /**
   * @schema DescribeFolderContentsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeFolderContentsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeFolderContentsRequest#Type
   */
  readonly type?: string;

  /**
   * @schema DescribeFolderContentsRequest#Include
   */
  readonly include?: string;

}

/**
 * @schema DescribeFolderContentsResponse
 */
export interface DescribeFolderContentsResponse {
  /**
   * @schema DescribeFolderContentsResponse#Folders
   */
  readonly folders?: FolderMetadata[];

  /**
   * @schema DescribeFolderContentsResponse#Documents
   */
  readonly documents?: DocumentMetadata[];

  /**
   * @schema DescribeFolderContentsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeGroupsRequest
 */
export interface DescribeGroupsRequest {
  /**
   * @schema DescribeGroupsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DescribeGroupsRequest#SearchQuery
   */
  readonly searchQuery: string;

  /**
   * @schema DescribeGroupsRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema DescribeGroupsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema DescribeGroupsResponse
 */
export interface DescribeGroupsResponse {
  /**
   * @schema DescribeGroupsResponse#Groups
   */
  readonly groups?: GroupMetadata[];

  /**
   * @schema DescribeGroupsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeNotificationSubscriptionsRequest
 */
export interface DescribeNotificationSubscriptionsRequest {
  /**
   * @schema DescribeNotificationSubscriptionsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema DescribeNotificationSubscriptionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeNotificationSubscriptionsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema DescribeNotificationSubscriptionsResponse
 */
export interface DescribeNotificationSubscriptionsResponse {
  /**
   * @schema DescribeNotificationSubscriptionsResponse#Subscriptions
   */
  readonly subscriptions?: Subscription[];

  /**
   * @schema DescribeNotificationSubscriptionsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeResourcePermissionsRequest
 */
export interface DescribeResourcePermissionsRequest {
  /**
   * @schema DescribeResourcePermissionsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DescribeResourcePermissionsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DescribeResourcePermissionsRequest#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema DescribeResourcePermissionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeResourcePermissionsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeResourcePermissionsResponse
 */
export interface DescribeResourcePermissionsResponse {
  /**
   * @schema DescribeResourcePermissionsResponse#Principals
   */
  readonly principals?: Principal[];

  /**
   * @schema DescribeResourcePermissionsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeRootFoldersRequest
 */
export interface DescribeRootFoldersRequest {
  /**
   * @schema DescribeRootFoldersRequest#AuthenticationToken
   */
  readonly authenticationToken: string;

  /**
   * @schema DescribeRootFoldersRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeRootFoldersRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeRootFoldersResponse
 */
export interface DescribeRootFoldersResponse {
  /**
   * @schema DescribeRootFoldersResponse#Folders
   */
  readonly folders?: FolderMetadata[];

  /**
   * @schema DescribeRootFoldersResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeUsersRequest
 */
export interface DescribeUsersRequest {
  /**
   * @schema DescribeUsersRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema DescribeUsersRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema DescribeUsersRequest#UserIds
   */
  readonly userIds?: string;

  /**
   * @schema DescribeUsersRequest#Query
   */
  readonly query?: string;

  /**
   * @schema DescribeUsersRequest#Include
   */
  readonly include?: string;

  /**
   * @schema DescribeUsersRequest#Order
   */
  readonly order?: string;

  /**
   * @schema DescribeUsersRequest#Sort
   */
  readonly sort?: string;

  /**
   * @schema DescribeUsersRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeUsersRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeUsersRequest#Fields
   */
  readonly fields?: string;

}

/**
 * @schema DescribeUsersResponse
 */
export interface DescribeUsersResponse {
  /**
   * @schema DescribeUsersResponse#Users
   */
  readonly users?: User[];

  /**
   * @schema DescribeUsersResponse#TotalNumberOfUsers
   */
  readonly totalNumberOfUsers?: number;

  /**
   * @schema DescribeUsersResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GetCurrentUserRequest
 */
export interface GetCurrentUserRequest {
  /**
   * @schema GetCurrentUserRequest#AuthenticationToken
   */
  readonly authenticationToken: string;

}

/**
 * @schema GetCurrentUserResponse
 */
export interface GetCurrentUserResponse {
  /**
   * @schema GetCurrentUserResponse#User
   */
  readonly user?: User;

}

/**
 * @schema GetDocumentRequest
 */
export interface GetDocumentRequest {
  /**
   * @schema GetDocumentRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema GetDocumentRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema GetDocumentRequest#IncludeCustomMetadata
   */
  readonly includeCustomMetadata?: boolean;

}

/**
 * @schema GetDocumentResponse
 */
export interface GetDocumentResponse {
  /**
   * @schema GetDocumentResponse#Metadata
   */
  readonly metadata?: DocumentMetadata;

  /**
   * @schema GetDocumentResponse#CustomMetadata
   */
  readonly customMetadata?: { [key: string]: string };

}

/**
 * @schema GetDocumentPathRequest
 */
export interface GetDocumentPathRequest {
  /**
   * @schema GetDocumentPathRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema GetDocumentPathRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema GetDocumentPathRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema GetDocumentPathRequest#Fields
   */
  readonly fields?: string;

  /**
   * @schema GetDocumentPathRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GetDocumentPathResponse
 */
export interface GetDocumentPathResponse {
  /**
   * @schema GetDocumentPathResponse#Path
   */
  readonly path?: ResourcePath;

}

/**
 * @schema GetDocumentVersionRequest
 */
export interface GetDocumentVersionRequest {
  /**
   * @schema GetDocumentVersionRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema GetDocumentVersionRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema GetDocumentVersionRequest#VersionId
   */
  readonly versionId: string;

  /**
   * @schema GetDocumentVersionRequest#Fields
   */
  readonly fields?: string;

  /**
   * @schema GetDocumentVersionRequest#IncludeCustomMetadata
   */
  readonly includeCustomMetadata?: boolean;

}

/**
 * @schema GetDocumentVersionResponse
 */
export interface GetDocumentVersionResponse {
  /**
   * @schema GetDocumentVersionResponse#Metadata
   */
  readonly metadata?: DocumentVersionMetadata;

  /**
   * @schema GetDocumentVersionResponse#CustomMetadata
   */
  readonly customMetadata?: { [key: string]: string };

}

/**
 * @schema GetFolderRequest
 */
export interface GetFolderRequest {
  /**
   * @schema GetFolderRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema GetFolderRequest#FolderId
   */
  readonly folderId: string;

  /**
   * @schema GetFolderRequest#IncludeCustomMetadata
   */
  readonly includeCustomMetadata?: boolean;

}

/**
 * @schema GetFolderResponse
 */
export interface GetFolderResponse {
  /**
   * @schema GetFolderResponse#Metadata
   */
  readonly metadata?: FolderMetadata;

  /**
   * @schema GetFolderResponse#CustomMetadata
   */
  readonly customMetadata?: { [key: string]: string };

}

/**
 * @schema GetFolderPathRequest
 */
export interface GetFolderPathRequest {
  /**
   * @schema GetFolderPathRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema GetFolderPathRequest#FolderId
   */
  readonly folderId: string;

  /**
   * @schema GetFolderPathRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema GetFolderPathRequest#Fields
   */
  readonly fields?: string;

  /**
   * @schema GetFolderPathRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GetFolderPathResponse
 */
export interface GetFolderPathResponse {
  /**
   * @schema GetFolderPathResponse#Path
   */
  readonly path?: ResourcePath;

}

/**
 * @schema GetResourcesRequest
 */
export interface GetResourcesRequest {
  /**
   * @schema GetResourcesRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema GetResourcesRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema GetResourcesRequest#CollectionType
   */
  readonly collectionType?: string;

  /**
   * @schema GetResourcesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema GetResourcesRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GetResourcesResponse
 */
export interface GetResourcesResponse {
  /**
   * @schema GetResourcesResponse#Folders
   */
  readonly folders?: FolderMetadata[];

  /**
   * @schema GetResourcesResponse#Documents
   */
  readonly documents?: DocumentMetadata[];

  /**
   * @schema GetResourcesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema InitiateDocumentVersionUploadRequest
 */
export interface InitiateDocumentVersionUploadRequest {
  /**
   * @schema InitiateDocumentVersionUploadRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema InitiateDocumentVersionUploadRequest#Id
   */
  readonly id?: string;

  /**
   * @schema InitiateDocumentVersionUploadRequest#Name
   */
  readonly name?: string;

  /**
   * @schema InitiateDocumentVersionUploadRequest#ContentCreatedTimestamp
   */
  readonly contentCreatedTimestamp?: string;

  /**
   * @schema InitiateDocumentVersionUploadRequest#ContentModifiedTimestamp
   */
  readonly contentModifiedTimestamp?: string;

  /**
   * @schema InitiateDocumentVersionUploadRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema InitiateDocumentVersionUploadRequest#DocumentSizeInBytes
   */
  readonly documentSizeInBytes?: number;

  /**
   * @schema InitiateDocumentVersionUploadRequest#ParentFolderId
   */
  readonly parentFolderId: string;

}

/**
 * @schema InitiateDocumentVersionUploadResponse
 */
export interface InitiateDocumentVersionUploadResponse {
  /**
   * @schema InitiateDocumentVersionUploadResponse#Metadata
   */
  readonly metadata?: DocumentMetadata;

  /**
   * @schema InitiateDocumentVersionUploadResponse#UploadMetadata
   */
  readonly uploadMetadata?: UploadMetadata;

}

/**
 * @schema RemoveAllResourcePermissionsRequest
 */
export interface RemoveAllResourcePermissionsRequest {
  /**
   * @schema RemoveAllResourcePermissionsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema RemoveAllResourcePermissionsRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema RemoveResourcePermissionRequest
 */
export interface RemoveResourcePermissionRequest {
  /**
   * @schema RemoveResourcePermissionRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema RemoveResourcePermissionRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema RemoveResourcePermissionRequest#PrincipalId
   */
  readonly principalId: string;

  /**
   * @schema RemoveResourcePermissionRequest#PrincipalType
   */
  readonly principalType?: string;

}

/**
 * @schema UpdateDocumentRequest
 */
export interface UpdateDocumentRequest {
  /**
   * @schema UpdateDocumentRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema UpdateDocumentRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema UpdateDocumentRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateDocumentRequest#ParentFolderId
   */
  readonly parentFolderId?: string;

  /**
   * @schema UpdateDocumentRequest#ResourceState
   */
  readonly resourceState?: string;

}

/**
 * @schema UpdateDocumentVersionRequest
 */
export interface UpdateDocumentVersionRequest {
  /**
   * @schema UpdateDocumentVersionRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema UpdateDocumentVersionRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema UpdateDocumentVersionRequest#VersionId
   */
  readonly versionId: string;

  /**
   * @schema UpdateDocumentVersionRequest#VersionStatus
   */
  readonly versionStatus?: string;

}

/**
 * @schema UpdateFolderRequest
 */
export interface UpdateFolderRequest {
  /**
   * @schema UpdateFolderRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema UpdateFolderRequest#FolderId
   */
  readonly folderId: string;

  /**
   * @schema UpdateFolderRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateFolderRequest#ParentFolderId
   */
  readonly parentFolderId?: string;

  /**
   * @schema UpdateFolderRequest#ResourceState
   */
  readonly resourceState?: string;

}

/**
 * @schema UpdateUserRequest
 */
export interface UpdateUserRequest {
  /**
   * @schema UpdateUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema UpdateUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema UpdateUserRequest#GivenName
   */
  readonly givenName?: string;

  /**
   * @schema UpdateUserRequest#Surname
   */
  readonly surname?: string;

  /**
   * @schema UpdateUserRequest#Type
   */
  readonly type?: string;

  /**
   * @schema UpdateUserRequest#StorageRule
   */
  readonly storageRule?: StorageRuleType;

  /**
   * @schema UpdateUserRequest#TimeZoneId
   */
  readonly timeZoneId?: string;

  /**
   * @schema UpdateUserRequest#Locale
   */
  readonly locale?: string;

  /**
   * @schema UpdateUserRequest#GrantPoweruserPrivileges
   */
  readonly grantPoweruserPrivileges?: string;

}

/**
 * @schema UpdateUserResponse
 */
export interface UpdateUserResponse {
  /**
   * @schema UpdateUserResponse#User
   */
  readonly user?: User;

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
   * @schema User#Username
   */
  readonly username?: string;

  /**
   * @schema User#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema User#GivenName
   */
  readonly givenName?: string;

  /**
   * @schema User#Surname
   */
  readonly surname?: string;

  /**
   * @schema User#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema User#RootFolderId
   */
  readonly rootFolderId?: string;

  /**
   * @schema User#RecycleBinFolderId
   */
  readonly recycleBinFolderId?: string;

  /**
   * @schema User#Status
   */
  readonly status?: string;

  /**
   * @schema User#Type
   */
  readonly type?: string;

  /**
   * @schema User#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema User#ModifiedTimestamp
   */
  readonly modifiedTimestamp?: string;

  /**
   * @schema User#TimeZoneId
   */
  readonly timeZoneId?: string;

  /**
   * @schema User#Locale
   */
  readonly locale?: string;

  /**
   * @schema User#Storage
   */
  readonly storage?: UserStorageMetadata;

}

/**
 * @schema SharePrincipal
 */
export interface SharePrincipal {
  /**
   * @schema SharePrincipal#Id
   */
  readonly id: string;

  /**
   * @schema SharePrincipal#Type
   */
  readonly type: string;

  /**
   * @schema SharePrincipal#Role
   */
  readonly role: string;

}

/**
 * @schema NotificationOptions
 */
export interface NotificationOptions {
  /**
   * @schema NotificationOptions#SendEmail
   */
  readonly sendEmail?: boolean;

  /**
   * @schema NotificationOptions#EmailMessage
   */
  readonly emailMessage?: string;

}

/**
 * @schema ShareResult
 */
export interface ShareResult {
  /**
   * @schema ShareResult#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema ShareResult#InviteePrincipalId
   */
  readonly inviteePrincipalId?: string;

  /**
   * @schema ShareResult#Role
   */
  readonly role?: string;

  /**
   * @schema ShareResult#Status
   */
  readonly status?: string;

  /**
   * @schema ShareResult#ShareId
   */
  readonly shareId?: string;

  /**
   * @schema ShareResult#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema Comment
 */
export interface Comment {
  /**
   * @schema Comment#CommentId
   */
  readonly commentId: string;

  /**
   * @schema Comment#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema Comment#ThreadId
   */
  readonly threadId?: string;

  /**
   * @schema Comment#Text
   */
  readonly text?: string;

  /**
   * @schema Comment#Contributor
   */
  readonly contributor?: User;

  /**
   * @schema Comment#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema Comment#Status
   */
  readonly status?: string;

  /**
   * @schema Comment#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema Comment#RecipientId
   */
  readonly recipientId?: string;

}

/**
 * @schema FolderMetadata
 */
export interface FolderMetadata {
  /**
   * @schema FolderMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema FolderMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema FolderMetadata#CreatorId
   */
  readonly creatorId?: string;

  /**
   * @schema FolderMetadata#ParentFolderId
   */
  readonly parentFolderId?: string;

  /**
   * @schema FolderMetadata#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema FolderMetadata#ModifiedTimestamp
   */
  readonly modifiedTimestamp?: string;

  /**
   * @schema FolderMetadata#ResourceState
   */
  readonly resourceState?: string;

  /**
   * @schema FolderMetadata#Signature
   */
  readonly signature?: string;

  /**
   * @schema FolderMetadata#Labels
   */
  readonly labels?: string[];

  /**
   * @schema FolderMetadata#Size
   */
  readonly size?: number;

  /**
   * @schema FolderMetadata#LatestVersionSize
   */
  readonly latestVersionSize?: number;

}

/**
 * @schema Subscription
 */
export interface Subscription {
  /**
   * @schema Subscription#SubscriptionId
   */
  readonly subscriptionId?: string;

  /**
   * @schema Subscription#EndPoint
   */
  readonly endPoint?: string;

  /**
   * @schema Subscription#Protocol
   */
  readonly protocol?: string;

}

/**
 * @schema StorageRuleType
 */
export interface StorageRuleType {
  /**
   * @schema StorageRuleType#StorageAllocatedInBytes
   */
  readonly storageAllocatedInBytes?: number;

  /**
   * @schema StorageRuleType#StorageType
   */
  readonly storageType?: string;

}

/**
 * @schema Activity
 */
export interface Activity {
  /**
   * @schema Activity#Type
   */
  readonly type?: string;

  /**
   * @schema Activity#TimeStamp
   */
  readonly timeStamp?: string;

  /**
   * @schema Activity#IsIndirectActivity
   */
  readonly isIndirectActivity?: boolean;

  /**
   * @schema Activity#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema Activity#Initiator
   */
  readonly initiator?: UserMetadata;

  /**
   * @schema Activity#Participants
   */
  readonly participants?: Participants;

  /**
   * @schema Activity#ResourceMetadata
   */
  readonly resourceMetadata?: ResourceMetadata;

  /**
   * @schema Activity#OriginalParent
   */
  readonly originalParent?: ResourceMetadata;

  /**
   * @schema Activity#CommentMetadata
   */
  readonly commentMetadata?: CommentMetadata;

}

/**
 * @schema DocumentVersionMetadata
 */
export interface DocumentVersionMetadata {
  /**
   * @schema DocumentVersionMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema DocumentVersionMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema DocumentVersionMetadata#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema DocumentVersionMetadata#Size
   */
  readonly size?: number;

  /**
   * @schema DocumentVersionMetadata#Signature
   */
  readonly signature?: string;

  /**
   * @schema DocumentVersionMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema DocumentVersionMetadata#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema DocumentVersionMetadata#ModifiedTimestamp
   */
  readonly modifiedTimestamp?: string;

  /**
   * @schema DocumentVersionMetadata#ContentCreatedTimestamp
   */
  readonly contentCreatedTimestamp?: string;

  /**
   * @schema DocumentVersionMetadata#ContentModifiedTimestamp
   */
  readonly contentModifiedTimestamp?: string;

  /**
   * @schema DocumentVersionMetadata#CreatorId
   */
  readonly creatorId?: string;

  /**
   * @schema DocumentVersionMetadata#Thumbnail
   */
  readonly thumbnail?: { [key: string]: string };

  /**
   * @schema DocumentVersionMetadata#Source
   */
  readonly source?: { [key: string]: string };

}

/**
 * @schema DocumentMetadata
 */
export interface DocumentMetadata {
  /**
   * @schema DocumentMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema DocumentMetadata#CreatorId
   */
  readonly creatorId?: string;

  /**
   * @schema DocumentMetadata#ParentFolderId
   */
  readonly parentFolderId?: string;

  /**
   * @schema DocumentMetadata#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema DocumentMetadata#ModifiedTimestamp
   */
  readonly modifiedTimestamp?: string;

  /**
   * @schema DocumentMetadata#LatestVersionMetadata
   */
  readonly latestVersionMetadata?: DocumentVersionMetadata;

  /**
   * @schema DocumentMetadata#ResourceState
   */
  readonly resourceState?: string;

  /**
   * @schema DocumentMetadata#Labels
   */
  readonly labels?: string[];

}

/**
 * @schema GroupMetadata
 */
export interface GroupMetadata {
  /**
   * @schema GroupMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema GroupMetadata#Name
   */
  readonly name?: string;

}

/**
 * @schema Principal
 */
export interface Principal {
  /**
   * @schema Principal#Id
   */
  readonly id?: string;

  /**
   * @schema Principal#Type
   */
  readonly type?: string;

  /**
   * @schema Principal#Roles
   */
  readonly roles?: PermissionInfo[];

}

/**
 * @schema ResourcePath
 */
export interface ResourcePath {
  /**
   * @schema ResourcePath#Components
   */
  readonly components?: ResourcePathComponent[];

}

/**
 * @schema UploadMetadata
 */
export interface UploadMetadata {
  /**
   * @schema UploadMetadata#UploadUrl
   */
  readonly uploadUrl?: string;

  /**
   * @schema UploadMetadata#SignedHeaders
   */
  readonly signedHeaders?: { [key: string]: string };

}

/**
 * @schema UserStorageMetadata
 */
export interface UserStorageMetadata {
  /**
   * @schema UserStorageMetadata#StorageUtilizedInBytes
   */
  readonly storageUtilizedInBytes?: number;

  /**
   * @schema UserStorageMetadata#StorageRule
   */
  readonly storageRule?: StorageRuleType;

}

/**
 * @schema UserMetadata
 */
export interface UserMetadata {
  /**
   * @schema UserMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema UserMetadata#Username
   */
  readonly username?: string;

  /**
   * @schema UserMetadata#GivenName
   */
  readonly givenName?: string;

  /**
   * @schema UserMetadata#Surname
   */
  readonly surname?: string;

  /**
   * @schema UserMetadata#EmailAddress
   */
  readonly emailAddress?: string;

}

/**
 * @schema Participants
 */
export interface Participants {
  /**
   * @schema Participants#Users
   */
  readonly users?: UserMetadata[];

  /**
   * @schema Participants#Groups
   */
  readonly groups?: GroupMetadata[];

}

/**
 * @schema ResourceMetadata
 */
export interface ResourceMetadata {
  /**
   * @schema ResourceMetadata#Type
   */
  readonly type?: string;

  /**
   * @schema ResourceMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema ResourceMetadata#OriginalName
   */
  readonly originalName?: string;

  /**
   * @schema ResourceMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema ResourceMetadata#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema ResourceMetadata#Owner
   */
  readonly owner?: UserMetadata;

  /**
   * @schema ResourceMetadata#ParentId
   */
  readonly parentId?: string;

}

/**
 * @schema CommentMetadata
 */
export interface CommentMetadata {
  /**
   * @schema CommentMetadata#CommentId
   */
  readonly commentId?: string;

  /**
   * @schema CommentMetadata#Contributor
   */
  readonly contributor?: User;

  /**
   * @schema CommentMetadata#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema CommentMetadata#CommentStatus
   */
  readonly commentStatus?: string;

  /**
   * @schema CommentMetadata#RecipientId
   */
  readonly recipientId?: string;

}

/**
 * @schema PermissionInfo
 */
export interface PermissionInfo {
  /**
   * @schema PermissionInfo#Role
   */
  readonly role?: string;

  /**
   * @schema PermissionInfo#Type
   */
  readonly type?: string;

}

/**
 * @schema ResourcePathComponent
 */
export interface ResourcePathComponent {
  /**
   * @schema ResourcePathComponent#Id
   */
  readonly id?: string;

  /**
   * @schema ResourcePathComponent#Name
   */
  readonly name?: string;

}
