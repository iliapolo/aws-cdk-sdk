/**
 * @schema WorkDocsAbortDocumentVersionUploadRequest
 */
export interface WorkDocsAbortDocumentVersionUploadRequest {
  /**
   * @schema WorkDocsAbortDocumentVersionUploadRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsAbortDocumentVersionUploadRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema WorkDocsAbortDocumentVersionUploadRequest#VersionId
   */
  readonly versionId: string;

}

/**
 * @schema WorkDocsActivateUserRequest
 */
export interface WorkDocsActivateUserRequest {
  /**
   * @schema WorkDocsActivateUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema WorkDocsActivateUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * @schema WorkDocsActivateUserResponse
 */
export interface WorkDocsActivateUserResponse {
  /**
   * @schema WorkDocsActivateUserResponse#User
   */
  readonly user?: WorkDocsUser;

}

/**
 * @schema WorkDocsAddResourcePermissionsRequest
 */
export interface WorkDocsAddResourcePermissionsRequest {
  /**
   * @schema WorkDocsAddResourcePermissionsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsAddResourcePermissionsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkDocsAddResourcePermissionsRequest#Principals
   */
  readonly principals: WorkDocsSharePrincipal[];

  /**
   * @schema WorkDocsAddResourcePermissionsRequest#NotificationOptions
   */
  readonly notificationOptions?: WorkDocsNotificationOptions;

}

/**
 * @schema WorkDocsAddResourcePermissionsResponse
 */
export interface WorkDocsAddResourcePermissionsResponse {
  /**
   * @schema WorkDocsAddResourcePermissionsResponse#ShareResults
   */
  readonly shareResults?: WorkDocsShareResult[];

}

/**
 * @schema WorkDocsCreateCommentRequest
 */
export interface WorkDocsCreateCommentRequest {
  /**
   * @schema WorkDocsCreateCommentRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsCreateCommentRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema WorkDocsCreateCommentRequest#VersionId
   */
  readonly versionId: string;

  /**
   * @schema WorkDocsCreateCommentRequest#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema WorkDocsCreateCommentRequest#ThreadId
   */
  readonly threadId?: string;

  /**
   * @schema WorkDocsCreateCommentRequest#Text
   */
  readonly text: string;

  /**
   * @schema WorkDocsCreateCommentRequest#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema WorkDocsCreateCommentRequest#NotifyCollaborators
   */
  readonly notifyCollaborators?: boolean;

}

/**
 * @schema WorkDocsCreateCommentResponse
 */
export interface WorkDocsCreateCommentResponse {
  /**
   * @schema WorkDocsCreateCommentResponse#Comment
   */
  readonly comment?: WorkDocsComment;

}

/**
 * @schema WorkDocsCreateCustomMetadataRequest
 */
export interface WorkDocsCreateCustomMetadataRequest {
  /**
   * @schema WorkDocsCreateCustomMetadataRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsCreateCustomMetadataRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkDocsCreateCustomMetadataRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema WorkDocsCreateCustomMetadataRequest#CustomMetadata
   */
  readonly customMetadata: { [key: string]: string };

}

/**
 * @schema WorkDocsCreateCustomMetadataResponse
 */
export interface WorkDocsCreateCustomMetadataResponse {
}

/**
 * @schema WorkDocsCreateFolderRequest
 */
export interface WorkDocsCreateFolderRequest {
  /**
   * @schema WorkDocsCreateFolderRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsCreateFolderRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkDocsCreateFolderRequest#ParentFolderId
   */
  readonly parentFolderId: string;

}

/**
 * @schema WorkDocsCreateFolderResponse
 */
export interface WorkDocsCreateFolderResponse {
  /**
   * @schema WorkDocsCreateFolderResponse#Metadata
   */
  readonly metadata?: WorkDocsFolderMetadata;

}

/**
 * @schema WorkDocsCreateLabelsRequest
 */
export interface WorkDocsCreateLabelsRequest {
  /**
   * @schema WorkDocsCreateLabelsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkDocsCreateLabelsRequest#Labels
   */
  readonly labels: string[];

  /**
   * @schema WorkDocsCreateLabelsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * @schema WorkDocsCreateLabelsResponse
 */
export interface WorkDocsCreateLabelsResponse {
}

/**
 * @schema WorkDocsCreateNotificationSubscriptionRequest
 */
export interface WorkDocsCreateNotificationSubscriptionRequest {
  /**
   * @schema WorkDocsCreateNotificationSubscriptionRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkDocsCreateNotificationSubscriptionRequest#Endpoint
   */
  readonly endpoint: string;

  /**
   * @schema WorkDocsCreateNotificationSubscriptionRequest#Protocol
   */
  readonly protocol: string;

  /**
   * @schema WorkDocsCreateNotificationSubscriptionRequest#SubscriptionType
   */
  readonly subscriptionType: string;

}

/**
 * @schema WorkDocsCreateNotificationSubscriptionResponse
 */
export interface WorkDocsCreateNotificationSubscriptionResponse {
  /**
   * @schema WorkDocsCreateNotificationSubscriptionResponse#Subscription
   */
  readonly subscription?: WorkDocsSubscription;

}

/**
 * @schema WorkDocsCreateUserRequest
 */
export interface WorkDocsCreateUserRequest {
  /**
   * @schema WorkDocsCreateUserRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkDocsCreateUserRequest#Username
   */
  readonly username: string;

