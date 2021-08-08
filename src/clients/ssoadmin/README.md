# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SsoAdminClient <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SsoAdminClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `attachManagedPolicyToPermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.attachManagedPolicyToPermissionSet"></a>

```typescript
public attachManagedPolicyToPermissionSet(input: SsoAdminAttachManagedPolicyToPermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAttachManagedPolicyToPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminAttachManagedPolicyToPermissionSetRequest)

---

##### `createAccountAssignment` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.createAccountAssignment"></a>

```typescript
public createAccountAssignment(input: SsoAdminCreateAccountAssignmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest)

---

##### `createInstanceAccessControlAttributeConfiguration` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.createInstanceAccessControlAttributeConfiguration"></a>

```typescript
public createInstanceAccessControlAttributeConfiguration(input: SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest)

---

##### `createPermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.createPermissionSet"></a>

```typescript
public createPermissionSet(input: SsoAdminCreatePermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest)

---

##### `deleteAccountAssignment` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.deleteAccountAssignment"></a>

```typescript
public deleteAccountAssignment(input: SsoAdminDeleteAccountAssignmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest)

---

##### `deleteInlinePolicyFromPermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.deleteInlinePolicyFromPermissionSet"></a>

```typescript
public deleteInlinePolicyFromPermissionSet(input: SsoAdminDeleteInlinePolicyFromPermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDeleteInlinePolicyFromPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDeleteInlinePolicyFromPermissionSetRequest)

---

##### `deleteInstanceAccessControlAttributeConfiguration` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.deleteInstanceAccessControlAttributeConfiguration"></a>

```typescript
public deleteInstanceAccessControlAttributeConfiguration(input: SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest)

---

##### `deletePermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.deletePermissionSet"></a>

```typescript
public deletePermissionSet(input: SsoAdminDeletePermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDeletePermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDeletePermissionSetRequest)

---

##### `describeAccountAssignmentCreationStatus` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.describeAccountAssignmentCreationStatus"></a>

```typescript
public describeAccountAssignmentCreationStatus(input: SsoAdminDescribeAccountAssignmentCreationStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusRequest)

---

##### `describeAccountAssignmentDeletionStatus` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.describeAccountAssignmentDeletionStatus"></a>

```typescript
public describeAccountAssignmentDeletionStatus(input: SsoAdminDescribeAccountAssignmentDeletionStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusRequest)

---

##### `describeInstanceAccessControlAttributeConfiguration` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.describeInstanceAccessControlAttributeConfiguration"></a>

```typescript
public describeInstanceAccessControlAttributeConfiguration(input: SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest)

---

##### `describePermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.describePermissionSet"></a>

```typescript
public describePermissionSet(input: SsoAdminDescribePermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetRequest)

---

##### `describePermissionSetProvisioningStatus` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.describePermissionSetProvisioningStatus"></a>

```typescript
public describePermissionSetProvisioningStatus(input: SsoAdminDescribePermissionSetProvisioningStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusRequest)

---

##### `detachManagedPolicyFromPermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.detachManagedPolicyFromPermissionSet"></a>

```typescript
public detachManagedPolicyFromPermissionSet(input: SsoAdminDetachManagedPolicyFromPermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDetachManagedPolicyFromPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDetachManagedPolicyFromPermissionSetRequest)

---

##### `fetchInlinePolicyForPermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.fetchInlinePolicyForPermissionSet"></a>

```typescript
public fetchInlinePolicyForPermissionSet(input: SsoAdminGetInlinePolicyForPermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminGetInlinePolicyForPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminGetInlinePolicyForPermissionSetRequest)

---

##### `listAccountAssignmentCreationStatus` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.listAccountAssignmentCreationStatus"></a>

```typescript
public listAccountAssignmentCreationStatus(input: SsoAdminListAccountAssignmentCreationStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusRequest)

---

##### `listAccountAssignmentDeletionStatus` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.listAccountAssignmentDeletionStatus"></a>

```typescript
public listAccountAssignmentDeletionStatus(input: SsoAdminListAccountAssignmentDeletionStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusRequest)

---

##### `listAccountAssignments` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.listAccountAssignments"></a>

```typescript
public listAccountAssignments(input: SsoAdminListAccountAssignmentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsRequest)

---

##### `listAccountsForProvisionedPermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.listAccountsForProvisionedPermissionSet"></a>

```typescript
public listAccountsForProvisionedPermissionSet(input: SsoAdminListAccountsForProvisionedPermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest)

---

##### `listInstances` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.listInstances"></a>

```typescript
public listInstances(input: SsoAdminListInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListInstancesRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListInstancesRequest)

---

##### `listManagedPoliciesInPermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.listManagedPoliciesInPermissionSet"></a>

```typescript
public listManagedPoliciesInPermissionSet(input: SsoAdminListManagedPoliciesInPermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetRequest)

---

##### `listPermissionSetProvisioningStatus` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.listPermissionSetProvisioningStatus"></a>

```typescript
public listPermissionSetProvisioningStatus(input: SsoAdminListPermissionSetProvisioningStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusRequest)

