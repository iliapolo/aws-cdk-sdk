# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SecurityHubClient <a name="aws-cdk-sdk.securityhub.SecurityHubClient"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubClient.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptInvitation` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.acceptInvitation"></a>

```typescript
public acceptInvitation(input: SecurityHubAcceptInvitationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAcceptInvitationRequest`](#aws-cdk-sdk.securityhub.SecurityHubAcceptInvitationRequest)

---

##### `batchDisableStandards` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.batchDisableStandards"></a>

```typescript
public batchDisableStandards(input: SecurityHubBatchDisableStandardsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubBatchDisableStandardsRequest`](#aws-cdk-sdk.securityhub.SecurityHubBatchDisableStandardsRequest)

---

##### `batchEnableStandards` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.batchEnableStandards"></a>

```typescript
public batchEnableStandards(input: SecurityHubBatchEnableStandardsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubBatchEnableStandardsRequest`](#aws-cdk-sdk.securityhub.SecurityHubBatchEnableStandardsRequest)

---

##### `batchImportFindings` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.batchImportFindings"></a>

```typescript
public batchImportFindings(input: SecurityHubBatchImportFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubBatchImportFindingsRequest`](#aws-cdk-sdk.securityhub.SecurityHubBatchImportFindingsRequest)

---

##### `batchUpdateFindings` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.batchUpdateFindings"></a>

```typescript
public batchUpdateFindings(input: SecurityHubBatchUpdateFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest`](#aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest)

---

##### `createActionTarget` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.createActionTarget"></a>

```typescript
public createActionTarget(input: SecurityHubCreateActionTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubCreateActionTargetRequest`](#aws-cdk-sdk.securityhub.SecurityHubCreateActionTargetRequest)

---

##### `createInsight` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.createInsight"></a>

```typescript
public createInsight(input: SecurityHubCreateInsightRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubCreateInsightRequest`](#aws-cdk-sdk.securityhub.SecurityHubCreateInsightRequest)

---

##### `createMembers` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.createMembers"></a>

```typescript
public createMembers(input: SecurityHubCreateMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubCreateMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubCreateMembersRequest)

---

##### `declineInvitations` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.declineInvitations"></a>

```typescript
public declineInvitations(input: SecurityHubDeclineInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDeclineInvitationsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDeclineInvitationsRequest)

---

##### `deleteActionTarget` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.deleteActionTarget"></a>

```typescript
public deleteActionTarget(input: SecurityHubDeleteActionTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDeleteActionTargetRequest`](#aws-cdk-sdk.securityhub.SecurityHubDeleteActionTargetRequest)

---

##### `deleteInsight` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.deleteInsight"></a>

```typescript
public deleteInsight(input: SecurityHubDeleteInsightRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDeleteInsightRequest`](#aws-cdk-sdk.securityhub.SecurityHubDeleteInsightRequest)

---

##### `deleteInvitations` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.deleteInvitations"></a>

```typescript
public deleteInvitations(input: SecurityHubDeleteInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDeleteInvitationsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDeleteInvitationsRequest)

---

##### `deleteMembers` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.deleteMembers"></a>

```typescript
public deleteMembers(input: SecurityHubDeleteMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDeleteMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubDeleteMembersRequest)

---

##### `describeActionTargets` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.describeActionTargets"></a>

```typescript
public describeActionTargets(input: SecurityHubDescribeActionTargetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsRequest)

---

##### `describeHub` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.describeHub"></a>

```typescript
public describeHub(input: SecurityHubDescribeHubRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDescribeHubRequest`](#aws-cdk-sdk.securityhub.SecurityHubDescribeHubRequest)

---

##### `describeOrganizationConfiguration` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.describeOrganizationConfiguration"></a>

```typescript
public describeOrganizationConfiguration()
```

##### `describeProducts` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.describeProducts"></a>

```typescript
public describeProducts(input: SecurityHubDescribeProductsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDescribeProductsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDescribeProductsRequest)

---

##### `describeStandards` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.describeStandards"></a>

```typescript
public describeStandards(input: SecurityHubDescribeStandardsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsRequest)

---

##### `describeStandardsControls` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.describeStandardsControls"></a>

```typescript
public describeStandardsControls(input: SecurityHubDescribeStandardsControlsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsRequest)

---

##### `disableImportFindingsForProduct` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.disableImportFindingsForProduct"></a>

```typescript
public disableImportFindingsForProduct(input: SecurityHubDisableImportFindingsForProductRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDisableImportFindingsForProductRequest`](#aws-cdk-sdk.securityhub.SecurityHubDisableImportFindingsForProductRequest)

---

##### `disableOrganizationAdminAccount` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.disableOrganizationAdminAccount"></a>

```typescript
public disableOrganizationAdminAccount(input: SecurityHubDisableOrganizationAdminAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDisableOrganizationAdminAccountRequest`](#aws-cdk-sdk.securityhub.SecurityHubDisableOrganizationAdminAccountRequest)

---

##### `disableSecurityHub` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.disableSecurityHub"></a>

```typescript
public disableSecurityHub()
```

##### `disassociateFromMasterAccount` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.disassociateFromMasterAccount"></a>

```typescript
public disassociateFromMasterAccount()
```

##### `disassociateMembers` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.disassociateMembers"></a>

```typescript
public disassociateMembers(input: SecurityHubDisassociateMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDisassociateMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubDisassociateMembersRequest)

---

##### `enableImportFindingsForProduct` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.enableImportFindingsForProduct"></a>

```typescript
public enableImportFindingsForProduct(input: SecurityHubEnableImportFindingsForProductRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubEnableImportFindingsForProductRequest`](#aws-cdk-sdk.securityhub.SecurityHubEnableImportFindingsForProductRequest)

---

##### `enableOrganizationAdminAccount` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.enableOrganizationAdminAccount"></a>

```typescript
public enableOrganizationAdminAccount(input: SecurityHubEnableOrganizationAdminAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubEnableOrganizationAdminAccountRequest`](#aws-cdk-sdk.securityhub.SecurityHubEnableOrganizationAdminAccountRequest)

---

##### `enableSecurityHub` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.enableSecurityHub"></a>

```typescript
public enableSecurityHub(input: SecurityHubEnableSecurityHubRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubEnableSecurityHubRequest`](#aws-cdk-sdk.securityhub.SecurityHubEnableSecurityHubRequest)

---

##### `fetchEnabledStandards` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.fetchEnabledStandards"></a>

```typescript
public fetchEnabledStandards(input: SecurityHubGetEnabledStandardsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsRequest)

---

##### `fetchFindings` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.fetchFindings"></a>

```typescript
public fetchFindings(input: SecurityHubGetFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetFindingsRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetFindingsRequest)

---

##### `fetchInsightResults` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.fetchInsightResults"></a>

```typescript
public fetchInsightResults(input: SecurityHubGetInsightResultsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetInsightResultsRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetInsightResultsRequest)

---

##### `fetchInsights` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.fetchInsights"></a>

```typescript
public fetchInsights(input: SecurityHubGetInsightsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetInsightsRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetInsightsRequest)

---

##### `fetchInvitationsCount` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.fetchInvitationsCount"></a>

```typescript
public fetchInvitationsCount()
```

##### `fetchMasterAccount` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.fetchMasterAccount"></a>

```typescript
public fetchMasterAccount()
```

##### `fetchMembers` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.fetchMembers"></a>

```typescript
public fetchMembers(input: SecurityHubGetMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetMembersRequest)

---

##### `inviteMembers` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.inviteMembers"></a>

```typescript
public inviteMembers(input: SecurityHubInviteMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubInviteMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubInviteMembersRequest)

---

##### `listEnabledProductsForImport` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.listEnabledProductsForImport"></a>

```typescript
public listEnabledProductsForImport(input: SecurityHubListEnabledProductsForImportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubListEnabledProductsForImportRequest`](#aws-cdk-sdk.securityhub.SecurityHubListEnabledProductsForImportRequest)

---

##### `listInvitations` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.listInvitations"></a>

```typescript
public listInvitations(input: SecurityHubListInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubListInvitationsRequest`](#aws-cdk-sdk.securityhub.SecurityHubListInvitationsRequest)

---

##### `listMembers` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.listMembers"></a>

```typescript
public listMembers(input: SecurityHubListMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubListMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubListMembersRequest)

---

##### `listOrganizationAdminAccounts` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.listOrganizationAdminAccounts"></a>

```typescript
public listOrganizationAdminAccounts(input: SecurityHubListOrganizationAdminAccountsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubListOrganizationAdminAccountsRequest`](#aws-cdk-sdk.securityhub.SecurityHubListOrganizationAdminAccountsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: SecurityHubListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubListTagsForResourceRequest`](#aws-cdk-sdk.securityhub.SecurityHubListTagsForResourceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.tagResource"></a>

```typescript
public tagResource(input: SecurityHubTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubTagResourceRequest`](#aws-cdk-sdk.securityhub.SecurityHubTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.untagResource"></a>

```typescript
public untagResource(input: SecurityHubUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubUntagResourceRequest`](#aws-cdk-sdk.securityhub.SecurityHubUntagResourceRequest)

---

##### `updateActionTarget` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.updateActionTarget"></a>

```typescript
public updateActionTarget(input: SecurityHubUpdateActionTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubUpdateActionTargetRequest`](#aws-cdk-sdk.securityhub.SecurityHubUpdateActionTargetRequest)

---

##### `updateFindings` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.updateFindings"></a>

```typescript
public updateFindings(input: SecurityHubUpdateFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubUpdateFindingsRequest`](#aws-cdk-sdk.securityhub.SecurityHubUpdateFindingsRequest)

---

##### `updateInsight` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.updateInsight"></a>

```typescript
public updateInsight(input: SecurityHubUpdateInsightRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubUpdateInsightRequest`](#aws-cdk-sdk.securityhub.SecurityHubUpdateInsightRequest)

---

##### `updateOrganizationConfiguration` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.updateOrganizationConfiguration"></a>

```typescript
public updateOrganizationConfiguration(input: SecurityHubUpdateOrganizationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubUpdateOrganizationConfigurationRequest`](#aws-cdk-sdk.securityhub.SecurityHubUpdateOrganizationConfigurationRequest)

---

##### `updateSecurityHubConfiguration` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.updateSecurityHubConfiguration"></a>

```typescript
public updateSecurityHubConfiguration(input: SecurityHubUpdateSecurityHubConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubUpdateSecurityHubConfigurationRequest`](#aws-cdk-sdk.securityhub.SecurityHubUpdateSecurityHubConfigurationRequest)

---

##### `updateStandardsControl` <a name="aws-cdk-sdk.securityhub.SecurityHubClient.updateStandardsControl"></a>

```typescript
public updateStandardsControl(input: SecurityHubUpdateStandardsControlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubUpdateStandardsControlRequest`](#aws-cdk-sdk.securityhub.SecurityHubUpdateStandardsControlRequest)

---




## Structs <a name="Structs"></a>

### SecurityHubAcceptInvitationRequest <a name="aws-cdk-sdk.securityhub.SecurityHubAcceptInvitationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAcceptInvitationRequest: securityhub.SecurityHubAcceptInvitationRequest = { ... }
```

##### `invitationId`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAcceptInvitationRequest.property.invitationId"></a>

- *Type:* `string`

---

##### `masterId`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAcceptInvitationRequest.property.masterId"></a>

- *Type:* `string`

---

### SecurityHubAcceptInvitationResponse <a name="aws-cdk-sdk.securityhub.SecurityHubAcceptInvitationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAcceptInvitationResponse: securityhub.SecurityHubAcceptInvitationResponse = { ... }
```

### SecurityHubAccountDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAccountDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAccountDetails: securityhub.SecurityHubAccountDetails = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAccountDetails.property.accountId"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAccountDetails.property.email"></a>

- *Type:* `string`

---

### SecurityHubActionTarget <a name="aws-cdk-sdk.securityhub.SecurityHubActionTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubActionTarget: securityhub.SecurityHubActionTarget = { ... }
```

##### `actionTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubActionTarget.property.actionTargetArn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubActionTarget.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubActionTarget.property.name"></a>

- *Type:* `string`

---

### SecurityHubAdminAccount <a name="aws-cdk-sdk.securityhub.SecurityHubAdminAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAdminAccount: securityhub.SecurityHubAdminAccount = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAdminAccount.property.accountId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAdminAccount.property.status"></a>

- *Type:* `string`

---

### SecurityHubAvailabilityZone <a name="aws-cdk-sdk.securityhub.SecurityHubAvailabilityZone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAvailabilityZone: securityhub.SecurityHubAvailabilityZone = { ... }
```

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAvailabilityZone.property.subnetId"></a>

- *Type:* `string`

---

##### `zoneName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAvailabilityZone.property.zoneName"></a>

- *Type:* `string`

---

### SecurityHubAwsApiGatewayAccessLogSettings <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayAccessLogSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsApiGatewayAccessLogSettings: securityhub.SecurityHubAwsApiGatewayAccessLogSettings = { ... }
```

##### `destinationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayAccessLogSettings.property.destinationArn"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayAccessLogSettings.property.format"></a>

- *Type:* `string`

---

### SecurityHubAwsApiGatewayCanarySettings <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayCanarySettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsApiGatewayCanarySettings: securityhub.SecurityHubAwsApiGatewayCanarySettings = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayCanarySettings.property.deploymentId"></a>

- *Type:* `string`

---

##### `percentTraffic`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayCanarySettings.property.percentTraffic"></a>

- *Type:* `number`

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayCanarySettings.property.stageVariableOverrides"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `useStageCache`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayCanarySettings.property.useStageCache"></a>

- *Type:* `boolean`

---

### SecurityHubAwsApiGatewayEndpointConfiguration <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayEndpointConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsApiGatewayEndpointConfiguration: securityhub.SecurityHubAwsApiGatewayEndpointConfiguration = { ... }
```

##### `types`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayEndpointConfiguration.property.types"></a>

- *Type:* `string`[]

---

### SecurityHubAwsApiGatewayMethodSettings <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsApiGatewayMethodSettings: securityhub.SecurityHubAwsApiGatewayMethodSettings = { ... }
```

##### `cacheDataEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.cacheDataEncrypted"></a>

- *Type:* `boolean`

---

##### `cacheTtlInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.cacheTtlInSeconds"></a>

- *Type:* `number`

---

##### `cachingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.cachingEnabled"></a>

- *Type:* `boolean`

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.dataTraceEnabled"></a>

- *Type:* `boolean`

---

##### `httpMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.httpMethod"></a>

- *Type:* `string`

---

##### `loggingLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.loggingLevel"></a>

- *Type:* `string`

---

##### `metricsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.metricsEnabled"></a>

- *Type:* `boolean`

---

##### `requireAuthorizationForCacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.requireAuthorizationForCacheControl"></a>

- *Type:* `boolean`

---

##### `resourcePath`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.resourcePath"></a>

- *Type:* `string`

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.throttlingBurstLimit"></a>

- *Type:* `number`

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.throttlingRateLimit"></a>

- *Type:* `number`

---

##### `unauthorizedCacheControlHeaderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings.property.unauthorizedCacheControlHeaderStrategy"></a>

- *Type:* `string`

---

### SecurityHubAwsApiGatewayRestApiDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsApiGatewayRestApiDetails: securityhub.SecurityHubAwsApiGatewayRestApiDetails = { ... }
```

##### `apiKeySource`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails.property.apiKeySource"></a>

- *Type:* `string`

---

##### `binaryMediaTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails.property.binaryMediaTypes"></a>

- *Type:* `string`[]

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails.property.description"></a>

- *Type:* `string`

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayEndpointConfiguration`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayEndpointConfiguration)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails.property.id"></a>

- *Type:* `string`

---

##### `minimumCompressionSize`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails.property.minimumCompressionSize"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails.property.version"></a>

- *Type:* `string`

---

### SecurityHubAwsApiGatewayStageDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsApiGatewayStageDetails: securityhub.SecurityHubAwsApiGatewayStageDetails = { ... }
```

##### `accessLogSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayAccessLogSettings`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayAccessLogSettings)

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.cacheClusterEnabled"></a>

- *Type:* `boolean`

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.cacheClusterSize"></a>

- *Type:* `string`

---

##### `cacheClusterStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.cacheClusterStatus"></a>

- *Type:* `string`

---

##### `canarySettings`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.canarySettings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayCanarySettings`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayCanarySettings)

---

##### `clientCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.description"></a>

- *Type:* `string`

---

##### `documentationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.documentationVersion"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `methodSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.methodSettings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayMethodSettings)[]

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.stageName"></a>

- *Type:* `string`

---

##### `tracingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.tracingEnabled"></a>

- *Type:* `boolean`

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `webAclArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails.property.webAclArn"></a>

- *Type:* `string`

---

### SecurityHubAwsApiGatewayV2ApiDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsApiGatewayV2ApiDetails: securityhub.SecurityHubAwsApiGatewayV2ApiDetails = { ... }
```

##### `apiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCorsConfiguration`](#aws-cdk-sdk.securityhub.SecurityHubAwsCorsConfiguration)

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails.property.version"></a>

- *Type:* `string`

---

### SecurityHubAwsApiGatewayV2RouteSettings <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2RouteSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsApiGatewayV2RouteSettings: securityhub.SecurityHubAwsApiGatewayV2RouteSettings = { ... }
```

##### `dataTraceEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2RouteSettings.property.dataTraceEnabled"></a>

- *Type:* `boolean`

---

##### `detailedMetricsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2RouteSettings.property.detailedMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `loggingLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2RouteSettings.property.loggingLevel"></a>

- *Type:* `string`

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2RouteSettings.property.throttlingBurstLimit"></a>

- *Type:* `number`

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2RouteSettings.property.throttlingRateLimit"></a>

- *Type:* `number`

---

### SecurityHubAwsApiGatewayV2StageDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsApiGatewayV2StageDetails: securityhub.SecurityHubAwsApiGatewayV2StageDetails = { ... }
```

##### `accessLogSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayAccessLogSettings`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayAccessLogSettings)

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `autoDeploy`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.autoDeploy"></a>

- *Type:* `boolean`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.defaultRouteSettings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2RouteSettings`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2RouteSettings)

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.description"></a>

- *Type:* `string`

---

##### `lastDeploymentStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.lastDeploymentStatusMessage"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `routeSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.routeSettings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2RouteSettings`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2RouteSettings)

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.stageName"></a>

- *Type:* `string`

---

##### `stageVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

### SecurityHubAwsAutoScalingAutoScalingGroupDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsAutoScalingAutoScalingGroupDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsAutoScalingAutoScalingGroupDetails: securityhub.SecurityHubAwsAutoScalingAutoScalingGroupDetails = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsAutoScalingAutoScalingGroupDetails.property.createdTime"></a>

- *Type:* `string`

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsAutoScalingAutoScalingGroupDetails.property.healthCheckGracePeriod"></a>

- *Type:* `number`

---

##### `healthCheckType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsAutoScalingAutoScalingGroupDetails.property.healthCheckType"></a>

- *Type:* `string`

---

##### `launchConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsAutoScalingAutoScalingGroupDetails.property.launchConfigurationName"></a>

- *Type:* `string`

---

##### `loadBalancerNames`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsAutoScalingAutoScalingGroupDetails.property.loadBalancerNames"></a>

- *Type:* `string`[]

---

### SecurityHubAwsCertificateManagerCertificateDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCertificateManagerCertificateDetails: securityhub.SecurityHubAwsCertificateManagerCertificateDetails = { ... }
```

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.createdAt"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.domainName"></a>

- *Type:* `string`

---

##### `domainValidationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.domainValidationOptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption`](#aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption)[]

---

##### `extendedKeyUsages`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.extendedKeyUsages"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage`](#aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage)[]

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.failureReason"></a>

- *Type:* `string`

---

##### `importedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.importedAt"></a>

- *Type:* `string`

---

##### `inUseBy`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.inUseBy"></a>

- *Type:* `string`[]

---

##### `issuedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.issuedAt"></a>

- *Type:* `string`

---

##### `issuer`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.issuer"></a>

- *Type:* `string`

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.keyAlgorithm"></a>

- *Type:* `string`

---

##### `keyUsages`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.keyUsages"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateKeyUsage`](#aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateKeyUsage)[]

---

##### `notAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.notBefore"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.options"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateOptions`](#aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateOptions)

---

##### `renewalEligibility`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.renewalEligibility"></a>

- *Type:* `string`

---

##### `renewalSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.renewalSummary"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateRenewalSummary`](#aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateRenewalSummary)

---

##### `serial`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.serial"></a>

- *Type:* `string`

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.signatureAlgorithm"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.status"></a>

- *Type:* `string`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.subject"></a>

- *Type:* `string`

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.subjectAlternativeNames"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails.property.type"></a>

- *Type:* `string`

---

### SecurityHubAwsCertificateManagerCertificateDomainValidationOption <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCertificateManagerCertificateDomainValidationOption: securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption.property.domainName"></a>

- *Type:* `string`

---

##### `resourceRecord`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption.property.resourceRecord"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateResourceRecord`](#aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateResourceRecord)

---

##### `validationDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption.property.validationDomain"></a>

- *Type:* `string`

---

##### `validationEmails`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption.property.validationEmails"></a>

- *Type:* `string`[]

---

##### `validationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption.property.validationMethod"></a>

- *Type:* `string`

---

##### `validationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption.property.validationStatus"></a>

- *Type:* `string`

---

### SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCertificateManagerCertificateExtendedKeyUsage: securityhub.SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage.property.name"></a>

- *Type:* `string`

---

##### `oId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage.property.oId"></a>

- *Type:* `string`

---

### SecurityHubAwsCertificateManagerCertificateKeyUsage <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateKeyUsage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCertificateManagerCertificateKeyUsage: securityhub.SecurityHubAwsCertificateManagerCertificateKeyUsage = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateKeyUsage.property.name"></a>

- *Type:* `string`

---

### SecurityHubAwsCertificateManagerCertificateOptions <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCertificateManagerCertificateOptions: securityhub.SecurityHubAwsCertificateManagerCertificateOptions = { ... }
```

##### `certificateTransparencyLoggingPreference`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateOptions.property.certificateTransparencyLoggingPreference"></a>

- *Type:* `string`

---

### SecurityHubAwsCertificateManagerCertificateRenewalSummary <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateRenewalSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCertificateManagerCertificateRenewalSummary: securityhub.SecurityHubAwsCertificateManagerCertificateRenewalSummary = { ... }
```

##### `domainValidationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateRenewalSummary.property.domainValidationOptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption`](#aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDomainValidationOption)[]

---

##### `renewalStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateRenewalSummary.property.renewalStatus"></a>

- *Type:* `string`

---

##### `renewalStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateRenewalSummary.property.renewalStatusReason"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateRenewalSummary.property.updatedAt"></a>

- *Type:* `string`

---

### SecurityHubAwsCertificateManagerCertificateResourceRecord <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateResourceRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCertificateManagerCertificateResourceRecord: securityhub.SecurityHubAwsCertificateManagerCertificateResourceRecord = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateResourceRecord.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateResourceRecord.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateResourceRecord.property.value"></a>

- *Type:* `string`

---

### SecurityHubAwsCloudFrontDistributionCacheBehavior <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionCacheBehavior"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionCacheBehavior: securityhub.SecurityHubAwsCloudFrontDistributionCacheBehavior = { ... }
```

##### `viewerProtocolPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionCacheBehavior.property.viewerProtocolPolicy"></a>

- *Type:* `string`

---

### SecurityHubAwsCloudFrontDistributionCacheBehaviors <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionCacheBehaviors"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionCacheBehaviors: securityhub.SecurityHubAwsCloudFrontDistributionCacheBehaviors = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionCacheBehaviors.property.items"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionCacheBehavior`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionCacheBehavior)[]

---

### SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionDefaultCacheBehavior: securityhub.SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior = { ... }
```

##### `viewerProtocolPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior.property.viewerProtocolPolicy"></a>

- *Type:* `string`

---

### SecurityHubAwsCloudFrontDistributionDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionDetails: securityhub.SecurityHubAwsCloudFrontDistributionDetails = { ... }
```

##### `cacheBehaviors`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.cacheBehaviors"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionCacheBehaviors`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionCacheBehaviors)

---

##### `defaultCacheBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.defaultCacheBehavior"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior)

---

##### `defaultRootObject`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.defaultRootObject"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.domainName"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.eTag"></a>

- *Type:* `string`

---

##### `lastModifiedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.lastModifiedTime"></a>

- *Type:* `string`

---

##### `logging`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.logging"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionLogging`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionLogging)

---

##### `originGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.originGroups"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroups`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroups)

---

##### `origins`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.origins"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOrigins`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOrigins)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.status"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails.property.webAclId"></a>

- *Type:* `string`

---

### SecurityHubAwsCloudFrontDistributionLogging <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionLogging"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionLogging: securityhub.SecurityHubAwsCloudFrontDistributionLogging = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionLogging.property.bucket"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionLogging.property.enabled"></a>

- *Type:* `boolean`

---

##### `includeCookies`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionLogging.property.includeCookies"></a>

- *Type:* `boolean`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionLogging.property.prefix"></a>

- *Type:* `string`

---

### SecurityHubAwsCloudFrontDistributionOriginGroup <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionOriginGroup: securityhub.SecurityHubAwsCloudFrontDistributionOriginGroup = { ... }
```

##### `failoverCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroup.property.failoverCriteria"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailover`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailover)

---

### SecurityHubAwsCloudFrontDistributionOriginGroupFailover <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailover"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionOriginGroupFailover: securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailover = { ... }
```

##### `statusCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailover.property.statusCodes"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes)

---

### SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes: securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes.property.items"></a>

- *Type:* `number`[]

---

##### `quantity`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes.property.quantity"></a>

- *Type:* `number`

---

### SecurityHubAwsCloudFrontDistributionOriginGroups <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroups"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionOriginGroups: securityhub.SecurityHubAwsCloudFrontDistributionOriginGroups = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroups.property.items"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroup`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginGroup)[]

---

### SecurityHubAwsCloudFrontDistributionOriginItem <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionOriginItem: securityhub.SecurityHubAwsCloudFrontDistributionOriginItem = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginItem.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginItem.property.id"></a>

- *Type:* `string`

---

##### `originPath`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginItem.property.originPath"></a>

- *Type:* `string`

---

##### `s3OriginConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginItem.property.s3OriginConfig"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig)

---

### SecurityHubAwsCloudFrontDistributionOrigins <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOrigins"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionOrigins: securityhub.SecurityHubAwsCloudFrontDistributionOrigins = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOrigins.property.items"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginItem`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginItem)[]

---

### SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudFrontDistributionOriginS3OriginConfig: securityhub.SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig = { ... }
```

##### `originAccessIdentity`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig.property.originAccessIdentity"></a>

- *Type:* `string`

---

### SecurityHubAwsCloudTrailTrailDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCloudTrailTrailDetails: securityhub.SecurityHubAwsCloudTrailTrailDetails = { ... }
```

##### `cloudWatchLogsLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogsRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `hasCustomEventSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.hasCustomEventSelectors"></a>

- *Type:* `boolean`

---

##### `homeRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.homeRegion"></a>

- *Type:* `string`

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.includeGlobalServiceEvents"></a>

- *Type:* `boolean`

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.isMultiRegionTrail"></a>

- *Type:* `boolean`

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.isOrganizationTrail"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `logFileValidationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.logFileValidationEnabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.name"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `snsTopicName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.snsTopicName"></a>

- *Type:* `string`

---

##### `trailArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails.property.trailArn"></a>

- *Type:* `string`

---

### SecurityHubAwsCodeBuildProjectDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCodeBuildProjectDetails: securityhub.SecurityHubAwsCodeBuildProjectDetails = { ... }
```

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectDetails.property.encryptionKey"></a>

- *Type:* `string`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectDetails.property.environment"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironment`](#aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironment)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectDetails.property.name"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectDetails.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectDetails.property.source"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectSource`](#aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectSource)

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectDetails.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectVpcConfig`](#aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectVpcConfig)

---

### SecurityHubAwsCodeBuildProjectEnvironment <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCodeBuildProjectEnvironment: securityhub.SecurityHubAwsCodeBuildProjectEnvironment = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironment.property.certificate"></a>

- *Type:* `string`

---

##### `imagePullCredentialsType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironment.property.imagePullCredentialsType"></a>

- *Type:* `string`

---

##### `registryCredential`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironment.property.registryCredential"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential`](#aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironment.property.type"></a>

- *Type:* `string`

---

### SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCodeBuildProjectEnvironmentRegistryCredential: securityhub.SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential = { ... }
```

##### `credential`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential.property.credential"></a>

- *Type:* `string`

---

##### `credentialProvider`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential.property.credentialProvider"></a>

- *Type:* `string`

---

### SecurityHubAwsCodeBuildProjectSource <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCodeBuildProjectSource: securityhub.SecurityHubAwsCodeBuildProjectSource = { ... }
```

##### `gitCloneDepth`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectSource.property.gitCloneDepth"></a>

- *Type:* `number`

---

##### `insecureSsl`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectSource.property.insecureSsl"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectSource.property.location"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectSource.property.type"></a>

- *Type:* `string`

---

### SecurityHubAwsCodeBuildProjectVpcConfig <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectVpcConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCodeBuildProjectVpcConfig: securityhub.SecurityHubAwsCodeBuildProjectVpcConfig = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectVpcConfig.property.vpcId"></a>

- *Type:* `string`

---

### SecurityHubAwsCorsConfiguration <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCorsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsCorsConfiguration: securityhub.SecurityHubAwsCorsConfiguration = { ... }
```

##### `allowCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCorsConfiguration.property.allowCredentials"></a>

- *Type:* `boolean`

---

##### `allowHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCorsConfiguration.property.allowHeaders"></a>

- *Type:* `string`[]

---

##### `allowMethods`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCorsConfiguration.property.allowMethods"></a>

- *Type:* `string`[]

---

##### `allowOrigins`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCorsConfiguration.property.allowOrigins"></a>

- *Type:* `string`[]

---

##### `exposeHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCorsConfiguration.property.exposeHeaders"></a>

- *Type:* `string`[]

---

##### `maxAge`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsCorsConfiguration.property.maxAge"></a>

- *Type:* `number`

---

### SecurityHubAwsDynamoDbTableAttributeDefinition <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableAttributeDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableAttributeDefinition: securityhub.SecurityHubAwsDynamoDbTableAttributeDefinition = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableAttributeDefinition.property.attributeName"></a>

- *Type:* `string`

---

##### `attributeType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableAttributeDefinition.property.attributeType"></a>

- *Type:* `string`

---

### SecurityHubAwsDynamoDbTableBillingModeSummary <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableBillingModeSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableBillingModeSummary: securityhub.SecurityHubAwsDynamoDbTableBillingModeSummary = { ... }
```

##### `billingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableBillingModeSummary.property.billingMode"></a>

- *Type:* `string`

---

##### `lastUpdateToPayPerRequestDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableBillingModeSummary.property.lastUpdateToPayPerRequestDateTime"></a>

- *Type:* `string`

---

### SecurityHubAwsDynamoDbTableDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableDetails: securityhub.SecurityHubAwsDynamoDbTableDetails = { ... }
```

##### `attributeDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.attributeDefinitions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableAttributeDefinition`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableAttributeDefinition)[]

---

##### `billingModeSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.billingModeSummary"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableBillingModeSummary`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableBillingModeSummary)

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex)[]

---

##### `globalTableVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.globalTableVersion"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableKeySchema`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableKeySchema)[]

---

##### `latestStreamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.latestStreamArn"></a>

- *Type:* `string`

---

##### `latestStreamLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.latestStreamLabel"></a>

- *Type:* `string`

---

##### `localSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableLocalSecondaryIndex`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableLocalSecondaryIndex)[]

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput)

---

##### `replicas`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplica`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplica)[]

---

##### `restoreSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.restoreSummary"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableRestoreSummary`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableRestoreSummary)

---

##### `sseDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableSseDescription`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableSseDescription)

---

##### `streamSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.streamSpecification"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableStreamSpecification`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableStreamSpecification)

---

##### `tableId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.tableName"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.tableSizeBytes"></a>

- *Type:* `number`

---

##### `tableStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails.property.tableStatus"></a>

- *Type:* `string`

---

### SecurityHubAwsDynamoDbTableGlobalSecondaryIndex <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableGlobalSecondaryIndex: securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex = { ... }
```

##### `backfilling`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex.property.backfilling"></a>

- *Type:* `boolean`

---

##### `indexArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex.property.indexArn"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex.property.indexName"></a>

- *Type:* `string`

---

##### `indexSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex.property.indexSizeBytes"></a>

- *Type:* `number`

---

##### `indexStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex.property.indexStatus"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableKeySchema`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableKeySchema)[]

---

##### `projection`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex.property.projection"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProjection`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProjection)

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableGlobalSecondaryIndex.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput)

---

### SecurityHubAwsDynamoDbTableKeySchema <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableKeySchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableKeySchema: securityhub.SecurityHubAwsDynamoDbTableKeySchema = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableKeySchema.property.attributeName"></a>

- *Type:* `string`

---

##### `keyType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableKeySchema.property.keyType"></a>

- *Type:* `string`

---

### SecurityHubAwsDynamoDbTableLocalSecondaryIndex <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableLocalSecondaryIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableLocalSecondaryIndex: securityhub.SecurityHubAwsDynamoDbTableLocalSecondaryIndex = { ... }
```

##### `indexArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableLocalSecondaryIndex.property.indexArn"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableLocalSecondaryIndex.property.indexName"></a>

- *Type:* `string`

---

##### `keySchema`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableLocalSecondaryIndex.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableKeySchema`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableKeySchema)[]

---

##### `projection`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableLocalSecondaryIndex.property.projection"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProjection`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProjection)

---

### SecurityHubAwsDynamoDbTableProjection <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProjection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableProjection: securityhub.SecurityHubAwsDynamoDbTableProjection = { ... }
```

##### `nonKeyAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProjection.property.nonKeyAttributes"></a>

- *Type:* `string`[]

---

##### `projectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProjection.property.projectionType"></a>

- *Type:* `string`

---

### SecurityHubAwsDynamoDbTableProvisionedThroughput <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableProvisionedThroughput: securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput = { ... }
```

##### `lastDecreaseDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput.property.lastDecreaseDateTime"></a>

- *Type:* `string`

---

##### `lastIncreaseDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput.property.lastIncreaseDateTime"></a>

- *Type:* `string`

---

##### `numberOfDecreasesToday`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput.property.numberOfDecreasesToday"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughput.property.writeCapacityUnits"></a>

- *Type:* `number`

---

### SecurityHubAwsDynamoDbTableProvisionedThroughputOverride <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughputOverride"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableProvisionedThroughputOverride: securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughputOverride = { ... }
```

##### `readCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughputOverride.property.readCapacityUnits"></a>

- *Type:* `number`

---

### SecurityHubAwsDynamoDbTableReplica <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplica"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableReplica: securityhub.SecurityHubAwsDynamoDbTableReplica = { ... }
```

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplica.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex)[]

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplica.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

##### `provisionedThroughputOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplica.property.provisionedThroughputOverride"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughputOverride`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughputOverride)

---

##### `regionName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplica.property.regionName"></a>

- *Type:* `string`

---

##### `replicaStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplica.property.replicaStatus"></a>

- *Type:* `string`

---

##### `replicaStatusDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplica.property.replicaStatusDescription"></a>

- *Type:* `string`

---

### SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex: securityhub.SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex = { ... }
```

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex.property.indexName"></a>

- *Type:* `string`

---

##### `provisionedThroughputOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex.property.provisionedThroughputOverride"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughputOverride`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableProvisionedThroughputOverride)

---

### SecurityHubAwsDynamoDbTableRestoreSummary <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableRestoreSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableRestoreSummary: securityhub.SecurityHubAwsDynamoDbTableRestoreSummary = { ... }
```

##### `restoreDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableRestoreSummary.property.restoreDateTime"></a>

- *Type:* `string`

---

##### `restoreInProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableRestoreSummary.property.restoreInProgress"></a>

- *Type:* `boolean`

---

##### `sourceBackupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableRestoreSummary.property.sourceBackupArn"></a>

- *Type:* `string`

---

##### `sourceTableArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableRestoreSummary.property.sourceTableArn"></a>

- *Type:* `string`

---

### SecurityHubAwsDynamoDbTableSseDescription <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableSseDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableSseDescription: securityhub.SecurityHubAwsDynamoDbTableSseDescription = { ... }
```

##### `inaccessibleEncryptionDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableSseDescription.property.inaccessibleEncryptionDateTime"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableSseDescription.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

##### `sseType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableSseDescription.property.sseType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableSseDescription.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsDynamoDbTableStreamSpecification <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableStreamSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsDynamoDbTableStreamSpecification: securityhub.SecurityHubAwsDynamoDbTableStreamSpecification = { ... }
```

##### `streamEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableStreamSpecification.property.streamEnabled"></a>

- *Type:* `boolean`

---

##### `streamViewType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableStreamSpecification.property.streamViewType"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2EipDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2EipDetails: securityhub.SecurityHubAwsEc2EipDetails = { ... }
```

##### `allocationId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails.property.allocationId"></a>

- *Type:* `string`

---

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails.property.associationId"></a>

- *Type:* `string`

---

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails.property.domain"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails.property.instanceId"></a>

- *Type:* `string`

---

##### `networkBorderGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails.property.networkBorderGroup"></a>

- *Type:* `string`

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `networkInterfaceOwnerId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails.property.networkInterfaceOwnerId"></a>

- *Type:* `string`

---

##### `privateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails.property.privateIpAddress"></a>

- *Type:* `string`

---

##### `publicIp`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails.property.publicIp"></a>

- *Type:* `string`

---

##### `publicIpv4Pool`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails.property.publicIpv4Pool"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2InstanceDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2InstanceDetails: securityhub.SecurityHubAwsEc2InstanceDetails = { ... }
```

##### `iamInstanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails.property.iamInstanceProfileArn"></a>

- *Type:* `string`

---

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails.property.imageId"></a>

- *Type:* `string`

---

##### `ipV4Addresses`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails.property.ipV4Addresses"></a>

- *Type:* `string`[]

---

##### `ipV6Addresses`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails.property.ipV6Addresses"></a>

- *Type:* `string`[]

---

##### `keyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails.property.keyName"></a>

- *Type:* `string`

---

##### `launchedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails.property.launchedAt"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails.property.subnetId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails.property.type"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails.property.vpcId"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2NetworkInterfaceAttachment <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2NetworkInterfaceAttachment: securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment = { ... }
```

##### `attachmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment.property.attachmentId"></a>

- *Type:* `string`

---

##### `attachTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment.property.attachTime"></a>

- *Type:* `string`

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment.property.deleteOnTermination"></a>

- *Type:* `boolean`

---

##### `deviceIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment.property.deviceIndex"></a>

- *Type:* `number`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment.property.instanceId"></a>

- *Type:* `string`

---

##### `instanceOwnerId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment.property.instanceOwnerId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2NetworkInterfaceDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2NetworkInterfaceDetails: securityhub.SecurityHubAwsEc2NetworkInterfaceDetails = { ... }
```

##### `attachment`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceDetails.property.attachment"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceAttachment)

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceDetails.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceDetails.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceSecurityGroup`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceSecurityGroup)[]

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceDetails.property.sourceDestCheck"></a>

- *Type:* `boolean`

---

### SecurityHubAwsEc2NetworkInterfaceSecurityGroup <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceSecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2NetworkInterfaceSecurityGroup: securityhub.SecurityHubAwsEc2NetworkInterfaceSecurityGroup = { ... }
```

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceSecurityGroup.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceSecurityGroup.property.groupName"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2SecurityGroupDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2SecurityGroupDetails: securityhub.SecurityHubAwsEc2SecurityGroupDetails = { ... }
```

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupDetails.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupDetails.property.groupName"></a>

- *Type:* `string`

---

##### `ipPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupDetails.property.ipPermissions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission)[]

---

##### `ipPermissionsEgress`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupDetails.property.ipPermissionsEgress"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission)[]

---

##### `ownerId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupDetails.property.ownerId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupDetails.property.vpcId"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2SecurityGroupIpPermission <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2SecurityGroupIpPermission: securityhub.SecurityHubAwsEc2SecurityGroupIpPermission = { ... }
```

##### `fromPort`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission.property.fromPort"></a>

- *Type:* `number`

---

##### `ipProtocol`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission.property.ipProtocol"></a>

- *Type:* `string`

---

##### `ipRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission.property.ipRanges"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpRange`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpRange)[]

---

##### `ipv6Ranges`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission.property.ipv6Ranges"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpv6Range`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpv6Range)[]

---

##### `prefixListIds`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission.property.prefixListIds"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupPrefixListId`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupPrefixListId)[]

---

##### `toPort`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission.property.toPort"></a>

- *Type:* `number`

---

##### `userIdGroupPairs`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpPermission.property.userIdGroupPairs"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupUserIdGroupPair`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupUserIdGroupPair)[]

---

### SecurityHubAwsEc2SecurityGroupIpRange <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2SecurityGroupIpRange: securityhub.SecurityHubAwsEc2SecurityGroupIpRange = { ... }
```

##### `cidrIp`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpRange.property.cidrIp"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2SecurityGroupIpv6Range <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpv6Range"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2SecurityGroupIpv6Range: securityhub.SecurityHubAwsEc2SecurityGroupIpv6Range = { ... }
```

##### `cidrIpv6`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupIpv6Range.property.cidrIpv6"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2SecurityGroupPrefixListId <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupPrefixListId"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2SecurityGroupPrefixListId: securityhub.SecurityHubAwsEc2SecurityGroupPrefixListId = { ... }
```

##### `prefixListId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupPrefixListId.property.prefixListId"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2SecurityGroupUserIdGroupPair <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupUserIdGroupPair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2SecurityGroupUserIdGroupPair: securityhub.SecurityHubAwsEc2SecurityGroupUserIdGroupPair = { ... }
```

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupUserIdGroupPair.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupUserIdGroupPair.property.groupName"></a>

- *Type:* `string`

---

##### `peeringStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupUserIdGroupPair.property.peeringStatus"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupUserIdGroupPair.property.userId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupUserIdGroupPair.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcPeeringConnectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupUserIdGroupPair.property.vpcPeeringConnectionId"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2VolumeAttachment <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeAttachment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2VolumeAttachment: securityhub.SecurityHubAwsEc2VolumeAttachment = { ... }
```

##### `attachTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeAttachment.property.attachTime"></a>

- *Type:* `string`

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeAttachment.property.deleteOnTermination"></a>

- *Type:* `boolean`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeAttachment.property.instanceId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeAttachment.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2VolumeDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2VolumeDetails: securityhub.SecurityHubAwsEc2VolumeDetails = { ... }
```

##### `attachments`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeDetails.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeAttachment`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeAttachment)[]

