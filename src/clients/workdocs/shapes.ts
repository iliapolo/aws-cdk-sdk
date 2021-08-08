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
  readonly documentId?: string;

  /**
   * @schema WorkDocsAbortDocumentVersionUploadRequest#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'WorkDocsAbortDocumentVersionUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsAbortDocumentVersionUploadRequest(obj: WorkDocsAbortDocumentVersionUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsActivateUserRequest
 */
export interface WorkDocsActivateUserRequest {
  /**
   * @schema WorkDocsActivateUserRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema WorkDocsActivateUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * Converts an object of type 'WorkDocsActivateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsActivateUserRequest(obj: WorkDocsActivateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'AuthenticationToken': obj.authenticationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsActivateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsActivateUserResponse(obj: WorkDocsActivateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_WorkDocsUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly resourceId?: string;

  /**
   * @schema WorkDocsAddResourcePermissionsRequest#Principals
   */
  readonly principals?: WorkDocsSharePrincipal[];

  /**
   * @schema WorkDocsAddResourcePermissionsRequest#NotificationOptions
   */
  readonly notificationOptions?: WorkDocsNotificationOptions;

}

/**
 * Converts an object of type 'WorkDocsAddResourcePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsAddResourcePermissionsRequest(obj: WorkDocsAddResourcePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'ResourceId': obj.resourceId,
    'Principals': obj.principals?.map(y => toJson_WorkDocsSharePrincipal(y)),
    'NotificationOptions': toJson_WorkDocsNotificationOptions(obj.notificationOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsAddResourcePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsAddResourcePermissionsResponse(obj: WorkDocsAddResourcePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShareResults': obj.shareResults?.map(y => toJson_WorkDocsShareResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly documentId?: string;

  /**
   * @schema WorkDocsCreateCommentRequest#VersionId
   */
  readonly versionId?: string;

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
  readonly text?: string;

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
 * Converts an object of type 'WorkDocsCreateCommentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateCommentRequest(obj: WorkDocsCreateCommentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
    'VersionId': obj.versionId,
    'ParentId': obj.parentId,
    'ThreadId': obj.threadId,
    'Text': obj.text,
    'Visibility': obj.visibility,
    'NotifyCollaborators': obj.notifyCollaborators,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsCreateCommentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateCommentResponse(obj: WorkDocsCreateCommentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comment': toJson_WorkDocsComment(obj.comment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly resourceId?: string;

  /**
   * @schema WorkDocsCreateCustomMetadataRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema WorkDocsCreateCustomMetadataRequest#CustomMetadata
   */
  readonly customMetadata?: { [key: string]: string };

}

/**
 * Converts an object of type 'WorkDocsCreateCustomMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateCustomMetadataRequest(obj: WorkDocsCreateCustomMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'ResourceId': obj.resourceId,
    'VersionId': obj.versionId,
    'CustomMetadata': ((obj.customMetadata) === undefined) ? undefined : (Object.entries(obj.customMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsCreateCustomMetadataResponse
 */
export interface WorkDocsCreateCustomMetadataResponse {
}

/**
 * Converts an object of type 'WorkDocsCreateCustomMetadataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateCustomMetadataResponse(obj: WorkDocsCreateCustomMetadataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly parentFolderId?: string;

}

/**
 * Converts an object of type 'WorkDocsCreateFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateFolderRequest(obj: WorkDocsCreateFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'Name': obj.name,
    'ParentFolderId': obj.parentFolderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsCreateFolderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateFolderResponse(obj: WorkDocsCreateFolderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metadata': toJson_WorkDocsFolderMetadata(obj.metadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsCreateLabelsRequest
 */
export interface WorkDocsCreateLabelsRequest {
  /**
   * @schema WorkDocsCreateLabelsRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkDocsCreateLabelsRequest#Labels
   */
  readonly labels?: string[];

