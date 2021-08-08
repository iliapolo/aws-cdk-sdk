# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Macie2Client <a name="aws-cdk-sdk.macie2.Macie2Client"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2Client.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2Client(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptInvitation` <a name="aws-cdk-sdk.macie2.Macie2Client.acceptInvitation"></a>

```typescript
public acceptInvitation(input: Macie2AcceptInvitationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2AcceptInvitationRequest`](#aws-cdk-sdk.macie2.Macie2AcceptInvitationRequest)

---

##### `batchGetCustomDataIdentifiers` <a name="aws-cdk-sdk.macie2.Macie2Client.batchGetCustomDataIdentifiers"></a>

```typescript
public batchGetCustomDataIdentifiers(input: Macie2BatchGetCustomDataIdentifiersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifiersRequest`](#aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifiersRequest)

---

##### `createClassificationJob` <a name="aws-cdk-sdk.macie2.Macie2Client.createClassificationJob"></a>

```typescript
public createClassificationJob(input: Macie2CreateClassificationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest)

---

##### `createCustomDataIdentifier` <a name="aws-cdk-sdk.macie2.Macie2Client.createCustomDataIdentifier"></a>

```typescript
public createCustomDataIdentifier(input: Macie2CreateCustomDataIdentifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest`](#aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest)

---

##### `createFindingsFilter` <a name="aws-cdk-sdk.macie2.Macie2Client.createFindingsFilter"></a>

```typescript
public createFindingsFilter(input: Macie2CreateFindingsFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest`](#aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest)

---

##### `createInvitations` <a name="aws-cdk-sdk.macie2.Macie2Client.createInvitations"></a>

```typescript
public createInvitations(input: Macie2CreateInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateInvitationsRequest`](#aws-cdk-sdk.macie2.Macie2CreateInvitationsRequest)

---

##### `createMember` <a name="aws-cdk-sdk.macie2.Macie2Client.createMember"></a>

```typescript
public createMember(input: Macie2CreateMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateMemberRequest`](#aws-cdk-sdk.macie2.Macie2CreateMemberRequest)

---

##### `createSampleFindings` <a name="aws-cdk-sdk.macie2.Macie2Client.createSampleFindings"></a>

```typescript
public createSampleFindings(input: Macie2CreateSampleFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateSampleFindingsRequest`](#aws-cdk-sdk.macie2.Macie2CreateSampleFindingsRequest)

---

##### `declineInvitations` <a name="aws-cdk-sdk.macie2.Macie2Client.declineInvitations"></a>

```typescript
public declineInvitations(input: Macie2DeclineInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DeclineInvitationsRequest`](#aws-cdk-sdk.macie2.Macie2DeclineInvitationsRequest)

---

##### `deleteCustomDataIdentifier` <a name="aws-cdk-sdk.macie2.Macie2Client.deleteCustomDataIdentifier"></a>

```typescript
public deleteCustomDataIdentifier(input: Macie2DeleteCustomDataIdentifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DeleteCustomDataIdentifierRequest`](#aws-cdk-sdk.macie2.Macie2DeleteCustomDataIdentifierRequest)

---

##### `deleteFindingsFilter` <a name="aws-cdk-sdk.macie2.Macie2Client.deleteFindingsFilter"></a>

```typescript
public deleteFindingsFilter(input: Macie2DeleteFindingsFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DeleteFindingsFilterRequest`](#aws-cdk-sdk.macie2.Macie2DeleteFindingsFilterRequest)

---

##### `deleteInvitations` <a name="aws-cdk-sdk.macie2.Macie2Client.deleteInvitations"></a>

```typescript
public deleteInvitations(input: Macie2DeleteInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DeleteInvitationsRequest`](#aws-cdk-sdk.macie2.Macie2DeleteInvitationsRequest)

---

##### `deleteMember` <a name="aws-cdk-sdk.macie2.Macie2Client.deleteMember"></a>

```typescript
public deleteMember(input: Macie2DeleteMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DeleteMemberRequest`](#aws-cdk-sdk.macie2.Macie2DeleteMemberRequest)

---

##### `describeBuckets` <a name="aws-cdk-sdk.macie2.Macie2Client.describeBuckets"></a>

```typescript
public describeBuckets(input: Macie2DescribeBucketsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeBucketsRequest`](#aws-cdk-sdk.macie2.Macie2DescribeBucketsRequest)

---

##### `describeClassificationJob` <a name="aws-cdk-sdk.macie2.Macie2Client.describeClassificationJob"></a>

```typescript
public describeClassificationJob(input: Macie2DescribeClassificationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---

##### `describeOrganizationConfiguration` <a name="aws-cdk-sdk.macie2.Macie2Client.describeOrganizationConfiguration"></a>

```typescript
public describeOrganizationConfiguration()
```

##### `disableMacie` <a name="aws-cdk-sdk.macie2.Macie2Client.disableMacie"></a>

```typescript
public disableMacie()
```

##### `disableOrganizationAdminAccount` <a name="aws-cdk-sdk.macie2.Macie2Client.disableOrganizationAdminAccount"></a>

```typescript
public disableOrganizationAdminAccount(input: Macie2DisableOrganizationAdminAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DisableOrganizationAdminAccountRequest`](#aws-cdk-sdk.macie2.Macie2DisableOrganizationAdminAccountRequest)

---

##### `disassociateFromMasterAccount` <a name="aws-cdk-sdk.macie2.Macie2Client.disassociateFromMasterAccount"></a>

```typescript
public disassociateFromMasterAccount()
```

##### `disassociateMember` <a name="aws-cdk-sdk.macie2.Macie2Client.disassociateMember"></a>

```typescript
public disassociateMember(input: Macie2DisassociateMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DisassociateMemberRequest`](#aws-cdk-sdk.macie2.Macie2DisassociateMemberRequest)

---

##### `enableMacie` <a name="aws-cdk-sdk.macie2.Macie2Client.enableMacie"></a>

```typescript
public enableMacie(input: Macie2EnableMacieRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2EnableMacieRequest`](#aws-cdk-sdk.macie2.Macie2EnableMacieRequest)

---

##### `enableOrganizationAdminAccount` <a name="aws-cdk-sdk.macie2.Macie2Client.enableOrganizationAdminAccount"></a>

```typescript
public enableOrganizationAdminAccount(input: Macie2EnableOrganizationAdminAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2EnableOrganizationAdminAccountRequest`](#aws-cdk-sdk.macie2.Macie2EnableOrganizationAdminAccountRequest)

---

##### `fetchBucketStatistics` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchBucketStatistics"></a>

```typescript
public fetchBucketStatistics(input: Macie2GetBucketStatisticsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest)

---

##### `fetchClassificationExportConfiguration` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchClassificationExportConfiguration"></a>

```typescript
public fetchClassificationExportConfiguration()
```

##### `fetchCustomDataIdentifier` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchCustomDataIdentifier"></a>

```typescript
public fetchCustomDataIdentifier(input: Macie2GetCustomDataIdentifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierRequest`](#aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierRequest)

---

##### `fetchFindings` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchFindings"></a>

```typescript
public fetchFindings(input: Macie2GetFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetFindingsRequest`](#aws-cdk-sdk.macie2.Macie2GetFindingsRequest)

---

##### `fetchFindingsFilter` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchFindingsFilter"></a>

```typescript
public fetchFindingsFilter(input: Macie2GetFindingsFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetFindingsFilterRequest`](#aws-cdk-sdk.macie2.Macie2GetFindingsFilterRequest)

---

##### `fetchFindingStatistics` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchFindingStatistics"></a>

```typescript
public fetchFindingStatistics(input: Macie2GetFindingStatisticsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetFindingStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetFindingStatisticsRequest)

---

##### `fetchInvitationsCount` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchInvitationsCount"></a>

```typescript
public fetchInvitationsCount()
```

##### `fetchMacieSession` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchMacieSession"></a>

```typescript
public fetchMacieSession()
```

##### `fetchMasterAccount` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchMasterAccount"></a>

```typescript
public fetchMasterAccount()
```

##### `fetchMember` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchMember"></a>

```typescript
public fetchMember(input: Macie2GetMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetMemberRequest`](#aws-cdk-sdk.macie2.Macie2GetMemberRequest)

---

##### `fetchUsageStatistics` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchUsageStatistics"></a>

```typescript
public fetchUsageStatistics(input: Macie2GetUsageStatisticsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetUsageStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetUsageStatisticsRequest)

---

##### `fetchUsageTotals` <a name="aws-cdk-sdk.macie2.Macie2Client.fetchUsageTotals"></a>

```typescript
public fetchUsageTotals()
```

##### `listClassificationJobs` <a name="aws-cdk-sdk.macie2.Macie2Client.listClassificationJobs"></a>

```typescript
public listClassificationJobs(input: Macie2ListClassificationJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListClassificationJobsRequest`](#aws-cdk-sdk.macie2.Macie2ListClassificationJobsRequest)

---

##### `listCustomDataIdentifiers` <a name="aws-cdk-sdk.macie2.Macie2Client.listCustomDataIdentifiers"></a>

```typescript
public listCustomDataIdentifiers(input: Macie2ListCustomDataIdentifiersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListCustomDataIdentifiersRequest`](#aws-cdk-sdk.macie2.Macie2ListCustomDataIdentifiersRequest)

---

##### `listFindings` <a name="aws-cdk-sdk.macie2.Macie2Client.listFindings"></a>

```typescript
public listFindings(input: Macie2ListFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListFindingsRequest`](#aws-cdk-sdk.macie2.Macie2ListFindingsRequest)

---

##### `listFindingsFilters` <a name="aws-cdk-sdk.macie2.Macie2Client.listFindingsFilters"></a>

```typescript
public listFindingsFilters(input: Macie2ListFindingsFiltersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListFindingsFiltersRequest`](#aws-cdk-sdk.macie2.Macie2ListFindingsFiltersRequest)

---

##### `listInvitations` <a name="aws-cdk-sdk.macie2.Macie2Client.listInvitations"></a>

```typescript
public listInvitations(input: Macie2ListInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListInvitationsRequest`](#aws-cdk-sdk.macie2.Macie2ListInvitationsRequest)

---

##### `listMembers` <a name="aws-cdk-sdk.macie2.Macie2Client.listMembers"></a>

```typescript
public listMembers(input: Macie2ListMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListMembersRequest`](#aws-cdk-sdk.macie2.Macie2ListMembersRequest)

---

##### `listOrganizationAdminAccounts` <a name="aws-cdk-sdk.macie2.Macie2Client.listOrganizationAdminAccounts"></a>

```typescript
public listOrganizationAdminAccounts(input: Macie2ListOrganizationAdminAccountsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListOrganizationAdminAccountsRequest`](#aws-cdk-sdk.macie2.Macie2ListOrganizationAdminAccountsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.macie2.Macie2Client.listTagsForResource"></a>

```typescript
public listTagsForResource(input: Macie2ListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListTagsForResourceRequest`](#aws-cdk-sdk.macie2.Macie2ListTagsForResourceRequest)

---

##### `putClassificationExportConfiguration` <a name="aws-cdk-sdk.macie2.Macie2Client.putClassificationExportConfiguration"></a>

```typescript
public putClassificationExportConfiguration(input: Macie2PutClassificationExportConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationRequest`](#aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.macie2.Macie2Client.tagResource"></a>

```typescript
public tagResource(input: Macie2TagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2TagResourceRequest`](#aws-cdk-sdk.macie2.Macie2TagResourceRequest)

---

##### `testCustomDataIdentifier` <a name="aws-cdk-sdk.macie2.Macie2Client.testCustomDataIdentifier"></a>

```typescript
public testCustomDataIdentifier(input: Macie2TestCustomDataIdentifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierRequest`](#aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.macie2.Macie2Client.untagResource"></a>

```typescript
public untagResource(input: Macie2UntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UntagResourceRequest`](#aws-cdk-sdk.macie2.Macie2UntagResourceRequest)

---

##### `updateClassificationJob` <a name="aws-cdk-sdk.macie2.Macie2Client.updateClassificationJob"></a>

```typescript
public updateClassificationJob(input: Macie2UpdateClassificationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UpdateClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2UpdateClassificationJobRequest)

---

##### `updateFindingsFilter` <a name="aws-cdk-sdk.macie2.Macie2Client.updateFindingsFilter"></a>

```typescript
public updateFindingsFilter(input: Macie2UpdateFindingsFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest`](#aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest)

---

##### `updateMacieSession` <a name="aws-cdk-sdk.macie2.Macie2Client.updateMacieSession"></a>

```typescript
public updateMacieSession(input: Macie2UpdateMacieSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UpdateMacieSessionRequest`](#aws-cdk-sdk.macie2.Macie2UpdateMacieSessionRequest)

---

##### `updateMemberSession` <a name="aws-cdk-sdk.macie2.Macie2Client.updateMemberSession"></a>

```typescript
public updateMemberSession(input: Macie2UpdateMemberSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UpdateMemberSessionRequest`](#aws-cdk-sdk.macie2.Macie2UpdateMemberSessionRequest)

---

##### `updateOrganizationConfiguration` <a name="aws-cdk-sdk.macie2.Macie2Client.updateOrganizationConfiguration"></a>

```typescript
public updateOrganizationConfiguration(input: Macie2UpdateOrganizationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UpdateOrganizationConfigurationRequest`](#aws-cdk-sdk.macie2.Macie2UpdateOrganizationConfigurationRequest)

---




## Structs <a name="Structs"></a>

### Macie2AcceptInvitationRequest <a name="aws-cdk-sdk.macie2.Macie2AcceptInvitationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2AcceptInvitationRequest: macie2.Macie2AcceptInvitationRequest = { ... }
```

##### `invitationId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2AcceptInvitationRequest.property.invitationId"></a>

- *Type:* `string`

---

##### `masterAccount`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2AcceptInvitationRequest.property.masterAccount"></a>

- *Type:* `string`

---

### Macie2AcceptInvitationResponse <a name="aws-cdk-sdk.macie2.Macie2AcceptInvitationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2AcceptInvitationResponse: macie2.Macie2AcceptInvitationResponse = { ... }
```

### Macie2AccessControlList <a name="aws-cdk-sdk.macie2.Macie2AccessControlList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2AccessControlList: macie2.Macie2AccessControlList = { ... }
```

##### `allowsPublicReadAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AccessControlList.property.allowsPublicReadAccess"></a>

- *Type:* `boolean`

---

##### `allowsPublicWriteAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AccessControlList.property.allowsPublicWriteAccess"></a>

- *Type:* `boolean`

---

### Macie2AccountDetail <a name="aws-cdk-sdk.macie2.Macie2AccountDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2AccountDetail: macie2.Macie2AccountDetail = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2AccountDetail.property.accountId"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2AccountDetail.property.email"></a>

- *Type:* `string`

---

### Macie2AccountLevelPermissions <a name="aws-cdk-sdk.macie2.Macie2AccountLevelPermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2AccountLevelPermissions: macie2.Macie2AccountLevelPermissions = { ... }
```

##### `blockPublicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AccountLevelPermissions.property.blockPublicAccess"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BlockPublicAccess`](#aws-cdk-sdk.macie2.Macie2BlockPublicAccess)

---

### Macie2AdminAccount <a name="aws-cdk-sdk.macie2.Macie2AdminAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2AdminAccount: macie2.Macie2AdminAccount = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AdminAccount.property.accountId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AdminAccount.property.status"></a>

- *Type:* `string`

---

### Macie2ApiCallDetails <a name="aws-cdk-sdk.macie2.Macie2ApiCallDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ApiCallDetails: macie2.Macie2ApiCallDetails = { ... }
```

##### `api`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ApiCallDetails.property.api"></a>

- *Type:* `string`

---

##### `apiServiceName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ApiCallDetails.property.apiServiceName"></a>

- *Type:* `string`

---

##### `firstSeen`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ApiCallDetails.property.firstSeen"></a>

- *Type:* `string`

---

##### `lastSeen`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ApiCallDetails.property.lastSeen"></a>

- *Type:* `string`

---

### Macie2AssumedRole <a name="aws-cdk-sdk.macie2.Macie2AssumedRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2AssumedRole: macie2.Macie2AssumedRole = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AssumedRole.property.accessKeyId"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AssumedRole.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AssumedRole.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AssumedRole.property.principalId"></a>

- *Type:* `string`

---

##### `sessionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AssumedRole.property.sessionContext"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2SessionContext`](#aws-cdk-sdk.macie2.Macie2SessionContext)

---

### Macie2AwsAccount <a name="aws-cdk-sdk.macie2.Macie2AwsAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2AwsAccount: macie2.Macie2AwsAccount = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AwsAccount.property.accountId"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AwsAccount.property.principalId"></a>

- *Type:* `string`

---

### Macie2AwsService <a name="aws-cdk-sdk.macie2.Macie2AwsService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2AwsService: macie2.Macie2AwsService = { ... }
```

##### `invokedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2AwsService.property.invokedBy"></a>

- *Type:* `string`

---

### Macie2BatchGetCustomDataIdentifiersRequest <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifiersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BatchGetCustomDataIdentifiersRequest: macie2.Macie2BatchGetCustomDataIdentifiersRequest = { ... }
```

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifiersRequest.property.ids"></a>

- *Type:* `string`[]

---

### Macie2BatchGetCustomDataIdentifiersResponse <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifiersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BatchGetCustomDataIdentifiersResponse: macie2.Macie2BatchGetCustomDataIdentifiersResponse = { ... }
```

##### `customDataIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifiersResponse.property.customDataIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary`](#aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary)[]

---

##### `notFoundIdentifierIds`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifiersResponse.property.notFoundIdentifierIds"></a>

- *Type:* `string`[]

---

### Macie2BatchGetCustomDataIdentifierSummary <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BatchGetCustomDataIdentifierSummary: macie2.Macie2BatchGetCustomDataIdentifierSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `deleted`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary.property.deleted"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary.property.name"></a>

- *Type:* `string`

---

### Macie2BlockPublicAccess <a name="aws-cdk-sdk.macie2.Macie2BlockPublicAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BlockPublicAccess: macie2.Macie2BlockPublicAccess = { ... }
```

##### `blockPublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BlockPublicAccess.property.blockPublicAcls"></a>

- *Type:* `boolean`

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BlockPublicAccess.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BlockPublicAccess.property.ignorePublicAcls"></a>

- *Type:* `boolean`

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BlockPublicAccess.property.restrictPublicBuckets"></a>

- *Type:* `boolean`

---

### Macie2BucketCountByEffectivePermission <a name="aws-cdk-sdk.macie2.Macie2BucketCountByEffectivePermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BucketCountByEffectivePermission: macie2.Macie2BucketCountByEffectivePermission = { ... }
```

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountByEffectivePermission.property.publiclyAccessible"></a>

- *Type:* `number`

---

##### `publiclyReadable`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountByEffectivePermission.property.publiclyReadable"></a>

- *Type:* `number`

---

##### `publiclyWritable`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountByEffectivePermission.property.publiclyWritable"></a>

- *Type:* `number`

---

##### `unknown`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountByEffectivePermission.property.unknown"></a>

- *Type:* `number`

---

### Macie2BucketCountByEncryptionType <a name="aws-cdk-sdk.macie2.Macie2BucketCountByEncryptionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BucketCountByEncryptionType: macie2.Macie2BucketCountByEncryptionType = { ... }
```

##### `kmsManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountByEncryptionType.property.kmsManaged"></a>

- *Type:* `number`

---

##### `s3Managed`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountByEncryptionType.property.s3Managed"></a>

- *Type:* `number`

---

##### `unencrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountByEncryptionType.property.unencrypted"></a>

- *Type:* `number`

---

### Macie2BucketCountBySharedAccessType <a name="aws-cdk-sdk.macie2.Macie2BucketCountBySharedAccessType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BucketCountBySharedAccessType: macie2.Macie2BucketCountBySharedAccessType = { ... }
```

##### `external`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountBySharedAccessType.property.external"></a>

- *Type:* `number`

---

##### `internal`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountBySharedAccessType.property.internal"></a>

- *Type:* `number`

---

##### `notShared`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountBySharedAccessType.property.notShared"></a>

- *Type:* `number`

---

##### `unknown`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCountBySharedAccessType.property.unknown"></a>

- *Type:* `number`

---

### Macie2BucketCriteriaAdditionalProperties <a name="aws-cdk-sdk.macie2.Macie2BucketCriteriaAdditionalProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BucketCriteriaAdditionalProperties: macie2.Macie2BucketCriteriaAdditionalProperties = { ... }
```

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCriteriaAdditionalProperties.property.eq"></a>

- *Type:* `string`[]

---

##### `gt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCriteriaAdditionalProperties.property.gt"></a>

- *Type:* `number`

---

##### `gte`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCriteriaAdditionalProperties.property.gte"></a>

- *Type:* `number`

---

##### `lt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCriteriaAdditionalProperties.property.lt"></a>

- *Type:* `number`

---

##### `lte`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCriteriaAdditionalProperties.property.lte"></a>

- *Type:* `number`

---

##### `neq`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCriteriaAdditionalProperties.property.neq"></a>

- *Type:* `string`[]

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketCriteriaAdditionalProperties.property.prefix"></a>

- *Type:* `string`

---

### Macie2BucketLevelPermissions <a name="aws-cdk-sdk.macie2.Macie2BucketLevelPermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BucketLevelPermissions: macie2.Macie2BucketLevelPermissions = { ... }
```

##### `accessControlList`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketLevelPermissions.property.accessControlList"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2AccessControlList`](#aws-cdk-sdk.macie2.Macie2AccessControlList)

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketLevelPermissions.property.blockPublicAccess"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BlockPublicAccess`](#aws-cdk-sdk.macie2.Macie2BlockPublicAccess)

---

##### `bucketPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketLevelPermissions.property.bucketPolicy"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketPolicy`](#aws-cdk-sdk.macie2.Macie2BucketPolicy)

---

### Macie2BucketMetadata <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BucketMetadata: macie2.Macie2BucketMetadata = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.accountId"></a>

- *Type:* `string`

---

##### `bucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.bucketArn"></a>

- *Type:* `string`

---

##### `bucketCreatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.bucketCreatedAt"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.bucketName"></a>

- *Type:* `string`

---

##### `classifiableObjectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.classifiableObjectCount"></a>

- *Type:* `number`

---

##### `classifiableSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.classifiableSizeInBytes"></a>

- *Type:* `number`

---

##### `jobDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.jobDetails"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2JobDetails`](#aws-cdk-sdk.macie2.Macie2JobDetails)

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.lastUpdated"></a>

- *Type:* `string`

---

##### `objectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.objectCount"></a>

- *Type:* `number`

---

##### `objectCountByEncryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.objectCountByEncryptionType"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ObjectCountByEncryptionType`](#aws-cdk-sdk.macie2.Macie2ObjectCountByEncryptionType)

---

##### `publicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.publicAccess"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketPublicAccess`](#aws-cdk-sdk.macie2.Macie2BucketPublicAccess)

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.region"></a>

- *Type:* `string`

---

##### `replicationDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.replicationDetails"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ReplicationDetails`](#aws-cdk-sdk.macie2.Macie2ReplicationDetails)

---

##### `sharedAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.sharedAccess"></a>

- *Type:* `string`

---

##### `sizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `sizeInBytesCompressed`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.sizeInBytesCompressed"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.tags"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2KeyValuePair`](#aws-cdk-sdk.macie2.Macie2KeyValuePair)[]

---

##### `unclassifiableObjectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.unclassifiableObjectCount"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics`](#aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics)

---

##### `unclassifiableObjectSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.unclassifiableObjectSizeInBytes"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics`](#aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics)

---

##### `versioning`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketMetadata.property.versioning"></a>

- *Type:* `boolean`

---

### Macie2BucketPermissionConfiguration <a name="aws-cdk-sdk.macie2.Macie2BucketPermissionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BucketPermissionConfiguration: macie2.Macie2BucketPermissionConfiguration = { ... }
```

##### `accountLevelPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketPermissionConfiguration.property.accountLevelPermissions"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2AccountLevelPermissions`](#aws-cdk-sdk.macie2.Macie2AccountLevelPermissions)

---

##### `bucketLevelPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketPermissionConfiguration.property.bucketLevelPermissions"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketLevelPermissions`](#aws-cdk-sdk.macie2.Macie2BucketLevelPermissions)

---

### Macie2BucketPolicy <a name="aws-cdk-sdk.macie2.Macie2BucketPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BucketPolicy: macie2.Macie2BucketPolicy = { ... }
```

##### `allowsPublicReadAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketPolicy.property.allowsPublicReadAccess"></a>

- *Type:* `boolean`

---

##### `allowsPublicWriteAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketPolicy.property.allowsPublicWriteAccess"></a>

- *Type:* `boolean`

---

### Macie2BucketPublicAccess <a name="aws-cdk-sdk.macie2.Macie2BucketPublicAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BucketPublicAccess: macie2.Macie2BucketPublicAccess = { ... }
```

##### `effectivePermission`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketPublicAccess.property.effectivePermission"></a>

- *Type:* `string`

---

##### `permissionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketPublicAccess.property.permissionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketPermissionConfiguration`](#aws-cdk-sdk.macie2.Macie2BucketPermissionConfiguration)

---

### Macie2BucketSortCriteria <a name="aws-cdk-sdk.macie2.Macie2BucketSortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2BucketSortCriteria: macie2.Macie2BucketSortCriteria = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketSortCriteria.property.attributeName"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2BucketSortCriteria.property.orderBy"></a>

- *Type:* `string`

---

### Macie2Cell <a name="aws-cdk-sdk.macie2.Macie2Cell"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Cell: macie2.Macie2Cell = { ... }
```

##### `cellReference`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Cell.property.cellReference"></a>

- *Type:* `string`

---

##### `column`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Cell.property.column"></a>

- *Type:* `number`

---

##### `columnName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Cell.property.columnName"></a>

- *Type:* `string`

---

##### `row`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Cell.property.row"></a>

- *Type:* `number`

---

### Macie2ClassificationDetails <a name="aws-cdk-sdk.macie2.Macie2ClassificationDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ClassificationDetails: macie2.Macie2ClassificationDetails = { ... }
```

##### `detailedResultsLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationDetails.property.detailedResultsLocation"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationDetails.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationDetails.property.jobId"></a>

- *Type:* `string`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationDetails.property.result"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ClassificationResult`](#aws-cdk-sdk.macie2.Macie2ClassificationResult)

---

### Macie2ClassificationExportConfiguration <a name="aws-cdk-sdk.macie2.Macie2ClassificationExportConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ClassificationExportConfiguration: macie2.Macie2ClassificationExportConfiguration = { ... }
```

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationExportConfiguration.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2S3Destination`](#aws-cdk-sdk.macie2.Macie2S3Destination)

---

### Macie2ClassificationResult <a name="aws-cdk-sdk.macie2.Macie2ClassificationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ClassificationResult: macie2.Macie2ClassificationResult = { ... }
```

##### `additionalOccurrences`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationResult.property.additionalOccurrences"></a>

- *Type:* `boolean`

---

##### `customDataIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationResult.property.customDataIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CustomDataIdentifiers`](#aws-cdk-sdk.macie2.Macie2CustomDataIdentifiers)

---

##### `mimeType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationResult.property.mimeType"></a>

- *Type:* `string`

---

##### `sensitiveData`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationResult.property.sensitiveData"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2SensitiveDataItem`](#aws-cdk-sdk.macie2.Macie2SensitiveDataItem)[]

---

##### `sizeClassified`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationResult.property.sizeClassified"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationResult.property.status"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ClassificationResultStatus`](#aws-cdk-sdk.macie2.Macie2ClassificationResultStatus)

---

### Macie2ClassificationResultStatus <a name="aws-cdk-sdk.macie2.Macie2ClassificationResultStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ClassificationResultStatus: macie2.Macie2ClassificationResultStatus = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationResultStatus.property.code"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ClassificationResultStatus.property.reason"></a>

- *Type:* `string`

---

### Macie2CreateClassificationJobRequest <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateClassificationJobRequest: macie2.Macie2CreateClassificationJobRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest.property.jobType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest.property.name"></a>

- *Type:* `string`

---

##### `s3JobDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest.property.s3JobDefinition"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2S3JobDefinition`](#aws-cdk-sdk.macie2.Macie2S3JobDefinition)

---

##### `customDataIdentifierIds`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest.property.customDataIdentifierIds"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest.property.description"></a>

- *Type:* `string`

---

##### `initialRun`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest.property.initialRun"></a>

- *Type:* `boolean`

---

##### `samplingPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest.property.samplingPercentage"></a>

- *Type:* `number`

---

##### `scheduleFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest.property.scheduleFrequency"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2JobScheduleFrequency`](#aws-cdk-sdk.macie2.Macie2JobScheduleFrequency)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### Macie2CreateClassificationJobResponse <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateClassificationJobResponse: macie2.Macie2CreateClassificationJobResponse = { ... }
```

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobResponse.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateClassificationJobResponse.property.jobId"></a>

- *Type:* `string`

---

### Macie2CreateCustomDataIdentifierRequest <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateCustomDataIdentifierRequest: macie2.Macie2CreateCustomDataIdentifierRequest = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest.property.description"></a>

- *Type:* `string`

---

##### `ignoreWords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest.property.ignoreWords"></a>

- *Type:* `string`[]

---

##### `keywords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest.property.keywords"></a>

- *Type:* `string`[]

---

##### `maximumMatchDistance`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest.property.maximumMatchDistance"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest.property.name"></a>

- *Type:* `string`

---

##### `regex`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest.property.regex"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### Macie2CreateCustomDataIdentifierResponse <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateCustomDataIdentifierResponse: macie2.Macie2CreateCustomDataIdentifierResponse = { ... }
```

##### `customDataIdentifierId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierResponse.property.customDataIdentifierId"></a>

- *Type:* `string`

---

### Macie2CreateFindingsFilterRequest <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateFindingsFilterRequest: macie2.Macie2CreateFindingsFilterRequest = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest.property.action"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FindingCriteria`](#aws-cdk-sdk.macie2.Macie2FindingCriteria)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest.property.name"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest.property.description"></a>

- *Type:* `string`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest.property.position"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### Macie2CreateFindingsFilterResponse <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateFindingsFilterResponse: macie2.Macie2CreateFindingsFilterResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterResponse.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateFindingsFilterResponse.property.id"></a>

- *Type:* `string`

---

### Macie2CreateInvitationsRequest <a name="aws-cdk-sdk.macie2.Macie2CreateInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateInvitationsRequest: macie2.Macie2CreateInvitationsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateInvitationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `disableEmailNotification`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateInvitationsRequest.property.disableEmailNotification"></a>

- *Type:* `boolean`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateInvitationsRequest.property.message"></a>

- *Type:* `string`

---

### Macie2CreateInvitationsResponse <a name="aws-cdk-sdk.macie2.Macie2CreateInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateInvitationsResponse: macie2.Macie2CreateInvitationsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateInvitationsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UnprocessedAccount`](#aws-cdk-sdk.macie2.Macie2UnprocessedAccount)[]

---

### Macie2CreateMemberRequest <a name="aws-cdk-sdk.macie2.Macie2CreateMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateMemberRequest: macie2.Macie2CreateMemberRequest = { ... }
```

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateMemberRequest.property.account"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2AccountDetail`](#aws-cdk-sdk.macie2.Macie2AccountDetail)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateMemberRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### Macie2CreateMemberResponse <a name="aws-cdk-sdk.macie2.Macie2CreateMemberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateMemberResponse: macie2.Macie2CreateMemberResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateMemberResponse.property.arn"></a>

- *Type:* `string`

---

### Macie2CreateSampleFindingsRequest <a name="aws-cdk-sdk.macie2.Macie2CreateSampleFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateSampleFindingsRequest: macie2.Macie2CreateSampleFindingsRequest = { ... }
```

##### `findingTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CreateSampleFindingsRequest.property.findingTypes"></a>

- *Type:* `string`[]

---

### Macie2CreateSampleFindingsResponse <a name="aws-cdk-sdk.macie2.Macie2CreateSampleFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CreateSampleFindingsResponse: macie2.Macie2CreateSampleFindingsResponse = { ... }
```

### Macie2CriterionAdditionalProperties <a name="aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CriterionAdditionalProperties: macie2.Macie2CriterionAdditionalProperties = { ... }
```

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties.property.eq"></a>

- *Type:* `string`[]

---

##### `eqExactMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties.property.eqExactMatch"></a>

- *Type:* `string`[]

---

##### `gt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties.property.gt"></a>

- *Type:* `number`

---

##### `gte`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties.property.gte"></a>

- *Type:* `number`

---

##### `lt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties.property.lt"></a>

- *Type:* `number`

---

##### `lte`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties.property.lte"></a>

- *Type:* `number`

---

##### `neq`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties.property.neq"></a>

- *Type:* `string`[]

---

### Macie2CustomDataIdentifiers <a name="aws-cdk-sdk.macie2.Macie2CustomDataIdentifiers"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CustomDataIdentifiers: macie2.Macie2CustomDataIdentifiers = { ... }
```

##### `detections`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDataIdentifiers.property.detections"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CustomDetection`](#aws-cdk-sdk.macie2.Macie2CustomDetection)[]

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDataIdentifiers.property.totalCount"></a>

- *Type:* `number`

---

### Macie2CustomDataIdentifierSummary <a name="aws-cdk-sdk.macie2.Macie2CustomDataIdentifierSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CustomDataIdentifierSummary: macie2.Macie2CustomDataIdentifierSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDataIdentifierSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDataIdentifierSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDataIdentifierSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDataIdentifierSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDataIdentifierSummary.property.name"></a>

- *Type:* `string`

---

### Macie2CustomDetection <a name="aws-cdk-sdk.macie2.Macie2CustomDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2CustomDetection: macie2.Macie2CustomDetection = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDetection.property.arn"></a>

- *Type:* `string`

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDetection.property.count"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDetection.property.name"></a>

- *Type:* `string`

---

##### `occurrences`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2CustomDetection.property.occurrences"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Occurrences`](#aws-cdk-sdk.macie2.Macie2Occurrences)

---

### Macie2DailySchedule <a name="aws-cdk-sdk.macie2.Macie2DailySchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DailySchedule: macie2.Macie2DailySchedule = { ... }
```

### Macie2DeclineInvitationsRequest <a name="aws-cdk-sdk.macie2.Macie2DeclineInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DeclineInvitationsRequest: macie2.Macie2DeclineInvitationsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2DeclineInvitationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### Macie2DeclineInvitationsResponse <a name="aws-cdk-sdk.macie2.Macie2DeclineInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DeclineInvitationsResponse: macie2.Macie2DeclineInvitationsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DeclineInvitationsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UnprocessedAccount`](#aws-cdk-sdk.macie2.Macie2UnprocessedAccount)[]

---

### Macie2DefaultDetection <a name="aws-cdk-sdk.macie2.Macie2DefaultDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DefaultDetection: macie2.Macie2DefaultDetection = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DefaultDetection.property.count"></a>

- *Type:* `number`

---

##### `occurrences`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DefaultDetection.property.occurrences"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Occurrences`](#aws-cdk-sdk.macie2.Macie2Occurrences)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DefaultDetection.property.type"></a>

- *Type:* `string`

---

### Macie2DeleteCustomDataIdentifierRequest <a name="aws-cdk-sdk.macie2.Macie2DeleteCustomDataIdentifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DeleteCustomDataIdentifierRequest: macie2.Macie2DeleteCustomDataIdentifierRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2DeleteCustomDataIdentifierRequest.property.id"></a>

- *Type:* `string`

---

### Macie2DeleteCustomDataIdentifierResponse <a name="aws-cdk-sdk.macie2.Macie2DeleteCustomDataIdentifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DeleteCustomDataIdentifierResponse: macie2.Macie2DeleteCustomDataIdentifierResponse = { ... }
```

### Macie2DeleteFindingsFilterRequest <a name="aws-cdk-sdk.macie2.Macie2DeleteFindingsFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DeleteFindingsFilterRequest: macie2.Macie2DeleteFindingsFilterRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2DeleteFindingsFilterRequest.property.id"></a>

- *Type:* `string`

---

### Macie2DeleteFindingsFilterResponse <a name="aws-cdk-sdk.macie2.Macie2DeleteFindingsFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DeleteFindingsFilterResponse: macie2.Macie2DeleteFindingsFilterResponse = { ... }
```

### Macie2DeleteInvitationsRequest <a name="aws-cdk-sdk.macie2.Macie2DeleteInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DeleteInvitationsRequest: macie2.Macie2DeleteInvitationsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2DeleteInvitationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### Macie2DeleteInvitationsResponse <a name="aws-cdk-sdk.macie2.Macie2DeleteInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DeleteInvitationsResponse: macie2.Macie2DeleteInvitationsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DeleteInvitationsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UnprocessedAccount`](#aws-cdk-sdk.macie2.Macie2UnprocessedAccount)[]

---

### Macie2DeleteMemberRequest <a name="aws-cdk-sdk.macie2.Macie2DeleteMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DeleteMemberRequest: macie2.Macie2DeleteMemberRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2DeleteMemberRequest.property.id"></a>

- *Type:* `string`

---

### Macie2DeleteMemberResponse <a name="aws-cdk-sdk.macie2.Macie2DeleteMemberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DeleteMemberResponse: macie2.Macie2DeleteMemberResponse = { ... }
```

### Macie2DescribeBucketsRequest <a name="aws-cdk-sdk.macie2.Macie2DescribeBucketsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DescribeBucketsRequest: macie2.Macie2DescribeBucketsRequest = { ... }
```

##### `criteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeBucketsRequest.property.criteria"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.macie2.Macie2BucketCriteriaAdditionalProperties`](#aws-cdk-sdk.macie2.Macie2BucketCriteriaAdditionalProperties)}

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeBucketsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeBucketsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeBucketsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketSortCriteria`](#aws-cdk-sdk.macie2.Macie2BucketSortCriteria)

---

### Macie2DescribeBucketsResponse <a name="aws-cdk-sdk.macie2.Macie2DescribeBucketsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DescribeBucketsResponse: macie2.Macie2DescribeBucketsResponse = { ... }
```

##### `buckets`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeBucketsResponse.property.buckets"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketMetadata`](#aws-cdk-sdk.macie2.Macie2BucketMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeBucketsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Macie2DescribeClassificationJobRequest <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DescribeClassificationJobRequest: macie2.Macie2DescribeClassificationJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest.property.jobId"></a>

- *Type:* `string`

---

### Macie2DescribeClassificationJobResponse <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DescribeClassificationJobResponse: macie2.Macie2DescribeClassificationJobResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `customDataIdentifierIds`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.customDataIdentifierIds"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.description"></a>

- *Type:* `string`

---

##### `initialRun`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.initialRun"></a>

- *Type:* `boolean`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.jobType"></a>

- *Type:* `string`

---

##### `lastRunErrorStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.lastRunErrorStatus"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2LastRunErrorStatus`](#aws-cdk-sdk.macie2.Macie2LastRunErrorStatus)

---

##### `lastRunTime`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.lastRunTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.name"></a>

- *Type:* `string`

---

##### `s3JobDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.s3JobDefinition"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2S3JobDefinition`](#aws-cdk-sdk.macie2.Macie2S3JobDefinition)

---

##### `samplingPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.samplingPercentage"></a>

- *Type:* `number`

---

##### `scheduleFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.scheduleFrequency"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2JobScheduleFrequency`](#aws-cdk-sdk.macie2.Macie2JobScheduleFrequency)

---

##### `statistics`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Statistics`](#aws-cdk-sdk.macie2.Macie2Statistics)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userPausedDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeClassificationJobResponse.property.userPausedDetails"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UserPausedDetails`](#aws-cdk-sdk.macie2.Macie2UserPausedDetails)

---

### Macie2DescribeOrganizationConfigurationRequest <a name="aws-cdk-sdk.macie2.Macie2DescribeOrganizationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DescribeOrganizationConfigurationRequest: macie2.Macie2DescribeOrganizationConfigurationRequest = { ... }
```

### Macie2DescribeOrganizationConfigurationResponse <a name="aws-cdk-sdk.macie2.Macie2DescribeOrganizationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DescribeOrganizationConfigurationResponse: macie2.Macie2DescribeOrganizationConfigurationResponse = { ... }
```

##### `autoEnable`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeOrganizationConfigurationResponse.property.autoEnable"></a>

- *Type:* `boolean`

---

##### `maxAccountLimitReached`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DescribeOrganizationConfigurationResponse.property.maxAccountLimitReached"></a>

- *Type:* `boolean`

---

### Macie2DisableMacieRequest <a name="aws-cdk-sdk.macie2.Macie2DisableMacieRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DisableMacieRequest: macie2.Macie2DisableMacieRequest = { ... }
```

### Macie2DisableMacieResponse <a name="aws-cdk-sdk.macie2.Macie2DisableMacieResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DisableMacieResponse: macie2.Macie2DisableMacieResponse = { ... }
```

### Macie2DisableOrganizationAdminAccountRequest <a name="aws-cdk-sdk.macie2.Macie2DisableOrganizationAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DisableOrganizationAdminAccountRequest: macie2.Macie2DisableOrganizationAdminAccountRequest = { ... }
```

##### `adminAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2DisableOrganizationAdminAccountRequest.property.adminAccountId"></a>

- *Type:* `string`

---

### Macie2DisableOrganizationAdminAccountResponse <a name="aws-cdk-sdk.macie2.Macie2DisableOrganizationAdminAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DisableOrganizationAdminAccountResponse: macie2.Macie2DisableOrganizationAdminAccountResponse = { ... }
```

### Macie2DisassociateFromMasterAccountRequest <a name="aws-cdk-sdk.macie2.Macie2DisassociateFromMasterAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DisassociateFromMasterAccountRequest: macie2.Macie2DisassociateFromMasterAccountRequest = { ... }
```

### Macie2DisassociateFromMasterAccountResponse <a name="aws-cdk-sdk.macie2.Macie2DisassociateFromMasterAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DisassociateFromMasterAccountResponse: macie2.Macie2DisassociateFromMasterAccountResponse = { ... }
```

### Macie2DisassociateMemberRequest <a name="aws-cdk-sdk.macie2.Macie2DisassociateMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DisassociateMemberRequest: macie2.Macie2DisassociateMemberRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2DisassociateMemberRequest.property.id"></a>

- *Type:* `string`

---

### Macie2DisassociateMemberResponse <a name="aws-cdk-sdk.macie2.Macie2DisassociateMemberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DisassociateMemberResponse: macie2.Macie2DisassociateMemberResponse = { ... }
```

### Macie2DomainDetails <a name="aws-cdk-sdk.macie2.Macie2DomainDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2DomainDetails: macie2.Macie2DomainDetails = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2DomainDetails.property.domainName"></a>

- *Type:* `string`

---

### Macie2EnableMacieRequest <a name="aws-cdk-sdk.macie2.Macie2EnableMacieRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2EnableMacieRequest: macie2.Macie2EnableMacieRequest = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2EnableMacieRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2EnableMacieRequest.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2EnableMacieRequest.property.status"></a>

- *Type:* `string`

---

### Macie2EnableMacieResponse <a name="aws-cdk-sdk.macie2.Macie2EnableMacieResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2EnableMacieResponse: macie2.Macie2EnableMacieResponse = { ... }
```

### Macie2EnableOrganizationAdminAccountRequest <a name="aws-cdk-sdk.macie2.Macie2EnableOrganizationAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2EnableOrganizationAdminAccountRequest: macie2.Macie2EnableOrganizationAdminAccountRequest = { ... }
```

##### `adminAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2EnableOrganizationAdminAccountRequest.property.adminAccountId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2EnableOrganizationAdminAccountRequest.property.clientToken"></a>

- *Type:* `string`

---

### Macie2EnableOrganizationAdminAccountResponse <a name="aws-cdk-sdk.macie2.Macie2EnableOrganizationAdminAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2EnableOrganizationAdminAccountResponse: macie2.Macie2EnableOrganizationAdminAccountResponse = { ... }
```

### Macie2FederatedUser <a name="aws-cdk-sdk.macie2.Macie2FederatedUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2FederatedUser: macie2.Macie2FederatedUser = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FederatedUser.property.accessKeyId"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FederatedUser.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FederatedUser.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FederatedUser.property.principalId"></a>

- *Type:* `string`

---

##### `sessionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FederatedUser.property.sessionContext"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2SessionContext`](#aws-cdk-sdk.macie2.Macie2SessionContext)

---

### Macie2Finding <a name="aws-cdk-sdk.macie2.Macie2Finding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Finding: macie2.Macie2Finding = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.accountId"></a>

- *Type:* `string`

---

##### `archived`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.archived"></a>

- *Type:* `boolean`

---

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.category"></a>

- *Type:* `string`

---

##### `classificationDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.classificationDetails"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ClassificationDetails`](#aws-cdk-sdk.macie2.Macie2ClassificationDetails)

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.count"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.id"></a>

- *Type:* `string`

---

##### `partition`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.partition"></a>

- *Type:* `string`

---

##### `policyDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.policyDetails"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2PolicyDetails`](#aws-cdk-sdk.macie2.Macie2PolicyDetails)

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.region"></a>

- *Type:* `string`

---

##### `resourcesAffected`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.resourcesAffected"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResourcesAffected`](#aws-cdk-sdk.macie2.Macie2ResourcesAffected)

---

##### `sample`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.sample"></a>

- *Type:* `boolean`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.schemaVersion"></a>

- *Type:* `string`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.severity"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Severity`](#aws-cdk-sdk.macie2.Macie2Severity)

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.title"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.type"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Finding.property.updatedAt"></a>

- *Type:* `string`

---

### Macie2FindingAction <a name="aws-cdk-sdk.macie2.Macie2FindingAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2FindingAction: macie2.Macie2FindingAction = { ... }
```

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingAction.property.actionType"></a>

- *Type:* `string`

---

##### `apiCallDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingAction.property.apiCallDetails"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ApiCallDetails`](#aws-cdk-sdk.macie2.Macie2ApiCallDetails)

---

### Macie2FindingActor <a name="aws-cdk-sdk.macie2.Macie2FindingActor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2FindingActor: macie2.Macie2FindingActor = { ... }
```

##### `domainDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingActor.property.domainDetails"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DomainDetails`](#aws-cdk-sdk.macie2.Macie2DomainDetails)

---

##### `ipAddressDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingActor.property.ipAddressDetails"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2IpAddressDetails`](#aws-cdk-sdk.macie2.Macie2IpAddressDetails)

---

##### `userIdentity`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingActor.property.userIdentity"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UserIdentity`](#aws-cdk-sdk.macie2.Macie2UserIdentity)

---

### Macie2FindingCriteria <a name="aws-cdk-sdk.macie2.Macie2FindingCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2FindingCriteria: macie2.Macie2FindingCriteria = { ... }
```

##### `criterion`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingCriteria.property.criterion"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties`](#aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties)}

---

### Macie2FindingsFilterListItem <a name="aws-cdk-sdk.macie2.Macie2FindingsFilterListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2FindingsFilterListItem: macie2.Macie2FindingsFilterListItem = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingsFilterListItem.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingsFilterListItem.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingsFilterListItem.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingsFilterListItem.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingsFilterListItem.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### Macie2FindingStatisticsSortCriteria <a name="aws-cdk-sdk.macie2.Macie2FindingStatisticsSortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2FindingStatisticsSortCriteria: macie2.Macie2FindingStatisticsSortCriteria = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingStatisticsSortCriteria.property.attributeName"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2FindingStatisticsSortCriteria.property.orderBy"></a>

- *Type:* `string`

---

### Macie2GetBucketStatisticsRequest <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetBucketStatisticsRequest: macie2.Macie2GetBucketStatisticsRequest = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest.property.accountId"></a>

- *Type:* `string`

---

### Macie2GetBucketStatisticsResponse <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetBucketStatisticsResponse: macie2.Macie2GetBucketStatisticsResponse = { ... }
```

##### `bucketCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.bucketCount"></a>

- *Type:* `number`

---

##### `bucketCountByEffectivePermission`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.bucketCountByEffectivePermission"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketCountByEffectivePermission`](#aws-cdk-sdk.macie2.Macie2BucketCountByEffectivePermission)

---

##### `bucketCountByEncryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.bucketCountByEncryptionType"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketCountByEncryptionType`](#aws-cdk-sdk.macie2.Macie2BucketCountByEncryptionType)

---

##### `bucketCountBySharedAccessType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.bucketCountBySharedAccessType"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketCountBySharedAccessType`](#aws-cdk-sdk.macie2.Macie2BucketCountBySharedAccessType)

---

##### `classifiableObjectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.classifiableObjectCount"></a>

- *Type:* `number`

---

##### `classifiableSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.classifiableSizeInBytes"></a>

- *Type:* `number`

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.lastUpdated"></a>

- *Type:* `string`

---

##### `objectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.objectCount"></a>

- *Type:* `number`

---

##### `sizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `sizeInBytesCompressed`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.sizeInBytesCompressed"></a>

- *Type:* `number`

---

##### `unclassifiableObjectCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.unclassifiableObjectCount"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics`](#aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics)

---

##### `unclassifiableObjectSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetBucketStatisticsResponse.property.unclassifiableObjectSizeInBytes"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics`](#aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics)

---

### Macie2GetClassificationExportConfigurationRequest <a name="aws-cdk-sdk.macie2.Macie2GetClassificationExportConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetClassificationExportConfigurationRequest: macie2.Macie2GetClassificationExportConfigurationRequest = { ... }
```

### Macie2GetClassificationExportConfigurationResponse <a name="aws-cdk-sdk.macie2.Macie2GetClassificationExportConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetClassificationExportConfigurationResponse: macie2.Macie2GetClassificationExportConfigurationResponse = { ... }
```

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetClassificationExportConfigurationResponse.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ClassificationExportConfiguration`](#aws-cdk-sdk.macie2.Macie2ClassificationExportConfiguration)

---

### Macie2GetCustomDataIdentifierRequest <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetCustomDataIdentifierRequest: macie2.Macie2GetCustomDataIdentifierRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierRequest.property.id"></a>

- *Type:* `string`

---

### Macie2GetCustomDataIdentifierResponse <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetCustomDataIdentifierResponse: macie2.Macie2GetCustomDataIdentifierResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `deleted`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.deleted"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.id"></a>

- *Type:* `string`

---

##### `ignoreWords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.ignoreWords"></a>

- *Type:* `string`[]

---

##### `keywords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.keywords"></a>

- *Type:* `string`[]

---

##### `maximumMatchDistance`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.maximumMatchDistance"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.name"></a>

- *Type:* `string`

---

##### `regex`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.regex"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### Macie2GetFindingsFilterRequest <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetFindingsFilterRequest: macie2.Macie2GetFindingsFilterRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterRequest.property.id"></a>

- *Type:* `string`

---

### Macie2GetFindingsFilterResponse <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetFindingsFilterResponse: macie2.Macie2GetFindingsFilterResponse = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterResponse.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterResponse.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterResponse.property.description"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterResponse.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FindingCriteria`](#aws-cdk-sdk.macie2.Macie2FindingCriteria)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterResponse.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterResponse.property.name"></a>

- *Type:* `string`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterResponse.property.position"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsFilterResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### Macie2GetFindingsRequest <a name="aws-cdk-sdk.macie2.Macie2GetFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetFindingsRequest: macie2.Macie2GetFindingsRequest = { ... }
```

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsRequest.property.findingIds"></a>

- *Type:* `string`[]

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2SortCriteria`](#aws-cdk-sdk.macie2.Macie2SortCriteria)

---

### Macie2GetFindingsResponse <a name="aws-cdk-sdk.macie2.Macie2GetFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetFindingsResponse: macie2.Macie2GetFindingsResponse = { ... }
```

##### `findings`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingsResponse.property.findings"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Finding`](#aws-cdk-sdk.macie2.Macie2Finding)[]

---

### Macie2GetFindingStatisticsRequest <a name="aws-cdk-sdk.macie2.Macie2GetFindingStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetFindingStatisticsRequest: macie2.Macie2GetFindingStatisticsRequest = { ... }
```

##### `groupBy`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingStatisticsRequest.property.groupBy"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingStatisticsRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FindingCriteria`](#aws-cdk-sdk.macie2.Macie2FindingCriteria)

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingStatisticsRequest.property.size"></a>

- *Type:* `number`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingStatisticsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FindingStatisticsSortCriteria`](#aws-cdk-sdk.macie2.Macie2FindingStatisticsSortCriteria)

---

### Macie2GetFindingStatisticsResponse <a name="aws-cdk-sdk.macie2.Macie2GetFindingStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetFindingStatisticsResponse: macie2.Macie2GetFindingStatisticsResponse = { ... }
```

##### `countsByGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetFindingStatisticsResponse.property.countsByGroup"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GroupCount`](#aws-cdk-sdk.macie2.Macie2GroupCount)[]

---

### Macie2GetInvitationsCountRequest <a name="aws-cdk-sdk.macie2.Macie2GetInvitationsCountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetInvitationsCountRequest: macie2.Macie2GetInvitationsCountRequest = { ... }
```

### Macie2GetInvitationsCountResponse <a name="aws-cdk-sdk.macie2.Macie2GetInvitationsCountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetInvitationsCountResponse: macie2.Macie2GetInvitationsCountResponse = { ... }
```

##### `invitationsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetInvitationsCountResponse.property.invitationsCount"></a>

- *Type:* `number`

---

### Macie2GetMacieSessionRequest <a name="aws-cdk-sdk.macie2.Macie2GetMacieSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetMacieSessionRequest: macie2.Macie2GetMacieSessionRequest = { ... }
```

### Macie2GetMacieSessionResponse <a name="aws-cdk-sdk.macie2.Macie2GetMacieSessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetMacieSessionResponse: macie2.Macie2GetMacieSessionResponse = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMacieSessionResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMacieSessionResponse.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMacieSessionResponse.property.serviceRole"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMacieSessionResponse.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMacieSessionResponse.property.updatedAt"></a>

- *Type:* `string`

---

### Macie2GetMasterAccountRequest <a name="aws-cdk-sdk.macie2.Macie2GetMasterAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetMasterAccountRequest: macie2.Macie2GetMasterAccountRequest = { ... }
```

### Macie2GetMasterAccountResponse <a name="aws-cdk-sdk.macie2.Macie2GetMasterAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetMasterAccountResponse: macie2.Macie2GetMasterAccountResponse = { ... }
```

##### `master`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMasterAccountResponse.property.master"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Invitation`](#aws-cdk-sdk.macie2.Macie2Invitation)

---

### Macie2GetMemberRequest <a name="aws-cdk-sdk.macie2.Macie2GetMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetMemberRequest: macie2.Macie2GetMemberRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMemberRequest.property.id"></a>

- *Type:* `string`

---

### Macie2GetMemberResponse <a name="aws-cdk-sdk.macie2.Macie2GetMemberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetMemberResponse: macie2.Macie2GetMemberResponse = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMemberResponse.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMemberResponse.property.arn"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMemberResponse.property.email"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMemberResponse.property.invitedAt"></a>

- *Type:* `string`

---

##### `masterAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMemberResponse.property.masterAccountId"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMemberResponse.property.relationshipStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMemberResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetMemberResponse.property.updatedAt"></a>

- *Type:* `string`

---

### Macie2GetUsageStatisticsRequest <a name="aws-cdk-sdk.macie2.Macie2GetUsageStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetUsageStatisticsRequest: macie2.Macie2GetUsageStatisticsRequest = { ... }
```

##### `filterBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetUsageStatisticsRequest.property.filterBy"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UsageStatisticsFilter`](#aws-cdk-sdk.macie2.Macie2UsageStatisticsFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetUsageStatisticsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetUsageStatisticsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetUsageStatisticsRequest.property.sortBy"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UsageStatisticsSortBy`](#aws-cdk-sdk.macie2.Macie2UsageStatisticsSortBy)

---

### Macie2GetUsageStatisticsResponse <a name="aws-cdk-sdk.macie2.Macie2GetUsageStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetUsageStatisticsResponse: macie2.Macie2GetUsageStatisticsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetUsageStatisticsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `records`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetUsageStatisticsResponse.property.records"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UsageRecord`](#aws-cdk-sdk.macie2.Macie2UsageRecord)[]

---

### Macie2GetUsageTotalsRequest <a name="aws-cdk-sdk.macie2.Macie2GetUsageTotalsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetUsageTotalsRequest: macie2.Macie2GetUsageTotalsRequest = { ... }
```

### Macie2GetUsageTotalsResponse <a name="aws-cdk-sdk.macie2.Macie2GetUsageTotalsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GetUsageTotalsResponse: macie2.Macie2GetUsageTotalsResponse = { ... }
```

##### `usageTotals`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GetUsageTotalsResponse.property.usageTotals"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UsageTotal`](#aws-cdk-sdk.macie2.Macie2UsageTotal)[]

---

### Macie2GroupCount <a name="aws-cdk-sdk.macie2.Macie2GroupCount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2GroupCount: macie2.Macie2GroupCount = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GroupCount.property.count"></a>

- *Type:* `number`

---

##### `groupKey`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2GroupCount.property.groupKey"></a>

- *Type:* `string`

---

### Macie2IamUser <a name="aws-cdk-sdk.macie2.Macie2IamUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2IamUser: macie2.Macie2IamUser = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IamUser.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IamUser.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IamUser.property.principalId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IamUser.property.userName"></a>

- *Type:* `string`

---

### Macie2Invitation <a name="aws-cdk-sdk.macie2.Macie2Invitation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Invitation: macie2.Macie2Invitation = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Invitation.property.accountId"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Invitation.property.invitationId"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Invitation.property.invitedAt"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Invitation.property.relationshipStatus"></a>

- *Type:* `string`

---

### Macie2IpAddressDetails <a name="aws-cdk-sdk.macie2.Macie2IpAddressDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2IpAddressDetails: macie2.Macie2IpAddressDetails = { ... }
```

##### `ipAddressV4`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpAddressDetails.property.ipAddressV4"></a>

- *Type:* `string`

---

##### `ipCity`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpAddressDetails.property.ipCity"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2IpCity`](#aws-cdk-sdk.macie2.Macie2IpCity)

---

##### `ipCountry`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpAddressDetails.property.ipCountry"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2IpCountry`](#aws-cdk-sdk.macie2.Macie2IpCountry)

---

##### `ipGeoLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpAddressDetails.property.ipGeoLocation"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2IpGeoLocation`](#aws-cdk-sdk.macie2.Macie2IpGeoLocation)

---

##### `ipOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpAddressDetails.property.ipOwner"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2IpOwner`](#aws-cdk-sdk.macie2.Macie2IpOwner)

---

### Macie2IpCity <a name="aws-cdk-sdk.macie2.Macie2IpCity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2IpCity: macie2.Macie2IpCity = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpCity.property.name"></a>

- *Type:* `string`

---

### Macie2IpCountry <a name="aws-cdk-sdk.macie2.Macie2IpCountry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2IpCountry: macie2.Macie2IpCountry = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpCountry.property.code"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpCountry.property.name"></a>

- *Type:* `string`

---

### Macie2IpGeoLocation <a name="aws-cdk-sdk.macie2.Macie2IpGeoLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2IpGeoLocation: macie2.Macie2IpGeoLocation = { ... }
```

##### `lat`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpGeoLocation.property.lat"></a>

- *Type:* `number`

---

##### `lon`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpGeoLocation.property.lon"></a>

- *Type:* `number`

---

### Macie2IpOwner <a name="aws-cdk-sdk.macie2.Macie2IpOwner"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2IpOwner: macie2.Macie2IpOwner = { ... }
```

##### `asn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpOwner.property.asn"></a>

- *Type:* `string`

---

##### `asnOrg`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpOwner.property.asnOrg"></a>

- *Type:* `string`

---

##### `isp`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpOwner.property.isp"></a>

- *Type:* `string`

---

##### `org`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2IpOwner.property.org"></a>

- *Type:* `string`

---

### Macie2JobDetails <a name="aws-cdk-sdk.macie2.Macie2JobDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2JobDetails: macie2.Macie2JobDetails = { ... }
```

##### `isDefinedInJob`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobDetails.property.isDefinedInJob"></a>

- *Type:* `string`

---

##### `isMonitoredByJob`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobDetails.property.isMonitoredByJob"></a>

- *Type:* `string`

---

##### `lastJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobDetails.property.lastJobId"></a>

- *Type:* `string`

---

##### `lastJobRunTime`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobDetails.property.lastJobRunTime"></a>

- *Type:* `string`

---

### Macie2JobScheduleFrequency <a name="aws-cdk-sdk.macie2.Macie2JobScheduleFrequency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2JobScheduleFrequency: macie2.Macie2JobScheduleFrequency = { ... }
```

##### `dailySchedule`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobScheduleFrequency.property.dailySchedule"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DailySchedule`](#aws-cdk-sdk.macie2.Macie2DailySchedule)

---

##### `monthlySchedule`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobScheduleFrequency.property.monthlySchedule"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2MonthlySchedule`](#aws-cdk-sdk.macie2.Macie2MonthlySchedule)

---

##### `weeklySchedule`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobScheduleFrequency.property.weeklySchedule"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2WeeklySchedule`](#aws-cdk-sdk.macie2.Macie2WeeklySchedule)

---

### Macie2JobScopeTerm <a name="aws-cdk-sdk.macie2.Macie2JobScopeTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2JobScopeTerm: macie2.Macie2JobScopeTerm = { ... }
```

##### `simpleScopeTerm`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobScopeTerm.property.simpleScopeTerm"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2SimpleScopeTerm`](#aws-cdk-sdk.macie2.Macie2SimpleScopeTerm)

---

##### `tagScopeTerm`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobScopeTerm.property.tagScopeTerm"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2TagScopeTerm`](#aws-cdk-sdk.macie2.Macie2TagScopeTerm)

---

### Macie2JobScopingBlock <a name="aws-cdk-sdk.macie2.Macie2JobScopingBlock"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2JobScopingBlock: macie2.Macie2JobScopingBlock = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobScopingBlock.property.and"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2JobScopeTerm`](#aws-cdk-sdk.macie2.Macie2JobScopeTerm)[]

---

### Macie2JobSummary <a name="aws-cdk-sdk.macie2.Macie2JobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2JobSummary: macie2.Macie2JobSummary = { ... }
```

##### `bucketDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobSummary.property.bucketDefinitions"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2S3BucketDefinitionForJob`](#aws-cdk-sdk.macie2.Macie2S3BucketDefinitionForJob)[]

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobSummary.property.jobStatus"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobSummary.property.jobType"></a>

- *Type:* `string`

---

##### `lastRunErrorStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobSummary.property.lastRunErrorStatus"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2LastRunErrorStatus`](#aws-cdk-sdk.macie2.Macie2LastRunErrorStatus)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobSummary.property.name"></a>

- *Type:* `string`

---

##### `userPausedDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2JobSummary.property.userPausedDetails"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UserPausedDetails`](#aws-cdk-sdk.macie2.Macie2UserPausedDetails)

---

### Macie2KeyValuePair <a name="aws-cdk-sdk.macie2.Macie2KeyValuePair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2KeyValuePair: macie2.Macie2KeyValuePair = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2KeyValuePair.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2KeyValuePair.property.value"></a>

- *Type:* `string`

---

### Macie2LastRunErrorStatus <a name="aws-cdk-sdk.macie2.Macie2LastRunErrorStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2LastRunErrorStatus: macie2.Macie2LastRunErrorStatus = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2LastRunErrorStatus.property.code"></a>

- *Type:* `string`

---

### Macie2ListClassificationJobsRequest <a name="aws-cdk-sdk.macie2.Macie2ListClassificationJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListClassificationJobsRequest: macie2.Macie2ListClassificationJobsRequest = { ... }
```

##### `filterCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListClassificationJobsRequest.property.filterCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListJobsFilterCriteria`](#aws-cdk-sdk.macie2.Macie2ListJobsFilterCriteria)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListClassificationJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListClassificationJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListClassificationJobsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListJobsSortCriteria`](#aws-cdk-sdk.macie2.Macie2ListJobsSortCriteria)

---

### Macie2ListClassificationJobsResponse <a name="aws-cdk-sdk.macie2.Macie2ListClassificationJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListClassificationJobsResponse: macie2.Macie2ListClassificationJobsResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListClassificationJobsResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2JobSummary`](#aws-cdk-sdk.macie2.Macie2JobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListClassificationJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListCustomDataIdentifiersRequest <a name="aws-cdk-sdk.macie2.Macie2ListCustomDataIdentifiersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListCustomDataIdentifiersRequest: macie2.Macie2ListCustomDataIdentifiersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListCustomDataIdentifiersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListCustomDataIdentifiersRequest.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListCustomDataIdentifiersResponse <a name="aws-cdk-sdk.macie2.Macie2ListCustomDataIdentifiersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListCustomDataIdentifiersResponse: macie2.Macie2ListCustomDataIdentifiersResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListCustomDataIdentifiersResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CustomDataIdentifierSummary`](#aws-cdk-sdk.macie2.Macie2CustomDataIdentifierSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListCustomDataIdentifiersResponse.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListFindingsFiltersRequest <a name="aws-cdk-sdk.macie2.Macie2ListFindingsFiltersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListFindingsFiltersRequest: macie2.Macie2ListFindingsFiltersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListFindingsFiltersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListFindingsFiltersRequest.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListFindingsFiltersResponse <a name="aws-cdk-sdk.macie2.Macie2ListFindingsFiltersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListFindingsFiltersResponse: macie2.Macie2ListFindingsFiltersResponse = { ... }
```

##### `findingsFilterListItems`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListFindingsFiltersResponse.property.findingsFilterListItems"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FindingsFilterListItem`](#aws-cdk-sdk.macie2.Macie2FindingsFilterListItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListFindingsFiltersResponse.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListFindingsRequest <a name="aws-cdk-sdk.macie2.Macie2ListFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListFindingsRequest: macie2.Macie2ListFindingsRequest = { ... }
```

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListFindingsRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FindingCriteria`](#aws-cdk-sdk.macie2.Macie2FindingCriteria)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListFindingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListFindingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListFindingsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2SortCriteria`](#aws-cdk-sdk.macie2.Macie2SortCriteria)

---

### Macie2ListFindingsResponse <a name="aws-cdk-sdk.macie2.Macie2ListFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListFindingsResponse: macie2.Macie2ListFindingsResponse = { ... }
```

##### `findingIds`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListFindingsResponse.property.findingIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListFindingsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListInvitationsRequest <a name="aws-cdk-sdk.macie2.Macie2ListInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListInvitationsRequest: macie2.Macie2ListInvitationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListInvitationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListInvitationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListInvitationsResponse <a name="aws-cdk-sdk.macie2.Macie2ListInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListInvitationsResponse: macie2.Macie2ListInvitationsResponse = { ... }
```

##### `invitations`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListInvitationsResponse.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Invitation`](#aws-cdk-sdk.macie2.Macie2Invitation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListInvitationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListJobsFilterCriteria <a name="aws-cdk-sdk.macie2.Macie2ListJobsFilterCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListJobsFilterCriteria: macie2.Macie2ListJobsFilterCriteria = { ... }
```

##### `excludes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListJobsFilterCriteria.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListJobsFilterTerm`](#aws-cdk-sdk.macie2.Macie2ListJobsFilterTerm)[]

---

##### `includes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListJobsFilterCriteria.property.includes"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListJobsFilterTerm`](#aws-cdk-sdk.macie2.Macie2ListJobsFilterTerm)[]

---

### Macie2ListJobsFilterTerm <a name="aws-cdk-sdk.macie2.Macie2ListJobsFilterTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListJobsFilterTerm: macie2.Macie2ListJobsFilterTerm = { ... }
```

##### `comparator`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListJobsFilterTerm.property.comparator"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListJobsFilterTerm.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListJobsFilterTerm.property.values"></a>

- *Type:* `string`[]

---

### Macie2ListJobsSortCriteria <a name="aws-cdk-sdk.macie2.Macie2ListJobsSortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListJobsSortCriteria: macie2.Macie2ListJobsSortCriteria = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListJobsSortCriteria.property.attributeName"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListJobsSortCriteria.property.orderBy"></a>

- *Type:* `string`

---

### Macie2ListMembersRequest <a name="aws-cdk-sdk.macie2.Macie2ListMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListMembersRequest: macie2.Macie2ListMembersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListMembersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListMembersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `onlyAssociated`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListMembersRequest.property.onlyAssociated"></a>

- *Type:* `string`

---

### Macie2ListMembersResponse <a name="aws-cdk-sdk.macie2.Macie2ListMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListMembersResponse: macie2.Macie2ListMembersResponse = { ... }
```

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListMembersResponse.property.members"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Member`](#aws-cdk-sdk.macie2.Macie2Member)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListMembersResponse.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListOrganizationAdminAccountsRequest <a name="aws-cdk-sdk.macie2.Macie2ListOrganizationAdminAccountsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListOrganizationAdminAccountsRequest: macie2.Macie2ListOrganizationAdminAccountsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListOrganizationAdminAccountsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListOrganizationAdminAccountsRequest.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListOrganizationAdminAccountsResponse <a name="aws-cdk-sdk.macie2.Macie2ListOrganizationAdminAccountsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListOrganizationAdminAccountsResponse: macie2.Macie2ListOrganizationAdminAccountsResponse = { ... }
```

##### `adminAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListOrganizationAdminAccountsResponse.property.adminAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2AdminAccount`](#aws-cdk-sdk.macie2.Macie2AdminAccount)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListOrganizationAdminAccountsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Macie2ListTagsForResourceRequest <a name="aws-cdk-sdk.macie2.Macie2ListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListTagsForResourceRequest: macie2.Macie2ListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### Macie2ListTagsForResourceResponse <a name="aws-cdk-sdk.macie2.Macie2ListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ListTagsForResourceResponse: macie2.Macie2ListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### Macie2Member <a name="aws-cdk-sdk.macie2.Macie2Member"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Member: macie2.Macie2Member = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Member.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Member.property.arn"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Member.property.email"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Member.property.invitedAt"></a>

- *Type:* `string`

---

##### `masterAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Member.property.masterAccountId"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Member.property.relationshipStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Member.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Member.property.updatedAt"></a>

- *Type:* `string`

---

### Macie2MonthlySchedule <a name="aws-cdk-sdk.macie2.Macie2MonthlySchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2MonthlySchedule: macie2.Macie2MonthlySchedule = { ... }
```

##### `dayOfMonth`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2MonthlySchedule.property.dayOfMonth"></a>

- *Type:* `number`

---

### Macie2ObjectCountByEncryptionType <a name="aws-cdk-sdk.macie2.Macie2ObjectCountByEncryptionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ObjectCountByEncryptionType: macie2.Macie2ObjectCountByEncryptionType = { ... }
```

##### `customerManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ObjectCountByEncryptionType.property.customerManaged"></a>

- *Type:* `number`

---

##### `kmsManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ObjectCountByEncryptionType.property.kmsManaged"></a>

- *Type:* `number`

---

##### `s3Managed`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ObjectCountByEncryptionType.property.s3Managed"></a>

- *Type:* `number`

---

##### `unencrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ObjectCountByEncryptionType.property.unencrypted"></a>

- *Type:* `number`

---

### Macie2ObjectLevelStatistics <a name="aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ObjectLevelStatistics: macie2.Macie2ObjectLevelStatistics = { ... }
```

##### `fileType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics.property.fileType"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics.property.storageClass"></a>

- *Type:* `number`

---

##### `total`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ObjectLevelStatistics.property.total"></a>

- *Type:* `number`

---

### Macie2Occurrences <a name="aws-cdk-sdk.macie2.Macie2Occurrences"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Occurrences: macie2.Macie2Occurrences = { ... }
```

##### `cells`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Occurrences.property.cells"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Cell`](#aws-cdk-sdk.macie2.Macie2Cell)[]

---

##### `lineRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Occurrences.property.lineRanges"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Range`](#aws-cdk-sdk.macie2.Macie2Range)[]

---

##### `offsetRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Occurrences.property.offsetRanges"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Range`](#aws-cdk-sdk.macie2.Macie2Range)[]

---

##### `pages`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Occurrences.property.pages"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Page`](#aws-cdk-sdk.macie2.Macie2Page)[]

---

##### `records`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Occurrences.property.records"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Record`](#aws-cdk-sdk.macie2.Macie2Record)[]

---

### Macie2Page <a name="aws-cdk-sdk.macie2.Macie2Page"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Page: macie2.Macie2Page = { ... }
```

##### `lineRange`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Page.property.lineRange"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Range`](#aws-cdk-sdk.macie2.Macie2Range)

---

##### `offsetRange`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Page.property.offsetRange"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Range`](#aws-cdk-sdk.macie2.Macie2Range)

---

##### `pageNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Page.property.pageNumber"></a>

- *Type:* `number`

---

### Macie2PolicyDetails <a name="aws-cdk-sdk.macie2.Macie2PolicyDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2PolicyDetails: macie2.Macie2PolicyDetails = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2PolicyDetails.property.action"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FindingAction`](#aws-cdk-sdk.macie2.Macie2FindingAction)

---

##### `actor`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2PolicyDetails.property.actor"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FindingActor`](#aws-cdk-sdk.macie2.Macie2FindingActor)

---

### Macie2PutClassificationExportConfigurationRequest <a name="aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2PutClassificationExportConfigurationRequest: macie2.Macie2PutClassificationExportConfigurationRequest = { ... }
```

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationRequest.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ClassificationExportConfiguration`](#aws-cdk-sdk.macie2.Macie2ClassificationExportConfiguration)

---

### Macie2PutClassificationExportConfigurationResponse <a name="aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2PutClassificationExportConfigurationResponse: macie2.Macie2PutClassificationExportConfigurationResponse = { ... }
```

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationResponse.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ClassificationExportConfiguration`](#aws-cdk-sdk.macie2.Macie2ClassificationExportConfiguration)

---

### Macie2Range <a name="aws-cdk-sdk.macie2.Macie2Range"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Range: macie2.Macie2Range = { ... }
```

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Range.property.end"></a>

- *Type:* `number`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Range.property.start"></a>

- *Type:* `number`

---

##### `startColumn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Range.property.startColumn"></a>

- *Type:* `number`

---

### Macie2Record <a name="aws-cdk-sdk.macie2.Macie2Record"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Record: macie2.Macie2Record = { ... }
```

##### `jsonPath`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Record.property.jsonPath"></a>

- *Type:* `string`

---

##### `recordIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Record.property.recordIndex"></a>

- *Type:* `number`

---

### Macie2ReplicationDetails <a name="aws-cdk-sdk.macie2.Macie2ReplicationDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ReplicationDetails: macie2.Macie2ReplicationDetails = { ... }
```

##### `replicated`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ReplicationDetails.property.replicated"></a>

- *Type:* `boolean`

---

##### `replicatedExternally`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ReplicationDetails.property.replicatedExternally"></a>

- *Type:* `boolean`

---

##### `replicationAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ReplicationDetails.property.replicationAccounts"></a>

- *Type:* `string`[]

---

### Macie2ResourcesAffected <a name="aws-cdk-sdk.macie2.Macie2ResourcesAffected"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ResourcesAffected: macie2.Macie2ResourcesAffected = { ... }
```

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ResourcesAffected.property.s3Bucket"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2S3Bucket`](#aws-cdk-sdk.macie2.Macie2S3Bucket)

---

##### `s3Object`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ResourcesAffected.property.s3Object"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2S3Object`](#aws-cdk-sdk.macie2.Macie2S3Object)

---

### Macie2S3Bucket <a name="aws-cdk-sdk.macie2.Macie2S3Bucket"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2S3Bucket: macie2.Macie2S3Bucket = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Bucket.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Bucket.property.createdAt"></a>

- *Type:* `string`

---

##### `defaultServerSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Bucket.property.defaultServerSideEncryption"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ServerSideEncryption`](#aws-cdk-sdk.macie2.Macie2ServerSideEncryption)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Bucket.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Bucket.property.owner"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2S3BucketOwner`](#aws-cdk-sdk.macie2.Macie2S3BucketOwner)

---

##### `publicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Bucket.property.publicAccess"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketPublicAccess`](#aws-cdk-sdk.macie2.Macie2BucketPublicAccess)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Bucket.property.tags"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2KeyValuePair`](#aws-cdk-sdk.macie2.Macie2KeyValuePair)[]

---

### Macie2S3BucketDefinitionForJob <a name="aws-cdk-sdk.macie2.Macie2S3BucketDefinitionForJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2S3BucketDefinitionForJob: macie2.Macie2S3BucketDefinitionForJob = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3BucketDefinitionForJob.property.accountId"></a>

- *Type:* `string`

---

##### `buckets`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3BucketDefinitionForJob.property.buckets"></a>

- *Type:* `string`[]

---

### Macie2S3BucketOwner <a name="aws-cdk-sdk.macie2.Macie2S3BucketOwner"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2S3BucketOwner: macie2.Macie2S3BucketOwner = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3BucketOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3BucketOwner.property.id"></a>

- *Type:* `string`

---

### Macie2S3Destination <a name="aws-cdk-sdk.macie2.Macie2S3Destination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2S3Destination: macie2.Macie2S3Destination = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Destination.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Destination.property.keyPrefix"></a>

- *Type:* `string`

---

### Macie2S3JobDefinition <a name="aws-cdk-sdk.macie2.Macie2S3JobDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2S3JobDefinition: macie2.Macie2S3JobDefinition = { ... }
```

##### `bucketDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3JobDefinition.property.bucketDefinitions"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2S3BucketDefinitionForJob`](#aws-cdk-sdk.macie2.Macie2S3BucketDefinitionForJob)[]

---

##### `scoping`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3JobDefinition.property.scoping"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Scoping`](#aws-cdk-sdk.macie2.Macie2Scoping)

---

### Macie2S3Object <a name="aws-cdk-sdk.macie2.Macie2S3Object"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2S3Object: macie2.Macie2S3Object = { ... }
```

##### `bucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.bucketArn"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.eTag"></a>

- *Type:* `string`

---

##### `extension`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.extension"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.key"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.lastModified"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.path"></a>

- *Type:* `string`

---

##### `publicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.publicAccess"></a>

- *Type:* `boolean`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.serverSideEncryption"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ServerSideEncryption`](#aws-cdk-sdk.macie2.Macie2ServerSideEncryption)

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.size"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.storageClass"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.tags"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2KeyValuePair`](#aws-cdk-sdk.macie2.Macie2KeyValuePair)[]

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2S3Object.property.versionId"></a>

- *Type:* `string`

---

### Macie2Scoping <a name="aws-cdk-sdk.macie2.Macie2Scoping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Scoping: macie2.Macie2Scoping = { ... }
```

##### `excludes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Scoping.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2JobScopingBlock`](#aws-cdk-sdk.macie2.Macie2JobScopingBlock)

---

##### `includes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Scoping.property.includes"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2JobScopingBlock`](#aws-cdk-sdk.macie2.Macie2JobScopingBlock)

---

### Macie2SensitiveDataItem <a name="aws-cdk-sdk.macie2.Macie2SensitiveDataItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2SensitiveDataItem: macie2.Macie2SensitiveDataItem = { ... }
```

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SensitiveDataItem.property.category"></a>

- *Type:* `string`

---

##### `detections`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SensitiveDataItem.property.detections"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DefaultDetection`](#aws-cdk-sdk.macie2.Macie2DefaultDetection)[]

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SensitiveDataItem.property.totalCount"></a>

- *Type:* `number`

---

### Macie2ServerSideEncryption <a name="aws-cdk-sdk.macie2.Macie2ServerSideEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ServerSideEncryption: macie2.Macie2ServerSideEncryption = { ... }
```

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ServerSideEncryption.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ServerSideEncryption.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

### Macie2ServiceLimit <a name="aws-cdk-sdk.macie2.Macie2ServiceLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2ServiceLimit: macie2.Macie2ServiceLimit = { ... }
```

##### `isServiceLimited`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ServiceLimit.property.isServiceLimited"></a>

- *Type:* `boolean`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ServiceLimit.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2ServiceLimit.property.value"></a>

- *Type:* `number`

---

### Macie2SessionContext <a name="aws-cdk-sdk.macie2.Macie2SessionContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2SessionContext: macie2.Macie2SessionContext = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SessionContext.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2SessionContextAttributes`](#aws-cdk-sdk.macie2.Macie2SessionContextAttributes)

---

##### `sessionIssuer`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SessionContext.property.sessionIssuer"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2SessionIssuer`](#aws-cdk-sdk.macie2.Macie2SessionIssuer)

---

### Macie2SessionContextAttributes <a name="aws-cdk-sdk.macie2.Macie2SessionContextAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2SessionContextAttributes: macie2.Macie2SessionContextAttributes = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SessionContextAttributes.property.creationDate"></a>

- *Type:* `string`

---

##### `mfaAuthenticated`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SessionContextAttributes.property.mfaAuthenticated"></a>

- *Type:* `boolean`

---

### Macie2SessionIssuer <a name="aws-cdk-sdk.macie2.Macie2SessionIssuer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2SessionIssuer: macie2.Macie2SessionIssuer = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SessionIssuer.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SessionIssuer.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SessionIssuer.property.principalId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SessionIssuer.property.type"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SessionIssuer.property.userName"></a>

- *Type:* `string`

---

### Macie2Severity <a name="aws-cdk-sdk.macie2.Macie2Severity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Severity: macie2.Macie2Severity = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Severity.property.description"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Severity.property.score"></a>

- *Type:* `number`

---

### Macie2SimpleScopeTerm <a name="aws-cdk-sdk.macie2.Macie2SimpleScopeTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2SimpleScopeTerm: macie2.Macie2SimpleScopeTerm = { ... }
```

##### `comparator`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SimpleScopeTerm.property.comparator"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SimpleScopeTerm.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SimpleScopeTerm.property.values"></a>

- *Type:* `string`[]

---

### Macie2SortCriteria <a name="aws-cdk-sdk.macie2.Macie2SortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2SortCriteria: macie2.Macie2SortCriteria = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SortCriteria.property.attributeName"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2SortCriteria.property.orderBy"></a>

- *Type:* `string`

---

### Macie2Statistics <a name="aws-cdk-sdk.macie2.Macie2Statistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2Statistics: macie2.Macie2Statistics = { ... }
```

##### `approximateNumberOfObjectsToProcess`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Statistics.property.approximateNumberOfObjectsToProcess"></a>

- *Type:* `number`

---

##### `numberOfRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2Statistics.property.numberOfRuns"></a>

- *Type:* `number`

---

### Macie2TagResourceRequest <a name="aws-cdk-sdk.macie2.Macie2TagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2TagResourceRequest: macie2.Macie2TagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2TagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2TagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### Macie2TagResourceResponse <a name="aws-cdk-sdk.macie2.Macie2TagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2TagResourceResponse: macie2.Macie2TagResourceResponse = { ... }
```

### Macie2TagScopeTerm <a name="aws-cdk-sdk.macie2.Macie2TagScopeTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2TagScopeTerm: macie2.Macie2TagScopeTerm = { ... }
```

##### `comparator`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2TagScopeTerm.property.comparator"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2TagScopeTerm.property.key"></a>

- *Type:* `string`

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2TagScopeTerm.property.tagValues"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2TagValuePair`](#aws-cdk-sdk.macie2.Macie2TagValuePair)[]

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2TagScopeTerm.property.target"></a>

- *Type:* `string`

---

### Macie2TagValuePair <a name="aws-cdk-sdk.macie2.Macie2TagValuePair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2TagValuePair: macie2.Macie2TagValuePair = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2TagValuePair.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2TagValuePair.property.value"></a>

- *Type:* `string`

---

### Macie2TestCustomDataIdentifierRequest <a name="aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2TestCustomDataIdentifierRequest: macie2.Macie2TestCustomDataIdentifierRequest = { ... }
```

##### `regex`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierRequest.property.regex"></a>

- *Type:* `string`

---

##### `sampleText`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierRequest.property.sampleText"></a>

- *Type:* `string`

---

##### `ignoreWords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierRequest.property.ignoreWords"></a>

- *Type:* `string`[]

---

##### `keywords`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierRequest.property.keywords"></a>

- *Type:* `string`[]

---

##### `maximumMatchDistance`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierRequest.property.maximumMatchDistance"></a>

- *Type:* `number`

---

### Macie2TestCustomDataIdentifierResponse <a name="aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2TestCustomDataIdentifierResponse: macie2.Macie2TestCustomDataIdentifierResponse = { ... }
```

##### `matchCount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierResponse.property.matchCount"></a>

- *Type:* `number`

---

### Macie2UnprocessedAccount <a name="aws-cdk-sdk.macie2.Macie2UnprocessedAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UnprocessedAccount: macie2.Macie2UnprocessedAccount = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UnprocessedAccount.property.accountId"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UnprocessedAccount.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UnprocessedAccount.property.errorMessage"></a>

- *Type:* `string`

---

### Macie2UntagResourceRequest <a name="aws-cdk-sdk.macie2.Macie2UntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UntagResourceRequest: macie2.Macie2UntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2UntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2UntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### Macie2UntagResourceResponse <a name="aws-cdk-sdk.macie2.Macie2UntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UntagResourceResponse: macie2.Macie2UntagResourceResponse = { ... }
```

### Macie2UpdateClassificationJobRequest <a name="aws-cdk-sdk.macie2.Macie2UpdateClassificationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UpdateClassificationJobRequest: macie2.Macie2UpdateClassificationJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateClassificationJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateClassificationJobRequest.property.jobStatus"></a>

- *Type:* `string`

---

### Macie2UpdateClassificationJobResponse <a name="aws-cdk-sdk.macie2.Macie2UpdateClassificationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UpdateClassificationJobResponse: macie2.Macie2UpdateClassificationJobResponse = { ... }
```

### Macie2UpdateFindingsFilterRequest <a name="aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UpdateFindingsFilterRequest: macie2.Macie2UpdateFindingsFilterRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest.property.id"></a>

- *Type:* `string`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest.property.action"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest.property.description"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FindingCriteria`](#aws-cdk-sdk.macie2.Macie2FindingCriteria)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest.property.name"></a>

- *Type:* `string`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest.property.position"></a>

- *Type:* `number`

---

### Macie2UpdateFindingsFilterResponse <a name="aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UpdateFindingsFilterResponse: macie2.Macie2UpdateFindingsFilterResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterResponse.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterResponse.property.id"></a>

- *Type:* `string`

---

### Macie2UpdateMacieSessionRequest <a name="aws-cdk-sdk.macie2.Macie2UpdateMacieSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UpdateMacieSessionRequest: macie2.Macie2UpdateMacieSessionRequest = { ... }
```

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateMacieSessionRequest.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateMacieSessionRequest.property.status"></a>

- *Type:* `string`

---

### Macie2UpdateMacieSessionResponse <a name="aws-cdk-sdk.macie2.Macie2UpdateMacieSessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UpdateMacieSessionResponse: macie2.Macie2UpdateMacieSessionResponse = { ... }
```

### Macie2UpdateMemberSessionRequest <a name="aws-cdk-sdk.macie2.Macie2UpdateMemberSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UpdateMemberSessionRequest: macie2.Macie2UpdateMemberSessionRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateMemberSessionRequest.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateMemberSessionRequest.property.status"></a>

- *Type:* `string`

---

### Macie2UpdateMemberSessionResponse <a name="aws-cdk-sdk.macie2.Macie2UpdateMemberSessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UpdateMemberSessionResponse: macie2.Macie2UpdateMemberSessionResponse = { ... }
```

### Macie2UpdateOrganizationConfigurationRequest <a name="aws-cdk-sdk.macie2.Macie2UpdateOrganizationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UpdateOrganizationConfigurationRequest: macie2.Macie2UpdateOrganizationConfigurationRequest = { ... }
```

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2UpdateOrganizationConfigurationRequest.property.autoEnable"></a>

- *Type:* `boolean`

---

### Macie2UpdateOrganizationConfigurationResponse <a name="aws-cdk-sdk.macie2.Macie2UpdateOrganizationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UpdateOrganizationConfigurationResponse: macie2.Macie2UpdateOrganizationConfigurationResponse = { ... }
```

### Macie2UsageByAccount <a name="aws-cdk-sdk.macie2.Macie2UsageByAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UsageByAccount: macie2.Macie2UsageByAccount = { ... }
```

##### `currency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageByAccount.property.currency"></a>

- *Type:* `string`

---

##### `estimatedCost`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageByAccount.property.estimatedCost"></a>

- *Type:* `string`

---

##### `serviceLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageByAccount.property.serviceLimit"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ServiceLimit`](#aws-cdk-sdk.macie2.Macie2ServiceLimit)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageByAccount.property.type"></a>

- *Type:* `string`

---

### Macie2UsageRecord <a name="aws-cdk-sdk.macie2.Macie2UsageRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UsageRecord: macie2.Macie2UsageRecord = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageRecord.property.accountId"></a>

- *Type:* `string`

---

##### `freeTrialStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageRecord.property.freeTrialStartDate"></a>

- *Type:* `string`

---

##### `usage`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageRecord.property.usage"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UsageByAccount`](#aws-cdk-sdk.macie2.Macie2UsageByAccount)[]

---

### Macie2UsageStatisticsFilter <a name="aws-cdk-sdk.macie2.Macie2UsageStatisticsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UsageStatisticsFilter: macie2.Macie2UsageStatisticsFilter = { ... }
```

##### `comparator`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageStatisticsFilter.property.comparator"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageStatisticsFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageStatisticsFilter.property.values"></a>

- *Type:* `string`[]

---

### Macie2UsageStatisticsSortBy <a name="aws-cdk-sdk.macie2.Macie2UsageStatisticsSortBy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UsageStatisticsSortBy: macie2.Macie2UsageStatisticsSortBy = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageStatisticsSortBy.property.key"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageStatisticsSortBy.property.orderBy"></a>

- *Type:* `string`

---

### Macie2UsageTotal <a name="aws-cdk-sdk.macie2.Macie2UsageTotal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UsageTotal: macie2.Macie2UsageTotal = { ... }
```

##### `currency`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageTotal.property.currency"></a>

- *Type:* `string`

---

##### `estimatedCost`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageTotal.property.estimatedCost"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UsageTotal.property.type"></a>

- *Type:* `string`

---

### Macie2UserIdentity <a name="aws-cdk-sdk.macie2.Macie2UserIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UserIdentity: macie2.Macie2UserIdentity = { ... }
```

##### `assumedRole`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserIdentity.property.assumedRole"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2AssumedRole`](#aws-cdk-sdk.macie2.Macie2AssumedRole)

---

##### `awsAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserIdentity.property.awsAccount"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2AwsAccount`](#aws-cdk-sdk.macie2.Macie2AwsAccount)

---

##### `awsService`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserIdentity.property.awsService"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2AwsService`](#aws-cdk-sdk.macie2.Macie2AwsService)

---

##### `federatedUser`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserIdentity.property.federatedUser"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FederatedUser`](#aws-cdk-sdk.macie2.Macie2FederatedUser)

---

##### `iamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserIdentity.property.iamUser"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2IamUser`](#aws-cdk-sdk.macie2.Macie2IamUser)

---

##### `root`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserIdentity.property.root"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UserIdentityRoot`](#aws-cdk-sdk.macie2.Macie2UserIdentityRoot)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserIdentity.property.type"></a>

- *Type:* `string`

---

### Macie2UserIdentityRoot <a name="aws-cdk-sdk.macie2.Macie2UserIdentityRoot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UserIdentityRoot: macie2.Macie2UserIdentityRoot = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserIdentityRoot.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserIdentityRoot.property.arn"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserIdentityRoot.property.principalId"></a>

- *Type:* `string`

---

### Macie2UserPausedDetails <a name="aws-cdk-sdk.macie2.Macie2UserPausedDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2UserPausedDetails: macie2.Macie2UserPausedDetails = { ... }
```

##### `jobExpiresAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserPausedDetails.property.jobExpiresAt"></a>

- *Type:* `string`

---

##### `jobImminentExpirationHealthEventArn`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserPausedDetails.property.jobImminentExpirationHealthEventArn"></a>

- *Type:* `string`

---

##### `jobPausedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2UserPausedDetails.property.jobPausedAt"></a>

- *Type:* `string`

---

### Macie2WeeklySchedule <a name="aws-cdk-sdk.macie2.Macie2WeeklySchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

const macie2WeeklySchedule: macie2.Macie2WeeklySchedule = { ... }
```

##### `dayOfWeek`<sup>Optional</sup> <a name="aws-cdk-sdk.macie2.Macie2WeeklySchedule.property.dayOfWeek"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### Macie2ResponsesBatchGetCustomDataIdentifiers <a name="aws-cdk-sdk.macie2.Macie2ResponsesBatchGetCustomDataIdentifiers"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesBatchGetCustomDataIdentifiers.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesBatchGetCustomDataIdentifiers(__scope: Construct, __resources: string[], __input: Macie2BatchGetCustomDataIdentifiersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesBatchGetCustomDataIdentifiers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesBatchGetCustomDataIdentifiers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesBatchGetCustomDataIdentifiers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifiersRequest`](#aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifiersRequest)

---



#### Properties <a name="Properties"></a>

##### `customDataIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesBatchGetCustomDataIdentifiers.property.customDataIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary`](#aws-cdk-sdk.macie2.Macie2BatchGetCustomDataIdentifierSummary)[]

---

##### `notFoundIdentifierIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesBatchGetCustomDataIdentifiers.property.notFoundIdentifierIds"></a>

- *Type:* `string`[]

---


### Macie2ResponsesCreateClassificationJob <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateClassificationJob"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateClassificationJob.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesCreateClassificationJob(__scope: Construct, __resources: string[], __input: Macie2CreateClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateClassificationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateClassificationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateClassificationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2CreateClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateClassificationJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateClassificationJob.property.jobId"></a>

- *Type:* `string`

---


### Macie2ResponsesCreateCustomDataIdentifier <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateCustomDataIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateCustomDataIdentifier.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesCreateCustomDataIdentifier(__scope: Construct, __resources: string[], __input: Macie2CreateCustomDataIdentifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateCustomDataIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateCustomDataIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateCustomDataIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest`](#aws-cdk-sdk.macie2.Macie2CreateCustomDataIdentifierRequest)

---



#### Properties <a name="Properties"></a>

##### `customDataIdentifierId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateCustomDataIdentifier.property.customDataIdentifierId"></a>

- *Type:* `string`

---


### Macie2ResponsesCreateFindingsFilter <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateFindingsFilter"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateFindingsFilter.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesCreateFindingsFilter(__scope: Construct, __resources: string[], __input: Macie2CreateFindingsFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateFindingsFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateFindingsFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateFindingsFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest`](#aws-cdk-sdk.macie2.Macie2CreateFindingsFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateFindingsFilter.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateFindingsFilter.property.id"></a>

- *Type:* `string`

---


### Macie2ResponsesCreateInvitations <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateInvitations.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesCreateInvitations(__scope: Construct, __resources: string[], __input: Macie2CreateInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateInvitationsRequest`](#aws-cdk-sdk.macie2.Macie2CreateInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateInvitations.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UnprocessedAccount`](#aws-cdk-sdk.macie2.Macie2UnprocessedAccount)[]

---


### Macie2ResponsesCreateMember <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateMember"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateMember.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesCreateMember(__scope: Construct, __resources: string[], __input: Macie2CreateMemberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CreateMemberRequest`](#aws-cdk-sdk.macie2.Macie2CreateMemberRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesCreateMember.property.arn"></a>

- *Type:* `string`

---


### Macie2ResponsesDeclineInvitations <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeclineInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeclineInvitations.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDeclineInvitations(__scope: Construct, __resources: string[], __input: Macie2DeclineInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeclineInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeclineInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeclineInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DeclineInvitationsRequest`](#aws-cdk-sdk.macie2.Macie2DeclineInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeclineInvitations.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UnprocessedAccount`](#aws-cdk-sdk.macie2.Macie2UnprocessedAccount)[]

---


### Macie2ResponsesDeleteInvitations <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeleteInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeleteInvitations.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDeleteInvitations(__scope: Construct, __resources: string[], __input: Macie2DeleteInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeleteInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeleteInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeleteInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DeleteInvitationsRequest`](#aws-cdk-sdk.macie2.Macie2DeleteInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDeleteInvitations.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UnprocessedAccount`](#aws-cdk-sdk.macie2.Macie2UnprocessedAccount)[]

---


### Macie2ResponsesDescribeBuckets <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeBuckets"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeBuckets.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeBuckets(__scope: Construct, __resources: string[], __input: Macie2DescribeBucketsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeBuckets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeBuckets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeBuckets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeBucketsRequest`](#aws-cdk-sdk.macie2.Macie2DescribeBucketsRequest)

---



#### Properties <a name="Properties"></a>

##### `buckets`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeBuckets.property.buckets"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2BucketMetadata`](#aws-cdk-sdk.macie2.Macie2BucketMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeBuckets.property.nextToken"></a>

- *Type:* `string`

---


### Macie2ResponsesDescribeClassificationJob <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJob(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.clientToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.createdAt"></a>

- *Type:* `string`

---

##### `customDataIdentifierIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.customDataIdentifierIds"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.description"></a>

- *Type:* `string`

---

##### `initialRun`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.initialRun"></a>

- *Type:* `boolean`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.jobStatus"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.jobType"></a>

- *Type:* `string`

---

##### `lastRunErrorStatus`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.lastRunErrorStatus"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobLastRunErrorStatus`](#aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobLastRunErrorStatus)

---

##### `lastRunTime`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.lastRunTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.name"></a>

- *Type:* `string`

---

##### `s3JobDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.s3JobDefinition"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinition`](#aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinition)

---

##### `samplingPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.samplingPercentage"></a>

- *Type:* `number`

---

##### `scheduleFrequency`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.scheduleFrequency"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency`](#aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency)

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobStatistics`](#aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobStatistics)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userPausedDetails`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJob.property.userPausedDetails"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails`](#aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails)

---


### Macie2ResponsesDescribeClassificationJobLastRunErrorStatus <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobLastRunErrorStatus"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobLastRunErrorStatus.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJobLastRunErrorStatus(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobLastRunErrorStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobLastRunErrorStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobLastRunErrorStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobLastRunErrorStatus.property.code"></a>

- *Type:* `string`

---


### Macie2ResponsesDescribeClassificationJobS3JobDefinition <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinition.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinition(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinition.property.bucketDefinitions"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2S3BucketDefinitionForJob`](#aws-cdk-sdk.macie2.Macie2S3BucketDefinitionForJob)[]

---

##### `scoping`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinition.property.scoping"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping`](#aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping)

---


### Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `excludes`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes`](#aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes)

---

##### `includes`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping.property.includes"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes`](#aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes)

---


### Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `and`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes.property.and"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2JobScopeTerm`](#aws-cdk-sdk.macie2.Macie2JobScopeTerm)[]

---


### Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `and`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes.property.and"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2JobScopeTerm`](#aws-cdk-sdk.macie2.Macie2JobScopeTerm)[]

---


### Macie2ResponsesDescribeClassificationJobScheduleFrequency <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dailySchedule`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency.property.dailySchedule"></a>

- *Type:* `any`

---

##### `monthlySchedule`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency.property.monthlySchedule"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule`](#aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule)

---

##### `weeklySchedule`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequency.property.weeklySchedule"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule`](#aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule)

---


### Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dayOfMonth`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule.property.dayOfMonth"></a>

- *Type:* `number`

---


### Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dayOfWeek`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule.property.dayOfWeek"></a>

- *Type:* `string`

---


### Macie2ResponsesDescribeClassificationJobStatistics <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobStatistics.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJobStatistics(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `approximateNumberOfObjectsToProcess`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobStatistics.property.approximateNumberOfObjectsToProcess"></a>

- *Type:* `number`

---

##### `numberOfRuns`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobStatistics.property.numberOfRuns"></a>

- *Type:* `number`

---


### Macie2ResponsesDescribeClassificationJobUserPausedDetails <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails(__scope: Construct, __resources: string[], __input: Macie2DescribeClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest`](#aws-cdk-sdk.macie2.Macie2DescribeClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobExpiresAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails.property.jobExpiresAt"></a>

- *Type:* `string`

---

##### `jobImminentExpirationHealthEventArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails.property.jobImminentExpirationHealthEventArn"></a>

- *Type:* `string`

---

##### `jobPausedAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeClassificationJobUserPausedDetails.property.jobPausedAt"></a>

- *Type:* `string`

---


### Macie2ResponsesDescribeOrganizationConfiguration <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeOrganizationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeOrganizationConfiguration.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesDescribeOrganizationConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeOrganizationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeOrganizationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeOrganizationConfiguration.property.autoEnable"></a>

- *Type:* `boolean`

---

##### `maxAccountLimitReached`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesDescribeOrganizationConfiguration.property.maxAccountLimitReached"></a>

- *Type:* `boolean`

---


### Macie2ResponsesFetchBucketStatistics <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchBucketStatistics(__scope: Construct, __resources: string[], __input: Macie2GetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.bucketCount"></a>

- *Type:* `number`

---

##### `bucketCountByEffectivePermission`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.bucketCountByEffectivePermission"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission`](#aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission)

---

##### `bucketCountByEncryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.bucketCountByEncryptionType"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType`](#aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType)

---

##### `bucketCountBySharedAccessType`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.bucketCountBySharedAccessType"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType`](#aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType)

---

##### `classifiableObjectCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.classifiableObjectCount"></a>

- *Type:* `number`

---

##### `classifiableSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.classifiableSizeInBytes"></a>

- *Type:* `number`

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.lastUpdated"></a>

- *Type:* `string`

---

##### `objectCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.objectCount"></a>

- *Type:* `number`

---

##### `sizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `sizeInBytesCompressed`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.sizeInBytesCompressed"></a>

- *Type:* `number`

---

##### `unclassifiableObjectCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.unclassifiableObjectCount"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount`](#aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount)

---

##### `unclassifiableObjectSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatistics.property.unclassifiableObjectSizeInBytes"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes`](#aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes)

---


### Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission(__scope: Construct, __resources: string[], __input: Macie2GetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission.property.publiclyAccessible"></a>

- *Type:* `number`

---

##### `publiclyReadable`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission.property.publiclyReadable"></a>

- *Type:* `number`

---

##### `publiclyWritable`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission.property.publiclyWritable"></a>

- *Type:* `number`

---

##### `unknown`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission.property.unknown"></a>

- *Type:* `number`

---


### Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType(__scope: Construct, __resources: string[], __input: Macie2GetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsManaged`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType.property.kmsManaged"></a>

- *Type:* `number`

---

##### `s3Managed`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType.property.s3Managed"></a>

- *Type:* `number`

---

##### `unencrypted`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType.property.unencrypted"></a>

- *Type:* `number`

---


### Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType(__scope: Construct, __resources: string[], __input: Macie2GetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `external`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType.property.external"></a>

- *Type:* `number`

---

##### `internal`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType.property.internal"></a>

- *Type:* `number`

---

##### `notShared`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType.property.notShared"></a>

- *Type:* `number`

---

##### `unknown`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType.property.unknown"></a>

- *Type:* `number`

---


### Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount(__scope: Construct, __resources: string[], __input: Macie2GetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `fileType`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount.property.fileType"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount.property.storageClass"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount.property.total"></a>

- *Type:* `number`

---


### Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes(__scope: Construct, __resources: string[], __input: Macie2GetBucketStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetBucketStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `fileType`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.property.fileType"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.property.storageClass"></a>

- *Type:* `number`

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes.property.total"></a>

- *Type:* `number`

---


### Macie2ResponsesFetchClassificationExportConfiguration <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfiguration.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchClassificationExportConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfiguration.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfiguration`](#aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfiguration)

---


### Macie2ResponsesFetchClassificationExportConfigurationConfiguration <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfiguration.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchClassificationExportConfigurationConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfiguration.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination`](#aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination)

---


### Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination.property.keyPrefix"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination.property.kmsKeyArn"></a>

- *Type:* `string`

---


### Macie2ResponsesFetchCustomDataIdentifier <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchCustomDataIdentifier(__scope: Construct, __resources: string[], __input: Macie2GetCustomDataIdentifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierRequest`](#aws-cdk-sdk.macie2.Macie2GetCustomDataIdentifierRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.createdAt"></a>

- *Type:* `string`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.deleted"></a>

- *Type:* `boolean`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.id"></a>

- *Type:* `string`

---

##### `ignoreWords`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.ignoreWords"></a>

- *Type:* `string`[]

---

##### `keywords`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.keywords"></a>

- *Type:* `string`[]

---

##### `maximumMatchDistance`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.maximumMatchDistance"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.name"></a>

- *Type:* `string`

---

##### `regex`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.regex"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchCustomDataIdentifier.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### Macie2ResponsesFetchFindings <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindings"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindings.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchFindings(__scope: Construct, __resources: string[], __input: Macie2GetFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetFindingsRequest`](#aws-cdk-sdk.macie2.Macie2GetFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindings.property.findings"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Finding`](#aws-cdk-sdk.macie2.Macie2Finding)[]

---


### Macie2ResponsesFetchFindingsFilter <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchFindingsFilter(__scope: Construct, __resources: string[], __input: Macie2GetFindingsFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetFindingsFilterRequest`](#aws-cdk-sdk.macie2.Macie2GetFindingsFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.property.action"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.property.description"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilterFindingCriteria`](#aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilterFindingCriteria)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.property.name"></a>

- *Type:* `string`

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.property.position"></a>

- *Type:* `number`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilter.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### Macie2ResponsesFetchFindingsFilterFindingCriteria <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilterFindingCriteria"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilterFindingCriteria.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchFindingsFilterFindingCriteria(__scope: Construct, __resources: string[], __input: Macie2GetFindingsFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilterFindingCriteria.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilterFindingCriteria.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilterFindingCriteria.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetFindingsFilterRequest`](#aws-cdk-sdk.macie2.Macie2GetFindingsFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `criterion`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingsFilterFindingCriteria.property.criterion"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties`](#aws-cdk-sdk.macie2.Macie2CriterionAdditionalProperties)}

---


### Macie2ResponsesFetchFindingStatistics <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingStatistics.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchFindingStatistics(__scope: Construct, __resources: string[], __input: Macie2GetFindingStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetFindingStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetFindingStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `countsByGroup`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchFindingStatistics.property.countsByGroup"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GroupCount`](#aws-cdk-sdk.macie2.Macie2GroupCount)[]

---


### Macie2ResponsesFetchInvitationsCount <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchInvitationsCount"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchInvitationsCount.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchInvitationsCount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchInvitationsCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchInvitationsCount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `invitationsCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchInvitationsCount.property.invitationsCount"></a>

- *Type:* `number`

---


### Macie2ResponsesFetchMacieSession <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMacieSession"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMacieSession.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchMacieSession(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMacieSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMacieSession.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMacieSession.property.createdAt"></a>

- *Type:* `string`

---

##### `findingPublishingFrequency`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMacieSession.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMacieSession.property.serviceRole"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMacieSession.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMacieSession.property.updatedAt"></a>

- *Type:* `string`

---


### Macie2ResponsesFetchMasterAccount <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccount"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccount.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchMasterAccount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `master`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccount.property.master"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccountMaster`](#aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccountMaster)

---


### Macie2ResponsesFetchMasterAccountMaster <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccountMaster"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccountMaster.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchMasterAccountMaster(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccountMaster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccountMaster.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccountMaster.property.accountId"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccountMaster.property.invitationId"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccountMaster.property.invitedAt"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMasterAccountMaster.property.relationshipStatus"></a>

- *Type:* `string`

---


### Macie2ResponsesFetchMember <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchMember(__scope: Construct, __resources: string[], __input: Macie2GetMemberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetMemberRequest`](#aws-cdk-sdk.macie2.Macie2GetMemberRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.property.arn"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.property.email"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.property.invitedAt"></a>

- *Type:* `string`

---

##### `masterAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.property.masterAccountId"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.property.relationshipStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchMember.property.updatedAt"></a>

- *Type:* `string`

---


### Macie2ResponsesFetchUsageStatistics <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageStatistics.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchUsageStatistics(__scope: Construct, __resources: string[], __input: Macie2GetUsageStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2GetUsageStatisticsRequest`](#aws-cdk-sdk.macie2.Macie2GetUsageStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageStatistics.property.nextToken"></a>

- *Type:* `string`

---

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageStatistics.property.records"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UsageRecord`](#aws-cdk-sdk.macie2.Macie2UsageRecord)[]

---


### Macie2ResponsesFetchUsageTotals <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageTotals"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageTotals.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesFetchUsageTotals(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageTotals.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageTotals.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `usageTotals`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesFetchUsageTotals.property.usageTotals"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UsageTotal`](#aws-cdk-sdk.macie2.Macie2UsageTotal)[]

---


### Macie2ResponsesListClassificationJobs <a name="aws-cdk-sdk.macie2.Macie2ResponsesListClassificationJobs"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesListClassificationJobs.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesListClassificationJobs(__scope: Construct, __resources: string[], __input: Macie2ListClassificationJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListClassificationJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListClassificationJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListClassificationJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListClassificationJobsRequest`](#aws-cdk-sdk.macie2.Macie2ListClassificationJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListClassificationJobs.property.items"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2JobSummary`](#aws-cdk-sdk.macie2.Macie2JobSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListClassificationJobs.property.nextToken"></a>

- *Type:* `string`

---


### Macie2ResponsesListCustomDataIdentifiers <a name="aws-cdk-sdk.macie2.Macie2ResponsesListCustomDataIdentifiers"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesListCustomDataIdentifiers.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesListCustomDataIdentifiers(__scope: Construct, __resources: string[], __input: Macie2ListCustomDataIdentifiersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListCustomDataIdentifiers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListCustomDataIdentifiers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListCustomDataIdentifiers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListCustomDataIdentifiersRequest`](#aws-cdk-sdk.macie2.Macie2ListCustomDataIdentifiersRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListCustomDataIdentifiers.property.items"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2CustomDataIdentifierSummary`](#aws-cdk-sdk.macie2.Macie2CustomDataIdentifierSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListCustomDataIdentifiers.property.nextToken"></a>

- *Type:* `string`

---


### Macie2ResponsesListFindings <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindings"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindings.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesListFindings(__scope: Construct, __resources: string[], __input: Macie2ListFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListFindingsRequest`](#aws-cdk-sdk.macie2.Macie2ListFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindings.property.findingIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindings.property.nextToken"></a>

- *Type:* `string`

---


### Macie2ResponsesListFindingsFilters <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindingsFilters"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindingsFilters.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesListFindingsFilters(__scope: Construct, __resources: string[], __input: Macie2ListFindingsFiltersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindingsFilters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindingsFilters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindingsFilters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListFindingsFiltersRequest`](#aws-cdk-sdk.macie2.Macie2ListFindingsFiltersRequest)

---



#### Properties <a name="Properties"></a>

##### `findingsFilterListItems`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindingsFilters.property.findingsFilterListItems"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2FindingsFilterListItem`](#aws-cdk-sdk.macie2.Macie2FindingsFilterListItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListFindingsFilters.property.nextToken"></a>

- *Type:* `string`

---


### Macie2ResponsesListInvitations <a name="aws-cdk-sdk.macie2.Macie2ResponsesListInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesListInvitations.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesListInvitations(__scope: Construct, __resources: string[], __input: Macie2ListInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListInvitationsRequest`](#aws-cdk-sdk.macie2.Macie2ListInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `invitations`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListInvitations.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Invitation`](#aws-cdk-sdk.macie2.Macie2Invitation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListInvitations.property.nextToken"></a>

- *Type:* `string`

---


### Macie2ResponsesListMembers <a name="aws-cdk-sdk.macie2.Macie2ResponsesListMembers"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesListMembers.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesListMembers(__scope: Construct, __resources: string[], __input: Macie2ListMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListMembersRequest`](#aws-cdk-sdk.macie2.Macie2ListMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListMembers.property.members"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2Member`](#aws-cdk-sdk.macie2.Macie2Member)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListMembers.property.nextToken"></a>

- *Type:* `string`

---


### Macie2ResponsesListOrganizationAdminAccounts <a name="aws-cdk-sdk.macie2.Macie2ResponsesListOrganizationAdminAccounts"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesListOrganizationAdminAccounts.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesListOrganizationAdminAccounts(__scope: Construct, __resources: string[], __input: Macie2ListOrganizationAdminAccountsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListOrganizationAdminAccounts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListOrganizationAdminAccounts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListOrganizationAdminAccounts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListOrganizationAdminAccountsRequest`](#aws-cdk-sdk.macie2.Macie2ListOrganizationAdminAccountsRequest)

---



#### Properties <a name="Properties"></a>

##### `adminAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListOrganizationAdminAccounts.property.adminAccounts"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2AdminAccount`](#aws-cdk-sdk.macie2.Macie2AdminAccount)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListOrganizationAdminAccounts.property.nextToken"></a>

- *Type:* `string`

---


### Macie2ResponsesListTagsForResource <a name="aws-cdk-sdk.macie2.Macie2ResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesListTagsForResource.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: Macie2ListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ListTagsForResourceRequest`](#aws-cdk-sdk.macie2.Macie2ListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### Macie2ResponsesPutClassificationExportConfiguration <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfiguration.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesPutClassificationExportConfiguration(__scope: Construct, __resources: string[], __input: Macie2PutClassificationExportConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationRequest`](#aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfiguration.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfiguration`](#aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfiguration)

---


### Macie2ResponsesPutClassificationExportConfigurationConfiguration <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfiguration.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesPutClassificationExportConfigurationConfiguration(__scope: Construct, __resources: string[], __input: Macie2PutClassificationExportConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationRequest`](#aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfiguration.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination`](#aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination)

---


### Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination(__scope: Construct, __resources: string[], __input: Macie2PutClassificationExportConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationRequest`](#aws-cdk-sdk.macie2.Macie2PutClassificationExportConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination.property.keyPrefix"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination.property.kmsKeyArn"></a>

- *Type:* `string`

---


### Macie2ResponsesTestCustomDataIdentifier <a name="aws-cdk-sdk.macie2.Macie2ResponsesTestCustomDataIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesTestCustomDataIdentifier.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesTestCustomDataIdentifier(__scope: Construct, __resources: string[], __input: Macie2TestCustomDataIdentifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesTestCustomDataIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesTestCustomDataIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesTestCustomDataIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierRequest`](#aws-cdk-sdk.macie2.Macie2TestCustomDataIdentifierRequest)

---



#### Properties <a name="Properties"></a>

##### `matchCount`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesTestCustomDataIdentifier.property.matchCount"></a>

- *Type:* `number`

---


### Macie2ResponsesUpdateFindingsFilter <a name="aws-cdk-sdk.macie2.Macie2ResponsesUpdateFindingsFilter"></a>

#### Initializer <a name="aws-cdk-sdk.macie2.Macie2ResponsesUpdateFindingsFilter.Initializer"></a>

```typescript
import { macie2 } from 'aws-cdk-sdk'

new macie2.Macie2ResponsesUpdateFindingsFilter(__scope: Construct, __resources: string[], __input: Macie2UpdateFindingsFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesUpdateFindingsFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesUpdateFindingsFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesUpdateFindingsFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest`](#aws-cdk-sdk.macie2.Macie2UpdateFindingsFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesUpdateFindingsFilter.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.macie2.Macie2ResponsesUpdateFindingsFilter.property.id"></a>

- *Type:* `string`

---