  /**
   * @schema WorkDocsCreateUserRequest#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema WorkDocsCreateUserRequest#GivenName
   */
  readonly givenName: string;

  /**
   * @schema WorkDocsCreateUserRequest#Surname
   */
  readonly surname: string;

  /**
   * @schema WorkDocsCreateUserRequest#Password
   */
  readonly password: string;

  /**
   * @schema WorkDocsCreateUserRequest#TimeZoneId
   */
  readonly timeZoneId?: string;

  /**
   * @schema WorkDocsCreateUserRequest#StorageRule
   */
  readonly storageRule?: WorkDocsStorageRuleType;

  /**
   * @schema WorkDocsCreateUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * @schema WorkDocsCreateUserResponse
 */
export interface WorkDocsCreateUserResponse {
  /**
   * @schema WorkDocsCreateUserResponse#User
   */
  readonly user?: WorkDocsUser;

}

/**
 * @schema WorkDocsDeactivateUserRequest
 */
export interface WorkDocsDeactivateUserRequest {
  /**
   * @schema WorkDocsDeactivateUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema WorkDocsDeactivateUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * @schema WorkDocsDeleteCommentRequest
 */
export interface WorkDocsDeleteCommentRequest {
  /**
   * @schema WorkDocsDeleteCommentRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDeleteCommentRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema WorkDocsDeleteCommentRequest#VersionId
   */
  readonly versionId: string;

  /**
   * @schema WorkDocsDeleteCommentRequest#CommentId
   */
  readonly commentId: string;

}

/**
 * @schema WorkDocsDeleteCustomMetadataRequest
 */
export interface WorkDocsDeleteCustomMetadataRequest {
  /**
   * @schema WorkDocsDeleteCustomMetadataRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDeleteCustomMetadataRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkDocsDeleteCustomMetadataRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema WorkDocsDeleteCustomMetadataRequest#Keys
   */
  readonly keys?: string[];

  /**
   * @schema WorkDocsDeleteCustomMetadataRequest#DeleteAll
   */
  readonly deleteAll?: boolean;

}

/**
 * @schema WorkDocsDeleteCustomMetadataResponse
 */
export interface WorkDocsDeleteCustomMetadataResponse {
}

/**
 * @schema WorkDocsDeleteDocumentRequest
 */
export interface WorkDocsDeleteDocumentRequest {
  /**
   * @schema WorkDocsDeleteDocumentRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDeleteDocumentRequest#DocumentId
   */
  readonly documentId: string;

}

/**
 * @schema WorkDocsDeleteFolderRequest
 */
export interface WorkDocsDeleteFolderRequest {
  /**
   * @schema WorkDocsDeleteFolderRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDeleteFolderRequest#FolderId
   */
  readonly folderId: string;

}

/**
 * @schema WorkDocsDeleteFolderContentsRequest
 */
export interface WorkDocsDeleteFolderContentsRequest {
  /**
   * @schema WorkDocsDeleteFolderContentsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDeleteFolderContentsRequest#FolderId
   */
  readonly folderId: string;

}

/**
 * @schema WorkDocsDeleteLabelsRequest
 */
export interface WorkDocsDeleteLabelsRequest {
  /**
   * @schema WorkDocsDeleteLabelsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkDocsDeleteLabelsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDeleteLabelsRequest#Labels
   */
  readonly labels?: string[];

  /**
   * @schema WorkDocsDeleteLabelsRequest#DeleteAll
   */
  readonly deleteAll?: boolean;

}

/**
 * @schema WorkDocsDeleteLabelsResponse
 */
export interface WorkDocsDeleteLabelsResponse {
}

/**
 * @schema WorkDocsDeleteNotificationSubscriptionRequest
 */
export interface WorkDocsDeleteNotificationSubscriptionRequest {
  /**
   * @schema WorkDocsDeleteNotificationSubscriptionRequest#SubscriptionId
   */
  readonly subscriptionId: string;

  /**
   * @schema WorkDocsDeleteNotificationSubscriptionRequest#OrganizationId
   */
  readonly organizationId: string;

}

/**
 * @schema WorkDocsDeleteUserRequest
 */
export interface WorkDocsDeleteUserRequest {
  /**
   * @schema WorkDocsDeleteUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDeleteUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema WorkDocsDescribeActivitiesRequest
 */
export interface WorkDocsDescribeActivitiesRequest {
  /**
   * @schema WorkDocsDescribeActivitiesRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDescribeActivitiesRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema WorkDocsDescribeActivitiesRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema WorkDocsDescribeActivitiesRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkDocsDescribeActivitiesRequest#ActivityTypes
   */
  readonly activityTypes?: string;

  /**
   * @schema WorkDocsDescribeActivitiesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkDocsDescribeActivitiesRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema WorkDocsDescribeActivitiesRequest#IncludeIndirectActivities
   */
  readonly includeIndirectActivities?: boolean;

