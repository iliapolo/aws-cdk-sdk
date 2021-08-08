# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CodeStarNotificationsClient <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createNotificationRule` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.createNotificationRule"></a>

```typescript
public createNotificationRule(input: CodeStarNotificationsCreateNotificationRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest)

---

##### `deleteNotificationRule` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.deleteNotificationRule"></a>

```typescript
public deleteNotificationRule(input: CodeStarNotificationsDeleteNotificationRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteNotificationRuleRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteNotificationRuleRequest)

---

##### `deleteTarget` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.deleteTarget"></a>

```typescript
public deleteTarget(input: CodeStarNotificationsDeleteTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteTargetRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteTargetRequest)

---

##### `describeNotificationRule` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.describeNotificationRule"></a>

```typescript
public describeNotificationRule(input: CodeStarNotificationsDescribeNotificationRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleRequest)

---

##### `listEventTypes` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.listEventTypes"></a>

```typescript
public listEventTypes(input: CodeStarNotificationsListEventTypesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesRequest)

---

##### `listNotificationRules` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.listNotificationRules"></a>

```typescript
public listNotificationRules(input: CodeStarNotificationsListNotificationRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CodeStarNotificationsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTagsForResourceRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTagsForResourceRequest)

---

##### `listTargets` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.listTargets"></a>

