# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IoTEventsDataClient <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient"></a>

#### Initializer <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

new ioteventsdata.IoTEventsDataClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchPutMessage` <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.batchPutMessage"></a>

```typescript
public batchPutMessage(input: IoTEventsDataBatchPutMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageRequest)

---

##### `batchUpdateDetector` <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.batchUpdateDetector"></a>

```typescript
public batchUpdateDetector(input: IoTEventsDataBatchUpdateDetectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorRequest)

---

##### `describeDetector` <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.describeDetector"></a>

```typescript
public describeDetector(input: IoTEventsDataDescribeDetectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest)

---

##### `listDetectors` <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.listDetectors"></a>

```typescript
public listDetectors(input: IoTEventsDataListDetectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsRequest)

---




## Structs <a name="Structs"></a>

### IoTEventsDataBatchPutMessageErrorEntry <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageErrorEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataBatchPutMessageErrorEntry: ioteventsdata.IoTEventsDataBatchPutMessageErrorEntry = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageErrorEntry.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageErrorEntry.property.errorMessage"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageErrorEntry.property.messageId"></a>

- *Type:* `string`

---

### IoTEventsDataBatchPutMessageRequest <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataBatchPutMessageRequest: ioteventsdata.IoTEventsDataBatchPutMessageRequest = { ... }
```

##### `messages`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageRequest.property.messages"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataMessage`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataMessage)[]

---

### IoTEventsDataBatchPutMessageResponse <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataBatchPutMessageResponse: ioteventsdata.IoTEventsDataBatchPutMessageResponse = { ... }
```

##### `batchPutMessageErrorEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageResponse.property.batchPutMessageErrorEntries"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageErrorEntry`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageErrorEntry)[]

---

### IoTEventsDataBatchUpdateDetectorErrorEntry <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorErrorEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataBatchUpdateDetectorErrorEntry: ioteventsdata.IoTEventsDataBatchUpdateDetectorErrorEntry = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorErrorEntry.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorErrorEntry.property.errorMessage"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorErrorEntry.property.messageId"></a>

- *Type:* `string`

---

### IoTEventsDataBatchUpdateDetectorRequest <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataBatchUpdateDetectorRequest: ioteventsdata.IoTEventsDataBatchUpdateDetectorRequest = { ... }
```

##### `detectors`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorRequest.property.detectors"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataUpdateDetectorRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataUpdateDetectorRequest)[]

---

### IoTEventsDataBatchUpdateDetectorResponse <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataBatchUpdateDetectorResponse: ioteventsdata.IoTEventsDataBatchUpdateDetectorResponse = { ... }
```

##### `batchUpdateDetectorErrorEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorResponse.property.batchUpdateDetectorErrorEntries"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorErrorEntry`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorErrorEntry)[]

---

### IoTEventsDataDescribeDetectorRequest <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataDescribeDetectorRequest: ioteventsdata.IoTEventsDataDescribeDetectorRequest = { ... }
```

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest.property.detectorModelName"></a>

- *Type:* `string`

---

##### `keyValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest.property.keyValue"></a>

- *Type:* `string`

---

### IoTEventsDataDescribeDetectorResponse <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataDescribeDetectorResponse: ioteventsdata.IoTEventsDataDescribeDetectorResponse = { ... }
```

##### `detector`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorResponse.property.detector"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataDetector`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataDetector)

---

### IoTEventsDataDetector <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataDetector: ioteventsdata.IoTEventsDataDetector = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetector.property.creationTime"></a>

- *Type:* `string`

---

##### `detectorModelName`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetector.property.detectorModelName"></a>

- *Type:* `string`

---

##### `detectorModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetector.property.detectorModelVersion"></a>

- *Type:* `string`

---

##### `keyValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetector.property.keyValue"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetector.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetector.property.state"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorState`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorState)

---

### IoTEventsDataDetectorState <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataDetectorState: ioteventsdata.IoTEventsDataDetectorState = { ... }
```

##### `stateName`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorState.property.stateName"></a>

- *Type:* `string`

---

##### `timers`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorState.property.timers"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataTimer`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataTimer)[]

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorState.property.variables"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataVariable`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataVariable)[]

---

### IoTEventsDataDetectorStateDefinition <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorStateDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataDetectorStateDefinition: ioteventsdata.IoTEventsDataDetectorStateDefinition = { ... }
```

##### `stateName`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorStateDefinition.property.stateName"></a>

- *Type:* `string`

---

##### `timers`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorStateDefinition.property.timers"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataTimerDefinition`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataTimerDefinition)[]

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorStateDefinition.property.variables"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataVariableDefinition`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataVariableDefinition)[]

---

### IoTEventsDataDetectorStateSummary <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorStateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataDetectorStateSummary: ioteventsdata.IoTEventsDataDetectorStateSummary = { ... }
```

##### `stateName`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorStateSummary.property.stateName"></a>

- *Type:* `string`

---

### IoTEventsDataDetectorSummary <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataDetectorSummary: ioteventsdata.IoTEventsDataDetectorSummary = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `detectorModelName`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary.property.detectorModelName"></a>

- *Type:* `string`

---

##### `detectorModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary.property.detectorModelVersion"></a>

- *Type:* `string`

---

##### `keyValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary.property.keyValue"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary.property.state"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorStateSummary`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorStateSummary)