  /**
   * @schema WorkDocsDescribeActivitiesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkDocsDescribeActivitiesRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeActivitiesResponse
 */
export interface WorkDocsDescribeActivitiesResponse {
  /**
   * @schema WorkDocsDescribeActivitiesResponse#UserActivities
   */
  readonly userActivities?: WorkDocsActivity[];

  /**
   * @schema WorkDocsDescribeActivitiesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeCommentsRequest
 */
export interface WorkDocsDescribeCommentsRequest {
  /**
   * @schema WorkDocsDescribeCommentsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDescribeCommentsRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema WorkDocsDescribeCommentsRequest#VersionId
   */
  readonly versionId: string;

  /**
   * @schema WorkDocsDescribeCommentsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkDocsDescribeCommentsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeCommentsResponse
 */
export interface WorkDocsDescribeCommentsResponse {
  /**
   * @schema WorkDocsDescribeCommentsResponse#Comments
   */
  readonly comments?: WorkDocsComment[];

  /**
   * @schema WorkDocsDescribeCommentsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeDocumentVersionsRequest
 */
export interface WorkDocsDescribeDocumentVersionsRequest {
  /**
   * @schema WorkDocsDescribeDocumentVersionsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDescribeDocumentVersionsRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema WorkDocsDescribeDocumentVersionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema WorkDocsDescribeDocumentVersionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkDocsDescribeDocumentVersionsRequest#Include
   */
  readonly include?: string;

  /**
   * @schema WorkDocsDescribeDocumentVersionsRequest#Fields
   */
  readonly fields?: string;

}

/**
 * @schema WorkDocsDescribeDocumentVersionsResponse
 */
export interface WorkDocsDescribeDocumentVersionsResponse {
  /**
   * @schema WorkDocsDescribeDocumentVersionsResponse#DocumentVersions
   */
  readonly documentVersions?: WorkDocsDocumentVersionMetadata[];

  /**
   * @schema WorkDocsDescribeDocumentVersionsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeFolderContentsRequest
 */
export interface WorkDocsDescribeFolderContentsRequest {
  /**
   * @schema WorkDocsDescribeFolderContentsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDescribeFolderContentsRequest#FolderId
   */
  readonly folderId: string;

  /**
   * @schema WorkDocsDescribeFolderContentsRequest#Sort
   */
  readonly sort?: string;

  /**
   * @schema WorkDocsDescribeFolderContentsRequest#Order
   */
  readonly order?: string;

  /**
   * @schema WorkDocsDescribeFolderContentsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkDocsDescribeFolderContentsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema WorkDocsDescribeFolderContentsRequest#Type
   */
  readonly type?: string;

  /**
   * @schema WorkDocsDescribeFolderContentsRequest#Include
   */
  readonly include?: string;

}

/**
 * @schema WorkDocsDescribeFolderContentsResponse
 */
export interface WorkDocsDescribeFolderContentsResponse {
  /**
   * @schema WorkDocsDescribeFolderContentsResponse#Folders
   */
  readonly folders?: WorkDocsFolderMetadata[];

  /**
   * @schema WorkDocsDescribeFolderContentsResponse#Documents
   */
  readonly documents?: WorkDocsDocumentMetadata[];

  /**
   * @schema WorkDocsDescribeFolderContentsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeGroupsRequest
 */
export interface WorkDocsDescribeGroupsRequest {
  /**
   * @schema WorkDocsDescribeGroupsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDescribeGroupsRequest#SearchQuery
   */
  readonly searchQuery: string;

  /**
   * @schema WorkDocsDescribeGroupsRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkDocsDescribeGroupsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema WorkDocsDescribeGroupsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema WorkDocsDescribeGroupsResponse
 */
export interface WorkDocsDescribeGroupsResponse {
  /**
   * @schema WorkDocsDescribeGroupsResponse#Groups
   */
  readonly groups?: WorkDocsGroupMetadata[];

  /**
   * @schema WorkDocsDescribeGroupsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeNotificationSubscriptionsRequest
 */
export interface WorkDocsDescribeNotificationSubscriptionsRequest {
  /**
   * @schema WorkDocsDescribeNotificationSubscriptionsRequest#OrganizationId
   */
  readonly organizationId: string;

  /**
   * @schema WorkDocsDescribeNotificationSubscriptionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema WorkDocsDescribeNotificationSubscriptionsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema WorkDocsDescribeNotificationSubscriptionsResponse
 */
export interface WorkDocsDescribeNotificationSubscriptionsResponse {
  /**
   * @schema WorkDocsDescribeNotificationSubscriptionsResponse#Subscriptions
   */
  readonly subscriptions?: WorkDocsSubscription[];

  /**
   * @schema WorkDocsDescribeNotificationSubscriptionsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeResourcePermissionsRequest
 */
export interface WorkDocsDescribeResourcePermissionsRequest {
  /**
   * @schema WorkDocsDescribeResourcePermissionsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDescribeResourcePermissionsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkDocsDescribeResourcePermissionsRequest#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema WorkDocsDescribeResourcePermissionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkDocsDescribeResourcePermissionsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeResourcePermissionsResponse
 */
export interface WorkDocsDescribeResourcePermissionsResponse {
  /**
   * @schema WorkDocsDescribeResourcePermissionsResponse#Principals
   */
  readonly principals?: WorkDocsPrincipal[];

