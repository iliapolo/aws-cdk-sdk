# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CodeGuruProfilerClient <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addNotificationChannels` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.addNotificationChannels"></a>

```typescript
public addNotificationChannels(input: CodeGuruProfilerAddNotificationChannelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsRequest)

---

##### `batchGetFrameMetricData` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.batchGetFrameMetricData"></a>

```typescript
public batchGetFrameMetricData(input: CodeGuruProfilerBatchGetFrameMetricDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest)

---

##### `configureAgent` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.configureAgent"></a>

```typescript
public configureAgent(input: CodeGuruProfilerConfigureAgentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentRequest)

---

##### `createProfilingGroup` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.createProfilingGroup"></a>

```typescript
public createProfilingGroup(input: CodeGuruProfilerCreateProfilingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest)

---

##### `deleteProfilingGroup` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.deleteProfilingGroup"></a>

```typescript
public deleteProfilingGroup(input: CodeGuruProfilerDeleteProfilingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDeleteProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDeleteProfilingGroupRequest)

---

##### `describeProfilingGroup` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.describeProfilingGroup"></a>

```typescript
public describeProfilingGroup(input: CodeGuruProfilerDescribeProfilingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest)

---

##### `fetchFindingsReportAccountSummary` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.fetchFindingsReportAccountSummary"></a>

```typescript
public fetchFindingsReportAccountSummary(input: CodeGuruProfilerGetFindingsReportAccountSummaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryRequest)

---

##### `fetchNotificationConfiguration` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.fetchNotificationConfiguration"></a>

```typescript
public fetchNotificationConfiguration(input: CodeGuruProfilerGetNotificationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationRequest)

---

##### `fetchPolicy` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.fetchPolicy"></a>

```typescript
public fetchPolicy(input: CodeGuruProfilerGetPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetPolicyRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetPolicyRequest)

---

##### `fetchProfile` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.fetchProfile"></a>

```typescript
public fetchProfile(input: CodeGuruProfilerGetProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest)

---

##### `fetchRecommendations` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.fetchRecommendations"></a>

```typescript
public fetchRecommendations(input: CodeGuruProfilerGetRecommendationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsRequest)

---

##### `listFindingsReports` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.listFindingsReports"></a>

```typescript
public listFindingsReports(input: CodeGuruProfilerListFindingsReportsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest)

---

##### `listProfileTimes` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.listProfileTimes"></a>

```typescript
public listProfileTimes(input: CodeGuruProfilerListProfileTimesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest)

---

##### `listProfilingGroups` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.listProfilingGroups"></a>

```typescript
public listProfilingGroups(input: CodeGuruProfilerListProfilingGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CodeGuruProfilerListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListTagsForResourceRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListTagsForResourceRequest)

---

##### `postAgentProfile` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.postAgentProfile"></a>

```typescript
public postAgentProfile(input: CodeGuruProfilerPostAgentProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPostAgentProfileRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPostAgentProfileRequest)

---

##### `putPermission` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.putPermission"></a>

```typescript
public putPermission(input: CodeGuruProfilerPutPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionRequest)

---

##### `removeNotificationChannel` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.removeNotificationChannel"></a>

```typescript
public removeNotificationChannel(input: CodeGuruProfilerRemoveNotificationChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelRequest)

---

##### `removePermission` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.removePermission"></a>

```typescript
public removePermission(input: CodeGuruProfilerRemovePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionRequest)

---

##### `submitFeedback` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.submitFeedback"></a>

