# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IotClient <a name="aws-cdk-sdk.iot.IotClient"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotClient.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptCertificateTransfer` <a name="aws-cdk-sdk.iot.IotClient.acceptCertificateTransfer"></a>

```typescript
public acceptCertificateTransfer(input: IotAcceptCertificateTransferRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAcceptCertificateTransferRequest`](#aws-cdk-sdk.iot.IotAcceptCertificateTransferRequest)

---

##### `addThingToBillingGroup` <a name="aws-cdk-sdk.iot.IotClient.addThingToBillingGroup"></a>

```typescript
public addThingToBillingGroup(input: IotAddThingToBillingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAddThingToBillingGroupRequest`](#aws-cdk-sdk.iot.IotAddThingToBillingGroupRequest)

---

##### `addThingToThingGroup` <a name="aws-cdk-sdk.iot.IotClient.addThingToThingGroup"></a>

```typescript
public addThingToThingGroup(input: IotAddThingToThingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAddThingToThingGroupRequest`](#aws-cdk-sdk.iot.IotAddThingToThingGroupRequest)

---

##### `associateTargetsWithJob` <a name="aws-cdk-sdk.iot.IotClient.associateTargetsWithJob"></a>

```typescript
public associateTargetsWithJob(input: IotAssociateTargetsWithJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAssociateTargetsWithJobRequest`](#aws-cdk-sdk.iot.IotAssociateTargetsWithJobRequest)

---

##### `attachPolicy` <a name="aws-cdk-sdk.iot.IotClient.attachPolicy"></a>

```typescript
public attachPolicy(input: IotAttachPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAttachPolicyRequest`](#aws-cdk-sdk.iot.IotAttachPolicyRequest)

---

##### `attachPrincipalPolicy` <a name="aws-cdk-sdk.iot.IotClient.attachPrincipalPolicy"></a>

```typescript
public attachPrincipalPolicy(input: IotAttachPrincipalPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAttachPrincipalPolicyRequest`](#aws-cdk-sdk.iot.IotAttachPrincipalPolicyRequest)

---

##### `attachSecurityProfile` <a name="aws-cdk-sdk.iot.IotClient.attachSecurityProfile"></a>

```typescript
public attachSecurityProfile(input: IotAttachSecurityProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAttachSecurityProfileRequest`](#aws-cdk-sdk.iot.IotAttachSecurityProfileRequest)

---

##### `attachThingPrincipal` <a name="aws-cdk-sdk.iot.IotClient.attachThingPrincipal"></a>

```typescript
public attachThingPrincipal(input: IotAttachThingPrincipalRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAttachThingPrincipalRequest`](#aws-cdk-sdk.iot.IotAttachThingPrincipalRequest)

---

##### `cancelAuditMitigationActionsTask` <a name="aws-cdk-sdk.iot.IotClient.cancelAuditMitigationActionsTask"></a>

```typescript
public cancelAuditMitigationActionsTask(input: IotCancelAuditMitigationActionsTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCancelAuditMitigationActionsTaskRequest`](#aws-cdk-sdk.iot.IotCancelAuditMitigationActionsTaskRequest)

---

##### `cancelAuditTask` <a name="aws-cdk-sdk.iot.IotClient.cancelAuditTask"></a>

```typescript
public cancelAuditTask(input: IotCancelAuditTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCancelAuditTaskRequest`](#aws-cdk-sdk.iot.IotCancelAuditTaskRequest)

---

##### `cancelCertificateTransfer` <a name="aws-cdk-sdk.iot.IotClient.cancelCertificateTransfer"></a>

```typescript
public cancelCertificateTransfer(input: IotCancelCertificateTransferRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCancelCertificateTransferRequest`](#aws-cdk-sdk.iot.IotCancelCertificateTransferRequest)

---

##### `cancelJob` <a name="aws-cdk-sdk.iot.IotClient.cancelJob"></a>

```typescript
public cancelJob(input: IotCancelJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCancelJobRequest`](#aws-cdk-sdk.iot.IotCancelJobRequest)

---

##### `cancelJobExecution` <a name="aws-cdk-sdk.iot.IotClient.cancelJobExecution"></a>

```typescript
public cancelJobExecution(input: IotCancelJobExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCancelJobExecutionRequest`](#aws-cdk-sdk.iot.IotCancelJobExecutionRequest)

---

##### `clearDefaultAuthorizer` <a name="aws-cdk-sdk.iot.IotClient.clearDefaultAuthorizer"></a>

```typescript
public clearDefaultAuthorizer()
```

##### `confirmTopicRuleDestination` <a name="aws-cdk-sdk.iot.IotClient.confirmTopicRuleDestination"></a>

```typescript
public confirmTopicRuleDestination(input: IotConfirmTopicRuleDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotConfirmTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotConfirmTopicRuleDestinationRequest)

---

##### `createAuditSuppression` <a name="aws-cdk-sdk.iot.IotClient.createAuditSuppression"></a>

```typescript
public createAuditSuppression(input: IotCreateAuditSuppressionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateAuditSuppressionRequest`](#aws-cdk-sdk.iot.IotCreateAuditSuppressionRequest)

---

##### `createAuthorizer` <a name="aws-cdk-sdk.iot.IotClient.createAuthorizer"></a>

```typescript
public createAuthorizer(input: IotCreateAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateAuthorizerRequest`](#aws-cdk-sdk.iot.IotCreateAuthorizerRequest)

---

##### `createBillingGroup` <a name="aws-cdk-sdk.iot.IotClient.createBillingGroup"></a>

```typescript
public createBillingGroup(input: IotCreateBillingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateBillingGroupRequest`](#aws-cdk-sdk.iot.IotCreateBillingGroupRequest)

---

##### `createCertificateFromCsr` <a name="aws-cdk-sdk.iot.IotClient.createCertificateFromCsr"></a>

```typescript
public createCertificateFromCsr(input: IotCreateCertificateFromCsrRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateCertificateFromCsrRequest`](#aws-cdk-sdk.iot.IotCreateCertificateFromCsrRequest)

---

##### `createDimension` <a name="aws-cdk-sdk.iot.IotClient.createDimension"></a>

```typescript
public createDimension(input: IotCreateDimensionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateDimensionRequest`](#aws-cdk-sdk.iot.IotCreateDimensionRequest)

---

##### `createDomainConfiguration` <a name="aws-cdk-sdk.iot.IotClient.createDomainConfiguration"></a>

```typescript
public createDomainConfiguration(input: IotCreateDomainConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest`](#aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest)

---

##### `createDynamicThingGroup` <a name="aws-cdk-sdk.iot.IotClient.createDynamicThingGroup"></a>

```typescript
public createDynamicThingGroup(input: IotCreateDynamicThingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest`](#aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest)

---

##### `createJob` <a name="aws-cdk-sdk.iot.IotClient.createJob"></a>

```typescript
public createJob(input: IotCreateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateJobRequest`](#aws-cdk-sdk.iot.IotCreateJobRequest)

---

##### `createKeysAndCertificate` <a name="aws-cdk-sdk.iot.IotClient.createKeysAndCertificate"></a>

```typescript
public createKeysAndCertificate(input: IotCreateKeysAndCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateKeysAndCertificateRequest`](#aws-cdk-sdk.iot.IotCreateKeysAndCertificateRequest)

---

##### `createMitigationAction` <a name="aws-cdk-sdk.iot.IotClient.createMitigationAction"></a>

```typescript
public createMitigationAction(input: IotCreateMitigationActionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateMitigationActionRequest`](#aws-cdk-sdk.iot.IotCreateMitigationActionRequest)

---

##### `createOtaUpdate` <a name="aws-cdk-sdk.iot.IotClient.createOtaUpdate"></a>

```typescript
public createOtaUpdate(input: IotCreateOtaUpdateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateOtaUpdateRequest`](#aws-cdk-sdk.iot.IotCreateOtaUpdateRequest)

---

##### `createPolicy` <a name="aws-cdk-sdk.iot.IotClient.createPolicy"></a>

```typescript
public createPolicy(input: IotCreatePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreatePolicyRequest`](#aws-cdk-sdk.iot.IotCreatePolicyRequest)

---

##### `createPolicyVersion` <a name="aws-cdk-sdk.iot.IotClient.createPolicyVersion"></a>

```typescript
public createPolicyVersion(input: IotCreatePolicyVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreatePolicyVersionRequest`](#aws-cdk-sdk.iot.IotCreatePolicyVersionRequest)

---

##### `createProvisioningClaim` <a name="aws-cdk-sdk.iot.IotClient.createProvisioningClaim"></a>

```typescript
public createProvisioningClaim(input: IotCreateProvisioningClaimRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateProvisioningClaimRequest`](#aws-cdk-sdk.iot.IotCreateProvisioningClaimRequest)

---

##### `createProvisioningTemplate` <a name="aws-cdk-sdk.iot.IotClient.createProvisioningTemplate"></a>

```typescript
public createProvisioningTemplate(input: IotCreateProvisioningTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest`](#aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest)

---

##### `createProvisioningTemplateVersion` <a name="aws-cdk-sdk.iot.IotClient.createProvisioningTemplateVersion"></a>

```typescript
public createProvisioningTemplateVersion(input: IotCreateProvisioningTemplateVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionRequest`](#aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionRequest)

---

##### `createRoleAlias` <a name="aws-cdk-sdk.iot.IotClient.createRoleAlias"></a>

```typescript
public createRoleAlias(input: IotCreateRoleAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateRoleAliasRequest`](#aws-cdk-sdk.iot.IotCreateRoleAliasRequest)

---

##### `createScheduledAudit` <a name="aws-cdk-sdk.iot.IotClient.createScheduledAudit"></a>

```typescript
public createScheduledAudit(input: IotCreateScheduledAuditRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateScheduledAuditRequest`](#aws-cdk-sdk.iot.IotCreateScheduledAuditRequest)

---

##### `createSecurityProfile` <a name="aws-cdk-sdk.iot.IotClient.createSecurityProfile"></a>

```typescript
public createSecurityProfile(input: IotCreateSecurityProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateSecurityProfileRequest`](#aws-cdk-sdk.iot.IotCreateSecurityProfileRequest)

---

##### `createStream` <a name="aws-cdk-sdk.iot.IotClient.createStream"></a>

```typescript
public createStream(input: IotCreateStreamRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateStreamRequest`](#aws-cdk-sdk.iot.IotCreateStreamRequest)

---

##### `createThing` <a name="aws-cdk-sdk.iot.IotClient.createThing"></a>

```typescript
public createThing(input: IotCreateThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateThingRequest`](#aws-cdk-sdk.iot.IotCreateThingRequest)

---

##### `createThingGroup` <a name="aws-cdk-sdk.iot.IotClient.createThingGroup"></a>

```typescript
public createThingGroup(input: IotCreateThingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateThingGroupRequest`](#aws-cdk-sdk.iot.IotCreateThingGroupRequest)

---

##### `createThingType` <a name="aws-cdk-sdk.iot.IotClient.createThingType"></a>

```typescript
public createThingType(input: IotCreateThingTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateThingTypeRequest`](#aws-cdk-sdk.iot.IotCreateThingTypeRequest)

---

##### `createTopicRule` <a name="aws-cdk-sdk.iot.IotClient.createTopicRule"></a>

```typescript
public createTopicRule(input: IotCreateTopicRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateTopicRuleRequest`](#aws-cdk-sdk.iot.IotCreateTopicRuleRequest)

---

##### `createTopicRuleDestination` <a name="aws-cdk-sdk.iot.IotClient.createTopicRuleDestination"></a>

```typescript
public createTopicRuleDestination(input: IotCreateTopicRuleDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotCreateTopicRuleDestinationRequest)

---

##### `deleteAccountAuditConfiguration` <a name="aws-cdk-sdk.iot.IotClient.deleteAccountAuditConfiguration"></a>

```typescript
public deleteAccountAuditConfiguration(input: IotDeleteAccountAuditConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteAccountAuditConfigurationRequest`](#aws-cdk-sdk.iot.IotDeleteAccountAuditConfigurationRequest)

---

##### `deleteAuditSuppression` <a name="aws-cdk-sdk.iot.IotClient.deleteAuditSuppression"></a>

```typescript
public deleteAuditSuppression(input: IotDeleteAuditSuppressionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteAuditSuppressionRequest`](#aws-cdk-sdk.iot.IotDeleteAuditSuppressionRequest)

---

##### `deleteAuthorizer` <a name="aws-cdk-sdk.iot.IotClient.deleteAuthorizer"></a>

```typescript
public deleteAuthorizer(input: IotDeleteAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteAuthorizerRequest`](#aws-cdk-sdk.iot.IotDeleteAuthorizerRequest)

---

##### `deleteBillingGroup` <a name="aws-cdk-sdk.iot.IotClient.deleteBillingGroup"></a>

```typescript
public deleteBillingGroup(input: IotDeleteBillingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteBillingGroupRequest`](#aws-cdk-sdk.iot.IotDeleteBillingGroupRequest)

---

##### `deleteCaCertificate` <a name="aws-cdk-sdk.iot.IotClient.deleteCaCertificate"></a>

```typescript
public deleteCaCertificate(input: IotDeleteCaCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteCaCertificateRequest`](#aws-cdk-sdk.iot.IotDeleteCaCertificateRequest)

---

##### `deleteCertificate` <a name="aws-cdk-sdk.iot.IotClient.deleteCertificate"></a>

```typescript
public deleteCertificate(input: IotDeleteCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteCertificateRequest`](#aws-cdk-sdk.iot.IotDeleteCertificateRequest)

---

##### `deleteDimension` <a name="aws-cdk-sdk.iot.IotClient.deleteDimension"></a>

```typescript
public deleteDimension(input: IotDeleteDimensionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteDimensionRequest`](#aws-cdk-sdk.iot.IotDeleteDimensionRequest)

---

##### `deleteDomainConfiguration` <a name="aws-cdk-sdk.iot.IotClient.deleteDomainConfiguration"></a>

```typescript
public deleteDomainConfiguration(input: IotDeleteDomainConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteDomainConfigurationRequest`](#aws-cdk-sdk.iot.IotDeleteDomainConfigurationRequest)

---

##### `deleteDynamicThingGroup` <a name="aws-cdk-sdk.iot.IotClient.deleteDynamicThingGroup"></a>

```typescript
public deleteDynamicThingGroup(input: IotDeleteDynamicThingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteDynamicThingGroupRequest`](#aws-cdk-sdk.iot.IotDeleteDynamicThingGroupRequest)

---

##### `deleteJob` <a name="aws-cdk-sdk.iot.IotClient.deleteJob"></a>

```typescript
public deleteJob(input: IotDeleteJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteJobRequest`](#aws-cdk-sdk.iot.IotDeleteJobRequest)

---

##### `deleteJobExecution` <a name="aws-cdk-sdk.iot.IotClient.deleteJobExecution"></a>

```typescript
public deleteJobExecution(input: IotDeleteJobExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteJobExecutionRequest`](#aws-cdk-sdk.iot.IotDeleteJobExecutionRequest)

---

##### `deleteMitigationAction` <a name="aws-cdk-sdk.iot.IotClient.deleteMitigationAction"></a>

```typescript
public deleteMitigationAction(input: IotDeleteMitigationActionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteMitigationActionRequest`](#aws-cdk-sdk.iot.IotDeleteMitigationActionRequest)

---

##### `deleteOtaUpdate` <a name="aws-cdk-sdk.iot.IotClient.deleteOtaUpdate"></a>

```typescript
public deleteOtaUpdate(input: IotDeleteOtaUpdateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteOtaUpdateRequest`](#aws-cdk-sdk.iot.IotDeleteOtaUpdateRequest)

---

##### `deletePolicy` <a name="aws-cdk-sdk.iot.IotClient.deletePolicy"></a>

```typescript
public deletePolicy(input: IotDeletePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeletePolicyRequest`](#aws-cdk-sdk.iot.IotDeletePolicyRequest)

---

##### `deletePolicyVersion` <a name="aws-cdk-sdk.iot.IotClient.deletePolicyVersion"></a>

```typescript
public deletePolicyVersion(input: IotDeletePolicyVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeletePolicyVersionRequest`](#aws-cdk-sdk.iot.IotDeletePolicyVersionRequest)

---

##### `deleteProvisioningTemplate` <a name="aws-cdk-sdk.iot.IotClient.deleteProvisioningTemplate"></a>

```typescript
public deleteProvisioningTemplate(input: IotDeleteProvisioningTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteProvisioningTemplateRequest`](#aws-cdk-sdk.iot.IotDeleteProvisioningTemplateRequest)

---

##### `deleteProvisioningTemplateVersion` <a name="aws-cdk-sdk.iot.IotClient.deleteProvisioningTemplateVersion"></a>

```typescript
public deleteProvisioningTemplateVersion(input: IotDeleteProvisioningTemplateVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteProvisioningTemplateVersionRequest`](#aws-cdk-sdk.iot.IotDeleteProvisioningTemplateVersionRequest)

---

##### `deleteRegistrationCode` <a name="aws-cdk-sdk.iot.IotClient.deleteRegistrationCode"></a>

```typescript
public deleteRegistrationCode()
```

##### `deleteRoleAlias` <a name="aws-cdk-sdk.iot.IotClient.deleteRoleAlias"></a>

```typescript
public deleteRoleAlias(input: IotDeleteRoleAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteRoleAliasRequest`](#aws-cdk-sdk.iot.IotDeleteRoleAliasRequest)

---

##### `deleteScheduledAudit` <a name="aws-cdk-sdk.iot.IotClient.deleteScheduledAudit"></a>

```typescript
public deleteScheduledAudit(input: IotDeleteScheduledAuditRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteScheduledAuditRequest`](#aws-cdk-sdk.iot.IotDeleteScheduledAuditRequest)

---

##### `deleteSecurityProfile` <a name="aws-cdk-sdk.iot.IotClient.deleteSecurityProfile"></a>

```typescript
public deleteSecurityProfile(input: IotDeleteSecurityProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteSecurityProfileRequest`](#aws-cdk-sdk.iot.IotDeleteSecurityProfileRequest)

---

##### `deleteStream` <a name="aws-cdk-sdk.iot.IotClient.deleteStream"></a>

```typescript
public deleteStream(input: IotDeleteStreamRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteStreamRequest`](#aws-cdk-sdk.iot.IotDeleteStreamRequest)

---

##### `deleteThing` <a name="aws-cdk-sdk.iot.IotClient.deleteThing"></a>

```typescript
public deleteThing(input: IotDeleteThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteThingRequest`](#aws-cdk-sdk.iot.IotDeleteThingRequest)

---

##### `deleteThingGroup` <a name="aws-cdk-sdk.iot.IotClient.deleteThingGroup"></a>

```typescript
public deleteThingGroup(input: IotDeleteThingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteThingGroupRequest`](#aws-cdk-sdk.iot.IotDeleteThingGroupRequest)

---

##### `deleteThingType` <a name="aws-cdk-sdk.iot.IotClient.deleteThingType"></a>

```typescript
public deleteThingType(input: IotDeleteThingTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteThingTypeRequest`](#aws-cdk-sdk.iot.IotDeleteThingTypeRequest)

---

##### `deleteTopicRule` <a name="aws-cdk-sdk.iot.IotClient.deleteTopicRule"></a>

```typescript
public deleteTopicRule(input: IotDeleteTopicRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteTopicRuleRequest`](#aws-cdk-sdk.iot.IotDeleteTopicRuleRequest)

---

##### `deleteTopicRuleDestination` <a name="aws-cdk-sdk.iot.IotClient.deleteTopicRuleDestination"></a>

```typescript
public deleteTopicRuleDestination(input: IotDeleteTopicRuleDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotDeleteTopicRuleDestinationRequest)

---

##### `deleteV2LoggingLevel` <a name="aws-cdk-sdk.iot.IotClient.deleteV2LoggingLevel"></a>

```typescript
public deleteV2LoggingLevel(input: IotDeleteV2LoggingLevelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeleteV2LoggingLevelRequest`](#aws-cdk-sdk.iot.IotDeleteV2LoggingLevelRequest)

---

##### `deprecateThingType` <a name="aws-cdk-sdk.iot.IotClient.deprecateThingType"></a>

```typescript
public deprecateThingType(input: IotDeprecateThingTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDeprecateThingTypeRequest`](#aws-cdk-sdk.iot.IotDeprecateThingTypeRequest)

---

##### `describeAccountAuditConfiguration` <a name="aws-cdk-sdk.iot.IotClient.describeAccountAuditConfiguration"></a>

```typescript
public describeAccountAuditConfiguration()
```

##### `describeAuditFinding` <a name="aws-cdk-sdk.iot.IotClient.describeAuditFinding"></a>

```typescript
public describeAuditFinding(input: IotDescribeAuditFindingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditFindingRequest`](#aws-cdk-sdk.iot.IotDescribeAuditFindingRequest)

---

##### `describeAuditMitigationActionsTask` <a name="aws-cdk-sdk.iot.IotClient.describeAuditMitigationActionsTask"></a>

```typescript
public describeAuditMitigationActionsTask(input: IotDescribeAuditMitigationActionsTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskRequest`](#aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskRequest)

---

##### `describeAuditSuppression` <a name="aws-cdk-sdk.iot.IotClient.describeAuditSuppression"></a>

```typescript
public describeAuditSuppression(input: IotDescribeAuditSuppressionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest`](#aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest)

---

##### `describeAuditTask` <a name="aws-cdk-sdk.iot.IotClient.describeAuditTask"></a>

```typescript
public describeAuditTask(input: IotDescribeAuditTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditTaskRequest`](#aws-cdk-sdk.iot.IotDescribeAuditTaskRequest)

---

##### `describeAuthorizer` <a name="aws-cdk-sdk.iot.IotClient.describeAuthorizer"></a>

```typescript
public describeAuthorizer(input: IotDescribeAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuthorizerRequest`](#aws-cdk-sdk.iot.IotDescribeAuthorizerRequest)

---

##### `describeBillingGroup` <a name="aws-cdk-sdk.iot.IotClient.describeBillingGroup"></a>

```typescript
public describeBillingGroup(input: IotDescribeBillingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeBillingGroupRequest`](#aws-cdk-sdk.iot.IotDescribeBillingGroupRequest)

---

##### `describeCaCertificate` <a name="aws-cdk-sdk.iot.IotClient.describeCaCertificate"></a>

```typescript
public describeCaCertificate(input: IotDescribeCaCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeCaCertificateRequest`](#aws-cdk-sdk.iot.IotDescribeCaCertificateRequest)

---

##### `describeCertificate` <a name="aws-cdk-sdk.iot.IotClient.describeCertificate"></a>

```typescript
public describeCertificate(input: IotDescribeCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeCertificateRequest`](#aws-cdk-sdk.iot.IotDescribeCertificateRequest)

---

##### `describeDefaultAuthorizer` <a name="aws-cdk-sdk.iot.IotClient.describeDefaultAuthorizer"></a>

```typescript
public describeDefaultAuthorizer()
```

##### `describeDimension` <a name="aws-cdk-sdk.iot.IotClient.describeDimension"></a>

```typescript
public describeDimension(input: IotDescribeDimensionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeDimensionRequest`](#aws-cdk-sdk.iot.IotDescribeDimensionRequest)

---

##### `describeDomainConfiguration` <a name="aws-cdk-sdk.iot.IotClient.describeDomainConfiguration"></a>

```typescript
public describeDomainConfiguration(input: IotDescribeDomainConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeDomainConfigurationRequest`](#aws-cdk-sdk.iot.IotDescribeDomainConfigurationRequest)

---

##### `describeEndpoint` <a name="aws-cdk-sdk.iot.IotClient.describeEndpoint"></a>

```typescript
public describeEndpoint(input: IotDescribeEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeEndpointRequest`](#aws-cdk-sdk.iot.IotDescribeEndpointRequest)

---

##### `describeEventConfigurations` <a name="aws-cdk-sdk.iot.IotClient.describeEventConfigurations"></a>

```typescript
public describeEventConfigurations()
```

##### `describeIndex` <a name="aws-cdk-sdk.iot.IotClient.describeIndex"></a>

```typescript
public describeIndex(input: IotDescribeIndexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeIndexRequest`](#aws-cdk-sdk.iot.IotDescribeIndexRequest)

---

##### `describeJob` <a name="aws-cdk-sdk.iot.IotClient.describeJob"></a>

```typescript
public describeJob(input: IotDescribeJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobRequest`](#aws-cdk-sdk.iot.IotDescribeJobRequest)

---

##### `describeJobExecution` <a name="aws-cdk-sdk.iot.IotClient.describeJobExecution"></a>

```typescript
public describeJobExecution(input: IotDescribeJobExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobExecutionRequest`](#aws-cdk-sdk.iot.IotDescribeJobExecutionRequest)

---

##### `describeMitigationAction` <a name="aws-cdk-sdk.iot.IotClient.describeMitigationAction"></a>

```typescript
public describeMitigationAction(input: IotDescribeMitigationActionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeMitigationActionRequest`](#aws-cdk-sdk.iot.IotDescribeMitigationActionRequest)

---

##### `describeProvisioningTemplate` <a name="aws-cdk-sdk.iot.IotClient.describeProvisioningTemplate"></a>

```typescript
public describeProvisioningTemplate(input: IotDescribeProvisioningTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeProvisioningTemplateRequest`](#aws-cdk-sdk.iot.IotDescribeProvisioningTemplateRequest)

---

##### `describeProvisioningTemplateVersion` <a name="aws-cdk-sdk.iot.IotClient.describeProvisioningTemplateVersion"></a>

```typescript
public describeProvisioningTemplateVersion(input: IotDescribeProvisioningTemplateVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionRequest`](#aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionRequest)

---

##### `describeRoleAlias` <a name="aws-cdk-sdk.iot.IotClient.describeRoleAlias"></a>

```typescript
public describeRoleAlias(input: IotDescribeRoleAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeRoleAliasRequest`](#aws-cdk-sdk.iot.IotDescribeRoleAliasRequest)

---

##### `describeScheduledAudit` <a name="aws-cdk-sdk.iot.IotClient.describeScheduledAudit"></a>

```typescript
public describeScheduledAudit(input: IotDescribeScheduledAuditRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeScheduledAuditRequest`](#aws-cdk-sdk.iot.IotDescribeScheduledAuditRequest)

---

##### `describeSecurityProfile` <a name="aws-cdk-sdk.iot.IotClient.describeSecurityProfile"></a>

```typescript
public describeSecurityProfile(input: IotDescribeSecurityProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeSecurityProfileRequest`](#aws-cdk-sdk.iot.IotDescribeSecurityProfileRequest)

---

##### `describeStream` <a name="aws-cdk-sdk.iot.IotClient.describeStream"></a>

```typescript
public describeStream(input: IotDescribeStreamRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeStreamRequest`](#aws-cdk-sdk.iot.IotDescribeStreamRequest)

---

##### `describeThing` <a name="aws-cdk-sdk.iot.IotClient.describeThing"></a>

```typescript
public describeThing(input: IotDescribeThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingRequest`](#aws-cdk-sdk.iot.IotDescribeThingRequest)

---

##### `describeThingGroup` <a name="aws-cdk-sdk.iot.IotClient.describeThingGroup"></a>

```typescript
public describeThingGroup(input: IotDescribeThingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingGroupRequest`](#aws-cdk-sdk.iot.IotDescribeThingGroupRequest)

---

##### `describeThingRegistrationTask` <a name="aws-cdk-sdk.iot.IotClient.describeThingRegistrationTask"></a>

```typescript
public describeThingRegistrationTask(input: IotDescribeThingRegistrationTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskRequest`](#aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskRequest)

---

##### `describeThingType` <a name="aws-cdk-sdk.iot.IotClient.describeThingType"></a>

```typescript
public describeThingType(input: IotDescribeThingTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingTypeRequest`](#aws-cdk-sdk.iot.IotDescribeThingTypeRequest)

---

##### `detachPolicy` <a name="aws-cdk-sdk.iot.IotClient.detachPolicy"></a>

```typescript
public detachPolicy(input: IotDetachPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDetachPolicyRequest`](#aws-cdk-sdk.iot.IotDetachPolicyRequest)

---

##### `detachPrincipalPolicy` <a name="aws-cdk-sdk.iot.IotClient.detachPrincipalPolicy"></a>

```typescript
public detachPrincipalPolicy(input: IotDetachPrincipalPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDetachPrincipalPolicyRequest`](#aws-cdk-sdk.iot.IotDetachPrincipalPolicyRequest)

---

##### `detachSecurityProfile` <a name="aws-cdk-sdk.iot.IotClient.detachSecurityProfile"></a>

```typescript
public detachSecurityProfile(input: IotDetachSecurityProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDetachSecurityProfileRequest`](#aws-cdk-sdk.iot.IotDetachSecurityProfileRequest)

---

##### `detachThingPrincipal` <a name="aws-cdk-sdk.iot.IotClient.detachThingPrincipal"></a>

```typescript
public detachThingPrincipal(input: IotDetachThingPrincipalRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDetachThingPrincipalRequest`](#aws-cdk-sdk.iot.IotDetachThingPrincipalRequest)

---

##### `disableTopicRule` <a name="aws-cdk-sdk.iot.IotClient.disableTopicRule"></a>

```typescript
public disableTopicRule(input: IotDisableTopicRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDisableTopicRuleRequest`](#aws-cdk-sdk.iot.IotDisableTopicRuleRequest)

---

##### `enableTopicRule` <a name="aws-cdk-sdk.iot.IotClient.enableTopicRule"></a>

```typescript
public enableTopicRule(input: IotEnableTopicRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotEnableTopicRuleRequest`](#aws-cdk-sdk.iot.IotEnableTopicRuleRequest)

---

##### `fetchCardinality` <a name="aws-cdk-sdk.iot.IotClient.fetchCardinality"></a>

```typescript
public fetchCardinality(input: IotGetCardinalityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetCardinalityRequest`](#aws-cdk-sdk.iot.IotGetCardinalityRequest)

---

##### `fetchEffectivePolicies` <a name="aws-cdk-sdk.iot.IotClient.fetchEffectivePolicies"></a>

```typescript
public fetchEffectivePolicies(input: IotGetEffectivePoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetEffectivePoliciesRequest`](#aws-cdk-sdk.iot.IotGetEffectivePoliciesRequest)

---

##### `fetchIndexingConfiguration` <a name="aws-cdk-sdk.iot.IotClient.fetchIndexingConfiguration"></a>

```typescript
public fetchIndexingConfiguration()
```

##### `fetchJobDocument` <a name="aws-cdk-sdk.iot.IotClient.fetchJobDocument"></a>

```typescript
public fetchJobDocument(input: IotGetJobDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetJobDocumentRequest`](#aws-cdk-sdk.iot.IotGetJobDocumentRequest)

---

##### `fetchLoggingOptions` <a name="aws-cdk-sdk.iot.IotClient.fetchLoggingOptions"></a>

```typescript
public fetchLoggingOptions()
```

##### `fetchOtaUpdate` <a name="aws-cdk-sdk.iot.IotClient.fetchOtaUpdate"></a>

```typescript
public fetchOtaUpdate(input: IotGetOtaUpdateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetOtaUpdateRequest`](#aws-cdk-sdk.iot.IotGetOtaUpdateRequest)

---

##### `fetchPercentiles` <a name="aws-cdk-sdk.iot.IotClient.fetchPercentiles"></a>

```typescript
public fetchPercentiles(input: IotGetPercentilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetPercentilesRequest`](#aws-cdk-sdk.iot.IotGetPercentilesRequest)

---

##### `fetchPolicy` <a name="aws-cdk-sdk.iot.IotClient.fetchPolicy"></a>

```typescript
public fetchPolicy(input: IotGetPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetPolicyRequest`](#aws-cdk-sdk.iot.IotGetPolicyRequest)

---

##### `fetchPolicyVersion` <a name="aws-cdk-sdk.iot.IotClient.fetchPolicyVersion"></a>

```typescript
public fetchPolicyVersion(input: IotGetPolicyVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetPolicyVersionRequest`](#aws-cdk-sdk.iot.IotGetPolicyVersionRequest)

---

##### `fetchRegistrationCode` <a name="aws-cdk-sdk.iot.IotClient.fetchRegistrationCode"></a>

```typescript
public fetchRegistrationCode()
```

##### `fetchStatistics` <a name="aws-cdk-sdk.iot.IotClient.fetchStatistics"></a>

```typescript
public fetchStatistics(input: IotGetStatisticsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetStatisticsRequest`](#aws-cdk-sdk.iot.IotGetStatisticsRequest)

---

##### `fetchTopicRule` <a name="aws-cdk-sdk.iot.IotClient.fetchTopicRule"></a>

```typescript
public fetchTopicRule(input: IotGetTopicRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---

##### `fetchTopicRuleDestination` <a name="aws-cdk-sdk.iot.IotClient.fetchTopicRuleDestination"></a>

```typescript
public fetchTopicRuleDestination(input: IotGetTopicRuleDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleDestinationRequest)

---

##### `fetchV2LoggingOptions` <a name="aws-cdk-sdk.iot.IotClient.fetchV2LoggingOptions"></a>

```typescript
public fetchV2LoggingOptions()
```

##### `listActiveViolations` <a name="aws-cdk-sdk.iot.IotClient.listActiveViolations"></a>

```typescript
public listActiveViolations(input: IotListActiveViolationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListActiveViolationsRequest`](#aws-cdk-sdk.iot.IotListActiveViolationsRequest)

---

##### `listAttachedPolicies` <a name="aws-cdk-sdk.iot.IotClient.listAttachedPolicies"></a>

```typescript
public listAttachedPolicies(input: IotListAttachedPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAttachedPoliciesRequest`](#aws-cdk-sdk.iot.IotListAttachedPoliciesRequest)

---

##### `listAuditFindings` <a name="aws-cdk-sdk.iot.IotClient.listAuditFindings"></a>

```typescript
public listAuditFindings(input: IotListAuditFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuditFindingsRequest`](#aws-cdk-sdk.iot.IotListAuditFindingsRequest)

---

##### `listAuditMitigationActionsExecutions` <a name="aws-cdk-sdk.iot.IotClient.listAuditMitigationActionsExecutions"></a>

```typescript
public listAuditMitigationActionsExecutions(input: IotListAuditMitigationActionsExecutionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsRequest`](#aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsRequest)

---

##### `listAuditMitigationActionsTasks` <a name="aws-cdk-sdk.iot.IotClient.listAuditMitigationActionsTasks"></a>

```typescript
public listAuditMitigationActionsTasks(input: IotListAuditMitigationActionsTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest`](#aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest)

---

##### `listAuditSuppressions` <a name="aws-cdk-sdk.iot.IotClient.listAuditSuppressions"></a>

```typescript
public listAuditSuppressions(input: IotListAuditSuppressionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuditSuppressionsRequest`](#aws-cdk-sdk.iot.IotListAuditSuppressionsRequest)

---

##### `listAuditTasks` <a name="aws-cdk-sdk.iot.IotClient.listAuditTasks"></a>

```typescript
public listAuditTasks(input: IotListAuditTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuditTasksRequest`](#aws-cdk-sdk.iot.IotListAuditTasksRequest)

---

##### `listAuthorizers` <a name="aws-cdk-sdk.iot.IotClient.listAuthorizers"></a>

```typescript
public listAuthorizers(input: IotListAuthorizersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuthorizersRequest`](#aws-cdk-sdk.iot.IotListAuthorizersRequest)

---

##### `listBillingGroups` <a name="aws-cdk-sdk.iot.IotClient.listBillingGroups"></a>

```typescript
public listBillingGroups(input: IotListBillingGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListBillingGroupsRequest`](#aws-cdk-sdk.iot.IotListBillingGroupsRequest)

---

##### `listCaCertificates` <a name="aws-cdk-sdk.iot.IotClient.listCaCertificates"></a>

```typescript
public listCaCertificates(input: IotListCaCertificatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListCaCertificatesRequest`](#aws-cdk-sdk.iot.IotListCaCertificatesRequest)

---

##### `listCertificates` <a name="aws-cdk-sdk.iot.IotClient.listCertificates"></a>

```typescript
public listCertificates(input: IotListCertificatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListCertificatesRequest`](#aws-cdk-sdk.iot.IotListCertificatesRequest)

---

##### `listCertificatesByCa` <a name="aws-cdk-sdk.iot.IotClient.listCertificatesByCa"></a>

```typescript
public listCertificatesByCa(input: IotListCertificatesByCaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListCertificatesByCaRequest`](#aws-cdk-sdk.iot.IotListCertificatesByCaRequest)

---

##### `listDimensions` <a name="aws-cdk-sdk.iot.IotClient.listDimensions"></a>

```typescript
public listDimensions(input: IotListDimensionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListDimensionsRequest`](#aws-cdk-sdk.iot.IotListDimensionsRequest)

---

##### `listDomainConfigurations` <a name="aws-cdk-sdk.iot.IotClient.listDomainConfigurations"></a>

```typescript
public listDomainConfigurations(input: IotListDomainConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListDomainConfigurationsRequest`](#aws-cdk-sdk.iot.IotListDomainConfigurationsRequest)

---

##### `listIndices` <a name="aws-cdk-sdk.iot.IotClient.listIndices"></a>

```typescript
public listIndices(input: IotListIndicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListIndicesRequest`](#aws-cdk-sdk.iot.IotListIndicesRequest)

---

##### `listJobExecutionsForJob` <a name="aws-cdk-sdk.iot.IotClient.listJobExecutionsForJob"></a>

```typescript
public listJobExecutionsForJob(input: IotListJobExecutionsForJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListJobExecutionsForJobRequest`](#aws-cdk-sdk.iot.IotListJobExecutionsForJobRequest)

---

##### `listJobExecutionsForThing` <a name="aws-cdk-sdk.iot.IotClient.listJobExecutionsForThing"></a>

```typescript
public listJobExecutionsForThing(input: IotListJobExecutionsForThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListJobExecutionsForThingRequest`](#aws-cdk-sdk.iot.IotListJobExecutionsForThingRequest)

---

##### `listJobs` <a name="aws-cdk-sdk.iot.IotClient.listJobs"></a>

```typescript
public listJobs(input: IotListJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListJobsRequest`](#aws-cdk-sdk.iot.IotListJobsRequest)

---

##### `listMitigationActions` <a name="aws-cdk-sdk.iot.IotClient.listMitigationActions"></a>

```typescript
public listMitigationActions(input: IotListMitigationActionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListMitigationActionsRequest`](#aws-cdk-sdk.iot.IotListMitigationActionsRequest)

---

##### `listOtaUpdates` <a name="aws-cdk-sdk.iot.IotClient.listOtaUpdates"></a>

```typescript
public listOtaUpdates(input: IotListOtaUpdatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListOtaUpdatesRequest`](#aws-cdk-sdk.iot.IotListOtaUpdatesRequest)

---

##### `listOutgoingCertificates` <a name="aws-cdk-sdk.iot.IotClient.listOutgoingCertificates"></a>

```typescript
public listOutgoingCertificates(input: IotListOutgoingCertificatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListOutgoingCertificatesRequest`](#aws-cdk-sdk.iot.IotListOutgoingCertificatesRequest)

---

##### `listPolicies` <a name="aws-cdk-sdk.iot.IotClient.listPolicies"></a>

```typescript
public listPolicies(input: IotListPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListPoliciesRequest`](#aws-cdk-sdk.iot.IotListPoliciesRequest)

---

##### `listPolicyPrincipals` <a name="aws-cdk-sdk.iot.IotClient.listPolicyPrincipals"></a>

```typescript
public listPolicyPrincipals(input: IotListPolicyPrincipalsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListPolicyPrincipalsRequest`](#aws-cdk-sdk.iot.IotListPolicyPrincipalsRequest)

---

##### `listPolicyVersions` <a name="aws-cdk-sdk.iot.IotClient.listPolicyVersions"></a>

```typescript
public listPolicyVersions(input: IotListPolicyVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListPolicyVersionsRequest`](#aws-cdk-sdk.iot.IotListPolicyVersionsRequest)

---

##### `listPrincipalPolicies` <a name="aws-cdk-sdk.iot.IotClient.listPrincipalPolicies"></a>

```typescript
public listPrincipalPolicies(input: IotListPrincipalPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListPrincipalPoliciesRequest`](#aws-cdk-sdk.iot.IotListPrincipalPoliciesRequest)

---

##### `listPrincipalThings` <a name="aws-cdk-sdk.iot.IotClient.listPrincipalThings"></a>

```typescript
public listPrincipalThings(input: IotListPrincipalThingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListPrincipalThingsRequest`](#aws-cdk-sdk.iot.IotListPrincipalThingsRequest)

---

##### `listProvisioningTemplates` <a name="aws-cdk-sdk.iot.IotClient.listProvisioningTemplates"></a>

```typescript
public listProvisioningTemplates(input: IotListProvisioningTemplatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListProvisioningTemplatesRequest`](#aws-cdk-sdk.iot.IotListProvisioningTemplatesRequest)

---

##### `listProvisioningTemplateVersions` <a name="aws-cdk-sdk.iot.IotClient.listProvisioningTemplateVersions"></a>

```typescript
public listProvisioningTemplateVersions(input: IotListProvisioningTemplateVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsRequest`](#aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsRequest)

---

##### `listRoleAliases` <a name="aws-cdk-sdk.iot.IotClient.listRoleAliases"></a>

```typescript
public listRoleAliases(input: IotListRoleAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListRoleAliasesRequest`](#aws-cdk-sdk.iot.IotListRoleAliasesRequest)

---

##### `listScheduledAudits` <a name="aws-cdk-sdk.iot.IotClient.listScheduledAudits"></a>

```typescript
public listScheduledAudits(input: IotListScheduledAuditsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListScheduledAuditsRequest`](#aws-cdk-sdk.iot.IotListScheduledAuditsRequest)

---

##### `listSecurityProfiles` <a name="aws-cdk-sdk.iot.IotClient.listSecurityProfiles"></a>

```typescript
public listSecurityProfiles(input: IotListSecurityProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListSecurityProfilesRequest`](#aws-cdk-sdk.iot.IotListSecurityProfilesRequest)

---

##### `listSecurityProfilesForTarget` <a name="aws-cdk-sdk.iot.IotClient.listSecurityProfilesForTarget"></a>

```typescript
public listSecurityProfilesForTarget(input: IotListSecurityProfilesForTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListSecurityProfilesForTargetRequest`](#aws-cdk-sdk.iot.IotListSecurityProfilesForTargetRequest)

---

##### `listStreams` <a name="aws-cdk-sdk.iot.IotClient.listStreams"></a>

```typescript
public listStreams(input: IotListStreamsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListStreamsRequest`](#aws-cdk-sdk.iot.IotListStreamsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.iot.IotClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: IotListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListTagsForResourceRequest`](#aws-cdk-sdk.iot.IotListTagsForResourceRequest)

---

##### `listTargetsForPolicy` <a name="aws-cdk-sdk.iot.IotClient.listTargetsForPolicy"></a>

```typescript
public listTargetsForPolicy(input: IotListTargetsForPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListTargetsForPolicyRequest`](#aws-cdk-sdk.iot.IotListTargetsForPolicyRequest)

---

##### `listTargetsForSecurityProfile` <a name="aws-cdk-sdk.iot.IotClient.listTargetsForSecurityProfile"></a>

```typescript
public listTargetsForSecurityProfile(input: IotListTargetsForSecurityProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListTargetsForSecurityProfileRequest`](#aws-cdk-sdk.iot.IotListTargetsForSecurityProfileRequest)

---

##### `listThingGroups` <a name="aws-cdk-sdk.iot.IotClient.listThingGroups"></a>

```typescript
public listThingGroups(input: IotListThingGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingGroupsRequest`](#aws-cdk-sdk.iot.IotListThingGroupsRequest)

---

##### `listThingGroupsForThing` <a name="aws-cdk-sdk.iot.IotClient.listThingGroupsForThing"></a>

```typescript
public listThingGroupsForThing(input: IotListThingGroupsForThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingGroupsForThingRequest`](#aws-cdk-sdk.iot.IotListThingGroupsForThingRequest)

---

##### `listThingPrincipals` <a name="aws-cdk-sdk.iot.IotClient.listThingPrincipals"></a>

```typescript
public listThingPrincipals(input: IotListThingPrincipalsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingPrincipalsRequest`](#aws-cdk-sdk.iot.IotListThingPrincipalsRequest)

---

##### `listThingRegistrationTaskReports` <a name="aws-cdk-sdk.iot.IotClient.listThingRegistrationTaskReports"></a>

```typescript
public listThingRegistrationTaskReports(input: IotListThingRegistrationTaskReportsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsRequest`](#aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsRequest)

---

##### `listThingRegistrationTasks` <a name="aws-cdk-sdk.iot.IotClient.listThingRegistrationTasks"></a>

```typescript
public listThingRegistrationTasks(input: IotListThingRegistrationTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingRegistrationTasksRequest`](#aws-cdk-sdk.iot.IotListThingRegistrationTasksRequest)

---

##### `listThings` <a name="aws-cdk-sdk.iot.IotClient.listThings"></a>

```typescript
public listThings(input: IotListThingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingsRequest`](#aws-cdk-sdk.iot.IotListThingsRequest)

---

##### `listThingsInBillingGroup` <a name="aws-cdk-sdk.iot.IotClient.listThingsInBillingGroup"></a>

```typescript
public listThingsInBillingGroup(input: IotListThingsInBillingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingsInBillingGroupRequest`](#aws-cdk-sdk.iot.IotListThingsInBillingGroupRequest)

---

##### `listThingsInThingGroup` <a name="aws-cdk-sdk.iot.IotClient.listThingsInThingGroup"></a>

```typescript
public listThingsInThingGroup(input: IotListThingsInThingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingsInThingGroupRequest`](#aws-cdk-sdk.iot.IotListThingsInThingGroupRequest)

---

##### `listThingTypes` <a name="aws-cdk-sdk.iot.IotClient.listThingTypes"></a>

```typescript
public listThingTypes(input: IotListThingTypesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingTypesRequest`](#aws-cdk-sdk.iot.IotListThingTypesRequest)

---

##### `listTopicRuleDestinations` <a name="aws-cdk-sdk.iot.IotClient.listTopicRuleDestinations"></a>

```typescript
public listTopicRuleDestinations(input: IotListTopicRuleDestinationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListTopicRuleDestinationsRequest`](#aws-cdk-sdk.iot.IotListTopicRuleDestinationsRequest)

---

##### `listTopicRules` <a name="aws-cdk-sdk.iot.IotClient.listTopicRules"></a>

```typescript
public listTopicRules(input: IotListTopicRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListTopicRulesRequest`](#aws-cdk-sdk.iot.IotListTopicRulesRequest)

---

##### `listV2LoggingLevels` <a name="aws-cdk-sdk.iot.IotClient.listV2LoggingLevels"></a>

```typescript
public listV2LoggingLevels(input: IotListV2LoggingLevelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListV2LoggingLevelsRequest`](#aws-cdk-sdk.iot.IotListV2LoggingLevelsRequest)

---

##### `listViolationEvents` <a name="aws-cdk-sdk.iot.IotClient.listViolationEvents"></a>

```typescript
public listViolationEvents(input: IotListViolationEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListViolationEventsRequest`](#aws-cdk-sdk.iot.IotListViolationEventsRequest)

---

##### `putDefaultAuthorizer` <a name="aws-cdk-sdk.iot.IotClient.putDefaultAuthorizer"></a>

```typescript
public putDefaultAuthorizer(input: IotSetDefaultAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSetDefaultAuthorizerRequest`](#aws-cdk-sdk.iot.IotSetDefaultAuthorizerRequest)

---

##### `putDefaultPolicyVersion` <a name="aws-cdk-sdk.iot.IotClient.putDefaultPolicyVersion"></a>

```typescript
public putDefaultPolicyVersion(input: IotSetDefaultPolicyVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSetDefaultPolicyVersionRequest`](#aws-cdk-sdk.iot.IotSetDefaultPolicyVersionRequest)

---

##### `putLoggingOptions` <a name="aws-cdk-sdk.iot.IotClient.putLoggingOptions"></a>

```typescript
public putLoggingOptions(input: IotSetLoggingOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSetLoggingOptionsRequest`](#aws-cdk-sdk.iot.IotSetLoggingOptionsRequest)

---

##### `putV2LoggingLevel` <a name="aws-cdk-sdk.iot.IotClient.putV2LoggingLevel"></a>

```typescript
public putV2LoggingLevel(input: IotSetV2LoggingLevelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSetV2LoggingLevelRequest`](#aws-cdk-sdk.iot.IotSetV2LoggingLevelRequest)

---

##### `putV2LoggingOptions` <a name="aws-cdk-sdk.iot.IotClient.putV2LoggingOptions"></a>

```typescript
public putV2LoggingOptions(input: IotSetV2LoggingOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSetV2LoggingOptionsRequest`](#aws-cdk-sdk.iot.IotSetV2LoggingOptionsRequest)

---

##### `registerCaCertificate` <a name="aws-cdk-sdk.iot.IotClient.registerCaCertificate"></a>

```typescript
public registerCaCertificate(input: IotRegisterCaCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegisterCaCertificateRequest`](#aws-cdk-sdk.iot.IotRegisterCaCertificateRequest)

---

##### `registerCertificate` <a name="aws-cdk-sdk.iot.IotClient.registerCertificate"></a>

```typescript
public registerCertificate(input: IotRegisterCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegisterCertificateRequest`](#aws-cdk-sdk.iot.IotRegisterCertificateRequest)

---

##### `registerCertificateWithoutCa` <a name="aws-cdk-sdk.iot.IotClient.registerCertificateWithoutCa"></a>

```typescript
public registerCertificateWithoutCa(input: IotRegisterCertificateWithoutCaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegisterCertificateWithoutCaRequest`](#aws-cdk-sdk.iot.IotRegisterCertificateWithoutCaRequest)

---

##### `registerThing` <a name="aws-cdk-sdk.iot.IotClient.registerThing"></a>

```typescript
public registerThing(input: IotRegisterThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegisterThingRequest`](#aws-cdk-sdk.iot.IotRegisterThingRequest)

---

##### `rejectCertificateTransfer` <a name="aws-cdk-sdk.iot.IotClient.rejectCertificateTransfer"></a>

```typescript
public rejectCertificateTransfer(input: IotRejectCertificateTransferRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRejectCertificateTransferRequest`](#aws-cdk-sdk.iot.IotRejectCertificateTransferRequest)

---

##### `removeThingFromBillingGroup` <a name="aws-cdk-sdk.iot.IotClient.removeThingFromBillingGroup"></a>

```typescript
public removeThingFromBillingGroup(input: IotRemoveThingFromBillingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRemoveThingFromBillingGroupRequest`](#aws-cdk-sdk.iot.IotRemoveThingFromBillingGroupRequest)

---

##### `removeThingFromThingGroup` <a name="aws-cdk-sdk.iot.IotClient.removeThingFromThingGroup"></a>

```typescript
public removeThingFromThingGroup(input: IotRemoveThingFromThingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRemoveThingFromThingGroupRequest`](#aws-cdk-sdk.iot.IotRemoveThingFromThingGroupRequest)

---

##### `replaceTopicRule` <a name="aws-cdk-sdk.iot.IotClient.replaceTopicRule"></a>

```typescript
public replaceTopicRule(input: IotReplaceTopicRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotReplaceTopicRuleRequest`](#aws-cdk-sdk.iot.IotReplaceTopicRuleRequest)

---

##### `searchIndex` <a name="aws-cdk-sdk.iot.IotClient.searchIndex"></a>

```typescript
public searchIndex(input: IotSearchIndexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSearchIndexRequest`](#aws-cdk-sdk.iot.IotSearchIndexRequest)

---

##### `startAuditMitigationActionsTask` <a name="aws-cdk-sdk.iot.IotClient.startAuditMitigationActionsTask"></a>

```typescript
public startAuditMitigationActionsTask(input: IotStartAuditMitigationActionsTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskRequest`](#aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskRequest)

---

##### `startOnDemandAuditTask` <a name="aws-cdk-sdk.iot.IotClient.startOnDemandAuditTask"></a>

```typescript
public startOnDemandAuditTask(input: IotStartOnDemandAuditTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStartOnDemandAuditTaskRequest`](#aws-cdk-sdk.iot.IotStartOnDemandAuditTaskRequest)

---

##### `startThingRegistrationTask` <a name="aws-cdk-sdk.iot.IotClient.startThingRegistrationTask"></a>

```typescript
public startThingRegistrationTask(input: IotStartThingRegistrationTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStartThingRegistrationTaskRequest`](#aws-cdk-sdk.iot.IotStartThingRegistrationTaskRequest)

---

##### `stopThingRegistrationTask` <a name="aws-cdk-sdk.iot.IotClient.stopThingRegistrationTask"></a>

```typescript
public stopThingRegistrationTask(input: IotStopThingRegistrationTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStopThingRegistrationTaskRequest`](#aws-cdk-sdk.iot.IotStopThingRegistrationTaskRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.iot.IotClient.tagResource"></a>

```typescript
public tagResource(input: IotTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTagResourceRequest`](#aws-cdk-sdk.iot.IotTagResourceRequest)

---

##### `testAuthorization` <a name="aws-cdk-sdk.iot.IotClient.testAuthorization"></a>

```typescript
public testAuthorization(input: IotTestAuthorizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTestAuthorizationRequest`](#aws-cdk-sdk.iot.IotTestAuthorizationRequest)

---

##### `testInvokeAuthorizer` <a name="aws-cdk-sdk.iot.IotClient.testInvokeAuthorizer"></a>

```typescript
public testInvokeAuthorizer(input: IotTestInvokeAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest`](#aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest)

---

##### `transferCertificate` <a name="aws-cdk-sdk.iot.IotClient.transferCertificate"></a>

```typescript
public transferCertificate(input: IotTransferCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTransferCertificateRequest`](#aws-cdk-sdk.iot.IotTransferCertificateRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.iot.IotClient.untagResource"></a>

```typescript
public untagResource(input: IotUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUntagResourceRequest`](#aws-cdk-sdk.iot.IotUntagResourceRequest)

---

##### `updateAccountAuditConfiguration` <a name="aws-cdk-sdk.iot.IotClient.updateAccountAuditConfiguration"></a>

```typescript
public updateAccountAuditConfiguration(input: IotUpdateAccountAuditConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateAccountAuditConfigurationRequest`](#aws-cdk-sdk.iot.IotUpdateAccountAuditConfigurationRequest)

---

##### `updateAuditSuppression` <a name="aws-cdk-sdk.iot.IotClient.updateAuditSuppression"></a>

```typescript
public updateAuditSuppression(input: IotUpdateAuditSuppressionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateAuditSuppressionRequest`](#aws-cdk-sdk.iot.IotUpdateAuditSuppressionRequest)

---

##### `updateAuthorizer` <a name="aws-cdk-sdk.iot.IotClient.updateAuthorizer"></a>

```typescript
public updateAuthorizer(input: IotUpdateAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateAuthorizerRequest`](#aws-cdk-sdk.iot.IotUpdateAuthorizerRequest)

---

##### `updateBillingGroup` <a name="aws-cdk-sdk.iot.IotClient.updateBillingGroup"></a>

```typescript
public updateBillingGroup(input: IotUpdateBillingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateBillingGroupRequest`](#aws-cdk-sdk.iot.IotUpdateBillingGroupRequest)

---

##### `updateCaCertificate` <a name="aws-cdk-sdk.iot.IotClient.updateCaCertificate"></a>

```typescript
public updateCaCertificate(input: IotUpdateCaCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateCaCertificateRequest`](#aws-cdk-sdk.iot.IotUpdateCaCertificateRequest)

---

##### `updateCertificate` <a name="aws-cdk-sdk.iot.IotClient.updateCertificate"></a>

```typescript
public updateCertificate(input: IotUpdateCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateCertificateRequest`](#aws-cdk-sdk.iot.IotUpdateCertificateRequest)

---

##### `updateDimension` <a name="aws-cdk-sdk.iot.IotClient.updateDimension"></a>

```typescript
public updateDimension(input: IotUpdateDimensionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateDimensionRequest`](#aws-cdk-sdk.iot.IotUpdateDimensionRequest)

---

##### `updateDomainConfiguration` <a name="aws-cdk-sdk.iot.IotClient.updateDomainConfiguration"></a>

```typescript
public updateDomainConfiguration(input: IotUpdateDomainConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateDomainConfigurationRequest`](#aws-cdk-sdk.iot.IotUpdateDomainConfigurationRequest)

---

##### `updateDynamicThingGroup` <a name="aws-cdk-sdk.iot.IotClient.updateDynamicThingGroup"></a>

```typescript
public updateDynamicThingGroup(input: IotUpdateDynamicThingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest`](#aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest)

---

##### `updateEventConfigurations` <a name="aws-cdk-sdk.iot.IotClient.updateEventConfigurations"></a>

```typescript
public updateEventConfigurations(input: IotUpdateEventConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateEventConfigurationsRequest`](#aws-cdk-sdk.iot.IotUpdateEventConfigurationsRequest)

---

##### `updateIndexingConfiguration` <a name="aws-cdk-sdk.iot.IotClient.updateIndexingConfiguration"></a>

```typescript
public updateIndexingConfiguration(input: IotUpdateIndexingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateIndexingConfigurationRequest`](#aws-cdk-sdk.iot.IotUpdateIndexingConfigurationRequest)

---

##### `updateJob` <a name="aws-cdk-sdk.iot.IotClient.updateJob"></a>

```typescript
public updateJob(input: IotUpdateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateJobRequest`](#aws-cdk-sdk.iot.IotUpdateJobRequest)

---

##### `updateMitigationAction` <a name="aws-cdk-sdk.iot.IotClient.updateMitigationAction"></a>

```typescript
public updateMitigationAction(input: IotUpdateMitigationActionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateMitigationActionRequest`](#aws-cdk-sdk.iot.IotUpdateMitigationActionRequest)

---

##### `updateProvisioningTemplate` <a name="aws-cdk-sdk.iot.IotClient.updateProvisioningTemplate"></a>

```typescript
public updateProvisioningTemplate(input: IotUpdateProvisioningTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateProvisioningTemplateRequest`](#aws-cdk-sdk.iot.IotUpdateProvisioningTemplateRequest)

---

##### `updateRoleAlias` <a name="aws-cdk-sdk.iot.IotClient.updateRoleAlias"></a>

```typescript
public updateRoleAlias(input: IotUpdateRoleAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateRoleAliasRequest`](#aws-cdk-sdk.iot.IotUpdateRoleAliasRequest)

---

##### `updateScheduledAudit` <a name="aws-cdk-sdk.iot.IotClient.updateScheduledAudit"></a>

```typescript
public updateScheduledAudit(input: IotUpdateScheduledAuditRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateScheduledAuditRequest`](#aws-cdk-sdk.iot.IotUpdateScheduledAuditRequest)

---

##### `updateSecurityProfile` <a name="aws-cdk-sdk.iot.IotClient.updateSecurityProfile"></a>

```typescript
public updateSecurityProfile(input: IotUpdateSecurityProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest`](#aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest)

---

##### `updateStream` <a name="aws-cdk-sdk.iot.IotClient.updateStream"></a>

```typescript
public updateStream(input: IotUpdateStreamRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateStreamRequest`](#aws-cdk-sdk.iot.IotUpdateStreamRequest)

---

##### `updateThing` <a name="aws-cdk-sdk.iot.IotClient.updateThing"></a>

```typescript
public updateThing(input: IotUpdateThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateThingRequest`](#aws-cdk-sdk.iot.IotUpdateThingRequest)

---

##### `updateThingGroup` <a name="aws-cdk-sdk.iot.IotClient.updateThingGroup"></a>

```typescript
public updateThingGroup(input: IotUpdateThingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateThingGroupRequest`](#aws-cdk-sdk.iot.IotUpdateThingGroupRequest)

---

##### `updateThingGroupsForThing` <a name="aws-cdk-sdk.iot.IotClient.updateThingGroupsForThing"></a>

```typescript
public updateThingGroupsForThing(input: IotUpdateThingGroupsForThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateThingGroupsForThingRequest`](#aws-cdk-sdk.iot.IotUpdateThingGroupsForThingRequest)

---

##### `updateTopicRuleDestination` <a name="aws-cdk-sdk.iot.IotClient.updateTopicRuleDestination"></a>

```typescript
public updateTopicRuleDestination(input: IotUpdateTopicRuleDestinationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotUpdateTopicRuleDestinationRequest)

---

##### `validateSecurityProfileBehaviors` <a name="aws-cdk-sdk.iot.IotClient.validateSecurityProfileBehaviors"></a>

```typescript
public validateSecurityProfileBehaviors(input: IotValidateSecurityProfileBehaviorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotValidateSecurityProfileBehaviorsRequest`](#aws-cdk-sdk.iot.IotValidateSecurityProfileBehaviorsRequest)

---




## Structs <a name="Structs"></a>

### IotAbortConfig <a name="aws-cdk-sdk.iot.IotAbortConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAbortConfig: iot.IotAbortConfig = { ... }
```

##### `criteriaList`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAbortConfig.property.criteriaList"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAbortCriteria`](#aws-cdk-sdk.iot.IotAbortCriteria)[]

---

### IotAbortCriteria <a name="aws-cdk-sdk.iot.IotAbortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAbortCriteria: iot.IotAbortCriteria = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAbortCriteria.property.action"></a>

- *Type:* `string`

---

##### `failureType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAbortCriteria.property.failureType"></a>

- *Type:* `string`

---

##### `minNumberOfExecutedThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAbortCriteria.property.minNumberOfExecutedThings"></a>

- *Type:* `number`

---

##### `thresholdPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAbortCriteria.property.thresholdPercentage"></a>

- *Type:* `number`

---

### IotAcceptCertificateTransferRequest <a name="aws-cdk-sdk.iot.IotAcceptCertificateTransferRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAcceptCertificateTransferRequest: iot.IotAcceptCertificateTransferRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAcceptCertificateTransferRequest.property.certificateId"></a>

- *Type:* `string`

---

##### `setAsActive`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAcceptCertificateTransferRequest.property.setAsActive"></a>

- *Type:* `boolean`

---

### IotAction <a name="aws-cdk-sdk.iot.IotAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAction: iot.IotAction = { ... }
```

##### `cloudwatchAlarm`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.cloudwatchAlarm"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCloudwatchAlarmAction`](#aws-cdk-sdk.iot.IotCloudwatchAlarmAction)

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.cloudwatchLogs"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCloudwatchLogsAction`](#aws-cdk-sdk.iot.IotCloudwatchLogsAction)

---

##### `cloudwatchMetric`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.cloudwatchMetric"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCloudwatchMetricAction`](#aws-cdk-sdk.iot.IotCloudwatchMetricAction)

---

##### `dynamoDB`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.dynamoDB"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDynamoDbAction`](#aws-cdk-sdk.iot.IotDynamoDbAction)

---

##### `dynamoDBv2`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.dynamoDBv2"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDynamoDBv2Action`](#aws-cdk-sdk.iot.IotDynamoDBv2Action)

---

##### `elasticsearch`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.elasticsearch"></a>

- *Type:* [`aws-cdk-sdk.iot.IotElasticsearchAction`](#aws-cdk-sdk.iot.IotElasticsearchAction)

---

##### `firehose`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.firehose"></a>

- *Type:* [`aws-cdk-sdk.iot.IotFirehoseAction`](#aws-cdk-sdk.iot.IotFirehoseAction)

---

##### `http`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.http"></a>

- *Type:* [`aws-cdk-sdk.iot.IotHttpAction`](#aws-cdk-sdk.iot.IotHttpAction)

---

##### `iotAnalytics`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.iotAnalytics"></a>

- *Type:* [`aws-cdk-sdk.iot.IotIotAnalyticsAction`](#aws-cdk-sdk.iot.IotIotAnalyticsAction)

---

##### `iotEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.iotEvents"></a>

- *Type:* [`aws-cdk-sdk.iot.IotIotEventsAction`](#aws-cdk-sdk.iot.IotIotEventsAction)

---

##### `iotSiteWise`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.iotSiteWise"></a>

- *Type:* [`aws-cdk-sdk.iot.IotIotSiteWiseAction`](#aws-cdk-sdk.iot.IotIotSiteWiseAction)

---

##### `kinesis`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.kinesis"></a>

- *Type:* [`aws-cdk-sdk.iot.IotKinesisAction`](#aws-cdk-sdk.iot.IotKinesisAction)

---

##### `lambda`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.lambda"></a>

- *Type:* [`aws-cdk-sdk.iot.IotLambdaAction`](#aws-cdk-sdk.iot.IotLambdaAction)

---

##### `republish`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.republish"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRepublishAction`](#aws-cdk-sdk.iot.IotRepublishAction)

---

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.s3"></a>

- *Type:* [`aws-cdk-sdk.iot.IotS3Action`](#aws-cdk-sdk.iot.IotS3Action)

---

##### `salesforce`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.salesforce"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSalesforceAction`](#aws-cdk-sdk.iot.IotSalesforceAction)

---

##### `sns`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.sns"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSnsAction`](#aws-cdk-sdk.iot.IotSnsAction)

---

##### `sqs`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.sqs"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSqsAction`](#aws-cdk-sdk.iot.IotSqsAction)

---

##### `stepFunctions`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.stepFunctions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStepFunctionsAction`](#aws-cdk-sdk.iot.IotStepFunctionsAction)

---

##### `timestream`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAction.property.timestream"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTimestreamAction`](#aws-cdk-sdk.iot.IotTimestreamAction)

---

### IotActiveViolation <a name="aws-cdk-sdk.iot.IotActiveViolation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotActiveViolation: iot.IotActiveViolation = { ... }
```

##### `behavior`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotActiveViolation.property.behavior"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBehavior`](#aws-cdk-sdk.iot.IotBehavior)

---

##### `lastViolationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotActiveViolation.property.lastViolationTime"></a>

- *Type:* `string`

---

##### `lastViolationValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotActiveViolation.property.lastViolationValue"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricValue`](#aws-cdk-sdk.iot.IotMetricValue)

---

##### `securityProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotActiveViolation.property.securityProfileName"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotActiveViolation.property.thingName"></a>

- *Type:* `string`

---

##### `violationId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotActiveViolation.property.violationId"></a>

- *Type:* `string`

---

##### `violationStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotActiveViolation.property.violationStartTime"></a>

- *Type:* `string`

---

### IotAddThingsToThingGroupParams <a name="aws-cdk-sdk.iot.IotAddThingsToThingGroupParams"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAddThingsToThingGroupParams: iot.IotAddThingsToThingGroupParams = { ... }
```

##### `thingGroupNames`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAddThingsToThingGroupParams.property.thingGroupNames"></a>

- *Type:* `string`[]

---

##### `overrideDynamicGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAddThingsToThingGroupParams.property.overrideDynamicGroups"></a>

- *Type:* `boolean`

---

### IotAddThingToBillingGroupRequest <a name="aws-cdk-sdk.iot.IotAddThingToBillingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAddThingToBillingGroupRequest: iot.IotAddThingToBillingGroupRequest = { ... }
```

##### `billingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAddThingToBillingGroupRequest.property.billingGroupArn"></a>

- *Type:* `string`

---

##### `billingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAddThingToBillingGroupRequest.property.billingGroupName"></a>

- *Type:* `string`

---

##### `thingArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAddThingToBillingGroupRequest.property.thingArn"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAddThingToBillingGroupRequest.property.thingName"></a>

- *Type:* `string`

---

### IotAddThingToBillingGroupResponse <a name="aws-cdk-sdk.iot.IotAddThingToBillingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAddThingToBillingGroupResponse: iot.IotAddThingToBillingGroupResponse = { ... }
```

### IotAddThingToThingGroupRequest <a name="aws-cdk-sdk.iot.IotAddThingToThingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAddThingToThingGroupRequest: iot.IotAddThingToThingGroupRequest = { ... }
```

##### `overrideDynamicGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAddThingToThingGroupRequest.property.overrideDynamicGroups"></a>

- *Type:* `boolean`

---

##### `thingArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAddThingToThingGroupRequest.property.thingArn"></a>

- *Type:* `string`

---

##### `thingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAddThingToThingGroupRequest.property.thingGroupArn"></a>

- *Type:* `string`

---

##### `thingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAddThingToThingGroupRequest.property.thingGroupName"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAddThingToThingGroupRequest.property.thingName"></a>

- *Type:* `string`

---

### IotAddThingToThingGroupResponse <a name="aws-cdk-sdk.iot.IotAddThingToThingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAddThingToThingGroupResponse: iot.IotAddThingToThingGroupResponse = { ... }
```

### IotAlertTarget <a name="aws-cdk-sdk.iot.IotAlertTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAlertTarget: iot.IotAlertTarget = { ... }
```

##### `alertTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAlertTarget.property.alertTargetArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAlertTarget.property.roleArn"></a>

- *Type:* `string`

---

### IotAllowed <a name="aws-cdk-sdk.iot.IotAllowed"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAllowed: iot.IotAllowed = { ... }
```

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAllowed.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicy`](#aws-cdk-sdk.iot.IotPolicy)[]

---

### IotAssetPropertyTimestamp <a name="aws-cdk-sdk.iot.IotAssetPropertyTimestamp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAssetPropertyTimestamp: iot.IotAssetPropertyTimestamp = { ... }
```

##### `timeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAssetPropertyTimestamp.property.timeInSeconds"></a>

- *Type:* `string`

---

##### `offsetInNanos`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssetPropertyTimestamp.property.offsetInNanos"></a>

- *Type:* `string`

---

### IotAssetPropertyValue <a name="aws-cdk-sdk.iot.IotAssetPropertyValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAssetPropertyValue: iot.IotAssetPropertyValue = { ... }
```

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAssetPropertyValue.property.timestamp"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAssetPropertyTimestamp`](#aws-cdk-sdk.iot.IotAssetPropertyTimestamp)

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAssetPropertyValue.property.value"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAssetPropertyVariant`](#aws-cdk-sdk.iot.IotAssetPropertyVariant)

---

##### `quality`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssetPropertyValue.property.quality"></a>

- *Type:* `string`

---

### IotAssetPropertyVariant <a name="aws-cdk-sdk.iot.IotAssetPropertyVariant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAssetPropertyVariant: iot.IotAssetPropertyVariant = { ... }
```

##### `booleanValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssetPropertyVariant.property.booleanValue"></a>

- *Type:* `string`

---

##### `doubleValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssetPropertyVariant.property.doubleValue"></a>

- *Type:* `string`

---

##### `integerValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssetPropertyVariant.property.integerValue"></a>

- *Type:* `string`

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssetPropertyVariant.property.stringValue"></a>

- *Type:* `string`

---

### IotAssociateTargetsWithJobRequest <a name="aws-cdk-sdk.iot.IotAssociateTargetsWithJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAssociateTargetsWithJobRequest: iot.IotAssociateTargetsWithJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAssociateTargetsWithJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAssociateTargetsWithJobRequest.property.targets"></a>

- *Type:* `string`[]

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssociateTargetsWithJobRequest.property.comment"></a>

- *Type:* `string`

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssociateTargetsWithJobRequest.property.namespaceId"></a>

- *Type:* `string`

---

### IotAssociateTargetsWithJobResponse <a name="aws-cdk-sdk.iot.IotAssociateTargetsWithJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAssociateTargetsWithJobResponse: iot.IotAssociateTargetsWithJobResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssociateTargetsWithJobResponse.property.description"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssociateTargetsWithJobResponse.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAssociateTargetsWithJobResponse.property.jobId"></a>

- *Type:* `string`

---

### IotAttachPolicyRequest <a name="aws-cdk-sdk.iot.IotAttachPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAttachPolicyRequest: iot.IotAttachPolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAttachPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAttachPolicyRequest.property.target"></a>

- *Type:* `string`

---

### IotAttachPrincipalPolicyRequest <a name="aws-cdk-sdk.iot.IotAttachPrincipalPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAttachPrincipalPolicyRequest: iot.IotAttachPrincipalPolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAttachPrincipalPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAttachPrincipalPolicyRequest.property.principal"></a>

- *Type:* `string`

---

### IotAttachSecurityProfileRequest <a name="aws-cdk-sdk.iot.IotAttachSecurityProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAttachSecurityProfileRequest: iot.IotAttachSecurityProfileRequest = { ... }
```

##### `securityProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAttachSecurityProfileRequest.property.securityProfileName"></a>

- *Type:* `string`

---

##### `securityProfileTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAttachSecurityProfileRequest.property.securityProfileTargetArn"></a>

- *Type:* `string`

---

### IotAttachSecurityProfileResponse <a name="aws-cdk-sdk.iot.IotAttachSecurityProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAttachSecurityProfileResponse: iot.IotAttachSecurityProfileResponse = { ... }
```

### IotAttachThingPrincipalRequest <a name="aws-cdk-sdk.iot.IotAttachThingPrincipalRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAttachThingPrincipalRequest: iot.IotAttachThingPrincipalRequest = { ... }
```

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAttachThingPrincipalRequest.property.principal"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAttachThingPrincipalRequest.property.thingName"></a>

- *Type:* `string`

---

### IotAttachThingPrincipalResponse <a name="aws-cdk-sdk.iot.IotAttachThingPrincipalResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAttachThingPrincipalResponse: iot.IotAttachThingPrincipalResponse = { ... }
```

### IotAttributePayload <a name="aws-cdk-sdk.iot.IotAttributePayload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAttributePayload: iot.IotAttributePayload = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAttributePayload.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `merge`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAttributePayload.property.merge"></a>

- *Type:* `boolean`

---

### IotAuditCheckConfiguration <a name="aws-cdk-sdk.iot.IotAuditCheckConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuditCheckConfiguration: iot.IotAuditCheckConfiguration = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditCheckConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

### IotAuditCheckDetails <a name="aws-cdk-sdk.iot.IotAuditCheckDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuditCheckDetails: iot.IotAuditCheckDetails = { ... }
```

##### `checkCompliant`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditCheckDetails.property.checkCompliant"></a>

- *Type:* `boolean`

---

##### `checkRunStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditCheckDetails.property.checkRunStatus"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditCheckDetails.property.errorCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditCheckDetails.property.message"></a>

- *Type:* `string`

---

##### `nonCompliantResourcesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditCheckDetails.property.nonCompliantResourcesCount"></a>

- *Type:* `number`

---

##### `suppressedNonCompliantResourcesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditCheckDetails.property.suppressedNonCompliantResourcesCount"></a>

- *Type:* `number`

---

##### `totalResourcesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditCheckDetails.property.totalResourcesCount"></a>

- *Type:* `number`

---

### IotAuditFinding <a name="aws-cdk-sdk.iot.IotAuditFinding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuditFinding: iot.IotAuditFinding = { ... }
```

##### `checkName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.checkName"></a>

- *Type:* `string`

---

##### `findingId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.findingId"></a>

- *Type:* `string`

---

##### `findingTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.findingTime"></a>

- *Type:* `string`

---

##### `isSuppressed`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.isSuppressed"></a>

- *Type:* `boolean`

---

##### `nonCompliantResource`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.nonCompliantResource"></a>

- *Type:* [`aws-cdk-sdk.iot.IotNonCompliantResource`](#aws-cdk-sdk.iot.IotNonCompliantResource)

---

##### `reasonForNonCompliance`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.reasonForNonCompliance"></a>

- *Type:* `string`

---

##### `reasonForNonComplianceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.reasonForNonComplianceCode"></a>

- *Type:* `string`

---

##### `relatedResources`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.relatedResources"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRelatedResource`](#aws-cdk-sdk.iot.IotRelatedResource)[]

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.severity"></a>

- *Type:* `string`

---

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.taskId"></a>

- *Type:* `string`

---

##### `taskStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditFinding.property.taskStartTime"></a>

- *Type:* `string`

---

### IotAuditMitigationActionExecutionMetadata <a name="aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuditMitigationActionExecutionMetadata: iot.IotAuditMitigationActionExecutionMetadata = { ... }
```

##### `actionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata.property.actionId"></a>

- *Type:* `string`

---

##### `actionName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata.property.actionName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata.property.endTime"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata.property.errorCode"></a>

- *Type:* `string`

---

##### `findingId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata.property.findingId"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata.property.message"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata.property.status"></a>

- *Type:* `string`

---

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata.property.taskId"></a>

- *Type:* `string`

---

### IotAuditMitigationActionsTaskMetadata <a name="aws-cdk-sdk.iot.IotAuditMitigationActionsTaskMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuditMitigationActionsTaskMetadata: iot.IotAuditMitigationActionsTaskMetadata = { ... }
```

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionsTaskMetadata.property.startTime"></a>

- *Type:* `string`

---

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionsTaskMetadata.property.taskId"></a>

- *Type:* `string`

---

##### `taskStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionsTaskMetadata.property.taskStatus"></a>

- *Type:* `string`

---

### IotAuditMitigationActionsTaskTarget <a name="aws-cdk-sdk.iot.IotAuditMitigationActionsTaskTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuditMitigationActionsTaskTarget: iot.IotAuditMitigationActionsTaskTarget = { ... }
```

##### `auditCheckToReasonCodeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionsTaskTarget.property.auditCheckToReasonCodeFilter"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `auditTaskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionsTaskTarget.property.auditTaskId"></a>

- *Type:* `string`

---

##### `findingIds`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditMitigationActionsTaskTarget.property.findingIds"></a>

- *Type:* `string`[]

---

### IotAuditNotificationTarget <a name="aws-cdk-sdk.iot.IotAuditNotificationTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuditNotificationTarget: iot.IotAuditNotificationTarget = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditNotificationTarget.property.enabled"></a>

- *Type:* `boolean`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditNotificationTarget.property.roleArn"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditNotificationTarget.property.targetArn"></a>

- *Type:* `string`

---

### IotAuditSuppression <a name="aws-cdk-sdk.iot.IotAuditSuppression"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuditSuppression: iot.IotAuditSuppression = { ... }
```

##### `checkName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAuditSuppression.property.checkName"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAuditSuppression.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResourceIdentifier`](#aws-cdk-sdk.iot.IotResourceIdentifier)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditSuppression.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditSuppression.property.expirationDate"></a>

- *Type:* `string`

---

##### `suppressIndefinitely`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditSuppression.property.suppressIndefinitely"></a>

- *Type:* `boolean`

---

### IotAuditTaskMetadata <a name="aws-cdk-sdk.iot.IotAuditTaskMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuditTaskMetadata: iot.IotAuditTaskMetadata = { ... }
```

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditTaskMetadata.property.taskId"></a>

- *Type:* `string`

---

##### `taskStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditTaskMetadata.property.taskStatus"></a>

- *Type:* `string`

---

##### `taskType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuditTaskMetadata.property.taskType"></a>

- *Type:* `string`

---

### IotAuthInfo <a name="aws-cdk-sdk.iot.IotAuthInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuthInfo: iot.IotAuthInfo = { ... }
```

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAuthInfo.property.resources"></a>

- *Type:* `string`[]

---

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthInfo.property.actionType"></a>

- *Type:* `string`

---

### IotAuthorizerConfig <a name="aws-cdk-sdk.iot.IotAuthorizerConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuthorizerConfig: iot.IotAuthorizerConfig = { ... }
```

##### `allowAuthorizerOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerConfig.property.allowAuthorizerOverride"></a>

- *Type:* `boolean`

---

##### `defaultAuthorizerName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerConfig.property.defaultAuthorizerName"></a>

- *Type:* `string`

---

### IotAuthorizerDescription <a name="aws-cdk-sdk.iot.IotAuthorizerDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuthorizerDescription: iot.IotAuthorizerDescription = { ... }
```

##### `authorizerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerDescription.property.authorizerArn"></a>

- *Type:* `string`

---

##### `authorizerFunctionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerDescription.property.authorizerFunctionArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerDescription.property.authorizerName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerDescription.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `signingDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerDescription.property.signingDisabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerDescription.property.status"></a>

- *Type:* `string`

---

##### `tokenKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerDescription.property.tokenKeyName"></a>

- *Type:* `string`

---

##### `tokenSigningPublicKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerDescription.property.tokenSigningPublicKeys"></a>

- *Type:* {[ key: string ]: `string`}

---

### IotAuthorizerSummary <a name="aws-cdk-sdk.iot.IotAuthorizerSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuthorizerSummary: iot.IotAuthorizerSummary = { ... }
```

##### `authorizerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerSummary.property.authorizerArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthorizerSummary.property.authorizerName"></a>

- *Type:* `string`

---

### IotAuthResult <a name="aws-cdk-sdk.iot.IotAuthResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAuthResult: iot.IotAuthResult = { ... }
```

##### `allowed`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthResult.property.allowed"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAllowed`](#aws-cdk-sdk.iot.IotAllowed)

---

##### `authDecision`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthResult.property.authDecision"></a>

- *Type:* `string`

---

##### `authInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthResult.property.authInfo"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthInfo`](#aws-cdk-sdk.iot.IotAuthInfo)

---

##### `denied`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthResult.property.denied"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDenied`](#aws-cdk-sdk.iot.IotDenied)

---

##### `missingContextValues`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAuthResult.property.missingContextValues"></a>

- *Type:* `string`[]

---

### IotAwsJobAbortConfig <a name="aws-cdk-sdk.iot.IotAwsJobAbortConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAwsJobAbortConfig: iot.IotAwsJobAbortConfig = { ... }
```

##### `abortCriteriaList`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAwsJobAbortConfig.property.abortCriteriaList"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAwsJobAbortCriteria`](#aws-cdk-sdk.iot.IotAwsJobAbortCriteria)[]

---

### IotAwsJobAbortCriteria <a name="aws-cdk-sdk.iot.IotAwsJobAbortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAwsJobAbortCriteria: iot.IotAwsJobAbortCriteria = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAwsJobAbortCriteria.property.action"></a>

- *Type:* `string`

---

##### `failureType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAwsJobAbortCriteria.property.failureType"></a>

- *Type:* `string`

---

##### `minNumberOfExecutedThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAwsJobAbortCriteria.property.minNumberOfExecutedThings"></a>

- *Type:* `number`

---

##### `thresholdPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAwsJobAbortCriteria.property.thresholdPercentage"></a>

- *Type:* `number`

---

### IotAwsJobExecutionsRolloutConfig <a name="aws-cdk-sdk.iot.IotAwsJobExecutionsRolloutConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAwsJobExecutionsRolloutConfig: iot.IotAwsJobExecutionsRolloutConfig = { ... }
```

##### `exponentialRate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAwsJobExecutionsRolloutConfig.property.exponentialRate"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAwsJobExponentialRolloutRate`](#aws-cdk-sdk.iot.IotAwsJobExponentialRolloutRate)

---

##### `maximumPerMinute`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAwsJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

- *Type:* `number`

---

### IotAwsJobExponentialRolloutRate <a name="aws-cdk-sdk.iot.IotAwsJobExponentialRolloutRate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAwsJobExponentialRolloutRate: iot.IotAwsJobExponentialRolloutRate = { ... }
```

##### `baseRatePerMinute`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAwsJobExponentialRolloutRate.property.baseRatePerMinute"></a>

- *Type:* `number`

---

##### `incrementFactor`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAwsJobExponentialRolloutRate.property.incrementFactor"></a>

- *Type:* `number`

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotAwsJobExponentialRolloutRate.property.rateIncreaseCriteria"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAwsJobRateIncreaseCriteria`](#aws-cdk-sdk.iot.IotAwsJobRateIncreaseCriteria)

---

### IotAwsJobPresignedUrlConfig <a name="aws-cdk-sdk.iot.IotAwsJobPresignedUrlConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAwsJobPresignedUrlConfig: iot.IotAwsJobPresignedUrlConfig = { ... }
```

##### `expiresInSec`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAwsJobPresignedUrlConfig.property.expiresInSec"></a>

- *Type:* `number`

---

### IotAwsJobRateIncreaseCriteria <a name="aws-cdk-sdk.iot.IotAwsJobRateIncreaseCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAwsJobRateIncreaseCriteria: iot.IotAwsJobRateIncreaseCriteria = { ... }
```

##### `numberOfNotifiedThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAwsJobRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

- *Type:* `number`

---

##### `numberOfSucceededThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAwsJobRateIncreaseCriteria.property.numberOfSucceededThings"></a>

- *Type:* `number`

---

### IotAwsJobTimeoutConfig <a name="aws-cdk-sdk.iot.IotAwsJobTimeoutConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotAwsJobTimeoutConfig: iot.IotAwsJobTimeoutConfig = { ... }
```

##### `inProgressTimeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotAwsJobTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

- *Type:* `number`

---

### IotBehavior <a name="aws-cdk-sdk.iot.IotBehavior"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotBehavior: iot.IotBehavior = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotBehavior.property.name"></a>

- *Type:* `string`

---

##### `criteria`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBehavior.property.criteria"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBehaviorCriteria`](#aws-cdk-sdk.iot.IotBehaviorCriteria)

---

##### `metric`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBehavior.property.metric"></a>

- *Type:* `string`

---

##### `metricDimension`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBehavior.property.metricDimension"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricDimension`](#aws-cdk-sdk.iot.IotMetricDimension)

---

### IotBehaviorCriteria <a name="aws-cdk-sdk.iot.IotBehaviorCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotBehaviorCriteria: iot.IotBehaviorCriteria = { ... }
```

##### `comparisonOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBehaviorCriteria.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `consecutiveDatapointsToAlarm`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBehaviorCriteria.property.consecutiveDatapointsToAlarm"></a>

- *Type:* `number`

---

##### `consecutiveDatapointsToClear`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBehaviorCriteria.property.consecutiveDatapointsToClear"></a>

- *Type:* `number`

---

##### `durationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBehaviorCriteria.property.durationSeconds"></a>

- *Type:* `number`

---

##### `statisticalThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBehaviorCriteria.property.statisticalThreshold"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStatisticalThreshold`](#aws-cdk-sdk.iot.IotStatisticalThreshold)

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBehaviorCriteria.property.value"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricValue`](#aws-cdk-sdk.iot.IotMetricValue)

---

### IotBillingGroupMetadata <a name="aws-cdk-sdk.iot.IotBillingGroupMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotBillingGroupMetadata: iot.IotBillingGroupMetadata = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBillingGroupMetadata.property.creationDate"></a>

- *Type:* `string`

---

### IotBillingGroupProperties <a name="aws-cdk-sdk.iot.IotBillingGroupProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotBillingGroupProperties: iot.IotBillingGroupProperties = { ... }
```

##### `billingGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotBillingGroupProperties.property.billingGroupDescription"></a>

- *Type:* `string`

---

### IotCaCertificate <a name="aws-cdk-sdk.iot.IotCaCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCaCertificate: iot.IotCaCertificate = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificate.property.certificateId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificate.property.creationDate"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificate.property.status"></a>

- *Type:* `string`

---

### IotCaCertificateDescription <a name="aws-cdk-sdk.iot.IotCaCertificateDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCaCertificateDescription: iot.IotCaCertificateDescription = { ... }
```

##### `autoRegistrationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.autoRegistrationStatus"></a>

- *Type:* `string`

---

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.certificateId"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.certificatePem"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `customerVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.customerVersion"></a>

- *Type:* `number`

---

##### `generationId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.generationId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `ownedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.ownedBy"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.status"></a>

- *Type:* `string`

---

##### `validity`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCaCertificateDescription.property.validity"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCertificateValidity`](#aws-cdk-sdk.iot.IotCertificateValidity)

---

### IotCancelAuditMitigationActionsTaskRequest <a name="aws-cdk-sdk.iot.IotCancelAuditMitigationActionsTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCancelAuditMitigationActionsTaskRequest: iot.IotCancelAuditMitigationActionsTaskRequest = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCancelAuditMitigationActionsTaskRequest.property.taskId"></a>

- *Type:* `string`

---

### IotCancelAuditMitigationActionsTaskResponse <a name="aws-cdk-sdk.iot.IotCancelAuditMitigationActionsTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCancelAuditMitigationActionsTaskResponse: iot.IotCancelAuditMitigationActionsTaskResponse = { ... }
```

### IotCancelAuditTaskRequest <a name="aws-cdk-sdk.iot.IotCancelAuditTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCancelAuditTaskRequest: iot.IotCancelAuditTaskRequest = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCancelAuditTaskRequest.property.taskId"></a>

- *Type:* `string`

---

### IotCancelAuditTaskResponse <a name="aws-cdk-sdk.iot.IotCancelAuditTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCancelAuditTaskResponse: iot.IotCancelAuditTaskResponse = { ... }
```

### IotCancelCertificateTransferRequest <a name="aws-cdk-sdk.iot.IotCancelCertificateTransferRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCancelCertificateTransferRequest: iot.IotCancelCertificateTransferRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCancelCertificateTransferRequest.property.certificateId"></a>

- *Type:* `string`

---

### IotCancelJobExecutionRequest <a name="aws-cdk-sdk.iot.IotCancelJobExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCancelJobExecutionRequest: iot.IotCancelJobExecutionRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCancelJobExecutionRequest.property.jobId"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCancelJobExecutionRequest.property.thingName"></a>

- *Type:* `string`

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCancelJobExecutionRequest.property.expectedVersion"></a>

- *Type:* `number`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCancelJobExecutionRequest.property.force"></a>

- *Type:* `boolean`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCancelJobExecutionRequest.property.statusDetails"></a>

- *Type:* {[ key: string ]: `string`}

---

### IotCancelJobRequest <a name="aws-cdk-sdk.iot.IotCancelJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCancelJobRequest: iot.IotCancelJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCancelJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCancelJobRequest.property.comment"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCancelJobRequest.property.force"></a>

- *Type:* `boolean`

---

##### `reasonCode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCancelJobRequest.property.reasonCode"></a>

- *Type:* `string`

---

### IotCancelJobResponse <a name="aws-cdk-sdk.iot.IotCancelJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCancelJobResponse: iot.IotCancelJobResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCancelJobResponse.property.description"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCancelJobResponse.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCancelJobResponse.property.jobId"></a>

- *Type:* `string`

---

### IotCertificate <a name="aws-cdk-sdk.iot.IotCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCertificate: iot.IotCertificate = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificate.property.certificateId"></a>

- *Type:* `string`

---

##### `certificateMode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificate.property.certificateMode"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificate.property.creationDate"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificate.property.status"></a>

- *Type:* `string`

---

### IotCertificateDescription <a name="aws-cdk-sdk.iot.IotCertificateDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCertificateDescription: iot.IotCertificateDescription = { ... }
```

##### `caCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.caCertificateId"></a>

- *Type:* `string`

---

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.certificateId"></a>

- *Type:* `string`

---

##### `certificateMode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.certificateMode"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.certificatePem"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `customerVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.customerVersion"></a>

- *Type:* `number`

---

##### `generationId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.generationId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `ownedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.ownedBy"></a>

- *Type:* `string`

---

##### `previousOwnedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.previousOwnedBy"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.status"></a>

- *Type:* `string`

---

##### `transferData`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.transferData"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTransferData`](#aws-cdk-sdk.iot.IotTransferData)

---

##### `validity`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateDescription.property.validity"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCertificateValidity`](#aws-cdk-sdk.iot.IotCertificateValidity)

---

### IotCertificateValidity <a name="aws-cdk-sdk.iot.IotCertificateValidity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCertificateValidity: iot.IotCertificateValidity = { ... }
```

##### `notAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateValidity.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCertificateValidity.property.notBefore"></a>

- *Type:* `string`

---

### IotClearDefaultAuthorizerRequest <a name="aws-cdk-sdk.iot.IotClearDefaultAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotClearDefaultAuthorizerRequest: iot.IotClearDefaultAuthorizerRequest = { ... }
```

### IotClearDefaultAuthorizerResponse <a name="aws-cdk-sdk.iot.IotClearDefaultAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotClearDefaultAuthorizerResponse: iot.IotClearDefaultAuthorizerResponse = { ... }
```

### IotCloudwatchAlarmAction <a name="aws-cdk-sdk.iot.IotCloudwatchAlarmAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCloudwatchAlarmAction: iot.IotCloudwatchAlarmAction = { ... }
```

##### `alarmName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchAlarmAction.property.alarmName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchAlarmAction.property.roleArn"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchAlarmAction.property.stateReason"></a>

- *Type:* `string`

---

##### `stateValue`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchAlarmAction.property.stateValue"></a>

- *Type:* `string`

---

### IotCloudwatchLogsAction <a name="aws-cdk-sdk.iot.IotCloudwatchLogsAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCloudwatchLogsAction: iot.IotCloudwatchLogsAction = { ... }
```

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchLogsAction.property.logGroupName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchLogsAction.property.roleArn"></a>

- *Type:* `string`

---

### IotCloudwatchMetricAction <a name="aws-cdk-sdk.iot.IotCloudwatchMetricAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCloudwatchMetricAction: iot.IotCloudwatchMetricAction = { ... }
```

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchMetricAction.property.metricName"></a>

- *Type:* `string`

---

##### `metricNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchMetricAction.property.metricNamespace"></a>

- *Type:* `string`

---

##### `metricUnit`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchMetricAction.property.metricUnit"></a>

- *Type:* `string`

---

##### `metricValue`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchMetricAction.property.metricValue"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchMetricAction.property.roleArn"></a>

- *Type:* `string`

---

##### `metricTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCloudwatchMetricAction.property.metricTimestamp"></a>

- *Type:* `string`

---

### IotCodeSigning <a name="aws-cdk-sdk.iot.IotCodeSigning"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCodeSigning: iot.IotCodeSigning = { ... }
```

##### `awsSignerJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCodeSigning.property.awsSignerJobId"></a>

- *Type:* `string`

---

##### `customCodeSigning`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCodeSigning.property.customCodeSigning"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCustomCodeSigning`](#aws-cdk-sdk.iot.IotCustomCodeSigning)

---

##### `startSigningJobParameter`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCodeSigning.property.startSigningJobParameter"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStartSigningJobParameter`](#aws-cdk-sdk.iot.IotStartSigningJobParameter)

---

### IotCodeSigningCertificateChain <a name="aws-cdk-sdk.iot.IotCodeSigningCertificateChain"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCodeSigningCertificateChain: iot.IotCodeSigningCertificateChain = { ... }
```

##### `certificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCodeSigningCertificateChain.property.certificateName"></a>

- *Type:* `string`

---

##### `inlineDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCodeSigningCertificateChain.property.inlineDocument"></a>

- *Type:* `string`

---

### IotCodeSigningSignature <a name="aws-cdk-sdk.iot.IotCodeSigningSignature"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCodeSigningSignature: iot.IotCodeSigningSignature = { ... }
```

##### `inlineDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCodeSigningSignature.property.inlineDocument"></a>

- *Type:* `any`

---

### IotConfiguration <a name="aws-cdk-sdk.iot.IotConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotConfiguration: iot.IotConfiguration = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

### IotConfirmTopicRuleDestinationRequest <a name="aws-cdk-sdk.iot.IotConfirmTopicRuleDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotConfirmTopicRuleDestinationRequest: iot.IotConfirmTopicRuleDestinationRequest = { ... }
```

##### `confirmationToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotConfirmTopicRuleDestinationRequest.property.confirmationToken"></a>

- *Type:* `string`

---

### IotConfirmTopicRuleDestinationResponse <a name="aws-cdk-sdk.iot.IotConfirmTopicRuleDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotConfirmTopicRuleDestinationResponse: iot.IotConfirmTopicRuleDestinationResponse = { ... }
```

### IotCreateAuditSuppressionRequest <a name="aws-cdk-sdk.iot.IotCreateAuditSuppressionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateAuditSuppressionRequest: iot.IotCreateAuditSuppressionRequest = { ... }
```

##### `checkName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateAuditSuppressionRequest.property.checkName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateAuditSuppressionRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateAuditSuppressionRequest.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResourceIdentifier`](#aws-cdk-sdk.iot.IotResourceIdentifier)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateAuditSuppressionRequest.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateAuditSuppressionRequest.property.expirationDate"></a>

- *Type:* `string`

---

##### `suppressIndefinitely`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateAuditSuppressionRequest.property.suppressIndefinitely"></a>

- *Type:* `boolean`

---

### IotCreateAuditSuppressionResponse <a name="aws-cdk-sdk.iot.IotCreateAuditSuppressionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateAuditSuppressionResponse: iot.IotCreateAuditSuppressionResponse = { ... }
```

### IotCreateAuthorizerRequest <a name="aws-cdk-sdk.iot.IotCreateAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateAuthorizerRequest: iot.IotCreateAuthorizerRequest = { ... }
```

##### `authorizerFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateAuthorizerRequest.property.authorizerFunctionArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateAuthorizerRequest.property.authorizerName"></a>

- *Type:* `string`

---

##### `signingDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateAuthorizerRequest.property.signingDisabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateAuthorizerRequest.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateAuthorizerRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

##### `tokenKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateAuthorizerRequest.property.tokenKeyName"></a>

- *Type:* `string`

---

##### `tokenSigningPublicKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateAuthorizerRequest.property.tokenSigningPublicKeys"></a>

- *Type:* {[ key: string ]: `string`}

---

### IotCreateAuthorizerResponse <a name="aws-cdk-sdk.iot.IotCreateAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateAuthorizerResponse: iot.IotCreateAuthorizerResponse = { ... }
```

##### `authorizerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateAuthorizerResponse.property.authorizerArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateAuthorizerResponse.property.authorizerName"></a>

- *Type:* `string`

---

### IotCreateBillingGroupRequest <a name="aws-cdk-sdk.iot.IotCreateBillingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateBillingGroupRequest: iot.IotCreateBillingGroupRequest = { ... }
```

##### `billingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateBillingGroupRequest.property.billingGroupName"></a>

- *Type:* `string`

---

##### `billingGroupProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateBillingGroupRequest.property.billingGroupProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBillingGroupProperties`](#aws-cdk-sdk.iot.IotBillingGroupProperties)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateBillingGroupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotCreateBillingGroupResponse <a name="aws-cdk-sdk.iot.IotCreateBillingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateBillingGroupResponse: iot.IotCreateBillingGroupResponse = { ... }
```

##### `billingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateBillingGroupResponse.property.billingGroupArn"></a>

- *Type:* `string`

---

##### `billingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateBillingGroupResponse.property.billingGroupId"></a>

- *Type:* `string`

---

##### `billingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateBillingGroupResponse.property.billingGroupName"></a>

- *Type:* `string`

---

### IotCreateCertificateFromCsrRequest <a name="aws-cdk-sdk.iot.IotCreateCertificateFromCsrRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateCertificateFromCsrRequest: iot.IotCreateCertificateFromCsrRequest = { ... }
```

##### `certificateSigningRequest`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateCertificateFromCsrRequest.property.certificateSigningRequest"></a>

- *Type:* `string`

---

##### `setAsActive`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateCertificateFromCsrRequest.property.setAsActive"></a>

- *Type:* `boolean`

---

### IotCreateCertificateFromCsrResponse <a name="aws-cdk-sdk.iot.IotCreateCertificateFromCsrResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateCertificateFromCsrResponse: iot.IotCreateCertificateFromCsrResponse = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateCertificateFromCsrResponse.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateCertificateFromCsrResponse.property.certificateId"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateCertificateFromCsrResponse.property.certificatePem"></a>

- *Type:* `string`

---

### IotCreateDimensionRequest <a name="aws-cdk-sdk.iot.IotCreateDimensionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateDimensionRequest: iot.IotCreateDimensionRequest = { ... }
```

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateDimensionRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateDimensionRequest.property.name"></a>

- *Type:* `string`

---

##### `stringValues`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateDimensionRequest.property.stringValues"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateDimensionRequest.property.type"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDimensionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotCreateDimensionResponse <a name="aws-cdk-sdk.iot.IotCreateDimensionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateDimensionResponse: iot.IotCreateDimensionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDimensionResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDimensionResponse.property.name"></a>

- *Type:* `string`

---

### IotCreateDomainConfigurationRequest <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateDomainConfigurationRequest: iot.IotCreateDomainConfigurationRequest = { ... }
```

##### `domainConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest.property.domainConfigurationName"></a>

- *Type:* `string`

---

##### `authorizerConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest.property.authorizerConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthorizerConfig`](#aws-cdk-sdk.iot.IotAuthorizerConfig)

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest.property.domainName"></a>

- *Type:* `string`

---

##### `serverCertificateArns`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest.property.serverCertificateArns"></a>

- *Type:* `string`[]

---

##### `serviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest.property.serviceType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

##### `validationCertificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest.property.validationCertificateArn"></a>

- *Type:* `string`

---

### IotCreateDomainConfigurationResponse <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateDomainConfigurationResponse: iot.IotCreateDomainConfigurationResponse = { ... }
```

##### `domainConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationResponse.property.domainConfigurationArn"></a>

- *Type:* `string`

---

##### `domainConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDomainConfigurationResponse.property.domainConfigurationName"></a>

- *Type:* `string`

---

### IotCreateDynamicThingGroupRequest <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateDynamicThingGroupRequest: iot.IotCreateDynamicThingGroupRequest = { ... }
```

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest.property.queryString"></a>

- *Type:* `string`

---

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest.property.thingGroupName"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest.property.indexName"></a>

- *Type:* `string`

---

##### `queryVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest.property.queryVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

##### `thingGroupProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest.property.thingGroupProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingGroupProperties`](#aws-cdk-sdk.iot.IotThingGroupProperties)

---

### IotCreateDynamicThingGroupResponse <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateDynamicThingGroupResponse: iot.IotCreateDynamicThingGroupResponse = { ... }
```

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupResponse.property.indexName"></a>

- *Type:* `string`

---

##### `queryString`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupResponse.property.queryString"></a>

- *Type:* `string`

---

##### `queryVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupResponse.property.queryVersion"></a>

- *Type:* `string`

---

##### `thingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupResponse.property.thingGroupArn"></a>

- *Type:* `string`

---

##### `thingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupResponse.property.thingGroupId"></a>

- *Type:* `string`

---

##### `thingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateDynamicThingGroupResponse.property.thingGroupName"></a>

- *Type:* `string`

---

### IotCreateJobRequest <a name="aws-cdk-sdk.iot.IotCreateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateJobRequest: iot.IotCreateJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.targets"></a>

- *Type:* `string`[]

---

##### `abortConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.abortConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAbortConfig`](#aws-cdk-sdk.iot.IotAbortConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.description"></a>

- *Type:* `string`

---

##### `document`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.document"></a>

- *Type:* `string`

---

##### `documentSource`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.documentSource"></a>

- *Type:* `string`

---

##### `jobExecutionsRolloutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.jobExecutionsRolloutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecutionsRolloutConfig`](#aws-cdk-sdk.iot.IotJobExecutionsRolloutConfig)

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.namespaceId"></a>

- *Type:* `string`

---

##### `presignedUrlConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.presignedUrlConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPresignedUrlConfig`](#aws-cdk-sdk.iot.IotPresignedUrlConfig)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

##### `targetSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.targetSelection"></a>

- *Type:* `string`

---

##### `timeoutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobRequest.property.timeoutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTimeoutConfig`](#aws-cdk-sdk.iot.IotTimeoutConfig)

---

### IotCreateJobResponse <a name="aws-cdk-sdk.iot.IotCreateJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateJobResponse: iot.IotCreateJobResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobResponse.property.description"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobResponse.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateJobResponse.property.jobId"></a>

- *Type:* `string`

---

### IotCreateKeysAndCertificateRequest <a name="aws-cdk-sdk.iot.IotCreateKeysAndCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateKeysAndCertificateRequest: iot.IotCreateKeysAndCertificateRequest = { ... }
```

##### `setAsActive`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateKeysAndCertificateRequest.property.setAsActive"></a>

- *Type:* `boolean`

---

### IotCreateKeysAndCertificateResponse <a name="aws-cdk-sdk.iot.IotCreateKeysAndCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateKeysAndCertificateResponse: iot.IotCreateKeysAndCertificateResponse = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateKeysAndCertificateResponse.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateKeysAndCertificateResponse.property.certificateId"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateKeysAndCertificateResponse.property.certificatePem"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateKeysAndCertificateResponse.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.iot.IotKeyPair`](#aws-cdk-sdk.iot.IotKeyPair)

---

### IotCreateMitigationActionRequest <a name="aws-cdk-sdk.iot.IotCreateMitigationActionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateMitigationActionRequest: iot.IotCreateMitigationActionRequest = { ... }
```

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateMitigationActionRequest.property.actionName"></a>

- *Type:* `string`

---

##### `actionParams`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateMitigationActionRequest.property.actionParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMitigationActionParams`](#aws-cdk-sdk.iot.IotMitigationActionParams)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateMitigationActionRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateMitigationActionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotCreateMitigationActionResponse <a name="aws-cdk-sdk.iot.IotCreateMitigationActionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateMitigationActionResponse: iot.IotCreateMitigationActionResponse = { ... }
```

##### `actionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateMitigationActionResponse.property.actionArn"></a>

- *Type:* `string`

---

##### `actionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateMitigationActionResponse.property.actionId"></a>

- *Type:* `string`

---

### IotCreateOtaUpdateRequest <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateOtaUpdateRequest: iot.IotCreateOtaUpdateRequest = { ... }
```

##### `files`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.files"></a>

- *Type:* [`aws-cdk-sdk.iot.IotOtaUpdateFile`](#aws-cdk-sdk.iot.IotOtaUpdateFile)[]

---

##### `otaUpdateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.otaUpdateId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.targets"></a>

- *Type:* `string`[]

---

##### `additionalParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.additionalParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `awsJobAbortConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.awsJobAbortConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAwsJobAbortConfig`](#aws-cdk-sdk.iot.IotAwsJobAbortConfig)

---

##### `awsJobExecutionsRolloutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.awsJobExecutionsRolloutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAwsJobExecutionsRolloutConfig`](#aws-cdk-sdk.iot.IotAwsJobExecutionsRolloutConfig)

---

##### `awsJobPresignedUrlConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.awsJobPresignedUrlConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAwsJobPresignedUrlConfig`](#aws-cdk-sdk.iot.IotAwsJobPresignedUrlConfig)

---

##### `awsJobTimeoutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.awsJobTimeoutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAwsJobTimeoutConfig`](#aws-cdk-sdk.iot.IotAwsJobTimeoutConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.description"></a>

- *Type:* `string`

---

##### `protocols`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.protocols"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

##### `targetSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateRequest.property.targetSelection"></a>

- *Type:* `string`

---

### IotCreateOtaUpdateResponse <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateOtaUpdateResponse: iot.IotCreateOtaUpdateResponse = { ... }
```

##### `awsIotJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateResponse.property.awsIotJobArn"></a>

- *Type:* `string`

---

##### `awsIotJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateResponse.property.awsIotJobId"></a>

- *Type:* `string`

---

##### `otaUpdateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateResponse.property.otaUpdateArn"></a>

- *Type:* `string`

---

##### `otaUpdateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateResponse.property.otaUpdateId"></a>

- *Type:* `string`

---

##### `otaUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateOtaUpdateResponse.property.otaUpdateStatus"></a>

- *Type:* `string`

---

### IotCreatePolicyRequest <a name="aws-cdk-sdk.iot.IotCreatePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreatePolicyRequest: iot.IotCreatePolicyRequest = { ... }
```

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyRequest.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotCreatePolicyResponse <a name="aws-cdk-sdk.iot.IotCreatePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreatePolicyResponse: iot.IotCreatePolicyResponse = { ... }
```

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyResponse.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyResponse.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyResponse.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyResponse.property.policyVersionId"></a>

- *Type:* `string`

---

### IotCreatePolicyVersionRequest <a name="aws-cdk-sdk.iot.IotCreatePolicyVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreatePolicyVersionRequest: iot.IotCreatePolicyVersionRequest = { ... }
```

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyVersionRequest.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyVersionRequest.property.policyName"></a>

- *Type:* `string`

---

##### `setAsDefault`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyVersionRequest.property.setAsDefault"></a>

- *Type:* `boolean`

---

### IotCreatePolicyVersionResponse <a name="aws-cdk-sdk.iot.IotCreatePolicyVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreatePolicyVersionResponse: iot.IotCreatePolicyVersionResponse = { ... }
```

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyVersionResponse.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyVersionResponse.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyVersionResponse.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreatePolicyVersionResponse.property.policyVersionId"></a>

- *Type:* `string`

---

### IotCreateProvisioningClaimRequest <a name="aws-cdk-sdk.iot.IotCreateProvisioningClaimRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateProvisioningClaimRequest: iot.IotCreateProvisioningClaimRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningClaimRequest.property.templateName"></a>

- *Type:* `string`

---

### IotCreateProvisioningClaimResponse <a name="aws-cdk-sdk.iot.IotCreateProvisioningClaimResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateProvisioningClaimResponse: iot.IotCreateProvisioningClaimResponse = { ... }
```

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningClaimResponse.property.certificateId"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningClaimResponse.property.certificatePem"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningClaimResponse.property.expiration"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningClaimResponse.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.iot.IotKeyPair`](#aws-cdk-sdk.iot.IotKeyPair)

---

### IotCreateProvisioningTemplateRequest <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateProvisioningTemplateRequest: iot.IotCreateProvisioningTemplateRequest = { ... }
```

##### `provisioningRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest.property.provisioningRoleArn"></a>

- *Type:* `string`

---

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest.property.templateBody"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest.property.enabled"></a>

- *Type:* `boolean`

---

##### `preProvisioningHook`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest.property.preProvisioningHook"></a>

- *Type:* [`aws-cdk-sdk.iot.IotProvisioningHook`](#aws-cdk-sdk.iot.IotProvisioningHook)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotCreateProvisioningTemplateResponse <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateProvisioningTemplateResponse: iot.IotCreateProvisioningTemplateResponse = { ... }
```

##### `defaultVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateResponse.property.defaultVersionId"></a>

- *Type:* `number`

---

##### `templateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateResponse.property.templateArn"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateResponse.property.templateName"></a>

- *Type:* `string`

---

### IotCreateProvisioningTemplateVersionRequest <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateProvisioningTemplateVersionRequest: iot.IotCreateProvisioningTemplateVersionRequest = { ... }
```

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionRequest.property.templateBody"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionRequest.property.templateName"></a>

- *Type:* `string`

---

##### `setAsDefault`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionRequest.property.setAsDefault"></a>

- *Type:* `boolean`

---

### IotCreateProvisioningTemplateVersionResponse <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateProvisioningTemplateVersionResponse: iot.IotCreateProvisioningTemplateVersionResponse = { ... }
```

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionResponse.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `templateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionResponse.property.templateArn"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionResponse.property.templateName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionResponse.property.versionId"></a>

- *Type:* `number`

---

### IotCreateRoleAliasRequest <a name="aws-cdk-sdk.iot.IotCreateRoleAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateRoleAliasRequest: iot.IotCreateRoleAliasRequest = { ... }
```

##### `roleAlias`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateRoleAliasRequest.property.roleAlias"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateRoleAliasRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `credentialDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateRoleAliasRequest.property.credentialDurationSeconds"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateRoleAliasRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotCreateRoleAliasResponse <a name="aws-cdk-sdk.iot.IotCreateRoleAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateRoleAliasResponse: iot.IotCreateRoleAliasResponse = { ... }
```

##### `roleAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateRoleAliasResponse.property.roleAlias"></a>

- *Type:* `string`

---

##### `roleAliasArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateRoleAliasResponse.property.roleAliasArn"></a>

- *Type:* `string`

---

### IotCreateScheduledAuditRequest <a name="aws-cdk-sdk.iot.IotCreateScheduledAuditRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateScheduledAuditRequest: iot.IotCreateScheduledAuditRequest = { ... }
```

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateScheduledAuditRequest.property.frequency"></a>

- *Type:* `string`

---

##### `scheduledAuditName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateScheduledAuditRequest.property.scheduledAuditName"></a>

- *Type:* `string`

---

##### `targetCheckNames`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateScheduledAuditRequest.property.targetCheckNames"></a>

- *Type:* `string`[]

---

##### `dayOfMonth`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateScheduledAuditRequest.property.dayOfMonth"></a>

- *Type:* `string`

---

##### `dayOfWeek`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateScheduledAuditRequest.property.dayOfWeek"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateScheduledAuditRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotCreateScheduledAuditResponse <a name="aws-cdk-sdk.iot.IotCreateScheduledAuditResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateScheduledAuditResponse: iot.IotCreateScheduledAuditResponse = { ... }
```

##### `scheduledAuditArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateScheduledAuditResponse.property.scheduledAuditArn"></a>

- *Type:* `string`

---

### IotCreateSecurityProfileRequest <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateSecurityProfileRequest: iot.IotCreateSecurityProfileRequest = { ... }
```

##### `securityProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileRequest.property.securityProfileName"></a>

- *Type:* `string`

---

##### `additionalMetricsToRetain`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileRequest.property.additionalMetricsToRetain"></a>

- *Type:* `string`[]

---

##### `additionalMetricsToRetainV2`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileRequest.property.additionalMetricsToRetainV2"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricToRetain`](#aws-cdk-sdk.iot.IotMetricToRetain)[]

---

##### `alertTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileRequest.property.alertTargets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAlertTarget`](#aws-cdk-sdk.iot.IotAlertTarget)}

---

##### `behaviors`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileRequest.property.behaviors"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBehavior`](#aws-cdk-sdk.iot.IotBehavior)[]

---

##### `securityProfileDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileRequest.property.securityProfileDescription"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotCreateSecurityProfileResponse <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateSecurityProfileResponse: iot.IotCreateSecurityProfileResponse = { ... }
```

##### `securityProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileResponse.property.securityProfileArn"></a>

- *Type:* `string`

---

##### `securityProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateSecurityProfileResponse.property.securityProfileName"></a>

- *Type:* `string`

---

### IotCreateStreamRequest <a name="aws-cdk-sdk.iot.IotCreateStreamRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateStreamRequest: iot.IotCreateStreamRequest = { ... }
```

##### `files`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateStreamRequest.property.files"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStreamFile`](#aws-cdk-sdk.iot.IotStreamFile)[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateStreamRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateStreamRequest.property.streamId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateStreamRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateStreamRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotCreateStreamResponse <a name="aws-cdk-sdk.iot.IotCreateStreamResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateStreamResponse: iot.IotCreateStreamResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateStreamResponse.property.description"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateStreamResponse.property.streamArn"></a>

- *Type:* `string`

---

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateStreamResponse.property.streamId"></a>

- *Type:* `string`

---

##### `streamVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateStreamResponse.property.streamVersion"></a>

- *Type:* `number`

---

### IotCreateThingGroupRequest <a name="aws-cdk-sdk.iot.IotCreateThingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateThingGroupRequest: iot.IotCreateThingGroupRequest = { ... }
```

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateThingGroupRequest.property.thingGroupName"></a>

- *Type:* `string`

---

##### `parentGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingGroupRequest.property.parentGroupName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingGroupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

##### `thingGroupProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingGroupRequest.property.thingGroupProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingGroupProperties`](#aws-cdk-sdk.iot.IotThingGroupProperties)

---

### IotCreateThingGroupResponse <a name="aws-cdk-sdk.iot.IotCreateThingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateThingGroupResponse: iot.IotCreateThingGroupResponse = { ... }
```

##### `thingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingGroupResponse.property.thingGroupArn"></a>

- *Type:* `string`

---

##### `thingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingGroupResponse.property.thingGroupId"></a>

- *Type:* `string`

---

##### `thingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingGroupResponse.property.thingGroupName"></a>

- *Type:* `string`

---

### IotCreateThingRequest <a name="aws-cdk-sdk.iot.IotCreateThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateThingRequest: iot.IotCreateThingRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateThingRequest.property.thingName"></a>

- *Type:* `string`

---

##### `attributePayload`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingRequest.property.attributePayload"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAttributePayload`](#aws-cdk-sdk.iot.IotAttributePayload)

---

##### `billingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingRequest.property.billingGroupName"></a>

- *Type:* `string`

---

##### `thingTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingRequest.property.thingTypeName"></a>

- *Type:* `string`

---

### IotCreateThingResponse <a name="aws-cdk-sdk.iot.IotCreateThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateThingResponse: iot.IotCreateThingResponse = { ... }
```

##### `thingArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingResponse.property.thingArn"></a>

- *Type:* `string`

---

##### `thingId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingResponse.property.thingId"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingResponse.property.thingName"></a>

- *Type:* `string`

---

### IotCreateThingTypeRequest <a name="aws-cdk-sdk.iot.IotCreateThingTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateThingTypeRequest: iot.IotCreateThingTypeRequest = { ... }
```

##### `thingTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateThingTypeRequest.property.thingTypeName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingTypeRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

##### `thingTypeProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingTypeRequest.property.thingTypeProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingTypeProperties`](#aws-cdk-sdk.iot.IotThingTypeProperties)

---

### IotCreateThingTypeResponse <a name="aws-cdk-sdk.iot.IotCreateThingTypeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateThingTypeResponse: iot.IotCreateThingTypeResponse = { ... }
```

##### `thingTypeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingTypeResponse.property.thingTypeArn"></a>

- *Type:* `string`

---

##### `thingTypeId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingTypeResponse.property.thingTypeId"></a>

- *Type:* `string`

---

##### `thingTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateThingTypeResponse.property.thingTypeName"></a>

- *Type:* `string`

---

### IotCreateTopicRuleDestinationRequest <a name="aws-cdk-sdk.iot.IotCreateTopicRuleDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateTopicRuleDestinationRequest: iot.IotCreateTopicRuleDestinationRequest = { ... }
```

##### `destinationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateTopicRuleDestinationRequest.property.destinationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTopicRuleDestinationConfiguration`](#aws-cdk-sdk.iot.IotTopicRuleDestinationConfiguration)

---

### IotCreateTopicRuleDestinationResponse <a name="aws-cdk-sdk.iot.IotCreateTopicRuleDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateTopicRuleDestinationResponse: iot.IotCreateTopicRuleDestinationResponse = { ... }
```

##### `topicRuleDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateTopicRuleDestinationResponse.property.topicRuleDestination"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTopicRuleDestination`](#aws-cdk-sdk.iot.IotTopicRuleDestination)

---

### IotCreateTopicRuleRequest <a name="aws-cdk-sdk.iot.IotCreateTopicRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCreateTopicRuleRequest: iot.IotCreateTopicRuleRequest = { ... }
```

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateTopicRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

##### `topicRulePayload`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotCreateTopicRuleRequest.property.topicRulePayload"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTopicRulePayload`](#aws-cdk-sdk.iot.IotTopicRulePayload)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCreateTopicRuleRequest.property.tags"></a>

- *Type:* `string`

---

### IotCustomCodeSigning <a name="aws-cdk-sdk.iot.IotCustomCodeSigning"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotCustomCodeSigning: iot.IotCustomCodeSigning = { ... }
```

##### `certificateChain`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCustomCodeSigning.property.certificateChain"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCodeSigningCertificateChain`](#aws-cdk-sdk.iot.IotCodeSigningCertificateChain)

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCustomCodeSigning.property.hashAlgorithm"></a>

- *Type:* `string`

---

##### `signature`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCustomCodeSigning.property.signature"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCodeSigningSignature`](#aws-cdk-sdk.iot.IotCodeSigningSignature)

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotCustomCodeSigning.property.signatureAlgorithm"></a>

- *Type:* `string`

---

### IotDeleteAccountAuditConfigurationRequest <a name="aws-cdk-sdk.iot.IotDeleteAccountAuditConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteAccountAuditConfigurationRequest: iot.IotDeleteAccountAuditConfigurationRequest = { ... }
```

##### `deleteScheduledAudits`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteAccountAuditConfigurationRequest.property.deleteScheduledAudits"></a>

- *Type:* `boolean`

---

### IotDeleteAccountAuditConfigurationResponse <a name="aws-cdk-sdk.iot.IotDeleteAccountAuditConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteAccountAuditConfigurationResponse: iot.IotDeleteAccountAuditConfigurationResponse = { ... }
```

### IotDeleteAuditSuppressionRequest <a name="aws-cdk-sdk.iot.IotDeleteAuditSuppressionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteAuditSuppressionRequest: iot.IotDeleteAuditSuppressionRequest = { ... }
```

##### `checkName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteAuditSuppressionRequest.property.checkName"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteAuditSuppressionRequest.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResourceIdentifier`](#aws-cdk-sdk.iot.IotResourceIdentifier)

---

### IotDeleteAuditSuppressionResponse <a name="aws-cdk-sdk.iot.IotDeleteAuditSuppressionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteAuditSuppressionResponse: iot.IotDeleteAuditSuppressionResponse = { ... }
```

### IotDeleteAuthorizerRequest <a name="aws-cdk-sdk.iot.IotDeleteAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteAuthorizerRequest: iot.IotDeleteAuthorizerRequest = { ... }
```

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteAuthorizerRequest.property.authorizerName"></a>

- *Type:* `string`

---

### IotDeleteAuthorizerResponse <a name="aws-cdk-sdk.iot.IotDeleteAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteAuthorizerResponse: iot.IotDeleteAuthorizerResponse = { ... }
```

### IotDeleteBillingGroupRequest <a name="aws-cdk-sdk.iot.IotDeleteBillingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteBillingGroupRequest: iot.IotDeleteBillingGroupRequest = { ... }
```

##### `billingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteBillingGroupRequest.property.billingGroupName"></a>

- *Type:* `string`

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteBillingGroupRequest.property.expectedVersion"></a>

- *Type:* `number`

---

### IotDeleteBillingGroupResponse <a name="aws-cdk-sdk.iot.IotDeleteBillingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteBillingGroupResponse: iot.IotDeleteBillingGroupResponse = { ... }
```

### IotDeleteCaCertificateRequest <a name="aws-cdk-sdk.iot.IotDeleteCaCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteCaCertificateRequest: iot.IotDeleteCaCertificateRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteCaCertificateRequest.property.certificateId"></a>

- *Type:* `string`

---

### IotDeleteCaCertificateResponse <a name="aws-cdk-sdk.iot.IotDeleteCaCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteCaCertificateResponse: iot.IotDeleteCaCertificateResponse = { ... }
```

### IotDeleteCertificateRequest <a name="aws-cdk-sdk.iot.IotDeleteCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteCertificateRequest: iot.IotDeleteCertificateRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteCertificateRequest.property.certificateId"></a>

- *Type:* `string`

---

##### `forceDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteCertificateRequest.property.forceDelete"></a>

- *Type:* `boolean`

---

### IotDeleteDimensionRequest <a name="aws-cdk-sdk.iot.IotDeleteDimensionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteDimensionRequest: iot.IotDeleteDimensionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteDimensionRequest.property.name"></a>

- *Type:* `string`

---

### IotDeleteDimensionResponse <a name="aws-cdk-sdk.iot.IotDeleteDimensionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteDimensionResponse: iot.IotDeleteDimensionResponse = { ... }
```

### IotDeleteDomainConfigurationRequest <a name="aws-cdk-sdk.iot.IotDeleteDomainConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteDomainConfigurationRequest: iot.IotDeleteDomainConfigurationRequest = { ... }
```

##### `domainConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteDomainConfigurationRequest.property.domainConfigurationName"></a>

- *Type:* `string`

---

### IotDeleteDomainConfigurationResponse <a name="aws-cdk-sdk.iot.IotDeleteDomainConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteDomainConfigurationResponse: iot.IotDeleteDomainConfigurationResponse = { ... }
```

### IotDeleteDynamicThingGroupRequest <a name="aws-cdk-sdk.iot.IotDeleteDynamicThingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteDynamicThingGroupRequest: iot.IotDeleteDynamicThingGroupRequest = { ... }
```

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteDynamicThingGroupRequest.property.thingGroupName"></a>

- *Type:* `string`

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteDynamicThingGroupRequest.property.expectedVersion"></a>

- *Type:* `number`

---

### IotDeleteDynamicThingGroupResponse <a name="aws-cdk-sdk.iot.IotDeleteDynamicThingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteDynamicThingGroupResponse: iot.IotDeleteDynamicThingGroupResponse = { ... }
```

### IotDeleteJobExecutionRequest <a name="aws-cdk-sdk.iot.IotDeleteJobExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteJobExecutionRequest: iot.IotDeleteJobExecutionRequest = { ... }
```

##### `executionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteJobExecutionRequest.property.executionNumber"></a>

- *Type:* `number`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteJobExecutionRequest.property.jobId"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteJobExecutionRequest.property.thingName"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteJobExecutionRequest.property.force"></a>

- *Type:* `boolean`

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteJobExecutionRequest.property.namespaceId"></a>

- *Type:* `string`

---

### IotDeleteJobRequest <a name="aws-cdk-sdk.iot.IotDeleteJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteJobRequest: iot.IotDeleteJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteJobRequest.property.force"></a>

- *Type:* `boolean`

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteJobRequest.property.namespaceId"></a>

- *Type:* `string`

---

### IotDeleteMitigationActionRequest <a name="aws-cdk-sdk.iot.IotDeleteMitigationActionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteMitigationActionRequest: iot.IotDeleteMitigationActionRequest = { ... }
```

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteMitigationActionRequest.property.actionName"></a>

- *Type:* `string`

---

### IotDeleteMitigationActionResponse <a name="aws-cdk-sdk.iot.IotDeleteMitigationActionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteMitigationActionResponse: iot.IotDeleteMitigationActionResponse = { ... }
```

### IotDeleteOtaUpdateRequest <a name="aws-cdk-sdk.iot.IotDeleteOtaUpdateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteOtaUpdateRequest: iot.IotDeleteOtaUpdateRequest = { ... }
```

##### `otaUpdateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteOtaUpdateRequest.property.otaUpdateId"></a>

- *Type:* `string`

---

##### `deleteStream`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteOtaUpdateRequest.property.deleteStream"></a>

- *Type:* `boolean`

---

##### `forceDeleteAWSJob`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteOtaUpdateRequest.property.forceDeleteAWSJob"></a>

- *Type:* `boolean`

---

### IotDeleteOtaUpdateResponse <a name="aws-cdk-sdk.iot.IotDeleteOtaUpdateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteOtaUpdateResponse: iot.IotDeleteOtaUpdateResponse = { ... }
```

### IotDeletePolicyRequest <a name="aws-cdk-sdk.iot.IotDeletePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeletePolicyRequest: iot.IotDeletePolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeletePolicyRequest.property.policyName"></a>

- *Type:* `string`

---

### IotDeletePolicyVersionRequest <a name="aws-cdk-sdk.iot.IotDeletePolicyVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeletePolicyVersionRequest: iot.IotDeletePolicyVersionRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeletePolicyVersionRequest.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeletePolicyVersionRequest.property.policyVersionId"></a>

- *Type:* `string`

---

### IotDeleteProvisioningTemplateRequest <a name="aws-cdk-sdk.iot.IotDeleteProvisioningTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteProvisioningTemplateRequest: iot.IotDeleteProvisioningTemplateRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteProvisioningTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

### IotDeleteProvisioningTemplateResponse <a name="aws-cdk-sdk.iot.IotDeleteProvisioningTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteProvisioningTemplateResponse: iot.IotDeleteProvisioningTemplateResponse = { ... }
```

### IotDeleteProvisioningTemplateVersionRequest <a name="aws-cdk-sdk.iot.IotDeleteProvisioningTemplateVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteProvisioningTemplateVersionRequest: iot.IotDeleteProvisioningTemplateVersionRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteProvisioningTemplateVersionRequest.property.templateName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteProvisioningTemplateVersionRequest.property.versionId"></a>

- *Type:* `number`

---

### IotDeleteProvisioningTemplateVersionResponse <a name="aws-cdk-sdk.iot.IotDeleteProvisioningTemplateVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteProvisioningTemplateVersionResponse: iot.IotDeleteProvisioningTemplateVersionResponse = { ... }
```

### IotDeleteRegistrationCodeRequest <a name="aws-cdk-sdk.iot.IotDeleteRegistrationCodeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteRegistrationCodeRequest: iot.IotDeleteRegistrationCodeRequest = { ... }
```

### IotDeleteRegistrationCodeResponse <a name="aws-cdk-sdk.iot.IotDeleteRegistrationCodeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteRegistrationCodeResponse: iot.IotDeleteRegistrationCodeResponse = { ... }
```

### IotDeleteRoleAliasRequest <a name="aws-cdk-sdk.iot.IotDeleteRoleAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteRoleAliasRequest: iot.IotDeleteRoleAliasRequest = { ... }
```

##### `roleAlias`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteRoleAliasRequest.property.roleAlias"></a>

- *Type:* `string`

---

### IotDeleteRoleAliasResponse <a name="aws-cdk-sdk.iot.IotDeleteRoleAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteRoleAliasResponse: iot.IotDeleteRoleAliasResponse = { ... }
```

### IotDeleteScheduledAuditRequest <a name="aws-cdk-sdk.iot.IotDeleteScheduledAuditRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteScheduledAuditRequest: iot.IotDeleteScheduledAuditRequest = { ... }
```

##### `scheduledAuditName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteScheduledAuditRequest.property.scheduledAuditName"></a>

- *Type:* `string`

---

### IotDeleteScheduledAuditResponse <a name="aws-cdk-sdk.iot.IotDeleteScheduledAuditResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteScheduledAuditResponse: iot.IotDeleteScheduledAuditResponse = { ... }
```

### IotDeleteSecurityProfileRequest <a name="aws-cdk-sdk.iot.IotDeleteSecurityProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteSecurityProfileRequest: iot.IotDeleteSecurityProfileRequest = { ... }
```

##### `securityProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteSecurityProfileRequest.property.securityProfileName"></a>

- *Type:* `string`

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteSecurityProfileRequest.property.expectedVersion"></a>

- *Type:* `number`

---

### IotDeleteSecurityProfileResponse <a name="aws-cdk-sdk.iot.IotDeleteSecurityProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteSecurityProfileResponse: iot.IotDeleteSecurityProfileResponse = { ... }
```

### IotDeleteStreamRequest <a name="aws-cdk-sdk.iot.IotDeleteStreamRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteStreamRequest: iot.IotDeleteStreamRequest = { ... }
```

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteStreamRequest.property.streamId"></a>

- *Type:* `string`

---

### IotDeleteStreamResponse <a name="aws-cdk-sdk.iot.IotDeleteStreamResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteStreamResponse: iot.IotDeleteStreamResponse = { ... }
```

### IotDeleteThingGroupRequest <a name="aws-cdk-sdk.iot.IotDeleteThingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteThingGroupRequest: iot.IotDeleteThingGroupRequest = { ... }
```

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteThingGroupRequest.property.thingGroupName"></a>

- *Type:* `string`

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteThingGroupRequest.property.expectedVersion"></a>

- *Type:* `number`

---

### IotDeleteThingGroupResponse <a name="aws-cdk-sdk.iot.IotDeleteThingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteThingGroupResponse: iot.IotDeleteThingGroupResponse = { ... }
```

### IotDeleteThingRequest <a name="aws-cdk-sdk.iot.IotDeleteThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteThingRequest: iot.IotDeleteThingRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteThingRequest.property.thingName"></a>

- *Type:* `string`

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeleteThingRequest.property.expectedVersion"></a>

- *Type:* `number`

---

### IotDeleteThingResponse <a name="aws-cdk-sdk.iot.IotDeleteThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteThingResponse: iot.IotDeleteThingResponse = { ... }
```

### IotDeleteThingTypeRequest <a name="aws-cdk-sdk.iot.IotDeleteThingTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteThingTypeRequest: iot.IotDeleteThingTypeRequest = { ... }
```

##### `thingTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteThingTypeRequest.property.thingTypeName"></a>

- *Type:* `string`

---

### IotDeleteThingTypeResponse <a name="aws-cdk-sdk.iot.IotDeleteThingTypeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteThingTypeResponse: iot.IotDeleteThingTypeResponse = { ... }
```

### IotDeleteTopicRuleDestinationRequest <a name="aws-cdk-sdk.iot.IotDeleteTopicRuleDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteTopicRuleDestinationRequest: iot.IotDeleteTopicRuleDestinationRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteTopicRuleDestinationRequest.property.arn"></a>

- *Type:* `string`

---

### IotDeleteTopicRuleDestinationResponse <a name="aws-cdk-sdk.iot.IotDeleteTopicRuleDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteTopicRuleDestinationResponse: iot.IotDeleteTopicRuleDestinationResponse = { ... }
```

### IotDeleteTopicRuleRequest <a name="aws-cdk-sdk.iot.IotDeleteTopicRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteTopicRuleRequest: iot.IotDeleteTopicRuleRequest = { ... }
```

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteTopicRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

### IotDeleteV2LoggingLevelRequest <a name="aws-cdk-sdk.iot.IotDeleteV2LoggingLevelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeleteV2LoggingLevelRequest: iot.IotDeleteV2LoggingLevelRequest = { ... }
```

##### `targetName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteV2LoggingLevelRequest.property.targetName"></a>

- *Type:* `string`

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeleteV2LoggingLevelRequest.property.targetType"></a>

- *Type:* `string`

---

### IotDenied <a name="aws-cdk-sdk.iot.IotDenied"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDenied: iot.IotDenied = { ... }
```

##### `explicitDeny`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDenied.property.explicitDeny"></a>

- *Type:* [`aws-cdk-sdk.iot.IotExplicitDeny`](#aws-cdk-sdk.iot.IotExplicitDeny)

---

##### `implicitDeny`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDenied.property.implicitDeny"></a>

- *Type:* [`aws-cdk-sdk.iot.IotImplicitDeny`](#aws-cdk-sdk.iot.IotImplicitDeny)

---

### IotDeprecateThingTypeRequest <a name="aws-cdk-sdk.iot.IotDeprecateThingTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeprecateThingTypeRequest: iot.IotDeprecateThingTypeRequest = { ... }
```

##### `thingTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDeprecateThingTypeRequest.property.thingTypeName"></a>

- *Type:* `string`

---

##### `undoDeprecate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDeprecateThingTypeRequest.property.undoDeprecate"></a>

- *Type:* `boolean`

---

### IotDeprecateThingTypeResponse <a name="aws-cdk-sdk.iot.IotDeprecateThingTypeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDeprecateThingTypeResponse: iot.IotDeprecateThingTypeResponse = { ... }
```

### IotDescribeAccountAuditConfigurationRequest <a name="aws-cdk-sdk.iot.IotDescribeAccountAuditConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAccountAuditConfigurationRequest: iot.IotDescribeAccountAuditConfigurationRequest = { ... }
```

### IotDescribeAccountAuditConfigurationResponse <a name="aws-cdk-sdk.iot.IotDescribeAccountAuditConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAccountAuditConfigurationResponse: iot.IotDescribeAccountAuditConfigurationResponse = { ... }
```

##### `auditCheckConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAccountAuditConfigurationResponse.property.auditCheckConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAuditCheckConfiguration`](#aws-cdk-sdk.iot.IotAuditCheckConfiguration)}

---

##### `auditNotificationTargetConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAccountAuditConfigurationResponse.property.auditNotificationTargetConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAuditNotificationTarget`](#aws-cdk-sdk.iot.IotAuditNotificationTarget)}

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAccountAuditConfigurationResponse.property.roleArn"></a>

- *Type:* `string`

---

### IotDescribeAuditFindingRequest <a name="aws-cdk-sdk.iot.IotDescribeAuditFindingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAuditFindingRequest: iot.IotDescribeAuditFindingRequest = { ... }
```

##### `findingId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditFindingRequest.property.findingId"></a>

- *Type:* `string`

---

### IotDescribeAuditFindingResponse <a name="aws-cdk-sdk.iot.IotDescribeAuditFindingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAuditFindingResponse: iot.IotDescribeAuditFindingResponse = { ... }
```

##### `finding`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditFindingResponse.property.finding"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditFinding`](#aws-cdk-sdk.iot.IotAuditFinding)

---

### IotDescribeAuditMitigationActionsTaskRequest <a name="aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAuditMitigationActionsTaskRequest: iot.IotDescribeAuditMitigationActionsTaskRequest = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskRequest.property.taskId"></a>

- *Type:* `string`

---

### IotDescribeAuditMitigationActionsTaskResponse <a name="aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAuditMitigationActionsTaskResponse: iot.IotDescribeAuditMitigationActionsTaskResponse = { ... }
```

##### `actionsDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskResponse.property.actionsDefinition"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMitigationAction`](#aws-cdk-sdk.iot.IotMitigationAction)[]

---

##### `auditCheckToActionsMapping`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskResponse.property.auditCheckToActionsMapping"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskResponse.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskResponse.property.startTime"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskResponse.property.target"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditMitigationActionsTaskTarget`](#aws-cdk-sdk.iot.IotAuditMitigationActionsTaskTarget)

---

##### `taskStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskResponse.property.taskStatistics"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotTaskStatisticsForAuditCheck`](#aws-cdk-sdk.iot.IotTaskStatisticsForAuditCheck)}

---

##### `taskStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskResponse.property.taskStatus"></a>

- *Type:* `string`

---

### IotDescribeAuditSuppressionRequest <a name="aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAuditSuppressionRequest: iot.IotDescribeAuditSuppressionRequest = { ... }
```

##### `checkName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest.property.checkName"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResourceIdentifier`](#aws-cdk-sdk.iot.IotResourceIdentifier)

---

### IotDescribeAuditSuppressionResponse <a name="aws-cdk-sdk.iot.IotDescribeAuditSuppressionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAuditSuppressionResponse: iot.IotDescribeAuditSuppressionResponse = { ... }
```

##### `checkName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditSuppressionResponse.property.checkName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditSuppressionResponse.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditSuppressionResponse.property.expirationDate"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditSuppressionResponse.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResourceIdentifier`](#aws-cdk-sdk.iot.IotResourceIdentifier)

---

##### `suppressIndefinitely`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditSuppressionResponse.property.suppressIndefinitely"></a>

- *Type:* `boolean`

---

### IotDescribeAuditTaskRequest <a name="aws-cdk-sdk.iot.IotDescribeAuditTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAuditTaskRequest: iot.IotDescribeAuditTaskRequest = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditTaskRequest.property.taskId"></a>

- *Type:* `string`

---

### IotDescribeAuditTaskResponse <a name="aws-cdk-sdk.iot.IotDescribeAuditTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAuditTaskResponse: iot.IotDescribeAuditTaskResponse = { ... }
```

##### `auditDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditTaskResponse.property.auditDetails"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAuditCheckDetails`](#aws-cdk-sdk.iot.IotAuditCheckDetails)}

---

##### `scheduledAuditName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditTaskResponse.property.scheduledAuditName"></a>

- *Type:* `string`

---

##### `taskStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditTaskResponse.property.taskStartTime"></a>

- *Type:* `string`

---

##### `taskStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditTaskResponse.property.taskStatistics"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTaskStatistics`](#aws-cdk-sdk.iot.IotTaskStatistics)

---

##### `taskStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditTaskResponse.property.taskStatus"></a>

- *Type:* `string`

---

##### `taskType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuditTaskResponse.property.taskType"></a>

- *Type:* `string`

---

### IotDescribeAuthorizerRequest <a name="aws-cdk-sdk.iot.IotDescribeAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAuthorizerRequest: iot.IotDescribeAuthorizerRequest = { ... }
```

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuthorizerRequest.property.authorizerName"></a>

- *Type:* `string`

---

### IotDescribeAuthorizerResponse <a name="aws-cdk-sdk.iot.IotDescribeAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeAuthorizerResponse: iot.IotDescribeAuthorizerResponse = { ... }
```

##### `authorizerDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeAuthorizerResponse.property.authorizerDescription"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthorizerDescription`](#aws-cdk-sdk.iot.IotAuthorizerDescription)

---

### IotDescribeBillingGroupRequest <a name="aws-cdk-sdk.iot.IotDescribeBillingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeBillingGroupRequest: iot.IotDescribeBillingGroupRequest = { ... }
```

##### `billingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeBillingGroupRequest.property.billingGroupName"></a>

- *Type:* `string`

---

### IotDescribeBillingGroupResponse <a name="aws-cdk-sdk.iot.IotDescribeBillingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeBillingGroupResponse: iot.IotDescribeBillingGroupResponse = { ... }
```

##### `billingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeBillingGroupResponse.property.billingGroupArn"></a>

- *Type:* `string`

---

##### `billingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeBillingGroupResponse.property.billingGroupId"></a>

- *Type:* `string`

---

##### `billingGroupMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeBillingGroupResponse.property.billingGroupMetadata"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBillingGroupMetadata`](#aws-cdk-sdk.iot.IotBillingGroupMetadata)

---

##### `billingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeBillingGroupResponse.property.billingGroupName"></a>

- *Type:* `string`

---

##### `billingGroupProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeBillingGroupResponse.property.billingGroupProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBillingGroupProperties`](#aws-cdk-sdk.iot.IotBillingGroupProperties)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeBillingGroupResponse.property.version"></a>

- *Type:* `number`

---

### IotDescribeCaCertificateRequest <a name="aws-cdk-sdk.iot.IotDescribeCaCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeCaCertificateRequest: iot.IotDescribeCaCertificateRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeCaCertificateRequest.property.certificateId"></a>

- *Type:* `string`

---

### IotDescribeCaCertificateResponse <a name="aws-cdk-sdk.iot.IotDescribeCaCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeCaCertificateResponse: iot.IotDescribeCaCertificateResponse = { ... }
```

##### `certificateDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeCaCertificateResponse.property.certificateDescription"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCaCertificateDescription`](#aws-cdk-sdk.iot.IotCaCertificateDescription)

---

##### `registrationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeCaCertificateResponse.property.registrationConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegistrationConfig`](#aws-cdk-sdk.iot.IotRegistrationConfig)

---

### IotDescribeCertificateRequest <a name="aws-cdk-sdk.iot.IotDescribeCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeCertificateRequest: iot.IotDescribeCertificateRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeCertificateRequest.property.certificateId"></a>

- *Type:* `string`

---

### IotDescribeCertificateResponse <a name="aws-cdk-sdk.iot.IotDescribeCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeCertificateResponse: iot.IotDescribeCertificateResponse = { ... }
```

##### `certificateDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeCertificateResponse.property.certificateDescription"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCertificateDescription`](#aws-cdk-sdk.iot.IotCertificateDescription)

---

### IotDescribeDefaultAuthorizerRequest <a name="aws-cdk-sdk.iot.IotDescribeDefaultAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeDefaultAuthorizerRequest: iot.IotDescribeDefaultAuthorizerRequest = { ... }
```

### IotDescribeDefaultAuthorizerResponse <a name="aws-cdk-sdk.iot.IotDescribeDefaultAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeDefaultAuthorizerResponse: iot.IotDescribeDefaultAuthorizerResponse = { ... }
```

##### `authorizerDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDefaultAuthorizerResponse.property.authorizerDescription"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthorizerDescription`](#aws-cdk-sdk.iot.IotAuthorizerDescription)

---

### IotDescribeDimensionRequest <a name="aws-cdk-sdk.iot.IotDescribeDimensionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeDimensionRequest: iot.IotDescribeDimensionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeDimensionRequest.property.name"></a>

- *Type:* `string`

---

### IotDescribeDimensionResponse <a name="aws-cdk-sdk.iot.IotDescribeDimensionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeDimensionResponse: iot.IotDescribeDimensionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDimensionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDimensionResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDimensionResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDimensionResponse.property.name"></a>

- *Type:* `string`

---

##### `stringValues`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDimensionResponse.property.stringValues"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDimensionResponse.property.type"></a>

- *Type:* `string`

---

### IotDescribeDomainConfigurationRequest <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeDomainConfigurationRequest: iot.IotDescribeDomainConfigurationRequest = { ... }
```

##### `domainConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationRequest.property.domainConfigurationName"></a>

- *Type:* `string`

---

### IotDescribeDomainConfigurationResponse <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeDomainConfigurationResponse: iot.IotDescribeDomainConfigurationResponse = { ... }
```

##### `authorizerConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationResponse.property.authorizerConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthorizerConfig`](#aws-cdk-sdk.iot.IotAuthorizerConfig)

---

##### `domainConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationResponse.property.domainConfigurationArn"></a>

- *Type:* `string`

---

##### `domainConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationResponse.property.domainConfigurationName"></a>

- *Type:* `string`

---

##### `domainConfigurationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationResponse.property.domainConfigurationStatus"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationResponse.property.domainName"></a>

- *Type:* `string`

---

##### `domainType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationResponse.property.domainType"></a>

- *Type:* `string`

---

##### `lastStatusChangeDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationResponse.property.lastStatusChangeDate"></a>

- *Type:* `string`

---

##### `serverCertificates`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationResponse.property.serverCertificates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotServerCertificateSummary`](#aws-cdk-sdk.iot.IotServerCertificateSummary)[]

---

##### `serviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeDomainConfigurationResponse.property.serviceType"></a>

- *Type:* `string`

---

### IotDescribeEndpointRequest <a name="aws-cdk-sdk.iot.IotDescribeEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeEndpointRequest: iot.IotDescribeEndpointRequest = { ... }
```

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeEndpointRequest.property.endpointType"></a>

- *Type:* `string`

---

### IotDescribeEndpointResponse <a name="aws-cdk-sdk.iot.IotDescribeEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeEndpointResponse: iot.IotDescribeEndpointResponse = { ... }
```

##### `endpointAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeEndpointResponse.property.endpointAddress"></a>

- *Type:* `string`

---

### IotDescribeEventConfigurationsRequest <a name="aws-cdk-sdk.iot.IotDescribeEventConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeEventConfigurationsRequest: iot.IotDescribeEventConfigurationsRequest = { ... }
```

### IotDescribeEventConfigurationsResponse <a name="aws-cdk-sdk.iot.IotDescribeEventConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeEventConfigurationsResponse: iot.IotDescribeEventConfigurationsResponse = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeEventConfigurationsResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `eventConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeEventConfigurationsResponse.property.eventConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotConfiguration`](#aws-cdk-sdk.iot.IotConfiguration)}

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeEventConfigurationsResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

### IotDescribeIndexRequest <a name="aws-cdk-sdk.iot.IotDescribeIndexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeIndexRequest: iot.IotDescribeIndexRequest = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeIndexRequest.property.indexName"></a>

- *Type:* `string`

---

### IotDescribeIndexResponse <a name="aws-cdk-sdk.iot.IotDescribeIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeIndexResponse: iot.IotDescribeIndexResponse = { ... }
```

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeIndexResponse.property.indexName"></a>

- *Type:* `string`

---

##### `indexStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeIndexResponse.property.indexStatus"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeIndexResponse.property.schema"></a>

- *Type:* `string`

---

### IotDescribeJobExecutionRequest <a name="aws-cdk-sdk.iot.IotDescribeJobExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeJobExecutionRequest: iot.IotDescribeJobExecutionRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeJobExecutionRequest.property.jobId"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeJobExecutionRequest.property.thingName"></a>

- *Type:* `string`

---

##### `executionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeJobExecutionRequest.property.executionNumber"></a>

- *Type:* `number`

---

### IotDescribeJobExecutionResponse <a name="aws-cdk-sdk.iot.IotDescribeJobExecutionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeJobExecutionResponse: iot.IotDescribeJobExecutionResponse = { ... }
```

##### `execution`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeJobExecutionResponse.property.execution"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecution`](#aws-cdk-sdk.iot.IotJobExecution)

---

### IotDescribeJobRequest <a name="aws-cdk-sdk.iot.IotDescribeJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeJobRequest: iot.IotDescribeJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeJobRequest.property.jobId"></a>

- *Type:* `string`

---

### IotDescribeJobResponse <a name="aws-cdk-sdk.iot.IotDescribeJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeJobResponse: iot.IotDescribeJobResponse = { ... }
```

##### `documentSource`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeJobResponse.property.documentSource"></a>

- *Type:* `string`

---

##### `job`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeJobResponse.property.job"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJob`](#aws-cdk-sdk.iot.IotJob)

---

### IotDescribeMitigationActionRequest <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeMitigationActionRequest: iot.IotDescribeMitigationActionRequest = { ... }
```

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionRequest.property.actionName"></a>

- *Type:* `string`

---

### IotDescribeMitigationActionResponse <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeMitigationActionResponse: iot.IotDescribeMitigationActionResponse = { ... }
```

##### `actionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionResponse.property.actionArn"></a>

- *Type:* `string`

---

##### `actionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionResponse.property.actionId"></a>

- *Type:* `string`

---

##### `actionName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionResponse.property.actionName"></a>

- *Type:* `string`

---

##### `actionParams`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionResponse.property.actionParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMitigationActionParams`](#aws-cdk-sdk.iot.IotMitigationActionParams)

---

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionResponse.property.actionType"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeMitigationActionResponse.property.roleArn"></a>

- *Type:* `string`

---

### IotDescribeProvisioningTemplateRequest <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeProvisioningTemplateRequest: iot.IotDescribeProvisioningTemplateRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

### IotDescribeProvisioningTemplateResponse <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeProvisioningTemplateResponse: iot.IotDescribeProvisioningTemplateResponse = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse.property.defaultVersionId"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse.property.enabled"></a>

- *Type:* `boolean`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `preProvisioningHook`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse.property.preProvisioningHook"></a>

- *Type:* [`aws-cdk-sdk.iot.IotProvisioningHook`](#aws-cdk-sdk.iot.IotProvisioningHook)

---

##### `provisioningRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse.property.provisioningRoleArn"></a>

- *Type:* `string`

---

##### `templateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse.property.templateArn"></a>

- *Type:* `string`

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse.property.templateBody"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateResponse.property.templateName"></a>

- *Type:* `string`

---

### IotDescribeProvisioningTemplateVersionRequest <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeProvisioningTemplateVersionRequest: iot.IotDescribeProvisioningTemplateVersionRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionRequest.property.templateName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionRequest.property.versionId"></a>

- *Type:* `number`

---

### IotDescribeProvisioningTemplateVersionResponse <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeProvisioningTemplateVersionResponse: iot.IotDescribeProvisioningTemplateVersionResponse = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionResponse.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionResponse.property.templateBody"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionResponse.property.versionId"></a>

- *Type:* `number`

---

### IotDescribeRoleAliasRequest <a name="aws-cdk-sdk.iot.IotDescribeRoleAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeRoleAliasRequest: iot.IotDescribeRoleAliasRequest = { ... }
```

##### `roleAlias`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeRoleAliasRequest.property.roleAlias"></a>

- *Type:* `string`

---

### IotDescribeRoleAliasResponse <a name="aws-cdk-sdk.iot.IotDescribeRoleAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeRoleAliasResponse: iot.IotDescribeRoleAliasResponse = { ... }
```

##### `roleAliasDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeRoleAliasResponse.property.roleAliasDescription"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRoleAliasDescription`](#aws-cdk-sdk.iot.IotRoleAliasDescription)

---

### IotDescribeScheduledAuditRequest <a name="aws-cdk-sdk.iot.IotDescribeScheduledAuditRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeScheduledAuditRequest: iot.IotDescribeScheduledAuditRequest = { ... }
```

##### `scheduledAuditName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeScheduledAuditRequest.property.scheduledAuditName"></a>

- *Type:* `string`

---

### IotDescribeScheduledAuditResponse <a name="aws-cdk-sdk.iot.IotDescribeScheduledAuditResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeScheduledAuditResponse: iot.IotDescribeScheduledAuditResponse = { ... }
```

##### `dayOfMonth`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeScheduledAuditResponse.property.dayOfMonth"></a>

- *Type:* `string`

---

##### `dayOfWeek`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeScheduledAuditResponse.property.dayOfWeek"></a>

- *Type:* `string`

---

##### `frequency`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeScheduledAuditResponse.property.frequency"></a>

- *Type:* `string`

---

##### `scheduledAuditArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeScheduledAuditResponse.property.scheduledAuditArn"></a>

- *Type:* `string`

---

##### `scheduledAuditName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeScheduledAuditResponse.property.scheduledAuditName"></a>

- *Type:* `string`

---

##### `targetCheckNames`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeScheduledAuditResponse.property.targetCheckNames"></a>

- *Type:* `string`[]

---

### IotDescribeSecurityProfileRequest <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeSecurityProfileRequest: iot.IotDescribeSecurityProfileRequest = { ... }
```

##### `securityProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileRequest.property.securityProfileName"></a>

- *Type:* `string`

---

### IotDescribeSecurityProfileResponse <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeSecurityProfileResponse: iot.IotDescribeSecurityProfileResponse = { ... }
```

##### `additionalMetricsToRetain`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse.property.additionalMetricsToRetain"></a>

- *Type:* `string`[]

---

##### `additionalMetricsToRetainV2`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse.property.additionalMetricsToRetainV2"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricToRetain`](#aws-cdk-sdk.iot.IotMetricToRetain)[]

---

##### `alertTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse.property.alertTargets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAlertTarget`](#aws-cdk-sdk.iot.IotAlertTarget)}

---

##### `behaviors`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse.property.behaviors"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBehavior`](#aws-cdk-sdk.iot.IotBehavior)[]

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `securityProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse.property.securityProfileArn"></a>

- *Type:* `string`

---

##### `securityProfileDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse.property.securityProfileDescription"></a>

- *Type:* `string`

---

##### `securityProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse.property.securityProfileName"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeSecurityProfileResponse.property.version"></a>

- *Type:* `number`

---

### IotDescribeStreamRequest <a name="aws-cdk-sdk.iot.IotDescribeStreamRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeStreamRequest: iot.IotDescribeStreamRequest = { ... }
```

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeStreamRequest.property.streamId"></a>

- *Type:* `string`

---

### IotDescribeStreamResponse <a name="aws-cdk-sdk.iot.IotDescribeStreamResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeStreamResponse: iot.IotDescribeStreamResponse = { ... }
```

##### `streamInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeStreamResponse.property.streamInfo"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStreamInfo`](#aws-cdk-sdk.iot.IotStreamInfo)

---

### IotDescribeThingGroupRequest <a name="aws-cdk-sdk.iot.IotDescribeThingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeThingGroupRequest: iot.IotDescribeThingGroupRequest = { ... }
```

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupRequest.property.thingGroupName"></a>

- *Type:* `string`

---

### IotDescribeThingGroupResponse <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeThingGroupResponse: iot.IotDescribeThingGroupResponse = { ... }
```

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse.property.indexName"></a>

- *Type:* `string`

---

##### `queryString`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse.property.queryString"></a>

- *Type:* `string`

---

##### `queryVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse.property.queryVersion"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse.property.status"></a>

- *Type:* `string`

---

##### `thingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse.property.thingGroupArn"></a>

- *Type:* `string`

---

##### `thingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse.property.thingGroupId"></a>

- *Type:* `string`

---

##### `thingGroupMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse.property.thingGroupMetadata"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingGroupMetadata`](#aws-cdk-sdk.iot.IotThingGroupMetadata)

---

##### `thingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse.property.thingGroupName"></a>

- *Type:* `string`

---

##### `thingGroupProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse.property.thingGroupProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingGroupProperties`](#aws-cdk-sdk.iot.IotThingGroupProperties)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingGroupResponse.property.version"></a>

- *Type:* `number`

---

### IotDescribeThingRegistrationTaskRequest <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeThingRegistrationTaskRequest: iot.IotDescribeThingRegistrationTaskRequest = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskRequest.property.taskId"></a>

- *Type:* `string`

---

### IotDescribeThingRegistrationTaskResponse <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeThingRegistrationTaskResponse: iot.IotDescribeThingRegistrationTaskResponse = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `failureCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.failureCount"></a>

- *Type:* `number`

---

##### `inputFileBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.inputFileBucket"></a>

- *Type:* `string`

---

##### `inputFileKey`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.inputFileKey"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.message"></a>

- *Type:* `string`

---

##### `percentageProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.percentageProgress"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.status"></a>

- *Type:* `string`

---

##### `successCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.successCount"></a>

- *Type:* `number`

---

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.taskId"></a>

- *Type:* `string`

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskResponse.property.templateBody"></a>

- *Type:* `string`

---

### IotDescribeThingRequest <a name="aws-cdk-sdk.iot.IotDescribeThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeThingRequest: iot.IotDescribeThingRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingRequest.property.thingName"></a>

- *Type:* `string`

---

### IotDescribeThingResponse <a name="aws-cdk-sdk.iot.IotDescribeThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeThingResponse: iot.IotDescribeThingResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingResponse.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `billingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingResponse.property.billingGroupName"></a>

- *Type:* `string`

---

##### `defaultClientId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingResponse.property.defaultClientId"></a>

- *Type:* `string`

---

##### `thingArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingResponse.property.thingArn"></a>

- *Type:* `string`

---

##### `thingId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingResponse.property.thingId"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingResponse.property.thingName"></a>

- *Type:* `string`

---

##### `thingTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingResponse.property.thingTypeName"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingResponse.property.version"></a>

- *Type:* `number`

---

### IotDescribeThingTypeRequest <a name="aws-cdk-sdk.iot.IotDescribeThingTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeThingTypeRequest: iot.IotDescribeThingTypeRequest = { ... }
```

##### `thingTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingTypeRequest.property.thingTypeName"></a>

- *Type:* `string`

---

### IotDescribeThingTypeResponse <a name="aws-cdk-sdk.iot.IotDescribeThingTypeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDescribeThingTypeResponse: iot.IotDescribeThingTypeResponse = { ... }
```

##### `thingTypeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingTypeResponse.property.thingTypeArn"></a>

- *Type:* `string`

---

##### `thingTypeId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingTypeResponse.property.thingTypeId"></a>

- *Type:* `string`

---

##### `thingTypeMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingTypeResponse.property.thingTypeMetadata"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingTypeMetadata`](#aws-cdk-sdk.iot.IotThingTypeMetadata)

---

##### `thingTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingTypeResponse.property.thingTypeName"></a>

- *Type:* `string`

---

##### `thingTypeProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDescribeThingTypeResponse.property.thingTypeProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingTypeProperties`](#aws-cdk-sdk.iot.IotThingTypeProperties)

---

### IotDestination <a name="aws-cdk-sdk.iot.IotDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDestination: iot.IotDestination = { ... }
```

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDestination.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.iot.IotS3Destination`](#aws-cdk-sdk.iot.IotS3Destination)

---

### IotDetachPolicyRequest <a name="aws-cdk-sdk.iot.IotDetachPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDetachPolicyRequest: iot.IotDetachPolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDetachPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDetachPolicyRequest.property.target"></a>

- *Type:* `string`

---

### IotDetachPrincipalPolicyRequest <a name="aws-cdk-sdk.iot.IotDetachPrincipalPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDetachPrincipalPolicyRequest: iot.IotDetachPrincipalPolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDetachPrincipalPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDetachPrincipalPolicyRequest.property.principal"></a>

- *Type:* `string`

---

### IotDetachSecurityProfileRequest <a name="aws-cdk-sdk.iot.IotDetachSecurityProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDetachSecurityProfileRequest: iot.IotDetachSecurityProfileRequest = { ... }
```

##### `securityProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDetachSecurityProfileRequest.property.securityProfileName"></a>

- *Type:* `string`

---

##### `securityProfileTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDetachSecurityProfileRequest.property.securityProfileTargetArn"></a>

- *Type:* `string`

---

### IotDetachSecurityProfileResponse <a name="aws-cdk-sdk.iot.IotDetachSecurityProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDetachSecurityProfileResponse: iot.IotDetachSecurityProfileResponse = { ... }
```

### IotDetachThingPrincipalRequest <a name="aws-cdk-sdk.iot.IotDetachThingPrincipalRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDetachThingPrincipalRequest: iot.IotDetachThingPrincipalRequest = { ... }
```

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDetachThingPrincipalRequest.property.principal"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDetachThingPrincipalRequest.property.thingName"></a>

- *Type:* `string`

---

### IotDetachThingPrincipalResponse <a name="aws-cdk-sdk.iot.IotDetachThingPrincipalResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDetachThingPrincipalResponse: iot.IotDetachThingPrincipalResponse = { ... }
```

### IotDisableTopicRuleRequest <a name="aws-cdk-sdk.iot.IotDisableTopicRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDisableTopicRuleRequest: iot.IotDisableTopicRuleRequest = { ... }
```

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDisableTopicRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

### IotDomainConfigurationSummary <a name="aws-cdk-sdk.iot.IotDomainConfigurationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDomainConfigurationSummary: iot.IotDomainConfigurationSummary = { ... }
```

##### `domainConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDomainConfigurationSummary.property.domainConfigurationArn"></a>

- *Type:* `string`

---

##### `domainConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDomainConfigurationSummary.property.domainConfigurationName"></a>

- *Type:* `string`

---

##### `serviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDomainConfigurationSummary.property.serviceType"></a>

- *Type:* `string`

---

### IotDynamoDbAction <a name="aws-cdk-sdk.iot.IotDynamoDbAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDynamoDbAction: iot.IotDynamoDbAction = { ... }
```

##### `hashKeyField`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDynamoDbAction.property.hashKeyField"></a>

- *Type:* `string`

---

##### `hashKeyValue`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDynamoDbAction.property.hashKeyValue"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDynamoDbAction.property.roleArn"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDynamoDbAction.property.tableName"></a>

- *Type:* `string`

---

##### `hashKeyType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDynamoDbAction.property.hashKeyType"></a>

- *Type:* `string`

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDynamoDbAction.property.operation"></a>

- *Type:* `string`

---

##### `payloadField`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDynamoDbAction.property.payloadField"></a>

- *Type:* `string`

---

##### `rangeKeyField`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDynamoDbAction.property.rangeKeyField"></a>

- *Type:* `string`

---

##### `rangeKeyType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDynamoDbAction.property.rangeKeyType"></a>

- *Type:* `string`

---

##### `rangeKeyValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotDynamoDbAction.property.rangeKeyValue"></a>

- *Type:* `string`

---

### IotDynamoDBv2Action <a name="aws-cdk-sdk.iot.IotDynamoDBv2Action"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotDynamoDBv2Action: iot.IotDynamoDBv2Action = { ... }
```

##### `putItem`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDynamoDBv2Action.property.putItem"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPutItemInput`](#aws-cdk-sdk.iot.IotPutItemInput)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotDynamoDBv2Action.property.roleArn"></a>

- *Type:* `string`

---

### IotEffectivePolicy <a name="aws-cdk-sdk.iot.IotEffectivePolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotEffectivePolicy: iot.IotEffectivePolicy = { ... }
```

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotEffectivePolicy.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotEffectivePolicy.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotEffectivePolicy.property.policyName"></a>

- *Type:* `string`

---

### IotElasticsearchAction <a name="aws-cdk-sdk.iot.IotElasticsearchAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotElasticsearchAction: iot.IotElasticsearchAction = { ... }
```

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotElasticsearchAction.property.endpoint"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotElasticsearchAction.property.id"></a>

- *Type:* `string`

---

##### `index`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotElasticsearchAction.property.index"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotElasticsearchAction.property.roleArn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotElasticsearchAction.property.type"></a>

- *Type:* `string`

---

### IotEnableIoTLoggingParams <a name="aws-cdk-sdk.iot.IotEnableIoTLoggingParams"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotEnableIoTLoggingParams: iot.IotEnableIoTLoggingParams = { ... }
```

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotEnableIoTLoggingParams.property.logLevel"></a>

- *Type:* `string`

---

##### `roleArnForLogging`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotEnableIoTLoggingParams.property.roleArnForLogging"></a>

- *Type:* `string`

---

### IotEnableTopicRuleRequest <a name="aws-cdk-sdk.iot.IotEnableTopicRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotEnableTopicRuleRequest: iot.IotEnableTopicRuleRequest = { ... }
```

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotEnableTopicRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

### IotErrorInfo <a name="aws-cdk-sdk.iot.IotErrorInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotErrorInfo: iot.IotErrorInfo = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotErrorInfo.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotErrorInfo.property.message"></a>

- *Type:* `string`

---

### IotExplicitDeny <a name="aws-cdk-sdk.iot.IotExplicitDeny"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotExplicitDeny: iot.IotExplicitDeny = { ... }
```

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotExplicitDeny.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicy`](#aws-cdk-sdk.iot.IotPolicy)[]

---

### IotExponentialRolloutRate <a name="aws-cdk-sdk.iot.IotExponentialRolloutRate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotExponentialRolloutRate: iot.IotExponentialRolloutRate = { ... }
```

##### `baseRatePerMinute`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotExponentialRolloutRate.property.baseRatePerMinute"></a>

- *Type:* `number`

---

##### `incrementFactor`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotExponentialRolloutRate.property.incrementFactor"></a>

- *Type:* `number`

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotExponentialRolloutRate.property.rateIncreaseCriteria"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRateIncreaseCriteria`](#aws-cdk-sdk.iot.IotRateIncreaseCriteria)

---

### IotField <a name="aws-cdk-sdk.iot.IotField"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotField: iot.IotField = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotField.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotField.property.type"></a>

- *Type:* `string`

---

### IotFileLocation <a name="aws-cdk-sdk.iot.IotFileLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotFileLocation: iot.IotFileLocation = { ... }
```

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotFileLocation.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.iot.IotS3Location`](#aws-cdk-sdk.iot.IotS3Location)

---

##### `stream`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotFileLocation.property.stream"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStream`](#aws-cdk-sdk.iot.IotStream)

---

### IotFirehoseAction <a name="aws-cdk-sdk.iot.IotFirehoseAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotFirehoseAction: iot.IotFirehoseAction = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotFirehoseAction.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotFirehoseAction.property.roleArn"></a>

- *Type:* `string`

---

##### `batchMode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotFirehoseAction.property.batchMode"></a>

- *Type:* `boolean`

---

##### `separator`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotFirehoseAction.property.separator"></a>

- *Type:* `string`

---

### IotGetCardinalityRequest <a name="aws-cdk-sdk.iot.IotGetCardinalityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetCardinalityRequest: iot.IotGetCardinalityRequest = { ... }
```

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotGetCardinalityRequest.property.queryString"></a>

- *Type:* `string`

---

##### `aggregationField`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetCardinalityRequest.property.aggregationField"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetCardinalityRequest.property.indexName"></a>

- *Type:* `string`

---

##### `queryVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetCardinalityRequest.property.queryVersion"></a>

- *Type:* `string`

---

### IotGetCardinalityResponse <a name="aws-cdk-sdk.iot.IotGetCardinalityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetCardinalityResponse: iot.IotGetCardinalityResponse = { ... }
```

##### `cardinality`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetCardinalityResponse.property.cardinality"></a>

- *Type:* `number`

---

### IotGetEffectivePoliciesRequest <a name="aws-cdk-sdk.iot.IotGetEffectivePoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetEffectivePoliciesRequest: iot.IotGetEffectivePoliciesRequest = { ... }
```

##### `cognitoIdentityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetEffectivePoliciesRequest.property.cognitoIdentityPoolId"></a>

- *Type:* `string`

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetEffectivePoliciesRequest.property.principal"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetEffectivePoliciesRequest.property.thingName"></a>

- *Type:* `string`

---

### IotGetEffectivePoliciesResponse <a name="aws-cdk-sdk.iot.IotGetEffectivePoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetEffectivePoliciesResponse: iot.IotGetEffectivePoliciesResponse = { ... }
```

##### `effectivePolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetEffectivePoliciesResponse.property.effectivePolicies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotEffectivePolicy`](#aws-cdk-sdk.iot.IotEffectivePolicy)[]

---

### IotGetIndexingConfigurationRequest <a name="aws-cdk-sdk.iot.IotGetIndexingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetIndexingConfigurationRequest: iot.IotGetIndexingConfigurationRequest = { ... }
```

### IotGetIndexingConfigurationResponse <a name="aws-cdk-sdk.iot.IotGetIndexingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetIndexingConfigurationResponse: iot.IotGetIndexingConfigurationResponse = { ... }
```

##### `thingGroupIndexingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetIndexingConfigurationResponse.property.thingGroupIndexingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingGroupIndexingConfiguration`](#aws-cdk-sdk.iot.IotThingGroupIndexingConfiguration)

---

##### `thingIndexingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetIndexingConfigurationResponse.property.thingIndexingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingIndexingConfiguration`](#aws-cdk-sdk.iot.IotThingIndexingConfiguration)

---

### IotGetJobDocumentRequest <a name="aws-cdk-sdk.iot.IotGetJobDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetJobDocumentRequest: iot.IotGetJobDocumentRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotGetJobDocumentRequest.property.jobId"></a>

- *Type:* `string`

---

### IotGetJobDocumentResponse <a name="aws-cdk-sdk.iot.IotGetJobDocumentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetJobDocumentResponse: iot.IotGetJobDocumentResponse = { ... }
```

##### `document`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetJobDocumentResponse.property.document"></a>

- *Type:* `string`

---

### IotGetLoggingOptionsRequest <a name="aws-cdk-sdk.iot.IotGetLoggingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetLoggingOptionsRequest: iot.IotGetLoggingOptionsRequest = { ... }
```

### IotGetLoggingOptionsResponse <a name="aws-cdk-sdk.iot.IotGetLoggingOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetLoggingOptionsResponse: iot.IotGetLoggingOptionsResponse = { ... }
```

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetLoggingOptionsResponse.property.logLevel"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetLoggingOptionsResponse.property.roleArn"></a>

- *Type:* `string`

---

### IotGetOtaUpdateRequest <a name="aws-cdk-sdk.iot.IotGetOtaUpdateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetOtaUpdateRequest: iot.IotGetOtaUpdateRequest = { ... }
```

##### `otaUpdateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotGetOtaUpdateRequest.property.otaUpdateId"></a>

- *Type:* `string`

---

### IotGetOtaUpdateResponse <a name="aws-cdk-sdk.iot.IotGetOtaUpdateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetOtaUpdateResponse: iot.IotGetOtaUpdateResponse = { ... }
```

##### `otaUpdateInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetOtaUpdateResponse.property.otaUpdateInfo"></a>

- *Type:* [`aws-cdk-sdk.iot.IotOtaUpdateInfo`](#aws-cdk-sdk.iot.IotOtaUpdateInfo)

---

### IotGetPercentilesRequest <a name="aws-cdk-sdk.iot.IotGetPercentilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetPercentilesRequest: iot.IotGetPercentilesRequest = { ... }
```

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotGetPercentilesRequest.property.queryString"></a>

- *Type:* `string`

---

##### `aggregationField`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPercentilesRequest.property.aggregationField"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPercentilesRequest.property.indexName"></a>

- *Type:* `string`

---

##### `percents`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPercentilesRequest.property.percents"></a>

- *Type:* `number`[]

---

##### `queryVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPercentilesRequest.property.queryVersion"></a>

- *Type:* `string`

---

### IotGetPercentilesResponse <a name="aws-cdk-sdk.iot.IotGetPercentilesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetPercentilesResponse: iot.IotGetPercentilesResponse = { ... }
```

##### `percentiles`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPercentilesResponse.property.percentiles"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPercentPair`](#aws-cdk-sdk.iot.IotPercentPair)[]

---

### IotGetPolicyRequest <a name="aws-cdk-sdk.iot.IotGetPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetPolicyRequest: iot.IotGetPolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

### IotGetPolicyResponse <a name="aws-cdk-sdk.iot.IotGetPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetPolicyResponse: iot.IotGetPolicyResponse = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyResponse.property.defaultVersionId"></a>

- *Type:* `string`

---

##### `generationId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyResponse.property.generationId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyResponse.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyResponse.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyResponse.property.policyName"></a>

- *Type:* `string`

---

### IotGetPolicyVersionRequest <a name="aws-cdk-sdk.iot.IotGetPolicyVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetPolicyVersionRequest: iot.IotGetPolicyVersionRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyVersionRequest.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyVersionRequest.property.policyVersionId"></a>

- *Type:* `string`

---

### IotGetPolicyVersionResponse <a name="aws-cdk-sdk.iot.IotGetPolicyVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetPolicyVersionResponse: iot.IotGetPolicyVersionResponse = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyVersionResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `generationId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyVersionResponse.property.generationId"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyVersionResponse.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyVersionResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyVersionResponse.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyVersionResponse.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyVersionResponse.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetPolicyVersionResponse.property.policyVersionId"></a>

- *Type:* `string`

---

### IotGetRegistrationCodeRequest <a name="aws-cdk-sdk.iot.IotGetRegistrationCodeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetRegistrationCodeRequest: iot.IotGetRegistrationCodeRequest = { ... }
```

### IotGetRegistrationCodeResponse <a name="aws-cdk-sdk.iot.IotGetRegistrationCodeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetRegistrationCodeResponse: iot.IotGetRegistrationCodeResponse = { ... }
```

##### `registrationCode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetRegistrationCodeResponse.property.registrationCode"></a>

- *Type:* `string`

---

### IotGetStatisticsRequest <a name="aws-cdk-sdk.iot.IotGetStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetStatisticsRequest: iot.IotGetStatisticsRequest = { ... }
```

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotGetStatisticsRequest.property.queryString"></a>

- *Type:* `string`

---

##### `aggregationField`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetStatisticsRequest.property.aggregationField"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetStatisticsRequest.property.indexName"></a>

- *Type:* `string`

---

##### `queryVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetStatisticsRequest.property.queryVersion"></a>

- *Type:* `string`

---

### IotGetStatisticsResponse <a name="aws-cdk-sdk.iot.IotGetStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetStatisticsResponse: iot.IotGetStatisticsResponse = { ... }
```

##### `statistics`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetStatisticsResponse.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStatistics`](#aws-cdk-sdk.iot.IotStatistics)

---

### IotGetTopicRuleDestinationRequest <a name="aws-cdk-sdk.iot.IotGetTopicRuleDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetTopicRuleDestinationRequest: iot.IotGetTopicRuleDestinationRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotGetTopicRuleDestinationRequest.property.arn"></a>

- *Type:* `string`

---

### IotGetTopicRuleDestinationResponse <a name="aws-cdk-sdk.iot.IotGetTopicRuleDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetTopicRuleDestinationResponse: iot.IotGetTopicRuleDestinationResponse = { ... }
```

##### `topicRuleDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetTopicRuleDestinationResponse.property.topicRuleDestination"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTopicRuleDestination`](#aws-cdk-sdk.iot.IotTopicRuleDestination)

---

### IotGetTopicRuleRequest <a name="aws-cdk-sdk.iot.IotGetTopicRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetTopicRuleRequest: iot.IotGetTopicRuleRequest = { ... }
```

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotGetTopicRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

### IotGetTopicRuleResponse <a name="aws-cdk-sdk.iot.IotGetTopicRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetTopicRuleResponse: iot.IotGetTopicRuleResponse = { ... }
```

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetTopicRuleResponse.property.rule"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTopicRule`](#aws-cdk-sdk.iot.IotTopicRule)

---

##### `ruleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetTopicRuleResponse.property.ruleArn"></a>

- *Type:* `string`

---

### IotGetV2LoggingOptionsRequest <a name="aws-cdk-sdk.iot.IotGetV2LoggingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetV2LoggingOptionsRequest: iot.IotGetV2LoggingOptionsRequest = { ... }
```

### IotGetV2LoggingOptionsResponse <a name="aws-cdk-sdk.iot.IotGetV2LoggingOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGetV2LoggingOptionsResponse: iot.IotGetV2LoggingOptionsResponse = { ... }
```

##### `defaultLogLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetV2LoggingOptionsResponse.property.defaultLogLevel"></a>

- *Type:* `string`

---

##### `disableAllLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetV2LoggingOptionsResponse.property.disableAllLogs"></a>

- *Type:* `boolean`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGetV2LoggingOptionsResponse.property.roleArn"></a>

- *Type:* `string`

---

### IotGroupNameAndArn <a name="aws-cdk-sdk.iot.IotGroupNameAndArn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotGroupNameAndArn: iot.IotGroupNameAndArn = { ... }
```

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGroupNameAndArn.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotGroupNameAndArn.property.groupName"></a>

- *Type:* `string`

---

### IotHttpAction <a name="aws-cdk-sdk.iot.IotHttpAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotHttpAction: iot.IotHttpAction = { ... }
```

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotHttpAction.property.url"></a>

- *Type:* `string`

---

##### `auth`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotHttpAction.property.auth"></a>

- *Type:* [`aws-cdk-sdk.iot.IotHttpAuthorization`](#aws-cdk-sdk.iot.IotHttpAuthorization)

---

##### `confirmationUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotHttpAction.property.confirmationUrl"></a>

- *Type:* `string`

---

##### `headers`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotHttpAction.property.headers"></a>

- *Type:* [`aws-cdk-sdk.iot.IotHttpActionHeader`](#aws-cdk-sdk.iot.IotHttpActionHeader)[]

---

### IotHttpActionHeader <a name="aws-cdk-sdk.iot.IotHttpActionHeader"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotHttpActionHeader: iot.IotHttpActionHeader = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotHttpActionHeader.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotHttpActionHeader.property.value"></a>

- *Type:* `string`

---

### IotHttpAuthorization <a name="aws-cdk-sdk.iot.IotHttpAuthorization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotHttpAuthorization: iot.IotHttpAuthorization = { ... }
```

##### `sigv4`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotHttpAuthorization.property.sigv4"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSigV4Authorization`](#aws-cdk-sdk.iot.IotSigV4Authorization)

---

### IotHttpContext <a name="aws-cdk-sdk.iot.IotHttpContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotHttpContext: iot.IotHttpContext = { ... }
```

##### `headers`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotHttpContext.property.headers"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `queryString`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotHttpContext.property.queryString"></a>

- *Type:* `string`

---

### IotHttpUrlDestinationConfiguration <a name="aws-cdk-sdk.iot.IotHttpUrlDestinationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotHttpUrlDestinationConfiguration: iot.IotHttpUrlDestinationConfiguration = { ... }
```

##### `confirmationUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotHttpUrlDestinationConfiguration.property.confirmationUrl"></a>

- *Type:* `string`

---

### IotHttpUrlDestinationProperties <a name="aws-cdk-sdk.iot.IotHttpUrlDestinationProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotHttpUrlDestinationProperties: iot.IotHttpUrlDestinationProperties = { ... }
```

##### `confirmationUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotHttpUrlDestinationProperties.property.confirmationUrl"></a>

- *Type:* `string`

---

### IotHttpUrlDestinationSummary <a name="aws-cdk-sdk.iot.IotHttpUrlDestinationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotHttpUrlDestinationSummary: iot.IotHttpUrlDestinationSummary = { ... }
```

##### `confirmationUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotHttpUrlDestinationSummary.property.confirmationUrl"></a>

- *Type:* `string`

---

### IotImplicitDeny <a name="aws-cdk-sdk.iot.IotImplicitDeny"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotImplicitDeny: iot.IotImplicitDeny = { ... }
```

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotImplicitDeny.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicy`](#aws-cdk-sdk.iot.IotPolicy)[]

---

### IotIotAnalyticsAction <a name="aws-cdk-sdk.iot.IotIotAnalyticsAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotIotAnalyticsAction: iot.IotIotAnalyticsAction = { ... }
```

##### `batchMode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotIotAnalyticsAction.property.batchMode"></a>

- *Type:* `boolean`

---

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotIotAnalyticsAction.property.channelArn"></a>

- *Type:* `string`

---

##### `channelName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotIotAnalyticsAction.property.channelName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotIotAnalyticsAction.property.roleArn"></a>

- *Type:* `string`

---

### IotIotEventsAction <a name="aws-cdk-sdk.iot.IotIotEventsAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotIotEventsAction: iot.IotIotEventsAction = { ... }
```

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotIotEventsAction.property.inputName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotIotEventsAction.property.roleArn"></a>

- *Type:* `string`

---

##### `batchMode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotIotEventsAction.property.batchMode"></a>

- *Type:* `boolean`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotIotEventsAction.property.messageId"></a>

- *Type:* `string`

---

### IotIotSiteWiseAction <a name="aws-cdk-sdk.iot.IotIotSiteWiseAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotIotSiteWiseAction: iot.IotIotSiteWiseAction = { ... }
```

##### `putAssetPropertyValueEntries`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotIotSiteWiseAction.property.putAssetPropertyValueEntries"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPutAssetPropertyValueEntry`](#aws-cdk-sdk.iot.IotPutAssetPropertyValueEntry)[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotIotSiteWiseAction.property.roleArn"></a>

- *Type:* `string`

---

### IotJob <a name="aws-cdk-sdk.iot.IotJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotJob: iot.IotJob = { ... }
```

##### `abortConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.abortConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAbortConfig`](#aws-cdk-sdk.iot.IotAbortConfig)

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.comment"></a>

- *Type:* `string`

---

##### `completedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.completedAt"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.description"></a>

- *Type:* `string`

---

##### `forceCanceled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.forceCanceled"></a>

- *Type:* `boolean`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobExecutionsRolloutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.jobExecutionsRolloutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecutionsRolloutConfig`](#aws-cdk-sdk.iot.IotJobExecutionsRolloutConfig)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobProcessDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.jobProcessDetails"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobProcessDetails`](#aws-cdk-sdk.iot.IotJobProcessDetails)

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.namespaceId"></a>

- *Type:* `string`

---

##### `presignedUrlConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.presignedUrlConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPresignedUrlConfig`](#aws-cdk-sdk.iot.IotPresignedUrlConfig)

---

##### `reasonCode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.reasonCode"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.status"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.targets"></a>

- *Type:* `string`[]

---

##### `targetSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.targetSelection"></a>

- *Type:* `string`

---

##### `timeoutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJob.property.timeoutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTimeoutConfig`](#aws-cdk-sdk.iot.IotTimeoutConfig)

---

### IotJobExecution <a name="aws-cdk-sdk.iot.IotJobExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotJobExecution: iot.IotJobExecution = { ... }
```

##### `approximateSecondsBeforeTimedOut`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.approximateSecondsBeforeTimedOut"></a>

- *Type:* `number`

---

##### `executionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.executionNumber"></a>

- *Type:* `number`

---

##### `forceCanceled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.forceCanceled"></a>

- *Type:* `boolean`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.jobId"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `queuedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.queuedAt"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.statusDetails"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecutionStatusDetails`](#aws-cdk-sdk.iot.IotJobExecutionStatusDetails)

---

##### `thingArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.thingArn"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecution.property.versionNumber"></a>

- *Type:* `number`

---

### IotJobExecutionsRolloutConfig <a name="aws-cdk-sdk.iot.IotJobExecutionsRolloutConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotJobExecutionsRolloutConfig: iot.IotJobExecutionsRolloutConfig = { ... }
```

##### `exponentialRate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionsRolloutConfig.property.exponentialRate"></a>

- *Type:* [`aws-cdk-sdk.iot.IotExponentialRolloutRate`](#aws-cdk-sdk.iot.IotExponentialRolloutRate)

---

##### `maximumPerMinute`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

- *Type:* `number`

---

### IotJobExecutionStatusDetails <a name="aws-cdk-sdk.iot.IotJobExecutionStatusDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotJobExecutionStatusDetails: iot.IotJobExecutionStatusDetails = { ... }
```

##### `detailsMap`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionStatusDetails.property.detailsMap"></a>

- *Type:* {[ key: string ]: `string`}

---

### IotJobExecutionSummary <a name="aws-cdk-sdk.iot.IotJobExecutionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotJobExecutionSummary: iot.IotJobExecutionSummary = { ... }
```

##### `executionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionSummary.property.executionNumber"></a>

- *Type:* `number`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionSummary.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `queuedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionSummary.property.queuedAt"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionSummary.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionSummary.property.status"></a>

- *Type:* `string`

---

### IotJobExecutionSummaryForJob <a name="aws-cdk-sdk.iot.IotJobExecutionSummaryForJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotJobExecutionSummaryForJob: iot.IotJobExecutionSummaryForJob = { ... }
```

##### `jobExecutionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionSummaryForJob.property.jobExecutionSummary"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecutionSummary`](#aws-cdk-sdk.iot.IotJobExecutionSummary)

---

##### `thingArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionSummaryForJob.property.thingArn"></a>

- *Type:* `string`

---

### IotJobExecutionSummaryForThing <a name="aws-cdk-sdk.iot.IotJobExecutionSummaryForThing"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotJobExecutionSummaryForThing: iot.IotJobExecutionSummaryForThing = { ... }
```

##### `jobExecutionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionSummaryForThing.property.jobExecutionSummary"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecutionSummary`](#aws-cdk-sdk.iot.IotJobExecutionSummary)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobExecutionSummaryForThing.property.jobId"></a>

- *Type:* `string`

---

### IotJobProcessDetails <a name="aws-cdk-sdk.iot.IotJobProcessDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotJobProcessDetails: iot.IotJobProcessDetails = { ... }
```

##### `numberOfCanceledThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobProcessDetails.property.numberOfCanceledThings"></a>

- *Type:* `number`

---

##### `numberOfFailedThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobProcessDetails.property.numberOfFailedThings"></a>

- *Type:* `number`

---

##### `numberOfInProgressThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobProcessDetails.property.numberOfInProgressThings"></a>

- *Type:* `number`

---

##### `numberOfQueuedThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobProcessDetails.property.numberOfQueuedThings"></a>

- *Type:* `number`

---

##### `numberOfRejectedThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobProcessDetails.property.numberOfRejectedThings"></a>

- *Type:* `number`

---

##### `numberOfRemovedThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobProcessDetails.property.numberOfRemovedThings"></a>

- *Type:* `number`

---

##### `numberOfSucceededThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobProcessDetails.property.numberOfSucceededThings"></a>

- *Type:* `number`

---

##### `numberOfTimedOutThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobProcessDetails.property.numberOfTimedOutThings"></a>

- *Type:* `number`

---

##### `processingTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobProcessDetails.property.processingTargets"></a>

- *Type:* `string`[]

---

### IotJobSummary <a name="aws-cdk-sdk.iot.IotJobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotJobSummary: iot.IotJobSummary = { ... }
```

##### `completedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobSummary.property.completedAt"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobSummary.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobSummary.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobSummary.property.status"></a>

- *Type:* `string`

---

##### `targetSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobSummary.property.targetSelection"></a>

- *Type:* `string`

---

##### `thingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotJobSummary.property.thingGroupId"></a>

- *Type:* `string`

---

### IotKeyPair <a name="aws-cdk-sdk.iot.IotKeyPair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotKeyPair: iot.IotKeyPair = { ... }
```

##### `privateKey`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotKeyPair.property.privateKey"></a>

- *Type:* `string`

---

##### `publicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotKeyPair.property.publicKey"></a>

- *Type:* `string`

---

### IotKinesisAction <a name="aws-cdk-sdk.iot.IotKinesisAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotKinesisAction: iot.IotKinesisAction = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotKinesisAction.property.roleArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotKinesisAction.property.streamName"></a>

- *Type:* `string`

---

##### `partitionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotKinesisAction.property.partitionKey"></a>

- *Type:* `string`

---

### IotLambdaAction <a name="aws-cdk-sdk.iot.IotLambdaAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotLambdaAction: iot.IotLambdaAction = { ... }
```

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotLambdaAction.property.functionArn"></a>

- *Type:* `string`

---

### IotListActiveViolationsRequest <a name="aws-cdk-sdk.iot.IotListActiveViolationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListActiveViolationsRequest: iot.IotListActiveViolationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListActiveViolationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListActiveViolationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `securityProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListActiveViolationsRequest.property.securityProfileName"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListActiveViolationsRequest.property.thingName"></a>

- *Type:* `string`

---

### IotListActiveViolationsResponse <a name="aws-cdk-sdk.iot.IotListActiveViolationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListActiveViolationsResponse: iot.IotListActiveViolationsResponse = { ... }
```

##### `activeViolations`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListActiveViolationsResponse.property.activeViolations"></a>

- *Type:* [`aws-cdk-sdk.iot.IotActiveViolation`](#aws-cdk-sdk.iot.IotActiveViolation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListActiveViolationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListAttachedPoliciesRequest <a name="aws-cdk-sdk.iot.IotListAttachedPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAttachedPoliciesRequest: iot.IotListAttachedPoliciesRequest = { ... }
```

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListAttachedPoliciesRequest.property.target"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAttachedPoliciesRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAttachedPoliciesRequest.property.pageSize"></a>

- *Type:* `number`

---

##### `recursive`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAttachedPoliciesRequest.property.recursive"></a>

- *Type:* `boolean`

---

### IotListAttachedPoliciesResponse <a name="aws-cdk-sdk.iot.IotListAttachedPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAttachedPoliciesResponse: iot.IotListAttachedPoliciesResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAttachedPoliciesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAttachedPoliciesResponse.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicy`](#aws-cdk-sdk.iot.IotPolicy)[]

---

### IotListAuditFindingsRequest <a name="aws-cdk-sdk.iot.IotListAuditFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuditFindingsRequest: iot.IotListAuditFindingsRequest = { ... }
```

##### `checkName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditFindingsRequest.property.checkName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditFindingsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `listSuppressedFindings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditFindingsRequest.property.listSuppressedFindings"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditFindingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditFindingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditFindingsRequest.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResourceIdentifier`](#aws-cdk-sdk.iot.IotResourceIdentifier)

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditFindingsRequest.property.startTime"></a>

- *Type:* `string`

---

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditFindingsRequest.property.taskId"></a>

- *Type:* `string`

---

### IotListAuditFindingsResponse <a name="aws-cdk-sdk.iot.IotListAuditFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuditFindingsResponse: iot.IotListAuditFindingsResponse = { ... }
```

##### `findings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditFindingsResponse.property.findings"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditFinding`](#aws-cdk-sdk.iot.IotAuditFinding)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditFindingsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListAuditMitigationActionsExecutionsRequest <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuditMitigationActionsExecutionsRequest: iot.IotListAuditMitigationActionsExecutionsRequest = { ... }
```

##### `findingId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsRequest.property.findingId"></a>

- *Type:* `string`

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsRequest.property.taskId"></a>

- *Type:* `string`

---

##### `actionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsRequest.property.actionStatus"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListAuditMitigationActionsExecutionsResponse <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuditMitigationActionsExecutionsResponse: iot.IotListAuditMitigationActionsExecutionsResponse = { ... }
```

##### `actionsExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsResponse.property.actionsExecutions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata`](#aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListAuditMitigationActionsTasksRequest <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuditMitigationActionsTasksRequest: iot.IotListAuditMitigationActionsTasksRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest.property.startTime"></a>

- *Type:* `string`

---

##### `auditTaskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest.property.auditTaskId"></a>

- *Type:* `string`

---

##### `findingId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest.property.findingId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `taskStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest.property.taskStatus"></a>

- *Type:* `string`

---

### IotListAuditMitigationActionsTasksResponse <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuditMitigationActionsTasksResponse: iot.IotListAuditMitigationActionsTasksResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tasks`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksResponse.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditMitigationActionsTaskMetadata`](#aws-cdk-sdk.iot.IotAuditMitigationActionsTaskMetadata)[]

---

### IotListAuditSuppressionsRequest <a name="aws-cdk-sdk.iot.IotListAuditSuppressionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuditSuppressionsRequest: iot.IotListAuditSuppressionsRequest = { ... }
```

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditSuppressionsRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `checkName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditSuppressionsRequest.property.checkName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditSuppressionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditSuppressionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditSuppressionsRequest.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResourceIdentifier`](#aws-cdk-sdk.iot.IotResourceIdentifier)

---

### IotListAuditSuppressionsResponse <a name="aws-cdk-sdk.iot.IotListAuditSuppressionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuditSuppressionsResponse: iot.IotListAuditSuppressionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditSuppressionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `suppressions`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditSuppressionsResponse.property.suppressions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditSuppression`](#aws-cdk-sdk.iot.IotAuditSuppression)[]

---

### IotListAuditTasksRequest <a name="aws-cdk-sdk.iot.IotListAuditTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuditTasksRequest: iot.IotListAuditTasksRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListAuditTasksRequest.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListAuditTasksRequest.property.startTime"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `taskStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditTasksRequest.property.taskStatus"></a>

- *Type:* `string`

---

##### `taskType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditTasksRequest.property.taskType"></a>

- *Type:* `string`

---

### IotListAuditTasksResponse <a name="aws-cdk-sdk.iot.IotListAuditTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuditTasksResponse: iot.IotListAuditTasksResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditTasksResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tasks`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuditTasksResponse.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditTaskMetadata`](#aws-cdk-sdk.iot.IotAuditTaskMetadata)[]

---

### IotListAuthorizersRequest <a name="aws-cdk-sdk.iot.IotListAuthorizersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuthorizersRequest: iot.IotListAuthorizersRequest = { ... }
```

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuthorizersRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuthorizersRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuthorizersRequest.property.pageSize"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuthorizersRequest.property.status"></a>

- *Type:* `string`

---

### IotListAuthorizersResponse <a name="aws-cdk-sdk.iot.IotListAuthorizersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListAuthorizersResponse: iot.IotListAuthorizersResponse = { ... }
```

##### `authorizers`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuthorizersResponse.property.authorizers"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthorizerSummary`](#aws-cdk-sdk.iot.IotAuthorizerSummary)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListAuthorizersResponse.property.nextMarker"></a>

- *Type:* `string`

---

### IotListBillingGroupsRequest <a name="aws-cdk-sdk.iot.IotListBillingGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListBillingGroupsRequest: iot.IotListBillingGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListBillingGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `namePrefixFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListBillingGroupsRequest.property.namePrefixFilter"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListBillingGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListBillingGroupsResponse <a name="aws-cdk-sdk.iot.IotListBillingGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListBillingGroupsResponse: iot.IotListBillingGroupsResponse = { ... }
```

##### `billingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListBillingGroupsResponse.property.billingGroups"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGroupNameAndArn`](#aws-cdk-sdk.iot.IotGroupNameAndArn)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListBillingGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListCaCertificatesRequest <a name="aws-cdk-sdk.iot.IotListCaCertificatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListCaCertificatesRequest: iot.IotListCaCertificatesRequest = { ... }
```

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCaCertificatesRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCaCertificatesRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCaCertificatesRequest.property.pageSize"></a>

- *Type:* `number`

---

### IotListCaCertificatesResponse <a name="aws-cdk-sdk.iot.IotListCaCertificatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListCaCertificatesResponse: iot.IotListCaCertificatesResponse = { ... }
```

##### `certificates`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCaCertificatesResponse.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCaCertificate`](#aws-cdk-sdk.iot.IotCaCertificate)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCaCertificatesResponse.property.nextMarker"></a>

- *Type:* `string`

---

### IotListCertificatesByCaRequest <a name="aws-cdk-sdk.iot.IotListCertificatesByCaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListCertificatesByCaRequest: iot.IotListCertificatesByCaRequest = { ... }
```

##### `caCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesByCaRequest.property.caCertificateId"></a>

- *Type:* `string`

---

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesByCaRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesByCaRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesByCaRequest.property.pageSize"></a>

- *Type:* `number`

---

### IotListCertificatesByCaResponse <a name="aws-cdk-sdk.iot.IotListCertificatesByCaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListCertificatesByCaResponse: iot.IotListCertificatesByCaResponse = { ... }
```

##### `certificates`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesByCaResponse.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCertificate`](#aws-cdk-sdk.iot.IotCertificate)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesByCaResponse.property.nextMarker"></a>

- *Type:* `string`

---

### IotListCertificatesRequest <a name="aws-cdk-sdk.iot.IotListCertificatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListCertificatesRequest: iot.IotListCertificatesRequest = { ... }
```

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesRequest.property.pageSize"></a>

- *Type:* `number`

---

### IotListCertificatesResponse <a name="aws-cdk-sdk.iot.IotListCertificatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListCertificatesResponse: iot.IotListCertificatesResponse = { ... }
```

##### `certificates`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesResponse.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCertificate`](#aws-cdk-sdk.iot.IotCertificate)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListCertificatesResponse.property.nextMarker"></a>

- *Type:* `string`

---

### IotListDimensionsRequest <a name="aws-cdk-sdk.iot.IotListDimensionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListDimensionsRequest: iot.IotListDimensionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListDimensionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListDimensionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListDimensionsResponse <a name="aws-cdk-sdk.iot.IotListDimensionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListDimensionsResponse: iot.IotListDimensionsResponse = { ... }
```

##### `dimensionNames`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListDimensionsResponse.property.dimensionNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListDimensionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListDomainConfigurationsRequest <a name="aws-cdk-sdk.iot.IotListDomainConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListDomainConfigurationsRequest: iot.IotListDomainConfigurationsRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListDomainConfigurationsRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListDomainConfigurationsRequest.property.pageSize"></a>

- *Type:* `number`

---

##### `serviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListDomainConfigurationsRequest.property.serviceType"></a>

- *Type:* `string`

---

### IotListDomainConfigurationsResponse <a name="aws-cdk-sdk.iot.IotListDomainConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListDomainConfigurationsResponse: iot.IotListDomainConfigurationsResponse = { ... }
```

##### `domainConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListDomainConfigurationsResponse.property.domainConfigurations"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDomainConfigurationSummary`](#aws-cdk-sdk.iot.IotDomainConfigurationSummary)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListDomainConfigurationsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### IotListIndicesRequest <a name="aws-cdk-sdk.iot.IotListIndicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListIndicesRequest: iot.IotListIndicesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListIndicesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListIndicesRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListIndicesResponse <a name="aws-cdk-sdk.iot.IotListIndicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListIndicesResponse: iot.IotListIndicesResponse = { ... }
```

##### `indexNames`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListIndicesResponse.property.indexNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListIndicesResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListJobExecutionsForJobRequest <a name="aws-cdk-sdk.iot.IotListJobExecutionsForJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListJobExecutionsForJobRequest: iot.IotListJobExecutionsForJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForJobRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForJobRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForJobRequest.property.status"></a>

- *Type:* `string`

---

### IotListJobExecutionsForJobResponse <a name="aws-cdk-sdk.iot.IotListJobExecutionsForJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListJobExecutionsForJobResponse: iot.IotListJobExecutionsForJobResponse = { ... }
```

##### `executionSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForJobResponse.property.executionSummaries"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecutionSummaryForJob`](#aws-cdk-sdk.iot.IotJobExecutionSummaryForJob)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForJobResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListJobExecutionsForThingRequest <a name="aws-cdk-sdk.iot.IotListJobExecutionsForThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListJobExecutionsForThingRequest: iot.IotListJobExecutionsForThingRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForThingRequest.property.thingName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForThingRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForThingRequest.property.namespaceId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForThingRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForThingRequest.property.status"></a>

- *Type:* `string`

---

### IotListJobExecutionsForThingResponse <a name="aws-cdk-sdk.iot.IotListJobExecutionsForThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListJobExecutionsForThingResponse: iot.IotListJobExecutionsForThingResponse = { ... }
```

##### `executionSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForThingResponse.property.executionSummaries"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecutionSummaryForThing`](#aws-cdk-sdk.iot.IotJobExecutionSummaryForThing)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobExecutionsForThingResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListJobsRequest <a name="aws-cdk-sdk.iot.IotListJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListJobsRequest: iot.IotListJobsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobsRequest.property.namespaceId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobsRequest.property.status"></a>

- *Type:* `string`

---

##### `targetSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobsRequest.property.targetSelection"></a>

- *Type:* `string`

---

##### `thingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobsRequest.property.thingGroupId"></a>

- *Type:* `string`

---

##### `thingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobsRequest.property.thingGroupName"></a>

- *Type:* `string`

---

### IotListJobsResponse <a name="aws-cdk-sdk.iot.IotListJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListJobsResponse: iot.IotListJobsResponse = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobsResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobSummary`](#aws-cdk-sdk.iot.IotJobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListMitigationActionsRequest <a name="aws-cdk-sdk.iot.IotListMitigationActionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListMitigationActionsRequest: iot.IotListMitigationActionsRequest = { ... }
```

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListMitigationActionsRequest.property.actionType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListMitigationActionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListMitigationActionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListMitigationActionsResponse <a name="aws-cdk-sdk.iot.IotListMitigationActionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListMitigationActionsResponse: iot.IotListMitigationActionsResponse = { ... }
```

##### `actionIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListMitigationActionsResponse.property.actionIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMitigationActionIdentifier`](#aws-cdk-sdk.iot.IotMitigationActionIdentifier)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListMitigationActionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListOtaUpdatesRequest <a name="aws-cdk-sdk.iot.IotListOtaUpdatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListOtaUpdatesRequest: iot.IotListOtaUpdatesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListOtaUpdatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListOtaUpdatesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `otaUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListOtaUpdatesRequest.property.otaUpdateStatus"></a>

- *Type:* `string`

---

### IotListOtaUpdatesResponse <a name="aws-cdk-sdk.iot.IotListOtaUpdatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListOtaUpdatesResponse: iot.IotListOtaUpdatesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListOtaUpdatesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `otaUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListOtaUpdatesResponse.property.otaUpdates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotOtaUpdateSummary`](#aws-cdk-sdk.iot.IotOtaUpdateSummary)[]

---

### IotListOutgoingCertificatesRequest <a name="aws-cdk-sdk.iot.IotListOutgoingCertificatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListOutgoingCertificatesRequest: iot.IotListOutgoingCertificatesRequest = { ... }
```

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListOutgoingCertificatesRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListOutgoingCertificatesRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListOutgoingCertificatesRequest.property.pageSize"></a>

- *Type:* `number`

---

### IotListOutgoingCertificatesResponse <a name="aws-cdk-sdk.iot.IotListOutgoingCertificatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListOutgoingCertificatesResponse: iot.IotListOutgoingCertificatesResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListOutgoingCertificatesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `outgoingCertificates`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListOutgoingCertificatesResponse.property.outgoingCertificates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotOutgoingCertificate`](#aws-cdk-sdk.iot.IotOutgoingCertificate)[]

---

### IotListPoliciesRequest <a name="aws-cdk-sdk.iot.IotListPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListPoliciesRequest: iot.IotListPoliciesRequest = { ... }
```

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPoliciesRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPoliciesRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPoliciesRequest.property.pageSize"></a>

- *Type:* `number`

---

### IotListPoliciesResponse <a name="aws-cdk-sdk.iot.IotListPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListPoliciesResponse: iot.IotListPoliciesResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPoliciesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPoliciesResponse.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicy`](#aws-cdk-sdk.iot.IotPolicy)[]

---

### IotListPolicyPrincipalsRequest <a name="aws-cdk-sdk.iot.IotListPolicyPrincipalsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListPolicyPrincipalsRequest: iot.IotListPolicyPrincipalsRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListPolicyPrincipalsRequest.property.policyName"></a>

- *Type:* `string`

---

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPolicyPrincipalsRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPolicyPrincipalsRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPolicyPrincipalsRequest.property.pageSize"></a>

- *Type:* `number`

---

### IotListPolicyPrincipalsResponse <a name="aws-cdk-sdk.iot.IotListPolicyPrincipalsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListPolicyPrincipalsResponse: iot.IotListPolicyPrincipalsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPolicyPrincipalsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `principals`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPolicyPrincipalsResponse.property.principals"></a>

- *Type:* `string`[]

---

### IotListPolicyVersionsRequest <a name="aws-cdk-sdk.iot.IotListPolicyVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListPolicyVersionsRequest: iot.IotListPolicyVersionsRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListPolicyVersionsRequest.property.policyName"></a>

- *Type:* `string`

---

### IotListPolicyVersionsResponse <a name="aws-cdk-sdk.iot.IotListPolicyVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListPolicyVersionsResponse: iot.IotListPolicyVersionsResponse = { ... }
```

##### `policyVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPolicyVersionsResponse.property.policyVersions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicyVersion`](#aws-cdk-sdk.iot.IotPolicyVersion)[]

---

### IotListPrincipalPoliciesRequest <a name="aws-cdk-sdk.iot.IotListPrincipalPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListPrincipalPoliciesRequest: iot.IotListPrincipalPoliciesRequest = { ... }
```

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalPoliciesRequest.property.principal"></a>

- *Type:* `string`

---

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalPoliciesRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalPoliciesRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalPoliciesRequest.property.pageSize"></a>

- *Type:* `number`

---

### IotListPrincipalPoliciesResponse <a name="aws-cdk-sdk.iot.IotListPrincipalPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListPrincipalPoliciesResponse: iot.IotListPrincipalPoliciesResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalPoliciesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalPoliciesResponse.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicy`](#aws-cdk-sdk.iot.IotPolicy)[]

---

### IotListPrincipalThingsRequest <a name="aws-cdk-sdk.iot.IotListPrincipalThingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListPrincipalThingsRequest: iot.IotListPrincipalThingsRequest = { ... }
```

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalThingsRequest.property.principal"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalThingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalThingsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListPrincipalThingsResponse <a name="aws-cdk-sdk.iot.IotListPrincipalThingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListPrincipalThingsResponse: iot.IotListPrincipalThingsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalThingsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `things`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListPrincipalThingsResponse.property.things"></a>

- *Type:* `string`[]

---

### IotListProvisioningTemplatesRequest <a name="aws-cdk-sdk.iot.IotListProvisioningTemplatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListProvisioningTemplatesRequest: iot.IotListProvisioningTemplatesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListProvisioningTemplatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListProvisioningTemplatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListProvisioningTemplatesResponse <a name="aws-cdk-sdk.iot.IotListProvisioningTemplatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListProvisioningTemplatesResponse: iot.IotListProvisioningTemplatesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListProvisioningTemplatesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `templates`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListProvisioningTemplatesResponse.property.templates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotProvisioningTemplateSummary`](#aws-cdk-sdk.iot.IotProvisioningTemplateSummary)[]

---

### IotListProvisioningTemplateVersionsRequest <a name="aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListProvisioningTemplateVersionsRequest: iot.IotListProvisioningTemplateVersionsRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsRequest.property.templateName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListProvisioningTemplateVersionsResponse <a name="aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListProvisioningTemplateVersionsResponse: iot.IotListProvisioningTemplateVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotProvisioningTemplateVersionSummary`](#aws-cdk-sdk.iot.IotProvisioningTemplateVersionSummary)[]

---

### IotListRoleAliasesRequest <a name="aws-cdk-sdk.iot.IotListRoleAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListRoleAliasesRequest: iot.IotListRoleAliasesRequest = { ... }
```

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListRoleAliasesRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListRoleAliasesRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListRoleAliasesRequest.property.pageSize"></a>

- *Type:* `number`

---

### IotListRoleAliasesResponse <a name="aws-cdk-sdk.iot.IotListRoleAliasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListRoleAliasesResponse: iot.IotListRoleAliasesResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListRoleAliasesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `roleAliases`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListRoleAliasesResponse.property.roleAliases"></a>

- *Type:* `string`[]

---

### IotListScheduledAuditsRequest <a name="aws-cdk-sdk.iot.IotListScheduledAuditsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListScheduledAuditsRequest: iot.IotListScheduledAuditsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListScheduledAuditsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListScheduledAuditsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListScheduledAuditsResponse <a name="aws-cdk-sdk.iot.IotListScheduledAuditsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListScheduledAuditsResponse: iot.IotListScheduledAuditsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListScheduledAuditsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduledAudits`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListScheduledAuditsResponse.property.scheduledAudits"></a>

- *Type:* [`aws-cdk-sdk.iot.IotScheduledAuditMetadata`](#aws-cdk-sdk.iot.IotScheduledAuditMetadata)[]

---

### IotListSecurityProfilesForTargetRequest <a name="aws-cdk-sdk.iot.IotListSecurityProfilesForTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListSecurityProfilesForTargetRequest: iot.IotListSecurityProfilesForTargetRequest = { ... }
```

##### `securityProfileTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesForTargetRequest.property.securityProfileTargetArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesForTargetRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesForTargetRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `recursive`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesForTargetRequest.property.recursive"></a>

- *Type:* `boolean`

---

### IotListSecurityProfilesForTargetResponse <a name="aws-cdk-sdk.iot.IotListSecurityProfilesForTargetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListSecurityProfilesForTargetResponse: iot.IotListSecurityProfilesForTargetResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesForTargetResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `securityProfileTargetMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesForTargetResponse.property.securityProfileTargetMappings"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSecurityProfileTargetMapping`](#aws-cdk-sdk.iot.IotSecurityProfileTargetMapping)[]

---

### IotListSecurityProfilesRequest <a name="aws-cdk-sdk.iot.IotListSecurityProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListSecurityProfilesRequest: iot.IotListSecurityProfilesRequest = { ... }
```

##### `dimensionName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesRequest.property.dimensionName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListSecurityProfilesResponse <a name="aws-cdk-sdk.iot.IotListSecurityProfilesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListSecurityProfilesResponse: iot.IotListSecurityProfilesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `securityProfileIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListSecurityProfilesResponse.property.securityProfileIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSecurityProfileIdentifier`](#aws-cdk-sdk.iot.IotSecurityProfileIdentifier)[]

---

### IotListStreamsRequest <a name="aws-cdk-sdk.iot.IotListStreamsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListStreamsRequest: iot.IotListStreamsRequest = { ... }
```

##### `ascendingOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListStreamsRequest.property.ascendingOrder"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListStreamsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListStreamsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListStreamsResponse <a name="aws-cdk-sdk.iot.IotListStreamsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListStreamsResponse: iot.IotListStreamsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListStreamsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `streams`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListStreamsResponse.property.streams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStreamSummary`](#aws-cdk-sdk.iot.IotStreamSummary)[]

---

### IotListTagsForResourceRequest <a name="aws-cdk-sdk.iot.IotListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListTagsForResourceRequest: iot.IotListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListTagsForResourceResponse <a name="aws-cdk-sdk.iot.IotListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListTagsForResourceResponse: iot.IotListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotListTargetsForPolicyRequest <a name="aws-cdk-sdk.iot.IotListTargetsForPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListTargetsForPolicyRequest: iot.IotListTargetsForPolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListTargetsForPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTargetsForPolicyRequest.property.marker"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTargetsForPolicyRequest.property.pageSize"></a>

- *Type:* `number`

---

### IotListTargetsForPolicyResponse <a name="aws-cdk-sdk.iot.IotListTargetsForPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListTargetsForPolicyResponse: iot.IotListTargetsForPolicyResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTargetsForPolicyResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTargetsForPolicyResponse.property.targets"></a>

- *Type:* `string`[]

---

### IotListTargetsForSecurityProfileRequest <a name="aws-cdk-sdk.iot.IotListTargetsForSecurityProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListTargetsForSecurityProfileRequest: iot.IotListTargetsForSecurityProfileRequest = { ... }
```

##### `securityProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListTargetsForSecurityProfileRequest.property.securityProfileName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTargetsForSecurityProfileRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTargetsForSecurityProfileRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListTargetsForSecurityProfileResponse <a name="aws-cdk-sdk.iot.IotListTargetsForSecurityProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListTargetsForSecurityProfileResponse: iot.IotListTargetsForSecurityProfileResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTargetsForSecurityProfileResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `securityProfileTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTargetsForSecurityProfileResponse.property.securityProfileTargets"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSecurityProfileTarget`](#aws-cdk-sdk.iot.IotSecurityProfileTarget)[]

---

### IotListThingGroupsForThingRequest <a name="aws-cdk-sdk.iot.IotListThingGroupsForThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingGroupsForThingRequest: iot.IotListThingGroupsForThingRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsForThingRequest.property.thingName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsForThingRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsForThingRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListThingGroupsForThingResponse <a name="aws-cdk-sdk.iot.IotListThingGroupsForThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingGroupsForThingResponse: iot.IotListThingGroupsForThingResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsForThingResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `thingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsForThingResponse.property.thingGroups"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGroupNameAndArn`](#aws-cdk-sdk.iot.IotGroupNameAndArn)[]

---

### IotListThingGroupsRequest <a name="aws-cdk-sdk.iot.IotListThingGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingGroupsRequest: iot.IotListThingGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `namePrefixFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsRequest.property.namePrefixFilter"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `parentGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsRequest.property.parentGroup"></a>

- *Type:* `string`

---

##### `recursive`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsRequest.property.recursive"></a>

- *Type:* `boolean`

---

### IotListThingGroupsResponse <a name="aws-cdk-sdk.iot.IotListThingGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingGroupsResponse: iot.IotListThingGroupsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `thingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingGroupsResponse.property.thingGroups"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGroupNameAndArn`](#aws-cdk-sdk.iot.IotGroupNameAndArn)[]

---

### IotListThingPrincipalsRequest <a name="aws-cdk-sdk.iot.IotListThingPrincipalsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingPrincipalsRequest: iot.IotListThingPrincipalsRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListThingPrincipalsRequest.property.thingName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingPrincipalsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingPrincipalsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListThingPrincipalsResponse <a name="aws-cdk-sdk.iot.IotListThingPrincipalsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingPrincipalsResponse: iot.IotListThingPrincipalsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingPrincipalsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `principals`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingPrincipalsResponse.property.principals"></a>

- *Type:* `string`[]

---

### IotListThingRegistrationTaskReportsRequest <a name="aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingRegistrationTaskReportsRequest: iot.IotListThingRegistrationTaskReportsRequest = { ... }
```

##### `reportType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsRequest.property.reportType"></a>

- *Type:* `string`

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsRequest.property.taskId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListThingRegistrationTaskReportsResponse <a name="aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingRegistrationTaskReportsResponse: iot.IotListThingRegistrationTaskReportsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `reportType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsResponse.property.reportType"></a>

- *Type:* `string`

---

##### `resourceLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsResponse.property.resourceLinks"></a>

- *Type:* `string`[]

---

### IotListThingRegistrationTasksRequest <a name="aws-cdk-sdk.iot.IotListThingRegistrationTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingRegistrationTasksRequest: iot.IotListThingRegistrationTasksRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTasksRequest.property.status"></a>

- *Type:* `string`

---

### IotListThingRegistrationTasksResponse <a name="aws-cdk-sdk.iot.IotListThingRegistrationTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingRegistrationTasksResponse: iot.IotListThingRegistrationTasksResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTasksResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `taskIds`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingRegistrationTasksResponse.property.taskIds"></a>

- *Type:* `string`[]

---

### IotListThingsInBillingGroupRequest <a name="aws-cdk-sdk.iot.IotListThingsInBillingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingsInBillingGroupRequest: iot.IotListThingsInBillingGroupRequest = { ... }
```

##### `billingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListThingsInBillingGroupRequest.property.billingGroupName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsInBillingGroupRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsInBillingGroupRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListThingsInBillingGroupResponse <a name="aws-cdk-sdk.iot.IotListThingsInBillingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingsInBillingGroupResponse: iot.IotListThingsInBillingGroupResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsInBillingGroupResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `things`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsInBillingGroupResponse.property.things"></a>

- *Type:* `string`[]

---

### IotListThingsInThingGroupRequest <a name="aws-cdk-sdk.iot.IotListThingsInThingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingsInThingGroupRequest: iot.IotListThingsInThingGroupRequest = { ... }
```

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListThingsInThingGroupRequest.property.thingGroupName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsInThingGroupRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsInThingGroupRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `recursive`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsInThingGroupRequest.property.recursive"></a>

- *Type:* `boolean`

---

### IotListThingsInThingGroupResponse <a name="aws-cdk-sdk.iot.IotListThingsInThingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingsInThingGroupResponse: iot.IotListThingsInThingGroupResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsInThingGroupResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `things`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsInThingGroupResponse.property.things"></a>

- *Type:* `string`[]

---

### IotListThingsRequest <a name="aws-cdk-sdk.iot.IotListThingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingsRequest: iot.IotListThingsRequest = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsRequest.property.attributeName"></a>

- *Type:* `string`

---

##### `attributeValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsRequest.property.attributeValue"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `thingTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsRequest.property.thingTypeName"></a>

- *Type:* `string`

---

### IotListThingsResponse <a name="aws-cdk-sdk.iot.IotListThingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingsResponse: iot.IotListThingsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `things`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingsResponse.property.things"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingAttribute`](#aws-cdk-sdk.iot.IotThingAttribute)[]

---

### IotListThingTypesRequest <a name="aws-cdk-sdk.iot.IotListThingTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingTypesRequest: iot.IotListThingTypesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingTypesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingTypesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `thingTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingTypesRequest.property.thingTypeName"></a>

- *Type:* `string`

---

### IotListThingTypesResponse <a name="aws-cdk-sdk.iot.IotListThingTypesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListThingTypesResponse: iot.IotListThingTypesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingTypesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `thingTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListThingTypesResponse.property.thingTypes"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingTypeDefinition`](#aws-cdk-sdk.iot.IotThingTypeDefinition)[]

---

### IotListTopicRuleDestinationsRequest <a name="aws-cdk-sdk.iot.IotListTopicRuleDestinationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListTopicRuleDestinationsRequest: iot.IotListTopicRuleDestinationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTopicRuleDestinationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTopicRuleDestinationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IotListTopicRuleDestinationsResponse <a name="aws-cdk-sdk.iot.IotListTopicRuleDestinationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListTopicRuleDestinationsResponse: iot.IotListTopicRuleDestinationsResponse = { ... }
```

##### `destinationSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTopicRuleDestinationsResponse.property.destinationSummaries"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTopicRuleDestinationSummary`](#aws-cdk-sdk.iot.IotTopicRuleDestinationSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTopicRuleDestinationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListTopicRulesRequest <a name="aws-cdk-sdk.iot.IotListTopicRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListTopicRulesRequest: iot.IotListTopicRulesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTopicRulesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTopicRulesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `ruleDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTopicRulesRequest.property.ruleDisabled"></a>

- *Type:* `boolean`

---

##### `topic`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTopicRulesRequest.property.topic"></a>

- *Type:* `string`

---

### IotListTopicRulesResponse <a name="aws-cdk-sdk.iot.IotListTopicRulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListTopicRulesResponse: iot.IotListTopicRulesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTopicRulesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListTopicRulesResponse.property.rules"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTopicRuleListItem`](#aws-cdk-sdk.iot.IotTopicRuleListItem)[]

---

### IotListV2LoggingLevelsRequest <a name="aws-cdk-sdk.iot.IotListV2LoggingLevelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListV2LoggingLevelsRequest: iot.IotListV2LoggingLevelsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListV2LoggingLevelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListV2LoggingLevelsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `targetType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListV2LoggingLevelsRequest.property.targetType"></a>

- *Type:* `string`

---

### IotListV2LoggingLevelsResponse <a name="aws-cdk-sdk.iot.IotListV2LoggingLevelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListV2LoggingLevelsResponse: iot.IotListV2LoggingLevelsResponse = { ... }
```

##### `logTargetConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListV2LoggingLevelsResponse.property.logTargetConfigurations"></a>

- *Type:* [`aws-cdk-sdk.iot.IotLogTargetConfiguration`](#aws-cdk-sdk.iot.IotLogTargetConfiguration)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListV2LoggingLevelsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IotListViolationEventsRequest <a name="aws-cdk-sdk.iot.IotListViolationEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListViolationEventsRequest: iot.IotListViolationEventsRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListViolationEventsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotListViolationEventsRequest.property.startTime"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListViolationEventsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListViolationEventsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `securityProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListViolationEventsRequest.property.securityProfileName"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListViolationEventsRequest.property.thingName"></a>

- *Type:* `string`

---

### IotListViolationEventsResponse <a name="aws-cdk-sdk.iot.IotListViolationEventsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotListViolationEventsResponse: iot.IotListViolationEventsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListViolationEventsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `violationEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotListViolationEventsResponse.property.violationEvents"></a>

- *Type:* [`aws-cdk-sdk.iot.IotViolationEvent`](#aws-cdk-sdk.iot.IotViolationEvent)[]

---

### IotLoggingOptionsPayload <a name="aws-cdk-sdk.iot.IotLoggingOptionsPayload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotLoggingOptionsPayload: iot.IotLoggingOptionsPayload = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotLoggingOptionsPayload.property.roleArn"></a>

- *Type:* `string`

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotLoggingOptionsPayload.property.logLevel"></a>

- *Type:* `string`

---

### IotLogTarget <a name="aws-cdk-sdk.iot.IotLogTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotLogTarget: iot.IotLogTarget = { ... }
```

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotLogTarget.property.targetType"></a>

- *Type:* `string`

---

##### `targetName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotLogTarget.property.targetName"></a>

- *Type:* `string`

---

### IotLogTargetConfiguration <a name="aws-cdk-sdk.iot.IotLogTargetConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotLogTargetConfiguration: iot.IotLogTargetConfiguration = { ... }
```

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotLogTargetConfiguration.property.logLevel"></a>

- *Type:* `string`

---

##### `logTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotLogTargetConfiguration.property.logTarget"></a>

- *Type:* [`aws-cdk-sdk.iot.IotLogTarget`](#aws-cdk-sdk.iot.IotLogTarget)

---

### IotMetricDimension <a name="aws-cdk-sdk.iot.IotMetricDimension"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotMetricDimension: iot.IotMetricDimension = { ... }
```

##### `dimensionName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotMetricDimension.property.dimensionName"></a>

- *Type:* `string`

---

##### `operator`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMetricDimension.property.operator"></a>

- *Type:* `string`

---

### IotMetricToRetain <a name="aws-cdk-sdk.iot.IotMetricToRetain"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotMetricToRetain: iot.IotMetricToRetain = { ... }
```

##### `metric`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotMetricToRetain.property.metric"></a>

- *Type:* `string`

---

##### `metricDimension`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMetricToRetain.property.metricDimension"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricDimension`](#aws-cdk-sdk.iot.IotMetricDimension)

---

### IotMetricValue <a name="aws-cdk-sdk.iot.IotMetricValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotMetricValue: iot.IotMetricValue = { ... }
```

##### `cidrs`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMetricValue.property.cidrs"></a>

- *Type:* `string`[]

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMetricValue.property.count"></a>

- *Type:* `number`

---

##### `ports`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMetricValue.property.ports"></a>

- *Type:* `number`[]

---

### IotMitigationAction <a name="aws-cdk-sdk.iot.IotMitigationAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotMitigationAction: iot.IotMitigationAction = { ... }
```

##### `actionParams`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationAction.property.actionParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMitigationActionParams`](#aws-cdk-sdk.iot.IotMitigationActionParams)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationAction.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationAction.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationAction.property.roleArn"></a>

- *Type:* `string`

---

### IotMitigationActionIdentifier <a name="aws-cdk-sdk.iot.IotMitigationActionIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotMitigationActionIdentifier: iot.IotMitigationActionIdentifier = { ... }
```

##### `actionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationActionIdentifier.property.actionArn"></a>

- *Type:* `string`

---

##### `actionName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationActionIdentifier.property.actionName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationActionIdentifier.property.creationDate"></a>

- *Type:* `string`

---

### IotMitigationActionParams <a name="aws-cdk-sdk.iot.IotMitigationActionParams"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotMitigationActionParams: iot.IotMitigationActionParams = { ... }
```

##### `addThingsToThingGroupParams`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationActionParams.property.addThingsToThingGroupParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAddThingsToThingGroupParams`](#aws-cdk-sdk.iot.IotAddThingsToThingGroupParams)

---

##### `enableIoTLoggingParams`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationActionParams.property.enableIoTLoggingParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotEnableIoTLoggingParams`](#aws-cdk-sdk.iot.IotEnableIoTLoggingParams)

---

##### `publishFindingToSnsParams`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationActionParams.property.publishFindingToSnsParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPublishFindingToSnsParams`](#aws-cdk-sdk.iot.IotPublishFindingToSnsParams)

---

##### `replaceDefaultPolicyVersionParams`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationActionParams.property.replaceDefaultPolicyVersionParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotReplaceDefaultPolicyVersionParams`](#aws-cdk-sdk.iot.IotReplaceDefaultPolicyVersionParams)

---

##### `updateCACertificateParams`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationActionParams.property.updateCACertificateParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateCaCertificateParams`](#aws-cdk-sdk.iot.IotUpdateCaCertificateParams)

---

##### `updateDeviceCertificateParams`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMitigationActionParams.property.updateDeviceCertificateParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateDeviceCertificateParams`](#aws-cdk-sdk.iot.IotUpdateDeviceCertificateParams)

---

### IotMqttContext <a name="aws-cdk-sdk.iot.IotMqttContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotMqttContext: iot.IotMqttContext = { ... }
```

##### `clientId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMqttContext.property.clientId"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMqttContext.property.password"></a>

- *Type:* `any`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotMqttContext.property.username"></a>

- *Type:* `string`

---

### IotNonCompliantResource <a name="aws-cdk-sdk.iot.IotNonCompliantResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotNonCompliantResource: iot.IotNonCompliantResource = { ... }
```

##### `additionalInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotNonCompliantResource.property.additionalInfo"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotNonCompliantResource.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResourceIdentifier`](#aws-cdk-sdk.iot.IotResourceIdentifier)

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotNonCompliantResource.property.resourceType"></a>

- *Type:* `string`

---

### IotOtaUpdateFile <a name="aws-cdk-sdk.iot.IotOtaUpdateFile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotOtaUpdateFile: iot.IotOtaUpdateFile = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateFile.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `codeSigning`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateFile.property.codeSigning"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCodeSigning`](#aws-cdk-sdk.iot.IotCodeSigning)

---

##### `fileLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateFile.property.fileLocation"></a>

- *Type:* [`aws-cdk-sdk.iot.IotFileLocation`](#aws-cdk-sdk.iot.IotFileLocation)

---

##### `fileName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateFile.property.fileName"></a>

- *Type:* `string`

---

##### `fileType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateFile.property.fileType"></a>

- *Type:* `number`

---

##### `fileVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateFile.property.fileVersion"></a>

- *Type:* `string`

---

### IotOtaUpdateInfo <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotOtaUpdateInfo: iot.IotOtaUpdateInfo = { ... }
```

##### `additionalParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.additionalParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `awsIotJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.awsIotJobArn"></a>

- *Type:* `string`

---

##### `awsIotJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.awsIotJobId"></a>

- *Type:* `string`

---

##### `awsJobExecutionsRolloutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.awsJobExecutionsRolloutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAwsJobExecutionsRolloutConfig`](#aws-cdk-sdk.iot.IotAwsJobExecutionsRolloutConfig)

---

##### `awsJobPresignedUrlConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.awsJobPresignedUrlConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAwsJobPresignedUrlConfig`](#aws-cdk-sdk.iot.IotAwsJobPresignedUrlConfig)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.description"></a>

- *Type:* `string`

---

##### `errorInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.errorInfo"></a>

- *Type:* [`aws-cdk-sdk.iot.IotErrorInfo`](#aws-cdk-sdk.iot.IotErrorInfo)

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `otaUpdateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.otaUpdateArn"></a>

- *Type:* `string`

---

##### `otaUpdateFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.otaUpdateFiles"></a>

- *Type:* [`aws-cdk-sdk.iot.IotOtaUpdateFile`](#aws-cdk-sdk.iot.IotOtaUpdateFile)[]

---

##### `otaUpdateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.otaUpdateId"></a>

- *Type:* `string`

---

##### `otaUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.otaUpdateStatus"></a>

- *Type:* `string`

---

##### `protocols`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.protocols"></a>

- *Type:* `string`[]

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.targets"></a>

- *Type:* `string`[]

---

##### `targetSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateInfo.property.targetSelection"></a>

- *Type:* `string`

---

### IotOtaUpdateSummary <a name="aws-cdk-sdk.iot.IotOtaUpdateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotOtaUpdateSummary: iot.IotOtaUpdateSummary = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `otaUpdateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateSummary.property.otaUpdateArn"></a>

- *Type:* `string`

---

##### `otaUpdateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOtaUpdateSummary.property.otaUpdateId"></a>

- *Type:* `string`

---

### IotOutgoingCertificate <a name="aws-cdk-sdk.iot.IotOutgoingCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotOutgoingCertificate: iot.IotOutgoingCertificate = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOutgoingCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOutgoingCertificate.property.certificateId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOutgoingCertificate.property.creationDate"></a>

- *Type:* `string`

---

##### `transferDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOutgoingCertificate.property.transferDate"></a>

- *Type:* `string`

---

##### `transferMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOutgoingCertificate.property.transferMessage"></a>

- *Type:* `string`

---

##### `transferredTo`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotOutgoingCertificate.property.transferredTo"></a>

- *Type:* `string`

---

### IotPercentPair <a name="aws-cdk-sdk.iot.IotPercentPair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotPercentPair: iot.IotPercentPair = { ... }
```

##### `percent`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPercentPair.property.percent"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPercentPair.property.value"></a>

- *Type:* `number`

---

### IotPolicy <a name="aws-cdk-sdk.iot.IotPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotPolicy: iot.IotPolicy = { ... }
```

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPolicy.property.policyArn"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPolicy.property.policyName"></a>

- *Type:* `string`

---

### IotPolicyVersion <a name="aws-cdk-sdk.iot.IotPolicyVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotPolicyVersion: iot.IotPolicyVersion = { ... }
```

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPolicyVersion.property.createDate"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPolicyVersion.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPolicyVersion.property.versionId"></a>

- *Type:* `string`

---

### IotPolicyVersionIdentifier <a name="aws-cdk-sdk.iot.IotPolicyVersionIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotPolicyVersionIdentifier: iot.IotPolicyVersionIdentifier = { ... }
```

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPolicyVersionIdentifier.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPolicyVersionIdentifier.property.policyVersionId"></a>

- *Type:* `string`

---

### IotPresignedUrlConfig <a name="aws-cdk-sdk.iot.IotPresignedUrlConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotPresignedUrlConfig: iot.IotPresignedUrlConfig = { ... }
```

##### `expiresInSec`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPresignedUrlConfig.property.expiresInSec"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPresignedUrlConfig.property.roleArn"></a>

- *Type:* `string`

---

### IotProvisioningHook <a name="aws-cdk-sdk.iot.IotProvisioningHook"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotProvisioningHook: iot.IotProvisioningHook = { ... }
```

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotProvisioningHook.property.targetArn"></a>

- *Type:* `string`

---

##### `payloadVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotProvisioningHook.property.payloadVersion"></a>

- *Type:* `string`

---

### IotProvisioningTemplateSummary <a name="aws-cdk-sdk.iot.IotProvisioningTemplateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotProvisioningTemplateSummary: iot.IotProvisioningTemplateSummary = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotProvisioningTemplateSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotProvisioningTemplateSummary.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotProvisioningTemplateSummary.property.enabled"></a>

- *Type:* `boolean`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotProvisioningTemplateSummary.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `templateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotProvisioningTemplateSummary.property.templateArn"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotProvisioningTemplateSummary.property.templateName"></a>

- *Type:* `string`

---

### IotProvisioningTemplateVersionSummary <a name="aws-cdk-sdk.iot.IotProvisioningTemplateVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotProvisioningTemplateVersionSummary: iot.IotProvisioningTemplateVersionSummary = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotProvisioningTemplateVersionSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotProvisioningTemplateVersionSummary.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotProvisioningTemplateVersionSummary.property.versionId"></a>

- *Type:* `number`

---

### IotPublishFindingToSnsParams <a name="aws-cdk-sdk.iot.IotPublishFindingToSnsParams"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotPublishFindingToSnsParams: iot.IotPublishFindingToSnsParams = { ... }
```

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotPublishFindingToSnsParams.property.topicArn"></a>

- *Type:* `string`

---

### IotPutAssetPropertyValueEntry <a name="aws-cdk-sdk.iot.IotPutAssetPropertyValueEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotPutAssetPropertyValueEntry: iot.IotPutAssetPropertyValueEntry = { ... }
```

##### `propertyValues`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotPutAssetPropertyValueEntry.property.propertyValues"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAssetPropertyValue`](#aws-cdk-sdk.iot.IotAssetPropertyValue)[]

---

##### `assetId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPutAssetPropertyValueEntry.property.assetId"></a>

- *Type:* `string`

---

##### `entryId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPutAssetPropertyValueEntry.property.entryId"></a>

- *Type:* `string`

---

##### `propertyAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPutAssetPropertyValueEntry.property.propertyAlias"></a>

- *Type:* `string`

---

##### `propertyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotPutAssetPropertyValueEntry.property.propertyId"></a>

- *Type:* `string`

---

### IotPutItemInput <a name="aws-cdk-sdk.iot.IotPutItemInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotPutItemInput: iot.IotPutItemInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotPutItemInput.property.tableName"></a>

- *Type:* `string`

---

### IotRateIncreaseCriteria <a name="aws-cdk-sdk.iot.IotRateIncreaseCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRateIncreaseCriteria: iot.IotRateIncreaseCriteria = { ... }
```

##### `numberOfNotifiedThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

- *Type:* `number`

---

##### `numberOfSucceededThings`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRateIncreaseCriteria.property.numberOfSucceededThings"></a>

- *Type:* `number`

---

### IotRegisterCaCertificateRequest <a name="aws-cdk-sdk.iot.IotRegisterCaCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRegisterCaCertificateRequest: iot.IotRegisterCaCertificateRequest = { ... }
```

##### `caCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotRegisterCaCertificateRequest.property.caCertificate"></a>

- *Type:* `string`

---

##### `verificationCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotRegisterCaCertificateRequest.property.verificationCertificate"></a>

- *Type:* `string`

---

##### `allowAutoRegistration`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCaCertificateRequest.property.allowAutoRegistration"></a>

- *Type:* `boolean`

---

##### `registrationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCaCertificateRequest.property.registrationConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegistrationConfig`](#aws-cdk-sdk.iot.IotRegistrationConfig)

---

##### `setAsActive`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCaCertificateRequest.property.setAsActive"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCaCertificateRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotRegisterCaCertificateResponse <a name="aws-cdk-sdk.iot.IotRegisterCaCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRegisterCaCertificateResponse: iot.IotRegisterCaCertificateResponse = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCaCertificateResponse.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCaCertificateResponse.property.certificateId"></a>

- *Type:* `string`

---

### IotRegisterCertificateRequest <a name="aws-cdk-sdk.iot.IotRegisterCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRegisterCertificateRequest: iot.IotRegisterCertificateRequest = { ... }
```

##### `certificatePem`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotRegisterCertificateRequest.property.certificatePem"></a>

- *Type:* `string`

---

##### `caCertificatePem`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCertificateRequest.property.caCertificatePem"></a>

- *Type:* `string`

---

##### `setAsActive`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCertificateRequest.property.setAsActive"></a>

- *Type:* `boolean`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCertificateRequest.property.status"></a>

- *Type:* `string`

---

### IotRegisterCertificateResponse <a name="aws-cdk-sdk.iot.IotRegisterCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRegisterCertificateResponse: iot.IotRegisterCertificateResponse = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCertificateResponse.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCertificateResponse.property.certificateId"></a>

- *Type:* `string`

---

### IotRegisterCertificateWithoutCaRequest <a name="aws-cdk-sdk.iot.IotRegisterCertificateWithoutCaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRegisterCertificateWithoutCaRequest: iot.IotRegisterCertificateWithoutCaRequest = { ... }
```

##### `certificatePem`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotRegisterCertificateWithoutCaRequest.property.certificatePem"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCertificateWithoutCaRequest.property.status"></a>

- *Type:* `string`

---

### IotRegisterCertificateWithoutCaResponse <a name="aws-cdk-sdk.iot.IotRegisterCertificateWithoutCaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRegisterCertificateWithoutCaResponse: iot.IotRegisterCertificateWithoutCaResponse = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCertificateWithoutCaResponse.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterCertificateWithoutCaResponse.property.certificateId"></a>

- *Type:* `string`

---

### IotRegisterThingRequest <a name="aws-cdk-sdk.iot.IotRegisterThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRegisterThingRequest: iot.IotRegisterThingRequest = { ... }
```

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotRegisterThingRequest.property.templateBody"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterThingRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### IotRegisterThingResponse <a name="aws-cdk-sdk.iot.IotRegisterThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRegisterThingResponse: iot.IotRegisterThingResponse = { ... }
```

##### `certificatePem`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterThingResponse.property.certificatePem"></a>

- *Type:* `string`

---

##### `resourceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegisterThingResponse.property.resourceArns"></a>

- *Type:* {[ key: string ]: `string`}

---

### IotRegistrationConfig <a name="aws-cdk-sdk.iot.IotRegistrationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRegistrationConfig: iot.IotRegistrationConfig = { ... }
```

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegistrationConfig.property.roleArn"></a>

- *Type:* `string`

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRegistrationConfig.property.templateBody"></a>

- *Type:* `string`

---

### IotRejectCertificateTransferRequest <a name="aws-cdk-sdk.iot.IotRejectCertificateTransferRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRejectCertificateTransferRequest: iot.IotRejectCertificateTransferRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotRejectCertificateTransferRequest.property.certificateId"></a>

- *Type:* `string`

---

##### `rejectReason`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRejectCertificateTransferRequest.property.rejectReason"></a>

- *Type:* `string`

---

### IotRelatedResource <a name="aws-cdk-sdk.iot.IotRelatedResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRelatedResource: iot.IotRelatedResource = { ... }
```

##### `additionalInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRelatedResource.property.additionalInfo"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRelatedResource.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResourceIdentifier`](#aws-cdk-sdk.iot.IotResourceIdentifier)

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRelatedResource.property.resourceType"></a>

- *Type:* `string`

---

### IotRemoveThingFromBillingGroupRequest <a name="aws-cdk-sdk.iot.IotRemoveThingFromBillingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRemoveThingFromBillingGroupRequest: iot.IotRemoveThingFromBillingGroupRequest = { ... }
```

##### `billingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRemoveThingFromBillingGroupRequest.property.billingGroupArn"></a>

- *Type:* `string`

---

##### `billingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRemoveThingFromBillingGroupRequest.property.billingGroupName"></a>

- *Type:* `string`

---

##### `thingArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRemoveThingFromBillingGroupRequest.property.thingArn"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRemoveThingFromBillingGroupRequest.property.thingName"></a>

- *Type:* `string`

---

### IotRemoveThingFromBillingGroupResponse <a name="aws-cdk-sdk.iot.IotRemoveThingFromBillingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRemoveThingFromBillingGroupResponse: iot.IotRemoveThingFromBillingGroupResponse = { ... }
```

### IotRemoveThingFromThingGroupRequest <a name="aws-cdk-sdk.iot.IotRemoveThingFromThingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRemoveThingFromThingGroupRequest: iot.IotRemoveThingFromThingGroupRequest = { ... }
```

##### `thingArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRemoveThingFromThingGroupRequest.property.thingArn"></a>

- *Type:* `string`

---

##### `thingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRemoveThingFromThingGroupRequest.property.thingGroupArn"></a>

- *Type:* `string`

---

##### `thingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRemoveThingFromThingGroupRequest.property.thingGroupName"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRemoveThingFromThingGroupRequest.property.thingName"></a>

- *Type:* `string`

---

### IotRemoveThingFromThingGroupResponse <a name="aws-cdk-sdk.iot.IotRemoveThingFromThingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRemoveThingFromThingGroupResponse: iot.IotRemoveThingFromThingGroupResponse = { ... }
```

### IotReplaceDefaultPolicyVersionParams <a name="aws-cdk-sdk.iot.IotReplaceDefaultPolicyVersionParams"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotReplaceDefaultPolicyVersionParams: iot.IotReplaceDefaultPolicyVersionParams = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotReplaceDefaultPolicyVersionParams.property.templateName"></a>

- *Type:* `string`

---

### IotReplaceTopicRuleRequest <a name="aws-cdk-sdk.iot.IotReplaceTopicRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotReplaceTopicRuleRequest: iot.IotReplaceTopicRuleRequest = { ... }
```

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotReplaceTopicRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

##### `topicRulePayload`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotReplaceTopicRuleRequest.property.topicRulePayload"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTopicRulePayload`](#aws-cdk-sdk.iot.IotTopicRulePayload)

---

### IotRepublishAction <a name="aws-cdk-sdk.iot.IotRepublishAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRepublishAction: iot.IotRepublishAction = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotRepublishAction.property.roleArn"></a>

- *Type:* `string`

---

##### `topic`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotRepublishAction.property.topic"></a>

- *Type:* `string`

---

##### `qos`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRepublishAction.property.qos"></a>

- *Type:* `number`

---

### IotResourceIdentifier <a name="aws-cdk-sdk.iot.IotResourceIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotResourceIdentifier: iot.IotResourceIdentifier = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotResourceIdentifier.property.account"></a>

- *Type:* `string`

---

##### `caCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotResourceIdentifier.property.caCertificateId"></a>

- *Type:* `string`

---

##### `clientId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotResourceIdentifier.property.clientId"></a>

- *Type:* `string`

---

##### `cognitoIdentityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotResourceIdentifier.property.cognitoIdentityPoolId"></a>

- *Type:* `string`

---

##### `deviceCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotResourceIdentifier.property.deviceCertificateId"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotResourceIdentifier.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `policyVersionIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotResourceIdentifier.property.policyVersionIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicyVersionIdentifier`](#aws-cdk-sdk.iot.IotPolicyVersionIdentifier)

---

##### `roleAliasArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotResourceIdentifier.property.roleAliasArn"></a>

- *Type:* `string`

---

### IotRoleAliasDescription <a name="aws-cdk-sdk.iot.IotRoleAliasDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotRoleAliasDescription: iot.IotRoleAliasDescription = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRoleAliasDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `credentialDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRoleAliasDescription.property.credentialDurationSeconds"></a>

- *Type:* `number`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRoleAliasDescription.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRoleAliasDescription.property.owner"></a>

- *Type:* `string`

---

##### `roleAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRoleAliasDescription.property.roleAlias"></a>

- *Type:* `string`

---

##### `roleAliasArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRoleAliasDescription.property.roleAliasArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotRoleAliasDescription.property.roleArn"></a>

- *Type:* `string`

---

### IotS3Action <a name="aws-cdk-sdk.iot.IotS3Action"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotS3Action: iot.IotS3Action = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotS3Action.property.bucketName"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotS3Action.property.key"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotS3Action.property.roleArn"></a>

- *Type:* `string`

---

##### `cannedAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotS3Action.property.cannedAcl"></a>

- *Type:* `string`

---

### IotS3Destination <a name="aws-cdk-sdk.iot.IotS3Destination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotS3Destination: iot.IotS3Destination = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotS3Destination.property.bucket"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotS3Destination.property.prefix"></a>

- *Type:* `string`

---

### IotS3Location <a name="aws-cdk-sdk.iot.IotS3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotS3Location: iot.IotS3Location = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotS3Location.property.key"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotS3Location.property.version"></a>

- *Type:* `string`

---

### IotSalesforceAction <a name="aws-cdk-sdk.iot.IotSalesforceAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSalesforceAction: iot.IotSalesforceAction = { ... }
```

##### `token`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSalesforceAction.property.token"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSalesforceAction.property.url"></a>

- *Type:* `string`

---

### IotScheduledAuditMetadata <a name="aws-cdk-sdk.iot.IotScheduledAuditMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotScheduledAuditMetadata: iot.IotScheduledAuditMetadata = { ... }
```

##### `dayOfMonth`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotScheduledAuditMetadata.property.dayOfMonth"></a>

- *Type:* `string`

---

##### `dayOfWeek`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotScheduledAuditMetadata.property.dayOfWeek"></a>

- *Type:* `string`

---

##### `frequency`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotScheduledAuditMetadata.property.frequency"></a>

- *Type:* `string`

---

##### `scheduledAuditArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotScheduledAuditMetadata.property.scheduledAuditArn"></a>

- *Type:* `string`

---

##### `scheduledAuditName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotScheduledAuditMetadata.property.scheduledAuditName"></a>

- *Type:* `string`

---

### IotSearchIndexRequest <a name="aws-cdk-sdk.iot.IotSearchIndexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSearchIndexRequest: iot.IotSearchIndexRequest = { ... }
```

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSearchIndexRequest.property.queryString"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSearchIndexRequest.property.indexName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSearchIndexRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSearchIndexRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `queryVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSearchIndexRequest.property.queryVersion"></a>

- *Type:* `string`

---

### IotSearchIndexResponse <a name="aws-cdk-sdk.iot.IotSearchIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSearchIndexResponse: iot.IotSearchIndexResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSearchIndexResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `thingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSearchIndexResponse.property.thingGroups"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingGroupDocument`](#aws-cdk-sdk.iot.IotThingGroupDocument)[]

---

##### `things`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSearchIndexResponse.property.things"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingDocument`](#aws-cdk-sdk.iot.IotThingDocument)[]

---

### IotSecurityProfileIdentifier <a name="aws-cdk-sdk.iot.IotSecurityProfileIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSecurityProfileIdentifier: iot.IotSecurityProfileIdentifier = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSecurityProfileIdentifier.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSecurityProfileIdentifier.property.name"></a>

- *Type:* `string`

---

### IotSecurityProfileTarget <a name="aws-cdk-sdk.iot.IotSecurityProfileTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSecurityProfileTarget: iot.IotSecurityProfileTarget = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSecurityProfileTarget.property.arn"></a>

- *Type:* `string`

---

### IotSecurityProfileTargetMapping <a name="aws-cdk-sdk.iot.IotSecurityProfileTargetMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSecurityProfileTargetMapping: iot.IotSecurityProfileTargetMapping = { ... }
```

##### `securityProfileIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSecurityProfileTargetMapping.property.securityProfileIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSecurityProfileIdentifier`](#aws-cdk-sdk.iot.IotSecurityProfileIdentifier)

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSecurityProfileTargetMapping.property.target"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSecurityProfileTarget`](#aws-cdk-sdk.iot.IotSecurityProfileTarget)

---

### IotServerCertificateSummary <a name="aws-cdk-sdk.iot.IotServerCertificateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotServerCertificateSummary: iot.IotServerCertificateSummary = { ... }
```

##### `serverCertificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotServerCertificateSummary.property.serverCertificateArn"></a>

- *Type:* `string`

---

##### `serverCertificateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotServerCertificateSummary.property.serverCertificateStatus"></a>

- *Type:* `string`

---

##### `serverCertificateStatusDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotServerCertificateSummary.property.serverCertificateStatusDetail"></a>

- *Type:* `string`

---

### IotSetDefaultAuthorizerRequest <a name="aws-cdk-sdk.iot.IotSetDefaultAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSetDefaultAuthorizerRequest: iot.IotSetDefaultAuthorizerRequest = { ... }
```

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSetDefaultAuthorizerRequest.property.authorizerName"></a>

- *Type:* `string`

---

### IotSetDefaultAuthorizerResponse <a name="aws-cdk-sdk.iot.IotSetDefaultAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSetDefaultAuthorizerResponse: iot.IotSetDefaultAuthorizerResponse = { ... }
```

##### `authorizerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSetDefaultAuthorizerResponse.property.authorizerArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSetDefaultAuthorizerResponse.property.authorizerName"></a>

- *Type:* `string`

---

### IotSetDefaultPolicyVersionRequest <a name="aws-cdk-sdk.iot.IotSetDefaultPolicyVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSetDefaultPolicyVersionRequest: iot.IotSetDefaultPolicyVersionRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSetDefaultPolicyVersionRequest.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSetDefaultPolicyVersionRequest.property.policyVersionId"></a>

- *Type:* `string`

---

### IotSetLoggingOptionsRequest <a name="aws-cdk-sdk.iot.IotSetLoggingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSetLoggingOptionsRequest: iot.IotSetLoggingOptionsRequest = { ... }
```

##### `loggingOptionsPayload`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSetLoggingOptionsRequest.property.loggingOptionsPayload"></a>

- *Type:* [`aws-cdk-sdk.iot.IotLoggingOptionsPayload`](#aws-cdk-sdk.iot.IotLoggingOptionsPayload)

---

### IotSetV2LoggingLevelRequest <a name="aws-cdk-sdk.iot.IotSetV2LoggingLevelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSetV2LoggingLevelRequest: iot.IotSetV2LoggingLevelRequest = { ... }
```

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSetV2LoggingLevelRequest.property.logLevel"></a>

- *Type:* `string`

---

##### `logTarget`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSetV2LoggingLevelRequest.property.logTarget"></a>

- *Type:* [`aws-cdk-sdk.iot.IotLogTarget`](#aws-cdk-sdk.iot.IotLogTarget)

---

### IotSetV2LoggingOptionsRequest <a name="aws-cdk-sdk.iot.IotSetV2LoggingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSetV2LoggingOptionsRequest: iot.IotSetV2LoggingOptionsRequest = { ... }
```

##### `defaultLogLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSetV2LoggingOptionsRequest.property.defaultLogLevel"></a>

- *Type:* `string`

---

##### `disableAllLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSetV2LoggingOptionsRequest.property.disableAllLogs"></a>

- *Type:* `boolean`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSetV2LoggingOptionsRequest.property.roleArn"></a>

- *Type:* `string`

---

### IotSigningProfileParameter <a name="aws-cdk-sdk.iot.IotSigningProfileParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSigningProfileParameter: iot.IotSigningProfileParameter = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSigningProfileParameter.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificatePathOnDevice`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSigningProfileParameter.property.certificatePathOnDevice"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSigningProfileParameter.property.platform"></a>

- *Type:* `string`

---

### IotSigV4Authorization <a name="aws-cdk-sdk.iot.IotSigV4Authorization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSigV4Authorization: iot.IotSigV4Authorization = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSigV4Authorization.property.roleArn"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSigV4Authorization.property.serviceName"></a>

- *Type:* `string`

---

##### `signingRegion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSigV4Authorization.property.signingRegion"></a>

- *Type:* `string`

---

### IotSnsAction <a name="aws-cdk-sdk.iot.IotSnsAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSnsAction: iot.IotSnsAction = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSnsAction.property.roleArn"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSnsAction.property.targetArn"></a>

- *Type:* `string`

---

##### `messageFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSnsAction.property.messageFormat"></a>

- *Type:* `string`

---

### IotSqsAction <a name="aws-cdk-sdk.iot.IotSqsAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotSqsAction: iot.IotSqsAction = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSqsAction.property.queueUrl"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotSqsAction.property.roleArn"></a>

- *Type:* `string`

---

##### `useBase64`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotSqsAction.property.useBase64"></a>

- *Type:* `boolean`

---

### IotStartAuditMitigationActionsTaskRequest <a name="aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStartAuditMitigationActionsTaskRequest: iot.IotStartAuditMitigationActionsTaskRequest = { ... }
```

##### `auditCheckToActionsMapping`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskRequest.property.auditCheckToActionsMapping"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskRequest.property.target"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditMitigationActionsTaskTarget`](#aws-cdk-sdk.iot.IotAuditMitigationActionsTaskTarget)

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskRequest.property.taskId"></a>

- *Type:* `string`

---

### IotStartAuditMitigationActionsTaskResponse <a name="aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStartAuditMitigationActionsTaskResponse: iot.IotStartAuditMitigationActionsTaskResponse = { ... }
```

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskResponse.property.taskId"></a>

- *Type:* `string`

---

### IotStartOnDemandAuditTaskRequest <a name="aws-cdk-sdk.iot.IotStartOnDemandAuditTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStartOnDemandAuditTaskRequest: iot.IotStartOnDemandAuditTaskRequest = { ... }
```

##### `targetCheckNames`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStartOnDemandAuditTaskRequest.property.targetCheckNames"></a>

- *Type:* `string`[]

---

### IotStartOnDemandAuditTaskResponse <a name="aws-cdk-sdk.iot.IotStartOnDemandAuditTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStartOnDemandAuditTaskResponse: iot.IotStartOnDemandAuditTaskResponse = { ... }
```

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStartOnDemandAuditTaskResponse.property.taskId"></a>

- *Type:* `string`

---

### IotStartSigningJobParameter <a name="aws-cdk-sdk.iot.IotStartSigningJobParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStartSigningJobParameter: iot.IotStartSigningJobParameter = { ... }
```

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStartSigningJobParameter.property.destination"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDestination`](#aws-cdk-sdk.iot.IotDestination)

---

##### `signingProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStartSigningJobParameter.property.signingProfileName"></a>

- *Type:* `string`

---

##### `signingProfileParameter`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStartSigningJobParameter.property.signingProfileParameter"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSigningProfileParameter`](#aws-cdk-sdk.iot.IotSigningProfileParameter)

---

### IotStartThingRegistrationTaskRequest <a name="aws-cdk-sdk.iot.IotStartThingRegistrationTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStartThingRegistrationTaskRequest: iot.IotStartThingRegistrationTaskRequest = { ... }
```

##### `inputFileBucket`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStartThingRegistrationTaskRequest.property.inputFileBucket"></a>

- *Type:* `string`

---

##### `inputFileKey`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStartThingRegistrationTaskRequest.property.inputFileKey"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStartThingRegistrationTaskRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStartThingRegistrationTaskRequest.property.templateBody"></a>

- *Type:* `string`

---

### IotStartThingRegistrationTaskResponse <a name="aws-cdk-sdk.iot.IotStartThingRegistrationTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStartThingRegistrationTaskResponse: iot.IotStartThingRegistrationTaskResponse = { ... }
```

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStartThingRegistrationTaskResponse.property.taskId"></a>

- *Type:* `string`

---

### IotStatisticalThreshold <a name="aws-cdk-sdk.iot.IotStatisticalThreshold"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStatisticalThreshold: iot.IotStatisticalThreshold = { ... }
```

##### `statistic`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStatisticalThreshold.property.statistic"></a>

- *Type:* `string`

---

### IotStatistics <a name="aws-cdk-sdk.iot.IotStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStatistics: iot.IotStatistics = { ... }
```

##### `average`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStatistics.property.average"></a>

- *Type:* `number`

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStatistics.property.count"></a>

- *Type:* `number`

---

##### `maximum`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStatistics.property.maximum"></a>

- *Type:* `number`

---

##### `minimum`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStatistics.property.minimum"></a>

- *Type:* `number`

---

##### `stdDeviation`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStatistics.property.stdDeviation"></a>

- *Type:* `number`

---

##### `sum`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStatistics.property.sum"></a>

- *Type:* `number`

---

##### `sumOfSquares`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStatistics.property.sumOfSquares"></a>

- *Type:* `number`

---

##### `variance`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStatistics.property.variance"></a>

- *Type:* `number`

---

### IotStepFunctionsAction <a name="aws-cdk-sdk.iot.IotStepFunctionsAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStepFunctionsAction: iot.IotStepFunctionsAction = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStepFunctionsAction.property.roleArn"></a>

- *Type:* `string`

---

##### `stateMachineName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStepFunctionsAction.property.stateMachineName"></a>

- *Type:* `string`

---

##### `executionNamePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStepFunctionsAction.property.executionNamePrefix"></a>

- *Type:* `string`

---

### IotStopThingRegistrationTaskRequest <a name="aws-cdk-sdk.iot.IotStopThingRegistrationTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStopThingRegistrationTaskRequest: iot.IotStopThingRegistrationTaskRequest = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotStopThingRegistrationTaskRequest.property.taskId"></a>

- *Type:* `string`

---

### IotStopThingRegistrationTaskResponse <a name="aws-cdk-sdk.iot.IotStopThingRegistrationTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStopThingRegistrationTaskResponse: iot.IotStopThingRegistrationTaskResponse = { ... }
```

### IotStream <a name="aws-cdk-sdk.iot.IotStream"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStream: iot.IotStream = { ... }
```

##### `fileId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStream.property.fileId"></a>

- *Type:* `number`

---

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStream.property.streamId"></a>

- *Type:* `string`

---

### IotStreamFile <a name="aws-cdk-sdk.iot.IotStreamFile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStreamFile: iot.IotStreamFile = { ... }
```

##### `fileId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamFile.property.fileId"></a>

- *Type:* `number`

---

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamFile.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.iot.IotS3Location`](#aws-cdk-sdk.iot.IotS3Location)

---

### IotStreamInfo <a name="aws-cdk-sdk.iot.IotStreamInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStreamInfo: iot.IotStreamInfo = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamInfo.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamInfo.property.description"></a>

- *Type:* `string`

---

##### `files`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamInfo.property.files"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStreamFile`](#aws-cdk-sdk.iot.IotStreamFile)[]

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamInfo.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamInfo.property.roleArn"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamInfo.property.streamArn"></a>

- *Type:* `string`

---

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamInfo.property.streamId"></a>

- *Type:* `string`

---

##### `streamVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamInfo.property.streamVersion"></a>

- *Type:* `number`

---

### IotStreamSummary <a name="aws-cdk-sdk.iot.IotStreamSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotStreamSummary: iot.IotStreamSummary = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamSummary.property.description"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamSummary.property.streamArn"></a>

- *Type:* `string`

---

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamSummary.property.streamId"></a>

- *Type:* `string`

---

##### `streamVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotStreamSummary.property.streamVersion"></a>

- *Type:* `number`

---

### IotTag <a name="aws-cdk-sdk.iot.IotTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTag: iot.IotTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTag.property.value"></a>

- *Type:* `string`

---

### IotTagResourceRequest <a name="aws-cdk-sdk.iot.IotTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTagResourceRequest: iot.IotTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---

### IotTagResourceResponse <a name="aws-cdk-sdk.iot.IotTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTagResourceResponse: iot.IotTagResourceResponse = { ... }
```

### IotTaskStatistics <a name="aws-cdk-sdk.iot.IotTaskStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTaskStatistics: iot.IotTaskStatistics = { ... }
```

##### `canceledChecks`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatistics.property.canceledChecks"></a>

- *Type:* `number`

---

##### `compliantChecks`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatistics.property.compliantChecks"></a>

- *Type:* `number`

---

##### `failedChecks`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatistics.property.failedChecks"></a>

- *Type:* `number`

---

##### `inProgressChecks`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatistics.property.inProgressChecks"></a>

- *Type:* `number`

---

##### `nonCompliantChecks`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatistics.property.nonCompliantChecks"></a>

- *Type:* `number`

---

##### `totalChecks`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatistics.property.totalChecks"></a>

- *Type:* `number`

---

##### `waitingForDataCollectionChecks`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatistics.property.waitingForDataCollectionChecks"></a>

- *Type:* `number`

---

### IotTaskStatisticsForAuditCheck <a name="aws-cdk-sdk.iot.IotTaskStatisticsForAuditCheck"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTaskStatisticsForAuditCheck: iot.IotTaskStatisticsForAuditCheck = { ... }
```

##### `canceledFindingsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatisticsForAuditCheck.property.canceledFindingsCount"></a>

- *Type:* `number`

---

##### `failedFindingsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatisticsForAuditCheck.property.failedFindingsCount"></a>

- *Type:* `number`

---

##### `skippedFindingsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatisticsForAuditCheck.property.skippedFindingsCount"></a>

- *Type:* `number`

---

##### `succeededFindingsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatisticsForAuditCheck.property.succeededFindingsCount"></a>

- *Type:* `number`

---

##### `totalFindingsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTaskStatisticsForAuditCheck.property.totalFindingsCount"></a>

- *Type:* `number`

---

### IotTestAuthorizationRequest <a name="aws-cdk-sdk.iot.IotTestAuthorizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTestAuthorizationRequest: iot.IotTestAuthorizationRequest = { ... }
```

##### `authInfos`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTestAuthorizationRequest.property.authInfos"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthInfo`](#aws-cdk-sdk.iot.IotAuthInfo)[]

---

##### `clientId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestAuthorizationRequest.property.clientId"></a>

- *Type:* `string`

---

##### `cognitoIdentityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestAuthorizationRequest.property.cognitoIdentityPoolId"></a>

- *Type:* `string`

---

##### `policyNamesToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestAuthorizationRequest.property.policyNamesToAdd"></a>

- *Type:* `string`[]

---

##### `policyNamesToSkip`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestAuthorizationRequest.property.policyNamesToSkip"></a>

- *Type:* `string`[]

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestAuthorizationRequest.property.principal"></a>

- *Type:* `string`

---

### IotTestAuthorizationResponse <a name="aws-cdk-sdk.iot.IotTestAuthorizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTestAuthorizationResponse: iot.IotTestAuthorizationResponse = { ... }
```

##### `authResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestAuthorizationResponse.property.authResults"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthResult`](#aws-cdk-sdk.iot.IotAuthResult)[]

---

### IotTestInvokeAuthorizerRequest <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTestInvokeAuthorizerRequest: iot.IotTestInvokeAuthorizerRequest = { ... }
```

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest.property.authorizerName"></a>

- *Type:* `string`

---

##### `httpContext`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest.property.httpContext"></a>

- *Type:* [`aws-cdk-sdk.iot.IotHttpContext`](#aws-cdk-sdk.iot.IotHttpContext)

---

##### `mqttContext`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest.property.mqttContext"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMqttContext`](#aws-cdk-sdk.iot.IotMqttContext)

---

##### `tlsContext`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest.property.tlsContext"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTlsContext`](#aws-cdk-sdk.iot.IotTlsContext)

---

##### `token`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest.property.token"></a>

- *Type:* `string`

---

##### `tokenSignature`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest.property.tokenSignature"></a>

- *Type:* `string`

---

### IotTestInvokeAuthorizerResponse <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTestInvokeAuthorizerResponse: iot.IotTestInvokeAuthorizerResponse = { ... }
```

##### `disconnectAfterInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerResponse.property.disconnectAfterInSeconds"></a>

- *Type:* `number`

---

##### `isAuthenticated`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerResponse.property.isAuthenticated"></a>

- *Type:* `boolean`

---

##### `policyDocuments`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerResponse.property.policyDocuments"></a>

- *Type:* `string`[]

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerResponse.property.principalId"></a>

- *Type:* `string`

---

##### `refreshAfterInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTestInvokeAuthorizerResponse.property.refreshAfterInSeconds"></a>

- *Type:* `number`

---

### IotThingAttribute <a name="aws-cdk-sdk.iot.IotThingAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingAttribute: iot.IotThingAttribute = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingAttribute.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `thingArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingAttribute.property.thingArn"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingAttribute.property.thingName"></a>

- *Type:* `string`

---

##### `thingTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingAttribute.property.thingTypeName"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingAttribute.property.version"></a>

- *Type:* `number`

---

### IotThingConnectivity <a name="aws-cdk-sdk.iot.IotThingConnectivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingConnectivity: iot.IotThingConnectivity = { ... }
```

##### `connected`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingConnectivity.property.connected"></a>

- *Type:* `boolean`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingConnectivity.property.timestamp"></a>

- *Type:* `number`

---

### IotThingDocument <a name="aws-cdk-sdk.iot.IotThingDocument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingDocument: iot.IotThingDocument = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingDocument.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `connectivity`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingDocument.property.connectivity"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingConnectivity`](#aws-cdk-sdk.iot.IotThingConnectivity)

---

##### `shadow`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingDocument.property.shadow"></a>

- *Type:* `string`

---

##### `thingGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingDocument.property.thingGroupNames"></a>

- *Type:* `string`[]

---

##### `thingId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingDocument.property.thingId"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingDocument.property.thingName"></a>

- *Type:* `string`

---

##### `thingTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingDocument.property.thingTypeName"></a>

- *Type:* `string`

---

### IotThingGroupDocument <a name="aws-cdk-sdk.iot.IotThingGroupDocument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingGroupDocument: iot.IotThingGroupDocument = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupDocument.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `parentGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupDocument.property.parentGroupNames"></a>

- *Type:* `string`[]

---

##### `thingGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupDocument.property.thingGroupDescription"></a>

- *Type:* `string`

---

##### `thingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupDocument.property.thingGroupId"></a>

- *Type:* `string`

---

##### `thingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupDocument.property.thingGroupName"></a>

- *Type:* `string`

---

### IotThingGroupIndexingConfiguration <a name="aws-cdk-sdk.iot.IotThingGroupIndexingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingGroupIndexingConfiguration: iot.IotThingGroupIndexingConfiguration = { ... }
```

##### `thingGroupIndexingMode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotThingGroupIndexingConfiguration.property.thingGroupIndexingMode"></a>

- *Type:* `string`

---

##### `customFields`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupIndexingConfiguration.property.customFields"></a>

- *Type:* [`aws-cdk-sdk.iot.IotField`](#aws-cdk-sdk.iot.IotField)[]

---

##### `managedFields`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupIndexingConfiguration.property.managedFields"></a>

- *Type:* [`aws-cdk-sdk.iot.IotField`](#aws-cdk-sdk.iot.IotField)[]

---

### IotThingGroupMetadata <a name="aws-cdk-sdk.iot.IotThingGroupMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingGroupMetadata: iot.IotThingGroupMetadata = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `parentGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupMetadata.property.parentGroupName"></a>

- *Type:* `string`

---

##### `rootToParentThingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupMetadata.property.rootToParentThingGroups"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGroupNameAndArn`](#aws-cdk-sdk.iot.IotGroupNameAndArn)[]

---

### IotThingGroupProperties <a name="aws-cdk-sdk.iot.IotThingGroupProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingGroupProperties: iot.IotThingGroupProperties = { ... }
```

##### `attributePayload`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupProperties.property.attributePayload"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAttributePayload`](#aws-cdk-sdk.iot.IotAttributePayload)

---

##### `thingGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingGroupProperties.property.thingGroupDescription"></a>

- *Type:* `string`

---

### IotThingIndexingConfiguration <a name="aws-cdk-sdk.iot.IotThingIndexingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingIndexingConfiguration: iot.IotThingIndexingConfiguration = { ... }
```

##### `thingIndexingMode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotThingIndexingConfiguration.property.thingIndexingMode"></a>

- *Type:* `string`

---

##### `customFields`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingIndexingConfiguration.property.customFields"></a>

- *Type:* [`aws-cdk-sdk.iot.IotField`](#aws-cdk-sdk.iot.IotField)[]

---

##### `managedFields`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingIndexingConfiguration.property.managedFields"></a>

- *Type:* [`aws-cdk-sdk.iot.IotField`](#aws-cdk-sdk.iot.IotField)[]

---

##### `thingConnectivityIndexingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingIndexingConfiguration.property.thingConnectivityIndexingMode"></a>

- *Type:* `string`

---

### IotThingTypeDefinition <a name="aws-cdk-sdk.iot.IotThingTypeDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingTypeDefinition: iot.IotThingTypeDefinition = { ... }
```

##### `thingTypeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingTypeDefinition.property.thingTypeArn"></a>

- *Type:* `string`

---

##### `thingTypeMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingTypeDefinition.property.thingTypeMetadata"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingTypeMetadata`](#aws-cdk-sdk.iot.IotThingTypeMetadata)

---

##### `thingTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingTypeDefinition.property.thingTypeName"></a>

- *Type:* `string`

---

##### `thingTypeProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingTypeDefinition.property.thingTypeProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingTypeProperties`](#aws-cdk-sdk.iot.IotThingTypeProperties)

---

### IotThingTypeMetadata <a name="aws-cdk-sdk.iot.IotThingTypeMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingTypeMetadata: iot.IotThingTypeMetadata = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingTypeMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `deprecated`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingTypeMetadata.property.deprecated"></a>

- *Type:* `boolean`

---

##### `deprecationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingTypeMetadata.property.deprecationDate"></a>

- *Type:* `string`

---

### IotThingTypeProperties <a name="aws-cdk-sdk.iot.IotThingTypeProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotThingTypeProperties: iot.IotThingTypeProperties = { ... }
```

##### `searchableAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingTypeProperties.property.searchableAttributes"></a>

- *Type:* `string`[]

---

##### `thingTypeDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotThingTypeProperties.property.thingTypeDescription"></a>

- *Type:* `string`

---

### IotTimeoutConfig <a name="aws-cdk-sdk.iot.IotTimeoutConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTimeoutConfig: iot.IotTimeoutConfig = { ... }
```

##### `inProgressTimeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

- *Type:* `number`

---

### IotTimestreamAction <a name="aws-cdk-sdk.iot.IotTimestreamAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTimestreamAction: iot.IotTimestreamAction = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTimestreamAction.property.databaseName"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTimestreamAction.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTimestreamDimension`](#aws-cdk-sdk.iot.IotTimestreamDimension)[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTimestreamAction.property.roleArn"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTimestreamAction.property.tableName"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTimestreamAction.property.timestamp"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTimestreamTimestamp`](#aws-cdk-sdk.iot.IotTimestreamTimestamp)

---

### IotTimestreamDimension <a name="aws-cdk-sdk.iot.IotTimestreamDimension"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTimestreamDimension: iot.IotTimestreamDimension = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTimestreamDimension.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTimestreamDimension.property.value"></a>

- *Type:* `string`

---

### IotTimestreamTimestamp <a name="aws-cdk-sdk.iot.IotTimestreamTimestamp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTimestreamTimestamp: iot.IotTimestreamTimestamp = { ... }
```

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTimestreamTimestamp.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTimestreamTimestamp.property.value"></a>

- *Type:* `string`

---

### IotTlsContext <a name="aws-cdk-sdk.iot.IotTlsContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTlsContext: iot.IotTlsContext = { ... }
```

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTlsContext.property.serverName"></a>

- *Type:* `string`

---

### IotTopicRule <a name="aws-cdk-sdk.iot.IotTopicRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTopicRule: iot.IotTopicRule = { ... }
```

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRule.property.actions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAction`](#aws-cdk-sdk.iot.IotAction)[]

---

##### `awsIotSqlVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRule.property.awsIotSqlVersion"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRule.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRule.property.description"></a>

- *Type:* `string`

---

##### `errorAction`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRule.property.errorAction"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAction`](#aws-cdk-sdk.iot.IotAction)

---

##### `ruleDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRule.property.ruleDisabled"></a>

- *Type:* `boolean`

---

##### `ruleName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRule.property.ruleName"></a>

- *Type:* `string`

---

##### `sql`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRule.property.sql"></a>

- *Type:* `string`

---

### IotTopicRuleDestination <a name="aws-cdk-sdk.iot.IotTopicRuleDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTopicRuleDestination: iot.IotTopicRuleDestination = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleDestination.property.arn"></a>

- *Type:* `string`

---

##### `httpUrlProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleDestination.property.httpUrlProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotHttpUrlDestinationProperties`](#aws-cdk-sdk.iot.IotHttpUrlDestinationProperties)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleDestination.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleDestination.property.statusReason"></a>

- *Type:* `string`

---

### IotTopicRuleDestinationConfiguration <a name="aws-cdk-sdk.iot.IotTopicRuleDestinationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTopicRuleDestinationConfiguration: iot.IotTopicRuleDestinationConfiguration = { ... }
```

##### `httpUrlConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleDestinationConfiguration.property.httpUrlConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iot.IotHttpUrlDestinationConfiguration`](#aws-cdk-sdk.iot.IotHttpUrlDestinationConfiguration)

---

### IotTopicRuleDestinationSummary <a name="aws-cdk-sdk.iot.IotTopicRuleDestinationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTopicRuleDestinationSummary: iot.IotTopicRuleDestinationSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleDestinationSummary.property.arn"></a>

- *Type:* `string`

---

##### `httpUrlSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleDestinationSummary.property.httpUrlSummary"></a>

- *Type:* [`aws-cdk-sdk.iot.IotHttpUrlDestinationSummary`](#aws-cdk-sdk.iot.IotHttpUrlDestinationSummary)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleDestinationSummary.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleDestinationSummary.property.statusReason"></a>

- *Type:* `string`

---

### IotTopicRuleListItem <a name="aws-cdk-sdk.iot.IotTopicRuleListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTopicRuleListItem: iot.IotTopicRuleListItem = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleListItem.property.createdAt"></a>

- *Type:* `string`

---

##### `ruleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleListItem.property.ruleArn"></a>

- *Type:* `string`

---

##### `ruleDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleListItem.property.ruleDisabled"></a>

- *Type:* `boolean`

---

##### `ruleName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleListItem.property.ruleName"></a>

- *Type:* `string`

---

##### `topicPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRuleListItem.property.topicPattern"></a>

- *Type:* `string`

---

### IotTopicRulePayload <a name="aws-cdk-sdk.iot.IotTopicRulePayload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTopicRulePayload: iot.IotTopicRulePayload = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTopicRulePayload.property.actions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAction`](#aws-cdk-sdk.iot.IotAction)[]

---

##### `sql`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTopicRulePayload.property.sql"></a>

- *Type:* `string`

---

##### `awsIotSqlVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRulePayload.property.awsIotSqlVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRulePayload.property.description"></a>

- *Type:* `string`

---

##### `errorAction`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRulePayload.property.errorAction"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAction`](#aws-cdk-sdk.iot.IotAction)

---

##### `ruleDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTopicRulePayload.property.ruleDisabled"></a>

- *Type:* `boolean`

---

### IotTransferCertificateRequest <a name="aws-cdk-sdk.iot.IotTransferCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTransferCertificateRequest: iot.IotTransferCertificateRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTransferCertificateRequest.property.certificateId"></a>

- *Type:* `string`

---

##### `targetAwsAccount`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotTransferCertificateRequest.property.targetAwsAccount"></a>

- *Type:* `string`

---

##### `transferMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTransferCertificateRequest.property.transferMessage"></a>

- *Type:* `string`

---

### IotTransferCertificateResponse <a name="aws-cdk-sdk.iot.IotTransferCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTransferCertificateResponse: iot.IotTransferCertificateResponse = { ... }
```

##### `transferredCertificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTransferCertificateResponse.property.transferredCertificateArn"></a>

- *Type:* `string`

---

### IotTransferData <a name="aws-cdk-sdk.iot.IotTransferData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotTransferData: iot.IotTransferData = { ... }
```

##### `acceptDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTransferData.property.acceptDate"></a>

- *Type:* `string`

---

##### `rejectDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTransferData.property.rejectDate"></a>

- *Type:* `string`

---

##### `rejectReason`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTransferData.property.rejectReason"></a>

- *Type:* `string`

---

##### `transferDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTransferData.property.transferDate"></a>

- *Type:* `string`

---

##### `transferMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotTransferData.property.transferMessage"></a>

- *Type:* `string`

---

### IotUntagResourceRequest <a name="aws-cdk-sdk.iot.IotUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUntagResourceRequest: iot.IotUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### IotUntagResourceResponse <a name="aws-cdk-sdk.iot.IotUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUntagResourceResponse: iot.IotUntagResourceResponse = { ... }
```

### IotUpdateAccountAuditConfigurationRequest <a name="aws-cdk-sdk.iot.IotUpdateAccountAuditConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateAccountAuditConfigurationRequest: iot.IotUpdateAccountAuditConfigurationRequest = { ... }
```

##### `auditCheckConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAccountAuditConfigurationRequest.property.auditCheckConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAuditCheckConfiguration`](#aws-cdk-sdk.iot.IotAuditCheckConfiguration)}

---

##### `auditNotificationTargetConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAccountAuditConfigurationRequest.property.auditNotificationTargetConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAuditNotificationTarget`](#aws-cdk-sdk.iot.IotAuditNotificationTarget)}

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAccountAuditConfigurationRequest.property.roleArn"></a>

- *Type:* `string`

---

### IotUpdateAccountAuditConfigurationResponse <a name="aws-cdk-sdk.iot.IotUpdateAccountAuditConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateAccountAuditConfigurationResponse: iot.IotUpdateAccountAuditConfigurationResponse = { ... }
```

### IotUpdateAuditSuppressionRequest <a name="aws-cdk-sdk.iot.IotUpdateAuditSuppressionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateAuditSuppressionRequest: iot.IotUpdateAuditSuppressionRequest = { ... }
```

##### `checkName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuditSuppressionRequest.property.checkName"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuditSuppressionRequest.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResourceIdentifier`](#aws-cdk-sdk.iot.IotResourceIdentifier)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuditSuppressionRequest.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuditSuppressionRequest.property.expirationDate"></a>

- *Type:* `string`

---

##### `suppressIndefinitely`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuditSuppressionRequest.property.suppressIndefinitely"></a>

- *Type:* `boolean`

---

### IotUpdateAuditSuppressionResponse <a name="aws-cdk-sdk.iot.IotUpdateAuditSuppressionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateAuditSuppressionResponse: iot.IotUpdateAuditSuppressionResponse = { ... }
```

### IotUpdateAuthorizerRequest <a name="aws-cdk-sdk.iot.IotUpdateAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateAuthorizerRequest: iot.IotUpdateAuthorizerRequest = { ... }
```

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuthorizerRequest.property.authorizerName"></a>

- *Type:* `string`

---

##### `authorizerFunctionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuthorizerRequest.property.authorizerFunctionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuthorizerRequest.property.status"></a>

- *Type:* `string`

---

##### `tokenKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuthorizerRequest.property.tokenKeyName"></a>

- *Type:* `string`

---

##### `tokenSigningPublicKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuthorizerRequest.property.tokenSigningPublicKeys"></a>

- *Type:* {[ key: string ]: `string`}

---

### IotUpdateAuthorizerResponse <a name="aws-cdk-sdk.iot.IotUpdateAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateAuthorizerResponse: iot.IotUpdateAuthorizerResponse = { ... }
```

##### `authorizerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuthorizerResponse.property.authorizerArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateAuthorizerResponse.property.authorizerName"></a>

- *Type:* `string`

---

### IotUpdateBillingGroupRequest <a name="aws-cdk-sdk.iot.IotUpdateBillingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateBillingGroupRequest: iot.IotUpdateBillingGroupRequest = { ... }
```

##### `billingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateBillingGroupRequest.property.billingGroupName"></a>

- *Type:* `string`

---

##### `billingGroupProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateBillingGroupRequest.property.billingGroupProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBillingGroupProperties`](#aws-cdk-sdk.iot.IotBillingGroupProperties)

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateBillingGroupRequest.property.expectedVersion"></a>

- *Type:* `number`

---

### IotUpdateBillingGroupResponse <a name="aws-cdk-sdk.iot.IotUpdateBillingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateBillingGroupResponse: iot.IotUpdateBillingGroupResponse = { ... }
```

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateBillingGroupResponse.property.version"></a>

- *Type:* `number`

---

### IotUpdateCaCertificateParams <a name="aws-cdk-sdk.iot.IotUpdateCaCertificateParams"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateCaCertificateParams: iot.IotUpdateCaCertificateParams = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateCaCertificateParams.property.action"></a>

- *Type:* `string`

---

### IotUpdateCaCertificateRequest <a name="aws-cdk-sdk.iot.IotUpdateCaCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateCaCertificateRequest: iot.IotUpdateCaCertificateRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateCaCertificateRequest.property.certificateId"></a>

- *Type:* `string`

---

##### `newAutoRegistrationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateCaCertificateRequest.property.newAutoRegistrationStatus"></a>

- *Type:* `string`

---

##### `newStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateCaCertificateRequest.property.newStatus"></a>

- *Type:* `string`

---

##### `registrationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateCaCertificateRequest.property.registrationConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegistrationConfig`](#aws-cdk-sdk.iot.IotRegistrationConfig)

---

##### `removeAutoRegistration`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateCaCertificateRequest.property.removeAutoRegistration"></a>

- *Type:* `boolean`

---

### IotUpdateCertificateRequest <a name="aws-cdk-sdk.iot.IotUpdateCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateCertificateRequest: iot.IotUpdateCertificateRequest = { ... }
```

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateCertificateRequest.property.certificateId"></a>

- *Type:* `string`

---

##### `newStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateCertificateRequest.property.newStatus"></a>

- *Type:* `string`

---

### IotUpdateDeviceCertificateParams <a name="aws-cdk-sdk.iot.IotUpdateDeviceCertificateParams"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateDeviceCertificateParams: iot.IotUpdateDeviceCertificateParams = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateDeviceCertificateParams.property.action"></a>

- *Type:* `string`

---

### IotUpdateDimensionRequest <a name="aws-cdk-sdk.iot.IotUpdateDimensionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateDimensionRequest: iot.IotUpdateDimensionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateDimensionRequest.property.name"></a>

- *Type:* `string`

---

##### `stringValues`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateDimensionRequest.property.stringValues"></a>

- *Type:* `string`[]

---

### IotUpdateDimensionResponse <a name="aws-cdk-sdk.iot.IotUpdateDimensionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateDimensionResponse: iot.IotUpdateDimensionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDimensionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDimensionResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDimensionResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDimensionResponse.property.name"></a>

- *Type:* `string`

---

##### `stringValues`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDimensionResponse.property.stringValues"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDimensionResponse.property.type"></a>

- *Type:* `string`

---

### IotUpdateDomainConfigurationRequest <a name="aws-cdk-sdk.iot.IotUpdateDomainConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateDomainConfigurationRequest: iot.IotUpdateDomainConfigurationRequest = { ... }
```

##### `domainConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateDomainConfigurationRequest.property.domainConfigurationName"></a>

- *Type:* `string`

---

##### `authorizerConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDomainConfigurationRequest.property.authorizerConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthorizerConfig`](#aws-cdk-sdk.iot.IotAuthorizerConfig)

---

##### `domainConfigurationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDomainConfigurationRequest.property.domainConfigurationStatus"></a>

- *Type:* `string`

---

##### `removeAuthorizerConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDomainConfigurationRequest.property.removeAuthorizerConfig"></a>

- *Type:* `boolean`

---

### IotUpdateDomainConfigurationResponse <a name="aws-cdk-sdk.iot.IotUpdateDomainConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateDomainConfigurationResponse: iot.IotUpdateDomainConfigurationResponse = { ... }
```

##### `domainConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDomainConfigurationResponse.property.domainConfigurationArn"></a>

- *Type:* `string`

---

##### `domainConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDomainConfigurationResponse.property.domainConfigurationName"></a>

- *Type:* `string`

---

### IotUpdateDynamicThingGroupRequest <a name="aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateDynamicThingGroupRequest: iot.IotUpdateDynamicThingGroupRequest = { ... }
```

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest.property.thingGroupName"></a>

- *Type:* `string`

---

##### `thingGroupProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest.property.thingGroupProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingGroupProperties`](#aws-cdk-sdk.iot.IotThingGroupProperties)

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest.property.expectedVersion"></a>

- *Type:* `number`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest.property.indexName"></a>

- *Type:* `string`

---

##### `queryString`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest.property.queryString"></a>

- *Type:* `string`

---

##### `queryVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest.property.queryVersion"></a>

- *Type:* `string`

---

### IotUpdateDynamicThingGroupResponse <a name="aws-cdk-sdk.iot.IotUpdateDynamicThingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateDynamicThingGroupResponse: iot.IotUpdateDynamicThingGroupResponse = { ... }
```

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateDynamicThingGroupResponse.property.version"></a>

- *Type:* `number`

---

### IotUpdateEventConfigurationsRequest <a name="aws-cdk-sdk.iot.IotUpdateEventConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateEventConfigurationsRequest: iot.IotUpdateEventConfigurationsRequest = { ... }
```

##### `eventConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateEventConfigurationsRequest.property.eventConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotConfiguration`](#aws-cdk-sdk.iot.IotConfiguration)}

---

### IotUpdateEventConfigurationsResponse <a name="aws-cdk-sdk.iot.IotUpdateEventConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateEventConfigurationsResponse: iot.IotUpdateEventConfigurationsResponse = { ... }
```

### IotUpdateIndexingConfigurationRequest <a name="aws-cdk-sdk.iot.IotUpdateIndexingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateIndexingConfigurationRequest: iot.IotUpdateIndexingConfigurationRequest = { ... }
```

##### `thingGroupIndexingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateIndexingConfigurationRequest.property.thingGroupIndexingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingGroupIndexingConfiguration`](#aws-cdk-sdk.iot.IotThingGroupIndexingConfiguration)

---

##### `thingIndexingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateIndexingConfigurationRequest.property.thingIndexingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingIndexingConfiguration`](#aws-cdk-sdk.iot.IotThingIndexingConfiguration)

---

### IotUpdateIndexingConfigurationResponse <a name="aws-cdk-sdk.iot.IotUpdateIndexingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateIndexingConfigurationResponse: iot.IotUpdateIndexingConfigurationResponse = { ... }
```

### IotUpdateJobRequest <a name="aws-cdk-sdk.iot.IotUpdateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateJobRequest: iot.IotUpdateJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `abortConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateJobRequest.property.abortConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAbortConfig`](#aws-cdk-sdk.iot.IotAbortConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateJobRequest.property.description"></a>

- *Type:* `string`

---

##### `jobExecutionsRolloutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateJobRequest.property.jobExecutionsRolloutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecutionsRolloutConfig`](#aws-cdk-sdk.iot.IotJobExecutionsRolloutConfig)

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateJobRequest.property.namespaceId"></a>

- *Type:* `string`

---

##### `presignedUrlConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateJobRequest.property.presignedUrlConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPresignedUrlConfig`](#aws-cdk-sdk.iot.IotPresignedUrlConfig)

---

##### `timeoutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateJobRequest.property.timeoutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTimeoutConfig`](#aws-cdk-sdk.iot.IotTimeoutConfig)

---

### IotUpdateMitigationActionRequest <a name="aws-cdk-sdk.iot.IotUpdateMitigationActionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateMitigationActionRequest: iot.IotUpdateMitigationActionRequest = { ... }
```

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateMitigationActionRequest.property.actionName"></a>

- *Type:* `string`

---

##### `actionParams`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateMitigationActionRequest.property.actionParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMitigationActionParams`](#aws-cdk-sdk.iot.IotMitigationActionParams)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateMitigationActionRequest.property.roleArn"></a>

- *Type:* `string`

---

### IotUpdateMitigationActionResponse <a name="aws-cdk-sdk.iot.IotUpdateMitigationActionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateMitigationActionResponse: iot.IotUpdateMitigationActionResponse = { ... }
```

##### `actionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateMitigationActionResponse.property.actionArn"></a>

- *Type:* `string`

---

##### `actionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateMitigationActionResponse.property.actionId"></a>

- *Type:* `string`

---

### IotUpdateProvisioningTemplateRequest <a name="aws-cdk-sdk.iot.IotUpdateProvisioningTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateProvisioningTemplateRequest: iot.IotUpdateProvisioningTemplateRequest = { ... }
```

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateProvisioningTemplateRequest.property.templateName"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateProvisioningTemplateRequest.property.defaultVersionId"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateProvisioningTemplateRequest.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateProvisioningTemplateRequest.property.enabled"></a>

- *Type:* `boolean`

---

##### `preProvisioningHook`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateProvisioningTemplateRequest.property.preProvisioningHook"></a>

- *Type:* [`aws-cdk-sdk.iot.IotProvisioningHook`](#aws-cdk-sdk.iot.IotProvisioningHook)

---

##### `provisioningRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateProvisioningTemplateRequest.property.provisioningRoleArn"></a>

- *Type:* `string`

---

##### `removePreProvisioningHook`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateProvisioningTemplateRequest.property.removePreProvisioningHook"></a>

- *Type:* `boolean`

---

### IotUpdateProvisioningTemplateResponse <a name="aws-cdk-sdk.iot.IotUpdateProvisioningTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateProvisioningTemplateResponse: iot.IotUpdateProvisioningTemplateResponse = { ... }
```

### IotUpdateRoleAliasRequest <a name="aws-cdk-sdk.iot.IotUpdateRoleAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateRoleAliasRequest: iot.IotUpdateRoleAliasRequest = { ... }
```

##### `roleAlias`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateRoleAliasRequest.property.roleAlias"></a>

- *Type:* `string`

---

##### `credentialDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateRoleAliasRequest.property.credentialDurationSeconds"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateRoleAliasRequest.property.roleArn"></a>

- *Type:* `string`

---

### IotUpdateRoleAliasResponse <a name="aws-cdk-sdk.iot.IotUpdateRoleAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateRoleAliasResponse: iot.IotUpdateRoleAliasResponse = { ... }
```

##### `roleAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateRoleAliasResponse.property.roleAlias"></a>

- *Type:* `string`

---

##### `roleAliasArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateRoleAliasResponse.property.roleAliasArn"></a>

- *Type:* `string`

---

### IotUpdateScheduledAuditRequest <a name="aws-cdk-sdk.iot.IotUpdateScheduledAuditRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateScheduledAuditRequest: iot.IotUpdateScheduledAuditRequest = { ... }
```

##### `scheduledAuditName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateScheduledAuditRequest.property.scheduledAuditName"></a>

- *Type:* `string`

---

##### `dayOfMonth`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateScheduledAuditRequest.property.dayOfMonth"></a>

- *Type:* `string`

---

##### `dayOfWeek`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateScheduledAuditRequest.property.dayOfWeek"></a>

- *Type:* `string`

---

##### `frequency`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateScheduledAuditRequest.property.frequency"></a>

- *Type:* `string`

---

##### `targetCheckNames`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateScheduledAuditRequest.property.targetCheckNames"></a>

- *Type:* `string`[]

---

### IotUpdateScheduledAuditResponse <a name="aws-cdk-sdk.iot.IotUpdateScheduledAuditResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateScheduledAuditResponse: iot.IotUpdateScheduledAuditResponse = { ... }
```

##### `scheduledAuditArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateScheduledAuditResponse.property.scheduledAuditArn"></a>

- *Type:* `string`

---

### IotUpdateSecurityProfileRequest <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateSecurityProfileRequest: iot.IotUpdateSecurityProfileRequest = { ... }
```

##### `securityProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest.property.securityProfileName"></a>

- *Type:* `string`

---

##### `additionalMetricsToRetain`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest.property.additionalMetricsToRetain"></a>

- *Type:* `string`[]

---

##### `additionalMetricsToRetainV2`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest.property.additionalMetricsToRetainV2"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricToRetain`](#aws-cdk-sdk.iot.IotMetricToRetain)[]

---

##### `alertTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest.property.alertTargets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAlertTarget`](#aws-cdk-sdk.iot.IotAlertTarget)}

---

##### `behaviors`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest.property.behaviors"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBehavior`](#aws-cdk-sdk.iot.IotBehavior)[]

---

##### `deleteAdditionalMetricsToRetain`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest.property.deleteAdditionalMetricsToRetain"></a>

- *Type:* `boolean`

---

##### `deleteAlertTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest.property.deleteAlertTargets"></a>

- *Type:* `boolean`

---

##### `deleteBehaviors`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest.property.deleteBehaviors"></a>

- *Type:* `boolean`

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest.property.expectedVersion"></a>

- *Type:* `number`

---

##### `securityProfileDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest.property.securityProfileDescription"></a>

- *Type:* `string`

---

### IotUpdateSecurityProfileResponse <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateSecurityProfileResponse: iot.IotUpdateSecurityProfileResponse = { ... }
```

##### `additionalMetricsToRetain`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse.property.additionalMetricsToRetain"></a>

- *Type:* `string`[]

---

##### `additionalMetricsToRetainV2`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse.property.additionalMetricsToRetainV2"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricToRetain`](#aws-cdk-sdk.iot.IotMetricToRetain)[]

---

##### `alertTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse.property.alertTargets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAlertTarget`](#aws-cdk-sdk.iot.IotAlertTarget)}

---

##### `behaviors`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse.property.behaviors"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBehavior`](#aws-cdk-sdk.iot.IotBehavior)[]

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `securityProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse.property.securityProfileArn"></a>

- *Type:* `string`

---

##### `securityProfileDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse.property.securityProfileDescription"></a>

- *Type:* `string`

---

##### `securityProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse.property.securityProfileName"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateSecurityProfileResponse.property.version"></a>

- *Type:* `number`

---

### IotUpdateStreamRequest <a name="aws-cdk-sdk.iot.IotUpdateStreamRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateStreamRequest: iot.IotUpdateStreamRequest = { ... }
```

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateStreamRequest.property.streamId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateStreamRequest.property.description"></a>

- *Type:* `string`

---

##### `files`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateStreamRequest.property.files"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStreamFile`](#aws-cdk-sdk.iot.IotStreamFile)[]

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateStreamRequest.property.roleArn"></a>

- *Type:* `string`

---

### IotUpdateStreamResponse <a name="aws-cdk-sdk.iot.IotUpdateStreamResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateStreamResponse: iot.IotUpdateStreamResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateStreamResponse.property.description"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateStreamResponse.property.streamArn"></a>

- *Type:* `string`

---

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateStreamResponse.property.streamId"></a>

- *Type:* `string`

---

##### `streamVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateStreamResponse.property.streamVersion"></a>

- *Type:* `number`

---

### IotUpdateThingGroupRequest <a name="aws-cdk-sdk.iot.IotUpdateThingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateThingGroupRequest: iot.IotUpdateThingGroupRequest = { ... }
```

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingGroupRequest.property.thingGroupName"></a>

- *Type:* `string`

---

##### `thingGroupProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingGroupRequest.property.thingGroupProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingGroupProperties`](#aws-cdk-sdk.iot.IotThingGroupProperties)

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingGroupRequest.property.expectedVersion"></a>

- *Type:* `number`

---

### IotUpdateThingGroupResponse <a name="aws-cdk-sdk.iot.IotUpdateThingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateThingGroupResponse: iot.IotUpdateThingGroupResponse = { ... }
```

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingGroupResponse.property.version"></a>

- *Type:* `number`

---

### IotUpdateThingGroupsForThingRequest <a name="aws-cdk-sdk.iot.IotUpdateThingGroupsForThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateThingGroupsForThingRequest: iot.IotUpdateThingGroupsForThingRequest = { ... }
```

##### `overrideDynamicGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingGroupsForThingRequest.property.overrideDynamicGroups"></a>

- *Type:* `boolean`

---

##### `thingGroupsToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingGroupsForThingRequest.property.thingGroupsToAdd"></a>

- *Type:* `string`[]

---

##### `thingGroupsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingGroupsForThingRequest.property.thingGroupsToRemove"></a>

- *Type:* `string`[]

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingGroupsForThingRequest.property.thingName"></a>

- *Type:* `string`

---

### IotUpdateThingGroupsForThingResponse <a name="aws-cdk-sdk.iot.IotUpdateThingGroupsForThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateThingGroupsForThingResponse: iot.IotUpdateThingGroupsForThingResponse = { ... }
```

### IotUpdateThingRequest <a name="aws-cdk-sdk.iot.IotUpdateThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateThingRequest: iot.IotUpdateThingRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingRequest.property.thingName"></a>

- *Type:* `string`

---

##### `attributePayload`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingRequest.property.attributePayload"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAttributePayload`](#aws-cdk-sdk.iot.IotAttributePayload)

---

##### `expectedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingRequest.property.expectedVersion"></a>

- *Type:* `number`

---

##### `removeThingType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingRequest.property.removeThingType"></a>

- *Type:* `boolean`

---

##### `thingTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotUpdateThingRequest.property.thingTypeName"></a>

- *Type:* `string`

---

### IotUpdateThingResponse <a name="aws-cdk-sdk.iot.IotUpdateThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateThingResponse: iot.IotUpdateThingResponse = { ... }
```

### IotUpdateTopicRuleDestinationRequest <a name="aws-cdk-sdk.iot.IotUpdateTopicRuleDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateTopicRuleDestinationRequest: iot.IotUpdateTopicRuleDestinationRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateTopicRuleDestinationRequest.property.arn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotUpdateTopicRuleDestinationRequest.property.status"></a>

- *Type:* `string`

---

### IotUpdateTopicRuleDestinationResponse <a name="aws-cdk-sdk.iot.IotUpdateTopicRuleDestinationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotUpdateTopicRuleDestinationResponse: iot.IotUpdateTopicRuleDestinationResponse = { ... }
```

### IotValidateSecurityProfileBehaviorsRequest <a name="aws-cdk-sdk.iot.IotValidateSecurityProfileBehaviorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotValidateSecurityProfileBehaviorsRequest: iot.IotValidateSecurityProfileBehaviorsRequest = { ... }
```

##### `behaviors`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotValidateSecurityProfileBehaviorsRequest.property.behaviors"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBehavior`](#aws-cdk-sdk.iot.IotBehavior)[]

---

### IotValidateSecurityProfileBehaviorsResponse <a name="aws-cdk-sdk.iot.IotValidateSecurityProfileBehaviorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotValidateSecurityProfileBehaviorsResponse: iot.IotValidateSecurityProfileBehaviorsResponse = { ... }
```

##### `valid`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotValidateSecurityProfileBehaviorsResponse.property.valid"></a>

- *Type:* `boolean`

---

##### `validationErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotValidateSecurityProfileBehaviorsResponse.property.validationErrors"></a>

- *Type:* [`aws-cdk-sdk.iot.IotValidationError`](#aws-cdk-sdk.iot.IotValidationError)[]

---

### IotValidationError <a name="aws-cdk-sdk.iot.IotValidationError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotValidationError: iot.IotValidationError = { ... }
```

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotValidationError.property.errorMessage"></a>

- *Type:* `string`

---

### IotViolationEvent <a name="aws-cdk-sdk.iot.IotViolationEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

const iotViolationEvent: iot.IotViolationEvent = { ... }
```

##### `behavior`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotViolationEvent.property.behavior"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBehavior`](#aws-cdk-sdk.iot.IotBehavior)

---

##### `metricValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotViolationEvent.property.metricValue"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricValue`](#aws-cdk-sdk.iot.IotMetricValue)

---

##### `securityProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotViolationEvent.property.securityProfileName"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotViolationEvent.property.thingName"></a>

- *Type:* `string`

---

##### `violationEventTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotViolationEvent.property.violationEventTime"></a>

- *Type:* `string`

---

##### `violationEventType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotViolationEvent.property.violationEventType"></a>

- *Type:* `string`

---

##### `violationId`<sup>Optional</sup> <a name="aws-cdk-sdk.iot.IotViolationEvent.property.violationId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### IotResponsesAssociateTargetsWithJob <a name="aws-cdk-sdk.iot.IotResponsesAssociateTargetsWithJob"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesAssociateTargetsWithJob.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesAssociateTargetsWithJob(__scope: Construct, __resources: string[], __input: IotAssociateTargetsWithJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesAssociateTargetsWithJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesAssociateTargetsWithJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesAssociateTargetsWithJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAssociateTargetsWithJobRequest`](#aws-cdk-sdk.iot.IotAssociateTargetsWithJobRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesAssociateTargetsWithJob.property.description"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesAssociateTargetsWithJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesAssociateTargetsWithJob.property.jobId"></a>

- *Type:* `string`

---


### IotResponsesCancelJob <a name="aws-cdk-sdk.iot.IotResponsesCancelJob"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCancelJob.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCancelJob(__scope: Construct, __resources: string[], __input: IotCancelJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCancelJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCancelJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCancelJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCancelJobRequest`](#aws-cdk-sdk.iot.IotCancelJobRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCancelJob.property.description"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCancelJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCancelJob.property.jobId"></a>

- *Type:* `string`

---


### IotResponsesCreateAuthorizer <a name="aws-cdk-sdk.iot.IotResponsesCreateAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateAuthorizer.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateAuthorizer(__scope: Construct, __resources: string[], __input: IotCreateAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateAuthorizerRequest`](#aws-cdk-sdk.iot.IotCreateAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateAuthorizer.property.authorizerArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateAuthorizer.property.authorizerName"></a>

- *Type:* `string`

---


### IotResponsesCreateBillingGroup <a name="aws-cdk-sdk.iot.IotResponsesCreateBillingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateBillingGroup.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateBillingGroup(__scope: Construct, __resources: string[], __input: IotCreateBillingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateBillingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateBillingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateBillingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateBillingGroupRequest`](#aws-cdk-sdk.iot.IotCreateBillingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `billingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateBillingGroup.property.billingGroupArn"></a>

- *Type:* `string`

---

##### `billingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateBillingGroup.property.billingGroupId"></a>

- *Type:* `string`

---

##### `billingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateBillingGroup.property.billingGroupName"></a>

- *Type:* `string`

---


### IotResponsesCreateCertificateFromCsr <a name="aws-cdk-sdk.iot.IotResponsesCreateCertificateFromCsr"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateCertificateFromCsr.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateCertificateFromCsr(__scope: Construct, __resources: string[], __input: IotCreateCertificateFromCsrRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateCertificateFromCsr.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateCertificateFromCsr.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateCertificateFromCsr.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateCertificateFromCsrRequest`](#aws-cdk-sdk.iot.IotCreateCertificateFromCsrRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateCertificateFromCsr.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateCertificateFromCsr.property.certificateId"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateCertificateFromCsr.property.certificatePem"></a>

- *Type:* `string`

---


### IotResponsesCreateDimension <a name="aws-cdk-sdk.iot.IotResponsesCreateDimension"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateDimension.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateDimension(__scope: Construct, __resources: string[], __input: IotCreateDimensionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDimension.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDimension.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDimension.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateDimensionRequest`](#aws-cdk-sdk.iot.IotCreateDimensionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDimension.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDimension.property.name"></a>

- *Type:* `string`

---


### IotResponsesCreateDomainConfiguration <a name="aws-cdk-sdk.iot.IotResponsesCreateDomainConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateDomainConfiguration.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateDomainConfiguration(__scope: Construct, __resources: string[], __input: IotCreateDomainConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDomainConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDomainConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDomainConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest`](#aws-cdk-sdk.iot.IotCreateDomainConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `domainConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDomainConfiguration.property.domainConfigurationArn"></a>

- *Type:* `string`

---

##### `domainConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDomainConfiguration.property.domainConfigurationName"></a>

- *Type:* `string`

---


### IotResponsesCreateDynamicThingGroup <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateDynamicThingGroup(__scope: Construct, __resources: string[], __input: IotCreateDynamicThingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest`](#aws-cdk-sdk.iot.IotCreateDynamicThingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup.property.indexName"></a>

- *Type:* `string`

---

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup.property.queryString"></a>

- *Type:* `string`

---

##### `queryVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup.property.queryVersion"></a>

- *Type:* `string`

---

##### `thingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup.property.thingGroupArn"></a>

- *Type:* `string`

---

##### `thingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup.property.thingGroupId"></a>

- *Type:* `string`

---

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateDynamicThingGroup.property.thingGroupName"></a>

- *Type:* `string`

---


### IotResponsesCreateJob <a name="aws-cdk-sdk.iot.IotResponsesCreateJob"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateJob.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateJob(__scope: Construct, __resources: string[], __input: IotCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateJobRequest`](#aws-cdk-sdk.iot.IotCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateJob.property.description"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateJob.property.jobId"></a>

- *Type:* `string`

---


### IotResponsesCreateKeysAndCertificate <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateKeysAndCertificate(__scope: Construct, __resources: string[], __input: IotCreateKeysAndCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateKeysAndCertificateRequest`](#aws-cdk-sdk.iot.IotCreateKeysAndCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificate.property.certificateId"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificate.property.certificatePem"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificate.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificateKeyPair`](#aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificateKeyPair)

---


### IotResponsesCreateKeysAndCertificateKeyPair <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificateKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificateKeyPair.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateKeysAndCertificateKeyPair(__scope: Construct, __resources: string[], __input: IotCreateKeysAndCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificateKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificateKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificateKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateKeysAndCertificateRequest`](#aws-cdk-sdk.iot.IotCreateKeysAndCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `privateKey`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificateKeyPair.property.privateKey"></a>

- *Type:* `string`

---

##### `publicKey`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateKeysAndCertificateKeyPair.property.publicKey"></a>

- *Type:* `string`

---


### IotResponsesCreateMitigationAction <a name="aws-cdk-sdk.iot.IotResponsesCreateMitigationAction"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateMitigationAction.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateMitigationAction(__scope: Construct, __resources: string[], __input: IotCreateMitigationActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateMitigationAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateMitigationAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateMitigationAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateMitigationActionRequest`](#aws-cdk-sdk.iot.IotCreateMitigationActionRequest)

---



#### Properties <a name="Properties"></a>

##### `actionArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateMitigationAction.property.actionArn"></a>

- *Type:* `string`

---

##### `actionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateMitigationAction.property.actionId"></a>

- *Type:* `string`

---


### IotResponsesCreateOtaUpdate <a name="aws-cdk-sdk.iot.IotResponsesCreateOtaUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateOtaUpdate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateOtaUpdate(__scope: Construct, __resources: string[], __input: IotCreateOtaUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateOtaUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateOtaUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateOtaUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateOtaUpdateRequest`](#aws-cdk-sdk.iot.IotCreateOtaUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `awsIotJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateOtaUpdate.property.awsIotJobArn"></a>

- *Type:* `string`

---

##### `awsIotJobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateOtaUpdate.property.awsIotJobId"></a>

- *Type:* `string`

---

##### `otaUpdateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateOtaUpdate.property.otaUpdateArn"></a>

- *Type:* `string`

---

##### `otaUpdateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateOtaUpdate.property.otaUpdateId"></a>

- *Type:* `string`

---

##### `otaUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateOtaUpdate.property.otaUpdateStatus"></a>

- *Type:* `string`

---


### IotResponsesCreatePolicy <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicy.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreatePolicy(__scope: Construct, __resources: string[], __input: IotCreatePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreatePolicyRequest`](#aws-cdk-sdk.iot.IotCreatePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicy.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicy.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicy.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicy.property.policyVersionId"></a>

- *Type:* `string`

---


### IotResponsesCreatePolicyVersion <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicyVersion"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicyVersion.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreatePolicyVersion(__scope: Construct, __resources: string[], __input: IotCreatePolicyVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicyVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicyVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicyVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreatePolicyVersionRequest`](#aws-cdk-sdk.iot.IotCreatePolicyVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `isDefaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicyVersion.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicyVersion.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicyVersion.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreatePolicyVersion.property.policyVersionId"></a>

- *Type:* `string`

---


### IotResponsesCreateProvisioningClaim <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaim"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaim.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateProvisioningClaim(__scope: Construct, __resources: string[], __input: IotCreateProvisioningClaimRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaim.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaim.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaim.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateProvisioningClaimRequest`](#aws-cdk-sdk.iot.IotCreateProvisioningClaimRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaim.property.certificateId"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaim.property.certificatePem"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaim.property.expiration"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaim.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaimKeyPair`](#aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaimKeyPair)

---


### IotResponsesCreateProvisioningClaimKeyPair <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaimKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaimKeyPair.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateProvisioningClaimKeyPair(__scope: Construct, __resources: string[], __input: IotCreateProvisioningClaimRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaimKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaimKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaimKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateProvisioningClaimRequest`](#aws-cdk-sdk.iot.IotCreateProvisioningClaimRequest)

---



#### Properties <a name="Properties"></a>

##### `privateKey`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaimKeyPair.property.privateKey"></a>

- *Type:* `string`

---

##### `publicKey`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningClaimKeyPair.property.publicKey"></a>

- *Type:* `string`

---


### IotResponsesCreateProvisioningTemplate <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateProvisioningTemplate(__scope: Construct, __resources: string[], __input: IotCreateProvisioningTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest`](#aws-cdk-sdk.iot.IotCreateProvisioningTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplate.property.defaultVersionId"></a>

- *Type:* `number`

---

##### `templateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplate.property.templateArn"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplate.property.templateName"></a>

- *Type:* `string`

---


### IotResponsesCreateProvisioningTemplateVersion <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplateVersion"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplateVersion.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateProvisioningTemplateVersion(__scope: Construct, __resources: string[], __input: IotCreateProvisioningTemplateVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplateVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplateVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplateVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionRequest`](#aws-cdk-sdk.iot.IotCreateProvisioningTemplateVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `isDefaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplateVersion.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `templateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplateVersion.property.templateArn"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplateVersion.property.templateName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateProvisioningTemplateVersion.property.versionId"></a>

- *Type:* `number`

---


### IotResponsesCreateRoleAlias <a name="aws-cdk-sdk.iot.IotResponsesCreateRoleAlias"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateRoleAlias.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateRoleAlias(__scope: Construct, __resources: string[], __input: IotCreateRoleAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateRoleAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateRoleAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateRoleAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateRoleAliasRequest`](#aws-cdk-sdk.iot.IotCreateRoleAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `roleAlias`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateRoleAlias.property.roleAlias"></a>

- *Type:* `string`

---

##### `roleAliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateRoleAlias.property.roleAliasArn"></a>

- *Type:* `string`

---


### IotResponsesCreateScheduledAudit <a name="aws-cdk-sdk.iot.IotResponsesCreateScheduledAudit"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateScheduledAudit.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateScheduledAudit(__scope: Construct, __resources: string[], __input: IotCreateScheduledAuditRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateScheduledAudit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateScheduledAudit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateScheduledAudit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateScheduledAuditRequest`](#aws-cdk-sdk.iot.IotCreateScheduledAuditRequest)

---



#### Properties <a name="Properties"></a>

##### `scheduledAuditArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateScheduledAudit.property.scheduledAuditArn"></a>

- *Type:* `string`

---


### IotResponsesCreateSecurityProfile <a name="aws-cdk-sdk.iot.IotResponsesCreateSecurityProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateSecurityProfile.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateSecurityProfile(__scope: Construct, __resources: string[], __input: IotCreateSecurityProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateSecurityProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateSecurityProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateSecurityProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateSecurityProfileRequest`](#aws-cdk-sdk.iot.IotCreateSecurityProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `securityProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateSecurityProfile.property.securityProfileArn"></a>

- *Type:* `string`

---

##### `securityProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateSecurityProfile.property.securityProfileName"></a>

- *Type:* `string`

---


### IotResponsesCreateStream <a name="aws-cdk-sdk.iot.IotResponsesCreateStream"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateStream.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateStream(__scope: Construct, __resources: string[], __input: IotCreateStreamRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateStreamRequest`](#aws-cdk-sdk.iot.IotCreateStreamRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateStream.property.description"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateStream.property.streamArn"></a>

- *Type:* `string`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateStream.property.streamId"></a>

- *Type:* `string`

---

##### `streamVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateStream.property.streamVersion"></a>

- *Type:* `number`

---


### IotResponsesCreateThing <a name="aws-cdk-sdk.iot.IotResponsesCreateThing"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateThing.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateThing(__scope: Construct, __resources: string[], __input: IotCreateThingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThing.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThing.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThing.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateThingRequest`](#aws-cdk-sdk.iot.IotCreateThingRequest)

---



#### Properties <a name="Properties"></a>

##### `thingArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThing.property.thingArn"></a>

- *Type:* `string`

---

##### `thingId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThing.property.thingId"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThing.property.thingName"></a>

- *Type:* `string`

---


### IotResponsesCreateThingGroup <a name="aws-cdk-sdk.iot.IotResponsesCreateThingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateThingGroup.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateThingGroup(__scope: Construct, __resources: string[], __input: IotCreateThingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateThingGroupRequest`](#aws-cdk-sdk.iot.IotCreateThingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `thingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingGroup.property.thingGroupArn"></a>

- *Type:* `string`

---

##### `thingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingGroup.property.thingGroupId"></a>

- *Type:* `string`

---

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingGroup.property.thingGroupName"></a>

- *Type:* `string`

---


### IotResponsesCreateThingType <a name="aws-cdk-sdk.iot.IotResponsesCreateThingType"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateThingType.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateThingType(__scope: Construct, __resources: string[], __input: IotCreateThingTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateThingTypeRequest`](#aws-cdk-sdk.iot.IotCreateThingTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `thingTypeArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingType.property.thingTypeArn"></a>

- *Type:* `string`

---

##### `thingTypeId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingType.property.thingTypeId"></a>

- *Type:* `string`

---

##### `thingTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateThingType.property.thingTypeName"></a>

- *Type:* `string`

---


### IotResponsesCreateTopicRuleDestination <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestination"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestination.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateTopicRuleDestination(__scope: Construct, __resources: string[], __input: IotCreateTopicRuleDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotCreateTopicRuleDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `topicRuleDestination`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestination.property.topicRuleDestination"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination`](#aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination)

---


### IotResponsesCreateTopicRuleDestinationTopicRuleDestination <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination(__scope: Construct, __resources: string[], __input: IotCreateTopicRuleDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotCreateTopicRuleDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination.property.arn"></a>

- *Type:* `string`

---

##### `httpUrlProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination.property.httpUrlProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties`](#aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestination.property.statusReason"></a>

- *Type:* `string`

---


### IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties(__scope: Construct, __resources: string[], __input: IotCreateTopicRuleDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCreateTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotCreateTopicRuleDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `confirmationUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties.property.confirmationUrl"></a>

- *Type:* `string`

---


### IotResponsesDescribeAccountAuditConfiguration <a name="aws-cdk-sdk.iot.IotResponsesDescribeAccountAuditConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAccountAuditConfiguration.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAccountAuditConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAccountAuditConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAccountAuditConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `auditCheckConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAccountAuditConfiguration.property.auditCheckConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAuditCheckConfiguration`](#aws-cdk-sdk.iot.IotAuditCheckConfiguration)}

---

##### `auditNotificationTargetConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAccountAuditConfiguration.property.auditNotificationTargetConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAuditNotificationTarget`](#aws-cdk-sdk.iot.IotAuditNotificationTarget)}

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAccountAuditConfiguration.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesDescribeAuditFinding <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFinding"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFinding.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditFinding(__scope: Construct, __resources: string[], __input: IotDescribeAuditFindingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFinding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFinding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFinding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditFindingRequest`](#aws-cdk-sdk.iot.IotDescribeAuditFindingRequest)

---



#### Properties <a name="Properties"></a>

##### `finding`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFinding.property.finding"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding`](#aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding)

---


### IotResponsesDescribeAuditFindingFinding <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditFindingFinding(__scope: Construct, __resources: string[], __input: IotDescribeAuditFindingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditFindingRequest`](#aws-cdk-sdk.iot.IotDescribeAuditFindingRequest)

---



#### Properties <a name="Properties"></a>

##### `checkName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.checkName"></a>

- *Type:* `string`

---

##### `findingId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.findingId"></a>

- *Type:* `string`

---

##### `findingTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.findingTime"></a>

- *Type:* `string`

---

##### `isSuppressed`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.isSuppressed"></a>

- *Type:* `boolean`

---

##### `nonCompliantResource`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.nonCompliantResource"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource`](#aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource)

---

##### `reasonForNonCompliance`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.reasonForNonCompliance"></a>

- *Type:* `string`

---

##### `reasonForNonComplianceCode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.reasonForNonComplianceCode"></a>

- *Type:* `string`

---

##### `relatedResources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.relatedResources"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRelatedResource`](#aws-cdk-sdk.iot.IotRelatedResource)[]

---

##### `severity`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.severity"></a>

- *Type:* `string`

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.taskId"></a>

- *Type:* `string`

---

##### `taskStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFinding.property.taskStartTime"></a>

- *Type:* `string`

---


### IotResponsesDescribeAuditFindingFindingNonCompliantResource <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource(__scope: Construct, __resources: string[], __input: IotDescribeAuditFindingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditFindingRequest`](#aws-cdk-sdk.iot.IotDescribeAuditFindingRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalInfo`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource.property.additionalInfo"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier`](#aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier)

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResource.property.resourceType"></a>

- *Type:* `string`

---


### IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier(__scope: Construct, __resources: string[], __input: IotDescribeAuditFindingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditFindingRequest`](#aws-cdk-sdk.iot.IotDescribeAuditFindingRequest)

---



#### Properties <a name="Properties"></a>

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.property.account"></a>

- *Type:* `string`

---

##### `caCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.property.caCertificateId"></a>

- *Type:* `string`

---

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.property.clientId"></a>

- *Type:* `string`

---

##### `cognitoIdentityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.property.cognitoIdentityPoolId"></a>

- *Type:* `string`

---

##### `deviceCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.property.deviceCertificateId"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `policyVersionIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.property.policyVersionIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier`](#aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier)

---

##### `roleAliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier.property.roleAliasArn"></a>

- *Type:* `string`

---


### IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier(__scope: Construct, __resources: string[], __input: IotDescribeAuditFindingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditFindingRequest`](#aws-cdk-sdk.iot.IotDescribeAuditFindingRequest)

---



#### Properties <a name="Properties"></a>

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier.property.policyVersionId"></a>

- *Type:* `string`

---


### IotResponsesDescribeAuditMitigationActionsTask <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditMitigationActionsTask(__scope: Construct, __resources: string[], __input: IotDescribeAuditMitigationActionsTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskRequest`](#aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `actionsDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.property.actionsDefinition"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMitigationAction`](#aws-cdk-sdk.iot.IotMitigationAction)[]

---

##### `auditCheckToActionsMapping`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.property.auditCheckToActionsMapping"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.property.startTime"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.property.target"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTaskTarget`](#aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTaskTarget)

---

##### `taskStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.property.taskStatistics"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotTaskStatisticsForAuditCheck`](#aws-cdk-sdk.iot.IotTaskStatisticsForAuditCheck)}

---

##### `taskStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTask.property.taskStatus"></a>

- *Type:* `string`

---


### IotResponsesDescribeAuditMitigationActionsTaskTarget <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTaskTarget"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTaskTarget.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditMitigationActionsTaskTarget(__scope: Construct, __resources: string[], __input: IotDescribeAuditMitigationActionsTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTaskTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTaskTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTaskTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskRequest`](#aws-cdk-sdk.iot.IotDescribeAuditMitigationActionsTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `auditCheckToReasonCodeFilter`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTaskTarget.property.auditCheckToReasonCodeFilter"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `auditTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTaskTarget.property.auditTaskId"></a>

- *Type:* `string`

---

##### `findingIds`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditMitigationActionsTaskTarget.property.findingIds"></a>

- *Type:* `string`[]

---


### IotResponsesDescribeAuditSuppression <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppression"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppression.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditSuppression(__scope: Construct, __resources: string[], __input: IotDescribeAuditSuppressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppression.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppression.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppression.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest`](#aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest)

---



#### Properties <a name="Properties"></a>

##### `checkName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppression.property.checkName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppression.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppression.property.expirationDate"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppression.property.resourceIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier`](#aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier)

---

##### `suppressIndefinitely`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppression.property.suppressIndefinitely"></a>

- *Type:* `boolean`

---


### IotResponsesDescribeAuditSuppressionResourceIdentifier <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditSuppressionResourceIdentifier(__scope: Construct, __resources: string[], __input: IotDescribeAuditSuppressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest`](#aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest)

---



#### Properties <a name="Properties"></a>

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.property.account"></a>

- *Type:* `string`

---

##### `caCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.property.caCertificateId"></a>

- *Type:* `string`

---

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.property.clientId"></a>

- *Type:* `string`

---

##### `cognitoIdentityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.property.cognitoIdentityPoolId"></a>

- *Type:* `string`

---

##### `deviceCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.property.deviceCertificateId"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `policyVersionIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.property.policyVersionIdentifier"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier`](#aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier)

---

##### `roleAliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifier.property.roleAliasArn"></a>

- *Type:* `string`

---


### IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier(__scope: Construct, __resources: string[], __input: IotDescribeAuditSuppressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest`](#aws-cdk-sdk.iot.IotDescribeAuditSuppressionRequest)

---



#### Properties <a name="Properties"></a>

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier.property.policyVersionId"></a>

- *Type:* `string`

---


### IotResponsesDescribeAuditTask <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditTask(__scope: Construct, __resources: string[], __input: IotDescribeAuditTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditTaskRequest`](#aws-cdk-sdk.iot.IotDescribeAuditTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `auditDetails`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask.property.auditDetails"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAuditCheckDetails`](#aws-cdk-sdk.iot.IotAuditCheckDetails)}

---

##### `scheduledAuditName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask.property.scheduledAuditName"></a>

- *Type:* `string`

---

##### `taskStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask.property.taskStartTime"></a>

- *Type:* `string`

---

##### `taskStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask.property.taskStatistics"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics`](#aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics)

---

##### `taskStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask.property.taskStatus"></a>

- *Type:* `string`

---

##### `taskType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTask.property.taskType"></a>

- *Type:* `string`

---


### IotResponsesDescribeAuditTaskTaskStatistics <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuditTaskTaskStatistics(__scope: Construct, __resources: string[], __input: IotDescribeAuditTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuditTaskRequest`](#aws-cdk-sdk.iot.IotDescribeAuditTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `canceledChecks`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.property.canceledChecks"></a>

- *Type:* `number`

---

##### `compliantChecks`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.property.compliantChecks"></a>

- *Type:* `number`

---

##### `failedChecks`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.property.failedChecks"></a>

- *Type:* `number`

---

##### `inProgressChecks`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.property.inProgressChecks"></a>

- *Type:* `number`

---

##### `nonCompliantChecks`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.property.nonCompliantChecks"></a>

- *Type:* `number`

---

##### `totalChecks`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.property.totalChecks"></a>

- *Type:* `number`

---

##### `waitingForDataCollectionChecks`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuditTaskTaskStatistics.property.waitingForDataCollectionChecks"></a>

- *Type:* `number`

---


### IotResponsesDescribeAuthorizer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizer.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuthorizer(__scope: Construct, __resources: string[], __input: IotDescribeAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuthorizerRequest`](#aws-cdk-sdk.iot.IotDescribeAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizer.property.authorizerDescription"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription`](#aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription)

---


### IotResponsesDescribeAuthorizerAuthorizerDescription <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeAuthorizerAuthorizerDescription(__scope: Construct, __resources: string[], __input: IotDescribeAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeAuthorizerRequest`](#aws-cdk-sdk.iot.IotDescribeAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.property.authorizerArn"></a>

- *Type:* `string`

---

##### `authorizerFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.property.authorizerFunctionArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.property.authorizerName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `signingDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.property.signingDisabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.property.status"></a>

- *Type:* `string`

---

##### `tokenKeyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.property.tokenKeyName"></a>

- *Type:* `string`

---

##### `tokenSigningPublicKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeAuthorizerAuthorizerDescription.property.tokenSigningPublicKeys"></a>

- *Type:* {[ key: string ]: `string`}

---


### IotResponsesDescribeBillingGroup <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeBillingGroup(__scope: Construct, __resources: string[], __input: IotDescribeBillingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeBillingGroupRequest`](#aws-cdk-sdk.iot.IotDescribeBillingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `billingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup.property.billingGroupArn"></a>

- *Type:* `string`

---

##### `billingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup.property.billingGroupId"></a>

- *Type:* `string`

---

##### `billingGroupMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup.property.billingGroupMetadata"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupMetadata`](#aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupMetadata)

---

##### `billingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup.property.billingGroupName"></a>

- *Type:* `string`

---

##### `billingGroupProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup.property.billingGroupProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupProperties`](#aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupProperties)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroup.property.version"></a>

- *Type:* `number`

---


### IotResponsesDescribeBillingGroupBillingGroupMetadata <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupMetadata.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeBillingGroupBillingGroupMetadata(__scope: Construct, __resources: string[], __input: IotDescribeBillingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeBillingGroupRequest`](#aws-cdk-sdk.iot.IotDescribeBillingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupMetadata.property.creationDate"></a>

- *Type:* `string`

---


### IotResponsesDescribeBillingGroupBillingGroupProperties <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupProperties"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupProperties.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeBillingGroupBillingGroupProperties(__scope: Construct, __resources: string[], __input: IotDescribeBillingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeBillingGroupRequest`](#aws-cdk-sdk.iot.IotDescribeBillingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `billingGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeBillingGroupBillingGroupProperties.property.billingGroupDescription"></a>

- *Type:* `string`

---


### IotResponsesDescribeCaCertificate <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeCaCertificate(__scope: Construct, __resources: string[], __input: IotDescribeCaCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeCaCertificateRequest`](#aws-cdk-sdk.iot.IotDescribeCaCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificate.property.certificateDescription"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription`](#aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription)

---

##### `registrationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificate.property.registrationConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateRegistrationConfig`](#aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateRegistrationConfig)

---


### IotResponsesDescribeCaCertificateCertificateDescription <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeCaCertificateCertificateDescription(__scope: Construct, __resources: string[], __input: IotDescribeCaCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeCaCertificateRequest`](#aws-cdk-sdk.iot.IotDescribeCaCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `autoRegistrationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.autoRegistrationStatus"></a>

- *Type:* `string`

---

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.certificateId"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.certificatePem"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `customerVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.customerVersion"></a>

- *Type:* `number`

---

##### `generationId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.generationId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `ownedBy`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.ownedBy"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.status"></a>

- *Type:* `string`

---

##### `validity`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescription.property.validity"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescriptionValidity`](#aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescriptionValidity)

---


### IotResponsesDescribeCaCertificateCertificateDescriptionValidity <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescriptionValidity"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescriptionValidity.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeCaCertificateCertificateDescriptionValidity(__scope: Construct, __resources: string[], __input: IotDescribeCaCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescriptionValidity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescriptionValidity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescriptionValidity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeCaCertificateRequest`](#aws-cdk-sdk.iot.IotDescribeCaCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `notAfter`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescriptionValidity.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateCertificateDescriptionValidity.property.notBefore"></a>

- *Type:* `string`

---


### IotResponsesDescribeCaCertificateRegistrationConfig <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateRegistrationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateRegistrationConfig.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeCaCertificateRegistrationConfig(__scope: Construct, __resources: string[], __input: IotDescribeCaCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateRegistrationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateRegistrationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateRegistrationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeCaCertificateRequest`](#aws-cdk-sdk.iot.IotDescribeCaCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateRegistrationConfig.property.roleArn"></a>

- *Type:* `string`

---

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCaCertificateRegistrationConfig.property.templateBody"></a>

- *Type:* `string`

---


### IotResponsesDescribeCertificate <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeCertificate(__scope: Construct, __resources: string[], __input: IotDescribeCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeCertificateRequest`](#aws-cdk-sdk.iot.IotDescribeCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificate.property.certificateDescription"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription`](#aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription)

---


### IotResponsesDescribeCertificateCertificateDescription <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeCertificateCertificateDescription(__scope: Construct, __resources: string[], __input: IotDescribeCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeCertificateRequest`](#aws-cdk-sdk.iot.IotDescribeCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `caCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.caCertificateId"></a>

- *Type:* `string`

---

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.certificateId"></a>

- *Type:* `string`

---

##### `certificateMode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.certificateMode"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.certificatePem"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `customerVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.customerVersion"></a>

- *Type:* `number`

---

##### `generationId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.generationId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `ownedBy`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.ownedBy"></a>

- *Type:* `string`

---

##### `previousOwnedBy`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.previousOwnedBy"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.status"></a>

- *Type:* `string`

---

##### `transferData`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.transferData"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData`](#aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData)

---

##### `validity`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescription.property.validity"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionValidity`](#aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionValidity)

---


### IotResponsesDescribeCertificateCertificateDescriptionTransferData <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData(__scope: Construct, __resources: string[], __input: IotDescribeCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeCertificateRequest`](#aws-cdk-sdk.iot.IotDescribeCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `acceptDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData.property.acceptDate"></a>

- *Type:* `string`

---

##### `rejectDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData.property.rejectDate"></a>

- *Type:* `string`

---

##### `rejectReason`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData.property.rejectReason"></a>

- *Type:* `string`

---

##### `transferDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData.property.transferDate"></a>

- *Type:* `string`

---

##### `transferMessage`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionTransferData.property.transferMessage"></a>

- *Type:* `string`

---


### IotResponsesDescribeCertificateCertificateDescriptionValidity <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionValidity"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionValidity.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeCertificateCertificateDescriptionValidity(__scope: Construct, __resources: string[], __input: IotDescribeCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionValidity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionValidity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionValidity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeCertificateRequest`](#aws-cdk-sdk.iot.IotDescribeCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `notAfter`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionValidity.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeCertificateCertificateDescriptionValidity.property.notBefore"></a>

- *Type:* `string`

---


### IotResponsesDescribeDefaultAuthorizer <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizer.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeDefaultAuthorizer(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `authorizerDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizer.property.authorizerDescription"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription`](#aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription)

---


### IotResponsesDescribeDefaultAuthorizerAuthorizerDescription <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `authorizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.property.authorizerArn"></a>

- *Type:* `string`

---

##### `authorizerFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.property.authorizerFunctionArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.property.authorizerName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `signingDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.property.signingDisabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.property.status"></a>

- *Type:* `string`

---

##### `tokenKeyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.property.tokenKeyName"></a>

- *Type:* `string`

---

##### `tokenSigningPublicKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDefaultAuthorizerAuthorizerDescription.property.tokenSigningPublicKeys"></a>

- *Type:* {[ key: string ]: `string`}

---


### IotResponsesDescribeDimension <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeDimension(__scope: Construct, __resources: string[], __input: IotDescribeDimensionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeDimensionRequest`](#aws-cdk-sdk.iot.IotDescribeDimensionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension.property.arn"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension.property.name"></a>

- *Type:* `string`

---

##### `stringValues`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension.property.stringValues"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDimension.property.type"></a>

- *Type:* `string`

---


### IotResponsesDescribeDomainConfiguration <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeDomainConfiguration(__scope: Construct, __resources: string[], __input: IotDescribeDomainConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeDomainConfigurationRequest`](#aws-cdk-sdk.iot.IotDescribeDomainConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerConfig`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.property.authorizerConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeDomainConfigurationAuthorizerConfig`](#aws-cdk-sdk.iot.IotResponsesDescribeDomainConfigurationAuthorizerConfig)

---

##### `domainConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.property.domainConfigurationArn"></a>

- *Type:* `string`

---

##### `domainConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.property.domainConfigurationName"></a>

- *Type:* `string`

---

##### `domainConfigurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.property.domainConfigurationStatus"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.property.domainName"></a>

- *Type:* `string`

---

##### `domainType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.property.domainType"></a>

- *Type:* `string`

---

##### `lastStatusChangeDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.property.lastStatusChangeDate"></a>

- *Type:* `string`

---

##### `serverCertificates`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.property.serverCertificates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotServerCertificateSummary`](#aws-cdk-sdk.iot.IotServerCertificateSummary)[]

---

##### `serviceType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfiguration.property.serviceType"></a>

- *Type:* `string`

---


### IotResponsesDescribeDomainConfigurationAuthorizerConfig <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfigurationAuthorizerConfig"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfigurationAuthorizerConfig.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeDomainConfigurationAuthorizerConfig(__scope: Construct, __resources: string[], __input: IotDescribeDomainConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfigurationAuthorizerConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfigurationAuthorizerConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfigurationAuthorizerConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeDomainConfigurationRequest`](#aws-cdk-sdk.iot.IotDescribeDomainConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `allowAuthorizerOverride`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride"></a>

- *Type:* `boolean`

---

##### `defaultAuthorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName"></a>

- *Type:* `string`

---


### IotResponsesDescribeEndpoint <a name="aws-cdk-sdk.iot.IotResponsesDescribeEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeEndpoint.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeEndpoint(__scope: Construct, __resources: string[], __input: IotDescribeEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeEndpointRequest`](#aws-cdk-sdk.iot.IotDescribeEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointAddress`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeEndpoint.property.endpointAddress"></a>

- *Type:* `string`

---


### IotResponsesDescribeEventConfigurations <a name="aws-cdk-sdk.iot.IotResponsesDescribeEventConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeEventConfigurations.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeEventConfigurations(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeEventConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeEventConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeEventConfigurations.property.creationDate"></a>

- *Type:* `string`

---

##### `eventConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeEventConfigurations.property.eventConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotConfiguration`](#aws-cdk-sdk.iot.IotConfiguration)}

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeEventConfigurations.property.lastModifiedDate"></a>

- *Type:* `string`

---


### IotResponsesDescribeIndex <a name="aws-cdk-sdk.iot.IotResponsesDescribeIndex"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeIndex.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeIndex(__scope: Construct, __resources: string[], __input: IotDescribeIndexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeIndex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeIndex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeIndex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeIndexRequest`](#aws-cdk-sdk.iot.IotDescribeIndexRequest)

---



#### Properties <a name="Properties"></a>

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeIndex.property.indexName"></a>

- *Type:* `string`

---

##### `indexStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeIndex.property.indexStatus"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeIndex.property.schema"></a>

- *Type:* `string`

---


### IotResponsesDescribeJob <a name="aws-cdk-sdk.iot.IotResponsesDescribeJob"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJob.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJob(__scope: Construct, __resources: string[], __input: IotDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobRequest`](#aws-cdk-sdk.iot.IotDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `documentSource`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJob.property.documentSource"></a>

- *Type:* `string`

---

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJob.property.job"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeJobJob`](#aws-cdk-sdk.iot.IotResponsesDescribeJobJob)

---


### IotResponsesDescribeJobExecution <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecution"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecution.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobExecution(__scope: Construct, __resources: string[], __input: IotDescribeJobExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobExecutionRequest`](#aws-cdk-sdk.iot.IotDescribeJobExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `execution`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecution.property.execution"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution`](#aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution)

---


### IotResponsesDescribeJobExecutionExecution <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobExecutionExecution(__scope: Construct, __resources: string[], __input: IotDescribeJobExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobExecutionRequest`](#aws-cdk-sdk.iot.IotDescribeJobExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `approximateSecondsBeforeTimedOut`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.approximateSecondsBeforeTimedOut"></a>

- *Type:* `number`

---

##### `executionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.executionNumber"></a>

- *Type:* `number`

---

##### `forceCanceled`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.forceCanceled"></a>

- *Type:* `boolean`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.jobId"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `queuedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.queuedAt"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.statusDetails"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecutionStatusDetails`](#aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecutionStatusDetails)

---

##### `thingArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.thingArn"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecution.property.versionNumber"></a>

- *Type:* `number`

---


### IotResponsesDescribeJobExecutionExecutionStatusDetails <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecutionStatusDetails"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecutionStatusDetails.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobExecutionExecutionStatusDetails(__scope: Construct, __resources: string[], __input: IotDescribeJobExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecutionStatusDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecutionStatusDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecutionStatusDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobExecutionRequest`](#aws-cdk-sdk.iot.IotDescribeJobExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `detailsMap`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobExecutionExecutionStatusDetails.property.detailsMap"></a>

- *Type:* {[ key: string ]: `string`}

---


### IotResponsesDescribeJobJob <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobJob(__scope: Construct, __resources: string[], __input: IotDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobRequest`](#aws-cdk-sdk.iot.IotDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `abortConfig`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.abortConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeJobJobAbortConfig`](#aws-cdk-sdk.iot.IotResponsesDescribeJobJobAbortConfig)

---

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.comment"></a>

- *Type:* `string`

---

##### `completedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.completedAt"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.description"></a>

- *Type:* `string`

---

##### `forceCanceled`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.forceCanceled"></a>

- *Type:* `boolean`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobExecutionsRolloutConfig`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.jobExecutionsRolloutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfig`](#aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobProcessDetails`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.jobProcessDetails"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails`](#aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails)

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `namespaceId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.namespaceId"></a>

- *Type:* `string`

---

##### `presignedUrlConfig`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.presignedUrlConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeJobJobPresignedUrlConfig`](#aws-cdk-sdk.iot.IotResponsesDescribeJobJobPresignedUrlConfig)

---

##### `reasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.reasonCode"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.status"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.targets"></a>

- *Type:* `string`[]

---

##### `targetSelection`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.targetSelection"></a>

- *Type:* `string`

---

##### `timeoutConfig`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJob.property.timeoutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeJobJobTimeoutConfig`](#aws-cdk-sdk.iot.IotResponsesDescribeJobJobTimeoutConfig)

---


### IotResponsesDescribeJobJobAbortConfig <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobAbortConfig"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobAbortConfig.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobJobAbortConfig(__scope: Construct, __resources: string[], __input: IotDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobAbortConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobAbortConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobAbortConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobRequest`](#aws-cdk-sdk.iot.IotDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `criteriaList`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobAbortConfig.property.criteriaList"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAbortCriteria`](#aws-cdk-sdk.iot.IotAbortCriteria)[]

---


### IotResponsesDescribeJobJobJobExecutionsRolloutConfig <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfig"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfig.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfig(__scope: Construct, __resources: string[], __input: IotDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobRequest`](#aws-cdk-sdk.iot.IotDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `exponentialRate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfig.property.exponentialRate"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate`](#aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate)

---

##### `maximumPerMinute`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

- *Type:* `number`

---


### IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate(__scope: Construct, __resources: string[], __input: IotDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobRequest`](#aws-cdk-sdk.iot.IotDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `baseRatePerMinute`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

- *Type:* `number`

---

##### `incrementFactor`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

- *Type:* `number`

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria`](#aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria)

---


### IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria(__scope: Construct, __resources: string[], __input: IotDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobRequest`](#aws-cdk-sdk.iot.IotDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `numberOfNotifiedThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

- *Type:* `number`

---

##### `numberOfSucceededThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

- *Type:* `number`

---


### IotResponsesDescribeJobJobJobProcessDetails <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobJobJobProcessDetails(__scope: Construct, __resources: string[], __input: IotDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobRequest`](#aws-cdk-sdk.iot.IotDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `numberOfCanceledThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.property.numberOfCanceledThings"></a>

- *Type:* `number`

---

##### `numberOfFailedThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.property.numberOfFailedThings"></a>

- *Type:* `number`

---

##### `numberOfInProgressThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.property.numberOfInProgressThings"></a>

- *Type:* `number`

---

##### `numberOfQueuedThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.property.numberOfQueuedThings"></a>

- *Type:* `number`

---

##### `numberOfRejectedThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.property.numberOfRejectedThings"></a>

- *Type:* `number`

---

##### `numberOfRemovedThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.property.numberOfRemovedThings"></a>

- *Type:* `number`

---

##### `numberOfSucceededThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.property.numberOfSucceededThings"></a>

- *Type:* `number`

---

##### `numberOfTimedOutThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.property.numberOfTimedOutThings"></a>

- *Type:* `number`

---

##### `processingTargets`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobJobProcessDetails.property.processingTargets"></a>

- *Type:* `string`[]

---


### IotResponsesDescribeJobJobPresignedUrlConfig <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobPresignedUrlConfig"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobPresignedUrlConfig.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobJobPresignedUrlConfig(__scope: Construct, __resources: string[], __input: IotDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobPresignedUrlConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobPresignedUrlConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobPresignedUrlConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobRequest`](#aws-cdk-sdk.iot.IotDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `expiresInSec`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobPresignedUrlConfig.property.expiresInSec"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobPresignedUrlConfig.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesDescribeJobJobTimeoutConfig <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobTimeoutConfig"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobTimeoutConfig.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeJobJobTimeoutConfig(__scope: Construct, __resources: string[], __input: IotDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobTimeoutConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobTimeoutConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobTimeoutConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeJobRequest`](#aws-cdk-sdk.iot.IotDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `inProgressTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeJobJobTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

- *Type:* `number`

---


### IotResponsesDescribeMitigationAction <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeMitigationAction(__scope: Construct, __resources: string[], __input: IotDescribeMitigationActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeMitigationActionRequest`](#aws-cdk-sdk.iot.IotDescribeMitigationActionRequest)

---



#### Properties <a name="Properties"></a>

##### `actionArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.property.actionArn"></a>

- *Type:* `string`

---

##### `actionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.property.actionId"></a>

- *Type:* `string`

---

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.property.actionName"></a>

- *Type:* `string`

---

##### `actionParams`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.property.actionParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams`](#aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams)

---

##### `actionType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.property.actionType"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationAction.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesDescribeMitigationActionActionParams <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeMitigationActionActionParams(__scope: Construct, __resources: string[], __input: IotDescribeMitigationActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeMitigationActionRequest`](#aws-cdk-sdk.iot.IotDescribeMitigationActionRequest)

---



#### Properties <a name="Properties"></a>

##### `addThingsToThingGroupParams`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams.property.addThingsToThingGroupParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams`](#aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams)

---

##### `enableIoTLoggingParams`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams.property.enableIoTLoggingParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams`](#aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams)

---

##### `publishFindingToSnsParams`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams.property.publishFindingToSnsParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams`](#aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams)

---

##### `replaceDefaultPolicyVersionParams`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams.property.replaceDefaultPolicyVersionParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams`](#aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams)

---

##### `updateCaCertificateParams`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams.property.updateCaCertificateParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams`](#aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams)

---

##### `updateDeviceCertificateParams`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParams.property.updateDeviceCertificateParams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams`](#aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams)

---


### IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams(__scope: Construct, __resources: string[], __input: IotDescribeMitigationActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeMitigationActionRequest`](#aws-cdk-sdk.iot.IotDescribeMitigationActionRequest)

---



#### Properties <a name="Properties"></a>

##### `overrideDynamicGroups`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams.property.overrideDynamicGroups"></a>

- *Type:* `boolean`

---

##### `thingGroupNames`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams.property.thingGroupNames"></a>

- *Type:* `string`[]

---


### IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams(__scope: Construct, __resources: string[], __input: IotDescribeMitigationActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeMitigationActionRequest`](#aws-cdk-sdk.iot.IotDescribeMitigationActionRequest)

---



#### Properties <a name="Properties"></a>

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams.property.logLevel"></a>

- *Type:* `string`

---

##### `roleArnForLogging`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams.property.roleArnForLogging"></a>

- *Type:* `string`

---


### IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams(__scope: Construct, __resources: string[], __input: IotDescribeMitigationActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeMitigationActionRequest`](#aws-cdk-sdk.iot.IotDescribeMitigationActionRequest)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams.property.topicArn"></a>

- *Type:* `string`

---


### IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams(__scope: Construct, __resources: string[], __input: IotDescribeMitigationActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeMitigationActionRequest`](#aws-cdk-sdk.iot.IotDescribeMitigationActionRequest)

---



#### Properties <a name="Properties"></a>

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams.property.templateName"></a>

- *Type:* `string`

---


### IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams(__scope: Construct, __resources: string[], __input: IotDescribeMitigationActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeMitigationActionRequest`](#aws-cdk-sdk.iot.IotDescribeMitigationActionRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams.property.action"></a>

- *Type:* `string`

---


### IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams(__scope: Construct, __resources: string[], __input: IotDescribeMitigationActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeMitigationActionRequest`](#aws-cdk-sdk.iot.IotDescribeMitigationActionRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams.property.action"></a>

- *Type:* `string`

---


### IotResponsesDescribeProvisioningTemplate <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeProvisioningTemplate(__scope: Construct, __resources: string[], __input: IotDescribeProvisioningTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeProvisioningTemplateRequest`](#aws-cdk-sdk.iot.IotDescribeProvisioningTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.property.creationDate"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.property.defaultVersionId"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.property.enabled"></a>

- *Type:* `boolean`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `preProvisioningHook`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.property.preProvisioningHook"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplatePreProvisioningHook`](#aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplatePreProvisioningHook)

---

##### `provisioningRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.property.provisioningRoleArn"></a>

- *Type:* `string`

---

##### `templateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.property.templateArn"></a>

- *Type:* `string`

---

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.property.templateBody"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplate.property.templateName"></a>

- *Type:* `string`

---


### IotResponsesDescribeProvisioningTemplatePreProvisioningHook <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplatePreProvisioningHook"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplatePreProvisioningHook.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeProvisioningTemplatePreProvisioningHook(__scope: Construct, __resources: string[], __input: IotDescribeProvisioningTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplatePreProvisioningHook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplatePreProvisioningHook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplatePreProvisioningHook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeProvisioningTemplateRequest`](#aws-cdk-sdk.iot.IotDescribeProvisioningTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `payloadVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplatePreProvisioningHook.property.payloadVersion"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplatePreProvisioningHook.property.targetArn"></a>

- *Type:* `string`

---


### IotResponsesDescribeProvisioningTemplateVersion <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplateVersion"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplateVersion.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeProvisioningTemplateVersion(__scope: Construct, __resources: string[], __input: IotDescribeProvisioningTemplateVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplateVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplateVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplateVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionRequest`](#aws-cdk-sdk.iot.IotDescribeProvisioningTemplateVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplateVersion.property.creationDate"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplateVersion.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplateVersion.property.templateBody"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeProvisioningTemplateVersion.property.versionId"></a>

- *Type:* `number`

---


### IotResponsesDescribeRoleAlias <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAlias"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAlias.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeRoleAlias(__scope: Construct, __resources: string[], __input: IotDescribeRoleAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeRoleAliasRequest`](#aws-cdk-sdk.iot.IotDescribeRoleAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `roleAliasDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAlias.property.roleAliasDescription"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription`](#aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription)

---


### IotResponsesDescribeRoleAliasRoleAliasDescription <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeRoleAliasRoleAliasDescription(__scope: Construct, __resources: string[], __input: IotDescribeRoleAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeRoleAliasRequest`](#aws-cdk-sdk.iot.IotDescribeRoleAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `credentialDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.property.credentialDurationSeconds"></a>

- *Type:* `number`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.property.owner"></a>

- *Type:* `string`

---

##### `roleAlias`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.property.roleAlias"></a>

- *Type:* `string`

---

##### `roleAliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.property.roleAliasArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeRoleAliasRoleAliasDescription.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesDescribeScheduledAudit <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeScheduledAudit(__scope: Construct, __resources: string[], __input: IotDescribeScheduledAuditRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeScheduledAuditRequest`](#aws-cdk-sdk.iot.IotDescribeScheduledAuditRequest)

---



#### Properties <a name="Properties"></a>

##### `dayOfMonth`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit.property.dayOfMonth"></a>

- *Type:* `string`

---

##### `dayOfWeek`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit.property.dayOfWeek"></a>

- *Type:* `string`

---

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit.property.frequency"></a>

- *Type:* `string`

---

##### `scheduledAuditArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit.property.scheduledAuditArn"></a>

- *Type:* `string`

---

##### `scheduledAuditName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit.property.scheduledAuditName"></a>

- *Type:* `string`

---

##### `targetCheckNames`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeScheduledAudit.property.targetCheckNames"></a>

- *Type:* `string`[]

---


### IotResponsesDescribeSecurityProfile <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeSecurityProfile(__scope: Construct, __resources: string[], __input: IotDescribeSecurityProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeSecurityProfileRequest`](#aws-cdk-sdk.iot.IotDescribeSecurityProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalMetricsToRetain`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.property.additionalMetricsToRetain"></a>

- *Type:* `string`[]

---

##### `additionalMetricsToRetainV2`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.property.additionalMetricsToRetainV2"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricToRetain`](#aws-cdk-sdk.iot.IotMetricToRetain)[]

---

##### `alertTargets`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.property.alertTargets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAlertTarget`](#aws-cdk-sdk.iot.IotAlertTarget)}

---

##### `behaviors`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.property.behaviors"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBehavior`](#aws-cdk-sdk.iot.IotBehavior)[]

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `securityProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.property.securityProfileArn"></a>

- *Type:* `string`

---

##### `securityProfileDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.property.securityProfileDescription"></a>

- *Type:* `string`

---

##### `securityProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.property.securityProfileName"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeSecurityProfile.property.version"></a>

- *Type:* `number`

---


### IotResponsesDescribeStream <a name="aws-cdk-sdk.iot.IotResponsesDescribeStream"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeStream.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeStream(__scope: Construct, __resources: string[], __input: IotDescribeStreamRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeStreamRequest`](#aws-cdk-sdk.iot.IotDescribeStreamRequest)

---



#### Properties <a name="Properties"></a>

##### `streamInfo`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStream.property.streamInfo"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo`](#aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo)

---


### IotResponsesDescribeStreamStreamInfo <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeStreamStreamInfo(__scope: Construct, __resources: string[], __input: IotDescribeStreamRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeStreamRequest`](#aws-cdk-sdk.iot.IotDescribeStreamRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.property.description"></a>

- *Type:* `string`

---

##### `files`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.property.files"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStreamFile`](#aws-cdk-sdk.iot.IotStreamFile)[]

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.property.roleArn"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.property.streamArn"></a>

- *Type:* `string`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.property.streamId"></a>

- *Type:* `string`

---

##### `streamVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeStreamStreamInfo.property.streamVersion"></a>

- *Type:* `number`

---


### IotResponsesDescribeThing <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeThing(__scope: Construct, __resources: string[], __input: IotDescribeThingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingRequest`](#aws-cdk-sdk.iot.IotDescribeThingRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `billingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.property.billingGroupName"></a>

- *Type:* `string`

---

##### `defaultClientId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.property.defaultClientId"></a>

- *Type:* `string`

---

##### `thingArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.property.thingArn"></a>

- *Type:* `string`

---

##### `thingId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.property.thingId"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.property.thingName"></a>

- *Type:* `string`

---

##### `thingTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.property.thingTypeName"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThing.property.version"></a>

- *Type:* `number`

---


### IotResponsesDescribeThingGroup <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeThingGroup(__scope: Construct, __resources: string[], __input: IotDescribeThingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingGroupRequest`](#aws-cdk-sdk.iot.IotDescribeThingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.property.indexName"></a>

- *Type:* `string`

---

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.property.queryString"></a>

- *Type:* `string`

---

##### `queryVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.property.queryVersion"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.property.status"></a>

- *Type:* `string`

---

##### `thingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.property.thingGroupArn"></a>

- *Type:* `string`

---

##### `thingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.property.thingGroupId"></a>

- *Type:* `string`

---

##### `thingGroupMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.property.thingGroupMetadata"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupMetadata`](#aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupMetadata)

---

##### `thingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.property.thingGroupName"></a>

- *Type:* `string`

---

##### `thingGroupProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.property.thingGroupProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupProperties`](#aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupProperties)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroup.property.version"></a>

- *Type:* `number`

---


### IotResponsesDescribeThingGroupThingGroupMetadata <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupMetadata.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeThingGroupThingGroupMetadata(__scope: Construct, __resources: string[], __input: IotDescribeThingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingGroupRequest`](#aws-cdk-sdk.iot.IotDescribeThingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `parentGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupMetadata.property.parentGroupName"></a>

- *Type:* `string`

---

##### `rootToParentThingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupMetadata.property.rootToParentThingGroups"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGroupNameAndArn`](#aws-cdk-sdk.iot.IotGroupNameAndArn)[]

---


### IotResponsesDescribeThingGroupThingGroupProperties <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupProperties"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupProperties.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeThingGroupThingGroupProperties(__scope: Construct, __resources: string[], __input: IotDescribeThingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingGroupRequest`](#aws-cdk-sdk.iot.IotDescribeThingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `attributePayload`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupProperties.property.attributePayload"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload`](#aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload)

---

##### `thingGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupProperties.property.thingGroupDescription"></a>

- *Type:* `string`

---


### IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload(__scope: Construct, __resources: string[], __input: IotDescribeThingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingGroupRequest`](#aws-cdk-sdk.iot.IotDescribeThingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `merge`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload.property.merge"></a>

- *Type:* `boolean`

---


### IotResponsesDescribeThingRegistrationTask <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeThingRegistrationTask(__scope: Construct, __resources: string[], __input: IotDescribeThingRegistrationTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskRequest`](#aws-cdk-sdk.iot.IotDescribeThingRegistrationTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.creationDate"></a>

- *Type:* `string`

---

##### `failureCount`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.failureCount"></a>

- *Type:* `number`

---

##### `inputFileBucket`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.inputFileBucket"></a>

- *Type:* `string`

---

##### `inputFileKey`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.inputFileKey"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.message"></a>

- *Type:* `string`

---

##### `percentageProgress`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.percentageProgress"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.status"></a>

- *Type:* `string`

---

##### `successCount`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.successCount"></a>

- *Type:* `number`

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.taskId"></a>

- *Type:* `string`

---

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingRegistrationTask.property.templateBody"></a>

- *Type:* `string`

---


### IotResponsesDescribeThingType <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingType"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingType.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeThingType(__scope: Construct, __resources: string[], __input: IotDescribeThingTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingTypeRequest`](#aws-cdk-sdk.iot.IotDescribeThingTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `thingTypeArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingType.property.thingTypeArn"></a>

- *Type:* `string`

---

##### `thingTypeId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingType.property.thingTypeId"></a>

- *Type:* `string`

---

##### `thingTypeMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingType.property.thingTypeMetadata"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeMetadata`](#aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeMetadata)

---

##### `thingTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingType.property.thingTypeName"></a>

- *Type:* `string`

---

##### `thingTypeProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingType.property.thingTypeProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeProperties`](#aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeProperties)

---


### IotResponsesDescribeThingTypeThingTypeMetadata <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeMetadata.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeThingTypeThingTypeMetadata(__scope: Construct, __resources: string[], __input: IotDescribeThingTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingTypeRequest`](#aws-cdk-sdk.iot.IotDescribeThingTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `deprecated`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeMetadata.property.deprecated"></a>

- *Type:* `boolean`

---

##### `deprecationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeMetadata.property.deprecationDate"></a>

- *Type:* `string`

---


### IotResponsesDescribeThingTypeThingTypeProperties <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeProperties"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeProperties.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesDescribeThingTypeThingTypeProperties(__scope: Construct, __resources: string[], __input: IotDescribeThingTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDescribeThingTypeRequest`](#aws-cdk-sdk.iot.IotDescribeThingTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `searchableAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeProperties.property.searchableAttributes"></a>

- *Type:* `string`[]

---

##### `thingTypeDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesDescribeThingTypeThingTypeProperties.property.thingTypeDescription"></a>

- *Type:* `string`

---


### IotResponsesFetchCardinality <a name="aws-cdk-sdk.iot.IotResponsesFetchCardinality"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchCardinality.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchCardinality(__scope: Construct, __resources: string[], __input: IotGetCardinalityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchCardinality.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchCardinality.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchCardinality.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetCardinalityRequest`](#aws-cdk-sdk.iot.IotGetCardinalityRequest)

---



#### Properties <a name="Properties"></a>

##### `cardinality`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchCardinality.property.cardinality"></a>

- *Type:* `number`

---


### IotResponsesFetchEffectivePolicies <a name="aws-cdk-sdk.iot.IotResponsesFetchEffectivePolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchEffectivePolicies.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchEffectivePolicies(__scope: Construct, __resources: string[], __input: IotGetEffectivePoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchEffectivePolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchEffectivePolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchEffectivePolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetEffectivePoliciesRequest`](#aws-cdk-sdk.iot.IotGetEffectivePoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `effectivePolicies`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchEffectivePolicies.property.effectivePolicies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotEffectivePolicy`](#aws-cdk-sdk.iot.IotEffectivePolicy)[]

---


### IotResponsesFetchIndexingConfiguration <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfiguration.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchIndexingConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `thingGroupIndexingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfiguration.property.thingGroupIndexingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration`](#aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration)

---

##### `thingIndexingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfiguration.property.thingIndexingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration`](#aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration)

---


### IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `customFields`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration.property.customFields"></a>

- *Type:* [`aws-cdk-sdk.iot.IotField`](#aws-cdk-sdk.iot.IotField)[]

---

##### `managedFields`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration.property.managedFields"></a>

- *Type:* [`aws-cdk-sdk.iot.IotField`](#aws-cdk-sdk.iot.IotField)[]

---

##### `thingGroupIndexingMode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration.property.thingGroupIndexingMode"></a>

- *Type:* `string`

---


### IotResponsesFetchIndexingConfigurationThingIndexingConfiguration <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `customFields`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration.property.customFields"></a>

- *Type:* [`aws-cdk-sdk.iot.IotField`](#aws-cdk-sdk.iot.IotField)[]

---

##### `managedFields`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration.property.managedFields"></a>

- *Type:* [`aws-cdk-sdk.iot.IotField`](#aws-cdk-sdk.iot.IotField)[]

---

##### `thingConnectivityIndexingMode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration.property.thingConnectivityIndexingMode"></a>

- *Type:* `string`

---

##### `thingIndexingMode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchIndexingConfigurationThingIndexingConfiguration.property.thingIndexingMode"></a>

- *Type:* `string`

---


### IotResponsesFetchJobDocument <a name="aws-cdk-sdk.iot.IotResponsesFetchJobDocument"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchJobDocument.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchJobDocument(__scope: Construct, __resources: string[], __input: IotGetJobDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchJobDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchJobDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchJobDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetJobDocumentRequest`](#aws-cdk-sdk.iot.IotGetJobDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchJobDocument.property.document"></a>

- *Type:* `string`

---


### IotResponsesFetchLoggingOptions <a name="aws-cdk-sdk.iot.IotResponsesFetchLoggingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchLoggingOptions.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchLoggingOptions(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchLoggingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchLoggingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchLoggingOptions.property.logLevel"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchLoggingOptions.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesFetchOtaUpdate <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchOtaUpdate(__scope: Construct, __resources: string[], __input: IotGetOtaUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetOtaUpdateRequest`](#aws-cdk-sdk.iot.IotGetOtaUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `otaUpdateInfo`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdate.property.otaUpdateInfo"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo`](#aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo)

---


### IotResponsesFetchOtaUpdateOtaUpdateInfo <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchOtaUpdateOtaUpdateInfo(__scope: Construct, __resources: string[], __input: IotGetOtaUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetOtaUpdateRequest`](#aws-cdk-sdk.iot.IotGetOtaUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalParameters`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.additionalParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `awsIotJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.awsIotJobArn"></a>

- *Type:* `string`

---

##### `awsIotJobId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.awsIotJobId"></a>

- *Type:* `string`

---

##### `awsJobExecutionsRolloutConfig`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.awsJobExecutionsRolloutConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig`](#aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig)

---

##### `awsJobPresignedUrlConfig`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.awsJobPresignedUrlConfig"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig`](#aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig)

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.description"></a>

- *Type:* `string`

---

##### `errorInfo`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.errorInfo"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo`](#aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo)

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `otaUpdateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.otaUpdateArn"></a>

- *Type:* `string`

---

##### `otaUpdateFiles`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.otaUpdateFiles"></a>

- *Type:* [`aws-cdk-sdk.iot.IotOtaUpdateFile`](#aws-cdk-sdk.iot.IotOtaUpdateFile)[]

---

##### `otaUpdateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.otaUpdateId"></a>

- *Type:* `string`

---

##### `otaUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.otaUpdateStatus"></a>

- *Type:* `string`

---

##### `protocols`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.protocols"></a>

- *Type:* `string`[]

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.targets"></a>

- *Type:* `string`[]

---

##### `targetSelection`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfo.property.targetSelection"></a>

- *Type:* `string`

---


### IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig(__scope: Construct, __resources: string[], __input: IotGetOtaUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetOtaUpdateRequest`](#aws-cdk-sdk.iot.IotGetOtaUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `exponentialRate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig.property.exponentialRate"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate`](#aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate)

---

##### `maximumPerMinute`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

- *Type:* `number`

---


### IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate(__scope: Construct, __resources: string[], __input: IotGetOtaUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetOtaUpdateRequest`](#aws-cdk-sdk.iot.IotGetOtaUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `baseRatePerMinute`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

- *Type:* `number`

---

##### `incrementFactor`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

- *Type:* `number`

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria`](#aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria)

---


### IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria(__scope: Construct, __resources: string[], __input: IotGetOtaUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetOtaUpdateRequest`](#aws-cdk-sdk.iot.IotGetOtaUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `numberOfNotifiedThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

- *Type:* `number`

---

##### `numberOfSucceededThings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

- *Type:* `number`

---


### IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig(__scope: Construct, __resources: string[], __input: IotGetOtaUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetOtaUpdateRequest`](#aws-cdk-sdk.iot.IotGetOtaUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `expiresInSec`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig.property.expiresInSec"></a>

- *Type:* `number`

---


### IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo(__scope: Construct, __resources: string[], __input: IotGetOtaUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetOtaUpdateRequest`](#aws-cdk-sdk.iot.IotGetOtaUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo.property.message"></a>

- *Type:* `string`

---


### IotResponsesFetchPercentiles <a name="aws-cdk-sdk.iot.IotResponsesFetchPercentiles"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchPercentiles.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchPercentiles(__scope: Construct, __resources: string[], __input: IotGetPercentilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPercentiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPercentiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPercentiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetPercentilesRequest`](#aws-cdk-sdk.iot.IotGetPercentilesRequest)

---



#### Properties <a name="Properties"></a>

##### `percentiles`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPercentiles.property.percentiles"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPercentPair`](#aws-cdk-sdk.iot.IotPercentPair)[]

---


### IotResponsesFetchPolicy <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchPolicy(__scope: Construct, __resources: string[], __input: IotGetPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetPolicyRequest`](#aws-cdk-sdk.iot.IotGetPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.property.creationDate"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.property.defaultVersionId"></a>

- *Type:* `string`

---

##### `generationId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.property.generationId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicy.property.policyName"></a>

- *Type:* `string`

---


### IotResponsesFetchPolicyVersion <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchPolicyVersion(__scope: Construct, __resources: string[], __input: IotGetPolicyVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetPolicyVersionRequest`](#aws-cdk-sdk.iot.IotGetPolicyVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.property.creationDate"></a>

- *Type:* `string`

---

##### `generationId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.property.generationId"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.property.policyDocument"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.property.policyName"></a>

- *Type:* `string`

---

##### `policyVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchPolicyVersion.property.policyVersionId"></a>

- *Type:* `string`

---


### IotResponsesFetchRegistrationCode <a name="aws-cdk-sdk.iot.IotResponsesFetchRegistrationCode"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchRegistrationCode.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchRegistrationCode(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchRegistrationCode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchRegistrationCode.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `registrationCode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchRegistrationCode.property.registrationCode"></a>

- *Type:* `string`

---


### IotResponsesFetchStatistics <a name="aws-cdk-sdk.iot.IotResponsesFetchStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchStatistics.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchStatistics(__scope: Construct, __resources: string[], __input: IotGetStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetStatisticsRequest`](#aws-cdk-sdk.iot.IotGetStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatistics.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics`](#aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics)

---


### IotResponsesFetchStatisticsStatistics <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchStatisticsStatistics(__scope: Construct, __resources: string[], __input: IotGetStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetStatisticsRequest`](#aws-cdk-sdk.iot.IotGetStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `average`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.property.average"></a>

- *Type:* `number`

---

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.property.count"></a>

- *Type:* `number`

---

##### `maximum`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.property.maximum"></a>

- *Type:* `number`

---

##### `minimum`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.property.minimum"></a>

- *Type:* `number`

---

##### `stdDeviation`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.property.stdDeviation"></a>

- *Type:* `number`

---

##### `sum`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.property.sum"></a>

- *Type:* `number`

---

##### `sumOfSquares`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.property.sumOfSquares"></a>

- *Type:* `number`

---

##### `variance`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchStatisticsStatistics.property.variance"></a>

- *Type:* `number`

---


### IotResponsesFetchTopicRule <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRule"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRule.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRule(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRule.property.rule"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule)

---

##### `ruleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRule.property.ruleArn"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleDestination <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestination"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestination.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleDestination(__scope: Construct, __resources: string[], __input: IotGetTopicRuleDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `topicRuleDestination`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestination.property.topicRuleDestination"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination)

---


### IotResponsesFetchTopicRuleDestinationTopicRuleDestination <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination(__scope: Construct, __resources: string[], __input: IotGetTopicRuleDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination.property.arn"></a>

- *Type:* `string`

---

##### `httpUrlProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination.property.httpUrlProperties"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestination.property.statusReason"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties(__scope: Construct, __resources: string[], __input: IotGetTopicRuleDestinationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleDestinationRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleDestinationRequest)

---



#### Properties <a name="Properties"></a>

##### `confirmationUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties.property.confirmationUrl"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRule <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRule(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.property.actions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAction`](#aws-cdk-sdk.iot.IotAction)[]

---

##### `awsIotSqlVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.property.awsIotSqlVersion"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.property.description"></a>

- *Type:* `string`

---

##### `errorAction`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.property.errorAction"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction)

---

##### `ruleDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.property.ruleDisabled"></a>

- *Type:* `boolean`

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.property.ruleName"></a>

- *Type:* `string`

---

##### `sql`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRule.property.sql"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorAction <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorAction(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudwatchAlarm`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.cloudwatchAlarm"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm)

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.cloudwatchLogs"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs)

---

##### `cloudwatchMetric`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.cloudwatchMetric"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric)

---

##### `dynamoDb`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.dynamoDb"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb)

---

##### `dynamoDBv2`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.dynamoDBv2"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2)

---

##### `elasticsearch`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.elasticsearch"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch)

---

##### `firehose`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.firehose"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose)

---

##### `http`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.http"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp)

---

##### `iotAnalytics`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.iotAnalytics"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics)

---

##### `iotEvents`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.iotEvents"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents)

---

##### `iotSiteWise`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.iotSiteWise"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise)

---

##### `kinesis`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.kinesis"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis)

---

##### `lambda`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.lambda"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionLambda`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionLambda)

---

##### `republish`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.republish"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish)

---

##### `s3`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.s3"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3)

---

##### `salesforce`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.salesforce"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSalesforce`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSalesforce)

---

##### `sns`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.sns"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSns`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSns)

---

##### `sqs`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.sqs"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSqs`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSqs)

---

##### `stepFunctions`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.stepFunctions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions)

---

##### `timestream`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorAction.property.timestream"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream)

---


### IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `alarmName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm.property.alarmName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm.property.roleArn"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm.property.stateReason"></a>

- *Type:* `string`

---

##### `stateValue`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm.property.stateValue"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs.property.logGroupName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric.property.metricName"></a>

- *Type:* `string`

---

##### `metricNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric.property.metricNamespace"></a>

- *Type:* `string`

---

##### `metricTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric.property.metricTimestamp"></a>

- *Type:* `string`

---

##### `metricUnit`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric.property.metricUnit"></a>

- *Type:* `string`

---

##### `metricValue`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric.property.metricValue"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionDynamoDb <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `hashKeyField`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.property.hashKeyField"></a>

- *Type:* `string`

---

##### `hashKeyType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.property.hashKeyType"></a>

- *Type:* `string`

---

##### `hashKeyValue`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.property.hashKeyValue"></a>

- *Type:* `string`

---

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.property.operation"></a>

- *Type:* `string`

---

##### `payloadField`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.property.payloadField"></a>

- *Type:* `string`

---

##### `rangeKeyField`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.property.rangeKeyField"></a>

- *Type:* `string`

---

##### `rangeKeyType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.property.rangeKeyType"></a>

- *Type:* `string`

---

##### `rangeKeyValue`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.property.rangeKeyValue"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.property.roleArn"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDb.property.tableName"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2 <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `putItem`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2.property.putItem"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem.property.tableName"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionElasticsearch <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch.property.endpoint"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch.property.id"></a>

- *Type:* `string`

---

##### `index`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch.property.index"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch.property.roleArn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionElasticsearch.property.type"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionFirehose <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `batchMode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose.property.batchMode"></a>

- *Type:* `boolean`

---

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose.property.roleArn"></a>

- *Type:* `string`

---

##### `separator`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionFirehose.property.separator"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionHttp <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionHttp(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `auth`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp.property.auth"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuth`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuth)

---

##### `confirmationUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp.property.confirmationUrl"></a>

- *Type:* `string`

---

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp.property.headers"></a>

- *Type:* [`aws-cdk-sdk.iot.IotHttpActionHeader`](#aws-cdk-sdk.iot.IotHttpActionHeader)[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttp.property.url"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionHttpAuth <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuth"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuth.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuth(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `sigv4`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuth.property.sigv4"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4)

---


### IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4 <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4.property.roleArn"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4.property.serviceName"></a>

- *Type:* `string`

---

##### `signingRegion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4.property.signingRegion"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `batchMode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics.property.batchMode"></a>

- *Type:* `boolean`

---

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics.property.channelArn"></a>

- *Type:* `string`

---

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics.property.channelName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionIotEvents <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `batchMode`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents.property.batchMode"></a>

- *Type:* `boolean`

---

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents.property.inputName"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents.property.messageId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotEvents.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `putAssetPropertyValueEntries`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise.property.putAssetPropertyValueEntries"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPutAssetPropertyValueEntry`](#aws-cdk-sdk.iot.IotPutAssetPropertyValueEntry)[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionKinesis <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `partitionKey`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis.property.partitionKey"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis.property.roleArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionKinesis.property.streamName"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionLambda <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionLambda"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionLambda.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionLambda(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionLambda.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionLambda.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionLambda.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionLambda.property.functionArn"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionRepublish <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `qos`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish.property.qos"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish.property.roleArn"></a>

- *Type:* `string`

---

##### `topic`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionRepublish.property.topic"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionS3 <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionS3(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3.property.bucketName"></a>

- *Type:* `string`

---

##### `cannedAcl`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3.property.cannedAcl"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3.property.key"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionS3.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionSalesforce <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSalesforce"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSalesforce.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionSalesforce(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSalesforce.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSalesforce.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSalesforce.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `token`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSalesforce.property.token"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSalesforce.property.url"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionSns <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSns"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSns.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionSns(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `messageFormat`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSns.property.messageFormat"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSns.property.roleArn"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSns.property.targetArn"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionSqs <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSqs"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSqs.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionSqs(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSqs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSqs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSqs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSqs.property.queueUrl"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSqs.property.roleArn"></a>

- *Type:* `string`

---

##### `useBase64`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionSqs.property.useBase64"></a>

- *Type:* `boolean`

---


### IotResponsesFetchTopicRuleRuleErrorActionStepFunctions <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `executionNamePrefix`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions.property.executionNamePrefix"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions.property.roleArn"></a>

- *Type:* `string`

---

##### `stateMachineName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionStepFunctions.property.stateMachineName"></a>

- *Type:* `string`

---


### IotResponsesFetchTopicRuleRuleErrorActionTimestream <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream.property.databaseName"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTimestreamDimension`](#aws-cdk-sdk.iot.IotTimestreamDimension)[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream.property.roleArn"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream.property.tableName"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestream.property.timestamp"></a>

- *Type:* [`aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp`](#aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp)

---


### IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp(__scope: Construct, __resources: string[], __input: IotGetTopicRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGetTopicRuleRequest`](#aws-cdk-sdk.iot.IotGetTopicRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp.property.value"></a>

- *Type:* `string`

---


### IotResponsesFetchV2LoggingOptions <a name="aws-cdk-sdk.iot.IotResponsesFetchV2LoggingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesFetchV2LoggingOptions.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesFetchV2LoggingOptions(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchV2LoggingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchV2LoggingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `defaultLogLevel`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchV2LoggingOptions.property.defaultLogLevel"></a>

- *Type:* `string`

---

##### `disableAllLogs`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchV2LoggingOptions.property.disableAllLogs"></a>

- *Type:* `boolean`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesFetchV2LoggingOptions.property.roleArn"></a>

- *Type:* `string`

---


### IotResponsesListActiveViolations <a name="aws-cdk-sdk.iot.IotResponsesListActiveViolations"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListActiveViolations.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListActiveViolations(__scope: Construct, __resources: string[], __input: IotListActiveViolationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListActiveViolations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListActiveViolations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListActiveViolations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListActiveViolationsRequest`](#aws-cdk-sdk.iot.IotListActiveViolationsRequest)

---



#### Properties <a name="Properties"></a>

##### `activeViolations`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListActiveViolations.property.activeViolations"></a>

- *Type:* [`aws-cdk-sdk.iot.IotActiveViolation`](#aws-cdk-sdk.iot.IotActiveViolation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListActiveViolations.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListAttachedPolicies <a name="aws-cdk-sdk.iot.IotResponsesListAttachedPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListAttachedPolicies.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListAttachedPolicies(__scope: Construct, __resources: string[], __input: IotListAttachedPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAttachedPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAttachedPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAttachedPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAttachedPoliciesRequest`](#aws-cdk-sdk.iot.IotListAttachedPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAttachedPolicies.property.nextMarker"></a>

- *Type:* `string`

---

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAttachedPolicies.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicy`](#aws-cdk-sdk.iot.IotPolicy)[]

---


### IotResponsesListAuditFindings <a name="aws-cdk-sdk.iot.IotResponsesListAuditFindings"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListAuditFindings.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListAuditFindings(__scope: Construct, __resources: string[], __input: IotListAuditFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuditFindingsRequest`](#aws-cdk-sdk.iot.IotListAuditFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditFindings.property.findings"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditFinding`](#aws-cdk-sdk.iot.IotAuditFinding)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditFindings.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListAuditMitigationActionsExecutions <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsExecutions.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListAuditMitigationActionsExecutions(__scope: Construct, __resources: string[], __input: IotListAuditMitigationActionsExecutionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsRequest`](#aws-cdk-sdk.iot.IotListAuditMitigationActionsExecutionsRequest)

---



#### Properties <a name="Properties"></a>

##### `actionsExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsExecutions.property.actionsExecutions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata`](#aws-cdk-sdk.iot.IotAuditMitigationActionExecutionMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsExecutions.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListAuditMitigationActionsTasks <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsTasks"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsTasks.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListAuditMitigationActionsTasks(__scope: Construct, __resources: string[], __input: IotListAuditMitigationActionsTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest`](#aws-cdk-sdk.iot.IotListAuditMitigationActionsTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsTasks.property.nextToken"></a>

- *Type:* `string`

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditMitigationActionsTasks.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditMitigationActionsTaskMetadata`](#aws-cdk-sdk.iot.IotAuditMitigationActionsTaskMetadata)[]

---


### IotResponsesListAuditSuppressions <a name="aws-cdk-sdk.iot.IotResponsesListAuditSuppressions"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListAuditSuppressions.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListAuditSuppressions(__scope: Construct, __resources: string[], __input: IotListAuditSuppressionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditSuppressions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditSuppressions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditSuppressions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuditSuppressionsRequest`](#aws-cdk-sdk.iot.IotListAuditSuppressionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditSuppressions.property.nextToken"></a>

- *Type:* `string`

---

##### `suppressions`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditSuppressions.property.suppressions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditSuppression`](#aws-cdk-sdk.iot.IotAuditSuppression)[]

---


### IotResponsesListAuditTasks <a name="aws-cdk-sdk.iot.IotResponsesListAuditTasks"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListAuditTasks.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListAuditTasks(__scope: Construct, __resources: string[], __input: IotListAuditTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuditTasksRequest`](#aws-cdk-sdk.iot.IotListAuditTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditTasks.property.nextToken"></a>

- *Type:* `string`

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuditTasks.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuditTaskMetadata`](#aws-cdk-sdk.iot.IotAuditTaskMetadata)[]

---


### IotResponsesListAuthorizers <a name="aws-cdk-sdk.iot.IotResponsesListAuthorizers"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListAuthorizers.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListAuthorizers(__scope: Construct, __resources: string[], __input: IotListAuthorizersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuthorizers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuthorizers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuthorizers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListAuthorizersRequest`](#aws-cdk-sdk.iot.IotListAuthorizersRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizers`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuthorizers.property.authorizers"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthorizerSummary`](#aws-cdk-sdk.iot.IotAuthorizerSummary)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListAuthorizers.property.nextMarker"></a>

- *Type:* `string`

---


### IotResponsesListBillingGroups <a name="aws-cdk-sdk.iot.IotResponsesListBillingGroups"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListBillingGroups.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListBillingGroups(__scope: Construct, __resources: string[], __input: IotListBillingGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListBillingGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListBillingGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListBillingGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListBillingGroupsRequest`](#aws-cdk-sdk.iot.IotListBillingGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `billingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListBillingGroups.property.billingGroups"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGroupNameAndArn`](#aws-cdk-sdk.iot.IotGroupNameAndArn)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListBillingGroups.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListCaCertificates <a name="aws-cdk-sdk.iot.IotResponsesListCaCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListCaCertificates.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListCaCertificates(__scope: Construct, __resources: string[], __input: IotListCaCertificatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCaCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCaCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCaCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListCaCertificatesRequest`](#aws-cdk-sdk.iot.IotListCaCertificatesRequest)

---



#### Properties <a name="Properties"></a>

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCaCertificates.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCaCertificate`](#aws-cdk-sdk.iot.IotCaCertificate)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCaCertificates.property.nextMarker"></a>

- *Type:* `string`

---


### IotResponsesListCertificates <a name="aws-cdk-sdk.iot.IotResponsesListCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListCertificates.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListCertificates(__scope: Construct, __resources: string[], __input: IotListCertificatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListCertificatesRequest`](#aws-cdk-sdk.iot.IotListCertificatesRequest)

---



#### Properties <a name="Properties"></a>

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCertificates.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCertificate`](#aws-cdk-sdk.iot.IotCertificate)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCertificates.property.nextMarker"></a>

- *Type:* `string`

---


### IotResponsesListCertificatesByCa <a name="aws-cdk-sdk.iot.IotResponsesListCertificatesByCa"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListCertificatesByCa.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListCertificatesByCa(__scope: Construct, __resources: string[], __input: IotListCertificatesByCaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCertificatesByCa.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCertificatesByCa.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCertificatesByCa.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListCertificatesByCaRequest`](#aws-cdk-sdk.iot.IotListCertificatesByCaRequest)

---



#### Properties <a name="Properties"></a>

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCertificatesByCa.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotCertificate`](#aws-cdk-sdk.iot.IotCertificate)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListCertificatesByCa.property.nextMarker"></a>

- *Type:* `string`

---


### IotResponsesListDimensions <a name="aws-cdk-sdk.iot.IotResponsesListDimensions"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListDimensions.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListDimensions(__scope: Construct, __resources: string[], __input: IotListDimensionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListDimensions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListDimensions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListDimensions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListDimensionsRequest`](#aws-cdk-sdk.iot.IotListDimensionsRequest)

---



#### Properties <a name="Properties"></a>

##### `dimensionNames`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListDimensions.property.dimensionNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListDimensions.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListDomainConfigurations <a name="aws-cdk-sdk.iot.IotResponsesListDomainConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListDomainConfigurations.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListDomainConfigurations(__scope: Construct, __resources: string[], __input: IotListDomainConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListDomainConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListDomainConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListDomainConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListDomainConfigurationsRequest`](#aws-cdk-sdk.iot.IotListDomainConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `domainConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListDomainConfigurations.property.domainConfigurations"></a>

- *Type:* [`aws-cdk-sdk.iot.IotDomainConfigurationSummary`](#aws-cdk-sdk.iot.IotDomainConfigurationSummary)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListDomainConfigurations.property.nextMarker"></a>

- *Type:* `string`

---


### IotResponsesListIndices <a name="aws-cdk-sdk.iot.IotResponsesListIndices"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListIndices.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListIndices(__scope: Construct, __resources: string[], __input: IotListIndicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListIndices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListIndices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListIndices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListIndicesRequest`](#aws-cdk-sdk.iot.IotListIndicesRequest)

---



#### Properties <a name="Properties"></a>

##### `indexNames`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListIndices.property.indexNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListIndices.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListJobExecutionsForJob <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForJob"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForJob.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListJobExecutionsForJob(__scope: Construct, __resources: string[], __input: IotListJobExecutionsForJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListJobExecutionsForJobRequest`](#aws-cdk-sdk.iot.IotListJobExecutionsForJobRequest)

---



#### Properties <a name="Properties"></a>

##### `executionSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForJob.property.executionSummaries"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecutionSummaryForJob`](#aws-cdk-sdk.iot.IotJobExecutionSummaryForJob)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForJob.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListJobExecutionsForThing <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForThing"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForThing.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListJobExecutionsForThing(__scope: Construct, __resources: string[], __input: IotListJobExecutionsForThingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForThing.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForThing.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForThing.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListJobExecutionsForThingRequest`](#aws-cdk-sdk.iot.IotListJobExecutionsForThingRequest)

---



#### Properties <a name="Properties"></a>

##### `executionSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForThing.property.executionSummaries"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobExecutionSummaryForThing`](#aws-cdk-sdk.iot.IotJobExecutionSummaryForThing)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobExecutionsForThing.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListJobs <a name="aws-cdk-sdk.iot.IotResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListJobs.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListJobs(__scope: Construct, __resources: string[], __input: IotListJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListJobsRequest`](#aws-cdk-sdk.iot.IotListJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.iot.IotJobSummary`](#aws-cdk-sdk.iot.IotJobSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListJobs.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListMitigationActions <a name="aws-cdk-sdk.iot.IotResponsesListMitigationActions"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListMitigationActions.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListMitigationActions(__scope: Construct, __resources: string[], __input: IotListMitigationActionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListMitigationActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListMitigationActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListMitigationActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListMitigationActionsRequest`](#aws-cdk-sdk.iot.IotListMitigationActionsRequest)

---



#### Properties <a name="Properties"></a>

##### `actionIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListMitigationActions.property.actionIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMitigationActionIdentifier`](#aws-cdk-sdk.iot.IotMitigationActionIdentifier)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListMitigationActions.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListOtaUpdates <a name="aws-cdk-sdk.iot.IotResponsesListOtaUpdates"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListOtaUpdates.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListOtaUpdates(__scope: Construct, __resources: string[], __input: IotListOtaUpdatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListOtaUpdates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListOtaUpdates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListOtaUpdates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListOtaUpdatesRequest`](#aws-cdk-sdk.iot.IotListOtaUpdatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListOtaUpdates.property.nextToken"></a>

- *Type:* `string`

---

##### `otaUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListOtaUpdates.property.otaUpdates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotOtaUpdateSummary`](#aws-cdk-sdk.iot.IotOtaUpdateSummary)[]

---


### IotResponsesListOutgoingCertificates <a name="aws-cdk-sdk.iot.IotResponsesListOutgoingCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListOutgoingCertificates.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListOutgoingCertificates(__scope: Construct, __resources: string[], __input: IotListOutgoingCertificatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListOutgoingCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListOutgoingCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListOutgoingCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListOutgoingCertificatesRequest`](#aws-cdk-sdk.iot.IotListOutgoingCertificatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListOutgoingCertificates.property.nextMarker"></a>

- *Type:* `string`

---

##### `outgoingCertificates`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListOutgoingCertificates.property.outgoingCertificates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotOutgoingCertificate`](#aws-cdk-sdk.iot.IotOutgoingCertificate)[]

---


### IotResponsesListPolicies <a name="aws-cdk-sdk.iot.IotResponsesListPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListPolicies.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListPolicies(__scope: Construct, __resources: string[], __input: IotListPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListPoliciesRequest`](#aws-cdk-sdk.iot.IotListPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicies.property.nextMarker"></a>

- *Type:* `string`

---

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicies.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicy`](#aws-cdk-sdk.iot.IotPolicy)[]

---


### IotResponsesListPolicyPrincipals <a name="aws-cdk-sdk.iot.IotResponsesListPolicyPrincipals"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListPolicyPrincipals.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListPolicyPrincipals(__scope: Construct, __resources: string[], __input: IotListPolicyPrincipalsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicyPrincipals.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicyPrincipals.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicyPrincipals.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListPolicyPrincipalsRequest`](#aws-cdk-sdk.iot.IotListPolicyPrincipalsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicyPrincipals.property.nextMarker"></a>

- *Type:* `string`

---

##### `principals`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicyPrincipals.property.principals"></a>

- *Type:* `string`[]

---


### IotResponsesListPolicyVersions <a name="aws-cdk-sdk.iot.IotResponsesListPolicyVersions"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListPolicyVersions.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListPolicyVersions(__scope: Construct, __resources: string[], __input: IotListPolicyVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicyVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicyVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicyVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListPolicyVersionsRequest`](#aws-cdk-sdk.iot.IotListPolicyVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `policyVersions`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPolicyVersions.property.policyVersions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicyVersion`](#aws-cdk-sdk.iot.IotPolicyVersion)[]

---


### IotResponsesListPrincipalPolicies <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalPolicies.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListPrincipalPolicies(__scope: Construct, __resources: string[], __input: IotListPrincipalPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListPrincipalPoliciesRequest`](#aws-cdk-sdk.iot.IotListPrincipalPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalPolicies.property.nextMarker"></a>

- *Type:* `string`

---

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalPolicies.property.policies"></a>

- *Type:* [`aws-cdk-sdk.iot.IotPolicy`](#aws-cdk-sdk.iot.IotPolicy)[]

---


### IotResponsesListPrincipalThings <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalThings"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalThings.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListPrincipalThings(__scope: Construct, __resources: string[], __input: IotListPrincipalThingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalThings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalThings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalThings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListPrincipalThingsRequest`](#aws-cdk-sdk.iot.IotListPrincipalThingsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalThings.property.nextToken"></a>

- *Type:* `string`

---

##### `things`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListPrincipalThings.property.things"></a>

- *Type:* `string`[]

---


### IotResponsesListProvisioningTemplates <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplates.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListProvisioningTemplates(__scope: Construct, __resources: string[], __input: IotListProvisioningTemplatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListProvisioningTemplatesRequest`](#aws-cdk-sdk.iot.IotListProvisioningTemplatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplates.property.nextToken"></a>

- *Type:* `string`

---

##### `templates`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplates.property.templates"></a>

- *Type:* [`aws-cdk-sdk.iot.IotProvisioningTemplateSummary`](#aws-cdk-sdk.iot.IotProvisioningTemplateSummary)[]

---


### IotResponsesListProvisioningTemplateVersions <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplateVersions"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplateVersions.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListProvisioningTemplateVersions(__scope: Construct, __resources: string[], __input: IotListProvisioningTemplateVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplateVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplateVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplateVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsRequest`](#aws-cdk-sdk.iot.IotListProvisioningTemplateVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplateVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListProvisioningTemplateVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.iot.IotProvisioningTemplateVersionSummary`](#aws-cdk-sdk.iot.IotProvisioningTemplateVersionSummary)[]

---


### IotResponsesListRoleAliases <a name="aws-cdk-sdk.iot.IotResponsesListRoleAliases"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListRoleAliases.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListRoleAliases(__scope: Construct, __resources: string[], __input: IotListRoleAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListRoleAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListRoleAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListRoleAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListRoleAliasesRequest`](#aws-cdk-sdk.iot.IotListRoleAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListRoleAliases.property.nextMarker"></a>

- *Type:* `string`

---

##### `roleAliases`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListRoleAliases.property.roleAliases"></a>

- *Type:* `string`[]

---


### IotResponsesListScheduledAudits <a name="aws-cdk-sdk.iot.IotResponsesListScheduledAudits"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListScheduledAudits.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListScheduledAudits(__scope: Construct, __resources: string[], __input: IotListScheduledAuditsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListScheduledAudits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListScheduledAudits.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListScheduledAudits.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListScheduledAuditsRequest`](#aws-cdk-sdk.iot.IotListScheduledAuditsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListScheduledAudits.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduledAudits`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListScheduledAudits.property.scheduledAudits"></a>

- *Type:* [`aws-cdk-sdk.iot.IotScheduledAuditMetadata`](#aws-cdk-sdk.iot.IotScheduledAuditMetadata)[]

---


### IotResponsesListSecurityProfiles <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfiles.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListSecurityProfiles(__scope: Construct, __resources: string[], __input: IotListSecurityProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListSecurityProfilesRequest`](#aws-cdk-sdk.iot.IotListSecurityProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfiles.property.nextToken"></a>

- *Type:* `string`

---

##### `securityProfileIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfiles.property.securityProfileIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSecurityProfileIdentifier`](#aws-cdk-sdk.iot.IotSecurityProfileIdentifier)[]

---


### IotResponsesListSecurityProfilesForTarget <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfilesForTarget"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfilesForTarget.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListSecurityProfilesForTarget(__scope: Construct, __resources: string[], __input: IotListSecurityProfilesForTargetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfilesForTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfilesForTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfilesForTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListSecurityProfilesForTargetRequest`](#aws-cdk-sdk.iot.IotListSecurityProfilesForTargetRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfilesForTarget.property.nextToken"></a>

- *Type:* `string`

---

##### `securityProfileTargetMappings`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListSecurityProfilesForTarget.property.securityProfileTargetMappings"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSecurityProfileTargetMapping`](#aws-cdk-sdk.iot.IotSecurityProfileTargetMapping)[]

---


### IotResponsesListStreams <a name="aws-cdk-sdk.iot.IotResponsesListStreams"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListStreams.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListStreams(__scope: Construct, __resources: string[], __input: IotListStreamsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListStreams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListStreams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListStreams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListStreamsRequest`](#aws-cdk-sdk.iot.IotListStreamsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListStreams.property.nextToken"></a>

- *Type:* `string`

---

##### `streams`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListStreams.property.streams"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStreamSummary`](#aws-cdk-sdk.iot.IotStreamSummary)[]

---


### IotResponsesListTagsForResource <a name="aws-cdk-sdk.iot.IotResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListTagsForResource.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: IotListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListTagsForResourceRequest`](#aws-cdk-sdk.iot.IotListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTag`](#aws-cdk-sdk.iot.IotTag)[]

---


### IotResponsesListTargetsForPolicy <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForPolicy.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListTargetsForPolicy(__scope: Construct, __resources: string[], __input: IotListTargetsForPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListTargetsForPolicyRequest`](#aws-cdk-sdk.iot.IotListTargetsForPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForPolicy.property.nextMarker"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForPolicy.property.targets"></a>

- *Type:* `string`[]

---


### IotResponsesListTargetsForSecurityProfile <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForSecurityProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForSecurityProfile.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListTargetsForSecurityProfile(__scope: Construct, __resources: string[], __input: IotListTargetsForSecurityProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForSecurityProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForSecurityProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForSecurityProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListTargetsForSecurityProfileRequest`](#aws-cdk-sdk.iot.IotListTargetsForSecurityProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForSecurityProfile.property.nextToken"></a>

- *Type:* `string`

---

##### `securityProfileTargets`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTargetsForSecurityProfile.property.securityProfileTargets"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSecurityProfileTarget`](#aws-cdk-sdk.iot.IotSecurityProfileTarget)[]

---


### IotResponsesListThingGroups <a name="aws-cdk-sdk.iot.IotResponsesListThingGroups"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListThingGroups.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListThingGroups(__scope: Construct, __resources: string[], __input: IotListThingGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingGroupsRequest`](#aws-cdk-sdk.iot.IotListThingGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `thingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingGroups.property.thingGroups"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGroupNameAndArn`](#aws-cdk-sdk.iot.IotGroupNameAndArn)[]

---


### IotResponsesListThingGroupsForThing <a name="aws-cdk-sdk.iot.IotResponsesListThingGroupsForThing"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListThingGroupsForThing.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListThingGroupsForThing(__scope: Construct, __resources: string[], __input: IotListThingGroupsForThingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingGroupsForThing.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingGroupsForThing.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingGroupsForThing.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingGroupsForThingRequest`](#aws-cdk-sdk.iot.IotListThingGroupsForThingRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingGroupsForThing.property.nextToken"></a>

- *Type:* `string`

---

##### `thingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingGroupsForThing.property.thingGroups"></a>

- *Type:* [`aws-cdk-sdk.iot.IotGroupNameAndArn`](#aws-cdk-sdk.iot.IotGroupNameAndArn)[]

---


### IotResponsesListThingPrincipals <a name="aws-cdk-sdk.iot.IotResponsesListThingPrincipals"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListThingPrincipals.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListThingPrincipals(__scope: Construct, __resources: string[], __input: IotListThingPrincipalsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingPrincipals.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingPrincipals.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingPrincipals.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingPrincipalsRequest`](#aws-cdk-sdk.iot.IotListThingPrincipalsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingPrincipals.property.nextToken"></a>

- *Type:* `string`

---

##### `principals`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingPrincipals.property.principals"></a>

- *Type:* `string`[]

---


### IotResponsesListThingRegistrationTaskReports <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTaskReports"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTaskReports.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListThingRegistrationTaskReports(__scope: Construct, __resources: string[], __input: IotListThingRegistrationTaskReportsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTaskReports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTaskReports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTaskReports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsRequest`](#aws-cdk-sdk.iot.IotListThingRegistrationTaskReportsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTaskReports.property.nextToken"></a>

- *Type:* `string`

---

##### `reportType`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTaskReports.property.reportType"></a>

- *Type:* `string`

---

##### `resourceLinks`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTaskReports.property.resourceLinks"></a>

- *Type:* `string`[]

---


### IotResponsesListThingRegistrationTasks <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTasks"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTasks.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListThingRegistrationTasks(__scope: Construct, __resources: string[], __input: IotListThingRegistrationTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingRegistrationTasksRequest`](#aws-cdk-sdk.iot.IotListThingRegistrationTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTasks.property.nextToken"></a>

- *Type:* `string`

---

##### `taskIds`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingRegistrationTasks.property.taskIds"></a>

- *Type:* `string`[]

---


### IotResponsesListThings <a name="aws-cdk-sdk.iot.IotResponsesListThings"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListThings.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListThings(__scope: Construct, __resources: string[], __input: IotListThingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingsRequest`](#aws-cdk-sdk.iot.IotListThingsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThings.property.nextToken"></a>

- *Type:* `string`

---

##### `things`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThings.property.things"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingAttribute`](#aws-cdk-sdk.iot.IotThingAttribute)[]

---


### IotResponsesListThingsInBillingGroup <a name="aws-cdk-sdk.iot.IotResponsesListThingsInBillingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListThingsInBillingGroup.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListThingsInBillingGroup(__scope: Construct, __resources: string[], __input: IotListThingsInBillingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingsInBillingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingsInBillingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingsInBillingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingsInBillingGroupRequest`](#aws-cdk-sdk.iot.IotListThingsInBillingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingsInBillingGroup.property.nextToken"></a>

- *Type:* `string`

---

##### `things`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingsInBillingGroup.property.things"></a>

- *Type:* `string`[]

---


### IotResponsesListThingsInThingGroup <a name="aws-cdk-sdk.iot.IotResponsesListThingsInThingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListThingsInThingGroup.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListThingsInThingGroup(__scope: Construct, __resources: string[], __input: IotListThingsInThingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingsInThingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingsInThingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingsInThingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingsInThingGroupRequest`](#aws-cdk-sdk.iot.IotListThingsInThingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingsInThingGroup.property.nextToken"></a>

- *Type:* `string`

---

##### `things`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingsInThingGroup.property.things"></a>

- *Type:* `string`[]

---


### IotResponsesListThingTypes <a name="aws-cdk-sdk.iot.IotResponsesListThingTypes"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListThingTypes.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListThingTypes(__scope: Construct, __resources: string[], __input: IotListThingTypesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListThingTypesRequest`](#aws-cdk-sdk.iot.IotListThingTypesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingTypes.property.nextToken"></a>

- *Type:* `string`

---

##### `thingTypes`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListThingTypes.property.thingTypes"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingTypeDefinition`](#aws-cdk-sdk.iot.IotThingTypeDefinition)[]

---


### IotResponsesListTopicRuleDestinations <a name="aws-cdk-sdk.iot.IotResponsesListTopicRuleDestinations"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListTopicRuleDestinations.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListTopicRuleDestinations(__scope: Construct, __resources: string[], __input: IotListTopicRuleDestinationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTopicRuleDestinations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTopicRuleDestinations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTopicRuleDestinations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListTopicRuleDestinationsRequest`](#aws-cdk-sdk.iot.IotListTopicRuleDestinationsRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTopicRuleDestinations.property.destinationSummaries"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTopicRuleDestinationSummary`](#aws-cdk-sdk.iot.IotTopicRuleDestinationSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTopicRuleDestinations.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListTopicRules <a name="aws-cdk-sdk.iot.IotResponsesListTopicRules"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListTopicRules.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListTopicRules(__scope: Construct, __resources: string[], __input: IotListTopicRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTopicRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTopicRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTopicRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListTopicRulesRequest`](#aws-cdk-sdk.iot.IotListTopicRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTopicRules.property.nextToken"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListTopicRules.property.rules"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTopicRuleListItem`](#aws-cdk-sdk.iot.IotTopicRuleListItem)[]

---


### IotResponsesListV2LoggingLevels <a name="aws-cdk-sdk.iot.IotResponsesListV2LoggingLevels"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListV2LoggingLevels.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListV2LoggingLevels(__scope: Construct, __resources: string[], __input: IotListV2LoggingLevelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListV2LoggingLevels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListV2LoggingLevels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListV2LoggingLevels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListV2LoggingLevelsRequest`](#aws-cdk-sdk.iot.IotListV2LoggingLevelsRequest)

---



#### Properties <a name="Properties"></a>

##### `logTargetConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListV2LoggingLevels.property.logTargetConfigurations"></a>

- *Type:* [`aws-cdk-sdk.iot.IotLogTargetConfiguration`](#aws-cdk-sdk.iot.IotLogTargetConfiguration)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListV2LoggingLevels.property.nextToken"></a>

- *Type:* `string`

---


### IotResponsesListViolationEvents <a name="aws-cdk-sdk.iot.IotResponsesListViolationEvents"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesListViolationEvents.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesListViolationEvents(__scope: Construct, __resources: string[], __input: IotListViolationEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListViolationEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListViolationEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListViolationEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotListViolationEventsRequest`](#aws-cdk-sdk.iot.IotListViolationEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListViolationEvents.property.nextToken"></a>

- *Type:* `string`

---

##### `violationEvents`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesListViolationEvents.property.violationEvents"></a>

- *Type:* [`aws-cdk-sdk.iot.IotViolationEvent`](#aws-cdk-sdk.iot.IotViolationEvent)[]

---


### IotResponsesPutDefaultAuthorizer <a name="aws-cdk-sdk.iot.IotResponsesPutDefaultAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesPutDefaultAuthorizer.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesPutDefaultAuthorizer(__scope: Construct, __resources: string[], __input: IotSetDefaultAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesPutDefaultAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesPutDefaultAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesPutDefaultAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSetDefaultAuthorizerRequest`](#aws-cdk-sdk.iot.IotSetDefaultAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesPutDefaultAuthorizer.property.authorizerArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesPutDefaultAuthorizer.property.authorizerName"></a>

- *Type:* `string`

---


### IotResponsesRegisterCaCertificate <a name="aws-cdk-sdk.iot.IotResponsesRegisterCaCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesRegisterCaCertificate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesRegisterCaCertificate(__scope: Construct, __resources: string[], __input: IotRegisterCaCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCaCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCaCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCaCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegisterCaCertificateRequest`](#aws-cdk-sdk.iot.IotRegisterCaCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCaCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCaCertificate.property.certificateId"></a>

- *Type:* `string`

---


### IotResponsesRegisterCertificate <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesRegisterCertificate(__scope: Construct, __resources: string[], __input: IotRegisterCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegisterCertificateRequest`](#aws-cdk-sdk.iot.IotRegisterCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificate.property.certificateId"></a>

- *Type:* `string`

---


### IotResponsesRegisterCertificateWithoutCa <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificateWithoutCa"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificateWithoutCa.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesRegisterCertificateWithoutCa(__scope: Construct, __resources: string[], __input: IotRegisterCertificateWithoutCaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificateWithoutCa.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificateWithoutCa.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificateWithoutCa.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegisterCertificateWithoutCaRequest`](#aws-cdk-sdk.iot.IotRegisterCertificateWithoutCaRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificateWithoutCa.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterCertificateWithoutCa.property.certificateId"></a>

- *Type:* `string`

---


### IotResponsesRegisterThing <a name="aws-cdk-sdk.iot.IotResponsesRegisterThing"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesRegisterThing.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesRegisterThing(__scope: Construct, __resources: string[], __input: IotRegisterThingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterThing.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterThing.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterThing.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotRegisterThingRequest`](#aws-cdk-sdk.iot.IotRegisterThingRequest)

---



#### Properties <a name="Properties"></a>

##### `certificatePem`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterThing.property.certificatePem"></a>

- *Type:* `string`

---

##### `resourceArns`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesRegisterThing.property.resourceArns"></a>

- *Type:* {[ key: string ]: `string`}

---


### IotResponsesSearchIndex <a name="aws-cdk-sdk.iot.IotResponsesSearchIndex"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesSearchIndex.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesSearchIndex(__scope: Construct, __resources: string[], __input: IotSearchIndexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesSearchIndex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesSearchIndex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesSearchIndex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotSearchIndexRequest`](#aws-cdk-sdk.iot.IotSearchIndexRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesSearchIndex.property.nextToken"></a>

- *Type:* `string`

---

##### `thingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesSearchIndex.property.thingGroups"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingGroupDocument`](#aws-cdk-sdk.iot.IotThingGroupDocument)[]

---

##### `things`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesSearchIndex.property.things"></a>

- *Type:* [`aws-cdk-sdk.iot.IotThingDocument`](#aws-cdk-sdk.iot.IotThingDocument)[]

---


### IotResponsesStartAuditMitigationActionsTask <a name="aws-cdk-sdk.iot.IotResponsesStartAuditMitigationActionsTask"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesStartAuditMitigationActionsTask.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesStartAuditMitigationActionsTask(__scope: Construct, __resources: string[], __input: IotStartAuditMitigationActionsTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartAuditMitigationActionsTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartAuditMitigationActionsTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartAuditMitigationActionsTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskRequest`](#aws-cdk-sdk.iot.IotStartAuditMitigationActionsTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartAuditMitigationActionsTask.property.taskId"></a>

- *Type:* `string`

---


### IotResponsesStartOnDemandAuditTask <a name="aws-cdk-sdk.iot.IotResponsesStartOnDemandAuditTask"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesStartOnDemandAuditTask.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesStartOnDemandAuditTask(__scope: Construct, __resources: string[], __input: IotStartOnDemandAuditTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartOnDemandAuditTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartOnDemandAuditTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartOnDemandAuditTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStartOnDemandAuditTaskRequest`](#aws-cdk-sdk.iot.IotStartOnDemandAuditTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartOnDemandAuditTask.property.taskId"></a>

- *Type:* `string`

---


### IotResponsesStartThingRegistrationTask <a name="aws-cdk-sdk.iot.IotResponsesStartThingRegistrationTask"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesStartThingRegistrationTask.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesStartThingRegistrationTask(__scope: Construct, __resources: string[], __input: IotStartThingRegistrationTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartThingRegistrationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartThingRegistrationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartThingRegistrationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotStartThingRegistrationTaskRequest`](#aws-cdk-sdk.iot.IotStartThingRegistrationTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesStartThingRegistrationTask.property.taskId"></a>

- *Type:* `string`

---


### IotResponsesTestAuthorization <a name="aws-cdk-sdk.iot.IotResponsesTestAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesTestAuthorization.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesTestAuthorization(__scope: Construct, __resources: string[], __input: IotTestAuthorizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTestAuthorizationRequest`](#aws-cdk-sdk.iot.IotTestAuthorizationRequest)

---



#### Properties <a name="Properties"></a>

##### `authResults`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestAuthorization.property.authResults"></a>

- *Type:* [`aws-cdk-sdk.iot.IotAuthResult`](#aws-cdk-sdk.iot.IotAuthResult)[]

---


### IotResponsesTestInvokeAuthorizer <a name="aws-cdk-sdk.iot.IotResponsesTestInvokeAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesTestInvokeAuthorizer.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesTestInvokeAuthorizer(__scope: Construct, __resources: string[], __input: IotTestInvokeAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestInvokeAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestInvokeAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestInvokeAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest`](#aws-cdk-sdk.iot.IotTestInvokeAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `disconnectAfterInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestInvokeAuthorizer.property.disconnectAfterInSeconds"></a>

- *Type:* `number`

---

##### `isAuthenticated`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestInvokeAuthorizer.property.isAuthenticated"></a>

- *Type:* `boolean`

---

##### `policyDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestInvokeAuthorizer.property.policyDocuments"></a>

- *Type:* `string`[]

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestInvokeAuthorizer.property.principalId"></a>

- *Type:* `string`

---

##### `refreshAfterInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTestInvokeAuthorizer.property.refreshAfterInSeconds"></a>

- *Type:* `number`

---


### IotResponsesTransferCertificate <a name="aws-cdk-sdk.iot.IotResponsesTransferCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesTransferCertificate.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesTransferCertificate(__scope: Construct, __resources: string[], __input: IotTransferCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTransferCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTransferCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTransferCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotTransferCertificateRequest`](#aws-cdk-sdk.iot.IotTransferCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `transferredCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesTransferCertificate.property.transferredCertificateArn"></a>

- *Type:* `string`

---


### IotResponsesUpdateAuthorizer <a name="aws-cdk-sdk.iot.IotResponsesUpdateAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateAuthorizer.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateAuthorizer(__scope: Construct, __resources: string[], __input: IotUpdateAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateAuthorizerRequest`](#aws-cdk-sdk.iot.IotUpdateAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateAuthorizer.property.authorizerArn"></a>

- *Type:* `string`

---

##### `authorizerName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateAuthorizer.property.authorizerName"></a>

- *Type:* `string`

---


### IotResponsesUpdateBillingGroup <a name="aws-cdk-sdk.iot.IotResponsesUpdateBillingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateBillingGroup.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateBillingGroup(__scope: Construct, __resources: string[], __input: IotUpdateBillingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateBillingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateBillingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateBillingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateBillingGroupRequest`](#aws-cdk-sdk.iot.IotUpdateBillingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateBillingGroup.property.version"></a>

- *Type:* `number`

---


### IotResponsesUpdateDimension <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateDimension(__scope: Construct, __resources: string[], __input: IotUpdateDimensionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateDimensionRequest`](#aws-cdk-sdk.iot.IotUpdateDimensionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension.property.arn"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension.property.name"></a>

- *Type:* `string`

---

##### `stringValues`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension.property.stringValues"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDimension.property.type"></a>

- *Type:* `string`

---


### IotResponsesUpdateDomainConfiguration <a name="aws-cdk-sdk.iot.IotResponsesUpdateDomainConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateDomainConfiguration.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateDomainConfiguration(__scope: Construct, __resources: string[], __input: IotUpdateDomainConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDomainConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDomainConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDomainConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateDomainConfigurationRequest`](#aws-cdk-sdk.iot.IotUpdateDomainConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `domainConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDomainConfiguration.property.domainConfigurationArn"></a>

- *Type:* `string`

---

##### `domainConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDomainConfiguration.property.domainConfigurationName"></a>

- *Type:* `string`

---


### IotResponsesUpdateDynamicThingGroup <a name="aws-cdk-sdk.iot.IotResponsesUpdateDynamicThingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateDynamicThingGroup.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateDynamicThingGroup(__scope: Construct, __resources: string[], __input: IotUpdateDynamicThingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDynamicThingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDynamicThingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDynamicThingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest`](#aws-cdk-sdk.iot.IotUpdateDynamicThingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateDynamicThingGroup.property.version"></a>

- *Type:* `number`

---


### IotResponsesUpdateMitigationAction <a name="aws-cdk-sdk.iot.IotResponsesUpdateMitigationAction"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateMitigationAction.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateMitigationAction(__scope: Construct, __resources: string[], __input: IotUpdateMitigationActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateMitigationAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateMitigationAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateMitigationAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateMitigationActionRequest`](#aws-cdk-sdk.iot.IotUpdateMitigationActionRequest)

---



#### Properties <a name="Properties"></a>

##### `actionArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateMitigationAction.property.actionArn"></a>

- *Type:* `string`

---

##### `actionId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateMitigationAction.property.actionId"></a>

- *Type:* `string`

---


### IotResponsesUpdateRoleAlias <a name="aws-cdk-sdk.iot.IotResponsesUpdateRoleAlias"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateRoleAlias.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateRoleAlias(__scope: Construct, __resources: string[], __input: IotUpdateRoleAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateRoleAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateRoleAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateRoleAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateRoleAliasRequest`](#aws-cdk-sdk.iot.IotUpdateRoleAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `roleAlias`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateRoleAlias.property.roleAlias"></a>

- *Type:* `string`

---

##### `roleAliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateRoleAlias.property.roleAliasArn"></a>

- *Type:* `string`

---


### IotResponsesUpdateScheduledAudit <a name="aws-cdk-sdk.iot.IotResponsesUpdateScheduledAudit"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateScheduledAudit.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateScheduledAudit(__scope: Construct, __resources: string[], __input: IotUpdateScheduledAuditRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateScheduledAudit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateScheduledAudit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateScheduledAudit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateScheduledAuditRequest`](#aws-cdk-sdk.iot.IotUpdateScheduledAuditRequest)

---



#### Properties <a name="Properties"></a>

##### `scheduledAuditArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateScheduledAudit.property.scheduledAuditArn"></a>

- *Type:* `string`

---


### IotResponsesUpdateSecurityProfile <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateSecurityProfile(__scope: Construct, __resources: string[], __input: IotUpdateSecurityProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest`](#aws-cdk-sdk.iot.IotUpdateSecurityProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalMetricsToRetain`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.property.additionalMetricsToRetain"></a>

- *Type:* `string`[]

---

##### `additionalMetricsToRetainV2`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.property.additionalMetricsToRetainV2"></a>

- *Type:* [`aws-cdk-sdk.iot.IotMetricToRetain`](#aws-cdk-sdk.iot.IotMetricToRetain)[]

---

##### `alertTargets`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.property.alertTargets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot.IotAlertTarget`](#aws-cdk-sdk.iot.IotAlertTarget)}

---

##### `behaviors`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.property.behaviors"></a>

- *Type:* [`aws-cdk-sdk.iot.IotBehavior`](#aws-cdk-sdk.iot.IotBehavior)[]

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `securityProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.property.securityProfileArn"></a>

- *Type:* `string`

---

##### `securityProfileDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.property.securityProfileDescription"></a>

- *Type:* `string`

---

##### `securityProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.property.securityProfileName"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateSecurityProfile.property.version"></a>

- *Type:* `number`

---


### IotResponsesUpdateStream <a name="aws-cdk-sdk.iot.IotResponsesUpdateStream"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateStream.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateStream(__scope: Construct, __resources: string[], __input: IotUpdateStreamRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateStreamRequest`](#aws-cdk-sdk.iot.IotUpdateStreamRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateStream.property.description"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateStream.property.streamArn"></a>

- *Type:* `string`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateStream.property.streamId"></a>

- *Type:* `string`

---

##### `streamVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateStream.property.streamVersion"></a>

- *Type:* `number`

---


### IotResponsesUpdateThingGroup <a name="aws-cdk-sdk.iot.IotResponsesUpdateThingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesUpdateThingGroup.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesUpdateThingGroup(__scope: Construct, __resources: string[], __input: IotUpdateThingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateThingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateThingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateThingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotUpdateThingGroupRequest`](#aws-cdk-sdk.iot.IotUpdateThingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesUpdateThingGroup.property.version"></a>

- *Type:* `number`

---


### IotResponsesValidateSecurityProfileBehaviors <a name="aws-cdk-sdk.iot.IotResponsesValidateSecurityProfileBehaviors"></a>

#### Initializer <a name="aws-cdk-sdk.iot.IotResponsesValidateSecurityProfileBehaviors.Initializer"></a>

```typescript
import { iot } from 'aws-cdk-sdk'

new iot.IotResponsesValidateSecurityProfileBehaviors(__scope: Construct, __resources: string[], __input: IotValidateSecurityProfileBehaviorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesValidateSecurityProfileBehaviors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesValidateSecurityProfileBehaviors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesValidateSecurityProfileBehaviors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot.IotValidateSecurityProfileBehaviorsRequest`](#aws-cdk-sdk.iot.IotValidateSecurityProfileBehaviorsRequest)

---



#### Properties <a name="Properties"></a>

##### `valid`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesValidateSecurityProfileBehaviors.property.valid"></a>

- *Type:* `boolean`

---

##### `validationErrors`<sup>Required</sup> <a name="aws-cdk-sdk.iot.IotResponsesValidateSecurityProfileBehaviors.property.validationErrors"></a>

- *Type:* [`aws-cdk-sdk.iot.IotValidationError`](#aws-cdk-sdk.iot.IotValidationError)[]

---