```typescript
public listTargets(input: CodeStarNotificationsListTargetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsRequest)

---

##### `subscribe` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.subscribe"></a>

```typescript
public subscribe(input: CodeStarNotificationsSubscribeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsSubscribeRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsSubscribeRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.tagResource"></a>

```typescript
public tagResource(input: CodeStarNotificationsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTagResourceRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTagResourceRequest)

---

##### `unsubscribe` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.unsubscribe"></a>

```typescript
public unsubscribe(input: CodeStarNotificationsUnsubscribeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUnsubscribeRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUnsubscribeRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.untagResource"></a>

```typescript
public untagResource(input: CodeStarNotificationsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUntagResourceRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUntagResourceRequest)

---

##### `updateNotificationRule` <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.updateNotificationRule"></a>

```typescript
public updateNotificationRule(input: CodeStarNotificationsUpdateNotificationRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUpdateNotificationRuleRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUpdateNotificationRuleRequest)

---




## Structs <a name="Structs"></a>

### CodeStarNotificationsCreateNotificationRuleRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsCreateNotificationRuleRequest: codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest = { ... }
```

##### `detailType`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest.property.detailType"></a>

- *Type:* `string`

---

##### `eventTypeIds`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest.property.eventTypeIds"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest.property.resource"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTarget`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTarget)[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeStarNotificationsCreateNotificationRuleResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsCreateNotificationRuleResult: codestarnotifications.CodeStarNotificationsCreateNotificationRuleResult = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleResult.property.arn"></a>

- *Type:* `string`

---

### CodeStarNotificationsDeleteNotificationRuleRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteNotificationRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsDeleteNotificationRuleRequest: codestarnotifications.CodeStarNotificationsDeleteNotificationRuleRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteNotificationRuleRequest.property.arn"></a>

- *Type:* `string`

---

### CodeStarNotificationsDeleteNotificationRuleResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteNotificationRuleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsDeleteNotificationRuleResult: codestarnotifications.CodeStarNotificationsDeleteNotificationRuleResult = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteNotificationRuleResult.property.arn"></a>

- *Type:* `string`

---

### CodeStarNotificationsDeleteTargetRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsDeleteTargetRequest: codestarnotifications.CodeStarNotificationsDeleteTargetRequest = { ... }
```

##### `targetAddress`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteTargetRequest.property.targetAddress"></a>

- *Type:* `string`

---

##### `forceUnsubscribeAll`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteTargetRequest.property.forceUnsubscribeAll"></a>

- *Type:* `boolean`

---

### CodeStarNotificationsDeleteTargetResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteTargetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsDeleteTargetResult: codestarnotifications.CodeStarNotificationsDeleteTargetResult = { ... }
```

### CodeStarNotificationsDescribeNotificationRuleRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsDescribeNotificationRuleRequest: codestarnotifications.CodeStarNotificationsDescribeNotificationRuleRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleRequest.property.arn"></a>

- *Type:* `string`

---

### CodeStarNotificationsDescribeNotificationRuleResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsDescribeNotificationRuleResult: codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.arn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.createdBy"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `detailType`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.detailType"></a>

- *Type:* `string`

---

##### `eventTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.eventTypes"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary)[]

---

##### `lastModifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.name"></a>

- *Type:* `string`

---

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.resource"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleResult.property.targets"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary)[]

---

### CodeStarNotificationsEventTypeSummary <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsEventTypeSummary: codestarnotifications.CodeStarNotificationsEventTypeSummary = { ... }
```

##### `eventTypeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary.property.eventTypeId"></a>

- *Type:* `string`

---

##### `eventTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary.property.eventTypeName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary.property.resourceType"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary.property.serviceName"></a>

- *Type:* `string`

---

### CodeStarNotificationsListEventTypesFilter <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListEventTypesFilter: codestarnotifications.CodeStarNotificationsListEventTypesFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesFilter.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesFilter.property.value"></a>

- *Type:* `string`

---

### CodeStarNotificationsListEventTypesRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListEventTypesRequest: codestarnotifications.CodeStarNotificationsListEventTypesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesFilter`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarNotificationsListEventTypesResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListEventTypesResult: codestarnotifications.CodeStarNotificationsListEventTypesResult = { ... }
```

##### `eventTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesResult.property.eventTypes"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesResult.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarNotificationsListNotificationRulesFilter <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListNotificationRulesFilter: codestarnotifications.CodeStarNotificationsListNotificationRulesFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesFilter.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesFilter.property.value"></a>

- *Type:* `string`

---

### CodeStarNotificationsListNotificationRulesRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListNotificationRulesRequest: codestarnotifications.CodeStarNotificationsListNotificationRulesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesFilter`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarNotificationsListNotificationRulesResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListNotificationRulesResult: codestarnotifications.CodeStarNotificationsListNotificationRulesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `notificationRules`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesResult.property.notificationRules"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsNotificationRuleSummary`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsNotificationRuleSummary)[]

---

### CodeStarNotificationsListTagsForResourceRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListTagsForResourceRequest: codestarnotifications.CodeStarNotificationsListTagsForResourceRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTagsForResourceRequest.property.arn"></a>

- *Type:* `string`

---

### CodeStarNotificationsListTagsForResourceResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTagsForResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListTagsForResourceResult: codestarnotifications.CodeStarNotificationsListTagsForResourceResult = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTagsForResourceResult.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeStarNotificationsListTargetsFilter <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListTargetsFilter: codestarnotifications.CodeStarNotificationsListTargetsFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsFilter.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsFilter.property.value"></a>

- *Type:* `string`

---

### CodeStarNotificationsListTargetsRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListTargetsRequest: codestarnotifications.CodeStarNotificationsListTargetsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsFilter`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarNotificationsListTargetsResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsListTargetsResult: codestarnotifications.CodeStarNotificationsListTargetsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsResult.property.targets"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary)[]

---

### CodeStarNotificationsNotificationRuleSummary <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsNotificationRuleSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsNotificationRuleSummary: codestarnotifications.CodeStarNotificationsNotificationRuleSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsNotificationRuleSummary.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsNotificationRuleSummary.property.id"></a>

- *Type:* `string`

---

### CodeStarNotificationsSubscribeRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsSubscribeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsSubscribeRequest: codestarnotifications.CodeStarNotificationsSubscribeRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsSubscribeRequest.property.arn"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsSubscribeRequest.property.target"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTarget`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTarget)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsSubscribeRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

### CodeStarNotificationsSubscribeResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsSubscribeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsSubscribeResult: codestarnotifications.CodeStarNotificationsSubscribeResult = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsSubscribeResult.property.arn"></a>

- *Type:* `string`

---

### CodeStarNotificationsTagResourceRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsTagResourceRequest: codestarnotifications.CodeStarNotificationsTagResourceRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTagResourceRequest.property.arn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeStarNotificationsTagResourceResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTagResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsTagResourceResult: codestarnotifications.CodeStarNotificationsTagResourceResult = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTagResourceResult.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeStarNotificationsTarget <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsTarget: codestarnotifications.CodeStarNotificationsTarget = { ... }
```

##### `targetAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTarget.property.targetAddress"></a>

- *Type:* `string`

---

##### `targetType`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTarget.property.targetType"></a>

- *Type:* `string`

---

### CodeStarNotificationsTargetSummary <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsTargetSummary: codestarnotifications.CodeStarNotificationsTargetSummary = { ... }
```

##### `targetAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary.property.targetAddress"></a>

- *Type:* `string`

---

##### `targetStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary.property.targetStatus"></a>

- *Type:* `string`

---

##### `targetType`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary.property.targetType"></a>

- *Type:* `string`

---

### CodeStarNotificationsUnsubscribeRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUnsubscribeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsUnsubscribeRequest: codestarnotifications.CodeStarNotificationsUnsubscribeRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUnsubscribeRequest.property.arn"></a>

- *Type:* `string`

---

##### `targetAddress`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUnsubscribeRequest.property.targetAddress"></a>

- *Type:* `string`

---

### CodeStarNotificationsUnsubscribeResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUnsubscribeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsUnsubscribeResult: codestarnotifications.CodeStarNotificationsUnsubscribeResult = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUnsubscribeResult.property.arn"></a>

- *Type:* `string`

---

### CodeStarNotificationsUntagResourceRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsUntagResourceRequest: codestarnotifications.CodeStarNotificationsUntagResourceRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUntagResourceRequest.property.arn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### CodeStarNotificationsUntagResourceResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUntagResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsUntagResourceResult: codestarnotifications.CodeStarNotificationsUntagResourceResult = { ... }
```

### CodeStarNotificationsUpdateNotificationRuleRequest <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUpdateNotificationRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsUpdateNotificationRuleRequest: codestarnotifications.CodeStarNotificationsUpdateNotificationRuleRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUpdateNotificationRuleRequest.property.arn"></a>

- *Type:* `string`

---

##### `detailType`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUpdateNotificationRuleRequest.property.detailType"></a>

- *Type:* `string`

---

##### `eventTypeIds`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUpdateNotificationRuleRequest.property.eventTypeIds"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUpdateNotificationRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUpdateNotificationRuleRequest.property.status"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUpdateNotificationRuleRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTarget`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTarget)[]