```typescript
public submitFeedback(input: CodeGuruProfilerSubmitFeedbackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerSubmitFeedbackRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerSubmitFeedbackRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.tagResource"></a>

```typescript
public tagResource(input: CodeGuruProfilerTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTagResourceRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.untagResource"></a>

```typescript
public untagResource(input: CodeGuruProfilerUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUntagResourceRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUntagResourceRequest)

---

##### `updateProfilingGroup` <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.updateProfilingGroup"></a>

```typescript
public updateProfilingGroup(input: CodeGuruProfilerUpdateProfilingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest)

---




## Structs <a name="Structs"></a>

### CodeGuruProfilerAddNotificationChannelsRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerAddNotificationChannelsRequest: codeguruprofiler.CodeGuruProfilerAddNotificationChannelsRequest = { ... }
```

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsRequest.property.channels"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel)[]

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

### CodeGuruProfilerAddNotificationChannelsResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerAddNotificationChannelsResponse: codeguruprofiler.CodeGuruProfilerAddNotificationChannelsResponse = { ... }
```

##### `notificationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsResponse.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerNotificationConfiguration`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerNotificationConfiguration)

---

### CodeGuruProfilerAgentConfiguration <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerAgentConfiguration: codeguruprofiler.CodeGuruProfilerAgentConfiguration = { ... }
```

##### `periodInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentConfiguration.property.periodInSeconds"></a>

- *Type:* `number`

---

##### `shouldProfile`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentConfiguration.property.shouldProfile"></a>

- *Type:* `boolean`

---

##### `agentParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentConfiguration.property.agentParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruProfilerAgentOrchestrationConfig <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentOrchestrationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerAgentOrchestrationConfig: codeguruprofiler.CodeGuruProfilerAgentOrchestrationConfig = { ... }
```

##### `profilingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentOrchestrationConfig.property.profilingEnabled"></a>

- *Type:* `boolean`

---

### CodeGuruProfilerAggregatedProfileTime <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAggregatedProfileTime"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerAggregatedProfileTime: codeguruprofiler.CodeGuruProfilerAggregatedProfileTime = { ... }
```

##### `period`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAggregatedProfileTime.property.period"></a>

- *Type:* `string`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAggregatedProfileTime.property.start"></a>

- *Type:* `string`

---

### CodeGuruProfilerAnomaly <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomaly"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerAnomaly: codeguruprofiler.CodeGuruProfilerAnomaly = { ... }
```

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomaly.property.instances"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomalyInstance`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomalyInstance)[]

---

##### `metric`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomaly.property.metric"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMetric`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMetric)

---

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomaly.property.reason"></a>

- *Type:* `string`

---

### CodeGuruProfilerAnomalyInstance <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomalyInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerAnomalyInstance: codeguruprofiler.CodeGuruProfilerAnomalyInstance = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomalyInstance.property.id"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomalyInstance.property.startTime"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomalyInstance.property.endTime"></a>

- *Type:* `string`

---

##### `userFeedback`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomalyInstance.property.userFeedback"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUserFeedback`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUserFeedback)

---

### CodeGuruProfilerBatchGetFrameMetricDataRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerBatchGetFrameMetricDataRequest: codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest = { ... }
```

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest.property.endTime"></a>

- *Type:* `string`

---

##### `frameMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest.property.frameMetrics"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetric`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetric)[]

---

##### `period`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest.property.period"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest.property.startTime"></a>

- *Type:* `string`

---

##### `targetResolution`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest.property.targetResolution"></a>

- *Type:* `string`

---

### CodeGuruProfilerBatchGetFrameMetricDataResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerBatchGetFrameMetricDataResponse: codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataResponse = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataResponse.property.endTime"></a>

- *Type:* `string`

---

##### `endTimes`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataResponse.property.endTimes"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTimestampStructure`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTimestampStructure)[]

---

##### `frameMetricData`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataResponse.property.frameMetricData"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetricDatum`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetricDatum)[]

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataResponse.property.resolution"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataResponse.property.startTime"></a>

- *Type:* `string`

---

##### `unprocessedEndTimes`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataResponse.property.unprocessedEndTimes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTimestampStructure`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTimestampStructure)[]}

---

### CodeGuruProfilerChannel <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerChannel: codeguruprofiler.CodeGuruProfilerChannel = { ... }
```

##### `eventPublishers`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel.property.eventPublishers"></a>

- *Type:* `string`[]

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel.property.uri"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel.property.id"></a>

- *Type:* `string`

---

### CodeGuruProfilerConfigureAgentRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerConfigureAgentRequest: codeguruprofiler.CodeGuruProfilerConfigureAgentRequest = { ... }
```

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `fleetInstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentRequest.property.fleetInstanceId"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentRequest.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruProfilerConfigureAgentResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerConfigureAgentResponse: codeguruprofiler.CodeGuruProfilerConfigureAgentResponse = { ... }
```

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentResponse.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentConfiguration`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentConfiguration)

---

### CodeGuruProfilerCreateProfilingGroupRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerCreateProfilingGroupRequest: codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `agentOrchestrationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest.property.agentOrchestrationConfig"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentOrchestrationConfig`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentOrchestrationConfig)

---

##### `computePlatform`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest.property.computePlatform"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruProfilerCreateProfilingGroupResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerCreateProfilingGroupResponse: codeguruprofiler.CodeGuruProfilerCreateProfilingGroupResponse = { ... }
```

##### `profilingGroup`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupResponse.property.profilingGroup"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription)

---

### CodeGuruProfilerDeleteProfilingGroupRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDeleteProfilingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerDeleteProfilingGroupRequest: codeguruprofiler.CodeGuruProfilerDeleteProfilingGroupRequest = { ... }
```

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDeleteProfilingGroupRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

### CodeGuruProfilerDeleteProfilingGroupResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDeleteProfilingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerDeleteProfilingGroupResponse: codeguruprofiler.CodeGuruProfilerDeleteProfilingGroupResponse = { ... }
```

### CodeGuruProfilerDescribeProfilingGroupRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerDescribeProfilingGroupRequest: codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest = { ... }
```

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

### CodeGuruProfilerDescribeProfilingGroupResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerDescribeProfilingGroupResponse: codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupResponse = { ... }
```

##### `profilingGroup`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupResponse.property.profilingGroup"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription)

---

### CodeGuruProfilerFindingsReportSummary <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerFindingsReportSummary: codeguruprofiler.CodeGuruProfilerFindingsReportSummary = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary.property.id"></a>

- *Type:* `string`

---

##### `profileEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary.property.profileEndTime"></a>

- *Type:* `string`

---

##### `profileStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary.property.profileStartTime"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `totalNumberOfFindings`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary.property.totalNumberOfFindings"></a>

- *Type:* `number`

---

### CodeGuruProfilerFrameMetric <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetric"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerFrameMetric: codeguruprofiler.CodeGuruProfilerFrameMetric = { ... }
```

##### `frameName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetric.property.frameName"></a>

- *Type:* `string`

---

##### `threadStates`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetric.property.threadStates"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetric.property.type"></a>

- *Type:* `string`

---

### CodeGuruProfilerFrameMetricDatum <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetricDatum"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerFrameMetricDatum: codeguruprofiler.CodeGuruProfilerFrameMetricDatum = { ... }
```

##### `frameMetric`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetricDatum.property.frameMetric"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetric`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetric)

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetricDatum.property.values"></a>

