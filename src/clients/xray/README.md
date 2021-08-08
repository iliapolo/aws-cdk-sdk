# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### XRayClient <a name="aws-cdk-sdk.xray.XRayClient"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayClient.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchGetTraces` <a name="aws-cdk-sdk.xray.XRayClient.batchGetTraces"></a>

```typescript
public batchGetTraces(input: XRayBatchGetTracesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayBatchGetTracesRequest`](#aws-cdk-sdk.xray.XRayBatchGetTracesRequest)

---

##### `createGroup` <a name="aws-cdk-sdk.xray.XRayClient.createGroup"></a>

```typescript
public createGroup(input: XRayCreateGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayCreateGroupRequest`](#aws-cdk-sdk.xray.XRayCreateGroupRequest)

---

##### `createSamplingRule` <a name="aws-cdk-sdk.xray.XRayClient.createSamplingRule"></a>

```typescript
public createSamplingRule(input: XRayCreateSamplingRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest)

---

##### `deleteGroup` <a name="aws-cdk-sdk.xray.XRayClient.deleteGroup"></a>

```typescript
public deleteGroup(input: XRayDeleteGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayDeleteGroupRequest`](#aws-cdk-sdk.xray.XRayDeleteGroupRequest)

---

##### `deleteSamplingRule` <a name="aws-cdk-sdk.xray.XRayClient.deleteSamplingRule"></a>

```typescript
public deleteSamplingRule(input: XRayDeleteSamplingRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest)

---

##### `fetchEncryptionConfig` <a name="aws-cdk-sdk.xray.XRayClient.fetchEncryptionConfig"></a>

```typescript
public fetchEncryptionConfig()
```

##### `fetchGroup` <a name="aws-cdk-sdk.xray.XRayClient.fetchGroup"></a>

```typescript
public fetchGroup(input: XRayGetGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetGroupRequest`](#aws-cdk-sdk.xray.XRayGetGroupRequest)

---

##### `fetchGroups` <a name="aws-cdk-sdk.xray.XRayClient.fetchGroups"></a>

```typescript
public fetchGroups(input: XRayGetGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetGroupsRequest`](#aws-cdk-sdk.xray.XRayGetGroupsRequest)

---

##### `fetchInsight` <a name="aws-cdk-sdk.xray.XRayClient.fetchInsight"></a>

```typescript
public fetchInsight(input: XRayGetInsightRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightRequest`](#aws-cdk-sdk.xray.XRayGetInsightRequest)

---

##### `fetchInsightEvents` <a name="aws-cdk-sdk.xray.XRayClient.fetchInsightEvents"></a>

```typescript
public fetchInsightEvents(input: XRayGetInsightEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightEventsRequest`](#aws-cdk-sdk.xray.XRayGetInsightEventsRequest)

---

##### `fetchInsightImpactGraph` <a name="aws-cdk-sdk.xray.XRayClient.fetchInsightImpactGraph"></a>

```typescript
public fetchInsightImpactGraph(input: XRayGetInsightImpactGraphRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightImpactGraphRequest`](#aws-cdk-sdk.xray.XRayGetInsightImpactGraphRequest)

---

##### `fetchInsightSummaries` <a name="aws-cdk-sdk.xray.XRayClient.fetchInsightSummaries"></a>

```typescript
public fetchInsightSummaries(input: XRayGetInsightSummariesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightSummariesRequest`](#aws-cdk-sdk.xray.XRayGetInsightSummariesRequest)

---

##### `fetchSamplingRules` <a name="aws-cdk-sdk.xray.XRayClient.fetchSamplingRules"></a>

```typescript
public fetchSamplingRules(input: XRayGetSamplingRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetSamplingRulesRequest`](#aws-cdk-sdk.xray.XRayGetSamplingRulesRequest)

---

##### `fetchSamplingStatisticSummaries` <a name="aws-cdk-sdk.xray.XRayClient.fetchSamplingStatisticSummaries"></a>

```typescript
public fetchSamplingStatisticSummaries(input: XRayGetSamplingStatisticSummariesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetSamplingStatisticSummariesRequest`](#aws-cdk-sdk.xray.XRayGetSamplingStatisticSummariesRequest)

---

##### `fetchSamplingTargets` <a name="aws-cdk-sdk.xray.XRayClient.fetchSamplingTargets"></a>

```typescript
public fetchSamplingTargets(input: XRayGetSamplingTargetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetSamplingTargetsRequest`](#aws-cdk-sdk.xray.XRayGetSamplingTargetsRequest)

---

##### `fetchServiceGraph` <a name="aws-cdk-sdk.xray.XRayClient.fetchServiceGraph"></a>

```typescript
public fetchServiceGraph(input: XRayGetServiceGraphRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetServiceGraphRequest`](#aws-cdk-sdk.xray.XRayGetServiceGraphRequest)

---

##### `fetchTimeSeriesServiceStatistics` <a name="aws-cdk-sdk.xray.XRayClient.fetchTimeSeriesServiceStatistics"></a>

```typescript
public fetchTimeSeriesServiceStatistics(input: XRayGetTimeSeriesServiceStatisticsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest`](#aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest)

---

##### `fetchTraceGraph` <a name="aws-cdk-sdk.xray.XRayClient.fetchTraceGraph"></a>

```typescript
public fetchTraceGraph(input: XRayGetTraceGraphRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetTraceGraphRequest`](#aws-cdk-sdk.xray.XRayGetTraceGraphRequest)

---

##### `fetchTraceSummaries` <a name="aws-cdk-sdk.xray.XRayClient.fetchTraceSummaries"></a>

```typescript
public fetchTraceSummaries(input: XRayGetTraceSummariesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetTraceSummariesRequest`](#aws-cdk-sdk.xray.XRayGetTraceSummariesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.xray.XRayClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: XRayListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayListTagsForResourceRequest`](#aws-cdk-sdk.xray.XRayListTagsForResourceRequest)

---

##### `putEncryptionConfig` <a name="aws-cdk-sdk.xray.XRayClient.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(input: XRayPutEncryptionConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayPutEncryptionConfigRequest`](#aws-cdk-sdk.xray.XRayPutEncryptionConfigRequest)

---

##### `putTelemetryRecords` <a name="aws-cdk-sdk.xray.XRayClient.putTelemetryRecords"></a>

```typescript
public putTelemetryRecords(input: XRayPutTelemetryRecordsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayPutTelemetryRecordsRequest`](#aws-cdk-sdk.xray.XRayPutTelemetryRecordsRequest)

---

##### `putTraceSegments` <a name="aws-cdk-sdk.xray.XRayClient.putTraceSegments"></a>

```typescript
public putTraceSegments(input: XRayPutTraceSegmentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayPutTraceSegmentsRequest`](#aws-cdk-sdk.xray.XRayPutTraceSegmentsRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.xray.XRayClient.tagResource"></a>

```typescript
public tagResource(input: XRayTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTagResourceRequest`](#aws-cdk-sdk.xray.XRayTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.xray.XRayClient.untagResource"></a>

```typescript
public untagResource(input: XRayUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUntagResourceRequest`](#aws-cdk-sdk.xray.XRayUntagResourceRequest)

---

##### `updateGroup` <a name="aws-cdk-sdk.xray.XRayClient.updateGroup"></a>

```typescript
public updateGroup(input: XRayUpdateGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUpdateGroupRequest`](#aws-cdk-sdk.xray.XRayUpdateGroupRequest)

---

##### `updateSamplingRule` <a name="aws-cdk-sdk.xray.XRayClient.updateSamplingRule"></a>

```typescript
public updateSamplingRule(input: XRayUpdateSamplingRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUpdateSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayUpdateSamplingRuleRequest)

---




## Structs <a name="Structs"></a>

### XRayAlias <a name="aws-cdk-sdk.xray.XRayAlias"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayAlias: xray.XRayAlias = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayAlias.property.name"></a>

- *Type:* `string`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayAlias.property.names"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayAlias.property.type"></a>

- *Type:* `string`

---

### XRayAnnotationValue <a name="aws-cdk-sdk.xray.XRayAnnotationValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayAnnotationValue: xray.XRayAnnotationValue = { ... }
```

##### `booleanValue`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayAnnotationValue.property.booleanValue"></a>

- *Type:* `boolean`

---

##### `numberValue`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayAnnotationValue.property.numberValue"></a>

- *Type:* `number`

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayAnnotationValue.property.stringValue"></a>

- *Type:* `string`

---

### XRayAnomalousService <a name="aws-cdk-sdk.xray.XRayAnomalousService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayAnomalousService: xray.XRayAnomalousService = { ... }
```

##### `serviceId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayAnomalousService.property.serviceId"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayServiceId`](#aws-cdk-sdk.xray.XRayServiceId)

---

### XRayAvailabilityZoneDetail <a name="aws-cdk-sdk.xray.XRayAvailabilityZoneDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayAvailabilityZoneDetail: xray.XRayAvailabilityZoneDetail = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayAvailabilityZoneDetail.property.name"></a>

- *Type:* `string`

---

### XRayBackendConnectionErrors <a name="aws-cdk-sdk.xray.XRayBackendConnectionErrors"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayBackendConnectionErrors: xray.XRayBackendConnectionErrors = { ... }
```

##### `connectionRefusedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayBackendConnectionErrors.property.connectionRefusedCount"></a>

- *Type:* `number`

---

##### `httpCode4XxCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayBackendConnectionErrors.property.httpCode4XxCount"></a>

- *Type:* `number`

---

##### `httpCode5XxCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayBackendConnectionErrors.property.httpCode5XxCount"></a>

- *Type:* `number`

---

##### `otherCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayBackendConnectionErrors.property.otherCount"></a>

- *Type:* `number`

---

##### `timeoutCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayBackendConnectionErrors.property.timeoutCount"></a>

- *Type:* `number`

---

##### `unknownHostCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayBackendConnectionErrors.property.unknownHostCount"></a>

- *Type:* `number`

---

### XRayBatchGetTracesRequest <a name="aws-cdk-sdk.xray.XRayBatchGetTracesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayBatchGetTracesRequest: xray.XRayBatchGetTracesRequest = { ... }
```

##### `traceIds`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayBatchGetTracesRequest.property.traceIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayBatchGetTracesRequest.property.nextToken"></a>

- *Type:* `string`

---

### XRayBatchGetTracesResult <a name="aws-cdk-sdk.xray.XRayBatchGetTracesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayBatchGetTracesResult: xray.XRayBatchGetTracesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayBatchGetTracesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `traces`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayBatchGetTracesResult.property.traces"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTrace`](#aws-cdk-sdk.xray.XRayTrace)[]

---

##### `unprocessedTraceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayBatchGetTracesResult.property.unprocessedTraceIds"></a>

- *Type:* `string`[]

---

### XRayCreateGroupRequest <a name="aws-cdk-sdk.xray.XRayCreateGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayCreateGroupRequest: xray.XRayCreateGroupRequest = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayCreateGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `filterExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayCreateGroupRequest.property.filterExpression"></a>

- *Type:* `string`

---

##### `insightsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayCreateGroupRequest.property.insightsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightsConfiguration`](#aws-cdk-sdk.xray.XRayInsightsConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayCreateGroupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTag`](#aws-cdk-sdk.xray.XRayTag)[]

---

### XRayCreateGroupResult <a name="aws-cdk-sdk.xray.XRayCreateGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayCreateGroupResult: xray.XRayCreateGroupResult = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayCreateGroupResult.property.group"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGroup`](#aws-cdk-sdk.xray.XRayGroup)

---

### XRayCreateSamplingRuleRequest <a name="aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayCreateSamplingRuleRequest: xray.XRayCreateSamplingRuleRequest = { ... }
```

##### `samplingRule`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest.property.samplingRule"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingRule`](#aws-cdk-sdk.xray.XRaySamplingRule)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTag`](#aws-cdk-sdk.xray.XRayTag)[]

---

### XRayCreateSamplingRuleResult <a name="aws-cdk-sdk.xray.XRayCreateSamplingRuleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayCreateSamplingRuleResult: xray.XRayCreateSamplingRuleResult = { ... }
```

##### `samplingRuleRecord`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayCreateSamplingRuleResult.property.samplingRuleRecord"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingRuleRecord`](#aws-cdk-sdk.xray.XRaySamplingRuleRecord)

---

### XRayDeleteGroupRequest <a name="aws-cdk-sdk.xray.XRayDeleteGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayDeleteGroupRequest: xray.XRayDeleteGroupRequest = { ... }
```

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayDeleteGroupRequest.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayDeleteGroupRequest.property.groupName"></a>

- *Type:* `string`

---

### XRayDeleteGroupResult <a name="aws-cdk-sdk.xray.XRayDeleteGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayDeleteGroupResult: xray.XRayDeleteGroupResult = { ... }
```

### XRayDeleteSamplingRuleRequest <a name="aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayDeleteSamplingRuleRequest: xray.XRayDeleteSamplingRuleRequest = { ... }
```

##### `ruleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest.property.ruleArn"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

### XRayDeleteSamplingRuleResult <a name="aws-cdk-sdk.xray.XRayDeleteSamplingRuleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayDeleteSamplingRuleResult: xray.XRayDeleteSamplingRuleResult = { ... }
```

##### `samplingRuleRecord`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayDeleteSamplingRuleResult.property.samplingRuleRecord"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingRuleRecord`](#aws-cdk-sdk.xray.XRaySamplingRuleRecord)

---

### XRayEdge <a name="aws-cdk-sdk.xray.XRayEdge"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayEdge: xray.XRayEdge = { ... }
```

##### `aliases`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdge.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayAlias`](#aws-cdk-sdk.xray.XRayAlias)[]

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdge.property.endTime"></a>

- *Type:* `string`

---

##### `referenceId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdge.property.referenceId"></a>

- *Type:* `number`

---

##### `responseTimeHistogram`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdge.property.responseTimeHistogram"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayHistogramEntry`](#aws-cdk-sdk.xray.XRayHistogramEntry)[]

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdge.property.startTime"></a>

- *Type:* `string`

---

##### `summaryStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdge.property.summaryStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayEdgeStatistics`](#aws-cdk-sdk.xray.XRayEdgeStatistics)

---

### XRayEdgeStatistics <a name="aws-cdk-sdk.xray.XRayEdgeStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayEdgeStatistics: xray.XRayEdgeStatistics = { ... }
```

##### `errorStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdgeStatistics.property.errorStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayErrorStatistics`](#aws-cdk-sdk.xray.XRayErrorStatistics)

---

##### `faultStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdgeStatistics.property.faultStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayFaultStatistics`](#aws-cdk-sdk.xray.XRayFaultStatistics)

---

##### `okCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdgeStatistics.property.okCount"></a>

- *Type:* `number`

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdgeStatistics.property.totalCount"></a>

- *Type:* `number`

---

##### `totalResponseTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEdgeStatistics.property.totalResponseTime"></a>

- *Type:* `number`

---

### XRayEncryptionConfig <a name="aws-cdk-sdk.xray.XRayEncryptionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayEncryptionConfig: xray.XRayEncryptionConfig = { ... }
```

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEncryptionConfig.property.keyId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEncryptionConfig.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayEncryptionConfig.property.type"></a>

- *Type:* `string`

---

### XRayErrorRootCause <a name="aws-cdk-sdk.xray.XRayErrorRootCause"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayErrorRootCause: xray.XRayErrorRootCause = { ... }
```

##### `clientImpacting`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCause.property.clientImpacting"></a>

- *Type:* `boolean`

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCause.property.services"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayErrorRootCauseService`](#aws-cdk-sdk.xray.XRayErrorRootCauseService)[]

---

### XRayErrorRootCauseEntity <a name="aws-cdk-sdk.xray.XRayErrorRootCauseEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayErrorRootCauseEntity: xray.XRayErrorRootCauseEntity = { ... }
```

##### `exceptions`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCauseEntity.property.exceptions"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayRootCauseException`](#aws-cdk-sdk.xray.XRayRootCauseException)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCauseEntity.property.name"></a>

- *Type:* `string`

---

##### `remote`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCauseEntity.property.remote"></a>

- *Type:* `boolean`

---

### XRayErrorRootCauseService <a name="aws-cdk-sdk.xray.XRayErrorRootCauseService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayErrorRootCauseService: xray.XRayErrorRootCauseService = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCauseService.property.accountId"></a>

- *Type:* `string`

---

##### `entityPath`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCauseService.property.entityPath"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayErrorRootCauseEntity`](#aws-cdk-sdk.xray.XRayErrorRootCauseEntity)[]

---

##### `inferred`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCauseService.property.inferred"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCauseService.property.name"></a>

- *Type:* `string`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCauseService.property.names"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorRootCauseService.property.type"></a>

- *Type:* `string`

---

### XRayErrorStatistics <a name="aws-cdk-sdk.xray.XRayErrorStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayErrorStatistics: xray.XRayErrorStatistics = { ... }
```

##### `otherCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorStatistics.property.otherCount"></a>

- *Type:* `number`

---

##### `throttleCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorStatistics.property.throttleCount"></a>

- *Type:* `number`

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayErrorStatistics.property.totalCount"></a>

- *Type:* `number`

---

### XRayFaultRootCause <a name="aws-cdk-sdk.xray.XRayFaultRootCause"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayFaultRootCause: xray.XRayFaultRootCause = { ... }
```

##### `clientImpacting`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCause.property.clientImpacting"></a>

- *Type:* `boolean`

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCause.property.services"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayFaultRootCauseService`](#aws-cdk-sdk.xray.XRayFaultRootCauseService)[]

---

### XRayFaultRootCauseEntity <a name="aws-cdk-sdk.xray.XRayFaultRootCauseEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayFaultRootCauseEntity: xray.XRayFaultRootCauseEntity = { ... }
```

##### `exceptions`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCauseEntity.property.exceptions"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayRootCauseException`](#aws-cdk-sdk.xray.XRayRootCauseException)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCauseEntity.property.name"></a>

- *Type:* `string`

---

##### `remote`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCauseEntity.property.remote"></a>

- *Type:* `boolean`

---

### XRayFaultRootCauseService <a name="aws-cdk-sdk.xray.XRayFaultRootCauseService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayFaultRootCauseService: xray.XRayFaultRootCauseService = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCauseService.property.accountId"></a>

- *Type:* `string`

---

##### `entityPath`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCauseService.property.entityPath"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayFaultRootCauseEntity`](#aws-cdk-sdk.xray.XRayFaultRootCauseEntity)[]

---

##### `inferred`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCauseService.property.inferred"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCauseService.property.name"></a>

- *Type:* `string`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCauseService.property.names"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultRootCauseService.property.type"></a>

- *Type:* `string`

---

### XRayFaultStatistics <a name="aws-cdk-sdk.xray.XRayFaultStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayFaultStatistics: xray.XRayFaultStatistics = { ... }
```

##### `otherCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultStatistics.property.otherCount"></a>

- *Type:* `number`

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayFaultStatistics.property.totalCount"></a>

- *Type:* `number`

---

### XRayForecastStatistics <a name="aws-cdk-sdk.xray.XRayForecastStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayForecastStatistics: xray.XRayForecastStatistics = { ... }
```

##### `faultCountHigh`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayForecastStatistics.property.faultCountHigh"></a>

- *Type:* `number`

---

##### `faultCountLow`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayForecastStatistics.property.faultCountLow"></a>

- *Type:* `number`

---

### XRayGetEncryptionConfigRequest <a name="aws-cdk-sdk.xray.XRayGetEncryptionConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetEncryptionConfigRequest: xray.XRayGetEncryptionConfigRequest = { ... }
```

### XRayGetEncryptionConfigResult <a name="aws-cdk-sdk.xray.XRayGetEncryptionConfigResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetEncryptionConfigResult: xray.XRayGetEncryptionConfigResult = { ... }
```

##### `encryptionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetEncryptionConfigResult.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayEncryptionConfig`](#aws-cdk-sdk.xray.XRayEncryptionConfig)

---

### XRayGetGroupRequest <a name="aws-cdk-sdk.xray.XRayGetGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetGroupRequest: xray.XRayGetGroupRequest = { ... }
```

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetGroupRequest.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetGroupRequest.property.groupName"></a>

- *Type:* `string`

---

### XRayGetGroupResult <a name="aws-cdk-sdk.xray.XRayGetGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetGroupResult: xray.XRayGetGroupResult = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetGroupResult.property.group"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGroup`](#aws-cdk-sdk.xray.XRayGroup)

---

### XRayGetGroupsRequest <a name="aws-cdk-sdk.xray.XRayGetGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetGroupsRequest: xray.XRayGetGroupsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### XRayGetGroupsResult <a name="aws-cdk-sdk.xray.XRayGetGroupsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetGroupsResult: xray.XRayGetGroupsResult = { ... }
```

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetGroupsResult.property.groups"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGroupSummary`](#aws-cdk-sdk.xray.XRayGroupSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetGroupsResult.property.nextToken"></a>

- *Type:* `string`

---

### XRayGetInsightEventsRequest <a name="aws-cdk-sdk.xray.XRayGetInsightEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetInsightEventsRequest: xray.XRayGetInsightEventsRequest = { ... }
```

##### `insightId`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightEventsRequest.property.insightId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightEventsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightEventsRequest.property.nextToken"></a>

- *Type:* `string`

---

### XRayGetInsightEventsResult <a name="aws-cdk-sdk.xray.XRayGetInsightEventsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetInsightEventsResult: xray.XRayGetInsightEventsResult = { ... }
```

##### `insightEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightEventsResult.property.insightEvents"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightEvent`](#aws-cdk-sdk.xray.XRayInsightEvent)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightEventsResult.property.nextToken"></a>

- *Type:* `string`

---

### XRayGetInsightImpactGraphRequest <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetInsightImpactGraphRequest: xray.XRayGetInsightImpactGraphRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphRequest.property.endTime"></a>

- *Type:* `string`

---

##### `insightId`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphRequest.property.insightId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphRequest.property.startTime"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphRequest.property.nextToken"></a>

- *Type:* `string`

---

### XRayGetInsightImpactGraphResult <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetInsightImpactGraphResult: xray.XRayGetInsightImpactGraphResult = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphResult.property.endTime"></a>

- *Type:* `string`

---

##### `insightId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphResult.property.insightId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphResult.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceGraphEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphResult.property.serviceGraphEndTime"></a>

- *Type:* `string`

---

##### `serviceGraphStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphResult.property.serviceGraphStartTime"></a>

- *Type:* `string`

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphResult.property.services"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightImpactGraphService`](#aws-cdk-sdk.xray.XRayInsightImpactGraphService)[]

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightImpactGraphResult.property.startTime"></a>

- *Type:* `string`

---

### XRayGetInsightRequest <a name="aws-cdk-sdk.xray.XRayGetInsightRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetInsightRequest: xray.XRayGetInsightRequest = { ... }
```

##### `insightId`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightRequest.property.insightId"></a>

- *Type:* `string`

---

### XRayGetInsightResult <a name="aws-cdk-sdk.xray.XRayGetInsightResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetInsightResult: xray.XRayGetInsightResult = { ... }
```

##### `insight`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightResult.property.insight"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsight`](#aws-cdk-sdk.xray.XRayInsight)

---

### XRayGetInsightSummariesRequest <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetInsightSummariesRequest: xray.XRayGetInsightSummariesRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesRequest.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesRequest.property.startTime"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesRequest.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesRequest.property.groupName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `states`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesRequest.property.states"></a>

- *Type:* `string`[]

---

### XRayGetInsightSummariesResult <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetInsightSummariesResult: xray.XRayGetInsightSummariesResult = { ... }
```

##### `insightSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesResult.property.insightSummaries"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightSummary`](#aws-cdk-sdk.xray.XRayInsightSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetInsightSummariesResult.property.nextToken"></a>

- *Type:* `string`

---

### XRayGetSamplingRulesRequest <a name="aws-cdk-sdk.xray.XRayGetSamplingRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetSamplingRulesRequest: xray.XRayGetSamplingRulesRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetSamplingRulesRequest.property.nextToken"></a>

- *Type:* `string`

---

### XRayGetSamplingRulesResult <a name="aws-cdk-sdk.xray.XRayGetSamplingRulesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetSamplingRulesResult: xray.XRayGetSamplingRulesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetSamplingRulesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `samplingRuleRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetSamplingRulesResult.property.samplingRuleRecords"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingRuleRecord`](#aws-cdk-sdk.xray.XRaySamplingRuleRecord)[]

---

### XRayGetSamplingStatisticSummariesRequest <a name="aws-cdk-sdk.xray.XRayGetSamplingStatisticSummariesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetSamplingStatisticSummariesRequest: xray.XRayGetSamplingStatisticSummariesRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetSamplingStatisticSummariesRequest.property.nextToken"></a>

- *Type:* `string`

---

### XRayGetSamplingStatisticSummariesResult <a name="aws-cdk-sdk.xray.XRayGetSamplingStatisticSummariesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetSamplingStatisticSummariesResult: xray.XRayGetSamplingStatisticSummariesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetSamplingStatisticSummariesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `samplingStatisticSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetSamplingStatisticSummariesResult.property.samplingStatisticSummaries"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingStatisticSummary`](#aws-cdk-sdk.xray.XRaySamplingStatisticSummary)[]

---

### XRayGetSamplingTargetsRequest <a name="aws-cdk-sdk.xray.XRayGetSamplingTargetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetSamplingTargetsRequest: xray.XRayGetSamplingTargetsRequest = { ... }
```

##### `samplingStatisticsDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetSamplingTargetsRequest.property.samplingStatisticsDocuments"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingStatisticsDocument`](#aws-cdk-sdk.xray.XRaySamplingStatisticsDocument)[]

---

### XRayGetSamplingTargetsResult <a name="aws-cdk-sdk.xray.XRayGetSamplingTargetsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetSamplingTargetsResult: xray.XRayGetSamplingTargetsResult = { ... }
```

##### `lastRuleModification`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetSamplingTargetsResult.property.lastRuleModification"></a>

- *Type:* `string`

---

##### `samplingTargetDocuments`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetSamplingTargetsResult.property.samplingTargetDocuments"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingTargetDocument`](#aws-cdk-sdk.xray.XRaySamplingTargetDocument)[]

---

##### `unprocessedStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetSamplingTargetsResult.property.unprocessedStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUnprocessedStatistics`](#aws-cdk-sdk.xray.XRayUnprocessedStatistics)[]

---

### XRayGetServiceGraphRequest <a name="aws-cdk-sdk.xray.XRayGetServiceGraphRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetServiceGraphRequest: xray.XRayGetServiceGraphRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetServiceGraphRequest.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetServiceGraphRequest.property.startTime"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetServiceGraphRequest.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetServiceGraphRequest.property.groupName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetServiceGraphRequest.property.nextToken"></a>

- *Type:* `string`

---

### XRayGetServiceGraphResult <a name="aws-cdk-sdk.xray.XRayGetServiceGraphResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetServiceGraphResult: xray.XRayGetServiceGraphResult = { ... }
```

##### `containsOldGroupVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetServiceGraphResult.property.containsOldGroupVersions"></a>

- *Type:* `boolean`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetServiceGraphResult.property.endTime"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetServiceGraphResult.property.nextToken"></a>

- *Type:* `string`

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetServiceGraphResult.property.services"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayService`](#aws-cdk-sdk.xray.XRayService)[]

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetServiceGraphResult.property.startTime"></a>

- *Type:* `string`

---

### XRayGetTimeSeriesServiceStatisticsRequest <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetTimeSeriesServiceStatisticsRequest: xray.XRayGetTimeSeriesServiceStatisticsRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest.property.startTime"></a>

- *Type:* `string`

---

##### `entitySelectorExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest.property.entitySelectorExpression"></a>

- *Type:* `string`

---

##### `forecastStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest.property.forecastStatistics"></a>

- *Type:* `boolean`

---

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest.property.groupName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `period`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest.property.period"></a>

- *Type:* `number`

---

### XRayGetTimeSeriesServiceStatisticsResult <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetTimeSeriesServiceStatisticsResult: xray.XRayGetTimeSeriesServiceStatisticsResult = { ... }
```

##### `containsOldGroupVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsResult.property.containsOldGroupVersions"></a>

- *Type:* `boolean`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `timeSeriesServiceStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsResult.property.timeSeriesServiceStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTimeSeriesServiceStatistics`](#aws-cdk-sdk.xray.XRayTimeSeriesServiceStatistics)[]

---

### XRayGetTraceGraphRequest <a name="aws-cdk-sdk.xray.XRayGetTraceGraphRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetTraceGraphRequest: xray.XRayGetTraceGraphRequest = { ... }
```

##### `traceIds`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceGraphRequest.property.traceIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceGraphRequest.property.nextToken"></a>

- *Type:* `string`

---

### XRayGetTraceGraphResult <a name="aws-cdk-sdk.xray.XRayGetTraceGraphResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetTraceGraphResult: xray.XRayGetTraceGraphResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceGraphResult.property.nextToken"></a>

- *Type:* `string`

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceGraphResult.property.services"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayService`](#aws-cdk-sdk.xray.XRayService)[]

---

### XRayGetTraceSummariesRequest <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetTraceSummariesRequest: xray.XRayGetTraceSummariesRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesRequest.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesRequest.property.startTime"></a>

- *Type:* `string`

---

##### `filterExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesRequest.property.filterExpression"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sampling`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesRequest.property.sampling"></a>

- *Type:* `boolean`

---

##### `samplingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesRequest.property.samplingStrategy"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingStrategy`](#aws-cdk-sdk.xray.XRaySamplingStrategy)

---

##### `timeRangeType`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesRequest.property.timeRangeType"></a>

- *Type:* `string`

---

### XRayGetTraceSummariesResult <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGetTraceSummariesResult: xray.XRayGetTraceSummariesResult = { ... }
```

##### `approximateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesResult.property.approximateTime"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `tracesProcessedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesResult.property.tracesProcessedCount"></a>

- *Type:* `number`

---

##### `traceSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGetTraceSummariesResult.property.traceSummaries"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTraceSummary`](#aws-cdk-sdk.xray.XRayTraceSummary)[]

---

### XRayGroup <a name="aws-cdk-sdk.xray.XRayGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGroup: xray.XRayGroup = { ... }
```

##### `filterExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGroup.property.filterExpression"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGroup.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGroup.property.groupName"></a>

- *Type:* `string`

---

##### `insightsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGroup.property.insightsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightsConfiguration`](#aws-cdk-sdk.xray.XRayInsightsConfiguration)

---

### XRayGroupSummary <a name="aws-cdk-sdk.xray.XRayGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayGroupSummary: xray.XRayGroupSummary = { ... }
```

##### `filterExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGroupSummary.property.filterExpression"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGroupSummary.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGroupSummary.property.groupName"></a>

- *Type:* `string`

---

##### `insightsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayGroupSummary.property.insightsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightsConfiguration`](#aws-cdk-sdk.xray.XRayInsightsConfiguration)

---

### XRayHistogramEntry <a name="aws-cdk-sdk.xray.XRayHistogramEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayHistogramEntry: xray.XRayHistogramEntry = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayHistogramEntry.property.count"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayHistogramEntry.property.value"></a>

- *Type:* `number`

---

### XRayHttp <a name="aws-cdk-sdk.xray.XRayHttp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayHttp: xray.XRayHttp = { ... }
```

##### `clientIp`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayHttp.property.clientIp"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayHttp.property.httpMethod"></a>

- *Type:* `string`

---

##### `httpStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayHttp.property.httpStatus"></a>

- *Type:* `number`

---

##### `httpUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayHttp.property.httpUrl"></a>

- *Type:* `string`

---

##### `userAgent`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayHttp.property.userAgent"></a>

- *Type:* `string`

---

### XRayInsight <a name="aws-cdk-sdk.xray.XRayInsight"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayInsight: xray.XRayInsight = { ... }
```

##### `categories`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.categories"></a>

- *Type:* `string`[]

---

##### `clientRequestImpactStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.clientRequestImpactStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayRequestImpactStatistics`](#aws-cdk-sdk.xray.XRayRequestImpactStatistics)

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.endTime"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.groupName"></a>

- *Type:* `string`

---

##### `insightId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.insightId"></a>

- *Type:* `string`

---

##### `rootCauseServiceId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.rootCauseServiceId"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayServiceId`](#aws-cdk-sdk.xray.XRayServiceId)

---

##### `rootCauseServiceRequestImpactStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.rootCauseServiceRequestImpactStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayRequestImpactStatistics`](#aws-cdk-sdk.xray.XRayRequestImpactStatistics)

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.state"></a>

- *Type:* `string`

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.summary"></a>

- *Type:* `string`

---

##### `topAnomalousServices`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsight.property.topAnomalousServices"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayAnomalousService`](#aws-cdk-sdk.xray.XRayAnomalousService)[]

---

### XRayInsightEvent <a name="aws-cdk-sdk.xray.XRayInsightEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayInsightEvent: xray.XRayInsightEvent = { ... }
```

##### `clientRequestImpactStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightEvent.property.clientRequestImpactStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayRequestImpactStatistics`](#aws-cdk-sdk.xray.XRayRequestImpactStatistics)

---

##### `eventTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightEvent.property.eventTime"></a>

- *Type:* `string`

---

##### `rootCauseServiceRequestImpactStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightEvent.property.rootCauseServiceRequestImpactStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayRequestImpactStatistics`](#aws-cdk-sdk.xray.XRayRequestImpactStatistics)

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightEvent.property.summary"></a>

- *Type:* `string`

---

##### `topAnomalousServices`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightEvent.property.topAnomalousServices"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayAnomalousService`](#aws-cdk-sdk.xray.XRayAnomalousService)[]

---

### XRayInsightImpactGraphEdge <a name="aws-cdk-sdk.xray.XRayInsightImpactGraphEdge"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayInsightImpactGraphEdge: xray.XRayInsightImpactGraphEdge = { ... }
```

##### `referenceId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightImpactGraphEdge.property.referenceId"></a>

- *Type:* `number`

---

### XRayInsightImpactGraphService <a name="aws-cdk-sdk.xray.XRayInsightImpactGraphService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayInsightImpactGraphService: xray.XRayInsightImpactGraphService = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightImpactGraphService.property.accountId"></a>

- *Type:* `string`

---

##### `edges`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightImpactGraphService.property.edges"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightImpactGraphEdge`](#aws-cdk-sdk.xray.XRayInsightImpactGraphEdge)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightImpactGraphService.property.name"></a>

- *Type:* `string`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightImpactGraphService.property.names"></a>

- *Type:* `string`[]

---

##### `referenceId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightImpactGraphService.property.referenceId"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightImpactGraphService.property.type"></a>

- *Type:* `string`

---

### XRayInsightsConfiguration <a name="aws-cdk-sdk.xray.XRayInsightsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayInsightsConfiguration: xray.XRayInsightsConfiguration = { ... }
```

##### `insightsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightsConfiguration.property.insightsEnabled"></a>

- *Type:* `boolean`

---

##### `notificationsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightsConfiguration.property.notificationsEnabled"></a>

- *Type:* `boolean`

---

### XRayInsightSummary <a name="aws-cdk-sdk.xray.XRayInsightSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayInsightSummary: xray.XRayInsightSummary = { ... }
```

##### `categories`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.categories"></a>

- *Type:* `string`[]

---

##### `clientRequestImpactStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.clientRequestImpactStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayRequestImpactStatistics`](#aws-cdk-sdk.xray.XRayRequestImpactStatistics)

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.endTime"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.groupName"></a>

- *Type:* `string`

---

##### `insightId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.insightId"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `rootCauseServiceId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.rootCauseServiceId"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayServiceId`](#aws-cdk-sdk.xray.XRayServiceId)

---

##### `rootCauseServiceRequestImpactStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.rootCauseServiceRequestImpactStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayRequestImpactStatistics`](#aws-cdk-sdk.xray.XRayRequestImpactStatistics)

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.state"></a>

- *Type:* `string`

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.summary"></a>

- *Type:* `string`

---

##### `topAnomalousServices`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInsightSummary.property.topAnomalousServices"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayAnomalousService`](#aws-cdk-sdk.xray.XRayAnomalousService)[]

---

### XRayInstanceIdDetail <a name="aws-cdk-sdk.xray.XRayInstanceIdDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayInstanceIdDetail: xray.XRayInstanceIdDetail = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayInstanceIdDetail.property.id"></a>

- *Type:* `string`

---

### XRayListTagsForResourceRequest <a name="aws-cdk-sdk.xray.XRayListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayListTagsForResourceRequest: xray.XRayListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### XRayListTagsForResourceResponse <a name="aws-cdk-sdk.xray.XRayListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayListTagsForResourceResponse: xray.XRayListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTag`](#aws-cdk-sdk.xray.XRayTag)[]

---

### XRayPutEncryptionConfigRequest <a name="aws-cdk-sdk.xray.XRayPutEncryptionConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayPutEncryptionConfigRequest: xray.XRayPutEncryptionConfigRequest = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayPutEncryptionConfigRequest.property.type"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayPutEncryptionConfigRequest.property.keyId"></a>

- *Type:* `string`

---

### XRayPutEncryptionConfigResult <a name="aws-cdk-sdk.xray.XRayPutEncryptionConfigResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayPutEncryptionConfigResult: xray.XRayPutEncryptionConfigResult = { ... }
```

##### `encryptionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayPutEncryptionConfigResult.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayEncryptionConfig`](#aws-cdk-sdk.xray.XRayEncryptionConfig)

---

### XRayPutTelemetryRecordsRequest <a name="aws-cdk-sdk.xray.XRayPutTelemetryRecordsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayPutTelemetryRecordsRequest: xray.XRayPutTelemetryRecordsRequest = { ... }
```

##### `telemetryRecords`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayPutTelemetryRecordsRequest.property.telemetryRecords"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTelemetryRecord`](#aws-cdk-sdk.xray.XRayTelemetryRecord)[]

---

##### `ec2InstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayPutTelemetryRecordsRequest.property.ec2InstanceId"></a>

- *Type:* `string`

---

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayPutTelemetryRecordsRequest.property.hostname"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayPutTelemetryRecordsRequest.property.resourceArn"></a>

- *Type:* `string`

---

### XRayPutTelemetryRecordsResult <a name="aws-cdk-sdk.xray.XRayPutTelemetryRecordsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayPutTelemetryRecordsResult: xray.XRayPutTelemetryRecordsResult = { ... }
```

### XRayPutTraceSegmentsRequest <a name="aws-cdk-sdk.xray.XRayPutTraceSegmentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayPutTraceSegmentsRequest: xray.XRayPutTraceSegmentsRequest = { ... }
```

##### `traceSegmentDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayPutTraceSegmentsRequest.property.traceSegmentDocuments"></a>

- *Type:* `string`[]

---

### XRayPutTraceSegmentsResult <a name="aws-cdk-sdk.xray.XRayPutTraceSegmentsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayPutTraceSegmentsResult: xray.XRayPutTraceSegmentsResult = { ... }
```

##### `unprocessedTraceSegments`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayPutTraceSegmentsResult.property.unprocessedTraceSegments"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUnprocessedTraceSegment`](#aws-cdk-sdk.xray.XRayUnprocessedTraceSegment)[]

---

### XRayRequestImpactStatistics <a name="aws-cdk-sdk.xray.XRayRequestImpactStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayRequestImpactStatistics: xray.XRayRequestImpactStatistics = { ... }
```

##### `faultCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayRequestImpactStatistics.property.faultCount"></a>

- *Type:* `number`

---

##### `okCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayRequestImpactStatistics.property.okCount"></a>

- *Type:* `number`

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayRequestImpactStatistics.property.totalCount"></a>

- *Type:* `number`

---

### XRayResourceArnDetail <a name="aws-cdk-sdk.xray.XRayResourceArnDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayResourceArnDetail: xray.XRayResourceArnDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResourceArnDetail.property.arn"></a>

- *Type:* `string`

---

### XRayResponseTimeRootCause <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCause"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayResponseTimeRootCause: xray.XRayResponseTimeRootCause = { ... }
```

##### `clientImpacting`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCause.property.clientImpacting"></a>

- *Type:* `boolean`

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCause.property.services"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponseTimeRootCauseService`](#aws-cdk-sdk.xray.XRayResponseTimeRootCauseService)[]

---

### XRayResponseTimeRootCauseEntity <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayResponseTimeRootCauseEntity: xray.XRayResponseTimeRootCauseEntity = { ... }
```

##### `coverage`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseEntity.property.coverage"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseEntity.property.name"></a>

- *Type:* `string`

---

##### `remote`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseEntity.property.remote"></a>

- *Type:* `boolean`

---

### XRayResponseTimeRootCauseService <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayResponseTimeRootCauseService: xray.XRayResponseTimeRootCauseService = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseService.property.accountId"></a>

- *Type:* `string`

---

##### `entityPath`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseService.property.entityPath"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponseTimeRootCauseEntity`](#aws-cdk-sdk.xray.XRayResponseTimeRootCauseEntity)[]

---

##### `inferred`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseService.property.inferred"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseService.property.name"></a>

- *Type:* `string`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseService.property.names"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayResponseTimeRootCauseService.property.type"></a>

- *Type:* `string`

---

### XRayRootCauseException <a name="aws-cdk-sdk.xray.XRayRootCauseException"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayRootCauseException: xray.XRayRootCauseException = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayRootCauseException.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayRootCauseException.property.name"></a>

- *Type:* `string`

---

### XRaySamplingRule <a name="aws-cdk-sdk.xray.XRaySamplingRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRaySamplingRule: xray.XRaySamplingRule = { ... }
```

##### `fixedRate`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.fixedRate"></a>

- *Type:* `number`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.host"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.httpMethod"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.priority"></a>

- *Type:* `number`

---

##### `reservoirSize`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.reservoirSize"></a>

- *Type:* `number`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.resourceArn"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceType`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.serviceType"></a>

- *Type:* `string`

---

##### `urlPath`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.urlPath"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.version"></a>

- *Type:* `number`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `ruleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.ruleArn"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRule.property.ruleName"></a>

- *Type:* `string`

---

### XRaySamplingRuleRecord <a name="aws-cdk-sdk.xray.XRaySamplingRuleRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRaySamplingRuleRecord: xray.XRaySamplingRuleRecord = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleRecord.property.createdAt"></a>

- *Type:* `string`

---

##### `modifiedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleRecord.property.modifiedAt"></a>

- *Type:* `string`

---

##### `samplingRule`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleRecord.property.samplingRule"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingRule`](#aws-cdk-sdk.xray.XRaySamplingRule)

---

### XRaySamplingRuleUpdate <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRaySamplingRuleUpdate: xray.XRaySamplingRuleUpdate = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `fixedRate`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.fixedRate"></a>

- *Type:* `number`

---

##### `host`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.host"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.httpMethod"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.priority"></a>

- *Type:* `number`

---

##### `reservoirSize`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.reservoirSize"></a>

- *Type:* `number`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.resourceArn"></a>

- *Type:* `string`

---

##### `ruleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.ruleArn"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.ruleName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.serviceType"></a>

- *Type:* `string`

---

##### `urlPath`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingRuleUpdate.property.urlPath"></a>

- *Type:* `string`

---

### XRaySamplingStatisticsDocument <a name="aws-cdk-sdk.xray.XRaySamplingStatisticsDocument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRaySamplingStatisticsDocument: xray.XRaySamplingStatisticsDocument = { ... }
```

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticsDocument.property.clientId"></a>

- *Type:* `string`

---

##### `requestCount`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticsDocument.property.requestCount"></a>

- *Type:* `number`

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticsDocument.property.ruleName"></a>

- *Type:* `string`

---

##### `sampledCount`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticsDocument.property.sampledCount"></a>

- *Type:* `number`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticsDocument.property.timestamp"></a>

- *Type:* `string`

---

##### `borrowCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticsDocument.property.borrowCount"></a>

- *Type:* `number`

---

### XRaySamplingStatisticSummary <a name="aws-cdk-sdk.xray.XRaySamplingStatisticSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRaySamplingStatisticSummary: xray.XRaySamplingStatisticSummary = { ... }
```

##### `borrowCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticSummary.property.borrowCount"></a>

- *Type:* `number`

---

##### `requestCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticSummary.property.requestCount"></a>

- *Type:* `number`

---

##### `ruleName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticSummary.property.ruleName"></a>

- *Type:* `string`

---

##### `sampledCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticSummary.property.sampledCount"></a>

- *Type:* `number`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStatisticSummary.property.timestamp"></a>

- *Type:* `string`

---

### XRaySamplingStrategy <a name="aws-cdk-sdk.xray.XRaySamplingStrategy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRaySamplingStrategy: xray.XRaySamplingStrategy = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStrategy.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingStrategy.property.value"></a>

- *Type:* `number`

---

### XRaySamplingTargetDocument <a name="aws-cdk-sdk.xray.XRaySamplingTargetDocument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRaySamplingTargetDocument: xray.XRaySamplingTargetDocument = { ... }
```

##### `fixedRate`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingTargetDocument.property.fixedRate"></a>

- *Type:* `number`

---

##### `interval`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingTargetDocument.property.interval"></a>

- *Type:* `number`

---

##### `reservoirQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingTargetDocument.property.reservoirQuota"></a>

- *Type:* `number`

---

##### `reservoirQuotaTtl`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingTargetDocument.property.reservoirQuotaTtl"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySamplingTargetDocument.property.ruleName"></a>

- *Type:* `string`

---

### XRaySegment <a name="aws-cdk-sdk.xray.XRaySegment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRaySegment: xray.XRaySegment = { ... }
```

##### `document`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySegment.property.document"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRaySegment.property.id"></a>

- *Type:* `string`

---

### XRayService <a name="aws-cdk-sdk.xray.XRayService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayService: xray.XRayService = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.accountId"></a>

- *Type:* `string`

---

##### `durationHistogram`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.durationHistogram"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayHistogramEntry`](#aws-cdk-sdk.xray.XRayHistogramEntry)[]

---

##### `edges`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.edges"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayEdge`](#aws-cdk-sdk.xray.XRayEdge)[]

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.endTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.name"></a>

- *Type:* `string`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.names"></a>

- *Type:* `string`[]

---

##### `referenceId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.referenceId"></a>

- *Type:* `number`

---

##### `responseTimeHistogram`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.responseTimeHistogram"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayHistogramEntry`](#aws-cdk-sdk.xray.XRayHistogramEntry)[]

---

##### `root`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.root"></a>

- *Type:* `boolean`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.state"></a>

- *Type:* `string`

---

##### `summaryStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.summaryStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayServiceStatistics`](#aws-cdk-sdk.xray.XRayServiceStatistics)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayService.property.type"></a>

- *Type:* `string`

---

### XRayServiceId <a name="aws-cdk-sdk.xray.XRayServiceId"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayServiceId: xray.XRayServiceId = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayServiceId.property.accountId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayServiceId.property.name"></a>

- *Type:* `string`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayServiceId.property.names"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayServiceId.property.type"></a>

- *Type:* `string`

---

### XRayServiceStatistics <a name="aws-cdk-sdk.xray.XRayServiceStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayServiceStatistics: xray.XRayServiceStatistics = { ... }
```

##### `errorStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayServiceStatistics.property.errorStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayErrorStatistics`](#aws-cdk-sdk.xray.XRayErrorStatistics)

---

##### `faultStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayServiceStatistics.property.faultStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayFaultStatistics`](#aws-cdk-sdk.xray.XRayFaultStatistics)

---

##### `okCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayServiceStatistics.property.okCount"></a>

- *Type:* `number`

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayServiceStatistics.property.totalCount"></a>

- *Type:* `number`

---

##### `totalResponseTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayServiceStatistics.property.totalResponseTime"></a>

- *Type:* `number`

---

### XRayTag <a name="aws-cdk-sdk.xray.XRayTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayTag: xray.XRayTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayTag.property.value"></a>

- *Type:* `string`

---

### XRayTagResourceRequest <a name="aws-cdk-sdk.xray.XRayTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayTagResourceRequest: xray.XRayTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTag`](#aws-cdk-sdk.xray.XRayTag)[]

---

### XRayTagResourceResponse <a name="aws-cdk-sdk.xray.XRayTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayTagResourceResponse: xray.XRayTagResourceResponse = { ... }
```

### XRayTelemetryRecord <a name="aws-cdk-sdk.xray.XRayTelemetryRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayTelemetryRecord: xray.XRayTelemetryRecord = { ... }
```

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayTelemetryRecord.property.timestamp"></a>

- *Type:* `string`

---

##### `backendConnectionErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTelemetryRecord.property.backendConnectionErrors"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayBackendConnectionErrors`](#aws-cdk-sdk.xray.XRayBackendConnectionErrors)

---

##### `segmentsReceivedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTelemetryRecord.property.segmentsReceivedCount"></a>

- *Type:* `number`

---

##### `segmentsRejectedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTelemetryRecord.property.segmentsRejectedCount"></a>

- *Type:* `number`

---

##### `segmentsSentCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTelemetryRecord.property.segmentsSentCount"></a>

- *Type:* `number`

---

##### `segmentsSpilloverCount`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTelemetryRecord.property.segmentsSpilloverCount"></a>

- *Type:* `number`

---

### XRayTimeSeriesServiceStatistics <a name="aws-cdk-sdk.xray.XRayTimeSeriesServiceStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayTimeSeriesServiceStatistics: xray.XRayTimeSeriesServiceStatistics = { ... }
```

##### `edgeSummaryStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTimeSeriesServiceStatistics.property.edgeSummaryStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayEdgeStatistics`](#aws-cdk-sdk.xray.XRayEdgeStatistics)

---

##### `responseTimeHistogram`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTimeSeriesServiceStatistics.property.responseTimeHistogram"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayHistogramEntry`](#aws-cdk-sdk.xray.XRayHistogramEntry)[]

---

##### `serviceForecastStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTimeSeriesServiceStatistics.property.serviceForecastStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayForecastStatistics`](#aws-cdk-sdk.xray.XRayForecastStatistics)

---

##### `serviceSummaryStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTimeSeriesServiceStatistics.property.serviceSummaryStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayServiceStatistics`](#aws-cdk-sdk.xray.XRayServiceStatistics)

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTimeSeriesServiceStatistics.property.timestamp"></a>

- *Type:* `string`

---

### XRayTrace <a name="aws-cdk-sdk.xray.XRayTrace"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayTrace: xray.XRayTrace = { ... }
```

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTrace.property.duration"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTrace.property.id"></a>

- *Type:* `string`

---

##### `limitExceeded`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTrace.property.limitExceeded"></a>

- *Type:* `boolean`

---

##### `segments`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTrace.property.segments"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySegment`](#aws-cdk-sdk.xray.XRaySegment)[]

---

### XRayTraceSummary <a name="aws-cdk-sdk.xray.XRayTraceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayTraceSummary: xray.XRayTraceSummary = { ... }
```

##### `annotations`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.annotations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.xray.XRayValueWithServiceIds`](#aws-cdk-sdk.xray.XRayValueWithServiceIds)[]}

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.availabilityZones"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayAvailabilityZoneDetail`](#aws-cdk-sdk.xray.XRayAvailabilityZoneDetail)[]

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.duration"></a>

- *Type:* `number`

---

##### `entryPoint`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.entryPoint"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayServiceId`](#aws-cdk-sdk.xray.XRayServiceId)

---

##### `errorRootCauses`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.errorRootCauses"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayErrorRootCause`](#aws-cdk-sdk.xray.XRayErrorRootCause)[]

---

##### `faultRootCauses`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.faultRootCauses"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayFaultRootCause`](#aws-cdk-sdk.xray.XRayFaultRootCause)[]

---

##### `hasError`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.hasError"></a>

- *Type:* `boolean`

---

##### `hasFault`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.hasFault"></a>

- *Type:* `boolean`

---

##### `hasThrottle`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.hasThrottle"></a>

- *Type:* `boolean`

---

##### `http`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.http"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayHttp`](#aws-cdk-sdk.xray.XRayHttp)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.id"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.instanceIds"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInstanceIdDetail`](#aws-cdk-sdk.xray.XRayInstanceIdDetail)[]

---

##### `isPartial`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.isPartial"></a>

- *Type:* `boolean`

---

##### `matchedEventTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.matchedEventTime"></a>

- *Type:* `string`

---

##### `resourceArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.resourceArNs"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResourceArnDetail`](#aws-cdk-sdk.xray.XRayResourceArnDetail)[]

---

##### `responseTime`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.responseTime"></a>

- *Type:* `number`

---

##### `responseTimeRootCauses`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.responseTimeRootCauses"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponseTimeRootCause`](#aws-cdk-sdk.xray.XRayResponseTimeRootCause)[]

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.revision"></a>

- *Type:* `number`

---

##### `serviceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.serviceIds"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayServiceId`](#aws-cdk-sdk.xray.XRayServiceId)[]

---

##### `users`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceSummary.property.users"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTraceUser`](#aws-cdk-sdk.xray.XRayTraceUser)[]

---

### XRayTraceUser <a name="aws-cdk-sdk.xray.XRayTraceUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayTraceUser: xray.XRayTraceUser = { ... }
```

##### `serviceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceUser.property.serviceIds"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayServiceId`](#aws-cdk-sdk.xray.XRayServiceId)[]

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayTraceUser.property.userName"></a>

- *Type:* `string`

---

### XRayUnprocessedStatistics <a name="aws-cdk-sdk.xray.XRayUnprocessedStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayUnprocessedStatistics: xray.XRayUnprocessedStatistics = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUnprocessedStatistics.property.errorCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUnprocessedStatistics.property.message"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUnprocessedStatistics.property.ruleName"></a>

- *Type:* `string`

---

### XRayUnprocessedTraceSegment <a name="aws-cdk-sdk.xray.XRayUnprocessedTraceSegment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayUnprocessedTraceSegment: xray.XRayUnprocessedTraceSegment = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUnprocessedTraceSegment.property.errorCode"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUnprocessedTraceSegment.property.id"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUnprocessedTraceSegment.property.message"></a>

- *Type:* `string`

---

### XRayUntagResourceRequest <a name="aws-cdk-sdk.xray.XRayUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayUntagResourceRequest: xray.XRayUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### XRayUntagResourceResponse <a name="aws-cdk-sdk.xray.XRayUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayUntagResourceResponse: xray.XRayUntagResourceResponse = { ... }
```

### XRayUpdateGroupRequest <a name="aws-cdk-sdk.xray.XRayUpdateGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayUpdateGroupRequest: xray.XRayUpdateGroupRequest = { ... }
```

##### `filterExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUpdateGroupRequest.property.filterExpression"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUpdateGroupRequest.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUpdateGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `insightsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUpdateGroupRequest.property.insightsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightsConfiguration`](#aws-cdk-sdk.xray.XRayInsightsConfiguration)

---

### XRayUpdateGroupResult <a name="aws-cdk-sdk.xray.XRayUpdateGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayUpdateGroupResult: xray.XRayUpdateGroupResult = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUpdateGroupResult.property.group"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGroup`](#aws-cdk-sdk.xray.XRayGroup)

---

### XRayUpdateSamplingRuleRequest <a name="aws-cdk-sdk.xray.XRayUpdateSamplingRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayUpdateSamplingRuleRequest: xray.XRayUpdateSamplingRuleRequest = { ... }
```

##### `samplingRuleUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayUpdateSamplingRuleRequest.property.samplingRuleUpdate"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingRuleUpdate`](#aws-cdk-sdk.xray.XRaySamplingRuleUpdate)

---

### XRayUpdateSamplingRuleResult <a name="aws-cdk-sdk.xray.XRayUpdateSamplingRuleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayUpdateSamplingRuleResult: xray.XRayUpdateSamplingRuleResult = { ... }
```

##### `samplingRuleRecord`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayUpdateSamplingRuleResult.property.samplingRuleRecord"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingRuleRecord`](#aws-cdk-sdk.xray.XRaySamplingRuleRecord)

---

### XRayValueWithServiceIds <a name="aws-cdk-sdk.xray.XRayValueWithServiceIds"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

const xRayValueWithServiceIds: xray.XRayValueWithServiceIds = { ... }
```

##### `annotationValue`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayValueWithServiceIds.property.annotationValue"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayAnnotationValue`](#aws-cdk-sdk.xray.XRayAnnotationValue)

---

##### `serviceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.xray.XRayValueWithServiceIds.property.serviceIds"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayServiceId`](#aws-cdk-sdk.xray.XRayServiceId)[]

---

## Classes <a name="Classes"></a>

### XRayResponsesBatchGetTraces <a name="aws-cdk-sdk.xray.XRayResponsesBatchGetTraces"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesBatchGetTraces.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesBatchGetTraces(__scope: Construct, __resources: string[], __input: XRayBatchGetTracesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesBatchGetTraces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesBatchGetTraces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesBatchGetTraces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayBatchGetTracesRequest`](#aws-cdk-sdk.xray.XRayBatchGetTracesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesBatchGetTraces.property.nextToken"></a>

- *Type:* `string`

---

##### `traces`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesBatchGetTraces.property.traces"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTrace`](#aws-cdk-sdk.xray.XRayTrace)[]

---

##### `unprocessedTraceIds`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesBatchGetTraces.property.unprocessedTraceIds"></a>

- *Type:* `string`[]

---


### XRayResponsesCreateGroup <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroup"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroup.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesCreateGroup(__scope: Construct, __resources: string[], __input: XRayCreateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayCreateGroupRequest`](#aws-cdk-sdk.xray.XRayCreateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup`](#aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup)

---


### XRayResponsesCreateGroupGroup <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesCreateGroupGroup(__scope: Construct, __resources: string[], __input: XRayCreateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayCreateGroupRequest`](#aws-cdk-sdk.xray.XRayCreateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `filterExpression`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup.property.filterExpression"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup.property.groupName"></a>

- *Type:* `string`

---

##### `insightsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroup.property.insightsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesCreateGroupGroupInsightsConfiguration`](#aws-cdk-sdk.xray.XRayResponsesCreateGroupGroupInsightsConfiguration)

---


### XRayResponsesCreateGroupGroupInsightsConfiguration <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroupInsightsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroupInsightsConfiguration.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesCreateGroupGroupInsightsConfiguration(__scope: Construct, __resources: string[], __input: XRayCreateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroupInsightsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroupInsightsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroupInsightsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayCreateGroupRequest`](#aws-cdk-sdk.xray.XRayCreateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `insightsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroupInsightsConfiguration.property.insightsEnabled"></a>

- *Type:* `boolean`

---

##### `notificationsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateGroupGroupInsightsConfiguration.property.notificationsEnabled"></a>

- *Type:* `boolean`

---


### XRayResponsesCreateSamplingRule <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRule"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRule.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesCreateSamplingRule(__scope: Construct, __resources: string[], __input: XRayCreateSamplingRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `samplingRuleRecord`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRule.property.samplingRuleRecord"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord`](#aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord)

---


### XRayResponsesCreateSamplingRuleSamplingRuleRecord <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord(__scope: Construct, __resources: string[], __input: XRayCreateSamplingRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord.property.createdAt"></a>

- *Type:* `string`

---

##### `modifiedAt`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord.property.modifiedAt"></a>

- *Type:* `string`

---

##### `samplingRule`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecord.property.samplingRule"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule`](#aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule)

---


### XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule(__scope: Construct, __resources: string[], __input: XRayCreateSamplingRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayCreateSamplingRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `fixedRate`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate"></a>

- *Type:* `number`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.host"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.priority"></a>

- *Type:* `number`

---

##### `reservoirSize`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize"></a>

- *Type:* `number`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn"></a>

- *Type:* `string`

---

##### `ruleArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.ruleName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceType`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.serviceType"></a>

- *Type:* `string`

---

##### `urlPath`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.urlPath"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule.property.version"></a>

- *Type:* `number`

---


### XRayResponsesDeleteSamplingRule <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRule"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRule.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesDeleteSamplingRule(__scope: Construct, __resources: string[], __input: XRayDeleteSamplingRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `samplingRuleRecord`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRule.property.samplingRuleRecord"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord`](#aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord)

---


### XRayResponsesDeleteSamplingRuleSamplingRuleRecord <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord(__scope: Construct, __resources: string[], __input: XRayDeleteSamplingRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord.property.createdAt"></a>

- *Type:* `string`

---

##### `modifiedAt`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord.property.modifiedAt"></a>

- *Type:* `string`

---

##### `samplingRule`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecord.property.samplingRule"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule`](#aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule)

---


### XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule(__scope: Construct, __resources: string[], __input: XRayDeleteSamplingRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayDeleteSamplingRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `fixedRate`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate"></a>

- *Type:* `number`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.host"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.priority"></a>

- *Type:* `number`

---

##### `reservoirSize`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize"></a>

- *Type:* `number`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn"></a>

- *Type:* `string`

---

##### `ruleArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.ruleName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceType`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.serviceType"></a>

- *Type:* `string`

---

##### `urlPath`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.urlPath"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule.property.version"></a>

- *Type:* `number`

---


### XRayResponsesFetchEncryptionConfig <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfig"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfig.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchEncryptionConfig(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfig.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `encryptionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfig.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfigEncryptionConfig`](#aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfigEncryptionConfig)

---


### XRayResponsesFetchEncryptionConfigEncryptionConfig <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfigEncryptionConfig"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfigEncryptionConfig.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchEncryptionConfigEncryptionConfig(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfigEncryptionConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfigEncryptionConfig.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfigEncryptionConfig.property.keyId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfigEncryptionConfig.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchEncryptionConfigEncryptionConfig.property.type"></a>

- *Type:* `string`

---


### XRayResponsesFetchGroup <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroup"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroup.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchGroup(__scope: Construct, __resources: string[], __input: XRayGetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetGroupRequest`](#aws-cdk-sdk.xray.XRayGetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup`](#aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup)

---


### XRayResponsesFetchGroupGroup <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchGroupGroup(__scope: Construct, __resources: string[], __input: XRayGetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetGroupRequest`](#aws-cdk-sdk.xray.XRayGetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `filterExpression`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup.property.filterExpression"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup.property.groupName"></a>

- *Type:* `string`

---

##### `insightsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroup.property.insightsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesFetchGroupGroupInsightsConfiguration`](#aws-cdk-sdk.xray.XRayResponsesFetchGroupGroupInsightsConfiguration)

---


### XRayResponsesFetchGroupGroupInsightsConfiguration <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroupInsightsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroupInsightsConfiguration.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchGroupGroupInsightsConfiguration(__scope: Construct, __resources: string[], __input: XRayGetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroupInsightsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroupInsightsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroupInsightsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetGroupRequest`](#aws-cdk-sdk.xray.XRayGetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `insightsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroupInsightsConfiguration.property.insightsEnabled"></a>

- *Type:* `boolean`

---

##### `notificationsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroupGroupInsightsConfiguration.property.notificationsEnabled"></a>

- *Type:* `boolean`

---


### XRayResponsesFetchGroups <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroups"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroups.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchGroups(__scope: Construct, __resources: string[], __input: XRayGetGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetGroupsRequest`](#aws-cdk-sdk.xray.XRayGetGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroups.property.groups"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGroupSummary`](#aws-cdk-sdk.xray.XRayGroupSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchGroups.property.nextToken"></a>

- *Type:* `string`

---


### XRayResponsesFetchInsight <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsight"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsight.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchInsight(__scope: Construct, __resources: string[], __input: XRayGetInsightRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsight.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsight.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsight.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightRequest`](#aws-cdk-sdk.xray.XRayGetInsightRequest)

---



#### Properties <a name="Properties"></a>

##### `insight`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsight.property.insight"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight`](#aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight)

---


### XRayResponsesFetchInsightEvents <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightEvents"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightEvents.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchInsightEvents(__scope: Construct, __resources: string[], __input: XRayGetInsightEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightEventsRequest`](#aws-cdk-sdk.xray.XRayGetInsightEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `insightEvents`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightEvents.property.insightEvents"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightEvent`](#aws-cdk-sdk.xray.XRayInsightEvent)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightEvents.property.nextToken"></a>

- *Type:* `string`

---


### XRayResponsesFetchInsightImpactGraph <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchInsightImpactGraph(__scope: Construct, __resources: string[], __input: XRayGetInsightImpactGraphRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightImpactGraphRequest`](#aws-cdk-sdk.xray.XRayGetInsightImpactGraphRequest)

---



#### Properties <a name="Properties"></a>

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.property.endTime"></a>

- *Type:* `string`

---

##### `insightId`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.property.insightId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceGraphEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.property.serviceGraphEndTime"></a>

- *Type:* `string`

---

##### `serviceGraphStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.property.serviceGraphStartTime"></a>

- *Type:* `string`

---

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.property.services"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightImpactGraphService`](#aws-cdk-sdk.xray.XRayInsightImpactGraphService)[]

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightImpactGraph.property.startTime"></a>

- *Type:* `string`

---


### XRayResponsesFetchInsightInsight <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchInsightInsight(__scope: Construct, __resources: string[], __input: XRayGetInsightRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightRequest`](#aws-cdk-sdk.xray.XRayGetInsightRequest)

---



#### Properties <a name="Properties"></a>

##### `categories`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.categories"></a>

- *Type:* `string`[]

---

##### `clientRequestImpactStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.clientRequestImpactStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics`](#aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics)

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.endTime"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.groupName"></a>

- *Type:* `string`

---

##### `insightId`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.insightId"></a>

- *Type:* `string`

---

##### `rootCauseServiceId`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.rootCauseServiceId"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId`](#aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId)

---

##### `rootCauseServiceRequestImpactStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.rootCauseServiceRequestImpactStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics`](#aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics)

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.state"></a>

- *Type:* `string`

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.summary"></a>

- *Type:* `string`

---

##### `topAnomalousServices`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsight.property.topAnomalousServices"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayAnomalousService`](#aws-cdk-sdk.xray.XRayAnomalousService)[]

---


### XRayResponsesFetchInsightInsightClientRequestImpactStatistics <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics(__scope: Construct, __resources: string[], __input: XRayGetInsightRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightRequest`](#aws-cdk-sdk.xray.XRayGetInsightRequest)

---



#### Properties <a name="Properties"></a>

##### `faultCount`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics.property.faultCount"></a>

- *Type:* `number`

---

##### `okCount`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics.property.okCount"></a>

- *Type:* `number`

---

##### `totalCount`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightClientRequestImpactStatistics.property.totalCount"></a>

- *Type:* `number`

---


### XRayResponsesFetchInsightInsightRootCauseServiceId <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchInsightInsightRootCauseServiceId(__scope: Construct, __resources: string[], __input: XRayGetInsightRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightRequest`](#aws-cdk-sdk.xray.XRayGetInsightRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId.property.accountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId.property.name"></a>

- *Type:* `string`

---

##### `names`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId.property.names"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceId.property.type"></a>

- *Type:* `string`

---


### XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics(__scope: Construct, __resources: string[], __input: XRayGetInsightRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightRequest`](#aws-cdk-sdk.xray.XRayGetInsightRequest)

---



#### Properties <a name="Properties"></a>

##### `faultCount`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics.property.faultCount"></a>

- *Type:* `number`

---

##### `okCount`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics.property.okCount"></a>

- *Type:* `number`

---

##### `totalCount`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics.property.totalCount"></a>

- *Type:* `number`

---


### XRayResponsesFetchInsightSummaries <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightSummaries"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightSummaries.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchInsightSummaries(__scope: Construct, __resources: string[], __input: XRayGetInsightSummariesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightSummaries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightSummaries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightSummaries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetInsightSummariesRequest`](#aws-cdk-sdk.xray.XRayGetInsightSummariesRequest)

---



#### Properties <a name="Properties"></a>

##### `insightSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightSummaries.property.insightSummaries"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayInsightSummary`](#aws-cdk-sdk.xray.XRayInsightSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchInsightSummaries.property.nextToken"></a>

- *Type:* `string`

---


### XRayResponsesFetchSamplingRules <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingRules"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingRules.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchSamplingRules(__scope: Construct, __resources: string[], __input: XRayGetSamplingRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetSamplingRulesRequest`](#aws-cdk-sdk.xray.XRayGetSamplingRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingRules.property.nextToken"></a>

- *Type:* `string`

---

##### `samplingRuleRecords`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingRules.property.samplingRuleRecords"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingRuleRecord`](#aws-cdk-sdk.xray.XRaySamplingRuleRecord)[]

---


### XRayResponsesFetchSamplingStatisticSummaries <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingStatisticSummaries"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingStatisticSummaries.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchSamplingStatisticSummaries(__scope: Construct, __resources: string[], __input: XRayGetSamplingStatisticSummariesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingStatisticSummaries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingStatisticSummaries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingStatisticSummaries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetSamplingStatisticSummariesRequest`](#aws-cdk-sdk.xray.XRayGetSamplingStatisticSummariesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingStatisticSummaries.property.nextToken"></a>

- *Type:* `string`

---

##### `samplingStatisticSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingStatisticSummaries.property.samplingStatisticSummaries"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingStatisticSummary`](#aws-cdk-sdk.xray.XRaySamplingStatisticSummary)[]

---


### XRayResponsesFetchSamplingTargets <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingTargets"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingTargets.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchSamplingTargets(__scope: Construct, __resources: string[], __input: XRayGetSamplingTargetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetSamplingTargetsRequest`](#aws-cdk-sdk.xray.XRayGetSamplingTargetsRequest)

---



#### Properties <a name="Properties"></a>

##### `lastRuleModification`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingTargets.property.lastRuleModification"></a>

- *Type:* `string`

---

##### `samplingTargetDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingTargets.property.samplingTargetDocuments"></a>

- *Type:* [`aws-cdk-sdk.xray.XRaySamplingTargetDocument`](#aws-cdk-sdk.xray.XRaySamplingTargetDocument)[]

---

##### `unprocessedStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchSamplingTargets.property.unprocessedStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUnprocessedStatistics`](#aws-cdk-sdk.xray.XRayUnprocessedStatistics)[]

---


### XRayResponsesFetchServiceGraph <a name="aws-cdk-sdk.xray.XRayResponsesFetchServiceGraph"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchServiceGraph.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchServiceGraph(__scope: Construct, __resources: string[], __input: XRayGetServiceGraphRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchServiceGraph.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchServiceGraph.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchServiceGraph.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetServiceGraphRequest`](#aws-cdk-sdk.xray.XRayGetServiceGraphRequest)

---



#### Properties <a name="Properties"></a>

##### `containsOldGroupVersions`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchServiceGraph.property.containsOldGroupVersions"></a>

- *Type:* `boolean`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchServiceGraph.property.endTime"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchServiceGraph.property.nextToken"></a>

- *Type:* `string`

---

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchServiceGraph.property.services"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayService`](#aws-cdk-sdk.xray.XRayService)[]

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchServiceGraph.property.startTime"></a>

- *Type:* `string`

---


### XRayResponsesFetchTimeSeriesServiceStatistics <a name="aws-cdk-sdk.xray.XRayResponsesFetchTimeSeriesServiceStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchTimeSeriesServiceStatistics.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchTimeSeriesServiceStatistics(__scope: Construct, __resources: string[], __input: XRayGetTimeSeriesServiceStatisticsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTimeSeriesServiceStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTimeSeriesServiceStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTimeSeriesServiceStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest`](#aws-cdk-sdk.xray.XRayGetTimeSeriesServiceStatisticsRequest)

---



#### Properties <a name="Properties"></a>

##### `containsOldGroupVersions`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTimeSeriesServiceStatistics.property.containsOldGroupVersions"></a>

- *Type:* `boolean`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTimeSeriesServiceStatistics.property.nextToken"></a>

- *Type:* `string`

---

##### `timeSeriesServiceStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTimeSeriesServiceStatistics.property.timeSeriesServiceStatistics"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTimeSeriesServiceStatistics`](#aws-cdk-sdk.xray.XRayTimeSeriesServiceStatistics)[]

---


### XRayResponsesFetchTraceGraph <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceGraph"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceGraph.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchTraceGraph(__scope: Construct, __resources: string[], __input: XRayGetTraceGraphRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceGraph.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceGraph.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceGraph.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetTraceGraphRequest`](#aws-cdk-sdk.xray.XRayGetTraceGraphRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceGraph.property.nextToken"></a>

- *Type:* `string`

---

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceGraph.property.services"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayService`](#aws-cdk-sdk.xray.XRayService)[]

---


### XRayResponsesFetchTraceSummaries <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceSummaries"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceSummaries.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesFetchTraceSummaries(__scope: Construct, __resources: string[], __input: XRayGetTraceSummariesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceSummaries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceSummaries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceSummaries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayGetTraceSummariesRequest`](#aws-cdk-sdk.xray.XRayGetTraceSummariesRequest)

---



#### Properties <a name="Properties"></a>

##### `approximateTime`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceSummaries.property.approximateTime"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceSummaries.property.nextToken"></a>

- *Type:* `string`

---

##### `tracesProcessedCount`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceSummaries.property.tracesProcessedCount"></a>

- *Type:* `number`

---

##### `traceSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesFetchTraceSummaries.property.traceSummaries"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTraceSummary`](#aws-cdk-sdk.xray.XRayTraceSummary)[]

---


### XRayResponsesListTagsForResource <a name="aws-cdk-sdk.xray.XRayResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesListTagsForResource.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: XRayListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayListTagsForResourceRequest`](#aws-cdk-sdk.xray.XRayListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayTag`](#aws-cdk-sdk.xray.XRayTag)[]

---


### XRayResponsesPutEncryptionConfig <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfig"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfig.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesPutEncryptionConfig(__scope: Construct, __resources: string[], __input: XRayPutEncryptionConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayPutEncryptionConfigRequest`](#aws-cdk-sdk.xray.XRayPutEncryptionConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfig.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfigEncryptionConfig`](#aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfigEncryptionConfig)

---


### XRayResponsesPutEncryptionConfigEncryptionConfig <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfigEncryptionConfig"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfigEncryptionConfig.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesPutEncryptionConfigEncryptionConfig(__scope: Construct, __resources: string[], __input: XRayPutEncryptionConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfigEncryptionConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfigEncryptionConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfigEncryptionConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayPutEncryptionConfigRequest`](#aws-cdk-sdk.xray.XRayPutEncryptionConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfigEncryptionConfig.property.keyId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfigEncryptionConfig.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutEncryptionConfigEncryptionConfig.property.type"></a>

- *Type:* `string`

---


### XRayResponsesPutTraceSegments <a name="aws-cdk-sdk.xray.XRayResponsesPutTraceSegments"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesPutTraceSegments.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesPutTraceSegments(__scope: Construct, __resources: string[], __input: XRayPutTraceSegmentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutTraceSegments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutTraceSegments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutTraceSegments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayPutTraceSegmentsRequest`](#aws-cdk-sdk.xray.XRayPutTraceSegmentsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedTraceSegments`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesPutTraceSegments.property.unprocessedTraceSegments"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUnprocessedTraceSegment`](#aws-cdk-sdk.xray.XRayUnprocessedTraceSegment)[]

---


### XRayResponsesUpdateGroup <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroup"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroup.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesUpdateGroup(__scope: Construct, __resources: string[], __input: XRayUpdateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUpdateGroupRequest`](#aws-cdk-sdk.xray.XRayUpdateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup`](#aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup)

---


### XRayResponsesUpdateGroupGroup <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesUpdateGroupGroup(__scope: Construct, __resources: string[], __input: XRayUpdateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUpdateGroupRequest`](#aws-cdk-sdk.xray.XRayUpdateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `filterExpression`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup.property.filterExpression"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup.property.groupName"></a>

- *Type:* `string`

---

##### `insightsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroup.property.insightsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroupInsightsConfiguration`](#aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroupInsightsConfiguration)

---


### XRayResponsesUpdateGroupGroupInsightsConfiguration <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroupInsightsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroupInsightsConfiguration.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesUpdateGroupGroupInsightsConfiguration(__scope: Construct, __resources: string[], __input: XRayUpdateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroupInsightsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroupInsightsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroupInsightsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUpdateGroupRequest`](#aws-cdk-sdk.xray.XRayUpdateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `insightsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroupInsightsConfiguration.property.insightsEnabled"></a>

- *Type:* `boolean`

---

##### `notificationsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateGroupGroupInsightsConfiguration.property.notificationsEnabled"></a>

- *Type:* `boolean`

---


### XRayResponsesUpdateSamplingRule <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRule"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRule.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesUpdateSamplingRule(__scope: Construct, __resources: string[], __input: XRayUpdateSamplingRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUpdateSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayUpdateSamplingRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `samplingRuleRecord`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRule.property.samplingRuleRecord"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord`](#aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord)

---


### XRayResponsesUpdateSamplingRuleSamplingRuleRecord <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord(__scope: Construct, __resources: string[], __input: XRayUpdateSamplingRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUpdateSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayUpdateSamplingRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord.property.createdAt"></a>

- *Type:* `string`

---

##### `modifiedAt`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord.property.modifiedAt"></a>

- *Type:* `string`

---

##### `samplingRule`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecord.property.samplingRule"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule`](#aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule)

---


### XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule"></a>

#### Initializer <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.Initializer"></a>

```typescript
import { xray } from 'aws-cdk-sdk'

new xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule(__scope: Construct, __resources: string[], __input: XRayUpdateSamplingRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.xray.XRayUpdateSamplingRuleRequest`](#aws-cdk-sdk.xray.XRayUpdateSamplingRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `fixedRate`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate"></a>

- *Type:* `number`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.host"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.priority"></a>

- *Type:* `number`

---

##### `reservoirSize`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize"></a>

- *Type:* `number`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn"></a>

- *Type:* `string`

---

##### `ruleArn`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.ruleName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceType`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.serviceType"></a>

- *Type:* `string`

---

##### `urlPath`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.urlPath"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.xray.XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule.property.version"></a>

- *Type:* `number`

---