  /**
   * @schema WorkDocsDescribeResourcePermissionsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeRootFoldersRequest
 */
export interface WorkDocsDescribeRootFoldersRequest {
  /**
   * @schema WorkDocsDescribeRootFoldersRequest#AuthenticationToken
   */
  readonly authenticationToken: string;

  /**
   * @schema WorkDocsDescribeRootFoldersRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkDocsDescribeRootFoldersRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeRootFoldersResponse
 */
export interface WorkDocsDescribeRootFoldersResponse {
  /**
   * @schema WorkDocsDescribeRootFoldersResponse#Folders
   */
  readonly folders?: WorkDocsFolderMetadata[];

  /**
   * @schema WorkDocsDescribeRootFoldersResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsDescribeUsersRequest
 */
export interface WorkDocsDescribeUsersRequest {
  /**
   * @schema WorkDocsDescribeUsersRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsDescribeUsersRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkDocsDescribeUsersRequest#UserIds
   */
  readonly userIds?: string;

  /**
   * @schema WorkDocsDescribeUsersRequest#Query
   */
  readonly query?: string;

  /**
   * @schema WorkDocsDescribeUsersRequest#Include
   */
  readonly include?: string;

  /**
   * @schema WorkDocsDescribeUsersRequest#Order
   */
  readonly order?: string;

  /**
   * @schema WorkDocsDescribeUsersRequest#Sort
   */
  readonly sort?: string;

  /**
   * @schema WorkDocsDescribeUsersRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema WorkDocsDescribeUsersRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkDocsDescribeUsersRequest#Fields
   */
  readonly fields?: string;

}

/**
 * @schema WorkDocsDescribeUsersResponse
 */
export interface WorkDocsDescribeUsersResponse {
  /**
   * @schema WorkDocsDescribeUsersResponse#Users
   */
  readonly users?: WorkDocsUser[];

  /**
   * @schema WorkDocsDescribeUsersResponse#TotalNumberOfUsers
   */
  readonly totalNumberOfUsers?: number;

  /**
   * @schema WorkDocsDescribeUsersResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsGetCurrentUserRequest
 */
export interface WorkDocsGetCurrentUserRequest {
  /**
   * @schema WorkDocsGetCurrentUserRequest#AuthenticationToken
   */
  readonly authenticationToken: string;

}

/**
 * @schema WorkDocsGetCurrentUserResponse
 */
export interface WorkDocsGetCurrentUserResponse {
  /**
   * @schema WorkDocsGetCurrentUserResponse#User
   */
  readonly user?: WorkDocsUser;

}

/**
 * @schema WorkDocsGetDocumentRequest
 */
export interface WorkDocsGetDocumentRequest {
  /**
   * @schema WorkDocsGetDocumentRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsGetDocumentRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema WorkDocsGetDocumentRequest#IncludeCustomMetadata
   */
  readonly includeCustomMetadata?: boolean;

}

/**
 * @schema WorkDocsGetDocumentResponse
 */
export interface WorkDocsGetDocumentResponse {
  /**
   * @schema WorkDocsGetDocumentResponse#Metadata
   */
  readonly metadata?: WorkDocsDocumentMetadata;

  /**
   * @schema WorkDocsGetDocumentResponse#CustomMetadata
   */
  readonly customMetadata?: { [key: string]: string };

}

/**
 * @schema WorkDocsGetDocumentPathRequest
 */
export interface WorkDocsGetDocumentPathRequest {
  /**
   * @schema WorkDocsGetDocumentPathRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsGetDocumentPathRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema WorkDocsGetDocumentPathRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkDocsGetDocumentPathRequest#Fields
   */
  readonly fields?: string;

  /**
   * @schema WorkDocsGetDocumentPathRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsGetDocumentPathResponse
 */
export interface WorkDocsGetDocumentPathResponse {
  /**
   * @schema WorkDocsGetDocumentPathResponse#Path
   */
  readonly path?: WorkDocsResourcePath;

}

/**
 * @schema WorkDocsGetDocumentVersionRequest
 */
export interface WorkDocsGetDocumentVersionRequest {
  /**
   * @schema WorkDocsGetDocumentVersionRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsGetDocumentVersionRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema WorkDocsGetDocumentVersionRequest#VersionId
   */
  readonly versionId: string;

  /**
   * @schema WorkDocsGetDocumentVersionRequest#Fields
   */
  readonly fields?: string;

  /**
   * @schema WorkDocsGetDocumentVersionRequest#IncludeCustomMetadata
   */
  readonly includeCustomMetadata?: boolean;

}

/**
 * @schema WorkDocsGetDocumentVersionResponse
 */
export interface WorkDocsGetDocumentVersionResponse {
  /**
   * @schema WorkDocsGetDocumentVersionResponse#Metadata
   */
  readonly metadata?: WorkDocsDocumentVersionMetadata;