- *Type:* `number`[]

---

### CodeGuruProfilerGetFindingsReportAccountSummaryRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerGetFindingsReportAccountSummaryRequest: codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryRequest = { ... }
```

##### `dailyReportsOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryRequest.property.dailyReportsOnly"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeGuruProfilerGetFindingsReportAccountSummaryResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerGetFindingsReportAccountSummaryResponse: codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryResponse = { ... }
```

##### `reportSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryResponse.property.reportSummaries"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryResponse.property.nextToken"></a>

- *Type:* `string`

---

### CodeGuruProfilerGetNotificationConfigurationRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerGetNotificationConfigurationRequest: codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationRequest = { ... }
```

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

### CodeGuruProfilerGetNotificationConfigurationResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerGetNotificationConfigurationResponse: codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationResponse = { ... }
```

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationResponse.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerNotificationConfiguration`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerNotificationConfiguration)

---

### CodeGuruProfilerGetPolicyRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerGetPolicyRequest: codeguruprofiler.CodeGuruProfilerGetPolicyRequest = { ... }
```

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetPolicyRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

### CodeGuruProfilerGetPolicyResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerGetPolicyResponse: codeguruprofiler.CodeGuruProfilerGetPolicyResponse = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetPolicyResponse.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetPolicyResponse.property.revisionId"></a>

- *Type:* `string`

---

### CodeGuruProfilerGetProfileRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerGetProfileRequest: codeguruprofiler.CodeGuruProfilerGetProfileRequest = { ... }
```

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `accept`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest.property.accept"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest.property.endTime"></a>

- *Type:* `string`

---

##### `maxDepth`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest.property.maxDepth"></a>

- *Type:* `number`

---

##### `period`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest.property.period"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest.property.startTime"></a>

- *Type:* `string`

---

### CodeGuruProfilerGetProfileResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerGetProfileResponse: codeguruprofiler.CodeGuruProfilerGetProfileResponse = { ... }
```

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileResponse.property.contentType"></a>

- *Type:* `string`

---

##### `profile`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileResponse.property.profile"></a>

- *Type:* `any`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileResponse.property.contentEncoding"></a>

- *Type:* `string`

---

### CodeGuruProfilerGetRecommendationsRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerGetRecommendationsRequest: codeguruprofiler.CodeGuruProfilerGetRecommendationsRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsRequest.property.startTime"></a>

- *Type:* `string`

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsRequest.property.locale"></a>

- *Type:* `string`

---

### CodeGuruProfilerGetRecommendationsResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerGetRecommendationsResponse: codeguruprofiler.CodeGuruProfilerGetRecommendationsResponse = { ... }
```

##### `anomalies`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsResponse.property.anomalies"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomaly`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomaly)[]

---

##### `profileEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsResponse.property.profileEndTime"></a>

- *Type:* `string`

---

##### `profileStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsResponse.property.profileStartTime"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsResponse.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `recommendations`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsResponse.property.recommendations"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation)[]

---

### CodeGuruProfilerListFindingsReportsRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerListFindingsReportsRequest: codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest.property.startTime"></a>

- *Type:* `string`

---

##### `dailyReportsOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest.property.dailyReportsOnly"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeGuruProfilerListFindingsReportsResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerListFindingsReportsResponse: codeguruprofiler.CodeGuruProfilerListFindingsReportsResponse = { ... }
```

##### `findingsReportSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsResponse.property.findingsReportSummaries"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsResponse.property.nextToken"></a>

- *Type:* `string`

---

### CodeGuruProfilerListProfileTimesRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerListProfileTimesRequest: codeguruprofiler.CodeGuruProfilerListProfileTimesRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest.property.endTime"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest.property.period"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest.property.startTime"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest.property.orderBy"></a>

- *Type:* `string`

---

### CodeGuruProfilerListProfileTimesResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerListProfileTimesResponse: codeguruprofiler.CodeGuruProfilerListProfileTimesResponse = { ... }
```

##### `profileTimes`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesResponse.property.profileTimes"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfileTime`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfileTime)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CodeGuruProfilerListProfilingGroupsRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerListProfilingGroupsRequest: codeguruprofiler.CodeGuruProfilerListProfilingGroupsRequest = { ... }
```

##### `includeDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsRequest.property.includeDescription"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeGuruProfilerListProfilingGroupsResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerListProfilingGroupsResponse: codeguruprofiler.CodeGuruProfilerListProfilingGroupsResponse = { ... }
```

##### `profilingGroupNames`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsResponse.property.profilingGroupNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `profilingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsResponse.property.profilingGroups"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription)[]

---

### CodeGuruProfilerListTagsForResourceRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerListTagsForResourceRequest: codeguruprofiler.CodeGuruProfilerListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### CodeGuruProfilerListTagsForResourceResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerListTagsForResourceResponse: codeguruprofiler.CodeGuruProfilerListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruProfilerMatch <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerMatch: codeguruprofiler.CodeGuruProfilerMatch = { ... }
```

##### `frameAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMatch.property.frameAddress"></a>

- *Type:* `string`

---

##### `targetFramesIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMatch.property.targetFramesIndex"></a>

- *Type:* `number`

---

##### `thresholdBreachValue`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMatch.property.thresholdBreachValue"></a>

- *Type:* `number`

---

### CodeGuruProfilerMetric <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMetric"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerMetric: codeguruprofiler.CodeGuruProfilerMetric = { ... }
```

##### `frameName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMetric.property.frameName"></a>

- *Type:* `string`

---

##### `threadStates`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMetric.property.threadStates"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMetric.property.type"></a>

- *Type:* `string`

---

### CodeGuruProfilerNotificationConfiguration <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerNotificationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerNotificationConfiguration: codeguruprofiler.CodeGuruProfilerNotificationConfiguration = { ... }
```

##### `channels`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerNotificationConfiguration.property.channels"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel)[]

---

### CodeGuruProfilerPattern <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPattern"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerPattern: codeguruprofiler.CodeGuruProfilerPattern = { ... }
```

##### `countersToAggregate`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPattern.property.countersToAggregate"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPattern.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPattern.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPattern.property.name"></a>

- *Type:* `string`

---

##### `resolutionSteps`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPattern.property.resolutionSteps"></a>

- *Type:* `string`

---

##### `targetFrames`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPattern.property.targetFrames"></a>

- *Type:* `string`[][]

---

##### `thresholdPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPattern.property.thresholdPercent"></a>

- *Type:* `number`

---

### CodeGuruProfilerPostAgentProfileRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPostAgentProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerPostAgentProfileRequest: codeguruprofiler.CodeGuruProfilerPostAgentProfileRequest = { ... }
```

##### `agentProfile`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPostAgentProfileRequest.property.agentProfile"></a>

- *Type:* `any`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPostAgentProfileRequest.property.contentType"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPostAgentProfileRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `profileToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPostAgentProfileRequest.property.profileToken"></a>

- *Type:* `string`

---

### CodeGuruProfilerPostAgentProfileResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPostAgentProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerPostAgentProfileResponse: codeguruprofiler.CodeGuruProfilerPostAgentProfileResponse = { ... }
```

### CodeGuruProfilerProfileTime <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfileTime"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerProfileTime: codeguruprofiler.CodeGuruProfilerProfileTime = { ... }
```

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfileTime.property.start"></a>

- *Type:* `string`

---

### CodeGuruProfilerProfilingGroupDescription <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerProfilingGroupDescription: codeguruprofiler.CodeGuruProfilerProfilingGroupDescription = { ... }
```

##### `agentOrchestrationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription.property.agentOrchestrationConfig"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentOrchestrationConfig`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentOrchestrationConfig)

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription.property.arn"></a>

- *Type:* `string`

---

##### `computePlatform`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription.property.computePlatform"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription.property.createdAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription.property.name"></a>

- *Type:* `string`

---

##### `profilingStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription.property.profilingStatus"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingStatus`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingStatus)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription.property.updatedAt"></a>

- *Type:* `string`

---

### CodeGuruProfilerProfilingStatus <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerProfilingStatus: codeguruprofiler.CodeGuruProfilerProfilingStatus = { ... }
```

##### `latestAgentOrchestratedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingStatus.property.latestAgentOrchestratedAt"></a>

- *Type:* `string`

---

##### `latestAgentProfileReportedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingStatus.property.latestAgentProfileReportedAt"></a>

- *Type:* `string`

---

##### `latestAggregatedProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingStatus.property.latestAggregatedProfile"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAggregatedProfileTime`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAggregatedProfileTime)

---

### CodeGuruProfilerPutPermissionRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerPutPermissionRequest: codeguruprofiler.CodeGuruProfilerPutPermissionRequest = { ... }
```

##### `actionGroup`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionRequest.property.actionGroup"></a>

- *Type:* `string`

---

##### `principals`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionRequest.property.principals"></a>

- *Type:* `string`[]

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionRequest.property.revisionId"></a>

- *Type:* `string`

---

### CodeGuruProfilerPutPermissionResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerPutPermissionResponse: codeguruprofiler.CodeGuruProfilerPutPermissionResponse = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionResponse.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionResponse.property.revisionId"></a>

- *Type:* `string`

---

### CodeGuruProfilerRecommendation <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerRecommendation: codeguruprofiler.CodeGuruProfilerRecommendation = { ... }
```

##### `allMatchesCount`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation.property.allMatchesCount"></a>

- *Type:* `number`

---

##### `allMatchesSum`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation.property.allMatchesSum"></a>

- *Type:* `number`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation.property.endTime"></a>

- *Type:* `string`

---

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation.property.pattern"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPattern`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPattern)

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation.property.startTime"></a>

- *Type:* `string`

---

##### `topMatches`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation.property.topMatches"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMatch`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerMatch)[]

---

### CodeGuruProfilerRemoveNotificationChannelRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerRemoveNotificationChannelRequest: codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelRequest = { ... }
```

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelRequest.property.channelId"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

### CodeGuruProfilerRemoveNotificationChannelResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerRemoveNotificationChannelResponse: codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelResponse = { ... }
```

##### `notificationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelResponse.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerNotificationConfiguration`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerNotificationConfiguration)

---

### CodeGuruProfilerRemovePermissionRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerRemovePermissionRequest: codeguruprofiler.CodeGuruProfilerRemovePermissionRequest = { ... }
```

##### `actionGroup`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionRequest.property.actionGroup"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionRequest.property.revisionId"></a>

- *Type:* `string`

---

### CodeGuruProfilerRemovePermissionResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerRemovePermissionResponse: codeguruprofiler.CodeGuruProfilerRemovePermissionResponse = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionResponse.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionResponse.property.revisionId"></a>

- *Type:* `string`

---

### CodeGuruProfilerSubmitFeedbackRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerSubmitFeedbackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerSubmitFeedbackRequest: codeguruprofiler.CodeGuruProfilerSubmitFeedbackRequest = { ... }
```

##### `anomalyInstanceId`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerSubmitFeedbackRequest.property.anomalyInstanceId"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerSubmitFeedbackRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerSubmitFeedbackRequest.property.type"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerSubmitFeedbackRequest.property.comment"></a>

- *Type:* `string`

---

### CodeGuruProfilerSubmitFeedbackResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerSubmitFeedbackResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerSubmitFeedbackResponse: codeguruprofiler.CodeGuruProfilerSubmitFeedbackResponse = { ... }
```

### CodeGuruProfilerTagResourceRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerTagResourceRequest: codeguruprofiler.CodeGuruProfilerTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruProfilerTagResourceResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerTagResourceResponse: codeguruprofiler.CodeGuruProfilerTagResourceResponse = { ... }
```

### CodeGuruProfilerTimestampStructure <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTimestampStructure"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerTimestampStructure: codeguruprofiler.CodeGuruProfilerTimestampStructure = { ... }
```

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTimestampStructure.property.value"></a>

- *Type:* `string`

---

### CodeGuruProfilerUntagResourceRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerUntagResourceRequest: codeguruprofiler.CodeGuruProfilerUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### CodeGuruProfilerUntagResourceResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerUntagResourceResponse: codeguruprofiler.CodeGuruProfilerUntagResourceResponse = { ... }
```

### CodeGuruProfilerUpdateProfilingGroupRequest <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerUpdateProfilingGroupRequest: codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest = { ... }
```

##### `agentOrchestrationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest.property.agentOrchestrationConfig"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentOrchestrationConfig`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAgentOrchestrationConfig)

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest.property.profilingGroupName"></a>

- *Type:* `string`

---

### CodeGuruProfilerUpdateProfilingGroupResponse <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerUpdateProfilingGroupResponse: codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupResponse = { ... }
```

##### `profilingGroup`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupResponse.property.profilingGroup"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription)

---

### CodeGuruProfilerUserFeedback <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUserFeedback"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

const codeGuruProfilerUserFeedback: codeguruprofiler.CodeGuruProfilerUserFeedback = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUserFeedback.property.type"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### CodeGuruProfilerResponsesAddNotificationChannels <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannels"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannels.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannels(__scope: Construct, __resources: string[], __input: CodeGuruProfilerAddNotificationChannelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsRequest)

---



#### Properties <a name="Properties"></a>

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannels.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration)

---


### CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration(__scope: Construct, __resources: string[], __input: CodeGuruProfilerAddNotificationChannelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAddNotificationChannelsRequest)

---



#### Properties <a name="Properties"></a>

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration.property.channels"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel)[]

---


### CodeGuruProfilerResponsesBatchGetFrameMetricData <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData(__scope: Construct, __resources: string[], __input: CodeGuruProfilerBatchGetFrameMetricDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerBatchGetFrameMetricDataRequest)

---



#### Properties <a name="Properties"></a>

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData.property.endTime"></a>

- *Type:* `string`

---

##### `endTimes`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData.property.endTimes"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTimestampStructure`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTimestampStructure)[]

---

##### `frameMetricData`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData.property.frameMetricData"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetricDatum`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFrameMetricDatum)[]

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData.property.resolution"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData.property.startTime"></a>

- *Type:* `string`

---

##### `unprocessedEndTimes`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesBatchGetFrameMetricData.property.unprocessedEndTimes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTimestampStructure`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerTimestampStructure)[]}

---


### CodeGuruProfilerResponsesConfigureAgent <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgent"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgent.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesConfigureAgent(__scope: Construct, __resources: string[], __input: CodeGuruProfilerConfigureAgentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentRequest)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgent.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration)

---


### CodeGuruProfilerResponsesConfigureAgentConfiguration <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration(__scope: Construct, __resources: string[], __input: CodeGuruProfilerConfigureAgentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerConfigureAgentRequest)

---



#### Properties <a name="Properties"></a>

##### `agentParameters`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration.property.agentParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `periodInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration.property.periodInSeconds"></a>

- *Type:* `number`

---

##### `shouldProfile`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesConfigureAgentConfiguration.property.shouldProfile"></a>

- *Type:* `boolean`

---


### CodeGuruProfilerResponsesCreateProfilingGroup <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroup.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroup(__scope: Construct, __resources: string[], __input: CodeGuruProfilerCreateProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `profilingGroup`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroup.property.profilingGroup"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup)

---


### CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup(__scope: Construct, __resources: string[], __input: CodeGuruProfilerCreateProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `agentOrchestrationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.property.agentOrchestrationConfig"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.property.arn"></a>

- *Type:* `string`

---

##### `computePlatform`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.property.computePlatform"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.property.createdAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.property.name"></a>

- *Type:* `string`

---

##### `profilingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.property.profilingStatus"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup.property.updatedAt"></a>

- *Type:* `string`

---


### CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig(__scope: Construct, __resources: string[], __input: CodeGuruProfilerCreateProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `profilingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig.property.profilingEnabled"></a>