---

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeDetails.property.createTime"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeDetails.property.encrypted"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeDetails.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeDetails.property.size"></a>

- *Type:* `number`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeDetails.property.snapshotId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeDetails.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsEc2VpcDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VpcDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsEc2VpcDetails: securityhub.SecurityHubAwsEc2VpcDetails = { ... }
```

##### `cidrBlockAssociationSet`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VpcDetails.property.cidrBlockAssociationSet"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubCidrBlockAssociation`](#aws-cdk-sdk.securityhub.SecurityHubCidrBlockAssociation)[]

---

##### `dhcpOptionsId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VpcDetails.property.dhcpOptionsId"></a>

- *Type:* `string`

---

##### `ipv6CidrBlockAssociationSet`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VpcDetails.property.ipv6CidrBlockAssociationSet"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubIpv6CidrBlockAssociation`](#aws-cdk-sdk.securityhub.SecurityHubIpv6CidrBlockAssociation)[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsEc2VpcDetails.property.state"></a>

- *Type:* `string`

---

### SecurityHubAwsElasticsearchDomainDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElasticsearchDomainDetails: securityhub.SecurityHubAwsElasticsearchDomainDetails = { ... }
```

##### `accessPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails.property.accessPolicies"></a>

- *Type:* `string`

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDomainEndpointOptions`](#aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDomainEndpointOptions)

---

##### `domainId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails.property.domainId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails.property.domainName"></a>

- *Type:* `string`

---

##### `elasticsearchVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails.property.elasticsearchVersion"></a>

- *Type:* `string`

---

##### `encryptionAtRestOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails.property.encryptionAtRestOptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions`](#aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions)

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails.property.endpoint"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails.property.endpoints"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `nodeToNodeEncryptionOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails.property.nodeToNodeEncryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions`](#aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions)

---

##### `vpcOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails.property.vpcOptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainVpcOptions`](#aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainVpcOptions)

---

### SecurityHubAwsElasticsearchDomainDomainEndpointOptions <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDomainEndpointOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElasticsearchDomainDomainEndpointOptions: securityhub.SecurityHubAwsElasticsearchDomainDomainEndpointOptions = { ... }
```

##### `enforceHttps`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDomainEndpointOptions.property.enforceHttps"></a>

- *Type:* `boolean`

---

##### `tlsSecurityPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

- *Type:* `string`

---

### SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElasticsearchDomainEncryptionAtRestOptions: securityhub.SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions.property.kmsKeyId"></a>

- *Type:* `string`

---

### SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions: securityhub.SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions.property.enabled"></a>

- *Type:* `boolean`

---

### SecurityHubAwsElasticsearchDomainVpcOptions <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainVpcOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElasticsearchDomainVpcOptions: securityhub.SecurityHubAwsElasticsearchDomainVpcOptions = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainVpcOptions.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainVpcOptions.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainVpcOptions.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainVpcOptions.property.vpcId"></a>

- *Type:* `string`

---

### SecurityHubAwsElbAppCookieStickinessPolicy <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbAppCookieStickinessPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbAppCookieStickinessPolicy: securityhub.SecurityHubAwsElbAppCookieStickinessPolicy = { ... }
```

##### `cookieName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbAppCookieStickinessPolicy.property.cookieName"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbAppCookieStickinessPolicy.property.policyName"></a>

- *Type:* `string`

---

### SecurityHubAwsElbLbCookieStickinessPolicy <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLbCookieStickinessPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLbCookieStickinessPolicy: securityhub.SecurityHubAwsElbLbCookieStickinessPolicy = { ... }
```

##### `cookieExpirationPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLbCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

- *Type:* `number`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLbCookieStickinessPolicy.property.policyName"></a>

- *Type:* `string`

---

### SecurityHubAwsElbLoadBalancerAccessLog <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAccessLog"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerAccessLog: securityhub.SecurityHubAwsElbLoadBalancerAccessLog = { ... }
```

##### `emitInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAccessLog.property.emitInterval"></a>

- *Type:* `number`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAccessLog.property.enabled"></a>

- *Type:* `boolean`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAccessLog.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3BucketPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAccessLog.property.s3BucketPrefix"></a>

- *Type:* `string`

---

### SecurityHubAwsElbLoadBalancerAttributes <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerAttributes: securityhub.SecurityHubAwsElbLoadBalancerAttributes = { ... }
```

##### `accessLog`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAttributes.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAccessLog`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAccessLog)

