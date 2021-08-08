# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### OrganizationsClient <a name="aws-cdk-sdk.organizations.OrganizationsClient"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsClient.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptHandshake` <a name="aws-cdk-sdk.organizations.OrganizationsClient.acceptHandshake"></a>

```typescript
public acceptHandshake(input: OrganizationsAcceptHandshakeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsAcceptHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsAcceptHandshakeRequest)

---

##### `attachPolicy` <a name="aws-cdk-sdk.organizations.OrganizationsClient.attachPolicy"></a>

```typescript
public attachPolicy(input: OrganizationsAttachPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsAttachPolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsAttachPolicyRequest)

---

##### `cancelHandshake` <a name="aws-cdk-sdk.organizations.OrganizationsClient.cancelHandshake"></a>

```typescript
public cancelHandshake(input: OrganizationsCancelHandshakeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCancelHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsCancelHandshakeRequest)

---

##### `createAccount` <a name="aws-cdk-sdk.organizations.OrganizationsClient.createAccount"></a>

```typescript
public createAccount(input: OrganizationsCreateAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest)

---

##### `createGovCloudAccount` <a name="aws-cdk-sdk.organizations.OrganizationsClient.createGovCloudAccount"></a>

```typescript
public createGovCloudAccount(input: OrganizationsCreateGovCloudAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest)

---

##### `createOrganization` <a name="aws-cdk-sdk.organizations.OrganizationsClient.createOrganization"></a>

```typescript
public createOrganization(input: OrganizationsCreateOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateOrganizationRequest)

---

##### `createOrganizationalUnit` <a name="aws-cdk-sdk.organizations.OrganizationsClient.createOrganizationalUnit"></a>

```typescript
public createOrganizationalUnit(input: OrganizationsCreateOrganizationalUnitRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitRequest)

---

##### `createPolicy` <a name="aws-cdk-sdk.organizations.OrganizationsClient.createPolicy"></a>

```typescript
public createPolicy(input: OrganizationsCreatePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest)

---

##### `declineHandshake` <a name="aws-cdk-sdk.organizations.OrganizationsClient.declineHandshake"></a>

