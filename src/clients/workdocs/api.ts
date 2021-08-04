import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class WorkDocsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public abortDocumentVersionUpload(input: shapes.WorkDocsAbortDocumentVersionUploadRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'abortDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.AbortDocumentVersionUpload'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          DocumentId: input.documentId,
          VersionId: input.versionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AbortDocumentVersionUpload', props);
  }

  public activateUser(input: shapes.WorkDocsActivateUserRequest): WorkDocsResponsesActivateUser {
    return new WorkDocsResponsesActivateUser(this, this.__resources, input);
  }

  public addResourcePermissions(input: shapes.WorkDocsAddResourcePermissionsRequest): WorkDocsResponsesAddResourcePermissions {
    return new WorkDocsResponsesAddResourcePermissions(this, this.__resources, input);
  }

  public createComment(input: shapes.WorkDocsCreateCommentRequest): WorkDocsResponsesCreateComment {
    return new WorkDocsResponsesCreateComment(this, this.__resources, input);
  }

  public createCustomMetadata(input: shapes.WorkDocsCreateCustomMetadataRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomMetadata',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateCustomMetadata'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          ResourceId: input.resourceId,
          VersionId: input.versionId,
          CustomMetadata: input.customMetadata,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateCustomMetadata', props);
  }

  public createFolder(input: shapes.WorkDocsCreateFolderRequest): WorkDocsResponsesCreateFolder {
    return new WorkDocsResponsesCreateFolder(this, this.__resources, input);
  }

  public createLabels(input: shapes.WorkDocsCreateLabelsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLabels',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateLabels'),
        parameters: {
          ResourceId: input.resourceId,
          Labels: input.labels,
          AuthenticationToken: input.authenticationToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateLabels', props);
  }

  public createNotificationSubscription(input: shapes.WorkDocsCreateNotificationSubscriptionRequest): WorkDocsResponsesCreateNotificationSubscription {
    return new WorkDocsResponsesCreateNotificationSubscription(this, this.__resources, input);
  }

  public createUser(input: shapes.WorkDocsCreateUserRequest): WorkDocsResponsesCreateUser {
    return new WorkDocsResponsesCreateUser(this, this.__resources, input);
  }

  public deactivateUser(input: shapes.WorkDocsDeactivateUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deactivateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DeactivateUser'),
        parameters: {
          UserId: input.userId,
          AuthenticationToken: input.authenticationToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeactivateUser', props);
  }

  public deleteComment(input: shapes.WorkDocsDeleteCommentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DeleteComment'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          DocumentId: input.documentId,
          VersionId: input.versionId,
          CommentId: input.commentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteComment', props);
  }

  public deleteCustomMetadata(input: shapes.WorkDocsDeleteCustomMetadataRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCustomMetadata',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DeleteCustomMetadata'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          ResourceId: input.resourceId,
          VersionId: input.versionId,
          Keys: input.keys,
          DeleteAll: input.deleteAll,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCustomMetadata', props);
  }

  public deleteDocument(input: shapes.WorkDocsDeleteDocumentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DeleteDocument'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          DocumentId: input.documentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDocument', props);
  }

  public deleteFolder(input: shapes.WorkDocsDeleteFolderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DeleteFolder'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          FolderId: input.folderId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFolder', props);
  }

  public deleteFolderContents(input: shapes.WorkDocsDeleteFolderContentsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFolderContents',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DeleteFolderContents'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          FolderId: input.folderId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFolderContents', props);
  }

  public deleteLabels(input: shapes.WorkDocsDeleteLabelsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLabels',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DeleteLabels'),
        parameters: {
          ResourceId: input.resourceId,
          AuthenticationToken: input.authenticationToken,
          Labels: input.labels,
          DeleteAll: input.deleteAll,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLabels', props);
  }

  public deleteNotificationSubscription(input: shapes.WorkDocsDeleteNotificationSubscriptionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNotificationSubscription',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DeleteNotificationSubscription'),
        parameters: {
          SubscriptionId: input.subscriptionId,
          OrganizationId: input.organizationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteNotificationSubscription', props);
  }

  public deleteUser(input: shapes.WorkDocsDeleteUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DeleteUser'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          UserId: input.userId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUser', props);
  }

  public describeActivities(input: shapes.WorkDocsDescribeActivitiesRequest): WorkDocsResponsesDescribeActivities {
    return new WorkDocsResponsesDescribeActivities(this, this.__resources, input);
  }

  public describeComments(input: shapes.WorkDocsDescribeCommentsRequest): WorkDocsResponsesDescribeComments {
    return new WorkDocsResponsesDescribeComments(this, this.__resources, input);
  }

  public describeDocumentVersions(input: shapes.WorkDocsDescribeDocumentVersionsRequest): WorkDocsResponsesDescribeDocumentVersions {
    return new WorkDocsResponsesDescribeDocumentVersions(this, this.__resources, input);
  }

  public describeFolderContents(input: shapes.WorkDocsDescribeFolderContentsRequest): WorkDocsResponsesDescribeFolderContents {
    return new WorkDocsResponsesDescribeFolderContents(this, this.__resources, input);
  }

  public describeGroups(input: shapes.WorkDocsDescribeGroupsRequest): WorkDocsResponsesDescribeGroups {
    return new WorkDocsResponsesDescribeGroups(this, this.__resources, input);
  }

  public describeNotificationSubscriptions(input: shapes.WorkDocsDescribeNotificationSubscriptionsRequest): WorkDocsResponsesDescribeNotificationSubscriptions {
    return new WorkDocsResponsesDescribeNotificationSubscriptions(this, this.__resources, input);
  }

  public describeResourcePermissions(input: shapes.WorkDocsDescribeResourcePermissionsRequest): WorkDocsResponsesDescribeResourcePermissions {
    return new WorkDocsResponsesDescribeResourcePermissions(this, this.__resources, input);
  }

  public describeRootFolders(input: shapes.WorkDocsDescribeRootFoldersRequest): WorkDocsResponsesDescribeRootFolders {
    return new WorkDocsResponsesDescribeRootFolders(this, this.__resources, input);
  }

  public describeUsers(input: shapes.WorkDocsDescribeUsersRequest): WorkDocsResponsesDescribeUsers {
    return new WorkDocsResponsesDescribeUsers(this, this.__resources, input);
  }

  public fetchCurrentUser(input: shapes.WorkDocsGetCurrentUserRequest): WorkDocsResponsesFetchCurrentUser {
    return new WorkDocsResponsesFetchCurrentUser(this, this.__resources, input);
  }

  public fetchDocument(input: shapes.WorkDocsGetDocumentRequest): WorkDocsResponsesFetchDocument {
    return new WorkDocsResponsesFetchDocument(this, this.__resources, input);
  }

  public fetchDocumentPath(input: shapes.WorkDocsGetDocumentPathRequest): WorkDocsResponsesFetchDocumentPath {
    return new WorkDocsResponsesFetchDocumentPath(this, this.__resources, input);
  }

  public fetchDocumentVersion(input: shapes.WorkDocsGetDocumentVersionRequest): WorkDocsResponsesFetchDocumentVersion {
    return new WorkDocsResponsesFetchDocumentVersion(this, this.__resources, input);
  }

  public fetchFolder(input: shapes.WorkDocsGetFolderRequest): WorkDocsResponsesFetchFolder {
    return new WorkDocsResponsesFetchFolder(this, this.__resources, input);
  }

  public fetchFolderPath(input: shapes.WorkDocsGetFolderPathRequest): WorkDocsResponsesFetchFolderPath {
    return new WorkDocsResponsesFetchFolderPath(this, this.__resources, input);
  }

  public fetchResources(input: shapes.WorkDocsGetResourcesRequest): WorkDocsResponsesFetchResources {
    return new WorkDocsResponsesFetchResources(this, this.__resources, input);
  }

  public initiateDocumentVersionUpload(input: shapes.WorkDocsInitiateDocumentVersionUploadRequest): WorkDocsResponsesInitiateDocumentVersionUpload {
    return new WorkDocsResponsesInitiateDocumentVersionUpload(this, this.__resources, input);
  }

  public removeAllResourcePermissions(input: shapes.WorkDocsRemoveAllResourcePermissionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeAllResourcePermissions',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.RemoveAllResourcePermissions'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          ResourceId: input.resourceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveAllResourcePermissions', props);
  }

  public removeResourcePermission(input: shapes.WorkDocsRemoveResourcePermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeResourcePermission',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.RemoveResourcePermission'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          ResourceId: input.resourceId,
          PrincipalId: input.principalId,
          PrincipalType: input.principalType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveResourcePermission', props);
  }

  public updateDocument(input: shapes.WorkDocsUpdateDocumentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateDocument'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          DocumentId: input.documentId,
          Name: input.name,
          ParentFolderId: input.parentFolderId,
          ResourceState: input.resourceState,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDocument', props);
  }

  public updateDocumentVersion(input: shapes.WorkDocsUpdateDocumentVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateDocumentVersion'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          DocumentId: input.documentId,
          VersionId: input.versionId,
          VersionStatus: input.versionStatus,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDocumentVersion', props);
  }

  public updateFolder(input: shapes.WorkDocsUpdateFolderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateFolder'),
        parameters: {
          AuthenticationToken: input.authenticationToken,
          FolderId: input.folderId,
          Name: input.name,
          ParentFolderId: input.parentFolderId,
          ResourceState: input.resourceState,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateFolder', props);
  }

  public updateUser(input: shapes.WorkDocsUpdateUserRequest): WorkDocsResponsesUpdateUser {
    return new WorkDocsResponsesUpdateUser(this, this.__resources, input);
  }

}

export class WorkDocsResponsesActivateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsActivateUserRequest) {
  }

  public get user(): WorkDocsResponsesActivateUserUser {
    return new WorkDocsResponsesActivateUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesActivateUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsActivateUserRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.Id'),
        outputPath: 'User.Id',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.Id', props);
    return resource.getResponseField('User.Id') as unknown as string;
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.Username'),
        outputPath: 'User.Username',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.Username', props);
    return resource.getResponseField('User.Username') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.EmailAddress'),
        outputPath: 'User.EmailAddress',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.EmailAddress', props);
    return resource.getResponseField('User.EmailAddress') as unknown as string;
  }

  public get givenName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.GivenName'),
        outputPath: 'User.GivenName',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.GivenName', props);
    return resource.getResponseField('User.GivenName') as unknown as string;
  }

  public get surname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.Surname'),
        outputPath: 'User.Surname',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.Surname', props);
    return resource.getResponseField('User.Surname') as unknown as string;
  }

  public get organizationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.OrganizationId'),
        outputPath: 'User.OrganizationId',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.OrganizationId', props);
    return resource.getResponseField('User.OrganizationId') as unknown as string;
  }

  public get rootFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.RootFolderId'),
        outputPath: 'User.RootFolderId',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.RootFolderId', props);
    return resource.getResponseField('User.RootFolderId') as unknown as string;
  }

  public get recycleBinFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.RecycleBinFolderId'),
        outputPath: 'User.RecycleBinFolderId',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.RecycleBinFolderId', props);
    return resource.getResponseField('User.RecycleBinFolderId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.Status'),
        outputPath: 'User.Status',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.Status', props);
    return resource.getResponseField('User.Status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.Type'),
        outputPath: 'User.Type',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.Type', props);
    return resource.getResponseField('User.Type') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.CreatedTimestamp'),
        outputPath: 'User.CreatedTimestamp',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.CreatedTimestamp', props);
    return resource.getResponseField('User.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.ModifiedTimestamp'),
        outputPath: 'User.ModifiedTimestamp',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.ModifiedTimestamp', props);
    return resource.getResponseField('User.ModifiedTimestamp') as unknown as string;
  }

  public get timeZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.TimeZoneId'),
        outputPath: 'User.TimeZoneId',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.TimeZoneId', props);
    return resource.getResponseField('User.TimeZoneId') as unknown as string;
  }

  public get locale(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.Locale'),
        outputPath: 'User.Locale',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.Locale', props);
    return resource.getResponseField('User.Locale') as unknown as string;
  }

  public get storage(): WorkDocsResponsesActivateUserUserStorage {
    return new WorkDocsResponsesActivateUserUserStorage(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesActivateUserUserStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsActivateUserRequest) {
  }

  public get storageUtilizedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.Storage.StorageUtilizedInBytes'),
        outputPath: 'User.Storage.StorageUtilizedInBytes',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.Storage.StorageUtilizedInBytes', props);
    return resource.getResponseField('User.Storage.StorageUtilizedInBytes') as unknown as number;
  }

  public get storageRule(): WorkDocsResponsesActivateUserUserStorageStorageRule {
    return new WorkDocsResponsesActivateUserUserStorageStorageRule(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesActivateUserUserStorageStorageRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsActivateUserRequest) {
  }

  public get storageAllocatedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.Storage.StorageRule.StorageAllocatedInBytes'),
        outputPath: 'User.Storage.StorageRule.StorageAllocatedInBytes',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.Storage.StorageRule.StorageAllocatedInBytes', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageAllocatedInBytes') as unknown as number;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.ActivateUser.User.Storage.StorageRule.StorageType'),
        outputPath: 'User.Storage.StorageRule.StorageType',
        parameters: {
          UserId: this.__input.userId,
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateUser.User.Storage.StorageRule.StorageType', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageType') as unknown as string;
  }

}

export class WorkDocsResponsesAddResourcePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsAddResourcePermissionsRequest) {
  }

  public get shareResults(): shapes.WorkDocsShareResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addResourcePermissions',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.AddResourcePermissions.ShareResults'),
        outputPath: 'ShareResults',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          ResourceId: this.__input.resourceId,
          Principals: this.__input.principals,
          NotificationOptions: {
            SendEmail: this.__input.notificationOptions?.sendEmail,
            EmailMessage: this.__input.notificationOptions?.emailMessage,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddResourcePermissions.ShareResults', props);
    return resource.getResponseField('ShareResults') as unknown as shapes.WorkDocsShareResult[];
  }

}

export class WorkDocsResponsesCreateComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateCommentRequest) {
  }

  public get comment(): WorkDocsResponsesCreateCommentComment {
    return new WorkDocsResponsesCreateCommentComment(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesCreateCommentComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateCommentRequest) {
  }

  public get commentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.CommentId'),
        outputPath: 'Comment.CommentId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.CommentId', props);
    return resource.getResponseField('Comment.CommentId') as unknown as string;
  }

  public get parentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.ParentId'),
        outputPath: 'Comment.ParentId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.ParentId', props);
    return resource.getResponseField('Comment.ParentId') as unknown as string;
  }

  public get threadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.ThreadId'),
        outputPath: 'Comment.ThreadId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.ThreadId', props);
    return resource.getResponseField('Comment.ThreadId') as unknown as string;
  }

  public get text(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Text'),
        outputPath: 'Comment.Text',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Text', props);
    return resource.getResponseField('Comment.Text') as unknown as string;
  }

  public get contributor(): WorkDocsResponsesCreateCommentCommentContributor {
    return new WorkDocsResponsesCreateCommentCommentContributor(this.__scope, this.__resources, this.__input);
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.CreatedTimestamp'),
        outputPath: 'Comment.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.CreatedTimestamp', props);
    return resource.getResponseField('Comment.CreatedTimestamp') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Status'),
        outputPath: 'Comment.Status',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Status', props);
    return resource.getResponseField('Comment.Status') as unknown as string;
  }

  public get visibility(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Visibility'),
        outputPath: 'Comment.Visibility',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Visibility', props);
    return resource.getResponseField('Comment.Visibility') as unknown as string;
  }

  public get recipientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.RecipientId'),
        outputPath: 'Comment.RecipientId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.RecipientId', props);
    return resource.getResponseField('Comment.RecipientId') as unknown as string;
  }

}

export class WorkDocsResponsesCreateCommentCommentContributor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateCommentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.Id'),
        outputPath: 'Comment.Contributor.Id',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.Id', props);
    return resource.getResponseField('Comment.Contributor.Id') as unknown as string;
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.Username'),
        outputPath: 'Comment.Contributor.Username',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.Username', props);
    return resource.getResponseField('Comment.Contributor.Username') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.EmailAddress'),
        outputPath: 'Comment.Contributor.EmailAddress',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.EmailAddress', props);
    return resource.getResponseField('Comment.Contributor.EmailAddress') as unknown as string;
  }

  public get givenName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.GivenName'),
        outputPath: 'Comment.Contributor.GivenName',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.GivenName', props);
    return resource.getResponseField('Comment.Contributor.GivenName') as unknown as string;
  }

  public get surname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.Surname'),
        outputPath: 'Comment.Contributor.Surname',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.Surname', props);
    return resource.getResponseField('Comment.Contributor.Surname') as unknown as string;
  }

  public get organizationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.OrganizationId'),
        outputPath: 'Comment.Contributor.OrganizationId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.OrganizationId', props);
    return resource.getResponseField('Comment.Contributor.OrganizationId') as unknown as string;
  }

  public get rootFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.RootFolderId'),
        outputPath: 'Comment.Contributor.RootFolderId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.RootFolderId', props);
    return resource.getResponseField('Comment.Contributor.RootFolderId') as unknown as string;
  }

  public get recycleBinFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.RecycleBinFolderId'),
        outputPath: 'Comment.Contributor.RecycleBinFolderId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.RecycleBinFolderId', props);
    return resource.getResponseField('Comment.Contributor.RecycleBinFolderId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.Status'),
        outputPath: 'Comment.Contributor.Status',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.Status', props);
    return resource.getResponseField('Comment.Contributor.Status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.Type'),
        outputPath: 'Comment.Contributor.Type',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.Type', props);
    return resource.getResponseField('Comment.Contributor.Type') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.CreatedTimestamp'),
        outputPath: 'Comment.Contributor.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.CreatedTimestamp', props);
    return resource.getResponseField('Comment.Contributor.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.ModifiedTimestamp'),
        outputPath: 'Comment.Contributor.ModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.ModifiedTimestamp', props);
    return resource.getResponseField('Comment.Contributor.ModifiedTimestamp') as unknown as string;
  }

  public get timeZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.TimeZoneId'),
        outputPath: 'Comment.Contributor.TimeZoneId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.TimeZoneId', props);
    return resource.getResponseField('Comment.Contributor.TimeZoneId') as unknown as string;
  }

  public get locale(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.Locale'),
        outputPath: 'Comment.Contributor.Locale',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.Locale', props);
    return resource.getResponseField('Comment.Contributor.Locale') as unknown as string;
  }

  public get storage(): WorkDocsResponsesCreateCommentCommentContributorStorage {
    return new WorkDocsResponsesCreateCommentCommentContributorStorage(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesCreateCommentCommentContributorStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateCommentRequest) {
  }

  public get storageUtilizedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.Storage.StorageUtilizedInBytes'),
        outputPath: 'Comment.Contributor.Storage.StorageUtilizedInBytes',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.Storage.StorageUtilizedInBytes', props);
    return resource.getResponseField('Comment.Contributor.Storage.StorageUtilizedInBytes') as unknown as number;
  }

  public get storageRule(): WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule {
    return new WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateCommentRequest) {
  }

  public get storageAllocatedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.Storage.StorageRule.StorageAllocatedInBytes'),
        outputPath: 'Comment.Contributor.Storage.StorageRule.StorageAllocatedInBytes',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.Storage.StorageRule.StorageAllocatedInBytes', props);
    return resource.getResponseField('Comment.Contributor.Storage.StorageRule.StorageAllocatedInBytes') as unknown as number;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComment',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateComment.Comment.Contributor.Storage.StorageRule.StorageType'),
        outputPath: 'Comment.Contributor.Storage.StorageRule.StorageType',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          ParentId: this.__input.parentId,
          ThreadId: this.__input.threadId,
          Text: this.__input.text,
          Visibility: this.__input.visibility,
          NotifyCollaborators: this.__input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComment.Comment.Contributor.Storage.StorageRule.StorageType', props);
    return resource.getResponseField('Comment.Contributor.Storage.StorageRule.StorageType') as unknown as string;
  }

}

export class WorkDocsResponsesCreateFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateFolderRequest) {
  }

  public get metadata(): WorkDocsResponsesCreateFolderMetadata {
    return new WorkDocsResponsesCreateFolderMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesCreateFolderMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateFolderRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.Id'),
        outputPath: 'Metadata.Id',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.Id', props);
    return resource.getResponseField('Metadata.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.Name'),
        outputPath: 'Metadata.Name',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.Name', props);
    return resource.getResponseField('Metadata.Name') as unknown as string;
  }

  public get creatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.CreatorId'),
        outputPath: 'Metadata.CreatorId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.CreatorId', props);
    return resource.getResponseField('Metadata.CreatorId') as unknown as string;
  }

  public get parentFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.ParentFolderId'),
        outputPath: 'Metadata.ParentFolderId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.ParentFolderId', props);
    return resource.getResponseField('Metadata.ParentFolderId') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.CreatedTimestamp'),
        outputPath: 'Metadata.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.CreatedTimestamp', props);
    return resource.getResponseField('Metadata.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.ModifiedTimestamp'),
        outputPath: 'Metadata.ModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.ModifiedTimestamp', props);
    return resource.getResponseField('Metadata.ModifiedTimestamp') as unknown as string;
  }

  public get resourceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.ResourceState'),
        outputPath: 'Metadata.ResourceState',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.ResourceState', props);
    return resource.getResponseField('Metadata.ResourceState') as unknown as string;
  }

  public get signature(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.Signature'),
        outputPath: 'Metadata.Signature',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.Signature', props);
    return resource.getResponseField('Metadata.Signature') as unknown as string;
  }

  public get labels(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.Labels'),
        outputPath: 'Metadata.Labels',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.Labels', props);
    return resource.getResponseField('Metadata.Labels') as unknown as string[];
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.Size'),
        outputPath: 'Metadata.Size',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.Size', props);
    return resource.getResponseField('Metadata.Size') as unknown as number;
  }

  public get latestVersionSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateFolder.Metadata.LatestVersionSize'),
        outputPath: 'Metadata.LatestVersionSize',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Name: this.__input.name,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Metadata.LatestVersionSize', props);
    return resource.getResponseField('Metadata.LatestVersionSize') as unknown as number;
  }

}

