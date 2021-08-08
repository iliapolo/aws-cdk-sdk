# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### PinpointEmailClient <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createConfigurationSet` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.createConfigurationSet"></a>

```typescript
public createConfigurationSet(input: PinpointEmailCreateConfigurationSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetRequest)

---

##### `createConfigurationSetEventDestination` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.createConfigurationSetEventDestination"></a>

```typescript
public createConfigurationSetEventDestination(input: PinpointEmailCreateConfigurationSetEventDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetEventDestinationRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetEventDestinationRequest)

---

##### `createDedicatedIpPool` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.createDedicatedIpPool"></a>

```typescript
public createDedicatedIpPool(input: PinpointEmailCreateDedicatedIpPoolRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCreateDedicatedIpPoolRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailCreateDedicatedIpPoolRequest)

---

##### `createDeliverabilityTestReport` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.createDeliverabilityTestReport"></a>

```typescript
public createDeliverabilityTestReport(input: PinpointEmailCreateDeliverabilityTestReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportRequest)

---

##### `createEmailIdentity` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.createEmailIdentity"></a>

```typescript
public createEmailIdentity(input: PinpointEmailCreateEmailIdentityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityRequest)

---

##### `deleteConfigurationSet` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.deleteConfigurationSet"></a>

```typescript
public deleteConfigurationSet(input: PinpointEmailDeleteConfigurationSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetRequest)

---

##### `deleteConfigurationSetEventDestination` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.deleteConfigurationSetEventDestination"></a>

```typescript
public deleteConfigurationSetEventDestination(input: PinpointEmailDeleteConfigurationSetEventDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetEventDestinationRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetEventDestinationRequest)

---

##### `deleteDedicatedIpPool` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.deleteDedicatedIpPool"></a>

```typescript
public deleteDedicatedIpPool(input: PinpointEmailDeleteDedicatedIpPoolRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDeleteDedicatedIpPoolRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailDeleteDedicatedIpPoolRequest)

---

##### `deleteEmailIdentity` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.deleteEmailIdentity"></a>

```typescript
public deleteEmailIdentity(input: PinpointEmailDeleteEmailIdentityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDeleteEmailIdentityRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailDeleteEmailIdentityRequest)

---

##### `fetchAccount` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchAccount"></a>

```typescript
public fetchAccount()
```

##### `fetchBlacklistReports` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchBlacklistReports"></a>

```typescript
public fetchBlacklistReports(input: PinpointEmailGetBlacklistReportsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetBlacklistReportsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetBlacklistReportsRequest)

---

##### `fetchConfigurationSet` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchConfigurationSet"></a>

```typescript
public fetchConfigurationSet(input: PinpointEmailGetConfigurationSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest)

---

##### `fetchConfigurationSetEventDestinations` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchConfigurationSetEventDestinations"></a>

```typescript
public fetchConfigurationSetEventDestinations(input: PinpointEmailGetConfigurationSetEventDestinationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetEventDestinationsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetEventDestinationsRequest)

---

##### `fetchDedicatedIp` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchDedicatedIp"></a>

```typescript
public fetchDedicatedIp(input: PinpointEmailGetDedicatedIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpRequest)

---

##### `fetchDedicatedIps` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchDedicatedIps"></a>

```typescript
public fetchDedicatedIps(input: PinpointEmailGetDedicatedIpsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsRequest)

---

##### `fetchDeliverabilityDashboardOptions` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchDeliverabilityDashboardOptions"></a>

```typescript
public fetchDeliverabilityDashboardOptions()
```

##### `fetchDeliverabilityTestReport` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchDeliverabilityTestReport"></a>

```typescript
public fetchDeliverabilityTestReport(input: PinpointEmailGetDeliverabilityTestReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest)

---

##### `fetchDomainDeliverabilityCampaign` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchDomainDeliverabilityCampaign"></a>

```typescript
public fetchDomainDeliverabilityCampaign(input: PinpointEmailGetDomainDeliverabilityCampaignRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignRequest)

---

##### `fetchDomainStatisticsReport` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchDomainStatisticsReport"></a>

```typescript
public fetchDomainStatisticsReport(input: PinpointEmailGetDomainStatisticsReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest)

---

##### `fetchEmailIdentity` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.fetchEmailIdentity"></a>

```typescript
public fetchEmailIdentity(input: PinpointEmailGetEmailIdentityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityRequest)

---

##### `listConfigurationSets` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.listConfigurationSets"></a>

```typescript
public listConfigurationSets(input: PinpointEmailListConfigurationSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListConfigurationSetsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListConfigurationSetsRequest)

---

##### `listDedicatedIpPools` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.listDedicatedIpPools"></a>

```typescript
public listDedicatedIpPools(input: PinpointEmailListDedicatedIpPoolsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListDedicatedIpPoolsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListDedicatedIpPoolsRequest)

---

##### `listDeliverabilityTestReports` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.listDeliverabilityTestReports"></a>

```typescript
public listDeliverabilityTestReports(input: PinpointEmailListDeliverabilityTestReportsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListDeliverabilityTestReportsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListDeliverabilityTestReportsRequest)

---

##### `listDomainDeliverabilityCampaigns` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.listDomainDeliverabilityCampaigns"></a>

```typescript
public listDomainDeliverabilityCampaigns(input: PinpointEmailListDomainDeliverabilityCampaignsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest)

---

##### `listEmailIdentities` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.listEmailIdentities"></a>

```typescript
public listEmailIdentities(input: PinpointEmailListEmailIdentitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListEmailIdentitiesRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListEmailIdentitiesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: PinpointEmailListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListTagsForResourceRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListTagsForResourceRequest)

---

##### `putAccountDedicatedIpWarmupAttributes` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putAccountDedicatedIpWarmupAttributes"></a>

```typescript
public putAccountDedicatedIpWarmupAttributes(input: PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest)

---

##### `putAccountSendingAttributes` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putAccountSendingAttributes"></a>

```typescript
public putAccountSendingAttributes(input: PinpointEmailPutAccountSendingAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutAccountSendingAttributesRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutAccountSendingAttributesRequest)

---

##### `putConfigurationSetDeliveryOptions` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putConfigurationSetDeliveryOptions"></a>

```typescript
public putConfigurationSetDeliveryOptions(input: PinpointEmailPutConfigurationSetDeliveryOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetDeliveryOptionsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetDeliveryOptionsRequest)

---

##### `putConfigurationSetReputationOptions` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putConfigurationSetReputationOptions"></a>

```typescript
public putConfigurationSetReputationOptions(input: PinpointEmailPutConfigurationSetReputationOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetReputationOptionsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetReputationOptionsRequest)

---

##### `putConfigurationSetSendingOptions` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putConfigurationSetSendingOptions"></a>

```typescript
public putConfigurationSetSendingOptions(input: PinpointEmailPutConfigurationSetSendingOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetSendingOptionsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetSendingOptionsRequest)

---

##### `putConfigurationSetTrackingOptions` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putConfigurationSetTrackingOptions"></a>

```typescript
public putConfigurationSetTrackingOptions(input: PinpointEmailPutConfigurationSetTrackingOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetTrackingOptionsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetTrackingOptionsRequest)

---

##### `putDedicatedIpInPool` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putDedicatedIpInPool"></a>

```typescript
public putDedicatedIpInPool(input: PinpointEmailPutDedicatedIpInPoolRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpInPoolRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpInPoolRequest)

---

##### `putDedicatedIpWarmupAttributes` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putDedicatedIpWarmupAttributes"></a>

```typescript
public putDedicatedIpWarmupAttributes(input: PinpointEmailPutDedicatedIpWarmupAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpWarmupAttributesRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpWarmupAttributesRequest)

---

##### `putDeliverabilityDashboardOption` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putDeliverabilityDashboardOption"></a>

```typescript
public putDeliverabilityDashboardOption(input: PinpointEmailPutDeliverabilityDashboardOptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutDeliverabilityDashboardOptionRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutDeliverabilityDashboardOptionRequest)

---

##### `putEmailIdentityDkimAttributes` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putEmailIdentityDkimAttributes"></a>

```typescript
public putEmailIdentityDkimAttributes(input: PinpointEmailPutEmailIdentityDkimAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityDkimAttributesRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityDkimAttributesRequest)

---

##### `putEmailIdentityFeedbackAttributes` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putEmailIdentityFeedbackAttributes"></a>

```typescript
public putEmailIdentityFeedbackAttributes(input: PinpointEmailPutEmailIdentityFeedbackAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityFeedbackAttributesRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityFeedbackAttributesRequest)

---

##### `putEmailIdentityMailFromAttributes` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.putEmailIdentityMailFromAttributes"></a>

