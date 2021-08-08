# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Wafv2Client <a name="aws-cdk-sdk.wafv2.Wafv2Client"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.Wafv2Client.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.Wafv2Client(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateWebAcl` <a name="aws-cdk-sdk.wafv2.Wafv2Client.associateWebAcl"></a>

```typescript
public associateWebAcl(input: Wafv2AssociateWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2AssociateWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2AssociateWebAclRequest)

---

##### `checkCapacity` <a name="aws-cdk-sdk.wafv2.Wafv2Client.checkCapacity"></a>

```typescript
public checkCapacity(input: Wafv2CheckCapacityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CheckCapacityRequest`](#aws-cdk-sdk.wafv2.Wafv2CheckCapacityRequest)

---

##### `createIpSet` <a name="aws-cdk-sdk.wafv2.Wafv2Client.createIpSet"></a>

```typescript
public createIpSet(input: Wafv2CreateIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest)

---

##### `createRegexPatternSet` <a name="aws-cdk-sdk.wafv2.Wafv2Client.createRegexPatternSet"></a>

```typescript
public createRegexPatternSet(input: Wafv2CreateRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest)

---

##### `createRuleGroup` <a name="aws-cdk-sdk.wafv2.Wafv2Client.createRuleGroup"></a>

```typescript
public createRuleGroup(input: Wafv2CreateRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest)

---

##### `createWebAcl` <a name="aws-cdk-sdk.wafv2.Wafv2Client.createWebAcl"></a>

```typescript
public createWebAcl(input: Wafv2CreateWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest)

---

##### `deleteFirewallManagerRuleGroups` <a name="aws-cdk-sdk.wafv2.Wafv2Client.deleteFirewallManagerRuleGroups"></a>

```typescript
public deleteFirewallManagerRuleGroups(input: Wafv2DeleteFirewallManagerRuleGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DeleteFirewallManagerRuleGroupsRequest`](#aws-cdk-sdk.wafv2.Wafv2DeleteFirewallManagerRuleGroupsRequest)

---

##### `deleteIpSet` <a name="aws-cdk-sdk.wafv2.Wafv2Client.deleteIpSet"></a>

```typescript
public deleteIpSet(input: Wafv2DeleteIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DeleteIpSetRequest`](#aws-cdk-sdk.wafv2.Wafv2DeleteIpSetRequest)

---

##### `deleteLoggingConfiguration` <a name="aws-cdk-sdk.wafv2.Wafv2Client.deleteLoggingConfiguration"></a>

```typescript
public deleteLoggingConfiguration(input: Wafv2DeleteLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DeleteLoggingConfigurationRequest`](#aws-cdk-sdk.wafv2.Wafv2DeleteLoggingConfigurationRequest)

---

##### `deletePermissionPolicy` <a name="aws-cdk-sdk.wafv2.Wafv2Client.deletePermissionPolicy"></a>

```typescript
public deletePermissionPolicy(input: Wafv2DeletePermissionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DeletePermissionPolicyRequest`](#aws-cdk-sdk.wafv2.Wafv2DeletePermissionPolicyRequest)

---

##### `deleteRegexPatternSet` <a name="aws-cdk-sdk.wafv2.Wafv2Client.deleteRegexPatternSet"></a>

```typescript
public deleteRegexPatternSet(input: Wafv2DeleteRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DeleteRegexPatternSetRequest`](#aws-cdk-sdk.wafv2.Wafv2DeleteRegexPatternSetRequest)

---

##### `deleteRuleGroup` <a name="aws-cdk-sdk.wafv2.Wafv2Client.deleteRuleGroup"></a>

```typescript
public deleteRuleGroup(input: Wafv2DeleteRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DeleteRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2DeleteRuleGroupRequest)

---

##### `deleteWebAcl` <a name="aws-cdk-sdk.wafv2.Wafv2Client.deleteWebAcl"></a>

```typescript
public deleteWebAcl(input: Wafv2DeleteWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DeleteWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2DeleteWebAclRequest)

---

##### `describeManagedRuleGroup` <a name="aws-cdk-sdk.wafv2.Wafv2Client.describeManagedRuleGroup"></a>

```typescript
public describeManagedRuleGroup(input: Wafv2DescribeManagedRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupRequest)

---

##### `disassociateWebAcl` <a name="aws-cdk-sdk.wafv2.Wafv2Client.disassociateWebAcl"></a>

```typescript
public disassociateWebAcl(input: Wafv2DisassociateWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DisassociateWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2DisassociateWebAclRequest)

---

##### `fetchIpSet` <a name="aws-cdk-sdk.wafv2.Wafv2Client.fetchIpSet"></a>

```typescript
public fetchIpSet(input: Wafv2GetIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetIpSetRequest`](#aws-cdk-sdk.wafv2.Wafv2GetIpSetRequest)

---

##### `fetchLoggingConfiguration` <a name="aws-cdk-sdk.wafv2.Wafv2Client.fetchLoggingConfiguration"></a>

```typescript
public fetchLoggingConfiguration(input: Wafv2GetLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetLoggingConfigurationRequest`](#aws-cdk-sdk.wafv2.Wafv2GetLoggingConfigurationRequest)

---

##### `fetchPermissionPolicy` <a name="aws-cdk-sdk.wafv2.Wafv2Client.fetchPermissionPolicy"></a>

```typescript
public fetchPermissionPolicy(input: Wafv2GetPermissionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetPermissionPolicyRequest`](#aws-cdk-sdk.wafv2.Wafv2GetPermissionPolicyRequest)

---

##### `fetchRateBasedStatementManagedKeys` <a name="aws-cdk-sdk.wafv2.Wafv2Client.fetchRateBasedStatementManagedKeys"></a>

```typescript
public fetchRateBasedStatementManagedKeys(input: Wafv2GetRateBasedStatementManagedKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest)

---

##### `fetchRegexPatternSet` <a name="aws-cdk-sdk.wafv2.Wafv2Client.fetchRegexPatternSet"></a>

```typescript
public fetchRegexPatternSet(input: Wafv2GetRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetRequest)

---

##### `fetchRuleGroup` <a name="aws-cdk-sdk.wafv2.Wafv2Client.fetchRuleGroup"></a>

```typescript
public fetchRuleGroup(input: Wafv2GetRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest)

---

##### `fetchSampledRequests` <a name="aws-cdk-sdk.wafv2.Wafv2Client.fetchSampledRequests"></a>

```typescript
public fetchSampledRequests(input: Wafv2GetSampledRequestsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest`](#aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest)

---

##### `fetchWebAcl` <a name="aws-cdk-sdk.wafv2.Wafv2Client.fetchWebAcl"></a>

```typescript
public fetchWebAcl(input: Wafv2GetWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest)

---

##### `fetchWebAclForResource` <a name="aws-cdk-sdk.wafv2.Wafv2Client.fetchWebAclForResource"></a>

```typescript
public fetchWebAclForResource(input: Wafv2GetWebAclForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest`](#aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest)

---

##### `listAvailableManagedRuleGroups` <a name="aws-cdk-sdk.wafv2.Wafv2Client.listAvailableManagedRuleGroups"></a>

```typescript
public listAvailableManagedRuleGroups(input: Wafv2ListAvailableManagedRuleGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsRequest)

---

##### `listIpSets` <a name="aws-cdk-sdk.wafv2.Wafv2Client.listIpSets"></a>

```typescript
public listIpSets(input: Wafv2ListIpSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListIpSetsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListIpSetsRequest)

---

##### `listLoggingConfigurations` <a name="aws-cdk-sdk.wafv2.Wafv2Client.listLoggingConfigurations"></a>

```typescript
public listLoggingConfigurations(input: Wafv2ListLoggingConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsRequest)

---

##### `listRegexPatternSets` <a name="aws-cdk-sdk.wafv2.Wafv2Client.listRegexPatternSets"></a>

```typescript
public listRegexPatternSets(input: Wafv2ListRegexPatternSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsRequest)

---

##### `listResourcesForWebAcl` <a name="aws-cdk-sdk.wafv2.Wafv2Client.listResourcesForWebAcl"></a>

```typescript
public listResourcesForWebAcl(input: Wafv2ListResourcesForWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListResourcesForWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2ListResourcesForWebAclRequest)

---

##### `listRuleGroups` <a name="aws-cdk-sdk.wafv2.Wafv2Client.listRuleGroups"></a>

```typescript
public listRuleGroups(input: Wafv2ListRuleGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.wafv2.Wafv2Client.listTagsForResource"></a>

```typescript
public listTagsForResource(input: Wafv2ListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceRequest`](#aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceRequest)

---

##### `listWebAcLs` <a name="aws-cdk-sdk.wafv2.Wafv2Client.listWebAcLs"></a>

```typescript
public listWebAcLs(input: Wafv2ListWebAcLsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListWebAcLsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListWebAcLsRequest)

---

##### `putLoggingConfiguration` <a name="aws-cdk-sdk.wafv2.Wafv2Client.putLoggingConfiguration"></a>

```typescript
public putLoggingConfiguration(input: Wafv2PutLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2PutLoggingConfigurationRequest`](#aws-cdk-sdk.wafv2.Wafv2PutLoggingConfigurationRequest)

---

##### `putPermissionPolicy` <a name="aws-cdk-sdk.wafv2.Wafv2Client.putPermissionPolicy"></a>

```typescript
public putPermissionPolicy(input: Wafv2PutPermissionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2PutPermissionPolicyRequest`](#aws-cdk-sdk.wafv2.Wafv2PutPermissionPolicyRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.wafv2.Wafv2Client.tagResource"></a>

```typescript
public tagResource(input: Wafv2TagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2TagResourceRequest`](#aws-cdk-sdk.wafv2.Wafv2TagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.wafv2.Wafv2Client.untagResource"></a>

```typescript
public untagResource(input: Wafv2UntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2UntagResourceRequest`](#aws-cdk-sdk.wafv2.Wafv2UntagResourceRequest)

---

##### `updateIpSet` <a name="aws-cdk-sdk.wafv2.Wafv2Client.updateIpSet"></a>

```typescript
public updateIpSet(input: Wafv2UpdateIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest`](#aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest)

---

##### `updateRegexPatternSet` <a name="aws-cdk-sdk.wafv2.Wafv2Client.updateRegexPatternSet"></a>

```typescript
public updateRegexPatternSet(input: Wafv2UpdateRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest`](#aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest)

---

##### `updateRuleGroup` <a name="aws-cdk-sdk.wafv2.Wafv2Client.updateRuleGroup"></a>

```typescript
public updateRuleGroup(input: Wafv2UpdateRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest)

---

##### `updateWebAcl` <a name="aws-cdk-sdk.wafv2.Wafv2Client.updateWebAcl"></a>

```typescript
public updateWebAcl(input: Wafv2UpdateWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest)

---




## Structs <a name="Structs"></a>

### Wafv2AllowAction <a name="aws-cdk-sdk.wafv2.Wafv2AllowAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2AllowAction: wafv2.Wafv2AllowAction = { ... }
```

### Wafv2AllQueryArguments <a name="aws-cdk-sdk.wafv2.Wafv2AllQueryArguments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2AllQueryArguments: wafv2.Wafv2AllQueryArguments = { ... }
```

### Wafv2AndStatement <a name="aws-cdk-sdk.wafv2.Wafv2AndStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2AndStatement: wafv2.Wafv2AndStatement = { ... }
```

##### `statements`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2AndStatement.property.statements"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Statement`](#aws-cdk-sdk.wafv2.Wafv2Statement)[]

---

### Wafv2AssociateWebAclRequest <a name="aws-cdk-sdk.wafv2.Wafv2AssociateWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2AssociateWebAclRequest: wafv2.Wafv2AssociateWebAclRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2AssociateWebAclRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2AssociateWebAclRequest.property.webAclArn"></a>

- *Type:* `string`

---

### Wafv2AssociateWebAclResponse <a name="aws-cdk-sdk.wafv2.Wafv2AssociateWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2AssociateWebAclResponse: wafv2.Wafv2AssociateWebAclResponse = { ... }
```

### Wafv2BlockAction <a name="aws-cdk-sdk.wafv2.Wafv2BlockAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2BlockAction: wafv2.Wafv2BlockAction = { ... }
```

### Wafv2Body <a name="aws-cdk-sdk.wafv2.Wafv2Body"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2Body: wafv2.Wafv2Body = { ... }
```

### Wafv2ByteMatchStatement <a name="aws-cdk-sdk.wafv2.Wafv2ByteMatchStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ByteMatchStatement: wafv2.Wafv2ByteMatchStatement = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ByteMatchStatement.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FieldToMatch`](#aws-cdk-sdk.wafv2.Wafv2FieldToMatch)

---

##### `positionalConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ByteMatchStatement.property.positionalConstraint"></a>

- *Type:* `string`

---

##### `searchString`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ByteMatchStatement.property.searchString"></a>

- *Type:* `any`

---

##### `textTransformations`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ByteMatchStatement.property.textTransformations"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2TextTransformation`](#aws-cdk-sdk.wafv2.Wafv2TextTransformation)[]

---

### Wafv2CheckCapacityRequest <a name="aws-cdk-sdk.wafv2.Wafv2CheckCapacityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CheckCapacityRequest: wafv2.Wafv2CheckCapacityRequest = { ... }
```

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CheckCapacityRequest.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Rule`](#aws-cdk-sdk.wafv2.Wafv2Rule)[]

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CheckCapacityRequest.property.scope"></a>

- *Type:* `string`

---

### Wafv2CheckCapacityResponse <a name="aws-cdk-sdk.wafv2.Wafv2CheckCapacityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CheckCapacityResponse: wafv2.Wafv2CheckCapacityResponse = { ... }
```

##### `capacity`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CheckCapacityResponse.property.capacity"></a>

- *Type:* `number`

---

### Wafv2CountAction <a name="aws-cdk-sdk.wafv2.Wafv2CountAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CountAction: wafv2.Wafv2CountAction = { ... }
```

### Wafv2CreateIpSetRequest <a name="aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CreateIpSetRequest: wafv2.Wafv2CreateIpSetRequest = { ... }
```

##### `addresses`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest.property.addresses"></a>

- *Type:* `string`[]

---

##### `ipAddressVersion`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest.property.ipAddressVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest.property.scope"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Tag`](#aws-cdk-sdk.wafv2.Wafv2Tag)[]

---

### Wafv2CreateIpSetResponse <a name="aws-cdk-sdk.wafv2.Wafv2CreateIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CreateIpSetResponse: wafv2.Wafv2CreateIpSetResponse = { ... }
```

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateIpSetResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2IpSetSummary`](#aws-cdk-sdk.wafv2.Wafv2IpSetSummary)

---

### Wafv2CreateRegexPatternSetRequest <a name="aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CreateRegexPatternSetRequest: wafv2.Wafv2CreateRegexPatternSetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest.property.name"></a>

- *Type:* `string`

---

##### `regularExpressionList`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest.property.regularExpressionList"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Regex`](#aws-cdk-sdk.wafv2.Wafv2Regex)[]

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest.property.scope"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Tag`](#aws-cdk-sdk.wafv2.Wafv2Tag)[]

---

### Wafv2CreateRegexPatternSetResponse <a name="aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CreateRegexPatternSetResponse: wafv2.Wafv2CreateRegexPatternSetResponse = { ... }
```

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary`](#aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary)

---

### Wafv2CreateRuleGroupRequest <a name="aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CreateRuleGroupRequest: wafv2.Wafv2CreateRuleGroupRequest = { ... }
```

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest.property.capacity"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest.property.scope"></a>

- *Type:* `string`

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2VisibilityConfig`](#aws-cdk-sdk.wafv2.Wafv2VisibilityConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest.property.description"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Rule`](#aws-cdk-sdk.wafv2.Wafv2Rule)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Tag`](#aws-cdk-sdk.wafv2.Wafv2Tag)[]

---

### Wafv2CreateRuleGroupResponse <a name="aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CreateRuleGroupResponse: wafv2.Wafv2CreateRuleGroupResponse = { ... }
```

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary`](#aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary)

---

### Wafv2CreateWebAclRequest <a name="aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CreateWebAclRequest: wafv2.Wafv2CreateWebAclRequest = { ... }
```

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DefaultAction`](#aws-cdk-sdk.wafv2.Wafv2DefaultAction)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest.property.scope"></a>

- *Type:* `string`

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2VisibilityConfig`](#aws-cdk-sdk.wafv2.Wafv2VisibilityConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest.property.description"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Rule`](#aws-cdk-sdk.wafv2.Wafv2Rule)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Tag`](#aws-cdk-sdk.wafv2.Wafv2Tag)[]

---

### Wafv2CreateWebAclResponse <a name="aws-cdk-sdk.wafv2.Wafv2CreateWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2CreateWebAclResponse: wafv2.Wafv2CreateWebAclResponse = { ... }
```

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2CreateWebAclResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2WebAclSummary`](#aws-cdk-sdk.wafv2.Wafv2WebAclSummary)

---

### Wafv2DefaultAction <a name="aws-cdk-sdk.wafv2.Wafv2DefaultAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DefaultAction: wafv2.Wafv2DefaultAction = { ... }
```

##### `allow`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DefaultAction.property.allow"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2AllowAction`](#aws-cdk-sdk.wafv2.Wafv2AllowAction)

---

##### `block`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DefaultAction.property.block"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2BlockAction`](#aws-cdk-sdk.wafv2.Wafv2BlockAction)

---

### Wafv2DeleteFirewallManagerRuleGroupsRequest <a name="aws-cdk-sdk.wafv2.Wafv2DeleteFirewallManagerRuleGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteFirewallManagerRuleGroupsRequest: wafv2.Wafv2DeleteFirewallManagerRuleGroupsRequest = { ... }
```

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteFirewallManagerRuleGroupsRequest.property.webAclArn"></a>

- *Type:* `string`

---

##### `webAclLockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteFirewallManagerRuleGroupsRequest.property.webAclLockToken"></a>

- *Type:* `string`

---

### Wafv2DeleteFirewallManagerRuleGroupsResponse <a name="aws-cdk-sdk.wafv2.Wafv2DeleteFirewallManagerRuleGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteFirewallManagerRuleGroupsResponse: wafv2.Wafv2DeleteFirewallManagerRuleGroupsResponse = { ... }
```

##### `nextWebAclLockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteFirewallManagerRuleGroupsResponse.property.nextWebAclLockToken"></a>

- *Type:* `string`

---

### Wafv2DeleteIpSetRequest <a name="aws-cdk-sdk.wafv2.Wafv2DeleteIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteIpSetRequest: wafv2.Wafv2DeleteIpSetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteIpSetRequest.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteIpSetRequest.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteIpSetRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteIpSetRequest.property.scope"></a>

- *Type:* `string`

---

### Wafv2DeleteIpSetResponse <a name="aws-cdk-sdk.wafv2.Wafv2DeleteIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteIpSetResponse: wafv2.Wafv2DeleteIpSetResponse = { ... }
```

### Wafv2DeleteLoggingConfigurationRequest <a name="aws-cdk-sdk.wafv2.Wafv2DeleteLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteLoggingConfigurationRequest: wafv2.Wafv2DeleteLoggingConfigurationRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteLoggingConfigurationRequest.property.resourceArn"></a>

- *Type:* `string`

---

### Wafv2DeleteLoggingConfigurationResponse <a name="aws-cdk-sdk.wafv2.Wafv2DeleteLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteLoggingConfigurationResponse: wafv2.Wafv2DeleteLoggingConfigurationResponse = { ... }
```

### Wafv2DeletePermissionPolicyRequest <a name="aws-cdk-sdk.wafv2.Wafv2DeletePermissionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeletePermissionPolicyRequest: wafv2.Wafv2DeletePermissionPolicyRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeletePermissionPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### Wafv2DeletePermissionPolicyResponse <a name="aws-cdk-sdk.wafv2.Wafv2DeletePermissionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeletePermissionPolicyResponse: wafv2.Wafv2DeletePermissionPolicyResponse = { ... }
```

### Wafv2DeleteRegexPatternSetRequest <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteRegexPatternSetRequest: wafv2.Wafv2DeleteRegexPatternSetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRegexPatternSetRequest.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRegexPatternSetRequest.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRegexPatternSetRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRegexPatternSetRequest.property.scope"></a>

- *Type:* `string`

---

### Wafv2DeleteRegexPatternSetResponse <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteRegexPatternSetResponse: wafv2.Wafv2DeleteRegexPatternSetResponse = { ... }
```

### Wafv2DeleteRuleGroupRequest <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteRuleGroupRequest: wafv2.Wafv2DeleteRuleGroupRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRuleGroupRequest.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRuleGroupRequest.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRuleGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRuleGroupRequest.property.scope"></a>

- *Type:* `string`

---

### Wafv2DeleteRuleGroupResponse <a name="aws-cdk-sdk.wafv2.Wafv2DeleteRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteRuleGroupResponse: wafv2.Wafv2DeleteRuleGroupResponse = { ... }
```

### Wafv2DeleteWebAclRequest <a name="aws-cdk-sdk.wafv2.Wafv2DeleteWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteWebAclRequest: wafv2.Wafv2DeleteWebAclRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteWebAclRequest.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteWebAclRequest.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteWebAclRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DeleteWebAclRequest.property.scope"></a>

- *Type:* `string`

---

### Wafv2DeleteWebAclResponse <a name="aws-cdk-sdk.wafv2.Wafv2DeleteWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DeleteWebAclResponse: wafv2.Wafv2DeleteWebAclResponse = { ... }
```

### Wafv2DescribeManagedRuleGroupRequest <a name="aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DescribeManagedRuleGroupRequest: wafv2.Wafv2DescribeManagedRuleGroupRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupRequest.property.scope"></a>

- *Type:* `string`

---

##### `vendorName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupRequest.property.vendorName"></a>

- *Type:* `string`

---

### Wafv2DescribeManagedRuleGroupResponse <a name="aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DescribeManagedRuleGroupResponse: wafv2.Wafv2DescribeManagedRuleGroupResponse = { ... }
```

##### `capacity`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupResponse.property.capacity"></a>

- *Type:* `number`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupResponse.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RuleSummary`](#aws-cdk-sdk.wafv2.Wafv2RuleSummary)[]

---

### Wafv2DisassociateWebAclRequest <a name="aws-cdk-sdk.wafv2.Wafv2DisassociateWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DisassociateWebAclRequest: wafv2.Wafv2DisassociateWebAclRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2DisassociateWebAclRequest.property.resourceArn"></a>

- *Type:* `string`

---

### Wafv2DisassociateWebAclResponse <a name="aws-cdk-sdk.wafv2.Wafv2DisassociateWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2DisassociateWebAclResponse: wafv2.Wafv2DisassociateWebAclResponse = { ... }
```

### Wafv2ExcludedRule <a name="aws-cdk-sdk.wafv2.Wafv2ExcludedRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ExcludedRule: wafv2.Wafv2ExcludedRule = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ExcludedRule.property.name"></a>

- *Type:* `string`

---

### Wafv2FieldToMatch <a name="aws-cdk-sdk.wafv2.Wafv2FieldToMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2FieldToMatch: wafv2.Wafv2FieldToMatch = { ... }
```

##### `allQueryArguments`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FieldToMatch.property.allQueryArguments"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2AllQueryArguments`](#aws-cdk-sdk.wafv2.Wafv2AllQueryArguments)

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FieldToMatch.property.body"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Body`](#aws-cdk-sdk.wafv2.Wafv2Body)

---

##### `method`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FieldToMatch.property.method"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Method`](#aws-cdk-sdk.wafv2.Wafv2Method)

---

##### `queryString`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FieldToMatch.property.queryString"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2QueryString`](#aws-cdk-sdk.wafv2.Wafv2QueryString)

---

##### `singleHeader`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FieldToMatch.property.singleHeader"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2SingleHeader`](#aws-cdk-sdk.wafv2.Wafv2SingleHeader)

---

##### `singleQueryArgument`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FieldToMatch.property.singleQueryArgument"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2SingleQueryArgument`](#aws-cdk-sdk.wafv2.Wafv2SingleQueryArgument)

---

##### `uriPath`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FieldToMatch.property.uriPath"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2UriPath`](#aws-cdk-sdk.wafv2.Wafv2UriPath)

---

### Wafv2FirewallManagerRuleGroup <a name="aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2FirewallManagerRuleGroup: wafv2.Wafv2FirewallManagerRuleGroup = { ... }
```

##### `firewallManagerStatement`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup.property.firewallManagerStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FirewallManagerStatement`](#aws-cdk-sdk.wafv2.Wafv2FirewallManagerStatement)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup.property.name"></a>

- *Type:* `string`

---

##### `overrideAction`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup.property.overrideAction"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2OverrideAction`](#aws-cdk-sdk.wafv2.Wafv2OverrideAction)

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup.property.priority"></a>

- *Type:* `number`

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2VisibilityConfig`](#aws-cdk-sdk.wafv2.Wafv2VisibilityConfig)

---

### Wafv2FirewallManagerStatement <a name="aws-cdk-sdk.wafv2.Wafv2FirewallManagerStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2FirewallManagerStatement: wafv2.Wafv2FirewallManagerStatement = { ... }
```

##### `managedRuleGroupStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FirewallManagerStatement.property.managedRuleGroupStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupStatement`](#aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupStatement)

---

##### `ruleGroupReferenceStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2FirewallManagerStatement.property.ruleGroupReferenceStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RuleGroupReferenceStatement`](#aws-cdk-sdk.wafv2.Wafv2RuleGroupReferenceStatement)

---

### Wafv2ForwardedIpConfig <a name="aws-cdk-sdk.wafv2.Wafv2ForwardedIpConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ForwardedIpConfig: wafv2.Wafv2ForwardedIpConfig = { ... }
```

##### `fallbackBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ForwardedIpConfig.property.fallbackBehavior"></a>

- *Type:* `string`

---

##### `headerName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ForwardedIpConfig.property.headerName"></a>

- *Type:* `string`

---

### Wafv2GeoMatchStatement <a name="aws-cdk-sdk.wafv2.Wafv2GeoMatchStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GeoMatchStatement: wafv2.Wafv2GeoMatchStatement = { ... }
```

##### `countryCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GeoMatchStatement.property.countryCodes"></a>

- *Type:* `string`[]

---

##### `forwardedIpConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GeoMatchStatement.property.forwardedIpConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ForwardedIpConfig`](#aws-cdk-sdk.wafv2.Wafv2ForwardedIpConfig)

---

### Wafv2GetIpSetRequest <a name="aws-cdk-sdk.wafv2.Wafv2GetIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetIpSetRequest: wafv2.Wafv2GetIpSetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetIpSetRequest.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetIpSetRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetIpSetRequest.property.scope"></a>

- *Type:* `string`

---

### Wafv2GetIpSetResponse <a name="aws-cdk-sdk.wafv2.Wafv2GetIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetIpSetResponse: wafv2.Wafv2GetIpSetResponse = { ... }
```

##### `ipSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetIpSetResponse.property.ipSet"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2IpSet`](#aws-cdk-sdk.wafv2.Wafv2IpSet)

---

##### `lockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetIpSetResponse.property.lockToken"></a>

- *Type:* `string`

---

### Wafv2GetLoggingConfigurationRequest <a name="aws-cdk-sdk.wafv2.Wafv2GetLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetLoggingConfigurationRequest: wafv2.Wafv2GetLoggingConfigurationRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetLoggingConfigurationRequest.property.resourceArn"></a>

- *Type:* `string`

---

### Wafv2GetLoggingConfigurationResponse <a name="aws-cdk-sdk.wafv2.Wafv2GetLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetLoggingConfigurationResponse: wafv2.Wafv2GetLoggingConfigurationResponse = { ... }
```

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetLoggingConfigurationResponse.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration`](#aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration)

---

### Wafv2GetPermissionPolicyRequest <a name="aws-cdk-sdk.wafv2.Wafv2GetPermissionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetPermissionPolicyRequest: wafv2.Wafv2GetPermissionPolicyRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetPermissionPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### Wafv2GetPermissionPolicyResponse <a name="aws-cdk-sdk.wafv2.Wafv2GetPermissionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetPermissionPolicyResponse: wafv2.Wafv2GetPermissionPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetPermissionPolicyResponse.property.policy"></a>

- *Type:* `string`

---

### Wafv2GetRateBasedStatementManagedKeysRequest <a name="aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetRateBasedStatementManagedKeysRequest: wafv2.Wafv2GetRateBasedStatementManagedKeysRequest = { ... }
```

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest.property.ruleName"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest.property.scope"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest.property.webAclId"></a>

- *Type:* `string`

---

##### `webAclName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest.property.webAclName"></a>

- *Type:* `string`

---

### Wafv2GetRateBasedStatementManagedKeysResponse <a name="aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetRateBasedStatementManagedKeysResponse: wafv2.Wafv2GetRateBasedStatementManagedKeysResponse = { ... }
```

##### `managedKeysIpv4`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysResponse.property.managedKeysIpv4"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RateBasedStatementManagedKeysIpSet`](#aws-cdk-sdk.wafv2.Wafv2RateBasedStatementManagedKeysIpSet)

---

##### `managedKeysIpv6`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysResponse.property.managedKeysIpv6"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RateBasedStatementManagedKeysIpSet`](#aws-cdk-sdk.wafv2.Wafv2RateBasedStatementManagedKeysIpSet)

---

### Wafv2GetRegexPatternSetRequest <a name="aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetRegexPatternSetRequest: wafv2.Wafv2GetRegexPatternSetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetRequest.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetRequest.property.scope"></a>

- *Type:* `string`

---

### Wafv2GetRegexPatternSetResponse <a name="aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetRegexPatternSetResponse: wafv2.Wafv2GetRegexPatternSetResponse = { ... }
```

##### `lockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetResponse.property.lockToken"></a>

- *Type:* `string`

---

##### `regexPatternSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetResponse.property.regexPatternSet"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RegexPatternSet`](#aws-cdk-sdk.wafv2.Wafv2RegexPatternSet)

---

### Wafv2GetRuleGroupRequest <a name="aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetRuleGroupRequest: wafv2.Wafv2GetRuleGroupRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest.property.scope"></a>

- *Type:* `string`

---

### Wafv2GetRuleGroupResponse <a name="aws-cdk-sdk.wafv2.Wafv2GetRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetRuleGroupResponse: wafv2.Wafv2GetRuleGroupResponse = { ... }
```

##### `lockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRuleGroupResponse.property.lockToken"></a>

- *Type:* `string`

---

##### `ruleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetRuleGroupResponse.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RuleGroup`](#aws-cdk-sdk.wafv2.Wafv2RuleGroup)

---

### Wafv2GetSampledRequestsRequest <a name="aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetSampledRequestsRequest: wafv2.Wafv2GetSampledRequestsRequest = { ... }
```

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `ruleMetricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest.property.ruleMetricName"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest.property.scope"></a>

- *Type:* `string`

---

##### `timeWindow`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest.property.timeWindow"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2TimeWindow`](#aws-cdk-sdk.wafv2.Wafv2TimeWindow)

---

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest.property.webAclArn"></a>

- *Type:* `string`

---

### Wafv2GetSampledRequestsResponse <a name="aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetSampledRequestsResponse: wafv2.Wafv2GetSampledRequestsResponse = { ... }
```

##### `populationSize`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsResponse.property.populationSize"></a>

- *Type:* `number`

---

##### `sampledRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsResponse.property.sampledRequests"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2SampledHttpRequest`](#aws-cdk-sdk.wafv2.Wafv2SampledHttpRequest)[]

---

##### `timeWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsResponse.property.timeWindow"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2TimeWindow`](#aws-cdk-sdk.wafv2.Wafv2TimeWindow)

---

### Wafv2GetWebAclForResourceRequest <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetWebAclForResourceRequest: wafv2.Wafv2GetWebAclForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### Wafv2GetWebAclForResourceResponse <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetWebAclForResourceResponse: wafv2.Wafv2GetWebAclForResourceResponse = { ... }
```

##### `webAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceResponse.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2WebAcl`](#aws-cdk-sdk.wafv2.Wafv2WebAcl)

---

### Wafv2GetWebAclRequest <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetWebAclRequest: wafv2.Wafv2GetWebAclRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest.property.scope"></a>

- *Type:* `string`

---

### Wafv2GetWebAclResponse <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2GetWebAclResponse: wafv2.Wafv2GetWebAclResponse = { ... }
```

##### `lockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclResponse.property.lockToken"></a>

- *Type:* `string`

---

##### `webAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2GetWebAclResponse.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2WebAcl`](#aws-cdk-sdk.wafv2.Wafv2WebAcl)

---

### Wafv2HttpHeader <a name="aws-cdk-sdk.wafv2.Wafv2HttpHeader"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2HttpHeader: wafv2.Wafv2HttpHeader = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2HttpHeader.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2HttpHeader.property.value"></a>

- *Type:* `string`

---

### Wafv2HttpRequest <a name="aws-cdk-sdk.wafv2.Wafv2HttpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2HttpRequest: wafv2.Wafv2HttpRequest = { ... }
```

##### `clientIp`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2HttpRequest.property.clientIp"></a>

- *Type:* `string`

---

##### `country`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2HttpRequest.property.country"></a>

- *Type:* `string`

---

##### `headers`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2HttpRequest.property.headers"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2HttpHeader`](#aws-cdk-sdk.wafv2.Wafv2HttpHeader)[]

---

##### `httpVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2HttpRequest.property.httpVersion"></a>

- *Type:* `string`

---

##### `method`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2HttpRequest.property.method"></a>

- *Type:* `string`

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2HttpRequest.property.uri"></a>

- *Type:* `string`

---

### Wafv2IpSet <a name="aws-cdk-sdk.wafv2.Wafv2IpSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2IpSet: wafv2.Wafv2IpSet = { ... }
```

##### `addresses`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSet.property.addresses"></a>

- *Type:* `string`[]

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSet.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSet.property.id"></a>

- *Type:* `string`

---

##### `ipAddressVersion`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSet.property.ipAddressVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSet.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSet.property.description"></a>

- *Type:* `string`

---

### Wafv2IpSetForwardedIpConfig <a name="aws-cdk-sdk.wafv2.Wafv2IpSetForwardedIpConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2IpSetForwardedIpConfig: wafv2.Wafv2IpSetForwardedIpConfig = { ... }
```

##### `fallbackBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSetForwardedIpConfig.property.fallbackBehavior"></a>

- *Type:* `string`

---

##### `headerName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSetForwardedIpConfig.property.headerName"></a>

- *Type:* `string`

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSetForwardedIpConfig.property.position"></a>

- *Type:* `string`

---

### Wafv2IpSetReferenceStatement <a name="aws-cdk-sdk.wafv2.Wafv2IpSetReferenceStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2IpSetReferenceStatement: wafv2.Wafv2IpSetReferenceStatement = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSetReferenceStatement.property.arn"></a>

- *Type:* `string`

---

##### `ipSetForwardedIpConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSetReferenceStatement.property.ipSetForwardedIpConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2IpSetForwardedIpConfig`](#aws-cdk-sdk.wafv2.Wafv2IpSetForwardedIpConfig)

---

### Wafv2IpSetSummary <a name="aws-cdk-sdk.wafv2.Wafv2IpSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2IpSetSummary: wafv2.Wafv2IpSetSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSetSummary.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSetSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSetSummary.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSetSummary.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2IpSetSummary.property.name"></a>

- *Type:* `string`

---

### Wafv2ListAvailableManagedRuleGroupsRequest <a name="aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListAvailableManagedRuleGroupsRequest: wafv2.Wafv2ListAvailableManagedRuleGroupsRequest = { ... }
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsRequest.property.scope"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### Wafv2ListAvailableManagedRuleGroupsResponse <a name="aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListAvailableManagedRuleGroupsResponse: wafv2.Wafv2ListAvailableManagedRuleGroupsResponse = { ... }
```

##### `managedRuleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsResponse.property.managedRuleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupSummary`](#aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupSummary)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### Wafv2ListIpSetsRequest <a name="aws-cdk-sdk.wafv2.Wafv2ListIpSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListIpSetsRequest: wafv2.Wafv2ListIpSetsRequest = { ... }
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListIpSetsRequest.property.scope"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListIpSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListIpSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### Wafv2ListIpSetsResponse <a name="aws-cdk-sdk.wafv2.Wafv2ListIpSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListIpSetsResponse: wafv2.Wafv2ListIpSetsResponse = { ... }
```

##### `ipSets`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListIpSetsResponse.property.ipSets"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2IpSetSummary`](#aws-cdk-sdk.wafv2.Wafv2IpSetSummary)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListIpSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### Wafv2ListLoggingConfigurationsRequest <a name="aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListLoggingConfigurationsRequest: wafv2.Wafv2ListLoggingConfigurationsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsRequest.property.nextMarker"></a>

- *Type:* `string`

---

##### `scope`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsRequest.property.scope"></a>

- *Type:* `string`

---

### Wafv2ListLoggingConfigurationsResponse <a name="aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListLoggingConfigurationsResponse: wafv2.Wafv2ListLoggingConfigurationsResponse = { ... }
```

##### `loggingConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsResponse.property.loggingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration`](#aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### Wafv2ListRegexPatternSetsRequest <a name="aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListRegexPatternSetsRequest: wafv2.Wafv2ListRegexPatternSetsRequest = { ... }
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsRequest.property.scope"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### Wafv2ListRegexPatternSetsResponse <a name="aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListRegexPatternSetsResponse: wafv2.Wafv2ListRegexPatternSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `regexPatternSets`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsResponse.property.regexPatternSets"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary`](#aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary)[]

---

### Wafv2ListResourcesForWebAclRequest <a name="aws-cdk-sdk.wafv2.Wafv2ListResourcesForWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListResourcesForWebAclRequest: wafv2.Wafv2ListResourcesForWebAclRequest = { ... }
```

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListResourcesForWebAclRequest.property.webAclArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListResourcesForWebAclRequest.property.resourceType"></a>

- *Type:* `string`

---

### Wafv2ListResourcesForWebAclResponse <a name="aws-cdk-sdk.wafv2.Wafv2ListResourcesForWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListResourcesForWebAclResponse: wafv2.Wafv2ListResourcesForWebAclResponse = { ... }
```

##### `resourceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListResourcesForWebAclResponse.property.resourceArns"></a>

- *Type:* `string`[]

---

### Wafv2ListRuleGroupsRequest <a name="aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListRuleGroupsRequest: wafv2.Wafv2ListRuleGroupsRequest = { ... }
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsRequest.property.scope"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### Wafv2ListRuleGroupsResponse <a name="aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListRuleGroupsResponse: wafv2.Wafv2ListRuleGroupsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsResponse.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary`](#aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary)[]

---

### Wafv2ListTagsForResourceRequest <a name="aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListTagsForResourceRequest: wafv2.Wafv2ListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceRequest.property.nextMarker"></a>

- *Type:* `string`

---

### Wafv2ListTagsForResourceResponse <a name="aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListTagsForResourceResponse: wafv2.Wafv2ListTagsForResourceResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `tagInfoForResource`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceResponse.property.tagInfoForResource"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2TagInfoForResource`](#aws-cdk-sdk.wafv2.Wafv2TagInfoForResource)

---

### Wafv2ListWebAcLsRequest <a name="aws-cdk-sdk.wafv2.Wafv2ListWebAcLsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListWebAcLsRequest: wafv2.Wafv2ListWebAcLsRequest = { ... }
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListWebAcLsRequest.property.scope"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListWebAcLsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListWebAcLsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### Wafv2ListWebAcLsResponse <a name="aws-cdk-sdk.wafv2.Wafv2ListWebAcLsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ListWebAcLsResponse: wafv2.Wafv2ListWebAcLsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListWebAcLsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `webAcLs`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ListWebAcLsResponse.property.webAcLs"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2WebAclSummary`](#aws-cdk-sdk.wafv2.Wafv2WebAclSummary)[]

---

### Wafv2LoggingConfiguration <a name="aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2LoggingConfiguration: wafv2.Wafv2LoggingConfiguration = { ... }
```

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* `string`[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration.property.resourceArn"></a>

- *Type:* `string`

---

##### `managedByFirewallManager`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration.property.managedByFirewallManager"></a>

- *Type:* `boolean`

---

##### `redactedFields`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration.property.redactedFields"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FieldToMatch`](#aws-cdk-sdk.wafv2.Wafv2FieldToMatch)[]

---

### Wafv2ManagedRuleGroupStatement <a name="aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ManagedRuleGroupStatement: wafv2.Wafv2ManagedRuleGroupStatement = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupStatement.property.name"></a>

- *Type:* `string`

---

##### `vendorName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupStatement.property.vendorName"></a>

- *Type:* `string`

---

##### `excludedRules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupStatement.property.excludedRules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ExcludedRule`](#aws-cdk-sdk.wafv2.Wafv2ExcludedRule)[]

---

### Wafv2ManagedRuleGroupSummary <a name="aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2ManagedRuleGroupSummary: wafv2.Wafv2ManagedRuleGroupSummary = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupSummary.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupSummary.property.name"></a>

- *Type:* `string`

---

##### `vendorName`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupSummary.property.vendorName"></a>

- *Type:* `string`

---

### Wafv2Method <a name="aws-cdk-sdk.wafv2.Wafv2Method"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2Method: wafv2.Wafv2Method = { ... }
```

### Wafv2NoneAction <a name="aws-cdk-sdk.wafv2.Wafv2NoneAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2NoneAction: wafv2.Wafv2NoneAction = { ... }
```

### Wafv2NotStatement <a name="aws-cdk-sdk.wafv2.Wafv2NotStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2NotStatement: wafv2.Wafv2NotStatement = { ... }
```

##### `statement`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2NotStatement.property.statement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Statement`](#aws-cdk-sdk.wafv2.Wafv2Statement)

---

### Wafv2OrStatement <a name="aws-cdk-sdk.wafv2.Wafv2OrStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2OrStatement: wafv2.Wafv2OrStatement = { ... }
```

##### `statements`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2OrStatement.property.statements"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Statement`](#aws-cdk-sdk.wafv2.Wafv2Statement)[]

---

### Wafv2OverrideAction <a name="aws-cdk-sdk.wafv2.Wafv2OverrideAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2OverrideAction: wafv2.Wafv2OverrideAction = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2OverrideAction.property.count"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CountAction`](#aws-cdk-sdk.wafv2.Wafv2CountAction)

---

##### `none`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2OverrideAction.property.none"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2NoneAction`](#aws-cdk-sdk.wafv2.Wafv2NoneAction)

---

### Wafv2PutLoggingConfigurationRequest <a name="aws-cdk-sdk.wafv2.Wafv2PutLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2PutLoggingConfigurationRequest: wafv2.Wafv2PutLoggingConfigurationRequest = { ... }
```

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2PutLoggingConfigurationRequest.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration`](#aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration)

---

### Wafv2PutLoggingConfigurationResponse <a name="aws-cdk-sdk.wafv2.Wafv2PutLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2PutLoggingConfigurationResponse: wafv2.Wafv2PutLoggingConfigurationResponse = { ... }
```

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2PutLoggingConfigurationResponse.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration`](#aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration)

---

### Wafv2PutPermissionPolicyRequest <a name="aws-cdk-sdk.wafv2.Wafv2PutPermissionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2PutPermissionPolicyRequest: wafv2.Wafv2PutPermissionPolicyRequest = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2PutPermissionPolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2PutPermissionPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### Wafv2PutPermissionPolicyResponse <a name="aws-cdk-sdk.wafv2.Wafv2PutPermissionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2PutPermissionPolicyResponse: wafv2.Wafv2PutPermissionPolicyResponse = { ... }
```

### Wafv2QueryString <a name="aws-cdk-sdk.wafv2.Wafv2QueryString"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2QueryString: wafv2.Wafv2QueryString = { ... }
```

### Wafv2RateBasedStatement <a name="aws-cdk-sdk.wafv2.Wafv2RateBasedStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2RateBasedStatement: wafv2.Wafv2RateBasedStatement = { ... }
```

##### `aggregateKeyType`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RateBasedStatement.property.aggregateKeyType"></a>

- *Type:* `string`

---

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RateBasedStatement.property.limit"></a>

- *Type:* `number`

---

##### `forwardedIpConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RateBasedStatement.property.forwardedIpConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ForwardedIpConfig`](#aws-cdk-sdk.wafv2.Wafv2ForwardedIpConfig)

---

##### `scopeDownStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RateBasedStatement.property.scopeDownStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Statement`](#aws-cdk-sdk.wafv2.Wafv2Statement)

---

### Wafv2RateBasedStatementManagedKeysIpSet <a name="aws-cdk-sdk.wafv2.Wafv2RateBasedStatementManagedKeysIpSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2RateBasedStatementManagedKeysIpSet: wafv2.Wafv2RateBasedStatementManagedKeysIpSet = { ... }
```

##### `addresses`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RateBasedStatementManagedKeysIpSet.property.addresses"></a>

- *Type:* `string`[]

---

##### `ipAddressVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RateBasedStatementManagedKeysIpSet.property.ipAddressVersion"></a>

- *Type:* `string`

---

### Wafv2Regex <a name="aws-cdk-sdk.wafv2.Wafv2Regex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2Regex: wafv2.Wafv2Regex = { ... }
```

##### `regexString`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Regex.property.regexString"></a>

- *Type:* `string`

---

### Wafv2RegexPatternSet <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2RegexPatternSet: wafv2.Wafv2RegexPatternSet = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSet.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSet.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSet.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSet.property.name"></a>

- *Type:* `string`

---

##### `regularExpressionList`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSet.property.regularExpressionList"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Regex`](#aws-cdk-sdk.wafv2.Wafv2Regex)[]

---

### Wafv2RegexPatternSetReferenceStatement <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSetReferenceStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2RegexPatternSetReferenceStatement: wafv2.Wafv2RegexPatternSetReferenceStatement = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSetReferenceStatement.property.arn"></a>

- *Type:* `string`

---

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSetReferenceStatement.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FieldToMatch`](#aws-cdk-sdk.wafv2.Wafv2FieldToMatch)

---

##### `textTransformations`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSetReferenceStatement.property.textTransformations"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2TextTransformation`](#aws-cdk-sdk.wafv2.Wafv2TextTransformation)[]

---

### Wafv2RegexPatternSetSummary <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2RegexPatternSetSummary: wafv2.Wafv2RegexPatternSetSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary.property.name"></a>

- *Type:* `string`

---

### Wafv2Rule <a name="aws-cdk-sdk.wafv2.Wafv2Rule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2Rule: wafv2.Wafv2Rule = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Rule.property.name"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Rule.property.priority"></a>

- *Type:* `number`

---

##### `statement`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Rule.property.statement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Statement`](#aws-cdk-sdk.wafv2.Wafv2Statement)

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Rule.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2VisibilityConfig`](#aws-cdk-sdk.wafv2.Wafv2VisibilityConfig)

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Rule.property.action"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RuleAction`](#aws-cdk-sdk.wafv2.Wafv2RuleAction)

---

##### `overrideAction`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Rule.property.overrideAction"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2OverrideAction`](#aws-cdk-sdk.wafv2.Wafv2OverrideAction)

---

### Wafv2RuleAction <a name="aws-cdk-sdk.wafv2.Wafv2RuleAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2RuleAction: wafv2.Wafv2RuleAction = { ... }
```

##### `allow`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleAction.property.allow"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2AllowAction`](#aws-cdk-sdk.wafv2.Wafv2AllowAction)

---

##### `block`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleAction.property.block"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2BlockAction`](#aws-cdk-sdk.wafv2.Wafv2BlockAction)

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleAction.property.count"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CountAction`](#aws-cdk-sdk.wafv2.Wafv2CountAction)

---

### Wafv2RuleGroup <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2RuleGroup: wafv2.Wafv2RuleGroup = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroup.property.arn"></a>

- *Type:* `string`

---

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroup.property.capacity"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroup.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroup.property.name"></a>

- *Type:* `string`

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroup.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2VisibilityConfig`](#aws-cdk-sdk.wafv2.Wafv2VisibilityConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroup.property.description"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroup.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Rule`](#aws-cdk-sdk.wafv2.Wafv2Rule)[]

---

### Wafv2RuleGroupReferenceStatement <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroupReferenceStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2RuleGroupReferenceStatement: wafv2.Wafv2RuleGroupReferenceStatement = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroupReferenceStatement.property.arn"></a>

- *Type:* `string`

---

##### `excludedRules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroupReferenceStatement.property.excludedRules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ExcludedRule`](#aws-cdk-sdk.wafv2.Wafv2ExcludedRule)[]

---

### Wafv2RuleGroupSummary <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2RuleGroupSummary: wafv2.Wafv2RuleGroupSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary.property.name"></a>

- *Type:* `string`

---

### Wafv2RuleSummary <a name="aws-cdk-sdk.wafv2.Wafv2RuleSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2RuleSummary: wafv2.Wafv2RuleSummary = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleSummary.property.action"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RuleAction`](#aws-cdk-sdk.wafv2.Wafv2RuleAction)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2RuleSummary.property.name"></a>

- *Type:* `string`

---

### Wafv2SampledHttpRequest <a name="aws-cdk-sdk.wafv2.Wafv2SampledHttpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2SampledHttpRequest: wafv2.Wafv2SampledHttpRequest = { ... }
```

##### `request`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SampledHttpRequest.property.request"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2HttpRequest`](#aws-cdk-sdk.wafv2.Wafv2HttpRequest)

---

##### `weight`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SampledHttpRequest.property.weight"></a>

- *Type:* `number`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SampledHttpRequest.property.action"></a>

- *Type:* `string`

---

##### `ruleNameWithinRuleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SampledHttpRequest.property.ruleNameWithinRuleGroup"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SampledHttpRequest.property.timestamp"></a>

- *Type:* `string`

---

### Wafv2SingleHeader <a name="aws-cdk-sdk.wafv2.Wafv2SingleHeader"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2SingleHeader: wafv2.Wafv2SingleHeader = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SingleHeader.property.name"></a>

- *Type:* `string`

---

### Wafv2SingleQueryArgument <a name="aws-cdk-sdk.wafv2.Wafv2SingleQueryArgument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2SingleQueryArgument: wafv2.Wafv2SingleQueryArgument = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SingleQueryArgument.property.name"></a>

- *Type:* `string`

---

### Wafv2SizeConstraintStatement <a name="aws-cdk-sdk.wafv2.Wafv2SizeConstraintStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2SizeConstraintStatement: wafv2.Wafv2SizeConstraintStatement = { ... }
```

##### `comparisonOperator`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SizeConstraintStatement.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SizeConstraintStatement.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FieldToMatch`](#aws-cdk-sdk.wafv2.Wafv2FieldToMatch)

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SizeConstraintStatement.property.size"></a>

- *Type:* `number`

---

##### `textTransformations`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SizeConstraintStatement.property.textTransformations"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2TextTransformation`](#aws-cdk-sdk.wafv2.Wafv2TextTransformation)[]

---

### Wafv2SqliMatchStatement <a name="aws-cdk-sdk.wafv2.Wafv2SqliMatchStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2SqliMatchStatement: wafv2.Wafv2SqliMatchStatement = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SqliMatchStatement.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FieldToMatch`](#aws-cdk-sdk.wafv2.Wafv2FieldToMatch)

---

##### `textTransformations`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2SqliMatchStatement.property.textTransformations"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2TextTransformation`](#aws-cdk-sdk.wafv2.Wafv2TextTransformation)[]

---

### Wafv2Statement <a name="aws-cdk-sdk.wafv2.Wafv2Statement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2Statement: wafv2.Wafv2Statement = { ... }
```

##### `andStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.andStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2AndStatement`](#aws-cdk-sdk.wafv2.Wafv2AndStatement)

---

##### `byteMatchStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.byteMatchStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ByteMatchStatement`](#aws-cdk-sdk.wafv2.Wafv2ByteMatchStatement)

---

##### `geoMatchStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.geoMatchStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GeoMatchStatement`](#aws-cdk-sdk.wafv2.Wafv2GeoMatchStatement)

---

##### `ipSetReferenceStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.ipSetReferenceStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2IpSetReferenceStatement`](#aws-cdk-sdk.wafv2.Wafv2IpSetReferenceStatement)

---

##### `managedRuleGroupStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.managedRuleGroupStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupStatement`](#aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupStatement)

---

##### `notStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.notStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2NotStatement`](#aws-cdk-sdk.wafv2.Wafv2NotStatement)

---

##### `orStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.orStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2OrStatement`](#aws-cdk-sdk.wafv2.Wafv2OrStatement)

---

##### `rateBasedStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.rateBasedStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RateBasedStatement`](#aws-cdk-sdk.wafv2.Wafv2RateBasedStatement)

---

##### `regexPatternSetReferenceStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.regexPatternSetReferenceStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RegexPatternSetReferenceStatement`](#aws-cdk-sdk.wafv2.Wafv2RegexPatternSetReferenceStatement)

---

##### `ruleGroupReferenceStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.ruleGroupReferenceStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RuleGroupReferenceStatement`](#aws-cdk-sdk.wafv2.Wafv2RuleGroupReferenceStatement)

---

##### `sizeConstraintStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.sizeConstraintStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2SizeConstraintStatement`](#aws-cdk-sdk.wafv2.Wafv2SizeConstraintStatement)

---

##### `sqliMatchStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.sqliMatchStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2SqliMatchStatement`](#aws-cdk-sdk.wafv2.Wafv2SqliMatchStatement)

---

##### `xssMatchStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Statement.property.xssMatchStatement"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2XssMatchStatement`](#aws-cdk-sdk.wafv2.Wafv2XssMatchStatement)

---

### Wafv2Tag <a name="aws-cdk-sdk.wafv2.Wafv2Tag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2Tag: wafv2.Wafv2Tag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Tag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2Tag.property.value"></a>

- *Type:* `string`

---

### Wafv2TagInfoForResource <a name="aws-cdk-sdk.wafv2.Wafv2TagInfoForResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2TagInfoForResource: wafv2.Wafv2TagInfoForResource = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2TagInfoForResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2TagInfoForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Tag`](#aws-cdk-sdk.wafv2.Wafv2Tag)[]

---

### Wafv2TagResourceRequest <a name="aws-cdk-sdk.wafv2.Wafv2TagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2TagResourceRequest: wafv2.Wafv2TagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2TagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2TagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Tag`](#aws-cdk-sdk.wafv2.Wafv2Tag)[]

---

### Wafv2TagResourceResponse <a name="aws-cdk-sdk.wafv2.Wafv2TagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2TagResourceResponse: wafv2.Wafv2TagResourceResponse = { ... }
```

### Wafv2TextTransformation <a name="aws-cdk-sdk.wafv2.Wafv2TextTransformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2TextTransformation: wafv2.Wafv2TextTransformation = { ... }
```

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2TextTransformation.property.priority"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2TextTransformation.property.type"></a>

- *Type:* `string`

---

### Wafv2TimeWindow <a name="aws-cdk-sdk.wafv2.Wafv2TimeWindow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2TimeWindow: wafv2.Wafv2TimeWindow = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2TimeWindow.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2TimeWindow.property.startTime"></a>

- *Type:* `string`

---

### Wafv2UntagResourceRequest <a name="aws-cdk-sdk.wafv2.Wafv2UntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UntagResourceRequest: wafv2.Wafv2UntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### Wafv2UntagResourceResponse <a name="aws-cdk-sdk.wafv2.Wafv2UntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UntagResourceResponse: wafv2.Wafv2UntagResourceResponse = { ... }
```

### Wafv2UpdateIpSetRequest <a name="aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UpdateIpSetRequest: wafv2.Wafv2UpdateIpSetRequest = { ... }
```

##### `addresses`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest.property.addresses"></a>

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest.property.scope"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest.property.description"></a>

- *Type:* `string`

---

### Wafv2UpdateIpSetResponse <a name="aws-cdk-sdk.wafv2.Wafv2UpdateIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UpdateIpSetResponse: wafv2.Wafv2UpdateIpSetResponse = { ... }
```

##### `nextLockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateIpSetResponse.property.nextLockToken"></a>

- *Type:* `string`

---

### Wafv2UpdateRegexPatternSetRequest <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UpdateRegexPatternSetRequest: wafv2.Wafv2UpdateRegexPatternSetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest.property.name"></a>

- *Type:* `string`

---

##### `regularExpressionList`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest.property.regularExpressionList"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Regex`](#aws-cdk-sdk.wafv2.Wafv2Regex)[]

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest.property.scope"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest.property.description"></a>

- *Type:* `string`

---

### Wafv2UpdateRegexPatternSetResponse <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UpdateRegexPatternSetResponse: wafv2.Wafv2UpdateRegexPatternSetResponse = { ... }
```

##### `nextLockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetResponse.property.nextLockToken"></a>

- *Type:* `string`

---

### Wafv2UpdateRuleGroupRequest <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UpdateRuleGroupRequest: wafv2.Wafv2UpdateRuleGroupRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest.property.scope"></a>

- *Type:* `string`

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2VisibilityConfig`](#aws-cdk-sdk.wafv2.Wafv2VisibilityConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest.property.description"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Rule`](#aws-cdk-sdk.wafv2.Wafv2Rule)[]

---

### Wafv2UpdateRuleGroupResponse <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UpdateRuleGroupResponse: wafv2.Wafv2UpdateRuleGroupResponse = { ... }
```

##### `nextLockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupResponse.property.nextLockToken"></a>

- *Type:* `string`

---

### Wafv2UpdateWebAclRequest <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UpdateWebAclRequest: wafv2.Wafv2UpdateWebAclRequest = { ... }
```

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DefaultAction`](#aws-cdk-sdk.wafv2.Wafv2DefaultAction)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest.property.name"></a>

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest.property.scope"></a>

- *Type:* `string`

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2VisibilityConfig`](#aws-cdk-sdk.wafv2.Wafv2VisibilityConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest.property.description"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Rule`](#aws-cdk-sdk.wafv2.Wafv2Rule)[]

---

### Wafv2UpdateWebAclResponse <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UpdateWebAclResponse: wafv2.Wafv2UpdateWebAclResponse = { ... }
```

##### `nextLockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2UpdateWebAclResponse.property.nextLockToken"></a>

- *Type:* `string`

---

### Wafv2UriPath <a name="aws-cdk-sdk.wafv2.Wafv2UriPath"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2UriPath: wafv2.Wafv2UriPath = { ... }
```

### Wafv2VisibilityConfig <a name="aws-cdk-sdk.wafv2.Wafv2VisibilityConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2VisibilityConfig: wafv2.Wafv2VisibilityConfig = { ... }
```

##### `cloudWatchMetricsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2VisibilityConfig.property.cloudWatchMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2VisibilityConfig.property.metricName"></a>

- *Type:* `string`

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2VisibilityConfig.property.sampledRequestsEnabled"></a>

- *Type:* `boolean`

---

### Wafv2WebAcl <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2WebAcl: wafv2.Wafv2WebAcl = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.arn"></a>

- *Type:* `string`

---

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DefaultAction`](#aws-cdk-sdk.wafv2.Wafv2DefaultAction)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.name"></a>

- *Type:* `string`

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2VisibilityConfig`](#aws-cdk-sdk.wafv2.Wafv2VisibilityConfig)

---

##### `capacity`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.capacity"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.description"></a>

- *Type:* `string`

---

##### `managedByFirewallManager`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.managedByFirewallManager"></a>

- *Type:* `boolean`

---

##### `postProcessFirewallManagerRuleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.postProcessFirewallManagerRuleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup`](#aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup)[]

---

##### `preProcessFirewallManagerRuleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.preProcessFirewallManagerRuleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup`](#aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup)[]

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAcl.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Rule`](#aws-cdk-sdk.wafv2.Wafv2Rule)[]

---

### Wafv2WebAclSummary <a name="aws-cdk-sdk.wafv2.Wafv2WebAclSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2WebAclSummary: wafv2.Wafv2WebAclSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAclSummary.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAclSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAclSummary.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAclSummary.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafv2.Wafv2WebAclSummary.property.name"></a>

- *Type:* `string`

---

### Wafv2XssMatchStatement <a name="aws-cdk-sdk.wafv2.Wafv2XssMatchStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

const wafv2XssMatchStatement: wafv2.Wafv2XssMatchStatement = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2XssMatchStatement.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FieldToMatch`](#aws-cdk-sdk.wafv2.Wafv2FieldToMatch)

---

##### `textTransformations`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.Wafv2XssMatchStatement.property.textTransformations"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2TextTransformation`](#aws-cdk-sdk.wafv2.Wafv2TextTransformation)[]

---

## Classes <a name="Classes"></a>

### WAFV2ResponsesCheckCapacity <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCheckCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCheckCapacity.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesCheckCapacity(__scope: Construct, __resources: string[], __input: Wafv2CheckCapacityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCheckCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCheckCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCheckCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CheckCapacityRequest`](#aws-cdk-sdk.wafv2.Wafv2CheckCapacityRequest)

---



#### Properties <a name="Properties"></a>

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCheckCapacity.property.capacity"></a>

- *Type:* `number`

---


### WAFV2ResponsesCreateIpSet <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSet.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesCreateIpSet(__scope: Construct, __resources: string[], __input: Wafv2CreateIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSet.property.summary"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary`](#aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary)

---


### WAFV2ResponsesCreateIpSetSummary <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesCreateIpSetSummary(__scope: Construct, __resources: string[], __input: Wafv2CreateIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateIpSetSummary.property.name"></a>

- *Type:* `string`

---


### WAFV2ResponsesCreateRegexPatternSet <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSet.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesCreateRegexPatternSet(__scope: Construct, __resources: string[], __input: Wafv2CreateRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSet.property.summary"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary`](#aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary)

---


### WAFV2ResponsesCreateRegexPatternSetSummary <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesCreateRegexPatternSetSummary(__scope: Construct, __resources: string[], __input: Wafv2CreateRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRegexPatternSetSummary.property.name"></a>

- *Type:* `string`

---


### WAFV2ResponsesCreateRuleGroup <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroup.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesCreateRuleGroup(__scope: Construct, __resources: string[], __input: Wafv2CreateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroup.property.summary"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary`](#aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary)

---


### WAFV2ResponsesCreateRuleGroupSummary <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesCreateRuleGroupSummary(__scope: Construct, __resources: string[], __input: Wafv2CreateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateRuleGroupSummary.property.name"></a>

- *Type:* `string`

---


### WAFV2ResponsesCreateWebAcl <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAcl.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesCreateWebAcl(__scope: Construct, __resources: string[], __input: Wafv2CreateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAcl.property.summary"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary`](#aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary)

---


### WAFV2ResponsesCreateWebAclSummary <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesCreateWebAclSummary(__scope: Construct, __resources: string[], __input: Wafv2CreateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2CreateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary.property.id"></a>

- *Type:* `string`

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary.property.lockToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesCreateWebAclSummary.property.name"></a>

- *Type:* `string`

---


### WAFV2ResponsesDeleteFirewallManagerRuleGroups <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDeleteFirewallManagerRuleGroups"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDeleteFirewallManagerRuleGroups.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesDeleteFirewallManagerRuleGroups(__scope: Construct, __resources: string[], __input: Wafv2DeleteFirewallManagerRuleGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDeleteFirewallManagerRuleGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDeleteFirewallManagerRuleGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDeleteFirewallManagerRuleGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DeleteFirewallManagerRuleGroupsRequest`](#aws-cdk-sdk.wafv2.Wafv2DeleteFirewallManagerRuleGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextWebAclLockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDeleteFirewallManagerRuleGroups.property.nextWebAclLockToken"></a>

- *Type:* `string`

---


### WAFV2ResponsesDescribeManagedRuleGroup <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDescribeManagedRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDescribeManagedRuleGroup.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesDescribeManagedRuleGroup(__scope: Construct, __resources: string[], __input: Wafv2DescribeManagedRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDescribeManagedRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDescribeManagedRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDescribeManagedRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2DescribeManagedRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDescribeManagedRuleGroup.property.capacity"></a>

- *Type:* `number`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesDescribeManagedRuleGroup.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RuleSummary`](#aws-cdk-sdk.wafv2.Wafv2RuleSummary)[]

---


### WAFV2ResponsesFetchIpSet <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSet.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchIpSet(__scope: Construct, __resources: string[], __input: Wafv2GetIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetIpSetRequest`](#aws-cdk-sdk.wafv2.Wafv2GetIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSet.property.ipSet"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet)

---

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSet.property.lockToken"></a>

- *Type:* `string`

---


### WAFV2ResponsesFetchIpSetIpSet <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchIpSetIpSet(__scope: Construct, __resources: string[], __input: Wafv2GetIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetIpSetRequest`](#aws-cdk-sdk.wafv2.Wafv2GetIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `addresses`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet.property.addresses"></a>

- *Type:* `string`[]

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet.property.id"></a>

- *Type:* `string`

---

##### `ipAddressVersion`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet.property.ipAddressVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchIpSetIpSet.property.name"></a>

- *Type:* `string`

---


### WAFV2ResponsesFetchLoggingConfiguration <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfiguration.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchLoggingConfiguration(__scope: Construct, __resources: string[], __input: Wafv2GetLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetLoggingConfigurationRequest`](#aws-cdk-sdk.wafv2.Wafv2GetLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfiguration.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration)

---


### WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration(__scope: Construct, __resources: string[], __input: Wafv2GetLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetLoggingConfigurationRequest`](#aws-cdk-sdk.wafv2.Wafv2GetLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* `string`[]

---

##### `managedByFirewallManager`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration.property.managedByFirewallManager"></a>

- *Type:* `boolean`

---

##### `redactedFields`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration.property.redactedFields"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FieldToMatch`](#aws-cdk-sdk.wafv2.Wafv2FieldToMatch)[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration.property.resourceArn"></a>

- *Type:* `string`

---


### WAFV2ResponsesFetchPermissionPolicy <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchPermissionPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchPermissionPolicy.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchPermissionPolicy(__scope: Construct, __resources: string[], __input: Wafv2GetPermissionPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchPermissionPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchPermissionPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchPermissionPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetPermissionPolicyRequest`](#aws-cdk-sdk.wafv2.Wafv2GetPermissionPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchPermissionPolicy.property.policy"></a>

- *Type:* `string`

---


### WAFV2ResponsesFetchRateBasedStatementManagedKeys <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeys"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeys.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeys(__scope: Construct, __resources: string[], __input: Wafv2GetRateBasedStatementManagedKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `managedKeysIpv4`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeys.property.managedKeysIpv4"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4)

---

##### `managedKeysIpv6`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeys.property.managedKeysIpv6"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6)

---


### WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4 <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4(__scope: Construct, __resources: string[], __input: Wafv2GetRateBasedStatementManagedKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `addresses`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4.property.addresses"></a>

- *Type:* `string`[]

---

##### `ipAddressVersion`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4.property.ipAddressVersion"></a>

- *Type:* `string`

---


### WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6 <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6(__scope: Construct, __resources: string[], __input: Wafv2GetRateBasedStatementManagedKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRateBasedStatementManagedKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `addresses`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6.property.addresses"></a>

- *Type:* `string`[]

---

##### `ipAddressVersion`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6.property.ipAddressVersion"></a>

- *Type:* `string`

---


### WAFV2ResponsesFetchRegexPatternSet <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSet.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchRegexPatternSet(__scope: Construct, __resources: string[], __input: Wafv2GetRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSet.property.lockToken"></a>

- *Type:* `string`

---

##### `regexPatternSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSet.property.regexPatternSet"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet)

---


### WAFV2ResponsesFetchRegexPatternSetRegexPatternSet <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet(__scope: Construct, __resources: string[], __input: Wafv2GetRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet.property.name"></a>

- *Type:* `string`

---

##### `regularExpressionList`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRegexPatternSetRegexPatternSet.property.regularExpressionList"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Regex`](#aws-cdk-sdk.wafv2.Wafv2Regex)[]

---


### WAFV2ResponsesFetchRuleGroup <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroup.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchRuleGroup(__scope: Construct, __resources: string[], __input: Wafv2GetRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroup.property.lockToken"></a>

- *Type:* `string`

---

##### `ruleGroup`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroup.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup)

---


### WAFV2ResponsesFetchRuleGroupRuleGroup <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup(__scope: Construct, __resources: string[], __input: Wafv2GetRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.property.arn"></a>

- *Type:* `string`

---

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.property.capacity"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Rule`](#aws-cdk-sdk.wafv2.Wafv2Rule)[]

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroup.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig)

---


### WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig(__scope: Construct, __resources: string[], __input: Wafv2GetRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2GetRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchMetricsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig.property.cloudWatchMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig.property.metricName"></a>

- *Type:* `string`

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig.property.sampledRequestsEnabled"></a>

- *Type:* `boolean`

---


### WAFV2ResponsesFetchSampledRequests <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequests"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequests.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchSampledRequests(__scope: Construct, __resources: string[], __input: Wafv2GetSampledRequestsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequests.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequests.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequests.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest`](#aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest)

---



#### Properties <a name="Properties"></a>

##### `populationSize`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequests.property.populationSize"></a>

- *Type:* `number`

---

##### `sampledRequests`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequests.property.sampledRequests"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2SampledHttpRequest`](#aws-cdk-sdk.wafv2.Wafv2SampledHttpRequest)[]

---

##### `timeWindow`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequests.property.timeWindow"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequestsTimeWindow`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequestsTimeWindow)

---


### WAFV2ResponsesFetchSampledRequestsTimeWindow <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequestsTimeWindow"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequestsTimeWindow.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchSampledRequestsTimeWindow(__scope: Construct, __resources: string[], __input: Wafv2GetSampledRequestsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequestsTimeWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequestsTimeWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequestsTimeWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest`](#aws-cdk-sdk.wafv2.Wafv2GetSampledRequestsRequest)

---



#### Properties <a name="Properties"></a>

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequestsTimeWindow.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchSampledRequestsTimeWindow.property.startTime"></a>

- *Type:* `string`

---


### WAFV2ResponsesFetchWebAcl <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAcl.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchWebAcl(__scope: Construct, __resources: string[], __input: Wafv2GetWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `lockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAcl.property.lockToken"></a>

- *Type:* `string`

---

##### `webAcl`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAcl.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl)

---


### WAFV2ResponsesFetchWebAclForResource <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResource"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResource.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchWebAclForResource(__scope: Construct, __resources: string[], __input: Wafv2GetWebAclForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest`](#aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `webAcl`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResource.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl)

---


### WAFV2ResponsesFetchWebAclForResourceWebAcl <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl(__scope: Construct, __resources: string[], __input: Wafv2GetWebAclForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest`](#aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.arn"></a>

- *Type:* `string`

---

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.capacity"></a>

- *Type:* `number`

---

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.id"></a>

- *Type:* `string`

---

##### `managedByFirewallManager`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.managedByFirewallManager"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.name"></a>

- *Type:* `string`

---

##### `postProcessFirewallManagerRuleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.postProcessFirewallManagerRuleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup`](#aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup)[]

---

##### `preProcessFirewallManagerRuleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.preProcessFirewallManagerRuleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup`](#aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup)[]

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Rule`](#aws-cdk-sdk.wafv2.Wafv2Rule)[]

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAcl.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig)

---


### WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction(__scope: Construct, __resources: string[], __input: Wafv2GetWebAclForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest`](#aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `allow`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction.property.allow"></a>

- *Type:* `any`

---

##### `block`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction.property.block"></a>

- *Type:* `any`

---


### WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig(__scope: Construct, __resources: string[], __input: Wafv2GetWebAclForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest`](#aws-cdk-sdk.wafv2.Wafv2GetWebAclForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchMetricsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig.property.cloudWatchMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig.property.metricName"></a>

- *Type:* `string`

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig.property.sampledRequestsEnabled"></a>

- *Type:* `boolean`

---


### WAFV2ResponsesFetchWebAclWebAcl <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchWebAclWebAcl(__scope: Construct, __resources: string[], __input: Wafv2GetWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.arn"></a>

- *Type:* `string`

---

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.capacity"></a>

- *Type:* `number`

---

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclDefaultAction`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclDefaultAction)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.id"></a>

- *Type:* `string`

---

##### `managedByFirewallManager`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.managedByFirewallManager"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.name"></a>

- *Type:* `string`

---

##### `postProcessFirewallManagerRuleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.postProcessFirewallManagerRuleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup`](#aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup)[]

---

##### `preProcessFirewallManagerRuleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.preProcessFirewallManagerRuleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup`](#aws-cdk-sdk.wafv2.Wafv2FirewallManagerRuleGroup)[]

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Rule`](#aws-cdk-sdk.wafv2.Wafv2Rule)[]

---

##### `visibilityConfig`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAcl.property.visibilityConfig"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig`](#aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig)

---


### WAFV2ResponsesFetchWebAclWebAclDefaultAction <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclDefaultAction"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclDefaultAction.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchWebAclWebAclDefaultAction(__scope: Construct, __resources: string[], __input: Wafv2GetWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclDefaultAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclDefaultAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclDefaultAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `allow`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclDefaultAction.property.allow"></a>

- *Type:* `any`

---

##### `block`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclDefaultAction.property.block"></a>

- *Type:* `any`

---


### WAFV2ResponsesFetchWebAclWebAclVisibilityConfig <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig(__scope: Construct, __resources: string[], __input: Wafv2GetWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2GetWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchMetricsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig.property.cloudWatchMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig.property.metricName"></a>

- *Type:* `string`

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesFetchWebAclWebAclVisibilityConfig.property.sampledRequestsEnabled"></a>

- *Type:* `boolean`

---


### WAFV2ResponsesListAvailableManagedRuleGroups <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListAvailableManagedRuleGroups"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListAvailableManagedRuleGroups.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesListAvailableManagedRuleGroups(__scope: Construct, __resources: string[], __input: Wafv2ListAvailableManagedRuleGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListAvailableManagedRuleGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListAvailableManagedRuleGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListAvailableManagedRuleGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListAvailableManagedRuleGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `managedRuleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListAvailableManagedRuleGroups.property.managedRuleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupSummary`](#aws-cdk-sdk.wafv2.Wafv2ManagedRuleGroupSummary)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListAvailableManagedRuleGroups.property.nextMarker"></a>

- *Type:* `string`

---


### WAFV2ResponsesListIpSets <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListIpSets"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListIpSets.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesListIpSets(__scope: Construct, __resources: string[], __input: Wafv2ListIpSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListIpSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListIpSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListIpSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListIpSetsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListIpSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSets`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListIpSets.property.ipSets"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2IpSetSummary`](#aws-cdk-sdk.wafv2.Wafv2IpSetSummary)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListIpSets.property.nextMarker"></a>

- *Type:* `string`

---


### WAFV2ResponsesListLoggingConfigurations <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListLoggingConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListLoggingConfigurations.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesListLoggingConfigurations(__scope: Construct, __resources: string[], __input: Wafv2ListLoggingConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListLoggingConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListLoggingConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListLoggingConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListLoggingConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListLoggingConfigurations.property.loggingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration`](#aws-cdk-sdk.wafv2.Wafv2LoggingConfiguration)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListLoggingConfigurations.property.nextMarker"></a>

- *Type:* `string`

---


### WAFV2ResponsesListRegexPatternSets <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRegexPatternSets"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRegexPatternSets.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesListRegexPatternSets(__scope: Construct, __resources: string[], __input: Wafv2ListRegexPatternSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRegexPatternSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRegexPatternSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRegexPatternSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListRegexPatternSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRegexPatternSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `regexPatternSets`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRegexPatternSets.property.regexPatternSets"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary`](#aws-cdk-sdk.wafv2.Wafv2RegexPatternSetSummary)[]

---


### WAFV2ResponsesListResourcesForWebAcl <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListResourcesForWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListResourcesForWebAcl.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesListResourcesForWebAcl(__scope: Construct, __resources: string[], __input: Wafv2ListResourcesForWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListResourcesForWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListResourcesForWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListResourcesForWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListResourcesForWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2ListResourcesForWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceArns`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListResourcesForWebAcl.property.resourceArns"></a>

- *Type:* `string`[]

---


### WAFV2ResponsesListRuleGroups <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRuleGroups"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRuleGroups.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesListRuleGroups(__scope: Construct, __resources: string[], __input: Wafv2ListRuleGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRuleGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRuleGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRuleGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListRuleGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRuleGroups.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListRuleGroups.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary`](#aws-cdk-sdk.wafv2.Wafv2RuleGroupSummary)[]

---


### WAFV2ResponsesListTagsForResource <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResource.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: Wafv2ListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceRequest`](#aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResource.property.nextMarker"></a>

- *Type:* `string`

---

##### `tagInfoForResource`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResource.property.tagInfoForResource"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResourceTagInfoForResource`](#aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResourceTagInfoForResource)

---


### WAFV2ResponsesListTagsForResourceTagInfoForResource <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResourceTagInfoForResource"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResourceTagInfoForResource.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesListTagsForResourceTagInfoForResource(__scope: Construct, __resources: string[], __input: Wafv2ListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResourceTagInfoForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResourceTagInfoForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResourceTagInfoForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceRequest`](#aws-cdk-sdk.wafv2.Wafv2ListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResourceTagInfoForResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListTagsForResourceTagInfoForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2Tag`](#aws-cdk-sdk.wafv2.Wafv2Tag)[]

---


### WAFV2ResponsesListWebAcLs <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListWebAcLs"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListWebAcLs.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesListWebAcLs(__scope: Construct, __resources: string[], __input: Wafv2ListWebAcLsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListWebAcLs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListWebAcLs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListWebAcLs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2ListWebAcLsRequest`](#aws-cdk-sdk.wafv2.Wafv2ListWebAcLsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListWebAcLs.property.nextMarker"></a>

- *Type:* `string`

---

##### `webAcLs`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesListWebAcLs.property.webAcLs"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2WebAclSummary`](#aws-cdk-sdk.wafv2.Wafv2WebAclSummary)[]

---


### WAFV2ResponsesPutLoggingConfiguration <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfiguration.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesPutLoggingConfiguration(__scope: Construct, __resources: string[], __input: Wafv2PutLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2PutLoggingConfigurationRequest`](#aws-cdk-sdk.wafv2.Wafv2PutLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfiguration.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration`](#aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration)

---


### WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration(__scope: Construct, __resources: string[], __input: Wafv2PutLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2PutLoggingConfigurationRequest`](#aws-cdk-sdk.wafv2.Wafv2PutLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* `string`[]

---

##### `managedByFirewallManager`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration.property.managedByFirewallManager"></a>

- *Type:* `boolean`

---

##### `redactedFields`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration.property.redactedFields"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2FieldToMatch`](#aws-cdk-sdk.wafv2.Wafv2FieldToMatch)[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration.property.resourceArn"></a>

- *Type:* `string`

---


### WAFV2ResponsesUpdateIpSet <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateIpSet.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesUpdateIpSet(__scope: Construct, __resources: string[], __input: Wafv2UpdateIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest`](#aws-cdk-sdk.wafv2.Wafv2UpdateIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `nextLockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateIpSet.property.nextLockToken"></a>

- *Type:* `string`

---


### WAFV2ResponsesUpdateRegexPatternSet <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRegexPatternSet.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesUpdateRegexPatternSet(__scope: Construct, __resources: string[], __input: Wafv2UpdateRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest`](#aws-cdk-sdk.wafv2.Wafv2UpdateRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `nextLockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRegexPatternSet.property.nextLockToken"></a>

- *Type:* `string`

---


### WAFV2ResponsesUpdateRuleGroup <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRuleGroup.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesUpdateRuleGroup(__scope: Construct, __resources: string[], __input: Wafv2UpdateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest`](#aws-cdk-sdk.wafv2.Wafv2UpdateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `nextLockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateRuleGroup.property.nextLockToken"></a>

- *Type:* `string`

---


### WAFV2ResponsesUpdateWebAcl <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateWebAcl.Initializer"></a>

```typescript
import { wafv2 } from 'aws-cdk-sdk'

new wafv2.WAFV2ResponsesUpdateWebAcl(__scope: Construct, __resources: string[], __input: Wafv2UpdateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest`](#aws-cdk-sdk.wafv2.Wafv2UpdateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `nextLockToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafv2.WAFV2ResponsesUpdateWebAcl.property.nextLockToken"></a>

- *Type:* `string`

---