- *Type:* `boolean`

---


### CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus(__scope: Construct, __resources: string[], __input: CodeGuruProfilerCreateProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `latestAgentOrchestratedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus.property.latestAgentOrchestratedAt"></a>

- *Type:* `string`

---

##### `latestAgentProfileReportedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus.property.latestAgentProfileReportedAt"></a>

- *Type:* `string`

---

##### `latestAggregatedProfile`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus.property.latestAggregatedProfile"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile)

---


### CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile(__scope: Construct, __resources: string[], __input: CodeGuruProfilerCreateProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerCreateProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.property.period"></a>

- *Type:* `string`

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.property.start"></a>

- *Type:* `string`

---


### CodeGuruProfilerResponsesDescribeProfilingGroup <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroup.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroup(__scope: Construct, __resources: string[], __input: CodeGuruProfilerDescribeProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `profilingGroup`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroup.property.profilingGroup"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup)

---


### CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup(__scope: Construct, __resources: string[], __input: CodeGuruProfilerDescribeProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `agentOrchestrationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.property.agentOrchestrationConfig"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.property.arn"></a>

- *Type:* `string`

---

##### `computePlatform`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.property.computePlatform"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.property.createdAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.property.name"></a>

- *Type:* `string`

---

##### `profilingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.property.profilingStatus"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup.property.updatedAt"></a>

- *Type:* `string`

---


### CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig(__scope: Construct, __resources: string[], __input: CodeGuruProfilerDescribeProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `profilingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig.property.profilingEnabled"></a>

- *Type:* `boolean`

---


### CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus(__scope: Construct, __resources: string[], __input: CodeGuruProfilerDescribeProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `latestAgentOrchestratedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus.property.latestAgentOrchestratedAt"></a>

- *Type:* `string`

---

##### `latestAgentProfileReportedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus.property.latestAgentProfileReportedAt"></a>

- *Type:* `string`

---

##### `latestAggregatedProfile`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus.property.latestAggregatedProfile"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile)

---


### CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile(__scope: Construct, __resources: string[], __input: CodeGuruProfilerDescribeProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerDescribeProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.property.period"></a>

- *Type:* `string`

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.property.start"></a>

- *Type:* `string`

---


### CodeGuruProfilerResponsesFetchFindingsReportAccountSummary <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchFindingsReportAccountSummary"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchFindingsReportAccountSummary.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesFetchFindingsReportAccountSummary(__scope: Construct, __resources: string[], __input: CodeGuruProfilerGetFindingsReportAccountSummaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchFindingsReportAccountSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchFindingsReportAccountSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchFindingsReportAccountSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetFindingsReportAccountSummaryRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchFindingsReportAccountSummary.property.nextToken"></a>

- *Type:* `string`

---

##### `reportSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchFindingsReportAccountSummary.property.reportSummaries"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary)[]

---


### CodeGuruProfilerResponsesFetchNotificationConfiguration <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfiguration.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfiguration(__scope: Construct, __resources: string[], __input: CodeGuruProfilerGetNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfiguration.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration)

---


### CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration(__scope: Construct, __resources: string[], __input: CodeGuruProfilerGetNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration.property.channels"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel)[]

---


### CodeGuruProfilerResponsesFetchPolicy <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchPolicy.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesFetchPolicy(__scope: Construct, __resources: string[], __input: CodeGuruProfilerGetPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetPolicyRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchPolicy.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchPolicy.property.revisionId"></a>

- *Type:* `string`

---


### CodeGuruProfilerResponsesFetchProfile <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchProfile"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchProfile.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesFetchProfile(__scope: Construct, __resources: string[], __input: CodeGuruProfilerGetProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `contentEncoding`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchProfile.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchProfile.property.contentType"></a>

- *Type:* `string`

---

##### `profile`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchProfile.property.profile"></a>

- *Type:* `any`

---


### CodeGuruProfilerResponsesFetchRecommendations <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations(__scope: Construct, __resources: string[], __input: CodeGuruProfilerGetRecommendationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerGetRecommendationsRequest)

---



#### Properties <a name="Properties"></a>

##### `anomalies`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations.property.anomalies"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomaly`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerAnomaly)[]

---

##### `profileEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations.property.profileEndTime"></a>

- *Type:* `string`

---

##### `profileStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations.property.profileStartTime"></a>

- *Type:* `string`

---

##### `profilingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations.property.profilingGroupName"></a>

- *Type:* `string`

---

##### `recommendations`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesFetchRecommendations.property.recommendations"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRecommendation)[]