```typescript
public putEmailIdentityMailFromAttributes(input: PinpointEmailPutEmailIdentityMailFromAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityMailFromAttributesRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityMailFromAttributesRequest)

---

##### `sendEmail` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.sendEmail"></a>

```typescript
public sendEmail(input: PinpointEmailSendEmailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.tagResource"></a>

```typescript
public tagResource(input: PinpointEmailTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTagResourceRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.untagResource"></a>

```typescript
public untagResource(input: PinpointEmailUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailUntagResourceRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailUntagResourceRequest)

---

##### `updateConfigurationSetEventDestination` <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.updateConfigurationSetEventDestination"></a>

```typescript
public updateConfigurationSetEventDestination(input: PinpointEmailUpdateConfigurationSetEventDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailUpdateConfigurationSetEventDestinationRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailUpdateConfigurationSetEventDestinationRequest)

---




## Structs <a name="Structs"></a>

### PinpointEmailBlacklistEntry <a name="aws-cdk-sdk.pinpointemail.PinpointEmailBlacklistEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailBlacklistEntry: pinpointemail.PinpointEmailBlacklistEntry = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailBlacklistEntry.property.description"></a>

- *Type:* `string`

---

##### `listingTime`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailBlacklistEntry.property.listingTime"></a>

- *Type:* `string`

---

##### `rblName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailBlacklistEntry.property.rblName"></a>

- *Type:* `string`

---

### PinpointEmailBody <a name="aws-cdk-sdk.pinpointemail.PinpointEmailBody"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailBody: pinpointemail.PinpointEmailBody = { ... }
```

##### `html`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailBody.property.html"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailContent`](#aws-cdk-sdk.pinpointemail.PinpointEmailContent)

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailBody.property.text"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailContent`](#aws-cdk-sdk.pinpointemail.PinpointEmailContent)

---

### PinpointEmailCloudWatchDestination <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCloudWatchDestination: pinpointemail.PinpointEmailCloudWatchDestination = { ... }
```

##### `dimensionConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDestination.property.dimensionConfigurations"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDimensionConfiguration`](#aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDimensionConfiguration)[]

---

### PinpointEmailCloudWatchDimensionConfiguration <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDimensionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCloudWatchDimensionConfiguration: pinpointemail.PinpointEmailCloudWatchDimensionConfiguration = { ... }
```

##### `defaultDimensionValue`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDimensionConfiguration.property.defaultDimensionValue"></a>

- *Type:* `string`

---

##### `dimensionName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDimensionConfiguration.property.dimensionName"></a>

- *Type:* `string`

---

##### `dimensionValueSource`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDimensionConfiguration.property.dimensionValueSource"></a>

- *Type:* `string`

---

### PinpointEmailContent <a name="aws-cdk-sdk.pinpointemail.PinpointEmailContent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailContent: pinpointemail.PinpointEmailContent = { ... }
```

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailContent.property.data"></a>

- *Type:* `string`

---

##### `charset`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailContent.property.charset"></a>

- *Type:* `string`

---

### PinpointEmailCreateConfigurationSetEventDestinationRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetEventDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCreateConfigurationSetEventDestinationRequest: pinpointemail.PinpointEmailCreateConfigurationSetEventDestinationRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetEventDestinationRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `eventDestination`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetEventDestinationRequest.property.eventDestination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition`](#aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition)

---

##### `eventDestinationName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetEventDestinationRequest.property.eventDestinationName"></a>

- *Type:* `string`

---

### PinpointEmailCreateConfigurationSetEventDestinationResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetEventDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCreateConfigurationSetEventDestinationResponse: pinpointemail.PinpointEmailCreateConfigurationSetEventDestinationResponse = { ... }
```

### PinpointEmailCreateConfigurationSetRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCreateConfigurationSetRequest: pinpointemail.PinpointEmailCreateConfigurationSetRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `deliveryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetRequest.property.deliveryOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDeliveryOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailDeliveryOptions)

---

##### `reputationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetRequest.property.reputationOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailReputationOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailReputationOptions)

---

##### `sendingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetRequest.property.sendingOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailSendingOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailSendingOptions)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

##### `trackingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetRequest.property.trackingOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTrackingOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailTrackingOptions)

---

### PinpointEmailCreateConfigurationSetResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateConfigurationSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCreateConfigurationSetResponse: pinpointemail.PinpointEmailCreateConfigurationSetResponse = { ... }
```

### PinpointEmailCreateDedicatedIpPoolRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDedicatedIpPoolRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCreateDedicatedIpPoolRequest: pinpointemail.PinpointEmailCreateDedicatedIpPoolRequest = { ... }
```

##### `poolName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDedicatedIpPoolRequest.property.poolName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDedicatedIpPoolRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

### PinpointEmailCreateDedicatedIpPoolResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDedicatedIpPoolResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCreateDedicatedIpPoolResponse: pinpointemail.PinpointEmailCreateDedicatedIpPoolResponse = { ... }
```

### PinpointEmailCreateDeliverabilityTestReportRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCreateDeliverabilityTestReportRequest: pinpointemail.PinpointEmailCreateDeliverabilityTestReportRequest = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportRequest.property.content"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailEmailContent`](#aws-cdk-sdk.pinpointemail.PinpointEmailEmailContent)

---

##### `fromEmailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportRequest.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `reportName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportRequest.property.reportName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

### PinpointEmailCreateDeliverabilityTestReportResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCreateDeliverabilityTestReportResponse: pinpointemail.PinpointEmailCreateDeliverabilityTestReportResponse = { ... }
```

##### `deliverabilityTestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportResponse.property.deliverabilityTestStatus"></a>

- *Type:* `string`

---

##### `reportId`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportResponse.property.reportId"></a>

- *Type:* `string`

---

### PinpointEmailCreateEmailIdentityRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCreateEmailIdentityRequest: pinpointemail.PinpointEmailCreateEmailIdentityRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

### PinpointEmailCreateEmailIdentityResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailCreateEmailIdentityResponse: pinpointemail.PinpointEmailCreateEmailIdentityResponse = { ... }
```

##### `dkimAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityResponse.property.dkimAttributes"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDkimAttributes`](#aws-cdk-sdk.pinpointemail.PinpointEmailDkimAttributes)

---

##### `identityType`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityResponse.property.identityType"></a>

- *Type:* `string`

---

##### `verifiedForSendingStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityResponse.property.verifiedForSendingStatus"></a>

- *Type:* `boolean`

---

### PinpointEmailDailyVolume <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDailyVolume"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDailyVolume: pinpointemail.PinpointEmailDailyVolume = { ... }
```

##### `domainIspPlacements`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDailyVolume.property.domainIspPlacements"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement)[]

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDailyVolume.property.startDate"></a>

- *Type:* `string`

---

##### `volumeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDailyVolume.property.volumeStatistics"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailVolumeStatistics`](#aws-cdk-sdk.pinpointemail.PinpointEmailVolumeStatistics)

---

### PinpointEmailDedicatedIp <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDedicatedIp: pinpointemail.PinpointEmailDedicatedIp = { ... }
```

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp.property.ip"></a>

- *Type:* `string`

---

##### `warmupPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp.property.warmupPercentage"></a>

- *Type:* `number`

---

##### `warmupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp.property.warmupStatus"></a>

- *Type:* `string`

---

##### `poolName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp.property.poolName"></a>

- *Type:* `string`

---

### PinpointEmailDeleteConfigurationSetEventDestinationRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetEventDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDeleteConfigurationSetEventDestinationRequest: pinpointemail.PinpointEmailDeleteConfigurationSetEventDestinationRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetEventDestinationRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `eventDestinationName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetEventDestinationRequest.property.eventDestinationName"></a>

- *Type:* `string`

---

### PinpointEmailDeleteConfigurationSetEventDestinationResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetEventDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDeleteConfigurationSetEventDestinationResponse: pinpointemail.PinpointEmailDeleteConfigurationSetEventDestinationResponse = { ... }
```

### PinpointEmailDeleteConfigurationSetRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDeleteConfigurationSetRequest: pinpointemail.PinpointEmailDeleteConfigurationSetRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetRequest.property.configurationSetName"></a>

- *Type:* `string`

---

### PinpointEmailDeleteConfigurationSetResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteConfigurationSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDeleteConfigurationSetResponse: pinpointemail.PinpointEmailDeleteConfigurationSetResponse = { ... }
```

### PinpointEmailDeleteDedicatedIpPoolRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteDedicatedIpPoolRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDeleteDedicatedIpPoolRequest: pinpointemail.PinpointEmailDeleteDedicatedIpPoolRequest = { ... }
```

##### `poolName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteDedicatedIpPoolRequest.property.poolName"></a>

- *Type:* `string`

---

### PinpointEmailDeleteDedicatedIpPoolResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteDedicatedIpPoolResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDeleteDedicatedIpPoolResponse: pinpointemail.PinpointEmailDeleteDedicatedIpPoolResponse = { ... }
```

### PinpointEmailDeleteEmailIdentityRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteEmailIdentityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDeleteEmailIdentityRequest: pinpointemail.PinpointEmailDeleteEmailIdentityRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteEmailIdentityRequest.property.emailIdentity"></a>

- *Type:* `string`

---

### PinpointEmailDeleteEmailIdentityResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeleteEmailIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDeleteEmailIdentityResponse: pinpointemail.PinpointEmailDeleteEmailIdentityResponse = { ... }
```

### PinpointEmailDeliverabilityTestReport <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDeliverabilityTestReport: pinpointemail.PinpointEmailDeliverabilityTestReport = { ... }
```

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport.property.createDate"></a>

- *Type:* `string`

---

##### `deliverabilityTestStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport.property.deliverabilityTestStatus"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `reportId`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport.property.reportId"></a>

- *Type:* `string`

---

##### `reportName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport.property.reportName"></a>

- *Type:* `string`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport.property.subject"></a>

- *Type:* `string`

---

### PinpointEmailDeliveryOptions <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeliveryOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDeliveryOptions: pinpointemail.PinpointEmailDeliveryOptions = { ... }
```

##### `sendingPoolName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeliveryOptions.property.sendingPoolName"></a>

- *Type:* `string`

---

##### `tlsPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDeliveryOptions.property.tlsPolicy"></a>

- *Type:* `string`

---

### PinpointEmailDestination <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDestination: pinpointemail.PinpointEmailDestination = { ... }
```

##### `bccAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDestination.property.bccAddresses"></a>

- *Type:* `string`[]

---

##### `ccAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDestination.property.ccAddresses"></a>

- *Type:* `string`[]

---

##### `toAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDestination.property.toAddresses"></a>

- *Type:* `string`[]

---

### PinpointEmailDkimAttributes <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDkimAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDkimAttributes: pinpointemail.PinpointEmailDkimAttributes = { ... }
```

##### `signingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDkimAttributes.property.signingEnabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDkimAttributes.property.status"></a>

- *Type:* `string`

---

##### `tokens`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDkimAttributes.property.tokens"></a>

- *Type:* `string`[]

---

### PinpointEmailDomainDeliverabilityCampaign <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDomainDeliverabilityCampaign: pinpointemail.PinpointEmailDomainDeliverabilityCampaign = { ... }
```

##### `campaignId`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.campaignId"></a>

- *Type:* `string`

---

##### `deleteRate`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.deleteRate"></a>

- *Type:* `number`

---

##### `esps`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.esps"></a>

- *Type:* `string`[]

---

##### `firstSeenDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.firstSeenDateTime"></a>

- *Type:* `string`

---

##### `fromAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.fromAddress"></a>

- *Type:* `string`

---

##### `imageUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.imageUrl"></a>

- *Type:* `string`

---

##### `inboxCount`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.inboxCount"></a>

- *Type:* `number`

---

##### `lastSeenDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.lastSeenDateTime"></a>

- *Type:* `string`

---

##### `projectedVolume`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.projectedVolume"></a>

- *Type:* `number`

---

##### `readDeleteRate`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.readDeleteRate"></a>

- *Type:* `number`

---

##### `readRate`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.readRate"></a>

- *Type:* `number`

---

##### `sendingIps`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.sendingIps"></a>

- *Type:* `string`[]

---

##### `spamCount`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.spamCount"></a>

- *Type:* `number`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign.property.subject"></a>

- *Type:* `string`

---

### PinpointEmailDomainDeliverabilityTrackingOption <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDomainDeliverabilityTrackingOption: pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption.property.domain"></a>

- *Type:* `string`

---

##### `inboxPlacementTrackingOption`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption.property.inboxPlacementTrackingOption"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailInboxPlacementTrackingOption`](#aws-cdk-sdk.pinpointemail.PinpointEmailInboxPlacementTrackingOption)

---

##### `subscriptionStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption.property.subscriptionStartDate"></a>

- *Type:* `string`

---

### PinpointEmailDomainIspPlacement <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailDomainIspPlacement: pinpointemail.PinpointEmailDomainIspPlacement = { ... }
```

##### `inboxPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement.property.inboxPercentage"></a>

- *Type:* `number`

---

##### `inboxRawCount`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement.property.inboxRawCount"></a>

- *Type:* `number`

---

##### `ispName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement.property.ispName"></a>

- *Type:* `string`

---

##### `spamPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement.property.spamPercentage"></a>

- *Type:* `number`

---

##### `spamRawCount`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement.property.spamRawCount"></a>

- *Type:* `number`

---

### PinpointEmailEmailContent <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEmailContent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailEmailContent: pinpointemail.PinpointEmailEmailContent = { ... }
```

##### `raw`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEmailContent.property.raw"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailRawMessage`](#aws-cdk-sdk.pinpointemail.PinpointEmailRawMessage)

---

##### `simple`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEmailContent.property.simple"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailMessage`](#aws-cdk-sdk.pinpointemail.PinpointEmailMessage)

---

##### `template`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEmailContent.property.template"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTemplate`](#aws-cdk-sdk.pinpointemail.PinpointEmailTemplate)

---

### PinpointEmailEventDestination <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailEventDestination: pinpointemail.PinpointEmailEventDestination = { ... }
```

##### `matchingEventTypes`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination.property.matchingEventTypes"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination.property.name"></a>

- *Type:* `string`

---

##### `cloudWatchDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination.property.cloudWatchDestination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDestination)

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination.property.enabled"></a>