---

##### `connectionDraining`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAttributes.property.connectionDraining"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerConnectionDraining`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerConnectionDraining)

---

##### `connectionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAttributes.property.connectionSettings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerConnectionSettings`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerConnectionSettings)

---

##### `crossZoneLoadBalancing`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAttributes.property.crossZoneLoadBalancing"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing)

---

### SecurityHubAwsElbLoadBalancerBackendServerDescription <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerBackendServerDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerBackendServerDescription: securityhub.SecurityHubAwsElbLoadBalancerBackendServerDescription = { ... }
```

##### `instancePort`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerBackendServerDescription.property.instancePort"></a>

- *Type:* `number`

---

##### `policyNames`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerBackendServerDescription.property.policyNames"></a>

- *Type:* `string`[]

---

### SecurityHubAwsElbLoadBalancerConnectionDraining <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerConnectionDraining"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerConnectionDraining: securityhub.SecurityHubAwsElbLoadBalancerConnectionDraining = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerConnectionDraining.property.enabled"></a>

- *Type:* `boolean`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerConnectionDraining.property.timeout"></a>

- *Type:* `number`

---

### SecurityHubAwsElbLoadBalancerConnectionSettings <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerConnectionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerConnectionSettings: securityhub.SecurityHubAwsElbLoadBalancerConnectionSettings = { ... }
```

##### `idleTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerConnectionSettings.property.idleTimeout"></a>

- *Type:* `number`

---

### SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerCrossZoneLoadBalancing: securityhub.SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing.property.enabled"></a>

- *Type:* `boolean`

---

### SecurityHubAwsElbLoadBalancerDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerDetails: securityhub.SecurityHubAwsElbLoadBalancerDetails = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backendServerDescriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.backendServerDescriptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerBackendServerDescription`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerBackendServerDescription)[]

---

##### `canonicalHostedZoneName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.canonicalHostedZoneName"></a>

- *Type:* `string`

---

##### `canonicalHostedZoneNameId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.canonicalHostedZoneNameId"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.createdTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.dnsName"></a>

- *Type:* `string`

---

##### `healthCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerHealthCheck`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerHealthCheck)

---

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.instances"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerInstance`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerInstance)[]

---

##### `listenerDescriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.listenerDescriptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListenerDescription`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListenerDescription)[]

---

##### `loadBalancerAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.loadBalancerAttributes"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAttributes`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerAttributes)

---

##### `loadBalancerName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.loadBalancerName"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.policies"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerPolicies`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerPolicies)

---

##### `scheme`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.scheme"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `sourceSecurityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.sourceSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerSourceSecurityGroup`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerSourceSecurityGroup)

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails.property.vpcId"></a>

- *Type:* `string`

---

### SecurityHubAwsElbLoadBalancerHealthCheck <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerHealthCheck"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerHealthCheck: securityhub.SecurityHubAwsElbLoadBalancerHealthCheck = { ... }
```

##### `healthyThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerHealthCheck.property.healthyThreshold"></a>

- *Type:* `number`

---

##### `interval`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerHealthCheck.property.interval"></a>

- *Type:* `number`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerHealthCheck.property.target"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerHealthCheck.property.timeout"></a>

- *Type:* `number`

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerHealthCheck.property.unhealthyThreshold"></a>

- *Type:* `number`

---

### SecurityHubAwsElbLoadBalancerInstance <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerInstance: securityhub.SecurityHubAwsElbLoadBalancerInstance = { ... }
```

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerInstance.property.instanceId"></a>

- *Type:* `string`

---

### SecurityHubAwsElbLoadBalancerListener <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListener"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerListener: securityhub.SecurityHubAwsElbLoadBalancerListener = { ... }
```

##### `instancePort`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListener.property.instancePort"></a>

- *Type:* `number`

---

##### `instanceProtocol`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListener.property.instanceProtocol"></a>

- *Type:* `string`

---

##### `loadBalancerPort`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListener.property.loadBalancerPort"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListener.property.protocol"></a>

- *Type:* `string`

---

##### `sslCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListener.property.sslCertificateId"></a>

- *Type:* `string`

---

### SecurityHubAwsElbLoadBalancerListenerDescription <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListenerDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerListenerDescription: securityhub.SecurityHubAwsElbLoadBalancerListenerDescription = { ... }
```

##### `listener`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListenerDescription.property.listener"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListener`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListener)

---

##### `policyNames`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerListenerDescription.property.policyNames"></a>

- *Type:* `string`[]

---

### SecurityHubAwsElbLoadBalancerPolicies <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerPolicies"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerPolicies: securityhub.SecurityHubAwsElbLoadBalancerPolicies = { ... }
```

##### `appCookieStickinessPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerPolicies.property.appCookieStickinessPolicies"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbAppCookieStickinessPolicy`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbAppCookieStickinessPolicy)[]

---

##### `lbCookieStickinessPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerPolicies.property.lbCookieStickinessPolicies"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLbCookieStickinessPolicy`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLbCookieStickinessPolicy)[]

---

##### `otherPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerPolicies.property.otherPolicies"></a>

- *Type:* `string`[]

---

### SecurityHubAwsElbLoadBalancerSourceSecurityGroup <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerSourceSecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbLoadBalancerSourceSecurityGroup: securityhub.SecurityHubAwsElbLoadBalancerSourceSecurityGroup = { ... }
```

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerSourceSecurityGroup.property.groupName"></a>

- *Type:* `string`

---

##### `ownerAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerSourceSecurityGroup.property.ownerAlias"></a>

- *Type:* `string`

---

### SecurityHubAwsElbv2LoadBalancerDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsElbv2LoadBalancerDetails: securityhub.SecurityHubAwsElbv2LoadBalancerDetails = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails.property.availabilityZones"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAvailabilityZone`](#aws-cdk-sdk.securityhub.SecurityHubAvailabilityZone)[]

---

##### `canonicalHostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails.property.canonicalHostedZoneId"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails.property.createdTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails.property.dnsName"></a>

- *Type:* `string`

---

##### `ipAddressType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails.property.ipAddressType"></a>

- *Type:* `string`

---

##### `scheme`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails.property.scheme"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails.property.state"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubLoadBalancerState`](#aws-cdk-sdk.securityhub.SecurityHubLoadBalancerState)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails.property.type"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails.property.vpcId"></a>

- *Type:* `string`

---

### SecurityHubAwsIamAccessKeyDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamAccessKeyDetails: securityhub.SecurityHubAwsIamAccessKeyDetails = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails.property.accessKeyId"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails.property.accountId"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails.property.createdAt"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails.property.principalId"></a>

- *Type:* `string`

---

##### `principalName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails.property.principalName"></a>

- *Type:* `string`

---

##### `principalType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails.property.principalType"></a>

- *Type:* `string`

---

##### `sessionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails.property.sessionContext"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContext`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContext)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails.property.userName"></a>

- *Type:* `string`

---

### SecurityHubAwsIamAccessKeySessionContext <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamAccessKeySessionContext: securityhub.SecurityHubAwsIamAccessKeySessionContext = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContext.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextAttributes`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextAttributes)

---

##### `sessionIssuer`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContext.property.sessionIssuer"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextSessionIssuer`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextSessionIssuer)

---

### SecurityHubAwsIamAccessKeySessionContextAttributes <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamAccessKeySessionContextAttributes: securityhub.SecurityHubAwsIamAccessKeySessionContextAttributes = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextAttributes.property.creationDate"></a>

- *Type:* `string`

---

##### `mfaAuthenticated`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextAttributes.property.mfaAuthenticated"></a>

- *Type:* `boolean`

---

### SecurityHubAwsIamAccessKeySessionContextSessionIssuer <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextSessionIssuer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamAccessKeySessionContextSessionIssuer: securityhub.SecurityHubAwsIamAccessKeySessionContextSessionIssuer = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextSessionIssuer.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextSessionIssuer.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextSessionIssuer.property.principalId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextSessionIssuer.property.type"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeySessionContextSessionIssuer.property.userName"></a>

- *Type:* `string`

---

### SecurityHubAwsIamAttachedManagedPolicy <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAttachedManagedPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamAttachedManagedPolicy: securityhub.SecurityHubAwsIamAttachedManagedPolicy = { ... }
```

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAttachedManagedPolicy.property.policyArn"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamAttachedManagedPolicy.property.policyName"></a>

- *Type:* `string`

---

### SecurityHubAwsIamGroupDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamGroupDetails: securityhub.SecurityHubAwsIamGroupDetails = { ... }
```

##### `attachedManagedPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupDetails.property.attachedManagedPolicies"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamAttachedManagedPolicy`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamAttachedManagedPolicy)[]

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupDetails.property.createDate"></a>

- *Type:* `string`

---

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupDetails.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupDetails.property.groupName"></a>

- *Type:* `string`

---

##### `groupPolicyList`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupDetails.property.groupPolicyList"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupPolicy`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupPolicy)[]

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupDetails.property.path"></a>

- *Type:* `string`

---

### SecurityHubAwsIamGroupPolicy <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamGroupPolicy: securityhub.SecurityHubAwsIamGroupPolicy = { ... }
```

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupPolicy.property.policyName"></a>

- *Type:* `string`

---

### SecurityHubAwsIamInstanceProfile <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamInstanceProfile: securityhub.SecurityHubAwsIamInstanceProfile = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfile.property.createDate"></a>

- *Type:* `string`

---

##### `instanceProfileId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfile.property.instanceProfileId"></a>

- *Type:* `string`

---

##### `instanceProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfile.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfile.property.path"></a>

- *Type:* `string`

---

##### `roles`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfile.property.roles"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfileRole`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfileRole)[]

---

### SecurityHubAwsIamInstanceProfileRole <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfileRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamInstanceProfileRole: securityhub.SecurityHubAwsIamInstanceProfileRole = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfileRole.property.arn"></a>

- *Type:* `string`

---

##### `assumeRolePolicyDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfileRole.property.assumeRolePolicyDocument"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfileRole.property.createDate"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfileRole.property.path"></a>

- *Type:* `string`

---

##### `roleId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfileRole.property.roleId"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfileRole.property.roleName"></a>

- *Type:* `string`

---

### SecurityHubAwsIamPermissionsBoundary <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPermissionsBoundary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamPermissionsBoundary: securityhub.SecurityHubAwsIamPermissionsBoundary = { ... }
```

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPermissionsBoundary.property.permissionsBoundaryArn"></a>

- *Type:* `string`

---

##### `permissionsBoundaryType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPermissionsBoundary.property.permissionsBoundaryType"></a>

- *Type:* `string`

---

### SecurityHubAwsIamPolicyDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamPolicyDetails: securityhub.SecurityHubAwsIamPolicyDetails = { ... }
```

##### `attachmentCount`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.attachmentCount"></a>

- *Type:* `number`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.createDate"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.defaultVersionId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.description"></a>

- *Type:* `string`

---

##### `isAttachable`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.isAttachable"></a>

- *Type:* `boolean`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundaryUsageCount`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.permissionsBoundaryUsageCount"></a>

- *Type:* `number`

---

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.policyId"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionList`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.policyVersionList"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyVersion`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyVersion)[]

---

##### `updateDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails.property.updateDate"></a>

- *Type:* `string`

---

### SecurityHubAwsIamPolicyVersion <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamPolicyVersion: securityhub.SecurityHubAwsIamPolicyVersion = { ... }
```

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyVersion.property.createDate"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyVersion.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyVersion.property.versionId"></a>

- *Type:* `string`

---

### SecurityHubAwsIamRoleDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamRoleDetails: securityhub.SecurityHubAwsIamRoleDetails = { ... }
```

##### `assumeRolePolicyDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails.property.assumeRolePolicyDocument"></a>

- *Type:* `string`

---

##### `attachedManagedPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails.property.attachedManagedPolicies"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamAttachedManagedPolicy`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamAttachedManagedPolicy)[]

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails.property.createDate"></a>

- *Type:* `string`

---

##### `instanceProfileList`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails.property.instanceProfileList"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfile`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamInstanceProfile)[]

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails.property.maxSessionDuration"></a>

- *Type:* `number`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamPermissionsBoundary`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamPermissionsBoundary)

---

##### `roleId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails.property.roleId"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails.property.roleName"></a>

- *Type:* `string`

---

##### `rolePolicyList`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails.property.rolePolicyList"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamRolePolicy`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamRolePolicy)[]

---

### SecurityHubAwsIamRolePolicy <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRolePolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamRolePolicy: securityhub.SecurityHubAwsIamRolePolicy = { ... }
```

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamRolePolicy.property.policyName"></a>

- *Type:* `string`

---

### SecurityHubAwsIamUserDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamUserDetails: securityhub.SecurityHubAwsIamUserDetails = { ... }
```

##### `attachedManagedPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails.property.attachedManagedPolicies"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamAttachedManagedPolicy`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamAttachedManagedPolicy)[]

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails.property.createDate"></a>

- *Type:* `string`

---

##### `groupList`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails.property.groupList"></a>

- *Type:* `string`[]

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails.property.path"></a>

- *Type:* `string`

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails.property.permissionsBoundary"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamPermissionsBoundary`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamPermissionsBoundary)

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails.property.userName"></a>

- *Type:* `string`

---

##### `userPolicyList`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails.property.userPolicyList"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamUserPolicy`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamUserPolicy)[]

---

