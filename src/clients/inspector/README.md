# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### InspectorClient <a name="aws-cdk-sdk.inspector.InspectorClient"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorClient.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addAttributesToFindings` <a name="aws-cdk-sdk.inspector.InspectorClient.addAttributesToFindings"></a>

```typescript
public addAttributesToFindings(input: InspectorAddAttributesToFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAddAttributesToFindingsRequest`](#aws-cdk-sdk.inspector.InspectorAddAttributesToFindingsRequest)

---

##### `createAssessmentTarget` <a name="aws-cdk-sdk.inspector.InspectorClient.createAssessmentTarget"></a>

```typescript
public createAssessmentTarget(input: InspectorCreateAssessmentTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorCreateAssessmentTargetRequest`](#aws-cdk-sdk.inspector.InspectorCreateAssessmentTargetRequest)

---

##### `createAssessmentTemplate` <a name="aws-cdk-sdk.inspector.InspectorClient.createAssessmentTemplate"></a>

```typescript
public createAssessmentTemplate(input: InspectorCreateAssessmentTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateRequest`](#aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateRequest)

---

##### `createExclusionsPreview` <a name="aws-cdk-sdk.inspector.InspectorClient.createExclusionsPreview"></a>

```typescript
public createExclusionsPreview(input: InspectorCreateExclusionsPreviewRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorCreateExclusionsPreviewRequest`](#aws-cdk-sdk.inspector.InspectorCreateExclusionsPreviewRequest)

---

##### `createResourceGroup` <a name="aws-cdk-sdk.inspector.InspectorClient.createResourceGroup"></a>

```typescript
public createResourceGroup(input: InspectorCreateResourceGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorCreateResourceGroupRequest`](#aws-cdk-sdk.inspector.InspectorCreateResourceGroupRequest)

---

##### `deleteAssessmentRun` <a name="aws-cdk-sdk.inspector.InspectorClient.deleteAssessmentRun"></a>

```typescript
public deleteAssessmentRun(input: InspectorDeleteAssessmentRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDeleteAssessmentRunRequest`](#aws-cdk-sdk.inspector.InspectorDeleteAssessmentRunRequest)

---

##### `deleteAssessmentTarget` <a name="aws-cdk-sdk.inspector.InspectorClient.deleteAssessmentTarget"></a>

```typescript
public deleteAssessmentTarget(input: InspectorDeleteAssessmentTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDeleteAssessmentTargetRequest`](#aws-cdk-sdk.inspector.InspectorDeleteAssessmentTargetRequest)

---

##### `deleteAssessmentTemplate` <a name="aws-cdk-sdk.inspector.InspectorClient.deleteAssessmentTemplate"></a>

```typescript
public deleteAssessmentTemplate(input: InspectorDeleteAssessmentTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDeleteAssessmentTemplateRequest`](#aws-cdk-sdk.inspector.InspectorDeleteAssessmentTemplateRequest)

---

##### `describeAssessmentRuns` <a name="aws-cdk-sdk.inspector.InspectorClient.describeAssessmentRuns"></a>

```typescript
public describeAssessmentRuns(input: InspectorDescribeAssessmentRunsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeAssessmentRunsRequest`](#aws-cdk-sdk.inspector.InspectorDescribeAssessmentRunsRequest)

---

##### `describeAssessmentTargets` <a name="aws-cdk-sdk.inspector.InspectorClient.describeAssessmentTargets"></a>

```typescript
public describeAssessmentTargets(input: InspectorDescribeAssessmentTargetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeAssessmentTargetsRequest`](#aws-cdk-sdk.inspector.InspectorDescribeAssessmentTargetsRequest)

---

##### `describeAssessmentTemplates` <a name="aws-cdk-sdk.inspector.InspectorClient.describeAssessmentTemplates"></a>

```typescript
public describeAssessmentTemplates(input: InspectorDescribeAssessmentTemplatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeAssessmentTemplatesRequest`](#aws-cdk-sdk.inspector.InspectorDescribeAssessmentTemplatesRequest)

---

##### `describeCrossAccountAccessRole` <a name="aws-cdk-sdk.inspector.InspectorClient.describeCrossAccountAccessRole"></a>

```typescript
public describeCrossAccountAccessRole()
```

##### `describeExclusions` <a name="aws-cdk-sdk.inspector.InspectorClient.describeExclusions"></a>

```typescript
public describeExclusions(input: InspectorDescribeExclusionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeExclusionsRequest`](#aws-cdk-sdk.inspector.InspectorDescribeExclusionsRequest)

---

##### `describeFindings` <a name="aws-cdk-sdk.inspector.InspectorClient.describeFindings"></a>

```typescript
public describeFindings(input: InspectorDescribeFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeFindingsRequest`](#aws-cdk-sdk.inspector.InspectorDescribeFindingsRequest)

---

##### `describeResourceGroups` <a name="aws-cdk-sdk.inspector.InspectorClient.describeResourceGroups"></a>

```typescript
public describeResourceGroups(input: InspectorDescribeResourceGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeResourceGroupsRequest`](#aws-cdk-sdk.inspector.InspectorDescribeResourceGroupsRequest)

---

##### `describeRulesPackages` <a name="aws-cdk-sdk.inspector.InspectorClient.describeRulesPackages"></a>

```typescript
public describeRulesPackages(input: InspectorDescribeRulesPackagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeRulesPackagesRequest`](#aws-cdk-sdk.inspector.InspectorDescribeRulesPackagesRequest)

---

##### `fetchAssessmentReport` <a name="aws-cdk-sdk.inspector.InspectorClient.fetchAssessmentReport"></a>

```typescript
public fetchAssessmentReport(input: InspectorGetAssessmentReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorGetAssessmentReportRequest`](#aws-cdk-sdk.inspector.InspectorGetAssessmentReportRequest)

---

##### `fetchExclusionsPreview` <a name="aws-cdk-sdk.inspector.InspectorClient.fetchExclusionsPreview"></a>

```typescript
public fetchExclusionsPreview(input: InspectorGetExclusionsPreviewRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewRequest`](#aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewRequest)

---

##### `fetchTelemetryMetadata` <a name="aws-cdk-sdk.inspector.InspectorClient.fetchTelemetryMetadata"></a>

```typescript
public fetchTelemetryMetadata(input: InspectorGetTelemetryMetadataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorGetTelemetryMetadataRequest`](#aws-cdk-sdk.inspector.InspectorGetTelemetryMetadataRequest)

---

##### `listAssessmentRunAgents` <a name="aws-cdk-sdk.inspector.InspectorClient.listAssessmentRunAgents"></a>

```typescript
public listAssessmentRunAgents(input: InspectorListAssessmentRunAgentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsRequest`](#aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsRequest)

---

##### `listAssessmentRuns` <a name="aws-cdk-sdk.inspector.InspectorClient.listAssessmentRuns"></a>

```typescript
public listAssessmentRuns(input: InspectorListAssessmentRunsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListAssessmentRunsRequest`](#aws-cdk-sdk.inspector.InspectorListAssessmentRunsRequest)

---

##### `listAssessmentTargets` <a name="aws-cdk-sdk.inspector.InspectorClient.listAssessmentTargets"></a>

```typescript
public listAssessmentTargets(input: InspectorListAssessmentTargetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListAssessmentTargetsRequest`](#aws-cdk-sdk.inspector.InspectorListAssessmentTargetsRequest)

---

##### `listAssessmentTemplates` <a name="aws-cdk-sdk.inspector.InspectorClient.listAssessmentTemplates"></a>

```typescript
public listAssessmentTemplates(input: InspectorListAssessmentTemplatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesRequest`](#aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesRequest)

---

##### `listEventSubscriptions` <a name="aws-cdk-sdk.inspector.InspectorClient.listEventSubscriptions"></a>

```typescript
public listEventSubscriptions(input: InspectorListEventSubscriptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListEventSubscriptionsRequest`](#aws-cdk-sdk.inspector.InspectorListEventSubscriptionsRequest)

---

##### `listExclusions` <a name="aws-cdk-sdk.inspector.InspectorClient.listExclusions"></a>

```typescript
public listExclusions(input: InspectorListExclusionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListExclusionsRequest`](#aws-cdk-sdk.inspector.InspectorListExclusionsRequest)

---

##### `listFindings` <a name="aws-cdk-sdk.inspector.InspectorClient.listFindings"></a>

```typescript
public listFindings(input: InspectorListFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListFindingsRequest`](#aws-cdk-sdk.inspector.InspectorListFindingsRequest)

---

##### `listRulesPackages` <a name="aws-cdk-sdk.inspector.InspectorClient.listRulesPackages"></a>

```typescript
public listRulesPackages(input: InspectorListRulesPackagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListRulesPackagesRequest`](#aws-cdk-sdk.inspector.InspectorListRulesPackagesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.inspector.InspectorClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: InspectorListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListTagsForResourceRequest`](#aws-cdk-sdk.inspector.InspectorListTagsForResourceRequest)

---

##### `previewAgents` <a name="aws-cdk-sdk.inspector.InspectorClient.previewAgents"></a>

```typescript
public previewAgents(input: InspectorPreviewAgentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorPreviewAgentsRequest`](#aws-cdk-sdk.inspector.InspectorPreviewAgentsRequest)

---

##### `putTagsForResource` <a name="aws-cdk-sdk.inspector.InspectorClient.putTagsForResource"></a>

```typescript
public putTagsForResource(input: InspectorSetTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorSetTagsForResourceRequest`](#aws-cdk-sdk.inspector.InspectorSetTagsForResourceRequest)

---

##### `registerCrossAccountAccessRole` <a name="aws-cdk-sdk.inspector.InspectorClient.registerCrossAccountAccessRole"></a>

```typescript
public registerCrossAccountAccessRole(input: InspectorRegisterCrossAccountAccessRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorRegisterCrossAccountAccessRoleRequest`](#aws-cdk-sdk.inspector.InspectorRegisterCrossAccountAccessRoleRequest)

---

##### `removeAttributesFromFindings` <a name="aws-cdk-sdk.inspector.InspectorClient.removeAttributesFromFindings"></a>

```typescript
public removeAttributesFromFindings(input: InspectorRemoveAttributesFromFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorRemoveAttributesFromFindingsRequest`](#aws-cdk-sdk.inspector.InspectorRemoveAttributesFromFindingsRequest)

---

##### `startAssessmentRun` <a name="aws-cdk-sdk.inspector.InspectorClient.startAssessmentRun"></a>

```typescript
public startAssessmentRun(input: InspectorStartAssessmentRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorStartAssessmentRunRequest`](#aws-cdk-sdk.inspector.InspectorStartAssessmentRunRequest)

---

##### `stopAssessmentRun` <a name="aws-cdk-sdk.inspector.InspectorClient.stopAssessmentRun"></a>

```typescript
public stopAssessmentRun(input: InspectorStopAssessmentRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorStopAssessmentRunRequest`](#aws-cdk-sdk.inspector.InspectorStopAssessmentRunRequest)

---

##### `subscribeToEvent` <a name="aws-cdk-sdk.inspector.InspectorClient.subscribeToEvent"></a>

```typescript
public subscribeToEvent(input: InspectorSubscribeToEventRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorSubscribeToEventRequest`](#aws-cdk-sdk.inspector.InspectorSubscribeToEventRequest)

---

##### `unsubscribeFromEvent` <a name="aws-cdk-sdk.inspector.InspectorClient.unsubscribeFromEvent"></a>

```typescript
public unsubscribeFromEvent(input: InspectorUnsubscribeFromEventRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorUnsubscribeFromEventRequest`](#aws-cdk-sdk.inspector.InspectorUnsubscribeFromEventRequest)

---

##### `updateAssessmentTarget` <a name="aws-cdk-sdk.inspector.InspectorClient.updateAssessmentTarget"></a>

```typescript
public updateAssessmentTarget(input: InspectorUpdateAssessmentTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorUpdateAssessmentTargetRequest`](#aws-cdk-sdk.inspector.InspectorUpdateAssessmentTargetRequest)

---




## Structs <a name="Structs"></a>

### InspectorAddAttributesToFindingsRequest <a name="aws-cdk-sdk.inspector.InspectorAddAttributesToFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAddAttributesToFindingsRequest: inspector.InspectorAddAttributesToFindingsRequest = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAddAttributesToFindingsRequest.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAttribute`](#aws-cdk-sdk.inspector.InspectorAttribute)[]

---

##### `findingArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAddAttributesToFindingsRequest.property.findingArns"></a>

- *Type:* `string`[]

---

### InspectorAddAttributesToFindingsResponse <a name="aws-cdk-sdk.inspector.InspectorAddAttributesToFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAddAttributesToFindingsResponse: inspector.InspectorAddAttributesToFindingsResponse = { ... }
```

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAddAttributesToFindingsResponse.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

### InspectorAgentFilter <a name="aws-cdk-sdk.inspector.InspectorAgentFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAgentFilter: inspector.InspectorAgentFilter = { ... }
```

##### `agentHealthCodes`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAgentFilter.property.agentHealthCodes"></a>

- *Type:* `string`[]

---

##### `agentHealths`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAgentFilter.property.agentHealths"></a>

- *Type:* `string`[]

---

### InspectorAgentPreview <a name="aws-cdk-sdk.inspector.InspectorAgentPreview"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAgentPreview: inspector.InspectorAgentPreview = { ... }
```

##### `agentId`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAgentPreview.property.agentId"></a>

- *Type:* `string`

---

##### `agentHealth`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAgentPreview.property.agentHealth"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAgentPreview.property.agentVersion"></a>

- *Type:* `string`

---

##### `autoScalingGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAgentPreview.property.autoScalingGroup"></a>

- *Type:* `string`

---

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAgentPreview.property.hostname"></a>

- *Type:* `string`

---

##### `ipv4Address`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAgentPreview.property.ipv4Address"></a>

- *Type:* `string`

---

##### `kernelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAgentPreview.property.kernelVersion"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAgentPreview.property.operatingSystem"></a>

- *Type:* `string`

---

### InspectorAssessmentRun <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAssessmentRun: inspector.InspectorAssessmentRun = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.arn"></a>

- *Type:* `string`

---

##### `assessmentTemplateArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.assessmentTemplateArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.createdAt"></a>

- *Type:* `string`

---

##### `dataCollected`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.dataCollected"></a>

- *Type:* `boolean`

---

##### `durationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.durationInSeconds"></a>

- *Type:* `number`

---

##### `findingCounts`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.findingCounts"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.name"></a>

- *Type:* `string`

---

##### `notifications`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentRunNotification`](#aws-cdk-sdk.inspector.InspectorAssessmentRunNotification)[]

---

##### `rulesPackageArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.rulesPackageArns"></a>

- *Type:* `string`[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.state"></a>

- *Type:* `string`

---

##### `stateChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.stateChangedAt"></a>

- *Type:* `string`

---

##### `stateChanges`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.stateChanges"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentRunStateChange`](#aws-cdk-sdk.inspector.InspectorAssessmentRunStateChange)[]

---

##### `userAttributesForFindings`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.userAttributesForFindings"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAttribute`](#aws-cdk-sdk.inspector.InspectorAttribute)[]

---

##### `completedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.completedAt"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRun.property.startedAt"></a>

- *Type:* `string`

---

### InspectorAssessmentRunAgent <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunAgent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAssessmentRunAgent: inspector.InspectorAssessmentRunAgent = { ... }
```

##### `agentHealth`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunAgent.property.agentHealth"></a>

- *Type:* `string`

---

##### `agentHealthCode`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunAgent.property.agentHealthCode"></a>

- *Type:* `string`

---

##### `agentId`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunAgent.property.agentId"></a>

- *Type:* `string`

---

##### `assessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunAgent.property.assessmentRunArn"></a>

- *Type:* `string`

---

##### `telemetryMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunAgent.property.telemetryMetadata"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTelemetryMetadata`](#aws-cdk-sdk.inspector.InspectorTelemetryMetadata)[]

---

##### `agentHealthDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunAgent.property.agentHealthDetails"></a>

- *Type:* `string`

---

##### `autoScalingGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunAgent.property.autoScalingGroup"></a>

- *Type:* `string`

---

### InspectorAssessmentRunFilter <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAssessmentRunFilter: inspector.InspectorAssessmentRunFilter = { ... }
```

##### `completionTimeRange`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunFilter.property.completionTimeRange"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTimestampRange`](#aws-cdk-sdk.inspector.InspectorTimestampRange)

---

##### `durationRange`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunFilter.property.durationRange"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDurationRange`](#aws-cdk-sdk.inspector.InspectorDurationRange)

---

##### `namePattern`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunFilter.property.namePattern"></a>

- *Type:* `string`

---

##### `rulesPackageArns`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunFilter.property.rulesPackageArns"></a>

- *Type:* `string`[]

---

##### `startTimeRange`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunFilter.property.startTimeRange"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTimestampRange`](#aws-cdk-sdk.inspector.InspectorTimestampRange)

---

##### `stateChangeTimeRange`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunFilter.property.stateChangeTimeRange"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTimestampRange`](#aws-cdk-sdk.inspector.InspectorTimestampRange)

---

##### `states`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunFilter.property.states"></a>

- *Type:* `string`[]

---

### InspectorAssessmentRunNotification <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunNotification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAssessmentRunNotification: inspector.InspectorAssessmentRunNotification = { ... }
```

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunNotification.property.date"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunNotification.property.error"></a>

- *Type:* `boolean`

---

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunNotification.property.event"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunNotification.property.message"></a>

- *Type:* `string`

---

##### `snsPublishStatusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunNotification.property.snsPublishStatusCode"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunNotification.property.snsTopicArn"></a>

- *Type:* `string`

---

### InspectorAssessmentRunStateChange <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunStateChange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAssessmentRunStateChange: inspector.InspectorAssessmentRunStateChange = { ... }
```

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunStateChange.property.state"></a>

- *Type:* `string`

---

##### `stateChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentRunStateChange.property.stateChangedAt"></a>

- *Type:* `string`

---

### InspectorAssessmentTarget <a name="aws-cdk-sdk.inspector.InspectorAssessmentTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAssessmentTarget: inspector.InspectorAssessmentTarget = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTarget.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTarget.property.createdAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTarget.property.name"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTarget.property.updatedAt"></a>

- *Type:* `string`

---

##### `resourceGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTarget.property.resourceGroupArn"></a>

- *Type:* `string`

---

### InspectorAssessmentTargetFilter <a name="aws-cdk-sdk.inspector.InspectorAssessmentTargetFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAssessmentTargetFilter: inspector.InspectorAssessmentTargetFilter = { ... }
```

##### `assessmentTargetNamePattern`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTargetFilter.property.assessmentTargetNamePattern"></a>

- *Type:* `string`

---

### InspectorAssessmentTemplate <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAssessmentTemplate: inspector.InspectorAssessmentTemplate = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplate.property.arn"></a>

- *Type:* `string`

---

##### `assessmentRunCount`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplate.property.assessmentRunCount"></a>

- *Type:* `number`

---

##### `assessmentTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplate.property.assessmentTargetArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplate.property.createdAt"></a>

- *Type:* `string`

---

##### `durationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplate.property.durationInSeconds"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplate.property.name"></a>

- *Type:* `string`

---

##### `rulesPackageArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplate.property.rulesPackageArns"></a>

- *Type:* `string`[]

---

##### `userAttributesForFindings`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplate.property.userAttributesForFindings"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAttribute`](#aws-cdk-sdk.inspector.InspectorAttribute)[]

---

##### `lastAssessmentRunArn`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplate.property.lastAssessmentRunArn"></a>

- *Type:* `string`

---

### InspectorAssessmentTemplateFilter <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplateFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAssessmentTemplateFilter: inspector.InspectorAssessmentTemplateFilter = { ... }
```

##### `durationRange`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplateFilter.property.durationRange"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDurationRange`](#aws-cdk-sdk.inspector.InspectorDurationRange)

---

##### `namePattern`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplateFilter.property.namePattern"></a>

- *Type:* `string`

---

##### `rulesPackageArns`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssessmentTemplateFilter.property.rulesPackageArns"></a>

- *Type:* `string`[]

---

### InspectorAssetAttributes <a name="aws-cdk-sdk.inspector.InspectorAssetAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAssetAttributes: inspector.InspectorAssetAttributes = { ... }
```

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAssetAttributes.property.schemaVersion"></a>

- *Type:* `number`

---

##### `agentId`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssetAttributes.property.agentId"></a>

- *Type:* `string`

---

##### `amiId`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssetAttributes.property.amiId"></a>

- *Type:* `string`

---

##### `autoScalingGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssetAttributes.property.autoScalingGroup"></a>

- *Type:* `string`

---

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssetAttributes.property.hostname"></a>

- *Type:* `string`

---

##### `ipv4Addresses`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssetAttributes.property.ipv4Addresses"></a>

- *Type:* `string`[]

---

##### `networkInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssetAttributes.property.networkInterfaces"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorNetworkInterface`](#aws-cdk-sdk.inspector.InspectorNetworkInterface)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAssetAttributes.property.tags"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTag`](#aws-cdk-sdk.inspector.InspectorTag)[]

---

### InspectorAttribute <a name="aws-cdk-sdk.inspector.InspectorAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorAttribute: inspector.InspectorAttribute = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorAttribute.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorAttribute.property.value"></a>

- *Type:* `string`

---

### InspectorCreateAssessmentTargetRequest <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorCreateAssessmentTargetRequest: inspector.InspectorCreateAssessmentTargetRequest = { ... }
```

##### `assessmentTargetName`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTargetRequest.property.assessmentTargetName"></a>

- *Type:* `string`

---

##### `resourceGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTargetRequest.property.resourceGroupArn"></a>

- *Type:* `string`

---

### InspectorCreateAssessmentTargetResponse <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTargetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorCreateAssessmentTargetResponse: inspector.InspectorCreateAssessmentTargetResponse = { ... }
```

##### `assessmentTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTargetResponse.property.assessmentTargetArn"></a>

- *Type:* `string`

---

### InspectorCreateAssessmentTemplateRequest <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorCreateAssessmentTemplateRequest: inspector.InspectorCreateAssessmentTemplateRequest = { ... }
```

##### `assessmentTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateRequest.property.assessmentTargetArn"></a>

- *Type:* `string`

---

##### `assessmentTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateRequest.property.assessmentTemplateName"></a>

- *Type:* `string`

---

##### `durationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateRequest.property.durationInSeconds"></a>

- *Type:* `number`

---

##### `rulesPackageArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateRequest.property.rulesPackageArns"></a>

- *Type:* `string`[]

---

##### `userAttributesForFindings`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateRequest.property.userAttributesForFindings"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAttribute`](#aws-cdk-sdk.inspector.InspectorAttribute)[]

---

### InspectorCreateAssessmentTemplateResponse <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorCreateAssessmentTemplateResponse: inspector.InspectorCreateAssessmentTemplateResponse = { ... }
```

##### `assessmentTemplateArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateResponse.property.assessmentTemplateArn"></a>

- *Type:* `string`

---

### InspectorCreateExclusionsPreviewRequest <a name="aws-cdk-sdk.inspector.InspectorCreateExclusionsPreviewRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorCreateExclusionsPreviewRequest: inspector.InspectorCreateExclusionsPreviewRequest = { ... }
```

##### `assessmentTemplateArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateExclusionsPreviewRequest.property.assessmentTemplateArn"></a>

- *Type:* `string`

---

### InspectorCreateExclusionsPreviewResponse <a name="aws-cdk-sdk.inspector.InspectorCreateExclusionsPreviewResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorCreateExclusionsPreviewResponse: inspector.InspectorCreateExclusionsPreviewResponse = { ... }
```

##### `previewToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateExclusionsPreviewResponse.property.previewToken"></a>

- *Type:* `string`

---

### InspectorCreateResourceGroupRequest <a name="aws-cdk-sdk.inspector.InspectorCreateResourceGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorCreateResourceGroupRequest: inspector.InspectorCreateResourceGroupRequest = { ... }
```

##### `resourceGroupTags`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateResourceGroupRequest.property.resourceGroupTags"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorResourceGroupTag`](#aws-cdk-sdk.inspector.InspectorResourceGroupTag)[]

---

### InspectorCreateResourceGroupResponse <a name="aws-cdk-sdk.inspector.InspectorCreateResourceGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorCreateResourceGroupResponse: inspector.InspectorCreateResourceGroupResponse = { ... }
```

##### `resourceGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorCreateResourceGroupResponse.property.resourceGroupArn"></a>

- *Type:* `string`

---

### InspectorDeleteAssessmentRunRequest <a name="aws-cdk-sdk.inspector.InspectorDeleteAssessmentRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDeleteAssessmentRunRequest: inspector.InspectorDeleteAssessmentRunRequest = { ... }
```

##### `assessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDeleteAssessmentRunRequest.property.assessmentRunArn"></a>

- *Type:* `string`

---

### InspectorDeleteAssessmentTargetRequest <a name="aws-cdk-sdk.inspector.InspectorDeleteAssessmentTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDeleteAssessmentTargetRequest: inspector.InspectorDeleteAssessmentTargetRequest = { ... }
```

##### `assessmentTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDeleteAssessmentTargetRequest.property.assessmentTargetArn"></a>

- *Type:* `string`

---

### InspectorDeleteAssessmentTemplateRequest <a name="aws-cdk-sdk.inspector.InspectorDeleteAssessmentTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDeleteAssessmentTemplateRequest: inspector.InspectorDeleteAssessmentTemplateRequest = { ... }
```

##### `assessmentTemplateArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDeleteAssessmentTemplateRequest.property.assessmentTemplateArn"></a>

- *Type:* `string`

---

### InspectorDescribeAssessmentRunsRequest <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentRunsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeAssessmentRunsRequest: inspector.InspectorDescribeAssessmentRunsRequest = { ... }
```

##### `assessmentRunArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentRunsRequest.property.assessmentRunArns"></a>

- *Type:* `string`[]

---

### InspectorDescribeAssessmentRunsResponse <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentRunsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeAssessmentRunsResponse: inspector.InspectorDescribeAssessmentRunsResponse = { ... }
```

##### `assessmentRuns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentRunsResponse.property.assessmentRuns"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentRun`](#aws-cdk-sdk.inspector.InspectorAssessmentRun)[]

---

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentRunsResponse.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

### InspectorDescribeAssessmentTargetsRequest <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentTargetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeAssessmentTargetsRequest: inspector.InspectorDescribeAssessmentTargetsRequest = { ... }
```

##### `assessmentTargetArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentTargetsRequest.property.assessmentTargetArns"></a>

- *Type:* `string`[]

---

### InspectorDescribeAssessmentTargetsResponse <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentTargetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeAssessmentTargetsResponse: inspector.InspectorDescribeAssessmentTargetsResponse = { ... }
```

##### `assessmentTargets`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentTargetsResponse.property.assessmentTargets"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentTarget`](#aws-cdk-sdk.inspector.InspectorAssessmentTarget)[]

---

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentTargetsResponse.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

### InspectorDescribeAssessmentTemplatesRequest <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentTemplatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeAssessmentTemplatesRequest: inspector.InspectorDescribeAssessmentTemplatesRequest = { ... }
```

##### `assessmentTemplateArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentTemplatesRequest.property.assessmentTemplateArns"></a>

- *Type:* `string`[]

---

### InspectorDescribeAssessmentTemplatesResponse <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentTemplatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeAssessmentTemplatesResponse: inspector.InspectorDescribeAssessmentTemplatesResponse = { ... }
```

##### `assessmentTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentTemplatesResponse.property.assessmentTemplates"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentTemplate`](#aws-cdk-sdk.inspector.InspectorAssessmentTemplate)[]

---

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeAssessmentTemplatesResponse.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

### InspectorDescribeCrossAccountAccessRoleResponse <a name="aws-cdk-sdk.inspector.InspectorDescribeCrossAccountAccessRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeCrossAccountAccessRoleResponse: inspector.InspectorDescribeCrossAccountAccessRoleResponse = { ... }
```

##### `registeredAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeCrossAccountAccessRoleResponse.property.registeredAt"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeCrossAccountAccessRoleResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `valid`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeCrossAccountAccessRoleResponse.property.valid"></a>

- *Type:* `boolean`

---

### InspectorDescribeExclusionsRequest <a name="aws-cdk-sdk.inspector.InspectorDescribeExclusionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeExclusionsRequest: inspector.InspectorDescribeExclusionsRequest = { ... }
```

##### `exclusionArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeExclusionsRequest.property.exclusionArns"></a>

- *Type:* `string`[]

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeExclusionsRequest.property.locale"></a>

- *Type:* `string`

---

### InspectorDescribeExclusionsResponse <a name="aws-cdk-sdk.inspector.InspectorDescribeExclusionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeExclusionsResponse: inspector.InspectorDescribeExclusionsResponse = { ... }
```

##### `exclusions`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeExclusionsResponse.property.exclusions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorExclusion`](#aws-cdk-sdk.inspector.InspectorExclusion)}

---

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeExclusionsResponse.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

### InspectorDescribeFindingsRequest <a name="aws-cdk-sdk.inspector.InspectorDescribeFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeFindingsRequest: inspector.InspectorDescribeFindingsRequest = { ... }
```

##### `findingArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeFindingsRequest.property.findingArns"></a>

- *Type:* `string`[]

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeFindingsRequest.property.locale"></a>

- *Type:* `string`

---

### InspectorDescribeFindingsResponse <a name="aws-cdk-sdk.inspector.InspectorDescribeFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeFindingsResponse: inspector.InspectorDescribeFindingsResponse = { ... }
```

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeFindingsResponse.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeFindingsResponse.property.findings"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorFinding`](#aws-cdk-sdk.inspector.InspectorFinding)[]

---

### InspectorDescribeResourceGroupsRequest <a name="aws-cdk-sdk.inspector.InspectorDescribeResourceGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeResourceGroupsRequest: inspector.InspectorDescribeResourceGroupsRequest = { ... }
```

##### `resourceGroupArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeResourceGroupsRequest.property.resourceGroupArns"></a>

- *Type:* `string`[]

---

### InspectorDescribeResourceGroupsResponse <a name="aws-cdk-sdk.inspector.InspectorDescribeResourceGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeResourceGroupsResponse: inspector.InspectorDescribeResourceGroupsResponse = { ... }
```

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeResourceGroupsResponse.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

##### `resourceGroups`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeResourceGroupsResponse.property.resourceGroups"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorResourceGroup`](#aws-cdk-sdk.inspector.InspectorResourceGroup)[]

---

### InspectorDescribeRulesPackagesRequest <a name="aws-cdk-sdk.inspector.InspectorDescribeRulesPackagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeRulesPackagesRequest: inspector.InspectorDescribeRulesPackagesRequest = { ... }
```

##### `rulesPackageArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeRulesPackagesRequest.property.rulesPackageArns"></a>

- *Type:* `string`[]

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeRulesPackagesRequest.property.locale"></a>

- *Type:* `string`

---

### InspectorDescribeRulesPackagesResponse <a name="aws-cdk-sdk.inspector.InspectorDescribeRulesPackagesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDescribeRulesPackagesResponse: inspector.InspectorDescribeRulesPackagesResponse = { ... }
```

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeRulesPackagesResponse.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

##### `rulesPackages`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorDescribeRulesPackagesResponse.property.rulesPackages"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorRulesPackage`](#aws-cdk-sdk.inspector.InspectorRulesPackage)[]

---

### InspectorDurationRange <a name="aws-cdk-sdk.inspector.InspectorDurationRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorDurationRange: inspector.InspectorDurationRange = { ... }
```

##### `maxSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorDurationRange.property.maxSeconds"></a>

- *Type:* `number`

---

##### `minSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorDurationRange.property.minSeconds"></a>

- *Type:* `number`

---

### InspectorEventSubscription <a name="aws-cdk-sdk.inspector.InspectorEventSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorEventSubscription: inspector.InspectorEventSubscription = { ... }
```

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorEventSubscription.property.event"></a>

- *Type:* `string`

---

##### `subscribedAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorEventSubscription.property.subscribedAt"></a>

- *Type:* `string`

---

### InspectorExclusion <a name="aws-cdk-sdk.inspector.InspectorExclusion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorExclusion: inspector.InspectorExclusion = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusion.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusion.property.description"></a>

- *Type:* `string`

---

##### `recommendation`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusion.property.recommendation"></a>

- *Type:* `string`

---

##### `scopes`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusion.property.scopes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorScope`](#aws-cdk-sdk.inspector.InspectorScope)[]

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusion.property.title"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusion.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAttribute`](#aws-cdk-sdk.inspector.InspectorAttribute)[]

---

### InspectorExclusionPreview <a name="aws-cdk-sdk.inspector.InspectorExclusionPreview"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorExclusionPreview: inspector.InspectorExclusionPreview = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusionPreview.property.description"></a>

- *Type:* `string`

---

##### `recommendation`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusionPreview.property.recommendation"></a>

- *Type:* `string`

---

##### `scopes`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusionPreview.property.scopes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorScope`](#aws-cdk-sdk.inspector.InspectorScope)[]

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusionPreview.property.title"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorExclusionPreview.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAttribute`](#aws-cdk-sdk.inspector.InspectorAttribute)[]

---

### InspectorFailedItemDetails <a name="aws-cdk-sdk.inspector.InspectorFailedItemDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorFailedItemDetails: inspector.InspectorFailedItemDetails = { ... }
```

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorFailedItemDetails.property.failureCode"></a>

- *Type:* `string`

---

##### `retryable`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorFailedItemDetails.property.retryable"></a>

- *Type:* `boolean`

---

### InspectorFinding <a name="aws-cdk-sdk.inspector.InspectorFinding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorFinding: inspector.InspectorFinding = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.arn"></a>

- *Type:* `string`

---

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAttribute`](#aws-cdk-sdk.inspector.InspectorAttribute)[]

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.createdAt"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.updatedAt"></a>

- *Type:* `string`

---

##### `userAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.userAttributes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAttribute`](#aws-cdk-sdk.inspector.InspectorAttribute)[]

---

##### `assetAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.assetAttributes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssetAttributes`](#aws-cdk-sdk.inspector.InspectorAssetAttributes)

---

##### `assetType`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.assetType"></a>

- *Type:* `string`

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.confidence"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.id"></a>

- *Type:* `string`

---

##### `indicatorOfCompromise`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.indicatorOfCompromise"></a>

- *Type:* `boolean`

---

##### `numericSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.numericSeverity"></a>

- *Type:* `number`

---

##### `recommendation`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.recommendation"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.schemaVersion"></a>

- *Type:* `number`

---

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.service"></a>

- *Type:* `string`

---

##### `serviceAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.serviceAttributes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorInspectorServiceAttributes`](#aws-cdk-sdk.inspector.InspectorInspectorServiceAttributes)

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.severity"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFinding.property.title"></a>

- *Type:* `string`

---

### InspectorFindingFilter <a name="aws-cdk-sdk.inspector.InspectorFindingFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorFindingFilter: inspector.InspectorFindingFilter = { ... }
```

##### `agentIds`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFindingFilter.property.agentIds"></a>

- *Type:* `string`[]

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFindingFilter.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAttribute`](#aws-cdk-sdk.inspector.InspectorAttribute)[]

---

##### `autoScalingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFindingFilter.property.autoScalingGroups"></a>

- *Type:* `string`[]

---

##### `creationTimeRange`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFindingFilter.property.creationTimeRange"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTimestampRange`](#aws-cdk-sdk.inspector.InspectorTimestampRange)

---

##### `ruleNames`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFindingFilter.property.ruleNames"></a>

- *Type:* `string`[]

---

##### `rulesPackageArns`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFindingFilter.property.rulesPackageArns"></a>

- *Type:* `string`[]

---

##### `severities`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFindingFilter.property.severities"></a>

- *Type:* `string`[]

---

##### `userAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorFindingFilter.property.userAttributes"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAttribute`](#aws-cdk-sdk.inspector.InspectorAttribute)[]

---

### InspectorGetAssessmentReportRequest <a name="aws-cdk-sdk.inspector.InspectorGetAssessmentReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorGetAssessmentReportRequest: inspector.InspectorGetAssessmentReportRequest = { ... }
```

##### `assessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorGetAssessmentReportRequest.property.assessmentRunArn"></a>

- *Type:* `string`

---

##### `reportFileFormat`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorGetAssessmentReportRequest.property.reportFileFormat"></a>

- *Type:* `string`

---

##### `reportType`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorGetAssessmentReportRequest.property.reportType"></a>

- *Type:* `string`

---

### InspectorGetAssessmentReportResponse <a name="aws-cdk-sdk.inspector.InspectorGetAssessmentReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorGetAssessmentReportResponse: inspector.InspectorGetAssessmentReportResponse = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorGetAssessmentReportResponse.property.status"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorGetAssessmentReportResponse.property.url"></a>

- *Type:* `string`

---

### InspectorGetExclusionsPreviewRequest <a name="aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorGetExclusionsPreviewRequest: inspector.InspectorGetExclusionsPreviewRequest = { ... }
```

##### `assessmentTemplateArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewRequest.property.assessmentTemplateArn"></a>

- *Type:* `string`

---

##### `previewToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewRequest.property.previewToken"></a>

- *Type:* `string`

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewRequest.property.locale"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewRequest.property.nextToken"></a>

- *Type:* `string`

---

### InspectorGetExclusionsPreviewResponse <a name="aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorGetExclusionsPreviewResponse: inspector.InspectorGetExclusionsPreviewResponse = { ... }
```

##### `previewStatus`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewResponse.property.previewStatus"></a>

- *Type:* `string`

---

##### `exclusionPreviews`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewResponse.property.exclusionPreviews"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorExclusionPreview`](#aws-cdk-sdk.inspector.InspectorExclusionPreview)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewResponse.property.nextToken"></a>

- *Type:* `string`

---

### InspectorGetTelemetryMetadataRequest <a name="aws-cdk-sdk.inspector.InspectorGetTelemetryMetadataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorGetTelemetryMetadataRequest: inspector.InspectorGetTelemetryMetadataRequest = { ... }
```

##### `assessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorGetTelemetryMetadataRequest.property.assessmentRunArn"></a>

- *Type:* `string`

---

### InspectorGetTelemetryMetadataResponse <a name="aws-cdk-sdk.inspector.InspectorGetTelemetryMetadataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorGetTelemetryMetadataResponse: inspector.InspectorGetTelemetryMetadataResponse = { ... }
```

##### `telemetryMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorGetTelemetryMetadataResponse.property.telemetryMetadata"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTelemetryMetadata`](#aws-cdk-sdk.inspector.InspectorTelemetryMetadata)[]

---

### InspectorInspectorServiceAttributes <a name="aws-cdk-sdk.inspector.InspectorInspectorServiceAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorInspectorServiceAttributes: inspector.InspectorInspectorServiceAttributes = { ... }
```

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorInspectorServiceAttributes.property.schemaVersion"></a>

- *Type:* `number`

---

##### `assessmentRunArn`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorInspectorServiceAttributes.property.assessmentRunArn"></a>

- *Type:* `string`

---

##### `rulesPackageArn`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorInspectorServiceAttributes.property.rulesPackageArn"></a>

- *Type:* `string`

---

### InspectorListAssessmentRunAgentsRequest <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListAssessmentRunAgentsRequest: inspector.InspectorListAssessmentRunAgentsRequest = { ... }
```

##### `assessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsRequest.property.assessmentRunArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAgentFilter`](#aws-cdk-sdk.inspector.InspectorAgentFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListAssessmentRunAgentsResponse <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListAssessmentRunAgentsResponse: inspector.InspectorListAssessmentRunAgentsResponse = { ... }
```

##### `assessmentRunAgents`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsResponse.property.assessmentRunAgents"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentRunAgent`](#aws-cdk-sdk.inspector.InspectorAssessmentRunAgent)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListAssessmentRunsRequest <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListAssessmentRunsRequest: inspector.InspectorListAssessmentRunsRequest = { ... }
```

##### `assessmentTemplateArns`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunsRequest.property.assessmentTemplateArns"></a>

- *Type:* `string`[]

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentRunFilter`](#aws-cdk-sdk.inspector.InspectorAssessmentRunFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunsRequest.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListAssessmentRunsResponse <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListAssessmentRunsResponse: inspector.InspectorListAssessmentRunsResponse = { ... }
```

##### `assessmentRunArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunsResponse.property.assessmentRunArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentRunsResponse.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListAssessmentTargetsRequest <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTargetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListAssessmentTargetsRequest: inspector.InspectorListAssessmentTargetsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTargetsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentTargetFilter`](#aws-cdk-sdk.inspector.InspectorAssessmentTargetFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTargetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTargetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListAssessmentTargetsResponse <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTargetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListAssessmentTargetsResponse: inspector.InspectorListAssessmentTargetsResponse = { ... }
```

##### `assessmentTargetArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTargetsResponse.property.assessmentTargetArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTargetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListAssessmentTemplatesRequest <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListAssessmentTemplatesRequest: inspector.InspectorListAssessmentTemplatesRequest = { ... }
```

##### `assessmentTargetArns`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesRequest.property.assessmentTargetArns"></a>

- *Type:* `string`[]

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentTemplateFilter`](#aws-cdk-sdk.inspector.InspectorAssessmentTemplateFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListAssessmentTemplatesResponse <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListAssessmentTemplatesResponse: inspector.InspectorListAssessmentTemplatesResponse = { ... }
```

##### `assessmentTemplateArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesResponse.property.assessmentTemplateArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesResponse.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListEventSubscriptionsRequest <a name="aws-cdk-sdk.inspector.InspectorListEventSubscriptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListEventSubscriptionsRequest: inspector.InspectorListEventSubscriptionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListEventSubscriptionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListEventSubscriptionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListEventSubscriptionsRequest.property.resourceArn"></a>

- *Type:* `string`

---

### InspectorListEventSubscriptionsResponse <a name="aws-cdk-sdk.inspector.InspectorListEventSubscriptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListEventSubscriptionsResponse: inspector.InspectorListEventSubscriptionsResponse = { ... }
```

##### `subscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListEventSubscriptionsResponse.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorSubscription`](#aws-cdk-sdk.inspector.InspectorSubscription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListEventSubscriptionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListExclusionsRequest <a name="aws-cdk-sdk.inspector.InspectorListExclusionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListExclusionsRequest: inspector.InspectorListExclusionsRequest = { ... }
```

##### `assessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListExclusionsRequest.property.assessmentRunArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListExclusionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListExclusionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListExclusionsResponse <a name="aws-cdk-sdk.inspector.InspectorListExclusionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListExclusionsResponse: inspector.InspectorListExclusionsResponse = { ... }
```

##### `exclusionArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListExclusionsResponse.property.exclusionArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListExclusionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListFindingsRequest <a name="aws-cdk-sdk.inspector.InspectorListFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListFindingsRequest: inspector.InspectorListFindingsRequest = { ... }
```

##### `assessmentRunArns`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListFindingsRequest.property.assessmentRunArns"></a>

- *Type:* `string`[]

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListFindingsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorFindingFilter`](#aws-cdk-sdk.inspector.InspectorFindingFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListFindingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListFindingsRequest.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListFindingsResponse <a name="aws-cdk-sdk.inspector.InspectorListFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListFindingsResponse: inspector.InspectorListFindingsResponse = { ... }
```

##### `findingArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListFindingsResponse.property.findingArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListFindingsResponse.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListRulesPackagesRequest <a name="aws-cdk-sdk.inspector.InspectorListRulesPackagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListRulesPackagesRequest: inspector.InspectorListRulesPackagesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListRulesPackagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListRulesPackagesRequest.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListRulesPackagesResponse <a name="aws-cdk-sdk.inspector.InspectorListRulesPackagesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListRulesPackagesResponse: inspector.InspectorListRulesPackagesResponse = { ... }
```

##### `rulesPackageArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListRulesPackagesResponse.property.rulesPackageArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorListRulesPackagesResponse.property.nextToken"></a>

- *Type:* `string`

---

### InspectorListTagsForResourceRequest <a name="aws-cdk-sdk.inspector.InspectorListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListTagsForResourceRequest: inspector.InspectorListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### InspectorListTagsForResourceResponse <a name="aws-cdk-sdk.inspector.InspectorListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorListTagsForResourceResponse: inspector.InspectorListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTag`](#aws-cdk-sdk.inspector.InspectorTag)[]

---

### InspectorNetworkInterface <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorNetworkInterface: inspector.InspectorNetworkInterface = { ... }
```

##### `ipv6Addresses`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface.property.ipv6Addresses"></a>

- *Type:* `string`[]

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `privateDnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface.property.privateDnsName"></a>

- *Type:* `string`

---

##### `privateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface.property.privateIpAddress"></a>

- *Type:* `string`

---

##### `privateIpAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface.property.privateIpAddresses"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorPrivateIp`](#aws-cdk-sdk.inspector.InspectorPrivateIp)[]

---

##### `publicDnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface.property.publicDnsName"></a>

- *Type:* `string`

---

##### `publicIp`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface.property.publicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorSecurityGroup`](#aws-cdk-sdk.inspector.InspectorSecurityGroup)[]

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface.property.subnetId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorNetworkInterface.property.vpcId"></a>

- *Type:* `string`

---

### InspectorPreviewAgentsRequest <a name="aws-cdk-sdk.inspector.InspectorPreviewAgentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorPreviewAgentsRequest: inspector.InspectorPreviewAgentsRequest = { ... }
```

##### `previewAgentsArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorPreviewAgentsRequest.property.previewAgentsArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorPreviewAgentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorPreviewAgentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### InspectorPreviewAgentsResponse <a name="aws-cdk-sdk.inspector.InspectorPreviewAgentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorPreviewAgentsResponse: inspector.InspectorPreviewAgentsResponse = { ... }
```

##### `agentPreviews`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorPreviewAgentsResponse.property.agentPreviews"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAgentPreview`](#aws-cdk-sdk.inspector.InspectorAgentPreview)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorPreviewAgentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### InspectorPrivateIp <a name="aws-cdk-sdk.inspector.InspectorPrivateIp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorPrivateIp: inspector.InspectorPrivateIp = { ... }
```

##### `privateDnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorPrivateIp.property.privateDnsName"></a>

- *Type:* `string`

---

##### `privateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorPrivateIp.property.privateIpAddress"></a>

- *Type:* `string`

---

### InspectorRegisterCrossAccountAccessRoleRequest <a name="aws-cdk-sdk.inspector.InspectorRegisterCrossAccountAccessRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorRegisterCrossAccountAccessRoleRequest: inspector.InspectorRegisterCrossAccountAccessRoleRequest = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorRegisterCrossAccountAccessRoleRequest.property.roleArn"></a>

- *Type:* `string`

---

### InspectorRemoveAttributesFromFindingsRequest <a name="aws-cdk-sdk.inspector.InspectorRemoveAttributesFromFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorRemoveAttributesFromFindingsRequest: inspector.InspectorRemoveAttributesFromFindingsRequest = { ... }
```

##### `attributeKeys`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorRemoveAttributesFromFindingsRequest.property.attributeKeys"></a>

- *Type:* `string`[]

---

##### `findingArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorRemoveAttributesFromFindingsRequest.property.findingArns"></a>

- *Type:* `string`[]

---

### InspectorRemoveAttributesFromFindingsResponse <a name="aws-cdk-sdk.inspector.InspectorRemoveAttributesFromFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorRemoveAttributesFromFindingsResponse: inspector.InspectorRemoveAttributesFromFindingsResponse = { ... }
```

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorRemoveAttributesFromFindingsResponse.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

### InspectorResourceGroup <a name="aws-cdk-sdk.inspector.InspectorResourceGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorResourceGroup: inspector.InspectorResourceGroup = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResourceGroup.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResourceGroup.property.createdAt"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResourceGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorResourceGroupTag`](#aws-cdk-sdk.inspector.InspectorResourceGroupTag)[]

---

### InspectorResourceGroupTag <a name="aws-cdk-sdk.inspector.InspectorResourceGroupTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorResourceGroupTag: inspector.InspectorResourceGroupTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResourceGroupTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorResourceGroupTag.property.value"></a>

- *Type:* `string`

---

### InspectorRulesPackage <a name="aws-cdk-sdk.inspector.InspectorRulesPackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorRulesPackage: inspector.InspectorRulesPackage = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorRulesPackage.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorRulesPackage.property.name"></a>

- *Type:* `string`

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorRulesPackage.property.provider"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorRulesPackage.property.version"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorRulesPackage.property.description"></a>

- *Type:* `string`

---

### InspectorScope <a name="aws-cdk-sdk.inspector.InspectorScope"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorScope: inspector.InspectorScope = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorScope.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorScope.property.value"></a>

- *Type:* `string`

---

### InspectorSecurityGroup <a name="aws-cdk-sdk.inspector.InspectorSecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorSecurityGroup: inspector.InspectorSecurityGroup = { ... }
```

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorSecurityGroup.property.groupId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorSecurityGroup.property.groupName"></a>

- *Type:* `string`

---

### InspectorSetTagsForResourceRequest <a name="aws-cdk-sdk.inspector.InspectorSetTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorSetTagsForResourceRequest: inspector.InspectorSetTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorSetTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorSetTagsForResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTag`](#aws-cdk-sdk.inspector.InspectorTag)[]

---

### InspectorStartAssessmentRunRequest <a name="aws-cdk-sdk.inspector.InspectorStartAssessmentRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorStartAssessmentRunRequest: inspector.InspectorStartAssessmentRunRequest = { ... }
```

##### `assessmentTemplateArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorStartAssessmentRunRequest.property.assessmentTemplateArn"></a>

- *Type:* `string`

---

##### `assessmentRunName`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorStartAssessmentRunRequest.property.assessmentRunName"></a>

- *Type:* `string`

---

### InspectorStartAssessmentRunResponse <a name="aws-cdk-sdk.inspector.InspectorStartAssessmentRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorStartAssessmentRunResponse: inspector.InspectorStartAssessmentRunResponse = { ... }
```

##### `assessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorStartAssessmentRunResponse.property.assessmentRunArn"></a>

- *Type:* `string`

---

### InspectorStopAssessmentRunRequest <a name="aws-cdk-sdk.inspector.InspectorStopAssessmentRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorStopAssessmentRunRequest: inspector.InspectorStopAssessmentRunRequest = { ... }
```

##### `assessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorStopAssessmentRunRequest.property.assessmentRunArn"></a>

- *Type:* `string`

---

##### `stopAction`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorStopAssessmentRunRequest.property.stopAction"></a>

- *Type:* `string`

---

### InspectorSubscribeToEventRequest <a name="aws-cdk-sdk.inspector.InspectorSubscribeToEventRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorSubscribeToEventRequest: inspector.InspectorSubscribeToEventRequest = { ... }
```

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorSubscribeToEventRequest.property.event"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorSubscribeToEventRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorSubscribeToEventRequest.property.topicArn"></a>

- *Type:* `string`

---

### InspectorSubscription <a name="aws-cdk-sdk.inspector.InspectorSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorSubscription: inspector.InspectorSubscription = { ... }
```

##### `eventSubscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorSubscription.property.eventSubscriptions"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorEventSubscription`](#aws-cdk-sdk.inspector.InspectorEventSubscription)[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorSubscription.property.resourceArn"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorSubscription.property.topicArn"></a>

- *Type:* `string`

---

### InspectorTag <a name="aws-cdk-sdk.inspector.InspectorTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorTag: inspector.InspectorTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorTag.property.value"></a>

- *Type:* `string`

---

### InspectorTelemetryMetadata <a name="aws-cdk-sdk.inspector.InspectorTelemetryMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorTelemetryMetadata: inspector.InspectorTelemetryMetadata = { ... }
```

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorTelemetryMetadata.property.count"></a>

- *Type:* `number`

---

##### `messageType`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorTelemetryMetadata.property.messageType"></a>

- *Type:* `string`

---

##### `dataSize`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorTelemetryMetadata.property.dataSize"></a>

- *Type:* `number`

---

### InspectorTimestampRange <a name="aws-cdk-sdk.inspector.InspectorTimestampRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorTimestampRange: inspector.InspectorTimestampRange = { ... }
```

##### `beginDate`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorTimestampRange.property.beginDate"></a>

- *Type:* `string`

---

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorTimestampRange.property.endDate"></a>

- *Type:* `string`

---

### InspectorUnsubscribeFromEventRequest <a name="aws-cdk-sdk.inspector.InspectorUnsubscribeFromEventRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorUnsubscribeFromEventRequest: inspector.InspectorUnsubscribeFromEventRequest = { ... }
```

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorUnsubscribeFromEventRequest.property.event"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorUnsubscribeFromEventRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorUnsubscribeFromEventRequest.property.topicArn"></a>

- *Type:* `string`

---

### InspectorUpdateAssessmentTargetRequest <a name="aws-cdk-sdk.inspector.InspectorUpdateAssessmentTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

const inspectorUpdateAssessmentTargetRequest: inspector.InspectorUpdateAssessmentTargetRequest = { ... }
```

##### `assessmentTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorUpdateAssessmentTargetRequest.property.assessmentTargetArn"></a>

- *Type:* `string`

---

##### `assessmentTargetName`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorUpdateAssessmentTargetRequest.property.assessmentTargetName"></a>

- *Type:* `string`

---

##### `resourceGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.inspector.InspectorUpdateAssessmentTargetRequest.property.resourceGroupArn"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### InspectorResponsesAddAttributesToFindings <a name="aws-cdk-sdk.inspector.InspectorResponsesAddAttributesToFindings"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesAddAttributesToFindings.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesAddAttributesToFindings(__scope: Construct, __resources: string[], __input: InspectorAddAttributesToFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesAddAttributesToFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesAddAttributesToFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesAddAttributesToFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAddAttributesToFindingsRequest`](#aws-cdk-sdk.inspector.InspectorAddAttributesToFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesAddAttributesToFindings.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---


### InspectorResponsesCreateAssessmentTarget <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTarget"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTarget.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesCreateAssessmentTarget(__scope: Construct, __resources: string[], __input: InspectorCreateAssessmentTargetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorCreateAssessmentTargetRequest`](#aws-cdk-sdk.inspector.InspectorCreateAssessmentTargetRequest)

---



#### Properties <a name="Properties"></a>

##### `assessmentTargetArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTarget.property.assessmentTargetArn"></a>

- *Type:* `string`

---


### InspectorResponsesCreateAssessmentTemplate <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTemplate.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesCreateAssessmentTemplate(__scope: Construct, __resources: string[], __input: InspectorCreateAssessmentTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateRequest`](#aws-cdk-sdk.inspector.InspectorCreateAssessmentTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `assessmentTemplateArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateAssessmentTemplate.property.assessmentTemplateArn"></a>

- *Type:* `string`

---


### InspectorResponsesCreateExclusionsPreview <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateExclusionsPreview"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateExclusionsPreview.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesCreateExclusionsPreview(__scope: Construct, __resources: string[], __input: InspectorCreateExclusionsPreviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateExclusionsPreview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateExclusionsPreview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateExclusionsPreview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorCreateExclusionsPreviewRequest`](#aws-cdk-sdk.inspector.InspectorCreateExclusionsPreviewRequest)

---



#### Properties <a name="Properties"></a>

##### `previewToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateExclusionsPreview.property.previewToken"></a>

- *Type:* `string`

---


### InspectorResponsesCreateResourceGroup <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateResourceGroup"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateResourceGroup.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesCreateResourceGroup(__scope: Construct, __resources: string[], __input: InspectorCreateResourceGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateResourceGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateResourceGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateResourceGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorCreateResourceGroupRequest`](#aws-cdk-sdk.inspector.InspectorCreateResourceGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesCreateResourceGroup.property.resourceGroupArn"></a>

- *Type:* `string`

---


### InspectorResponsesDescribeAssessmentRuns <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentRuns"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentRuns.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesDescribeAssessmentRuns(__scope: Construct, __resources: string[], __input: InspectorDescribeAssessmentRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentRuns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentRuns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentRuns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeAssessmentRunsRequest`](#aws-cdk-sdk.inspector.InspectorDescribeAssessmentRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `assessmentRuns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentRuns.property.assessmentRuns"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentRun`](#aws-cdk-sdk.inspector.InspectorAssessmentRun)[]

---

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentRuns.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---


### InspectorResponsesDescribeAssessmentTargets <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTargets"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTargets.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesDescribeAssessmentTargets(__scope: Construct, __resources: string[], __input: InspectorDescribeAssessmentTargetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeAssessmentTargetsRequest`](#aws-cdk-sdk.inspector.InspectorDescribeAssessmentTargetsRequest)

---



#### Properties <a name="Properties"></a>

##### `assessmentTargets`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTargets.property.assessmentTargets"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentTarget`](#aws-cdk-sdk.inspector.InspectorAssessmentTarget)[]

---

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTargets.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---


### InspectorResponsesDescribeAssessmentTemplates <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTemplates.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesDescribeAssessmentTemplates(__scope: Construct, __resources: string[], __input: InspectorDescribeAssessmentTemplatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeAssessmentTemplatesRequest`](#aws-cdk-sdk.inspector.InspectorDescribeAssessmentTemplatesRequest)

---



#### Properties <a name="Properties"></a>

##### `assessmentTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTemplates.property.assessmentTemplates"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentTemplate`](#aws-cdk-sdk.inspector.InspectorAssessmentTemplate)[]

---

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeAssessmentTemplates.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---


### InspectorResponsesDescribeCrossAccountAccessRole <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeCrossAccountAccessRole"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeCrossAccountAccessRole.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesDescribeCrossAccountAccessRole(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeCrossAccountAccessRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeCrossAccountAccessRole.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `registeredAt`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeCrossAccountAccessRole.property.registeredAt"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeCrossAccountAccessRole.property.roleArn"></a>

- *Type:* `string`

---

##### `valid`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeCrossAccountAccessRole.property.valid"></a>

- *Type:* `boolean`

---


### InspectorResponsesDescribeExclusions <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeExclusions"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeExclusions.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesDescribeExclusions(__scope: Construct, __resources: string[], __input: InspectorDescribeExclusionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeExclusions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeExclusions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeExclusions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeExclusionsRequest`](#aws-cdk-sdk.inspector.InspectorDescribeExclusionsRequest)

---



#### Properties <a name="Properties"></a>

##### `exclusions`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeExclusions.property.exclusions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorExclusion`](#aws-cdk-sdk.inspector.InspectorExclusion)}

---

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeExclusions.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---


### InspectorResponsesDescribeFindings <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeFindings"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeFindings.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesDescribeFindings(__scope: Construct, __resources: string[], __input: InspectorDescribeFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeFindingsRequest`](#aws-cdk-sdk.inspector.InspectorDescribeFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeFindings.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeFindings.property.findings"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorFinding`](#aws-cdk-sdk.inspector.InspectorFinding)[]

---


### InspectorResponsesDescribeResourceGroups <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeResourceGroups"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeResourceGroups.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesDescribeResourceGroups(__scope: Construct, __resources: string[], __input: InspectorDescribeResourceGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeResourceGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeResourceGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeResourceGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeResourceGroupsRequest`](#aws-cdk-sdk.inspector.InspectorDescribeResourceGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeResourceGroups.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

##### `resourceGroups`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeResourceGroups.property.resourceGroups"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorResourceGroup`](#aws-cdk-sdk.inspector.InspectorResourceGroup)[]

---


### InspectorResponsesDescribeRulesPackages <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeRulesPackages"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeRulesPackages.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesDescribeRulesPackages(__scope: Construct, __resources: string[], __input: InspectorDescribeRulesPackagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeRulesPackages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeRulesPackages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeRulesPackages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorDescribeRulesPackagesRequest`](#aws-cdk-sdk.inspector.InspectorDescribeRulesPackagesRequest)

---



#### Properties <a name="Properties"></a>

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeRulesPackages.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---

##### `rulesPackages`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesDescribeRulesPackages.property.rulesPackages"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorRulesPackage`](#aws-cdk-sdk.inspector.InspectorRulesPackage)[]

---


### InspectorResponsesFetchAssessmentReport <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchAssessmentReport"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchAssessmentReport.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesFetchAssessmentReport(__scope: Construct, __resources: string[], __input: InspectorGetAssessmentReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchAssessmentReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchAssessmentReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchAssessmentReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorGetAssessmentReportRequest`](#aws-cdk-sdk.inspector.InspectorGetAssessmentReportRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchAssessmentReport.property.status"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchAssessmentReport.property.url"></a>

- *Type:* `string`

---


### InspectorResponsesFetchExclusionsPreview <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchExclusionsPreview"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchExclusionsPreview.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesFetchExclusionsPreview(__scope: Construct, __resources: string[], __input: InspectorGetExclusionsPreviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchExclusionsPreview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchExclusionsPreview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchExclusionsPreview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewRequest`](#aws-cdk-sdk.inspector.InspectorGetExclusionsPreviewRequest)

---



#### Properties <a name="Properties"></a>

##### `exclusionPreviews`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchExclusionsPreview.property.exclusionPreviews"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorExclusionPreview`](#aws-cdk-sdk.inspector.InspectorExclusionPreview)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchExclusionsPreview.property.nextToken"></a>

- *Type:* `string`

---

##### `previewStatus`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchExclusionsPreview.property.previewStatus"></a>

- *Type:* `string`

---


### InspectorResponsesFetchTelemetryMetadata <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchTelemetryMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchTelemetryMetadata.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesFetchTelemetryMetadata(__scope: Construct, __resources: string[], __input: InspectorGetTelemetryMetadataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchTelemetryMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchTelemetryMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchTelemetryMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorGetTelemetryMetadataRequest`](#aws-cdk-sdk.inspector.InspectorGetTelemetryMetadataRequest)

---



#### Properties <a name="Properties"></a>

##### `telemetryMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesFetchTelemetryMetadata.property.telemetryMetadata"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTelemetryMetadata`](#aws-cdk-sdk.inspector.InspectorTelemetryMetadata)[]

---


### InspectorResponsesListAssessmentRunAgents <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRunAgents"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRunAgents.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesListAssessmentRunAgents(__scope: Construct, __resources: string[], __input: InspectorListAssessmentRunAgentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRunAgents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRunAgents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRunAgents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsRequest`](#aws-cdk-sdk.inspector.InspectorListAssessmentRunAgentsRequest)

---



#### Properties <a name="Properties"></a>

##### `assessmentRunAgents`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRunAgents.property.assessmentRunAgents"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAssessmentRunAgent`](#aws-cdk-sdk.inspector.InspectorAssessmentRunAgent)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRunAgents.property.nextToken"></a>

- *Type:* `string`

---


### InspectorResponsesListAssessmentRuns <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRuns"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRuns.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesListAssessmentRuns(__scope: Construct, __resources: string[], __input: InspectorListAssessmentRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRuns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRuns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRuns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListAssessmentRunsRequest`](#aws-cdk-sdk.inspector.InspectorListAssessmentRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `assessmentRunArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRuns.property.assessmentRunArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentRuns.property.nextToken"></a>

- *Type:* `string`

---


### InspectorResponsesListAssessmentTargets <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTargets"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTargets.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesListAssessmentTargets(__scope: Construct, __resources: string[], __input: InspectorListAssessmentTargetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListAssessmentTargetsRequest`](#aws-cdk-sdk.inspector.InspectorListAssessmentTargetsRequest)

---



#### Properties <a name="Properties"></a>

##### `assessmentTargetArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTargets.property.assessmentTargetArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTargets.property.nextToken"></a>

- *Type:* `string`

---


### InspectorResponsesListAssessmentTemplates <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTemplates.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesListAssessmentTemplates(__scope: Construct, __resources: string[], __input: InspectorListAssessmentTemplatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesRequest`](#aws-cdk-sdk.inspector.InspectorListAssessmentTemplatesRequest)

---



#### Properties <a name="Properties"></a>

##### `assessmentTemplateArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTemplates.property.assessmentTemplateArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListAssessmentTemplates.property.nextToken"></a>

- *Type:* `string`

---


### InspectorResponsesListEventSubscriptions <a name="aws-cdk-sdk.inspector.InspectorResponsesListEventSubscriptions"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesListEventSubscriptions.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesListEventSubscriptions(__scope: Construct, __resources: string[], __input: InspectorListEventSubscriptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListEventSubscriptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListEventSubscriptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListEventSubscriptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListEventSubscriptionsRequest`](#aws-cdk-sdk.inspector.InspectorListEventSubscriptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListEventSubscriptions.property.nextToken"></a>

- *Type:* `string`

---

##### `subscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListEventSubscriptions.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorSubscription`](#aws-cdk-sdk.inspector.InspectorSubscription)[]

---


### InspectorResponsesListExclusions <a name="aws-cdk-sdk.inspector.InspectorResponsesListExclusions"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesListExclusions.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesListExclusions(__scope: Construct, __resources: string[], __input: InspectorListExclusionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListExclusions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListExclusions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListExclusions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListExclusionsRequest`](#aws-cdk-sdk.inspector.InspectorListExclusionsRequest)

---



#### Properties <a name="Properties"></a>

##### `exclusionArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListExclusions.property.exclusionArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListExclusions.property.nextToken"></a>

- *Type:* `string`

---


### InspectorResponsesListFindings <a name="aws-cdk-sdk.inspector.InspectorResponsesListFindings"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesListFindings.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesListFindings(__scope: Construct, __resources: string[], __input: InspectorListFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListFindingsRequest`](#aws-cdk-sdk.inspector.InspectorListFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findingArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListFindings.property.findingArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListFindings.property.nextToken"></a>

- *Type:* `string`

---


### InspectorResponsesListRulesPackages <a name="aws-cdk-sdk.inspector.InspectorResponsesListRulesPackages"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesListRulesPackages.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesListRulesPackages(__scope: Construct, __resources: string[], __input: InspectorListRulesPackagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListRulesPackages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListRulesPackages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListRulesPackages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListRulesPackagesRequest`](#aws-cdk-sdk.inspector.InspectorListRulesPackagesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListRulesPackages.property.nextToken"></a>

- *Type:* `string`

---

##### `rulesPackageArns`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListRulesPackages.property.rulesPackageArns"></a>

- *Type:* `string`[]

---


### InspectorResponsesListTagsForResource <a name="aws-cdk-sdk.inspector.InspectorResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesListTagsForResource.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: InspectorListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorListTagsForResourceRequest`](#aws-cdk-sdk.inspector.InspectorListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorTag`](#aws-cdk-sdk.inspector.InspectorTag)[]

---


### InspectorResponsesPreviewAgents <a name="aws-cdk-sdk.inspector.InspectorResponsesPreviewAgents"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesPreviewAgents.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesPreviewAgents(__scope: Construct, __resources: string[], __input: InspectorPreviewAgentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesPreviewAgents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesPreviewAgents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesPreviewAgents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorPreviewAgentsRequest`](#aws-cdk-sdk.inspector.InspectorPreviewAgentsRequest)

---



#### Properties <a name="Properties"></a>

##### `agentPreviews`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesPreviewAgents.property.agentPreviews"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorAgentPreview`](#aws-cdk-sdk.inspector.InspectorAgentPreview)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesPreviewAgents.property.nextToken"></a>

- *Type:* `string`

---


### InspectorResponsesRemoveAttributesFromFindings <a name="aws-cdk-sdk.inspector.InspectorResponsesRemoveAttributesFromFindings"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesRemoveAttributesFromFindings.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesRemoveAttributesFromFindings(__scope: Construct, __resources: string[], __input: InspectorRemoveAttributesFromFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesRemoveAttributesFromFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesRemoveAttributesFromFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesRemoveAttributesFromFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorRemoveAttributesFromFindingsRequest`](#aws-cdk-sdk.inspector.InspectorRemoveAttributesFromFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedItems`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesRemoveAttributesFromFindings.property.failedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.inspector.InspectorFailedItemDetails`](#aws-cdk-sdk.inspector.InspectorFailedItemDetails)}

---


### InspectorResponsesStartAssessmentRun <a name="aws-cdk-sdk.inspector.InspectorResponsesStartAssessmentRun"></a>

#### Initializer <a name="aws-cdk-sdk.inspector.InspectorResponsesStartAssessmentRun.Initializer"></a>

```typescript
import { inspector } from 'aws-cdk-sdk'

new inspector.InspectorResponsesStartAssessmentRun(__scope: Construct, __resources: string[], __input: InspectorStartAssessmentRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesStartAssessmentRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesStartAssessmentRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesStartAssessmentRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.inspector.InspectorStartAssessmentRunRequest`](#aws-cdk-sdk.inspector.InspectorStartAssessmentRunRequest)

---



#### Properties <a name="Properties"></a>

##### `assessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.inspector.InspectorResponsesStartAssessmentRun.property.assessmentRunArn"></a>

- *Type:* `string`

---