- *Type:* `boolean`

---

##### `kinesisFirehoseDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination.property.kinesisFirehoseDestination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailKinesisFirehoseDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailKinesisFirehoseDestination)

---

##### `pinpointDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination.property.pinpointDestination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPinpointDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailPinpointDestination)

---

##### `snsDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination.property.snsDestination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailSnsDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailSnsDestination)

---

### PinpointEmailEventDestinationDefinition <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailEventDestinationDefinition: pinpointemail.PinpointEmailEventDestinationDefinition = { ... }
```

##### `cloudWatchDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition.property.cloudWatchDestination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailCloudWatchDestination)

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition.property.enabled"></a>

- *Type:* `boolean`

---

##### `kinesisFirehoseDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition.property.kinesisFirehoseDestination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailKinesisFirehoseDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailKinesisFirehoseDestination)

---

##### `matchingEventTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition.property.matchingEventTypes"></a>

- *Type:* `string`[]

---

##### `pinpointDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition.property.pinpointDestination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPinpointDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailPinpointDestination)

---

##### `snsDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition.property.snsDestination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailSnsDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailSnsDestination)

---

### PinpointEmailGetAccountRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetAccountRequest: pinpointemail.PinpointEmailGetAccountRequest = { ... }
```

### PinpointEmailGetAccountResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetAccountResponse: pinpointemail.PinpointEmailGetAccountResponse = { ... }
```

##### `dedicatedIpAutoWarmupEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetAccountResponse.property.dedicatedIpAutoWarmupEnabled"></a>

- *Type:* `boolean`

---

##### `enforcementStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetAccountResponse.property.enforcementStatus"></a>

- *Type:* `string`

---

##### `productionAccessEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetAccountResponse.property.productionAccessEnabled"></a>

- *Type:* `boolean`

---

##### `sendingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetAccountResponse.property.sendingEnabled"></a>

- *Type:* `boolean`

---

##### `sendQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetAccountResponse.property.sendQuota"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailSendQuota`](#aws-cdk-sdk.pinpointemail.PinpointEmailSendQuota)

---

### PinpointEmailGetBlacklistReportsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetBlacklistReportsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetBlacklistReportsRequest: pinpointemail.PinpointEmailGetBlacklistReportsRequest = { ... }
```

##### `blacklistItemNames`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetBlacklistReportsRequest.property.blacklistItemNames"></a>

- *Type:* `string`[]

---

### PinpointEmailGetBlacklistReportsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetBlacklistReportsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetBlacklistReportsResponse: pinpointemail.PinpointEmailGetBlacklistReportsResponse = { ... }
```

##### `blacklistReport`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetBlacklistReportsResponse.property.blacklistReport"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.pinpointemail.PinpointEmailBlacklistEntry`](#aws-cdk-sdk.pinpointemail.PinpointEmailBlacklistEntry)[]}

---

### PinpointEmailGetConfigurationSetEventDestinationsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetEventDestinationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetConfigurationSetEventDestinationsRequest: pinpointemail.PinpointEmailGetConfigurationSetEventDestinationsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetEventDestinationsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

### PinpointEmailGetConfigurationSetEventDestinationsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetEventDestinationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetConfigurationSetEventDestinationsResponse: pinpointemail.PinpointEmailGetConfigurationSetEventDestinationsResponse = { ... }
```

##### `eventDestinations`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetEventDestinationsResponse.property.eventDestinations"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination)[]

---

### PinpointEmailGetConfigurationSetRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetConfigurationSetRequest: pinpointemail.PinpointEmailGetConfigurationSetRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest.property.configurationSetName"></a>

- *Type:* `string`

---

### PinpointEmailGetConfigurationSetResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetConfigurationSetResponse: pinpointemail.PinpointEmailGetConfigurationSetResponse = { ... }
```

##### `configurationSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetResponse.property.configurationSetName"></a>

- *Type:* `string`

---

##### `deliveryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetResponse.property.deliveryOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDeliveryOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailDeliveryOptions)

---

##### `reputationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetResponse.property.reputationOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailReputationOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailReputationOptions)

---

##### `sendingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetResponse.property.sendingOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailSendingOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailSendingOptions)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

##### `trackingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetResponse.property.trackingOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTrackingOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailTrackingOptions)

---

### PinpointEmailGetDedicatedIpRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDedicatedIpRequest: pinpointemail.PinpointEmailGetDedicatedIpRequest = { ... }
```

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpRequest.property.ip"></a>

- *Type:* `string`

---

### PinpointEmailGetDedicatedIpResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDedicatedIpResponse: pinpointemail.PinpointEmailGetDedicatedIpResponse = { ... }
```

##### `dedicatedIp`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpResponse.property.dedicatedIp"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp`](#aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp)

---

### PinpointEmailGetDedicatedIpsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDedicatedIpsRequest: pinpointemail.PinpointEmailGetDedicatedIpsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsRequest.property.pageSize"></a>

- *Type:* `number`

---

##### `poolName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsRequest.property.poolName"></a>

- *Type:* `string`

---

### PinpointEmailGetDedicatedIpsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDedicatedIpsResponse: pinpointemail.PinpointEmailGetDedicatedIpsResponse = { ... }
```

##### `dedicatedIps`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsResponse.property.dedicatedIps"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp`](#aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PinpointEmailGetDeliverabilityDashboardOptionsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityDashboardOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDeliverabilityDashboardOptionsRequest: pinpointemail.PinpointEmailGetDeliverabilityDashboardOptionsRequest = { ... }
```

### PinpointEmailGetDeliverabilityDashboardOptionsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityDashboardOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDeliverabilityDashboardOptionsResponse: pinpointemail.PinpointEmailGetDeliverabilityDashboardOptionsResponse = { ... }
```

##### `dashboardEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityDashboardOptionsResponse.property.dashboardEnabled"></a>

- *Type:* `boolean`

---

##### `accountStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityDashboardOptionsResponse.property.accountStatus"></a>

- *Type:* `string`

---

##### `activeSubscribedDomains`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityDashboardOptionsResponse.property.activeSubscribedDomains"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption)[]

---

##### `pendingExpirationSubscribedDomains`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityDashboardOptionsResponse.property.pendingExpirationSubscribedDomains"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption)[]

---

##### `subscriptionExpiryDate`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityDashboardOptionsResponse.property.subscriptionExpiryDate"></a>

- *Type:* `string`

---

### PinpointEmailGetDeliverabilityTestReportRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDeliverabilityTestReportRequest: pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest = { ... }
```

##### `reportId`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest.property.reportId"></a>

- *Type:* `string`

---

### PinpointEmailGetDeliverabilityTestReportResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDeliverabilityTestReportResponse: pinpointemail.PinpointEmailGetDeliverabilityTestReportResponse = { ... }
```

##### `deliverabilityTestReport`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportResponse.property.deliverabilityTestReport"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport`](#aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport)

---

##### `ispPlacements`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportResponse.property.ispPlacements"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailIspPlacement`](#aws-cdk-sdk.pinpointemail.PinpointEmailIspPlacement)[]

---

##### `overallPlacement`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportResponse.property.overallPlacement"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPlacementStatistics`](#aws-cdk-sdk.pinpointemail.PinpointEmailPlacementStatistics)

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportResponse.property.message"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

### PinpointEmailGetDomainDeliverabilityCampaignRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDomainDeliverabilityCampaignRequest: pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignRequest = { ... }
```

##### `campaignId`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignRequest.property.campaignId"></a>

- *Type:* `string`

---

### PinpointEmailGetDomainDeliverabilityCampaignResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDomainDeliverabilityCampaignResponse: pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignResponse = { ... }
```

##### `domainDeliverabilityCampaign`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignResponse.property.domainDeliverabilityCampaign"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign)

---

### PinpointEmailGetDomainStatisticsReportRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDomainStatisticsReportRequest: pinpointemail.PinpointEmailGetDomainStatisticsReportRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest.property.domain"></a>

- *Type:* `string`

---

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest.property.endDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest.property.startDate"></a>

- *Type:* `string`

---

### PinpointEmailGetDomainStatisticsReportResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetDomainStatisticsReportResponse: pinpointemail.PinpointEmailGetDomainStatisticsReportResponse = { ... }
```

##### `dailyVolumes`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportResponse.property.dailyVolumes"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDailyVolume`](#aws-cdk-sdk.pinpointemail.PinpointEmailDailyVolume)[]

---

##### `overallVolume`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportResponse.property.overallVolume"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailOverallVolume`](#aws-cdk-sdk.pinpointemail.PinpointEmailOverallVolume)

---

### PinpointEmailGetEmailIdentityRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetEmailIdentityRequest: pinpointemail.PinpointEmailGetEmailIdentityRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityRequest.property.emailIdentity"></a>

- *Type:* `string`

---

### PinpointEmailGetEmailIdentityResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailGetEmailIdentityResponse: pinpointemail.PinpointEmailGetEmailIdentityResponse = { ... }
```

##### `dkimAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityResponse.property.dkimAttributes"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDkimAttributes`](#aws-cdk-sdk.pinpointemail.PinpointEmailDkimAttributes)

---

##### `feedbackForwardingStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityResponse.property.feedbackForwardingStatus"></a>

- *Type:* `boolean`

---

##### `identityType`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityResponse.property.identityType"></a>

- *Type:* `string`

---

##### `mailFromAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityResponse.property.mailFromAttributes"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailMailFromAttributes`](#aws-cdk-sdk.pinpointemail.PinpointEmailMailFromAttributes)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

##### `verifiedForSendingStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityResponse.property.verifiedForSendingStatus"></a>

- *Type:* `boolean`

---

### PinpointEmailIdentityInfo <a name="aws-cdk-sdk.pinpointemail.PinpointEmailIdentityInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailIdentityInfo: pinpointemail.PinpointEmailIdentityInfo = { ... }
```

##### `identityName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailIdentityInfo.property.identityName"></a>

- *Type:* `string`

---

##### `identityType`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailIdentityInfo.property.identityType"></a>

- *Type:* `string`

---

##### `sendingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailIdentityInfo.property.sendingEnabled"></a>

- *Type:* `boolean`

---

### PinpointEmailInboxPlacementTrackingOption <a name="aws-cdk-sdk.pinpointemail.PinpointEmailInboxPlacementTrackingOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailInboxPlacementTrackingOption: pinpointemail.PinpointEmailInboxPlacementTrackingOption = { ... }
```

##### `global`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailInboxPlacementTrackingOption.property.global"></a>

- *Type:* `boolean`

---

##### `trackedIsps`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailInboxPlacementTrackingOption.property.trackedIsps"></a>

- *Type:* `string`[]

---

### PinpointEmailIspPlacement <a name="aws-cdk-sdk.pinpointemail.PinpointEmailIspPlacement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailIspPlacement: pinpointemail.PinpointEmailIspPlacement = { ... }
```

##### `ispName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailIspPlacement.property.ispName"></a>

- *Type:* `string`

---

##### `placementStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailIspPlacement.property.placementStatistics"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailPlacementStatistics`](#aws-cdk-sdk.pinpointemail.PinpointEmailPlacementStatistics)

---

### PinpointEmailKinesisFirehoseDestination <a name="aws-cdk-sdk.pinpointemail.PinpointEmailKinesisFirehoseDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailKinesisFirehoseDestination: pinpointemail.PinpointEmailKinesisFirehoseDestination = { ... }
```

##### `deliveryStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailKinesisFirehoseDestination.property.deliveryStreamArn"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailKinesisFirehoseDestination.property.iamRoleArn"></a>

- *Type:* `string`

---

### PinpointEmailListConfigurationSetsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListConfigurationSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListConfigurationSetsRequest: pinpointemail.PinpointEmailListConfigurationSetsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListConfigurationSetsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListConfigurationSetsRequest.property.pageSize"></a>

- *Type:* `number`

---

### PinpointEmailListConfigurationSetsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListConfigurationSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListConfigurationSetsResponse: pinpointemail.PinpointEmailListConfigurationSetsResponse = { ... }
```

##### `configurationSets`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListConfigurationSetsResponse.property.configurationSets"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListConfigurationSetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PinpointEmailListDedicatedIpPoolsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDedicatedIpPoolsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListDedicatedIpPoolsRequest: pinpointemail.PinpointEmailListDedicatedIpPoolsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDedicatedIpPoolsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDedicatedIpPoolsRequest.property.pageSize"></a>

- *Type:* `number`

---

### PinpointEmailListDedicatedIpPoolsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDedicatedIpPoolsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListDedicatedIpPoolsResponse: pinpointemail.PinpointEmailListDedicatedIpPoolsResponse = { ... }
```

##### `dedicatedIpPools`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDedicatedIpPoolsResponse.property.dedicatedIpPools"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDedicatedIpPoolsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PinpointEmailListDeliverabilityTestReportsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDeliverabilityTestReportsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListDeliverabilityTestReportsRequest: pinpointemail.PinpointEmailListDeliverabilityTestReportsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDeliverabilityTestReportsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDeliverabilityTestReportsRequest.property.pageSize"></a>

- *Type:* `number`

---

### PinpointEmailListDeliverabilityTestReportsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDeliverabilityTestReportsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListDeliverabilityTestReportsResponse: pinpointemail.PinpointEmailListDeliverabilityTestReportsResponse = { ... }
```

##### `deliverabilityTestReports`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDeliverabilityTestReportsResponse.property.deliverabilityTestReports"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport`](#aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDeliverabilityTestReportsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PinpointEmailListDomainDeliverabilityCampaignsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListDomainDeliverabilityCampaignsRequest: pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest = { ... }
```

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest.property.endDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest.property.startDate"></a>

- *Type:* `string`

---

##### `subscribedDomain`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest.property.subscribedDomain"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest.property.pageSize"></a>

- *Type:* `number`

---

### PinpointEmailListDomainDeliverabilityCampaignsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListDomainDeliverabilityCampaignsResponse: pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsResponse = { ... }
```

##### `domainDeliverabilityCampaigns`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsResponse.property.domainDeliverabilityCampaigns"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PinpointEmailListEmailIdentitiesRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListEmailIdentitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListEmailIdentitiesRequest: pinpointemail.PinpointEmailListEmailIdentitiesRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListEmailIdentitiesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListEmailIdentitiesRequest.property.pageSize"></a>

- *Type:* `number`

---

### PinpointEmailListEmailIdentitiesResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListEmailIdentitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListEmailIdentitiesResponse: pinpointemail.PinpointEmailListEmailIdentitiesResponse = { ... }
```

##### `emailIdentities`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListEmailIdentitiesResponse.property.emailIdentities"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailIdentityInfo`](#aws-cdk-sdk.pinpointemail.PinpointEmailIdentityInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListEmailIdentitiesResponse.property.nextToken"></a>

- *Type:* `string`

---

### PinpointEmailListTagsForResourceRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListTagsForResourceRequest: pinpointemail.PinpointEmailListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### PinpointEmailListTagsForResourceResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailListTagsForResourceResponse: pinpointemail.PinpointEmailListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

### PinpointEmailMailFromAttributes <a name="aws-cdk-sdk.pinpointemail.PinpointEmailMailFromAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailMailFromAttributes: pinpointemail.PinpointEmailMailFromAttributes = { ... }
```

##### `behaviorOnMxFailure`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailMailFromAttributes.property.behaviorOnMxFailure"></a>

- *Type:* `string`

---

##### `mailFromDomain`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailMailFromAttributes.property.mailFromDomain"></a>

- *Type:* `string`

---

##### `mailFromDomainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailMailFromAttributes.property.mailFromDomainStatus"></a>

- *Type:* `string`

---

### PinpointEmailMessage <a name="aws-cdk-sdk.pinpointemail.PinpointEmailMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailMessage: pinpointemail.PinpointEmailMessage = { ... }
```

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailMessage.property.body"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailBody`](#aws-cdk-sdk.pinpointemail.PinpointEmailBody)

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailMessage.property.subject"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailContent`](#aws-cdk-sdk.pinpointemail.PinpointEmailContent)

---

### PinpointEmailMessageTag <a name="aws-cdk-sdk.pinpointemail.PinpointEmailMessageTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailMessageTag: pinpointemail.PinpointEmailMessageTag = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailMessageTag.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailMessageTag.property.value"></a>

- *Type:* `string`

---

### PinpointEmailOverallVolume <a name="aws-cdk-sdk.pinpointemail.PinpointEmailOverallVolume"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailOverallVolume: pinpointemail.PinpointEmailOverallVolume = { ... }
```

##### `domainIspPlacements`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailOverallVolume.property.domainIspPlacements"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement)[]

---

##### `readRatePercent`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailOverallVolume.property.readRatePercent"></a>

- *Type:* `number`

---

##### `volumeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailOverallVolume.property.volumeStatistics"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailVolumeStatistics`](#aws-cdk-sdk.pinpointemail.PinpointEmailVolumeStatistics)

---

### PinpointEmailPinpointDestination <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPinpointDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPinpointDestination: pinpointemail.PinpointEmailPinpointDestination = { ... }
```

##### `applicationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPinpointDestination.property.applicationArn"></a>

- *Type:* `string`

---

### PinpointEmailPlacementStatistics <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPlacementStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPlacementStatistics: pinpointemail.PinpointEmailPlacementStatistics = { ... }
```

##### `dkimPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPlacementStatistics.property.dkimPercentage"></a>

- *Type:* `number`

---

##### `inboxPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPlacementStatistics.property.inboxPercentage"></a>

- *Type:* `number`

---

##### `missingPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPlacementStatistics.property.missingPercentage"></a>

- *Type:* `number`

---

##### `spamPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPlacementStatistics.property.spamPercentage"></a>

- *Type:* `number`

---

##### `spfPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPlacementStatistics.property.spfPercentage"></a>

- *Type:* `number`

---

### PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutAccountDedicatedIpWarmupAttributesRequest: pinpointemail.PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest = { ... }
```

##### `autoWarmupEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest.property.autoWarmupEnabled"></a>

- *Type:* `boolean`

---

### PinpointEmailPutAccountDedicatedIpWarmupAttributesResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutAccountDedicatedIpWarmupAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutAccountDedicatedIpWarmupAttributesResponse: pinpointemail.PinpointEmailPutAccountDedicatedIpWarmupAttributesResponse = { ... }
```

### PinpointEmailPutAccountSendingAttributesRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutAccountSendingAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutAccountSendingAttributesRequest: pinpointemail.PinpointEmailPutAccountSendingAttributesRequest = { ... }
```

##### `sendingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutAccountSendingAttributesRequest.property.sendingEnabled"></a>

- *Type:* `boolean`

---

### PinpointEmailPutAccountSendingAttributesResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutAccountSendingAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutAccountSendingAttributesResponse: pinpointemail.PinpointEmailPutAccountSendingAttributesResponse = { ... }
```

### PinpointEmailPutConfigurationSetDeliveryOptionsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetDeliveryOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutConfigurationSetDeliveryOptionsRequest: pinpointemail.PinpointEmailPutConfigurationSetDeliveryOptionsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetDeliveryOptionsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `sendingPoolName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetDeliveryOptionsRequest.property.sendingPoolName"></a>

- *Type:* `string`

---

##### `tlsPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetDeliveryOptionsRequest.property.tlsPolicy"></a>

- *Type:* `string`

---

### PinpointEmailPutConfigurationSetDeliveryOptionsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetDeliveryOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutConfigurationSetDeliveryOptionsResponse: pinpointemail.PinpointEmailPutConfigurationSetDeliveryOptionsResponse = { ... }
```

### PinpointEmailPutConfigurationSetReputationOptionsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetReputationOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutConfigurationSetReputationOptionsRequest: pinpointemail.PinpointEmailPutConfigurationSetReputationOptionsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetReputationOptionsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `reputationMetricsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetReputationOptionsRequest.property.reputationMetricsEnabled"></a>

- *Type:* `boolean`

---

### PinpointEmailPutConfigurationSetReputationOptionsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetReputationOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutConfigurationSetReputationOptionsResponse: pinpointemail.PinpointEmailPutConfigurationSetReputationOptionsResponse = { ... }
```

### PinpointEmailPutConfigurationSetSendingOptionsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetSendingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutConfigurationSetSendingOptionsRequest: pinpointemail.PinpointEmailPutConfigurationSetSendingOptionsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetSendingOptionsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `sendingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetSendingOptionsRequest.property.sendingEnabled"></a>

- *Type:* `boolean`

---

### PinpointEmailPutConfigurationSetSendingOptionsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetSendingOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutConfigurationSetSendingOptionsResponse: pinpointemail.PinpointEmailPutConfigurationSetSendingOptionsResponse = { ... }
```

### PinpointEmailPutConfigurationSetTrackingOptionsRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetTrackingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutConfigurationSetTrackingOptionsRequest: pinpointemail.PinpointEmailPutConfigurationSetTrackingOptionsRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetTrackingOptionsRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `customRedirectDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetTrackingOptionsRequest.property.customRedirectDomain"></a>

- *Type:* `string`

---

### PinpointEmailPutConfigurationSetTrackingOptionsResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutConfigurationSetTrackingOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutConfigurationSetTrackingOptionsResponse: pinpointemail.PinpointEmailPutConfigurationSetTrackingOptionsResponse = { ... }
```

### PinpointEmailPutDedicatedIpInPoolRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpInPoolRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutDedicatedIpInPoolRequest: pinpointemail.PinpointEmailPutDedicatedIpInPoolRequest = { ... }
```

##### `destinationPoolName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpInPoolRequest.property.destinationPoolName"></a>

- *Type:* `string`

---

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpInPoolRequest.property.ip"></a>

- *Type:* `string`

---

### PinpointEmailPutDedicatedIpInPoolResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpInPoolResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutDedicatedIpInPoolResponse: pinpointemail.PinpointEmailPutDedicatedIpInPoolResponse = { ... }
```

### PinpointEmailPutDedicatedIpWarmupAttributesRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpWarmupAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutDedicatedIpWarmupAttributesRequest: pinpointemail.PinpointEmailPutDedicatedIpWarmupAttributesRequest = { ... }
```

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpWarmupAttributesRequest.property.ip"></a>

- *Type:* `string`

---

##### `warmupPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpWarmupAttributesRequest.property.warmupPercentage"></a>

- *Type:* `number`

---

### PinpointEmailPutDedicatedIpWarmupAttributesResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDedicatedIpWarmupAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutDedicatedIpWarmupAttributesResponse: pinpointemail.PinpointEmailPutDedicatedIpWarmupAttributesResponse = { ... }
```

### PinpointEmailPutDeliverabilityDashboardOptionRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDeliverabilityDashboardOptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutDeliverabilityDashboardOptionRequest: pinpointemail.PinpointEmailPutDeliverabilityDashboardOptionRequest = { ... }
```

##### `dashboardEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDeliverabilityDashboardOptionRequest.property.dashboardEnabled"></a>

- *Type:* `boolean`

---

##### `subscribedDomains`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDeliverabilityDashboardOptionRequest.property.subscribedDomains"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption)[]

---

### PinpointEmailPutDeliverabilityDashboardOptionResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutDeliverabilityDashboardOptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutDeliverabilityDashboardOptionResponse: pinpointemail.PinpointEmailPutDeliverabilityDashboardOptionResponse = { ... }
```

### PinpointEmailPutEmailIdentityDkimAttributesRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityDkimAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutEmailIdentityDkimAttributesRequest: pinpointemail.PinpointEmailPutEmailIdentityDkimAttributesRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityDkimAttributesRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `signingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityDkimAttributesRequest.property.signingEnabled"></a>

- *Type:* `boolean`

---

### PinpointEmailPutEmailIdentityDkimAttributesResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityDkimAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutEmailIdentityDkimAttributesResponse: pinpointemail.PinpointEmailPutEmailIdentityDkimAttributesResponse = { ... }
```

### PinpointEmailPutEmailIdentityFeedbackAttributesRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityFeedbackAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutEmailIdentityFeedbackAttributesRequest: pinpointemail.PinpointEmailPutEmailIdentityFeedbackAttributesRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityFeedbackAttributesRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `emailForwardingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityFeedbackAttributesRequest.property.emailForwardingEnabled"></a>

- *Type:* `boolean`

---

### PinpointEmailPutEmailIdentityFeedbackAttributesResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityFeedbackAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutEmailIdentityFeedbackAttributesResponse: pinpointemail.PinpointEmailPutEmailIdentityFeedbackAttributesResponse = { ... }
```

### PinpointEmailPutEmailIdentityMailFromAttributesRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityMailFromAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutEmailIdentityMailFromAttributesRequest: pinpointemail.PinpointEmailPutEmailIdentityMailFromAttributesRequest = { ... }
```

##### `emailIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityMailFromAttributesRequest.property.emailIdentity"></a>

- *Type:* `string`

---

##### `behaviorOnMxFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityMailFromAttributesRequest.property.behaviorOnMxFailure"></a>

- *Type:* `string`

---

##### `mailFromDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityMailFromAttributesRequest.property.mailFromDomain"></a>

- *Type:* `string`

---

### PinpointEmailPutEmailIdentityMailFromAttributesResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailPutEmailIdentityMailFromAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailPutEmailIdentityMailFromAttributesResponse: pinpointemail.PinpointEmailPutEmailIdentityMailFromAttributesResponse = { ... }
```

### PinpointEmailRawMessage <a name="aws-cdk-sdk.pinpointemail.PinpointEmailRawMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailRawMessage: pinpointemail.PinpointEmailRawMessage = { ... }
```

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailRawMessage.property.data"></a>

- *Type:* `any`

---

### PinpointEmailReputationOptions <a name="aws-cdk-sdk.pinpointemail.PinpointEmailReputationOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailReputationOptions: pinpointemail.PinpointEmailReputationOptions = { ... }
```

##### `lastFreshStart`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailReputationOptions.property.lastFreshStart"></a>

- *Type:* `string`

---

##### `reputationMetricsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailReputationOptions.property.reputationMetricsEnabled"></a>

- *Type:* `boolean`

---

### PinpointEmailSendEmailRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailSendEmailRequest: pinpointemail.PinpointEmailSendEmailRequest = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest.property.content"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailEmailContent`](#aws-cdk-sdk.pinpointemail.PinpointEmailEmailContent)

---

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest.property.destination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailDestination)