---

##### `listPermissionSets` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.listPermissionSets"></a>

```typescript
public listPermissionSets(input: SsoAdminListPermissionSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsRequest)

---

##### `listPermissionSetsProvisionedToAccount` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.listPermissionSetsProvisionedToAccount"></a>

```typescript
public listPermissionSetsProvisionedToAccount(input: SsoAdminListPermissionSetsProvisionedToAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: SsoAdminListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceRequest)

---

##### `provisionPermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.provisionPermissionSet"></a>

```typescript
public provisionPermissionSet(input: SsoAdminProvisionPermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest)

---

##### `putInlinePolicyToPermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.putInlinePolicyToPermissionSet"></a>

```typescript
public putInlinePolicyToPermissionSet(input: SsoAdminPutInlinePolicyToPermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminPutInlinePolicyToPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminPutInlinePolicyToPermissionSetRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.tagResource"></a>

```typescript
public tagResource(input: SsoAdminTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminTagResourceRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.untagResource"></a>

```typescript
public untagResource(input: SsoAdminUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminUntagResourceRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminUntagResourceRequest)

---

##### `updateInstanceAccessControlAttributeConfiguration` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.updateInstanceAccessControlAttributeConfiguration"></a>

```typescript
public updateInstanceAccessControlAttributeConfiguration(input: SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest)

---

##### `updatePermissionSet` <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.updatePermissionSet"></a>

```typescript
public updatePermissionSet(input: SsoAdminUpdatePermissionSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminUpdatePermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminUpdatePermissionSetRequest)

---




## Structs <a name="Structs"></a>

### SsoAdminAccessControlAttribute <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminAccessControlAttribute: ssoadmin.SsoAdminAccessControlAttribute = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttribute.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttribute.property.value"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttributeValue`](#aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttributeValue)

---

### SsoAdminAccessControlAttributeValue <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttributeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminAccessControlAttributeValue: ssoadmin.SsoAdminAccessControlAttributeValue = { ... }
```

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttributeValue.property.source"></a>

- *Type:* `string`[]

---

### SsoAdminAccountAssignment <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminAccountAssignment: ssoadmin.SsoAdminAccountAssignment = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignment.property.accountId"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignment.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignment.property.principalId"></a>

- *Type:* `string`

---

##### `principalType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignment.property.principalType"></a>

- *Type:* `string`

---

### SsoAdminAccountAssignmentOperationStatus <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminAccountAssignmentOperationStatus: ssoadmin.SsoAdminAccountAssignmentOperationStatus = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus.property.createdDate"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus.property.principalId"></a>

- *Type:* `string`

---

##### `principalType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus.property.principalType"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus.property.status"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus.property.targetId"></a>

- *Type:* `string`

---

##### `targetType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus.property.targetType"></a>

- *Type:* `string`

---

### SsoAdminAccountAssignmentOperationStatusMetadata <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminAccountAssignmentOperationStatusMetadata: ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata.property.createdDate"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata.property.status"></a>

- *Type:* `string`

---

### SsoAdminAttachedManagedPolicy <a name="aws-cdk-sdk.ssoadmin.SsoAdminAttachedManagedPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminAttachedManagedPolicy: ssoadmin.SsoAdminAttachedManagedPolicy = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAttachedManagedPolicy.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAttachedManagedPolicy.property.name"></a>

- *Type:* `string`

---

### SsoAdminAttachManagedPolicyToPermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminAttachManagedPolicyToPermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminAttachManagedPolicyToPermissionSetRequest: ssoadmin.SsoAdminAttachManagedPolicyToPermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAttachManagedPolicyToPermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `managedPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAttachManagedPolicyToPermissionSetRequest.property.managedPolicyArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminAttachManagedPolicyToPermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

### SsoAdminAttachManagedPolicyToPermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminAttachManagedPolicyToPermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminAttachManagedPolicyToPermissionSetResponse: ssoadmin.SsoAdminAttachManagedPolicyToPermissionSetResponse = { ... }
```

### SsoAdminCreateAccountAssignmentRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminCreateAccountAssignmentRequest: ssoadmin.SsoAdminCreateAccountAssignmentRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest.property.principalId"></a>

- *Type:* `string`

---

##### `principalType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest.property.principalType"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest.property.targetId"></a>

- *Type:* `string`

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest.property.targetType"></a>

- *Type:* `string`

---

### SsoAdminCreateAccountAssignmentResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminCreateAccountAssignmentResponse: ssoadmin.SsoAdminCreateAccountAssignmentResponse = { ... }
```

##### `accountAssignmentCreationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentResponse.property.accountAssignmentCreationStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus`](#aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus)

---

### SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminCreateInstanceAccessControlAttributeConfigurationRequest: ssoadmin.SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest = { ... }
```

##### `instanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest.property.instanceAccessControlAttributeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminInstanceAccessControlAttributeConfiguration`](#aws-cdk-sdk.ssoadmin.SsoAdminInstanceAccessControlAttributeConfiguration)

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest.property.instanceArn"></a>

- *Type:* `string`

---

### SsoAdminCreateInstanceAccessControlAttributeConfigurationResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreateInstanceAccessControlAttributeConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminCreateInstanceAccessControlAttributeConfigurationResponse: ssoadmin.SsoAdminCreateInstanceAccessControlAttributeConfigurationResponse = { ... }
```

### SsoAdminCreatePermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminCreatePermissionSetRequest: ssoadmin.SsoAdminCreatePermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest.property.description"></a>

- *Type:* `string`

---

##### `relayState`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest.property.relayState"></a>

- *Type:* `string`

---

##### `sessionDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest.property.sessionDuration"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminTag`](#aws-cdk-sdk.ssoadmin.SsoAdminTag)[]

---

### SsoAdminCreatePermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminCreatePermissionSetResponse: ssoadmin.SsoAdminCreatePermissionSetResponse = { ... }
```

##### `permissionSet`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetResponse.property.permissionSet"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet`](#aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet)

---

### SsoAdminDeleteAccountAssignmentRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDeleteAccountAssignmentRequest: ssoadmin.SsoAdminDeleteAccountAssignmentRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest.property.principalId"></a>

- *Type:* `string`

---

##### `principalType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest.property.principalType"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest.property.targetId"></a>

- *Type:* `string`

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest.property.targetType"></a>

- *Type:* `string`

---

### SsoAdminDeleteAccountAssignmentResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDeleteAccountAssignmentResponse: ssoadmin.SsoAdminDeleteAccountAssignmentResponse = { ... }
```

##### `accountAssignmentDeletionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentResponse.property.accountAssignmentDeletionStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus`](#aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus)

---

### SsoAdminDeleteInlinePolicyFromPermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteInlinePolicyFromPermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDeleteInlinePolicyFromPermissionSetRequest: ssoadmin.SsoAdminDeleteInlinePolicyFromPermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteInlinePolicyFromPermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteInlinePolicyFromPermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

### SsoAdminDeleteInlinePolicyFromPermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteInlinePolicyFromPermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDeleteInlinePolicyFromPermissionSetResponse: ssoadmin.SsoAdminDeleteInlinePolicyFromPermissionSetResponse = { ... }
```

### SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDeleteInstanceAccessControlAttributeConfigurationRequest: ssoadmin.SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest.property.instanceArn"></a>

- *Type:* `string`

---

### SsoAdminDeleteInstanceAccessControlAttributeConfigurationResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeleteInstanceAccessControlAttributeConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDeleteInstanceAccessControlAttributeConfigurationResponse: ssoadmin.SsoAdminDeleteInstanceAccessControlAttributeConfigurationResponse = { ... }
```

### SsoAdminDeletePermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeletePermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDeletePermissionSetRequest: ssoadmin.SsoAdminDeletePermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeletePermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeletePermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

### SsoAdminDeletePermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminDeletePermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDeletePermissionSetResponse: ssoadmin.SsoAdminDeletePermissionSetResponse = { ... }
```

### SsoAdminDescribeAccountAssignmentCreationStatusRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDescribeAccountAssignmentCreationStatusRequest: ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusRequest = { ... }
```

##### `accountAssignmentCreationRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusRequest.property.accountAssignmentCreationRequestId"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusRequest.property.instanceArn"></a>

- *Type:* `string`

---

### SsoAdminDescribeAccountAssignmentCreationStatusResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDescribeAccountAssignmentCreationStatusResponse: ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusResponse = { ... }
```

##### `accountAssignmentCreationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusResponse.property.accountAssignmentCreationStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus`](#aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus)

---

### SsoAdminDescribeAccountAssignmentDeletionStatusRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDescribeAccountAssignmentDeletionStatusRequest: ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusRequest = { ... }
```

##### `accountAssignmentDeletionRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusRequest.property.accountAssignmentDeletionRequestId"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusRequest.property.instanceArn"></a>

- *Type:* `string`

---

### SsoAdminDescribeAccountAssignmentDeletionStatusResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDescribeAccountAssignmentDeletionStatusResponse: ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusResponse = { ... }
```

##### `accountAssignmentDeletionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusResponse.property.accountAssignmentDeletionStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus`](#aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatus)

---

### SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDescribeInstanceAccessControlAttributeConfigurationRequest: ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest.property.instanceArn"></a>

- *Type:* `string`

---

### SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDescribeInstanceAccessControlAttributeConfigurationResponse: ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse = { ... }
```

##### `instanceAccessControlAttributeConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse.property.instanceAccessControlAttributeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminInstanceAccessControlAttributeConfiguration`](#aws-cdk-sdk.ssoadmin.SsoAdminInstanceAccessControlAttributeConfiguration)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse.property.statusReason"></a>

- *Type:* `string`

---

### SsoAdminDescribePermissionSetProvisioningStatusRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDescribePermissionSetProvisioningStatusRequest: ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `provisionPermissionSetRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusRequest.property.provisionPermissionSetRequestId"></a>

- *Type:* `string`

---

### SsoAdminDescribePermissionSetProvisioningStatusResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDescribePermissionSetProvisioningStatusResponse: ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusResponse = { ... }
```

##### `permissionSetProvisioningStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusResponse.property.permissionSetProvisioningStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus`](#aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus)

---

### SsoAdminDescribePermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDescribePermissionSetRequest: ssoadmin.SsoAdminDescribePermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

### SsoAdminDescribePermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDescribePermissionSetResponse: ssoadmin.SsoAdminDescribePermissionSetResponse = { ... }
```

##### `permissionSet`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetResponse.property.permissionSet"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet`](#aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet)

---

### SsoAdminDetachManagedPolicyFromPermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminDetachManagedPolicyFromPermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDetachManagedPolicyFromPermissionSetRequest: ssoadmin.SsoAdminDetachManagedPolicyFromPermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDetachManagedPolicyFromPermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `managedPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDetachManagedPolicyFromPermissionSetRequest.property.managedPolicyArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminDetachManagedPolicyFromPermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

### SsoAdminDetachManagedPolicyFromPermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminDetachManagedPolicyFromPermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminDetachManagedPolicyFromPermissionSetResponse: ssoadmin.SsoAdminDetachManagedPolicyFromPermissionSetResponse = { ... }
```

### SsoAdminGetInlinePolicyForPermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminGetInlinePolicyForPermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminGetInlinePolicyForPermissionSetRequest: ssoadmin.SsoAdminGetInlinePolicyForPermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminGetInlinePolicyForPermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminGetInlinePolicyForPermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

### SsoAdminGetInlinePolicyForPermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminGetInlinePolicyForPermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminGetInlinePolicyForPermissionSetResponse: ssoadmin.SsoAdminGetInlinePolicyForPermissionSetResponse = { ... }
```

##### `inlinePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminGetInlinePolicyForPermissionSetResponse.property.inlinePolicy"></a>

- *Type:* `string`

---

### SsoAdminInstanceAccessControlAttributeConfiguration <a name="aws-cdk-sdk.ssoadmin.SsoAdminInstanceAccessControlAttributeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminInstanceAccessControlAttributeConfiguration: ssoadmin.SsoAdminInstanceAccessControlAttributeConfiguration = { ... }
```

##### `accessControlAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminInstanceAccessControlAttributeConfiguration.property.accessControlAttributes"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttribute`](#aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttribute)[]

---

### SsoAdminInstanceMetadata <a name="aws-cdk-sdk.ssoadmin.SsoAdminInstanceMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminInstanceMetadata: ssoadmin.SsoAdminInstanceMetadata = { ... }
```

##### `identityStoreId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminInstanceMetadata.property.identityStoreId"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminInstanceMetadata.property.instanceArn"></a>

- *Type:* `string`

---

### SsoAdminListAccountAssignmentCreationStatusRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListAccountAssignmentCreationStatusRequest: ssoadmin.SsoAdminListAccountAssignmentCreationStatusRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminOperationStatusFilter`](#aws-cdk-sdk.ssoadmin.SsoAdminOperationStatusFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListAccountAssignmentCreationStatusResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListAccountAssignmentCreationStatusResponse: ssoadmin.SsoAdminListAccountAssignmentCreationStatusResponse = { ... }
```

##### `accountAssignmentsCreationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusResponse.property.accountAssignmentsCreationStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata`](#aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusResponse.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListAccountAssignmentDeletionStatusRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListAccountAssignmentDeletionStatusRequest: ssoadmin.SsoAdminListAccountAssignmentDeletionStatusRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminOperationStatusFilter`](#aws-cdk-sdk.ssoadmin.SsoAdminOperationStatusFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListAccountAssignmentDeletionStatusResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListAccountAssignmentDeletionStatusResponse: ssoadmin.SsoAdminListAccountAssignmentDeletionStatusResponse = { ... }
```

##### `accountAssignmentsDeletionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusResponse.property.accountAssignmentsDeletionStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata`](#aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusResponse.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListAccountAssignmentsRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListAccountAssignmentsRequest: ssoadmin.SsoAdminListAccountAssignmentsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListAccountAssignmentsResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListAccountAssignmentsResponse: ssoadmin.SsoAdminListAccountAssignmentsResponse = { ... }
```

##### `accountAssignments`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsResponse.property.accountAssignments"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignment`](#aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListAccountsForProvisionedPermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListAccountsForProvisionedPermissionSetRequest: ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `provisioningStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest.property.provisioningStatus"></a>

- *Type:* `string`

---

### SsoAdminListAccountsForProvisionedPermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListAccountsForProvisionedPermissionSetResponse: ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetResponse = { ... }
```

##### `accountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetResponse.property.accountIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetResponse.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListInstancesRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminListInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListInstancesRequest: ssoadmin.SsoAdminListInstancesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListInstancesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListInstancesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListInstancesResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminListInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListInstancesResponse: ssoadmin.SsoAdminListInstancesResponse = { ... }
```

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListInstancesResponse.property.instances"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminInstanceMetadata`](#aws-cdk-sdk.ssoadmin.SsoAdminInstanceMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListInstancesResponse.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListManagedPoliciesInPermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListManagedPoliciesInPermissionSetRequest: ssoadmin.SsoAdminListManagedPoliciesInPermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListManagedPoliciesInPermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListManagedPoliciesInPermissionSetResponse: ssoadmin.SsoAdminListManagedPoliciesInPermissionSetResponse = { ... }
```

##### `attachedManagedPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetResponse.property.attachedManagedPolicies"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAttachedManagedPolicy`](#aws-cdk-sdk.ssoadmin.SsoAdminAttachedManagedPolicy)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetResponse.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListPermissionSetProvisioningStatusRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListPermissionSetProvisioningStatusRequest: ssoadmin.SsoAdminListPermissionSetProvisioningStatusRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminOperationStatusFilter`](#aws-cdk-sdk.ssoadmin.SsoAdminOperationStatusFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListPermissionSetProvisioningStatusResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListPermissionSetProvisioningStatusResponse: ssoadmin.SsoAdminListPermissionSetProvisioningStatusResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `permissionSetsProvisioningStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusResponse.property.permissionSetsProvisioningStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatusMetadata`](#aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatusMetadata)[]

---

### SsoAdminListPermissionSetsProvisionedToAccountRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListPermissionSetsProvisionedToAccountRequest: ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest.property.accountId"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `provisioningStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest.property.provisioningStatus"></a>

- *Type:* `string`

---

### SsoAdminListPermissionSetsProvisionedToAccountResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListPermissionSetsProvisionedToAccountResponse: ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `permissionSets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountResponse.property.permissionSets"></a>

- *Type:* `string`[]

---

### SsoAdminListPermissionSetsRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListPermissionSetsRequest: ssoadmin.SsoAdminListPermissionSetsRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListPermissionSetsResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListPermissionSetsResponse: ssoadmin.SsoAdminListPermissionSetsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `permissionSets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsResponse.property.permissionSets"></a>

- *Type:* `string`[]

---

### SsoAdminListTagsForResourceRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListTagsForResourceRequest: ssoadmin.SsoAdminListTagsForResourceRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsoAdminListTagsForResourceResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminListTagsForResourceResponse: ssoadmin.SsoAdminListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminTag`](#aws-cdk-sdk.ssoadmin.SsoAdminTag)[]

---

### SsoAdminOperationStatusFilter <a name="aws-cdk-sdk.ssoadmin.SsoAdminOperationStatusFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminOperationStatusFilter: ssoadmin.SsoAdminOperationStatusFilter = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminOperationStatusFilter.property.status"></a>

- *Type:* `string`

---

### SsoAdminPermissionSet <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminPermissionSet: ssoadmin.SsoAdminPermissionSet = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet.property.name"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `relayState`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet.property.relayState"></a>

- *Type:* `string`

---

##### `sessionDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSet.property.sessionDuration"></a>

- *Type:* `string`

---

### SsoAdminPermissionSetProvisioningStatus <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminPermissionSetProvisioningStatus: ssoadmin.SsoAdminPermissionSetProvisioningStatus = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus.property.accountId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus.property.createdDate"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus.property.status"></a>

- *Type:* `string`

---

### SsoAdminPermissionSetProvisioningStatusMetadata <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatusMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminPermissionSetProvisioningStatusMetadata: ssoadmin.SsoAdminPermissionSetProvisioningStatusMetadata = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatusMetadata.property.createdDate"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatusMetadata.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatusMetadata.property.status"></a>

- *Type:* `string`

---

### SsoAdminProvisionPermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminProvisionPermissionSetRequest: ssoadmin.SsoAdminProvisionPermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest.property.targetType"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest.property.targetId"></a>

- *Type:* `string`

---

### SsoAdminProvisionPermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminProvisionPermissionSetResponse: ssoadmin.SsoAdminProvisionPermissionSetResponse = { ... }
```

##### `permissionSetProvisioningStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetResponse.property.permissionSetProvisioningStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus`](#aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatus)

---

### SsoAdminPutInlinePolicyToPermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminPutInlinePolicyToPermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminPutInlinePolicyToPermissionSetRequest: ssoadmin.SsoAdminPutInlinePolicyToPermissionSetRequest = { ... }
```

##### `inlinePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPutInlinePolicyToPermissionSetRequest.property.inlinePolicy"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPutInlinePolicyToPermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminPutInlinePolicyToPermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

### SsoAdminPutInlinePolicyToPermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminPutInlinePolicyToPermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminPutInlinePolicyToPermissionSetResponse: ssoadmin.SsoAdminPutInlinePolicyToPermissionSetResponse = { ... }
```

### SsoAdminTag <a name="aws-cdk-sdk.ssoadmin.SsoAdminTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminTag: ssoadmin.SsoAdminTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminTag.property.value"></a>

- *Type:* `string`

---

### SsoAdminTagResourceRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminTagResourceRequest: ssoadmin.SsoAdminTagResourceRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminTagResourceRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminTag`](#aws-cdk-sdk.ssoadmin.SsoAdminTag)[]

---

### SsoAdminTagResourceResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminTagResourceResponse: ssoadmin.SsoAdminTagResourceResponse = { ... }
```

### SsoAdminUntagResourceRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminUntagResourceRequest: ssoadmin.SsoAdminUntagResourceRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminUntagResourceRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### SsoAdminUntagResourceResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminUntagResourceResponse: ssoadmin.SsoAdminUntagResourceResponse = { ... }
```

### SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminUpdateInstanceAccessControlAttributeConfigurationRequest: ssoadmin.SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest = { ... }
```

##### `instanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest.property.instanceAccessControlAttributeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminInstanceAccessControlAttributeConfiguration`](#aws-cdk-sdk.ssoadmin.SsoAdminInstanceAccessControlAttributeConfiguration)

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest.property.instanceArn"></a>

- *Type:* `string`

---

### SsoAdminUpdateInstanceAccessControlAttributeConfigurationResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdateInstanceAccessControlAttributeConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminUpdateInstanceAccessControlAttributeConfigurationResponse: ssoadmin.SsoAdminUpdateInstanceAccessControlAttributeConfigurationResponse = { ... }
```

### SsoAdminUpdatePermissionSetRequest <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdatePermissionSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminUpdatePermissionSetRequest: ssoadmin.SsoAdminUpdatePermissionSetRequest = { ... }
```

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdatePermissionSetRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdatePermissionSetRequest.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdatePermissionSetRequest.property.description"></a>

- *Type:* `string`

---

##### `relayState`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdatePermissionSetRequest.property.relayState"></a>

- *Type:* `string`

---

##### `sessionDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdatePermissionSetRequest.property.sessionDuration"></a>

- *Type:* `string`

---

### SsoAdminUpdatePermissionSetResponse <a name="aws-cdk-sdk.ssoadmin.SsoAdminUpdatePermissionSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

const ssoAdminUpdatePermissionSetResponse: ssoadmin.SsoAdminUpdatePermissionSetResponse = { ... }
```

## Classes <a name="Classes"></a>

### SSOAdminResponsesCreateAccountAssignment <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignment"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignment.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesCreateAccountAssignment(__scope: Construct, __resources: string[], __input: SsoAdminCreateAccountAssignmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest)

---



#### Properties <a name="Properties"></a>

##### `accountAssignmentCreationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignment.property.accountAssignmentCreationStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus`](#aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus)

---


### SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus(__scope: Construct, __resources: string[], __input: SsoAdminCreateAccountAssignmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminCreateAccountAssignmentRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.property.createdDate"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.property.principalId"></a>

- *Type:* `string`

---

##### `principalType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.property.principalType"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.property.status"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.property.targetId"></a>

- *Type:* `string`

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus.property.targetType"></a>

- *Type:* `string`

---


### SSOAdminResponsesCreatePermissionSet <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSet"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSet.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesCreatePermissionSet(__scope: Construct, __resources: string[], __input: SsoAdminCreatePermissionSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionSet`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSet.property.permissionSet"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet`](#aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet)

---


### SSOAdminResponsesCreatePermissionSetPermissionSet <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet(__scope: Construct, __resources: string[], __input: SsoAdminCreatePermissionSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminCreatePermissionSetRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet.property.name"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `relayState`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet.property.relayState"></a>

- *Type:* `string`

---

##### `sessionDuration`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesCreatePermissionSetPermissionSet.property.sessionDuration"></a>

- *Type:* `string`

---


### SSOAdminResponsesDeleteAccountAssignment <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignment"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignment.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDeleteAccountAssignment(__scope: Construct, __resources: string[], __input: SsoAdminDeleteAccountAssignmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest)

---



#### Properties <a name="Properties"></a>

##### `accountAssignmentDeletionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignment.property.accountAssignmentDeletionStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus`](#aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus)

---


### SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus(__scope: Construct, __resources: string[], __input: SsoAdminDeleteAccountAssignmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDeleteAccountAssignmentRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.property.createdDate"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.property.principalId"></a>

- *Type:* `string`

---

##### `principalType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.property.principalType"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.property.status"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.property.targetId"></a>

- *Type:* `string`

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus.property.targetType"></a>

- *Type:* `string`

---


### SSOAdminResponsesDescribeAccountAssignmentCreationStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatus(__scope: Construct, __resources: string[], __input: SsoAdminDescribeAccountAssignmentCreationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `accountAssignmentCreationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatus.property.accountAssignmentCreationStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus`](#aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus)

---


### SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus(__scope: Construct, __resources: string[], __input: SsoAdminDescribeAccountAssignmentCreationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentCreationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.property.createdDate"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.property.principalId"></a>

- *Type:* `string`

---

##### `principalType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.property.principalType"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.property.status"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.property.targetId"></a>

- *Type:* `string`

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus.property.targetType"></a>

- *Type:* `string`

---


### SSOAdminResponsesDescribeAccountAssignmentDeletionStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatus(__scope: Construct, __resources: string[], __input: SsoAdminDescribeAccountAssignmentDeletionStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `accountAssignmentDeletionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatus.property.accountAssignmentDeletionStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus`](#aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus)

---


### SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus(__scope: Construct, __resources: string[], __input: SsoAdminDescribeAccountAssignmentDeletionStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribeAccountAssignmentDeletionStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.property.createdDate"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.property.principalId"></a>

- *Type:* `string`

---

##### `principalType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.property.principalType"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.property.status"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.property.targetId"></a>

- *Type:* `string`

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus.property.targetType"></a>

- *Type:* `string`

---


### SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration(__scope: Construct, __resources: string[], __input: SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration`](#aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration.property.statusReason"></a>

- *Type:* `string`

---


### SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration(__scope: Construct, __resources: string[], __input: SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `accessControlAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.property.accessControlAttributes"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttribute`](#aws-cdk-sdk.ssoadmin.SsoAdminAccessControlAttribute)[]

---


### SSOAdminResponsesDescribePermissionSet <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSet"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSet.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDescribePermissionSet(__scope: Construct, __resources: string[], __input: SsoAdminDescribePermissionSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionSet`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSet.property.permissionSet"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet`](#aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet)

---


### SSOAdminResponsesDescribePermissionSetPermissionSet <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet(__scope: Construct, __resources: string[], __input: SsoAdminDescribePermissionSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet.property.name"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `relayState`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet.property.relayState"></a>

- *Type:* `string`

---

##### `sessionDuration`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetPermissionSet.property.sessionDuration"></a>

- *Type:* `string`

---


### SSOAdminResponsesDescribePermissionSetProvisioningStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatus(__scope: Construct, __resources: string[], __input: SsoAdminDescribePermissionSetProvisioningStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionSetProvisioningStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatus.property.permissionSetProvisioningStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus`](#aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus)

---


### SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus(__scope: Construct, __resources: string[], __input: SsoAdminDescribePermissionSetProvisioningStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminDescribePermissionSetProvisioningStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus.property.accountId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus.property.createdDate"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus.property.status"></a>

- *Type:* `string`

---


### SSOAdminResponsesFetchInlinePolicyForPermissionSet <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesFetchInlinePolicyForPermissionSet"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesFetchInlinePolicyForPermissionSet.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesFetchInlinePolicyForPermissionSet(__scope: Construct, __resources: string[], __input: SsoAdminGetInlinePolicyForPermissionSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesFetchInlinePolicyForPermissionSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesFetchInlinePolicyForPermissionSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesFetchInlinePolicyForPermissionSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminGetInlinePolicyForPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminGetInlinePolicyForPermissionSetRequest)

---



#### Properties <a name="Properties"></a>

##### `inlinePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesFetchInlinePolicyForPermissionSet.property.inlinePolicy"></a>

- *Type:* `string`

---


### SSOAdminResponsesListAccountAssignmentCreationStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentCreationStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentCreationStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesListAccountAssignmentCreationStatus(__scope: Construct, __resources: string[], __input: SsoAdminListAccountAssignmentCreationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentCreationStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentCreationStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentCreationStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentCreationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `accountAssignmentsCreationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentCreationStatus.property.accountAssignmentsCreationStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata`](#aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentCreationStatus.property.nextToken"></a>

- *Type:* `string`

---


### SSOAdminResponsesListAccountAssignmentDeletionStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentDeletionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentDeletionStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesListAccountAssignmentDeletionStatus(__scope: Construct, __resources: string[], __input: SsoAdminListAccountAssignmentDeletionStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentDeletionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentDeletionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentDeletionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentDeletionStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `accountAssignmentsDeletionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentDeletionStatus.property.accountAssignmentsDeletionStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata`](#aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignmentOperationStatusMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignmentDeletionStatus.property.nextToken"></a>

- *Type:* `string`

---


### SSOAdminResponsesListAccountAssignments <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignments"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignments.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesListAccountAssignments(__scope: Construct, __resources: string[], __input: SsoAdminListAccountAssignmentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListAccountAssignmentsRequest)

---



#### Properties <a name="Properties"></a>

##### `accountAssignments`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignments.property.accountAssignments"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignment`](#aws-cdk-sdk.ssoadmin.SsoAdminAccountAssignment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountAssignments.property.nextToken"></a>

- *Type:* `string`

---


### SSOAdminResponsesListAccountsForProvisionedPermissionSet <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountsForProvisionedPermissionSet"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountsForProvisionedPermissionSet.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesListAccountsForProvisionedPermissionSet(__scope: Construct, __resources: string[], __input: SsoAdminListAccountsForProvisionedPermissionSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountsForProvisionedPermissionSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountsForProvisionedPermissionSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountsForProvisionedPermissionSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListAccountsForProvisionedPermissionSetRequest)

---



#### Properties <a name="Properties"></a>

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountsForProvisionedPermissionSet.property.accountIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListAccountsForProvisionedPermissionSet.property.nextToken"></a>

- *Type:* `string`

---


### SSOAdminResponsesListInstances <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListInstances"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListInstances.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesListInstances(__scope: Construct, __resources: string[], __input: SsoAdminListInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListInstancesRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListInstances.property.instances"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminInstanceMetadata`](#aws-cdk-sdk.ssoadmin.SsoAdminInstanceMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListInstances.property.nextToken"></a>

- *Type:* `string`

---


### SSOAdminResponsesListManagedPoliciesInPermissionSet <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListManagedPoliciesInPermissionSet"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListManagedPoliciesInPermissionSet.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesListManagedPoliciesInPermissionSet(__scope: Construct, __resources: string[], __input: SsoAdminListManagedPoliciesInPermissionSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListManagedPoliciesInPermissionSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListManagedPoliciesInPermissionSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListManagedPoliciesInPermissionSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListManagedPoliciesInPermissionSetRequest)

---



#### Properties <a name="Properties"></a>

##### `attachedManagedPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListManagedPoliciesInPermissionSet.property.attachedManagedPolicies"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminAttachedManagedPolicy`](#aws-cdk-sdk.ssoadmin.SsoAdminAttachedManagedPolicy)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListManagedPoliciesInPermissionSet.property.nextToken"></a>

- *Type:* `string`

---


### SSOAdminResponsesListPermissionSetProvisioningStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetProvisioningStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetProvisioningStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesListPermissionSetProvisioningStatus(__scope: Construct, __resources: string[], __input: SsoAdminListPermissionSetProvisioningStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetProvisioningStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetProvisioningStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetProvisioningStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetProvisioningStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetProvisioningStatus.property.nextToken"></a>

- *Type:* `string`

---

##### `permissionSetsProvisioningStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetProvisioningStatus.property.permissionSetsProvisioningStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatusMetadata`](#aws-cdk-sdk.ssoadmin.SsoAdminPermissionSetProvisioningStatusMetadata)[]

---


### SSOAdminResponsesListPermissionSets <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSets"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSets.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesListPermissionSets(__scope: Construct, __resources: string[], __input: SsoAdminListPermissionSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSets.property.nextToken"></a>

- *Type:* `string`

---

##### `permissionSets`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSets.property.permissionSets"></a>

- *Type:* `string`[]

---


### SSOAdminResponsesListPermissionSetsProvisionedToAccount <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetsProvisionedToAccount"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetsProvisionedToAccount.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesListPermissionSetsProvisionedToAccount(__scope: Construct, __resources: string[], __input: SsoAdminListPermissionSetsProvisionedToAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetsProvisionedToAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetsProvisionedToAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetsProvisionedToAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListPermissionSetsProvisionedToAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetsProvisionedToAccount.property.nextToken"></a>

- *Type:* `string`

---

##### `permissionSets`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListPermissionSetsProvisionedToAccount.property.permissionSets"></a>

- *Type:* `string`[]

---


### SSOAdminResponsesListTagsForResource <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListTagsForResource.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: SsoAdminListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminTag`](#aws-cdk-sdk.ssoadmin.SsoAdminTag)[]

---


### SSOAdminResponsesProvisionPermissionSet <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSet"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSet.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesProvisionPermissionSet(__scope: Construct, __resources: string[], __input: SsoAdminProvisionPermissionSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionSetProvisioningStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSet.property.permissionSetProvisioningStatus"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus`](#aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus)

---


### SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus.Initializer"></a>

```typescript
import { ssoadmin } from 'aws-cdk-sdk'

new ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus(__scope: Construct, __resources: string[], __input: SsoAdminProvisionPermissionSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest`](#aws-cdk-sdk.ssoadmin.SsoAdminProvisionPermissionSetRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus.property.accountId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus.property.createdDate"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `permissionSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus.property.permissionSetArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssoadmin.SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus.property.status"></a>

- *Type:* `string`

---