---


### CodeGuruProfilerResponsesListFindingsReports <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListFindingsReports"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListFindingsReports.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesListFindingsReports(__scope: Construct, __resources: string[], __input: CodeGuruProfilerListFindingsReportsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListFindingsReports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListFindingsReports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListFindingsReports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListFindingsReportsRequest)

---



#### Properties <a name="Properties"></a>

##### `findingsReportSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListFindingsReports.property.findingsReportSummaries"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerFindingsReportSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListFindingsReports.property.nextToken"></a>

- *Type:* `string`

---


### CodeGuruProfilerResponsesListProfileTimes <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfileTimes"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfileTimes.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesListProfileTimes(__scope: Construct, __resources: string[], __input: CodeGuruProfilerListProfileTimesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfileTimes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfileTimes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfileTimes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfileTimesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfileTimes.property.nextToken"></a>

- *Type:* `string`

---

##### `profileTimes`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfileTimes.property.profileTimes"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfileTime`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfileTime)[]

---


### CodeGuruProfilerResponsesListProfilingGroups <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfilingGroups"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfilingGroups.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesListProfilingGroups(__scope: Construct, __resources: string[], __input: CodeGuruProfilerListProfilingGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfilingGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfilingGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfilingGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListProfilingGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfilingGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `profilingGroupNames`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfilingGroups.property.profilingGroupNames"></a>

- *Type:* `string`[]

---

##### `profilingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListProfilingGroups.property.profilingGroups"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerProfilingGroupDescription)[]

---


### CodeGuruProfilerResponsesListTagsForResource <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListTagsForResource.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CodeGuruProfilerListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListTagsForResourceRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodeGuruProfilerResponsesPutPermission <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesPutPermission"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesPutPermission.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesPutPermission(__scope: Construct, __resources: string[], __input: CodeGuruProfilerPutPermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesPutPermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesPutPermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesPutPermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerPutPermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesPutPermission.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesPutPermission.property.revisionId"></a>

- *Type:* `string`

---


### CodeGuruProfilerResponsesRemoveNotificationChannel <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannel"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannel.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannel(__scope: Construct, __resources: string[], __input: CodeGuruProfilerRemoveNotificationChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannel.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration)

---


### CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration(__scope: Construct, __resources: string[], __input: CodeGuruProfilerRemoveNotificationChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemoveNotificationChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration.property.channels"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerChannel)[]

---


### CodeGuruProfilerResponsesRemovePermission <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemovePermission"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemovePermission.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesRemovePermission(__scope: Construct, __resources: string[], __input: CodeGuruProfilerRemovePermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemovePermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemovePermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemovePermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerRemovePermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemovePermission.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesRemovePermission.property.revisionId"></a>

- *Type:* `string`

---


### CodeGuruProfilerResponsesUpdateProfilingGroup <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroup.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroup(__scope: Construct, __resources: string[], __input: CodeGuruProfilerUpdateProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `profilingGroup`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroup.property.profilingGroup"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup)

---


### CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup(__scope: Construct, __resources: string[], __input: CodeGuruProfilerUpdateProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `agentOrchestrationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.property.agentOrchestrationConfig"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.property.arn"></a>

- *Type:* `string`

---

##### `computePlatform`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.property.computePlatform"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.property.createdAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.property.name"></a>

- *Type:* `string`

---

##### `profilingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.property.profilingStatus"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup.property.updatedAt"></a>

- *Type:* `string`

---


### CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig(__scope: Construct, __resources: string[], __input: CodeGuruProfilerUpdateProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `profilingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig.property.profilingEnabled"></a>

- *Type:* `boolean`

---


### CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus(__scope: Construct, __resources: string[], __input: CodeGuruProfilerUpdateProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `latestAgentOrchestratedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus.property.latestAgentOrchestratedAt"></a>

- *Type:* `string`

---

##### `latestAgentProfileReportedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus.property.latestAgentProfileReportedAt"></a>

- *Type:* `string`

---

##### `latestAggregatedProfile`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus.property.latestAggregatedProfile"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile)

---


### CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile"></a>

#### Initializer <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.Initializer"></a>

```typescript
import { codeguruprofiler } from 'aws-cdk-sdk'

new codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile(__scope: Construct, __resources: string[], __input: CodeGuruProfilerUpdateProfilingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest`](#aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerUpdateProfilingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.property.period"></a>

- *Type:* `string`

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.codeguruprofiler.CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile.property.start"></a>

- *Type:* `string`

---