---

##### `configurationSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `emailTags`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest.property.emailTags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailMessageTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailMessageTag)[]

---

##### `feedbackForwardingEmailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest.property.feedbackForwardingEmailAddress"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `replyToAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest.property.replyToAddresses"></a>

- *Type:* `string`[]

---

### PinpointEmailSendEmailResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailSendEmailResponse: pinpointemail.PinpointEmailSendEmailResponse = { ... }
```

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailResponse.property.messageId"></a>

- *Type:* `string`

---

### PinpointEmailSendingOptions <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendingOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailSendingOptions: pinpointemail.PinpointEmailSendingOptions = { ... }
```

##### `sendingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendingOptions.property.sendingEnabled"></a>

- *Type:* `boolean`

---

### PinpointEmailSendQuota <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendQuota"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailSendQuota: pinpointemail.PinpointEmailSendQuota = { ... }
```

##### `max24HourSend`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendQuota.property.max24HourSend"></a>

- *Type:* `number`

---

##### `maxSendRate`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendQuota.property.maxSendRate"></a>

- *Type:* `number`

---

##### `sentLast24Hours`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSendQuota.property.sentLast24Hours"></a>

- *Type:* `number`

---

### PinpointEmailSnsDestination <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSnsDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailSnsDestination: pinpointemail.PinpointEmailSnsDestination = { ... }
```

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailSnsDestination.property.topicArn"></a>

