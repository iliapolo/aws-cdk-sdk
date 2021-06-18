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

  public activateUser(input: shapes.WorkDocsActivateUserRequest): WorkDocsActivateUser {
    return new WorkDocsActivateUser(this, 'ActivateUser', this.__resources, input);
  }

  public addResourcePermissions(input: shapes.WorkDocsAddResourcePermissionsRequest): WorkDocsAddResourcePermissions {
    return new WorkDocsAddResourcePermissions(this, 'AddResourcePermissions', this.__resources, input);
  }

  public createComment(input: shapes.WorkDocsCreateCommentRequest): WorkDocsCreateComment {
    return new WorkDocsCreateComment(this, 'CreateComment', this.__resources, input);
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

  public createFolder(input: shapes.WorkDocsCreateFolderRequest): WorkDocsCreateFolder {
    return new WorkDocsCreateFolder(this, 'CreateFolder', this.__resources, input);
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

  public createNotificationSubscription(input: shapes.WorkDocsCreateNotificationSubscriptionRequest): WorkDocsCreateNotificationSubscription {
    return new WorkDocsCreateNotificationSubscription(this, 'CreateNotificationSubscription', this.__resources, input);
  }

  public createUser(input: shapes.WorkDocsCreateUserRequest): WorkDocsCreateUser {
    return new WorkDocsCreateUser(this, 'CreateUser', this.__resources, input);
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

  public describeActivities(input: shapes.WorkDocsDescribeActivitiesRequest): WorkDocsDescribeActivities {
    return new WorkDocsDescribeActivities(this, 'DescribeActivities', this.__resources, input);
  }

  public describeComments(input: shapes.WorkDocsDescribeCommentsRequest): WorkDocsDescribeComments {
    return new WorkDocsDescribeComments(this, 'DescribeComments', this.__resources, input);
  }

  public describeDocumentVersions(input: shapes.WorkDocsDescribeDocumentVersionsRequest): WorkDocsDescribeDocumentVersions {
    return new WorkDocsDescribeDocumentVersions(this, 'DescribeDocumentVersions', this.__resources, input);
  }

  public describeFolderContents(input: shapes.WorkDocsDescribeFolderContentsRequest): WorkDocsDescribeFolderContents {
    return new WorkDocsDescribeFolderContents(this, 'DescribeFolderContents', this.__resources, input);
  }

  public describeGroups(input: shapes.WorkDocsDescribeGroupsRequest): WorkDocsDescribeGroups {
    return new WorkDocsDescribeGroups(this, 'DescribeGroups', this.__resources, input);
  }

  public describeNotificationSubscriptions(input: shapes.WorkDocsDescribeNotificationSubscriptionsRequest): WorkDocsDescribeNotificationSubscriptions {
    return new WorkDocsDescribeNotificationSubscriptions(this, 'DescribeNotificationSubscriptions', this.__resources, input);
  }

  public describeResourcePermissions(input: shapes.WorkDocsDescribeResourcePermissionsRequest): WorkDocsDescribeResourcePermissions {
    return new WorkDocsDescribeResourcePermissions(this, 'DescribeResourcePermissions', this.__resources, input);
  }

  public describeRootFolders(input: shapes.WorkDocsDescribeRootFoldersRequest): WorkDocsDescribeRootFolders {
    return new WorkDocsDescribeRootFolders(this, 'DescribeRootFolders', this.__resources, input);
  }

  public describeUsers(input: shapes.WorkDocsDescribeUsersRequest): WorkDocsDescribeUsers {
    return new WorkDocsDescribeUsers(this, 'DescribeUsers', this.__resources, input);
  }

  public fetchCurrentUser(input: shapes.WorkDocsGetCurrentUserRequest): WorkDocsFetchCurrentUser {
    return new WorkDocsFetchCurrentUser(this, 'FetchCurrentUser', this.__resources, input);
  }

  public fetchDocument(input: shapes.WorkDocsGetDocumentRequest): WorkDocsFetchDocument {
    return new WorkDocsFetchDocument(this, 'FetchDocument', this.__resources, input);
  }

  public fetchDocumentPath(input: shapes.WorkDocsGetDocumentPathRequest): WorkDocsFetchDocumentPath {
    return new WorkDocsFetchDocumentPath(this, 'FetchDocumentPath', this.__resources, input);
  }

  public fetchDocumentVersion(input: shapes.WorkDocsGetDocumentVersionRequest): WorkDocsFetchDocumentVersion {
    return new WorkDocsFetchDocumentVersion(this, 'FetchDocumentVersion', this.__resources, input);
  }

  public fetchFolder(input: shapes.WorkDocsGetFolderRequest): WorkDocsFetchFolder {
    return new WorkDocsFetchFolder(this, 'FetchFolder', this.__resources, input);
  }

  public fetchFolderPath(input: shapes.WorkDocsGetFolderPathRequest): WorkDocsFetchFolderPath {
    return new WorkDocsFetchFolderPath(this, 'FetchFolderPath', this.__resources, input);
  }

  public fetchResources(input: shapes.WorkDocsGetResourcesRequest): WorkDocsFetchResources {
    return new WorkDocsFetchResources(this, 'FetchResources', this.__resources, input);
  }

  public initiateDocumentVersionUpload(input: shapes.WorkDocsInitiateDocumentVersionUploadRequest): WorkDocsInitiateDocumentVersionUpload {
    return new WorkDocsInitiateDocumentVersionUpload(this, 'InitiateDocumentVersionUpload', this.__resources, input);
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

  public updateUser(input: shapes.WorkDocsUpdateUserRequest): WorkDocsUpdateUser {
    return new WorkDocsUpdateUser(this, 'UpdateUser', this.__resources, input);
  }

}

export class WorkDocsActivateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsActivateUserRequest) {
    super(scope, id);
  }

  public get user(): WorkDocsActivateUserUser {
    return new WorkDocsActivateUserUser(this, 'User', this.__resources, this.input);
  }

}

export class WorkDocsActivateUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsActivateUserRequest) {
    super(scope, id);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.Id', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.Username', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.EmailAddress', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.GivenName', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.Surname', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.OrganizationId', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.RootFolderId', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.RecycleBinFolderId', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.Status', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.Type', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.CreatedTimestamp', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.ModifiedTimestamp', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.TimeZoneId', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.Locale', props);
    return resource.getResponseField('User.Locale') as unknown as string;
  }

  public get storage(): WorkDocsActivateUserUserStorage {
    return new WorkDocsActivateUserUserStorage(this, 'Storage', this.__resources, this.input);
  }

}

export class WorkDocsActivateUserUserStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsActivateUserRequest) {
    super(scope, id);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.Storage.StorageUtilizedInBytes', props);
    return resource.getResponseField('User.Storage.StorageUtilizedInBytes') as unknown as number;
  }

  public get storageRule(): WorkDocsActivateUserUserStorageStorageRule {
    return new WorkDocsActivateUserUserStorageStorageRule(this, 'StorageRule', this.__resources, this.input);
  }

}

export class WorkDocsActivateUserUserStorageStorageRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsActivateUserRequest) {
    super(scope, id);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.Storage.StorageRule.StorageAllocatedInBytes', props);
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
          UserId: this.input.userId,
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateUser.User.Storage.StorageRule.StorageType', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageType') as unknown as string;
  }

}

export class WorkDocsAddResourcePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsAddResourcePermissionsRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          ResourceId: this.input.resourceId,
          Principals: this.input.principals,
          NotificationOptions: {
            SendEmail: this.input.notificationOptions?.sendEmail,
            EmailMessage: this.input.notificationOptions?.emailMessage,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddResourcePermissions.ShareResults', props);
    return resource.getResponseField('ShareResults') as unknown as shapes.WorkDocsShareResult[];
  }

}

export class WorkDocsCreateComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateCommentRequest) {
    super(scope, id);
  }

  public get comment(): WorkDocsCreateCommentComment {
    return new WorkDocsCreateCommentComment(this, 'Comment', this.__resources, this.input);
  }

}

export class WorkDocsCreateCommentComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateCommentRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.CommentId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.ParentId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.ThreadId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Text', props);
    return resource.getResponseField('Comment.Text') as unknown as string;
  }

  public get contributor(): WorkDocsCreateCommentCommentContributor {
    return new WorkDocsCreateCommentCommentContributor(this, 'Contributor', this.__resources, this.input);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Status', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Visibility', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.RecipientId', props);
    return resource.getResponseField('Comment.RecipientId') as unknown as string;
  }

}

export class WorkDocsCreateCommentCommentContributor extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateCommentRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.Id', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.Username', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.EmailAddress', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.GivenName', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.Surname', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.OrganizationId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.RootFolderId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.RecycleBinFolderId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.Status', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.Type', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.ModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.TimeZoneId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.Locale', props);
    return resource.getResponseField('Comment.Contributor.Locale') as unknown as string;
  }

  public get storage(): WorkDocsCreateCommentCommentContributorStorage {
    return new WorkDocsCreateCommentCommentContributorStorage(this, 'Storage', this.__resources, this.input);
  }

}

export class WorkDocsCreateCommentCommentContributorStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateCommentRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.Storage.StorageUtilizedInBytes', props);
    return resource.getResponseField('Comment.Contributor.Storage.StorageUtilizedInBytes') as unknown as number;
  }

  public get storageRule(): WorkDocsCreateCommentCommentContributorStorageStorageRule {
    return new WorkDocsCreateCommentCommentContributorStorageStorageRule(this, 'StorageRule', this.__resources, this.input);
  }

}

export class WorkDocsCreateCommentCommentContributorStorageStorageRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateCommentRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.Storage.StorageRule.StorageAllocatedInBytes', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          ParentId: this.input.parentId,
          ThreadId: this.input.threadId,
          Text: this.input.text,
          Visibility: this.input.visibility,
          NotifyCollaborators: this.input.notifyCollaborators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComment.Comment.Contributor.Storage.StorageRule.StorageType', props);
    return resource.getResponseField('Comment.Contributor.Storage.StorageRule.StorageType') as unknown as string;
  }

}

export class WorkDocsCreateFolder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateFolderRequest) {
    super(scope, id);
  }

  public get metadata(): WorkDocsCreateFolderMetadata {
    return new WorkDocsCreateFolderMetadata(this, 'Metadata', this.__resources, this.input);
  }

}

export class WorkDocsCreateFolderMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateFolderRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.Id', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.Name', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.CreatorId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.ParentFolderId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.ModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.ResourceState', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.Signature', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.Labels', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.Size', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Name: this.input.name,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFolder.Metadata.LatestVersionSize', props);
    return resource.getResponseField('Metadata.LatestVersionSize') as unknown as number;
  }

}

export class WorkDocsCreateNotificationSubscription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateNotificationSubscriptionRequest) {
    super(scope, id);
  }

  public get subscription(): WorkDocsCreateNotificationSubscriptionSubscription {
    return new WorkDocsCreateNotificationSubscriptionSubscription(this, 'Subscription', this.__resources, this.input);
  }

}

export class WorkDocsCreateNotificationSubscriptionSubscription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateNotificationSubscriptionRequest) {
    super(scope, id);
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
          OrganizationId: this.input.organizationId,
          Endpoint: this.input.endpoint,
          Protocol: this.input.protocol,
          SubscriptionType: this.input.subscriptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNotificationSubscription.Subscription.SubscriptionId', props);
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
          OrganizationId: this.input.organizationId,
          Endpoint: this.input.endpoint,
          Protocol: this.input.protocol,
          SubscriptionType: this.input.subscriptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNotificationSubscription.Subscription.EndPoint', props);
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
          OrganizationId: this.input.organizationId,
          Endpoint: this.input.endpoint,
          Protocol: this.input.protocol,
          SubscriptionType: this.input.subscriptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNotificationSubscription.Subscription.Protocol', props);
    return resource.getResponseField('Subscription.Protocol') as unknown as string;
  }

}

export class WorkDocsCreateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateUserRequest) {
    super(scope, id);
  }

  public get user(): WorkDocsCreateUserUser {
    return new WorkDocsCreateUserUser(this, 'User', this.__resources, this.input);
  }

}

