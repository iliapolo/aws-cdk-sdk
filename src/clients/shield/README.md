# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ShieldClient <a name="aws-cdk-sdk.shield.ShieldClient"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldClient.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateDrtLogBucket` <a name="aws-cdk-sdk.shield.ShieldClient.associateDrtLogBucket"></a>

```typescript
public associateDrtLogBucket(input: ShieldAssociateDrtLogBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAssociateDrtLogBucketRequest`](#aws-cdk-sdk.shield.ShieldAssociateDrtLogBucketRequest)

---

##### `associateDrtRole` <a name="aws-cdk-sdk.shield.ShieldClient.associateDrtRole"></a>

```typescript
public associateDrtRole(input: ShieldAssociateDrtRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAssociateDrtRoleRequest`](#aws-cdk-sdk.shield.ShieldAssociateDrtRoleRequest)

---

##### `associateHealthCheck` <a name="aws-cdk-sdk.shield.ShieldClient.associateHealthCheck"></a>

```typescript
public associateHealthCheck(input: ShieldAssociateHealthCheckRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAssociateHealthCheckRequest`](#aws-cdk-sdk.shield.ShieldAssociateHealthCheckRequest)

---

##### `associateProactiveEngagementDetails` <a name="aws-cdk-sdk.shield.ShieldClient.associateProactiveEngagementDetails"></a>

```typescript
public associateProactiveEngagementDetails(input: ShieldAssociateProactiveEngagementDetailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAssociateProactiveEngagementDetailsRequest`](#aws-cdk-sdk.shield.ShieldAssociateProactiveEngagementDetailsRequest)

---

##### `createProtection` <a name="aws-cdk-sdk.shield.ShieldClient.createProtection"></a>

```typescript
public createProtection(input: ShieldCreateProtectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldCreateProtectionRequest`](#aws-cdk-sdk.shield.ShieldCreateProtectionRequest)

---

##### `createProtectionGroup` <a name="aws-cdk-sdk.shield.ShieldClient.createProtectionGroup"></a>

```typescript
public createProtectionGroup(input: ShieldCreateProtectionGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldCreateProtectionGroupRequest`](#aws-cdk-sdk.shield.ShieldCreateProtectionGroupRequest)

---

##### `createSubscription` <a name="aws-cdk-sdk.shield.ShieldClient.createSubscription"></a>

```typescript
public createSubscription()
```

##### `deleteProtection` <a name="aws-cdk-sdk.shield.ShieldClient.deleteProtection"></a>

```typescript
public deleteProtection(input: ShieldDeleteProtectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDeleteProtectionRequest`](#aws-cdk-sdk.shield.ShieldDeleteProtectionRequest)

---

##### `deleteProtectionGroup` <a name="aws-cdk-sdk.shield.ShieldClient.deleteProtectionGroup"></a>

```typescript
public deleteProtectionGroup(input: ShieldDeleteProtectionGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDeleteProtectionGroupRequest`](#aws-cdk-sdk.shield.ShieldDeleteProtectionGroupRequest)

---

##### `deleteSubscription` <a name="aws-cdk-sdk.shield.ShieldClient.deleteSubscription"></a>

```typescript
public deleteSubscription()
```

##### `describeAttack` <a name="aws-cdk-sdk.shield.ShieldClient.describeAttack"></a>

```typescript
public describeAttack(input: ShieldDescribeAttackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDescribeAttackRequest`](#aws-cdk-sdk.shield.ShieldDescribeAttackRequest)

---

##### `describeAttackStatistics` <a name="aws-cdk-sdk.shield.ShieldClient.describeAttackStatistics"></a>

```typescript
public describeAttackStatistics()
```

##### `describeDrtAccess` <a name="aws-cdk-sdk.shield.ShieldClient.describeDrtAccess"></a>

```typescript
public describeDrtAccess()
```

##### `describeEmergencyContactSettings` <a name="aws-cdk-sdk.shield.ShieldClient.describeEmergencyContactSettings"></a>

```typescript
public describeEmergencyContactSettings()
```

##### `describeProtection` <a name="aws-cdk-sdk.shield.ShieldClient.describeProtection"></a>

```typescript
public describeProtection(input: ShieldDescribeProtectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDescribeProtectionRequest`](#aws-cdk-sdk.shield.ShieldDescribeProtectionRequest)

---

##### `describeProtectionGroup` <a name="aws-cdk-sdk.shield.ShieldClient.describeProtectionGroup"></a>

```typescript
public describeProtectionGroup(input: ShieldDescribeProtectionGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDescribeProtectionGroupRequest`](#aws-cdk-sdk.shield.ShieldDescribeProtectionGroupRequest)

---

##### `describeSubscription` <a name="aws-cdk-sdk.shield.ShieldClient.describeSubscription"></a>

```typescript
public describeSubscription()
```

##### `disableProactiveEngagement` <a name="aws-cdk-sdk.shield.ShieldClient.disableProactiveEngagement"></a>

```typescript
public disableProactiveEngagement()
```

##### `disassociateDrtLogBucket` <a name="aws-cdk-sdk.shield.ShieldClient.disassociateDrtLogBucket"></a>

```typescript
public disassociateDrtLogBucket(input: ShieldDisassociateDrtLogBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDisassociateDrtLogBucketRequest`](#aws-cdk-sdk.shield.ShieldDisassociateDrtLogBucketRequest)

---

##### `disassociateDrtRole` <a name="aws-cdk-sdk.shield.ShieldClient.disassociateDrtRole"></a>

```typescript
public disassociateDrtRole()
```

##### `disassociateHealthCheck` <a name="aws-cdk-sdk.shield.ShieldClient.disassociateHealthCheck"></a>

```typescript
public disassociateHealthCheck(input: ShieldDisassociateHealthCheckRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDisassociateHealthCheckRequest`](#aws-cdk-sdk.shield.ShieldDisassociateHealthCheckRequest)

---

##### `enableProactiveEngagement` <a name="aws-cdk-sdk.shield.ShieldClient.enableProactiveEngagement"></a>

```typescript
public enableProactiveEngagement()
```

##### `fetchSubscriptionState` <a name="aws-cdk-sdk.shield.ShieldClient.fetchSubscriptionState"></a>

```typescript
public fetchSubscriptionState()
```

##### `listAttacks` <a name="aws-cdk-sdk.shield.ShieldClient.listAttacks"></a>

```typescript
public listAttacks(input: ShieldListAttacksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldListAttacksRequest`](#aws-cdk-sdk.shield.ShieldListAttacksRequest)

---

##### `listProtectionGroups` <a name="aws-cdk-sdk.shield.ShieldClient.listProtectionGroups"></a>

```typescript
public listProtectionGroups(input: ShieldListProtectionGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldListProtectionGroupsRequest`](#aws-cdk-sdk.shield.ShieldListProtectionGroupsRequest)

---

##### `listProtections` <a name="aws-cdk-sdk.shield.ShieldClient.listProtections"></a>

```typescript
public listProtections(input: ShieldListProtectionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldListProtectionsRequest`](#aws-cdk-sdk.shield.ShieldListProtectionsRequest)

---

##### `listResourcesInProtectionGroup` <a name="aws-cdk-sdk.shield.ShieldClient.listResourcesInProtectionGroup"></a>

```typescript
public listResourcesInProtectionGroup(input: ShieldListResourcesInProtectionGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupRequest`](#aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupRequest)

---

##### `updateEmergencyContactSettings` <a name="aws-cdk-sdk.shield.ShieldClient.updateEmergencyContactSettings"></a>

```typescript
public updateEmergencyContactSettings(input: ShieldUpdateEmergencyContactSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldUpdateEmergencyContactSettingsRequest`](#aws-cdk-sdk.shield.ShieldUpdateEmergencyContactSettingsRequest)

---

##### `updateProtectionGroup` <a name="aws-cdk-sdk.shield.ShieldClient.updateProtectionGroup"></a>

```typescript
public updateProtectionGroup(input: ShieldUpdateProtectionGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldUpdateProtectionGroupRequest`](#aws-cdk-sdk.shield.ShieldUpdateProtectionGroupRequest)

---

##### `updateSubscription` <a name="aws-cdk-sdk.shield.ShieldClient.updateSubscription"></a>

```typescript
public updateSubscription(input: ShieldUpdateSubscriptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldUpdateSubscriptionRequest`](#aws-cdk-sdk.shield.ShieldUpdateSubscriptionRequest)

---




## Structs <a name="Structs"></a>

### ShieldAssociateDrtLogBucketRequest <a name="aws-cdk-sdk.shield.ShieldAssociateDrtLogBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAssociateDrtLogBucketRequest: shield.ShieldAssociateDrtLogBucketRequest = { ... }
```

##### `logBucket`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldAssociateDrtLogBucketRequest.property.logBucket"></a>

- *Type:* `string`

---

### ShieldAssociateDrtLogBucketResponse <a name="aws-cdk-sdk.shield.ShieldAssociateDrtLogBucketResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAssociateDrtLogBucketResponse: shield.ShieldAssociateDrtLogBucketResponse = { ... }
```

### ShieldAssociateDrtRoleRequest <a name="aws-cdk-sdk.shield.ShieldAssociateDrtRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAssociateDrtRoleRequest: shield.ShieldAssociateDrtRoleRequest = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldAssociateDrtRoleRequest.property.roleArn"></a>

- *Type:* `string`

---

### ShieldAssociateDrtRoleResponse <a name="aws-cdk-sdk.shield.ShieldAssociateDrtRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAssociateDrtRoleResponse: shield.ShieldAssociateDrtRoleResponse = { ... }
```

### ShieldAssociateHealthCheckRequest <a name="aws-cdk-sdk.shield.ShieldAssociateHealthCheckRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAssociateHealthCheckRequest: shield.ShieldAssociateHealthCheckRequest = { ... }
```

##### `healthCheckArn`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldAssociateHealthCheckRequest.property.healthCheckArn"></a>

- *Type:* `string`

---

##### `protectionId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldAssociateHealthCheckRequest.property.protectionId"></a>

- *Type:* `string`

---

### ShieldAssociateHealthCheckResponse <a name="aws-cdk-sdk.shield.ShieldAssociateHealthCheckResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAssociateHealthCheckResponse: shield.ShieldAssociateHealthCheckResponse = { ... }
```

### ShieldAssociateProactiveEngagementDetailsRequest <a name="aws-cdk-sdk.shield.ShieldAssociateProactiveEngagementDetailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAssociateProactiveEngagementDetailsRequest: shield.ShieldAssociateProactiveEngagementDetailsRequest = { ... }
```

##### `emergencyContactList`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldAssociateProactiveEngagementDetailsRequest.property.emergencyContactList"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldEmergencyContact`](#aws-cdk-sdk.shield.ShieldEmergencyContact)[]

---

### ShieldAssociateProactiveEngagementDetailsResponse <a name="aws-cdk-sdk.shield.ShieldAssociateProactiveEngagementDetailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAssociateProactiveEngagementDetailsResponse: shield.ShieldAssociateProactiveEngagementDetailsResponse = { ... }
```

### ShieldAttackDetail <a name="aws-cdk-sdk.shield.ShieldAttackDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAttackDetail: shield.ShieldAttackDetail = { ... }
```

##### `attackCounters`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackDetail.property.attackCounters"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldSummarizedCounter`](#aws-cdk-sdk.shield.ShieldSummarizedCounter)[]

---

##### `attackId`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackDetail.property.attackId"></a>

- *Type:* `string`

---

##### `attackProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackDetail.property.attackProperties"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackProperty`](#aws-cdk-sdk.shield.ShieldAttackProperty)[]

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackDetail.property.endTime"></a>

- *Type:* `string`

---

##### `mitigations`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackDetail.property.mitigations"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldMitigation`](#aws-cdk-sdk.shield.ShieldMitigation)[]

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackDetail.property.resourceArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackDetail.property.startTime"></a>

- *Type:* `string`

---

##### `subResources`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackDetail.property.subResources"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldSubResourceSummary`](#aws-cdk-sdk.shield.ShieldSubResourceSummary)[]

---

### ShieldAttackProperty <a name="aws-cdk-sdk.shield.ShieldAttackProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAttackProperty: shield.ShieldAttackProperty = { ... }
```

##### `attackLayer`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackProperty.property.attackLayer"></a>

- *Type:* `string`

---

##### `attackPropertyIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackProperty.property.attackPropertyIdentifier"></a>

- *Type:* `string`

---

##### `topContributors`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackProperty.property.topContributors"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldContributor`](#aws-cdk-sdk.shield.ShieldContributor)[]

---

##### `total`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackProperty.property.total"></a>

- *Type:* `number`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackProperty.property.unit"></a>

- *Type:* `string`

---

### ShieldAttackStatisticsDataItem <a name="aws-cdk-sdk.shield.ShieldAttackStatisticsDataItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAttackStatisticsDataItem: shield.ShieldAttackStatisticsDataItem = { ... }
```

##### `attackCount`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldAttackStatisticsDataItem.property.attackCount"></a>

- *Type:* `number`

---

##### `attackVolume`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackStatisticsDataItem.property.attackVolume"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackVolume`](#aws-cdk-sdk.shield.ShieldAttackVolume)

---

### ShieldAttackSummary <a name="aws-cdk-sdk.shield.ShieldAttackSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAttackSummary: shield.ShieldAttackSummary = { ... }
```

##### `attackId`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackSummary.property.attackId"></a>

- *Type:* `string`

---

##### `attackVectors`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackSummary.property.attackVectors"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackVectorDescription`](#aws-cdk-sdk.shield.ShieldAttackVectorDescription)[]

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackSummary.property.endTime"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackSummary.property.resourceArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackSummary.property.startTime"></a>

- *Type:* `string`

---

### ShieldAttackVectorDescription <a name="aws-cdk-sdk.shield.ShieldAttackVectorDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAttackVectorDescription: shield.ShieldAttackVectorDescription = { ... }
```

##### `vectorType`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldAttackVectorDescription.property.vectorType"></a>

- *Type:* `string`

---

### ShieldAttackVolume <a name="aws-cdk-sdk.shield.ShieldAttackVolume"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAttackVolume: shield.ShieldAttackVolume = { ... }
```

##### `bitsPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackVolume.property.bitsPerSecond"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackVolumeStatistics`](#aws-cdk-sdk.shield.ShieldAttackVolumeStatistics)

---

##### `packetsPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackVolume.property.packetsPerSecond"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackVolumeStatistics`](#aws-cdk-sdk.shield.ShieldAttackVolumeStatistics)

---

##### `requestsPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldAttackVolume.property.requestsPerSecond"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackVolumeStatistics`](#aws-cdk-sdk.shield.ShieldAttackVolumeStatistics)

---

### ShieldAttackVolumeStatistics <a name="aws-cdk-sdk.shield.ShieldAttackVolumeStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldAttackVolumeStatistics: shield.ShieldAttackVolumeStatistics = { ... }
```

##### `max`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldAttackVolumeStatistics.property.max"></a>

- *Type:* `number`

---

### ShieldContributor <a name="aws-cdk-sdk.shield.ShieldContributor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldContributor: shield.ShieldContributor = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldContributor.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldContributor.property.value"></a>

- *Type:* `number`

---

### ShieldCreateProtectionGroupRequest <a name="aws-cdk-sdk.shield.ShieldCreateProtectionGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldCreateProtectionGroupRequest: shield.ShieldCreateProtectionGroupRequest = { ... }
```

##### `aggregation`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldCreateProtectionGroupRequest.property.aggregation"></a>

- *Type:* `string`

---

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldCreateProtectionGroupRequest.property.pattern"></a>

- *Type:* `string`

---

##### `protectionGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldCreateProtectionGroupRequest.property.protectionGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldCreateProtectionGroupRequest.property.members"></a>

- *Type:* `string`[]

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldCreateProtectionGroupRequest.property.resourceType"></a>

- *Type:* `string`

---

### ShieldCreateProtectionGroupResponse <a name="aws-cdk-sdk.shield.ShieldCreateProtectionGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldCreateProtectionGroupResponse: shield.ShieldCreateProtectionGroupResponse = { ... }
```

### ShieldCreateProtectionRequest <a name="aws-cdk-sdk.shield.ShieldCreateProtectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldCreateProtectionRequest: shield.ShieldCreateProtectionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldCreateProtectionRequest.property.name"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldCreateProtectionRequest.property.resourceArn"></a>

- *Type:* `string`

---

### ShieldCreateProtectionResponse <a name="aws-cdk-sdk.shield.ShieldCreateProtectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldCreateProtectionResponse: shield.ShieldCreateProtectionResponse = { ... }
```

##### `protectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldCreateProtectionResponse.property.protectionId"></a>

- *Type:* `string`

---

### ShieldCreateSubscriptionRequest <a name="aws-cdk-sdk.shield.ShieldCreateSubscriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldCreateSubscriptionRequest: shield.ShieldCreateSubscriptionRequest = { ... }
```

### ShieldCreateSubscriptionResponse <a name="aws-cdk-sdk.shield.ShieldCreateSubscriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldCreateSubscriptionResponse: shield.ShieldCreateSubscriptionResponse = { ... }
```

### ShieldDeleteProtectionGroupRequest <a name="aws-cdk-sdk.shield.ShieldDeleteProtectionGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDeleteProtectionGroupRequest: shield.ShieldDeleteProtectionGroupRequest = { ... }
```

##### `protectionGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldDeleteProtectionGroupRequest.property.protectionGroupId"></a>

- *Type:* `string`

---

### ShieldDeleteProtectionGroupResponse <a name="aws-cdk-sdk.shield.ShieldDeleteProtectionGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDeleteProtectionGroupResponse: shield.ShieldDeleteProtectionGroupResponse = { ... }
```

### ShieldDeleteProtectionRequest <a name="aws-cdk-sdk.shield.ShieldDeleteProtectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDeleteProtectionRequest: shield.ShieldDeleteProtectionRequest = { ... }
```

##### `protectionId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldDeleteProtectionRequest.property.protectionId"></a>

- *Type:* `string`

---

### ShieldDeleteProtectionResponse <a name="aws-cdk-sdk.shield.ShieldDeleteProtectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDeleteProtectionResponse: shield.ShieldDeleteProtectionResponse = { ... }
```

### ShieldDeleteSubscriptionRequest <a name="aws-cdk-sdk.shield.ShieldDeleteSubscriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDeleteSubscriptionRequest: shield.ShieldDeleteSubscriptionRequest = { ... }
```

### ShieldDeleteSubscriptionResponse <a name="aws-cdk-sdk.shield.ShieldDeleteSubscriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDeleteSubscriptionResponse: shield.ShieldDeleteSubscriptionResponse = { ... }
```

### ShieldDescribeAttackRequest <a name="aws-cdk-sdk.shield.ShieldDescribeAttackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeAttackRequest: shield.ShieldDescribeAttackRequest = { ... }
```

##### `attackId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeAttackRequest.property.attackId"></a>

- *Type:* `string`

---

### ShieldDescribeAttackResponse <a name="aws-cdk-sdk.shield.ShieldDescribeAttackResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeAttackResponse: shield.ShieldDescribeAttackResponse = { ... }
```

##### `attack`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeAttackResponse.property.attack"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackDetail`](#aws-cdk-sdk.shield.ShieldAttackDetail)

---

### ShieldDescribeAttackStatisticsRequest <a name="aws-cdk-sdk.shield.ShieldDescribeAttackStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeAttackStatisticsRequest: shield.ShieldDescribeAttackStatisticsRequest = { ... }
```

### ShieldDescribeAttackStatisticsResponse <a name="aws-cdk-sdk.shield.ShieldDescribeAttackStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeAttackStatisticsResponse: shield.ShieldDescribeAttackStatisticsResponse = { ... }
```

##### `dataItems`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeAttackStatisticsResponse.property.dataItems"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackStatisticsDataItem`](#aws-cdk-sdk.shield.ShieldAttackStatisticsDataItem)[]

---

##### `timeRange`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeAttackStatisticsResponse.property.timeRange"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldTimeRange`](#aws-cdk-sdk.shield.ShieldTimeRange)

---

### ShieldDescribeDrtAccessRequest <a name="aws-cdk-sdk.shield.ShieldDescribeDrtAccessRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeDrtAccessRequest: shield.ShieldDescribeDrtAccessRequest = { ... }
```

### ShieldDescribeDrtAccessResponse <a name="aws-cdk-sdk.shield.ShieldDescribeDrtAccessResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeDrtAccessResponse: shield.ShieldDescribeDrtAccessResponse = { ... }
```

##### `logBucketList`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeDrtAccessResponse.property.logBucketList"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeDrtAccessResponse.property.roleArn"></a>

- *Type:* `string`

---

### ShieldDescribeEmergencyContactSettingsRequest <a name="aws-cdk-sdk.shield.ShieldDescribeEmergencyContactSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeEmergencyContactSettingsRequest: shield.ShieldDescribeEmergencyContactSettingsRequest = { ... }
```

### ShieldDescribeEmergencyContactSettingsResponse <a name="aws-cdk-sdk.shield.ShieldDescribeEmergencyContactSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeEmergencyContactSettingsResponse: shield.ShieldDescribeEmergencyContactSettingsResponse = { ... }
```

##### `emergencyContactList`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeEmergencyContactSettingsResponse.property.emergencyContactList"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldEmergencyContact`](#aws-cdk-sdk.shield.ShieldEmergencyContact)[]

---

### ShieldDescribeProtectionGroupRequest <a name="aws-cdk-sdk.shield.ShieldDescribeProtectionGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeProtectionGroupRequest: shield.ShieldDescribeProtectionGroupRequest = { ... }
```

##### `protectionGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeProtectionGroupRequest.property.protectionGroupId"></a>

- *Type:* `string`

---

### ShieldDescribeProtectionGroupResponse <a name="aws-cdk-sdk.shield.ShieldDescribeProtectionGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeProtectionGroupResponse: shield.ShieldDescribeProtectionGroupResponse = { ... }
```

##### `protectionGroup`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeProtectionGroupResponse.property.protectionGroup"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldProtectionGroup`](#aws-cdk-sdk.shield.ShieldProtectionGroup)

---

### ShieldDescribeProtectionRequest <a name="aws-cdk-sdk.shield.ShieldDescribeProtectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeProtectionRequest: shield.ShieldDescribeProtectionRequest = { ... }
```

##### `protectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeProtectionRequest.property.protectionId"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeProtectionRequest.property.resourceArn"></a>

- *Type:* `string`

---

### ShieldDescribeProtectionResponse <a name="aws-cdk-sdk.shield.ShieldDescribeProtectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeProtectionResponse: shield.ShieldDescribeProtectionResponse = { ... }
```

##### `protection`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeProtectionResponse.property.protection"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldProtection`](#aws-cdk-sdk.shield.ShieldProtection)

---

### ShieldDescribeSubscriptionRequest <a name="aws-cdk-sdk.shield.ShieldDescribeSubscriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeSubscriptionRequest: shield.ShieldDescribeSubscriptionRequest = { ... }
```

### ShieldDescribeSubscriptionResponse <a name="aws-cdk-sdk.shield.ShieldDescribeSubscriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDescribeSubscriptionResponse: shield.ShieldDescribeSubscriptionResponse = { ... }
```

##### `subscription`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldDescribeSubscriptionResponse.property.subscription"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldSubscription`](#aws-cdk-sdk.shield.ShieldSubscription)

---

### ShieldDisableProactiveEngagementRequest <a name="aws-cdk-sdk.shield.ShieldDisableProactiveEngagementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDisableProactiveEngagementRequest: shield.ShieldDisableProactiveEngagementRequest = { ... }
```

### ShieldDisableProactiveEngagementResponse <a name="aws-cdk-sdk.shield.ShieldDisableProactiveEngagementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDisableProactiveEngagementResponse: shield.ShieldDisableProactiveEngagementResponse = { ... }
```

### ShieldDisassociateDrtLogBucketRequest <a name="aws-cdk-sdk.shield.ShieldDisassociateDrtLogBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDisassociateDrtLogBucketRequest: shield.ShieldDisassociateDrtLogBucketRequest = { ... }
```

##### `logBucket`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldDisassociateDrtLogBucketRequest.property.logBucket"></a>

- *Type:* `string`

---

### ShieldDisassociateDrtLogBucketResponse <a name="aws-cdk-sdk.shield.ShieldDisassociateDrtLogBucketResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDisassociateDrtLogBucketResponse: shield.ShieldDisassociateDrtLogBucketResponse = { ... }
```

### ShieldDisassociateDrtRoleRequest <a name="aws-cdk-sdk.shield.ShieldDisassociateDrtRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDisassociateDrtRoleRequest: shield.ShieldDisassociateDrtRoleRequest = { ... }
```

### ShieldDisassociateDrtRoleResponse <a name="aws-cdk-sdk.shield.ShieldDisassociateDrtRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDisassociateDrtRoleResponse: shield.ShieldDisassociateDrtRoleResponse = { ... }
```

### ShieldDisassociateHealthCheckRequest <a name="aws-cdk-sdk.shield.ShieldDisassociateHealthCheckRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDisassociateHealthCheckRequest: shield.ShieldDisassociateHealthCheckRequest = { ... }
```

##### `healthCheckArn`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldDisassociateHealthCheckRequest.property.healthCheckArn"></a>

- *Type:* `string`

---

##### `protectionId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldDisassociateHealthCheckRequest.property.protectionId"></a>

- *Type:* `string`

---

### ShieldDisassociateHealthCheckResponse <a name="aws-cdk-sdk.shield.ShieldDisassociateHealthCheckResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldDisassociateHealthCheckResponse: shield.ShieldDisassociateHealthCheckResponse = { ... }
```

### ShieldEmergencyContact <a name="aws-cdk-sdk.shield.ShieldEmergencyContact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldEmergencyContact: shield.ShieldEmergencyContact = { ... }
```

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldEmergencyContact.property.emailAddress"></a>

- *Type:* `string`

---

##### `contactNotes`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldEmergencyContact.property.contactNotes"></a>

- *Type:* `string`

---

##### `phoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldEmergencyContact.property.phoneNumber"></a>

- *Type:* `string`

---

### ShieldEnableProactiveEngagementRequest <a name="aws-cdk-sdk.shield.ShieldEnableProactiveEngagementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldEnableProactiveEngagementRequest: shield.ShieldEnableProactiveEngagementRequest = { ... }
```

### ShieldEnableProactiveEngagementResponse <a name="aws-cdk-sdk.shield.ShieldEnableProactiveEngagementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldEnableProactiveEngagementResponse: shield.ShieldEnableProactiveEngagementResponse = { ... }
```

### ShieldGetSubscriptionStateRequest <a name="aws-cdk-sdk.shield.ShieldGetSubscriptionStateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldGetSubscriptionStateRequest: shield.ShieldGetSubscriptionStateRequest = { ... }
```

### ShieldGetSubscriptionStateResponse <a name="aws-cdk-sdk.shield.ShieldGetSubscriptionStateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldGetSubscriptionStateResponse: shield.ShieldGetSubscriptionStateResponse = { ... }
```

##### `subscriptionState`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldGetSubscriptionStateResponse.property.subscriptionState"></a>

- *Type:* `string`

---

### ShieldLimit <a name="aws-cdk-sdk.shield.ShieldLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldLimit: shield.ShieldLimit = { ... }
```

##### `max`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldLimit.property.max"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldLimit.property.type"></a>

- *Type:* `string`

---

### ShieldListAttacksRequest <a name="aws-cdk-sdk.shield.ShieldListAttacksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldListAttacksRequest: shield.ShieldListAttacksRequest = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListAttacksRequest.property.endTime"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldTimeRange`](#aws-cdk-sdk.shield.ShieldTimeRange)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListAttacksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListAttacksRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListAttacksRequest.property.resourceArns"></a>

- *Type:* `string`[]

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListAttacksRequest.property.startTime"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldTimeRange`](#aws-cdk-sdk.shield.ShieldTimeRange)

---

### ShieldListAttacksResponse <a name="aws-cdk-sdk.shield.ShieldListAttacksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldListAttacksResponse: shield.ShieldListAttacksResponse = { ... }
```

##### `attackSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListAttacksResponse.property.attackSummaries"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackSummary`](#aws-cdk-sdk.shield.ShieldAttackSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListAttacksResponse.property.nextToken"></a>

- *Type:* `string`

---

### ShieldListProtectionGroupsRequest <a name="aws-cdk-sdk.shield.ShieldListProtectionGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldListProtectionGroupsRequest: shield.ShieldListProtectionGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListProtectionGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListProtectionGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ShieldListProtectionGroupsResponse <a name="aws-cdk-sdk.shield.ShieldListProtectionGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldListProtectionGroupsResponse: shield.ShieldListProtectionGroupsResponse = { ... }
```

##### `protectionGroups`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldListProtectionGroupsResponse.property.protectionGroups"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldProtectionGroup`](#aws-cdk-sdk.shield.ShieldProtectionGroup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListProtectionGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ShieldListProtectionsRequest <a name="aws-cdk-sdk.shield.ShieldListProtectionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldListProtectionsRequest: shield.ShieldListProtectionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListProtectionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListProtectionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ShieldListProtectionsResponse <a name="aws-cdk-sdk.shield.ShieldListProtectionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldListProtectionsResponse: shield.ShieldListProtectionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListProtectionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `protections`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListProtectionsResponse.property.protections"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldProtection`](#aws-cdk-sdk.shield.ShieldProtection)[]

---

### ShieldListResourcesInProtectionGroupRequest <a name="aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldListResourcesInProtectionGroupRequest: shield.ShieldListResourcesInProtectionGroupRequest = { ... }
```

##### `protectionGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupRequest.property.protectionGroupId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupRequest.property.nextToken"></a>

- *Type:* `string`

---

### ShieldListResourcesInProtectionGroupResponse <a name="aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldListResourcesInProtectionGroupResponse: shield.ShieldListResourcesInProtectionGroupResponse = { ... }
```

##### `resourceArns`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupResponse.property.resourceArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupResponse.property.nextToken"></a>

- *Type:* `string`

---

### ShieldMitigation <a name="aws-cdk-sdk.shield.ShieldMitigation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldMitigation: shield.ShieldMitigation = { ... }
```

##### `mitigationName`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldMitigation.property.mitigationName"></a>

- *Type:* `string`

---

### ShieldProtection <a name="aws-cdk-sdk.shield.ShieldProtection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldProtection: shield.ShieldProtection = { ... }
```

##### `healthCheckIds`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldProtection.property.healthCheckIds"></a>

- *Type:* `string`[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldProtection.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldProtection.property.name"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldProtection.property.resourceArn"></a>

- *Type:* `string`

---

### ShieldProtectionGroup <a name="aws-cdk-sdk.shield.ShieldProtectionGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldProtectionGroup: shield.ShieldProtectionGroup = { ... }
```

##### `aggregation`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldProtectionGroup.property.aggregation"></a>

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldProtectionGroup.property.members"></a>

- *Type:* `string`[]

---

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldProtectionGroup.property.pattern"></a>

- *Type:* `string`

---

##### `protectionGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldProtectionGroup.property.protectionGroupId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldProtectionGroup.property.resourceType"></a>

- *Type:* `string`

---

### ShieldProtectionGroupArbitraryPatternLimits <a name="aws-cdk-sdk.shield.ShieldProtectionGroupArbitraryPatternLimits"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldProtectionGroupArbitraryPatternLimits: shield.ShieldProtectionGroupArbitraryPatternLimits = { ... }
```

##### `maxMembers`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldProtectionGroupArbitraryPatternLimits.property.maxMembers"></a>

- *Type:* `number`

---

### ShieldProtectionGroupLimits <a name="aws-cdk-sdk.shield.ShieldProtectionGroupLimits"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldProtectionGroupLimits: shield.ShieldProtectionGroupLimits = { ... }
```

##### `maxProtectionGroups`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldProtectionGroupLimits.property.maxProtectionGroups"></a>

- *Type:* `number`

---

##### `patternTypeLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldProtectionGroupLimits.property.patternTypeLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldProtectionGroupPatternTypeLimits`](#aws-cdk-sdk.shield.ShieldProtectionGroupPatternTypeLimits)

---

### ShieldProtectionGroupPatternTypeLimits <a name="aws-cdk-sdk.shield.ShieldProtectionGroupPatternTypeLimits"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldProtectionGroupPatternTypeLimits: shield.ShieldProtectionGroupPatternTypeLimits = { ... }
```

##### `arbitraryPatternLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldProtectionGroupPatternTypeLimits.property.arbitraryPatternLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldProtectionGroupArbitraryPatternLimits`](#aws-cdk-sdk.shield.ShieldProtectionGroupArbitraryPatternLimits)

---

### ShieldProtectionLimits <a name="aws-cdk-sdk.shield.ShieldProtectionLimits"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldProtectionLimits: shield.ShieldProtectionLimits = { ... }
```

##### `protectedResourceTypeLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldProtectionLimits.property.protectedResourceTypeLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldLimit`](#aws-cdk-sdk.shield.ShieldLimit)[]

---

### ShieldSubResourceSummary <a name="aws-cdk-sdk.shield.ShieldSubResourceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldSubResourceSummary: shield.ShieldSubResourceSummary = { ... }
```

##### `attackVectors`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSubResourceSummary.property.attackVectors"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldSummarizedAttackVector`](#aws-cdk-sdk.shield.ShieldSummarizedAttackVector)[]

---

##### `counters`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSubResourceSummary.property.counters"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldSummarizedCounter`](#aws-cdk-sdk.shield.ShieldSummarizedCounter)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSubResourceSummary.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSubResourceSummary.property.type"></a>

- *Type:* `string`

---

### ShieldSubscription <a name="aws-cdk-sdk.shield.ShieldSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldSubscription: shield.ShieldSubscription = { ... }
```

##### `subscriptionLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldSubscription.property.subscriptionLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldSubscriptionLimits`](#aws-cdk-sdk.shield.ShieldSubscriptionLimits)

---

##### `autoRenew`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSubscription.property.autoRenew"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSubscription.property.endTime"></a>

- *Type:* `string`

---

##### `limits`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSubscription.property.limits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldLimit`](#aws-cdk-sdk.shield.ShieldLimit)[]

---

##### `proactiveEngagementStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSubscription.property.proactiveEngagementStatus"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSubscription.property.startTime"></a>

- *Type:* `string`

---

##### `timeCommitmentInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSubscription.property.timeCommitmentInSeconds"></a>

- *Type:* `number`

---

### ShieldSubscriptionLimits <a name="aws-cdk-sdk.shield.ShieldSubscriptionLimits"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldSubscriptionLimits: shield.ShieldSubscriptionLimits = { ... }
```

##### `protectionGroupLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldSubscriptionLimits.property.protectionGroupLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldProtectionGroupLimits`](#aws-cdk-sdk.shield.ShieldProtectionGroupLimits)

---

##### `protectionLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldSubscriptionLimits.property.protectionLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldProtectionLimits`](#aws-cdk-sdk.shield.ShieldProtectionLimits)

---

### ShieldSummarizedAttackVector <a name="aws-cdk-sdk.shield.ShieldSummarizedAttackVector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldSummarizedAttackVector: shield.ShieldSummarizedAttackVector = { ... }
```

##### `vectorType`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldSummarizedAttackVector.property.vectorType"></a>

- *Type:* `string`

---

##### `vectorCounters`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSummarizedAttackVector.property.vectorCounters"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldSummarizedCounter`](#aws-cdk-sdk.shield.ShieldSummarizedCounter)[]

---

### ShieldSummarizedCounter <a name="aws-cdk-sdk.shield.ShieldSummarizedCounter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldSummarizedCounter: shield.ShieldSummarizedCounter = { ... }
```

##### `average`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSummarizedCounter.property.average"></a>

- *Type:* `number`

---

##### `max`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSummarizedCounter.property.max"></a>

- *Type:* `number`

---

##### `n`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSummarizedCounter.property.n"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSummarizedCounter.property.name"></a>

- *Type:* `string`

---

##### `sum`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSummarizedCounter.property.sum"></a>

- *Type:* `number`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldSummarizedCounter.property.unit"></a>

- *Type:* `string`

---

### ShieldTimeRange <a name="aws-cdk-sdk.shield.ShieldTimeRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldTimeRange: shield.ShieldTimeRange = { ... }
```

##### `fromInclusive`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldTimeRange.property.fromInclusive"></a>

- *Type:* `string`

---

##### `toExclusive`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldTimeRange.property.toExclusive"></a>

- *Type:* `string`

---

### ShieldUpdateEmergencyContactSettingsRequest <a name="aws-cdk-sdk.shield.ShieldUpdateEmergencyContactSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldUpdateEmergencyContactSettingsRequest: shield.ShieldUpdateEmergencyContactSettingsRequest = { ... }
```

##### `emergencyContactList`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldUpdateEmergencyContactSettingsRequest.property.emergencyContactList"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldEmergencyContact`](#aws-cdk-sdk.shield.ShieldEmergencyContact)[]

---

### ShieldUpdateEmergencyContactSettingsResponse <a name="aws-cdk-sdk.shield.ShieldUpdateEmergencyContactSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldUpdateEmergencyContactSettingsResponse: shield.ShieldUpdateEmergencyContactSettingsResponse = { ... }
```

### ShieldUpdateProtectionGroupRequest <a name="aws-cdk-sdk.shield.ShieldUpdateProtectionGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldUpdateProtectionGroupRequest: shield.ShieldUpdateProtectionGroupRequest = { ... }
```

##### `aggregation`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldUpdateProtectionGroupRequest.property.aggregation"></a>

- *Type:* `string`

---

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldUpdateProtectionGroupRequest.property.pattern"></a>

- *Type:* `string`

---

##### `protectionGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldUpdateProtectionGroupRequest.property.protectionGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldUpdateProtectionGroupRequest.property.members"></a>

- *Type:* `string`[]

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldUpdateProtectionGroupRequest.property.resourceType"></a>

- *Type:* `string`

---

### ShieldUpdateProtectionGroupResponse <a name="aws-cdk-sdk.shield.ShieldUpdateProtectionGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldUpdateProtectionGroupResponse: shield.ShieldUpdateProtectionGroupResponse = { ... }
```

### ShieldUpdateSubscriptionRequest <a name="aws-cdk-sdk.shield.ShieldUpdateSubscriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldUpdateSubscriptionRequest: shield.ShieldUpdateSubscriptionRequest = { ... }
```

##### `autoRenew`<sup>Optional</sup> <a name="aws-cdk-sdk.shield.ShieldUpdateSubscriptionRequest.property.autoRenew"></a>

- *Type:* `string`

---

### ShieldUpdateSubscriptionResponse <a name="aws-cdk-sdk.shield.ShieldUpdateSubscriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

const shieldUpdateSubscriptionResponse: shield.ShieldUpdateSubscriptionResponse = { ... }
```

## Classes <a name="Classes"></a>

### ShieldResponsesCreateProtection <a name="aws-cdk-sdk.shield.ShieldResponsesCreateProtection"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesCreateProtection.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesCreateProtection(__scope: Construct, __resources: string[], __input: ShieldCreateProtectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesCreateProtection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesCreateProtection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesCreateProtection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldCreateProtectionRequest`](#aws-cdk-sdk.shield.ShieldCreateProtectionRequest)

---



#### Properties <a name="Properties"></a>

##### `protectionId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesCreateProtection.property.protectionId"></a>

- *Type:* `string`

---


### ShieldResponsesDescribeAttack <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttack"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttack.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeAttack(__scope: Construct, __resources: string[], __input: ShieldDescribeAttackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDescribeAttackRequest`](#aws-cdk-sdk.shield.ShieldDescribeAttackRequest)

---



#### Properties <a name="Properties"></a>

##### `attack`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttack.property.attack"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack`](#aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack)

---


### ShieldResponsesDescribeAttackAttack <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeAttackAttack(__scope: Construct, __resources: string[], __input: ShieldDescribeAttackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDescribeAttackRequest`](#aws-cdk-sdk.shield.ShieldDescribeAttackRequest)

---



#### Properties <a name="Properties"></a>

##### `attackCounters`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.property.attackCounters"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldSummarizedCounter`](#aws-cdk-sdk.shield.ShieldSummarizedCounter)[]

---

##### `attackId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.property.attackId"></a>

- *Type:* `string`

---

##### `attackProperties`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.property.attackProperties"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackProperty`](#aws-cdk-sdk.shield.ShieldAttackProperty)[]

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.property.endTime"></a>

- *Type:* `string`

---

##### `mitigations`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.property.mitigations"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldMitigation`](#aws-cdk-sdk.shield.ShieldMitigation)[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.property.resourceArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.property.startTime"></a>

- *Type:* `string`

---

##### `subResources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackAttack.property.subResources"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldSubResourceSummary`](#aws-cdk-sdk.shield.ShieldSubResourceSummary)[]

---


### ShieldResponsesDescribeAttackStatistics <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatistics.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeAttackStatistics(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `dataItems`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatistics.property.dataItems"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackStatisticsDataItem`](#aws-cdk-sdk.shield.ShieldAttackStatisticsDataItem)[]

---

##### `timeRange`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatistics.property.timeRange"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatisticsTimeRange`](#aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatisticsTimeRange)

---


### ShieldResponsesDescribeAttackStatisticsTimeRange <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatisticsTimeRange"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatisticsTimeRange.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeAttackStatisticsTimeRange(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatisticsTimeRange.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatisticsTimeRange.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `fromInclusive`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatisticsTimeRange.property.fromInclusive"></a>

- *Type:* `string`

---

##### `toExclusive`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeAttackStatisticsTimeRange.property.toExclusive"></a>

- *Type:* `string`

---


### ShieldResponsesDescribeDrtAccess <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeDrtAccess"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeDrtAccess.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeDrtAccess(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeDrtAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeDrtAccess.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `logBucketList`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeDrtAccess.property.logBucketList"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeDrtAccess.property.roleArn"></a>

- *Type:* `string`

---


### ShieldResponsesDescribeEmergencyContactSettings <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeEmergencyContactSettings"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeEmergencyContactSettings.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeEmergencyContactSettings(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeEmergencyContactSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeEmergencyContactSettings.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `emergencyContactList`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeEmergencyContactSettings.property.emergencyContactList"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldEmergencyContact`](#aws-cdk-sdk.shield.ShieldEmergencyContact)[]

---


### ShieldResponsesDescribeProtection <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtection"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtection.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeProtection(__scope: Construct, __resources: string[], __input: ShieldDescribeProtectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDescribeProtectionRequest`](#aws-cdk-sdk.shield.ShieldDescribeProtectionRequest)

---



#### Properties <a name="Properties"></a>

##### `protection`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtection.property.protection"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection`](#aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection)

---


### ShieldResponsesDescribeProtectionGroup <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroup"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroup.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeProtectionGroup(__scope: Construct, __resources: string[], __input: ShieldDescribeProtectionGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDescribeProtectionGroupRequest`](#aws-cdk-sdk.shield.ShieldDescribeProtectionGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `protectionGroup`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroup.property.protectionGroup"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup`](#aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup)

---


### ShieldResponsesDescribeProtectionGroupProtectionGroup <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeProtectionGroupProtectionGroup(__scope: Construct, __resources: string[], __input: ShieldDescribeProtectionGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDescribeProtectionGroupRequest`](#aws-cdk-sdk.shield.ShieldDescribeProtectionGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `aggregation`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup.property.aggregation"></a>

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup.property.members"></a>

- *Type:* `string`[]

---

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup.property.pattern"></a>

- *Type:* `string`

---

##### `protectionGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup.property.protectionGroupId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionGroupProtectionGroup.property.resourceType"></a>

- *Type:* `string`

---


### ShieldResponsesDescribeProtectionProtection <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeProtectionProtection(__scope: Construct, __resources: string[], __input: ShieldDescribeProtectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldDescribeProtectionRequest`](#aws-cdk-sdk.shield.ShieldDescribeProtectionRequest)

---



#### Properties <a name="Properties"></a>

##### `healthCheckIds`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection.property.healthCheckIds"></a>

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection.property.name"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeProtectionProtection.property.resourceArn"></a>

- *Type:* `string`

---


### ShieldResponsesDescribeSubscription <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscription.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeSubscription(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `subscription`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscription.property.subscription"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription`](#aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription)

---


### ShieldResponsesDescribeSubscriptionSubscription <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeSubscriptionSubscription(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `autoRenew`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription.property.autoRenew"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription.property.endTime"></a>

- *Type:* `string`

---

##### `limits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription.property.limits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldLimit`](#aws-cdk-sdk.shield.ShieldLimit)[]

---

##### `proactiveEngagementStatus`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription.property.proactiveEngagementStatus"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription.property.startTime"></a>

- *Type:* `string`

---

##### `subscriptionLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription.property.subscriptionLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits`](#aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits)

---

##### `timeCommitmentInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscription.property.timeCommitmentInSeconds"></a>

- *Type:* `number`

---


### ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `protectionGroupLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits.property.protectionGroupLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits`](#aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits)

---

##### `protectionLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits.property.protectionLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits`](#aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits)

---


### ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `maxProtectionGroups`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits.property.maxProtectionGroups"></a>

- *Type:* `number`

---

##### `patternTypeLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits.property.patternTypeLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits`](#aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits)

---


### ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `arbitraryPatternLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits.property.arbitraryPatternLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits`](#aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits)

---


### ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `maxMembers`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits.property.maxMembers"></a>

- *Type:* `number`

---


### ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `protectedResourceTypeLimits`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits.property.protectedResourceTypeLimits"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldLimit`](#aws-cdk-sdk.shield.ShieldLimit)[]

---


### ShieldResponsesFetchSubscriptionState <a name="aws-cdk-sdk.shield.ShieldResponsesFetchSubscriptionState"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesFetchSubscriptionState.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesFetchSubscriptionState(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesFetchSubscriptionState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesFetchSubscriptionState.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `subscriptionState`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesFetchSubscriptionState.property.subscriptionState"></a>

- *Type:* `string`

---


### ShieldResponsesListAttacks <a name="aws-cdk-sdk.shield.ShieldResponsesListAttacks"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesListAttacks.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesListAttacks(__scope: Construct, __resources: string[], __input: ShieldListAttacksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListAttacks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListAttacks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListAttacks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldListAttacksRequest`](#aws-cdk-sdk.shield.ShieldListAttacksRequest)

---



#### Properties <a name="Properties"></a>

##### `attackSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListAttacks.property.attackSummaries"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldAttackSummary`](#aws-cdk-sdk.shield.ShieldAttackSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListAttacks.property.nextToken"></a>

- *Type:* `string`

---


### ShieldResponsesListProtectionGroups <a name="aws-cdk-sdk.shield.ShieldResponsesListProtectionGroups"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesListProtectionGroups.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesListProtectionGroups(__scope: Construct, __resources: string[], __input: ShieldListProtectionGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListProtectionGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListProtectionGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListProtectionGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldListProtectionGroupsRequest`](#aws-cdk-sdk.shield.ShieldListProtectionGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListProtectionGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `protectionGroups`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListProtectionGroups.property.protectionGroups"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldProtectionGroup`](#aws-cdk-sdk.shield.ShieldProtectionGroup)[]

---


### ShieldResponsesListProtections <a name="aws-cdk-sdk.shield.ShieldResponsesListProtections"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesListProtections.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesListProtections(__scope: Construct, __resources: string[], __input: ShieldListProtectionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListProtections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListProtections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListProtections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldListProtectionsRequest`](#aws-cdk-sdk.shield.ShieldListProtectionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListProtections.property.nextToken"></a>

- *Type:* `string`

---

##### `protections`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListProtections.property.protections"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldProtection`](#aws-cdk-sdk.shield.ShieldProtection)[]

---


### ShieldResponsesListResourcesInProtectionGroup <a name="aws-cdk-sdk.shield.ShieldResponsesListResourcesInProtectionGroup"></a>

#### Initializer <a name="aws-cdk-sdk.shield.ShieldResponsesListResourcesInProtectionGroup.Initializer"></a>

```typescript
import { shield } from 'aws-cdk-sdk'

new shield.ShieldResponsesListResourcesInProtectionGroup(__scope: Construct, __resources: string[], __input: ShieldListResourcesInProtectionGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListResourcesInProtectionGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListResourcesInProtectionGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListResourcesInProtectionGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupRequest`](#aws-cdk-sdk.shield.ShieldListResourcesInProtectionGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListResourcesInProtectionGroup.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceArns`<sup>Required</sup> <a name="aws-cdk-sdk.shield.ShieldResponsesListResourcesInProtectionGroup.property.resourceArns"></a>

- *Type:* `string`[]

---