### SecurityHubAwsIamUserPolicy <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsIamUserPolicy: securityhub.SecurityHubAwsIamUserPolicy = { ... }
```

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsIamUserPolicy.property.policyName"></a>

- *Type:* `string`

---

### SecurityHubAwsKmsKeyDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsKmsKeyDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsKmsKeyDetails: securityhub.SecurityHubAwsKmsKeyDetails = { ... }
```

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsKmsKeyDetails.property.awsAccountId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsKmsKeyDetails.property.creationDate"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsKmsKeyDetails.property.description"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsKmsKeyDetails.property.keyId"></a>

- *Type:* `string`

---

##### `keyManager`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsKmsKeyDetails.property.keyManager"></a>

- *Type:* `string`

---

##### `keyState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsKmsKeyDetails.property.keyState"></a>

- *Type:* `string`

---

##### `origin`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsKmsKeyDetails.property.origin"></a>

- *Type:* `string`

---

### SecurityHubAwsLambdaFunctionCode <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionCode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsLambdaFunctionCode: securityhub.SecurityHubAwsLambdaFunctionCode = { ... }
```

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionCode.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionCode.property.s3Key"></a>

- *Type:* `string`

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionCode.property.s3ObjectVersion"></a>

- *Type:* `string`

---

##### `zipFile`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionCode.property.zipFile"></a>

- *Type:* `string`

---

### SecurityHubAwsLambdaFunctionDeadLetterConfig <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDeadLetterConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsLambdaFunctionDeadLetterConfig: securityhub.SecurityHubAwsLambdaFunctionDeadLetterConfig = { ... }
```

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDeadLetterConfig.property.targetArn"></a>

- *Type:* `string`

---

### SecurityHubAwsLambdaFunctionDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsLambdaFunctionDetails: securityhub.SecurityHubAwsLambdaFunctionDetails = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.code"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionCode`](#aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionCode)

---

##### `codeSha256`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.codeSha256"></a>

- *Type:* `string`

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.deadLetterConfig"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDeadLetterConfig`](#aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDeadLetterConfig)

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.environment"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionEnvironment`](#aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionEnvironment)

---

##### `functionName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.functionName"></a>

- *Type:* `string`

---

##### `handler`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.handler"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.lastModified"></a>

- *Type:* `string`

---

##### `layers`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.layers"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionLayer`](#aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionLayer)[]

---

##### `masterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.masterArn"></a>

- *Type:* `string`

---

##### `memorySize`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.memorySize"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.revisionId"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.role"></a>

- *Type:* `string`

---

##### `runtime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.runtime"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.timeout"></a>

- *Type:* `number`

---

##### `tracingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.tracingConfig"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionTracingConfig`](#aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionTracingConfig)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.version"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionVpcConfig`](#aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionVpcConfig)

---

### SecurityHubAwsLambdaFunctionEnvironment <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionEnvironment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsLambdaFunctionEnvironment: securityhub.SecurityHubAwsLambdaFunctionEnvironment = { ... }
```

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionEnvironment.property.error"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionEnvironmentError`](#aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionEnvironmentError)

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionEnvironment.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

### SecurityHubAwsLambdaFunctionEnvironmentError <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionEnvironmentError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsLambdaFunctionEnvironmentError: securityhub.SecurityHubAwsLambdaFunctionEnvironmentError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionEnvironmentError.property.errorCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionEnvironmentError.property.message"></a>

- *Type:* `string`

---

### SecurityHubAwsLambdaFunctionLayer <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionLayer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsLambdaFunctionLayer: securityhub.SecurityHubAwsLambdaFunctionLayer = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionLayer.property.arn"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionLayer.property.codeSize"></a>

- *Type:* `number`

---

### SecurityHubAwsLambdaFunctionTracingConfig <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionTracingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsLambdaFunctionTracingConfig: securityhub.SecurityHubAwsLambdaFunctionTracingConfig = { ... }
```

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionTracingConfig.property.mode"></a>

- *Type:* `string`

---

### SecurityHubAwsLambdaFunctionVpcConfig <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionVpcConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsLambdaFunctionVpcConfig: securityhub.SecurityHubAwsLambdaFunctionVpcConfig = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionVpcConfig.property.vpcId"></a>

- *Type:* `string`

---

### SecurityHubAwsLambdaLayerVersionDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaLayerVersionDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsLambdaLayerVersionDetails: securityhub.SecurityHubAwsLambdaLayerVersionDetails = { ... }
```

##### `compatibleRuntimes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaLayerVersionDetails.property.compatibleRuntimes"></a>

- *Type:* `string`[]

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaLayerVersionDetails.property.createdDate"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsLambdaLayerVersionDetails.property.version"></a>

- *Type:* `number`

---

### SecurityHubAwsRdsDbClusterAssociatedRole <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterAssociatedRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbClusterAssociatedRole: securityhub.SecurityHubAwsRdsDbClusterAssociatedRole = { ... }
```

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterAssociatedRole.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterAssociatedRole.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbClusterDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbClusterDetails: securityhub.SecurityHubAwsRdsDbClusterDetails = { ... }
```

##### `activityStreamStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.activityStreamStatus"></a>

- *Type:* `string`

---

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterAssociatedRole`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterAssociatedRole)[]

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.copyTagsToSnapshot"></a>

- *Type:* `boolean`

---

##### `crossAccountClone`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.crossAccountClone"></a>

- *Type:* `boolean`

---

##### `customEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.customEndpoints"></a>

- *Type:* `string`[]

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterMember`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterOptionGroupMembership`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterOptionGroupMembership)[]

---

##### `dbClusterParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `domainMemberships`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.domainMemberships"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbDomainMembership`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbDomainMembership)[]

---

##### `enabledCloudWatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.enabledCloudWatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.engine"></a>

- *Type:* `string`

---

##### `engineMode`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.engineMode"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `httpEndpointEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.httpEndpointEnabled"></a>

- *Type:* `boolean`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.multiAz"></a>

- *Type:* `boolean`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceVpcSecurityGroup`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceVpcSecurityGroup)[]

---

### SecurityHubAwsRdsDbClusterMember <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbClusterMember: securityhub.SecurityHubAwsRdsDbClusterMember = { ... }
```

##### `dbClusterParameterGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterMember.property.dbClusterParameterGroupStatus"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterMember.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `isClusterWriter`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterMember.property.isClusterWriter"></a>

- *Type:* `boolean`

---

##### `promotionTier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterMember.property.promotionTier"></a>

- *Type:* `number`

---

### SecurityHubAwsRdsDbClusterOptionGroupMembership <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterOptionGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbClusterOptionGroupMembership: securityhub.SecurityHubAwsRdsDbClusterOptionGroupMembership = { ... }
```

##### `dbClusterOptionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterOptionGroupMembership.property.dbClusterOptionGroupName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterOptionGroupMembership.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbClusterSnapshotDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbClusterSnapshotDetails: securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `clusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.engineVersion"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.masterUsername"></a>

- *Type:* `string`

---

##### `percentProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.percentProgress"></a>

- *Type:* `number`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.port"></a>

- *Type:* `number`

---

##### `snapshotCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.snapshotType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails.property.vpcId"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbDomainMembership <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbDomainMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbDomainMembership: securityhub.SecurityHubAwsRdsDbDomainMembership = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbDomainMembership.property.domain"></a>

- *Type:* `string`

---

##### `fqdn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbDomainMembership.property.fqdn"></a>

- *Type:* `string`

---

##### `iamRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbDomainMembership.property.iamRoleName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbDomainMembership.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbInstanceAssociatedRole <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceAssociatedRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbInstanceAssociatedRole: securityhub.SecurityHubAwsRdsDbInstanceAssociatedRole = { ... }
```

##### `featureName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceAssociatedRole.property.featureName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceAssociatedRole.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceAssociatedRole.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbInstanceDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbInstanceDetails: securityhub.SecurityHubAwsRdsDbInstanceDetails = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceAssociatedRole`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceAssociatedRole)[]

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `characterSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.characterSetName"></a>

- *Type:* `string`

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.copyTagsToSnapshot"></a>

- *Type:* `boolean`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstancePort`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.dbInstancePort"></a>

- *Type:* `number`

---

##### `dbInstanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.dbName"></a>

- *Type:* `string`

---

##### `dbParameterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.dbParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbParameterGroup`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbParameterGroup)[]

---

##### `dbSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.dbSecurityGroups"></a>

- *Type:* `string`[]

---

##### `dbSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroup`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroup)

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `domainMemberships`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.domainMemberships"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbDomainMembership`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbDomainMembership)[]

---

##### `enabledCloudWatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.enabledCloudWatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceEndpoint`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceEndpoint)

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.engineVersion"></a>

- *Type:* `string`

---

##### `enhancedMonitoringResourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.enhancedMonitoringResourceArn"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `instanceCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.iops"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.licenseModel"></a>

- *Type:* `string`

---

##### `listenerEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.listenerEndpoint"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceEndpoint`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceEndpoint)

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.masterUsername"></a>

- *Type:* `string`

---

##### `maxAllocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.maxAllocatedStorage"></a>

- *Type:* `number`

---

##### `monitoringInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.monitoringInterval"></a>

- *Type:* `number`

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.monitoringRoleArn"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.multiAz"></a>

- *Type:* `boolean`

---

##### `optionGroupMemberships`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.optionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbOptionGroupMembership`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbOptionGroupMembership)[]

---

##### `pendingModifiedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues)

---

##### `performanceInsightsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.performanceInsightsEnabled"></a>

- *Type:* `boolean`

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.performanceInsightsKmsKeyId"></a>

- *Type:* `string`

---

##### `performanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.performanceInsightsRetentionPeriod"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `processorFeatures`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.processorFeatures"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbProcessorFeature`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbProcessorFeature)[]

---

##### `promotionTier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `readReplicaDbClusterIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.readReplicaDbClusterIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaDbInstanceIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.readReplicaDbInstanceIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaSourceDbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.readReplicaSourceDbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `secondaryAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `statusInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbStatusInfo`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbStatusInfo)[]

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.storageType"></a>

- *Type:* `string`

---

##### `tdeCredentialArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.tdeCredentialArn"></a>

- *Type:* `string`

---

##### `timezone`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.timezone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceVpcSecurityGroup`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceVpcSecurityGroup)[]

---

### SecurityHubAwsRdsDbInstanceEndpoint <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbInstanceEndpoint: securityhub.SecurityHubAwsRdsDbInstanceEndpoint = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceEndpoint.property.port"></a>

- *Type:* `number`

---

### SecurityHubAwsRdsDbInstanceVpcSecurityGroup <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceVpcSecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbInstanceVpcSecurityGroup: securityhub.SecurityHubAwsRdsDbInstanceVpcSecurityGroup = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceVpcSecurityGroup.property.status"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceVpcSecurityGroup.property.vpcSecurityGroupId"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbOptionGroupMembership <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbOptionGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbOptionGroupMembership: securityhub.SecurityHubAwsRdsDbOptionGroupMembership = { ... }
```

##### `optionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbOptionGroupMembership.property.optionGroupName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbOptionGroupMembership.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbParameterGroup <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbParameterGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbParameterGroup: securityhub.SecurityHubAwsRdsDbParameterGroup = { ... }
```

##### `dbParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbParameterGroup.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbPendingModifiedValues <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbPendingModifiedValues: securityhub.SecurityHubAwsRdsDbPendingModifiedValues = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudWatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.pendingCloudWatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsPendingCloudWatchLogsExports`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsPendingCloudWatchLogsExports)

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `processorFeatures`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.processorFeatures"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbProcessorFeature`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbProcessorFeature)[]

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbPendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbProcessorFeature <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbProcessorFeature"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbProcessorFeature: securityhub.SecurityHubAwsRdsDbProcessorFeature = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbProcessorFeature.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbProcessorFeature.property.value"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbSnapshotDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbSnapshotDetails: securityhub.SecurityHubAwsRdsDbSnapshotDetails = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.availabilityZone"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.dbSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.encrypted"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.engineVersion"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `instanceCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.iops"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.masterUsername"></a>

- *Type:* `string`

---

##### `optionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.optionGroupName"></a>

- *Type:* `string`

---

##### `percentProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.percentProgress"></a>

- *Type:* `number`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.port"></a>

- *Type:* `number`

---

##### `processorFeatures`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.processorFeatures"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbProcessorFeature`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbProcessorFeature)[]

---

##### `snapshotCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceDbSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.sourceDbSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.sourceRegion"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.status"></a>

- *Type:* `string`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.storageType"></a>

- *Type:* `string`

---

##### `tdeCredentialArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.tdeCredentialArn"></a>

- *Type:* `string`

---

##### `timezone`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.timezone"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails.property.vpcId"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbStatusInfo <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbStatusInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbStatusInfo: securityhub.SecurityHubAwsRdsDbStatusInfo = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbStatusInfo.property.message"></a>

- *Type:* `string`

---

##### `normal`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbStatusInfo.property.normal"></a>

- *Type:* `boolean`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbStatusInfo.property.status"></a>

- *Type:* `string`

---

##### `statusType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbStatusInfo.property.statusType"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbSubnetGroup <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbSubnetGroup: securityhub.SecurityHubAwsRdsDbSubnetGroup = { ... }
```

##### `dbSubnetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroupSubnet`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroupSubnet)[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbSubnetGroupSubnet <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroupSubnet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbSubnetGroupSubnet: securityhub.SecurityHubAwsRdsDbSubnetGroupSubnet = { ... }
```

##### `subnetAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroupSubnet.property.subnetAvailabilityZone"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone)

---

##### `subnetIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroupSubnet.property.subnetIdentifier"></a>

- *Type:* `string`

---

##### `subnetStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroupSubnet.property.subnetStatus"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone: securityhub.SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone.property.name"></a>

- *Type:* `string`

---

### SecurityHubAwsRdsPendingCloudWatchLogsExports <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsPendingCloudWatchLogsExports"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRdsPendingCloudWatchLogsExports: securityhub.SecurityHubAwsRdsPendingCloudWatchLogsExports = { ... }
```

##### `logTypesToDisable`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsPendingCloudWatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRdsPendingCloudWatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---

### SecurityHubAwsRedshiftClusterClusterNode <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterNode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterClusterNode: securityhub.SecurityHubAwsRedshiftClusterClusterNode = { ... }
```

##### `nodeRole`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterNode.property.nodeRole"></a>

- *Type:* `string`

---

##### `privateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterNode.property.privateIpAddress"></a>

- *Type:* `string`

---

##### `publicIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterNode.property.publicIpAddress"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterClusterParameterGroup <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterClusterParameterGroup: securityhub.SecurityHubAwsRedshiftClusterClusterParameterGroup = { ... }
```

##### `clusterParameterStatusList`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterGroup.property.clusterParameterStatusList"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterStatus`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterStatus)[]

---

##### `parameterApplyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterClusterParameterStatus <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterClusterParameterStatus: securityhub.SecurityHubAwsRedshiftClusterClusterParameterStatus = { ... }
```

##### `parameterApplyErrorDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterStatus.property.parameterApplyErrorDescription"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterStatus.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterStatus.property.parameterName"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterClusterSecurityGroup <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterClusterSecurityGroup: securityhub.SecurityHubAwsRedshiftClusterClusterSecurityGroup = { ... }
```

##### `clusterSecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSecurityGroup.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSecurityGroup.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterClusterSnapshotCopyStatus: securityhub.SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus = { ... }
```

##### `destinationRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterDeferredMaintenanceWindow: securityhub.SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow = { ... }
```

##### `deferMaintenanceEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow.property.deferMaintenanceEndTime"></a>

- *Type:* `string`

---

##### `deferMaintenanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow.property.deferMaintenanceIdentifier"></a>

- *Type:* `string`

---

##### `deferMaintenanceStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow.property.deferMaintenanceStartTime"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterDetails: securityhub.SecurityHubAwsRedshiftClusterDetails = { ... }
```

##### `allowVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterNode`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterNode)[]

---

##### `clusterParameterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterGroup`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterParameterGroup)[]

---

##### `clusterPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSecurityGroup`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSecurityGroup)[]

---

##### `clusterSnapshotCopyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dbName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterElasticIpStatus`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterEndpoint`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterHsmStatus`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterHsmStatus)

---

##### `iamRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterIamRole`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.masterUsername"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterResizeInfo`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterResizeInfo)

---

##### `restoreStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterRestoreStatus`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterVpcSecurityGroup`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterVpcSecurityGroup)[]

---

### SecurityHubAwsRedshiftClusterElasticIpStatus <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterElasticIpStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterElasticIpStatus: securityhub.SecurityHubAwsRedshiftClusterElasticIpStatus = { ... }
```

##### `elasticIp`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterEndpoint <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterEndpoint: securityhub.SecurityHubAwsRedshiftClusterEndpoint = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterEndpoint.property.port"></a>

- *Type:* `number`

---

### SecurityHubAwsRedshiftClusterHsmStatus <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterHsmStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterHsmStatus: securityhub.SecurityHubAwsRedshiftClusterHsmStatus = { ... }
```

##### `hsmClientCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterHsmStatus.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterIamRole <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterIamRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterIamRole: securityhub.SecurityHubAwsRedshiftClusterIamRole = { ... }
```

##### `applyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterIamRole.property.applyStatus"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterIamRole.property.iamRoleArn"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterPendingModifiedValues <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterPendingModifiedValues: securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues = { ... }
```

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

### SecurityHubAwsRedshiftClusterResizeInfo <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterResizeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterResizeInfo: securityhub.SecurityHubAwsRedshiftClusterResizeInfo = { ... }
```

##### `allowCancelResize`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterRestoreStatus <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterRestoreStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterRestoreStatus: securityhub.SecurityHubAwsRedshiftClusterRestoreStatus = { ... }
```

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---

### SecurityHubAwsRedshiftClusterVpcSecurityGroup <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterVpcSecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsRedshiftClusterVpcSecurityGroup: securityhub.SecurityHubAwsRedshiftClusterVpcSecurityGroup = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterVpcSecurityGroup.property.status"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterVpcSecurityGroup.property.vpcSecurityGroupId"></a>

- *Type:* `string`

---

### SecurityHubAwsS3BucketDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsS3BucketDetails: securityhub.SecurityHubAwsS3BucketDetails = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketDetails.property.createdAt"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketDetails.property.ownerId"></a>

- *Type:* `string`

---

##### `ownerName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketDetails.property.ownerName"></a>

- *Type:* `string`

---

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketDetails.property.serverSideEncryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionConfiguration`](#aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionConfiguration)

---

### SecurityHubAwsS3BucketServerSideEncryptionByDefault <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionByDefault"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsS3BucketServerSideEncryptionByDefault: securityhub.SecurityHubAwsS3BucketServerSideEncryptionByDefault = { ... }
```

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionByDefault.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

##### `sseAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionByDefault.property.sseAlgorithm"></a>

- *Type:* `string`

---