---

### IoTEventsDataListDetectorsRequest <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataListDetectorsRequest: ioteventsdata.IoTEventsDataListDetectorsRequest = { ... }
```

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsRequest.property.detectorModelName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `stateName`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsRequest.property.stateName"></a>

- *Type:* `string`

---

### IoTEventsDataListDetectorsResponse <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataListDetectorsResponse: ioteventsdata.IoTEventsDataListDetectorsResponse = { ... }
```

##### `detectorSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsResponse.property.detectorSummaries"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTEventsDataMessage <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataMessage: ioteventsdata.IoTEventsDataMessage = { ... }
```

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataMessage.property.inputName"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataMessage.property.messageId"></a>

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataMessage.property.payload"></a>

- *Type:* `any`

---

### IoTEventsDataTimer <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataTimer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataTimer: ioteventsdata.IoTEventsDataTimer = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataTimer.property.name"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataTimer.property.timestamp"></a>

- *Type:* `string`

---

### IoTEventsDataTimerDefinition <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataTimerDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataTimerDefinition: ioteventsdata.IoTEventsDataTimerDefinition = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataTimerDefinition.property.name"></a>

- *Type:* `string`

---

##### `seconds`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataTimerDefinition.property.seconds"></a>

- *Type:* `number`

---

### IoTEventsDataUpdateDetectorRequest <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataUpdateDetectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataUpdateDetectorRequest: ioteventsdata.IoTEventsDataUpdateDetectorRequest = { ... }
```

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataUpdateDetectorRequest.property.detectorModelName"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataUpdateDetectorRequest.property.messageId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataUpdateDetectorRequest.property.state"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorStateDefinition`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorStateDefinition)

---

##### `keyValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataUpdateDetectorRequest.property.keyValue"></a>

- *Type:* `string`

---

### IoTEventsDataVariable <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataVariable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataVariable: ioteventsdata.IoTEventsDataVariable = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataVariable.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataVariable.property.value"></a>

- *Type:* `string`

---

### IoTEventsDataVariableDefinition <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataVariableDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

const ioTEventsDataVariableDefinition: ioteventsdata.IoTEventsDataVariableDefinition = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataVariableDefinition.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataVariableDefinition.property.value"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### IoTEventsDataResponsesBatchPutMessage <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchPutMessage"></a>

#### Initializer <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchPutMessage.Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

new ioteventsdata.IoTEventsDataResponsesBatchPutMessage(__scope: Construct, __resources: string[], __input: IoTEventsDataBatchPutMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchPutMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchPutMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchPutMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `batchPutMessageErrorEntries`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchPutMessage.property.batchPutMessageErrorEntries"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageErrorEntry`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchPutMessageErrorEntry)[]

---


### IoTEventsDataResponsesBatchUpdateDetector <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchUpdateDetector"></a>

#### Initializer <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchUpdateDetector.Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

new ioteventsdata.IoTEventsDataResponsesBatchUpdateDetector(__scope: Construct, __resources: string[], __input: IoTEventsDataBatchUpdateDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchUpdateDetector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchUpdateDetector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchUpdateDetector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `batchUpdateDetectorErrorEntries`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesBatchUpdateDetector.property.batchUpdateDetectorErrorEntries"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorErrorEntry`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataBatchUpdateDetectorErrorEntry)[]

---


### IoTEventsDataResponsesDescribeDetector <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetector"></a>

#### Initializer <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetector.Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

new ioteventsdata.IoTEventsDataResponsesDescribeDetector(__scope: Construct, __resources: string[], __input: IoTEventsDataDescribeDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `detector`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetector.property.detector"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector)

---


### IoTEventsDataResponsesDescribeDetectorDetector <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector"></a>

#### Initializer <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector.Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

new ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector(__scope: Construct, __resources: string[], __input: IoTEventsDataDescribeDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector.property.creationTime"></a>

- *Type:* `string`

---

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector.property.detectorModelName"></a>

- *Type:* `string`

---

##### `detectorModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector.property.detectorModelVersion"></a>

- *Type:* `string`

---

##### `keyValue`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector.property.keyValue"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetector.property.state"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState)

---


### IoTEventsDataResponsesDescribeDetectorDetectorState <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState"></a>

#### Initializer <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState.Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

new ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState(__scope: Construct, __resources: string[], __input: IoTEventsDataDescribeDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataDescribeDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `stateName`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState.property.stateName"></a>

- *Type:* `string`

---

##### `timers`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState.property.timers"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataTimer`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataTimer)[]

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesDescribeDetectorDetectorState.property.variables"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataVariable`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataVariable)[]

---


### IoTEventsDataResponsesListDetectors <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesListDetectors"></a>

#### Initializer <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesListDetectors.Initializer"></a>

```typescript
import { ioteventsdata } from 'aws-cdk-sdk'

new ioteventsdata.IoTEventsDataResponsesListDetectors(__scope: Construct, __resources: string[], __input: IoTEventsDataListDetectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesListDetectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesListDetectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesListDetectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsRequest`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataListDetectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesListDetectors.property.detectorSummaries"></a>

- *Type:* [`aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary`](#aws-cdk-sdk.ioteventsdata.IoTEventsDataDetectorSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ioteventsdata.IoTEventsDataResponsesListDetectors.property.nextToken"></a>

- *Type:* `string`

---