  /**
   * @schema WorkDocsCreateLabelsRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * Converts an object of type 'WorkDocsCreateLabelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateLabelsRequest(obj: WorkDocsCreateLabelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'Labels': obj.labels?.map(y => y),
    'AuthenticationToken': obj.authenticationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsCreateLabelsResponse
 */
export interface WorkDocsCreateLabelsResponse {
}

/**
 * Converts an object of type 'WorkDocsCreateLabelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateLabelsResponse(obj: WorkDocsCreateLabelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsCreateNotificationSubscriptionRequest
 */
export interface WorkDocsCreateNotificationSubscriptionRequest {
  /**
   * @schema WorkDocsCreateNotificationSubscriptionRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkDocsCreateNotificationSubscriptionRequest#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema WorkDocsCreateNotificationSubscriptionRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema WorkDocsCreateNotificationSubscriptionRequest#SubscriptionType
   */
  readonly subscriptionType?: string;

}

/**
 * Converts an object of type 'WorkDocsCreateNotificationSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateNotificationSubscriptionRequest(obj: WorkDocsCreateNotificationSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Endpoint': obj.endpoint,
    'Protocol': obj.protocol,
    'SubscriptionType': obj.subscriptionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsCreateNotificationSubscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateNotificationSubscriptionResponse(obj: WorkDocsCreateNotificationSubscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subscription': toJson_WorkDocsSubscription(obj.subscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly username?: string;

  /**
   * @schema WorkDocsCreateUserRequest#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema WorkDocsCreateUserRequest#GivenName
   */
  readonly givenName?: string;

  /**
   * @schema WorkDocsCreateUserRequest#Surname
   */
  readonly surname?: string;

