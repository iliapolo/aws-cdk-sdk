# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DlmClient <a name="aws-cdk-sdk.dlm.DlmClient"></a>

#### Initializer <a name="aws-cdk-sdk.dlm.DlmClient.Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

new dlm.DlmClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createLifecyclePolicy` <a name="aws-cdk-sdk.dlm.DlmClient.createLifecyclePolicy"></a>

```typescript
public createLifecyclePolicy(input: DlmCreateLifecyclePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyRequest`](#aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyRequest)

---

##### `deleteLifecyclePolicy` <a name="aws-cdk-sdk.dlm.DlmClient.deleteLifecyclePolicy"></a>

```typescript
public deleteLifecyclePolicy(input: DlmDeleteLifecyclePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmDeleteLifecyclePolicyRequest`](#aws-cdk-sdk.dlm.DlmDeleteLifecyclePolicyRequest)

---

##### `fetchLifecyclePolicies` <a name="aws-cdk-sdk.dlm.DlmClient.fetchLifecyclePolicies"></a>

```typescript
public fetchLifecyclePolicies(input: DlmGetLifecyclePoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesRequest`](#aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesRequest)

---

##### `fetchLifecyclePolicy` <a name="aws-cdk-sdk.dlm.DlmClient.fetchLifecyclePolicy"></a>

```typescript
public fetchLifecyclePolicy(input: DlmGetLifecyclePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest`](#aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.dlm.DlmClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: DlmListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmListTagsForResourceRequest`](#aws-cdk-sdk.dlm.DlmListTagsForResourceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.dlm.DlmClient.tagResource"></a>

```typescript
public tagResource(input: DlmTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmTagResourceRequest`](#aws-cdk-sdk.dlm.DlmTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.dlm.DlmClient.untagResource"></a>

```typescript
public untagResource(input: DlmUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmUntagResourceRequest`](#aws-cdk-sdk.dlm.DlmUntagResourceRequest)

---

##### `updateLifecyclePolicy` <a name="aws-cdk-sdk.dlm.DlmClient.updateLifecyclePolicy"></a>

```typescript
public updateLifecyclePolicy(input: DlmUpdateLifecyclePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmUpdateLifecyclePolicyRequest`](#aws-cdk-sdk.dlm.DlmUpdateLifecyclePolicyRequest)

---




## Structs <a name="Structs"></a>

### DlmCreateLifecyclePolicyRequest <a name="aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmCreateLifecyclePolicyRequest: dlm.DlmCreateLifecyclePolicyRequest = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyRequest.property.description"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyRequest.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `policyDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyRequest.property.policyDetails"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmPolicyDetails`](#aws-cdk-sdk.dlm.DlmPolicyDetails)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyRequest.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DlmCreateLifecyclePolicyResponse <a name="aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmCreateLifecyclePolicyResponse: dlm.DlmCreateLifecyclePolicyResponse = { ... }
```

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyResponse.property.policyId"></a>

- *Type:* `string`

---

### DlmCreateRule <a name="aws-cdk-sdk.dlm.DlmCreateRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmCreateRule: dlm.DlmCreateRule = { ... }
```

##### `cronExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCreateRule.property.cronExpression"></a>

- *Type:* `string`

---

##### `interval`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCreateRule.property.interval"></a>

- *Type:* `number`

---

##### `intervalUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCreateRule.property.intervalUnit"></a>

- *Type:* `string`

---

##### `times`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCreateRule.property.times"></a>

- *Type:* `string`[]

---

### DlmCrossRegionCopyRetainRule <a name="aws-cdk-sdk.dlm.DlmCrossRegionCopyRetainRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmCrossRegionCopyRetainRule: dlm.DlmCrossRegionCopyRetainRule = { ... }
```

##### `interval`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCrossRegionCopyRetainRule.property.interval"></a>

- *Type:* `number`

---

##### `intervalUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCrossRegionCopyRetainRule.property.intervalUnit"></a>

- *Type:* `string`

---

### DlmCrossRegionCopyRule <a name="aws-cdk-sdk.dlm.DlmCrossRegionCopyRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmCrossRegionCopyRule: dlm.DlmCrossRegionCopyRule = { ... }
```

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmCrossRegionCopyRule.property.encrypted"></a>

- *Type:* `boolean`

---

##### `targetRegion`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmCrossRegionCopyRule.property.targetRegion"></a>

- *Type:* `string`

---

##### `cmkArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCrossRegionCopyRule.property.cmkArn"></a>

- *Type:* `string`

---

##### `copyTags`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCrossRegionCopyRule.property.copyTags"></a>

- *Type:* `boolean`

---

##### `retainRule`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmCrossRegionCopyRule.property.retainRule"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmCrossRegionCopyRetainRule`](#aws-cdk-sdk.dlm.DlmCrossRegionCopyRetainRule)

---

### DlmDeleteLifecyclePolicyRequest <a name="aws-cdk-sdk.dlm.DlmDeleteLifecyclePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmDeleteLifecyclePolicyRequest: dlm.DlmDeleteLifecyclePolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmDeleteLifecyclePolicyRequest.property.policyId"></a>

- *Type:* `string`

---

### DlmDeleteLifecyclePolicyResponse <a name="aws-cdk-sdk.dlm.DlmDeleteLifecyclePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmDeleteLifecyclePolicyResponse: dlm.DlmDeleteLifecyclePolicyResponse = { ... }
```

### DlmFastRestoreRule <a name="aws-cdk-sdk.dlm.DlmFastRestoreRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmFastRestoreRule: dlm.DlmFastRestoreRule = { ... }
```

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmFastRestoreRule.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmFastRestoreRule.property.count"></a>

- *Type:* `number`

---

##### `interval`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmFastRestoreRule.property.interval"></a>

- *Type:* `number`

---

##### `intervalUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmFastRestoreRule.property.intervalUnit"></a>

- *Type:* `string`

---

### DlmGetLifecyclePoliciesRequest <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmGetLifecyclePoliciesRequest: dlm.DlmGetLifecyclePoliciesRequest = { ... }
```

##### `policyIds`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesRequest.property.policyIds"></a>

- *Type:* `string`[]

---

##### `resourceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesRequest.property.resourceTypes"></a>

- *Type:* `string`[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesRequest.property.state"></a>

- *Type:* `string`

---

##### `tagsToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesRequest.property.tagsToAdd"></a>

- *Type:* `string`[]

---

##### `targetTags`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesRequest.property.targetTags"></a>

- *Type:* `string`[]

---

### DlmGetLifecyclePoliciesResponse <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmGetLifecyclePoliciesResponse: dlm.DlmGetLifecyclePoliciesResponse = { ... }
```

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesResponse.property.policies"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmLifecyclePolicySummary`](#aws-cdk-sdk.dlm.DlmLifecyclePolicySummary)[]

---

### DlmGetLifecyclePolicyRequest <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmGetLifecyclePolicyRequest: dlm.DlmGetLifecyclePolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest.property.policyId"></a>

- *Type:* `string`

---

### DlmGetLifecyclePolicyResponse <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmGetLifecyclePolicyResponse: dlm.DlmGetLifecyclePolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmGetLifecyclePolicyResponse.property.policy"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmLifecyclePolicy`](#aws-cdk-sdk.dlm.DlmLifecyclePolicy)

---

### DlmLifecyclePolicy <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmLifecyclePolicy: dlm.DlmLifecyclePolicy = { ... }
```

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateModified`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy.property.dateModified"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy.property.description"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy.property.policyDetails"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmPolicyDetails`](#aws-cdk-sdk.dlm.DlmPolicyDetails)

---

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy.property.policyId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy.property.state"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicy.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DlmLifecyclePolicySummary <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmLifecyclePolicySummary: dlm.DlmLifecyclePolicySummary = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicySummary.property.description"></a>

- *Type:* `string`

---

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicySummary.property.policyId"></a>

- *Type:* `string`

---

##### `policyType`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicySummary.property.policyType"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicySummary.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmLifecyclePolicySummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DlmListTagsForResourceRequest <a name="aws-cdk-sdk.dlm.DlmListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmListTagsForResourceRequest: dlm.DlmListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### DlmListTagsForResourceResponse <a name="aws-cdk-sdk.dlm.DlmListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmListTagsForResourceResponse: dlm.DlmListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DlmParameters <a name="aws-cdk-sdk.dlm.DlmParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmParameters: dlm.DlmParameters = { ... }
```

##### `excludeBootVolume`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmParameters.property.excludeBootVolume"></a>

- *Type:* `boolean`

---

##### `noReboot`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmParameters.property.noReboot"></a>

- *Type:* `boolean`

---

### DlmPolicyDetails <a name="aws-cdk-sdk.dlm.DlmPolicyDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmPolicyDetails: dlm.DlmPolicyDetails = { ... }
```

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmPolicyDetails.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmParameters`](#aws-cdk-sdk.dlm.DlmParameters)

---

##### `policyType`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmPolicyDetails.property.policyType"></a>

- *Type:* `string`

---

##### `resourceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmPolicyDetails.property.resourceTypes"></a>

- *Type:* `string`[]

---

##### `schedules`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmPolicyDetails.property.schedules"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmSchedule`](#aws-cdk-sdk.dlm.DlmSchedule)[]

---

##### `targetTags`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmPolicyDetails.property.targetTags"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmTag`](#aws-cdk-sdk.dlm.DlmTag)[]

---

### DlmRetainRule <a name="aws-cdk-sdk.dlm.DlmRetainRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmRetainRule: dlm.DlmRetainRule = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmRetainRule.property.count"></a>

- *Type:* `number`

---

##### `interval`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmRetainRule.property.interval"></a>

- *Type:* `number`

---

##### `intervalUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmRetainRule.property.intervalUnit"></a>

- *Type:* `string`

---

### DlmSchedule <a name="aws-cdk-sdk.dlm.DlmSchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmSchedule: dlm.DlmSchedule = { ... }
```

##### `copyTags`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmSchedule.property.copyTags"></a>

- *Type:* `boolean`

---

##### `createRule`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmSchedule.property.createRule"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmCreateRule`](#aws-cdk-sdk.dlm.DlmCreateRule)

---

##### `crossRegionCopyRules`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmSchedule.property.crossRegionCopyRules"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmCrossRegionCopyRule`](#aws-cdk-sdk.dlm.DlmCrossRegionCopyRule)[]

---

##### `fastRestoreRule`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmSchedule.property.fastRestoreRule"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmFastRestoreRule`](#aws-cdk-sdk.dlm.DlmFastRestoreRule)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmSchedule.property.name"></a>

- *Type:* `string`

---

##### `retainRule`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmSchedule.property.retainRule"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmRetainRule`](#aws-cdk-sdk.dlm.DlmRetainRule)

---

##### `tagsToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmSchedule.property.tagsToAdd"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmTag`](#aws-cdk-sdk.dlm.DlmTag)[]

---

##### `variableTags`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmSchedule.property.variableTags"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmTag`](#aws-cdk-sdk.dlm.DlmTag)[]

---

### DlmTag <a name="aws-cdk-sdk.dlm.DlmTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmTag: dlm.DlmTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmTag.property.value"></a>

- *Type:* `string`

---

### DlmTagResourceRequest <a name="aws-cdk-sdk.dlm.DlmTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmTagResourceRequest: dlm.DlmTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DlmTagResourceResponse <a name="aws-cdk-sdk.dlm.DlmTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmTagResourceResponse: dlm.DlmTagResourceResponse = { ... }
```

### DlmUntagResourceRequest <a name="aws-cdk-sdk.dlm.DlmUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmUntagResourceRequest: dlm.DlmUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### DlmUntagResourceResponse <a name="aws-cdk-sdk.dlm.DlmUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmUntagResourceResponse: dlm.DlmUntagResourceResponse = { ... }
```

### DlmUpdateLifecyclePolicyRequest <a name="aws-cdk-sdk.dlm.DlmUpdateLifecyclePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmUpdateLifecyclePolicyRequest: dlm.DlmUpdateLifecyclePolicyRequest = { ... }
```

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DlmUpdateLifecyclePolicyRequest.property.policyId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmUpdateLifecyclePolicyRequest.property.description"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmUpdateLifecyclePolicyRequest.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `policyDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmUpdateLifecyclePolicyRequest.property.policyDetails"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmPolicyDetails`](#aws-cdk-sdk.dlm.DlmPolicyDetails)

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.dlm.DlmUpdateLifecyclePolicyRequest.property.state"></a>

- *Type:* `string`

---

### DlmUpdateLifecyclePolicyResponse <a name="aws-cdk-sdk.dlm.DlmUpdateLifecyclePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

const dlmUpdateLifecyclePolicyResponse: dlm.DlmUpdateLifecyclePolicyResponse = { ... }
```

## Classes <a name="Classes"></a>

### DLMResponsesCreateLifecyclePolicy <a name="aws-cdk-sdk.dlm.DLMResponsesCreateLifecyclePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.dlm.DLMResponsesCreateLifecyclePolicy.Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

new dlm.DLMResponsesCreateLifecyclePolicy(__scope: Construct, __resources: string[], __input: DlmCreateLifecyclePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesCreateLifecyclePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesCreateLifecyclePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesCreateLifecyclePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyRequest`](#aws-cdk-sdk.dlm.DlmCreateLifecyclePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesCreateLifecyclePolicy.property.policyId"></a>

- *Type:* `string`

---


### DLMResponsesFetchLifecyclePolicies <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicies"></a>

#### Initializer <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicies.Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

new dlm.DLMResponsesFetchLifecyclePolicies(__scope: Construct, __resources: string[], __input: DlmGetLifecyclePoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesRequest`](#aws-cdk-sdk.dlm.DlmGetLifecyclePoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicies.property.policies"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmLifecyclePolicySummary`](#aws-cdk-sdk.dlm.DlmLifecyclePolicySummary)[]

---


### DLMResponsesFetchLifecyclePolicy <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicy.Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

new dlm.DLMResponsesFetchLifecyclePolicy(__scope: Construct, __resources: string[], __input: DlmGetLifecyclePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest`](#aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy`](#aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy)

---


### DLMResponsesFetchLifecyclePolicyPolicy <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

new dlm.DLMResponsesFetchLifecyclePolicyPolicy(__scope: Construct, __resources: string[], __input: DlmGetLifecyclePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest`](#aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateModified`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.property.dateModified"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.property.description"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.property.policyArn"></a>

- *Type:* `string`

---

##### `policyDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.property.policyDetails"></a>

- *Type:* [`aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails`](#aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails)

---

##### `policyId`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.property.policyId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.property.state"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicy.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails.Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

new dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails(__scope: Construct, __resources: string[], __input: DlmGetLifecyclePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest`](#aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters`](#aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters)

---

##### `policyType`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails.property.policyType"></a>

- *Type:* `string`

---

##### `resourceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails.property.resourceTypes"></a>

- *Type:* `string`[]

---

##### `schedules`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails.property.schedules"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmSchedule`](#aws-cdk-sdk.dlm.DlmSchedule)[]

---

##### `targetTags`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails.property.targetTags"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmTag`](#aws-cdk-sdk.dlm.DlmTag)[]

---


### DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters"></a>

#### Initializer <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters.Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

new dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters(__scope: Construct, __resources: string[], __input: DlmGetLifecyclePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest`](#aws-cdk-sdk.dlm.DlmGetLifecyclePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `excludeBootVolume`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters.property.excludeBootVolume"></a>

- *Type:* `boolean`

---

##### `noReboot`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters.property.noReboot"></a>

- *Type:* `boolean`

---


### DLMResponsesListTagsForResource <a name="aws-cdk-sdk.dlm.DLMResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.dlm.DLMResponsesListTagsForResource.Initializer"></a>

```typescript
import { dlm } from 'aws-cdk-sdk'

new dlm.DLMResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: DlmListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dlm.DlmListTagsForResourceRequest`](#aws-cdk-sdk.dlm.DlmListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dlm.DLMResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---