  /**
   * @schema WorkDocsGetDocumentVersionResponse#CustomMetadata
   */
  readonly customMetadata?: { [key: string]: string };

}

/**
 * @schema WorkDocsGetFolderRequest
 */
export interface WorkDocsGetFolderRequest {
  /**
   * @schema WorkDocsGetFolderRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsGetFolderRequest#FolderId
   */
  readonly folderId: string;

  /**
   * @schema WorkDocsGetFolderRequest#IncludeCustomMetadata
   */
  readonly includeCustomMetadata?: boolean;

}

/**
 * @schema WorkDocsGetFolderResponse
 */
export interface WorkDocsGetFolderResponse {
  /**
   * @schema WorkDocsGetFolderResponse#Metadata
   */
  readonly metadata?: WorkDocsFolderMetadata;

  /**
   * @schema WorkDocsGetFolderResponse#CustomMetadata
   */
  readonly customMetadata?: { [key: string]: string };

}

/**
 * @schema WorkDocsGetFolderPathRequest
 */
export interface WorkDocsGetFolderPathRequest {
  /**
   * @schema WorkDocsGetFolderPathRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsGetFolderPathRequest#FolderId
   */
  readonly folderId: string;

  /**
   * @schema WorkDocsGetFolderPathRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkDocsGetFolderPathRequest#Fields
   */
  readonly fields?: string;

  /**
   * @schema WorkDocsGetFolderPathRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsGetFolderPathResponse
 */
export interface WorkDocsGetFolderPathResponse {
  /**
   * @schema WorkDocsGetFolderPathResponse#Path
   */
  readonly path?: WorkDocsResourcePath;

}

/**
 * @schema WorkDocsGetResourcesRequest
 */
export interface WorkDocsGetResourcesRequest {
  /**
   * @schema WorkDocsGetResourcesRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsGetResourcesRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema WorkDocsGetResourcesRequest#CollectionType
   */
  readonly collectionType?: string;

  /**
   * @schema WorkDocsGetResourcesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkDocsGetResourcesRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsGetResourcesResponse
 */
export interface WorkDocsGetResourcesResponse {
  /**
   * @schema WorkDocsGetResourcesResponse#Folders
   */
  readonly folders?: WorkDocsFolderMetadata[];

  /**
   * @schema WorkDocsGetResourcesResponse#Documents
   */
  readonly documents?: WorkDocsDocumentMetadata[];

  /**
   * @schema WorkDocsGetResourcesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema WorkDocsInitiateDocumentVersionUploadRequest
 */
export interface WorkDocsInitiateDocumentVersionUploadRequest {
  /**
   * @schema WorkDocsInitiateDocumentVersionUploadRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsInitiateDocumentVersionUploadRequest#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsInitiateDocumentVersionUploadRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkDocsInitiateDocumentVersionUploadRequest#ContentCreatedTimestamp
   */
  readonly contentCreatedTimestamp?: string;

  /**
   * @schema WorkDocsInitiateDocumentVersionUploadRequest#ContentModifiedTimestamp
   */
  readonly contentModifiedTimestamp?: string;

  /**
   * @schema WorkDocsInitiateDocumentVersionUploadRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema WorkDocsInitiateDocumentVersionUploadRequest#DocumentSizeInBytes
   */
  readonly documentSizeInBytes?: number;

  /**
   * @schema WorkDocsInitiateDocumentVersionUploadRequest#ParentFolderId
   */
  readonly parentFolderId: string;

}

/**
 * @schema WorkDocsInitiateDocumentVersionUploadResponse
 */
export interface WorkDocsInitiateDocumentVersionUploadResponse {
  /**
   * @schema WorkDocsInitiateDocumentVersionUploadResponse#Metadata
   */
  readonly metadata?: WorkDocsDocumentMetadata;

  /**
   * @schema WorkDocsInitiateDocumentVersionUploadResponse#UploadMetadata
   */
  readonly uploadMetadata?: WorkDocsUploadMetadata;

}

/**
 * @schema WorkDocsRemoveAllResourcePermissionsRequest
 */
export interface WorkDocsRemoveAllResourcePermissionsRequest {
  /**
   * @schema WorkDocsRemoveAllResourcePermissionsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsRemoveAllResourcePermissionsRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema WorkDocsRemoveResourcePermissionRequest
 */
export interface WorkDocsRemoveResourcePermissionRequest {
  /**
   * @schema WorkDocsRemoveResourcePermissionRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsRemoveResourcePermissionRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema WorkDocsRemoveResourcePermissionRequest#PrincipalId
   */
  readonly principalId: string;

  /**
   * @schema WorkDocsRemoveResourcePermissionRequest#PrincipalType
   */
  readonly principalType?: string;

}

/**
 * @schema WorkDocsUpdateDocumentRequest
 */
export interface WorkDocsUpdateDocumentRequest {
  /**
   * @schema WorkDocsUpdateDocumentRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsUpdateDocumentRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema WorkDocsUpdateDocumentRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkDocsUpdateDocumentRequest#ParentFolderId
   */
  readonly parentFolderId?: string;

  /**
   * @schema WorkDocsUpdateDocumentRequest#ResourceState
   */
  readonly resourceState?: string;

}

/**
 * @schema WorkDocsUpdateDocumentVersionRequest
 */
export interface WorkDocsUpdateDocumentVersionRequest {
  /**
   * @schema WorkDocsUpdateDocumentVersionRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsUpdateDocumentVersionRequest#DocumentId
   */
  readonly documentId: string;

