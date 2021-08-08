# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### EventBridgeClient <a name="aws-cdk-sdk.eventbridge.EventBridgeClient"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `activateEventSource` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.activateEventSource"></a>

```typescript
public activateEventSource(input: EventBridgeActivateEventSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeActivateEventSourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeActivateEventSourceRequest)

---

##### `cancelReplay` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.cancelReplay"></a>

```typescript
public cancelReplay(input: EventBridgeCancelReplayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeCancelReplayRequest`](#aws-cdk-sdk.eventbridge.EventBridgeCancelReplayRequest)

---

##### `createArchive` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.createArchive"></a>

```typescript
public createArchive(input: EventBridgeCreateArchiveRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveRequest`](#aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveRequest)

---

##### `createEventBus` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.createEventBus"></a>

```typescript
public createEventBus(input: EventBridgeCreateEventBusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeCreateEventBusRequest`](#aws-cdk-sdk.eventbridge.EventBridgeCreateEventBusRequest)

---

##### `createPartnerEventSource` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.createPartnerEventSource"></a>

```typescript
public createPartnerEventSource(input: EventBridgeCreatePartnerEventSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeCreatePartnerEventSourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeCreatePartnerEventSourceRequest)

---

##### `deactivateEventSource` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.deactivateEventSource"></a>

```typescript
public deactivateEventSource(input: EventBridgeDeactivateEventSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDeactivateEventSourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDeactivateEventSourceRequest)

---

##### `deleteArchive` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.deleteArchive"></a>

```typescript
public deleteArchive(input: EventBridgeDeleteArchiveRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDeleteArchiveRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDeleteArchiveRequest)

---

##### `deleteEventBus` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.deleteEventBus"></a>

```typescript
public deleteEventBus(input: EventBridgeDeleteEventBusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDeleteEventBusRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDeleteEventBusRequest)

---

##### `deletePartnerEventSource` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.deletePartnerEventSource"></a>

```typescript
public deletePartnerEventSource(input: EventBridgeDeletePartnerEventSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDeletePartnerEventSourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDeletePartnerEventSourceRequest)

---

##### `deleteRule` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.deleteRule"></a>

```typescript
public deleteRule(input: EventBridgeDeleteRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDeleteRuleRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDeleteRuleRequest)

---

##### `describeArchive` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.describeArchive"></a>

```typescript
public describeArchive(input: EventBridgeDescribeArchiveRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveRequest)

---

##### `describeEventBus` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.describeEventBus"></a>

```typescript
public describeEventBus(input: EventBridgeDescribeEventBusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeEventBusRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeEventBusRequest)

---

##### `describeEventSource` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.describeEventSource"></a>

```typescript
public describeEventSource(input: EventBridgeDescribeEventSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceRequest)

---

##### `describePartnerEventSource` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.describePartnerEventSource"></a>

```typescript
public describePartnerEventSource(input: EventBridgeDescribePartnerEventSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribePartnerEventSourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribePartnerEventSourceRequest)

---

##### `describeReplay` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.describeReplay"></a>

```typescript
public describeReplay(input: EventBridgeDescribeReplayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayRequest)

---

##### `describeRule` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.describeRule"></a>

```typescript
public describeRule(input: EventBridgeDescribeRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleRequest)

---

##### `disableRule` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.disableRule"></a>

```typescript
public disableRule(input: EventBridgeDisableRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDisableRuleRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDisableRuleRequest)

---

##### `enableRule` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.enableRule"></a>

```typescript
public enableRule(input: EventBridgeEnableRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeEnableRuleRequest`](#aws-cdk-sdk.eventbridge.EventBridgeEnableRuleRequest)

---

##### `listArchives` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.listArchives"></a>

```typescript
public listArchives(input: EventBridgeListArchivesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListArchivesRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListArchivesRequest)

---

##### `listEventBuses` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.listEventBuses"></a>

```typescript
public listEventBuses(input: EventBridgeListEventBusesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListEventBusesRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListEventBusesRequest)

---

##### `listEventSources` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.listEventSources"></a>

```typescript
public listEventSources(input: EventBridgeListEventSourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesRequest)

---

##### `listPartnerEventSourceAccounts` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.listPartnerEventSourceAccounts"></a>

```typescript
public listPartnerEventSourceAccounts(input: EventBridgeListPartnerEventSourceAccountsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsRequest)

---

##### `listPartnerEventSources` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.listPartnerEventSources"></a>

```typescript
public listPartnerEventSources(input: EventBridgeListPartnerEventSourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesRequest)

---

##### `listReplays` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.listReplays"></a>

```typescript
public listReplays(input: EventBridgeListReplaysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListReplaysRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListReplaysRequest)

---

##### `listRuleNamesByTarget` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.listRuleNamesByTarget"></a>

```typescript
public listRuleNamesByTarget(input: EventBridgeListRuleNamesByTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetRequest)

---

##### `listRules` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.listRules"></a>

```typescript
public listRules(input: EventBridgeListRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListRulesRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListRulesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: EventBridgeListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListTagsForResourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListTagsForResourceRequest)

---

##### `listTargetsByRule` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.listTargetsByRule"></a>

```typescript
public listTargetsByRule(input: EventBridgeListTargetsByRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleRequest)

---

##### `putEvents` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.putEvents"></a>

```typescript
public putEvents(input: EventBridgePutEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutEventsRequest`](#aws-cdk-sdk.eventbridge.EventBridgePutEventsRequest)

---

##### `putPartnerEvents` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.putPartnerEvents"></a>

```typescript
public putPartnerEvents(input: EventBridgePutPartnerEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequest`](#aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequest)

---

##### `putPermission` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.putPermission"></a>

```typescript
public putPermission(input: EventBridgePutPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutPermissionRequest`](#aws-cdk-sdk.eventbridge.EventBridgePutPermissionRequest)

---

##### `putRule` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.putRule"></a>

```typescript
public putRule(input: EventBridgePutRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest`](#aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest)

---

##### `putTargets` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.putTargets"></a>

```typescript
public putTargets(input: EventBridgePutTargetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutTargetsRequest`](#aws-cdk-sdk.eventbridge.EventBridgePutTargetsRequest)

---

##### `removePermission` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.removePermission"></a>

```typescript
public removePermission(input: EventBridgeRemovePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRemovePermissionRequest`](#aws-cdk-sdk.eventbridge.EventBridgeRemovePermissionRequest)

---

##### `removeTargets` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.removeTargets"></a>

```typescript
public removeTargets(input: EventBridgeRemoveTargetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsRequest`](#aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsRequest)

---

##### `startReplay` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.startReplay"></a>

```typescript
public startReplay(input: EventBridgeStartReplayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest`](#aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.tagResource"></a>

```typescript
public tagResource(input: EventBridgeTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTagResourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeTagResourceRequest)

---

##### `testEventPattern` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.testEventPattern"></a>

```typescript
public testEventPattern(input: EventBridgeTestEventPatternRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTestEventPatternRequest`](#aws-cdk-sdk.eventbridge.EventBridgeTestEventPatternRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.untagResource"></a>

```typescript
public untagResource(input: EventBridgeUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeUntagResourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeUntagResourceRequest)

---

##### `updateArchive` <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.updateArchive"></a>

```typescript
public updateArchive(input: EventBridgeUpdateArchiveRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveRequest`](#aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveRequest)

---




## Structs <a name="Structs"></a>

### EventBridgeActivateEventSourceRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeActivateEventSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeActivateEventSourceRequest: eventbridge.EventBridgeActivateEventSourceRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeActivateEventSourceRequest.property.name"></a>

- *Type:* `string`

---

### EventBridgeArchive <a name="aws-cdk-sdk.eventbridge.EventBridgeArchive"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeArchive: eventbridge.EventBridgeArchive = { ... }
```

##### `archiveName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeArchive.property.archiveName"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeArchive.property.creationTime"></a>

- *Type:* `string`

---

##### `eventCount`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeArchive.property.eventCount"></a>

- *Type:* `number`

---

##### `eventSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeArchive.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `retentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeArchive.property.retentionDays"></a>

- *Type:* `number`

---

##### `sizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeArchive.property.sizeBytes"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeArchive.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeArchive.property.stateReason"></a>

- *Type:* `string`

---

### EventBridgeAwsVpcConfiguration <a name="aws-cdk-sdk.eventbridge.EventBridgeAwsVpcConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeAwsVpcConfiguration: eventbridge.EventBridgeAwsVpcConfiguration = { ... }
```

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeAwsVpcConfiguration.property.subnets"></a>

- *Type:* `string`[]

---

##### `assignPublicIp`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeAwsVpcConfiguration.property.assignPublicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeAwsVpcConfiguration.property.securityGroups"></a>

- *Type:* `string`[]

---

### EventBridgeBatchArrayProperties <a name="aws-cdk-sdk.eventbridge.EventBridgeBatchArrayProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeBatchArrayProperties: eventbridge.EventBridgeBatchArrayProperties = { ... }
```

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeBatchArrayProperties.property.size"></a>

- *Type:* `number`

---

### EventBridgeBatchParameters <a name="aws-cdk-sdk.eventbridge.EventBridgeBatchParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeBatchParameters: eventbridge.EventBridgeBatchParameters = { ... }
```

##### `jobDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeBatchParameters.property.jobDefinition"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeBatchParameters.property.jobName"></a>

- *Type:* `string`

---

##### `arrayProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeBatchParameters.property.arrayProperties"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeBatchArrayProperties`](#aws-cdk-sdk.eventbridge.EventBridgeBatchArrayProperties)

---

##### `retryStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeBatchParameters.property.retryStrategy"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeBatchRetryStrategy`](#aws-cdk-sdk.eventbridge.EventBridgeBatchRetryStrategy)

---

### EventBridgeBatchRetryStrategy <a name="aws-cdk-sdk.eventbridge.EventBridgeBatchRetryStrategy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeBatchRetryStrategy: eventbridge.EventBridgeBatchRetryStrategy = { ... }
```

##### `attempts`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeBatchRetryStrategy.property.attempts"></a>

- *Type:* `number`

---

### EventBridgeCancelReplayRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeCancelReplayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeCancelReplayRequest: eventbridge.EventBridgeCancelReplayRequest = { ... }
```

##### `replayName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCancelReplayRequest.property.replayName"></a>

- *Type:* `string`

---

### EventBridgeCancelReplayResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeCancelReplayResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeCancelReplayResponse: eventbridge.EventBridgeCancelReplayResponse = { ... }
```

##### `replayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCancelReplayResponse.property.replayArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCancelReplayResponse.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCancelReplayResponse.property.stateReason"></a>

- *Type:* `string`

---

### EventBridgeCondition <a name="aws-cdk-sdk.eventbridge.EventBridgeCondition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeCondition: eventbridge.EventBridgeCondition = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCondition.property.key"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCondition.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCondition.property.value"></a>

- *Type:* `string`

---

### EventBridgeCreateArchiveRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeCreateArchiveRequest: eventbridge.EventBridgeCreateArchiveRequest = { ... }
```

##### `archiveName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveRequest.property.archiveName"></a>

- *Type:* `string`

---

##### `eventSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveRequest.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveRequest.property.description"></a>

- *Type:* `string`

---

##### `eventPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveRequest.property.eventPattern"></a>

- *Type:* `string`

---

##### `retentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveRequest.property.retentionDays"></a>

- *Type:* `number`

---

### EventBridgeCreateArchiveResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeCreateArchiveResponse: eventbridge.EventBridgeCreateArchiveResponse = { ... }
```

##### `archiveArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveResponse.property.archiveArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveResponse.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveResponse.property.stateReason"></a>

- *Type:* `string`

---

### EventBridgeCreateEventBusRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateEventBusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeCreateEventBusRequest: eventbridge.EventBridgeCreateEventBusRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateEventBusRequest.property.name"></a>

- *Type:* `string`

---

##### `eventSourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateEventBusRequest.property.eventSourceName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateEventBusRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTag`](#aws-cdk-sdk.eventbridge.EventBridgeTag)[]

---

### EventBridgeCreateEventBusResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateEventBusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeCreateEventBusResponse: eventbridge.EventBridgeCreateEventBusResponse = { ... }
```

##### `eventBusArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreateEventBusResponse.property.eventBusArn"></a>

- *Type:* `string`

---

### EventBridgeCreatePartnerEventSourceRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeCreatePartnerEventSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeCreatePartnerEventSourceRequest: eventbridge.EventBridgeCreatePartnerEventSourceRequest = { ... }
```

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreatePartnerEventSourceRequest.property.account"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreatePartnerEventSourceRequest.property.name"></a>

- *Type:* `string`

---

### EventBridgeCreatePartnerEventSourceResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeCreatePartnerEventSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeCreatePartnerEventSourceResponse: eventbridge.EventBridgeCreatePartnerEventSourceResponse = { ... }
```

##### `eventSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeCreatePartnerEventSourceResponse.property.eventSourceArn"></a>

- *Type:* `string`

---

### EventBridgeDeactivateEventSourceRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDeactivateEventSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDeactivateEventSourceRequest: eventbridge.EventBridgeDeactivateEventSourceRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDeactivateEventSourceRequest.property.name"></a>

- *Type:* `string`

---

### EventBridgeDeadLetterConfig <a name="aws-cdk-sdk.eventbridge.EventBridgeDeadLetterConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDeadLetterConfig: eventbridge.EventBridgeDeadLetterConfig = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDeadLetterConfig.property.arn"></a>

- *Type:* `string`

---

### EventBridgeDeleteArchiveRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDeleteArchiveRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDeleteArchiveRequest: eventbridge.EventBridgeDeleteArchiveRequest = { ... }
```

##### `archiveName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDeleteArchiveRequest.property.archiveName"></a>

- *Type:* `string`

---

### EventBridgeDeleteArchiveResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeDeleteArchiveResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDeleteArchiveResponse: eventbridge.EventBridgeDeleteArchiveResponse = { ... }
```

### EventBridgeDeleteEventBusRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDeleteEventBusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDeleteEventBusRequest: eventbridge.EventBridgeDeleteEventBusRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDeleteEventBusRequest.property.name"></a>

- *Type:* `string`

---

### EventBridgeDeletePartnerEventSourceRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDeletePartnerEventSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDeletePartnerEventSourceRequest: eventbridge.EventBridgeDeletePartnerEventSourceRequest = { ... }
```

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDeletePartnerEventSourceRequest.property.account"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDeletePartnerEventSourceRequest.property.name"></a>

- *Type:* `string`

---

### EventBridgeDeleteRuleRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDeleteRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDeleteRuleRequest: eventbridge.EventBridgeDeleteRuleRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDeleteRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDeleteRuleRequest.property.eventBusName"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDeleteRuleRequest.property.force"></a>

- *Type:* `boolean`

---

### EventBridgeDescribeArchiveRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribeArchiveRequest: eventbridge.EventBridgeDescribeArchiveRequest = { ... }
```

##### `archiveName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveRequest.property.archiveName"></a>

- *Type:* `string`

---

### EventBridgeDescribeArchiveResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribeArchiveResponse: eventbridge.EventBridgeDescribeArchiveResponse = { ... }
```

##### `archiveArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.archiveArn"></a>

- *Type:* `string`

---

##### `archiveName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.archiveName"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.description"></a>

- *Type:* `string`

---

##### `eventCount`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.eventCount"></a>

- *Type:* `number`

---

##### `eventPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.eventPattern"></a>

- *Type:* `string`

---

##### `eventSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `retentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.retentionDays"></a>

- *Type:* `number`

---

##### `sizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.sizeBytes"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveResponse.property.stateReason"></a>

- *Type:* `string`

---

### EventBridgeDescribeEventBusRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventBusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribeEventBusRequest: eventbridge.EventBridgeDescribeEventBusRequest = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventBusRequest.property.name"></a>

- *Type:* `string`

---

### EventBridgeDescribeEventBusResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventBusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribeEventBusResponse: eventbridge.EventBridgeDescribeEventBusResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventBusResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventBusResponse.property.name"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventBusResponse.property.policy"></a>

- *Type:* `string`

---

### EventBridgeDescribeEventSourceRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribeEventSourceRequest: eventbridge.EventBridgeDescribeEventSourceRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceRequest.property.name"></a>

- *Type:* `string`

---

### EventBridgeDescribeEventSourceResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribeEventSourceResponse: eventbridge.EventBridgeDescribeEventSourceResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceResponse.property.createdBy"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceResponse.property.expirationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceResponse.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceResponse.property.state"></a>

- *Type:* `string`

---

### EventBridgeDescribePartnerEventSourceRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribePartnerEventSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribePartnerEventSourceRequest: eventbridge.EventBridgeDescribePartnerEventSourceRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribePartnerEventSourceRequest.property.name"></a>

- *Type:* `string`

---

### EventBridgeDescribePartnerEventSourceResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribePartnerEventSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribePartnerEventSourceResponse: eventbridge.EventBridgeDescribePartnerEventSourceResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribePartnerEventSourceResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribePartnerEventSourceResponse.property.name"></a>

- *Type:* `string`

---

### EventBridgeDescribeReplayRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribeReplayRequest: eventbridge.EventBridgeDescribeReplayRequest = { ... }
```

##### `replayName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayRequest.property.replayName"></a>

- *Type:* `string`

---

### EventBridgeDescribeReplayResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribeReplayResponse: eventbridge.EventBridgeDescribeReplayResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.description"></a>

- *Type:* `string`

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.destination"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeReplayDestination`](#aws-cdk-sdk.eventbridge.EventBridgeReplayDestination)

---

##### `eventEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.eventEndTime"></a>

- *Type:* `string`

---

##### `eventLastReplayedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.eventLastReplayedTime"></a>

- *Type:* `string`

---

##### `eventSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `eventStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.eventStartTime"></a>

- *Type:* `string`

---

##### `replayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.replayArn"></a>

- *Type:* `string`

---

##### `replayEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.replayEndTime"></a>

- *Type:* `string`

---

##### `replayName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.replayName"></a>

- *Type:* `string`

---

##### `replayStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.replayStartTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayResponse.property.stateReason"></a>

- *Type:* `string`

---

### EventBridgeDescribeRuleRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribeRuleRequest: eventbridge.EventBridgeDescribeRuleRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleRequest.property.eventBusName"></a>

- *Type:* `string`

---

### EventBridgeDescribeRuleResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDescribeRuleResponse: eventbridge.EventBridgeDescribeRuleResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse.property.createdBy"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse.property.description"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse.property.eventBusName"></a>

- *Type:* `string`

---

##### `eventPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse.property.eventPattern"></a>

- *Type:* `string`

---

##### `managedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse.property.managedBy"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleResponse.property.state"></a>

- *Type:* `string`

---

### EventBridgeDisableRuleRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeDisableRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeDisableRuleRequest: eventbridge.EventBridgeDisableRuleRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDisableRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeDisableRuleRequest.property.eventBusName"></a>

- *Type:* `string`

---

### EventBridgeEcsParameters <a name="aws-cdk-sdk.eventbridge.EventBridgeEcsParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeEcsParameters: eventbridge.EventBridgeEcsParameters = { ... }
```

##### `taskDefinitionArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEcsParameters.property.taskDefinitionArn"></a>

- *Type:* `string`

---

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEcsParameters.property.group"></a>

- *Type:* `string`

---

##### `launchType`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEcsParameters.property.launchType"></a>

- *Type:* `string`

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEcsParameters.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeNetworkConfiguration`](#aws-cdk-sdk.eventbridge.EventBridgeNetworkConfiguration)

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEcsParameters.property.platformVersion"></a>

- *Type:* `string`

---

##### `taskCount`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEcsParameters.property.taskCount"></a>

- *Type:* `number`

---

### EventBridgeEnableRuleRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeEnableRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeEnableRuleRequest: eventbridge.EventBridgeEnableRuleRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEnableRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEnableRuleRequest.property.eventBusName"></a>

- *Type:* `string`

---

### EventBridgeEventBus <a name="aws-cdk-sdk.eventbridge.EventBridgeEventBus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeEventBus: eventbridge.EventBridgeEventBus = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEventBus.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEventBus.property.name"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEventBus.property.policy"></a>

- *Type:* `string`

---

### EventBridgeEventSource <a name="aws-cdk-sdk.eventbridge.EventBridgeEventSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeEventSource: eventbridge.EventBridgeEventSource = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEventSource.property.arn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEventSource.property.createdBy"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEventSource.property.creationTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEventSource.property.expirationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEventSource.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeEventSource.property.state"></a>

- *Type:* `string`

---

### EventBridgeHttpParameters <a name="aws-cdk-sdk.eventbridge.EventBridgeHttpParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeHttpParameters: eventbridge.EventBridgeHttpParameters = { ... }
```

##### `headerParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeHttpParameters.property.headerParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `pathParameterValues`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeHttpParameters.property.pathParameterValues"></a>

- *Type:* `string`[]

---

##### `queryStringParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeHttpParameters.property.queryStringParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### EventBridgeInputTransformer <a name="aws-cdk-sdk.eventbridge.EventBridgeInputTransformer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeInputTransformer: eventbridge.EventBridgeInputTransformer = { ... }
```

##### `inputTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeInputTransformer.property.inputTemplate"></a>

- *Type:* `string`

---

##### `inputPathsMap`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeInputTransformer.property.inputPathsMap"></a>

- *Type:* {[ key: string ]: `string`}

---

### EventBridgeKinesisParameters <a name="aws-cdk-sdk.eventbridge.EventBridgeKinesisParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeKinesisParameters: eventbridge.EventBridgeKinesisParameters = { ... }
```

##### `partitionKeyPath`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeKinesisParameters.property.partitionKeyPath"></a>

- *Type:* `string`

---

### EventBridgeListArchivesRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeListArchivesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListArchivesRequest: eventbridge.EventBridgeListArchivesRequest = { ... }
```

##### `eventSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListArchivesRequest.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListArchivesRequest.property.limit"></a>

- *Type:* `number`

---

##### `namePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListArchivesRequest.property.namePrefix"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListArchivesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListArchivesRequest.property.state"></a>

- *Type:* `string`

---

### EventBridgeListArchivesResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeListArchivesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListArchivesResponse: eventbridge.EventBridgeListArchivesResponse = { ... }
```

##### `archives`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListArchivesResponse.property.archives"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeArchive`](#aws-cdk-sdk.eventbridge.EventBridgeArchive)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListArchivesResponse.property.nextToken"></a>

- *Type:* `string`

---

### EventBridgeListEventBusesRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventBusesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListEventBusesRequest: eventbridge.EventBridgeListEventBusesRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventBusesRequest.property.limit"></a>

- *Type:* `number`

---

##### `namePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventBusesRequest.property.namePrefix"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventBusesRequest.property.nextToken"></a>

- *Type:* `string`

---

### EventBridgeListEventBusesResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventBusesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListEventBusesResponse: eventbridge.EventBridgeListEventBusesResponse = { ... }
```

##### `eventBuses`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventBusesResponse.property.eventBuses"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeEventBus`](#aws-cdk-sdk.eventbridge.EventBridgeEventBus)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventBusesResponse.property.nextToken"></a>

- *Type:* `string`

---

### EventBridgeListEventSourcesRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListEventSourcesRequest: eventbridge.EventBridgeListEventSourcesRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesRequest.property.limit"></a>

- *Type:* `number`

---

##### `namePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesRequest.property.namePrefix"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

### EventBridgeListEventSourcesResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListEventSourcesResponse: eventbridge.EventBridgeListEventSourcesResponse = { ... }
```

##### `eventSources`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesResponse.property.eventSources"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeEventSource`](#aws-cdk-sdk.eventbridge.EventBridgeEventSource)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

### EventBridgeListPartnerEventSourceAccountsRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListPartnerEventSourceAccountsRequest: eventbridge.EventBridgeListPartnerEventSourceAccountsRequest = { ... }
```

##### `eventSourceName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsRequest.property.eventSourceName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsRequest.property.nextToken"></a>

- *Type:* `string`

---

### EventBridgeListPartnerEventSourceAccountsResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListPartnerEventSourceAccountsResponse: eventbridge.EventBridgeListPartnerEventSourceAccountsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `partnerEventSourceAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsResponse.property.partnerEventSourceAccounts"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePartnerEventSourceAccount`](#aws-cdk-sdk.eventbridge.EventBridgePartnerEventSourceAccount)[]

---

### EventBridgeListPartnerEventSourcesRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListPartnerEventSourcesRequest: eventbridge.EventBridgeListPartnerEventSourcesRequest = { ... }
```

##### `namePrefix`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesRequest.property.namePrefix"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

### EventBridgeListPartnerEventSourcesResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListPartnerEventSourcesResponse: eventbridge.EventBridgeListPartnerEventSourcesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `partnerEventSources`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesResponse.property.partnerEventSources"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePartnerEventSource`](#aws-cdk-sdk.eventbridge.EventBridgePartnerEventSource)[]

---

### EventBridgeListReplaysRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeListReplaysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListReplaysRequest: eventbridge.EventBridgeListReplaysRequest = { ... }
```

##### `eventSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListReplaysRequest.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListReplaysRequest.property.limit"></a>

- *Type:* `number`

---

##### `namePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListReplaysRequest.property.namePrefix"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListReplaysRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListReplaysRequest.property.state"></a>

- *Type:* `string`

---

### EventBridgeListReplaysResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeListReplaysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListReplaysResponse: eventbridge.EventBridgeListReplaysResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListReplaysResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `replays`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListReplaysResponse.property.replays"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeReplay`](#aws-cdk-sdk.eventbridge.EventBridgeReplay)[]

---

### EventBridgeListRuleNamesByTargetRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListRuleNamesByTargetRequest: eventbridge.EventBridgeListRuleNamesByTargetRequest = { ... }
```

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetRequest.property.targetArn"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetRequest.property.eventBusName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetRequest.property.nextToken"></a>

- *Type:* `string`

---

### EventBridgeListRuleNamesByTargetResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListRuleNamesByTargetResponse: eventbridge.EventBridgeListRuleNamesByTargetResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `ruleNames`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetResponse.property.ruleNames"></a>

- *Type:* `string`[]

---

### EventBridgeListRulesRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeListRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListRulesRequest: eventbridge.EventBridgeListRulesRequest = { ... }
```

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRulesRequest.property.eventBusName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRulesRequest.property.limit"></a>

- *Type:* `number`

---

##### `namePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRulesRequest.property.namePrefix"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRulesRequest.property.nextToken"></a>

- *Type:* `string`

---

### EventBridgeListRulesResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeListRulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListRulesResponse: eventbridge.EventBridgeListRulesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRulesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListRulesResponse.property.rules"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRule`](#aws-cdk-sdk.eventbridge.EventBridgeRule)[]

---

### EventBridgeListTagsForResourceRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListTagsForResourceRequest: eventbridge.EventBridgeListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### EventBridgeListTagsForResourceResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListTagsForResourceResponse: eventbridge.EventBridgeListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTag`](#aws-cdk-sdk.eventbridge.EventBridgeTag)[]

---

### EventBridgeListTargetsByRuleRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListTargetsByRuleRequest: eventbridge.EventBridgeListTargetsByRuleRequest = { ... }
```

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleRequest.property.rule"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleRequest.property.eventBusName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleRequest.property.nextToken"></a>

- *Type:* `string`

---

### EventBridgeListTargetsByRuleResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeListTargetsByRuleResponse: eventbridge.EventBridgeListTargetsByRuleResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleResponse.property.targets"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTarget`](#aws-cdk-sdk.eventbridge.EventBridgeTarget)[]

---

### EventBridgeNetworkConfiguration <a name="aws-cdk-sdk.eventbridge.EventBridgeNetworkConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeNetworkConfiguration: eventbridge.EventBridgeNetworkConfiguration = { ... }
```

##### `awsvpcConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeNetworkConfiguration.property.awsvpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeAwsVpcConfiguration`](#aws-cdk-sdk.eventbridge.EventBridgeAwsVpcConfiguration)

---

### EventBridgePartnerEventSource <a name="aws-cdk-sdk.eventbridge.EventBridgePartnerEventSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePartnerEventSource: eventbridge.EventBridgePartnerEventSource = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePartnerEventSource.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePartnerEventSource.property.name"></a>

- *Type:* `string`

---

### EventBridgePartnerEventSourceAccount <a name="aws-cdk-sdk.eventbridge.EventBridgePartnerEventSourceAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePartnerEventSourceAccount: eventbridge.EventBridgePartnerEventSourceAccount = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePartnerEventSourceAccount.property.account"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePartnerEventSourceAccount.property.creationTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePartnerEventSourceAccount.property.expirationTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePartnerEventSourceAccount.property.state"></a>

- *Type:* `string`

---

### EventBridgePutEventsRequest <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutEventsRequest: eventbridge.EventBridgePutEventsRequest = { ... }
```

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsRequest.property.entries"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutEventsRequestEntry`](#aws-cdk-sdk.eventbridge.EventBridgePutEventsRequestEntry)[]

---

### EventBridgePutEventsRequestEntry <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsRequestEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutEventsRequestEntry: eventbridge.EventBridgePutEventsRequestEntry = { ... }
```

##### `detail`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsRequestEntry.property.detail"></a>

- *Type:* `string`

---

##### `detailType`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsRequestEntry.property.detailType"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsRequestEntry.property.eventBusName"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsRequestEntry.property.resources"></a>

- *Type:* `string`[]

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsRequestEntry.property.source"></a>

- *Type:* `string`

---

##### `time`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsRequestEntry.property.time"></a>

- *Type:* `string`

---

### EventBridgePutEventsResponse <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutEventsResponse: eventbridge.EventBridgePutEventsResponse = { ... }
```

##### `entries`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsResponse.property.entries"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutEventsResultEntry`](#aws-cdk-sdk.eventbridge.EventBridgePutEventsResultEntry)[]

---

##### `failedEntryCount`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsResponse.property.failedEntryCount"></a>

- *Type:* `number`

---

### EventBridgePutEventsResultEntry <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsResultEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutEventsResultEntry: eventbridge.EventBridgePutEventsResultEntry = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsResultEntry.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsResultEntry.property.errorMessage"></a>

- *Type:* `string`

---

##### `eventId`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutEventsResultEntry.property.eventId"></a>

- *Type:* `string`

---

### EventBridgePutPartnerEventsRequest <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutPartnerEventsRequest: eventbridge.EventBridgePutPartnerEventsRequest = { ... }
```

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequest.property.entries"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequestEntry`](#aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequestEntry)[]

---

### EventBridgePutPartnerEventsRequestEntry <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequestEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutPartnerEventsRequestEntry: eventbridge.EventBridgePutPartnerEventsRequestEntry = { ... }
```

##### `detail`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequestEntry.property.detail"></a>

- *Type:* `string`

---

##### `detailType`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequestEntry.property.detailType"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequestEntry.property.resources"></a>

- *Type:* `string`[]

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequestEntry.property.source"></a>

- *Type:* `string`

---

##### `time`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequestEntry.property.time"></a>

- *Type:* `string`

---

### EventBridgePutPartnerEventsResponse <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutPartnerEventsResponse: eventbridge.EventBridgePutPartnerEventsResponse = { ... }
```

##### `entries`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResponse.property.entries"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResultEntry`](#aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResultEntry)[]

---

##### `failedEntryCount`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResponse.property.failedEntryCount"></a>

- *Type:* `number`

---

### EventBridgePutPartnerEventsResultEntry <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResultEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutPartnerEventsResultEntry: eventbridge.EventBridgePutPartnerEventsResultEntry = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResultEntry.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResultEntry.property.errorMessage"></a>

- *Type:* `string`

---

##### `eventId`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResultEntry.property.eventId"></a>

- *Type:* `string`

---

### EventBridgePutPermissionRequest <a name="aws-cdk-sdk.eventbridge.EventBridgePutPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutPermissionRequest: eventbridge.EventBridgePutPermissionRequest = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPermissionRequest.property.action"></a>

- *Type:* `string`

---

##### `condition`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPermissionRequest.property.condition"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeCondition`](#aws-cdk-sdk.eventbridge.EventBridgeCondition)

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPermissionRequest.property.eventBusName"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPermissionRequest.property.policy"></a>

- *Type:* `string`

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPermissionRequest.property.principal"></a>

- *Type:* `string`

---

##### `statementId`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutPermissionRequest.property.statementId"></a>

- *Type:* `string`

---

### EventBridgePutRuleRequest <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutRuleRequest: eventbridge.EventBridgePutRuleRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest.property.description"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest.property.eventBusName"></a>

- *Type:* `string`

---

##### `eventPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest.property.eventPattern"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTag`](#aws-cdk-sdk.eventbridge.EventBridgeTag)[]

---

### EventBridgePutRuleResponse <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutRuleResponse: eventbridge.EventBridgePutRuleResponse = { ... }
```

##### `ruleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutRuleResponse.property.ruleArn"></a>

- *Type:* `string`

---

### EventBridgePutTargetsRequest <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutTargetsRequest: eventbridge.EventBridgePutTargetsRequest = { ... }
```

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsRequest.property.rule"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTarget`](#aws-cdk-sdk.eventbridge.EventBridgeTarget)[]

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsRequest.property.eventBusName"></a>

- *Type:* `string`

---

### EventBridgePutTargetsResponse <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutTargetsResponse: eventbridge.EventBridgePutTargetsResponse = { ... }
```

##### `failedEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsResponse.property.failedEntries"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutTargetsResultEntry`](#aws-cdk-sdk.eventbridge.EventBridgePutTargetsResultEntry)[]

---

##### `failedEntryCount`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsResponse.property.failedEntryCount"></a>

- *Type:* `number`

---

### EventBridgePutTargetsResultEntry <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsResultEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgePutTargetsResultEntry: eventbridge.EventBridgePutTargetsResultEntry = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsResultEntry.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsResultEntry.property.errorMessage"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgePutTargetsResultEntry.property.targetId"></a>

- *Type:* `string`

---

### EventBridgeRedshiftDataParameters <a name="aws-cdk-sdk.eventbridge.EventBridgeRedshiftDataParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeRedshiftDataParameters: eventbridge.EventBridgeRedshiftDataParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRedshiftDataParameters.property.database"></a>

- *Type:* `string`

---

##### `sql`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRedshiftDataParameters.property.sql"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRedshiftDataParameters.property.dbUser"></a>

- *Type:* `string`

---

##### `secretManagerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRedshiftDataParameters.property.secretManagerArn"></a>

- *Type:* `string`

---

##### `statementName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRedshiftDataParameters.property.statementName"></a>

- *Type:* `string`

---

##### `withEvent`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRedshiftDataParameters.property.withEvent"></a>

- *Type:* `boolean`

---

### EventBridgeRemovePermissionRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeRemovePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeRemovePermissionRequest: eventbridge.EventBridgeRemovePermissionRequest = { ... }
```

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemovePermissionRequest.property.eventBusName"></a>

- *Type:* `string`

---

##### `removeAllPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemovePermissionRequest.property.removeAllPermissions"></a>

- *Type:* `boolean`

---

##### `statementId`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemovePermissionRequest.property.statementId"></a>

- *Type:* `string`

---

### EventBridgeRemoveTargetsRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeRemoveTargetsRequest: eventbridge.EventBridgeRemoveTargetsRequest = { ... }
```

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsRequest.property.ids"></a>

- *Type:* `string`[]

---

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsRequest.property.rule"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsRequest.property.eventBusName"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsRequest.property.force"></a>

- *Type:* `boolean`

---

### EventBridgeRemoveTargetsResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeRemoveTargetsResponse: eventbridge.EventBridgeRemoveTargetsResponse = { ... }
```

##### `failedEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResponse.property.failedEntries"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResultEntry`](#aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResultEntry)[]

---

##### `failedEntryCount`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResponse.property.failedEntryCount"></a>

- *Type:* `number`

---

### EventBridgeRemoveTargetsResultEntry <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResultEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeRemoveTargetsResultEntry: eventbridge.EventBridgeRemoveTargetsResultEntry = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResultEntry.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResultEntry.property.errorMessage"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResultEntry.property.targetId"></a>

- *Type:* `string`

---

### EventBridgeReplay <a name="aws-cdk-sdk.eventbridge.EventBridgeReplay"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeReplay: eventbridge.EventBridgeReplay = { ... }
```

##### `eventEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplay.property.eventEndTime"></a>

- *Type:* `string`

---

##### `eventLastReplayedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplay.property.eventLastReplayedTime"></a>

- *Type:* `string`

---

##### `eventSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplay.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `eventStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplay.property.eventStartTime"></a>

- *Type:* `string`

---

##### `replayEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplay.property.replayEndTime"></a>

- *Type:* `string`

---

##### `replayName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplay.property.replayName"></a>

- *Type:* `string`

---

##### `replayStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplay.property.replayStartTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplay.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplay.property.stateReason"></a>

- *Type:* `string`

---

### EventBridgeReplayDestination <a name="aws-cdk-sdk.eventbridge.EventBridgeReplayDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeReplayDestination: eventbridge.EventBridgeReplayDestination = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplayDestination.property.arn"></a>

- *Type:* `string`

---

##### `filterArns`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeReplayDestination.property.filterArns"></a>

- *Type:* `string`[]

---

### EventBridgeRetryPolicy <a name="aws-cdk-sdk.eventbridge.EventBridgeRetryPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeRetryPolicy: eventbridge.EventBridgeRetryPolicy = { ... }
```

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRetryPolicy.property.maximumEventAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRetryPolicy.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

### EventBridgeRule <a name="aws-cdk-sdk.eventbridge.EventBridgeRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeRule: eventbridge.EventBridgeRule = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRule.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRule.property.description"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRule.property.eventBusName"></a>

- *Type:* `string`

---

##### `eventPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRule.property.eventPattern"></a>

- *Type:* `string`

---

##### `managedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRule.property.managedBy"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRule.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRule.property.roleArn"></a>

- *Type:* `string`

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRule.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRule.property.state"></a>

- *Type:* `string`

---

### EventBridgeRunCommandParameters <a name="aws-cdk-sdk.eventbridge.EventBridgeRunCommandParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeRunCommandParameters: eventbridge.EventBridgeRunCommandParameters = { ... }
```

##### `runCommandTargets`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRunCommandParameters.property.runCommandTargets"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRunCommandTarget`](#aws-cdk-sdk.eventbridge.EventBridgeRunCommandTarget)[]

---

### EventBridgeRunCommandTarget <a name="aws-cdk-sdk.eventbridge.EventBridgeRunCommandTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeRunCommandTarget: eventbridge.EventBridgeRunCommandTarget = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRunCommandTarget.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeRunCommandTarget.property.values"></a>

- *Type:* `string`[]

---

### EventBridgeSqsParameters <a name="aws-cdk-sdk.eventbridge.EventBridgeSqsParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeSqsParameters: eventbridge.EventBridgeSqsParameters = { ... }
```

##### `messageGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeSqsParameters.property.messageGroupId"></a>

- *Type:* `string`

---

### EventBridgeStartReplayRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeStartReplayRequest: eventbridge.EventBridgeStartReplayRequest = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest.property.destination"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeReplayDestination`](#aws-cdk-sdk.eventbridge.EventBridgeReplayDestination)

---

##### `eventEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest.property.eventEndTime"></a>

- *Type:* `string`

---

##### `eventSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `eventStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest.property.eventStartTime"></a>

- *Type:* `string`

---

##### `replayName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest.property.replayName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest.property.description"></a>

- *Type:* `string`

---

### EventBridgeStartReplayResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeStartReplayResponse: eventbridge.EventBridgeStartReplayResponse = { ... }
```

##### `replayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayResponse.property.replayArn"></a>

- *Type:* `string`

---

##### `replayStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayResponse.property.replayStartTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayResponse.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeStartReplayResponse.property.stateReason"></a>

- *Type:* `string`

---

### EventBridgeTag <a name="aws-cdk-sdk.eventbridge.EventBridgeTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeTag: eventbridge.EventBridgeTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTag.property.value"></a>

- *Type:* `string`

---

### EventBridgeTagResourceRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeTagResourceRequest: eventbridge.EventBridgeTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTag`](#aws-cdk-sdk.eventbridge.EventBridgeTag)[]

---

### EventBridgeTagResourceResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeTagResourceResponse: eventbridge.EventBridgeTagResourceResponse = { ... }
```

### EventBridgeTarget <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeTarget: eventbridge.EventBridgeTarget = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.id"></a>

- *Type:* `string`

---

##### `batchParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.batchParameters"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeBatchParameters`](#aws-cdk-sdk.eventbridge.EventBridgeBatchParameters)

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.deadLetterConfig"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDeadLetterConfig`](#aws-cdk-sdk.eventbridge.EventBridgeDeadLetterConfig)

---

##### `ecsParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.ecsParameters"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeEcsParameters`](#aws-cdk-sdk.eventbridge.EventBridgeEcsParameters)

---

##### `httpParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.httpParameters"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeHttpParameters`](#aws-cdk-sdk.eventbridge.EventBridgeHttpParameters)

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.input"></a>

- *Type:* `string`

---

##### `inputPath`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.inputPath"></a>

- *Type:* `string`

---

##### `inputTransformer`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.inputTransformer"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeInputTransformer`](#aws-cdk-sdk.eventbridge.EventBridgeInputTransformer)

---

##### `kinesisParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.kinesisParameters"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeKinesisParameters`](#aws-cdk-sdk.eventbridge.EventBridgeKinesisParameters)

---

##### `redshiftDataParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.redshiftDataParameters"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRedshiftDataParameters`](#aws-cdk-sdk.eventbridge.EventBridgeRedshiftDataParameters)

---

##### `retryPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRetryPolicy`](#aws-cdk-sdk.eventbridge.EventBridgeRetryPolicy)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.roleArn"></a>

- *Type:* `string`

---

##### `runCommandParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.runCommandParameters"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRunCommandParameters`](#aws-cdk-sdk.eventbridge.EventBridgeRunCommandParameters)

---

##### `sqsParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTarget.property.sqsParameters"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeSqsParameters`](#aws-cdk-sdk.eventbridge.EventBridgeSqsParameters)

---

### EventBridgeTestEventPatternRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeTestEventPatternRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeTestEventPatternRequest: eventbridge.EventBridgeTestEventPatternRequest = { ... }
```

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTestEventPatternRequest.property.event"></a>

- *Type:* `string`

---

##### `eventPattern`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTestEventPatternRequest.property.eventPattern"></a>

- *Type:* `string`

---

### EventBridgeTestEventPatternResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeTestEventPatternResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeTestEventPatternResponse: eventbridge.EventBridgeTestEventPatternResponse = { ... }
```

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeTestEventPatternResponse.property.result"></a>

- *Type:* `boolean`

---

### EventBridgeUntagResourceRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeUntagResourceRequest: eventbridge.EventBridgeUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### EventBridgeUntagResourceResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeUntagResourceResponse: eventbridge.EventBridgeUntagResourceResponse = { ... }
```

### EventBridgeUpdateArchiveRequest <a name="aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeUpdateArchiveRequest: eventbridge.EventBridgeUpdateArchiveRequest = { ... }
```

##### `archiveName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveRequest.property.archiveName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveRequest.property.description"></a>

- *Type:* `string`

---

##### `eventPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveRequest.property.eventPattern"></a>

- *Type:* `string`

---

##### `retentionDays`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveRequest.property.retentionDays"></a>

- *Type:* `number`

---

### EventBridgeUpdateArchiveResponse <a name="aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

const eventBridgeUpdateArchiveResponse: eventbridge.EventBridgeUpdateArchiveResponse = { ... }
```

##### `archiveArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveResponse.property.archiveArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveResponse.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveResponse.property.stateReason"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### EventBridgeResponsesCancelReplay <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCancelReplay"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCancelReplay.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesCancelReplay(__scope: Construct, __resources: string[], __input: EventBridgeCancelReplayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCancelReplay.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCancelReplay.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCancelReplay.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeCancelReplayRequest`](#aws-cdk-sdk.eventbridge.EventBridgeCancelReplayRequest)

---



#### Properties <a name="Properties"></a>

##### `replayArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCancelReplay.property.replayArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCancelReplay.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCancelReplay.property.stateReason"></a>

- *Type:* `string`

---


### EventBridgeResponsesCreateArchive <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateArchive"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateArchive.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesCreateArchive(__scope: Construct, __resources: string[], __input: EventBridgeCreateArchiveRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateArchive.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateArchive.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateArchive.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveRequest`](#aws-cdk-sdk.eventbridge.EventBridgeCreateArchiveRequest)

---



#### Properties <a name="Properties"></a>

##### `archiveArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateArchive.property.archiveArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateArchive.property.creationTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateArchive.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateArchive.property.stateReason"></a>

- *Type:* `string`

---


### EventBridgeResponsesCreateEventBus <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateEventBus"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateEventBus.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesCreateEventBus(__scope: Construct, __resources: string[], __input: EventBridgeCreateEventBusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateEventBus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateEventBus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateEventBus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeCreateEventBusRequest`](#aws-cdk-sdk.eventbridge.EventBridgeCreateEventBusRequest)

---



#### Properties <a name="Properties"></a>

##### `eventBusArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreateEventBus.property.eventBusArn"></a>

- *Type:* `string`

---


### EventBridgeResponsesCreatePartnerEventSource <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreatePartnerEventSource"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreatePartnerEventSource.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesCreatePartnerEventSource(__scope: Construct, __resources: string[], __input: EventBridgeCreatePartnerEventSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreatePartnerEventSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreatePartnerEventSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreatePartnerEventSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeCreatePartnerEventSourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeCreatePartnerEventSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `eventSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesCreatePartnerEventSource.property.eventSourceArn"></a>

- *Type:* `string`

---


### EventBridgeResponsesDescribeArchive <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesDescribeArchive(__scope: Construct, __resources: string[], __input: EventBridgeDescribeArchiveRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeArchiveRequest)

---



#### Properties <a name="Properties"></a>

##### `archiveArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.archiveArn"></a>

- *Type:* `string`

---

##### `archiveName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.archiveName"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.description"></a>

- *Type:* `string`

---

##### `eventCount`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.eventCount"></a>

- *Type:* `number`

---

##### `eventPattern`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.eventPattern"></a>

- *Type:* `string`

---

##### `eventSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `retentionDays`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.retentionDays"></a>

- *Type:* `number`

---

##### `sizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.sizeBytes"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeArchive.property.stateReason"></a>

- *Type:* `string`

---


### EventBridgeResponsesDescribeEventBus <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventBus"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventBus.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesDescribeEventBus(__scope: Construct, __resources: string[], __input: EventBridgeDescribeEventBusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventBus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventBus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventBus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeEventBusRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeEventBusRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventBus.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventBus.property.name"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventBus.property.policy"></a>

- *Type:* `string`

---


### EventBridgeResponsesDescribeEventSource <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesDescribeEventSource(__scope: Construct, __resources: string[], __input: EventBridgeDescribeEventSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeEventSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource.property.arn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource.property.createdBy"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource.property.creationTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource.property.expirationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeEventSource.property.state"></a>

- *Type:* `string`

---


### EventBridgeResponsesDescribePartnerEventSource <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribePartnerEventSource"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribePartnerEventSource.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesDescribePartnerEventSource(__scope: Construct, __resources: string[], __input: EventBridgeDescribePartnerEventSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribePartnerEventSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribePartnerEventSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribePartnerEventSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribePartnerEventSourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribePartnerEventSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribePartnerEventSource.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribePartnerEventSource.property.name"></a>

- *Type:* `string`

---


### EventBridgeResponsesDescribeReplay <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesDescribeReplay(__scope: Construct, __resources: string[], __input: EventBridgeDescribeReplayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.description"></a>

- *Type:* `string`

---

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.destination"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplayDestination`](#aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplayDestination)

---

##### `eventEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.eventEndTime"></a>

- *Type:* `string`

---

##### `eventLastReplayedTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.eventLastReplayedTime"></a>

- *Type:* `string`

---

##### `eventSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `eventStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.eventStartTime"></a>

- *Type:* `string`

---

##### `replayArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.replayArn"></a>

- *Type:* `string`

---

##### `replayEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.replayEndTime"></a>

- *Type:* `string`

---

##### `replayName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.replayName"></a>

- *Type:* `string`

---

##### `replayStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.replayStartTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplay.property.stateReason"></a>

- *Type:* `string`

---


### EventBridgeResponsesDescribeReplayDestination <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplayDestination"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplayDestination.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesDescribeReplayDestination(__scope: Construct, __resources: string[], __input: EventBridgeDescribeReplayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplayDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplayDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplayDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeReplayRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplayDestination.property.arn"></a>

- *Type:* `string`

---

##### `filterArns`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeReplayDestination.property.filterArns"></a>

- *Type:* `string`[]

---


### EventBridgeResponsesDescribeRule <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesDescribeRule(__scope: Construct, __resources: string[], __input: EventBridgeDescribeRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleRequest`](#aws-cdk-sdk.eventbridge.EventBridgeDescribeRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.property.arn"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.property.createdBy"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.property.description"></a>

- *Type:* `string`

---

##### `eventBusName`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.property.eventBusName"></a>

- *Type:* `string`

---

##### `eventPattern`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.property.eventPattern"></a>

- *Type:* `string`

---

##### `managedBy`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.property.managedBy"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.property.roleArn"></a>

- *Type:* `string`

---

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesDescribeRule.property.state"></a>

- *Type:* `string`

---


### EventBridgeResponsesListArchives <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListArchives"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListArchives.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesListArchives(__scope: Construct, __resources: string[], __input: EventBridgeListArchivesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListArchives.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListArchives.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListArchives.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListArchivesRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListArchivesRequest)

---



#### Properties <a name="Properties"></a>

##### `archives`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListArchives.property.archives"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeArchive`](#aws-cdk-sdk.eventbridge.EventBridgeArchive)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListArchives.property.nextToken"></a>

- *Type:* `string`

---


### EventBridgeResponsesListEventBuses <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventBuses"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventBuses.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesListEventBuses(__scope: Construct, __resources: string[], __input: EventBridgeListEventBusesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventBuses.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventBuses.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventBuses.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListEventBusesRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListEventBusesRequest)

---



#### Properties <a name="Properties"></a>

##### `eventBuses`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventBuses.property.eventBuses"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeEventBus`](#aws-cdk-sdk.eventbridge.EventBridgeEventBus)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventBuses.property.nextToken"></a>

- *Type:* `string`

---


### EventBridgeResponsesListEventSources <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventSources"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventSources.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesListEventSources(__scope: Construct, __resources: string[], __input: EventBridgeListEventSourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventSources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventSources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventSources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListEventSourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `eventSources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventSources.property.eventSources"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeEventSource`](#aws-cdk-sdk.eventbridge.EventBridgeEventSource)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListEventSources.property.nextToken"></a>

- *Type:* `string`

---


### EventBridgeResponsesListPartnerEventSourceAccounts <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSourceAccounts"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSourceAccounts.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesListPartnerEventSourceAccounts(__scope: Construct, __resources: string[], __input: EventBridgeListPartnerEventSourceAccountsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSourceAccounts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSourceAccounts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSourceAccounts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourceAccountsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSourceAccounts.property.nextToken"></a>

- *Type:* `string`

---

##### `partnerEventSourceAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSourceAccounts.property.partnerEventSourceAccounts"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePartnerEventSourceAccount`](#aws-cdk-sdk.eventbridge.EventBridgePartnerEventSourceAccount)[]

---


### EventBridgeResponsesListPartnerEventSources <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSources"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSources.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesListPartnerEventSources(__scope: Construct, __resources: string[], __input: EventBridgeListPartnerEventSourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListPartnerEventSourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSources.property.nextToken"></a>

- *Type:* `string`

---

##### `partnerEventSources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListPartnerEventSources.property.partnerEventSources"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePartnerEventSource`](#aws-cdk-sdk.eventbridge.EventBridgePartnerEventSource)[]

---


### EventBridgeResponsesListReplays <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListReplays"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListReplays.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesListReplays(__scope: Construct, __resources: string[], __input: EventBridgeListReplaysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListReplays.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListReplays.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListReplays.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListReplaysRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListReplaysRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListReplays.property.nextToken"></a>

- *Type:* `string`

---

##### `replays`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListReplays.property.replays"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeReplay`](#aws-cdk-sdk.eventbridge.EventBridgeReplay)[]

---


### EventBridgeResponsesListRuleNamesByTarget <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRuleNamesByTarget"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRuleNamesByTarget.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesListRuleNamesByTarget(__scope: Construct, __resources: string[], __input: EventBridgeListRuleNamesByTargetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRuleNamesByTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRuleNamesByTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRuleNamesByTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListRuleNamesByTargetRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRuleNamesByTarget.property.nextToken"></a>

- *Type:* `string`

---

##### `ruleNames`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRuleNamesByTarget.property.ruleNames"></a>

- *Type:* `string`[]

---


### EventBridgeResponsesListRules <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRules"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRules.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesListRules(__scope: Construct, __resources: string[], __input: EventBridgeListRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListRulesRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRules.property.nextToken"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListRules.property.rules"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRule`](#aws-cdk-sdk.eventbridge.EventBridgeRule)[]

---


### EventBridgeResponsesListTagsForResource <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTagsForResource.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: EventBridgeListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListTagsForResourceRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTag`](#aws-cdk-sdk.eventbridge.EventBridgeTag)[]

---


### EventBridgeResponsesListTargetsByRule <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTargetsByRule"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTargetsByRule.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesListTargetsByRule(__scope: Construct, __resources: string[], __input: EventBridgeListTargetsByRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTargetsByRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTargetsByRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTargetsByRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleRequest`](#aws-cdk-sdk.eventbridge.EventBridgeListTargetsByRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTargetsByRule.property.nextToken"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesListTargetsByRule.property.targets"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTarget`](#aws-cdk-sdk.eventbridge.EventBridgeTarget)[]

---


### EventBridgeResponsesPutEvents <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutEvents"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutEvents.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesPutEvents(__scope: Construct, __resources: string[], __input: EventBridgePutEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutEventsRequest`](#aws-cdk-sdk.eventbridge.EventBridgePutEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutEvents.property.entries"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutEventsResultEntry`](#aws-cdk-sdk.eventbridge.EventBridgePutEventsResultEntry)[]

---

##### `failedEntryCount`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutEvents.property.failedEntryCount"></a>

- *Type:* `number`

---


### EventBridgeResponsesPutPartnerEvents <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutPartnerEvents"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutPartnerEvents.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesPutPartnerEvents(__scope: Construct, __resources: string[], __input: EventBridgePutPartnerEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutPartnerEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutPartnerEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutPartnerEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequest`](#aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutPartnerEvents.property.entries"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResultEntry`](#aws-cdk-sdk.eventbridge.EventBridgePutPartnerEventsResultEntry)[]

---

##### `failedEntryCount`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutPartnerEvents.property.failedEntryCount"></a>

- *Type:* `number`

---


### EventBridgeResponsesPutRule <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutRule"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutRule.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesPutRule(__scope: Construct, __resources: string[], __input: EventBridgePutRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest`](#aws-cdk-sdk.eventbridge.EventBridgePutRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `ruleArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutRule.property.ruleArn"></a>

- *Type:* `string`

---


### EventBridgeResponsesPutTargets <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutTargets"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutTargets.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesPutTargets(__scope: Construct, __resources: string[], __input: EventBridgePutTargetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutTargetsRequest`](#aws-cdk-sdk.eventbridge.EventBridgePutTargetsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedEntries`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutTargets.property.failedEntries"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgePutTargetsResultEntry`](#aws-cdk-sdk.eventbridge.EventBridgePutTargetsResultEntry)[]

---

##### `failedEntryCount`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesPutTargets.property.failedEntryCount"></a>

- *Type:* `number`

---


### EventBridgeResponsesRemoveTargets <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesRemoveTargets"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesRemoveTargets.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesRemoveTargets(__scope: Construct, __resources: string[], __input: EventBridgeRemoveTargetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesRemoveTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesRemoveTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesRemoveTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsRequest`](#aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedEntries`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesRemoveTargets.property.failedEntries"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResultEntry`](#aws-cdk-sdk.eventbridge.EventBridgeRemoveTargetsResultEntry)[]

---

##### `failedEntryCount`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesRemoveTargets.property.failedEntryCount"></a>

- *Type:* `number`

---


### EventBridgeResponsesStartReplay <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesStartReplay"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesStartReplay.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesStartReplay(__scope: Construct, __resources: string[], __input: EventBridgeStartReplayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesStartReplay.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesStartReplay.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesStartReplay.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest`](#aws-cdk-sdk.eventbridge.EventBridgeStartReplayRequest)

---



#### Properties <a name="Properties"></a>

##### `replayArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesStartReplay.property.replayArn"></a>

- *Type:* `string`

---

##### `replayStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesStartReplay.property.replayStartTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesStartReplay.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesStartReplay.property.stateReason"></a>

- *Type:* `string`

---


### EventBridgeResponsesTestEventPattern <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesTestEventPattern"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesTestEventPattern.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesTestEventPattern(__scope: Construct, __resources: string[], __input: EventBridgeTestEventPatternRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesTestEventPattern.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesTestEventPattern.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesTestEventPattern.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeTestEventPatternRequest`](#aws-cdk-sdk.eventbridge.EventBridgeTestEventPatternRequest)

---



#### Properties <a name="Properties"></a>

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesTestEventPattern.property.result"></a>

- *Type:* `boolean`

---


### EventBridgeResponsesUpdateArchive <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesUpdateArchive"></a>

#### Initializer <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesUpdateArchive.Initializer"></a>

```typescript
import { eventbridge } from 'aws-cdk-sdk'

new eventbridge.EventBridgeResponsesUpdateArchive(__scope: Construct, __resources: string[], __input: EventBridgeUpdateArchiveRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesUpdateArchive.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesUpdateArchive.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesUpdateArchive.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveRequest`](#aws-cdk-sdk.eventbridge.EventBridgeUpdateArchiveRequest)

---



#### Properties <a name="Properties"></a>

##### `archiveArn`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesUpdateArchive.property.archiveArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesUpdateArchive.property.creationTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesUpdateArchive.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.eventbridge.EventBridgeResponsesUpdateArchive.property.stateReason"></a>

- *Type:* `string`

---



