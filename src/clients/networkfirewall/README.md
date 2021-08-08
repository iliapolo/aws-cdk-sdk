# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### NetworkFirewallClient <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateFirewallPolicy` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.associateFirewallPolicy"></a>

```typescript
public associateFirewallPolicy(input: NetworkFirewallAssociateFirewallPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyRequest)

---

##### `associateSubnets` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.associateSubnets"></a>

```typescript
public associateSubnets(input: NetworkFirewallAssociateSubnetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsRequest)

---

##### `createFirewall` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.createFirewall"></a>

```typescript
public createFirewall(input: NetworkFirewallCreateFirewallRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest)

---

##### `createFirewallPolicy` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.createFirewallPolicy"></a>

```typescript
public createFirewallPolicy(input: NetworkFirewallCreateFirewallPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest)

---

##### `createRuleGroup` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.createRuleGroup"></a>

```typescript
public createRuleGroup(input: NetworkFirewallCreateRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest)

---

##### `deleteFirewall` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.deleteFirewall"></a>

```typescript
public deleteFirewall(input: NetworkFirewallDeleteFirewallRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest)

---

##### `deleteFirewallPolicy` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.deleteFirewallPolicy"></a>

```typescript
public deleteFirewallPolicy(input: NetworkFirewallDeleteFirewallPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyRequest)

---

##### `deleteResourcePolicy` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.deleteResourcePolicy"></a>

```typescript
public deleteResourcePolicy(input: NetworkFirewallDeleteResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteResourcePolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteResourcePolicyRequest)

---

##### `deleteRuleGroup` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.deleteRuleGroup"></a>

```typescript
public deleteRuleGroup(input: NetworkFirewallDeleteRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupRequest)

---

##### `describeFirewall` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.describeFirewall"></a>

```typescript
public describeFirewall(input: NetworkFirewallDescribeFirewallRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest)

---

##### `describeFirewallPolicy` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.describeFirewallPolicy"></a>

```typescript
public describeFirewallPolicy(input: NetworkFirewallDescribeFirewallPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest)

---

##### `describeLoggingConfiguration` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.describeLoggingConfiguration"></a>

```typescript
public describeLoggingConfiguration(input: NetworkFirewallDescribeLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationRequest)

---

##### `describeResourcePolicy` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.describeResourcePolicy"></a>

```typescript
public describeResourcePolicy(input: NetworkFirewallDescribeResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeResourcePolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeResourcePolicyRequest)

---

##### `describeRuleGroup` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.describeRuleGroup"></a>

```typescript
public describeRuleGroup(input: NetworkFirewallDescribeRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest)

---

##### `disassociateSubnets` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.disassociateSubnets"></a>

```typescript
public disassociateSubnets(input: NetworkFirewallDisassociateSubnetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsRequest)

---

##### `listFirewallPolicies` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.listFirewallPolicies"></a>

```typescript
public listFirewallPolicies(input: NetworkFirewallListFirewallPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallPoliciesRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallPoliciesRequest)

---

##### `listFirewalls` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.listFirewalls"></a>

```typescript
public listFirewalls(input: NetworkFirewallListFirewallsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsRequest)

---

##### `listRuleGroups` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.listRuleGroups"></a>

```typescript
public listRuleGroups(input: NetworkFirewallListRuleGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallListRuleGroupsRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallListRuleGroupsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: NetworkFirewallListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceRequest)

---

##### `putResourcePolicy` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.putResourcePolicy"></a>