  /**
   * @schema WorkDocsUpdateDocumentVersionRequest#VersionId
   */
  readonly versionId: string;

  /**
   * @schema WorkDocsUpdateDocumentVersionRequest#VersionStatus
   */
  readonly versionStatus?: string;

}

/**
 * @schema WorkDocsUpdateFolderRequest
 */
export interface WorkDocsUpdateFolderRequest {
  /**
   * @schema WorkDocsUpdateFolderRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsUpdateFolderRequest#FolderId
   */
  readonly folderId: string;

  /**
   * @schema WorkDocsUpdateFolderRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkDocsUpdateFolderRequest#ParentFolderId
   */
  readonly parentFolderId?: string;

  /**
   * @schema WorkDocsUpdateFolderRequest#ResourceState
   */
  readonly resourceState?: string;

}

/**
 * @schema WorkDocsUpdateUserRequest
 */
export interface WorkDocsUpdateUserRequest {
  /**
   * @schema WorkDocsUpdateUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

  /**
   * @schema WorkDocsUpdateUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema WorkDocsUpdateUserRequest#GivenName
   */
  readonly givenName?: string;

  /**
   * @schema WorkDocsUpdateUserRequest#Surname
   */
  readonly surname?: string;

  /**
   * @schema WorkDocsUpdateUserRequest#Type
   */
  readonly type?: string;

  /**
   * @schema WorkDocsUpdateUserRequest#StorageRule
   */
  readonly storageRule?: WorkDocsStorageRuleType;

  /**
   * @schema WorkDocsUpdateUserRequest#TimeZoneId
   */
  readonly timeZoneId?: string;

  /**
   * @schema WorkDocsUpdateUserRequest#Locale
   */
  readonly locale?: string;

  /**
   * @schema WorkDocsUpdateUserRequest#GrantPoweruserPrivileges
   */
  readonly grantPoweruserPrivileges?: string;

}

/**
 * @schema WorkDocsUpdateUserResponse
 */
export interface WorkDocsUpdateUserResponse {
  /**
   * @schema WorkDocsUpdateUserResponse#User
   */
  readonly user?: WorkDocsUser;

}

/**
 * @schema WorkDocsUser
 */
export interface WorkDocsUser {
  /**
   * @schema WorkDocsUser#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsUser#Username
   */
  readonly username?: string;

  /**
   * @schema WorkDocsUser#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema WorkDocsUser#GivenName
   */
  readonly givenName?: string;

  /**
   * @schema WorkDocsUser#Surname
   */
  readonly surname?: string;

  /**
   * @schema WorkDocsUser#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkDocsUser#RootFolderId
   */
  readonly rootFolderId?: string;

  /**
   * @schema WorkDocsUser#RecycleBinFolderId
   */
  readonly recycleBinFolderId?: string;

  /**
   * @schema WorkDocsUser#Status
   */
  readonly status?: string;

  /**
   * @schema WorkDocsUser#Type
   */
  readonly type?: string;

  /**
   * @schema WorkDocsUser#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema WorkDocsUser#ModifiedTimestamp
   */
  readonly modifiedTimestamp?: string;

  /**
   * @schema WorkDocsUser#TimeZoneId
   */
  readonly timeZoneId?: string;

  /**
   * @schema WorkDocsUser#Locale
   */
  readonly locale?: string;

  /**
   * @schema WorkDocsUser#Storage
   */
  readonly storage?: WorkDocsUserStorageMetadata;

}

/**
 * @schema WorkDocsSharePrincipal
 */
export interface WorkDocsSharePrincipal {
  /**
   * @schema WorkDocsSharePrincipal#Id
   */
  readonly id: string;

  /**
   * @schema WorkDocsSharePrincipal#Type
   */
  readonly type: string;

  /**
   * @schema WorkDocsSharePrincipal#Role
   */
  readonly role: string;

}

/**
 * @schema WorkDocsNotificationOptions
 */
export interface WorkDocsNotificationOptions {
  /**
   * @schema WorkDocsNotificationOptions#SendEmail
   */
  readonly sendEmail?: boolean;

  /**
   * @schema WorkDocsNotificationOptions#EmailMessage
   */
  readonly emailMessage?: string;

}

/**
 * @schema WorkDocsShareResult
 */
export interface WorkDocsShareResult {
  /**
   * @schema WorkDocsShareResult#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema WorkDocsShareResult#InviteePrincipalId
   */
  readonly inviteePrincipalId?: string;

  /**
   * @schema WorkDocsShareResult#Role
   */
  readonly role?: string;

  /**
   * @schema WorkDocsShareResult#Status
   */
  readonly status?: string;

  /**
   * @schema WorkDocsShareResult#ShareId
   */
  readonly shareId?: string;

  /**
   * @schema WorkDocsShareResult#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema WorkDocsComment
 */
export interface WorkDocsComment {
  /**
   * @schema WorkDocsComment#CommentId
   */
  readonly commentId: string;

