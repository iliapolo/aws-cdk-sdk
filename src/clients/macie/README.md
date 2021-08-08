# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MacieClient <a name="aws-cdk-sdk.macie.MacieClient"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieClient.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptInvitation` <a name="aws-cdk-sdk.macie.MacieClient.acceptInvitation"></a>

```typescript
public acceptInvitation(input: MacieAcceptInvitationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieAcceptInvitationRequest`](#aws-cdk-sdk.macie.MacieAcceptInvitationRequest)

---

##### `batchGetCustomDataIdentifiers` <a name="aws-cdk-sdk.macie.MacieClient.batchGetCustomDataIdentifiers"></a>

```typescript
public batchGetCustomDataIdentifiers(input: MacieBatchGetCustomDataIdentifiersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifiersRequest`](#aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifiersRequest)

---

##### `createClassificationJob` <a name="aws-cdk-sdk.macie.MacieClient.createClassificationJob"></a>

```typescript
public createClassificationJob(input: MacieCreateClassificationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateClassificationJobRequest`](#aws-cdk-sdk.macie.MacieCreateClassificationJobRequest)

---

##### `createCustomDataIdentifier` <a name="aws-cdk-sdk.macie.MacieClient.createCustomDataIdentifier"></a>

```typescript
public createCustomDataIdentifier(input: MacieCreateCustomDataIdentifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest`](#aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest)

---

##### `createFindingsFilter` <a name="aws-cdk-sdk.macie.MacieClient.createFindingsFilter"></a>

```typescript
public createFindingsFilter(input: MacieCreateFindingsFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest`](#aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest)

---

##### `createInvitations` <a name="aws-cdk-sdk.macie.MacieClient.createInvitations"></a>

```typescript
public createInvitations(input: MacieCreateInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateInvitationsRequest`](#aws-cdk-sdk.macie.MacieCreateInvitationsRequest)

---

##### `createMember` <a name="aws-cdk-sdk.macie.MacieClient.createMember"></a>

```typescript
public createMember(input: MacieCreateMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateMemberRequest`](#aws-cdk-sdk.macie.MacieCreateMemberRequest)

---

##### `createSampleFindings` <a name="aws-cdk-sdk.macie.MacieClient.createSampleFindings"></a>

```typescript
public createSampleFindings(input: MacieCreateSampleFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateSampleFindingsRequest`](#aws-cdk-sdk.macie.MacieCreateSampleFindingsRequest)

---

##### `declineInvitations` <a name="aws-cdk-sdk.macie.MacieClient.declineInvitations"></a>

```typescript
public declineInvitations(input: MacieDeclineInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDeclineInvitationsRequest`](#aws-cdk-sdk.macie.MacieDeclineInvitationsRequest)

---

##### `deleteCustomDataIdentifier` <a name="aws-cdk-sdk.macie.MacieClient.deleteCustomDataIdentifier"></a>

```typescript
public deleteCustomDataIdentifier(input: MacieDeleteCustomDataIdentifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDeleteCustomDataIdentifierRequest`](#aws-cdk-sdk.macie.MacieDeleteCustomDataIdentifierRequest)

---

##### `deleteFindingsFilter` <a name="aws-cdk-sdk.macie.MacieClient.deleteFindingsFilter"></a>

```typescript
public deleteFindingsFilter(input: MacieDeleteFindingsFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDeleteFindingsFilterRequest`](#aws-cdk-sdk.macie.MacieDeleteFindingsFilterRequest)

---

##### `deleteInvitations` <a name="aws-cdk-sdk.macie.MacieClient.deleteInvitations"></a>

```typescript
public deleteInvitations(input: MacieDeleteInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDeleteInvitationsRequest`](#aws-cdk-sdk.macie.MacieDeleteInvitationsRequest)

---

##### `deleteMember` <a name="aws-cdk-sdk.macie.MacieClient.deleteMember"></a>

```typescript
public deleteMember(input: MacieDeleteMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDeleteMemberRequest`](#aws-cdk-sdk.macie.MacieDeleteMemberRequest)

---

##### `describeBuckets` <a name="aws-cdk-sdk.macie.MacieClient.describeBuckets"></a>

```typescript
public describeBuckets(input: MacieDescribeBucketsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeBucketsRequest`](#aws-cdk-sdk.macie.MacieDescribeBucketsRequest)

---

##### `describeClassificationJob` <a name="aws-cdk-sdk.macie.MacieClient.describeClassificationJob"></a>

```typescript
public describeClassificationJob(input: MacieDescribeClassificationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---

##### `describeOrganizationConfiguration` <a name="aws-cdk-sdk.macie.MacieClient.describeOrganizationConfiguration"></a>

```typescript
public describeOrganizationConfiguration()
```

##### `disableMacie` <a name="aws-cdk-sdk.macie.MacieClient.disableMacie"></a>

```typescript
public disableMacie()
```

##### `disableOrganizationAdminAccount` <a name="aws-cdk-sdk.macie.MacieClient.disableOrganizationAdminAccount"></a>

```typescript
public disableOrganizationAdminAccount(input: MacieDisableOrganizationAdminAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDisableOrganizationAdminAccountRequest`](#aws-cdk-sdk.macie.MacieDisableOrganizationAdminAccountRequest)

---

##### `disassociateFromMasterAccount` <a name="aws-cdk-sdk.macie.MacieClient.disassociateFromMasterAccount"></a>

```typescript
public disassociateFromMasterAccount()
```

##### `disassociateMember` <a name="aws-cdk-sdk.macie.MacieClient.disassociateMember"></a>

```typescript
public disassociateMember(input: MacieDisassociateMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDisassociateMemberRequest`](#aws-cdk-sdk.macie.MacieDisassociateMemberRequest)

---

##### `enableMacie` <a name="aws-cdk-sdk.macie.MacieClient.enableMacie"></a>

```typescript
public enableMacie(input: MacieEnableMacieRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieEnableMacieRequest`](#aws-cdk-sdk.macie.MacieEnableMacieRequest)

---

##### `enableOrganizationAdminAccount` <a name="aws-cdk-sdk.macie.MacieClient.enableOrganizationAdminAccount"></a>

```typescript
public enableOrganizationAdminAccount(input: MacieEnableOrganizationAdminAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieEnableOrganizationAdminAccountRequest`](#aws-cdk-sdk.macie.MacieEnableOrganizationAdminAccountRequest)

---

##### `fetchBucketStatistics` <a name="aws-cdk-sdk.macie.MacieClient.fetchBucketStatistics"></a>

```typescript
public fetchBucketStatistics(input: MacieGetBucketStatisticsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest)

---

##### `fetchClassificationExportConfiguration` <a name="aws-cdk-sdk.macie.MacieClient.fetchClassificationExportConfiguration"></a>

```typescript
public fetchClassificationExportConfiguration()
```

##### `fetchCustomDataIdentifier` <a name="aws-cdk-sdk.macie.MacieClient.fetchCustomDataIdentifier"></a>

```typescript
public fetchCustomDataIdentifier(input: MacieGetCustomDataIdentifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetCustomDataIdentifierRequest`](#aws-cdk-sdk.macie.MacieGetCustomDataIdentifierRequest)

---

##### `fetchFindings` <a name="aws-cdk-sdk.macie.MacieClient.fetchFindings"></a>

```typescript
public fetchFindings(input: MacieGetFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetFindingsRequest`](#aws-cdk-sdk.macie.MacieGetFindingsRequest)

---

##### `fetchFindingsFilter` <a name="aws-cdk-sdk.macie.MacieClient.fetchFindingsFilter"></a>

```typescript
public fetchFindingsFilter(input: MacieGetFindingsFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetFindingsFilterRequest`](#aws-cdk-sdk.macie.MacieGetFindingsFilterRequest)

---

##### `fetchFindingStatistics` <a name="aws-cdk-sdk.macie.MacieClient.fetchFindingStatistics"></a>

```typescript
public fetchFindingStatistics(input: MacieGetFindingStatisticsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetFindingStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetFindingStatisticsRequest)

---

##### `fetchInvitationsCount` <a name="aws-cdk-sdk.macie.MacieClient.fetchInvitationsCount"></a>

```typescript
public fetchInvitationsCount()
```

##### `fetchMacieSession` <a name="aws-cdk-sdk.macie.MacieClient.fetchMacieSession"></a>

```typescript
public fetchMacieSession()
```

##### `fetchMasterAccount` <a name="aws-cdk-sdk.macie.MacieClient.fetchMasterAccount"></a>

```typescript
public fetchMasterAccount()
```

##### `fetchMember` <a name="aws-cdk-sdk.macie.MacieClient.fetchMember"></a>

```typescript
public fetchMember(input: MacieGetMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetMemberRequest`](#aws-cdk-sdk.macie.MacieGetMemberRequest)

---

##### `fetchUsageStatistics` <a name="aws-cdk-sdk.macie.MacieClient.fetchUsageStatistics"></a>

```typescript
public fetchUsageStatistics(input: MacieGetUsageStatisticsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetUsageStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetUsageStatisticsRequest)

---

##### `fetchUsageTotals` <a name="aws-cdk-sdk.macie.MacieClient.fetchUsageTotals"></a>

```typescript
public fetchUsageTotals()
```

##### `listClassificationJobs` <a name="aws-cdk-sdk.macie.MacieClient.listClassificationJobs"></a>

```typescript
public listClassificationJobs(input: MacieListClassificationJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListClassificationJobsRequest`](#aws-cdk-sdk.macie.MacieListClassificationJobsRequest)

---

##### `listCustomDataIdentifiers` <a name="aws-cdk-sdk.macie.MacieClient.listCustomDataIdentifiers"></a>

```typescript
public listCustomDataIdentifiers(input: MacieListCustomDataIdentifiersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListCustomDataIdentifiersRequest`](#aws-cdk-sdk.macie.MacieListCustomDataIdentifiersRequest)

---

##### `listFindings` <a name="aws-cdk-sdk.macie.MacieClient.listFindings"></a>

```typescript
public listFindings(input: MacieListFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListFindingsRequest`](#aws-cdk-sdk.macie.MacieListFindingsRequest)

---

##### `listFindingsFilters` <a name="aws-cdk-sdk.macie.MacieClient.listFindingsFilters"></a>

```typescript
public listFindingsFilters(input: MacieListFindingsFiltersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListFindingsFiltersRequest`](#aws-cdk-sdk.macie.MacieListFindingsFiltersRequest)

---

##### `listInvitations` <a name="aws-cdk-sdk.macie.MacieClient.listInvitations"></a>

```typescript
public listInvitations(input: MacieListInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListInvitationsRequest`](#aws-cdk-sdk.macie.MacieListInvitationsRequest)

---

##### `listMembers` <a name="aws-cdk-sdk.macie.MacieClient.listMembers"></a>

```typescript
public listMembers(input: MacieListMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListMembersRequest`](#aws-cdk-sdk.macie.MacieListMembersRequest)

---

##### `listOrganizationAdminAccounts` <a name="aws-cdk-sdk.macie.MacieClient.listOrganizationAdminAccounts"></a>

```typescript
public listOrganizationAdminAccounts(input: MacieListOrganizationAdminAccountsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListOrganizationAdminAccountsRequest`](#aws-cdk-sdk.macie.MacieListOrganizationAdminAccountsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.macie.MacieClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: MacieListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListTagsForResourceRequest`](#aws-cdk-sdk.macie.MacieListTagsForResourceRequest)

---

##### `putClassificationExportConfiguration` <a name="aws-cdk-sdk.macie.MacieClient.putClassificationExportConfiguration"></a>

```typescript
public putClassificationExportConfiguration(input: MaciePutClassificationExportConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationRequest`](#aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.macie.MacieClient.tagResource"></a>

```typescript
public tagResource(input: MacieTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieTagResourceRequest`](#aws-cdk-sdk.macie.MacieTagResourceRequest)

---

##### `testCustomDataIdentifier` <a name="aws-cdk-sdk.macie.MacieClient.testCustomDataIdentifier"></a>

```typescript
public testCustomDataIdentifier(input: MacieTestCustomDataIdentifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieTestCustomDataIdentifierRequest`](#aws-cdk-sdk.macie.MacieTestCustomDataIdentifierRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.macie.MacieClient.untagResource"></a>

```typescript
public untagResource(input: MacieUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUntagResourceRequest`](#aws-cdk-sdk.macie.MacieUntagResourceRequest)

---

##### `updateClassificationJob` <a name="aws-cdk-sdk.macie.MacieClient.updateClassificationJob"></a>

```typescript
public updateClassificationJob(input: MacieUpdateClassificationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUpdateClassificationJobRequest`](#aws-cdk-sdk.macie.MacieUpdateClassificationJobRequest)

---

##### `updateFindingsFilter` <a name="aws-cdk-sdk.macie.MacieClient.updateFindingsFilter"></a>

```typescript
public updateFindingsFilter(input: MacieUpdateFindingsFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest`](#aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest)

---

##### `updateMacieSession` <a name="aws-cdk-sdk.macie.MacieClient.updateMacieSession"></a>

```typescript
public updateMacieSession(input: MacieUpdateMacieSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUpdateMacieSessionRequest`](#aws-cdk-sdk.macie.MacieUpdateMacieSessionRequest)

---

##### `updateMemberSession` <a name="aws-cdk-sdk.macie.MacieClient.updateMemberSession"></a>

```typescript
public updateMemberSession(input: MacieUpdateMemberSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUpdateMemberSessionRequest`](#aws-cdk-sdk.macie.MacieUpdateMemberSessionRequest)

---

##### `updateOrganizationConfiguration` <a name="aws-cdk-sdk.macie.MacieClient.updateOrganizationConfiguration"></a>

```typescript
public updateOrganizationConfiguration(input: MacieUpdateOrganizationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUpdateOrganizationConfigurationRequest`](#aws-cdk-sdk.macie.MacieUpdateOrganizationConfigurationRequest)

---




## Structs <a name="Structs"></a>

### MacieAcceptInvitationRequest <a name="aws-cdk-sdk.macie.MacieAcceptInvitationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieAcceptInvitationRequest: macie.MacieAcceptInvitationRequest = { ... }
```

##### `invitationId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieAcceptInvitationRequest.property.invitationId"></a>

- *Type:* `string`

---

##### `masterAccount`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieAcceptInvitationRequest.property.masterAccount"></a>

- *Type:* `string`

---

### MacieAcceptInvitationResponse <a name="aws-cdk-sdk.macie.MacieAcceptInvitationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieAcceptInvitationResponse: macie.MacieAcceptInvitationResponse = { ... }
```

### MacieAccessControlList <a name="aws-cdk-sdk.macie.MacieAccessControlList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieAccessControlList: macie.MacieAccessControlList = { ... }
```

##### `allowsPublicReadAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAccessControlList.property.allowsPublicReadAccess"></a>

- *Type:* `boolean`

---

##### `allowsPublicWriteAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAccessControlList.property.allowsPublicWriteAccess"></a>

- *Type:* `boolean`

---

### MacieAccountDetail <a name="aws-cdk-sdk.macie.MacieAccountDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieAccountDetail: macie.MacieAccountDetail = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieAccountDetail.property.accountId"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieAccountDetail.property.email"></a>

- *Type:* `string`

---

### MacieAccountLevelPermissions <a name="aws-cdk-sdk.macie.MacieAccountLevelPermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieAccountLevelPermissions: macie.MacieAccountLevelPermissions = { ... }
```

##### `blockPublicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAccountLevelPermissions.property.blockPublicAccess"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBlockPublicAccess`](#aws-cdk-sdk.macie.MacieBlockPublicAccess)

---

### MacieAdminAccount <a name="aws-cdk-sdk.macie.MacieAdminAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieAdminAccount: macie.MacieAdminAccount = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAdminAccount.property.accountId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAdminAccount.property.status"></a>

- *Type:* `string`

---

### MacieApiCallDetails <a name="aws-cdk-sdk.macie.MacieApiCallDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieApiCallDetails: macie.MacieApiCallDetails = { ... }
```

##### `api`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieApiCallDetails.property.api"></a>

- *Type:* `string`

---

##### `apiServiceName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieApiCallDetails.property.apiServiceName"></a>

- *Type:* `string`

---

##### `firstSeen`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieApiCallDetails.property.firstSeen"></a>

- *Type:* `string`

---

##### `lastSeen`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieApiCallDetails.property.lastSeen"></a>

- *Type:* `string`

---

### MacieAssumedRole <a name="aws-cdk-sdk.macie.MacieAssumedRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieAssumedRole: macie.MacieAssumedRole = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAssumedRole.property.accessKeyId"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAssumedRole.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAssumedRole.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAssumedRole.property.principalId"></a>

- *Type:* `string`

---

##### `sessionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAssumedRole.property.sessionContext"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieSessionContext`](#aws-cdk-sdk.macie.MacieSessionContext)

---

### MacieAwsAccount <a name="aws-cdk-sdk.macie.MacieAwsAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieAwsAccount: macie.MacieAwsAccount = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAwsAccount.property.accountId"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAwsAccount.property.principalId"></a>

- *Type:* `string`

---

### MacieAwsService <a name="aws-cdk-sdk.macie.MacieAwsService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieAwsService: macie.MacieAwsService = { ... }
```

##### `invokedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieAwsService.property.invokedBy"></a>

- *Type:* `string`

---

### MacieBatchGetCustomDataIdentifiersRequest <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifiersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBatchGetCustomDataIdentifiersRequest: macie.MacieBatchGetCustomDataIdentifiersRequest = { ... }
```

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifiersRequest.property.ids"></a>

- *Type:* `string`[]

---

### MacieBatchGetCustomDataIdentifiersResponse <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifiersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBatchGetCustomDataIdentifiersResponse: macie.MacieBatchGetCustomDataIdentifiersResponse = { ... }
```

##### `customDataIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifiersResponse.property.customDataIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary`](#aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary)[]

---

##### `notFoundIdentifierIds`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifiersResponse.property.notFoundIdentifierIds"></a>

- *Type:* `string`[]

---

### MacieBatchGetCustomDataIdentifierSummary <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBatchGetCustomDataIdentifierSummary: macie.MacieBatchGetCustomDataIdentifierSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `deleted`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary.property.deleted"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary.property.name"></a>

- *Type:* `string`

---

### MacieBlockPublicAccess <a name="aws-cdk-sdk.macie.MacieBlockPublicAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBlockPublicAccess: macie.MacieBlockPublicAccess = { ... }
```

##### `blockPublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBlockPublicAccess.property.blockPublicAcls"></a>

- *Type:* `boolean`

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBlockPublicAccess.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBlockPublicAccess.property.ignorePublicAcls"></a>

- *Type:* `boolean`

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBlockPublicAccess.property.restrictPublicBuckets"></a>

- *Type:* `boolean`

---

### MacieBucketCountByEffectivePermission <a name="aws-cdk-sdk.macie.MacieBucketCountByEffectivePermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBucketCountByEffectivePermission: macie.MacieBucketCountByEffectivePermission = { ... }
```

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountByEffectivePermission.property.publiclyAccessible"></a>

- *Type:* `number`

---

##### `publiclyReadable`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountByEffectivePermission.property.publiclyReadable"></a>

- *Type:* `number`

---

##### `publiclyWritable`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountByEffectivePermission.property.publiclyWritable"></a>

- *Type:* `number`

---

##### `unknown`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountByEffectivePermission.property.unknown"></a>

- *Type:* `number`

---

### MacieBucketCountByEncryptionType <a name="aws-cdk-sdk.macie.MacieBucketCountByEncryptionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBucketCountByEncryptionType: macie.MacieBucketCountByEncryptionType = { ... }
```

##### `kmsManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountByEncryptionType.property.kmsManaged"></a>

- *Type:* `number`

---

##### `s3Managed`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountByEncryptionType.property.s3Managed"></a>

- *Type:* `number`

---

##### `unencrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountByEncryptionType.property.unencrypted"></a>

- *Type:* `number`

---

### MacieBucketCountBySharedAccessType <a name="aws-cdk-sdk.macie.MacieBucketCountBySharedAccessType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBucketCountBySharedAccessType: macie.MacieBucketCountBySharedAccessType = { ... }
```

##### `external`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountBySharedAccessType.property.external"></a>

- *Type:* `number`

---

##### `internal`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountBySharedAccessType.property.internal"></a>

- *Type:* `number`

---

##### `notShared`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountBySharedAccessType.property.notShared"></a>

- *Type:* `number`

---

##### `unknown`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCountBySharedAccessType.property.unknown"></a>

- *Type:* `number`

---

### MacieBucketCriteriaAdditionalProperties <a name="aws-cdk-sdk.macie.MacieBucketCriteriaAdditionalProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBucketCriteriaAdditionalProperties: macie.MacieBucketCriteriaAdditionalProperties = { ... }
```

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCriteriaAdditionalProperties.property.eq"></a>

- *Type:* `string`[]

---

##### `gt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCriteriaAdditionalProperties.property.gt"></a>

- *Type:* `number`

---

##### `gte`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCriteriaAdditionalProperties.property.gte"></a>

- *Type:* `number`

---

##### `lt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCriteriaAdditionalProperties.property.lt"></a>

- *Type:* `number`

---

##### `lte`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCriteriaAdditionalProperties.property.lte"></a>

- *Type:* `number`

---

##### `neq`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCriteriaAdditionalProperties.property.neq"></a>

- *Type:* `string`[]

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketCriteriaAdditionalProperties.property.prefix"></a>

- *Type:* `string`

---

### MacieBucketLevelPermissions <a name="aws-cdk-sdk.macie.MacieBucketLevelPermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBucketLevelPermissions: macie.MacieBucketLevelPermissions = { ... }
```

##### `accessControlList`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketLevelPermissions.property.accessControlList"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieAccessControlList`](#aws-cdk-sdk.macie.MacieAccessControlList)

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketLevelPermissions.property.blockPublicAccess"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBlockPublicAccess`](#aws-cdk-sdk.macie.MacieBlockPublicAccess)

---

##### `bucketPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketLevelPermissions.property.bucketPolicy"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketPolicy`](#aws-cdk-sdk.macie.MacieBucketPolicy)

---

### MacieBucketMetadata <a name="aws-cdk-sdk.macie.MacieBucketMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBucketMetadata: macie.MacieBucketMetadata = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.accountId"></a>

- *Type:* `string`

---

##### `bucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.bucketArn"></a>

- *Type:* `string`

---

##### `bucketCreatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.bucketCreatedAt"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.bucketName"></a>

- *Type:* `string`

---

##### `classifiableObjectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.classifiableObjectCount"></a>

- *Type:* `number`

---

##### `classifiableSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.classifiableSizeInBytes"></a>

- *Type:* `number`

---

##### `jobDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.jobDetails"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieJobDetails`](#aws-cdk-sdk.macie.MacieJobDetails)

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.lastUpdated"></a>

- *Type:* `string`

---

##### `objectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.objectCount"></a>

- *Type:* `number`

---

##### `objectCountByEncryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.objectCountByEncryptionType"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieObjectCountByEncryptionType`](#aws-cdk-sdk.macie.MacieObjectCountByEncryptionType)

---

##### `publicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.publicAccess"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketPublicAccess`](#aws-cdk-sdk.macie.MacieBucketPublicAccess)

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.region"></a>

- *Type:* `string`

---

##### `replicationDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.replicationDetails"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieReplicationDetails`](#aws-cdk-sdk.macie.MacieReplicationDetails)

---

##### `sharedAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.sharedAccess"></a>

- *Type:* `string`

---

##### `sizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `sizeInBytesCompressed`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.sizeInBytesCompressed"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.tags"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieKeyValuePair`](#aws-cdk-sdk.macie.MacieKeyValuePair)[]

---

##### `unclassifiableObjectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.unclassifiableObjectCount"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieObjectLevelStatistics`](#aws-cdk-sdk.macie.MacieObjectLevelStatistics)

---

##### `unclassifiableObjectSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.unclassifiableObjectSizeInBytes"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieObjectLevelStatistics`](#aws-cdk-sdk.macie.MacieObjectLevelStatistics)

---

##### `versioning`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketMetadata.property.versioning"></a>

- *Type:* `boolean`

---

### MacieBucketPermissionConfiguration <a name="aws-cdk-sdk.macie.MacieBucketPermissionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBucketPermissionConfiguration: macie.MacieBucketPermissionConfiguration = { ... }
```

##### `accountLevelPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketPermissionConfiguration.property.accountLevelPermissions"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieAccountLevelPermissions`](#aws-cdk-sdk.macie.MacieAccountLevelPermissions)

---

##### `bucketLevelPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketPermissionConfiguration.property.bucketLevelPermissions"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketLevelPermissions`](#aws-cdk-sdk.macie.MacieBucketLevelPermissions)

---

### MacieBucketPolicy <a name="aws-cdk-sdk.macie.MacieBucketPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBucketPolicy: macie.MacieBucketPolicy = { ... }
```

##### `allowsPublicReadAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketPolicy.property.allowsPublicReadAccess"></a>

- *Type:* `boolean`

---

##### `allowsPublicWriteAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketPolicy.property.allowsPublicWriteAccess"></a>

- *Type:* `boolean`

---

### MacieBucketPublicAccess <a name="aws-cdk-sdk.macie.MacieBucketPublicAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBucketPublicAccess: macie.MacieBucketPublicAccess = { ... }
```

##### `effectivePermission`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketPublicAccess.property.effectivePermission"></a>

- *Type:* `string`

---

##### `permissionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketPublicAccess.property.permissionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketPermissionConfiguration`](#aws-cdk-sdk.macie.MacieBucketPermissionConfiguration)

---

### MacieBucketSortCriteria <a name="aws-cdk-sdk.macie.MacieBucketSortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieBucketSortCriteria: macie.MacieBucketSortCriteria = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketSortCriteria.property.attributeName"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieBucketSortCriteria.property.orderBy"></a>

- *Type:* `string`

---

### MacieCell <a name="aws-cdk-sdk.macie.MacieCell"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCell: macie.MacieCell = { ... }
```

##### `cellReference`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCell.property.cellReference"></a>

- *Type:* `string`

---

##### `column`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCell.property.column"></a>

- *Type:* `number`

---

##### `columnName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCell.property.columnName"></a>

- *Type:* `string`

---

##### `row`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCell.property.row"></a>

- *Type:* `number`

---

### MacieClassificationDetails <a name="aws-cdk-sdk.macie.MacieClassificationDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieClassificationDetails: macie.MacieClassificationDetails = { ... }
```

##### `detailedResultsLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationDetails.property.detailedResultsLocation"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationDetails.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationDetails.property.jobId"></a>

- *Type:* `string`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationDetails.property.result"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieClassificationResult`](#aws-cdk-sdk.macie.MacieClassificationResult)

---

### MacieClassificationExportConfiguration <a name="aws-cdk-sdk.macie.MacieClassificationExportConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieClassificationExportConfiguration: macie.MacieClassificationExportConfiguration = { ... }
```

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationExportConfiguration.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieS3Destination`](#aws-cdk-sdk.macie.MacieS3Destination)

---

### MacieClassificationResult <a name="aws-cdk-sdk.macie.MacieClassificationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieClassificationResult: macie.MacieClassificationResult = { ... }
```

##### `additionalOccurrences`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationResult.property.additionalOccurrences"></a>

- *Type:* `boolean`

---

##### `customDataIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationResult.property.customDataIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCustomDataIdentifiers`](#aws-cdk-sdk.macie.MacieCustomDataIdentifiers)

---

##### `mimeType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationResult.property.mimeType"></a>

- *Type:* `string`

---

##### `sensitiveData`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationResult.property.sensitiveData"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieSensitiveDataItem`](#aws-cdk-sdk.macie.MacieSensitiveDataItem)[]

---

##### `sizeClassified`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationResult.property.sizeClassified"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationResult.property.status"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieClassificationResultStatus`](#aws-cdk-sdk.macie.MacieClassificationResultStatus)

---

### MacieClassificationResultStatus <a name="aws-cdk-sdk.macie.MacieClassificationResultStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieClassificationResultStatus: macie.MacieClassificationResultStatus = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationResultStatus.property.code"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieClassificationResultStatus.property.reason"></a>

- *Type:* `string`

---

### MacieCreateClassificationJobRequest <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateClassificationJobRequest: macie.MacieCreateClassificationJobRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest.property.jobType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest.property.name"></a>

- *Type:* `string`

---

##### `s3JobDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest.property.s3JobDefinition"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieS3JobDefinition`](#aws-cdk-sdk.macie.MacieS3JobDefinition)

---

##### `customDataIdentifierIds`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest.property.customDataIdentifierIds"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest.property.description"></a>

- *Type:* `string`

---

##### `initialRun`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest.property.initialRun"></a>

- *Type:* `boolean`

---

##### `samplingPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest.property.samplingPercentage"></a>

- *Type:* `number`

---

##### `scheduleFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest.property.scheduleFrequency"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieJobScheduleFrequency`](#aws-cdk-sdk.macie.MacieJobScheduleFrequency)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MacieCreateClassificationJobResponse <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateClassificationJobResponse: macie.MacieCreateClassificationJobResponse = { ... }
```

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobResponse.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateClassificationJobResponse.property.jobId"></a>

- *Type:* `string`

---

### MacieCreateCustomDataIdentifierRequest <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateCustomDataIdentifierRequest: macie.MacieCreateCustomDataIdentifierRequest = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest.property.description"></a>

- *Type:* `string`

---

##### `ignoreWords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest.property.ignoreWords"></a>

- *Type:* `string`[]

---

##### `keywords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest.property.keywords"></a>

- *Type:* `string`[]

---

##### `maximumMatchDistance`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest.property.maximumMatchDistance"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest.property.name"></a>

- *Type:* `string`

---

##### `regex`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest.property.regex"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MacieCreateCustomDataIdentifierResponse <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateCustomDataIdentifierResponse: macie.MacieCreateCustomDataIdentifierResponse = { ... }
```

##### `customDataIdentifierId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierResponse.property.customDataIdentifierId"></a>

- *Type:* `string`

---

### MacieCreateFindingsFilterRequest <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateFindingsFilterRequest: macie.MacieCreateFindingsFilterRequest = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest.property.action"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFindingCriteria`](#aws-cdk-sdk.macie.MacieFindingCriteria)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest.property.name"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest.property.description"></a>

- *Type:* `string`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest.property.position"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MacieCreateFindingsFilterResponse <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateFindingsFilterResponse: macie.MacieCreateFindingsFilterResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterResponse.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateFindingsFilterResponse.property.id"></a>

- *Type:* `string`

---

### MacieCreateInvitationsRequest <a name="aws-cdk-sdk.macie.MacieCreateInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateInvitationsRequest: macie.MacieCreateInvitationsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieCreateInvitationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `disableEmailNotification`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateInvitationsRequest.property.disableEmailNotification"></a>

- *Type:* `boolean`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateInvitationsRequest.property.message"></a>

- *Type:* `string`

---

### MacieCreateInvitationsResponse <a name="aws-cdk-sdk.macie.MacieCreateInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateInvitationsResponse: macie.MacieCreateInvitationsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateInvitationsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUnprocessedAccount`](#aws-cdk-sdk.macie.MacieUnprocessedAccount)[]

---

### MacieCreateMemberRequest <a name="aws-cdk-sdk.macie.MacieCreateMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateMemberRequest: macie.MacieCreateMemberRequest = { ... }
```

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieCreateMemberRequest.property.account"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieAccountDetail`](#aws-cdk-sdk.macie.MacieAccountDetail)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateMemberRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MacieCreateMemberResponse <a name="aws-cdk-sdk.macie.MacieCreateMemberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateMemberResponse: macie.MacieCreateMemberResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateMemberResponse.property.arn"></a>

- *Type:* `string`

---

### MacieCreateSampleFindingsRequest <a name="aws-cdk-sdk.macie.MacieCreateSampleFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateSampleFindingsRequest: macie.MacieCreateSampleFindingsRequest = { ... }
```

##### `findingTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCreateSampleFindingsRequest.property.findingTypes"></a>

- *Type:* `string`[]

---

### MacieCreateSampleFindingsResponse <a name="aws-cdk-sdk.macie.MacieCreateSampleFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCreateSampleFindingsResponse: macie.MacieCreateSampleFindingsResponse = { ... }
```

### MacieCriterionAdditionalProperties <a name="aws-cdk-sdk.macie.MacieCriterionAdditionalProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCriterionAdditionalProperties: macie.MacieCriterionAdditionalProperties = { ... }
```

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCriterionAdditionalProperties.property.eq"></a>

- *Type:* `string`[]

---

##### `eqExactMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCriterionAdditionalProperties.property.eqExactMatch"></a>

- *Type:* `string`[]

---

##### `gt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCriterionAdditionalProperties.property.gt"></a>

- *Type:* `number`

---

##### `gte`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCriterionAdditionalProperties.property.gte"></a>

- *Type:* `number`

---

##### `lt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCriterionAdditionalProperties.property.lt"></a>

- *Type:* `number`

---

##### `lte`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCriterionAdditionalProperties.property.lte"></a>

- *Type:* `number`

---

##### `neq`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCriterionAdditionalProperties.property.neq"></a>

- *Type:* `string`[]

---

### MacieCustomDataIdentifiers <a name="aws-cdk-sdk.macie.MacieCustomDataIdentifiers"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCustomDataIdentifiers: macie.MacieCustomDataIdentifiers = { ... }
```

##### `detections`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDataIdentifiers.property.detections"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCustomDetection`](#aws-cdk-sdk.macie.MacieCustomDetection)[]

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDataIdentifiers.property.totalCount"></a>

- *Type:* `number`

---

### MacieCustomDataIdentifierSummary <a name="aws-cdk-sdk.macie.MacieCustomDataIdentifierSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCustomDataIdentifierSummary: macie.MacieCustomDataIdentifierSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDataIdentifierSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDataIdentifierSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDataIdentifierSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDataIdentifierSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDataIdentifierSummary.property.name"></a>

- *Type:* `string`

---

### MacieCustomDetection <a name="aws-cdk-sdk.macie.MacieCustomDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieCustomDetection: macie.MacieCustomDetection = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDetection.property.arn"></a>

- *Type:* `string`

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDetection.property.count"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDetection.property.name"></a>

- *Type:* `string`

---

##### `occurrences`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieCustomDetection.property.occurrences"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieOccurrences`](#aws-cdk-sdk.macie.MacieOccurrences)

---

### MacieDailySchedule <a name="aws-cdk-sdk.macie.MacieDailySchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDailySchedule: macie.MacieDailySchedule = { ... }
```

### MacieDeclineInvitationsRequest <a name="aws-cdk-sdk.macie.MacieDeclineInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDeclineInvitationsRequest: macie.MacieDeclineInvitationsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieDeclineInvitationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### MacieDeclineInvitationsResponse <a name="aws-cdk-sdk.macie.MacieDeclineInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDeclineInvitationsResponse: macie.MacieDeclineInvitationsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDeclineInvitationsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUnprocessedAccount`](#aws-cdk-sdk.macie.MacieUnprocessedAccount)[]

---

### MacieDefaultDetection <a name="aws-cdk-sdk.macie.MacieDefaultDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDefaultDetection: macie.MacieDefaultDetection = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDefaultDetection.property.count"></a>

- *Type:* `number`

---

##### `occurrences`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDefaultDetection.property.occurrences"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieOccurrences`](#aws-cdk-sdk.macie.MacieOccurrences)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDefaultDetection.property.type"></a>

- *Type:* `string`

---

### MacieDeleteCustomDataIdentifierRequest <a name="aws-cdk-sdk.macie.MacieDeleteCustomDataIdentifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDeleteCustomDataIdentifierRequest: macie.MacieDeleteCustomDataIdentifierRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieDeleteCustomDataIdentifierRequest.property.id"></a>

- *Type:* `string`

---

### MacieDeleteCustomDataIdentifierResponse <a name="aws-cdk-sdk.macie.MacieDeleteCustomDataIdentifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDeleteCustomDataIdentifierResponse: macie.MacieDeleteCustomDataIdentifierResponse = { ... }
```

### MacieDeleteFindingsFilterRequest <a name="aws-cdk-sdk.macie.MacieDeleteFindingsFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDeleteFindingsFilterRequest: macie.MacieDeleteFindingsFilterRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieDeleteFindingsFilterRequest.property.id"></a>

- *Type:* `string`

---

### MacieDeleteFindingsFilterResponse <a name="aws-cdk-sdk.macie.MacieDeleteFindingsFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDeleteFindingsFilterResponse: macie.MacieDeleteFindingsFilterResponse = { ... }
```

### MacieDeleteInvitationsRequest <a name="aws-cdk-sdk.macie.MacieDeleteInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDeleteInvitationsRequest: macie.MacieDeleteInvitationsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieDeleteInvitationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### MacieDeleteInvitationsResponse <a name="aws-cdk-sdk.macie.MacieDeleteInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDeleteInvitationsResponse: macie.MacieDeleteInvitationsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDeleteInvitationsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUnprocessedAccount`](#aws-cdk-sdk.macie.MacieUnprocessedAccount)[]

---

### MacieDeleteMemberRequest <a name="aws-cdk-sdk.macie.MacieDeleteMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDeleteMemberRequest: macie.MacieDeleteMemberRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieDeleteMemberRequest.property.id"></a>

- *Type:* `string`

---

### MacieDeleteMemberResponse <a name="aws-cdk-sdk.macie.MacieDeleteMemberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDeleteMemberResponse: macie.MacieDeleteMemberResponse = { ... }
```

### MacieDescribeBucketsRequest <a name="aws-cdk-sdk.macie.MacieDescribeBucketsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDescribeBucketsRequest: macie.MacieDescribeBucketsRequest = { ... }
```

##### `criteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeBucketsRequest.property.criteria"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.macie.MacieBucketCriteriaAdditionalProperties`](#aws-cdk-sdk.macie.MacieBucketCriteriaAdditionalProperties)}

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeBucketsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeBucketsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeBucketsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketSortCriteria`](#aws-cdk-sdk.macie.MacieBucketSortCriteria)

---

### MacieDescribeBucketsResponse <a name="aws-cdk-sdk.macie.MacieDescribeBucketsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDescribeBucketsResponse: macie.MacieDescribeBucketsResponse = { ... }
```

##### `buckets`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeBucketsResponse.property.buckets"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketMetadata`](#aws-cdk-sdk.macie.MacieBucketMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeBucketsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MacieDescribeClassificationJobRequest <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDescribeClassificationJobRequest: macie.MacieDescribeClassificationJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest.property.jobId"></a>

- *Type:* `string`

---

### MacieDescribeClassificationJobResponse <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDescribeClassificationJobResponse: macie.MacieDescribeClassificationJobResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `customDataIdentifierIds`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.customDataIdentifierIds"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.description"></a>

- *Type:* `string`

---

##### `initialRun`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.initialRun"></a>

- *Type:* `boolean`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.jobType"></a>

- *Type:* `string`

---

##### `lastRunErrorStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.lastRunErrorStatus"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieLastRunErrorStatus`](#aws-cdk-sdk.macie.MacieLastRunErrorStatus)

---

##### `lastRunTime`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.lastRunTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.name"></a>

- *Type:* `string`

---

##### `s3JobDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.s3JobDefinition"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieS3JobDefinition`](#aws-cdk-sdk.macie.MacieS3JobDefinition)

---

##### `samplingPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.samplingPercentage"></a>

- *Type:* `number`

---

##### `scheduleFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.scheduleFrequency"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieJobScheduleFrequency`](#aws-cdk-sdk.macie.MacieJobScheduleFrequency)

---

##### `statistics`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieStatistics`](#aws-cdk-sdk.macie.MacieStatistics)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userPausedDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeClassificationJobResponse.property.userPausedDetails"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUserPausedDetails`](#aws-cdk-sdk.macie.MacieUserPausedDetails)

---

### MacieDescribeOrganizationConfigurationRequest <a name="aws-cdk-sdk.macie.MacieDescribeOrganizationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDescribeOrganizationConfigurationRequest: macie.MacieDescribeOrganizationConfigurationRequest = { ... }
```

### MacieDescribeOrganizationConfigurationResponse <a name="aws-cdk-sdk.macie.MacieDescribeOrganizationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDescribeOrganizationConfigurationResponse: macie.MacieDescribeOrganizationConfigurationResponse = { ... }
```

##### `autoEnable`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeOrganizationConfigurationResponse.property.autoEnable"></a>

- *Type:* `boolean`

---

##### `maxAccountLimitReached`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDescribeOrganizationConfigurationResponse.property.maxAccountLimitReached"></a>

- *Type:* `boolean`

---

### MacieDisableMacieRequest <a name="aws-cdk-sdk.macie.MacieDisableMacieRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDisableMacieRequest: macie.MacieDisableMacieRequest = { ... }
```

### MacieDisableMacieResponse <a name="aws-cdk-sdk.macie.MacieDisableMacieResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDisableMacieResponse: macie.MacieDisableMacieResponse = { ... }
```

### MacieDisableOrganizationAdminAccountRequest <a name="aws-cdk-sdk.macie.MacieDisableOrganizationAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDisableOrganizationAdminAccountRequest: macie.MacieDisableOrganizationAdminAccountRequest = { ... }
```

##### `adminAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieDisableOrganizationAdminAccountRequest.property.adminAccountId"></a>

- *Type:* `string`

---

### MacieDisableOrganizationAdminAccountResponse <a name="aws-cdk-sdk.macie.MacieDisableOrganizationAdminAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDisableOrganizationAdminAccountResponse: macie.MacieDisableOrganizationAdminAccountResponse = { ... }
```

### MacieDisassociateFromMasterAccountRequest <a name="aws-cdk-sdk.macie.MacieDisassociateFromMasterAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDisassociateFromMasterAccountRequest: macie.MacieDisassociateFromMasterAccountRequest = { ... }
```

### MacieDisassociateFromMasterAccountResponse <a name="aws-cdk-sdk.macie.MacieDisassociateFromMasterAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDisassociateFromMasterAccountResponse: macie.MacieDisassociateFromMasterAccountResponse = { ... }
```

### MacieDisassociateMemberRequest <a name="aws-cdk-sdk.macie.MacieDisassociateMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDisassociateMemberRequest: macie.MacieDisassociateMemberRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieDisassociateMemberRequest.property.id"></a>

- *Type:* `string`

---

### MacieDisassociateMemberResponse <a name="aws-cdk-sdk.macie.MacieDisassociateMemberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDisassociateMemberResponse: macie.MacieDisassociateMemberResponse = { ... }
```

### MacieDomainDetails <a name="aws-cdk-sdk.macie.MacieDomainDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieDomainDetails: macie.MacieDomainDetails = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieDomainDetails.property.domainName"></a>

- *Type:* `string`

---

### MacieEnableMacieRequest <a name="aws-cdk-sdk.macie.MacieEnableMacieRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieEnableMacieRequest: macie.MacieEnableMacieRequest = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieEnableMacieRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieEnableMacieRequest.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieEnableMacieRequest.property.status"></a>

- *Type:* `string`

---

### MacieEnableMacieResponse <a name="aws-cdk-sdk.macie.MacieEnableMacieResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieEnableMacieResponse: macie.MacieEnableMacieResponse = { ... }
```

### MacieEnableOrganizationAdminAccountRequest <a name="aws-cdk-sdk.macie.MacieEnableOrganizationAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieEnableOrganizationAdminAccountRequest: macie.MacieEnableOrganizationAdminAccountRequest = { ... }
```

##### `adminAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieEnableOrganizationAdminAccountRequest.property.adminAccountId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieEnableOrganizationAdminAccountRequest.property.clientToken"></a>

- *Type:* `string`

---

### MacieEnableOrganizationAdminAccountResponse <a name="aws-cdk-sdk.macie.MacieEnableOrganizationAdminAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieEnableOrganizationAdminAccountResponse: macie.MacieEnableOrganizationAdminAccountResponse = { ... }
```

### MacieFederatedUser <a name="aws-cdk-sdk.macie.MacieFederatedUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieFederatedUser: macie.MacieFederatedUser = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFederatedUser.property.accessKeyId"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFederatedUser.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFederatedUser.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFederatedUser.property.principalId"></a>

- *Type:* `string`

---

##### `sessionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFederatedUser.property.sessionContext"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieSessionContext`](#aws-cdk-sdk.macie.MacieSessionContext)

---

### MacieFinding <a name="aws-cdk-sdk.macie.MacieFinding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieFinding: macie.MacieFinding = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.accountId"></a>

- *Type:* `string`

---

##### `archived`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.archived"></a>

- *Type:* `boolean`

---

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.category"></a>

- *Type:* `string`

---

##### `classificationDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.classificationDetails"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieClassificationDetails`](#aws-cdk-sdk.macie.MacieClassificationDetails)

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.count"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.id"></a>

- *Type:* `string`

---

##### `partition`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.partition"></a>

- *Type:* `string`

---

##### `policyDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.policyDetails"></a>

- *Type:* [`aws-cdk-sdk.macie.MaciePolicyDetails`](#aws-cdk-sdk.macie.MaciePolicyDetails)

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.region"></a>

- *Type:* `string`

---

##### `resourcesAffected`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.resourcesAffected"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResourcesAffected`](#aws-cdk-sdk.macie.MacieResourcesAffected)

---

##### `sample`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.sample"></a>

- *Type:* `boolean`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.schemaVersion"></a>

- *Type:* `string`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.severity"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieSeverity`](#aws-cdk-sdk.macie.MacieSeverity)

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.title"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.type"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFinding.property.updatedAt"></a>

- *Type:* `string`

---

### MacieFindingAction <a name="aws-cdk-sdk.macie.MacieFindingAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieFindingAction: macie.MacieFindingAction = { ... }
```

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingAction.property.actionType"></a>

- *Type:* `string`

---

##### `apiCallDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingAction.property.apiCallDetails"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieApiCallDetails`](#aws-cdk-sdk.macie.MacieApiCallDetails)

---

### MacieFindingActor <a name="aws-cdk-sdk.macie.MacieFindingActor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieFindingActor: macie.MacieFindingActor = { ... }
```

##### `domainDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingActor.property.domainDetails"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDomainDetails`](#aws-cdk-sdk.macie.MacieDomainDetails)

---

##### `ipAddressDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingActor.property.ipAddressDetails"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieIpAddressDetails`](#aws-cdk-sdk.macie.MacieIpAddressDetails)

---

##### `userIdentity`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingActor.property.userIdentity"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUserIdentity`](#aws-cdk-sdk.macie.MacieUserIdentity)

---

### MacieFindingCriteria <a name="aws-cdk-sdk.macie.MacieFindingCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieFindingCriteria: macie.MacieFindingCriteria = { ... }
```

##### `criterion`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingCriteria.property.criterion"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.macie.MacieCriterionAdditionalProperties`](#aws-cdk-sdk.macie.MacieCriterionAdditionalProperties)}

---

### MacieFindingsFilterListItem <a name="aws-cdk-sdk.macie.MacieFindingsFilterListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieFindingsFilterListItem: macie.MacieFindingsFilterListItem = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingsFilterListItem.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingsFilterListItem.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingsFilterListItem.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingsFilterListItem.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingsFilterListItem.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MacieFindingStatisticsSortCriteria <a name="aws-cdk-sdk.macie.MacieFindingStatisticsSortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieFindingStatisticsSortCriteria: macie.MacieFindingStatisticsSortCriteria = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingStatisticsSortCriteria.property.attributeName"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieFindingStatisticsSortCriteria.property.orderBy"></a>

- *Type:* `string`

---

### MacieGetBucketStatisticsRequest <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetBucketStatisticsRequest: macie.MacieGetBucketStatisticsRequest = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest.property.accountId"></a>

- *Type:* `string`

---

### MacieGetBucketStatisticsResponse <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetBucketStatisticsResponse: macie.MacieGetBucketStatisticsResponse = { ... }
```

##### `bucketCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.bucketCount"></a>

- *Type:* `number`

---

##### `bucketCountByEffectivePermission`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.bucketCountByEffectivePermission"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketCountByEffectivePermission`](#aws-cdk-sdk.macie.MacieBucketCountByEffectivePermission)

---

##### `bucketCountByEncryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.bucketCountByEncryptionType"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketCountByEncryptionType`](#aws-cdk-sdk.macie.MacieBucketCountByEncryptionType)

---

##### `bucketCountBySharedAccessType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.bucketCountBySharedAccessType"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketCountBySharedAccessType`](#aws-cdk-sdk.macie.MacieBucketCountBySharedAccessType)

---

##### `classifiableObjectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.classifiableObjectCount"></a>

- *Type:* `number`

---

##### `classifiableSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.classifiableSizeInBytes"></a>

- *Type:* `number`

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.lastUpdated"></a>

- *Type:* `string`

---

##### `objectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.objectCount"></a>

- *Type:* `number`

---

##### `sizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `sizeInBytesCompressed`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.sizeInBytesCompressed"></a>

- *Type:* `number`

---

##### `unclassifiableObjectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.unclassifiableObjectCount"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieObjectLevelStatistics`](#aws-cdk-sdk.macie.MacieObjectLevelStatistics)

---

##### `unclassifiableObjectSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetBucketStatisticsResponse.property.unclassifiableObjectSizeInBytes"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieObjectLevelStatistics`](#aws-cdk-sdk.macie.MacieObjectLevelStatistics)

---

### MacieGetClassificationExportConfigurationRequest <a name="aws-cdk-sdk.macie.MacieGetClassificationExportConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetClassificationExportConfigurationRequest: macie.MacieGetClassificationExportConfigurationRequest = { ... }
```

### MacieGetClassificationExportConfigurationResponse <a name="aws-cdk-sdk.macie.MacieGetClassificationExportConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetClassificationExportConfigurationResponse: macie.MacieGetClassificationExportConfigurationResponse = { ... }
```

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetClassificationExportConfigurationResponse.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieClassificationExportConfiguration`](#aws-cdk-sdk.macie.MacieClassificationExportConfiguration)

---

### MacieGetCustomDataIdentifierRequest <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetCustomDataIdentifierRequest: macie.MacieGetCustomDataIdentifierRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierRequest.property.id"></a>

- *Type:* `string`

---

### MacieGetCustomDataIdentifierResponse <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetCustomDataIdentifierResponse: macie.MacieGetCustomDataIdentifierResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `deleted`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.deleted"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.id"></a>

- *Type:* `string`

---

##### `ignoreWords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.ignoreWords"></a>

- *Type:* `string`[]

---

##### `keywords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.keywords"></a>

- *Type:* `string`[]

---

##### `maximumMatchDistance`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.maximumMatchDistance"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.name"></a>

- *Type:* `string`

---

##### `regex`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.regex"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetCustomDataIdentifierResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MacieGetFindingsFilterRequest <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetFindingsFilterRequest: macie.MacieGetFindingsFilterRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterRequest.property.id"></a>

- *Type:* `string`

---

### MacieGetFindingsFilterResponse <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetFindingsFilterResponse: macie.MacieGetFindingsFilterResponse = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterResponse.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterResponse.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterResponse.property.description"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterResponse.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFindingCriteria`](#aws-cdk-sdk.macie.MacieFindingCriteria)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterResponse.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterResponse.property.name"></a>

- *Type:* `string`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterResponse.property.position"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsFilterResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MacieGetFindingsRequest <a name="aws-cdk-sdk.macie.MacieGetFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetFindingsRequest: macie.MacieGetFindingsRequest = { ... }
```

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsRequest.property.findingIds"></a>

- *Type:* `string`[]

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieSortCriteria`](#aws-cdk-sdk.macie.MacieSortCriteria)

---

### MacieGetFindingsResponse <a name="aws-cdk-sdk.macie.MacieGetFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetFindingsResponse: macie.MacieGetFindingsResponse = { ... }
```

##### `findings`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingsResponse.property.findings"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFinding`](#aws-cdk-sdk.macie.MacieFinding)[]

---

### MacieGetFindingStatisticsRequest <a name="aws-cdk-sdk.macie.MacieGetFindingStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetFindingStatisticsRequest: macie.MacieGetFindingStatisticsRequest = { ... }
```

##### `groupBy`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingStatisticsRequest.property.groupBy"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingStatisticsRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFindingCriteria`](#aws-cdk-sdk.macie.MacieFindingCriteria)

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingStatisticsRequest.property.size"></a>

- *Type:* `number`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingStatisticsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFindingStatisticsSortCriteria`](#aws-cdk-sdk.macie.MacieFindingStatisticsSortCriteria)

---

### MacieGetFindingStatisticsResponse <a name="aws-cdk-sdk.macie.MacieGetFindingStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetFindingStatisticsResponse: macie.MacieGetFindingStatisticsResponse = { ... }
```

##### `countsByGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetFindingStatisticsResponse.property.countsByGroup"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGroupCount`](#aws-cdk-sdk.macie.MacieGroupCount)[]

---

### MacieGetInvitationsCountRequest <a name="aws-cdk-sdk.macie.MacieGetInvitationsCountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetInvitationsCountRequest: macie.MacieGetInvitationsCountRequest = { ... }
```

### MacieGetInvitationsCountResponse <a name="aws-cdk-sdk.macie.MacieGetInvitationsCountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetInvitationsCountResponse: macie.MacieGetInvitationsCountResponse = { ... }
```

##### `invitationsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetInvitationsCountResponse.property.invitationsCount"></a>

- *Type:* `number`

---

### MacieGetMacieSessionRequest <a name="aws-cdk-sdk.macie.MacieGetMacieSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetMacieSessionRequest: macie.MacieGetMacieSessionRequest = { ... }
```

### MacieGetMacieSessionResponse <a name="aws-cdk-sdk.macie.MacieGetMacieSessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetMacieSessionResponse: macie.MacieGetMacieSessionResponse = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMacieSessionResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMacieSessionResponse.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMacieSessionResponse.property.serviceRole"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMacieSessionResponse.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMacieSessionResponse.property.updatedAt"></a>

- *Type:* `string`

---

### MacieGetMasterAccountRequest <a name="aws-cdk-sdk.macie.MacieGetMasterAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetMasterAccountRequest: macie.MacieGetMasterAccountRequest = { ... }
```

### MacieGetMasterAccountResponse <a name="aws-cdk-sdk.macie.MacieGetMasterAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetMasterAccountResponse: macie.MacieGetMasterAccountResponse = { ... }
```

##### `master`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMasterAccountResponse.property.master"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieInvitation`](#aws-cdk-sdk.macie.MacieInvitation)

---

### MacieGetMemberRequest <a name="aws-cdk-sdk.macie.MacieGetMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetMemberRequest: macie.MacieGetMemberRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieGetMemberRequest.property.id"></a>

- *Type:* `string`

---

### MacieGetMemberResponse <a name="aws-cdk-sdk.macie.MacieGetMemberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetMemberResponse: macie.MacieGetMemberResponse = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMemberResponse.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMemberResponse.property.arn"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMemberResponse.property.email"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMemberResponse.property.invitedAt"></a>

- *Type:* `string`

---

##### `masterAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMemberResponse.property.masterAccountId"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMemberResponse.property.relationshipStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMemberResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetMemberResponse.property.updatedAt"></a>

- *Type:* `string`

---

### MacieGetUsageStatisticsRequest <a name="aws-cdk-sdk.macie.MacieGetUsageStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetUsageStatisticsRequest: macie.MacieGetUsageStatisticsRequest = { ... }
```

##### `filterBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetUsageStatisticsRequest.property.filterBy"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUsageStatisticsFilter`](#aws-cdk-sdk.macie.MacieUsageStatisticsFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetUsageStatisticsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetUsageStatisticsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetUsageStatisticsRequest.property.sortBy"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUsageStatisticsSortBy`](#aws-cdk-sdk.macie.MacieUsageStatisticsSortBy)

---

### MacieGetUsageStatisticsResponse <a name="aws-cdk-sdk.macie.MacieGetUsageStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetUsageStatisticsResponse: macie.MacieGetUsageStatisticsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetUsageStatisticsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `records`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetUsageStatisticsResponse.property.records"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUsageRecord`](#aws-cdk-sdk.macie.MacieUsageRecord)[]

---

### MacieGetUsageTotalsRequest <a name="aws-cdk-sdk.macie.MacieGetUsageTotalsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetUsageTotalsRequest: macie.MacieGetUsageTotalsRequest = { ... }
```

### MacieGetUsageTotalsResponse <a name="aws-cdk-sdk.macie.MacieGetUsageTotalsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGetUsageTotalsResponse: macie.MacieGetUsageTotalsResponse = { ... }
```

##### `usageTotals`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGetUsageTotalsResponse.property.usageTotals"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUsageTotal`](#aws-cdk-sdk.macie.MacieUsageTotal)[]

---

### MacieGroupCount <a name="aws-cdk-sdk.macie.MacieGroupCount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieGroupCount: macie.MacieGroupCount = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGroupCount.property.count"></a>

- *Type:* `number`

---

##### `groupKey`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieGroupCount.property.groupKey"></a>

- *Type:* `string`

---

### MacieIamUser <a name="aws-cdk-sdk.macie.MacieIamUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieIamUser: macie.MacieIamUser = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIamUser.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIamUser.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIamUser.property.principalId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIamUser.property.userName"></a>

- *Type:* `string`

---

### MacieInvitation <a name="aws-cdk-sdk.macie.MacieInvitation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieInvitation: macie.MacieInvitation = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieInvitation.property.accountId"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieInvitation.property.invitationId"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieInvitation.property.invitedAt"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieInvitation.property.relationshipStatus"></a>

- *Type:* `string`

---

### MacieIpAddressDetails <a name="aws-cdk-sdk.macie.MacieIpAddressDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieIpAddressDetails: macie.MacieIpAddressDetails = { ... }
```

##### `ipAddressV4`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpAddressDetails.property.ipAddressV4"></a>

- *Type:* `string`

---

##### `ipCity`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpAddressDetails.property.ipCity"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieIpCity`](#aws-cdk-sdk.macie.MacieIpCity)

---

##### `ipCountry`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpAddressDetails.property.ipCountry"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieIpCountry`](#aws-cdk-sdk.macie.MacieIpCountry)

---

##### `ipGeoLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpAddressDetails.property.ipGeoLocation"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieIpGeoLocation`](#aws-cdk-sdk.macie.MacieIpGeoLocation)

---

##### `ipOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpAddressDetails.property.ipOwner"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieIpOwner`](#aws-cdk-sdk.macie.MacieIpOwner)

---

### MacieIpCity <a name="aws-cdk-sdk.macie.MacieIpCity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieIpCity: macie.MacieIpCity = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpCity.property.name"></a>

- *Type:* `string`

---

### MacieIpCountry <a name="aws-cdk-sdk.macie.MacieIpCountry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieIpCountry: macie.MacieIpCountry = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpCountry.property.code"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpCountry.property.name"></a>

- *Type:* `string`

---

### MacieIpGeoLocation <a name="aws-cdk-sdk.macie.MacieIpGeoLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieIpGeoLocation: macie.MacieIpGeoLocation = { ... }
```

##### `lat`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpGeoLocation.property.lat"></a>

- *Type:* `number`

---

##### `lon`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpGeoLocation.property.lon"></a>

- *Type:* `number`

---

### MacieIpOwner <a name="aws-cdk-sdk.macie.MacieIpOwner"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieIpOwner: macie.MacieIpOwner = { ... }
```

##### `asn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpOwner.property.asn"></a>

- *Type:* `string`

---

##### `asnOrg`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpOwner.property.asnOrg"></a>

- *Type:* `string`

---

##### `isp`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpOwner.property.isp"></a>

- *Type:* `string`

---

##### `org`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieIpOwner.property.org"></a>

- *Type:* `string`

---

### MacieJobDetails <a name="aws-cdk-sdk.macie.MacieJobDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieJobDetails: macie.MacieJobDetails = { ... }
```

##### `isDefinedInJob`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobDetails.property.isDefinedInJob"></a>

- *Type:* `string`

---

##### `isMonitoredByJob`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobDetails.property.isMonitoredByJob"></a>

- *Type:* `string`

---

##### `lastJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobDetails.property.lastJobId"></a>

- *Type:* `string`

---

##### `lastJobRunTime`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobDetails.property.lastJobRunTime"></a>

- *Type:* `string`

---

### MacieJobScheduleFrequency <a name="aws-cdk-sdk.macie.MacieJobScheduleFrequency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieJobScheduleFrequency: macie.MacieJobScheduleFrequency = { ... }
```

##### `dailySchedule`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobScheduleFrequency.property.dailySchedule"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDailySchedule`](#aws-cdk-sdk.macie.MacieDailySchedule)

---

##### `monthlySchedule`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobScheduleFrequency.property.monthlySchedule"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieMonthlySchedule`](#aws-cdk-sdk.macie.MacieMonthlySchedule)

---

##### `weeklySchedule`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobScheduleFrequency.property.weeklySchedule"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieWeeklySchedule`](#aws-cdk-sdk.macie.MacieWeeklySchedule)

---

### MacieJobScopeTerm <a name="aws-cdk-sdk.macie.MacieJobScopeTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieJobScopeTerm: macie.MacieJobScopeTerm = { ... }
```

##### `simpleScopeTerm`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobScopeTerm.property.simpleScopeTerm"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieSimpleScopeTerm`](#aws-cdk-sdk.macie.MacieSimpleScopeTerm)

---

##### `tagScopeTerm`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobScopeTerm.property.tagScopeTerm"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieTagScopeTerm`](#aws-cdk-sdk.macie.MacieTagScopeTerm)

---

### MacieJobScopingBlock <a name="aws-cdk-sdk.macie.MacieJobScopingBlock"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieJobScopingBlock: macie.MacieJobScopingBlock = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobScopingBlock.property.and"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieJobScopeTerm`](#aws-cdk-sdk.macie.MacieJobScopeTerm)[]

---

### MacieJobSummary <a name="aws-cdk-sdk.macie.MacieJobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieJobSummary: macie.MacieJobSummary = { ... }
```

##### `bucketDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobSummary.property.bucketDefinitions"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieS3BucketDefinitionForJob`](#aws-cdk-sdk.macie.MacieS3BucketDefinitionForJob)[]

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobSummary.property.jobStatus"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobSummary.property.jobType"></a>

- *Type:* `string`

---

##### `lastRunErrorStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobSummary.property.lastRunErrorStatus"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieLastRunErrorStatus`](#aws-cdk-sdk.macie.MacieLastRunErrorStatus)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobSummary.property.name"></a>

- *Type:* `string`

---

##### `userPausedDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieJobSummary.property.userPausedDetails"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUserPausedDetails`](#aws-cdk-sdk.macie.MacieUserPausedDetails)

---

### MacieKeyValuePair <a name="aws-cdk-sdk.macie.MacieKeyValuePair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieKeyValuePair: macie.MacieKeyValuePair = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieKeyValuePair.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieKeyValuePair.property.value"></a>

- *Type:* `string`

---

### MacieLastRunErrorStatus <a name="aws-cdk-sdk.macie.MacieLastRunErrorStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieLastRunErrorStatus: macie.MacieLastRunErrorStatus = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieLastRunErrorStatus.property.code"></a>

- *Type:* `string`

---

### MacieListClassificationJobsRequest <a name="aws-cdk-sdk.macie.MacieListClassificationJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListClassificationJobsRequest: macie.MacieListClassificationJobsRequest = { ... }
```

##### `filterCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListClassificationJobsRequest.property.filterCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListJobsFilterCriteria`](#aws-cdk-sdk.macie.MacieListJobsFilterCriteria)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListClassificationJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListClassificationJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListClassificationJobsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListJobsSortCriteria`](#aws-cdk-sdk.macie.MacieListJobsSortCriteria)

---

### MacieListClassificationJobsResponse <a name="aws-cdk-sdk.macie.MacieListClassificationJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListClassificationJobsResponse: macie.MacieListClassificationJobsResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListClassificationJobsResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieJobSummary`](#aws-cdk-sdk.macie.MacieJobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListClassificationJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MacieListCustomDataIdentifiersRequest <a name="aws-cdk-sdk.macie.MacieListCustomDataIdentifiersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListCustomDataIdentifiersRequest: macie.MacieListCustomDataIdentifiersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListCustomDataIdentifiersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListCustomDataIdentifiersRequest.property.nextToken"></a>

- *Type:* `string`

---

### MacieListCustomDataIdentifiersResponse <a name="aws-cdk-sdk.macie.MacieListCustomDataIdentifiersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListCustomDataIdentifiersResponse: macie.MacieListCustomDataIdentifiersResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListCustomDataIdentifiersResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCustomDataIdentifierSummary`](#aws-cdk-sdk.macie.MacieCustomDataIdentifierSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListCustomDataIdentifiersResponse.property.nextToken"></a>

- *Type:* `string`

---

### MacieListFindingsFiltersRequest <a name="aws-cdk-sdk.macie.MacieListFindingsFiltersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListFindingsFiltersRequest: macie.MacieListFindingsFiltersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListFindingsFiltersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListFindingsFiltersRequest.property.nextToken"></a>

- *Type:* `string`

---

### MacieListFindingsFiltersResponse <a name="aws-cdk-sdk.macie.MacieListFindingsFiltersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListFindingsFiltersResponse: macie.MacieListFindingsFiltersResponse = { ... }
```

##### `findingsFilterListItems`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListFindingsFiltersResponse.property.findingsFilterListItems"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFindingsFilterListItem`](#aws-cdk-sdk.macie.MacieFindingsFilterListItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListFindingsFiltersResponse.property.nextToken"></a>

- *Type:* `string`

---

### MacieListFindingsRequest <a name="aws-cdk-sdk.macie.MacieListFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListFindingsRequest: macie.MacieListFindingsRequest = { ... }
```

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListFindingsRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFindingCriteria`](#aws-cdk-sdk.macie.MacieFindingCriteria)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListFindingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListFindingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListFindingsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieSortCriteria`](#aws-cdk-sdk.macie.MacieSortCriteria)

---

### MacieListFindingsResponse <a name="aws-cdk-sdk.macie.MacieListFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListFindingsResponse: macie.MacieListFindingsResponse = { ... }
```

##### `findingIds`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListFindingsResponse.property.findingIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListFindingsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MacieListInvitationsRequest <a name="aws-cdk-sdk.macie.MacieListInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListInvitationsRequest: macie.MacieListInvitationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListInvitationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListInvitationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MacieListInvitationsResponse <a name="aws-cdk-sdk.macie.MacieListInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListInvitationsResponse: macie.MacieListInvitationsResponse = { ... }
```

##### `invitations`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListInvitationsResponse.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieInvitation`](#aws-cdk-sdk.macie.MacieInvitation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListInvitationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MacieListJobsFilterCriteria <a name="aws-cdk-sdk.macie.MacieListJobsFilterCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListJobsFilterCriteria: macie.MacieListJobsFilterCriteria = { ... }
```

##### `excludes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListJobsFilterCriteria.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListJobsFilterTerm`](#aws-cdk-sdk.macie.MacieListJobsFilterTerm)[]

---

##### `includes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListJobsFilterCriteria.property.includes"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListJobsFilterTerm`](#aws-cdk-sdk.macie.MacieListJobsFilterTerm)[]

---

### MacieListJobsFilterTerm <a name="aws-cdk-sdk.macie.MacieListJobsFilterTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListJobsFilterTerm: macie.MacieListJobsFilterTerm = { ... }
```

##### `comparator`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListJobsFilterTerm.property.comparator"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListJobsFilterTerm.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListJobsFilterTerm.property.values"></a>

- *Type:* `string`[]

---

### MacieListJobsSortCriteria <a name="aws-cdk-sdk.macie.MacieListJobsSortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListJobsSortCriteria: macie.MacieListJobsSortCriteria = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListJobsSortCriteria.property.attributeName"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListJobsSortCriteria.property.orderBy"></a>

- *Type:* `string`

---

### MacieListMembersRequest <a name="aws-cdk-sdk.macie.MacieListMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListMembersRequest: macie.MacieListMembersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListMembersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListMembersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `onlyAssociated`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListMembersRequest.property.onlyAssociated"></a>

- *Type:* `string`

---

### MacieListMembersResponse <a name="aws-cdk-sdk.macie.MacieListMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListMembersResponse: macie.MacieListMembersResponse = { ... }
```

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListMembersResponse.property.members"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieMember`](#aws-cdk-sdk.macie.MacieMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListMembersResponse.property.nextToken"></a>

- *Type:* `string`

---

### MacieListOrganizationAdminAccountsRequest <a name="aws-cdk-sdk.macie.MacieListOrganizationAdminAccountsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListOrganizationAdminAccountsRequest: macie.MacieListOrganizationAdminAccountsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListOrganizationAdminAccountsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListOrganizationAdminAccountsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MacieListOrganizationAdminAccountsResponse <a name="aws-cdk-sdk.macie.MacieListOrganizationAdminAccountsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListOrganizationAdminAccountsResponse: macie.MacieListOrganizationAdminAccountsResponse = { ... }
```

##### `adminAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListOrganizationAdminAccountsResponse.property.adminAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieAdminAccount`](#aws-cdk-sdk.macie.MacieAdminAccount)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListOrganizationAdminAccountsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MacieListTagsForResourceRequest <a name="aws-cdk-sdk.macie.MacieListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListTagsForResourceRequest: macie.MacieListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### MacieListTagsForResourceResponse <a name="aws-cdk-sdk.macie.MacieListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieListTagsForResourceResponse: macie.MacieListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MacieMember <a name="aws-cdk-sdk.macie.MacieMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieMember: macie.MacieMember = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieMember.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieMember.property.arn"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieMember.property.email"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieMember.property.invitedAt"></a>

- *Type:* `string`

---

##### `masterAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieMember.property.masterAccountId"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieMember.property.relationshipStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieMember.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieMember.property.updatedAt"></a>

- *Type:* `string`

---

### MacieMonthlySchedule <a name="aws-cdk-sdk.macie.MacieMonthlySchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieMonthlySchedule: macie.MacieMonthlySchedule = { ... }
```

##### `dayOfMonth`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieMonthlySchedule.property.dayOfMonth"></a>

- *Type:* `number`

---

### MacieObjectCountByEncryptionType <a name="aws-cdk-sdk.macie.MacieObjectCountByEncryptionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieObjectCountByEncryptionType: macie.MacieObjectCountByEncryptionType = { ... }
```

##### `customerManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieObjectCountByEncryptionType.property.customerManaged"></a>

- *Type:* `number`

---

##### `kmsManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieObjectCountByEncryptionType.property.kmsManaged"></a>

- *Type:* `number`

---

##### `s3Managed`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieObjectCountByEncryptionType.property.s3Managed"></a>

- *Type:* `number`

---

##### `unencrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieObjectCountByEncryptionType.property.unencrypted"></a>

- *Type:* `number`

---

### MacieObjectLevelStatistics <a name="aws-cdk-sdk.macie.MacieObjectLevelStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieObjectLevelStatistics: macie.MacieObjectLevelStatistics = { ... }
```

##### `fileType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieObjectLevelStatistics.property.fileType"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieObjectLevelStatistics.property.storageClass"></a>

- *Type:* `number`

---

##### `total`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieObjectLevelStatistics.property.total"></a>

- *Type:* `number`

---

### MacieOccurrences <a name="aws-cdk-sdk.macie.MacieOccurrences"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieOccurrences: macie.MacieOccurrences = { ... }
```

##### `cells`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieOccurrences.property.cells"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCell`](#aws-cdk-sdk.macie.MacieCell)[]

---

##### `lineRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieOccurrences.property.lineRanges"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieRange`](#aws-cdk-sdk.macie.MacieRange)[]

---

##### `offsetRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieOccurrences.property.offsetRanges"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieRange`](#aws-cdk-sdk.macie.MacieRange)[]

---

##### `pages`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieOccurrences.property.pages"></a>

- *Type:* [`aws-cdk-sdk.macie.MaciePage`](#aws-cdk-sdk.macie.MaciePage)[]

---

##### `records`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieOccurrences.property.records"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieRecord`](#aws-cdk-sdk.macie.MacieRecord)[]

---

### MaciePage <a name="aws-cdk-sdk.macie.MaciePage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const maciePage: macie.MaciePage = { ... }
```

##### `lineRange`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MaciePage.property.lineRange"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieRange`](#aws-cdk-sdk.macie.MacieRange)

---

##### `offsetRange`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MaciePage.property.offsetRange"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieRange`](#aws-cdk-sdk.macie.MacieRange)

---

##### `pageNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MaciePage.property.pageNumber"></a>

- *Type:* `number`

---

### MaciePolicyDetails <a name="aws-cdk-sdk.macie.MaciePolicyDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const maciePolicyDetails: macie.MaciePolicyDetails = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MaciePolicyDetails.property.action"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFindingAction`](#aws-cdk-sdk.macie.MacieFindingAction)

---

##### `actor`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MaciePolicyDetails.property.actor"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFindingActor`](#aws-cdk-sdk.macie.MacieFindingActor)

---

### MaciePutClassificationExportConfigurationRequest <a name="aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const maciePutClassificationExportConfigurationRequest: macie.MaciePutClassificationExportConfigurationRequest = { ... }
```

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationRequest.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieClassificationExportConfiguration`](#aws-cdk-sdk.macie.MacieClassificationExportConfiguration)

---

### MaciePutClassificationExportConfigurationResponse <a name="aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const maciePutClassificationExportConfigurationResponse: macie.MaciePutClassificationExportConfigurationResponse = { ... }
```

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationResponse.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieClassificationExportConfiguration`](#aws-cdk-sdk.macie.MacieClassificationExportConfiguration)

---

### MacieRange <a name="aws-cdk-sdk.macie.MacieRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieRange: macie.MacieRange = { ... }
```

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieRange.property.end"></a>

- *Type:* `number`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieRange.property.start"></a>

- *Type:* `number`

---

##### `startColumn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieRange.property.startColumn"></a>

- *Type:* `number`

---

### MacieRecord <a name="aws-cdk-sdk.macie.MacieRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieRecord: macie.MacieRecord = { ... }
```

##### `jsonPath`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieRecord.property.jsonPath"></a>

- *Type:* `string`

---

##### `recordIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieRecord.property.recordIndex"></a>

- *Type:* `number`

---

### MacieReplicationDetails <a name="aws-cdk-sdk.macie.MacieReplicationDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieReplicationDetails: macie.MacieReplicationDetails = { ... }
```

##### `replicated`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieReplicationDetails.property.replicated"></a>

- *Type:* `boolean`

---

##### `replicatedExternally`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieReplicationDetails.property.replicatedExternally"></a>

- *Type:* `boolean`

---

##### `replicationAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieReplicationDetails.property.replicationAccounts"></a>

- *Type:* `string`[]

---

### MacieResourcesAffected <a name="aws-cdk-sdk.macie.MacieResourcesAffected"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieResourcesAffected: macie.MacieResourcesAffected = { ... }
```

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieResourcesAffected.property.s3Bucket"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieS3Bucket`](#aws-cdk-sdk.macie.MacieS3Bucket)

---

##### `s3Object`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieResourcesAffected.property.s3Object"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieS3Object`](#aws-cdk-sdk.macie.MacieS3Object)

---

### MacieS3Bucket <a name="aws-cdk-sdk.macie.MacieS3Bucket"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieS3Bucket: macie.MacieS3Bucket = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Bucket.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Bucket.property.createdAt"></a>

- *Type:* `string`

---

##### `defaultServerSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Bucket.property.defaultServerSideEncryption"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieServerSideEncryption`](#aws-cdk-sdk.macie.MacieServerSideEncryption)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Bucket.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Bucket.property.owner"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieS3BucketOwner`](#aws-cdk-sdk.macie.MacieS3BucketOwner)

---

##### `publicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Bucket.property.publicAccess"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketPublicAccess`](#aws-cdk-sdk.macie.MacieBucketPublicAccess)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Bucket.property.tags"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieKeyValuePair`](#aws-cdk-sdk.macie.MacieKeyValuePair)[]

---

### MacieS3BucketDefinitionForJob <a name="aws-cdk-sdk.macie.MacieS3BucketDefinitionForJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieS3BucketDefinitionForJob: macie.MacieS3BucketDefinitionForJob = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3BucketDefinitionForJob.property.accountId"></a>

- *Type:* `string`

---

##### `buckets`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3BucketDefinitionForJob.property.buckets"></a>

- *Type:* `string`[]

---

### MacieS3BucketOwner <a name="aws-cdk-sdk.macie.MacieS3BucketOwner"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieS3BucketOwner: macie.MacieS3BucketOwner = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3BucketOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3BucketOwner.property.id"></a>

- *Type:* `string`

---

### MacieS3Destination <a name="aws-cdk-sdk.macie.MacieS3Destination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieS3Destination: macie.MacieS3Destination = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieS3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieS3Destination.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Destination.property.keyPrefix"></a>

- *Type:* `string`

---

### MacieS3JobDefinition <a name="aws-cdk-sdk.macie.MacieS3JobDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieS3JobDefinition: macie.MacieS3JobDefinition = { ... }
```

##### `bucketDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3JobDefinition.property.bucketDefinitions"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieS3BucketDefinitionForJob`](#aws-cdk-sdk.macie.MacieS3BucketDefinitionForJob)[]

---

##### `scoping`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3JobDefinition.property.scoping"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieScoping`](#aws-cdk-sdk.macie.MacieScoping)

---

### MacieS3Object <a name="aws-cdk-sdk.macie.MacieS3Object"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieS3Object: macie.MacieS3Object = { ... }
```

##### `bucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.bucketArn"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.eTag"></a>

- *Type:* `string`

---

##### `extension`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.extension"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.key"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.lastModified"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.path"></a>

- *Type:* `string`

---

##### `publicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.publicAccess"></a>

- *Type:* `boolean`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.serverSideEncryption"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieServerSideEncryption`](#aws-cdk-sdk.macie.MacieServerSideEncryption)

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.size"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.storageClass"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.tags"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieKeyValuePair`](#aws-cdk-sdk.macie.MacieKeyValuePair)[]

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieS3Object.property.versionId"></a>

- *Type:* `string`

---

### MacieScoping <a name="aws-cdk-sdk.macie.MacieScoping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieScoping: macie.MacieScoping = { ... }
```

##### `excludes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieScoping.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieJobScopingBlock`](#aws-cdk-sdk.macie.MacieJobScopingBlock)

---

##### `includes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieScoping.property.includes"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieJobScopingBlock`](#aws-cdk-sdk.macie.MacieJobScopingBlock)

---

### MacieSensitiveDataItem <a name="aws-cdk-sdk.macie.MacieSensitiveDataItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieSensitiveDataItem: macie.MacieSensitiveDataItem = { ... }
```

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSensitiveDataItem.property.category"></a>

- *Type:* `string`

---

##### `detections`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSensitiveDataItem.property.detections"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDefaultDetection`](#aws-cdk-sdk.macie.MacieDefaultDetection)[]

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSensitiveDataItem.property.totalCount"></a>

- *Type:* `number`

---

### MacieServerSideEncryption <a name="aws-cdk-sdk.macie.MacieServerSideEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieServerSideEncryption: macie.MacieServerSideEncryption = { ... }
```

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieServerSideEncryption.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieServerSideEncryption.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

### MacieServiceLimit <a name="aws-cdk-sdk.macie.MacieServiceLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieServiceLimit: macie.MacieServiceLimit = { ... }
```

##### `isServiceLimited`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieServiceLimit.property.isServiceLimited"></a>

- *Type:* `boolean`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieServiceLimit.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieServiceLimit.property.value"></a>

- *Type:* `number`

---

### MacieSessionContext <a name="aws-cdk-sdk.macie.MacieSessionContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieSessionContext: macie.MacieSessionContext = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSessionContext.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieSessionContextAttributes`](#aws-cdk-sdk.macie.MacieSessionContextAttributes)

---

##### `sessionIssuer`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSessionContext.property.sessionIssuer"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieSessionIssuer`](#aws-cdk-sdk.macie.MacieSessionIssuer)

---

### MacieSessionContextAttributes <a name="aws-cdk-sdk.macie.MacieSessionContextAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieSessionContextAttributes: macie.MacieSessionContextAttributes = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSessionContextAttributes.property.creationDate"></a>

- *Type:* `string`

---

##### `mfaAuthenticated`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSessionContextAttributes.property.mfaAuthenticated"></a>

- *Type:* `boolean`

---

### MacieSessionIssuer <a name="aws-cdk-sdk.macie.MacieSessionIssuer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieSessionIssuer: macie.MacieSessionIssuer = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSessionIssuer.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSessionIssuer.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSessionIssuer.property.principalId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSessionIssuer.property.type"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSessionIssuer.property.userName"></a>

- *Type:* `string`

---

### MacieSeverity <a name="aws-cdk-sdk.macie.MacieSeverity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieSeverity: macie.MacieSeverity = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSeverity.property.description"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSeverity.property.score"></a>

- *Type:* `number`

---

### MacieSimpleScopeTerm <a name="aws-cdk-sdk.macie.MacieSimpleScopeTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieSimpleScopeTerm: macie.MacieSimpleScopeTerm = { ... }
```

##### `comparator`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSimpleScopeTerm.property.comparator"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSimpleScopeTerm.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSimpleScopeTerm.property.values"></a>

- *Type:* `string`[]

---

### MacieSortCriteria <a name="aws-cdk-sdk.macie.MacieSortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieSortCriteria: macie.MacieSortCriteria = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSortCriteria.property.attributeName"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieSortCriteria.property.orderBy"></a>

- *Type:* `string`

---

### MacieStatistics <a name="aws-cdk-sdk.macie.MacieStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieStatistics: macie.MacieStatistics = { ... }
```

##### `approximateNumberOfObjectsToProcess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieStatistics.property.approximateNumberOfObjectsToProcess"></a>

- *Type:* `number`

---

##### `numberOfRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieStatistics.property.numberOfRuns"></a>

- *Type:* `number`

---

### MacieTagResourceRequest <a name="aws-cdk-sdk.macie.MacieTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieTagResourceRequest: macie.MacieTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MacieTagResourceResponse <a name="aws-cdk-sdk.macie.MacieTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieTagResourceResponse: macie.MacieTagResourceResponse = { ... }
```

### MacieTagScopeTerm <a name="aws-cdk-sdk.macie.MacieTagScopeTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieTagScopeTerm: macie.MacieTagScopeTerm = { ... }
```

##### `comparator`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieTagScopeTerm.property.comparator"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieTagScopeTerm.property.key"></a>

- *Type:* `string`

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieTagScopeTerm.property.tagValues"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieTagValuePair`](#aws-cdk-sdk.macie.MacieTagValuePair)[]

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieTagScopeTerm.property.target"></a>

- *Type:* `string`

---

### MacieTagValuePair <a name="aws-cdk-sdk.macie.MacieTagValuePair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieTagValuePair: macie.MacieTagValuePair = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieTagValuePair.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieTagValuePair.property.value"></a>

- *Type:* `string`

---

### MacieTestCustomDataIdentifierRequest <a name="aws-cdk-sdk.macie.MacieTestCustomDataIdentifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieTestCustomDataIdentifierRequest: macie.MacieTestCustomDataIdentifierRequest = { ... }
```

##### `regex`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieTestCustomDataIdentifierRequest.property.regex"></a>

- *Type:* `string`

---

##### `sampleText`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieTestCustomDataIdentifierRequest.property.sampleText"></a>

- *Type:* `string`

---

##### `ignoreWords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieTestCustomDataIdentifierRequest.property.ignoreWords"></a>

- *Type:* `string`[]

---

##### `keywords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieTestCustomDataIdentifierRequest.property.keywords"></a>

- *Type:* `string`[]

---

##### `maximumMatchDistance`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieTestCustomDataIdentifierRequest.property.maximumMatchDistance"></a>

- *Type:* `number`

---

### MacieTestCustomDataIdentifierResponse <a name="aws-cdk-sdk.macie.MacieTestCustomDataIdentifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieTestCustomDataIdentifierResponse: macie.MacieTestCustomDataIdentifierResponse = { ... }
```

##### `matchCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieTestCustomDataIdentifierResponse.property.matchCount"></a>

- *Type:* `number`

---

### MacieUnprocessedAccount <a name="aws-cdk-sdk.macie.MacieUnprocessedAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUnprocessedAccount: macie.MacieUnprocessedAccount = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUnprocessedAccount.property.accountId"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUnprocessedAccount.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUnprocessedAccount.property.errorMessage"></a>

- *Type:* `string`

---

### MacieUntagResourceRequest <a name="aws-cdk-sdk.macie.MacieUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUntagResourceRequest: macie.MacieUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### MacieUntagResourceResponse <a name="aws-cdk-sdk.macie.MacieUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUntagResourceResponse: macie.MacieUntagResourceResponse = { ... }
```

### MacieUpdateClassificationJobRequest <a name="aws-cdk-sdk.macie.MacieUpdateClassificationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUpdateClassificationJobRequest: macie.MacieUpdateClassificationJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieUpdateClassificationJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieUpdateClassificationJobRequest.property.jobStatus"></a>

- *Type:* `string`

---

### MacieUpdateClassificationJobResponse <a name="aws-cdk-sdk.macie.MacieUpdateClassificationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUpdateClassificationJobResponse: macie.MacieUpdateClassificationJobResponse = { ... }
```

### MacieUpdateFindingsFilterRequest <a name="aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUpdateFindingsFilterRequest: macie.MacieUpdateFindingsFilterRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest.property.id"></a>

- *Type:* `string`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest.property.action"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest.property.description"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFindingCriteria`](#aws-cdk-sdk.macie.MacieFindingCriteria)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest.property.name"></a>

- *Type:* `string`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest.property.position"></a>

- *Type:* `number`

---

### MacieUpdateFindingsFilterResponse <a name="aws-cdk-sdk.macie.MacieUpdateFindingsFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUpdateFindingsFilterResponse: macie.MacieUpdateFindingsFilterResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUpdateFindingsFilterResponse.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUpdateFindingsFilterResponse.property.id"></a>

- *Type:* `string`

---

### MacieUpdateMacieSessionRequest <a name="aws-cdk-sdk.macie.MacieUpdateMacieSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUpdateMacieSessionRequest: macie.MacieUpdateMacieSessionRequest = { ... }
```

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUpdateMacieSessionRequest.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUpdateMacieSessionRequest.property.status"></a>

- *Type:* `string`

---

### MacieUpdateMacieSessionResponse <a name="aws-cdk-sdk.macie.MacieUpdateMacieSessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUpdateMacieSessionResponse: macie.MacieUpdateMacieSessionResponse = { ... }
```

### MacieUpdateMemberSessionRequest <a name="aws-cdk-sdk.macie.MacieUpdateMemberSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUpdateMemberSessionRequest: macie.MacieUpdateMemberSessionRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieUpdateMemberSessionRequest.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieUpdateMemberSessionRequest.property.status"></a>

- *Type:* `string`

---

### MacieUpdateMemberSessionResponse <a name="aws-cdk-sdk.macie.MacieUpdateMemberSessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUpdateMemberSessionResponse: macie.MacieUpdateMemberSessionResponse = { ... }
```

### MacieUpdateOrganizationConfigurationRequest <a name="aws-cdk-sdk.macie.MacieUpdateOrganizationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUpdateOrganizationConfigurationRequest: macie.MacieUpdateOrganizationConfigurationRequest = { ... }
```

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieUpdateOrganizationConfigurationRequest.property.autoEnable"></a>

- *Type:* `boolean`

---

### MacieUpdateOrganizationConfigurationResponse <a name="aws-cdk-sdk.macie.MacieUpdateOrganizationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUpdateOrganizationConfigurationResponse: macie.MacieUpdateOrganizationConfigurationResponse = { ... }
```

### MacieUsageByAccount <a name="aws-cdk-sdk.macie.MacieUsageByAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUsageByAccount: macie.MacieUsageByAccount = { ... }
```

##### `currency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageByAccount.property.currency"></a>

- *Type:* `string`

---

##### `estimatedCost`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageByAccount.property.estimatedCost"></a>

- *Type:* `string`

---

##### `serviceLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageByAccount.property.serviceLimit"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieServiceLimit`](#aws-cdk-sdk.macie.MacieServiceLimit)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageByAccount.property.type"></a>

- *Type:* `string`

---

### MacieUsageRecord <a name="aws-cdk-sdk.macie.MacieUsageRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUsageRecord: macie.MacieUsageRecord = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageRecord.property.accountId"></a>

- *Type:* `string`

---

##### `freeTrialStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageRecord.property.freeTrialStartDate"></a>

- *Type:* `string`

---

##### `usage`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageRecord.property.usage"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUsageByAccount`](#aws-cdk-sdk.macie.MacieUsageByAccount)[]

---

### MacieUsageStatisticsFilter <a name="aws-cdk-sdk.macie.MacieUsageStatisticsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUsageStatisticsFilter: macie.MacieUsageStatisticsFilter = { ... }
```

##### `comparator`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageStatisticsFilter.property.comparator"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageStatisticsFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageStatisticsFilter.property.values"></a>

- *Type:* `string`[]

---

### MacieUsageStatisticsSortBy <a name="aws-cdk-sdk.macie.MacieUsageStatisticsSortBy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUsageStatisticsSortBy: macie.MacieUsageStatisticsSortBy = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageStatisticsSortBy.property.key"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageStatisticsSortBy.property.orderBy"></a>

- *Type:* `string`

---

### MacieUsageTotal <a name="aws-cdk-sdk.macie.MacieUsageTotal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUsageTotal: macie.MacieUsageTotal = { ... }
```

##### `currency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageTotal.property.currency"></a>

- *Type:* `string`

---

##### `estimatedCost`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageTotal.property.estimatedCost"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUsageTotal.property.type"></a>

- *Type:* `string`

---

### MacieUserIdentity <a name="aws-cdk-sdk.macie.MacieUserIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUserIdentity: macie.MacieUserIdentity = { ... }
```

##### `assumedRole`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserIdentity.property.assumedRole"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieAssumedRole`](#aws-cdk-sdk.macie.MacieAssumedRole)

---

##### `awsAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserIdentity.property.awsAccount"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieAwsAccount`](#aws-cdk-sdk.macie.MacieAwsAccount)

---

##### `awsService`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserIdentity.property.awsService"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieAwsService`](#aws-cdk-sdk.macie.MacieAwsService)

---

##### `federatedUser`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserIdentity.property.federatedUser"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFederatedUser`](#aws-cdk-sdk.macie.MacieFederatedUser)

---

##### `iamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserIdentity.property.iamUser"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieIamUser`](#aws-cdk-sdk.macie.MacieIamUser)

---

##### `root`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserIdentity.property.root"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUserIdentityRoot`](#aws-cdk-sdk.macie.MacieUserIdentityRoot)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserIdentity.property.type"></a>

- *Type:* `string`

---

### MacieUserIdentityRoot <a name="aws-cdk-sdk.macie.MacieUserIdentityRoot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUserIdentityRoot: macie.MacieUserIdentityRoot = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserIdentityRoot.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserIdentityRoot.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserIdentityRoot.property.principalId"></a>

- *Type:* `string`

---

### MacieUserPausedDetails <a name="aws-cdk-sdk.macie.MacieUserPausedDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieUserPausedDetails: macie.MacieUserPausedDetails = { ... }
```

##### `jobExpiresAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserPausedDetails.property.jobExpiresAt"></a>

- *Type:* `string`

---

##### `jobImminentExpirationHealthEventArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserPausedDetails.property.jobImminentExpirationHealthEventArn"></a>

- *Type:* `string`

---

##### `jobPausedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieUserPausedDetails.property.jobPausedAt"></a>

- *Type:* `string`

---

### MacieWeeklySchedule <a name="aws-cdk-sdk.macie.MacieWeeklySchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

const macieWeeklySchedule: macie.MacieWeeklySchedule = { ... }
```

##### `dayOfWeek`<sup>Optional</sup> <a name="aws-cdk-sdk.macie.MacieWeeklySchedule.property.dayOfWeek"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### MacieResponsesBatchGetCustomDataIdentifiers <a name="aws-cdk-sdk.macie.MacieResponsesBatchGetCustomDataIdentifiers"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesBatchGetCustomDataIdentifiers.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesBatchGetCustomDataIdentifiers(__scope: Construct, __resources: string[], __input: MacieBatchGetCustomDataIdentifiersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesBatchGetCustomDataIdentifiers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesBatchGetCustomDataIdentifiers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesBatchGetCustomDataIdentifiers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifiersRequest`](#aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifiersRequest)

---



#### Properties <a name="Properties"></a>

##### `customDataIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesBatchGetCustomDataIdentifiers.property.customDataIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary`](#aws-cdk-sdk.macie.MacieBatchGetCustomDataIdentifierSummary)[]

---

##### `notFoundIdentifierIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesBatchGetCustomDataIdentifiers.property.notFoundIdentifierIds"></a>

- *Type:* `string`[]

---


### MacieResponsesCreateClassificationJob <a name="aws-cdk-sdk.macie.MacieResponsesCreateClassificationJob"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesCreateClassificationJob.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesCreateClassificationJob(__scope: Construct, __resources: string[], __input: MacieCreateClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateClassificationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateClassificationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateClassificationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateClassificationJobRequest`](#aws-cdk-sdk.macie.MacieCreateClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateClassificationJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateClassificationJob.property.jobId"></a>

- *Type:* `string`

---


### MacieResponsesCreateCustomDataIdentifier <a name="aws-cdk-sdk.macie.MacieResponsesCreateCustomDataIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesCreateCustomDataIdentifier.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesCreateCustomDataIdentifier(__scope: Construct, __resources: string[], __input: MacieCreateCustomDataIdentifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateCustomDataIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateCustomDataIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateCustomDataIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest`](#aws-cdk-sdk.macie.MacieCreateCustomDataIdentifierRequest)

---



#### Properties <a name="Properties"></a>

##### `customDataIdentifierId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateCustomDataIdentifier.property.customDataIdentifierId"></a>

- *Type:* `string`

---


### MacieResponsesCreateFindingsFilter <a name="aws-cdk-sdk.macie.MacieResponsesCreateFindingsFilter"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesCreateFindingsFilter.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesCreateFindingsFilter(__scope: Construct, __resources: string[], __input: MacieCreateFindingsFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateFindingsFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateFindingsFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateFindingsFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest`](#aws-cdk-sdk.macie.MacieCreateFindingsFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateFindingsFilter.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateFindingsFilter.property.id"></a>

- *Type:* `string`

---


### MacieResponsesCreateInvitations <a name="aws-cdk-sdk.macie.MacieResponsesCreateInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesCreateInvitations.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesCreateInvitations(__scope: Construct, __resources: string[], __input: MacieCreateInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateInvitationsRequest`](#aws-cdk-sdk.macie.MacieCreateInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateInvitations.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUnprocessedAccount`](#aws-cdk-sdk.macie.MacieUnprocessedAccount)[]

---


### MacieResponsesCreateMember <a name="aws-cdk-sdk.macie.MacieResponsesCreateMember"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesCreateMember.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesCreateMember(__scope: Construct, __resources: string[], __input: MacieCreateMemberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCreateMemberRequest`](#aws-cdk-sdk.macie.MacieCreateMemberRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesCreateMember.property.arn"></a>

- *Type:* `string`

---


### MacieResponsesDeclineInvitations <a name="aws-cdk-sdk.macie.MacieResponsesDeclineInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDeclineInvitations.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDeclineInvitations(__scope: Construct, __resources: string[], __input: MacieDeclineInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDeclineInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDeclineInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDeclineInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDeclineInvitationsRequest`](#aws-cdk-sdk.macie.MacieDeclineInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDeclineInvitations.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUnprocessedAccount`](#aws-cdk-sdk.macie.MacieUnprocessedAccount)[]

---


### MacieResponsesDeleteInvitations <a name="aws-cdk-sdk.macie.MacieResponsesDeleteInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDeleteInvitations.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDeleteInvitations(__scope: Construct, __resources: string[], __input: MacieDeleteInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDeleteInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDeleteInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDeleteInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDeleteInvitationsRequest`](#aws-cdk-sdk.macie.MacieDeleteInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDeleteInvitations.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUnprocessedAccount`](#aws-cdk-sdk.macie.MacieUnprocessedAccount)[]

---


### MacieResponsesDescribeBuckets <a name="aws-cdk-sdk.macie.MacieResponsesDescribeBuckets"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeBuckets.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeBuckets(__scope: Construct, __resources: string[], __input: MacieDescribeBucketsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeBuckets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeBuckets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeBuckets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeBucketsRequest`](#aws-cdk-sdk.macie.MacieDescribeBucketsRequest)

---



#### Properties <a name="Properties"></a>

##### `buckets`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeBuckets.property.buckets"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieBucketMetadata`](#aws-cdk-sdk.macie.MacieBucketMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeBuckets.property.nextToken"></a>

- *Type:* `string`

---


### MacieResponsesDescribeClassificationJob <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJob(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.clientToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.createdAt"></a>

- *Type:* `string`

---

##### `customDataIdentifierIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.customDataIdentifierIds"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.description"></a>

- *Type:* `string`

---

##### `initialRun`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.initialRun"></a>

- *Type:* `boolean`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.jobStatus"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.jobType"></a>

- *Type:* `string`

---

##### `lastRunErrorStatus`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.lastRunErrorStatus"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobLastRunErrorStatus`](#aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobLastRunErrorStatus)

---

##### `lastRunTime`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.lastRunTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.name"></a>

- *Type:* `string`

---

##### `s3JobDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.s3JobDefinition"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinition`](#aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinition)

---

##### `samplingPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.samplingPercentage"></a>

- *Type:* `number`

---

##### `scheduleFrequency`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.scheduleFrequency"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequency`](#aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequency)

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobStatistics`](#aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobStatistics)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userPausedDetails`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJob.property.userPausedDetails"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobUserPausedDetails`](#aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobUserPausedDetails)

---


### MacieResponsesDescribeClassificationJobLastRunErrorStatus <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobLastRunErrorStatus"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobLastRunErrorStatus.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJobLastRunErrorStatus(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobLastRunErrorStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobLastRunErrorStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobLastRunErrorStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobLastRunErrorStatus.property.code"></a>

- *Type:* `string`

---


### MacieResponsesDescribeClassificationJobS3JobDefinition <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinition.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJobS3JobDefinition(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinition.property.bucketDefinitions"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieS3BucketDefinitionForJob`](#aws-cdk-sdk.macie.MacieS3BucketDefinitionForJob)[]

---

##### `scoping`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinition.property.scoping"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScoping`](#aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScoping)

---


### MacieResponsesDescribeClassificationJobS3JobDefinitionScoping <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScoping"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScoping.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScoping(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScoping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScoping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScoping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `excludes`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScoping.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes`](#aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes)

---

##### `includes`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScoping.property.includes"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes`](#aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes)

---


### MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `and`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes.property.and"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieJobScopeTerm`](#aws-cdk-sdk.macie.MacieJobScopeTerm)[]

---


### MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `and`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes.property.and"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieJobScopeTerm`](#aws-cdk-sdk.macie.MacieJobScopeTerm)[]

---


### MacieResponsesDescribeClassificationJobScheduleFrequency <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequency"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequency.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJobScheduleFrequency(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequency.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequency.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequency.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dailySchedule`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequency.property.dailySchedule"></a>

- *Type:* `any`

---

##### `monthlySchedule`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequency.property.monthlySchedule"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule`](#aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule)

---

##### `weeklySchedule`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequency.property.weeklySchedule"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule`](#aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule)

---


### MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dayOfMonth`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule.property.dayOfMonth"></a>

- *Type:* `number`

---


### MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dayOfWeek`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule.property.dayOfWeek"></a>

- *Type:* `string`

---


### MacieResponsesDescribeClassificationJobStatistics <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobStatistics.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJobStatistics(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `approximateNumberOfObjectsToProcess`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobStatistics.property.approximateNumberOfObjectsToProcess"></a>

- *Type:* `number`

---

##### `numberOfRuns`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobStatistics.property.numberOfRuns"></a>

- *Type:* `number`

---


### MacieResponsesDescribeClassificationJobUserPausedDetails <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobUserPausedDetails"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobUserPausedDetails.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeClassificationJobUserPausedDetails(__scope: Construct, __resources: string[], __input: MacieDescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobUserPausedDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobUserPausedDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobUserPausedDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest`](#aws-cdk-sdk.macie.MacieDescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobExpiresAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobUserPausedDetails.property.jobExpiresAt"></a>

- *Type:* `string`

---

##### `jobImminentExpirationHealthEventArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobUserPausedDetails.property.jobImminentExpirationHealthEventArn"></a>

- *Type:* `string`

---

##### `jobPausedAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeClassificationJobUserPausedDetails.property.jobPausedAt"></a>

- *Type:* `string`

---


### MacieResponsesDescribeOrganizationConfiguration <a name="aws-cdk-sdk.macie.MacieResponsesDescribeOrganizationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesDescribeOrganizationConfiguration.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesDescribeOrganizationConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeOrganizationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeOrganizationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeOrganizationConfiguration.property.autoEnable"></a>

- *Type:* `boolean`

---

##### `maxAccountLimitReached`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesDescribeOrganizationConfiguration.property.maxAccountLimitReached"></a>

- *Type:* `boolean`

---


### MacieResponsesFetchBucketStatistics <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchBucketStatistics(__scope: Construct, __resources: string[], __input: MacieGetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.bucketCount"></a>

- *Type:* `number`

---

##### `bucketCountByEffectivePermission`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.bucketCountByEffectivePermission"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission`](#aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission)

---

##### `bucketCountByEncryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.bucketCountByEncryptionType"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType`](#aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType)

---

##### `bucketCountBySharedAccessType`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.bucketCountBySharedAccessType"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType`](#aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType)

---

##### `classifiableObjectCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.classifiableObjectCount"></a>

- *Type:* `number`

---

##### `classifiableSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.classifiableSizeInBytes"></a>

- *Type:* `number`

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.lastUpdated"></a>

- *Type:* `string`

---

##### `objectCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.objectCount"></a>

- *Type:* `number`

---

##### `sizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `sizeInBytesCompressed`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.sizeInBytesCompressed"></a>

- *Type:* `number`

---

##### `unclassifiableObjectCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.unclassifiableObjectCount"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount`](#aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount)

---

##### `unclassifiableObjectSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatistics.property.unclassifiableObjectSizeInBytes"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes`](#aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes)

---


### MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission(__scope: Construct, __resources: string[], __input: MacieGetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission.property.publiclyAccessible"></a>

- *Type:* `number`

---

##### `publiclyReadable`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission.property.publiclyReadable"></a>

- *Type:* `number`

---

##### `publiclyWritable`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission.property.publiclyWritable"></a>

- *Type:* `number`

---

##### `unknown`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission.property.unknown"></a>

- *Type:* `number`

---


### MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType(__scope: Construct, __resources: string[], __input: MacieGetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsManaged`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType.property.kmsManaged"></a>

- *Type:* `number`

---

##### `s3Managed`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType.property.s3Managed"></a>

- *Type:* `number`

---

##### `unencrypted`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType.property.unencrypted"></a>

- *Type:* `number`

---


### MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType(__scope: Construct, __resources: string[], __input: MacieGetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `external`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType.property.external"></a>

- *Type:* `number`

---

##### `internal`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType.property.internal"></a>

- *Type:* `number`

---

##### `notShared`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType.property.notShared"></a>

- *Type:* `number`

---

##### `unknown`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType.property.unknown"></a>

- *Type:* `number`

---


### MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount(__scope: Construct, __resources: string[], __input: MacieGetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `fileType`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount.property.fileType"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount.property.storageClass"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount.property.total"></a>

- *Type:* `number`

---


### MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes(__scope: Construct, __resources: string[], __input: MacieGetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `fileType`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.property.fileType"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.property.storageClass"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.property.total"></a>

- *Type:* `number`

---


### MacieResponsesFetchClassificationExportConfiguration <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfiguration.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchClassificationExportConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfiguration.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfiguration`](#aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfiguration)

---


### MacieResponsesFetchClassificationExportConfigurationConfiguration <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfiguration.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchClassificationExportConfigurationConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfiguration.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination`](#aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination)

---


### MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination.property.keyPrefix"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination.property.kmsKeyArn"></a>

- *Type:* `string`

---


### MacieResponsesFetchCustomDataIdentifier <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchCustomDataIdentifier(__scope: Construct, __resources: string[], __input: MacieGetCustomDataIdentifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetCustomDataIdentifierRequest`](#aws-cdk-sdk.macie.MacieGetCustomDataIdentifierRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.createdAt"></a>

- *Type:* `string`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.deleted"></a>

- *Type:* `boolean`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.id"></a>

- *Type:* `string`

---

##### `ignoreWords`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.ignoreWords"></a>

- *Type:* `string`[]

---

##### `keywords`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.keywords"></a>

- *Type:* `string`[]

---

##### `maximumMatchDistance`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.maximumMatchDistance"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.name"></a>

- *Type:* `string`

---

##### `regex`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.regex"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchCustomDataIdentifier.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MacieResponsesFetchFindings <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindings"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindings.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchFindings(__scope: Construct, __resources: string[], __input: MacieGetFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetFindingsRequest`](#aws-cdk-sdk.macie.MacieGetFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindings.property.findings"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFinding`](#aws-cdk-sdk.macie.MacieFinding)[]

---


### MacieResponsesFetchFindingsFilter <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchFindingsFilter(__scope: Construct, __resources: string[], __input: MacieGetFindingsFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetFindingsFilterRequest`](#aws-cdk-sdk.macie.MacieGetFindingsFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.property.description"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilterFindingCriteria`](#aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilterFindingCriteria)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.property.name"></a>

- *Type:* `string`

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.property.position"></a>

- *Type:* `number`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilter.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MacieResponsesFetchFindingsFilterFindingCriteria <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilterFindingCriteria"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilterFindingCriteria.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchFindingsFilterFindingCriteria(__scope: Construct, __resources: string[], __input: MacieGetFindingsFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilterFindingCriteria.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilterFindingCriteria.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilterFindingCriteria.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetFindingsFilterRequest`](#aws-cdk-sdk.macie.MacieGetFindingsFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `criterion`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingsFilterFindingCriteria.property.criterion"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.macie.MacieCriterionAdditionalProperties`](#aws-cdk-sdk.macie.MacieCriterionAdditionalProperties)}

---


### MacieResponsesFetchFindingStatistics <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingStatistics.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchFindingStatistics(__scope: Construct, __resources: string[], __input: MacieGetFindingStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetFindingStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetFindingStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `countsByGroup`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchFindingStatistics.property.countsByGroup"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGroupCount`](#aws-cdk-sdk.macie.MacieGroupCount)[]

---


### MacieResponsesFetchInvitationsCount <a name="aws-cdk-sdk.macie.MacieResponsesFetchInvitationsCount"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchInvitationsCount.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchInvitationsCount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchInvitationsCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchInvitationsCount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `invitationsCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchInvitationsCount.property.invitationsCount"></a>

- *Type:* `number`

---


### MacieResponsesFetchMacieSession <a name="aws-cdk-sdk.macie.MacieResponsesFetchMacieSession"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchMacieSession.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchMacieSession(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMacieSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMacieSession.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMacieSession.property.createdAt"></a>

- *Type:* `string`

---

##### `findingPublishingFrequency`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMacieSession.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMacieSession.property.serviceRole"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMacieSession.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMacieSession.property.updatedAt"></a>

- *Type:* `string`

---


### MacieResponsesFetchMasterAccount <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccount"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccount.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchMasterAccount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `master`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccount.property.master"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesFetchMasterAccountMaster`](#aws-cdk-sdk.macie.MacieResponsesFetchMasterAccountMaster)

---


### MacieResponsesFetchMasterAccountMaster <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccountMaster"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccountMaster.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchMasterAccountMaster(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccountMaster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccountMaster.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccountMaster.property.accountId"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccountMaster.property.invitationId"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccountMaster.property.invitedAt"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMasterAccountMaster.property.relationshipStatus"></a>

- *Type:* `string`

---


### MacieResponsesFetchMember <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchMember(__scope: Construct, __resources: string[], __input: MacieGetMemberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetMemberRequest`](#aws-cdk-sdk.macie.MacieGetMemberRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.property.arn"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.property.email"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.property.invitedAt"></a>

- *Type:* `string`

---

##### `masterAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.property.masterAccountId"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.property.relationshipStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchMember.property.updatedAt"></a>

- *Type:* `string`

---


### MacieResponsesFetchUsageStatistics <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageStatistics.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchUsageStatistics(__scope: Construct, __resources: string[], __input: MacieGetUsageStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieGetUsageStatisticsRequest`](#aws-cdk-sdk.macie.MacieGetUsageStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageStatistics.property.nextToken"></a>

- *Type:* `string`

---

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageStatistics.property.records"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUsageRecord`](#aws-cdk-sdk.macie.MacieUsageRecord)[]

---


### MacieResponsesFetchUsageTotals <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageTotals"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageTotals.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesFetchUsageTotals(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageTotals.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageTotals.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `usageTotals`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesFetchUsageTotals.property.usageTotals"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUsageTotal`](#aws-cdk-sdk.macie.MacieUsageTotal)[]

---


### MacieResponsesListClassificationJobs <a name="aws-cdk-sdk.macie.MacieResponsesListClassificationJobs"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesListClassificationJobs.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesListClassificationJobs(__scope: Construct, __resources: string[], __input: MacieListClassificationJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListClassificationJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListClassificationJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListClassificationJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListClassificationJobsRequest`](#aws-cdk-sdk.macie.MacieListClassificationJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListClassificationJobs.property.items"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieJobSummary`](#aws-cdk-sdk.macie.MacieJobSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListClassificationJobs.property.nextToken"></a>

- *Type:* `string`

---


### MacieResponsesListCustomDataIdentifiers <a name="aws-cdk-sdk.macie.MacieResponsesListCustomDataIdentifiers"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesListCustomDataIdentifiers.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesListCustomDataIdentifiers(__scope: Construct, __resources: string[], __input: MacieListCustomDataIdentifiersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListCustomDataIdentifiers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListCustomDataIdentifiers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListCustomDataIdentifiers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListCustomDataIdentifiersRequest`](#aws-cdk-sdk.macie.MacieListCustomDataIdentifiersRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListCustomDataIdentifiers.property.items"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieCustomDataIdentifierSummary`](#aws-cdk-sdk.macie.MacieCustomDataIdentifierSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListCustomDataIdentifiers.property.nextToken"></a>

- *Type:* `string`

---


### MacieResponsesListFindings <a name="aws-cdk-sdk.macie.MacieResponsesListFindings"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesListFindings.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesListFindings(__scope: Construct, __resources: string[], __input: MacieListFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListFindingsRequest`](#aws-cdk-sdk.macie.MacieListFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListFindings.property.findingIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListFindings.property.nextToken"></a>

- *Type:* `string`

---


### MacieResponsesListFindingsFilters <a name="aws-cdk-sdk.macie.MacieResponsesListFindingsFilters"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesListFindingsFilters.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesListFindingsFilters(__scope: Construct, __resources: string[], __input: MacieListFindingsFiltersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListFindingsFilters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListFindingsFilters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListFindingsFilters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListFindingsFiltersRequest`](#aws-cdk-sdk.macie.MacieListFindingsFiltersRequest)

---



#### Properties <a name="Properties"></a>

##### `findingsFilterListItems`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListFindingsFilters.property.findingsFilterListItems"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieFindingsFilterListItem`](#aws-cdk-sdk.macie.MacieFindingsFilterListItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListFindingsFilters.property.nextToken"></a>

- *Type:* `string`

---


### MacieResponsesListInvitations <a name="aws-cdk-sdk.macie.MacieResponsesListInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesListInvitations.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesListInvitations(__scope: Construct, __resources: string[], __input: MacieListInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListInvitationsRequest`](#aws-cdk-sdk.macie.MacieListInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `invitations`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListInvitations.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieInvitation`](#aws-cdk-sdk.macie.MacieInvitation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListInvitations.property.nextToken"></a>

- *Type:* `string`

---


### MacieResponsesListMembers <a name="aws-cdk-sdk.macie.MacieResponsesListMembers"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesListMembers.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesListMembers(__scope: Construct, __resources: string[], __input: MacieListMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListMembersRequest`](#aws-cdk-sdk.macie.MacieListMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListMembers.property.members"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieMember`](#aws-cdk-sdk.macie.MacieMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListMembers.property.nextToken"></a>

- *Type:* `string`

---


### MacieResponsesListOrganizationAdminAccounts <a name="aws-cdk-sdk.macie.MacieResponsesListOrganizationAdminAccounts"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesListOrganizationAdminAccounts.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesListOrganizationAdminAccounts(__scope: Construct, __resources: string[], __input: MacieListOrganizationAdminAccountsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListOrganizationAdminAccounts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListOrganizationAdminAccounts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListOrganizationAdminAccounts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListOrganizationAdminAccountsRequest`](#aws-cdk-sdk.macie.MacieListOrganizationAdminAccountsRequest)

---



#### Properties <a name="Properties"></a>

##### `adminAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListOrganizationAdminAccounts.property.adminAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieAdminAccount`](#aws-cdk-sdk.macie.MacieAdminAccount)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListOrganizationAdminAccounts.property.nextToken"></a>

- *Type:* `string`

---


### MacieResponsesListTagsForResource <a name="aws-cdk-sdk.macie.MacieResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesListTagsForResource.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: MacieListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieListTagsForResourceRequest`](#aws-cdk-sdk.macie.MacieListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MacieResponsesPutClassificationExportConfiguration <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfiguration.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesPutClassificationExportConfiguration(__scope: Construct, __resources: string[], __input: MaciePutClassificationExportConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationRequest`](#aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfiguration.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfiguration`](#aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfiguration)

---


### MacieResponsesPutClassificationExportConfigurationConfiguration <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfiguration.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesPutClassificationExportConfigurationConfiguration(__scope: Construct, __resources: string[], __input: MaciePutClassificationExportConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationRequest`](#aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfiguration.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination`](#aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination)

---


### MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination(__scope: Construct, __resources: string[], __input: MaciePutClassificationExportConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationRequest`](#aws-cdk-sdk.macie.MaciePutClassificationExportConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination.property.keyPrefix"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination.property.kmsKeyArn"></a>

- *Type:* `string`

---


### MacieResponsesTestCustomDataIdentifier <a name="aws-cdk-sdk.macie.MacieResponsesTestCustomDataIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesTestCustomDataIdentifier.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesTestCustomDataIdentifier(__scope: Construct, __resources: string[], __input: MacieTestCustomDataIdentifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesTestCustomDataIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesTestCustomDataIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesTestCustomDataIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieTestCustomDataIdentifierRequest`](#aws-cdk-sdk.macie.MacieTestCustomDataIdentifierRequest)

---



#### Properties <a name="Properties"></a>

##### `matchCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesTestCustomDataIdentifier.property.matchCount"></a>

- *Type:* `number`

---


### MacieResponsesUpdateFindingsFilter <a name="aws-cdk-sdk.macie.MacieResponsesUpdateFindingsFilter"></a>

#### Initializer <a name="aws-cdk-sdk.macie.MacieResponsesUpdateFindingsFilter.Initializer"></a>

```typescript
import { macie } from 'aws-cdk-sdk'

new macie.MacieResponsesUpdateFindingsFilter(__scope: Construct, __resources: string[], __input: MacieUpdateFindingsFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesUpdateFindingsFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesUpdateFindingsFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesUpdateFindingsFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest`](#aws-cdk-sdk.macie.MacieUpdateFindingsFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesUpdateFindingsFilter.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie.MacieResponsesUpdateFindingsFilter.property.id"></a>

- *Type:* `string`

---