export class WorkDocsCreateUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateUserRequest) {
    super(scope, id);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Id', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Username', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.EmailAddress', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.GivenName', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Surname', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.OrganizationId', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.RootFolderId', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.RecycleBinFolderId', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Status', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Type', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.CreatedTimestamp', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.ModifiedTimestamp', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.TimeZoneId', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Locale', props);
    return resource.getResponseField('User.Locale') as unknown as string;
  }

  public get storage(): WorkDocsCreateUserUserStorage {
    return new WorkDocsCreateUserUserStorage(this, 'Storage', this.__resources, this.input);
  }

}

export class WorkDocsCreateUserUserStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateUserRequest) {
    super(scope, id);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Storage.StorageUtilizedInBytes', props);
    return resource.getResponseField('User.Storage.StorageUtilizedInBytes') as unknown as number;
  }

  public get storageRule(): WorkDocsCreateUserUserStorageStorageRule {
    return new WorkDocsCreateUserUserStorageStorageRule(this, 'StorageRule', this.__resources, this.input);
  }

}

export class WorkDocsCreateUserUserStorageStorageRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsCreateUserRequest) {
    super(scope, id);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Storage.StorageRule.StorageAllocatedInBytes', props);
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
          OrganizationId: this.input.organizationId,
          Username: this.input.username,
          EmailAddress: this.input.emailAddress,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Password: this.input.password,
          TimeZoneId: this.input.timeZoneId,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Storage.StorageRule.StorageType', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageType') as unknown as string;
  }

}

export class WorkDocsDescribeActivities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsDescribeActivitiesRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          OrganizationId: this.input.organizationId,
          ActivityTypes: this.input.activityTypes,
          ResourceId: this.input.resourceId,
          UserId: this.input.userId,
          IncludeIndirectActivities: this.input.includeIndirectActivities,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivities.UserActivities', props);
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
          AuthenticationToken: this.input.authenticationToken,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          OrganizationId: this.input.organizationId,
          ActivityTypes: this.input.activityTypes,
          ResourceId: this.input.resourceId,
          UserId: this.input.userId,
          IncludeIndirectActivities: this.input.includeIndirectActivities,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivities.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsDescribeComments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsDescribeCommentsRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComments.Comments', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComments.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsDescribeDocumentVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsDescribeDocumentVersionsRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          Marker: this.input.marker,
          Limit: this.input.limit,
          Include: this.input.include,
          Fields: this.input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentVersions.DocumentVersions', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          Marker: this.input.marker,
          Limit: this.input.limit,
          Include: this.input.include,
          Fields: this.input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentVersions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsDescribeFolderContents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsDescribeFolderContentsRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          Sort: this.input.sort,
          Order: this.input.order,
          Limit: this.input.limit,
          Marker: this.input.marker,
          Type: this.input.type,
          Include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFolderContents.Folders', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          Sort: this.input.sort,
          Order: this.input.order,
          Limit: this.input.limit,
          Marker: this.input.marker,
          Type: this.input.type,
          Include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFolderContents.Documents', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          Sort: this.input.sort,
          Order: this.input.order,
          Limit: this.input.limit,
          Marker: this.input.marker,
          Type: this.input.type,
          Include: this.input.include,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFolderContents.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsDescribeGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsDescribeGroupsRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          SearchQuery: this.input.searchQuery,
          OrganizationId: this.input.organizationId,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroups.Groups', props);
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
          AuthenticationToken: this.input.authenticationToken,
          SearchQuery: this.input.searchQuery,
          OrganizationId: this.input.organizationId,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsDescribeNotificationSubscriptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsDescribeNotificationSubscriptionsRequest) {
    super(scope, id);
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
          OrganizationId: this.input.organizationId,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationSubscriptions.Subscriptions', props);
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
          OrganizationId: this.input.organizationId,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationSubscriptions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsDescribeResourcePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsDescribeResourcePermissionsRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          ResourceId: this.input.resourceId,
          PrincipalId: this.input.principalId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResourcePermissions.Principals', props);
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
          AuthenticationToken: this.input.authenticationToken,
          ResourceId: this.input.resourceId,
          PrincipalId: this.input.principalId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResourcePermissions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsDescribeRootFolders extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsDescribeRootFoldersRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRootFolders.Folders', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRootFolders.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsDescribeUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsDescribeUsersRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          OrganizationId: this.input.organizationId,
          UserIds: this.input.userIds,
          Query: this.input.query,
          Include: this.input.include,
          Order: this.input.order,
          Sort: this.input.sort,
          Marker: this.input.marker,
          Limit: this.input.limit,
          Fields: this.input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUsers.Users', props);
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
          AuthenticationToken: this.input.authenticationToken,
          OrganizationId: this.input.organizationId,
          UserIds: this.input.userIds,
          Query: this.input.query,
          Include: this.input.include,
          Order: this.input.order,
          Sort: this.input.sort,
          Marker: this.input.marker,
          Limit: this.input.limit,
          Fields: this.input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUsers.TotalNumberOfUsers', props);
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
          AuthenticationToken: this.input.authenticationToken,
          OrganizationId: this.input.organizationId,
          UserIds: this.input.userIds,
          Query: this.input.query,
          Include: this.input.include,
          Order: this.input.order,
          Sort: this.input.sort,
          Marker: this.input.marker,
          Limit: this.input.limit,
          Fields: this.input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUsers.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsFetchCurrentUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetCurrentUserRequest) {
    super(scope, id);
  }

  public get user(): WorkDocsFetchCurrentUserUser {
    return new WorkDocsFetchCurrentUserUser(this, 'User', this.__resources, this.input);
  }

}

export class WorkDocsFetchCurrentUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetCurrentUserRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.Id', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.Username', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.EmailAddress', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.GivenName', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.Surname', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.OrganizationId', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.RootFolderId', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.RecycleBinFolderId', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.Status', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.Type', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.ModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.TimeZoneId', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.Locale', props);
    return resource.getResponseField('User.Locale') as unknown as string;
  }

  public get storage(): WorkDocsFetchCurrentUserUserStorage {
    return new WorkDocsFetchCurrentUserUserStorage(this, 'Storage', this.__resources, this.input);
  }

}

export class WorkDocsFetchCurrentUserUserStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetCurrentUserRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.Storage.StorageUtilizedInBytes', props);
    return resource.getResponseField('User.Storage.StorageUtilizedInBytes') as unknown as number;
  }

  public get storageRule(): WorkDocsFetchCurrentUserUserStorageStorageRule {
    return new WorkDocsFetchCurrentUserUserStorageStorageRule(this, 'StorageRule', this.__resources, this.input);
  }

}

export class WorkDocsFetchCurrentUserUserStorageStorageRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetCurrentUserRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.Storage.StorageRule.StorageAllocatedInBytes', props);
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
          AuthenticationToken: this.input.authenticationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCurrentUser.User.Storage.StorageRule.StorageType', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageType') as unknown as string;
  }

}

export class WorkDocsFetchDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetDocumentRequest) {
    super(scope, id);
  }

  public get metadata(): WorkDocsFetchDocumentMetadata {
    return new WorkDocsFetchDocumentMetadata(this, 'Metadata', this.__resources, this.input);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.CustomMetadata', props);
    return resource.getResponseField('CustomMetadata') as unknown as Record<string, string>;
  }

}

export class WorkDocsFetchDocumentMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetDocumentRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.Id', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.CreatorId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.ParentFolderId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.ModifiedTimestamp', props);
    return resource.getResponseField('Metadata.ModifiedTimestamp') as unknown as string;
  }

  public get latestVersionMetadata(): WorkDocsFetchDocumentMetadataLatestVersionMetadata {
    return new WorkDocsFetchDocumentMetadataLatestVersionMetadata(this, 'LatestVersionMetadata', this.__resources, this.input);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.ResourceState', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.Labels', props);
    return resource.getResponseField('Metadata.Labels') as unknown as string[];
  }

}