```typescript
public putResourcePolicy(input: NetworkFirewallPutResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallPutResourcePolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallPutResourcePolicyRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.tagResource"></a>

```typescript
public tagResource(input: NetworkFirewallTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTagResourceRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.untagResource"></a>

```typescript
public untagResource(input: NetworkFirewallUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUntagResourceRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUntagResourceRequest)

---

##### `updateFirewallDeleteProtection` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.updateFirewallDeleteProtection"></a>

```typescript
public updateFirewallDeleteProtection(input: NetworkFirewallUpdateFirewallDeleteProtectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionRequest)

---

##### `updateFirewallDescription` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.updateFirewallDescription"></a>

```typescript
public updateFirewallDescription(input: NetworkFirewallUpdateFirewallDescriptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionRequest)

---

##### `updateFirewallPolicy` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.updateFirewallPolicy"></a>

```typescript
public updateFirewallPolicy(input: NetworkFirewallUpdateFirewallPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest)

---

##### `updateFirewallPolicyChangeProtection` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.updateFirewallPolicyChangeProtection"></a>

```typescript
public updateFirewallPolicyChangeProtection(input: NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest)

---

##### `updateLoggingConfiguration` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.updateLoggingConfiguration"></a>

```typescript
public updateLoggingConfiguration(input: NetworkFirewallUpdateLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest)

---

##### `updateRuleGroup` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.updateRuleGroup"></a>

```typescript
public updateRuleGroup(input: NetworkFirewallUpdateRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest)

---

##### `updateSubnetChangeProtection` <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.updateSubnetChangeProtection"></a>

```typescript
public updateSubnetChangeProtection(input: NetworkFirewallUpdateSubnetChangeProtectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionRequest)

---




## Structs <a name="Structs"></a>

### NetworkFirewallActionDefinition <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallActionDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallActionDefinition: networkfirewall.NetworkFirewallActionDefinition = { ... }
```

##### `publishMetricAction`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallActionDefinition.property.publishMetricAction"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallPublishMetricAction`](#aws-cdk-sdk.networkfirewall.NetworkFirewallPublishMetricAction)

---

### NetworkFirewallAddress <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAddress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallAddress: networkfirewall.NetworkFirewallAddress = { ... }
```

##### `addressDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAddress.property.addressDefinition"></a>

- *Type:* `string`

---

### NetworkFirewallAssociateFirewallPolicyRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallAssociateFirewallPolicyRequest: networkfirewall.NetworkFirewallAssociateFirewallPolicyRequest = { ... }
```

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyRequest.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyRequest.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyRequest.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallAssociateFirewallPolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallAssociateFirewallPolicyResponse: networkfirewall.NetworkFirewallAssociateFirewallPolicyResponse = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyResponse.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyResponse.property.firewallName"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyResponse.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallAssociateSubnetsRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallAssociateSubnetsRequest: networkfirewall.NetworkFirewallAssociateSubnetsRequest = { ... }
```

##### `subnetMappings`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsRequest.property.subnetMappings"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping)[]

---

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsRequest.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsRequest.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallAssociateSubnetsResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallAssociateSubnetsResponse: networkfirewall.NetworkFirewallAssociateSubnetsResponse = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsResponse.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsResponse.property.firewallName"></a>

- *Type:* `string`

---

##### `subnetMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsResponse.property.subnetMappings"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping)[]

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallAttachment <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAttachment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallAttachment: networkfirewall.NetworkFirewallAttachment = { ... }
```

##### `endpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAttachment.property.endpointId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAttachment.property.status"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallAttachment.property.subnetId"></a>

- *Type:* `string`

---

### NetworkFirewallCreateFirewallPolicyRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallCreateFirewallPolicyRequest: networkfirewall.NetworkFirewallCreateFirewallPolicyRequest = { ... }
```

##### `firewallPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest.property.firewallPolicy"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy)

---

##### `firewallPolicyName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest.property.firewallPolicyName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest.property.description"></a>

- *Type:* `string`

---

##### `dryRun`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest.property.dryRun"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

### NetworkFirewallCreateFirewallPolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallCreateFirewallPolicyResponse: networkfirewall.NetworkFirewallCreateFirewallPolicyResponse = { ... }
```

##### `firewallPolicyResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyResponse.property.firewallPolicyResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallCreateFirewallRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallCreateFirewallRequest: networkfirewall.NetworkFirewallCreateFirewallRequest = { ... }
```

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest.property.firewallName"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `subnetMappings`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest.property.subnetMappings"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest.property.vpcId"></a>

- *Type:* `string`

---

##### `deleteProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest.property.deleteProtection"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest.property.description"></a>

- *Type:* `string`

---

##### `firewallPolicyChangeProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest.property.firewallPolicyChangeProtection"></a>

- *Type:* `boolean`

---

##### `subnetChangeProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest.property.subnetChangeProtection"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

### NetworkFirewallCreateFirewallResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallCreateFirewallResponse: networkfirewall.NetworkFirewallCreateFirewallResponse = { ... }
```

##### `firewall`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallResponse.property.firewall"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall)

---

##### `firewallStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallResponse.property.firewallStatus"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallStatus`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallStatus)

---

### NetworkFirewallCreateRuleGroupRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallCreateRuleGroupRequest: networkfirewall.NetworkFirewallCreateRuleGroupRequest = { ... }
```

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest.property.capacity"></a>

- *Type:* `number`

---

##### `ruleGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest.property.ruleGroupName"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest.property.type"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest.property.description"></a>

- *Type:* `string`

---

##### `dryRun`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest.property.dryRun"></a>

- *Type:* `boolean`

---

##### `ruleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroup`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroup)

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest.property.rules"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

### NetworkFirewallCreateRuleGroupResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallCreateRuleGroupResponse: networkfirewall.NetworkFirewallCreateRuleGroupResponse = { ... }
```

##### `ruleGroupResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupResponse.property.ruleGroupResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallCustomAction <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallCustomAction: networkfirewall.NetworkFirewallCustomAction = { ... }
```

##### `actionDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction.property.actionDefinition"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallActionDefinition`](#aws-cdk-sdk.networkfirewall.NetworkFirewallActionDefinition)

---

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction.property.actionName"></a>

- *Type:* `string`

---

### NetworkFirewallDeleteFirewallPolicyRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDeleteFirewallPolicyRequest: networkfirewall.NetworkFirewallDeleteFirewallPolicyRequest = { ... }
```

##### `firewallPolicyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyRequest.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyRequest.property.firewallPolicyName"></a>

- *Type:* `string`

---

### NetworkFirewallDeleteFirewallPolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDeleteFirewallPolicyResponse: networkfirewall.NetworkFirewallDeleteFirewallPolicyResponse = { ... }
```

##### `firewallPolicyResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyResponse.property.firewallPolicyResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse)

---

### NetworkFirewallDeleteFirewallRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDeleteFirewallRequest: networkfirewall.NetworkFirewallDeleteFirewallRequest = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest.property.firewallName"></a>

- *Type:* `string`

---

### NetworkFirewallDeleteFirewallResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDeleteFirewallResponse: networkfirewall.NetworkFirewallDeleteFirewallResponse = { ... }
```

##### `firewall`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallResponse.property.firewall"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall)

---

##### `firewallStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallResponse.property.firewallStatus"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallStatus`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallStatus)

---

### NetworkFirewallDeleteResourcePolicyRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDeleteResourcePolicyRequest: networkfirewall.NetworkFirewallDeleteResourcePolicyRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteResourcePolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### NetworkFirewallDeleteResourcePolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDeleteResourcePolicyResponse: networkfirewall.NetworkFirewallDeleteResourcePolicyResponse = { ... }
```

### NetworkFirewallDeleteRuleGroupRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDeleteRuleGroupRequest: networkfirewall.NetworkFirewallDeleteRuleGroupRequest = { ... }
```

##### `ruleGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupRequest.property.ruleGroupArn"></a>

- *Type:* `string`

---

##### `ruleGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupRequest.property.ruleGroupName"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupRequest.property.type"></a>

- *Type:* `string`

---

### NetworkFirewallDeleteRuleGroupResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDeleteRuleGroupResponse: networkfirewall.NetworkFirewallDeleteRuleGroupResponse = { ... }
```

##### `ruleGroupResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupResponse.property.ruleGroupResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse)

---

### NetworkFirewallDescribeFirewallPolicyRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDescribeFirewallPolicyRequest: networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest = { ... }
```

##### `firewallPolicyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest.property.firewallPolicyName"></a>

- *Type:* `string`

---

### NetworkFirewallDescribeFirewallPolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDescribeFirewallPolicyResponse: networkfirewall.NetworkFirewallDescribeFirewallPolicyResponse = { ... }
```

##### `firewallPolicyResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyResponse.property.firewallPolicyResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyResponse.property.updateToken"></a>

- *Type:* `string`

---

##### `firewallPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyResponse.property.firewallPolicy"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy)

---

### NetworkFirewallDescribeFirewallRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDescribeFirewallRequest: networkfirewall.NetworkFirewallDescribeFirewallRequest = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest.property.firewallName"></a>

- *Type:* `string`

---

### NetworkFirewallDescribeFirewallResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDescribeFirewallResponse: networkfirewall.NetworkFirewallDescribeFirewallResponse = { ... }
```

##### `firewall`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallResponse.property.firewall"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall)

---

##### `firewallStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallResponse.property.firewallStatus"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallStatus`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallStatus)

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallDescribeLoggingConfigurationRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDescribeLoggingConfigurationRequest: networkfirewall.NetworkFirewallDescribeLoggingConfigurationRequest = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationRequest.property.firewallName"></a>

- *Type:* `string`

---