  /**
   * @schema WorkDocsCreateUserRequest#Password
   */
  readonly password?: string;

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
 * Converts an object of type 'WorkDocsCreateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateUserRequest(obj: WorkDocsCreateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Username': obj.username,
    'EmailAddress': obj.emailAddress,
    'GivenName': obj.givenName,
    'Surname': obj.surname,
    'Password': obj.password,
    'TimeZoneId': obj.timeZoneId,
    'StorageRule': toJson_WorkDocsStorageRuleType(obj.storageRule),
    'AuthenticationToken': obj.authenticationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsCreateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCreateUserResponse(obj: WorkDocsCreateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_WorkDocsUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsDeactivateUserRequest
 */
export interface WorkDocsDeactivateUserRequest {
  /**
   * @schema WorkDocsDeactivateUserRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema WorkDocsDeactivateUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * Converts an object of type 'WorkDocsDeactivateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeactivateUserRequest(obj: WorkDocsDeactivateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'AuthenticationToken': obj.authenticationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly documentId?: string;

  /**
   * @schema WorkDocsDeleteCommentRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema WorkDocsDeleteCommentRequest#CommentId
   */
  readonly commentId?: string;

}

/**
 * Converts an object of type 'WorkDocsDeleteCommentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeleteCommentRequest(obj: WorkDocsDeleteCommentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
    'VersionId': obj.versionId,
    'CommentId': obj.commentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly resourceId?: string;

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
 * Converts an object of type 'WorkDocsDeleteCustomMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeleteCustomMetadataRequest(obj: WorkDocsDeleteCustomMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'ResourceId': obj.resourceId,
    'VersionId': obj.versionId,
    'Keys': obj.keys?.map(y => y),
    'DeleteAll': obj.deleteAll,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsDeleteCustomMetadataResponse
 */
export interface WorkDocsDeleteCustomMetadataResponse {
}

/**
 * Converts an object of type 'WorkDocsDeleteCustomMetadataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeleteCustomMetadataResponse(obj: WorkDocsDeleteCustomMetadataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly documentId?: string;

}

/**
 * Converts an object of type 'WorkDocsDeleteDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeleteDocumentRequest(obj: WorkDocsDeleteDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly folderId?: string;

}

/**
 * Converts an object of type 'WorkDocsDeleteFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeleteFolderRequest(obj: WorkDocsDeleteFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'FolderId': obj.folderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly folderId?: string;

}

/**
 * Converts an object of type 'WorkDocsDeleteFolderContentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeleteFolderContentsRequest(obj: WorkDocsDeleteFolderContentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'FolderId': obj.folderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsDeleteLabelsRequest
 */
export interface WorkDocsDeleteLabelsRequest {
  /**
   * @schema WorkDocsDeleteLabelsRequest#ResourceId
   */
  readonly resourceId?: string;

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
 * Converts an object of type 'WorkDocsDeleteLabelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeleteLabelsRequest(obj: WorkDocsDeleteLabelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'AuthenticationToken': obj.authenticationToken,
    'Labels': obj.labels?.map(y => y),
    'DeleteAll': obj.deleteAll,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsDeleteLabelsResponse
 */
export interface WorkDocsDeleteLabelsResponse {
}

/**
 * Converts an object of type 'WorkDocsDeleteLabelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeleteLabelsResponse(obj: WorkDocsDeleteLabelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsDeleteNotificationSubscriptionRequest
 */
export interface WorkDocsDeleteNotificationSubscriptionRequest {
  /**
   * @schema WorkDocsDeleteNotificationSubscriptionRequest#SubscriptionId
   */
  readonly subscriptionId?: string;

  /**
   * @schema WorkDocsDeleteNotificationSubscriptionRequest#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'WorkDocsDeleteNotificationSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeleteNotificationSubscriptionRequest(obj: WorkDocsDeleteNotificationSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionId': obj.subscriptionId,
    'OrganizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly userId?: string;

}

/**
 * Converts an object of type 'WorkDocsDeleteUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDeleteUserRequest(obj: WorkDocsDeleteUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeActivitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeActivitiesRequest(obj: WorkDocsDescribeActivitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'OrganizationId': obj.organizationId,
    'ActivityTypes': obj.activityTypes,
    'ResourceId': obj.resourceId,
    'UserId': obj.userId,
    'IncludeIndirectActivities': obj.includeIndirectActivities,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeActivitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeActivitiesResponse(obj: WorkDocsDescribeActivitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserActivities': obj.userActivities?.map(y => toJson_WorkDocsActivity(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly documentId?: string;

  /**
   * @schema WorkDocsDescribeCommentsRequest#VersionId
   */
  readonly versionId?: string;

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
 * Converts an object of type 'WorkDocsDescribeCommentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeCommentsRequest(obj: WorkDocsDescribeCommentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
    'VersionId': obj.versionId,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeCommentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeCommentsResponse(obj: WorkDocsDescribeCommentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comments': obj.comments?.map(y => toJson_WorkDocsComment(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly documentId?: string;

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
 * Converts an object of type 'WorkDocsDescribeDocumentVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeDocumentVersionsRequest(obj: WorkDocsDescribeDocumentVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
    'Marker': obj.marker,
    'Limit': obj.limit,
    'Include': obj.include,
    'Fields': obj.fields,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeDocumentVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeDocumentVersionsResponse(obj: WorkDocsDescribeDocumentVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentVersions': obj.documentVersions?.map(y => toJson_WorkDocsDocumentVersionMetadata(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly folderId?: string;

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
 * Converts an object of type 'WorkDocsDescribeFolderContentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeFolderContentsRequest(obj: WorkDocsDescribeFolderContentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'FolderId': obj.folderId,
    'Sort': obj.sort,
    'Order': obj.order,
    'Limit': obj.limit,
    'Marker': obj.marker,
    'Type': obj.type,
    'Include': obj.include,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeFolderContentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeFolderContentsResponse(obj: WorkDocsDescribeFolderContentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Folders': obj.folders?.map(y => toJson_WorkDocsFolderMetadata(y)),
    'Documents': obj.documents?.map(y => toJson_WorkDocsDocumentMetadata(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly searchQuery?: string;

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
 * Converts an object of type 'WorkDocsDescribeGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeGroupsRequest(obj: WorkDocsDescribeGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'SearchQuery': obj.searchQuery,
    'OrganizationId': obj.organizationId,
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeGroupsResponse(obj: WorkDocsDescribeGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Groups': obj.groups?.map(y => toJson_WorkDocsGroupMetadata(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsDescribeNotificationSubscriptionsRequest
 */
export interface WorkDocsDescribeNotificationSubscriptionsRequest {
  /**
   * @schema WorkDocsDescribeNotificationSubscriptionsRequest#OrganizationId
   */
  readonly organizationId?: string;

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
 * Converts an object of type 'WorkDocsDescribeNotificationSubscriptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeNotificationSubscriptionsRequest(obj: WorkDocsDescribeNotificationSubscriptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeNotificationSubscriptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeNotificationSubscriptionsResponse(obj: WorkDocsDescribeNotificationSubscriptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subscriptions': obj.subscriptions?.map(y => toJson_WorkDocsSubscription(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly resourceId?: string;

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
 * Converts an object of type 'WorkDocsDescribeResourcePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeResourcePermissionsRequest(obj: WorkDocsDescribeResourcePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'ResourceId': obj.resourceId,
    'PrincipalId': obj.principalId,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeResourcePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeResourcePermissionsResponse(obj: WorkDocsDescribeResourcePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Principals': obj.principals?.map(y => toJson_WorkDocsPrincipal(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsDescribeRootFoldersRequest
 */
export interface WorkDocsDescribeRootFoldersRequest {
  /**
   * @schema WorkDocsDescribeRootFoldersRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

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
 * Converts an object of type 'WorkDocsDescribeRootFoldersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeRootFoldersRequest(obj: WorkDocsDescribeRootFoldersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeRootFoldersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeRootFoldersResponse(obj: WorkDocsDescribeRootFoldersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Folders': obj.folders?.map(y => toJson_WorkDocsFolderMetadata(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeUsersRequest(obj: WorkDocsDescribeUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'OrganizationId': obj.organizationId,
    'UserIds': obj.userIds,
    'Query': obj.query,
    'Include': obj.include,
    'Order': obj.order,
    'Sort': obj.sort,
    'Marker': obj.marker,
    'Limit': obj.limit,
    'Fields': obj.fields,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDescribeUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDescribeUsersResponse(obj: WorkDocsDescribeUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Users': obj.users?.map(y => toJson_WorkDocsUser(y)),
    'TotalNumberOfUsers': obj.totalNumberOfUsers,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsGetCurrentUserRequest
 */
export interface WorkDocsGetCurrentUserRequest {
  /**
   * @schema WorkDocsGetCurrentUserRequest#AuthenticationToken
   */
  readonly authenticationToken?: string;

}

/**
 * Converts an object of type 'WorkDocsGetCurrentUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetCurrentUserRequest(obj: WorkDocsGetCurrentUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsGetCurrentUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetCurrentUserResponse(obj: WorkDocsGetCurrentUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_WorkDocsUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly documentId?: string;

  /**
   * @schema WorkDocsGetDocumentRequest#IncludeCustomMetadata
   */
  readonly includeCustomMetadata?: boolean;

}

/**
 * Converts an object of type 'WorkDocsGetDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetDocumentRequest(obj: WorkDocsGetDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
    'IncludeCustomMetadata': obj.includeCustomMetadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsGetDocumentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetDocumentResponse(obj: WorkDocsGetDocumentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metadata': toJson_WorkDocsDocumentMetadata(obj.metadata),
    'CustomMetadata': ((obj.customMetadata) === undefined) ? undefined : (Object.entries(obj.customMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly documentId?: string;

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
 * Converts an object of type 'WorkDocsGetDocumentPathRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetDocumentPathRequest(obj: WorkDocsGetDocumentPathRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
    'Limit': obj.limit,
    'Fields': obj.fields,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsGetDocumentPathResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetDocumentPathResponse(obj: WorkDocsGetDocumentPathResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': toJson_WorkDocsResourcePath(obj.path),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly documentId?: string;

  /**
   * @schema WorkDocsGetDocumentVersionRequest#VersionId
   */
  readonly versionId?: string;

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
 * Converts an object of type 'WorkDocsGetDocumentVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetDocumentVersionRequest(obj: WorkDocsGetDocumentVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
    'VersionId': obj.versionId,
    'Fields': obj.fields,
    'IncludeCustomMetadata': obj.includeCustomMetadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsGetDocumentVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetDocumentVersionResponse(obj: WorkDocsGetDocumentVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metadata': toJson_WorkDocsDocumentVersionMetadata(obj.metadata),
    'CustomMetadata': ((obj.customMetadata) === undefined) ? undefined : (Object.entries(obj.customMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly folderId?: string;

  /**
   * @schema WorkDocsGetFolderRequest#IncludeCustomMetadata
   */
  readonly includeCustomMetadata?: boolean;

}

/**
 * Converts an object of type 'WorkDocsGetFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetFolderRequest(obj: WorkDocsGetFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'FolderId': obj.folderId,
    'IncludeCustomMetadata': obj.includeCustomMetadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsGetFolderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetFolderResponse(obj: WorkDocsGetFolderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metadata': toJson_WorkDocsFolderMetadata(obj.metadata),
    'CustomMetadata': ((obj.customMetadata) === undefined) ? undefined : (Object.entries(obj.customMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly folderId?: string;

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
 * Converts an object of type 'WorkDocsGetFolderPathRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetFolderPathRequest(obj: WorkDocsGetFolderPathRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'FolderId': obj.folderId,
    'Limit': obj.limit,
    'Fields': obj.fields,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsGetFolderPathResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetFolderPathResponse(obj: WorkDocsGetFolderPathResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': toJson_WorkDocsResourcePath(obj.path),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsGetResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetResourcesRequest(obj: WorkDocsGetResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'UserId': obj.userId,
    'CollectionType': obj.collectionType,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsGetResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGetResourcesResponse(obj: WorkDocsGetResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Folders': obj.folders?.map(y => toJson_WorkDocsFolderMetadata(y)),
    'Documents': obj.documents?.map(y => toJson_WorkDocsDocumentMetadata(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly parentFolderId?: string;

}

/**
 * Converts an object of type 'WorkDocsInitiateDocumentVersionUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsInitiateDocumentVersionUploadRequest(obj: WorkDocsInitiateDocumentVersionUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'Id': obj.id,
    'Name': obj.name,
    'ContentCreatedTimestamp': obj.contentCreatedTimestamp,
    'ContentModifiedTimestamp': obj.contentModifiedTimestamp,
    'ContentType': obj.contentType,
    'DocumentSizeInBytes': obj.documentSizeInBytes,
    'ParentFolderId': obj.parentFolderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsInitiateDocumentVersionUploadResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsInitiateDocumentVersionUploadResponse(obj: WorkDocsInitiateDocumentVersionUploadResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metadata': toJson_WorkDocsDocumentMetadata(obj.metadata),
    'UploadMetadata': toJson_WorkDocsUploadMetadata(obj.uploadMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'WorkDocsRemoveAllResourcePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsRemoveAllResourcePermissionsRequest(obj: WorkDocsRemoveAllResourcePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly resourceId?: string;

  /**
   * @schema WorkDocsRemoveResourcePermissionRequest#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema WorkDocsRemoveResourcePermissionRequest#PrincipalType
   */
  readonly principalType?: string;

}

/**
 * Converts an object of type 'WorkDocsRemoveResourcePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsRemoveResourcePermissionRequest(obj: WorkDocsRemoveResourcePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'ResourceId': obj.resourceId,
    'PrincipalId': obj.principalId,
    'PrincipalType': obj.principalType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly documentId?: string;

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
 * Converts an object of type 'WorkDocsUpdateDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsUpdateDocumentRequest(obj: WorkDocsUpdateDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
    'Name': obj.name,
    'ParentFolderId': obj.parentFolderId,
    'ResourceState': obj.resourceState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly documentId?: string;

  /**
   * @schema WorkDocsUpdateDocumentVersionRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema WorkDocsUpdateDocumentVersionRequest#VersionStatus
   */
  readonly versionStatus?: string;

}

/**
 * Converts an object of type 'WorkDocsUpdateDocumentVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsUpdateDocumentVersionRequest(obj: WorkDocsUpdateDocumentVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'DocumentId': obj.documentId,
    'VersionId': obj.versionId,
    'VersionStatus': obj.versionStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly folderId?: string;

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
 * Converts an object of type 'WorkDocsUpdateFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsUpdateFolderRequest(obj: WorkDocsUpdateFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'FolderId': obj.folderId,
    'Name': obj.name,
    'ParentFolderId': obj.parentFolderId,
    'ResourceState': obj.resourceState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly userId?: string;

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
 * Converts an object of type 'WorkDocsUpdateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsUpdateUserRequest(obj: WorkDocsUpdateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationToken': obj.authenticationToken,
    'UserId': obj.userId,
    'GivenName': obj.givenName,
    'Surname': obj.surname,
    'Type': obj.type,
    'StorageRule': toJson_WorkDocsStorageRuleType(obj.storageRule),
    'TimeZoneId': obj.timeZoneId,
    'Locale': obj.locale,
    'GrantPoweruserPrivileges': obj.grantPoweruserPrivileges,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsUpdateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsUpdateUserResponse(obj: WorkDocsUpdateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_WorkDocsUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsUser(obj: WorkDocsUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Username': obj.username,
    'EmailAddress': obj.emailAddress,
    'GivenName': obj.givenName,
    'Surname': obj.surname,
    'OrganizationId': obj.organizationId,
    'RootFolderId': obj.rootFolderId,
    'RecycleBinFolderId': obj.recycleBinFolderId,
    'Status': obj.status,
    'Type': obj.type,
    'CreatedTimestamp': obj.createdTimestamp,
    'ModifiedTimestamp': obj.modifiedTimestamp,
    'TimeZoneId': obj.timeZoneId,
    'Locale': obj.locale,
    'Storage': toJson_WorkDocsUserStorageMetadata(obj.storage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsSharePrincipal
 */
export interface WorkDocsSharePrincipal {
  /**
   * @schema WorkDocsSharePrincipal#Id
   */
  readonly id?: string;

  /**
   * @schema WorkDocsSharePrincipal#Type
   */
  readonly type?: string;

  /**
   * @schema WorkDocsSharePrincipal#Role
   */
  readonly role?: string;

}

/**
 * Converts an object of type 'WorkDocsSharePrincipal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsSharePrincipal(obj: WorkDocsSharePrincipal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Type': obj.type,
    'Role': obj.role,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsNotificationOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsNotificationOptions(obj: WorkDocsNotificationOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SendEmail': obj.sendEmail,
    'EmailMessage': obj.emailMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsShareResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsShareResult(obj: WorkDocsShareResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrincipalId': obj.principalId,
    'InviteePrincipalId': obj.inviteePrincipalId,
    'Role': obj.role,
    'Status': obj.status,
    'ShareId': obj.shareId,
    'StatusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkDocsComment
 */
export interface WorkDocsComment {
  /**
   * @schema WorkDocsComment#CommentId
   */
  readonly commentId?: string;

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
 * Converts an object of type 'WorkDocsComment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsComment(obj: WorkDocsComment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommentId': obj.commentId,
    'ParentId': obj.parentId,
    'ThreadId': obj.threadId,
    'Text': obj.text,
    'Contributor': toJson_WorkDocsUser(obj.contributor),
    'CreatedTimestamp': obj.createdTimestamp,
    'Status': obj.status,
    'Visibility': obj.visibility,
    'RecipientId': obj.recipientId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsFolderMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsFolderMetadata(obj: WorkDocsFolderMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'CreatorId': obj.creatorId,
    'ParentFolderId': obj.parentFolderId,
    'CreatedTimestamp': obj.createdTimestamp,
    'ModifiedTimestamp': obj.modifiedTimestamp,
    'ResourceState': obj.resourceState,
    'Signature': obj.signature,
    'Labels': obj.labels?.map(y => y),
    'Size': obj.size,
    'LatestVersionSize': obj.latestVersionSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsSubscription(obj: WorkDocsSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionId': obj.subscriptionId,
    'EndPoint': obj.endPoint,
    'Protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsStorageRuleType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsStorageRuleType(obj: WorkDocsStorageRuleType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageAllocatedInBytes': obj.storageAllocatedInBytes,
    'StorageType': obj.storageType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsActivity(obj: WorkDocsActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'TimeStamp': obj.timeStamp,
    'IsIndirectActivity': obj.isIndirectActivity,
    'OrganizationId': obj.organizationId,
    'Initiator': toJson_WorkDocsUserMetadata(obj.initiator),
    'Participants': toJson_WorkDocsParticipants(obj.participants),
    'ResourceMetadata': toJson_WorkDocsResourceMetadata(obj.resourceMetadata),
    'OriginalParent': toJson_WorkDocsResourceMetadata(obj.originalParent),
    'CommentMetadata': toJson_WorkDocsCommentMetadata(obj.commentMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDocumentVersionMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDocumentVersionMetadata(obj: WorkDocsDocumentVersionMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'ContentType': obj.contentType,
    'Size': obj.size,
    'Signature': obj.signature,
    'Status': obj.status,
    'CreatedTimestamp': obj.createdTimestamp,
    'ModifiedTimestamp': obj.modifiedTimestamp,
    'ContentCreatedTimestamp': obj.contentCreatedTimestamp,
    'ContentModifiedTimestamp': obj.contentModifiedTimestamp,
    'CreatorId': obj.creatorId,
    'Thumbnail': ((obj.thumbnail) === undefined) ? undefined : (Object.entries(obj.thumbnail).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Source': ((obj.source) === undefined) ? undefined : (Object.entries(obj.source).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsDocumentMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsDocumentMetadata(obj: WorkDocsDocumentMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'CreatorId': obj.creatorId,
    'ParentFolderId': obj.parentFolderId,
    'CreatedTimestamp': obj.createdTimestamp,
    'ModifiedTimestamp': obj.modifiedTimestamp,
    'LatestVersionMetadata': toJson_WorkDocsDocumentVersionMetadata(obj.latestVersionMetadata),
    'ResourceState': obj.resourceState,
    'Labels': obj.labels?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsGroupMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsGroupMetadata(obj: WorkDocsGroupMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsPrincipal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsPrincipal(obj: WorkDocsPrincipal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Type': obj.type,
    'Roles': obj.roles?.map(y => toJson_WorkDocsPermissionInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsResourcePath' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsResourcePath(obj: WorkDocsResourcePath | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Components': obj.components?.map(y => toJson_WorkDocsResourcePathComponent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsUploadMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsUploadMetadata(obj: WorkDocsUploadMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UploadUrl': obj.uploadUrl,
    'SignedHeaders': ((obj.signedHeaders) === undefined) ? undefined : (Object.entries(obj.signedHeaders).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsUserStorageMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsUserStorageMetadata(obj: WorkDocsUserStorageMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageUtilizedInBytes': obj.storageUtilizedInBytes,
    'StorageRule': toJson_WorkDocsStorageRuleType(obj.storageRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsUserMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsUserMetadata(obj: WorkDocsUserMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Username': obj.username,
    'GivenName': obj.givenName,
    'Surname': obj.surname,
    'EmailAddress': obj.emailAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsParticipants' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsParticipants(obj: WorkDocsParticipants | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Users': obj.users?.map(y => toJson_WorkDocsUserMetadata(y)),
    'Groups': obj.groups?.map(y => toJson_WorkDocsGroupMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsResourceMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsResourceMetadata(obj: WorkDocsResourceMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Name': obj.name,
    'OriginalName': obj.originalName,
    'Id': obj.id,
    'VersionId': obj.versionId,
    'Owner': toJson_WorkDocsUserMetadata(obj.owner),
    'ParentId': obj.parentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsCommentMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsCommentMetadata(obj: WorkDocsCommentMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommentId': obj.commentId,
    'Contributor': toJson_WorkDocsUser(obj.contributor),
    'CreatedTimestamp': obj.createdTimestamp,
    'CommentStatus': obj.commentStatus,
    'RecipientId': obj.recipientId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkDocsPermissionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsPermissionInfo(obj: WorkDocsPermissionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Role': obj.role,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'WorkDocsResourcePathComponent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkDocsResourcePathComponent(obj: WorkDocsResourcePathComponent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