  /**
   * @schema WorkDocsComment#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema WorkDocsComment#ThreadId
   */
  readonly threadId?: string;

  /**
   * @schema WorkDocsComment#Text
   */
  readonly text?: string;

  /**
   * @schema WorkDocsComment#Contributor
   */
  readonly contributor?: WorkDocsUser;

  /**
   * @schema WorkDocsComment#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema WorkDocsComment#Status
   */
  readonly status?: string;

  /**
   * @schema WorkDocsComment#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema WorkDocsComment#RecipientId
   */
  readonly recipientId?: string;

}

/**
 * @schema WorkDocsFolderMetadata
 */
export interface WorkDocsFolderMetadata {
  /**
   * @schema WorkDocsFolderMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsFolderMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema WorkDocsFolderMetadata#CreatorId
   */
  readonly creatorId?: string;

  /**
   * @schema WorkDocsFolderMetadata#ParentFolderId
   */
  readonly parentFolderId?: string;

  /**
   * @schema WorkDocsFolderMetadata#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema WorkDocsFolderMetadata#ModifiedTimestamp
   */
  readonly modifiedTimestamp?: string;

  /**
   * @schema WorkDocsFolderMetadata#ResourceState
   */
  readonly resourceState?: string;

  /**
   * @schema WorkDocsFolderMetadata#Signature
   */
  readonly signature?: string;

  /**
   * @schema WorkDocsFolderMetadata#Labels
   */
  readonly labels?: string[];

  /**
   * @schema WorkDocsFolderMetadata#Size
   */
  readonly size?: number;

  /**
   * @schema WorkDocsFolderMetadata#LatestVersionSize
   */
  readonly latestVersionSize?: number;

}

/**
 * @schema WorkDocsSubscription
 */
export interface WorkDocsSubscription {
  /**
   * @schema WorkDocsSubscription#SubscriptionId
   */
  readonly subscriptionId?: string;

  /**
   * @schema WorkDocsSubscription#EndPoint
   */
  readonly endPoint?: string;

  /**
   * @schema WorkDocsSubscription#Protocol
   */
  readonly protocol?: string;

}

/**
 * @schema WorkDocsStorageRuleType
 */
export interface WorkDocsStorageRuleType {
  /**
   * @schema WorkDocsStorageRuleType#StorageAllocatedInBytes
   */
  readonly storageAllocatedInBytes?: number;

  /**
   * @schema WorkDocsStorageRuleType#StorageType
   */
  readonly storageType?: string;

}

/**
 * @schema WorkDocsActivity
 */
export interface WorkDocsActivity {
  /**
   * @schema WorkDocsActivity#Type
   */
  readonly type?: string;

  /**
   * @schema WorkDocsActivity#TimeStamp
   */
  readonly timeStamp?: string;

  /**
   * @schema WorkDocsActivity#IsIndirectActivity
   */
  readonly isIndirectActivity?: boolean;

  /**
   * @schema WorkDocsActivity#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkDocsActivity#Initiator
   */
  readonly initiator?: WorkDocsUserMetadata;

  /**
   * @schema WorkDocsActivity#Participants
   */
  readonly participants?: WorkDocsParticipants;

  /**
   * @schema WorkDocsActivity#ResourceMetadata
   */
  readonly resourceMetadata?: WorkDocsResourceMetadata;

  /**
   * @schema WorkDocsActivity#OriginalParent
   */
  readonly originalParent?: WorkDocsResourceMetadata;

  /**
   * @schema WorkDocsActivity#CommentMetadata
   */
  readonly commentMetadata?: WorkDocsCommentMetadata;

}

/**
 * @schema WorkDocsDocumentVersionMetadata
 */
export interface WorkDocsDocumentVersionMetadata {
  /**
   * @schema WorkDocsDocumentVersionMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsDocumentVersionMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema WorkDocsDocumentVersionMetadata#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema WorkDocsDocumentVersionMetadata#Size
   */
  readonly size?: number;

  /**
   * @schema WorkDocsDocumentVersionMetadata#Signature
   */
  readonly signature?: string;

  /**
   * @schema WorkDocsDocumentVersionMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema WorkDocsDocumentVersionMetadata#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema WorkDocsDocumentVersionMetadata#ModifiedTimestamp
   */
  readonly modifiedTimestamp?: string;

  /**
   * @schema WorkDocsDocumentVersionMetadata#ContentCreatedTimestamp
   */
  readonly contentCreatedTimestamp?: string;

  /**
   * @schema WorkDocsDocumentVersionMetadata#ContentModifiedTimestamp
   */
  readonly contentModifiedTimestamp?: string;

  /**
   * @schema WorkDocsDocumentVersionMetadata#CreatorId
   */
  readonly creatorId?: string;

  /**
   * @schema WorkDocsDocumentVersionMetadata#Thumbnail
   */
  readonly thumbnail?: { [key: string]: string };

  /**
   * @schema WorkDocsDocumentVersionMetadata#Source
   */
  readonly source?: { [key: string]: string };

}

/**
 * @schema WorkDocsDocumentMetadata
 */
export interface WorkDocsDocumentMetadata {
  /**
   * @schema WorkDocsDocumentMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsDocumentMetadata#CreatorId
   */
  readonly creatorId?: string;