### SecurityHubAwsS3BucketServerSideEncryptionConfiguration <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsS3BucketServerSideEncryptionConfiguration: securityhub.SecurityHubAwsS3BucketServerSideEncryptionConfiguration = { ... }
```

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionRule`](#aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionRule)[]

---

### SecurityHubAwsS3BucketServerSideEncryptionRule <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsS3BucketServerSideEncryptionRule: securityhub.SecurityHubAwsS3BucketServerSideEncryptionRule = { ... }
```

##### `applyServerSideEncryptionByDefault`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionRule.property.applyServerSideEncryptionByDefault"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionByDefault`](#aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketServerSideEncryptionByDefault)

---

### SecurityHubAwsS3ObjectDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3ObjectDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsS3ObjectDetails: securityhub.SecurityHubAwsS3ObjectDetails = { ... }
```

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3ObjectDetails.property.contentType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3ObjectDetails.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3ObjectDetails.property.lastModified"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3ObjectDetails.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3ObjectDetails.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsS3ObjectDetails.property.versionId"></a>

- *Type:* `string`

---

### SecurityHubAwsSecretsManagerSecretDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsSecretsManagerSecretDetails: securityhub.SecurityHubAwsSecretsManagerSecretDetails = { ... }
```

##### `deleted`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails.property.deleted"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails.property.name"></a>

- *Type:* `string`

---

##### `rotationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails.property.rotationEnabled"></a>

- *Type:* `boolean`

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails.property.rotationLambdaArn"></a>

- *Type:* `string`

---

##### `rotationOccurredWithinFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails.property.rotationOccurredWithinFrequency"></a>

- *Type:* `boolean`

---

##### `rotationRules`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails.property.rotationRules"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretRotationRules`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretRotationRules)

---

### SecurityHubAwsSecretsManagerSecretRotationRules <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretRotationRules"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsSecretsManagerSecretRotationRules: securityhub.SecurityHubAwsSecretsManagerSecretRotationRules = { ... }
```

##### `automaticallyAfterDays`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretRotationRules.property.automaticallyAfterDays"></a>

- *Type:* `number`

---

### SecurityHubAwsSecurityFinding <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsSecurityFinding: securityhub.SecurityHubAwsSecurityFinding = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.awsAccountId"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.description"></a>

- *Type:* `string`

---

##### `generatorId`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.generatorId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.id"></a>

- *Type:* `string`

---

##### `productArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.productArn"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.resources"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResource`](#aws-cdk-sdk.securityhub.SecurityHubResource)[]

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.schemaVersion"></a>

- *Type:* `string`

---

##### `severity`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.severity"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubSeverity`](#aws-cdk-sdk.securityhub.SecurityHubSeverity)

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.title"></a>

- *Type:* `string`

---

##### `types`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.types"></a>

- *Type:* `string`[]

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.updatedAt"></a>

- *Type:* `string`

---

##### `compliance`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.compliance"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubCompliance`](#aws-cdk-sdk.securityhub.SecurityHubCompliance)

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.confidence"></a>

- *Type:* `number`

---

##### `criticality`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.criticality"></a>

- *Type:* `number`

---

##### `firstObservedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.firstObservedAt"></a>

- *Type:* `string`

---

##### `lastObservedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.lastObservedAt"></a>

- *Type:* `string`

---

##### `malware`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.malware"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubMalware`](#aws-cdk-sdk.securityhub.SecurityHubMalware)[]

---

##### `network`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.network"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNetwork`](#aws-cdk-sdk.securityhub.SecurityHubNetwork)

---

##### `networkPath`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.networkPath"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponent`](#aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponent)[]

---

##### `note`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.note"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNote`](#aws-cdk-sdk.securityhub.SecurityHubNote)

---

##### `patchSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.patchSummary"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubPatchSummary`](#aws-cdk-sdk.securityhub.SecurityHubPatchSummary)

---

##### `process`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.process"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubProcessDetails`](#aws-cdk-sdk.securityhub.SecurityHubProcessDetails)

---

##### `productFields`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.productFields"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `recordState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.recordState"></a>

- *Type:* `string`

---

##### `relatedFindings`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.relatedFindings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubRelatedFinding`](#aws-cdk-sdk.securityhub.SecurityHubRelatedFinding)[]

---

##### `remediation`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.remediation"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubRemediation`](#aws-cdk-sdk.securityhub.SecurityHubRemediation)

---

##### `sourceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.sourceUrl"></a>

- *Type:* `string`

---

##### `threatIntelIndicators`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.threatIntelIndicators"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubThreatIntelIndicator`](#aws-cdk-sdk.securityhub.SecurityHubThreatIntelIndicator)[]

---

##### `userDefinedFields`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.userDefinedFields"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `verificationState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.verificationState"></a>

- *Type:* `string`

---

##### `vulnerabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.vulnerabilities"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubVulnerability`](#aws-cdk-sdk.securityhub.SecurityHubVulnerability)[]

---

##### `workflow`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.workflow"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubWorkflow`](#aws-cdk-sdk.securityhub.SecurityHubWorkflow)

---

##### `workflowState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding.property.workflowState"></a>

- *Type:* `string`

---

### SecurityHubAwsSecurityFindingFilters <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsSecurityFindingFilters: securityhub.SecurityHubAwsSecurityFindingFilters = { ... }
```

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.awsAccountId"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `companyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.companyName"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `complianceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.complianceStatus"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.confidence"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNumberFilter`](#aws-cdk-sdk.securityhub.SecurityHubNumberFilter)[]

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.createdAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `criticality`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.criticality"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNumberFilter`](#aws-cdk-sdk.securityhub.SecurityHubNumberFilter)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.description"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `firstObservedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.firstObservedAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `generatorId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.generatorId"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.id"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `keyword`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.keyword"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubKeywordFilter`](#aws-cdk-sdk.securityhub.SecurityHubKeywordFilter)[]

---

##### `lastObservedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.lastObservedAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `malwareName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.malwareName"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `malwarePath`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.malwarePath"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `malwareState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.malwareState"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `malwareType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.malwareType"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `networkDestinationDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkDestinationDomain"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `networkDestinationIpV4`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkDestinationIpV4"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubIpFilter`](#aws-cdk-sdk.securityhub.SecurityHubIpFilter)[]

---

##### `networkDestinationIpV6`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkDestinationIpV6"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubIpFilter`](#aws-cdk-sdk.securityhub.SecurityHubIpFilter)[]

---

##### `networkDestinationPort`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkDestinationPort"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNumberFilter`](#aws-cdk-sdk.securityhub.SecurityHubNumberFilter)[]

---

##### `networkDirection`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkDirection"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `networkProtocol`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkProtocol"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `networkSourceDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkSourceDomain"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `networkSourceIpV4`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkSourceIpV4"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubIpFilter`](#aws-cdk-sdk.securityhub.SecurityHubIpFilter)[]

---

##### `networkSourceIpV6`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkSourceIpV6"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubIpFilter`](#aws-cdk-sdk.securityhub.SecurityHubIpFilter)[]

---

##### `networkSourceMac`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkSourceMac"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `networkSourcePort`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.networkSourcePort"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNumberFilter`](#aws-cdk-sdk.securityhub.SecurityHubNumberFilter)[]

---

##### `noteText`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.noteText"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `noteUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.noteUpdatedAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `noteUpdatedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.noteUpdatedBy"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `processLaunchedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.processLaunchedAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `processName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.processName"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `processParentPid`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.processParentPid"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNumberFilter`](#aws-cdk-sdk.securityhub.SecurityHubNumberFilter)[]

---

##### `processPath`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.processPath"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `processPid`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.processPid"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNumberFilter`](#aws-cdk-sdk.securityhub.SecurityHubNumberFilter)[]

---

##### `processTerminatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.processTerminatedAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `productArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.productArn"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `productFields`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.productFields"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubMapFilter`](#aws-cdk-sdk.securityhub.SecurityHubMapFilter)[]

---

##### `productName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.productName"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `recommendationText`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.recommendationText"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `recordState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.recordState"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `relatedFindingsId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.relatedFindingsId"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `relatedFindingsProductArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.relatedFindingsProductArn"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceAwsEc2InstanceIamInstanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsEc2InstanceIamInstanceProfileArn"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceAwsEc2InstanceImageId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsEc2InstanceImageId"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceAwsEc2InstanceIpV4Addresses`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsEc2InstanceIpV4Addresses"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubIpFilter`](#aws-cdk-sdk.securityhub.SecurityHubIpFilter)[]

---

##### `resourceAwsEc2InstanceIpV6Addresses`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsEc2InstanceIpV6Addresses"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubIpFilter`](#aws-cdk-sdk.securityhub.SecurityHubIpFilter)[]

---

##### `resourceAwsEc2InstanceKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsEc2InstanceKeyName"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceAwsEc2InstanceLaunchedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsEc2InstanceLaunchedAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `resourceAwsEc2InstanceSubnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsEc2InstanceSubnetId"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceAwsEc2InstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsEc2InstanceType"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceAwsEc2InstanceVpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsEc2InstanceVpcId"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceAwsIamAccessKeyCreatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsIamAccessKeyCreatedAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `resourceAwsIamAccessKeyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsIamAccessKeyStatus"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceAwsIamAccessKeyUserName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsIamAccessKeyUserName"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceAwsS3BucketOwnerId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsS3BucketOwnerId"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceAwsS3BucketOwnerName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceAwsS3BucketOwnerName"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceContainerImageId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceContainerImageId"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceContainerImageName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceContainerImageName"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceContainerLaunchedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceContainerLaunchedAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `resourceContainerName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceContainerName"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceDetailsOther`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceDetailsOther"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubMapFilter`](#aws-cdk-sdk.securityhub.SecurityHubMapFilter)[]

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceId"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourcePartition`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourcePartition"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceRegion"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `resourceTags`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceTags"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubMapFilter`](#aws-cdk-sdk.securityhub.SecurityHubMapFilter)[]

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.resourceType"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `severityLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.severityLabel"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `severityNormalized`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.severityNormalized"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNumberFilter`](#aws-cdk-sdk.securityhub.SecurityHubNumberFilter)[]

---

##### `severityProduct`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.severityProduct"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNumberFilter`](#aws-cdk-sdk.securityhub.SecurityHubNumberFilter)[]

---

##### `sourceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.sourceUrl"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `threatIntelIndicatorCategory`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.threatIntelIndicatorCategory"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `threatIntelIndicatorLastObservedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.threatIntelIndicatorLastObservedAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `threatIntelIndicatorSource`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.threatIntelIndicatorSource"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `threatIntelIndicatorSourceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.threatIntelIndicatorSourceUrl"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `threatIntelIndicatorType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.threatIntelIndicatorType"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `threatIntelIndicatorValue`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.threatIntelIndicatorValue"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.title"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.type"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.updatedAt"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateFilter`](#aws-cdk-sdk.securityhub.SecurityHubDateFilter)[]

---

##### `userDefinedFields`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.userDefinedFields"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubMapFilter`](#aws-cdk-sdk.securityhub.SecurityHubMapFilter)[]

---

##### `verificationState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.verificationState"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `workflowState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.workflowState"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

##### `workflowStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters.property.workflowStatus"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStringFilter`](#aws-cdk-sdk.securityhub.SecurityHubStringFilter)[]

---

### SecurityHubAwsSecurityFindingIdentifier <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsSecurityFindingIdentifier: securityhub.SecurityHubAwsSecurityFindingIdentifier = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier.property.id"></a>

- *Type:* `string`

---

##### `productArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier.property.productArn"></a>

- *Type:* `string`

---

### SecurityHubAwsSnsTopicDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsSnsTopicDetails: securityhub.SecurityHubAwsSnsTopicDetails = { ... }
```

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicDetails.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicDetails.property.owner"></a>

- *Type:* `string`

---

##### `subscription`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicDetails.property.subscription"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicSubscription`](#aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicSubscription)[]

---

##### `topicName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicDetails.property.topicName"></a>

- *Type:* `string`

---

### SecurityHubAwsSnsTopicSubscription <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsSnsTopicSubscription: securityhub.SecurityHubAwsSnsTopicSubscription = { ... }
```

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicSubscription.property.endpoint"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicSubscription.property.protocol"></a>

- *Type:* `string`

---

### SecurityHubAwsSqsQueueDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSqsQueueDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsSqsQueueDetails: securityhub.SecurityHubAwsSqsQueueDetails = { ... }
```

##### `deadLetterTargetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSqsQueueDetails.property.deadLetterTargetArn"></a>

- *Type:* `string`

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSqsQueueDetails.property.kmsDataKeyReusePeriodSeconds"></a>

- *Type:* `number`

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSqsQueueDetails.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

##### `queueName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsSqsQueueDetails.property.queueName"></a>

- *Type:* `string`

---

### SecurityHubAwsWafWebAclDetails <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsWafWebAclDetails: securityhub.SecurityHubAwsWafWebAclDetails = { ... }
```

##### `defaultAction`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclDetails.property.defaultAction"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclDetails.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclDetails.property.rules"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclRule`](#aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclRule)[]

---

##### `webAclId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclDetails.property.webAclId"></a>

- *Type:* `string`

---

### SecurityHubAwsWafWebAclRule <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubAwsWafWebAclRule: securityhub.SecurityHubAwsWafWebAclRule = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclRule.property.action"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubWafAction`](#aws-cdk-sdk.securityhub.SecurityHubWafAction)

---

##### `excludedRules`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclRule.property.excludedRules"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubWafExcludedRule`](#aws-cdk-sdk.securityhub.SecurityHubWafExcludedRule)[]

---

##### `overrideAction`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclRule.property.overrideAction"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubWafOverrideAction`](#aws-cdk-sdk.securityhub.SecurityHubWafOverrideAction)

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclRule.property.priority"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclRule.property.ruleId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclRule.property.type"></a>

- *Type:* `string`

---

### SecurityHubBatchDisableStandardsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubBatchDisableStandardsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubBatchDisableStandardsRequest: securityhub.SecurityHubBatchDisableStandardsRequest = { ... }
```

##### `standardsSubscriptionArns`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchDisableStandardsRequest.property.standardsSubscriptionArns"></a>

- *Type:* `string`[]

---

### SecurityHubBatchDisableStandardsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubBatchDisableStandardsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubBatchDisableStandardsResponse: securityhub.SecurityHubBatchDisableStandardsResponse = { ... }
```

##### `standardsSubscriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchDisableStandardsResponse.property.standardsSubscriptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription`](#aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription)[]

---

### SecurityHubBatchEnableStandardsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubBatchEnableStandardsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubBatchEnableStandardsRequest: securityhub.SecurityHubBatchEnableStandardsRequest = { ... }
```

##### `standardsSubscriptionRequests`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchEnableStandardsRequest.property.standardsSubscriptionRequests"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandardsSubscriptionRequest`](#aws-cdk-sdk.securityhub.SecurityHubStandardsSubscriptionRequest)[]

---

### SecurityHubBatchEnableStandardsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubBatchEnableStandardsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubBatchEnableStandardsResponse: securityhub.SecurityHubBatchEnableStandardsResponse = { ... }
```

##### `standardsSubscriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchEnableStandardsResponse.property.standardsSubscriptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription`](#aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription)[]

---

### SecurityHubBatchImportFindingsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubBatchImportFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubBatchImportFindingsRequest: securityhub.SecurityHubBatchImportFindingsRequest = { ... }
```

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchImportFindingsRequest.property.findings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding)[]

---

### SecurityHubBatchImportFindingsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubBatchImportFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubBatchImportFindingsResponse: securityhub.SecurityHubBatchImportFindingsResponse = { ... }
```

##### `failedCount`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchImportFindingsResponse.property.failedCount"></a>

- *Type:* `number`

---

##### `successCount`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchImportFindingsResponse.property.successCount"></a>

- *Type:* `number`

---

##### `failedFindings`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchImportFindingsResponse.property.failedFindings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubImportFindingsError`](#aws-cdk-sdk.securityhub.SecurityHubImportFindingsError)[]

---

### SecurityHubBatchUpdateFindingsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubBatchUpdateFindingsRequest: securityhub.SecurityHubBatchUpdateFindingsRequest = { ... }
```

##### `findingIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest.property.findingIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier)[]

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest.property.confidence"></a>

- *Type:* `number`

---

##### `criticality`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest.property.criticality"></a>

- *Type:* `number`

---

##### `note`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest.property.note"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNoteUpdate`](#aws-cdk-sdk.securityhub.SecurityHubNoteUpdate)

---

##### `relatedFindings`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest.property.relatedFindings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubRelatedFinding`](#aws-cdk-sdk.securityhub.SecurityHubRelatedFinding)[]

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest.property.severity"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubSeverityUpdate`](#aws-cdk-sdk.securityhub.SecurityHubSeverityUpdate)

---

##### `types`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest.property.types"></a>

- *Type:* `string`[]

---

##### `userDefinedFields`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest.property.userDefinedFields"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `verificationState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest.property.verificationState"></a>

- *Type:* `string`

---

##### `workflow`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest.property.workflow"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubWorkflowUpdate`](#aws-cdk-sdk.securityhub.SecurityHubWorkflowUpdate)

---

### SecurityHubBatchUpdateFindingsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubBatchUpdateFindingsResponse: securityhub.SecurityHubBatchUpdateFindingsResponse = { ... }
```

##### `processedFindings`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsResponse.property.processedFindings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier)[]

---

##### `unprocessedFindings`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsResponse.property.unprocessedFindings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsUnprocessedFinding`](#aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsUnprocessedFinding)[]

---

### SecurityHubBatchUpdateFindingsUnprocessedFinding <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsUnprocessedFinding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubBatchUpdateFindingsUnprocessedFinding: securityhub.SecurityHubBatchUpdateFindingsUnprocessedFinding = { ... }
```

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsUnprocessedFinding.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsUnprocessedFinding.property.errorMessage"></a>

- *Type:* `string`

---

##### `findingIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsUnprocessedFinding.property.findingIdentifier"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier)

---

### SecurityHubCidrBlockAssociation <a name="aws-cdk-sdk.securityhub.SecurityHubCidrBlockAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubCidrBlockAssociation: securityhub.SecurityHubCidrBlockAssociation = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCidrBlockAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `cidrBlock`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCidrBlockAssociation.property.cidrBlock"></a>

- *Type:* `string`

---

##### `cidrBlockState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCidrBlockAssociation.property.cidrBlockState"></a>

- *Type:* `string`

---

### SecurityHubCompliance <a name="aws-cdk-sdk.securityhub.SecurityHubCompliance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubCompliance: securityhub.SecurityHubCompliance = { ... }
```

##### `relatedRequirements`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCompliance.property.relatedRequirements"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCompliance.property.status"></a>

- *Type:* `string`

---

##### `statusReasons`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCompliance.property.statusReasons"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStatusReason`](#aws-cdk-sdk.securityhub.SecurityHubStatusReason)[]

---

### SecurityHubContainerDetails <a name="aws-cdk-sdk.securityhub.SecurityHubContainerDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubContainerDetails: securityhub.SecurityHubContainerDetails = { ... }
```

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubContainerDetails.property.imageId"></a>

- *Type:* `string`

---

##### `imageName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubContainerDetails.property.imageName"></a>

- *Type:* `string`

---

##### `launchedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubContainerDetails.property.launchedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubContainerDetails.property.name"></a>

- *Type:* `string`

---

### SecurityHubCreateActionTargetRequest <a name="aws-cdk-sdk.securityhub.SecurityHubCreateActionTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubCreateActionTargetRequest: securityhub.SecurityHubCreateActionTargetRequest = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCreateActionTargetRequest.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCreateActionTargetRequest.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCreateActionTargetRequest.property.name"></a>

- *Type:* `string`

---

### SecurityHubCreateActionTargetResponse <a name="aws-cdk-sdk.securityhub.SecurityHubCreateActionTargetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubCreateActionTargetResponse: securityhub.SecurityHubCreateActionTargetResponse = { ... }
```

##### `actionTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCreateActionTargetResponse.property.actionTargetArn"></a>

- *Type:* `string`

---

### SecurityHubCreateInsightRequest <a name="aws-cdk-sdk.securityhub.SecurityHubCreateInsightRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubCreateInsightRequest: securityhub.SecurityHubCreateInsightRequest = { ... }
```

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCreateInsightRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters)

---

##### `groupByAttribute`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCreateInsightRequest.property.groupByAttribute"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCreateInsightRequest.property.name"></a>

- *Type:* `string`

---

### SecurityHubCreateInsightResponse <a name="aws-cdk-sdk.securityhub.SecurityHubCreateInsightResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubCreateInsightResponse: securityhub.SecurityHubCreateInsightResponse = { ... }
```

##### `insightArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCreateInsightResponse.property.insightArn"></a>

- *Type:* `string`

---

### SecurityHubCreateMembersRequest <a name="aws-cdk-sdk.securityhub.SecurityHubCreateMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubCreateMembersRequest: securityhub.SecurityHubCreateMembersRequest = { ... }
```

##### `accountDetails`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCreateMembersRequest.property.accountDetails"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAccountDetails`](#aws-cdk-sdk.securityhub.SecurityHubAccountDetails)[]

---

### SecurityHubCreateMembersResponse <a name="aws-cdk-sdk.securityhub.SecurityHubCreateMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubCreateMembersResponse: securityhub.SecurityHubCreateMembersResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCreateMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---

### SecurityHubCvss <a name="aws-cdk-sdk.securityhub.SecurityHubCvss"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubCvss: securityhub.SecurityHubCvss = { ... }
```

##### `baseScore`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCvss.property.baseScore"></a>

- *Type:* `number`

---

##### `baseVector`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCvss.property.baseVector"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubCvss.property.version"></a>

- *Type:* `string`

---

### SecurityHubDateFilter <a name="aws-cdk-sdk.securityhub.SecurityHubDateFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDateFilter: securityhub.SecurityHubDateFilter = { ... }
```

##### `dateRange`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDateFilter.property.dateRange"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDateRange`](#aws-cdk-sdk.securityhub.SecurityHubDateRange)

---

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDateFilter.property.end"></a>

- *Type:* `string`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDateFilter.property.start"></a>

- *Type:* `string`

---

### SecurityHubDateRange <a name="aws-cdk-sdk.securityhub.SecurityHubDateRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDateRange: securityhub.SecurityHubDateRange = { ... }
```

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDateRange.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDateRange.property.value"></a>

- *Type:* `number`

---

### SecurityHubDeclineInvitationsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDeclineInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDeclineInvitationsRequest: securityhub.SecurityHubDeclineInvitationsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDeclineInvitationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### SecurityHubDeclineInvitationsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDeclineInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDeclineInvitationsResponse: securityhub.SecurityHubDeclineInvitationsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDeclineInvitationsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---

### SecurityHubDeleteActionTargetRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteActionTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDeleteActionTargetRequest: securityhub.SecurityHubDeleteActionTargetRequest = { ... }
```

##### `actionTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteActionTargetRequest.property.actionTargetArn"></a>

- *Type:* `string`

---

### SecurityHubDeleteActionTargetResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteActionTargetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDeleteActionTargetResponse: securityhub.SecurityHubDeleteActionTargetResponse = { ... }
```

##### `actionTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteActionTargetResponse.property.actionTargetArn"></a>

- *Type:* `string`

---

### SecurityHubDeleteInsightRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteInsightRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDeleteInsightRequest: securityhub.SecurityHubDeleteInsightRequest = { ... }
```

##### `insightArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteInsightRequest.property.insightArn"></a>

- *Type:* `string`

---

### SecurityHubDeleteInsightResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteInsightResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDeleteInsightResponse: securityhub.SecurityHubDeleteInsightResponse = { ... }
```

##### `insightArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteInsightResponse.property.insightArn"></a>

- *Type:* `string`

---

### SecurityHubDeleteInvitationsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDeleteInvitationsRequest: securityhub.SecurityHubDeleteInvitationsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteInvitationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### SecurityHubDeleteInvitationsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDeleteInvitationsResponse: securityhub.SecurityHubDeleteInvitationsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteInvitationsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---

### SecurityHubDeleteMembersRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDeleteMembersRequest: securityhub.SecurityHubDeleteMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### SecurityHubDeleteMembersResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDeleteMembersResponse: securityhub.SecurityHubDeleteMembersResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDeleteMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---

### SecurityHubDescribeActionTargetsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeActionTargetsRequest: securityhub.SecurityHubDescribeActionTargetsRequest = { ... }
```

##### `actionTargetArns`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsRequest.property.actionTargetArns"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubDescribeActionTargetsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeActionTargetsResponse: securityhub.SecurityHubDescribeActionTargetsResponse = { ... }
```

##### `actionTargets`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsResponse.property.actionTargets"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubActionTarget`](#aws-cdk-sdk.securityhub.SecurityHubActionTarget)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubDescribeHubRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeHubRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeHubRequest: securityhub.SecurityHubDescribeHubRequest = { ... }
```

##### `hubArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeHubRequest.property.hubArn"></a>

- *Type:* `string`

---

### SecurityHubDescribeHubResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeHubResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeHubResponse: securityhub.SecurityHubDescribeHubResponse = { ... }
```

##### `autoEnableControls`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeHubResponse.property.autoEnableControls"></a>

- *Type:* `boolean`

---

##### `hubArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeHubResponse.property.hubArn"></a>

- *Type:* `string`

---

##### `subscribedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeHubResponse.property.subscribedAt"></a>

- *Type:* `string`

---

### SecurityHubDescribeOrganizationConfigurationRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeOrganizationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeOrganizationConfigurationRequest: securityhub.SecurityHubDescribeOrganizationConfigurationRequest = { ... }
```

### SecurityHubDescribeOrganizationConfigurationResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeOrganizationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeOrganizationConfigurationResponse: securityhub.SecurityHubDescribeOrganizationConfigurationResponse = { ... }
```

##### `autoEnable`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeOrganizationConfigurationResponse.property.autoEnable"></a>

- *Type:* `boolean`

---

##### `memberAccountLimitReached`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeOrganizationConfigurationResponse.property.memberAccountLimitReached"></a>

- *Type:* `boolean`

---

### SecurityHubDescribeProductsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeProductsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeProductsRequest: securityhub.SecurityHubDescribeProductsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeProductsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeProductsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubDescribeProductsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeProductsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeProductsResponse: securityhub.SecurityHubDescribeProductsResponse = { ... }
```

##### `products`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeProductsResponse.property.products"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubProduct`](#aws-cdk-sdk.securityhub.SecurityHubProduct)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeProductsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubDescribeStandardsControlsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeStandardsControlsRequest: securityhub.SecurityHubDescribeStandardsControlsRequest = { ... }
```

##### `standardsSubscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsRequest.property.standardsSubscriptionArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubDescribeStandardsControlsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeStandardsControlsResponse: securityhub.SecurityHubDescribeStandardsControlsResponse = { ... }
```

##### `controls`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsResponse.property.controls"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandardsControl`](#aws-cdk-sdk.securityhub.SecurityHubStandardsControl)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubDescribeStandardsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeStandardsRequest: securityhub.SecurityHubDescribeStandardsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubDescribeStandardsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDescribeStandardsResponse: securityhub.SecurityHubDescribeStandardsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `standards`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsResponse.property.standards"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandard`](#aws-cdk-sdk.securityhub.SecurityHubStandard)[]

---

### SecurityHubDisableImportFindingsForProductRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDisableImportFindingsForProductRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDisableImportFindingsForProductRequest: securityhub.SecurityHubDisableImportFindingsForProductRequest = { ... }
```

##### `productSubscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDisableImportFindingsForProductRequest.property.productSubscriptionArn"></a>

- *Type:* `string`

---

### SecurityHubDisableImportFindingsForProductResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDisableImportFindingsForProductResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDisableImportFindingsForProductResponse: securityhub.SecurityHubDisableImportFindingsForProductResponse = { ... }
```

### SecurityHubDisableOrganizationAdminAccountRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDisableOrganizationAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDisableOrganizationAdminAccountRequest: securityhub.SecurityHubDisableOrganizationAdminAccountRequest = { ... }
```

##### `adminAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDisableOrganizationAdminAccountRequest.property.adminAccountId"></a>

- *Type:* `string`

---

### SecurityHubDisableOrganizationAdminAccountResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDisableOrganizationAdminAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDisableOrganizationAdminAccountResponse: securityhub.SecurityHubDisableOrganizationAdminAccountResponse = { ... }
```

### SecurityHubDisableSecurityHubRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDisableSecurityHubRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDisableSecurityHubRequest: securityhub.SecurityHubDisableSecurityHubRequest = { ... }
```

### SecurityHubDisableSecurityHubResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDisableSecurityHubResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDisableSecurityHubResponse: securityhub.SecurityHubDisableSecurityHubResponse = { ... }
```

### SecurityHubDisassociateFromMasterAccountRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDisassociateFromMasterAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDisassociateFromMasterAccountRequest: securityhub.SecurityHubDisassociateFromMasterAccountRequest = { ... }
```

### SecurityHubDisassociateFromMasterAccountResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDisassociateFromMasterAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDisassociateFromMasterAccountResponse: securityhub.SecurityHubDisassociateFromMasterAccountResponse = { ... }
```

### SecurityHubDisassociateMembersRequest <a name="aws-cdk-sdk.securityhub.SecurityHubDisassociateMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDisassociateMembersRequest: securityhub.SecurityHubDisassociateMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubDisassociateMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### SecurityHubDisassociateMembersResponse <a name="aws-cdk-sdk.securityhub.SecurityHubDisassociateMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubDisassociateMembersResponse: securityhub.SecurityHubDisassociateMembersResponse = { ... }
```

### SecurityHubEnableImportFindingsForProductRequest <a name="aws-cdk-sdk.securityhub.SecurityHubEnableImportFindingsForProductRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubEnableImportFindingsForProductRequest: securityhub.SecurityHubEnableImportFindingsForProductRequest = { ... }
```

##### `productArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubEnableImportFindingsForProductRequest.property.productArn"></a>

- *Type:* `string`

---

### SecurityHubEnableImportFindingsForProductResponse <a name="aws-cdk-sdk.securityhub.SecurityHubEnableImportFindingsForProductResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubEnableImportFindingsForProductResponse: securityhub.SecurityHubEnableImportFindingsForProductResponse = { ... }
```

##### `productSubscriptionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubEnableImportFindingsForProductResponse.property.productSubscriptionArn"></a>

- *Type:* `string`

---

### SecurityHubEnableOrganizationAdminAccountRequest <a name="aws-cdk-sdk.securityhub.SecurityHubEnableOrganizationAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubEnableOrganizationAdminAccountRequest: securityhub.SecurityHubEnableOrganizationAdminAccountRequest = { ... }
```

##### `adminAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubEnableOrganizationAdminAccountRequest.property.adminAccountId"></a>

- *Type:* `string`

---

### SecurityHubEnableOrganizationAdminAccountResponse <a name="aws-cdk-sdk.securityhub.SecurityHubEnableOrganizationAdminAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubEnableOrganizationAdminAccountResponse: securityhub.SecurityHubEnableOrganizationAdminAccountResponse = { ... }
```

### SecurityHubEnableSecurityHubRequest <a name="aws-cdk-sdk.securityhub.SecurityHubEnableSecurityHubRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubEnableSecurityHubRequest: securityhub.SecurityHubEnableSecurityHubRequest = { ... }
```

##### `enableDefaultStandards`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubEnableSecurityHubRequest.property.enableDefaultStandards"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubEnableSecurityHubRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SecurityHubEnableSecurityHubResponse <a name="aws-cdk-sdk.securityhub.SecurityHubEnableSecurityHubResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubEnableSecurityHubResponse: securityhub.SecurityHubEnableSecurityHubResponse = { ... }
```

### SecurityHubGetEnabledStandardsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetEnabledStandardsRequest: securityhub.SecurityHubGetEnabledStandardsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `standardsSubscriptionArns`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsRequest.property.standardsSubscriptionArns"></a>

- *Type:* `string`[]

---

### SecurityHubGetEnabledStandardsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetEnabledStandardsResponse: securityhub.SecurityHubGetEnabledStandardsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `standardsSubscriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsResponse.property.standardsSubscriptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription`](#aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription)[]

---

### SecurityHubGetFindingsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubGetFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetFindingsRequest: securityhub.SecurityHubGetFindingsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetFindingsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetFindingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetFindingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetFindingsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubSortCriterion`](#aws-cdk-sdk.securityhub.SecurityHubSortCriterion)[]

---

### SecurityHubGetFindingsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubGetFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetFindingsResponse: securityhub.SecurityHubGetFindingsResponse = { ... }
```

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetFindingsResponse.property.findings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetFindingsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubGetInsightResultsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightResultsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetInsightResultsRequest: securityhub.SecurityHubGetInsightResultsRequest = { ... }
```

##### `insightArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightResultsRequest.property.insightArn"></a>

- *Type:* `string`

---

### SecurityHubGetInsightResultsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightResultsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetInsightResultsResponse: securityhub.SecurityHubGetInsightResultsResponse = { ... }
```

##### `insightResults`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightResultsResponse.property.insightResults"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubInsightResults`](#aws-cdk-sdk.securityhub.SecurityHubInsightResults)

---

### SecurityHubGetInsightsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetInsightsRequest: securityhub.SecurityHubGetInsightsRequest = { ... }
```

##### `insightArns`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightsRequest.property.insightArns"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubGetInsightsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetInsightsResponse: securityhub.SecurityHubGetInsightsResponse = { ... }
```

##### `insights`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightsResponse.property.insights"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubInsight`](#aws-cdk-sdk.securityhub.SecurityHubInsight)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetInsightsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubGetInvitationsCountRequest <a name="aws-cdk-sdk.securityhub.SecurityHubGetInvitationsCountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetInvitationsCountRequest: securityhub.SecurityHubGetInvitationsCountRequest = { ... }
```

### SecurityHubGetInvitationsCountResponse <a name="aws-cdk-sdk.securityhub.SecurityHubGetInvitationsCountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetInvitationsCountResponse: securityhub.SecurityHubGetInvitationsCountResponse = { ... }
```

##### `invitationsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetInvitationsCountResponse.property.invitationsCount"></a>

- *Type:* `number`

---

### SecurityHubGetMasterAccountRequest <a name="aws-cdk-sdk.securityhub.SecurityHubGetMasterAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetMasterAccountRequest: securityhub.SecurityHubGetMasterAccountRequest = { ... }
```

### SecurityHubGetMasterAccountResponse <a name="aws-cdk-sdk.securityhub.SecurityHubGetMasterAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetMasterAccountResponse: securityhub.SecurityHubGetMasterAccountResponse = { ... }
```

##### `master`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetMasterAccountResponse.property.master"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubInvitation`](#aws-cdk-sdk.securityhub.SecurityHubInvitation)

---

### SecurityHubGetMembersRequest <a name="aws-cdk-sdk.securityhub.SecurityHubGetMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetMembersRequest: securityhub.SecurityHubGetMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### SecurityHubGetMembersResponse <a name="aws-cdk-sdk.securityhub.SecurityHubGetMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubGetMembersResponse: securityhub.SecurityHubGetMembersResponse = { ... }
```

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetMembersResponse.property.members"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubMember`](#aws-cdk-sdk.securityhub.SecurityHubMember)[]

---

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubGetMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---

### SecurityHubImportFindingsError <a name="aws-cdk-sdk.securityhub.SecurityHubImportFindingsError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubImportFindingsError: securityhub.SecurityHubImportFindingsError = { ... }
```

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubImportFindingsError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubImportFindingsError.property.errorMessage"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubImportFindingsError.property.id"></a>

- *Type:* `string`

---

### SecurityHubInsight <a name="aws-cdk-sdk.securityhub.SecurityHubInsight"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubInsight: securityhub.SecurityHubInsight = { ... }
```

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInsight.property.filters"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters)

---

##### `groupByAttribute`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInsight.property.groupByAttribute"></a>

- *Type:* `string`

---

##### `insightArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInsight.property.insightArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInsight.property.name"></a>

- *Type:* `string`

---

### SecurityHubInsightResults <a name="aws-cdk-sdk.securityhub.SecurityHubInsightResults"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubInsightResults: securityhub.SecurityHubInsightResults = { ... }
```

##### `groupByAttribute`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInsightResults.property.groupByAttribute"></a>

- *Type:* `string`

---

##### `insightArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInsightResults.property.insightArn"></a>

- *Type:* `string`

---

##### `resultValues`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInsightResults.property.resultValues"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubInsightResultValue`](#aws-cdk-sdk.securityhub.SecurityHubInsightResultValue)[]

---

### SecurityHubInsightResultValue <a name="aws-cdk-sdk.securityhub.SecurityHubInsightResultValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubInsightResultValue: securityhub.SecurityHubInsightResultValue = { ... }
```

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInsightResultValue.property.count"></a>

- *Type:* `number`

---

##### `groupByAttributeValue`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInsightResultValue.property.groupByAttributeValue"></a>

- *Type:* `string`

---

### SecurityHubInvitation <a name="aws-cdk-sdk.securityhub.SecurityHubInvitation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubInvitation: securityhub.SecurityHubInvitation = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInvitation.property.accountId"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInvitation.property.invitationId"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInvitation.property.invitedAt"></a>

- *Type:* `string`

---

##### `memberStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInvitation.property.memberStatus"></a>

- *Type:* `string`

---

### SecurityHubInviteMembersRequest <a name="aws-cdk-sdk.securityhub.SecurityHubInviteMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubInviteMembersRequest: securityhub.SecurityHubInviteMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInviteMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### SecurityHubInviteMembersResponse <a name="aws-cdk-sdk.securityhub.SecurityHubInviteMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubInviteMembersResponse: securityhub.SecurityHubInviteMembersResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubInviteMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---

### SecurityHubIpFilter <a name="aws-cdk-sdk.securityhub.SecurityHubIpFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubIpFilter: securityhub.SecurityHubIpFilter = { ... }
```

##### `cidr`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubIpFilter.property.cidr"></a>

- *Type:* `string`

---

### SecurityHubIpv6CidrBlockAssociation <a name="aws-cdk-sdk.securityhub.SecurityHubIpv6CidrBlockAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubIpv6CidrBlockAssociation: securityhub.SecurityHubIpv6CidrBlockAssociation = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubIpv6CidrBlockAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `cidrBlockState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubIpv6CidrBlockAssociation.property.cidrBlockState"></a>

- *Type:* `string`

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubIpv6CidrBlockAssociation.property.ipv6CidrBlock"></a>

- *Type:* `string`

---

### SecurityHubKeywordFilter <a name="aws-cdk-sdk.securityhub.SecurityHubKeywordFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubKeywordFilter: securityhub.SecurityHubKeywordFilter = { ... }
```

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubKeywordFilter.property.value"></a>

- *Type:* `string`

---

### SecurityHubListEnabledProductsForImportRequest <a name="aws-cdk-sdk.securityhub.SecurityHubListEnabledProductsForImportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubListEnabledProductsForImportRequest: securityhub.SecurityHubListEnabledProductsForImportRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListEnabledProductsForImportRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListEnabledProductsForImportRequest.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubListEnabledProductsForImportResponse <a name="aws-cdk-sdk.securityhub.SecurityHubListEnabledProductsForImportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubListEnabledProductsForImportResponse: securityhub.SecurityHubListEnabledProductsForImportResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListEnabledProductsForImportResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `productSubscriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListEnabledProductsForImportResponse.property.productSubscriptions"></a>

- *Type:* `string`[]

---

### SecurityHubListInvitationsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubListInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubListInvitationsRequest: securityhub.SecurityHubListInvitationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListInvitationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListInvitationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubListInvitationsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubListInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubListInvitationsResponse: securityhub.SecurityHubListInvitationsResponse = { ... }
```

##### `invitations`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListInvitationsResponse.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubInvitation`](#aws-cdk-sdk.securityhub.SecurityHubInvitation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListInvitationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubListMembersRequest <a name="aws-cdk-sdk.securityhub.SecurityHubListMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubListMembersRequest: securityhub.SecurityHubListMembersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListMembersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListMembersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `onlyAssociated`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListMembersRequest.property.onlyAssociated"></a>

- *Type:* `boolean`

---

### SecurityHubListMembersResponse <a name="aws-cdk-sdk.securityhub.SecurityHubListMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubListMembersResponse: securityhub.SecurityHubListMembersResponse = { ... }
```

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListMembersResponse.property.members"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubMember`](#aws-cdk-sdk.securityhub.SecurityHubMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListMembersResponse.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubListOrganizationAdminAccountsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubListOrganizationAdminAccountsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubListOrganizationAdminAccountsRequest: securityhub.SecurityHubListOrganizationAdminAccountsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListOrganizationAdminAccountsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListOrganizationAdminAccountsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubListOrganizationAdminAccountsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubListOrganizationAdminAccountsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubListOrganizationAdminAccountsResponse: securityhub.SecurityHubListOrganizationAdminAccountsResponse = { ... }
```

##### `adminAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListOrganizationAdminAccountsResponse.property.adminAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAdminAccount`](#aws-cdk-sdk.securityhub.SecurityHubAdminAccount)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListOrganizationAdminAccountsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SecurityHubListTagsForResourceRequest <a name="aws-cdk-sdk.securityhub.SecurityHubListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubListTagsForResourceRequest: securityhub.SecurityHubListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### SecurityHubListTagsForResourceResponse <a name="aws-cdk-sdk.securityhub.SecurityHubListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubListTagsForResourceResponse: securityhub.SecurityHubListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SecurityHubLoadBalancerState <a name="aws-cdk-sdk.securityhub.SecurityHubLoadBalancerState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubLoadBalancerState: securityhub.SecurityHubLoadBalancerState = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubLoadBalancerState.property.code"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubLoadBalancerState.property.reason"></a>

- *Type:* `string`

---

### SecurityHubMalware <a name="aws-cdk-sdk.securityhub.SecurityHubMalware"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubMalware: securityhub.SecurityHubMalware = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMalware.property.name"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMalware.property.path"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMalware.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMalware.property.type"></a>

- *Type:* `string`

---

### SecurityHubMapFilter <a name="aws-cdk-sdk.securityhub.SecurityHubMapFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubMapFilter: securityhub.SecurityHubMapFilter = { ... }
```

##### `comparison`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMapFilter.property.comparison"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMapFilter.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMapFilter.property.value"></a>

- *Type:* `string`

---

### SecurityHubMember <a name="aws-cdk-sdk.securityhub.SecurityHubMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubMember: securityhub.SecurityHubMember = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMember.property.accountId"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMember.property.email"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMember.property.invitedAt"></a>

- *Type:* `string`

---

##### `masterId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMember.property.masterId"></a>

- *Type:* `string`

---

##### `memberStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMember.property.memberStatus"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubMember.property.updatedAt"></a>

- *Type:* `string`

---

### SecurityHubNetwork <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubNetwork: securityhub.SecurityHubNetwork = { ... }
```

##### `destinationDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.destinationDomain"></a>

- *Type:* `string`

---

##### `destinationIpV4`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.destinationIpV4"></a>

- *Type:* `string`

---

##### `destinationIpV6`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.destinationIpV6"></a>

- *Type:* `string`

---

##### `destinationPort`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.destinationPort"></a>

- *Type:* `number`

---

##### `direction`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.direction"></a>

- *Type:* `string`

---

##### `openPortRange`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.openPortRange"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubPortRange`](#aws-cdk-sdk.securityhub.SecurityHubPortRange)

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.protocol"></a>

- *Type:* `string`

---

##### `sourceDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.sourceDomain"></a>

- *Type:* `string`

---

##### `sourceIpV4`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.sourceIpV4"></a>

- *Type:* `string`

---

##### `sourceIpV6`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.sourceIpV6"></a>

- *Type:* `string`

---

##### `sourceMac`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.sourceMac"></a>

- *Type:* `string`

---

##### `sourcePort`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetwork.property.sourcePort"></a>

- *Type:* `number`

---

### SecurityHubNetworkHeader <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkHeader"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubNetworkHeader: securityhub.SecurityHubNetworkHeader = { ... }
```

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkHeader.property.destination"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponentDetails`](#aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponentDetails)

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkHeader.property.protocol"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkHeader.property.source"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponentDetails`](#aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponentDetails)

---

### SecurityHubNetworkPathComponent <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubNetworkPathComponent: securityhub.SecurityHubNetworkPathComponent = { ... }
```

##### `componentId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponent.property.componentId"></a>

- *Type:* `string`

---

##### `componentType`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponent.property.componentType"></a>

- *Type:* `string`

---

##### `egress`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponent.property.egress"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNetworkHeader`](#aws-cdk-sdk.securityhub.SecurityHubNetworkHeader)

---

##### `ingress`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponent.property.ingress"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNetworkHeader`](#aws-cdk-sdk.securityhub.SecurityHubNetworkHeader)

---

### SecurityHubNetworkPathComponentDetails <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponentDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubNetworkPathComponentDetails: securityhub.SecurityHubNetworkPathComponentDetails = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponentDetails.property.address"></a>

- *Type:* `string`[]

---

##### `portRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNetworkPathComponentDetails.property.portRanges"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubPortRange`](#aws-cdk-sdk.securityhub.SecurityHubPortRange)[]

---

### SecurityHubNote <a name="aws-cdk-sdk.securityhub.SecurityHubNote"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubNote: securityhub.SecurityHubNote = { ... }
```

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNote.property.text"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNote.property.updatedAt"></a>

- *Type:* `string`

---

##### `updatedBy`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNote.property.updatedBy"></a>

- *Type:* `string`

---

### SecurityHubNoteUpdate <a name="aws-cdk-sdk.securityhub.SecurityHubNoteUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubNoteUpdate: securityhub.SecurityHubNoteUpdate = { ... }
```

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNoteUpdate.property.text"></a>

- *Type:* `string`

---

##### `updatedBy`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNoteUpdate.property.updatedBy"></a>

- *Type:* `string`

---

### SecurityHubNumberFilter <a name="aws-cdk-sdk.securityhub.SecurityHubNumberFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubNumberFilter: securityhub.SecurityHubNumberFilter = { ... }
```

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNumberFilter.property.eq"></a>

- *Type:* `number`

---

##### `gte`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNumberFilter.property.gte"></a>

- *Type:* `number`

---

##### `lte`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubNumberFilter.property.lte"></a>

- *Type:* `number`

---

### SecurityHubPatchSummary <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubPatchSummary: securityhub.SecurityHubPatchSummary = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.id"></a>

- *Type:* `string`

---

##### `failedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.failedCount"></a>

- *Type:* `number`

---

##### `installedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.installedCount"></a>

- *Type:* `number`

---

##### `installedOtherCount`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.installedOtherCount"></a>

- *Type:* `number`

---

##### `installedPendingReboot`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.installedPendingReboot"></a>

- *Type:* `number`

---

##### `installedRejectedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.installedRejectedCount"></a>

- *Type:* `number`

---

##### `missingCount`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.missingCount"></a>

- *Type:* `number`

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.operation"></a>

- *Type:* `string`

---

##### `operationEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.operationEndTime"></a>

- *Type:* `string`

---

##### `operationStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.operationStartTime"></a>

- *Type:* `string`

---

##### `rebootOption`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPatchSummary.property.rebootOption"></a>

- *Type:* `string`

---

### SecurityHubPortRange <a name="aws-cdk-sdk.securityhub.SecurityHubPortRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubPortRange: securityhub.SecurityHubPortRange = { ... }
```

##### `begin`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPortRange.property.begin"></a>

- *Type:* `number`

---

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubPortRange.property.end"></a>

- *Type:* `number`

---

### SecurityHubProcessDetails <a name="aws-cdk-sdk.securityhub.SecurityHubProcessDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubProcessDetails: securityhub.SecurityHubProcessDetails = { ... }
```

##### `launchedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProcessDetails.property.launchedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProcessDetails.property.name"></a>

- *Type:* `string`

---

##### `parentPid`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProcessDetails.property.parentPid"></a>

- *Type:* `number`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProcessDetails.property.path"></a>

- *Type:* `string`

---

##### `pid`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProcessDetails.property.pid"></a>

- *Type:* `number`

---

##### `terminatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProcessDetails.property.terminatedAt"></a>

- *Type:* `string`

---

### SecurityHubProduct <a name="aws-cdk-sdk.securityhub.SecurityHubProduct"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubProduct: securityhub.SecurityHubProduct = { ... }
```

##### `productArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProduct.property.productArn"></a>

- *Type:* `string`

---

##### `activationUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProduct.property.activationUrl"></a>

- *Type:* `string`

---

##### `categories`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProduct.property.categories"></a>

- *Type:* `string`[]

---

##### `companyName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProduct.property.companyName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProduct.property.description"></a>

- *Type:* `string`

---

##### `integrationTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProduct.property.integrationTypes"></a>

- *Type:* `string`[]

---

##### `marketplaceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProduct.property.marketplaceUrl"></a>

- *Type:* `string`

---

##### `productName`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProduct.property.productName"></a>

- *Type:* `string`

---

##### `productSubscriptionResourcePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubProduct.property.productSubscriptionResourcePolicy"></a>

- *Type:* `string`

---

### SecurityHubRecommendation <a name="aws-cdk-sdk.securityhub.SecurityHubRecommendation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubRecommendation: securityhub.SecurityHubRecommendation = { ... }
```

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubRecommendation.property.text"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubRecommendation.property.url"></a>

- *Type:* `string`

---

### SecurityHubRelatedFinding <a name="aws-cdk-sdk.securityhub.SecurityHubRelatedFinding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubRelatedFinding: securityhub.SecurityHubRelatedFinding = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubRelatedFinding.property.id"></a>

- *Type:* `string`

---

##### `productArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubRelatedFinding.property.productArn"></a>

- *Type:* `string`

---

### SecurityHubRemediation <a name="aws-cdk-sdk.securityhub.SecurityHubRemediation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubRemediation: securityhub.SecurityHubRemediation = { ... }
```

##### `recommendation`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubRemediation.property.recommendation"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubRecommendation`](#aws-cdk-sdk.securityhub.SecurityHubRecommendation)

---

### SecurityHubResource <a name="aws-cdk-sdk.securityhub.SecurityHubResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubResource: securityhub.SecurityHubResource = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResource.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResource.property.type"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResource.property.details"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResourceDetails`](#aws-cdk-sdk.securityhub.SecurityHubResourceDetails)

---

##### `partition`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResource.property.partition"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResource.property.region"></a>

- *Type:* `string`

---

##### `resourceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResource.property.resourceRole"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SecurityHubResourceDetails <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubResourceDetails: securityhub.SecurityHubResourceDetails = { ... }
```

##### `awsApiGatewayRestApi`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsApiGatewayRestApi"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayRestApiDetails)

---

##### `awsApiGatewayStage`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsApiGatewayStage"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayStageDetails)

---

##### `awsApiGatewayV2Api`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsApiGatewayV2Api"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2ApiDetails)

---

##### `awsApiGatewayV2Stage`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsApiGatewayV2Stage"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsApiGatewayV2StageDetails)

---

##### `awsAutoScalingAutoScalingGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsAutoScalingAutoScalingGroup"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsAutoScalingAutoScalingGroupDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsAutoScalingAutoScalingGroupDetails)

---

##### `awsCertificateManagerCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsCertificateManagerCertificate"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsCertificateManagerCertificateDetails)

---

##### `awsCloudFrontDistribution`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsCloudFrontDistribution"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudFrontDistributionDetails)

---

##### `awsCloudTrailTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsCloudTrailTrail"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsCloudTrailTrailDetails)

---

##### `awsCodeBuildProject`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsCodeBuildProject"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsCodeBuildProjectDetails)

---

##### `awsDynamoDbTable`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsDynamoDbTable"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsDynamoDbTableDetails)

---

##### `awsEc2Eip`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsEc2Eip"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2EipDetails)

---

##### `awsEc2Instance`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsEc2Instance"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2InstanceDetails)

---

##### `awsEc2NetworkInterface`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsEc2NetworkInterface"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2NetworkInterfaceDetails)

---

##### `awsEc2SecurityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsEc2SecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2SecurityGroupDetails)

---

##### `awsEc2Volume`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsEc2Volume"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2VolumeDetails)

---

##### `awsEc2Vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsEc2Vpc"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsEc2VpcDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsEc2VpcDetails)

---

##### `awsElasticsearchDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsElasticsearchDomain"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsElasticsearchDomainDetails)

---

##### `awsElbLoadBalancer`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsElbLoadBalancer"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbLoadBalancerDetails)

---

##### `awsElbv2LoadBalancer`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsElbv2LoadBalancer"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsElbv2LoadBalancerDetails)

---

##### `awsIamAccessKey`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsIamAccessKey"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamAccessKeyDetails)

---

##### `awsIamGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsIamGroup"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamGroupDetails)

---

##### `awsIamPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsIamPolicy"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamPolicyDetails)

---

##### `awsIamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsIamRole"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamRoleDetails)

---

##### `awsIamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsIamUser"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsIamUserDetails)

---

##### `awsKmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsKmsKey"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsKmsKeyDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsKmsKeyDetails)

---

##### `awsLambdaFunction`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsLambdaFunction"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsLambdaFunctionDetails)

---

##### `awsLambdaLayerVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsLambdaLayerVersion"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsLambdaLayerVersionDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsLambdaLayerVersionDetails)

---

##### `awsRdsDbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsRdsDbCluster"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterDetails)

---

##### `awsRdsDbClusterSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsRdsDbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbClusterSnapshotDetails)

---

##### `awsRdsDbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsRdsDbInstance"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbInstanceDetails)

---

##### `awsRdsDbSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsRdsDbSnapshot"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsRdsDbSnapshotDetails)

---

##### `awsRedshiftCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsRedshiftCluster"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsRedshiftClusterDetails)

---

##### `awsS3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsS3Bucket"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsS3BucketDetails)

---

##### `awsS3Object`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsS3Object"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsS3ObjectDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsS3ObjectDetails)

---

##### `awsSecretsManagerSecret`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsSecretsManagerSecret"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecretsManagerSecretDetails)

---

##### `awsSnsTopic`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsSnsTopic"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsSnsTopicDetails)

---

##### `awsSqsQueue`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsSqsQueue"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSqsQueueDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsSqsQueueDetails)

---

##### `awsWafWebAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.awsWafWebAcl"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclDetails`](#aws-cdk-sdk.securityhub.SecurityHubAwsWafWebAclDetails)

---

##### `container`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.container"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubContainerDetails`](#aws-cdk-sdk.securityhub.SecurityHubContainerDetails)

---

##### `other`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResourceDetails.property.other"></a>

- *Type:* {[ key: string ]: `string`}

---

### SecurityHubResult <a name="aws-cdk-sdk.securityhub.SecurityHubResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubResult: securityhub.SecurityHubResult = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResult.property.accountId"></a>

- *Type:* `string`

---

##### `processingResult`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResult.property.processingResult"></a>

- *Type:* `string`

---

### SecurityHubSeverity <a name="aws-cdk-sdk.securityhub.SecurityHubSeverity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubSeverity: securityhub.SecurityHubSeverity = { ... }
```

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSeverity.property.label"></a>

- *Type:* `string`

---

##### `normalized`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSeverity.property.normalized"></a>

- *Type:* `number`

---

##### `original`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSeverity.property.original"></a>

- *Type:* `string`

---

##### `product`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSeverity.property.product"></a>

- *Type:* `number`

---

### SecurityHubSeverityUpdate <a name="aws-cdk-sdk.securityhub.SecurityHubSeverityUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubSeverityUpdate: securityhub.SecurityHubSeverityUpdate = { ... }
```

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSeverityUpdate.property.label"></a>

- *Type:* `string`

---

##### `normalized`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSeverityUpdate.property.normalized"></a>

- *Type:* `number`

---

##### `product`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSeverityUpdate.property.product"></a>

- *Type:* `number`

---

### SecurityHubSoftwarePackage <a name="aws-cdk-sdk.securityhub.SecurityHubSoftwarePackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubSoftwarePackage: securityhub.SecurityHubSoftwarePackage = { ... }
```

##### `architecture`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSoftwarePackage.property.architecture"></a>

- *Type:* `string`

---

##### `epoch`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSoftwarePackage.property.epoch"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSoftwarePackage.property.name"></a>

- *Type:* `string`

---

##### `release`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSoftwarePackage.property.release"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSoftwarePackage.property.version"></a>

- *Type:* `string`

---

### SecurityHubSortCriterion <a name="aws-cdk-sdk.securityhub.SecurityHubSortCriterion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubSortCriterion: securityhub.SecurityHubSortCriterion = { ... }
```

##### `field`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSortCriterion.property.field"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubSortCriterion.property.sortOrder"></a>

- *Type:* `string`

---

### SecurityHubStandard <a name="aws-cdk-sdk.securityhub.SecurityHubStandard"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubStandard: securityhub.SecurityHubStandard = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandard.property.description"></a>

- *Type:* `string`

---

##### `enabledByDefault`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandard.property.enabledByDefault"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandard.property.name"></a>

- *Type:* `string`

---

##### `standardsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandard.property.standardsArn"></a>

- *Type:* `string`

---

### SecurityHubStandardsControl <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubStandardsControl: securityhub.SecurityHubStandardsControl = { ... }
```

##### `controlId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl.property.controlId"></a>

- *Type:* `string`

---

##### `controlStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl.property.controlStatus"></a>

- *Type:* `string`

---

##### `controlStatusUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl.property.controlStatusUpdatedAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl.property.description"></a>

- *Type:* `string`

---

##### `disabledReason`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl.property.disabledReason"></a>

- *Type:* `string`

---

##### `relatedRequirements`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl.property.relatedRequirements"></a>

- *Type:* `string`[]

---

##### `remediationUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl.property.remediationUrl"></a>

- *Type:* `string`

---

##### `severityRating`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl.property.severityRating"></a>

- *Type:* `string`

---

##### `standardsControlArn`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl.property.standardsControlArn"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsControl.property.title"></a>

- *Type:* `string`

---

### SecurityHubStandardsSubscription <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubStandardsSubscription: securityhub.SecurityHubStandardsSubscription = { ... }
```

##### `standardsArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription.property.standardsArn"></a>

- *Type:* `string`

---

##### `standardsInput`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription.property.standardsInput"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `standardsStatus`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription.property.standardsStatus"></a>

- *Type:* `string`

---

##### `standardsSubscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription.property.standardsSubscriptionArn"></a>

- *Type:* `string`

---

### SecurityHubStandardsSubscriptionRequest <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsSubscriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubStandardsSubscriptionRequest: securityhub.SecurityHubStandardsSubscriptionRequest = { ... }
```

##### `standardsArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsSubscriptionRequest.property.standardsArn"></a>

- *Type:* `string`

---

##### `standardsInput`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStandardsSubscriptionRequest.property.standardsInput"></a>

- *Type:* {[ key: string ]: `string`}

---

### SecurityHubStatusReason <a name="aws-cdk-sdk.securityhub.SecurityHubStatusReason"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubStatusReason: securityhub.SecurityHubStatusReason = { ... }
```

##### `reasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStatusReason.property.reasonCode"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStatusReason.property.description"></a>

- *Type:* `string`

---

### SecurityHubStringFilter <a name="aws-cdk-sdk.securityhub.SecurityHubStringFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubStringFilter: securityhub.SecurityHubStringFilter = { ... }
```

##### `comparison`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStringFilter.property.comparison"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubStringFilter.property.value"></a>

- *Type:* `string`

---

### SecurityHubTagResourceRequest <a name="aws-cdk-sdk.securityhub.SecurityHubTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubTagResourceRequest: securityhub.SecurityHubTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SecurityHubTagResourceResponse <a name="aws-cdk-sdk.securityhub.SecurityHubTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubTagResourceResponse: securityhub.SecurityHubTagResourceResponse = { ... }
```

### SecurityHubThreatIntelIndicator <a name="aws-cdk-sdk.securityhub.SecurityHubThreatIntelIndicator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubThreatIntelIndicator: securityhub.SecurityHubThreatIntelIndicator = { ... }
```

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubThreatIntelIndicator.property.category"></a>

- *Type:* `string`

---

##### `lastObservedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubThreatIntelIndicator.property.lastObservedAt"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubThreatIntelIndicator.property.source"></a>

- *Type:* `string`

---

##### `sourceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubThreatIntelIndicator.property.sourceUrl"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubThreatIntelIndicator.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubThreatIntelIndicator.property.value"></a>

- *Type:* `string`

---

### SecurityHubUntagResourceRequest <a name="aws-cdk-sdk.securityhub.SecurityHubUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUntagResourceRequest: securityhub.SecurityHubUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### SecurityHubUntagResourceResponse <a name="aws-cdk-sdk.securityhub.SecurityHubUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUntagResourceResponse: securityhub.SecurityHubUntagResourceResponse = { ... }
```

### SecurityHubUpdateActionTargetRequest <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateActionTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateActionTargetRequest: securityhub.SecurityHubUpdateActionTargetRequest = { ... }
```

##### `actionTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateActionTargetRequest.property.actionTargetArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateActionTargetRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateActionTargetRequest.property.name"></a>

- *Type:* `string`

---

### SecurityHubUpdateActionTargetResponse <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateActionTargetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateActionTargetResponse: securityhub.SecurityHubUpdateActionTargetResponse = { ... }
```

### SecurityHubUpdateFindingsRequest <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateFindingsRequest: securityhub.SecurityHubUpdateFindingsRequest = { ... }
```

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateFindingsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters)

