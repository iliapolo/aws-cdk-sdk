# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### WorkSpacesClient <a name="aws-cdk-sdk.workspaces.WorkSpacesClient"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateConnectionAlias` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.associateConnectionAlias"></a>

```typescript
public associateConnectionAlias(input: WorkSpacesAssociateConnectionAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesAssociateConnectionAliasRequest`](#aws-cdk-sdk.workspaces.WorkSpacesAssociateConnectionAliasRequest)

---

##### `associateIpGroups` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.associateIpGroups"></a>

```typescript
public associateIpGroups(input: WorkSpacesAssociateIpGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesAssociateIpGroupsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesAssociateIpGroupsRequest)

---

##### `authorizeIpRules` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.authorizeIpRules"></a>

```typescript
public authorizeIpRules(input: WorkSpacesAuthorizeIpRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesAuthorizeIpRulesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesAuthorizeIpRulesRequest)

---

##### `copyWorkspaceImage` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.copyWorkspaceImage"></a>

```typescript
public copyWorkspaceImage(input: WorkSpacesCopyWorkspaceImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageRequest`](#aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageRequest)

---

##### `createConnectionAlias` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.createConnectionAlias"></a>

```typescript
public createConnectionAlias(input: WorkSpacesCreateConnectionAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesCreateConnectionAliasRequest`](#aws-cdk-sdk.workspaces.WorkSpacesCreateConnectionAliasRequest)

---

##### `createIpGroup` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.createIpGroup"></a>

```typescript
public createIpGroup(input: WorkSpacesCreateIpGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupRequest`](#aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupRequest)

---

##### `createTags` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.createTags"></a>

```typescript
public createTags(input: WorkSpacesCreateTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesCreateTagsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesCreateTagsRequest)

---

##### `createWorkspaces` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.createWorkspaces"></a>

```typescript
public createWorkspaces(input: WorkSpacesCreateWorkspacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesCreateWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesCreateWorkspacesRequest)

---

##### `deleteConnectionAlias` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.deleteConnectionAlias"></a>

```typescript
public deleteConnectionAlias(input: WorkSpacesDeleteConnectionAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDeleteConnectionAliasRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDeleteConnectionAliasRequest)

---

##### `deleteIpGroup` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.deleteIpGroup"></a>

```typescript
public deleteIpGroup(input: WorkSpacesDeleteIpGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDeleteIpGroupRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDeleteIpGroupRequest)

---

##### `deleteTags` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.deleteTags"></a>

```typescript
public deleteTags(input: WorkSpacesDeleteTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDeleteTagsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDeleteTagsRequest)

---

##### `deleteWorkspaceImage` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.deleteWorkspaceImage"></a>

```typescript
public deleteWorkspaceImage(input: WorkSpacesDeleteWorkspaceImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDeleteWorkspaceImageRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDeleteWorkspaceImageRequest)

---

##### `deregisterWorkspaceDirectory` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.deregisterWorkspaceDirectory"></a>

```typescript
public deregisterWorkspaceDirectory(input: WorkSpacesDeregisterWorkspaceDirectoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDeregisterWorkspaceDirectoryRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDeregisterWorkspaceDirectoryRequest)

---

##### `describeAccount` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeAccount"></a>

```typescript
public describeAccount()
```

##### `describeAccountModifications` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeAccountModifications"></a>

```typescript
public describeAccountModifications(input: WorkSpacesDescribeAccountModificationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountModificationsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountModificationsRequest)

---

##### `describeClientProperties` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeClientProperties"></a>

```typescript
public describeClientProperties(input: WorkSpacesDescribeClientPropertiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeClientPropertiesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeClientPropertiesRequest)

---

##### `describeConnectionAliases` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeConnectionAliases"></a>

```typescript
public describeConnectionAliases(input: WorkSpacesDescribeConnectionAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesRequest)

---

##### `describeConnectionAliasPermissions` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeConnectionAliasPermissions"></a>

```typescript
public describeConnectionAliasPermissions(input: WorkSpacesDescribeConnectionAliasPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsRequest)

---

##### `describeIpGroups` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeIpGroups"></a>

```typescript
public describeIpGroups(input: WorkSpacesDescribeIpGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsRequest)

---

##### `describeTags` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeTags"></a>

```typescript
public describeTags(input: WorkSpacesDescribeTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeTagsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeTagsRequest)

---

##### `describeWorkspaceBundles` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeWorkspaceBundles"></a>

```typescript
public describeWorkspaceBundles(input: WorkSpacesDescribeWorkspaceBundlesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesRequest)

---

##### `describeWorkspaceDirectories` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeWorkspaceDirectories"></a>

```typescript
public describeWorkspaceDirectories(input: WorkSpacesDescribeWorkspaceDirectoriesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesRequest)

---

##### `describeWorkspaceImagePermissions` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeWorkspaceImagePermissions"></a>

```typescript
public describeWorkspaceImagePermissions(input: WorkSpacesDescribeWorkspaceImagePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsRequest)

---

##### `describeWorkspaceImages` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeWorkspaceImages"></a>

```typescript
public describeWorkspaceImages(input: WorkSpacesDescribeWorkspaceImagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesRequest)

---

##### `describeWorkspaces` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeWorkspaces"></a>

```typescript
public describeWorkspaces(input: WorkSpacesDescribeWorkspacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest)

---

##### `describeWorkspacesConnectionStatus` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeWorkspacesConnectionStatus"></a>

```typescript
public describeWorkspacesConnectionStatus(input: WorkSpacesDescribeWorkspacesConnectionStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesConnectionStatusRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesConnectionStatusRequest)

---

##### `describeWorkspaceSnapshots` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.describeWorkspaceSnapshots"></a>

```typescript
public describeWorkspaceSnapshots(input: WorkSpacesDescribeWorkspaceSnapshotsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceSnapshotsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceSnapshotsRequest)

---

##### `disassociateConnectionAlias` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.disassociateConnectionAlias"></a>

```typescript
public disassociateConnectionAlias(input: WorkSpacesDisassociateConnectionAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDisassociateConnectionAliasRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDisassociateConnectionAliasRequest)

---

##### `disassociateIpGroups` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.disassociateIpGroups"></a>

```typescript
public disassociateIpGroups(input: WorkSpacesDisassociateIpGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDisassociateIpGroupsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDisassociateIpGroupsRequest)

---

##### `importWorkspaceImage` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.importWorkspaceImage"></a>

```typescript
public importWorkspaceImage(input: WorkSpacesImportWorkspaceImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest`](#aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest)

---

##### `listAvailableManagementCidrRanges` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.listAvailableManagementCidrRanges"></a>

```typescript
public listAvailableManagementCidrRanges(input: WorkSpacesListAvailableManagementCidrRangesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesRequest)

---

##### `migrateWorkspace` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.migrateWorkspace"></a>

```typescript
public migrateWorkspace(input: WorkSpacesMigrateWorkspaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesMigrateWorkspaceRequest`](#aws-cdk-sdk.workspaces.WorkSpacesMigrateWorkspaceRequest)

---

##### `modifyAccount` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.modifyAccount"></a>

```typescript
public modifyAccount(input: WorkSpacesModifyAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesModifyAccountRequest`](#aws-cdk-sdk.workspaces.WorkSpacesModifyAccountRequest)

---

##### `modifyClientProperties` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.modifyClientProperties"></a>

```typescript
public modifyClientProperties(input: WorkSpacesModifyClientPropertiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesModifyClientPropertiesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesModifyClientPropertiesRequest)

---

##### `modifySelfservicePermissions` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.modifySelfservicePermissions"></a>

```typescript
public modifySelfservicePermissions(input: WorkSpacesModifySelfservicePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesModifySelfservicePermissionsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesModifySelfservicePermissionsRequest)

---

##### `modifyWorkspaceAccessProperties` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.modifyWorkspaceAccessProperties"></a>

```typescript
public modifyWorkspaceAccessProperties(input: WorkSpacesModifyWorkspaceAccessPropertiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceAccessPropertiesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceAccessPropertiesRequest)

---

##### `modifyWorkspaceCreationProperties` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.modifyWorkspaceCreationProperties"></a>

```typescript
public modifyWorkspaceCreationProperties(input: WorkSpacesModifyWorkspaceCreationPropertiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceCreationPropertiesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceCreationPropertiesRequest)

---

##### `modifyWorkspaceProperties` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.modifyWorkspaceProperties"></a>

```typescript
public modifyWorkspaceProperties(input: WorkSpacesModifyWorkspacePropertiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspacePropertiesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspacePropertiesRequest)

---

##### `modifyWorkspaceState` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.modifyWorkspaceState"></a>

```typescript
public modifyWorkspaceState(input: WorkSpacesModifyWorkspaceStateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceStateRequest`](#aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceStateRequest)

---

##### `rebootWorkspaces` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.rebootWorkspaces"></a>

```typescript
public rebootWorkspaces(input: WorkSpacesRebootWorkspacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesRebootWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesRebootWorkspacesRequest)

---

##### `rebuildWorkspaces` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.rebuildWorkspaces"></a>

```typescript
public rebuildWorkspaces(input: WorkSpacesRebuildWorkspacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesRebuildWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesRebuildWorkspacesRequest)

---

##### `registerWorkspaceDirectory` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.registerWorkspaceDirectory"></a>

```typescript
public registerWorkspaceDirectory(input: WorkSpacesRegisterWorkspaceDirectoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesRegisterWorkspaceDirectoryRequest`](#aws-cdk-sdk.workspaces.WorkSpacesRegisterWorkspaceDirectoryRequest)

---

##### `restoreWorkspace` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.restoreWorkspace"></a>

```typescript
public restoreWorkspace(input: WorkSpacesRestoreWorkspaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesRestoreWorkspaceRequest`](#aws-cdk-sdk.workspaces.WorkSpacesRestoreWorkspaceRequest)

---

##### `revokeIpRules` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.revokeIpRules"></a>

```typescript
public revokeIpRules(input: WorkSpacesRevokeIpRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesRevokeIpRulesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesRevokeIpRulesRequest)

---

##### `startWorkspaces` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.startWorkspaces"></a>

```typescript
public startWorkspaces(input: WorkSpacesStartWorkspacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesStartWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesStartWorkspacesRequest)

---

##### `stopWorkspaces` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.stopWorkspaces"></a>

```typescript
public stopWorkspaces(input: WorkSpacesStopWorkspacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesStopWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesStopWorkspacesRequest)

---

##### `terminateWorkspaces` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.terminateWorkspaces"></a>

```typescript
public terminateWorkspaces(input: WorkSpacesTerminateWorkspacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTerminateWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesTerminateWorkspacesRequest)

---

##### `updateConnectionAliasPermission` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.updateConnectionAliasPermission"></a>

```typescript
public updateConnectionAliasPermission(input: WorkSpacesUpdateConnectionAliasPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesUpdateConnectionAliasPermissionRequest`](#aws-cdk-sdk.workspaces.WorkSpacesUpdateConnectionAliasPermissionRequest)

---

##### `updateRulesOfIpGroup` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.updateRulesOfIpGroup"></a>

```typescript
public updateRulesOfIpGroup(input: WorkSpacesUpdateRulesOfIpGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesUpdateRulesOfIpGroupRequest`](#aws-cdk-sdk.workspaces.WorkSpacesUpdateRulesOfIpGroupRequest)

---

##### `updateWorkspaceImagePermission` <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.updateWorkspaceImagePermission"></a>

```typescript
public updateWorkspaceImagePermission(input: WorkSpacesUpdateWorkspaceImagePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesUpdateWorkspaceImagePermissionRequest`](#aws-cdk-sdk.workspaces.WorkSpacesUpdateWorkspaceImagePermissionRequest)

---




## Structs <a name="Structs"></a>

### WorkSpacesAccountModification <a name="aws-cdk-sdk.workspaces.WorkSpacesAccountModification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesAccountModification: workspaces.WorkSpacesAccountModification = { ... }
```

##### `dedicatedTenancyManagementCidrRange`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAccountModification.property.dedicatedTenancyManagementCidrRange"></a>

- *Type:* `string`

---

##### `dedicatedTenancySupport`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAccountModification.property.dedicatedTenancySupport"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAccountModification.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAccountModification.property.errorMessage"></a>

- *Type:* `string`

---

##### `modificationState`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAccountModification.property.modificationState"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAccountModification.property.startTime"></a>

- *Type:* `string`

---

### WorkSpacesAssociateConnectionAliasRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesAssociateConnectionAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesAssociateConnectionAliasRequest: workspaces.WorkSpacesAssociateConnectionAliasRequest = { ... }
```

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAssociateConnectionAliasRequest.property.aliasId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAssociateConnectionAliasRequest.property.resourceId"></a>

- *Type:* `string`

---

### WorkSpacesAssociateConnectionAliasResult <a name="aws-cdk-sdk.workspaces.WorkSpacesAssociateConnectionAliasResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesAssociateConnectionAliasResult: workspaces.WorkSpacesAssociateConnectionAliasResult = { ... }
```

##### `connectionIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAssociateConnectionAliasResult.property.connectionIdentifier"></a>

- *Type:* `string`

---

### WorkSpacesAssociateIpGroupsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesAssociateIpGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesAssociateIpGroupsRequest: workspaces.WorkSpacesAssociateIpGroupsRequest = { ... }
```

##### `directoryId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAssociateIpGroupsRequest.property.directoryId"></a>

- *Type:* `string`

---

##### `groupIds`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAssociateIpGroupsRequest.property.groupIds"></a>

- *Type:* `string`[]

---

### WorkSpacesAssociateIpGroupsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesAssociateIpGroupsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesAssociateIpGroupsResult: workspaces.WorkSpacesAssociateIpGroupsResult = { ... }
```

### WorkSpacesAuthorizeIpRulesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesAuthorizeIpRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesAuthorizeIpRulesRequest: workspaces.WorkSpacesAuthorizeIpRulesRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAuthorizeIpRulesRequest.property.groupId"></a>

- *Type:* `string`

---

##### `userRules`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesAuthorizeIpRulesRequest.property.userRules"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem`](#aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem)[]

---

### WorkSpacesAuthorizeIpRulesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesAuthorizeIpRulesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesAuthorizeIpRulesResult: workspaces.WorkSpacesAuthorizeIpRulesResult = { ... }
```

### WorkSpacesClientProperties <a name="aws-cdk-sdk.workspaces.WorkSpacesClientProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesClientProperties: workspaces.WorkSpacesClientProperties = { ... }
```

##### `reconnectEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClientProperties.property.reconnectEnabled"></a>

- *Type:* `string`

---

### WorkSpacesClientPropertiesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesClientPropertiesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesClientPropertiesResult: workspaces.WorkSpacesClientPropertiesResult = { ... }
```

##### `clientProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClientPropertiesResult.property.clientProperties"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesClientProperties`](#aws-cdk-sdk.workspaces.WorkSpacesClientProperties)

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesClientPropertiesResult.property.resourceId"></a>

- *Type:* `string`

---

### WorkSpacesComputeType <a name="aws-cdk-sdk.workspaces.WorkSpacesComputeType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesComputeType: workspaces.WorkSpacesComputeType = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesComputeType.property.name"></a>

- *Type:* `string`

---

### WorkSpacesConnectionAlias <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAlias"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesConnectionAlias: workspaces.WorkSpacesConnectionAlias = { ... }
```

##### `aliasId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAlias.property.aliasId"></a>

- *Type:* `string`

---

##### `associations`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAlias.property.associations"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasAssociation`](#aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasAssociation)[]

---

##### `connectionString`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAlias.property.connectionString"></a>

- *Type:* `string`

---

##### `ownerAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAlias.property.ownerAccountId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAlias.property.state"></a>

- *Type:* `string`

---

### WorkSpacesConnectionAliasAssociation <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesConnectionAliasAssociation: workspaces.WorkSpacesConnectionAliasAssociation = { ... }
```

##### `associatedAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasAssociation.property.associatedAccountId"></a>

- *Type:* `string`

---

##### `associationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasAssociation.property.associationStatus"></a>

- *Type:* `string`

---

##### `connectionIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasAssociation.property.connectionIdentifier"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasAssociation.property.resourceId"></a>

- *Type:* `string`

---

### WorkSpacesConnectionAliasPermission <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasPermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesConnectionAliasPermission: workspaces.WorkSpacesConnectionAliasPermission = { ... }
```

##### `allowAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasPermission.property.allowAssociation"></a>

- *Type:* `boolean`

---

##### `sharedAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasPermission.property.sharedAccountId"></a>

- *Type:* `string`

---

### WorkSpacesCopyWorkspaceImageRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesCopyWorkspaceImageRequest: workspaces.WorkSpacesCopyWorkspaceImageRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageRequest.property.name"></a>

- *Type:* `string`

---

##### `sourceImageId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageRequest.property.sourceImageId"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageRequest.property.sourceRegion"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTag`](#aws-cdk-sdk.workspaces.WorkSpacesTag)[]

---

### WorkSpacesCopyWorkspaceImageResult <a name="aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesCopyWorkspaceImageResult: workspaces.WorkSpacesCopyWorkspaceImageResult = { ... }
```

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageResult.property.imageId"></a>

- *Type:* `string`

---

### WorkSpacesCreateConnectionAliasRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateConnectionAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesCreateConnectionAliasRequest: workspaces.WorkSpacesCreateConnectionAliasRequest = { ... }
```

##### `connectionString`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateConnectionAliasRequest.property.connectionString"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateConnectionAliasRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTag`](#aws-cdk-sdk.workspaces.WorkSpacesTag)[]

---

### WorkSpacesCreateConnectionAliasResult <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateConnectionAliasResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesCreateConnectionAliasResult: workspaces.WorkSpacesCreateConnectionAliasResult = { ... }
```

##### `aliasId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateConnectionAliasResult.property.aliasId"></a>

- *Type:* `string`

---

### WorkSpacesCreateIpGroupRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesCreateIpGroupRequest: workspaces.WorkSpacesCreateIpGroupRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `groupDesc`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupRequest.property.groupDesc"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTag`](#aws-cdk-sdk.workspaces.WorkSpacesTag)[]

---

##### `userRules`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupRequest.property.userRules"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem`](#aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem)[]

---

### WorkSpacesCreateIpGroupResult <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesCreateIpGroupResult: workspaces.WorkSpacesCreateIpGroupResult = { ... }
```

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupResult.property.groupId"></a>

- *Type:* `string`

---

### WorkSpacesCreateTagsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesCreateTagsRequest: workspaces.WorkSpacesCreateTagsRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateTagsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateTagsRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTag`](#aws-cdk-sdk.workspaces.WorkSpacesTag)[]

---

### WorkSpacesCreateTagsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateTagsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesCreateTagsResult: workspaces.WorkSpacesCreateTagsResult = { ... }
```

### WorkSpacesCreateWorkspacesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateWorkspacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesCreateWorkspacesRequest: workspaces.WorkSpacesCreateWorkspacesRequest = { ... }
```

##### `workspaces`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateWorkspacesRequest.property.workspaces"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest)[]

---

### WorkSpacesCreateWorkspacesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateWorkspacesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesCreateWorkspacesResult: workspaces.WorkSpacesCreateWorkspacesResult = { ... }
```

##### `failedRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateWorkspacesResult.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedCreateWorkspaceRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedCreateWorkspaceRequest)[]

---

##### `pendingRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesCreateWorkspacesResult.property.pendingRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspace`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspace)[]

---

### WorkSpacesDefaultWorkspaceCreationProperties <a name="aws-cdk-sdk.workspaces.WorkSpacesDefaultWorkspaceCreationProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDefaultWorkspaceCreationProperties: workspaces.WorkSpacesDefaultWorkspaceCreationProperties = { ... }
```

##### `customSecurityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDefaultWorkspaceCreationProperties.property.customSecurityGroupId"></a>

- *Type:* `string`

---

##### `defaultOu`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDefaultWorkspaceCreationProperties.property.defaultOu"></a>

- *Type:* `string`

---

##### `enableInternetAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDefaultWorkspaceCreationProperties.property.enableInternetAccess"></a>

- *Type:* `boolean`

---

##### `enableMaintenanceMode`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDefaultWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

- *Type:* `boolean`

---

##### `enableWorkDocs`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDefaultWorkspaceCreationProperties.property.enableWorkDocs"></a>

- *Type:* `boolean`

---

##### `userEnabledAsLocalAdministrator`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDefaultWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

- *Type:* `boolean`

---

### WorkSpacesDeleteConnectionAliasRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteConnectionAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDeleteConnectionAliasRequest: workspaces.WorkSpacesDeleteConnectionAliasRequest = { ... }
```

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteConnectionAliasRequest.property.aliasId"></a>

- *Type:* `string`

---

### WorkSpacesDeleteConnectionAliasResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteConnectionAliasResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDeleteConnectionAliasResult: workspaces.WorkSpacesDeleteConnectionAliasResult = { ... }
```

### WorkSpacesDeleteIpGroupRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteIpGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDeleteIpGroupRequest: workspaces.WorkSpacesDeleteIpGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteIpGroupRequest.property.groupId"></a>

- *Type:* `string`

---

### WorkSpacesDeleteIpGroupResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteIpGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDeleteIpGroupResult: workspaces.WorkSpacesDeleteIpGroupResult = { ... }
```

### WorkSpacesDeleteTagsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDeleteTagsRequest: workspaces.WorkSpacesDeleteTagsRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteTagsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteTagsRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### WorkSpacesDeleteTagsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteTagsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDeleteTagsResult: workspaces.WorkSpacesDeleteTagsResult = { ... }
```

### WorkSpacesDeleteWorkspaceImageRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteWorkspaceImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDeleteWorkspaceImageRequest: workspaces.WorkSpacesDeleteWorkspaceImageRequest = { ... }
```

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteWorkspaceImageRequest.property.imageId"></a>

- *Type:* `string`

---

### WorkSpacesDeleteWorkspaceImageResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDeleteWorkspaceImageResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDeleteWorkspaceImageResult: workspaces.WorkSpacesDeleteWorkspaceImageResult = { ... }
```

### WorkSpacesDeregisterWorkspaceDirectoryRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDeregisterWorkspaceDirectoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDeregisterWorkspaceDirectoryRequest: workspaces.WorkSpacesDeregisterWorkspaceDirectoryRequest = { ... }
```

##### `directoryId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDeregisterWorkspaceDirectoryRequest.property.directoryId"></a>

- *Type:* `string`

---

### WorkSpacesDeregisterWorkspaceDirectoryResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDeregisterWorkspaceDirectoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDeregisterWorkspaceDirectoryResult: workspaces.WorkSpacesDeregisterWorkspaceDirectoryResult = { ... }
```

### WorkSpacesDescribeAccountModificationsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountModificationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeAccountModificationsRequest: workspaces.WorkSpacesDescribeAccountModificationsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountModificationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeAccountModificationsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountModificationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeAccountModificationsResult: workspaces.WorkSpacesDescribeAccountModificationsResult = { ... }
```

##### `accountModifications`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountModificationsResult.property.accountModifications"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesAccountModification`](#aws-cdk-sdk.workspaces.WorkSpacesAccountModification)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountModificationsResult.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeAccountRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeAccountRequest: workspaces.WorkSpacesDescribeAccountRequest = { ... }
```

### WorkSpacesDescribeAccountResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeAccountResult: workspaces.WorkSpacesDescribeAccountResult = { ... }
```

##### `dedicatedTenancyManagementCidrRange`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountResult.property.dedicatedTenancyManagementCidrRange"></a>

- *Type:* `string`

---

##### `dedicatedTenancySupport`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountResult.property.dedicatedTenancySupport"></a>

- *Type:* `string`

---

### WorkSpacesDescribeClientPropertiesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeClientPropertiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeClientPropertiesRequest: workspaces.WorkSpacesDescribeClientPropertiesRequest = { ... }
```

##### `resourceIds`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeClientPropertiesRequest.property.resourceIds"></a>

- *Type:* `string`[]

---

### WorkSpacesDescribeClientPropertiesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeClientPropertiesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeClientPropertiesResult: workspaces.WorkSpacesDescribeClientPropertiesResult = { ... }
```

##### `clientPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeClientPropertiesResult.property.clientPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesClientPropertiesResult`](#aws-cdk-sdk.workspaces.WorkSpacesClientPropertiesResult)[]

---

### WorkSpacesDescribeConnectionAliasesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeConnectionAliasesRequest: workspaces.WorkSpacesDescribeConnectionAliasesRequest = { ... }
```

##### `aliasIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesRequest.property.aliasIds"></a>

- *Type:* `string`[]

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesRequest.property.resourceId"></a>

- *Type:* `string`

---

### WorkSpacesDescribeConnectionAliasesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeConnectionAliasesResult: workspaces.WorkSpacesDescribeConnectionAliasesResult = { ... }
```

##### `connectionAliases`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesResult.property.connectionAliases"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesConnectionAlias`](#aws-cdk-sdk.workspaces.WorkSpacesConnectionAlias)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesResult.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeConnectionAliasPermissionsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeConnectionAliasPermissionsRequest: workspaces.WorkSpacesDescribeConnectionAliasPermissionsRequest = { ... }
```

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsRequest.property.aliasId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeConnectionAliasPermissionsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeConnectionAliasPermissionsResult: workspaces.WorkSpacesDescribeConnectionAliasPermissionsResult = { ... }
```

##### `aliasId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsResult.property.aliasId"></a>

- *Type:* `string`

---

##### `connectionAliasPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsResult.property.connectionAliasPermissions"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasPermission`](#aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasPermission)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsResult.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeIpGroupsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeIpGroupsRequest: workspaces.WorkSpacesDescribeIpGroupsRequest = { ... }
```

##### `groupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsRequest.property.groupIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeIpGroupsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeIpGroupsResult: workspaces.WorkSpacesDescribeIpGroupsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsResult.property.result"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspacesIpGroup`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspacesIpGroup)[]

---

### WorkSpacesDescribeTagsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeTagsRequest: workspaces.WorkSpacesDescribeTagsRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeTagsRequest.property.resourceId"></a>

- *Type:* `string`

---

### WorkSpacesDescribeTagsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeTagsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeTagsResult: workspaces.WorkSpacesDescribeTagsResult = { ... }
```

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeTagsResult.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTag`](#aws-cdk-sdk.workspaces.WorkSpacesTag)[]

---

### WorkSpacesDescribeWorkspaceBundlesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspaceBundlesRequest: workspaces.WorkSpacesDescribeWorkspaceBundlesRequest = { ... }
```

##### `bundleIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesRequest.property.bundleIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesRequest.property.owner"></a>

- *Type:* `string`

---

### WorkSpacesDescribeWorkspaceBundlesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspaceBundlesResult: workspaces.WorkSpacesDescribeWorkspaceBundlesResult = { ... }
```

##### `bundles`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesResult.property.bundles"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesResult.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeWorkspaceDirectoriesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspaceDirectoriesRequest: workspaces.WorkSpacesDescribeWorkspaceDirectoriesRequest = { ... }
```

##### `directoryIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesRequest.property.directoryIds"></a>

- *Type:* `string`[]

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeWorkspaceDirectoriesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspaceDirectoriesResult: workspaces.WorkSpacesDescribeWorkspaceDirectoriesResult = { ... }
```

##### `directories`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesResult.property.directories"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesResult.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeWorkspaceImagePermissionsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspaceImagePermissionsRequest: workspaces.WorkSpacesDescribeWorkspaceImagePermissionsRequest = { ... }
```

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsRequest.property.imageId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeWorkspaceImagePermissionsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspaceImagePermissionsResult: workspaces.WorkSpacesDescribeWorkspaceImagePermissionsResult = { ... }
```

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsResult.property.imageId"></a>

- *Type:* `string`

---

##### `imagePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsResult.property.imagePermissions"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesImagePermission`](#aws-cdk-sdk.workspaces.WorkSpacesImagePermission)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsResult.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeWorkspaceImagesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspaceImagesRequest: workspaces.WorkSpacesDescribeWorkspaceImagesRequest = { ... }
```

##### `imageIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesRequest.property.imageIds"></a>

- *Type:* `string`[]

---

##### `imageType`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesRequest.property.imageType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeWorkspaceImagesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspaceImagesResult: workspaces.WorkSpacesDescribeWorkspaceImagesResult = { ... }
```

##### `images`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesResult.property.images"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesResult.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesDescribeWorkspacesConnectionStatusRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesConnectionStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspacesConnectionStatusRequest: workspaces.WorkSpacesDescribeWorkspacesConnectionStatusRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesConnectionStatusRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `workspaceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesConnectionStatusRequest.property.workspaceIds"></a>

- *Type:* `string`[]

---

### WorkSpacesDescribeWorkspacesConnectionStatusResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesConnectionStatusResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspacesConnectionStatusResult: workspaces.WorkSpacesDescribeWorkspacesConnectionStatusResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesConnectionStatusResult.property.nextToken"></a>

- *Type:* `string`

---

##### `workspacesConnectionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesConnectionStatusResult.property.workspacesConnectionStatus"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceConnectionStatus`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceConnectionStatus)[]

---

### WorkSpacesDescribeWorkspaceSnapshotsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceSnapshotsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspaceSnapshotsRequest: workspaces.WorkSpacesDescribeWorkspaceSnapshotsRequest = { ... }
```

##### `workspaceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceSnapshotsRequest.property.workspaceId"></a>

- *Type:* `string`

---

### WorkSpacesDescribeWorkspaceSnapshotsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceSnapshotsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspaceSnapshotsResult: workspaces.WorkSpacesDescribeWorkspaceSnapshotsResult = { ... }
```

##### `rebuildSnapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceSnapshotsResult.property.rebuildSnapshots"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesSnapshot`](#aws-cdk-sdk.workspaces.WorkSpacesSnapshot)[]

---

##### `restoreSnapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceSnapshotsResult.property.restoreSnapshots"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesSnapshot`](#aws-cdk-sdk.workspaces.WorkSpacesSnapshot)[]

---

### WorkSpacesDescribeWorkspacesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspacesRequest: workspaces.WorkSpacesDescribeWorkspacesRequest = { ... }
```

##### `bundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest.property.bundleId"></a>

- *Type:* `string`

---

##### `directoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest.property.directoryId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest.property.userName"></a>

- *Type:* `string`

---

##### `workspaceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest.property.workspaceIds"></a>

- *Type:* `string`[]

---

### WorkSpacesDescribeWorkspacesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDescribeWorkspacesResult: workspaces.WorkSpacesDescribeWorkspacesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `workspaces`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesResult.property.workspaces"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspace`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspace)[]

---

### WorkSpacesDisassociateConnectionAliasRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDisassociateConnectionAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDisassociateConnectionAliasRequest: workspaces.WorkSpacesDisassociateConnectionAliasRequest = { ... }
```

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDisassociateConnectionAliasRequest.property.aliasId"></a>

- *Type:* `string`

---

### WorkSpacesDisassociateConnectionAliasResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDisassociateConnectionAliasResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDisassociateConnectionAliasResult: workspaces.WorkSpacesDisassociateConnectionAliasResult = { ... }
```

### WorkSpacesDisassociateIpGroupsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesDisassociateIpGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDisassociateIpGroupsRequest: workspaces.WorkSpacesDisassociateIpGroupsRequest = { ... }
```

##### `directoryId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDisassociateIpGroupsRequest.property.directoryId"></a>

- *Type:* `string`

---

##### `groupIds`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesDisassociateIpGroupsRequest.property.groupIds"></a>

- *Type:* `string`[]

---

### WorkSpacesDisassociateIpGroupsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesDisassociateIpGroupsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesDisassociateIpGroupsResult: workspaces.WorkSpacesDisassociateIpGroupsResult = { ... }
```

### WorkSpacesFailedCreateWorkspaceRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesFailedCreateWorkspaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesFailedCreateWorkspaceRequest: workspaces.WorkSpacesFailedCreateWorkspaceRequest = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesFailedCreateWorkspaceRequest.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesFailedCreateWorkspaceRequest.property.errorMessage"></a>

- *Type:* `string`

---

##### `workspaceRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesFailedCreateWorkspaceRequest.property.workspaceRequest"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest)

---

### WorkSpacesFailedWorkspaceChangeRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesFailedWorkspaceChangeRequest: workspaces.WorkSpacesFailedWorkspaceChangeRequest = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest.property.errorMessage"></a>

- *Type:* `string`

---

##### `workspaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest.property.workspaceId"></a>

- *Type:* `string`

---

### WorkSpacesImagePermission <a name="aws-cdk-sdk.workspaces.WorkSpacesImagePermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesImagePermission: workspaces.WorkSpacesImagePermission = { ... }
```

##### `sharedAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesImagePermission.property.sharedAccountId"></a>

- *Type:* `string`

---

### WorkSpacesImportWorkspaceImageRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesImportWorkspaceImageRequest: workspaces.WorkSpacesImportWorkspaceImageRequest = { ... }
```

##### `ec2ImageId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest.property.ec2ImageId"></a>

- *Type:* `string`

---

##### `imageDescription`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest.property.imageDescription"></a>

- *Type:* `string`

---

##### `imageName`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest.property.imageName"></a>

- *Type:* `string`

---

##### `ingestionProcess`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest.property.ingestionProcess"></a>

- *Type:* `string`

---

##### `applications`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest.property.applications"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTag`](#aws-cdk-sdk.workspaces.WorkSpacesTag)[]

---

### WorkSpacesImportWorkspaceImageResult <a name="aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesImportWorkspaceImageResult: workspaces.WorkSpacesImportWorkspaceImageResult = { ... }
```

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageResult.property.imageId"></a>

- *Type:* `string`

---

### WorkSpacesIpRuleItem <a name="aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesIpRuleItem: workspaces.WorkSpacesIpRuleItem = { ... }
```

##### `ipRule`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem.property.ipRule"></a>

- *Type:* `string`

---

##### `ruleDesc`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem.property.ruleDesc"></a>

- *Type:* `string`

---

### WorkSpacesListAvailableManagementCidrRangesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesListAvailableManagementCidrRangesRequest: workspaces.WorkSpacesListAvailableManagementCidrRangesRequest = { ... }
```

##### `managementCidrRangeConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesRequest.property.managementCidrRangeConstraint"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesListAvailableManagementCidrRangesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesListAvailableManagementCidrRangesResult: workspaces.WorkSpacesListAvailableManagementCidrRangesResult = { ... }
```

##### `managementCidrRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesResult.property.managementCidrRanges"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesResult.property.nextToken"></a>

- *Type:* `string`

---

### WorkSpacesMigrateWorkspaceRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesMigrateWorkspaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesMigrateWorkspaceRequest: workspaces.WorkSpacesMigrateWorkspaceRequest = { ... }
```

##### `bundleId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesMigrateWorkspaceRequest.property.bundleId"></a>

- *Type:* `string`

---

##### `sourceWorkspaceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesMigrateWorkspaceRequest.property.sourceWorkspaceId"></a>

- *Type:* `string`

---

### WorkSpacesMigrateWorkspaceResult <a name="aws-cdk-sdk.workspaces.WorkSpacesMigrateWorkspaceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesMigrateWorkspaceResult: workspaces.WorkSpacesMigrateWorkspaceResult = { ... }
```

##### `sourceWorkspaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesMigrateWorkspaceResult.property.sourceWorkspaceId"></a>

- *Type:* `string`

---

##### `targetWorkspaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesMigrateWorkspaceResult.property.targetWorkspaceId"></a>

- *Type:* `string`

---

### WorkSpacesModificationState <a name="aws-cdk-sdk.workspaces.WorkSpacesModificationState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModificationState: workspaces.WorkSpacesModificationState = { ... }
```

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModificationState.property.resource"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModificationState.property.state"></a>

- *Type:* `string`

---

### WorkSpacesModifyAccountRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyAccountRequest: workspaces.WorkSpacesModifyAccountRequest = { ... }
```

##### `dedicatedTenancyManagementCidrRange`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyAccountRequest.property.dedicatedTenancyManagementCidrRange"></a>

- *Type:* `string`

---

##### `dedicatedTenancySupport`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyAccountRequest.property.dedicatedTenancySupport"></a>

- *Type:* `string`

---

### WorkSpacesModifyAccountResult <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyAccountResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyAccountResult: workspaces.WorkSpacesModifyAccountResult = { ... }
```

### WorkSpacesModifyClientPropertiesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyClientPropertiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyClientPropertiesRequest: workspaces.WorkSpacesModifyClientPropertiesRequest = { ... }
```

##### `clientProperties`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyClientPropertiesRequest.property.clientProperties"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesClientProperties`](#aws-cdk-sdk.workspaces.WorkSpacesClientProperties)

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyClientPropertiesRequest.property.resourceId"></a>

- *Type:* `string`

---

### WorkSpacesModifyClientPropertiesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyClientPropertiesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyClientPropertiesResult: workspaces.WorkSpacesModifyClientPropertiesResult = { ... }
```

### WorkSpacesModifySelfservicePermissionsRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesModifySelfservicePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifySelfservicePermissionsRequest: workspaces.WorkSpacesModifySelfservicePermissionsRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifySelfservicePermissionsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `selfservicePermissions`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifySelfservicePermissionsRequest.property.selfservicePermissions"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesSelfservicePermissions`](#aws-cdk-sdk.workspaces.WorkSpacesSelfservicePermissions)

---

### WorkSpacesModifySelfservicePermissionsResult <a name="aws-cdk-sdk.workspaces.WorkSpacesModifySelfservicePermissionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifySelfservicePermissionsResult: workspaces.WorkSpacesModifySelfservicePermissionsResult = { ... }
```

### WorkSpacesModifyWorkspaceAccessPropertiesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceAccessPropertiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyWorkspaceAccessPropertiesRequest: workspaces.WorkSpacesModifyWorkspaceAccessPropertiesRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceAccessPropertiesRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `workspaceAccessProperties`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceAccessPropertiesRequest.property.workspaceAccessProperties"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties)

---

### WorkSpacesModifyWorkspaceAccessPropertiesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceAccessPropertiesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyWorkspaceAccessPropertiesResult: workspaces.WorkSpacesModifyWorkspaceAccessPropertiesResult = { ... }
```

### WorkSpacesModifyWorkspaceCreationPropertiesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceCreationPropertiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyWorkspaceCreationPropertiesRequest: workspaces.WorkSpacesModifyWorkspaceCreationPropertiesRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceCreationPropertiesRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `workspaceCreationProperties`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceCreationPropertiesRequest.property.workspaceCreationProperties"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceCreationProperties`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceCreationProperties)

---

### WorkSpacesModifyWorkspaceCreationPropertiesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceCreationPropertiesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyWorkspaceCreationPropertiesResult: workspaces.WorkSpacesModifyWorkspaceCreationPropertiesResult = { ... }
```

### WorkSpacesModifyWorkspacePropertiesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspacePropertiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyWorkspacePropertiesRequest: workspaces.WorkSpacesModifyWorkspacePropertiesRequest = { ... }
```

##### `workspaceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspacePropertiesRequest.property.workspaceId"></a>

- *Type:* `string`

---

##### `workspaceProperties`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspacePropertiesRequest.property.workspaceProperties"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties)

---

### WorkSpacesModifyWorkspacePropertiesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspacePropertiesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyWorkspacePropertiesResult: workspaces.WorkSpacesModifyWorkspacePropertiesResult = { ... }
```

### WorkSpacesModifyWorkspaceStateRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceStateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyWorkspaceStateRequest: workspaces.WorkSpacesModifyWorkspaceStateRequest = { ... }
```

##### `workspaceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceStateRequest.property.workspaceId"></a>

- *Type:* `string`

---

##### `workspaceState`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceStateRequest.property.workspaceState"></a>

- *Type:* `string`

---

### WorkSpacesModifyWorkspaceStateResult <a name="aws-cdk-sdk.workspaces.WorkSpacesModifyWorkspaceStateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesModifyWorkspaceStateResult: workspaces.WorkSpacesModifyWorkspaceStateResult = { ... }
```

### WorkSpacesOperatingSystem <a name="aws-cdk-sdk.workspaces.WorkSpacesOperatingSystem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesOperatingSystem: workspaces.WorkSpacesOperatingSystem = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesOperatingSystem.property.type"></a>

- *Type:* `string`

---

### WorkSpacesRebootRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesRebootRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRebootRequest: workspaces.WorkSpacesRebootRequest = { ... }
```

##### `workspaceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRebootRequest.property.workspaceId"></a>

- *Type:* `string`

---

### WorkSpacesRebootWorkspacesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesRebootWorkspacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRebootWorkspacesRequest: workspaces.WorkSpacesRebootWorkspacesRequest = { ... }
```

##### `rebootWorkspaceRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRebootWorkspacesRequest.property.rebootWorkspaceRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesRebootRequest`](#aws-cdk-sdk.workspaces.WorkSpacesRebootRequest)[]

---

### WorkSpacesRebootWorkspacesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesRebootWorkspacesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRebootWorkspacesResult: workspaces.WorkSpacesRebootWorkspacesResult = { ... }
```

##### `failedRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRebootWorkspacesResult.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest)[]

---

### WorkSpacesRebuildRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesRebuildRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRebuildRequest: workspaces.WorkSpacesRebuildRequest = { ... }
```

##### `workspaceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRebuildRequest.property.workspaceId"></a>

- *Type:* `string`

---

### WorkSpacesRebuildWorkspacesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesRebuildWorkspacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRebuildWorkspacesRequest: workspaces.WorkSpacesRebuildWorkspacesRequest = { ... }
```

##### `rebuildWorkspaceRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRebuildWorkspacesRequest.property.rebuildWorkspaceRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesRebuildRequest`](#aws-cdk-sdk.workspaces.WorkSpacesRebuildRequest)[]

---

### WorkSpacesRebuildWorkspacesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesRebuildWorkspacesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRebuildWorkspacesResult: workspaces.WorkSpacesRebuildWorkspacesResult = { ... }
```

##### `failedRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRebuildWorkspacesResult.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest)[]

---

### WorkSpacesRegisterWorkspaceDirectoryRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesRegisterWorkspaceDirectoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRegisterWorkspaceDirectoryRequest: workspaces.WorkSpacesRegisterWorkspaceDirectoryRequest = { ... }
```

##### `directoryId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRegisterWorkspaceDirectoryRequest.property.directoryId"></a>

- *Type:* `string`

---

##### `enableWorkDocs`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRegisterWorkspaceDirectoryRequest.property.enableWorkDocs"></a>

- *Type:* `boolean`

---

##### `enableSelfService`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRegisterWorkspaceDirectoryRequest.property.enableSelfService"></a>

- *Type:* `boolean`

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRegisterWorkspaceDirectoryRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRegisterWorkspaceDirectoryRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTag`](#aws-cdk-sdk.workspaces.WorkSpacesTag)[]

---

##### `tenancy`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRegisterWorkspaceDirectoryRequest.property.tenancy"></a>

- *Type:* `string`

---

### WorkSpacesRegisterWorkspaceDirectoryResult <a name="aws-cdk-sdk.workspaces.WorkSpacesRegisterWorkspaceDirectoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRegisterWorkspaceDirectoryResult: workspaces.WorkSpacesRegisterWorkspaceDirectoryResult = { ... }
```

### WorkSpacesRestoreWorkspaceRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesRestoreWorkspaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRestoreWorkspaceRequest: workspaces.WorkSpacesRestoreWorkspaceRequest = { ... }
```

##### `workspaceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRestoreWorkspaceRequest.property.workspaceId"></a>

- *Type:* `string`

---

### WorkSpacesRestoreWorkspaceResult <a name="aws-cdk-sdk.workspaces.WorkSpacesRestoreWorkspaceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRestoreWorkspaceResult: workspaces.WorkSpacesRestoreWorkspaceResult = { ... }
```

### WorkSpacesRevokeIpRulesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesRevokeIpRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRevokeIpRulesRequest: workspaces.WorkSpacesRevokeIpRulesRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRevokeIpRulesRequest.property.groupId"></a>

- *Type:* `string`

---

##### `userRules`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRevokeIpRulesRequest.property.userRules"></a>

- *Type:* `string`[]

---

### WorkSpacesRevokeIpRulesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesRevokeIpRulesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRevokeIpRulesResult: workspaces.WorkSpacesRevokeIpRulesResult = { ... }
```

### WorkSpacesRootStorage <a name="aws-cdk-sdk.workspaces.WorkSpacesRootStorage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesRootStorage: workspaces.WorkSpacesRootStorage = { ... }
```

##### `capacity`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesRootStorage.property.capacity"></a>

- *Type:* `string`

---

### WorkSpacesSelfservicePermissions <a name="aws-cdk-sdk.workspaces.WorkSpacesSelfservicePermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesSelfservicePermissions: workspaces.WorkSpacesSelfservicePermissions = { ... }
```

##### `changeComputeType`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesSelfservicePermissions.property.changeComputeType"></a>

- *Type:* `string`

---

##### `increaseVolumeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesSelfservicePermissions.property.increaseVolumeSize"></a>

- *Type:* `string`

---

##### `rebuildWorkspace`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesSelfservicePermissions.property.rebuildWorkspace"></a>

- *Type:* `string`

---

##### `restartWorkspace`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesSelfservicePermissions.property.restartWorkspace"></a>

- *Type:* `string`

---

##### `switchRunningMode`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesSelfservicePermissions.property.switchRunningMode"></a>

- *Type:* `string`

---

### WorkSpacesSnapshot <a name="aws-cdk-sdk.workspaces.WorkSpacesSnapshot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesSnapshot: workspaces.WorkSpacesSnapshot = { ... }
```

##### `snapshotTime`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesSnapshot.property.snapshotTime"></a>

- *Type:* `string`

---

### WorkSpacesStartRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesStartRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesStartRequest: workspaces.WorkSpacesStartRequest = { ... }
```

##### `workspaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesStartRequest.property.workspaceId"></a>

- *Type:* `string`

---

### WorkSpacesStartWorkspacesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesStartWorkspacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesStartWorkspacesRequest: workspaces.WorkSpacesStartWorkspacesRequest = { ... }
```

##### `startWorkspaceRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesStartWorkspacesRequest.property.startWorkspaceRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesStartRequest`](#aws-cdk-sdk.workspaces.WorkSpacesStartRequest)[]

---

### WorkSpacesStartWorkspacesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesStartWorkspacesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesStartWorkspacesResult: workspaces.WorkSpacesStartWorkspacesResult = { ... }
```

##### `failedRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesStartWorkspacesResult.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest)[]

---

### WorkSpacesStopRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesStopRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesStopRequest: workspaces.WorkSpacesStopRequest = { ... }
```

##### `workspaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesStopRequest.property.workspaceId"></a>

- *Type:* `string`

---

### WorkSpacesStopWorkspacesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesStopWorkspacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesStopWorkspacesRequest: workspaces.WorkSpacesStopWorkspacesRequest = { ... }
```

##### `stopWorkspaceRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesStopWorkspacesRequest.property.stopWorkspaceRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesStopRequest`](#aws-cdk-sdk.workspaces.WorkSpacesStopRequest)[]

---

### WorkSpacesStopWorkspacesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesStopWorkspacesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesStopWorkspacesResult: workspaces.WorkSpacesStopWorkspacesResult = { ... }
```

##### `failedRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesStopWorkspacesResult.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest)[]

---

### WorkSpacesTag <a name="aws-cdk-sdk.workspaces.WorkSpacesTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesTag: workspaces.WorkSpacesTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesTag.property.value"></a>

- *Type:* `string`

---

### WorkSpacesTerminateRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesTerminateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesTerminateRequest: workspaces.WorkSpacesTerminateRequest = { ... }
```

##### `workspaceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesTerminateRequest.property.workspaceId"></a>

- *Type:* `string`

---

### WorkSpacesTerminateWorkspacesRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesTerminateWorkspacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesTerminateWorkspacesRequest: workspaces.WorkSpacesTerminateWorkspacesRequest = { ... }
```

##### `terminateWorkspaceRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesTerminateWorkspacesRequest.property.terminateWorkspaceRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTerminateRequest`](#aws-cdk-sdk.workspaces.WorkSpacesTerminateRequest)[]

---

### WorkSpacesTerminateWorkspacesResult <a name="aws-cdk-sdk.workspaces.WorkSpacesTerminateWorkspacesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesTerminateWorkspacesResult: workspaces.WorkSpacesTerminateWorkspacesResult = { ... }
```

##### `failedRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesTerminateWorkspacesResult.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest)[]

---

### WorkSpacesUpdateConnectionAliasPermissionRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateConnectionAliasPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesUpdateConnectionAliasPermissionRequest: workspaces.WorkSpacesUpdateConnectionAliasPermissionRequest = { ... }
```

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateConnectionAliasPermissionRequest.property.aliasId"></a>

- *Type:* `string`

---

##### `connectionAliasPermission`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateConnectionAliasPermissionRequest.property.connectionAliasPermission"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasPermission`](#aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasPermission)

---

### WorkSpacesUpdateConnectionAliasPermissionResult <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateConnectionAliasPermissionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesUpdateConnectionAliasPermissionResult: workspaces.WorkSpacesUpdateConnectionAliasPermissionResult = { ... }
```

### WorkSpacesUpdateRulesOfIpGroupRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateRulesOfIpGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesUpdateRulesOfIpGroupRequest: workspaces.WorkSpacesUpdateRulesOfIpGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateRulesOfIpGroupRequest.property.groupId"></a>

- *Type:* `string`

---

##### `userRules`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateRulesOfIpGroupRequest.property.userRules"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem`](#aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem)[]

---

### WorkSpacesUpdateRulesOfIpGroupResult <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateRulesOfIpGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesUpdateRulesOfIpGroupResult: workspaces.WorkSpacesUpdateRulesOfIpGroupResult = { ... }
```

### WorkSpacesUpdateWorkspaceImagePermissionRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateWorkspaceImagePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesUpdateWorkspaceImagePermissionRequest: workspaces.WorkSpacesUpdateWorkspaceImagePermissionRequest = { ... }
```

##### `allowCopyImage`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateWorkspaceImagePermissionRequest.property.allowCopyImage"></a>

- *Type:* `boolean`

---

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateWorkspaceImagePermissionRequest.property.imageId"></a>

- *Type:* `string`

---

##### `sharedAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateWorkspaceImagePermissionRequest.property.sharedAccountId"></a>

- *Type:* `string`

---

### WorkSpacesUpdateWorkspaceImagePermissionResult <a name="aws-cdk-sdk.workspaces.WorkSpacesUpdateWorkspaceImagePermissionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesUpdateWorkspaceImagePermissionResult: workspaces.WorkSpacesUpdateWorkspaceImagePermissionResult = { ... }
```

### WorkSpacesUserStorage <a name="aws-cdk-sdk.workspaces.WorkSpacesUserStorage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesUserStorage: workspaces.WorkSpacesUserStorage = { ... }
```

##### `capacity`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesUserStorage.property.capacity"></a>

- *Type:* `string`

---

### WorkSpacesWorkspace <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesWorkspace: workspaces.WorkSpacesWorkspace = { ... }
```

##### `bundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.bundleId"></a>

- *Type:* `string`

---

##### `computerName`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.computerName"></a>

- *Type:* `string`

---

##### `directoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.directoryId"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.errorMessage"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.ipAddress"></a>

- *Type:* `string`

---

##### `modificationStates`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.modificationStates"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesModificationState`](#aws-cdk-sdk.workspaces.WorkSpacesModificationState)[]

---

##### `rootVolumeEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.rootVolumeEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.state"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.subnetId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.userName"></a>

- *Type:* `string`

---

##### `userVolumeEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.userVolumeEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `volumeEncryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.volumeEncryptionKey"></a>

- *Type:* `string`

---

##### `workspaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.workspaceId"></a>

- *Type:* `string`

---

##### `workspaceProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspace.property.workspaceProperties"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties)

---

### WorkSpacesWorkspaceAccessProperties <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesWorkspaceAccessProperties: workspaces.WorkSpacesWorkspaceAccessProperties = { ... }
```

##### `deviceTypeAndroid`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

- *Type:* `string`

---

##### `deviceTypeChromeOs`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties.property.deviceTypeChromeOs"></a>

- *Type:* `string`

---

##### `deviceTypeIos`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties.property.deviceTypeIos"></a>

- *Type:* `string`

---

##### `deviceTypeOsx`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties.property.deviceTypeOsx"></a>

- *Type:* `string`

---

##### `deviceTypeWeb`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties.property.deviceTypeWeb"></a>

- *Type:* `string`

---

##### `deviceTypeWindows`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties.property.deviceTypeWindows"></a>

- *Type:* `string`

---

##### `deviceTypeZeroClient`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties.property.deviceTypeZeroClient"></a>

- *Type:* `string`

---

### WorkSpacesWorkspaceBundle <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesWorkspaceBundle: workspaces.WorkSpacesWorkspaceBundle = { ... }
```

##### `bundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle.property.bundleId"></a>

- *Type:* `string`

---

##### `computeType`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle.property.computeType"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesComputeType`](#aws-cdk-sdk.workspaces.WorkSpacesComputeType)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle.property.description"></a>

- *Type:* `string`

---

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle.property.imageId"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle.property.owner"></a>

- *Type:* `string`

---

##### `rootStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle.property.rootStorage"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesRootStorage`](#aws-cdk-sdk.workspaces.WorkSpacesRootStorage)

---

##### `userStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle.property.userStorage"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesUserStorage`](#aws-cdk-sdk.workspaces.WorkSpacesUserStorage)

---

### WorkSpacesWorkspaceConnectionStatus <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceConnectionStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesWorkspaceConnectionStatus: workspaces.WorkSpacesWorkspaceConnectionStatus = { ... }
```

##### `connectionState`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceConnectionStatus.property.connectionState"></a>

- *Type:* `string`

---

##### `connectionStateCheckTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceConnectionStatus.property.connectionStateCheckTimestamp"></a>

- *Type:* `string`

---

##### `lastKnownUserConnectionTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceConnectionStatus.property.lastKnownUserConnectionTimestamp"></a>

- *Type:* `string`

---

##### `workspaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceConnectionStatus.property.workspaceId"></a>

- *Type:* `string`

---

### WorkSpacesWorkspaceCreationProperties <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceCreationProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesWorkspaceCreationProperties: workspaces.WorkSpacesWorkspaceCreationProperties = { ... }
```

##### `customSecurityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceCreationProperties.property.customSecurityGroupId"></a>

- *Type:* `string`

---

##### `defaultOu`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceCreationProperties.property.defaultOu"></a>

- *Type:* `string`

---

##### `enableInternetAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceCreationProperties.property.enableInternetAccess"></a>

- *Type:* `boolean`

---

##### `enableMaintenanceMode`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

- *Type:* `boolean`

---

##### `enableWorkDocs`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceCreationProperties.property.enableWorkDocs"></a>

- *Type:* `boolean`

---

##### `userEnabledAsLocalAdministrator`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

- *Type:* `boolean`

---

### WorkSpacesWorkspaceDirectory <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesWorkspaceDirectory: workspaces.WorkSpacesWorkspaceDirectory = { ... }
```

##### `alias`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.alias"></a>

- *Type:* `string`

---

##### `customerUserName`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.customerUserName"></a>

- *Type:* `string`

---

##### `directoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.directoryId"></a>

- *Type:* `string`

---

##### `directoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.directoryName"></a>

- *Type:* `string`

---

##### `directoryType`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.directoryType"></a>

- *Type:* `string`

---

##### `dnsIpAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.dnsIpAddresses"></a>

- *Type:* `string`[]

---

##### `iamRoleId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.iamRoleId"></a>

- *Type:* `string`

---

##### `ipGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.ipGroupIds"></a>

- *Type:* `string`[]

---

##### `registrationCode`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.registrationCode"></a>

- *Type:* `string`

---

##### `selfservicePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.selfservicePermissions"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesSelfservicePermissions`](#aws-cdk-sdk.workspaces.WorkSpacesSelfservicePermissions)

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.state"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tenancy`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.tenancy"></a>

- *Type:* `string`

---

##### `workspaceAccessProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.workspaceAccessProperties"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceAccessProperties)

---

##### `workspaceCreationProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.workspaceCreationProperties"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDefaultWorkspaceCreationProperties`](#aws-cdk-sdk.workspaces.WorkSpacesDefaultWorkspaceCreationProperties)

---

##### `workspaceSecurityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory.property.workspaceSecurityGroupId"></a>

- *Type:* `string`

---

### WorkSpacesWorkspaceImage <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesWorkspaceImage: workspaces.WorkSpacesWorkspaceImage = { ... }
```

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage.property.description"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage.property.errorMessage"></a>

- *Type:* `string`

---

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage.property.imageId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage.property.name"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage.property.operatingSystem"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesOperatingSystem`](#aws-cdk-sdk.workspaces.WorkSpacesOperatingSystem)

---

##### `ownerAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage.property.ownerAccountId"></a>

- *Type:* `string`

---

##### `requiredTenancy`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage.property.requiredTenancy"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage.property.state"></a>

- *Type:* `string`

---

### WorkSpacesWorkspaceProperties <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesWorkspaceProperties: workspaces.WorkSpacesWorkspaceProperties = { ... }
```

##### `computeTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties.property.computeTypeName"></a>

- *Type:* `string`

---

##### `rootVolumeSizeGib`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties.property.rootVolumeSizeGib"></a>

- *Type:* `number`

---

##### `runningMode`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties.property.runningMode"></a>

- *Type:* `string`

---

##### `runningModeAutoStopTimeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties.property.runningModeAutoStopTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `userVolumeSizeGib`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties.property.userVolumeSizeGib"></a>

- *Type:* `number`

---

### WorkSpacesWorkspaceRequest <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesWorkspaceRequest: workspaces.WorkSpacesWorkspaceRequest = { ... }
```

##### `bundleId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest.property.bundleId"></a>

- *Type:* `string`

---

##### `directoryId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest.property.directoryId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest.property.userName"></a>

- *Type:* `string`

---

##### `rootVolumeEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest.property.rootVolumeEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTag`](#aws-cdk-sdk.workspaces.WorkSpacesTag)[]

---

##### `userVolumeEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest.property.userVolumeEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `volumeEncryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest.property.volumeEncryptionKey"></a>

- *Type:* `string`

---

##### `workspaceProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspaceRequest.property.workspaceProperties"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceProperties)

---

### WorkSpacesWorkspacesIpGroup <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspacesIpGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

const workSpacesWorkspacesIpGroup: workspaces.WorkSpacesWorkspacesIpGroup = { ... }
```

##### `groupDesc`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspacesIpGroup.property.groupDesc"></a>

- *Type:* `string`

---

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspacesIpGroup.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspacesIpGroup.property.groupName"></a>

- *Type:* `string`

---

##### `userRules`<sup>Optional</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesWorkspacesIpGroup.property.userRules"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem`](#aws-cdk-sdk.workspaces.WorkSpacesIpRuleItem)[]

---

## Classes <a name="Classes"></a>

### WorkSpacesResponsesAssociateConnectionAlias <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesAssociateConnectionAlias"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesAssociateConnectionAlias.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesAssociateConnectionAlias(__scope: Construct, __resources: string[], __input: WorkSpacesAssociateConnectionAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesAssociateConnectionAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesAssociateConnectionAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesAssociateConnectionAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesAssociateConnectionAliasRequest`](#aws-cdk-sdk.workspaces.WorkSpacesAssociateConnectionAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesAssociateConnectionAlias.property.connectionIdentifier"></a>

- *Type:* `string`

---


### WorkSpacesResponsesCopyWorkspaceImage <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCopyWorkspaceImage"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCopyWorkspaceImage.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesCopyWorkspaceImage(__scope: Construct, __resources: string[], __input: WorkSpacesCopyWorkspaceImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCopyWorkspaceImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCopyWorkspaceImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCopyWorkspaceImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageRequest`](#aws-cdk-sdk.workspaces.WorkSpacesCopyWorkspaceImageRequest)

---



#### Properties <a name="Properties"></a>

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCopyWorkspaceImage.property.imageId"></a>

- *Type:* `string`

---


### WorkSpacesResponsesCreateConnectionAlias <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateConnectionAlias"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateConnectionAlias.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesCreateConnectionAlias(__scope: Construct, __resources: string[], __input: WorkSpacesCreateConnectionAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateConnectionAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateConnectionAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateConnectionAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesCreateConnectionAliasRequest`](#aws-cdk-sdk.workspaces.WorkSpacesCreateConnectionAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateConnectionAlias.property.aliasId"></a>

- *Type:* `string`

---


### WorkSpacesResponsesCreateIpGroup <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateIpGroup"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateIpGroup.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesCreateIpGroup(__scope: Construct, __resources: string[], __input: WorkSpacesCreateIpGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateIpGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateIpGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateIpGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupRequest`](#aws-cdk-sdk.workspaces.WorkSpacesCreateIpGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateIpGroup.property.groupId"></a>

- *Type:* `string`

---


### WorkSpacesResponsesCreateWorkspaces <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateWorkspaces"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateWorkspaces.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesCreateWorkspaces(__scope: Construct, __resources: string[], __input: WorkSpacesCreateWorkspacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateWorkspaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateWorkspaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateWorkspaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesCreateWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesCreateWorkspacesRequest)

---



#### Properties <a name="Properties"></a>

##### `failedRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateWorkspaces.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedCreateWorkspaceRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedCreateWorkspaceRequest)[]

---

##### `pendingRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesCreateWorkspaces.property.pendingRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspace`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspace)[]

---


### WorkSpacesResponsesDescribeAccount <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccount"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccount.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeAccount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `dedicatedTenancyManagementCidrRange`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccount.property.dedicatedTenancyManagementCidrRange"></a>

- *Type:* `string`

---

##### `dedicatedTenancySupport`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccount.property.dedicatedTenancySupport"></a>

- *Type:* `string`

---


### WorkSpacesResponsesDescribeAccountModifications <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccountModifications"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccountModifications.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeAccountModifications(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeAccountModificationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccountModifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccountModifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccountModifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountModificationsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeAccountModificationsRequest)

---



#### Properties <a name="Properties"></a>

##### `accountModifications`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccountModifications.property.accountModifications"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesAccountModification`](#aws-cdk-sdk.workspaces.WorkSpacesAccountModification)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeAccountModifications.property.nextToken"></a>

- *Type:* `string`

---


### WorkSpacesResponsesDescribeClientProperties <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeClientProperties"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeClientProperties.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeClientProperties(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeClientPropertiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeClientProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeClientProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeClientProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeClientPropertiesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeClientPropertiesRequest)

---



#### Properties <a name="Properties"></a>

##### `clientPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeClientProperties.property.clientPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesClientPropertiesResult`](#aws-cdk-sdk.workspaces.WorkSpacesClientPropertiesResult)[]

---


### WorkSpacesResponsesDescribeConnectionAliases <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliases"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliases.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeConnectionAliases(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeConnectionAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionAliases`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliases.property.connectionAliases"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesConnectionAlias`](#aws-cdk-sdk.workspaces.WorkSpacesConnectionAlias)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliases.property.nextToken"></a>

- *Type:* `string`

---


### WorkSpacesResponsesDescribeConnectionAliasPermissions <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliasPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliasPermissions.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeConnectionAliasPermissions(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeConnectionAliasPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliasPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliasPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliasPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeConnectionAliasPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliasPermissions.property.aliasId"></a>

- *Type:* `string`

---

##### `connectionAliasPermissions`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliasPermissions.property.connectionAliasPermissions"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasPermission`](#aws-cdk-sdk.workspaces.WorkSpacesConnectionAliasPermission)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeConnectionAliasPermissions.property.nextToken"></a>

- *Type:* `string`

---


### WorkSpacesResponsesDescribeIpGroups <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeIpGroups"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeIpGroups.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeIpGroups(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeIpGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeIpGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeIpGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeIpGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeIpGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeIpGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeIpGroups.property.result"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspacesIpGroup`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspacesIpGroup)[]

---


### WorkSpacesResponsesDescribeTags <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeTags"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeTags.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeTags(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeTagsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeTags.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTag`](#aws-cdk-sdk.workspaces.WorkSpacesTag)[]

---


### WorkSpacesResponsesDescribeWorkspaceBundles <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceBundles"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceBundles.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeWorkspaceBundles(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeWorkspaceBundlesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceBundles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceBundles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceBundles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceBundlesRequest)

---



#### Properties <a name="Properties"></a>

##### `bundles`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceBundles.property.bundles"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceBundle)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceBundles.property.nextToken"></a>

- *Type:* `string`

---


### WorkSpacesResponsesDescribeWorkspaceDirectories <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceDirectories"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceDirectories.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeWorkspaceDirectories(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeWorkspaceDirectoriesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceDirectories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceDirectories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceDirectories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceDirectoriesRequest)

---



#### Properties <a name="Properties"></a>

##### `directories`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceDirectories.property.directories"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceDirectory)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceDirectories.property.nextToken"></a>

- *Type:* `string`

---


### WorkSpacesResponsesDescribeWorkspaceImagePermissions <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImagePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImagePermissions.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeWorkspaceImagePermissions(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeWorkspaceImagePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImagePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImagePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImagePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImagePermissions.property.imageId"></a>

- *Type:* `string`

---

##### `imagePermissions`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImagePermissions.property.imagePermissions"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesImagePermission`](#aws-cdk-sdk.workspaces.WorkSpacesImagePermission)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImagePermissions.property.nextToken"></a>

- *Type:* `string`

---


### WorkSpacesResponsesDescribeWorkspaceImages <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImages"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImages.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeWorkspaceImages(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeWorkspaceImagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceImagesRequest)

---



#### Properties <a name="Properties"></a>

##### `images`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImages.property.images"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceImage)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceImages.property.nextToken"></a>

- *Type:* `string`

---


### WorkSpacesResponsesDescribeWorkspaces <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaces"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaces.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeWorkspaces(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeWorkspacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaces.property.nextToken"></a>

- *Type:* `string`

---

##### `workspaces`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaces.property.workspaces"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspace`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspace)[]

---


### WorkSpacesResponsesDescribeWorkspacesConnectionStatus <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspacesConnectionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspacesConnectionStatus.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeWorkspacesConnectionStatus(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeWorkspacesConnectionStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspacesConnectionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspacesConnectionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspacesConnectionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesConnectionStatusRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspacesConnectionStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspacesConnectionStatus.property.nextToken"></a>

- *Type:* `string`

---

##### `workspacesConnectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspacesConnectionStatus.property.workspacesConnectionStatus"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesWorkspaceConnectionStatus`](#aws-cdk-sdk.workspaces.WorkSpacesWorkspaceConnectionStatus)[]

---


### WorkSpacesResponsesDescribeWorkspaceSnapshots <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceSnapshots.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesDescribeWorkspaceSnapshots(__scope: Construct, __resources: string[], __input: WorkSpacesDescribeWorkspaceSnapshotsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceSnapshotsRequest`](#aws-cdk-sdk.workspaces.WorkSpacesDescribeWorkspaceSnapshotsRequest)

---



#### Properties <a name="Properties"></a>

##### `rebuildSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceSnapshots.property.rebuildSnapshots"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesSnapshot`](#aws-cdk-sdk.workspaces.WorkSpacesSnapshot)[]

---

##### `restoreSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesDescribeWorkspaceSnapshots.property.restoreSnapshots"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesSnapshot`](#aws-cdk-sdk.workspaces.WorkSpacesSnapshot)[]

---


### WorkSpacesResponsesImportWorkspaceImage <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesImportWorkspaceImage"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesImportWorkspaceImage.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesImportWorkspaceImage(__scope: Construct, __resources: string[], __input: WorkSpacesImportWorkspaceImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesImportWorkspaceImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesImportWorkspaceImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesImportWorkspaceImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest`](#aws-cdk-sdk.workspaces.WorkSpacesImportWorkspaceImageRequest)

---



#### Properties <a name="Properties"></a>

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesImportWorkspaceImage.property.imageId"></a>

- *Type:* `string`

---


### WorkSpacesResponsesListAvailableManagementCidrRanges <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesListAvailableManagementCidrRanges"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesListAvailableManagementCidrRanges.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesListAvailableManagementCidrRanges(__scope: Construct, __resources: string[], __input: WorkSpacesListAvailableManagementCidrRangesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesListAvailableManagementCidrRanges.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesListAvailableManagementCidrRanges.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesListAvailableManagementCidrRanges.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesListAvailableManagementCidrRangesRequest)

---



#### Properties <a name="Properties"></a>

##### `managementCidrRanges`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesListAvailableManagementCidrRanges.property.managementCidrRanges"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesListAvailableManagementCidrRanges.property.nextToken"></a>

- *Type:* `string`

---


### WorkSpacesResponsesMigrateWorkspace <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesMigrateWorkspace"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesMigrateWorkspace.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesMigrateWorkspace(__scope: Construct, __resources: string[], __input: WorkSpacesMigrateWorkspaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesMigrateWorkspace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesMigrateWorkspace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesMigrateWorkspace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesMigrateWorkspaceRequest`](#aws-cdk-sdk.workspaces.WorkSpacesMigrateWorkspaceRequest)

---



#### Properties <a name="Properties"></a>

##### `sourceWorkspaceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesMigrateWorkspace.property.sourceWorkspaceId"></a>

- *Type:* `string`

---

##### `targetWorkspaceId`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesMigrateWorkspace.property.targetWorkspaceId"></a>

- *Type:* `string`

---


### WorkSpacesResponsesRebootWorkspaces <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebootWorkspaces"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebootWorkspaces.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesRebootWorkspaces(__scope: Construct, __resources: string[], __input: WorkSpacesRebootWorkspacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebootWorkspaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebootWorkspaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebootWorkspaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesRebootWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesRebootWorkspacesRequest)

---



#### Properties <a name="Properties"></a>

##### `failedRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebootWorkspaces.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest)[]

---


### WorkSpacesResponsesRebuildWorkspaces <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebuildWorkspaces"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebuildWorkspaces.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesRebuildWorkspaces(__scope: Construct, __resources: string[], __input: WorkSpacesRebuildWorkspacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebuildWorkspaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebuildWorkspaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebuildWorkspaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesRebuildWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesRebuildWorkspacesRequest)

---



#### Properties <a name="Properties"></a>

##### `failedRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesRebuildWorkspaces.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest)[]

---


### WorkSpacesResponsesStartWorkspaces <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStartWorkspaces"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStartWorkspaces.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesStartWorkspaces(__scope: Construct, __resources: string[], __input: WorkSpacesStartWorkspacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStartWorkspaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStartWorkspaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStartWorkspaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesStartWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesStartWorkspacesRequest)

---



#### Properties <a name="Properties"></a>

##### `failedRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStartWorkspaces.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest)[]

---


### WorkSpacesResponsesStopWorkspaces <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStopWorkspaces"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStopWorkspaces.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesStopWorkspaces(__scope: Construct, __resources: string[], __input: WorkSpacesStopWorkspacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStopWorkspaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStopWorkspaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStopWorkspaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesStopWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesStopWorkspacesRequest)

---



#### Properties <a name="Properties"></a>

##### `failedRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesStopWorkspaces.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest)[]

---


### WorkSpacesResponsesTerminateWorkspaces <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesTerminateWorkspaces"></a>

#### Initializer <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesTerminateWorkspaces.Initializer"></a>

```typescript
import { workspaces } from 'aws-cdk-sdk'

new workspaces.WorkSpacesResponsesTerminateWorkspaces(__scope: Construct, __resources: string[], __input: WorkSpacesTerminateWorkspacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesTerminateWorkspaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesTerminateWorkspaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesTerminateWorkspaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesTerminateWorkspacesRequest`](#aws-cdk-sdk.workspaces.WorkSpacesTerminateWorkspacesRequest)

---



#### Properties <a name="Properties"></a>

##### `failedRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workspaces.WorkSpacesResponsesTerminateWorkspaces.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest`](#aws-cdk-sdk.workspaces.WorkSpacesFailedWorkspaceChangeRequest)[]

---



