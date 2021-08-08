# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### GlacierClient <a name="aws-cdk-sdk.glacier.GlacierClient"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierClient.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `abortMultipartUpload` <a name="aws-cdk-sdk.glacier.GlacierClient.abortMultipartUpload"></a>

```typescript
public abortMultipartUpload(input: GlacierAbortMultipartUploadInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierAbortMultipartUploadInput`](#aws-cdk-sdk.glacier.GlacierAbortMultipartUploadInput)

---

##### `abortVaultLock` <a name="aws-cdk-sdk.glacier.GlacierClient.abortVaultLock"></a>

```typescript
public abortVaultLock(input: GlacierAbortVaultLockInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierAbortVaultLockInput`](#aws-cdk-sdk.glacier.GlacierAbortVaultLockInput)

---

##### `addTagsToVault` <a name="aws-cdk-sdk.glacier.GlacierClient.addTagsToVault"></a>

```typescript
public addTagsToVault(input: GlacierAddTagsToVaultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierAddTagsToVaultInput`](#aws-cdk-sdk.glacier.GlacierAddTagsToVaultInput)

---

##### `completeMultipartUpload` <a name="aws-cdk-sdk.glacier.GlacierClient.completeMultipartUpload"></a>

```typescript
public completeMultipartUpload(input: GlacierCompleteMultipartUploadInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierCompleteMultipartUploadInput`](#aws-cdk-sdk.glacier.GlacierCompleteMultipartUploadInput)

---

##### `completeVaultLock` <a name="aws-cdk-sdk.glacier.GlacierClient.completeVaultLock"></a>

```typescript
public completeVaultLock(input: GlacierCompleteVaultLockInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierCompleteVaultLockInput`](#aws-cdk-sdk.glacier.GlacierCompleteVaultLockInput)

---

##### `createVault` <a name="aws-cdk-sdk.glacier.GlacierClient.createVault"></a>

```typescript
public createVault(input: GlacierCreateVaultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierCreateVaultInput`](#aws-cdk-sdk.glacier.GlacierCreateVaultInput)

---

##### `deleteArchive` <a name="aws-cdk-sdk.glacier.GlacierClient.deleteArchive"></a>

```typescript
public deleteArchive(input: GlacierDeleteArchiveInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDeleteArchiveInput`](#aws-cdk-sdk.glacier.GlacierDeleteArchiveInput)

---

##### `deleteVault` <a name="aws-cdk-sdk.glacier.GlacierClient.deleteVault"></a>

```typescript
public deleteVault(input: GlacierDeleteVaultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDeleteVaultInput`](#aws-cdk-sdk.glacier.GlacierDeleteVaultInput)

---

##### `deleteVaultAccessPolicy` <a name="aws-cdk-sdk.glacier.GlacierClient.deleteVaultAccessPolicy"></a>

```typescript
public deleteVaultAccessPolicy(input: GlacierDeleteVaultAccessPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDeleteVaultAccessPolicyInput`](#aws-cdk-sdk.glacier.GlacierDeleteVaultAccessPolicyInput)

---

##### `deleteVaultNotifications` <a name="aws-cdk-sdk.glacier.GlacierClient.deleteVaultNotifications"></a>

```typescript
public deleteVaultNotifications(input: GlacierDeleteVaultNotificationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDeleteVaultNotificationsInput`](#aws-cdk-sdk.glacier.GlacierDeleteVaultNotificationsInput)

---

##### `describeJob` <a name="aws-cdk-sdk.glacier.GlacierClient.describeJob"></a>

```typescript
public describeJob(input: GlacierDescribeJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---

##### `describeVault` <a name="aws-cdk-sdk.glacier.GlacierClient.describeVault"></a>

```typescript
public describeVault(input: GlacierDescribeVaultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeVaultInput`](#aws-cdk-sdk.glacier.GlacierDescribeVaultInput)

---

##### `fetchDataRetrievalPolicy` <a name="aws-cdk-sdk.glacier.GlacierClient.fetchDataRetrievalPolicy"></a>

```typescript
public fetchDataRetrievalPolicy(input: GlacierGetDataRetrievalPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetDataRetrievalPolicyInput`](#aws-cdk-sdk.glacier.GlacierGetDataRetrievalPolicyInput)

---

##### `fetchJobOutput` <a name="aws-cdk-sdk.glacier.GlacierClient.fetchJobOutput"></a>

```typescript
public fetchJobOutput(input: GlacierGetJobOutputInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetJobOutputInput`](#aws-cdk-sdk.glacier.GlacierGetJobOutputInput)

---

##### `fetchVaultAccessPolicy` <a name="aws-cdk-sdk.glacier.GlacierClient.fetchVaultAccessPolicy"></a>

```typescript
public fetchVaultAccessPolicy(input: GlacierGetVaultAccessPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyInput`](#aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyInput)

---

##### `fetchVaultLock` <a name="aws-cdk-sdk.glacier.GlacierClient.fetchVaultLock"></a>

```typescript
public fetchVaultLock(input: GlacierGetVaultLockInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetVaultLockInput`](#aws-cdk-sdk.glacier.GlacierGetVaultLockInput)

---

##### `fetchVaultNotifications` <a name="aws-cdk-sdk.glacier.GlacierClient.fetchVaultNotifications"></a>

```typescript
public fetchVaultNotifications(input: GlacierGetVaultNotificationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetVaultNotificationsInput`](#aws-cdk-sdk.glacier.GlacierGetVaultNotificationsInput)

---

##### `initiateJob` <a name="aws-cdk-sdk.glacier.GlacierClient.initiateJob"></a>

```typescript
public initiateJob(input: GlacierInitiateJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierInitiateJobInput`](#aws-cdk-sdk.glacier.GlacierInitiateJobInput)

---

##### `initiateMultipartUpload` <a name="aws-cdk-sdk.glacier.GlacierClient.initiateMultipartUpload"></a>

```typescript
public initiateMultipartUpload(input: GlacierInitiateMultipartUploadInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadInput`](#aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadInput)

---

##### `initiateVaultLock` <a name="aws-cdk-sdk.glacier.GlacierClient.initiateVaultLock"></a>

```typescript
public initiateVaultLock(input: GlacierInitiateVaultLockInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierInitiateVaultLockInput`](#aws-cdk-sdk.glacier.GlacierInitiateVaultLockInput)

---

##### `listJobs` <a name="aws-cdk-sdk.glacier.GlacierClient.listJobs"></a>

```typescript
public listJobs(input: GlacierListJobsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListJobsInput`](#aws-cdk-sdk.glacier.GlacierListJobsInput)

---

##### `listMultipartUploads` <a name="aws-cdk-sdk.glacier.GlacierClient.listMultipartUploads"></a>

```typescript
public listMultipartUploads(input: GlacierListMultipartUploadsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListMultipartUploadsInput`](#aws-cdk-sdk.glacier.GlacierListMultipartUploadsInput)

---

##### `listParts` <a name="aws-cdk-sdk.glacier.GlacierClient.listParts"></a>

```typescript
public listParts(input: GlacierListPartsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListPartsInput`](#aws-cdk-sdk.glacier.GlacierListPartsInput)

---

##### `listProvisionedCapacity` <a name="aws-cdk-sdk.glacier.GlacierClient.listProvisionedCapacity"></a>

```typescript
public listProvisionedCapacity(input: GlacierListProvisionedCapacityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListProvisionedCapacityInput`](#aws-cdk-sdk.glacier.GlacierListProvisionedCapacityInput)

---

##### `listTagsForVault` <a name="aws-cdk-sdk.glacier.GlacierClient.listTagsForVault"></a>

```typescript
public listTagsForVault(input: GlacierListTagsForVaultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListTagsForVaultInput`](#aws-cdk-sdk.glacier.GlacierListTagsForVaultInput)

---

##### `listVaults` <a name="aws-cdk-sdk.glacier.GlacierClient.listVaults"></a>

```typescript
public listVaults(input: GlacierListVaultsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListVaultsInput`](#aws-cdk-sdk.glacier.GlacierListVaultsInput)

---

##### `purchaseProvisionedCapacity` <a name="aws-cdk-sdk.glacier.GlacierClient.purchaseProvisionedCapacity"></a>

```typescript
public purchaseProvisionedCapacity(input: GlacierPurchaseProvisionedCapacityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierPurchaseProvisionedCapacityInput`](#aws-cdk-sdk.glacier.GlacierPurchaseProvisionedCapacityInput)

---

##### `putDataRetrievalPolicy` <a name="aws-cdk-sdk.glacier.GlacierClient.putDataRetrievalPolicy"></a>

```typescript
public putDataRetrievalPolicy(input: GlacierSetDataRetrievalPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierSetDataRetrievalPolicyInput`](#aws-cdk-sdk.glacier.GlacierSetDataRetrievalPolicyInput)

---

##### `putVaultAccessPolicy` <a name="aws-cdk-sdk.glacier.GlacierClient.putVaultAccessPolicy"></a>

```typescript
public putVaultAccessPolicy(input: GlacierSetVaultAccessPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierSetVaultAccessPolicyInput`](#aws-cdk-sdk.glacier.GlacierSetVaultAccessPolicyInput)

---

##### `putVaultNotifications` <a name="aws-cdk-sdk.glacier.GlacierClient.putVaultNotifications"></a>

```typescript
public putVaultNotifications(input: GlacierSetVaultNotificationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierSetVaultNotificationsInput`](#aws-cdk-sdk.glacier.GlacierSetVaultNotificationsInput)

---

##### `removeTagsFromVault` <a name="aws-cdk-sdk.glacier.GlacierClient.removeTagsFromVault"></a>

```typescript
public removeTagsFromVault(input: GlacierRemoveTagsFromVaultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierRemoveTagsFromVaultInput`](#aws-cdk-sdk.glacier.GlacierRemoveTagsFromVaultInput)

---

##### `uploadArchive` <a name="aws-cdk-sdk.glacier.GlacierClient.uploadArchive"></a>

```typescript
public uploadArchive(input: GlacierUploadArchiveInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierUploadArchiveInput`](#aws-cdk-sdk.glacier.GlacierUploadArchiveInput)

---

##### `uploadMultipartPart` <a name="aws-cdk-sdk.glacier.GlacierClient.uploadMultipartPart"></a>

```typescript
public uploadMultipartPart(input: GlacierUploadMultipartPartInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput`](#aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput)

---




## Structs <a name="Structs"></a>

### GlacierAbortMultipartUploadInput <a name="aws-cdk-sdk.glacier.GlacierAbortMultipartUploadInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierAbortMultipartUploadInput: glacier.GlacierAbortMultipartUploadInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierAbortMultipartUploadInput.property.accountId"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierAbortMultipartUploadInput.property.uploadId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierAbortMultipartUploadInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierAbortVaultLockInput <a name="aws-cdk-sdk.glacier.GlacierAbortVaultLockInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierAbortVaultLockInput: glacier.GlacierAbortVaultLockInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierAbortVaultLockInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierAbortVaultLockInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierAddTagsToVaultInput <a name="aws-cdk-sdk.glacier.GlacierAddTagsToVaultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierAddTagsToVaultInput: glacier.GlacierAddTagsToVaultInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierAddTagsToVaultInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierAddTagsToVaultInput.property.vaultName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierAddTagsToVaultInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlacierArchiveCreationOutput <a name="aws-cdk-sdk.glacier.GlacierArchiveCreationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierArchiveCreationOutput: glacier.GlacierArchiveCreationOutput = { ... }
```

##### `archiveId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierArchiveCreationOutput.property.archiveId"></a>

- *Type:* `string`

---

##### `checksum`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierArchiveCreationOutput.property.checksum"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierArchiveCreationOutput.property.location"></a>

- *Type:* `string`

---

### GlacierCompleteMultipartUploadInput <a name="aws-cdk-sdk.glacier.GlacierCompleteMultipartUploadInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierCompleteMultipartUploadInput: glacier.GlacierCompleteMultipartUploadInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierCompleteMultipartUploadInput.property.accountId"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierCompleteMultipartUploadInput.property.uploadId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierCompleteMultipartUploadInput.property.vaultName"></a>

- *Type:* `string`

---

##### `archiveSize`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCompleteMultipartUploadInput.property.archiveSize"></a>

- *Type:* `string`

---

##### `checksum`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCompleteMultipartUploadInput.property.checksum"></a>

- *Type:* `string`

---

### GlacierCompleteVaultLockInput <a name="aws-cdk-sdk.glacier.GlacierCompleteVaultLockInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierCompleteVaultLockInput: glacier.GlacierCompleteVaultLockInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierCompleteVaultLockInput.property.accountId"></a>

- *Type:* `string`

---

##### `lockId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierCompleteVaultLockInput.property.lockId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierCompleteVaultLockInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierCreateVaultInput <a name="aws-cdk-sdk.glacier.GlacierCreateVaultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierCreateVaultInput: glacier.GlacierCreateVaultInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierCreateVaultInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierCreateVaultInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierCreateVaultOutput <a name="aws-cdk-sdk.glacier.GlacierCreateVaultOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierCreateVaultOutput: glacier.GlacierCreateVaultOutput = { ... }
```

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCreateVaultOutput.property.location"></a>

- *Type:* `string`

---

### GlacierCsvInput <a name="aws-cdk-sdk.glacier.GlacierCsvInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierCsvInput: glacier.GlacierCsvInput = { ... }
```

##### `comments`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvInput.property.comments"></a>

- *Type:* `string`

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvInput.property.fieldDelimiter"></a>

- *Type:* `string`

---

##### `fileHeaderInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvInput.property.fileHeaderInfo"></a>

- *Type:* `string`

---

##### `quoteCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvInput.property.quoteCharacter"></a>

- *Type:* `string`

---

##### `quoteEscapeCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvInput.property.quoteEscapeCharacter"></a>

- *Type:* `string`

---

##### `recordDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvInput.property.recordDelimiter"></a>

- *Type:* `string`

---

### GlacierCsvOutput <a name="aws-cdk-sdk.glacier.GlacierCsvOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierCsvOutput: glacier.GlacierCsvOutput = { ... }
```

##### `fieldDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvOutput.property.fieldDelimiter"></a>

- *Type:* `string`

---

##### `quoteCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvOutput.property.quoteCharacter"></a>

- *Type:* `string`

---

##### `quoteEscapeCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvOutput.property.quoteEscapeCharacter"></a>

- *Type:* `string`

---

##### `quoteFields`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvOutput.property.quoteFields"></a>

- *Type:* `string`

---

##### `recordDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierCsvOutput.property.recordDelimiter"></a>

- *Type:* `string`

---

### GlacierDataRetrievalPolicy <a name="aws-cdk-sdk.glacier.GlacierDataRetrievalPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierDataRetrievalPolicy: glacier.GlacierDataRetrievalPolicy = { ... }
```

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierDataRetrievalPolicy.property.rules"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDataRetrievalRule`](#aws-cdk-sdk.glacier.GlacierDataRetrievalRule)[]

---

### GlacierDataRetrievalRule <a name="aws-cdk-sdk.glacier.GlacierDataRetrievalRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierDataRetrievalRule: glacier.GlacierDataRetrievalRule = { ... }
```

##### `bytesPerHour`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierDataRetrievalRule.property.bytesPerHour"></a>

- *Type:* `number`

---

##### `strategy`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierDataRetrievalRule.property.strategy"></a>

- *Type:* `string`

---

### GlacierDeleteArchiveInput <a name="aws-cdk-sdk.glacier.GlacierDeleteArchiveInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierDeleteArchiveInput: glacier.GlacierDeleteArchiveInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDeleteArchiveInput.property.accountId"></a>

- *Type:* `string`

---

##### `archiveId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDeleteArchiveInput.property.archiveId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDeleteArchiveInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierDeleteVaultAccessPolicyInput <a name="aws-cdk-sdk.glacier.GlacierDeleteVaultAccessPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierDeleteVaultAccessPolicyInput: glacier.GlacierDeleteVaultAccessPolicyInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDeleteVaultAccessPolicyInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDeleteVaultAccessPolicyInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierDeleteVaultInput <a name="aws-cdk-sdk.glacier.GlacierDeleteVaultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierDeleteVaultInput: glacier.GlacierDeleteVaultInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDeleteVaultInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDeleteVaultInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierDeleteVaultNotificationsInput <a name="aws-cdk-sdk.glacier.GlacierDeleteVaultNotificationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierDeleteVaultNotificationsInput: glacier.GlacierDeleteVaultNotificationsInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDeleteVaultNotificationsInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDeleteVaultNotificationsInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierDescribeJobInput <a name="aws-cdk-sdk.glacier.GlacierDescribeJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierDescribeJobInput: glacier.GlacierDescribeJobInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeJobInput.property.accountId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeJobInput.property.jobId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeJobInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierDescribeVaultInput <a name="aws-cdk-sdk.glacier.GlacierDescribeVaultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierDescribeVaultInput: glacier.GlacierDescribeVaultInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeVaultInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeVaultInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierDescribeVaultOutput <a name="aws-cdk-sdk.glacier.GlacierDescribeVaultOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierDescribeVaultOutput: glacier.GlacierDescribeVaultOutput = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeVaultOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `lastInventoryDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeVaultOutput.property.lastInventoryDate"></a>

- *Type:* `string`

---

##### `numberOfArchives`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeVaultOutput.property.numberOfArchives"></a>

- *Type:* `number`

---

##### `sizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeVaultOutput.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `vaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeVaultOutput.property.vaultArn"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierDescribeVaultOutput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierEncryption <a name="aws-cdk-sdk.glacier.GlacierEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierEncryption: glacier.GlacierEncryption = { ... }
```

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierEncryption.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsContext`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierEncryption.property.kmsContext"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierEncryption.property.kmsKeyId"></a>

- *Type:* `string`

---

### GlacierGetDataRetrievalPolicyInput <a name="aws-cdk-sdk.glacier.GlacierGetDataRetrievalPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGetDataRetrievalPolicyInput: glacier.GlacierGetDataRetrievalPolicyInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGetDataRetrievalPolicyInput.property.accountId"></a>

- *Type:* `string`

---

### GlacierGetDataRetrievalPolicyOutput <a name="aws-cdk-sdk.glacier.GlacierGetDataRetrievalPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGetDataRetrievalPolicyOutput: glacier.GlacierGetDataRetrievalPolicyOutput = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetDataRetrievalPolicyOutput.property.policy"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDataRetrievalPolicy`](#aws-cdk-sdk.glacier.GlacierDataRetrievalPolicy)

---

### GlacierGetJobOutputInput <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGetJobOutputInput: glacier.GlacierGetJobOutputInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputInput.property.accountId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputInput.property.jobId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputInput.property.vaultName"></a>

- *Type:* `string`

---

##### `range`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputInput.property.range"></a>

- *Type:* `string`

---

### GlacierGetJobOutputOutput <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGetJobOutputOutput: glacier.GlacierGetJobOutputOutput = { ... }
```

##### `acceptRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputOutput.property.acceptRanges"></a>

- *Type:* `string`

---

##### `archiveDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputOutput.property.archiveDescription"></a>

- *Type:* `string`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputOutput.property.body"></a>

- *Type:* `any`

---

##### `checksum`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputOutput.property.checksum"></a>

- *Type:* `string`

---

##### `contentRange`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputOutput.property.contentRange"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputOutput.property.contentType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetJobOutputOutput.property.status"></a>

- *Type:* `number`

---

### GlacierGetVaultAccessPolicyInput <a name="aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGetVaultAccessPolicyInput: glacier.GlacierGetVaultAccessPolicyInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierGetVaultAccessPolicyOutput <a name="aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGetVaultAccessPolicyOutput: glacier.GlacierGetVaultAccessPolicyOutput = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyOutput.property.policy"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierVaultAccessPolicy`](#aws-cdk-sdk.glacier.GlacierVaultAccessPolicy)

---

### GlacierGetVaultLockInput <a name="aws-cdk-sdk.glacier.GlacierGetVaultLockInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGetVaultLockInput: glacier.GlacierGetVaultLockInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultLockInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultLockInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierGetVaultLockOutput <a name="aws-cdk-sdk.glacier.GlacierGetVaultLockOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGetVaultLockOutput: glacier.GlacierGetVaultLockOutput = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultLockOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultLockOutput.property.expirationDate"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultLockOutput.property.policy"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultLockOutput.property.state"></a>

- *Type:* `string`

---

### GlacierGetVaultNotificationsInput <a name="aws-cdk-sdk.glacier.GlacierGetVaultNotificationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGetVaultNotificationsInput: glacier.GlacierGetVaultNotificationsInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultNotificationsInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultNotificationsInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierGetVaultNotificationsOutput <a name="aws-cdk-sdk.glacier.GlacierGetVaultNotificationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGetVaultNotificationsOutput: glacier.GlacierGetVaultNotificationsOutput = { ... }
```

##### `vaultNotificationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGetVaultNotificationsOutput.property.vaultNotificationConfig"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierVaultNotificationConfig`](#aws-cdk-sdk.glacier.GlacierVaultNotificationConfig)

---

### GlacierGlacierJobDescription <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGlacierJobDescription: glacier.GlacierGlacierJobDescription = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.action"></a>

- *Type:* `string`

---

##### `archiveId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.archiveId"></a>

- *Type:* `string`

---

##### `archiveSha256TreeHash`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.archiveSha256TreeHash"></a>

- *Type:* `string`

---

##### `archiveSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.archiveSizeInBytes"></a>

- *Type:* `number`

---

##### `completed`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.completed"></a>

- *Type:* `boolean`

---

##### `completionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.completionDate"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `inventoryRetrievalParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.inventoryRetrievalParameters"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobDescription`](#aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobDescription)

---

##### `inventorySizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.inventorySizeInBytes"></a>

- *Type:* `number`

---

##### `jobDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.jobDescription"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.jobId"></a>

- *Type:* `string`

---

##### `jobOutputPath`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.jobOutputPath"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierOutputLocation`](#aws-cdk-sdk.glacier.GlacierOutputLocation)

---

##### `retrievalByteRange`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.retrievalByteRange"></a>

- *Type:* `string`

---

##### `selectParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.selectParameters"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierSelectParameters`](#aws-cdk-sdk.glacier.GlacierSelectParameters)

---

##### `sha256TreeHash`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.sha256TreeHash"></a>

- *Type:* `string`

---

##### `snsTopic`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.snsTopic"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.statusCode"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.statusMessage"></a>

- *Type:* `string`

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.tier"></a>

- *Type:* `string`

---

##### `vaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGlacierJobDescription.property.vaultArn"></a>

- *Type:* `string`

---

### GlacierGrant <a name="aws-cdk-sdk.glacier.GlacierGrant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGrant: glacier.GlacierGrant = { ... }
```

##### `grantee`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGrant.property.grantee"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGrantee`](#aws-cdk-sdk.glacier.GlacierGrantee)

---

##### `permission`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGrant.property.permission"></a>

- *Type:* `string`

---

### GlacierGrantee <a name="aws-cdk-sdk.glacier.GlacierGrantee"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierGrantee: glacier.GlacierGrantee = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierGrantee.property.type"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGrantee.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGrantee.property.emailAddress"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGrantee.property.id"></a>

- *Type:* `string`

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierGrantee.property.uri"></a>

- *Type:* `string`

---

### GlacierInitiateJobInput <a name="aws-cdk-sdk.glacier.GlacierInitiateJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierInitiateJobInput: glacier.GlacierInitiateJobInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateJobInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateJobInput.property.vaultName"></a>

- *Type:* `string`

---

##### `jobParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateJobInput.property.jobParameters"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierJobParameters`](#aws-cdk-sdk.glacier.GlacierJobParameters)

---

### GlacierInitiateJobOutput <a name="aws-cdk-sdk.glacier.GlacierInitiateJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierInitiateJobOutput: glacier.GlacierInitiateJobOutput = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateJobOutput.property.jobId"></a>

- *Type:* `string`

---

##### `jobOutputPath`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateJobOutput.property.jobOutputPath"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateJobOutput.property.location"></a>

- *Type:* `string`

---

### GlacierInitiateMultipartUploadInput <a name="aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierInitiateMultipartUploadInput: glacier.GlacierInitiateMultipartUploadInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadInput.property.vaultName"></a>

- *Type:* `string`

---

##### `archiveDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadInput.property.archiveDescription"></a>

- *Type:* `string`

---

##### `partSize`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadInput.property.partSize"></a>

- *Type:* `string`

---

### GlacierInitiateMultipartUploadOutput <a name="aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierInitiateMultipartUploadOutput: glacier.GlacierInitiateMultipartUploadOutput = { ... }
```

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadOutput.property.location"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadOutput.property.uploadId"></a>

- *Type:* `string`

---

### GlacierInitiateVaultLockInput <a name="aws-cdk-sdk.glacier.GlacierInitiateVaultLockInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierInitiateVaultLockInput: glacier.GlacierInitiateVaultLockInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateVaultLockInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateVaultLockInput.property.vaultName"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateVaultLockInput.property.policy"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierVaultLockPolicy`](#aws-cdk-sdk.glacier.GlacierVaultLockPolicy)

---

### GlacierInitiateVaultLockOutput <a name="aws-cdk-sdk.glacier.GlacierInitiateVaultLockOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierInitiateVaultLockOutput: glacier.GlacierInitiateVaultLockOutput = { ... }
```

##### `lockId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInitiateVaultLockOutput.property.lockId"></a>

- *Type:* `string`

---

### GlacierInputSerialization <a name="aws-cdk-sdk.glacier.GlacierInputSerialization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierInputSerialization: glacier.GlacierInputSerialization = { ... }
```

##### `csv`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInputSerialization.property.csv"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierCsvInput`](#aws-cdk-sdk.glacier.GlacierCsvInput)

---

### GlacierInventoryRetrievalJobDescription <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierInventoryRetrievalJobDescription: glacier.GlacierInventoryRetrievalJobDescription = { ... }
```

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobDescription.property.endDate"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobDescription.property.format"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobDescription.property.limit"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobDescription.property.marker"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobDescription.property.startDate"></a>

- *Type:* `string`

---

### GlacierInventoryRetrievalJobInput <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierInventoryRetrievalJobInput: glacier.GlacierInventoryRetrievalJobInput = { ... }
```

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobInput.property.endDate"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobInput.property.limit"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobInput.property.marker"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobInput.property.startDate"></a>

- *Type:* `string`

---

### GlacierJobParameters <a name="aws-cdk-sdk.glacier.GlacierJobParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierJobParameters: glacier.GlacierJobParameters = { ... }
```

##### `archiveId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierJobParameters.property.archiveId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierJobParameters.property.description"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierJobParameters.property.format"></a>

- *Type:* `string`

---

##### `inventoryRetrievalParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierJobParameters.property.inventoryRetrievalParameters"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobInput`](#aws-cdk-sdk.glacier.GlacierInventoryRetrievalJobInput)

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierJobParameters.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierOutputLocation`](#aws-cdk-sdk.glacier.GlacierOutputLocation)

---

##### `retrievalByteRange`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierJobParameters.property.retrievalByteRange"></a>

- *Type:* `string`

---

##### `selectParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierJobParameters.property.selectParameters"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierSelectParameters`](#aws-cdk-sdk.glacier.GlacierSelectParameters)

---

##### `snsTopic`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierJobParameters.property.snsTopic"></a>

- *Type:* `string`

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierJobParameters.property.tier"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierJobParameters.property.type"></a>

- *Type:* `string`

---

### GlacierListJobsInput <a name="aws-cdk-sdk.glacier.GlacierListJobsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListJobsInput: glacier.GlacierListJobsInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListJobsInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListJobsInput.property.vaultName"></a>

- *Type:* `string`

---

##### `completed`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListJobsInput.property.completed"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListJobsInput.property.limit"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListJobsInput.property.marker"></a>

- *Type:* `string`

---

##### `statuscode`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListJobsInput.property.statuscode"></a>

- *Type:* `string`

---

### GlacierListJobsOutput <a name="aws-cdk-sdk.glacier.GlacierListJobsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListJobsOutput: glacier.GlacierListJobsOutput = { ... }
```

##### `jobList`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListJobsOutput.property.jobList"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGlacierJobDescription`](#aws-cdk-sdk.glacier.GlacierGlacierJobDescription)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListJobsOutput.property.marker"></a>

- *Type:* `string`

---

### GlacierListMultipartUploadsInput <a name="aws-cdk-sdk.glacier.GlacierListMultipartUploadsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListMultipartUploadsInput: glacier.GlacierListMultipartUploadsInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListMultipartUploadsInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListMultipartUploadsInput.property.vaultName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListMultipartUploadsInput.property.limit"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListMultipartUploadsInput.property.marker"></a>

- *Type:* `string`

---

### GlacierListMultipartUploadsOutput <a name="aws-cdk-sdk.glacier.GlacierListMultipartUploadsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListMultipartUploadsOutput: glacier.GlacierListMultipartUploadsOutput = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListMultipartUploadsOutput.property.marker"></a>

- *Type:* `string`

---

##### `uploadsList`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListMultipartUploadsOutput.property.uploadsList"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierUploadListElement`](#aws-cdk-sdk.glacier.GlacierUploadListElement)[]

---

### GlacierListPartsInput <a name="aws-cdk-sdk.glacier.GlacierListPartsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListPartsInput: glacier.GlacierListPartsInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsInput.property.accountId"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsInput.property.uploadId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsInput.property.vaultName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsInput.property.limit"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsInput.property.marker"></a>

- *Type:* `string`

---

### GlacierListPartsOutput <a name="aws-cdk-sdk.glacier.GlacierListPartsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListPartsOutput: glacier.GlacierListPartsOutput = { ... }
```

##### `archiveDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsOutput.property.archiveDescription"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsOutput.property.marker"></a>

- *Type:* `string`

---

##### `multipartUploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsOutput.property.multipartUploadId"></a>

- *Type:* `string`

---

##### `parts`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsOutput.property.parts"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierPartListElement`](#aws-cdk-sdk.glacier.GlacierPartListElement)[]

---

##### `partSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsOutput.property.partSizeInBytes"></a>

- *Type:* `number`

---

##### `vaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListPartsOutput.property.vaultArn"></a>

- *Type:* `string`

---

### GlacierListProvisionedCapacityInput <a name="aws-cdk-sdk.glacier.GlacierListProvisionedCapacityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListProvisionedCapacityInput: glacier.GlacierListProvisionedCapacityInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListProvisionedCapacityInput.property.accountId"></a>

- *Type:* `string`

---

### GlacierListProvisionedCapacityOutput <a name="aws-cdk-sdk.glacier.GlacierListProvisionedCapacityOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListProvisionedCapacityOutput: glacier.GlacierListProvisionedCapacityOutput = { ... }
```

##### `provisionedCapacityList`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListProvisionedCapacityOutput.property.provisionedCapacityList"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierProvisionedCapacityDescription`](#aws-cdk-sdk.glacier.GlacierProvisionedCapacityDescription)[]

---

### GlacierListTagsForVaultInput <a name="aws-cdk-sdk.glacier.GlacierListTagsForVaultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListTagsForVaultInput: glacier.GlacierListTagsForVaultInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListTagsForVaultInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListTagsForVaultInput.property.vaultName"></a>

- *Type:* `string`

---

### GlacierListTagsForVaultOutput <a name="aws-cdk-sdk.glacier.GlacierListTagsForVaultOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListTagsForVaultOutput: glacier.GlacierListTagsForVaultOutput = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListTagsForVaultOutput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlacierListVaultsInput <a name="aws-cdk-sdk.glacier.GlacierListVaultsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListVaultsInput: glacier.GlacierListVaultsInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierListVaultsInput.property.accountId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListVaultsInput.property.limit"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListVaultsInput.property.marker"></a>

- *Type:* `string`

---

### GlacierListVaultsOutput <a name="aws-cdk-sdk.glacier.GlacierListVaultsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierListVaultsOutput: glacier.GlacierListVaultsOutput = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListVaultsOutput.property.marker"></a>

- *Type:* `string`

---

##### `vaultList`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierListVaultsOutput.property.vaultList"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeVaultOutput`](#aws-cdk-sdk.glacier.GlacierDescribeVaultOutput)[]

---

### GlacierOutputLocation <a name="aws-cdk-sdk.glacier.GlacierOutputLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierOutputLocation: glacier.GlacierOutputLocation = { ... }
```

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierOutputLocation.property.s3"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierS3Location`](#aws-cdk-sdk.glacier.GlacierS3Location)

---

### GlacierOutputSerialization <a name="aws-cdk-sdk.glacier.GlacierOutputSerialization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierOutputSerialization: glacier.GlacierOutputSerialization = { ... }
```

##### `csv`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierOutputSerialization.property.csv"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierCsvOutput`](#aws-cdk-sdk.glacier.GlacierCsvOutput)

---

### GlacierPartListElement <a name="aws-cdk-sdk.glacier.GlacierPartListElement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierPartListElement: glacier.GlacierPartListElement = { ... }
```

##### `rangeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierPartListElement.property.rangeInBytes"></a>

- *Type:* `string`

---

##### `sha256TreeHash`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierPartListElement.property.sha256TreeHash"></a>

- *Type:* `string`

---

### GlacierProvisionedCapacityDescription <a name="aws-cdk-sdk.glacier.GlacierProvisionedCapacityDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierProvisionedCapacityDescription: glacier.GlacierProvisionedCapacityDescription = { ... }
```

##### `capacityId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierProvisionedCapacityDescription.property.capacityId"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierProvisionedCapacityDescription.property.expirationDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierProvisionedCapacityDescription.property.startDate"></a>

- *Type:* `string`

---

### GlacierPurchaseProvisionedCapacityInput <a name="aws-cdk-sdk.glacier.GlacierPurchaseProvisionedCapacityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierPurchaseProvisionedCapacityInput: glacier.GlacierPurchaseProvisionedCapacityInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierPurchaseProvisionedCapacityInput.property.accountId"></a>

- *Type:* `string`

---

### GlacierPurchaseProvisionedCapacityOutput <a name="aws-cdk-sdk.glacier.GlacierPurchaseProvisionedCapacityOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierPurchaseProvisionedCapacityOutput: glacier.GlacierPurchaseProvisionedCapacityOutput = { ... }
```

##### `capacityId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierPurchaseProvisionedCapacityOutput.property.capacityId"></a>

- *Type:* `string`

---

### GlacierRemoveTagsFromVaultInput <a name="aws-cdk-sdk.glacier.GlacierRemoveTagsFromVaultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierRemoveTagsFromVaultInput: glacier.GlacierRemoveTagsFromVaultInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierRemoveTagsFromVaultInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierRemoveTagsFromVaultInput.property.vaultName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierRemoveTagsFromVaultInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### GlacierS3Location <a name="aws-cdk-sdk.glacier.GlacierS3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierS3Location: glacier.GlacierS3Location = { ... }
```

##### `accessControlList`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierS3Location.property.accessControlList"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGrant`](#aws-cdk-sdk.glacier.GlacierGrant)[]

---

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierS3Location.property.bucketName"></a>

- *Type:* `string`

---

##### `cannedAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierS3Location.property.cannedAcl"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierS3Location.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierEncryption`](#aws-cdk-sdk.glacier.GlacierEncryption)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierS3Location.property.prefix"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierS3Location.property.storageClass"></a>

- *Type:* `string`

---

##### `tagging`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierS3Location.property.tagging"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierS3Location.property.userMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlacierSelectParameters <a name="aws-cdk-sdk.glacier.GlacierSelectParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierSelectParameters: glacier.GlacierSelectParameters = { ... }
```

##### `expression`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierSelectParameters.property.expression"></a>

- *Type:* `string`

---

##### `expressionType`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierSelectParameters.property.expressionType"></a>

- *Type:* `string`

---

##### `inputSerialization`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierSelectParameters.property.inputSerialization"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierInputSerialization`](#aws-cdk-sdk.glacier.GlacierInputSerialization)

---

##### `outputSerialization`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierSelectParameters.property.outputSerialization"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierOutputSerialization`](#aws-cdk-sdk.glacier.GlacierOutputSerialization)

---

### GlacierSetDataRetrievalPolicyInput <a name="aws-cdk-sdk.glacier.GlacierSetDataRetrievalPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierSetDataRetrievalPolicyInput: glacier.GlacierSetDataRetrievalPolicyInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierSetDataRetrievalPolicyInput.property.accountId"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierSetDataRetrievalPolicyInput.property.policy"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDataRetrievalPolicy`](#aws-cdk-sdk.glacier.GlacierDataRetrievalPolicy)

---

### GlacierSetVaultAccessPolicyInput <a name="aws-cdk-sdk.glacier.GlacierSetVaultAccessPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierSetVaultAccessPolicyInput: glacier.GlacierSetVaultAccessPolicyInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierSetVaultAccessPolicyInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierSetVaultAccessPolicyInput.property.vaultName"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierSetVaultAccessPolicyInput.property.policy"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierVaultAccessPolicy`](#aws-cdk-sdk.glacier.GlacierVaultAccessPolicy)

---

### GlacierSetVaultNotificationsInput <a name="aws-cdk-sdk.glacier.GlacierSetVaultNotificationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierSetVaultNotificationsInput: glacier.GlacierSetVaultNotificationsInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierSetVaultNotificationsInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierSetVaultNotificationsInput.property.vaultName"></a>

- *Type:* `string`

---

##### `vaultNotificationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierSetVaultNotificationsInput.property.vaultNotificationConfig"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierVaultNotificationConfig`](#aws-cdk-sdk.glacier.GlacierVaultNotificationConfig)

---

### GlacierUploadArchiveInput <a name="aws-cdk-sdk.glacier.GlacierUploadArchiveInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierUploadArchiveInput: glacier.GlacierUploadArchiveInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadArchiveInput.property.accountId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadArchiveInput.property.vaultName"></a>

- *Type:* `string`

---

##### `archiveDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadArchiveInput.property.archiveDescription"></a>

- *Type:* `string`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadArchiveInput.property.body"></a>

- *Type:* `any`

---

##### `checksum`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadArchiveInput.property.checksum"></a>

- *Type:* `string`

---

### GlacierUploadListElement <a name="aws-cdk-sdk.glacier.GlacierUploadListElement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierUploadListElement: glacier.GlacierUploadListElement = { ... }
```

##### `archiveDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadListElement.property.archiveDescription"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadListElement.property.creationDate"></a>

- *Type:* `string`

---

##### `multipartUploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadListElement.property.multipartUploadId"></a>

- *Type:* `string`

---

##### `partSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadListElement.property.partSizeInBytes"></a>

- *Type:* `number`

---

##### `vaultArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadListElement.property.vaultArn"></a>

- *Type:* `string`

---

### GlacierUploadMultipartPartInput <a name="aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierUploadMultipartPartInput: glacier.GlacierUploadMultipartPartInput = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput.property.accountId"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput.property.uploadId"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput.property.vaultName"></a>

- *Type:* `string`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput.property.body"></a>

- *Type:* `any`

---

##### `checksum`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput.property.checksum"></a>

- *Type:* `string`

---

##### `range`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput.property.range"></a>

- *Type:* `string`

---

### GlacierUploadMultipartPartOutput <a name="aws-cdk-sdk.glacier.GlacierUploadMultipartPartOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierUploadMultipartPartOutput: glacier.GlacierUploadMultipartPartOutput = { ... }
```

##### `checksum`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierUploadMultipartPartOutput.property.checksum"></a>

- *Type:* `string`

---

### GlacierVaultAccessPolicy <a name="aws-cdk-sdk.glacier.GlacierVaultAccessPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierVaultAccessPolicy: glacier.GlacierVaultAccessPolicy = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierVaultAccessPolicy.property.policy"></a>

- *Type:* `string`

---

### GlacierVaultLockPolicy <a name="aws-cdk-sdk.glacier.GlacierVaultLockPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierVaultLockPolicy: glacier.GlacierVaultLockPolicy = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierVaultLockPolicy.property.policy"></a>

- *Type:* `string`

---

### GlacierVaultNotificationConfig <a name="aws-cdk-sdk.glacier.GlacierVaultNotificationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

const glacierVaultNotificationConfig: glacier.GlacierVaultNotificationConfig = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierVaultNotificationConfig.property.events"></a>

- *Type:* `string`[]

---

##### `snsTopic`<sup>Optional</sup> <a name="aws-cdk-sdk.glacier.GlacierVaultNotificationConfig.property.snsTopic"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### GlacierResponsesCompleteMultipartUpload <a name="aws-cdk-sdk.glacier.GlacierResponsesCompleteMultipartUpload"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesCompleteMultipartUpload.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesCompleteMultipartUpload(__scope: Construct, __resources: string[], __input: GlacierCompleteMultipartUploadInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesCompleteMultipartUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesCompleteMultipartUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesCompleteMultipartUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierCompleteMultipartUploadInput`](#aws-cdk-sdk.glacier.GlacierCompleteMultipartUploadInput)

---



#### Properties <a name="Properties"></a>

##### `archiveId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesCompleteMultipartUpload.property.archiveId"></a>

- *Type:* `string`

---

##### `checksum`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesCompleteMultipartUpload.property.checksum"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesCompleteMultipartUpload.property.location"></a>

- *Type:* `string`

---


### GlacierResponsesCreateVault <a name="aws-cdk-sdk.glacier.GlacierResponsesCreateVault"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesCreateVault.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesCreateVault(__scope: Construct, __resources: string[], __input: GlacierCreateVaultInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesCreateVault.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesCreateVault.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesCreateVault.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierCreateVaultInput`](#aws-cdk-sdk.glacier.GlacierCreateVaultInput)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesCreateVault.property.location"></a>

- *Type:* `string`

---


### GlacierResponsesDescribeJob <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeJob(__scope: Construct, __resources: string[], __input: GlacierDescribeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.action"></a>

- *Type:* `string`

---

##### `archiveId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.archiveId"></a>

- *Type:* `string`

---

##### `archiveSha256TreeHash`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.archiveSha256TreeHash"></a>

- *Type:* `string`

---

##### `archiveSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.archiveSizeInBytes"></a>

- *Type:* `number`

---

##### `completed`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.completed"></a>

- *Type:* `boolean`

---

##### `completionDate`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.completionDate"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.creationDate"></a>

- *Type:* `string`

---

##### `inventoryRetrievalParameters`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.inventoryRetrievalParameters"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters`](#aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters)

---

##### `inventorySizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.inventorySizeInBytes"></a>

- *Type:* `number`

---

##### `jobDescription`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.jobDescription"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobOutputPath`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.jobOutputPath"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocation`](#aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocation)

---

##### `retrievalByteRange`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.retrievalByteRange"></a>

- *Type:* `string`

---

##### `selectParameters`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.selectParameters"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters`](#aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters)

---

##### `sha256TreeHash`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.sha256TreeHash"></a>

- *Type:* `string`

---

##### `snsTopic`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.snsTopic"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.statusCode"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.statusMessage"></a>

- *Type:* `string`

---

##### `tier`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.tier"></a>

- *Type:* `string`

---

##### `vaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJob.property.vaultArn"></a>

- *Type:* `string`

---


### GlacierResponsesDescribeJobInventoryRetrievalParameters <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters(__scope: Construct, __resources: string[], __input: GlacierDescribeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---



#### Properties <a name="Properties"></a>

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters.property.endDate"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters.property.format"></a>

- *Type:* `string`

---

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters.property.limit"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters.property.marker"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobInventoryRetrievalParameters.property.startDate"></a>

- *Type:* `string`

---


### GlacierResponsesDescribeJobOutputLocation <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocation"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocation.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeJobOutputLocation(__scope: Construct, __resources: string[], __input: GlacierDescribeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---



#### Properties <a name="Properties"></a>

##### `s3`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocation.property.s3"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3`](#aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3)

---


### GlacierResponsesDescribeJobOutputLocationS3 <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeJobOutputLocationS3(__scope: Construct, __resources: string[], __input: GlacierDescribeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---



#### Properties <a name="Properties"></a>

##### `accessControlList`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.property.accessControlList"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGrant`](#aws-cdk-sdk.glacier.GlacierGrant)[]

---

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.property.bucketName"></a>

- *Type:* `string`

---

##### `cannedAcl`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.property.cannedAcl"></a>

- *Type:* `string`

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption`](#aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.property.prefix"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.property.storageClass"></a>

- *Type:* `string`

---

##### `tagging`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.property.tagging"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3.property.userMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---


### GlacierResponsesDescribeJobOutputLocationS3Encryption <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption(__scope: Construct, __resources: string[], __input: GlacierDescribeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsContext`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption.property.kmsContext"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobOutputLocationS3Encryption.property.kmsKeyId"></a>

- *Type:* `string`

---


### GlacierResponsesDescribeJobSelectParameters <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeJobSelectParameters(__scope: Construct, __resources: string[], __input: GlacierDescribeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---



#### Properties <a name="Properties"></a>

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters.property.expression"></a>

- *Type:* `string`

---

##### `expressionType`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters.property.expressionType"></a>

- *Type:* `string`

---

##### `inputSerialization`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters.property.inputSerialization"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerialization`](#aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerialization)

---

##### `outputSerialization`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParameters.property.outputSerialization"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerialization`](#aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerialization)

---


### GlacierResponsesDescribeJobSelectParametersInputSerialization <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerialization"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerialization.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeJobSelectParametersInputSerialization(__scope: Construct, __resources: string[], __input: GlacierDescribeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerialization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerialization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerialization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---



#### Properties <a name="Properties"></a>

##### `csv`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerialization.property.csv"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv`](#aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv)

---


### GlacierResponsesDescribeJobSelectParametersInputSerializationCsv <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv(__scope: Construct, __resources: string[], __input: GlacierDescribeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---



#### Properties <a name="Properties"></a>

##### `comments`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv.property.comments"></a>

- *Type:* `string`

---

##### `fieldDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv.property.fieldDelimiter"></a>

- *Type:* `string`

---

##### `fileHeaderInfo`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv.property.fileHeaderInfo"></a>

- *Type:* `string`

---

##### `quoteCharacter`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv.property.quoteCharacter"></a>

- *Type:* `string`

---

##### `quoteEscapeCharacter`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv.property.quoteEscapeCharacter"></a>

- *Type:* `string`

---

##### `recordDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersInputSerializationCsv.property.recordDelimiter"></a>

- *Type:* `string`

---


### GlacierResponsesDescribeJobSelectParametersOutputSerialization <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerialization"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerialization.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeJobSelectParametersOutputSerialization(__scope: Construct, __resources: string[], __input: GlacierDescribeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerialization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerialization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerialization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---



#### Properties <a name="Properties"></a>

##### `csv`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerialization.property.csv"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv`](#aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv)

---


### GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv(__scope: Construct, __resources: string[], __input: GlacierDescribeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeJobInput`](#aws-cdk-sdk.glacier.GlacierDescribeJobInput)

---



#### Properties <a name="Properties"></a>

##### `fieldDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv.property.fieldDelimiter"></a>

- *Type:* `string`

---

##### `quoteCharacter`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv.property.quoteCharacter"></a>

- *Type:* `string`

---

##### `quoteEscapeCharacter`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv.property.quoteEscapeCharacter"></a>

- *Type:* `string`

---

##### `quoteFields`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv.property.quoteFields"></a>

- *Type:* `string`

---

##### `recordDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv.property.recordDelimiter"></a>

- *Type:* `string`

---


### GlacierResponsesDescribeVault <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesDescribeVault(__scope: Construct, __resources: string[], __input: GlacierDescribeVaultInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeVaultInput`](#aws-cdk-sdk.glacier.GlacierDescribeVaultInput)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault.property.creationDate"></a>

- *Type:* `string`

---

##### `lastInventoryDate`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault.property.lastInventoryDate"></a>

- *Type:* `string`

---

##### `numberOfArchives`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault.property.numberOfArchives"></a>

- *Type:* `number`

---

##### `sizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `vaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault.property.vaultArn"></a>

- *Type:* `string`

---

##### `vaultName`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesDescribeVault.property.vaultName"></a>

- *Type:* `string`

---


### GlacierResponsesFetchDataRetrievalPolicy <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicy.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesFetchDataRetrievalPolicy(__scope: Construct, __resources: string[], __input: GlacierGetDataRetrievalPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetDataRetrievalPolicyInput`](#aws-cdk-sdk.glacier.GlacierGetDataRetrievalPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicyPolicy`](#aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicyPolicy)

---


### GlacierResponsesFetchDataRetrievalPolicyPolicy <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicyPolicy.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesFetchDataRetrievalPolicyPolicy(__scope: Construct, __resources: string[], __input: GlacierGetDataRetrievalPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetDataRetrievalPolicyInput`](#aws-cdk-sdk.glacier.GlacierGetDataRetrievalPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchDataRetrievalPolicyPolicy.property.rules"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDataRetrievalRule`](#aws-cdk-sdk.glacier.GlacierDataRetrievalRule)[]

---


### GlacierResponsesFetchJobOutput <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesFetchJobOutput(__scope: Construct, __resources: string[], __input: GlacierGetJobOutputInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetJobOutputInput`](#aws-cdk-sdk.glacier.GlacierGetJobOutputInput)

---



#### Properties <a name="Properties"></a>

##### `acceptRanges`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.property.acceptRanges"></a>

- *Type:* `string`

---

##### `archiveDescription`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.property.archiveDescription"></a>

- *Type:* `string`

---

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.property.body"></a>

- *Type:* `any`

---

##### `checksum`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.property.checksum"></a>

- *Type:* `string`

---

##### `contentRange`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.property.contentRange"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.property.contentType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchJobOutput.property.status"></a>

- *Type:* `number`

---


### GlacierResponsesFetchVaultAccessPolicy <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicy.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesFetchVaultAccessPolicy(__scope: Construct, __resources: string[], __input: GlacierGetVaultAccessPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyInput`](#aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicyPolicy`](#aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicyPolicy)

---


### GlacierResponsesFetchVaultAccessPolicyPolicy <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicyPolicy.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesFetchVaultAccessPolicyPolicy(__scope: Construct, __resources: string[], __input: GlacierGetVaultAccessPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyInput`](#aws-cdk-sdk.glacier.GlacierGetVaultAccessPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultAccessPolicyPolicy.property.policy"></a>

- *Type:* `string`

---


### GlacierResponsesFetchVaultLock <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultLock"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultLock.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesFetchVaultLock(__scope: Construct, __resources: string[], __input: GlacierGetVaultLockInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultLock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultLock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultLock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetVaultLockInput`](#aws-cdk-sdk.glacier.GlacierGetVaultLockInput)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultLock.property.creationDate"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultLock.property.expirationDate"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultLock.property.policy"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultLock.property.state"></a>

- *Type:* `string`

---


### GlacierResponsesFetchVaultNotifications <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotifications"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotifications.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesFetchVaultNotifications(__scope: Construct, __resources: string[], __input: GlacierGetVaultNotificationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetVaultNotificationsInput`](#aws-cdk-sdk.glacier.GlacierGetVaultNotificationsInput)

---



#### Properties <a name="Properties"></a>

##### `vaultNotificationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotifications.property.vaultNotificationConfig"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotificationsVaultNotificationConfig`](#aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotificationsVaultNotificationConfig)

---


### GlacierResponsesFetchVaultNotificationsVaultNotificationConfig <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotificationsVaultNotificationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotificationsVaultNotificationConfig.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesFetchVaultNotificationsVaultNotificationConfig(__scope: Construct, __resources: string[], __input: GlacierGetVaultNotificationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotificationsVaultNotificationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotificationsVaultNotificationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotificationsVaultNotificationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGetVaultNotificationsInput`](#aws-cdk-sdk.glacier.GlacierGetVaultNotificationsInput)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotificationsVaultNotificationConfig.property.events"></a>

- *Type:* `string`[]

---

##### `snsTopic`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesFetchVaultNotificationsVaultNotificationConfig.property.snsTopic"></a>

- *Type:* `string`

---


### GlacierResponsesInitiateJob <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateJob"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateJob.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesInitiateJob(__scope: Construct, __resources: string[], __input: GlacierInitiateJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierInitiateJobInput`](#aws-cdk-sdk.glacier.GlacierInitiateJobInput)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobOutputPath`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateJob.property.jobOutputPath"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateJob.property.location"></a>

- *Type:* `string`

---


### GlacierResponsesInitiateMultipartUpload <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateMultipartUpload"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateMultipartUpload.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesInitiateMultipartUpload(__scope: Construct, __resources: string[], __input: GlacierInitiateMultipartUploadInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateMultipartUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateMultipartUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateMultipartUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadInput`](#aws-cdk-sdk.glacier.GlacierInitiateMultipartUploadInput)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateMultipartUpload.property.location"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateMultipartUpload.property.uploadId"></a>

- *Type:* `string`

---


### GlacierResponsesInitiateVaultLock <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateVaultLock"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateVaultLock.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesInitiateVaultLock(__scope: Construct, __resources: string[], __input: GlacierInitiateVaultLockInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateVaultLock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateVaultLock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateVaultLock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierInitiateVaultLockInput`](#aws-cdk-sdk.glacier.GlacierInitiateVaultLockInput)

---



#### Properties <a name="Properties"></a>

##### `lockId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesInitiateVaultLock.property.lockId"></a>

- *Type:* `string`

---


### GlacierResponsesListJobs <a name="aws-cdk-sdk.glacier.GlacierResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesListJobs.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesListJobs(__scope: Construct, __resources: string[], __input: GlacierListJobsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListJobsInput`](#aws-cdk-sdk.glacier.GlacierListJobsInput)

---



#### Properties <a name="Properties"></a>

##### `jobList`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListJobs.property.jobList"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierGlacierJobDescription`](#aws-cdk-sdk.glacier.GlacierGlacierJobDescription)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListJobs.property.marker"></a>

- *Type:* `string`

---


### GlacierResponsesListMultipartUploads <a name="aws-cdk-sdk.glacier.GlacierResponsesListMultipartUploads"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesListMultipartUploads.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesListMultipartUploads(__scope: Construct, __resources: string[], __input: GlacierListMultipartUploadsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListMultipartUploads.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListMultipartUploads.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListMultipartUploads.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListMultipartUploadsInput`](#aws-cdk-sdk.glacier.GlacierListMultipartUploadsInput)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListMultipartUploads.property.marker"></a>

- *Type:* `string`

---

##### `uploadsList`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListMultipartUploads.property.uploadsList"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierUploadListElement`](#aws-cdk-sdk.glacier.GlacierUploadListElement)[]

---


### GlacierResponsesListParts <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesListParts(__scope: Construct, __resources: string[], __input: GlacierListPartsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListPartsInput`](#aws-cdk-sdk.glacier.GlacierListPartsInput)

---



#### Properties <a name="Properties"></a>

##### `archiveDescription`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.property.archiveDescription"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.property.creationDate"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.property.marker"></a>

- *Type:* `string`

---

##### `multipartUploadId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.property.multipartUploadId"></a>

- *Type:* `string`

---

##### `parts`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.property.parts"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierPartListElement`](#aws-cdk-sdk.glacier.GlacierPartListElement)[]

---

##### `partSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.property.partSizeInBytes"></a>

- *Type:* `number`

---

##### `vaultArn`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListParts.property.vaultArn"></a>

- *Type:* `string`

---


### GlacierResponsesListProvisionedCapacity <a name="aws-cdk-sdk.glacier.GlacierResponsesListProvisionedCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesListProvisionedCapacity.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesListProvisionedCapacity(__scope: Construct, __resources: string[], __input: GlacierListProvisionedCapacityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListProvisionedCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListProvisionedCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListProvisionedCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListProvisionedCapacityInput`](#aws-cdk-sdk.glacier.GlacierListProvisionedCapacityInput)

---



#### Properties <a name="Properties"></a>

##### `provisionedCapacityList`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListProvisionedCapacity.property.provisionedCapacityList"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierProvisionedCapacityDescription`](#aws-cdk-sdk.glacier.GlacierProvisionedCapacityDescription)[]

---


### GlacierResponsesListTagsForVault <a name="aws-cdk-sdk.glacier.GlacierResponsesListTagsForVault"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesListTagsForVault.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesListTagsForVault(__scope: Construct, __resources: string[], __input: GlacierListTagsForVaultInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListTagsForVault.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListTagsForVault.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListTagsForVault.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListTagsForVaultInput`](#aws-cdk-sdk.glacier.GlacierListTagsForVaultInput)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListTagsForVault.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GlacierResponsesListVaults <a name="aws-cdk-sdk.glacier.GlacierResponsesListVaults"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesListVaults.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesListVaults(__scope: Construct, __resources: string[], __input: GlacierListVaultsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListVaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListVaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListVaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierListVaultsInput`](#aws-cdk-sdk.glacier.GlacierListVaultsInput)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListVaults.property.marker"></a>

- *Type:* `string`

---

##### `vaultList`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesListVaults.property.vaultList"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierDescribeVaultOutput`](#aws-cdk-sdk.glacier.GlacierDescribeVaultOutput)[]

---


### GlacierResponsesPurchaseProvisionedCapacity <a name="aws-cdk-sdk.glacier.GlacierResponsesPurchaseProvisionedCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesPurchaseProvisionedCapacity.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesPurchaseProvisionedCapacity(__scope: Construct, __resources: string[], __input: GlacierPurchaseProvisionedCapacityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesPurchaseProvisionedCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesPurchaseProvisionedCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesPurchaseProvisionedCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierPurchaseProvisionedCapacityInput`](#aws-cdk-sdk.glacier.GlacierPurchaseProvisionedCapacityInput)

---



#### Properties <a name="Properties"></a>

##### `capacityId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesPurchaseProvisionedCapacity.property.capacityId"></a>

- *Type:* `string`

---


### GlacierResponsesUploadArchive <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadArchive"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadArchive.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesUploadArchive(__scope: Construct, __resources: string[], __input: GlacierUploadArchiveInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadArchive.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadArchive.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadArchive.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierUploadArchiveInput`](#aws-cdk-sdk.glacier.GlacierUploadArchiveInput)

---



#### Properties <a name="Properties"></a>

##### `archiveId`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadArchive.property.archiveId"></a>

- *Type:* `string`

---

##### `checksum`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadArchive.property.checksum"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadArchive.property.location"></a>

- *Type:* `string`

---


### GlacierResponsesUploadMultipartPart <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadMultipartPart"></a>

#### Initializer <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadMultipartPart.Initializer"></a>

```typescript
import { glacier } from 'aws-cdk-sdk'

new glacier.GlacierResponsesUploadMultipartPart(__scope: Construct, __resources: string[], __input: GlacierUploadMultipartPartInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadMultipartPart.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadMultipartPart.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadMultipartPart.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput`](#aws-cdk-sdk.glacier.GlacierUploadMultipartPartInput)

---



#### Properties <a name="Properties"></a>

##### `checksum`<sup>Required</sup> <a name="aws-cdk-sdk.glacier.GlacierResponsesUploadMultipartPart.property.checksum"></a>

- *Type:* `string`

---



