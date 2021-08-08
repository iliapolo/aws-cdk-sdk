# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### FSxClient <a name="aws-cdk-sdk.fsx.FSxClient"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxClient.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateFileSystemAliases` <a name="aws-cdk-sdk.fsx.FSxClient.associateFileSystemAliases"></a>

```typescript
public associateFileSystemAliases(input: FSxAssociateFileSystemAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAssociateFileSystemAliasesRequest`](#aws-cdk-sdk.fsx.FSxAssociateFileSystemAliasesRequest)

---

##### `cancelDataRepositoryTask` <a name="aws-cdk-sdk.fsx.FSxClient.cancelDataRepositoryTask"></a>

```typescript
public cancelDataRepositoryTask(input: FSxCancelDataRepositoryTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCancelDataRepositoryTaskRequest`](#aws-cdk-sdk.fsx.FSxCancelDataRepositoryTaskRequest)

---

##### `createBackup` <a name="aws-cdk-sdk.fsx.FSxClient.createBackup"></a>

```typescript
public createBackup(input: FSxCreateBackupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---

##### `createDataRepositoryTask` <a name="aws-cdk-sdk.fsx.FSxClient.createDataRepositoryTask"></a>

```typescript
public createDataRepositoryTask(input: FSxCreateDataRepositoryTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest`](#aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest)

---

##### `createFileSystem` <a name="aws-cdk-sdk.fsx.FSxClient.createFileSystem"></a>

```typescript
public createFileSystem(input: FSxCreateFileSystemRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemRequest)

---

##### `createFileSystemFromBackup` <a name="aws-cdk-sdk.fsx.FSxClient.createFileSystemFromBackup"></a>

```typescript
public createFileSystemFromBackup(input: FSxCreateFileSystemFromBackupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest)

---

##### `deleteBackup` <a name="aws-cdk-sdk.fsx.FSxClient.deleteBackup"></a>

```typescript
public deleteBackup(input: FSxDeleteBackupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDeleteBackupRequest`](#aws-cdk-sdk.fsx.FSxDeleteBackupRequest)

---

##### `deleteFileSystem` <a name="aws-cdk-sdk.fsx.FSxClient.deleteFileSystem"></a>

```typescript
public deleteFileSystem(input: FSxDeleteFileSystemRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest`](#aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest)

---

##### `describeBackups` <a name="aws-cdk-sdk.fsx.FSxClient.describeBackups"></a>

```typescript
public describeBackups(input: FSxDescribeBackupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDescribeBackupsRequest`](#aws-cdk-sdk.fsx.FSxDescribeBackupsRequest)

---

##### `describeDataRepositoryTasks` <a name="aws-cdk-sdk.fsx.FSxClient.describeDataRepositoryTasks"></a>

```typescript
public describeDataRepositoryTasks(input: FSxDescribeDataRepositoryTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksRequest`](#aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksRequest)

---

##### `describeFileSystemAliases` <a name="aws-cdk-sdk.fsx.FSxClient.describeFileSystemAliases"></a>

```typescript
public describeFileSystemAliases(input: FSxDescribeFileSystemAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesRequest`](#aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesRequest)

---

##### `describeFileSystems` <a name="aws-cdk-sdk.fsx.FSxClient.describeFileSystems"></a>

```typescript
public describeFileSystems(input: FSxDescribeFileSystemsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDescribeFileSystemsRequest`](#aws-cdk-sdk.fsx.FSxDescribeFileSystemsRequest)

---

##### `disassociateFileSystemAliases` <a name="aws-cdk-sdk.fsx.FSxClient.disassociateFileSystemAliases"></a>

```typescript
public disassociateFileSystemAliases(input: FSxDisassociateFileSystemAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDisassociateFileSystemAliasesRequest`](#aws-cdk-sdk.fsx.FSxDisassociateFileSystemAliasesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.fsx.FSxClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: FSxListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxListTagsForResourceRequest`](#aws-cdk-sdk.fsx.FSxListTagsForResourceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.fsx.FSxClient.tagResource"></a>

```typescript
public tagResource(input: FSxTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTagResourceRequest`](#aws-cdk-sdk.fsx.FSxTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.fsx.FSxClient.untagResource"></a>

```typescript
public untagResource(input: FSxUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUntagResourceRequest`](#aws-cdk-sdk.fsx.FSxUntagResourceRequest)

---

##### `updateFileSystem` <a name="aws-cdk-sdk.fsx.FSxClient.updateFileSystem"></a>

```typescript
public updateFileSystem(input: FSxUpdateFileSystemRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest)

---




## Structs <a name="Structs"></a>

### FSxActiveDirectoryBackupAttributes <a name="aws-cdk-sdk.fsx.FSxActiveDirectoryBackupAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxActiveDirectoryBackupAttributes: fsx.FSxActiveDirectoryBackupAttributes = { ... }
```

##### `activeDirectoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxActiveDirectoryBackupAttributes.property.activeDirectoryId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxActiveDirectoryBackupAttributes.property.domainName"></a>

- *Type:* `string`

---

### FSxAdministrativeAction <a name="aws-cdk-sdk.fsx.FSxAdministrativeAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxAdministrativeAction: fsx.FSxAdministrativeAction = { ... }
```

##### `administrativeActionType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAdministrativeAction.property.administrativeActionType"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAdministrativeAction.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAdministrativeActionFailureDetails`](#aws-cdk-sdk.fsx.FSxAdministrativeActionFailureDetails)

---

##### `progressPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAdministrativeAction.property.progressPercent"></a>

- *Type:* `number`

---

##### `requestTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAdministrativeAction.property.requestTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAdministrativeAction.property.status"></a>

- *Type:* `string`

---

##### `targetFileSystemValues`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAdministrativeAction.property.targetFileSystemValues"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxFileSystem`](#aws-cdk-sdk.fsx.FSxFileSystem)

---

### FSxAdministrativeActionFailureDetails <a name="aws-cdk-sdk.fsx.FSxAdministrativeActionFailureDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxAdministrativeActionFailureDetails: fsx.FSxAdministrativeActionFailureDetails = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAdministrativeActionFailureDetails.property.message"></a>

- *Type:* `string`

---

### FSxAlias <a name="aws-cdk-sdk.fsx.FSxAlias"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxAlias: fsx.FSxAlias = { ... }
```

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAlias.property.lifecycle"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAlias.property.name"></a>

- *Type:* `string`

---

### FSxAssociateFileSystemAliasesRequest <a name="aws-cdk-sdk.fsx.FSxAssociateFileSystemAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxAssociateFileSystemAliasesRequest: fsx.FSxAssociateFileSystemAliasesRequest = { ... }
```

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxAssociateFileSystemAliasesRequest.property.aliases"></a>

- *Type:* `string`[]

---

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxAssociateFileSystemAliasesRequest.property.fileSystemId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAssociateFileSystemAliasesRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

### FSxAssociateFileSystemAliasesResponse <a name="aws-cdk-sdk.fsx.FSxAssociateFileSystemAliasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxAssociateFileSystemAliasesResponse: fsx.FSxAssociateFileSystemAliasesResponse = { ... }
```

##### `aliases`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxAssociateFileSystemAliasesResponse.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---

### FSxBackup <a name="aws-cdk-sdk.fsx.FSxBackup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxBackup: fsx.FSxBackup = { ... }
```

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.backupId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.creationTime"></a>

- *Type:* `string`

---

##### `fileSystem`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.fileSystem"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxFileSystem`](#aws-cdk-sdk.fsx.FSxFileSystem)

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.lifecycle"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.type"></a>

- *Type:* `string`

---

##### `directoryInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.directoryInformation"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxActiveDirectoryBackupAttributes`](#aws-cdk-sdk.fsx.FSxActiveDirectoryBackupAttributes)

---

##### `failureDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxBackupFailureDetails`](#aws-cdk-sdk.fsx.FSxBackupFailureDetails)

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `progressPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.progressPercent"></a>

- *Type:* `number`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxBackup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

### FSxBackupFailureDetails <a name="aws-cdk-sdk.fsx.FSxBackupFailureDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxBackupFailureDetails: fsx.FSxBackupFailureDetails = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxBackupFailureDetails.property.message"></a>

- *Type:* `string`

---

### FSxCancelDataRepositoryTaskRequest <a name="aws-cdk-sdk.fsx.FSxCancelDataRepositoryTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCancelDataRepositoryTaskRequest: fsx.FSxCancelDataRepositoryTaskRequest = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCancelDataRepositoryTaskRequest.property.taskId"></a>

- *Type:* `string`

---

### FSxCancelDataRepositoryTaskResponse <a name="aws-cdk-sdk.fsx.FSxCancelDataRepositoryTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCancelDataRepositoryTaskResponse: fsx.FSxCancelDataRepositoryTaskResponse = { ... }
```

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCancelDataRepositoryTaskResponse.property.lifecycle"></a>

- *Type:* `string`

---

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCancelDataRepositoryTaskResponse.property.taskId"></a>

- *Type:* `string`

---

### FSxCompletionReport <a name="aws-cdk-sdk.fsx.FSxCompletionReport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCompletionReport: fsx.FSxCompletionReport = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCompletionReport.property.enabled"></a>

- *Type:* `boolean`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCompletionReport.property.format"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCompletionReport.property.path"></a>

- *Type:* `string`

---

##### `scope`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCompletionReport.property.scope"></a>

- *Type:* `string`

---

### FSxCreateBackupRequest <a name="aws-cdk-sdk.fsx.FSxCreateBackupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCreateBackupRequest: fsx.FSxCreateBackupRequest = { ... }
```

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCreateBackupRequest.property.fileSystemId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateBackupRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateBackupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

### FSxCreateBackupResponse <a name="aws-cdk-sdk.fsx.FSxCreateBackupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCreateBackupResponse: fsx.FSxCreateBackupResponse = { ... }
```

##### `backup`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateBackupResponse.property.backup"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxBackup`](#aws-cdk-sdk.fsx.FSxBackup)

---

### FSxCreateDataRepositoryTaskRequest <a name="aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCreateDataRepositoryTaskRequest: fsx.FSxCreateDataRepositoryTaskRequest = { ... }
```

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest.property.fileSystemId"></a>

- *Type:* `string`

---

##### `report`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest.property.report"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCompletionReport`](#aws-cdk-sdk.fsx.FSxCompletionReport)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest.property.type"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `paths`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest.property.paths"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

### FSxCreateDataRepositoryTaskResponse <a name="aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCreateDataRepositoryTaskResponse: fsx.FSxCreateDataRepositoryTaskResponse = { ... }
```

##### `dataRepositoryTask`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskResponse.property.dataRepositoryTask"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDataRepositoryTask`](#aws-cdk-sdk.fsx.FSxDataRepositoryTask)

---

### FSxCreateFileSystemFromBackupRequest <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCreateFileSystemFromBackupRequest: fsx.FSxCreateFileSystemFromBackupRequest = { ... }
```

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest.property.backupId"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `lustreConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest.property.lustreConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration`](#aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration)

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest.property.storageType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `windowsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest.property.windowsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration`](#aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration)

---

### FSxCreateFileSystemFromBackupResponse <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCreateFileSystemFromBackupResponse: fsx.FSxCreateFileSystemFromBackupResponse = { ... }
```

##### `fileSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupResponse.property.fileSystem"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxFileSystem`](#aws-cdk-sdk.fsx.FSxFileSystem)

---

### FSxCreateFileSystemLustreConfiguration <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCreateFileSystemLustreConfiguration: fsx.FSxCreateFileSystemLustreConfiguration = { ... }
```

##### `autoImportPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.autoImportPolicy"></a>

- *Type:* `string`

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `driveCacheType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.driveCacheType"></a>

- *Type:* `string`

---

##### `exportPath`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.exportPath"></a>

- *Type:* `string`

---

##### `importedFileChunkSize`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.importedFileChunkSize"></a>

- *Type:* `number`

---

##### `importPath`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.importPath"></a>

- *Type:* `string`

---

##### `perUnitStorageThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.perUnitStorageThroughput"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---

### FSxCreateFileSystemRequest <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCreateFileSystemRequest: fsx.FSxCreateFileSystemRequest = { ... }
```

##### `fileSystemType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest.property.fileSystemType"></a>

- *Type:* `string`

---

##### `storageCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest.property.storageCapacity"></a>

- *Type:* `number`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lustreConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest.property.lustreConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration`](#aws-cdk-sdk.fsx.FSxCreateFileSystemLustreConfiguration)

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest.property.storageType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `windowsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemRequest.property.windowsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration`](#aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration)

---

### FSxCreateFileSystemResponse <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCreateFileSystemResponse: fsx.FSxCreateFileSystemResponse = { ... }
```

##### `fileSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemResponse.property.fileSystem"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxFileSystem`](#aws-cdk-sdk.fsx.FSxFileSystem)

---

### FSxCreateFileSystemWindowsConfiguration <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxCreateFileSystemWindowsConfiguration: fsx.FSxCreateFileSystemWindowsConfiguration = { ... }
```

##### `throughputCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration.property.throughputCapacity"></a>

- *Type:* `number`

---

##### `activeDirectoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration.property.activeDirectoryId"></a>

- *Type:* `string`

---

##### `aliases`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration.property.aliases"></a>

- *Type:* `string`[]

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `preferredSubnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration.property.preferredSubnetId"></a>

- *Type:* `string`

---

##### `selfManagedActiveDirectoryConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfiguration`](#aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfiguration)

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxCreateFileSystemWindowsConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---

### FSxDataRepositoryConfiguration <a name="aws-cdk-sdk.fsx.FSxDataRepositoryConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDataRepositoryConfiguration: fsx.FSxDataRepositoryConfiguration = { ... }
```

##### `autoImportPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryConfiguration.property.autoImportPolicy"></a>

- *Type:* `string`

---

##### `exportPath`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryConfiguration.property.exportPath"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryConfiguration.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDataRepositoryFailureDetails`](#aws-cdk-sdk.fsx.FSxDataRepositoryFailureDetails)

---

##### `importedFileChunkSize`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryConfiguration.property.importedFileChunkSize"></a>

- *Type:* `number`

---

##### `importPath`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryConfiguration.property.importPath"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryConfiguration.property.lifecycle"></a>

- *Type:* `string`

---

### FSxDataRepositoryFailureDetails <a name="aws-cdk-sdk.fsx.FSxDataRepositoryFailureDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDataRepositoryFailureDetails: fsx.FSxDataRepositoryFailureDetails = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryFailureDetails.property.message"></a>

- *Type:* `string`

---

### FSxDataRepositoryTask <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDataRepositoryTask: fsx.FSxDataRepositoryTask = { ... }
```

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.creationTime"></a>

- *Type:* `string`

---

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.fileSystemId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.lifecycle"></a>

- *Type:* `string`

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.taskId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.type"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.endTime"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDataRepositoryTaskFailureDetails`](#aws-cdk-sdk.fsx.FSxDataRepositoryTaskFailureDetails)

---

##### `paths`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.paths"></a>

- *Type:* `string`[]

---

##### `report`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.report"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCompletionReport`](#aws-cdk-sdk.fsx.FSxCompletionReport)

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.resourceArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.status"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDataRepositoryTaskStatus`](#aws-cdk-sdk.fsx.FSxDataRepositoryTaskStatus)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTask.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

### FSxDataRepositoryTaskFailureDetails <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTaskFailureDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDataRepositoryTaskFailureDetails: fsx.FSxDataRepositoryTaskFailureDetails = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTaskFailureDetails.property.message"></a>

- *Type:* `string`

---

### FSxDataRepositoryTaskFilter <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTaskFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDataRepositoryTaskFilter: fsx.FSxDataRepositoryTaskFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTaskFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTaskFilter.property.values"></a>

- *Type:* `string`[]

---

### FSxDataRepositoryTaskStatus <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTaskStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDataRepositoryTaskStatus: fsx.FSxDataRepositoryTaskStatus = { ... }
```

##### `failedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTaskStatus.property.failedCount"></a>

- *Type:* `number`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTaskStatus.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `succeededCount`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTaskStatus.property.succeededCount"></a>

- *Type:* `number`

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDataRepositoryTaskStatus.property.totalCount"></a>

- *Type:* `number`

---

### FSxDeleteBackupRequest <a name="aws-cdk-sdk.fsx.FSxDeleteBackupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDeleteBackupRequest: fsx.FSxDeleteBackupRequest = { ... }
```

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteBackupRequest.property.backupId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteBackupRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

### FSxDeleteBackupResponse <a name="aws-cdk-sdk.fsx.FSxDeleteBackupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDeleteBackupResponse: fsx.FSxDeleteBackupResponse = { ... }
```

##### `backupId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteBackupResponse.property.backupId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteBackupResponse.property.lifecycle"></a>

- *Type:* `string`

---

### FSxDeleteFileSystemLustreConfiguration <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemLustreConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDeleteFileSystemLustreConfiguration: fsx.FSxDeleteFileSystemLustreConfiguration = { ... }
```

##### `finalBackupTags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemLustreConfiguration.property.finalBackupTags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `skipFinalBackup`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemLustreConfiguration.property.skipFinalBackup"></a>

- *Type:* `boolean`

---

### FSxDeleteFileSystemLustreResponse <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemLustreResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDeleteFileSystemLustreResponse: fsx.FSxDeleteFileSystemLustreResponse = { ... }
```

##### `finalBackupId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemLustreResponse.property.finalBackupId"></a>

- *Type:* `string`

---

##### `finalBackupTags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemLustreResponse.property.finalBackupTags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

### FSxDeleteFileSystemRequest <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDeleteFileSystemRequest: fsx.FSxDeleteFileSystemRequest = { ... }
```

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest.property.fileSystemId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `lustreConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest.property.lustreConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDeleteFileSystemLustreConfiguration`](#aws-cdk-sdk.fsx.FSxDeleteFileSystemLustreConfiguration)

---

##### `windowsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest.property.windowsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDeleteFileSystemWindowsConfiguration`](#aws-cdk-sdk.fsx.FSxDeleteFileSystemWindowsConfiguration)

---

### FSxDeleteFileSystemResponse <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDeleteFileSystemResponse: fsx.FSxDeleteFileSystemResponse = { ... }
```

##### `fileSystemId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemResponse.property.fileSystemId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemResponse.property.lifecycle"></a>

- *Type:* `string`

---

##### `lustreResponse`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemResponse.property.lustreResponse"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDeleteFileSystemLustreResponse`](#aws-cdk-sdk.fsx.FSxDeleteFileSystemLustreResponse)

---

##### `windowsResponse`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemResponse.property.windowsResponse"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDeleteFileSystemWindowsResponse`](#aws-cdk-sdk.fsx.FSxDeleteFileSystemWindowsResponse)

---

### FSxDeleteFileSystemWindowsConfiguration <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemWindowsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDeleteFileSystemWindowsConfiguration: fsx.FSxDeleteFileSystemWindowsConfiguration = { ... }
```

##### `finalBackupTags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemWindowsConfiguration.property.finalBackupTags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `skipFinalBackup`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemWindowsConfiguration.property.skipFinalBackup"></a>

- *Type:* `boolean`

---

### FSxDeleteFileSystemWindowsResponse <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemWindowsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDeleteFileSystemWindowsResponse: fsx.FSxDeleteFileSystemWindowsResponse = { ... }
```

##### `finalBackupId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemWindowsResponse.property.finalBackupId"></a>

- *Type:* `string`

---

##### `finalBackupTags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDeleteFileSystemWindowsResponse.property.finalBackupTags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

### FSxDescribeBackupsRequest <a name="aws-cdk-sdk.fsx.FSxDescribeBackupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDescribeBackupsRequest: fsx.FSxDescribeBackupsRequest = { ... }
```

##### `backupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeBackupsRequest.property.backupIds"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeBackupsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxFilter`](#aws-cdk-sdk.fsx.FSxFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeBackupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeBackupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### FSxDescribeBackupsResponse <a name="aws-cdk-sdk.fsx.FSxDescribeBackupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDescribeBackupsResponse: fsx.FSxDescribeBackupsResponse = { ... }
```

##### `backups`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeBackupsResponse.property.backups"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxBackup`](#aws-cdk-sdk.fsx.FSxBackup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeBackupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### FSxDescribeDataRepositoryTasksRequest <a name="aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDescribeDataRepositoryTasksRequest: fsx.FSxDescribeDataRepositoryTasksRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDataRepositoryTaskFilter`](#aws-cdk-sdk.fsx.FSxDataRepositoryTaskFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `taskIds`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksRequest.property.taskIds"></a>

- *Type:* `string`[]

---

### FSxDescribeDataRepositoryTasksResponse <a name="aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDescribeDataRepositoryTasksResponse: fsx.FSxDescribeDataRepositoryTasksResponse = { ... }
```

##### `dataRepositoryTasks`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksResponse.property.dataRepositoryTasks"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDataRepositoryTask`](#aws-cdk-sdk.fsx.FSxDataRepositoryTask)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksResponse.property.nextToken"></a>

- *Type:* `string`

---

### FSxDescribeFileSystemAliasesRequest <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDescribeFileSystemAliasesRequest: fsx.FSxDescribeFileSystemAliasesRequest = { ... }
```

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesRequest.property.fileSystemId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesRequest.property.nextToken"></a>

- *Type:* `string`

---

### FSxDescribeFileSystemAliasesResponse <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDescribeFileSystemAliasesResponse: fsx.FSxDescribeFileSystemAliasesResponse = { ... }
```

##### `aliases`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesResponse.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesResponse.property.nextToken"></a>

- *Type:* `string`

---

### FSxDescribeFileSystemsRequest <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDescribeFileSystemsRequest: fsx.FSxDescribeFileSystemsRequest = { ... }
```

##### `fileSystemIds`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemsRequest.property.fileSystemIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemsRequest.property.nextToken"></a>

- *Type:* `string`

---

### FSxDescribeFileSystemsResponse <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDescribeFileSystemsResponse: fsx.FSxDescribeFileSystemsResponse = { ... }
```

##### `fileSystems`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemsResponse.property.fileSystems"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxFileSystem`](#aws-cdk-sdk.fsx.FSxFileSystem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDescribeFileSystemsResponse.property.nextToken"></a>

- *Type:* `string`

---

### FSxDisassociateFileSystemAliasesRequest <a name="aws-cdk-sdk.fsx.FSxDisassociateFileSystemAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDisassociateFileSystemAliasesRequest: fsx.FSxDisassociateFileSystemAliasesRequest = { ... }
```

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxDisassociateFileSystemAliasesRequest.property.aliases"></a>

- *Type:* `string`[]

---

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxDisassociateFileSystemAliasesRequest.property.fileSystemId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDisassociateFileSystemAliasesRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

### FSxDisassociateFileSystemAliasesResponse <a name="aws-cdk-sdk.fsx.FSxDisassociateFileSystemAliasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxDisassociateFileSystemAliasesResponse: fsx.FSxDisassociateFileSystemAliasesResponse = { ... }
```

##### `aliases`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxDisassociateFileSystemAliasesResponse.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---

### FSxFileSystem <a name="aws-cdk-sdk.fsx.FSxFileSystem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxFileSystem: fsx.FSxFileSystem = { ... }
```

##### `administrativeActions`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.administrativeActions"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAdministrativeAction`](#aws-cdk-sdk.fsx.FSxAdministrativeAction)[]

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.creationTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.dnsName"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxFileSystemFailureDetails`](#aws-cdk-sdk.fsx.FSxFileSystemFailureDetails)

---

##### `fileSystemId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.fileSystemId"></a>

- *Type:* `string`

---

##### `fileSystemType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.fileSystemType"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.lifecycle"></a>

- *Type:* `string`

---

##### `lustreConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.lustreConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration`](#aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration)

---

##### `networkInterfaceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.networkInterfaceIds"></a>

- *Type:* `string`[]

---

##### `ownerId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.ownerId"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.resourceArn"></a>

- *Type:* `string`

---

##### `storageCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.storageCapacity"></a>

- *Type:* `number`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.storageType"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.vpcId"></a>

- *Type:* `string`

---

##### `windowsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystem.property.windowsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration`](#aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration)

---

### FSxFileSystemFailureDetails <a name="aws-cdk-sdk.fsx.FSxFileSystemFailureDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxFileSystemFailureDetails: fsx.FSxFileSystemFailureDetails = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFileSystemFailureDetails.property.message"></a>

- *Type:* `string`

---

### FSxFilter <a name="aws-cdk-sdk.fsx.FSxFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxFilter: fsx.FSxFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxFilter.property.values"></a>

- *Type:* `string`[]

---

### FSxListTagsForResourceRequest <a name="aws-cdk-sdk.fsx.FSxListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxListTagsForResourceRequest: fsx.FSxListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxListTagsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### FSxListTagsForResourceResponse <a name="aws-cdk-sdk.fsx.FSxListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxListTagsForResourceResponse: fsx.FSxListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

### FSxLustreFileSystemConfiguration <a name="aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxLustreFileSystemConfiguration: fsx.FSxLustreFileSystemConfiguration = { ... }
```

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `dataRepositoryConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration.property.dataRepositoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDataRepositoryConfiguration`](#aws-cdk-sdk.fsx.FSxDataRepositoryConfiguration)

---

##### `deploymentType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `driveCacheType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration.property.driveCacheType"></a>

- *Type:* `string`

---

##### `mountName`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration.property.mountName"></a>

- *Type:* `string`

---

##### `perUnitStorageThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration.property.perUnitStorageThroughput"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxLustreFileSystemConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---

### FSxSelfManagedActiveDirectoryAttributes <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxSelfManagedActiveDirectoryAttributes: fsx.FSxSelfManagedActiveDirectoryAttributes = { ... }
```

##### `dnsIps`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryAttributes.property.dnsIps"></a>

- *Type:* `string`[]

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryAttributes.property.domainName"></a>

- *Type:* `string`

---

##### `fileSystemAdministratorsGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryAttributes.property.fileSystemAdministratorsGroup"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryAttributes.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryAttributes.property.userName"></a>

- *Type:* `string`

---

### FSxSelfManagedActiveDirectoryConfiguration <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxSelfManagedActiveDirectoryConfiguration: fsx.FSxSelfManagedActiveDirectoryConfiguration = { ... }
```

##### `dnsIps`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfiguration.property.dnsIps"></a>

- *Type:* `string`[]

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfiguration.property.domainName"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfiguration.property.password"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfiguration.property.userName"></a>

- *Type:* `string`

---

##### `fileSystemAdministratorsGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---

### FSxSelfManagedActiveDirectoryConfigurationUpdates <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfigurationUpdates"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxSelfManagedActiveDirectoryConfigurationUpdates: fsx.FSxSelfManagedActiveDirectoryConfigurationUpdates = { ... }
```

##### `dnsIps`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfigurationUpdates.property.dnsIps"></a>

- *Type:* `string`[]

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfigurationUpdates.property.password"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfigurationUpdates.property.userName"></a>

- *Type:* `string`

---

### FSxTag <a name="aws-cdk-sdk.fsx.FSxTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxTag: fsx.FSxTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxTag.property.value"></a>

- *Type:* `string`

---

### FSxTagResourceRequest <a name="aws-cdk-sdk.fsx.FSxTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxTagResourceRequest: fsx.FSxTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

### FSxTagResourceResponse <a name="aws-cdk-sdk.fsx.FSxTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxTagResourceResponse: fsx.FSxTagResourceResponse = { ... }
```

### FSxUntagResourceRequest <a name="aws-cdk-sdk.fsx.FSxUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxUntagResourceRequest: fsx.FSxUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### FSxUntagResourceResponse <a name="aws-cdk-sdk.fsx.FSxUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxUntagResourceResponse: fsx.FSxUntagResourceResponse = { ... }
```

### FSxUpdateFileSystemLustreConfiguration <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemLustreConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxUpdateFileSystemLustreConfiguration: fsx.FSxUpdateFileSystemLustreConfiguration = { ... }
```

##### `autoImportPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemLustreConfiguration.property.autoImportPolicy"></a>

- *Type:* `string`

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemLustreConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemLustreConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemLustreConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---

### FSxUpdateFileSystemRequest <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxUpdateFileSystemRequest: fsx.FSxUpdateFileSystemRequest = { ... }
```

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest.property.fileSystemId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `lustreConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest.property.lustreConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemLustreConfiguration`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemLustreConfiguration)

---

##### `storageCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest.property.storageCapacity"></a>

- *Type:* `number`

---

##### `windowsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest.property.windowsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemWindowsConfiguration`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemWindowsConfiguration)

---

### FSxUpdateFileSystemResponse <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxUpdateFileSystemResponse: fsx.FSxUpdateFileSystemResponse = { ... }
```

##### `fileSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemResponse.property.fileSystem"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxFileSystem`](#aws-cdk-sdk.fsx.FSxFileSystem)

---

### FSxUpdateFileSystemWindowsConfiguration <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemWindowsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxUpdateFileSystemWindowsConfiguration: fsx.FSxUpdateFileSystemWindowsConfiguration = { ... }
```

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemWindowsConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemWindowsConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `selfManagedActiveDirectoryConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemWindowsConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfigurationUpdates`](#aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryConfigurationUpdates)

---

##### `throughputCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemWindowsConfiguration.property.throughputCapacity"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxUpdateFileSystemWindowsConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---

### FSxWindowsFileSystemConfiguration <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

const fSxWindowsFileSystemConfiguration: fsx.FSxWindowsFileSystemConfiguration = { ... }
```

##### `activeDirectoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.activeDirectoryId"></a>

- *Type:* `string`

---

##### `aliases`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `maintenanceOperationsInProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.maintenanceOperationsInProgress"></a>

- *Type:* `string`[]

---

##### `preferredFileServerIp`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.preferredFileServerIp"></a>

- *Type:* `string`

---

##### `preferredSubnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.preferredSubnetId"></a>

- *Type:* `string`

---

##### `remoteAdministrationEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.remoteAdministrationEndpoint"></a>

- *Type:* `string`

---

##### `selfManagedActiveDirectoryConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryAttributes`](#aws-cdk-sdk.fsx.FSxSelfManagedActiveDirectoryAttributes)

---

##### `throughputCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.throughputCapacity"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fsx.FSxWindowsFileSystemConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### FSxResponsesAssociateFileSystemAliases <a name="aws-cdk-sdk.fsx.FSxResponsesAssociateFileSystemAliases"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesAssociateFileSystemAliases.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesAssociateFileSystemAliases(__scope: Construct, __resources: string[], __input: FSxAssociateFileSystemAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesAssociateFileSystemAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesAssociateFileSystemAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesAssociateFileSystemAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAssociateFileSystemAliasesRequest`](#aws-cdk-sdk.fsx.FSxAssociateFileSystemAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesAssociateFileSystemAliases.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---


### FSxResponsesCancelDataRepositoryTask <a name="aws-cdk-sdk.fsx.FSxResponsesCancelDataRepositoryTask"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCancelDataRepositoryTask.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCancelDataRepositoryTask(__scope: Construct, __resources: string[], __input: FSxCancelDataRepositoryTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCancelDataRepositoryTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCancelDataRepositoryTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCancelDataRepositoryTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCancelDataRepositoryTaskRequest`](#aws-cdk-sdk.fsx.FSxCancelDataRepositoryTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCancelDataRepositoryTask.property.lifecycle"></a>

- *Type:* `string`

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCancelDataRepositoryTask.property.taskId"></a>

- *Type:* `string`

---


### FSxResponsesCreateBackup <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackup"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackup.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackup(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `backup`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackup.property.backup"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup`](#aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup)

---


### FSxResponsesCreateBackupBackup <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackupBackup(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.backupId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.creationTime"></a>

- *Type:* `string`

---

##### `directoryInformation`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.directoryInformation"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupDirectoryInformation`](#aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupDirectoryInformation)

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFailureDetails`](#aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFailureDetails)

---

##### `fileSystem`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.fileSystem"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem`](#aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.lifecycle"></a>

- *Type:* `string`

---

##### `progressPercent`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.progressPercent"></a>

- *Type:* `number`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackup.property.type"></a>

- *Type:* `string`

---


### FSxResponsesCreateBackupBackupDirectoryInformation <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupDirectoryInformation"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupDirectoryInformation.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackupBackupDirectoryInformation(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupDirectoryInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupDirectoryInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupDirectoryInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `activeDirectoryId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupDirectoryInformation.property.activeDirectoryId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupDirectoryInformation.property.domainName"></a>

- *Type:* `string`

---


### FSxResponsesCreateBackupBackupFailureDetails <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFailureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFailureDetails.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackupBackupFailureDetails(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFailureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFailureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFailureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFailureDetails.property.message"></a>

- *Type:* `string`

---


### FSxResponsesCreateBackupBackupFileSystem <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackupBackupFileSystem(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `administrativeActions`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.administrativeActions"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAdministrativeAction`](#aws-cdk-sdk.fsx.FSxAdministrativeAction)[]

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.creationTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.dnsName"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemFailureDetails`](#aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemFailureDetails)

---

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.fileSystemId"></a>

- *Type:* `string`

---

##### `fileSystemType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.fileSystemType"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.lifecycle"></a>

- *Type:* `string`

---

##### `lustreConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.lustreConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration)

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.networkInterfaceIds"></a>

- *Type:* `string`[]

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.ownerId"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.resourceArn"></a>

- *Type:* `string`

---

##### `storageCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.storageCapacity"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.storageType"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.vpcId"></a>

- *Type:* `string`

---

##### `windowsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystem.property.windowsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration)

---


### FSxResponsesCreateBackupBackupFileSystemFailureDetails <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemFailureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemFailureDetails.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackupBackupFileSystemFailureDetails(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemFailureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemFailureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemFailureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemFailureDetails.property.message"></a>

- *Type:* `string`

---


### FSxResponsesCreateBackupBackupFileSystemLustreConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `dataRepositoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.property.dataRepositoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration)

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `driveCacheType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.property.driveCacheType"></a>

- *Type:* `string`

---

##### `mountName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.property.mountName"></a>

- *Type:* `string`

---

##### `perUnitStorageThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.property.perUnitStorageThroughput"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---


### FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `autoImportPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.autoImportPolicy"></a>

- *Type:* `string`

---

##### `exportPath`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.exportPath"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails`](#aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails)

---

##### `importedFileChunkSize`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.importedFileChunkSize"></a>

- *Type:* `number`

---

##### `importPath`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.importPath"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.lifecycle"></a>

- *Type:* `string`

---


### FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.property.message"></a>

- *Type:* `string`

---


### FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `activeDirectoryId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.activeDirectoryId"></a>

- *Type:* `string`

---

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `maintenanceOperationsInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.maintenanceOperationsInProgress"></a>

- *Type:* `string`[]

---

##### `preferredFileServerIp`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.preferredFileServerIp"></a>

- *Type:* `string`

---

##### `preferredSubnetId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.preferredSubnetId"></a>

- *Type:* `string`

---

##### `remoteAdministrationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.remoteAdministrationEndpoint"></a>

- *Type:* `string`

---

##### `selfManagedActiveDirectoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration)

---

##### `throughputCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.throughputCapacity"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---


### FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `dnsIps`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps"></a>

- *Type:* `string`[]

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName"></a>

- *Type:* `string`

---

##### `fileSystemAdministratorsGroup`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.userName"></a>

- *Type:* `string`

---


### FSxResponsesCreateDataRepositoryTask <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTask"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTask.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateDataRepositoryTask(__scope: Construct, __resources: string[], __input: FSxCreateDataRepositoryTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest`](#aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `dataRepositoryTask`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTask.property.dataRepositoryTask"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask`](#aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask)

---


### FSxResponsesCreateDataRepositoryTaskDataRepositoryTask <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask(__scope: Construct, __resources: string[], __input: FSxCreateDataRepositoryTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest`](#aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.creationTime"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.endTime"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails`](#aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails)

---

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.fileSystemId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.lifecycle"></a>

- *Type:* `string`

---

##### `paths`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.paths"></a>

- *Type:* `string`[]

---

##### `report`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.report"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport`](#aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport)

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.resourceArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.status"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus`](#aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.taskId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTask.property.type"></a>

- *Type:* `string`

---


### FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails(__scope: Construct, __resources: string[], __input: FSxCreateDataRepositoryTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest`](#aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails.property.message"></a>

- *Type:* `string`

---


### FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport(__scope: Construct, __resources: string[], __input: FSxCreateDataRepositoryTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest`](#aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport.property.enabled"></a>

- *Type:* `boolean`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport.property.format"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport.property.path"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport.property.scope"></a>

- *Type:* `string`

---


### FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus(__scope: Construct, __resources: string[], __input: FSxCreateDataRepositoryTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest`](#aws-cdk-sdk.fsx.FSxCreateDataRepositoryTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `failedCount`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus.property.failedCount"></a>

- *Type:* `number`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `succeededCount`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus.property.succeededCount"></a>

- *Type:* `number`

---

##### `totalCount`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus.property.totalCount"></a>

- *Type:* `number`

---


### FSxResponsesCreateFileSystem <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystem"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystem.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystem(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `fileSystem`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystem.property.fileSystem"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem)

---


### FSxResponsesCreateFileSystemFileSystem <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFileSystem(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `administrativeActions`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.administrativeActions"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAdministrativeAction`](#aws-cdk-sdk.fsx.FSxAdministrativeAction)[]

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.creationTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.dnsName"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemFailureDetails`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemFailureDetails)

---

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.fileSystemId"></a>

- *Type:* `string`

---

##### `fileSystemType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.fileSystemType"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.lifecycle"></a>

- *Type:* `string`

---

##### `lustreConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.lustreConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration)

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.networkInterfaceIds"></a>

- *Type:* `string`[]

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.ownerId"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.resourceArn"></a>

- *Type:* `string`

---

##### `storageCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.storageCapacity"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.storageType"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.vpcId"></a>

- *Type:* `string`

---

##### `windowsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystem.property.windowsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration)

---


### FSxResponsesCreateFileSystemFileSystemFailureDetails <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemFailureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemFailureDetails.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFileSystemFailureDetails(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemFailureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemFailureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemFailureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemFailureDetails.property.message"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFileSystemLustreConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `dataRepositoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.property.dataRepositoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration)

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `driveCacheType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.property.driveCacheType"></a>

- *Type:* `string`

---

##### `mountName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.property.mountName"></a>

- *Type:* `string`

---

##### `perUnitStorageThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.property.perUnitStorageThroughput"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `autoImportPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.autoImportPolicy"></a>

- *Type:* `string`

---

##### `exportPath`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.exportPath"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails)

---

##### `importedFileChunkSize`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.importedFileChunkSize"></a>

- *Type:* `number`

---

##### `importPath`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.importPath"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.lifecycle"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.property.message"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFileSystemWindowsConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `activeDirectoryId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.activeDirectoryId"></a>

- *Type:* `string`

---

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `maintenanceOperationsInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.maintenanceOperationsInProgress"></a>

- *Type:* `string`[]

---

##### `preferredFileServerIp`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.preferredFileServerIp"></a>

- *Type:* `string`

---

##### `preferredSubnetId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.preferredSubnetId"></a>

- *Type:* `string`

---

##### `remoteAdministrationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.remoteAdministrationEndpoint"></a>

- *Type:* `string`

---

##### `selfManagedActiveDirectoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration)

---

##### `throughputCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.throughputCapacity"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `dnsIps`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps"></a>

- *Type:* `string`[]

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName"></a>

- *Type:* `string`

---

##### `fileSystemAdministratorsGroup`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.userName"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFromBackup <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackup"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackup.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFromBackup(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemFromBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `fileSystem`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackup.property.fileSystem"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem)

---


### FSxResponsesCreateFileSystemFromBackupFileSystem <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFromBackupFileSystem(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemFromBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `administrativeActions`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.administrativeActions"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAdministrativeAction`](#aws-cdk-sdk.fsx.FSxAdministrativeAction)[]

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.creationTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.dnsName"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails)

---

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.fileSystemId"></a>

- *Type:* `string`

---

##### `fileSystemType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.fileSystemType"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.lifecycle"></a>

- *Type:* `string`

---

##### `lustreConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.lustreConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration)

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.networkInterfaceIds"></a>

- *Type:* `string`[]

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.ownerId"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.resourceArn"></a>

- *Type:* `string`

---

##### `storageCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.storageCapacity"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.storageType"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.vpcId"></a>

- *Type:* `string`

---

##### `windowsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystem.property.windowsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration)

---


### FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemFromBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails.property.message"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemFromBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `dataRepositoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.property.dataRepositoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration)

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `driveCacheType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.property.driveCacheType"></a>

- *Type:* `string`

---

##### `mountName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.property.mountName"></a>

- *Type:* `string`

---

##### `perUnitStorageThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.property.perUnitStorageThroughput"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemFromBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `autoImportPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.autoImportPolicy"></a>

- *Type:* `string`

---

##### `exportPath`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.exportPath"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails)

---

##### `importedFileChunkSize`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.importedFileChunkSize"></a>

- *Type:* `number`

---

##### `importPath`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.importPath"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration.property.lifecycle"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemFromBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.property.message"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemFromBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `activeDirectoryId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.activeDirectoryId"></a>

- *Type:* `string`

---

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `maintenanceOperationsInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.maintenanceOperationsInProgress"></a>

- *Type:* `string`[]

---

##### `preferredFileServerIp`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.preferredFileServerIp"></a>

- *Type:* `string`

---

##### `preferredSubnetId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.preferredSubnetId"></a>

- *Type:* `string`

---

##### `remoteAdministrationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.remoteAdministrationEndpoint"></a>

- *Type:* `string`

---

##### `selfManagedActiveDirectoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration)

---

##### `throughputCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.throughputCapacity"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---


### FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(__scope: Construct, __resources: string[], __input: FSxCreateFileSystemFromBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest`](#aws-cdk-sdk.fsx.FSxCreateFileSystemFromBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `dnsIps`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps"></a>

- *Type:* `string`[]

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName"></a>

- *Type:* `string`

---

##### `fileSystemAdministratorsGroup`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.userName"></a>

- *Type:* `string`

---


### FSxResponsesDeleteBackup <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteBackup"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteBackup.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesDeleteBackup(__scope: Construct, __resources: string[], __input: FSxDeleteBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDeleteBackupRequest`](#aws-cdk-sdk.fsx.FSxDeleteBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteBackup.property.backupId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteBackup.property.lifecycle"></a>

- *Type:* `string`

---


### FSxResponsesDeleteFileSystem <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystem"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystem.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesDeleteFileSystem(__scope: Construct, __resources: string[], __input: FSxDeleteFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest`](#aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystem.property.fileSystemId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystem.property.lifecycle"></a>

- *Type:* `string`

---

##### `lustreResponse`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystem.property.lustreResponse"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemLustreResponse`](#aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemLustreResponse)

---

##### `windowsResponse`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystem.property.windowsResponse"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemWindowsResponse`](#aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemWindowsResponse)

---


### FSxResponsesDeleteFileSystemLustreResponse <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemLustreResponse"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemLustreResponse.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesDeleteFileSystemLustreResponse(__scope: Construct, __resources: string[], __input: FSxDeleteFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemLustreResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemLustreResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemLustreResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest`](#aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `finalBackupId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemLustreResponse.property.finalBackupId"></a>

- *Type:* `string`

---

##### `finalBackupTags`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemLustreResponse.property.finalBackupTags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---


### FSxResponsesDeleteFileSystemWindowsResponse <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemWindowsResponse"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemWindowsResponse.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesDeleteFileSystemWindowsResponse(__scope: Construct, __resources: string[], __input: FSxDeleteFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemWindowsResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemWindowsResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemWindowsResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest`](#aws-cdk-sdk.fsx.FSxDeleteFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `finalBackupId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemWindowsResponse.property.finalBackupId"></a>

- *Type:* `string`

---

##### `finalBackupTags`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDeleteFileSystemWindowsResponse.property.finalBackupTags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---


### FSxResponsesDescribeBackups <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeBackups"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeBackups.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesDescribeBackups(__scope: Construct, __resources: string[], __input: FSxDescribeBackupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeBackups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeBackups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeBackups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDescribeBackupsRequest`](#aws-cdk-sdk.fsx.FSxDescribeBackupsRequest)

---



#### Properties <a name="Properties"></a>

##### `backups`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeBackups.property.backups"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxBackup`](#aws-cdk-sdk.fsx.FSxBackup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeBackups.property.nextToken"></a>

- *Type:* `string`

---


### FSxResponsesDescribeDataRepositoryTasks <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeDataRepositoryTasks"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeDataRepositoryTasks.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesDescribeDataRepositoryTasks(__scope: Construct, __resources: string[], __input: FSxDescribeDataRepositoryTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeDataRepositoryTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeDataRepositoryTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeDataRepositoryTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksRequest`](#aws-cdk-sdk.fsx.FSxDescribeDataRepositoryTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `dataRepositoryTasks`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeDataRepositoryTasks.property.dataRepositoryTasks"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDataRepositoryTask`](#aws-cdk-sdk.fsx.FSxDataRepositoryTask)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeDataRepositoryTasks.property.nextToken"></a>

- *Type:* `string`

---


### FSxResponsesDescribeFileSystemAliases <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystemAliases"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystemAliases.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesDescribeFileSystemAliases(__scope: Construct, __resources: string[], __input: FSxDescribeFileSystemAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystemAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystemAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystemAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesRequest`](#aws-cdk-sdk.fsx.FSxDescribeFileSystemAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystemAliases.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystemAliases.property.nextToken"></a>

- *Type:* `string`

---


### FSxResponsesDescribeFileSystems <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystems"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystems.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesDescribeFileSystems(__scope: Construct, __resources: string[], __input: FSxDescribeFileSystemsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystems.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystems.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystems.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDescribeFileSystemsRequest`](#aws-cdk-sdk.fsx.FSxDescribeFileSystemsRequest)

---



#### Properties <a name="Properties"></a>

##### `fileSystems`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystems.property.fileSystems"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxFileSystem`](#aws-cdk-sdk.fsx.FSxFileSystem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDescribeFileSystems.property.nextToken"></a>

- *Type:* `string`

---


### FSxResponsesDisassociateFileSystemAliases <a name="aws-cdk-sdk.fsx.FSxResponsesDisassociateFileSystemAliases"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesDisassociateFileSystemAliases.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesDisassociateFileSystemAliases(__scope: Construct, __resources: string[], __input: FSxDisassociateFileSystemAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDisassociateFileSystemAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDisassociateFileSystemAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDisassociateFileSystemAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxDisassociateFileSystemAliasesRequest`](#aws-cdk-sdk.fsx.FSxDisassociateFileSystemAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesDisassociateFileSystemAliases.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---


### FSxResponsesListTagsForResource <a name="aws-cdk-sdk.fsx.FSxResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesListTagsForResource.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: FSxListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxListTagsForResourceRequest`](#aws-cdk-sdk.fsx.FSxListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---


### FSxResponsesUpdateFileSystem <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystem"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystem.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesUpdateFileSystem(__scope: Construct, __resources: string[], __input: FSxUpdateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `fileSystem`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystem.property.fileSystem"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem`](#aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem)

---


### FSxResponsesUpdateFileSystemFileSystem <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesUpdateFileSystemFileSystem(__scope: Construct, __resources: string[], __input: FSxUpdateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `administrativeActions`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.administrativeActions"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAdministrativeAction`](#aws-cdk-sdk.fsx.FSxAdministrativeAction)[]

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.creationTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.dnsName"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemFailureDetails`](#aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemFailureDetails)

---

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.fileSystemId"></a>

- *Type:* `string`

---

##### `fileSystemType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.fileSystemType"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.lifecycle"></a>

- *Type:* `string`

---

##### `lustreConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.lustreConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration)

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.networkInterfaceIds"></a>

- *Type:* `string`[]

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.ownerId"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.resourceArn"></a>

- *Type:* `string`

---

##### `storageCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.storageCapacity"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.storageType"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.tags"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxTag`](#aws-cdk-sdk.fsx.FSxTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.vpcId"></a>

- *Type:* `string`

---

##### `windowsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystem.property.windowsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration)

---


### FSxResponsesUpdateFileSystemFileSystemFailureDetails <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemFailureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemFailureDetails.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesUpdateFileSystemFileSystemFailureDetails(__scope: Construct, __resources: string[], __input: FSxUpdateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemFailureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemFailureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemFailureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemFailureDetails.property.message"></a>

- *Type:* `string`

---


### FSxResponsesUpdateFileSystemFileSystemLustreConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration(__scope: Construct, __resources: string[], __input: FSxUpdateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `dataRepositoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.property.dataRepositoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration)

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `driveCacheType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.property.driveCacheType"></a>

- *Type:* `string`

---

##### `mountName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.property.mountName"></a>

- *Type:* `string`

---

##### `perUnitStorageThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.property.perUnitStorageThroughput"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---


### FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration(__scope: Construct, __resources: string[], __input: FSxUpdateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `autoImportPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.autoImportPolicy"></a>

- *Type:* `string`

---

##### `exportPath`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.exportPath"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails`](#aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails)

---

##### `importedFileChunkSize`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.importedFileChunkSize"></a>

- *Type:* `number`

---

##### `importPath`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.importPath"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration.property.lifecycle"></a>

- *Type:* `string`

---


### FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(__scope: Construct, __resources: string[], __input: FSxUpdateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails.property.message"></a>

- *Type:* `string`

---


### FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration(__scope: Construct, __resources: string[], __input: FSxUpdateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `activeDirectoryId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.activeDirectoryId"></a>

- *Type:* `string`

---

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxAlias`](#aws-cdk-sdk.fsx.FSxAlias)[]

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.automaticBackupRetentionDays"></a>

- *Type:* `number`

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.copyTagsToBackups"></a>

- *Type:* `boolean`

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.dailyAutomaticBackupStartTime"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.deploymentType"></a>

- *Type:* `string`

---

##### `maintenanceOperationsInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.maintenanceOperationsInProgress"></a>

- *Type:* `string`[]

---

##### `preferredFileServerIp`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.preferredFileServerIp"></a>

- *Type:* `string`

---

##### `preferredSubnetId`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.preferredSubnetId"></a>

- *Type:* `string`

---

##### `remoteAdministrationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.remoteAdministrationEndpoint"></a>

- *Type:* `string`

---

##### `selfManagedActiveDirectoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration`](#aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration)

---

##### `throughputCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.throughputCapacity"></a>

- *Type:* `number`

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration.property.weeklyMaintenanceStartTime"></a>

- *Type:* `string`

---


### FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.Initializer"></a>

```typescript
import { fsx } from 'aws-cdk-sdk'

new fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(__scope: Construct, __resources: string[], __input: FSxUpdateFileSystemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest`](#aws-cdk-sdk.fsx.FSxUpdateFileSystemRequest)

---



#### Properties <a name="Properties"></a>

##### `dnsIps`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps"></a>

- *Type:* `string`[]

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName"></a>

- *Type:* `string`

---

##### `fileSystemAdministratorsGroup`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.fsx.FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration.property.userName"></a>

- *Type:* `string`

---