### NetworkFirewallDescribeLoggingConfigurationResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDescribeLoggingConfigurationResponse: networkfirewall.NetworkFirewallDescribeLoggingConfigurationResponse = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationResponse.property.firewallArn"></a>

- *Type:* `string`

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationResponse.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallLoggingConfiguration`](#aws-cdk-sdk.networkfirewall.NetworkFirewallLoggingConfiguration)

---

### NetworkFirewallDescribeResourcePolicyRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDescribeResourcePolicyRequest: networkfirewall.NetworkFirewallDescribeResourcePolicyRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeResourcePolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### NetworkFirewallDescribeResourcePolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDescribeResourcePolicyResponse: networkfirewall.NetworkFirewallDescribeResourcePolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeResourcePolicyResponse.property.policy"></a>

- *Type:* `string`

---

### NetworkFirewallDescribeRuleGroupRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDescribeRuleGroupRequest: networkfirewall.NetworkFirewallDescribeRuleGroupRequest = { ... }
```

##### `ruleGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest.property.ruleGroupArn"></a>

- *Type:* `string`

---

##### `ruleGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest.property.ruleGroupName"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest.property.type"></a>

- *Type:* `string`

---

### NetworkFirewallDescribeRuleGroupResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDescribeRuleGroupResponse: networkfirewall.NetworkFirewallDescribeRuleGroupResponse = { ... }
```

##### `ruleGroupResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupResponse.property.ruleGroupResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupResponse.property.updateToken"></a>

- *Type:* `string`

---

##### `ruleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupResponse.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroup`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroup)

---

### NetworkFirewallDimension <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDimension"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDimension: networkfirewall.NetworkFirewallDimension = { ... }
```

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDimension.property.value"></a>

- *Type:* `string`

---

### NetworkFirewallDisassociateSubnetsRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDisassociateSubnetsRequest: networkfirewall.NetworkFirewallDisassociateSubnetsRequest = { ... }
```

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsRequest.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsRequest.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallDisassociateSubnetsResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallDisassociateSubnetsResponse: networkfirewall.NetworkFirewallDisassociateSubnetsResponse = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsResponse.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsResponse.property.firewallName"></a>

- *Type:* `string`

---

##### `subnetMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsResponse.property.subnetMappings"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping)[]

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallFirewall <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallFirewall: networkfirewall.NetworkFirewallFirewall = { ... }
```

##### `firewallId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.firewallId"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `subnetMappings`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.subnetMappings"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.vpcId"></a>

- *Type:* `string`

---

##### `deleteProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.deleteProtection"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.description"></a>

- *Type:* `string`

---

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.firewallName"></a>

- *Type:* `string`

---

##### `firewallPolicyChangeProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.firewallPolicyChangeProtection"></a>

- *Type:* `boolean`

---

##### `subnetChangeProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.subnetChangeProtection"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewall.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

### NetworkFirewallFirewallMetadata <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallFirewallMetadata: networkfirewall.NetworkFirewallFirewallMetadata = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallMetadata.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallMetadata.property.firewallName"></a>

- *Type:* `string`

---

### NetworkFirewallFirewallPolicy <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallFirewallPolicy: networkfirewall.NetworkFirewallFirewallPolicy = { ... }
```

##### `statelessDefaultActions`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy.property.statelessDefaultActions"></a>

- *Type:* `string`[]

---

##### `statelessFragmentDefaultActions`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy.property.statelessFragmentDefaultActions"></a>

- *Type:* `string`[]

---

##### `statefulRuleGroupReferences`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy.property.statefulRuleGroupReferences"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRuleGroupReference`](#aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRuleGroupReference)[]

---

##### `statelessCustomActions`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy.property.statelessCustomActions"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction)[]

---

##### `statelessRuleGroupReferences`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy.property.statelessRuleGroupReferences"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRuleGroupReference`](#aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRuleGroupReference)[]

---

### NetworkFirewallFirewallPolicyMetadata <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallFirewallPolicyMetadata: networkfirewall.NetworkFirewallFirewallPolicyMetadata = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyMetadata.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyMetadata.property.name"></a>

- *Type:* `string`

---

### NetworkFirewallFirewallPolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallFirewallPolicyResponse: networkfirewall.NetworkFirewallFirewallPolicyResponse = { ... }
```

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse.property.firewallPolicyId"></a>

- *Type:* `string`

---

##### `firewallPolicyName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse.property.firewallPolicyName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse.property.description"></a>

- *Type:* `string`

---

##### `firewallPolicyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse.property.firewallPolicyStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

### NetworkFirewallFirewallStatus <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallFirewallStatus: networkfirewall.NetworkFirewallFirewallStatus = { ... }
```

##### `configurationSyncStateSummary`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallStatus.property.configurationSyncStateSummary"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallStatus.property.status"></a>

- *Type:* `string`

---

##### `syncStates`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallStatus.property.syncStates"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState)}

---

### NetworkFirewallHeader <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallHeader"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallHeader: networkfirewall.NetworkFirewallHeader = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallHeader.property.destination"></a>

- *Type:* `string`

---

##### `destinationPort`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallHeader.property.destinationPort"></a>

- *Type:* `string`

---

##### `direction`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallHeader.property.direction"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallHeader.property.protocol"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallHeader.property.source"></a>

- *Type:* `string`

---

##### `sourcePort`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallHeader.property.sourcePort"></a>

- *Type:* `string`

---

### NetworkFirewallIpSet <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallIpSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallIpSet: networkfirewall.NetworkFirewallIpSet = { ... }
```

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallIpSet.property.definition"></a>

- *Type:* `string`[]

---

### NetworkFirewallListFirewallPoliciesRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallListFirewallPoliciesRequest: networkfirewall.NetworkFirewallListFirewallPoliciesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallPoliciesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallPoliciesRequest.property.nextToken"></a>

- *Type:* `string`

---

### NetworkFirewallListFirewallPoliciesResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallListFirewallPoliciesResponse: networkfirewall.NetworkFirewallListFirewallPoliciesResponse = { ... }
```

##### `firewallPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallPoliciesResponse.property.firewallPolicies"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyMetadata`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallPoliciesResponse.property.nextToken"></a>

- *Type:* `string`

---

### NetworkFirewallListFirewallsRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallListFirewallsRequest: networkfirewall.NetworkFirewallListFirewallsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `vpcIds`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsRequest.property.vpcIds"></a>

- *Type:* `string`[]

---

### NetworkFirewallListFirewallsResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallListFirewallsResponse: networkfirewall.NetworkFirewallListFirewallsResponse = { ... }
```

##### `firewalls`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsResponse.property.firewalls"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallMetadata`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsResponse.property.nextToken"></a>

- *Type:* `string`

---

### NetworkFirewallListRuleGroupsRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListRuleGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallListRuleGroupsRequest: networkfirewall.NetworkFirewallListRuleGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListRuleGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListRuleGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### NetworkFirewallListRuleGroupsResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListRuleGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallListRuleGroupsResponse: networkfirewall.NetworkFirewallListRuleGroupsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListRuleGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListRuleGroupsResponse.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupMetadata`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupMetadata)[]

---

### NetworkFirewallListTagsForResourceRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallListTagsForResourceRequest: networkfirewall.NetworkFirewallListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### NetworkFirewallListTagsForResourceResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallListTagsForResourceResponse: networkfirewall.NetworkFirewallListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

### NetworkFirewallLogDestinationConfig <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallLogDestinationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallLogDestinationConfig: networkfirewall.NetworkFirewallLogDestinationConfig = { ... }
```

##### `logDestination`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallLogDestinationConfig.property.logDestination"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `logDestinationType`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallLogDestinationConfig.property.logDestinationType"></a>

- *Type:* `string`

---

##### `logType`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallLogDestinationConfig.property.logType"></a>

- *Type:* `string`

---

### NetworkFirewallLoggingConfiguration <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallLoggingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallLoggingConfiguration: networkfirewall.NetworkFirewallLoggingConfiguration = { ... }
```

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallLogDestinationConfig`](#aws-cdk-sdk.networkfirewall.NetworkFirewallLogDestinationConfig)[]

---

### NetworkFirewallMatchAttributes <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallMatchAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallMatchAttributes: networkfirewall.NetworkFirewallMatchAttributes = { ... }
```

##### `destinationPorts`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallMatchAttributes.property.destinationPorts"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallPortRange`](#aws-cdk-sdk.networkfirewall.NetworkFirewallPortRange)[]

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallMatchAttributes.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallAddress`](#aws-cdk-sdk.networkfirewall.NetworkFirewallAddress)[]

---

##### `protocols`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallMatchAttributes.property.protocols"></a>

- *Type:* `number`[]

---

##### `sourcePorts`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallMatchAttributes.property.sourcePorts"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallPortRange`](#aws-cdk-sdk.networkfirewall.NetworkFirewallPortRange)[]

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallMatchAttributes.property.sources"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallAddress`](#aws-cdk-sdk.networkfirewall.NetworkFirewallAddress)[]

---

##### `tcpFlags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallMatchAttributes.property.tcpFlags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTcpFlagField`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTcpFlagField)[]

---

### NetworkFirewallPerObjectStatus <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPerObjectStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallPerObjectStatus: networkfirewall.NetworkFirewallPerObjectStatus = { ... }
```

##### `syncStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPerObjectStatus.property.syncStatus"></a>

- *Type:* `string`

---

### NetworkFirewallPortRange <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPortRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallPortRange: networkfirewall.NetworkFirewallPortRange = { ... }
```

##### `fromPort`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPortRange.property.fromPort"></a>

- *Type:* `number`

---

##### `toPort`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPortRange.property.toPort"></a>

- *Type:* `number`

---

### NetworkFirewallPortSet <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPortSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallPortSet: networkfirewall.NetworkFirewallPortSet = { ... }
```

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPortSet.property.definition"></a>

- *Type:* `string`[]

---

### NetworkFirewallPublishMetricAction <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPublishMetricAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallPublishMetricAction: networkfirewall.NetworkFirewallPublishMetricAction = { ... }
```

##### `dimensions`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPublishMetricAction.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDimension`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDimension)[]