export class WorkDocsResponsesCreateNotificationSubscription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateNotificationSubscriptionRequest) {
  }

  public get subscription(): WorkDocsResponsesCreateNotificationSubscriptionSubscription {
    return new WorkDocsResponsesCreateNotificationSubscriptionSubscription(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesCreateNotificationSubscriptionSubscription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateNotificationSubscriptionRequest) {
  }

  public get subscriptionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNotificationSubscription',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateNotificationSubscription.Subscription.SubscriptionId'),
        outputPath: 'Subscription.SubscriptionId',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Endpoint: this.__input.endpoint,
          Protocol: this.__input.protocol,
          SubscriptionType: this.__input.subscriptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNotificationSubscription.Subscription.SubscriptionId', props);
    return resource.getResponseField('Subscription.SubscriptionId') as unknown as string;
  }

  public get endPoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNotificationSubscription',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateNotificationSubscription.Subscription.EndPoint'),
        outputPath: 'Subscription.EndPoint',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Endpoint: this.__input.endpoint,
          Protocol: this.__input.protocol,
          SubscriptionType: this.__input.subscriptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNotificationSubscription.Subscription.EndPoint', props);
    return resource.getResponseField('Subscription.EndPoint') as unknown as string;
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNotificationSubscription',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateNotificationSubscription.Subscription.Protocol'),
        outputPath: 'Subscription.Protocol',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Endpoint: this.__input.endpoint,
          Protocol: this.__input.protocol,
          SubscriptionType: this.__input.subscriptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNotificationSubscription.Subscription.Protocol', props);
    return resource.getResponseField('Subscription.Protocol') as unknown as string;
  }

}

export class WorkDocsResponsesCreateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateUserRequest) {
  }

  public get user(): WorkDocsResponsesCreateUserUser {
    return new WorkDocsResponsesCreateUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesCreateUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateUserRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.Id'),
        outputPath: 'User.Id',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Id', props);
    return resource.getResponseField('User.Id') as unknown as string;
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.Username'),
        outputPath: 'User.Username',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Username', props);
    return resource.getResponseField('User.Username') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.EmailAddress'),
        outputPath: 'User.EmailAddress',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.EmailAddress', props);
    return resource.getResponseField('User.EmailAddress') as unknown as string;
  }

  public get givenName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.GivenName'),
        outputPath: 'User.GivenName',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.GivenName', props);
    return resource.getResponseField('User.GivenName') as unknown as string;
  }

  public get surname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.Surname'),
        outputPath: 'User.Surname',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Surname', props);
    return resource.getResponseField('User.Surname') as unknown as string;
  }

  public get organizationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.OrganizationId'),
        outputPath: 'User.OrganizationId',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.OrganizationId', props);
    return resource.getResponseField('User.OrganizationId') as unknown as string;
  }

  public get rootFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.RootFolderId'),
        outputPath: 'User.RootFolderId',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.RootFolderId', props);
    return resource.getResponseField('User.RootFolderId') as unknown as string;
  }

  public get recycleBinFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.RecycleBinFolderId'),
        outputPath: 'User.RecycleBinFolderId',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.RecycleBinFolderId', props);
    return resource.getResponseField('User.RecycleBinFolderId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.Status'),
        outputPath: 'User.Status',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Status', props);
    return resource.getResponseField('User.Status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.Type'),
        outputPath: 'User.Type',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Type', props);
    return resource.getResponseField('User.Type') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.CreatedTimestamp'),
        outputPath: 'User.CreatedTimestamp',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.CreatedTimestamp', props);
    return resource.getResponseField('User.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.ModifiedTimestamp'),
        outputPath: 'User.ModifiedTimestamp',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.ModifiedTimestamp', props);
    return resource.getResponseField('User.ModifiedTimestamp') as unknown as string;
  }

  public get timeZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.TimeZoneId'),
        outputPath: 'User.TimeZoneId',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.TimeZoneId', props);
    return resource.getResponseField('User.TimeZoneId') as unknown as string;
  }

  public get locale(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.Locale'),
        outputPath: 'User.Locale',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Locale', props);
    return resource.getResponseField('User.Locale') as unknown as string;
  }

  public get storage(): WorkDocsResponsesCreateUserUserStorage {
    return new WorkDocsResponsesCreateUserUserStorage(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesCreateUserUserStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateUserRequest) {
  }

  public get storageUtilizedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.Storage.StorageUtilizedInBytes'),
        outputPath: 'User.Storage.StorageUtilizedInBytes',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Storage.StorageUtilizedInBytes', props);
    return resource.getResponseField('User.Storage.StorageUtilizedInBytes') as unknown as number;
  }

  public get storageRule(): WorkDocsResponsesCreateUserUserStorageStorageRule {
    return new WorkDocsResponsesCreateUserUserStorageStorageRule(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesCreateUserUserStorageStorageRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsCreateUserRequest) {
  }

  public get storageAllocatedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.Storage.StorageRule.StorageAllocatedInBytes'),
        outputPath: 'User.Storage.StorageRule.StorageAllocatedInBytes',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Storage.StorageRule.StorageAllocatedInBytes', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageAllocatedInBytes') as unknown as number;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.CreateUser.User.Storage.StorageRule.StorageType'),
        outputPath: 'User.Storage.StorageRule.StorageType',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Username: this.__input.username,
          EmailAddress: this.__input.emailAddress,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Password: this.__input.password,
          TimeZoneId: this.__input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Storage.StorageRule.StorageType', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageType') as unknown as string;
  }

}