```typescript
public declineHandshake(input: OrganizationsDeclineHandshakeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDeclineHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsDeclineHandshakeRequest)

---

##### `deleteOrganization` <a name="aws-cdk-sdk.organizations.OrganizationsClient.deleteOrganization"></a>

```typescript
public deleteOrganization()
```

##### `deleteOrganizationalUnit` <a name="aws-cdk-sdk.organizations.OrganizationsClient.deleteOrganizationalUnit"></a>

```typescript
public deleteOrganizationalUnit(input: OrganizationsDeleteOrganizationalUnitRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDeleteOrganizationalUnitRequest`](#aws-cdk-sdk.organizations.OrganizationsDeleteOrganizationalUnitRequest)

---

##### `deletePolicy` <a name="aws-cdk-sdk.organizations.OrganizationsClient.deletePolicy"></a>

```typescript
public deletePolicy(input: OrganizationsDeletePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDeletePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsDeletePolicyRequest)

---

##### `deregisterDelegatedAdministrator` <a name="aws-cdk-sdk.organizations.OrganizationsClient.deregisterDelegatedAdministrator"></a>

```typescript
public deregisterDelegatedAdministrator(input: OrganizationsDeregisterDelegatedAdministratorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDeregisterDelegatedAdministratorRequest`](#aws-cdk-sdk.organizations.OrganizationsDeregisterDelegatedAdministratorRequest)

---

##### `describeAccount` <a name="aws-cdk-sdk.organizations.OrganizationsClient.describeAccount"></a>

```typescript
public describeAccount(input: OrganizationsDescribeAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeAccountRequest)

---

##### `describeCreateAccountStatus` <a name="aws-cdk-sdk.organizations.OrganizationsClient.describeCreateAccountStatus"></a>

```typescript
public describeCreateAccountStatus(input: OrganizationsDescribeCreateAccountStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeCreateAccountStatusRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeCreateAccountStatusRequest)

---

##### `describeEffectivePolicy` <a name="aws-cdk-sdk.organizations.OrganizationsClient.describeEffectivePolicy"></a>

```typescript
public describeEffectivePolicy(input: OrganizationsDescribeEffectivePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyRequest)

---

##### `describeHandshake` <a name="aws-cdk-sdk.organizations.OrganizationsClient.describeHandshake"></a>

```typescript
public describeHandshake(input: OrganizationsDescribeHandshakeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeHandshakeRequest)

---

##### `describeOrganization` <a name="aws-cdk-sdk.organizations.OrganizationsClient.describeOrganization"></a>

```typescript
public describeOrganization()
```

##### `describeOrganizationalUnit` <a name="aws-cdk-sdk.organizations.OrganizationsClient.describeOrganizationalUnit"></a>

```typescript
public describeOrganizationalUnit(input: OrganizationsDescribeOrganizationalUnitRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationalUnitRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationalUnitRequest)

---

##### `describePolicy` <a name="aws-cdk-sdk.organizations.OrganizationsClient.describePolicy"></a>

```typescript
public describePolicy(input: OrganizationsDescribePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribePolicyRequest)

---

##### `detachPolicy` <a name="aws-cdk-sdk.organizations.OrganizationsClient.detachPolicy"></a>

```typescript
public detachPolicy(input: OrganizationsDetachPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDetachPolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsDetachPolicyRequest)

---

##### `disableAwsServiceAccess` <a name="aws-cdk-sdk.organizations.OrganizationsClient.disableAwsServiceAccess"></a>

```typescript
public disableAwsServiceAccess(input: OrganizationsDisableAwsServiceAccessRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDisableAwsServiceAccessRequest`](#aws-cdk-sdk.organizations.OrganizationsDisableAwsServiceAccessRequest)

---

##### `disablePolicyType` <a name="aws-cdk-sdk.organizations.OrganizationsClient.disablePolicyType"></a>

```typescript
public disablePolicyType(input: OrganizationsDisablePolicyTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeRequest`](#aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeRequest)

---

##### `enableAllFeatures` <a name="aws-cdk-sdk.organizations.OrganizationsClient.enableAllFeatures"></a>

```typescript
public enableAllFeatures()
```

##### `enableAwsServiceAccess` <a name="aws-cdk-sdk.organizations.OrganizationsClient.enableAwsServiceAccess"></a>

```typescript
public enableAwsServiceAccess(input: OrganizationsEnableAwsServiceAccessRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsEnableAwsServiceAccessRequest`](#aws-cdk-sdk.organizations.OrganizationsEnableAwsServiceAccessRequest)

---

##### `enablePolicyType` <a name="aws-cdk-sdk.organizations.OrganizationsClient.enablePolicyType"></a>

```typescript
public enablePolicyType(input: OrganizationsEnablePolicyTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeRequest`](#aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeRequest)

---

##### `inviteAccountToOrganization` <a name="aws-cdk-sdk.organizations.OrganizationsClient.inviteAccountToOrganization"></a>

```typescript
public inviteAccountToOrganization(input: OrganizationsInviteAccountToOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationRequest)

---

##### `leaveOrganization` <a name="aws-cdk-sdk.organizations.OrganizationsClient.leaveOrganization"></a>

```typescript
public leaveOrganization()
```

##### `listAccounts` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listAccounts"></a>

```typescript
public listAccounts(input: OrganizationsListAccountsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListAccountsRequest`](#aws-cdk-sdk.organizations.OrganizationsListAccountsRequest)

---

##### `listAccountsForParent` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listAccountsForParent"></a>

```typescript
public listAccountsForParent(input: OrganizationsListAccountsForParentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListAccountsForParentRequest`](#aws-cdk-sdk.organizations.OrganizationsListAccountsForParentRequest)

---

##### `listAwsServiceAccessForOrganization` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listAwsServiceAccessForOrganization"></a>

```typescript
public listAwsServiceAccessForOrganization(input: OrganizationsListAwsServiceAccessForOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListAwsServiceAccessForOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsListAwsServiceAccessForOrganizationRequest)

---

##### `listChildren` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listChildren"></a>

```typescript
public listChildren(input: OrganizationsListChildrenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListChildrenRequest`](#aws-cdk-sdk.organizations.OrganizationsListChildrenRequest)

---

##### `listCreateAccountStatus` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listCreateAccountStatus"></a>

```typescript
public listCreateAccountStatus(input: OrganizationsListCreateAccountStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusRequest`](#aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusRequest)

---

##### `listDelegatedAdministrators` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listDelegatedAdministrators"></a>

```typescript
public listDelegatedAdministrators(input: OrganizationsListDelegatedAdministratorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsRequest`](#aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsRequest)

---

##### `listDelegatedServicesForAccount` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listDelegatedServicesForAccount"></a>

```typescript
public listDelegatedServicesForAccount(input: OrganizationsListDelegatedServicesForAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountRequest)

---

##### `listHandshakesForAccount` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listHandshakesForAccount"></a>

```typescript
public listHandshakesForAccount(input: OrganizationsListHandshakesForAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountRequest)

---

##### `listHandshakesForOrganization` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listHandshakesForOrganization"></a>

```typescript
public listHandshakesForOrganization(input: OrganizationsListHandshakesForOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationRequest)

---

##### `listOrganizationalUnitsForParent` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listOrganizationalUnitsForParent"></a>

```typescript
public listOrganizationalUnitsForParent(input: OrganizationsListOrganizationalUnitsForParentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentRequest`](#aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentRequest)

---

##### `listParents` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listParents"></a>

```typescript
public listParents(input: OrganizationsListParentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListParentsRequest`](#aws-cdk-sdk.organizations.OrganizationsListParentsRequest)

---

##### `listPolicies` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listPolicies"></a>

```typescript
public listPolicies(input: OrganizationsListPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListPoliciesRequest`](#aws-cdk-sdk.organizations.OrganizationsListPoliciesRequest)

---

##### `listPoliciesForTarget` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listPoliciesForTarget"></a>

```typescript
public listPoliciesForTarget(input: OrganizationsListPoliciesForTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetRequest`](#aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetRequest)

---

##### `listRoots` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listRoots"></a>

```typescript
public listRoots(input: OrganizationsListRootsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListRootsRequest`](#aws-cdk-sdk.organizations.OrganizationsListRootsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: OrganizationsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListTagsForResourceRequest`](#aws-cdk-sdk.organizations.OrganizationsListTagsForResourceRequest)

---

##### `listTargetsForPolicy` <a name="aws-cdk-sdk.organizations.OrganizationsClient.listTargetsForPolicy"></a>

```typescript
public listTargetsForPolicy(input: OrganizationsListTargetsForPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyRequest)

---

##### `moveAccount` <a name="aws-cdk-sdk.organizations.OrganizationsClient.moveAccount"></a>

```typescript
public moveAccount(input: OrganizationsMoveAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsMoveAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsMoveAccountRequest)

---

##### `registerDelegatedAdministrator` <a name="aws-cdk-sdk.organizations.OrganizationsClient.registerDelegatedAdministrator"></a>

```typescript
public registerDelegatedAdministrator(input: OrganizationsRegisterDelegatedAdministratorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsRegisterDelegatedAdministratorRequest`](#aws-cdk-sdk.organizations.OrganizationsRegisterDelegatedAdministratorRequest)

---

##### `removeAccountFromOrganization` <a name="aws-cdk-sdk.organizations.OrganizationsClient.removeAccountFromOrganization"></a>

```typescript
public removeAccountFromOrganization(input: OrganizationsRemoveAccountFromOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsRemoveAccountFromOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsRemoveAccountFromOrganizationRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.organizations.OrganizationsClient.tagResource"></a>

```typescript
public tagResource(input: OrganizationsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsTagResourceRequest`](#aws-cdk-sdk.organizations.OrganizationsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.organizations.OrganizationsClient.untagResource"></a>

```typescript
public untagResource(input: OrganizationsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsUntagResourceRequest`](#aws-cdk-sdk.organizations.OrganizationsUntagResourceRequest)

---

##### `updateOrganizationalUnit` <a name="aws-cdk-sdk.organizations.OrganizationsClient.updateOrganizationalUnit"></a>

```typescript
public updateOrganizationalUnit(input: OrganizationsUpdateOrganizationalUnitRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitRequest`](#aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitRequest)

---

##### `updatePolicy` <a name="aws-cdk-sdk.organizations.OrganizationsClient.updatePolicy"></a>

```typescript
public updatePolicy(input: OrganizationsUpdatePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest)

---




## Structs <a name="Structs"></a>

### OrganizationsAcceptHandshakeRequest <a name="aws-cdk-sdk.organizations.OrganizationsAcceptHandshakeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsAcceptHandshakeRequest: organizations.OrganizationsAcceptHandshakeRequest = { ... }
```

##### `handshakeId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAcceptHandshakeRequest.property.handshakeId"></a>

- *Type:* `string`

---

### OrganizationsAcceptHandshakeResponse <a name="aws-cdk-sdk.organizations.OrganizationsAcceptHandshakeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsAcceptHandshakeResponse: organizations.OrganizationsAcceptHandshakeResponse = { ... }
```

##### `handshake`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAcceptHandshakeResponse.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshake`](#aws-cdk-sdk.organizations.OrganizationsHandshake)

---

### OrganizationsAccount <a name="aws-cdk-sdk.organizations.OrganizationsAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsAccount: organizations.OrganizationsAccount = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAccount.property.arn"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAccount.property.email"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAccount.property.id"></a>

- *Type:* `string`

---

##### `joinedMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAccount.property.joinedMethod"></a>

- *Type:* `string`

---

##### `joinedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAccount.property.joinedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAccount.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAccount.property.status"></a>

- *Type:* `string`

---

### OrganizationsAttachPolicyRequest <a name="aws-cdk-sdk.organizations.OrganizationsAttachPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsAttachPolicyRequest: organizations.OrganizationsAttachPolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAttachPolicyRequest.property.policyId"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsAttachPolicyRequest.property.targetId"></a>

- *Type:* `string`

---

### OrganizationsCancelHandshakeRequest <a name="aws-cdk-sdk.organizations.OrganizationsCancelHandshakeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCancelHandshakeRequest: organizations.OrganizationsCancelHandshakeRequest = { ... }
```

##### `handshakeId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCancelHandshakeRequest.property.handshakeId"></a>

- *Type:* `string`

---

### OrganizationsCancelHandshakeResponse <a name="aws-cdk-sdk.organizations.OrganizationsCancelHandshakeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCancelHandshakeResponse: organizations.OrganizationsCancelHandshakeResponse = { ... }
```

##### `handshake`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCancelHandshakeResponse.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshake`](#aws-cdk-sdk.organizations.OrganizationsHandshake)

---

### OrganizationsChild <a name="aws-cdk-sdk.organizations.OrganizationsChild"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsChild: organizations.OrganizationsChild = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsChild.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsChild.property.type"></a>

- *Type:* `string`

---

### OrganizationsCreateAccountRequest <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreateAccountRequest: organizations.OrganizationsCreateAccountRequest = { ... }
```

##### `accountName`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest.property.accountName"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest.property.email"></a>

- *Type:* `string`

---

##### `iamUserAccessToBilling`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest.property.iamUserAccessToBilling"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest.property.roleName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsTag`](#aws-cdk-sdk.organizations.OrganizationsTag)[]

---

### OrganizationsCreateAccountResponse <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreateAccountResponse: organizations.OrganizationsCreateAccountResponse = { ... }
```

##### `createAccountStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountResponse.property.createAccountStatus"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus`](#aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus)

---

### OrganizationsCreateAccountStatus <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreateAccountStatus: organizations.OrganizationsCreateAccountStatus = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus.property.accountId"></a>

- *Type:* `string`

---

##### `accountName`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus.property.accountName"></a>

- *Type:* `string`

---

##### `completedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus.property.completedTimestamp"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `govCloudAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus.property.govCloudAccountId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus.property.id"></a>

- *Type:* `string`

---

##### `requestedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus.property.state"></a>

- *Type:* `string`

---

### OrganizationsCreateGovCloudAccountRequest <a name="aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreateGovCloudAccountRequest: organizations.OrganizationsCreateGovCloudAccountRequest = { ... }
```

##### `accountName`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest.property.accountName"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest.property.email"></a>

- *Type:* `string`

---

##### `iamUserAccessToBilling`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest.property.iamUserAccessToBilling"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest.property.roleName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsTag`](#aws-cdk-sdk.organizations.OrganizationsTag)[]

---

### OrganizationsCreateGovCloudAccountResponse <a name="aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreateGovCloudAccountResponse: organizations.OrganizationsCreateGovCloudAccountResponse = { ... }
```

##### `createAccountStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountResponse.property.createAccountStatus"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus`](#aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus)

---

### OrganizationsCreateOrganizationalUnitRequest <a name="aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreateOrganizationalUnitRequest: organizations.OrganizationsCreateOrganizationalUnitRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitRequest.property.name"></a>

- *Type:* `string`

---

##### `parentId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitRequest.property.parentId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsTag`](#aws-cdk-sdk.organizations.OrganizationsTag)[]

---

### OrganizationsCreateOrganizationalUnitResponse <a name="aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreateOrganizationalUnitResponse: organizations.OrganizationsCreateOrganizationalUnitResponse = { ... }
```

##### `organizationalUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitResponse.property.organizationalUnit"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit`](#aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit)

---

### OrganizationsCreateOrganizationRequest <a name="aws-cdk-sdk.organizations.OrganizationsCreateOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreateOrganizationRequest: organizations.OrganizationsCreateOrganizationRequest = { ... }
```

##### `featureSet`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateOrganizationRequest.property.featureSet"></a>

- *Type:* `string`

---

### OrganizationsCreateOrganizationResponse <a name="aws-cdk-sdk.organizations.OrganizationsCreateOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreateOrganizationResponse: organizations.OrganizationsCreateOrganizationResponse = { ... }
```

##### `organization`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreateOrganizationResponse.property.organization"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsOrganization`](#aws-cdk-sdk.organizations.OrganizationsOrganization)

---

### OrganizationsCreatePolicyRequest <a name="aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreatePolicyRequest: organizations.OrganizationsCreatePolicyRequest = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest.property.content"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest.property.type"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsTag`](#aws-cdk-sdk.organizations.OrganizationsTag)[]

---

### OrganizationsCreatePolicyResponse <a name="aws-cdk-sdk.organizations.OrganizationsCreatePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsCreatePolicyResponse: organizations.OrganizationsCreatePolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsCreatePolicyResponse.property.policy"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicy`](#aws-cdk-sdk.organizations.OrganizationsPolicy)

---

### OrganizationsDeclineHandshakeRequest <a name="aws-cdk-sdk.organizations.OrganizationsDeclineHandshakeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDeclineHandshakeRequest: organizations.OrganizationsDeclineHandshakeRequest = { ... }
```

##### `handshakeId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDeclineHandshakeRequest.property.handshakeId"></a>

- *Type:* `string`

---

### OrganizationsDeclineHandshakeResponse <a name="aws-cdk-sdk.organizations.OrganizationsDeclineHandshakeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDeclineHandshakeResponse: organizations.OrganizationsDeclineHandshakeResponse = { ... }
```

##### `handshake`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDeclineHandshakeResponse.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshake`](#aws-cdk-sdk.organizations.OrganizationsHandshake)

---

### OrganizationsDelegatedAdministrator <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDelegatedAdministrator: organizations.OrganizationsDelegatedAdministrator = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator.property.arn"></a>

- *Type:* `string`

---

##### `delegationEnabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator.property.delegationEnabledDate"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator.property.email"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator.property.id"></a>

- *Type:* `string`

---

##### `joinedMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator.property.joinedMethod"></a>

- *Type:* `string`

---

##### `joinedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator.property.joinedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator.property.status"></a>

- *Type:* `string`

---

### OrganizationsDelegatedService <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDelegatedService: organizations.OrganizationsDelegatedService = { ... }
```

##### `delegationEnabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedService.property.delegationEnabledDate"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDelegatedService.property.servicePrincipal"></a>

- *Type:* `string`

---

### OrganizationsDeleteOrganizationalUnitRequest <a name="aws-cdk-sdk.organizations.OrganizationsDeleteOrganizationalUnitRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDeleteOrganizationalUnitRequest: organizations.OrganizationsDeleteOrganizationalUnitRequest = { ... }
```

##### `organizationalUnitId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDeleteOrganizationalUnitRequest.property.organizationalUnitId"></a>

- *Type:* `string`

---

### OrganizationsDeletePolicyRequest <a name="aws-cdk-sdk.organizations.OrganizationsDeletePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDeletePolicyRequest: organizations.OrganizationsDeletePolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDeletePolicyRequest.property.policyId"></a>

- *Type:* `string`

---

### OrganizationsDeregisterDelegatedAdministratorRequest <a name="aws-cdk-sdk.organizations.OrganizationsDeregisterDelegatedAdministratorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDeregisterDelegatedAdministratorRequest: organizations.OrganizationsDeregisterDelegatedAdministratorRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDeregisterDelegatedAdministratorRequest.property.accountId"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDeregisterDelegatedAdministratorRequest.property.servicePrincipal"></a>

- *Type:* `string`

---

### OrganizationsDescribeAccountRequest <a name="aws-cdk-sdk.organizations.OrganizationsDescribeAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeAccountRequest: organizations.OrganizationsDescribeAccountRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeAccountRequest.property.accountId"></a>

- *Type:* `string`

---

### OrganizationsDescribeAccountResponse <a name="aws-cdk-sdk.organizations.OrganizationsDescribeAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeAccountResponse: organizations.OrganizationsDescribeAccountResponse = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeAccountResponse.property.account"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsAccount`](#aws-cdk-sdk.organizations.OrganizationsAccount)

---

### OrganizationsDescribeCreateAccountStatusRequest <a name="aws-cdk-sdk.organizations.OrganizationsDescribeCreateAccountStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeCreateAccountStatusRequest: organizations.OrganizationsDescribeCreateAccountStatusRequest = { ... }
```

##### `createAccountRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeCreateAccountStatusRequest.property.createAccountRequestId"></a>

- *Type:* `string`

---

### OrganizationsDescribeCreateAccountStatusResponse <a name="aws-cdk-sdk.organizations.OrganizationsDescribeCreateAccountStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeCreateAccountStatusResponse: organizations.OrganizationsDescribeCreateAccountStatusResponse = { ... }
```

##### `createAccountStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeCreateAccountStatusResponse.property.createAccountStatus"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus`](#aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus)

---

### OrganizationsDescribeEffectivePolicyRequest <a name="aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeEffectivePolicyRequest: organizations.OrganizationsDescribeEffectivePolicyRequest = { ... }
```

##### `policyType`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyRequest.property.policyType"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyRequest.property.targetId"></a>

- *Type:* `string`

---

### OrganizationsDescribeEffectivePolicyResponse <a name="aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeEffectivePolicyResponse: organizations.OrganizationsDescribeEffectivePolicyResponse = { ... }
```

##### `effectivePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyResponse.property.effectivePolicy"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsEffectivePolicy`](#aws-cdk-sdk.organizations.OrganizationsEffectivePolicy)

---

### OrganizationsDescribeHandshakeRequest <a name="aws-cdk-sdk.organizations.OrganizationsDescribeHandshakeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeHandshakeRequest: organizations.OrganizationsDescribeHandshakeRequest = { ... }
```

##### `handshakeId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeHandshakeRequest.property.handshakeId"></a>

- *Type:* `string`

---

### OrganizationsDescribeHandshakeResponse <a name="aws-cdk-sdk.organizations.OrganizationsDescribeHandshakeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeHandshakeResponse: organizations.OrganizationsDescribeHandshakeResponse = { ... }
```

##### `handshake`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeHandshakeResponse.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshake`](#aws-cdk-sdk.organizations.OrganizationsHandshake)

---

### OrganizationsDescribeOrganizationalUnitRequest <a name="aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationalUnitRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeOrganizationalUnitRequest: organizations.OrganizationsDescribeOrganizationalUnitRequest = { ... }
```

##### `organizationalUnitId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationalUnitRequest.property.organizationalUnitId"></a>

- *Type:* `string`

---

### OrganizationsDescribeOrganizationalUnitResponse <a name="aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationalUnitResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeOrganizationalUnitResponse: organizations.OrganizationsDescribeOrganizationalUnitResponse = { ... }
```

##### `organizationalUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationalUnitResponse.property.organizationalUnit"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit`](#aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit)

---

### OrganizationsDescribeOrganizationResponse <a name="aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribeOrganizationResponse: organizations.OrganizationsDescribeOrganizationResponse = { ... }
```

##### `organization`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationResponse.property.organization"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsOrganization`](#aws-cdk-sdk.organizations.OrganizationsOrganization)

---

### OrganizationsDescribePolicyRequest <a name="aws-cdk-sdk.organizations.OrganizationsDescribePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribePolicyRequest: organizations.OrganizationsDescribePolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribePolicyRequest.property.policyId"></a>

- *Type:* `string`

---

### OrganizationsDescribePolicyResponse <a name="aws-cdk-sdk.organizations.OrganizationsDescribePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDescribePolicyResponse: organizations.OrganizationsDescribePolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDescribePolicyResponse.property.policy"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicy`](#aws-cdk-sdk.organizations.OrganizationsPolicy)

---

### OrganizationsDetachPolicyRequest <a name="aws-cdk-sdk.organizations.OrganizationsDetachPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDetachPolicyRequest: organizations.OrganizationsDetachPolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDetachPolicyRequest.property.policyId"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDetachPolicyRequest.property.targetId"></a>

- *Type:* `string`

---

### OrganizationsDisableAwsServiceAccessRequest <a name="aws-cdk-sdk.organizations.OrganizationsDisableAwsServiceAccessRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDisableAwsServiceAccessRequest: organizations.OrganizationsDisableAwsServiceAccessRequest = { ... }
```

##### `servicePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDisableAwsServiceAccessRequest.property.servicePrincipal"></a>

- *Type:* `string`

---

### OrganizationsDisablePolicyTypeRequest <a name="aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDisablePolicyTypeRequest: organizations.OrganizationsDisablePolicyTypeRequest = { ... }
```

##### `policyType`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeRequest.property.policyType"></a>

- *Type:* `string`

---

##### `rootId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeRequest.property.rootId"></a>

- *Type:* `string`

---

### OrganizationsDisablePolicyTypeResponse <a name="aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsDisablePolicyTypeResponse: organizations.OrganizationsDisablePolicyTypeResponse = { ... }
```

##### `root`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeResponse.property.root"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsRoot`](#aws-cdk-sdk.organizations.OrganizationsRoot)

---

### OrganizationsEffectivePolicy <a name="aws-cdk-sdk.organizations.OrganizationsEffectivePolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsEffectivePolicy: organizations.OrganizationsEffectivePolicy = { ... }
```

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEffectivePolicy.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `policyContent`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEffectivePolicy.property.policyContent"></a>

- *Type:* `string`

---

##### `policyType`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEffectivePolicy.property.policyType"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEffectivePolicy.property.targetId"></a>

- *Type:* `string`

---

### OrganizationsEnableAllFeaturesRequest <a name="aws-cdk-sdk.organizations.OrganizationsEnableAllFeaturesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsEnableAllFeaturesRequest: organizations.OrganizationsEnableAllFeaturesRequest = { ... }
```

### OrganizationsEnableAllFeaturesResponse <a name="aws-cdk-sdk.organizations.OrganizationsEnableAllFeaturesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsEnableAllFeaturesResponse: organizations.OrganizationsEnableAllFeaturesResponse = { ... }
```

##### `handshake`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEnableAllFeaturesResponse.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshake`](#aws-cdk-sdk.organizations.OrganizationsHandshake)

---

### OrganizationsEnableAwsServiceAccessRequest <a name="aws-cdk-sdk.organizations.OrganizationsEnableAwsServiceAccessRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsEnableAwsServiceAccessRequest: organizations.OrganizationsEnableAwsServiceAccessRequest = { ... }
```

##### `servicePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEnableAwsServiceAccessRequest.property.servicePrincipal"></a>

- *Type:* `string`

---

### OrganizationsEnabledServicePrincipal <a name="aws-cdk-sdk.organizations.OrganizationsEnabledServicePrincipal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsEnabledServicePrincipal: organizations.OrganizationsEnabledServicePrincipal = { ... }
```

##### `dateEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEnabledServicePrincipal.property.dateEnabled"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEnabledServicePrincipal.property.servicePrincipal"></a>

- *Type:* `string`

---

### OrganizationsEnablePolicyTypeRequest <a name="aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsEnablePolicyTypeRequest: organizations.OrganizationsEnablePolicyTypeRequest = { ... }
```

##### `policyType`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeRequest.property.policyType"></a>

- *Type:* `string`

---

##### `rootId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeRequest.property.rootId"></a>

- *Type:* `string`

---

### OrganizationsEnablePolicyTypeResponse <a name="aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsEnablePolicyTypeResponse: organizations.OrganizationsEnablePolicyTypeResponse = { ... }
```

##### `root`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeResponse.property.root"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsRoot`](#aws-cdk-sdk.organizations.OrganizationsRoot)

---

### OrganizationsHandshake <a name="aws-cdk-sdk.organizations.OrganizationsHandshake"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsHandshake: organizations.OrganizationsHandshake = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshake.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshake.property.arn"></a>

- *Type:* `string`

---

##### `expirationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshake.property.expirationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshake.property.id"></a>

- *Type:* `string`

---

##### `parties`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshake.property.parties"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeParty`](#aws-cdk-sdk.organizations.OrganizationsHandshakeParty)[]

---

##### `requestedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshake.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshake.property.resources"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeResource`](#aws-cdk-sdk.organizations.OrganizationsHandshakeResource)[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshake.property.state"></a>

- *Type:* `string`

---

### OrganizationsHandshakeFilter <a name="aws-cdk-sdk.organizations.OrganizationsHandshakeFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsHandshakeFilter: organizations.OrganizationsHandshakeFilter = { ... }
```

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshakeFilter.property.actionType"></a>

- *Type:* `string`

---

##### `parentHandshakeId`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshakeFilter.property.parentHandshakeId"></a>

- *Type:* `string`

---

### OrganizationsHandshakeParty <a name="aws-cdk-sdk.organizations.OrganizationsHandshakeParty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsHandshakeParty: organizations.OrganizationsHandshakeParty = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshakeParty.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshakeParty.property.type"></a>

- *Type:* `string`

---

### OrganizationsHandshakeResource <a name="aws-cdk-sdk.organizations.OrganizationsHandshakeResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsHandshakeResource: organizations.OrganizationsHandshakeResource = { ... }
```

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshakeResource.property.resources"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeResource`](#aws-cdk-sdk.organizations.OrganizationsHandshakeResource)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshakeResource.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsHandshakeResource.property.value"></a>

- *Type:* `string`

---

### OrganizationsInviteAccountToOrganizationRequest <a name="aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsInviteAccountToOrganizationRequest: organizations.OrganizationsInviteAccountToOrganizationRequest = { ... }
```

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationRequest.property.target"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeParty`](#aws-cdk-sdk.organizations.OrganizationsHandshakeParty)

---

##### `notes`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationRequest.property.notes"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsTag`](#aws-cdk-sdk.organizations.OrganizationsTag)[]

---

### OrganizationsInviteAccountToOrganizationResponse <a name="aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsInviteAccountToOrganizationResponse: organizations.OrganizationsInviteAccountToOrganizationResponse = { ... }
```

##### `handshake`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationResponse.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshake`](#aws-cdk-sdk.organizations.OrganizationsHandshake)

---

### OrganizationsListAccountsForParentRequest <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsForParentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListAccountsForParentRequest: organizations.OrganizationsListAccountsForParentRequest = { ... }
```

##### `parentId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsForParentRequest.property.parentId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsForParentRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsForParentRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListAccountsForParentResponse <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsForParentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListAccountsForParentResponse: organizations.OrganizationsListAccountsForParentResponse = { ... }
```

##### `accounts`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsForParentResponse.property.accounts"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsAccount`](#aws-cdk-sdk.organizations.OrganizationsAccount)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsForParentResponse.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListAccountsRequest <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListAccountsRequest: organizations.OrganizationsListAccountsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListAccountsResponse <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListAccountsResponse: organizations.OrganizationsListAccountsResponse = { ... }
```

##### `accounts`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsResponse.property.accounts"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsAccount`](#aws-cdk-sdk.organizations.OrganizationsAccount)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAccountsResponse.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListAwsServiceAccessForOrganizationRequest <a name="aws-cdk-sdk.organizations.OrganizationsListAwsServiceAccessForOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListAwsServiceAccessForOrganizationRequest: organizations.OrganizationsListAwsServiceAccessForOrganizationRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAwsServiceAccessForOrganizationRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAwsServiceAccessForOrganizationRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListAwsServiceAccessForOrganizationResponse <a name="aws-cdk-sdk.organizations.OrganizationsListAwsServiceAccessForOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListAwsServiceAccessForOrganizationResponse: organizations.OrganizationsListAwsServiceAccessForOrganizationResponse = { ... }
```

##### `enabledServicePrincipals`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAwsServiceAccessForOrganizationResponse.property.enabledServicePrincipals"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsEnabledServicePrincipal`](#aws-cdk-sdk.organizations.OrganizationsEnabledServicePrincipal)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListAwsServiceAccessForOrganizationResponse.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListChildrenRequest <a name="aws-cdk-sdk.organizations.OrganizationsListChildrenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListChildrenRequest: organizations.OrganizationsListChildrenRequest = { ... }
```

##### `childType`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListChildrenRequest.property.childType"></a>

- *Type:* `string`

---

##### `parentId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListChildrenRequest.property.parentId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListChildrenRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListChildrenRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListChildrenResponse <a name="aws-cdk-sdk.organizations.OrganizationsListChildrenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListChildrenResponse: organizations.OrganizationsListChildrenResponse = { ... }
```

##### `children`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListChildrenResponse.property.children"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsChild`](#aws-cdk-sdk.organizations.OrganizationsChild)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListChildrenResponse.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListCreateAccountStatusRequest <a name="aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListCreateAccountStatusRequest: organizations.OrganizationsListCreateAccountStatusRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `states`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusRequest.property.states"></a>

- *Type:* `string`[]

---

### OrganizationsListCreateAccountStatusResponse <a name="aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListCreateAccountStatusResponse: organizations.OrganizationsListCreateAccountStatusResponse = { ... }
```

##### `createAccountStatuses`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusResponse.property.createAccountStatuses"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus`](#aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusResponse.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListDelegatedAdministratorsRequest <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListDelegatedAdministratorsRequest: organizations.OrganizationsListDelegatedAdministratorsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsRequest.property.servicePrincipal"></a>

- *Type:* `string`

---

### OrganizationsListDelegatedAdministratorsResponse <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListDelegatedAdministratorsResponse: organizations.OrganizationsListDelegatedAdministratorsResponse = { ... }
```

##### `delegatedAdministrators`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsResponse.property.delegatedAdministrators"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator`](#aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsResponse.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListDelegatedServicesForAccountRequest <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListDelegatedServicesForAccountRequest: organizations.OrganizationsListDelegatedServicesForAccountRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountRequest.property.accountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListDelegatedServicesForAccountResponse <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListDelegatedServicesForAccountResponse: organizations.OrganizationsListDelegatedServicesForAccountResponse = { ... }
```

##### `delegatedServices`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountResponse.property.delegatedServices"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDelegatedService`](#aws-cdk-sdk.organizations.OrganizationsDelegatedService)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountResponse.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListHandshakesForAccountRequest <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListHandshakesForAccountRequest: organizations.OrganizationsListHandshakesForAccountRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeFilter`](#aws-cdk-sdk.organizations.OrganizationsHandshakeFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListHandshakesForAccountResponse <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListHandshakesForAccountResponse: organizations.OrganizationsListHandshakesForAccountResponse = { ... }
```

##### `handshakes`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountResponse.property.handshakes"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshake`](#aws-cdk-sdk.organizations.OrganizationsHandshake)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountResponse.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListHandshakesForOrganizationRequest <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListHandshakesForOrganizationRequest: organizations.OrganizationsListHandshakesForOrganizationRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeFilter`](#aws-cdk-sdk.organizations.OrganizationsHandshakeFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListHandshakesForOrganizationResponse <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListHandshakesForOrganizationResponse: organizations.OrganizationsListHandshakesForOrganizationResponse = { ... }
```

##### `handshakes`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationResponse.property.handshakes"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshake`](#aws-cdk-sdk.organizations.OrganizationsHandshake)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationResponse.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListOrganizationalUnitsForParentRequest <a name="aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListOrganizationalUnitsForParentRequest: organizations.OrganizationsListOrganizationalUnitsForParentRequest = { ... }
```

##### `parentId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentRequest.property.parentId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListOrganizationalUnitsForParentResponse <a name="aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListOrganizationalUnitsForParentResponse: organizations.OrganizationsListOrganizationalUnitsForParentResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `organizationalUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentResponse.property.organizationalUnits"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit`](#aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit)[]

---

### OrganizationsListParentsRequest <a name="aws-cdk-sdk.organizations.OrganizationsListParentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListParentsRequest: organizations.OrganizationsListParentsRequest = { ... }
```

##### `childId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListParentsRequest.property.childId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListParentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListParentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListParentsResponse <a name="aws-cdk-sdk.organizations.OrganizationsListParentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListParentsResponse: organizations.OrganizationsListParentsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListParentsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `parents`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListParentsResponse.property.parents"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsParent`](#aws-cdk-sdk.organizations.OrganizationsParent)[]

---

### OrganizationsListPoliciesForTargetRequest <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListPoliciesForTargetRequest: organizations.OrganizationsListPoliciesForTargetRequest = { ... }
```

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetRequest.property.filter"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetRequest.property.targetId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListPoliciesForTargetResponse <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListPoliciesForTargetResponse: organizations.OrganizationsListPoliciesForTargetResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetResponse.property.policies"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicySummary`](#aws-cdk-sdk.organizations.OrganizationsPolicySummary)[]

---

### OrganizationsListPoliciesRequest <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListPoliciesRequest: organizations.OrganizationsListPoliciesRequest = { ... }
```

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesRequest.property.filter"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListPoliciesResponse <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListPoliciesResponse: organizations.OrganizationsListPoliciesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListPoliciesResponse.property.policies"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicySummary`](#aws-cdk-sdk.organizations.OrganizationsPolicySummary)[]

---

### OrganizationsListRootsRequest <a name="aws-cdk-sdk.organizations.OrganizationsListRootsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListRootsRequest: organizations.OrganizationsListRootsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListRootsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListRootsRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListRootsResponse <a name="aws-cdk-sdk.organizations.OrganizationsListRootsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListRootsResponse: organizations.OrganizationsListRootsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListRootsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `roots`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListRootsResponse.property.roots"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsRoot`](#aws-cdk-sdk.organizations.OrganizationsRoot)[]

---

### OrganizationsListTagsForResourceRequest <a name="aws-cdk-sdk.organizations.OrganizationsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListTagsForResourceRequest: organizations.OrganizationsListTagsForResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListTagsForResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListTagsForResourceResponse <a name="aws-cdk-sdk.organizations.OrganizationsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListTagsForResourceResponse: organizations.OrganizationsListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsTag`](#aws-cdk-sdk.organizations.OrganizationsTag)[]

---

### OrganizationsListTargetsForPolicyRequest <a name="aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListTargetsForPolicyRequest: organizations.OrganizationsListTargetsForPolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyRequest.property.policyId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyRequest.property.nextToken"></a>

- *Type:* `string`

---

### OrganizationsListTargetsForPolicyResponse <a name="aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsListTargetsForPolicyResponse: organizations.OrganizationsListTargetsForPolicyResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyResponse.property.targets"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicyTargetSummary`](#aws-cdk-sdk.organizations.OrganizationsPolicyTargetSummary)[]

---

### OrganizationsMoveAccountRequest <a name="aws-cdk-sdk.organizations.OrganizationsMoveAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsMoveAccountRequest: organizations.OrganizationsMoveAccountRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsMoveAccountRequest.property.accountId"></a>

- *Type:* `string`

---

##### `destinationParentId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsMoveAccountRequest.property.destinationParentId"></a>

- *Type:* `string`

---

##### `sourceParentId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsMoveAccountRequest.property.sourceParentId"></a>

- *Type:* `string`

---

### OrganizationsOrganization <a name="aws-cdk-sdk.organizations.OrganizationsOrganization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsOrganization: organizations.OrganizationsOrganization = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsOrganization.property.arn"></a>

- *Type:* `string`

---

##### `availablePolicyTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsOrganization.property.availablePolicyTypes"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary`](#aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary)[]

---

##### `featureSet`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsOrganization.property.featureSet"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsOrganization.property.id"></a>

- *Type:* `string`

---

##### `masterAccountArn`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsOrganization.property.masterAccountArn"></a>

- *Type:* `string`

---

##### `masterAccountEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsOrganization.property.masterAccountEmail"></a>

- *Type:* `string`

---

##### `masterAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsOrganization.property.masterAccountId"></a>

- *Type:* `string`

---

### OrganizationsOrganizationalUnit <a name="aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsOrganizationalUnit: organizations.OrganizationsOrganizationalUnit = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit.property.name"></a>

- *Type:* `string`

---

### OrganizationsParent <a name="aws-cdk-sdk.organizations.OrganizationsParent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsParent: organizations.OrganizationsParent = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsParent.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsParent.property.type"></a>

- *Type:* `string`

---

### OrganizationsPolicy <a name="aws-cdk-sdk.organizations.OrganizationsPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsPolicy: organizations.OrganizationsPolicy = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicy.property.content"></a>

- *Type:* `string`

---

##### `policySummary`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicy.property.policySummary"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicySummary`](#aws-cdk-sdk.organizations.OrganizationsPolicySummary)

---

### OrganizationsPolicySummary <a name="aws-cdk-sdk.organizations.OrganizationsPolicySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsPolicySummary: organizations.OrganizationsPolicySummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicySummary.property.arn"></a>

- *Type:* `string`

---

##### `awsManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicySummary.property.awsManaged"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicySummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicySummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicySummary.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicySummary.property.type"></a>

- *Type:* `string`

---

### OrganizationsPolicyTargetSummary <a name="aws-cdk-sdk.organizations.OrganizationsPolicyTargetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsPolicyTargetSummary: organizations.OrganizationsPolicyTargetSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicyTargetSummary.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicyTargetSummary.property.name"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicyTargetSummary.property.targetId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicyTargetSummary.property.type"></a>

- *Type:* `string`

---

### OrganizationsPolicyTypeSummary <a name="aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsPolicyTypeSummary: organizations.OrganizationsPolicyTypeSummary = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary.property.type"></a>

- *Type:* `string`

---

### OrganizationsRegisterDelegatedAdministratorRequest <a name="aws-cdk-sdk.organizations.OrganizationsRegisterDelegatedAdministratorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsRegisterDelegatedAdministratorRequest: organizations.OrganizationsRegisterDelegatedAdministratorRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsRegisterDelegatedAdministratorRequest.property.accountId"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsRegisterDelegatedAdministratorRequest.property.servicePrincipal"></a>

- *Type:* `string`

---

### OrganizationsRemoveAccountFromOrganizationRequest <a name="aws-cdk-sdk.organizations.OrganizationsRemoveAccountFromOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsRemoveAccountFromOrganizationRequest: organizations.OrganizationsRemoveAccountFromOrganizationRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsRemoveAccountFromOrganizationRequest.property.accountId"></a>

- *Type:* `string`

---

### OrganizationsRoot <a name="aws-cdk-sdk.organizations.OrganizationsRoot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsRoot: organizations.OrganizationsRoot = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsRoot.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsRoot.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsRoot.property.name"></a>

- *Type:* `string`

---

##### `policyTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsRoot.property.policyTypes"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary`](#aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary)[]

---

### OrganizationsTag <a name="aws-cdk-sdk.organizations.OrganizationsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsTag: organizations.OrganizationsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsTag.property.value"></a>

- *Type:* `string`

---

### OrganizationsTagResourceRequest <a name="aws-cdk-sdk.organizations.OrganizationsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsTagResourceRequest: organizations.OrganizationsTagResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsTagResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsTag`](#aws-cdk-sdk.organizations.OrganizationsTag)[]

---

### OrganizationsUntagResourceRequest <a name="aws-cdk-sdk.organizations.OrganizationsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsUntagResourceRequest: organizations.OrganizationsUntagResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsUntagResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### OrganizationsUpdateOrganizationalUnitRequest <a name="aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsUpdateOrganizationalUnitRequest: organizations.OrganizationsUpdateOrganizationalUnitRequest = { ... }
```

##### `organizationalUnitId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitRequest.property.organizationalUnitId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitRequest.property.name"></a>

- *Type:* `string`

---

### OrganizationsUpdateOrganizationalUnitResponse <a name="aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsUpdateOrganizationalUnitResponse: organizations.OrganizationsUpdateOrganizationalUnitResponse = { ... }
```

##### `organizationalUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitResponse.property.organizationalUnit"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit`](#aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit)

---

### OrganizationsUpdatePolicyRequest <a name="aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsUpdatePolicyRequest: organizations.OrganizationsUpdatePolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest.property.policyId"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest.property.content"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest.property.name"></a>

- *Type:* `string`

---

### OrganizationsUpdatePolicyResponse <a name="aws-cdk-sdk.organizations.OrganizationsUpdatePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

const organizationsUpdatePolicyResponse: organizations.OrganizationsUpdatePolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.organizations.OrganizationsUpdatePolicyResponse.property.policy"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicy`](#aws-cdk-sdk.organizations.OrganizationsPolicy)

---

## Classes <a name="Classes"></a>

### OrganizationsResponsesAcceptHandshake <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshake"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshake.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesAcceptHandshake(__scope: Construct, __resources: string[], __input: OrganizationsAcceptHandshakeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshake.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshake.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshake.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsAcceptHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsAcceptHandshakeRequest)

---



#### Properties <a name="Properties"></a>

##### `handshake`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshake.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake`](#aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake)

---


### OrganizationsResponsesAcceptHandshakeHandshake <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesAcceptHandshakeHandshake(__scope: Construct, __resources: string[], __input: OrganizationsAcceptHandshakeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsAcceptHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsAcceptHandshakeRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.property.arn"></a>

- *Type:* `string`

---

##### `expirationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.property.expirationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.property.id"></a>

- *Type:* `string`

---

##### `parties`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.property.parties"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeParty`](#aws-cdk-sdk.organizations.OrganizationsHandshakeParty)[]

---

##### `requestedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.property.resources"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeResource`](#aws-cdk-sdk.organizations.OrganizationsHandshakeResource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesAcceptHandshakeHandshake.property.state"></a>

- *Type:* `string`

---


### OrganizationsResponsesCancelHandshake <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshake"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshake.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCancelHandshake(__scope: Construct, __resources: string[], __input: OrganizationsCancelHandshakeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshake.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshake.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshake.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCancelHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsCancelHandshakeRequest)

---



#### Properties <a name="Properties"></a>

##### `handshake`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshake.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake`](#aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake)

---


### OrganizationsResponsesCancelHandshakeHandshake <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCancelHandshakeHandshake(__scope: Construct, __resources: string[], __input: OrganizationsCancelHandshakeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCancelHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsCancelHandshakeRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.property.arn"></a>

- *Type:* `string`

---

##### `expirationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.property.expirationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.property.id"></a>

- *Type:* `string`

---

##### `parties`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.property.parties"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeParty`](#aws-cdk-sdk.organizations.OrganizationsHandshakeParty)[]

---

##### `requestedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.property.resources"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeResource`](#aws-cdk-sdk.organizations.OrganizationsHandshakeResource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCancelHandshakeHandshake.property.state"></a>

- *Type:* `string`

---


### OrganizationsResponsesCreateAccount <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccount"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccount.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreateAccount(__scope: Construct, __resources: string[], __input: OrganizationsCreateAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `createAccountStatus`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccount.property.createAccountStatus"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus`](#aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus)

---


### OrganizationsResponsesCreateAccountCreateAccountStatus <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreateAccountCreateAccountStatus(__scope: Construct, __resources: string[], __input: OrganizationsCreateAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.property.accountId"></a>

- *Type:* `string`

---

##### `accountName`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.property.accountName"></a>

- *Type:* `string`

---

##### `completedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.property.completedTimestamp"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `govCloudAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.property.govCloudAccountId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.property.id"></a>

- *Type:* `string`

---

##### `requestedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateAccountCreateAccountStatus.property.state"></a>

- *Type:* `string`

---


### OrganizationsResponsesCreateGovCloudAccount <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccount"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccount.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreateGovCloudAccount(__scope: Construct, __resources: string[], __input: OrganizationsCreateGovCloudAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `createAccountStatus`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccount.property.createAccountStatus"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus`](#aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus)

---


### OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus(__scope: Construct, __resources: string[], __input: OrganizationsCreateGovCloudAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateGovCloudAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.property.accountId"></a>

- *Type:* `string`

---

##### `accountName`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.property.accountName"></a>

- *Type:* `string`

---

##### `completedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.property.completedTimestamp"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `govCloudAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.property.govCloudAccountId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.property.id"></a>

- *Type:* `string`

---

##### `requestedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus.property.state"></a>

- *Type:* `string`

---


### OrganizationsResponsesCreateOrganization <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganization.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreateOrganization(__scope: Construct, __resources: string[], __input: OrganizationsCreateOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `organization`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganization.property.organization"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization`](#aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization)

---


### OrganizationsResponsesCreateOrganizationalUnit <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnit"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnit.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreateOrganizationalUnit(__scope: Construct, __resources: string[], __input: OrganizationsCreateOrganizationalUnitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitRequest)

---



#### Properties <a name="Properties"></a>

##### `organizationalUnit`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnit.property.organizationalUnit"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit`](#aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit)

---


### OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit(__scope: Construct, __resources: string[], __input: OrganizationsCreateOrganizationalUnitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateOrganizationalUnitRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit.property.name"></a>

- *Type:* `string`

---


### OrganizationsResponsesCreateOrganizationOrganization <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreateOrganizationOrganization(__scope: Construct, __resources: string[], __input: OrganizationsCreateOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsCreateOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.property.arn"></a>

- *Type:* `string`

---

##### `availablePolicyTypes`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.property.availablePolicyTypes"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary`](#aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary)[]

---

##### `featureSet`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.property.featureSet"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.property.id"></a>

- *Type:* `string`

---

##### `masterAccountArn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.property.masterAccountArn"></a>

- *Type:* `string`

---

##### `masterAccountEmail`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.property.masterAccountEmail"></a>

- *Type:* `string`

---

##### `masterAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreateOrganizationOrganization.property.masterAccountId"></a>

- *Type:* `string`

---


### OrganizationsResponsesCreatePolicy <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicy.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreatePolicy(__scope: Construct, __resources: string[], __input: OrganizationsCreatePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicy`](#aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicy)

---


### OrganizationsResponsesCreatePolicyPolicy <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicy.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreatePolicyPolicy(__scope: Construct, __resources: string[], __input: OrganizationsCreatePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicy.property.content"></a>

- *Type:* `string`

---

##### `policySummary`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicy.property.policySummary"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary`](#aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary)

---


### OrganizationsResponsesCreatePolicyPolicyPolicySummary <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary(__scope: Construct, __resources: string[], __input: OrganizationsCreatePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsCreatePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary.property.arn"></a>

- *Type:* `string`

---

##### `awsManaged`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary.property.awsManaged"></a>

- *Type:* `boolean`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesCreatePolicyPolicyPolicySummary.property.type"></a>

- *Type:* `string`

---


### OrganizationsResponsesDeclineHandshake <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshake"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshake.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDeclineHandshake(__scope: Construct, __resources: string[], __input: OrganizationsDeclineHandshakeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshake.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshake.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshake.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDeclineHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsDeclineHandshakeRequest)

---



#### Properties <a name="Properties"></a>

##### `handshake`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshake.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake`](#aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake)

---


### OrganizationsResponsesDeclineHandshakeHandshake <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDeclineHandshakeHandshake(__scope: Construct, __resources: string[], __input: OrganizationsDeclineHandshakeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDeclineHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsDeclineHandshakeRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.property.arn"></a>

- *Type:* `string`

---

##### `expirationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.property.expirationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.property.id"></a>

- *Type:* `string`

---

##### `parties`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.property.parties"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeParty`](#aws-cdk-sdk.organizations.OrganizationsHandshakeParty)[]

---

##### `requestedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.property.resources"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeResource`](#aws-cdk-sdk.organizations.OrganizationsHandshakeResource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDeclineHandshakeHandshake.property.state"></a>

- *Type:* `string`

---


### OrganizationsResponsesDescribeAccount <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccount"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccount.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeAccount(__scope: Construct, __resources: string[], __input: OrganizationsDescribeAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccount.property.account"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount`](#aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount)

---


### OrganizationsResponsesDescribeAccountAccount <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeAccountAccount(__scope: Construct, __resources: string[], __input: OrganizationsDescribeAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.property.arn"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.property.email"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.property.id"></a>

- *Type:* `string`

---

##### `joinedMethod`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.property.joinedMethod"></a>

- *Type:* `string`

---

##### `joinedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.property.joinedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeAccountAccount.property.status"></a>

- *Type:* `string`

---


### OrganizationsResponsesDescribeCreateAccountStatus <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatus"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatus.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeCreateAccountStatus(__scope: Construct, __resources: string[], __input: OrganizationsDescribeCreateAccountStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeCreateAccountStatusRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeCreateAccountStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `createAccountStatus`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatus.property.createAccountStatus"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus`](#aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus)

---


### OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus(__scope: Construct, __resources: string[], __input: OrganizationsDescribeCreateAccountStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeCreateAccountStatusRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeCreateAccountStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.property.accountId"></a>

- *Type:* `string`

---

##### `accountName`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.property.accountName"></a>

- *Type:* `string`

---

##### `completedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.property.completedTimestamp"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.property.failureReason"></a>

- *Type:* `string`

---

##### `govCloudAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.property.govCloudAccountId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.property.id"></a>

- *Type:* `string`

---

##### `requestedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus.property.state"></a>

- *Type:* `string`

---


### OrganizationsResponsesDescribeEffectivePolicy <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicy.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeEffectivePolicy(__scope: Construct, __resources: string[], __input: OrganizationsDescribeEffectivePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `effectivePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicy.property.effectivePolicy"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy`](#aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy)

---


### OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy(__scope: Construct, __resources: string[], __input: OrganizationsDescribeEffectivePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeEffectivePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `policyContent`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy.property.policyContent"></a>

- *Type:* `string`

---

##### `policyType`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy.property.policyType"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy.property.targetId"></a>

- *Type:* `string`

---


### OrganizationsResponsesDescribeHandshake <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshake"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshake.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeHandshake(__scope: Construct, __resources: string[], __input: OrganizationsDescribeHandshakeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshake.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshake.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshake.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeHandshakeRequest)

---



#### Properties <a name="Properties"></a>

##### `handshake`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshake.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake`](#aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake)

---


### OrganizationsResponsesDescribeHandshakeHandshake <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeHandshakeHandshake(__scope: Construct, __resources: string[], __input: OrganizationsDescribeHandshakeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeHandshakeRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeHandshakeRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.property.arn"></a>

- *Type:* `string`

---

##### `expirationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.property.expirationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.property.id"></a>

- *Type:* `string`

---

##### `parties`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.property.parties"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeParty`](#aws-cdk-sdk.organizations.OrganizationsHandshakeParty)[]

---

##### `requestedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.property.resources"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeResource`](#aws-cdk-sdk.organizations.OrganizationsHandshakeResource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeHandshakeHandshake.property.state"></a>

- *Type:* `string`

---


### OrganizationsResponsesDescribeOrganization <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganization.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeOrganization(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `organization`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganization.property.organization"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization`](#aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization)

---


### OrganizationsResponsesDescribeOrganizationalUnit <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnit"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnit.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeOrganizationalUnit(__scope: Construct, __resources: string[], __input: OrganizationsDescribeOrganizationalUnitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationalUnitRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationalUnitRequest)

---



#### Properties <a name="Properties"></a>

##### `organizationalUnit`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnit.property.organizationalUnit"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit`](#aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit)

---


### OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit(__scope: Construct, __resources: string[], __input: OrganizationsDescribeOrganizationalUnitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationalUnitRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribeOrganizationalUnitRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit.property.name"></a>

- *Type:* `string`

---


### OrganizationsResponsesDescribeOrganizationOrganization <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribeOrganizationOrganization(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization.property.arn"></a>

- *Type:* `string`

---

##### `availablePolicyTypes`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization.property.availablePolicyTypes"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary`](#aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary)[]

---

##### `featureSet`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization.property.featureSet"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization.property.id"></a>

- *Type:* `string`

---

##### `masterAccountArn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization.property.masterAccountArn"></a>

- *Type:* `string`

---

##### `masterAccountEmail`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization.property.masterAccountEmail"></a>

- *Type:* `string`

---

##### `masterAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribeOrganizationOrganization.property.masterAccountId"></a>

- *Type:* `string`

---


### OrganizationsResponsesDescribePolicy <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicy.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribePolicy(__scope: Construct, __resources: string[], __input: OrganizationsDescribePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicy`](#aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicy)

---


### OrganizationsResponsesDescribePolicyPolicy <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicy.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribePolicyPolicy(__scope: Construct, __resources: string[], __input: OrganizationsDescribePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicy.property.content"></a>

- *Type:* `string`

---

##### `policySummary`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicy.property.policySummary"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary`](#aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary)

---


### OrganizationsResponsesDescribePolicyPolicyPolicySummary <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary(__scope: Construct, __resources: string[], __input: OrganizationsDescribePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDescribePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsDescribePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary.property.arn"></a>

- *Type:* `string`

---

##### `awsManaged`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary.property.awsManaged"></a>

- *Type:* `boolean`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDescribePolicyPolicyPolicySummary.property.type"></a>

- *Type:* `string`

---


### OrganizationsResponsesDisablePolicyType <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyType"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyType.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDisablePolicyType(__scope: Construct, __resources: string[], __input: OrganizationsDisablePolicyTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeRequest`](#aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `root`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyType.property.root"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot`](#aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot)

---


### OrganizationsResponsesDisablePolicyTypeRoot <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesDisablePolicyTypeRoot(__scope: Construct, __resources: string[], __input: OrganizationsDisablePolicyTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeRequest`](#aws-cdk-sdk.organizations.OrganizationsDisablePolicyTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot.property.name"></a>

- *Type:* `string`

---

##### `policyTypes`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesDisablePolicyTypeRoot.property.policyTypes"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary`](#aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary)[]

---


### OrganizationsResponsesEnableAllFeatures <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeatures"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeatures.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesEnableAllFeatures(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeatures.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeatures.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `handshake`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeatures.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake`](#aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake)

---


### OrganizationsResponsesEnableAllFeaturesHandshake <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesEnableAllFeaturesHandshake(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.property.arn"></a>

- *Type:* `string`

---

##### `expirationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.property.expirationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.property.id"></a>

- *Type:* `string`

---

##### `parties`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.property.parties"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeParty`](#aws-cdk-sdk.organizations.OrganizationsHandshakeParty)[]

---

##### `requestedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.property.resources"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeResource`](#aws-cdk-sdk.organizations.OrganizationsHandshakeResource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnableAllFeaturesHandshake.property.state"></a>

- *Type:* `string`

---


### OrganizationsResponsesEnablePolicyType <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyType"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyType.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesEnablePolicyType(__scope: Construct, __resources: string[], __input: OrganizationsEnablePolicyTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeRequest`](#aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `root`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyType.property.root"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot`](#aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot)

---


### OrganizationsResponsesEnablePolicyTypeRoot <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesEnablePolicyTypeRoot(__scope: Construct, __resources: string[], __input: OrganizationsEnablePolicyTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeRequest`](#aws-cdk-sdk.organizations.OrganizationsEnablePolicyTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot.property.name"></a>

- *Type:* `string`

---

##### `policyTypes`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesEnablePolicyTypeRoot.property.policyTypes"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary`](#aws-cdk-sdk.organizations.OrganizationsPolicyTypeSummary)[]

---


### OrganizationsResponsesInviteAccountToOrganization <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganization.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesInviteAccountToOrganization(__scope: Construct, __resources: string[], __input: OrganizationsInviteAccountToOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `handshake`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganization.property.handshake"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake`](#aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake)

---


### OrganizationsResponsesInviteAccountToOrganizationHandshake <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake(__scope: Construct, __resources: string[], __input: OrganizationsInviteAccountToOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsInviteAccountToOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.property.arn"></a>

- *Type:* `string`

---

##### `expirationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.property.expirationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.property.id"></a>

- *Type:* `string`

---

##### `parties`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.property.parties"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeParty`](#aws-cdk-sdk.organizations.OrganizationsHandshakeParty)[]

---

##### `requestedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.property.requestedTimestamp"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.property.resources"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshakeResource`](#aws-cdk-sdk.organizations.OrganizationsHandshakeResource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesInviteAccountToOrganizationHandshake.property.state"></a>

- *Type:* `string`

---


### OrganizationsResponsesListAccounts <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccounts"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccounts.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListAccounts(__scope: Construct, __resources: string[], __input: OrganizationsListAccountsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccounts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccounts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccounts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListAccountsRequest`](#aws-cdk-sdk.organizations.OrganizationsListAccountsRequest)

---



#### Properties <a name="Properties"></a>

##### `accounts`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccounts.property.accounts"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsAccount`](#aws-cdk-sdk.organizations.OrganizationsAccount)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccounts.property.nextToken"></a>

- *Type:* `string`

---


### OrganizationsResponsesListAccountsForParent <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccountsForParent"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccountsForParent.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListAccountsForParent(__scope: Construct, __resources: string[], __input: OrganizationsListAccountsForParentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccountsForParent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccountsForParent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccountsForParent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListAccountsForParentRequest`](#aws-cdk-sdk.organizations.OrganizationsListAccountsForParentRequest)

---



#### Properties <a name="Properties"></a>

##### `accounts`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccountsForParent.property.accounts"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsAccount`](#aws-cdk-sdk.organizations.OrganizationsAccount)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAccountsForParent.property.nextToken"></a>

- *Type:* `string`

---


### OrganizationsResponsesListAwsServiceAccessForOrganization <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAwsServiceAccessForOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAwsServiceAccessForOrganization.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListAwsServiceAccessForOrganization(__scope: Construct, __resources: string[], __input: OrganizationsListAwsServiceAccessForOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAwsServiceAccessForOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAwsServiceAccessForOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAwsServiceAccessForOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListAwsServiceAccessForOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsListAwsServiceAccessForOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `enabledServicePrincipals`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAwsServiceAccessForOrganization.property.enabledServicePrincipals"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsEnabledServicePrincipal`](#aws-cdk-sdk.organizations.OrganizationsEnabledServicePrincipal)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListAwsServiceAccessForOrganization.property.nextToken"></a>

- *Type:* `string`

---


### OrganizationsResponsesListChildren <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListChildren"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListChildren.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListChildren(__scope: Construct, __resources: string[], __input: OrganizationsListChildrenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListChildren.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListChildren.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListChildren.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListChildrenRequest`](#aws-cdk-sdk.organizations.OrganizationsListChildrenRequest)

---



#### Properties <a name="Properties"></a>

##### `children`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListChildren.property.children"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsChild`](#aws-cdk-sdk.organizations.OrganizationsChild)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListChildren.property.nextToken"></a>

- *Type:* `string`

---


### OrganizationsResponsesListCreateAccountStatus <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListCreateAccountStatus"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListCreateAccountStatus.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListCreateAccountStatus(__scope: Construct, __resources: string[], __input: OrganizationsListCreateAccountStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListCreateAccountStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListCreateAccountStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListCreateAccountStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusRequest`](#aws-cdk-sdk.organizations.OrganizationsListCreateAccountStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `createAccountStatuses`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListCreateAccountStatus.property.createAccountStatuses"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus`](#aws-cdk-sdk.organizations.OrganizationsCreateAccountStatus)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListCreateAccountStatus.property.nextToken"></a>

- *Type:* `string`

---


### OrganizationsResponsesListDelegatedAdministrators <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedAdministrators"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedAdministrators.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListDelegatedAdministrators(__scope: Construct, __resources: string[], __input: OrganizationsListDelegatedAdministratorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedAdministrators.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedAdministrators.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedAdministrators.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsRequest`](#aws-cdk-sdk.organizations.OrganizationsListDelegatedAdministratorsRequest)

---



#### Properties <a name="Properties"></a>

##### `delegatedAdministrators`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedAdministrators.property.delegatedAdministrators"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator`](#aws-cdk-sdk.organizations.OrganizationsDelegatedAdministrator)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedAdministrators.property.nextToken"></a>

- *Type:* `string`

---


### OrganizationsResponsesListDelegatedServicesForAccount <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedServicesForAccount"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedServicesForAccount.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListDelegatedServicesForAccount(__scope: Construct, __resources: string[], __input: OrganizationsListDelegatedServicesForAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedServicesForAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedServicesForAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedServicesForAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsListDelegatedServicesForAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `delegatedServices`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedServicesForAccount.property.delegatedServices"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsDelegatedService`](#aws-cdk-sdk.organizations.OrganizationsDelegatedService)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListDelegatedServicesForAccount.property.nextToken"></a>

- *Type:* `string`

---


### OrganizationsResponsesListHandshakesForAccount <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForAccount"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForAccount.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListHandshakesForAccount(__scope: Construct, __resources: string[], __input: OrganizationsListHandshakesForAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountRequest`](#aws-cdk-sdk.organizations.OrganizationsListHandshakesForAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `handshakes`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForAccount.property.handshakes"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshake`](#aws-cdk-sdk.organizations.OrganizationsHandshake)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForAccount.property.nextToken"></a>

- *Type:* `string`

---


### OrganizationsResponsesListHandshakesForOrganization <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForOrganization.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListHandshakesForOrganization(__scope: Construct, __resources: string[], __input: OrganizationsListHandshakesForOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationRequest`](#aws-cdk-sdk.organizations.OrganizationsListHandshakesForOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `handshakes`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForOrganization.property.handshakes"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsHandshake`](#aws-cdk-sdk.organizations.OrganizationsHandshake)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListHandshakesForOrganization.property.nextToken"></a>

- *Type:* `string`

---


### OrganizationsResponsesListOrganizationalUnitsForParent <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListOrganizationalUnitsForParent"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListOrganizationalUnitsForParent.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListOrganizationalUnitsForParent(__scope: Construct, __resources: string[], __input: OrganizationsListOrganizationalUnitsForParentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListOrganizationalUnitsForParent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListOrganizationalUnitsForParent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListOrganizationalUnitsForParent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentRequest`](#aws-cdk-sdk.organizations.OrganizationsListOrganizationalUnitsForParentRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListOrganizationalUnitsForParent.property.nextToken"></a>

- *Type:* `string`

---

##### `organizationalUnits`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListOrganizationalUnitsForParent.property.organizationalUnits"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit`](#aws-cdk-sdk.organizations.OrganizationsOrganizationalUnit)[]

---


### OrganizationsResponsesListParents <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListParents"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListParents.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListParents(__scope: Construct, __resources: string[], __input: OrganizationsListParentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListParents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListParents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListParents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListParentsRequest`](#aws-cdk-sdk.organizations.OrganizationsListParentsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListParents.property.nextToken"></a>

- *Type:* `string`

---

##### `parents`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListParents.property.parents"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsParent`](#aws-cdk-sdk.organizations.OrganizationsParent)[]

---


### OrganizationsResponsesListPolicies <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPolicies.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListPolicies(__scope: Construct, __resources: string[], __input: OrganizationsListPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListPoliciesRequest`](#aws-cdk-sdk.organizations.OrganizationsListPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPolicies.property.nextToken"></a>

- *Type:* `string`

---

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPolicies.property.policies"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicySummary`](#aws-cdk-sdk.organizations.OrganizationsPolicySummary)[]

---


### OrganizationsResponsesListPoliciesForTarget <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPoliciesForTarget"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPoliciesForTarget.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListPoliciesForTarget(__scope: Construct, __resources: string[], __input: OrganizationsListPoliciesForTargetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPoliciesForTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPoliciesForTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPoliciesForTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetRequest`](#aws-cdk-sdk.organizations.OrganizationsListPoliciesForTargetRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPoliciesForTarget.property.nextToken"></a>

- *Type:* `string`

---

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListPoliciesForTarget.property.policies"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicySummary`](#aws-cdk-sdk.organizations.OrganizationsPolicySummary)[]

---


### OrganizationsResponsesListRoots <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListRoots"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListRoots.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListRoots(__scope: Construct, __resources: string[], __input: OrganizationsListRootsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListRoots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListRoots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListRoots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListRootsRequest`](#aws-cdk-sdk.organizations.OrganizationsListRootsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListRoots.property.nextToken"></a>

- *Type:* `string`

---

##### `roots`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListRoots.property.roots"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsRoot`](#aws-cdk-sdk.organizations.OrganizationsRoot)[]

---


### OrganizationsResponsesListTagsForResource <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTagsForResource.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: OrganizationsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListTagsForResourceRequest`](#aws-cdk-sdk.organizations.OrganizationsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsTag`](#aws-cdk-sdk.organizations.OrganizationsTag)[]

---


### OrganizationsResponsesListTargetsForPolicy <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTargetsForPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTargetsForPolicy.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesListTargetsForPolicy(__scope: Construct, __resources: string[], __input: OrganizationsListTargetsForPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTargetsForPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTargetsForPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTargetsForPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsListTargetsForPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTargetsForPolicy.property.nextToken"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesListTargetsForPolicy.property.targets"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsPolicyTargetSummary`](#aws-cdk-sdk.organizations.OrganizationsPolicyTargetSummary)[]

---


### OrganizationsResponsesUpdateOrganizationalUnit <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnit"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnit.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesUpdateOrganizationalUnit(__scope: Construct, __resources: string[], __input: OrganizationsUpdateOrganizationalUnitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitRequest`](#aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitRequest)

---



#### Properties <a name="Properties"></a>

##### `organizationalUnit`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnit.property.organizationalUnit"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit`](#aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit)

---


### OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit(__scope: Construct, __resources: string[], __input: OrganizationsUpdateOrganizationalUnitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitRequest`](#aws-cdk-sdk.organizations.OrganizationsUpdateOrganizationalUnitRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit.property.name"></a>

- *Type:* `string`

---


### OrganizationsResponsesUpdatePolicy <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicy.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesUpdatePolicy(__scope: Construct, __resources: string[], __input: OrganizationsUpdatePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicy`](#aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicy)

---


### OrganizationsResponsesUpdatePolicyPolicy <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicy.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesUpdatePolicyPolicy(__scope: Construct, __resources: string[], __input: OrganizationsUpdatePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicy.property.content"></a>

- *Type:* `string`

---

##### `policySummary`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicy.property.policySummary"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary`](#aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary)

---


### OrganizationsResponsesUpdatePolicyPolicyPolicySummary <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary"></a>

#### Initializer <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary.Initializer"></a>

```typescript
import { organizations } from 'aws-cdk-sdk'

new organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary(__scope: Construct, __resources: string[], __input: OrganizationsUpdatePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest`](#aws-cdk-sdk.organizations.OrganizationsUpdatePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary.property.arn"></a>

- *Type:* `string`

---

##### `awsManaged`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary.property.awsManaged"></a>

- *Type:* `boolean`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.organizations.OrganizationsResponsesUpdatePolicyPolicyPolicySummary.property.type"></a>

- *Type:* `string`

---