---

### NetworkFirewallPutResourcePolicyRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPutResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallPutResourcePolicyRequest: networkfirewall.NetworkFirewallPutResourcePolicyRequest = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPutResourcePolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPutResourcePolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### NetworkFirewallPutResourcePolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallPutResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallPutResourcePolicyResponse: networkfirewall.NetworkFirewallPutResourcePolicyResponse = { ... }
```

### NetworkFirewallRuleDefinition <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallRuleDefinition: networkfirewall.NetworkFirewallRuleDefinition = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleDefinition.property.actions"></a>

- *Type:* `string`[]

---

##### `matchAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleDefinition.property.matchAttributes"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallMatchAttributes`](#aws-cdk-sdk.networkfirewall.NetworkFirewallMatchAttributes)

---

### NetworkFirewallRuleGroup <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallRuleGroup: networkfirewall.NetworkFirewallRuleGroup = { ... }
```

##### `rulesSource`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroup.property.rulesSource"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSource`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSource)

---

##### `ruleVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroup.property.ruleVariables"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleVariables`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleVariables)

---

### NetworkFirewallRuleGroupMetadata <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallRuleGroupMetadata: networkfirewall.NetworkFirewallRuleGroupMetadata = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupMetadata.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupMetadata.property.name"></a>

- *Type:* `string`

---

### NetworkFirewallRuleGroupResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallRuleGroupResponse: networkfirewall.NetworkFirewallRuleGroupResponse = { ... }
```

##### `ruleGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse.property.ruleGroupArn"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse.property.ruleGroupId"></a>

- *Type:* `string`

---

##### `ruleGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse.property.ruleGroupName"></a>

- *Type:* `string`

---

##### `capacity`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse.property.capacity"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse.property.description"></a>

- *Type:* `string`

---

##### `ruleGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse.property.ruleGroupStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse.property.type"></a>

- *Type:* `string`

---

### NetworkFirewallRuleOption <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallRuleOption: networkfirewall.NetworkFirewallRuleOption = { ... }
```

##### `keyword`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleOption.property.keyword"></a>

- *Type:* `string`

---

##### `settings`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleOption.property.settings"></a>

- *Type:* `string`[]

---

### NetworkFirewallRulesSource <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallRulesSource: networkfirewall.NetworkFirewallRulesSource = { ... }
```

##### `rulesSourceList`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSource.property.rulesSourceList"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSourceList`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSourceList)

---

##### `rulesString`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSource.property.rulesString"></a>

- *Type:* `string`

---

##### `statefulRules`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSource.property.statefulRules"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRule`](#aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRule)[]

---

##### `statelessRulesAndCustomActions`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSource.property.statelessRulesAndCustomActions"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRulesAndCustomActions`](#aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRulesAndCustomActions)

---

### NetworkFirewallRulesSourceList <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSourceList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallRulesSourceList: networkfirewall.NetworkFirewallRulesSourceList = { ... }
```

##### `generatedRulesType`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSourceList.property.generatedRulesType"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSourceList.property.targets"></a>

- *Type:* `string`[]

---

##### `targetTypes`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRulesSourceList.property.targetTypes"></a>

- *Type:* `string`[]

---

### NetworkFirewallRuleVariables <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleVariables"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallRuleVariables: networkfirewall.NetworkFirewallRuleVariables = { ... }
```