- *Type:* `string`

---

### PinpointEmailTag <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailTag: pinpointemail.PinpointEmailTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTag.property.value"></a>

- *Type:* `string`

---

### PinpointEmailTagResourceRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailTagResourceRequest: pinpointemail.PinpointEmailTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

### PinpointEmailTagResourceResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailTagResourceResponse: pinpointemail.PinpointEmailTagResourceResponse = { ... }
```

### PinpointEmailTemplate <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailTemplate: pinpointemail.PinpointEmailTemplate = { ... }
```

##### `templateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTemplate.property.templateArn"></a>

- *Type:* `string`

---

##### `templateData`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTemplate.property.templateData"></a>

- *Type:* `string`

---

### PinpointEmailTrackingOptions <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTrackingOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailTrackingOptions: pinpointemail.PinpointEmailTrackingOptions = { ... }
```

##### `customRedirectDomain`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailTrackingOptions.property.customRedirectDomain"></a>

- *Type:* `string`

---

### PinpointEmailUntagResourceRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailUntagResourceRequest: pinpointemail.PinpointEmailUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### PinpointEmailUntagResourceResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailUntagResourceResponse: pinpointemail.PinpointEmailUntagResourceResponse = { ... }
```

### PinpointEmailUpdateConfigurationSetEventDestinationRequest <a name="aws-cdk-sdk.pinpointemail.PinpointEmailUpdateConfigurationSetEventDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailUpdateConfigurationSetEventDestinationRequest: pinpointemail.PinpointEmailUpdateConfigurationSetEventDestinationRequest = { ... }
```

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailUpdateConfigurationSetEventDestinationRequest.property.configurationSetName"></a>

- *Type:* `string`

---

##### `eventDestination`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailUpdateConfigurationSetEventDestinationRequest.property.eventDestination"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition`](#aws-cdk-sdk.pinpointemail.PinpointEmailEventDestinationDefinition)

---

##### `eventDestinationName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailUpdateConfigurationSetEventDestinationRequest.property.eventDestinationName"></a>

- *Type:* `string`

---

### PinpointEmailUpdateConfigurationSetEventDestinationResponse <a name="aws-cdk-sdk.pinpointemail.PinpointEmailUpdateConfigurationSetEventDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailUpdateConfigurationSetEventDestinationResponse: pinpointemail.PinpointEmailUpdateConfigurationSetEventDestinationResponse = { ... }
```

### PinpointEmailVolumeStatistics <a name="aws-cdk-sdk.pinpointemail.PinpointEmailVolumeStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

const pinpointEmailVolumeStatistics: pinpointemail.PinpointEmailVolumeStatistics = { ... }
```

##### `inboxRawCount`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailVolumeStatistics.property.inboxRawCount"></a>

- *Type:* `number`

---

##### `projectedInbox`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailVolumeStatistics.property.projectedInbox"></a>

- *Type:* `number`

---

##### `projectedSpam`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailVolumeStatistics.property.projectedSpam"></a>

- *Type:* `number`

---

##### `spamRawCount`<sup>Optional</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailVolumeStatistics.property.spamRawCount"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### PinpointEmailResponsesCreateDeliverabilityTestReport <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateDeliverabilityTestReport"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateDeliverabilityTestReport.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesCreateDeliverabilityTestReport(__scope: Construct, __resources: string[], __input: PinpointEmailCreateDeliverabilityTestReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateDeliverabilityTestReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateDeliverabilityTestReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateDeliverabilityTestReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailCreateDeliverabilityTestReportRequest)

---



#### Properties <a name="Properties"></a>

##### `deliverabilityTestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateDeliverabilityTestReport.property.deliverabilityTestStatus"></a>

- *Type:* `string`

---

##### `reportId`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateDeliverabilityTestReport.property.reportId"></a>

- *Type:* `string`

---


### PinpointEmailResponsesCreateEmailIdentity <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentity.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesCreateEmailIdentity(__scope: Construct, __resources: string[], __input: PinpointEmailCreateEmailIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `dkimAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentity.property.dkimAttributes"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes)

---

##### `identityType`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentity.property.identityType"></a>

- *Type:* `string`

---

##### `verifiedForSendingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentity.property.verifiedForSendingStatus"></a>

- *Type:* `boolean`

---


### PinpointEmailResponsesCreateEmailIdentityDkimAttributes <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes(__scope: Construct, __resources: string[], __input: PinpointEmailCreateEmailIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailCreateEmailIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `signingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes.property.signingEnabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes.property.status"></a>

- *Type:* `string`

---

##### `tokens`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesCreateEmailIdentityDkimAttributes.property.tokens"></a>

- *Type:* `string`[]

---


### PinpointEmailResponsesFetchAccount <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccount"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccount.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchAccount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `dedicatedIpAutoWarmupEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccount.property.dedicatedIpAutoWarmupEnabled"></a>

- *Type:* `boolean`

---

##### `enforcementStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccount.property.enforcementStatus"></a>

- *Type:* `string`

---

##### `productionAccessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccount.property.productionAccessEnabled"></a>

- *Type:* `boolean`

---

##### `sendingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccount.property.sendingEnabled"></a>

- *Type:* `boolean`

---

##### `sendQuota`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccount.property.sendQuota"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccountSendQuota`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccountSendQuota)

---


### PinpointEmailResponsesFetchAccountSendQuota <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccountSendQuota"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccountSendQuota.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchAccountSendQuota(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccountSendQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccountSendQuota.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `max24HourSend`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccountSendQuota.property.max24HourSend"></a>

- *Type:* `number`

---

##### `maxSendRate`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccountSendQuota.property.maxSendRate"></a>

- *Type:* `number`

---

##### `sentLast24Hours`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchAccountSendQuota.property.sentLast24Hours"></a>

- *Type:* `number`

---


### PinpointEmailResponsesFetchBlacklistReports <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchBlacklistReports"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchBlacklistReports.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchBlacklistReports(__scope: Construct, __resources: string[], __input: PinpointEmailGetBlacklistReportsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchBlacklistReports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchBlacklistReports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchBlacklistReports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetBlacklistReportsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetBlacklistReportsRequest)

---



#### Properties <a name="Properties"></a>

##### `blacklistReport`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchBlacklistReports.property.blacklistReport"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.pinpointemail.PinpointEmailBlacklistEntry`](#aws-cdk-sdk.pinpointemail.PinpointEmailBlacklistEntry)[]}

---


### PinpointEmailResponsesFetchConfigurationSet <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchConfigurationSet(__scope: Construct, __resources: string[], __input: PinpointEmailGetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationSetName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet.property.configurationSetName"></a>

- *Type:* `string`

---

##### `deliveryOptions`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet.property.deliveryOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetDeliveryOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetDeliveryOptions)

---

##### `reputationOptions`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet.property.reputationOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetReputationOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetReputationOptions)

---

##### `sendingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet.property.sendingOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetSendingOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetSendingOptions)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

##### `trackingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSet.property.trackingOptions"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetTrackingOptions`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetTrackingOptions)

---


### PinpointEmailResponsesFetchConfigurationSetDeliveryOptions <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetDeliveryOptions.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchConfigurationSetDeliveryOptions(__scope: Construct, __resources: string[], __input: PinpointEmailGetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetDeliveryOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetDeliveryOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetDeliveryOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `sendingPoolName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetDeliveryOptions.property.sendingPoolName"></a>

- *Type:* `string`

---

##### `tlsPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

- *Type:* `string`

---


### PinpointEmailResponsesFetchConfigurationSetEventDestinations <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetEventDestinations"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetEventDestinations.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchConfigurationSetEventDestinations(__scope: Construct, __resources: string[], __input: PinpointEmailGetConfigurationSetEventDestinationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetEventDestinations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetEventDestinations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetEventDestinations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetEventDestinationsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetEventDestinationsRequest)

---



#### Properties <a name="Properties"></a>

##### `eventDestinations`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetEventDestinations.property.eventDestinations"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination`](#aws-cdk-sdk.pinpointemail.PinpointEmailEventDestination)[]

---


### PinpointEmailResponsesFetchConfigurationSetReputationOptions <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetReputationOptions"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetReputationOptions.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchConfigurationSetReputationOptions(__scope: Construct, __resources: string[], __input: PinpointEmailGetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetReputationOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetReputationOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetReputationOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `lastFreshStart`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetReputationOptions.property.lastFreshStart"></a>

- *Type:* `string`

---

##### `reputationMetricsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetReputationOptions.property.reputationMetricsEnabled"></a>

- *Type:* `boolean`

---


### PinpointEmailResponsesFetchConfigurationSetSendingOptions <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetSendingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetSendingOptions.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchConfigurationSetSendingOptions(__scope: Construct, __resources: string[], __input: PinpointEmailGetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetSendingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetSendingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetSendingOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `sendingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetSendingOptions.property.sendingEnabled"></a>

- *Type:* `boolean`

---


### PinpointEmailResponsesFetchConfigurationSetTrackingOptions <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetTrackingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetTrackingOptions.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchConfigurationSetTrackingOptions(__scope: Construct, __resources: string[], __input: PinpointEmailGetConfigurationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetTrackingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetTrackingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetTrackingOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetConfigurationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `customRedirectDomain`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

- *Type:* `string`

---


### PinpointEmailResponsesFetchDedicatedIp <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIp"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIp.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDedicatedIp(__scope: Construct, __resources: string[], __input: PinpointEmailGetDedicatedIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedIp`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIp.property.dedicatedIp"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp)

---


### PinpointEmailResponsesFetchDedicatedIpDedicatedIp <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp(__scope: Construct, __resources: string[], __input: PinpointEmailGetDedicatedIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpRequest)

---



#### Properties <a name="Properties"></a>

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp.property.ip"></a>

- *Type:* `string`

---

##### `poolName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp.property.poolName"></a>

- *Type:* `string`

---

##### `warmupPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp.property.warmupPercentage"></a>

- *Type:* `number`

---

##### `warmupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIpDedicatedIp.property.warmupStatus"></a>

- *Type:* `string`

---


### PinpointEmailResponsesFetchDedicatedIps <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIps"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIps.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDedicatedIps(__scope: Construct, __resources: string[], __input: PinpointEmailGetDedicatedIpsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIps.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIps.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIps.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDedicatedIpsRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedIps`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIps.property.dedicatedIps"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp`](#aws-cdk-sdk.pinpointemail.PinpointEmailDedicatedIp)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDedicatedIps.property.nextToken"></a>

- *Type:* `string`

---


### PinpointEmailResponsesFetchDeliverabilityDashboardOptions <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityDashboardOptions"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityDashboardOptions.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDeliverabilityDashboardOptions(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityDashboardOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityDashboardOptions.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `accountStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityDashboardOptions.property.accountStatus"></a>

- *Type:* `string`

---

##### `activeSubscribedDomains`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityDashboardOptions.property.activeSubscribedDomains"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption)[]

---

##### `dashboardEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityDashboardOptions.property.dashboardEnabled"></a>

- *Type:* `boolean`

---

##### `pendingExpirationSubscribedDomains`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityDashboardOptions.property.pendingExpirationSubscribedDomains"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityTrackingOption)[]

---

##### `subscriptionExpiryDate`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityDashboardOptions.property.subscriptionExpiryDate"></a>

- *Type:* `string`

---


### PinpointEmailResponsesFetchDeliverabilityTestReport <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport(__scope: Construct, __resources: string[], __input: PinpointEmailGetDeliverabilityTestReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest)

---



#### Properties <a name="Properties"></a>

##### `deliverabilityTestReport`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport.property.deliverabilityTestReport"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport)

---

##### `ispPlacements`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport.property.ispPlacements"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailIspPlacement`](#aws-cdk-sdk.pinpointemail.PinpointEmailIspPlacement)[]

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport.property.message"></a>

- *Type:* `string`

---

##### `overallPlacement`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport.property.overallPlacement"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReport.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---


### PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport(__scope: Construct, __resources: string[], __input: PinpointEmailGetDeliverabilityTestReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.createDate"></a>

- *Type:* `string`

---

##### `deliverabilityTestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.deliverabilityTestStatus"></a>

- *Type:* `string`

---

##### `fromEmailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.fromEmailAddress"></a>

- *Type:* `string`

---

##### `reportId`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.reportId"></a>

- *Type:* `string`

---

##### `reportName`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.reportName"></a>

- *Type:* `string`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport.property.subject"></a>

- *Type:* `string`

---


### PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement(__scope: Construct, __resources: string[], __input: PinpointEmailGetDeliverabilityTestReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDeliverabilityTestReportRequest)

---



#### Properties <a name="Properties"></a>

##### `dkimPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement.property.dkimPercentage"></a>

- *Type:* `number`

---

##### `inboxPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement.property.inboxPercentage"></a>

- *Type:* `number`

---

##### `missingPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement.property.missingPercentage"></a>

- *Type:* `number`

---

##### `spamPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement.property.spamPercentage"></a>

- *Type:* `number`

---

##### `spfPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement.property.spfPercentage"></a>

- *Type:* `number`

---


### PinpointEmailResponsesFetchDomainDeliverabilityCampaign <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaign"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaign.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaign(__scope: Construct, __resources: string[], __input: PinpointEmailGetDomainDeliverabilityCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaign.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaign.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaign.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `domainDeliverabilityCampaign`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaign.property.domainDeliverabilityCampaign"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign)

---


### PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign(__scope: Construct, __resources: string[], __input: PinpointEmailGetDomainDeliverabilityCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainDeliverabilityCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `campaignId`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.campaignId"></a>

- *Type:* `string`

---

##### `deleteRate`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.deleteRate"></a>

- *Type:* `number`

---

##### `esps`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.esps"></a>

- *Type:* `string`[]

---

##### `firstSeenDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.firstSeenDateTime"></a>

- *Type:* `string`

---

##### `fromAddress`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.fromAddress"></a>

- *Type:* `string`

---

##### `imageUrl`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.imageUrl"></a>

- *Type:* `string`

---

##### `inboxCount`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.inboxCount"></a>

- *Type:* `number`

---

##### `lastSeenDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.lastSeenDateTime"></a>

- *Type:* `string`

---

##### `projectedVolume`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.projectedVolume"></a>

- *Type:* `number`

---

##### `readDeleteRate`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.readDeleteRate"></a>

- *Type:* `number`

---

##### `readRate`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.readRate"></a>

- *Type:* `number`

---

##### `sendingIps`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.sendingIps"></a>

- *Type:* `string`[]

---

##### `spamCount`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.spamCount"></a>

- *Type:* `number`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign.property.subject"></a>

- *Type:* `string`

---


### PinpointEmailResponsesFetchDomainStatisticsReport <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReport"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReport.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReport(__scope: Construct, __resources: string[], __input: PinpointEmailGetDomainStatisticsReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest)

---



#### Properties <a name="Properties"></a>

##### `dailyVolumes`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReport.property.dailyVolumes"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDailyVolume`](#aws-cdk-sdk.pinpointemail.PinpointEmailDailyVolume)[]

---

##### `overallVolume`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReport.property.overallVolume"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume)

---


### PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume(__scope: Construct, __resources: string[], __input: PinpointEmailGetDomainStatisticsReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest)

---



#### Properties <a name="Properties"></a>

##### `domainIspPlacements`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume.property.domainIspPlacements"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainIspPlacement)[]

---

##### `readRatePercent`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume.property.readRatePercent"></a>

- *Type:* `number`

---

##### `volumeStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume.property.volumeStatistics"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics)

---


### PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics(__scope: Construct, __resources: string[], __input: PinpointEmailGetDomainStatisticsReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetDomainStatisticsReportRequest)

---



#### Properties <a name="Properties"></a>

##### `inboxRawCount`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.property.inboxRawCount"></a>

- *Type:* `number`

---

##### `projectedInbox`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.property.projectedInbox"></a>

- *Type:* `number`

---

##### `projectedSpam`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.property.projectedSpam"></a>

- *Type:* `number`

---

##### `spamRawCount`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics.property.spamRawCount"></a>

- *Type:* `number`

---


### PinpointEmailResponsesFetchEmailIdentity <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchEmailIdentity(__scope: Construct, __resources: string[], __input: PinpointEmailGetEmailIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `dkimAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity.property.dkimAttributes"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes)

---

##### `feedbackForwardingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity.property.feedbackForwardingStatus"></a>

- *Type:* `boolean`

---

##### `identityType`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity.property.identityType"></a>

- *Type:* `string`

---

##### `mailFromAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity.property.mailFromAttributes"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes`](#aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---

##### `verifiedForSendingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentity.property.verifiedForSendingStatus"></a>

- *Type:* `boolean`

---


### PinpointEmailResponsesFetchEmailIdentityDkimAttributes <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes(__scope: Construct, __resources: string[], __input: PinpointEmailGetEmailIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `signingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes.property.signingEnabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes.property.status"></a>

- *Type:* `string`

---

##### `tokens`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityDkimAttributes.property.tokens"></a>

- *Type:* `string`[]

---


### PinpointEmailResponsesFetchEmailIdentityMailFromAttributes <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes(__scope: Construct, __resources: string[], __input: PinpointEmailGetEmailIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailGetEmailIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `behaviorOnMxFailure`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes.property.behaviorOnMxFailure"></a>

- *Type:* `string`

---

##### `mailFromDomain`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes.property.mailFromDomain"></a>

- *Type:* `string`

---

##### `mailFromDomainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesFetchEmailIdentityMailFromAttributes.property.mailFromDomainStatus"></a>

- *Type:* `string`

---


### PinpointEmailResponsesListConfigurationSets <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListConfigurationSets"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListConfigurationSets.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesListConfigurationSets(__scope: Construct, __resources: string[], __input: PinpointEmailListConfigurationSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListConfigurationSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListConfigurationSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListConfigurationSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListConfigurationSetsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListConfigurationSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationSets`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListConfigurationSets.property.configurationSets"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListConfigurationSets.property.nextToken"></a>

- *Type:* `string`

---


### PinpointEmailResponsesListDedicatedIpPools <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDedicatedIpPools"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDedicatedIpPools.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesListDedicatedIpPools(__scope: Construct, __resources: string[], __input: PinpointEmailListDedicatedIpPoolsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDedicatedIpPools.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDedicatedIpPools.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDedicatedIpPools.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListDedicatedIpPoolsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListDedicatedIpPoolsRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedIpPools`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDedicatedIpPools.property.dedicatedIpPools"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDedicatedIpPools.property.nextToken"></a>

- *Type:* `string`

---


### PinpointEmailResponsesListDeliverabilityTestReports <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDeliverabilityTestReports"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDeliverabilityTestReports.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesListDeliverabilityTestReports(__scope: Construct, __resources: string[], __input: PinpointEmailListDeliverabilityTestReportsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDeliverabilityTestReports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDeliverabilityTestReports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDeliverabilityTestReports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListDeliverabilityTestReportsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListDeliverabilityTestReportsRequest)

---



#### Properties <a name="Properties"></a>

##### `deliverabilityTestReports`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDeliverabilityTestReports.property.deliverabilityTestReports"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport`](#aws-cdk-sdk.pinpointemail.PinpointEmailDeliverabilityTestReport)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDeliverabilityTestReports.property.nextToken"></a>

- *Type:* `string`

---


### PinpointEmailResponsesListDomainDeliverabilityCampaigns <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDomainDeliverabilityCampaigns"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDomainDeliverabilityCampaigns.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesListDomainDeliverabilityCampaigns(__scope: Construct, __resources: string[], __input: PinpointEmailListDomainDeliverabilityCampaignsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDomainDeliverabilityCampaigns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDomainDeliverabilityCampaigns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDomainDeliverabilityCampaigns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListDomainDeliverabilityCampaignsRequest)

---



#### Properties <a name="Properties"></a>

##### `domainDeliverabilityCampaigns`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDomainDeliverabilityCampaigns.property.domainDeliverabilityCampaigns"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign`](#aws-cdk-sdk.pinpointemail.PinpointEmailDomainDeliverabilityCampaign)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListDomainDeliverabilityCampaigns.property.nextToken"></a>

- *Type:* `string`

---


### PinpointEmailResponsesListEmailIdentities <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListEmailIdentities"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListEmailIdentities.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesListEmailIdentities(__scope: Construct, __resources: string[], __input: PinpointEmailListEmailIdentitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListEmailIdentities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListEmailIdentities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListEmailIdentities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListEmailIdentitiesRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListEmailIdentitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `emailIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListEmailIdentities.property.emailIdentities"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailIdentityInfo`](#aws-cdk-sdk.pinpointemail.PinpointEmailIdentityInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListEmailIdentities.property.nextToken"></a>

- *Type:* `string`

---


### PinpointEmailResponsesListTagsForResource <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListTagsForResource.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: PinpointEmailListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailListTagsForResourceRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailTag`](#aws-cdk-sdk.pinpointemail.PinpointEmailTag)[]

---


### PinpointEmailResponsesSendEmail <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesSendEmail"></a>

#### Initializer <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesSendEmail.Initializer"></a>

```typescript
import { pinpointemail } from 'aws-cdk-sdk'

new pinpointemail.PinpointEmailResponsesSendEmail(__scope: Construct, __resources: string[], __input: PinpointEmailSendEmailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesSendEmail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesSendEmail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesSendEmail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest`](#aws-cdk-sdk.pinpointemail.PinpointEmailSendEmailRequest)

---



#### Properties <a name="Properties"></a>

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.pinpointemail.PinpointEmailResponsesSendEmail.property.messageId"></a>

- *Type:* `string`

---