export class WorkDocsResponsesDescribeActivities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsDescribeActivitiesRequest) {
  }

  public get userActivities(): shapes.WorkDocsActivity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivities',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeActivities.UserActivities'),
        outputPath: 'UserActivities',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          OrganizationId: this.__input.organizationId,
          ActivityTypes: this.__input.activityTypes,
          ResourceId: this.__input.resourceId,
          UserId: this.__input.userId,
          IncludeIndirectActivities: this.__input.includeIndirectActivities,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivities.UserActivities', props);
    return resource.getResponseField('UserActivities') as unknown as shapes.WorkDocsActivity[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivities',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeActivities.Marker'),
        outputPath: 'Marker',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          OrganizationId: this.__input.organizationId,
          ActivityTypes: this.__input.activityTypes,
          ResourceId: this.__input.resourceId,
          UserId: this.__input.userId,
          IncludeIndirectActivities: this.__input.includeIndirectActivities,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivities.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsResponsesDescribeComments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsDescribeCommentsRequest) {
  }

  public get comments(): shapes.WorkDocsComment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComments',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeComments.Comments'),
        outputPath: 'Comments',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComments.Comments', props);
    return resource.getResponseField('Comments') as unknown as shapes.WorkDocsComment[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComments',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeComments.Marker'),
        outputPath: 'Marker',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComments.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsResponsesDescribeDocumentVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsDescribeDocumentVersionsRequest) {
  }

  public get documentVersions(): shapes.WorkDocsDocumentVersionMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentVersions',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeDocumentVersions.DocumentVersions'),
        outputPath: 'DocumentVersions',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
          Include: this.__input.include,
          Fields: this.__input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentVersions.DocumentVersions', props);
    return resource.getResponseField('DocumentVersions') as unknown as shapes.WorkDocsDocumentVersionMetadata[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentVersions',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeDocumentVersions.Marker'),
        outputPath: 'Marker',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
          Include: this.__input.include,
          Fields: this.__input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentVersions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsResponsesDescribeFolderContents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsDescribeFolderContentsRequest) {
  }

  public get folders(): shapes.WorkDocsFolderMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderContents',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeFolderContents.Folders'),
        outputPath: 'Folders',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          Sort: this.__input.sort,
          Order: this.__input.order,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
          Type: this.__input.type,
          Include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderContents.Folders', props);
    return resource.getResponseField('Folders') as unknown as shapes.WorkDocsFolderMetadata[];
  }

  public get documents(): shapes.WorkDocsDocumentMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderContents',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeFolderContents.Documents'),
        outputPath: 'Documents',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          Sort: this.__input.sort,
          Order: this.__input.order,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
          Type: this.__input.type,
          Include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderContents.Documents', props);
    return resource.getResponseField('Documents') as unknown as shapes.WorkDocsDocumentMetadata[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderContents',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeFolderContents.Marker'),
        outputPath: 'Marker',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          Sort: this.__input.sort,
          Order: this.__input.order,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
          Type: this.__input.type,
          Include: this.__input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderContents.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsResponsesDescribeGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsDescribeGroupsRequest) {
  }

  public get groups(): shapes.WorkDocsGroupMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroups',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeGroups.Groups'),
        outputPath: 'Groups',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          SearchQuery: this.__input.searchQuery,
          OrganizationId: this.__input.organizationId,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroups.Groups', props);
    return resource.getResponseField('Groups') as unknown as shapes.WorkDocsGroupMetadata[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroups',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeGroups.Marker'),
        outputPath: 'Marker',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          SearchQuery: this.__input.searchQuery,
          OrganizationId: this.__input.organizationId,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsResponsesDescribeNotificationSubscriptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsDescribeNotificationSubscriptionsRequest) {
  }

  public get subscriptions(): shapes.WorkDocsSubscription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationSubscriptions',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeNotificationSubscriptions.Subscriptions'),
        outputPath: 'Subscriptions',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationSubscriptions.Subscriptions', props);
    return resource.getResponseField('Subscriptions') as unknown as shapes.WorkDocsSubscription[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationSubscriptions',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeNotificationSubscriptions.Marker'),
        outputPath: 'Marker',
        parameters: {
          OrganizationId: this.__input.organizationId,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationSubscriptions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsResponsesDescribeResourcePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsDescribeResourcePermissionsRequest) {
  }

  public get principals(): shapes.WorkDocsPrincipal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResourcePermissions',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeResourcePermissions.Principals'),
        outputPath: 'Principals',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          ResourceId: this.__input.resourceId,
          PrincipalId: this.__input.principalId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResourcePermissions.Principals', props);
    return resource.getResponseField('Principals') as unknown as shapes.WorkDocsPrincipal[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResourcePermissions',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeResourcePermissions.Marker'),
        outputPath: 'Marker',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          ResourceId: this.__input.resourceId,
          PrincipalId: this.__input.principalId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResourcePermissions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsResponsesDescribeRootFolders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsDescribeRootFoldersRequest) {
  }

  public get folders(): shapes.WorkDocsFolderMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRootFolders',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeRootFolders.Folders'),
        outputPath: 'Folders',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRootFolders.Folders', props);
    return resource.getResponseField('Folders') as unknown as shapes.WorkDocsFolderMetadata[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRootFolders',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeRootFolders.Marker'),
        outputPath: 'Marker',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRootFolders.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsResponsesDescribeUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsDescribeUsersRequest) {
  }

  public get users(): shapes.WorkDocsUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUsers',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeUsers.Users'),
        outputPath: 'Users',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          OrganizationId: this.__input.organizationId,
          UserIds: this.__input.userIds,
          Query: this.__input.query,
          Include: this.__input.include,
          Order: this.__input.order,
          Sort: this.__input.sort,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
          Fields: this.__input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.WorkDocsUser[];
  }

  public get totalNumberOfUsers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUsers',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeUsers.TotalNumberOfUsers'),
        outputPath: 'TotalNumberOfUsers',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          OrganizationId: this.__input.organizationId,
          UserIds: this.__input.userIds,
          Query: this.__input.query,
          Include: this.__input.include,
          Order: this.__input.order,
          Sort: this.__input.sort,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
          Fields: this.__input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUsers.TotalNumberOfUsers', props);
    return resource.getResponseField('TotalNumberOfUsers') as unknown as number;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUsers',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.DescribeUsers.Marker'),
        outputPath: 'Marker',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          OrganizationId: this.__input.organizationId,
          UserIds: this.__input.userIds,
          Query: this.__input.query,
          Include: this.__input.include,
          Order: this.__input.order,
          Sort: this.__input.sort,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
          Fields: this.__input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUsers.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsResponsesFetchCurrentUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetCurrentUserRequest) {
  }

  public get user(): WorkDocsResponsesFetchCurrentUserUser {
    return new WorkDocsResponsesFetchCurrentUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesFetchCurrentUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetCurrentUserRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.Id'),
        outputPath: 'User.Id',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.Id', props);
    return resource.getResponseField('User.Id') as unknown as string;
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.Username'),
        outputPath: 'User.Username',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.Username', props);
    return resource.getResponseField('User.Username') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.EmailAddress'),
        outputPath: 'User.EmailAddress',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.EmailAddress', props);
    return resource.getResponseField('User.EmailAddress') as unknown as string;
  }

  public get givenName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.GivenName'),
        outputPath: 'User.GivenName',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.GivenName', props);
    return resource.getResponseField('User.GivenName') as unknown as string;
  }

  public get surname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.Surname'),
        outputPath: 'User.Surname',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.Surname', props);
    return resource.getResponseField('User.Surname') as unknown as string;
  }

  public get organizationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.OrganizationId'),
        outputPath: 'User.OrganizationId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.OrganizationId', props);
    return resource.getResponseField('User.OrganizationId') as unknown as string;
  }

  public get rootFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.RootFolderId'),
        outputPath: 'User.RootFolderId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.RootFolderId', props);
    return resource.getResponseField('User.RootFolderId') as unknown as string;
  }

  public get recycleBinFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.RecycleBinFolderId'),
        outputPath: 'User.RecycleBinFolderId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.RecycleBinFolderId', props);
    return resource.getResponseField('User.RecycleBinFolderId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.Status'),
        outputPath: 'User.Status',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.Status', props);
    return resource.getResponseField('User.Status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.Type'),
        outputPath: 'User.Type',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.Type', props);
    return resource.getResponseField('User.Type') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.CreatedTimestamp'),
        outputPath: 'User.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.CreatedTimestamp', props);
    return resource.getResponseField('User.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.ModifiedTimestamp'),
        outputPath: 'User.ModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.ModifiedTimestamp', props);
    return resource.getResponseField('User.ModifiedTimestamp') as unknown as string;
  }

  public get timeZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.TimeZoneId'),
        outputPath: 'User.TimeZoneId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.TimeZoneId', props);
    return resource.getResponseField('User.TimeZoneId') as unknown as string;
  }

  public get locale(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.Locale'),
        outputPath: 'User.Locale',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.Locale', props);
    return resource.getResponseField('User.Locale') as unknown as string;
  }

  public get storage(): WorkDocsResponsesFetchCurrentUserUserStorage {
    return new WorkDocsResponsesFetchCurrentUserUserStorage(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesFetchCurrentUserUserStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetCurrentUserRequest) {
  }

  public get storageUtilizedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.Storage.StorageUtilizedInBytes'),
        outputPath: 'User.Storage.StorageUtilizedInBytes',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.Storage.StorageUtilizedInBytes', props);
    return resource.getResponseField('User.Storage.StorageUtilizedInBytes') as unknown as number;
  }

  public get storageRule(): WorkDocsResponsesFetchCurrentUserUserStorageStorageRule {
    return new WorkDocsResponsesFetchCurrentUserUserStorageStorageRule(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesFetchCurrentUserUserStorageStorageRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetCurrentUserRequest) {
  }

  public get storageAllocatedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.Storage.StorageRule.StorageAllocatedInBytes'),
        outputPath: 'User.Storage.StorageRule.StorageAllocatedInBytes',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.Storage.StorageRule.StorageAllocatedInBytes', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageAllocatedInBytes') as unknown as number;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCurrentUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetCurrentUser.User.Storage.StorageRule.StorageType'),
        outputPath: 'User.Storage.StorageRule.StorageType',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCurrentUser.User.Storage.StorageRule.StorageType', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageType') as unknown as string;
  }

}

export class WorkDocsResponsesFetchDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetDocumentRequest) {
  }

  public get metadata(): WorkDocsResponsesFetchDocumentMetadata {
    return new WorkDocsResponsesFetchDocumentMetadata(this.__scope, this.__resources, this.__input);
  }

  public get customMetadata(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.CustomMetadata'),
        outputPath: 'CustomMetadata',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.CustomMetadata', props);
    return resource.getResponseField('CustomMetadata') as unknown as Record<string, string>;
  }

}

export class WorkDocsResponsesFetchDocumentMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetDocumentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.Id'),
        outputPath: 'Metadata.Id',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.Id', props);
    return resource.getResponseField('Metadata.Id') as unknown as string;
  }

  public get creatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.CreatorId'),
        outputPath: 'Metadata.CreatorId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.CreatorId', props);
    return resource.getResponseField('Metadata.CreatorId') as unknown as string;
  }

  public get parentFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.ParentFolderId'),
        outputPath: 'Metadata.ParentFolderId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.ParentFolderId', props);
    return resource.getResponseField('Metadata.ParentFolderId') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.CreatedTimestamp'),
        outputPath: 'Metadata.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.CreatedTimestamp', props);
    return resource.getResponseField('Metadata.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.ModifiedTimestamp'),
        outputPath: 'Metadata.ModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.ModifiedTimestamp', props);
    return resource.getResponseField('Metadata.ModifiedTimestamp') as unknown as string;
  }

  public get latestVersionMetadata(): WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata {
    return new WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata(this.__scope, this.__resources, this.__input);
  }

  public get resourceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.ResourceState'),
        outputPath: 'Metadata.ResourceState',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.ResourceState', props);
    return resource.getResponseField('Metadata.ResourceState') as unknown as string;
  }

  public get labels(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.Labels'),
        outputPath: 'Metadata.Labels',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.Labels', props);
    return resource.getResponseField('Metadata.Labels') as unknown as string[];
  }

}

export class WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetDocumentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.Id'),
        outputPath: 'Metadata.LatestVersionMetadata.Id',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.Id', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.Name'),
        outputPath: 'Metadata.LatestVersionMetadata.Name',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.Name', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Name') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.ContentType'),
        outputPath: 'Metadata.LatestVersionMetadata.ContentType',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.ContentType', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.ContentType') as unknown as string;
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.Size'),
        outputPath: 'Metadata.LatestVersionMetadata.Size',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.Size', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Size') as unknown as number;
  }

  public get signature(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.Signature'),
        outputPath: 'Metadata.LatestVersionMetadata.Signature',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.Signature', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Signature') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.Status'),
        outputPath: 'Metadata.LatestVersionMetadata.Status',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.Status', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Status') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.CreatedTimestamp'),
        outputPath: 'Metadata.LatestVersionMetadata.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.CreatedTimestamp', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.ModifiedTimestamp'),
        outputPath: 'Metadata.LatestVersionMetadata.ModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.ModifiedTimestamp', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.ModifiedTimestamp') as unknown as string;
  }

  public get contentCreatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.ContentCreatedTimestamp'),
        outputPath: 'Metadata.LatestVersionMetadata.ContentCreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.ContentCreatedTimestamp', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.ContentCreatedTimestamp') as unknown as string;
  }

  public get contentModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.ContentModifiedTimestamp'),
        outputPath: 'Metadata.LatestVersionMetadata.ContentModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.ContentModifiedTimestamp', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.ContentModifiedTimestamp') as unknown as string;
  }

  public get creatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.CreatorId'),
        outputPath: 'Metadata.LatestVersionMetadata.CreatorId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.CreatorId', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.CreatorId') as unknown as string;
  }

  public get thumbnail(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.Thumbnail'),
        outputPath: 'Metadata.LatestVersionMetadata.Thumbnail',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.Thumbnail', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Thumbnail') as unknown as Record<string, string>;
  }

  public get source(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocument.Metadata.LatestVersionMetadata.Source'),
        outputPath: 'Metadata.LatestVersionMetadata.Source',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Metadata.LatestVersionMetadata.Source', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Source') as unknown as Record<string, string>;
  }

}

export class WorkDocsResponsesFetchDocumentPath {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetDocumentPathRequest) {
  }

  public get path(): WorkDocsResponsesFetchDocumentPathPath {
    return new WorkDocsResponsesFetchDocumentPathPath(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesFetchDocumentPathPath {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetDocumentPathRequest) {
  }

  public get components(): shapes.WorkDocsResourcePathComponent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentPath',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentPath.Path.Components'),
        outputPath: 'Path.Components',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          Limit: this.__input.limit,
          Fields: this.__input.fields,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentPath.Path.Components', props);
    return resource.getResponseField('Path.Components') as unknown as shapes.WorkDocsResourcePathComponent[];
  }

}

export class WorkDocsResponsesFetchDocumentVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetDocumentVersionRequest) {
  }

  public get metadata(): WorkDocsResponsesFetchDocumentVersionMetadata {
    return new WorkDocsResponsesFetchDocumentVersionMetadata(this.__scope, this.__resources, this.__input);
  }

  public get customMetadata(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.CustomMetadata'),
        outputPath: 'CustomMetadata',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.CustomMetadata', props);
    return resource.getResponseField('CustomMetadata') as unknown as Record<string, string>;
  }

}

export class WorkDocsResponsesFetchDocumentVersionMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetDocumentVersionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.Id'),
        outputPath: 'Metadata.Id',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.Id', props);
    return resource.getResponseField('Metadata.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.Name'),
        outputPath: 'Metadata.Name',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.Name', props);
    return resource.getResponseField('Metadata.Name') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.ContentType'),
        outputPath: 'Metadata.ContentType',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.ContentType', props);
    return resource.getResponseField('Metadata.ContentType') as unknown as string;
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.Size'),
        outputPath: 'Metadata.Size',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.Size', props);
    return resource.getResponseField('Metadata.Size') as unknown as number;
  }

  public get signature(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.Signature'),
        outputPath: 'Metadata.Signature',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.Signature', props);
    return resource.getResponseField('Metadata.Signature') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.Status'),
        outputPath: 'Metadata.Status',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.Status', props);
    return resource.getResponseField('Metadata.Status') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.CreatedTimestamp'),
        outputPath: 'Metadata.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.CreatedTimestamp', props);
    return resource.getResponseField('Metadata.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.ModifiedTimestamp'),
        outputPath: 'Metadata.ModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.ModifiedTimestamp', props);
    return resource.getResponseField('Metadata.ModifiedTimestamp') as unknown as string;
  }

  public get contentCreatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.ContentCreatedTimestamp'),
        outputPath: 'Metadata.ContentCreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.ContentCreatedTimestamp', props);
    return resource.getResponseField('Metadata.ContentCreatedTimestamp') as unknown as string;
  }

  public get contentModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.ContentModifiedTimestamp'),
        outputPath: 'Metadata.ContentModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.ContentModifiedTimestamp', props);
    return resource.getResponseField('Metadata.ContentModifiedTimestamp') as unknown as string;
  }

  public get creatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.CreatorId'),
        outputPath: 'Metadata.CreatorId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.CreatorId', props);
    return resource.getResponseField('Metadata.CreatorId') as unknown as string;
  }

  public get thumbnail(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.Thumbnail'),
        outputPath: 'Metadata.Thumbnail',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.Thumbnail', props);
    return resource.getResponseField('Metadata.Thumbnail') as unknown as Record<string, string>;
  }

  public get source(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentVersion',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetDocumentVersion.Metadata.Source'),
        outputPath: 'Metadata.Source',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          DocumentId: this.__input.documentId,
          VersionId: this.__input.versionId,
          Fields: this.__input.fields,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentVersion.Metadata.Source', props);
    return resource.getResponseField('Metadata.Source') as unknown as Record<string, string>;
  }

}

export class WorkDocsResponsesFetchFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetFolderRequest) {
  }

  public get metadata(): WorkDocsResponsesFetchFolderMetadata {
    return new WorkDocsResponsesFetchFolderMetadata(this.__scope, this.__resources, this.__input);
  }

  public get customMetadata(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.CustomMetadata'),
        outputPath: 'CustomMetadata',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.CustomMetadata', props);
    return resource.getResponseField('CustomMetadata') as unknown as Record<string, string>;
  }

}

export class WorkDocsResponsesFetchFolderMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetFolderRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.Id'),
        outputPath: 'Metadata.Id',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.Id', props);
    return resource.getResponseField('Metadata.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.Name'),
        outputPath: 'Metadata.Name',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.Name', props);
    return resource.getResponseField('Metadata.Name') as unknown as string;
  }

  public get creatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.CreatorId'),
        outputPath: 'Metadata.CreatorId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.CreatorId', props);
    return resource.getResponseField('Metadata.CreatorId') as unknown as string;
  }

  public get parentFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.ParentFolderId'),
        outputPath: 'Metadata.ParentFolderId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.ParentFolderId', props);
    return resource.getResponseField('Metadata.ParentFolderId') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.CreatedTimestamp'),
        outputPath: 'Metadata.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.CreatedTimestamp', props);
    return resource.getResponseField('Metadata.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.ModifiedTimestamp'),
        outputPath: 'Metadata.ModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.ModifiedTimestamp', props);
    return resource.getResponseField('Metadata.ModifiedTimestamp') as unknown as string;
  }

  public get resourceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.ResourceState'),
        outputPath: 'Metadata.ResourceState',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.ResourceState', props);
    return resource.getResponseField('Metadata.ResourceState') as unknown as string;
  }

  public get signature(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.Signature'),
        outputPath: 'Metadata.Signature',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.Signature', props);
    return resource.getResponseField('Metadata.Signature') as unknown as string;
  }

  public get labels(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.Labels'),
        outputPath: 'Metadata.Labels',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.Labels', props);
    return resource.getResponseField('Metadata.Labels') as unknown as string[];
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.Size'),
        outputPath: 'Metadata.Size',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.Size', props);
    return resource.getResponseField('Metadata.Size') as unknown as number;
  }

  public get latestVersionSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolder.Metadata.LatestVersionSize'),
        outputPath: 'Metadata.LatestVersionSize',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          IncludeCustomMetadata: this.__input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.Metadata.LatestVersionSize', props);
    return resource.getResponseField('Metadata.LatestVersionSize') as unknown as number;
  }

}

export class WorkDocsResponsesFetchFolderPath {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetFolderPathRequest) {
  }

  public get path(): WorkDocsResponsesFetchFolderPathPath {
    return new WorkDocsResponsesFetchFolderPathPath(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesFetchFolderPathPath {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetFolderPathRequest) {
  }

  public get components(): shapes.WorkDocsResourcePathComponent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolderPath',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetFolderPath.Path.Components'),
        outputPath: 'Path.Components',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          FolderId: this.__input.folderId,
          Limit: this.__input.limit,
          Fields: this.__input.fields,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolderPath.Path.Components', props);
    return resource.getResponseField('Path.Components') as unknown as shapes.WorkDocsResourcePathComponent[];
  }

}

export class WorkDocsResponsesFetchResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsGetResourcesRequest) {
  }

  public get folders(): shapes.WorkDocsFolderMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResources',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetResources.Folders'),
        outputPath: 'Folders',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          CollectionType: this.__input.collectionType,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResources.Folders', props);
    return resource.getResponseField('Folders') as unknown as shapes.WorkDocsFolderMetadata[];
  }

  public get documents(): shapes.WorkDocsDocumentMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResources',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetResources.Documents'),
        outputPath: 'Documents',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          CollectionType: this.__input.collectionType,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResources.Documents', props);
    return resource.getResponseField('Documents') as unknown as shapes.WorkDocsDocumentMetadata[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResources',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.GetResources.Marker'),
        outputPath: 'Marker',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          CollectionType: this.__input.collectionType,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResources.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsResponsesInitiateDocumentVersionUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsInitiateDocumentVersionUploadRequest) {
  }

  public get metadata(): WorkDocsResponsesInitiateDocumentVersionUploadMetadata {
    return new WorkDocsResponsesInitiateDocumentVersionUploadMetadata(this.__scope, this.__resources, this.__input);
  }

  public get uploadMetadata(): WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata {
    return new WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesInitiateDocumentVersionUploadMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsInitiateDocumentVersionUploadRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.Id'),
        outputPath: 'Metadata.Id',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.Id', props);
    return resource.getResponseField('Metadata.Id') as unknown as string;
  }

  public get creatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.CreatorId'),
        outputPath: 'Metadata.CreatorId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.CreatorId', props);
    return resource.getResponseField('Metadata.CreatorId') as unknown as string;
  }

  public get parentFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.ParentFolderId'),
        outputPath: 'Metadata.ParentFolderId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.ParentFolderId', props);
    return resource.getResponseField('Metadata.ParentFolderId') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.CreatedTimestamp'),
        outputPath: 'Metadata.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.CreatedTimestamp', props);
    return resource.getResponseField('Metadata.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.ModifiedTimestamp'),
        outputPath: 'Metadata.ModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.ModifiedTimestamp', props);
    return resource.getResponseField('Metadata.ModifiedTimestamp') as unknown as string;
  }

  public get latestVersionMetadata(): WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata {
    return new WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata(this.__scope, this.__resources, this.__input);
  }

  public get resourceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.ResourceState'),
        outputPath: 'Metadata.ResourceState',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.ResourceState', props);
    return resource.getResponseField('Metadata.ResourceState') as unknown as string;
  }

  public get labels(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.Labels'),
        outputPath: 'Metadata.Labels',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.Labels', props);
    return resource.getResponseField('Metadata.Labels') as unknown as string[];
  }

}