##### `ipSets`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleVariables.property.ipSets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.networkfirewall.NetworkFirewallIpSet`](#aws-cdk-sdk.networkfirewall.NetworkFirewallIpSet)}

---

##### `portSets`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallRuleVariables.property.portSets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.networkfirewall.NetworkFirewallPortSet`](#aws-cdk-sdk.networkfirewall.NetworkFirewallPortSet)}

---

### NetworkFirewallStatefulRule <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallStatefulRule: networkfirewall.NetworkFirewallStatefulRule = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRule.property.action"></a>

- *Type:* `string`

---

##### `header`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRule.property.header"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallHeader`](#aws-cdk-sdk.networkfirewall.NetworkFirewallHeader)

---

##### `ruleOptions`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRule.property.ruleOptions"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleOption`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleOption)[]

---

### NetworkFirewallStatefulRuleGroupReference <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRuleGroupReference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallStatefulRuleGroupReference: networkfirewall.NetworkFirewallStatefulRuleGroupReference = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRuleGroupReference.property.resourceArn"></a>

- *Type:* `string`

---

### NetworkFirewallStatelessRule <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallStatelessRule: networkfirewall.NetworkFirewallStatelessRule = { ... }
```

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRule.property.priority"></a>

- *Type:* `number`

---

##### `ruleDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRule.property.ruleDefinition"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleDefinition`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleDefinition)

---

### NetworkFirewallStatelessRuleGroupReference <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRuleGroupReference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallStatelessRuleGroupReference: networkfirewall.NetworkFirewallStatelessRuleGroupReference = { ... }
```

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRuleGroupReference.property.priority"></a>

- *Type:* `number`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRuleGroupReference.property.resourceArn"></a>

- *Type:* `string`

---

### NetworkFirewallStatelessRulesAndCustomActions <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRulesAndCustomActions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallStatelessRulesAndCustomActions: networkfirewall.NetworkFirewallStatelessRulesAndCustomActions = { ... }
```

##### `statelessRules`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRulesAndCustomActions.property.statelessRules"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRule`](#aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRule)[]

---

##### `customActions`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRulesAndCustomActions.property.customActions"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction)[]

---

### NetworkFirewallSubnetMapping <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallSubnetMapping: networkfirewall.NetworkFirewallSubnetMapping = { ... }
```

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping.property.subnetId"></a>

- *Type:* `string`

---

### NetworkFirewallSyncState <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallSyncState: networkfirewall.NetworkFirewallSyncState = { ... }
```

##### `attachment`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState.property.attachment"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallAttachment`](#aws-cdk-sdk.networkfirewall.NetworkFirewallAttachment)

---

##### `config`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState.property.config"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.networkfirewall.NetworkFirewallPerObjectStatus`](#aws-cdk-sdk.networkfirewall.NetworkFirewallPerObjectStatus)}

---

### NetworkFirewallTag <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallTag: networkfirewall.NetworkFirewallTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallTag.property.value"></a>

- *Type:* `string`

---

### NetworkFirewallTagResourceRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallTagResourceRequest: networkfirewall.NetworkFirewallTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

### NetworkFirewallTagResourceResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallTagResourceResponse: networkfirewall.NetworkFirewallTagResourceResponse = { ... }
```

### NetworkFirewallTcpFlagField <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallTcpFlagField"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallTcpFlagField: networkfirewall.NetworkFirewallTcpFlagField = { ... }
```

##### `flags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallTcpFlagField.property.flags"></a>

- *Type:* `string`[]

---

##### `masks`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallTcpFlagField.property.masks"></a>

- *Type:* `string`[]

---

### NetworkFirewallUntagResourceRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUntagResourceRequest: networkfirewall.NetworkFirewallUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### NetworkFirewallUntagResourceResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUntagResourceResponse: networkfirewall.NetworkFirewallUntagResourceResponse = { ... }
```

### NetworkFirewallUpdateFirewallDeleteProtectionRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateFirewallDeleteProtectionRequest: networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionRequest = { ... }
```

##### `deleteProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionRequest.property.deleteProtection"></a>

- *Type:* `boolean`

---

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionRequest.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionRequest.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateFirewallDeleteProtectionResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateFirewallDeleteProtectionResponse: networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionResponse = { ... }
```

##### `deleteProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionResponse.property.deleteProtection"></a>

- *Type:* `boolean`

---

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionResponse.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionResponse.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateFirewallDescriptionRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateFirewallDescriptionRequest: networkfirewall.NetworkFirewallUpdateFirewallDescriptionRequest = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionRequest.property.description"></a>

- *Type:* `string`

---

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionRequest.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionRequest.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateFirewallDescriptionResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateFirewallDescriptionResponse: networkfirewall.NetworkFirewallUpdateFirewallDescriptionResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionResponse.property.description"></a>

- *Type:* `string`

---

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionResponse.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionResponse.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateFirewallPolicyChangeProtectionRequest: networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest = { ... }
```

##### `firewallPolicyChangeProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest.property.firewallPolicyChangeProtection"></a>

- *Type:* `boolean`

---

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateFirewallPolicyChangeProtectionResponse: networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse.property.firewallName"></a>

- *Type:* `string`

---

##### `firewallPolicyChangeProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse.property.firewallPolicyChangeProtection"></a>

- *Type:* `boolean`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateFirewallPolicyRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateFirewallPolicyRequest: networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest = { ... }
```

##### `firewallPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest.property.firewallPolicy"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicy)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest.property.updateToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest.property.description"></a>

- *Type:* `string`

---

##### `dryRun`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest.property.dryRun"></a>

- *Type:* `boolean`

---

##### `firewallPolicyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest.property.firewallPolicyName"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateFirewallPolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateFirewallPolicyResponse: networkfirewall.NetworkFirewallUpdateFirewallPolicyResponse = { ... }
```

##### `firewallPolicyResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyResponse.property.firewallPolicyResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateLoggingConfigurationRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateLoggingConfigurationRequest: networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest.property.firewallName"></a>