---

##### `note`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateFindingsRequest.property.note"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubNoteUpdate`](#aws-cdk-sdk.securityhub.SecurityHubNoteUpdate)

---

##### `recordState`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateFindingsRequest.property.recordState"></a>

- *Type:* `string`

---

### SecurityHubUpdateFindingsResponse <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateFindingsResponse: securityhub.SecurityHubUpdateFindingsResponse = { ... }
```

### SecurityHubUpdateInsightRequest <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateInsightRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateInsightRequest: securityhub.SecurityHubUpdateInsightRequest = { ... }
```

##### `insightArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateInsightRequest.property.insightArn"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateInsightRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingFilters)

---

##### `groupByAttribute`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateInsightRequest.property.groupByAttribute"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateInsightRequest.property.name"></a>

- *Type:* `string`

---

### SecurityHubUpdateInsightResponse <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateInsightResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateInsightResponse: securityhub.SecurityHubUpdateInsightResponse = { ... }
```

### SecurityHubUpdateOrganizationConfigurationRequest <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateOrganizationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateOrganizationConfigurationRequest: securityhub.SecurityHubUpdateOrganizationConfigurationRequest = { ... }
```

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateOrganizationConfigurationRequest.property.autoEnable"></a>

