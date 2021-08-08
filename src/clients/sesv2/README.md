# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Sesv2Client <a name="aws-cdk-sdk.sesv2.Sesv2Client"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.Sesv2Client.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.Sesv2Client(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createConfigurationSet` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createConfigurationSet"></a>

```typescript
public createConfigurationSet(input: Sesv2CreateConfigurationSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetRequest)

---

##### `createConfigurationSetEventDestination` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createConfigurationSetEventDestination"></a>

```typescript
public createConfigurationSetEventDestination(input: Sesv2CreateConfigurationSetEventDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetEventDestinationRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetEventDestinationRequest)

---

##### `createContact` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createContact"></a>

```typescript
public createContact(input: Sesv2CreateContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateContactRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateContactRequest)

---

##### `createContactList` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createContactList"></a>

```typescript
public createContactList(input: Sesv2CreateContactListRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateContactListRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateContactListRequest)

---

##### `createCustomVerificationEmailTemplate` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createCustomVerificationEmailTemplate"></a>

```typescript
public createCustomVerificationEmailTemplate(input: Sesv2CreateCustomVerificationEmailTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateCustomVerificationEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateCustomVerificationEmailTemplateRequest)

---

##### `createDedicatedIpPool` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createDedicatedIpPool"></a>

```typescript
public createDedicatedIpPool(input: Sesv2CreateDedicatedIpPoolRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateDedicatedIpPoolRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateDedicatedIpPoolRequest)

---

##### `createDeliverabilityTestReport` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createDeliverabilityTestReport"></a>

```typescript
public createDeliverabilityTestReport(input: Sesv2CreateDeliverabilityTestReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportRequest)

---

##### `createEmailIdentity` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createEmailIdentity"></a>

```typescript
public createEmailIdentity(input: Sesv2CreateEmailIdentityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityRequest)

---

##### `createEmailIdentityPolicy` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createEmailIdentityPolicy"></a>

```typescript
public createEmailIdentityPolicy(input: Sesv2CreateEmailIdentityPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityPolicyRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityPolicyRequest)

---

##### `createEmailTemplate` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createEmailTemplate"></a>

```typescript
public createEmailTemplate(input: Sesv2CreateEmailTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateEmailTemplateRequest)

---

##### `createImportJob` <a name="aws-cdk-sdk.sesv2.Sesv2Client.createImportJob"></a>