---

### CodeStarNotificationsUpdateNotificationRuleResult <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUpdateNotificationRuleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

const codeStarNotificationsUpdateNotificationRuleResult: codestarnotifications.CodeStarNotificationsUpdateNotificationRuleResult = { ... }
```

## Classes <a name="Classes"></a>

### CodeStarNotificationsResponsesCreateNotificationRule <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesCreateNotificationRule"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesCreateNotificationRule.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsResponsesCreateNotificationRule(__scope: Construct, __resources: string[], __input: CodeStarNotificationsCreateNotificationRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesCreateNotificationRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesCreateNotificationRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesCreateNotificationRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsCreateNotificationRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesCreateNotificationRule.property.arn"></a>

- *Type:* `string`

---


### CodeStarNotificationsResponsesDeleteNotificationRule <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDeleteNotificationRule"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDeleteNotificationRule.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsResponsesDeleteNotificationRule(__scope: Construct, __resources: string[], __input: CodeStarNotificationsDeleteNotificationRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDeleteNotificationRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDeleteNotificationRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDeleteNotificationRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteNotificationRuleRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDeleteNotificationRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDeleteNotificationRule.property.arn"></a>

- *Type:* `string`

---


### CodeStarNotificationsResponsesDescribeNotificationRule <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule(__scope: Construct, __resources: string[], __input: CodeStarNotificationsDescribeNotificationRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsDescribeNotificationRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.arn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.createdBy"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `detailType`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.detailType"></a>

- *Type:* `string`

---

##### `eventTypes`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.eventTypes"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary)[]

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.name"></a>

- *Type:* `string`

---

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.resource"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesDescribeNotificationRule.property.targets"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary)[]

---


### CodeStarNotificationsResponsesListEventTypes <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListEventTypes"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListEventTypes.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsResponsesListEventTypes(__scope: Construct, __resources: string[], __input: CodeStarNotificationsListEventTypesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListEventTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListEventTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListEventTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListEventTypesRequest)

---



#### Properties <a name="Properties"></a>

##### `eventTypes`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListEventTypes.property.eventTypes"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsEventTypeSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListEventTypes.property.nextToken"></a>

- *Type:* `string`

---


### CodeStarNotificationsResponsesListNotificationRules <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListNotificationRules"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListNotificationRules.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsResponsesListNotificationRules(__scope: Construct, __resources: string[], __input: CodeStarNotificationsListNotificationRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListNotificationRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListNotificationRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListNotificationRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListNotificationRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListNotificationRules.property.nextToken"></a>

- *Type:* `string`

---

##### `notificationRules`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListNotificationRules.property.notificationRules"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsNotificationRuleSummary`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsNotificationRuleSummary)[]

---


### CodeStarNotificationsResponsesListTagsForResource <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTagsForResource.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CodeStarNotificationsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTagsForResourceRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodeStarNotificationsResponsesListTargets <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTargets"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTargets.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsResponsesListTargets(__scope: Construct, __resources: string[], __input: CodeStarNotificationsListTargetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsListTargetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTargets.property.nextToken"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesListTargets.property.targets"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTargetSummary)[]

---


### CodeStarNotificationsResponsesSubscribe <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesSubscribe"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesSubscribe.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsResponsesSubscribe(__scope: Construct, __resources: string[], __input: CodeStarNotificationsSubscribeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesSubscribe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesSubscribe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesSubscribe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsSubscribeRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsSubscribeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesSubscribe.property.arn"></a>

- *Type:* `string`

---


### CodeStarNotificationsResponsesTagResource <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesTagResource"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesTagResource.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsResponsesTagResource(__scope: Construct, __resources: string[], __input: CodeStarNotificationsTagResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesTagResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesTagResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesTagResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTagResourceRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsTagResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesTagResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodeStarNotificationsResponsesUnsubscribe <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesUnsubscribe"></a>

#### Initializer <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesUnsubscribe.Initializer"></a>

```typescript
import { codestarnotifications } from 'aws-cdk-sdk'

new codestarnotifications.CodeStarNotificationsResponsesUnsubscribe(__scope: Construct, __resources: string[], __input: CodeStarNotificationsUnsubscribeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesUnsubscribe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesUnsubscribe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesUnsubscribe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUnsubscribeRequest`](#aws-cdk-sdk.codestarnotifications.CodeStarNotificationsUnsubscribeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarnotifications.CodeStarNotificationsResponsesUnsubscribe.property.arn"></a>

- *Type:* `string`

---