- *Type:* `boolean`

---

### SecurityHubUpdateOrganizationConfigurationResponse <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateOrganizationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateOrganizationConfigurationResponse: securityhub.SecurityHubUpdateOrganizationConfigurationResponse = { ... }
```

### SecurityHubUpdateSecurityHubConfigurationRequest <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateSecurityHubConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateSecurityHubConfigurationRequest: securityhub.SecurityHubUpdateSecurityHubConfigurationRequest = { ... }
```

##### `autoEnableControls`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateSecurityHubConfigurationRequest.property.autoEnableControls"></a>

- *Type:* `boolean`

---

### SecurityHubUpdateSecurityHubConfigurationResponse <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateSecurityHubConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateSecurityHubConfigurationResponse: securityhub.SecurityHubUpdateSecurityHubConfigurationResponse = { ... }
```

### SecurityHubUpdateStandardsControlRequest <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateStandardsControlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateStandardsControlRequest: securityhub.SecurityHubUpdateStandardsControlRequest = { ... }
```

##### `standardsControlArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateStandardsControlRequest.property.standardsControlArn"></a>

- *Type:* `string`

---

##### `controlStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateStandardsControlRequest.property.controlStatus"></a>

- *Type:* `string`

---

##### `disabledReason`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateStandardsControlRequest.property.disabledReason"></a>

- *Type:* `string`

---

### SecurityHubUpdateStandardsControlResponse <a name="aws-cdk-sdk.securityhub.SecurityHubUpdateStandardsControlResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubUpdateStandardsControlResponse: securityhub.SecurityHubUpdateStandardsControlResponse = { ... }
```

### SecurityHubVulnerability <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerability"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubVulnerability: securityhub.SecurityHubVulnerability = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerability.property.id"></a>

- *Type:* `string`

---

##### `cvss`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerability.property.cvss"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubCvss`](#aws-cdk-sdk.securityhub.SecurityHubCvss)[]

---

##### `referenceUrls`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerability.property.referenceUrls"></a>

- *Type:* `string`[]

---

##### `relatedVulnerabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerability.property.relatedVulnerabilities"></a>

- *Type:* `string`[]

---

##### `vendor`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerability.property.vendor"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubVulnerabilityVendor`](#aws-cdk-sdk.securityhub.SecurityHubVulnerabilityVendor)

---

##### `vulnerablePackages`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerability.property.vulnerablePackages"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubSoftwarePackage`](#aws-cdk-sdk.securityhub.SecurityHubSoftwarePackage)[]

---

### SecurityHubVulnerabilityVendor <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerabilityVendor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubVulnerabilityVendor: securityhub.SecurityHubVulnerabilityVendor = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerabilityVendor.property.name"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerabilityVendor.property.url"></a>

- *Type:* `string`

---

##### `vendorCreatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerabilityVendor.property.vendorCreatedAt"></a>

- *Type:* `string`

---

##### `vendorSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerabilityVendor.property.vendorSeverity"></a>

- *Type:* `string`

---

##### `vendorUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubVulnerabilityVendor.property.vendorUpdatedAt"></a>

- *Type:* `string`

---

### SecurityHubWafAction <a name="aws-cdk-sdk.securityhub.SecurityHubWafAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubWafAction: securityhub.SecurityHubWafAction = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubWafAction.property.type"></a>

- *Type:* `string`

---

### SecurityHubWafExcludedRule <a name="aws-cdk-sdk.securityhub.SecurityHubWafExcludedRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubWafExcludedRule: securityhub.SecurityHubWafExcludedRule = { ... }
```

##### `ruleId`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubWafExcludedRule.property.ruleId"></a>

- *Type:* `string`

---

### SecurityHubWafOverrideAction <a name="aws-cdk-sdk.securityhub.SecurityHubWafOverrideAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubWafOverrideAction: securityhub.SecurityHubWafOverrideAction = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubWafOverrideAction.property.type"></a>

- *Type:* `string`

---

### SecurityHubWorkflow <a name="aws-cdk-sdk.securityhub.SecurityHubWorkflow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubWorkflow: securityhub.SecurityHubWorkflow = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubWorkflow.property.status"></a>

- *Type:* `string`

---

### SecurityHubWorkflowUpdate <a name="aws-cdk-sdk.securityhub.SecurityHubWorkflowUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

const securityHubWorkflowUpdate: securityhub.SecurityHubWorkflowUpdate = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubWorkflowUpdate.property.status"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### SecurityHubResponsesBatchDisableStandards <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchDisableStandards"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchDisableStandards.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesBatchDisableStandards(__scope: Construct, __resources: string[], __input: SecurityHubBatchDisableStandardsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchDisableStandards.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchDisableStandards.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchDisableStandards.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubBatchDisableStandardsRequest`](#aws-cdk-sdk.securityhub.SecurityHubBatchDisableStandardsRequest)

---



#### Properties <a name="Properties"></a>

##### `standardsSubscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchDisableStandards.property.standardsSubscriptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription`](#aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription)[]

---


### SecurityHubResponsesBatchEnableStandards <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchEnableStandards"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchEnableStandards.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesBatchEnableStandards(__scope: Construct, __resources: string[], __input: SecurityHubBatchEnableStandardsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchEnableStandards.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchEnableStandards.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchEnableStandards.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubBatchEnableStandardsRequest`](#aws-cdk-sdk.securityhub.SecurityHubBatchEnableStandardsRequest)

---



#### Properties <a name="Properties"></a>

##### `standardsSubscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchEnableStandards.property.standardsSubscriptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription`](#aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription)[]

---


### SecurityHubResponsesBatchImportFindings <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchImportFindings"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchImportFindings.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesBatchImportFindings(__scope: Construct, __resources: string[], __input: SecurityHubBatchImportFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchImportFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchImportFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchImportFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubBatchImportFindingsRequest`](#aws-cdk-sdk.securityhub.SecurityHubBatchImportFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedCount`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchImportFindings.property.failedCount"></a>

- *Type:* `number`

---

##### `failedFindings`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchImportFindings.property.failedFindings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubImportFindingsError`](#aws-cdk-sdk.securityhub.SecurityHubImportFindingsError)[]

---

##### `successCount`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchImportFindings.property.successCount"></a>

- *Type:* `number`

---


### SecurityHubResponsesBatchUpdateFindings <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchUpdateFindings"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchUpdateFindings.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesBatchUpdateFindings(__scope: Construct, __resources: string[], __input: SecurityHubBatchUpdateFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchUpdateFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchUpdateFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchUpdateFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest`](#aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `processedFindings`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchUpdateFindings.property.processedFindings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFindingIdentifier)[]

---

##### `unprocessedFindings`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesBatchUpdateFindings.property.unprocessedFindings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsUnprocessedFinding`](#aws-cdk-sdk.securityhub.SecurityHubBatchUpdateFindingsUnprocessedFinding)[]

---


### SecurityHubResponsesCreateActionTarget <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateActionTarget.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesCreateActionTarget(__scope: Construct, __resources: string[], __input: SecurityHubCreateActionTargetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubCreateActionTargetRequest`](#aws-cdk-sdk.securityhub.SecurityHubCreateActionTargetRequest)

---



#### Properties <a name="Properties"></a>

##### `actionTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateActionTarget.property.actionTargetArn"></a>

- *Type:* `string`

---


### SecurityHubResponsesCreateInsight <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateInsight"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateInsight.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesCreateInsight(__scope: Construct, __resources: string[], __input: SecurityHubCreateInsightRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateInsight.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateInsight.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateInsight.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubCreateInsightRequest`](#aws-cdk-sdk.securityhub.SecurityHubCreateInsightRequest)

---



#### Properties <a name="Properties"></a>

##### `insightArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateInsight.property.insightArn"></a>

- *Type:* `string`

---


### SecurityHubResponsesCreateMembers <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateMembers"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateMembers.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesCreateMembers(__scope: Construct, __resources: string[], __input: SecurityHubCreateMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubCreateMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubCreateMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesCreateMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---


### SecurityHubResponsesDeclineInvitations <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeclineInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeclineInvitations.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDeclineInvitations(__scope: Construct, __resources: string[], __input: SecurityHubDeclineInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeclineInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeclineInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeclineInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDeclineInvitationsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDeclineInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeclineInvitations.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---


### SecurityHubResponsesDeleteActionTarget <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteActionTarget.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDeleteActionTarget(__scope: Construct, __resources: string[], __input: SecurityHubDeleteActionTargetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDeleteActionTargetRequest`](#aws-cdk-sdk.securityhub.SecurityHubDeleteActionTargetRequest)

---



#### Properties <a name="Properties"></a>

##### `actionTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteActionTarget.property.actionTargetArn"></a>

- *Type:* `string`

---


### SecurityHubResponsesDeleteInsight <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInsight"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInsight.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDeleteInsight(__scope: Construct, __resources: string[], __input: SecurityHubDeleteInsightRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInsight.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInsight.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInsight.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDeleteInsightRequest`](#aws-cdk-sdk.securityhub.SecurityHubDeleteInsightRequest)

---



#### Properties <a name="Properties"></a>

##### `insightArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInsight.property.insightArn"></a>

- *Type:* `string`

---


### SecurityHubResponsesDeleteInvitations <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInvitations.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDeleteInvitations(__scope: Construct, __resources: string[], __input: SecurityHubDeleteInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDeleteInvitationsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDeleteInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteInvitations.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---


### SecurityHubResponsesDeleteMembers <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteMembers"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteMembers.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDeleteMembers(__scope: Construct, __resources: string[], __input: SecurityHubDeleteMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDeleteMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubDeleteMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDeleteMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---


### SecurityHubResponsesDescribeActionTargets <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeActionTargets"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeActionTargets.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDescribeActionTargets(__scope: Construct, __resources: string[], __input: SecurityHubDescribeActionTargetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeActionTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeActionTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeActionTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDescribeActionTargetsRequest)

---



#### Properties <a name="Properties"></a>

##### `actionTargets`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeActionTargets.property.actionTargets"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubActionTarget`](#aws-cdk-sdk.securityhub.SecurityHubActionTarget)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeActionTargets.property.nextToken"></a>

- *Type:* `string`

---


### SecurityHubResponsesDescribeHub <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeHub"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeHub.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDescribeHub(__scope: Construct, __resources: string[], __input: SecurityHubDescribeHubRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeHub.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeHub.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeHub.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDescribeHubRequest`](#aws-cdk-sdk.securityhub.SecurityHubDescribeHubRequest)

---



#### Properties <a name="Properties"></a>

##### `autoEnableControls`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeHub.property.autoEnableControls"></a>

- *Type:* `boolean`

---

##### `hubArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeHub.property.hubArn"></a>

- *Type:* `string`

---

##### `subscribedAt`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeHub.property.subscribedAt"></a>

- *Type:* `string`

---


### SecurityHubResponsesDescribeOrganizationConfiguration <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeOrganizationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeOrganizationConfiguration.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDescribeOrganizationConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeOrganizationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeOrganizationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeOrganizationConfiguration.property.autoEnable"></a>

- *Type:* `boolean`

---

##### `memberAccountLimitReached`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeOrganizationConfiguration.property.memberAccountLimitReached"></a>

- *Type:* `boolean`

---


### SecurityHubResponsesDescribeProducts <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeProducts"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeProducts.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDescribeProducts(__scope: Construct, __resources: string[], __input: SecurityHubDescribeProductsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeProducts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeProducts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeProducts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDescribeProductsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDescribeProductsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeProducts.property.nextToken"></a>

- *Type:* `string`

---

##### `products`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeProducts.property.products"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubProduct`](#aws-cdk-sdk.securityhub.SecurityHubProduct)[]

---


### SecurityHubResponsesDescribeStandards <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandards"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandards.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDescribeStandards(__scope: Construct, __resources: string[], __input: SecurityHubDescribeStandardsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandards.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandards.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandards.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandards.property.nextToken"></a>

- *Type:* `string`

---

##### `standards`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandards.property.standards"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandard`](#aws-cdk-sdk.securityhub.SecurityHubStandard)[]

---


### SecurityHubResponsesDescribeStandardsControls <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandardsControls"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandardsControls.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesDescribeStandardsControls(__scope: Construct, __resources: string[], __input: SecurityHubDescribeStandardsControlsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandardsControls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandardsControls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandardsControls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsRequest`](#aws-cdk-sdk.securityhub.SecurityHubDescribeStandardsControlsRequest)

---



#### Properties <a name="Properties"></a>

##### `controls`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandardsControls.property.controls"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandardsControl`](#aws-cdk-sdk.securityhub.SecurityHubStandardsControl)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesDescribeStandardsControls.property.nextToken"></a>

- *Type:* `string`

---


### SecurityHubResponsesEnableImportFindingsForProduct <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesEnableImportFindingsForProduct"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesEnableImportFindingsForProduct.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesEnableImportFindingsForProduct(__scope: Construct, __resources: string[], __input: SecurityHubEnableImportFindingsForProductRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesEnableImportFindingsForProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesEnableImportFindingsForProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesEnableImportFindingsForProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubEnableImportFindingsForProductRequest`](#aws-cdk-sdk.securityhub.SecurityHubEnableImportFindingsForProductRequest)

---



#### Properties <a name="Properties"></a>

##### `productSubscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesEnableImportFindingsForProduct.property.productSubscriptionArn"></a>

- *Type:* `string`

---


### SecurityHubResponsesFetchEnabledStandards <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchEnabledStandards"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchEnabledStandards.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesFetchEnabledStandards(__scope: Construct, __resources: string[], __input: SecurityHubGetEnabledStandardsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchEnabledStandards.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchEnabledStandards.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchEnabledStandards.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetEnabledStandardsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchEnabledStandards.property.nextToken"></a>

- *Type:* `string`

---

##### `standardsSubscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchEnabledStandards.property.standardsSubscriptions"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription`](#aws-cdk-sdk.securityhub.SecurityHubStandardsSubscription)[]

---


### SecurityHubResponsesFetchFindings <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchFindings"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchFindings.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesFetchFindings(__scope: Construct, __resources: string[], __input: SecurityHubGetFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetFindingsRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchFindings.property.findings"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding`](#aws-cdk-sdk.securityhub.SecurityHubAwsSecurityFinding)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchFindings.property.nextToken"></a>

- *Type:* `string`

---


### SecurityHubResponsesFetchInsightResults <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResults"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResults.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesFetchInsightResults(__scope: Construct, __resources: string[], __input: SecurityHubGetInsightResultsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetInsightResultsRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetInsightResultsRequest)

---



#### Properties <a name="Properties"></a>

##### `insightResults`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResults.property.insightResults"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResultsInsightResults`](#aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResultsInsightResults)

---


### SecurityHubResponsesFetchInsightResultsInsightResults <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResultsInsightResults"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResultsInsightResults.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesFetchInsightResultsInsightResults(__scope: Construct, __resources: string[], __input: SecurityHubGetInsightResultsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResultsInsightResults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResultsInsightResults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResultsInsightResults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetInsightResultsRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetInsightResultsRequest)

---



#### Properties <a name="Properties"></a>

##### `groupByAttribute`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResultsInsightResults.property.groupByAttribute"></a>

- *Type:* `string`

---

##### `insightArn`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResultsInsightResults.property.insightArn"></a>

- *Type:* `string`

---

##### `resultValues`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsightResultsInsightResults.property.resultValues"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubInsightResultValue`](#aws-cdk-sdk.securityhub.SecurityHubInsightResultValue)[]

---


### SecurityHubResponsesFetchInsights <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsights"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsights.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesFetchInsights(__scope: Construct, __resources: string[], __input: SecurityHubGetInsightsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsights.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsights.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsights.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetInsightsRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetInsightsRequest)

---



#### Properties <a name="Properties"></a>

##### `insights`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsights.property.insights"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubInsight`](#aws-cdk-sdk.securityhub.SecurityHubInsight)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInsights.property.nextToken"></a>

- *Type:* `string`

---


### SecurityHubResponsesFetchInvitationsCount <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInvitationsCount"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInvitationsCount.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesFetchInvitationsCount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInvitationsCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInvitationsCount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `invitationsCount`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchInvitationsCount.property.invitationsCount"></a>

- *Type:* `number`

---


### SecurityHubResponsesFetchMasterAccount <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccount"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccount.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesFetchMasterAccount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `master`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccount.property.master"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccountMaster`](#aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccountMaster)

---


### SecurityHubResponsesFetchMasterAccountMaster <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccountMaster"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccountMaster.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesFetchMasterAccountMaster(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccountMaster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccountMaster.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccountMaster.property.accountId"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccountMaster.property.invitationId"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccountMaster.property.invitedAt"></a>

- *Type:* `string`

---

##### `memberStatus`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMasterAccountMaster.property.memberStatus"></a>

- *Type:* `string`

---


### SecurityHubResponsesFetchMembers <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMembers"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMembers.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesFetchMembers(__scope: Construct, __resources: string[], __input: SecurityHubGetMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubGetMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubGetMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMembers.property.members"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubMember`](#aws-cdk-sdk.securityhub.SecurityHubMember)[]

---

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesFetchMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---


### SecurityHubResponsesInviteMembers <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesInviteMembers"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesInviteMembers.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesInviteMembers(__scope: Construct, __resources: string[], __input: SecurityHubInviteMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesInviteMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesInviteMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesInviteMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubInviteMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubInviteMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesInviteMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubResult`](#aws-cdk-sdk.securityhub.SecurityHubResult)[]

---


### SecurityHubResponsesListEnabledProductsForImport <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListEnabledProductsForImport"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListEnabledProductsForImport.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesListEnabledProductsForImport(__scope: Construct, __resources: string[], __input: SecurityHubListEnabledProductsForImportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListEnabledProductsForImport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListEnabledProductsForImport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListEnabledProductsForImport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubListEnabledProductsForImportRequest`](#aws-cdk-sdk.securityhub.SecurityHubListEnabledProductsForImportRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListEnabledProductsForImport.property.nextToken"></a>

- *Type:* `string`

---

##### `productSubscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListEnabledProductsForImport.property.productSubscriptions"></a>

- *Type:* `string`[]

---


### SecurityHubResponsesListInvitations <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListInvitations.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesListInvitations(__scope: Construct, __resources: string[], __input: SecurityHubListInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubListInvitationsRequest`](#aws-cdk-sdk.securityhub.SecurityHubListInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `invitations`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListInvitations.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubInvitation`](#aws-cdk-sdk.securityhub.SecurityHubInvitation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListInvitations.property.nextToken"></a>

- *Type:* `string`

---


### SecurityHubResponsesListMembers <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListMembers"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListMembers.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesListMembers(__scope: Construct, __resources: string[], __input: SecurityHubListMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubListMembersRequest`](#aws-cdk-sdk.securityhub.SecurityHubListMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListMembers.property.members"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubMember`](#aws-cdk-sdk.securityhub.SecurityHubMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListMembers.property.nextToken"></a>

- *Type:* `string`

---


### SecurityHubResponsesListOrganizationAdminAccounts <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListOrganizationAdminAccounts"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListOrganizationAdminAccounts.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesListOrganizationAdminAccounts(__scope: Construct, __resources: string[], __input: SecurityHubListOrganizationAdminAccountsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListOrganizationAdminAccounts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListOrganizationAdminAccounts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListOrganizationAdminAccounts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubListOrganizationAdminAccountsRequest`](#aws-cdk-sdk.securityhub.SecurityHubListOrganizationAdminAccountsRequest)

---



#### Properties <a name="Properties"></a>

##### `adminAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListOrganizationAdminAccounts.property.adminAccounts"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubAdminAccount`](#aws-cdk-sdk.securityhub.SecurityHubAdminAccount)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListOrganizationAdminAccounts.property.nextToken"></a>

- *Type:* `string`

---


### SecurityHubResponsesListTagsForResource <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListTagsForResource.Initializer"></a>

```typescript
import { securityhub } from 'aws-cdk-sdk'

new securityhub.SecurityHubResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: SecurityHubListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.securityhub.SecurityHubListTagsForResourceRequest`](#aws-cdk-sdk.securityhub.SecurityHubListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.securityhub.SecurityHubResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---