```typescript
public createImportJob(input: Sesv2CreateImportJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateImportJobRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateImportJobRequest)

---

##### `deleteConfigurationSet` <a name="aws-cdk-sdk.sesv2.Sesv2Client.deleteConfigurationSet"></a>

```typescript
public deleteConfigurationSet(input: Sesv2DeleteConfigurationSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetRequest`](#aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetRequest)

---

##### `deleteConfigurationSetEventDestination` <a name="aws-cdk-sdk.sesv2.Sesv2Client.deleteConfigurationSetEventDestination"></a>

```typescript
public deleteConfigurationSetEventDestination(input: Sesv2DeleteConfigurationSetEventDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetEventDestinationRequest`](#aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetEventDestinationRequest)

---

##### `deleteContact` <a name="aws-cdk-sdk.sesv2.Sesv2Client.deleteContact"></a>

```typescript
public deleteContact(input: Sesv2DeleteContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeleteContactRequest`](#aws-cdk-sdk.sesv2.Sesv2DeleteContactRequest)

---

##### `deleteContactList` <a name="aws-cdk-sdk.sesv2.Sesv2Client.deleteContactList"></a>

```typescript
public deleteContactList(input: Sesv2DeleteContactListRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeleteContactListRequest`](#aws-cdk-sdk.sesv2.Sesv2DeleteContactListRequest)

---

##### `deleteCustomVerificationEmailTemplate` <a name="aws-cdk-sdk.sesv2.Sesv2Client.deleteCustomVerificationEmailTemplate"></a>

```typescript
public deleteCustomVerificationEmailTemplate(input: Sesv2DeleteCustomVerificationEmailTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeleteCustomVerificationEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2DeleteCustomVerificationEmailTemplateRequest)

---

##### `deleteDedicatedIpPool` <a name="aws-cdk-sdk.sesv2.Sesv2Client.deleteDedicatedIpPool"></a>

```typescript
public deleteDedicatedIpPool(input: Sesv2DeleteDedicatedIpPoolRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeleteDedicatedIpPoolRequest`](#aws-cdk-sdk.sesv2.Sesv2DeleteDedicatedIpPoolRequest)

---

##### `deleteEmailIdentity` <a name="aws-cdk-sdk.sesv2.Sesv2Client.deleteEmailIdentity"></a>

```typescript
public deleteEmailIdentity(input: Sesv2DeleteEmailIdentityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityRequest`](#aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityRequest)

---

##### `deleteEmailIdentityPolicy` <a name="aws-cdk-sdk.sesv2.Sesv2Client.deleteEmailIdentityPolicy"></a>

```typescript
public deleteEmailIdentityPolicy(input: Sesv2DeleteEmailIdentityPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityPolicyRequest`](#aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityPolicyRequest)

---

##### `deleteEmailTemplate` <a name="aws-cdk-sdk.sesv2.Sesv2Client.deleteEmailTemplate"></a>

```typescript
public deleteEmailTemplate(input: Sesv2DeleteEmailTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeleteEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2DeleteEmailTemplateRequest)

---

##### `deleteSuppressedDestination` <a name="aws-cdk-sdk.sesv2.Sesv2Client.deleteSuppressedDestination"></a>

```typescript
public deleteSuppressedDestination(input: Sesv2DeleteSuppressedDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeleteSuppressedDestinationRequest`](#aws-cdk-sdk.sesv2.Sesv2DeleteSuppressedDestinationRequest)

---

##### `fetchAccount` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchAccount"></a>

```typescript
public fetchAccount()
```

##### `fetchBlacklistReports` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchBlacklistReports"></a>

```typescript
public fetchBlacklistReports(input: Sesv2GetBlacklistReportsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetBlacklistReportsRequest`](#aws-cdk-sdk.sesv2.Sesv2GetBlacklistReportsRequest)

---

##### `fetchConfigurationSet` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchConfigurationSet"></a>

```typescript
public fetchConfigurationSet(input: Sesv2GetConfigurationSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest`](#aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest)

---

##### `fetchConfigurationSetEventDestinations` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchConfigurationSetEventDestinations"></a>

```typescript
public fetchConfigurationSetEventDestinations(input: Sesv2GetConfigurationSetEventDestinationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetEventDestinationsRequest`](#aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetEventDestinationsRequest)

---

##### `fetchContact` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchContact"></a>

```typescript
public fetchContact(input: Sesv2GetContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetContactRequest`](#aws-cdk-sdk.sesv2.Sesv2GetContactRequest)

---

##### `fetchContactList` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchContactList"></a>

```typescript
public fetchContactList(input: Sesv2GetContactListRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetContactListRequest`](#aws-cdk-sdk.sesv2.Sesv2GetContactListRequest)

---

##### `fetchCustomVerificationEmailTemplate` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchCustomVerificationEmailTemplate"></a>

```typescript
public fetchCustomVerificationEmailTemplate(input: Sesv2GetCustomVerificationEmailTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateRequest)

---

##### `fetchDedicatedIp` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchDedicatedIp"></a>

```typescript
public fetchDedicatedIp(input: Sesv2GetDedicatedIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpRequest)

---

##### `fetchDedicatedIps` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchDedicatedIps"></a>

```typescript
public fetchDedicatedIps(input: Sesv2GetDedicatedIpsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsRequest)

---

##### `fetchDeliverabilityDashboardOptions` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchDeliverabilityDashboardOptions"></a>

```typescript
public fetchDeliverabilityDashboardOptions()
```

##### `fetchDeliverabilityTestReport` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchDeliverabilityTestReport"></a>

```typescript
public fetchDeliverabilityTestReport(input: Sesv2GetDeliverabilityTestReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportRequest)

---

##### `fetchDomainDeliverabilityCampaign` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchDomainDeliverabilityCampaign"></a>

```typescript
public fetchDomainDeliverabilityCampaign(input: Sesv2GetDomainDeliverabilityCampaignRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDomainDeliverabilityCampaignRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDomainDeliverabilityCampaignRequest)

---

##### `fetchDomainStatisticsReport` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchDomainStatisticsReport"></a>

```typescript
public fetchDomainStatisticsReport(input: Sesv2GetDomainStatisticsReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest)

---

##### `fetchEmailIdentity` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchEmailIdentity"></a>

```typescript
public fetchEmailIdentity(input: Sesv2GetEmailIdentityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityRequest`](#aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityRequest)

---

##### `fetchEmailIdentityPolicies` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchEmailIdentityPolicies"></a>

```typescript
public fetchEmailIdentityPolicies(input: Sesv2GetEmailIdentityPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityPoliciesRequest`](#aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityPoliciesRequest)

---

##### `fetchEmailTemplate` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchEmailTemplate"></a>

```typescript
public fetchEmailTemplate(input: Sesv2GetEmailTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateRequest)

---

##### `fetchImportJob` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchImportJob"></a>

```typescript
public fetchImportJob(input: Sesv2GetImportJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest`](#aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest)

---

##### `fetchSuppressedDestination` <a name="aws-cdk-sdk.sesv2.Sesv2Client.fetchSuppressedDestination"></a>

```typescript
public fetchSuppressedDestination(input: Sesv2GetSuppressedDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationRequest`](#aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationRequest)

---

##### `listConfigurationSets` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listConfigurationSets"></a>

```typescript
public listConfigurationSets(input: Sesv2ListConfigurationSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListConfigurationSetsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListConfigurationSetsRequest)

---

##### `listContactLists` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listContactLists"></a>

```typescript
public listContactLists(input: Sesv2ListContactListsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListContactListsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListContactListsRequest)

---

##### `listContacts` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listContacts"></a>

```typescript
public listContacts(input: Sesv2ListContactsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListContactsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListContactsRequest)

---

##### `listCustomVerificationEmailTemplates` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listCustomVerificationEmailTemplates"></a>

```typescript
public listCustomVerificationEmailTemplates(input: Sesv2ListCustomVerificationEmailTemplatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListCustomVerificationEmailTemplatesRequest`](#aws-cdk-sdk.sesv2.Sesv2ListCustomVerificationEmailTemplatesRequest)

---

##### `listDedicatedIpPools` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listDedicatedIpPools"></a>

```typescript
public listDedicatedIpPools(input: Sesv2ListDedicatedIpPoolsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListDedicatedIpPoolsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListDedicatedIpPoolsRequest)

---

##### `listDeliverabilityTestReports` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listDeliverabilityTestReports"></a>

```typescript
public listDeliverabilityTestReports(input: Sesv2ListDeliverabilityTestReportsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListDeliverabilityTestReportsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListDeliverabilityTestReportsRequest)

---

##### `listDomainDeliverabilityCampaigns` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listDomainDeliverabilityCampaigns"></a>

```typescript
public listDomainDeliverabilityCampaigns(input: Sesv2ListDomainDeliverabilityCampaignsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest)

---

##### `listEmailIdentities` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listEmailIdentities"></a>

```typescript
public listEmailIdentities(input: Sesv2ListEmailIdentitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListEmailIdentitiesRequest`](#aws-cdk-sdk.sesv2.Sesv2ListEmailIdentitiesRequest)

---

##### `listEmailTemplates` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listEmailTemplates"></a>

```typescript
public listEmailTemplates(input: Sesv2ListEmailTemplatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListEmailTemplatesRequest`](#aws-cdk-sdk.sesv2.Sesv2ListEmailTemplatesRequest)

---

##### `listImportJobs` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listImportJobs"></a>

```typescript
public listImportJobs(input: Sesv2ListImportJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListImportJobsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListImportJobsRequest)

---

##### `listSuppressedDestinations` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listSuppressedDestinations"></a>

```typescript
public listSuppressedDestinations(input: Sesv2ListSuppressedDestinationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.sesv2.Sesv2Client.listTagsForResource"></a>

```typescript
public listTagsForResource(input: Sesv2ListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListTagsForResourceRequest`](#aws-cdk-sdk.sesv2.Sesv2ListTagsForResourceRequest)

---

##### `putAccountDedicatedIpWarmupAttributes` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putAccountDedicatedIpWarmupAttributes"></a>

```typescript
public putAccountDedicatedIpWarmupAttributes(input: Sesv2PutAccountDedicatedIpWarmupAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutAccountDedicatedIpWarmupAttributesRequest`](#aws-cdk-sdk.sesv2.Sesv2PutAccountDedicatedIpWarmupAttributesRequest)

---

##### `putAccountDetails` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putAccountDetails"></a>

```typescript
public putAccountDetails(input: Sesv2PutAccountDetailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutAccountDetailsRequest`](#aws-cdk-sdk.sesv2.Sesv2PutAccountDetailsRequest)

---

##### `putAccountSendingAttributes` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putAccountSendingAttributes"></a>

```typescript
public putAccountSendingAttributes(input: Sesv2PutAccountSendingAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutAccountSendingAttributesRequest`](#aws-cdk-sdk.sesv2.Sesv2PutAccountSendingAttributesRequest)

---

##### `putAccountSuppressionAttributes` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putAccountSuppressionAttributes"></a>

```typescript
public putAccountSuppressionAttributes(input: Sesv2PutAccountSuppressionAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutAccountSuppressionAttributesRequest`](#aws-cdk-sdk.sesv2.Sesv2PutAccountSuppressionAttributesRequest)

---

##### `putConfigurationSetDeliveryOptions` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putConfigurationSetDeliveryOptions"></a>

```typescript
public putConfigurationSetDeliveryOptions(input: Sesv2PutConfigurationSetDeliveryOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetDeliveryOptionsRequest`](#aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetDeliveryOptionsRequest)

---

##### `putConfigurationSetReputationOptions` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putConfigurationSetReputationOptions"></a>

```typescript
public putConfigurationSetReputationOptions(input: Sesv2PutConfigurationSetReputationOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetReputationOptionsRequest`](#aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetReputationOptionsRequest)

---

##### `putConfigurationSetSendingOptions` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putConfigurationSetSendingOptions"></a>

```typescript
public putConfigurationSetSendingOptions(input: Sesv2PutConfigurationSetSendingOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSendingOptionsRequest`](#aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSendingOptionsRequest)

---

##### `putConfigurationSetSuppressionOptions` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putConfigurationSetSuppressionOptions"></a>

```typescript
public putConfigurationSetSuppressionOptions(input: Sesv2PutConfigurationSetSuppressionOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSuppressionOptionsRequest`](#aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSuppressionOptionsRequest)

---

##### `putConfigurationSetTrackingOptions` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putConfigurationSetTrackingOptions"></a>

```typescript
public putConfigurationSetTrackingOptions(input: Sesv2PutConfigurationSetTrackingOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetTrackingOptionsRequest`](#aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetTrackingOptionsRequest)

---

##### `putDedicatedIpInPool` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putDedicatedIpInPool"></a>

```typescript
public putDedicatedIpInPool(input: Sesv2PutDedicatedIpInPoolRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpInPoolRequest`](#aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpInPoolRequest)

---

##### `putDedicatedIpWarmupAttributes` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putDedicatedIpWarmupAttributes"></a>

```typescript
public putDedicatedIpWarmupAttributes(input: Sesv2PutDedicatedIpWarmupAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpWarmupAttributesRequest`](#aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpWarmupAttributesRequest)

---

##### `putDeliverabilityDashboardOption` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putDeliverabilityDashboardOption"></a>

```typescript
public putDeliverabilityDashboardOption(input: Sesv2PutDeliverabilityDashboardOptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutDeliverabilityDashboardOptionRequest`](#aws-cdk-sdk.sesv2.Sesv2PutDeliverabilityDashboardOptionRequest)

---

##### `putEmailIdentityDkimAttributes` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putEmailIdentityDkimAttributes"></a>

```typescript
public putEmailIdentityDkimAttributes(input: Sesv2PutEmailIdentityDkimAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimAttributesRequest`](#aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimAttributesRequest)

---

##### `putEmailIdentityDkimSigningAttributes` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putEmailIdentityDkimSigningAttributes"></a>

```typescript
public putEmailIdentityDkimSigningAttributes(input: Sesv2PutEmailIdentityDkimSigningAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesRequest`](#aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesRequest)

---

##### `putEmailIdentityFeedbackAttributes` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putEmailIdentityFeedbackAttributes"></a>

```typescript
public putEmailIdentityFeedbackAttributes(input: Sesv2PutEmailIdentityFeedbackAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityFeedbackAttributesRequest`](#aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityFeedbackAttributesRequest)

---

##### `putEmailIdentityMailFromAttributes` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putEmailIdentityMailFromAttributes"></a>

```typescript
public putEmailIdentityMailFromAttributes(input: Sesv2PutEmailIdentityMailFromAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityMailFromAttributesRequest`](#aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityMailFromAttributesRequest)

---

##### `putSuppressedDestination` <a name="aws-cdk-sdk.sesv2.Sesv2Client.putSuppressedDestination"></a>

```typescript
public putSuppressedDestination(input: Sesv2PutSuppressedDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutSuppressedDestinationRequest`](#aws-cdk-sdk.sesv2.Sesv2PutSuppressedDestinationRequest)

---

##### `sendBulkEmail` <a name="aws-cdk-sdk.sesv2.Sesv2Client.sendBulkEmail"></a>

```typescript
public sendBulkEmail(input: Sesv2SendBulkEmailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest`](#aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest)

---

##### `sendCustomVerificationEmail` <a name="aws-cdk-sdk.sesv2.Sesv2Client.sendCustomVerificationEmail"></a>

```typescript
public sendCustomVerificationEmail(input: Sesv2SendCustomVerificationEmailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SendCustomVerificationEmailRequest`](#aws-cdk-sdk.sesv2.Sesv2SendCustomVerificationEmailRequest)

---

##### `sendEmail` <a name="aws-cdk-sdk.sesv2.Sesv2Client.sendEmail"></a>

```typescript
public sendEmail(input: Sesv2SendEmailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SendEmailRequest`](#aws-cdk-sdk.sesv2.Sesv2SendEmailRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.sesv2.Sesv2Client.tagResource"></a>

```typescript
public tagResource(input: Sesv2TagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TagResourceRequest`](#aws-cdk-sdk.sesv2.Sesv2TagResourceRequest)

---

##### `testRenderEmailTemplate` <a name="aws-cdk-sdk.sesv2.Sesv2Client.testRenderEmailTemplate"></a>

```typescript
public testRenderEmailTemplate(input: Sesv2TestRenderEmailTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TestRenderEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2TestRenderEmailTemplateRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.sesv2.Sesv2Client.untagResource"></a>

```typescript
public untagResource(input: Sesv2UntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2UntagResourceRequest`](#aws-cdk-sdk.sesv2.Sesv2UntagResourceRequest)

---

##### `updateConfigurationSetEventDestination` <a name="aws-cdk-sdk.sesv2.Sesv2Client.updateConfigurationSetEventDestination"></a>

```typescript
public updateConfigurationSetEventDestination(input: Sesv2UpdateConfigurationSetEventDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2UpdateConfigurationSetEventDestinationRequest`](#aws-cdk-sdk.sesv2.Sesv2UpdateConfigurationSetEventDestinationRequest)

---

##### `updateContact` <a name="aws-cdk-sdk.sesv2.Sesv2Client.updateContact"></a>

```typescript
public updateContact(input: Sesv2UpdateContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2UpdateContactRequest`](#aws-cdk-sdk.sesv2.Sesv2UpdateContactRequest)

---

##### `updateContactList` <a name="aws-cdk-sdk.sesv2.Sesv2Client.updateContactList"></a>

```typescript
public updateContactList(input: Sesv2UpdateContactListRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2UpdateContactListRequest`](#aws-cdk-sdk.sesv2.Sesv2UpdateContactListRequest)

---

##### `updateCustomVerificationEmailTemplate` <a name="aws-cdk-sdk.sesv2.Sesv2Client.updateCustomVerificationEmailTemplate"></a>

```typescript
public updateCustomVerificationEmailTemplate(input: Sesv2UpdateCustomVerificationEmailTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2UpdateCustomVerificationEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2UpdateCustomVerificationEmailTemplateRequest)

---

##### `updateEmailIdentityPolicy` <a name="aws-cdk-sdk.sesv2.Sesv2Client.updateEmailIdentityPolicy"></a>

```typescript
public updateEmailIdentityPolicy(input: Sesv2UpdateEmailIdentityPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2UpdateEmailIdentityPolicyRequest`](#aws-cdk-sdk.sesv2.Sesv2UpdateEmailIdentityPolicyRequest)

---

##### `updateEmailTemplate` <a name="aws-cdk-sdk.sesv2.Sesv2Client.updateEmailTemplate"></a>

```typescript
public updateEmailTemplate(input: Sesv2UpdateEmailTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2UpdateEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2UpdateEmailTemplateRequest)

---




## Structs <a name="Structs"></a>

### Sesv2AccountDetails <a name="aws-cdk-sdk.sesv2.Sesv2AccountDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2AccountDetails: sesv2.Sesv2AccountDetails = { ... }
```

##### `additionalContactEmailAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2AccountDetails.property.additionalContactEmailAddresses"></a>

- *Type:* `string`[]

---

##### `contactLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2AccountDetails.property.contactLanguage"></a>

- *Type:* `string`

---

##### `mailType`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2AccountDetails.property.mailType"></a>

- *Type:* `string`

---

##### `reviewDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2AccountDetails.property.reviewDetails"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ReviewDetails`](#aws-cdk-sdk.sesv2.Sesv2ReviewDetails)

---

##### `useCaseDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2AccountDetails.property.useCaseDescription"></a>

- *Type:* `string`

---

##### `websiteUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2AccountDetails.property.websiteUrl"></a>

- *Type:* `string`

---

### Sesv2BlacklistEntry <a name="aws-cdk-sdk.sesv2.Sesv2BlacklistEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2BlacklistEntry: sesv2.Sesv2BlacklistEntry = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2BlacklistEntry.property.description"></a>

- *Type:* `string`

---

##### `listingTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2BlacklistEntry.property.listingTime"></a>

- *Type:* `string`

---

##### `rblName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2BlacklistEntry.property.rblName"></a>

- *Type:* `string`

---

### Sesv2Body <a name="aws-cdk-sdk.sesv2.Sesv2Body"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2Body: sesv2.Sesv2Body = { ... }
```

##### `html`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Body.property.html"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Content`](#aws-cdk-sdk.sesv2.Sesv2Content)

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Body.property.text"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Content`](#aws-cdk-sdk.sesv2.Sesv2Content)

---

### Sesv2BulkEmailContent <a name="aws-cdk-sdk.sesv2.Sesv2BulkEmailContent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2BulkEmailContent: sesv2.Sesv2BulkEmailContent = { ... }
```

##### `template`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2BulkEmailContent.property.template"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Template`](#aws-cdk-sdk.sesv2.Sesv2Template)

---

### Sesv2BulkEmailEntry <a name="aws-cdk-sdk.sesv2.Sesv2BulkEmailEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2BulkEmailEntry: sesv2.Sesv2BulkEmailEntry = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2BulkEmailEntry.property.destination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Destination`](#aws-cdk-sdk.sesv2.Sesv2Destination)

---

##### `replacementEmailContent`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2BulkEmailEntry.property.replacementEmailContent"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ReplacementEmailContent`](#aws-cdk-sdk.sesv2.Sesv2ReplacementEmailContent)

---

##### `replacementTags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2BulkEmailEntry.property.replacementTags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2MessageTag`](#aws-cdk-sdk.sesv2.Sesv2MessageTag)[]

---

### Sesv2BulkEmailEntryResult <a name="aws-cdk-sdk.sesv2.Sesv2BulkEmailEntryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2BulkEmailEntryResult: sesv2.Sesv2BulkEmailEntryResult = { ... }
```

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2BulkEmailEntryResult.property.error"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2BulkEmailEntryResult.property.messageId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2BulkEmailEntryResult.property.status"></a>

- *Type:* `string`

---

### Sesv2CloudWatchDestination <a name="aws-cdk-sdk.sesv2.Sesv2CloudWatchDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CloudWatchDestination: sesv2.Sesv2CloudWatchDestination = { ... }
```

##### `dimensionConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CloudWatchDestination.property.dimensionConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CloudWatchDimensionConfiguration`](#aws-cdk-sdk.sesv2.Sesv2CloudWatchDimensionConfiguration)[]

---

### Sesv2CloudWatchDimensionConfiguration <a name="aws-cdk-sdk.sesv2.Sesv2CloudWatchDimensionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CloudWatchDimensionConfiguration: sesv2.Sesv2CloudWatchDimensionConfiguration = { ... }
```

##### `defaultDimensionValue`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CloudWatchDimensionConfiguration.property.defaultDimensionValue"></a>

- *Type:* `string`

---

##### `dimensionName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CloudWatchDimensionConfiguration.property.dimensionName"></a>

- *Type:* `string`

---

##### `dimensionValueSource`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CloudWatchDimensionConfiguration.property.dimensionValueSource"></a>

- *Type:* `string`

---

### Sesv2Contact <a name="aws-cdk-sdk.sesv2.Sesv2Contact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2Contact: sesv2.Sesv2Contact = { ... }
```

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Contact.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Contact.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `topicDefaultPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Contact.property.topicDefaultPreferences"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TopicPreference`](#aws-cdk-sdk.sesv2.Sesv2TopicPreference)[]

---

##### `topicPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Contact.property.topicPreferences"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TopicPreference`](#aws-cdk-sdk.sesv2.Sesv2TopicPreference)[]

---

##### `unsubscribeAll`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Contact.property.unsubscribeAll"></a>

- *Type:* `boolean`

---

### Sesv2ContactList <a name="aws-cdk-sdk.sesv2.Sesv2ContactList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ContactList: sesv2.Sesv2ContactList = { ... }
```

##### `contactListName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ContactList.property.contactListName"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ContactList.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

### Sesv2ContactListDestination <a name="aws-cdk-sdk.sesv2.Sesv2ContactListDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ContactListDestination: sesv2.Sesv2ContactListDestination = { ... }
```

##### `contactListImportAction`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ContactListDestination.property.contactListImportAction"></a>

- *Type:* `string`

---

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ContactListDestination.property.contactListName"></a>

- *Type:* `string`

---

### Sesv2Content <a name="aws-cdk-sdk.sesv2.Sesv2Content"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2Content: sesv2.Sesv2Content = { ... }
```

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Content.property.data"></a>

- *Type:* `string`

---

##### `charset`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Content.property.charset"></a>

- *Type:* `string`

---

### Sesv2CreateConfigurationSetEventDestinationRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetEventDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateConfigurationSetEventDestinationRequest: sesv2.Sesv2CreateConfigurationSetEventDestinationRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetEventDestinationRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `eventDestination`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetEventDestinationRequest.property.eventDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition`](#aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition)

---

##### `eventDestinationName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetEventDestinationRequest.property.eventDestinationName"></a>

- *Type:* `string`

---

### Sesv2CreateConfigurationSetEventDestinationResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetEventDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateConfigurationSetEventDestinationResponse: sesv2.Sesv2CreateConfigurationSetEventDestinationResponse = { ... }
```

### Sesv2CreateConfigurationSetRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateConfigurationSetRequest: sesv2.Sesv2CreateConfigurationSetRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `deliveryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetRequest.property.deliveryOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeliveryOptions`](#aws-cdk-sdk.sesv2.Sesv2DeliveryOptions)

---

##### `reputationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetRequest.property.reputationOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ReputationOptions`](#aws-cdk-sdk.sesv2.Sesv2ReputationOptions)

---

##### `sendingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetRequest.property.sendingOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SendingOptions`](#aws-cdk-sdk.sesv2.Sesv2SendingOptions)

---

##### `suppressionOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetRequest.property.suppressionOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SuppressionOptions`](#aws-cdk-sdk.sesv2.Sesv2SuppressionOptions)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

##### `trackingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetRequest.property.trackingOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TrackingOptions`](#aws-cdk-sdk.sesv2.Sesv2TrackingOptions)

---

### Sesv2CreateConfigurationSetResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateConfigurationSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateConfigurationSetResponse: sesv2.Sesv2CreateConfigurationSetResponse = { ... }
```

### Sesv2CreateContactListRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactListRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateContactListRequest: sesv2.Sesv2CreateContactListRequest = { ... }
```

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactListRequest.property.contactListName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactListRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactListRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

##### `topics`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactListRequest.property.topics"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Topic`](#aws-cdk-sdk.sesv2.Sesv2Topic)[]

---

### Sesv2CreateContactListResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactListResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateContactListResponse: sesv2.Sesv2CreateContactListResponse = { ... }
```

### Sesv2CreateContactRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateContactRequest: sesv2.Sesv2CreateContactRequest = { ... }
```

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactRequest.property.contactListName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactRequest.property.emailAddress"></a>

- *Type:* `string`

---

##### `attributesData`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactRequest.property.attributesData"></a>

- *Type:* `string`

---

##### `topicPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactRequest.property.topicPreferences"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TopicPreference`](#aws-cdk-sdk.sesv2.Sesv2TopicPreference)[]

---

##### `unsubscribeAll`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactRequest.property.unsubscribeAll"></a>

- *Type:* `boolean`

---

### Sesv2CreateContactResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateContactResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateContactResponse: sesv2.Sesv2CreateContactResponse = { ... }
```

### Sesv2CreateCustomVerificationEmailTemplateRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateCustomVerificationEmailTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateCustomVerificationEmailTemplateRequest: sesv2.Sesv2CreateCustomVerificationEmailTemplateRequest = { ... }
```

##### `failureRedirectionUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateCustomVerificationEmailTemplateRequest.property.failureRedirectionUrl"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateCustomVerificationEmailTemplateRequest.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `successRedirectionUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateCustomVerificationEmailTemplateRequest.property.successRedirectionUrl"></a>

- *Type:* `string`

---

##### `templateContent`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateCustomVerificationEmailTemplateRequest.property.templateContent"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateCustomVerificationEmailTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

##### `templateSubject`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateCustomVerificationEmailTemplateRequest.property.templateSubject"></a>

- *Type:* `string`

---

### Sesv2CreateCustomVerificationEmailTemplateResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateCustomVerificationEmailTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateCustomVerificationEmailTemplateResponse: sesv2.Sesv2CreateCustomVerificationEmailTemplateResponse = { ... }
```

### Sesv2CreateDedicatedIpPoolRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateDedicatedIpPoolRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateDedicatedIpPoolRequest: sesv2.Sesv2CreateDedicatedIpPoolRequest = { ... }
```

##### `poolName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateDedicatedIpPoolRequest.property.poolName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateDedicatedIpPoolRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

### Sesv2CreateDedicatedIpPoolResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateDedicatedIpPoolResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateDedicatedIpPoolResponse: sesv2.Sesv2CreateDedicatedIpPoolResponse = { ... }
```

### Sesv2CreateDeliverabilityTestReportRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateDeliverabilityTestReportRequest: sesv2.Sesv2CreateDeliverabilityTestReportRequest = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportRequest.property.content"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EmailContent`](#aws-cdk-sdk.sesv2.Sesv2EmailContent)

---

##### `fromEmailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportRequest.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `reportName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportRequest.property.reportName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

### Sesv2CreateDeliverabilityTestReportResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateDeliverabilityTestReportResponse: sesv2.Sesv2CreateDeliverabilityTestReportResponse = { ... }
```

##### `deliverabilityTestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportResponse.property.deliverabilityTestStatus"></a>

- *Type:* `string`

---

##### `reportId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportResponse.property.reportId"></a>

- *Type:* `string`

---

### Sesv2CreateEmailIdentityPolicyRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateEmailIdentityPolicyRequest: sesv2.Sesv2CreateEmailIdentityPolicyRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityPolicyRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityPolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

### Sesv2CreateEmailIdentityPolicyResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateEmailIdentityPolicyResponse: sesv2.Sesv2CreateEmailIdentityPolicyResponse = { ... }
```

### Sesv2CreateEmailIdentityRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateEmailIdentityRequest: sesv2.Sesv2CreateEmailIdentityRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `dkimSigningAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityRequest.property.dkimSigningAttributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DkimSigningAttributes`](#aws-cdk-sdk.sesv2.Sesv2DkimSigningAttributes)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

### Sesv2CreateEmailIdentityResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateEmailIdentityResponse: sesv2.Sesv2CreateEmailIdentityResponse = { ... }
```

##### `dkimAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityResponse.property.dkimAttributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DkimAttributes`](#aws-cdk-sdk.sesv2.Sesv2DkimAttributes)

---

##### `identityType`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityResponse.property.identityType"></a>

- *Type:* `string`

---

##### `verifiedForSendingStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityResponse.property.verifiedForSendingStatus"></a>

- *Type:* `boolean`

---

### Sesv2CreateEmailTemplateRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateEmailTemplateRequest: sesv2.Sesv2CreateEmailTemplateRequest = { ... }
```

##### `templateContent`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailTemplateRequest.property.templateContent"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EmailTemplateContent`](#aws-cdk-sdk.sesv2.Sesv2EmailTemplateContent)

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

### Sesv2CreateEmailTemplateResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateEmailTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateEmailTemplateResponse: sesv2.Sesv2CreateEmailTemplateResponse = { ... }
```

### Sesv2CreateImportJobRequest <a name="aws-cdk-sdk.sesv2.Sesv2CreateImportJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateImportJobRequest: sesv2.Sesv2CreateImportJobRequest = { ... }
```

##### `importDataSource`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateImportJobRequest.property.importDataSource"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ImportDataSource`](#aws-cdk-sdk.sesv2.Sesv2ImportDataSource)

---

##### `importDestination`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateImportJobRequest.property.importDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ImportDestination`](#aws-cdk-sdk.sesv2.Sesv2ImportDestination)

---

### Sesv2CreateImportJobResponse <a name="aws-cdk-sdk.sesv2.Sesv2CreateImportJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CreateImportJobResponse: sesv2.Sesv2CreateImportJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CreateImportJobResponse.property.jobId"></a>

- *Type:* `string`

---

### Sesv2CustomVerificationEmailTemplateMetadata <a name="aws-cdk-sdk.sesv2.Sesv2CustomVerificationEmailTemplateMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2CustomVerificationEmailTemplateMetadata: sesv2.Sesv2CustomVerificationEmailTemplateMetadata = { ... }
```

##### `failureRedirectionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CustomVerificationEmailTemplateMetadata.property.failureRedirectionUrl"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CustomVerificationEmailTemplateMetadata.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `successRedirectionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CustomVerificationEmailTemplateMetadata.property.successRedirectionUrl"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CustomVerificationEmailTemplateMetadata.property.templateName"></a>

- *Type:* `string`

---

##### `templateSubject`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2CustomVerificationEmailTemplateMetadata.property.templateSubject"></a>

- *Type:* `string`

---

### Sesv2DailyVolume <a name="aws-cdk-sdk.sesv2.Sesv2DailyVolume"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DailyVolume: sesv2.Sesv2DailyVolume = { ... }
```

##### `domainIspPlacements`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DailyVolume.property.domainIspPlacements"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement`](#aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement)[]

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DailyVolume.property.startDate"></a>

- *Type:* `string`

---

##### `volumeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DailyVolume.property.volumeStatistics"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2VolumeStatistics`](#aws-cdk-sdk.sesv2.Sesv2VolumeStatistics)

---

### Sesv2DedicatedIp <a name="aws-cdk-sdk.sesv2.Sesv2DedicatedIp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DedicatedIp: sesv2.Sesv2DedicatedIp = { ... }
```

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DedicatedIp.property.ip"></a>

- *Type:* `string`

---

##### `warmupPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DedicatedIp.property.warmupPercentage"></a>

- *Type:* `number`

---

##### `warmupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DedicatedIp.property.warmupStatus"></a>

- *Type:* `string`

---

##### `poolName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DedicatedIp.property.poolName"></a>

- *Type:* `string`

---

### Sesv2DeleteConfigurationSetEventDestinationRequest <a name="aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetEventDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteConfigurationSetEventDestinationRequest: sesv2.Sesv2DeleteConfigurationSetEventDestinationRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetEventDestinationRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `eventDestinationName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetEventDestinationRequest.property.eventDestinationName"></a>

- *Type:* `string`

---

### Sesv2DeleteConfigurationSetEventDestinationResponse <a name="aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetEventDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteConfigurationSetEventDestinationResponse: sesv2.Sesv2DeleteConfigurationSetEventDestinationResponse = { ... }
```

### Sesv2DeleteConfigurationSetRequest <a name="aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteConfigurationSetRequest: sesv2.Sesv2DeleteConfigurationSetRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetRequest.property.configurationSetName"></a>

- *Type:* `string`

---

### Sesv2DeleteConfigurationSetResponse <a name="aws-cdk-sdk.sesv2.Sesv2DeleteConfigurationSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteConfigurationSetResponse: sesv2.Sesv2DeleteConfigurationSetResponse = { ... }
```

### Sesv2DeleteContactListRequest <a name="aws-cdk-sdk.sesv2.Sesv2DeleteContactListRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteContactListRequest: sesv2.Sesv2DeleteContactListRequest = { ... }
```

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteContactListRequest.property.contactListName"></a>

- *Type:* `string`

---

### Sesv2DeleteContactListResponse <a name="aws-cdk-sdk.sesv2.Sesv2DeleteContactListResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteContactListResponse: sesv2.Sesv2DeleteContactListResponse = { ... }
```

### Sesv2DeleteContactRequest <a name="aws-cdk-sdk.sesv2.Sesv2DeleteContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteContactRequest: sesv2.Sesv2DeleteContactRequest = { ... }
```

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteContactRequest.property.contactListName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteContactRequest.property.emailAddress"></a>

- *Type:* `string`

---

### Sesv2DeleteContactResponse <a name="aws-cdk-sdk.sesv2.Sesv2DeleteContactResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteContactResponse: sesv2.Sesv2DeleteContactResponse = { ... }
```

### Sesv2DeleteCustomVerificationEmailTemplateRequest <a name="aws-cdk-sdk.sesv2.Sesv2DeleteCustomVerificationEmailTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteCustomVerificationEmailTemplateRequest: sesv2.Sesv2DeleteCustomVerificationEmailTemplateRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteCustomVerificationEmailTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

### Sesv2DeleteCustomVerificationEmailTemplateResponse <a name="aws-cdk-sdk.sesv2.Sesv2DeleteCustomVerificationEmailTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteCustomVerificationEmailTemplateResponse: sesv2.Sesv2DeleteCustomVerificationEmailTemplateResponse = { ... }
```

### Sesv2DeleteDedicatedIpPoolRequest <a name="aws-cdk-sdk.sesv2.Sesv2DeleteDedicatedIpPoolRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteDedicatedIpPoolRequest: sesv2.Sesv2DeleteDedicatedIpPoolRequest = { ... }
```

##### `poolName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteDedicatedIpPoolRequest.property.poolName"></a>

- *Type:* `string`

---

### Sesv2DeleteDedicatedIpPoolResponse <a name="aws-cdk-sdk.sesv2.Sesv2DeleteDedicatedIpPoolResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteDedicatedIpPoolResponse: sesv2.Sesv2DeleteDedicatedIpPoolResponse = { ... }
```

### Sesv2DeleteEmailIdentityPolicyRequest <a name="aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteEmailIdentityPolicyRequest: sesv2.Sesv2DeleteEmailIdentityPolicyRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityPolicyRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

### Sesv2DeleteEmailIdentityPolicyResponse <a name="aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteEmailIdentityPolicyResponse: sesv2.Sesv2DeleteEmailIdentityPolicyResponse = { ... }
```

### Sesv2DeleteEmailIdentityRequest <a name="aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteEmailIdentityRequest: sesv2.Sesv2DeleteEmailIdentityRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityRequest.property.emailIdentity"></a>

- *Type:* `string`

---

### Sesv2DeleteEmailIdentityResponse <a name="aws-cdk-sdk.sesv2.Sesv2DeleteEmailIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteEmailIdentityResponse: sesv2.Sesv2DeleteEmailIdentityResponse = { ... }
```

### Sesv2DeleteEmailTemplateRequest <a name="aws-cdk-sdk.sesv2.Sesv2DeleteEmailTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteEmailTemplateRequest: sesv2.Sesv2DeleteEmailTemplateRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteEmailTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

### Sesv2DeleteEmailTemplateResponse <a name="aws-cdk-sdk.sesv2.Sesv2DeleteEmailTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteEmailTemplateResponse: sesv2.Sesv2DeleteEmailTemplateResponse = { ... }
```

### Sesv2DeleteSuppressedDestinationRequest <a name="aws-cdk-sdk.sesv2.Sesv2DeleteSuppressedDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteSuppressedDestinationRequest: sesv2.Sesv2DeleteSuppressedDestinationRequest = { ... }
```

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeleteSuppressedDestinationRequest.property.emailAddress"></a>

- *Type:* `string`

---

### Sesv2DeleteSuppressedDestinationResponse <a name="aws-cdk-sdk.sesv2.Sesv2DeleteSuppressedDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeleteSuppressedDestinationResponse: sesv2.Sesv2DeleteSuppressedDestinationResponse = { ... }
```

### Sesv2DeliverabilityTestReport <a name="aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeliverabilityTestReport: sesv2.Sesv2DeliverabilityTestReport = { ... }
```

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport.property.createDate"></a>

- *Type:* `string`

---

##### `deliverabilityTestStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport.property.deliverabilityTestStatus"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `reportId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport.property.reportId"></a>

- *Type:* `string`

---

##### `reportName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport.property.reportName"></a>

- *Type:* `string`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport.property.subject"></a>

- *Type:* `string`

---

### Sesv2DeliveryOptions <a name="aws-cdk-sdk.sesv2.Sesv2DeliveryOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DeliveryOptions: sesv2.Sesv2DeliveryOptions = { ... }
```

##### `sendingPoolName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeliveryOptions.property.sendingPoolName"></a>

- *Type:* `string`

---

##### `tlsPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DeliveryOptions.property.tlsPolicy"></a>

- *Type:* `string`

---

### Sesv2Destination <a name="aws-cdk-sdk.sesv2.Sesv2Destination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2Destination: sesv2.Sesv2Destination = { ... }
```

##### `bccAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Destination.property.bccAddresses"></a>

- *Type:* `string`[]

---

##### `ccAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Destination.property.ccAddresses"></a>

- *Type:* `string`[]

---

##### `toAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Destination.property.toAddresses"></a>

- *Type:* `string`[]

---

### Sesv2DkimAttributes <a name="aws-cdk-sdk.sesv2.Sesv2DkimAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DkimAttributes: sesv2.Sesv2DkimAttributes = { ... }
```

##### `signingAttributesOrigin`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DkimAttributes.property.signingAttributesOrigin"></a>

- *Type:* `string`

---

##### `signingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DkimAttributes.property.signingEnabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DkimAttributes.property.status"></a>

- *Type:* `string`

---

##### `tokens`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DkimAttributes.property.tokens"></a>

- *Type:* `string`[]

---

### Sesv2DkimSigningAttributes <a name="aws-cdk-sdk.sesv2.Sesv2DkimSigningAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DkimSigningAttributes: sesv2.Sesv2DkimSigningAttributes = { ... }
```

##### `domainSigningPrivateKey`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DkimSigningAttributes.property.domainSigningPrivateKey"></a>

- *Type:* `string`

---

##### `domainSigningSelector`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DkimSigningAttributes.property.domainSigningSelector"></a>

- *Type:* `string`

---

### Sesv2DomainDeliverabilityCampaign <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DomainDeliverabilityCampaign: sesv2.Sesv2DomainDeliverabilityCampaign = { ... }
```

##### `campaignId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.campaignId"></a>

- *Type:* `string`

---

##### `deleteRate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.deleteRate"></a>

- *Type:* `number`

---

##### `esps`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.esps"></a>

- *Type:* `string`[]

---

##### `firstSeenDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.firstSeenDateTime"></a>

- *Type:* `string`

---

##### `fromAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.fromAddress"></a>

- *Type:* `string`

---

##### `imageUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.imageUrl"></a>

- *Type:* `string`

---

##### `inboxCount`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.inboxCount"></a>

- *Type:* `number`

---

##### `lastSeenDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.lastSeenDateTime"></a>

- *Type:* `string`

---

##### `projectedVolume`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.projectedVolume"></a>

- *Type:* `number`

---

##### `readDeleteRate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.readDeleteRate"></a>

- *Type:* `number`

---

##### `readRate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.readRate"></a>

- *Type:* `number`

---

##### `sendingIps`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.sendingIps"></a>

- *Type:* `string`[]

---

##### `spamCount`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.spamCount"></a>

- *Type:* `number`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign.property.subject"></a>

- *Type:* `string`

---

### Sesv2DomainDeliverabilityTrackingOption <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DomainDeliverabilityTrackingOption: sesv2.Sesv2DomainDeliverabilityTrackingOption = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption.property.domain"></a>

- *Type:* `string`

---

##### `inboxPlacementTrackingOption`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption.property.inboxPlacementTrackingOption"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2InboxPlacementTrackingOption`](#aws-cdk-sdk.sesv2.Sesv2InboxPlacementTrackingOption)

---

##### `subscriptionStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption.property.subscriptionStartDate"></a>

- *Type:* `string`

---

### Sesv2DomainIspPlacement <a name="aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2DomainIspPlacement: sesv2.Sesv2DomainIspPlacement = { ... }
```

##### `inboxPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement.property.inboxPercentage"></a>

- *Type:* `number`

---

##### `inboxRawCount`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement.property.inboxRawCount"></a>

- *Type:* `number`

---

##### `ispName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement.property.ispName"></a>

- *Type:* `string`

---

##### `spamPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement.property.spamPercentage"></a>

- *Type:* `number`

---

##### `spamRawCount`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement.property.spamRawCount"></a>

- *Type:* `number`

---

### Sesv2EmailContent <a name="aws-cdk-sdk.sesv2.Sesv2EmailContent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2EmailContent: sesv2.Sesv2EmailContent = { ... }
```

##### `raw`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EmailContent.property.raw"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2RawMessage`](#aws-cdk-sdk.sesv2.Sesv2RawMessage)

---

##### `simple`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EmailContent.property.simple"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Message`](#aws-cdk-sdk.sesv2.Sesv2Message)

---

##### `template`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EmailContent.property.template"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Template`](#aws-cdk-sdk.sesv2.Sesv2Template)

---

### Sesv2EmailTemplateContent <a name="aws-cdk-sdk.sesv2.Sesv2EmailTemplateContent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2EmailTemplateContent: sesv2.Sesv2EmailTemplateContent = { ... }
```

##### `html`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EmailTemplateContent.property.html"></a>

- *Type:* `string`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EmailTemplateContent.property.subject"></a>

- *Type:* `string`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EmailTemplateContent.property.text"></a>

- *Type:* `string`

---

### Sesv2EmailTemplateMetadata <a name="aws-cdk-sdk.sesv2.Sesv2EmailTemplateMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2EmailTemplateMetadata: sesv2.Sesv2EmailTemplateMetadata = { ... }
```

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EmailTemplateMetadata.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EmailTemplateMetadata.property.templateName"></a>

- *Type:* `string`

---

### Sesv2EventDestination <a name="aws-cdk-sdk.sesv2.Sesv2EventDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2EventDestination: sesv2.Sesv2EventDestination = { ... }
```

##### `matchingEventTypes`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestination.property.matchingEventTypes"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestination.property.name"></a>

- *Type:* `string`

---

##### `cloudWatchDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestination.property.cloudWatchDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CloudWatchDestination`](#aws-cdk-sdk.sesv2.Sesv2CloudWatchDestination)

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestination.property.enabled"></a>

- *Type:* `boolean`

---

##### `kinesisFirehoseDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestination.property.kinesisFirehoseDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2KinesisFirehoseDestination`](#aws-cdk-sdk.sesv2.Sesv2KinesisFirehoseDestination)

---

##### `pinpointDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestination.property.pinpointDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PinpointDestination`](#aws-cdk-sdk.sesv2.Sesv2PinpointDestination)

---

##### `snsDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestination.property.snsDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SnsDestination`](#aws-cdk-sdk.sesv2.Sesv2SnsDestination)

---

### Sesv2EventDestinationDefinition <a name="aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2EventDestinationDefinition: sesv2.Sesv2EventDestinationDefinition = { ... }
```

##### `cloudWatchDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition.property.cloudWatchDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CloudWatchDestination`](#aws-cdk-sdk.sesv2.Sesv2CloudWatchDestination)

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition.property.enabled"></a>

- *Type:* `boolean`

---

##### `kinesisFirehoseDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition.property.kinesisFirehoseDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2KinesisFirehoseDestination`](#aws-cdk-sdk.sesv2.Sesv2KinesisFirehoseDestination)

---

##### `matchingEventTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition.property.matchingEventTypes"></a>

- *Type:* `string`[]

---

##### `pinpointDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition.property.pinpointDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PinpointDestination`](#aws-cdk-sdk.sesv2.Sesv2PinpointDestination)

---

##### `snsDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition.property.snsDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SnsDestination`](#aws-cdk-sdk.sesv2.Sesv2SnsDestination)

---

### Sesv2FailureInfo <a name="aws-cdk-sdk.sesv2.Sesv2FailureInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2FailureInfo: sesv2.Sesv2FailureInfo = { ... }
```

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2FailureInfo.property.errorMessage"></a>

- *Type:* `string`

---

##### `failedRecordsS3Url`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2FailureInfo.property.failedRecordsS3Url"></a>

- *Type:* `string`

---

### Sesv2GetAccountRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetAccountRequest: sesv2.Sesv2GetAccountRequest = { ... }
```

### Sesv2GetAccountResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetAccountResponse: sesv2.Sesv2GetAccountResponse = { ... }
```

##### `dedicatedIpAutoWarmupEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetAccountResponse.property.dedicatedIpAutoWarmupEnabled"></a>

- *Type:* `boolean`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetAccountResponse.property.details"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2AccountDetails`](#aws-cdk-sdk.sesv2.Sesv2AccountDetails)

---

##### `enforcementStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetAccountResponse.property.enforcementStatus"></a>

- *Type:* `string`

---

##### `productionAccessEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetAccountResponse.property.productionAccessEnabled"></a>

- *Type:* `boolean`

---

##### `sendingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetAccountResponse.property.sendingEnabled"></a>

- *Type:* `boolean`

---

##### `sendQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetAccountResponse.property.sendQuota"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SendQuota`](#aws-cdk-sdk.sesv2.Sesv2SendQuota)

---

##### `suppressionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetAccountResponse.property.suppressionAttributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SuppressionAttributes`](#aws-cdk-sdk.sesv2.Sesv2SuppressionAttributes)

---

### Sesv2GetBlacklistReportsRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetBlacklistReportsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetBlacklistReportsRequest: sesv2.Sesv2GetBlacklistReportsRequest = { ... }
```

##### `blacklistItemNames`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetBlacklistReportsRequest.property.blacklistItemNames"></a>

- *Type:* `string`[]

---

### Sesv2GetBlacklistReportsResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetBlacklistReportsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetBlacklistReportsResponse: sesv2.Sesv2GetBlacklistReportsResponse = { ... }
```

##### `blacklistReport`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetBlacklistReportsResponse.property.blacklistReport"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.sesv2.Sesv2BlacklistEntry`](#aws-cdk-sdk.sesv2.Sesv2BlacklistEntry)[]}

---

### Sesv2GetConfigurationSetEventDestinationsRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetEventDestinationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetConfigurationSetEventDestinationsRequest: sesv2.Sesv2GetConfigurationSetEventDestinationsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetEventDestinationsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

### Sesv2GetConfigurationSetEventDestinationsResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetEventDestinationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetConfigurationSetEventDestinationsResponse: sesv2.Sesv2GetConfigurationSetEventDestinationsResponse = { ... }
```

##### `eventDestinations`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetEventDestinationsResponse.property.eventDestinations"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EventDestination`](#aws-cdk-sdk.sesv2.Sesv2EventDestination)[]

---

### Sesv2GetConfigurationSetRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetConfigurationSetRequest: sesv2.Sesv2GetConfigurationSetRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest.property.configurationSetName"></a>

- *Type:* `string`

---

### Sesv2GetConfigurationSetResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetConfigurationSetResponse: sesv2.Sesv2GetConfigurationSetResponse = { ... }
```

##### `configurationSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetResponse.property.configurationSetName"></a>

- *Type:* `string`

---

##### `deliveryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetResponse.property.deliveryOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeliveryOptions`](#aws-cdk-sdk.sesv2.Sesv2DeliveryOptions)

---

##### `reputationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetResponse.property.reputationOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ReputationOptions`](#aws-cdk-sdk.sesv2.Sesv2ReputationOptions)

---

##### `sendingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetResponse.property.sendingOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SendingOptions`](#aws-cdk-sdk.sesv2.Sesv2SendingOptions)

---

##### `suppressionOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetResponse.property.suppressionOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SuppressionOptions`](#aws-cdk-sdk.sesv2.Sesv2SuppressionOptions)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

##### `trackingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetResponse.property.trackingOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TrackingOptions`](#aws-cdk-sdk.sesv2.Sesv2TrackingOptions)

---

### Sesv2GetContactListRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetContactListRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetContactListRequest: sesv2.Sesv2GetContactListRequest = { ... }
```

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactListRequest.property.contactListName"></a>

- *Type:* `string`

---

### Sesv2GetContactListResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetContactListResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetContactListResponse: sesv2.Sesv2GetContactListResponse = { ... }
```

##### `contactListName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactListResponse.property.contactListName"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactListResponse.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactListResponse.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactListResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactListResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

##### `topics`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactListResponse.property.topics"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Topic`](#aws-cdk-sdk.sesv2.Sesv2Topic)[]

---

### Sesv2GetContactRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetContactRequest: sesv2.Sesv2GetContactRequest = { ... }
```

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactRequest.property.contactListName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactRequest.property.emailAddress"></a>

- *Type:* `string`

---

### Sesv2GetContactResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetContactResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetContactResponse: sesv2.Sesv2GetContactResponse = { ... }
```

##### `attributesData`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactResponse.property.attributesData"></a>

- *Type:* `string`

---

##### `contactListName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactResponse.property.contactListName"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactResponse.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactResponse.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `topicDefaultPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactResponse.property.topicDefaultPreferences"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TopicPreference`](#aws-cdk-sdk.sesv2.Sesv2TopicPreference)[]

---

##### `topicPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactResponse.property.topicPreferences"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TopicPreference`](#aws-cdk-sdk.sesv2.Sesv2TopicPreference)[]

---

##### `unsubscribeAll`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetContactResponse.property.unsubscribeAll"></a>

- *Type:* `boolean`

---

### Sesv2GetCustomVerificationEmailTemplateRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetCustomVerificationEmailTemplateRequest: sesv2.Sesv2GetCustomVerificationEmailTemplateRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

### Sesv2GetCustomVerificationEmailTemplateResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetCustomVerificationEmailTemplateResponse: sesv2.Sesv2GetCustomVerificationEmailTemplateResponse = { ... }
```

##### `failureRedirectionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateResponse.property.failureRedirectionUrl"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateResponse.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `successRedirectionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateResponse.property.successRedirectionUrl"></a>

- *Type:* `string`

---

##### `templateContent`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateResponse.property.templateContent"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateResponse.property.templateName"></a>

- *Type:* `string`

---

##### `templateSubject`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateResponse.property.templateSubject"></a>

- *Type:* `string`

---

### Sesv2GetDedicatedIpRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDedicatedIpRequest: sesv2.Sesv2GetDedicatedIpRequest = { ... }
```

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpRequest.property.ip"></a>

- *Type:* `string`

---

### Sesv2GetDedicatedIpResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDedicatedIpResponse: sesv2.Sesv2GetDedicatedIpResponse = { ... }
```

##### `dedicatedIp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpResponse.property.dedicatedIp"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DedicatedIp`](#aws-cdk-sdk.sesv2.Sesv2DedicatedIp)

---

### Sesv2GetDedicatedIpsRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDedicatedIpsRequest: sesv2.Sesv2GetDedicatedIpsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsRequest.property.pageSize"></a>

- *Type:* `number`

---

##### `poolName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsRequest.property.poolName"></a>

- *Type:* `string`

---

### Sesv2GetDedicatedIpsResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDedicatedIpsResponse: sesv2.Sesv2GetDedicatedIpsResponse = { ... }
```

##### `dedicatedIps`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsResponse.property.dedicatedIps"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DedicatedIp`](#aws-cdk-sdk.sesv2.Sesv2DedicatedIp)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Sesv2GetDeliverabilityDashboardOptionsRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityDashboardOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDeliverabilityDashboardOptionsRequest: sesv2.Sesv2GetDeliverabilityDashboardOptionsRequest = { ... }
```

### Sesv2GetDeliverabilityDashboardOptionsResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityDashboardOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDeliverabilityDashboardOptionsResponse: sesv2.Sesv2GetDeliverabilityDashboardOptionsResponse = { ... }
```

##### `dashboardEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityDashboardOptionsResponse.property.dashboardEnabled"></a>

- *Type:* `boolean`

---

##### `accountStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityDashboardOptionsResponse.property.accountStatus"></a>

- *Type:* `string`

---

##### `activeSubscribedDomains`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityDashboardOptionsResponse.property.activeSubscribedDomains"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption`](#aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption)[]

---

##### `pendingExpirationSubscribedDomains`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityDashboardOptionsResponse.property.pendingExpirationSubscribedDomains"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption`](#aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption)[]

---

##### `subscriptionExpiryDate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityDashboardOptionsResponse.property.subscriptionExpiryDate"></a>

- *Type:* `string`

---

### Sesv2GetDeliverabilityTestReportRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDeliverabilityTestReportRequest: sesv2.Sesv2GetDeliverabilityTestReportRequest = { ... }
```

##### `reportId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportRequest.property.reportId"></a>

- *Type:* `string`

---

### Sesv2GetDeliverabilityTestReportResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDeliverabilityTestReportResponse: sesv2.Sesv2GetDeliverabilityTestReportResponse = { ... }
```

##### `deliverabilityTestReport`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportResponse.property.deliverabilityTestReport"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport`](#aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport)

---

##### `ispPlacements`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportResponse.property.ispPlacements"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2IspPlacement`](#aws-cdk-sdk.sesv2.Sesv2IspPlacement)[]

---

##### `overallPlacement`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportResponse.property.overallPlacement"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PlacementStatistics`](#aws-cdk-sdk.sesv2.Sesv2PlacementStatistics)

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportResponse.property.message"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

### Sesv2GetDomainDeliverabilityCampaignRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainDeliverabilityCampaignRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDomainDeliverabilityCampaignRequest: sesv2.Sesv2GetDomainDeliverabilityCampaignRequest = { ... }
```

##### `campaignId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainDeliverabilityCampaignRequest.property.campaignId"></a>

- *Type:* `string`

---

### Sesv2GetDomainDeliverabilityCampaignResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainDeliverabilityCampaignResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDomainDeliverabilityCampaignResponse: sesv2.Sesv2GetDomainDeliverabilityCampaignResponse = { ... }
```

##### `domainDeliverabilityCampaign`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainDeliverabilityCampaignResponse.property.domainDeliverabilityCampaign"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign`](#aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign)

---

### Sesv2GetDomainStatisticsReportRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDomainStatisticsReportRequest: sesv2.Sesv2GetDomainStatisticsReportRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest.property.domain"></a>

- *Type:* `string`

---

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest.property.endDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest.property.startDate"></a>

- *Type:* `string`

---

### Sesv2GetDomainStatisticsReportResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetDomainStatisticsReportResponse: sesv2.Sesv2GetDomainStatisticsReportResponse = { ... }
```

##### `dailyVolumes`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportResponse.property.dailyVolumes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DailyVolume`](#aws-cdk-sdk.sesv2.Sesv2DailyVolume)[]

---

##### `overallVolume`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportResponse.property.overallVolume"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2OverallVolume`](#aws-cdk-sdk.sesv2.Sesv2OverallVolume)

---

### Sesv2GetEmailIdentityPoliciesRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetEmailIdentityPoliciesRequest: sesv2.Sesv2GetEmailIdentityPoliciesRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityPoliciesRequest.property.emailIdentity"></a>

- *Type:* `string`

---

### Sesv2GetEmailIdentityPoliciesResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetEmailIdentityPoliciesResponse: sesv2.Sesv2GetEmailIdentityPoliciesResponse = { ... }
```

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityPoliciesResponse.property.policies"></a>

- *Type:* {[ key: string ]: `string`}

---

### Sesv2GetEmailIdentityRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetEmailIdentityRequest: sesv2.Sesv2GetEmailIdentityRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityRequest.property.emailIdentity"></a>

- *Type:* `string`

---

### Sesv2GetEmailIdentityResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetEmailIdentityResponse: sesv2.Sesv2GetEmailIdentityResponse = { ... }
```

##### `dkimAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityResponse.property.dkimAttributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DkimAttributes`](#aws-cdk-sdk.sesv2.Sesv2DkimAttributes)

---

##### `feedbackForwardingStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityResponse.property.feedbackForwardingStatus"></a>

- *Type:* `boolean`

---

##### `identityType`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityResponse.property.identityType"></a>

- *Type:* `string`

---

##### `mailFromAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityResponse.property.mailFromAttributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2MailFromAttributes`](#aws-cdk-sdk.sesv2.Sesv2MailFromAttributes)

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityResponse.property.policies"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

##### `verifiedForSendingStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityResponse.property.verifiedForSendingStatus"></a>

- *Type:* `boolean`

---

### Sesv2GetEmailTemplateRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetEmailTemplateRequest: sesv2.Sesv2GetEmailTemplateRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

### Sesv2GetEmailTemplateResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetEmailTemplateResponse: sesv2.Sesv2GetEmailTemplateResponse = { ... }
```

##### `templateContent`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateResponse.property.templateContent"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EmailTemplateContent`](#aws-cdk-sdk.sesv2.Sesv2EmailTemplateContent)

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateResponse.property.templateName"></a>

- *Type:* `string`

---

### Sesv2GetImportJobRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetImportJobRequest: sesv2.Sesv2GetImportJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest.property.jobId"></a>

- *Type:* `string`

---

### Sesv2GetImportJobResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetImportJobResponse: sesv2.Sesv2GetImportJobResponse = { ... }
```

##### `completedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobResponse.property.completedTimestamp"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobResponse.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `failedRecordsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobResponse.property.failedRecordsCount"></a>

- *Type:* `number`

---

##### `failureInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobResponse.property.failureInfo"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2FailureInfo`](#aws-cdk-sdk.sesv2.Sesv2FailureInfo)

---

##### `importDataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobResponse.property.importDataSource"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ImportDataSource`](#aws-cdk-sdk.sesv2.Sesv2ImportDataSource)

---

##### `importDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobResponse.property.importDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ImportDestination`](#aws-cdk-sdk.sesv2.Sesv2ImportDestination)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `processedRecordsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetImportJobResponse.property.processedRecordsCount"></a>

- *Type:* `number`

---

### Sesv2GetSuppressedDestinationRequest <a name="aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetSuppressedDestinationRequest: sesv2.Sesv2GetSuppressedDestinationRequest = { ... }
```

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationRequest.property.emailAddress"></a>

- *Type:* `string`

---

### Sesv2GetSuppressedDestinationResponse <a name="aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2GetSuppressedDestinationResponse: sesv2.Sesv2GetSuppressedDestinationResponse = { ... }
```

##### `suppressedDestination`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationResponse.property.suppressedDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SuppressedDestination`](#aws-cdk-sdk.sesv2.Sesv2SuppressedDestination)

---

### Sesv2IdentityInfo <a name="aws-cdk-sdk.sesv2.Sesv2IdentityInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2IdentityInfo: sesv2.Sesv2IdentityInfo = { ... }
```

##### `identityName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2IdentityInfo.property.identityName"></a>

- *Type:* `string`

---

##### `identityType`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2IdentityInfo.property.identityType"></a>

- *Type:* `string`

---

##### `sendingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2IdentityInfo.property.sendingEnabled"></a>

- *Type:* `boolean`

---

### Sesv2ImportDataSource <a name="aws-cdk-sdk.sesv2.Sesv2ImportDataSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ImportDataSource: sesv2.Sesv2ImportDataSource = { ... }
```

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ImportDataSource.property.dataFormat"></a>

- *Type:* `string`

---

##### `s3Url`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ImportDataSource.property.s3Url"></a>

- *Type:* `string`

---

### Sesv2ImportDestination <a name="aws-cdk-sdk.sesv2.Sesv2ImportDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ImportDestination: sesv2.Sesv2ImportDestination = { ... }
```

##### `contactListDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ImportDestination.property.contactListDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ContactListDestination`](#aws-cdk-sdk.sesv2.Sesv2ContactListDestination)

---

##### `suppressionListDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ImportDestination.property.suppressionListDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SuppressionListDestination`](#aws-cdk-sdk.sesv2.Sesv2SuppressionListDestination)

---

### Sesv2ImportJobSummary <a name="aws-cdk-sdk.sesv2.Sesv2ImportJobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ImportJobSummary: sesv2.Sesv2ImportJobSummary = { ... }
```

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ImportJobSummary.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `importDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ImportJobSummary.property.importDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ImportDestination`](#aws-cdk-sdk.sesv2.Sesv2ImportDestination)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ImportJobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ImportJobSummary.property.jobStatus"></a>

- *Type:* `string`

---

### Sesv2InboxPlacementTrackingOption <a name="aws-cdk-sdk.sesv2.Sesv2InboxPlacementTrackingOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2InboxPlacementTrackingOption: sesv2.Sesv2InboxPlacementTrackingOption = { ... }
```

##### `global`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2InboxPlacementTrackingOption.property.global"></a>

- *Type:* `boolean`

---

##### `trackedIsps`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2InboxPlacementTrackingOption.property.trackedIsps"></a>

- *Type:* `string`[]

---

### Sesv2IspPlacement <a name="aws-cdk-sdk.sesv2.Sesv2IspPlacement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2IspPlacement: sesv2.Sesv2IspPlacement = { ... }
```

##### `ispName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2IspPlacement.property.ispName"></a>

- *Type:* `string`

---

##### `placementStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2IspPlacement.property.placementStatistics"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PlacementStatistics`](#aws-cdk-sdk.sesv2.Sesv2PlacementStatistics)

---

### Sesv2KinesisFirehoseDestination <a name="aws-cdk-sdk.sesv2.Sesv2KinesisFirehoseDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2KinesisFirehoseDestination: sesv2.Sesv2KinesisFirehoseDestination = { ... }
```

##### `deliveryStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2KinesisFirehoseDestination.property.deliveryStreamArn"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2KinesisFirehoseDestination.property.iamRoleArn"></a>

- *Type:* `string`

---

### Sesv2ListConfigurationSetsRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListConfigurationSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListConfigurationSetsRequest: sesv2.Sesv2ListConfigurationSetsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListConfigurationSetsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListConfigurationSetsRequest.property.pageSize"></a>

- *Type:* `number`

---

### Sesv2ListConfigurationSetsResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListConfigurationSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListConfigurationSetsResponse: sesv2.Sesv2ListConfigurationSetsResponse = { ... }
```

##### `configurationSets`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListConfigurationSetsResponse.property.configurationSets"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListConfigurationSetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Sesv2ListContactListsRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListContactListsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListContactListsRequest: sesv2.Sesv2ListContactListsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactListsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactListsRequest.property.pageSize"></a>

- *Type:* `number`

---

### Sesv2ListContactListsResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListContactListsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListContactListsResponse: sesv2.Sesv2ListContactListsResponse = { ... }
```

##### `contactLists`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactListsResponse.property.contactLists"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ContactList`](#aws-cdk-sdk.sesv2.Sesv2ContactList)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactListsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Sesv2ListContactsFilter <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListContactsFilter: sesv2.Sesv2ListContactsFilter = { ... }
```

##### `filteredStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsFilter.property.filteredStatus"></a>

- *Type:* `string`

---

##### `topicFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsFilter.property.topicFilter"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TopicFilter`](#aws-cdk-sdk.sesv2.Sesv2TopicFilter)

---

### Sesv2ListContactsRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListContactsRequest: sesv2.Sesv2ListContactsRequest = { ... }
```

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsRequest.property.contactListName"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListContactsFilter`](#aws-cdk-sdk.sesv2.Sesv2ListContactsFilter)

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsRequest.property.pageSize"></a>

- *Type:* `number`

---

### Sesv2ListContactsResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListContactsResponse: sesv2.Sesv2ListContactsResponse = { ... }
```

##### `contacts`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsResponse.property.contacts"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Contact`](#aws-cdk-sdk.sesv2.Sesv2Contact)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListContactsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Sesv2ListCustomVerificationEmailTemplatesRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListCustomVerificationEmailTemplatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListCustomVerificationEmailTemplatesRequest: sesv2.Sesv2ListCustomVerificationEmailTemplatesRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListCustomVerificationEmailTemplatesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListCustomVerificationEmailTemplatesRequest.property.pageSize"></a>

- *Type:* `number`

---

### Sesv2ListCustomVerificationEmailTemplatesResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListCustomVerificationEmailTemplatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListCustomVerificationEmailTemplatesResponse: sesv2.Sesv2ListCustomVerificationEmailTemplatesResponse = { ... }
```

##### `customVerificationEmailTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListCustomVerificationEmailTemplatesResponse.property.customVerificationEmailTemplates"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CustomVerificationEmailTemplateMetadata`](#aws-cdk-sdk.sesv2.Sesv2CustomVerificationEmailTemplateMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListCustomVerificationEmailTemplatesResponse.property.nextToken"></a>

- *Type:* `string`

---

### Sesv2ListDedicatedIpPoolsRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListDedicatedIpPoolsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListDedicatedIpPoolsRequest: sesv2.Sesv2ListDedicatedIpPoolsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDedicatedIpPoolsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDedicatedIpPoolsRequest.property.pageSize"></a>

- *Type:* `number`

---

### Sesv2ListDedicatedIpPoolsResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListDedicatedIpPoolsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListDedicatedIpPoolsResponse: sesv2.Sesv2ListDedicatedIpPoolsResponse = { ... }
```

##### `dedicatedIpPools`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDedicatedIpPoolsResponse.property.dedicatedIpPools"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDedicatedIpPoolsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Sesv2ListDeliverabilityTestReportsRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListDeliverabilityTestReportsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListDeliverabilityTestReportsRequest: sesv2.Sesv2ListDeliverabilityTestReportsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDeliverabilityTestReportsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDeliverabilityTestReportsRequest.property.pageSize"></a>

- *Type:* `number`

---

### Sesv2ListDeliverabilityTestReportsResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListDeliverabilityTestReportsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListDeliverabilityTestReportsResponse: sesv2.Sesv2ListDeliverabilityTestReportsResponse = { ... }
```

##### `deliverabilityTestReports`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDeliverabilityTestReportsResponse.property.deliverabilityTestReports"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport`](#aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDeliverabilityTestReportsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Sesv2ListDomainDeliverabilityCampaignsRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListDomainDeliverabilityCampaignsRequest: sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest = { ... }
```

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest.property.endDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest.property.startDate"></a>

- *Type:* `string`

---

##### `subscribedDomain`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest.property.subscribedDomain"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest.property.pageSize"></a>

- *Type:* `number`

---

### Sesv2ListDomainDeliverabilityCampaignsResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListDomainDeliverabilityCampaignsResponse: sesv2.Sesv2ListDomainDeliverabilityCampaignsResponse = { ... }
```

##### `domainDeliverabilityCampaigns`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsResponse.property.domainDeliverabilityCampaigns"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign`](#aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Sesv2ListEmailIdentitiesRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailIdentitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListEmailIdentitiesRequest: sesv2.Sesv2ListEmailIdentitiesRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailIdentitiesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailIdentitiesRequest.property.pageSize"></a>

- *Type:* `number`

---

### Sesv2ListEmailIdentitiesResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailIdentitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListEmailIdentitiesResponse: sesv2.Sesv2ListEmailIdentitiesResponse = { ... }
```

##### `emailIdentities`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailIdentitiesResponse.property.emailIdentities"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2IdentityInfo`](#aws-cdk-sdk.sesv2.Sesv2IdentityInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailIdentitiesResponse.property.nextToken"></a>

- *Type:* `string`

---

### Sesv2ListEmailTemplatesRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailTemplatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListEmailTemplatesRequest: sesv2.Sesv2ListEmailTemplatesRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailTemplatesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailTemplatesRequest.property.pageSize"></a>

- *Type:* `number`

---

### Sesv2ListEmailTemplatesResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailTemplatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListEmailTemplatesResponse: sesv2.Sesv2ListEmailTemplatesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailTemplatesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `templatesMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListEmailTemplatesResponse.property.templatesMetadata"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EmailTemplateMetadata`](#aws-cdk-sdk.sesv2.Sesv2EmailTemplateMetadata)[]

---

### Sesv2ListImportJobsRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListImportJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListImportJobsRequest: sesv2.Sesv2ListImportJobsRequest = { ... }
```

##### `importDestinationType`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListImportJobsRequest.property.importDestinationType"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListImportJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListImportJobsRequest.property.pageSize"></a>

- *Type:* `number`

---

### Sesv2ListImportJobsResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListImportJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListImportJobsResponse: sesv2.Sesv2ListImportJobsResponse = { ... }
```

##### `importJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListImportJobsResponse.property.importJobs"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ImportJobSummary`](#aws-cdk-sdk.sesv2.Sesv2ImportJobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListImportJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Sesv2ListManagementOptions <a name="aws-cdk-sdk.sesv2.Sesv2ListManagementOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListManagementOptions: sesv2.Sesv2ListManagementOptions = { ... }
```

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListManagementOptions.property.contactListName"></a>

- *Type:* `string`

---

##### `topicName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListManagementOptions.property.topicName"></a>

- *Type:* `string`

---

### Sesv2ListSuppressedDestinationsRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListSuppressedDestinationsRequest: sesv2.Sesv2ListSuppressedDestinationsRequest = { ... }
```

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsRequest.property.endDate"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsRequest.property.pageSize"></a>

- *Type:* `number`

---

##### `reasons`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsRequest.property.reasons"></a>

- *Type:* `string`[]

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsRequest.property.startDate"></a>

- *Type:* `string`

---

### Sesv2ListSuppressedDestinationsResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListSuppressedDestinationsResponse: sesv2.Sesv2ListSuppressedDestinationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `suppressedDestinationSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsResponse.property.suppressedDestinationSummaries"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationSummary`](#aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationSummary)[]

---

### Sesv2ListTagsForResourceRequest <a name="aws-cdk-sdk.sesv2.Sesv2ListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListTagsForResourceRequest: sesv2.Sesv2ListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### Sesv2ListTagsForResourceResponse <a name="aws-cdk-sdk.sesv2.Sesv2ListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ListTagsForResourceResponse: sesv2.Sesv2ListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

### Sesv2MailFromAttributes <a name="aws-cdk-sdk.sesv2.Sesv2MailFromAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2MailFromAttributes: sesv2.Sesv2MailFromAttributes = { ... }
```

##### `behaviorOnMxFailure`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2MailFromAttributes.property.behaviorOnMxFailure"></a>

- *Type:* `string`

---

##### `mailFromDomain`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2MailFromAttributes.property.mailFromDomain"></a>

- *Type:* `string`

---

##### `mailFromDomainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2MailFromAttributes.property.mailFromDomainStatus"></a>

- *Type:* `string`

---

### Sesv2Message <a name="aws-cdk-sdk.sesv2.Sesv2Message"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2Message: sesv2.Sesv2Message = { ... }
```

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Message.property.body"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Body`](#aws-cdk-sdk.sesv2.Sesv2Body)

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Message.property.subject"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Content`](#aws-cdk-sdk.sesv2.Sesv2Content)

---

### Sesv2MessageTag <a name="aws-cdk-sdk.sesv2.Sesv2MessageTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2MessageTag: sesv2.Sesv2MessageTag = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2MessageTag.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2MessageTag.property.value"></a>

- *Type:* `string`

---

### Sesv2OverallVolume <a name="aws-cdk-sdk.sesv2.Sesv2OverallVolume"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2OverallVolume: sesv2.Sesv2OverallVolume = { ... }
```

##### `domainIspPlacements`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2OverallVolume.property.domainIspPlacements"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement`](#aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement)[]

---

##### `readRatePercent`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2OverallVolume.property.readRatePercent"></a>

- *Type:* `number`

---

##### `volumeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2OverallVolume.property.volumeStatistics"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2VolumeStatistics`](#aws-cdk-sdk.sesv2.Sesv2VolumeStatistics)

---

### Sesv2PinpointDestination <a name="aws-cdk-sdk.sesv2.Sesv2PinpointDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PinpointDestination: sesv2.Sesv2PinpointDestination = { ... }
```

##### `applicationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PinpointDestination.property.applicationArn"></a>

- *Type:* `string`

---

### Sesv2PlacementStatistics <a name="aws-cdk-sdk.sesv2.Sesv2PlacementStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PlacementStatistics: sesv2.Sesv2PlacementStatistics = { ... }
```

##### `dkimPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PlacementStatistics.property.dkimPercentage"></a>

- *Type:* `number`

---

##### `inboxPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PlacementStatistics.property.inboxPercentage"></a>

- *Type:* `number`

---

##### `missingPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PlacementStatistics.property.missingPercentage"></a>

- *Type:* `number`

---

##### `spamPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PlacementStatistics.property.spamPercentage"></a>

- *Type:* `number`

---

##### `spfPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PlacementStatistics.property.spfPercentage"></a>

- *Type:* `number`

---

### Sesv2PutAccountDedicatedIpWarmupAttributesRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDedicatedIpWarmupAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutAccountDedicatedIpWarmupAttributesRequest: sesv2.Sesv2PutAccountDedicatedIpWarmupAttributesRequest = { ... }
```

##### `autoWarmupEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDedicatedIpWarmupAttributesRequest.property.autoWarmupEnabled"></a>

- *Type:* `boolean`

---

### Sesv2PutAccountDedicatedIpWarmupAttributesResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDedicatedIpWarmupAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutAccountDedicatedIpWarmupAttributesResponse: sesv2.Sesv2PutAccountDedicatedIpWarmupAttributesResponse = { ... }
```

### Sesv2PutAccountDetailsRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDetailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutAccountDetailsRequest: sesv2.Sesv2PutAccountDetailsRequest = { ... }
```

##### `mailType`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDetailsRequest.property.mailType"></a>

- *Type:* `string`

---

##### `useCaseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDetailsRequest.property.useCaseDescription"></a>

- *Type:* `string`

---

##### `websiteUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDetailsRequest.property.websiteUrl"></a>

- *Type:* `string`

---

##### `additionalContactEmailAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDetailsRequest.property.additionalContactEmailAddresses"></a>

- *Type:* `string`[]

---

##### `contactLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDetailsRequest.property.contactLanguage"></a>

- *Type:* `string`

---

##### `productionAccessEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDetailsRequest.property.productionAccessEnabled"></a>

- *Type:* `boolean`

---

### Sesv2PutAccountDetailsResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountDetailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutAccountDetailsResponse: sesv2.Sesv2PutAccountDetailsResponse = { ... }
```

### Sesv2PutAccountSendingAttributesRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountSendingAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutAccountSendingAttributesRequest: sesv2.Sesv2PutAccountSendingAttributesRequest = { ... }
```

##### `sendingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountSendingAttributesRequest.property.sendingEnabled"></a>

- *Type:* `boolean`

---

### Sesv2PutAccountSendingAttributesResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountSendingAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutAccountSendingAttributesResponse: sesv2.Sesv2PutAccountSendingAttributesResponse = { ... }
```

### Sesv2PutAccountSuppressionAttributesRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountSuppressionAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutAccountSuppressionAttributesRequest: sesv2.Sesv2PutAccountSuppressionAttributesRequest = { ... }
```

##### `suppressedReasons`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountSuppressionAttributesRequest.property.suppressedReasons"></a>

- *Type:* `string`[]

---

### Sesv2PutAccountSuppressionAttributesResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutAccountSuppressionAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutAccountSuppressionAttributesResponse: sesv2.Sesv2PutAccountSuppressionAttributesResponse = { ... }
```

### Sesv2PutConfigurationSetDeliveryOptionsRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetDeliveryOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutConfigurationSetDeliveryOptionsRequest: sesv2.Sesv2PutConfigurationSetDeliveryOptionsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetDeliveryOptionsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `sendingPoolName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetDeliveryOptionsRequest.property.sendingPoolName"></a>

- *Type:* `string`

---

##### `tlsPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetDeliveryOptionsRequest.property.tlsPolicy"></a>

- *Type:* `string`

---

### Sesv2PutConfigurationSetDeliveryOptionsResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetDeliveryOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutConfigurationSetDeliveryOptionsResponse: sesv2.Sesv2PutConfigurationSetDeliveryOptionsResponse = { ... }
```

### Sesv2PutConfigurationSetReputationOptionsRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetReputationOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutConfigurationSetReputationOptionsRequest: sesv2.Sesv2PutConfigurationSetReputationOptionsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetReputationOptionsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `reputationMetricsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetReputationOptionsRequest.property.reputationMetricsEnabled"></a>

- *Type:* `boolean`

---

### Sesv2PutConfigurationSetReputationOptionsResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetReputationOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutConfigurationSetReputationOptionsResponse: sesv2.Sesv2PutConfigurationSetReputationOptionsResponse = { ... }
```

### Sesv2PutConfigurationSetSendingOptionsRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSendingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutConfigurationSetSendingOptionsRequest: sesv2.Sesv2PutConfigurationSetSendingOptionsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSendingOptionsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `sendingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSendingOptionsRequest.property.sendingEnabled"></a>

- *Type:* `boolean`

---

### Sesv2PutConfigurationSetSendingOptionsResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSendingOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutConfigurationSetSendingOptionsResponse: sesv2.Sesv2PutConfigurationSetSendingOptionsResponse = { ... }
```

### Sesv2PutConfigurationSetSuppressionOptionsRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSuppressionOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutConfigurationSetSuppressionOptionsRequest: sesv2.Sesv2PutConfigurationSetSuppressionOptionsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSuppressionOptionsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `suppressedReasons`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSuppressionOptionsRequest.property.suppressedReasons"></a>

- *Type:* `string`[]

---

### Sesv2PutConfigurationSetSuppressionOptionsResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetSuppressionOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutConfigurationSetSuppressionOptionsResponse: sesv2.Sesv2PutConfigurationSetSuppressionOptionsResponse = { ... }
```

### Sesv2PutConfigurationSetTrackingOptionsRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetTrackingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutConfigurationSetTrackingOptionsRequest: sesv2.Sesv2PutConfigurationSetTrackingOptionsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetTrackingOptionsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `customRedirectDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetTrackingOptionsRequest.property.customRedirectDomain"></a>

- *Type:* `string`

---

### Sesv2PutConfigurationSetTrackingOptionsResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutConfigurationSetTrackingOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutConfigurationSetTrackingOptionsResponse: sesv2.Sesv2PutConfigurationSetTrackingOptionsResponse = { ... }
```

### Sesv2PutDedicatedIpInPoolRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpInPoolRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutDedicatedIpInPoolRequest: sesv2.Sesv2PutDedicatedIpInPoolRequest = { ... }
```

##### `destinationPoolName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpInPoolRequest.property.destinationPoolName"></a>

- *Type:* `string`

---

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpInPoolRequest.property.ip"></a>

- *Type:* `string`

---

### Sesv2PutDedicatedIpInPoolResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpInPoolResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutDedicatedIpInPoolResponse: sesv2.Sesv2PutDedicatedIpInPoolResponse = { ... }
```

### Sesv2PutDedicatedIpWarmupAttributesRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpWarmupAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutDedicatedIpWarmupAttributesRequest: sesv2.Sesv2PutDedicatedIpWarmupAttributesRequest = { ... }
```

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpWarmupAttributesRequest.property.ip"></a>

- *Type:* `string`

---

##### `warmupPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpWarmupAttributesRequest.property.warmupPercentage"></a>

- *Type:* `number`

---

### Sesv2PutDedicatedIpWarmupAttributesResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutDedicatedIpWarmupAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutDedicatedIpWarmupAttributesResponse: sesv2.Sesv2PutDedicatedIpWarmupAttributesResponse = { ... }
```

### Sesv2PutDeliverabilityDashboardOptionRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutDeliverabilityDashboardOptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutDeliverabilityDashboardOptionRequest: sesv2.Sesv2PutDeliverabilityDashboardOptionRequest = { ... }
```

##### `dashboardEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutDeliverabilityDashboardOptionRequest.property.dashboardEnabled"></a>

- *Type:* `boolean`

---

##### `subscribedDomains`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutDeliverabilityDashboardOptionRequest.property.subscribedDomains"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption`](#aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption)[]

---

### Sesv2PutDeliverabilityDashboardOptionResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutDeliverabilityDashboardOptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutDeliverabilityDashboardOptionResponse: sesv2.Sesv2PutDeliverabilityDashboardOptionResponse = { ... }
```

### Sesv2PutEmailIdentityDkimAttributesRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutEmailIdentityDkimAttributesRequest: sesv2.Sesv2PutEmailIdentityDkimAttributesRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimAttributesRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `signingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimAttributesRequest.property.signingEnabled"></a>

- *Type:* `boolean`

---

### Sesv2PutEmailIdentityDkimAttributesResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutEmailIdentityDkimAttributesResponse: sesv2.Sesv2PutEmailIdentityDkimAttributesResponse = { ... }
```

### Sesv2PutEmailIdentityDkimSigningAttributesRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutEmailIdentityDkimSigningAttributesRequest: sesv2.Sesv2PutEmailIdentityDkimSigningAttributesRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `signingAttributesOrigin`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesRequest.property.signingAttributesOrigin"></a>

- *Type:* `string`

---

##### `signingAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesRequest.property.signingAttributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DkimSigningAttributes`](#aws-cdk-sdk.sesv2.Sesv2DkimSigningAttributes)

---

### Sesv2PutEmailIdentityDkimSigningAttributesResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutEmailIdentityDkimSigningAttributesResponse: sesv2.Sesv2PutEmailIdentityDkimSigningAttributesResponse = { ... }
```

##### `dkimStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesResponse.property.dkimStatus"></a>

- *Type:* `string`

---

##### `dkimTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesResponse.property.dkimTokens"></a>

- *Type:* `string`[]

---

### Sesv2PutEmailIdentityFeedbackAttributesRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityFeedbackAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutEmailIdentityFeedbackAttributesRequest: sesv2.Sesv2PutEmailIdentityFeedbackAttributesRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityFeedbackAttributesRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `emailForwardingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityFeedbackAttributesRequest.property.emailForwardingEnabled"></a>

- *Type:* `boolean`

---

### Sesv2PutEmailIdentityFeedbackAttributesResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityFeedbackAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutEmailIdentityFeedbackAttributesResponse: sesv2.Sesv2PutEmailIdentityFeedbackAttributesResponse = { ... }
```

### Sesv2PutEmailIdentityMailFromAttributesRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityMailFromAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutEmailIdentityMailFromAttributesRequest: sesv2.Sesv2PutEmailIdentityMailFromAttributesRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityMailFromAttributesRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `behaviorOnMxFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityMailFromAttributesRequest.property.behaviorOnMxFailure"></a>

- *Type:* `string`

---

##### `mailFromDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityMailFromAttributesRequest.property.mailFromDomain"></a>

- *Type:* `string`

---

### Sesv2PutEmailIdentityMailFromAttributesResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityMailFromAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutEmailIdentityMailFromAttributesResponse: sesv2.Sesv2PutEmailIdentityMailFromAttributesResponse = { ... }
```

### Sesv2PutSuppressedDestinationRequest <a name="aws-cdk-sdk.sesv2.Sesv2PutSuppressedDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutSuppressedDestinationRequest: sesv2.Sesv2PutSuppressedDestinationRequest = { ... }
```

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutSuppressedDestinationRequest.property.emailAddress"></a>

- *Type:* `string`

---

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2PutSuppressedDestinationRequest.property.reason"></a>

- *Type:* `string`

---

### Sesv2PutSuppressedDestinationResponse <a name="aws-cdk-sdk.sesv2.Sesv2PutSuppressedDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2PutSuppressedDestinationResponse: sesv2.Sesv2PutSuppressedDestinationResponse = { ... }
```

### Sesv2RawMessage <a name="aws-cdk-sdk.sesv2.Sesv2RawMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2RawMessage: sesv2.Sesv2RawMessage = { ... }
```

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2RawMessage.property.data"></a>

- *Type:* `any`

---

### Sesv2ReplacementEmailContent <a name="aws-cdk-sdk.sesv2.Sesv2ReplacementEmailContent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ReplacementEmailContent: sesv2.Sesv2ReplacementEmailContent = { ... }
```

##### `replacementTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ReplacementEmailContent.property.replacementTemplate"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ReplacementTemplate`](#aws-cdk-sdk.sesv2.Sesv2ReplacementTemplate)

---

### Sesv2ReplacementTemplate <a name="aws-cdk-sdk.sesv2.Sesv2ReplacementTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ReplacementTemplate: sesv2.Sesv2ReplacementTemplate = { ... }
```

##### `replacementTemplateData`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ReplacementTemplate.property.replacementTemplateData"></a>

- *Type:* `string`

---

### Sesv2ReputationOptions <a name="aws-cdk-sdk.sesv2.Sesv2ReputationOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ReputationOptions: sesv2.Sesv2ReputationOptions = { ... }
```

##### `lastFreshStart`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ReputationOptions.property.lastFreshStart"></a>

- *Type:* `string`

---

##### `reputationMetricsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ReputationOptions.property.reputationMetricsEnabled"></a>

- *Type:* `boolean`

---

### Sesv2ReviewDetails <a name="aws-cdk-sdk.sesv2.Sesv2ReviewDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2ReviewDetails: sesv2.Sesv2ReviewDetails = { ... }
```

##### `caseId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ReviewDetails.property.caseId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2ReviewDetails.property.status"></a>

- *Type:* `string`

---

### Sesv2SendBulkEmailRequest <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SendBulkEmailRequest: sesv2.Sesv2SendBulkEmailRequest = { ... }
```

##### `bulkEmailEntries`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest.property.bulkEmailEntries"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2BulkEmailEntry`](#aws-cdk-sdk.sesv2.Sesv2BulkEmailEntry)[]

---

##### `defaultContent`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest.property.defaultContent"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2BulkEmailContent`](#aws-cdk-sdk.sesv2.Sesv2BulkEmailContent)

---

##### `configurationSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `defaultEmailTags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest.property.defaultEmailTags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2MessageTag`](#aws-cdk-sdk.sesv2.Sesv2MessageTag)[]

---

##### `feedbackForwardingEmailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest.property.feedbackForwardingEmailAddress"></a>

- *Type:* `string`

---

##### `feedbackForwardingEmailAddressIdentityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest.property.feedbackForwardingEmailAddressIdentityArn"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `fromEmailAddressIdentityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest.property.fromEmailAddressIdentityArn"></a>

- *Type:* `string`

---

##### `replyToAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest.property.replyToAddresses"></a>

- *Type:* `string`[]

---

### Sesv2SendBulkEmailResponse <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SendBulkEmailResponse: sesv2.Sesv2SendBulkEmailResponse = { ... }
```

##### `bulkEmailEntryResults`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendBulkEmailResponse.property.bulkEmailEntryResults"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2BulkEmailEntryResult`](#aws-cdk-sdk.sesv2.Sesv2BulkEmailEntryResult)[]

---

### Sesv2SendCustomVerificationEmailRequest <a name="aws-cdk-sdk.sesv2.Sesv2SendCustomVerificationEmailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SendCustomVerificationEmailRequest: sesv2.Sesv2SendCustomVerificationEmailRequest = { ... }
```

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendCustomVerificationEmailRequest.property.emailAddress"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendCustomVerificationEmailRequest.property.templateName"></a>

- *Type:* `string`

---

##### `configurationSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendCustomVerificationEmailRequest.property.configurationSetName"></a>

- *Type:* `string`

---

### Sesv2SendCustomVerificationEmailResponse <a name="aws-cdk-sdk.sesv2.Sesv2SendCustomVerificationEmailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SendCustomVerificationEmailResponse: sesv2.Sesv2SendCustomVerificationEmailResponse = { ... }
```

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendCustomVerificationEmailResponse.property.messageId"></a>

- *Type:* `string`

---

### Sesv2SendEmailRequest <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SendEmailRequest: sesv2.Sesv2SendEmailRequest = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest.property.content"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EmailContent`](#aws-cdk-sdk.sesv2.Sesv2EmailContent)

---

##### `configurationSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest.property.destination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Destination`](#aws-cdk-sdk.sesv2.Sesv2Destination)

---

##### `emailTags`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest.property.emailTags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2MessageTag`](#aws-cdk-sdk.sesv2.Sesv2MessageTag)[]

---

##### `feedbackForwardingEmailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest.property.feedbackForwardingEmailAddress"></a>

- *Type:* `string`

---

##### `feedbackForwardingEmailAddressIdentityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest.property.feedbackForwardingEmailAddressIdentityArn"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `fromEmailAddressIdentityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest.property.fromEmailAddressIdentityArn"></a>

- *Type:* `string`

---

##### `listManagementOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest.property.listManagementOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListManagementOptions`](#aws-cdk-sdk.sesv2.Sesv2ListManagementOptions)

---

##### `replyToAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailRequest.property.replyToAddresses"></a>

- *Type:* `string`[]

---

### Sesv2SendEmailResponse <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SendEmailResponse: sesv2.Sesv2SendEmailResponse = { ... }
```

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendEmailResponse.property.messageId"></a>

- *Type:* `string`

---

### Sesv2SendingOptions <a name="aws-cdk-sdk.sesv2.Sesv2SendingOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SendingOptions: sesv2.Sesv2SendingOptions = { ... }
```

##### `sendingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendingOptions.property.sendingEnabled"></a>

- *Type:* `boolean`

---

### Sesv2SendQuota <a name="aws-cdk-sdk.sesv2.Sesv2SendQuota"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SendQuota: sesv2.Sesv2SendQuota = { ... }
```

##### `max24HourSend`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendQuota.property.max24HourSend"></a>

- *Type:* `number`

---

##### `maxSendRate`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendQuota.property.maxSendRate"></a>

- *Type:* `number`

---

##### `sentLast24Hours`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SendQuota.property.sentLast24Hours"></a>

- *Type:* `number`

---

### Sesv2SnsDestination <a name="aws-cdk-sdk.sesv2.Sesv2SnsDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SnsDestination: sesv2.Sesv2SnsDestination = { ... }
```

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SnsDestination.property.topicArn"></a>

- *Type:* `string`

---

### Sesv2SuppressedDestination <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SuppressedDestination: sesv2.Sesv2SuppressedDestination = { ... }
```

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestination.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestination.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestination.property.reason"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestination.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationAttributes`](#aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationAttributes)

---

### Sesv2SuppressedDestinationAttributes <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SuppressedDestinationAttributes: sesv2.Sesv2SuppressedDestinationAttributes = { ... }
```

##### `feedbackId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationAttributes.property.feedbackId"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationAttributes.property.messageId"></a>

- *Type:* `string`

---

### Sesv2SuppressedDestinationSummary <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SuppressedDestinationSummary: sesv2.Sesv2SuppressedDestinationSummary = { ... }
```

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationSummary.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationSummary.property.reason"></a>

- *Type:* `string`

---

### Sesv2SuppressionAttributes <a name="aws-cdk-sdk.sesv2.Sesv2SuppressionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SuppressionAttributes: sesv2.Sesv2SuppressionAttributes = { ... }
```

##### `suppressedReasons`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressionAttributes.property.suppressedReasons"></a>

- *Type:* `string`[]

---

### Sesv2SuppressionListDestination <a name="aws-cdk-sdk.sesv2.Sesv2SuppressionListDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SuppressionListDestination: sesv2.Sesv2SuppressionListDestination = { ... }
```

##### `suppressionListImportAction`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressionListDestination.property.suppressionListImportAction"></a>

- *Type:* `string`

---

### Sesv2SuppressionOptions <a name="aws-cdk-sdk.sesv2.Sesv2SuppressionOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2SuppressionOptions: sesv2.Sesv2SuppressionOptions = { ... }
```

##### `suppressedReasons`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2SuppressionOptions.property.suppressedReasons"></a>

- *Type:* `string`[]

---

### Sesv2Tag <a name="aws-cdk-sdk.sesv2.Sesv2Tag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2Tag: sesv2.Sesv2Tag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Tag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Tag.property.value"></a>

- *Type:* `string`

---

### Sesv2TagResourceRequest <a name="aws-cdk-sdk.sesv2.Sesv2TagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2TagResourceRequest: sesv2.Sesv2TagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2TagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2TagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

### Sesv2TagResourceResponse <a name="aws-cdk-sdk.sesv2.Sesv2TagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2TagResourceResponse: sesv2.Sesv2TagResourceResponse = { ... }
```

### Sesv2Template <a name="aws-cdk-sdk.sesv2.Sesv2Template"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2Template: sesv2.Sesv2Template = { ... }
```

##### `templateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Template.property.templateArn"></a>

- *Type:* `string`

---

##### `templateData`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Template.property.templateData"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Template.property.templateName"></a>

- *Type:* `string`

---

### Sesv2TestRenderEmailTemplateRequest <a name="aws-cdk-sdk.sesv2.Sesv2TestRenderEmailTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2TestRenderEmailTemplateRequest: sesv2.Sesv2TestRenderEmailTemplateRequest = { ... }
```

##### `templateData`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2TestRenderEmailTemplateRequest.property.templateData"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2TestRenderEmailTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

### Sesv2TestRenderEmailTemplateResponse <a name="aws-cdk-sdk.sesv2.Sesv2TestRenderEmailTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2TestRenderEmailTemplateResponse: sesv2.Sesv2TestRenderEmailTemplateResponse = { ... }
```

##### `renderedTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2TestRenderEmailTemplateResponse.property.renderedTemplate"></a>

- *Type:* `string`

---

### Sesv2Topic <a name="aws-cdk-sdk.sesv2.Sesv2Topic"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2Topic: sesv2.Sesv2Topic = { ... }
```

##### `defaultSubscriptionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Topic.property.defaultSubscriptionStatus"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Topic.property.displayName"></a>

- *Type:* `string`

---

##### `topicName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Topic.property.topicName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2Topic.property.description"></a>

- *Type:* `string`

---

### Sesv2TopicFilter <a name="aws-cdk-sdk.sesv2.Sesv2TopicFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2TopicFilter: sesv2.Sesv2TopicFilter = { ... }
```

##### `topicName`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2TopicFilter.property.topicName"></a>

- *Type:* `string`

---

##### `useDefaultIfPreferenceUnavailable`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2TopicFilter.property.useDefaultIfPreferenceUnavailable"></a>

- *Type:* `boolean`

---

### Sesv2TopicPreference <a name="aws-cdk-sdk.sesv2.Sesv2TopicPreference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2TopicPreference: sesv2.Sesv2TopicPreference = { ... }
```

##### `subscriptionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2TopicPreference.property.subscriptionStatus"></a>

- *Type:* `string`

---

##### `topicName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2TopicPreference.property.topicName"></a>

- *Type:* `string`

---

### Sesv2TrackingOptions <a name="aws-cdk-sdk.sesv2.Sesv2TrackingOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2TrackingOptions: sesv2.Sesv2TrackingOptions = { ... }
```

##### `customRedirectDomain`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2TrackingOptions.property.customRedirectDomain"></a>

- *Type:* `string`

---

### Sesv2UntagResourceRequest <a name="aws-cdk-sdk.sesv2.Sesv2UntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UntagResourceRequest: sesv2.Sesv2UntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### Sesv2UntagResourceResponse <a name="aws-cdk-sdk.sesv2.Sesv2UntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UntagResourceResponse: sesv2.Sesv2UntagResourceResponse = { ... }
```

### Sesv2UpdateConfigurationSetEventDestinationRequest <a name="aws-cdk-sdk.sesv2.Sesv2UpdateConfigurationSetEventDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateConfigurationSetEventDestinationRequest: sesv2.Sesv2UpdateConfigurationSetEventDestinationRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateConfigurationSetEventDestinationRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `eventDestination`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateConfigurationSetEventDestinationRequest.property.eventDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition`](#aws-cdk-sdk.sesv2.Sesv2EventDestinationDefinition)

---

##### `eventDestinationName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateConfigurationSetEventDestinationRequest.property.eventDestinationName"></a>

- *Type:* `string`

---

### Sesv2UpdateConfigurationSetEventDestinationResponse <a name="aws-cdk-sdk.sesv2.Sesv2UpdateConfigurationSetEventDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateConfigurationSetEventDestinationResponse: sesv2.Sesv2UpdateConfigurationSetEventDestinationResponse = { ... }
```

### Sesv2UpdateContactListRequest <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactListRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateContactListRequest: sesv2.Sesv2UpdateContactListRequest = { ... }
```

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactListRequest.property.contactListName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactListRequest.property.description"></a>

- *Type:* `string`

---

##### `topics`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactListRequest.property.topics"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Topic`](#aws-cdk-sdk.sesv2.Sesv2Topic)[]

---

### Sesv2UpdateContactListResponse <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactListResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateContactListResponse: sesv2.Sesv2UpdateContactListResponse = { ... }
```

### Sesv2UpdateContactRequest <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateContactRequest: sesv2.Sesv2UpdateContactRequest = { ... }
```

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactRequest.property.contactListName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactRequest.property.emailAddress"></a>

- *Type:* `string`

---

##### `attributesData`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactRequest.property.attributesData"></a>

- *Type:* `string`

---

##### `topicPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactRequest.property.topicPreferences"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TopicPreference`](#aws-cdk-sdk.sesv2.Sesv2TopicPreference)[]

---

##### `unsubscribeAll`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactRequest.property.unsubscribeAll"></a>

- *Type:* `boolean`

---

### Sesv2UpdateContactResponse <a name="aws-cdk-sdk.sesv2.Sesv2UpdateContactResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateContactResponse: sesv2.Sesv2UpdateContactResponse = { ... }
```

### Sesv2UpdateCustomVerificationEmailTemplateRequest <a name="aws-cdk-sdk.sesv2.Sesv2UpdateCustomVerificationEmailTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateCustomVerificationEmailTemplateRequest: sesv2.Sesv2UpdateCustomVerificationEmailTemplateRequest = { ... }
```

##### `failureRedirectionUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateCustomVerificationEmailTemplateRequest.property.failureRedirectionUrl"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateCustomVerificationEmailTemplateRequest.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `successRedirectionUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateCustomVerificationEmailTemplateRequest.property.successRedirectionUrl"></a>

- *Type:* `string`

---

##### `templateContent`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateCustomVerificationEmailTemplateRequest.property.templateContent"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateCustomVerificationEmailTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

##### `templateSubject`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateCustomVerificationEmailTemplateRequest.property.templateSubject"></a>

- *Type:* `string`

---

### Sesv2UpdateCustomVerificationEmailTemplateResponse <a name="aws-cdk-sdk.sesv2.Sesv2UpdateCustomVerificationEmailTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateCustomVerificationEmailTemplateResponse: sesv2.Sesv2UpdateCustomVerificationEmailTemplateResponse = { ... }
```

### Sesv2UpdateEmailIdentityPolicyRequest <a name="aws-cdk-sdk.sesv2.Sesv2UpdateEmailIdentityPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateEmailIdentityPolicyRequest: sesv2.Sesv2UpdateEmailIdentityPolicyRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateEmailIdentityPolicyRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateEmailIdentityPolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateEmailIdentityPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

### Sesv2UpdateEmailIdentityPolicyResponse <a name="aws-cdk-sdk.sesv2.Sesv2UpdateEmailIdentityPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateEmailIdentityPolicyResponse: sesv2.Sesv2UpdateEmailIdentityPolicyResponse = { ... }
```

### Sesv2UpdateEmailTemplateRequest <a name="aws-cdk-sdk.sesv2.Sesv2UpdateEmailTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateEmailTemplateRequest: sesv2.Sesv2UpdateEmailTemplateRequest = { ... }
```

##### `templateContent`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateEmailTemplateRequest.property.templateContent"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EmailTemplateContent`](#aws-cdk-sdk.sesv2.Sesv2EmailTemplateContent)

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.Sesv2UpdateEmailTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

### Sesv2UpdateEmailTemplateResponse <a name="aws-cdk-sdk.sesv2.Sesv2UpdateEmailTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2UpdateEmailTemplateResponse: sesv2.Sesv2UpdateEmailTemplateResponse = { ... }
```

### Sesv2VolumeStatistics <a name="aws-cdk-sdk.sesv2.Sesv2VolumeStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

const sesv2VolumeStatistics: sesv2.Sesv2VolumeStatistics = { ... }
```

##### `inboxRawCount`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2VolumeStatistics.property.inboxRawCount"></a>

- *Type:* `number`

---

##### `projectedInbox`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2VolumeStatistics.property.projectedInbox"></a>

- *Type:* `number`

---

##### `projectedSpam`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2VolumeStatistics.property.projectedSpam"></a>

- *Type:* `number`

---

##### `spamRawCount`<sup>Optional</sup> <a name="aws-cdk-sdk.sesv2.Sesv2VolumeStatistics.property.spamRawCount"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### SESV2ResponsesCreateDeliverabilityTestReport <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateDeliverabilityTestReport"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateDeliverabilityTestReport.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesCreateDeliverabilityTestReport(__scope: Construct, __resources: string[], __input: Sesv2CreateDeliverabilityTestReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateDeliverabilityTestReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateDeliverabilityTestReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateDeliverabilityTestReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateDeliverabilityTestReportRequest)

---



#### Properties <a name="Properties"></a>

##### `deliverabilityTestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateDeliverabilityTestReport.property.deliverabilityTestStatus"></a>

- *Type:* `string`

---

##### `reportId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateDeliverabilityTestReport.property.reportId"></a>

- *Type:* `string`

---


### SESV2ResponsesCreateEmailIdentity <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentity.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesCreateEmailIdentity(__scope: Construct, __resources: string[], __input: Sesv2CreateEmailIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `dkimAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentity.property.dkimAttributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes`](#aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes)

---

##### `identityType`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentity.property.identityType"></a>

- *Type:* `string`

---

##### `verifiedForSendingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentity.property.verifiedForSendingStatus"></a>

- *Type:* `boolean`

---


### SESV2ResponsesCreateEmailIdentityDkimAttributes <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes(__scope: Construct, __resources: string[], __input: Sesv2CreateEmailIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateEmailIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `signingAttributesOrigin`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes.property.signingAttributesOrigin"></a>

- *Type:* `string`

---

##### `signingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes.property.signingEnabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes.property.status"></a>

- *Type:* `string`

---

##### `tokens`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateEmailIdentityDkimAttributes.property.tokens"></a>

- *Type:* `string`[]

---


### SESV2ResponsesCreateImportJob <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateImportJob"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateImportJob.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesCreateImportJob(__scope: Construct, __resources: string[], __input: Sesv2CreateImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateImportJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateImportJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateImportJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CreateImportJobRequest`](#aws-cdk-sdk.sesv2.Sesv2CreateImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesCreateImportJob.property.jobId"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchAccount <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchAccount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `dedicatedIpAutoWarmupEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount.property.dedicatedIpAutoWarmupEnabled"></a>

- *Type:* `boolean`

---

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount.property.details"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails)

---

##### `enforcementStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount.property.enforcementStatus"></a>

- *Type:* `string`

---

##### `productionAccessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount.property.productionAccessEnabled"></a>

- *Type:* `boolean`

---

##### `sendingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount.property.sendingEnabled"></a>

- *Type:* `boolean`

---

##### `sendQuota`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount.property.sendQuota"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSendQuota`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSendQuota)

---

##### `suppressionAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccount.property.suppressionAttributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSuppressionAttributes`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSuppressionAttributes)

---


### SESV2ResponsesFetchAccountDetails <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchAccountDetails(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `additionalContactEmailAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails.property.additionalContactEmailAddresses"></a>

- *Type:* `string`[]

---

##### `contactLanguage`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails.property.contactLanguage"></a>

- *Type:* `string`

---

##### `mailType`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails.property.mailType"></a>

- *Type:* `string`

---

##### `reviewDetails`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails.property.reviewDetails"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetailsReviewDetails`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetailsReviewDetails)

---

##### `useCaseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails.property.useCaseDescription"></a>

- *Type:* `string`

---

##### `websiteUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetails.property.websiteUrl"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchAccountDetailsReviewDetails <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetailsReviewDetails"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetailsReviewDetails.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchAccountDetailsReviewDetails(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetailsReviewDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetailsReviewDetails.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `caseId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetailsReviewDetails.property.caseId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountDetailsReviewDetails.property.status"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchAccountSendQuota <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSendQuota"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSendQuota.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchAccountSendQuota(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSendQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSendQuota.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `max24HourSend`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSendQuota.property.max24HourSend"></a>

- *Type:* `number`

---

##### `maxSendRate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSendQuota.property.maxSendRate"></a>

- *Type:* `number`

---

##### `sentLast24Hours`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSendQuota.property.sentLast24Hours"></a>

- *Type:* `number`

---


### SESV2ResponsesFetchAccountSuppressionAttributes <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSuppressionAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSuppressionAttributes.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchAccountSuppressionAttributes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSuppressionAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSuppressionAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `suppressedReasons`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchAccountSuppressionAttributes.property.suppressedReasons"></a>

- *Type:* `string`[]

---


### SESV2ResponsesFetchBlacklistReports <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchBlacklistReports"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchBlacklistReports.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchBlacklistReports(__scope: Construct, __resources: string[], __input: Sesv2GetBlacklistReportsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchBlacklistReports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchBlacklistReports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchBlacklistReports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetBlacklistReportsRequest`](#aws-cdk-sdk.sesv2.Sesv2GetBlacklistReportsRequest)

---



#### Properties <a name="Properties"></a>

##### `blacklistReport`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchBlacklistReports.property.blacklistReport"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.sesv2.Sesv2BlacklistEntry`](#aws-cdk-sdk.sesv2.Sesv2BlacklistEntry)[]}

---


### SESV2ResponsesFetchConfigurationSet <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchConfigurationSet(__scope: Construct, __resources: string[], __input: Sesv2GetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest`](#aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.property.configurationSetName"></a>

- *Type:* `string`

---

##### `deliveryOptions`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.property.deliveryOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetDeliveryOptions`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetDeliveryOptions)

---

##### `reputationOptions`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.property.reputationOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetReputationOptions`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetReputationOptions)

---

##### `sendingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.property.sendingOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSendingOptions`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSendingOptions)

---

##### `suppressionOptions`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.property.suppressionOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSuppressionOptions`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSuppressionOptions)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

##### `trackingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSet.property.trackingOptions"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetTrackingOptions`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetTrackingOptions)

---


### SESV2ResponsesFetchConfigurationSetDeliveryOptions <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetDeliveryOptions.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchConfigurationSetDeliveryOptions(__scope: Construct, __resources: string[], __input: Sesv2GetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetDeliveryOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetDeliveryOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetDeliveryOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest`](#aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `sendingPoolName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetDeliveryOptions.property.sendingPoolName"></a>

- *Type:* `string`

---

##### `tlsPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchConfigurationSetEventDestinations <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetEventDestinations"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetEventDestinations.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchConfigurationSetEventDestinations(__scope: Construct, __resources: string[], __input: Sesv2GetConfigurationSetEventDestinationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetEventDestinations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetEventDestinations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetEventDestinations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetEventDestinationsRequest`](#aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetEventDestinationsRequest)

---



#### Properties <a name="Properties"></a>

##### `eventDestinations`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetEventDestinations.property.eventDestinations"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EventDestination`](#aws-cdk-sdk.sesv2.Sesv2EventDestination)[]

---


### SESV2ResponsesFetchConfigurationSetReputationOptions <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetReputationOptions"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetReputationOptions.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchConfigurationSetReputationOptions(__scope: Construct, __resources: string[], __input: Sesv2GetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetReputationOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetReputationOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetReputationOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest`](#aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `lastFreshStart`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetReputationOptions.property.lastFreshStart"></a>

- *Type:* `string`

---

##### `reputationMetricsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetReputationOptions.property.reputationMetricsEnabled"></a>

- *Type:* `boolean`

---


### SESV2ResponsesFetchConfigurationSetSendingOptions <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSendingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSendingOptions.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchConfigurationSetSendingOptions(__scope: Construct, __resources: string[], __input: Sesv2GetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSendingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSendingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSendingOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest`](#aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `sendingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSendingOptions.property.sendingEnabled"></a>

- *Type:* `boolean`

---


### SESV2ResponsesFetchConfigurationSetSuppressionOptions <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSuppressionOptions.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchConfigurationSetSuppressionOptions(__scope: Construct, __resources: string[], __input: Sesv2GetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSuppressionOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSuppressionOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSuppressionOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest`](#aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `suppressedReasons`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetSuppressionOptions.property.suppressedReasons"></a>

- *Type:* `string`[]

---


### SESV2ResponsesFetchConfigurationSetTrackingOptions <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetTrackingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetTrackingOptions.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchConfigurationSetTrackingOptions(__scope: Construct, __resources: string[], __input: Sesv2GetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetTrackingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetTrackingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetTrackingOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest`](#aws-cdk-sdk.sesv2.Sesv2GetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `customRedirectDomain`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchContact <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchContact(__scope: Construct, __resources: string[], __input: Sesv2GetContactRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetContactRequest`](#aws-cdk-sdk.sesv2.Sesv2GetContactRequest)

---



#### Properties <a name="Properties"></a>

##### `attributesData`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.property.attributesData"></a>

- *Type:* `string`

---

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.property.contactListName"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `topicDefaultPreferences`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.property.topicDefaultPreferences"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TopicPreference`](#aws-cdk-sdk.sesv2.Sesv2TopicPreference)[]

---

##### `topicPreferences`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.property.topicPreferences"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TopicPreference`](#aws-cdk-sdk.sesv2.Sesv2TopicPreference)[]

---

##### `unsubscribeAll`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContact.property.unsubscribeAll"></a>

- *Type:* `boolean`

---


### SESV2ResponsesFetchContactList <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchContactList(__scope: Construct, __resources: string[], __input: Sesv2GetContactListRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetContactListRequest`](#aws-cdk-sdk.sesv2.Sesv2GetContactListRequest)

---



#### Properties <a name="Properties"></a>

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList.property.contactListName"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

##### `topics`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchContactList.property.topics"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Topic`](#aws-cdk-sdk.sesv2.Sesv2Topic)[]

---


### SESV2ResponsesFetchCustomVerificationEmailTemplate <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate(__scope: Construct, __resources: string[], __input: Sesv2GetCustomVerificationEmailTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2GetCustomVerificationEmailTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `failureRedirectionUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate.property.failureRedirectionUrl"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `successRedirectionUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate.property.successRedirectionUrl"></a>

- *Type:* `string`

---

##### `templateContent`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate.property.templateContent"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate.property.templateName"></a>

- *Type:* `string`

---

##### `templateSubject`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchCustomVerificationEmailTemplate.property.templateSubject"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchDedicatedIp <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIp"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIp.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDedicatedIp(__scope: Construct, __resources: string[], __input: Sesv2GetDedicatedIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedIp`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIp.property.dedicatedIp"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp)

---


### SESV2ResponsesFetchDedicatedIpDedicatedIp <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp(__scope: Construct, __resources: string[], __input: Sesv2GetDedicatedIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpRequest)

---



#### Properties <a name="Properties"></a>

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp.property.ip"></a>

- *Type:* `string`

---

##### `poolName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp.property.poolName"></a>

- *Type:* `string`

---

##### `warmupPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp.property.warmupPercentage"></a>

- *Type:* `number`

---

##### `warmupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIpDedicatedIp.property.warmupStatus"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchDedicatedIps <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIps"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIps.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDedicatedIps(__scope: Construct, __resources: string[], __input: Sesv2GetDedicatedIpsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIps.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIps.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIps.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDedicatedIpsRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedIps`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIps.property.dedicatedIps"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DedicatedIp`](#aws-cdk-sdk.sesv2.Sesv2DedicatedIp)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDedicatedIps.property.nextToken"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchDeliverabilityDashboardOptions <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityDashboardOptions"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityDashboardOptions.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDeliverabilityDashboardOptions(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityDashboardOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityDashboardOptions.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `accountStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityDashboardOptions.property.accountStatus"></a>

- *Type:* `string`

---

##### `activeSubscribedDomains`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityDashboardOptions.property.activeSubscribedDomains"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption`](#aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption)[]

---

##### `dashboardEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityDashboardOptions.property.dashboardEnabled"></a>

- *Type:* `boolean`

---

##### `pendingExpirationSubscribedDomains`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityDashboardOptions.property.pendingExpirationSubscribedDomains"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption`](#aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityTrackingOption)[]

---

##### `subscriptionExpiryDate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityDashboardOptions.property.subscriptionExpiryDate"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchDeliverabilityTestReport <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReport"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReport.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDeliverabilityTestReport(__scope: Construct, __resources: string[], __input: Sesv2GetDeliverabilityTestReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportRequest)

---



#### Properties <a name="Properties"></a>

##### `deliverabilityTestReport`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReport.property.deliverabilityTestReport"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport)

---

##### `ispPlacements`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReport.property.ispPlacements"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2IspPlacement`](#aws-cdk-sdk.sesv2.Sesv2IspPlacement)[]

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReport.property.message"></a>

- *Type:* `string`

---

##### `overallPlacement`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReport.property.overallPlacement"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReport.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---


### SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport(__scope: Construct, __resources: string[], __input: Sesv2GetDeliverabilityTestReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.createDate"></a>

- *Type:* `string`

---

##### `deliverabilityTestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.deliverabilityTestStatus"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `reportId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.reportId"></a>

- *Type:* `string`

---

##### `reportName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.reportName"></a>

- *Type:* `string`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.subject"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement(__scope: Construct, __resources: string[], __input: Sesv2GetDeliverabilityTestReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDeliverabilityTestReportRequest)

---



#### Properties <a name="Properties"></a>

##### `dkimPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement.property.dkimPercentage"></a>

- *Type:* `number`

---

##### `inboxPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement.property.inboxPercentage"></a>

- *Type:* `number`

---

##### `missingPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement.property.missingPercentage"></a>

- *Type:* `number`

---

##### `spamPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement.property.spamPercentage"></a>

- *Type:* `number`

---

##### `spfPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement.property.spfPercentage"></a>

- *Type:* `number`

---


### SESV2ResponsesFetchDomainDeliverabilityCampaign <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaign"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaign.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaign(__scope: Construct, __resources: string[], __input: Sesv2GetDomainDeliverabilityCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaign.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaign.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaign.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDomainDeliverabilityCampaignRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDomainDeliverabilityCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `domainDeliverabilityCampaign`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaign.property.domainDeliverabilityCampaign"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign)

---


### SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign(__scope: Construct, __resources: string[], __input: Sesv2GetDomainDeliverabilityCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDomainDeliverabilityCampaignRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDomainDeliverabilityCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `campaignId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.campaignId"></a>

- *Type:* `string`

---

##### `deleteRate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.deleteRate"></a>

- *Type:* `number`

---

##### `esps`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.esps"></a>

- *Type:* `string`[]

---

##### `firstSeenDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.firstSeenDateTime"></a>

- *Type:* `string`

---

##### `fromAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.fromAddress"></a>

- *Type:* `string`

---

##### `imageUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.imageUrl"></a>

- *Type:* `string`

---

##### `inboxCount`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.inboxCount"></a>

- *Type:* `number`

---

##### `lastSeenDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.lastSeenDateTime"></a>

- *Type:* `string`

---

##### `projectedVolume`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.projectedVolume"></a>

- *Type:* `number`

---

##### `readDeleteRate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.readDeleteRate"></a>

- *Type:* `number`

---

##### `readRate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.readRate"></a>

- *Type:* `number`

---

##### `sendingIps`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.sendingIps"></a>

- *Type:* `string`[]

---

##### `spamCount`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.spamCount"></a>

- *Type:* `number`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.subject"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchDomainStatisticsReport <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReport"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReport.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDomainStatisticsReport(__scope: Construct, __resources: string[], __input: Sesv2GetDomainStatisticsReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest)

---



#### Properties <a name="Properties"></a>

##### `dailyVolumes`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReport.property.dailyVolumes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DailyVolume`](#aws-cdk-sdk.sesv2.Sesv2DailyVolume)[]

---

##### `overallVolume`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReport.property.overallVolume"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume)

---


### SESV2ResponsesFetchDomainStatisticsReportOverallVolume <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume(__scope: Construct, __resources: string[], __input: Sesv2GetDomainStatisticsReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest)

---



#### Properties <a name="Properties"></a>

##### `domainIspPlacements`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume.property.domainIspPlacements"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement`](#aws-cdk-sdk.sesv2.Sesv2DomainIspPlacement)[]

---

##### `readRatePercent`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume.property.readRatePercent"></a>

- *Type:* `number`

---

##### `volumeStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolume.property.volumeStatistics"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics)

---


### SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics(__scope: Construct, __resources: string[], __input: Sesv2GetDomainStatisticsReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest`](#aws-cdk-sdk.sesv2.Sesv2GetDomainStatisticsReportRequest)

---



#### Properties <a name="Properties"></a>

##### `inboxRawCount`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.property.inboxRawCount"></a>

- *Type:* `number`

---

##### `projectedInbox`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.property.projectedInbox"></a>

- *Type:* `number`

---

##### `projectedSpam`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.property.projectedSpam"></a>

- *Type:* `number`

---

##### `spamRawCount`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.property.spamRawCount"></a>

- *Type:* `number`

---


### SESV2ResponsesFetchEmailIdentity <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchEmailIdentity(__scope: Construct, __resources: string[], __input: Sesv2GetEmailIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityRequest`](#aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `dkimAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.property.dkimAttributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes)

---

##### `feedbackForwardingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.property.feedbackForwardingStatus"></a>

- *Type:* `boolean`

---

##### `identityType`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.property.identityType"></a>

- *Type:* `string`

---

##### `mailFromAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.property.mailFromAttributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes)

---

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.property.policies"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---

##### `verifiedForSendingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentity.property.verifiedForSendingStatus"></a>

- *Type:* `boolean`

---


### SESV2ResponsesFetchEmailIdentityDkimAttributes <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes(__scope: Construct, __resources: string[], __input: Sesv2GetEmailIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityRequest`](#aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `signingAttributesOrigin`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes.property.signingAttributesOrigin"></a>

- *Type:* `string`

---

##### `signingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes.property.signingEnabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes.property.status"></a>

- *Type:* `string`

---

##### `tokens`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityDkimAttributes.property.tokens"></a>

- *Type:* `string`[]

---


### SESV2ResponsesFetchEmailIdentityMailFromAttributes <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes(__scope: Construct, __resources: string[], __input: Sesv2GetEmailIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityRequest`](#aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `behaviorOnMxFailure`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes.property.behaviorOnMxFailure"></a>

- *Type:* `string`

---

##### `mailFromDomain`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes.property.mailFromDomain"></a>

- *Type:* `string`

---

##### `mailFromDomainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityMailFromAttributes.property.mailFromDomainStatus"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchEmailIdentityPolicies <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityPolicies.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchEmailIdentityPolicies(__scope: Construct, __resources: string[], __input: Sesv2GetEmailIdentityPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityPoliciesRequest`](#aws-cdk-sdk.sesv2.Sesv2GetEmailIdentityPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailIdentityPolicies.property.policies"></a>

- *Type:* {[ key: string ]: `string`}

---


### SESV2ResponsesFetchEmailTemplate <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplate.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchEmailTemplate(__scope: Construct, __resources: string[], __input: Sesv2GetEmailTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `templateContent`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplate.property.templateContent"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent)

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplate.property.templateName"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchEmailTemplateTemplateContent <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent(__scope: Construct, __resources: string[], __input: Sesv2GetEmailTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2GetEmailTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `html`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent.property.html"></a>

- *Type:* `string`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent.property.subject"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchEmailTemplateTemplateContent.property.text"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchImportJob <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchImportJob(__scope: Construct, __resources: string[], __input: Sesv2GetImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest`](#aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `completedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.property.completedTimestamp"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `failedRecordsCount`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.property.failedRecordsCount"></a>

- *Type:* `number`

---

##### `failureInfo`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.property.failureInfo"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobFailureInfo`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobFailureInfo)

---

##### `importDataSource`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.property.importDataSource"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDataSource`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDataSource)

---

##### `importDestination`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.property.importDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestination`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestination)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.property.jobStatus"></a>

- *Type:* `string`

---

##### `processedRecordsCount`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJob.property.processedRecordsCount"></a>

- *Type:* `number`

---


### SESV2ResponsesFetchImportJobFailureInfo <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobFailureInfo"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobFailureInfo.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchImportJobFailureInfo(__scope: Construct, __resources: string[], __input: Sesv2GetImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobFailureInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobFailureInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobFailureInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest`](#aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobFailureInfo.property.errorMessage"></a>

- *Type:* `string`

---

##### `failedRecordsS3Url`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobFailureInfo.property.failedRecordsS3Url"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchImportJobImportDataSource <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDataSource.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchImportJobImportDataSource(__scope: Construct, __resources: string[], __input: Sesv2GetImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest`](#aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDataSource.property.dataFormat"></a>

- *Type:* `string`

---

##### `s3Url`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDataSource.property.s3Url"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchImportJobImportDestination <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestination"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestination.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchImportJobImportDestination(__scope: Construct, __resources: string[], __input: Sesv2GetImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest`](#aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `contactListDestination`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestination.property.contactListDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationContactListDestination`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationContactListDestination)

---

##### `suppressionListDestination`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestination.property.suppressionListDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination)

---


### SESV2ResponsesFetchImportJobImportDestinationContactListDestination <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationContactListDestination"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationContactListDestination.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchImportJobImportDestinationContactListDestination(__scope: Construct, __resources: string[], __input: Sesv2GetImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationContactListDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationContactListDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationContactListDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest`](#aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `contactListImportAction`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationContactListDestination.property.contactListImportAction"></a>

- *Type:* `string`

---

##### `contactListName`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationContactListDestination.property.contactListName"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination(__scope: Construct, __resources: string[], __input: Sesv2GetImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest`](#aws-cdk-sdk.sesv2.Sesv2GetImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `suppressionListImportAction`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination.property.suppressionListImportAction"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchSuppressedDestination <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestination"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestination.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchSuppressedDestination(__scope: Construct, __resources: string[], __input: Sesv2GetSuppressedDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationRequest`](#aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `suppressedDestination`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestination.property.suppressedDestination"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination)

---


### SESV2ResponsesFetchSuppressedDestinationSuppressedDestination <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination(__scope: Construct, __resources: string[], __input: Sesv2GetSuppressedDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationRequest`](#aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes`](#aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes)

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestination.property.reason"></a>

- *Type:* `string`

---


### SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes(__scope: Construct, __resources: string[], __input: Sesv2GetSuppressedDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationRequest`](#aws-cdk-sdk.sesv2.Sesv2GetSuppressedDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `feedbackId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes.property.feedbackId"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes.property.messageId"></a>

- *Type:* `string`

---


### SESV2ResponsesListConfigurationSets <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListConfigurationSets"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListConfigurationSets.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListConfigurationSets(__scope: Construct, __resources: string[], __input: Sesv2ListConfigurationSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListConfigurationSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListConfigurationSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListConfigurationSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListConfigurationSetsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListConfigurationSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationSets`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListConfigurationSets.property.configurationSets"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListConfigurationSets.property.nextToken"></a>

- *Type:* `string`

---


### SESV2ResponsesListContactLists <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContactLists"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContactLists.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListContactLists(__scope: Construct, __resources: string[], __input: Sesv2ListContactListsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContactLists.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContactLists.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContactLists.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListContactListsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListContactListsRequest)

---



#### Properties <a name="Properties"></a>

##### `contactLists`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContactLists.property.contactLists"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ContactList`](#aws-cdk-sdk.sesv2.Sesv2ContactList)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContactLists.property.nextToken"></a>

- *Type:* `string`

---


### SESV2ResponsesListContacts <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContacts"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContacts.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListContacts(__scope: Construct, __resources: string[], __input: Sesv2ListContactsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListContactsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListContactsRequest)

---



#### Properties <a name="Properties"></a>

##### `contacts`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContacts.property.contacts"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Contact`](#aws-cdk-sdk.sesv2.Sesv2Contact)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListContacts.property.nextToken"></a>

- *Type:* `string`

---


### SESV2ResponsesListCustomVerificationEmailTemplates <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListCustomVerificationEmailTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListCustomVerificationEmailTemplates.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListCustomVerificationEmailTemplates(__scope: Construct, __resources: string[], __input: Sesv2ListCustomVerificationEmailTemplatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListCustomVerificationEmailTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListCustomVerificationEmailTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListCustomVerificationEmailTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListCustomVerificationEmailTemplatesRequest`](#aws-cdk-sdk.sesv2.Sesv2ListCustomVerificationEmailTemplatesRequest)

---



#### Properties <a name="Properties"></a>

##### `customVerificationEmailTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListCustomVerificationEmailTemplates.property.customVerificationEmailTemplates"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2CustomVerificationEmailTemplateMetadata`](#aws-cdk-sdk.sesv2.Sesv2CustomVerificationEmailTemplateMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListCustomVerificationEmailTemplates.property.nextToken"></a>

- *Type:* `string`

---


### SESV2ResponsesListDedicatedIpPools <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDedicatedIpPools"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDedicatedIpPools.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListDedicatedIpPools(__scope: Construct, __resources: string[], __input: Sesv2ListDedicatedIpPoolsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDedicatedIpPools.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDedicatedIpPools.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDedicatedIpPools.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListDedicatedIpPoolsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListDedicatedIpPoolsRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedIpPools`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDedicatedIpPools.property.dedicatedIpPools"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDedicatedIpPools.property.nextToken"></a>

- *Type:* `string`

---


### SESV2ResponsesListDeliverabilityTestReports <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDeliverabilityTestReports"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDeliverabilityTestReports.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListDeliverabilityTestReports(__scope: Construct, __resources: string[], __input: Sesv2ListDeliverabilityTestReportsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDeliverabilityTestReports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDeliverabilityTestReports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDeliverabilityTestReports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListDeliverabilityTestReportsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListDeliverabilityTestReportsRequest)

---



#### Properties <a name="Properties"></a>

##### `deliverabilityTestReports`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDeliverabilityTestReports.property.deliverabilityTestReports"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport`](#aws-cdk-sdk.sesv2.Sesv2DeliverabilityTestReport)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDeliverabilityTestReports.property.nextToken"></a>

- *Type:* `string`

---


### SESV2ResponsesListDomainDeliverabilityCampaigns <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDomainDeliverabilityCampaigns"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDomainDeliverabilityCampaigns.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListDomainDeliverabilityCampaigns(__scope: Construct, __resources: string[], __input: Sesv2ListDomainDeliverabilityCampaignsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDomainDeliverabilityCampaigns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDomainDeliverabilityCampaigns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDomainDeliverabilityCampaigns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListDomainDeliverabilityCampaignsRequest)

---



#### Properties <a name="Properties"></a>

##### `domainDeliverabilityCampaigns`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDomainDeliverabilityCampaigns.property.domainDeliverabilityCampaigns"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign`](#aws-cdk-sdk.sesv2.Sesv2DomainDeliverabilityCampaign)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListDomainDeliverabilityCampaigns.property.nextToken"></a>

- *Type:* `string`

---


### SESV2ResponsesListEmailIdentities <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailIdentities"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailIdentities.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListEmailIdentities(__scope: Construct, __resources: string[], __input: Sesv2ListEmailIdentitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailIdentities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailIdentities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailIdentities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListEmailIdentitiesRequest`](#aws-cdk-sdk.sesv2.Sesv2ListEmailIdentitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `emailIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailIdentities.property.emailIdentities"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2IdentityInfo`](#aws-cdk-sdk.sesv2.Sesv2IdentityInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailIdentities.property.nextToken"></a>

- *Type:* `string`

---


### SESV2ResponsesListEmailTemplates <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailTemplates.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListEmailTemplates(__scope: Construct, __resources: string[], __input: Sesv2ListEmailTemplatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListEmailTemplatesRequest`](#aws-cdk-sdk.sesv2.Sesv2ListEmailTemplatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailTemplates.property.nextToken"></a>

- *Type:* `string`

---

##### `templatesMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListEmailTemplates.property.templatesMetadata"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2EmailTemplateMetadata`](#aws-cdk-sdk.sesv2.Sesv2EmailTemplateMetadata)[]

---


### SESV2ResponsesListImportJobs <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListImportJobs"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListImportJobs.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListImportJobs(__scope: Construct, __resources: string[], __input: Sesv2ListImportJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListImportJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListImportJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListImportJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListImportJobsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListImportJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `importJobs`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListImportJobs.property.importJobs"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ImportJobSummary`](#aws-cdk-sdk.sesv2.Sesv2ImportJobSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListImportJobs.property.nextToken"></a>

- *Type:* `string`

---


### SESV2ResponsesListSuppressedDestinations <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListSuppressedDestinations"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListSuppressedDestinations.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListSuppressedDestinations(__scope: Construct, __resources: string[], __input: Sesv2ListSuppressedDestinationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListSuppressedDestinations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListSuppressedDestinations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListSuppressedDestinations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsRequest`](#aws-cdk-sdk.sesv2.Sesv2ListSuppressedDestinationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListSuppressedDestinations.property.nextToken"></a>

- *Type:* `string`

---

##### `suppressedDestinationSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListSuppressedDestinations.property.suppressedDestinationSummaries"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationSummary`](#aws-cdk-sdk.sesv2.Sesv2SuppressedDestinationSummary)[]

---


### SESV2ResponsesListTagsForResource <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListTagsForResource.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: Sesv2ListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2ListTagsForResourceRequest`](#aws-cdk-sdk.sesv2.Sesv2ListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2Tag`](#aws-cdk-sdk.sesv2.Sesv2Tag)[]

---


### SESV2ResponsesPutEmailIdentityDkimSigningAttributes <a name="aws-cdk-sdk.sesv2.SESV2ResponsesPutEmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesPutEmailIdentityDkimSigningAttributes.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesPutEmailIdentityDkimSigningAttributes(__scope: Construct, __resources: string[], __input: Sesv2PutEmailIdentityDkimSigningAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesPutEmailIdentityDkimSigningAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesPutEmailIdentityDkimSigningAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesPutEmailIdentityDkimSigningAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesRequest`](#aws-cdk-sdk.sesv2.Sesv2PutEmailIdentityDkimSigningAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `dkimStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesPutEmailIdentityDkimSigningAttributes.property.dkimStatus"></a>

- *Type:* `string`

---

##### `dkimTokens`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesPutEmailIdentityDkimSigningAttributes.property.dkimTokens"></a>

- *Type:* `string`[]

---


### SESV2ResponsesSendBulkEmail <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendBulkEmail"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendBulkEmail.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesSendBulkEmail(__scope: Construct, __resources: string[], __input: Sesv2SendBulkEmailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendBulkEmail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendBulkEmail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendBulkEmail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest`](#aws-cdk-sdk.sesv2.Sesv2SendBulkEmailRequest)

---



#### Properties <a name="Properties"></a>

##### `bulkEmailEntryResults`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendBulkEmail.property.bulkEmailEntryResults"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2BulkEmailEntryResult`](#aws-cdk-sdk.sesv2.Sesv2BulkEmailEntryResult)[]

---


### SESV2ResponsesSendCustomVerificationEmail <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendCustomVerificationEmail"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendCustomVerificationEmail.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesSendCustomVerificationEmail(__scope: Construct, __resources: string[], __input: Sesv2SendCustomVerificationEmailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendCustomVerificationEmail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendCustomVerificationEmail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendCustomVerificationEmail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SendCustomVerificationEmailRequest`](#aws-cdk-sdk.sesv2.Sesv2SendCustomVerificationEmailRequest)

---



#### Properties <a name="Properties"></a>

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendCustomVerificationEmail.property.messageId"></a>

- *Type:* `string`

---


### SESV2ResponsesSendEmail <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendEmail"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendEmail.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesSendEmail(__scope: Construct, __resources: string[], __input: Sesv2SendEmailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendEmail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendEmail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendEmail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2SendEmailRequest`](#aws-cdk-sdk.sesv2.Sesv2SendEmailRequest)

---



#### Properties <a name="Properties"></a>

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesSendEmail.property.messageId"></a>

- *Type:* `string`

---


### SESV2ResponsesTestRenderEmailTemplate <a name="aws-cdk-sdk.sesv2.SESV2ResponsesTestRenderEmailTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.sesv2.SESV2ResponsesTestRenderEmailTemplate.Initializer"></a>

```typescript
import { sesv2 } from 'aws-cdk-sdk'

new sesv2.SESV2ResponsesTestRenderEmailTemplate(__scope: Construct, __resources: string[], __input: Sesv2TestRenderEmailTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesTestRenderEmailTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesTestRenderEmailTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesTestRenderEmailTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sesv2.Sesv2TestRenderEmailTemplateRequest`](#aws-cdk-sdk.sesv2.Sesv2TestRenderEmailTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `renderedTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.sesv2.SESV2ResponsesTestRenderEmailTemplate.property.renderedTemplate"></a>

- *Type:* `string`

---



