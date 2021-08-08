# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### FmsClient <a name="aws-cdk-sdk.fms.FmsClient"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FmsClient.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FmsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateAdminAccount` <a name="aws-cdk-sdk.fms.FmsClient.associateAdminAccount"></a>

```typescript
public associateAdminAccount(input: FmsAssociateAdminAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsAssociateAdminAccountRequest`](#aws-cdk-sdk.fms.FmsAssociateAdminAccountRequest)

---

##### `deleteAppsList` <a name="aws-cdk-sdk.fms.FmsClient.deleteAppsList"></a>

```typescript
public deleteAppsList(input: FmsDeleteAppsListRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsDeleteAppsListRequest`](#aws-cdk-sdk.fms.FmsDeleteAppsListRequest)

---

##### `deleteNotificationChannel` <a name="aws-cdk-sdk.fms.FmsClient.deleteNotificationChannel"></a>

```typescript
public deleteNotificationChannel()
```

##### `deletePolicy` <a name="aws-cdk-sdk.fms.FmsClient.deletePolicy"></a>

```typescript
public deletePolicy(input: FmsDeletePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsDeletePolicyRequest`](#aws-cdk-sdk.fms.FmsDeletePolicyRequest)

---

##### `deleteProtocolsList` <a name="aws-cdk-sdk.fms.FmsClient.deleteProtocolsList"></a>

```typescript
public deleteProtocolsList(input: FmsDeleteProtocolsListRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsDeleteProtocolsListRequest`](#aws-cdk-sdk.fms.FmsDeleteProtocolsListRequest)

---

##### `disassociateAdminAccount` <a name="aws-cdk-sdk.fms.FmsClient.disassociateAdminAccount"></a>

```typescript
public disassociateAdminAccount()
```

##### `fetchAdminAccount` <a name="aws-cdk-sdk.fms.FmsClient.fetchAdminAccount"></a>

```typescript
public fetchAdminAccount()
```

##### `fetchAppsList` <a name="aws-cdk-sdk.fms.FmsClient.fetchAppsList"></a>

```typescript
public fetchAppsList(input: FmsGetAppsListRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetAppsListRequest`](#aws-cdk-sdk.fms.FmsGetAppsListRequest)

---

##### `fetchComplianceDetail` <a name="aws-cdk-sdk.fms.FmsClient.fetchComplianceDetail"></a>

```typescript
public fetchComplianceDetail(input: FmsGetComplianceDetailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetComplianceDetailRequest`](#aws-cdk-sdk.fms.FmsGetComplianceDetailRequest)

---

##### `fetchNotificationChannel` <a name="aws-cdk-sdk.fms.FmsClient.fetchNotificationChannel"></a>

```typescript
public fetchNotificationChannel()
```

##### `fetchPolicy` <a name="aws-cdk-sdk.fms.FmsClient.fetchPolicy"></a>

```typescript
public fetchPolicy(input: FmsGetPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetPolicyRequest`](#aws-cdk-sdk.fms.FmsGetPolicyRequest)

---

##### `fetchProtectionStatus` <a name="aws-cdk-sdk.fms.FmsClient.fetchProtectionStatus"></a>

```typescript
public fetchProtectionStatus(input: FmsGetProtectionStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetProtectionStatusRequest`](#aws-cdk-sdk.fms.FmsGetProtectionStatusRequest)

---

##### `fetchProtocolsList` <a name="aws-cdk-sdk.fms.FmsClient.fetchProtocolsList"></a>

```typescript
public fetchProtocolsList(input: FmsGetProtocolsListRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetProtocolsListRequest`](#aws-cdk-sdk.fms.FmsGetProtocolsListRequest)

---

##### `fetchViolationDetails` <a name="aws-cdk-sdk.fms.FmsClient.fetchViolationDetails"></a>

```typescript
public fetchViolationDetails(input: FmsGetViolationDetailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetViolationDetailsRequest`](#aws-cdk-sdk.fms.FmsGetViolationDetailsRequest)

---

##### `listAppsLists` <a name="aws-cdk-sdk.fms.FmsClient.listAppsLists"></a>

```typescript
public listAppsLists(input: FmsListAppsListsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListAppsListsRequest`](#aws-cdk-sdk.fms.FmsListAppsListsRequest)

---

##### `listComplianceStatus` <a name="aws-cdk-sdk.fms.FmsClient.listComplianceStatus"></a>

```typescript
public listComplianceStatus(input: FmsListComplianceStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListComplianceStatusRequest`](#aws-cdk-sdk.fms.FmsListComplianceStatusRequest)

---

##### `listMemberAccounts` <a name="aws-cdk-sdk.fms.FmsClient.listMemberAccounts"></a>

```typescript
public listMemberAccounts(input: FmsListMemberAccountsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListMemberAccountsRequest`](#aws-cdk-sdk.fms.FmsListMemberAccountsRequest)

---

##### `listPolicies` <a name="aws-cdk-sdk.fms.FmsClient.listPolicies"></a>

```typescript
public listPolicies(input: FmsListPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListPoliciesRequest`](#aws-cdk-sdk.fms.FmsListPoliciesRequest)

---

##### `listProtocolsLists` <a name="aws-cdk-sdk.fms.FmsClient.listProtocolsLists"></a>

```typescript
public listProtocolsLists(input: FmsListProtocolsListsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListProtocolsListsRequest`](#aws-cdk-sdk.fms.FmsListProtocolsListsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.fms.FmsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: FmsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListTagsForResourceRequest`](#aws-cdk-sdk.fms.FmsListTagsForResourceRequest)

---

##### `putAppsList` <a name="aws-cdk-sdk.fms.FmsClient.putAppsList"></a>

```typescript
public putAppsList(input: FmsPutAppsListRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutAppsListRequest`](#aws-cdk-sdk.fms.FmsPutAppsListRequest)

---

##### `putNotificationChannel` <a name="aws-cdk-sdk.fms.FmsClient.putNotificationChannel"></a>

```typescript
public putNotificationChannel(input: FmsPutNotificationChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutNotificationChannelRequest`](#aws-cdk-sdk.fms.FmsPutNotificationChannelRequest)

---

##### `putPolicy` <a name="aws-cdk-sdk.fms.FmsClient.putPolicy"></a>

```typescript
public putPolicy(input: FmsPutPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutPolicyRequest`](#aws-cdk-sdk.fms.FmsPutPolicyRequest)

---

##### `putProtocolsList` <a name="aws-cdk-sdk.fms.FmsClient.putProtocolsList"></a>

```typescript
public putProtocolsList(input: FmsPutProtocolsListRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutProtocolsListRequest`](#aws-cdk-sdk.fms.FmsPutProtocolsListRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.fms.FmsClient.tagResource"></a>

```typescript
public tagResource(input: FmsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsTagResourceRequest`](#aws-cdk-sdk.fms.FmsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.fms.FmsClient.untagResource"></a>

```typescript
public untagResource(input: FmsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsUntagResourceRequest`](#aws-cdk-sdk.fms.FmsUntagResourceRequest)

---




## Structs <a name="Structs"></a>

### FmsApp <a name="aws-cdk-sdk.fms.FmsApp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsApp: fms.FmsApp = { ... }
```

##### `appName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsApp.property.appName"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsApp.property.port"></a>

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsApp.property.protocol"></a>

- *Type:* `string`

---

### FmsAppsListData <a name="aws-cdk-sdk.fms.FmsAppsListData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsAppsListData: fms.FmsAppsListData = { ... }
```

##### `appsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsAppsListData.property.appsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsApp`](#aws-cdk-sdk.fms.FmsApp)[]

---

##### `listName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsAppsListData.property.listName"></a>

- *Type:* `string`

---

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAppsListData.property.createTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAppsListData.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `listId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAppsListData.property.listId"></a>

- *Type:* `string`

---

##### `listUpdateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAppsListData.property.listUpdateToken"></a>

- *Type:* `string`

---

##### `previousAppsList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAppsListData.property.previousAppsList"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.fms.FmsApp`](#aws-cdk-sdk.fms.FmsApp)[]}

---

### FmsAppsListDataSummary <a name="aws-cdk-sdk.fms.FmsAppsListDataSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsAppsListDataSummary: fms.FmsAppsListDataSummary = { ... }
```

##### `appsList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAppsListDataSummary.property.appsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsApp`](#aws-cdk-sdk.fms.FmsApp)[]

---

##### `listArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAppsListDataSummary.property.listArn"></a>

- *Type:* `string`

---

##### `listId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAppsListDataSummary.property.listId"></a>

- *Type:* `string`

---

##### `listName`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAppsListDataSummary.property.listName"></a>

- *Type:* `string`

---

### FmsAssociateAdminAccountRequest <a name="aws-cdk-sdk.fms.FmsAssociateAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsAssociateAdminAccountRequest: fms.FmsAssociateAdminAccountRequest = { ... }
```

##### `adminAccount`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsAssociateAdminAccountRequest.property.adminAccount"></a>

- *Type:* `string`

---

### FmsAwsEc2InstanceViolation <a name="aws-cdk-sdk.fms.FmsAwsEc2InstanceViolation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsAwsEc2InstanceViolation: fms.FmsAwsEc2InstanceViolation = { ... }
```

##### `awsEc2NetworkInterfaceViolations`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAwsEc2InstanceViolation.property.awsEc2NetworkInterfaceViolations"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsAwsEc2NetworkInterfaceViolation`](#aws-cdk-sdk.fms.FmsAwsEc2NetworkInterfaceViolation)[]

---

##### `violationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAwsEc2InstanceViolation.property.violationTarget"></a>

- *Type:* `string`

---

### FmsAwsEc2NetworkInterfaceViolation <a name="aws-cdk-sdk.fms.FmsAwsEc2NetworkInterfaceViolation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsAwsEc2NetworkInterfaceViolation: fms.FmsAwsEc2NetworkInterfaceViolation = { ... }
```

##### `violatingSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAwsEc2NetworkInterfaceViolation.property.violatingSecurityGroups"></a>

- *Type:* `string`[]

---

##### `violationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAwsEc2NetworkInterfaceViolation.property.violationTarget"></a>

- *Type:* `string`

---

### FmsAwsVpcSecurityGroupViolation <a name="aws-cdk-sdk.fms.FmsAwsVpcSecurityGroupViolation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsAwsVpcSecurityGroupViolation: fms.FmsAwsVpcSecurityGroupViolation = { ... }
```

##### `partialMatches`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAwsVpcSecurityGroupViolation.property.partialMatches"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPartialMatch`](#aws-cdk-sdk.fms.FmsPartialMatch)[]

---

##### `possibleSecurityGroupRemediationActions`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAwsVpcSecurityGroupViolation.property.possibleSecurityGroupRemediationActions"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsSecurityGroupRemediationAction`](#aws-cdk-sdk.fms.FmsSecurityGroupRemediationAction)[]

---

##### `violationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAwsVpcSecurityGroupViolation.property.violationTarget"></a>

- *Type:* `string`

---

##### `violationTargetDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsAwsVpcSecurityGroupViolation.property.violationTargetDescription"></a>

- *Type:* `string`

---

### FmsComplianceViolator <a name="aws-cdk-sdk.fms.FmsComplianceViolator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsComplianceViolator: fms.FmsComplianceViolator = { ... }
```

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsComplianceViolator.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsComplianceViolator.property.resourceType"></a>

- *Type:* `string`

---

##### `violationReason`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsComplianceViolator.property.violationReason"></a>

- *Type:* `string`

---

### FmsDeleteAppsListRequest <a name="aws-cdk-sdk.fms.FmsDeleteAppsListRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsDeleteAppsListRequest: fms.FmsDeleteAppsListRequest = { ... }
```

##### `listId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsDeleteAppsListRequest.property.listId"></a>

- *Type:* `string`

---

### FmsDeleteNotificationChannelRequest <a name="aws-cdk-sdk.fms.FmsDeleteNotificationChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsDeleteNotificationChannelRequest: fms.FmsDeleteNotificationChannelRequest = { ... }
```

### FmsDeletePolicyRequest <a name="aws-cdk-sdk.fms.FmsDeletePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsDeletePolicyRequest: fms.FmsDeletePolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsDeletePolicyRequest.property.policyId"></a>

- *Type:* `string`

---

##### `deleteAllPolicyResources`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsDeletePolicyRequest.property.deleteAllPolicyResources"></a>

- *Type:* `boolean`

---

### FmsDeleteProtocolsListRequest <a name="aws-cdk-sdk.fms.FmsDeleteProtocolsListRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsDeleteProtocolsListRequest: fms.FmsDeleteProtocolsListRequest = { ... }
```

##### `listId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsDeleteProtocolsListRequest.property.listId"></a>

- *Type:* `string`

---

### FmsDisassociateAdminAccountRequest <a name="aws-cdk-sdk.fms.FmsDisassociateAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsDisassociateAdminAccountRequest: fms.FmsDisassociateAdminAccountRequest = { ... }
```

### FmsEvaluationResult <a name="aws-cdk-sdk.fms.FmsEvaluationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsEvaluationResult: fms.FmsEvaluationResult = { ... }
```

##### `complianceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsEvaluationResult.property.complianceStatus"></a>

- *Type:* `string`

---

##### `evaluationLimitExceeded`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsEvaluationResult.property.evaluationLimitExceeded"></a>

- *Type:* `boolean`

---

##### `violatorCount`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsEvaluationResult.property.violatorCount"></a>

- *Type:* `number`

---

### FmsGetAdminAccountRequest <a name="aws-cdk-sdk.fms.FmsGetAdminAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetAdminAccountRequest: fms.FmsGetAdminAccountRequest = { ... }
```

### FmsGetAdminAccountResponse <a name="aws-cdk-sdk.fms.FmsGetAdminAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetAdminAccountResponse: fms.FmsGetAdminAccountResponse = { ... }
```

##### `adminAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetAdminAccountResponse.property.adminAccount"></a>

- *Type:* `string`

---

##### `roleStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetAdminAccountResponse.property.roleStatus"></a>

- *Type:* `string`

---

### FmsGetAppsListRequest <a name="aws-cdk-sdk.fms.FmsGetAppsListRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetAppsListRequest: fms.FmsGetAppsListRequest = { ... }
```

##### `listId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsGetAppsListRequest.property.listId"></a>

- *Type:* `string`

---

##### `defaultList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetAppsListRequest.property.defaultList"></a>

- *Type:* `boolean`

---

### FmsGetAppsListResponse <a name="aws-cdk-sdk.fms.FmsGetAppsListResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetAppsListResponse: fms.FmsGetAppsListResponse = { ... }
```

##### `appsList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetAppsListResponse.property.appsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsAppsListData`](#aws-cdk-sdk.fms.FmsAppsListData)

---

##### `appsListArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetAppsListResponse.property.appsListArn"></a>

- *Type:* `string`

---

### FmsGetComplianceDetailRequest <a name="aws-cdk-sdk.fms.FmsGetComplianceDetailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetComplianceDetailRequest: fms.FmsGetComplianceDetailRequest = { ... }
```

##### `memberAccount`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsGetComplianceDetailRequest.property.memberAccount"></a>

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsGetComplianceDetailRequest.property.policyId"></a>

- *Type:* `string`

---

### FmsGetComplianceDetailResponse <a name="aws-cdk-sdk.fms.FmsGetComplianceDetailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetComplianceDetailResponse: fms.FmsGetComplianceDetailResponse = { ... }
```

##### `policyComplianceDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetComplianceDetailResponse.property.policyComplianceDetail"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPolicyComplianceDetail`](#aws-cdk-sdk.fms.FmsPolicyComplianceDetail)

---

### FmsGetNotificationChannelRequest <a name="aws-cdk-sdk.fms.FmsGetNotificationChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetNotificationChannelRequest: fms.FmsGetNotificationChannelRequest = { ... }
```

### FmsGetNotificationChannelResponse <a name="aws-cdk-sdk.fms.FmsGetNotificationChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetNotificationChannelResponse: fms.FmsGetNotificationChannelResponse = { ... }
```

##### `snsRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetNotificationChannelResponse.property.snsRoleName"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetNotificationChannelResponse.property.snsTopicArn"></a>

- *Type:* `string`

---

### FmsGetPolicyRequest <a name="aws-cdk-sdk.fms.FmsGetPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetPolicyRequest: fms.FmsGetPolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsGetPolicyRequest.property.policyId"></a>

- *Type:* `string`

---

### FmsGetPolicyResponse <a name="aws-cdk-sdk.fms.FmsGetPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetPolicyResponse: fms.FmsGetPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetPolicyResponse.property.policy"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPolicy`](#aws-cdk-sdk.fms.FmsPolicy)

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetPolicyResponse.property.policyArn"></a>

- *Type:* `string`

---

### FmsGetProtectionStatusRequest <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetProtectionStatusRequest: fms.FmsGetProtectionStatusRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusRequest.property.policyId"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusRequest.property.endTime"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `memberAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusRequest.property.memberAccountId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusRequest.property.startTime"></a>

- *Type:* `string`

---

### FmsGetProtectionStatusResponse <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetProtectionStatusResponse: fms.FmsGetProtectionStatusResponse = { ... }
```

##### `adminAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusResponse.property.adminAccountId"></a>

- *Type:* `string`

---

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusResponse.property.data"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtectionStatusResponse.property.serviceType"></a>

- *Type:* `string`

---

### FmsGetProtocolsListRequest <a name="aws-cdk-sdk.fms.FmsGetProtocolsListRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetProtocolsListRequest: fms.FmsGetProtocolsListRequest = { ... }
```

##### `listId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsGetProtocolsListRequest.property.listId"></a>

- *Type:* `string`

---

##### `defaultList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtocolsListRequest.property.defaultList"></a>

- *Type:* `boolean`

---

### FmsGetProtocolsListResponse <a name="aws-cdk-sdk.fms.FmsGetProtocolsListResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetProtocolsListResponse: fms.FmsGetProtocolsListResponse = { ... }
```

##### `protocolsList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtocolsListResponse.property.protocolsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsProtocolsListData`](#aws-cdk-sdk.fms.FmsProtocolsListData)

---

##### `protocolsListArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetProtocolsListResponse.property.protocolsListArn"></a>

- *Type:* `string`

---

### FmsGetViolationDetailsRequest <a name="aws-cdk-sdk.fms.FmsGetViolationDetailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetViolationDetailsRequest: fms.FmsGetViolationDetailsRequest = { ... }
```

##### `memberAccount`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsGetViolationDetailsRequest.property.memberAccount"></a>

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsGetViolationDetailsRequest.property.policyId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsGetViolationDetailsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsGetViolationDetailsRequest.property.resourceType"></a>

- *Type:* `string`

---

### FmsGetViolationDetailsResponse <a name="aws-cdk-sdk.fms.FmsGetViolationDetailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsGetViolationDetailsResponse: fms.FmsGetViolationDetailsResponse = { ... }
```

##### `violationDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsGetViolationDetailsResponse.property.violationDetail"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsViolationDetail`](#aws-cdk-sdk.fms.FmsViolationDetail)

---

### FmsListAppsListsRequest <a name="aws-cdk-sdk.fms.FmsListAppsListsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListAppsListsRequest: fms.FmsListAppsListsRequest = { ... }
```

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsListAppsListsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `defaultLists`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListAppsListsRequest.property.defaultLists"></a>

- *Type:* `boolean`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListAppsListsRequest.property.nextToken"></a>

- *Type:* `string`

---

### FmsListAppsListsResponse <a name="aws-cdk-sdk.fms.FmsListAppsListsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListAppsListsResponse: fms.FmsListAppsListsResponse = { ... }
```

##### `appsLists`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListAppsListsResponse.property.appsLists"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsAppsListDataSummary`](#aws-cdk-sdk.fms.FmsAppsListDataSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListAppsListsResponse.property.nextToken"></a>

- *Type:* `string`

---

### FmsListComplianceStatusRequest <a name="aws-cdk-sdk.fms.FmsListComplianceStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListComplianceStatusRequest: fms.FmsListComplianceStatusRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsListComplianceStatusRequest.property.policyId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListComplianceStatusRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListComplianceStatusRequest.property.nextToken"></a>

- *Type:* `string`

---

### FmsListComplianceStatusResponse <a name="aws-cdk-sdk.fms.FmsListComplianceStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListComplianceStatusResponse: fms.FmsListComplianceStatusResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListComplianceStatusResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `policyComplianceStatusList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListComplianceStatusResponse.property.policyComplianceStatusList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPolicyComplianceStatus`](#aws-cdk-sdk.fms.FmsPolicyComplianceStatus)[]

---

### FmsListMemberAccountsRequest <a name="aws-cdk-sdk.fms.FmsListMemberAccountsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListMemberAccountsRequest: fms.FmsListMemberAccountsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListMemberAccountsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListMemberAccountsRequest.property.nextToken"></a>

- *Type:* `string`

---

### FmsListMemberAccountsResponse <a name="aws-cdk-sdk.fms.FmsListMemberAccountsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListMemberAccountsResponse: fms.FmsListMemberAccountsResponse = { ... }
```

##### `memberAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListMemberAccountsResponse.property.memberAccounts"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListMemberAccountsResponse.property.nextToken"></a>

- *Type:* `string`

---

### FmsListPoliciesRequest <a name="aws-cdk-sdk.fms.FmsListPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListPoliciesRequest: fms.FmsListPoliciesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListPoliciesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListPoliciesRequest.property.nextToken"></a>

- *Type:* `string`

---

### FmsListPoliciesResponse <a name="aws-cdk-sdk.fms.FmsListPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListPoliciesResponse: fms.FmsListPoliciesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListPoliciesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `policyList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListPoliciesResponse.property.policyList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPolicySummary`](#aws-cdk-sdk.fms.FmsPolicySummary)[]

---

### FmsListProtocolsListsRequest <a name="aws-cdk-sdk.fms.FmsListProtocolsListsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListProtocolsListsRequest: fms.FmsListProtocolsListsRequest = { ... }
```

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsListProtocolsListsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `defaultLists`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListProtocolsListsRequest.property.defaultLists"></a>

- *Type:* `boolean`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListProtocolsListsRequest.property.nextToken"></a>

- *Type:* `string`

---

### FmsListProtocolsListsResponse <a name="aws-cdk-sdk.fms.FmsListProtocolsListsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListProtocolsListsResponse: fms.FmsListProtocolsListsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListProtocolsListsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `protocolsLists`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListProtocolsListsResponse.property.protocolsLists"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsProtocolsListDataSummary`](#aws-cdk-sdk.fms.FmsProtocolsListDataSummary)[]

---

### FmsListTagsForResourceRequest <a name="aws-cdk-sdk.fms.FmsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListTagsForResourceRequest: fms.FmsListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### FmsListTagsForResourceResponse <a name="aws-cdk-sdk.fms.FmsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsListTagsForResourceResponse: fms.FmsListTagsForResourceResponse = { ... }
```

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsListTagsForResourceResponse.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsTag`](#aws-cdk-sdk.fms.FmsTag)[]

---

### FmsNetworkFirewallMissingExpectedRtViolation <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingExpectedRtViolation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsNetworkFirewallMissingExpectedRtViolation: fms.FmsNetworkFirewallMissingExpectedRtViolation = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingExpectedRtViolation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `currentRouteTable`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingExpectedRtViolation.property.currentRouteTable"></a>

- *Type:* `string`

---

##### `expectedRouteTable`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingExpectedRtViolation.property.expectedRouteTable"></a>

- *Type:* `string`

---

##### `violationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingExpectedRtViolation.property.violationTarget"></a>

- *Type:* `string`

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingExpectedRtViolation.property.vpc"></a>

- *Type:* `string`

---

### FmsNetworkFirewallMissingFirewallViolation <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingFirewallViolation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsNetworkFirewallMissingFirewallViolation: fms.FmsNetworkFirewallMissingFirewallViolation = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingFirewallViolation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `targetViolationReason`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingFirewallViolation.property.targetViolationReason"></a>

- *Type:* `string`

---

##### `violationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingFirewallViolation.property.violationTarget"></a>

- *Type:* `string`

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingFirewallViolation.property.vpc"></a>

- *Type:* `string`

---

### FmsNetworkFirewallMissingSubnetViolation <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingSubnetViolation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsNetworkFirewallMissingSubnetViolation: fms.FmsNetworkFirewallMissingSubnetViolation = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingSubnetViolation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `targetViolationReason`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingSubnetViolation.property.targetViolationReason"></a>

- *Type:* `string`

---

##### `violationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingSubnetViolation.property.violationTarget"></a>

- *Type:* `string`

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallMissingSubnetViolation.property.vpc"></a>

- *Type:* `string`

---

### FmsNetworkFirewallPolicyDescription <a name="aws-cdk-sdk.fms.FmsNetworkFirewallPolicyDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsNetworkFirewallPolicyDescription: fms.FmsNetworkFirewallPolicyDescription = { ... }
```

##### `statefulRuleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallPolicyDescription.property.statefulRuleGroups"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsStatefulRuleGroup`](#aws-cdk-sdk.fms.FmsStatefulRuleGroup)[]

---

##### `statelessCustomActions`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallPolicyDescription.property.statelessCustomActions"></a>

- *Type:* `string`[]

---

##### `statelessDefaultActions`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallPolicyDescription.property.statelessDefaultActions"></a>

- *Type:* `string`[]

---

##### `statelessFragmentDefaultActions`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallPolicyDescription.property.statelessFragmentDefaultActions"></a>

- *Type:* `string`[]

---

##### `statelessRuleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallPolicyDescription.property.statelessRuleGroups"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsStatelessRuleGroup`](#aws-cdk-sdk.fms.FmsStatelessRuleGroup)[]

---

### FmsNetworkFirewallPolicyModifiedViolation <a name="aws-cdk-sdk.fms.FmsNetworkFirewallPolicyModifiedViolation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsNetworkFirewallPolicyModifiedViolation: fms.FmsNetworkFirewallPolicyModifiedViolation = { ... }
```

##### `currentPolicyDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallPolicyModifiedViolation.property.currentPolicyDescription"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsNetworkFirewallPolicyDescription`](#aws-cdk-sdk.fms.FmsNetworkFirewallPolicyDescription)

---

##### `expectedPolicyDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallPolicyModifiedViolation.property.expectedPolicyDescription"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsNetworkFirewallPolicyDescription`](#aws-cdk-sdk.fms.FmsNetworkFirewallPolicyDescription)

---

##### `violationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsNetworkFirewallPolicyModifiedViolation.property.violationTarget"></a>

- *Type:* `string`

---

### FmsPartialMatch <a name="aws-cdk-sdk.fms.FmsPartialMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPartialMatch: fms.FmsPartialMatch = { ... }
```

##### `reference`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPartialMatch.property.reference"></a>

- *Type:* `string`

---

##### `targetViolationReasons`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPartialMatch.property.targetViolationReasons"></a>

- *Type:* `string`[]

---

### FmsPolicy <a name="aws-cdk-sdk.fms.FmsPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPolicy: fms.FmsPolicy = { ... }
```

##### `excludeResourceTags`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.excludeResourceTags"></a>

- *Type:* `boolean`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.policyName"></a>

- *Type:* `string`

---

##### `remediationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.remediationEnabled"></a>

- *Type:* `boolean`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.resourceType"></a>

- *Type:* `string`

---

##### `securityServicePolicyData`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.securityServicePolicyData"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsSecurityServicePolicyData`](#aws-cdk-sdk.fms.FmsSecurityServicePolicyData)

---

##### `excludeMap`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.excludeMap"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `includeMap`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.includeMap"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.policyId"></a>

- *Type:* `string`

---

##### `policyUpdateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.policyUpdateToken"></a>

- *Type:* `string`

---

##### `resourceTags`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.resourceTags"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsResourceTag`](#aws-cdk-sdk.fms.FmsResourceTag)[]

---

##### `resourceTypeList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicy.property.resourceTypeList"></a>

- *Type:* `string`[]

---

### FmsPolicyComplianceDetail <a name="aws-cdk-sdk.fms.FmsPolicyComplianceDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPolicyComplianceDetail: fms.FmsPolicyComplianceDetail = { ... }
```

##### `evaluationLimitExceeded`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceDetail.property.evaluationLimitExceeded"></a>

- *Type:* `boolean`

---

##### `expiredAt`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceDetail.property.expiredAt"></a>

- *Type:* `string`

---

##### `issueInfoMap`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceDetail.property.issueInfoMap"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `memberAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceDetail.property.memberAccount"></a>

- *Type:* `string`

---

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceDetail.property.policyId"></a>

- *Type:* `string`

---

##### `policyOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceDetail.property.policyOwner"></a>

- *Type:* `string`

---

##### `violators`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceDetail.property.violators"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsComplianceViolator`](#aws-cdk-sdk.fms.FmsComplianceViolator)[]

---

### FmsPolicyComplianceStatus <a name="aws-cdk-sdk.fms.FmsPolicyComplianceStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPolicyComplianceStatus: fms.FmsPolicyComplianceStatus = { ... }
```

##### `evaluationResults`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceStatus.property.evaluationResults"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsEvaluationResult`](#aws-cdk-sdk.fms.FmsEvaluationResult)[]

---

##### `issueInfoMap`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceStatus.property.issueInfoMap"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceStatus.property.lastUpdated"></a>

- *Type:* `string`

---

##### `memberAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceStatus.property.memberAccount"></a>

- *Type:* `string`

---

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceStatus.property.policyId"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceStatus.property.policyName"></a>

- *Type:* `string`

---

##### `policyOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicyComplianceStatus.property.policyOwner"></a>

- *Type:* `string`

---

### FmsPolicySummary <a name="aws-cdk-sdk.fms.FmsPolicySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPolicySummary: fms.FmsPolicySummary = { ... }
```

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicySummary.property.policyArn"></a>

- *Type:* `string`

---

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicySummary.property.policyId"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicySummary.property.policyName"></a>

- *Type:* `string`

---

##### `remediationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicySummary.property.remediationEnabled"></a>

- *Type:* `boolean`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicySummary.property.resourceType"></a>

- *Type:* `string`

---

##### `securityServiceType`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPolicySummary.property.securityServiceType"></a>

- *Type:* `string`

---

### FmsProtocolsListData <a name="aws-cdk-sdk.fms.FmsProtocolsListData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsProtocolsListData: fms.FmsProtocolsListData = { ... }
```

##### `listName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListData.property.listName"></a>

- *Type:* `string`

---

##### `protocolsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListData.property.protocolsList"></a>

- *Type:* `string`[]

---

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListData.property.createTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListData.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `listId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListData.property.listId"></a>

- *Type:* `string`

---

##### `listUpdateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListData.property.listUpdateToken"></a>

- *Type:* `string`

---

##### `previousProtocolsList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListData.property.previousProtocolsList"></a>

- *Type:* {[ key: string ]: `string`[]}

---

### FmsProtocolsListDataSummary <a name="aws-cdk-sdk.fms.FmsProtocolsListDataSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsProtocolsListDataSummary: fms.FmsProtocolsListDataSummary = { ... }
```

##### `listArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListDataSummary.property.listArn"></a>

- *Type:* `string`

---

##### `listId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListDataSummary.property.listId"></a>

- *Type:* `string`

---

##### `listName`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListDataSummary.property.listName"></a>

- *Type:* `string`

---

##### `protocolsList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsProtocolsListDataSummary.property.protocolsList"></a>

- *Type:* `string`[]

---

### FmsPutAppsListRequest <a name="aws-cdk-sdk.fms.FmsPutAppsListRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPutAppsListRequest: fms.FmsPutAppsListRequest = { ... }
```

##### `appsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsPutAppsListRequest.property.appsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsAppsListData`](#aws-cdk-sdk.fms.FmsAppsListData)

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPutAppsListRequest.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsTag`](#aws-cdk-sdk.fms.FmsTag)[]

---

### FmsPutAppsListResponse <a name="aws-cdk-sdk.fms.FmsPutAppsListResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPutAppsListResponse: fms.FmsPutAppsListResponse = { ... }
```

##### `appsList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPutAppsListResponse.property.appsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsAppsListData`](#aws-cdk-sdk.fms.FmsAppsListData)

---

##### `appsListArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPutAppsListResponse.property.appsListArn"></a>

- *Type:* `string`

---

### FmsPutNotificationChannelRequest <a name="aws-cdk-sdk.fms.FmsPutNotificationChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPutNotificationChannelRequest: fms.FmsPutNotificationChannelRequest = { ... }
```

##### `snsRoleName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsPutNotificationChannelRequest.property.snsRoleName"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsPutNotificationChannelRequest.property.snsTopicArn"></a>

- *Type:* `string`

---

### FmsPutPolicyRequest <a name="aws-cdk-sdk.fms.FmsPutPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPutPolicyRequest: fms.FmsPutPolicyRequest = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsPutPolicyRequest.property.policy"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPolicy`](#aws-cdk-sdk.fms.FmsPolicy)

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPutPolicyRequest.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsTag`](#aws-cdk-sdk.fms.FmsTag)[]

---

### FmsPutPolicyResponse <a name="aws-cdk-sdk.fms.FmsPutPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPutPolicyResponse: fms.FmsPutPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPutPolicyResponse.property.policy"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPolicy`](#aws-cdk-sdk.fms.FmsPolicy)

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPutPolicyResponse.property.policyArn"></a>

- *Type:* `string`

---

### FmsPutProtocolsListRequest <a name="aws-cdk-sdk.fms.FmsPutProtocolsListRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPutProtocolsListRequest: fms.FmsPutProtocolsListRequest = { ... }
```

##### `protocolsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsPutProtocolsListRequest.property.protocolsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsProtocolsListData`](#aws-cdk-sdk.fms.FmsProtocolsListData)

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPutProtocolsListRequest.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsTag`](#aws-cdk-sdk.fms.FmsTag)[]

---

### FmsPutProtocolsListResponse <a name="aws-cdk-sdk.fms.FmsPutProtocolsListResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsPutProtocolsListResponse: fms.FmsPutProtocolsListResponse = { ... }
```

##### `protocolsList`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPutProtocolsListResponse.property.protocolsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsProtocolsListData`](#aws-cdk-sdk.fms.FmsProtocolsListData)

---

##### `protocolsListArn`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsPutProtocolsListResponse.property.protocolsListArn"></a>

- *Type:* `string`

---

### FmsResourceTag <a name="aws-cdk-sdk.fms.FmsResourceTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsResourceTag: fms.FmsResourceTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsResourceTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsResourceTag.property.value"></a>

- *Type:* `string`

---

### FmsResourceViolation <a name="aws-cdk-sdk.fms.FmsResourceViolation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsResourceViolation: fms.FmsResourceViolation = { ... }
```

##### `awsEc2InstanceViolation`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsResourceViolation.property.awsEc2InstanceViolation"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsAwsEc2InstanceViolation`](#aws-cdk-sdk.fms.FmsAwsEc2InstanceViolation)

---

##### `awsEc2NetworkInterfaceViolation`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsResourceViolation.property.awsEc2NetworkInterfaceViolation"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsAwsEc2NetworkInterfaceViolation`](#aws-cdk-sdk.fms.FmsAwsEc2NetworkInterfaceViolation)

---

##### `awsVpcSecurityGroupViolation`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsResourceViolation.property.awsVpcSecurityGroupViolation"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsAwsVpcSecurityGroupViolation`](#aws-cdk-sdk.fms.FmsAwsVpcSecurityGroupViolation)

---

##### `networkFirewallMissingExpectedRtViolation`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsResourceViolation.property.networkFirewallMissingExpectedRtViolation"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsNetworkFirewallMissingExpectedRtViolation`](#aws-cdk-sdk.fms.FmsNetworkFirewallMissingExpectedRtViolation)

---

##### `networkFirewallMissingFirewallViolation`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsResourceViolation.property.networkFirewallMissingFirewallViolation"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsNetworkFirewallMissingFirewallViolation`](#aws-cdk-sdk.fms.FmsNetworkFirewallMissingFirewallViolation)

---

##### `networkFirewallMissingSubnetViolation`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsResourceViolation.property.networkFirewallMissingSubnetViolation"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsNetworkFirewallMissingSubnetViolation`](#aws-cdk-sdk.fms.FmsNetworkFirewallMissingSubnetViolation)

---

##### `networkFirewallPolicyModifiedViolation`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsResourceViolation.property.networkFirewallPolicyModifiedViolation"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsNetworkFirewallPolicyModifiedViolation`](#aws-cdk-sdk.fms.FmsNetworkFirewallPolicyModifiedViolation)

---

### FmsSecurityGroupRemediationAction <a name="aws-cdk-sdk.fms.FmsSecurityGroupRemediationAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsSecurityGroupRemediationAction: fms.FmsSecurityGroupRemediationAction = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityGroupRemediationAction.property.description"></a>

- *Type:* `string`

---

##### `isDefaultAction`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityGroupRemediationAction.property.isDefaultAction"></a>

- *Type:* `boolean`

---

##### `remediationActionType`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityGroupRemediationAction.property.remediationActionType"></a>

- *Type:* `string`

---

##### `remediationResult`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityGroupRemediationAction.property.remediationResult"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsSecurityGroupRuleDescription`](#aws-cdk-sdk.fms.FmsSecurityGroupRuleDescription)

---

### FmsSecurityGroupRuleDescription <a name="aws-cdk-sdk.fms.FmsSecurityGroupRuleDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsSecurityGroupRuleDescription: fms.FmsSecurityGroupRuleDescription = { ... }
```

##### `fromPort`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityGroupRuleDescription.property.fromPort"></a>

- *Type:* `number`

---

##### `ipv4Range`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityGroupRuleDescription.property.ipv4Range"></a>

- *Type:* `string`

---

##### `ipv6Range`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityGroupRuleDescription.property.ipv6Range"></a>

- *Type:* `string`

---

##### `prefixListId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityGroupRuleDescription.property.prefixListId"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityGroupRuleDescription.property.protocol"></a>

- *Type:* `string`

---

##### `toPort`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityGroupRuleDescription.property.toPort"></a>

- *Type:* `number`

---

### FmsSecurityServicePolicyData <a name="aws-cdk-sdk.fms.FmsSecurityServicePolicyData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsSecurityServicePolicyData: fms.FmsSecurityServicePolicyData = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsSecurityServicePolicyData.property.type"></a>

- *Type:* `string`

---

##### `managedServiceData`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsSecurityServicePolicyData.property.managedServiceData"></a>

- *Type:* `string`

---

### FmsStatefulRuleGroup <a name="aws-cdk-sdk.fms.FmsStatefulRuleGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsStatefulRuleGroup: fms.FmsStatefulRuleGroup = { ... }
```

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsStatefulRuleGroup.property.resourceId"></a>

- *Type:* `string`

---

##### `ruleGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsStatefulRuleGroup.property.ruleGroupName"></a>

- *Type:* `string`

---

### FmsStatelessRuleGroup <a name="aws-cdk-sdk.fms.FmsStatelessRuleGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsStatelessRuleGroup: fms.FmsStatelessRuleGroup = { ... }
```

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsStatelessRuleGroup.property.priority"></a>

- *Type:* `number`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsStatelessRuleGroup.property.resourceId"></a>

- *Type:* `string`

---

##### `ruleGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsStatelessRuleGroup.property.ruleGroupName"></a>

- *Type:* `string`

---

### FmsTag <a name="aws-cdk-sdk.fms.FmsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsTag: fms.FmsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsTag.property.value"></a>

- *Type:* `string`

---

### FmsTagResourceRequest <a name="aws-cdk-sdk.fms.FmsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsTagResourceRequest: fms.FmsTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsTagResourceRequest.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsTag`](#aws-cdk-sdk.fms.FmsTag)[]

---

### FmsTagResourceResponse <a name="aws-cdk-sdk.fms.FmsTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsTagResourceResponse: fms.FmsTagResourceResponse = { ... }
```

### FmsUntagResourceRequest <a name="aws-cdk-sdk.fms.FmsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsUntagResourceRequest: fms.FmsUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### FmsUntagResourceResponse <a name="aws-cdk-sdk.fms.FmsUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsUntagResourceResponse: fms.FmsUntagResourceResponse = { ... }
```

### FmsViolationDetail <a name="aws-cdk-sdk.fms.FmsViolationDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

const fmsViolationDetail: fms.FmsViolationDetail = { ... }
```

##### `memberAccount`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsViolationDetail.property.memberAccount"></a>

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsViolationDetail.property.policyId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsViolationDetail.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsViolationDetail.property.resourceType"></a>

- *Type:* `string`

---

##### `resourceViolations`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FmsViolationDetail.property.resourceViolations"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsResourceViolation`](#aws-cdk-sdk.fms.FmsResourceViolation)[]

---

##### `resourceDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsViolationDetail.property.resourceDescription"></a>

- *Type:* `string`

---

##### `resourceTags`<sup>Optional</sup> <a name="aws-cdk-sdk.fms.FmsViolationDetail.property.resourceTags"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsTag`](#aws-cdk-sdk.fms.FmsTag)[]

---

## Classes <a name="Classes"></a>

### FMSResponsesFetchAdminAccount <a name="aws-cdk-sdk.fms.FMSResponsesFetchAdminAccount"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchAdminAccount.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchAdminAccount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAdminAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAdminAccount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `adminAccount`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAdminAccount.property.adminAccount"></a>

- *Type:* `string`

---

##### `roleStatus`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAdminAccount.property.roleStatus"></a>

- *Type:* `string`

---


### FMSResponsesFetchAppsList <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsList"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsList.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchAppsList(__scope: Construct, __resources: string[], __input: FmsGetAppsListRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetAppsListRequest`](#aws-cdk-sdk.fms.FmsGetAppsListRequest)

---



#### Properties <a name="Properties"></a>

##### `appsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsList.property.appsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList`](#aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList)

---

##### `appsListArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsList.property.appsListArn"></a>

- *Type:* `string`

---


### FMSResponsesFetchAppsListAppsList <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchAppsListAppsList(__scope: Construct, __resources: string[], __input: FmsGetAppsListRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetAppsListRequest`](#aws-cdk-sdk.fms.FmsGetAppsListRequest)

---



#### Properties <a name="Properties"></a>

##### `appsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.property.appsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsApp`](#aws-cdk-sdk.fms.FmsApp)[]

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.property.createTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `listId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.property.listId"></a>

- *Type:* `string`

---

##### `listName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.property.listName"></a>

- *Type:* `string`

---

##### `listUpdateToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.property.listUpdateToken"></a>

- *Type:* `string`

---

##### `previousAppsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchAppsListAppsList.property.previousAppsList"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.fms.FmsApp`](#aws-cdk-sdk.fms.FmsApp)[]}

---


### FMSResponsesFetchComplianceDetail <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetail"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetail.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchComplianceDetail(__scope: Construct, __resources: string[], __input: FmsGetComplianceDetailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetComplianceDetailRequest`](#aws-cdk-sdk.fms.FmsGetComplianceDetailRequest)

---



#### Properties <a name="Properties"></a>

##### `policyComplianceDetail`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetail.property.policyComplianceDetail"></a>

- *Type:* [`aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail`](#aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail)

---


### FMSResponsesFetchComplianceDetailPolicyComplianceDetail <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail(__scope: Construct, __resources: string[], __input: FmsGetComplianceDetailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetComplianceDetailRequest`](#aws-cdk-sdk.fms.FmsGetComplianceDetailRequest)

---



#### Properties <a name="Properties"></a>

##### `evaluationLimitExceeded`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.property.evaluationLimitExceeded"></a>

- *Type:* `boolean`

---

##### `expiredAt`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.property.expiredAt"></a>

- *Type:* `string`

---

##### `issueInfoMap`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.property.issueInfoMap"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `memberAccount`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.property.memberAccount"></a>

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.property.policyId"></a>

- *Type:* `string`

---

##### `policyOwner`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.property.policyOwner"></a>

- *Type:* `string`

---

##### `violators`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchComplianceDetailPolicyComplianceDetail.property.violators"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsComplianceViolator`](#aws-cdk-sdk.fms.FmsComplianceViolator)[]

---


### FMSResponsesFetchNotificationChannel <a name="aws-cdk-sdk.fms.FMSResponsesFetchNotificationChannel"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchNotificationChannel.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchNotificationChannel(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchNotificationChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchNotificationChannel.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `snsRoleName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchNotificationChannel.property.snsRoleName"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchNotificationChannel.property.snsTopicArn"></a>

- *Type:* `string`

---


### FMSResponsesFetchPolicy <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicy.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchPolicy(__scope: Construct, __resources: string[], __input: FmsGetPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetPolicyRequest`](#aws-cdk-sdk.fms.FmsGetPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy`](#aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy)

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicy.property.policyArn"></a>

- *Type:* `string`

---


### FMSResponsesFetchPolicyPolicy <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchPolicyPolicy(__scope: Construct, __resources: string[], __input: FmsGetPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetPolicyRequest`](#aws-cdk-sdk.fms.FmsGetPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `excludeMap`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.excludeMap"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `excludeResourceTags`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.excludeResourceTags"></a>

- *Type:* `boolean`

---

##### `includeMap`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.includeMap"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.policyId"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.policyName"></a>

- *Type:* `string`

---

##### `policyUpdateToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.policyUpdateToken"></a>

- *Type:* `string`

---

##### `remediationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.remediationEnabled"></a>

- *Type:* `boolean`

---

##### `resourceTags`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.resourceTags"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsResourceTag`](#aws-cdk-sdk.fms.FmsResourceTag)[]

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.resourceType"></a>

- *Type:* `string`

---

##### `resourceTypeList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.resourceTypeList"></a>

- *Type:* `string`[]

---

##### `securityServicePolicyData`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicy.property.securityServicePolicyData"></a>

- *Type:* [`aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicySecurityServicePolicyData`](#aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicySecurityServicePolicyData)

---


### FMSResponsesFetchPolicyPolicySecurityServicePolicyData <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicySecurityServicePolicyData"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicySecurityServicePolicyData.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchPolicyPolicySecurityServicePolicyData(__scope: Construct, __resources: string[], __input: FmsGetPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicySecurityServicePolicyData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicySecurityServicePolicyData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicySecurityServicePolicyData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetPolicyRequest`](#aws-cdk-sdk.fms.FmsGetPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `managedServiceData`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicySecurityServicePolicyData.property.managedServiceData"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchPolicyPolicySecurityServicePolicyData.property.type"></a>

- *Type:* `string`

---


### FMSResponsesFetchProtectionStatus <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtectionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtectionStatus.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchProtectionStatus(__scope: Construct, __resources: string[], __input: FmsGetProtectionStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtectionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtectionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtectionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetProtectionStatusRequest`](#aws-cdk-sdk.fms.FmsGetProtectionStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `adminAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtectionStatus.property.adminAccountId"></a>

- *Type:* `string`

---

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtectionStatus.property.data"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtectionStatus.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceType`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtectionStatus.property.serviceType"></a>

- *Type:* `string`

---


### FMSResponsesFetchProtocolsList <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsList"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsList.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchProtocolsList(__scope: Construct, __resources: string[], __input: FmsGetProtocolsListRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetProtocolsListRequest`](#aws-cdk-sdk.fms.FmsGetProtocolsListRequest)

---



#### Properties <a name="Properties"></a>

##### `protocolsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsList.property.protocolsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList`](#aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList)

---

##### `protocolsListArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsList.property.protocolsListArn"></a>

- *Type:* `string`

---


### FMSResponsesFetchProtocolsListProtocolsList <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchProtocolsListProtocolsList(__scope: Construct, __resources: string[], __input: FmsGetProtocolsListRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetProtocolsListRequest`](#aws-cdk-sdk.fms.FmsGetProtocolsListRequest)

---



#### Properties <a name="Properties"></a>

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.property.createTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `listId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.property.listId"></a>

- *Type:* `string`

---

##### `listName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.property.listName"></a>

- *Type:* `string`

---

##### `listUpdateToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.property.listUpdateToken"></a>

- *Type:* `string`

---

##### `previousProtocolsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.property.previousProtocolsList"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `protocolsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchProtocolsListProtocolsList.property.protocolsList"></a>

- *Type:* `string`[]

---


### FMSResponsesFetchViolationDetails <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetails"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetails.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchViolationDetails(__scope: Construct, __resources: string[], __input: FmsGetViolationDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetViolationDetailsRequest`](#aws-cdk-sdk.fms.FmsGetViolationDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `violationDetail`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetails.property.violationDetail"></a>

- *Type:* [`aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail`](#aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail)

---


### FMSResponsesFetchViolationDetailsViolationDetail <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesFetchViolationDetailsViolationDetail(__scope: Construct, __resources: string[], __input: FmsGetViolationDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsGetViolationDetailsRequest`](#aws-cdk-sdk.fms.FmsGetViolationDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `memberAccount`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.property.memberAccount"></a>

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.property.policyId"></a>

- *Type:* `string`

---

##### `resourceDescription`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.property.resourceDescription"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceTags`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.property.resourceTags"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsTag`](#aws-cdk-sdk.fms.FmsTag)[]

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.property.resourceType"></a>

- *Type:* `string`

---

##### `resourceViolations`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesFetchViolationDetailsViolationDetail.property.resourceViolations"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsResourceViolation`](#aws-cdk-sdk.fms.FmsResourceViolation)[]

---


### FMSResponsesListAppsLists <a name="aws-cdk-sdk.fms.FMSResponsesListAppsLists"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesListAppsLists.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesListAppsLists(__scope: Construct, __resources: string[], __input: FmsListAppsListsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListAppsLists.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListAppsLists.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListAppsLists.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListAppsListsRequest`](#aws-cdk-sdk.fms.FmsListAppsListsRequest)

---



#### Properties <a name="Properties"></a>

##### `appsLists`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListAppsLists.property.appsLists"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsAppsListDataSummary`](#aws-cdk-sdk.fms.FmsAppsListDataSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListAppsLists.property.nextToken"></a>

- *Type:* `string`

---


### FMSResponsesListComplianceStatus <a name="aws-cdk-sdk.fms.FMSResponsesListComplianceStatus"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesListComplianceStatus.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesListComplianceStatus(__scope: Construct, __resources: string[], __input: FmsListComplianceStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListComplianceStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListComplianceStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListComplianceStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListComplianceStatusRequest`](#aws-cdk-sdk.fms.FmsListComplianceStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListComplianceStatus.property.nextToken"></a>

- *Type:* `string`

---

##### `policyComplianceStatusList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListComplianceStatus.property.policyComplianceStatusList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPolicyComplianceStatus`](#aws-cdk-sdk.fms.FmsPolicyComplianceStatus)[]

---


### FMSResponsesListMemberAccounts <a name="aws-cdk-sdk.fms.FMSResponsesListMemberAccounts"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesListMemberAccounts.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesListMemberAccounts(__scope: Construct, __resources: string[], __input: FmsListMemberAccountsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListMemberAccounts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListMemberAccounts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListMemberAccounts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListMemberAccountsRequest`](#aws-cdk-sdk.fms.FmsListMemberAccountsRequest)

---



#### Properties <a name="Properties"></a>

##### `memberAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListMemberAccounts.property.memberAccounts"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListMemberAccounts.property.nextToken"></a>

- *Type:* `string`

---


### FMSResponsesListPolicies <a name="aws-cdk-sdk.fms.FMSResponsesListPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesListPolicies.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesListPolicies(__scope: Construct, __resources: string[], __input: FmsListPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListPoliciesRequest`](#aws-cdk-sdk.fms.FmsListPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListPolicies.property.nextToken"></a>

- *Type:* `string`

---

##### `policyList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListPolicies.property.policyList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPolicySummary`](#aws-cdk-sdk.fms.FmsPolicySummary)[]

---


### FMSResponsesListProtocolsLists <a name="aws-cdk-sdk.fms.FMSResponsesListProtocolsLists"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesListProtocolsLists.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesListProtocolsLists(__scope: Construct, __resources: string[], __input: FmsListProtocolsListsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListProtocolsLists.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListProtocolsLists.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListProtocolsLists.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListProtocolsListsRequest`](#aws-cdk-sdk.fms.FmsListProtocolsListsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListProtocolsLists.property.nextToken"></a>

- *Type:* `string`

---

##### `protocolsLists`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListProtocolsLists.property.protocolsLists"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsProtocolsListDataSummary`](#aws-cdk-sdk.fms.FmsProtocolsListDataSummary)[]

---


### FMSResponsesListTagsForResource <a name="aws-cdk-sdk.fms.FMSResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesListTagsForResource.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: FmsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsListTagsForResourceRequest`](#aws-cdk-sdk.fms.FmsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesListTagsForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsTag`](#aws-cdk-sdk.fms.FmsTag)[]

---


### FMSResponsesPutAppsList <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsList"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsList.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesPutAppsList(__scope: Construct, __resources: string[], __input: FmsPutAppsListRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutAppsListRequest`](#aws-cdk-sdk.fms.FmsPutAppsListRequest)

---



#### Properties <a name="Properties"></a>

##### `appsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsList.property.appsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList`](#aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList)

---

##### `appsListArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsList.property.appsListArn"></a>

- *Type:* `string`

---


### FMSResponsesPutAppsListAppsList <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesPutAppsListAppsList(__scope: Construct, __resources: string[], __input: FmsPutAppsListRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutAppsListRequest`](#aws-cdk-sdk.fms.FmsPutAppsListRequest)

---



#### Properties <a name="Properties"></a>

##### `appsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.property.appsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsApp`](#aws-cdk-sdk.fms.FmsApp)[]

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.property.createTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `listId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.property.listId"></a>

- *Type:* `string`

---

##### `listName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.property.listName"></a>

- *Type:* `string`

---

##### `listUpdateToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.property.listUpdateToken"></a>

- *Type:* `string`

---

##### `previousAppsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutAppsListAppsList.property.previousAppsList"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.fms.FmsApp`](#aws-cdk-sdk.fms.FmsApp)[]}

---


### FMSResponsesPutPolicy <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicy.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesPutPolicy(__scope: Construct, __resources: string[], __input: FmsPutPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutPolicyRequest`](#aws-cdk-sdk.fms.FmsPutPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy`](#aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy)

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicy.property.policyArn"></a>

- *Type:* `string`

---


### FMSResponsesPutPolicyPolicy <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesPutPolicyPolicy(__scope: Construct, __resources: string[], __input: FmsPutPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutPolicyRequest`](#aws-cdk-sdk.fms.FmsPutPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `excludeMap`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.excludeMap"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `excludeResourceTags`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.excludeResourceTags"></a>

- *Type:* `boolean`

---

##### `includeMap`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.includeMap"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.policyId"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.policyName"></a>

- *Type:* `string`

---

##### `policyUpdateToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.policyUpdateToken"></a>

- *Type:* `string`

---

##### `remediationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.remediationEnabled"></a>

- *Type:* `boolean`

---

##### `resourceTags`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.resourceTags"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsResourceTag`](#aws-cdk-sdk.fms.FmsResourceTag)[]

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.resourceType"></a>

- *Type:* `string`

---

##### `resourceTypeList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.resourceTypeList"></a>

- *Type:* `string`[]

---

##### `securityServicePolicyData`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicy.property.securityServicePolicyData"></a>

- *Type:* [`aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicySecurityServicePolicyData`](#aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicySecurityServicePolicyData)

---


### FMSResponsesPutPolicyPolicySecurityServicePolicyData <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicySecurityServicePolicyData"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicySecurityServicePolicyData.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesPutPolicyPolicySecurityServicePolicyData(__scope: Construct, __resources: string[], __input: FmsPutPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicySecurityServicePolicyData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicySecurityServicePolicyData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicySecurityServicePolicyData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutPolicyRequest`](#aws-cdk-sdk.fms.FmsPutPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `managedServiceData`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicySecurityServicePolicyData.property.managedServiceData"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutPolicyPolicySecurityServicePolicyData.property.type"></a>

- *Type:* `string`

---


### FMSResponsesPutProtocolsList <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsList"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsList.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesPutProtocolsList(__scope: Construct, __resources: string[], __input: FmsPutProtocolsListRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutProtocolsListRequest`](#aws-cdk-sdk.fms.FmsPutProtocolsListRequest)

---



#### Properties <a name="Properties"></a>

##### `protocolsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsList.property.protocolsList"></a>

- *Type:* [`aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList`](#aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList)

---

##### `protocolsListArn`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsList.property.protocolsListArn"></a>

- *Type:* `string`

---


### FMSResponsesPutProtocolsListProtocolsList <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList"></a>

#### Initializer <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.Initializer"></a>

```typescript
import { fms } from 'aws-cdk-sdk'

new fms.FMSResponsesPutProtocolsListProtocolsList(__scope: Construct, __resources: string[], __input: FmsPutProtocolsListRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.fms.FmsPutProtocolsListRequest`](#aws-cdk-sdk.fms.FmsPutProtocolsListRequest)

---



#### Properties <a name="Properties"></a>

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.property.createTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `listId`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.property.listId"></a>

- *Type:* `string`

---

##### `listName`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.property.listName"></a>

- *Type:* `string`

---

##### `listUpdateToken`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.property.listUpdateToken"></a>

- *Type:* `string`

---

##### `previousProtocolsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.property.previousProtocolsList"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `protocolsList`<sup>Required</sup> <a name="aws-cdk-sdk.fms.FMSResponsesPutProtocolsListProtocolsList.property.protocolsList"></a>

- *Type:* `string`[]

---