export class WorkDocsFetchDocumentMetadataLatestVersionMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetDocumentRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.Id', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.Name', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.ContentType', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.Size', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.Signature', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.Status', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.ModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.ContentCreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.ContentModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.CreatorId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.Thumbnail', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Metadata.LatestVersionMetadata.Source', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Source') as unknown as Record<string, string>;
  }

}

export class WorkDocsFetchDocumentPath extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetDocumentPathRequest) {
    super(scope, id);
  }

  public get path(): WorkDocsFetchDocumentPathPath {
    return new WorkDocsFetchDocumentPathPath(this, 'Path', this.__resources, this.input);
  }

}

export class WorkDocsFetchDocumentPathPath extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetDocumentPathRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          Limit: this.input.limit,
          Fields: this.input.fields,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentPath.Path.Components', props);
    return resource.getResponseField('Path.Components') as unknown as shapes.WorkDocsResourcePathComponent[];
  }

}

export class WorkDocsFetchDocumentVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetDocumentVersionRequest) {
    super(scope, id);
  }

  public get metadata(): WorkDocsFetchDocumentVersionMetadata {
    return new WorkDocsFetchDocumentVersionMetadata(this, 'Metadata', this.__resources, this.input);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.CustomMetadata', props);
    return resource.getResponseField('CustomMetadata') as unknown as Record<string, string>;
  }

}

export class WorkDocsFetchDocumentVersionMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetDocumentVersionRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.Id', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.Name', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.ContentType', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.Size', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.Signature', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.Status', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.ModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.ContentCreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.ContentModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.CreatorId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.Thumbnail', props);
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
          AuthenticationToken: this.input.authenticationToken,
          DocumentId: this.input.documentId,
          VersionId: this.input.versionId,
          Fields: this.input.fields,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentVersion.Metadata.Source', props);
    return resource.getResponseField('Metadata.Source') as unknown as Record<string, string>;
  }

}

export class WorkDocsFetchFolder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetFolderRequest) {
    super(scope, id);
  }

  public get metadata(): WorkDocsFetchFolderMetadata {
    return new WorkDocsFetchFolderMetadata(this, 'Metadata', this.__resources, this.input);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.CustomMetadata', props);
    return resource.getResponseField('CustomMetadata') as unknown as Record<string, string>;
  }

}

export class WorkDocsFetchFolderMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetFolderRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.Id', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.Name', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.CreatorId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.ParentFolderId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.ModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.ResourceState', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.Signature', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.Labels', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.Size', props);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          IncludeCustomMetadata: this.input.includeCustomMetadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.Metadata.LatestVersionSize', props);
    return resource.getResponseField('Metadata.LatestVersionSize') as unknown as number;
  }

}

export class WorkDocsFetchFolderPath extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetFolderPathRequest) {
    super(scope, id);
  }

  public get path(): WorkDocsFetchFolderPathPath {
    return new WorkDocsFetchFolderPathPath(this, 'Path', this.__resources, this.input);
  }

}

export class WorkDocsFetchFolderPathPath extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetFolderPathRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          FolderId: this.input.folderId,
          Limit: this.input.limit,
          Fields: this.input.fields,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolderPath.Path.Components', props);
    return resource.getResponseField('Path.Components') as unknown as shapes.WorkDocsResourcePathComponent[];
  }

}

export class WorkDocsFetchResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsGetResourcesRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          CollectionType: this.input.collectionType,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResources.Folders', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          CollectionType: this.input.collectionType,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResources.Documents', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          CollectionType: this.input.collectionType,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResources.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class WorkDocsInitiateDocumentVersionUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsInitiateDocumentVersionUploadRequest) {
    super(scope, id);
  }

  public get metadata(): WorkDocsInitiateDocumentVersionUploadMetadata {
    return new WorkDocsInitiateDocumentVersionUploadMetadata(this, 'Metadata', this.__resources, this.input);
  }

  public get uploadMetadata(): WorkDocsInitiateDocumentVersionUploadUploadMetadata {
    return new WorkDocsInitiateDocumentVersionUploadUploadMetadata(this, 'UploadMetadata', this.__resources, this.input);
  }

}

export class WorkDocsInitiateDocumentVersionUploadMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsInitiateDocumentVersionUploadRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.Id', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.CreatorId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.ParentFolderId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.ModifiedTimestamp', props);
    return resource.getResponseField('Metadata.ModifiedTimestamp') as unknown as string;
  }

  public get latestVersionMetadata(): WorkDocsInitiateDocumentVersionUploadMetadataLatestVersionMetadata {
    return new WorkDocsInitiateDocumentVersionUploadMetadataLatestVersionMetadata(this, 'LatestVersionMetadata', this.__resources, this.input);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.ResourceState', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.Labels', props);
    return resource.getResponseField('Metadata.Labels') as unknown as string[];
  }

}

export class WorkDocsInitiateDocumentVersionUploadMetadataLatestVersionMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsInitiateDocumentVersionUploadRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Id', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Name', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ContentType', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Size', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Signature', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Status', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ContentCreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.ContentModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.CreatorId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Thumbnail', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.Metadata.LatestVersionMetadata.Source', props);
    return resource.getResponseField('Metadata.LatestVersionMetadata.Source') as unknown as Record<string, string>;
  }

}

export class WorkDocsInitiateDocumentVersionUploadUploadMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsInitiateDocumentVersionUploadRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.UploadMetadata.UploadUrl', props);
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
          AuthenticationToken: this.input.authenticationToken,
          Id: this.input.id,
          Name: this.input.name,
          ContentCreatedTimestamp: this.input.contentCreatedTimestamp,
          ContentModifiedTimestamp: this.input.contentModifiedTimestamp,
          ContentType: this.input.contentType,
          DocumentSizeInBytes: this.input.documentSizeInBytes,
          ParentFolderId: this.input.parentFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateDocumentVersionUpload.UploadMetadata.SignedHeaders', props);
    return resource.getResponseField('UploadMetadata.SignedHeaders') as unknown as Record<string, string>;
  }

}

export class WorkDocsUpdateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsUpdateUserRequest) {
    super(scope, id);
  }

  public get user(): WorkDocsUpdateUserUser {
    return new WorkDocsUpdateUserUser(this, 'User', this.__resources, this.input);
  }

}

export class WorkDocsUpdateUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsUpdateUserRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Id', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Username', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.EmailAddress', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.GivenName', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Surname', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.OrganizationId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.RootFolderId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.RecycleBinFolderId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Status', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Type', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.CreatedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.ModifiedTimestamp', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.TimeZoneId', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Locale', props);
    return resource.getResponseField('User.Locale') as unknown as string;
  }

  public get storage(): WorkDocsUpdateUserUserStorage {
    return new WorkDocsUpdateUserUserStorage(this, 'Storage', this.__resources, this.input);
  }

}

export class WorkDocsUpdateUserUserStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsUpdateUserRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Storage.StorageUtilizedInBytes', props);
    return resource.getResponseField('User.Storage.StorageUtilizedInBytes') as unknown as number;
  }

  public get storageRule(): WorkDocsUpdateUserUserStorageStorageRule {
    return new WorkDocsUpdateUserUserStorageStorageRule(this, 'StorageRule', this.__resources, this.input);
  }

}

export class WorkDocsUpdateUserUserStorageStorageRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkDocsUpdateUserRequest) {
    super(scope, id);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Storage.StorageRule.StorageAllocatedInBytes', props);
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
          AuthenticationToken: this.input.authenticationToken,
          UserId: this.input.userId,
          GivenName: this.input.givenName,
          Surname: this.input.surname,
          Type: this.input.type,
          StorageRule: {
            StorageAllocatedInBytes: this.input.storageRule?.storageAllocatedInBytes,
            StorageType: this.input.storageRule?.storageType,
          },
          TimeZoneId: this.input.timeZoneId,
          Locale: this.input.locale,
          GrantPoweruserPrivileges: this.input.grantPoweruserPrivileges,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Storage.StorageRule.StorageType', props);
    return resource.getResponseField('User.Storage.StorageRule.StorageType') as unknown as string;
  }

}