  /**
   * @schema WorkDocsDocumentMetadata#ParentFolderId
   */
  readonly parentFolderId?: string;

  /**
   * @schema WorkDocsDocumentMetadata#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema WorkDocsDocumentMetadata#ModifiedTimestamp
   */
  readonly modifiedTimestamp?: string;

  /**
   * @schema WorkDocsDocumentMetadata#LatestVersionMetadata
   */
  readonly latestVersionMetadata?: WorkDocsDocumentVersionMetadata;

  /**
   * @schema WorkDocsDocumentMetadata#ResourceState
   */
  readonly resourceState?: string;

  /**
   * @schema WorkDocsDocumentMetadata#Labels
   */
  readonly labels?: string[];

}

/**
 * @schema WorkDocsGroupMetadata
 */
export interface WorkDocsGroupMetadata {
  /**
   * @schema WorkDocsGroupMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsGroupMetadata#Name
   */
  readonly name?: string;

}

/**
 * @schema WorkDocsPrincipal
 */
export interface WorkDocsPrincipal {
  /**
   * @schema WorkDocsPrincipal#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsPrincipal#Type
   */
  readonly type?: string;

  /**
   * @schema WorkDocsPrincipal#Roles
   */
  readonly roles?: WorkDocsPermissionInfo[];

}

/**
 * @schema WorkDocsResourcePath
 */
export interface WorkDocsResourcePath {
  /**
   * @schema WorkDocsResourcePath#Components
   */
  readonly components?: WorkDocsResourcePathComponent[];

}

/**
 * @schema WorkDocsUploadMetadata
 */
export interface WorkDocsUploadMetadata {
  /**
   * @schema WorkDocsUploadMetadata#UploadUrl
   */
  readonly uploadUrl?: string;

  /**
   * @schema WorkDocsUploadMetadata#SignedHeaders
   */
  readonly signedHeaders?: { [key: string]: string };

}

/**
 * @schema WorkDocsUserStorageMetadata
 */
export interface WorkDocsUserStorageMetadata {
  /**
   * @schema WorkDocsUserStorageMetadata#StorageUtilizedInBytes
   */
  readonly storageUtilizedInBytes?: number;

  /**
   * @schema WorkDocsUserStorageMetadata#StorageRule
   */
  readonly storageRule?: WorkDocsStorageRuleType;

}

/**
 * @schema WorkDocsUserMetadata
 */
export interface WorkDocsUserMetadata {
  /**
   * @schema WorkDocsUserMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsUserMetadata#Username
   */
  readonly username?: string;

  /**
   * @schema WorkDocsUserMetadata#GivenName
   */
  readonly givenName?: string;

  /**
   * @schema WorkDocsUserMetadata#Surname
   */
  readonly surname?: string;

  /**
   * @schema WorkDocsUserMetadata#EmailAddress
   */
  readonly emailAddress?: string;

}

/**
 * @schema WorkDocsParticipants
 */
export interface WorkDocsParticipants {
  /**
   * @schema WorkDocsParticipants#Users
   */
  readonly users?: WorkDocsUserMetadata[];

  /**
   * @schema WorkDocsParticipants#Groups
   */
  readonly groups?: WorkDocsGroupMetadata[];

}

/**
 * @schema WorkDocsResourceMetadata
 */
export interface WorkDocsResourceMetadata {
  /**
   * @schema WorkDocsResourceMetadata#Type
   */
  readonly type?: string;

  /**
   * @schema WorkDocsResourceMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema WorkDocsResourceMetadata#OriginalName
   */
  readonly originalName?: string;

  /**
   * @schema WorkDocsResourceMetadata#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsResourceMetadata#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema WorkDocsResourceMetadata#Owner
   */
  readonly owner?: WorkDocsUserMetadata;

  /**
   * @schema WorkDocsResourceMetadata#ParentId
   */
  readonly parentId?: string;

}

/**
 * @schema WorkDocsCommentMetadata
 */
export interface WorkDocsCommentMetadata {
  /**
   * @schema WorkDocsCommentMetadata#CommentId
   */
  readonly commentId?: string;

  /**
   * @schema WorkDocsCommentMetadata#Contributor
   */
  readonly contributor?: WorkDocsUser;

  /**
   * @schema WorkDocsCommentMetadata#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema WorkDocsCommentMetadata#CommentStatus
   */
  readonly commentStatus?: string;

  /**
   * @schema WorkDocsCommentMetadata#RecipientId
   */
  readonly recipientId?: string;

}

/**
 * @schema WorkDocsPermissionInfo
 */
export interface WorkDocsPermissionInfo {
  /**
   * @schema WorkDocsPermissionInfo#Role
   */
  readonly role?: string;

  /**
   * @schema WorkDocsPermissionInfo#Type
   */
  readonly type?: string;

}

/**
 * @schema WorkDocsResourcePathComponent
 */
export interface WorkDocsResourcePathComponent {
  /**
   * @schema WorkDocsResourcePathComponent#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsResourcePathComponent#Name
   */
  readonly name?: string;

}