- *Type:* `string`

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallLoggingConfiguration`](#aws-cdk-sdk.networkfirewall.NetworkFirewallLoggingConfiguration)

---

### NetworkFirewallUpdateLoggingConfigurationResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateLoggingConfigurationResponse: networkfirewall.NetworkFirewallUpdateLoggingConfigurationResponse = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationResponse.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationResponse.property.firewallName"></a>

- *Type:* `string`

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationResponse.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallLoggingConfiguration`](#aws-cdk-sdk.networkfirewall.NetworkFirewallLoggingConfiguration)

---

### NetworkFirewallUpdateRuleGroupRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateRuleGroupRequest: networkfirewall.NetworkFirewallUpdateRuleGroupRequest = { ... }
```

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest.property.updateToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest.property.description"></a>

- *Type:* `string`

---

##### `dryRun`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest.property.dryRun"></a>

- *Type:* `boolean`

---

##### `ruleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroup`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroup)

---

##### `ruleGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest.property.ruleGroupArn"></a>

- *Type:* `string`

---

##### `ruleGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest.property.ruleGroupName"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest.property.rules"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest.property.type"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateRuleGroupResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateRuleGroupResponse: networkfirewall.NetworkFirewallUpdateRuleGroupResponse = { ... }
```

##### `ruleGroupResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupResponse.property.ruleGroupResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupResponse.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateSubnetChangeProtectionRequest <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateSubnetChangeProtectionRequest: networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionRequest = { ... }
```

##### `subnetChangeProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionRequest.property.subnetChangeProtection"></a>

- *Type:* `boolean`

---

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionRequest.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionRequest.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionRequest.property.updateToken"></a>

- *Type:* `string`

---

### NetworkFirewallUpdateSubnetChangeProtectionResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

const networkFirewallUpdateSubnetChangeProtectionResponse: networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionResponse = { ... }
```

##### `firewallArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionResponse.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionResponse.property.firewallName"></a>

- *Type:* `string`

---

##### `subnetChangeProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionResponse.property.subnetChangeProtection"></a>

- *Type:* `boolean`

---

##### `updateToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionResponse.property.updateToken"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### NetworkFirewallResponsesAssociateFirewallPolicy <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateFirewallPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateFirewallPolicy.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesAssociateFirewallPolicy(__scope: Construct, __resources: string[], __input: NetworkFirewallAssociateFirewallPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateFirewallPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateFirewallPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateFirewallPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateFirewallPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateFirewallPolicy.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateFirewallPolicy.property.firewallName"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateFirewallPolicy.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateFirewallPolicy.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesAssociateSubnets <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateSubnets"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateSubnets.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesAssociateSubnets(__scope: Construct, __resources: string[], __input: NetworkFirewallAssociateSubnetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateSubnets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateSubnets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateSubnets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallAssociateSubnetsRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateSubnets.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateSubnets.property.firewallName"></a>

- *Type:* `string`

---

##### `subnetMappings`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateSubnets.property.subnetMappings"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping)[]

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesAssociateSubnets.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesCreateFirewall <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewall"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewall.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesCreateFirewall(__scope: Construct, __resources: string[], __input: NetworkFirewallCreateFirewallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewall.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewall.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewall.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest)

---



#### Properties <a name="Properties"></a>

##### `firewall`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewall.property.firewall"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall)

---

##### `firewallStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewall.property.firewallStatus"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus)

---


### NetworkFirewallResponsesCreateFirewallFirewall <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall(__scope: Construct, __resources: string[], __input: NetworkFirewallCreateFirewallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest)

---



#### Properties <a name="Properties"></a>

##### `deleteProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.deleteProtection"></a>

- *Type:* `boolean`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.description"></a>

- *Type:* `string`

---

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.firewallId"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.firewallName"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyChangeProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.firewallPolicyChangeProtection"></a>

- *Type:* `boolean`

---

##### `subnetChangeProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.subnetChangeProtection"></a>

- *Type:* `boolean`

---

##### `subnetMappings`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.subnetMappings"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewall.property.vpcId"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesCreateFirewallFirewallStatus <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus(__scope: Construct, __resources: string[], __input: NetworkFirewallCreateFirewallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationSyncStateSummary`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus.property.configurationSyncStateSummary"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus.property.status"></a>

- *Type:* `string`

---

##### `syncStates`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallFirewallStatus.property.syncStates"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState)}

---


### NetworkFirewallResponsesCreateFirewallPolicy <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicy.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesCreateFirewallPolicy(__scope: Construct, __resources: string[], __input: NetworkFirewallCreateFirewallPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallPolicyResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicy.property.firewallPolicyResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicy.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse(__scope: Construct, __resources: string[], __input: NetworkFirewallCreateFirewallPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCreateFirewallPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse.property.description"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse.property.firewallPolicyId"></a>

- *Type:* `string`

---

##### `firewallPolicyName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse.property.firewallPolicyName"></a>

- *Type:* `string`

---

##### `firewallPolicyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse.property.firewallPolicyStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---


### NetworkFirewallResponsesCreateRuleGroup <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroup.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesCreateRuleGroup(__scope: Construct, __resources: string[], __input: NetworkFirewallCreateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `ruleGroupResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroup.property.ruleGroupResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroup.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse(__scope: Construct, __resources: string[], __input: NetworkFirewallCreateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCreateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.property.capacity"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.property.description"></a>

- *Type:* `string`

---

##### `ruleGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.property.ruleGroupArn"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.property.ruleGroupId"></a>

- *Type:* `string`

---

##### `ruleGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.property.ruleGroupName"></a>

- *Type:* `string`

---

##### `ruleGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.property.ruleGroupStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse.property.type"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesDeleteFirewall <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewall"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewall.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDeleteFirewall(__scope: Construct, __resources: string[], __input: NetworkFirewallDeleteFirewallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewall.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewall.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewall.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest)

---



#### Properties <a name="Properties"></a>

##### `firewall`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewall.property.firewall"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall)

---

##### `firewallStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewall.property.firewallStatus"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus)

---


### NetworkFirewallResponsesDeleteFirewallFirewall <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall(__scope: Construct, __resources: string[], __input: NetworkFirewallDeleteFirewallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest)

---



#### Properties <a name="Properties"></a>

##### `deleteProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.deleteProtection"></a>

- *Type:* `boolean`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.description"></a>

- *Type:* `string`

---

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.firewallId"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.firewallName"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyChangeProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.firewallPolicyChangeProtection"></a>

- *Type:* `boolean`

---

##### `subnetChangeProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.subnetChangeProtection"></a>

- *Type:* `boolean`

---

##### `subnetMappings`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.subnetMappings"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewall.property.vpcId"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesDeleteFirewallFirewallStatus <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus(__scope: Construct, __resources: string[], __input: NetworkFirewallDeleteFirewallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationSyncStateSummary`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus.property.configurationSyncStateSummary"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus.property.status"></a>

- *Type:* `string`

---

##### `syncStates`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallFirewallStatus.property.syncStates"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState)}

---


### NetworkFirewallResponsesDeleteFirewallPolicy <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicy.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicy(__scope: Construct, __resources: string[], __input: NetworkFirewallDeleteFirewallPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallPolicyResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicy.property.firewallPolicyResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse)

---


### NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse(__scope: Construct, __resources: string[], __input: NetworkFirewallDeleteFirewallPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteFirewallPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse.property.description"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse.property.firewallPolicyId"></a>

- *Type:* `string`

---

##### `firewallPolicyName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse.property.firewallPolicyName"></a>

- *Type:* `string`

---

##### `firewallPolicyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse.property.firewallPolicyStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---


### NetworkFirewallResponsesDeleteRuleGroup <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroup.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDeleteRuleGroup(__scope: Construct, __resources: string[], __input: NetworkFirewallDeleteRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `ruleGroupResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroup.property.ruleGroupResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse)

---


### NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse(__scope: Construct, __resources: string[], __input: NetworkFirewallDeleteRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDeleteRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.property.capacity"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.property.description"></a>

- *Type:* `string`

---

##### `ruleGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.property.ruleGroupArn"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.property.ruleGroupId"></a>

- *Type:* `string`

---

##### `ruleGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.property.ruleGroupName"></a>

- *Type:* `string`

---

##### `ruleGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.property.ruleGroupStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse.property.type"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesDescribeFirewall <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewall"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewall.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeFirewall(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeFirewallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewall.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewall.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewall.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest)

---



#### Properties <a name="Properties"></a>

##### `firewall`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewall.property.firewall"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall)

---

##### `firewallStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewall.property.firewallStatus"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewall.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesDescribeFirewallFirewall <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeFirewallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest)

---



#### Properties <a name="Properties"></a>

##### `deleteProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.deleteProtection"></a>

- *Type:* `boolean`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.description"></a>

- *Type:* `string`

---

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.firewallId"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.firewallName"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyChangeProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.firewallPolicyChangeProtection"></a>

- *Type:* `boolean`

---

##### `subnetChangeProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.subnetChangeProtection"></a>

- *Type:* `boolean`

---

##### `subnetMappings`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.subnetMappings"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewall.property.vpcId"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesDescribeFirewallFirewallStatus <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeFirewallRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationSyncStateSummary`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus.property.configurationSyncStateSummary"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus.property.status"></a>

- *Type:* `string`

---

##### `syncStates`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallFirewallStatus.property.syncStates"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSyncState)}

---


### NetworkFirewallResponsesDescribeFirewallPolicy <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicy.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicy(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeFirewallPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicy.property.firewallPolicy"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy)

---

##### `firewallPolicyResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicy.property.firewallPolicyResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicy.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeFirewallPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `statefulRuleGroupReferences`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy.property.statefulRuleGroupReferences"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRuleGroupReference`](#aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRuleGroupReference)[]

---

##### `statelessCustomActions`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy.property.statelessCustomActions"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction)[]

---

##### `statelessDefaultActions`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy.property.statelessDefaultActions"></a>

- *Type:* `string`[]

---

##### `statelessFragmentDefaultActions`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy.property.statelessFragmentDefaultActions"></a>

- *Type:* `string`[]

---

##### `statelessRuleGroupReferences`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy.property.statelessRuleGroupReferences"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRuleGroupReference`](#aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRuleGroupReference)[]

---


### NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeFirewallPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeFirewallPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse.property.description"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse.property.firewallPolicyId"></a>

- *Type:* `string`

---

##### `firewallPolicyName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse.property.firewallPolicyName"></a>

- *Type:* `string`

---

##### `firewallPolicyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse.property.firewallPolicyStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---


### NetworkFirewallResponsesDescribeLoggingConfiguration <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfiguration.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeLoggingConfiguration(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfiguration.property.firewallArn"></a>

- *Type:* `string`

---

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfiguration.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration)

