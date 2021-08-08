# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### LakeFormationClient <a name="aws-cdk-sdk.lakeformation.LakeFormationClient"></a>

#### Initializer <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

new lakeformation.LakeFormationClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchGrantPermissions` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.batchGrantPermissions"></a>

```typescript
public batchGrantPermissions(input: LakeFormationBatchGrantPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchGrantPermissionsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationBatchGrantPermissionsRequest)

---

##### `batchRevokePermissions` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.batchRevokePermissions"></a>

```typescript
public batchRevokePermissions(input: LakeFormationBatchRevokePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchRevokePermissionsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationBatchRevokePermissionsRequest)

---

##### `deregisterResource` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.deregisterResource"></a>

```typescript
public deregisterResource(input: LakeFormationDeregisterResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDeregisterResourceRequest`](#aws-cdk-sdk.lakeformation.LakeFormationDeregisterResourceRequest)

---

##### `describeResource` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.describeResource"></a>

```typescript
public describeResource(input: LakeFormationDescribeResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDescribeResourceRequest`](#aws-cdk-sdk.lakeformation.LakeFormationDescribeResourceRequest)

---

##### `fetchDataLakeSettings` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.fetchDataLakeSettings"></a>

```typescript
public fetchDataLakeSettings(input: LakeFormationGetDataLakeSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationGetDataLakeSettingsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationGetDataLakeSettingsRequest)

---

##### `fetchEffectivePermissionsForPath` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.fetchEffectivePermissionsForPath"></a>

```typescript
public fetchEffectivePermissionsForPath(input: LakeFormationGetEffectivePermissionsForPathRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathRequest`](#aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathRequest)

---

##### `grantPermissions` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.grantPermissions"></a>

```typescript
public grantPermissions(input: LakeFormationGrantPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationGrantPermissionsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationGrantPermissionsRequest)

---

##### `listPermissions` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.listPermissions"></a>

```typescript
public listPermissions(input: LakeFormationListPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest)

---

##### `listResources` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.listResources"></a>

```typescript
public listResources(input: LakeFormationListResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationListResourcesRequest`](#aws-cdk-sdk.lakeformation.LakeFormationListResourcesRequest)

---

##### `putDataLakeSettings` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.putDataLakeSettings"></a>

```typescript
public putDataLakeSettings(input: LakeFormationPutDataLakeSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationPutDataLakeSettingsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationPutDataLakeSettingsRequest)

---

##### `registerResource` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.registerResource"></a>

```typescript
public registerResource(input: LakeFormationRegisterResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationRegisterResourceRequest`](#aws-cdk-sdk.lakeformation.LakeFormationRegisterResourceRequest)

---

##### `revokePermissions` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.revokePermissions"></a>

```typescript
public revokePermissions(input: LakeFormationRevokePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationRevokePermissionsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationRevokePermissionsRequest)

---

##### `updateResource` <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.updateResource"></a>

```typescript
public updateResource(input: LakeFormationUpdateResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationUpdateResourceRequest`](#aws-cdk-sdk.lakeformation.LakeFormationUpdateResourceRequest)

---




## Structs <a name="Structs"></a>

### LakeFormationBatchGrantPermissionsRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchGrantPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationBatchGrantPermissionsRequest: lakeformation.LakeFormationBatchGrantPermissionsRequest = { ... }
```

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchGrantPermissionsRequest.property.entries"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry`](#aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry)[]

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchGrantPermissionsRequest.property.catalogId"></a>

- *Type:* `string`

---

### LakeFormationBatchGrantPermissionsResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchGrantPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationBatchGrantPermissionsResponse: lakeformation.LakeFormationBatchGrantPermissionsResponse = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchGrantPermissionsResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry`](#aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry)[]

---

### LakeFormationBatchPermissionsFailureEntry <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationBatchPermissionsFailureEntry: lakeformation.LakeFormationBatchPermissionsFailureEntry = { ... }
```

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry.property.error"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationErrorDetail`](#aws-cdk-sdk.lakeformation.LakeFormationErrorDetail)

---

##### `requestEntry`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry.property.requestEntry"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry`](#aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry)

---

### LakeFormationBatchPermissionsRequestEntry <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationBatchPermissionsRequestEntry: lakeformation.LakeFormationBatchPermissionsRequestEntry = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry.property.id"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry.property.permissions"></a>

- *Type:* `string`[]

---

##### `permissionsWithGrantOption`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry.property.permissionsWithGrantOption"></a>

- *Type:* `string`[]

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry.property.principal"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal`](#aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal)

---

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry.property.resource"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationResource`](#aws-cdk-sdk.lakeformation.LakeFormationResource)

---

### LakeFormationBatchRevokePermissionsRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchRevokePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationBatchRevokePermissionsRequest: lakeformation.LakeFormationBatchRevokePermissionsRequest = { ... }
```

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchRevokePermissionsRequest.property.entries"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry`](#aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsRequestEntry)[]

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchRevokePermissionsRequest.property.catalogId"></a>

- *Type:* `string`

---

### LakeFormationBatchRevokePermissionsResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchRevokePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationBatchRevokePermissionsResponse: lakeformation.LakeFormationBatchRevokePermissionsResponse = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationBatchRevokePermissionsResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry`](#aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry)[]

---

### LakeFormationCatalogResource <a name="aws-cdk-sdk.lakeformation.LakeFormationCatalogResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationCatalogResource: lakeformation.LakeFormationCatalogResource = { ... }
```

### LakeFormationColumnWildcard <a name="aws-cdk-sdk.lakeformation.LakeFormationColumnWildcard"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationColumnWildcard: lakeformation.LakeFormationColumnWildcard = { ... }
```

##### `excludedColumnNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationColumnWildcard.property.excludedColumnNames"></a>

- *Type:* `string`[]

---

### LakeFormationDatabaseResource <a name="aws-cdk-sdk.lakeformation.LakeFormationDatabaseResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationDatabaseResource: lakeformation.LakeFormationDatabaseResource = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDatabaseResource.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDatabaseResource.property.catalogId"></a>

- *Type:* `string`

---

### LakeFormationDataLakePrincipal <a name="aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationDataLakePrincipal: lakeformation.LakeFormationDataLakePrincipal = { ... }
```

##### `dataLakePrincipalIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal.property.dataLakePrincipalIdentifier"></a>

- *Type:* `string`

---

### LakeFormationDataLakeSettings <a name="aws-cdk-sdk.lakeformation.LakeFormationDataLakeSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationDataLakeSettings: lakeformation.LakeFormationDataLakeSettings = { ... }
```

##### `createDatabaseDefaultPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDataLakeSettings.property.createDatabaseDefaultPermissions"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions`](#aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions)[]

---

##### `createTableDefaultPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDataLakeSettings.property.createTableDefaultPermissions"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions`](#aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions)[]

---

##### `dataLakeAdmins`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDataLakeSettings.property.dataLakeAdmins"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal`](#aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal)[]

---

##### `trustedResourceOwners`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDataLakeSettings.property.trustedResourceOwners"></a>

- *Type:* `string`[]

---

### LakeFormationDataLocationResource <a name="aws-cdk-sdk.lakeformation.LakeFormationDataLocationResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationDataLocationResource: lakeformation.LakeFormationDataLocationResource = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDataLocationResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDataLocationResource.property.catalogId"></a>

- *Type:* `string`

---

### LakeFormationDeregisterResourceRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationDeregisterResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationDeregisterResourceRequest: lakeformation.LakeFormationDeregisterResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDeregisterResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### LakeFormationDeregisterResourceResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationDeregisterResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationDeregisterResourceResponse: lakeformation.LakeFormationDeregisterResourceResponse = { ... }
```

### LakeFormationDescribeResourceRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationDescribeResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationDescribeResourceRequest: lakeformation.LakeFormationDescribeResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDescribeResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### LakeFormationDescribeResourceResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationDescribeResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationDescribeResourceResponse: lakeformation.LakeFormationDescribeResourceResponse = { ... }
```

##### `resourceInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDescribeResourceResponse.property.resourceInfo"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationResourceInfo`](#aws-cdk-sdk.lakeformation.LakeFormationResourceInfo)

---

### LakeFormationDetailsMap <a name="aws-cdk-sdk.lakeformation.LakeFormationDetailsMap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationDetailsMap: lakeformation.LakeFormationDetailsMap = { ... }
```

##### `resourceShare`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationDetailsMap.property.resourceShare"></a>

- *Type:* `string`[]

---

### LakeFormationErrorDetail <a name="aws-cdk-sdk.lakeformation.LakeFormationErrorDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationErrorDetail: lakeformation.LakeFormationErrorDetail = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationErrorDetail.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationErrorDetail.property.errorMessage"></a>

- *Type:* `string`

---

### LakeFormationFilterCondition <a name="aws-cdk-sdk.lakeformation.LakeFormationFilterCondition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationFilterCondition: lakeformation.LakeFormationFilterCondition = { ... }
```

##### `comparisonOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationFilterCondition.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `field`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationFilterCondition.property.field"></a>

- *Type:* `string`

---

##### `stringValueList`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationFilterCondition.property.stringValueList"></a>

- *Type:* `string`[]

---

### LakeFormationGetDataLakeSettingsRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationGetDataLakeSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationGetDataLakeSettingsRequest: lakeformation.LakeFormationGetDataLakeSettingsRequest = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGetDataLakeSettingsRequest.property.catalogId"></a>

- *Type:* `string`

---

### LakeFormationGetDataLakeSettingsResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationGetDataLakeSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationGetDataLakeSettingsResponse: lakeformation.LakeFormationGetDataLakeSettingsResponse = { ... }
```

##### `dataLakeSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGetDataLakeSettingsResponse.property.dataLakeSettings"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLakeSettings`](#aws-cdk-sdk.lakeformation.LakeFormationDataLakeSettings)

---

### LakeFormationGetEffectivePermissionsForPathRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationGetEffectivePermissionsForPathRequest: lakeformation.LakeFormationGetEffectivePermissionsForPathRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathRequest.property.nextToken"></a>

- *Type:* `string`

---

### LakeFormationGetEffectivePermissionsForPathResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationGetEffectivePermissionsForPathResponse: lakeformation.LakeFormationGetEffectivePermissionsForPathResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions`](#aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions)[]

---

### LakeFormationGrantPermissionsRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationGrantPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationGrantPermissionsRequest: lakeformation.LakeFormationGrantPermissionsRequest = { ... }
```

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGrantPermissionsRequest.property.permissions"></a>

- *Type:* `string`[]

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGrantPermissionsRequest.property.principal"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal`](#aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal)

---

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGrantPermissionsRequest.property.resource"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationResource`](#aws-cdk-sdk.lakeformation.LakeFormationResource)

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGrantPermissionsRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `permissionsWithGrantOption`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationGrantPermissionsRequest.property.permissionsWithGrantOption"></a>

- *Type:* `string`[]

---

### LakeFormationGrantPermissionsResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationGrantPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationGrantPermissionsResponse: lakeformation.LakeFormationGrantPermissionsResponse = { ... }
```

### LakeFormationListPermissionsRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationListPermissionsRequest: lakeformation.LakeFormationListPermissionsRequest = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest.property.principal"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal`](#aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal)

---

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest.property.resource"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationResource`](#aws-cdk-sdk.lakeformation.LakeFormationResource)

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest.property.resourceType"></a>

- *Type:* `string`

---

### LakeFormationListPermissionsResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationListPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationListPermissionsResponse: lakeformation.LakeFormationListPermissionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListPermissionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `principalResourcePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListPermissionsResponse.property.principalResourcePermissions"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions`](#aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions)[]

---

### LakeFormationListResourcesRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationListResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationListResourcesRequest: lakeformation.LakeFormationListResourcesRequest = { ... }
```

##### `filterConditionList`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListResourcesRequest.property.filterConditionList"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationFilterCondition`](#aws-cdk-sdk.lakeformation.LakeFormationFilterCondition)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListResourcesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListResourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

### LakeFormationListResourcesResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationListResourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationListResourcesResponse: lakeformation.LakeFormationListResourcesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListResourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationListResourcesResponse.property.resourceInfoList"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationResourceInfo`](#aws-cdk-sdk.lakeformation.LakeFormationResourceInfo)[]

---

### LakeFormationPrincipalPermissions <a name="aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationPrincipalPermissions: lakeformation.LakeFormationPrincipalPermissions = { ... }
```

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions.property.permissions"></a>

- *Type:* `string`[]

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions.property.principal"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal`](#aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal)

---

### LakeFormationPrincipalResourcePermissions <a name="aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationPrincipalResourcePermissions: lakeformation.LakeFormationPrincipalResourcePermissions = { ... }
```

##### `additionalDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions.property.additionalDetails"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDetailsMap`](#aws-cdk-sdk.lakeformation.LakeFormationDetailsMap)

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions.property.permissions"></a>

- *Type:* `string`[]

---

##### `permissionsWithGrantOption`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions.property.permissionsWithGrantOption"></a>

- *Type:* `string`[]

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions.property.principal"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal`](#aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal)

---

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions.property.resource"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationResource`](#aws-cdk-sdk.lakeformation.LakeFormationResource)

---

### LakeFormationPutDataLakeSettingsRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationPutDataLakeSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationPutDataLakeSettingsRequest: lakeformation.LakeFormationPutDataLakeSettingsRequest = { ... }
```

##### `dataLakeSettings`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationPutDataLakeSettingsRequest.property.dataLakeSettings"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLakeSettings`](#aws-cdk-sdk.lakeformation.LakeFormationDataLakeSettings)

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationPutDataLakeSettingsRequest.property.catalogId"></a>

- *Type:* `string`

---

### LakeFormationPutDataLakeSettingsResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationPutDataLakeSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationPutDataLakeSettingsResponse: lakeformation.LakeFormationPutDataLakeSettingsResponse = { ... }
```

### LakeFormationRegisterResourceRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationRegisterResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationRegisterResourceRequest: lakeformation.LakeFormationRegisterResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationRegisterResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationRegisterResourceRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `useServiceLinkedRole`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationRegisterResourceRequest.property.useServiceLinkedRole"></a>

- *Type:* `boolean`

---

### LakeFormationRegisterResourceResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationRegisterResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationRegisterResourceResponse: lakeformation.LakeFormationRegisterResourceResponse = { ... }
```

### LakeFormationResource <a name="aws-cdk-sdk.lakeformation.LakeFormationResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationResource: lakeformation.LakeFormationResource = { ... }
```

##### `catalog`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResource.property.catalog"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationCatalogResource`](#aws-cdk-sdk.lakeformation.LakeFormationCatalogResource)

---

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResource.property.database"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDatabaseResource`](#aws-cdk-sdk.lakeformation.LakeFormationDatabaseResource)

---

##### `dataLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResource.property.dataLocation"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLocationResource`](#aws-cdk-sdk.lakeformation.LakeFormationDataLocationResource)

---

##### `table`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResource.property.table"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationTableResource`](#aws-cdk-sdk.lakeformation.LakeFormationTableResource)

---

##### `tableWithColumns`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResource.property.tableWithColumns"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationTableWithColumnsResource`](#aws-cdk-sdk.lakeformation.LakeFormationTableWithColumnsResource)

---

### LakeFormationResourceInfo <a name="aws-cdk-sdk.lakeformation.LakeFormationResourceInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationResourceInfo: lakeformation.LakeFormationResourceInfo = { ... }
```

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResourceInfo.property.lastModified"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResourceInfo.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResourceInfo.property.roleArn"></a>

- *Type:* `string`

---

### LakeFormationRevokePermissionsRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationRevokePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationRevokePermissionsRequest: lakeformation.LakeFormationRevokePermissionsRequest = { ... }
```

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationRevokePermissionsRequest.property.permissions"></a>

- *Type:* `string`[]

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationRevokePermissionsRequest.property.principal"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal`](#aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal)

---

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationRevokePermissionsRequest.property.resource"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationResource`](#aws-cdk-sdk.lakeformation.LakeFormationResource)

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationRevokePermissionsRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `permissionsWithGrantOption`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationRevokePermissionsRequest.property.permissionsWithGrantOption"></a>

- *Type:* `string`[]

---

### LakeFormationRevokePermissionsResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationRevokePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationRevokePermissionsResponse: lakeformation.LakeFormationRevokePermissionsResponse = { ... }
```

### LakeFormationTableResource <a name="aws-cdk-sdk.lakeformation.LakeFormationTableResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationTableResource: lakeformation.LakeFormationTableResource = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationTableResource.property.databaseName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationTableResource.property.catalogId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationTableResource.property.name"></a>

- *Type:* `string`

---

##### `tableWildcard`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationTableResource.property.tableWildcard"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationTableWildcard`](#aws-cdk-sdk.lakeformation.LakeFormationTableWildcard)

---

### LakeFormationTableWildcard <a name="aws-cdk-sdk.lakeformation.LakeFormationTableWildcard"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationTableWildcard: lakeformation.LakeFormationTableWildcard = { ... }
```

### LakeFormationTableWithColumnsResource <a name="aws-cdk-sdk.lakeformation.LakeFormationTableWithColumnsResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationTableWithColumnsResource: lakeformation.LakeFormationTableWithColumnsResource = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationTableWithColumnsResource.property.databaseName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationTableWithColumnsResource.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationTableWithColumnsResource.property.catalogId"></a>

- *Type:* `string`

---

##### `columnNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationTableWithColumnsResource.property.columnNames"></a>

- *Type:* `string`[]

---

##### `columnWildcard`<sup>Optional</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationTableWithColumnsResource.property.columnWildcard"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationColumnWildcard`](#aws-cdk-sdk.lakeformation.LakeFormationColumnWildcard)

---

### LakeFormationUpdateResourceRequest <a name="aws-cdk-sdk.lakeformation.LakeFormationUpdateResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationUpdateResourceRequest: lakeformation.LakeFormationUpdateResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationUpdateResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationUpdateResourceRequest.property.roleArn"></a>

- *Type:* `string`

---

### LakeFormationUpdateResourceResponse <a name="aws-cdk-sdk.lakeformation.LakeFormationUpdateResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

const lakeFormationUpdateResourceResponse: lakeformation.LakeFormationUpdateResourceResponse = { ... }
```

## Classes <a name="Classes"></a>

### LakeFormationResponsesBatchGrantPermissions <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchGrantPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchGrantPermissions.Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

new lakeformation.LakeFormationResponsesBatchGrantPermissions(__scope: Construct, __resources: string[], __input: LakeFormationBatchGrantPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchGrantPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchGrantPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchGrantPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchGrantPermissionsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationBatchGrantPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchGrantPermissions.property.failures"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry`](#aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry)[]

---


### LakeFormationResponsesBatchRevokePermissions <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchRevokePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchRevokePermissions.Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

new lakeformation.LakeFormationResponsesBatchRevokePermissions(__scope: Construct, __resources: string[], __input: LakeFormationBatchRevokePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchRevokePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchRevokePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchRevokePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchRevokePermissionsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationBatchRevokePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesBatchRevokePermissions.property.failures"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry`](#aws-cdk-sdk.lakeformation.LakeFormationBatchPermissionsFailureEntry)[]

---


### LakeFormationResponsesDescribeResource <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResource"></a>

#### Initializer <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResource.Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

new lakeformation.LakeFormationResponsesDescribeResource(__scope: Construct, __resources: string[], __input: LakeFormationDescribeResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDescribeResourceRequest`](#aws-cdk-sdk.lakeformation.LakeFormationDescribeResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceInfo`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResource.property.resourceInfo"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResourceResourceInfo`](#aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResourceResourceInfo)

---


### LakeFormationResponsesDescribeResourceResourceInfo <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResourceResourceInfo"></a>

#### Initializer <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResourceResourceInfo.Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

new lakeformation.LakeFormationResponsesDescribeResourceResourceInfo(__scope: Construct, __resources: string[], __input: LakeFormationDescribeResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResourceResourceInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResourceResourceInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResourceResourceInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDescribeResourceRequest`](#aws-cdk-sdk.lakeformation.LakeFormationDescribeResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResourceResourceInfo.property.lastModified"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResourceResourceInfo.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesDescribeResourceResourceInfo.property.roleArn"></a>

- *Type:* `string`

---


### LakeFormationResponsesFetchDataLakeSettings <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettings"></a>

#### Initializer <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettings.Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

new lakeformation.LakeFormationResponsesFetchDataLakeSettings(__scope: Construct, __resources: string[], __input: LakeFormationGetDataLakeSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationGetDataLakeSettingsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationGetDataLakeSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `dataLakeSettings`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettings.property.dataLakeSettings"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings`](#aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings)

---


### LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings"></a>

#### Initializer <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings.Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

new lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings(__scope: Construct, __resources: string[], __input: LakeFormationGetDataLakeSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationGetDataLakeSettingsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationGetDataLakeSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `createDatabaseDefaultPermissions`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings.property.createDatabaseDefaultPermissions"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions`](#aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions)[]

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings.property.createTableDefaultPermissions"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions`](#aws-cdk-sdk.lakeformation.LakeFormationPrincipalPermissions)[]

---

##### `dataLakeAdmins`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings.property.dataLakeAdmins"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal`](#aws-cdk-sdk.lakeformation.LakeFormationDataLakePrincipal)[]

---

##### `trustedResourceOwners`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings.property.trustedResourceOwners"></a>

- *Type:* `string`[]

---


### LakeFormationResponsesFetchEffectivePermissionsForPath <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchEffectivePermissionsForPath"></a>

#### Initializer <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchEffectivePermissionsForPath.Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

new lakeformation.LakeFormationResponsesFetchEffectivePermissionsForPath(__scope: Construct, __resources: string[], __input: LakeFormationGetEffectivePermissionsForPathRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchEffectivePermissionsForPath.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchEffectivePermissionsForPath.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchEffectivePermissionsForPath.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathRequest`](#aws-cdk-sdk.lakeformation.LakeFormationGetEffectivePermissionsForPathRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchEffectivePermissionsForPath.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesFetchEffectivePermissionsForPath.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions`](#aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions)[]

---


### LakeFormationResponsesListPermissions <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListPermissions.Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

new lakeformation.LakeFormationResponsesListPermissions(__scope: Construct, __resources: string[], __input: LakeFormationListPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest`](#aws-cdk-sdk.lakeformation.LakeFormationListPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListPermissions.property.nextToken"></a>

- *Type:* `string`

---

##### `principalResourcePermissions`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListPermissions.property.principalResourcePermissions"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions`](#aws-cdk-sdk.lakeformation.LakeFormationPrincipalResourcePermissions)[]

---


### LakeFormationResponsesListResources <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListResources"></a>

#### Initializer <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListResources.Initializer"></a>

```typescript
import { lakeformation } from 'aws-cdk-sdk'

new lakeformation.LakeFormationResponsesListResources(__scope: Construct, __resources: string[], __input: LakeFormationListResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationListResourcesRequest`](#aws-cdk-sdk.lakeformation.LakeFormationListResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListResources.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.lakeformation.LakeFormationResponsesListResources.property.resourceInfoList"></a>

- *Type:* [`aws-cdk-sdk.lakeformation.LakeFormationResourceInfo`](#aws-cdk-sdk.lakeformation.LakeFormationResourceInfo)[]

---



