# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### GuardDutyClient <a name="aws-cdk-sdk.guardduty.GuardDutyClient"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyClient.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptInvitation` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.acceptInvitation"></a>

```typescript
public acceptInvitation(input: GuardDutyAcceptInvitationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyAcceptInvitationRequest`](#aws-cdk-sdk.guardduty.GuardDutyAcceptInvitationRequest)

---

##### `archiveFindings` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.archiveFindings"></a>

```typescript
public archiveFindings(input: GuardDutyArchiveFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyArchiveFindingsRequest`](#aws-cdk-sdk.guardduty.GuardDutyArchiveFindingsRequest)

---

##### `createDetector` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.createDetector"></a>

```typescript
public createDetector(input: GuardDutyCreateDetectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateDetectorRequest)

---

##### `createFilter` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.createFilter"></a>

```typescript
public createFilter(input: GuardDutyCreateFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest)

---

##### `createIpSet` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.createIpSet"></a>

```typescript
public createIpSet(input: GuardDutyCreateIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest)

---

##### `createMembers` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.createMembers"></a>

```typescript
public createMembers(input: GuardDutyCreateMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateMembersRequest)

---

##### `createPublishingDestination` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.createPublishingDestination"></a>

```typescript
public createPublishingDestination(input: GuardDutyCreatePublishingDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationRequest)

---

##### `createSampleFindings` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.createSampleFindings"></a>

```typescript
public createSampleFindings(input: GuardDutyCreateSampleFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateSampleFindingsRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateSampleFindingsRequest)

---

##### `createThreatIntelSet` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.createThreatIntelSet"></a>

```typescript
public createThreatIntelSet(input: GuardDutyCreateThreatIntelSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest)

---

##### `declineInvitations` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.declineInvitations"></a>

```typescript
public declineInvitations(input: GuardDutyDeclineInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeclineInvitationsRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeclineInvitationsRequest)

---

##### `deleteDetector` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.deleteDetector"></a>

```typescript
public deleteDetector(input: GuardDutyDeleteDetectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeleteDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeleteDetectorRequest)

---

##### `deleteFilter` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.deleteFilter"></a>

```typescript
public deleteFilter(input: GuardDutyDeleteFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeleteFilterRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeleteFilterRequest)

---

##### `deleteInvitations` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.deleteInvitations"></a>

```typescript
public deleteInvitations(input: GuardDutyDeleteInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeleteInvitationsRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeleteInvitationsRequest)

---

##### `deleteIpSet` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.deleteIpSet"></a>

```typescript
public deleteIpSet(input: GuardDutyDeleteIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeleteIpSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeleteIpSetRequest)

---

##### `deleteMembers` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.deleteMembers"></a>

```typescript
public deleteMembers(input: GuardDutyDeleteMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeleteMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeleteMembersRequest)

---

##### `deletePublishingDestination` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.deletePublishingDestination"></a>

```typescript
public deletePublishingDestination(input: GuardDutyDeletePublishingDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeletePublishingDestinationRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeletePublishingDestinationRequest)

---

##### `deleteThreatIntelSet` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.deleteThreatIntelSet"></a>

```typescript
public deleteThreatIntelSet(input: GuardDutyDeleteThreatIntelSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeleteThreatIntelSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeleteThreatIntelSetRequest)

---

##### `describeOrganizationConfiguration` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.describeOrganizationConfiguration"></a>

```typescript
public describeOrganizationConfiguration(input: GuardDutyDescribeOrganizationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationRequest`](#aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationRequest)

---

##### `describePublishingDestination` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.describePublishingDestination"></a>

```typescript
public describePublishingDestination(input: GuardDutyDescribePublishingDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationRequest`](#aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationRequest)

---

##### `disableOrganizationAdminAccount` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.disableOrganizationAdminAccount"></a>

```typescript
public disableOrganizationAdminAccount(input: GuardDutyDisableOrganizationAdminAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDisableOrganizationAdminAccountRequest`](#aws-cdk-sdk.guardduty.GuardDutyDisableOrganizationAdminAccountRequest)

---

##### `disassociateFromMasterAccount` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.disassociateFromMasterAccount"></a>

```typescript
public disassociateFromMasterAccount(input: GuardDutyDisassociateFromMasterAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDisassociateFromMasterAccountRequest`](#aws-cdk-sdk.guardduty.GuardDutyDisassociateFromMasterAccountRequest)

---

##### `disassociateMembers` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.disassociateMembers"></a>

```typescript
public disassociateMembers(input: GuardDutyDisassociateMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDisassociateMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyDisassociateMembersRequest)

---

##### `enableOrganizationAdminAccount` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.enableOrganizationAdminAccount"></a>

```typescript
public enableOrganizationAdminAccount(input: GuardDutyEnableOrganizationAdminAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyEnableOrganizationAdminAccountRequest`](#aws-cdk-sdk.guardduty.GuardDutyEnableOrganizationAdminAccountRequest)

---

##### `fetchDetector` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchDetector"></a>

```typescript
public fetchDetector(input: GuardDutyGetDetectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest)

---

##### `fetchFilter` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchFilter"></a>

```typescript
public fetchFilter(input: GuardDutyGetFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetFilterRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetFilterRequest)

---

##### `fetchFindings` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchFindings"></a>

```typescript
public fetchFindings(input: GuardDutyGetFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetFindingsRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetFindingsRequest)

---

##### `fetchFindingsStatistics` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchFindingsStatistics"></a>

```typescript
public fetchFindingsStatistics(input: GuardDutyGetFindingsStatisticsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsRequest)

---

##### `fetchInvitationsCount` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchInvitationsCount"></a>

```typescript
public fetchInvitationsCount()
```

##### `fetchIpSet` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchIpSet"></a>

```typescript
public fetchIpSet(input: GuardDutyGetIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetIpSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetIpSetRequest)

---

##### `fetchMasterAccount` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchMasterAccount"></a>

```typescript
public fetchMasterAccount(input: GuardDutyGetMasterAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetMasterAccountRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetMasterAccountRequest)

---

##### `fetchMemberDetectors` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchMemberDetectors"></a>

```typescript
public fetchMemberDetectors(input: GuardDutyGetMemberDetectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetMemberDetectorsRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetMemberDetectorsRequest)

---

##### `fetchMembers` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchMembers"></a>

```typescript
public fetchMembers(input: GuardDutyGetMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetMembersRequest)

---

##### `fetchThreatIntelSet` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchThreatIntelSet"></a>

```typescript
public fetchThreatIntelSet(input: GuardDutyGetThreatIntelSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetRequest)

---

##### `fetchUsageStatistics` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.fetchUsageStatistics"></a>

```typescript
public fetchUsageStatistics(input: GuardDutyGetUsageStatisticsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest)

---

##### `inviteMembers` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.inviteMembers"></a>

```typescript
public inviteMembers(input: GuardDutyInviteMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyInviteMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyInviteMembersRequest)

---

##### `listDetectors` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.listDetectors"></a>

```typescript
public listDetectors(input: GuardDutyListDetectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListDetectorsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListDetectorsRequest)

---

##### `listFilters` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.listFilters"></a>

```typescript
public listFilters(input: GuardDutyListFiltersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListFiltersRequest`](#aws-cdk-sdk.guardduty.GuardDutyListFiltersRequest)

---

##### `listFindings` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.listFindings"></a>

```typescript
public listFindings(input: GuardDutyListFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListFindingsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListFindingsRequest)

---

##### `listInvitations` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.listInvitations"></a>

```typescript
public listInvitations(input: GuardDutyListInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListInvitationsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListInvitationsRequest)

---

##### `listIpSets` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.listIpSets"></a>

```typescript
public listIpSets(input: GuardDutyListIpSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListIpSetsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListIpSetsRequest)

---

##### `listMembers` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.listMembers"></a>

```typescript
public listMembers(input: GuardDutyListMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyListMembersRequest)

---

##### `listOrganizationAdminAccounts` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.listOrganizationAdminAccounts"></a>

```typescript
public listOrganizationAdminAccounts(input: GuardDutyListOrganizationAdminAccountsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListOrganizationAdminAccountsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListOrganizationAdminAccountsRequest)

---

##### `listPublishingDestinations` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.listPublishingDestinations"></a>

```typescript
public listPublishingDestinations(input: GuardDutyListPublishingDestinationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: GuardDutyListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListTagsForResourceRequest`](#aws-cdk-sdk.guardduty.GuardDutyListTagsForResourceRequest)

---

##### `listThreatIntelSets` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.listThreatIntelSets"></a>

```typescript
public listThreatIntelSets(input: GuardDutyListThreatIntelSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsRequest)

---

##### `startMonitoringMembers` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.startMonitoringMembers"></a>

```typescript
public startMonitoringMembers(input: GuardDutyStartMonitoringMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyStartMonitoringMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyStartMonitoringMembersRequest)

---

##### `stopMonitoringMembers` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.stopMonitoringMembers"></a>

```typescript
public stopMonitoringMembers(input: GuardDutyStopMonitoringMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyStopMonitoringMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyStopMonitoringMembersRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.tagResource"></a>

```typescript
public tagResource(input: GuardDutyTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyTagResourceRequest`](#aws-cdk-sdk.guardduty.GuardDutyTagResourceRequest)

---

##### `unarchiveFindings` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.unarchiveFindings"></a>

```typescript
public unarchiveFindings(input: GuardDutyUnarchiveFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnarchiveFindingsRequest`](#aws-cdk-sdk.guardduty.GuardDutyUnarchiveFindingsRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.untagResource"></a>

```typescript
public untagResource(input: GuardDutyUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUntagResourceRequest`](#aws-cdk-sdk.guardduty.GuardDutyUntagResourceRequest)

---

##### `updateDetector` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.updateDetector"></a>

```typescript
public updateDetector(input: GuardDutyUpdateDetectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUpdateDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyUpdateDetectorRequest)

---

##### `updateFilter` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.updateFilter"></a>

```typescript
public updateFilter(input: GuardDutyUpdateFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest`](#aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest)

---

##### `updateFindingsFeedback` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.updateFindingsFeedback"></a>

```typescript
public updateFindingsFeedback(input: GuardDutyUpdateFindingsFeedbackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUpdateFindingsFeedbackRequest`](#aws-cdk-sdk.guardduty.GuardDutyUpdateFindingsFeedbackRequest)

---

##### `updateIpSet` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.updateIpSet"></a>

```typescript
public updateIpSet(input: GuardDutyUpdateIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUpdateIpSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyUpdateIpSetRequest)

---

##### `updateMemberDetectors` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.updateMemberDetectors"></a>

```typescript
public updateMemberDetectors(input: GuardDutyUpdateMemberDetectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUpdateMemberDetectorsRequest`](#aws-cdk-sdk.guardduty.GuardDutyUpdateMemberDetectorsRequest)

---

##### `updateOrganizationConfiguration` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.updateOrganizationConfiguration"></a>

```typescript
public updateOrganizationConfiguration(input: GuardDutyUpdateOrganizationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUpdateOrganizationConfigurationRequest`](#aws-cdk-sdk.guardduty.GuardDutyUpdateOrganizationConfigurationRequest)

---

##### `updatePublishingDestination` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.updatePublishingDestination"></a>

```typescript
public updatePublishingDestination(input: GuardDutyUpdatePublishingDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUpdatePublishingDestinationRequest`](#aws-cdk-sdk.guardduty.GuardDutyUpdatePublishingDestinationRequest)

---

##### `updateThreatIntelSet` <a name="aws-cdk-sdk.guardduty.GuardDutyClient.updateThreatIntelSet"></a>

```typescript
public updateThreatIntelSet(input: GuardDutyUpdateThreatIntelSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUpdateThreatIntelSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyUpdateThreatIntelSetRequest)

---




## Structs <a name="Structs"></a>

### GuardDutyAcceptInvitationRequest <a name="aws-cdk-sdk.guardduty.GuardDutyAcceptInvitationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyAcceptInvitationRequest: guardduty.GuardDutyAcceptInvitationRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAcceptInvitationRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAcceptInvitationRequest.property.invitationId"></a>

- *Type:* `string`

---

##### `masterId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAcceptInvitationRequest.property.masterId"></a>

- *Type:* `string`

---

### GuardDutyAcceptInvitationResponse <a name="aws-cdk-sdk.guardduty.GuardDutyAcceptInvitationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyAcceptInvitationResponse: guardduty.GuardDutyAcceptInvitationResponse = { ... }
```

### GuardDutyAccessControlList <a name="aws-cdk-sdk.guardduty.GuardDutyAccessControlList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyAccessControlList: guardduty.GuardDutyAccessControlList = { ... }
```

##### `allowsPublicReadAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAccessControlList.property.allowsPublicReadAccess"></a>

- *Type:* `boolean`

---

##### `allowsPublicWriteAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAccessControlList.property.allowsPublicWriteAccess"></a>

- *Type:* `boolean`

---

### GuardDutyAccessKeyDetails <a name="aws-cdk-sdk.guardduty.GuardDutyAccessKeyDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyAccessKeyDetails: guardduty.GuardDutyAccessKeyDetails = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAccessKeyDetails.property.accessKeyId"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAccessKeyDetails.property.principalId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAccessKeyDetails.property.userName"></a>

- *Type:* `string`

---

##### `userType`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAccessKeyDetails.property.userType"></a>

- *Type:* `string`

---

### GuardDutyAccountDetail <a name="aws-cdk-sdk.guardduty.GuardDutyAccountDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyAccountDetail: guardduty.GuardDutyAccountDetail = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAccountDetail.property.accountId"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAccountDetail.property.email"></a>

- *Type:* `string`

---

### GuardDutyAccountLevelPermissions <a name="aws-cdk-sdk.guardduty.GuardDutyAccountLevelPermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyAccountLevelPermissions: guardduty.GuardDutyAccountLevelPermissions = { ... }
```

##### `blockPublicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAccountLevelPermissions.property.blockPublicAccess"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyBlockPublicAccess`](#aws-cdk-sdk.guardduty.GuardDutyBlockPublicAccess)

---

### GuardDutyAction <a name="aws-cdk-sdk.guardduty.GuardDutyAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyAction: guardduty.GuardDutyAction = { ... }
```

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAction.property.actionType"></a>

- *Type:* `string`

---

##### `awsApiCallAction`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAction.property.awsApiCallAction"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyAwsApiCallAction`](#aws-cdk-sdk.guardduty.GuardDutyAwsApiCallAction)

---

##### `dnsRequestAction`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAction.property.dnsRequestAction"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDnsRequestAction`](#aws-cdk-sdk.guardduty.GuardDutyDnsRequestAction)

---

##### `networkConnectionAction`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAction.property.networkConnectionAction"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyNetworkConnectionAction`](#aws-cdk-sdk.guardduty.GuardDutyNetworkConnectionAction)

---

##### `portProbeAction`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAction.property.portProbeAction"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyPortProbeAction`](#aws-cdk-sdk.guardduty.GuardDutyPortProbeAction)

---

### GuardDutyAdminAccount <a name="aws-cdk-sdk.guardduty.GuardDutyAdminAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyAdminAccount: guardduty.GuardDutyAdminAccount = { ... }
```

##### `adminAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAdminAccount.property.adminAccountId"></a>

- *Type:* `string`

---

##### `adminStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAdminAccount.property.adminStatus"></a>

- *Type:* `string`

---

### GuardDutyArchiveFindingsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyArchiveFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyArchiveFindingsRequest: guardduty.GuardDutyArchiveFindingsRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyArchiveFindingsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyArchiveFindingsRequest.property.findingIds"></a>

- *Type:* `string`[]

---

### GuardDutyArchiveFindingsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyArchiveFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyArchiveFindingsResponse: guardduty.GuardDutyArchiveFindingsResponse = { ... }
```

### GuardDutyAwsApiCallAction <a name="aws-cdk-sdk.guardduty.GuardDutyAwsApiCallAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyAwsApiCallAction: guardduty.GuardDutyAwsApiCallAction = { ... }
```

##### `api`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAwsApiCallAction.property.api"></a>

- *Type:* `string`

---

##### `callerType`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAwsApiCallAction.property.callerType"></a>

- *Type:* `string`

---

##### `domainDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAwsApiCallAction.property.domainDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDomainDetails`](#aws-cdk-sdk.guardduty.GuardDutyDomainDetails)

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAwsApiCallAction.property.errorCode"></a>

- *Type:* `string`

---

##### `remoteIpDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAwsApiCallAction.property.remoteIpDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails`](#aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails)

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyAwsApiCallAction.property.serviceName"></a>

- *Type:* `string`

---

### GuardDutyBlockPublicAccess <a name="aws-cdk-sdk.guardduty.GuardDutyBlockPublicAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyBlockPublicAccess: guardduty.GuardDutyBlockPublicAccess = { ... }
```

##### `blockPublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyBlockPublicAccess.property.blockPublicAcls"></a>

- *Type:* `boolean`

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyBlockPublicAccess.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyBlockPublicAccess.property.ignorePublicAcls"></a>

- *Type:* `boolean`

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyBlockPublicAccess.property.restrictPublicBuckets"></a>

- *Type:* `boolean`

---

### GuardDutyBucketLevelPermissions <a name="aws-cdk-sdk.guardduty.GuardDutyBucketLevelPermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyBucketLevelPermissions: guardduty.GuardDutyBucketLevelPermissions = { ... }
```

##### `accessControlList`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyBucketLevelPermissions.property.accessControlList"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyAccessControlList`](#aws-cdk-sdk.guardduty.GuardDutyAccessControlList)

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyBucketLevelPermissions.property.blockPublicAccess"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyBlockPublicAccess`](#aws-cdk-sdk.guardduty.GuardDutyBlockPublicAccess)

---

##### `bucketPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyBucketLevelPermissions.property.bucketPolicy"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyBucketPolicy`](#aws-cdk-sdk.guardduty.GuardDutyBucketPolicy)

---

### GuardDutyBucketPolicy <a name="aws-cdk-sdk.guardduty.GuardDutyBucketPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyBucketPolicy: guardduty.GuardDutyBucketPolicy = { ... }
```

##### `allowsPublicReadAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyBucketPolicy.property.allowsPublicReadAccess"></a>

- *Type:* `boolean`

---

##### `allowsPublicWriteAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyBucketPolicy.property.allowsPublicWriteAccess"></a>

- *Type:* `boolean`

---

### GuardDutyCity <a name="aws-cdk-sdk.guardduty.GuardDutyCity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCity: guardduty.GuardDutyCity = { ... }
```

##### `cityName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCity.property.cityName"></a>

- *Type:* `string`

---

### GuardDutyCloudTrailConfigurationResult <a name="aws-cdk-sdk.guardduty.GuardDutyCloudTrailConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCloudTrailConfigurationResult: guardduty.GuardDutyCloudTrailConfigurationResult = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCloudTrailConfigurationResult.property.status"></a>

- *Type:* `string`

---

### GuardDutyCondition <a name="aws-cdk-sdk.guardduty.GuardDutyCondition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCondition: guardduty.GuardDutyCondition = { ... }
```

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.eq"></a>

- *Type:* `string`[]

---

##### `equals2`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.equals2"></a>

- *Type:* `string`[]

---

##### `greaterThan`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.greaterThan"></a>

- *Type:* `number`

---

##### `greaterThanOrEqual`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.greaterThanOrEqual"></a>

- *Type:* `number`

---

##### `gt`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.gt"></a>

- *Type:* `number`

---

##### `gte`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.gte"></a>

- *Type:* `number`

---

##### `lessThan`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.lessThan"></a>

- *Type:* `number`

---

##### `lessThanOrEqual`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.lessThanOrEqual"></a>

- *Type:* `number`

---

##### `lt`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.lt"></a>

- *Type:* `number`

---

##### `lte`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.lte"></a>

- *Type:* `number`

---

##### `neq`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.neq"></a>

- *Type:* `string`[]

---

##### `notEquals`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCondition.property.notEquals"></a>

- *Type:* `string`[]

---

### GuardDutyCountry <a name="aws-cdk-sdk.guardduty.GuardDutyCountry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCountry: guardduty.GuardDutyCountry = { ... }
```

##### `countryCode`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCountry.property.countryCode"></a>

- *Type:* `string`

---

##### `countryName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCountry.property.countryName"></a>

- *Type:* `string`

---

### GuardDutyCreateDetectorRequest <a name="aws-cdk-sdk.guardduty.GuardDutyCreateDetectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateDetectorRequest: guardduty.GuardDutyCreateDetectorRequest = { ... }
```

##### `enable`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateDetectorRequest.property.enable"></a>

- *Type:* `boolean`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateDetectorRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateDetectorRequest.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurations`](#aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurations)

---

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateDetectorRequest.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateDetectorRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GuardDutyCreateDetectorResponse <a name="aws-cdk-sdk.guardduty.GuardDutyCreateDetectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateDetectorResponse: guardduty.GuardDutyCreateDetectorResponse = { ... }
```

##### `detectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateDetectorResponse.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyCreateFilterRequest <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateFilterRequest: guardduty.GuardDutyCreateFilterRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyFindingCriteria`](#aws-cdk-sdk.guardduty.GuardDutyFindingCriteria)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest.property.name"></a>

- *Type:* `string`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest.property.action"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest.property.description"></a>

- *Type:* `string`

---

##### `rank`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest.property.rank"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GuardDutyCreateFilterResponse <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateFilterResponse: guardduty.GuardDutyCreateFilterResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateFilterResponse.property.name"></a>

- *Type:* `string`

---

### GuardDutyCreateIpSetRequest <a name="aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateIpSetRequest: guardduty.GuardDutyCreateIpSetRequest = { ... }
```

##### `activate`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest.property.activate"></a>

- *Type:* `boolean`

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest.property.format"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest.property.name"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GuardDutyCreateIpSetResponse <a name="aws-cdk-sdk.guardduty.GuardDutyCreateIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateIpSetResponse: guardduty.GuardDutyCreateIpSetResponse = { ... }
```

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateIpSetResponse.property.ipSetId"></a>

- *Type:* `string`

---

### GuardDutyCreateMembersRequest <a name="aws-cdk-sdk.guardduty.GuardDutyCreateMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateMembersRequest: guardduty.GuardDutyCreateMembersRequest = { ... }
```

##### `accountDetails`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateMembersRequest.property.accountDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyAccountDetail`](#aws-cdk-sdk.guardduty.GuardDutyAccountDetail)[]

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateMembersRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyCreateMembersResponse <a name="aws-cdk-sdk.guardduty.GuardDutyCreateMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateMembersResponse: guardduty.GuardDutyCreateMembersResponse = { ... }
```

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyCreatePublishingDestinationRequest <a name="aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreatePublishingDestinationRequest: guardduty.GuardDutyCreatePublishingDestinationRequest = { ... }
```

##### `destinationProperties`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationRequest.property.destinationProperties"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDestinationProperties`](#aws-cdk-sdk.guardduty.GuardDutyDestinationProperties)

---

##### `destinationType`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationRequest.property.destinationType"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationRequest.property.clientToken"></a>

- *Type:* `string`

---

### GuardDutyCreatePublishingDestinationResponse <a name="aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreatePublishingDestinationResponse: guardduty.GuardDutyCreatePublishingDestinationResponse = { ... }
```

##### `destinationId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationResponse.property.destinationId"></a>

- *Type:* `string`

---

### GuardDutyCreateSampleFindingsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyCreateSampleFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateSampleFindingsRequest: guardduty.GuardDutyCreateSampleFindingsRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateSampleFindingsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `findingTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateSampleFindingsRequest.property.findingTypes"></a>

- *Type:* `string`[]

---

### GuardDutyCreateSampleFindingsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyCreateSampleFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateSampleFindingsResponse: guardduty.GuardDutyCreateSampleFindingsResponse = { ... }
```

### GuardDutyCreateThreatIntelSetRequest <a name="aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateThreatIntelSetRequest: guardduty.GuardDutyCreateThreatIntelSetRequest = { ... }
```

##### `activate`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest.property.activate"></a>

- *Type:* `boolean`

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest.property.format"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest.property.name"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GuardDutyCreateThreatIntelSetResponse <a name="aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyCreateThreatIntelSetResponse: guardduty.GuardDutyCreateThreatIntelSetResponse = { ... }
```

##### `threatIntelSetId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetResponse.property.threatIntelSetId"></a>

- *Type:* `string`

---

### GuardDutyDataSourceConfigurations <a name="aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurations"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDataSourceConfigurations: guardduty.GuardDutyDataSourceConfigurations = { ... }
```

##### `s3Logs`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurations.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyS3LogsConfiguration`](#aws-cdk-sdk.guardduty.GuardDutyS3LogsConfiguration)

---

### GuardDutyDataSourceConfigurationsResult <a name="aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDataSourceConfigurationsResult: guardduty.GuardDutyDataSourceConfigurationsResult = { ... }
```

##### `cloudTrail`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurationsResult.property.cloudTrail"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCloudTrailConfigurationResult`](#aws-cdk-sdk.guardduty.GuardDutyCloudTrailConfigurationResult)

---

##### `dnsLogs`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurationsResult.property.dnsLogs"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDnsLogsConfigurationResult`](#aws-cdk-sdk.guardduty.GuardDutyDnsLogsConfigurationResult)

---

##### `flowLogs`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurationsResult.property.flowLogs"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyFlowLogsConfigurationResult`](#aws-cdk-sdk.guardduty.GuardDutyFlowLogsConfigurationResult)

---

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurationsResult.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyS3LogsConfigurationResult`](#aws-cdk-sdk.guardduty.GuardDutyS3LogsConfigurationResult)

---

### GuardDutyDeclineInvitationsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDeclineInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeclineInvitationsRequest: guardduty.GuardDutyDeclineInvitationsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeclineInvitationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### GuardDutyDeclineInvitationsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDeclineInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeclineInvitationsResponse: guardduty.GuardDutyDeclineInvitationsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeclineInvitationsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyDefaultServerSideEncryption <a name="aws-cdk-sdk.guardduty.GuardDutyDefaultServerSideEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDefaultServerSideEncryption: guardduty.GuardDutyDefaultServerSideEncryption = { ... }
```

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDefaultServerSideEncryption.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDefaultServerSideEncryption.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

### GuardDutyDeleteDetectorRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteDetectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteDetectorRequest: guardduty.GuardDutyDeleteDetectorRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteDetectorRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyDeleteDetectorResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteDetectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteDetectorResponse: guardduty.GuardDutyDeleteDetectorResponse = { ... }
```

### GuardDutyDeleteFilterRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteFilterRequest: guardduty.GuardDutyDeleteFilterRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteFilterRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `filterName`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteFilterRequest.property.filterName"></a>

- *Type:* `string`

---

### GuardDutyDeleteFilterResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteFilterResponse: guardduty.GuardDutyDeleteFilterResponse = { ... }
```

### GuardDutyDeleteInvitationsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteInvitationsRequest: guardduty.GuardDutyDeleteInvitationsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteInvitationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

### GuardDutyDeleteInvitationsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteInvitationsResponse: guardduty.GuardDutyDeleteInvitationsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteInvitationsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyDeleteIpSetRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteIpSetRequest: guardduty.GuardDutyDeleteIpSetRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteIpSetRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteIpSetRequest.property.ipSetId"></a>

- *Type:* `string`

---

### GuardDutyDeleteIpSetResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteIpSetResponse: guardduty.GuardDutyDeleteIpSetResponse = { ... }
```

### GuardDutyDeleteMembersRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteMembersRequest: guardduty.GuardDutyDeleteMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteMembersRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyDeleteMembersResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteMembersResponse: guardduty.GuardDutyDeleteMembersResponse = { ... }
```

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyDeletePublishingDestinationRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDeletePublishingDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeletePublishingDestinationRequest: guardduty.GuardDutyDeletePublishingDestinationRequest = { ... }
```

##### `destinationId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeletePublishingDestinationRequest.property.destinationId"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeletePublishingDestinationRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyDeletePublishingDestinationResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDeletePublishingDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeletePublishingDestinationResponse: guardduty.GuardDutyDeletePublishingDestinationResponse = { ... }
```

### GuardDutyDeleteThreatIntelSetRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteThreatIntelSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteThreatIntelSetRequest: guardduty.GuardDutyDeleteThreatIntelSetRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteThreatIntelSetRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `threatIntelSetId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteThreatIntelSetRequest.property.threatIntelSetId"></a>

- *Type:* `string`

---

### GuardDutyDeleteThreatIntelSetResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDeleteThreatIntelSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDeleteThreatIntelSetResponse: guardduty.GuardDutyDeleteThreatIntelSetResponse = { ... }
```

### GuardDutyDescribeOrganizationConfigurationRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDescribeOrganizationConfigurationRequest: guardduty.GuardDutyDescribeOrganizationConfigurationRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyDescribeOrganizationConfigurationResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDescribeOrganizationConfigurationResponse: guardduty.GuardDutyDescribeOrganizationConfigurationResponse = { ... }
```

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationResponse.property.autoEnable"></a>

- *Type:* `boolean`

---

##### `memberAccountLimitReached`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationResponse.property.memberAccountLimitReached"></a>

- *Type:* `boolean`

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationResponse.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyOrganizationDataSourceConfigurationsResult`](#aws-cdk-sdk.guardduty.GuardDutyOrganizationDataSourceConfigurationsResult)

---

### GuardDutyDescribePublishingDestinationRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDescribePublishingDestinationRequest: guardduty.GuardDutyDescribePublishingDestinationRequest = { ... }
```

##### `destinationId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationRequest.property.destinationId"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyDescribePublishingDestinationResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDescribePublishingDestinationResponse: guardduty.GuardDutyDescribePublishingDestinationResponse = { ... }
```

##### `destinationId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationResponse.property.destinationId"></a>

- *Type:* `string`

---

##### `destinationProperties`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationResponse.property.destinationProperties"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDestinationProperties`](#aws-cdk-sdk.guardduty.GuardDutyDestinationProperties)

---

##### `destinationType`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationResponse.property.destinationType"></a>

- *Type:* `string`

---

##### `publishingFailureStartTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationResponse.property.publishingFailureStartTimestamp"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationResponse.property.status"></a>

- *Type:* `string`

---

### GuardDutyDestination <a name="aws-cdk-sdk.guardduty.GuardDutyDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDestination: guardduty.GuardDutyDestination = { ... }
```

##### `destinationId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDestination.property.destinationId"></a>

- *Type:* `string`

---

##### `destinationType`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDestination.property.destinationType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDestination.property.status"></a>

- *Type:* `string`

---

### GuardDutyDestinationProperties <a name="aws-cdk-sdk.guardduty.GuardDutyDestinationProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDestinationProperties: guardduty.GuardDutyDestinationProperties = { ... }
```

##### `destinationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDestinationProperties.property.destinationArn"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDestinationProperties.property.kmsKeyArn"></a>

- *Type:* `string`

---

### GuardDutyDisableOrganizationAdminAccountRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDisableOrganizationAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDisableOrganizationAdminAccountRequest: guardduty.GuardDutyDisableOrganizationAdminAccountRequest = { ... }
```

##### `adminAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDisableOrganizationAdminAccountRequest.property.adminAccountId"></a>

- *Type:* `string`

---

### GuardDutyDisableOrganizationAdminAccountResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDisableOrganizationAdminAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDisableOrganizationAdminAccountResponse: guardduty.GuardDutyDisableOrganizationAdminAccountResponse = { ... }
```

### GuardDutyDisassociateFromMasterAccountRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDisassociateFromMasterAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDisassociateFromMasterAccountRequest: guardduty.GuardDutyDisassociateFromMasterAccountRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDisassociateFromMasterAccountRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyDisassociateFromMasterAccountResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDisassociateFromMasterAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDisassociateFromMasterAccountResponse: guardduty.GuardDutyDisassociateFromMasterAccountResponse = { ... }
```

### GuardDutyDisassociateMembersRequest <a name="aws-cdk-sdk.guardduty.GuardDutyDisassociateMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDisassociateMembersRequest: guardduty.GuardDutyDisassociateMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDisassociateMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDisassociateMembersRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyDisassociateMembersResponse <a name="aws-cdk-sdk.guardduty.GuardDutyDisassociateMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDisassociateMembersResponse: guardduty.GuardDutyDisassociateMembersResponse = { ... }
```

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDisassociateMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyDnsLogsConfigurationResult <a name="aws-cdk-sdk.guardduty.GuardDutyDnsLogsConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDnsLogsConfigurationResult: guardduty.GuardDutyDnsLogsConfigurationResult = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDnsLogsConfigurationResult.property.status"></a>

- *Type:* `string`

---

### GuardDutyDnsRequestAction <a name="aws-cdk-sdk.guardduty.GuardDutyDnsRequestAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDnsRequestAction: guardduty.GuardDutyDnsRequestAction = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDnsRequestAction.property.domain"></a>

- *Type:* `string`

---

### GuardDutyDomainDetails <a name="aws-cdk-sdk.guardduty.GuardDutyDomainDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyDomainDetails: guardduty.GuardDutyDomainDetails = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyDomainDetails.property.domain"></a>

- *Type:* `string`

---

### GuardDutyEnableOrganizationAdminAccountRequest <a name="aws-cdk-sdk.guardduty.GuardDutyEnableOrganizationAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyEnableOrganizationAdminAccountRequest: guardduty.GuardDutyEnableOrganizationAdminAccountRequest = { ... }
```

##### `adminAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyEnableOrganizationAdminAccountRequest.property.adminAccountId"></a>

- *Type:* `string`

---

### GuardDutyEnableOrganizationAdminAccountResponse <a name="aws-cdk-sdk.guardduty.GuardDutyEnableOrganizationAdminAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyEnableOrganizationAdminAccountResponse: guardduty.GuardDutyEnableOrganizationAdminAccountResponse = { ... }
```

### GuardDutyEvidence <a name="aws-cdk-sdk.guardduty.GuardDutyEvidence"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyEvidence: guardduty.GuardDutyEvidence = { ... }
```

##### `threatIntelligenceDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyEvidence.property.threatIntelligenceDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyThreatIntelligenceDetail`](#aws-cdk-sdk.guardduty.GuardDutyThreatIntelligenceDetail)[]

---

### GuardDutyFinding <a name="aws-cdk-sdk.guardduty.GuardDutyFinding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyFinding: guardduty.GuardDutyFinding = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.id"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.region"></a>

- *Type:* `string`

---

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.resource"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResource`](#aws-cdk-sdk.guardduty.GuardDutyResource)

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.schemaVersion"></a>

- *Type:* `string`

---

##### `severity`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.severity"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.type"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.updatedAt"></a>

- *Type:* `string`

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.confidence"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.description"></a>

- *Type:* `string`

---

##### `partition`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.partition"></a>

- *Type:* `string`

---

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.service"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyService`](#aws-cdk-sdk.guardduty.GuardDutyService)

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFinding.property.title"></a>

- *Type:* `string`

---

### GuardDutyFindingCriteria <a name="aws-cdk-sdk.guardduty.GuardDutyFindingCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyFindingCriteria: guardduty.GuardDutyFindingCriteria = { ... }
```

##### `criterion`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFindingCriteria.property.criterion"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.guardduty.GuardDutyCondition`](#aws-cdk-sdk.guardduty.GuardDutyCondition)}

---

### GuardDutyFindingStatistics <a name="aws-cdk-sdk.guardduty.GuardDutyFindingStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyFindingStatistics: guardduty.GuardDutyFindingStatistics = { ... }
```

##### `countBySeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFindingStatistics.property.countBySeverity"></a>

- *Type:* {[ key: string ]: `number`}

---

### GuardDutyFlowLogsConfigurationResult <a name="aws-cdk-sdk.guardduty.GuardDutyFlowLogsConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyFlowLogsConfigurationResult: guardduty.GuardDutyFlowLogsConfigurationResult = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyFlowLogsConfigurationResult.property.status"></a>

- *Type:* `string`

---

### GuardDutyGeoLocation <a name="aws-cdk-sdk.guardduty.GuardDutyGeoLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGeoLocation: guardduty.GuardDutyGeoLocation = { ... }
```

##### `lat`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGeoLocation.property.lat"></a>

- *Type:* `number`

---

##### `lon`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGeoLocation.property.lon"></a>

- *Type:* `number`

---

### GuardDutyGetDetectorRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetDetectorRequest: guardduty.GuardDutyGetDetectorRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyGetDetectorResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetDetectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetDetectorResponse: guardduty.GuardDutyGetDetectorResponse = { ... }
```

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetDetectorResponse.property.serviceRole"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetDetectorResponse.property.status"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetDetectorResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetDetectorResponse.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurationsResult`](#aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurationsResult)

---

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetDetectorResponse.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetDetectorResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetDetectorResponse.property.updatedAt"></a>

- *Type:* `string`

---

### GuardDutyGetFilterRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetFilterRequest: guardduty.GuardDutyGetFilterRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFilterRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `filterName`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFilterRequest.property.filterName"></a>

- *Type:* `string`

---

### GuardDutyGetFilterResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetFilterResponse: guardduty.GuardDutyGetFilterResponse = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFilterResponse.property.action"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFilterResponse.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyFindingCriteria`](#aws-cdk-sdk.guardduty.GuardDutyFindingCriteria)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFilterResponse.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFilterResponse.property.description"></a>

- *Type:* `string`

---

##### `rank`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFilterResponse.property.rank"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFilterResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GuardDutyGetFindingsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetFindingsRequest: guardduty.GuardDutyGetFindingsRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsRequest.property.findingIds"></a>

- *Type:* `string`[]

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutySortCriteria`](#aws-cdk-sdk.guardduty.GuardDutySortCriteria)

---

### GuardDutyGetFindingsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetFindingsResponse: guardduty.GuardDutyGetFindingsResponse = { ... }
```

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsResponse.property.findings"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyFinding`](#aws-cdk-sdk.guardduty.GuardDutyFinding)[]

---

### GuardDutyGetFindingsStatisticsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetFindingsStatisticsRequest: guardduty.GuardDutyGetFindingsStatisticsRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `findingStatisticTypes`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsRequest.property.findingStatisticTypes"></a>

- *Type:* `string`[]

---

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyFindingCriteria`](#aws-cdk-sdk.guardduty.GuardDutyFindingCriteria)

---

### GuardDutyGetFindingsStatisticsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetFindingsStatisticsResponse: guardduty.GuardDutyGetFindingsStatisticsResponse = { ... }
```

##### `findingStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsResponse.property.findingStatistics"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyFindingStatistics`](#aws-cdk-sdk.guardduty.GuardDutyFindingStatistics)

---

### GuardDutyGetInvitationsCountRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetInvitationsCountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetInvitationsCountRequest: guardduty.GuardDutyGetInvitationsCountRequest = { ... }
```

### GuardDutyGetInvitationsCountResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetInvitationsCountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetInvitationsCountResponse: guardduty.GuardDutyGetInvitationsCountResponse = { ... }
```

##### `invitationsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetInvitationsCountResponse.property.invitationsCount"></a>

- *Type:* `number`

---

### GuardDutyGetIpSetRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetIpSetRequest: guardduty.GuardDutyGetIpSetRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetIpSetRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetIpSetRequest.property.ipSetId"></a>

- *Type:* `string`

---

### GuardDutyGetIpSetResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetIpSetResponse: guardduty.GuardDutyGetIpSetResponse = { ... }
```

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetIpSetResponse.property.format"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetIpSetResponse.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetIpSetResponse.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetIpSetResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetIpSetResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GuardDutyGetMasterAccountRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetMasterAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetMasterAccountRequest: guardduty.GuardDutyGetMasterAccountRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetMasterAccountRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyGetMasterAccountResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetMasterAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetMasterAccountResponse: guardduty.GuardDutyGetMasterAccountResponse = { ... }
```

##### `master`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetMasterAccountResponse.property.master"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyMaster`](#aws-cdk-sdk.guardduty.GuardDutyMaster)

---

### GuardDutyGetMemberDetectorsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetMemberDetectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetMemberDetectorsRequest: guardduty.GuardDutyGetMemberDetectorsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetMemberDetectorsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetMemberDetectorsRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyGetMemberDetectorsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetMemberDetectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetMemberDetectorsResponse: guardduty.GuardDutyGetMemberDetectorsResponse = { ... }
```

##### `memberDataSourceConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetMemberDetectorsResponse.property.memberDataSourceConfigurations"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyMemberDataSourceConfiguration`](#aws-cdk-sdk.guardduty.GuardDutyMemberDataSourceConfiguration)[]

---

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetMemberDetectorsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyGetMembersRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetMembersRequest: guardduty.GuardDutyGetMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetMembersRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyGetMembersResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetMembersResponse: guardduty.GuardDutyGetMembersResponse = { ... }
```

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetMembersResponse.property.members"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyMember`](#aws-cdk-sdk.guardduty.GuardDutyMember)[]

---

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyGetThreatIntelSetRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetThreatIntelSetRequest: guardduty.GuardDutyGetThreatIntelSetRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `threatIntelSetId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetRequest.property.threatIntelSetId"></a>

- *Type:* `string`

---

### GuardDutyGetThreatIntelSetResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetThreatIntelSetResponse: guardduty.GuardDutyGetThreatIntelSetResponse = { ... }
```

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetResponse.property.format"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetResponse.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetResponse.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GuardDutyGetUsageStatisticsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetUsageStatisticsRequest: guardduty.GuardDutyGetUsageStatisticsRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `usageCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest.property.usageCriteria"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUsageCriteria`](#aws-cdk-sdk.guardduty.GuardDutyUsageCriteria)

---

##### `usageStatisticType`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest.property.usageStatisticType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest.property.unit"></a>

- *Type:* `string`

---

### GuardDutyGetUsageStatisticsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyGetUsageStatisticsResponse: guardduty.GuardDutyGetUsageStatisticsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `usageStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsResponse.property.usageStatistics"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUsageStatistics`](#aws-cdk-sdk.guardduty.GuardDutyUsageStatistics)

---

### GuardDutyIamInstanceProfile <a name="aws-cdk-sdk.guardduty.GuardDutyIamInstanceProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyIamInstanceProfile: guardduty.GuardDutyIamInstanceProfile = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyIamInstanceProfile.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyIamInstanceProfile.property.id"></a>

- *Type:* `string`

---

### GuardDutyInstanceDetails <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyInstanceDetails: guardduty.GuardDutyInstanceDetails = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.availabilityZone"></a>

- *Type:* `string`

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.iamInstanceProfile"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyIamInstanceProfile`](#aws-cdk-sdk.guardduty.GuardDutyIamInstanceProfile)

---

##### `imageDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.imageDescription"></a>

- *Type:* `string`

---

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.imageId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.instanceId"></a>

- *Type:* `string`

---

##### `instanceState`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.instanceState"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.instanceType"></a>

- *Type:* `string`

---

##### `launchTime`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.launchTime"></a>

- *Type:* `string`

---

##### `networkInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.networkInterfaces"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyNetworkInterface`](#aws-cdk-sdk.guardduty.GuardDutyNetworkInterface)[]

---

##### `outpostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.outpostArn"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.platform"></a>

- *Type:* `string`

---

##### `productCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.productCodes"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyProductCode`](#aws-cdk-sdk.guardduty.GuardDutyProductCode)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInstanceDetails.property.tags"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyTag`](#aws-cdk-sdk.guardduty.GuardDutyTag)[]

---

### GuardDutyInvitation <a name="aws-cdk-sdk.guardduty.GuardDutyInvitation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyInvitation: guardduty.GuardDutyInvitation = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInvitation.property.accountId"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInvitation.property.invitationId"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInvitation.property.invitedAt"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInvitation.property.relationshipStatus"></a>

- *Type:* `string`

---

### GuardDutyInviteMembersRequest <a name="aws-cdk-sdk.guardduty.GuardDutyInviteMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyInviteMembersRequest: guardduty.GuardDutyInviteMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInviteMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInviteMembersRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `disableEmailNotification`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInviteMembersRequest.property.disableEmailNotification"></a>

- *Type:* `boolean`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInviteMembersRequest.property.message"></a>

- *Type:* `string`

---

### GuardDutyInviteMembersResponse <a name="aws-cdk-sdk.guardduty.GuardDutyInviteMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyInviteMembersResponse: guardduty.GuardDutyInviteMembersResponse = { ... }
```

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyInviteMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyListDetectorsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyListDetectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListDetectorsRequest: guardduty.GuardDutyListDetectorsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListDetectorsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListDetectorsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListDetectorsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyListDetectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListDetectorsResponse: guardduty.GuardDutyListDetectorsResponse = { ... }
```

##### `detectorIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListDetectorsResponse.property.detectorIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListDetectorsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListFiltersRequest <a name="aws-cdk-sdk.guardduty.GuardDutyListFiltersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListFiltersRequest: guardduty.GuardDutyListFiltersRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFiltersRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFiltersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFiltersRequest.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListFiltersResponse <a name="aws-cdk-sdk.guardduty.GuardDutyListFiltersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListFiltersResponse: guardduty.GuardDutyListFiltersResponse = { ... }
```

##### `filterNames`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFiltersResponse.property.filterNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFiltersResponse.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListFindingsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyListFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListFindingsRequest: guardduty.GuardDutyListFindingsRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFindingsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFindingsRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyFindingCriteria`](#aws-cdk-sdk.guardduty.GuardDutyFindingCriteria)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFindingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFindingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFindingsRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutySortCriteria`](#aws-cdk-sdk.guardduty.GuardDutySortCriteria)

---

### GuardDutyListFindingsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyListFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListFindingsResponse: guardduty.GuardDutyListFindingsResponse = { ... }
```

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFindingsResponse.property.findingIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListFindingsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListInvitationsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyListInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListInvitationsRequest: guardduty.GuardDutyListInvitationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListInvitationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListInvitationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListInvitationsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyListInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListInvitationsResponse: guardduty.GuardDutyListInvitationsResponse = { ... }
```

##### `invitations`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListInvitationsResponse.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyInvitation`](#aws-cdk-sdk.guardduty.GuardDutyInvitation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListInvitationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListIpSetsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyListIpSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListIpSetsRequest: guardduty.GuardDutyListIpSetsRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListIpSetsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListIpSetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListIpSetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListIpSetsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyListIpSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListIpSetsResponse: guardduty.GuardDutyListIpSetsResponse = { ... }
```

##### `ipSetIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListIpSetsResponse.property.ipSetIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListIpSetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListMembersRequest <a name="aws-cdk-sdk.guardduty.GuardDutyListMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListMembersRequest: guardduty.GuardDutyListMembersRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListMembersRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListMembersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListMembersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `onlyAssociated`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListMembersRequest.property.onlyAssociated"></a>

- *Type:* `string`

---

### GuardDutyListMembersResponse <a name="aws-cdk-sdk.guardduty.GuardDutyListMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListMembersResponse: guardduty.GuardDutyListMembersResponse = { ... }
```

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListMembersResponse.property.members"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyMember`](#aws-cdk-sdk.guardduty.GuardDutyMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListMembersResponse.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListOrganizationAdminAccountsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyListOrganizationAdminAccountsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListOrganizationAdminAccountsRequest: guardduty.GuardDutyListOrganizationAdminAccountsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListOrganizationAdminAccountsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListOrganizationAdminAccountsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListOrganizationAdminAccountsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyListOrganizationAdminAccountsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListOrganizationAdminAccountsResponse: guardduty.GuardDutyListOrganizationAdminAccountsResponse = { ... }
```

##### `adminAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListOrganizationAdminAccountsResponse.property.adminAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyAdminAccount`](#aws-cdk-sdk.guardduty.GuardDutyAdminAccount)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListOrganizationAdminAccountsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListPublishingDestinationsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListPublishingDestinationsRequest: guardduty.GuardDutyListPublishingDestinationsRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListPublishingDestinationsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListPublishingDestinationsResponse: guardduty.GuardDutyListPublishingDestinationsResponse = { ... }
```

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsResponse.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDestination`](#aws-cdk-sdk.guardduty.GuardDutyDestination)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListTagsForResourceRequest <a name="aws-cdk-sdk.guardduty.GuardDutyListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListTagsForResourceRequest: guardduty.GuardDutyListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### GuardDutyListTagsForResourceResponse <a name="aws-cdk-sdk.guardduty.GuardDutyListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListTagsForResourceResponse: guardduty.GuardDutyListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GuardDutyListThreatIntelSetsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListThreatIntelSetsRequest: guardduty.GuardDutyListThreatIntelSetsRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyListThreatIntelSetsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyListThreatIntelSetsResponse: guardduty.GuardDutyListThreatIntelSetsResponse = { ... }
```

##### `threatIntelSetIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsResponse.property.threatIntelSetIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GuardDutyLocalIpDetails <a name="aws-cdk-sdk.guardduty.GuardDutyLocalIpDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyLocalIpDetails: guardduty.GuardDutyLocalIpDetails = { ... }
```

##### `ipAddressV4`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyLocalIpDetails.property.ipAddressV4"></a>

- *Type:* `string`

---

### GuardDutyLocalPortDetails <a name="aws-cdk-sdk.guardduty.GuardDutyLocalPortDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyLocalPortDetails: guardduty.GuardDutyLocalPortDetails = { ... }
```

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyLocalPortDetails.property.port"></a>

- *Type:* `number`

---

##### `portName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyLocalPortDetails.property.portName"></a>

- *Type:* `string`

---

### GuardDutyMaster <a name="aws-cdk-sdk.guardduty.GuardDutyMaster"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyMaster: guardduty.GuardDutyMaster = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMaster.property.accountId"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMaster.property.invitationId"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMaster.property.invitedAt"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMaster.property.relationshipStatus"></a>

- *Type:* `string`

---

### GuardDutyMember <a name="aws-cdk-sdk.guardduty.GuardDutyMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyMember: guardduty.GuardDutyMember = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMember.property.accountId"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMember.property.email"></a>

- *Type:* `string`

---

##### `masterId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMember.property.masterId"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMember.property.relationshipStatus"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMember.property.updatedAt"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMember.property.detectorId"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMember.property.invitedAt"></a>

- *Type:* `string`

---

### GuardDutyMemberDataSourceConfiguration <a name="aws-cdk-sdk.guardduty.GuardDutyMemberDataSourceConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyMemberDataSourceConfiguration: guardduty.GuardDutyMemberDataSourceConfiguration = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMemberDataSourceConfiguration.property.accountId"></a>

- *Type:* `string`

---

##### `dataSources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyMemberDataSourceConfiguration.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurationsResult`](#aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurationsResult)

---

### GuardDutyNetworkConnectionAction <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkConnectionAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyNetworkConnectionAction: guardduty.GuardDutyNetworkConnectionAction = { ... }
```

##### `blocked`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkConnectionAction.property.blocked"></a>

- *Type:* `boolean`

---

##### `connectionDirection`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkConnectionAction.property.connectionDirection"></a>

- *Type:* `string`

---

##### `localIpDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkConnectionAction.property.localIpDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyLocalIpDetails`](#aws-cdk-sdk.guardduty.GuardDutyLocalIpDetails)

---

##### `localPortDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkConnectionAction.property.localPortDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyLocalPortDetails`](#aws-cdk-sdk.guardduty.GuardDutyLocalPortDetails)

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkConnectionAction.property.protocol"></a>

- *Type:* `string`

---

##### `remoteIpDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkConnectionAction.property.remoteIpDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails`](#aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails)

---

##### `remotePortDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkConnectionAction.property.remotePortDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyRemotePortDetails`](#aws-cdk-sdk.guardduty.GuardDutyRemotePortDetails)

---

### GuardDutyNetworkInterface <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyNetworkInterface: guardduty.GuardDutyNetworkInterface = { ... }
```

##### `ipv6Addresses`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface.property.ipv6Addresses"></a>

- *Type:* `string`[]

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `privateDnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface.property.privateDnsName"></a>

- *Type:* `string`

---

##### `privateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface.property.privateIpAddress"></a>

- *Type:* `string`

---

##### `privateIpAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface.property.privateIpAddresses"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyPrivateIpAddressDetails`](#aws-cdk-sdk.guardduty.GuardDutyPrivateIpAddressDetails)[]

---

##### `publicDnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface.property.publicDnsName"></a>

- *Type:* `string`

---

##### `publicIp`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface.property.publicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutySecurityGroup`](#aws-cdk-sdk.guardduty.GuardDutySecurityGroup)[]

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface.property.subnetId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyNetworkInterface.property.vpcId"></a>

- *Type:* `string`

---

### GuardDutyOrganization <a name="aws-cdk-sdk.guardduty.GuardDutyOrganization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyOrganization: guardduty.GuardDutyOrganization = { ... }
```

##### `asn`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyOrganization.property.asn"></a>

- *Type:* `string`

---

##### `asnOrg`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyOrganization.property.asnOrg"></a>

- *Type:* `string`

---

##### `isp`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyOrganization.property.isp"></a>

- *Type:* `string`

---

##### `org`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyOrganization.property.org"></a>

- *Type:* `string`

---

### GuardDutyOrganizationDataSourceConfigurations <a name="aws-cdk-sdk.guardduty.GuardDutyOrganizationDataSourceConfigurations"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyOrganizationDataSourceConfigurations: guardduty.GuardDutyOrganizationDataSourceConfigurations = { ... }
```

##### `s3Logs`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyOrganizationDataSourceConfigurations.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyOrganizationS3LogsConfiguration`](#aws-cdk-sdk.guardduty.GuardDutyOrganizationS3LogsConfiguration)

---

### GuardDutyOrganizationDataSourceConfigurationsResult <a name="aws-cdk-sdk.guardduty.GuardDutyOrganizationDataSourceConfigurationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyOrganizationDataSourceConfigurationsResult: guardduty.GuardDutyOrganizationDataSourceConfigurationsResult = { ... }
```

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyOrganizationDataSourceConfigurationsResult.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyOrganizationS3LogsConfigurationResult`](#aws-cdk-sdk.guardduty.GuardDutyOrganizationS3LogsConfigurationResult)

---

### GuardDutyOrganizationS3LogsConfiguration <a name="aws-cdk-sdk.guardduty.GuardDutyOrganizationS3LogsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyOrganizationS3LogsConfiguration: guardduty.GuardDutyOrganizationS3LogsConfiguration = { ... }
```

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyOrganizationS3LogsConfiguration.property.autoEnable"></a>

- *Type:* `boolean`

---

### GuardDutyOrganizationS3LogsConfigurationResult <a name="aws-cdk-sdk.guardduty.GuardDutyOrganizationS3LogsConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyOrganizationS3LogsConfigurationResult: guardduty.GuardDutyOrganizationS3LogsConfigurationResult = { ... }
```

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyOrganizationS3LogsConfigurationResult.property.autoEnable"></a>

- *Type:* `boolean`

---

### GuardDutyOwner <a name="aws-cdk-sdk.guardduty.GuardDutyOwner"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyOwner: guardduty.GuardDutyOwner = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyOwner.property.id"></a>

- *Type:* `string`

---

### GuardDutyPermissionConfiguration <a name="aws-cdk-sdk.guardduty.GuardDutyPermissionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyPermissionConfiguration: guardduty.GuardDutyPermissionConfiguration = { ... }
```

##### `accountLevelPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPermissionConfiguration.property.accountLevelPermissions"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyAccountLevelPermissions`](#aws-cdk-sdk.guardduty.GuardDutyAccountLevelPermissions)

---

##### `bucketLevelPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPermissionConfiguration.property.bucketLevelPermissions"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyBucketLevelPermissions`](#aws-cdk-sdk.guardduty.GuardDutyBucketLevelPermissions)

---

### GuardDutyPortProbeAction <a name="aws-cdk-sdk.guardduty.GuardDutyPortProbeAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyPortProbeAction: guardduty.GuardDutyPortProbeAction = { ... }
```

##### `blocked`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPortProbeAction.property.blocked"></a>

- *Type:* `boolean`

---

##### `portProbeDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPortProbeAction.property.portProbeDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyPortProbeDetail`](#aws-cdk-sdk.guardduty.GuardDutyPortProbeDetail)[]

---

### GuardDutyPortProbeDetail <a name="aws-cdk-sdk.guardduty.GuardDutyPortProbeDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyPortProbeDetail: guardduty.GuardDutyPortProbeDetail = { ... }
```

##### `localIpDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPortProbeDetail.property.localIpDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyLocalIpDetails`](#aws-cdk-sdk.guardduty.GuardDutyLocalIpDetails)

---

##### `localPortDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPortProbeDetail.property.localPortDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyLocalPortDetails`](#aws-cdk-sdk.guardduty.GuardDutyLocalPortDetails)

---

##### `remoteIpDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPortProbeDetail.property.remoteIpDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails`](#aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails)

---

### GuardDutyPrivateIpAddressDetails <a name="aws-cdk-sdk.guardduty.GuardDutyPrivateIpAddressDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyPrivateIpAddressDetails: guardduty.GuardDutyPrivateIpAddressDetails = { ... }
```

##### `privateDnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPrivateIpAddressDetails.property.privateDnsName"></a>

- *Type:* `string`

---

##### `privateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPrivateIpAddressDetails.property.privateIpAddress"></a>

- *Type:* `string`

---

### GuardDutyProductCode <a name="aws-cdk-sdk.guardduty.GuardDutyProductCode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyProductCode: guardduty.GuardDutyProductCode = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyProductCode.property.code"></a>

- *Type:* `string`

---

##### `productType`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyProductCode.property.productType"></a>

- *Type:* `string`

---

### GuardDutyPublicAccess <a name="aws-cdk-sdk.guardduty.GuardDutyPublicAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyPublicAccess: guardduty.GuardDutyPublicAccess = { ... }
```

##### `effectivePermission`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPublicAccess.property.effectivePermission"></a>

- *Type:* `string`

---

##### `permissionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyPublicAccess.property.permissionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyPermissionConfiguration`](#aws-cdk-sdk.guardduty.GuardDutyPermissionConfiguration)

---

### GuardDutyRemoteIpDetails <a name="aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyRemoteIpDetails: guardduty.GuardDutyRemoteIpDetails = { ... }
```

##### `city`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails.property.city"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCity`](#aws-cdk-sdk.guardduty.GuardDutyCity)

---

##### `country`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails.property.country"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCountry`](#aws-cdk-sdk.guardduty.GuardDutyCountry)

---

##### `geoLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails.property.geoLocation"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGeoLocation`](#aws-cdk-sdk.guardduty.GuardDutyGeoLocation)

---

##### `ipAddressV4`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails.property.ipAddressV4"></a>

- *Type:* `string`

---

##### `organization`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyRemoteIpDetails.property.organization"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyOrganization`](#aws-cdk-sdk.guardduty.GuardDutyOrganization)

---

### GuardDutyRemotePortDetails <a name="aws-cdk-sdk.guardduty.GuardDutyRemotePortDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyRemotePortDetails: guardduty.GuardDutyRemotePortDetails = { ... }
```

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyRemotePortDetails.property.port"></a>

- *Type:* `number`

---

##### `portName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyRemotePortDetails.property.portName"></a>

- *Type:* `string`

---

### GuardDutyResource <a name="aws-cdk-sdk.guardduty.GuardDutyResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyResource: guardduty.GuardDutyResource = { ... }
```

##### `accessKeyDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResource.property.accessKeyDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyAccessKeyDetails`](#aws-cdk-sdk.guardduty.GuardDutyAccessKeyDetails)

---

##### `instanceDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResource.property.instanceDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyInstanceDetails`](#aws-cdk-sdk.guardduty.GuardDutyInstanceDetails)

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResource.property.resourceType"></a>

- *Type:* `string`

---

##### `s3BucketDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResource.property.s3BucketDetails"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail`](#aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail)[]

---

### GuardDutyS3BucketDetail <a name="aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyS3BucketDetail: guardduty.GuardDutyS3BucketDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail.property.createdAt"></a>

- *Type:* `string`

---

##### `defaultServerSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail.property.defaultServerSideEncryption"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDefaultServerSideEncryption`](#aws-cdk-sdk.guardduty.GuardDutyDefaultServerSideEncryption)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail.property.owner"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyOwner`](#aws-cdk-sdk.guardduty.GuardDutyOwner)

---

##### `publicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail.property.publicAccess"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyPublicAccess`](#aws-cdk-sdk.guardduty.GuardDutyPublicAccess)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail.property.tags"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyTag`](#aws-cdk-sdk.guardduty.GuardDutyTag)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyS3BucketDetail.property.type"></a>

- *Type:* `string`

---

### GuardDutyS3LogsConfiguration <a name="aws-cdk-sdk.guardduty.GuardDutyS3LogsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyS3LogsConfiguration: guardduty.GuardDutyS3LogsConfiguration = { ... }
```

##### `enable`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyS3LogsConfiguration.property.enable"></a>

- *Type:* `boolean`

---

### GuardDutyS3LogsConfigurationResult <a name="aws-cdk-sdk.guardduty.GuardDutyS3LogsConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyS3LogsConfigurationResult: guardduty.GuardDutyS3LogsConfigurationResult = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyS3LogsConfigurationResult.property.status"></a>

- *Type:* `string`

---

### GuardDutySecurityGroup <a name="aws-cdk-sdk.guardduty.GuardDutySecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutySecurityGroup: guardduty.GuardDutySecurityGroup = { ... }
```

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutySecurityGroup.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutySecurityGroup.property.groupName"></a>

- *Type:* `string`

---

### GuardDutyService <a name="aws-cdk-sdk.guardduty.GuardDutyService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyService: guardduty.GuardDutyService = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyService.property.action"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyAction`](#aws-cdk-sdk.guardduty.GuardDutyAction)

---

##### `archived`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyService.property.archived"></a>

- *Type:* `boolean`

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyService.property.count"></a>

- *Type:* `number`

---

##### `detectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyService.property.detectorId"></a>

- *Type:* `string`

---

##### `eventFirstSeen`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyService.property.eventFirstSeen"></a>

- *Type:* `string`

---

##### `eventLastSeen`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyService.property.eventLastSeen"></a>

- *Type:* `string`

---

##### `evidence`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyService.property.evidence"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyEvidence`](#aws-cdk-sdk.guardduty.GuardDutyEvidence)

---

##### `resourceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyService.property.resourceRole"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyService.property.serviceName"></a>

- *Type:* `string`

---

##### `userFeedback`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyService.property.userFeedback"></a>

- *Type:* `string`

---

### GuardDutySortCriteria <a name="aws-cdk-sdk.guardduty.GuardDutySortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutySortCriteria: guardduty.GuardDutySortCriteria = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutySortCriteria.property.attributeName"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutySortCriteria.property.orderBy"></a>

- *Type:* `string`

---

### GuardDutyStartMonitoringMembersRequest <a name="aws-cdk-sdk.guardduty.GuardDutyStartMonitoringMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyStartMonitoringMembersRequest: guardduty.GuardDutyStartMonitoringMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyStartMonitoringMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyStartMonitoringMembersRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyStartMonitoringMembersResponse <a name="aws-cdk-sdk.guardduty.GuardDutyStartMonitoringMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyStartMonitoringMembersResponse: guardduty.GuardDutyStartMonitoringMembersResponse = { ... }
```

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyStartMonitoringMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyStopMonitoringMembersRequest <a name="aws-cdk-sdk.guardduty.GuardDutyStopMonitoringMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyStopMonitoringMembersRequest: guardduty.GuardDutyStopMonitoringMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyStopMonitoringMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyStopMonitoringMembersRequest.property.detectorId"></a>

- *Type:* `string`

---

### GuardDutyStopMonitoringMembersResponse <a name="aws-cdk-sdk.guardduty.GuardDutyStopMonitoringMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyStopMonitoringMembersResponse: guardduty.GuardDutyStopMonitoringMembersResponse = { ... }
```

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyStopMonitoringMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyTag <a name="aws-cdk-sdk.guardduty.GuardDutyTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyTag: guardduty.GuardDutyTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyTag.property.value"></a>

- *Type:* `string`

---

### GuardDutyTagResourceRequest <a name="aws-cdk-sdk.guardduty.GuardDutyTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyTagResourceRequest: guardduty.GuardDutyTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GuardDutyTagResourceResponse <a name="aws-cdk-sdk.guardduty.GuardDutyTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyTagResourceResponse: guardduty.GuardDutyTagResourceResponse = { ... }
```

### GuardDutyThreatIntelligenceDetail <a name="aws-cdk-sdk.guardduty.GuardDutyThreatIntelligenceDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyThreatIntelligenceDetail: guardduty.GuardDutyThreatIntelligenceDetail = { ... }
```

##### `threatListName`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyThreatIntelligenceDetail.property.threatListName"></a>

- *Type:* `string`

---

##### `threatNames`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyThreatIntelligenceDetail.property.threatNames"></a>

- *Type:* `string`[]

---

### GuardDutyTotal <a name="aws-cdk-sdk.guardduty.GuardDutyTotal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyTotal: guardduty.GuardDutyTotal = { ... }
```

##### `amount`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyTotal.property.amount"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyTotal.property.unit"></a>

- *Type:* `string`

---

### GuardDutyUnarchiveFindingsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyUnarchiveFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUnarchiveFindingsRequest: guardduty.GuardDutyUnarchiveFindingsRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUnarchiveFindingsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUnarchiveFindingsRequest.property.findingIds"></a>

- *Type:* `string`[]

---

### GuardDutyUnarchiveFindingsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyUnarchiveFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUnarchiveFindingsResponse: guardduty.GuardDutyUnarchiveFindingsResponse = { ... }
```

### GuardDutyUnprocessedAccount <a name="aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUnprocessedAccount: guardduty.GuardDutyUnprocessedAccount = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount.property.accountId"></a>

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount.property.result"></a>

- *Type:* `string`

---

### GuardDutyUntagResourceRequest <a name="aws-cdk-sdk.guardduty.GuardDutyUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUntagResourceRequest: guardduty.GuardDutyUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### GuardDutyUntagResourceResponse <a name="aws-cdk-sdk.guardduty.GuardDutyUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUntagResourceResponse: guardduty.GuardDutyUntagResourceResponse = { ... }
```

### GuardDutyUpdateDetectorRequest <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateDetectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateDetectorRequest: guardduty.GuardDutyUpdateDetectorRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateDetectorRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateDetectorRequest.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurations`](#aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurations)

---

##### `enable`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateDetectorRequest.property.enable"></a>

- *Type:* `boolean`

---

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateDetectorRequest.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

### GuardDutyUpdateDetectorResponse <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateDetectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateDetectorResponse: guardduty.GuardDutyUpdateDetectorResponse = { ... }
```

### GuardDutyUpdateFilterRequest <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateFilterRequest: guardduty.GuardDutyUpdateFilterRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `filterName`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest.property.filterName"></a>

- *Type:* `string`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest.property.action"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest.property.description"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyFindingCriteria`](#aws-cdk-sdk.guardduty.GuardDutyFindingCriteria)

---

##### `rank`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest.property.rank"></a>

- *Type:* `number`

---

### GuardDutyUpdateFilterResponse <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateFilterResponse: guardduty.GuardDutyUpdateFilterResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFilterResponse.property.name"></a>

- *Type:* `string`

---

### GuardDutyUpdateFindingsFeedbackRequest <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFindingsFeedbackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateFindingsFeedbackRequest: guardduty.GuardDutyUpdateFindingsFeedbackRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFindingsFeedbackRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `feedback`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFindingsFeedbackRequest.property.feedback"></a>

- *Type:* `string`

---

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFindingsFeedbackRequest.property.findingIds"></a>

- *Type:* `string`[]

---

##### `comments`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFindingsFeedbackRequest.property.comments"></a>

- *Type:* `string`

---

### GuardDutyUpdateFindingsFeedbackResponse <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateFindingsFeedbackResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateFindingsFeedbackResponse: guardduty.GuardDutyUpdateFindingsFeedbackResponse = { ... }
```

### GuardDutyUpdateIpSetRequest <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateIpSetRequest: guardduty.GuardDutyUpdateIpSetRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateIpSetRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateIpSetRequest.property.ipSetId"></a>

- *Type:* `string`

---

##### `activate`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateIpSetRequest.property.activate"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateIpSetRequest.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateIpSetRequest.property.name"></a>

- *Type:* `string`

---

### GuardDutyUpdateIpSetResponse <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateIpSetResponse: guardduty.GuardDutyUpdateIpSetResponse = { ... }
```

### GuardDutyUpdateMemberDetectorsRequest <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateMemberDetectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateMemberDetectorsRequest: guardduty.GuardDutyUpdateMemberDetectorsRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateMemberDetectorsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateMemberDetectorsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateMemberDetectorsRequest.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurations`](#aws-cdk-sdk.guardduty.GuardDutyDataSourceConfigurations)

---

### GuardDutyUpdateMemberDetectorsResponse <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateMemberDetectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateMemberDetectorsResponse: guardduty.GuardDutyUpdateMemberDetectorsResponse = { ... }
```

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateMemberDetectorsResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---

### GuardDutyUpdateOrganizationConfigurationRequest <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateOrganizationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateOrganizationConfigurationRequest: guardduty.GuardDutyUpdateOrganizationConfigurationRequest = { ... }
```

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateOrganizationConfigurationRequest.property.autoEnable"></a>

- *Type:* `boolean`

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateOrganizationConfigurationRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateOrganizationConfigurationRequest.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyOrganizationDataSourceConfigurations`](#aws-cdk-sdk.guardduty.GuardDutyOrganizationDataSourceConfigurations)

---

### GuardDutyUpdateOrganizationConfigurationResponse <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateOrganizationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateOrganizationConfigurationResponse: guardduty.GuardDutyUpdateOrganizationConfigurationResponse = { ... }
```

### GuardDutyUpdatePublishingDestinationRequest <a name="aws-cdk-sdk.guardduty.GuardDutyUpdatePublishingDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdatePublishingDestinationRequest: guardduty.GuardDutyUpdatePublishingDestinationRequest = { ... }
```

##### `destinationId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdatePublishingDestinationRequest.property.destinationId"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdatePublishingDestinationRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `destinationProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdatePublishingDestinationRequest.property.destinationProperties"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDestinationProperties`](#aws-cdk-sdk.guardduty.GuardDutyDestinationProperties)

---

### GuardDutyUpdatePublishingDestinationResponse <a name="aws-cdk-sdk.guardduty.GuardDutyUpdatePublishingDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdatePublishingDestinationResponse: guardduty.GuardDutyUpdatePublishingDestinationResponse = { ... }
```

### GuardDutyUpdateThreatIntelSetRequest <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateThreatIntelSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateThreatIntelSetRequest: guardduty.GuardDutyUpdateThreatIntelSetRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateThreatIntelSetRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `threatIntelSetId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateThreatIntelSetRequest.property.threatIntelSetId"></a>

- *Type:* `string`

---

##### `activate`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateThreatIntelSetRequest.property.activate"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateThreatIntelSetRequest.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateThreatIntelSetRequest.property.name"></a>

- *Type:* `string`

---

### GuardDutyUpdateThreatIntelSetResponse <a name="aws-cdk-sdk.guardduty.GuardDutyUpdateThreatIntelSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUpdateThreatIntelSetResponse: guardduty.GuardDutyUpdateThreatIntelSetResponse = { ... }
```

### GuardDutyUsageAccountResult <a name="aws-cdk-sdk.guardduty.GuardDutyUsageAccountResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUsageAccountResult: guardduty.GuardDutyUsageAccountResult = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageAccountResult.property.accountId"></a>

- *Type:* `string`

---

##### `total`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageAccountResult.property.total"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyTotal`](#aws-cdk-sdk.guardduty.GuardDutyTotal)

---

### GuardDutyUsageCriteria <a name="aws-cdk-sdk.guardduty.GuardDutyUsageCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUsageCriteria: guardduty.GuardDutyUsageCriteria = { ... }
```

##### `dataSources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageCriteria.property.dataSources"></a>

- *Type:* `string`[]

---

##### `accountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageCriteria.property.accountIds"></a>

- *Type:* `string`[]

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageCriteria.property.resources"></a>

- *Type:* `string`[]

---

### GuardDutyUsageDataSourceResult <a name="aws-cdk-sdk.guardduty.GuardDutyUsageDataSourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUsageDataSourceResult: guardduty.GuardDutyUsageDataSourceResult = { ... }
```

##### `dataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageDataSourceResult.property.dataSource"></a>

- *Type:* `string`

---

##### `total`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageDataSourceResult.property.total"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyTotal`](#aws-cdk-sdk.guardduty.GuardDutyTotal)

---

### GuardDutyUsageResourceResult <a name="aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUsageResourceResult: guardduty.GuardDutyUsageResourceResult = { ... }
```

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult.property.resource"></a>

- *Type:* `string`

---

##### `total`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult.property.total"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyTotal`](#aws-cdk-sdk.guardduty.GuardDutyTotal)

---

### GuardDutyUsageStatistics <a name="aws-cdk-sdk.guardduty.GuardDutyUsageStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

const guardDutyUsageStatistics: guardduty.GuardDutyUsageStatistics = { ... }
```

##### `sumByAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageStatistics.property.sumByAccount"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUsageAccountResult`](#aws-cdk-sdk.guardduty.GuardDutyUsageAccountResult)[]

---

##### `sumByDataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageStatistics.property.sumByDataSource"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUsageDataSourceResult`](#aws-cdk-sdk.guardduty.GuardDutyUsageDataSourceResult)[]

---

##### `sumByResource`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageStatistics.property.sumByResource"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult`](#aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult)[]

---

##### `topResources`<sup>Optional</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyUsageStatistics.property.topResources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult`](#aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult)[]

---

## Classes <a name="Classes"></a>

### GuardDutyResponsesCreateDetector <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateDetector"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateDetector.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesCreateDetector(__scope: Construct, __resources: string[], __input: GuardDutyCreateDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateDetector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateDetector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateDetector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateDetector.property.detectorId"></a>

- *Type:* `string`

---


### GuardDutyResponsesCreateFilter <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateFilter"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateFilter.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesCreateFilter(__scope: Construct, __resources: string[], __input: GuardDutyCreateFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateFilter.property.name"></a>

- *Type:* `string`

---


### GuardDutyResponsesCreateIpSet <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateIpSet.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesCreateIpSet(__scope: Construct, __resources: string[], __input: GuardDutyCreateIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateIpSet.property.ipSetId"></a>

- *Type:* `string`

---


### GuardDutyResponsesCreateMembers <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateMembers"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateMembers.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesCreateMembers(__scope: Construct, __resources: string[], __input: GuardDutyCreateMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---


### GuardDutyResponsesCreatePublishingDestination <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreatePublishingDestination"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreatePublishingDestination.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesCreatePublishingDestination(__scope: Construct, __resources: string[], __input: GuardDutyCreatePublishingDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreatePublishingDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreatePublishingDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreatePublishingDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreatePublishingDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreatePublishingDestination.property.destinationId"></a>

- *Type:* `string`

---


### GuardDutyResponsesCreateThreatIntelSet <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateThreatIntelSet"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateThreatIntelSet.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesCreateThreatIntelSet(__scope: Construct, __resources: string[], __input: GuardDutyCreateThreatIntelSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateThreatIntelSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateThreatIntelSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateThreatIntelSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyCreateThreatIntelSetRequest)

---



#### Properties <a name="Properties"></a>

##### `threatIntelSetId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesCreateThreatIntelSet.property.threatIntelSetId"></a>

- *Type:* `string`

---


### GuardDutyResponsesDeclineInvitations <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeclineInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeclineInvitations.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesDeclineInvitations(__scope: Construct, __resources: string[], __input: GuardDutyDeclineInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeclineInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeclineInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeclineInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeclineInvitationsRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeclineInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeclineInvitations.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---


### GuardDutyResponsesDeleteInvitations <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteInvitations.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesDeleteInvitations(__scope: Construct, __resources: string[], __input: GuardDutyDeleteInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeleteInvitationsRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeleteInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteInvitations.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---


### GuardDutyResponsesDeleteMembers <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteMembers"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteMembers.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesDeleteMembers(__scope: Construct, __resources: string[], __input: GuardDutyDeleteMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDeleteMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyDeleteMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDeleteMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---


### GuardDutyResponsesDescribeOrganizationConfiguration <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfiguration.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesDescribeOrganizationConfiguration(__scope: Construct, __resources: string[], __input: GuardDutyDescribeOrganizationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationRequest`](#aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfiguration.property.autoEnable"></a>

- *Type:* `boolean`

---

##### `dataSources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfiguration.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSources`](#aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSources)

---

##### `memberAccountLimitReached`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfiguration.property.memberAccountLimitReached"></a>

- *Type:* `boolean`

---


### GuardDutyResponsesDescribeOrganizationConfigurationDataSources <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSources"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSources.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSources(__scope: Construct, __resources: string[], __input: GuardDutyDescribeOrganizationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationRequest`](#aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSources.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs`](#aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs)

---


### GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs(__scope: Construct, __resources: string[], __input: GuardDutyDescribeOrganizationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationRequest`](#aws-cdk-sdk.guardduty.GuardDutyDescribeOrganizationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `autoEnable`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs.property.autoEnable"></a>

- *Type:* `boolean`

---


### GuardDutyResponsesDescribePublishingDestination <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestination"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestination.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesDescribePublishingDestination(__scope: Construct, __resources: string[], __input: GuardDutyDescribePublishingDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationRequest`](#aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestination.property.destinationId"></a>

- *Type:* `string`

---

##### `destinationProperties`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestination.property.destinationProperties"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestinationDestinationProperties`](#aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestinationDestinationProperties)

---

##### `destinationType`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestination.property.destinationType"></a>

- *Type:* `string`

---

##### `publishingFailureStartTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestination.property.publishingFailureStartTimestamp"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestination.property.status"></a>

- *Type:* `string`

---


### GuardDutyResponsesDescribePublishingDestinationDestinationProperties <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestinationDestinationProperties"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestinationDestinationProperties.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesDescribePublishingDestinationDestinationProperties(__scope: Construct, __resources: string[], __input: GuardDutyDescribePublishingDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestinationDestinationProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestinationDestinationProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestinationDestinationProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationRequest`](#aws-cdk-sdk.guardduty.GuardDutyDescribePublishingDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestinationDestinationProperties.property.destinationArn"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDescribePublishingDestinationDestinationProperties.property.kmsKeyArn"></a>

- *Type:* `string`

---


### GuardDutyResponsesDisassociateMembers <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDisassociateMembers"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDisassociateMembers.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesDisassociateMembers(__scope: Construct, __resources: string[], __input: GuardDutyDisassociateMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDisassociateMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDisassociateMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDisassociateMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDisassociateMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyDisassociateMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesDisassociateMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---


### GuardDutyResponsesFetchDetector <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchDetector(__scope: Construct, __resources: string[], __input: GuardDutyGetDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources`](#aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources)

---

##### `findingPublishingFrequency`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.property.findingPublishingFrequency"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.property.serviceRole"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetector.property.updatedAt"></a>

- *Type:* `string`

---


### GuardDutyResponsesFetchDetectorDataSources <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchDetectorDataSources(__scope: Construct, __resources: string[], __input: GuardDutyGetDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudTrail`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources.property.cloudTrail"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesCloudTrail`](#aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesCloudTrail)

---

##### `dnsLogs`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources.property.dnsLogs"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesDnsLogs`](#aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesDnsLogs)

---

##### `flowLogs`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources.property.flowLogs"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesFlowLogs`](#aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesFlowLogs)

---

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSources.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesS3Logs`](#aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesS3Logs)

---


### GuardDutyResponsesFetchDetectorDataSourcesCloudTrail <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesCloudTrail"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesCloudTrail.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchDetectorDataSourcesCloudTrail(__scope: Construct, __resources: string[], __input: GuardDutyGetDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesCloudTrail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesCloudTrail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesCloudTrail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesCloudTrail.property.status"></a>

- *Type:* `string`

---


### GuardDutyResponsesFetchDetectorDataSourcesDnsLogs <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesDnsLogs"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesDnsLogs.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchDetectorDataSourcesDnsLogs(__scope: Construct, __resources: string[], __input: GuardDutyGetDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesDnsLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesDnsLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesDnsLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesDnsLogs.property.status"></a>

- *Type:* `string`

---


### GuardDutyResponsesFetchDetectorDataSourcesFlowLogs <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesFlowLogs"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesFlowLogs.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchDetectorDataSourcesFlowLogs(__scope: Construct, __resources: string[], __input: GuardDutyGetDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesFlowLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesFlowLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesFlowLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesFlowLogs.property.status"></a>

- *Type:* `string`

---


### GuardDutyResponsesFetchDetectorDataSourcesS3Logs <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesS3Logs.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchDetectorDataSourcesS3Logs(__scope: Construct, __resources: string[], __input: GuardDutyGetDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchDetectorDataSourcesS3Logs.property.status"></a>

- *Type:* `string`

---


### GuardDutyResponsesFetchFilter <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchFilter(__scope: Construct, __resources: string[], __input: GuardDutyGetFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetFilterRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter.property.action"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter.property.description"></a>

- *Type:* `string`

---

##### `findingCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter.property.findingCriteria"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilterFindingCriteria`](#aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilterFindingCriteria)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter.property.name"></a>

- *Type:* `string`

---

##### `rank`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter.property.rank"></a>

- *Type:* `number`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilter.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GuardDutyResponsesFetchFilterFindingCriteria <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilterFindingCriteria"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilterFindingCriteria.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchFilterFindingCriteria(__scope: Construct, __resources: string[], __input: GuardDutyGetFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilterFindingCriteria.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilterFindingCriteria.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilterFindingCriteria.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetFilterRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `criterion`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFilterFindingCriteria.property.criterion"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.guardduty.GuardDutyCondition`](#aws-cdk-sdk.guardduty.GuardDutyCondition)}

---


### GuardDutyResponsesFetchFindings <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindings"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindings.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchFindings(__scope: Construct, __resources: string[], __input: GuardDutyGetFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetFindingsRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindings.property.findings"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyFinding`](#aws-cdk-sdk.guardduty.GuardDutyFinding)[]

---


### GuardDutyResponsesFetchFindingsStatistics <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatistics.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchFindingsStatistics(__scope: Construct, __resources: string[], __input: GuardDutyGetFindingsStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `findingStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatistics.property.findingStatistics"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatisticsFindingStatistics`](#aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatisticsFindingStatistics)

---


### GuardDutyResponsesFetchFindingsStatisticsFindingStatistics <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatisticsFindingStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatisticsFindingStatistics.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchFindingsStatisticsFindingStatistics(__scope: Construct, __resources: string[], __input: GuardDutyGetFindingsStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatisticsFindingStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatisticsFindingStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatisticsFindingStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetFindingsStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `countBySeverity`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchFindingsStatisticsFindingStatistics.property.countBySeverity"></a>

- *Type:* {[ key: string ]: `number`}

---


### GuardDutyResponsesFetchInvitationsCount <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchInvitationsCount"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchInvitationsCount.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchInvitationsCount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchInvitationsCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchInvitationsCount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `invitationsCount`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchInvitationsCount.property.invitationsCount"></a>

- *Type:* `number`

---


### GuardDutyResponsesFetchIpSet <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchIpSet.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchIpSet(__scope: Construct, __resources: string[], __input: GuardDutyGetIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetIpSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchIpSet.property.format"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchIpSet.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchIpSet.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchIpSet.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchIpSet.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GuardDutyResponsesFetchMasterAccount <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccount"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccount.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchMasterAccount(__scope: Construct, __resources: string[], __input: GuardDutyGetMasterAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetMasterAccountRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetMasterAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `master`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccount.property.master"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster`](#aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster)

---


### GuardDutyResponsesFetchMasterAccountMaster <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchMasterAccountMaster(__scope: Construct, __resources: string[], __input: GuardDutyGetMasterAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetMasterAccountRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetMasterAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster.property.accountId"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster.property.invitationId"></a>

- *Type:* `string`

---

##### `invitedAt`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster.property.invitedAt"></a>

- *Type:* `string`

---

##### `relationshipStatus`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMasterAccountMaster.property.relationshipStatus"></a>

- *Type:* `string`

---


### GuardDutyResponsesFetchMemberDetectors <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMemberDetectors"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMemberDetectors.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchMemberDetectors(__scope: Construct, __resources: string[], __input: GuardDutyGetMemberDetectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMemberDetectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMemberDetectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMemberDetectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetMemberDetectorsRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetMemberDetectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `memberDataSourceConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMemberDetectors.property.memberDataSourceConfigurations"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyMemberDataSourceConfiguration`](#aws-cdk-sdk.guardduty.GuardDutyMemberDataSourceConfiguration)[]

---

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMemberDetectors.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---


### GuardDutyResponsesFetchMembers <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMembers"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMembers.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchMembers(__scope: Construct, __resources: string[], __input: GuardDutyGetMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMembers.property.members"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyMember`](#aws-cdk-sdk.guardduty.GuardDutyMember)[]

---

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---


### GuardDutyResponsesFetchThreatIntelSet <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchThreatIntelSet"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchThreatIntelSet.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchThreatIntelSet(__scope: Construct, __resources: string[], __input: GuardDutyGetThreatIntelSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchThreatIntelSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchThreatIntelSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchThreatIntelSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetThreatIntelSetRequest)

---



#### Properties <a name="Properties"></a>

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchThreatIntelSet.property.format"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchThreatIntelSet.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchThreatIntelSet.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchThreatIntelSet.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchThreatIntelSet.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GuardDutyResponsesFetchUsageStatistics <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatistics.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchUsageStatistics(__scope: Construct, __resources: string[], __input: GuardDutyGetUsageStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatistics.property.nextToken"></a>

- *Type:* `string`

---

##### `usageStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatistics.property.usageStatistics"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics`](#aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics)

---


### GuardDutyResponsesFetchUsageStatisticsUsageStatistics <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics(__scope: Construct, __resources: string[], __input: GuardDutyGetUsageStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest`](#aws-cdk-sdk.guardduty.GuardDutyGetUsageStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `sumByAccount`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics.property.sumByAccount"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUsageAccountResult`](#aws-cdk-sdk.guardduty.GuardDutyUsageAccountResult)[]

---

##### `sumByDataSource`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics.property.sumByDataSource"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUsageDataSourceResult`](#aws-cdk-sdk.guardduty.GuardDutyUsageDataSourceResult)[]

---

##### `sumByResource`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics.property.sumByResource"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult`](#aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult)[]

---

##### `topResources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesFetchUsageStatisticsUsageStatistics.property.topResources"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult`](#aws-cdk-sdk.guardduty.GuardDutyUsageResourceResult)[]

---


### GuardDutyResponsesInviteMembers <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesInviteMembers"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesInviteMembers.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesInviteMembers(__scope: Construct, __resources: string[], __input: GuardDutyInviteMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesInviteMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesInviteMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesInviteMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyInviteMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyInviteMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesInviteMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---


### GuardDutyResponsesListDetectors <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListDetectors"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListDetectors.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesListDetectors(__scope: Construct, __resources: string[], __input: GuardDutyListDetectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListDetectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListDetectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListDetectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListDetectorsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListDetectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListDetectors.property.detectorIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListDetectors.property.nextToken"></a>

- *Type:* `string`

---


### GuardDutyResponsesListFilters <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFilters"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFilters.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesListFilters(__scope: Construct, __resources: string[], __input: GuardDutyListFiltersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFilters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFilters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFilters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListFiltersRequest`](#aws-cdk-sdk.guardduty.GuardDutyListFiltersRequest)

---



#### Properties <a name="Properties"></a>

##### `filterNames`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFilters.property.filterNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFilters.property.nextToken"></a>

- *Type:* `string`

---


### GuardDutyResponsesListFindings <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFindings"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFindings.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesListFindings(__scope: Construct, __resources: string[], __input: GuardDutyListFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListFindingsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFindings.property.findingIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListFindings.property.nextToken"></a>

- *Type:* `string`

---


### GuardDutyResponsesListInvitations <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListInvitations.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesListInvitations(__scope: Construct, __resources: string[], __input: GuardDutyListInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListInvitationsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `invitations`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListInvitations.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyInvitation`](#aws-cdk-sdk.guardduty.GuardDutyInvitation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListInvitations.property.nextToken"></a>

- *Type:* `string`

---


### GuardDutyResponsesListIpSets <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListIpSets"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListIpSets.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesListIpSets(__scope: Construct, __resources: string[], __input: GuardDutyListIpSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListIpSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListIpSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListIpSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListIpSetsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListIpSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSetIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListIpSets.property.ipSetIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListIpSets.property.nextToken"></a>

- *Type:* `string`

---


### GuardDutyResponsesListMembers <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListMembers"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListMembers.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesListMembers(__scope: Construct, __resources: string[], __input: GuardDutyListMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyListMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListMembers.property.members"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyMember`](#aws-cdk-sdk.guardduty.GuardDutyMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListMembers.property.nextToken"></a>

- *Type:* `string`

---


### GuardDutyResponsesListOrganizationAdminAccounts <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListOrganizationAdminAccounts"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListOrganizationAdminAccounts.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesListOrganizationAdminAccounts(__scope: Construct, __resources: string[], __input: GuardDutyListOrganizationAdminAccountsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListOrganizationAdminAccounts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListOrganizationAdminAccounts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListOrganizationAdminAccounts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListOrganizationAdminAccountsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListOrganizationAdminAccountsRequest)

---



#### Properties <a name="Properties"></a>

##### `adminAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListOrganizationAdminAccounts.property.adminAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyAdminAccount`](#aws-cdk-sdk.guardduty.GuardDutyAdminAccount)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListOrganizationAdminAccounts.property.nextToken"></a>

- *Type:* `string`

---


### GuardDutyResponsesListPublishingDestinations <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListPublishingDestinations"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListPublishingDestinations.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesListPublishingDestinations(__scope: Construct, __resources: string[], __input: GuardDutyListPublishingDestinationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListPublishingDestinations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListPublishingDestinations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListPublishingDestinations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListPublishingDestinationsRequest)

---



#### Properties <a name="Properties"></a>

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListPublishingDestinations.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyDestination`](#aws-cdk-sdk.guardduty.GuardDutyDestination)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListPublishingDestinations.property.nextToken"></a>

- *Type:* `string`

---


### GuardDutyResponsesListTagsForResource <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListTagsForResource.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: GuardDutyListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListTagsForResourceRequest`](#aws-cdk-sdk.guardduty.GuardDutyListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GuardDutyResponsesListThreatIntelSets <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListThreatIntelSets"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListThreatIntelSets.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesListThreatIntelSets(__scope: Construct, __resources: string[], __input: GuardDutyListThreatIntelSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListThreatIntelSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListThreatIntelSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListThreatIntelSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsRequest`](#aws-cdk-sdk.guardduty.GuardDutyListThreatIntelSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListThreatIntelSets.property.nextToken"></a>

- *Type:* `string`

---

##### `threatIntelSetIds`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesListThreatIntelSets.property.threatIntelSetIds"></a>

- *Type:* `string`[]

---


### GuardDutyResponsesStartMonitoringMembers <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStartMonitoringMembers"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStartMonitoringMembers.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesStartMonitoringMembers(__scope: Construct, __resources: string[], __input: GuardDutyStartMonitoringMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStartMonitoringMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStartMonitoringMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStartMonitoringMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyStartMonitoringMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyStartMonitoringMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStartMonitoringMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---


### GuardDutyResponsesStopMonitoringMembers <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStopMonitoringMembers"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStopMonitoringMembers.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesStopMonitoringMembers(__scope: Construct, __resources: string[], __input: GuardDutyStopMonitoringMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStopMonitoringMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStopMonitoringMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStopMonitoringMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyStopMonitoringMembersRequest`](#aws-cdk-sdk.guardduty.GuardDutyStopMonitoringMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesStopMonitoringMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---


### GuardDutyResponsesUpdateFilter <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateFilter"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateFilter.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesUpdateFilter(__scope: Construct, __resources: string[], __input: GuardDutyUpdateFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest`](#aws-cdk-sdk.guardduty.GuardDutyUpdateFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateFilter.property.name"></a>

- *Type:* `string`

---


### GuardDutyResponsesUpdateMemberDetectors <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateMemberDetectors"></a>

#### Initializer <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateMemberDetectors.Initializer"></a>

```typescript
import { guardduty } from 'aws-cdk-sdk'

new guardduty.GuardDutyResponsesUpdateMemberDetectors(__scope: Construct, __resources: string[], __input: GuardDutyUpdateMemberDetectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateMemberDetectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateMemberDetectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateMemberDetectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUpdateMemberDetectorsRequest`](#aws-cdk-sdk.guardduty.GuardDutyUpdateMemberDetectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.guardduty.GuardDutyResponsesUpdateMemberDetectors.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount`](#aws-cdk-sdk.guardduty.GuardDutyUnprocessedAccount)[]

---