---


### NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallLogDestinationConfig`](#aws-cdk-sdk.networkfirewall.NetworkFirewallLogDestinationConfig)[]

---


### NetworkFirewallResponsesDescribeResourcePolicy <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeResourcePolicy.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeResourcePolicy(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeResourcePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeResourcePolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeResourcePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeResourcePolicy.property.policy"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesDescribeRuleGroup <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroup.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeRuleGroup(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `ruleGroup`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroup.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroup`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroup)

---

##### `ruleGroupResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroup.property.ruleGroupResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroup.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesDescribeRuleGroupRuleGroup <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroup.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroup(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `rulesSource`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroup.property.rulesSource"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource)

---

##### `ruleVariables`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroup.property.ruleVariables"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables)

---


### NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.property.capacity"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.property.description"></a>

- *Type:* `string`

---

##### `ruleGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.property.ruleGroupArn"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.property.ruleGroupId"></a>

- *Type:* `string`

---

##### `ruleGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.property.ruleGroupName"></a>

- *Type:* `string`

---

##### `ruleGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.property.ruleGroupStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse.property.type"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `rulesSourceList`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource.property.rulesSourceList"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList)

---

##### `rulesString`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource.property.rulesString"></a>

- *Type:* `string`

---

##### `statefulRules`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource.property.statefulRules"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRule`](#aws-cdk-sdk.networkfirewall.NetworkFirewallStatefulRule)[]

---

##### `statelessRulesAndCustomActions`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource.property.statelessRulesAndCustomActions"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions)

---


### NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `generatedRulesType`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList.property.generatedRulesType"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList.property.targets"></a>

- *Type:* `string`[]

---

##### `targetTypes`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList.property.targetTypes"></a>

- *Type:* `string`[]

---


### NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `customActions`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.property.customActions"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction`](#aws-cdk-sdk.networkfirewall.NetworkFirewallCustomAction)[]

---

##### `statelessRules`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.property.statelessRules"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRule`](#aws-cdk-sdk.networkfirewall.NetworkFirewallStatelessRule)[]

---


### NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables(__scope: Construct, __resources: string[], __input: NetworkFirewallDescribeRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDescribeRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSets`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables.property.ipSets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.networkfirewall.NetworkFirewallIpSet`](#aws-cdk-sdk.networkfirewall.NetworkFirewallIpSet)}

---

##### `portSets`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables.property.portSets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.networkfirewall.NetworkFirewallPortSet`](#aws-cdk-sdk.networkfirewall.NetworkFirewallPortSet)}