export class WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsInitiateDocumentVersionUploadRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Id'),
        outputPath: 'Metadata.LatestVersionMetadata.Id',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Id', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Name'),
        outputPath: 'Metadata.LatestVersionMetadata.Name',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Name', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Name') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ContentType'),
        outputPath: 'Metadata.LatestVersionMetadata.ContentType',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ContentType', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.ContentType') as unknown as string;
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Size'),
        outputPath: 'Metadata.LatestVersionMetadata.Size',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Size', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Size') as unknown as number;
  }

  public get signature(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Signature'),
        outputPath: 'Metadata.LatestVersionMetadata.Signature',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Signature', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Signature') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Status'),
        outputPath: 'Metadata.LatestVersionMetadata.Status',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Status', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Status') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.CreatedTimestamp'),
        outputPath: 'Metadata.LatestVersionMetadata.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.CreatedTimestamp', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ModifiedTimestamp'),
        outputPath: 'Metadata.LatestVersionMetadata.ModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ModifiedTimestamp', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.ModifiedTimestamp') as unknown as string;
  }

  public get contentCreatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ContentCreatedTimestamp'),
        outputPath: 'Metadata.LatestVersionMetadata.ContentCreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ContentCreatedTimestamp', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.ContentCreatedTimestamp') as unknown as string;
  }

  public get contentModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ContentModifiedTimestamp'),
        outputPath: 'Metadata.LatestVersionMetadata.ContentModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ContentModifiedTimestamp', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.ContentModifiedTimestamp') as unknown as string;
  }

  public get creatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.CreatorId'),
        outputPath: 'Metadata.LatestVersionMetadata.CreatorId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.CreatorId', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.CreatorId') as unknown as string;
  }

  public get thumbnail(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Thumbnail'),
        outputPath: 'Metadata.LatestVersionMetadata.Thumbnail',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Thumbnail', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Thumbnail') as unknown as Record<string, string>;
  }

  public get source(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Source'),
        outputPath: 'Metadata.LatestVersionMetadata.Source',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Source', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Source') as unknown as Record<string, string>;
  }

}

export class WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsInitiateDocumentVersionUploadRequest) {
  }

  public get uploadUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.UploadMetadata.UploadUrl'),
        outputPath: 'UploadMetadata.UploadUrl',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.UploadMetadata.UploadUrl', props);
    return resource.getResponseField('UploadMetadata.UploadUrl') as unknown as string;
  }

  public get signedHeaders(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateDocumentVersionUpload',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.InitiateDocumentVersionUpload.UploadMetadata.SignedHeaders'),
        outputPath: 'UploadMetadata.SignedHeaders',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          Id: this.__input.id,
          Name: this.__input.name,
          ContentCreatedTimestamp: this.__input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.__input.contentModifiedTimestamp,
          ContentType: this.__input.contentType,
          DocumentSizeInBytes: this.__input.documentSizeInBytes,
          ParentFolderId: this.__input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateDocumentVersionUpload.UploadMetadata.SignedHeaders', props);
    return resource.getResponseField('UploadMetadata.SignedHeaders') as unknown as Record<string, string>;
  }

}

export class WorkDocsResponsesUpdateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsUpdateUserRequest) {
  }

  public get user(): WorkDocsResponsesUpdateUserUser {
    return new WorkDocsResponsesUpdateUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesUpdateUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsUpdateUserRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.Id'),
        outputPath: 'User.Id',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Id', props);
    return resource.getResponseField('User.Id') as unknown as string;
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.Username'),
        outputPath: 'User.Username',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Username', props);
    return resource.getResponseField('User.Username') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.EmailAddress'),
        outputPath: 'User.EmailAddress',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.EmailAddress', props);
    return resource.getResponseField('User.EmailAddress') as unknown as string;
  }

  public get givenName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.GivenName'),
        outputPath: 'User.GivenName',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.GivenName', props);
    return resource.getResponseField('User.GivenName') as unknown as string;
  }

  public get surname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.Surname'),
        outputPath: 'User.Surname',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Surname', props);
    return resource.getResponseField('User.Surname') as unknown as string;
  }

  public get organizationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.OrganizationId'),
        outputPath: 'User.OrganizationId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.OrganizationId', props);
    return resource.getResponseField('User.OrganizationId') as unknown as string;
  }

  public get rootFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.RootFolderId'),
        outputPath: 'User.RootFolderId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.RootFolderId', props);
    return resource.getResponseField('User.RootFolderId') as unknown as string;
  }

  public get recycleBinFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.RecycleBinFolderId'),
        outputPath: 'User.RecycleBinFolderId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.RecycleBinFolderId', props);
    return resource.getResponseField('User.RecycleBinFolderId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.Status'),
        outputPath: 'User.Status',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Status', props);
    return resource.getResponseField('User.Status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.Type'),
        outputPath: 'User.Type',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Type', props);
    return resource.getResponseField('User.Type') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.CreatedTimestamp'),
        outputPath: 'User.CreatedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.CreatedTimestamp', props);
    return resource.getResponseField('User.CreatedTimestamp') as unknown as string;
  }

  public get modifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.ModifiedTimestamp'),
        outputPath: 'User.ModifiedTimestamp',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.ModifiedTimestamp', props);
    return resource.getResponseField('User.ModifiedTimestamp') as unknown as string;
  }

  public get timeZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.TimeZoneId'),
        outputPath: 'User.TimeZoneId',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.TimeZoneId', props);
    return resource.getResponseField('User.TimeZoneId') as unknown as string;
  }

  public get locale(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.Locale'),
        outputPath: 'User.Locale',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Locale', props);
    return resource.getResponseField('User.Locale') as unknown as string;
  }

  public get storage(): WorkDocsResponsesUpdateUserUserStorage {
    return new WorkDocsResponsesUpdateUserUserStorage(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesUpdateUserUserStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsUpdateUserRequest) {
  }

  public get storageUtilizedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.Storage.StorageUtilizedInBytes'),
        outputPath: 'User.Storage.StorageUtilizedInBytes',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Storage.StorageUtilizedInBytes', props);
    return resource.getResponseField('User.Storage.StorageUtilizedInBytes') as unknown as number;
  }

  public get storageRule(): WorkDocsResponsesUpdateUserUserStorageStorageRule {
    return new WorkDocsResponsesUpdateUserUserStorageStorageRule(this.__scope, this.__resources, this.__input);
  }

}

export class WorkDocsResponsesUpdateUserUserStorageStorageRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkDocsUpdateUserRequest) {
  }

  public get storageAllocatedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.Storage.StorageRule.StorageAllocatedInBytes'),
        outputPath: 'User.Storage.StorageRule.StorageAllocatedInBytes',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Storage.StorageRule.StorageAllocatedInBytes', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageAllocatedInBytes') as unknown as number;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'WorkDocs',
        physicalResourceId: cr.PhysicalResourceId.of('WorkDocs.UpdateUser.User.Storage.StorageRule.StorageType'),
        outputPath: 'User.Storage.StorageRule.StorageType',
        parameters: {
          AuthenticationToken: this.__input.authenticationToken,
          UserId: this.__input.userId,
          GivenName: this.__input.givenName,
          Surname: this.__input.surname,
          Type: this.__input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.__input.storageRule?.storageAllocatedInBytes,
            StorageType: this.__input.storageRule?.storageType,
          },
          TimeZoneId: this.__input.timeZoneId,
          Locale: this.__input.locale,
          GrantPoweruserPrivileges: this.__input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Storage.StorageRule.StorageType', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageType') as unknown as string;
  }

}

