# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### WorkDocsClient <a name="aws-cdk-sdk.workdocs.WorkDocsClient"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsClient.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `abortDocumentVersionUpload` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.abortDocumentVersionUpload"></a>

```typescript
public abortDocumentVersionUpload(input: WorkDocsAbortDocumentVersionUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsAbortDocumentVersionUploadRequest`](#aws-cdk-sdk.workdocs.WorkDocsAbortDocumentVersionUploadRequest)

---

##### `activateUser` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.activateUser"></a>

```typescript
public activateUser(input: WorkDocsActivateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest)

---

##### `addResourcePermissions` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.addResourcePermissions"></a>

```typescript
public addResourcePermissions(input: WorkDocsAddResourcePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsRequest`](#aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsRequest)

---

##### `createComment` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.createComment"></a>

```typescript
public createComment(input: WorkDocsCreateCommentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest)

---

##### `createCustomMetadata` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.createCustomMetadata"></a>

```typescript
public createCustomMetadata(input: WorkDocsCreateCustomMetadataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateCustomMetadataRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateCustomMetadataRequest)

---

##### `createFolder` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.createFolder"></a>

```typescript
public createFolder(input: WorkDocsCreateFolderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateFolderRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateFolderRequest)

---

##### `createLabels` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.createLabels"></a>

```typescript
public createLabels(input: WorkDocsCreateLabelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateLabelsRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateLabelsRequest)

---

##### `createNotificationSubscription` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.createNotificationSubscription"></a>

```typescript
public createNotificationSubscription(input: WorkDocsCreateNotificationSubscriptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest)

---

##### `createUser` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.createUser"></a>

```typescript
public createUser(input: WorkDocsCreateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest)

---

##### `deactivateUser` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.deactivateUser"></a>

```typescript
public deactivateUser(input: WorkDocsDeactivateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDeactivateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsDeactivateUserRequest)

---

##### `deleteComment` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.deleteComment"></a>

```typescript
public deleteComment(input: WorkDocsDeleteCommentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDeleteCommentRequest`](#aws-cdk-sdk.workdocs.WorkDocsDeleteCommentRequest)

---

##### `deleteCustomMetadata` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.deleteCustomMetadata"></a>

```typescript
public deleteCustomMetadata(input: WorkDocsDeleteCustomMetadataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDeleteCustomMetadataRequest`](#aws-cdk-sdk.workdocs.WorkDocsDeleteCustomMetadataRequest)

---

##### `deleteDocument` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.deleteDocument"></a>

```typescript
public deleteDocument(input: WorkDocsDeleteDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDeleteDocumentRequest`](#aws-cdk-sdk.workdocs.WorkDocsDeleteDocumentRequest)

---

##### `deleteFolder` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.deleteFolder"></a>

```typescript
public deleteFolder(input: WorkDocsDeleteFolderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDeleteFolderRequest`](#aws-cdk-sdk.workdocs.WorkDocsDeleteFolderRequest)

---

##### `deleteFolderContents` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.deleteFolderContents"></a>

```typescript
public deleteFolderContents(input: WorkDocsDeleteFolderContentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDeleteFolderContentsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDeleteFolderContentsRequest)

---

##### `deleteLabels` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.deleteLabels"></a>

```typescript
public deleteLabels(input: WorkDocsDeleteLabelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDeleteLabelsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDeleteLabelsRequest)

---

##### `deleteNotificationSubscription` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.deleteNotificationSubscription"></a>

```typescript
public deleteNotificationSubscription(input: WorkDocsDeleteNotificationSubscriptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDeleteNotificationSubscriptionRequest`](#aws-cdk-sdk.workdocs.WorkDocsDeleteNotificationSubscriptionRequest)

---

##### `deleteUser` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.deleteUser"></a>

```typescript
public deleteUser(input: WorkDocsDeleteUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDeleteUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsDeleteUserRequest)

---

##### `describeActivities` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.describeActivities"></a>

```typescript
public describeActivities(input: WorkDocsDescribeActivitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest)

---

##### `describeComments` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.describeComments"></a>

```typescript
public describeComments(input: WorkDocsDescribeCommentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsRequest)

---

##### `describeDocumentVersions` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.describeDocumentVersions"></a>

```typescript
public describeDocumentVersions(input: WorkDocsDescribeDocumentVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest)

---

##### `describeFolderContents` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.describeFolderContents"></a>

```typescript
public describeFolderContents(input: WorkDocsDescribeFolderContentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest)

---

##### `describeGroups` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.describeGroups"></a>

```typescript
public describeGroups(input: WorkDocsDescribeGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsRequest)

---

##### `describeNotificationSubscriptions` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.describeNotificationSubscriptions"></a>

```typescript
public describeNotificationSubscriptions(input: WorkDocsDescribeNotificationSubscriptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsRequest)

---

##### `describeResourcePermissions` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.describeResourcePermissions"></a>

```typescript
public describeResourcePermissions(input: WorkDocsDescribeResourcePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsRequest)

---

##### `describeRootFolders` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.describeRootFolders"></a>

```typescript
public describeRootFolders(input: WorkDocsDescribeRootFoldersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersRequest)

---

##### `describeUsers` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.describeUsers"></a>

```typescript
public describeUsers(input: WorkDocsDescribeUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest)

---

##### `fetchCurrentUser` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.fetchCurrentUser"></a>

```typescript
public fetchCurrentUser(input: WorkDocsGetCurrentUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest)

---

##### `fetchDocument` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.fetchDocument"></a>

```typescript
public fetchDocument(input: WorkDocsGetDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest)

---

##### `fetchDocumentPath` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.fetchDocumentPath"></a>

```typescript
public fetchDocumentPath(input: WorkDocsGetDocumentPathRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest)

---

##### `fetchDocumentVersion` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.fetchDocumentVersion"></a>

```typescript
public fetchDocumentVersion(input: WorkDocsGetDocumentVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest)

---

##### `fetchFolder` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.fetchFolder"></a>

```typescript
public fetchFolder(input: WorkDocsGetFolderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetFolderRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetFolderRequest)

---

##### `fetchFolderPath` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.fetchFolderPath"></a>

```typescript
public fetchFolderPath(input: WorkDocsGetFolderPathRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest)

---

##### `fetchResources` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.fetchResources"></a>

```typescript
public fetchResources(input: WorkDocsGetResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetResourcesRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetResourcesRequest)

---

##### `initiateDocumentVersionUpload` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.initiateDocumentVersionUpload"></a>

```typescript
public initiateDocumentVersionUpload(input: WorkDocsInitiateDocumentVersionUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest`](#aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest)

---

##### `removeAllResourcePermissions` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.removeAllResourcePermissions"></a>

```typescript
public removeAllResourcePermissions(input: WorkDocsRemoveAllResourcePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsRemoveAllResourcePermissionsRequest`](#aws-cdk-sdk.workdocs.WorkDocsRemoveAllResourcePermissionsRequest)

---

##### `removeResourcePermission` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.removeResourcePermission"></a>

```typescript
public removeResourcePermission(input: WorkDocsRemoveResourcePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsRemoveResourcePermissionRequest`](#aws-cdk-sdk.workdocs.WorkDocsRemoveResourcePermissionRequest)

---

##### `updateDocument` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.updateDocument"></a>

```typescript
public updateDocument(input: WorkDocsUpdateDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentRequest`](#aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentRequest)

---

##### `updateDocumentVersion` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.updateDocumentVersion"></a>

```typescript
public updateDocumentVersion(input: WorkDocsUpdateDocumentVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentVersionRequest`](#aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentVersionRequest)

---

##### `updateFolder` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.updateFolder"></a>

```typescript
public updateFolder(input: WorkDocsUpdateFolderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUpdateFolderRequest`](#aws-cdk-sdk.workdocs.WorkDocsUpdateFolderRequest)

---

##### `updateUser` <a name="aws-cdk-sdk.workdocs.WorkDocsClient.updateUser"></a>

```typescript
public updateUser(input: WorkDocsUpdateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest)

---




## Structs <a name="Structs"></a>

### WorkDocsAbortDocumentVersionUploadRequest <a name="aws-cdk-sdk.workdocs.WorkDocsAbortDocumentVersionUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsAbortDocumentVersionUploadRequest: workdocs.WorkDocsAbortDocumentVersionUploadRequest = { ... }
```

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsAbortDocumentVersionUploadRequest.property.documentId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsAbortDocumentVersionUploadRequest.property.versionId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsAbortDocumentVersionUploadRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsActivateUserRequest <a name="aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsActivateUserRequest: workdocs.WorkDocsActivateUserRequest = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest.property.userId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsActivateUserResponse <a name="aws-cdk-sdk.workdocs.WorkDocsActivateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsActivateUserResponse: workdocs.WorkDocsActivateUserResponse = { ... }
```

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivateUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUser`](#aws-cdk-sdk.workdocs.WorkDocsUser)

---

### WorkDocsActivity <a name="aws-cdk-sdk.workdocs.WorkDocsActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsActivity: workdocs.WorkDocsActivity = { ... }
```

##### `commentMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivity.property.commentMetadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCommentMetadata`](#aws-cdk-sdk.workdocs.WorkDocsCommentMetadata)

---

##### `initiator`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivity.property.initiator"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUserMetadata`](#aws-cdk-sdk.workdocs.WorkDocsUserMetadata)

---

##### `isIndirectActivity`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivity.property.isIndirectActivity"></a>

- *Type:* `boolean`

---

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivity.property.organizationId"></a>

- *Type:* `string`

---

##### `originalParent`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivity.property.originalParent"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResourceMetadata`](#aws-cdk-sdk.workdocs.WorkDocsResourceMetadata)

---

##### `participants`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivity.property.participants"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsParticipants`](#aws-cdk-sdk.workdocs.WorkDocsParticipants)

---

##### `resourceMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivity.property.resourceMetadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResourceMetadata`](#aws-cdk-sdk.workdocs.WorkDocsResourceMetadata)

---

##### `timeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivity.property.timeStamp"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsActivity.property.type"></a>

- *Type:* `string`

---

### WorkDocsAddResourcePermissionsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsAddResourcePermissionsRequest: workdocs.WorkDocsAddResourcePermissionsRequest = { ... }
```

##### `principals`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsRequest.property.principals"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsSharePrincipal`](#aws-cdk-sdk.workdocs.WorkDocsSharePrincipal)[]

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `notificationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsRequest.property.notificationOptions"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsNotificationOptions`](#aws-cdk-sdk.workdocs.WorkDocsNotificationOptions)

---

### WorkDocsAddResourcePermissionsResponse <a name="aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsAddResourcePermissionsResponse: workdocs.WorkDocsAddResourcePermissionsResponse = { ... }
```

##### `shareResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsResponse.property.shareResults"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsShareResult`](#aws-cdk-sdk.workdocs.WorkDocsShareResult)[]

---

### WorkDocsComment <a name="aws-cdk-sdk.workdocs.WorkDocsComment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsComment: workdocs.WorkDocsComment = { ... }
```

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsComment.property.commentId"></a>

- *Type:* `string`

---

##### `contributor`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsComment.property.contributor"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUser`](#aws-cdk-sdk.workdocs.WorkDocsUser)

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsComment.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `parentId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsComment.property.parentId"></a>

- *Type:* `string`

---

##### `recipientId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsComment.property.recipientId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsComment.property.status"></a>

- *Type:* `string`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsComment.property.text"></a>

- *Type:* `string`

---

##### `threadId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsComment.property.threadId"></a>

- *Type:* `string`

---

##### `visibility`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsComment.property.visibility"></a>

- *Type:* `string`

---

### WorkDocsCommentMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsCommentMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCommentMetadata: workdocs.WorkDocsCommentMetadata = { ... }
```

##### `commentId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCommentMetadata.property.commentId"></a>

- *Type:* `string`

---

##### `commentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCommentMetadata.property.commentStatus"></a>

- *Type:* `string`

---

##### `contributor`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCommentMetadata.property.contributor"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUser`](#aws-cdk-sdk.workdocs.WorkDocsUser)

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCommentMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `recipientId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCommentMetadata.property.recipientId"></a>

- *Type:* `string`

---

### WorkDocsCreateCommentRequest <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateCommentRequest: workdocs.WorkDocsCreateCommentRequest = { ... }
```

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest.property.documentId"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest.property.text"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest.property.versionId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `notifyCollaborators`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest.property.notifyCollaborators"></a>

- *Type:* `boolean`

---

##### `parentId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest.property.parentId"></a>

- *Type:* `string`

---

##### `threadId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest.property.threadId"></a>

- *Type:* `string`

---

##### `visibility`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest.property.visibility"></a>

- *Type:* `string`

---

### WorkDocsCreateCommentResponse <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateCommentResponse: workdocs.WorkDocsCreateCommentResponse = { ... }
```

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCommentResponse.property.comment"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsComment`](#aws-cdk-sdk.workdocs.WorkDocsComment)

---

### WorkDocsCreateCustomMetadataRequest <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCustomMetadataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateCustomMetadataRequest: workdocs.WorkDocsCreateCustomMetadataRequest = { ... }
```

##### `customMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCustomMetadataRequest.property.customMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCustomMetadataRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCustomMetadataRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCustomMetadataRequest.property.versionId"></a>

- *Type:* `string`

---

### WorkDocsCreateCustomMetadataResponse <a name="aws-cdk-sdk.workdocs.WorkDocsCreateCustomMetadataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateCustomMetadataResponse: workdocs.WorkDocsCreateCustomMetadataResponse = { ... }
```

### WorkDocsCreateFolderRequest <a name="aws-cdk-sdk.workdocs.WorkDocsCreateFolderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateFolderRequest: workdocs.WorkDocsCreateFolderRequest = { ... }
```

##### `parentFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateFolderRequest.property.parentFolderId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateFolderRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateFolderRequest.property.name"></a>

- *Type:* `string`

---

### WorkDocsCreateFolderResponse <a name="aws-cdk-sdk.workdocs.WorkDocsCreateFolderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateFolderResponse: workdocs.WorkDocsCreateFolderResponse = { ... }
```

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateFolderResponse.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsFolderMetadata`](#aws-cdk-sdk.workdocs.WorkDocsFolderMetadata)

---

### WorkDocsCreateLabelsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsCreateLabelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateLabelsRequest: workdocs.WorkDocsCreateLabelsRequest = { ... }
```

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateLabelsRequest.property.labels"></a>

- *Type:* `string`[]

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateLabelsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateLabelsRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsCreateLabelsResponse <a name="aws-cdk-sdk.workdocs.WorkDocsCreateLabelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateLabelsResponse: workdocs.WorkDocsCreateLabelsResponse = { ... }
```

### WorkDocsCreateNotificationSubscriptionRequest <a name="aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateNotificationSubscriptionRequest: workdocs.WorkDocsCreateNotificationSubscriptionRequest = { ... }
```

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest.property.endpoint"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest.property.protocol"></a>

- *Type:* `string`

---

##### `subscriptionType`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest.property.subscriptionType"></a>

- *Type:* `string`

---

### WorkDocsCreateNotificationSubscriptionResponse <a name="aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateNotificationSubscriptionResponse: workdocs.WorkDocsCreateNotificationSubscriptionResponse = { ... }
```

##### `subscription`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionResponse.property.subscription"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsSubscription`](#aws-cdk-sdk.workdocs.WorkDocsSubscription)

---

### WorkDocsCreateUserRequest <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateUserRequest: workdocs.WorkDocsCreateUserRequest = { ... }
```

##### `givenName`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest.property.givenName"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest.property.password"></a>

- *Type:* `string`

---

##### `surname`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest.property.surname"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest.property.username"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest.property.emailAddress"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `storageRule`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest.property.storageRule"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsStorageRuleType`](#aws-cdk-sdk.workdocs.WorkDocsStorageRuleType)

---

##### `timeZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest.property.timeZoneId"></a>

- *Type:* `string`

---

### WorkDocsCreateUserResponse <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsCreateUserResponse: workdocs.WorkDocsCreateUserResponse = { ... }
```

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsCreateUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUser`](#aws-cdk-sdk.workdocs.WorkDocsUser)

---

### WorkDocsDeactivateUserRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDeactivateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeactivateUserRequest: workdocs.WorkDocsDeactivateUserRequest = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeactivateUserRequest.property.userId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeactivateUserRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsDeleteCommentRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCommentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeleteCommentRequest: workdocs.WorkDocsDeleteCommentRequest = { ... }
```

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCommentRequest.property.commentId"></a>

- *Type:* `string`

---

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCommentRequest.property.documentId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCommentRequest.property.versionId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCommentRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsDeleteCustomMetadataRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCustomMetadataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeleteCustomMetadataRequest: workdocs.WorkDocsDeleteCustomMetadataRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCustomMetadataRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCustomMetadataRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `deleteAll`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCustomMetadataRequest.property.deleteAll"></a>

- *Type:* `boolean`

---

##### `keys`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCustomMetadataRequest.property.keys"></a>

- *Type:* `string`[]

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCustomMetadataRequest.property.versionId"></a>

- *Type:* `string`

---

### WorkDocsDeleteCustomMetadataResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteCustomMetadataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeleteCustomMetadataResponse: workdocs.WorkDocsDeleteCustomMetadataResponse = { ... }
```

### WorkDocsDeleteDocumentRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeleteDocumentRequest: workdocs.WorkDocsDeleteDocumentRequest = { ... }
```

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteDocumentRequest.property.documentId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteDocumentRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsDeleteFolderContentsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteFolderContentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeleteFolderContentsRequest: workdocs.WorkDocsDeleteFolderContentsRequest = { ... }
```

##### `folderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteFolderContentsRequest.property.folderId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteFolderContentsRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsDeleteFolderRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteFolderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeleteFolderRequest: workdocs.WorkDocsDeleteFolderRequest = { ... }
```

##### `folderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteFolderRequest.property.folderId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteFolderRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsDeleteLabelsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteLabelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeleteLabelsRequest: workdocs.WorkDocsDeleteLabelsRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteLabelsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteLabelsRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `deleteAll`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteLabelsRequest.property.deleteAll"></a>

- *Type:* `boolean`

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteLabelsRequest.property.labels"></a>

- *Type:* `string`[]

---

### WorkDocsDeleteLabelsResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteLabelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeleteLabelsResponse: workdocs.WorkDocsDeleteLabelsResponse = { ... }
```

### WorkDocsDeleteNotificationSubscriptionRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteNotificationSubscriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeleteNotificationSubscriptionRequest: workdocs.WorkDocsDeleteNotificationSubscriptionRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteNotificationSubscriptionRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `subscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteNotificationSubscriptionRequest.property.subscriptionId"></a>

- *Type:* `string`

---

### WorkDocsDeleteUserRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDeleteUserRequest: workdocs.WorkDocsDeleteUserRequest = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteUserRequest.property.userId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDeleteUserRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsDescribeActivitiesRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeActivitiesRequest: workdocs.WorkDocsDescribeActivitiesRequest = { ... }
```

##### `activityTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest.property.activityTypes"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest.property.endTime"></a>

- *Type:* `string`

---

##### `includeIndirectActivities`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest.property.includeIndirectActivities"></a>

- *Type:* `boolean`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest.property.marker"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest.property.startTime"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest.property.userId"></a>

- *Type:* `string`

---

### WorkDocsDescribeActivitiesResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeActivitiesResponse: workdocs.WorkDocsDescribeActivitiesResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesResponse.property.marker"></a>

- *Type:* `string`

---

##### `userActivities`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesResponse.property.userActivities"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsActivity`](#aws-cdk-sdk.workdocs.WorkDocsActivity)[]

---

### WorkDocsDescribeCommentsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeCommentsRequest: workdocs.WorkDocsDescribeCommentsRequest = { ... }
```

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsRequest.property.documentId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsRequest.property.versionId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsRequest.property.marker"></a>

- *Type:* `string`

---

### WorkDocsDescribeCommentsResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeCommentsResponse: workdocs.WorkDocsDescribeCommentsResponse = { ... }
```

##### `comments`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsResponse.property.comments"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsComment`](#aws-cdk-sdk.workdocs.WorkDocsComment)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsResponse.property.marker"></a>

- *Type:* `string`

---

### WorkDocsDescribeDocumentVersionsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeDocumentVersionsRequest: workdocs.WorkDocsDescribeDocumentVersionsRequest = { ... }
```

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest.property.documentId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `fields`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest.property.fields"></a>

- *Type:* `string`

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest.property.include"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest.property.marker"></a>

- *Type:* `string`

---

### WorkDocsDescribeDocumentVersionsResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeDocumentVersionsResponse: workdocs.WorkDocsDescribeDocumentVersionsResponse = { ... }
```

##### `documentVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsResponse.property.documentVersions"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata`](#aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsResponse.property.marker"></a>

- *Type:* `string`

---

### WorkDocsDescribeFolderContentsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeFolderContentsRequest: workdocs.WorkDocsDescribeFolderContentsRequest = { ... }
```

##### `folderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest.property.folderId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest.property.include"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest.property.marker"></a>

- *Type:* `string`

---

##### `order`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest.property.order"></a>

- *Type:* `string`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest.property.sort"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest.property.type"></a>

- *Type:* `string`

---

### WorkDocsDescribeFolderContentsResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeFolderContentsResponse: workdocs.WorkDocsDescribeFolderContentsResponse = { ... }
```

##### `documents`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsResponse.property.documents"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata`](#aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata)[]

---

##### `folders`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsResponse.property.folders"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsFolderMetadata`](#aws-cdk-sdk.workdocs.WorkDocsFolderMetadata)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsResponse.property.marker"></a>

- *Type:* `string`

---

### WorkDocsDescribeGroupsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeGroupsRequest: workdocs.WorkDocsDescribeGroupsRequest = { ... }
```

##### `searchQuery`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsRequest.property.searchQuery"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsRequest.property.marker"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkDocsDescribeGroupsResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeGroupsResponse: workdocs.WorkDocsDescribeGroupsResponse = { ... }
```

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsResponse.property.groups"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGroupMetadata`](#aws-cdk-sdk.workdocs.WorkDocsGroupMetadata)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsResponse.property.marker"></a>

- *Type:* `string`

---

### WorkDocsDescribeNotificationSubscriptionsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeNotificationSubscriptionsRequest: workdocs.WorkDocsDescribeNotificationSubscriptionsRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsRequest.property.marker"></a>

- *Type:* `string`

---

### WorkDocsDescribeNotificationSubscriptionsResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeNotificationSubscriptionsResponse: workdocs.WorkDocsDescribeNotificationSubscriptionsResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsResponse.property.marker"></a>

- *Type:* `string`

---

##### `subscriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsResponse.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsSubscription`](#aws-cdk-sdk.workdocs.WorkDocsSubscription)[]

---

### WorkDocsDescribeResourcePermissionsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeResourcePermissionsRequest: workdocs.WorkDocsDescribeResourcePermissionsRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsRequest.property.marker"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsRequest.property.principalId"></a>

- *Type:* `string`

---

### WorkDocsDescribeResourcePermissionsResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeResourcePermissionsResponse: workdocs.WorkDocsDescribeResourcePermissionsResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsResponse.property.marker"></a>

- *Type:* `string`

---

##### `principals`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsResponse.property.principals"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsPrincipal`](#aws-cdk-sdk.workdocs.WorkDocsPrincipal)[]

---

### WorkDocsDescribeRootFoldersRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeRootFoldersRequest: workdocs.WorkDocsDescribeRootFoldersRequest = { ... }
```

##### `authenticationToken`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersRequest.property.marker"></a>

- *Type:* `string`

---

### WorkDocsDescribeRootFoldersResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeRootFoldersResponse: workdocs.WorkDocsDescribeRootFoldersResponse = { ... }
```

##### `folders`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersResponse.property.folders"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsFolderMetadata`](#aws-cdk-sdk.workdocs.WorkDocsFolderMetadata)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersResponse.property.marker"></a>

- *Type:* `string`

---

### WorkDocsDescribeUsersRequest <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeUsersRequest: workdocs.WorkDocsDescribeUsersRequest = { ... }
```

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `fields`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest.property.fields"></a>

- *Type:* `string`

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest.property.include"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest.property.marker"></a>

- *Type:* `string`

---

##### `order`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest.property.order"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `query`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest.property.query"></a>

- *Type:* `string`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest.property.sort"></a>

- *Type:* `string`

---

##### `userIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest.property.userIds"></a>

- *Type:* `string`

---

### WorkDocsDescribeUsersResponse <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDescribeUsersResponse: workdocs.WorkDocsDescribeUsersResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersResponse.property.marker"></a>

- *Type:* `string`

---

##### `totalNumberOfUsers`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersResponse.property.totalNumberOfUsers"></a>

- *Type:* `number`

---

##### `users`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDescribeUsersResponse.property.users"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUser`](#aws-cdk-sdk.workdocs.WorkDocsUser)[]

---

### WorkDocsDocumentMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDocumentMetadata: workdocs.WorkDocsDocumentMetadata = { ... }
```

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata.property.creatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata.property.id"></a>

- *Type:* `string`

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata.property.labels"></a>

- *Type:* `string`[]

---

##### `latestVersionMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata.property.latestVersionMetadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata`](#aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata)

---

##### `modifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `parentFolderId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata.property.parentFolderId"></a>

- *Type:* `string`

---

##### `resourceState`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata.property.resourceState"></a>

- *Type:* `string`

---

### WorkDocsDocumentVersionMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsDocumentVersionMetadata: workdocs.WorkDocsDocumentVersionMetadata = { ... }
```

##### `contentCreatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.contentCreatedTimestamp"></a>

- *Type:* `string`

---

##### `contentModifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.contentModifiedTimestamp"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.contentType"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.creatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.id"></a>

- *Type:* `string`

---

##### `modifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.name"></a>

- *Type:* `string`

---

##### `signature`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.signature"></a>

- *Type:* `string`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.size"></a>

- *Type:* `number`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.source"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.status"></a>

- *Type:* `string`

---

##### `thumbnail`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata.property.thumbnail"></a>

- *Type:* {[ key: string ]: `string`}

---

### WorkDocsFolderMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsFolderMetadata: workdocs.WorkDocsFolderMetadata = { ... }
```

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.creatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.id"></a>

- *Type:* `string`

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.labels"></a>

- *Type:* `string`[]

---

##### `latestVersionSize`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.latestVersionSize"></a>

- *Type:* `number`

---

##### `modifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.name"></a>

- *Type:* `string`

---

##### `parentFolderId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.parentFolderId"></a>

- *Type:* `string`

---

##### `resourceState`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.resourceState"></a>

- *Type:* `string`

---

##### `signature`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.signature"></a>

- *Type:* `string`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsFolderMetadata.property.size"></a>

- *Type:* `number`

---

### WorkDocsGetCurrentUserRequest <a name="aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetCurrentUserRequest: workdocs.WorkDocsGetCurrentUserRequest = { ... }
```

##### `authenticationToken`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsGetCurrentUserResponse <a name="aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetCurrentUserResponse: workdocs.WorkDocsGetCurrentUserResponse = { ... }
```

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUser`](#aws-cdk-sdk.workdocs.WorkDocsUser)

---

### WorkDocsGetDocumentPathRequest <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetDocumentPathRequest: workdocs.WorkDocsGetDocumentPathRequest = { ... }
```

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest.property.documentId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `fields`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest.property.fields"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest.property.marker"></a>

- *Type:* `string`

---

### WorkDocsGetDocumentPathResponse <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetDocumentPathResponse: workdocs.WorkDocsGetDocumentPathResponse = { ... }
```

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathResponse.property.path"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResourcePath`](#aws-cdk-sdk.workdocs.WorkDocsResourcePath)

---

### WorkDocsGetDocumentRequest <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetDocumentRequest: workdocs.WorkDocsGetDocumentRequest = { ... }
```

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest.property.documentId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `includeCustomMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest.property.includeCustomMetadata"></a>

- *Type:* `boolean`

---

### WorkDocsGetDocumentResponse <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetDocumentResponse: workdocs.WorkDocsGetDocumentResponse = { ... }
```

##### `customMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentResponse.property.customMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentResponse.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata`](#aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata)

---

### WorkDocsGetDocumentVersionRequest <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetDocumentVersionRequest: workdocs.WorkDocsGetDocumentVersionRequest = { ... }
```

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest.property.documentId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest.property.versionId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `fields`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest.property.fields"></a>

- *Type:* `string`

---

##### `includeCustomMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest.property.includeCustomMetadata"></a>

- *Type:* `boolean`

---

### WorkDocsGetDocumentVersionResponse <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetDocumentVersionResponse: workdocs.WorkDocsGetDocumentVersionResponse = { ... }
```

##### `customMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionResponse.property.customMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionResponse.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata`](#aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata)

---

### WorkDocsGetFolderPathRequest <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetFolderPathRequest: workdocs.WorkDocsGetFolderPathRequest = { ... }
```

##### `folderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest.property.folderId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `fields`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest.property.fields"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest.property.marker"></a>

- *Type:* `string`

---

### WorkDocsGetFolderPathResponse <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderPathResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetFolderPathResponse: workdocs.WorkDocsGetFolderPathResponse = { ... }
```

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderPathResponse.property.path"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResourcePath`](#aws-cdk-sdk.workdocs.WorkDocsResourcePath)

---

### WorkDocsGetFolderRequest <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetFolderRequest: workdocs.WorkDocsGetFolderRequest = { ... }
```

##### `folderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderRequest.property.folderId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `includeCustomMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderRequest.property.includeCustomMetadata"></a>

- *Type:* `boolean`

---

### WorkDocsGetFolderResponse <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetFolderResponse: workdocs.WorkDocsGetFolderResponse = { ... }
```

##### `customMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderResponse.property.customMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetFolderResponse.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsFolderMetadata`](#aws-cdk-sdk.workdocs.WorkDocsFolderMetadata)

---

### WorkDocsGetResourcesRequest <a name="aws-cdk-sdk.workdocs.WorkDocsGetResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetResourcesRequest: workdocs.WorkDocsGetResourcesRequest = { ... }
```

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetResourcesRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `collectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetResourcesRequest.property.collectionType"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetResourcesRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetResourcesRequest.property.marker"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetResourcesRequest.property.userId"></a>

- *Type:* `string`

---

### WorkDocsGetResourcesResponse <a name="aws-cdk-sdk.workdocs.WorkDocsGetResourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGetResourcesResponse: workdocs.WorkDocsGetResourcesResponse = { ... }
```

##### `documents`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetResourcesResponse.property.documents"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata`](#aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata)[]

---

##### `folders`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetResourcesResponse.property.folders"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsFolderMetadata`](#aws-cdk-sdk.workdocs.WorkDocsFolderMetadata)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGetResourcesResponse.property.marker"></a>

- *Type:* `string`

---

### WorkDocsGroupMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsGroupMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsGroupMetadata: workdocs.WorkDocsGroupMetadata = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGroupMetadata.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsGroupMetadata.property.name"></a>

- *Type:* `string`

---

### WorkDocsInitiateDocumentVersionUploadRequest <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsInitiateDocumentVersionUploadRequest: workdocs.WorkDocsInitiateDocumentVersionUploadRequest = { ... }
```

##### `parentFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest.property.parentFolderId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `contentCreatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest.property.contentCreatedTimestamp"></a>

- *Type:* `string`

---

##### `contentModifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest.property.contentModifiedTimestamp"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest.property.contentType"></a>

- *Type:* `string`

---

##### `documentSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest.property.documentSizeInBytes"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest.property.name"></a>

- *Type:* `string`

---

### WorkDocsInitiateDocumentVersionUploadResponse <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsInitiateDocumentVersionUploadResponse: workdocs.WorkDocsInitiateDocumentVersionUploadResponse = { ... }
```

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadResponse.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata`](#aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata)

---

##### `uploadMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadResponse.property.uploadMetadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUploadMetadata`](#aws-cdk-sdk.workdocs.WorkDocsUploadMetadata)

---

### WorkDocsNotificationOptions <a name="aws-cdk-sdk.workdocs.WorkDocsNotificationOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsNotificationOptions: workdocs.WorkDocsNotificationOptions = { ... }
```

##### `emailMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsNotificationOptions.property.emailMessage"></a>

- *Type:* `string`

---

##### `sendEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsNotificationOptions.property.sendEmail"></a>

- *Type:* `boolean`

---

### WorkDocsParticipants <a name="aws-cdk-sdk.workdocs.WorkDocsParticipants"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsParticipants: workdocs.WorkDocsParticipants = { ... }
```

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsParticipants.property.groups"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGroupMetadata`](#aws-cdk-sdk.workdocs.WorkDocsGroupMetadata)[]

---

##### `users`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsParticipants.property.users"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUserMetadata`](#aws-cdk-sdk.workdocs.WorkDocsUserMetadata)[]

---

### WorkDocsPermissionInfo <a name="aws-cdk-sdk.workdocs.WorkDocsPermissionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsPermissionInfo: workdocs.WorkDocsPermissionInfo = { ... }
```

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsPermissionInfo.property.role"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsPermissionInfo.property.type"></a>

- *Type:* `string`

---

### WorkDocsPrincipal <a name="aws-cdk-sdk.workdocs.WorkDocsPrincipal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsPrincipal: workdocs.WorkDocsPrincipal = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsPrincipal.property.id"></a>

- *Type:* `string`

---

##### `roles`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsPrincipal.property.roles"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsPermissionInfo`](#aws-cdk-sdk.workdocs.WorkDocsPermissionInfo)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsPrincipal.property.type"></a>

- *Type:* `string`

---

### WorkDocsRemoveAllResourcePermissionsRequest <a name="aws-cdk-sdk.workdocs.WorkDocsRemoveAllResourcePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsRemoveAllResourcePermissionsRequest: workdocs.WorkDocsRemoveAllResourcePermissionsRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsRemoveAllResourcePermissionsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsRemoveAllResourcePermissionsRequest.property.authenticationToken"></a>

- *Type:* `string`

---

### WorkDocsRemoveResourcePermissionRequest <a name="aws-cdk-sdk.workdocs.WorkDocsRemoveResourcePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsRemoveResourcePermissionRequest: workdocs.WorkDocsRemoveResourcePermissionRequest = { ... }
```

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsRemoveResourcePermissionRequest.property.principalId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsRemoveResourcePermissionRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsRemoveResourcePermissionRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `principalType`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsRemoveResourcePermissionRequest.property.principalType"></a>

- *Type:* `string`

---

### WorkDocsResourceMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsResourceMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsResourceMetadata: workdocs.WorkDocsResourceMetadata = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResourceMetadata.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResourceMetadata.property.name"></a>

- *Type:* `string`

---

##### `originalName`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResourceMetadata.property.originalName"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResourceMetadata.property.owner"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUserMetadata`](#aws-cdk-sdk.workdocs.WorkDocsUserMetadata)

---

##### `parentId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResourceMetadata.property.parentId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResourceMetadata.property.type"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResourceMetadata.property.versionId"></a>

- *Type:* `string`

---

### WorkDocsResourcePath <a name="aws-cdk-sdk.workdocs.WorkDocsResourcePath"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsResourcePath: workdocs.WorkDocsResourcePath = { ... }
```

##### `components`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResourcePath.property.components"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResourcePathComponent`](#aws-cdk-sdk.workdocs.WorkDocsResourcePathComponent)[]

---

### WorkDocsResourcePathComponent <a name="aws-cdk-sdk.workdocs.WorkDocsResourcePathComponent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsResourcePathComponent: workdocs.WorkDocsResourcePathComponent = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResourcePathComponent.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResourcePathComponent.property.name"></a>

- *Type:* `string`

---

### WorkDocsSharePrincipal <a name="aws-cdk-sdk.workdocs.WorkDocsSharePrincipal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsSharePrincipal: workdocs.WorkDocsSharePrincipal = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsSharePrincipal.property.id"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsSharePrincipal.property.role"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsSharePrincipal.property.type"></a>

- *Type:* `string`

---

### WorkDocsShareResult <a name="aws-cdk-sdk.workdocs.WorkDocsShareResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsShareResult: workdocs.WorkDocsShareResult = { ... }
```

##### `inviteePrincipalId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsShareResult.property.inviteePrincipalId"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsShareResult.property.principalId"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsShareResult.property.role"></a>

- *Type:* `string`

---

##### `shareId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsShareResult.property.shareId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsShareResult.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsShareResult.property.statusMessage"></a>

- *Type:* `string`

---

### WorkDocsStorageRuleType <a name="aws-cdk-sdk.workdocs.WorkDocsStorageRuleType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsStorageRuleType: workdocs.WorkDocsStorageRuleType = { ... }
```

##### `storageAllocatedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsStorageRuleType.property.storageAllocatedInBytes"></a>

- *Type:* `number`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsStorageRuleType.property.storageType"></a>

- *Type:* `string`

---

### WorkDocsSubscription <a name="aws-cdk-sdk.workdocs.WorkDocsSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsSubscription: workdocs.WorkDocsSubscription = { ... }
```

##### `endPoint`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsSubscription.property.endPoint"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsSubscription.property.protocol"></a>

- *Type:* `string`

---

##### `subscriptionId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsSubscription.property.subscriptionId"></a>

- *Type:* `string`

---

### WorkDocsUpdateDocumentRequest <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsUpdateDocumentRequest: workdocs.WorkDocsUpdateDocumentRequest = { ... }
```

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentRequest.property.documentId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentRequest.property.name"></a>

- *Type:* `string`

---

##### `parentFolderId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentRequest.property.parentFolderId"></a>

- *Type:* `string`

---

##### `resourceState`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentRequest.property.resourceState"></a>

- *Type:* `string`

---

### WorkDocsUpdateDocumentVersionRequest <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsUpdateDocumentVersionRequest: workdocs.WorkDocsUpdateDocumentVersionRequest = { ... }
```

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentVersionRequest.property.documentId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentVersionRequest.property.versionId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentVersionRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `versionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateDocumentVersionRequest.property.versionStatus"></a>

- *Type:* `string`

---

### WorkDocsUpdateFolderRequest <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateFolderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsUpdateFolderRequest: workdocs.WorkDocsUpdateFolderRequest = { ... }
```

##### `folderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateFolderRequest.property.folderId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateFolderRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateFolderRequest.property.name"></a>

- *Type:* `string`

---

##### `parentFolderId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateFolderRequest.property.parentFolderId"></a>

- *Type:* `string`

---

##### `resourceState`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateFolderRequest.property.resourceState"></a>

- *Type:* `string`

---

### WorkDocsUpdateUserRequest <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsUpdateUserRequest: workdocs.WorkDocsUpdateUserRequest = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest.property.userId"></a>

- *Type:* `string`

---

##### `authenticationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest.property.authenticationToken"></a>

- *Type:* `string`

---

##### `givenName`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest.property.givenName"></a>

- *Type:* `string`

---

##### `grantPoweruserPrivileges`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest.property.grantPoweruserPrivileges"></a>

- *Type:* `string`

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest.property.locale"></a>

- *Type:* `string`

---

##### `storageRule`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest.property.storageRule"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsStorageRuleType`](#aws-cdk-sdk.workdocs.WorkDocsStorageRuleType)

---

##### `surname`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest.property.surname"></a>

- *Type:* `string`

---

##### `timeZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest.property.timeZoneId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest.property.type"></a>

- *Type:* `string`

---

### WorkDocsUpdateUserResponse <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsUpdateUserResponse: workdocs.WorkDocsUpdateUserResponse = { ... }
```

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUpdateUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUser`](#aws-cdk-sdk.workdocs.WorkDocsUser)

---

### WorkDocsUploadMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsUploadMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsUploadMetadata: workdocs.WorkDocsUploadMetadata = { ... }
```

##### `signedHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUploadMetadata.property.signedHeaders"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `uploadUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUploadMetadata.property.uploadUrl"></a>

- *Type:* `string`

---

### WorkDocsUser <a name="aws-cdk-sdk.workdocs.WorkDocsUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsUser: workdocs.WorkDocsUser = { ... }
```

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.emailAddress"></a>

- *Type:* `string`

---

##### `givenName`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.givenName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.id"></a>

- *Type:* `string`

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.locale"></a>

- *Type:* `string`

---

##### `modifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.organizationId"></a>

- *Type:* `string`

---

##### `recycleBinFolderId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.recycleBinFolderId"></a>

- *Type:* `string`

---

##### `rootFolderId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.rootFolderId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.status"></a>

- *Type:* `string`

---

##### `storage`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.storage"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUserStorageMetadata`](#aws-cdk-sdk.workdocs.WorkDocsUserStorageMetadata)

---

##### `surname`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.surname"></a>

- *Type:* `string`

---

##### `timeZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.timeZoneId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.type"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUser.property.username"></a>

- *Type:* `string`

---

### WorkDocsUserMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsUserMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsUserMetadata: workdocs.WorkDocsUserMetadata = { ... }
```

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUserMetadata.property.emailAddress"></a>

- *Type:* `string`

---

##### `givenName`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUserMetadata.property.givenName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUserMetadata.property.id"></a>

- *Type:* `string`

---

##### `surname`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUserMetadata.property.surname"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUserMetadata.property.username"></a>

- *Type:* `string`

---

### WorkDocsUserStorageMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsUserStorageMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

const workDocsUserStorageMetadata: workdocs.WorkDocsUserStorageMetadata = { ... }
```

##### `storageRule`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUserStorageMetadata.property.storageRule"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsStorageRuleType`](#aws-cdk-sdk.workdocs.WorkDocsStorageRuleType)

---

##### `storageUtilizedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsUserStorageMetadata.property.storageUtilizedInBytes"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### WorkDocsResponsesActivateUser <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUser"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUser.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesActivateUser(__scope: Construct, __resources: string[], __input: WorkDocsActivateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser`](#aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser)

---


### WorkDocsResponsesActivateUserUser <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesActivateUserUser(__scope: Construct, __resources: string[], __input: WorkDocsActivateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.emailAddress"></a>

- *Type:* `string`

---

##### `givenName`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.givenName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.id"></a>

- *Type:* `string`

---

##### `locale`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.locale"></a>

- *Type:* `string`

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.organizationId"></a>

- *Type:* `string`

---

##### `recycleBinFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.recycleBinFolderId"></a>

- *Type:* `string`

---

##### `rootFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.rootFolderId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.status"></a>

- *Type:* `string`

---

##### `storage`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.storage"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorage`](#aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorage)

---

##### `surname`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.surname"></a>

- *Type:* `string`

---

##### `timeZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.timeZoneId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.type"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUser.property.username"></a>

- *Type:* `string`

---


### WorkDocsResponsesActivateUserUserStorage <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorage"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorage.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesActivateUserUserStorage(__scope: Construct, __resources: string[], __input: WorkDocsActivateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `storageRule`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorage.property.storageRule"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorageStorageRule`](#aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorageStorageRule)

---

##### `storageUtilizedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorage.property.storageUtilizedInBytes"></a>

- *Type:* `number`

---


### WorkDocsResponsesActivateUserUserStorageStorageRule <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorageStorageRule"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorageStorageRule.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesActivateUserUserStorageStorageRule(__scope: Construct, __resources: string[], __input: WorkDocsActivateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorageStorageRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorageStorageRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorageStorageRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsActivateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `storageAllocatedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorageStorageRule.property.storageAllocatedInBytes"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesActivateUserUserStorageStorageRule.property.storageType"></a>

- *Type:* `string`

---


### WorkDocsResponsesAddResourcePermissions <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesAddResourcePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesAddResourcePermissions.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesAddResourcePermissions(__scope: Construct, __resources: string[], __input: WorkDocsAddResourcePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesAddResourcePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesAddResourcePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesAddResourcePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsRequest`](#aws-cdk-sdk.workdocs.WorkDocsAddResourcePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `shareResults`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesAddResourcePermissions.property.shareResults"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsShareResult`](#aws-cdk-sdk.workdocs.WorkDocsShareResult)[]

---


### WorkDocsResponsesCreateComment <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateComment"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateComment.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateComment(__scope: Construct, __resources: string[], __input: WorkDocsCreateCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateComment.property.comment"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment`](#aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment)

---


### WorkDocsResponsesCreateCommentComment <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateCommentComment(__scope: Construct, __resources: string[], __input: WorkDocsCreateCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.property.commentId"></a>

- *Type:* `string`

---

##### `contributor`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.property.contributor"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor`](#aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor)

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `parentId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.property.parentId"></a>

- *Type:* `string`

---

##### `recipientId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.property.recipientId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.property.status"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.property.text"></a>

- *Type:* `string`

---

##### `threadId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.property.threadId"></a>

- *Type:* `string`

---

##### `visibility`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentComment.property.visibility"></a>

- *Type:* `string`

---


### WorkDocsResponsesCreateCommentCommentContributor <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateCommentCommentContributor(__scope: Construct, __resources: string[], __input: WorkDocsCreateCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.emailAddress"></a>

- *Type:* `string`

---

##### `givenName`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.givenName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.id"></a>

- *Type:* `string`

---

##### `locale`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.locale"></a>

- *Type:* `string`

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.organizationId"></a>

- *Type:* `string`

---

##### `recycleBinFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.recycleBinFolderId"></a>

- *Type:* `string`

---

##### `rootFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.rootFolderId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.status"></a>

- *Type:* `string`

---

##### `storage`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.storage"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorage`](#aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorage)

---

##### `surname`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.surname"></a>

- *Type:* `string`

---

##### `timeZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.timeZoneId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.type"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributor.property.username"></a>

- *Type:* `string`

---


### WorkDocsResponsesCreateCommentCommentContributorStorage <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorage"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorage.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateCommentCommentContributorStorage(__scope: Construct, __resources: string[], __input: WorkDocsCreateCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `storageRule`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorage.property.storageRule"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule`](#aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule)

---

##### `storageUtilizedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorage.property.storageUtilizedInBytes"></a>

- *Type:* `number`

---


### WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule(__scope: Construct, __resources: string[], __input: WorkDocsCreateCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `storageAllocatedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule.property.storageAllocatedInBytes"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateCommentCommentContributorStorageStorageRule.property.storageType"></a>

- *Type:* `string`

---


### WorkDocsResponsesCreateFolder <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolder"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolder.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateFolder(__scope: Construct, __resources: string[], __input: WorkDocsCreateFolderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateFolderRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateFolderRequest)

---



#### Properties <a name="Properties"></a>

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolder.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata`](#aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata)

---


### WorkDocsResponsesCreateFolderMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateFolderMetadata(__scope: Construct, __resources: string[], __input: WorkDocsCreateFolderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateFolderRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateFolderRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.creatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.id"></a>

- *Type:* `string`

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.labels"></a>

- *Type:* `string`[]

---

##### `latestVersionSize`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.latestVersionSize"></a>

- *Type:* `number`

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.name"></a>

- *Type:* `string`

---

##### `parentFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.parentFolderId"></a>

- *Type:* `string`

---

##### `resourceState`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.resourceState"></a>

- *Type:* `string`

---

##### `signature`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.signature"></a>

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateFolderMetadata.property.size"></a>

- *Type:* `number`

---


### WorkDocsResponsesCreateNotificationSubscription <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscription.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateNotificationSubscription(__scope: Construct, __resources: string[], __input: WorkDocsCreateNotificationSubscriptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest)

---



#### Properties <a name="Properties"></a>

##### `subscription`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscription.property.subscription"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription`](#aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription)

---


### WorkDocsResponsesCreateNotificationSubscriptionSubscription <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription(__scope: Construct, __resources: string[], __input: WorkDocsCreateNotificationSubscriptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateNotificationSubscriptionRequest)

---



#### Properties <a name="Properties"></a>

##### `endPoint`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription.property.endPoint"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription.property.protocol"></a>

- *Type:* `string`

---

##### `subscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateNotificationSubscriptionSubscription.property.subscriptionId"></a>

- *Type:* `string`

---


### WorkDocsResponsesCreateUser <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUser"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUser.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateUser(__scope: Construct, __resources: string[], __input: WorkDocsCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser`](#aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser)

---


### WorkDocsResponsesCreateUserUser <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateUserUser(__scope: Construct, __resources: string[], __input: WorkDocsCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.emailAddress"></a>

- *Type:* `string`

---

##### `givenName`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.givenName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.id"></a>

- *Type:* `string`

---

##### `locale`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.locale"></a>

- *Type:* `string`

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.organizationId"></a>

- *Type:* `string`

---

##### `recycleBinFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.recycleBinFolderId"></a>

- *Type:* `string`

---

##### `rootFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.rootFolderId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.status"></a>

- *Type:* `string`

---

##### `storage`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.storage"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorage`](#aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorage)

---

##### `surname`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.surname"></a>

- *Type:* `string`

---

##### `timeZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.timeZoneId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.type"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUser.property.username"></a>

- *Type:* `string`

---


### WorkDocsResponsesCreateUserUserStorage <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorage"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorage.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateUserUserStorage(__scope: Construct, __resources: string[], __input: WorkDocsCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `storageRule`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorage.property.storageRule"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorageStorageRule`](#aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorageStorageRule)

---

##### `storageUtilizedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorage.property.storageUtilizedInBytes"></a>

- *Type:* `number`

---


### WorkDocsResponsesCreateUserUserStorageStorageRule <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorageStorageRule"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorageStorageRule.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesCreateUserUserStorageStorageRule(__scope: Construct, __resources: string[], __input: WorkDocsCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorageStorageRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorageStorageRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorageStorageRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `storageAllocatedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorageStorageRule.property.storageAllocatedInBytes"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesCreateUserUserStorageStorageRule.property.storageType"></a>

- *Type:* `string`

---


### WorkDocsResponsesDescribeActivities <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeActivities"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeActivities.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesDescribeActivities(__scope: Construct, __resources: string[], __input: WorkDocsDescribeActivitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeActivities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeActivities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeActivities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeActivitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeActivities.property.marker"></a>

- *Type:* `string`

---

##### `userActivities`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeActivities.property.userActivities"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsActivity`](#aws-cdk-sdk.workdocs.WorkDocsActivity)[]

---


### WorkDocsResponsesDescribeComments <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeComments"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeComments.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesDescribeComments(__scope: Construct, __resources: string[], __input: WorkDocsDescribeCommentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeComments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeComments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeComments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeCommentsRequest)

---



#### Properties <a name="Properties"></a>

##### `comments`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeComments.property.comments"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsComment`](#aws-cdk-sdk.workdocs.WorkDocsComment)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeComments.property.marker"></a>

- *Type:* `string`

---


### WorkDocsResponsesDescribeDocumentVersions <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeDocumentVersions"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeDocumentVersions.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesDescribeDocumentVersions(__scope: Construct, __resources: string[], __input: WorkDocsDescribeDocumentVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeDocumentVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeDocumentVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeDocumentVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeDocumentVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `documentVersions`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeDocumentVersions.property.documentVersions"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata`](#aws-cdk-sdk.workdocs.WorkDocsDocumentVersionMetadata)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeDocumentVersions.property.marker"></a>

- *Type:* `string`

---


### WorkDocsResponsesDescribeFolderContents <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeFolderContents"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeFolderContents.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesDescribeFolderContents(__scope: Construct, __resources: string[], __input: WorkDocsDescribeFolderContentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeFolderContents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeFolderContents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeFolderContents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeFolderContentsRequest)

---



#### Properties <a name="Properties"></a>

##### `documents`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeFolderContents.property.documents"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata`](#aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata)[]

---

##### `folders`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeFolderContents.property.folders"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsFolderMetadata`](#aws-cdk-sdk.workdocs.WorkDocsFolderMetadata)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeFolderContents.property.marker"></a>

- *Type:* `string`

---


### WorkDocsResponsesDescribeGroups <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeGroups"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeGroups.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesDescribeGroups(__scope: Construct, __resources: string[], __input: WorkDocsDescribeGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeGroups.property.groups"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGroupMetadata`](#aws-cdk-sdk.workdocs.WorkDocsGroupMetadata)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeGroups.property.marker"></a>

- *Type:* `string`

---


### WorkDocsResponsesDescribeNotificationSubscriptions <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeNotificationSubscriptions"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeNotificationSubscriptions.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesDescribeNotificationSubscriptions(__scope: Construct, __resources: string[], __input: WorkDocsDescribeNotificationSubscriptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeNotificationSubscriptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeNotificationSubscriptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeNotificationSubscriptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeNotificationSubscriptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeNotificationSubscriptions.property.marker"></a>

- *Type:* `string`

---

##### `subscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeNotificationSubscriptions.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsSubscription`](#aws-cdk-sdk.workdocs.WorkDocsSubscription)[]

---


### WorkDocsResponsesDescribeResourcePermissions <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeResourcePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeResourcePermissions.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesDescribeResourcePermissions(__scope: Construct, __resources: string[], __input: WorkDocsDescribeResourcePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeResourcePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeResourcePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeResourcePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeResourcePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeResourcePermissions.property.marker"></a>

- *Type:* `string`

---

##### `principals`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeResourcePermissions.property.principals"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsPrincipal`](#aws-cdk-sdk.workdocs.WorkDocsPrincipal)[]

---


### WorkDocsResponsesDescribeRootFolders <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeRootFolders"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeRootFolders.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesDescribeRootFolders(__scope: Construct, __resources: string[], __input: WorkDocsDescribeRootFoldersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeRootFolders.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeRootFolders.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeRootFolders.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeRootFoldersRequest)

---



#### Properties <a name="Properties"></a>

##### `folders`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeRootFolders.property.folders"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsFolderMetadata`](#aws-cdk-sdk.workdocs.WorkDocsFolderMetadata)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeRootFolders.property.marker"></a>

- *Type:* `string`

---


### WorkDocsResponsesDescribeUsers <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeUsers"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeUsers.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesDescribeUsers(__scope: Construct, __resources: string[], __input: WorkDocsDescribeUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest`](#aws-cdk-sdk.workdocs.WorkDocsDescribeUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeUsers.property.marker"></a>

- *Type:* `string`

---

##### `totalNumberOfUsers`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeUsers.property.totalNumberOfUsers"></a>

- *Type:* `number`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesDescribeUsers.property.users"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUser`](#aws-cdk-sdk.workdocs.WorkDocsUser)[]

---


### WorkDocsResponsesFetchCurrentUser <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUser"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUser.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchCurrentUser(__scope: Construct, __resources: string[], __input: WorkDocsGetCurrentUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser`](#aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser)

---


### WorkDocsResponsesFetchCurrentUserUser <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchCurrentUserUser(__scope: Construct, __resources: string[], __input: WorkDocsGetCurrentUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.emailAddress"></a>

- *Type:* `string`

---

##### `givenName`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.givenName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.id"></a>

- *Type:* `string`

---

##### `locale`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.locale"></a>

- *Type:* `string`

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.organizationId"></a>

- *Type:* `string`

---

##### `recycleBinFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.recycleBinFolderId"></a>

- *Type:* `string`

---

##### `rootFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.rootFolderId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.status"></a>

- *Type:* `string`

---

##### `storage`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.storage"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorage`](#aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorage)

---

##### `surname`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.surname"></a>

- *Type:* `string`

---

##### `timeZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.timeZoneId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.type"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUser.property.username"></a>

- *Type:* `string`

---


### WorkDocsResponsesFetchCurrentUserUserStorage <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorage"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorage.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchCurrentUserUserStorage(__scope: Construct, __resources: string[], __input: WorkDocsGetCurrentUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest)

---



#### Properties <a name="Properties"></a>

##### `storageRule`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorage.property.storageRule"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorageStorageRule`](#aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorageStorageRule)

---

##### `storageUtilizedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorage.property.storageUtilizedInBytes"></a>

- *Type:* `number`

---


### WorkDocsResponsesFetchCurrentUserUserStorageStorageRule <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorageStorageRule"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorageStorageRule.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchCurrentUserUserStorageStorageRule(__scope: Construct, __resources: string[], __input: WorkDocsGetCurrentUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorageStorageRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorageStorageRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorageStorageRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetCurrentUserRequest)

---



#### Properties <a name="Properties"></a>

##### `storageAllocatedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorageStorageRule.property.storageAllocatedInBytes"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchCurrentUserUserStorageStorageRule.property.storageType"></a>

- *Type:* `string`

---


### WorkDocsResponsesFetchDocument <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocument"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocument.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchDocument(__scope: Construct, __resources: string[], __input: WorkDocsGetDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `customMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocument.property.customMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocument.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata`](#aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata)

---


### WorkDocsResponsesFetchDocumentMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchDocumentMetadata(__scope: Construct, __resources: string[], __input: WorkDocsGetDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.property.creatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.property.id"></a>

- *Type:* `string`

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.property.labels"></a>

- *Type:* `string`[]

---

##### `latestVersionMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.property.latestVersionMetadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata`](#aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata)

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `parentFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.property.parentFolderId"></a>

- *Type:* `string`

---

##### `resourceState`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadata.property.resourceState"></a>

- *Type:* `string`

---


### WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata(__scope: Construct, __resources: string[], __input: WorkDocsGetDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `contentCreatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.contentCreatedTimestamp"></a>

- *Type:* `string`

---

##### `contentModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.contentModifiedTimestamp"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.contentType"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.creatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.id"></a>

- *Type:* `string`

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.name"></a>

- *Type:* `string`

---

##### `signature`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.signature"></a>

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.size"></a>

- *Type:* `number`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.source"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.status"></a>

- *Type:* `string`

---

##### `thumbnail`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentMetadataLatestVersionMetadata.property.thumbnail"></a>

- *Type:* {[ key: string ]: `string`}

---


### WorkDocsResponsesFetchDocumentPath <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPath"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPath.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchDocumentPath(__scope: Construct, __resources: string[], __input: WorkDocsGetDocumentPathRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPath.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPath.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPath.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest)

---



#### Properties <a name="Properties"></a>

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPath.property.path"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPathPath`](#aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPathPath)

---


### WorkDocsResponsesFetchDocumentPathPath <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPathPath"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPathPath.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchDocumentPathPath(__scope: Construct, __resources: string[], __input: WorkDocsGetDocumentPathRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPathPath.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPathPath.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPathPath.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetDocumentPathRequest)

---



#### Properties <a name="Properties"></a>

##### `components`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentPathPath.property.components"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResourcePathComponent`](#aws-cdk-sdk.workdocs.WorkDocsResourcePathComponent)[]

---


### WorkDocsResponsesFetchDocumentVersion <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersion"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersion.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchDocumentVersion(__scope: Construct, __resources: string[], __input: WorkDocsGetDocumentVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `customMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersion.property.customMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersion.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata`](#aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata)

---


### WorkDocsResponsesFetchDocumentVersionMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchDocumentVersionMetadata(__scope: Construct, __resources: string[], __input: WorkDocsGetDocumentVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetDocumentVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `contentCreatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.contentCreatedTimestamp"></a>

- *Type:* `string`

---

##### `contentModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.contentModifiedTimestamp"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.contentType"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.creatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.id"></a>

- *Type:* `string`

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.name"></a>

- *Type:* `string`

---

##### `signature`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.signature"></a>

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.size"></a>

- *Type:* `number`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.source"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.status"></a>

- *Type:* `string`

---

##### `thumbnail`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchDocumentVersionMetadata.property.thumbnail"></a>

- *Type:* {[ key: string ]: `string`}

---


### WorkDocsResponsesFetchFolder <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolder"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolder.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchFolder(__scope: Construct, __resources: string[], __input: WorkDocsGetFolderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetFolderRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetFolderRequest)

---



#### Properties <a name="Properties"></a>

##### `customMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolder.property.customMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolder.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata`](#aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata)

---


### WorkDocsResponsesFetchFolderMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchFolderMetadata(__scope: Construct, __resources: string[], __input: WorkDocsGetFolderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetFolderRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetFolderRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.creatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.id"></a>

- *Type:* `string`

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.labels"></a>

- *Type:* `string`[]

---

##### `latestVersionSize`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.latestVersionSize"></a>

- *Type:* `number`

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.name"></a>

- *Type:* `string`

---

##### `parentFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.parentFolderId"></a>

- *Type:* `string`

---

##### `resourceState`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.resourceState"></a>

- *Type:* `string`

---

##### `signature`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.signature"></a>

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderMetadata.property.size"></a>

- *Type:* `number`

---


### WorkDocsResponsesFetchFolderPath <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPath"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPath.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchFolderPath(__scope: Construct, __resources: string[], __input: WorkDocsGetFolderPathRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPath.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPath.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPath.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest)

---



#### Properties <a name="Properties"></a>

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPath.property.path"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPathPath`](#aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPathPath)

---


### WorkDocsResponsesFetchFolderPathPath <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPathPath"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPathPath.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchFolderPathPath(__scope: Construct, __resources: string[], __input: WorkDocsGetFolderPathRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPathPath.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPathPath.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPathPath.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetFolderPathRequest)

---



#### Properties <a name="Properties"></a>

##### `components`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchFolderPathPath.property.components"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResourcePathComponent`](#aws-cdk-sdk.workdocs.WorkDocsResourcePathComponent)[]

---


### WorkDocsResponsesFetchResources <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchResources"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchResources.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesFetchResources(__scope: Construct, __resources: string[], __input: WorkDocsGetResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsGetResourcesRequest`](#aws-cdk-sdk.workdocs.WorkDocsGetResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `documents`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchResources.property.documents"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata`](#aws-cdk-sdk.workdocs.WorkDocsDocumentMetadata)[]

---

##### `folders`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchResources.property.folders"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsFolderMetadata`](#aws-cdk-sdk.workdocs.WorkDocsFolderMetadata)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesFetchResources.property.marker"></a>

- *Type:* `string`

---


### WorkDocsResponsesInitiateDocumentVersionUpload <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUpload"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUpload.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesInitiateDocumentVersionUpload(__scope: Construct, __resources: string[], __input: WorkDocsInitiateDocumentVersionUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest`](#aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUpload.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata`](#aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata)

---

##### `uploadMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUpload.property.uploadMetadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata`](#aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata)

---


### WorkDocsResponsesInitiateDocumentVersionUploadMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata(__scope: Construct, __resources: string[], __input: WorkDocsInitiateDocumentVersionUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest`](#aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.property.creatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.property.id"></a>

- *Type:* `string`

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.property.labels"></a>

- *Type:* `string`[]

---

##### `latestVersionMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.property.latestVersionMetadata"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata`](#aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata)

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `parentFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.property.parentFolderId"></a>

- *Type:* `string`

---

##### `resourceState`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadata.property.resourceState"></a>

- *Type:* `string`

---


### WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata(__scope: Construct, __resources: string[], __input: WorkDocsInitiateDocumentVersionUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest`](#aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `contentCreatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.contentCreatedTimestamp"></a>

- *Type:* `string`

---

##### `contentModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.contentModifiedTimestamp"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.contentType"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.creatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.id"></a>

- *Type:* `string`

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.name"></a>

- *Type:* `string`

---

##### `signature`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.signature"></a>

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.size"></a>

- *Type:* `number`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.source"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.status"></a>

- *Type:* `string`

---

##### `thumbnail`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadMetadataLatestVersionMetadata.property.thumbnail"></a>

- *Type:* {[ key: string ]: `string`}

---


### WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata(__scope: Construct, __resources: string[], __input: WorkDocsInitiateDocumentVersionUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest`](#aws-cdk-sdk.workdocs.WorkDocsInitiateDocumentVersionUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `signedHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata.property.signedHeaders"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `uploadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesInitiateDocumentVersionUploadUploadMetadata.property.uploadUrl"></a>

- *Type:* `string`

---


### WorkDocsResponsesUpdateUser <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUser"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUser.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesUpdateUser(__scope: Construct, __resources: string[], __input: WorkDocsUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser`](#aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser)

---


### WorkDocsResponsesUpdateUserUser <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesUpdateUserUser(__scope: Construct, __resources: string[], __input: WorkDocsUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.emailAddress"></a>

- *Type:* `string`

---

##### `givenName`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.givenName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.id"></a>

- *Type:* `string`

---

##### `locale`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.locale"></a>

- *Type:* `string`

---

##### `modifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.modifiedTimestamp"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.organizationId"></a>

- *Type:* `string`

---

##### `recycleBinFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.recycleBinFolderId"></a>

- *Type:* `string`

---

##### `rootFolderId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.rootFolderId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.status"></a>

- *Type:* `string`

---

##### `storage`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.storage"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorage`](#aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorage)

---

##### `surname`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.surname"></a>

- *Type:* `string`

---

##### `timeZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.timeZoneId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.type"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUser.property.username"></a>

- *Type:* `string`

---


### WorkDocsResponsesUpdateUserUserStorage <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorage"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorage.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesUpdateUserUserStorage(__scope: Construct, __resources: string[], __input: WorkDocsUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `storageRule`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorage.property.storageRule"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorageStorageRule`](#aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorageStorageRule)

---

##### `storageUtilizedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorage.property.storageUtilizedInBytes"></a>

- *Type:* `number`

---


### WorkDocsResponsesUpdateUserUserStorageStorageRule <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorageStorageRule"></a>

#### Initializer <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorageStorageRule.Initializer"></a>

```typescript
import { workdocs } from 'aws-cdk-sdk'

new workdocs.WorkDocsResponsesUpdateUserUserStorageStorageRule(__scope: Construct, __resources: string[], __input: WorkDocsUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorageStorageRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorageStorageRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorageStorageRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest`](#aws-cdk-sdk.workdocs.WorkDocsUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `storageAllocatedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorageStorageRule.property.storageAllocatedInBytes"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.workdocs.WorkDocsResponsesUpdateUserUserStorageStorageRule.property.storageType"></a>

- *Type:* `string`

---