---


### NetworkFirewallResponsesDisassociateSubnets <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDisassociateSubnets"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDisassociateSubnets.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesDisassociateSubnets(__scope: Construct, __resources: string[], __input: NetworkFirewallDisassociateSubnetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDisassociateSubnets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDisassociateSubnets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDisassociateSubnets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallDisassociateSubnetsRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDisassociateSubnets.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDisassociateSubnets.property.firewallName"></a>

- *Type:* `string`

---

##### `subnetMappings`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDisassociateSubnets.property.subnetMappings"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping`](#aws-cdk-sdk.networkfirewall.NetworkFirewallSubnetMapping)[]

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesDisassociateSubnets.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesListFirewallPolicies <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewallPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewallPolicies.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesListFirewallPolicies(__scope: Construct, __resources: string[], __input: NetworkFirewallListFirewallPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewallPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewallPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewallPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallPoliciesRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewallPolicies.property.firewallPolicies"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyMetadata`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallPolicyMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewallPolicies.property.nextToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesListFirewalls <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewalls"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewalls.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesListFirewalls(__scope: Construct, __resources: string[], __input: NetworkFirewallListFirewallsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewalls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewalls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewalls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallListFirewallsRequest)

---



#### Properties <a name="Properties"></a>

##### `firewalls`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewalls.property.firewalls"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallMetadata`](#aws-cdk-sdk.networkfirewall.NetworkFirewallFirewallMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListFirewalls.property.nextToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesListRuleGroups <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListRuleGroups"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListRuleGroups.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesListRuleGroups(__scope: Construct, __resources: string[], __input: NetworkFirewallListRuleGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListRuleGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListRuleGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListRuleGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallListRuleGroupsRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallListRuleGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListRuleGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListRuleGroups.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupMetadata`](#aws-cdk-sdk.networkfirewall.NetworkFirewallRuleGroupMetadata)[]

---


### NetworkFirewallResponsesListTagsForResource <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListTagsForResource.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: NetworkFirewallListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---


### NetworkFirewallResponsesUpdateFirewallDeleteProtection <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDeleteProtection"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDeleteProtection.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesUpdateFirewallDeleteProtection(__scope: Construct, __resources: string[], __input: NetworkFirewallUpdateFirewallDeleteProtectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDeleteProtection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDeleteProtection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDeleteProtection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDeleteProtectionRequest)

---



#### Properties <a name="Properties"></a>

##### `deleteProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDeleteProtection.property.deleteProtection"></a>

- *Type:* `boolean`

---

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDeleteProtection.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDeleteProtection.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDeleteProtection.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesUpdateFirewallDescription <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDescription"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDescription.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesUpdateFirewallDescription(__scope: Construct, __resources: string[], __input: NetworkFirewallUpdateFirewallDescriptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallDescriptionRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDescription.property.description"></a>

- *Type:* `string`

---

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDescription.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDescription.property.firewallName"></a>

- *Type:* `string`

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallDescription.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesUpdateFirewallPolicy <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicy.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicy(__scope: Construct, __resources: string[], __input: NetworkFirewallUpdateFirewallPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallPolicyResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicy.property.firewallPolicyResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicy.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection(__scope: Construct, __resources: string[], __input: NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection.property.firewallName"></a>

- *Type:* `string`

---

##### `firewallPolicyChangeProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection.property.firewallPolicyChangeProtection"></a>

- *Type:* `boolean`

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse(__scope: Construct, __resources: string[], __input: NetworkFirewallUpdateFirewallPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateFirewallPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse.property.description"></a>

- *Type:* `string`

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse.property.firewallPolicyArn"></a>

- *Type:* `string`

---

##### `firewallPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse.property.firewallPolicyId"></a>

- *Type:* `string`

---

##### `firewallPolicyName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse.property.firewallPolicyName"></a>

- *Type:* `string`

---

##### `firewallPolicyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse.property.firewallPolicyStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---


### NetworkFirewallResponsesUpdateLoggingConfiguration <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfiguration.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesUpdateLoggingConfiguration(__scope: Construct, __resources: string[], __input: NetworkFirewallUpdateLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfiguration.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfiguration.property.firewallName"></a>

- *Type:* `string`

---

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfiguration.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration)

---


### NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration(__scope: Construct, __resources: string[], __input: NetworkFirewallUpdateLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallLogDestinationConfig`](#aws-cdk-sdk.networkfirewall.NetworkFirewallLogDestinationConfig)[]

---


### NetworkFirewallResponsesUpdateRuleGroup <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroup.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesUpdateRuleGroup(__scope: Construct, __resources: string[], __input: NetworkFirewallUpdateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `ruleGroupResponse`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroup.property.ruleGroupResponse"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse`](#aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse)

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroup.property.updateToken"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse(__scope: Construct, __resources: string[], __input: NetworkFirewallUpdateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `capacity`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.property.capacity"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.property.description"></a>

- *Type:* `string`

---

##### `ruleGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.property.ruleGroupArn"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.property.ruleGroupId"></a>

- *Type:* `string`

---

##### `ruleGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.property.ruleGroupName"></a>

- *Type:* `string`

---

##### `ruleGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.property.ruleGroupStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallTag`](#aws-cdk-sdk.networkfirewall.NetworkFirewallTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse.property.type"></a>

- *Type:* `string`

---


### NetworkFirewallResponsesUpdateSubnetChangeProtection <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateSubnetChangeProtection"></a>

#### Initializer <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateSubnetChangeProtection.Initializer"></a>

```typescript
import { networkfirewall } from 'aws-cdk-sdk'

new networkfirewall.NetworkFirewallResponsesUpdateSubnetChangeProtection(__scope: Construct, __resources: string[], __input: NetworkFirewallUpdateSubnetChangeProtectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateSubnetChangeProtection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateSubnetChangeProtection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateSubnetChangeProtection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionRequest`](#aws-cdk-sdk.networkfirewall.NetworkFirewallUpdateSubnetChangeProtectionRequest)

---



#### Properties <a name="Properties"></a>

##### `firewallArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateSubnetChangeProtection.property.firewallArn"></a>

- *Type:* `string`

---

##### `firewallName`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateSubnetChangeProtection.property.firewallName"></a>

- *Type:* `string`

---

##### `subnetChangeProtection`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateSubnetChangeProtection.property.subnetChangeProtection"></a>

- *Type:* `boolean`

---

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkfirewall.NetworkFirewallResponsesUpdateSubnetChangeProtection.property.updateToken"></a>

- *Type:* `string`

---



