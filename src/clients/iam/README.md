# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IamClient <a name="aws-cdk-sdk.iam.IamClient"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IamClient.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IamClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addClientIdToOpenIdConnectProvider` <a name="aws-cdk-sdk.iam.IamClient.addClientIdToOpenIdConnectProvider"></a>

```typescript
public addClientIdToOpenIdConnectProvider(input: IamAddClientIdToOpenIdConnectProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAddClientIdToOpenIdConnectProviderRequest`](#aws-cdk-sdk.iam.IamAddClientIdToOpenIdConnectProviderRequest)

---

##### `addRoleToInstanceProfile` <a name="aws-cdk-sdk.iam.IamClient.addRoleToInstanceProfile"></a>

```typescript
public addRoleToInstanceProfile(input: IamAddRoleToInstanceProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAddRoleToInstanceProfileRequest`](#aws-cdk-sdk.iam.IamAddRoleToInstanceProfileRequest)

---

##### `addUserToGroup` <a name="aws-cdk-sdk.iam.IamClient.addUserToGroup"></a>

```typescript
public addUserToGroup(input: IamAddUserToGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAddUserToGroupRequest`](#aws-cdk-sdk.iam.IamAddUserToGroupRequest)

---

##### `attachGroupPolicy` <a name="aws-cdk-sdk.iam.IamClient.attachGroupPolicy"></a>

```typescript
public attachGroupPolicy(input: IamAttachGroupPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachGroupPolicyRequest`](#aws-cdk-sdk.iam.IamAttachGroupPolicyRequest)

---

##### `attachRolePolicy` <a name="aws-cdk-sdk.iam.IamClient.attachRolePolicy"></a>

```typescript
public attachRolePolicy(input: IamAttachRolePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachRolePolicyRequest`](#aws-cdk-sdk.iam.IamAttachRolePolicyRequest)

---

##### `attachUserPolicy` <a name="aws-cdk-sdk.iam.IamClient.attachUserPolicy"></a>

```typescript
public attachUserPolicy(input: IamAttachUserPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachUserPolicyRequest`](#aws-cdk-sdk.iam.IamAttachUserPolicyRequest)

---

##### `changePassword` <a name="aws-cdk-sdk.iam.IamClient.changePassword"></a>

```typescript
public changePassword(input: IamChangePasswordRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamChangePasswordRequest`](#aws-cdk-sdk.iam.IamChangePasswordRequest)

---

##### `createAccessKey` <a name="aws-cdk-sdk.iam.IamClient.createAccessKey"></a>

```typescript
public createAccessKey(input: IamCreateAccessKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateAccessKeyRequest`](#aws-cdk-sdk.iam.IamCreateAccessKeyRequest)

---

##### `createAccountAlias` <a name="aws-cdk-sdk.iam.IamClient.createAccountAlias"></a>

```typescript
public createAccountAlias(input: IamCreateAccountAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateAccountAliasRequest`](#aws-cdk-sdk.iam.IamCreateAccountAliasRequest)

---

##### `createGroup` <a name="aws-cdk-sdk.iam.IamClient.createGroup"></a>

```typescript
public createGroup(input: IamCreateGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateGroupRequest`](#aws-cdk-sdk.iam.IamCreateGroupRequest)

---

##### `createInstanceProfile` <a name="aws-cdk-sdk.iam.IamClient.createInstanceProfile"></a>

```typescript
public createInstanceProfile(input: IamCreateInstanceProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateInstanceProfileRequest`](#aws-cdk-sdk.iam.IamCreateInstanceProfileRequest)

---

##### `createLoginProfile` <a name="aws-cdk-sdk.iam.IamClient.createLoginProfile"></a>

```typescript
public createLoginProfile(input: IamCreateLoginProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateLoginProfileRequest`](#aws-cdk-sdk.iam.IamCreateLoginProfileRequest)

---

##### `createOpenIdConnectProvider` <a name="aws-cdk-sdk.iam.IamClient.createOpenIdConnectProvider"></a>

```typescript
public createOpenIdConnectProvider(input: IamCreateOpenIdConnectProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateOpenIdConnectProviderRequest`](#aws-cdk-sdk.iam.IamCreateOpenIdConnectProviderRequest)

---

##### `createPolicy` <a name="aws-cdk-sdk.iam.IamClient.createPolicy"></a>

```typescript
public createPolicy(input: IamCreatePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreatePolicyRequest`](#aws-cdk-sdk.iam.IamCreatePolicyRequest)

---

##### `createPolicyVersion` <a name="aws-cdk-sdk.iam.IamClient.createPolicyVersion"></a>

```typescript
public createPolicyVersion(input: IamCreatePolicyVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreatePolicyVersionRequest`](#aws-cdk-sdk.iam.IamCreatePolicyVersionRequest)

---

##### `createRole` <a name="aws-cdk-sdk.iam.IamClient.createRole"></a>

```typescript
public createRole(input: IamCreateRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateRoleRequest`](#aws-cdk-sdk.iam.IamCreateRoleRequest)

---

##### `createSamlProvider` <a name="aws-cdk-sdk.iam.IamClient.createSamlProvider"></a>

```typescript
public createSamlProvider(input: IamCreateSamlProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateSamlProviderRequest`](#aws-cdk-sdk.iam.IamCreateSamlProviderRequest)

---

##### `createServiceLinkedRole` <a name="aws-cdk-sdk.iam.IamClient.createServiceLinkedRole"></a>

```typescript
public createServiceLinkedRole(input: IamCreateServiceLinkedRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest`](#aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest)

---

##### `createServiceSpecificCredential` <a name="aws-cdk-sdk.iam.IamClient.createServiceSpecificCredential"></a>

```typescript
public createServiceSpecificCredential(input: IamCreateServiceSpecificCredentialRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialRequest`](#aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialRequest)

---

##### `createUser` <a name="aws-cdk-sdk.iam.IamClient.createUser"></a>

```typescript
public createUser(input: IamCreateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateUserRequest`](#aws-cdk-sdk.iam.IamCreateUserRequest)

---

##### `createVirtualMfaDevice` <a name="aws-cdk-sdk.iam.IamClient.createVirtualMfaDevice"></a>

```typescript
public createVirtualMfaDevice(input: IamCreateVirtualMfaDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest`](#aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest)

---

##### `deactivateMfaDevice` <a name="aws-cdk-sdk.iam.IamClient.deactivateMfaDevice"></a>

```typescript
public deactivateMfaDevice(input: IamDeactivateMfaDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeactivateMfaDeviceRequest`](#aws-cdk-sdk.iam.IamDeactivateMfaDeviceRequest)

---

##### `deleteAccessKey` <a name="aws-cdk-sdk.iam.IamClient.deleteAccessKey"></a>

```typescript
public deleteAccessKey(input: IamDeleteAccessKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteAccessKeyRequest`](#aws-cdk-sdk.iam.IamDeleteAccessKeyRequest)

---

##### `deleteAccountAlias` <a name="aws-cdk-sdk.iam.IamClient.deleteAccountAlias"></a>

```typescript
public deleteAccountAlias(input: IamDeleteAccountAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteAccountAliasRequest`](#aws-cdk-sdk.iam.IamDeleteAccountAliasRequest)

---

##### `deleteAccountPasswordPolicy` <a name="aws-cdk-sdk.iam.IamClient.deleteAccountPasswordPolicy"></a>

```typescript
public deleteAccountPasswordPolicy()
```

##### `deleteGroup` <a name="aws-cdk-sdk.iam.IamClient.deleteGroup"></a>

```typescript
public deleteGroup(input: IamDeleteGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteGroupRequest`](#aws-cdk-sdk.iam.IamDeleteGroupRequest)

---

##### `deleteGroupPolicy` <a name="aws-cdk-sdk.iam.IamClient.deleteGroupPolicy"></a>

```typescript
public deleteGroupPolicy(input: IamDeleteGroupPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteGroupPolicyRequest`](#aws-cdk-sdk.iam.IamDeleteGroupPolicyRequest)

---

##### `deleteInstanceProfile` <a name="aws-cdk-sdk.iam.IamClient.deleteInstanceProfile"></a>

```typescript
public deleteInstanceProfile(input: IamDeleteInstanceProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteInstanceProfileRequest`](#aws-cdk-sdk.iam.IamDeleteInstanceProfileRequest)

---

##### `deleteLoginProfile` <a name="aws-cdk-sdk.iam.IamClient.deleteLoginProfile"></a>

```typescript
public deleteLoginProfile(input: IamDeleteLoginProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteLoginProfileRequest`](#aws-cdk-sdk.iam.IamDeleteLoginProfileRequest)

---

##### `deleteOpenIdConnectProvider` <a name="aws-cdk-sdk.iam.IamClient.deleteOpenIdConnectProvider"></a>

```typescript
public deleteOpenIdConnectProvider(input: IamDeleteOpenIdConnectProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteOpenIdConnectProviderRequest`](#aws-cdk-sdk.iam.IamDeleteOpenIdConnectProviderRequest)

---

##### `deletePolicy` <a name="aws-cdk-sdk.iam.IamClient.deletePolicy"></a>

```typescript
public deletePolicy(input: IamDeletePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeletePolicyRequest`](#aws-cdk-sdk.iam.IamDeletePolicyRequest)

---

##### `deletePolicyVersion` <a name="aws-cdk-sdk.iam.IamClient.deletePolicyVersion"></a>

```typescript
public deletePolicyVersion(input: IamDeletePolicyVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeletePolicyVersionRequest`](#aws-cdk-sdk.iam.IamDeletePolicyVersionRequest)

---

##### `deleteRole` <a name="aws-cdk-sdk.iam.IamClient.deleteRole"></a>

```typescript
public deleteRole(input: IamDeleteRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteRoleRequest`](#aws-cdk-sdk.iam.IamDeleteRoleRequest)

---

##### `deleteRolePermissionsBoundary` <a name="aws-cdk-sdk.iam.IamClient.deleteRolePermissionsBoundary"></a>

```typescript
public deleteRolePermissionsBoundary(input: IamDeleteRolePermissionsBoundaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteRolePermissionsBoundaryRequest`](#aws-cdk-sdk.iam.IamDeleteRolePermissionsBoundaryRequest)

---

##### `deleteRolePolicy` <a name="aws-cdk-sdk.iam.IamClient.deleteRolePolicy"></a>

```typescript
public deleteRolePolicy(input: IamDeleteRolePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteRolePolicyRequest`](#aws-cdk-sdk.iam.IamDeleteRolePolicyRequest)

---

##### `deleteSamlProvider` <a name="aws-cdk-sdk.iam.IamClient.deleteSamlProvider"></a>

```typescript
public deleteSamlProvider(input: IamDeleteSamlProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteSamlProviderRequest`](#aws-cdk-sdk.iam.IamDeleteSamlProviderRequest)

---

##### `deleteServerCertificate` <a name="aws-cdk-sdk.iam.IamClient.deleteServerCertificate"></a>

```typescript
public deleteServerCertificate(input: IamDeleteServerCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteServerCertificateRequest`](#aws-cdk-sdk.iam.IamDeleteServerCertificateRequest)

---

##### `deleteServiceLinkedRole` <a name="aws-cdk-sdk.iam.IamClient.deleteServiceLinkedRole"></a>

```typescript
public deleteServiceLinkedRole(input: IamDeleteServiceLinkedRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteServiceLinkedRoleRequest`](#aws-cdk-sdk.iam.IamDeleteServiceLinkedRoleRequest)

---

##### `deleteServiceSpecificCredential` <a name="aws-cdk-sdk.iam.IamClient.deleteServiceSpecificCredential"></a>

```typescript
public deleteServiceSpecificCredential(input: IamDeleteServiceSpecificCredentialRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteServiceSpecificCredentialRequest`](#aws-cdk-sdk.iam.IamDeleteServiceSpecificCredentialRequest)

---

##### `deleteSigningCertificate` <a name="aws-cdk-sdk.iam.IamClient.deleteSigningCertificate"></a>

```typescript
public deleteSigningCertificate(input: IamDeleteSigningCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteSigningCertificateRequest`](#aws-cdk-sdk.iam.IamDeleteSigningCertificateRequest)

---

##### `deleteSshPublicKey` <a name="aws-cdk-sdk.iam.IamClient.deleteSshPublicKey"></a>

```typescript
public deleteSshPublicKey(input: IamDeleteSshPublicKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteSshPublicKeyRequest`](#aws-cdk-sdk.iam.IamDeleteSshPublicKeyRequest)

---

##### `deleteUser` <a name="aws-cdk-sdk.iam.IamClient.deleteUser"></a>

```typescript
public deleteUser(input: IamDeleteUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteUserRequest`](#aws-cdk-sdk.iam.IamDeleteUserRequest)

---

##### `deleteUserPermissionsBoundary` <a name="aws-cdk-sdk.iam.IamClient.deleteUserPermissionsBoundary"></a>

```typescript
public deleteUserPermissionsBoundary(input: IamDeleteUserPermissionsBoundaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteUserPermissionsBoundaryRequest`](#aws-cdk-sdk.iam.IamDeleteUserPermissionsBoundaryRequest)

---

##### `deleteUserPolicy` <a name="aws-cdk-sdk.iam.IamClient.deleteUserPolicy"></a>

```typescript
public deleteUserPolicy(input: IamDeleteUserPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteUserPolicyRequest`](#aws-cdk-sdk.iam.IamDeleteUserPolicyRequest)

---

##### `deleteVirtualMfaDevice` <a name="aws-cdk-sdk.iam.IamClient.deleteVirtualMfaDevice"></a>

```typescript
public deleteVirtualMfaDevice(input: IamDeleteVirtualMfaDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteVirtualMfaDeviceRequest`](#aws-cdk-sdk.iam.IamDeleteVirtualMfaDeviceRequest)

---

##### `detachGroupPolicy` <a name="aws-cdk-sdk.iam.IamClient.detachGroupPolicy"></a>

```typescript
public detachGroupPolicy(input: IamDetachGroupPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDetachGroupPolicyRequest`](#aws-cdk-sdk.iam.IamDetachGroupPolicyRequest)

---

##### `detachRolePolicy` <a name="aws-cdk-sdk.iam.IamClient.detachRolePolicy"></a>

```typescript
public detachRolePolicy(input: IamDetachRolePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDetachRolePolicyRequest`](#aws-cdk-sdk.iam.IamDetachRolePolicyRequest)

---

##### `detachUserPolicy` <a name="aws-cdk-sdk.iam.IamClient.detachUserPolicy"></a>

```typescript
public detachUserPolicy(input: IamDetachUserPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDetachUserPolicyRequest`](#aws-cdk-sdk.iam.IamDetachUserPolicyRequest)

---

##### `enableMfaDevice` <a name="aws-cdk-sdk.iam.IamClient.enableMfaDevice"></a>

```typescript
public enableMfaDevice(input: IamEnableMfaDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamEnableMfaDeviceRequest`](#aws-cdk-sdk.iam.IamEnableMfaDeviceRequest)

---

##### `fetchAccessKeyLastUsed` <a name="aws-cdk-sdk.iam.IamClient.fetchAccessKeyLastUsed"></a>

```typescript
public fetchAccessKeyLastUsed(input: IamGetAccessKeyLastUsedRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetAccessKeyLastUsedRequest`](#aws-cdk-sdk.iam.IamGetAccessKeyLastUsedRequest)

---

##### `fetchAccountAuthorizationDetails` <a name="aws-cdk-sdk.iam.IamClient.fetchAccountAuthorizationDetails"></a>

```typescript
public fetchAccountAuthorizationDetails(input: IamGetAccountAuthorizationDetailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsRequest`](#aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsRequest)

---

##### `fetchAccountPasswordPolicy` <a name="aws-cdk-sdk.iam.IamClient.fetchAccountPasswordPolicy"></a>

```typescript
public fetchAccountPasswordPolicy()
```

##### `fetchAccountSummary` <a name="aws-cdk-sdk.iam.IamClient.fetchAccountSummary"></a>

```typescript
public fetchAccountSummary()
```

##### `fetchContextKeysForCustomPolicy` <a name="aws-cdk-sdk.iam.IamClient.fetchContextKeysForCustomPolicy"></a>

```typescript
public fetchContextKeysForCustomPolicy(input: IamGetContextKeysForCustomPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetContextKeysForCustomPolicyRequest`](#aws-cdk-sdk.iam.IamGetContextKeysForCustomPolicyRequest)

---

##### `fetchContextKeysForPrincipalPolicy` <a name="aws-cdk-sdk.iam.IamClient.fetchContextKeysForPrincipalPolicy"></a>

```typescript
public fetchContextKeysForPrincipalPolicy(input: IamGetContextKeysForPrincipalPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetContextKeysForPrincipalPolicyRequest`](#aws-cdk-sdk.iam.IamGetContextKeysForPrincipalPolicyRequest)

---

##### `fetchCredentialReport` <a name="aws-cdk-sdk.iam.IamClient.fetchCredentialReport"></a>

```typescript
public fetchCredentialReport()
```

##### `fetchGroup` <a name="aws-cdk-sdk.iam.IamClient.fetchGroup"></a>

```typescript
public fetchGroup(input: IamGetGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetGroupRequest`](#aws-cdk-sdk.iam.IamGetGroupRequest)

---

##### `fetchGroupPolicy` <a name="aws-cdk-sdk.iam.IamClient.fetchGroupPolicy"></a>

```typescript
public fetchGroupPolicy(input: IamGetGroupPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetGroupPolicyRequest`](#aws-cdk-sdk.iam.IamGetGroupPolicyRequest)

---

##### `fetchInstanceProfile` <a name="aws-cdk-sdk.iam.IamClient.fetchInstanceProfile"></a>

```typescript
public fetchInstanceProfile(input: IamGetInstanceProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetInstanceProfileRequest`](#aws-cdk-sdk.iam.IamGetInstanceProfileRequest)

---

##### `fetchLoginProfile` <a name="aws-cdk-sdk.iam.IamClient.fetchLoginProfile"></a>

```typescript
public fetchLoginProfile(input: IamGetLoginProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetLoginProfileRequest`](#aws-cdk-sdk.iam.IamGetLoginProfileRequest)

---

##### `fetchOpenIdConnectProvider` <a name="aws-cdk-sdk.iam.IamClient.fetchOpenIdConnectProvider"></a>

```typescript
public fetchOpenIdConnectProvider(input: IamGetOpenIdConnectProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetOpenIdConnectProviderRequest`](#aws-cdk-sdk.iam.IamGetOpenIdConnectProviderRequest)

---

##### `fetchOrganizationsAccessReport` <a name="aws-cdk-sdk.iam.IamClient.fetchOrganizationsAccessReport"></a>

```typescript
public fetchOrganizationsAccessReport(input: IamGetOrganizationsAccessReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest`](#aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest)

---

##### `fetchPolicy` <a name="aws-cdk-sdk.iam.IamClient.fetchPolicy"></a>

```typescript
public fetchPolicy(input: IamGetPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetPolicyRequest`](#aws-cdk-sdk.iam.IamGetPolicyRequest)

---

##### `fetchPolicyVersion` <a name="aws-cdk-sdk.iam.IamClient.fetchPolicyVersion"></a>

```typescript
public fetchPolicyVersion(input: IamGetPolicyVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetPolicyVersionRequest`](#aws-cdk-sdk.iam.IamGetPolicyVersionRequest)

---

##### `fetchRole` <a name="aws-cdk-sdk.iam.IamClient.fetchRole"></a>

```typescript
public fetchRole(input: IamGetRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetRoleRequest`](#aws-cdk-sdk.iam.IamGetRoleRequest)

---

##### `fetchRolePolicy` <a name="aws-cdk-sdk.iam.IamClient.fetchRolePolicy"></a>

```typescript
public fetchRolePolicy(input: IamGetRolePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetRolePolicyRequest`](#aws-cdk-sdk.iam.IamGetRolePolicyRequest)

---

##### `fetchSamlProvider` <a name="aws-cdk-sdk.iam.IamClient.fetchSamlProvider"></a>

```typescript
public fetchSamlProvider(input: IamGetSamlProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetSamlProviderRequest`](#aws-cdk-sdk.iam.IamGetSamlProviderRequest)

---

##### `fetchServerCertificate` <a name="aws-cdk-sdk.iam.IamClient.fetchServerCertificate"></a>

```typescript
public fetchServerCertificate(input: IamGetServerCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServerCertificateRequest`](#aws-cdk-sdk.iam.IamGetServerCertificateRequest)

---

##### `fetchServiceLastAccessedDetails` <a name="aws-cdk-sdk.iam.IamClient.fetchServiceLastAccessedDetails"></a>

```typescript
public fetchServiceLastAccessedDetails(input: IamGetServiceLastAccessedDetailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsRequest`](#aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsRequest)

---

##### `fetchServiceLastAccessedDetailsWithEntities` <a name="aws-cdk-sdk.iam.IamClient.fetchServiceLastAccessedDetailsWithEntities"></a>

```typescript
public fetchServiceLastAccessedDetailsWithEntities(input: IamGetServiceLastAccessedDetailsWithEntitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest`](#aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest)

---

##### `fetchServiceLinkedRoleDeletionStatus` <a name="aws-cdk-sdk.iam.IamClient.fetchServiceLinkedRoleDeletionStatus"></a>

```typescript
public fetchServiceLinkedRoleDeletionStatus(input: IamGetServiceLinkedRoleDeletionStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusRequest`](#aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusRequest)

---

##### `fetchSshPublicKey` <a name="aws-cdk-sdk.iam.IamClient.fetchSshPublicKey"></a>

```typescript
public fetchSshPublicKey(input: IamGetSshPublicKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetSshPublicKeyRequest`](#aws-cdk-sdk.iam.IamGetSshPublicKeyRequest)

---

##### `fetchUser` <a name="aws-cdk-sdk.iam.IamClient.fetchUser"></a>

```typescript
public fetchUser(input: IamGetUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetUserRequest`](#aws-cdk-sdk.iam.IamGetUserRequest)

---

##### `fetchUserPolicy` <a name="aws-cdk-sdk.iam.IamClient.fetchUserPolicy"></a>

```typescript
public fetchUserPolicy(input: IamGetUserPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetUserPolicyRequest`](#aws-cdk-sdk.iam.IamGetUserPolicyRequest)

---

##### `generateCredentialReport` <a name="aws-cdk-sdk.iam.IamClient.generateCredentialReport"></a>

```typescript
public generateCredentialReport()
```

##### `generateOrganizationsAccessReport` <a name="aws-cdk-sdk.iam.IamClient.generateOrganizationsAccessReport"></a>

```typescript
public generateOrganizationsAccessReport(input: IamGenerateOrganizationsAccessReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGenerateOrganizationsAccessReportRequest`](#aws-cdk-sdk.iam.IamGenerateOrganizationsAccessReportRequest)

---

##### `generateServiceLastAccessedDetails` <a name="aws-cdk-sdk.iam.IamClient.generateServiceLastAccessedDetails"></a>

```typescript
public generateServiceLastAccessedDetails(input: IamGenerateServiceLastAccessedDetailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGenerateServiceLastAccessedDetailsRequest`](#aws-cdk-sdk.iam.IamGenerateServiceLastAccessedDetailsRequest)

---

##### `listAccessKeys` <a name="aws-cdk-sdk.iam.IamClient.listAccessKeys"></a>

```typescript
public listAccessKeys(input: IamListAccessKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListAccessKeysRequest`](#aws-cdk-sdk.iam.IamListAccessKeysRequest)

---

##### `listAccountAliases` <a name="aws-cdk-sdk.iam.IamClient.listAccountAliases"></a>

```typescript
public listAccountAliases(input: IamListAccountAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListAccountAliasesRequest`](#aws-cdk-sdk.iam.IamListAccountAliasesRequest)

---

##### `listAttachedGroupPolicies` <a name="aws-cdk-sdk.iam.IamClient.listAttachedGroupPolicies"></a>

```typescript
public listAttachedGroupPolicies(input: IamListAttachedGroupPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListAttachedGroupPoliciesRequest`](#aws-cdk-sdk.iam.IamListAttachedGroupPoliciesRequest)

---

##### `listAttachedRolePolicies` <a name="aws-cdk-sdk.iam.IamClient.listAttachedRolePolicies"></a>

```typescript
public listAttachedRolePolicies(input: IamListAttachedRolePoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListAttachedRolePoliciesRequest`](#aws-cdk-sdk.iam.IamListAttachedRolePoliciesRequest)

---

##### `listAttachedUserPolicies` <a name="aws-cdk-sdk.iam.IamClient.listAttachedUserPolicies"></a>

```typescript
public listAttachedUserPolicies(input: IamListAttachedUserPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListAttachedUserPoliciesRequest`](#aws-cdk-sdk.iam.IamListAttachedUserPoliciesRequest)

---

##### `listEntitiesForPolicy` <a name="aws-cdk-sdk.iam.IamClient.listEntitiesForPolicy"></a>

```typescript
public listEntitiesForPolicy(input: IamListEntitiesForPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest`](#aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest)

---

##### `listGroupPolicies` <a name="aws-cdk-sdk.iam.IamClient.listGroupPolicies"></a>

```typescript
public listGroupPolicies(input: IamListGroupPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListGroupPoliciesRequest`](#aws-cdk-sdk.iam.IamListGroupPoliciesRequest)

---

##### `listGroups` <a name="aws-cdk-sdk.iam.IamClient.listGroups"></a>

```typescript
public listGroups(input: IamListGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListGroupsRequest`](#aws-cdk-sdk.iam.IamListGroupsRequest)

---

##### `listGroupsForUser` <a name="aws-cdk-sdk.iam.IamClient.listGroupsForUser"></a>

```typescript
public listGroupsForUser(input: IamListGroupsForUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListGroupsForUserRequest`](#aws-cdk-sdk.iam.IamListGroupsForUserRequest)

---

##### `listInstanceProfiles` <a name="aws-cdk-sdk.iam.IamClient.listInstanceProfiles"></a>

```typescript
public listInstanceProfiles(input: IamListInstanceProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListInstanceProfilesRequest`](#aws-cdk-sdk.iam.IamListInstanceProfilesRequest)

---

##### `listInstanceProfilesForRole` <a name="aws-cdk-sdk.iam.IamClient.listInstanceProfilesForRole"></a>

```typescript
public listInstanceProfilesForRole(input: IamListInstanceProfilesForRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListInstanceProfilesForRoleRequest`](#aws-cdk-sdk.iam.IamListInstanceProfilesForRoleRequest)

---

##### `listMfaDevices` <a name="aws-cdk-sdk.iam.IamClient.listMfaDevices"></a>

```typescript
public listMfaDevices(input: IamListMfaDevicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListMfaDevicesRequest`](#aws-cdk-sdk.iam.IamListMfaDevicesRequest)

---

##### `listOpenIdConnectProviders` <a name="aws-cdk-sdk.iam.IamClient.listOpenIdConnectProviders"></a>

```typescript
public listOpenIdConnectProviders()
```

##### `listPolicies` <a name="aws-cdk-sdk.iam.IamClient.listPolicies"></a>

```typescript
public listPolicies(input: IamListPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListPoliciesRequest`](#aws-cdk-sdk.iam.IamListPoliciesRequest)

---

##### `listPoliciesGrantingServiceAccess` <a name="aws-cdk-sdk.iam.IamClient.listPoliciesGrantingServiceAccess"></a>

```typescript
public listPoliciesGrantingServiceAccess(input: IamListPoliciesGrantingServiceAccessRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessRequest`](#aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessRequest)

---

##### `listPolicyVersions` <a name="aws-cdk-sdk.iam.IamClient.listPolicyVersions"></a>

```typescript
public listPolicyVersions(input: IamListPolicyVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListPolicyVersionsRequest`](#aws-cdk-sdk.iam.IamListPolicyVersionsRequest)

---

##### `listRolePolicies` <a name="aws-cdk-sdk.iam.IamClient.listRolePolicies"></a>

```typescript
public listRolePolicies(input: IamListRolePoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListRolePoliciesRequest`](#aws-cdk-sdk.iam.IamListRolePoliciesRequest)

---

##### `listRoles` <a name="aws-cdk-sdk.iam.IamClient.listRoles"></a>

```typescript
public listRoles(input: IamListRolesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListRolesRequest`](#aws-cdk-sdk.iam.IamListRolesRequest)

---

##### `listRoleTags` <a name="aws-cdk-sdk.iam.IamClient.listRoleTags"></a>

```typescript
public listRoleTags(input: IamListRoleTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListRoleTagsRequest`](#aws-cdk-sdk.iam.IamListRoleTagsRequest)

---

##### `listSamlProviders` <a name="aws-cdk-sdk.iam.IamClient.listSamlProviders"></a>

```typescript
public listSamlProviders()
```

##### `listServerCertificates` <a name="aws-cdk-sdk.iam.IamClient.listServerCertificates"></a>

```typescript
public listServerCertificates(input: IamListServerCertificatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListServerCertificatesRequest`](#aws-cdk-sdk.iam.IamListServerCertificatesRequest)

---

##### `listServiceSpecificCredentials` <a name="aws-cdk-sdk.iam.IamClient.listServiceSpecificCredentials"></a>

```typescript
public listServiceSpecificCredentials(input: IamListServiceSpecificCredentialsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListServiceSpecificCredentialsRequest`](#aws-cdk-sdk.iam.IamListServiceSpecificCredentialsRequest)

---

##### `listSigningCertificates` <a name="aws-cdk-sdk.iam.IamClient.listSigningCertificates"></a>

```typescript
public listSigningCertificates(input: IamListSigningCertificatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListSigningCertificatesRequest`](#aws-cdk-sdk.iam.IamListSigningCertificatesRequest)

---

##### `listSshPublicKeys` <a name="aws-cdk-sdk.iam.IamClient.listSshPublicKeys"></a>

```typescript
public listSshPublicKeys(input: IamListSshPublicKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListSshPublicKeysRequest`](#aws-cdk-sdk.iam.IamListSshPublicKeysRequest)

---

##### `listUserPolicies` <a name="aws-cdk-sdk.iam.IamClient.listUserPolicies"></a>

```typescript
public listUserPolicies(input: IamListUserPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListUserPoliciesRequest`](#aws-cdk-sdk.iam.IamListUserPoliciesRequest)

---

##### `listUsers` <a name="aws-cdk-sdk.iam.IamClient.listUsers"></a>

```typescript
public listUsers(input: IamListUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListUsersRequest`](#aws-cdk-sdk.iam.IamListUsersRequest)

---

##### `listUserTags` <a name="aws-cdk-sdk.iam.IamClient.listUserTags"></a>

```typescript
public listUserTags(input: IamListUserTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListUserTagsRequest`](#aws-cdk-sdk.iam.IamListUserTagsRequest)

---

##### `listVirtualMfaDevices` <a name="aws-cdk-sdk.iam.IamClient.listVirtualMfaDevices"></a>

```typescript
public listVirtualMfaDevices(input: IamListVirtualMfaDevicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListVirtualMfaDevicesRequest`](#aws-cdk-sdk.iam.IamListVirtualMfaDevicesRequest)

---

##### `putDefaultPolicyVersion` <a name="aws-cdk-sdk.iam.IamClient.putDefaultPolicyVersion"></a>

```typescript
public putDefaultPolicyVersion(input: IamSetDefaultPolicyVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamSetDefaultPolicyVersionRequest`](#aws-cdk-sdk.iam.IamSetDefaultPolicyVersionRequest)

---

##### `putGroupPolicy` <a name="aws-cdk-sdk.iam.IamClient.putGroupPolicy"></a>

```typescript
public putGroupPolicy(input: IamPutGroupPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPutGroupPolicyRequest`](#aws-cdk-sdk.iam.IamPutGroupPolicyRequest)

---

##### `putRolePermissionsBoundary` <a name="aws-cdk-sdk.iam.IamClient.putRolePermissionsBoundary"></a>

```typescript
public putRolePermissionsBoundary(input: IamPutRolePermissionsBoundaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPutRolePermissionsBoundaryRequest`](#aws-cdk-sdk.iam.IamPutRolePermissionsBoundaryRequest)

---

##### `putRolePolicy` <a name="aws-cdk-sdk.iam.IamClient.putRolePolicy"></a>

```typescript
public putRolePolicy(input: IamPutRolePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPutRolePolicyRequest`](#aws-cdk-sdk.iam.IamPutRolePolicyRequest)

---

##### `putSecurityTokenServicePreferences` <a name="aws-cdk-sdk.iam.IamClient.putSecurityTokenServicePreferences"></a>

```typescript
public putSecurityTokenServicePreferences(input: IamSetSecurityTokenServicePreferencesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamSetSecurityTokenServicePreferencesRequest`](#aws-cdk-sdk.iam.IamSetSecurityTokenServicePreferencesRequest)

---

##### `putUserPermissionsBoundary` <a name="aws-cdk-sdk.iam.IamClient.putUserPermissionsBoundary"></a>

```typescript
public putUserPermissionsBoundary(input: IamPutUserPermissionsBoundaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPutUserPermissionsBoundaryRequest`](#aws-cdk-sdk.iam.IamPutUserPermissionsBoundaryRequest)

---

##### `putUserPolicy` <a name="aws-cdk-sdk.iam.IamClient.putUserPolicy"></a>

```typescript
public putUserPolicy(input: IamPutUserPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPutUserPolicyRequest`](#aws-cdk-sdk.iam.IamPutUserPolicyRequest)

---

##### `removeClientIdFromOpenIdConnectProvider` <a name="aws-cdk-sdk.iam.IamClient.removeClientIdFromOpenIdConnectProvider"></a>

```typescript
public removeClientIdFromOpenIdConnectProvider(input: IamRemoveClientIdFromOpenIdConnectProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRemoveClientIdFromOpenIdConnectProviderRequest`](#aws-cdk-sdk.iam.IamRemoveClientIdFromOpenIdConnectProviderRequest)

---

##### `removeRoleFromInstanceProfile` <a name="aws-cdk-sdk.iam.IamClient.removeRoleFromInstanceProfile"></a>

```typescript
public removeRoleFromInstanceProfile(input: IamRemoveRoleFromInstanceProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRemoveRoleFromInstanceProfileRequest`](#aws-cdk-sdk.iam.IamRemoveRoleFromInstanceProfileRequest)

---

##### `removeUserFromGroup` <a name="aws-cdk-sdk.iam.IamClient.removeUserFromGroup"></a>

```typescript
public removeUserFromGroup(input: IamRemoveUserFromGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRemoveUserFromGroupRequest`](#aws-cdk-sdk.iam.IamRemoveUserFromGroupRequest)

---

##### `resetServiceSpecificCredential` <a name="aws-cdk-sdk.iam.IamClient.resetServiceSpecificCredential"></a>

```typescript
public resetServiceSpecificCredential(input: IamResetServiceSpecificCredentialRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamResetServiceSpecificCredentialRequest`](#aws-cdk-sdk.iam.IamResetServiceSpecificCredentialRequest)

---

##### `resyncMfaDevice` <a name="aws-cdk-sdk.iam.IamClient.resyncMfaDevice"></a>

```typescript
public resyncMfaDevice(input: IamResyncMfaDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamResyncMfaDeviceRequest`](#aws-cdk-sdk.iam.IamResyncMfaDeviceRequest)

---

##### `simulateCustomPolicy` <a name="aws-cdk-sdk.iam.IamClient.simulateCustomPolicy"></a>

```typescript
public simulateCustomPolicy(input: IamSimulateCustomPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest`](#aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest)

---

##### `simulatePrincipalPolicy` <a name="aws-cdk-sdk.iam.IamClient.simulatePrincipalPolicy"></a>

```typescript
public simulatePrincipalPolicy(input: IamSimulatePrincipalPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest`](#aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest)

---

##### `tagRole` <a name="aws-cdk-sdk.iam.IamClient.tagRole"></a>

```typescript
public tagRole(input: IamTagRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTagRoleRequest`](#aws-cdk-sdk.iam.IamTagRoleRequest)

---

##### `tagUser` <a name="aws-cdk-sdk.iam.IamClient.tagUser"></a>

```typescript
public tagUser(input: IamTagUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTagUserRequest`](#aws-cdk-sdk.iam.IamTagUserRequest)

---

##### `untagRole` <a name="aws-cdk-sdk.iam.IamClient.untagRole"></a>

```typescript
public untagRole(input: IamUntagRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUntagRoleRequest`](#aws-cdk-sdk.iam.IamUntagRoleRequest)

---

##### `untagUser` <a name="aws-cdk-sdk.iam.IamClient.untagUser"></a>

```typescript
public untagUser(input: IamUntagUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUntagUserRequest`](#aws-cdk-sdk.iam.IamUntagUserRequest)

---

##### `updateAccessKey` <a name="aws-cdk-sdk.iam.IamClient.updateAccessKey"></a>

```typescript
public updateAccessKey(input: IamUpdateAccessKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateAccessKeyRequest`](#aws-cdk-sdk.iam.IamUpdateAccessKeyRequest)

---

##### `updateAccountPasswordPolicy` <a name="aws-cdk-sdk.iam.IamClient.updateAccountPasswordPolicy"></a>

```typescript
public updateAccountPasswordPolicy(input: IamUpdateAccountPasswordPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest`](#aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest)

---

##### `updateAssumeRolePolicy` <a name="aws-cdk-sdk.iam.IamClient.updateAssumeRolePolicy"></a>

```typescript
public updateAssumeRolePolicy(input: IamUpdateAssumeRolePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateAssumeRolePolicyRequest`](#aws-cdk-sdk.iam.IamUpdateAssumeRolePolicyRequest)

---

##### `updateGroup` <a name="aws-cdk-sdk.iam.IamClient.updateGroup"></a>

```typescript
public updateGroup(input: IamUpdateGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateGroupRequest`](#aws-cdk-sdk.iam.IamUpdateGroupRequest)

---

##### `updateLoginProfile` <a name="aws-cdk-sdk.iam.IamClient.updateLoginProfile"></a>

```typescript
public updateLoginProfile(input: IamUpdateLoginProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateLoginProfileRequest`](#aws-cdk-sdk.iam.IamUpdateLoginProfileRequest)

---

##### `updateOpenIdConnectProviderThumbprint` <a name="aws-cdk-sdk.iam.IamClient.updateOpenIdConnectProviderThumbprint"></a>

```typescript
public updateOpenIdConnectProviderThumbprint(input: IamUpdateOpenIdConnectProviderThumbprintRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateOpenIdConnectProviderThumbprintRequest`](#aws-cdk-sdk.iam.IamUpdateOpenIdConnectProviderThumbprintRequest)

---

##### `updateRole` <a name="aws-cdk-sdk.iam.IamClient.updateRole"></a>

```typescript
public updateRole(input: IamUpdateRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateRoleRequest`](#aws-cdk-sdk.iam.IamUpdateRoleRequest)

---

##### `updateRoleDescription` <a name="aws-cdk-sdk.iam.IamClient.updateRoleDescription"></a>

```typescript
public updateRoleDescription(input: IamUpdateRoleDescriptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest`](#aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest)

---

##### `updateSamlProvider` <a name="aws-cdk-sdk.iam.IamClient.updateSamlProvider"></a>

```typescript
public updateSamlProvider(input: IamUpdateSamlProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateSamlProviderRequest`](#aws-cdk-sdk.iam.IamUpdateSamlProviderRequest)

---

##### `updateServerCertificate` <a name="aws-cdk-sdk.iam.IamClient.updateServerCertificate"></a>

```typescript
public updateServerCertificate(input: IamUpdateServerCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateServerCertificateRequest`](#aws-cdk-sdk.iam.IamUpdateServerCertificateRequest)

---

##### `updateServiceSpecificCredential` <a name="aws-cdk-sdk.iam.IamClient.updateServiceSpecificCredential"></a>

```typescript
public updateServiceSpecificCredential(input: IamUpdateServiceSpecificCredentialRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateServiceSpecificCredentialRequest`](#aws-cdk-sdk.iam.IamUpdateServiceSpecificCredentialRequest)

---

##### `updateSigningCertificate` <a name="aws-cdk-sdk.iam.IamClient.updateSigningCertificate"></a>

```typescript
public updateSigningCertificate(input: IamUpdateSigningCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateSigningCertificateRequest`](#aws-cdk-sdk.iam.IamUpdateSigningCertificateRequest)

---

##### `updateSshPublicKey` <a name="aws-cdk-sdk.iam.IamClient.updateSshPublicKey"></a>

```typescript
public updateSshPublicKey(input: IamUpdateSshPublicKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateSshPublicKeyRequest`](#aws-cdk-sdk.iam.IamUpdateSshPublicKeyRequest)

---

##### `updateUser` <a name="aws-cdk-sdk.iam.IamClient.updateUser"></a>

```typescript
public updateUser(input: IamUpdateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateUserRequest`](#aws-cdk-sdk.iam.IamUpdateUserRequest)

---

##### `uploadServerCertificate` <a name="aws-cdk-sdk.iam.IamClient.uploadServerCertificate"></a>

```typescript
public uploadServerCertificate(input: IamUploadServerCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUploadServerCertificateRequest`](#aws-cdk-sdk.iam.IamUploadServerCertificateRequest)

---

##### `uploadSigningCertificate` <a name="aws-cdk-sdk.iam.IamClient.uploadSigningCertificate"></a>

```typescript
public uploadSigningCertificate(input: IamUploadSigningCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUploadSigningCertificateRequest`](#aws-cdk-sdk.iam.IamUploadSigningCertificateRequest)

---

##### `uploadSshPublicKey` <a name="aws-cdk-sdk.iam.IamClient.uploadSshPublicKey"></a>

```typescript
public uploadSshPublicKey(input: IamUploadSshPublicKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUploadSshPublicKeyRequest`](#aws-cdk-sdk.iam.IamUploadSshPublicKeyRequest)

---




## Structs <a name="Structs"></a>

### IamAccessDetail <a name="aws-cdk-sdk.iam.IamAccessDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAccessDetail: iam.IamAccessDetail = { ... }
```

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAccessDetail.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAccessDetail.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `entityPath`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAccessDetail.property.entityPath"></a>

- *Type:* `string`

---

##### `lastAuthenticatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAccessDetail.property.lastAuthenticatedTime"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAccessDetail.property.region"></a>

- *Type:* `string`

---

##### `totalAuthenticatedEntities`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAccessDetail.property.totalAuthenticatedEntities"></a>

- *Type:* `number`

---

### IamAccessKey <a name="aws-cdk-sdk.iam.IamAccessKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAccessKey: iam.IamAccessKey = { ... }
```

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAccessKey.property.accessKeyId"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAccessKey.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAccessKey.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAccessKey.property.userName"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAccessKey.property.createDate"></a>

- *Type:* `string`

---

### IamAccessKeyLastUsed <a name="aws-cdk-sdk.iam.IamAccessKeyLastUsed"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAccessKeyLastUsed: iam.IamAccessKeyLastUsed = { ... }
```

##### `lastUsedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAccessKeyLastUsed.property.lastUsedDate"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAccessKeyLastUsed.property.region"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAccessKeyLastUsed.property.serviceName"></a>

- *Type:* `string`

---

### IamAccessKeyMetadata <a name="aws-cdk-sdk.iam.IamAccessKeyMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAccessKeyMetadata: iam.IamAccessKeyMetadata = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAccessKeyMetadata.property.accessKeyId"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAccessKeyMetadata.property.createDate"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAccessKeyMetadata.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAccessKeyMetadata.property.userName"></a>

- *Type:* `string`

---

### IamAddClientIdToOpenIdConnectProviderRequest <a name="aws-cdk-sdk.iam.IamAddClientIdToOpenIdConnectProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAddClientIdToOpenIdConnectProviderRequest: iam.IamAddClientIdToOpenIdConnectProviderRequest = { ... }
```

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAddClientIdToOpenIdConnectProviderRequest.property.clientId"></a>

- *Type:* `string`

---

##### `openIdConnectProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAddClientIdToOpenIdConnectProviderRequest.property.openIdConnectProviderArn"></a>

- *Type:* `string`

---

### IamAddRoleToInstanceProfileRequest <a name="aws-cdk-sdk.iam.IamAddRoleToInstanceProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAddRoleToInstanceProfileRequest: iam.IamAddRoleToInstanceProfileRequest = { ... }
```

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAddRoleToInstanceProfileRequest.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAddRoleToInstanceProfileRequest.property.roleName"></a>

- *Type:* `string`

---

### IamAddUserToGroupRequest <a name="aws-cdk-sdk.iam.IamAddUserToGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAddUserToGroupRequest: iam.IamAddUserToGroupRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAddUserToGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAddUserToGroupRequest.property.userName"></a>

- *Type:* `string`

---

### IamAttachedPermissionsBoundary <a name="aws-cdk-sdk.iam.IamAttachedPermissionsBoundary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAttachedPermissionsBoundary: iam.IamAttachedPermissionsBoundary = { ... }
```

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAttachedPermissionsBoundary.property.permissionsBoundaryArn"></a>

- *Type:* `string`

---

##### `permissionsBoundaryType`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAttachedPermissionsBoundary.property.permissionsBoundaryType"></a>

- *Type:* `string`

---

### IamAttachedPolicy <a name="aws-cdk-sdk.iam.IamAttachedPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAttachedPolicy: iam.IamAttachedPolicy = { ... }
```

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAttachedPolicy.property.policyArn"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamAttachedPolicy.property.policyName"></a>

- *Type:* `string`

---

### IamAttachGroupPolicyRequest <a name="aws-cdk-sdk.iam.IamAttachGroupPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAttachGroupPolicyRequest: iam.IamAttachGroupPolicyRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAttachGroupPolicyRequest.property.groupName"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAttachGroupPolicyRequest.property.policyArn"></a>

- *Type:* `string`

---

### IamAttachRolePolicyRequest <a name="aws-cdk-sdk.iam.IamAttachRolePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAttachRolePolicyRequest: iam.IamAttachRolePolicyRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAttachRolePolicyRequest.property.policyArn"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAttachRolePolicyRequest.property.roleName"></a>

- *Type:* `string`

---

### IamAttachUserPolicyRequest <a name="aws-cdk-sdk.iam.IamAttachUserPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamAttachUserPolicyRequest: iam.IamAttachUserPolicyRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAttachUserPolicyRequest.property.policyArn"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamAttachUserPolicyRequest.property.userName"></a>

- *Type:* `string`

---

### IamChangePasswordRequest <a name="aws-cdk-sdk.iam.IamChangePasswordRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamChangePasswordRequest: iam.IamChangePasswordRequest = { ... }
```

##### `newPassword`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamChangePasswordRequest.property.newPassword"></a>

- *Type:* `string`

---

##### `oldPassword`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamChangePasswordRequest.property.oldPassword"></a>

- *Type:* `string`

---

### IamContextEntry <a name="aws-cdk-sdk.iam.IamContextEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamContextEntry: iam.IamContextEntry = { ... }
```

##### `contextKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamContextEntry.property.contextKeyName"></a>

- *Type:* `string`

---

##### `contextKeyType`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamContextEntry.property.contextKeyType"></a>

- *Type:* `string`

---

##### `contextKeyValues`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamContextEntry.property.contextKeyValues"></a>

- *Type:* `string`[]

---

### IamCreateAccessKeyRequest <a name="aws-cdk-sdk.iam.IamCreateAccessKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateAccessKeyRequest: iam.IamCreateAccessKeyRequest = { ... }
```

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateAccessKeyRequest.property.userName"></a>

- *Type:* `string`

---

### IamCreateAccessKeyResponse <a name="aws-cdk-sdk.iam.IamCreateAccessKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateAccessKeyResponse: iam.IamCreateAccessKeyResponse = { ... }
```

##### `accessKey`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateAccessKeyResponse.property.accessKey"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAccessKey`](#aws-cdk-sdk.iam.IamAccessKey)

---

### IamCreateAccountAliasRequest <a name="aws-cdk-sdk.iam.IamCreateAccountAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateAccountAliasRequest: iam.IamCreateAccountAliasRequest = { ... }
```

##### `accountAlias`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateAccountAliasRequest.property.accountAlias"></a>

- *Type:* `string`

---

### IamCreateGroupRequest <a name="aws-cdk-sdk.iam.IamCreateGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateGroupRequest: iam.IamCreateGroupRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateGroupRequest.property.path"></a>

- *Type:* `string`

---

### IamCreateGroupResponse <a name="aws-cdk-sdk.iam.IamCreateGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateGroupResponse: iam.IamCreateGroupResponse = { ... }
```

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateGroupResponse.property.group"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGroup`](#aws-cdk-sdk.iam.IamGroup)

---

### IamCreateInstanceProfileRequest <a name="aws-cdk-sdk.iam.IamCreateInstanceProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateInstanceProfileRequest: iam.IamCreateInstanceProfileRequest = { ... }
```

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateInstanceProfileRequest.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateInstanceProfileRequest.property.path"></a>

- *Type:* `string`

---

### IamCreateInstanceProfileResponse <a name="aws-cdk-sdk.iam.IamCreateInstanceProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateInstanceProfileResponse: iam.IamCreateInstanceProfileResponse = { ... }
```

##### `instanceProfile`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateInstanceProfileResponse.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.iam.IamInstanceProfile`](#aws-cdk-sdk.iam.IamInstanceProfile)

---

### IamCreateLoginProfileRequest <a name="aws-cdk-sdk.iam.IamCreateLoginProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateLoginProfileRequest: iam.IamCreateLoginProfileRequest = { ... }
```

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateLoginProfileRequest.property.password"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateLoginProfileRequest.property.userName"></a>

- *Type:* `string`

---

##### `passwordResetRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateLoginProfileRequest.property.passwordResetRequired"></a>

- *Type:* `boolean`

---

### IamCreateLoginProfileResponse <a name="aws-cdk-sdk.iam.IamCreateLoginProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateLoginProfileResponse: iam.IamCreateLoginProfileResponse = { ... }
```

##### `loginProfile`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateLoginProfileResponse.property.loginProfile"></a>

- *Type:* [`aws-cdk-sdk.iam.IamLoginProfile`](#aws-cdk-sdk.iam.IamLoginProfile)

---

### IamCreateOpenIdConnectProviderRequest <a name="aws-cdk-sdk.iam.IamCreateOpenIdConnectProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateOpenIdConnectProviderRequest: iam.IamCreateOpenIdConnectProviderRequest = { ... }
```

##### `thumbprintList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateOpenIdConnectProviderRequest.property.thumbprintList"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateOpenIdConnectProviderRequest.property.url"></a>

- *Type:* `string`

---

##### `clientIdList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateOpenIdConnectProviderRequest.property.clientIdList"></a>

- *Type:* `string`[]

---

### IamCreateOpenIdConnectProviderResponse <a name="aws-cdk-sdk.iam.IamCreateOpenIdConnectProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateOpenIdConnectProviderResponse: iam.IamCreateOpenIdConnectProviderResponse = { ... }
```

##### `openIdConnectProviderArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateOpenIdConnectProviderResponse.property.openIdConnectProviderArn"></a>

- *Type:* `string`

---

### IamCreatePolicyRequest <a name="aws-cdk-sdk.iam.IamCreatePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreatePolicyRequest: iam.IamCreatePolicyRequest = { ... }
```

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreatePolicyRequest.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreatePolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreatePolicyRequest.property.description"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreatePolicyRequest.property.path"></a>

- *Type:* `string`

---

### IamCreatePolicyResponse <a name="aws-cdk-sdk.iam.IamCreatePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreatePolicyResponse: iam.IamCreatePolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreatePolicyResponse.property.policy"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicy`](#aws-cdk-sdk.iam.IamPolicy)

---

### IamCreatePolicyVersionRequest <a name="aws-cdk-sdk.iam.IamCreatePolicyVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreatePolicyVersionRequest: iam.IamCreatePolicyVersionRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreatePolicyVersionRequest.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreatePolicyVersionRequest.property.policyDocument"></a>

- *Type:* `string`

---

##### `setAsDefault`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreatePolicyVersionRequest.property.setAsDefault"></a>

- *Type:* `boolean`

---

### IamCreatePolicyVersionResponse <a name="aws-cdk-sdk.iam.IamCreatePolicyVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreatePolicyVersionResponse: iam.IamCreatePolicyVersionResponse = { ... }
```

##### `policyVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreatePolicyVersionResponse.property.policyVersion"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyVersion`](#aws-cdk-sdk.iam.IamPolicyVersion)

---

### IamCreateRoleRequest <a name="aws-cdk-sdk.iam.IamCreateRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateRoleRequest: iam.IamCreateRoleRequest = { ... }
```

##### `assumeRolePolicyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateRoleRequest.property.assumeRolePolicyDocument"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateRoleRequest.property.roleName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateRoleRequest.property.description"></a>

- *Type:* `string`

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateRoleRequest.property.maxSessionDuration"></a>

- *Type:* `number`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateRoleRequest.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateRoleRequest.property.permissionsBoundary"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateRoleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

### IamCreateRoleResponse <a name="aws-cdk-sdk.iam.IamCreateRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateRoleResponse: iam.IamCreateRoleResponse = { ... }
```

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateRoleResponse.property.role"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRole`](#aws-cdk-sdk.iam.IamRole)

---

### IamCreateSamlProviderRequest <a name="aws-cdk-sdk.iam.IamCreateSamlProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateSamlProviderRequest: iam.IamCreateSamlProviderRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateSamlProviderRequest.property.name"></a>

- *Type:* `string`

---

##### `samlMetadataDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateSamlProviderRequest.property.samlMetadataDocument"></a>

- *Type:* `string`

---

### IamCreateSamlProviderResponse <a name="aws-cdk-sdk.iam.IamCreateSamlProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateSamlProviderResponse: iam.IamCreateSamlProviderResponse = { ... }
```

##### `samlProviderArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateSamlProviderResponse.property.samlProviderArn"></a>

- *Type:* `string`

---

### IamCreateServiceLinkedRoleRequest <a name="aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateServiceLinkedRoleRequest: iam.IamCreateServiceLinkedRoleRequest = { ... }
```

##### `awsServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest.property.awsServiceName"></a>

- *Type:* `string`

---

##### `customSuffix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest.property.customSuffix"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest.property.description"></a>

- *Type:* `string`

---

### IamCreateServiceLinkedRoleResponse <a name="aws-cdk-sdk.iam.IamCreateServiceLinkedRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateServiceLinkedRoleResponse: iam.IamCreateServiceLinkedRoleResponse = { ... }
```

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateServiceLinkedRoleResponse.property.role"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRole`](#aws-cdk-sdk.iam.IamRole)

---

### IamCreateServiceSpecificCredentialRequest <a name="aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateServiceSpecificCredentialRequest: iam.IamCreateServiceSpecificCredentialRequest = { ... }
```

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialRequest.property.serviceName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialRequest.property.userName"></a>

- *Type:* `string`

---

### IamCreateServiceSpecificCredentialResponse <a name="aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateServiceSpecificCredentialResponse: iam.IamCreateServiceSpecificCredentialResponse = { ... }
```

##### `serviceSpecificCredential`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialResponse.property.serviceSpecificCredential"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServiceSpecificCredential`](#aws-cdk-sdk.iam.IamServiceSpecificCredential)

---

### IamCreateUserRequest <a name="aws-cdk-sdk.iam.IamCreateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateUserRequest: iam.IamCreateUserRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateUserRequest.property.userName"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateUserRequest.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateUserRequest.property.permissionsBoundary"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateUserRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

### IamCreateUserResponse <a name="aws-cdk-sdk.iam.IamCreateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateUserResponse: iam.IamCreateUserResponse = { ... }
```

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUser`](#aws-cdk-sdk.iam.IamUser)

---

### IamCreateVirtualMfaDeviceRequest <a name="aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateVirtualMfaDeviceRequest: iam.IamCreateVirtualMfaDeviceRequest = { ... }
```

##### `virtualMfaDeviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest.property.virtualMfaDeviceName"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest.property.path"></a>

- *Type:* `string`

---

### IamCreateVirtualMfaDeviceResponse <a name="aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamCreateVirtualMfaDeviceResponse: iam.IamCreateVirtualMfaDeviceResponse = { ... }
```

##### `virtualMfaDevice`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceResponse.property.virtualMfaDevice"></a>

- *Type:* [`aws-cdk-sdk.iam.IamVirtualMfaDevice`](#aws-cdk-sdk.iam.IamVirtualMfaDevice)

---

### IamDeactivateMfaDeviceRequest <a name="aws-cdk-sdk.iam.IamDeactivateMfaDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeactivateMfaDeviceRequest: iam.IamDeactivateMfaDeviceRequest = { ... }
```

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeactivateMfaDeviceRequest.property.serialNumber"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeactivateMfaDeviceRequest.property.userName"></a>

- *Type:* `string`

---

### IamDeleteAccessKeyRequest <a name="aws-cdk-sdk.iam.IamDeleteAccessKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteAccessKeyRequest: iam.IamDeleteAccessKeyRequest = { ... }
```

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteAccessKeyRequest.property.accessKeyId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamDeleteAccessKeyRequest.property.userName"></a>

- *Type:* `string`

---

### IamDeleteAccountAliasRequest <a name="aws-cdk-sdk.iam.IamDeleteAccountAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteAccountAliasRequest: iam.IamDeleteAccountAliasRequest = { ... }
```

##### `accountAlias`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteAccountAliasRequest.property.accountAlias"></a>

- *Type:* `string`

---

### IamDeleteGroupPolicyRequest <a name="aws-cdk-sdk.iam.IamDeleteGroupPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteGroupPolicyRequest: iam.IamDeleteGroupPolicyRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteGroupPolicyRequest.property.groupName"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteGroupPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

### IamDeleteGroupRequest <a name="aws-cdk-sdk.iam.IamDeleteGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteGroupRequest: iam.IamDeleteGroupRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteGroupRequest.property.groupName"></a>

- *Type:* `string`

---

### IamDeleteInstanceProfileRequest <a name="aws-cdk-sdk.iam.IamDeleteInstanceProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteInstanceProfileRequest: iam.IamDeleteInstanceProfileRequest = { ... }
```

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteInstanceProfileRequest.property.instanceProfileName"></a>

- *Type:* `string`

---

### IamDeleteLoginProfileRequest <a name="aws-cdk-sdk.iam.IamDeleteLoginProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteLoginProfileRequest: iam.IamDeleteLoginProfileRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteLoginProfileRequest.property.userName"></a>

- *Type:* `string`

---

### IamDeleteOpenIdConnectProviderRequest <a name="aws-cdk-sdk.iam.IamDeleteOpenIdConnectProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteOpenIdConnectProviderRequest: iam.IamDeleteOpenIdConnectProviderRequest = { ... }
```

##### `openIdConnectProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteOpenIdConnectProviderRequest.property.openIdConnectProviderArn"></a>

- *Type:* `string`

---

### IamDeletePolicyRequest <a name="aws-cdk-sdk.iam.IamDeletePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeletePolicyRequest: iam.IamDeletePolicyRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeletePolicyRequest.property.policyArn"></a>

- *Type:* `string`

---

### IamDeletePolicyVersionRequest <a name="aws-cdk-sdk.iam.IamDeletePolicyVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeletePolicyVersionRequest: iam.IamDeletePolicyVersionRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeletePolicyVersionRequest.property.policyArn"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeletePolicyVersionRequest.property.versionId"></a>

- *Type:* `string`

---

### IamDeleteRolePermissionsBoundaryRequest <a name="aws-cdk-sdk.iam.IamDeleteRolePermissionsBoundaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteRolePermissionsBoundaryRequest: iam.IamDeleteRolePermissionsBoundaryRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteRolePermissionsBoundaryRequest.property.roleName"></a>

- *Type:* `string`

---

### IamDeleteRolePolicyRequest <a name="aws-cdk-sdk.iam.IamDeleteRolePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteRolePolicyRequest: iam.IamDeleteRolePolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteRolePolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteRolePolicyRequest.property.roleName"></a>

- *Type:* `string`

---

### IamDeleteRoleRequest <a name="aws-cdk-sdk.iam.IamDeleteRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteRoleRequest: iam.IamDeleteRoleRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteRoleRequest.property.roleName"></a>

- *Type:* `string`

---

### IamDeleteSamlProviderRequest <a name="aws-cdk-sdk.iam.IamDeleteSamlProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteSamlProviderRequest: iam.IamDeleteSamlProviderRequest = { ... }
```

##### `samlProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteSamlProviderRequest.property.samlProviderArn"></a>

- *Type:* `string`

---

### IamDeleteServerCertificateRequest <a name="aws-cdk-sdk.iam.IamDeleteServerCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteServerCertificateRequest: iam.IamDeleteServerCertificateRequest = { ... }
```

##### `serverCertificateName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteServerCertificateRequest.property.serverCertificateName"></a>

- *Type:* `string`

---

### IamDeleteServiceLinkedRoleRequest <a name="aws-cdk-sdk.iam.IamDeleteServiceLinkedRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteServiceLinkedRoleRequest: iam.IamDeleteServiceLinkedRoleRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteServiceLinkedRoleRequest.property.roleName"></a>

- *Type:* `string`

---

### IamDeleteServiceLinkedRoleResponse <a name="aws-cdk-sdk.iam.IamDeleteServiceLinkedRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteServiceLinkedRoleResponse: iam.IamDeleteServiceLinkedRoleResponse = { ... }
```

##### `deletionTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteServiceLinkedRoleResponse.property.deletionTaskId"></a>

- *Type:* `string`

---

### IamDeleteServiceSpecificCredentialRequest <a name="aws-cdk-sdk.iam.IamDeleteServiceSpecificCredentialRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteServiceSpecificCredentialRequest: iam.IamDeleteServiceSpecificCredentialRequest = { ... }
```

##### `serviceSpecificCredentialId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteServiceSpecificCredentialRequest.property.serviceSpecificCredentialId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamDeleteServiceSpecificCredentialRequest.property.userName"></a>

- *Type:* `string`

---

### IamDeleteSigningCertificateRequest <a name="aws-cdk-sdk.iam.IamDeleteSigningCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteSigningCertificateRequest: iam.IamDeleteSigningCertificateRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteSigningCertificateRequest.property.certificateId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamDeleteSigningCertificateRequest.property.userName"></a>

- *Type:* `string`

---

### IamDeleteSshPublicKeyRequest <a name="aws-cdk-sdk.iam.IamDeleteSshPublicKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteSshPublicKeyRequest: iam.IamDeleteSshPublicKeyRequest = { ... }
```

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteSshPublicKeyRequest.property.sshPublicKeyId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteSshPublicKeyRequest.property.userName"></a>

- *Type:* `string`

---

### IamDeleteUserPermissionsBoundaryRequest <a name="aws-cdk-sdk.iam.IamDeleteUserPermissionsBoundaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteUserPermissionsBoundaryRequest: iam.IamDeleteUserPermissionsBoundaryRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteUserPermissionsBoundaryRequest.property.userName"></a>

- *Type:* `string`

---

### IamDeleteUserPolicyRequest <a name="aws-cdk-sdk.iam.IamDeleteUserPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteUserPolicyRequest: iam.IamDeleteUserPolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteUserPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteUserPolicyRequest.property.userName"></a>

- *Type:* `string`

---

### IamDeleteUserRequest <a name="aws-cdk-sdk.iam.IamDeleteUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteUserRequest: iam.IamDeleteUserRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteUserRequest.property.userName"></a>

- *Type:* `string`

---

### IamDeleteVirtualMfaDeviceRequest <a name="aws-cdk-sdk.iam.IamDeleteVirtualMfaDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeleteVirtualMfaDeviceRequest: iam.IamDeleteVirtualMfaDeviceRequest = { ... }
```

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDeleteVirtualMfaDeviceRequest.property.serialNumber"></a>

- *Type:* `string`

---

### IamDeletionTaskFailureReasonType <a name="aws-cdk-sdk.iam.IamDeletionTaskFailureReasonType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDeletionTaskFailureReasonType: iam.IamDeletionTaskFailureReasonType = { ... }
```

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamDeletionTaskFailureReasonType.property.reason"></a>

- *Type:* `string`

---

##### `roleUsageList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamDeletionTaskFailureReasonType.property.roleUsageList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRoleUsageType`](#aws-cdk-sdk.iam.IamRoleUsageType)[]

---

### IamDetachGroupPolicyRequest <a name="aws-cdk-sdk.iam.IamDetachGroupPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDetachGroupPolicyRequest: iam.IamDetachGroupPolicyRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDetachGroupPolicyRequest.property.groupName"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDetachGroupPolicyRequest.property.policyArn"></a>

- *Type:* `string`

---

### IamDetachRolePolicyRequest <a name="aws-cdk-sdk.iam.IamDetachRolePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDetachRolePolicyRequest: iam.IamDetachRolePolicyRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDetachRolePolicyRequest.property.policyArn"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDetachRolePolicyRequest.property.roleName"></a>

- *Type:* `string`

---

### IamDetachUserPolicyRequest <a name="aws-cdk-sdk.iam.IamDetachUserPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamDetachUserPolicyRequest: iam.IamDetachUserPolicyRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDetachUserPolicyRequest.property.policyArn"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamDetachUserPolicyRequest.property.userName"></a>

- *Type:* `string`

---

### IamEnableMfaDeviceRequest <a name="aws-cdk-sdk.iam.IamEnableMfaDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamEnableMfaDeviceRequest: iam.IamEnableMfaDeviceRequest = { ... }
```

##### `authenticationCode1`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEnableMfaDeviceRequest.property.authenticationCode1"></a>

- *Type:* `string`

---

##### `authenticationCode2`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEnableMfaDeviceRequest.property.authenticationCode2"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEnableMfaDeviceRequest.property.serialNumber"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEnableMfaDeviceRequest.property.userName"></a>

- *Type:* `string`

---

### IamEntityDetails <a name="aws-cdk-sdk.iam.IamEntityDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamEntityDetails: iam.IamEntityDetails = { ... }
```

##### `entityInfo`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEntityDetails.property.entityInfo"></a>

- *Type:* [`aws-cdk-sdk.iam.IamEntityInfo`](#aws-cdk-sdk.iam.IamEntityInfo)

---

##### `lastAuthenticated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamEntityDetails.property.lastAuthenticated"></a>

- *Type:* `string`

---

### IamEntityInfo <a name="aws-cdk-sdk.iam.IamEntityInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamEntityInfo: iam.IamEntityInfo = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEntityInfo.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEntityInfo.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEntityInfo.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEntityInfo.property.type"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamEntityInfo.property.path"></a>

- *Type:* `string`

---

### IamErrorDetails <a name="aws-cdk-sdk.iam.IamErrorDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamErrorDetails: iam.IamErrorDetails = { ... }
```

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamErrorDetails.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamErrorDetails.property.message"></a>

- *Type:* `string`

---

### IamEvaluationResult <a name="aws-cdk-sdk.iam.IamEvaluationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamEvaluationResult: iam.IamEvaluationResult = { ... }
```

##### `evalActionName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEvaluationResult.property.evalActionName"></a>

- *Type:* `string`

---

##### `evalDecision`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamEvaluationResult.property.evalDecision"></a>

- *Type:* `string`

---

##### `evalDecisionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamEvaluationResult.property.evalDecisionDetails"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `evalResourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamEvaluationResult.property.evalResourceName"></a>

- *Type:* `string`

---

##### `matchedStatements`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamEvaluationResult.property.matchedStatements"></a>

- *Type:* [`aws-cdk-sdk.iam.IamStatement`](#aws-cdk-sdk.iam.IamStatement)[]

---

##### `missingContextValues`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamEvaluationResult.property.missingContextValues"></a>

- *Type:* `string`[]

---

##### `organizationsDecisionDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamEvaluationResult.property.organizationsDecisionDetail"></a>

- *Type:* [`aws-cdk-sdk.iam.IamOrganizationsDecisionDetail`](#aws-cdk-sdk.iam.IamOrganizationsDecisionDetail)

---

##### `permissionsBoundaryDecisionDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamEvaluationResult.property.permissionsBoundaryDecisionDetail"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPermissionsBoundaryDecisionDetail`](#aws-cdk-sdk.iam.IamPermissionsBoundaryDecisionDetail)

---

##### `resourceSpecificResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamEvaluationResult.property.resourceSpecificResults"></a>

- *Type:* [`aws-cdk-sdk.iam.IamResourceSpecificResult`](#aws-cdk-sdk.iam.IamResourceSpecificResult)[]

---

### IamGenerateCredentialReportResponse <a name="aws-cdk-sdk.iam.IamGenerateCredentialReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGenerateCredentialReportResponse: iam.IamGenerateCredentialReportResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGenerateCredentialReportResponse.property.description"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGenerateCredentialReportResponse.property.state"></a>

- *Type:* `string`

---

### IamGenerateOrganizationsAccessReportRequest <a name="aws-cdk-sdk.iam.IamGenerateOrganizationsAccessReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGenerateOrganizationsAccessReportRequest: iam.IamGenerateOrganizationsAccessReportRequest = { ... }
```

##### `entityPath`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGenerateOrganizationsAccessReportRequest.property.entityPath"></a>

- *Type:* `string`

---

##### `organizationsPolicyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGenerateOrganizationsAccessReportRequest.property.organizationsPolicyId"></a>

- *Type:* `string`

---

### IamGenerateOrganizationsAccessReportResponse <a name="aws-cdk-sdk.iam.IamGenerateOrganizationsAccessReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGenerateOrganizationsAccessReportResponse: iam.IamGenerateOrganizationsAccessReportResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGenerateOrganizationsAccessReportResponse.property.jobId"></a>

- *Type:* `string`

---

### IamGenerateServiceLastAccessedDetailsRequest <a name="aws-cdk-sdk.iam.IamGenerateServiceLastAccessedDetailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGenerateServiceLastAccessedDetailsRequest: iam.IamGenerateServiceLastAccessedDetailsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGenerateServiceLastAccessedDetailsRequest.property.arn"></a>

- *Type:* `string`

---

##### `granularity`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGenerateServiceLastAccessedDetailsRequest.property.granularity"></a>

- *Type:* `string`

---

### IamGenerateServiceLastAccessedDetailsResponse <a name="aws-cdk-sdk.iam.IamGenerateServiceLastAccessedDetailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGenerateServiceLastAccessedDetailsResponse: iam.IamGenerateServiceLastAccessedDetailsResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGenerateServiceLastAccessedDetailsResponse.property.jobId"></a>

- *Type:* `string`

---

### IamGetAccessKeyLastUsedRequest <a name="aws-cdk-sdk.iam.IamGetAccessKeyLastUsedRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetAccessKeyLastUsedRequest: iam.IamGetAccessKeyLastUsedRequest = { ... }
```

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetAccessKeyLastUsedRequest.property.accessKeyId"></a>

- *Type:* `string`

---

### IamGetAccessKeyLastUsedResponse <a name="aws-cdk-sdk.iam.IamGetAccessKeyLastUsedResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetAccessKeyLastUsedResponse: iam.IamGetAccessKeyLastUsedResponse = { ... }
```

##### `accessKeyLastUsed`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccessKeyLastUsedResponse.property.accessKeyLastUsed"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAccessKeyLastUsed`](#aws-cdk-sdk.iam.IamAccessKeyLastUsed)

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccessKeyLastUsedResponse.property.userName"></a>

- *Type:* `string`

---

### IamGetAccountAuthorizationDetailsRequest <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetAccountAuthorizationDetailsRequest: iam.IamGetAccountAuthorizationDetailsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsRequest.property.filter"></a>

- *Type:* `string`[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamGetAccountAuthorizationDetailsResponse <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetAccountAuthorizationDetailsResponse: iam.IamGetAccountAuthorizationDetailsResponse = { ... }
```

##### `groupDetailList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsResponse.property.groupDetailList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGroupDetail`](#aws-cdk-sdk.iam.IamGroupDetail)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsResponse.property.marker"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsResponse.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamManagedPolicyDetail`](#aws-cdk-sdk.iam.IamManagedPolicyDetail)[]

---

##### `roleDetailList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsResponse.property.roleDetailList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRoleDetail`](#aws-cdk-sdk.iam.IamRoleDetail)[]

---

##### `userDetailList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsResponse.property.userDetailList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUserDetail`](#aws-cdk-sdk.iam.IamUserDetail)[]

---

### IamGetAccountPasswordPolicyResponse <a name="aws-cdk-sdk.iam.IamGetAccountPasswordPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetAccountPasswordPolicyResponse: iam.IamGetAccountPasswordPolicyResponse = { ... }
```

##### `passwordPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetAccountPasswordPolicyResponse.property.passwordPolicy"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPasswordPolicy`](#aws-cdk-sdk.iam.IamPasswordPolicy)

---

### IamGetAccountSummaryResponse <a name="aws-cdk-sdk.iam.IamGetAccountSummaryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetAccountSummaryResponse: iam.IamGetAccountSummaryResponse = { ... }
```

##### `summaryMap`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetAccountSummaryResponse.property.summaryMap"></a>

- *Type:* {[ key: string ]: `number`}

---

### IamGetContextKeysForCustomPolicyRequest <a name="aws-cdk-sdk.iam.IamGetContextKeysForCustomPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetContextKeysForCustomPolicyRequest: iam.IamGetContextKeysForCustomPolicyRequest = { ... }
```

##### `policyInputList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetContextKeysForCustomPolicyRequest.property.policyInputList"></a>

- *Type:* `string`[]

---

### IamGetContextKeysForPolicyResponse <a name="aws-cdk-sdk.iam.IamGetContextKeysForPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetContextKeysForPolicyResponse: iam.IamGetContextKeysForPolicyResponse = { ... }
```

##### `contextKeyNames`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetContextKeysForPolicyResponse.property.contextKeyNames"></a>

- *Type:* `string`[]

---

### IamGetContextKeysForPrincipalPolicyRequest <a name="aws-cdk-sdk.iam.IamGetContextKeysForPrincipalPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetContextKeysForPrincipalPolicyRequest: iam.IamGetContextKeysForPrincipalPolicyRequest = { ... }
```

##### `policySourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetContextKeysForPrincipalPolicyRequest.property.policySourceArn"></a>

- *Type:* `string`

---

##### `policyInputList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetContextKeysForPrincipalPolicyRequest.property.policyInputList"></a>

- *Type:* `string`[]

---

### IamGetCredentialReportResponse <a name="aws-cdk-sdk.iam.IamGetCredentialReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetCredentialReportResponse: iam.IamGetCredentialReportResponse = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetCredentialReportResponse.property.content"></a>

- *Type:* `any`

---

##### `generatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetCredentialReportResponse.property.generatedTime"></a>

- *Type:* `string`

---

##### `reportFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetCredentialReportResponse.property.reportFormat"></a>

- *Type:* `string`

---

### IamGetGroupPolicyRequest <a name="aws-cdk-sdk.iam.IamGetGroupPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetGroupPolicyRequest: iam.IamGetGroupPolicyRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetGroupPolicyRequest.property.groupName"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetGroupPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

### IamGetGroupPolicyResponse <a name="aws-cdk-sdk.iam.IamGetGroupPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetGroupPolicyResponse: iam.IamGetGroupPolicyResponse = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetGroupPolicyResponse.property.groupName"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetGroupPolicyResponse.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetGroupPolicyResponse.property.policyName"></a>

- *Type:* `string`

---

### IamGetGroupRequest <a name="aws-cdk-sdk.iam.IamGetGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetGroupRequest: iam.IamGetGroupRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetGroupRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetGroupRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamGetGroupResponse <a name="aws-cdk-sdk.iam.IamGetGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetGroupResponse: iam.IamGetGroupResponse = { ... }
```

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetGroupResponse.property.group"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGroup`](#aws-cdk-sdk.iam.IamGroup)

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetGroupResponse.property.users"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUser`](#aws-cdk-sdk.iam.IamUser)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetGroupResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetGroupResponse.property.marker"></a>

- *Type:* `string`

---

### IamGetInstanceProfileRequest <a name="aws-cdk-sdk.iam.IamGetInstanceProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetInstanceProfileRequest: iam.IamGetInstanceProfileRequest = { ... }
```

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetInstanceProfileRequest.property.instanceProfileName"></a>

- *Type:* `string`

---

### IamGetInstanceProfileResponse <a name="aws-cdk-sdk.iam.IamGetInstanceProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetInstanceProfileResponse: iam.IamGetInstanceProfileResponse = { ... }
```

##### `instanceProfile`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetInstanceProfileResponse.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.iam.IamInstanceProfile`](#aws-cdk-sdk.iam.IamInstanceProfile)

---

### IamGetLoginProfileRequest <a name="aws-cdk-sdk.iam.IamGetLoginProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetLoginProfileRequest: iam.IamGetLoginProfileRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetLoginProfileRequest.property.userName"></a>

- *Type:* `string`

---

### IamGetLoginProfileResponse <a name="aws-cdk-sdk.iam.IamGetLoginProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetLoginProfileResponse: iam.IamGetLoginProfileResponse = { ... }
```

##### `loginProfile`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetLoginProfileResponse.property.loginProfile"></a>

- *Type:* [`aws-cdk-sdk.iam.IamLoginProfile`](#aws-cdk-sdk.iam.IamLoginProfile)

---

### IamGetOpenIdConnectProviderRequest <a name="aws-cdk-sdk.iam.IamGetOpenIdConnectProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetOpenIdConnectProviderRequest: iam.IamGetOpenIdConnectProviderRequest = { ... }
```

##### `openIdConnectProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetOpenIdConnectProviderRequest.property.openIdConnectProviderArn"></a>

- *Type:* `string`

---

### IamGetOpenIdConnectProviderResponse <a name="aws-cdk-sdk.iam.IamGetOpenIdConnectProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetOpenIdConnectProviderResponse: iam.IamGetOpenIdConnectProviderResponse = { ... }
```

##### `clientIdList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOpenIdConnectProviderResponse.property.clientIdList"></a>

- *Type:* `string`[]

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOpenIdConnectProviderResponse.property.createDate"></a>

- *Type:* `string`

---

##### `thumbprintList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOpenIdConnectProviderResponse.property.thumbprintList"></a>

- *Type:* `string`[]

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOpenIdConnectProviderResponse.property.url"></a>

- *Type:* `string`

---

### IamGetOrganizationsAccessReportRequest <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetOrganizationsAccessReportRequest: iam.IamGetOrganizationsAccessReportRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest.property.jobId"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `sortKey`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest.property.sortKey"></a>

- *Type:* `string`

---

### IamGetOrganizationsAccessReportResponse <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetOrganizationsAccessReportResponse: iam.IamGetOrganizationsAccessReportResponse = { ... }
```

##### `jobCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportResponse.property.jobCreationDate"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `accessDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportResponse.property.accessDetails"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAccessDetail`](#aws-cdk-sdk.iam.IamAccessDetail)[]

---

##### `errorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportResponse.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.iam.IamErrorDetails`](#aws-cdk-sdk.iam.IamErrorDetails)

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `jobCompletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportResponse.property.jobCompletionDate"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportResponse.property.marker"></a>

- *Type:* `string`

---

##### `numberOfServicesAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportResponse.property.numberOfServicesAccessible"></a>

- *Type:* `number`

---

##### `numberOfServicesNotAccessed`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetOrganizationsAccessReportResponse.property.numberOfServicesNotAccessed"></a>

- *Type:* `number`

---

### IamGetPolicyRequest <a name="aws-cdk-sdk.iam.IamGetPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetPolicyRequest: iam.IamGetPolicyRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetPolicyRequest.property.policyArn"></a>

- *Type:* `string`

---

### IamGetPolicyResponse <a name="aws-cdk-sdk.iam.IamGetPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetPolicyResponse: iam.IamGetPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetPolicyResponse.property.policy"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicy`](#aws-cdk-sdk.iam.IamPolicy)

---

### IamGetPolicyVersionRequest <a name="aws-cdk-sdk.iam.IamGetPolicyVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetPolicyVersionRequest: iam.IamGetPolicyVersionRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetPolicyVersionRequest.property.policyArn"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetPolicyVersionRequest.property.versionId"></a>

- *Type:* `string`

---

### IamGetPolicyVersionResponse <a name="aws-cdk-sdk.iam.IamGetPolicyVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetPolicyVersionResponse: iam.IamGetPolicyVersionResponse = { ... }
```

##### `policyVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetPolicyVersionResponse.property.policyVersion"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyVersion`](#aws-cdk-sdk.iam.IamPolicyVersion)

---

### IamGetRolePolicyRequest <a name="aws-cdk-sdk.iam.IamGetRolePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetRolePolicyRequest: iam.IamGetRolePolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetRolePolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetRolePolicyRequest.property.roleName"></a>

- *Type:* `string`

---

### IamGetRolePolicyResponse <a name="aws-cdk-sdk.iam.IamGetRolePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetRolePolicyResponse: iam.IamGetRolePolicyResponse = { ... }
```

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetRolePolicyResponse.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetRolePolicyResponse.property.policyName"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetRolePolicyResponse.property.roleName"></a>

- *Type:* `string`

---

### IamGetRoleRequest <a name="aws-cdk-sdk.iam.IamGetRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetRoleRequest: iam.IamGetRoleRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetRoleRequest.property.roleName"></a>

- *Type:* `string`

---

### IamGetRoleResponse <a name="aws-cdk-sdk.iam.IamGetRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetRoleResponse: iam.IamGetRoleResponse = { ... }
```

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetRoleResponse.property.role"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRole`](#aws-cdk-sdk.iam.IamRole)

---

### IamGetSamlProviderRequest <a name="aws-cdk-sdk.iam.IamGetSamlProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetSamlProviderRequest: iam.IamGetSamlProviderRequest = { ... }
```

##### `samlProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetSamlProviderRequest.property.samlProviderArn"></a>

- *Type:* `string`

---

### IamGetSamlProviderResponse <a name="aws-cdk-sdk.iam.IamGetSamlProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetSamlProviderResponse: iam.IamGetSamlProviderResponse = { ... }
```

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetSamlProviderResponse.property.createDate"></a>

- *Type:* `string`

---

##### `samlMetadataDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetSamlProviderResponse.property.samlMetadataDocument"></a>

- *Type:* `string`

---

##### `validUntil`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetSamlProviderResponse.property.validUntil"></a>

- *Type:* `string`

---

### IamGetServerCertificateRequest <a name="aws-cdk-sdk.iam.IamGetServerCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetServerCertificateRequest: iam.IamGetServerCertificateRequest = { ... }
```

##### `serverCertificateName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServerCertificateRequest.property.serverCertificateName"></a>

- *Type:* `string`

---

### IamGetServerCertificateResponse <a name="aws-cdk-sdk.iam.IamGetServerCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetServerCertificateResponse: iam.IamGetServerCertificateResponse = { ... }
```

##### `serverCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServerCertificateResponse.property.serverCertificate"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServerCertificate`](#aws-cdk-sdk.iam.IamServerCertificate)

---

### IamGetServiceLastAccessedDetailsRequest <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetServiceLastAccessedDetailsRequest: iam.IamGetServiceLastAccessedDetailsRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsRequest.property.jobId"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamGetServiceLastAccessedDetailsResponse <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetServiceLastAccessedDetailsResponse: iam.IamGetServiceLastAccessedDetailsResponse = { ... }
```

##### `jobCompletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsResponse.property.jobCompletionDate"></a>

- *Type:* `string`

---

##### `jobCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsResponse.property.jobCreationDate"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `servicesLastAccessed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsResponse.property.servicesLastAccessed"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServiceLastAccessed`](#aws-cdk-sdk.iam.IamServiceLastAccessed)[]

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsResponse.property.error"></a>

- *Type:* [`aws-cdk-sdk.iam.IamErrorDetails`](#aws-cdk-sdk.iam.IamErrorDetails)

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsResponse.property.jobType"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsResponse.property.marker"></a>

- *Type:* `string`

---

### IamGetServiceLastAccessedDetailsWithEntitiesRequest <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetServiceLastAccessedDetailsWithEntitiesRequest: iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest.property.jobId"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamGetServiceLastAccessedDetailsWithEntitiesResponse <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetServiceLastAccessedDetailsWithEntitiesResponse: iam.IamGetServiceLastAccessedDetailsWithEntitiesResponse = { ... }
```

##### `entityDetailsList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesResponse.property.entityDetailsList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamEntityDetails`](#aws-cdk-sdk.iam.IamEntityDetails)[]

---

##### `jobCompletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesResponse.property.jobCompletionDate"></a>

- *Type:* `string`

---

##### `jobCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesResponse.property.jobCreationDate"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesResponse.property.error"></a>

- *Type:* [`aws-cdk-sdk.iam.IamErrorDetails`](#aws-cdk-sdk.iam.IamErrorDetails)

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesResponse.property.marker"></a>

- *Type:* `string`

---

### IamGetServiceLinkedRoleDeletionStatusRequest <a name="aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetServiceLinkedRoleDeletionStatusRequest: iam.IamGetServiceLinkedRoleDeletionStatusRequest = { ... }
```

##### `deletionTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusRequest.property.deletionTaskId"></a>

- *Type:* `string`

---

### IamGetServiceLinkedRoleDeletionStatusResponse <a name="aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetServiceLinkedRoleDeletionStatusResponse: iam.IamGetServiceLinkedRoleDeletionStatusResponse = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusResponse.property.status"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusResponse.property.reason"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeletionTaskFailureReasonType`](#aws-cdk-sdk.iam.IamDeletionTaskFailureReasonType)

---

### IamGetSshPublicKeyRequest <a name="aws-cdk-sdk.iam.IamGetSshPublicKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetSshPublicKeyRequest: iam.IamGetSshPublicKeyRequest = { ... }
```

##### `encoding`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetSshPublicKeyRequest.property.encoding"></a>

- *Type:* `string`

---

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetSshPublicKeyRequest.property.sshPublicKeyId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetSshPublicKeyRequest.property.userName"></a>

- *Type:* `string`

---

### IamGetSshPublicKeyResponse <a name="aws-cdk-sdk.iam.IamGetSshPublicKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetSshPublicKeyResponse: iam.IamGetSshPublicKeyResponse = { ... }
```

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetSshPublicKeyResponse.property.sshPublicKey"></a>

- *Type:* [`aws-cdk-sdk.iam.IamsshPublicKey`](#aws-cdk-sdk.iam.IamsshPublicKey)

---

### IamGetUserPolicyRequest <a name="aws-cdk-sdk.iam.IamGetUserPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetUserPolicyRequest: iam.IamGetUserPolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetUserPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetUserPolicyRequest.property.userName"></a>

- *Type:* `string`

---

### IamGetUserPolicyResponse <a name="aws-cdk-sdk.iam.IamGetUserPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetUserPolicyResponse: iam.IamGetUserPolicyResponse = { ... }
```

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetUserPolicyResponse.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetUserPolicyResponse.property.policyName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetUserPolicyResponse.property.userName"></a>

- *Type:* `string`

---

### IamGetUserRequest <a name="aws-cdk-sdk.iam.IamGetUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetUserRequest: iam.IamGetUserRequest = { ... }
```

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGetUserRequest.property.userName"></a>

- *Type:* `string`

---

### IamGetUserResponse <a name="aws-cdk-sdk.iam.IamGetUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGetUserResponse: iam.IamGetUserResponse = { ... }
```

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGetUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUser`](#aws-cdk-sdk.iam.IamUser)

---

### IamGroup <a name="aws-cdk-sdk.iam.IamGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGroup: iam.IamGroup = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGroup.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGroup.property.createDate"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGroup.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGroup.property.groupName"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamGroup.property.path"></a>

- *Type:* `string`

---

### IamGroupDetail <a name="aws-cdk-sdk.iam.IamGroupDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamGroupDetail: iam.IamGroupDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGroupDetail.property.arn"></a>

- *Type:* `string`

---

##### `attachedManagedPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGroupDetail.property.attachedManagedPolicies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPolicy`](#aws-cdk-sdk.iam.IamAttachedPolicy)[]

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGroupDetail.property.createDate"></a>

- *Type:* `string`

---

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGroupDetail.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGroupDetail.property.groupName"></a>

- *Type:* `string`

---

##### `groupPolicyList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGroupDetail.property.groupPolicyList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyDetail`](#aws-cdk-sdk.iam.IamPolicyDetail)[]

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamGroupDetail.property.path"></a>

- *Type:* `string`

---

### IamInstanceProfile <a name="aws-cdk-sdk.iam.IamInstanceProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamInstanceProfile: iam.IamInstanceProfile = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamInstanceProfile.property.createDate"></a>

- *Type:* `string`

---

##### `instanceProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamInstanceProfile.property.instanceProfileId"></a>

- *Type:* `string`

---

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamInstanceProfile.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamInstanceProfile.property.path"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamInstanceProfile.property.roles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRole`](#aws-cdk-sdk.iam.IamRole)[]

---

### IamListAccessKeysRequest <a name="aws-cdk-sdk.iam.IamListAccessKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListAccessKeysRequest: iam.IamListAccessKeysRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAccessKeysRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAccessKeysRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAccessKeysRequest.property.userName"></a>

- *Type:* `string`

---

### IamListAccessKeysResponse <a name="aws-cdk-sdk.iam.IamListAccessKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListAccessKeysResponse: iam.IamListAccessKeysResponse = { ... }
```

##### `accessKeyMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListAccessKeysResponse.property.accessKeyMetadata"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAccessKeyMetadata`](#aws-cdk-sdk.iam.IamAccessKeyMetadata)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAccessKeysResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAccessKeysResponse.property.marker"></a>

- *Type:* `string`

---

### IamListAccountAliasesRequest <a name="aws-cdk-sdk.iam.IamListAccountAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListAccountAliasesRequest: iam.IamListAccountAliasesRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAccountAliasesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAccountAliasesRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamListAccountAliasesResponse <a name="aws-cdk-sdk.iam.IamListAccountAliasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListAccountAliasesResponse: iam.IamListAccountAliasesResponse = { ... }
```

##### `accountAliases`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListAccountAliasesResponse.property.accountAliases"></a>

- *Type:* `string`[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAccountAliasesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAccountAliasesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListAttachedGroupPoliciesRequest <a name="aws-cdk-sdk.iam.IamListAttachedGroupPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListAttachedGroupPoliciesRequest: iam.IamListAttachedGroupPoliciesRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListAttachedGroupPoliciesRequest.property.groupName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedGroupPoliciesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedGroupPoliciesRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `pathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedGroupPoliciesRequest.property.pathPrefix"></a>

- *Type:* `string`

---

### IamListAttachedGroupPoliciesResponse <a name="aws-cdk-sdk.iam.IamListAttachedGroupPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListAttachedGroupPoliciesResponse: iam.IamListAttachedGroupPoliciesResponse = { ... }
```

##### `attachedPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedGroupPoliciesResponse.property.attachedPolicies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPolicy`](#aws-cdk-sdk.iam.IamAttachedPolicy)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedGroupPoliciesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedGroupPoliciesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListAttachedRolePoliciesRequest <a name="aws-cdk-sdk.iam.IamListAttachedRolePoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListAttachedRolePoliciesRequest: iam.IamListAttachedRolePoliciesRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListAttachedRolePoliciesRequest.property.roleName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedRolePoliciesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedRolePoliciesRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `pathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedRolePoliciesRequest.property.pathPrefix"></a>

- *Type:* `string`

---

### IamListAttachedRolePoliciesResponse <a name="aws-cdk-sdk.iam.IamListAttachedRolePoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListAttachedRolePoliciesResponse: iam.IamListAttachedRolePoliciesResponse = { ... }
```

##### `attachedPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedRolePoliciesResponse.property.attachedPolicies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPolicy`](#aws-cdk-sdk.iam.IamAttachedPolicy)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedRolePoliciesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedRolePoliciesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListAttachedUserPoliciesRequest <a name="aws-cdk-sdk.iam.IamListAttachedUserPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListAttachedUserPoliciesRequest: iam.IamListAttachedUserPoliciesRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListAttachedUserPoliciesRequest.property.userName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedUserPoliciesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedUserPoliciesRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `pathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedUserPoliciesRequest.property.pathPrefix"></a>

- *Type:* `string`

---

### IamListAttachedUserPoliciesResponse <a name="aws-cdk-sdk.iam.IamListAttachedUserPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListAttachedUserPoliciesResponse: iam.IamListAttachedUserPoliciesResponse = { ... }
```

##### `attachedPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedUserPoliciesResponse.property.attachedPolicies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPolicy`](#aws-cdk-sdk.iam.IamAttachedPolicy)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedUserPoliciesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListAttachedUserPoliciesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListEntitiesForPolicyRequest <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListEntitiesForPolicyRequest: iam.IamListEntitiesForPolicyRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest.property.policyArn"></a>

- *Type:* `string`

---

##### `entityFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest.property.entityFilter"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `pathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest.property.pathPrefix"></a>

- *Type:* `string`

---

##### `policyUsageFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest.property.policyUsageFilter"></a>

- *Type:* `string`

---

### IamListEntitiesForPolicyResponse <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListEntitiesForPolicyResponse: iam.IamListEntitiesForPolicyResponse = { ... }
```

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyResponse.property.marker"></a>

- *Type:* `string`

---

##### `policyGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyResponse.property.policyGroups"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyGroup`](#aws-cdk-sdk.iam.IamPolicyGroup)[]

---

##### `policyRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyResponse.property.policyRoles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyRole`](#aws-cdk-sdk.iam.IamPolicyRole)[]

---

##### `policyUsers`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListEntitiesForPolicyResponse.property.policyUsers"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyUser`](#aws-cdk-sdk.iam.IamPolicyUser)[]

---

### IamListGroupPoliciesRequest <a name="aws-cdk-sdk.iam.IamListGroupPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListGroupPoliciesRequest: iam.IamListGroupPoliciesRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListGroupPoliciesRequest.property.groupName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupPoliciesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupPoliciesRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamListGroupPoliciesResponse <a name="aws-cdk-sdk.iam.IamListGroupPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListGroupPoliciesResponse: iam.IamListGroupPoliciesResponse = { ... }
```

##### `policyNames`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListGroupPoliciesResponse.property.policyNames"></a>

- *Type:* `string`[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupPoliciesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupPoliciesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListGroupsForUserRequest <a name="aws-cdk-sdk.iam.IamListGroupsForUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListGroupsForUserRequest: iam.IamListGroupsForUserRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListGroupsForUserRequest.property.userName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupsForUserRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupsForUserRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamListGroupsForUserResponse <a name="aws-cdk-sdk.iam.IamListGroupsForUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListGroupsForUserResponse: iam.IamListGroupsForUserResponse = { ... }
```

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListGroupsForUserResponse.property.groups"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGroup`](#aws-cdk-sdk.iam.IamGroup)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupsForUserResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupsForUserResponse.property.marker"></a>

- *Type:* `string`

---

### IamListGroupsRequest <a name="aws-cdk-sdk.iam.IamListGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListGroupsRequest: iam.IamListGroupsRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupsRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `pathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupsRequest.property.pathPrefix"></a>

- *Type:* `string`

---

### IamListGroupsResponse <a name="aws-cdk-sdk.iam.IamListGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListGroupsResponse: iam.IamListGroupsResponse = { ... }
```

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListGroupsResponse.property.groups"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGroup`](#aws-cdk-sdk.iam.IamGroup)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupsResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListGroupsResponse.property.marker"></a>

- *Type:* `string`

---

### IamListInstanceProfilesForRoleRequest <a name="aws-cdk-sdk.iam.IamListInstanceProfilesForRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListInstanceProfilesForRoleRequest: iam.IamListInstanceProfilesForRoleRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesForRoleRequest.property.roleName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesForRoleRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesForRoleRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamListInstanceProfilesForRoleResponse <a name="aws-cdk-sdk.iam.IamListInstanceProfilesForRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListInstanceProfilesForRoleResponse: iam.IamListInstanceProfilesForRoleResponse = { ... }
```

##### `instanceProfiles`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesForRoleResponse.property.instanceProfiles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamInstanceProfile`](#aws-cdk-sdk.iam.IamInstanceProfile)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesForRoleResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesForRoleResponse.property.marker"></a>

- *Type:* `string`

---

### IamListInstanceProfilesRequest <a name="aws-cdk-sdk.iam.IamListInstanceProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListInstanceProfilesRequest: iam.IamListInstanceProfilesRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `pathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesRequest.property.pathPrefix"></a>

- *Type:* `string`

---

### IamListInstanceProfilesResponse <a name="aws-cdk-sdk.iam.IamListInstanceProfilesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListInstanceProfilesResponse: iam.IamListInstanceProfilesResponse = { ... }
```

##### `instanceProfiles`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesResponse.property.instanceProfiles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamInstanceProfile`](#aws-cdk-sdk.iam.IamInstanceProfile)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListInstanceProfilesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListMfaDevicesRequest <a name="aws-cdk-sdk.iam.IamListMfaDevicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListMfaDevicesRequest: iam.IamListMfaDevicesRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListMfaDevicesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListMfaDevicesRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListMfaDevicesRequest.property.userName"></a>

- *Type:* `string`

---

### IamListMfaDevicesResponse <a name="aws-cdk-sdk.iam.IamListMfaDevicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListMfaDevicesResponse: iam.IamListMfaDevicesResponse = { ... }
```

##### `mfaDevices`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListMfaDevicesResponse.property.mfaDevices"></a>

- *Type:* [`aws-cdk-sdk.iam.IammfaDevice`](#aws-cdk-sdk.iam.IammfaDevice)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListMfaDevicesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListMfaDevicesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListOpenIdConnectProvidersRequest <a name="aws-cdk-sdk.iam.IamListOpenIdConnectProvidersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListOpenIdConnectProvidersRequest: iam.IamListOpenIdConnectProvidersRequest = { ... }
```

### IamListOpenIdConnectProvidersResponse <a name="aws-cdk-sdk.iam.IamListOpenIdConnectProvidersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListOpenIdConnectProvidersResponse: iam.IamListOpenIdConnectProvidersResponse = { ... }
```

##### `openIdConnectProviderList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListOpenIdConnectProvidersResponse.property.openIdConnectProviderList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamOpenIdConnectProviderListEntry`](#aws-cdk-sdk.iam.IamOpenIdConnectProviderListEntry)[]

---

### IamListPoliciesGrantingServiceAccessEntry <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListPoliciesGrantingServiceAccessEntry: iam.IamListPoliciesGrantingServiceAccessEntry = { ... }
```

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessEntry.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyGrantingServiceAccess`](#aws-cdk-sdk.iam.IamPolicyGrantingServiceAccess)[]

---

##### `serviceNamespace`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessEntry.property.serviceNamespace"></a>

- *Type:* `string`

---

### IamListPoliciesGrantingServiceAccessRequest <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListPoliciesGrantingServiceAccessRequest: iam.IamListPoliciesGrantingServiceAccessRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessRequest.property.arn"></a>

- *Type:* `string`

---

##### `serviceNamespaces`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessRequest.property.serviceNamespaces"></a>

- *Type:* `string`[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessRequest.property.marker"></a>

- *Type:* `string`

---

### IamListPoliciesGrantingServiceAccessResponse <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListPoliciesGrantingServiceAccessResponse: iam.IamListPoliciesGrantingServiceAccessResponse = { ... }
```

##### `policiesGrantingServiceAccess`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessResponse.property.policiesGrantingServiceAccess"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessEntry`](#aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessEntry)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessResponse.property.marker"></a>

- *Type:* `string`

---

### IamListPoliciesRequest <a name="aws-cdk-sdk.iam.IamListPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListPoliciesRequest: iam.IamListPoliciesRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `onlyAttached`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesRequest.property.onlyAttached"></a>

- *Type:* `boolean`

---

##### `pathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesRequest.property.pathPrefix"></a>

- *Type:* `string`

---

##### `policyUsageFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesRequest.property.policyUsageFilter"></a>

- *Type:* `string`

---

##### `scope`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesRequest.property.scope"></a>

- *Type:* `string`

---

### IamListPoliciesResponse <a name="aws-cdk-sdk.iam.IamListPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListPoliciesResponse: iam.IamListPoliciesResponse = { ... }
```

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesResponse.property.marker"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPoliciesResponse.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicy`](#aws-cdk-sdk.iam.IamPolicy)[]

---

### IamListPolicyVersionsRequest <a name="aws-cdk-sdk.iam.IamListPolicyVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListPolicyVersionsRequest: iam.IamListPolicyVersionsRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListPolicyVersionsRequest.property.policyArn"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPolicyVersionsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPolicyVersionsRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamListPolicyVersionsResponse <a name="aws-cdk-sdk.iam.IamListPolicyVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListPolicyVersionsResponse: iam.IamListPolicyVersionsResponse = { ... }
```

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPolicyVersionsResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPolicyVersionsResponse.property.marker"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListPolicyVersionsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyVersion`](#aws-cdk-sdk.iam.IamPolicyVersion)[]

---

### IamListRolePoliciesRequest <a name="aws-cdk-sdk.iam.IamListRolePoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListRolePoliciesRequest: iam.IamListRolePoliciesRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListRolePoliciesRequest.property.roleName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRolePoliciesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRolePoliciesRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamListRolePoliciesResponse <a name="aws-cdk-sdk.iam.IamListRolePoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListRolePoliciesResponse: iam.IamListRolePoliciesResponse = { ... }
```

##### `policyNames`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListRolePoliciesResponse.property.policyNames"></a>

- *Type:* `string`[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRolePoliciesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRolePoliciesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListRolesRequest <a name="aws-cdk-sdk.iam.IamListRolesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListRolesRequest: iam.IamListRolesRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRolesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRolesRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `pathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRolesRequest.property.pathPrefix"></a>

- *Type:* `string`

---

### IamListRolesResponse <a name="aws-cdk-sdk.iam.IamListRolesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListRolesResponse: iam.IamListRolesResponse = { ... }
```

##### `roles`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListRolesResponse.property.roles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRole`](#aws-cdk-sdk.iam.IamRole)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRolesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRolesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListRoleTagsRequest <a name="aws-cdk-sdk.iam.IamListRoleTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListRoleTagsRequest: iam.IamListRoleTagsRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListRoleTagsRequest.property.roleName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRoleTagsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRoleTagsRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamListRoleTagsResponse <a name="aws-cdk-sdk.iam.IamListRoleTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListRoleTagsResponse: iam.IamListRoleTagsResponse = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListRoleTagsResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRoleTagsResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListRoleTagsResponse.property.marker"></a>

- *Type:* `string`

---

### IamListSamlProvidersRequest <a name="aws-cdk-sdk.iam.IamListSamlProvidersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListSamlProvidersRequest: iam.IamListSamlProvidersRequest = { ... }
```

### IamListSamlProvidersResponse <a name="aws-cdk-sdk.iam.IamListSamlProvidersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListSamlProvidersResponse: iam.IamListSamlProvidersResponse = { ... }
```

##### `samlProviderList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSamlProvidersResponse.property.samlProviderList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamsamlProviderListEntry`](#aws-cdk-sdk.iam.IamsamlProviderListEntry)[]

---

### IamListServerCertificatesRequest <a name="aws-cdk-sdk.iam.IamListServerCertificatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListServerCertificatesRequest: iam.IamListServerCertificatesRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListServerCertificatesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListServerCertificatesRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `pathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListServerCertificatesRequest.property.pathPrefix"></a>

- *Type:* `string`

---

### IamListServerCertificatesResponse <a name="aws-cdk-sdk.iam.IamListServerCertificatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListServerCertificatesResponse: iam.IamListServerCertificatesResponse = { ... }
```

##### `serverCertificateMetadataList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListServerCertificatesResponse.property.serverCertificateMetadataList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServerCertificateMetadata`](#aws-cdk-sdk.iam.IamServerCertificateMetadata)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListServerCertificatesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListServerCertificatesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListServiceSpecificCredentialsRequest <a name="aws-cdk-sdk.iam.IamListServiceSpecificCredentialsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListServiceSpecificCredentialsRequest: iam.IamListServiceSpecificCredentialsRequest = { ... }
```

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListServiceSpecificCredentialsRequest.property.serviceName"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListServiceSpecificCredentialsRequest.property.userName"></a>

- *Type:* `string`

---

### IamListServiceSpecificCredentialsResponse <a name="aws-cdk-sdk.iam.IamListServiceSpecificCredentialsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListServiceSpecificCredentialsResponse: iam.IamListServiceSpecificCredentialsResponse = { ... }
```

##### `serviceSpecificCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListServiceSpecificCredentialsResponse.property.serviceSpecificCredentials"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata`](#aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata)[]

---

### IamListSigningCertificatesRequest <a name="aws-cdk-sdk.iam.IamListSigningCertificatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListSigningCertificatesRequest: iam.IamListSigningCertificatesRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSigningCertificatesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSigningCertificatesRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSigningCertificatesRequest.property.userName"></a>

- *Type:* `string`

---

### IamListSigningCertificatesResponse <a name="aws-cdk-sdk.iam.IamListSigningCertificatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListSigningCertificatesResponse: iam.IamListSigningCertificatesResponse = { ... }
```

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListSigningCertificatesResponse.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.iam.IamSigningCertificate`](#aws-cdk-sdk.iam.IamSigningCertificate)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSigningCertificatesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSigningCertificatesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListSshPublicKeysRequest <a name="aws-cdk-sdk.iam.IamListSshPublicKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListSshPublicKeysRequest: iam.IamListSshPublicKeysRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSshPublicKeysRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSshPublicKeysRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSshPublicKeysRequest.property.userName"></a>

- *Type:* `string`

---

### IamListSshPublicKeysResponse <a name="aws-cdk-sdk.iam.IamListSshPublicKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListSshPublicKeysResponse: iam.IamListSshPublicKeysResponse = { ... }
```

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSshPublicKeysResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSshPublicKeysResponse.property.marker"></a>

- *Type:* `string`

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListSshPublicKeysResponse.property.sshPublicKeys"></a>

- *Type:* [`aws-cdk-sdk.iam.IamsshPublicKeyMetadata`](#aws-cdk-sdk.iam.IamsshPublicKeyMetadata)[]

---

### IamListUserPoliciesRequest <a name="aws-cdk-sdk.iam.IamListUserPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListUserPoliciesRequest: iam.IamListUserPoliciesRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListUserPoliciesRequest.property.userName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUserPoliciesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUserPoliciesRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamListUserPoliciesResponse <a name="aws-cdk-sdk.iam.IamListUserPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListUserPoliciesResponse: iam.IamListUserPoliciesResponse = { ... }
```

##### `policyNames`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListUserPoliciesResponse.property.policyNames"></a>

- *Type:* `string`[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUserPoliciesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUserPoliciesResponse.property.marker"></a>

- *Type:* `string`

---

### IamListUsersRequest <a name="aws-cdk-sdk.iam.IamListUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListUsersRequest: iam.IamListUsersRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUsersRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUsersRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `pathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUsersRequest.property.pathPrefix"></a>

- *Type:* `string`

---

### IamListUsersResponse <a name="aws-cdk-sdk.iam.IamListUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListUsersResponse: iam.IamListUsersResponse = { ... }
```

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListUsersResponse.property.users"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUser`](#aws-cdk-sdk.iam.IamUser)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUsersResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUsersResponse.property.marker"></a>

- *Type:* `string`

---

### IamListUserTagsRequest <a name="aws-cdk-sdk.iam.IamListUserTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListUserTagsRequest: iam.IamListUserTagsRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListUserTagsRequest.property.userName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUserTagsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUserTagsRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamListUserTagsResponse <a name="aws-cdk-sdk.iam.IamListUserTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListUserTagsResponse: iam.IamListUserTagsResponse = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListUserTagsResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUserTagsResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListUserTagsResponse.property.marker"></a>

- *Type:* `string`

---

### IamListVirtualMfaDevicesRequest <a name="aws-cdk-sdk.iam.IamListVirtualMfaDevicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListVirtualMfaDevicesRequest: iam.IamListVirtualMfaDevicesRequest = { ... }
```

##### `assignmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListVirtualMfaDevicesRequest.property.assignmentStatus"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListVirtualMfaDevicesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListVirtualMfaDevicesRequest.property.maxItems"></a>

- *Type:* `number`

---

### IamListVirtualMfaDevicesResponse <a name="aws-cdk-sdk.iam.IamListVirtualMfaDevicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamListVirtualMfaDevicesResponse: iam.IamListVirtualMfaDevicesResponse = { ... }
```

##### `virtualMfaDevices`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamListVirtualMfaDevicesResponse.property.virtualMfaDevices"></a>

- *Type:* [`aws-cdk-sdk.iam.IamVirtualMfaDevice`](#aws-cdk-sdk.iam.IamVirtualMfaDevice)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListVirtualMfaDevicesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamListVirtualMfaDevicesResponse.property.marker"></a>

- *Type:* `string`

---

### IamLoginProfile <a name="aws-cdk-sdk.iam.IamLoginProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamLoginProfile: iam.IamLoginProfile = { ... }
```

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamLoginProfile.property.createDate"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamLoginProfile.property.userName"></a>

- *Type:* `string`

---

##### `passwordResetRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamLoginProfile.property.passwordResetRequired"></a>

- *Type:* `boolean`

---

### IamManagedPolicyDetail <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamManagedPolicyDetail: iam.IamManagedPolicyDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.arn"></a>

- *Type:* `string`

---

##### `attachmentCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.attachmentCount"></a>

- *Type:* `number`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.createDate"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.defaultVersionId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.description"></a>

- *Type:* `string`

---

##### `isAttachable`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.isAttachable"></a>

- *Type:* `boolean`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundaryUsageCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.permissionsBoundaryUsageCount"></a>

- *Type:* `number`

---

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.policyId"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.policyVersionList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyVersion`](#aws-cdk-sdk.iam.IamPolicyVersion)[]

---

##### `updateDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamManagedPolicyDetail.property.updateDate"></a>

- *Type:* `string`

---

### IammfaDevice <a name="aws-cdk-sdk.iam.IammfaDevice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iammfaDevice: iam.IammfaDevice = { ... }
```

##### `enableDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IammfaDevice.property.enableDate"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IammfaDevice.property.serialNumber"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IammfaDevice.property.userName"></a>

- *Type:* `string`

---

### IamOpenIdConnectProviderListEntry <a name="aws-cdk-sdk.iam.IamOpenIdConnectProviderListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamOpenIdConnectProviderListEntry: iam.IamOpenIdConnectProviderListEntry = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamOpenIdConnectProviderListEntry.property.arn"></a>

- *Type:* `string`

---

### IamOrganizationsDecisionDetail <a name="aws-cdk-sdk.iam.IamOrganizationsDecisionDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamOrganizationsDecisionDetail: iam.IamOrganizationsDecisionDetail = { ... }
```

##### `allowedByOrganizations`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamOrganizationsDecisionDetail.property.allowedByOrganizations"></a>

- *Type:* `boolean`

---

### IamPasswordPolicy <a name="aws-cdk-sdk.iam.IamPasswordPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPasswordPolicy: iam.IamPasswordPolicy = { ... }
```

##### `allowUsersToChangePassword`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPasswordPolicy.property.allowUsersToChangePassword"></a>

- *Type:* `boolean`

---

##### `expirePasswords`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPasswordPolicy.property.expirePasswords"></a>

- *Type:* `boolean`

---

##### `hardExpiry`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPasswordPolicy.property.hardExpiry"></a>

- *Type:* `boolean`

---

##### `maxPasswordAge`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPasswordPolicy.property.maxPasswordAge"></a>

- *Type:* `number`

---

##### `minimumPasswordLength`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPasswordPolicy.property.minimumPasswordLength"></a>

- *Type:* `number`

---

##### `passwordReusePrevention`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPasswordPolicy.property.passwordReusePrevention"></a>

- *Type:* `number`

---

##### `requireLowercaseCharacters`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPasswordPolicy.property.requireLowercaseCharacters"></a>

- *Type:* `boolean`

---

##### `requireNumbers`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPasswordPolicy.property.requireNumbers"></a>

- *Type:* `boolean`

---

##### `requireSymbols`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPasswordPolicy.property.requireSymbols"></a>

- *Type:* `boolean`

---

##### `requireUppercaseCharacters`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPasswordPolicy.property.requireUppercaseCharacters"></a>

- *Type:* `boolean`

---

### IamPermissionsBoundaryDecisionDetail <a name="aws-cdk-sdk.iam.IamPermissionsBoundaryDecisionDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPermissionsBoundaryDecisionDetail: iam.IamPermissionsBoundaryDecisionDetail = { ... }
```

##### `allowedByPermissionsBoundary`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPermissionsBoundaryDecisionDetail.property.allowedByPermissionsBoundary"></a>

- *Type:* `boolean`

---

### IamPolicy <a name="aws-cdk-sdk.iam.IamPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPolicy: iam.IamPolicy = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.arn"></a>

- *Type:* `string`

---

##### `attachmentCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.attachmentCount"></a>

- *Type:* `number`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.createDate"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.defaultVersionId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.description"></a>

- *Type:* `string`

---

##### `isAttachable`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.isAttachable"></a>

- *Type:* `boolean`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundaryUsageCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.permissionsBoundaryUsageCount"></a>

- *Type:* `number`

---

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.policyId"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.policyName"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicy.property.updateDate"></a>

- *Type:* `string`

---

### IamPolicyDetail <a name="aws-cdk-sdk.iam.IamPolicyDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPolicyDetail: iam.IamPolicyDetail = { ... }
```

##### `policyDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyDetail.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyDetail.property.policyName"></a>

- *Type:* `string`

---

### IamPolicyGrantingServiceAccess <a name="aws-cdk-sdk.iam.IamPolicyGrantingServiceAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPolicyGrantingServiceAccess: iam.IamPolicyGrantingServiceAccess = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPolicyGrantingServiceAccess.property.policyName"></a>

- *Type:* `string`

---

##### `policyType`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPolicyGrantingServiceAccess.property.policyType"></a>

- *Type:* `string`

---

##### `entityName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyGrantingServiceAccess.property.entityName"></a>

- *Type:* `string`

---

##### `entityType`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyGrantingServiceAccess.property.entityType"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyGrantingServiceAccess.property.policyArn"></a>

- *Type:* `string`

---

### IamPolicyGroup <a name="aws-cdk-sdk.iam.IamPolicyGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPolicyGroup: iam.IamPolicyGroup = { ... }
```

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyGroup.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyGroup.property.groupName"></a>

- *Type:* `string`

---

### IamPolicyRole <a name="aws-cdk-sdk.iam.IamPolicyRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPolicyRole: iam.IamPolicyRole = { ... }
```

##### `roleId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyRole.property.roleId"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyRole.property.roleName"></a>

- *Type:* `string`

---

### IamPolicyUser <a name="aws-cdk-sdk.iam.IamPolicyUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPolicyUser: iam.IamPolicyUser = { ... }
```

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyUser.property.userName"></a>

- *Type:* `string`

---

### IamPolicyVersion <a name="aws-cdk-sdk.iam.IamPolicyVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPolicyVersion: iam.IamPolicyVersion = { ... }
```

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyVersion.property.createDate"></a>

- *Type:* `string`

---

##### `document`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyVersion.property.document"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyVersion.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPolicyVersion.property.versionId"></a>

- *Type:* `string`

---

### IamPosition <a name="aws-cdk-sdk.iam.IamPosition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPosition: iam.IamPosition = { ... }
```

##### `column`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPosition.property.column"></a>

- *Type:* `number`

---

##### `line`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamPosition.property.line"></a>

- *Type:* `number`

---

### IamPutGroupPolicyRequest <a name="aws-cdk-sdk.iam.IamPutGroupPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPutGroupPolicyRequest: iam.IamPutGroupPolicyRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutGroupPolicyRequest.property.groupName"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutGroupPolicyRequest.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutGroupPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

### IamPutRolePermissionsBoundaryRequest <a name="aws-cdk-sdk.iam.IamPutRolePermissionsBoundaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPutRolePermissionsBoundaryRequest: iam.IamPutRolePermissionsBoundaryRequest = { ... }
```

##### `permissionsBoundary`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutRolePermissionsBoundaryRequest.property.permissionsBoundary"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutRolePermissionsBoundaryRequest.property.roleName"></a>

- *Type:* `string`

---

### IamPutRolePolicyRequest <a name="aws-cdk-sdk.iam.IamPutRolePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPutRolePolicyRequest: iam.IamPutRolePolicyRequest = { ... }
```

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutRolePolicyRequest.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutRolePolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutRolePolicyRequest.property.roleName"></a>

- *Type:* `string`

---

### IamPutUserPermissionsBoundaryRequest <a name="aws-cdk-sdk.iam.IamPutUserPermissionsBoundaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPutUserPermissionsBoundaryRequest: iam.IamPutUserPermissionsBoundaryRequest = { ... }
```

##### `permissionsBoundary`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutUserPermissionsBoundaryRequest.property.permissionsBoundary"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutUserPermissionsBoundaryRequest.property.userName"></a>

- *Type:* `string`

---

### IamPutUserPolicyRequest <a name="aws-cdk-sdk.iam.IamPutUserPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamPutUserPolicyRequest: iam.IamPutUserPolicyRequest = { ... }
```

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutUserPolicyRequest.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutUserPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamPutUserPolicyRequest.property.userName"></a>

- *Type:* `string`

---

### IamRemoveClientIdFromOpenIdConnectProviderRequest <a name="aws-cdk-sdk.iam.IamRemoveClientIdFromOpenIdConnectProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamRemoveClientIdFromOpenIdConnectProviderRequest: iam.IamRemoveClientIdFromOpenIdConnectProviderRequest = { ... }
```

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRemoveClientIdFromOpenIdConnectProviderRequest.property.clientId"></a>

- *Type:* `string`

---

##### `openIdConnectProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRemoveClientIdFromOpenIdConnectProviderRequest.property.openIdConnectProviderArn"></a>

- *Type:* `string`

---

### IamRemoveRoleFromInstanceProfileRequest <a name="aws-cdk-sdk.iam.IamRemoveRoleFromInstanceProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamRemoveRoleFromInstanceProfileRequest: iam.IamRemoveRoleFromInstanceProfileRequest = { ... }
```

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRemoveRoleFromInstanceProfileRequest.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRemoveRoleFromInstanceProfileRequest.property.roleName"></a>

- *Type:* `string`

---

### IamRemoveUserFromGroupRequest <a name="aws-cdk-sdk.iam.IamRemoveUserFromGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamRemoveUserFromGroupRequest: iam.IamRemoveUserFromGroupRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRemoveUserFromGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRemoveUserFromGroupRequest.property.userName"></a>

- *Type:* `string`

---

### IamResetServiceSpecificCredentialRequest <a name="aws-cdk-sdk.iam.IamResetServiceSpecificCredentialRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamResetServiceSpecificCredentialRequest: iam.IamResetServiceSpecificCredentialRequest = { ... }
```

##### `serviceSpecificCredentialId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamResetServiceSpecificCredentialRequest.property.serviceSpecificCredentialId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamResetServiceSpecificCredentialRequest.property.userName"></a>

- *Type:* `string`

---

### IamResetServiceSpecificCredentialResponse <a name="aws-cdk-sdk.iam.IamResetServiceSpecificCredentialResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamResetServiceSpecificCredentialResponse: iam.IamResetServiceSpecificCredentialResponse = { ... }
```

##### `serviceSpecificCredential`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamResetServiceSpecificCredentialResponse.property.serviceSpecificCredential"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServiceSpecificCredential`](#aws-cdk-sdk.iam.IamServiceSpecificCredential)

---

### IamResourceSpecificResult <a name="aws-cdk-sdk.iam.IamResourceSpecificResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamResourceSpecificResult: iam.IamResourceSpecificResult = { ... }
```

##### `evalResourceDecision`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamResourceSpecificResult.property.evalResourceDecision"></a>

- *Type:* `string`

---

##### `evalResourceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamResourceSpecificResult.property.evalResourceName"></a>

- *Type:* `string`

---

##### `evalDecisionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamResourceSpecificResult.property.evalDecisionDetails"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `matchedStatements`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamResourceSpecificResult.property.matchedStatements"></a>

- *Type:* [`aws-cdk-sdk.iam.IamStatement`](#aws-cdk-sdk.iam.IamStatement)[]

---

##### `missingContextValues`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamResourceSpecificResult.property.missingContextValues"></a>

- *Type:* `string`[]

---

##### `permissionsBoundaryDecisionDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamResourceSpecificResult.property.permissionsBoundaryDecisionDetail"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPermissionsBoundaryDecisionDetail`](#aws-cdk-sdk.iam.IamPermissionsBoundaryDecisionDetail)

---

### IamResyncMfaDeviceRequest <a name="aws-cdk-sdk.iam.IamResyncMfaDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamResyncMfaDeviceRequest: iam.IamResyncMfaDeviceRequest = { ... }
```

##### `authenticationCode1`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamResyncMfaDeviceRequest.property.authenticationCode1"></a>

- *Type:* `string`

---

##### `authenticationCode2`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamResyncMfaDeviceRequest.property.authenticationCode2"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamResyncMfaDeviceRequest.property.serialNumber"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamResyncMfaDeviceRequest.property.userName"></a>

- *Type:* `string`

---

### IamRole <a name="aws-cdk-sdk.iam.IamRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamRole: iam.IamRole = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRole.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRole.property.createDate"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRole.property.path"></a>

- *Type:* `string`

---

##### `roleId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRole.property.roleId"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamRole.property.roleName"></a>

- *Type:* `string`

---

##### `assumeRolePolicyDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRole.property.assumeRolePolicyDocument"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRole.property.description"></a>

- *Type:* `string`

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRole.property.maxSessionDuration"></a>

- *Type:* `number`

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRole.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPermissionsBoundary`](#aws-cdk-sdk.iam.IamAttachedPermissionsBoundary)

---

##### `roleLastUsed`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRole.property.roleLastUsed"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRoleLastUsed`](#aws-cdk-sdk.iam.IamRoleLastUsed)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRole.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

### IamRoleDetail <a name="aws-cdk-sdk.iam.IamRoleDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamRoleDetail: iam.IamRoleDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.arn"></a>

- *Type:* `string`

---

##### `assumeRolePolicyDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.assumeRolePolicyDocument"></a>

- *Type:* `string`

---

##### `attachedManagedPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.attachedManagedPolicies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPolicy`](#aws-cdk-sdk.iam.IamAttachedPolicy)[]

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.createDate"></a>

- *Type:* `string`

---

##### `instanceProfileList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.instanceProfileList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamInstanceProfile`](#aws-cdk-sdk.iam.IamInstanceProfile)[]

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPermissionsBoundary`](#aws-cdk-sdk.iam.IamAttachedPermissionsBoundary)

---

##### `roleId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.roleId"></a>

- *Type:* `string`

---

##### `roleLastUsed`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.roleLastUsed"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRoleLastUsed`](#aws-cdk-sdk.iam.IamRoleLastUsed)

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.roleName"></a>

- *Type:* `string`

---

##### `rolePolicyList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.rolePolicyList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyDetail`](#aws-cdk-sdk.iam.IamPolicyDetail)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleDetail.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

### IamRoleLastUsed <a name="aws-cdk-sdk.iam.IamRoleLastUsed"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamRoleLastUsed: iam.IamRoleLastUsed = { ... }
```

##### `lastUsedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleLastUsed.property.lastUsedDate"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleLastUsed.property.region"></a>

- *Type:* `string`

---

### IamRoleUsageType <a name="aws-cdk-sdk.iam.IamRoleUsageType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamRoleUsageType: iam.IamRoleUsageType = { ... }
```

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleUsageType.property.region"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamRoleUsageType.property.resources"></a>

- *Type:* `string`[]

---

### IamsamlProviderListEntry <a name="aws-cdk-sdk.iam.IamsamlProviderListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamsamlProviderListEntry: iam.IamsamlProviderListEntry = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamsamlProviderListEntry.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamsamlProviderListEntry.property.createDate"></a>

- *Type:* `string`

---

##### `validUntil`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamsamlProviderListEntry.property.validUntil"></a>

- *Type:* `string`

---

### IamServerCertificate <a name="aws-cdk-sdk.iam.IamServerCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamServerCertificate: iam.IamServerCertificate = { ... }
```

##### `certificateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServerCertificate.property.certificateBody"></a>

- *Type:* `string`

---

##### `serverCertificateMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServerCertificate.property.serverCertificateMetadata"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServerCertificateMetadata`](#aws-cdk-sdk.iam.IamServerCertificateMetadata)

---

##### `certificateChain`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamServerCertificate.property.certificateChain"></a>

- *Type:* `string`

---

### IamServerCertificateMetadata <a name="aws-cdk-sdk.iam.IamServerCertificateMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamServerCertificateMetadata: iam.IamServerCertificateMetadata = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServerCertificateMetadata.property.arn"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServerCertificateMetadata.property.path"></a>

- *Type:* `string`

---

##### `serverCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServerCertificateMetadata.property.serverCertificateId"></a>

- *Type:* `string`

---

##### `serverCertificateName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServerCertificateMetadata.property.serverCertificateName"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamServerCertificateMetadata.property.expiration"></a>

- *Type:* `string`

---

##### `uploadDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamServerCertificateMetadata.property.uploadDate"></a>

- *Type:* `string`

---

### IamServiceLastAccessed <a name="aws-cdk-sdk.iam.IamServiceLastAccessed"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamServiceLastAccessed: iam.IamServiceLastAccessed = { ... }
```

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceLastAccessed.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceLastAccessed.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `lastAuthenticated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamServiceLastAccessed.property.lastAuthenticated"></a>

- *Type:* `string`

---

##### `lastAuthenticatedEntity`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamServiceLastAccessed.property.lastAuthenticatedEntity"></a>

- *Type:* `string`

---

##### `lastAuthenticatedRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamServiceLastAccessed.property.lastAuthenticatedRegion"></a>

- *Type:* `string`

---

##### `totalAuthenticatedEntities`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamServiceLastAccessed.property.totalAuthenticatedEntities"></a>

- *Type:* `number`

---

##### `trackedActionsLastAccessed`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamServiceLastAccessed.property.trackedActionsLastAccessed"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTrackedActionLastAccessed`](#aws-cdk-sdk.iam.IamTrackedActionLastAccessed)[]

---

### IamServiceSpecificCredential <a name="aws-cdk-sdk.iam.IamServiceSpecificCredential"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamServiceSpecificCredential: iam.IamServiceSpecificCredential = { ... }
```

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredential.property.createDate"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredential.property.serviceName"></a>

- *Type:* `string`

---

##### `servicePassword`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredential.property.servicePassword"></a>

- *Type:* `string`

---

##### `serviceSpecificCredentialId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredential.property.serviceSpecificCredentialId"></a>

- *Type:* `string`

---

##### `serviceUserName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredential.property.serviceUserName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredential.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredential.property.userName"></a>

- *Type:* `string`

---

### IamServiceSpecificCredentialMetadata <a name="aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamServiceSpecificCredentialMetadata: iam.IamServiceSpecificCredentialMetadata = { ... }
```

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata.property.createDate"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceSpecificCredentialId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata.property.serviceSpecificCredentialId"></a>

- *Type:* `string`

---

##### `serviceUserName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata.property.serviceUserName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata.property.userName"></a>

- *Type:* `string`

---

### IamSetDefaultPolicyVersionRequest <a name="aws-cdk-sdk.iam.IamSetDefaultPolicyVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamSetDefaultPolicyVersionRequest: iam.IamSetDefaultPolicyVersionRequest = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSetDefaultPolicyVersionRequest.property.policyArn"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSetDefaultPolicyVersionRequest.property.versionId"></a>

- *Type:* `string`

---

### IamSetSecurityTokenServicePreferencesRequest <a name="aws-cdk-sdk.iam.IamSetSecurityTokenServicePreferencesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamSetSecurityTokenServicePreferencesRequest: iam.IamSetSecurityTokenServicePreferencesRequest = { ... }
```

##### `globalEndpointTokenVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSetSecurityTokenServicePreferencesRequest.property.globalEndpointTokenVersion"></a>

- *Type:* `string`

---

### IamSigningCertificate <a name="aws-cdk-sdk.iam.IamSigningCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamSigningCertificate: iam.IamSigningCertificate = { ... }
```

##### `certificateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSigningCertificate.property.certificateBody"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSigningCertificate.property.certificateId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSigningCertificate.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSigningCertificate.property.userName"></a>

- *Type:* `string`

---

##### `uploadDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSigningCertificate.property.uploadDate"></a>

- *Type:* `string`

---

### IamSimulateCustomPolicyRequest <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamSimulateCustomPolicyRequest: iam.IamSimulateCustomPolicyRequest = { ... }
```

##### `actionNames`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.actionNames"></a>

- *Type:* `string`[]

---

##### `policyInputList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.policyInputList"></a>

- *Type:* `string`[]

---

##### `callerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.callerArn"></a>

- *Type:* `string`

---

##### `contextEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.contextEntries"></a>

- *Type:* [`aws-cdk-sdk.iam.IamContextEntry`](#aws-cdk-sdk.iam.IamContextEntry)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `permissionsBoundaryPolicyInputList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.permissionsBoundaryPolicyInputList"></a>

- *Type:* `string`[]

---

##### `resourceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.resourceArns"></a>

- *Type:* `string`[]

---

##### `resourceHandlingOption`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.resourceHandlingOption"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.resourceOwner"></a>

- *Type:* `string`

---

##### `resourcePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest.property.resourcePolicy"></a>

- *Type:* `string`

---

### IamSimulatePolicyResponse <a name="aws-cdk-sdk.iam.IamSimulatePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamSimulatePolicyResponse: iam.IamSimulatePolicyResponse = { ... }
```

##### `evaluationResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePolicyResponse.property.evaluationResults"></a>

- *Type:* [`aws-cdk-sdk.iam.IamEvaluationResult`](#aws-cdk-sdk.iam.IamEvaluationResult)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePolicyResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePolicyResponse.property.marker"></a>

- *Type:* `string`

---

### IamSimulatePrincipalPolicyRequest <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamSimulatePrincipalPolicyRequest: iam.IamSimulatePrincipalPolicyRequest = { ... }
```

##### `actionNames`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.actionNames"></a>

- *Type:* `string`[]

---

##### `policySourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.policySourceArn"></a>

- *Type:* `string`

---

##### `callerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.callerArn"></a>

- *Type:* `string`

---

##### `contextEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.contextEntries"></a>

- *Type:* [`aws-cdk-sdk.iam.IamContextEntry`](#aws-cdk-sdk.iam.IamContextEntry)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `permissionsBoundaryPolicyInputList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.permissionsBoundaryPolicyInputList"></a>

- *Type:* `string`[]

---

##### `policyInputList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.policyInputList"></a>

- *Type:* `string`[]

---

##### `resourceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.resourceArns"></a>

- *Type:* `string`[]

---

##### `resourceHandlingOption`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.resourceHandlingOption"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.resourceOwner"></a>

- *Type:* `string`

---

##### `resourcePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest.property.resourcePolicy"></a>

- *Type:* `string`

---

### IamsshPublicKey <a name="aws-cdk-sdk.iam.IamsshPublicKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamsshPublicKey: iam.IamsshPublicKey = { ... }
```

##### `fingerprint`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamsshPublicKey.property.fingerprint"></a>

- *Type:* `string`

---

##### `sshPublicKeyBody`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamsshPublicKey.property.sshPublicKeyBody"></a>

- *Type:* `string`

---

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamsshPublicKey.property.sshPublicKeyId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamsshPublicKey.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamsshPublicKey.property.userName"></a>

- *Type:* `string`

---

##### `uploadDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamsshPublicKey.property.uploadDate"></a>

- *Type:* `string`

---

### IamsshPublicKeyMetadata <a name="aws-cdk-sdk.iam.IamsshPublicKeyMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamsshPublicKeyMetadata: iam.IamsshPublicKeyMetadata = { ... }
```

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamsshPublicKeyMetadata.property.sshPublicKeyId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamsshPublicKeyMetadata.property.status"></a>

- *Type:* `string`

---

##### `uploadDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamsshPublicKeyMetadata.property.uploadDate"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamsshPublicKeyMetadata.property.userName"></a>

- *Type:* `string`

---

### IamStatement <a name="aws-cdk-sdk.iam.IamStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamStatement: iam.IamStatement = { ... }
```

##### `endPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamStatement.property.endPosition"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPosition`](#aws-cdk-sdk.iam.IamPosition)

---

##### `sourcePolicyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamStatement.property.sourcePolicyId"></a>

- *Type:* `string`

---

##### `sourcePolicyType`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamStatement.property.sourcePolicyType"></a>

- *Type:* `string`

---

##### `startPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamStatement.property.startPosition"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPosition`](#aws-cdk-sdk.iam.IamPosition)

---

### IamTag <a name="aws-cdk-sdk.iam.IamTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamTag: iam.IamTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamTag.property.value"></a>

- *Type:* `string`

---

### IamTagRoleRequest <a name="aws-cdk-sdk.iam.IamTagRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamTagRoleRequest: iam.IamTagRoleRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamTagRoleRequest.property.roleName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamTagRoleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

### IamTagUserRequest <a name="aws-cdk-sdk.iam.IamTagUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamTagUserRequest: iam.IamTagUserRequest = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamTagUserRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamTagUserRequest.property.userName"></a>

- *Type:* `string`

---

### IamTrackedActionLastAccessed <a name="aws-cdk-sdk.iam.IamTrackedActionLastAccessed"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamTrackedActionLastAccessed: iam.IamTrackedActionLastAccessed = { ... }
```

##### `actionName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamTrackedActionLastAccessed.property.actionName"></a>

- *Type:* `string`

---

##### `lastAccessedEntity`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamTrackedActionLastAccessed.property.lastAccessedEntity"></a>

- *Type:* `string`

---

##### `lastAccessedRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamTrackedActionLastAccessed.property.lastAccessedRegion"></a>

- *Type:* `string`

---

##### `lastAccessedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamTrackedActionLastAccessed.property.lastAccessedTime"></a>

- *Type:* `string`

---

### IamUntagRoleRequest <a name="aws-cdk-sdk.iam.IamUntagRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUntagRoleRequest: iam.IamUntagRoleRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUntagRoleRequest.property.roleName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUntagRoleRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### IamUntagUserRequest <a name="aws-cdk-sdk.iam.IamUntagUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUntagUserRequest: iam.IamUntagUserRequest = { ... }
```

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUntagUserRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUntagUserRequest.property.userName"></a>

- *Type:* `string`

---

### IamUpdateAccessKeyRequest <a name="aws-cdk-sdk.iam.IamUpdateAccessKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateAccessKeyRequest: iam.IamUpdateAccessKeyRequest = { ... }
```

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccessKeyRequest.property.accessKeyId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccessKeyRequest.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccessKeyRequest.property.userName"></a>

- *Type:* `string`

---

### IamUpdateAccountPasswordPolicyRequest <a name="aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateAccountPasswordPolicyRequest: iam.IamUpdateAccountPasswordPolicyRequest = { ... }
```

##### `allowUsersToChangePassword`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest.property.allowUsersToChangePassword"></a>

- *Type:* `boolean`

---

##### `hardExpiry`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest.property.hardExpiry"></a>

- *Type:* `boolean`

---

##### `maxPasswordAge`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest.property.maxPasswordAge"></a>

- *Type:* `number`

---

##### `minimumPasswordLength`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest.property.minimumPasswordLength"></a>

- *Type:* `number`

---

##### `passwordReusePrevention`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest.property.passwordReusePrevention"></a>

- *Type:* `number`

---

##### `requireLowercaseCharacters`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest.property.requireLowercaseCharacters"></a>

- *Type:* `boolean`

---

##### `requireNumbers`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest.property.requireNumbers"></a>

- *Type:* `boolean`

---

##### `requireSymbols`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest.property.requireSymbols"></a>

- *Type:* `boolean`

---

##### `requireUppercaseCharacters`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateAccountPasswordPolicyRequest.property.requireUppercaseCharacters"></a>

- *Type:* `boolean`

---

### IamUpdateAssumeRolePolicyRequest <a name="aws-cdk-sdk.iam.IamUpdateAssumeRolePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateAssumeRolePolicyRequest: iam.IamUpdateAssumeRolePolicyRequest = { ... }
```

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateAssumeRolePolicyRequest.property.policyDocument"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateAssumeRolePolicyRequest.property.roleName"></a>

- *Type:* `string`

---

### IamUpdateGroupRequest <a name="aws-cdk-sdk.iam.IamUpdateGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateGroupRequest: iam.IamUpdateGroupRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `newGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateGroupRequest.property.newGroupName"></a>

- *Type:* `string`

---

##### `newPath`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateGroupRequest.property.newPath"></a>

- *Type:* `string`

---

### IamUpdateLoginProfileRequest <a name="aws-cdk-sdk.iam.IamUpdateLoginProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateLoginProfileRequest: iam.IamUpdateLoginProfileRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateLoginProfileRequest.property.userName"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateLoginProfileRequest.property.password"></a>

- *Type:* `string`

---

##### `passwordResetRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateLoginProfileRequest.property.passwordResetRequired"></a>

- *Type:* `boolean`

---

### IamUpdateOpenIdConnectProviderThumbprintRequest <a name="aws-cdk-sdk.iam.IamUpdateOpenIdConnectProviderThumbprintRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateOpenIdConnectProviderThumbprintRequest: iam.IamUpdateOpenIdConnectProviderThumbprintRequest = { ... }
```

##### `openIdConnectProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateOpenIdConnectProviderThumbprintRequest.property.openIdConnectProviderArn"></a>

- *Type:* `string`

---

##### `thumbprintList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateOpenIdConnectProviderThumbprintRequest.property.thumbprintList"></a>

- *Type:* `string`[]

---

### IamUpdateRoleDescriptionRequest <a name="aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateRoleDescriptionRequest: iam.IamUpdateRoleDescriptionRequest = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest.property.description"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest.property.roleName"></a>

- *Type:* `string`

---

### IamUpdateRoleDescriptionResponse <a name="aws-cdk-sdk.iam.IamUpdateRoleDescriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateRoleDescriptionResponse: iam.IamUpdateRoleDescriptionResponse = { ... }
```

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateRoleDescriptionResponse.property.role"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRole`](#aws-cdk-sdk.iam.IamRole)

---

### IamUpdateRoleRequest <a name="aws-cdk-sdk.iam.IamUpdateRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateRoleRequest: iam.IamUpdateRoleRequest = { ... }
```

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateRoleRequest.property.roleName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateRoleRequest.property.description"></a>

- *Type:* `string`

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateRoleRequest.property.maxSessionDuration"></a>

- *Type:* `number`

---

### IamUpdateRoleResponse <a name="aws-cdk-sdk.iam.IamUpdateRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateRoleResponse: iam.IamUpdateRoleResponse = { ... }
```

### IamUpdateSamlProviderRequest <a name="aws-cdk-sdk.iam.IamUpdateSamlProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateSamlProviderRequest: iam.IamUpdateSamlProviderRequest = { ... }
```

##### `samlMetadataDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateSamlProviderRequest.property.samlMetadataDocument"></a>

- *Type:* `string`

---

##### `samlProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateSamlProviderRequest.property.samlProviderArn"></a>

- *Type:* `string`

---

### IamUpdateSamlProviderResponse <a name="aws-cdk-sdk.iam.IamUpdateSamlProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateSamlProviderResponse: iam.IamUpdateSamlProviderResponse = { ... }
```

##### `samlProviderArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateSamlProviderResponse.property.samlProviderArn"></a>

- *Type:* `string`

---

### IamUpdateServerCertificateRequest <a name="aws-cdk-sdk.iam.IamUpdateServerCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateServerCertificateRequest: iam.IamUpdateServerCertificateRequest = { ... }
```

##### `serverCertificateName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateServerCertificateRequest.property.serverCertificateName"></a>

- *Type:* `string`

---

##### `newPath`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateServerCertificateRequest.property.newPath"></a>

- *Type:* `string`

---

##### `newServerCertificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateServerCertificateRequest.property.newServerCertificateName"></a>

- *Type:* `string`

---

### IamUpdateServiceSpecificCredentialRequest <a name="aws-cdk-sdk.iam.IamUpdateServiceSpecificCredentialRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateServiceSpecificCredentialRequest: iam.IamUpdateServiceSpecificCredentialRequest = { ... }
```

##### `serviceSpecificCredentialId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateServiceSpecificCredentialRequest.property.serviceSpecificCredentialId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateServiceSpecificCredentialRequest.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateServiceSpecificCredentialRequest.property.userName"></a>

- *Type:* `string`

---

### IamUpdateSigningCertificateRequest <a name="aws-cdk-sdk.iam.IamUpdateSigningCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateSigningCertificateRequest: iam.IamUpdateSigningCertificateRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateSigningCertificateRequest.property.certificateId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateSigningCertificateRequest.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateSigningCertificateRequest.property.userName"></a>

- *Type:* `string`

---

### IamUpdateSshPublicKeyRequest <a name="aws-cdk-sdk.iam.IamUpdateSshPublicKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateSshPublicKeyRequest: iam.IamUpdateSshPublicKeyRequest = { ... }
```

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateSshPublicKeyRequest.property.sshPublicKeyId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateSshPublicKeyRequest.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateSshPublicKeyRequest.property.userName"></a>

- *Type:* `string`

---

### IamUpdateUserRequest <a name="aws-cdk-sdk.iam.IamUpdateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUpdateUserRequest: iam.IamUpdateUserRequest = { ... }
```

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUpdateUserRequest.property.userName"></a>

- *Type:* `string`

---

##### `newPath`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateUserRequest.property.newPath"></a>

- *Type:* `string`

---

##### `newUserName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUpdateUserRequest.property.newUserName"></a>

- *Type:* `string`

---

### IamUploadServerCertificateRequest <a name="aws-cdk-sdk.iam.IamUploadServerCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUploadServerCertificateRequest: iam.IamUploadServerCertificateRequest = { ... }
```

##### `certificateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUploadServerCertificateRequest.property.certificateBody"></a>

- *Type:* `string`

---

##### `privateKey`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUploadServerCertificateRequest.property.privateKey"></a>

- *Type:* `string`

---

##### `serverCertificateName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUploadServerCertificateRequest.property.serverCertificateName"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUploadServerCertificateRequest.property.certificateChain"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUploadServerCertificateRequest.property.path"></a>

- *Type:* `string`

---

### IamUploadServerCertificateResponse <a name="aws-cdk-sdk.iam.IamUploadServerCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUploadServerCertificateResponse: iam.IamUploadServerCertificateResponse = { ... }
```

##### `serverCertificateMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUploadServerCertificateResponse.property.serverCertificateMetadata"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServerCertificateMetadata`](#aws-cdk-sdk.iam.IamServerCertificateMetadata)

---

### IamUploadSigningCertificateRequest <a name="aws-cdk-sdk.iam.IamUploadSigningCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUploadSigningCertificateRequest: iam.IamUploadSigningCertificateRequest = { ... }
```

##### `certificateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUploadSigningCertificateRequest.property.certificateBody"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUploadSigningCertificateRequest.property.userName"></a>

- *Type:* `string`

---

### IamUploadSigningCertificateResponse <a name="aws-cdk-sdk.iam.IamUploadSigningCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUploadSigningCertificateResponse: iam.IamUploadSigningCertificateResponse = { ... }
```

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUploadSigningCertificateResponse.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.iam.IamSigningCertificate`](#aws-cdk-sdk.iam.IamSigningCertificate)

---

### IamUploadSshPublicKeyRequest <a name="aws-cdk-sdk.iam.IamUploadSshPublicKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUploadSshPublicKeyRequest: iam.IamUploadSshPublicKeyRequest = { ... }
```

##### `sshPublicKeyBody`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUploadSshPublicKeyRequest.property.sshPublicKeyBody"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUploadSshPublicKeyRequest.property.userName"></a>

- *Type:* `string`

---

### IamUploadSshPublicKeyResponse <a name="aws-cdk-sdk.iam.IamUploadSshPublicKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUploadSshPublicKeyResponse: iam.IamUploadSshPublicKeyResponse = { ... }
```

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUploadSshPublicKeyResponse.property.sshPublicKey"></a>

- *Type:* [`aws-cdk-sdk.iam.IamsshPublicKey`](#aws-cdk-sdk.iam.IamsshPublicKey)

---

### IamUser <a name="aws-cdk-sdk.iam.IamUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUser: iam.IamUser = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUser.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUser.property.createDate"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUser.property.path"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamUser.property.userName"></a>

- *Type:* `string`

---

##### `passwordLastUsed`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUser.property.passwordLastUsed"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUser.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPermissionsBoundary`](#aws-cdk-sdk.iam.IamAttachedPermissionsBoundary)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUser.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

### IamUserDetail <a name="aws-cdk-sdk.iam.IamUserDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamUserDetail: iam.IamUserDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUserDetail.property.arn"></a>

- *Type:* `string`

---

##### `attachedManagedPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUserDetail.property.attachedManagedPolicies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPolicy`](#aws-cdk-sdk.iam.IamAttachedPolicy)[]

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUserDetail.property.createDate"></a>

- *Type:* `string`

---

##### `groupList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUserDetail.property.groupList"></a>

- *Type:* `string`[]

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUserDetail.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUserDetail.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPermissionsBoundary`](#aws-cdk-sdk.iam.IamAttachedPermissionsBoundary)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUserDetail.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUserDetail.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUserDetail.property.userName"></a>

- *Type:* `string`

---

##### `userPolicyList`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamUserDetail.property.userPolicyList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyDetail`](#aws-cdk-sdk.iam.IamPolicyDetail)[]

---

### IamVirtualMfaDevice <a name="aws-cdk-sdk.iam.IamVirtualMfaDevice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

const iamVirtualMfaDevice: iam.IamVirtualMfaDevice = { ... }
```

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IamVirtualMfaDevice.property.serialNumber"></a>

- *Type:* `string`

---

##### `base32StringSeed`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamVirtualMfaDevice.property.base32StringSeed"></a>

- *Type:* `any`

---

##### `enableDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamVirtualMfaDevice.property.enableDate"></a>

- *Type:* `string`

---

##### `qrCodePng`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamVirtualMfaDevice.property.qrCodePng"></a>

- *Type:* `any`

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.iam.IamVirtualMfaDevice.property.user"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUser`](#aws-cdk-sdk.iam.IamUser)

---

## Classes <a name="Classes"></a>

### IAMResponsesCreateAccessKey <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKey"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKey.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateAccessKey(__scope: Construct, __resources: string[], __input: IamCreateAccessKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateAccessKeyRequest`](#aws-cdk-sdk.iam.IamCreateAccessKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKey`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKey.property.accessKey"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey`](#aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey)

---


### IAMResponsesCreateAccessKeyAccessKey <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateAccessKeyAccessKey(__scope: Construct, __resources: string[], __input: IamCreateAccessKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateAccessKeyRequest`](#aws-cdk-sdk.iam.IamCreateAccessKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey.property.accessKeyId"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey.property.createDate"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateAccessKeyAccessKey.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesCreateGroup <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroup.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateGroup(__scope: Construct, __resources: string[], __input: IamCreateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateGroupRequest`](#aws-cdk-sdk.iam.IamCreateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup`](#aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup)

---


### IAMResponsesCreateGroupGroup <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateGroupGroup(__scope: Construct, __resources: string[], __input: IamCreateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateGroupRequest`](#aws-cdk-sdk.iam.IamCreateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup.property.createDate"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup.property.groupName"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateGroupGroup.property.path"></a>

- *Type:* `string`

---


### IAMResponsesCreateInstanceProfile <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfile.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateInstanceProfile(__scope: Construct, __resources: string[], __input: IamCreateInstanceProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateInstanceProfileRequest`](#aws-cdk-sdk.iam.IamCreateInstanceProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceProfile`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfile.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile`](#aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile)

---


### IAMResponsesCreateInstanceProfileInstanceProfile <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateInstanceProfileInstanceProfile(__scope: Construct, __resources: string[], __input: IamCreateInstanceProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateInstanceProfileRequest`](#aws-cdk-sdk.iam.IamCreateInstanceProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile.property.createDate"></a>

- *Type:* `string`

---

##### `instanceProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile.property.instanceProfileId"></a>

- *Type:* `string`

---

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile.property.path"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateInstanceProfileInstanceProfile.property.roles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRole`](#aws-cdk-sdk.iam.IamRole)[]

---


### IAMResponsesCreateLoginProfile <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfile.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateLoginProfile(__scope: Construct, __resources: string[], __input: IamCreateLoginProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateLoginProfileRequest`](#aws-cdk-sdk.iam.IamCreateLoginProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `loginProfile`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfile.property.loginProfile"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateLoginProfileLoginProfile`](#aws-cdk-sdk.iam.IAMResponsesCreateLoginProfileLoginProfile)

---


### IAMResponsesCreateLoginProfileLoginProfile <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfileLoginProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfileLoginProfile.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateLoginProfileLoginProfile(__scope: Construct, __resources: string[], __input: IamCreateLoginProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfileLoginProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfileLoginProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfileLoginProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateLoginProfileRequest`](#aws-cdk-sdk.iam.IamCreateLoginProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfileLoginProfile.property.createDate"></a>

- *Type:* `string`

---

##### `passwordResetRequired`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfileLoginProfile.property.passwordResetRequired"></a>

- *Type:* `boolean`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateLoginProfileLoginProfile.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesCreateOpenIdConnectProvider <a name="aws-cdk-sdk.iam.IAMResponsesCreateOpenIdConnectProvider"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateOpenIdConnectProvider.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateOpenIdConnectProvider(__scope: Construct, __resources: string[], __input: IamCreateOpenIdConnectProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateOpenIdConnectProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateOpenIdConnectProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateOpenIdConnectProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateOpenIdConnectProviderRequest`](#aws-cdk-sdk.iam.IamCreateOpenIdConnectProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `openIdConnectProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateOpenIdConnectProvider.property.openIdConnectProviderArn"></a>

- *Type:* `string`

---


### IAMResponsesCreatePolicy <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreatePolicy(__scope: Construct, __resources: string[], __input: IamCreatePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreatePolicyRequest`](#aws-cdk-sdk.iam.IamCreatePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy`](#aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy)

---


### IAMResponsesCreatePolicyPolicy <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreatePolicyPolicy(__scope: Construct, __resources: string[], __input: IamCreatePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreatePolicyRequest`](#aws-cdk-sdk.iam.IamCreatePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.arn"></a>

- *Type:* `string`

---

##### `attachmentCount`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.attachmentCount"></a>

- *Type:* `number`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.createDate"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.defaultVersionId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.description"></a>

- *Type:* `string`

---

##### `isAttachable`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.isAttachable"></a>

- *Type:* `boolean`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundaryUsageCount`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.permissionsBoundaryUsageCount"></a>

- *Type:* `number`

---

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.policyId"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.policyName"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyPolicy.property.updateDate"></a>

- *Type:* `string`

---


### IAMResponsesCreatePolicyVersion <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersion"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersion.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreatePolicyVersion(__scope: Construct, __resources: string[], __input: IamCreatePolicyVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreatePolicyVersionRequest`](#aws-cdk-sdk.iam.IamCreatePolicyVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `policyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersion.property.policyVersion"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion`](#aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion)

---


### IAMResponsesCreatePolicyVersionPolicyVersion <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreatePolicyVersionPolicyVersion(__scope: Construct, __resources: string[], __input: IamCreatePolicyVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreatePolicyVersionRequest`](#aws-cdk-sdk.iam.IamCreatePolicyVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion.property.createDate"></a>

- *Type:* `string`

---

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion.property.document"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreatePolicyVersionPolicyVersion.property.versionId"></a>

- *Type:* `string`

---


### IAMResponsesCreateRole <a name="aws-cdk-sdk.iam.IAMResponsesCreateRole"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateRole.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateRole(__scope: Construct, __resources: string[], __input: IamCreateRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateRoleRequest`](#aws-cdk-sdk.iam.IamCreateRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRole.property.role"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateRoleRole`](#aws-cdk-sdk.iam.IAMResponsesCreateRoleRole)

---


### IAMResponsesCreateRoleRole <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateRoleRole(__scope: Construct, __resources: string[], __input: IamCreateRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateRoleRequest`](#aws-cdk-sdk.iam.IamCreateRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.arn"></a>

- *Type:* `string`

---

##### `assumeRolePolicyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.assumeRolePolicyDocument"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.createDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.description"></a>

- *Type:* `string`

---

##### `maxSessionDuration`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.maxSessionDuration"></a>

- *Type:* `number`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateRoleRolePermissionsBoundary`](#aws-cdk-sdk.iam.IAMResponsesCreateRoleRolePermissionsBoundary)

---

##### `roleId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.roleId"></a>

- *Type:* `string`

---

##### `roleLastUsed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.roleLastUsed"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateRoleRoleRoleLastUsed`](#aws-cdk-sdk.iam.IAMResponsesCreateRoleRoleRoleLastUsed)

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.roleName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRole.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---


### IAMResponsesCreateRoleRolePermissionsBoundary <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRolePermissionsBoundary"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRolePermissionsBoundary.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateRoleRolePermissionsBoundary(__scope: Construct, __resources: string[], __input: IamCreateRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRolePermissionsBoundary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRolePermissionsBoundary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRolePermissionsBoundary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateRoleRequest`](#aws-cdk-sdk.iam.IamCreateRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionsBoundaryArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRolePermissionsBoundary.property.permissionsBoundaryArn"></a>

- *Type:* `string`

---

##### `permissionsBoundaryType`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRolePermissionsBoundary.property.permissionsBoundaryType"></a>

- *Type:* `string`

---


### IAMResponsesCreateRoleRoleRoleLastUsed <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRoleRoleLastUsed"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRoleRoleLastUsed.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateRoleRoleRoleLastUsed(__scope: Construct, __resources: string[], __input: IamCreateRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRoleRoleLastUsed.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRoleRoleLastUsed.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRoleRoleLastUsed.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateRoleRequest`](#aws-cdk-sdk.iam.IamCreateRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `lastUsedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRoleRoleLastUsed.property.lastUsedDate"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateRoleRoleRoleLastUsed.property.region"></a>

- *Type:* `string`

---


### IAMResponsesCreateSamlProvider <a name="aws-cdk-sdk.iam.IAMResponsesCreateSamlProvider"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateSamlProvider.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateSamlProvider(__scope: Construct, __resources: string[], __input: IamCreateSamlProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateSamlProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateSamlProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateSamlProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateSamlProviderRequest`](#aws-cdk-sdk.iam.IamCreateSamlProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `samlProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateSamlProvider.property.samlProviderArn"></a>

- *Type:* `string`

---


### IAMResponsesCreateServiceLinkedRole <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRole"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRole.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateServiceLinkedRole(__scope: Construct, __resources: string[], __input: IamCreateServiceLinkedRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest`](#aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRole.property.role"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole`](#aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole)

---


### IAMResponsesCreateServiceLinkedRoleRole <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateServiceLinkedRoleRole(__scope: Construct, __resources: string[], __input: IamCreateServiceLinkedRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest`](#aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.arn"></a>

- *Type:* `string`

---

##### `assumeRolePolicyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.assumeRolePolicyDocument"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.createDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.description"></a>

- *Type:* `string`

---

##### `maxSessionDuration`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.maxSessionDuration"></a>

- *Type:* `number`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary`](#aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary)

---

##### `roleId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.roleId"></a>

- *Type:* `string`

---

##### `roleLastUsed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.roleLastUsed"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed`](#aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed)

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.roleName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRole.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---


### IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary(__scope: Construct, __resources: string[], __input: IamCreateServiceLinkedRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest`](#aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionsBoundaryArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary.property.permissionsBoundaryArn"></a>

- *Type:* `string`

---

##### `permissionsBoundaryType`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary.property.permissionsBoundaryType"></a>

- *Type:* `string`

---


### IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed(__scope: Construct, __resources: string[], __input: IamCreateServiceLinkedRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest`](#aws-cdk-sdk.iam.IamCreateServiceLinkedRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `lastUsedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed.property.lastUsedDate"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed.property.region"></a>

- *Type:* `string`

---


### IAMResponsesCreateServiceSpecificCredential <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredential"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredential.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateServiceSpecificCredential(__scope: Construct, __resources: string[], __input: IamCreateServiceSpecificCredentialRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialRequest`](#aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceSpecificCredential`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredential.property.serviceSpecificCredential"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential`](#aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential)

---


### IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential(__scope: Construct, __resources: string[], __input: IamCreateServiceSpecificCredentialRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialRequest`](#aws-cdk-sdk.iam.IamCreateServiceSpecificCredentialRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.property.createDate"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.property.serviceName"></a>

- *Type:* `string`

---

##### `servicePassword`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.property.servicePassword"></a>

- *Type:* `string`

---

##### `serviceSpecificCredentialId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.property.serviceSpecificCredentialId"></a>

- *Type:* `string`

---

##### `serviceUserName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.property.serviceUserName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesCreateUser <a name="aws-cdk-sdk.iam.IAMResponsesCreateUser"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateUser.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateUser(__scope: Construct, __resources: string[], __input: IamCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateUserRequest`](#aws-cdk-sdk.iam.IamCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateUserUser`](#aws-cdk-sdk.iam.IAMResponsesCreateUserUser)

---


### IAMResponsesCreateUserUser <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateUserUser(__scope: Construct, __resources: string[], __input: IamCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateUserRequest`](#aws-cdk-sdk.iam.IamCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.property.createDate"></a>

- *Type:* `string`

---

##### `passwordLastUsed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.property.passwordLastUsed"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateUserUserPermissionsBoundary`](#aws-cdk-sdk.iam.IAMResponsesCreateUserUserPermissionsBoundary)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUser.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesCreateUserUserPermissionsBoundary <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUserPermissionsBoundary"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUserPermissionsBoundary.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateUserUserPermissionsBoundary(__scope: Construct, __resources: string[], __input: IamCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUserPermissionsBoundary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUserPermissionsBoundary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUserPermissionsBoundary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateUserRequest`](#aws-cdk-sdk.iam.IamCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionsBoundaryArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUserPermissionsBoundary.property.permissionsBoundaryArn"></a>

- *Type:* `string`

---

##### `permissionsBoundaryType`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateUserUserPermissionsBoundary.property.permissionsBoundaryType"></a>

- *Type:* `string`

---


### IAMResponsesCreateVirtualMfaDevice <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDevice"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDevice.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateVirtualMfaDevice(__scope: Construct, __resources: string[], __input: IamCreateVirtualMfaDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest`](#aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualMfaDevice`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDevice.property.virtualMfaDevice"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice`](#aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice)

---


### IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice(__scope: Construct, __resources: string[], __input: IamCreateVirtualMfaDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest`](#aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `base32StringSeed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice.property.base32StringSeed"></a>

- *Type:* `any`

---

##### `enableDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice.property.enableDate"></a>

- *Type:* `string`

---

##### `qrCodePng`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice.property.qrCodePng"></a>

- *Type:* `any`

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice.property.serialNumber"></a>

- *Type:* `string`

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice.property.user"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser`](#aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser)

---


### IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser(__scope: Construct, __resources: string[], __input: IamCreateVirtualMfaDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest`](#aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.property.createDate"></a>

- *Type:* `string`

---

##### `passwordLastUsed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.property.passwordLastUsed"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary`](#aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary(__scope: Construct, __resources: string[], __input: IamCreateVirtualMfaDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest`](#aws-cdk-sdk.iam.IamCreateVirtualMfaDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionsBoundaryArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary.property.permissionsBoundaryArn"></a>

- *Type:* `string`

---

##### `permissionsBoundaryType`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary.property.permissionsBoundaryType"></a>

- *Type:* `string`

---


### IAMResponsesDeleteServiceLinkedRole <a name="aws-cdk-sdk.iam.IAMResponsesDeleteServiceLinkedRole"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesDeleteServiceLinkedRole.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesDeleteServiceLinkedRole(__scope: Construct, __resources: string[], __input: IamDeleteServiceLinkedRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesDeleteServiceLinkedRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesDeleteServiceLinkedRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesDeleteServiceLinkedRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamDeleteServiceLinkedRoleRequest`](#aws-cdk-sdk.iam.IamDeleteServiceLinkedRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `deletionTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesDeleteServiceLinkedRole.property.deletionTaskId"></a>

- *Type:* `string`

---


### IAMResponsesFetchAccessKeyLastUsed <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsed"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsed.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchAccessKeyLastUsed(__scope: Construct, __resources: string[], __input: IamGetAccessKeyLastUsedRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsed.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsed.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsed.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetAccessKeyLastUsedRequest`](#aws-cdk-sdk.iam.IamGetAccessKeyLastUsedRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKeyLastUsed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsed.property.accessKeyLastUsed"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed`](#aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed)

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsed.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed(__scope: Construct, __resources: string[], __input: IamGetAccessKeyLastUsedRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetAccessKeyLastUsedRequest`](#aws-cdk-sdk.iam.IamGetAccessKeyLastUsedRequest)

---



#### Properties <a name="Properties"></a>

##### `lastUsedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed.property.lastUsedDate"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed.property.region"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed.property.serviceName"></a>

- *Type:* `string`

---


### IAMResponsesFetchAccountAuthorizationDetails <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchAccountAuthorizationDetails(__scope: Construct, __resources: string[], __input: IamGetAccountAuthorizationDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsRequest`](#aws-cdk-sdk.iam.IamGetAccountAuthorizationDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `groupDetailList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails.property.groupDetailList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGroupDetail`](#aws-cdk-sdk.iam.IamGroupDetail)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails.property.marker"></a>

- *Type:* `string`

---

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamManagedPolicyDetail`](#aws-cdk-sdk.iam.IamManagedPolicyDetail)[]

---

##### `roleDetailList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails.property.roleDetailList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRoleDetail`](#aws-cdk-sdk.iam.IamRoleDetail)[]

---

##### `userDetailList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountAuthorizationDetails.property.userDetailList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUserDetail`](#aws-cdk-sdk.iam.IamUserDetail)[]

---


### IAMResponsesFetchAccountPasswordPolicy <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchAccountPasswordPolicy(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `passwordPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicy.property.passwordPolicy"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy`](#aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy)

---


### IAMResponsesFetchAccountPasswordPolicyPasswordPolicy <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `allowUsersToChangePassword`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.property.allowUsersToChangePassword"></a>

- *Type:* `boolean`

---

##### `expirePasswords`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.property.expirePasswords"></a>

- *Type:* `boolean`

---

##### `hardExpiry`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.property.hardExpiry"></a>

- *Type:* `boolean`

---

##### `maxPasswordAge`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.property.maxPasswordAge"></a>

- *Type:* `number`

---

##### `minimumPasswordLength`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.property.minimumPasswordLength"></a>

- *Type:* `number`

---

##### `passwordReusePrevention`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.property.passwordReusePrevention"></a>

- *Type:* `number`

---

##### `requireLowercaseCharacters`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.property.requireLowercaseCharacters"></a>

- *Type:* `boolean`

---

##### `requireNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.property.requireNumbers"></a>

- *Type:* `boolean`

---

##### `requireSymbols`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.property.requireSymbols"></a>

- *Type:* `boolean`

---

##### `requireUppercaseCharacters`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountPasswordPolicyPasswordPolicy.property.requireUppercaseCharacters"></a>

- *Type:* `boolean`

---


### IAMResponsesFetchAccountSummary <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountSummary.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchAccountSummary(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountSummary.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `summaryMap`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchAccountSummary.property.summaryMap"></a>

- *Type:* {[ key: string ]: `number`}

---


### IAMResponsesFetchContextKeysForCustomPolicy <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForCustomPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForCustomPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchContextKeysForCustomPolicy(__scope: Construct, __resources: string[], __input: IamGetContextKeysForCustomPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForCustomPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForCustomPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForCustomPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetContextKeysForCustomPolicyRequest`](#aws-cdk-sdk.iam.IamGetContextKeysForCustomPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `contextKeyNames`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForCustomPolicy.property.contextKeyNames"></a>

- *Type:* `string`[]

---


### IAMResponsesFetchContextKeysForPrincipalPolicy <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForPrincipalPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForPrincipalPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchContextKeysForPrincipalPolicy(__scope: Construct, __resources: string[], __input: IamGetContextKeysForPrincipalPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForPrincipalPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForPrincipalPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForPrincipalPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetContextKeysForPrincipalPolicyRequest`](#aws-cdk-sdk.iam.IamGetContextKeysForPrincipalPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `contextKeyNames`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchContextKeysForPrincipalPolicy.property.contextKeyNames"></a>

- *Type:* `string`[]

---


### IAMResponsesFetchCredentialReport <a name="aws-cdk-sdk.iam.IAMResponsesFetchCredentialReport"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchCredentialReport.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchCredentialReport(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchCredentialReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchCredentialReport.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchCredentialReport.property.content"></a>

- *Type:* `any`

---

##### `generatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchCredentialReport.property.generatedTime"></a>

- *Type:* `string`

---

##### `reportFormat`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchCredentialReport.property.reportFormat"></a>

- *Type:* `string`

---


### IAMResponsesFetchGroup <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroup.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchGroup(__scope: Construct, __resources: string[], __input: IamGetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetGroupRequest`](#aws-cdk-sdk.iam.IamGetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup`](#aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup)

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroup.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroup.property.marker"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroup.property.users"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUser`](#aws-cdk-sdk.iam.IamUser)[]

---


### IAMResponsesFetchGroupGroup <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchGroupGroup(__scope: Construct, __resources: string[], __input: IamGetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetGroupRequest`](#aws-cdk-sdk.iam.IamGetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup.property.createDate"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup.property.groupName"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupGroup.property.path"></a>

- *Type:* `string`

---


### IAMResponsesFetchGroupPolicy <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchGroupPolicy(__scope: Construct, __resources: string[], __input: IamGetGroupPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetGroupPolicyRequest`](#aws-cdk-sdk.iam.IamGetGroupPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupPolicy.property.groupName"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupPolicy.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchGroupPolicy.property.policyName"></a>

- *Type:* `string`

---


### IAMResponsesFetchInstanceProfile <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfile.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchInstanceProfile(__scope: Construct, __resources: string[], __input: IamGetInstanceProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetInstanceProfileRequest`](#aws-cdk-sdk.iam.IamGetInstanceProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceProfile`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfile.property.instanceProfile"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile`](#aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile)

---


### IAMResponsesFetchInstanceProfileInstanceProfile <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchInstanceProfileInstanceProfile(__scope: Construct, __resources: string[], __input: IamGetInstanceProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetInstanceProfileRequest`](#aws-cdk-sdk.iam.IamGetInstanceProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile.property.createDate"></a>

- *Type:* `string`

---

##### `instanceProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile.property.instanceProfileId"></a>

- *Type:* `string`

---

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile.property.path"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchInstanceProfileInstanceProfile.property.roles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRole`](#aws-cdk-sdk.iam.IamRole)[]

---


### IAMResponsesFetchLoginProfile <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfile.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchLoginProfile(__scope: Construct, __resources: string[], __input: IamGetLoginProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetLoginProfileRequest`](#aws-cdk-sdk.iam.IamGetLoginProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `loginProfile`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfile.property.loginProfile"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchLoginProfileLoginProfile`](#aws-cdk-sdk.iam.IAMResponsesFetchLoginProfileLoginProfile)

---


### IAMResponsesFetchLoginProfileLoginProfile <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfileLoginProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfileLoginProfile.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchLoginProfileLoginProfile(__scope: Construct, __resources: string[], __input: IamGetLoginProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfileLoginProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfileLoginProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfileLoginProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetLoginProfileRequest`](#aws-cdk-sdk.iam.IamGetLoginProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfileLoginProfile.property.createDate"></a>

- *Type:* `string`

---

##### `passwordResetRequired`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfileLoginProfile.property.passwordResetRequired"></a>

- *Type:* `boolean`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchLoginProfileLoginProfile.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesFetchOpenIdConnectProvider <a name="aws-cdk-sdk.iam.IAMResponsesFetchOpenIdConnectProvider"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchOpenIdConnectProvider.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchOpenIdConnectProvider(__scope: Construct, __resources: string[], __input: IamGetOpenIdConnectProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOpenIdConnectProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOpenIdConnectProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOpenIdConnectProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetOpenIdConnectProviderRequest`](#aws-cdk-sdk.iam.IamGetOpenIdConnectProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `clientIdList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOpenIdConnectProvider.property.clientIdList"></a>

- *Type:* `string`[]

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOpenIdConnectProvider.property.createDate"></a>

- *Type:* `string`

---

##### `thumbprintList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOpenIdConnectProvider.property.thumbprintList"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOpenIdConnectProvider.property.url"></a>

- *Type:* `string`

---


### IAMResponsesFetchOrganizationsAccessReport <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchOrganizationsAccessReport(__scope: Construct, __resources: string[], __input: IamGetOrganizationsAccessReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest`](#aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest)

---



#### Properties <a name="Properties"></a>

##### `accessDetails`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.property.accessDetails"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAccessDetail`](#aws-cdk-sdk.iam.IamAccessDetail)[]

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReportErrorDetails`](#aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReportErrorDetails)

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `jobCompletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.property.jobCompletionDate"></a>

- *Type:* `string`

---

##### `jobCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.property.jobCreationDate"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.property.jobStatus"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.property.marker"></a>

- *Type:* `string`

---

##### `numberOfServicesAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.property.numberOfServicesAccessible"></a>

- *Type:* `number`

---

##### `numberOfServicesNotAccessed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReport.property.numberOfServicesNotAccessed"></a>

- *Type:* `number`

---


### IAMResponsesFetchOrganizationsAccessReportErrorDetails <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReportErrorDetails"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReportErrorDetails.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchOrganizationsAccessReportErrorDetails(__scope: Construct, __resources: string[], __input: IamGetOrganizationsAccessReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReportErrorDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReportErrorDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReportErrorDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest`](#aws-cdk-sdk.iam.IamGetOrganizationsAccessReportRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReportErrorDetails.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchOrganizationsAccessReportErrorDetails.property.message"></a>

- *Type:* `string`

---


### IAMResponsesFetchPolicy <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchPolicy(__scope: Construct, __resources: string[], __input: IamGetPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetPolicyRequest`](#aws-cdk-sdk.iam.IamGetPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy`](#aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy)

---


### IAMResponsesFetchPolicyPolicy <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchPolicyPolicy(__scope: Construct, __resources: string[], __input: IamGetPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetPolicyRequest`](#aws-cdk-sdk.iam.IamGetPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.arn"></a>

- *Type:* `string`

---

##### `attachmentCount`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.attachmentCount"></a>

- *Type:* `number`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.createDate"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.defaultVersionId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.description"></a>

- *Type:* `string`

---

##### `isAttachable`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.isAttachable"></a>

- *Type:* `boolean`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundaryUsageCount`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.permissionsBoundaryUsageCount"></a>

- *Type:* `number`

---

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.policyId"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.policyName"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyPolicy.property.updateDate"></a>

- *Type:* `string`

---


### IAMResponsesFetchPolicyVersion <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersion"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersion.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchPolicyVersion(__scope: Construct, __resources: string[], __input: IamGetPolicyVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetPolicyVersionRequest`](#aws-cdk-sdk.iam.IamGetPolicyVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `policyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersion.property.policyVersion"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion`](#aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion)

---


### IAMResponsesFetchPolicyVersionPolicyVersion <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchPolicyVersionPolicyVersion(__scope: Construct, __resources: string[], __input: IamGetPolicyVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetPolicyVersionRequest`](#aws-cdk-sdk.iam.IamGetPolicyVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion.property.createDate"></a>

- *Type:* `string`

---

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion.property.document"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchPolicyVersionPolicyVersion.property.versionId"></a>

- *Type:* `string`

---


### IAMResponsesFetchRole <a name="aws-cdk-sdk.iam.IAMResponsesFetchRole"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchRole.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchRole(__scope: Construct, __resources: string[], __input: IamGetRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetRoleRequest`](#aws-cdk-sdk.iam.IamGetRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRole.property.role"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchRoleRole`](#aws-cdk-sdk.iam.IAMResponsesFetchRoleRole)

---


### IAMResponsesFetchRolePolicy <a name="aws-cdk-sdk.iam.IAMResponsesFetchRolePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchRolePolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchRolePolicy(__scope: Construct, __resources: string[], __input: IamGetRolePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRolePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRolePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRolePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetRolePolicyRequest`](#aws-cdk-sdk.iam.IamGetRolePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRolePolicy.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRolePolicy.property.policyName"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRolePolicy.property.roleName"></a>

- *Type:* `string`

---


### IAMResponsesFetchRoleRole <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchRoleRole(__scope: Construct, __resources: string[], __input: IamGetRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetRoleRequest`](#aws-cdk-sdk.iam.IamGetRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.arn"></a>

- *Type:* `string`

---

##### `assumeRolePolicyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.assumeRolePolicyDocument"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.createDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.description"></a>

- *Type:* `string`

---

##### `maxSessionDuration`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.maxSessionDuration"></a>

- *Type:* `number`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchRoleRolePermissionsBoundary`](#aws-cdk-sdk.iam.IAMResponsesFetchRoleRolePermissionsBoundary)

---

##### `roleId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.roleId"></a>

- *Type:* `string`

---

##### `roleLastUsed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.roleLastUsed"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchRoleRoleRoleLastUsed`](#aws-cdk-sdk.iam.IAMResponsesFetchRoleRoleRoleLastUsed)

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.roleName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRole.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---


### IAMResponsesFetchRoleRolePermissionsBoundary <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRolePermissionsBoundary"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRolePermissionsBoundary.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchRoleRolePermissionsBoundary(__scope: Construct, __resources: string[], __input: IamGetRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRolePermissionsBoundary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRolePermissionsBoundary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRolePermissionsBoundary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetRoleRequest`](#aws-cdk-sdk.iam.IamGetRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionsBoundaryArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRolePermissionsBoundary.property.permissionsBoundaryArn"></a>

- *Type:* `string`

---

##### `permissionsBoundaryType`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRolePermissionsBoundary.property.permissionsBoundaryType"></a>

- *Type:* `string`

---


### IAMResponsesFetchRoleRoleRoleLastUsed <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRoleRoleLastUsed"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRoleRoleLastUsed.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchRoleRoleRoleLastUsed(__scope: Construct, __resources: string[], __input: IamGetRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRoleRoleLastUsed.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRoleRoleLastUsed.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRoleRoleLastUsed.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetRoleRequest`](#aws-cdk-sdk.iam.IamGetRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `lastUsedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRoleRoleLastUsed.property.lastUsedDate"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchRoleRoleRoleLastUsed.property.region"></a>

- *Type:* `string`

---


### IAMResponsesFetchSamlProvider <a name="aws-cdk-sdk.iam.IAMResponsesFetchSamlProvider"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchSamlProvider.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchSamlProvider(__scope: Construct, __resources: string[], __input: IamGetSamlProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSamlProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSamlProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSamlProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetSamlProviderRequest`](#aws-cdk-sdk.iam.IamGetSamlProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSamlProvider.property.createDate"></a>

- *Type:* `string`

---

##### `samlMetadataDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSamlProvider.property.samlMetadataDocument"></a>

- *Type:* `string`

---

##### `validUntil`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSamlProvider.property.validUntil"></a>

- *Type:* `string`

---


### IAMResponsesFetchServerCertificate <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificate.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchServerCertificate(__scope: Construct, __resources: string[], __input: IamGetServerCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServerCertificateRequest`](#aws-cdk-sdk.iam.IamGetServerCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `serverCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificate.property.serverCertificate"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificate`](#aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificate)

---


### IAMResponsesFetchServerCertificateServerCertificate <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificate.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchServerCertificateServerCertificate(__scope: Construct, __resources: string[], __input: IamGetServerCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServerCertificateRequest`](#aws-cdk-sdk.iam.IamGetServerCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificate.property.certificateBody"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificate.property.certificateChain"></a>

- *Type:* `string`

---

##### `serverCertificateMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificate.property.serverCertificateMetadata"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata`](#aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata)

---


### IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata(__scope: Construct, __resources: string[], __input: IamGetServerCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServerCertificateRequest`](#aws-cdk-sdk.iam.IamGetServerCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata.property.arn"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata.property.expiration"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata.property.path"></a>

- *Type:* `string`

---

##### `serverCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata.property.serverCertificateId"></a>

- *Type:* `string`

---

##### `serverCertificateName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata.property.serverCertificateName"></a>

- *Type:* `string`

---

##### `uploadDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata.property.uploadDate"></a>

- *Type:* `string`

---


### IAMResponsesFetchServiceLastAccessedDetails <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchServiceLastAccessedDetails(__scope: Construct, __resources: string[], __input: IamGetServiceLastAccessedDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsRequest`](#aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.property.error"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsError`](#aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsError)

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `jobCompletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.property.jobCompletionDate"></a>

- *Type:* `string`

---

##### `jobCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.property.jobCreationDate"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.property.jobStatus"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.property.jobType"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.property.marker"></a>

- *Type:* `string`

---

##### `servicesLastAccessed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetails.property.servicesLastAccessed"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServiceLastAccessed`](#aws-cdk-sdk.iam.IamServiceLastAccessed)[]

---


### IAMResponsesFetchServiceLastAccessedDetailsError <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsError"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsError.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchServiceLastAccessedDetailsError(__scope: Construct, __resources: string[], __input: IamGetServiceLastAccessedDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsRequest`](#aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsError.property.message"></a>

- *Type:* `string`

---


### IAMResponsesFetchServiceLastAccessedDetailsWithEntities <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities(__scope: Construct, __resources: string[], __input: IamGetServiceLastAccessedDetailsWithEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest`](#aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `entityDetailsList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.property.entityDetailsList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamEntityDetails`](#aws-cdk-sdk.iam.IamEntityDetails)[]

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.property.error"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError`](#aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError)

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `jobCompletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.property.jobCompletionDate"></a>

- *Type:* `string`

---

##### `jobCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.property.jobCreationDate"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.property.jobStatus"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntities.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError(__scope: Construct, __resources: string[], __input: IamGetServiceLastAccessedDetailsWithEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest`](#aws-cdk-sdk.iam.IamGetServiceLastAccessedDetailsWithEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError.property.message"></a>

- *Type:* `string`

---


### IAMResponsesFetchServiceLinkedRoleDeletionStatus <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatus.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchServiceLinkedRoleDeletionStatus(__scope: Construct, __resources: string[], __input: IamGetServiceLinkedRoleDeletionStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusRequest`](#aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatus.property.reason"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatusReason`](#aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatusReason)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatus.property.status"></a>

- *Type:* `string`

---


### IAMResponsesFetchServiceLinkedRoleDeletionStatusReason <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatusReason"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatusReason.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchServiceLinkedRoleDeletionStatusReason(__scope: Construct, __resources: string[], __input: IamGetServiceLinkedRoleDeletionStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatusReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatusReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatusReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusRequest`](#aws-cdk-sdk.iam.IamGetServiceLinkedRoleDeletionStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatusReason.property.reason"></a>

- *Type:* `string`

---

##### `roleUsageList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchServiceLinkedRoleDeletionStatusReason.property.roleUsageList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRoleUsageType`](#aws-cdk-sdk.iam.IamRoleUsageType)[]

---


### IAMResponsesFetchSshPublicKey <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKey"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKey.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchSshPublicKey(__scope: Construct, __resources: string[], __input: IamGetSshPublicKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetSshPublicKeyRequest`](#aws-cdk-sdk.iam.IamGetSshPublicKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `sshPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKey.property.sshPublicKey"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey`](#aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey)

---


### IAMResponsesFetchSshPublicKeySshPublicKey <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchSshPublicKeySshPublicKey(__scope: Construct, __resources: string[], __input: IamGetSshPublicKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetSshPublicKeyRequest`](#aws-cdk-sdk.iam.IamGetSshPublicKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `fingerprint`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey.property.fingerprint"></a>

- *Type:* `string`

---

##### `sshPublicKeyBody`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey.property.sshPublicKeyBody"></a>

- *Type:* `string`

---

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey.property.sshPublicKeyId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey.property.status"></a>

- *Type:* `string`

---

##### `uploadDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey.property.uploadDate"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchSshPublicKeySshPublicKey.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesFetchUser <a name="aws-cdk-sdk.iam.IAMResponsesFetchUser"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchUser.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchUser(__scope: Construct, __resources: string[], __input: IamGetUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetUserRequest`](#aws-cdk-sdk.iam.IamGetUserRequest)

---



#### Properties <a name="Properties"></a>

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchUserUser`](#aws-cdk-sdk.iam.IAMResponsesFetchUserUser)

---


### IAMResponsesFetchUserPolicy <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchUserPolicy(__scope: Construct, __resources: string[], __input: IamGetUserPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetUserPolicyRequest`](#aws-cdk-sdk.iam.IamGetUserPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserPolicy.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserPolicy.property.policyName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserPolicy.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesFetchUserUser <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchUserUser(__scope: Construct, __resources: string[], __input: IamGetUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetUserRequest`](#aws-cdk-sdk.iam.IamGetUserRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.property.createDate"></a>

- *Type:* `string`

---

##### `passwordLastUsed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.property.passwordLastUsed"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesFetchUserUserPermissionsBoundary`](#aws-cdk-sdk.iam.IAMResponsesFetchUserUserPermissionsBoundary)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUser.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesFetchUserUserPermissionsBoundary <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUserPermissionsBoundary"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUserPermissionsBoundary.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesFetchUserUserPermissionsBoundary(__scope: Construct, __resources: string[], __input: IamGetUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUserPermissionsBoundary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUserPermissionsBoundary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUserPermissionsBoundary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGetUserRequest`](#aws-cdk-sdk.iam.IamGetUserRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionsBoundaryArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUserPermissionsBoundary.property.permissionsBoundaryArn"></a>

- *Type:* `string`

---

##### `permissionsBoundaryType`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesFetchUserUserPermissionsBoundary.property.permissionsBoundaryType"></a>

- *Type:* `string`

---


### IAMResponsesGenerateCredentialReport <a name="aws-cdk-sdk.iam.IAMResponsesGenerateCredentialReport"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesGenerateCredentialReport.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesGenerateCredentialReport(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateCredentialReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateCredentialReport.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateCredentialReport.property.description"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateCredentialReport.property.state"></a>

- *Type:* `string`

---


### IAMResponsesGenerateOrganizationsAccessReport <a name="aws-cdk-sdk.iam.IAMResponsesGenerateOrganizationsAccessReport"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesGenerateOrganizationsAccessReport.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesGenerateOrganizationsAccessReport(__scope: Construct, __resources: string[], __input: IamGenerateOrganizationsAccessReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateOrganizationsAccessReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateOrganizationsAccessReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateOrganizationsAccessReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGenerateOrganizationsAccessReportRequest`](#aws-cdk-sdk.iam.IamGenerateOrganizationsAccessReportRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateOrganizationsAccessReport.property.jobId"></a>

- *Type:* `string`

---


### IAMResponsesGenerateServiceLastAccessedDetails <a name="aws-cdk-sdk.iam.IAMResponsesGenerateServiceLastAccessedDetails"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesGenerateServiceLastAccessedDetails.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesGenerateServiceLastAccessedDetails(__scope: Construct, __resources: string[], __input: IamGenerateServiceLastAccessedDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateServiceLastAccessedDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateServiceLastAccessedDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateServiceLastAccessedDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGenerateServiceLastAccessedDetailsRequest`](#aws-cdk-sdk.iam.IamGenerateServiceLastAccessedDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesGenerateServiceLastAccessedDetails.property.jobId"></a>

- *Type:* `string`

---


### IAMResponsesListAccessKeys <a name="aws-cdk-sdk.iam.IAMResponsesListAccessKeys"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListAccessKeys.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListAccessKeys(__scope: Construct, __resources: string[], __input: IamListAccessKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccessKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccessKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccessKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListAccessKeysRequest`](#aws-cdk-sdk.iam.IamListAccessKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKeyMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccessKeys.property.accessKeyMetadata"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAccessKeyMetadata`](#aws-cdk-sdk.iam.IamAccessKeyMetadata)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccessKeys.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccessKeys.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesListAccountAliases <a name="aws-cdk-sdk.iam.IAMResponsesListAccountAliases"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListAccountAliases.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListAccountAliases(__scope: Construct, __resources: string[], __input: IamListAccountAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccountAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccountAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccountAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListAccountAliasesRequest`](#aws-cdk-sdk.iam.IamListAccountAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `accountAliases`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccountAliases.property.accountAliases"></a>

- *Type:* `string`[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccountAliases.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAccountAliases.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesListAttachedGroupPolicies <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedGroupPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedGroupPolicies.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListAttachedGroupPolicies(__scope: Construct, __resources: string[], __input: IamListAttachedGroupPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedGroupPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedGroupPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedGroupPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListAttachedGroupPoliciesRequest`](#aws-cdk-sdk.iam.IamListAttachedGroupPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `attachedPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedGroupPolicies.property.attachedPolicies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPolicy`](#aws-cdk-sdk.iam.IamAttachedPolicy)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedGroupPolicies.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedGroupPolicies.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesListAttachedRolePolicies <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedRolePolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedRolePolicies.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListAttachedRolePolicies(__scope: Construct, __resources: string[], __input: IamListAttachedRolePoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedRolePolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedRolePolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedRolePolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListAttachedRolePoliciesRequest`](#aws-cdk-sdk.iam.IamListAttachedRolePoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `attachedPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedRolePolicies.property.attachedPolicies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPolicy`](#aws-cdk-sdk.iam.IamAttachedPolicy)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedRolePolicies.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedRolePolicies.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesListAttachedUserPolicies <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedUserPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedUserPolicies.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListAttachedUserPolicies(__scope: Construct, __resources: string[], __input: IamListAttachedUserPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedUserPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedUserPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedUserPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListAttachedUserPoliciesRequest`](#aws-cdk-sdk.iam.IamListAttachedUserPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `attachedPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedUserPolicies.property.attachedPolicies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamAttachedPolicy`](#aws-cdk-sdk.iam.IamAttachedPolicy)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedUserPolicies.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListAttachedUserPolicies.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesListEntitiesForPolicy <a name="aws-cdk-sdk.iam.IAMResponsesListEntitiesForPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListEntitiesForPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListEntitiesForPolicy(__scope: Construct, __resources: string[], __input: IamListEntitiesForPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListEntitiesForPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListEntitiesForPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListEntitiesForPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest`](#aws-cdk-sdk.iam.IamListEntitiesForPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListEntitiesForPolicy.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListEntitiesForPolicy.property.marker"></a>

- *Type:* `string`

---

##### `policyGroups`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListEntitiesForPolicy.property.policyGroups"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyGroup`](#aws-cdk-sdk.iam.IamPolicyGroup)[]

---

##### `policyRoles`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListEntitiesForPolicy.property.policyRoles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyRole`](#aws-cdk-sdk.iam.IamPolicyRole)[]

---

##### `policyUsers`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListEntitiesForPolicy.property.policyUsers"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyUser`](#aws-cdk-sdk.iam.IamPolicyUser)[]

---


### IAMResponsesListGroupPolicies <a name="aws-cdk-sdk.iam.IAMResponsesListGroupPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListGroupPolicies.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListGroupPolicies(__scope: Construct, __resources: string[], __input: IamListGroupPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListGroupPoliciesRequest`](#aws-cdk-sdk.iam.IamListGroupPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupPolicies.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupPolicies.property.marker"></a>

- *Type:* `string`

---

##### `policyNames`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupPolicies.property.policyNames"></a>

- *Type:* `string`[]

---


### IAMResponsesListGroups <a name="aws-cdk-sdk.iam.IAMResponsesListGroups"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListGroups.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListGroups(__scope: Construct, __resources: string[], __input: IamListGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListGroupsRequest`](#aws-cdk-sdk.iam.IamListGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroups.property.groups"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGroup`](#aws-cdk-sdk.iam.IamGroup)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroups.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroups.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesListGroupsForUser <a name="aws-cdk-sdk.iam.IAMResponsesListGroupsForUser"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListGroupsForUser.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListGroupsForUser(__scope: Construct, __resources: string[], __input: IamListGroupsForUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupsForUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupsForUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupsForUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListGroupsForUserRequest`](#aws-cdk-sdk.iam.IamListGroupsForUserRequest)

---



#### Properties <a name="Properties"></a>

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupsForUser.property.groups"></a>

- *Type:* [`aws-cdk-sdk.iam.IamGroup`](#aws-cdk-sdk.iam.IamGroup)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupsForUser.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListGroupsForUser.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesListInstanceProfiles <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfiles.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListInstanceProfiles(__scope: Construct, __resources: string[], __input: IamListInstanceProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListInstanceProfilesRequest`](#aws-cdk-sdk.iam.IamListInstanceProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceProfiles`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfiles.property.instanceProfiles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamInstanceProfile`](#aws-cdk-sdk.iam.IamInstanceProfile)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfiles.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfiles.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesListInstanceProfilesForRole <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfilesForRole"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfilesForRole.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListInstanceProfilesForRole(__scope: Construct, __resources: string[], __input: IamListInstanceProfilesForRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfilesForRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfilesForRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfilesForRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListInstanceProfilesForRoleRequest`](#aws-cdk-sdk.iam.IamListInstanceProfilesForRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceProfiles`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfilesForRole.property.instanceProfiles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamInstanceProfile`](#aws-cdk-sdk.iam.IamInstanceProfile)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfilesForRole.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListInstanceProfilesForRole.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesListMfaDevices <a name="aws-cdk-sdk.iam.IAMResponsesListMfaDevices"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListMfaDevices.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListMfaDevices(__scope: Construct, __resources: string[], __input: IamListMfaDevicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListMfaDevices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListMfaDevices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListMfaDevices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListMfaDevicesRequest`](#aws-cdk-sdk.iam.IamListMfaDevicesRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListMfaDevices.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListMfaDevices.property.marker"></a>

- *Type:* `string`

---

##### `mfaDevices`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListMfaDevices.property.mfaDevices"></a>

- *Type:* [`aws-cdk-sdk.iam.IammfaDevice`](#aws-cdk-sdk.iam.IammfaDevice)[]

---


### IAMResponsesListOpenIdConnectProviders <a name="aws-cdk-sdk.iam.IAMResponsesListOpenIdConnectProviders"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListOpenIdConnectProviders.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListOpenIdConnectProviders(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListOpenIdConnectProviders.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListOpenIdConnectProviders.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `openIdConnectProviderList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListOpenIdConnectProviders.property.openIdConnectProviderList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamOpenIdConnectProviderListEntry`](#aws-cdk-sdk.iam.IamOpenIdConnectProviderListEntry)[]

---


### IAMResponsesListPolicies <a name="aws-cdk-sdk.iam.IAMResponsesListPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListPolicies.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListPolicies(__scope: Construct, __resources: string[], __input: IamListPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListPoliciesRequest`](#aws-cdk-sdk.iam.IamListPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicies.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicies.property.marker"></a>

- *Type:* `string`

---

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicies.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicy`](#aws-cdk-sdk.iam.IamPolicy)[]

---


### IAMResponsesListPoliciesGrantingServiceAccess <a name="aws-cdk-sdk.iam.IAMResponsesListPoliciesGrantingServiceAccess"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListPoliciesGrantingServiceAccess.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListPoliciesGrantingServiceAccess(__scope: Construct, __resources: string[], __input: IamListPoliciesGrantingServiceAccessRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPoliciesGrantingServiceAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPoliciesGrantingServiceAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPoliciesGrantingServiceAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessRequest`](#aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPoliciesGrantingServiceAccess.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPoliciesGrantingServiceAccess.property.marker"></a>

- *Type:* `string`

---

##### `policiesGrantingServiceAccess`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPoliciesGrantingServiceAccess.property.policiesGrantingServiceAccess"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessEntry`](#aws-cdk-sdk.iam.IamListPoliciesGrantingServiceAccessEntry)[]

---


### IAMResponsesListPolicyVersions <a name="aws-cdk-sdk.iam.IAMResponsesListPolicyVersions"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListPolicyVersions.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListPolicyVersions(__scope: Construct, __resources: string[], __input: IamListPolicyVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicyVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicyVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicyVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListPolicyVersionsRequest`](#aws-cdk-sdk.iam.IamListPolicyVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicyVersions.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicyVersions.property.marker"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListPolicyVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.iam.IamPolicyVersion`](#aws-cdk-sdk.iam.IamPolicyVersion)[]

---


### IAMResponsesListRolePolicies <a name="aws-cdk-sdk.iam.IAMResponsesListRolePolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListRolePolicies.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListRolePolicies(__scope: Construct, __resources: string[], __input: IamListRolePoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRolePolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRolePolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRolePolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListRolePoliciesRequest`](#aws-cdk-sdk.iam.IamListRolePoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRolePolicies.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRolePolicies.property.marker"></a>

- *Type:* `string`

---

##### `policyNames`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRolePolicies.property.policyNames"></a>

- *Type:* `string`[]

---


### IAMResponsesListRoles <a name="aws-cdk-sdk.iam.IAMResponsesListRoles"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListRoles.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListRoles(__scope: Construct, __resources: string[], __input: IamListRolesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListRolesRequest`](#aws-cdk-sdk.iam.IamListRolesRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoles.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoles.property.marker"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoles.property.roles"></a>

- *Type:* [`aws-cdk-sdk.iam.IamRole`](#aws-cdk-sdk.iam.IamRole)[]

---


### IAMResponsesListRoleTags <a name="aws-cdk-sdk.iam.IAMResponsesListRoleTags"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListRoleTags.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListRoleTags(__scope: Construct, __resources: string[], __input: IamListRoleTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoleTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoleTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoleTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListRoleTagsRequest`](#aws-cdk-sdk.iam.IamListRoleTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoleTags.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoleTags.property.marker"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListRoleTags.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---


### IAMResponsesListSamlProviders <a name="aws-cdk-sdk.iam.IAMResponsesListSamlProviders"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListSamlProviders.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListSamlProviders(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSamlProviders.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSamlProviders.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `samlProviderList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSamlProviders.property.samlProviderList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamsamlProviderListEntry`](#aws-cdk-sdk.iam.IamsamlProviderListEntry)[]

---


### IAMResponsesListServerCertificates <a name="aws-cdk-sdk.iam.IAMResponsesListServerCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListServerCertificates.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListServerCertificates(__scope: Construct, __resources: string[], __input: IamListServerCertificatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListServerCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListServerCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListServerCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListServerCertificatesRequest`](#aws-cdk-sdk.iam.IamListServerCertificatesRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListServerCertificates.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListServerCertificates.property.marker"></a>

- *Type:* `string`

---

##### `serverCertificateMetadataList`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListServerCertificates.property.serverCertificateMetadataList"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServerCertificateMetadata`](#aws-cdk-sdk.iam.IamServerCertificateMetadata)[]

---


### IAMResponsesListServiceSpecificCredentials <a name="aws-cdk-sdk.iam.IAMResponsesListServiceSpecificCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListServiceSpecificCredentials.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListServiceSpecificCredentials(__scope: Construct, __resources: string[], __input: IamListServiceSpecificCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListServiceSpecificCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListServiceSpecificCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListServiceSpecificCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListServiceSpecificCredentialsRequest`](#aws-cdk-sdk.iam.IamListServiceSpecificCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceSpecificCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListServiceSpecificCredentials.property.serviceSpecificCredentials"></a>

- *Type:* [`aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata`](#aws-cdk-sdk.iam.IamServiceSpecificCredentialMetadata)[]

---


### IAMResponsesListSigningCertificates <a name="aws-cdk-sdk.iam.IAMResponsesListSigningCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListSigningCertificates.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListSigningCertificates(__scope: Construct, __resources: string[], __input: IamListSigningCertificatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSigningCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSigningCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSigningCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListSigningCertificatesRequest`](#aws-cdk-sdk.iam.IamListSigningCertificatesRequest)

---



#### Properties <a name="Properties"></a>

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSigningCertificates.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.iam.IamSigningCertificate`](#aws-cdk-sdk.iam.IamSigningCertificate)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSigningCertificates.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSigningCertificates.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesListSshPublicKeys <a name="aws-cdk-sdk.iam.IAMResponsesListSshPublicKeys"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListSshPublicKeys.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListSshPublicKeys(__scope: Construct, __resources: string[], __input: IamListSshPublicKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSshPublicKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSshPublicKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSshPublicKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListSshPublicKeysRequest`](#aws-cdk-sdk.iam.IamListSshPublicKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSshPublicKeys.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSshPublicKeys.property.marker"></a>

- *Type:* `string`

---

##### `sshPublicKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListSshPublicKeys.property.sshPublicKeys"></a>

- *Type:* [`aws-cdk-sdk.iam.IamsshPublicKeyMetadata`](#aws-cdk-sdk.iam.IamsshPublicKeyMetadata)[]

---


### IAMResponsesListUserPolicies <a name="aws-cdk-sdk.iam.IAMResponsesListUserPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListUserPolicies.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListUserPolicies(__scope: Construct, __resources: string[], __input: IamListUserPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListUserPoliciesRequest`](#aws-cdk-sdk.iam.IamListUserPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserPolicies.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserPolicies.property.marker"></a>

- *Type:* `string`

---

##### `policyNames`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserPolicies.property.policyNames"></a>

- *Type:* `string`[]

---


### IAMResponsesListUsers <a name="aws-cdk-sdk.iam.IAMResponsesListUsers"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListUsers.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListUsers(__scope: Construct, __resources: string[], __input: IamListUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListUsersRequest`](#aws-cdk-sdk.iam.IamListUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUsers.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUsers.property.marker"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUsers.property.users"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUser`](#aws-cdk-sdk.iam.IamUser)[]

---


### IAMResponsesListUserTags <a name="aws-cdk-sdk.iam.IAMResponsesListUserTags"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListUserTags.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListUserTags(__scope: Construct, __resources: string[], __input: IamListUserTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListUserTagsRequest`](#aws-cdk-sdk.iam.IamListUserTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserTags.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserTags.property.marker"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListUserTags.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---


### IAMResponsesListVirtualMfaDevices <a name="aws-cdk-sdk.iam.IAMResponsesListVirtualMfaDevices"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesListVirtualMfaDevices.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesListVirtualMfaDevices(__scope: Construct, __resources: string[], __input: IamListVirtualMfaDevicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListVirtualMfaDevices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListVirtualMfaDevices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListVirtualMfaDevices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamListVirtualMfaDevicesRequest`](#aws-cdk-sdk.iam.IamListVirtualMfaDevicesRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListVirtualMfaDevices.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListVirtualMfaDevices.property.marker"></a>

- *Type:* `string`

---

##### `virtualMfaDevices`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesListVirtualMfaDevices.property.virtualMfaDevices"></a>

- *Type:* [`aws-cdk-sdk.iam.IamVirtualMfaDevice`](#aws-cdk-sdk.iam.IamVirtualMfaDevice)[]

---


### IAMResponsesResetServiceSpecificCredential <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredential"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredential.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesResetServiceSpecificCredential(__scope: Construct, __resources: string[], __input: IamResetServiceSpecificCredentialRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamResetServiceSpecificCredentialRequest`](#aws-cdk-sdk.iam.IamResetServiceSpecificCredentialRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceSpecificCredential`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredential.property.serviceSpecificCredential"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential`](#aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential)

---


### IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential(__scope: Construct, __resources: string[], __input: IamResetServiceSpecificCredentialRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamResetServiceSpecificCredentialRequest`](#aws-cdk-sdk.iam.IamResetServiceSpecificCredentialRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.property.createDate"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.property.serviceName"></a>

- *Type:* `string`

---

##### `servicePassword`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.property.servicePassword"></a>

- *Type:* `string`

---

##### `serviceSpecificCredentialId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.property.serviceSpecificCredentialId"></a>

- *Type:* `string`

---

##### `serviceUserName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.property.serviceUserName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesSimulateCustomPolicy <a name="aws-cdk-sdk.iam.IAMResponsesSimulateCustomPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesSimulateCustomPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesSimulateCustomPolicy(__scope: Construct, __resources: string[], __input: IamSimulateCustomPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulateCustomPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulateCustomPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulateCustomPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest`](#aws-cdk-sdk.iam.IamSimulateCustomPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `evaluationResults`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulateCustomPolicy.property.evaluationResults"></a>

- *Type:* [`aws-cdk-sdk.iam.IamEvaluationResult`](#aws-cdk-sdk.iam.IamEvaluationResult)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulateCustomPolicy.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulateCustomPolicy.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesSimulatePrincipalPolicy <a name="aws-cdk-sdk.iam.IAMResponsesSimulatePrincipalPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesSimulatePrincipalPolicy.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesSimulatePrincipalPolicy(__scope: Construct, __resources: string[], __input: IamSimulatePrincipalPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulatePrincipalPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulatePrincipalPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulatePrincipalPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest`](#aws-cdk-sdk.iam.IamSimulatePrincipalPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `evaluationResults`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulatePrincipalPolicy.property.evaluationResults"></a>

- *Type:* [`aws-cdk-sdk.iam.IamEvaluationResult`](#aws-cdk-sdk.iam.IamEvaluationResult)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulatePrincipalPolicy.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesSimulatePrincipalPolicy.property.marker"></a>

- *Type:* `string`

---


### IAMResponsesUpdateRoleDescription <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescription"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescription.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUpdateRoleDescription(__scope: Construct, __resources: string[], __input: IamUpdateRoleDescriptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest`](#aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest)

---



#### Properties <a name="Properties"></a>

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescription.property.role"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole`](#aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole)

---


### IAMResponsesUpdateRoleDescriptionRole <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUpdateRoleDescriptionRole(__scope: Construct, __resources: string[], __input: IamUpdateRoleDescriptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest`](#aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.arn"></a>

- *Type:* `string`

---

##### `assumeRolePolicyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.assumeRolePolicyDocument"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.createDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.description"></a>

- *Type:* `string`

---

##### `maxSessionDuration`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.maxSessionDuration"></a>

- *Type:* `number`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary`](#aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary)

---

##### `roleId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.roleId"></a>

- *Type:* `string`

---

##### `roleLastUsed`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.roleLastUsed"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed`](#aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed)

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.roleName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRole.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iam.IamTag`](#aws-cdk-sdk.iam.IamTag)[]

---


### IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary(__scope: Construct, __resources: string[], __input: IamUpdateRoleDescriptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest`](#aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest)

---



#### Properties <a name="Properties"></a>

##### `permissionsBoundaryArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary.property.permissionsBoundaryArn"></a>

- *Type:* `string`

---

##### `permissionsBoundaryType`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary.property.permissionsBoundaryType"></a>

- *Type:* `string`

---


### IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed(__scope: Construct, __resources: string[], __input: IamUpdateRoleDescriptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest`](#aws-cdk-sdk.iam.IamUpdateRoleDescriptionRequest)

---



#### Properties <a name="Properties"></a>

##### `lastUsedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed.property.lastUsedDate"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed.property.region"></a>

- *Type:* `string`

---


### IAMResponsesUpdateSamlProvider <a name="aws-cdk-sdk.iam.IAMResponsesUpdateSamlProvider"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUpdateSamlProvider.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUpdateSamlProvider(__scope: Construct, __resources: string[], __input: IamUpdateSamlProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateSamlProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateSamlProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateSamlProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUpdateSamlProviderRequest`](#aws-cdk-sdk.iam.IamUpdateSamlProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `samlProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUpdateSamlProvider.property.samlProviderArn"></a>

- *Type:* `string`

---


### IAMResponsesUploadServerCertificate <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificate.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUploadServerCertificate(__scope: Construct, __resources: string[], __input: IamUploadServerCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUploadServerCertificateRequest`](#aws-cdk-sdk.iam.IamUploadServerCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `serverCertificateMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificate.property.serverCertificateMetadata"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata`](#aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata)

---


### IAMResponsesUploadServerCertificateServerCertificateMetadata <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUploadServerCertificateServerCertificateMetadata(__scope: Construct, __resources: string[], __input: IamUploadServerCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUploadServerCertificateRequest`](#aws-cdk-sdk.iam.IamUploadServerCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata.property.arn"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata.property.expiration"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata.property.path"></a>

- *Type:* `string`

---

##### `serverCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata.property.serverCertificateId"></a>

- *Type:* `string`

---

##### `serverCertificateName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata.property.serverCertificateName"></a>

- *Type:* `string`

---

##### `uploadDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadServerCertificateServerCertificateMetadata.property.uploadDate"></a>

- *Type:* `string`

---


### IAMResponsesUploadSigningCertificate <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificate.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUploadSigningCertificate(__scope: Construct, __resources: string[], __input: IamUploadSigningCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUploadSigningCertificateRequest`](#aws-cdk-sdk.iam.IamUploadSigningCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificate.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate`](#aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate)

---


### IAMResponsesUploadSigningCertificateCertificate <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUploadSigningCertificateCertificate(__scope: Construct, __resources: string[], __input: IamUploadSigningCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUploadSigningCertificateRequest`](#aws-cdk-sdk.iam.IamUploadSigningCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate.property.certificateBody"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate.property.certificateId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate.property.status"></a>

- *Type:* `string`

---

##### `uploadDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate.property.uploadDate"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSigningCertificateCertificate.property.userName"></a>

- *Type:* `string`

---


### IAMResponsesUploadSshPublicKey <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKey"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKey.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUploadSshPublicKey(__scope: Construct, __resources: string[], __input: IamUploadSshPublicKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUploadSshPublicKeyRequest`](#aws-cdk-sdk.iam.IamUploadSshPublicKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `sshPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKey.property.sshPublicKey"></a>

- *Type:* [`aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey`](#aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey)

---


### IAMResponsesUploadSshPublicKeySshPublicKey <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey"></a>

#### Initializer <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey.Initializer"></a>

```typescript
import { iam } from 'aws-cdk-sdk'

new iam.IAMResponsesUploadSshPublicKeySshPublicKey(__scope: Construct, __resources: string[], __input: IamUploadSshPublicKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iam.IamUploadSshPublicKeyRequest`](#aws-cdk-sdk.iam.IamUploadSshPublicKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `fingerprint`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey.property.fingerprint"></a>

- *Type:* `string`

---

##### `sshPublicKeyBody`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey.property.sshPublicKeyBody"></a>

- *Type:* `string`

---

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey.property.sshPublicKeyId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey.property.status"></a>

- *Type:* `string`

---

##### `uploadDate`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey.property.uploadDate"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.iam.IAMResponsesUploadSshPublicKeySshPublicKey.property.userName"></a>

- *Type:* `string`

---



