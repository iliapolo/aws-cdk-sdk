# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### WorkMailClient <a name="aws-cdk-sdk.workmail.WorkMailClient"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailClient.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateDelegateToResource` <a name="aws-cdk-sdk.workmail.WorkMailClient.associateDelegateToResource"></a>

```typescript
public associateDelegateToResource(input: WorkMailAssociateDelegateToResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailAssociateDelegateToResourceRequest`](#aws-cdk-sdk.workmail.WorkMailAssociateDelegateToResourceRequest)

---

##### `associateMemberToGroup` <a name="aws-cdk-sdk.workmail.WorkMailClient.associateMemberToGroup"></a>

```typescript
public associateMemberToGroup(input: WorkMailAssociateMemberToGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailAssociateMemberToGroupRequest`](#aws-cdk-sdk.workmail.WorkMailAssociateMemberToGroupRequest)

---

##### `cancelMailboxExportJob` <a name="aws-cdk-sdk.workmail.WorkMailClient.cancelMailboxExportJob"></a>

```typescript
public cancelMailboxExportJob(input: WorkMailCancelMailboxExportJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailCancelMailboxExportJobRequest`](#aws-cdk-sdk.workmail.WorkMailCancelMailboxExportJobRequest)

---

##### `createAlias` <a name="aws-cdk-sdk.workmail.WorkMailClient.createAlias"></a>

```typescript
public createAlias(input: WorkMailCreateAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailCreateAliasRequest`](#aws-cdk-sdk.workmail.WorkMailCreateAliasRequest)

---

##### `createGroup` <a name="aws-cdk-sdk.workmail.WorkMailClient.createGroup"></a>

```typescript
public createGroup(input: WorkMailCreateGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailCreateGroupRequest`](#aws-cdk-sdk.workmail.WorkMailCreateGroupRequest)

---

##### `createOrganization` <a name="aws-cdk-sdk.workmail.WorkMailClient.createOrganization"></a>

```typescript
public createOrganization(input: WorkMailCreateOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest`](#aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest)

---

##### `createResource` <a name="aws-cdk-sdk.workmail.WorkMailClient.createResource"></a>

```typescript
public createResource(input: WorkMailCreateResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailCreateResourceRequest`](#aws-cdk-sdk.workmail.WorkMailCreateResourceRequest)

---

##### `createUser` <a name="aws-cdk-sdk.workmail.WorkMailClient.createUser"></a>

```typescript
public createUser(input: WorkMailCreateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailCreateUserRequest`](#aws-cdk-sdk.workmail.WorkMailCreateUserRequest)

---

##### `deleteAccessControlRule` <a name="aws-cdk-sdk.workmail.WorkMailClient.deleteAccessControlRule"></a>

```typescript
public deleteAccessControlRule(input: WorkMailDeleteAccessControlRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDeleteAccessControlRuleRequest`](#aws-cdk-sdk.workmail.WorkMailDeleteAccessControlRuleRequest)

---

##### `deleteAlias` <a name="aws-cdk-sdk.workmail.WorkMailClient.deleteAlias"></a>

```typescript
public deleteAlias(input: WorkMailDeleteAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDeleteAliasRequest`](#aws-cdk-sdk.workmail.WorkMailDeleteAliasRequest)

---

##### `deleteGroup` <a name="aws-cdk-sdk.workmail.WorkMailClient.deleteGroup"></a>

```typescript
public deleteGroup(input: WorkMailDeleteGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDeleteGroupRequest`](#aws-cdk-sdk.workmail.WorkMailDeleteGroupRequest)

---

##### `deleteMailboxPermissions` <a name="aws-cdk-sdk.workmail.WorkMailClient.deleteMailboxPermissions"></a>

```typescript
public deleteMailboxPermissions(input: WorkMailDeleteMailboxPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDeleteMailboxPermissionsRequest`](#aws-cdk-sdk.workmail.WorkMailDeleteMailboxPermissionsRequest)

---

##### `deleteOrganization` <a name="aws-cdk-sdk.workmail.WorkMailClient.deleteOrganization"></a>

```typescript
public deleteOrganization(input: WorkMailDeleteOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDeleteOrganizationRequest`](#aws-cdk-sdk.workmail.WorkMailDeleteOrganizationRequest)

---

##### `deleteResource` <a name="aws-cdk-sdk.workmail.WorkMailClient.deleteResource"></a>

```typescript
public deleteResource(input: WorkMailDeleteResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDeleteResourceRequest`](#aws-cdk-sdk.workmail.WorkMailDeleteResourceRequest)

---

##### `deleteRetentionPolicy` <a name="aws-cdk-sdk.workmail.WorkMailClient.deleteRetentionPolicy"></a>

```typescript
public deleteRetentionPolicy(input: WorkMailDeleteRetentionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDeleteRetentionPolicyRequest`](#aws-cdk-sdk.workmail.WorkMailDeleteRetentionPolicyRequest)

---

##### `deleteUser` <a name="aws-cdk-sdk.workmail.WorkMailClient.deleteUser"></a>

```typescript
public deleteUser(input: WorkMailDeleteUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDeleteUserRequest`](#aws-cdk-sdk.workmail.WorkMailDeleteUserRequest)

---

##### `deregisterFromWorkMail` <a name="aws-cdk-sdk.workmail.WorkMailClient.deregisterFromWorkMail"></a>

```typescript
public deregisterFromWorkMail(input: WorkMailDeregisterFromWorkMailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDeregisterFromWorkMailRequest`](#aws-cdk-sdk.workmail.WorkMailDeregisterFromWorkMailRequest)

---

##### `describeGroup` <a name="aws-cdk-sdk.workmail.WorkMailClient.describeGroup"></a>

```typescript
public describeGroup(input: WorkMailDescribeGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeGroupRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeGroupRequest)

---

##### `describeMailboxExportJob` <a name="aws-cdk-sdk.workmail.WorkMailClient.describeMailboxExportJob"></a>

```typescript
public describeMailboxExportJob(input: WorkMailDescribeMailboxExportJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobRequest)

---

##### `describeOrganization` <a name="aws-cdk-sdk.workmail.WorkMailClient.describeOrganization"></a>

```typescript
public describeOrganization(input: WorkMailDescribeOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeOrganizationRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeOrganizationRequest)

---

##### `describeResource` <a name="aws-cdk-sdk.workmail.WorkMailClient.describeResource"></a>

```typescript
public describeResource(input: WorkMailDescribeResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeResourceRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeResourceRequest)

---

##### `describeUser` <a name="aws-cdk-sdk.workmail.WorkMailClient.describeUser"></a>

```typescript
public describeUser(input: WorkMailDescribeUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeUserRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeUserRequest)

---

##### `disassociateDelegateFromResource` <a name="aws-cdk-sdk.workmail.WorkMailClient.disassociateDelegateFromResource"></a>

```typescript
public disassociateDelegateFromResource(input: WorkMailDisassociateDelegateFromResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDisassociateDelegateFromResourceRequest`](#aws-cdk-sdk.workmail.WorkMailDisassociateDelegateFromResourceRequest)

---

##### `disassociateMemberFromGroup` <a name="aws-cdk-sdk.workmail.WorkMailClient.disassociateMemberFromGroup"></a>

```typescript
public disassociateMemberFromGroup(input: WorkMailDisassociateMemberFromGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDisassociateMemberFromGroupRequest`](#aws-cdk-sdk.workmail.WorkMailDisassociateMemberFromGroupRequest)

---

##### `fetchAccessControlEffect` <a name="aws-cdk-sdk.workmail.WorkMailClient.fetchAccessControlEffect"></a>

```typescript
public fetchAccessControlEffect(input: WorkMailGetAccessControlEffectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectRequest`](#aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectRequest)

---

##### `fetchDefaultRetentionPolicy` <a name="aws-cdk-sdk.workmail.WorkMailClient.fetchDefaultRetentionPolicy"></a>

```typescript
public fetchDefaultRetentionPolicy(input: WorkMailGetDefaultRetentionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyRequest`](#aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyRequest)

---

##### `fetchMailboxDetails` <a name="aws-cdk-sdk.workmail.WorkMailClient.fetchMailboxDetails"></a>

```typescript
public fetchMailboxDetails(input: WorkMailGetMailboxDetailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailGetMailboxDetailsRequest`](#aws-cdk-sdk.workmail.WorkMailGetMailboxDetailsRequest)

---

##### `listAccessControlRules` <a name="aws-cdk-sdk.workmail.WorkMailClient.listAccessControlRules"></a>

```typescript
public listAccessControlRules(input: WorkMailListAccessControlRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListAccessControlRulesRequest`](#aws-cdk-sdk.workmail.WorkMailListAccessControlRulesRequest)

---

##### `listAliases` <a name="aws-cdk-sdk.workmail.WorkMailClient.listAliases"></a>

```typescript
public listAliases(input: WorkMailListAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListAliasesRequest`](#aws-cdk-sdk.workmail.WorkMailListAliasesRequest)

---

##### `listGroupMembers` <a name="aws-cdk-sdk.workmail.WorkMailClient.listGroupMembers"></a>

```typescript
public listGroupMembers(input: WorkMailListGroupMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListGroupMembersRequest`](#aws-cdk-sdk.workmail.WorkMailListGroupMembersRequest)

---

##### `listGroups` <a name="aws-cdk-sdk.workmail.WorkMailClient.listGroups"></a>

```typescript
public listGroups(input: WorkMailListGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListGroupsRequest`](#aws-cdk-sdk.workmail.WorkMailListGroupsRequest)

---

##### `listMailboxExportJobs` <a name="aws-cdk-sdk.workmail.WorkMailClient.listMailboxExportJobs"></a>

```typescript
public listMailboxExportJobs(input: WorkMailListMailboxExportJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsRequest`](#aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsRequest)

---

##### `listMailboxPermissions` <a name="aws-cdk-sdk.workmail.WorkMailClient.listMailboxPermissions"></a>

```typescript
public listMailboxPermissions(input: WorkMailListMailboxPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsRequest`](#aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsRequest)

---

##### `listOrganizations` <a name="aws-cdk-sdk.workmail.WorkMailClient.listOrganizations"></a>

```typescript
public listOrganizations(input: WorkMailListOrganizationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListOrganizationsRequest`](#aws-cdk-sdk.workmail.WorkMailListOrganizationsRequest)

---

##### `listResourceDelegates` <a name="aws-cdk-sdk.workmail.WorkMailClient.listResourceDelegates"></a>

```typescript
public listResourceDelegates(input: WorkMailListResourceDelegatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListResourceDelegatesRequest`](#aws-cdk-sdk.workmail.WorkMailListResourceDelegatesRequest)

---

##### `listResources` <a name="aws-cdk-sdk.workmail.WorkMailClient.listResources"></a>

```typescript
public listResources(input: WorkMailListResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListResourcesRequest`](#aws-cdk-sdk.workmail.WorkMailListResourcesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.workmail.WorkMailClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: WorkMailListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListTagsForResourceRequest`](#aws-cdk-sdk.workmail.WorkMailListTagsForResourceRequest)

---

##### `listUsers` <a name="aws-cdk-sdk.workmail.WorkMailClient.listUsers"></a>

```typescript
public listUsers(input: WorkMailListUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListUsersRequest`](#aws-cdk-sdk.workmail.WorkMailListUsersRequest)

---

##### `putAccessControlRule` <a name="aws-cdk-sdk.workmail.WorkMailClient.putAccessControlRule"></a>

```typescript
public putAccessControlRule(input: WorkMailPutAccessControlRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest`](#aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest)

---

##### `putMailboxPermissions` <a name="aws-cdk-sdk.workmail.WorkMailClient.putMailboxPermissions"></a>

```typescript
public putMailboxPermissions(input: WorkMailPutMailboxPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailPutMailboxPermissionsRequest`](#aws-cdk-sdk.workmail.WorkMailPutMailboxPermissionsRequest)

---

##### `putRetentionPolicy` <a name="aws-cdk-sdk.workmail.WorkMailClient.putRetentionPolicy"></a>

```typescript
public putRetentionPolicy(input: WorkMailPutRetentionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailPutRetentionPolicyRequest`](#aws-cdk-sdk.workmail.WorkMailPutRetentionPolicyRequest)

---

##### `registerToWorkMail` <a name="aws-cdk-sdk.workmail.WorkMailClient.registerToWorkMail"></a>

```typescript
public registerToWorkMail(input: WorkMailRegisterToWorkMailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailRegisterToWorkMailRequest`](#aws-cdk-sdk.workmail.WorkMailRegisterToWorkMailRequest)

---

##### `resetPassword` <a name="aws-cdk-sdk.workmail.WorkMailClient.resetPassword"></a>

```typescript
public resetPassword(input: WorkMailResetPasswordRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailResetPasswordRequest`](#aws-cdk-sdk.workmail.WorkMailResetPasswordRequest)

---

##### `startMailboxExportJob` <a name="aws-cdk-sdk.workmail.WorkMailClient.startMailboxExportJob"></a>

```typescript
public startMailboxExportJob(input: WorkMailStartMailboxExportJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest`](#aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.workmail.WorkMailClient.tagResource"></a>

```typescript
public tagResource(input: WorkMailTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailTagResourceRequest`](#aws-cdk-sdk.workmail.WorkMailTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.workmail.WorkMailClient.untagResource"></a>

```typescript
public untagResource(input: WorkMailUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailUntagResourceRequest`](#aws-cdk-sdk.workmail.WorkMailUntagResourceRequest)

---

##### `updateMailboxQuota` <a name="aws-cdk-sdk.workmail.WorkMailClient.updateMailboxQuota"></a>

```typescript
public updateMailboxQuota(input: WorkMailUpdateMailboxQuotaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailUpdateMailboxQuotaRequest`](#aws-cdk-sdk.workmail.WorkMailUpdateMailboxQuotaRequest)

---

##### `updatePrimaryEmailAddress` <a name="aws-cdk-sdk.workmail.WorkMailClient.updatePrimaryEmailAddress"></a>

```typescript
public updatePrimaryEmailAddress(input: WorkMailUpdatePrimaryEmailAddressRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailUpdatePrimaryEmailAddressRequest`](#aws-cdk-sdk.workmail.WorkMailUpdatePrimaryEmailAddressRequest)

---

##### `updateResource` <a name="aws-cdk-sdk.workmail.WorkMailClient.updateResource"></a>

```typescript
public updateResource(input: WorkMailUpdateResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailUpdateResourceRequest`](#aws-cdk-sdk.workmail.WorkMailUpdateResourceRequest)

---




## Structs <a name="Structs"></a>

### WorkMailAccessControlRule <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailAccessControlRule: workmail.WorkMailAccessControlRule = { ... }
```

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.actions"></a>

- *Type:* `string`[]

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateModified`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.dateModified"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.description"></a>

- *Type:* `string`

---

##### `effect`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.effect"></a>

- *Type:* `string`

---

##### `ipRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.ipRanges"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.name"></a>

- *Type:* `string`

---

##### `notActions`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.notActions"></a>

- *Type:* `string`[]

---

##### `notIpRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.notIpRanges"></a>

- *Type:* `string`[]

---

##### `notUserIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.notUserIds"></a>

- *Type:* `string`[]

---

##### `userIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailAccessControlRule.property.userIds"></a>

- *Type:* `string`[]

---

### WorkMailAssociateDelegateToResourceRequest <a name="aws-cdk-sdk.workmail.WorkMailAssociateDelegateToResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailAssociateDelegateToResourceRequest: workmail.WorkMailAssociateDelegateToResourceRequest = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailAssociateDelegateToResourceRequest.property.entityId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailAssociateDelegateToResourceRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailAssociateDelegateToResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

### WorkMailAssociateDelegateToResourceResponse <a name="aws-cdk-sdk.workmail.WorkMailAssociateDelegateToResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailAssociateDelegateToResourceResponse: workmail.WorkMailAssociateDelegateToResourceResponse = { ... }
```

### WorkMailAssociateMemberToGroupRequest <a name="aws-cdk-sdk.workmail.WorkMailAssociateMemberToGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailAssociateMemberToGroupRequest: workmail.WorkMailAssociateMemberToGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailAssociateMemberToGroupRequest.property.groupId"></a>

- *Type:* `string`

---

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailAssociateMemberToGroupRequest.property.memberId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailAssociateMemberToGroupRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailAssociateMemberToGroupResponse <a name="aws-cdk-sdk.workmail.WorkMailAssociateMemberToGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailAssociateMemberToGroupResponse: workmail.WorkMailAssociateMemberToGroupResponse = { ... }
```

### WorkMailBookingOptions <a name="aws-cdk-sdk.workmail.WorkMailBookingOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailBookingOptions: workmail.WorkMailBookingOptions = { ... }
```

##### `autoAcceptRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailBookingOptions.property.autoAcceptRequests"></a>

- *Type:* `boolean`

---

##### `autoDeclineConflictingRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailBookingOptions.property.autoDeclineConflictingRequests"></a>

- *Type:* `boolean`

---

##### `autoDeclineRecurringRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailBookingOptions.property.autoDeclineRecurringRequests"></a>

- *Type:* `boolean`

---

### WorkMailCancelMailboxExportJobRequest <a name="aws-cdk-sdk.workmail.WorkMailCancelMailboxExportJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCancelMailboxExportJobRequest: workmail.WorkMailCancelMailboxExportJobRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCancelMailboxExportJobRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCancelMailboxExportJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCancelMailboxExportJobRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailCancelMailboxExportJobResponse <a name="aws-cdk-sdk.workmail.WorkMailCancelMailboxExportJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCancelMailboxExportJobResponse: workmail.WorkMailCancelMailboxExportJobResponse = { ... }
```

### WorkMailCreateAliasRequest <a name="aws-cdk-sdk.workmail.WorkMailCreateAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCreateAliasRequest: workmail.WorkMailCreateAliasRequest = { ... }
```

##### `alias`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateAliasRequest.property.alias"></a>

- *Type:* `string`

---

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateAliasRequest.property.entityId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateAliasRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailCreateAliasResponse <a name="aws-cdk-sdk.workmail.WorkMailCreateAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCreateAliasResponse: workmail.WorkMailCreateAliasResponse = { ... }
```

### WorkMailCreateGroupRequest <a name="aws-cdk-sdk.workmail.WorkMailCreateGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCreateGroupRequest: workmail.WorkMailCreateGroupRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateGroupRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailCreateGroupResponse <a name="aws-cdk-sdk.workmail.WorkMailCreateGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCreateGroupResponse: workmail.WorkMailCreateGroupResponse = { ... }
```

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateGroupResponse.property.groupId"></a>

- *Type:* `string`

---

### WorkMailCreateOrganizationRequest <a name="aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCreateOrganizationRequest: workmail.WorkMailCreateOrganizationRequest = { ... }
```

##### `alias`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest.property.alias"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `directoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest.property.directoryId"></a>

- *Type:* `string`

---

##### `domains`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest.property.domains"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDomain`](#aws-cdk-sdk.workmail.WorkMailDomain)[]

---

##### `enableInteroperability`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest.property.enableInteroperability"></a>

- *Type:* `boolean`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest.property.kmsKeyArn"></a>

- *Type:* `string`

---

### WorkMailCreateOrganizationResponse <a name="aws-cdk-sdk.workmail.WorkMailCreateOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCreateOrganizationResponse: workmail.WorkMailCreateOrganizationResponse = { ... }
```

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateOrganizationResponse.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailCreateResourceRequest <a name="aws-cdk-sdk.workmail.WorkMailCreateResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCreateResourceRequest: workmail.WorkMailCreateResourceRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateResourceRequest.property.name"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateResourceRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateResourceRequest.property.type"></a>

- *Type:* `string`

---

### WorkMailCreateResourceResponse <a name="aws-cdk-sdk.workmail.WorkMailCreateResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCreateResourceResponse: workmail.WorkMailCreateResourceResponse = { ... }
```

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateResourceResponse.property.resourceId"></a>

- *Type:* `string`

---

### WorkMailCreateUserRequest <a name="aws-cdk-sdk.workmail.WorkMailCreateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCreateUserRequest: workmail.WorkMailCreateUserRequest = { ... }
```

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateUserRequest.property.displayName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateUserRequest.property.name"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateUserRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateUserRequest.property.password"></a>

- *Type:* `string`

---

### WorkMailCreateUserResponse <a name="aws-cdk-sdk.workmail.WorkMailCreateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailCreateUserResponse: workmail.WorkMailCreateUserResponse = { ... }
```

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailCreateUserResponse.property.userId"></a>

- *Type:* `string`

---

### WorkMailDelegate <a name="aws-cdk-sdk.workmail.WorkMailDelegate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDelegate: workmail.WorkMailDelegate = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDelegate.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDelegate.property.type"></a>

- *Type:* `string`

---

### WorkMailDeleteAccessControlRuleRequest <a name="aws-cdk-sdk.workmail.WorkMailDeleteAccessControlRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteAccessControlRuleRequest: workmail.WorkMailDeleteAccessControlRuleRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteAccessControlRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteAccessControlRuleRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailDeleteAccessControlRuleResponse <a name="aws-cdk-sdk.workmail.WorkMailDeleteAccessControlRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteAccessControlRuleResponse: workmail.WorkMailDeleteAccessControlRuleResponse = { ... }
```

### WorkMailDeleteAliasRequest <a name="aws-cdk-sdk.workmail.WorkMailDeleteAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteAliasRequest: workmail.WorkMailDeleteAliasRequest = { ... }
```

##### `alias`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteAliasRequest.property.alias"></a>

- *Type:* `string`

---

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteAliasRequest.property.entityId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteAliasRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailDeleteAliasResponse <a name="aws-cdk-sdk.workmail.WorkMailDeleteAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteAliasResponse: workmail.WorkMailDeleteAliasResponse = { ... }
```

### WorkMailDeleteGroupRequest <a name="aws-cdk-sdk.workmail.WorkMailDeleteGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteGroupRequest: workmail.WorkMailDeleteGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteGroupRequest.property.groupId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteGroupRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailDeleteGroupResponse <a name="aws-cdk-sdk.workmail.WorkMailDeleteGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteGroupResponse: workmail.WorkMailDeleteGroupResponse = { ... }
```

### WorkMailDeleteMailboxPermissionsRequest <a name="aws-cdk-sdk.workmail.WorkMailDeleteMailboxPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteMailboxPermissionsRequest: workmail.WorkMailDeleteMailboxPermissionsRequest = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteMailboxPermissionsRequest.property.entityId"></a>

- *Type:* `string`

---

##### `granteeId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteMailboxPermissionsRequest.property.granteeId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteMailboxPermissionsRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailDeleteMailboxPermissionsResponse <a name="aws-cdk-sdk.workmail.WorkMailDeleteMailboxPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteMailboxPermissionsResponse: workmail.WorkMailDeleteMailboxPermissionsResponse = { ... }
```

### WorkMailDeleteOrganizationRequest <a name="aws-cdk-sdk.workmail.WorkMailDeleteOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteOrganizationRequest: workmail.WorkMailDeleteOrganizationRequest = { ... }
```

##### `deleteDirectory`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteOrganizationRequest.property.deleteDirectory"></a>

- *Type:* `boolean`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteOrganizationRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteOrganizationRequest.property.clientToken"></a>

- *Type:* `string`

---

### WorkMailDeleteOrganizationResponse <a name="aws-cdk-sdk.workmail.WorkMailDeleteOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteOrganizationResponse: workmail.WorkMailDeleteOrganizationResponse = { ... }
```

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteOrganizationResponse.property.organizationId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteOrganizationResponse.property.state"></a>

- *Type:* `string`

---

### WorkMailDeleteResourceRequest <a name="aws-cdk-sdk.workmail.WorkMailDeleteResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteResourceRequest: workmail.WorkMailDeleteResourceRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteResourceRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

### WorkMailDeleteResourceResponse <a name="aws-cdk-sdk.workmail.WorkMailDeleteResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteResourceResponse: workmail.WorkMailDeleteResourceResponse = { ... }
```

### WorkMailDeleteRetentionPolicyRequest <a name="aws-cdk-sdk.workmail.WorkMailDeleteRetentionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteRetentionPolicyRequest: workmail.WorkMailDeleteRetentionPolicyRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteRetentionPolicyRequest.property.id"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteRetentionPolicyRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailDeleteRetentionPolicyResponse <a name="aws-cdk-sdk.workmail.WorkMailDeleteRetentionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteRetentionPolicyResponse: workmail.WorkMailDeleteRetentionPolicyResponse = { ... }
```

### WorkMailDeleteUserRequest <a name="aws-cdk-sdk.workmail.WorkMailDeleteUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteUserRequest: workmail.WorkMailDeleteUserRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteUserRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeleteUserRequest.property.userId"></a>

- *Type:* `string`

---

### WorkMailDeleteUserResponse <a name="aws-cdk-sdk.workmail.WorkMailDeleteUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeleteUserResponse: workmail.WorkMailDeleteUserResponse = { ... }
```

### WorkMailDeregisterFromWorkMailRequest <a name="aws-cdk-sdk.workmail.WorkMailDeregisterFromWorkMailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeregisterFromWorkMailRequest: workmail.WorkMailDeregisterFromWorkMailRequest = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeregisterFromWorkMailRequest.property.entityId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDeregisterFromWorkMailRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailDeregisterFromWorkMailResponse <a name="aws-cdk-sdk.workmail.WorkMailDeregisterFromWorkMailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDeregisterFromWorkMailResponse: workmail.WorkMailDeregisterFromWorkMailResponse = { ... }
```

### WorkMailDescribeGroupRequest <a name="aws-cdk-sdk.workmail.WorkMailDescribeGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDescribeGroupRequest: workmail.WorkMailDescribeGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeGroupRequest.property.groupId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeGroupRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailDescribeGroupResponse <a name="aws-cdk-sdk.workmail.WorkMailDescribeGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDescribeGroupResponse: workmail.WorkMailDescribeGroupResponse = { ... }
```

##### `disabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeGroupResponse.property.disabledDate"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeGroupResponse.property.email"></a>

- *Type:* `string`

---

##### `enabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeGroupResponse.property.enabledDate"></a>

- *Type:* `string`

---

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeGroupResponse.property.groupId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeGroupResponse.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeGroupResponse.property.state"></a>

- *Type:* `string`

---

### WorkMailDescribeMailboxExportJobRequest <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDescribeMailboxExportJobRequest: workmail.WorkMailDescribeMailboxExportJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailDescribeMailboxExportJobResponse <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDescribeMailboxExportJobResponse: workmail.WorkMailDescribeMailboxExportJobResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.description"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.endTime"></a>

- *Type:* `string`

---

##### `entityId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.entityId"></a>

- *Type:* `string`

---

##### `errorInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.errorInfo"></a>

- *Type:* `string`

---

##### `estimatedProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.estimatedProgress"></a>

- *Type:* `number`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.s3Path"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.s3Prefix"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobResponse.property.state"></a>

- *Type:* `string`

---

### WorkMailDescribeOrganizationRequest <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDescribeOrganizationRequest: workmail.WorkMailDescribeOrganizationRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailDescribeOrganizationResponse <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDescribeOrganizationResponse: workmail.WorkMailDescribeOrganizationResponse = { ... }
```

##### `alias`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationResponse.property.alias"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationResponse.property.arn"></a>

- *Type:* `string`

---

##### `completedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationResponse.property.completedDate"></a>

- *Type:* `string`

---

##### `defaultMailDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationResponse.property.defaultMailDomain"></a>

- *Type:* `string`

---

##### `directoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationResponse.property.directoryId"></a>

- *Type:* `string`

---

##### `directoryType`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationResponse.property.directoryType"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationResponse.property.errorMessage"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationResponse.property.organizationId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeOrganizationResponse.property.state"></a>

- *Type:* `string`

---

### WorkMailDescribeResourceRequest <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDescribeResourceRequest: workmail.WorkMailDescribeResourceRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

### WorkMailDescribeResourceResponse <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDescribeResourceResponse: workmail.WorkMailDescribeResourceResponse = { ... }
```

##### `bookingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceResponse.property.bookingOptions"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailBookingOptions`](#aws-cdk-sdk.workmail.WorkMailBookingOptions)

---

##### `disabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceResponse.property.disabledDate"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceResponse.property.email"></a>

- *Type:* `string`

---

##### `enabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceResponse.property.enabledDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceResponse.property.name"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceResponse.property.resourceId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceResponse.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeResourceResponse.property.type"></a>

- *Type:* `string`

---

### WorkMailDescribeUserRequest <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDescribeUserRequest: workmail.WorkMailDescribeUserRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserRequest.property.userId"></a>

- *Type:* `string`

---

### WorkMailDescribeUserResponse <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDescribeUserResponse: workmail.WorkMailDescribeUserResponse = { ... }
```

##### `disabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserResponse.property.disabledDate"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserResponse.property.displayName"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserResponse.property.email"></a>

- *Type:* `string`

---

##### `enabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserResponse.property.enabledDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserResponse.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserResponse.property.state"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserResponse.property.userId"></a>

- *Type:* `string`

---

##### `userRole`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDescribeUserResponse.property.userRole"></a>

- *Type:* `string`

---

### WorkMailDisassociateDelegateFromResourceRequest <a name="aws-cdk-sdk.workmail.WorkMailDisassociateDelegateFromResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDisassociateDelegateFromResourceRequest: workmail.WorkMailDisassociateDelegateFromResourceRequest = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDisassociateDelegateFromResourceRequest.property.entityId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDisassociateDelegateFromResourceRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDisassociateDelegateFromResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

### WorkMailDisassociateDelegateFromResourceResponse <a name="aws-cdk-sdk.workmail.WorkMailDisassociateDelegateFromResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDisassociateDelegateFromResourceResponse: workmail.WorkMailDisassociateDelegateFromResourceResponse = { ... }
```

### WorkMailDisassociateMemberFromGroupRequest <a name="aws-cdk-sdk.workmail.WorkMailDisassociateMemberFromGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDisassociateMemberFromGroupRequest: workmail.WorkMailDisassociateMemberFromGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDisassociateMemberFromGroupRequest.property.groupId"></a>

- *Type:* `string`

---

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDisassociateMemberFromGroupRequest.property.memberId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailDisassociateMemberFromGroupRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailDisassociateMemberFromGroupResponse <a name="aws-cdk-sdk.workmail.WorkMailDisassociateMemberFromGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDisassociateMemberFromGroupResponse: workmail.WorkMailDisassociateMemberFromGroupResponse = { ... }
```

### WorkMailDomain <a name="aws-cdk-sdk.workmail.WorkMailDomain"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailDomain: workmail.WorkMailDomain = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDomain.property.domainName"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailDomain.property.hostedZoneId"></a>

- *Type:* `string`

---

### WorkMailFolderConfiguration <a name="aws-cdk-sdk.workmail.WorkMailFolderConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailFolderConfiguration: workmail.WorkMailFolderConfiguration = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailFolderConfiguration.property.action"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailFolderConfiguration.property.name"></a>

- *Type:* `string`

---

##### `period`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailFolderConfiguration.property.period"></a>

- *Type:* `number`

---

### WorkMailGetAccessControlEffectRequest <a name="aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailGetAccessControlEffectRequest: workmail.WorkMailGetAccessControlEffectRequest = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectRequest.property.action"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectRequest.property.ipAddress"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectRequest.property.userId"></a>

- *Type:* `string`

---

### WorkMailGetAccessControlEffectResponse <a name="aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailGetAccessControlEffectResponse: workmail.WorkMailGetAccessControlEffectResponse = { ... }
```

##### `effect`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectResponse.property.effect"></a>

- *Type:* `string`

---

##### `matchedRules`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectResponse.property.matchedRules"></a>

- *Type:* `string`[]

---

### WorkMailGetDefaultRetentionPolicyRequest <a name="aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailGetDefaultRetentionPolicyRequest: workmail.WorkMailGetDefaultRetentionPolicyRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailGetDefaultRetentionPolicyResponse <a name="aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailGetDefaultRetentionPolicyResponse: workmail.WorkMailGetDefaultRetentionPolicyResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyResponse.property.description"></a>

- *Type:* `string`

---

##### `folderConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyResponse.property.folderConfigurations"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailFolderConfiguration`](#aws-cdk-sdk.workmail.WorkMailFolderConfiguration)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyResponse.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyResponse.property.name"></a>

- *Type:* `string`

---

### WorkMailGetMailboxDetailsRequest <a name="aws-cdk-sdk.workmail.WorkMailGetMailboxDetailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailGetMailboxDetailsRequest: workmail.WorkMailGetMailboxDetailsRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetMailboxDetailsRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetMailboxDetailsRequest.property.userId"></a>

- *Type:* `string`

---

### WorkMailGetMailboxDetailsResponse <a name="aws-cdk-sdk.workmail.WorkMailGetMailboxDetailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailGetMailboxDetailsResponse: workmail.WorkMailGetMailboxDetailsResponse = { ... }
```

##### `mailboxQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetMailboxDetailsResponse.property.mailboxQuota"></a>

- *Type:* `number`

---

##### `mailboxSize`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGetMailboxDetailsResponse.property.mailboxSize"></a>

- *Type:* `number`

---

### WorkMailGroup <a name="aws-cdk-sdk.workmail.WorkMailGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailGroup: workmail.WorkMailGroup = { ... }
```

##### `disabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGroup.property.disabledDate"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGroup.property.email"></a>

- *Type:* `string`

---

##### `enabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGroup.property.enabledDate"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGroup.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGroup.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailGroup.property.state"></a>

- *Type:* `string`

---

### WorkMailListAccessControlRulesRequest <a name="aws-cdk-sdk.workmail.WorkMailListAccessControlRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListAccessControlRulesRequest: workmail.WorkMailListAccessControlRulesRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListAccessControlRulesRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailListAccessControlRulesResponse <a name="aws-cdk-sdk.workmail.WorkMailListAccessControlRulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListAccessControlRulesResponse: workmail.WorkMailListAccessControlRulesResponse = { ... }
```

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListAccessControlRulesResponse.property.rules"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailAccessControlRule`](#aws-cdk-sdk.workmail.WorkMailAccessControlRule)[]

---

### WorkMailListAliasesRequest <a name="aws-cdk-sdk.workmail.WorkMailListAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListAliasesRequest: workmail.WorkMailListAliasesRequest = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListAliasesRequest.property.entityId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListAliasesRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListAliasesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListAliasesRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListAliasesResponse <a name="aws-cdk-sdk.workmail.WorkMailListAliasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListAliasesResponse: workmail.WorkMailListAliasesResponse = { ... }
```

##### `aliases`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListAliasesResponse.property.aliases"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListAliasesResponse.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListGroupMembersRequest <a name="aws-cdk-sdk.workmail.WorkMailListGroupMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListGroupMembersRequest: workmail.WorkMailListGroupMembersRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupMembersRequest.property.groupId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupMembersRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupMembersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupMembersRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListGroupMembersResponse <a name="aws-cdk-sdk.workmail.WorkMailListGroupMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListGroupMembersResponse: workmail.WorkMailListGroupMembersResponse = { ... }
```

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupMembersResponse.property.members"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailMember`](#aws-cdk-sdk.workmail.WorkMailMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupMembersResponse.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListGroupsRequest <a name="aws-cdk-sdk.workmail.WorkMailListGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListGroupsRequest: workmail.WorkMailListGroupsRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupsRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListGroupsResponse <a name="aws-cdk-sdk.workmail.WorkMailListGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListGroupsResponse: workmail.WorkMailListGroupsResponse = { ... }
```

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupsResponse.property.groups"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailGroup`](#aws-cdk-sdk.workmail.WorkMailGroup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListMailboxExportJobsRequest <a name="aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListMailboxExportJobsRequest: workmail.WorkMailListMailboxExportJobsRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListMailboxExportJobsResponse <a name="aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListMailboxExportJobsResponse: workmail.WorkMailListMailboxExportJobsResponse = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailMailboxExportJob`](#aws-cdk-sdk.workmail.WorkMailMailboxExportJob)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListMailboxPermissionsRequest <a name="aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListMailboxPermissionsRequest: workmail.WorkMailListMailboxPermissionsRequest = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsRequest.property.entityId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListMailboxPermissionsResponse <a name="aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListMailboxPermissionsResponse: workmail.WorkMailListMailboxPermissionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailPermission`](#aws-cdk-sdk.workmail.WorkMailPermission)[]

---

### WorkMailListOrganizationsRequest <a name="aws-cdk-sdk.workmail.WorkMailListOrganizationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListOrganizationsRequest: workmail.WorkMailListOrganizationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListOrganizationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListOrganizationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListOrganizationsResponse <a name="aws-cdk-sdk.workmail.WorkMailListOrganizationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListOrganizationsResponse: workmail.WorkMailListOrganizationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListOrganizationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `organizationSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListOrganizationsResponse.property.organizationSummaries"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailOrganizationSummary`](#aws-cdk-sdk.workmail.WorkMailOrganizationSummary)[]

---

### WorkMailListResourceDelegatesRequest <a name="aws-cdk-sdk.workmail.WorkMailListResourceDelegatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListResourceDelegatesRequest: workmail.WorkMailListResourceDelegatesRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourceDelegatesRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourceDelegatesRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourceDelegatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourceDelegatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListResourceDelegatesResponse <a name="aws-cdk-sdk.workmail.WorkMailListResourceDelegatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListResourceDelegatesResponse: workmail.WorkMailListResourceDelegatesResponse = { ... }
```

##### `delegates`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourceDelegatesResponse.property.delegates"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDelegate`](#aws-cdk-sdk.workmail.WorkMailDelegate)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourceDelegatesResponse.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListResourcesRequest <a name="aws-cdk-sdk.workmail.WorkMailListResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListResourcesRequest: workmail.WorkMailListResourcesRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourcesRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourcesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListResourcesResponse <a name="aws-cdk-sdk.workmail.WorkMailListResourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListResourcesResponse: workmail.WorkMailListResourcesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListResourcesResponse.property.resources"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailResource`](#aws-cdk-sdk.workmail.WorkMailResource)[]

---

### WorkMailListTagsForResourceRequest <a name="aws-cdk-sdk.workmail.WorkMailListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListTagsForResourceRequest: workmail.WorkMailListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WorkMailListTagsForResourceResponse <a name="aws-cdk-sdk.workmail.WorkMailListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListTagsForResourceResponse: workmail.WorkMailListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailTag`](#aws-cdk-sdk.workmail.WorkMailTag)[]

---

### WorkMailListUsersRequest <a name="aws-cdk-sdk.workmail.WorkMailListUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListUsersRequest: workmail.WorkMailListUsersRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailListUsersRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListUsersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListUsersRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkMailListUsersResponse <a name="aws-cdk-sdk.workmail.WorkMailListUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailListUsersResponse: workmail.WorkMailListUsersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListUsersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `users`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailListUsersResponse.property.users"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailUser`](#aws-cdk-sdk.workmail.WorkMailUser)[]

---

### WorkMailMailboxExportJob <a name="aws-cdk-sdk.workmail.WorkMailMailboxExportJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailMailboxExportJob: workmail.WorkMailMailboxExportJob = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMailboxExportJob.property.description"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMailboxExportJob.property.endTime"></a>

- *Type:* `string`

---

##### `entityId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMailboxExportJob.property.entityId"></a>

- *Type:* `string`

---

##### `estimatedProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMailboxExportJob.property.estimatedProgress"></a>

- *Type:* `number`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMailboxExportJob.property.jobId"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMailboxExportJob.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMailboxExportJob.property.s3Path"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMailboxExportJob.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMailboxExportJob.property.state"></a>

- *Type:* `string`

---

### WorkMailMember <a name="aws-cdk-sdk.workmail.WorkMailMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailMember: workmail.WorkMailMember = { ... }
```

##### `disabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMember.property.disabledDate"></a>

- *Type:* `string`

---

##### `enabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMember.property.enabledDate"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMember.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMember.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMember.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailMember.property.type"></a>

- *Type:* `string`

---

### WorkMailOrganizationSummary <a name="aws-cdk-sdk.workmail.WorkMailOrganizationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailOrganizationSummary: workmail.WorkMailOrganizationSummary = { ... }
```

##### `alias`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailOrganizationSummary.property.alias"></a>

- *Type:* `string`

---

##### `defaultMailDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailOrganizationSummary.property.defaultMailDomain"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailOrganizationSummary.property.errorMessage"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailOrganizationSummary.property.organizationId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailOrganizationSummary.property.state"></a>

- *Type:* `string`

---

### WorkMailPermission <a name="aws-cdk-sdk.workmail.WorkMailPermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailPermission: workmail.WorkMailPermission = { ... }
```

##### `granteeId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPermission.property.granteeId"></a>

- *Type:* `string`

---

##### `granteeType`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPermission.property.granteeType"></a>

- *Type:* `string`

---

##### `permissionValues`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPermission.property.permissionValues"></a>

- *Type:* `string`[]

---

### WorkMailPutAccessControlRuleRequest <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailPutAccessControlRuleRequest: workmail.WorkMailPutAccessControlRuleRequest = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest.property.description"></a>

- *Type:* `string`

---

##### `effect`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest.property.effect"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest.property.actions"></a>

- *Type:* `string`[]

---

##### `ipRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest.property.ipRanges"></a>

- *Type:* `string`[]

---

##### `notActions`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest.property.notActions"></a>

- *Type:* `string`[]

---

##### `notIpRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest.property.notIpRanges"></a>

- *Type:* `string`[]

---

##### `notUserIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest.property.notUserIds"></a>

- *Type:* `string`[]

---

##### `userIds`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleRequest.property.userIds"></a>

- *Type:* `string`[]

---

### WorkMailPutAccessControlRuleResponse <a name="aws-cdk-sdk.workmail.WorkMailPutAccessControlRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailPutAccessControlRuleResponse: workmail.WorkMailPutAccessControlRuleResponse = { ... }
```

### WorkMailPutMailboxPermissionsRequest <a name="aws-cdk-sdk.workmail.WorkMailPutMailboxPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailPutMailboxPermissionsRequest: workmail.WorkMailPutMailboxPermissionsRequest = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutMailboxPermissionsRequest.property.entityId"></a>

- *Type:* `string`

---

##### `granteeId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutMailboxPermissionsRequest.property.granteeId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutMailboxPermissionsRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `permissionValues`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutMailboxPermissionsRequest.property.permissionValues"></a>

- *Type:* `string`[]

---

### WorkMailPutMailboxPermissionsResponse <a name="aws-cdk-sdk.workmail.WorkMailPutMailboxPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailPutMailboxPermissionsResponse: workmail.WorkMailPutMailboxPermissionsResponse = { ... }
```

### WorkMailPutRetentionPolicyRequest <a name="aws-cdk-sdk.workmail.WorkMailPutRetentionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailPutRetentionPolicyRequest: workmail.WorkMailPutRetentionPolicyRequest = { ... }
```

##### `folderConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutRetentionPolicyRequest.property.folderConfigurations"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailFolderConfiguration`](#aws-cdk-sdk.workmail.WorkMailFolderConfiguration)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutRetentionPolicyRequest.property.name"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutRetentionPolicyRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutRetentionPolicyRequest.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailPutRetentionPolicyRequest.property.id"></a>

- *Type:* `string`

---

### WorkMailPutRetentionPolicyResponse <a name="aws-cdk-sdk.workmail.WorkMailPutRetentionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailPutRetentionPolicyResponse: workmail.WorkMailPutRetentionPolicyResponse = { ... }
```

### WorkMailRegisterToWorkMailRequest <a name="aws-cdk-sdk.workmail.WorkMailRegisterToWorkMailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailRegisterToWorkMailRequest: workmail.WorkMailRegisterToWorkMailRequest = { ... }
```

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailRegisterToWorkMailRequest.property.email"></a>

- *Type:* `string`

---

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailRegisterToWorkMailRequest.property.entityId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailRegisterToWorkMailRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailRegisterToWorkMailResponse <a name="aws-cdk-sdk.workmail.WorkMailRegisterToWorkMailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailRegisterToWorkMailResponse: workmail.WorkMailRegisterToWorkMailResponse = { ... }
```

### WorkMailResetPasswordRequest <a name="aws-cdk-sdk.workmail.WorkMailResetPasswordRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailResetPasswordRequest: workmail.WorkMailResetPasswordRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResetPasswordRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResetPasswordRequest.property.password"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResetPasswordRequest.property.userId"></a>

- *Type:* `string`

---

### WorkMailResetPasswordResponse <a name="aws-cdk-sdk.workmail.WorkMailResetPasswordResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailResetPasswordResponse: workmail.WorkMailResetPasswordResponse = { ... }
```

### WorkMailResource <a name="aws-cdk-sdk.workmail.WorkMailResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailResource: workmail.WorkMailResource = { ... }
```

##### `disabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailResource.property.disabledDate"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailResource.property.email"></a>

- *Type:* `string`

---

##### `enabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailResource.property.enabledDate"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailResource.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailResource.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailResource.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailResource.property.type"></a>

- *Type:* `string`

---

### WorkMailStartMailboxExportJobRequest <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailStartMailboxExportJobRequest: workmail.WorkMailStartMailboxExportJobRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest.property.entityId"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest.property.s3Prefix"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest.property.description"></a>

- *Type:* `string`

---

### WorkMailStartMailboxExportJobResponse <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailStartMailboxExportJobResponse: workmail.WorkMailStartMailboxExportJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobResponse.property.jobId"></a>

- *Type:* `string`

---

### WorkMailTag <a name="aws-cdk-sdk.workmail.WorkMailTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailTag: workmail.WorkMailTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailTag.property.value"></a>

- *Type:* `string`

---

### WorkMailTagResourceRequest <a name="aws-cdk-sdk.workmail.WorkMailTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailTagResourceRequest: workmail.WorkMailTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailTag`](#aws-cdk-sdk.workmail.WorkMailTag)[]

---

### WorkMailTagResourceResponse <a name="aws-cdk-sdk.workmail.WorkMailTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailTagResourceResponse: workmail.WorkMailTagResourceResponse = { ... }
```

### WorkMailUntagResourceRequest <a name="aws-cdk-sdk.workmail.WorkMailUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailUntagResourceRequest: workmail.WorkMailUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### WorkMailUntagResourceResponse <a name="aws-cdk-sdk.workmail.WorkMailUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailUntagResourceResponse: workmail.WorkMailUntagResourceResponse = { ... }
```

### WorkMailUpdateMailboxQuotaRequest <a name="aws-cdk-sdk.workmail.WorkMailUpdateMailboxQuotaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailUpdateMailboxQuotaRequest: workmail.WorkMailUpdateMailboxQuotaRequest = { ... }
```

##### `mailboxQuota`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailUpdateMailboxQuotaRequest.property.mailboxQuota"></a>

- *Type:* `number`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailUpdateMailboxQuotaRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailUpdateMailboxQuotaRequest.property.userId"></a>

- *Type:* `string`

---

### WorkMailUpdateMailboxQuotaResponse <a name="aws-cdk-sdk.workmail.WorkMailUpdateMailboxQuotaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailUpdateMailboxQuotaResponse: workmail.WorkMailUpdateMailboxQuotaResponse = { ... }
```

### WorkMailUpdatePrimaryEmailAddressRequest <a name="aws-cdk-sdk.workmail.WorkMailUpdatePrimaryEmailAddressRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailUpdatePrimaryEmailAddressRequest: workmail.WorkMailUpdatePrimaryEmailAddressRequest = { ... }
```

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailUpdatePrimaryEmailAddressRequest.property.email"></a>

- *Type:* `string`

---

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailUpdatePrimaryEmailAddressRequest.property.entityId"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailUpdatePrimaryEmailAddressRequest.property.organizationId"></a>

- *Type:* `string`

---

### WorkMailUpdatePrimaryEmailAddressResponse <a name="aws-cdk-sdk.workmail.WorkMailUpdatePrimaryEmailAddressResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailUpdatePrimaryEmailAddressResponse: workmail.WorkMailUpdatePrimaryEmailAddressResponse = { ... }
```

### WorkMailUpdateResourceRequest <a name="aws-cdk-sdk.workmail.WorkMailUpdateResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailUpdateResourceRequest: workmail.WorkMailUpdateResourceRequest = { ... }
```

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailUpdateResourceRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailUpdateResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `bookingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailUpdateResourceRequest.property.bookingOptions"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailBookingOptions`](#aws-cdk-sdk.workmail.WorkMailBookingOptions)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailUpdateResourceRequest.property.name"></a>

- *Type:* `string`

---

### WorkMailUpdateResourceResponse <a name="aws-cdk-sdk.workmail.WorkMailUpdateResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailUpdateResourceResponse: workmail.WorkMailUpdateResourceResponse = { ... }
```

### WorkMailUser <a name="aws-cdk-sdk.workmail.WorkMailUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

const workMailUser: workmail.WorkMailUser = { ... }
```

##### `disabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailUser.property.disabledDate"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailUser.property.displayName"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailUser.property.email"></a>

- *Type:* `string`

---

##### `enabledDate`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailUser.property.enabledDate"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailUser.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailUser.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailUser.property.state"></a>

- *Type:* `string`

---

##### `userRole`<sup>Optional</sup> <a name="aws-cdk-sdk.workmail.WorkMailUser.property.userRole"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### WorkMailResponsesCreateGroup <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateGroup"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateGroup.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesCreateGroup(__scope: Construct, __resources: string[], __input: WorkMailCreateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailCreateGroupRequest`](#aws-cdk-sdk.workmail.WorkMailCreateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateGroup.property.groupId"></a>

- *Type:* `string`

---


### WorkMailResponsesCreateOrganization <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateOrganization.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesCreateOrganization(__scope: Construct, __resources: string[], __input: WorkMailCreateOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest`](#aws-cdk-sdk.workmail.WorkMailCreateOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateOrganization.property.organizationId"></a>

- *Type:* `string`

---


### WorkMailResponsesCreateResource <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateResource"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateResource.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesCreateResource(__scope: Construct, __resources: string[], __input: WorkMailCreateResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailCreateResourceRequest`](#aws-cdk-sdk.workmail.WorkMailCreateResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateResource.property.resourceId"></a>

- *Type:* `string`

---


### WorkMailResponsesCreateUser <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateUser"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateUser.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesCreateUser(__scope: Construct, __resources: string[], __input: WorkMailCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailCreateUserRequest`](#aws-cdk-sdk.workmail.WorkMailCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesCreateUser.property.userId"></a>

- *Type:* `string`

---


### WorkMailResponsesDeleteOrganization <a name="aws-cdk-sdk.workmail.WorkMailResponsesDeleteOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesDeleteOrganization.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesDeleteOrganization(__scope: Construct, __resources: string[], __input: WorkMailDeleteOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDeleteOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDeleteOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDeleteOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDeleteOrganizationRequest`](#aws-cdk-sdk.workmail.WorkMailDeleteOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDeleteOrganization.property.organizationId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDeleteOrganization.property.state"></a>

- *Type:* `string`

---


### WorkMailResponsesDescribeGroup <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesDescribeGroup(__scope: Construct, __resources: string[], __input: WorkMailDescribeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeGroupRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `disabledDate`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup.property.disabledDate"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup.property.email"></a>

- *Type:* `string`

---

##### `enabledDate`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup.property.enabledDate"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup.property.groupId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeGroup.property.state"></a>

- *Type:* `string`

---


### WorkMailResponsesDescribeMailboxExportJob <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesDescribeMailboxExportJob(__scope: Construct, __resources: string[], __input: WorkMailDescribeMailboxExportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeMailboxExportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.description"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.endTime"></a>

- *Type:* `string`

---

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.entityId"></a>

- *Type:* `string`

---

##### `errorInfo`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.errorInfo"></a>

- *Type:* `string`

---

##### `estimatedProgress`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.estimatedProgress"></a>

- *Type:* `number`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.roleArn"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3Path`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.s3Path"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.s3Prefix"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeMailboxExportJob.property.state"></a>

- *Type:* `string`

---


### WorkMailResponsesDescribeOrganization <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesDescribeOrganization(__scope: Construct, __resources: string[], __input: WorkMailDescribeOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeOrganizationRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `alias`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.property.alias"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.property.arn"></a>

- *Type:* `string`

---

##### `completedDate`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.property.completedDate"></a>

- *Type:* `string`

---

##### `defaultMailDomain`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.property.defaultMailDomain"></a>

- *Type:* `string`

---

##### `directoryId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.property.directoryId"></a>

- *Type:* `string`

---

##### `directoryType`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.property.directoryType"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.property.errorMessage"></a>

- *Type:* `string`

---

##### `organizationId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.property.organizationId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeOrganization.property.state"></a>

- *Type:* `string`

---


### WorkMailResponsesDescribeResource <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesDescribeResource(__scope: Construct, __resources: string[], __input: WorkMailDescribeResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeResourceRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `bookingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.property.bookingOptions"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailResponsesDescribeResourceBookingOptions`](#aws-cdk-sdk.workmail.WorkMailResponsesDescribeResourceBookingOptions)

---

##### `disabledDate`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.property.disabledDate"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.property.email"></a>

- *Type:* `string`

---

##### `enabledDate`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.property.enabledDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.property.name"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.property.resourceId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResource.property.type"></a>

- *Type:* `string`

---


### WorkMailResponsesDescribeResourceBookingOptions <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResourceBookingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResourceBookingOptions.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesDescribeResourceBookingOptions(__scope: Construct, __resources: string[], __input: WorkMailDescribeResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResourceBookingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResourceBookingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResourceBookingOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeResourceRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `autoAcceptRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResourceBookingOptions.property.autoAcceptRequests"></a>

- *Type:* `boolean`

---

##### `autoDeclineConflictingRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResourceBookingOptions.property.autoDeclineConflictingRequests"></a>

- *Type:* `boolean`

---

##### `autoDeclineRecurringRequests`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeResourceBookingOptions.property.autoDeclineRecurringRequests"></a>

- *Type:* `boolean`

---


### WorkMailResponsesDescribeUser <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesDescribeUser(__scope: Construct, __resources: string[], __input: WorkMailDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDescribeUserRequest`](#aws-cdk-sdk.workmail.WorkMailDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `disabledDate`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.property.disabledDate"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.property.displayName"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.property.email"></a>

- *Type:* `string`

---

##### `enabledDate`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.property.enabledDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.property.state"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.property.userId"></a>

- *Type:* `string`

---

##### `userRole`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesDescribeUser.property.userRole"></a>

- *Type:* `string`

---


### WorkMailResponsesFetchAccessControlEffect <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchAccessControlEffect"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchAccessControlEffect.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesFetchAccessControlEffect(__scope: Construct, __resources: string[], __input: WorkMailGetAccessControlEffectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchAccessControlEffect.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchAccessControlEffect.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchAccessControlEffect.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectRequest`](#aws-cdk-sdk.workmail.WorkMailGetAccessControlEffectRequest)

---



#### Properties <a name="Properties"></a>

##### `effect`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchAccessControlEffect.property.effect"></a>

- *Type:* `string`

---

##### `matchedRules`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchAccessControlEffect.property.matchedRules"></a>

- *Type:* `string`[]

---


### WorkMailResponsesFetchDefaultRetentionPolicy <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchDefaultRetentionPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchDefaultRetentionPolicy.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesFetchDefaultRetentionPolicy(__scope: Construct, __resources: string[], __input: WorkMailGetDefaultRetentionPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchDefaultRetentionPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchDefaultRetentionPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchDefaultRetentionPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyRequest`](#aws-cdk-sdk.workmail.WorkMailGetDefaultRetentionPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchDefaultRetentionPolicy.property.description"></a>

- *Type:* `string`

---

##### `folderConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchDefaultRetentionPolicy.property.folderConfigurations"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailFolderConfiguration`](#aws-cdk-sdk.workmail.WorkMailFolderConfiguration)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchDefaultRetentionPolicy.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchDefaultRetentionPolicy.property.name"></a>

- *Type:* `string`

---


### WorkMailResponsesFetchMailboxDetails <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchMailboxDetails"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchMailboxDetails.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesFetchMailboxDetails(__scope: Construct, __resources: string[], __input: WorkMailGetMailboxDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchMailboxDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchMailboxDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchMailboxDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailGetMailboxDetailsRequest`](#aws-cdk-sdk.workmail.WorkMailGetMailboxDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `mailboxQuota`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchMailboxDetails.property.mailboxQuota"></a>

- *Type:* `number`

---

##### `mailboxSize`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesFetchMailboxDetails.property.mailboxSize"></a>

- *Type:* `number`

---


### WorkMailResponsesListAccessControlRules <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAccessControlRules"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAccessControlRules.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListAccessControlRules(__scope: Construct, __resources: string[], __input: WorkMailListAccessControlRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAccessControlRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAccessControlRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAccessControlRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListAccessControlRulesRequest`](#aws-cdk-sdk.workmail.WorkMailListAccessControlRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAccessControlRules.property.rules"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailAccessControlRule`](#aws-cdk-sdk.workmail.WorkMailAccessControlRule)[]

---


### WorkMailResponsesListAliases <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAliases"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAliases.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListAliases(__scope: Construct, __resources: string[], __input: WorkMailListAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListAliasesRequest`](#aws-cdk-sdk.workmail.WorkMailListAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAliases.property.aliases"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListAliases.property.nextToken"></a>

- *Type:* `string`

---


### WorkMailResponsesListGroupMembers <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroupMembers"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroupMembers.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListGroupMembers(__scope: Construct, __resources: string[], __input: WorkMailListGroupMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroupMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroupMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroupMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListGroupMembersRequest`](#aws-cdk-sdk.workmail.WorkMailListGroupMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroupMembers.property.members"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailMember`](#aws-cdk-sdk.workmail.WorkMailMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroupMembers.property.nextToken"></a>

- *Type:* `string`

---


### WorkMailResponsesListGroups <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroups"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroups.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListGroups(__scope: Construct, __resources: string[], __input: WorkMailListGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListGroupsRequest`](#aws-cdk-sdk.workmail.WorkMailListGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroups.property.groups"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailGroup`](#aws-cdk-sdk.workmail.WorkMailGroup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListGroups.property.nextToken"></a>

- *Type:* `string`

---


### WorkMailResponsesListMailboxExportJobs <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxExportJobs"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxExportJobs.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListMailboxExportJobs(__scope: Construct, __resources: string[], __input: WorkMailListMailboxExportJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxExportJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxExportJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxExportJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsRequest`](#aws-cdk-sdk.workmail.WorkMailListMailboxExportJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxExportJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailMailboxExportJob`](#aws-cdk-sdk.workmail.WorkMailMailboxExportJob)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxExportJobs.property.nextToken"></a>

- *Type:* `string`

---


### WorkMailResponsesListMailboxPermissions <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxPermissions.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListMailboxPermissions(__scope: Construct, __resources: string[], __input: WorkMailListMailboxPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsRequest`](#aws-cdk-sdk.workmail.WorkMailListMailboxPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxPermissions.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListMailboxPermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailPermission`](#aws-cdk-sdk.workmail.WorkMailPermission)[]

---


### WorkMailResponsesListOrganizations <a name="aws-cdk-sdk.workmail.WorkMailResponsesListOrganizations"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListOrganizations.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListOrganizations(__scope: Construct, __resources: string[], __input: WorkMailListOrganizationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListOrganizations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListOrganizations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListOrganizations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListOrganizationsRequest`](#aws-cdk-sdk.workmail.WorkMailListOrganizationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListOrganizations.property.nextToken"></a>

- *Type:* `string`

---

##### `organizationSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListOrganizations.property.organizationSummaries"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailOrganizationSummary`](#aws-cdk-sdk.workmail.WorkMailOrganizationSummary)[]

---


### WorkMailResponsesListResourceDelegates <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResourceDelegates"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResourceDelegates.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListResourceDelegates(__scope: Construct, __resources: string[], __input: WorkMailListResourceDelegatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResourceDelegates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResourceDelegates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResourceDelegates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListResourceDelegatesRequest`](#aws-cdk-sdk.workmail.WorkMailListResourceDelegatesRequest)

---



#### Properties <a name="Properties"></a>

##### `delegates`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResourceDelegates.property.delegates"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailDelegate`](#aws-cdk-sdk.workmail.WorkMailDelegate)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResourceDelegates.property.nextToken"></a>

- *Type:* `string`

---


### WorkMailResponsesListResources <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResources"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResources.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListResources(__scope: Construct, __resources: string[], __input: WorkMailListResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListResourcesRequest`](#aws-cdk-sdk.workmail.WorkMailListResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResources.property.nextToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListResources.property.resources"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailResource`](#aws-cdk-sdk.workmail.WorkMailResource)[]

---


### WorkMailResponsesListTagsForResource <a name="aws-cdk-sdk.workmail.WorkMailResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListTagsForResource.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: WorkMailListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListTagsForResourceRequest`](#aws-cdk-sdk.workmail.WorkMailListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailTag`](#aws-cdk-sdk.workmail.WorkMailTag)[]

---


### WorkMailResponsesListUsers <a name="aws-cdk-sdk.workmail.WorkMailResponsesListUsers"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesListUsers.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesListUsers(__scope: Construct, __resources: string[], __input: WorkMailListUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailListUsersRequest`](#aws-cdk-sdk.workmail.WorkMailListUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListUsers.property.nextToken"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesListUsers.property.users"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailUser`](#aws-cdk-sdk.workmail.WorkMailUser)[]

---


### WorkMailResponsesStartMailboxExportJob <a name="aws-cdk-sdk.workmail.WorkMailResponsesStartMailboxExportJob"></a>

#### Initializer <a name="aws-cdk-sdk.workmail.WorkMailResponsesStartMailboxExportJob.Initializer"></a>

```typescript
import { workmail } from 'aws-cdk-sdk'

new workmail.WorkMailResponsesStartMailboxExportJob(__scope: Construct, __resources: string[], __input: WorkMailStartMailboxExportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesStartMailboxExportJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesStartMailboxExportJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesStartMailboxExportJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest`](#aws-cdk-sdk.workmail.WorkMailStartMailboxExportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.workmail.WorkMailResponsesStartMailboxExportJob.property.jobId"></a>

- *Type:* `string`

---



