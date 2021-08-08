# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### BackupClient <a name="aws-cdk-sdk.backup.BackupClient"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupClient.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createBackupPlan` <a name="aws-cdk-sdk.backup.BackupClient.createBackupPlan"></a>

```typescript
public createBackupPlan(input: BackupCreateBackupPlanInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCreateBackupPlanInput`](#aws-cdk-sdk.backup.BackupCreateBackupPlanInput)

---

##### `createBackupSelection` <a name="aws-cdk-sdk.backup.BackupClient.createBackupSelection"></a>

```typescript
public createBackupSelection(input: BackupCreateBackupSelectionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCreateBackupSelectionInput`](#aws-cdk-sdk.backup.BackupCreateBackupSelectionInput)

---

##### `createBackupVault` <a name="aws-cdk-sdk.backup.BackupClient.createBackupVault"></a>

```typescript
public createBackupVault(input: BackupCreateBackupVaultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCreateBackupVaultInput`](#aws-cdk-sdk.backup.BackupCreateBackupVaultInput)

---

##### `deleteBackupPlan` <a name="aws-cdk-sdk.backup.BackupClient.deleteBackupPlan"></a>

```typescript
public deleteBackupPlan(input: BackupDeleteBackupPlanInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDeleteBackupPlanInput`](#aws-cdk-sdk.backup.BackupDeleteBackupPlanInput)

---

##### `deleteBackupSelection` <a name="aws-cdk-sdk.backup.BackupClient.deleteBackupSelection"></a>

```typescript
public deleteBackupSelection(input: BackupDeleteBackupSelectionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDeleteBackupSelectionInput`](#aws-cdk-sdk.backup.BackupDeleteBackupSelectionInput)

---

##### `deleteBackupVault` <a name="aws-cdk-sdk.backup.BackupClient.deleteBackupVault"></a>

```typescript
public deleteBackupVault(input: BackupDeleteBackupVaultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDeleteBackupVaultInput`](#aws-cdk-sdk.backup.BackupDeleteBackupVaultInput)

---

##### `deleteBackupVaultAccessPolicy` <a name="aws-cdk-sdk.backup.BackupClient.deleteBackupVaultAccessPolicy"></a>

```typescript
public deleteBackupVaultAccessPolicy(input: BackupDeleteBackupVaultAccessPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDeleteBackupVaultAccessPolicyInput`](#aws-cdk-sdk.backup.BackupDeleteBackupVaultAccessPolicyInput)

---

##### `deleteBackupVaultNotifications` <a name="aws-cdk-sdk.backup.BackupClient.deleteBackupVaultNotifications"></a>

```typescript
public deleteBackupVaultNotifications(input: BackupDeleteBackupVaultNotificationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDeleteBackupVaultNotificationsInput`](#aws-cdk-sdk.backup.BackupDeleteBackupVaultNotificationsInput)

---

##### `deleteRecoveryPoint` <a name="aws-cdk-sdk.backup.BackupClient.deleteRecoveryPoint"></a>

```typescript
public deleteRecoveryPoint(input: BackupDeleteRecoveryPointInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDeleteRecoveryPointInput`](#aws-cdk-sdk.backup.BackupDeleteRecoveryPointInput)

---

##### `describeBackupJob` <a name="aws-cdk-sdk.backup.BackupClient.describeBackupJob"></a>

```typescript
public describeBackupJob(input: BackupDescribeBackupJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeBackupJobInput`](#aws-cdk-sdk.backup.BackupDescribeBackupJobInput)

---

##### `describeBackupVault` <a name="aws-cdk-sdk.backup.BackupClient.describeBackupVault"></a>

```typescript
public describeBackupVault(input: BackupDescribeBackupVaultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeBackupVaultInput`](#aws-cdk-sdk.backup.BackupDescribeBackupVaultInput)

---

##### `describeCopyJob` <a name="aws-cdk-sdk.backup.BackupClient.describeCopyJob"></a>

```typescript
public describeCopyJob(input: BackupDescribeCopyJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeCopyJobInput`](#aws-cdk-sdk.backup.BackupDescribeCopyJobInput)

---

##### `describeGlobalSettings` <a name="aws-cdk-sdk.backup.BackupClient.describeGlobalSettings"></a>

```typescript
public describeGlobalSettings()
```

##### `describeProtectedResource` <a name="aws-cdk-sdk.backup.BackupClient.describeProtectedResource"></a>

```typescript
public describeProtectedResource(input: BackupDescribeProtectedResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeProtectedResourceInput`](#aws-cdk-sdk.backup.BackupDescribeProtectedResourceInput)

---

##### `describeRecoveryPoint` <a name="aws-cdk-sdk.backup.BackupClient.describeRecoveryPoint"></a>

```typescript
public describeRecoveryPoint(input: BackupDescribeRecoveryPointInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput`](#aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput)

---

##### `describeRegionSettings` <a name="aws-cdk-sdk.backup.BackupClient.describeRegionSettings"></a>

```typescript
public describeRegionSettings()
```

##### `describeRestoreJob` <a name="aws-cdk-sdk.backup.BackupClient.describeRestoreJob"></a>

```typescript
public describeRestoreJob(input: BackupDescribeRestoreJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeRestoreJobInput`](#aws-cdk-sdk.backup.BackupDescribeRestoreJobInput)

---

##### `exportBackupPlanTemplate` <a name="aws-cdk-sdk.backup.BackupClient.exportBackupPlanTemplate"></a>

```typescript
public exportBackupPlanTemplate(input: BackupExportBackupPlanTemplateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupExportBackupPlanTemplateInput`](#aws-cdk-sdk.backup.BackupExportBackupPlanTemplateInput)

---

##### `fetchBackupPlan` <a name="aws-cdk-sdk.backup.BackupClient.fetchBackupPlan"></a>

```typescript
public fetchBackupPlan(input: BackupGetBackupPlanInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupPlanInput`](#aws-cdk-sdk.backup.BackupGetBackupPlanInput)

---

##### `fetchBackupPlanFromJson` <a name="aws-cdk-sdk.backup.BackupClient.fetchBackupPlanFromJson"></a>

```typescript
public fetchBackupPlanFromJson(input: BackupGetBackupPlanFromJsonInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupPlanFromJsonInput`](#aws-cdk-sdk.backup.BackupGetBackupPlanFromJsonInput)

---

##### `fetchBackupPlanFromTemplate` <a name="aws-cdk-sdk.backup.BackupClient.fetchBackupPlanFromTemplate"></a>

```typescript
public fetchBackupPlanFromTemplate(input: BackupGetBackupPlanFromTemplateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupPlanFromTemplateInput`](#aws-cdk-sdk.backup.BackupGetBackupPlanFromTemplateInput)

---

##### `fetchBackupSelection` <a name="aws-cdk-sdk.backup.BackupClient.fetchBackupSelection"></a>

```typescript
public fetchBackupSelection(input: BackupGetBackupSelectionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupSelectionInput`](#aws-cdk-sdk.backup.BackupGetBackupSelectionInput)

---

##### `fetchBackupVaultAccessPolicy` <a name="aws-cdk-sdk.backup.BackupClient.fetchBackupVaultAccessPolicy"></a>

```typescript
public fetchBackupVaultAccessPolicy(input: BackupGetBackupVaultAccessPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupVaultAccessPolicyInput`](#aws-cdk-sdk.backup.BackupGetBackupVaultAccessPolicyInput)

---

##### `fetchBackupVaultNotifications` <a name="aws-cdk-sdk.backup.BackupClient.fetchBackupVaultNotifications"></a>

```typescript
public fetchBackupVaultNotifications(input: BackupGetBackupVaultNotificationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsInput`](#aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsInput)

---

##### `fetchRecoveryPointRestoreMetadata` <a name="aws-cdk-sdk.backup.BackupClient.fetchRecoveryPointRestoreMetadata"></a>

```typescript
public fetchRecoveryPointRestoreMetadata(input: BackupGetRecoveryPointRestoreMetadataInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataInput`](#aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataInput)

---

##### `fetchSupportedResourceTypes` <a name="aws-cdk-sdk.backup.BackupClient.fetchSupportedResourceTypes"></a>

```typescript
public fetchSupportedResourceTypes()
```

##### `listBackupJobs` <a name="aws-cdk-sdk.backup.BackupClient.listBackupJobs"></a>

```typescript
public listBackupJobs(input: BackupListBackupJobsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupJobsInput`](#aws-cdk-sdk.backup.BackupListBackupJobsInput)

---

##### `listBackupPlans` <a name="aws-cdk-sdk.backup.BackupClient.listBackupPlans"></a>

```typescript
public listBackupPlans(input: BackupListBackupPlansInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupPlansInput`](#aws-cdk-sdk.backup.BackupListBackupPlansInput)

---

##### `listBackupPlanTemplates` <a name="aws-cdk-sdk.backup.BackupClient.listBackupPlanTemplates"></a>

```typescript
public listBackupPlanTemplates(input: BackupListBackupPlanTemplatesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupPlanTemplatesInput`](#aws-cdk-sdk.backup.BackupListBackupPlanTemplatesInput)

---

##### `listBackupPlanVersions` <a name="aws-cdk-sdk.backup.BackupClient.listBackupPlanVersions"></a>

```typescript
public listBackupPlanVersions(input: BackupListBackupPlanVersionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupPlanVersionsInput`](#aws-cdk-sdk.backup.BackupListBackupPlanVersionsInput)

---

##### `listBackupSelections` <a name="aws-cdk-sdk.backup.BackupClient.listBackupSelections"></a>

```typescript
public listBackupSelections(input: BackupListBackupSelectionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupSelectionsInput`](#aws-cdk-sdk.backup.BackupListBackupSelectionsInput)

---

##### `listBackupVaults` <a name="aws-cdk-sdk.backup.BackupClient.listBackupVaults"></a>

```typescript
public listBackupVaults(input: BackupListBackupVaultsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupVaultsInput`](#aws-cdk-sdk.backup.BackupListBackupVaultsInput)

---

##### `listCopyJobs` <a name="aws-cdk-sdk.backup.BackupClient.listCopyJobs"></a>

```typescript
public listCopyJobs(input: BackupListCopyJobsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListCopyJobsInput`](#aws-cdk-sdk.backup.BackupListCopyJobsInput)

---

##### `listProtectedResources` <a name="aws-cdk-sdk.backup.BackupClient.listProtectedResources"></a>

```typescript
public listProtectedResources(input: BackupListProtectedResourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListProtectedResourcesInput`](#aws-cdk-sdk.backup.BackupListProtectedResourcesInput)

---

##### `listRecoveryPointsByBackupVault` <a name="aws-cdk-sdk.backup.BackupClient.listRecoveryPointsByBackupVault"></a>

```typescript
public listRecoveryPointsByBackupVault(input: BackupListRecoveryPointsByBackupVaultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput`](#aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput)

---

##### `listRecoveryPointsByResource` <a name="aws-cdk-sdk.backup.BackupClient.listRecoveryPointsByResource"></a>

```typescript
public listRecoveryPointsByResource(input: BackupListRecoveryPointsByResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceInput`](#aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceInput)

---

##### `listRestoreJobs` <a name="aws-cdk-sdk.backup.BackupClient.listRestoreJobs"></a>

```typescript
public listRestoreJobs(input: BackupListRestoreJobsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListRestoreJobsInput`](#aws-cdk-sdk.backup.BackupListRestoreJobsInput)

---

##### `listTags` <a name="aws-cdk-sdk.backup.BackupClient.listTags"></a>

```typescript
public listTags(input: BackupListTagsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListTagsInput`](#aws-cdk-sdk.backup.BackupListTagsInput)

---

##### `putBackupVaultAccessPolicy` <a name="aws-cdk-sdk.backup.BackupClient.putBackupVaultAccessPolicy"></a>

```typescript
public putBackupVaultAccessPolicy(input: BackupPutBackupVaultAccessPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupPutBackupVaultAccessPolicyInput`](#aws-cdk-sdk.backup.BackupPutBackupVaultAccessPolicyInput)

---

##### `putBackupVaultNotifications` <a name="aws-cdk-sdk.backup.BackupClient.putBackupVaultNotifications"></a>

```typescript
public putBackupVaultNotifications(input: BackupPutBackupVaultNotificationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupPutBackupVaultNotificationsInput`](#aws-cdk-sdk.backup.BackupPutBackupVaultNotificationsInput)

---

##### `startBackupJob` <a name="aws-cdk-sdk.backup.BackupClient.startBackupJob"></a>

```typescript
public startBackupJob(input: BackupStartBackupJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupStartBackupJobInput`](#aws-cdk-sdk.backup.BackupStartBackupJobInput)

---

##### `startCopyJob` <a name="aws-cdk-sdk.backup.BackupClient.startCopyJob"></a>

```typescript
public startCopyJob(input: BackupStartCopyJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupStartCopyJobInput`](#aws-cdk-sdk.backup.BackupStartCopyJobInput)

---

##### `startRestoreJob` <a name="aws-cdk-sdk.backup.BackupClient.startRestoreJob"></a>

```typescript
public startRestoreJob(input: BackupStartRestoreJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupStartRestoreJobInput`](#aws-cdk-sdk.backup.BackupStartRestoreJobInput)

---

##### `stopBackupJob` <a name="aws-cdk-sdk.backup.BackupClient.stopBackupJob"></a>

```typescript
public stopBackupJob(input: BackupStopBackupJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupStopBackupJobInput`](#aws-cdk-sdk.backup.BackupStopBackupJobInput)

---

##### `tagResource` <a name="aws-cdk-sdk.backup.BackupClient.tagResource"></a>

```typescript
public tagResource(input: BackupTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupTagResourceInput`](#aws-cdk-sdk.backup.BackupTagResourceInput)

---

##### `untagResource` <a name="aws-cdk-sdk.backup.BackupClient.untagResource"></a>

```typescript
public untagResource(input: BackupUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupUntagResourceInput`](#aws-cdk-sdk.backup.BackupUntagResourceInput)

---

##### `updateBackupPlan` <a name="aws-cdk-sdk.backup.BackupClient.updateBackupPlan"></a>

```typescript
public updateBackupPlan(input: BackupUpdateBackupPlanInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupUpdateBackupPlanInput`](#aws-cdk-sdk.backup.BackupUpdateBackupPlanInput)

---

##### `updateGlobalSettings` <a name="aws-cdk-sdk.backup.BackupClient.updateGlobalSettings"></a>

```typescript
public updateGlobalSettings(input: BackupUpdateGlobalSettingsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupUpdateGlobalSettingsInput`](#aws-cdk-sdk.backup.BackupUpdateGlobalSettingsInput)

---

##### `updateRecoveryPointLifecycle` <a name="aws-cdk-sdk.backup.BackupClient.updateRecoveryPointLifecycle"></a>

```typescript
public updateRecoveryPointLifecycle(input: BackupUpdateRecoveryPointLifecycleInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput`](#aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput)

---

##### `updateRegionSettings` <a name="aws-cdk-sdk.backup.BackupClient.updateRegionSettings"></a>

```typescript
public updateRegionSettings(input: BackupUpdateRegionSettingsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupUpdateRegionSettingsInput`](#aws-cdk-sdk.backup.BackupUpdateRegionSettingsInput)

---




## Structs <a name="Structs"></a>

### BackupAdvancedBackupSetting <a name="aws-cdk-sdk.backup.BackupAdvancedBackupSetting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupAdvancedBackupSetting: backup.BackupAdvancedBackupSetting = { ... }
```

##### `backupOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupAdvancedBackupSetting.property.backupOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupAdvancedBackupSetting.property.resourceType"></a>

- *Type:* `string`

---

### BackupBackupJob <a name="aws-cdk-sdk.backup.BackupBackupJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupBackupJob: backup.BackupBackupJob = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.accountId"></a>

- *Type:* `string`

---

##### `backupJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.backupJobId"></a>

- *Type:* `string`

---

##### `backupOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.backupOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `backupSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `backupType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.backupType"></a>

- *Type:* `string`

---

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.backupVaultName"></a>

- *Type:* `string`

---

##### `bytesTransferred`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.bytesTransferred"></a>

- *Type:* `number`

---

##### `completionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.completionDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRecoveryPointCreator`](#aws-cdk-sdk.backup.BackupRecoveryPointCreator)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.creationDate"></a>

- *Type:* `string`

---

##### `expectedCompletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.expectedCompletionDate"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `percentDone`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.percentDone"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.resourceType"></a>

- *Type:* `string`

---

##### `startBy`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.startBy"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.state"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupJob.property.statusMessage"></a>

- *Type:* `string`

---

### BackupBackupPlan <a name="aws-cdk-sdk.backup.BackupBackupPlan"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupBackupPlan: backup.BackupBackupPlan = { ... }
```

##### `backupPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlan.property.backupPlanName"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlan.property.rules"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupRule`](#aws-cdk-sdk.backup.BackupBackupRule)[]

---

##### `advancedBackupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlan.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

### BackupBackupPlanInput <a name="aws-cdk-sdk.backup.BackupBackupPlanInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupBackupPlanInput: backup.BackupBackupPlanInput = { ... }
```

##### `backupPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlanInput.property.backupPlanName"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlanInput.property.rules"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupRuleInput`](#aws-cdk-sdk.backup.BackupBackupRuleInput)[]

---

##### `advancedBackupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlanInput.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

### BackupBackupPlansListMember <a name="aws-cdk-sdk.backup.BackupBackupPlansListMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupBackupPlansListMember: backup.BackupBackupPlansListMember = { ... }
```

##### `advancedBackupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlansListMember.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

##### `backupPlanArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlansListMember.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlansListMember.property.backupPlanId"></a>

- *Type:* `string`

---

##### `backupPlanName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlansListMember.property.backupPlanName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlansListMember.property.creationDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlansListMember.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `deletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlansListMember.property.deletionDate"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlansListMember.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlansListMember.property.versionId"></a>

- *Type:* `string`

---

### BackupBackupPlanTemplatesListMember <a name="aws-cdk-sdk.backup.BackupBackupPlanTemplatesListMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupBackupPlanTemplatesListMember: backup.BackupBackupPlanTemplatesListMember = { ... }
```

##### `backupPlanTemplateId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlanTemplatesListMember.property.backupPlanTemplateId"></a>

- *Type:* `string`

---

##### `backupPlanTemplateName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupPlanTemplatesListMember.property.backupPlanTemplateName"></a>

- *Type:* `string`

---

### BackupBackupRule <a name="aws-cdk-sdk.backup.BackupBackupRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupBackupRule: backup.BackupBackupRule = { ... }
```

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupBackupRule.property.ruleName"></a>

- *Type:* `string`

---

##### `targetBackupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupBackupRule.property.targetBackupVaultName"></a>

- *Type:* `string`

---

##### `completionWindowMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRule.property.completionWindowMinutes"></a>

- *Type:* `number`

---

##### `copyActions`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRule.property.copyActions"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCopyAction`](#aws-cdk-sdk.backup.BackupCopyAction)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRule.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupLifecycle`](#aws-cdk-sdk.backup.BackupLifecycle)

---

##### `recoveryPointTags`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRule.property.recoveryPointTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `ruleId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRule.property.ruleId"></a>

- *Type:* `string`

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRule.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `startWindowMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRule.property.startWindowMinutes"></a>

- *Type:* `number`

---

### BackupBackupRuleInput <a name="aws-cdk-sdk.backup.BackupBackupRuleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupBackupRuleInput: backup.BackupBackupRuleInput = { ... }
```

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupBackupRuleInput.property.ruleName"></a>

- *Type:* `string`

---

##### `targetBackupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupBackupRuleInput.property.targetBackupVaultName"></a>

- *Type:* `string`

---

##### `completionWindowMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRuleInput.property.completionWindowMinutes"></a>

- *Type:* `number`

---

##### `copyActions`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRuleInput.property.copyActions"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCopyAction`](#aws-cdk-sdk.backup.BackupCopyAction)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRuleInput.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupLifecycle`](#aws-cdk-sdk.backup.BackupLifecycle)

---

##### `recoveryPointTags`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRuleInput.property.recoveryPointTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRuleInput.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `startWindowMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupRuleInput.property.startWindowMinutes"></a>

- *Type:* `number`

---

### BackupBackupSelection <a name="aws-cdk-sdk.backup.BackupBackupSelection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupBackupSelection: backup.BackupBackupSelection = { ... }
```

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupBackupSelection.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `selectionName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupBackupSelection.property.selectionName"></a>

- *Type:* `string`

---

##### `listOfTags`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupSelection.property.listOfTags"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCondition`](#aws-cdk-sdk.backup.BackupCondition)[]

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupSelection.property.resources"></a>

- *Type:* `string`[]

---

### BackupBackupSelectionsListMember <a name="aws-cdk-sdk.backup.BackupBackupSelectionsListMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupBackupSelectionsListMember: backup.BackupBackupSelectionsListMember = { ... }
```

##### `backupPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupSelectionsListMember.property.backupPlanId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupSelectionsListMember.property.creationDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupSelectionsListMember.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupSelectionsListMember.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `selectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupSelectionsListMember.property.selectionId"></a>

- *Type:* `string`

---

##### `selectionName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupSelectionsListMember.property.selectionName"></a>

- *Type:* `string`

---

### BackupBackupVaultListMember <a name="aws-cdk-sdk.backup.BackupBackupVaultListMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupBackupVaultListMember: backup.BackupBackupVaultListMember = { ... }
```

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupVaultListMember.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupVaultListMember.property.backupVaultName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupVaultListMember.property.creationDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupVaultListMember.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupVaultListMember.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `numberOfRecoveryPoints`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupBackupVaultListMember.property.numberOfRecoveryPoints"></a>

- *Type:* `number`

---

### BackupCalculatedLifecycle <a name="aws-cdk-sdk.backup.BackupCalculatedLifecycle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupCalculatedLifecycle: backup.BackupCalculatedLifecycle = { ... }
```

##### `deleteAt`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCalculatedLifecycle.property.deleteAt"></a>

- *Type:* `string`

---

##### `moveToColdStorageAt`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCalculatedLifecycle.property.moveToColdStorageAt"></a>

- *Type:* `string`

---

### BackupCondition <a name="aws-cdk-sdk.backup.BackupCondition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupCondition: backup.BackupCondition = { ... }
```

##### `conditionKey`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupCondition.property.conditionKey"></a>

- *Type:* `string`

---

##### `conditionType`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupCondition.property.conditionType"></a>

- *Type:* `string`

---

##### `conditionValue`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupCondition.property.conditionValue"></a>

- *Type:* `string`

---

### BackupCopyAction <a name="aws-cdk-sdk.backup.BackupCopyAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupCopyAction: backup.BackupCopyAction = { ... }
```

##### `destinationBackupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupCopyAction.property.destinationBackupVaultArn"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyAction.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupLifecycle`](#aws-cdk-sdk.backup.BackupLifecycle)

---

### BackupCopyJob <a name="aws-cdk-sdk.backup.BackupCopyJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupCopyJob: backup.BackupCopyJob = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.accountId"></a>

- *Type:* `string`

---

##### `backupSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `completionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.completionDate"></a>

- *Type:* `string`

---

##### `copyJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.copyJobId"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRecoveryPointCreator`](#aws-cdk-sdk.backup.BackupRecoveryPointCreator)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.creationDate"></a>

- *Type:* `string`

---

##### `destinationBackupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.destinationBackupVaultArn"></a>

- *Type:* `string`

---

##### `destinationRecoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.destinationRecoveryPointArn"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.resourceType"></a>

- *Type:* `string`

---

##### `sourceBackupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.sourceBackupVaultArn"></a>

- *Type:* `string`

---

##### `sourceRecoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.sourceRecoveryPointArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.state"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCopyJob.property.statusMessage"></a>

- *Type:* `string`

---

### BackupCreateBackupPlanInput <a name="aws-cdk-sdk.backup.BackupCreateBackupPlanInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupCreateBackupPlanInput: backup.BackupCreateBackupPlanInput = { ... }
```

##### `backupPlan`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupPlanInput.property.backupPlan"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlanInput`](#aws-cdk-sdk.backup.BackupBackupPlanInput)

---

##### `backupPlanTags`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupPlanInput.property.backupPlanTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupPlanInput.property.creatorRequestId"></a>

- *Type:* `string`

---

### BackupCreateBackupPlanOutput <a name="aws-cdk-sdk.backup.BackupCreateBackupPlanOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupCreateBackupPlanOutput: backup.BackupCreateBackupPlanOutput = { ... }
```

##### `advancedBackupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupPlanOutput.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

##### `backupPlanArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupPlanOutput.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupPlanOutput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupPlanOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupPlanOutput.property.versionId"></a>

- *Type:* `string`

---

### BackupCreateBackupSelectionInput <a name="aws-cdk-sdk.backup.BackupCreateBackupSelectionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupCreateBackupSelectionInput: backup.BackupCreateBackupSelectionInput = { ... }
```

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupSelectionInput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `backupSelection`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupSelectionInput.property.backupSelection"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupSelection`](#aws-cdk-sdk.backup.BackupBackupSelection)

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupSelectionInput.property.creatorRequestId"></a>

- *Type:* `string`

---

### BackupCreateBackupSelectionOutput <a name="aws-cdk-sdk.backup.BackupCreateBackupSelectionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupCreateBackupSelectionOutput: backup.BackupCreateBackupSelectionOutput = { ... }
```

##### `backupPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupSelectionOutput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupSelectionOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `selectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupSelectionOutput.property.selectionId"></a>

- *Type:* `string`

---

### BackupCreateBackupVaultInput <a name="aws-cdk-sdk.backup.BackupCreateBackupVaultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupCreateBackupVaultInput: backup.BackupCreateBackupVaultInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupVaultInput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `backupVaultTags`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupVaultInput.property.backupVaultTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupVaultInput.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupVaultInput.property.encryptionKeyArn"></a>

- *Type:* `string`

---

### BackupCreateBackupVaultOutput <a name="aws-cdk-sdk.backup.BackupCreateBackupVaultOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupCreateBackupVaultOutput: backup.BackupCreateBackupVaultOutput = { ... }
```

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupVaultOutput.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupVaultOutput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupCreateBackupVaultOutput.property.creationDate"></a>

- *Type:* `string`

---

### BackupDeleteBackupPlanInput <a name="aws-cdk-sdk.backup.BackupDeleteBackupPlanInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDeleteBackupPlanInput: backup.BackupDeleteBackupPlanInput = { ... }
```

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDeleteBackupPlanInput.property.backupPlanId"></a>

- *Type:* `string`

---

### BackupDeleteBackupPlanOutput <a name="aws-cdk-sdk.backup.BackupDeleteBackupPlanOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDeleteBackupPlanOutput: backup.BackupDeleteBackupPlanOutput = { ... }
```

##### `backupPlanArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDeleteBackupPlanOutput.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDeleteBackupPlanOutput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `deletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDeleteBackupPlanOutput.property.deletionDate"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDeleteBackupPlanOutput.property.versionId"></a>

- *Type:* `string`

---

### BackupDeleteBackupSelectionInput <a name="aws-cdk-sdk.backup.BackupDeleteBackupSelectionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDeleteBackupSelectionInput: backup.BackupDeleteBackupSelectionInput = { ... }
```

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDeleteBackupSelectionInput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `selectionId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDeleteBackupSelectionInput.property.selectionId"></a>

- *Type:* `string`

---

### BackupDeleteBackupVaultAccessPolicyInput <a name="aws-cdk-sdk.backup.BackupDeleteBackupVaultAccessPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDeleteBackupVaultAccessPolicyInput: backup.BackupDeleteBackupVaultAccessPolicyInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDeleteBackupVaultAccessPolicyInput.property.backupVaultName"></a>

- *Type:* `string`

---

### BackupDeleteBackupVaultInput <a name="aws-cdk-sdk.backup.BackupDeleteBackupVaultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDeleteBackupVaultInput: backup.BackupDeleteBackupVaultInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDeleteBackupVaultInput.property.backupVaultName"></a>

- *Type:* `string`

---

### BackupDeleteBackupVaultNotificationsInput <a name="aws-cdk-sdk.backup.BackupDeleteBackupVaultNotificationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDeleteBackupVaultNotificationsInput: backup.BackupDeleteBackupVaultNotificationsInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDeleteBackupVaultNotificationsInput.property.backupVaultName"></a>

- *Type:* `string`

---

### BackupDeleteRecoveryPointInput <a name="aws-cdk-sdk.backup.BackupDeleteRecoveryPointInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDeleteRecoveryPointInput: backup.BackupDeleteRecoveryPointInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDeleteRecoveryPointInput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDeleteRecoveryPointInput.property.recoveryPointArn"></a>

- *Type:* `string`

---

### BackupDescribeBackupJobInput <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeBackupJobInput: backup.BackupDescribeBackupJobInput = { ... }
```

##### `backupJobId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobInput.property.backupJobId"></a>

- *Type:* `string`

---

### BackupDescribeBackupJobOutput <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeBackupJobOutput: backup.BackupDescribeBackupJobOutput = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.accountId"></a>

- *Type:* `string`

---

##### `backupJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.backupJobId"></a>

- *Type:* `string`

---

##### `backupOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.backupOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `backupSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `backupType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.backupType"></a>

- *Type:* `string`

---

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `bytesTransferred`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.bytesTransferred"></a>

- *Type:* `number`

---

##### `completionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.completionDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRecoveryPointCreator`](#aws-cdk-sdk.backup.BackupRecoveryPointCreator)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `expectedCompletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.expectedCompletionDate"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `percentDone`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.percentDone"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.resourceType"></a>

- *Type:* `string`

---

##### `startBy`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.startBy"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.state"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupJobOutput.property.statusMessage"></a>

- *Type:* `string`

---

### BackupDescribeBackupVaultInput <a name="aws-cdk-sdk.backup.BackupDescribeBackupVaultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeBackupVaultInput: backup.BackupDescribeBackupVaultInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupVaultInput.property.backupVaultName"></a>

- *Type:* `string`

---

### BackupDescribeBackupVaultOutput <a name="aws-cdk-sdk.backup.BackupDescribeBackupVaultOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeBackupVaultOutput: backup.BackupDescribeBackupVaultOutput = { ... }
```

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupVaultOutput.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupVaultOutput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupVaultOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupVaultOutput.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupVaultOutput.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `numberOfRecoveryPoints`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeBackupVaultOutput.property.numberOfRecoveryPoints"></a>

- *Type:* `number`

---

### BackupDescribeCopyJobInput <a name="aws-cdk-sdk.backup.BackupDescribeCopyJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeCopyJobInput: backup.BackupDescribeCopyJobInput = { ... }
```

##### `copyJobId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDescribeCopyJobInput.property.copyJobId"></a>

- *Type:* `string`

---

### BackupDescribeCopyJobOutput <a name="aws-cdk-sdk.backup.BackupDescribeCopyJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeCopyJobOutput: backup.BackupDescribeCopyJobOutput = { ... }
```

##### `copyJob`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeCopyJobOutput.property.copyJob"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCopyJob`](#aws-cdk-sdk.backup.BackupCopyJob)

---

### BackupDescribeGlobalSettingsInput <a name="aws-cdk-sdk.backup.BackupDescribeGlobalSettingsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeGlobalSettingsInput: backup.BackupDescribeGlobalSettingsInput = { ... }
```

### BackupDescribeGlobalSettingsOutput <a name="aws-cdk-sdk.backup.BackupDescribeGlobalSettingsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeGlobalSettingsOutput: backup.BackupDescribeGlobalSettingsOutput = { ... }
```

##### `globalSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeGlobalSettingsOutput.property.globalSettings"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeGlobalSettingsOutput.property.lastUpdateTime"></a>

- *Type:* `string`

---

### BackupDescribeProtectedResourceInput <a name="aws-cdk-sdk.backup.BackupDescribeProtectedResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeProtectedResourceInput: backup.BackupDescribeProtectedResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDescribeProtectedResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

### BackupDescribeProtectedResourceOutput <a name="aws-cdk-sdk.backup.BackupDescribeProtectedResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeProtectedResourceOutput: backup.BackupDescribeProtectedResourceOutput = { ... }
```

##### `lastBackupTime`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeProtectedResourceOutput.property.lastBackupTime"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeProtectedResourceOutput.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeProtectedResourceOutput.property.resourceType"></a>

- *Type:* `string`

---

### BackupDescribeRecoveryPointInput <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeRecoveryPointInput: backup.BackupDescribeRecoveryPointInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput.property.recoveryPointArn"></a>

- *Type:* `string`

---

### BackupDescribeRecoveryPointOutput <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeRecoveryPointOutput: backup.BackupDescribeRecoveryPointOutput = { ... }
```

##### `backupSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `calculatedLifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.calculatedLifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCalculatedLifecycle`](#aws-cdk-sdk.backup.BackupCalculatedLifecycle)

---

##### `completionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.completionDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRecoveryPointCreator`](#aws-cdk-sdk.backup.BackupRecoveryPointCreator)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `isEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.isEncrypted"></a>

- *Type:* `boolean`

---

##### `lastRestoreTime`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.lastRestoreTime"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupLifecycle`](#aws-cdk-sdk.backup.BackupLifecycle)

---

##### `recoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.resourceType"></a>

- *Type:* `string`

---

##### `sourceBackupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.sourceBackupVaultArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.status"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRecoveryPointOutput.property.storageClass"></a>

- *Type:* `string`

---

### BackupDescribeRegionSettingsInput <a name="aws-cdk-sdk.backup.BackupDescribeRegionSettingsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeRegionSettingsInput: backup.BackupDescribeRegionSettingsInput = { ... }
```

### BackupDescribeRegionSettingsOutput <a name="aws-cdk-sdk.backup.BackupDescribeRegionSettingsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeRegionSettingsOutput: backup.BackupDescribeRegionSettingsOutput = { ... }
```

##### `resourceTypeOptInPreference`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRegionSettingsOutput.property.resourceTypeOptInPreference"></a>

- *Type:* {[ key: string ]: `boolean`}

---

### BackupDescribeRestoreJobInput <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeRestoreJobInput: backup.BackupDescribeRestoreJobInput = { ... }
```

##### `restoreJobId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobInput.property.restoreJobId"></a>

- *Type:* `string`

---

### BackupDescribeRestoreJobOutput <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupDescribeRestoreJobOutput: backup.BackupDescribeRestoreJobOutput = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.accountId"></a>

- *Type:* `string`

---

##### `backupSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `completionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.completionDate"></a>

- *Type:* `string`

---

##### `createdResourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.createdResourceArn"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `expectedCompletionTimeMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.expectedCompletionTimeMinutes"></a>

- *Type:* `number`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `percentDone`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.percentDone"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.resourceType"></a>

- *Type:* `string`

---

##### `restoreJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.restoreJobId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupDescribeRestoreJobOutput.property.statusMessage"></a>

- *Type:* `string`

---

### BackupExportBackupPlanTemplateInput <a name="aws-cdk-sdk.backup.BackupExportBackupPlanTemplateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupExportBackupPlanTemplateInput: backup.BackupExportBackupPlanTemplateInput = { ... }
```

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupExportBackupPlanTemplateInput.property.backupPlanId"></a>

- *Type:* `string`

---

### BackupExportBackupPlanTemplateOutput <a name="aws-cdk-sdk.backup.BackupExportBackupPlanTemplateOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupExportBackupPlanTemplateOutput: backup.BackupExportBackupPlanTemplateOutput = { ... }
```

##### `backupPlanTemplateJson`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupExportBackupPlanTemplateOutput.property.backupPlanTemplateJson"></a>

- *Type:* `string`

---

### BackupGetBackupPlanFromJsonInput <a name="aws-cdk-sdk.backup.BackupGetBackupPlanFromJsonInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupPlanFromJsonInput: backup.BackupGetBackupPlanFromJsonInput = { ... }
```

##### `backupPlanTemplateJson`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanFromJsonInput.property.backupPlanTemplateJson"></a>

- *Type:* `string`

---

### BackupGetBackupPlanFromJsonOutput <a name="aws-cdk-sdk.backup.BackupGetBackupPlanFromJsonOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupPlanFromJsonOutput: backup.BackupGetBackupPlanFromJsonOutput = { ... }
```

##### `backupPlan`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanFromJsonOutput.property.backupPlan"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlan`](#aws-cdk-sdk.backup.BackupBackupPlan)

---

### BackupGetBackupPlanFromTemplateInput <a name="aws-cdk-sdk.backup.BackupGetBackupPlanFromTemplateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupPlanFromTemplateInput: backup.BackupGetBackupPlanFromTemplateInput = { ... }
```

##### `backupPlanTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanFromTemplateInput.property.backupPlanTemplateId"></a>

- *Type:* `string`

---

### BackupGetBackupPlanFromTemplateOutput <a name="aws-cdk-sdk.backup.BackupGetBackupPlanFromTemplateOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupPlanFromTemplateOutput: backup.BackupGetBackupPlanFromTemplateOutput = { ... }
```

##### `backupPlanDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanFromTemplateOutput.property.backupPlanDocument"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlan`](#aws-cdk-sdk.backup.BackupBackupPlan)

---

### BackupGetBackupPlanInput <a name="aws-cdk-sdk.backup.BackupGetBackupPlanInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupPlanInput: backup.BackupGetBackupPlanInput = { ... }
```

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanInput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanInput.property.versionId"></a>

- *Type:* `string`

---

### BackupGetBackupPlanOutput <a name="aws-cdk-sdk.backup.BackupGetBackupPlanOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupPlanOutput: backup.BackupGetBackupPlanOutput = { ... }
```

##### `advancedBackupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanOutput.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

##### `backupPlan`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanOutput.property.backupPlan"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlan`](#aws-cdk-sdk.backup.BackupBackupPlan)

---

##### `backupPlanArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanOutput.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanOutput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanOutput.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `deletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanOutput.property.deletionDate"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanOutput.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupPlanOutput.property.versionId"></a>

- *Type:* `string`

---

### BackupGetBackupSelectionInput <a name="aws-cdk-sdk.backup.BackupGetBackupSelectionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupSelectionInput: backup.BackupGetBackupSelectionInput = { ... }
```

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupSelectionInput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `selectionId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupSelectionInput.property.selectionId"></a>

- *Type:* `string`

---

### BackupGetBackupSelectionOutput <a name="aws-cdk-sdk.backup.BackupGetBackupSelectionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupSelectionOutput: backup.BackupGetBackupSelectionOutput = { ... }
```

##### `backupPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupSelectionOutput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `backupSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupSelectionOutput.property.backupSelection"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupSelection`](#aws-cdk-sdk.backup.BackupBackupSelection)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupSelectionOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupSelectionOutput.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `selectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupSelectionOutput.property.selectionId"></a>

- *Type:* `string`

---

### BackupGetBackupVaultAccessPolicyInput <a name="aws-cdk-sdk.backup.BackupGetBackupVaultAccessPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupVaultAccessPolicyInput: backup.BackupGetBackupVaultAccessPolicyInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupVaultAccessPolicyInput.property.backupVaultName"></a>

- *Type:* `string`

---

### BackupGetBackupVaultAccessPolicyOutput <a name="aws-cdk-sdk.backup.BackupGetBackupVaultAccessPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupVaultAccessPolicyOutput: backup.BackupGetBackupVaultAccessPolicyOutput = { ... }
```

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupVaultAccessPolicyOutput.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupVaultAccessPolicyOutput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupVaultAccessPolicyOutput.property.policy"></a>

- *Type:* `string`

---

### BackupGetBackupVaultNotificationsInput <a name="aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupVaultNotificationsInput: backup.BackupGetBackupVaultNotificationsInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsInput.property.backupVaultName"></a>

- *Type:* `string`

---

### BackupGetBackupVaultNotificationsOutput <a name="aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetBackupVaultNotificationsOutput: backup.BackupGetBackupVaultNotificationsOutput = { ... }
```

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsOutput.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsOutput.property.backupVaultEvents"></a>

- *Type:* `string`[]

---

##### `backupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsOutput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsOutput.property.snsTopicArn"></a>

- *Type:* `string`

---

### BackupGetRecoveryPointRestoreMetadataInput <a name="aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetRecoveryPointRestoreMetadataInput: backup.BackupGetRecoveryPointRestoreMetadataInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataInput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataInput.property.recoveryPointArn"></a>

- *Type:* `string`

---

### BackupGetRecoveryPointRestoreMetadataOutput <a name="aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetRecoveryPointRestoreMetadataOutput: backup.BackupGetRecoveryPointRestoreMetadataOutput = { ... }
```

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataOutput.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataOutput.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `restoreMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataOutput.property.restoreMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

### BackupGetSupportedResourceTypesOutput <a name="aws-cdk-sdk.backup.BackupGetSupportedResourceTypesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupGetSupportedResourceTypesOutput: backup.BackupGetSupportedResourceTypesOutput = { ... }
```

##### `resourceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupGetSupportedResourceTypesOutput.property.resourceTypes"></a>

- *Type:* `string`[]

---

### BackupLifecycle <a name="aws-cdk-sdk.backup.BackupLifecycle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupLifecycle: backup.BackupLifecycle = { ... }
```

##### `deleteAfterDays`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupLifecycle.property.deleteAfterDays"></a>

- *Type:* `number`

---

##### `moveToColdStorageAfterDays`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupLifecycle.property.moveToColdStorageAfterDays"></a>

- *Type:* `number`

---

### BackupListBackupJobsInput <a name="aws-cdk-sdk.backup.BackupListBackupJobsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupJobsInput: backup.BackupListBackupJobsInput = { ... }
```

##### `byAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsInput.property.byAccountId"></a>

- *Type:* `string`

---

##### `byBackupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsInput.property.byBackupVaultName"></a>

- *Type:* `string`

---

##### `byCreatedAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsInput.property.byCreatedAfter"></a>

- *Type:* `string`

---

##### `byCreatedBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsInput.property.byCreatedBefore"></a>

- *Type:* `string`

---

##### `byResourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsInput.property.byResourceArn"></a>

- *Type:* `string`

---

##### `byResourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsInput.property.byResourceType"></a>

- *Type:* `string`

---

##### `byState`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsInput.property.byState"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupJobsOutput <a name="aws-cdk-sdk.backup.BackupListBackupJobsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupJobsOutput: backup.BackupListBackupJobsOutput = { ... }
```

##### `backupJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsOutput.property.backupJobs"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupJob`](#aws-cdk-sdk.backup.BackupBackupJob)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupJobsOutput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupPlansInput <a name="aws-cdk-sdk.backup.BackupListBackupPlansInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupPlansInput: backup.BackupListBackupPlansInput = { ... }
```

##### `includeDeleted`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlansInput.property.includeDeleted"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlansInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlansInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupPlansOutput <a name="aws-cdk-sdk.backup.BackupListBackupPlansOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupPlansOutput: backup.BackupListBackupPlansOutput = { ... }
```

##### `backupPlansList`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlansOutput.property.backupPlansList"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlansListMember`](#aws-cdk-sdk.backup.BackupBackupPlansListMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlansOutput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupPlanTemplatesInput <a name="aws-cdk-sdk.backup.BackupListBackupPlanTemplatesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupPlanTemplatesInput: backup.BackupListBackupPlanTemplatesInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlanTemplatesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlanTemplatesInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupPlanTemplatesOutput <a name="aws-cdk-sdk.backup.BackupListBackupPlanTemplatesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupPlanTemplatesOutput: backup.BackupListBackupPlanTemplatesOutput = { ... }
```

##### `backupPlanTemplatesList`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlanTemplatesOutput.property.backupPlanTemplatesList"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlanTemplatesListMember`](#aws-cdk-sdk.backup.BackupBackupPlanTemplatesListMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlanTemplatesOutput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupPlanVersionsInput <a name="aws-cdk-sdk.backup.BackupListBackupPlanVersionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupPlanVersionsInput: backup.BackupListBackupPlanVersionsInput = { ... }
```

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlanVersionsInput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlanVersionsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlanVersionsInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupPlanVersionsOutput <a name="aws-cdk-sdk.backup.BackupListBackupPlanVersionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupPlanVersionsOutput: backup.BackupListBackupPlanVersionsOutput = { ... }
```

##### `backupPlanVersionsList`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlanVersionsOutput.property.backupPlanVersionsList"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlansListMember`](#aws-cdk-sdk.backup.BackupBackupPlansListMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupPlanVersionsOutput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupSelectionsInput <a name="aws-cdk-sdk.backup.BackupListBackupSelectionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupSelectionsInput: backup.BackupListBackupSelectionsInput = { ... }
```

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupListBackupSelectionsInput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupSelectionsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupSelectionsInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupSelectionsOutput <a name="aws-cdk-sdk.backup.BackupListBackupSelectionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupSelectionsOutput: backup.BackupListBackupSelectionsOutput = { ... }
```

##### `backupSelectionsList`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupSelectionsOutput.property.backupSelectionsList"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupSelectionsListMember`](#aws-cdk-sdk.backup.BackupBackupSelectionsListMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupSelectionsOutput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupVaultsInput <a name="aws-cdk-sdk.backup.BackupListBackupVaultsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupVaultsInput: backup.BackupListBackupVaultsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupVaultsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupVaultsInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListBackupVaultsOutput <a name="aws-cdk-sdk.backup.BackupListBackupVaultsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListBackupVaultsOutput: backup.BackupListBackupVaultsOutput = { ... }
```

##### `backupVaultList`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupVaultsOutput.property.backupVaultList"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupVaultListMember`](#aws-cdk-sdk.backup.BackupBackupVaultListMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListBackupVaultsOutput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListCopyJobsInput <a name="aws-cdk-sdk.backup.BackupListCopyJobsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListCopyJobsInput: backup.BackupListCopyJobsInput = { ... }
```

##### `byAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsInput.property.byAccountId"></a>

- *Type:* `string`

---

##### `byCreatedAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsInput.property.byCreatedAfter"></a>

- *Type:* `string`

---

##### `byCreatedBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsInput.property.byCreatedBefore"></a>

- *Type:* `string`

---

##### `byDestinationVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsInput.property.byDestinationVaultArn"></a>

- *Type:* `string`

---

##### `byResourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsInput.property.byResourceArn"></a>

- *Type:* `string`

---

##### `byResourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsInput.property.byResourceType"></a>

- *Type:* `string`

---

##### `byState`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsInput.property.byState"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListCopyJobsOutput <a name="aws-cdk-sdk.backup.BackupListCopyJobsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListCopyJobsOutput: backup.BackupListCopyJobsOutput = { ... }
```

##### `copyJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsOutput.property.copyJobs"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCopyJob`](#aws-cdk-sdk.backup.BackupCopyJob)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListCopyJobsOutput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListProtectedResourcesInput <a name="aws-cdk-sdk.backup.BackupListProtectedResourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListProtectedResourcesInput: backup.BackupListProtectedResourcesInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListProtectedResourcesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListProtectedResourcesInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListProtectedResourcesOutput <a name="aws-cdk-sdk.backup.BackupListProtectedResourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListProtectedResourcesOutput: backup.BackupListProtectedResourcesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListProtectedResourcesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListProtectedResourcesOutput.property.results"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupProtectedResource`](#aws-cdk-sdk.backup.BackupProtectedResource)[]

---

### BackupListRecoveryPointsByBackupVaultInput <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListRecoveryPointsByBackupVaultInput: backup.BackupListRecoveryPointsByBackupVaultInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `byBackupPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput.property.byBackupPlanId"></a>

- *Type:* `string`

---

##### `byCreatedAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput.property.byCreatedAfter"></a>

- *Type:* `string`

---

##### `byCreatedBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput.property.byCreatedBefore"></a>

- *Type:* `string`

---

##### `byResourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput.property.byResourceArn"></a>

- *Type:* `string`

---

##### `byResourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput.property.byResourceType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListRecoveryPointsByBackupVaultOutput <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListRecoveryPointsByBackupVaultOutput: backup.BackupListRecoveryPointsByBackupVaultOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `recoveryPoints`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultOutput.property.recoveryPoints"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault`](#aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault)[]

---

### BackupListRecoveryPointsByResourceInput <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListRecoveryPointsByResourceInput: backup.BackupListRecoveryPointsByResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListRecoveryPointsByResourceOutput <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListRecoveryPointsByResourceOutput: backup.BackupListRecoveryPointsByResourceOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `recoveryPoints`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceOutput.property.recoveryPoints"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRecoveryPointByResource`](#aws-cdk-sdk.backup.BackupRecoveryPointByResource)[]

---

### BackupListRestoreJobsInput <a name="aws-cdk-sdk.backup.BackupListRestoreJobsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListRestoreJobsInput: backup.BackupListRestoreJobsInput = { ... }
```

##### `byAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRestoreJobsInput.property.byAccountId"></a>

- *Type:* `string`

---

##### `byCreatedAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRestoreJobsInput.property.byCreatedAfter"></a>

- *Type:* `string`

---

##### `byCreatedBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRestoreJobsInput.property.byCreatedBefore"></a>

- *Type:* `string`

---

##### `byStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRestoreJobsInput.property.byStatus"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRestoreJobsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRestoreJobsInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListRestoreJobsOutput <a name="aws-cdk-sdk.backup.BackupListRestoreJobsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListRestoreJobsOutput: backup.BackupListRestoreJobsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRestoreJobsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `restoreJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListRestoreJobsOutput.property.restoreJobs"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRestoreJobsListMember`](#aws-cdk-sdk.backup.BackupRestoreJobsListMember)[]

---

### BackupListTagsInput <a name="aws-cdk-sdk.backup.BackupListTagsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListTagsInput: backup.BackupListTagsInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupListTagsInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListTagsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListTagsInput.property.nextToken"></a>

- *Type:* `string`

---

### BackupListTagsOutput <a name="aws-cdk-sdk.backup.BackupListTagsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupListTagsOutput: backup.BackupListTagsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListTagsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupListTagsOutput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BackupProtectedResource <a name="aws-cdk-sdk.backup.BackupProtectedResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupProtectedResource: backup.BackupProtectedResource = { ... }
```

##### `lastBackupTime`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupProtectedResource.property.lastBackupTime"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupProtectedResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupProtectedResource.property.resourceType"></a>

- *Type:* `string`

---

### BackupPutBackupVaultAccessPolicyInput <a name="aws-cdk-sdk.backup.BackupPutBackupVaultAccessPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupPutBackupVaultAccessPolicyInput: backup.BackupPutBackupVaultAccessPolicyInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupPutBackupVaultAccessPolicyInput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupPutBackupVaultAccessPolicyInput.property.policy"></a>

- *Type:* `string`

---

### BackupPutBackupVaultNotificationsInput <a name="aws-cdk-sdk.backup.BackupPutBackupVaultNotificationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupPutBackupVaultNotificationsInput: backup.BackupPutBackupVaultNotificationsInput = { ... }
```

##### `backupVaultEvents`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupPutBackupVaultNotificationsInput.property.backupVaultEvents"></a>

- *Type:* `string`[]

---

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupPutBackupVaultNotificationsInput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupPutBackupVaultNotificationsInput.property.snsTopicArn"></a>

- *Type:* `string`

---

### BackupRecoveryPointByBackupVault <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupRecoveryPointByBackupVault: backup.BackupRecoveryPointByBackupVault = { ... }
```

##### `backupSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.backupVaultName"></a>

- *Type:* `string`

---

##### `calculatedLifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.calculatedLifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCalculatedLifecycle`](#aws-cdk-sdk.backup.BackupCalculatedLifecycle)

---

##### `completionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.completionDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRecoveryPointCreator`](#aws-cdk-sdk.backup.BackupRecoveryPointCreator)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.creationDate"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `isEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.isEncrypted"></a>

- *Type:* `boolean`

---

##### `lastRestoreTime`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.lastRestoreTime"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupLifecycle`](#aws-cdk-sdk.backup.BackupLifecycle)

---

##### `recoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.resourceType"></a>

- *Type:* `string`

---

##### `sourceBackupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.sourceBackupVaultArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault.property.status"></a>

- *Type:* `string`

---

### BackupRecoveryPointByResource <a name="aws-cdk-sdk.backup.BackupRecoveryPointByResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupRecoveryPointByResource: backup.BackupRecoveryPointByResource = { ... }
```

##### `backupSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByResource.property.backupSizeBytes"></a>

- *Type:* `number`

---

##### `backupVaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByResource.property.backupVaultName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByResource.property.creationDate"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByResource.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByResource.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointByResource.property.status"></a>

- *Type:* `string`

---

### BackupRecoveryPointCreator <a name="aws-cdk-sdk.backup.BackupRecoveryPointCreator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupRecoveryPointCreator: backup.BackupRecoveryPointCreator = { ... }
```

##### `backupPlanArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointCreator.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointCreator.property.backupPlanId"></a>

- *Type:* `string`

---

##### `backupPlanVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointCreator.property.backupPlanVersion"></a>

- *Type:* `string`

---

##### `backupRuleId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRecoveryPointCreator.property.backupRuleId"></a>

- *Type:* `string`

---

### BackupRestoreJobsListMember <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupRestoreJobsListMember: backup.BackupRestoreJobsListMember = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.accountId"></a>

- *Type:* `string`

---

##### `backupSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `completionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.completionDate"></a>

- *Type:* `string`

---

##### `createdResourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.createdResourceArn"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.creationDate"></a>

- *Type:* `string`

---

##### `expectedCompletionTimeMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.expectedCompletionTimeMinutes"></a>

- *Type:* `number`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `percentDone`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.percentDone"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.resourceType"></a>

- *Type:* `string`

---

##### `restoreJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.restoreJobId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupRestoreJobsListMember.property.statusMessage"></a>

- *Type:* `string`

---

### BackupStartBackupJobInput <a name="aws-cdk-sdk.backup.BackupStartBackupJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupStartBackupJobInput: backup.BackupStartBackupJobInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobInput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobInput.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `backupOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobInput.property.backupOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `completeWindowMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobInput.property.completeWindowMinutes"></a>

- *Type:* `number`

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobInput.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupLifecycle`](#aws-cdk-sdk.backup.BackupLifecycle)

---

##### `recoveryPointTags`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobInput.property.recoveryPointTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `startWindowMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobInput.property.startWindowMinutes"></a>

- *Type:* `number`

---

### BackupStartBackupJobOutput <a name="aws-cdk-sdk.backup.BackupStartBackupJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupStartBackupJobOutput: backup.BackupStartBackupJobOutput = { ... }
```

##### `backupJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobOutput.property.backupJobId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartBackupJobOutput.property.recoveryPointArn"></a>

- *Type:* `string`

---

### BackupStartCopyJobInput <a name="aws-cdk-sdk.backup.BackupStartCopyJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupStartCopyJobInput: backup.BackupStartCopyJobInput = { ... }
```

##### `destinationBackupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStartCopyJobInput.property.destinationBackupVaultArn"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStartCopyJobInput.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStartCopyJobInput.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `sourceBackupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStartCopyJobInput.property.sourceBackupVaultName"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartCopyJobInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartCopyJobInput.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupLifecycle`](#aws-cdk-sdk.backup.BackupLifecycle)

---

### BackupStartCopyJobOutput <a name="aws-cdk-sdk.backup.BackupStartCopyJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupStartCopyJobOutput: backup.BackupStartCopyJobOutput = { ... }
```

##### `copyJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartCopyJobOutput.property.copyJobId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartCopyJobOutput.property.creationDate"></a>

- *Type:* `string`

---

### BackupStartRestoreJobInput <a name="aws-cdk-sdk.backup.BackupStartRestoreJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupStartRestoreJobInput: backup.BackupStartRestoreJobInput = { ... }
```

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStartRestoreJobInput.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStartRestoreJobInput.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStartRestoreJobInput.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartRestoreJobInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartRestoreJobInput.property.resourceType"></a>

- *Type:* `string`

---

### BackupStartRestoreJobOutput <a name="aws-cdk-sdk.backup.BackupStartRestoreJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupStartRestoreJobOutput: backup.BackupStartRestoreJobOutput = { ... }
```

##### `restoreJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupStartRestoreJobOutput.property.restoreJobId"></a>

- *Type:* `string`

---

### BackupStopBackupJobInput <a name="aws-cdk-sdk.backup.BackupStopBackupJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupStopBackupJobInput: backup.BackupStopBackupJobInput = { ... }
```

##### `backupJobId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupStopBackupJobInput.property.backupJobId"></a>

- *Type:* `string`

---

### BackupTagResourceInput <a name="aws-cdk-sdk.backup.BackupTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupTagResourceInput: backup.BackupTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupTagResourceInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BackupUntagResourceInput <a name="aws-cdk-sdk.backup.BackupUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupUntagResourceInput: backup.BackupUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeyList`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupUntagResourceInput.property.tagKeyList"></a>

- *Type:* `string`[]

---

### BackupUpdateBackupPlanInput <a name="aws-cdk-sdk.backup.BackupUpdateBackupPlanInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupUpdateBackupPlanInput: backup.BackupUpdateBackupPlanInput = { ... }
```

##### `backupPlan`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupUpdateBackupPlanInput.property.backupPlan"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlanInput`](#aws-cdk-sdk.backup.BackupBackupPlanInput)

---

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupUpdateBackupPlanInput.property.backupPlanId"></a>

- *Type:* `string`

---

### BackupUpdateBackupPlanOutput <a name="aws-cdk-sdk.backup.BackupUpdateBackupPlanOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupUpdateBackupPlanOutput: backup.BackupUpdateBackupPlanOutput = { ... }
```

##### `advancedBackupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateBackupPlanOutput.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

##### `backupPlanArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateBackupPlanOutput.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateBackupPlanOutput.property.backupPlanId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateBackupPlanOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateBackupPlanOutput.property.versionId"></a>

- *Type:* `string`

---

### BackupUpdateGlobalSettingsInput <a name="aws-cdk-sdk.backup.BackupUpdateGlobalSettingsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupUpdateGlobalSettingsInput: backup.BackupUpdateGlobalSettingsInput = { ... }
```

##### `globalSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateGlobalSettingsInput.property.globalSettings"></a>

- *Type:* {[ key: string ]: `string`}

---

### BackupUpdateRecoveryPointLifecycleInput <a name="aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupUpdateRecoveryPointLifecycleInput: backup.BackupUpdateRecoveryPointLifecycleInput = { ... }
```

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput.property.backupVaultName"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupLifecycle`](#aws-cdk-sdk.backup.BackupLifecycle)

---

### BackupUpdateRecoveryPointLifecycleOutput <a name="aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupUpdateRecoveryPointLifecycleOutput: backup.BackupUpdateRecoveryPointLifecycleOutput = { ... }
```

##### `backupVaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleOutput.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `calculatedLifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleOutput.property.calculatedLifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCalculatedLifecycle`](#aws-cdk-sdk.backup.BackupCalculatedLifecycle)

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleOutput.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupLifecycle`](#aws-cdk-sdk.backup.BackupLifecycle)

---

##### `recoveryPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleOutput.property.recoveryPointArn"></a>

- *Type:* `string`

---

### BackupUpdateRegionSettingsInput <a name="aws-cdk-sdk.backup.BackupUpdateRegionSettingsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

const backupUpdateRegionSettingsInput: backup.BackupUpdateRegionSettingsInput = { ... }
```

##### `resourceTypeOptInPreference`<sup>Optional</sup> <a name="aws-cdk-sdk.backup.BackupUpdateRegionSettingsInput.property.resourceTypeOptInPreference"></a>

- *Type:* {[ key: string ]: `boolean`}

---

## Classes <a name="Classes"></a>

### BackupResponsesCreateBackupPlan <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupPlan"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupPlan.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesCreateBackupPlan(__scope: Construct, __resources: string[], __input: BackupCreateBackupPlanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCreateBackupPlanInput`](#aws-cdk-sdk.backup.BackupCreateBackupPlanInput)

---



#### Properties <a name="Properties"></a>

##### `advancedBackupSettings`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupPlan.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

##### `backupPlanArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupPlan.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupPlan.property.backupPlanId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupPlan.property.creationDate"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupPlan.property.versionId"></a>

- *Type:* `string`

---


### BackupResponsesCreateBackupSelection <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupSelection"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupSelection.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesCreateBackupSelection(__scope: Construct, __resources: string[], __input: BackupCreateBackupSelectionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCreateBackupSelectionInput`](#aws-cdk-sdk.backup.BackupCreateBackupSelectionInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupSelection.property.backupPlanId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupSelection.property.creationDate"></a>

- *Type:* `string`

---

##### `selectionId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupSelection.property.selectionId"></a>

- *Type:* `string`

---


### BackupResponsesCreateBackupVault <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupVault"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupVault.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesCreateBackupVault(__scope: Construct, __resources: string[], __input: BackupCreateBackupVaultInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupVault.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupVault.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupVault.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCreateBackupVaultInput`](#aws-cdk-sdk.backup.BackupCreateBackupVaultInput)

---



#### Properties <a name="Properties"></a>

##### `backupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupVault.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupVault.property.backupVaultName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesCreateBackupVault.property.creationDate"></a>

- *Type:* `string`

---


### BackupResponsesDeleteBackupPlan <a name="aws-cdk-sdk.backup.BackupResponsesDeleteBackupPlan"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDeleteBackupPlan.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDeleteBackupPlan(__scope: Construct, __resources: string[], __input: BackupDeleteBackupPlanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDeleteBackupPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDeleteBackupPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDeleteBackupPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDeleteBackupPlanInput`](#aws-cdk-sdk.backup.BackupDeleteBackupPlanInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlanArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDeleteBackupPlan.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDeleteBackupPlan.property.backupPlanId"></a>

- *Type:* `string`

---

##### `deletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDeleteBackupPlan.property.deletionDate"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDeleteBackupPlan.property.versionId"></a>

- *Type:* `string`

---


### BackupResponsesDescribeBackupJob <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeBackupJob(__scope: Construct, __resources: string[], __input: BackupDescribeBackupJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeBackupJobInput`](#aws-cdk-sdk.backup.BackupDescribeBackupJobInput)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.accountId"></a>

- *Type:* `string`

---

##### `backupJobId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.backupJobId"></a>

- *Type:* `string`

---

##### `backupOptions`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.backupOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `backupSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `backupType`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.backupType"></a>

- *Type:* `string`

---

##### `backupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.backupVaultName"></a>

- *Type:* `string`

---

##### `bytesTransferred`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.bytesTransferred"></a>

- *Type:* `number`

---

##### `completionDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.completionDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy`](#aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy)

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.creationDate"></a>

- *Type:* `string`

---

##### `expectedCompletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.expectedCompletionDate"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `percentDone`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.percentDone"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.resourceType"></a>

- *Type:* `string`

---

##### `startBy`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.startBy"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.state"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJob.property.statusMessage"></a>

- *Type:* `string`

---


### BackupResponsesDescribeBackupJobCreatedBy <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeBackupJobCreatedBy(__scope: Construct, __resources: string[], __input: BackupDescribeBackupJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeBackupJobInput`](#aws-cdk-sdk.backup.BackupDescribeBackupJobInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlanArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy.property.backupPlanId"></a>

- *Type:* `string`

---

##### `backupPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy.property.backupPlanVersion"></a>

- *Type:* `string`

---

##### `backupRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupJobCreatedBy.property.backupRuleId"></a>

- *Type:* `string`

---


### BackupResponsesDescribeBackupVault <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeBackupVault(__scope: Construct, __resources: string[], __input: BackupDescribeBackupVaultInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeBackupVaultInput`](#aws-cdk-sdk.backup.BackupDescribeBackupVaultInput)

---



#### Properties <a name="Properties"></a>

##### `backupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault.property.backupVaultName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault.property.creationDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `numberOfRecoveryPoints`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeBackupVault.property.numberOfRecoveryPoints"></a>

- *Type:* `number`

---


### BackupResponsesDescribeCopyJob <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJob"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJob.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeCopyJob(__scope: Construct, __resources: string[], __input: BackupDescribeCopyJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeCopyJobInput`](#aws-cdk-sdk.backup.BackupDescribeCopyJobInput)

---



#### Properties <a name="Properties"></a>

##### `copyJob`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJob.property.copyJob"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob`](#aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob)

---


### BackupResponsesDescribeCopyJobCopyJob <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeCopyJobCopyJob(__scope: Construct, __resources: string[], __input: BackupDescribeCopyJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeCopyJobInput`](#aws-cdk-sdk.backup.BackupDescribeCopyJobInput)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.accountId"></a>

- *Type:* `string`

---

##### `backupSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `completionDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.completionDate"></a>

- *Type:* `string`

---

##### `copyJobId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.copyJobId"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy`](#aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy)

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.creationDate"></a>

- *Type:* `string`

---

##### `destinationBackupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.destinationBackupVaultArn"></a>

- *Type:* `string`

---

##### `destinationRecoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.destinationRecoveryPointArn"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.resourceType"></a>

- *Type:* `string`

---

##### `sourceBackupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.sourceBackupVaultArn"></a>

- *Type:* `string`

---

##### `sourceRecoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.sourceRecoveryPointArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.state"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJob.property.statusMessage"></a>

- *Type:* `string`

---


### BackupResponsesDescribeCopyJobCopyJobCreatedBy <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy(__scope: Construct, __resources: string[], __input: BackupDescribeCopyJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeCopyJobInput`](#aws-cdk-sdk.backup.BackupDescribeCopyJobInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlanArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy.property.backupPlanId"></a>

- *Type:* `string`

---

##### `backupPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy.property.backupPlanVersion"></a>

- *Type:* `string`

---

##### `backupRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeCopyJobCopyJobCreatedBy.property.backupRuleId"></a>

- *Type:* `string`

---


### BackupResponsesDescribeGlobalSettings <a name="aws-cdk-sdk.backup.BackupResponsesDescribeGlobalSettings"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeGlobalSettings.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeGlobalSettings(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeGlobalSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeGlobalSettings.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `globalSettings`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeGlobalSettings.property.globalSettings"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeGlobalSettings.property.lastUpdateTime"></a>

- *Type:* `string`

---


### BackupResponsesDescribeProtectedResource <a name="aws-cdk-sdk.backup.BackupResponsesDescribeProtectedResource"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeProtectedResource.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeProtectedResource(__scope: Construct, __resources: string[], __input: BackupDescribeProtectedResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeProtectedResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeProtectedResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeProtectedResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeProtectedResourceInput`](#aws-cdk-sdk.backup.BackupDescribeProtectedResourceInput)

---



#### Properties <a name="Properties"></a>

##### `lastBackupTime`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeProtectedResource.property.lastBackupTime"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeProtectedResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeProtectedResource.property.resourceType"></a>

- *Type:* `string`

---


### BackupResponsesDescribeRecoveryPoint <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeRecoveryPoint(__scope: Construct, __resources: string[], __input: BackupDescribeRecoveryPointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput`](#aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput)

---



#### Properties <a name="Properties"></a>

##### `backupSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `backupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.backupVaultName"></a>

- *Type:* `string`

---

##### `calculatedLifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.calculatedLifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCalculatedLifecycle`](#aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCalculatedLifecycle)

---

##### `completionDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.completionDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.createdBy"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy`](#aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy)

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.creationDate"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `isEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.isEncrypted"></a>

- *Type:* `boolean`

---

##### `lastRestoreTime`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.lastRestoreTime"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointLifecycle`](#aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointLifecycle)

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.resourceType"></a>

- *Type:* `string`

---

##### `sourceBackupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.sourceBackupVaultArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.status"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPoint.property.storageClass"></a>

- *Type:* `string`

---


### BackupResponsesDescribeRecoveryPointCalculatedLifecycle <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCalculatedLifecycle"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCalculatedLifecycle.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeRecoveryPointCalculatedLifecycle(__scope: Construct, __resources: string[], __input: BackupDescribeRecoveryPointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCalculatedLifecycle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCalculatedLifecycle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCalculatedLifecycle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput`](#aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput)

---



#### Properties <a name="Properties"></a>

##### `deleteAt`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCalculatedLifecycle.property.deleteAt"></a>

- *Type:* `string`

---

##### `moveToColdStorageAt`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCalculatedLifecycle.property.moveToColdStorageAt"></a>

- *Type:* `string`

---


### BackupResponsesDescribeRecoveryPointCreatedBy <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeRecoveryPointCreatedBy(__scope: Construct, __resources: string[], __input: BackupDescribeRecoveryPointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput`](#aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlanArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy.property.backupPlanId"></a>

- *Type:* `string`

---

##### `backupPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy.property.backupPlanVersion"></a>

- *Type:* `string`

---

##### `backupRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointCreatedBy.property.backupRuleId"></a>

- *Type:* `string`

---


### BackupResponsesDescribeRecoveryPointLifecycle <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointLifecycle"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointLifecycle.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeRecoveryPointLifecycle(__scope: Construct, __resources: string[], __input: BackupDescribeRecoveryPointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointLifecycle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointLifecycle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointLifecycle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput`](#aws-cdk-sdk.backup.BackupDescribeRecoveryPointInput)

---



#### Properties <a name="Properties"></a>

##### `deleteAfterDays`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointLifecycle.property.deleteAfterDays"></a>

- *Type:* `number`

---

##### `moveToColdStorageAfterDays`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRecoveryPointLifecycle.property.moveToColdStorageAfterDays"></a>

- *Type:* `number`

---


### BackupResponsesDescribeRegionSettings <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRegionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRegionSettings.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeRegionSettings(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRegionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRegionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `resourceTypeOptInPreference`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRegionSettings.property.resourceTypeOptInPreference"></a>

- *Type:* {[ key: string ]: `boolean`}

---


### BackupResponsesDescribeRestoreJob <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesDescribeRestoreJob(__scope: Construct, __resources: string[], __input: BackupDescribeRestoreJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupDescribeRestoreJobInput`](#aws-cdk-sdk.backup.BackupDescribeRestoreJobInput)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.accountId"></a>

- *Type:* `string`

---

##### `backupSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.backupSizeInBytes"></a>

- *Type:* `number`

---

##### `completionDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.completionDate"></a>

- *Type:* `string`

---

##### `createdResourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.createdResourceArn"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.creationDate"></a>

- *Type:* `string`

---

##### `expectedCompletionTimeMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.expectedCompletionTimeMinutes"></a>

- *Type:* `number`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `percentDone`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.percentDone"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.resourceType"></a>

- *Type:* `string`

---

##### `restoreJobId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.restoreJobId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesDescribeRestoreJob.property.statusMessage"></a>

- *Type:* `string`

---


### BackupResponsesExportBackupPlanTemplate <a name="aws-cdk-sdk.backup.BackupResponsesExportBackupPlanTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesExportBackupPlanTemplate.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesExportBackupPlanTemplate(__scope: Construct, __resources: string[], __input: BackupExportBackupPlanTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesExportBackupPlanTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesExportBackupPlanTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesExportBackupPlanTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupExportBackupPlanTemplateInput`](#aws-cdk-sdk.backup.BackupExportBackupPlanTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlanTemplateJson`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesExportBackupPlanTemplate.property.backupPlanTemplateJson"></a>

- *Type:* `string`

---


### BackupResponsesFetchBackupPlan <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchBackupPlan(__scope: Construct, __resources: string[], __input: BackupGetBackupPlanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupPlanInput`](#aws-cdk-sdk.backup.BackupGetBackupPlanInput)

---



#### Properties <a name="Properties"></a>

##### `advancedBackupSettings`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

##### `backupPlan`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.property.backupPlan"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanBackupPlan`](#aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanBackupPlan)

---

##### `backupPlanArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.property.backupPlanId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.property.creationDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `deletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.property.deletionDate"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlan.property.versionId"></a>

- *Type:* `string`

---


### BackupResponsesFetchBackupPlanBackupPlan <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanBackupPlan"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanBackupPlan.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchBackupPlanBackupPlan(__scope: Construct, __resources: string[], __input: BackupGetBackupPlanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanBackupPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanBackupPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanBackupPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupPlanInput`](#aws-cdk-sdk.backup.BackupGetBackupPlanInput)

---



#### Properties <a name="Properties"></a>

##### `advancedBackupSettings`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanBackupPlan.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

##### `backupPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanBackupPlan.property.backupPlanName"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanBackupPlan.property.rules"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupRule`](#aws-cdk-sdk.backup.BackupBackupRule)[]

---


### BackupResponsesFetchBackupPlanFromJson <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJson"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJson.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchBackupPlanFromJson(__scope: Construct, __resources: string[], __input: BackupGetBackupPlanFromJsonInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJson.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJson.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJson.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupPlanFromJsonInput`](#aws-cdk-sdk.backup.BackupGetBackupPlanFromJsonInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlan`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJson.property.backupPlan"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan`](#aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan)

---


### BackupResponsesFetchBackupPlanFromJsonBackupPlan <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan(__scope: Construct, __resources: string[], __input: BackupGetBackupPlanFromJsonInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupPlanFromJsonInput`](#aws-cdk-sdk.backup.BackupGetBackupPlanFromJsonInput)

---



#### Properties <a name="Properties"></a>

##### `advancedBackupSettings`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

##### `backupPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan.property.backupPlanName"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromJsonBackupPlan.property.rules"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupRule`](#aws-cdk-sdk.backup.BackupBackupRule)[]

---


### BackupResponsesFetchBackupPlanFromTemplate <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplate.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchBackupPlanFromTemplate(__scope: Construct, __resources: string[], __input: BackupGetBackupPlanFromTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupPlanFromTemplateInput`](#aws-cdk-sdk.backup.BackupGetBackupPlanFromTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlanDocument`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplate.property.backupPlanDocument"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument`](#aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument)

---


### BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument(__scope: Construct, __resources: string[], __input: BackupGetBackupPlanFromTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupPlanFromTemplateInput`](#aws-cdk-sdk.backup.BackupGetBackupPlanFromTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `advancedBackupSettings`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

##### `backupPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument.property.backupPlanName"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument.property.rules"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupRule`](#aws-cdk-sdk.backup.BackupBackupRule)[]

---


### BackupResponsesFetchBackupSelection <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelection"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelection.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchBackupSelection(__scope: Construct, __resources: string[], __input: BackupGetBackupSelectionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupSelectionInput`](#aws-cdk-sdk.backup.BackupGetBackupSelectionInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelection.property.backupPlanId"></a>

- *Type:* `string`

---

##### `backupSelection`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelection.property.backupSelection"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection`](#aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection)

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelection.property.creationDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelection.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `selectionId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelection.property.selectionId"></a>

- *Type:* `string`

---


### BackupResponsesFetchBackupSelectionBackupSelection <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchBackupSelectionBackupSelection(__scope: Construct, __resources: string[], __input: BackupGetBackupSelectionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupSelectionInput`](#aws-cdk-sdk.backup.BackupGetBackupSelectionInput)

---



#### Properties <a name="Properties"></a>

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `listOfTags`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection.property.listOfTags"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCondition`](#aws-cdk-sdk.backup.BackupCondition)[]

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection.property.resources"></a>

- *Type:* `string`[]

---

##### `selectionName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupSelectionBackupSelection.property.selectionName"></a>

- *Type:* `string`

---


### BackupResponsesFetchBackupVaultAccessPolicy <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultAccessPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultAccessPolicy.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchBackupVaultAccessPolicy(__scope: Construct, __resources: string[], __input: BackupGetBackupVaultAccessPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultAccessPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultAccessPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultAccessPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupVaultAccessPolicyInput`](#aws-cdk-sdk.backup.BackupGetBackupVaultAccessPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `backupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultAccessPolicy.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultAccessPolicy.property.backupVaultName"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultAccessPolicy.property.policy"></a>

- *Type:* `string`

---


### BackupResponsesFetchBackupVaultNotifications <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultNotifications"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultNotifications.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchBackupVaultNotifications(__scope: Construct, __resources: string[], __input: BackupGetBackupVaultNotificationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultNotifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultNotifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultNotifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsInput`](#aws-cdk-sdk.backup.BackupGetBackupVaultNotificationsInput)

---



#### Properties <a name="Properties"></a>

##### `backupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultNotifications.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `backupVaultEvents`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultNotifications.property.backupVaultEvents"></a>

- *Type:* `string`[]

---

##### `backupVaultName`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultNotifications.property.backupVaultName"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchBackupVaultNotifications.property.snsTopicArn"></a>

- *Type:* `string`

---


### BackupResponsesFetchRecoveryPointRestoreMetadata <a name="aws-cdk-sdk.backup.BackupResponsesFetchRecoveryPointRestoreMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchRecoveryPointRestoreMetadata.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchRecoveryPointRestoreMetadata(__scope: Construct, __resources: string[], __input: BackupGetRecoveryPointRestoreMetadataInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchRecoveryPointRestoreMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchRecoveryPointRestoreMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchRecoveryPointRestoreMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataInput`](#aws-cdk-sdk.backup.BackupGetRecoveryPointRestoreMetadataInput)

---



#### Properties <a name="Properties"></a>

##### `backupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchRecoveryPointRestoreMetadata.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchRecoveryPointRestoreMetadata.property.recoveryPointArn"></a>

- *Type:* `string`

---

##### `restoreMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchRecoveryPointRestoreMetadata.property.restoreMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---


### BackupResponsesFetchSupportedResourceTypes <a name="aws-cdk-sdk.backup.BackupResponsesFetchSupportedResourceTypes"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesFetchSupportedResourceTypes.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesFetchSupportedResourceTypes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchSupportedResourceTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchSupportedResourceTypes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `resourceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesFetchSupportedResourceTypes.property.resourceTypes"></a>

- *Type:* `string`[]

---


### BackupResponsesListBackupJobs <a name="aws-cdk-sdk.backup.BackupResponsesListBackupJobs"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListBackupJobs.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListBackupJobs(__scope: Construct, __resources: string[], __input: BackupListBackupJobsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupJobsInput`](#aws-cdk-sdk.backup.BackupListBackupJobsInput)

---



#### Properties <a name="Properties"></a>

##### `backupJobs`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupJobs.property.backupJobs"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupJob`](#aws-cdk-sdk.backup.BackupBackupJob)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupJobs.property.nextToken"></a>

- *Type:* `string`

---


### BackupResponsesListBackupPlans <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlans"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlans.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListBackupPlans(__scope: Construct, __resources: string[], __input: BackupListBackupPlansInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlans.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlans.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlans.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupPlansInput`](#aws-cdk-sdk.backup.BackupListBackupPlansInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlansList`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlans.property.backupPlansList"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlansListMember`](#aws-cdk-sdk.backup.BackupBackupPlansListMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlans.property.nextToken"></a>

- *Type:* `string`

---


### BackupResponsesListBackupPlanTemplates <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanTemplates.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListBackupPlanTemplates(__scope: Construct, __resources: string[], __input: BackupListBackupPlanTemplatesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupPlanTemplatesInput`](#aws-cdk-sdk.backup.BackupListBackupPlanTemplatesInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlanTemplatesList`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanTemplates.property.backupPlanTemplatesList"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlanTemplatesListMember`](#aws-cdk-sdk.backup.BackupBackupPlanTemplatesListMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanTemplates.property.nextToken"></a>

- *Type:* `string`

---


### BackupResponsesListBackupPlanVersions <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanVersions"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanVersions.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListBackupPlanVersions(__scope: Construct, __resources: string[], __input: BackupListBackupPlanVersionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupPlanVersionsInput`](#aws-cdk-sdk.backup.BackupListBackupPlanVersionsInput)

---



#### Properties <a name="Properties"></a>

##### `backupPlanVersionsList`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanVersions.property.backupPlanVersionsList"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupPlansListMember`](#aws-cdk-sdk.backup.BackupBackupPlansListMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupPlanVersions.property.nextToken"></a>

- *Type:* `string`

---


### BackupResponsesListBackupSelections <a name="aws-cdk-sdk.backup.BackupResponsesListBackupSelections"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListBackupSelections.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListBackupSelections(__scope: Construct, __resources: string[], __input: BackupListBackupSelectionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupSelections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupSelections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupSelections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupSelectionsInput`](#aws-cdk-sdk.backup.BackupListBackupSelectionsInput)

---



#### Properties <a name="Properties"></a>

##### `backupSelectionsList`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupSelections.property.backupSelectionsList"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupSelectionsListMember`](#aws-cdk-sdk.backup.BackupBackupSelectionsListMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupSelections.property.nextToken"></a>

- *Type:* `string`

---


### BackupResponsesListBackupVaults <a name="aws-cdk-sdk.backup.BackupResponsesListBackupVaults"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListBackupVaults.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListBackupVaults(__scope: Construct, __resources: string[], __input: BackupListBackupVaultsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupVaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupVaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupVaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListBackupVaultsInput`](#aws-cdk-sdk.backup.BackupListBackupVaultsInput)

---



#### Properties <a name="Properties"></a>

##### `backupVaultList`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupVaults.property.backupVaultList"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupBackupVaultListMember`](#aws-cdk-sdk.backup.BackupBackupVaultListMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListBackupVaults.property.nextToken"></a>

- *Type:* `string`

---


### BackupResponsesListCopyJobs <a name="aws-cdk-sdk.backup.BackupResponsesListCopyJobs"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListCopyJobs.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListCopyJobs(__scope: Construct, __resources: string[], __input: BackupListCopyJobsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListCopyJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListCopyJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListCopyJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListCopyJobsInput`](#aws-cdk-sdk.backup.BackupListCopyJobsInput)

---



#### Properties <a name="Properties"></a>

##### `copyJobs`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListCopyJobs.property.copyJobs"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupCopyJob`](#aws-cdk-sdk.backup.BackupCopyJob)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListCopyJobs.property.nextToken"></a>

- *Type:* `string`

---


### BackupResponsesListProtectedResources <a name="aws-cdk-sdk.backup.BackupResponsesListProtectedResources"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListProtectedResources.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListProtectedResources(__scope: Construct, __resources: string[], __input: BackupListProtectedResourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListProtectedResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListProtectedResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListProtectedResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListProtectedResourcesInput`](#aws-cdk-sdk.backup.BackupListProtectedResourcesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListProtectedResources.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListProtectedResources.property.results"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupProtectedResource`](#aws-cdk-sdk.backup.BackupProtectedResource)[]

---


### BackupResponsesListRecoveryPointsByBackupVault <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByBackupVault"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByBackupVault.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListRecoveryPointsByBackupVault(__scope: Construct, __resources: string[], __input: BackupListRecoveryPointsByBackupVaultInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByBackupVault.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByBackupVault.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByBackupVault.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput`](#aws-cdk-sdk.backup.BackupListRecoveryPointsByBackupVaultInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByBackupVault.property.nextToken"></a>

- *Type:* `string`

---

##### `recoveryPoints`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByBackupVault.property.recoveryPoints"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault`](#aws-cdk-sdk.backup.BackupRecoveryPointByBackupVault)[]

---


### BackupResponsesListRecoveryPointsByResource <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByResource"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByResource.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListRecoveryPointsByResource(__scope: Construct, __resources: string[], __input: BackupListRecoveryPointsByResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceInput`](#aws-cdk-sdk.backup.BackupListRecoveryPointsByResourceInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByResource.property.nextToken"></a>

- *Type:* `string`

---

##### `recoveryPoints`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRecoveryPointsByResource.property.recoveryPoints"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRecoveryPointByResource`](#aws-cdk-sdk.backup.BackupRecoveryPointByResource)[]

---


### BackupResponsesListRestoreJobs <a name="aws-cdk-sdk.backup.BackupResponsesListRestoreJobs"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListRestoreJobs.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListRestoreJobs(__scope: Construct, __resources: string[], __input: BackupListRestoreJobsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRestoreJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRestoreJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRestoreJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListRestoreJobsInput`](#aws-cdk-sdk.backup.BackupListRestoreJobsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRestoreJobs.property.nextToken"></a>

- *Type:* `string`

---

##### `restoreJobs`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListRestoreJobs.property.restoreJobs"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupRestoreJobsListMember`](#aws-cdk-sdk.backup.BackupRestoreJobsListMember)[]

---


### BackupResponsesListTags <a name="aws-cdk-sdk.backup.BackupResponsesListTags"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesListTags.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesListTags(__scope: Construct, __resources: string[], __input: BackupListTagsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupListTagsInput`](#aws-cdk-sdk.backup.BackupListTagsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListTags.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesListTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### BackupResponsesStartBackupJob <a name="aws-cdk-sdk.backup.BackupResponsesStartBackupJob"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesStartBackupJob.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesStartBackupJob(__scope: Construct, __resources: string[], __input: BackupStartBackupJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartBackupJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartBackupJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartBackupJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupStartBackupJobInput`](#aws-cdk-sdk.backup.BackupStartBackupJobInput)

---



#### Properties <a name="Properties"></a>

##### `backupJobId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartBackupJob.property.backupJobId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartBackupJob.property.creationDate"></a>

- *Type:* `string`

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartBackupJob.property.recoveryPointArn"></a>

- *Type:* `string`

---


### BackupResponsesStartCopyJob <a name="aws-cdk-sdk.backup.BackupResponsesStartCopyJob"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesStartCopyJob.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesStartCopyJob(__scope: Construct, __resources: string[], __input: BackupStartCopyJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartCopyJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartCopyJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartCopyJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupStartCopyJobInput`](#aws-cdk-sdk.backup.BackupStartCopyJobInput)

---



#### Properties <a name="Properties"></a>

##### `copyJobId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartCopyJob.property.copyJobId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartCopyJob.property.creationDate"></a>

- *Type:* `string`

---


### BackupResponsesStartRestoreJob <a name="aws-cdk-sdk.backup.BackupResponsesStartRestoreJob"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesStartRestoreJob.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesStartRestoreJob(__scope: Construct, __resources: string[], __input: BackupStartRestoreJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartRestoreJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartRestoreJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartRestoreJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupStartRestoreJobInput`](#aws-cdk-sdk.backup.BackupStartRestoreJobInput)

---



#### Properties <a name="Properties"></a>

##### `restoreJobId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesStartRestoreJob.property.restoreJobId"></a>

- *Type:* `string`

---


### BackupResponsesUpdateBackupPlan <a name="aws-cdk-sdk.backup.BackupResponsesUpdateBackupPlan"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesUpdateBackupPlan.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesUpdateBackupPlan(__scope: Construct, __resources: string[], __input: BackupUpdateBackupPlanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateBackupPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateBackupPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateBackupPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupUpdateBackupPlanInput`](#aws-cdk-sdk.backup.BackupUpdateBackupPlanInput)

---



#### Properties <a name="Properties"></a>

##### `advancedBackupSettings`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateBackupPlan.property.advancedBackupSettings"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupAdvancedBackupSetting`](#aws-cdk-sdk.backup.BackupAdvancedBackupSetting)[]

---

##### `backupPlanArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateBackupPlan.property.backupPlanArn"></a>

- *Type:* `string`

---

##### `backupPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateBackupPlan.property.backupPlanId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateBackupPlan.property.creationDate"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateBackupPlan.property.versionId"></a>

- *Type:* `string`

---


### BackupResponsesUpdateRecoveryPointLifecycle <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycle"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycle.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesUpdateRecoveryPointLifecycle(__scope: Construct, __resources: string[], __input: BackupUpdateRecoveryPointLifecycleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput`](#aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput)

---



#### Properties <a name="Properties"></a>

##### `backupVaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycle.property.backupVaultArn"></a>

- *Type:* `string`

---

##### `calculatedLifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycle.property.calculatedLifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle`](#aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle)

---

##### `lifecycle`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycle.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleLifecycle`](#aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleLifecycle)

---

##### `recoveryPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycle.property.recoveryPointArn"></a>

- *Type:* `string`

---


### BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle(__scope: Construct, __resources: string[], __input: BackupUpdateRecoveryPointLifecycleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput`](#aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput)

---



#### Properties <a name="Properties"></a>

##### `deleteAt`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle.property.deleteAt"></a>

- *Type:* `string`

---

##### `moveToColdStorageAt`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle.property.moveToColdStorageAt"></a>

- *Type:* `string`

---


### BackupResponsesUpdateRecoveryPointLifecycleLifecycle <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleLifecycle"></a>

#### Initializer <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleLifecycle.Initializer"></a>

```typescript
import { backup } from 'aws-cdk-sdk'

new backup.BackupResponsesUpdateRecoveryPointLifecycleLifecycle(__scope: Construct, __resources: string[], __input: BackupUpdateRecoveryPointLifecycleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleLifecycle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleLifecycle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleLifecycle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput`](#aws-cdk-sdk.backup.BackupUpdateRecoveryPointLifecycleInput)

---



#### Properties <a name="Properties"></a>

##### `deleteAfterDays`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleLifecycle.property.deleteAfterDays"></a>

- *Type:* `number`

---

##### `moveToColdStorageAfterDays`<sup>Required</sup> <a name="aws-cdk-sdk.backup.BackupResponsesUpdateRecoveryPointLifecycleLifecycle.property.moveToColdStorageAfterDays"></a>

- *Type:* `number`

---



